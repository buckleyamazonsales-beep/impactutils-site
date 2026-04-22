<?php
/**
 * Admin-only: Stripe billing env check (no secret values returned).
 */
require_once __DIR__ . '/stripe-billing.php';

impact_api_begin_json(['GET', 'POST']);

$expected = impact_admin_api_key();
if ($expected === '') {
    lemon_json_exit(503, ['error' => 'IMPACT_ADMIN_API_KEY is not set in stripe-secrets.php (or lemon-secrets.php).']);
}

$provided = trim((string)($_SERVER['HTTP_X_IMPACT_ADMIN_KEY'] ?? ''));
if ($provided === '' && function_exists('getallheaders')) {
    foreach (getallheaders() as $k => $v) {
        if (strtolower((string)$k) === 'x-impact-admin-key') {
            $provided = trim((string)$v);
            break;
        }
    }
}

if ($provided === '' || !hash_equals($expected, $provided)) {
    lemon_json_exit(401, ['error' => 'Invalid or missing admin key.']);
}

$c = impact_stripe_config();
$has = [
    'STRIPE_SECRET_KEY' => trim((string)($c['STRIPE_SECRET_KEY'] ?? '')) !== '',
    'STRIPE_WEBHOOK_SECRET' => trim((string)($c['STRIPE_WEBHOOK_SECRET'] ?? '')) !== '',
    'STRIPE_PRICE_PRO' => trim((string)($c['STRIPE_PRICE_PRO'] ?? '')) !== '',
    'STRIPE_PRICE_FOUNDER' => trim((string)($c['STRIPE_PRICE_FOUNDER'] ?? '')) !== '',
    'IMPACT_PUBLIC_SITE_URL' => trim((string)($c['IMPACT_PUBLIC_SITE_URL'] ?? '')) !== '',
];

$derived = impact_stripe_site_url() !== '';
$urlReady = $has['IMPACT_PUBLIC_SITE_URL'] || $derived;
$curlOk = function_exists('curl_init');
$readyCheckout = $has['STRIPE_SECRET_KEY'] && $has['STRIPE_PRICE_PRO'] && $has['STRIPE_PRICE_FOUNDER'] && $urlReady && $curlOk;

$host = $_SERVER['HTTP_HOST'] ?? '';
$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
$webhookUrl = $host !== '' ? (($https ? 'https://' : 'http://') . $host . '/api/stripe-webhook') : '';

$missing = [];
foreach ($has as $k => $v) {
    if ($k === 'IMPACT_PUBLIC_SITE_URL' && $urlReady) {
        continue;
    }
    if (!$v) {
        $missing[] = $k;
    }
}

lemon_json_exit(200, [
    'ok' => true,
    'ready_for_checkout' => $readyCheckout,
    'ready_for_webhook' => $has['STRIPE_WEBHOOK_SECRET'],
    'php_curl_available' => $curlOk,
    'has' => $has,
    'redirect_base_resolved' => $derived,
    'webhook_url' => $webhookUrl,
    'missing_for_checkout' => $missing,
]);
