// The Great Remigration Plan ("GRP"): dati generati da scripts/grp.js a partire da docs/grp/GRP-Italia.xlsx e dal documento Word. Non modificare a mano.
window.GRP = {
 "generato": "2026-10-20",
 "nome": "The Great Remigration Plan (“GRP”)",
 "brand": "Europa 2032",
 "orizzonte": 2032,
 "attuazione": "2028-2032",
 "preparazione": 2027,
 "ipotesi_base": "Entro pochi anni le norme UE e nazionali vengono cambiate in senso favorevole all'esecuzione del GRP; un obiettivo è difficile solo quando i paesi d'origine non cooperano.",
 "fasi": [
  {
   "id": "Fase 1",
   "nome": "Irregolari e detenuti stranieri",
   "colore": "#FDE8E4"
  },
  {
   "id": "Fase 2",
   "nome": "Regolari extra-UE (lungo soggiornanti, permessi a termine, asilo e protezione)",
   "colore": "#FBF0D3"
  },
  {
   "id": "Fase 3",
   "nome": "Cittadini di origine straniera (seconda generazione, naturalizzati)",
   "colore": "#FFF2CC"
  },
  {
   "id": "Fase 4",
   "nome": "Romania e protezione temporanea (Ucraina)",
   "colore": "#DDEBF7"
  },
  {
   "id": "FUORI",
   "nome": "Tutti gli altri",
   "colore": "#E7E6E6"
  }
 ],
 "fattibilita_colori": {
  "Alta": "#E6F2E8",
  "Media": "#FBF0D3",
  "Bassa": "#FDE8E4",
  "Nulla": "#E7E6E6"
 },
 "fonte": {
  "excel": "docs/grp/GRP-Italia.xlsx",
  "word": "docs/grp/Great-Remigration-Plan-Italia.docx"
 },
 "funnel_italia": {
  "titolo": "Great Remigration Plan · Italia · Funnel della popolazione",
  "nota": "Albero additivo: ogni voce è la somma delle voci sotto (“+”); “=” marca i totali; le voci “residuo” chiudono la somma per differenza.",
  "legenda": [
   {
    "fase": "Fase 1",
    "definizione": "Irregolari: rimpatriabili con la legge attuale"
   },
   {
    "fase": "Fase 2",
    "definizione": "Regolari extra-UE: entrano quando perdono il titolo (legge ordinaria, accordi di riammissione)"
   },
   {
    "fase": "Fase 3",
    "definizione": "Cittadini di origine straniera: serve riforma della cittadinanza e un cambio costituzionale/CEDU"
   },
   {
    "fase": "Fase 4",
    "definizione": "Cittadini UE e protezione temporanea: dipende dal diritto UE"
   },
   {
    "fase": "FUORI",
    "definizione": "Nessuna remigrazione"
   }
  ],
  "albero": [
   {
    "codice": "",
    "voce": "PRESENTI IN ITALIA (residenti + irregolari stimati)",
    "segno": "=",
    "persone": 59281939,
    "quota": 1,
    "fase": null,
    "tab": null,
    "fonte": "Calcolo",
    "nota": null,
    "livello": 0
   },
   {
    "codice": "A",
    "voce": "Cittadini italiani",
    "segno": "=",
    "persone": 53572213,
    "quota": 0.903685235396906,
    "fase": null,
    "tab": null,
    "fonte": "Eurostat migr_pop1ctz · 1.1.2025",
    "nota": null,
    "livello": 1
   },
   {
    "codice": "A1",
    "voce": "Nati in Italia",
    "segno": "=",
    "persone": 51213465,
    "quota": 0.863896590831822,
    "fase": null,
    "tab": null,
    "fonte": "Calcolo: A − A2",
    "nota": null,
    "livello": 2
   },
   {
    "codice": "A1a",
    "voce": "da genitori nati in Italia (residuo)",
    "segno": "+",
    "persone": 50057465,
    "quota": 0.844396553898144,
    "fase": "FUORI",
    "tab": null,
    "fonte": "Calcolo: A1 − A1b",
    "nota": null,
    "livello": 3
   },
   {
    "codice": "A1b",
    "voce": "seconda generazione: almeno un genitore nato all’estero",
    "segno": "+",
    "persone": 1156000,
    "quota": 0.0195000369336772,
    "fase": "Fase 3",
    "tab": "Seconda generazione",
    "fonte": "Eurostat LFS 2025, stima",
    "nota": "Solo 15-74 anni",
    "livello": 3
   },
   {
    "codice": "A2",
    "voce": "Nati all’estero",
    "segno": "=",
    "persone": 2358748,
    "quota": 0.0397886445650842,
    "fase": null,
    "tab": "Naturalizzati",
    "fonte": "Eurostat migr_pop5ctz · 1.1.2025 (2.358.748)",
    "nota": null,
    "livello": 2
   },
   {
    "codice": "A2a",
    "voce": "italiani per acquisizione della cittadinanza",
    "segno": "+",
    "persone": 2090000,
    "quota": 0.0352552570859735,
    "fase": "Fase 3",
    "tab": "Naturalizzati",
    "fonte": "ISTAT stima · 31.12.2024",
    "nota": "Include naturalizzati nati in Italia (sovrapposto in parte ad A1b)",
    "livello": 3
   },
   {
    "codice": "A2b",
    "voce": "italiani dalla nascita nati all’estero (residuo)",
    "segno": "+",
    "persone": 268748,
    "quota": 0.00453338747911063,
    "fase": "FUORI",
    "tab": null,
    "fonte": "Calcolo: 2.358.748 − A2a",
    "nota": "Figli di emigrati, iure sanguinis",
    "livello": 3
   },
   {
    "codice": "B",
    "voce": "Cittadini di altri Stati UE",
    "segno": "=",
    "persone": 1373870,
    "quota": 0.0231751866280892,
    "fase": null,
    "tab": "Cittadini UE",
    "fonte": "Eurostat migr_pop1ctz · 1.1.2025 (1.373.870)",
    "nota": null,
    "livello": 1
   },
   {
    "codice": "B1",
    "voce": "Romania",
    "segno": "+",
    "persone": 1053042,
    "quota": 0.0177632853743195,
    "fase": "Fase 4",
    "tab": "Cittadini UE",
    "fonte": "ISTAT · 1.1.2025",
    "nota": null,
    "livello": 2
   },
   {
    "codice": "B2",
    "voce": "altri Stati UE (residuo)",
    "segno": "+",
    "persone": 320828,
    "quota": 0.00541190125376972,
    "fase": "FUORI",
    "tab": "Cittadini UE",
    "fonte": "Calcolo: 1.373.870 − B1",
    "nota": null,
    "livello": 2
   },
   {
    "codice": "C",
    "voce": "Cittadini extra-UE residenti",
    "segno": "=",
    "persone": 3996856,
    "quota": 0.0674211415385722,
    "fase": null,
    "tab": null,
    "fonte": "Eurostat migr_pop1ctz · 1.1.2025 (3.996.856)",
    "nota": null,
    "livello": 1
   },
   {
    "codice": "C1",
    "voce": "con permesso di soggiorno valido",
    "segno": "=",
    "persone": 3810741,
    "quota": 0.0642816524607942,
    "fase": null,
    "tab": null,
    "fonte": "ISTAT · 31.12.2024 (3.810.741)",
    "nota": "Titoli validi, residenti e non",
    "livello": 2
   },
   {
    "codice": "C1a",
    "voce": "lungo soggiornanti (permesso UE senza scadenza)",
    "segno": "+",
    "persone": 2012071,
    "quota": 0.0339407083159004,
    "fase": "Fase 2",
    "tab": "Lungo soggiornanti",
    "fonte": "ISTAT: 52,8% dello stock",
    "nota": null,
    "livello": 3
   },
   {
    "codice": "C1b",
    "voce": "permessi a termine",
    "segno": "=",
    "persone": 1798670,
    "quota": 0.0303409441448938,
    "fase": null,
    "tab": null,
    "fonte": "Calcolo: 3.810.741 − C1a",
    "nota": null,
    "livello": 3
   },
   {
    "codice": "C1b.1",
    "voce": "asilo e protezione",
    "segno": "=",
    "persone": 483673,
    "quota": 0.00815885931126511,
    "fase": null,
    "tab": "Protezione e asilo",
    "fonte": "ISTAT · 31.12.2024 (483.673)",
    "nota": null,
    "livello": 4
   },
   {
    "codice": "C1b.1a",
    "voce": "protezione temporanea (Ucraina)",
    "segno": "+",
    "persone": 160600,
    "quota": 0.00270908817608007,
    "fase": "Fase 4",
    "tab": "Protezione e asilo",
    "fonte": "ISTAT · 31.12.2024",
    "nota": "Scade il 4.3.2028. Eurostat (stock 2026): 60.485",
    "livello": 5
   },
   {
    "codice": "C1b.1b",
    "voce": "richiesta asilo in attesa di decisione",
    "segno": "+",
    "persone": 151000,
    "quota": 0.00254715015310144,
    "fase": "Fase 2",
    "tab": "Protezione e asilo",
    "fonte": "ISTAT · 31.12.2024",
    "nota": null,
    "livello": 5
   },
   {
    "codice": "C1b.1c",
    "voce": "status di rifugiato",
    "segno": "+",
    "persone": 59744,
    "quota": 0.00100779429633703,
    "fase": "Fase 2",
    "tab": "Protezione e asilo",
    "fonte": "ISTAT · 31.12.2024",
    "nota": null,
    "livello": 5
   },
   {
    "codice": "C1b.1d",
    "voce": "protezione sussidiaria",
    "segno": "+",
    "persone": 54771,
    "quota": 0.00092390702672529,
    "fase": "Fase 2",
    "tab": "Protezione e asilo",
    "fonte": "ISTAT · 31.12.2024",
    "nota": null,
    "livello": 5
   },
   {
    "codice": "C1b.1e",
    "voce": "protezione speciale e altre (residuo)",
    "segno": "+",
    "persone": 57558,
    "quota": 0.000970919659021275,
    "fase": "Fase 2",
    "tab": "Protezione e asilo",
    "fonte": "Calcolo: 483.673 − somma sopra",
    "nota": null,
    "livello": 5
   },
   {
    "codice": "C1b.2",
    "voce": "lavoro, famiglia, studio, altri motivi (residuo)",
    "segno": "+",
    "persone": 1314997,
    "quota": 0.0221820848336287,
    "fase": "Fase 2",
    "tab": "Permessi a termine",
    "fonte": "Calcolo: 3.810.741 − C1a − C1b.1",
    "nota": null,
    "livello": 4
   },
   {
    "codice": "C2",
    "voce": "scarto tra residenti anagrafici e titoli validi (residuo)",
    "segno": "+",
    "persone": 186115,
    "quota": 0.00313948907777797,
    "fase": null,
    "tab": null,
    "fonte": "Calcolo: 3.996.856 − C1",
    "nota": "Differenza di fonte, non una categoria",
    "livello": 2
   },
   {
    "codice": "D",
    "voce": "Irregolari presenti, non residenti (stima)",
    "segno": "=",
    "persone": 339000,
    "quota": 0.00571843643643303,
    "fase": "Fase 1",
    "tab": "Irregolari",
    "fonte": "ISMU · 1.1.2025",
    "nota": null,
    "livello": 1
   }
  ],
  "flussi": [
   {
    "codice": "F1",
    "voce": "Trovati in posizione irregolare",
    "segno": null,
    "persone": 82505,
    "quota": 3.87438365813571,
    "fase": "Fase 1",
    "tab": "Irregolari",
    "fonte": "Eurostat migr_eipre · 2025",
    "nota": null
   },
   {
    "codice": "F2",
    "voce": "Ordini di lasciare il territorio",
    "segno": null,
    "persone": 21295,
    "quota": 1,
    "fase": "Fase 1",
    "tab": "Irregolari",
    "fonte": "Eurostat migr_eiord · 2025",
    "nota": null
   },
   {
    "codice": "F3",
    "voce": "Rimpatri verso paesi terzi eseguiti",
    "segno": null,
    "persone": 4780,
    "quota": 0.224465837050951,
    "fase": "Fase 1",
    "tab": "Irregolari",
    "fonte": "Eurostat migr_eirtn · 2025 (4.780)",
    "nota": "Tasso di esecuzione 22,4%"
   },
   {
    "codice": "F3a",
    "voce": "di cui dopo trattenimento in CPR",
    "segno": null,
    "persone": 1732,
    "quota": 0.0813336463958676,
    "fase": "Fase 1",
    "tab": "Irregolari",
    "fonte": "ActionAid/UniBa · 2025",
    "nota": "148 giorni e 16.560 € per rimpatrio"
   },
   {
    "codice": "F3b",
    "voce": "di cui senza CPR (residuo)",
    "segno": null,
    "persone": 3048,
    "quota": 0.143132190655083,
    "fase": "Fase 1",
    "tab": "Irregolari",
    "fonte": "Calcolo",
    "nota": null
   },
   {
    "codice": "F4",
    "voce": "Rimpatri volontari assistiti (RVA)",
    "segno": null,
    "persone": 717,
    "quota": 0.0336698755576426,
    "fase": "Fase 1",
    "tab": "Irregolari",
    "fonte": "ActionAid/UniBa · gen 2023-lug 2025",
    "nota": "≈ 300 l’anno"
   }
  ],
  "trasversali": [
   {
    "codice": "T1",
    "voce": "Stranieri nati in Italia, senza cittadinanza",
    "segno": null,
    "persone": 870000,
    "quota": 0.0146756333324387,
    "fase": "Fase 2",
    "tab": "Seconda generazione",
    "fonte": "ISTAT RA 2025, stima",
    "nota": "≈ 1 su 6 dei residenti stranieri; in gran parte minori"
   },
   {
    "codice": "T2",
    "voce": "Detenuti stranieri",
    "segno": null,
    "persone": 19816,
    "quota": 0.000334267069098398,
    "fase": "Fase 1",
    "tab": "Condannati",
    "fonte": "Min. Giustizia · 30.6.2025",
    "nota": null
   }
  ]
 },
 "fasi_tab": [
  {
   "id": "Fase 1",
   "titolo": "Fase 1 · Irregolari e condannati",
   "sottotitolo": "Rimpatriabili con la legge attuale. Il problema è l’esecuzione, non la norma.",
   "blocchi": [
    {
     "titolo": "Chi sono e quanti sono",
     "righe": [
      {
       "codice": "TOT",
       "voce": "Fase 1: persone nel perimetro operativo",
       "segno": "=",
       "persone": 339000,
       "nd": false,
       "fase": "Fase 1",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Funnel Italia",
       "livello": 1
      },
      {
       "codice": "A",
       "voce": "Irregolari presenti (stima)",
       "segno": "=",
       "persone": 339000,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Espellibili (TU art. 13)",
       "fare": "Ordine → partenza volontaria 7-30 gg o accompagnamento; CPR fino a 18 mesi (24+6 dal 16.10.2026)",
       "cambio": "Nessuno. Servono accordi di riammissione (Marocco, Algeria, Pakistan, Bangladesh), canale volontario, identificazione",
       "fonte": "ISMU · 1.1.2025",
       "livello": 1
      },
      {
       "codice": "A1",
       "voce": "di cui per cittadinanza",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "Fase 1",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Eurostat migr_eiord per nazionalità: da estrarre",
       "livello": 2
      },
      {
       "codice": "T",
       "voce": "Trasversale: detenuti stranieri (dentro A, Fase 2 e Fase 4)",
       "segno": "=",
       "persone": 19816,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Espulsione come misura di sicurezza (c.p. 235; TU art. 15) o sostitutiva/alternativa (art. 16)",
       "fare": "Identificare in carcere; lasciapassare pronto al fine pena; charter",
       "cambio": "Nessuno: nel 2018 solo 825 espulsioni ex art. 16. Serve riammissione",
       "fonte": "Min. Giustizia · 30.6.2025",
       "livello": 1
      },
      {
       "codice": "T1",
       "voce": "cittadini UE",
       "segno": "+",
       "persone": 2819,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Dir. 2004/38 artt. 27-28",
       "fare": "Allontanamento art. 20 D.Lgs. 30/2007; esecuzione pena in patria (DQ 2008/909)",
       "cambio": "Nessuno",
       "fonte": "Min. Giustizia",
       "livello": 2
      },
      {
       "codice": "T2",
       "voce": "extra-UE",
       "segno": "=",
       "persone": 16997,
       "nd": false,
       "fase": "Fase 1",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Calcolo",
       "livello": 2
      },
      {
       "codice": "T2a",
       "voce": "Marocco",
       "segno": "+",
       "persone": 4358,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Idem",
       "fare": "Accordo di riammissione da negoziare (visti art. 25a)",
       "cambio": "Nessuno",
       "fonte": "Min. Giustizia",
       "livello": 3
      },
      {
       "codice": "T2b",
       "voce": "Tunisia",
       "segno": "+",
       "persone": 2186,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Idem",
       "fare": "Tetto 80 rimpatri/settimana da alzare",
       "cambio": "Nessuno",
       "fonte": "Min. Giustizia",
       "livello": 3
      },
      {
       "codice": "T2c",
       "voce": "altre cittadinanze (residuo)",
       "segno": "+",
       "persone": 10453,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Idem",
       "fare": "Albania ≈ 1.960, Nigeria ≈ 1.000, Egitto, Senegal, Algeria 400-600",
       "cambio": "Nessuno",
       "fonte": "Calcolo",
       "livello": 3
      },
      {
       "codice": "T3",
       "voce": "Stranieri in esecuzione penale esterna",
       "segno": null,
       "persone": 29000,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Misure alternative",
       "fare": "Espulsione alternativa (art. 16 c. 5) se residuo ≤ 2 anni",
       "cambio": "Nessuno",
       "fonte": "Antigone, 20,4% di 142.773",
       "livello": 2
      }
     ]
    },
    {
     "titolo": "Flussi 2025 (collegati al Funnel)",
     "righe": [
      {
       "codice": "F1",
       "voce": "Trovati in posizione irregolare",
       "segno": null,
       "persone": 82505,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Rilevamento di polizia",
       "fare": "Fascicolo e decisione entro 24 ore",
       "cambio": "Nessuno",
       "fonte": "Eurostat",
       "livello": 2
      },
      {
       "codice": "F2",
       "voce": "Ordini di lasciare il territorio",
       "segno": null,
       "persone": 21295,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Espulsione prefettizia",
       "fare": "Esecuzione: 22,4% oggi → 100% nel 2032",
       "cambio": "Nessuno",
       "fonte": "Eurostat",
       "livello": 2
      },
      {
       "codice": "F3",
       "voce": "Rimpatri eseguiti",
       "segno": "=",
       "persone": 4780,
       "nd": false,
       "fase": "Fase 1",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Eurostat",
       "livello": 2
      },
      {
       "codice": "F3a",
       "voce": "dopo CPR",
       "segno": "+",
       "persone": 1732,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Trattenimento (art. 14)",
       "fare": "148 giorni medi: identificare prima, trattenere meno",
       "cambio": "Nessuno",
       "fonte": "ActionAid/UniBa",
       "livello": 3
      },
      {
       "codice": "F3b",
       "voce": "senza CPR (residuo)",
       "segno": "+",
       "persone": 3048,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Accompagnamento diretto",
       "fare": null,
       "cambio": "Nessuno",
       "fonte": "Calcolo",
       "livello": 3
      },
      {
       "codice": "F4",
       "voce": "Rimpatri volontari assistiti",
       "segno": null,
       "persone": 717,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Art. 14-ter",
       "fare": "Da ≈ 300 a 6.400 l’anno; incentivo 630-2.450 € (UE dal 1.6.2026)",
       "cambio": "Nessuno: fondi e organizzazione",
       "fonte": "ActionAid/UniBa",
       "livello": 2
      },
      {
       "codice": "F5",
       "voce": "Dinieghi di asilo in prima istanza (entrano in Fase 1)",
       "segno": null,
       "persone": 50380,
       "nd": false,
       "fase": "Fase 1",
       "stato": "Diniego → ricorso → ordine",
       "fare": "Atto unico diniego + ordine (Patto UE 2026)",
       "cambio": "Nessuno",
       "fonte": "ISTAT 2024: 64,1% di 78.565",
       "livello": 2
      },
      {
       "codice": "O",
       "voce": "Riammissione 2025: Tunisia 600 (tetto 80/settimana) · Egitto 454 (18 charter) · Albania e Georgia funzionano · Marocco, Algeria, Pakistan, Bangladesh bloccati",
       "segno": null,
       "persone": null,
       "nd": false,
       "fase": null,
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "ActionAid/UniBa",
       "livello": 1
      }
     ]
    }
   ],
   "fonti": "ISMU 31° Rapporto · Eurostat 2025 · ActionAid/UniBa “Espulsioni” 2026 · Ministero della Giustizia 30.6.2025 · D.Lgs. 286/1998 artt. 13-16, 19; c.p. 235",
   "legenda": "Verde = valore collegato al tab Funnel Italia. n.d. = nessuna fonte pubblica."
  },
  {
   "id": "Fase 2",
   "titolo": "Fase 2 · Regolari extra-UE",
   "sottotitolo": "Entrano nel perimetro quando perdono il titolo. Leve: legge ordinaria e accordi di riammissione.",
   "blocchi": [
    {
     "titolo": "Chi sono e quanti sono",
     "righe": [
      {
       "codice": "TOT",
       "voce": "Fase 2: extra-UE con titolo di soggiorno (esclusa protezione temporanea)",
       "segno": "=",
       "persone": 3650141,
       "nd": false,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Funnel Italia",
       "livello": 1
      },
      {
       "codice": "A",
       "voce": "Lungo soggiornanti",
       "segno": "=",
       "persone": 2012071,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Status permanente (dir. 2003/109; TU art. 9)",
       "fare": "Espulsione solo per gravi motivi di ordine pubblico (art. 9 c. 10); revoca per assenza 12 mesi UE / 6 anni Italia o frode",
       "cambio": "Senza reati: modifica dir. 2003/109 (unanimità UE). Oggi solo condizionale",
       "fonte": "ISTAT: 52,8% di 3.810.741",
       "livello": 1
      },
      {
       "codice": "A1",
       "voce": "di cui per cittadinanza",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "ISTAT: solo quote (Moldova 83%, Serbia 74%, Ecuador 73%)",
       "livello": 2
      },
      {
       "codice": "A2",
       "voce": "di cui con condanna per reati gravi (artt. 380-381 c.p.p.)",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "Fase 1",
       "stato": "Revocabile ed espellibile (art. 9 c. 4 e c. 10)",
       "fare": "Revoca + espulsione",
       "cambio": "Nessuno; serve il dato DAP",
       "fonte": "Non pubblicato",
       "livello": 2
      },
      {
       "codice": "A3",
       "voce": "di cui assenti dall’UE > 12 mesi",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "Fase 2",
       "stato": "Status decaduto (art. 9 c. 7)",
       "fare": "Revoca d’ufficio con controllo EES/SIS",
       "cambio": "Nessuno; serve il controllo",
       "fonte": "Non verificato",
       "livello": 2
      },
      {
       "codice": "B",
       "voce": "Permessi a termine: lavoro, famiglia, studio, altro",
       "segno": "=",
       "persone": 1314997,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Permesso 1-3 anni rinnovabile se restano i requisiti (TU art. 5 c. 5)",
       "fare": "Mancato rinnovo per perdita reddito/lavoro (dopo 12 mesi attesa occupazione) o reati ostativi → ordine",
       "cambio": "Legge ordinaria: attesa occupazione 12→6 mesi (art. 22 c. 11), soglie di reddito, reati ostativi (art. 4 c. 3). Limite art. 8 CEDU",
       "fonte": "Calcolo da ISTAT",
       "livello": 1
      },
      {
       "codice": "B1",
       "voce": "di cui per motivo (lavoro / famiglia / studio)",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "ISTAT non pubblica lo stock per motivo",
       "livello": 2
      },
      {
       "codice": "C",
       "voce": "Asilo e protezione (esclusa temporanea)",
       "segno": "=",
       "persone": 323073,
       "nd": false,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Funnel Italia",
       "livello": 1
      },
      {
       "codice": "C1",
       "voce": "richiesta asilo in attesa",
       "segno": "+",
       "persone": 151000,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Soggiorno legittimo fino alla decisione",
       "fare": "Procedura di frontiera 12 settimane per paesi < 20% (Patto UE); diniego + ordine in un atto",
       "cambio": "Nessuno: in vigore dal 12.6.2026",
       "fonte": "ISTAT · 31.12.2024",
       "livello": 2
      },
      {
       "codice": "C2",
       "voce": "status di rifugiato",
       "segno": "+",
       "persone": 59744,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Non-refoulement (Ginevra art. 33; TU art. 19)",
       "fare": "Solo revoca/cessazione (D.Lgs. 251/07 artt. 9, 13)",
       "cambio": "Impossibile: Ginevra e Cost. art. 10",
       "fonte": "ISTAT · 31.12.2024",
       "livello": 2
      },
      {
       "codice": "C3",
       "voce": "protezione sussidiaria",
       "segno": "+",
       "persone": 54771,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Permesso 5 anni",
       "fare": "Cessazione se cambia la situazione nel paese (art. 15)",
       "cambio": "Riesame sistematico alla scadenza: prassi",
       "fonte": "ISTAT · 31.12.2024",
       "livello": 2
      },
      {
       "codice": "C4",
       "voce": "protezione speciale e altre (residuo)",
       "segno": "+",
       "persone": 57558,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Permesso 2 anni (TU art. 19)",
       "fare": "Non rinnovo se cessano i presupposti",
       "cambio": "Legge ordinaria: restringere art. 19 c. 1.1; limite art. 8 CEDU",
       "fonte": "Calcolo",
       "livello": 2
      },
      {
       "codice": "T",
       "voce": "Trasversale: stranieri nati in Italia senza cittadinanza (dentro B e C)",
       "segno": "=",
       "persone": 870000,
       "nd": false,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "ISTAT RA 2025, stima",
       "livello": 1
      },
      {
       "codice": "T1",
       "voce": "adulti 15-74",
       "segno": "+",
       "persone": 195000,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Permesso ordinario",
       "fare": "Non rinnovo se perde i requisiti; espulsione per reati",
       "cambio": "Nessuno; i giudici applicano art. 8 CEDU a chi è nato in Italia",
       "fonte": "Eurostat LFS 2025",
       "livello": 2
      },
      {
       "codice": "T2",
       "voce": "minori (residuo)",
       "segno": "+",
       "persone": 675000,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Non espellibili (TU art. 19 c. 2); a 18 anni elezione di cittadinanza",
       "fare": "Nulla fino a 18 anni",
       "cambio": "Abrogare art. 4 c. 2 L. 91/92: resterebbero in Fase 2",
       "fonte": "Calcolo",
       "livello": 2
      }
     ]
    },
    {
     "titolo": "Flussi 2024",
     "righe": [
      {
       "codice": "F",
       "voce": "Nuovi permessi rilasciati",
       "segno": "=",
       "persone": 290119,
       "nd": false,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "ISTAT 2024 (290.119)",
       "livello": 1
      },
      {
       "codice": "F1",
       "voce": "famiglia",
       "segno": "+",
       "persone": 104700,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Ricongiungimento (TU art. 29)",
       "fare": "Requisiti di reddito e alloggio",
       "cambio": "Legge ordinaria entro dir. 2003/86",
       "fonte": "ISTAT 36,1%",
       "livello": 2
      },
      {
       "codice": "F2",
       "voce": "asilo e protezione",
       "segno": "+",
       "persone": 104100,
       "nd": false,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "ISTAT 35,9%",
       "livello": 2
      },
      {
       "codice": "F3",
       "voce": "lavoro",
       "segno": "+",
       "persone": 40451,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Decreto flussi; stagionale 16.739",
       "fare": "Verifica rientro stagionali (EES)",
       "cambio": "Nessuno",
       "fonte": "ISTAT 13,9%",
       "livello": 2
      },
      {
       "codice": "F4",
       "voce": "studio",
       "segno": "+",
       "persone": 20130,
       "nd": false,
       "fase": "Fase 2",
       "stato": "Fino a fine corso + 12 mesi",
       "fare": "Rientro a fine corso",
       "cambio": "Legge ordinaria",
       "fonte": "ISTAT 6,9%",
       "livello": 2
      },
      {
       "codice": "F5",
       "voce": "altri motivi (residuo)",
       "segno": "+",
       "persone": 20738,
       "nd": false,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Calcolo",
       "livello": 2
      },
      {
       "codice": "G",
       "voce": "Prime domande di asilo",
       "segno": null,
       "persone": 151120,
       "nd": false,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Eurostat 2024",
       "livello": 1
      },
      {
       "codice": "G1",
       "voce": "Prime istanze esaminate: respinte 50.380 (64%) → Fase 1 · accolte 28.185",
       "segno": null,
       "persone": 78565,
       "nd": false,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "ISTAT 2024",
       "livello": 2
      },
      {
       "codice": "O",
       "voce": "Prime origini 2024 (nuovi permessi): Bangladesh 28.045 · Marocco 25.776 · Albania 24.430 · Egitto 20.217 · Pakistan 17.217 · India 16.907 · Tunisia 15.016",
       "segno": null,
       "persone": null,
       "nd": false,
       "fase": null,
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "ISTAT",
       "livello": 1
      }
     ]
    }
   ],
   "fonti": "ISTAT Cittadini non comunitari 2024 · Eurostat LFS 2025, migr_asypenctzm · D.Lgs. 286/1998 artt. 4, 5, 9, 19, 22, 29; D.Lgs. 251/2007; Reg. (UE) 2024/1348",
   "legenda": "Verde = valore collegato al tab Funnel Italia. n.d. = nessuna fonte pubblica."
  },
  {
   "id": "Fase 3",
   "titolo": "Fase 3 · Cittadini italiani di origine straniera",
   "sottotitolo": "Oggi non esiste alcuno strumento. Serve una riforma costituzionale e l’uscita da vincoli CEDU.",
   "blocchi": [
    {
     "titolo": "Chi sono e quanti sono",
     "righe": [
      {
       "codice": "TOT",
       "voce": "Fase 3: cittadini di origine straniera",
       "segno": "=",
       "persone": 3246000,
       "nd": false,
       "fase": "Fase 3",
       "stato": "Cittadini a tutti gli effetti (Cost. art. 22; CEDU Prot. 4 art. 3)",
       "fare": "Nulla. Solo revoca per terrorismo (L. 91/92 art. 10-bis) e annullamento per frode",
       "cambio": "Riforma costituzionale artt. 3 e 22 (doppia lettura + referendum) e denuncia del Prot. 4 CEDU; nessun precedente in UE",
       "fonte": "Funnel Italia",
       "livello": 1
      },
      {
       "codice": "A",
       "voce": "Seconda generazione, cittadini 15-74",
       "segno": "=",
       "persone": 1156000,
       "nd": false,
       "fase": "Fase 3",
       "stato": "Cittadini dalla nascita o per elezione a 18 anni",
       "fare": "Nulla",
       "cambio": "Come sopra; per i futuri: abrogare l’elezione a 18 anni (art. 4 c. 2) e la trasmissione ai minori (art. 14) → restano in Fase 2",
       "fonte": "Eurostat LFS 2025",
       "livello": 1
      },
      {
       "codice": "A1",
       "voce": "di cui per origine del genitore",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "Fase 3",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Eurostat non lo pubblica",
       "livello": 2
      },
      {
       "codice": "B",
       "voce": "Italiani per acquisizione",
       "segno": "=",
       "persone": 2090000,
       "nd": false,
       "fase": "Fase 3",
       "stato": "Cittadini a tutti gli effetti",
       "fare": "Revoca solo per terrorismo entro 3 anni (art. 10-bis)",
       "cambio": "Revoca estesa ad altri reati: viola Cost. art. 3 (parità) → serve riforma costituzionale; rischio apolidia (Conv. 1961)",
       "fonte": "ISTAT · 31.12.2024",
       "livello": 1
      },
      {
       "codice": "B1",
       "voce": "di origine extra-UE",
       "segno": "+",
       "persone": 1790000,
       "nd": false,
       "fase": "Fase 3",
       "stato": "Idem",
       "fare": "Idem",
       "cambio": "Idem",
       "fonte": "ISTAT: 85,6%",
       "livello": 2
      },
      {
       "codice": "B2",
       "voce": "di origine UE (residuo)",
       "segno": "+",
       "persone": 300000,
       "nd": false,
       "fase": "Fase 3",
       "stato": "Idem",
       "fare": "Idem",
       "cambio": "Idem",
       "fonte": "Calcolo",
       "livello": 2
      },
      {
       "codice": "T",
       "voce": "Trasversale: condannati con cittadinanza italiana di origine straniera",
       "segno": null,
       "persone": null,
       "nd": true,
       "fase": "Fase 3",
       "stato": "Non espellibili",
       "fare": "Revoca solo per terrorismo",
       "cambio": "Riforma costituzionale",
       "fonte": "Non pubblicato",
       "livello": 1
      }
     ]
    },
    {
     "titolo": "Flusso 2024: acquisizioni di cittadinanza (alimentano la Fase 3)",
     "righe": [
      {
       "codice": "F",
       "voce": "Acquisizioni nell’anno",
       "segno": "=",
       "persone": 217448,
       "nd": false,
       "fase": "Fase 3",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "ISTAT 2024 (217.448)",
       "livello": 1
      },
      {
       "codice": "F1",
       "voce": "per residenza (10 anni)",
       "segno": "+",
       "persone": 85000,
       "nd": false,
       "fase": "Fase 3",
       "stato": "Concessione discrezionale",
       "fare": "Irrigidire requisiti (reddito, lingua B1, reati)",
       "cambio": "Legge ordinaria: art. 9",
       "fonte": "ISTAT, ≈",
       "livello": 2
      },
      {
       "codice": "F2",
       "voce": "minori per trasmissione dai genitori",
       "segno": "+",
       "persone": 63000,
       "nd": false,
       "fase": "Fase 3",
       "stato": "Automatico se conviventi",
       "fare": null,
       "cambio": "Legge ordinaria: art. 14",
       "fonte": "ISTAT, ≈",
       "livello": 2
      },
      {
       "codice": "F3",
       "voce": "iure sanguinis (avo italiano)",
       "segno": "+",
       "persone": 22000,
       "nd": false,
       "fase": "Fase 3",
       "stato": "Diritto",
       "fare": "Già ristretto (D.L. 36/2025)",
       "cambio": "Legge ordinaria",
       "fonte": "ISTAT, ≈",
       "livello": 2
      },
      {
       "codice": "F4",
       "voce": "per matrimonio",
       "segno": "+",
       "persone": 19000,
       "nd": false,
       "fase": "Fase 3",
       "stato": "Concessione",
       "fare": "Allungare i termini",
       "cambio": "Legge ordinaria: art. 5",
       "fonte": "ISTAT, ≈",
       "livello": 2
      },
      {
       "codice": "F5",
       "voce": "per elezione a 18 anni",
       "segno": "+",
       "persone": 11000,
       "nd": false,
       "fase": "Fase 3",
       "stato": "Diritto",
       "fare": null,
       "cambio": "Legge ordinaria: art. 4 c. 2",
       "fonte": "ISTAT, ≈",
       "livello": 2
      },
      {
       "codice": "F6",
       "voce": "altre modalità (residuo)",
       "segno": "+",
       "persone": 17448,
       "nd": false,
       "fase": "Fase 3",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Calcolo",
       "livello": 2
      },
      {
       "codice": "O",
       "voce": "Prime origini 2024: Albania ≈ 32.000 · Marocco ≈ 28.000 · Argentina 13.559 · India 12.258 · Brasile 11.058",
       "segno": null,
       "persone": null,
       "nd": false,
       "fase": null,
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "ISTAT",
       "livello": 1
      }
     ]
    }
   ],
   "fonti": "Eurostat LFS 2025 · ISTAT Cittadini non comunitari 2024 · Cost. artt. 3, 10, 22; L. 91/1992; CEDU Prot. 4",
   "legenda": "Verde = valore collegato al tab Funnel Italia. n.d. = nessuna fonte pubblica."
  },
  {
   "id": "Fase 4",
   "titolo": "Fase 4 · Cittadini UE (Romania) e protezione temporanea",
   "sottotitolo": "Dipende dal diritto dell’Unione, non dalla legge italiana.",
   "blocchi": [
    {
     "titolo": "Chi sono e quanti sono",
     "righe": [
      {
       "codice": "TOT",
       "voce": "Fase 4",
       "segno": "=",
       "persone": 1213642,
       "nd": false,
       "fase": "Fase 4",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Funnel Italia",
       "livello": 1
      },
      {
       "codice": "A",
       "voce": "Romania",
       "segno": "=",
       "persone": 1053042,
       "nd": false,
       "fase": "Fase 4",
       "stato": "Libera circolazione (TFUE art. 21; dir. 2004/38)",
       "fare": "Allontanamento solo individuale: ordine pubblico (art. 20 D.Lgs. 30/2007) o senza risorse dopo 3 mesi (art. 21)",
       "cambio": "Impossibile senza modificare i trattati / la dir. 2004/38 (unanimità); vietate le espulsioni collettive (CEDU Prot. 4 art. 4)",
       "fonte": "ISTAT · 1.1.2025",
       "livello": 1
      },
      {
       "codice": "A1",
       "voce": "di cui con lavoro o risorse",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "FUORI",
       "stato": "Diritto di soggiorno",
       "fare": "Nulla",
       "cambio": "Trattati UE",
       "fonte": null,
       "livello": 2
      },
      {
       "codice": "A2",
       "voce": "di cui senza risorse dopo 3 mesi",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "Fase 4",
       "stato": "Allontanabili (art. 21)",
       "fare": "Allontanamento, senza divieto di reingresso",
       "cambio": "Nessuno",
       "fonte": "Non misurato",
       "livello": 2
      },
      {
       "codice": "A3",
       "voce": "di cui detenuti (≈ 11% dei detenuti stranieri)",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "Fase 1",
       "stato": "Allontanabili (art. 20)",
       "fare": "Allontanamento + divieto reingresso 5-10 anni; esecuzione pena in Romania (DQ 2008/909)",
       "cambio": "Nessuno",
       "fonte": "Min. Giustizia: UE 2.819 detenuti in totale",
       "livello": 2
      },
      {
       "codice": "B",
       "voce": "Protezione temporanea (Ucraina)",
       "segno": "=",
       "persone": 160600,
       "nd": false,
       "fase": "Fase 4",
       "stato": "Dir. 2001/55; scade 4.3.2028",
       "fare": "Rientro volontario assistito; dal 2028 conversione in permesso ordinario (→ Fase 2) o rimpatrio",
       "cambio": "Nessuno: decide il Consiglio UE",
       "fonte": "ISTAT · 31.12.2024 (Eurostat 2026: 60.485)",
       "livello": 1
      },
      {
       "codice": "B1",
       "voce": "di cui con lavoro (convertibili in Fase 2)",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "Fase 2",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Non pubblicato",
       "livello": 2
      },
      {
       "codice": "B2",
       "voce": "di cui senza lavoro",
       "segno": "+",
       "persone": null,
       "nd": true,
       "fase": "Fase 4",
       "stato": null,
       "fare": "Rientro volontario con incentivo",
       "cambio": "Nessuno",
       "fonte": "Non pubblicato",
       "livello": 2
      }
     ]
    }
   ],
   "fonti": "Eurostat migr_pop1ctz · ISTAT · D.Lgs. 30/2007 artt. 20-21; Direttiva 2001/55; Decisione (UE) 2026/1912; DQ 2008/909/GAI",
   "legenda": "Verde = valore collegato al tab Funnel Italia. n.d. = nessuna fonte pubblica."
  },
  {
   "id": "FUORI",
   "titolo": "FUORI · Nessuna remigrazione",
   "sottotitolo": "Riportato per completezza: queste righe chiudono la somma del Funnel.",
   "blocchi": [
    {
     "titolo": "Chi sono e quanti sono",
     "righe": [
      {
       "codice": "TOT",
       "voce": "Fuori perimetro",
       "segno": "=",
       "persone": 50647041,
       "nd": false,
       "fase": "FUORI",
       "stato": null,
       "fare": null,
       "cambio": null,
       "fonte": "Funnel Italia",
       "livello": 1
      },
      {
       "codice": "A",
       "voce": "Italiani nati in Italia da genitori nati in Italia",
       "segno": "+",
       "persone": 50057465,
       "nd": false,
       "fase": "FUORI",
       "stato": "Cittadini",
       "fare": null,
       "cambio": null,
       "fonte": "Calcolo",
       "livello": 1
      },
      {
       "codice": "B",
       "voce": "Italiani dalla nascita nati all’estero (figli di emigrati, iure sanguinis)",
       "segno": "+",
       "persone": 268748,
       "nd": false,
       "fase": "FUORI",
       "stato": "Cittadini",
       "fare": null,
       "cambio": null,
       "fonte": "Calcolo",
       "livello": 1
      },
      {
       "codice": "C",
       "voce": "Cittadini di altri Stati UE (esclusa Romania)",
       "segno": "+",
       "persone": 320828,
       "nd": false,
       "fase": "FUORI",
       "stato": "Libera circolazione",
       "fare": "Allontanamento individuale per ordine pubblico (art. 20): vedi Fase 1 per i detenuti",
       "cambio": "Trattati UE",
       "fonte": "Calcolo",
       "livello": 1
      }
     ]
    }
   ],
   "fonti": "Funnel Italia",
   "legenda": "Verde = valore collegato al tab Funnel Italia. n.d. = nessuna fonte pubblica."
  }
 ],
 "tracker": {
  "titolo": "Progress tracker 2027-2032 · tutte le categorie",
  "ipotesi": "Ipotesi di base: entro pochi anni le norme UE vengono cambiate in senso favorevole all’esecuzione del GRP. Blu = obiettivi modificabili; nero = formule; verde = collegato al Funnel; testo = tappa.",
  "nota": "Ipotesi di lavoro: i valori blu sono proposte da discutere, non dati. Le milestone in testo segnano i passaggi di legge.",
  "anni": [
   "2027",
   "2028",
   "2029",
   "2030",
   "2031",
   "2032"
  ],
  "gruppi": [
   {
    "titolo": "Fase 1 · Irregolari e condannati (legge attuale)",
    "righe": [
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "Tasso di esecuzione degli ordini",
      "base_2025": 0.224,
      "anni": {
       "2027": 0.4,
       "2028": 0.55,
       "2029": 0.7,
       "2030": 0.85,
       "2031": 0.95,
       "2032": 1
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "Ordini di lasciare il territorio (ogni irregolare trovato riceve un ordine)",
      "base_2025": 21295,
      "anni": {
       "2027": 35000,
       "2028": 50000,
       "2029": 80000,
       "2030": 100000,
       "2031": 100000,
       "2032": 100000
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "Rimpatri eseguiti",
      "base_2025": 4780,
      "anni": {
       "2027": 14000,
       "2028": 27500,
       "2029": 56000,
       "2030": 85000,
       "2031": 95000,
       "2032": 100000
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "Quota volontari sui rimpatri",
      "base_2025": 0.15,
      "anni": {
       "2027": 0.2,
       "2028": 0.3,
       "2029": 0.4,
       "2030": 0.5,
       "2031": 0.5,
       "2032": 0.5
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "di cui volontari (RVA)",
      "base_2025": 717,
      "anni": {
       "2027": 2800,
       "2028": 8250,
       "2029": 22400,
       "2030": 42500,
       "2031": 47500,
       "2032": 50000
      },
      "cambio": "Nessuno: fondi e convenzione OIM",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "di cui forzati",
      "base_2025": 4063,
      "anni": {
       "2027": 11200,
       "2028": 19250,
       "2029": 33600,
       "2030": 42500,
       "2031": 47500,
       "2032": 50000
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "Quota forzati che passa dal CPR",
      "base_2025": 0.43,
      "anni": {
       "2027": 0.4,
       "2028": 0.35,
       "2029": 0.33,
       "2030": 0.33,
       "2031": 0.33,
       "2032": 0.33
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "Giorni medi in CPR per rimpatrio",
      "base_2025": 148,
      "anni": {
       "2027": 120,
       "2028": 90,
       "2029": 75,
       "2030": 60,
       "2031": 60,
       "2032": 60
      },
      "cambio": "Nessuno: identificazione prima del trattenimento",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "Posti CPR necessari (occupazione 85%)",
      "base_2025": 833,
      "anni": {
       "2027": 1733,
       "2028": 1954,
       "2029": 2680,
       "2030": 2712,
       "2031": 3031,
       "2032": 3191
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "Paesi con riammissione operativa (oggi: Albania, Georgia, Tunisia, Egitto)",
      "base_2025": 4,
      "anni": {
       "2027": "+ Marocco, Bangladesh",
       "2028": "+ Pakistan, Nigeria",
       "2029": "+ Algeria",
       "2030": 8,
       "2031": 8,
       "2032": 8
      },
      "cambio": "Nessuno: leva visti (Codice visti art. 25a), commercio, aiuti",
      "testo": true
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "Stock di irregolari a fine anno (stima: 339k + 50k nuovi l’anno - rimpatri)",
      "base_2025": 339000,
      "anni": {
       "2027": 375000,
       "2028": 397500,
       "2029": 391500,
       "2030": 356500,
       "2031": 311500,
       "2032": 261500
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Irregolari",
      "indicatore": "Tempo rilevamento → decisione (giorni)",
      "base_2025": null,
      "anni": {
       "2027": 7,
       "2028": 1,
       "2029": 1,
       "2030": 1,
       "2031": 1,
       "2032": 1
      },
      "cambio": "Nessuno: fascicolo digitale unico",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Condannati",
      "indicatore": "Detenuti extra-UE identificati con lasciapassare richiesto entro 6 mesi",
      "base_2025": null,
      "anni": {
       "2027": 0.5,
       "2028": 1,
       "2029": 1,
       "2030": 1,
       "2031": 1,
       "2032": 1
      },
      "cambio": "Nessuno: protocollo DAP-Questure",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Condannati",
      "indicatore": "Espulsioni ex artt. 15-16 TU eseguite al fine pena o in alternativa alla pena",
      "base_2025": 825,
      "anni": {
       "2027": 2000,
       "2028": 4000,
       "2029": 6000,
       "2030": 7000,
       "2031": 8000,
       "2032": 8000
      },
      "cambio": "Nessuno (ultimo dato pubblico: 2018)",
      "testo": false
     },
     {
      "fase": "Fase 1",
      "categoria": "Condannati",
      "indicatore": "Detenuti UE trasferiti a scontare la pena in patria (DQ 2008/909)",
      "base_2025": null,
      "anni": {
       "2027": 500,
       "2028": 1000,
       "2029": 1500,
       "2030": 2000,
       "2031": 2000,
       "2032": 2000
      },
      "cambio": "Nessuno: accordo operativo con Bucarest",
      "testo": false
     }
    ]
   },
   {
    "titolo": "Fase 2 · Regolari extra-UE (legge ordinaria e accordi)",
    "righe": [
     {
      "fase": "Fase 2",
      "categoria": "Richiedenti asilo",
      "indicatore": "Quota domande da paesi < 20% in procedura di frontiera",
      "base_2025": null,
      "anni": {
       "2027": 1,
       "2028": 1,
       "2029": 1,
       "2030": 1,
       "2031": 1,
       "2032": 1
      },
      "cambio": "Nessuno: Patto UE in vigore dal 12.6.2026",
      "testo": false
     },
     {
      "fase": "Fase 2",
      "categoria": "Richiedenti asilo",
      "indicatore": "Giorni tra diniego definitivo e ordine di rimpatrio",
      "base_2025": null,
      "anni": {
       "2027": 0,
       "2028": 0,
       "2029": 0,
       "2030": 0,
       "2031": 0,
       "2032": 0
      },
      "cambio": "Nessuno: atto unico (reg. rimpatri)",
      "testo": false
     },
     {
      "fase": "Fase 2",
      "categoria": "Richiedenti asilo",
      "indicatore": "Quota dinieghi definitivi che producono un rimpatrio eseguito",
      "base_2025": 0.1,
      "anni": {
       "2027": 0.3,
       "2028": 0.6,
       "2029": 0.8,
       "2030": 1,
       "2031": 1,
       "2032": 1
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 2",
      "categoria": "Lungo soggiornanti",
      "indicatore": "Condannati per reati artt. 380-381 c.p.p. revocati ed espulsi",
      "base_2025": null,
      "anni": {
       "2027": 1,
       "2028": 1,
       "2029": 1,
       "2030": 1,
       "2031": 1,
       "2032": 1
      },
      "cambio": "Nessuno (art. 9 c. 4 e 10 TU già in vigore)",
      "testo": false
     },
     {
      "fase": "Fase 2",
      "categoria": "Lungo soggiornanti",
      "indicatore": "Controllo annuale assenze > 12 mesi via EES/SIS",
      "base_2025": "no",
      "anni": {
       "2027": "100%",
       "2028": "100%",
       "2029": "100%",
       "2030": "100%",
       "2031": "100%",
       "2032": "100%"
      },
      "cambio": "Nessuno: procedura",
      "testo": true
     },
     {
      "fase": "Fase 2",
      "categoria": "Lungo soggiornanti",
      "indicatore": "Revoche di status l’anno (condanne, assenze, frode)",
      "base_2025": null,
      "anni": {
       "2027": 2000,
       "2028": 4000,
       "2029": 5000,
       "2030": 5000,
       "2031": 5000,
       "2032": 5000
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 2",
      "categoria": "Permessi a termine",
      "indicatore": "Mancati rinnovi tracciati per motivo e nazionalità",
      "base_2025": "no",
      "anni": {
       "2027": "100%",
       "2028": "100%",
       "2029": "100%",
       "2030": "100%",
       "2031": "100%",
       "2032": "100%"
      },
      "cambio": "Nessuno: statistica Viminale",
      "testo": true
     },
     {
      "fase": "Fase 2",
      "categoria": "Permessi a termine",
      "indicatore": "Attesa occupazione dopo perdita del lavoro (mesi)",
      "base_2025": 12,
      "anni": {
       "2027": 6,
       "2028": 3,
       "2029": 3,
       "2030": 3,
       "2031": 3,
       "2032": 3
      },
      "cambio": "Legge ordinaria: TU art. 22 c. 11 (2027)",
      "testo": false
     },
     {
      "fase": "Fase 2",
      "categoria": "Permessi a termine",
      "indicatore": "Stagionali verificati in uscita (EES)",
      "base_2025": null,
      "anni": {
       "2027": 1,
       "2028": 1,
       "2029": 1,
       "2030": 1,
       "2031": 1,
       "2032": 1
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 2",
      "categoria": "Permessi a termine",
      "indicatore": "Quota permessi scaduti non rinnovati che diventano ordine",
      "base_2025": null,
      "anni": {
       "2027": 0.5,
       "2028": 0.8,
       "2029": 1,
       "2030": 1,
       "2031": 1,
       "2032": 1
      },
      "cambio": "Nessuno",
      "testo": false
     },
     {
      "fase": "Fase 2",
      "categoria": "Protezione sussidiaria e speciale",
      "indicatore": "Riesame sistematico alla scadenza (cessazione art. 15; non rinnovo art. 19)",
      "base_2025": null,
      "anni": {
       "2027": 1,
       "2028": 1,
       "2029": 1,
       "2030": 1,
       "2031": 1,
       "2032": 1
      },
      "cambio": "Nessuno; restringere art. 19 c. 1.1: legge ordinaria",
      "testo": false
     },
     {
      "fase": "Fase 2",
      "categoria": "Rifugiati",
      "indicatore": "Revoca dello status per reati gravi e cessazione per paesi tornati sicuri",
      "base_2025": null,
      "anni": {
       "2027": 500,
       "2028": 1000,
       "2029": 2000,
       "2030": 3000,
       "2031": 3000,
       "2032": 3000
      },
      "cambio": "Revisione a livello UE della direttiva qualifiche (2003/109 e 2011/95)",
      "testo": false
     },
     {
      "fase": "Fase 2",
      "categoria": "Stranieri nati in Italia",
      "indicatore": "Elezione automatica di cittadinanza a 18 anni",
      "base_2025": "sì",
      "anni": {
       "2027": "abrogata",
       "2028": "no",
       "2029": "no",
       "2030": "no",
       "2031": "no",
       "2032": "no"
      },
      "cambio": "Legge ordinaria: art. 4 c. 2 L. 91/92",
      "testo": true
     }
    ]
   },
   {
    "titolo": "Fase 3 · Cittadini di origine straniera (riforma costituzionale)",
    "righe": [
     {
      "fase": "Fase 3",
      "categoria": "Naturalizzati",
      "indicatore": "Acquisizioni di cittadinanza l’anno",
      "base_2025": 217448,
      "anni": {
       "2027": 120000,
       "2028": 60000,
       "2029": 40000,
       "2030": 30000,
       "2031": 30000,
       "2032": 30000
      },
      "cambio": "Legge ordinaria: L. 91/92 artt. 5, 9, 14 (requisiti, anni, lingua, reati)",
      "testo": false
     },
     {
      "fase": "Fase 3",
      "categoria": "Naturalizzati",
      "indicatore": "Revoca per reati gravi entro 10 anni dall’acquisizione",
      "base_2025": "no",
      "anni": {
       "2027": "legge approvata",
       "2028": "in vigore",
       "2029": "in vigore",
       "2030": "in vigore",
       "2031": "in vigore",
       "2032": "in vigore"
      },
      "cambio": "Legge ordinaria + probabile vaglio Corte cost. (art. 3)",
      "testo": true
     },
     {
      "fase": "Fase 3",
      "categoria": "Naturalizzati",
      "indicatore": "Revoche di cittadinanza l’anno (oggi art. 10-bis: solo terrorismo)",
      "base_2025": null,
      "anni": {
       "2027": 100,
       "2028": 1000,
       "2029": 2000,
       "2030": 3000,
       "2031": 3000,
       "2032": 3000
      },
      "cambio": "Dipende dalla riga sopra",
      "testo": false
     },
     {
      "fase": "Fase 3",
      "categoria": "Seconda generazione",
      "indicatore": "Riforma costituzionale artt. 3 e 22 (cittadini di origine straniera allontanabili)",
      "base_2025": "no",
      "anni": {
       "2027": "1ª lettura",
       "2028": "2ª lettura",
       "2029": "referendum",
       "2030": "in vigore",
       "2031": "in vigore",
       "2032": "in vigore"
      },
      "cambio": "Riforma costituzionale (Cost. art. 138); revisione Prot. 4 CEDU con gli alleati",
      "testo": true
     },
     {
      "fase": "Fase 3",
      "categoria": "Seconda generazione",
      "indicatore": "Rimpatri di cittadini di origine straniera condannati per reati gravi",
      "base_2025": 0,
      "anni": {
       "2027": 0,
       "2028": 0,
       "2029": 0,
       "2030": 500,
       "2031": 2000,
       "2032": 3000
      },
      "cambio": "Dopo la riforma: solo condannati, poi estensione",
      "testo": false
     },
     {
      "fase": "Fase 3",
      "categoria": "Seconda generazione",
      "indicatore": "Rientri volontari incentivati (programma di remigrazione volontaria)",
      "base_2025": null,
      "anni": {
       "2027": 1000,
       "2028": 3000,
       "2029": 5000,
       "2030": 8000,
       "2031": 10000,
       "2032": 10000
      },
      "cambio": "Nessuno: programma con incentivo e rinuncia alla cittadinanza (art. 14 L. 91/92)",
      "testo": false
     }
    ]
   },
   {
    "titolo": "Fase 4 · Romania e protezione temporanea (diritto UE)",
    "righe": [
     {
      "fase": "Fase 4",
      "categoria": "Romania",
      "indicatore": "Allontanamenti ex art. 20-21 D.Lgs. 30/2007 eseguiti",
      "base_2025": null,
      "anni": {
       "2027": 2000,
       "2028": 4000,
       "2029": 5000,
       "2030": 5000,
       "2031": 5000,
       "2032": 5000
      },
      "cambio": "Nessuno: strumenti esistenti",
      "testo": false
     },
     {
      "fase": "Fase 4",
      "categoria": "Romania",
      "indicatore": "Modifica dir. 2004/38: allontanamento per assenza di lavoro oltre 12 mesi",
      "base_2025": "no",
      "anni": {
       "2027": "proposta",
       "2028": "approvata",
       "2029": "in vigore",
       "2030": "in vigore",
       "2031": "in vigore",
       "2032": "in vigore"
      },
      "cambio": "Consiglio UE con gli alleati (FR, DE, AT)",
      "testo": true
     },
     {
      "fase": "Fase 4",
      "categoria": "Protezione temporanea",
      "indicatore": "Beneficiari a fine anno",
      "base_2025": 160600,
      "anni": {
       "2027": 100600,
       "2028": 0,
       "2029": 0,
       "2030": 0,
       "2031": 0,
       "2032": 0
      },
      "cambio": "Nessuno: scadenza UE 4.3.2028",
      "testo": false
     },
     {
      "fase": "Fase 4",
      "categoria": "Protezione temporanea",
      "indicatore": "convertiti in permesso ordinario (→ Fase 2)",
      "base_2025": null,
      "anni": {
       "2027": 20000,
       "2028": 20000,
       "2029": 0,
       "2030": 0,
       "2031": 0,
       "2032": 0
      },
      "cambio": "Nessuno: decreto di transizione",
      "testo": false
     },
     {
      "fase": "Fase 4",
      "categoria": "Protezione temporanea",
      "indicatore": "rientri volontari assistiti in Ucraina",
      "base_2025": null,
      "anni": {
       "2027": 40000,
       "2028": 80600,
       "2029": 0,
       "2030": 0,
       "2031": 0,
       "2032": 0
      },
      "cambio": "Nessuno: programma UE-Ucraina",
      "testo": false
     }
    ]
   },
   {
    "titolo": "FUORI",
    "righe": [
     {
      "fase": "FUORI",
      "categoria": "Cittadini e altri UE",
      "indicatore": "Nessun indicatore",
      "base_2025": null,
      "anni": {
       "2027": null,
       "2028": null,
       "2029": null,
       "2030": null,
       "2031": null,
       "2032": null
      },
      "cambio": null,
      "testo": false
     }
    ]
   }
  ]
 },
 "esecuzione": {
  "titolo": "Esecuzione · modalità e fattibilità",
  "sottotitolo": "Come si effettua la remigrazione, caso per caso. Fattibilità: Alta / Media / Bassa / Nulla, con il motivo.",
  "tabelle": [
   {
    "id": 1,
    "titolo": "Le sette modalità di remigrazione",
    "colonne": [
     "Modalità",
     "A chi si applica",
     "Passaggi operativi",
     "Attori",
     "Costo unitario",
     "Tempo medio",
     "Capacità oggi → 2032",
     "Fattibilità"
    ],
    "righe": [
     {
      "modalita": "1. Rimpatrio volontario assistito (RVA)",
      "a_chi_si_applica": "Fase 1 con ordine; Fase 2 dopo diniego o mancato rinnovo; Fase 4 Ucraina",
      "passaggi_operativi": "Colloquio in questura o CAS → adesione entro 7 gg → documento di viaggio → volo di linea → incentivo erogato nel paese d’origine in 2 tranche",
      "attori": "Questura, OIM, Frontex (biglietti), paese d’origine",
      "costo_unitario": "560 € trasporto + 630-2.450 € incentivo UE + ≈ 400 € gestione",
      "tempo_medio": "30-60 giorni",
      "capacita_oggi_2032": "≈ 300 l’anno → 6.400",
      "fattibilita": "Alta"
     },
     {
      "modalita": "2. Accompagnamento su volo di linea",
      "a_chi_si_applica": "Fase 1 identificati con documento; condannati a fine pena",
      "passaggi_operativi": "Ordine con accompagnamento → 2 agenti di scorta → consegna alle autorità del paese",
      "attori": "Questura, Polizia di frontiera, Frontex",
      "costo_unitario": "≈ 3.400 €",
      "tempo_medio": "7-30 giorni",
      "capacita_oggi_2032": "≈ 3.000 l’anno → 4.000",
      "fattibilita": "Alta"
     },
     {
      "modalita": "3. Charter nazionale",
      "a_chi_si_applica": "Fase 1 verso Tunisia, Egitto, Albania, Georgia, Nigeria",
      "passaggi_operativi": "Lista passeggeri concordata con il consolato → convalida → volo da Palermo, Roma, Milano",
      "attori": "Viminale, consolati, vettore",
      "costo_unitario": "≈ 2.600 € a persona (media Frontex)",
      "tempo_medio": "Settimanale",
      "capacita_oggi_2032": "Tunisia 28 charter (2025), tetto 80/settimana → 100 charter l’anno",
      "fattibilita": "Media"
     },
     {
      "modalita": "4. Charter Frontex congiunto",
      "a_chi_si_applica": "Fase 1 verso paesi con pochi casi per Stato",
      "passaggi_operativi": "Adesione a volo organizzato da altro Stato → scorta Frontex",
      "attori": "Frontex, Questure",
      "costo_unitario": "≈ 2.600 €, cofinanziato UE",
      "tempo_medio": "Mensile",
      "capacita_oggi_2032": "Centinaia l’anno → 1.500",
      "fattibilita": "Alta"
     },
     {
      "modalita": "5. Trattenimento in CPR o Gjadër → rimpatrio",
      "a_chi_si_applica": "Fase 1 senza documenti o a rischio fuga",
      "passaggi_operativi": "Convalida giudice di pace entro 48 h → identificazione consolare → lasciapassare → volo",
      "attori": "Questura, giudice di pace, consolati, ente gestore",
      "costo_unitario": "110 €/giorno × giorni + trasporto (oggi 16.560 € a 148 gg)",
      "tempo_medio": "148 giorni → 60",
      "capacita_oggi_2032": "1.732 l’anno → ≈ 2.100 (1 forzato su 3)",
      "fattibilita": "Media"
     },
     {
      "modalita": "6. Trasferimento dell’esecuzione della pena",
      "a_chi_si_applica": "Condannati UE (Romania) ed extra-UE con accordo (Albania, Marocco, Tunisia)",
      "passaggi_operativi": "Istanza del PM o del detenuto → consenso dello Stato → traduzione",
      "attori": "Ministero Giustizia, DAP, Stato ricevente",
      "costo_unitario": "Risparmio: ≈ 140 €/giorno di carcere (ipotesi)",
      "tempo_medio": "6-12 mesi",
      "capacita_oggi_2032": "Decine l’anno → 900 (UE) + 300 (extra-UE)",
      "fattibilita": "Media"
     },
     {
      "modalita": "7. Allontanamento di cittadino UE",
      "a_chi_si_applica": "Fase 4 Romania e altri UE, solo condannati o senza risorse",
      "passaggi_operativi": "Decreto del prefetto → ricorso TAR → esecuzione con accompagnamento → divieto reingresso SIS",
      "attori": "Prefettura, TAR, Polizia",
      "costo_unitario": "≈ 1.000 € (volo breve, nessun documento da ottenere)",
      "tempo_medio": "30-90 giorni",
      "capacita_oggi_2032": "n.d. → 1.000",
      "fattibilita": "Media"
     }
    ],
    "note": []
   },
   {
    "id": 2,
    "titolo": "Catena operativa Fase 1: dal rilevamento al rimpatrio",
    "colonne": [
     "Passaggio",
     "Cosa succede oggi",
     "Cosa cambia con il GRP",
     "Attore",
     "Indicatore",
     "Obiettivo 2032",
     "Collo di bottiglia",
     "Fattibilità"
    ],
    "righe": [
     {
      "passaggio": "1. Rilevamento",
      "cosa_succede_oggi": "82.505 trovati; 1 ordine ogni 3,9 rilevamenti; molti “invitati” senza fascicolo",
      "cosa_cambia_con_il_grp": "Fascicolo digitale unico per persona (Eurodac + SIS + EES) aperto entro 24 h",
      "attore": "Polizie, Questure",
      "indicatore": "Quota rilevamenti con fascicolo entro 24 h",
      "obiettivo_2032": "100%",
      "collo_di_bottiglia": "Sistemi non integrati tra Questure",
      "fattibilita": "Alta"
     },
     {
      "passaggio": "2. Decisione",
      "cosa_succede_oggi": "Ordine del prefetto; diniego asilo e ordine in atti separati",
      "cosa_cambia_con_il_grp": "Atto unico diniego + ordine (reg. UE rimpatri); ordine europeo valido in tutta l’UE",
      "attore": "Prefetto, Commissioni territoriali",
      "indicatore": "Giorni diniego → ordine",
      "obiettivo_2032": "0",
      "collo_di_bottiglia": "Contenzioso: ricorso con sospensiva",
      "fattibilita": "Alta"
     },
     {
      "passaggio": "3. Offerta volontaria",
      "cosa_succede_oggi": "Quasi assente (717 RVA in 31 mesi)",
      "cosa_cambia_con_il_grp": "Colloquio obbligatorio entro 7 gg; incentivo UE; partner OIM; informazione nei CAS",
      "attore": "Questura, OIM",
      "indicatore": "Quota ordini con offerta entro 7 gg",
      "obiettivo_2032": "100%",
      "collo_di_bottiglia": "Fondi e personale",
      "fattibilita": "Alta"
     },
     {
      "passaggio": "4. Identificazione e documenti",
      "cosa_succede_oggi": "Collo di bottiglia: Marocco, Algeria, Pakistan, Bangladesh non rispondono; 148 gg in CPR",
      "cosa_cambia_con_il_grp": "Identificazione in carcere e in CAS prima dell’ordine; accordi con lasciapassare in 15 gg; leva visti art. 25a",
      "attore": "Questura, consolati, Farnesina",
      "indicatore": "Giorni richiesta → lasciapassare",
      "obiettivo_2032": "15",
      "collo_di_bottiglia": "Volontà politica dei paesi d’origine",
      "fattibilita": "Media"
     },
     {
      "passaggio": "5. Prevenzione della fuga",
      "cosa_succede_oggi": "CPR: 883 posti utilizzabili su 1.492; occupazione 46%",
      "cosa_cambia_con_il_grp": "Obbligo di firma e residenza; braccialetto; CPR solo per chi ha il documento in arrivo",
      "attore": "Questura, giudice di pace",
      "indicatore": "Giorni medi in CPR",
      "obiettivo_2032": "60",
      "collo_di_bottiglia": "Convalide e proroghe lente",
      "fattibilita": "Media"
     },
     {
      "passaggio": "6. Ricorsi",
      "cosa_succede_oggi": "Sospensiva frequente; tempi 6-12 mesi",
      "cosa_cambia_con_il_grp": "Rito accelerato 30 gg per paesi sicuri; udienza in videoconferenza",
      "attore": "Tribunali",
      "indicatore": "Giorni medi del ricorso",
      "obiettivo_2032": "30",
      "collo_di_bottiglia": "Carico dei tribunali",
      "fattibilita": "Media"
     },
     {
      "passaggio": "7. Trasferimento",
      "cosa_succede_oggi": "Charter limitati dai tetti (Tunisia 80/settimana); volo di linea costoso",
      "cosa_cambia_con_il_grp": "Programmazione annuale dei voli con Frontex; charter congiunti",
      "attore": "Viminale, Frontex",
      "indicatore": "Rimpatri eseguiti",
      "obiettivo_2032": "12.777",
      "collo_di_bottiglia": "Capacità di accoglienza dei paesi d’origine",
      "fattibilita": "Media"
     },
     {
      "passaggio": "8. Reinserimento",
      "cosa_succede_oggi": "Nessun monitoraggio",
      "cosa_cambia_con_il_grp": "Incentivo in 2 tranche; verifica a 6 mesi; dato pubblicato",
      "attore": "OIM, paese d’origine",
      "indicatore": "Quota rientrati verificati a 6 mesi",
      "obiettivo_2032": "80%",
      "collo_di_bottiglia": "Nessuno",
      "fattibilita": "Alta"
     }
    ],
    "note": []
   },
   {
    "id": 3,
    "titolo": "Fase 2, 3, 4: come si attiva il perimetro",
    "colonne": [
     "Categoria",
     "Evento che apre il perimetro",
     "Procedura concreta",
     "Attore",
     "Persone l’anno (ordine di grandezza)",
     "Tempo",
     "Vincolo principale",
     "Fattibilità"
    ],
    "righe": [
     {
      "categoria": "Richiedenti asilo (Fase 2)",
      "evento_che_apre_il_perimetro": "Diniego in prima istanza (≈ 50.400 l’anno)",
      "procedura_concreta": "Procedura di frontiera 12 settimane nei CTRA per paesi < 20%; diniego + ordine in un atto; RVA offerto nel centro",
      "attore": "Commissioni, Questura, CTRA",
      "persone_l_anno_ordine_di_grandezza": "50.000",
      "tempo": "12 settimane",
      "vincolo_principale": "Ricorsi; posti CTRA (1.033)",
      "fattibilita": "Alta"
     },
     {
      "categoria": "Permessi a termine (Fase 2)",
      "evento_che_apre_il_perimetro": "Perdita del lavoro oltre 12 mesi; reddito sotto soglia; fine stagione o corso",
      "procedura_concreta": "Incrocio INPS-Questura al rinnovo; stagionali: controllo uscita EES; mancato rinnovo → ordine",
      "attore": "Questura, INPS, EES",
      "persone_l_anno_ordine_di_grandezza": "n.d. (da misurare)",
      "tempo": "Alla scadenza",
      "vincolo_principale": "Nessun dato oggi; art. 8 CEDU per famiglie",
      "fattibilita": "Media"
     },
     {
      "categoria": "Lungo soggiornanti (Fase 2)",
      "evento_che_apre_il_perimetro": "Condanna per reati artt. 380-381 c.p.p.; assenza > 12 mesi",
      "procedura_concreta": "Segnalazione automatica DAP → Questura; revoca; espulsione a fine pena",
      "attore": "DAP, Questura, Prefetto",
      "persone_l_anno_ordine_di_grandezza": "Centinaia",
      "tempo": "Durante la pena",
      "vincolo_principale": "Valutazione individuale; ricorsi",
      "fattibilita": "Media"
     },
     {
      "categoria": "Protezione sussidiaria e speciale (Fase 2)",
      "evento_che_apre_il_perimetro": "Scadenza del permesso (5 e 2 anni)",
      "procedura_concreta": "Riesame d’ufficio sulla situazione del paese; cessazione → ordine",
      "attore": "Commissione nazionale",
      "persone_l_anno_ordine_di_grandezza": "Migliaia (es. Siria, Ucraina)",
      "tempo": "Alla scadenza",
      "vincolo_principale": "Non-refoulement",
      "fattibilita": "Media"
     },
     {
      "categoria": "Condannati extra-UE (Fase 1)",
      "evento_che_apre_il_perimetro": "Sentenza definitiva",
      "procedura_concreta": "Identificazione consolare in carcere nei primi 6 mesi; lasciapassare pronto; espulsione al fine pena o alternativa (residuo ≤ 2 anni)",
      "attore": "DAP, Questura, magistrato di sorveglianza",
      "persone_l_anno_ordine_di_grandezza": "4.000 nel 2032",
      "tempo": "Entro la pena",
      "vincolo_principale": "Riammissione dei paesi",
      "fattibilita": "Media"
     },
     {
      "categoria": "Romania (Fase 4)",
      "evento_che_apre_il_perimetro": "Condanna o assenza di risorse",
      "procedura_concreta": "Allontanamento art. 20-21; esecuzione pena in Romania (DQ 2008/909)",
      "attore": "Prefetto, Min. Giustizia",
      "persone_l_anno_ordine_di_grandezza": "1.000 + 900",
      "tempo": "3-12 mesi",
      "vincolo_principale": "Dir. 2004/38: solo casi individuali",
      "fattibilita": "Media"
     },
     {
      "categoria": "Protezione temporanea (Fase 4)",
      "evento_che_apre_il_perimetro": "Scadenza 4.3.2028",
      "procedura_concreta": "Censimento 2027: lavoro sì/no; conversione per chi lavora; RVA verso Ucraina per gli altri",
      "attore": "Viminale, OIM, Ucraina",
      "persone_l_anno_ordine_di_grandezza": "160.000 in 2 anni",
      "tempo": "2027-2029",
      "vincolo_principale": "Situazione di guerra",
      "fattibilita": "Media"
     },
     {
      "categoria": "Naturalizzati (Fase 3)",
      "evento_che_apre_il_perimetro": "Legge sulla revoca (2027) e riforma costituzionale (2027-2030)",
      "procedura_concreta": "2027 legge ordinaria: revoca per reati gravi entro 10 anni; 2027-29 riforma artt. 3 e 22 con referendum; dal 2030 allontanamento dei condannati; programma di rientro volontario con incentivo dal 2027",
      "attore": "Parlamento, elettori, Viminale",
      "persone_l_anno_ordine_di_grandezza": "3.000 revoche + 10.000 rientri volontari l’anno a regime",
      "tempo": "3 anni",
      "vincolo_principale": "Tempi parlamentari; apolidia (serve seconda cittadinanza)",
      "fattibilita": "Media"
     },
     {
      "categoria": "Seconda generazione (Fase 3)",
      "evento_che_apre_il_perimetro": "Idem; nel frattempo chiusura del rubinetto: art. 4 c. 2 e art. 14 L. 91/92",
      "procedura_concreta": "Idem; rinuncia alla cittadinanza incentivata (art. 14) per chi aderisce al rientro volontario",
      "attore": "Parlamento, Viminale",
      "persone_l_anno_ordine_di_grandezza": "Idem",
      "tempo": "3 anni",
      "vincolo_principale": "Idem",
      "fattibilita": "Media"
     }
    ],
    "note": []
   },
   {
    "id": 4,
    "titolo": "Paesi d’origine: riammissione",
    "colonne": [
     "Paese",
     "Situazione 2025",
     "Cosa serve",
     "Leva",
     "Rimpatri IT 2025",
     "Obiettivo 2032",
     "Strumento",
     "Fattibilità"
    ],
    "righe": [
     {
      "paese": "Tunisia",
      "situazione_2025": "Accordo operativo; tetto 80/settimana; charter 78 → 28; 1.849 → 600 rimpatri",
      "cosa_serve": "Alzare il tetto a 200/settimana; charter programmati",
      "leva": "MoU UE-Tunisia 2023 (105 M€); quote lavoro",
      "rimpatri_it_2025": "600",
      "obiettivo_2032": "3.000",
      "strumento": "Charter nazionale",
      "fattibilita": "Media"
     },
     {
      "paese": "Egitto",
      "situazione_2025": "18 charter; 454 rimpatri; 52% degli ingressi in CPR rimpatriati",
      "cosa_serve": "Raddoppiare i charter",
      "leva": "Partenariato UE-Egitto 2024 (7,4 mld €); visti",
      "rimpatri_it_2025": "454",
      "obiettivo_2032": "1.500",
      "strumento": "Charter nazionale",
      "fattibilita": "Media"
     },
     {
      "paese": "Albania",
      "situazione_2025": "Riammissione funziona; accordo esecuzione pena 2002",
      "cosa_serve": "Volume",
      "leva": "Candidatura UE",
      "rimpatri_it_2025": null,
      "rimpatri_it_2025_nd": true,
      "obiettivo_2032": "1.000",
      "strumento": "Volo di linea; trasferimento pena",
      "fattibilita": "Alta"
     },
     {
      "paese": "Marocco",
      "situazione_2025": "Prima nazionalità in carcere (4.358); lasciapassare rari",
      "cosa_serve": "Accordo di riammissione con tempi certi",
      "leva": "Visti art. 25a; commercio UE; Piano Mattei",
      "rimpatri_it_2025": null,
      "rimpatri_it_2025_nd": true,
      "obiettivo_2032": "1.500",
      "strumento": "Accordo bilaterale",
      "fattibilita": "Bassa"
     },
     {
      "paese": "Bangladesh",
      "situazione_2025": "Primo paese per richieste d’asilo (32.865); rigetti alti; riammissione lenta",
      "cosa_serve": "Accordo UE-Bangladesh (SOP 2017) applicato",
      "leva": "Visti; quote lavoro (decreto flussi)",
      "rimpatri_it_2025": null,
      "rimpatri_it_2025_nd": true,
      "obiettivo_2032": "1.500",
      "strumento": "Charter Frontex",
      "fattibilita": "Media"
     },
     {
      "paese": "Pakistan",
      "situazione_2025": "Riammissione formale (accordo UE 2010) ma identificazione lenta",
      "cosa_serve": "Identificazione consolare in carcere e CAS",
      "leva": "Visti; GSP+ commercio",
      "rimpatri_it_2025": null,
      "rimpatri_it_2025_nd": true,
      "obiettivo_2032": "800",
      "strumento": "Charter Frontex",
      "fattibilita": "Bassa"
     },
     {
      "paese": "Algeria",
      "situazione_2025": "Nessuna cooperazione",
      "cosa_serve": "Accordo politico",
      "leva": "Gas; visti",
      "rimpatri_it_2025": null,
      "rimpatri_it_2025_nd": true,
      "obiettivo_2032": "500",
      "strumento": "Volo di linea",
      "fattibilita": "Bassa"
     },
     {
      "paese": "Nigeria",
      "situazione_2025": "Charter congiunti Frontex; cooperazione parziale",
      "cosa_serve": "Continuità",
      "leva": "Visti; aiuti",
      "rimpatri_it_2025": null,
      "rimpatri_it_2025_nd": true,
      "obiettivo_2032": "500",
      "strumento": "Charter Frontex",
      "fattibilita": "Media"
     },
     {
      "paese": "Georgia",
      "situazione_2025": "Riammissione funziona (accordo UE 2011)",
      "cosa_serve": "Volume",
      "leva": null,
      "rimpatri_it_2025": null,
      "rimpatri_it_2025_nd": true,
      "obiettivo_2032": "300",
      "strumento": "Volo di linea",
      "fattibilita": "Alta"
     },
     {
      "paese": "Ucraina (Fase 4)",
      "situazione_2025": "Riammette i propri cittadini",
      "cosa_serve": "Programma di rientro volontario",
      "leva": "Ricostruzione UE",
      "rimpatri_it_2025": null,
      "rimpatri_it_2025_nd": true,
      "obiettivo_2032": "40.000 (2028)",
      "strumento": "RVA",
      "fattibilita": "Alta"
     },
     {
      "paese": "Romania (Fase 4)",
      "situazione_2025": "Stato UE: nessun problema di riammissione",
      "cosa_serve": "Applicare art. 20 e DQ 2008/909",
      "leva": null,
      "rimpatri_it_2025": null,
      "rimpatri_it_2025_nd": true,
      "obiettivo_2032": "1.900",
      "strumento": "Allontanamento; trasferimento pena",
      "fattibilita": "Media"
     }
    ],
    "note": []
   },
   {
    "id": 5,
    "titolo": "Se il paese d’origine non riammette: soluzioni alternative",
    "colonne": [
     "Soluzione",
     "Come funziona",
     "A chi si applica",
     "Base giuridica",
     "Costo",
     "Tempo",
     "Limite",
     "Fattibilità"
    ],
    "righe": [
     {
      "soluzione": "A. Leva dei visti (art. 25a Codice visti)",
      "come_funziona": "Riduzione visti Schengen, tasse più alte, tempi più lunghi per i cittadini del paese che non coopera; già applicata a Gambia, Etiopia",
      "a_chi_si_applica": "Marocco, Algeria, Pakistan, Bangladesh",
      "base_giuridica": "Reg. (UE) 810/2009 art. 25a",
      "costo": "Nullo",
      "tempo": "3-6 mesi per la decisione UE",
      "limite": "Serve maggioranza qualificata in Consiglio",
      "fattibilita": "Alta"
     },
     {
      "soluzione": "B. Condizionalità commerciale e aiuti",
      "come_funziona": "GSP+ (Pakistan, Bangladesh), accordi di associazione (Marocco), Piano Mattei, rimesse: riammissione come condizione",
      "a_chi_si_applica": "Tutti",
      "base_giuridica": "Reg. GSP (UE) 2023; accordi bilaterali",
      "costo": "Nullo o negativo (aiuti sospesi)",
      "tempo": "1-2 anni",
      "limite": "Interessi economici contrari (gas algerino, tessile Bangladesh)",
      "fattibilita": "Media"
     },
     {
      "soluzione": "C. Rimpatrio verso paese terzo o hub",
      "come_funziona": "Trasferimento in un paese che accetta (hub di rimpatrio del regolamento UE 2026; Albania; accordi tipo Ruanda) quando il paese d’origine rifiuta",
      "a_chi_si_applica": "Chi è identificato ma non riammesso",
      "base_giuridica": "Reg. UE rimpatri 2026 (return hubs); L. 14/2024",
      "costo": "≈ 10.000 € a persona (ipotesi)",
      "tempo": "6-12 mesi per gli accordi",
      "limite": "Serve un paese ospitante; CEDU art. 3",
      "fattibilita": "Media"
     },
     {
      "soluzione": "D. Trattenimento prolungato",
      "come_funziona": "Fino a 24 + 6 mesi in CPR o Gjadër finché il documento arriva; pressione sul consolato",
      "a_chi_si_applica": "Non cooperanti con rischio di fuga",
      "base_giuridica": "Reg. UE rimpatri 2026",
      "costo": "110 €/giorno (≈ 100.000 € a persona per 30 mesi)",
      "tempo": "Immediato",
      "limite": "Costo; convalide del giudice ogni 3 mesi",
      "fattibilita": "Media"
     },
     {
      "soluzione": "E. Reato di mancata cooperazione",
      "come_funziona": "Chi rifiuta di dichiarare l’identità o di collaborare al rimpatrio commette reato: detenzione in carcere, poi espulsione come misura di sicurezza",
      "a_chi_si_applica": "Non cooperanti",
      "base_giuridica": "Reg. UE rimpatri 2026 (obbligo di cooperazione); TU art. 14 c. 5-ter da rafforzare",
      "costo": "140 €/giorno di carcere",
      "tempo": "Legge ordinaria 2027",
      "limite": "Corte di giustizia UE (sentenza El Dridi): la pena non può ostacolare il rimpatrio",
      "fattibilita": "Media"
     },
     {
      "soluzione": "F. Incentivo volontario maggiorato",
      "come_funziona": "Incentivo doppio (fino a 5.000 €) per chi parte entro 30 giorni verso un paese che non coopera sui forzati: il volontario non ha bisogno di lasciapassare consolare, basta il passaporto o un documento del paese",
      "a_chi_si_applica": "Chi ha ancora un passaporto",
      "base_giuridica": "TU art. 14-ter",
      "costo": "5.000 € contro 16.560 € di un forzato da CPR",
      "tempo": "Immediato",
      "limite": "Funziona solo per chi ha documenti",
      "fattibilita": "Alta"
     },
     {
      "soluzione": "G. Permanenza vincolata",
      "come_funziona": "Per chi resta non rimpatriabile: nessun permesso, obbligo di firma, residenza assegnata, niente accesso a prestazioni sociali non essenziali, lavoro solo in programmi pubblici; rivalutazione ogni 6 mesi",
      "a_chi_si_applica": "Residuo non rimpatriabile",
      "base_giuridica": "Legge ordinaria; reg. UE rimpatri",
      "costo": "Basso",
      "tempo": "Legge 2027",
      "limite": "Diritti fondamentali (vitto, cure urgenti) restano",
      "fattibilita": "Alta"
     },
     {
      "soluzione": "H. Pressione europea congiunta",
      "come_funziona": "Gli alleati (FR, DE, AT, IT) chiedono insieme la riammissione: sospensione coordinata dei visti e degli accordi",
      "a_chi_si_applica": "Marocco, Algeria",
      "base_giuridica": "Consiglio UE",
      "costo": "Nullo",
      "tempo": "2027-2028",
      "limite": "Serve l’allineamento politico ipotizzato dal GRP",
      "fattibilita": "Media"
     }
    ],
    "note": [
     "Ordine di applicazione: F (volontario) → A e H (pressione) → B (condizionalità) → C (paese terzo) → D ed E (trattenimento, reato) → G (permanenza vincolata) per il residuo."
    ]
   },
   {
    "id": 6,
    "titolo": "Scorecard di fattibilità e alternativa (1 = terzi non cooperano, 5 = già possibile)",
    "colonne": [
     "Categoria",
     "Cooperazione di terzi (paesi d’origine, UE)",
     "Capacità operativa italiana",
     "Costo",
     "Totale /15",
     "Giudizio",
     "Se la cooperazione manca: alternativa"
    ],
    "righe": [
     {
      "categoria": "Fase 1 · Irregolari",
      "cooperazione_di_terzi_paesi_d_origine_ue": 2,
      "capacita_operativa_italiana": 2,
      "costo": 4,
      "totale_15": 8,
      "giudizio": "Fattibile; dipende da Marocco, Algeria, Pakistan, Bangladesh",
      "se_la_cooperazione_manca_alternativa": "F volontario maggiorato → A/H visti → C paese terzo → D/E → G permanenza vincolata"
     },
     {
      "categoria": "Fase 1 · Condannati",
      "cooperazione_di_terzi_paesi_d_origine_ue": 2,
      "capacita_operativa_italiana": 3,
      "costo": 5,
      "totale_15": 10,
      "giudizio": "Prioritaria: identificazione in carcere",
      "se_la_cooperazione_manca_alternativa": "E reato di mancata cooperazione; C paese terzo; trasferimento pena dove c’è accordo"
     },
     {
      "categoria": "Fase 2 · Richiedenti asilo respinti",
      "cooperazione_di_terzi_paesi_d_origine_ue": 3,
      "capacita_operativa_italiana": 3,
      "costo": 4,
      "totale_15": 10,
      "giudizio": "Fattibile con procedura di frontiera",
      "se_la_cooperazione_manca_alternativa": "Decisione e rimpatrio dal CTRA; F volontario; C hub"
     },
     {
      "categoria": "Fase 2 · Permessi a termine",
      "cooperazione_di_terzi_paesi_d_origine_ue": 4,
      "capacita_operativa_italiana": 2,
      "costo": 4,
      "totale_15": 10,
      "giudizio": "Fattibile: serve il sistema di tracciamento",
      "se_la_cooperazione_manca_alternativa": "Nessuna alternativa necessaria: il titolo scade per legge; poi come Fase 1"
     },
     {
      "categoria": "Fase 2 · Lungo soggiornanti",
      "cooperazione_di_terzi_paesi_d_origine_ue": 3,
      "capacita_operativa_italiana": 2,
      "costo": 4,
      "totale_15": 9,
      "giudizio": "Condannati subito; gli altri dopo la revisione della dir. 2003/109",
      "se_la_cooperazione_manca_alternativa": "Revoca per assenza e frode; poi come Fase 1"
     },
     {
      "categoria": "Fase 2 · Rifugiati",
      "cooperazione_di_terzi_paesi_d_origine_ue": 2,
      "capacita_operativa_italiana": 2,
      "costo": 3,
      "totale_15": 7,
      "giudizio": "Dopo la revisione UE della direttiva qualifiche",
      "se_la_cooperazione_manca_alternativa": "Cessazione per paesi tornati sicuri (Siria); revoca per reati; C paese terzo sicuro"
     },
     {
      "categoria": "Fase 3 · Naturalizzati e seconda generazione",
      "cooperazione_di_terzi_paesi_d_origine_ue": 4,
      "capacita_operativa_italiana": 2,
      "costo": 3,
      "totale_15": 9,
      "giudizio": "Tempi parlamentari, non terzi: i paesi d’origine riammettono chi ha ancora la loro cittadinanza",
      "se_la_cooperazione_manca_alternativa": "Rientro volontario incentivato con rinuncia (art. 14); per chi ha solo la cittadinanza italiana serve la seconda cittadinanza (apolidia)"
     },
     {
      "categoria": "Fase 4 · Romania",
      "cooperazione_di_terzi_paesi_d_origine_ue": 5,
      "capacita_operativa_italiana": 3,
      "costo": 5,
      "totale_15": 13,
      "giudizio": "Stato UE: nessun problema di riammissione",
      "se_la_cooperazione_manca_alternativa": "Nessuna necessaria"
     },
     {
      "categoria": "Fase 4 · Protezione temporanea",
      "cooperazione_di_terzi_paesi_d_origine_ue": 4,
      "capacita_operativa_italiana": 3,
      "costo": 4,
      "totale_15": 11,
      "giudizio": "Ucraina riammette; dipende dalla guerra",
      "se_la_cooperazione_manca_alternativa": "Conversione a permesso a termine (→ Fase 2) se il rientro non è possibile"
     }
    ],
    "note": [
     "Ipotesi di base del GRP: le norme UE e nazionali vengono cambiate entro pochi anni in senso favorevole; il punteggio è basso solo quando terzi (paesi d’origine) non cooperano. Punteggi: ipotesi di lavoro."
    ]
   }
  ]
 },
 "funnel_27": {
  "titolo": "Great Remigration Plan · Funnel per i 27 Stati membri",
  "nota": "Stesse categorie e stesse fasi del tab Italia. Fonti solo Eurostat (1.1.2025; LFS 2025; flussi 2025). n.d. = non pubblicato da Eurostat.",
  "paesi": [
   "IT",
   "AT",
   "BE",
   "BG",
   "CY",
   "HR",
   "DK",
   "EE",
   "FI",
   "FR",
   "DE",
   "EL",
   "IE",
   "LV",
   "LT",
   "LU",
   "MT",
   "NL",
   "PL",
   "PT",
   "CZ",
   "RO",
   "SK",
   "SI",
   "ES",
   "SE",
   "HU",
   "UE27"
  ],
  "nomi": {
   "IT": "Italia",
   "AT": "Austria",
   "BE": "Belgio",
   "BG": "Bulgaria",
   "CY": "Cipro",
   "HR": "Croazia",
   "DK": "Danimarca",
   "EE": "Estonia",
   "FI": "Finlandia",
   "FR": "Francia",
   "DE": "Germania",
   "EL": "Grecia",
   "IE": "Irlanda",
   "LV": "Lettonia",
   "LT": "Lituania",
   "LU": "Lussemburgo",
   "MT": "Malta",
   "NL": "Paesi Bassi",
   "PL": "Polonia",
   "PT": "Portogallo",
   "CZ": "Repubblica Ceca",
   "RO": "Romania",
   "SK": "Slovacchia",
   "SI": "Slovenia",
   "ES": "Spagna",
   "SE": "Svezia",
   "HU": "Ungheria",
   "UE27": "UE27 (somma dei paesi con dato)"
  },
  "stock": [
   {
    "codice": "",
    "voce": "Popolazione residente",
    "segno": "=",
    "fase": null,
    "livello": 0,
    "valori": {
     "IT": 58943464,
     "AT": 9197213,
     "BE": 11883495,
     "BG": 6437360,
     "CY": 982966,
     "HR": 3874350,
     "DK": 5992734,
     "EE": 1369995,
     "FI": 5635971,
     "FR": 68882600,
     "DE": 83577140,
     "EL": 10372335,
     "IE": 5440278,
     "LV": 1860565,
     "LT": 2890664,
     "LU": 681973,
     "MT": 574250,
     "NL": 18044027,
     "PL": 36497495,
     "PT": 10749635,
     "CZ": 10909500,
     "RO": 19043151,
     "SK": 5419451,
     "SI": 2130850,
     "ES": 49128297,
     "SE": 10587710,
     "HU": 9539502,
     "UE27": 450646971
    }
   },
   {
    "codice": "A",
    "voce": "Cittadini",
    "segno": "=",
    "fase": null,
    "livello": 1,
    "valori": {
     "IT": 53572213,
     "AT": 7341794,
     "BE": 10193392,
     "BG": 6284422,
     "CY": 739677,
     "HR": 3720379,
     "DK": 5315187,
     "EE": 1123385,
     "FI": 5224870,
     "FR": 62414394,
     "DE": 71184865,
     "EL": 9635274,
     "IE": 4565956,
     "LV": 1630884,
     "LT": 2740912,
     "LU": 361247,
     "MT": 405312,
     "NL": 16428041,
     "PL": 36069586,
     "PT": null,
     "CZ": 9926844,
     "RO": 18674247,
     "SK": 5350766,
     "SI": 1915919,
     "ES": 42216326,
     "SE": 9755897,
     "HU": 9284059,
     "UE27": 396075848
    }
   },
   {
    "codice": "A1",
    "voce": "nati nel paese",
    "segno": "=",
    "fase": null,
    "livello": 2,
    "valori": {
     "IT": 51213465,
     "AT": 6831147,
     "BE": 9243106,
     "BG": 6177305,
     "CY": null,
     "HR": null,
     "DK": 5060116,
     "EE": 1057254,
     "FI": 5028999,
     "FR": null,
     "DE": null,
     "EL": null,
     "IE": null,
     "LV": 1555619,
     "LT": null,
     "LU": 291230,
     "MT": null,
     "NL": 14904418,
     "PL": null,
     "PT": null,
     "CZ": null,
     "RO": null,
     "SK": 5185351,
     "SI": 1785195,
     "ES": 39164944,
     "SE": 8314731,
     "HU": 8840023,
     "UE27": 164652903
    }
   },
   {
    "codice": "A1a",
    "voce": "da genitori nati nel paese (residuo)",
    "segno": "+",
    "fase": "FUORI",
    "livello": 3,
    "valori": {
     "IT": 50057565,
     "AT": 6189047,
     "BE": 8170506,
     "BG": 6163805,
     "CY": null,
     "HR": null,
     "DK": null,
     "EE": 933054,
     "FI": 4893899,
     "FR": null,
     "DE": null,
     "EL": null,
     "IE": null,
     "LV": 1369119,
     "LT": null,
     "LU": 215430,
     "MT": null,
     "NL": 13228418,
     "PL": null,
     "PT": null,
     "CZ": null,
     "RO": null,
     "SK": 5132651,
     "SI": 1635495,
     "ES": 37931444,
     "SE": 7482931,
     "HU": 8708423,
     "UE27": 152111787
    }
   },
   {
    "codice": "A1b",
    "voce": "seconda generazione, cittadini 15-74 (LFS)",
    "segno": "+",
    "fase": "Fase 3",
    "livello": 3,
    "valori": {
     "IT": 1155900,
     "AT": 642100,
     "BE": 1072600,
     "BG": 13500,
     "CY": 30000,
     "HR": 311700,
     "DK": null,
     "EE": 124200,
     "FI": 135100,
     "FR": 6550000,
     "DE": 8141700,
     "EL": 219200,
     "IE": 293400,
     "LV": 186500,
     "LT": 56800,
     "LU": 75800,
     "MT": null,
     "NL": 1676000,
     "PL": 339800,
     "PT": 397600,
     "CZ": 268700,
     "RO": 6700,
     "SK": 52700,
     "SI": 149700,
     "ES": 1233500,
     "SE": 831800,
     "HU": 131600,
     "UE27": 24096600
    }
   },
   {
    "codice": "A2",
    "voce": "nati all’estero",
    "segno": "=",
    "fase": null,
    "livello": 2,
    "valori": {
     "IT": 2358748,
     "AT": 510647,
     "BE": 950286,
     "BG": 107117,
     "CY": null,
     "HR": null,
     "DK": 255071,
     "EE": 66131,
     "FI": 195871,
     "FR": null,
     "DE": null,
     "EL": null,
     "IE": null,
     "LV": 75265,
     "LT": null,
     "LU": 70017,
     "MT": null,
     "NL": 1523623,
     "PL": null,
     "PT": null,
     "CZ": null,
     "RO": null,
     "SK": 165415,
     "SI": 130724,
     "ES": 3051382,
     "SE": 1441166,
     "HU": 444036,
     "UE27": 11345499
    }
   },
   {
    "codice": "A2a",
    "voce": "naturalizzati: acquisizioni 2015-2024 (stima per difetto)",
    "segno": "+",
    "fase": "Fase 3",
    "livello": 3,
    "valori": {
     "IT": 1663746,
     "AT": 100006,
     "BE": 410150,
     "BG": 10224,
     "CY": 28915,
     "HR": 11882,
     "DK": 66980,
     "EE": 9554,
     "FI": 96768,
     "FR": 1099169,
     "DE": 1483382,
     "EL": 189352,
     "IE": 116986,
     "LV": 14003,
     "LT": 1810,
     "LU": 50743,
     "MT": 11077,
     "NL": 434596,
     "PL": 75238,
     "PT": 221070,
     "CZ": 40468,
     "RO": 85080,
     "SK": 5993,
     "SI": 16378,
     "ES": 1466064,
     "SE": 699792,
     "HU": 29707,
     "UE27": 8439133
    }
   },
   {
    "codice": "A2b",
    "voce": "altri nati all’estero (residuo)",
    "segno": "+",
    "fase": "FUORI",
    "livello": 3,
    "valori": {
     "IT": 695002,
     "AT": 410641,
     "BE": 540136,
     "BG": 96893,
     "CY": null,
     "HR": null,
     "DK": 188091,
     "EE": 56577,
     "FI": 99103,
     "FR": null,
     "DE": null,
     "EL": null,
     "IE": null,
     "LV": 61262,
     "LT": null,
     "LU": 19274,
     "MT": null,
     "NL": 1089027,
     "PL": null,
     "PT": null,
     "CZ": null,
     "RO": null,
     "SK": 159422,
     "SI": 114346,
     "ES": 1585318,
     "SE": 741374,
     "HU": 414329,
     "UE27": 6270795
    }
   },
   {
    "codice": "B",
    "voce": "Cittadini di altri Stati UE",
    "segno": "+",
    "fase": "FUORI",
    "livello": 1,
    "valori": {
     "IT": 1373870,
     "AT": 923854,
     "BE": 1006037,
     "BG": 31035,
     "CY": 99030,
     "HR": 23448,
     "DK": 276115,
     "EE": 22690,
     "FI": 107956,
     "FR": 1621028,
     "DE": 4350923,
     "EL": 114128,
     "IE": 366693,
     "LV": 3937,
     "LT": 3662,
     "LU": 244291,
     "MT": 45771,
     "NL": 770888,
     "PL": 32317,
     "PT": null,
     "CZ": 197668,
     "RO": 68774,
     "SK": 39933,
     "SI": 21433,
     "ES": 1757955,
     "SE": 306724,
     "HU": 87962,
     "UE27": 13898122
    }
   },
   {
    "codice": "C",
    "voce": "Cittadini extra-UE residenti",
    "segno": "=",
    "fase": null,
    "livello": 1,
    "valori": {
     "IT": 3996856,
     "AT": 909689,
     "BE": 662127,
     "BG": 115754,
     "CY": 144259,
     "HR": 129750,
     "DK": 392951,
     "EE": 223135,
     "FI": 300096,
     "FR": 4847178,
     "DE": 8024309,
     "EL": 622933,
     "IE": 506707,
     "LV": 225629,
     "LT": 144294,
     "LU": 76142,
     "MT": 123167,
     "NL": 821732,
     "PL": 392169,
     "PT": null,
     "CZ": 784772,
     "RO": 299603,
     "SK": 25736,
     "SI": 193498,
     "ES": 5149235,
     "SE": 508931,
     "HU": 167205,
     "UE27": 29787857
    }
   },
   {
    "codice": "C1",
    "voce": "protezione temporanea",
    "segno": "+",
    "fase": "Fase 4",
    "livello": 2,
    "valori": {
     "IT": 60485,
     "AT": 92455,
     "BE": 93425,
     "BG": 78105,
     "CY": 25465,
     "HR": 28540,
     "DK": 48685,
     "EE": 34395,
     "FI": 78225,
     "FR": 51885,
     "DE": 1251105,
     "EL": 38140,
     "IE": 119375,
     "LV": 31250,
     "LT": 51540,
     "LU": 4060,
     "MT": 2495,
     "NL": 134090,
     "PL": 969250,
     "PT": 66740,
     "CZ": 393055,
     "RO": 201890,
     "SK": 139580,
     "SI": 11280,
     "ES": 255245,
     "SE": 49615,
     "HU": 43300,
     "UE27": 4353675
    }
   },
   {
    "codice": "C2",
    "voce": "richiedenti asilo in attesa (dic 2025)",
    "segno": "+",
    "fase": "Fase 2",
    "livello": 2,
    "valori": {
     "IT": 234165,
     "AT": 22555,
     "BE": 58720,
     "BG": 1630,
     "CY": 23225,
     "HR": 505,
     "DK": 2475,
     "EE": 325,
     "FI": 4220,
     "FR": 153200,
     "DE": 306650,
     "EL": 31945,
     "IE": 32620,
     "LV": 725,
     "LT": 160,
     "LU": 4195,
     "MT": 1415,
     "NL": 63295,
     "PL": 12780,
     "PT": 8595,
     "CZ": 625,
     "RO": 295,
     "SK": 90,
     "SI": 1480,
     "ES": 248760,
     "SE": 6205,
     "HU": 50,
     "UE27": 1220905
    }
   },
   {
    "codice": "C3",
    "voce": "altri regolari: lungo soggiornanti e permessi a termine (residuo)",
    "segno": "+",
    "fase": "Fase 2",
    "livello": 2,
    "valori": {
     "IT": 3702206,
     "AT": 794679,
     "BE": 509982,
     "BG": 36019,
     "CY": 95569,
     "HR": 100705,
     "DK": 341791,
     "EE": 188415,
     "FI": 217651,
     "FR": 4642093,
     "DE": 6466554,
     "EL": 552848,
     "IE": 354712,
     "LV": 193654,
     "LT": 92594,
     "LU": 67887,
     "MT": 119257,
     "NL": 624347,
     "PL": -589861,
     "PT": null,
     "CZ": 391092,
     "RO": 97418,
     "SK": -113934,
     "SI": 180738,
     "ES": 4645230,
     "SE": 453111,
     "HU": 123855,
     "UE27": 24288612
    }
   },
   {
    "codice": "D",
    "voce": "Irregolari presenti (stock)",
    "segno": "+",
    "fase": "Fase 1",
    "livello": 1,
    "valori": {
     "IT": 339000,
     "AT": null,
     "BE": null,
     "BG": null,
     "CY": null,
     "HR": null,
     "DK": null,
     "EE": null,
     "FI": null,
     "FR": null,
     "DE": null,
     "EL": null,
     "IE": null,
     "LV": null,
     "LT": null,
     "LU": null,
     "MT": null,
     "NL": null,
     "PL": null,
     "PT": null,
     "CZ": null,
     "RO": null,
     "SK": null,
     "SI": null,
     "ES": null,
     "SE": null,
     "HU": null,
     "UE27": 339000
    }
   }
  ],
  "flussi": [
   {
    "codice": "F1",
    "voce": "Trovati in posizione irregolare",
    "segno": null,
    "fase": "Fase 1",
    "livello": 2,
    "valori": {
     "IT": 82505,
     "AT": 16550,
     "BE": 9420,
     "BG": 7745,
     "CY": 5335,
     "HR": 20300,
     "DK": 1375,
     "EE": 585,
     "FI": 660,
     "FR": 159460,
     "DE": 168360,
     "EL": 60800,
     "IE": 5460,
     "LV": 2410,
     "LT": 5035,
     "LU": 2150,
     "MT": 2150,
     "NL": 3955,
     "PL": 17650,
     "PT": 735,
     "CZ": 10370,
     "RO": 24350,
     "SK": 1535,
     "SI": 28575,
     "ES": 58910,
     "SE": 2495,
     "HU": 20515,
     "UE27": 719390
    }
   },
   {
    "codice": "F2",
    "voce": "Ordini di lasciare il territorio",
    "segno": null,
    "fase": "Fase 1",
    "livello": 2,
    "valori": {
     "IT": 21295,
     "AT": 11165,
     "BE": 25340,
     "BG": 3880,
     "CY": 15185,
     "HR": 11330,
     "DK": 2280,
     "EE": 660,
     "FI": 5070,
     "FR": 137550,
     "DE": 55240,
     "EL": 26635,
     "IE": 6260,
     "LV": 2640,
     "LT": 4900,
     "LU": 1340,
     "MT": 1090,
     "NL": 31230,
     "PL": 14760,
     "PT": 18245,
     "CZ": 5250,
     "RO": 2860,
     "SK": 500,
     "SI": 880,
     "ES": 53700,
     "SE": 18340,
     "HU": 9080,
     "UE27": 486705
    }
   },
   {
    "codice": "F3",
    "voce": "Rimpatri verso paesi terzi",
    "segno": null,
    "fase": "Fase 1",
    "livello": 2,
    "valori": {
     "IT": 4780,
     "AT": 7305,
     "BE": 4955,
     "BG": 1150,
     "CY": 10630,
     "HR": 6560,
     "DK": 975,
     "EE": 565,
     "FI": 1820,
     "FR": 14940,
     "DE": 29295,
     "EL": 5050,
     "IE": 2030,
     "LV": 2280,
     "LT": 4545,
     "LU": 370,
     "MT": 1065,
     "NL": 4825,
     "PL": 9690,
     "PT": 825,
     "CZ": 3180,
     "RO": 775,
     "SK": 395,
     "SI": 175,
     "ES": 5705,
     "SE": 11250,
     "HU": 4135,
     "UE27": 139270
    }
   },
   {
    "codice": "F3/F2",
    "voce": "Tasso di esecuzione",
    "segno": null,
    "fase": "Fase 1",
    "livello": 4,
    "valori": {
     "IT": 0.224465837050951,
     "AT": 0.654276757725034,
     "BE": 0.195540647198106,
     "BG": 0.29639175257732,
     "CY": 0.70003292723082,
     "HR": 0.578993821712268,
     "DK": 0.427631578947368,
     "EE": 0.856060606060606,
     "FI": 0.358974358974359,
     "FR": 0.108615049073064,
     "DE": 0.530322230267922,
     "EL": 0.189600150178337,
     "IE": 0.324281150159744,
     "LV": 0.863636363636364,
     "LT": 0.927551020408163,
     "LU": 0.276119402985075,
     "MT": 0.977064220183486,
     "NL": 0.154498879282741,
     "PL": 0.65650406504065,
     "PT": 0.0452178679090162,
     "CZ": 0.605714285714286,
     "RO": 0.270979020979021,
     "SK": 0.79,
     "SI": 0.198863636363636,
     "ES": 0.106238361266294,
     "SE": 0.613413304252999,
     "HU": 0.455396475770925,
     "UE27": 0.286148693767272
    }
   }
  ],
  "memo": {
   "codice": "Memo",
   "voce": "Permessi di soggiorno validi (Eurostat migr_resvalid, 31.12.2024)",
   "segno": null,
   "fase": null,
   "livello": 2,
   "valori": {
    "IT": 4257673,
    "AT": 596239,
    "BE": 535538,
    "BG": 135041,
    "CY": 200652,
    "HR": 135075,
    "DK": 396091,
    "EE": 187350,
    "FI": 274966,
    "FR": 4419080,
    "DE": 5935591,
    "EL": 713407,
    "IE": 331623,
    "LV": 244320,
    "LT": 158277,
    "LU": 68865,
    "MT": 132067,
    "NL": 831413,
    "PL": 1055532,
    "PT": 1122061,
    "CZ": 486518,
    "RO": 223782,
    "SK": 161007,
    "SI": 228390,
    "ES": 4296727,
    "SE": 429685,
    "HU": 211288,
    "UE27": 27768258
   }
  },
  "note": [
   "Differenze rispetto al tab Italia: A2a usa le acquisizioni cumulate 2015-2024 (Eurostat) al posto dello stock ISTAT; C3 non distingue lungo soggiornanti e permessi a termine (Eurostat migr_reslong da estrarre); B non isola la quota “tipo Romania” (Fase 4): serve migr_pop1ctz per cittadinanza; D (stock irregolari) esiste solo per l’Italia (ISMU).",
   "Danimarca e Malta: Eurostat non pubblica la LFS per cittadinanza (A1b n.d.). Portogallo: popolazione per cittadinanza non pubblicata (A, B, C n.d.). Germania, Francia, Polonia e altri 9: cittadini nati all’estero n.d. (A2 n.d.)."
  ]
 },
 "costi": {
  "titolo": "Costi 2027-2032 · Italia",
  "nota": "Blu = ipotesi modificabili; nero = formule; verde = collegato al Tracker. Importi in euro; totali in milioni.",
  "anni": [
   "2027",
   "2028",
   "2029",
   "2030",
   "2031",
   "2032"
  ],
  "unitari": [
   {
    "voce": "Volontario: trasporto",
    "valore": 560,
    "nota": "Stima UE (biglietto aereo medio)"
   },
   {
    "voce": "Volontario: incentivo di reinserimento",
    "valore": 1500,
    "nota": "UE 630-2.450 € dal 1.6.2026; valore medio"
   },
   {
    "voce": "Volontario: gestione (OIM, colloqui)",
    "valore": 400,
    "nota": "Ipotesi"
   },
   {
    "voce": "Forzato: trasporto e scorta (volo di linea, 2 agenti)",
    "valore": 3400,
    "nota": "Stima UE bassa; Frontex media 2.600 €"
   },
   {
    "voce": "Forzato: charter a persona",
    "valore": 2600,
    "nota": "Frontex 2024: 146,2 M€ / 56.263 rimpatri"
   },
   {
    "voce": "CPR: costo per giorno tutto compreso (gestione + polizia + struttura)",
    "valore": 110,
    "nota": "ActionAid/UniBa: 16.560 € a 148 giorni ≈ 112 €/giorno; gestione sola 37-77 €"
   },
   {
    "voce": "CPR: capex per posto nuovo",
    "valore": 21000,
    "nota": "Porto Empedocle 1 M€ / 50 posti; Gjadër 153.000 €"
   },
   {
    "voce": "Procedura di frontiera: costo aggiuntivo per domanda rispetto all’accoglienza ordinaria",
    "valore": 200,
    "nota": "40 giorni × (40 € CTRA − 35 € CAS); CTRA 37,22 €/giorno Porto Empedocle, 76,57 € Gjadër"
   },
   {
    "voce": "Accoglienza: costo per giorno a persona",
    "valore": 35,
    "nota": "CAS/SAI, dato standard"
   },
   {
    "voce": "Carcere: costo per giorno a detenuto",
    "valore": 140,
    "nota": "Ipotesi da verificare (Antigone ≈ 137 €)"
   },
   {
    "voce": "Allontanamento cittadino UE",
    "valore": 1000,
    "nota": "Ipotesi: volo breve, nessun documento"
   },
   {
    "voce": "Rientro volontario in Ucraina (trasporto + incentivo)",
    "valore": 1000,
    "nota": "Ipotesi"
   },
   {
    "voce": "Fase 3: incentivo al rientro volontario con rinuncia alla cittadinanza",
    "valore": 10000,
    "nota": "Ipotesi: incentivo elevato, una tantum"
   },
   {
    "voce": "Organizzazione: autorità unica e personale (M€/anno)",
    "valore": 50,
    "nota": "Ipotesi: 1.000 FTE × 50.000 €"
   },
   {
    "voce": "Fascicolo digitale: investimento una tantum (M€)",
    "valore": 20,
    "nota": "Ipotesi"
   },
   {
    "voce": "Incentivi ai paesi d’origine (M€/anno)",
    "valore": 100,
    "nota": "Riferimento: MoU UE-Tunisia 105 M€ (2023); Piano Mattei"
   },
   {
    "voce": "Quota dei forzati che viaggia in charter",
    "valore": 0.5,
    "nota": "Ipotesi"
   },
   {
    "voce": "Giorni di accoglienza risparmiati per rimpatrio eseguito di un diniegato",
    "valore": 180,
    "nota": "Ipotesi: rimpatrio 6 mesi prima"
   },
   {
    "voce": "Quota dei rimpatri che riguarda diniegati in accoglienza",
    "valore": 0.5,
    "nota": "Ipotesi"
   },
   {
    "voce": "Giorni di carcere risparmiati per espulsione alternativa/trasferimento",
    "valore": 365,
    "nota": "Ipotesi: residuo pena medio 1 anno"
   }
  ],
  "volumi": [
   {
    "voce": "Rimpatri volontari assistiti",
    "anni": {
     "2027": 2800,
     "2028": 8250,
     "2029": 22400,
     "2030": 42500,
     "2031": 47500,
     "2032": 50000
    },
    "fonte": "Tracker"
   },
   {
    "voce": "Rimpatri forzati",
    "anni": {
     "2027": 11200,
     "2028": 19250,
     "2029": 33600,
     "2030": 42500,
     "2031": 47500,
     "2032": 50000
    },
    "fonte": "Tracker"
   },
   {
    "voce": "Quota forzati dal CPR",
    "anni": {
     "2027": 0.4,
     "2028": 0.35,
     "2029": 0.33,
     "2030": 0.33,
     "2031": 0.33,
     "2032": 0.33
    },
    "fonte": "Tracker"
   },
   {
    "voce": "Giorni medi in CPR",
    "anni": {
     "2027": 120,
     "2028": 90,
     "2029": 75,
     "2030": 60,
     "2031": 60,
     "2032": 60
    },
    "fonte": "Tracker"
   },
   {
    "voce": "Posti CPR necessari",
    "anni": {
     "2027": 1733,
     "2028": 1954,
     "2029": 2680,
     "2030": 2712,
     "2031": 3031,
     "2032": 3191
    },
    "fonte": "Tracker"
   },
   {
    "voce": "Espulsioni di detenuti (artt. 15-16)",
    "anni": {
     "2027": 2000,
     "2028": 4000,
     "2029": 6000,
     "2030": 7000,
     "2031": 8000,
     "2032": 8000
    },
    "fonte": "Tracker"
   },
   {
    "voce": "Detenuti UE trasferiti (DQ 2008/909)",
    "anni": {
     "2027": 500,
     "2028": 1000,
     "2029": 1500,
     "2030": 2000,
     "2031": 2000,
     "2032": 2000
    },
    "fonte": "Tracker"
   },
   {
    "voce": "Domande in procedura di frontiera (paesi < 20%)",
    "anni": {
     "2027": 60000,
     "2028": 60000,
     "2029": 60000,
     "2030": 60000,
     "2031": 60000,
     "2032": 60000
    },
    "fonte": "Quota Tracker × ≈ 60.000 domande da paesi < 20% (ipotesi)"
   },
   {
    "voce": "Allontanamenti di cittadini UE",
    "anni": {
     "2027": 2000,
     "2028": 4000,
     "2029": 5000,
     "2030": 5000,
     "2031": 5000,
     "2032": 5000
    },
    "fonte": "Tracker"
   },
   {
    "voce": "Rientri volontari in Ucraina",
    "anni": {
     "2027": 40000,
     "2028": 80600,
     "2029": 0,
     "2030": 0,
     "2031": 0,
     "2032": 0
    },
    "fonte": "Tracker"
   },
   {
    "voce": "Revoche di cittadinanza e rimpatri Fase 3 (dopo la riforma)",
    "anni": {
     "2027": 0,
     "2028": 0,
     "2029": 0,
     "2030": 500,
     "2031": 2000,
     "2032": 3000
    },
    "fonte": "Tracker"
   },
   {
    "voce": "Rientri volontari incentivati Fase 3",
    "anni": {
     "2027": 1000,
     "2028": 3000,
     "2029": 5000,
     "2030": 8000,
     "2031": 10000,
     "2032": 10000
    },
    "fonte": "Tracker"
   }
  ],
  "per_anno": [
   {
    "voce": "Rimpatri volontari",
    "anni": {
     "2027": 6.888,
     "2028": 20.295,
     "2029": 55.104,
     "2030": 104.55,
     "2031": 116.85,
     "2032": 123
    },
    "totale": 426.687,
    "formula": "volontari × (trasporto + incentivo + gestione)"
   },
   {
    "voce": "Rimpatri forzati: trasporto",
    "anni": {
     "2027": 33.6,
     "2028": 57.75,
     "2029": 100.8,
     "2030": 127.5,
     "2031": 142.5,
     "2032": 150
    },
    "totale": 612.15,
    "formula": "forzati × mix charter / volo di linea"
   },
   {
    "voce": "Rimpatri forzati: trattenimento in CPR",
    "anni": {
     "2027": 59.136,
     "2028": 66.70125,
     "2029": 91.476,
     "2030": 92.565,
     "2031": 103.455,
     "2032": 108.9
    },
    "totale": 522.23325,
    "formula": "forzati dal CPR × giorni × costo/giorno"
   },
   {
    "voce": "CPR: capex posti aggiuntivi",
    "anni": {
     "2027": 17.85,
     "2028": 4.641,
     "2029": 15.246,
     "2030": 0.672,
     "2031": 6.699,
     "2032": 3.36
    },
    "totale": 48.468,
    "formula": "solo i posti oltre il massimo già costruito (883 oggi)"
   },
   {
    "voce": "Procedure di frontiera (CTRA), costo aggiuntivo",
    "anni": {
     "2027": 12,
     "2028": 12,
     "2029": 12,
     "2030": 12,
     "2031": 12,
     "2032": 12
    },
    "totale": 72,
    "formula": "domande × costo aggiuntivo per domanda"
   },
   {
    "voce": "Espulsioni di detenuti (trasporto)",
    "anni": {
     "2027": 6.8,
     "2028": 13.6,
     "2029": 20.4,
     "2030": 23.8,
     "2031": 27.2,
     "2032": 27.2
    },
    "totale": 119,
    "formula": "già inclusi nei forzati? No: detenuti in aggiunta (ipotesi)"
   },
   {
    "voce": "Allontanamenti UE",
    "anni": {
     "2027": 2,
     "2028": 4,
     "2029": 5,
     "2030": 5,
     "2031": 5,
     "2032": 5
    },
    "totale": 26,
    "formula": null
   },
   {
    "voce": "Rientri in Ucraina",
    "anni": {
     "2027": 40,
     "2028": 80.6,
     "2029": 0,
     "2030": 0,
     "2031": 0,
     "2032": 0
    },
    "totale": 120.6,
    "formula": null
   },
   {
    "voce": "Fase 3: rimpatri di condannati e rientri volontari incentivati",
    "anni": {
     "2027": 10,
     "2028": 30,
     "2029": 50,
     "2030": 81.7,
     "2031": 106.8,
     "2032": 110.2
    },
    "totale": 388.7,
    "formula": "rimpatri × trasporto + rientri × incentivo Fase 3"
   },
   {
    "voce": "Organizzazione (autorità unica, personale)",
    "anni": {
     "2027": 50,
     "2028": 50,
     "2029": 50,
     "2030": 50,
     "2031": 50,
     "2032": 50
    },
    "totale": 300,
    "formula": "costo fisso annuo"
   },
   {
    "voce": "Fascicolo digitale (una tantum 2027)",
    "anni": {
     "2027": 20,
     "2028": 0,
     "2029": 0,
     "2030": 0,
     "2031": 0,
     "2032": 0
    },
    "totale": 20,
    "formula": null
   },
   {
    "voce": "Incentivi ai paesi d’origine",
    "anni": {
     "2027": 100,
     "2028": 100,
     "2029": 100,
     "2030": 100,
     "2031": 100,
     "2032": 100
    },
    "totale": 600,
    "formula": "costo fisso annuo"
   },
   {
    "voce": "TOTALE COSTI",
    "anni": {
     "2027": 358.274,
     "2028": 439.58725,
     "2029": 500.026,
     "2030": 597.787,
     "2031": 670.504,
     "2032": 689.66
    },
    "totale": 3255.83825,
    "formula": null
   }
  ],
  "risparmi": [
   {
    "voce": "Accoglienza evitata (diniegati rimpatriati prima)",
    "anni": {
     "2027": 44.1,
     "2028": 86.625,
     "2029": 176.4,
     "2030": 267.75,
     "2031": 299.25,
     "2032": 315
    },
    "totale": 1189.125,
    "formula": "rimpatri × quota in accoglienza × giorni × 35 €"
   },
   {
    "voce": "Carcere evitato (espulsioni alternative e trasferimenti)",
    "anni": {
     "2027": 76.65,
     "2028": 153.3,
     "2029": 229.95,
     "2030": 281.05,
     "2031": 306.6,
     "2032": 306.6
    },
    "totale": 1354.15,
    "formula": "metà delle espulsioni sono alternative alla pena (ipotesi)"
   },
   {
    "voce": "CPR: giorni risparmiati rispetto ai 148 attuali",
    "anni": {
     "2027": 13.7984,
     "2028": 42.98525,
     "2029": 89.03664,
     "2030": 135.762,
     "2031": 151.734,
     "2032": 159.72
    },
    "totale": 593.03629,
    "formula": "stesso volume dal CPR, meno giorni"
   },
   {
    "voce": "TOTALE RISPARMI",
    "anni": {
     "2027": 134.5484,
     "2028": 282.91025,
     "2029": 495.38664,
     "2030": 684.562,
     "2031": 757.584,
     "2032": 781.32
    },
    "totale": 3136.31129,
    "formula": null
   }
  ],
  "netto": [
   {
    "voce": "COSTO NETTO (costi − risparmi)",
    "anni": {
     "2027": 223.7256,
     "2028": 156.677,
     "2029": 4.63935999999995,
     "2030": -86.7749999999999,
     "2031": -87.08,
     "2032": -91.6600000000001
    },
    "totale": 119.52696,
    "formula": null
   },
   {
    "voce": "Costo per rimpatrio eseguito (€, lordo)",
    "anni": {
     "2027": 25591,
     "2028": 15984.9909090909,
     "2029": 8929.03571428571,
     "2030": 7032.78823529412,
     "2031": 7057.93684210526,
     "2032": 6896.6
    },
    "totale": null,
    "formula": null
   },
   {
    "voce": "Costo variabile per rimpatrio (€): trasporto, trattenimento, incentivi",
    "anni": {
     "2027": 7116,
     "2028": 5263.5,
     "2029": 4417.5,
     "2030": 3819,
     "2031": 3819,
     "2032": 3819
    },
    "totale": null,
    "formula": null
   },
   {
    "voce": "Costo per rimpatrio eseguito (€, netto)",
    "anni": {
     "2027": 15980.4,
     "2028": 5697.34545454545,
     "2029": 82.8457142857135,
     "2030": -1020.88235294117,
     "2031": -916.631578947369,
     "2032": -916.600000000001
    },
    "totale": null,
    "formula": null
   }
  ],
  "riferimenti": [
   {
    "voce": "Sistema CPR e CTRA, spesa 2024 (M€)",
    "valore": 96,
    "nota": "ActionAid/UniBa: quasi 96 M€, più dei sei anni precedenti insieme"
   },
   {
    "voce": "Centri in Albania: contratti di costruzione (M€)",
    "valore": 74.2,
    "nota": "ActionAid/UniBa; 153.000 € a posto"
   },
   {
    "voce": "Centri in Albania: preventivo 5 anni (M€)",
    "valore": 650,
    "nota": "Governo 2024; stime fino a 1 mld"
   },
   {
    "voce": "Sistema di accoglienza, spesa al giorno 2022 (M€)",
    "valore": 4,
    "nota": "Ministero dell’Interno: “oltre 4 milioni al giorno”"
   },
   {
    "voce": "Rimpatrio da CPR, costo medio 2025 (€)",
    "valore": 16560,
    "nota": "ActionAid/UniBa, 148 giorni"
   },
   {
    "voce": "Frontex, costo medio per rimpatrio 2024 (€)",
    "valore": 2600,
    "nota": "146,2 M€ / 56.263"
   }
  ]
 },
 "testi": {
  "intestazione": [
   "Europa 2032 · Documento di policy · 20 ottobre 2026",
   "The Great Remigration Plan (“GRP”)"
  ],
  "preambolo": [
   "Questo documento è scritto per Futuro Nazionale. Nasce dentro Europa 2032, l’osservatorio che segue l’ascesa della destra nazionale in trenta paesi europei: governi, sondaggi, peso nel Consiglio, dossier legislativi. La tesi dell’osservatorio è dichiarata: l’Europa va letta a partire dall’aspettativa che la destra arrivi al governo nei principali Stati membri entro il 2032. The Great Remigration Plan (“GRP”) è la parte esecutiva di quella tesi applicata al tema che il programma di Futuro Nazionale mette al centro, la remigrazione: non cosa si vorrebbe fare, ma cosa si può fare, con quali numeri, a quale costo e con quale legge.",
   "Il punto di partenza è un dato: nel 2025 l’Unione ha emesso 486.705 ordini di lasciare il territorio e ne ha eseguiti 139.270, il 28,6%. L’Italia è al 22,4%. Il piano divide le persone presenti in Italia in cinque gruppi, secondo il livello di cambiamento normativo necessario per remigrarle, e per ciascuno dice quanti sono, cosa si può fare oggi e cosa serve per andare oltre. Le 22 misure del capitolo “Assimilazione e Remigrazione” del programma di Futuro Nazionale sono mappate su questi cinque gruppi.",
   "La Fase 1 si può attuare subito, con una maggioranza italiana e nessun permesso da chiedere. Riguarda i 339 mila irregolari e i detenuti stranieri: la legge italiana li rende già espellibili, e dal 2026 il Patto europeo e il regolamento sui rimpatri danno strumenti in più (procedura di frontiera, atto unico, trattenimento fino a 24 mesi). Quello che manca è esecuzione: identificazione, un canale volontario che oggi non esiste, accordi con i paesi d’origine, un’autorità unica. L’obiettivo è il 100% di esecuzione degli ordini entro il 2032, con 100 mila rimpatri l’anno a regime contro i 4.780 di oggi, e il modello di costo lo quantifica. È il capitolo che un governo di Futuro Nazionale può aprire il primo giorno.",
   "Le Fasi 2, 3 e 4 hanno bisogno di una volontà europea che oggi non c’è e che, nello scenario dell’osservatorio, si forma nei prossimi anni. L’ipotesi di base del piano è che entro pochi anni le norme europee vengano cambiate in senso favorevole alla sua esecuzione, senza grandi ostacoli: il piano è quindi scritto come se quelle norme fossero già cambiate, e considera un obiettivo difficile solo quando sono terzi, cioè i paesi d’origine, a non cooperare. La Fase 2 (3,65 milioni di regolari extra-UE) si muove con leggi ordinarie, ma la leva decisiva, la riammissione da parte di Marocco, Algeria, Pakistan e Bangladesh, è nelle mani dell’Unione: visti, commercio, aiuti. La Fase 3 (3,25 milioni di cittadini italiani di origine straniera) richiede una riforma costituzionale e una revisione del Protocollo 4 della CEDU, che nessuno Stato può ottenere da solo. La Fase 4 (Romania e protezione temporanea) dipende dai trattati e dalle direttive.",
   "Gli alleati di cui abbiamo bisogno sono tre. La Francia del Rassemblement National di Marine Le Pen e Jordan Bardella, perché è il paese dove i numeri pesano di più: 137.550 ordini nel 2025, più di uno su quattro in Europa, eseguiti al 10,9%; portare la Francia al 50% sposterebbe da solo il tasso europeo di undici punti, e la Francia è il paese che più ha bisogno del GRP. La Germania dell’AfD, perché esegue già il 53% e ha la capacità amministrativa che gli altri non hanno: con 55.240 ordini e 29.295 rimpatri è il modello operativo della Fase 1, e un governo con l’AfD è l’unico che può aprire il tema della cittadinanza su scala europea. L’Austria della FPÖ, perché è già oltre il 60% ed è il laboratorio politico più avanzato sul tema. Nello scenario 2032 dell’osservatorio, i governi di destra nazionale emetterebbero il 51,2% degli ordini europei: una maggioranza numerica, non ancora una maggioranza nel Consiglio. Il lavoro politico dei prossimi anni è trasformare la prima nella seconda.",
   "Da qui la struttura del documento. Prima l’Italia, perché è il caso che si può misurare fino in fondo e perché la Fase 1 non aspetta nessuno. Poi lo stesso funnel applicato ai 27 Stati, con le stesse categorie e le stesse fasi, per dire a ciascun alleato quanto vale il suo pezzo. Ogni numero è collegato a un file di lavoro aperto; ogni ipotesi è segnata come tale, perché il piano possa essere discusso misura per misura."
  ],
  "sintesi": {
   "intro": [
    "Il piano divide le persone presenti in Italia in cinque gruppi, secondo quello che la legge permette oggi di fare. Per ogni gruppo dice quanti sono, qual è il loro stato giuridico, cosa si può fare subito e quale cambio di legge serve per andare oltre. Un tracker 2027-2032 fissa un obiettivo per anno. Numeri in migliaia (k)."
   ],
   "tabella": [
    [
     "Fase",
     "Chi",
     "Persone",
     "Cosa serve per remigrarli"
    ],
    [
     "Fase 1",
     "Irregolari (e detenuti stranieri)",
     "339k",
     "Nulla: la legge attuale basta. Manca l’esecuzione"
    ],
    [
     "Fase 2",
     "Regolari extra-UE: lungo soggiornanti, permessi a termine, asilo",
     "3.650k",
     "Entrano quando perdono il titolo. Legge ordinaria e accordi di riammissione"
    ],
    [
     "Fase 3",
     "Cittadini italiani di origine straniera: seconda generazione, naturalizzati",
     "3.246k",
     "Riforma costituzionale (artt. 3 e 22) e revisione del Protocollo 4 CEDU"
    ],
    [
     "Fase 4",
     "Romania e protezione temporanea (Ucraina)",
     "1.214k",
     "Diritto dell’Unione: libera circolazione e direttiva 2001/55"
    ],
    [
     "FUORI",
     "Italiani da genitori italiani, italiani nati all’estero, altri cittadini UE",
     "50.647k",
     "Nessuna remigrazione"
    ]
   ],
   "paragrafi": [
    "Il perimetro operativo. Su 59,3 milioni di presenti, 339 mila sono irregolari (Fase 1). Nel 2025 ne sono stati trovati 82,5 mila, 21,3 mila hanno ricevuto un ordine di lasciare l’Italia, 4,8 mila sono stati rimpatriati: il 22,4%.",
    "Obiettivo Fase 1: 100% nel 2032. Ogni irregolare trovato riceve un ordine e ogni ordine viene eseguito: da 21 mila a 100 mila ordini l’anno, tasso di esecuzione dal 22,4% al 100%, 100 mila rimpatri l’anno a regime, metà volontari. Lo stock di irregolari scende da 339 mila a 262 mila nel 2032 nonostante 50 mila nuovi irregolari l’anno. Servono circa 3.200 posti CPR a 60 giorni medi.",
    "La Fase 2 è il bacino che si muove. 3,65 milioni di extra-UE regolari entrano nel perimetro quando perdono il titolo: mancato rinnovo, diniego d’asilo, condanna, revoca. Obiettivo: ogni diniego produce un rimpatrio, ogni permesso scaduto produce un ordine, ogni condannato lungo soggiornante viene espulso.",
    "La Fase 3 si apre con la riforma. 3,25 milioni di cittadini di origine straniera. Nel 2027 la legge sulla revoca della cittadinanza per reati gravi; nel 2027-2029 la riforma costituzionale con referendum; dal 2030 l’allontanamento dei condannati; dal 2027 un programma di rientro volontario incentivato con rinuncia alla cittadinanza, fino a 10 mila l’anno. Le acquisizioni scendono da 217 mila a 30 mila l’anno.",
    "Cosa costa. Da 360 a 690 milioni l’anno lordi, 3,3 miliardi in sei anni, contro i 96 milioni spesi nel 2024 per il solo trattenimento; costo variabile per rimpatrio da 7,1 mila a 3,8 mila euro. I risparmi su accoglienza e carcere coprono il costo dal 2029, con ipotesi dichiarate.",
    "Come si fa. Sette modalità (volontario assistito, volo di linea scortato, charter nazionale e Frontex, CPR, trasferimento della pena, allontanamento UE), una catena in otto passaggi con un indicatore ciascuno, undici paesi d’origine con una leva ciascuno, otto soluzioni alternative quando un paese non riammette.",
    "Garanzie. Nessun rimpatrio verso tortura; ogni decisione individuale e impugnabile; minori mai espulsi; monitoraggio indipendente."
   ]
  },
  "paragrafi": {
   "1. Il metodo: funnel e fasi": [
    {
     "tipo": "p",
     "testo": "Il funnel parte dalla popolazione residente e la scompone in un albero additivo: ogni voce è la somma delle voci sotto; le voci “residuo” sono calcolate per differenza. A ogni voce finale è assegnata una fase, cioè il livello di cambiamento normativo necessario per remigrarla."
    }
   ],
   "1.1 Le cinque fasi": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Fase",
       "Definizione",
       "Strumento normativo"
      ],
      [
       "Fase 1",
       "Chi non ha titolo di soggiorno",
       "Nessun cambio di legge: TU immigrazione artt. 13-16, regolamento UE rimpatri"
      ],
      [
       "Fase 2",
       "Chi ha un titolo a termine o revocabile",
       "Legge ordinaria (requisiti, rinnovi, reati ostativi) e accordi di riammissione"
      ],
      [
       "Fase 3",
       "Chi è cittadino italiano di origine straniera",
       "Riforma costituzionale e revisione dei vincoli CEDU, con gli alleati"
      ],
      [
       "Fase 4",
       "Cittadini UE (Romania) e protezione temporanea",
       "Diritto dell’Unione: trattati, direttiva 2004/38, direttiva 2001/55"
      ],
      [
       "FUORI",
       "Tutti gli altri",
       "Nessuna remigrazione"
      ]
     ]
    }
   ],
   "1.2 Il funnel dell’Italia": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Codice",
       "Categoria",
       "Persone",
       "% tot.",
       "Fase"
      ],
      [
       "",
       "PRESENTI IN ITALIA (residenti + irregolari stimati)",
       "59.282k",
       "100%",
       ""
      ],
      [
       "A",
       "Cittadini italiani",
       "53.572k",
       "90,4%",
       ""
      ],
      [
       "A1",
       "Nati in Italia",
       "51.213k",
       "86,4%",
       ""
      ],
      [
       "A1a",
       "da genitori nati in Italia (residuo)",
       "50.057k",
       "84,4%",
       "FUORI"
      ],
      [
       "A1b",
       "seconda generazione: almeno un genitore nato all’estero",
       "1.156k",
       "2,0%",
       "Fase 3"
      ],
      [
       "A2",
       "Nati all’estero",
       "2.359k",
       "4,0%",
       ""
      ],
      [
       "A2a",
       "italiani per acquisizione della cittadinanza",
       "2.090k",
       "3,5%",
       "Fase 3"
      ],
      [
       "A2b",
       "italiani dalla nascita nati all’estero (residuo)",
       "269k",
       "0,5%",
       "FUORI"
      ],
      [
       "B",
       "Cittadini di altri Stati UE",
       "1.374k",
       "2,3%",
       ""
      ],
      [
       "B1",
       "Romania",
       "1.053k",
       "1,8%",
       "Fase 4"
      ],
      [
       "B2",
       "altri Stati UE (residuo)",
       "321k",
       "0,5%",
       "FUORI"
      ],
      [
       "C",
       "Cittadini extra-UE residenti",
       "3.997k",
       "6,7%",
       ""
      ],
      [
       "C1",
       "con permesso di soggiorno valido",
       "3.811k",
       "6,4%",
       ""
      ],
      [
       "C1a",
       "lungo soggiornanti (permesso UE senza scadenza)",
       "2.012k",
       "3,4%",
       "Fase 2"
      ],
      [
       "C1b",
       "permessi a termine",
       "1.799k",
       "3,0%",
       ""
      ],
      [
       "C1b.1",
       "asilo e protezione",
       "484k",
       "0,8%",
       ""
      ],
      [
       "C1b.1a",
       "protezione temporanea (Ucraina)",
       "161k",
       "0,3%",
       "Fase 4"
      ],
      [
       "C1b.1b",
       "richiesta asilo in attesa di decisione",
       "151k",
       "0,3%",
       "Fase 2"
      ],
      [
       "C1b.1c",
       "status di rifugiato",
       "59,7k",
       "0,1%",
       "Fase 2"
      ],
      [
       "C1b.1d",
       "protezione sussidiaria",
       "54,8k",
       "0,1%",
       "Fase 2"
      ],
      [
       "C1b.1e",
       "protezione speciale e altre (residuo)",
       "57,6k",
       "0,1%",
       "Fase 2"
      ],
      [
       "C1b.2",
       "lavoro, famiglia, studio, altri motivi (residuo)",
       "1.315k",
       "2,2%",
       "Fase 2"
      ],
      [
       "C2",
       "scarto tra residenti anagrafici e titoli validi (residuo)",
       "186k",
       "0,3%",
       ""
      ],
      [
       "D",
       "Irregolari presenti, non residenti (stima)",
       "339k",
       "0,6%",
       "Fase 1"
      ]
     ]
    },
    {
     "tipo": "p",
     "testo": "A1b, A2a, C1a e D sono stime; C2 è una differenza di fonte, non una categoria di persone."
    }
   ],
   "1.3 Flussi 2025 nel perimetro operativo": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Codice",
       "Passaggio",
       "Persone",
       "% ordini"
      ],
      [
       "F1",
       "Trovati in posizione irregolare",
       "82,5k",
       "387,4%"
      ],
      [
       "F2",
       "Ordini di lasciare il territorio",
       "21,3k",
       "100%"
      ],
      [
       "F3",
       "Rimpatri verso paesi terzi eseguiti",
       "4.780",
       "22,4%"
      ],
      [
       "F3a",
       "di cui dopo trattenimento in CPR",
       "1.732",
       "8,1%"
      ],
      [
       "F3b",
       "di cui senza CPR (residuo)",
       "3.048",
       "14,3%"
      ],
      [
       "F4",
       "Rimpatri volontari assistiti (RVA)",
       "717",
       "3,4%"
      ]
     ]
    },
    {
     "tipo": "p",
     "testo": "Due categorie trasversali tagliano il funnel e non si sommano: 870 mila stranieri nati in Italia senza cittadinanza (in gran parte minori, Fase 2) e 19,8 mila detenuti stranieri (Fase 1)."
    }
   ],
   "2. Fase 1 · Irregolari e condannati": [
    {
     "tipo": "p",
     "testo": "Rimpatriabili con la legge attuale. Il problema è l’esecuzione, non la norma."
    }
   ],
   "Chi sono e quanti sono": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Codice",
       "Voce",
       "Persone",
       "Fase"
      ],
      [
       "TOT",
       "Fuori perimetro",
       "50.647k",
       "FUORI"
      ],
      [
       "A",
       "Italiani nati in Italia da genitori nati in Italia",
       "50.057k",
       "FUORI"
      ],
      [
       "B",
       "Italiani dalla nascita nati all’estero (figli di emigrati, iure sanguinis)",
       "269k",
       "FUORI"
      ],
      [
       "C",
       "Cittadini di altri Stati UE (esclusa Romania)",
       "321k",
       "FUORI"
      ]
     ]
    }
   ],
   "Stato giuridico, cosa si può fare, cambio di legge": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Voce",
       "Stato giuridico oggi",
       "Cosa si può fare oggi",
       "Cambio di legge per remigrare"
      ],
      [
       "Italiani nati in Italia da genitori nati in Italia",
       "Cittadini",
       "",
       ""
      ],
      [
       "Italiani dalla nascita nati all’estero (figli di emigrati, iure sanguinis)",
       "Cittadini",
       "",
       ""
      ],
      [
       "Cittadini di altri Stati UE (esclusa Romania)",
       "Libera circolazione",
       "Allontanamento individuale per ordine pubblico (art. 20): vedi Fase 1 per i detenuti",
       "Trattati UE"
      ]
     ]
    }
   ],
   "3. Fase 2 · Regolari extra-UE": [
    {
     "tipo": "p",
     "testo": "Entrano nel perimetro quando perdono il titolo. Leve: legge ordinaria e accordi di riammissione."
    }
   ],
   "Flussi": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Codice",
       "Voce",
       "Persone",
       "Fase",
       "Cosa si può fare oggi"
      ],
      [
       "F",
       "Acquisizioni nell’anno",
       "217k",
       "Fase 3",
       ""
      ],
      [
       "F1",
       "per residenza (10 anni)",
       "85,0k",
       "Fase 3",
       "Irrigidire requisiti (reddito, lingua B1, reati)"
      ],
      [
       "F2",
       "minori per trasmissione dai genitori",
       "63,0k",
       "Fase 3",
       ""
      ],
      [
       "F3",
       "iure sanguinis (avo italiano)",
       "22,0k",
       "Fase 3",
       "Già ristretto (D.L. 36/2025)"
      ],
      [
       "F4",
       "per matrimonio",
       "19,0k",
       "Fase 3",
       "Allungare i termini"
      ],
      [
       "F5",
       "per elezione a 18 anni",
       "11,0k",
       "Fase 3",
       ""
      ],
      [
       "F6",
       "altre modalità (residuo)",
       "17,4k",
       "Fase 3",
       ""
      ]
     ]
    },
    {
     "tipo": "p",
     "testo": "Prime origini 2024: Albania ≈ 32.000 · Marocco ≈ 28.000 · Argentina 13.559 · India 12.258 · Brasile 11.058"
    }
   ],
   "4. Fase 3 · Cittadini italiani di origine straniera": [
    {
     "tipo": "p",
     "testo": "Oggi non esiste alcuno strumento. Serve una riforma costituzionale e l’uscita da vincoli CEDU."
    }
   ],
   "5. Fase 4 · Cittadini UE (Romania) e protezione temporanea": [
    {
     "tipo": "p",
     "testo": "Dipende dal diritto dell’Unione, non dalla legge italiana."
    }
   ],
   "6. FUORI · Nessuna remigrazione": [
    {
     "tipo": "p",
     "testo": "Riportato per completezza: queste righe chiudono la somma del Funnel."
    }
   ],
   "7. Tracker 2027-2032": [
    {
     "tipo": "p",
     "testo": "Un indicatore per riga, un obiettivo per anno. Ipotesi di base: entro pochi anni le norme europee e nazionali vengono cambiate in senso favorevole all’esecuzione del piano. I valori numerici sono obiettivi da discutere; i testi sono tappe di legge. Numeri in migliaia (k) sopra i 10 mila."
    }
   ],
   "Fase 1 · Irregolari e condannati (legge attuale)": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Categoria",
       "Indicatore",
       "Base 2025",
       "2027",
       "2028",
       "2029",
       "2030",
       "2031",
       "2032",
       "Cambio di legge richiesto"
      ],
      [
       "Irregolari",
       "Tasso di esecuzione degli ordini",
       "22%",
       "40%",
       "55%",
       "70%",
       "85%",
       "95%",
       "100%",
       "Nessuno"
      ],
      [
       "Irregolari",
       "Ordini di lasciare il territorio (ogni irregolare trovato riceve un ordine)",
       "21,3k",
       "35,0k",
       "50,0k",
       "80,0k",
       "100k",
       "100k",
       "100k",
       "Nessuno"
      ],
      [
       "Irregolari",
       "Rimpatri eseguiti",
       "4.780",
       "14,0k",
       "27,5k",
       "56,0k",
       "85,0k",
       "95,0k",
       "100k",
       "Nessuno"
      ],
      [
       "Irregolari",
       "Quota volontari sui rimpatri",
       "15%",
       "20%",
       "30%",
       "40%",
       "50%",
       "50%",
       "50%",
       "Nessuno"
      ],
      [
       "Irregolari",
       "di cui volontari (RVA)",
       "717",
       "2.800",
       "8.250",
       "22,4k",
       "42,5k",
       "47,5k",
       "50,0k",
       "Nessuno: fondi e convenzione OIM"
      ],
      [
       "Irregolari",
       "di cui forzati",
       "4.063",
       "11,2k",
       "19,2k",
       "33,6k",
       "42,5k",
       "47,5k",
       "50,0k",
       "Nessuno"
      ],
      [
       "Irregolari",
       "Quota forzati che passa dal CPR",
       "43%",
       "40%",
       "35%",
       "33%",
       "33%",
       "33%",
       "33%",
       "Nessuno"
      ],
      [
       "Irregolari",
       "Giorni medi in CPR per rimpatrio",
       "148",
       "120",
       "90",
       "75",
       "60",
       "60",
       "60",
       "Nessuno: identificazione prima del trattenimento"
      ],
      [
       "Irregolari",
       "Posti CPR necessari (occupazione 85%)",
       "833",
       "1.733",
       "1.954",
       "2.680",
       "2.712",
       "3.031",
       "3.191",
       "Nessuno"
      ],
      [
       "Irregolari",
       "Paesi con riammissione operativa (oggi: Albania, Georgia, Tunisia, Egitto)",
       "4",
       "+ Marocco, Bangladesh",
       "+ Pakistan, Nigeria",
       "+ Algeria",
       "8",
       "8",
       "8",
       "Nessuno: leva visti (Codice visti art. 25a), commercio, aiuti"
      ],
      [
       "Irregolari",
       "Stock di irregolari a fine anno (stima: 339k + 50k nuovi l’anno - rimpatri)",
       "339k",
       "375k",
       "398k",
       "392k",
       "356k",
       "312k",
       "262k",
       "Nessuno"
      ],
      [
       "Irregolari",
       "Tempo rilevamento → decisione (giorni)",
       "n.d.",
       "7",
       "1",
       "1",
       "1",
       "1",
       "1",
       "Nessuno: fascicolo digitale unico"
      ],
      [
       "Condannati",
       "Detenuti extra-UE identificati con lasciapassare richiesto entro 6 mesi",
       "n.d.",
       "50%",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "Nessuno: protocollo DAP-Questure"
      ],
      [
       "Condannati",
       "Espulsioni ex artt. 15-16 TU eseguite al fine pena o in alternativa alla pena",
       "825",
       "2.000",
       "4.000",
       "6.000",
       "7.000",
       "8.000",
       "8.000",
       "Nessuno (ultimo dato pubblico: 2018)"
      ],
      [
       "Condannati",
       "Detenuti UE trasferiti a scontare la pena in patria (DQ 2008/909)",
       "n.d.",
       "500",
       "1.000",
       "1.500",
       "2.000",
       "2.000",
       "2.000",
       "Nessuno: accordo operativo con Bucarest"
      ]
     ]
    }
   ],
   "Fase 2 · Regolari extra-UE (legge ordinaria e accordi)": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Categoria",
       "Indicatore",
       "Base 2025",
       "2027",
       "2028",
       "2029",
       "2030",
       "2031",
       "2032",
       "Cambio di legge richiesto"
      ],
      [
       "Richiedenti asilo",
       "Quota domande da paesi < 20% in procedura di frontiera",
       "n.d.",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "Nessuno: Patto UE in vigore dal 12.6.2026"
      ],
      [
       "Richiedenti asilo",
       "Giorni tra diniego definitivo e ordine di rimpatrio",
       "n.d.",
       "0",
       "0",
       "0",
       "0",
       "0",
       "0",
       "Nessuno: atto unico (reg. rimpatri)"
      ],
      [
       "Richiedenti asilo",
       "Quota dinieghi definitivi che producono un rimpatrio eseguito",
       "10%",
       "30%",
       "60%",
       "80%",
       "100%",
       "100%",
       "100%",
       "Nessuno"
      ],
      [
       "Lungo soggiornanti",
       "Condannati per reati artt. 380-381 c.p.p. revocati ed espulsi",
       "n.d.",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "Nessuno (art. 9 c. 4 e 10 TU già in vigore)"
      ],
      [
       "Lungo soggiornanti",
       "Controllo annuale assenze > 12 mesi via EES/SIS",
       "no",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "Nessuno: procedura"
      ],
      [
       "Lungo soggiornanti",
       "Revoche di status l’anno (condanne, assenze, frode)",
       "n.d.",
       "2.000",
       "4.000",
       "5.000",
       "5.000",
       "5.000",
       "5.000",
       "Nessuno"
      ],
      [
       "Permessi a termine",
       "Mancati rinnovi tracciati per motivo e nazionalità",
       "no",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "Nessuno: statistica Viminale"
      ],
      [
       "Permessi a termine",
       "Attesa occupazione dopo perdita del lavoro (mesi)",
       "12",
       "6",
       "3",
       "3",
       "3",
       "3",
       "3",
       "Legge ordinaria: TU art. 22 c. 11 (2027)"
      ],
      [
       "Permessi a termine",
       "Stagionali verificati in uscita (EES)",
       "n.d.",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "Nessuno"
      ],
      [
       "Permessi a termine",
       "Quota permessi scaduti non rinnovati che diventano ordine",
       "n.d.",
       "50%",
       "80%",
       "100%",
       "100%",
       "100%",
       "100%",
       "Nessuno"
      ],
      [
       "Protezione sussidiaria e speciale",
       "Riesame sistematico alla scadenza (cessazione art. 15; non rinnovo art. 19)",
       "n.d.",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "100%",
       "Nessuno; restringere art. 19 c. 1.1: legge ordinaria"
      ],
      [
       "Rifugiati",
       "Revoca dello status per reati gravi e cessazione per paesi tornati sicuri",
       "n.d.",
       "500",
       "1.000",
       "2.000",
       "3.000",
       "3.000",
       "3.000",
       "Revisione a livello UE della direttiva qualifiche (2003/109 e 2011/95)"
      ],
      [
       "Stranieri nati in Italia",
       "Elezione automatica di cittadinanza a 18 anni",
       "sì",
       "abrogata",
       "no",
       "no",
       "no",
       "no",
       "no",
       "Legge ordinaria: art. 4 c. 2 L. 91/92"
      ]
     ]
    }
   ],
   "Fase 3 · Cittadini di origine straniera (riforma costituzionale)": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Categoria",
       "Indicatore",
       "Base 2025",
       "2027",
       "2028",
       "2029",
       "2030",
       "2031",
       "2032",
       "Cambio di legge richiesto"
      ],
      [
       "Naturalizzati",
       "Acquisizioni di cittadinanza l’anno",
       "217k",
       "120k",
       "60,0k",
       "40,0k",
       "30,0k",
       "30,0k",
       "30,0k",
       "Legge ordinaria: L. 91/92 artt. 5, 9, 14 (requisiti, anni, lingua, reati)"
      ],
      [
       "Naturalizzati",
       "Revoca per reati gravi entro 10 anni dall’acquisizione",
       "no",
       "legge approvata",
       "in vigore",
       "in vigore",
       "in vigore",
       "in vigore",
       "in vigore",
       "Legge ordinaria + probabile vaglio Corte cost. (art. 3)"
      ],
      [
       "Naturalizzati",
       "Revoche di cittadinanza l’anno (oggi art. 10-bis: solo terrorismo)",
       "n.d.",
       "100",
       "1.000",
       "2.000",
       "3.000",
       "3.000",
       "3.000",
       "Dipende dalla riga sopra"
      ],
      [
       "Seconda generazione",
       "Riforma costituzionale artt. 3 e 22 (cittadini di origine straniera allontanabili)",
       "no",
       "1ª lettura",
       "2ª lettura",
       "referendum",
       "in vigore",
       "in vigore",
       "in vigore",
       "Riforma costituzionale (Cost. art. 138); revisione Prot. 4 CEDU con gli alleati"
      ],
      [
       "Seconda generazione",
       "Rimpatri di cittadini di origine straniera condannati per reati gravi",
       "0",
       "0",
       "0",
       "0",
       "500",
       "2.000",
       "3.000",
       "Dopo la riforma: solo condannati, poi estensione"
      ],
      [
       "Seconda generazione",
       "Rientri volontari incentivati (programma di remigrazione volontaria)",
       "n.d.",
       "1.000",
       "3.000",
       "5.000",
       "8.000",
       "10,0k",
       "10,0k",
       "Nessuno: programma con incentivo e rinuncia alla cittadinanza (art. 14 L. 91/92)"
      ]
     ]
    }
   ],
   "Fase 4 · Romania e protezione temporanea (diritto UE)": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Categoria",
       "Indicatore",
       "Base 2025",
       "2027",
       "2028",
       "2029",
       "2030",
       "2031",
       "2032",
       "Cambio di legge richiesto"
      ],
      [
       "Romania",
       "Allontanamenti ex art. 20-21 D.Lgs. 30/2007 eseguiti",
       "n.d.",
       "2.000",
       "4.000",
       "5.000",
       "5.000",
       "5.000",
       "5.000",
       "Nessuno: strumenti esistenti"
      ],
      [
       "Romania",
       "Modifica dir. 2004/38: allontanamento per assenza di lavoro oltre 12 mesi",
       "no",
       "proposta",
       "approvata",
       "in vigore",
       "in vigore",
       "in vigore",
       "in vigore",
       "Consiglio UE con gli alleati (FR, DE, AT)"
      ],
      [
       "Protezione temporanea",
       "Beneficiari a fine anno",
       "161k",
       "101k",
       "0",
       "0",
       "0",
       "0",
       "0",
       "Nessuno: scadenza UE 4.3.2028"
      ],
      [
       "Protezione temporanea",
       "convertiti in permesso ordinario (→ Fase 2)",
       "n.d.",
       "20,0k",
       "20,0k",
       "0",
       "0",
       "0",
       "0",
       "Nessuno: decreto di transizione"
      ],
      [
       "Protezione temporanea",
       "rientri volontari assistiti in Ucraina",
       "n.d.",
       "40,0k",
       "80,6k",
       "0",
       "0",
       "0",
       "0",
       "Nessuno: programma UE-Ucraina"
      ]
     ]
    }
   ],
   "8. Come si esegue: modalità e fattibilità": [
    {
     "tipo": "p",
     "testo": "La remigrazione non è un atto unico ma sette modalità diverse, ciascuna con un costo, un tempo e un vincolo. La catena operativa della Fase 1 ha otto passaggi, con un indicatore e un obiettivo ciascuno. Le altre fasi si attivano quando un evento (diniego, scadenza, condanna, riforma) apre il perimetro. Quando un paese d’origine non riammette, il piano prevede otto soluzioni alternative in ordine di applicazione. La scorecard finale misura la fattibilità di ogni categoria e indica l’alternativa quando la cooperazione manca."
    }
   ],
   "Le sette modalità": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Modalità",
       "A chi si applica",
       "Passaggi operativi",
       "Attori",
       "Costo unitario",
       "Tempo medio",
       "Capacità oggi → 2032",
       "Fattibilità"
      ],
      [
       "1. Rimpatrio volontario assistito (RVA)",
       "Fase 1 con ordine; Fase 2 dopo diniego o mancato rinnovo; Fase 4 Ucraina",
       "Colloquio in questura o CAS → adesione entro 7 gg → documento di viaggio → volo di linea → incentivo erogato nel paese d’origine in 2 tranche",
       "Questura, OIM, Frontex (biglietti), paese d’origine",
       "560 € trasporto + 630-2.450 € incentivo UE + ≈ 400 € gestione",
       "30-60 giorni",
       "≈ 300 l’anno → 6.400",
       "Alta"
      ],
      [
       "2. Accompagnamento su volo di linea",
       "Fase 1 identificati con documento; condannati a fine pena",
       "Ordine con accompagnamento → 2 agenti di scorta → consegna alle autorità del paese",
       "Questura, Polizia di frontiera, Frontex",
       "≈ 3.400 €",
       "7-30 giorni",
       "≈ 3.000 l’anno → 4.000",
       "Alta"
      ],
      [
       "3. Charter nazionale",
       "Fase 1 verso Tunisia, Egitto, Albania, Georgia, Nigeria",
       "Lista passeggeri concordata con il consolato → convalida → volo da Palermo, Roma, Milano",
       "Viminale, consolati, vettore",
       "≈ 2.600 € a persona (media Frontex)",
       "Settimanale",
       "Tunisia 28 charter (2025), tetto 80/settimana → 100 charter l’anno",
       "Media"
      ],
      [
       "4. Charter Frontex congiunto",
       "Fase 1 verso paesi con pochi casi per Stato",
       "Adesione a volo organizzato da altro Stato → scorta Frontex",
       "Frontex, Questure",
       "≈ 2.600 €, cofinanziato UE",
       "Mensile",
       "Centinaia l’anno → 1.500",
       "Alta"
      ],
      [
       "5. Trattenimento in CPR o Gjadër → rimpatrio",
       "Fase 1 senza documenti o a rischio fuga",
       "Convalida giudice di pace entro 48 h → identificazione consolare → lasciapassare → volo",
       "Questura, giudice di pace, consolati, ente gestore",
       "110 €/giorno × giorni + trasporto (oggi 16.560 € a 148 gg)",
       "148 giorni → 60",
       "1.732 l’anno → ≈ 2.100 (1 forzato su 3)",
       "Media"
      ],
      [
       "6. Trasferimento dell’esecuzione della pena",
       "Condannati UE (Romania) ed extra-UE con accordo (Albania, Marocco, Tunisia)",
       "Istanza del PM o del detenuto → consenso dello Stato → traduzione",
       "Ministero Giustizia, DAP, Stato ricevente",
       "Risparmio: ≈ 140 €/giorno di carcere (ipotesi)",
       "6-12 mesi",
       "Decine l’anno → 900 (UE) + 300 (extra-UE)",
       "Media"
      ],
      [
       "7. Allontanamento di cittadino UE",
       "Fase 4 Romania e altri UE, solo condannati o senza risorse",
       "Decreto del prefetto → ricorso TAR → esecuzione con accompagnamento → divieto reingresso SIS",
       "Prefettura, TAR, Polizia",
       "≈ 1.000 € (volo breve, nessun documento da ottenere)",
       "30-90 giorni",
       "n.d. → 1.000",
       "Media"
      ]
     ]
    }
   ],
   "La catena operativa della Fase 1": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Passaggio",
       "Cosa succede oggi",
       "Cosa cambia con il GRP",
       "Attore",
       "Indicatore",
       "Obiettivo 2032",
       "Collo di bottiglia",
       "Fattibilità"
      ],
      [
       "1. Rilevamento",
       "82.505 trovati; 1 ordine ogni 3,9 rilevamenti; molti “invitati” senza fascicolo",
       "Fascicolo digitale unico per persona (Eurodac + SIS + EES) aperto entro 24 h",
       "Polizie, Questure",
       "Quota rilevamenti con fascicolo entro 24 h",
       "100%",
       "Sistemi non integrati tra Questure",
       "Alta"
      ],
      [
       "2. Decisione",
       "Ordine del prefetto; diniego asilo e ordine in atti separati",
       "Atto unico diniego + ordine (reg. UE rimpatri); ordine europeo valido in tutta l’UE",
       "Prefetto, Commissioni territoriali",
       "Giorni diniego → ordine",
       "0",
       "Contenzioso: ricorso con sospensiva",
       "Alta"
      ],
      [
       "3. Offerta volontaria",
       "Quasi assente (717 RVA in 31 mesi)",
       "Colloquio obbligatorio entro 7 gg; incentivo UE; partner OIM; informazione nei CAS",
       "Questura, OIM",
       "Quota ordini con offerta entro 7 gg",
       "100%",
       "Fondi e personale",
       "Alta"
      ],
      [
       "4. Identificazione e documenti",
       "Collo di bottiglia: Marocco, Algeria, Pakistan, Bangladesh non rispondono; 148 gg in CPR",
       "Identificazione in carcere e in CAS prima dell’ordine; accordi con lasciapassare in 15 gg; leva visti art. 25a",
       "Questura, consolati, Farnesina",
       "Giorni richiesta → lasciapassare",
       "15",
       "Volontà politica dei paesi d’origine",
       "Media"
      ],
      [
       "5. Prevenzione della fuga",
       "CPR: 883 posti utilizzabili su 1.492; occupazione 46%",
       "Obbligo di firma e residenza; braccialetto; CPR solo per chi ha il documento in arrivo",
       "Questura, giudice di pace",
       "Giorni medi in CPR",
       "60",
       "Convalide e proroghe lente",
       "Media"
      ],
      [
       "6. Ricorsi",
       "Sospensiva frequente; tempi 6-12 mesi",
       "Rito accelerato 30 gg per paesi sicuri; udienza in videoconferenza",
       "Tribunali",
       "Giorni medi del ricorso",
       "30",
       "Carico dei tribunali",
       "Media"
      ],
      [
       "7. Trasferimento",
       "Charter limitati dai tetti (Tunisia 80/settimana); volo di linea costoso",
       "Programmazione annuale dei voli con Frontex; charter congiunti",
       "Viminale, Frontex",
       "Rimpatri eseguiti",
       "12.777",
       "Capacità di accoglienza dei paesi d’origine",
       "Media"
      ],
      [
       "8. Reinserimento",
       "Nessun monitoraggio",
       "Incentivo in 2 tranche; verifica a 6 mesi; dato pubblicato",
       "OIM, paese d’origine",
       "Quota rientrati verificati a 6 mesi",
       "80%",
       "Nessuno",
       "Alta"
      ]
     ]
    }
   ],
   "Come si attiva il perimetro nelle Fasi 2, 3 e 4": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Categoria",
       "Evento che apre il perimetro",
       "Procedura concreta",
       "Attore",
       "Persone l’anno (ordine di grandezza)",
       "Tempo",
       "Vincolo principale",
       "Fattibilità"
      ],
      [
       "Richiedenti asilo (Fase 2)",
       "Diniego in prima istanza (≈ 50.400 l’anno)",
       "Procedura di frontiera 12 settimane nei CTRA per paesi < 20%; diniego + ordine in un atto; RVA offerto nel centro",
       "Commissioni, Questura, CTRA",
       "50.000",
       "12 settimane",
       "Ricorsi; posti CTRA (1.033)",
       "Alta"
      ],
      [
       "Permessi a termine (Fase 2)",
       "Perdita del lavoro oltre 12 mesi; reddito sotto soglia; fine stagione o corso",
       "Incrocio INPS-Questura al rinnovo; stagionali: controllo uscita EES; mancato rinnovo → ordine",
       "Questura, INPS, EES",
       "n.d. (da misurare)",
       "Alla scadenza",
       "Nessun dato oggi; art. 8 CEDU per famiglie",
       "Media"
      ],
      [
       "Lungo soggiornanti (Fase 2)",
       "Condanna per reati artt. 380-381 c.p.p.; assenza > 12 mesi",
       "Segnalazione automatica DAP → Questura; revoca; espulsione a fine pena",
       "DAP, Questura, Prefetto",
       "Centinaia",
       "Durante la pena",
       "Valutazione individuale; ricorsi",
       "Media"
      ],
      [
       "Protezione sussidiaria e speciale (Fase 2)",
       "Scadenza del permesso (5 e 2 anni)",
       "Riesame d’ufficio sulla situazione del paese; cessazione → ordine",
       "Commissione nazionale",
       "Migliaia (es. Siria, Ucraina)",
       "Alla scadenza",
       "Non-refoulement",
       "Media"
      ],
      [
       "Condannati extra-UE (Fase 1)",
       "Sentenza definitiva",
       "Identificazione consolare in carcere nei primi 6 mesi; lasciapassare pronto; espulsione al fine pena o alternativa (residuo ≤ 2 anni)",
       "DAP, Questura, magistrato di sorveglianza",
       "4.000 nel 2032",
       "Entro la pena",
       "Riammissione dei paesi",
       "Media"
      ],
      [
       "Romania (Fase 4)",
       "Condanna o assenza di risorse",
       "Allontanamento art. 20-21; esecuzione pena in Romania (DQ 2008/909)",
       "Prefetto, Min. Giustizia",
       "1.000 + 900",
       "3-12 mesi",
       "Dir. 2004/38: solo casi individuali",
       "Media"
      ],
      [
       "Protezione temporanea (Fase 4)",
       "Scadenza 4.3.2028",
       "Censimento 2027: lavoro sì/no; conversione per chi lavora; RVA verso Ucraina per gli altri",
       "Viminale, OIM, Ucraina",
       "160.000 in 2 anni",
       "2027-2029",
       "Situazione di guerra",
       "Media"
      ],
      [
       "Naturalizzati (Fase 3)",
       "Legge sulla revoca (2027) e riforma costituzionale (2027-2030)",
       "2027 legge ordinaria: revoca per reati gravi entro 10 anni; 2027-29 riforma artt. 3 e 22 con referendum; dal 2030 allontanamento dei condannati; programma di rientro volontario con incentivo dal 2027",
       "Parlamento, elettori, Viminale",
       "3.000 revoche + 10.000 rientri volontari l’anno a regime",
       "3 anni",
       "Tempi parlamentari; apolidia (serve seconda cittadinanza)",
       "Media"
      ],
      [
       "Seconda generazione (Fase 3)",
       "Idem; nel frattempo chiusura del rubinetto: art. 4 c. 2 e art. 14 L. 91/92",
       "Idem; rinuncia alla cittadinanza incentivata (art. 14) per chi aderisce al rientro volontario",
       "Parlamento, Viminale",
       "Idem",
       "3 anni",
       "Idem",
       "Media"
      ]
     ]
    }
   ],
   "Paesi d’origine: la riammissione": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Paese",
       "Situazione 2025",
       "Cosa serve",
       "Leva",
       "Rimpatri IT 2025",
       "Obiettivo 2032",
       "Strumento",
       "Fattibilità"
      ],
      [
       "Tunisia",
       "Accordo operativo; tetto 80/settimana; charter 78 → 28; 1.849 → 600 rimpatri",
       "Alzare il tetto a 200/settimana; charter programmati",
       "MoU UE-Tunisia 2023 (105 M€); quote lavoro",
       "600",
       "3.000",
       "Charter nazionale",
       "Media"
      ],
      [
       "Egitto",
       "18 charter; 454 rimpatri; 52% degli ingressi in CPR rimpatriati",
       "Raddoppiare i charter",
       "Partenariato UE-Egitto 2024 (7,4 mld €); visti",
       "454",
       "1.500",
       "Charter nazionale",
       "Media"
      ],
      [
       "Albania",
       "Riammissione funziona; accordo esecuzione pena 2002",
       "Volume",
       "Candidatura UE",
       "n.d.",
       "1.000",
       "Volo di linea; trasferimento pena",
       "Alta"
      ],
      [
       "Marocco",
       "Prima nazionalità in carcere (4.358); lasciapassare rari",
       "Accordo di riammissione con tempi certi",
       "Visti art. 25a; commercio UE; Piano Mattei",
       "n.d.",
       "1.500",
       "Accordo bilaterale",
       "Bassa"
      ],
      [
       "Bangladesh",
       "Primo paese per richieste d’asilo (32.865); rigetti alti; riammissione lenta",
       "Accordo UE-Bangladesh (SOP 2017) applicato",
       "Visti; quote lavoro (decreto flussi)",
       "n.d.",
       "1.500",
       "Charter Frontex",
       "Media"
      ],
      [
       "Pakistan",
       "Riammissione formale (accordo UE 2010) ma identificazione lenta",
       "Identificazione consolare in carcere e CAS",
       "Visti; GSP+ commercio",
       "n.d.",
       "800",
       "Charter Frontex",
       "Bassa"
      ],
      [
       "Algeria",
       "Nessuna cooperazione",
       "Accordo politico",
       "Gas; visti",
       "n.d.",
       "500",
       "Volo di linea",
       "Bassa"
      ],
      [
       "Nigeria",
       "Charter congiunti Frontex; cooperazione parziale",
       "Continuità",
       "Visti; aiuti",
       "n.d.",
       "500",
       "Charter Frontex",
       "Media"
      ],
      [
       "Georgia",
       "Riammissione funziona (accordo UE 2011)",
       "Volume",
       "",
       "n.d.",
       "300",
       "Volo di linea",
       "Alta"
      ],
      [
       "Ucraina (Fase 4)",
       "Riammette i propri cittadini",
       "Programma di rientro volontario",
       "Ricostruzione UE",
       "n.d.",
       "40.000 (2028)",
       "RVA",
       "Alta"
      ],
      [
       "Romania (Fase 4)",
       "Stato UE: nessun problema di riammissione",
       "Applicare art. 20 e DQ 2008/909",
       "",
       "n.d.",
       "1.900",
       "Allontanamento; trasferimento pena",
       "Media"
      ]
     ]
    }
   ],
   "Se il paese d’origine non riammette: otto soluzioni alternative": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Soluzione",
       "Come funziona",
       "A chi si applica",
       "Base giuridica",
       "Costo",
       "Tempo",
       "Limite",
       "Fattibilità"
      ],
      [
       "A. Leva dei visti (art. 25a Codice visti)",
       "Riduzione visti Schengen, tasse più alte, tempi più lunghi per i cittadini del paese che non coopera; già applicata a Gambia, Etiopia",
       "Marocco, Algeria, Pakistan, Bangladesh",
       "Reg. (UE) 810/2009 art. 25a",
       "Nullo",
       "3-6 mesi per la decisione UE",
       "Serve maggioranza qualificata in Consiglio",
       "Alta"
      ],
      [
       "B. Condizionalità commerciale e aiuti",
       "GSP+ (Pakistan, Bangladesh), accordi di associazione (Marocco), Piano Mattei, rimesse: riammissione come condizione",
       "Tutti",
       "Reg. GSP (UE) 2023; accordi bilaterali",
       "Nullo o negativo (aiuti sospesi)",
       "1-2 anni",
       "Interessi economici contrari (gas algerino, tessile Bangladesh)",
       "Media"
      ],
      [
       "C. Rimpatrio verso paese terzo o hub",
       "Trasferimento in un paese che accetta (hub di rimpatrio del regolamento UE 2026; Albania; accordi tipo Ruanda) quando il paese d’origine rifiuta",
       "Chi è identificato ma non riammesso",
       "Reg. UE rimpatri 2026 (return hubs); L. 14/2024",
       "≈ 10.000 € a persona (ipotesi)",
       "6-12 mesi per gli accordi",
       "Serve un paese ospitante; CEDU art. 3",
       "Media"
      ],
      [
       "D. Trattenimento prolungato",
       "Fino a 24 + 6 mesi in CPR o Gjadër finché il documento arriva; pressione sul consolato",
       "Non cooperanti con rischio di fuga",
       "Reg. UE rimpatri 2026",
       "110 €/giorno (≈ 100.000 € a persona per 30 mesi)",
       "Immediato",
       "Costo; convalide del giudice ogni 3 mesi",
       "Media"
      ],
      [
       "E. Reato di mancata cooperazione",
       "Chi rifiuta di dichiarare l’identità o di collaborare al rimpatrio commette reato: detenzione in carcere, poi espulsione come misura di sicurezza",
       "Non cooperanti",
       "Reg. UE rimpatri 2026 (obbligo di cooperazione); TU art. 14 c. 5-ter da rafforzare",
       "140 €/giorno di carcere",
       "Legge ordinaria 2027",
       "Corte di giustizia UE (sentenza El Dridi): la pena non può ostacolare il rimpatrio",
       "Media"
      ],
      [
       "F. Incentivo volontario maggiorato",
       "Incentivo doppio (fino a 5.000 €) per chi parte entro 30 giorni verso un paese che non coopera sui forzati: il volontario non ha bisogno di lasciapassare consolare, basta il passaporto o un documento del paese",
       "Chi ha ancora un passaporto",
       "TU art. 14-ter",
       "5.000 € contro 16.560 € di un forzato da CPR",
       "Immediato",
       "Funziona solo per chi ha documenti",
       "Alta"
      ],
      [
       "G. Permanenza vincolata",
       "Per chi resta non rimpatriabile: nessun permesso, obbligo di firma, residenza assegnata, niente accesso a prestazioni sociali non essenziali, lavoro solo in programmi pubblici; rivalutazione ogni 6 mesi",
       "Residuo non rimpatriabile",
       "Legge ordinaria; reg. UE rimpatri",
       "Basso",
       "Legge 2027",
       "Diritti fondamentali (vitto, cure urgenti) restano",
       "Alta"
      ],
      [
       "H. Pressione europea congiunta",
       "Gli alleati (FR, DE, AT, IT) chiedono insieme la riammissione: sospensione coordinata dei visti e degli accordi",
       "Marocco, Algeria",
       "Consiglio UE",
       "Nullo",
       "2027-2028",
       "Serve l’allineamento politico ipotizzato dal GRP",
       "Media"
      ]
     ]
    },
    {
     "tipo": "p",
     "testo": "Ordine di applicazione: F (volontario maggiorato) → A e H (pressione sui visti, da soli e con gli alleati) → B (condizionalità commerciale) → C (paese terzo o hub) → D ed E (trattenimento, reato di mancata cooperazione) → G (permanenza vincolata) per il residuo."
    }
   ],
   "Scorecard di fattibilità e alternativa": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Categoria",
       "Cooperazione di terzi",
       "Capacità operativa",
       "Costo",
       "Totale /15",
       "Giudizio",
       "Se la cooperazione manca: alternativa"
      ],
      [
       "Fase 1 · Irregolari",
       "2",
       "2",
       "4",
       "8",
       "Fattibile; dipende da Marocco, Algeria, Pakistan, Bangladesh",
       "F volontario maggiorato → A/H visti → C paese terzo → D/E → G permanenza vincolata"
      ],
      [
       "Fase 1 · Condannati",
       "2",
       "3",
       "5",
       "10",
       "Prioritaria: identificazione in carcere",
       "E reato di mancata cooperazione; C paese terzo; trasferimento pena dove c’è accordo"
      ],
      [
       "Fase 2 · Richiedenti asilo respinti",
       "3",
       "3",
       "4",
       "10",
       "Fattibile con procedura di frontiera",
       "Decisione e rimpatrio dal CTRA; F volontario; C hub"
      ],
      [
       "Fase 2 · Permessi a termine",
       "4",
       "2",
       "4",
       "10",
       "Fattibile: serve il sistema di tracciamento",
       "Nessuna alternativa necessaria: il titolo scade per legge; poi come Fase 1"
      ],
      [
       "Fase 2 · Lungo soggiornanti",
       "3",
       "2",
       "4",
       "9",
       "Condannati subito; gli altri dopo la revisione della dir. 2003/109",
       "Revoca per assenza e frode; poi come Fase 1"
      ],
      [
       "Fase 2 · Rifugiati",
       "2",
       "2",
       "3",
       "7",
       "Dopo la revisione UE della direttiva qualifiche",
       "Cessazione per paesi tornati sicuri (Siria); revoca per reati; C paese terzo sicuro"
      ],
      [
       "Fase 3 · Naturalizzati e seconda generazione",
       "4",
       "2",
       "3",
       "9",
       "Tempi parlamentari, non terzi: i paesi d’origine riammettono chi ha ancora la loro cittadinanza",
       "Rientro volontario incentivato con rinuncia (art. 14); per chi ha solo la cittadinanza italiana serve la seconda cittadinanza (apolidia)"
      ],
      [
       "Fase 4 · Romania",
       "5",
       "3",
       "5",
       "13",
       "Stato UE: nessun problema di riammissione",
       "Nessuna necessaria"
      ],
      [
       "Fase 4 · Protezione temporanea",
       "4",
       "3",
       "4",
       "11",
       "Ucraina riammette; dipende dalla guerra",
       "Conversione a permesso a termine (→ Fase 2) se il rientro non è possibile"
      ]
     ]
    },
    {
     "tipo": "p",
     "testo": "Punteggi da 1 (terzi non cooperano) a 5 (già possibile). Il punteggio è basso solo per mancata cooperazione dei paesi d’origine, mai per le norme attuali, che il piano assume cambiate."
    }
   ],
   "9. Costi 2027-2032": [
    {
     "tipo": "p",
     "testo": "Il modello parte dai volumi del tracker e li moltiplica per costi unitari dichiarati. I costi unitari sono ipotesi modificabili nel file di lavoro. I risparmi (accoglienza, carcere, giorni di CPR) usano le stesse ipotesi e vanno letti con più cautela dei costi. Importi in milioni di euro salvo indicazione."
    }
   ],
   "Costi unitari": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Voce",
       "Valore"
      ],
      [
       "Volontario: trasporto",
       "560"
      ],
      [
       "Volontario: incentivo di reinserimento",
       "1.500"
      ],
      [
       "Volontario: gestione (OIM, colloqui)",
       "400"
      ],
      [
       "Forzato: trasporto e scorta (volo di linea, 2 agenti)",
       "3.400"
      ],
      [
       "Forzato: charter a persona",
       "2.600"
      ],
      [
       "CPR: costo per giorno tutto compreso (gestione + polizia + struttura)",
       "110"
      ],
      [
       "CPR: capex per posto nuovo",
       "21.000"
      ],
      [
       "Procedura di frontiera: costo aggiuntivo per domanda rispetto all’accoglienza ordinaria",
       "200"
      ],
      [
       "Accoglienza: costo per giorno a persona",
       "35"
      ],
      [
       "Carcere: costo per giorno a detenuto",
       "140"
      ],
      [
       "Allontanamento cittadino UE",
       "1.000"
      ],
      [
       "Rientro volontario in Ucraina (trasporto + incentivo)",
       "1.000"
      ],
      [
       "Fase 3: incentivo al rientro volontario con rinuncia alla cittadinanza",
       "10.000"
      ],
      [
       "Organizzazione: autorità unica e personale (M€/anno)",
       "50"
      ],
      [
       "Fascicolo digitale: investimento una tantum (M€)",
       "20"
      ],
      [
       "Incentivi ai paesi d’origine (M€/anno)",
       "100"
      ],
      [
       "Quota dei forzati che viaggia in charter",
       "50%"
      ],
      [
       "Giorni di accoglienza risparmiati per rimpatrio eseguito di un diniegato",
       "180"
      ],
      [
       "Quota dei rimpatri che riguarda diniegati in accoglienza",
       "50%"
      ],
      [
       "Giorni di carcere risparmiati per espulsione alternativa/trasferimento",
       "365"
      ]
     ]
    }
   ],
   "Volumi per anno (dal tracker)": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Voce",
       "2027",
       "2028",
       "2029",
       "2030",
       "2031",
       "2032"
      ],
      [
       "Rimpatri volontari assistiti",
       "2.800",
       "8.250",
       "22,4k",
       "42,5k",
       "47,5k",
       "50,0k"
      ],
      [
       "Rimpatri forzati",
       "11,2k",
       "19,2k",
       "33,6k",
       "42,5k",
       "47,5k",
       "50,0k"
      ],
      [
       "Quota forzati dal CPR",
       "0,4",
       "0,3",
       "0,3",
       "0,3",
       "0,3",
       "0,3"
      ],
      [
       "Giorni medi in CPR",
       "120",
       "90",
       "75",
       "60",
       "60",
       "60"
      ],
      [
       "Posti CPR necessari",
       "1.733",
       "1.954",
       "2.680",
       "2.712",
       "3.031",
       "3.191"
      ],
      [
       "Espulsioni di detenuti (artt. 15-16)",
       "2.000",
       "4.000",
       "6.000",
       "7.000",
       "8.000",
       "8.000"
      ],
      [
       "Detenuti UE trasferiti (DQ 2008/909)",
       "500",
       "1.000",
       "1.500",
       "2.000",
       "2.000",
       "2.000"
      ],
      [
       "Domande in procedura di frontiera (paesi < 20%)",
       "60,0k",
       "60,0k",
       "60,0k",
       "60,0k",
       "60,0k",
       "60,0k"
      ],
      [
       "Allontanamenti di cittadini UE",
       "2.000",
       "4.000",
       "5.000",
       "5.000",
       "5.000",
       "5.000"
      ],
      [
       "Rientri volontari in Ucraina",
       "40,0k",
       "80,6k",
       "0",
       "0",
       "0",
       "0"
      ],
      [
       "Revoche di cittadinanza e rimpatri Fase 3 (dopo la riforma)",
       "0",
       "0",
       "0",
       "500",
       "2.000",
       "3.000"
      ],
      [
       "Rientri volontari incentivati Fase 3",
       "1.000",
       "3.000",
       "5.000",
       "8.000",
       "10,0k",
       "10,0k"
      ]
     ]
    }
   ],
   "Costi per anno, milioni di euro": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Voce",
       "2027",
       "2028",
       "2029",
       "2030",
       "2031",
       "2032",
       "Totale 2027-32"
      ],
      [
       "Rimpatri volontari",
       "6,9",
       "20,3",
       "55,1",
       "104,5",
       "116,8",
       "123",
       "426,7"
      ],
      [
       "Rimpatri forzati: trasporto",
       "33,6",
       "57,8",
       "100,8",
       "127,5",
       "142,5",
       "150",
       "612,1"
      ],
      [
       "Rimpatri forzati: trattenimento in CPR",
       "59,1",
       "66,7",
       "91,5",
       "92,6",
       "103,5",
       "108,9",
       "522,2"
      ],
      [
       "CPR: capex posti aggiuntivi",
       "17,9",
       "4,6",
       "15,2",
       "0,7",
       "6,7",
       "3,4",
       "48,5"
      ],
      [
       "Procedure di frontiera (CTRA), costo aggiuntivo",
       "12",
       "12",
       "12",
       "12",
       "12",
       "12",
       "72"
      ],
      [
       "Espulsioni di detenuti (trasporto)",
       "6,8",
       "13,6",
       "20,4",
       "23,8",
       "27,2",
       "27,2",
       "119"
      ],
      [
       "Allontanamenti UE",
       "2",
       "4",
       "5",
       "5",
       "5",
       "5",
       "26"
      ],
      [
       "Rientri in Ucraina",
       "40",
       "80,6",
       "0",
       "0",
       "0",
       "0",
       "120,6"
      ],
      [
       "Fase 3: rimpatri di condannati e rientri volontari incentivati",
       "10",
       "30",
       "50",
       "81,7",
       "106,8",
       "110,2",
       "388,7"
      ],
      [
       "Organizzazione (autorità unica, personale)",
       "50",
       "50",
       "50",
       "50",
       "50",
       "50",
       "300"
      ],
      [
       "Fascicolo digitale (una tantum 2027)",
       "20",
       "0",
       "0",
       "0",
       "0",
       "0",
       "20"
      ],
      [
       "Incentivi ai paesi d’origine",
       "100",
       "100",
       "100",
       "100",
       "100",
       "100",
       "600"
      ],
      [
       "TOTALE COSTI",
       "358,3",
       "439,6",
       "500,0",
       "597,8",
       "670,5",
       "689,7",
       "3.255,8"
      ]
     ]
    }
   ],
   "Risparmi, costo netto e costo per rimpatrio": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Voce",
       "2027",
       "2028",
       "2029",
       "2030",
       "2031",
       "2032",
       "Totale 2027-32"
      ],
      [
       "Accoglienza evitata (diniegati rimpatriati prima)",
       "44,1",
       "86,6",
       "176,4",
       "267,8",
       "299,2",
       "315",
       "1.189,1"
      ],
      [
       "Carcere evitato (espulsioni alternative e trasferimenti)",
       "76,7",
       "153,3",
       "229,9",
       "281,1",
       "306,6",
       "306,6",
       "1.354,2"
      ],
      [
       "CPR: giorni risparmiati rispetto ai 148 attuali",
       "13,8",
       "43,0",
       "89,0",
       "135,8",
       "151,7",
       "159,7",
       "593,0"
      ],
      [
       "TOTALE RISPARMI",
       "134,5",
       "282,9",
       "495,4",
       "684,6",
       "757,6",
       "781,3",
       "3.136,3"
      ],
      [
       "COSTO NETTO (costi − risparmi)",
       "223,7",
       "156,7",
       "4,6",
       "-86,8",
       "-87,1",
       "-91,7",
       "119,5"
      ],
      [
       "Costo per rimpatrio eseguito (€, lordo)",
       "25,6k",
       "15.985,0",
       "8.929,0",
       "7.032,8",
       "7.057,9",
       "6.896,6",
       ""
      ],
      [
       "Costo variabile per rimpatrio (€): trasporto, trattenimento, incentivi",
       "7.116",
       "5.263,5",
       "4.417,5",
       "3.819",
       "3.819",
       "3.819",
       ""
      ],
      [
       "Costo per rimpatrio eseguito (€, netto)",
       "15.980,4",
       "5.697,3",
       "82,8",
       "-1.020,9",
       "-916,6",
       "-916,6",
       ""
      ]
     ]
    }
   ],
   "Riferimenti di spesa attuale": [
    {
     "tipo": "tabella",
     "righe": [
      [
       "Voce",
       "Valore"
      ],
      [
       "Sistema CPR e CTRA, spesa 2024 (M€)",
       "96"
      ],
      [
       "Centri in Albania: contratti di costruzione (M€)",
       "74,2"
      ],
      [
       "Centri in Albania: preventivo 5 anni (M€)",
       "650"
      ],
      [
       "Sistema di accoglienza, spesa al giorno 2022 (M€)",
       "4"
      ],
      [
       "Rimpatrio da CPR, costo medio 2025 (€)",
       "16,6k"
      ],
      [
       "Frontex, costo medio per rimpatrio 2024 (€)",
       "2.600"
      ]
     ]
    },
    {
     "tipo": "p",
     "testo": "Lettura. Il costo lordo del programma sale da 360 a 690 milioni l’anno man mano che i rimpatri passano da 14 mila a 100 mila, contro i 96 milioni spesi nel 2024 per il solo sistema di trattenimento. La parte variabile (trasporto, trattenimento, incentivi) scende da 7,1 mila a 3,8 mila euro per rimpatrio; le parti fisse (organizzazione 50 milioni, incentivi ai paesi d’origine 100 milioni) sono ciò che oggi manca. I risparmi dipendono da due ipotesi forti: che i diniegati rimpatriati escano dall’accoglienza sei mesi prima e che le espulsioni alternative alla pena evitino un anno di carcere a 140 euro al giorno. Con quelle ipotesi il programma si ripaga dal 2029; senza, il costo netto resta tra 300 e 400 milioni l’anno."
    }
   ],
   "10. Il contesto europeo": [
    {
     "tipo": "p",
     "testo": "Nel 2025 l’UE ha emesso 486,7 mila ordini ed eseguito 139,3 mila rimpatri (28,6%). Con l’obiettivo del 100%, i rimpatri mancanti sono 347,4 mila l’anno: la Francia da sola ne vale 122,6 mila, l’Italia 16,5 mila. Dieci paesi sono già sopra il 60%."
    },
    {
     "tipo": "tabella",
     "righe": [
      [
       "Paese",
       "Ordini 2025",
       "Rimpatri 2025",
       "Tasso",
       "Rimpatri mancanti al 100%"
      ],
      [
       "Ungheria",
       "9.080",
       "4.135",
       "45,5%",
       "4.945"
      ],
      [
       "Irlanda",
       "6.260",
       "2.030",
       "32,4%",
       "4.230"
      ],
      [
       "Repubblica Ceca",
       "5.250",
       "3.180",
       "60,6%",
       "2.070"
      ],
      [
       "Finlandia",
       "5.070",
       "1.820",
       "35,9%",
       "3.250"
      ],
      [
       "Lituania",
       "4.900",
       "4.545",
       "92,8%",
       "355"
      ],
      [
       "Bulgaria",
       "3.880",
       "1.150",
       "29,6%",
       "2.730"
      ],
      [
       "Romania",
       "2.860",
       "775",
       "27,1%",
       "2.085"
      ],
      [
       "Lettonia",
       "2.640",
       "2.280",
       "86,4%",
       "360"
      ],
      [
       "Danimarca",
       "2.280",
       "975",
       "42,8%",
       "1.305"
      ],
      [
       "Lussemburgo",
       "1.340",
       "370",
       "27,6%",
       "970"
      ],
      [
       "Malta",
       "1.090",
       "1.065",
       "97,7%",
       "25"
      ],
      [
       "Slovenia",
       "880",
       "175",
       "19,9%",
       "705"
      ],
      [
       "Estonia",
       "660",
       "565",
       "85,6%",
       "95"
      ],
      [
       "Germania",
       "55,2k",
       "29,3k",
       "53,0%",
       "25,9k"
      ],
      [
       "Spagna",
       "53,7k",
       "5.705",
       "10,6%",
       "48,0k"
      ],
      [
       "Slovacchia",
       "500",
       "395",
       "79,0%",
       "105"
      ],
      [
       "Paesi Bassi",
       "31,2k",
       "4.825",
       "15,4%",
       "26,4k"
      ],
      [
       "Grecia",
       "26,6k",
       "5.050",
       "19,0%",
       "21,6k"
      ],
      [
       "Belgio",
       "25,3k",
       "4.955",
       "19,6%",
       "20,4k"
      ],
      [
       "Italia",
       "21,3k",
       "4.780",
       "22,4%",
       "16,5k"
      ],
      [
       "Svezia",
       "18,3k",
       "11,2k",
       "61,3%",
       "7.090"
      ],
      [
       "Portogallo",
       "18,2k",
       "825",
       "4,5%",
       "17,4k"
      ],
      [
       "Cipro",
       "15,2k",
       "10,6k",
       "70,0%",
       "4.555"
      ],
      [
       "Polonia",
       "14,8k",
       "9.690",
       "65,7%",
       "5.070"
      ],
      [
       "Francia",
       "138k",
       "14,9k",
       "10,9%",
       "123k"
      ],
      [
       "Croazia",
       "11,3k",
       "6.560",
       "57,9%",
       "4.770"
      ],
      [
       "Austria",
       "11,2k",
       "7.305",
       "65,4%",
       "3.860"
      ]
     ]
    }
   ],
   "11. Rapporto con il programma di Futuro Nazionale": [
    {
     "tipo": "p",
     "testo": "Il capitolo 5 del programma (“Assimilazione e Remigrazione”, 22 misure) definisce la cornice e il perimetro largo: irregolari, regolari, naturalizzati, cittadini UE. Il GRP ne è la parte esecutiva e misurabile."
    },
    {
     "tipo": "tabella",
     "righe": [
      [
       "Misure",
       "Fase GRP",
       "Rapporto"
      ],
      [
       "7, 10",
       "Fase 1",
       "Sviluppate per intero: rimpatri, condannati, accordi, CPR, canale volontario, soluzioni alternative"
      ],
      [
       "8, 9, 19",
       "Fase 2",
       "Sviluppate: permessi, asilo, lungo soggiornanti, rifugiati"
      ],
      [
       "2, 3, 4",
       "Fase 3",
       "Quantificate con il percorso di legge: revoca 2027, riforma costituzionale 2027-2029, rientro volontario incentivato"
      ],
      [
       "1, 5, 6",
       "Fase 4",
       "Romania e protezione temporanea: obiettivi dal 2027"
      ],
      [
       "11",
       "Fase 1",
       "Lo stop ai flussi va coordinato con la leva dei visti e delle quote usata per ottenere la riammissione"
      ]
     ]
    }
   ],
   "12. Garanzie": [
    {
     "tipo": "lista",
     "testo": "Nessun rimpatrio verso tortura o trattamenti inumani (TU art. 19; CEDU art. 3): vale per tutte le fasi."
    },
    {
     "tipo": "lista",
     "testo": "Ogni decisione è individuale e impugnabile; le espulsioni collettive sono vietate (CEDU Prot. 4 art. 4)."
    },
    {
     "tipo": "lista",
     "testo": "Minori mai espulsi; famiglie fuori dagli hub e dai CPR."
    },
    {
     "tipo": "lista",
     "testo": "Monitoraggio indipendente dei CPR e dei voli; dati pubblicati ogni trimestre."
    },
    {
     "tipo": "lista",
     "testo": "Le garanzie non sono un costo: un rimpatrio annullato in ricorso vale zero."
    },
    {
     "tipo": "p",
     "testo": "Fonti dei dati: Eurostat (popolazione, forze di lavoro, permessi, asilo, ordini e rimpatri, 2025), ISTAT (cittadini non comunitari 2024), ISMU (irregolari), ActionAid/Università di Bari (CPR, costi 2025), Ministero della Giustizia (detenuti 2025). Tutti i numeri sono collegati al file GRP-Italia.xlsx."
    }
   ]
  },
  "titoli": [
   {
    "titolo": "1. Il metodo: funnel e fasi",
    "livello": 1
   },
   {
    "titolo": "1.1 Le cinque fasi",
    "livello": 2
   },
   {
    "titolo": "1.2 Il funnel dell’Italia",
    "livello": 2
   },
   {
    "titolo": "1.3 Flussi 2025 nel perimetro operativo",
    "livello": 2
   },
   {
    "titolo": "2. Fase 1 · Irregolari e condannati",
    "livello": 1
   },
   {
    "titolo": "Chi sono e quanti sono",
    "livello": 2
   },
   {
    "titolo": "Stato giuridico, cosa si può fare, cambio di legge",
    "livello": 2
   },
   {
    "titolo": "3. Fase 2 · Regolari extra-UE",
    "livello": 1
   },
   {
    "titolo": "Chi sono e quanti sono",
    "livello": 2
   },
   {
    "titolo": "Stato giuridico, cosa si può fare, cambio di legge",
    "livello": 2
   },
   {
    "titolo": "Flussi",
    "livello": 2
   },
   {
    "titolo": "4. Fase 3 · Cittadini italiani di origine straniera",
    "livello": 1
   },
   {
    "titolo": "Chi sono e quanti sono",
    "livello": 2
   },
   {
    "titolo": "Stato giuridico, cosa si può fare, cambio di legge",
    "livello": 2
   },
   {
    "titolo": "Flussi",
    "livello": 2
   },
   {
    "titolo": "5. Fase 4 · Cittadini UE (Romania) e protezione temporanea",
    "livello": 1
   },
   {
    "titolo": "Chi sono e quanti sono",
    "livello": 2
   },
   {
    "titolo": "Stato giuridico, cosa si può fare, cambio di legge",
    "livello": 2
   },
   {
    "titolo": "6. FUORI · Nessuna remigrazione",
    "livello": 1
   },
   {
    "titolo": "Chi sono e quanti sono",
    "livello": 2
   },
   {
    "titolo": "Stato giuridico, cosa si può fare, cambio di legge",
    "livello": 2
   },
   {
    "titolo": "7. Tracker 2027-2032",
    "livello": 1
   },
   {
    "titolo": "Fase 1 · Irregolari e condannati (legge attuale)",
    "livello": 2
   },
   {
    "titolo": "Fase 2 · Regolari extra-UE (legge ordinaria e accordi)",
    "livello": 2
   },
   {
    "titolo": "Fase 3 · Cittadini di origine straniera (riforma costituzionale)",
    "livello": 2
   },
   {
    "titolo": "Fase 4 · Romania e protezione temporanea (diritto UE)",
    "livello": 2
   },
   {
    "titolo": "8. Come si esegue: modalità e fattibilità",
    "livello": 1
   },
   {
    "titolo": "Le sette modalità",
    "livello": 2
   },
   {
    "titolo": "La catena operativa della Fase 1",
    "livello": 2
   },
   {
    "titolo": "Come si attiva il perimetro nelle Fasi 2, 3 e 4",
    "livello": 2
   },
   {
    "titolo": "Paesi d’origine: la riammissione",
    "livello": 2
   },
   {
    "titolo": "Se il paese d’origine non riammette: otto soluzioni alternative",
    "livello": 2
   },
   {
    "titolo": "Scorecard di fattibilità e alternativa",
    "livello": 2
   },
   {
    "titolo": "9. Costi 2027-2032",
    "livello": 1
   },
   {
    "titolo": "Costi unitari",
    "livello": 2
   },
   {
    "titolo": "Volumi per anno (dal tracker)",
    "livello": 2
   },
   {
    "titolo": "Costi per anno, milioni di euro",
    "livello": 2
   },
   {
    "titolo": "Risparmi, costo netto e costo per rimpatrio",
    "livello": 2
   },
   {
    "titolo": "Riferimenti di spesa attuale",
    "livello": 2
   },
   {
    "titolo": "10. Il contesto europeo",
    "livello": 1
   },
   {
    "titolo": "11. Rapporto con il programma di Futuro Nazionale",
    "livello": 1
   },
   {
    "titolo": "12. Garanzie",
    "livello": 1
   }
  ]
 },
 "correzioni": [
  {
   "foglio": "Fase 1",
   "codice": "F2",
   "campo": "fare",
   "da": "cella G19 del tab Fase 1: esecuzione 22,4% oggi, obiettivo 60 per cento al 2032",
   "a": "Esecuzione: 22,4% oggi → 100% nel 2032",
   "motivo": "Il Tracker 2027-2032 fissa per l'Italia il 100% di esecuzione degli ordini nel 2032 (riga \"Tasso di esecuzione degli ordini\"); il 60% resta solo come obiettivo UE27."
  }
 ]
};
