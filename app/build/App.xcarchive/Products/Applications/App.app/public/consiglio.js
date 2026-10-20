// Motore del Consiglio UE (v2, passo 1): voto atteso governo per governo e verdetto per dossier.
// Funzioni pure: le usano index.html (window.EU30C) e gli script in scripts/ (module.exports).
//
// Regole:
// - qmv: passa con almeno 15 stati favorevoli che rappresentano almeno il 65% della popolazione UE;
//   minoranza di blocco con almeno 4 stati contrari che superano il 35% della popolazione.
// - unanimita: un contrario blocca; astensione e opt_out non bloccano.
// - "condizionato" conta come favorevole ma rende il verdetto fragile.
// - "astensione" e "opt_out" non contano né come favorevoli né come contrari.
// - "da_verificare" non conta come favorevole: se l'esito dipende da quei governi il verdetto è "incerto".
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.EU30C = api;
})(typeof self !== 'undefined' ? self : this, function () {
  const VOTI = ['favorevole', 'contrario', 'astensione', 'condizionato', 'opt_out', 'da_verificare'];
  const CONF = ['alta', 'media', 'bassa'];
  const RANK = { alta: 3, media: 2, bassa: 1 };
  const FAV = v => v === 'favorevole' || v === 'condizionato';

  // Scenari: stessa logica della pagina (famiglia che guida il governo a fine anno y nello scenario scen).
  const anno = d => +String(d).slice(0, 4);
  const evento = (p, scen) => (scen !== 'status_quo' && p.anticipate && p.anticipate.data) || (p.transizione && p.transizione.data) || p.prossime_elezioni.data;
  function scenFam(p, scen) {
    if (scen === 'status_quo') return p.governo.famiglia;
    if (scen === 'primo') return p.scenario.primo || p.sondaggi.partiti[0].famiglia;
    return p.scenario[scen];
  }
  function scenPartner(p, scen) {
    if (scen === 'status_quo') return p.governo.destra_nazionalista_al_governo && p.governo.famiglia !== 'destra_nazionalista';
    return !!p.scenario['partner_' + scen];
  }
  function stato(p, scen, y) {
    const cur = { fam: p.governo.famiglia, dn: !!p.governo.destra_nazionalista_al_governo, proiettato: false, cambiato: false };
    if (!y || scen === 'status_quo') return cur;
    if (anno(evento(p, scen)) <= y) {
      const fam = scenFam(p, scen);
      const dn = fam === 'destra_nazionalista' || scenPartner(p, scen);
      return { fam, dn, proiettato: true, cambiato: fam !== cur.fam || dn !== cur.dn };
    }
    return cur;
  }

  // Voto atteso di un paese su un dossier, dato lo stato del suo governo nello scenario.
  // Governo invariato: posizione registrata del governo attuale (governi). Governo cambiato: posizione del
  // nuovo governo (nuovi["SIGLA:famiglia"]); se manca e la famiglia di guida è la stessa, resta quella attuale.
  function votoAtteso(POS, dossierId, p, st) {
    const D = POS && POS.dossier && POS.dossier[dossierId];
    if (!D) return { voto: 'da_verificare', origine: 'attuale' };
    if (st && st.cambiato) {
      const k = p.sigla + ':' + st.fam;
      const n = D.nuovi && D.nuovi[k];
      if (n) return Object.assign({}, n, { origine: 'nuovo', chiave: k });
      if (st.fam !== p.governo.famiglia) return { voto: 'da_verificare', origine: 'nuovo', chiave: k };
    }
    const g = D.governi && D.governi[p.sigla];
    return g ? Object.assign({}, g, { origine: 'attuale' }) : { voto: 'da_verificare', origine: 'attuale' };
  }

  // Verdetto su un insieme di righe { sigla, pop, v: { voto, confidenza } } per i 27 stati UE.
  function calcola(regola, righe) {
    const tot = righe.reduce((a, r) => a + r.pop, 0);
    const pop = s => s.reduce((a, r) => a + r.pop, 0);
    const pct = s => tot ? pop(s) / tot * 100 : 0;
    const by = f => righe.filter(r => f(r.v.voto));
    const fav = by(FAV), firm = by(v => v === 'favorevole'), cond = by(v => v === 'condizionato');
    const con = by(v => v === 'contrario'), ast = by(v => v === 'astensione' || v === 'opt_out'), dv = by(v => v === 'da_verificare');
    const conti = { fav: fav.length, popFav: pct(fav), con: con.length, popCon: pct(con), ast: ast.length, dv: dv.length, cond: cond.length, tot: righe.length };
    if (regola === 'nazionale') return { esito: 'nazionale', conti, decisivi: [], fragile: false, confidenza: null, motivo: null };
    let esito, motivo = null, decisivi = [], fragile = false;
    if (regola === 'unanimita') {
      if (con.length) { esito = 'bloccato'; motivo = 'veto'; decisivi = con; }
      else if (dv.length) { esito = 'incerto'; decisivi = dv; }
      else { esito = 'passa'; fragile = cond.length > 0; decisivi = cond; }
    } else {
      const qmv = s => s.length >= 15 && pct(s) >= 65;
      const blocca = s => s.length >= 4 && pct(s) > 35;
      if (qmv(fav)) {
        esito = 'passa'; fragile = !qmv(firm);
        // decisivi: favorevoli senza i quali la maggioranza qualificata non c'è più
        decisivi = fav.filter(r => !qmv(fav.filter(x => x !== r)));
      } else if (blocca(con)) {
        esito = 'bloccato'; motivo = 'blocco';
        // decisivi: contrari che, passando a favore, farebbero approvare
        decisivi = con.filter(r => qmv(fav.concat([r])));
      } else if (!qmv(fav.concat(dv))) {
        esito = 'bloccato'; motivo = 'mancano';
        decisivi = righe.filter(r => !FAV(r.v.voto) && r.v.voto !== 'da_verificare' && qmv(fav.concat(dv, [r])));
      } else { esito = 'incerto'; decisivi = dv; }
    }
    // confidenza: la più bassa tra i governi che determinano l'esito
    let confidenza;
    if (esito === 'incerto') confidenza = 'bassa';
    else {
      const base = decisivi.length ? decisivi : (esito === 'passa' ? fav : con.length ? con : righe.filter(r => !FAV(r.v.voto)));
      let m = 3; for (const r of base) m = Math.min(m, RANK[r.v.confidenza] || 1);
      if (fragile) m = Math.min(m, 2);
      confidenza = m === 3 ? 'alta' : m === 2 ? 'media' : 'bassa';
    }
    return { esito, motivo, conti, decisivi: decisivi.map(r => r.sigla), fragile, confidenza };
  }

  // Calcolo completo per un dossier in uno scenario e anno (y = null per oggi).
  function verdetto(PAESI, POS, dossier, scen, y) {
    const righe = PAESI.filter(p => p.ue).map(p => {
      const st = stato(p, scen, y);
      return { sigla: p.sigla, pop: p.popolazione, st, v: votoAtteso(POS, dossier.id, p, st) };
    });
    return Object.assign(calcola(dossier.regola, righe), { righe });
  }

  return { VOTI, CONF, stato, votoAtteso, calcola, verdetto };
});
