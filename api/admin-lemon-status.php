<?php
/**
 * Admin-only: show which Lemon Squeezy / billing env vars are set (never returns secret values).
 */
require_once __DIR__ . '/lemon-env.php';

impact_api_begin_json(['GET', 'POST']);

$c = impact_lemon_config();
$expected = trim((string)($c['IMPACT_ADMIN_API_KEY'] ?? ''));
if ($expected === '') {
    lemon_json_exit(503, ['error' => 'IMPACT_ADMIN_API_KEY is not set in lemon-secrets.php.']);
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

$apiKey = trim((string)($c['LEMONSQUEEZY_API_KEY'] ?? ''));
$storeId = trim((string)($c['LEMONSQUEEZY_STORE_ID'] ?? ''));
$variantPro = trim((string)($c['LEMONSQUEEZY_VARIANT_PRO'] ?? ''));
$variantFounder = trim((string)($c['LEMONSQUEEZY_VARIANT_FOUNDER'] ?? ''));
$webhookSecret = trim((string)($c['LEMONSQUEEZY_WEBHOOK_SECRET'] ?? ''));
$siteUrl = trim((string)($c['IMPACT_PUBLIC_SITE_URL'] ?? ''));
$testMode = strtolower(trim((string)($c['LEMONSQUEEZY_TEST_MODE'] ?? ''))) === 'true';

$has = [
    'LEMONSQUEEZY_API_KEY' => $apiKey !== '',
    'LEMONSQUEEZY_STORE_ID' => $storeId !== '',
    'LEMONSQUEEZY_VARIANT_PRO' => $variantPro !== '',
    'LEMONSQUEEZY_VARIANT_FOUNDER' => $variantFounder !== '',
    'LEMONSQUEEZY_WEBHOOK_SECRET' => $webhookSecret !== '',
    'IMPACT_PUBLIC_SITE_URL' => $siteUrl !== '',
];

$derivedSite = impact_site_url_from_config();
$urlReady = $siteUrl !== '' || $derivedSite !== '';
$curlOk = function_exists('curl_init');
$readyCheckout = $apiKey !== '' && $storeId !== '' && $variantPro !== '' && $variantFounder !== '' && $urlReady && $curlOk;

$host = $_SERVER['HTTP_HOST'] ?? '';
$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
$webhookUrl = $host !== '' ? (($https ? 'https://' : 'http://') . $host . '/api/lemonsqueezy-webhook') : '';

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
    'ready_for_webhook' => $has['LEMONSQUEEZY_WEBHOOK_SECRET'],
    'test_mode' => $testMode,
    'php_curl_available' => $curlOk,
    'has' => $has,
    'redirect_base_resolved' => $derivedSite !== '',
    'webhook_url' => $webhookUrl,
    'missing_for_checkout' => $missing,
]);
