<?php
/**
 * Copy to stripe-secrets.php (same folder). Never commit real keys.
 *
 * Stripe Dashboard: https://dashboard.stripe.com
 * - Developers → API keys: Secret key (sk_live_... or sk_test_...)
 * - Products → create Pro (recurring) and Founder (one-time) → copy each Price ID (price_...)
 * - Developers → Webhooks → Add endpoint → signing secret (whsec_...)
 * - Settings → Customer portal: enable so users can manage subscriptions
 */
return [
    'STRIPE_SECRET_KEY' => '',
    'STRIPE_WEBHOOK_SECRET' => '',
    'STRIPE_PRICE_PRO' => '',
    'STRIPE_PRICE_FOUNDER' => '',
    'IMPACT_PUBLIC_SITE_URL' => 'https://example.com',
    // Same as other admin tools (optional if already in lemon-secrets.php)
    'IMPACT_ADMIN_API_KEY' => '',
];
