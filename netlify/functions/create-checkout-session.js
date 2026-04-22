/**
 * Lemon Squeezy checkout (replaces Stripe).
 * Netlify env:
 *   LEMONSQUEEZY_API_KEY
 *   LEMONSQUEEZY_STORE_ID          (numeric store id from Lemon dashboard)
 *   LEMONSQUEEZY_VARIANT_PRO       (variant id for Pro subscription product)
 *   LEMONSQUEEZY_VARIANT_FOUNDER   (variant id for Founder one-time product)
 *   LEMONSQUEEZY_TEST_MODE         optional: "true" for test checkouts
 *   URL or IMPACT_PUBLIC_SITE_URL  success redirect base
 */
const { lemonFetch } = require('./lib/lemonsqueezy-http');

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    },
    body: JSON.stringify(body)
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return json(200, { ok: true });
  }
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed.' });
  }

  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;
  const variantPro = process.env.LEMONSQUEEZY_VARIANT_PRO;
  const variantFounder = process.env.LEMONSQUEEZY_VARIANT_FOUNDER;

  if (!apiKey || !storeId || !variantPro || !variantFounder) {
    return json(503, {
      error:
        'Lemon Squeezy is not configured. Set LEMONSQUEEZY_API_KEY, LEMONSQUEEZY_STORE_ID, LEMONSQUEEZY_VARIANT_PRO, and LEMONSQUEEZY_VARIANT_FOUNDER in Netlify.'
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return json(400, { error: 'Invalid JSON body.' });
  }

  const plan = String(payload.plan || '').toLowerCase();
  if (!['pro', 'founder'].includes(plan)) {
    return json(400, { error: 'plan must be "pro" or "founder".' });
  }

  const customerEmail = String(payload.customerEmail || '')
    .trim()
    .toLowerCase();
  if (!customerEmail || !customerEmail.includes('@')) {
    return json(400, { error: 'A valid customerEmail is required.' });
  }

  const displayName = String(payload.displayName || '').trim() || customerEmail;

  const siteUrl = String(process.env.URL || process.env.DEPLOY_PRIME_URL || process.env.IMPACT_PUBLIC_SITE_URL || '')
    .trim()
    .replace(/\/$/, '');
  if (!siteUrl) {
    return json(503, {
      error: 'Set IMPACT_PUBLIC_SITE_URL (e.g. https://impactutils.com) or deploy URL in Netlify.'
    });
  }

  const variantId = plan === 'founder' ? variantFounder : variantPro;
  const redirectUrl = `${siteUrl}/?billing=success`;

  const testMode = String(process.env.LEMONSQUEEZY_TEST_MODE || '').toLowerCase() === 'true';

  const { res, json: body } = await lemonFetch(apiKey, '/checkouts', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        type: 'checkouts',
        attributes: {
          test_mode: testMode,
          product_options: {
            redirect_url: redirectUrl
          },
          checkout_data: {
            email: customerEmail,
            name: displayName,
            custom: {
              impact_plan: plan,
              impact_email: customerEmail
            }
          }
        },
        relationships: {
          store: {
            data: { type: 'stores', id: String(storeId) }
          },
          variant: {
            data: { type: 'variants', id: String(variantId) }
          }
        }
      }
    })
  });

  if (!res.ok) {
    const msg = body?.errors?.map(e => e.detail || e.title).filter(Boolean).join('; ') || 'Lemon Squeezy API error';
    console.error('lemonsqueezy checkout', res.status, body);
    return json(502, { error: msg });
  }

  const url = body?.data?.attributes?.url;
  if (!url) {
    return json(502, { error: 'Checkout response had no URL.' });
  }

  return json(200, { url });
};
