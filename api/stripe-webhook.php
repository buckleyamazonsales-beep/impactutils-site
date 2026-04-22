<?php
/**
 * Stripe Dashboard → Developers → Webhooks → URL:
 *   https://yourdomain.com/api/stripe-webhook
 * Signing secret: STRIPE_WEBHOOK_SECRET in stripe-secrets.php
 */
require_once __DIR__ . '/stripe-billing.php';

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$c = impact_stripe_config();
$secret = trim((string)($c['STRIPE_WEBHOOK_SECRET'] ?? ''));
if ($secret === '') {
    http_response_code(503);
    echo json_encode(['error' => 'Webhook secret not configured']);
    exit;
}

$payload = file_get_contents('php://input');
if ($payload === false) {
    $payload = '';
}

$sig = $_SERVER['HTTP_STRIPE_SIGNATURE'] ?? '';

try {
    $event = stripe_construct_event($payload, $sig, $secret);
    $type = (string)($event['type'] ?? '');
    error_log('stripe-webhook ' . $type);
} catch (Throwable $e) {
    error_log('stripe-webhook verify ' . $e->getMessage());
    http_response_code(400);
    echo json_encode(['error' => 'Invalid signature']);
    exit;
}

http_response_code(200);
echo json_encode(['received' => true]);
