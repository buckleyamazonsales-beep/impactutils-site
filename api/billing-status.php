<?php
require_once __DIR__ . '/stripe-billing.php';

impact_billing_begin_json_endpoint();

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    lemon_json_exit(405, ['error' => 'Method not allowed.']);
}

$c = impact_stripe_config();
$sk = trim((string)($c['STRIPE_SECRET_KEY'] ?? ''));

if ($sk === '') {
    lemon_json_exit(503, ['error' => 'Stripe is not configured.']);
}

$raw = file_get_contents('php://input');
$payload = json_decode($raw ?: '{}', true);
if (!is_array($payload)) {
    lemon_json_exit(400, ['error' => 'Invalid JSON body.']);
}

$subId = trim((string)($payload['stripeSubscriptionId'] ?? ''));
if ($subId === '') {
    lemon_json_exit(400, ['error' => 'stripeSubscriptionId is required for Pro status sync.' });
}

$q = 'expand[]=items';
[$code, $sub] = stripe_api_request($sk, 'GET', '/subscriptions/' . rawurlencode($subId) . '?' . $q, []);

if ($code < 200 || $code >= 300 || empty($sub['id'])) {
    lemon_json_exit(200, [
        'plan' => 'free',
        'billing' => 'stripe',
        'currentPeriodEnd' => null,
        'stripeSubscriptionId' => '',
        'stripeCustomerId' => '',
        'customerPortalUrl' => null,
    ]);
}

$st = (string)($sub['status'] ?? '');
$now = time();
$periodEnd = (int)($sub['current_period_end'] ?? 0);
$activeLike = in_array($st, ['active', 'trialing', 'past_due'], true);
$cancelGrace = ($st === 'canceled' && $periodEnd > $now);

if (!$activeLike && !$cancelGrace) {
    lemon_json_exit(200, [
        'plan' => 'free',
        'billing' => 'stripe',
        'currentPeriodEnd' => null,
        'stripeSubscriptionId' => '',
        'stripeCustomerId' => (string)($sub['customer'] ?? ''),
        'customerPortalUrl' => null,
    ]);
}

lemon_json_exit(200, [
    'plan' => 'pro',
    'billing' => 'stripe',
    'currentPeriodEnd' => stripe_subscription_period_end($sub),
    'stripeSubscriptionId' => $subId,
    'stripeCustomerId' => (string)($sub['customer'] ?? ''),
    'customerPortalUrl' => null,
]);
