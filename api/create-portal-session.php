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

$customerId = trim((string)($payload['stripeCustomerId'] ?? ''));
if ($customerId === '') {
    lemon_json_exit(400, ['error' => 'stripeCustomerId is required for the billing portal.']);
}

$return = impact_stripe_site_url();
if ($return === '') {
    lemon_json_exit(503, ['error' => 'Set IMPACT_PUBLIC_SITE_URL in stripe-secrets.php.']);
}
$returnUrl = $return . '/';

$params = [
    'customer' => $customerId,
    'return_url' => $returnUrl,
];

[$code, $json] = stripe_api_request($sk, 'POST', '/billing_portal/sessions', $params);

if ($code < 200 || $code >= 300) {
    lemon_json_exit(502, ['error' => stripe_error_message($json)]);
}

$url = $json['url'] ?? '';
if ($url === '') {
    lemon_json_exit(502, [
        'error' => 'No portal URL returned. Enable the Customer portal in Stripe Dashboard → Settings → Billing → Customer portal.',
    ]);
}

lemon_json_exit(200, ['url' => $url]);
