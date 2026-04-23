<?php
/**
 * Admin-only: list registered users (from site-user-register hits).
 * Send header: X-Impact-Admin-Key: <same value as IMPACT_ADMIN_API_KEY in lemon-secrets.php>
 */
require_once __DIR__ . '/lemon-env.php';

impact_api_begin_json(['GET', 'POST']);

function impact_admin_registry_public_row($row) {
    return [
        'email' => (string)($row['email'] ?? ''),
        'display_name' => (string)($row['display_name'] ?? ''),
        'signup_at' => $row['signup_at'] ?? null,
        'email_verified_at' => $row['email_verified_at'] ?? null,
        'last_signin_at' => $row['last_signin_at'] ?? null,
        'client_created_at' => $row['client_created_at'] ?? null,
        'is_moderator' => !empty($row['is_moderator']),
        'is_empire' => !empty($row['is_empire']),
        'is_admin' => !empty($row['is_admin']),
        'moderator_updated_at' => $row['moderator_updated_at'] ?? null,
        'moderator_updated_by' => $row['moderator_updated_by'] ?? null,
        'empire_updated_at' => $row['empire_updated_at'] ?? null,
        'empire_updated_by' => $row['empire_updated_by'] ?? null,
    ];
}

function impact_admin_registry_list_exit() {
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
        $out[] = impact_admin_registry_public_row($row);
    }

    lemon_json_exit(200, ['ok' => true, 'users' => $out, 'count' => count($out)]);
}

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

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
    $raw = file_get_contents('php://input');
    $payload = json_decode($raw ?: '{}', true);
    if (!is_array($payload)) {
        lemon_json_exit(400, ['error' => 'Invalid JSON body.']);
    }
    $action = strtolower(trim((string)($payload['action'] ?? '')));
    if (!in_array($action, ['set_moderator', 'set_empire'], true)) {
        lemon_json_exit(400, ['error' => 'Unsupported admin action.']);
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

    $wantModerator = !empty($payload['is_moderator']);
    $wantEmpire = !empty($payload['is_empire']);
    $updatedBy = trim(strip_tags((string)($payload['updated_by'] ?? 'admin')));
    if (function_exists('mb_substr')) {
        $updatedBy = mb_substr($updatedBy, 0, 160);
    } else {
        $updatedBy = substr($updatedBy, 0, 160);
    }
    $now = gmdate('c');

    $ok = impact_registry_merge(function (&$users) use ($email, $displayName, $action, $wantModerator, $wantEmpire, $updatedBy, $now) {
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
            $users[] = [
                'email' => $email,
                'display_name' => $displayName,
                'signup_at' => $now,
                'email_verified_at' => null,
                'last_signin_at' => null,
                'is_moderator' => $action === 'set_moderator' ? $wantModerator : false,
                'is_empire' => $action === 'set_empire' ? $wantEmpire : false,
                'is_admin' => false,
            ];
            if ($action === 'set_moderator') {
                $users[count($users) - 1]['moderator_updated_at'] = $now;
                $users[count($users) - 1]['moderator_updated_by'] = $updatedBy;
            }
            if ($action === 'set_empire') {
                $users[count($users) - 1]['empire_updated_at'] = $now;
                $users[count($users) - 1]['empire_updated_by'] = $updatedBy;
            }
            return;
        }

        $row = is_array($users[$idx]) ? $users[$idx] : ['email' => $email];
        $row['email'] = $email;
        if ($action === 'set_moderator') {
            if (!empty($row['is_admin'])) {
                $row['is_moderator'] = false;
            } else {
                $row['is_moderator'] = $wantModerator;
            }
            $row['moderator_updated_at'] = $now;
            $row['moderator_updated_by'] = $updatedBy;
        }
        if ($action === 'set_empire') {
            $row['is_empire'] = !empty($row['is_admin']) ? false : $wantEmpire;
            $row['empire_updated_at'] = $now;
            $row['empire_updated_by'] = $updatedBy;
        }
        if (empty($row['display_name'])) {
            $row['display_name'] = $displayName;
        }
        $users[$idx] = $row;
    });

    if (!$ok) {
        lemon_json_exit(500, ['error' => 'Could not update registry role.']);
    }

    impact_admin_registry_list_exit();
}

impact_admin_registry_list_exit();
