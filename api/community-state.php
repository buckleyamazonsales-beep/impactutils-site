<?php
require_once __DIR__ . '/lemon-env.php';

impact_api_begin_json(['GET', 'POST']);

function impact_community_state_path() {
    return impact_registry_data_dir() . '/community-state.json';
}

function impact_community_now_iso() {
    return gmdate('Y-m-d H:i');
}

function impact_community_normalize_message($msg) {
    if (!is_array($msg)) {
        $msg = [];
    }
    return [
        'id' => (string)($msg['id'] ?? uniqid('msg-', true)),
        'sender' => strtolower(trim((string)($msg['sender'] ?? ''))),
        'sender_display' => trim((string)($msg['sender_display'] ?? 'User')) ?: 'User',
        'text' => trim((string)($msg['text'] ?? '')),
        'timestamp' => (int)($msg['timestamp'] ?? round(microtime(true) * 1000)),
        'isStaff' => !empty($msg['isStaff']),
    ];
}

function impact_community_normalize_ticket($ticket) {
    if (!is_array($ticket)) {
        $ticket = [];
    }
    $messages = [];
    if (!empty($ticket['messages']) && is_array($ticket['messages'])) {
        foreach ($ticket['messages'] as $msg) {
            $normalized = impact_community_normalize_message($msg);
            if ($normalized['text'] !== '') {
                $messages[] = $normalized;
            }
        }
    }
    usort($messages, static function ($a, $b) {
        return ((int)($a['timestamp'] ?? 0)) <=> ((int)($b['timestamp'] ?? 0));
    });

    return [
        'id' => (string)($ticket['id'] ?? uniqid('ticket-', true)),
        'type' => trim((string)($ticket['type'] ?? 'deposit')) ?: 'deposit',
        'listing_id' => trim((string)($ticket['listing_id'] ?? '')),
        'username' => trim((string)($ticket['username'] ?? '')),
        'amount' => (float)($ticket['amount'] ?? 0),
        'contact' => trim((string)($ticket['contact'] ?? '')),
        'description' => trim((string)($ticket['description'] ?? '')),
        'status' => trim((string)($ticket['status'] ?? 'open')) ?: 'open',
        'created_by' => strtolower(trim((string)($ticket['created_by'] ?? ''))),
        'created_by_display' => trim((string)($ticket['created_by_display'] ?? 'User')) ?: 'User',
        'created_at' => (int)($ticket['created_at'] ?? round(microtime(true) * 1000)),
        'messages' => $messages,
    ];
}

function impact_community_normalize_listing($listing) {
    if (!is_array($listing)) {
        $listing = [];
    }
    return [
        'id' => (string)($listing['id'] ?? uniqid('listing-', true)),
        'username' => trim((string)($listing['username'] ?? '')),
        'price' => (float)($listing['price'] ?? 0),
        'contact' => trim((string)($listing['contact'] ?? '')),
        'description' => trim((string)($listing['description'] ?? '')),
        'seller' => trim((string)($listing['seller'] ?? 'User')) ?: 'User',
        'seller_email' => strtolower(trim((string)($listing['seller_email'] ?? ''))),
        'status' => trim((string)($listing['status'] ?? 'pending')) ?: 'pending',
        'listing_fee' => (float)($listing['listing_fee'] ?? 0),
        'date' => trim((string)($listing['date'] ?? impact_community_now_iso())) ?: impact_community_now_iso(),
        'cancelled_by' => strtolower(trim((string)($listing['cancelled_by'] ?? ''))),
        'cancelled_reason' => trim((string)($listing['cancelled_reason'] ?? '')),
        'cancelled_at' => trim((string)($listing['cancelled_at'] ?? '')),
    ];
}

function impact_community_normalize_state($state) {
    if (!is_array($state)) {
        $state = [];
    }
    $listings = [];
    foreach (($state['marketplace_listings'] ?? []) as $listing) {
        $normalized = impact_community_normalize_listing($listing);
        if ($normalized['username'] !== '') {
            $listings[] = $normalized;
        }
    }
    usort($listings, static function ($a, $b) {
        return strcmp((string)($b['date'] ?? ''), (string)($a['date'] ?? ''));
    });

    $tickets = [];
    foreach (($state['tickets'] ?? []) as $ticket) {
        $normalized = impact_community_normalize_ticket($ticket);
        if ($normalized['id'] !== '') {
            $tickets[] = $normalized;
        }
    }
    usort($tickets, static function ($a, $b) {
        return ((int)($b['created_at'] ?? 0)) <=> ((int)($a['created_at'] ?? 0));
    });

    return [
        'marketplace_listings' => array_values($listings),
        'tickets' => array_values($tickets),
    ];
}

function impact_community_load_state() {
    $path = impact_community_state_path();
    if (!is_file($path)) {
        return impact_community_normalize_state([]);
    }
    $raw = @file_get_contents($path);
    $decoded = json_decode($raw ?: '{}', true);
    return impact_community_normalize_state($decoded);
}

function impact_community_merge(callable $mutate) {
    $path = impact_community_state_path();
    $dir = dirname($path);
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
    $handle = @fopen($path, 'c+');
    if ($handle === false) {
        return [false, impact_community_normalize_state([]), null];
    }

    try {
        flock($handle, LOCK_EX);
        rewind($handle);
        $raw = stream_get_contents($handle) ?: '';
        $state = impact_community_normalize_state(json_decode($raw ?: '{}', true));
        try {
            $mutate($state);
        } catch (Throwable $e) {
            return [false, $state, $e->getMessage()];
        }
        $state = impact_community_normalize_state($state);
        $json = json_encode($state, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        if ($json === false) {
            return [false, $state, 'Could not encode community state.'];
        }
        ftruncate($handle, 0);
        rewind($handle);
        $written = fwrite($handle, $json);
        fflush($handle);
        return [$written !== false, $state, $written !== false ? null : 'Could not write community state.'];
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'GET') {
    lemon_json_exit(200, ['ok' => true] + impact_community_load_state());
}

$raw = file_get_contents('php://input');
$payload = json_decode($raw ?: '{}', true);
if (!is_array($payload)) {
    lemon_json_exit(400, ['error' => 'Invalid JSON body.']);
}

$action = trim((string)($payload['action'] ?? ''));
if ($action === '') {
    lemon_json_exit(400, ['error' => 'Missing action.']);
}

[$ok, $state, $error] = impact_community_merge(function (&$state) use ($action, $payload) {
    if ($action === 'submit_listing') {
        $listing = impact_community_normalize_listing($payload['listing'] ?? []);
        $ticket = impact_community_normalize_ticket($payload['ticket'] ?? []);
        if ($listing['username'] === '' || $listing['price'] <= 0 || $listing['contact'] === '') {
            throw new RuntimeException('Listing requires username, price, and contact.');
        }
        foreach (($state['marketplace_listings'] ?? []) as $existing) {
            $existingName = strtolower(trim((string)($existing['username'] ?? '')));
            $existingStatus = strtolower(trim((string)($existing['status'] ?? '')));
            if ($existingName !== '' && $existingName === strtolower($listing['username']) && in_array($existingStatus, ['pending', 'active'], true)) {
                throw new RuntimeException('That username already has a pending or active listing.');
            }
        }
        array_unshift($state['marketplace_listings'], $listing);
        array_unshift($state['tickets'], $ticket);
        return;
    }

    if ($action === 'create_ticket') {
        $ticket = impact_community_normalize_ticket($payload['ticket'] ?? []);
        if ($ticket['username'] === '' || $ticket['amount'] <= 0 || $ticket['created_by'] === '') {
            throw new RuntimeException('Ticket requires username, amount, and creator.');
        }
        array_unshift($state['tickets'], $ticket);
        return;
    }

    if ($action === 'update_listing_status') {
        $listingId = trim((string)($payload['listing_id'] ?? ''));
        $status = trim((string)($payload['status'] ?? ''));
        foreach ($state['marketplace_listings'] as &$listing) {
            if ((string)($listing['id'] ?? '') !== $listingId) {
                continue;
            }
            $listing['status'] = $status ?: (string)($listing['status'] ?? 'pending');
            if (array_key_exists('cancelled_by', $payload)) {
                $listing['cancelled_by'] = strtolower(trim((string)($payload['cancelled_by'] ?? '')));
            }
            if (array_key_exists('cancelled_reason', $payload)) {
                $listing['cancelled_reason'] = trim((string)($payload['cancelled_reason'] ?? ''));
            }
            if (array_key_exists('cancelled_at', $payload)) {
                $listing['cancelled_at'] = trim((string)($payload['cancelled_at'] ?? ''));
            }
            return;
        }
        throw new RuntimeException('Listing not found.');
    }

    if ($action === 'add_ticket_message') {
        $ticketId = trim((string)($payload['ticket_id'] ?? ''));
        $message = impact_community_normalize_message($payload['message'] ?? []);
        if ($message['text'] === '') {
            throw new RuntimeException('Message text is required.');
        }
        foreach ($state['tickets'] as &$ticket) {
            if ((string)($ticket['id'] ?? '') !== $ticketId) {
                continue;
            }
            if (($ticket['status'] ?? '') === 'resolved') {
                throw new RuntimeException('This ticket is closed.');
            }
            $ticket['messages'][] = $message;
            return;
        }
        throw new RuntimeException('Ticket not found.');
    }

    if ($action === 'update_ticket_status') {
        $ticketId = trim((string)($payload['ticket_id'] ?? ''));
        $status = trim((string)($payload['status'] ?? ''));
        $messagePayload = $payload['message'] ?? null;
        foreach ($state['tickets'] as &$ticket) {
            if ((string)($ticket['id'] ?? '') !== $ticketId) {
                continue;
            }
            if (is_array($messagePayload)) {
                $message = impact_community_normalize_message($messagePayload);
                if ($message['text'] !== '') {
                    $ticket['messages'][] = $message;
                }
            }
            $ticket['status'] = $status ?: (string)($ticket['status'] ?? 'open');
            return;
        }
        throw new RuntimeException('Ticket not found.');
    }

    throw new RuntimeException('Unsupported action.');
});

if (!$ok) {
    lemon_json_exit($error ? 400 : 500, ['error' => $error ?: 'Could not save community state.'] + $state);
}

lemon_json_exit(200, ['ok' => true] + $state);
