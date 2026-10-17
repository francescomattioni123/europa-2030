// Verifica del motore del Consiglio (v2, passo 1). Uso: node scripts/verifica-consiglio.js
// 1. Mercosur, status quo: deve riprodurre il voto reale del 9 gennaio 2026.
// 2. Prestito Ucraina (unanimità): status quo contro "coalizione probabile", anno per anno.
// 3. Dossier in cui il nuovo verdetto (governo per governo) differisce dal vecchio (blocco compatto).
const fs = require('fs'), vm = require('vm'), path = require('path');
const C = require(path.join(__dirname, '..', 'consiglio.js'));
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ['paesi', 'dossier', 'posizioni']) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'data', f + '.js'), 'utf8'), ctx);
const { PAESI, DOSSIER, POSIZIONI } = ctx.window;
const UE = PAESI.filter(p => p.ue), TOT = UE.reduce((a, p) => a + p.popolazione, 0);
const pct = n => (n / TOT * 100).toFixed(2) + '%';
const YEARS = [null, 2026, 2027, 2028, 2029, 2030], ylab = y => y || 'oggi';
const D = id => DOSSIER.find(d => d.id === id);
const line = s => console.log(s);

// 1. Mercosur
line('=== 1. Mercosur, status quo ===');
const M = C.verdetto(PAESI, POSIZIONI, D('mercosur'), 'status_quo', null);
const grp = v => M.righe.filter(r => r.v.voto === v);
for (const v of ['favorevole', 'condizionato', 'contrario', 'astensione', 'opt_out', 'da_verificare']) {
  const g = grp(v); if (!g.length) continue;
  const somma = g.reduce((a, r) => a + r.pop, 0);
  line(`${v.padEnd(14)} ${String(g.length).padStart(2)} stati  ${somma.toFixed(2).padStart(7)} mln  ${pct(somma).padStart(7)}  ${g.map(r => `${r.sigla} ${r.pop}`).join(', ')}`);
}
line(`popolazione UE27: ${TOT.toFixed(2)} mln`);
line(`verdetto: ${M.esito} · favorevoli ${M.conti.fav} con ${M.conti.popFav.toFixed(2)}% · contrari ${M.conti.con} con ${M.conti.popCon.toFixed(2)}% · confidenza ${M.confidenza} · decisivi ${M.decisivi.join(' ') || 'nessuno'}`);
const atteso = { contrario: ['AT', 'FR', 'HU', 'IE', 'PL'], astensione: ['BE'] };
const ok = JSON.stringify(grp('contrario').map(r => r.sigla).sort()) === JSON.stringify(atteso.contrario) && JSON.stringify(grp('astensione').map(r => r.sigla).sort()) === JSON.stringify(atteso.astensione) && M.esito === 'passa';
line(`riproduce il voto reale del 9 gennaio 2026 (approvato; contrari FR PL AT HU IE; BE astenuta): ${ok ? 'SÌ' : 'NO'}`);

// 2. Prestito Ucraina
line('\n=== 2. Finanziamento Ucraina (unanimità): status quo e coalizione probabile ===');
for (const scen of ['status_quo', 'coalizione']) for (const y of YEARS) {
  if (scen === 'status_quo' && y) continue;
  const V = C.verdetto(PAESI, POSIZIONI, D('ucraina_prestito'), scen, y);
  const nuovi = V.righe.filter(r => r.v.origine === 'nuovo').map(r => `${r.sigla}→${r.v.voto}${r.v.partito ? ' (' + r.v.partito + ')' : ''}`);
  line(`${scen.padEnd(10)} ${String(ylab(y)).padEnd(5)} ${V.esito.padEnd(8)} contrari: ${V.righe.filter(r => r.v.voto === 'contrario').map(r => r.sigla).join(' ') || '-'} · condizionati: ${V.righe.filter(r => r.v.voto === 'condizionato').map(r => r.sigla).join(' ') || '-'} · da verificare: ${V.conti.dv} · decisivi: ${V.decisivi.join(' ') || '-'} · confidenza ${V.confidenza}${nuovi.length ? ' · nuovi governi: ' + nuovi.join(', ') : ''}`);
}

// 3. Nuovo verdetto contro vecchio verdetto per blocco compatto
line('\n=== 3. Differenze tra verdetto governo per governo e ipotesi di blocco compatto ===');
const TIERS = [
  { id: 'solo destra nazionalista', test: st => st.fam === 'destra_nazionalista' },
  { id: 'con i partner', test: st => st.dn },
  { id: 'con il centrodestra', test: st => st.dn || st.fam === 'centrodestra' }
];
function blocco(tier, scen, y) {
  const m = UE.filter(p => tier.test(C.stato(p, scen, y))); const pop = m.reduce((a, p) => a + p.popolazione, 0) / TOT * 100;
  return { paesi: m.map(p => p.sigla), n: m.length, qmv: m.length >= 15 && pop >= 65, blocking: m.length >= 4 && pop > 35 };
}
// vecchio verdetto (index.html): il blocco ottiene il suo obiettivo; "modificare" si leggeva come capacità di bloccare
const esitoBlocco = (b, d) => d.regola === 'unanimita' ? (d.obiettivo_destra === 'approvare' ? b.n >= 27 : b.n >= 1) : (d.obiettivo_destra === 'approvare' ? b.qmv : b.blocking);
let nDiff = 0;
for (const d of DOSSIER) {
  if (d.regola === 'nazionale') continue;
  for (const scen of ['status_quo', 'primo', 'coalizione', 'trend']) for (const y of YEARS) {
    if (scen === 'status_quo' && y) continue;
    const tier = TIERS.find(t => esitoBlocco(blocco(t, scen, y), d));
    const vecchio = !!tier; // il blocco ottiene il suo obiettivo
    const V = C.verdetto(PAESI, POSIZIONI, d, scen, y);
    const voluto = POSIZIONI.dossier[d.id].esito_voluto_destra; // esito che la destra vuole sull'atto in votazione
    const nuovo = V.esito === voluto;
    if (V.esito === 'incerto' || vecchio !== nuovo) {
      nDiff++;
      let motivo;
      if (V.esito === 'incerto') motivo = `esito incerto: ${V.conti.dv} governi da verificare (${V.decisivi.join(' ')})`;
      else if (vecchio && !nuovo) {
        const membri = new Set(blocco(tier, scen, y).paesi);
        const ribelli = V.righe.filter(r => membri.has(r.sigla) && (voluto === 'passa' ? !['favorevole', 'condizionato'].includes(r.v.voto) : r.v.voto !== 'contrario'));
        motivo = `il blocco "${tier.id}" non vota compatto: ${ribelli.map(r => `${r.sigla} ${r.v.voto}`).join(', ')}`;
      } else {
        const fuori = V.righe.filter(r => !C.stato(PAESI.find(p => p.sigla === r.sigla), scen, y).dn && (voluto === 'passa' ? ['favorevole', 'condizionato'].includes(r.v.voto) : r.v.voto === 'contrario'));
        motivo = `ci arrivano governi fuori dal blocco: ${fuori.map(r => r.sigla).join(' ')}`;
      }
      line(`${d.id.padEnd(17)} ${scen.padEnd(10)} ${String(ylab(y)).padEnd(5)} destra vuole "${voluto}" · blocco compatto: ${vecchio ? 'sì' : 'no'} · governo per governo: ${V.esito} (${V.confidenza}) → ${motivo}`);
    }
  }
}
line(`righe con differenze: ${nDiff}`);
