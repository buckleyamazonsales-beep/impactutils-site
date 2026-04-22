/**
 * Lemon Squeezy → Settings → Webhooks → URL:
 *   https://<your-site>/.netlify/functions/lemonsqueezy-webhook
 * Signing secret must match LEMONSQUEEZY_WEBHOOK_SECRET in Netlify.
 * Subscribe to: order_created, subscription_created, subscription_updated, subscription_cancelled (as needed).
 */
const crypto = require('crypto');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  if (!secret) {
    return { statusCode: 503, body: 'Webhook secret not configured' };
  }

  const rawBody = typeof event.body === 'string' ? event.body : JSON.stringify(event.body || '');
  const sig = event.headers['x-signature'] || event.headers['X-Signature'] || '';

  const hash = crypto.createHmac('sha256', secret).update(rawBody, 'utf8').digest('hex');
  let ok = false;
  try {
    ok =
      hash.length === String(sig).length &&
      crypto.timingSafeEqual(Buffer.from(hash, 'utf8'), Buffer.from(String(sig), 'utf8'));
  } catch {
    ok = hash === String(sig);
  }

  if (!ok) {
    console.error('lemonsqueezy-webhook invalid signature');
    return { statusCode: 400, body: 'Invalid signature' };
  }

  try {
    const payload = JSON.parse(rawBody);
    const name = payload?.meta?.event_name || '';
    console.log('lemonsqueezy-webhook', name, payload?.data?.type, payload?.data?.id);
  } catch (e) {
    console.warn('lemonsqueezy-webhook parse', e.message);
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};
