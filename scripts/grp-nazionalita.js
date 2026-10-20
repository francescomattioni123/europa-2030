// GRP: ordini di lasciare il territorio (migr_eiord) e rimpatri verso paesi terzi (migr_eirtn, c_dest THRD) per
// cittadinanza. Italia 2025 e 2024, prime 15 nazionalità per ordini 2025, con tasso di esecuzione; le stesse 15 per
// Francia, Germania e Austria. Scrive data/grp-nazionalita.json e data/grp-nazionalita.js (window.GRP_NAZ).
// Regole: niente stime, cella mancante o confidenziale = null; "altri" = totale meno le 15 (null se il totale manca).
// Uso: node scripts/grp-nazionalita.js
const fs = require('fs'), path = require('path');
const API = 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data';
const GEO = ['IT', 'FR', 'DE', 'AT'], ANNI = ['2024', '2025'], TOP = 15;
const AGGREGATI = /_|^(TOTAL|UNK|STLS|RNC|EUR|AFR|ASI|AME|OCE|NAT|FOR|EU28|EU27_2007|EU25|EU15|EFTA)$/;

async function cubo(dataset, filtri) {
  const q = new URLSearchParams({ lang: 'EN' });
  for (const [k, v] of Object.entries(filtri)) for (const x of [].concat(v)) q.append(k, x);
  const url = `${API}/${dataset}?${q}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`HTTP ${r.status} ${url}\n${(await r.text()).slice(0, 300)}`);
  const d = await r.json();
  if (d.error || !d.dimension) throw new Error(`risposta senza dati: ${JSON.stringify(d).slice(0, 300)}`);
  const ids = d.id, size = d.size, dim = d.dimension;
  const mult = ids.map((_, i) => size.slice(i + 1).reduce((a, b) => a * b, 1));
  const get = sel => { let pos = 0; for (let i = 0; i < ids.length; i++) { const k = ids[i], cat = dim[k].category.index; const code = k in sel ? sel[k] : Object.keys(cat)[0]; if (!(code in cat)) return null; pos += cat[code] * mult[i]; } const v = d.value[pos]; return v === undefined ? null : v; };
  // stato della cella: ":c" confidenziale, ":" non disponibile (Eurostat li espone in status)
  const stato = sel => { let pos = 0; for (let i = 0; i < ids.length; i++) { const k = ids[i], cat = dim[k].category.index; const code = k in sel ? sel[k] : Object.keys(cat)[0]; if (!(code in cat)) return null; pos += cat[code] * mult[i]; } return d.status ? (d.status[pos] || null) : null; };
  return { get, stato, codici: k => Object.keys(dim[k].category.index), etichette: k => dim[k].category.label, aggiornato: d.updated ? String(d.updated).slice(0, 10) : null, url };
}

(async () => {
  const O = await cubo('migr_eiord', { geo: GEO, time: ANNI, age: 'TOTAL', sex: 'T', unit: 'PER' });
  const R = await cubo('migr_eirtn', { geo: GEO, time: ANNI, c_dest: 'THRD', age: 'TOTAL', sex: 'T', unit: 'PER' });
  const lab = O.etichette('citizen');
  const paesi = O.codici('citizen').filter(k => !AGGREGATI.test(k) && k.length === 2);
  const cella = (C, g, t, c) => ({ v: C.get({ geo: g, time: t, citizen: c }), s: C.stato({ geo: g, time: t, citizen: c }) });
  // prime 15 per ordini Italia 2025
  const it25 = paesi.map(c => ({ c, o: O.get({ geo: 'IT', time: '2025', citizen: c }) })).filter(x => x.o != null).sort((a, b) => b.o - a.o).slice(0, TOP).map(x => x.c);
  const riga = (c, g, t) => { const o = cella(O, g, t, c), r = cella(R, g, t, c); return { ordini: o.v, rimpatriati: r.v, tasso_pct: o.v && r.v != null ? Math.round(r.v / o.v * 1000) / 10 : null, stato_ordini: o.s, stato_rimpatri: r.s }; };
  const naz = it25.map(c => { const e = { cittadinanza: c, nome: lab[c] }; for (const g of GEO) { e[g] = {}; for (const t of ANNI) e[g][t] = riga(c, g, t); } return e; });
  const totali = {}, altri = {};
  for (const g of GEO) { totali[g] = {}; altri[g] = {}; for (const t of ANNI) { const tot = riga('TOTAL', g, t); totali[g][t] = tot; const so = naz.reduce((a, e) => a == null || e[g][t].ordini == null ? null : a + e[g][t].ordini, 0), sr = naz.reduce((a, e) => a == null || e[g][t].rimpatriati == null ? null : a + e[g][t].rimpatriati, 0); altri[g][t] = { ordini: tot.ordini != null && so != null ? tot.ordini - so : null, rimpatriati: tot.rimpatriati != null && sr != null ? tot.rimpatriati - sr : null, nota: 'totale meno le 15 nazionalità; null se una cella manca' }; } }
  const tutte_IT = paesi.map(c => ({ cittadinanza: c, nome: lab[c], '2025': riga(c, 'IT', '2025'), '2024': riga(c, 'IT', '2024') })).filter(e => e['2025'].ordini != null || e['2024'].ordini != null).sort((a, b) => (b['2025'].ordini || 0) - (a['2025'].ordini || 0));
  const out = { estratto: new Date().toISOString().slice(0, 10), aggiornato_eurostat: { migr_eiord: O.aggiornato, migr_eirtn: R.aggiornato }, fonte: { ordini: 'https://ec.europa.eu/eurostat/databrowser/view/migr_eiord/default/table', rimpatri: 'https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn/default/table' }, geo: GEO, anni: ANNI, criterio: `prime ${TOP} nazionalità per ordini Italia 2025; stesse nazionalità per FR, DE, AT`, nota: 'Ordini: cittadini di paesi terzi con ordine di lasciare il territorio; rimpatriati: verso paesi terzi (c_dest THRD). Dati Eurostat arrotondati a 5. Tasso = rimpatriati/ordini dello stesso anno. null = non disponibile o confidenziale, mai stimato. Nomi dei paesi nella forma inglese di Eurostat.', nazionalita: naz, altri, totali, tutte_IT };
  // verifiche
  const ver = [];
  for (const t of ANNI) { const so = naz.reduce((a, e) => a + e.IT[t].ordini, 0) + altri.IT[t].ordini, sr = naz.reduce((a, e) => a + e.IT[t].rimpatriati, 0) + altri.IT[t].rimpatriati; ver.push([`Italia ${t}: somma 15 + altri = ordini`, so, totali.IT[t].ordini], [`Italia ${t}: somma 15 + altri = rimpatri`, sr, totali.IT[t].rimpatriati]); }
  ver.push(['Italia 2025: ordini totali attesi', totali.IT['2025'].ordini, 21295], ['Italia 2025: rimpatri totali attesi', totali.IT['2025'].rimpatriati, 4780]);
  let ko = 0; for (const [n, a, b] of ver) { const ok = a === b; if (!ok) ko++; console.log(`${ok ? 'ok ' : 'KO '} ${n.padEnd(46)} ${String(a).padStart(8)}  atteso ${b}`); }
  console.log(`aggiornamento Eurostat: migr_eiord ${O.aggiornato} · migr_eirtn ${R.aggiornato}`);
  const nulli = naz.flatMap(e => GEO.flatMap(g => ANNI.filter(t => e[g][t].ordini == null || e[g][t].rimpatriati == null).map(t => `${e.cittadinanza} ${g} ${t}`)));
  console.log(`celle null: ${nulli.length ? nulli.join(', ') : 'nessuna'}`);
  console.log('\n| # | nazionalità | ordini IT 2025 | rimpatri IT 2025 | tasso 2025 | ordini IT 2024 | rimpatri IT 2024 | tasso 2024 |\n|---|---|---:|---:|---:|---:|---:|---:|');
  const f = v => v == null ? 'null' : v.toLocaleString('it-IT', { useGrouping: true, minimumGroupingDigits: 1 });
  naz.forEach((e, i) => console.log(`| ${i + 1} | ${e.nome} | ${f(e.IT['2025'].ordini)} | ${f(e.IT['2025'].rimpatriati)} | ${e.IT['2025'].tasso_pct == null ? 'null' : e.IT['2025'].tasso_pct.toLocaleString('it-IT') + '%'} | ${f(e.IT['2024'].ordini)} | ${f(e.IT['2024'].rimpatriati)} | ${e.IT['2024'].tasso_pct == null ? 'null' : e.IT['2024'].tasso_pct.toLocaleString('it-IT') + '%'} |`));
  console.log(`| | altri | ${f(altri.IT['2025'].ordini)} | ${f(altri.IT['2025'].rimpatriati)} | | ${f(altri.IT['2024'].ordini)} | ${f(altri.IT['2024'].rimpatriati)} | |\n| | **totale** | **${f(totali.IT['2025'].ordini)}** | **${f(totali.IT['2025'].rimpatriati)}** | **${totali.IT['2025'].tasso_pct}%** | ${f(totali.IT['2024'].ordini)} | ${f(totali.IT['2024'].rimpatriati)} | ${totali.IT['2024'].tasso_pct}% |`);
  console.log('\n| nazionalità | FR ordini | FR rimpatri | FR tasso | DE ordini | DE rimpatri | DE tasso | AT ordini | AT rimpatri | AT tasso |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|');
  naz.forEach(e => console.log(`| ${e.nome} | ${['FR', 'DE', 'AT'].map(g => `${f(e[g]['2025'].ordini)} | ${f(e[g]['2025'].rimpatriati)} | ${e[g]['2025'].tasso_pct == null ? 'null' : e[g]['2025'].tasso_pct.toLocaleString('it-IT') + '%'}`).join(' | ')} |`));
  if (ko) { console.error(`\n${ko} verifiche fallite: file NON scritti.`); process.exit(1); }
  const json = JSON.stringify(out, null, 1);
  fs.writeFileSync(path.join(__dirname, '..', 'data', 'grp-nazionalita.json'), json + '\n');
  fs.writeFileSync(path.join(__dirname, '..', 'data', 'grp-nazionalita.js'), `// Ordini e rimpatri per cittadinanza (Eurostat), generato da scripts/grp-nazionalita.js. Non modificare a mano.\nwindow.GRP_NAZ = ${json};\n`);
  console.log('\nscritto data/grp-nazionalita.json e data/grp-nazionalita.js');
})();
