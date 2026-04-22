<?php
/**
 * Shared Lemon Squeezy config + HTTP helper for cPanel PHP endpoints.
 * Copy lemon-secrets.example.php → lemon-secrets.php and fill in values.
 */

function impact_lemon_config() {
    static $cfg = null;
    if ($cfg !== null) {
        return $cfg;
    }
    $defaults = [
        'LEMONSQUEEZY_API_KEY' => '',
        'LEMONSQUEEZY_WEBHOOK_SECRET' => '',
        'LEMONSQUEEZY_STORE_ID' => '',
        'LEMONSQUEEZY_VARIANT_PRO' => '',
        'LEMONSQUEEZY_VARIANT_FOUNDER' => '',
        'LEMONSQUEEZY_TEST_MODE' => '',
        'IMPACT_PUBLIC_SITE_URL' => '',
        'IMPACT_ADMIN_API_KEY' => '',
    ];
    $secrets = [];
    $path = __DIR__ . '/lemon-secrets.php';
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

function impact_billing_cors_headers() {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type, X-Impact-Admin-Key');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
}

function impact_site_url_from_config() {
    $c = impact_lemon_config();
    $u = trim((string)($c['IMPACT_PUBLIC_SITE_URL'] ?? ''));
    if ($u !== '') {
        return rtrim($u, '/');
    }
    $https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
        || (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
    $host = $_SERVER['HTTP_HOST'] ?? '';
    if ($host === '') {
        return '';
    }
    return ($https ? 'https://' : 'http://') . $host;
}

function impact_billing_begin_json_endpoint() {
    header('Content-Type: application/json; charset=utf-8');
    impact_billing_cors_headers();
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(200);
        echo json_encode(['ok' => true]);
        exit;
    }
}

/**
 * @param list<string> $allowedAfterOptions e.g. ['POST'] or ['GET','POST']
 */
function impact_api_begin_json($allowedAfterOptions = ['POST']) {
    header('Content-Type: application/json; charset=utf-8');
    impact_billing_cors_headers();
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        http_response_code(200);
        echo json_encode(['ok' => true]);
        exit;
    }
    $m = $_SERVER['REQUEST_METHOD'] ?? '';
    if (!in_array($m, $allowedAfterOptions, true)) {
        lemon_json_exit(405, ['error' => 'Method not allowed.']);
    }
}

function impact_registry_data_dir() {
    $dir = __DIR__ . '/data';
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
    return $dir;
}

function impact_registry_users_path() {
    return impact_registry_data_dir() . '/site-users.json';
}

/** @return list<array<string,mixed>> */
function impact_registry_load_users() {
    $f = impact_registry_users_path();
    if (!is_file($f)) {
        return [];
    }
    $raw = @file_get_contents($f);
    $d = json_decode($raw ?: '[]', true);
    if (!is_array($d)) {
        return [];
    }
    $out = [];
    foreach ($d as $row) {
        if (is_array($row) && !empty($row['email'])) {
            $out[] = $row;
        }
    }
    return $out;
}

/** @param list<array<string,mixed>> $users */
function impact_registry_save_users($users) {
    $f = impact_registry_users_path();
    $dir = dirname($f);
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
    $tmp = $f . '.tmp';
    $json = json_encode(array_values($users), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if ($json === false) {
        return false;
    }
    if (@file_put_contents($tmp, $json, LOCK_EX) === false) {
        return false;
    }
    return @rename($tmp, $f);
}

function impact_registry_client_ip() {
    if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        return (string)$_SERVER['HTTP_CF_CONNECTING_IP'];
    }
    return (string)($_SERVER['REMOTE_ADDR'] ?? '0');
}

function impact_registry_rate_allow($maxPerHour = 120) {
    $ip = impact_registry_client_ip();
    $path = impact_registry_data_dir() . '/ratelimit-' . md5($ip) . '.json';
    $now = time();
    $hourAgo = $now - 3600;
    $ts = [];
    if (is_file($path)) {
        $raw = @file_get_contents($path);
        $d = json_decode($raw ?: '[]', true);
        if (is_array($d) && isset($d['ts']) && is_array($d['ts'])) {
            foreach ($d['ts'] as $t) {
                $t = (int)$t;
                if ($t >= $hourAgo) {
                    $ts[] = $t;
                }
            }
        }
    }
    if (count($ts) >= $maxPerHour) {
        return false;
    }
    $ts[] = $now;
    @file_put_contents($path, json_encode(['ts' => $ts]), LOCK_EX);
    return true;
}

function lemon_json_exit($status, $data) {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    impact_billing_cors_headers();
    echo json_encode($data);
    exit;
}

function lemon_api_request($apiKey, $path, $method = 'GET', $body = null) {
    $url = 'https://api.lemonsqueezy.com/v1' . $path;
    $headers = [
        'Accept: application/vnd.api+json',
        'Content-Type: application/vnd.api+json',
        'Authorization: Bearer ' . $apiKey,
    ];
    $opts = [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_TIMEOUT => 60,
    ];
    if ($body !== null) {
        $opts[CURLOPT_POSTFIELDS] = $body;
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

function lemon_api_error_message($body) {
    $errs = $body['errors'] ?? [];
    if (!is_array($errs)) {
        return 'Lemon Squeezy API error';
    }
    $parts = [];
    foreach ($errs as $e) {
        if (!is_array($e)) {
            continue;
        }
        $parts[] = (string)($e['detail'] ?? $e['title'] ?? '');
    }
    $parts = array_filter($parts);
    return $parts ? implode('; ', $parts) : 'Lemon Squeezy API error';
}

function subscription_access_end($attrs) {
    if (!is_array($attrs)) {
        return null;
    }
    $end = $attrs['ends_at'] ?? $attrs['renews_at'] ?? null;
    return $end ? (string)$end : null;
}

/**
 * Locked read/modify/write for site-users.json. Callback receives user rows by reference.
 *
 * @param callable(list<array<string,mixed>>):void $mutate
 */
function impact_registry_merge(callable $mutate) {
    $f = impact_registry_users_path();
    $dir = dirname($f);
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
    $h = @fopen($f, 'c+');
    if ($h === false) {
        return false;
    }
    try {
        flock($h, LOCK_EX);
        rewind($h);
        $raw = stream_get_contents($h) ?: '';
        $users = json_decode($raw, true);
        if (!is_array($users)) {
            $users = [];
        }
        $mutate($users);
        $json = json_encode(array_values($users), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        if ($json === false) {
            return false;
        }
        ftruncate($h, 0);
        rewind($h);
        $w = fwrite($h, $json);
        fflush($h);
        return $w !== false;
    } finally {
        flock($h, LOCK_UN);
        fclose($h);
    }
}
