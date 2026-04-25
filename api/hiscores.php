<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

$username = trim($_GET['username'] ?? '');
if ($username === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Missing username.']);
  exit;
}

function normalize_skill_key(string $name): string {
  $name = strtolower(trim($name));
  $name = preg_replace('/\s+/', ' ', $name);
  $map = [
    'overall' => 'overall',
    'attack' => 'attack',
    'defence' => 'defence',
    'strength' => 'strength',
    'hitpoints' => 'hitpoints',
    'ranged' => 'ranged',
    'prayer' => 'prayer',
    'magic' => 'magic',
    'cooking' => 'cooking',
    'woodcutting' => 'woodcutting',
    'fletching' => 'fletching',
    'fishing' => 'fishing',
    'firemaking' => 'firemaking',
    'crafting' => 'crafting',
    'smithing' => 'smithing',
    'mining' => 'mining',
    'herblore' => 'herblore',
    'agility' => 'agility',
    'thieving' => 'thieving',
    'slayer' => 'slayer',
    'farming' => 'farming',
    'runecrafting' => 'runecrafting',
    'runecraft' => 'runecrafting',
    'hunter' => 'hunter',
  ];
  return $map[$name] ?? preg_replace('/[^a-z]/', '', $name);
}

function parse_impact_hiscores_html(string $html): array {
  libxml_use_internal_errors(true);
  $dom = new DOMDocument();
  $loaded = @$dom->loadHTML($html);
  if (!$loaded) {
    return [];
  }

  $xpath = new DOMXPath($dom);
  $tables = $xpath->query('//table');
  $skills = [];

  foreach ($tables as $table) {
    $headerNodes = $xpath->query('.//tr[1]/th', $table);
    $headers = [];
    foreach ($headerNodes as $header) {
      $headers[] = strtolower(trim($header->textContent));
    }

    if (!$headers) continue;
    $hasSkill = in_array('skill', $headers, true);
    $hasLevel = in_array('level', $headers, true);
    $hasXp = in_array('xp', $headers, true) || in_array('experience', $headers, true);
    if (!$hasSkill || !$hasLevel || !$hasXp) continue;

    $skillIndex = array_search('skill', $headers, true);
    $levelIndex = array_search('level', $headers, true);
    $xpIndex = array_search('xp', $headers, true);
    if ($xpIndex === false) $xpIndex = array_search('experience', $headers, true);
    $rankIndex = array_search('rank', $headers, true);

    $rows = $xpath->query('.//tr[position() > 1]', $table);
    foreach ($rows as $row) {
      $cells = $xpath->query('./td', $row);
      if ($cells->length < 3) continue;

      $skillName = trim($cells->item($skillIndex)?->textContent ?? '');
      $levelRaw = trim($cells->item($levelIndex)?->textContent ?? '');
      $xpRaw = trim($cells->item($xpIndex)?->textContent ?? '');
      $rankRaw = $rankIndex !== false ? trim($cells->item($rankIndex)?->textContent ?? '-') : '-';
      if ($skillName === '') continue;

      $key = normalize_skill_key($skillName);
      $level = (int)preg_replace('/[^0-9]/', '', $levelRaw);
      $xp = (int)preg_replace('/[^0-9]/', '', $xpRaw);
      if ($key === '' || $level <= 0 && $xp <= 0) continue;

      $skills[$key] = [
        'rank' => $rankRaw === '' ? '-' : $rankRaw,
        'level' => $level,
        'xp' => $xp
      ];
    }
  }

  return $skills;
}

function impact_hiscores_plain_text(string $html): string {
  $text = preg_replace('/<script\b[^>]*>.*?<\/script>/is', ' ', $html);
  $text = preg_replace('/<style\b[^>]*>.*?<\/style>/is', ' ', $text);
  $text = preg_replace('/<[^>]+>/', ' ', $text);
  $text = html_entity_decode($text, ENT_QUOTES | ENT_HTML5, 'UTF-8');
  return trim((string)preg_replace('/\s+/', ' ', $text));
}

function parse_impact_hiscores_text(string $html): array {
  $text = impact_hiscores_plain_text($html);
  $start = stripos($text, 'Skills Skill Rank Level XP');
  if ($start !== false) {
    $text = substr($text, $start);
  }

  $end = stripos($text, ' Other Type Rank');
  if ($end !== false) {
    $text = substr($text, 0, $end);
  }

  $skillNames = [
    'Overall',
    'Attack',
    'Defence',
    'Strength',
    'Hitpoints',
    'Ranged',
    'Prayer',
    'Magic',
    'Cooking',
    'Woodcutting',
    'Fletching',
    'Fishing',
    'Firemaking',
    'Crafting',
    'Smithing',
    'Mining',
    'Herblore',
    'Agility',
    'Thieving',
    'Slayer',
    'Farming',
    'Runecrafting',
    'Hunter',
  ];

  $skills = [];
  foreach ($skillNames as $skillName) {
    $pattern = '/\b' . preg_quote($skillName, '/') . '\s+(-|#?\d[\d,]*)\s+(\d{1,4})\s+(\d[\d,]*)\b/i';
    if (!preg_match($pattern, $text, $match)) {
      continue;
    }

    $key = normalize_skill_key($skillName);
    $level = (int)preg_replace('/[^0-9]/', '', $match[2]);
    $xp = (int)preg_replace('/[^0-9]/', '', $match[3]);
    if ($key === '' || ($level <= 0 && $xp <= 0)) {
      continue;
    }

    $skills[$key] = [
      'rank' => $match[1] === '' ? '-' : $match[1],
      'level' => $level,
      'xp' => $xp,
    ];
  }

  return $skills;
}

$upstreamBase = getenv('IMPACT_HISCORES_UPSTREAM_BASE') ?: 'https://impact.gg/hiscores/player';
$url = rtrim($upstreamBase, '/') . '/' . rawurlencode($username);
$context = stream_context_create([
  'http' => [
    'method' => 'GET',
    'timeout' => 15,
    'header' => "Accept: text/html,application/json\r\nUser-Agent: ImpactUtils-Hiscores/1.0\r\n"
  ]
]);

$response = @file_get_contents($url, false, $context);
if ($response === false) {
  http_response_code(502);
  echo json_encode(['error' => 'Could not reach the hiscores source.']);
  exit;
}

$contentType = '';
if (!empty($http_response_header)) {
  foreach ($http_response_header as $headerLine) {
    if (stripos($headerLine, 'Content-Type:') === 0) {
      $contentType = trim(substr($headerLine, strlen('Content-Type:')));
      break;
    }
  }
}

$data = null;
if (stripos($contentType, 'application/json') !== false) {
  $data = json_decode($response, true);
}

if (!is_array($data)) {
  $skills = parse_impact_hiscores_html($response);
  if (!$skills) {
    $skills = parse_impact_hiscores_text($response);
  }
  if (!$skills) {
    if (stripos(impact_hiscores_plain_text($response), 'Account does not exist') !== false) {
      http_response_code(404);
      echo json_encode(['error' => 'That Impact account does not exist. Check the username and try again.']);
      exit;
    }

    http_response_code(502);
    echo json_encode(['error' => 'Could not parse skills from the hiscores page.']);
    exit;
  }
  echo json_encode([
    'username' => $username,
    'source' => $url,
    'skills' => $skills
  ]);
  exit;
}

if (empty($data['skills']) || !is_array($data['skills'])) {
  http_response_code(502);
  echo json_encode(['error' => 'The hiscores source returned data, but no skills were found.']);
  exit;
}

echo json_encode($data);
