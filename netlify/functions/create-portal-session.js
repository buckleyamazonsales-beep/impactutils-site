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
  if (!apiKey) {
    return json(503, { error: 'Lemon Squeezy is not configured.' });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return json(400, { error: 'Invalid JSON body.' });
  }

  const lemonSubscriptionId = String(payload.lemonSubscriptionId || '').trim();
  if (!lemonSubscriptionId) {
    return json(400, { error: 'lemonSubscriptionId is required for the billing portal.' });
  }

  const { res, json: body } = await lemonFetch(
    apiKey,
    `/subscriptions/${encodeURIComponent(lemonSubscriptionId)}`,
    { method: 'GET' }
  );

  if (!res.ok) {
    return json(502, { error: body?.errors?.[0]?.detail || 'Could not load subscription.' });
  }

  const url = body?.data?.attributes?.urls?.customer_portal;
  if (!url) {
    return json(502, {
      error: 'No customer portal URL on this subscription. Check the subscription in Lemon Squeezy.'
    });
  }

  return json(200, { url });
};
