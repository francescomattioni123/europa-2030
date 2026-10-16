# Aggiornamento settimanale di Europa 2030

Questa pagina (https://francescomattioni123.github.io/europa-2030/) è una dashboard statica: `index.html` legge i file in `data/`.
L'aggiornamento settimanale tocca SOLO i file dati. Non modificare `index.html`, `sw.js`, `manifest.json`, `icons/` né `data/mondo-topo.js`.

## Cosa fare, nell'ordine

1. **Leggi `data/paesi.js`** (30 paesi: UE 27 + Regno Unito, Norvegia, Svizzera) e `data/aggiornamenti.js`.
2. **Per ogni paese verifica con ricerche web** (fonti: PolitPro, Europe Elects, le pagine Wikipedia "Opinion polling for the next … election" e "Government of …", stampa nazionale):
   - cambi di governo: nuovo capo del governo, cambio di coalizione, dimissioni, governo caduto, elezioni svolte;
   - sondaggi più recenti: aggiorna `sondaggi.data`, `sondaggi.fonte`, `sondaggi.partiti` (6-7 partiti, `pct` numerico, `famiglia` nell'enum);
   - `destra_principale.pct_sondaggio` e `trend` (`in_crescita` / `stabile` / `in_calo`);
   - se un'elezione si è svolta: aggiorna `ultime_elezioni`, `governo` (quando il nuovo esecutivo è in carica, altrimenti `tipo: "ad_interim"` e una `transizione` con la data prevista), `prossime_elezioni`, e rimuovi `anticipate` se non ha più senso;
   - `anticipate` (voto anticipato probabile): aggiungilo o toglilo solo se la situazione politica è cambiata davvero, e spiega nella `nota`.
3. **Regole editoriali da mantenere** (sono scelte del proprietario, non si cambiano senza una sua indicazione):
   - Regno Unito: `scenario.primo`, `coalizione` e `trend` restano `destra_nazionalista` (assunzione: Reform vince le elezioni del 2029), anche se i sondaggi dicono altro; aggiorna solo il testo di `commento_coalizione` con i numeri nuovi.
   - Germania: `scenario.coalizione` resta `destra_nazionalista` (il cordone sanitario si assume ceda).
   - Francia: conta il presidente (`capo_stato`), non il primo ministro. Cipro: il presidente.
   - Le famiglie politiche non si riclassificano: ANO e SDS a destra nazionalista, Smer a sinistra, Svizzera `tecnico`.
   - Non ammorbidire i risultati: se un partito di destra nazionalista cresce, lo scenario `trend` deve rifletterlo.
4. **Gli scenari** (`scenario.coalizione`, `scenario.trend`) si cambiano solo se i fatti cambiano (risultato elettorale, crollo o balzo di oltre 5 punti di un partito, rottura di una coalizione). In quel caso aggiorna anche `commento_coalizione`.
5. **Dossier legislativi** (`data/dossier.js`): per ciascun fascicolo verifica se lo stato è cambiato (voto in Consiglio, posizione del Parlamento, accordo in trilogo, adozione, blocco) e aggiorna `stato`, `stato_nota`, `prossima_tappa`, `prossima_data` e `aggiornato`, in tutte e tre le lingue (`_en`, `_de`). Fonti: comunicati del Consiglio (consilium.europa.eu), Legislative Train del Parlamento, Politico Europe, Euractiv. Aggiungi un dossier nuovo solo se è entrato davvero nell'agenda della destra; non toccare `regola` e `obiettivo_destra` senza un fatto nuovo.
6. **Scrivi il registro**: in `data/aggiornamenti.js` metti in cima una nuova voce `{ data: "AAAA-MM-GG", titolo, punti: [3-6 frasi concrete con i numeri], whatsapp }` e porta `META.aggiornato` alla stessa data. Il campo `whatsapp` è un messaggio di massimo 600 caratteri, in italiano, che finisce con il link della pagina: dice chi è salito, chi è sceso, quali governi sono cambiati e che cosa cambia nello scenario "coalizione probabile" al 2030. Se in una settimana non cambia nulla di rilevante, scrivi comunque la voce ("nessun cambio di rilievo", con i 2-3 movimenti più grandi nei sondaggi).
7. **Controlla**: `node scripts/check.js` deve stampare `ok`. Poi apri mentalmente `index.html`: i campi che la pagina usa sono quelli già presenti, non inventare chiavi nuove.
8. **Commit e push su `main`** con messaggio `Aggiornamento settimanale AAAA-MM-GG`. GitHub Pages pubblica da solo in un paio di minuti.

## Inglese e tedesco (obbligatori)
La pagina ha un selettore IT/EN/DE. Ogni testo libero esiste in tre versioni: il campo italiano e lo stesso campo con suffisso `_en` (inglese) e `_de` (tedesco) (in `paesi.js`: `nome_en`, `governo.note_en`, `prossime_elezioni.note_en`, `sondaggi.fonte_en`, `scenario.commento_coalizione_en`, `anticipate.nota_en`, `transizione.nota_en`, `capo_stato.nota_en`; in `politiche.js`: `area_en`, `titolo_en`, `nota_en`, `consiglio_nota_en`, `titolo_en`/`testo_en`; in `aggiornamenti.js`: `titolo_en`, `punti_en`, `whatsapp_en`). Quando modifichi un testo italiano aggiorna anche le versioni inglese (inglese britannico, punto decimale) e tedesca (Hochdeutsch, virgola decimale), stessi fatti e numeri. La voce settimanale in `aggiornamenti.js` deve avere `whatsapp`, `whatsapp_en` e `whatsapp_de`; `scripts/check.js` lo verifica.

## Schema minimo di un paese
Vedi i paesi già presenti: `iso`, `sigla`, `nome`, `popolazione`, `ue`, `governo{premier, partito, famiglia, coalizione[], dal, tipo, destra_nazionalista_al_governo, note}`, `capo_stato?`, `transizione?`, `anticipate?`, `ultime_elezioni{data, risultati[]}`, `prossime_elezioni{data, tipo, note}`, `sondaggi{data, fonte, partiti[]}`, `destra_principale{partito, leader, gruppo_pe, pct_sondaggio, pct_ultime_elezioni, trend}`, `scenario{primo?, coalizione, trend, status_quo, partner_primo?, partner_coalizione?, partner_trend?, commento_coalizione}`, `fonti[]`.
Date sempre `AAAA-MM`. Testi in italiano. Numeri con il punto decimale.
