<?php
/**
 * Lemon Squeezy → Settings → Webhooks → URL:
 *   https://yourdomain.com/api/lemonsqueezy-webhook
 * Signing secret must match LEMONSQUEEZY_WEBHOOK_SECRET in lemon-secrets.php
 */
require_once __DIR__ . '/lemon-env.php';

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$c = impact_lemon_config();
$secret = trim((string)($c['LEMONSQUEEZY_WEBHOOK_SECRET'] ?? ''));
if ($secret === '') {
    http_response_code(503);
    echo json_encode(['error' => 'Webhook secret not configured']);
    exit;
}

$rawBody = file_get_contents('php://input');
if ($rawBody === false) {
    $rawBody = '';
}

$sig = (string)($_SERVER['HTTP_X_SIGNATURE'] ?? '');
if ($sig === '' && function_exists('getallheaders')) {
    $h = getallheaders();
    if (is_array($h)) {
        foreach ($h as $k => $v) {
            if (strtolower((string)$k) === 'x-signature') {
                $sig = (string)$v;
                break;
            }
        }
    }
}

$hash = hash_hmac('sha256', $rawBody, $secret);
$ok = false;
if (strlen($hash) === strlen((string)$sig)) {
    $ok = hash_equals($hash, (string)$sig);
} else {
    $ok = ($hash === (string)$sig);
}

if (!$ok) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid signature']);
    exit;
}

try {
    $payload = json_decode($rawBody, true);
    $name = is_array($payload) ? (string)($payload['meta']['event_name'] ?? '') : '';
    $type = is_array($payload['data'] ?? null) ? (string)($payload['data']['type'] ?? '') : '';
    $id = is_array($payload['data'] ?? null) ? (string)($payload['data']['id'] ?? '') : '';
    error_log('lemonsqueezy-webhook ' . $name . ' ' . $type . ' ' . $id);
} catch (Throwable $e) {
    error_log('lemonsqueezy-webhook parse ' . $e->getMessage());
}

http_response_code(200);
echo json_encode(['received' => true]);
