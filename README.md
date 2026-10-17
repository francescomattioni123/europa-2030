# Europa 2030

Dashboard sulla politica europea: chi governa in 30 paesi, chi è primo nei sondaggi, scenari fino al 2030, potere in Consiglio UE e agenda comune delle destre.

Pagina: https://francescomattioni123.github.io/europa-2030/

- `index.html`: la pagina (mappa a cupola in canvas, scenari, schede paese, calendario, matrice).
- `data/paesi.js`: governi, sondaggi, scenari per paese.
- `data/politiche.js`: matrice delle proposte e regole del Consiglio.
- `data/dossier.js`: fascicoli legislativi UE sul tavolo, con stato, prossima tappa e obiettivo della destra.
- `data/posizioni.js`: come vota ciascun governo UE27 su ogni dossier (governo attuale e governi futuri degli scenari), con fonte e confidenza.
- `consiglio.js`: motore del Consiglio UE (maggioranza qualificata, minoranza di blocco, unanimità) che calcola il voto atteso governo per governo; usato dalla pagina e dagli script.
- `data/aggiornamenti.js`: registro degli aggiornamenti e riassunto per WhatsApp.
- `data/iscrizione.js`: link dei canali (Telegram, email, X) mostrati nel box "Il brief settimanale".
- `data/mondo-topo.js`: geometria (world-atlas 50m).
- `manifest.json`, `sw.js`, `icons/`: la pagina è installabile come app (schermata Home su iPhone e Android, schermo intero, cache offline).
- `og.jpg`: immagine di anteprima del link (WhatsApp, X, LinkedIn).
- `scripts/check.js`: controllo di coerenza dei dati (`node scripts/check.js`).
- `scripts/verifica-consiglio.js`: verifica del motore su casi reali (`node scripts/verifica-consiglio.js`).
- `AGGIORNAMENTO.md`: procedura dell'aggiornamento settimanale.
