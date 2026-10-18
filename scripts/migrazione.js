// Scarica da Eurostat (API JSON-stat) dieci indicatori su migrazione, asilo e rimpatri per UE27 e 27 Stati membri
// e scrive data/migrazione.js (window.MIGRAZIONE). Uso: node scripts/migrazione.js [--anno 2025]
// Se un indicatore fallisce stampa una diagnostica (dimensioni e codici disponibili) per correggere i filtri in INDICATORI.
const fs = require('fs'), path = require('path');
const API = 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data';
const UE27 = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'EL', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'];
const GEO = ['EU27_2020', ...UE27];
const ANNO = +(process.argv[process.argv.indexOf('--anno') + 1]) || 2025;
const MESE = `${ANNO}-12`;

// Ogni indicatore: dataset, filtri (tutte le dimensioni tranne geo e time), periodo e descrizione in tre lingue.
const INDICATORI = [
  { id: 'ordini', dataset: 'migr_eiord', filtri: { citizen: 'TOTAL', age: 'TOTAL', sex: 'T', unit: 'PER' }, time: String(ANNO), nome: 'Ordini di lasciare il territorio', nome_en: 'Orders to leave', nome_de: 'Ausreiseanordnungen' },
  { id: 'rimpatri_totali', dataset: 'migr_eirtn', filtri: { citizen: 'TOTAL', c_dest: 'TOTAL', age: 'TOTAL', sex: 'T', unit: 'PER' }, time: String(ANNO), nome: 'Rimpatriati (totale, inclusi i trasferimenti verso altri Stati membri)', nome_en: 'Returned (total, including transfers to other member states)', nome_de: 'Rückgeführte (gesamt, inkl. Überstellungen in andere Mitgliedstaaten)' },
  { id: 'rimpatri_terzi', dataset: 'migr_eirtn', filtri: { citizen: 'TOTAL', c_dest: 'THRD', age: 'TOTAL', sex: 'T', unit: 'PER' }, time: String(ANNO), nome: 'Rimpatriati verso paesi terzi', nome_en: 'Returned to third countries', nome_de: 'In Drittstaaten Rückgeführte' },
  { id: 'irregolari', dataset: 'migr_eipre', filtri: { citizen: 'TOTAL', reason: 'TOTAL', apprehen: 'TOTAL', age: 'TOTAL', sex: 'T', unit: 'PER' }, time: String(ANNO), nome: 'Trovati in posizione irregolare', nome_en: 'Found to be illegally present', nome_de: 'Irregulär aufgegriffen' },
  { id: 'respinti', dataset: 'migr_eirfs', filtri: { citizen: 'TOTAL', border: 'TOTAL', reason: 'TOTAL', unit: 'PER' }, time: String(ANNO), nome: 'Respinti alle frontiere esterne', nome_en: 'Refused entry at external borders', nome_de: 'An den Außengrenzen zurückgewiesen' },
  { id: 'asilo_prime_domande', dataset: 'migr_asyappctza', filtri: { citizen: 'TOTAL', applicant: 'FRST', age: 'TOTAL', sex: 'T', unit: 'PER' }, time: String(ANNO), nome: 'Prime domande di asilo', nome_en: 'First-time asylum applications', nome_de: 'Erstanträge auf Asyl' },
  { id: 'asilo_decisioni', dataset: 'migr_asydcfsta', filtri: { citizen: 'TOTAL', decision: 'TOTAL', age: 'TOTAL', sex: 'T', unit: 'PER' }, time: String(ANNO), nome: 'Decisioni di prima istanza', nome_en: 'First-instance decisions', nome_de: 'Erstinstanzliche Entscheidungen' },
  { id: 'asilo_positive', dataset: 'migr_asydcfsta', filtri: { citizen: 'TOTAL', decision: 'POS', age: 'TOTAL', sex: 'T', unit: 'PER' }, time: String(ANNO), nome: 'Decisioni positive di prima istanza', nome_en: 'Positive first-instance decisions', nome_de: 'Positive erstinstanzliche Entscheidungen' },
  { id: 'asilo_pendenti', dataset: 'migr_asypenctzm', filtri: { citizen: 'TOTAL', age: 'TOTAL', sex: 'T', unit: 'PER' }, time: MESE, nome: 'Domande di asilo pendenti a fine dicembre', nome_en: 'Asylum applications pending at end of December', nome_de: 'Anhängige Asylanträge Ende Dezember' },
  { id: 'protezione_temporanea', dataset: 'migr_asytpsm', filtri: { citizen: 'TOTAL', age: 'TOTAL', sex: 'T', unit: 'PER' }, time: MESE, nome: 'Beneficiari di protezione temporanea a fine dicembre', nome_en: 'Beneficiaries of temporary protection at end of December', nome_de: 'Begünstigte des vorübergehenden Schutzes Ende Dezember' }
];

async function scarica(ind) {
  const q = new URLSearchParams({ lang: 'EN', time: ind.time });
  for (const [k, v] of Object.entries(ind.filtri)) q.append(k, v);
  for (const g of GEO) q.append('geo', g);
  const url = `${API}/${ind.dataset}?${q}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`HTTP ${r.status} ${r.statusText}\n  ${url}\n  ${(await r.text()).slice(0, 300)}`);
  const d = await r.json();
  if (d.error || !d.dimension) throw new Error(`risposta senza dati: ${JSON.stringify(d).slice(0, 300)}`);
  // JSON-stat: value è un dizionario indice → valore; l'indice è calcolato dalle dimensioni in ordine (id) con i loro size.
  const ids = d.id, size = d.size;
  const idx = {}; ids.forEach((k, i) => idx[k] = d.dimension[k].category.index);
  const out = {};
  const geoIdx = idx.geo;
  for (const g of GEO) {
    if (!(g in geoIdx)) { out[g] = null; continue; }
    // posizione lineare: somma di (indice categoria × prodotto dei size successivi); le dimensioni filtrate hanno size 1 e indice 0.
    let pos = 0;
    for (let i = 0; i < ids.length; i++) {
      const k = ids[i]; const ci = k === 'geo' ? geoIdx[g] : (k === 'time' ? idx.time[ind.time] : 0);
      if (ci === undefined) throw new Error(`categoria mancante per ${k}`);
      let mult = 1; for (let j = i + 1; j < ids.length; j++) mult *= size[j];
      pos += ci * mult;
    }
    const v = d.value[pos];
    out[g] = v === undefined ? null : v;
  }
  const aggiornato = d.updated ? String(d.updated).slice(0, 10) : null; // data dell'ultimo aggiornamento Eurostat del dataset
  return { valori: out, aggiornato, url, dims: ids.map(k => `${k}:${Object.keys(d.dimension[k].category.index).length}`).join(' ') };
}

async function diagnostica(ind) {
  try {
    const r = await fetch(`${API}/${ind.dataset}?lang=EN&geo=EU27_2020&time=${ind.time}`);
    const d = await r.json();
    if (!d.dimension) return `  diagnostica: ${JSON.stringify(d).slice(0, 400)}`;
    return Object.entries(d.dimension).map(([k, v]) => `  ${k}: ${Object.keys(v.category.index).slice(0, 12).join(', ')}${Object.keys(v.category.index).length > 12 ? ', …' : ''}`).join('\n');
  } catch (e) { return `  diagnostica non disponibile: ${e.message}`; }
}

(async () => {
  const ris = {}; let errori = 0;
  for (const ind of INDICATORI) {
    try {
      const r = await scarica(ind);
      const nulli = GEO.filter(g => r.valori[g] == null);
      ris[ind.id] = { nome: ind.nome, nome_en: ind.nome_en, nome_de: ind.nome_de, dataset: ind.dataset, periodo: ind.time, aggiornato_eurostat: r.aggiornato, fonte: `https://ec.europa.eu/eurostat/databrowser/view/${ind.dataset}/default/table`, valori: r.valori };
      console.log(`ok  ${ind.id.padEnd(22)} ${ind.dataset.padEnd(16)} ${ind.time.padEnd(8)} agg. ${r.aggiornato} EU27 ${String(r.valori.EU27_2020).padStart(10)}${nulli.length ? '  mancanti: ' + nulli.join(' ') : ''}`);
    } catch (e) {
      errori++;
      console.log(`ERR ${ind.id.padEnd(22)} ${ind.dataset.padEnd(16)} ${ind.time}: ${e.message}`);
      console.log(await diagnostica(ind));
    }
  }
  if (errori) { console.error(`\n${errori} indicatori falliti: correggi i filtri in INDICATORI.`); process.exit(1); }
  const estratto = new Date().toISOString().slice(0, 10);
  const out = { estratto, anno: ANNO, mese: MESE, geo: GEO, indicatori: ris };
  const dest = path.join(__dirname, '..', 'data', 'migrazione.js');
  const agg = [...new Set(Object.values(ris).map(x => `${x.dataset} ${x.aggiornato_eurostat}`))].join(', ');
  fs.writeFileSync(dest, `// Indicatori Eurostat su migrazione, asilo e rimpatri (UE27 e Stati membri). Generato da scripts/migrazione.js, non modificare a mano.\n// Estratto dall'API Eurostat il ${estratto}. Ultimo aggiornamento Eurostat dei dataset: ${agg}.\n// Codici geo Eurostat: EL = Grecia. Dati arrotondati a 5 da Eurostat; "rimpatri_totali" include i trasferimenti verso altri Stati membri.\nwindow.MIGRAZIONE = ${JSON.stringify(out, null, 1)};\n`);
  console.log(`\nscritto ${path.relative(process.cwd(), dest)}: ${Object.keys(ris).length} indicatori × ${GEO.length} geo`);
})();
