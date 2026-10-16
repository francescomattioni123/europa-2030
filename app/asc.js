// Client minimo per l'App Store Connect API (firma JWT ES256 con la chiave .p8).
const crypto = require('crypto'), fs = require('fs'), https = require('https'), os = require('os'), path = require('path');
const KEY_ID = process.env.ASC_KEY_ID, ISSUER = process.env.ASC_ISSUER;
const keyPath = path.join(os.homedir(), '.appstoreconnect/private_keys', `AuthKey_${KEY_ID}.p8`);
const b64u = b => Buffer.from(b).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
function jwt() {
  const now = Math.floor(Date.now() / 1000);
  const h = b64u(JSON.stringify({ alg: 'ES256', kid: KEY_ID, typ: 'JWT' }));
  const p = b64u(JSON.stringify({ iss: ISSUER, iat: now, exp: now + 1100, aud: 'appstoreconnect-v1' }));
  const sig = crypto.sign('sha256', Buffer.from(h + '.' + p), { key: fs.readFileSync(keyPath, 'utf8'), dsaEncoding: 'ieee-p1363' });
  return h + '.' + p + '.' + b64u(sig);
}
function api(method, p, body) {
  return new Promise((res, rej) => {
    const data = body ? JSON.stringify(body) : null;
    const req = https.request({ hostname: 'api.appstoreconnect.apple.com', path: p, method, headers: { Authorization: 'Bearer ' + jwt(), 'Content-Type': 'application/json', ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}) } }, r => {
      let s = ''; r.on('data', c => s += c); r.on('end', () => { let j = null; try { j = JSON.parse(s); } catch (e) { j = s; } res({ status: r.statusCode, body: j }); });
    });
    req.on('error', rej); if (data) req.write(data); req.end();
  });
}
module.exports = { api };
if (require.main === module) {
  (async () => {
    const [,, method, p, body] = process.argv;
    const r = await api(method || 'GET', p || '/v1/apps', body ? JSON.parse(body) : undefined);
    console.log(r.status); console.log(JSON.stringify(r.body, null, 1).slice(0, 3000));
  })();
}
