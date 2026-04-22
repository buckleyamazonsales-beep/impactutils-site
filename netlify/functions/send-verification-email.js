const DEFAULT_APP_NAME = process.env.APP_NAME || 'ImpactUtils';
const DEFAULT_SUPPORT_EMAIL = process.env.APP_SUPPORT_EMAIL || process.env.RESEND_FROM_EMAIL || 'support@example.com';

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

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return json(503, {
      error: 'Email delivery is not configured yet. Set RESEND_API_KEY and RESEND_FROM_EMAIL in your deploy environment.'
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return json(400, { error: 'Invalid JSON request body.' });
  }

  const email = String(payload.email || '').trim().toLowerCase();
  const code = String(payload.code || '').trim();
  const displayName = String(payload.displayName || email || 'player').trim();
  const expiresAt = String(payload.expiresAt || '').trim();

  if (!email || !code) {
    return json(400, { error: 'Email and verification code are required.' });
  }

  const subject = `${DEFAULT_APP_NAME} verification code`;
  const safeExpiry = expiresAt ? new Date(expiresAt).toLocaleString() : 'soon';
  const html = `
    <div style="font-family:Arial,sans-serif;background:#f4f6f8;padding:32px;color:#10212b;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:18px;padding:32px;border:1px solid #d7e0e7;">
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#4f7b87;margin-bottom:12px;">
          ${DEFAULT_APP_NAME}
        </div>
        <h1 style="margin:0 0 12px;font-size:28px;line-height:1.2;">Verify your email</h1>
        <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:#44545e;">
          Hi ${displayName}, use the 6-digit code below to verify your account.
        </p>
        <div style="margin:24px 0;padding:18px 20px;border-radius:16px;background:#0d2a34;color:#68e1d1;font-size:34px;font-weight:700;letter-spacing:0.35em;text-align:center;">
          ${code}
        </div>
        <p style="margin:0 0 16px;font-size:14px;line-height:1.7;color:#44545e;">
          This code expires around <strong>${safeExpiry}</strong>.
        </p>
        <p style="margin:0;font-size:13px;line-height:1.7;color:#667781;">
          If you did not request this, you can ignore this email. For help, contact ${DEFAULT_SUPPORT_EMAIL}.
        </p>
      </div>
    </div>
  `;

  const text = [
    `${DEFAULT_APP_NAME} verification code`,
    '',
    `Hi ${displayName},`,
    `Your verification code is: ${code}`,
    expiresAt ? `This code expires around ${safeExpiry}.` : '',
    '',
    `If you did not request this, ignore this email.`,
    `Support: ${DEFAULT_SUPPORT_EMAIL}`
  ].filter(Boolean).join('\n');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject,
      html,
      text
    })
  });

  const resendPayload = await resendResponse.json().catch(() => ({}));
  if (!resendResponse.ok) {
    return json(502, {
      error: resendPayload?.message || resendPayload?.error || 'Resend failed to accept the verification email.'
    });
  }

  return json(200, {
    ok: true,
    emailId: resendPayload?.id || resendPayload?.data?.id || null
  });
};
