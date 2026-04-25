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

$sessionId = trim((string)($payload['sessionId'] ?? ''));
$expectedPlan = strtolower(trim((string)($payload['expectedPlan'] ?? '')));
$email = strtolower(trim((string)($payload['email'] ?? '')));

if ($sessionId === '') {
    lemon_json_exit(400, ['error' => 'sessionId is required.']);
}
if (!in_array($expectedPlan, ['pro', 'founder'], true)) {
    lemon_json_exit(400, ['error' => 'expectedPlan must be "pro" or "founder".']);
}

$q = 'expand[]=subscription&expand[]=line_items';
[$code, $sess] = stripe_api_request($sk, 'GET', '/checkout/sessions/' . rawurlencode($sessionId) . '?' . $q, []);

if ($code < 200 || $code >= 300 || empty($sess['id'])) {
    lemon_json_exit(200, ['verified' => false, 'error' => 'Checkout session not found.']);
}

$paymentStatus = (string)($sess['payment_status'] ?? '');
$mode = (string)($sess['mode'] ?? '');
$lineItems = $sess['line_items']['data'] ?? [];

if ($mode !== 'payment' && $mode !== 'subscription') {
    lemon_json_exit(200, ['verified' => false, 'error' => 'Invalid checkout mode.']);
}

$pricePro = trim((string)($c['STRIPE_PRICE_PRO'] ?? ''));
$priceFounder = trim((string)($c['STRIPE_PRICE_FOUNDER'] ?? ''));
$paidPriceId = '';
foreach ($lineItems as $item) {
    $pid = $item['price']['id'] ?? '';
    if ($pid === $pricePro || $pid === $priceFounder) {
        $paidPriceId = $pid;
        break;
    }
}

$actualPlan = '';
if ($paidPriceId === $pricePro) {
    $actualPlan = 'pro';
} elseif ($paidPriceId === $priceFounder) {
    $actualPlan = 'founder';
}

if ($actualPlan !== $expectedPlan) {
    lemon_json_exit(200, [
        'verified' => false, 
        'error' => 'Purchased plan (' . ($actualPlan ?: 'unknown') . ') does not match expected (' . $expectedPlan . ').'
    ]);
}

if ($expectedPlan === 'founder') {
    if ($paymentStatus !== 'paid') {
        lemon_json_exit(200, ['verified' => false, 'error' => 'Founder purchase not completed. Payment status: ' . $paymentStatus]);
    }
    lemon_json_exit(200, [
        'verified' => true,
        'plan' => 'founder',
        'stripeCustomerId' => (string)($sess['customer'] ?? ''),
        'stripeSubscriptionId' => '',
        'currentPeriodEnd' => null
    ]);
}

if ($expectedPlan === 'pro') {
    if ($paymentStatus !== 'paid') {
        lemon_json_exit(200, ['verified' => false, 'error' => 'Pro purchase not completed. Payment status: ' . $paymentStatus]);
    }
    lemon_json_exit(200, [
        'verified' => true,
        'plan' => 'pro',
        'stripeCustomerId' => (string)($sess['customer'] ?? ''),
        'stripeSubscriptionId' => '',
        'currentPeriodEnd' => null
    ]);
}

lemon_json_exit(200, ['verified' => false, 'error' => 'Verification failed.']);
