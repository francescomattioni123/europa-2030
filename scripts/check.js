// Controllo di coerenza dei file dati. Uso: node scripts/check.js
const fs = require('fs'), vm = require('vm');
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ['data/paesi.js', 'data/politiche.js', 'data/aggiornamenti.js']) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx);
const { PAESI, POLITICHE, AGGIORNAMENTI, META } = ctx.window;
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
if (errs.length) { console.error('ERRORI:\n' + errs.join('\n')); process.exit(1); }
console.log(`ok: ${PAESI.length} paesi, ${POLITICHE.temi.length} temi, aggiornato al ${META.aggiornato}`);
