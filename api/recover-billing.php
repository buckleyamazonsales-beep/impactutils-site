<?php
require_once __DIR__ . '/stripe-billing.php';

impact_billing_begin_json_endpoint();

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    lemon_json_exit(405, ['error' => 'Method not allowed.']);
}

$c = impact_stripe_config();
$sk = trim((string)($c['STRIPE_SECRET_KEY'] ?? ''));
$pricePro = trim((string)($c['STRIPE_PRICE_PRO'] ?? ''));
$priceFounder = trim((string)($c['STRIPE_PRICE_FOUNDER'] ?? ''));

if ($sk === '' || $pricePro === '' || $priceFounder === '') {
    lemon_json_exit(503, ['error' => 'Stripe is not configured.']);
}

$raw = file_get_contents('php://input');
$payload = json_decode($raw ?: '{}', true);
if (!is_array($payload)) {
    lemon_json_exit(400, ['error' => 'Invalid JSON body.']);
}

$email = strtolower(trim((string)($payload['email'] ?? '')));
if ($email === '' || strpos($email, '@') === false) {
    lemon_json_exit(400, ['error' => 'A valid email is required.']);
}

$sessionId = trim((string)($payload['sessionId'] ?? ''));

$empty = [
    'plan' => 'free',
    'billing' => 'stripe',
    'stripeSubscriptionId' => '',
    'stripeCustomerId' => '',
    'currentPeriodEnd' => null,
];

function stripe_emails_match($a, $b) {
    return strtolower(trim((string)$a)) === strtolower(trim((string)$b));
}

try {
    if ($sessionId !== '') {
        $q = 'expand[]=subscription&expand[]=line_items';
        [$sc, $sess] = stripe_api_request($sk, 'GET', '/checkout/sessions/' . rawurlencode($sessionId) . '?' . $q, []);

        if ($sc < 200 || $sc >= 300 || empty($sess['id'])) {
            lemon_json_exit(200, $empty);
        }

        $metaEmail = strtolower(trim((string)($sess['metadata']['impact_email'] ?? '')));
        $custEmail = strtolower(trim((string)($sess['customer_email'] ?? '')));
        $detailsEmail = strtolower(trim((string)($sess['customer_details']['email'] ?? '')));
        if (!stripe_emails_match($email, $metaEmail) && !stripe_emails_match($email, $custEmail) && !stripe_emails_match($email, $detailsEmail)) {
            lemon_json_exit(200, $empty);
        }

        $paymentStatus = (string)($sess['payment_status'] ?? '');
        $mode = (string)($sess['mode'] ?? '');
        $customerId = (string)($sess['customer'] ?? '');

        if ($mode === 'subscription') {
            $sub = $sess['subscription'] ?? null;
            if (!is_array($sub)) {
                lemon_json_exit(200, $empty);
            }
            $st = (string)($sub['status'] ?? '');
            if (!in_array($st, ['active', 'trialing', 'past_due'], true)) {
                if ($st === 'canceled' || $st === 'unpaid') {
                    lemon_json_exit(200, $empty);
                }
            }
            $end = stripe_subscription_period_end($sub);
            lemon_json_exit(200, [
                'plan' => 'pro',
                'billing' => 'stripe',
                'stripeSubscriptionId' => (string)($sub['id'] ?? ''),
                'stripeCustomerId' => (string)($sub['customer'] ?? $customerId),
                'currentPeriodEnd' => $end,
            ]);
        }

        if ($mode === 'payment' && $paymentStatus === 'paid') {
            lemon_json_exit(200, [
                'plan' => 'founder',
                'billing' => 'stripe',
                'stripeSubscriptionId' => '',
                'stripeCustomerId' => $customerId,
                'currentPeriodEnd' => null,
            ]);
        }

        lemon_json_exit(200, $empty);
    }

    [$cc, $custBody] = stripe_api_request($sk, 'GET', '/customers', ['email' => $email, 'limit' => 5]);
    if ($cc < 200 || $cc >= 300 || empty($custBody['data']) || !is_array($custBody['data'])) {
        lemon_json_exit(200, $empty);
    }

    foreach ($custBody['data'] as $cust) {
        if (!is_array($cust)) {
            continue;
        }
        $cid = (string)($cust['id'] ?? '');
        if ($cid === '') {
            continue;
        }

        [$scFounder, $sessList] = stripe_api_request($sk, 'GET', '/checkout/sessions', [
            'customer' => $cid,
            'limit' => 20,
        ]);
        if ($scFounder >= 200 && $scFounder < 300 && !empty($sessList['data']) && is_array($sessList['data'])) {
            foreach ($sessList['data'] as $srow) {
                if (!is_array($srow)) {
                    continue;
                }
                if (($srow['mode'] ?? '') !== 'payment' || ($srow['payment_status'] ?? '') !== 'paid') {
                    continue;
                }
                $metaPlan = (string)($srow['metadata']['impact_plan'] ?? '');
                $foundFounder = $metaPlan === 'founder';
                if (!$foundFounder && !empty($srow['line_items']['data']) && is_array($srow['line_items']['data'])) {
                    foreach ($srow['line_items']['data'] as $li) {
                        $pid = is_array($li) ? (string)($li['price']['id'] ?? $li['price'] ?? '') : '';
                        if ($pid === $priceFounder) {
                            $foundFounder = true;
                            break;
                        }
                    }
                }
                if ($foundFounder) {
                    lemon_json_exit(200, [
                        'plan' => 'founder',
                        'billing' => 'stripe',
                        'stripeSubscriptionId' => '',
                        'stripeCustomerId' => $cid,
                        'currentPeriodEnd' => null,
                    ]);
                }
            }
        }

        [$sbc, $subBody] = stripe_api_request($sk, 'GET', '/subscriptions', [
            'customer' => $cid,
            'status' => 'all',
            'limit' => 20,
        ]);
        if ($sbc < 200 || $sbc >= 300 || empty($subBody['data']) || !is_array($subBody['data'])) {
            continue;
        }
        $now = time();
        foreach ($subBody['data'] as $sub) {
            if (!is_array($sub)) {
                continue;
            }
            $items = $sub['items']['data'][0] ?? null;
            $priceId = is_array($items) ? (string)($items['price']['id'] ?? '') : '';
            if ($priceId !== $pricePro) {
                continue;
            }
            $st = (string)($sub['status'] ?? '');
            if (in_array($st, ['active', 'trialing', 'past_due'], true)) {
                lemon_json_exit(200, [
                    'plan' => 'pro',
                    'billing' => 'stripe',
                    'stripeSubscriptionId' => (string)($sub['id'] ?? ''),
                    'stripeCustomerId' => $cid,
                    'currentPeriodEnd' => stripe_subscription_period_end($sub),
                ]);
            }
            if ($st === 'canceled' && !empty($sub['current_period_end']) && (int)$sub['current_period_end'] > $now) {
                lemon_json_exit(200, [
                    'plan' => 'pro',
                    'billing' => 'stripe',
                    'stripeSubscriptionId' => (string)($sub['id'] ?? ''),
                    'stripeCustomerId' => $cid,
                    'currentPeriodEnd' => stripe_subscription_period_end($sub),
                ]);
            }
        }
    }

    lemon_json_exit(200, $empty);
} catch (Throwable $e) {
    lemon_json_exit(400, ['error' => $e->getMessage() ?: 'Recover failed.']);
}
