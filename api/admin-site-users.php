<?php
/**
 * Admin-only: list registered users (from site-user-register hits).
 * Send header: X-Impact-Admin-Key: <same value as IMPACT_ADMIN_API_KEY in lemon-secrets.php>
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

$users = impact_registry_load_users();
usort($users, static function ($a, $b) {
    $ta = strtotime((string)($a['signup_at'] ?? $a['client_created_at'] ?? '')) ?: 0;
    $tb = strtotime((string)($b['signup_at'] ?? $b['client_created_at'] ?? '')) ?: 0;
    return $tb <=> $ta;
});

$out = [];
foreach ($users as $row) {
    if (!is_array($row)) {
        continue;
    }
    $out[] = [
        'email' => (string)($row['email'] ?? ''),
        'display_name' => (string)($row['display_name'] ?? ''),
        'signup_at' => $row['signup_at'] ?? null,
        'email_verified_at' => $row['email_verified_at'] ?? null,
        'last_signin_at' => $row['last_signin_at'] ?? null,
        'client_created_at' => $row['client_created_at'] ?? null,
    ];
}

lemon_json_exit(200, ['ok' => true, 'users' => $out, 'count' => count($out)]);
