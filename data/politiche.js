// Matrice "Agenda comune delle destre": valutazione editoriale sintetica (ottobre 2026).
// consiglio: come la proposta passa dal Consiglio UE: approvare (maggioranza qualificata), bloccare (minoranza di blocco), unanimita (un solo governo blocca), nazionale (non passa dal Consiglio)
// livelli: 2 = favorevole / allineato, 1 = parziale o ambiguo, 0 = contrario, null = non applicabile
window.POLITICHE = {
  partiti: [
    { id: "fdi",    nome: "FdI",      paese: "IT", gruppo: "ECR" },
    { id: "rn",     nome: "RN",       paese: "FR", gruppo: "PfE" },
    { id: "afd",    nome: "AfD",      paese: "DE", gruppo: "ESN" },
    { id: "vox",    nome: "Vox",      paese: "ES", gruppo: "PfE" },
    { id: "reform", nome: "Reform",   paese: "GB", gruppo: "—"   },
    { id: "pvv",    nome: "PVV",      paese: "NL", gruppo: "PfE" },
    { id: "fpo",    nome: "FPÖ",      paese: "AT", gruppo: "PfE" },
    { id: "pis",    nome: "PiS",      paese: "PL", gruppo: "ECR" },
    { id: "fidesz", nome: "Fidesz",   paese: "HU", gruppo: "PfE" },
    { id: "sd",     nome: "SD",       paese: "SE", gruppo: "ECR" },
    { id: "chega",  nome: "Chega",    paese: "PT", gruppo: "PfE" },
    { id: "svp",    nome: "UDC/SVP",  paese: "CH", gruppo: "—"   }
  ],
  temi: [
    { id: "hub", consiglio: "approvare", consiglio_nota: "Regolamento UE sui rimpatri e gli hub esterni: serve la maggioranza qualificata in Consiglio (più il Parlamento).", area: "Immigrazione", titolo: "Hub per l'asilo fuori dall'UE e rimpatri accelerati",
      nota: "Modello Italia–Albania e 'return hubs' proposti dalla Commissione: è il terreno di convergenza più solido.",
      voti: { fdi:2, rn:2, afd:2, vox:2, reform:2, pvv:2, fpo:2, pis:2, fidesz:2, sd:2, chega:2, svp:2 } },
    { id: "cedu", consiglio: "nazionale", consiglio_nota: "La CEDU è del Consiglio d'Europa, non dell'UE: si decide stato per stato (uscita, riserve, pressione sulla Corte).", area: "Immigrazione", titolo: "Reinterpretare o uscire dalla CEDU",
      nota: "Lettera dei nove governi del maggio 2025 (Italia e Danimarca in testa); Reform UK propone l'uscita secca.",
      voti: { fdi:2, rn:2, afd:2, vox:2, reform:2, pvv:2, fpo:2, pis:2, fidesz:2, sd:2, chega:2, svp:2 } },
    { id: "islam", consiglio: "nazionale", consiglio_nota: "Competenza nazionale: leggi su velo, moschee e culto non passano da Bruxelles.", area: "Identità", titolo: "Restrizioni su moschee, velo e 'islamizzazione'",
      nota: "Centrale per PVV, RN, FPÖ e AfD; più sfumato per FdI e PiS, che preferiscono il registro della sicurezza.",
      voti: { fdi:1, rn:2, afd:2, vox:2, reform:1, pvv:2, fpo:2, pis:1, fidesz:2, sd:2, chega:2, svp:2 } },
    { id: "auto", consiglio: "approvare", consiglio_nota: "Revisione di regolamenti UE già in vigore: serve la maggioranza qualificata in Consiglio.", area: "Clima", titolo: "Cancellare lo stop ai motori termici 2035 e rinviare ETS2",
      nota: "Già in corso: il rinvio di ETS2 al 2028 e la revisione del 2035 sono passati con i voti di PPE ed ECR.",
      voti: { fdi:2, rn:2, afd:2, vox:2, reform:2, pvv:2, fpo:2, pis:2, fidesz:2, sd:2, chega:2, svp:2 } },
    { id: "veto", consiglio: "bloccare", consiglio_nota: "Per fermare nuove competenze, risorse proprie o estensioni del voto a maggioranza basta una minoranza di blocco.", area: "Europa", titolo: "Nessuna nuova competenza a Bruxelles, veto nazionale rafforzato",
      nota: "'Europa delle nazioni': tutti d'accordo sul freno, nessuno più sull'uscita.",
      voti: { fdi:2, rn:2, afd:2, vox:2, reform:null, pvv:2, fpo:2, pis:2, fidesz:2, sd:2, chega:2, svp:null } },
    { id: "exit", consiglio: "nazionale", consiglio_nota: "Decisione unilaterale di uno stato (articolo 50): non si vota in Consiglio.", area: "Europa", titolo: "Referendum sull'uscita dall'UE o dall'euro",
      nota: "Tema abbandonato quasi ovunque dopo la Brexit; sopravvive come opzione in AfD e, in forma latente, nel PVV.",
      voti: { fdi:0, rn:0, afd:1, vox:0, reform:null, pvv:1, fpo:0, pis:0, fidesz:0, sd:0, chega:0, svp:null } },
    { id: "ucraina", consiglio: "unanimita", consiglio_nota: "Aiuti militari e sanzioni sono politica estera: servono tutti i 27, quindi un solo governo contrario blocca.", area: "Esteri", titolo: "Continuare gli aiuti militari all'Ucraina",
      nota: "La frattura principale: Meloni, PiS e SD atlantisti; Orbán, FPÖ e AfD contrari; RN e Vox ambigui.",
      voti: { fdi:2, rn:1, afd:0, vox:1, reform:1, pvv:1, fpo:0, pis:2, fidesz:0, sd:2, chega:1, svp:0 } },
    { id: "nato", consiglio: "nazionale", consiglio_nota: "Bilanci della difesa e impegni NATO sono decisioni nazionali.", area: "Esteri", titolo: "Spesa per la difesa oltre il 3% del PIL nella NATO",
      nota: "Convergenza con l'agenda Trump solo per una parte del blocco; neutralisti austriaci e svizzeri fuori.",
      voti: { fdi:2, rn:1, afd:0, vox:1, reform:2, pvv:1, fpo:0, pis:2, fidesz:1, sd:2, chega:1, svp:0 } },
    { id: "trump", consiglio: "nazionale", consiglio_nota: "Rapporti bilaterali: nessun voto in Consiglio.", area: "Esteri", titolo: "Allineamento politico con l'amministrazione Trump",
      nota: "Quasi tutti cercano la sponda di Washington; RN e SD mantengono le distanze sui dazi.",
      voti: { fdi:2, rn:1, afd:2, vox:2, reform:2, pvv:1, fpo:2, pis:2, fidesz:2, sd:1, chega:2, svp:1 } },
    { id: "famiglia", consiglio: "nazionale", consiglio_nota: "Fisco e welfare familiare restano competenza degli stati.", area: "Società", titolo: "Politiche nataliste e 'famiglia tradizionale'",
      nota: "Modello ungherese dei bonus natalità; i partiti del Nord e Reform sono molto più tiepidi sui diritti civili.",
      voti: { fdi:2, rn:2, afd:2, vox:2, reform:1, pvv:1, fpo:2, pis:2, fidesz:2, sd:1, chega:2, svp:1 } },
    { id: "economia", consiglio: "unanimita", consiglio_nota: "Dazi e politica commerciale sono UE a maggioranza, ma fisco e bilancio comune richiedono l'unanimità: qui un governo basta a bloccare, nessuno basta a imporre.", area: "Economia", titolo: "Protezionismo, dazi e intervento pubblico",
      nota: "Il blocco si spacca tra statalisti (RN, PiS) e liberisti (Vox, Reform, Chega, UDC).",
      voti: { fdi:1, rn:2, afd:1, vox:0, reform:0, pvv:1, fpo:1, pis:2, fidesz:1, sd:1, chega:0, svp:0 } },
    { id: "giustizia", consiglio: "unanimita", consiglio_nota: "Le sanzioni per violazione dello stato di diritto (articolo 7) richiedono l'unanimità degli altri stati: un alleato in Consiglio protegge chi le subisce.", area: "Istituzioni", titolo: "Controllo politico su magistratura e media pubblici",
      nota: "Sperimentato in Ungheria e Polonia; altrove resta a livello di riforme puntuali (giustizia in Italia, BBC nel Regno Unito).",
      voti: { fdi:1, rn:1, afd:1, vox:1, reform:1, pvv:1, fpo:1, pis:2, fidesz:2, sd:1, chega:1, svp:0 } }
  ],
  convergenze: [
    { titolo: "Esternalizzazione dell'asilo", testo: "Hub di rimpatrio in paesi terzi, lista UE di 'paesi sicuri', procedure accelerate alle frontiere. È la politica con il consenso più ampio e già in agenda a Bruxelles." },
    { titolo: "Svuotamento del Green Deal", testo: "Revisione del bando ai motori termici, rinvio di ETS2, congelamento di nuove regole ambientali per imprese e agricoltura. Passa con una maggioranza PPE + destre, senza bisogno dei socialisti." },
    { titolo: "Reinterpretazione della CEDU", testo: "Pressione coordinata sulla Corte di Strasburgo per restringere l'articolo 8 (vita familiare) e l'articolo 3 nei casi di espulsione. Lettera a nove già firmata, possibile protocollo aggiuntivo." },
    { titolo: "Freno all'integrazione", testo: "Nessuna nuova risorsa propria UE, stop all'estensione del voto a maggioranza qualificata, difesa del veto su fisco e politica estera." },
    { titolo: "Natalità e 'ordine'", testo: "Bonus natalità, sconti fiscali per famiglie numerose, pene più alte e più poteri alla polizia: convergenza larga, ma su misure nazionali più che europee." }
  ],
  divergenze: [
    { titolo: "Ucraina e Russia", testo: "Da Meloni, PiS e SD (sostegno pieno) a Orbán, FPÖ e AfD (stop agli aiuti): è la linea di faglia che impedisce una politica estera comune." },
    { titolo: "Difesa e NATO", testo: "Chi vuole il 3-5% del PIL in armi e chi predica la neutralità: nessun accordo possibile sul riarmo europeo." },
    { titolo: "Economia", testo: "RN e PiS vogliono dazi e Stato; Vox, Reform e Chega vogliono meno tasse e meno Stato. Sui bilanci UE le posizioni sono opposte." },
    { titolo: "Uscita dall'UE", testo: "Tema morto per quasi tutti: l'obiettivo è cambiare l'Unione da dentro, non lasciarla. Solo AfD tiene aperta l'opzione." }
  ]
};
