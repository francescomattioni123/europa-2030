// Controllo di coerenza dei file dati. Uso: node scripts/check.js
const fs = require('fs'), vm = require('vm');
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ['data/paesi.js', 'data/politiche.js', 'data/aggiornamenti.js', 'data/dossier.js', 'data/posizioni.js', 'data/piano.js']) if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx);
const { PAESI, POLITICHE, AGGIORNAMENTI, META, DOSSIER, POSIZIONI, PIANO } = ctx.window;
const FAM = new Set(['sinistra', 'centrosinistra', 'centro', 'centrodestra', 'destra_nazionalista', 'tecnico']);
const errs = [];
const isDate = d => /^\d{4}-\d{2}$/.test(d);
if (PAESI.length !== 30) errs.push(`paesi: attesi 30, trovati ${PAESI.length}`);
for (const p of PAESI) {
  const e = m => errs.push(`${p.sigla}: ${m}`);
  if (!FAM.has(p.governo.famiglia)) e('governo.famiglia non valida');
  for (const c of p.governo.coalizione) if (!FAM.has(c.famiglia)) e(`coalizione ${c.partito}: famiglia non valida`);
  if (!isDate(p.governo.dal)) e('governo.dal');
  if (!isDate(p.prossime_elezioni.data)) e('prossime_elezioni.data');
  if (!isDate(p.sondaggi.data)) e('sondaggi.data');
  if (!isDate(p.ultime_elezioni.data)) e('ultime_elezioni.data');
  if (!p.sondaggi.partiti.length) e('sondaggi vuoti');
  for (const q of [...p.sondaggi.partiti, ...p.ultime_elezioni.risultati]) { if (typeof q.pct !== 'number') e(`${q.partito}: pct non numerico`); if (!FAM.has(q.famiglia)) e(`${q.partito}: famiglia non valida`); }
  for (const k of ['coalizione', 'trend', 'status_quo']) if (!FAM.has(p.scenario[k])) e(`scenario.${k} non valido`);
  if (p.scenario.primo && !FAM.has(p.scenario.primo)) e('scenario.primo non valido');
  if (p.anticipate && !isDate(p.anticipate.data)) e('anticipate.data');
  if (typeof p.popolazione !== 'number') e('popolazione mancante');
  if (p.destra_principale.pct_sondaggio != null && typeof p.destra_principale.pct_sondaggio !== 'number') e('destra_principale.pct_sondaggio');
}
for (const t of POLITICHE.temi) { for (const pt of POLITICHE.partiti) if (!(pt.id in t.voti)) errs.push(`politiche ${t.id}: manca il voto di ${pt.id}`); if (!['approvare', 'bloccare', 'unanimita', 'nazionale'].includes(t.consiglio)) errs.push(`politiche ${t.id}: consiglio non valido`); }
if (!/^\d{4}-\d{2}-\d{2}$/.test(META.aggiornato)) errs.push('META.aggiornato non valido');
if (!AGGIORNAMENTI.length || AGGIORNAMENTI[0].data !== META.aggiornato) errs.push('AGGIORNAMENTI[0].data deve coincidere con META.aggiornato');
if (AGGIORNAMENTI[0] && (!AGGIORNAMENTI[0].whatsapp || AGGIORNAMENTI[0].whatsapp.length > 900)) errs.push('whatsapp mancante o troppo lungo');
if (AGGIORNAMENTI[0] && (!AGGIORNAMENTI[0].whatsapp_en || !AGGIORNAMENTI[0].titolo_en || !AGGIORNAMENTI[0].punti_en)) errs.push('voce aggiornamento senza versione inglese (titolo_en, punti_en, whatsapp_en)');
if (AGGIORNAMENTI[0] && (!AGGIORNAMENTI[0].whatsapp_de || !AGGIORNAMENTI[0].titolo_de || !AGGIORNAMENTI[0].punti_de)) errs.push('voce aggiornamento senza versione tedesca (titolo_de, punti_de, whatsapp_de)');
for (const p of PAESI) { if (!p.nome_en || !p.governo.note_en || !p.scenario.commento_coalizione_en) errs.push(`${p.sigla}: testi inglesi mancanti (nome_en, governo.note_en, scenario.commento_coalizione_en)`); if (p.anticipate && !p.anticipate.nota_en) errs.push(`${p.sigla}: anticipate.nota_en mancante`); if (!p.nome_de || !p.governo.note_de || !p.scenario.commento_coalizione_de) errs.push(`${p.sigla}: testi tedeschi mancanti (nome_de, governo.note_de, scenario.commento_coalizione_de)`); }
for (const t of POLITICHE.temi) { if (!t.titolo_en || !t.nota_en || !t.consiglio_nota_en) errs.push(`politiche ${t.id}: testi inglesi mancanti`); if (!t.titolo_de || !t.nota_de || !t.consiglio_nota_de) errs.push(`politiche ${t.id}: testi tedeschi mancanti`); }
if (DOSSIER) { const ST = ['proposta', 'parlamento', 'consiglio', 'trilogo', 'adottato', 'attuazione', 'bloccato']; for (const d of DOSSIER) { if (!ST.includes(d.stato)) errs.push(`dossier ${d.id}: stato non valido`); if (!['qmv', 'unanimita', 'nazionale'].includes(d.regola)) errs.push(`dossier ${d.id}: regola non valida`); if (!['approvare', 'bloccare', 'modificare'].includes(d.obiettivo_destra)) errs.push(`dossier ${d.id}: obiettivo_destra non valido`); for (const k of ['titolo', 'stato_nota', 'descrizione', 'obiettivo_nota']) for (const l of ['', '_en', '_de']) if (!d[k + l]) errs.push(`dossier ${d.id}: manca ${k + l}`); if (d.prossima_data && !/^\d{4}-\d{2}$/.test(d.prossima_data)) errs.push(`dossier ${d.id}: prossima_data`); } }
// posizioni dei governi per dossier (v2, passo 1)
if (DOSSIER) {
  const UE27 = new Set(PAESI.filter(p => p.ue).map(p => p.sigla));
  const VOTI = ['favorevole', 'contrario', 'astensione', 'condizionato', 'opt_out', 'da_verificare'], CONF = ['alta', 'media', 'bassa'];
  const checkPos = (where, e) => {
    if (!VOTI.includes(e.voto)) errs.push(`${where}: voto "${e.voto}" non valido`);
    if (e.voto !== 'da_verificare' && !CONF.includes(e.confidenza)) errs.push(`${where}: confidenza mancante o non valida`);
    if (e.confidenza && !CONF.includes(e.confidenza)) errs.push(`${where}: confidenza "${e.confidenza}" non valida`);
    if ((e.confidenza === 'alta' || e.confidenza === 'media') && !/^https?:\/\//.test(e.fonte || '')) errs.push(`${where}: fonte obbligatoria con confidenza ${e.confidenza}`);
    if (e.data && !/^\d{4}-\d{2}(-\d{2})?$/.test(e.data)) errs.push(`${where}: data non valida`);
    if (!e.nota || !e.nota_en || !e.nota_de) errs.push(`${where}: servono nota, nota_en e nota_de`);
  };
  if (!POSIZIONI || !POSIZIONI.dossier) errs.push('posizioni.js mancante o senza "dossier"');
  else {
    for (const d of DOSSIER) if (!POSIZIONI.dossier[d.id]) errs.push(`posizioni: manca la voce del dossier ${d.id}`);
    for (const [id, P] of Object.entries(POSIZIONI.dossier)) {
      if (!DOSSIER.find(d => d.id === id)) errs.push(`posizioni: dossier ${id} non esiste in dossier.js`);
      for (const k of ['atto', 'atto_en', 'atto_de']) if (!P[k]) errs.push(`posizioni ${id}: manca ${k}`);
      if (!['passa', 'bloccato'].includes(P.esito_voluto_destra)) errs.push(`posizioni ${id}: esito_voluto_destra deve essere passa o bloccato`);
      for (const [sig, e] of Object.entries(P.governi || {})) { if (!UE27.has(sig)) errs.push(`posizioni ${id}: sigla ${sig} non è UE27`); checkPos(`posizioni ${id}.governi.${sig}`, e); }
      for (const [key, e] of Object.entries(P.nuovi || {})) {
        const [sig, fam] = key.split(':');
        if (!UE27.has(sig)) errs.push(`posizioni ${id}: sigla ${sig} non è UE27`);
        if (!FAM.has(fam)) errs.push(`posizioni ${id}.nuovi.${key}: famiglia non valida`);
        checkPos(`posizioni ${id}.nuovi.${key}`, e);
      }
    }
  }
}
// piano (v2, passo 2)
if (PIANO) {
  const L3 = (o, k, where) => { for (const l of ['', '_en', '_de']) if (!o[k + l]) errs.push(`piano ${where}: manca ${k + l}`); };
  L3(PIANO, 'nome', 'nome'); L3(PIANO, 'premessa', 'premessa');
  for (const x of PIANO.perimetro || []) L3(x, 'testo', 'perimetro');
  for (const o of PIANO.obiettivi || []) { L3(o, 'etichetta', 'obiettivi'); if (typeof o.obiettivo !== 'number') errs.push(`piano obiettivo ${o.id}: valore non numerico`); }
  const ST = ['in_vigore', 'adottato_non_applicato', 'proposta', 'nuova'], LV = ['ue', 'nazionale', 'terzo_paese'], RG = ['qmv', 'unanimita', 'nazionale', null];
  for (const pl of PIANO.pilastri || []) { L3(pl, 'titolo', 'pilastro ' + pl.id); L3(pl, 'descrizione', 'pilastro ' + pl.id); for (const m of pl.misure || []) { L3(m, 'titolo', 'misura ' + m.id); L3(m, 'testo', 'misura ' + m.id); if (!ST.includes(m.stato)) errs.push(`piano misura ${m.id}: stato non valido`); if (!LV.includes(m.livello)) errs.push(`piano misura ${m.id}: livello non valido`); if (!RG.includes(m.regola === undefined ? null : m.regola)) errs.push(`piano misura ${m.id}: regola non valida`); if (m.dossier && DOSSIER && !DOSSIER.find(d => d.id === m.dossier)) errs.push(`piano misura ${m.id}: dossier ${m.dossier} inesistente`); if (!(m.fonte || []).length && m.stato !== 'nuova') errs.push(`piano misura ${m.id}: fonte mancante`); } }
  for (const s of PIANO.tappe || []) { L3(s, 'titolo', 'tappa'); if (!/^\d{4}-\d{2}$/.test(s.data)) errs.push(`piano tappa ${s.titolo}: data non valida`); }
  for (const r of PIANO.paesi || []) { if (!PAESI.find(p => p.sigla === r.sigla && p.ue)) errs.push(`piano paesi: sigla ${r.sigla} non è UE27`); if (!r.fonte) errs.push(`piano paesi ${r.sigla}: fonte mancante`); }
  for (const v of PIANO.vincoli || []) { L3(v, 'nome', 'vincolo'); L3(v, 'testo', 'vincolo'); }
}
if (errs.length) { console.error('ERRORI:\n' + errs.join('\n')); process.exit(1); }
console.log(`ok: ${PAESI.length} paesi, ${POLITICHE.temi.length} temi, ${DOSSIER ? DOSSIER.length + ' dossier, ' : ''}${POSIZIONI ? Object.values(POSIZIONI.dossier).reduce((a, P) => a + Object.keys(P.governi || {}).length + Object.keys(P.nuovi || {}).length, 0) + ' posizioni, ' : ''}${PIANO ? 'piano con ' + (PIANO.pilastri || []).reduce((a, pl) => a + (pl.misure || []).length, 0) + ' misure, ' : ''}aggiornato al ${META.aggiornato}`);
