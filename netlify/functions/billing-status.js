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
  if (!apiKey) {
    return json(503, { error: 'Lemon Squeezy is not configured.' });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return json(400, { error: 'Invalid JSON body.' });
  }

  const subId = String(payload.lemonSubscriptionId || '').trim();
  if (!subId) {
    return json(400, { error: 'lemonSubscriptionId is required for Pro status sync.' });
  }

  const { res, json: body } = await lemonFetch(apiKey, `/subscriptions/${encodeURIComponent(subId)}`, {
    method: 'GET'
  });

  if (!res.ok) {
    return json(200, {
      plan: 'free',
      currentPeriodEnd: null,
      lemonSubscriptionId: '',
      customerPortalUrl: null
    });
  }

  const attrs = body?.data?.attributes;
  const status = String(attrs?.status || '').toLowerCase();
  const activeLike = ['active', 'on_trial', 'paused'].includes(status);
  const endsAt = attrs?.ends_at ? new Date(attrs.ends_at).getTime() : 0;
  const cancelledGrace =
    status === 'cancelled' && endsAt && !Number.isNaN(endsAt) && endsAt > Date.now();

  if (!activeLike && !cancelledGrace) {
    return json(200, {
      plan: 'free',
      currentPeriodEnd: null,
      lemonSubscriptionId: '',
      customerPortalUrl: attrs?.urls?.customer_portal || null
    });
  }

  return json(200, {
    plan: 'pro',
    currentPeriodEnd: subscriptionAccessEnd(attrs),
    lemonSubscriptionId: subId,
    lemonCustomerId: String(attrs?.customer_id || ''),
    customerPortalUrl: attrs?.urls?.customer_portal || null
  });
};
