const LS_API = 'https://api.lemonsqueezy.com/v1';

function lemonHeaders(apiKey) {
  return {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    Authorization: `Bearer ${apiKey}`
  };
}

async function lemonFetch(apiKey, path, init = {}) {
  const res = await fetch(`${LS_API}${path}`, {
    ...init,
    headers: { ...lemonHeaders(apiKey), ...(init.headers || {}) }
  });
  const json = await res.json().catch(() => ({}));
  return { res, json };
}

module.exports = { LS_API, lemonHeaders, lemonFetch };
