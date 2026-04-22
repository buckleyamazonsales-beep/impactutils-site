<?php
/**
 * Copy this file to lemon-secrets.php in the same folder on your server.
 * lemon-secrets.php is listed in .gitignore — never commit real keys.
 *
 * Lemon Squeezy → Settings → API: API key
 * Lemon Squeezy → Settings → Webhooks: signing secret (for lemonsqueezy-webhook URL)
 * Lemon dashboard: Store ID (numeric), Variant IDs for Pro and Founder products
 */
return [
    'LEMONSQUEEZY_API_KEY' => '',
    'LEMONSQUEEZY_WEBHOOK_SECRET' => '',
    'LEMONSQUEEZY_STORE_ID' => '',
    'LEMONSQUEEZY_VARIANT_PRO' => '1526790',
    'LEMONSQUEEZY_VARIANT_FOUNDER' => '1526794',
    // Set to 'true' while your Lemon store is in test mode
    'LEMONSQUEEZY_TEST_MODE' => '',
    // After checkout, Lemon redirects here — use your real HTTPS URL
    'IMPACT_PUBLIC_SITE_URL' => 'https://impactutils.com',

    // Long random string — paste same value in Admin → Site registry (stored in this browser only)
    'IMPACT_ADMIN_API_KEY' => '',
];
