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
    lemon_json_exit(503, [
        'error' => 'Stripe is not configured. Copy api/stripe-secrets.example.php to api/stripe-secrets.php and set STRIPE_SECRET_KEY, STRIPE_PRICE_PRO, and STRIPE_PRICE_FOUNDER.',
    ]);
}

$raw = file_get_contents('php://input');
$payload = json_decode($raw ?: '{}', true);
if (!is_array($payload)) {
    lemon_json_exit(400, ['error' => 'Invalid JSON body.']);
}

$plan = strtolower((string)($payload['plan'] ?? ''));
if (!in_array($plan, ['pro', 'founder'], true)) {
    lemon_json_exit(400, ['error' => 'plan must be "pro" or "founder".']);
}

$customerEmail = strtolower(trim((string)($payload['customerEmail'] ?? '')));
if ($customerEmail === '' || strpos($customerEmail, '@') === false) {
    lemon_json_exit(400, ['error' => 'A valid customerEmail is required.']);
}

$siteUrl = impact_stripe_site_url();
if ($siteUrl === '') {
    lemon_json_exit(503, [
        'error' => 'Set IMPACT_PUBLIC_SITE_URL in stripe-secrets.php (e.g. https://yoursite.com).',
    ]);
}

$priceId = $plan === 'founder' ? $priceFounder : $pricePro;
$mode = $plan === 'founder' ? 'payment' : 'subscription';

$params = [
    'mode' => $mode,
    'success_url' => $siteUrl . '/?billing=success&session_id={CHECKOUT_SESSION_ID}',
    'cancel_url' => $siteUrl . '/?billing=cancel',
    'customer_email' => $customerEmail,
    'metadata[impact_email]' => $customerEmail,
    'metadata[impact_plan]' => $plan,
    'line_items[0][price]' => $priceId,
    'line_items[0][quantity]' => 1,
];

[$code, $json] = stripe_api_request($sk, 'POST', '/checkout/sessions', $params);

if ($code < 200 || $code >= 300) {
    lemon_json_exit(502, ['error' => stripe_error_message($json)]);
}

$url = $json['url'] ?? '';
if ($url === '') {
    lemon_json_exit(502, ['error' => 'Checkout response had no URL.']);
}

lemon_json_exit(200, ['url' => $url]);
