/**
 * Resolve Pro (active subscription) or Founder (paid order for founder variant) by email.
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

function subscriptionAccessEnd(attrs) {
  if (!attrs) return null;
  const end = attrs.ends_at || attrs.renews_at || null;
  return end ? String(end) : null;
}

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return json(200, { ok: true });
  }
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed.' });
  }

  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  const variantPro = process.env.LEMONSQUEEZY_VARIANT_PRO;
  const variantFounder = process.env.LEMONSQUEEZY_VARIANT_FOUNDER;
  if (!apiKey || !variantPro || !variantFounder) {
    return json(503, { error: 'Lemon Squeezy is not configured.' });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return json(400, { error: 'Invalid JSON body.' });
  }

  const email = String(payload.email || '')
    .trim()
    .toLowerCase();
  if (!email || !email.includes('@')) {
    return json(400, { error: 'A valid email is required.' });
  }

  const enc = encodeURIComponent(email);
  const empty = {
    plan: 'free',
    lemonSubscriptionId: '',
    lemonCustomerId: '',
    currentPeriodEnd: null
  };

  try {
    const founderVid = String(variantFounder);
    const proVid = String(variantPro);

    const ordersPath = `/orders?filter[user_email]=${enc}&page[size]=20`;
    const { res: oRes, json: oBody } = await lemonFetch(apiKey, ordersPath, { method: 'GET' });
    if (oRes.ok && Array.isArray(oBody.data)) {
      for (const row of oBody.data) {
        const a = row.attributes || {};
        if (String(a.status || '').toLowerCase() !== 'paid') continue;
        const item = a.first_order_item;
        const vid = item && String(item.variant_id);
        if (vid === founderVid) {
          return json(200, {
            plan: 'founder',
            lemonSubscriptionId: '',
            lemonCustomerId: String(a.customer_id || ''),
            currentPeriodEnd: null
          });
        }
      }
    }

    const subsPath = `/subscriptions?filter[user_email]=${enc}&page[size]=50`;
    const { res: sRes, json: sBody } = await lemonFetch(apiKey, subsPath, { method: 'GET' });
    if (sRes.ok && Array.isArray(sBody.data)) {
      const now = Date.now();
      for (const row of sBody.data) {
        const a = row.attributes || {};
        if (String(a.variant_id || '') !== proVid) continue;
        const st = String(a.status || '').toLowerCase();
        if (['active', 'on_trial', 'paused'].includes(st)) {
          return json(200, {
            plan: 'pro',
            lemonSubscriptionId: String(row.id),
            lemonCustomerId: String(a.customer_id || ''),
            currentPeriodEnd: subscriptionAccessEnd(a)
          });
        }
        if (st === 'cancelled' && a.ends_at) {
          const end = new Date(a.ends_at).getTime();
          if (!Number.isNaN(end) && end > now) {
            return json(200, {
              plan: 'pro',
              lemonSubscriptionId: String(row.id),
              lemonCustomerId: String(a.customer_id || ''),
              currentPeriodEnd: subscriptionAccessEnd(a)
            });
          }
        }
      }
    }

    return json(200, empty);
  } catch (e) {
    console.error('recover-billing', e);
    return json(400, { error: e.message || 'Recover failed.' });
  }
};
