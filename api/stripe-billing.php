<?php
/**
 * Stripe Checkout + billing helpers for cPanel (uses stripe-secrets.php).
 */
require_once __DIR__ . '/lemon-env.php';

function impact_stripe_config() {
    static $cfg = null;
    if ($cfg !== null) {
        return $cfg;
    }
    $defaults = [
        'STRIPE_SECRET_KEY' => '',
        'STRIPE_WEBHOOK_SECRET' => '',
        'STRIPE_PRICE_PRO' => '',
        'STRIPE_PRICE_FOUNDER' => '',
        'IMPACT_PUBLIC_SITE_URL' => '',
        'IMPACT_ADMIN_API_KEY' => '',
    ];
    $secrets = [];
    $path = __DIR__ . '/stripe-secrets.php';
    if (is_file($path)) {
        $loaded = include $path;
        if (is_array($loaded)) {
            $secrets = $loaded;
        }
    }
    $merged = array_merge($defaults, $secrets);
    foreach ($defaults as $k => $_) {
        $env = getenv($k);
        if ($env !== false && $env !== '') {
            $merged[$k] = $env;
        }
    }
    $cfg = $merged;
    return $cfg;
}

function impact_admin_api_key() {
    $s = impact_stripe_config();
    $a = trim((string)($s['IMPACT_ADMIN_API_KEY'] ?? ''));
    if ($a !== '') {
        return $a;
    }
    $l = impact_lemon_config();
    return trim((string)($l['IMPACT_ADMIN_API_KEY'] ?? ''));
}

/**
 * @param array<string,scalar|list<scalar>> $params
 * @return array{0:int,1:array<string,mixed>}
 */
function stripe_api_request($secretKey, $method, $path, $params = []) {
    $base = 'https://api.stripe.com/v1';
    $url = $base . $path;
    $headers = [
        'Authorization: Bearer ' . $secretKey,
    ];
    $opts = [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_TIMEOUT => 60,
    ];
    if ($method === 'POST') {
        $opts[CURLOPT_POST] = true;
        $opts[CURLOPT_POSTFIELDS] = http_build_query($params);
        $headers[] = 'Content-Type: application/x-www-form-urlencoded';
        $opts[CURLOPT_HTTPHEADER] = $headers;
    } else {
        if ($params !== []) {
            $q = http_build_query($params);
            $opts[CURLOPT_URL] = $url . (strpos($path, '?') !== false ? '&' : '?') . $q;
        }
    }
    $ch = curl_init();
    if ($ch === false) {
        return [0, []];
    }
    curl_setopt_array($ch, $opts);
    $raw = curl_exec($ch);
    $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $json = json_decode($raw ?: '{}', true);
    if (!is_array($json)) {
        $json = [];
    }
    return [$code, $json];
}

function stripe_error_message($body) {
    $err = $body['error'] ?? [];
    if (is_array($err)) {
        $m = (string)($err['message'] ?? '');
        if ($m !== '') {
            return $m;
        }
    }
    return 'Stripe API error';
}

function impact_stripe_site_url() {
    $c = impact_stripe_config();
    $u = trim((string)($c['IMPACT_PUBLIC_SITE_URL'] ?? ''));
    if ($u !== '') {
        return rtrim($u, '/');
    }
    return impact_site_url_from_config();
}

/**
 * Verify Stripe-Signature (raw body must be passed unchanged).
 *
 * @return array<string,mixed> decoded event
 */
function stripe_construct_event($payload, $sigHeader, $secret, $toleranceSeconds = 300) {
    if ($secret === '' || $sigHeader === '') {
        throw new RuntimeException('Missing webhook secret or signature');
    }
    $timestamp = null;
    $signatures = [];
    foreach (explode(',', (string)$sigHeader) as $part) {
        $part = trim($part);
        if ($part === '' || strpos($part, '=') === false) {
            continue;
        }
        [$k, $v] = explode('=', $part, 2);
        if ($k === 't') {
            $timestamp = (int)$v;
        }
        if ($k === 'v1') {
            $signatures[] = $v;
        }
    }
    if ($timestamp === null || $signatures === []) {
        throw new RuntimeException('Unable to parse Stripe-Signature');
    }
    if (abs(time() - $timestamp) > $toleranceSeconds) {
        throw new RuntimeException('Timestamp outside tolerance');
    }
    $signed = $timestamp . '.' . $payload;
    $expected = hash_hmac('sha256', $signed, $secret);
    $ok = false;
    foreach ($signatures as $sig) {
        if (hash_equals($expected, $sig)) {
            $ok = true;
            break;
        }
    }
    if (!$ok) {
        throw new RuntimeException('Signature mismatch');
    }
    $ev = json_decode($payload, true);
    if (!is_array($ev)) {
        throw new RuntimeException('Invalid JSON payload');
    }
    return $ev;
}

/** @param array<string,mixed> $sub */
function stripe_subscription_period_end($sub) {
    if (!is_array($sub)) {
        return null;
    }
    $attrs = $sub;
    $end = $attrs['current_period_end'] ?? null;
    if ($end === null) {
        return null;
    }
    return gmdate('c', (int)$end);
}
