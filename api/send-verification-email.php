<?php
/**
 * Free verification email for cPanel / shared hosting (PHP mail()).
 * Upload this file to: public_html/api/send-verification-email.php
 * Create an email account like noreply@yourdomain.com in cPanel (recommended "From").
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

// Browser address bar = GET. The app sends POST with JSON; this is only a sanity check.
if ($_SERVER['REQUEST_METHOD'] === 'GET' || $_SERVER['REQUEST_METHOD'] === 'HEAD') {
  http_response_code(200);
  if ($_SERVER['REQUEST_METHOD'] !== 'HEAD') {
    echo json_encode([
      'ok' => true,
      'message' => 'Verification email endpoint is live. Signup from the ImpactUtils app sends a POST here with email, code, displayName, and expiresAt.'
    ]);
  }
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed. Use POST from the app.']);
  exit;
}

$raw = file_get_contents('php://input');
$input = json_decode($raw ?: '{}', true);
if (!is_array($input)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid JSON request body.']);
  exit;
}

$email = strtolower(trim((string)($input['email'] ?? '')));
$code = trim((string)($input['code'] ?? ''));
$displayName = trim((string)($input['displayName'] ?? ''));
$expiresAt = trim((string)($input['expiresAt'] ?? ''));

if ($email === '' || $code === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Email and verification code are required.']);
  exit;
}

if (!preg_match('/^\d{6}$/', $code)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid verification code format.']);
  exit;
}

$displayName = $displayName !== '' ? preg_replace('/[\r\n]+/', ' ', $displayName) : $email;
if (function_exists('mb_substr')) {
  $displayName = mb_substr($displayName, 0, 120);
} else {
  $displayName = substr($displayName, 0, 120);
}

$host = isset($_SERVER['HTTP_HOST']) ? preg_replace('/^www\./i', '', $_SERVER['HTTP_HOST']) : 'localhost';
$fromLocal = 'noreply@' . $host;

$appName = 'ImpactUtils';
$subject = $appName . ' verification code';

$expiryLine = '';
if ($expiresAt !== '') {
  $ts = strtotime($expiresAt);
  $expiryLine = $ts ? "\nThis code expires around " . date('c', $ts) . ".\n" : "\nThis code expires soon.\n";
}

$body = "Hi {$displayName},\n\n"
  . "Your verification code is: {$code}\n"
  . $expiryLine
  . "\nIf you did not request this, you can ignore this email.\n";

$headers = "MIME-Version: 1.0\r\n"
  . "Content-Type: text/plain; charset=UTF-8\r\n"
  . "From: {$appName} <{$fromLocal}>\r\n"
  . "Reply-To: {$fromLocal}\r\n";

$ok = @mail($email, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, "-f{$fromLocal}");

if (!$ok) {
  http_response_code(502);
  echo json_encode([
    'error' => 'Server could not send mail. In cPanel, create an email address matching the From domain (e.g. noreply@' . $host . ') or ask your host to enable outbound mail.'
  ]);
  exit;
}

echo json_encode(['ok' => true, 'emailId' => null]);
