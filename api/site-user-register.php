<?php
/**
 * Public endpoint: browser reports signup / verified / signin (no passwords).
 * Rate-limited per IP. Data file: api/data/site-users.json
 */
require_once __DIR__ . '/lemon-env.php';

impact_billing_begin_json_endpoint();

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    lemon_json_exit(405, ['error' => 'Method not allowed.']);
}

if (!impact_registry_rate_allow(120)) {
    lemon_json_exit(429, ['error' => 'Too many requests. Try again later.']);
}

$raw = file_get_contents('php://input');
$payload = json_decode($raw ?: '{}', true);
if (!is_array($payload)) {
    lemon_json_exit(400, ['error' => 'Invalid JSON body.']);
}

$event = strtolower(trim((string)($payload['event'] ?? '')));
if (!in_array($event, ['signup', 'verified', 'signin'], true)) {
    lemon_json_exit(400, ['error' => 'event must be signup, verified, or signin.']);
}

$email = strtolower(trim((string)($payload['email'] ?? '')));
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    lemon_json_exit(400, ['error' => 'Valid email required.']);
}

$displayName = trim(strip_tags((string)($payload['display_name'] ?? '')));
if (function_exists('mb_substr')) {
    $displayName = mb_substr($displayName, 0, 120);
} else {
    $displayName = substr($displayName, 0, 120);
}
if ($displayName === '') {
    $displayName = $email;
}

$createdClient = trim((string)($payload['created_at'] ?? ''));
$now = gmdate('c');

$ok = impact_registry_merge(function (&$users) use ($email, $displayName, $event, $createdClient, $now) {
    $idx = -1;
    foreach ($users as $i => $row) {
        if (!is_array($row)) {
            continue;
        }
        if (strtolower((string)($row['email'] ?? '')) === $email) {
            $idx = $i;
            break;
        }
    }

    if ($idx === -1) {
        $row = [
            'email' => $email,
            'display_name' => $displayName,
            'signup_at' => $now,
            'email_verified_at' => null,
            'last_signin_at' => null,
            'is_moderator' => false,
            'is_admin' => false,
        ];
        if ($createdClient !== '') {
            $row['client_created_at'] = $createdClient;
        }
        if ($event === 'verified') {
            $row['email_verified_at'] = $now;
        }
        if ($event === 'signin') {
            $row['last_signin_at'] = $now;
        }
        $users[] = $row;
        return;
    }

    $row = is_array($users[$idx]) ? $users[$idx] : ['email' => $email];
    $row['email'] = $email;
    if ($displayName !== '') {
        $row['display_name'] = $displayName;
    }
    if ($event === 'signup') {
        if (empty($row['signup_at'])) {
            $row['signup_at'] = $now;
        }
        if ($createdClient !== '') {
            $row['client_created_at'] = $createdClient;
        }
    }
    if ($event === 'verified') {
        $row['email_verified_at'] = $now;
    }
    if ($event === 'signin') {
        $row['last_signin_at'] = $now;
    }
    $users[$idx] = $row;
});

if (!$ok) {
    lemon_json_exit(500, ['error' => 'Could not update registry.']);
}

$storedUser = null;
foreach (impact_registry_load_users() as $row) {
    if (!is_array($row)) {
        continue;
    }
    if (strtolower((string)($row['email'] ?? '')) === $email) {
        $storedUser = $row;
        break;
    }
}

lemon_json_exit(200, [
    'ok' => true,
    'user' => [
        'email' => $email,
        'display_name' => (string)($storedUser['display_name'] ?? $displayName),
        'is_moderator' => !empty($storedUser['is_moderator']),
        'is_admin' => !empty($storedUser['is_admin']),
    ],
]);
