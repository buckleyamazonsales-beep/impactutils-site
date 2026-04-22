<?php
/**
 * Send password reset code to user's email.
 * POST: { email }
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed. Use POST.']);
    exit;
}

$raw = file_get_contents('php://input');
$input = json_decode($raw ?: '{}', true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON.']);
    exit;
}

$email = strtolower(trim((string)($input['email'] ?? '')));
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'A valid email is required.']);
    exit;
}

$usersPath = __DIR__ . '/data/site-users.json';
$users = [];
if (is_file($usersPath)) {
    $raw = @file_get_contents($usersPath);
    $users = json_decode($raw ?: '[]', true);
    if (!is_array($users)) $users = [];
}

$userFound = false;
foreach ($users as $row) {
    if (is_array($row) && strtolower((string)($row['email'] ?? '')) === $email) {
        $userFound = true;
        break;
    }
}

$resetCode = str_pad((string)random_int(0, 999999), 6, '0', STR_PAD_LEFT);
$resetExpiry = time() + 900;

$h = @fopen($usersPath, 'c+');
if ($h === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Cannot access user storage.']);
    exit;
}
flock($h, LOCK_EX);
rewind($h);
$raw = stream_get_contents($h) ?: '';
$users = json_decode($raw, true);
if (!is_array($users)) $users = [];

$found = false;
foreach ($users as $i => $row) {
    if (is_array($row) && strtolower((string)($row['email'] ?? '')) === $email) {
        $users[$i]['password_reset_code'] = $resetCode;
        $users[$i]['password_reset_expires'] = $resetExpiry;
        $found = true;
        break;
    }
}

if (!$found) {
    flock($h, LOCK_UN);
    fclose($h);
    http_response_code(404);
    echo json_encode(['error' => 'No account found with that email.']);
    exit;
}

$json = json_encode(array_values($users), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
if ($json === false) {
    flock($h, LOCK_UN);
    fclose($h);
    http_response_code(500);
    echo json_encode(['error' => 'Failed to encode data.']);
    exit;
}
ftruncate($h, 0);
rewind($h);
fwrite($h, $json);
fflush($h);
flock($h, LOCK_UN);
fclose($h);

if (!$userFound) {
    echo json_encode(['ok' => true, 'message' => 'If an account exists, a reset code has been sent.']);
    exit;
}

$host = isset($_SERVER['HTTP_HOST']) ? preg_replace('/^www\./i', '', $_SERVER['HTTP_HOST']) : 'localhost';
$fromLocal = 'noreply@' . $host;
$appName = 'ImpactUtils';
$subject = $appName . ' Password Reset Code';
$body = "Hi,\n\n"
    . "Your password reset code is: {$resetCode}\n\n"
    . "This code expires in 15 minutes.\n\n"
    . "If you did not request this, ignore this email.\n";

$headers = "MIME-Version: 1.0\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n"
    . "From: {$appName} <{$fromLocal}>\r\n"
    . "Reply-To: {$fromLocal}\r\n";

$ok = @mail($email, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, "-f{$fromLocal}");

if (!$ok) {
    http_response_code(502);
    echo json_encode([
        'error' => 'Failed to send email. Ensure outbound mail is configured in cPanel.'
    ]);
    exit;
}

echo json_encode(['ok' => true, 'message' => 'Reset code sent to your email.']);
