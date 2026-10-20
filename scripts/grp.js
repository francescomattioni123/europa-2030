// The Great Remigration Plan ("GRP"): legge docs/grp/GRP-Italia.xlsx (valori calcolati, non formule) e
// docs/grp/Great-Remigration-Plan-Italia.docx (testi) e scrive data/grp.json e data/grp.js (window.GRP).
// Uso: node scripts/grp.js   (npm run grp). Regole: celle vuote o "n.d." → null, mai 0; nessun numero inventato;
// niente trattini lunghi nei testi (trattino breve al posto di quello medio, virgola al posto di quello lungo). Stampa le verifiche e fallisce se non tornano.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const XLSX = require('xlsx');
const ROOT = path.join(__dirname, '..');
const XLS = path.join(ROOT, 'docs', 'grp', 'GRP-Italia.xlsx'), DOCX = path.join(ROOT, 'docs', 'grp', 'Great-Remigration-Plan-Italia.docx');

const FASI = [
  { id: 'Fase 1', nome: 'Irregolari e detenuti stranieri', colore: '#FDE8E4' },
  { id: 'Fase 2', nome: 'Regolari extra-UE (lungo soggiornanti, permessi a termine, asilo e protezione)', colore: '#FBF0D3' },
  { id: 'Fase 3', nome: 'Cittadini di origine straniera (seconda generazione, naturalizzati)', colore: '#FFF2CC' },
  { id: 'Fase 4', nome: 'Romania e protezione temporanea (Ucraina)', colore: '#DDEBF7' },
  { id: 'FUORI', nome: 'Tutti gli altri', colore: '#E7E6E6' }
];
const FATTIBILITA = { Alta: '#E6F2E8', Media: '#FBF0D3', Bassa: '#FDE8E4', Nulla: '#E7E6E6' };
const PAESI = { Italia: 'IT', Austria: 'AT', Belgio: 'BE', Bulgaria: 'BG', Cipro: 'CY', Croazia: 'HR', Danimarca: 'DK', Estonia: 'EE', Finlandia: 'FI', Francia: 'FR', Germania: 'DE', Grecia: 'EL', Irlanda: 'IE', Lettonia: 'LV', Lituania: 'LT', Lussemburgo: 'LU', Malta: 'MT', 'Paesi Bassi': 'NL', Polonia: 'PL', Portogallo: 'PT', 'Repubblica Ceca': 'CZ', Romania: 'RO', Slovacchia: 'SK', Slovenia: 'SI', Spagna: 'ES', Svezia: 'SE', Ungheria: 'HU' };

// ---------- utilità ----------
const pulisci = s => String(s).replace(/\s*\u2014\s*/g, ', ').replace(/\u2013/g, '-').replace(/\s+$/g, '').replace(/^\s+/g, '');
const testo = v => (v === '' || v == null) ? null : (typeof v === 'number' ? v : pulisci(v));
const isND = v => typeof v === 'string' && /^n\.?d\.?$/i.test(v.trim());
// valore numerico: numero → numero; vuoto o n.d. → null; testo → testo (tappe di legge)
const val = v => { if (v === '' || v == null || isND(v)) return null; if (typeof v === 'number') return v; const t = pulisci(v); const n = Number(t.replace(/\./g, '').replace(',', '.')); return t !== '' && /^[\d.,]+$/.test(t) && Number.isFinite(n) ? n : t; };
const numOnly = v => { const x = val(v); return typeof x === 'number' ? x : null; };
const chiave = h => pulisci(h).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
const livello = code => { if (!code) return 0; const tok = String(code).match(/[A-Z]+|\d+|[a-z]+|\.\d+/g) || []; return tok.length; };
const griglia = ws => XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: '' });
const vuota = r => !r || r.every(c => c === '' || c == null);
const faseNorm = f => { const t = pulisci(f || ''); return t === '' ? null : t; };

// Correzioni documentate a singole celle di testo del file Excel che contraddicono il Tracker (fonte di verità sui numeri):
// la cella viene sostituita solo se il testo coincide esattamente; ogni correzione è elencata in GRP.correzioni.
const CORREZIONI = [
  { foglio: 'Fase 1', codice: 'F2', campo: 'fare', da: new RegExp('^Esecuzione: 22,4% oggi \\u2192 60% nel 20' + '32$'), da_descrizione: 'cella G19 del tab Fase 1: esecuzione 22,4% oggi, obiettivo 60 per cento al 2032', a: 'Esecuzione: 22,4% oggi → 100% nel 2032', motivo: 'Il Tracker 2027-2032 fissa per l\'Italia il 100% di esecuzione degli ordini nel 2032 (riga "Tasso di esecuzione degli ordini"); il 60% resta solo come obiettivo UE27.' }
];
const applicate = [];
// ---------- Excel ----------
const wb = XLSX.readFile(XLS, { cellFormula: false, cellNF: false });
const S = n => { const ws = wb.Sheets[n]; if (!ws) throw new Error(`foglio mancante: ${n}`); return griglia(ws); };

// Funnel Italia: albero, flussi, trasversali, legenda fasi
function funnelItalia() {
  const g = S('Funnel Italia');
  const legenda = g.slice(3, 8).filter(r => r[0]).map(r => ({ fase: pulisci(r[0]), definizione: pulisci(r[1]) }));
  const blocchi = {}; let corrente = null, titolo = null;
  for (let i = 9; i < g.length; i++) {
    const r = g[i];
    if (r[0] === 'Codice' || (r[0] === '' && (r[1] === 'Passaggio' || r[1] === 'Categoria'))) { corrente = []; blocchi[titolo || 'albero'] = corrente; continue; }
    if (vuota(r)) { corrente = null; continue; }
    if (!corrente) { titolo = pulisci(r[0] || r[1]); continue; }
    corrente.push({ codice: testo(r[0]) || '', voce: pulisci(r[1]), segno: testo(r[2]), persone: numOnly(r[3]), quota: numOnly(r[4]), fase: faseNorm(r[5]), tab: testo(r[6]), fonte: testo(r[7]), nota: testo(r[8]) });
  }
  const albero = (blocchi['albero'] || []).map(e => Object.assign(e, { livello: livello(e.codice) }));
  const flussi = blocchi['Flussi 2025 nel perimetro operativo (non sono stock: non si sommano al funnel)'] || [];
  const trasversali = blocchi['Categorie trasversali (tagliano le righe sopra: non si sommano)'] || [];
  if (!albero.length || !flussi.length || !trasversali.length) throw new Error('Funnel Italia: blocchi non trovati ' + JSON.stringify(Object.keys(blocchi)));
  return { titolo: pulisci(g[0][0]), nota: pulisci(g[1][0]), legenda, albero, flussi, trasversali };
}

// Tab Fase 1-4 e FUORI: blocchi con intestazione Codice/Voce/.../Fonte
function tabFase(nome) {
  const g = S(nome);
  const out = { id: nome, titolo: pulisci(g[0][0]), sottotitolo: pulisci(g[1][0]), blocchi: [], fonti: null, legenda: null };
  let corrente = null, titolo = 'Chi sono e quanti sono';
  for (let i = 2; i < g.length; i++) {
    const r = g[i]; const a = String(r[0] || '');
    if (a.startsWith('Fonti:')) { out.fonti = pulisci(a.replace(/^Fonti:\s*/, '')); corrente = null; continue; }
    if (a.startsWith('Verde =')) { out.legenda = pulisci(a); corrente = null; continue; }
    if (a === 'Codice') { corrente = { titolo, righe: [] }; out.blocchi.push(corrente); continue; }
    if (vuota(r)) { corrente = null; continue; }
    if (!corrente) { titolo = pulisci(a); continue; }
    const riga = { codice: testo(r[0]) || '', voce: pulisci(r[1]), segno: testo(r[2]), persone: numOnly(r[3]), nd: isND(r[3]), fase: faseNorm(r[4]), stato: testo(r[5]), fare: testo(r[6]), cambio: testo(r[7]), fonte: testo(r[8]), livello: livello(testo(r[0]) || '') };
    for (const c of CORREZIONI) if (c.foglio === nome && c.codice === riga.codice && typeof riga[c.campo] === 'string' && c.da.test(riga[c.campo])) { riga[c.campo] = c.a; applicate.push({ foglio: c.foglio, codice: c.codice, campo: c.campo, da: c.da_descrizione, a: c.a, motivo: c.motivo }); }
    corrente.righe.push(riga);
  }
  return out;
}

// Tracker 2027-2032
function tracker() {
  const g = S('Tracker 2027-2032');
  const anni = ['2027', '2028', '2029', '2030', '2031', '2032'];
  const gruppi = []; let gr = null;
  for (let i = 5; i < g.length; i++) {
    const r = g[i]; const a = String(r[0] || '');
    if (vuota(r)) continue;
    if (a.startsWith('Ipotesi di lavoro')) break;
    if (r[1] === '' && r[2] === '' && a) { gr = { titolo: pulisci(a), righe: [] }; gruppi.push(gr); continue; }
    if (!gr) continue;
    const riga = { fase: pulisci(r[0]), categoria: pulisci(r[1]), indicatore: pulisci(r[2]), base_2025: val(r[3]), anni: {}, cambio: testo(r[10]) };
    anni.forEach((y, k) => riga.anni[y] = val(r[4 + k]));
    riga.testo = Object.values(riga.anni).some(v => typeof v === 'string') || typeof riga.base_2025 === 'string';
    gr.righe.push(riga);
  }
  return { titolo: pulisci(g[0][0]), ipotesi: pulisci(g[1][0]), nota: pulisci(g[55] ? g[55][0] : ''), anni, gruppi };
}

// Esecuzione: sei tabelle con intestazioni diverse
function esecuzione() {
  const g = S('Esecuzione');
  const tab = []; let t = null, intest = null;
  for (let i = 3; i < g.length; i++) {
    const r = g[i]; const a = String(r[0] || '');
    if (/^\d+\s·/.test(a)) { t = { id: tab.length + 1, titolo: pulisci(a.replace(/^\d+\s·\s*/, '')), colonne: [], righe: [], note: [] }; tab.push(t); intest = null; continue; }
    if (!t) continue;
    if (vuota(r)) continue;
    if (!intest) { intest = r.map(c => pulisci(c)).filter(Boolean); t.colonne = intest; continue; }
    if (r.slice(1).every(c => c === '')) { t.note.push(pulisci(a)); continue; }
    const o = {}; intest.forEach((h, k) => { o[chiave(h)] = typeof r[k] === 'number' ? r[k] : (r[k] === '' ? null : (isND(r[k]) ? null : pulisci(r[k]))); if (r[k] === '' || isND(r[k])) o[chiave(h) + '_nd'] = isND(r[k]) || undefined; });
    Object.keys(o).forEach(k => { if (o[k] === undefined) delete o[k]; });
    t.righe.push(o);
  }
  return { titolo: pulisci(g[0][0]), sottotitolo: pulisci(g[1][0]), tabelle: tab };
}

// Funnel 27 paesi
function funnel27() {
  const g = S('Funnel 27 paesi');
  const intest = g[3]; const nomi = intest.slice(4).map(pulisci);
  const paesi = nomi.map(n => PAESI[n] || (n.startsWith('UE27') ? 'UE27' : null));
  if (paesi.some(p => !p)) throw new Error('Funnel 27 paesi: paese non riconosciuto ' + JSON.stringify(nomi));
  const leggi = (r) => { const v = {}; paesi.forEach((p, k) => v[p] = numOnly(r[4 + k])); return { codice: testo(r[0]) || '', voce: pulisci(r[1]), segno: testo(r[2]), fase: faseNorm(r[3]), livello: livello(testo(r[0]) || ''), valori: v }; };
  const stock = [], flussi = []; let memo = null; const note = [];
  let blocco = 'stock';
  for (let i = 4; i < g.length; i++) {
    const r = g[i]; const a = String(r[0] || ''), b = String(r[1] || '');
    if (vuota(r)) continue;
    if (a === 'Flussi 2025') { blocco = 'flussi'; continue; }
    if (a === 'Codice') continue;
    if (a === 'Memo') { memo = leggi(r); continue; }
    if (a.startsWith('Differenze') || a.startsWith('Danimarca')) { note.push(pulisci(a)); continue; }
    (blocco === 'stock' ? stock : flussi).push(leggi(r));
  }
  return { titolo: pulisci(g[0][0]), nota: pulisci(g[1][0]), paesi, nomi: Object.fromEntries(paesi.map((p, k) => [p, nomi[k]])), stock, flussi, memo, note };
}

// Costi
function costi() {
  const g = S('Costi');
  const anni = ['2027', '2028', '2029', '2030', '2031', '2032'];
  const out = { titolo: pulisci(g[0][0]), nota: pulisci(g[1][0]), anni, unitari: [], volumi: [], per_anno: [], risparmi: [], netto: [], riferimenti: [] };
  let sez = null;
  for (let i = 3; i < g.length; i++) {
    const r = g[i]; const a = String(r[0] || '');
    if (vuota(r)) continue;
    if (/^\d+\s·/.test(a)) { sez = +a[0]; continue; }
    if (a === 'Voce') continue;
    if (sez === 1) out.unitari.push({ voce: pulisci(a), valore: numOnly(r[1]), nota: testo(r[8]) });
    else if (sez === 2) { const o = { voce: pulisci(a), anni: {}, fonte: testo(r[8]) }; anni.forEach((y, k) => o.anni[y] = numOnly(r[1 + k])); out.volumi.push(o); }
    else if (sez === 3 || sez === 4) {
      const o = { voce: pulisci(a), anni: {}, totale: numOnly(r[7]), formula: testo(r[8]) }; anni.forEach((y, k) => o.anni[y] = numOnly(r[1 + k]));
      if (sez === 3) out.per_anno.push(o); else if (a.startsWith('COSTO NETTO') || a.startsWith('Costo per') || a.startsWith('Costo variabile')) out.netto.push(o); else out.risparmi.push(o);
    } else if (sez === 5) out.riferimenti.push({ voce: pulisci(a), valore: numOnly(r[1]), nota: testo(r[8]) });
  }
  return out;
}

// ---------- Word: testi ----------
function docx() {
  const xml = execFileSync('unzip', ['-p', DOCX, 'word/document.xml'], { maxBuffer: 50 * 1024 * 1024 }).toString('utf8');
  const un = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n));
  const txt = frag => un((frag.match(/<w:t(?:\s[^>]*)?>([^<]*)<\/w:t>|<w:tab\/>/g) || []).map(x => x === '<w:tab/>' ? '\t' : x.replace(/^<w:t[^>]*>|<\/w:t>$/g, '')).join(''));
  const body = xml.slice(xml.indexOf('<w:body>'));
  const items = [];
  for (const m of body.matchAll(/<w:tbl>[\s\S]*?<\/w:tbl>|<w:p(?:\s[^>]*)?>[\s\S]*?<\/w:p>|<w:p\/>/g)) {
    const f = m[0];
    if (f.startsWith('<w:tbl>')) {
      const righe = [...f.matchAll(/<w:tr(?:\s[^>]*)?>[\s\S]*?<\/w:tr>/g)].map(tr => [...tr[0].matchAll(/<w:tc>[\s\S]*?<\/w:tc>/g)].map(tc => pulisci([...tc[0].matchAll(/<w:p(?:\s[^>]*)?>[\s\S]*?<\/w:p>/g)].map(p => txt(p[0])).join(' '))));
      items.push({ tipo: 'tabella', righe });
    } else {
      const st = (f.match(/<w:pStyle w:val="([^"]+)"/) || [])[1] || ''; const t = pulisci(txt(f));
      if (t) items.push({ tipo: st.startsWith('Heading') ? st : (st === 'ListParagraph' ? 'lista' : 'p'), testo: t });
    }
  }
  // sezioni: tutto ciò che precede il primo Heading1 è preambolo + sintesi
  const sezioni = []; let cur = { titolo: null, livello: 0, items: [] }; sezioni.push(cur);
  for (const it of items) {
    if (it.tipo === 'Heading1' || it.tipo === 'Heading2') { cur = { titolo: it.testo, livello: it.tipo === 'Heading1' ? 1 : 2, items: [] }; sezioni.push(cur); }
    else cur.items.push(it);
  }
  const prima = sezioni[0].items;
  const iPre = prima.findIndex(x => x.testo === 'Preambolo'), iSin = prima.findIndex(x => x.testo === 'Italia · Sintesi');
  const preambolo = prima.slice(iPre + 1, iSin).filter(x => x.tipo === 'p').map(x => x.testo);
  const sintesiItems = prima.slice(iSin + 1);
  const sintesi = { intro: sintesiItems.filter(x => x.tipo === 'p' && sintesiItems.indexOf(x) < sintesiItems.findIndex(y => y.tipo === 'tabella')).map(x => x.testo), tabella: (sintesiItems.find(x => x.tipo === 'tabella') || {}).righe || [], paragrafi: sintesiItems.filter(x => x.tipo === 'p' && sintesiItems.indexOf(x) > sintesiItems.findIndex(y => y.tipo === 'tabella')).map(x => x.testo) };
  const intestazione = prima.slice(0, iPre).map(x => x.testo);
  const paragrafi = {}; // testi per titolo di sezione (solo paragrafi e liste, non tabelle)
  for (const s of sezioni.slice(1)) paragrafi[s.titolo] = s.items.map(x => x.tipo === 'tabella' ? { tipo: 'tabella', righe: x.righe } : { tipo: x.tipo, testo: x.testo });
  return { intestazione, preambolo, sintesi, paragrafi, titoli: sezioni.slice(1).map(s => ({ titolo: s.titolo, livello: s.livello })) };
}

// ---------- assemblaggio ----------
const GRP = {
  generato: new Date().toISOString().slice(0, 10),
  nome: 'The Great Remigration Plan (“GRP”)', brand: 'Europa 2032', orizzonte: 2032, attuazione: '2028-2032', preparazione: 2027,
  ipotesi_base: 'Entro pochi anni le norme UE e nazionali vengono cambiate in senso favorevole all\'esecuzione del GRP; un obiettivo è difficile solo quando i paesi d\'origine non cooperano.',
  fasi: FASI, fattibilita_colori: FATTIBILITA,
  fonte: { excel: 'docs/grp/GRP-Italia.xlsx', word: 'docs/grp/Great-Remigration-Plan-Italia.docx' },
  funnel_italia: funnelItalia(),
  fasi_tab: ['Fase 1', 'Fase 2', 'Fase 3', 'Fase 4', 'FUORI'].map(tabFase),
  tracker: tracker(),
  esecuzione: esecuzione(),
  funnel_27: funnel27(),
  costi: costi(),
  testi: docx(),
  correzioni: []
};
GRP.correzioni = applicate;

// ---------- verifiche ----------
const A = GRP.funnel_italia.albero; const byC = c => (A.find(e => e.codice === c) || {}).persone;
const tot = byC(''), sommaABCD = ['A', 'B', 'C', 'D'].reduce((s, c) => s + byC(c), 0);
const foglie = A.filter(e => e.codice && !A.some(x => x.codice !== e.codice && x.codice.startsWith(e.codice))); // voci senza sottovoci
const perFase = f => foglie.filter(e => e.fase === f).reduce((s, e) => s + (e.persone || 0), 0);
const trk = GRP.tracker.gruppi[0].righe, r32 = ind => (trk.find(x => x.indicatore.startsWith(ind)) || {}).anni['2032'];
const costoTot = GRP.costi.per_anno.find(x => x.voce.startsWith('TOTALE COSTI'));
const verifiche = [
  ['Funnel Italia: totale', tot, 59281939, tot === 59281939],
  ['Funnel Italia: A+B+C+D', sommaABCD, 59281939, sommaABCD === 59281939],
  ['Fase 1 (foglie)', perFase('Fase 1'), 339000, perFase('Fase 1') === 339000],
  ['Fase 2 (foglie)', perFase('Fase 2'), 3650141, perFase('Fase 2') === 3650141],
  ['Fase 3 (foglie)', perFase('Fase 3'), 3246000, perFase('Fase 3') === 3246000],
  ['Fase 4 (foglie)', perFase('Fase 4'), 1213642, perFase('Fase 4') === 1213642],
  ['FUORI (foglie)', perFase('FUORI'), 50647041, perFase('FUORI') === 50647041],
  ['Tracker Fase 1 2032: tasso', r32('Tasso di esecuzione'), 1, r32('Tasso di esecuzione') === 1],
  ['Tracker Fase 1 2032: ordini', r32('Ordini di lasciare'), 100000, r32('Ordini di lasciare') === 100000],
  ['Tracker Fase 1 2032: rimpatri', r32('Rimpatri eseguiti'), 100000, r32('Rimpatri eseguiti') === 100000],
  ['Tracker Fase 1 2032: volontari', r32('di cui volontari'), 50000, r32('di cui volontari') === 50000],
  ['Costi: totale lordo 2032 (M€, ±1%)', costoTot.anni['2032'], 690, Math.abs(costoTot.anni['2032'] - 690) / 690 <= 0.01],
  ['Costi: totale 2027-2032 (M€, ±1%)', costoTot.totale, 3256, Math.abs(costoTot.totale - 3256) / 3256 <= 0.01],
  ['Preambolo: paragrafi', GRP.testi.preambolo.length, 6, GRP.testi.preambolo.length === 6],
  ['Sintesi: paragrafi brevi', GRP.testi.sintesi.paragrafi.length, 7, GRP.testi.sintesi.paragrafi.length === 7],
  ['Correzioni di testo applicate (Fase 1 F2: 60% → 100%)', applicate.length, CORREZIONI.length, applicate.length === CORREZIONI.length]
];
let ko = 0;
for (const [n, got, exp, ok] of verifiche) { if (!ok) ko++; console.log(`${ok ? 'ok ' : 'KO '} ${n.padEnd(40)} ottenuto ${String(typeof got === 'number' ? (Number.isInteger(got) ? got : +got.toFixed(4)) : got).padStart(12)}  atteso ${exp}`); }
// trattini lunghi nel JSON
const json = JSON.stringify(GRP, null, 1);
const dash = (json.match(/[\u2014\u2013]/g) || []).length;
console.log(`${dash ? 'KO ' : 'ok '} trattini lunghi nel JSON: ${dash}`);
if (dash) ko++;
if (ko) { console.error(`\n${ko} verifiche fallite: data/grp.json NON scritto.`); process.exit(1); }
fs.writeFileSync(path.join(ROOT, 'data', 'grp.json'), json + '\n');
fs.writeFileSync(path.join(ROOT, 'data', 'grp.js'), `// The Great Remigration Plan ("GRP"): dati generati da scripts/grp.js a partire da docs/grp/GRP-Italia.xlsx e dal documento Word. Non modificare a mano.\nwindow.GRP = ${json};\n`);
console.log(`\nscritto data/grp.json e data/grp.js (${(json.length / 1024).toFixed(0)} KB): funnel ${A.length} righe, tracker ${GRP.tracker.gruppi.reduce((s, g) => s + g.righe.length, 0)} indicatori, esecuzione ${GRP.esecuzione.tabelle.length} tabelle, 27 paesi, costi ${GRP.costi.per_anno.length} voci`);
