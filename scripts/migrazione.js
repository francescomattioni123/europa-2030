// Scarica da Eurostat (API JSON-stat) indicatori su migrazione, asilo, rimpatri, popolazione e cittadinanza per UE27
// e 27 Stati membri e scrive data/migrazione.js (window.MIGRAZIONE). Uso: node scripts/migrazione.js [--anno 2025]
// Due famiglie di indicatori:
// - INDICATORI: un numero per geo per un periodo fisso (anno di riferimento --anno, mese dicembre dello stesso anno).
// - COMPOSTI: strutture per geo sull'ultimo anno disponibile (popolazione per cittadinanza, nati all'estero, stato
//   migratorio LFS, acquisizioni 2015-2024, permessi validi con prime cinque nazionalità e verifica protezione temporanea).
// Regola: se un dato manca per un geo resta null, mai stimato. Ogni blocco porta "aggiornato_eurostat" (campo "updated" dell'API).
// Se un indicatore fallisce stampa una diagnostica (dimensioni e codici disponibili) per correggere i filtri.
const fs = require('fs'), path = require('path');
const API = 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data';
const UE27 = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'EL', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'];
const GEO = ['EU27_2020', ...UE27];
const ANNO = +(process.argv[process.argv.indexOf('--anno') + 1]) || 2025;
const MESE = `${ANNO}-12`;
const anni = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => String(a + i));

// ---------- Indicatori semplici (un valore per geo, periodo fisso) ----------
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

// ---------- Accesso generico a un cubo JSON-stat ----------
// Scarica un dataset con i filtri dati (ogni filtro può essere un valore o una lista) e restituisce get(sel) → valore o null.
async function cubo(dataset, filtri) {
  const q = new URLSearchParams({ lang: 'EN' });
  for (const [k, v] of Object.entries(filtri)) for (const x of [].concat(v)) q.append(k, x);
  const url = `${API}/${dataset}?${q}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`HTTP ${r.status} ${r.statusText}\n  ${url}\n  ${(await r.text()).slice(0, 300)}`);
  const d = await r.json();
  if (d.error || !d.dimension) throw new Error(`risposta senza dati: ${JSON.stringify(d).slice(0, 300)}\n  ${url}`);
  const ids = d.id, size = d.size, dim = d.dimension;
  const mult = ids.map((_, i) => size.slice(i + 1).reduce((a, b) => a * b, 1));
  const get = sel => {
    let pos = 0;
    for (let i = 0; i < ids.length; i++) {
      const k = ids[i]; const cat = dim[k].category.index;
      const code = k in sel ? sel[k] : Object.keys(cat)[0];
      if (!(code in cat)) return null;
      pos += cat[code] * mult[i];
    }
    const v = d.value[pos];
    return v === undefined ? null : v;
  };
  const codici = k => dim[k] ? Object.keys(dim[k].category.index) : [];
  const etichette = k => dim[k] ? dim[k].category.label : {};
  return { get, codici, etichette, aggiornato: d.updated ? String(d.updated).slice(0, 10) : null, url, label: d.label };
}
const fonte = ds => `https://ec.europa.eu/eurostat/databrowser/view/${ds}/default/table`;
// Ultimo anno (in ordine decrescente) per cui test(anno) restituisce un valore non nullo.
const ultimo = (anniList, test) => { for (const t of [...anniList].reverse()) { const v = test(t); if (v != null) return { anno: t, valore: v }; } return null; };

async function diagnostica(dataset, time) {
  try {
    const r = await fetch(`${API}/${dataset}?lang=EN&geo=EU27_2020${time ? '&time=' + time : ''}`);
    const d = await r.json();
    if (!d.dimension) return `  diagnostica: ${JSON.stringify(d).slice(0, 400)}`;
    return Object.entries(d.dimension).map(([k, v]) => `  ${k}: ${Object.keys(v.category.index).slice(0, 12).join(', ')}${Object.keys(v.category.index).length > 12 ? ', …' : ''}`).join('\n');
  } catch (e) { return `  diagnostica non disponibile: ${e.message}`; }
}

// ---------- Indicatori composti (ultimo anno disponibile per geo) ----------
const COMPOSTI = [
  {
    id: 'popolazione_cittadinanza', dataset: 'migr_pop1ctz',
    nome: 'Popolazione residente al 1° gennaio per cittadinanza', nome_en: 'Resident population on 1 January by citizenship', nome_de: 'Wohnbevölkerung am 1. Januar nach Staatsangehörigkeit',
    async calcola() {
      const T = anni(2015, ANNO);
      const c = await cubo(this.dataset, { geo: GEO, time: T, sex: 'T', age: 'TOTAL', unit: 'NR', citizen: ['TOTAL', 'NAT', 'EU27_2020_FOR', 'NEU27_2020_FOR', 'STLS'] });
      const valori = {};
      for (const g of GEO) {
        const u = ultimo(T, t => c.get({ geo: g, time: t, citizen: 'TOTAL' }));
        if (!u) { valori[g] = null; continue; }
        const v = k => c.get({ geo: g, time: u.anno, citizen: k });
        valori[g] = { anno: +u.anno, totale: u.valore, nazionali: v('NAT'), altri_ue: v('EU27_2020_FOR'), extra_ue: v('NEU27_2020_FOR'), apolidi: v('STLS') };
      }
      return { valori, aggiornato: c.aggiornato, nota: 'Chiavi: totale, nazionali (cittadini del paese), altri_ue (cittadini di altri Stati UE), extra_ue (cittadini di paesi terzi), apolidi. Popolazione al 1° gennaio dell\'anno indicato.' };
    }
  },
  {
    id: 'nazionali_nati_estero', dataset: 'migr_pop5ctz',
    nome: 'Cittadini del paese nati all\'estero (popolazione al 1° gennaio per cittadinanza e gruppo di paese di nascita)', nome_en: 'Nationals born abroad (population on 1 January by citizenship and group of country of birth)', nome_de: 'Im Ausland geborene Staatsbürger (Bevölkerung am 1. Januar nach Staatsangehörigkeit und Geburtsland-Gruppe)',
    async calcola() {
      const T = anni(2015, ANNO);
      const c = await cubo(this.dataset, { geo: GEO, time: T, sex: 'T', unit: 'NR', citizen: ['NAT', 'TOTAL'], c_birth: ['TOTAL', 'NAT', 'FOR', 'EU27_2020_FOR', 'NEU27_2020_FOR'] });
      const valori = {};
      for (const g of GEO) {
        // ultimo anno con il dato "nazionali nati all'estero" (FOR); non si somma né si stima
        const u = ultimo(T, t => c.get({ geo: g, time: t, citizen: 'NAT', c_birth: 'FOR' }));
        if (!u) { valori[g] = null; continue; }
        const v = (cz, cb) => c.get({ geo: g, time: u.anno, citizen: cz, c_birth: cb });
        const tot = v('NAT', 'TOTAL');
        valori[g] = { anno: +u.anno, nazionali_totale: tot, nazionali_nati_estero: u.valore, di_cui_nati_ue: v('NAT', 'EU27_2020_FOR'), di_cui_nati_extra_ue: v('NAT', 'NEU27_2020_FOR'), quota_pct: tot ? Math.round(u.valore / tot * 1000) / 10 : null, popolazione_nata_estero: v('TOTAL', 'FOR') };
      }
      return { valori, aggiornato: c.aggiornato, nota: 'Il dataset non è trasmesso da tutti gli Stati: dove manca il valore resta null. popolazione_nata_estero = tutti i residenti nati all\'estero, qualunque cittadinanza.' };
    }
  },
  {
    id: 'stato_migratorio_lfs', dataset: 'lfsa_pgaccpm',
    nome: 'Popolazione 15-74 anni per stato migratorio (indagine forze di lavoro)', nome_en: 'Population aged 15-74 by migration status (Labour Force Survey)', nome_de: 'Bevölkerung 15-74 Jahre nach Migrationsstatus (Arbeitskräfteerhebung)',
    async calcola() {
      const T = anni(2021, ANNO);
      const c = await cubo(this.dataset, { geo: GEO, time: T, sex: 'T', age: 'Y15-74', unit: 'THS_PER', c_birth: 'TOTAL', c_bthpar: 'TOTAL', mgstatus: ['TOTAL', 'NBO_NAT', 'NBO_ABR', 'FBO', 'UNK'] });
      const valori = {};
      for (const g of GEO) {
        const u = ultimo(T, t => c.get({ geo: g, time: t, mgstatus: 'TOTAL' }));
        if (!u) { valori[g] = null; continue; }
        const v = k => c.get({ geo: g, time: u.anno, mgstatus: k });
        const tot = u.valore, nn = v('NBO_NAT'), na = v('NBO_ABR'), fb = v('FBO');
        const pct = x => x == null || !tot ? null : Math.round(x / tot * 1000) / 10;
        valori[g] = { anno: +u.anno, totale_migliaia: tot, nati_paese_genitori_paese_migliaia: nn, nati_paese_genitore_estero_migliaia: na, nati_estero_migliaia: fb, sconosciuto_migliaia: v('UNK'), quote_pct: { nati_paese_genitori_paese: pct(nn), nati_paese_genitore_estero: pct(na), nati_estero: pct(fb) } };
      }
      return { valori, aggiornato: c.aggiornato, nota: 'Popolazione nelle famiglie private, 15-74 anni, in migliaia. Quote in percentuale del totale (il resto è "sconosciuto"). Prima generazione = nati all\'estero; seconda generazione = nati nel paese con almeno un genitore nato all\'estero.' };
    }
  },
  {
    id: 'acquisizioni_cittadinanza', dataset: 'migr_acq',
    nome: 'Acquisizioni di cittadinanza per anno', nome_en: 'Acquisitions of citizenship by year', nome_de: 'Einbürgerungen nach Jahr',
    async calcola() {
      const T = anni(2015, 2024);
      const c = await cubo(this.dataset, { geo: GEO, time: T, sex: 'T', age: 'TOTAL', unit: 'NR', citizen: 'TOTAL', agedef: 'REACH' });
      const valori = {};
      for (const g of GEO) {
        const anniV = {}; let qualche = false;
        for (const t of T) { const v = c.get({ geo: g, time: t }); anniV[t] = v; if (v != null) qualche = true; }
        valori[g] = qualche ? { anni: anniV, totale_2015_2024: Object.values(anniV).every(v => v != null) ? Object.values(anniV).reduce((a, b) => a + b, 0) : null } : null;
      }
      return { valori, aggiornato: c.aggiornato, nota: 'Totale per paese di residenza, tutte le cittadinanze precedenti. totale_2015_2024 è calcolato solo se tutti i dieci anni sono presenti.' };
    }
  },
  {
    id: 'permessi_validi', dataset: 'migr_resvalid',
    nome: 'Permessi di soggiorno validi al 31 dicembre: totale e prime cinque nazionalità', nome_en: 'Valid residence permits on 31 December: total and top five nationalities', nome_de: 'Gültige Aufenthaltstitel am 31. Dezember: gesamt und fünf häufigste Staatsangehörigkeiten',
    async calcola() {
      // prima l'ultimo anno disponibile sul totale, poi il cubo completo per cittadinanza su quell'anno
      const T = anni(2015, ANNO);
      const c0 = await cubo(this.dataset, { geo: GEO, time: T, reason: 'TOTAL', duration: 'TOTAL', citizen: 'TOTAL' });
      const annoGeo = {}; for (const g of GEO) { const u = ultimo(T, t => c0.get({ geo: g, time: t })); annoGeo[g] = u ? u.anno : null; }
      const anniUsati = [...new Set(Object.values(annoGeo).filter(Boolean))];
      const c = await cubo(this.dataset, { geo: GEO, time: anniUsati, reason: 'TOTAL', duration: 'TOTAL' });
      const lab = c.etichette('citizen');
      // solo paesi reali: niente aggregati (contengono "_" o sono gruppi), niente TOTAL/UNK/STLS/RNC
      const esclusi = new Set(['TOTAL', 'UNK', 'STLS', 'RNC', 'EUR', 'AFR', 'ASI', 'AME', 'OCE', 'NAT', 'FOR', 'EU28', 'EU27_2007', 'EU25', 'EU15', 'EFTA', 'EU27_2020', 'EXT_EU27_2020']);
      const paesi = c.codici('citizen').filter(k => !esclusi.has(k) && !k.includes('_') && k.length === 2);
      const valori = {};
      for (const g of GEO) {
        const t = annoGeo[g]; if (!t) { valori[g] = null; continue; }
        const tot = c.get({ geo: g, time: t, citizen: 'TOTAL' });
        const lista = paesi.map(k => ({ cittadinanza: k, nome: lab[k], permessi: c.get({ geo: g, time: t, citizen: k }) })).filter(x => x.permessi != null).sort((a, b) => b.permessi - a.permessi).slice(0, 5);
        valori[g] = { anno: +t, totale: tot, prime_cinque: lista.map(x => Object.assign(x, { quota_pct: tot ? Math.round(x.permessi / tot * 1000) / 10 : null })) };
      }
      // verifica: i beneficiari di protezione temporanea (ucraini) sono inclusi nei permessi validi?
      const tp = await cubo('migr_asytpsm', { geo: GEO, time: MESE, citizen: ['UA', 'TOTAL'], age: 'TOTAL', sex: 'T', unit: 'PER' });
      const verifica = {};
      for (const g of GEO) {
        const t = annoGeo[g]; if (!t) { verifica[g] = null; continue; }
        const perm = c.get({ geo: g, time: t, citizen: 'UA' }), prot = tp.get({ geo: g, citizen: 'UA' });
        verifica[g] = { anno_permessi: +t, permessi_validi_ucraini: perm, protezione_temporanea_ucraini: prot, rapporto_pct: perm != null && prot ? Math.round(perm / prot * 1000) / 10 : null };
      }
      return { valori, aggiornato: c.aggiornato, verifica_protezione_temporanea: { nota: 'Confronto tra permessi validi a cittadini ucraini (migr_resvalid) e beneficiari ucraini di protezione temporanea a fine dicembre (migr_asytpsm). Un rapporto molto inferiore a 100% indica che la protezione temporanea non è contata tra i permessi.', aggiornato_eurostat_protezione: tp.aggiornato, valori: verifica }, nota: 'Permessi validi al 31 dicembre dell\'anno indicato, tutte le ragioni e durate. prime_cinque: cittadinanze con più permessi, aggregati esclusi.' };
    }
  }
];

(async () => {
  const ris = {}; let errori = 0;
  for (const ind of INDICATORI) {
    try {
      const c = await cubo(ind.dataset, Object.assign({ geo: GEO, time: ind.time }, ind.filtri));
      const valori = {}; for (const g of GEO) valori[g] = c.get({ geo: g });
      const nulli = GEO.filter(g => valori[g] == null);
      ris[ind.id] = { nome: ind.nome, nome_en: ind.nome_en, nome_de: ind.nome_de, dataset: ind.dataset, periodo: ind.time, aggiornato_eurostat: c.aggiornato, fonte: fonte(ind.dataset), valori };
      console.log(`ok  ${ind.id.padEnd(26)} ${ind.dataset.padEnd(16)} ${ind.time.padEnd(8)} agg. ${c.aggiornato} EU27 ${String(valori.EU27_2020).padStart(10)}${nulli.length ? '  mancanti: ' + nulli.join(' ') : ''}`);
    } catch (e) {
      errori++; console.log(`ERR ${ind.id.padEnd(26)} ${ind.dataset.padEnd(16)} ${ind.time}: ${e.message}`); console.log(await diagnostica(ind.dataset, ind.time));
    }
  }
  const composti = {};
  for (const ind of COMPOSTI) {
    try {
      const r = await ind.calcola();
      const nulli = GEO.filter(g => r.valori[g] == null);
      composti[ind.id] = Object.assign({ nome: ind.nome, nome_en: ind.nome_en, nome_de: ind.nome_de, dataset: ind.dataset, aggiornato_eurostat: r.aggiornato, fonte: fonte(ind.dataset) }, r, { aggiornato: undefined });
      delete composti[ind.id].aggiornato;
      const anniU = [...new Set(GEO.map(g => r.valori[g] && r.valori[g].anno).filter(Boolean))].sort();
      console.log(`ok  ${ind.id.padEnd(26)} ${ind.dataset.padEnd(16)} ${anniU.join('/').padEnd(8)} agg. ${r.aggiornato}${nulli.length ? '  mancanti (null): ' + nulli.join(' ') : ''}`);
    } catch (e) {
      errori++; console.log(`ERR ${ind.id.padEnd(26)} ${ind.dataset.padEnd(16)}: ${e.message}`); console.log(await diagnostica(ind.dataset));
    }
  }
  if (errori) { console.error(`\n${errori} indicatori falliti: correggi i filtri.`); process.exit(1); }
  const estratto = new Date().toISOString().slice(0, 10);
  const out = { estratto, anno: ANNO, mese: MESE, geo: GEO, indicatori: ris, composti };
  const tutti = Object.values(ris).concat(Object.values(composti));
  const agg = [...new Set(tutti.map(x => `${x.dataset} ${x.aggiornato_eurostat}`))].join(', ');
  const dest = path.join(__dirname, '..', 'data', 'migrazione.js');
  fs.writeFileSync(dest, `// Indicatori Eurostat su migrazione, asilo, rimpatri, popolazione e cittadinanza (UE27 e Stati membri). Generato da scripts/migrazione.js, non modificare a mano.\n// Estratto dall'API Eurostat il ${estratto}. Ultimo aggiornamento Eurostat dei dataset: ${agg}.\n// Codici geo Eurostat: EL = Grecia. Dati su rimpatri e asilo arrotondati a 5 da Eurostat; "rimpatri_totali" include i trasferimenti verso altri Stati membri. null = dato non trasmesso dallo Stato, mai stimato.\nwindow.MIGRAZIONE = ${JSON.stringify(out, null, 1)};\n`);
  console.log(`\nscritto ${path.relative(process.cwd(), dest)}: ${Object.keys(ris).length} indicatori semplici + ${Object.keys(composti).length} composti × ${GEO.length} geo`);
})();
