exports.handler = async (event) => {
  const username = String(event.queryStringParameters?.username || '').trim();
  if (!username) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing username.' })
    };
  }

  const upstreamBase = process.env.IMPACT_HISCORES_UPSTREAM_BASE || '';
  if (!upstreamBase) {
    return {
      statusCode: 501,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Hiscores source is not configured on this deployment yet.',
        needs_config: true
      })
    };
  }

  try {
    const url = `${String(upstreamBase).replace(/\/$/, '')}/${encodeURIComponent(username)}`;
    const res = await fetch(url, {
      headers: { Accept: 'application/json' }
    });
    const text = await res.text();
    let data = {};
    try {
      data = JSON.parse(text);
    } catch (e) {
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'The hiscores source returned invalid data.' })
      };
    }

    return {
      statusCode: res.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Could not reach the hiscores source.' })
    };
  }
};
