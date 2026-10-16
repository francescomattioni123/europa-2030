// popolazione: milioni, Eurostat 1 gennaio 2025 (arrotondata); ue: membro dell'Unione.
// Dati politici per paese, aggiornati al 15 ottobre 2026. Fonti per paese nel campo "fonti".
// scenario.coalizione = coalizione più probabile secondo i sondaggi (valutazione); scenario.trend = se la crescita della destra nazionalista continua.
// I campi *_en sono le versioni inglesi dei testi (nome, note, nota, fonte, commento_coalizione): vanno aggiornati insieme a quelli italiani.
// Lo scenario "primo nei sondaggi" è calcolato in pagina dal primo partito in sondaggi.partiti (override con scenario.primo).
window.PAESI = [
 {
  "iso": "380",
  "sigla": "IT",
  "nome": "Italia",
  "governo": {
   "premier": "Giorgia Meloni",
   "partito": "FdI",
   "famiglia": "destra_nazionalista",
   "coalizione": [
    {
     "partito": "FdI",
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Lega",
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "FI",
     "famiglia": "centrodestra"
    },
    {
     "partito": "NM",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2022-10",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": true,
   "note": "Governo stabile al quarto anno; FdI in leggera crescita (27-28%). Novità del 2026: Futuro Nazionale di Vannacci (scissione dalla Lega) al 7-8%, che erode la Lega ma allarga l'area di destra.",
   "note_en": "Stable government in its fourth year; FdI slightly up (27-28%). New in 2026: Vannacci's Futuro Nazionale (a breakaway from the Lega) at 7-8%, which erodes the Lega but widens the right-wing camp."
  },
  "ultime_elezioni": {
   "data": "2022-09",
   "risultati": [
    {
     "partito": "FdI",
     "pct": 26.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "PD",
     "pct": 19.1,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "M5S",
     "pct": 15.4,
     "famiglia": "sinistra"
    },
    {
     "partito": "Lega",
     "pct": 8.8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "FI",
     "pct": 8.1,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Azione-IV",
     "pct": 7.8,
     "famiglia": "centro"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2027-12",
   "tipo": "legislative",
   "note": "Scadenza naturale della legislatura (entro il 22 dicembre 2027); si discute di un voto anticipato in primavera 2027.",
   "note_en": "End of the regular parliamentary term (by 22 December 2027); a snap election in spring 2027 is under discussion."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "SWG (7-12 ottobre 2026)",
   "partiti": [
    {
     "partito": "FdI",
     "pct": 27.7,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "PD",
     "pct": 20.4,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "M5S",
     "pct": 12.7,
     "famiglia": "sinistra"
    },
    {
     "partito": "Futuro Nazionale",
     "pct": 7.6,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "FI",
     "pct": 7.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "AVS",
     "pct": 6.6,
     "famiglia": "sinistra"
    },
    {
     "partito": "Lega",
     "pct": 5.4,
     "famiglia": "destra_nazionalista"
    }
   ],
   "fonte_en": "SWG (7-12 October 2026)"
  },
  "destra_principale": {
   "partito": "FdI",
   "leader": "Giorgia Meloni",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 27.7,
   "pct_ultime_elezioni": 26.0,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "destra_nazionalista",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "Il centrodestra a guida FdI supera il 42-43% e resterebbe maggioranza anche senza Vannacci; il campo largo (PD-M5S-AVS) è competitivo solo se pienamente unito. La destra nazionalista governa già e, salvo crolli, è favorita per il 2027.",
   "commento_coalizione_en": "The FdI-led centre-right is above 42-43% and would retain a majority even without Vannacci; the broad progressive alliance (PD-M5S-AVS) is competitive only if fully united. The nationalist right already governs and, barring a collapse, is the favourite for 2027."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Italian_general_election",
   "https://sondaggibidimedia.com/sondaggio-eumetra-7-ottobre-2026/",
   "https://www.stampaparlamento.it/2026/10/13/sondaggi-meloni-allunga-su-schlein-il-pd-scivola-verso-il-20-centrodestra-oltre-il-42/"
  ],
  "popolazione": 58.9,
  "ue": true,
  "nome_en": "Italy"
 },
 {
  "iso": "250",
  "sigla": "FR",
  "nome": "Francia",
  "governo": {
   "premier": "Sébastien Lecornu",
   "partito": "Renaissance",
   "famiglia": "centro",
   "coalizione": [
    {
     "partito": "Renaissance",
     "famiglia": "centro"
    },
    {
     "partito": "MoDem",
     "famiglia": "centro"
    },
    {
     "partito": "Horizons",
     "famiglia": "centro"
    }
   ],
   "dal": "2025-10",
   "tipo": "minoranza",
   "destra_nazionalista_al_governo": false,
   "note": "Governo Lecornu II (dal 10 ottobre 2025), di minoranza, sopravvive grazie alla non-censura del PS e ha usato il 49.3 per il bilancio 2026. Pressione dei mercati sul debito; il bilancio 2027 in discussione da metà ottobre 2026 è il prossimo test.",
   "note_en": "The Lecornu II minority government (since 10 October 2025) survives thanks to the PS declining to censure it and used Article 49.3 to pass the 2026 budget. Market pressure on the debt; the 2027 budget, under debate from mid-October 2026, is the next test."
  },
  "ultime_elezioni": {
   "data": "2024-07",
   "risultati": [
    {
     "partito": "RN",
     "pct": 29.3,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "NFP",
     "pct": 28.0,
     "famiglia": "sinistra"
    },
    {
     "partito": "Ensemble",
     "pct": 20.0,
     "famiglia": "centro"
    },
    {
     "partito": "LR",
     "pct": 6.6,
     "famiglia": "centrodestra"
    },
    {
     "partito": "UXD (alleati RN)",
     "pct": 4.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Reconquête",
     "pct": 0.7,
     "famiglia": "destra_nazionalista"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2027-04",
   "tipo": "presidenziali",
   "note": "Presidenziali aprile-maggio 2027 (Le Pen favorita nei sondaggi, eleggibile dopo l'appello del 7/7/2026 ma con ricorso in Cassazione pendente); legislative entro giugno 2029 salvo nuovo scioglimento.",
   "note_en": "Presidential election April-May 2027 (Le Pen leads the polls, eligible after the appeal ruling of 7 July 2026 but with an appeal to the Court of Cassation pending); legislative elections by June 2029 unless parliament is dissolved again."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media sondaggi legislative (15 ottobre 2026)",
   "partiti": [
    {
     "partito": "RN",
     "pct": 35.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "NFP (LFI/PS/EELV)",
     "pct": 24.0,
     "famiglia": "sinistra"
    },
    {
     "partito": "Ensemble",
     "pct": 14.0,
     "famiglia": "centro"
    },
    {
     "partito": "LR",
     "pct": 12.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Reconquête",
     "pct": 4.0,
     "famiglia": "destra_nazionalista"
    }
   ],
   "fonte_en": "PolitPro, legislative polling average (15 October 2026)"
  },
  "destra_principale": {
   "partito": "RN",
   "leader": "Marine Le Pen / Jordan Bardella",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 35.0,
   "pct_ultime_elezioni": 29.3,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centro",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "Con il RN al 35% e Le Pen al 32-37% al primo turno delle presidenziali, la destra nazionalista è la favorita per guidare esecutivo ed Eliseo nel 2027; il fronte repubblicano è indebolito e il RN potrebbe governare da solo o con parte di LR.",
   "commento_coalizione_en": "With RN at 35% and Le Pen at 32-37% in the first round of the presidential election, the nationalist right is the favourite to lead both the government and the Élysée in 2027; the republican front is weakened and RN could govern alone or with part of LR."
  },
  "fonti": [
   "https://politpro.eu/en/france",
   "https://fr.wikipedia.org/wiki/Gouvernement_Lecornu_II",
   "https://www.rts.ch/info/monde/2026/article/condamnee-en-appel-marine-le-pen-pourra-se-presenter-en-2027-29296439.html"
  ],
  "capo_stato": {
   "nome": "Emmanuel Macron",
   "partito": "Renaissance",
   "famiglia": "centro",
   "dal": "2017-05",
   "nota": "Nella Quinta Repubblica è il presidente a guidare l'esecutivo: il primo ministro Lecornu gestisce un governo di minoranza fino alle presidenziali del 2027.",
   "nota_en": "In the Fifth Republic the president leads the executive: Prime Minister Lecornu runs a minority government until the 2027 presidential election."
  },
  "popolazione": 68.6,
  "ue": true,
  "nome_en": "France"
 },
 {
  "iso": "276",
  "sigla": "DE",
  "nome": "Germania",
  "governo": {
   "premier": "Friedrich Merz",
   "partito": "CDU",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "CDU/CSU",
     "famiglia": "centrodestra"
    },
    {
     "partito": "SPD",
     "famiglia": "centrosinistra"
    }
   ],
   "dal": "2025-05",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "Grande coalizione nero-rossa molto impopolare (circa 89% di insoddisfatti nel DeutschlandTrend di ottobre 2026) e logorata da liti su sanità, fisco e pensioni; Merz esclude elezioni anticipate. L'AfD ha superato stabilmente la Union nei sondaggi.",
   "note_en": "Deeply unpopular black-red grand coalition (around 89% dissatisfied in the October 2026 DeutschlandTrend), worn down by rows over health, tax and pensions; Merz rules out an early election. The AfD has consistently overtaken the Union in the polls."
  },
  "ultime_elezioni": {
   "data": "2025-02",
   "risultati": [
    {
     "partito": "CDU/CSU",
     "pct": 28.5,
     "famiglia": "centrodestra"
    },
    {
     "partito": "AfD",
     "pct": 20.8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "SPD",
     "pct": 16.4,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Grüne",
     "pct": 11.6,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Linke",
     "pct": 8.8,
     "famiglia": "sinistra"
    },
    {
     "partito": "BSW",
     "pct": 5.0,
     "famiglia": "sinistra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2029-03",
   "tipo": "legislative",
   "note": "Scadenza naturale (entro il 26 marzo 2029); coalizione senza maggioranza nei sondaggi ma Merz esclude il voto anticipato.",
   "note_en": "End of the regular term (by 26 March 2029); the coalition has no majority in the polls but Merz rules out a snap election."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "INSA (9-12 ottobre 2026)",
   "partiti": [
    {
     "partito": "AfD",
     "pct": 30.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "CDU/CSU",
     "pct": 18.5,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Grüne",
     "pct": 14.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "SPD",
     "pct": 13.5,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Linke",
     "pct": 10.0,
     "famiglia": "sinistra"
    },
    {
     "partito": "FDP",
     "pct": 4.5,
     "famiglia": "centro"
    },
    {
     "partito": "BSW",
     "pct": 3.5,
     "famiglia": "sinistra"
    }
   ],
   "fonte_en": "INSA (9-12 October 2026)"
  },
  "destra_principale": {
   "partito": "AfD",
   "leader": "Alice Weidel",
   "gruppo_pe": "ESN",
   "pct_sondaggio": 30.0,
   "pct_ultime_elezioni": 20.8,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrodestra",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "L'AfD è primo partito al 26-30% e Union, SPD e Verdi insieme non arrivano al 50%: dopo un voto anticipato una maggioranza senza l'AfD non esiste nei numeri, e il cordone (Brandmauer) regge solo finché la CDU accetta di governare con tutta la sinistra. Qui si assume che ceda: governo a guida AfD o AfD-Union.",
   "commento_coalizione_en": "The AfD is the largest party at 26-30% and the Union, SPD and Greens together fall short of 50%: after a snap election no majority without the AfD exists in the numbers, and the firewall (Brandmauer) holds only as long as the CDU is willing to govern with the entire left. The assumption here is that it gives way: an AfD-led or AfD-Union government."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_German_federal_election",
   "https://dawum.de/Bundestag/INSA/",
   "https://www.finanznachrichten.de/nachrichten-2026-10/69733921-ard-deutschlandtrend-afd-weiter-in-der-sonntagsfrage-deutlich-vor-der-union-007.htm"
  ],
  "anticipate": {
   "data": "2028-03",
   "nota": "Coalizione Merz senza maggioranza nei sondaggi e con l'89% di insoddisfatti: una crisi prima della scadenza del 2029 è lo sbocco più probabile.",
   "nota_en": "The Merz coalition has no majority in the polls and 89% dissatisfied: a crisis before the 2029 end of term is the most likely outcome."
  },
  "popolazione": 83.6,
  "ue": true,
  "nome_en": "Germany"
 },
 {
  "iso": "724",
  "sigla": "ES",
  "nome": "Spagna",
  "governo": {
   "premier": "Pedro Sánchez",
   "partito": "PSOE",
   "famiglia": "centrosinistra",
   "coalizione": [
    {
     "partito": "PSOE",
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Sumar",
     "famiglia": "sinistra"
    }
   ],
   "dal": "2023-11",
   "tipo": "minoranza",
   "destra_nazionalista_al_governo": false,
   "note": "Dopo la rottura con Junts (ottobre 2025) e la bocciatura dei decreti sulla casa, Sánchez ha sciolto le Cortes il 5 ottobre 2026 e convocato elezioni anticipate per il 29 novembre 2026; il governo resta in carica fino all'insediamento del successivo.",
   "note_en": "After the break with Junts (October 2025) and the defeat of the housing decrees, Sánchez dissolved the Cortes on 5 October 2026 and called a snap election for 29 November 2026; the government remains in office until its successor is sworn in."
  },
  "ultime_elezioni": {
   "data": "2023-07",
   "risultati": [
    {
     "partito": "PP",
     "pct": 33.1,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PSOE",
     "pct": 31.7,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Vox",
     "pct": 12.4,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Sumar",
     "pct": 12.3,
     "famiglia": "sinistra"
    },
    {
     "partito": "ERC",
     "pct": 1.9,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Junts",
     "pct": 1.6,
     "famiglia": "centrodestra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2026-11",
   "tipo": "legislative",
   "note": "Elezioni generali anticipate il 29 novembre 2026 (scadenza naturale era agosto 2027).",
   "note_en": "Snap general election on 29 November 2026 (the regular term would have ended in August 2027)."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "GAD3 per Vocento (6-8 ottobre 2026)",
   "partiti": [
    {
     "partito": "PP",
     "pct": 31.4,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PSOE",
     "pct": 26.4,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Vox",
     "pct": 18.2,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Sumar",
     "pct": 7.4,
     "famiglia": "sinistra"
    },
    {
     "partito": "ERC",
     "pct": 2.6,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Podemos",
     "pct": 2.3,
     "famiglia": "sinistra"
    },
    {
     "partito": "SALF",
     "pct": 1.8,
     "famiglia": "destra_nazionalista"
    }
   ],
   "fonte_en": "GAD3 for Vocento (6-8 October 2026)"
  },
  "destra_principale": {
   "partito": "Vox",
   "leader": "Santiago Abascal",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 18.2,
   "pct_ultime_elezioni": 12.4,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrosinistra",
   "partner_trend": true,
   "coalizione": "centrodestra",
   "partner_coalizione": true,
   "commento_coalizione": "PP e Vox sommano circa 198 seggi (maggioranza assoluta 176): il 29 novembre è molto probabile un governo Feijóo con Vox come partner o appoggio esterno. Vox è in forte crescita (18-19%) ma resta junior partner; difficile che guidi da solo l'esecutivo entro il 2030.",
   "partner_primo": true,
   "commento_coalizione_en": "PP and Vox together total around 198 seats (absolute majority 176): on 29 November a Feijóo government with Vox as a partner or providing external support is very likely. Vox is growing strongly (18-19%) but remains the junior partner; it is unlikely to lead the government on its own by 2030."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Spanish_general_election",
   "https://www.democrata.es/elecciones-generales-espana/herramientas/encuestas",
   "https://electomania.es/sanchez-disuelve-las-cortes-y-convoca-elecciones-generales-para-el-29-de-noviembre/"
  ],
  "popolazione": 49.1,
  "ue": true,
  "nome_en": "Spain"
 },
 {
  "iso": "826",
  "sigla": "GB",
  "nome": "Regno Unito",
  "governo": {
   "premier": "Andy Burnham",
   "partito": "Labour",
   "famiglia": "centrosinistra",
   "coalizione": [
    {
     "partito": "Labour",
     "famiglia": "centrosinistra"
    }
   ],
   "dal": "2026-07",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "Burnham ha sostituito Starmer il 20 luglio 2026 dopo le sue dimissioni (eletto leader senza avversari); ha rimosso Reeves e dato una svolta sociale. Il 'Burnham bounce' ha riportato il Labour davanti a Reform UK, indebolito anche dallo scandalo della donazione a Farage.",
   "note_en": "Burnham replaced Starmer on 20 July 2026 after the latter's resignation (elected leader unopposed); he removed Reeves and shifted the party leftwards on social policy. The 'Burnham bounce' has put Labour back ahead of Reform UK, which has also been weakened by the scandal over the donation to Farage."
  },
  "ultime_elezioni": {
   "data": "2024-07",
   "risultati": [
    {
     "partito": "Labour",
     "pct": 33.7,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Conservative",
     "pct": 23.7,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Reform UK",
     "pct": 14.3,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Lib Dem",
     "pct": 12.2,
     "famiglia": "centro"
    },
    {
     "partito": "Green",
     "pct": 6.7,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "SNP",
     "pct": 2.5,
     "famiglia": "centrosinistra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2029-08",
   "tipo": "legislative",
   "note": "Scadenza legale 15 agosto 2029; Burnham ha una larga maggioranza e non ha annunciato voto anticipato.",
   "note_en": "Statutory deadline 15 August 2029; Burnham has a large majority and has not announced a snap election."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "YouGov (11-12 ottobre 2026)",
   "partiti": [
    {
     "partito": "Labour",
     "pct": 24.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Conservative",
     "pct": 23.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Reform UK",
     "pct": 21.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Lib Dem",
     "pct": 12.0,
     "famiglia": "centro"
    },
    {
     "partito": "Green",
     "pct": 11.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "SNP",
     "pct": 3.0,
     "famiglia": "centrosinistra"
    }
   ],
   "fonte_en": "YouGov (11-12 October 2026)"
  },
  "destra_principale": {
   "partito": "Reform UK",
   "leader": "Nigel Farage",
   "gruppo_pe": "n/a",
   "pct_sondaggio": 21.0,
   "pct_ultime_elezioni": 14.3,
   "trend": "in_calo"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrosinistra",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "Assunzione editoriale della piattaforma: Reform UK vince le elezioni del 2029. Nei sondaggi di ottobre 2026 Reform è terza (21%) dietro Labour (24%) e Tory (23%), dopo aver guidato per oltre un anno sopra il 30%: qui si assume che torni a quei livelli e che il maggioritario trasformi il plateau in una maggioranza di seggi per Farage.",
   "primo": "destra_nazionalista",
   "commento_coalizione_en": "Editorial assumption of the platform: Reform UK wins the 2029 election. In the October 2026 polls Reform is third (21%) behind Labour (24%) and the Tories (23%), after leading for over a year above 30%: the assumption here is that it returns to those levels and that first-past-the-post turns the plateau into a majority of seats for Farage."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_United_Kingdom_general_election",
   "https://en.wikipedia.org/wiki/Andy_Burnham",
   "https://www.aljazeera.com/news/2026/9/30/burnham-bounce-why-labours-rising-again-reforms-slipping"
  ],
  "popolazione": 69.3,
  "ue": false,
  "nome_en": "United Kingdom"
 },
 {
  "iso": "528",
  "sigla": "NL",
  "nome": "Paesi Bassi",
  "governo": {
   "premier": "Rob Jetten",
   "partito": "D66",
   "famiglia": "centro",
   "coalizione": [
    {
     "partito": "D66",
     "famiglia": "centro"
    },
    {
     "partito": "VVD",
     "famiglia": "centrodestra"
    },
    {
     "partito": "CDA",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2026-02",
   "tipo": "minoranza",
   "destra_nazionalista_al_governo": false,
   "note": "Primo gabinetto di minoranza dal 1945 (66 seggi su 150), insediato il 23 febbraio 2026 dopo quattro mesi di formazione; cerca maggioranze variabili (PRO su clima/azoto, JA21 su migrazione). Soddisfazione al 24%: D66 dimezzata nei sondaggi, VVD ai minimi, JA21 ai massimi.",
   "note_en": "First minority cabinet since 1945 (66 of 150 seats), sworn in on 23 February 2026 after four months of coalition talks; it seeks shifting majorities (PRO on climate/nitrogen, JA21 on migration). Approval at 24%: D66 halved in the polls, VVD at record lows, JA21 at record highs."
  },
  "ultime_elezioni": {
   "data": "2025-10",
   "risultati": [
    {
     "partito": "D66",
     "pct": 16.9,
     "famiglia": "centro"
    },
    {
     "partito": "PVV",
     "pct": 16.7,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "VVD",
     "pct": 14.2,
     "famiglia": "centrodestra"
    },
    {
     "partito": "GL-PvdA",
     "pct": 12.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "CDA",
     "pct": 11.8,
     "famiglia": "centrodestra"
    },
    {
     "partito": "JA21",
     "pct": 6.0,
     "famiglia": "destra_nazionalista"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2030-03",
   "tipo": "legislative",
   "note": "Scadenza regolare (data da confermare). Gabinetto di minoranza molto fragile: elezioni anticipate probabili ben prima.",
   "note_en": "Regular end of term (date to be confirmed). Very fragile minority cabinet: a snap election is likely well before then."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media sondaggi (15 ottobre 2026)",
   "partiti": [
    {
     "partito": "PRO (ex GL-PvdA)",
     "pct": 18.2,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PVV",
     "pct": 12.3,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "D66",
     "pct": 11.7,
     "famiglia": "centro"
    },
    {
     "partito": "VVD",
     "pct": 11.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "JA21",
     "pct": 10.5,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "CDA",
     "pct": 9.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "FvD",
     "pct": 8.0,
     "famiglia": "destra_nazionalista"
    }
   ],
   "fonte_en": "PolitPro, polling average (15 October 2026)"
  },
  "destra_principale": {
   "partito": "PVV",
   "leader": "Geert Wilders",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 12.3,
   "pct_ultime_elezioni": 16.7,
   "trend": "in_calo"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centro",
   "coalizione": "centrosinistra",
   "commento_coalizione": "Il PVV è in calo ma la destra nazionalista nel complesso (PVV+JA21+FvD circa 31%) cresce, trainata da JA21 di Eerdmans, più accettabile come partner per VVD e CDA. Con i numeri attuali guiderebbe PRO (Klaver), ma un governo VVD-CDA-JA21 (eventualmente con PVV) è uno scenario realistico se la coalizione Jetten cade.",
   "commento_coalizione_en": "The PVV is declining but the nationalist right as a whole (PVV+JA21+FvD, around 31%) is growing, driven by Eerdmans' JA21, which is more acceptable as a partner for VVD and CDA. On current numbers PRO (Klaver) would lead, but a VVD-CDA-JA21 government (possibly with the PVV) is a realistic scenario if the Jetten coalition falls."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Dutch_general_election",
   "https://politpro.eu/en/netherlands",
   "https://www.parlement.com/kabinet-jetten-2026-heden"
  ],
  "anticipate": {
   "data": "2027-09",
   "nota": "Primo gabinetto di minoranza dal 1945, soddisfazione al 24%: caduta e voto anticipato probabili ben prima del 2030.",
   "nota_en": "First minority cabinet since 1945, approval at 24%: a collapse and a snap election are likely well before 2030."
  },
  "popolazione": 18.0,
  "ue": true,
  "nome_en": "Netherlands"
 },
 {
  "iso": "056",
  "sigla": "BE",
  "nome": "Belgio",
  "governo": {
   "premier": "Bart De Wever",
   "partito": "N-VA",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "N-VA",
     "famiglia": "centrodestra"
    },
    {
     "partito": "MR",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Les Engagés",
     "famiglia": "centro"
    },
    {
     "partito": "CD&V",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Vooruit",
     "famiglia": "centrosinistra"
    }
   ],
   "dal": "2025-02",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "Coalizione 'Arizona' di maggioranza impegnata in austerità e riforme (pensioni, lavoro) contestate dai sindacati; De Wever resta popolare e N-VA è l'unico partito di governo premiato nei sondaggi, mentre il Vlaams Belang lo supera in diverse rilevazioni fiamminghe.",
   "note_en": "The 'Arizona' majority coalition is pursuing austerity and reforms (pensions, labour) contested by the trade unions; De Wever remains popular and N-VA is the only governing party rewarded in the polls, while Vlaams Belang overtakes it in several Flemish surveys."
  },
  "ultime_elezioni": {
   "data": "2024-06",
   "risultati": [
    {
     "partito": "N-VA",
     "pct": 16.7,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Vlaams Belang",
     "pct": 13.8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "MR",
     "pct": 10.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PTB-PVDA",
     "pct": 9.9,
     "famiglia": "sinistra"
    },
    {
     "partito": "Vooruit",
     "pct": 8.1,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PS",
     "pct": 8.0,
     "famiglia": "centrosinistra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2029-06",
   "tipo": "legislative",
   "note": "Scadenza fissa quinquennale (giugno 2029, insieme a regionali ed europee).",
   "note_en": "Fixed five-year term (June 2029, alongside regional and European elections)."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, medie regionali (15 ottobre 2026): cifre per regione, non nazionali",
   "partiti": [
    {
     "partito": "Vlaams Belang (Fiandre)",
     "pct": 27.8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "N-VA (Fiandre)",
     "pct": 23.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "CD&V (Fiandre)",
     "pct": 13.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Vooruit (Fiandre)",
     "pct": 12.9,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PS (Vallonia)",
     "pct": 29.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "MR (Vallonia)",
     "pct": 20.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PTB (Vallonia)",
     "pct": 18.9,
     "famiglia": "sinistra"
    }
   ],
   "fonte_en": "PolitPro, regional averages (15 October 2026): figures by region, not national"
  },
  "destra_principale": {
   "partito": "Vlaams Belang",
   "leader": "Tom Van Grieken",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 27.8,
   "pct_ultime_elezioni": 13.8,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrodestra",
   "coalizione": "centrodestra",
   "commento_coalizione": "Il Vlaams Belang è primo partito nelle Fiandre (26-28%) ma resta escluso dal cordone sanitario: con i numeri attuali un nuovo esecutivo verrebbe ancora formato da N-VA e MR. Solo se N-VA rompesse il cordone dopo il 2029 (ipotesi che De Wever esclude) la destra nazionalista potrebbe entrare al governo federale o fiammingo.",
   "commento_coalizione_en": "Vlaams Belang is the largest party in Flanders (26-28%) but remains excluded by the cordon sanitaire: on current numbers a new government would still be formed by N-VA and MR. Only if N-VA broke the cordon after 2029 (a possibility De Wever rules out) could the nationalist right enter the federal or Flemish government."
  },
  "fonti": [
   "https://politpro.eu/nl/belgie",
   "https://www.vrt.be/vrtnws/nl/2026/05/26/de-stemming-peiling/",
   "https://en.wikipedia.org/wiki/2024_Belgian_federal_election"
  ],
  "popolazione": 11.8,
  "ue": true,
  "nome_en": "Belgium"
 },
 {
  "iso": "040",
  "sigla": "AT",
  "nome": "Austria",
  "governo": {
   "premier": "Christian Stocker",
   "partito": "ÖVP",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "ÖVP",
     "famiglia": "centrodestra"
    },
    {
     "partito": "SPÖ",
     "famiglia": "centrosinistra"
    },
    {
     "partito": "NEOS",
     "famiglia": "centro"
    }
   ],
   "dal": "2025-03",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "Coalizione tripartita nero-rosso-rosa in forte difficoltà: 63% di insoddisfatti, FPÖ al 37-41% e coalizione senza maggioranza nei sondaggi. A ottobre 2026 Babler ha annunciato il ritiro graduale dalla guida SPÖ; Stocker esclude elezioni anticipate.",
   "note_en": "The black-red-pink three-party coalition is in serious difficulty: 63% dissatisfied, FPÖ at 37-41% and the coalition without a majority in the polls. In October 2026 Babler announced his gradual withdrawal from the SPÖ leadership; Stocker rules out an early election."
  },
  "ultime_elezioni": {
   "data": "2024-09",
   "risultati": [
    {
     "partito": "FPÖ",
     "pct": 28.8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "ÖVP",
     "pct": 26.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SPÖ",
     "pct": 21.1,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "NEOS",
     "pct": 9.1,
     "famiglia": "centro"
    },
    {
     "partito": "Grüne",
     "pct": 8.2,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "KPÖ",
     "pct": 2.4,
     "famiglia": "sinistra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2029-09",
   "tipo": "legislative",
   "note": "Scadenza naturale (autunno 2029); pressione crescente per il voto anticipato data la crisi della coalizione.",
   "note_en": "End of the regular term (autumn 2029); growing pressure for a snap election given the coalition crisis."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "IFDD (7-10 ottobre 2026)",
   "partiti": [
    {
     "partito": "FPÖ",
     "pct": 40.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "ÖVP",
     "pct": 19.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Grüne",
     "pct": 14.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "SPÖ",
     "pct": 13.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "NEOS",
     "pct": 7.0,
     "famiglia": "centro"
    },
    {
     "partito": "KPÖ",
     "pct": 5.0,
     "famiglia": "sinistra"
    }
   ],
   "fonte_en": "IFDD (7-10 October 2026)"
  },
  "destra_principale": {
   "partito": "FPÖ",
   "leader": "Herbert Kickl",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 40.0,
   "pct_ultime_elezioni": 28.8,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrodestra",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "Con la FPÖ vicina al 40% e la coalizione sotto il 50%, alle prossime elezioni Kickl sarebbe quasi certamente incaricato e potrebbe governare con la ÖVP come junior partner o persino sfiorare la maggioranza assoluta in seggi. È il caso più maturo in Europa per un governo guidato dalla destra nazionalista.",
   "commento_coalizione_en": "With the FPÖ close to 40% and the coalition below 50%, at the next election Kickl would almost certainly be asked to form a government and could govern with the ÖVP as junior partner or even come close to an absolute majority of seats. It is the most advanced case in Europe for a government led by the nationalist right."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Austrian_legislative_election",
   "https://www.boerse-express.com/news/articles/fpoe-bei-38-prozent-umfrage-sieht-oesterreichs-koalition-ohne-mehrheit-951673",
   "https://orf.at/stories/3444111/"
  ],
  "anticipate": {
   "data": "2027-09",
   "nota": "Coalizione tripartita sotto il 50% nei sondaggi e in crisi di leadership: il voto anticipato è più probabile della scadenza naturale del 2029.",
   "nota_en": "Three-party coalition below 50% in the polls and in a leadership crisis: a snap election is more likely than the regular end of term in 2029."
  },
  "popolazione": 9.2,
  "ue": true,
  "nome_en": "Austria"
 },
 {
  "iso": "616",
  "sigla": "PL",
  "nome": "Polonia",
  "governo": {
   "premier": "Donald Tusk",
   "partito": "KO",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "KO",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Polska 2050",
     "famiglia": "centro"
    },
    {
     "partito": "PSL",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Lewica",
     "famiglia": "centrosinistra"
    }
   ],
   "dal": "2023-12",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "Coalizione pro-UE di Tusk a un anno dal voto del 2027, con il presidente Karol Nawrocki (area PiS) che usa il veto. Polska 2050 è crollata nei sondaggi (circa 1%), mentre la destra è frammentata tra PiS, Konfederacja, Korona (KKP) e il nuovo partito Rozwój Plus di Morawiecki.",
   "note_en": "Tusk's pro-EU coalition is one year from the 2027 election, with President Karol Nawrocki (PiS camp) wielding his veto. Polska 2050 has collapsed in the polls (around 1%), while the right is fragmented between PiS, Konfederacja, Korona (KKP) and Morawiecki's new party Rozwój Plus."
  },
  "ultime_elezioni": {
   "data": "2023-10",
   "risultati": [
    {
     "partito": "PiS",
     "pct": 35.4,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "KO",
     "pct": 30.7,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Trzecia Droga",
     "pct": 14.4,
     "famiglia": "centro"
    },
    {
     "partito": "Lewica",
     "pct": 8.6,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Konfederacja",
     "pct": 7.2,
     "famiglia": "destra_nazionalista"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2027-10",
   "tipo": "legislative",
   "note": "Scadenza naturale della legislatura (autunno 2027).",
   "note_en": "End of the regular parliamentary term (autumn 2027)."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "KO",
     "pct": 33.7,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PiS",
     "pct": 21.7,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Konfederacja",
     "pct": 14.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "KKP",
     "pct": 9.2,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Lewica",
     "pct": 7.1,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Rozwój Plus",
     "pct": 5.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Razem",
     "pct": 4.0,
     "famiglia": "sinistra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "PiS",
   "leader": "Jarosław Kaczyński",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 21.7,
   "pct_ultime_elezioni": 35.4,
   "trend": "in_calo"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrodestra",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "KO è primo partito ma la coalizione di governo è stimata attorno al 45% dei seggi; PiS, Konfederacja e KKP (più Rozwój Plus) sommano circa il 50% e potrebbero formare una maggioranza di destra, anche se PiS perde consensi a favore di Konfederacja e Korona. La destra radicale può realisticamente governare nel 2027 in coalizione a guida PiS.",
   "commento_coalizione_en": "KO is the largest party but the governing coalition is estimated at around 45% of seats; PiS, Konfederacja and KKP (plus Rozwój Plus) total around 50% and could form a right-wing majority, even though PiS is losing support to Konfederacja and Korona. The radical right can realistically govern in 2027 in a PiS-led coalition."
  },
  "fonti": [
   "https://politpro.eu/en/poland",
   "https://notesfrompoland.com/2026/10/15/everything-you-need-to-know-one-year-ahead-of-polands-parliamentary-elections/",
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Polish_parliamentary_election"
  ],
  "popolazione": 36.6,
  "ue": true,
  "nome_en": "Poland"
 },
 {
  "iso": "348",
  "sigla": "HU",
  "nome": "Ungheria",
  "governo": {
   "premier": "Péter Magyar",
   "partito": "Tisza",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "Tisza",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2026-05",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "Alle elezioni del 12 aprile 2026 Tisza ha ottenuto 141 seggi su 199 (maggioranza dei due terzi), ponendo fine a 16 anni di governo Orbán; Magyar è premier dal 9 maggio 2026. Orbán è stato rieletto presidente di Fidesz a giugno 2026 e resta leader dell'opposizione.",
   "note_en": "In the election of 12 April 2026 Tisza won 141 of 199 seats (a two-thirds majority), ending 16 years of Orbán government; Magyar has been prime minister since 9 May 2026. Orbán was re-elected president of Fidesz in June 2026 and remains leader of the opposition."
  },
  "ultime_elezioni": {
   "data": "2026-04",
   "risultati": [
    {
     "partito": "Tisza",
     "pct": 53.2,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Fidesz-KDNP",
     "pct": 38.6,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Mi Hazánk",
     "pct": 5.6,
     "famiglia": "destra_nazionalista"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2030-04",
   "tipo": "legislative",
   "note": "Scadenza naturale della legislatura.",
   "note_en": "End of the regular parliamentary term."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "Tisza",
     "pct": 63.1,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Fidesz-KDNP",
     "pct": 25.6,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Mi Hazánk",
     "pct": 8.5,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "MKKP",
     "pct": 1.4,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "Fidesz-KDNP",
   "leader": "Viktor Orbán",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 25.6,
   "pct_ultime_elezioni": 38.6,
   "trend": "in_calo"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "coalizione": "centrodestra",
   "commento_coalizione": "Tisza domina con oltre il 60% nei sondaggi; Fidesz è crollato dal 38,6% al 25-26% con un lieve recupero negli ultimi mesi, mentre Mi Hazánk (ESN) cresce all'8-10%. Un ritorno della destra nazionalista al governo entro il 2030 appare oggi improbabile.",
   "commento_coalizione_en": "Tisza dominates with over 60% in the polls; Fidesz has collapsed from 38.6% to 25-26% with a slight recovery in recent months, while Mi Hazánk (ESN) is growing to 8-10%. A return of the nationalist right to government by 2030 currently looks unlikely."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Hungarian_parliamentary_election",
   "https://politpro.eu/en/hungary"
  ],
  "popolazione": 9.6,
  "ue": true,
  "nome_en": "Hungary"
 },
 {
  "iso": "203",
  "sigla": "CZ",
  "nome": "Repubblica Ceca",
  "governo": {
   "premier": "Andrej Babiš",
   "partito": "ANO",
   "famiglia": "destra_nazionalista",
   "coalizione": [
    {
     "partito": "ANO",
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "SPD",
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Motoristé",
     "famiglia": "destra_nazionalista"
    }
   ],
   "dal": "2025-12",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": true,
   "note": "Terzo governo Babiš (ANO 9 ministri, Motoristé 4, SPD 3), nominato il 9 dicembre 2025; Tomio Okamura (SPD) è presidente della Camera. ANO è classificato qui come destra nazionalista perché membro di Patrioti per l'Europa e alleato di SPD, pur restando un partito populista a vocazione tecnocratica. Il governo ha superato una mozione di sfiducia a ottobre 2026 (101-83), ma alle amministrative del 9-10 ottobre ANO ha perso terreno.",
   "note_en": "Third Babiš government (ANO 9 ministers, Motoristé 4, SPD 3), appointed on 9 December 2025; Tomio Okamura (SPD) is Speaker of the Chamber of Deputies. ANO is classified here as nationalist right because it is a member of Patriots for Europe and allied with SPD, while remaining a populist party with a technocratic bent. The government survived a no-confidence motion in October 2026 (101-83), but ANO lost ground in the local elections of 9-10 October."
  },
  "ultime_elezioni": {
   "data": "2025-10",
   "risultati": [
    {
     "partito": "ANO",
     "pct": 34.5,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "SPOLU",
     "pct": 23.4,
     "famiglia": "centrodestra"
    },
    {
     "partito": "STAN",
     "pct": 11.2,
     "famiglia": "centro"
    },
    {
     "partito": "Piráti",
     "pct": 9.0,
     "famiglia": "centro"
    },
    {
     "partito": "SPD",
     "pct": 7.8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Motoristé",
     "pct": 6.8,
     "famiglia": "destra_nazionalista"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2029-10",
   "tipo": "legislative",
   "note": "Scadenza naturale; presidenziali a gennaio 2028.",
   "note_en": "End of the regular term; presidential election in January 2028."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "ANO",
     "pct": 31.7,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "STAN",
     "pct": 15.6,
     "famiglia": "centro"
    },
    {
     "partito": "ODS",
     "pct": 13.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Piráti",
     "pct": 7.9,
     "famiglia": "centro"
    },
    {
     "partito": "SPD",
     "pct": 7.5,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Motoristé",
     "pct": 4.6,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "TOP 09",
     "pct": 3.2,
     "famiglia": "centrodestra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "ANO",
   "leader": "Andrej Babiš",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 31.7,
   "pct_ultime_elezioni": 34.5,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "destra_nazionalista",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "ANO resta primo con il 31-32% ma l'attuale maggioranza ANO-SPD-Motoristé sarebbe a rischio: i Motoristé sono sotto la soglia del 5% e l'opposizione (STAN, ODS, Piráti) cresce. La destra radicale (SPD) governa già oggi come partner minore e potrebbe restarlo, ma dipende dalla tenuta di ANO.",
   "commento_coalizione_en": "ANO remains first at 31-32% but the current ANO-SPD-Motoristé majority would be at risk: Motoristé are below the 5% threshold and the opposition (STAN, ODS, Piráti) is growing. The radical right (SPD) already governs today as a junior partner and could remain so, but this depends on ANO holding up."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2025_Czech_parliamentary_election",
   "https://politpro.eu/en/czechia",
   "https://balkaninsight.com/2026/10/12/czech-local-elections-deliver-warning-to-babiss-governing-coalition/rd/"
  ],
  "popolazione": 10.9,
  "ue": true,
  "nome_en": "Czech Republic"
 },
 {
  "iso": "703",
  "sigla": "SK",
  "nome": "Slovacchia",
  "governo": {
   "premier": "Robert Fico",
   "partito": "Smer-SD",
   "famiglia": "sinistra",
   "coalizione": [
    {
     "partito": "Smer-SD",
     "famiglia": "sinistra"
    },
    {
     "partito": "Hlas-SD",
     "famiglia": "centrosinistra"
    },
    {
     "partito": "SNS",
     "famiglia": "destra_nazionalista"
    }
   ],
   "dal": "2023-10",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": true,
   "note": "Smer è nominalmente socialdemocratico ma ha compiuto una svolta nazional-populista e filo-russa. Il 29 settembre 2026 il parlamento ha rimosso il vicepremier Taraba (quota SNS); la maggioranza è scesa a 76-78 seggi su 150 e Fico ha evocato elezioni anticipate a gennaio 2027 e una possibile alleanza con Republika.",
   "note_en": "Smer is nominally social democratic but has taken a national-populist and pro-Russian turn. On 29 September 2026 parliament removed Deputy Prime Minister Taraba (SNS quota); the majority has fallen to 76-78 of 150 seats and Fico has floated a snap election in January 2027 and a possible alliance with Republika."
  },
  "ultime_elezioni": {
   "data": "2023-09",
   "risultati": [
    {
     "partito": "Smer-SD",
     "pct": 22.9,
     "famiglia": "sinistra"
    },
    {
     "partito": "PS",
     "pct": 18.0,
     "famiglia": "centro"
    },
    {
     "partito": "Hlas-SD",
     "pct": 14.7,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "OĽaNO (Slovensko)",
     "pct": 8.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "KDH",
     "pct": 6.8,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SaS",
     "pct": 6.3,
     "famiglia": "centro"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2027-09",
   "tipo": "legislative",
   "note": "Scadenza naturale; possibili anticipate a gennaio 2027 secondo Fico (richiede maggioranza qualificata).",
   "note_en": "End of the regular term; a possible snap election in January 2027 according to Fico (requires a qualified majority)."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "PS",
     "pct": 19.2,
     "famiglia": "centro"
    },
    {
     "partito": "Smer-SD",
     "pct": 17.3,
     "famiglia": "sinistra"
    },
    {
     "partito": "Republika",
     "pct": 12.2,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Slovensko",
     "pct": 9.5,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SaS",
     "pct": 8.1,
     "famiglia": "centro"
    },
    {
     "partito": "Hlas-SD",
     "pct": 7.1,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "KDH",
     "pct": 6.6,
     "famiglia": "centrodestra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "Republika",
   "leader": "Milan Uhrík",
   "gruppo_pe": "ESN",
   "pct_sondaggio": 12.2,
   "pct_ultime_elezioni": 4.7,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "sinistra",
   "status_quo": "sinistra",
   "partner_trend": true,
   "coalizione": "centro",
   "commento_coalizione": "Le opposizioni (PS, SaS, KDH, Slovensko, Demokrati) sommano circa il 48% contro il 36% di Smer-Hlas-Republika, con SNS sotto soglia: con i numeri attuali guiderebbe PS. Se la crescita di Republika continua, lo scenario alternativo è un governo Smer-Republika a guida Fico, nazional-populista pur se nominalmente di sinistra.",
   "commento_coalizione_en": "The opposition parties (PS, SaS, KDH, Slovensko, Demokrati) total around 48% against 36% for Smer-Hlas-Republika, with SNS below the threshold: on current numbers PS would lead. If Republika's growth continues, the alternative scenario is a Fico-led Smer-Republika government, national-populist even if nominally left-wing."
  },
  "fonti": [
   "https://politpro.eu/en/slovakia",
   "https://spectator.sme.sk/politics-and-society/c/fico-january-early-election-coalition-crisis"
  ],
  "anticipate": {
   "data": "2027-01",
   "nota": "Fico ha evocato elezioni anticipate a gennaio 2027 dopo la rottura con la SNS.",
   "nota_en": "Fico has floated a snap election in January 2027 after the break with the SNS."
  },
  "popolazione": 5.4,
  "ue": true,
  "nome_en": "Slovakia"
 },
 {
  "iso": "642",
  "sigla": "RO",
  "nome": "Romania",
  "governo": {
   "premier": "Ilie Bolojan",
   "partito": "PNL",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "PNL",
     "famiglia": "centrodestra"
    },
    {
     "partito": "USR",
     "famiglia": "centro"
    },
    {
     "partito": "UDMR",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2025-06",
   "tipo": "ad_interim",
   "destra_nazionalista_al_governo": false,
   "note": "Il PSD è uscito dalla grande coalizione il 23 aprile 2026 e il 5 maggio il governo Bolojan è caduto con una mozione PSD-AUR; Bolojan resta premier ad interim. Dopo tre tentativi falliti, il presidente Nicușor Dan ha designato il diplomatico Luca Niculescu, con PSD in governo e appoggio esterno PNL-UDMR; voto di fiducia previsto intorno al 16-20 ottobre 2026 (esito da verificare).",
   "note_en": "The PSD left the grand coalition on 23 April 2026 and on 5 May the Bolojan government fell to a PSD-AUR motion; Bolojan remains interim prime minister. After three failed attempts, President Nicușor Dan nominated the diplomat Luca Niculescu, with the PSD in government and external support from PNL-UDMR; the confidence vote is expected around 16-20 October 2026 (outcome to be verified)."
  },
  "ultime_elezioni": {
   "data": "2024-12",
   "risultati": [
    {
     "partito": "PSD",
     "pct": 22.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "AUR",
     "pct": 18.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "PNL",
     "pct": 13.2,
     "famiglia": "centrodestra"
    },
    {
     "partito": "USR",
     "pct": 12.4,
     "famiglia": "centro"
    },
    {
     "partito": "SOS România",
     "pct": 7.4,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "POT",
     "pct": 6.5,
     "famiglia": "destra_nazionalista"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2028-12",
   "tipo": "legislative",
   "note": "Scadenza naturale; AUR chiede elezioni anticipate ma presidente e partiti tradizionali le escludono.",
   "note_en": "End of the regular term; AUR is calling for a snap election but the president and the mainstream parties rule it out."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "AUR",
     "pct": 35.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "PSD",
     "pct": 23.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PNL",
     "pct": 17.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "USR",
     "pct": 8.2,
     "famiglia": "centro"
    },
    {
     "partito": "UDMR",
     "pct": 5.1,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SOS România",
     "pct": 2.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "POT",
     "pct": 2.3,
     "famiglia": "destra_nazionalista"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "AUR",
   "leader": "George Simion",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 35.9,
   "pct_ultime_elezioni": 18.0,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrodestra",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "AUR è stabilmente primo attorno al 36-40% (il doppio del 2024) e con i partiti sovranisti minori sfiorerebbe la maggioranza assoluta; i partiti tradizionali resistono grazie al cordone sanitario del presidente Dan ma la crisi di governo li logora. La destra radicale potrebbe realisticamente governare dopo il 2028, da sola o con il PSD.",
   "commento_coalizione_en": "AUR is consistently first at around 36-40% (double its 2024 result) and, together with the smaller sovereignist parties, would come close to an absolute majority; the mainstream parties hold on thanks to President Dan's cordon sanitaire but the government crisis is wearing them down. The radical right could realistically govern after 2028, alone or with the PSD."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Romanian_political_crisis",
   "https://politpro.eu/en/romania"
  ],
  "anticipate": {
   "data": "2027-06",
   "nota": "Crisi di governo aperta da maggio 2026 e AUR che chiede il voto: elezioni anticipate plausibili nel 2027.",
   "nota_en": "Government crisis open since May 2026 and AUR calling for a vote: a snap election is plausible in 2027."
  },
  "popolazione": 19.1,
  "ue": true,
  "nome_en": "Romania"
 },
 {
  "iso": "100",
  "sigla": "BG",
  "nome": "Bulgaria",
  "governo": {
   "premier": "Rumen Radev",
   "partito": "Bulgaria Progressista",
   "famiglia": "centrosinistra",
   "coalizione": [
    {
     "partito": "Bulgaria Progressista",
     "famiglia": "centrosinistra"
    }
   ],
   "dal": "2026-05",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "L'ex presidente Radev ha vinto le anticipate del 19 aprile 2026 (settime dal 2021) con il 44,6% e 131 seggi su 240: primo governo monocolore con maggioranza assoluta dal 1997. Bulgaria Progressista è un movimento populista-sovranista di matrice sociale, con posizioni ambigue su Russia e Ucraina; classificazione centrosinistra indicativa. Presidenziali il 25 ottobre 2026 con la presidente Iotova nettamente favorita.",
   "note_en": "Former president Radev won the snap election of 19 April 2026 (the seventh since 2021) with 44.6% and 131 of 240 seats: the first single-party government with an absolute majority since 1997. Progressive Bulgaria is a populist-sovereignist movement with a social-policy focus and ambiguous positions on Russia and Ukraine; its centre-left classification is indicative. Presidential election on 25 October 2026 with President Iotova the clear favourite."
  },
  "ultime_elezioni": {
   "data": "2026-04",
   "risultati": [
    {
     "partito": "Bulgaria Progressista",
     "pct": 44.6,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "GERB-SDS",
     "pct": 13.4,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PP-DB",
     "pct": 12.6,
     "famiglia": "centro"
    },
    {
     "partito": "DPS",
     "pct": 7.1,
     "famiglia": "centro"
    },
    {
     "partito": "Vazrazhdane",
     "pct": 4.3,
     "famiglia": "destra_nazionalista"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2030-04",
   "tipo": "legislative",
   "note": "Legislative a scadenza naturale nel 2030; presidenziali il 25 ottobre 2026 (Iotova favorita).",
   "note_en": "Legislative elections at the end of the regular term in 2030; presidential election on 25 October 2026 (Iotova the favourite)."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "Bulgaria Progressista",
     "pct": 42.3,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "GERB-SDS",
     "pct": 13.6,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PP",
     "pct": 8.9,
     "famiglia": "centro"
    },
    {
     "partito": "DB",
     "pct": 7.4,
     "famiglia": "centro"
    },
    {
     "partito": "DPS",
     "pct": 6.1,
     "famiglia": "centro"
    },
    {
     "partito": "Vazrazhdane",
     "pct": 6.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "BSP",
     "pct": 3.4,
     "famiglia": "centrosinistra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "Vazrazhdane",
   "leader": "Kostadin Kostadinov",
   "gruppo_pe": "ESN",
   "pct_sondaggio": 6.1,
   "pct_ultime_elezioni": 4.3,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrosinistra",
   "status_quo": "centrosinistra",
   "coalizione": "centrosinistra",
   "commento_coalizione": "Bulgaria Progressista resta dominante (40-44%) anche se in lieve calo; Vazrazhdane, crollato dal 13% del 2024 al 4% del 2026, recupera leggermente. La destra radicale non è in grado di governare; il vero nodo è la deriva sovranista dello stesso governo Radev.",
   "commento_coalizione_en": "Progressive Bulgaria remains dominant (40-44%) though slightly down; Vazrazhdane, which collapsed from 13% in 2024 to 4% in 2026, is recovering slightly. The radical right is in no position to govern; the real issue is the sovereignist drift of the Radev government itself."
  },
  "fonti": [
   "https://politpro.eu/en/bulgaria",
   "https://en.wikipedia.org/wiki/Radev_government"
  ],
  "popolazione": 6.4,
  "ue": true,
  "nome_en": "Bulgaria"
 },
 {
  "iso": "191",
  "sigla": "HR",
  "nome": "Croazia",
  "governo": {
   "premier": "Andrej Plenković",
   "partito": "HDZ",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "HDZ",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Domovinski pokret",
     "famiglia": "destra_nazionalista"
    }
   ],
   "dal": "2024-05",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": true,
   "note": "Terzo governo Plenković: HDZ con il Movimento Patriottico (DP) di Penava e il sostegno dei deputati delle minoranze. Rapporti tesi con DP nel 2026, ma Plenković non ha alternative; il gradimento del governo è ai minimi, con HDZ al 25% in CRO Demoskop di ottobre.",
   "note_en": "Third Plenković government: HDZ with Penava's Homeland Movement (DP) and the support of the national-minority MPs. Relations with DP were strained in 2026, but Plenković has no alternatives; government approval is at record lows, with HDZ at 25% in the October CRO Demoskop poll."
  },
  "ultime_elezioni": {
   "data": "2024-04",
   "risultati": [
    {
     "partito": "HDZ",
     "pct": 34.4,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SDP",
     "pct": 25.4,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Domovinski pokret",
     "pct": 9.6,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Možemo!",
     "pct": 9.1,
     "famiglia": "sinistra"
    },
    {
     "partito": "Most",
     "pct": 8.0,
     "famiglia": "destra_nazionalista"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2028-04",
   "tipo": "legislative",
   "note": "Scadenza naturale della legislatura.",
   "note_en": "End of the regular parliamentary term."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "HDZ",
     "pct": 30.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SDP",
     "pct": 22.3,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Možemo!",
     "pct": 17.0,
     "famiglia": "sinistra"
    },
    {
     "partito": "Most",
     "pct": 11.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Domovinski pokret",
     "pct": 3.4,
     "famiglia": "destra_nazionalista"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "Most",
   "leader": "Božo Petrov",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 11.0,
   "pct_ultime_elezioni": 8.0,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "partner_trend": true,
   "coalizione": "centrodestra",
   "partner_coalizione": true,
   "commento_coalizione": "HDZ resta primo ma in calo; DP è crollato sotto la soglia del 5% e il voto di destra si sposta su Most (conservatore-sovranista, 11%). Un governo HDZ-Most è lo sbocco più probabile; la sinistra (SDP+Možemo, circa 39%) cresce ma senza alleati sufficienti. La destra radicale può governare solo come partner minore di HDZ.",
   "partner_primo": true,
   "commento_coalizione_en": "HDZ remains first but is declining; DP has collapsed below the 5% threshold and the right-wing vote is shifting to Most (conservative-sovereignist, 11%). An HDZ-Most government is the most likely outcome; the left (SDP+Možemo, around 39%) is growing but lacks sufficient allies. The radical right can govern only as a junior partner of HDZ."
  },
  "fonti": [
   "https://politpro.eu/en/croatia",
   "https://en.wikipedia.org/wiki/Cabinet_of_Andrej_Plenkovi%C4%87_III"
  ],
  "popolazione": 3.9,
  "ue": true,
  "nome_en": "Croatia"
 },
 {
  "iso": "705",
  "sigla": "SI",
  "nome": "Slovenia",
  "governo": {
   "premier": "Janez Janša",
   "partito": "SDS",
   "famiglia": "destra_nazionalista",
   "coalizione": [
    {
     "partito": "SDS",
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "NSi",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Demokrati",
     "famiglia": "centrodestra"
    },
    {
     "partito": "SLS",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Fokus",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2026-06",
   "tipo": "minoranza",
   "destra_nazionalista_al_governo": true,
   "note": "Dopo le elezioni del 22 marzo 2026 (Svoboda di Golob primo di misura ma senza maggioranza), Janša è stato eletto premier per la quarta volta il 22 maggio e il governo è entrato in carica il 4 giugno. La coalizione conta 43 seggi su 90 e si regge sull'appoggio esterno del partito populista Resni.ca (5 seggi). SDS siede nel PPE a Strasburgo pur essendo nazional-conservatore.",
   "note_en": "After the election of 22 March 2026 (Golob's Svoboda narrowly first but without a majority), Janša was elected prime minister for the fourth time on 22 May and the government took office on 4 June. The coalition holds 43 of 90 seats and relies on outside support from the populist party Resni.ca (5 seats). SDS sits with the EPP in Strasbourg despite being national-conservative."
  },
  "ultime_elezioni": {
   "data": "2026-03",
   "risultati": [
    {
     "partito": "Svoboda (GS)",
     "pct": 28.7,
     "famiglia": "centro"
    },
    {
     "partito": "SDS",
     "pct": 27.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "NSi-SLS-Fokus",
     "pct": 9.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SD",
     "pct": 6.7,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Levica-Vesna",
     "pct": 6.7,
     "famiglia": "sinistra"
    },
    {
     "partito": "Demokrati",
     "pct": 5.7,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Resni.ca",
     "pct": 5.5,
     "famiglia": "destra_nazionalista"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2030-03",
   "tipo": "legislative",
   "note": "Scadenza naturale; presidenziali a fine 2027.",
   "note_en": "End of the regular term; presidential election in late 2027."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "SDS",
     "pct": 28.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Svoboda (GS)",
     "pct": 25.0,
     "famiglia": "centro"
    },
    {
     "partito": "SD",
     "pct": 10.4,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "NSi-SLS-Fokus",
     "pct": 9.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Levica-Vesna",
     "pct": 7.8,
     "famiglia": "sinistra"
    },
    {
     "partito": "Resni.ca",
     "pct": 4.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Demokrati",
     "pct": 3.7,
     "famiglia": "centrodestra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "SDS",
   "leader": "Janez Janša",
   "gruppo_pe": "PPE",
   "pct_sondaggio": 28.1,
   "pct_ultime_elezioni": 27.9,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "destra_nazionalista",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "SDS è ora primo partito e il blocco di destra sfiora il 46% contro il 43% del centrosinistra: la destra nazionalista governa già e manterrebbe la guida. La fragilità sta nella maggioranza relativa (43 seggi) e nella dipendenza da Resni.ca.",
   "commento_coalizione_en": "SDS is now the largest party and the right-wing bloc is close to 46% against 43% for the centre-left: the nationalist right already governs and would retain the lead. The fragility lies in the relative majority (43 seats) and the dependence on Resni.ca."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Slovenian_parliamentary_election",
   "https://politpro.eu/en/slovenia"
  ],
  "popolazione": 2.1,
  "ue": true,
  "nome_en": "Slovenia"
 },
 {
  "iso": "752",
  "sigla": "SE",
  "nome": "Svezia",
  "governo": {
   "premier": "Ulf Kristersson",
   "partito": "M",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "M",
     "famiglia": "centrodestra"
    },
    {
     "partito": "KD",
     "famiglia": "centrodestra"
    },
    {
     "partito": "L",
     "famiglia": "centro"
    },
    {
     "partito": "SD (appoggio esterno, accordo di Tidö)",
     "famiglia": "destra_nazionalista"
    }
   ],
   "dal": "2022-10",
   "tipo": "ad_interim",
   "destra_nazionalista_al_governo": true,
   "note": "Il blocco di centrosinistra (S, V, C, MP) ha vinto le elezioni del 13 settembre 2026 con 176 seggi su 349 contro i 173 dei partiti di Tidö; Kristersson si è dimesso il 17 settembre e resta in carica per gli affari correnti. Magdalena Andersson (S) non è riuscita a formare un governo per il veto incrociato tra Centerpartiet e Vänsterpartiet: il 15 ottobre 2026 il Riksdag ha bocciato la sua nomina (99 sì, 248 no).",
   "note_en": "The centre-left bloc (S, V, C, MP) won the election of 13 September 2026 with 176 of 349 seats against 173 for the Tidö parties; Kristersson resigned on 17 September and remains in office in a caretaker capacity. Magdalena Andersson (S) failed to form a government because of the mutual veto between Centerpartiet and Vänsterpartiet: on 15 October 2026 the Riksdag rejected her nomination (99 in favour, 248 against)."
  },
  "transizione": {
   "data": "2026-12",
   "nota": "Formazione del nuovo governo dopo il voto di settembre 2026",
   "nota_en": "Formation of the new government after the September 2026 election"
  },
  "ultime_elezioni": {
   "data": "2026-09",
   "risultati": [
    {
     "partito": "S",
     "pct": 28.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "M",
     "pct": 19.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SD",
     "pct": 17.5,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "V",
     "pct": 8.4,
     "famiglia": "sinistra"
    },
    {
     "partito": "C",
     "pct": 7.0,
     "famiglia": "centro"
    },
    {
     "partito": "KD",
     "pct": 6.2,
     "famiglia": "centrodestra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2030-09",
   "tipo": "legislative",
   "note": "Scadenza ordinaria settembre 2030; possibili elezioni straordinarie se il Riksdag respinge quattro candidati premier.",
   "note_en": "Regular term ends September 2030; an extraordinary election is possible if the Riksdag rejects four candidates for prime minister."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "Verian/SVT Väljarbarometer (28 set – 11 ott 2026)",
   "partiti": [
    {
     "partito": "S",
     "pct": 28.5,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "M",
     "pct": 22.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SD",
     "pct": 17.2,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "V",
     "pct": 7.8,
     "famiglia": "sinistra"
    },
    {
     "partito": "MP",
     "pct": 7.1,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "C",
     "pct": 6.3,
     "famiglia": "centro"
    },
    {
     "partito": "KD",
     "pct": 5.9,
     "famiglia": "centrodestra"
    }
   ],
   "fonte_en": "Verian/SVT Väljarbarometer (28 Sep – 11 Oct 2026)"
  },
  "destra_principale": {
   "partito": "Sverigedemokraterna (SD)",
   "leader": "Jimmie Åkesson",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 17.2,
   "pct_ultime_elezioni": 17.5,
   "trend": "in_calo"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "partner_trend": true,
   "coalizione": "centrosinistra",
   "commento_coalizione": "I sondaggi post-voto confermano una maggioranza risicata del blocco rosso-verde, ma l'impasse fra C e V rende incerto un governo Andersson. Gli SD sono scesi dal 20,5% del 2022 al 17,5% e restano confinati al ruolo di partner esterno di un centrodestra a guida M; un governo a guida SD non è realistico.",
   "commento_coalizione_en": "Post-election polls confirm a narrow majority for the red-green bloc, but the deadlock between C and V makes an Andersson government uncertain. SD have fallen from 20.5% in 2022 to 17.5% and remain confined to the role of outside partner of an M-led centre-right; an SD-led government is not realistic."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Swedish_general_election",
   "https://www.veriangroup.com/sv/news-and-insights/valjarbarometer-oktober-2026"
  ],
  "popolazione": 10.6,
  "ue": true,
  "nome_en": "Sweden"
 },
 {
  "iso": "208",
  "sigla": "DK",
  "nome": "Danimarca",
  "governo": {
   "premier": "Mette Frederiksen",
   "partito": "S",
   "famiglia": "centrosinistra",
   "coalizione": [
    {
     "partito": "S",
     "famiglia": "centrosinistra"
    },
    {
     "partito": "SF",
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Moderaterne",
     "famiglia": "centro"
    },
    {
     "partito": "Radikale",
     "famiglia": "centro"
    }
   ],
   "dal": "2026-06",
   "tipo": "minoranza",
   "destra_nazionalista_al_governo": false,
   "note": "Dopo le elezioni anticipate del 24 marzo 2026 (convocate sull'onda della crisi con Trump sulla Groenlandia) i socialdemocratici hanno perso 12 seggi ma Frederiksen ha formato il 3 giugno 2026 un governo di minoranza a quattro (82 seggi su 179) sostenuto dall'esterno da Enhedslisten e Alternativet.",
   "note_en": "After the snap election of 24 March 2026 (called in the wake of the crisis with Trump over Greenland) the Social Democrats lost 12 seats, but on 3 June 2026 Frederiksen formed a four-party minority government (82 of 179 seats) supported from outside by Enhedslisten and Alternativet."
  },
  "ultime_elezioni": {
   "data": "2026-03",
   "risultati": [
    {
     "partito": "S",
     "pct": 21.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "SF",
     "pct": 11.6,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "V",
     "pct": 10.1,
     "famiglia": "centrodestra"
    },
    {
     "partito": "LA",
     "pct": 9.4,
     "famiglia": "centrodestra"
    },
    {
     "partito": "DF",
     "pct": 9.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "M",
     "pct": 7.7,
     "famiglia": "centro"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2030-03",
   "tipo": "legislative",
   "note": "Scadenza legale entro il 23 marzo 2030.",
   "note_en": "Legal deadline by 23 March 2030."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "S",
     "pct": 20.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "DF",
     "pct": 13.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "SF",
     "pct": 10.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "LA",
     "pct": 9.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "K",
     "pct": 9.5,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Enhedslisten",
     "pct": 7.6,
     "famiglia": "sinistra"
    },
    {
     "partito": "V",
     "pct": 6.8,
     "famiglia": "centrodestra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "Dansk Folkeparti (DF)",
   "leader": "Morten Messerschmidt",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 13.1,
   "pct_ultime_elezioni": 9.1,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrosinistra",
   "partner_trend": true,
   "coalizione": "centrosinistra",
   "commento_coalizione": "Nei sondaggi il blocco rosso resta intorno al 53% e conserverebbe la maggioranza, mentre DF è risalito al 13% diventando il primo partito del blocco blu. Un ritorno al potere del centrodestra passerebbe per un governo Venstre/Konservative/LA con DF e Danmarksdemokraterne come partner di sostegno, non per un premier di destra radicale.",
   "commento_coalizione_en": "In the polls the red bloc remains around 53% and would keep its majority, while DF has climbed back to 13%, becoming the largest party in the blue bloc. A return to power for the centre-right would come through a Venstre/Konservative/LA government with DF and Danmarksdemokraterne as supporting partners, not through a radical-right prime minister."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Danish_general_election",
   "https://politpro.eu/en/denmark"
  ],
  "popolazione": 6.0,
  "ue": true,
  "nome_en": "Denmark"
 },
 {
  "iso": "246",
  "sigla": "FI",
  "nome": "Finlandia",
  "governo": {
   "premier": "Petteri Orpo",
   "partito": "Kok",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "Kokoomus",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Perussuomalaiset",
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "RKP",
     "famiglia": "centro"
    },
    {
     "partito": "KD",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2023-06",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": true,
   "note": "Il governo Orpo (Kokoomus, Veri Finlandesi, RKP, Cristianodemocratici) è in carica dal giugno 2023 con politiche di austerità e stretta sull'immigrazione. I partiti di governo sono in forte calo nei sondaggi mentre la SDP di Antti Lindtman guida stabilmente.",
   "note_en": "The Orpo government (Kokoomus, Finns Party, RKP, Christian Democrats) has been in office since June 2023 with austerity policies and a crackdown on immigration. The governing parties are falling sharply in the polls while Antti Lindtman's SDP leads steadily."
  },
  "ultime_elezioni": {
   "data": "2023-04",
   "risultati": [
    {
     "partito": "Kok",
     "pct": 20.8,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PS",
     "pct": 20.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "SDP",
     "pct": 19.9,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Kesk",
     "pct": 11.3,
     "famiglia": "centro"
    },
    {
     "partito": "Vas",
     "pct": 7.1,
     "famiglia": "sinistra"
    },
    {
     "partito": "Vihr",
     "pct": 7.0,
     "famiglia": "centrosinistra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2027-04",
   "tipo": "legislative",
   "note": "Elezioni parlamentari fissate per il 18 aprile 2027.",
   "note_en": "Parliamentary election scheduled for 18 April 2027."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "Yle/Taloustutkimus (7 set – 5 ott 2026)",
   "partiti": [
    {
     "partito": "SDP",
     "pct": 22.7,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PS",
     "pct": 16.5,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Kok",
     "pct": 16.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Kesk",
     "pct": 12.6,
     "famiglia": "centro"
    },
    {
     "partito": "Vas",
     "pct": 12.4,
     "famiglia": "sinistra"
    },
    {
     "partito": "Vihr",
     "pct": 8.3,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "RKP",
     "pct": 3.6,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "Yle/Taloustutkimus (7 Sep – 5 Oct 2026)"
  },
  "destra_principale": {
   "partito": "Perussuomalaiset (PS)",
   "leader": "Riikka Purra",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 16.5,
   "pct_ultime_elezioni": 20.1,
   "trend": "in_calo"
  },
  "scenario": {
   "trend": "centrosinistra",
   "status_quo": "centrodestra",
   "coalizione": "centrosinistra",
   "commento_coalizione": "Con la SDP al 22-23% e i partiti di governo in calo, nel 2027 è probabile un governo a guida socialdemocratica con Centro e sinistra. I Veri Finlandesi, pur risaliti al 16,5%, sono ben sotto il 20,1% del 2023 e difficilmente potrebbero guidare un esecutivo.",
   "commento_coalizione_en": "With the SDP at 22-23% and the governing parties in decline, a Social Democrat-led government with the Centre and the left is likely in 2027. The Finns Party, although back up to 16.5%, are well below their 20.1% of 2023 and could hardly lead a government."
  },
  "fonti": [
   "https://politpro.eu/en/finland",
   "https://en.wikipedia.org/wiki/2027_Finnish_parliamentary_election"
  ],
  "popolazione": 5.6,
  "ue": true,
  "nome_en": "Finland"
 },
 {
  "iso": "578",
  "sigla": "NO",
  "nome": "Norvegia",
  "governo": {
   "premier": "Jonas Gahr Støre",
   "partito": "Ap",
   "famiglia": "centrosinistra",
   "coalizione": [
    {
     "partito": "Arbeiderpartiet",
     "famiglia": "centrosinistra"
    }
   ],
   "dal": "2021-10",
   "tipo": "minoranza",
   "destra_nazionalista_al_governo": false,
   "note": "Il Partito Laburista governa da solo in minoranza (53 seggi su 169) dopo l'uscita del Senterpartiet a inizio 2025; alle elezioni dell'8 settembre 2025 il blocco rosso-verde ha conservato la maggioranza (88 seggi). Il Fremskrittspartiet di Sylvi Listhaug ha più che raddoppiato i seggi (47) ed è ora primo partito in tutti i sondaggi.",
   "note_en": "The Labour Party governs alone in minority (53 of 169 seats) after the Senterpartiet left in early 2025; at the election of 8 September 2025 the red-green bloc retained its majority (88 seats). Sylvi Listhaug's Fremskrittspartiet more than doubled its seats (47) and is now the largest party in every poll."
  },
  "ultime_elezioni": {
   "data": "2025-09",
   "risultati": [
    {
     "partito": "Ap",
     "pct": 28.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "FrP",
     "pct": 23.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Høyre",
     "pct": 14.6,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SV",
     "pct": 5.6,
     "famiglia": "sinistra"
    },
    {
     "partito": "Sp",
     "pct": 5.6,
     "famiglia": "centro"
    },
    {
     "partito": "Rødt",
     "pct": 5.3,
     "famiglia": "sinistra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2029-09",
   "tipo": "legislative",
   "note": "Legislatura fissa di quattro anni; prossime elezioni allo Storting nel settembre 2029.",
   "note_en": "Fixed four-year term; next Storting election in September 2029."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "pollofpolls.no, media nazionale ottobre 2026",
   "partiti": [
    {
     "partito": "FrP",
     "pct": 33.4,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Ap",
     "pct": 21.5,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Høyre",
     "pct": 13.2,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Rødt",
     "pct": 7.7,
     "famiglia": "sinistra"
    },
    {
     "partito": "Sp",
     "pct": 5.4,
     "famiglia": "centro"
    },
    {
     "partito": "SV",
     "pct": 4.6,
     "famiglia": "sinistra"
    },
    {
     "partito": "MDG",
     "pct": 4.1,
     "famiglia": "centrosinistra"
    }
   ],
   "fonte_en": "pollofpolls.no, national average October 2026"
  },
  "destra_principale": {
   "partito": "Fremskrittspartiet (FrP)",
   "leader": "Sylvi Listhaug",
   "gruppo_pe": "n/a",
   "pct_sondaggio": 33.4,
   "pct_ultime_elezioni": 23.9,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrosinistra",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "Con il FrP oltre il 33% e Høyre sotto il 14%, i sondaggi di ottobre 2026 danno a FrP+H da soli la maggioranza (87 mandati): Sylvi Listhaug sarebbe la prima premier di destra populista della Scandinavia, con Høyre come partner junior. È lo scenario più concreto di governo a guida nazional-populista tra i paesi analizzati.",
   "commento_coalizione_en": "With FrP above 33% and Høyre below 14%, the October 2026 polls give FrP+H a majority on their own (87 mandates): Sylvi Listhaug would be Scandinavia's first populist-right prime minister, with Høyre as junior partner. This is the most concrete scenario of a national-populist-led government among the countries analysed."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2025_Norwegian_parliamentary_election",
   "https://www.pollofpolls.no/?cmd=Stortinget&do=snitt&yw=202610"
  ],
  "popolazione": 5.6,
  "ue": false,
  "nome_en": "Norway"
 },
 {
  "iso": "372",
  "sigla": "IE",
  "nome": "Irlanda",
  "governo": {
   "premier": "Micheál Martin",
   "partito": "FF",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "Fianna Fáil",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Fine Gael",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Indipendenti (RIG)",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2025-01",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "Governo FF-FG con l'appoggio di un gruppo di deputati indipendenti, insediato il 23 gennaio 2025. Accordo di rotazione: Simon Harris (FG) dovrebbe diventare Taoiseach nel novembre 2027. Catherine Connolly (sostenuta dalla sinistra) è presidente dal novembre 2025.",
   "note_en": "FF-FG government with the support of a group of independent TDs, sworn in on 23 January 2025. Rotation agreement: Simon Harris (FG) is due to become Taoiseach in November 2027. Catherine Connolly (backed by the left) has been president since November 2025."
  },
  "ultime_elezioni": {
   "data": "2024-11",
   "risultati": [
    {
     "partito": "FF",
     "pct": 21.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "FG",
     "pct": 20.8,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Sinn Féin",
     "pct": 19.0,
     "famiglia": "sinistra"
    },
    {
     "partito": "Indipendenti",
     "pct": 13.2,
     "famiglia": "centro"
    },
    {
     "partito": "SocDem",
     "pct": 4.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Labour",
     "pct": 4.7,
     "famiglia": "centrosinistra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2030-01",
   "tipo": "legislative",
   "note": "Il Dáil deve essere sciolto entro il 17 dicembre 2029; elezioni entro gennaio 2030.",
   "note_en": "The Dáil must be dissolved by 17 December 2029; election by January 2030."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "Ireland Thinks / Sunday Independent (4 ott 2026)",
   "partiti": [
    {
     "partito": "Sinn Féin",
     "pct": 19,
     "famiglia": "sinistra"
    },
    {
     "partito": "FG",
     "pct": 18,
     "famiglia": "centrodestra"
    },
    {
     "partito": "FF",
     "pct": 18,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SocDem",
     "pct": 11,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Aontú",
     "pct": 8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Independent Ireland",
     "pct": 5,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Labour",
     "pct": 4,
     "famiglia": "centrosinistra"
    }
   ],
   "fonte_en": "Ireland Thinks / Sunday Independent (4 Oct 2026)"
  },
  "destra_principale": {
   "partito": "Aontú",
   "leader": "Peadar Tóibín",
   "gruppo_pe": "n/a",
   "pct_sondaggio": 8,
   "pct_ultime_elezioni": 3.9,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "coalizione": "centrodestra",
   "commento_coalizione": "Il quadro è frammentato: Sinn Féin è primo partito ma intorno al 20% e senza alleati sufficienti, mentre FF e FG insieme restano la combinazione più probabile, magari con Aontú o Independent Ireland come stampelle. La destra nazional-conservatrice (Aontú al record dell'8%) cresce ma non ha alcuna prospettiva di guidare il governo.",
   "commento_coalizione_en": "The picture is fragmented: Sinn Féin is the largest party but at around 20% and without sufficient allies, while FF and FG together remain the most likely combination, perhaps propped up by Aontú or Independent Ireland. The national-conservative right (Aontú at a record 8%) is growing but has no prospect whatsoever of leading the government."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Next_Irish_general_election",
   "https://www.irishtimes.com/politics/2026/09/24/poll-indicates-irish-political-landscape-continuing-to-fragment/"
  ],
  "popolazione": 5.4,
  "ue": true,
  "nome_en": "Ireland"
 },
 {
  "iso": "620",
  "sigla": "PT",
  "nome": "Portogallo",
  "governo": {
   "premier": "Luís Montenegro",
   "partito": "PSD",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "PSD",
     "famiglia": "centrodestra"
    },
    {
     "partito": "CDS-PP",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2025-06",
   "tipo": "minoranza",
   "destra_nazionalista_al_governo": false,
   "note": "Governo AD di minoranza (91 seggi su 230) in carica dal 5 giugno 2025 dopo le terze elezioni in tre anni. Montenegro esclude accordi con Chega; il socialista António José Seguro ha vinto le presidenziali di febbraio 2026 battendo André Ventura al ballottaggio (66,8%-33,2%). La disapprovazione del governo supera il 60%.",
   "note_en": "AD minority government (91 of 230 seats) in office since 5 June 2025 after the third election in three years. Montenegro rules out deals with Chega; the socialist António José Seguro won the presidential election of February 2026, beating André Ventura in the run-off (66.8%-33.2%). Disapproval of the government exceeds 60%."
  },
  "ultime_elezioni": {
   "data": "2025-05",
   "risultati": [
    {
     "partito": "AD (PSD/CDS)",
     "pct": 31.8,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Chega",
     "pct": 22.8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "PS",
     "pct": 22.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "IL",
     "pct": 5.4,
     "famiglia": "centro"
    },
    {
     "partito": "Livre",
     "pct": 4.1,
     "famiglia": "sinistra"
    },
    {
     "partito": "CDU",
     "pct": 2.9,
     "famiglia": "sinistra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2029-10",
   "tipo": "legislative",
   "note": "Scadenza legale entro il 14 ottobre 2029, salvo scioglimento anticipato (frequente in Portogallo).",
   "note_en": "Legal deadline by 14 October 2029, barring early dissolution (frequent in Portugal)."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "PS",
     "pct": 28.1,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Chega",
     "pct": 28.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "AD",
     "pct": 23.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "IL",
     "pct": 6.6,
     "famiglia": "centro"
    },
    {
     "partito": "Livre",
     "pct": 3.2,
     "famiglia": "sinistra"
    },
    {
     "partito": "CDU",
     "pct": 2.0,
     "famiglia": "sinistra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "Chega",
   "leader": "André Ventura",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 28.0,
   "pct_ultime_elezioni": 22.8,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrodestra",
   "coalizione": "centrosinistra",
   "commento_coalizione": "PS e Chega sono appaiati intorno al 28% con l'AD scesa sotto il 24%: se si votasse oggi il PS sarebbe il candidato più probabile a un governo di minoranza, ma la somma AD+Chega+IL resta maggioritaria. Se la crescita di Chega continua, Ventura potrebbe diventare primo partito e rendere difficile al PSD mantenere il cordone sanitario.",
   "commento_coalizione_en": "PS and Chega are level at around 28% with AD down below 24%: if the vote were held today the PS would be the most likely candidate for a minority government, but AD+Chega+IL together still hold a majority. If Chega's growth continues, Ventura could become the largest party and make it hard for the PSD to maintain the cordon sanitaire."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Next_Portuguese_legislative_election",
   "https://politpro.eu/en/portugal"
  ],
  "anticipate": {
   "data": "2028-03",
   "nota": "Terzo governo di minoranza in tre anni e scioglimenti frequenti: difficile arrivare al 2029.",
   "nota_en": "Third minority government in three years and frequent dissolutions: reaching 2029 will be difficult."
  },
  "popolazione": 10.7,
  "ue": true,
  "nome_en": "Portugal"
 },
 {
  "iso": "300",
  "sigla": "GR",
  "nome": "Grecia",
  "governo": {
   "premier": "Kyriakos Mitsotakis",
   "partito": "ND",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "Nea Dimokratia",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2023-06",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "Nea Dimokratia governa da sola con maggioranza assoluta (156 seggi) dal giugno 2023. Il consenso è crollato dal 40,6% a circa il 30% per caro-vita, scandalo OPEKEPE e strage di Tempi; l'opposizione è frammentata tra il nuovo partito di Tsipras (ELAS), PASOK, Elliniki Lysi e il movimento di Maria Karystianou.",
   "note_en": "Nea Dimokratia has governed alone with an absolute majority (156 seats) since June 2023. Its support has collapsed from 40.6% to around 30% over the cost of living, the OPEKEPE scandal and the Tempi disaster; the opposition is fragmented between Tsipras's new party (ELAS), PASOK, Elliniki Lysi and Maria Karystianou's movement."
  },
  "ultime_elezioni": {
   "data": "2023-06",
   "risultati": [
    {
     "partito": "ND",
     "pct": 40.6,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SYRIZA",
     "pct": 17.8,
     "famiglia": "sinistra"
    },
    {
     "partito": "PASOK",
     "pct": 11.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "KKE",
     "pct": 7.7,
     "famiglia": "sinistra"
    },
    {
     "partito": "Spartiates",
     "pct": 4.7,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Elliniki Lysi",
     "pct": 4.4,
     "famiglia": "destra_nazionalista"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2027-07",
   "tipo": "legislative",
   "note": "Scadenza della legislatura: elezioni entro l'estate 2027; Mitsotakis esclude il voto anticipato.",
   "note_en": "End of the parliamentary term: election by summer 2027; Mitsotakis rules out a snap election."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (15 ott 2026)",
   "partiti": [
    {
     "partito": "ND",
     "pct": 29.6,
     "famiglia": "centrodestra"
    },
    {
     "partito": "ELAS (Tsipras)",
     "pct": 16.1,
     "famiglia": "sinistra"
    },
    {
     "partito": "PASOK",
     "pct": 13.1,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Elliniki Lysi",
     "pct": 7.7,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "KKE",
     "pct": 6.9,
     "famiglia": "sinistra"
    },
    {
     "partito": "Elpida (Karystianou)",
     "pct": 4.6,
     "famiglia": "centro"
    },
    {
     "partito": "Plefsi Eleftherias",
     "pct": 4.2,
     "famiglia": "sinistra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)"
  },
  "destra_principale": {
   "partito": "Elliniki Lysi",
   "leader": "Kyriakos Velopoulos",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 7.7,
   "pct_ultime_elezioni": 4.4,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "coalizione": "centrodestra",
   "commento_coalizione": "ND resta prima con 12-15 punti di vantaggio ma intorno al 30% non otterrebbe la maggioranza assoluta: probabile un secondo turno elettorale o una coalizione con PASOK. La destra radicale è frammentata (Elliniki Lysi, Foni Logikis, Niki) e sommata non supera il 12-13%: può al più condizionare ND, non guidare il governo.",
   "commento_coalizione_en": "ND remains first with a 12-15 point lead but at around 30% would not win an absolute majority: a second round of elections or a coalition with PASOK is likely. The radical right is fragmented (Elliniki Lysi, Foni Logikis, Niki) and combined does not exceed 12-13%: at most it can influence ND, not lead the government."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Greek_parliamentary_election",
   "https://politpro.eu/en/greece"
  ],
  "popolazione": 10.4,
  "ue": true,
  "nome_en": "Greece"
 },
 {
  "iso": "756",
  "sigla": "CH",
  "nome": "Svizzera",
  "governo": {
   "premier": "Guy Parmelin (presidente della Confederazione 2026)",
   "partito": "UDC/SVP",
   "famiglia": "tecnico",
   "coalizione": [
    {
     "partito": "UDC/SVP (2 seggi)",
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "PS/SP (2 seggi)",
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PLR/FDP (2 seggi)",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Il Centro (1 seggio)",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2025-04",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": true,
   "note": "Governo di concordanza permanente a sette membri (formula 2-2-2-1 dal 2008). La presidenza ruota ogni anno: nel 2026 spetta a Guy Parmelin dell'UDC, che è il primo partito con 62 seggi al Consiglio nazionale. Nessun partito 'guida' l'esecutivo.",
   "note_en": "Permanent seven-member concordance government (2-2-2-1 formula since 2008). The presidency rotates every year: in 2026 it falls to Guy Parmelin of the UDC/SVP, which is the largest party with 62 seats in the National Council. No party 'leads' the executive."
  },
  "ultime_elezioni": {
   "data": "2023-10",
   "risultati": [
    {
     "partito": "UDC/SVP",
     "pct": 27.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "PS/SP",
     "pct": 18.3,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PLR/FDP",
     "pct": 14.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Il Centro",
     "pct": 14.1,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Verdi",
     "pct": 9.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PVL/GLP",
     "pct": 7.6,
     "famiglia": "centro"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2027-10",
   "tipo": "legislative",
   "note": "Elezioni federali il 24 ottobre 2027; il Consiglio federale viene poi eletto dall'Assemblea federale a dicembre 2027.",
   "note_en": "Federal election on 24 October 2027; the Federal Council is then elected by the Federal Assembly in December 2027."
  },
  "sondaggi": {
   "data": "2025-10",
   "fonte": "SRG/Sotomo Wahlbarometer (ott 2025); nessun sondaggio nazionale 2026 reperito",
   "partiti": [
    {
     "partito": "UDC/SVP",
     "pct": 30.4,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "PS/SP",
     "pct": 18.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Il Centro",
     "pct": 14.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PLR/FDP",
     "pct": 13.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Verdi",
     "pct": 8.5,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PVL/GLP",
     "pct": 6.1,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "SRG/Sotomo Wahlbarometer (Oct 2025); no national poll for 2026 found"
  },
  "destra_principale": {
   "partito": "UDC/SVP",
   "leader": "Marcel Dettling",
   "gruppo_pe": "n/a",
   "pct_sondaggio": 30.4,
   "pct_ultime_elezioni": 27.9,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "tecnico",
   "status_quo": "tecnico",
   "partner_trend": true,
   "coalizione": "tecnico",
   "partner_coalizione": true,
   "commento_coalizione": "Il sistema di concordanza impedisce a qualsiasi partito di 'guidare' il governo: anche con l'UDC verso il 30% (massimo storico nel barometro SRG 2025) la composizione 2-2-2-1 del Consiglio federale non cambierebbe. L'influenza della destra nazionalista passa per le iniziative popolari (es. 'No a una Svizzera da 10 milioni') più che per la guida dell'esecutivo.",
   "primo": "tecnico",
   "partner_primo": true,
   "commento_coalizione_en": "The concordance system prevents any party from 'leading' the government: even with the UDC/SVP heading towards 30% (a record high in the 2025 SRG barometer) the 2-2-2-1 composition of the Federal Council would not change. The nationalist right's influence runs through popular initiatives (e.g. 'No to a 10-million Switzerland') rather than through leadership of the executive."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2023_Swiss_federal_election",
   "https://www.srf.ch/news/schweiz/zwei-jahre-vor-den-wahlen-wahlbarometer-zeigt-svp-mit-historischem-hoch-liberale-im-tief-1"
  ],
  "popolazione": 9.0,
  "ue": false,
  "nome_en": "Switzerland"
 },
 {
  "iso": "233",
  "sigla": "EE",
  "nome": "Estonia",
  "governo": {
   "premier": "Kristen Michal",
   "partito": "Reform",
   "famiglia": "centro",
   "coalizione": [
    {
     "partito": "Reform",
     "famiglia": "centro"
    },
    {
     "partito": "Eesti 200",
     "famiglia": "centro"
    }
   ],
   "dal": "2024-07",
   "tipo": "minoranza",
   "destra_nazionalista_al_governo": false,
   "note": "Coalizione Reform–Eesti 200 (SDE espulsa a marzo 2025) ridotta a 50 seggi su 101 dopo le defezioni di due deputati nel 2026; governo molto impopolare, i due partiti di coalizione sommano circa il 12-14% nei sondaggi a cinque mesi dal voto.",
   "note_en": "Reform–Eesti 200 coalition (SDE expelled in March 2025) reduced to 50 of 101 seats after two MPs defected in 2026; a deeply unpopular government, the two coalition parties together poll around 12-14% five months before the election."
  },
  "ultime_elezioni": {
   "data": "2023-03",
   "risultati": [
    {
     "partito": "Reform",
     "pct": 31.2,
     "famiglia": "centro"
    },
    {
     "partito": "EKRE",
     "pct": 16.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Keskerakond",
     "pct": 15.3,
     "famiglia": "centro"
    },
    {
     "partito": "Eesti 200",
     "pct": 13.3,
     "famiglia": "centro"
    },
    {
     "partito": "SDE",
     "pct": 9.3,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Isamaa",
     "pct": 8.2,
     "famiglia": "centrodestra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2027-03",
   "tipo": "legislative",
   "note": "Elezioni del Riigikogu entro il 7 marzo 2027.",
   "note_en": "Riigikogu election by 7 March 2027."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "Norstat / Institute for Societal Studies (14 set – 12 ott 2026), via ERR",
   "partiti": [
    {
     "partito": "Isamaa",
     "pct": 24.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Keskerakond",
     "pct": 21.7,
     "famiglia": "centro"
    },
    {
     "partito": "SDE",
     "pct": 15.4,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "EKRE",
     "pct": 14.2,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Reform",
     "pct": 13.1,
     "famiglia": "centro"
    },
    {
     "partito": "Parempoolsed",
     "pct": 6.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Eesti 200",
     "pct": 1.2,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "Norstat / Institute for Societal Studies (14 Sep – 12 Oct 2026), via ERR"
  },
  "destra_principale": {
   "partito": "EKRE",
   "leader": "Martin Helme",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 14.2,
   "pct_ultime_elezioni": 16.1,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centro",
   "partner_trend": true,
   "coalizione": "centrodestra",
   "commento_coalizione": "Con i sondaggi attuali Isamaa (Reinsalu) guiderebbe il prossimo governo, probabilmente con Keskerakond e/o SDE; EKRE, scissa nel 2024 e ferma al 14-18%, non è in grado di guidare un governo ma potrebbe entrare come partner minore di Isamaa (come nel 2019-21), scenario possibile se il centrodestra preferisse una coalizione di destra.",
   "commento_coalizione_en": "On current polls Isamaa (Reinsalu) would lead the next government, probably with Keskerakond and/or SDE; EKRE, split in 2024 and stuck at 14-18%, is in no position to lead a government but could join as Isamaa's junior partner (as in 2019-21), a possible scenario if the centre-right were to prefer a right-wing coalition."
  },
  "fonti": [
   "https://news.err.ee/1610165908/norstat-isamaa-extends-lead-in-front-of-center-again",
   "https://en.wikipedia.org/wiki/Next_Estonian_parliamentary_election"
  ],
  "popolazione": 1.4,
  "ue": true,
  "nome_en": "Estonia"
 },
 {
  "iso": "428",
  "sigla": "LV",
  "nome": "Lettonia",
  "governo": {
   "premier": "Andris Kulbergs",
   "partito": "Apvienotais saraksts (AS)",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "AS",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Jaunā Vienotība",
     "famiglia": "centrodestra"
    },
    {
     "partito": "Nacionālā apvienība",
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "ZZS",
     "famiglia": "centro"
    }
   ],
   "dal": "2026-05",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": true,
   "note": "Governo nato il 28/5/2026 dopo la caduta di Siliņa (JV). Alle elezioni del 3/10/2026 AS ha stravinto (41 seggi): il presidente Rinkēvičs ha incaricato Kulbergs il 6/10, la nomina formale avverrà con la prima seduta della Saeima il 3/11 e il nuovo governo (probabilmente AS–NA–JV, 58 seggi) è atteso entro il 18/11.",
   "note_en": "Government formed on 28/5/2026 after the fall of Siliņa (JV). At the election of 3/10/2026 AS won by a landslide (41 seats): President Rinkēvičs asked Kulbergs to form a government on 6/10, the formal nomination will take place at the first sitting of the Saeima on 3/11 and the new government (probably AS–NA–JV, 58 seats) is expected by 18/11."
  },
  "ultime_elezioni": {
   "data": "2026-10",
   "risultati": [
    {
     "partito": "AS",
     "pct": 35.8,
     "famiglia": "centrodestra"
    },
    {
     "partito": "LPV",
     "pct": 13.3,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "SV–AJ",
     "pct": 11.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "NA",
     "pct": 9.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Progresīvie",
     "pct": 8.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "JV",
     "pct": 6.5,
     "famiglia": "centrodestra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2030-10",
   "tipo": "legislative",
   "note": "Prossima Saeima a ottobre 2030; nel 2027 la Saeima elegge il presidente della Repubblica.",
   "note_en": "Next Saeima election in October 2030; in 2027 the Saeima elects the President of the Republic."
  },
  "sondaggi": {
   "data": "2026-09",
   "fonte": "SKDS/LTV (4-16 set 2026, ultimo sondaggio pre-elettorale)",
   "partiti": [
    {
     "partito": "AS",
     "pct": 22.7,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SV–AJ",
     "pct": 14.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "LPV",
     "pct": 13.3,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Progresīvie",
     "pct": 10.2,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "NA",
     "pct": 8.7,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "JV",
     "pct": 6.8,
     "famiglia": "centrodestra"
    },
    {
     "partito": "ZZS",
     "pct": 6.5,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "SKDS/LTV (4-16 Sep 2026, last pre-election poll)"
  },
  "destra_principale": {
   "partito": "Latvija pirmajā vietā (LPV)",
   "leader": "Ainārs Šlesers",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 13.3,
   "pct_ultime_elezioni": 13.3,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "partner_trend": true,
   "coalizione": "centrodestra",
   "partner_coalizione": true,
   "commento_coalizione": "Il voto di ottobre 2026 ha consegnato ad AS una posizione dominante: la Lista Unita guiderà un governo di centrodestra con la nazional-conservatrice NA e JV. LPV di Šlesers e la populista SV–AJ sommano il 25% ma restano isolate: la destra radicale governa solo tramite NA come partner minore.",
   "partner_primo": true,
   "commento_coalizione_en": "The October 2026 vote handed AS a dominant position: the United List will lead a centre-right government with the national-conservative NA and JV. Šlesers's LPV and the populist SV–AJ together total 25% but remain isolated: the radical right governs only through NA as a junior partner."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Latvian_parliamentary_election",
   "https://eng.lsm.lv/article/politics/politics/06.10.2026-president-asks-kulbergs-to-form-next-latvian-government.a666382/",
   "https://politpro.eu/en/latvia"
  ],
  "popolazione": 1.9,
  "ue": true,
  "nome_en": "Latvia"
 },
 {
  "iso": "440",
  "sigla": "LT",
  "nome": "Lituania",
  "governo": {
   "premier": "Mindaugas Sinkevičius",
   "partito": "LSDP",
   "famiglia": "centrosinistra",
   "coalizione": [
    {
     "partito": "LSDP",
     "famiglia": "centrosinistra"
    },
    {
     "partito": "DSVL",
     "famiglia": "centro"
    },
    {
     "partito": "LVŽS",
     "famiglia": "centrodestra"
    },
    {
     "partito": "LLRA-KŠS",
     "famiglia": "centrodestra"
    }
   ],
   "dal": "2026-07",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "A giugno 2026 i socialdemocratici hanno rotto con la populista Nemuno aušra; la premier Ruginienė si è dimessa e il leader LSDP Sinkevičius è stato insediato il 14/7 alla guida di una coalizione con maggioranza risicata (circa 76 seggi su 141). Il governo resta impopolare e i conservatori TS-LKD guidano i sondaggi.",
   "note_en": "In June 2026 the Social Democrats broke with the populist Nemuno aušra; Prime Minister Ruginienė resigned and LSDP leader Sinkevičius was sworn in on 14/7 at the head of a coalition with a slim majority (around 76 of 141 seats). The government remains unpopular and the conservative TS-LKD lead the polls."
  },
  "ultime_elezioni": {
   "data": "2024-10",
   "risultati": [
    {
     "partito": "LSDP",
     "pct": 19.7,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "TS-LKD",
     "pct": 18.4,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Nemuno aušra",
     "pct": 15.3,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "DSVL",
     "pct": 9.4,
     "famiglia": "centro"
    },
    {
     "partito": "Liberalų sąjūdis",
     "pct": 7.9,
     "famiglia": "centro"
    },
    {
     "partito": "LVŽS",
     "pct": 7.2,
     "famiglia": "centrodestra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2028-10",
   "tipo": "legislative",
   "note": "Seimas a ottobre 2028; presidenziali a maggio 2029.",
   "note_en": "Seimas election in October 2028; presidential election in May 2029."
  },
  "sondaggi": {
   "data": "2026-08",
   "fonte": "Baltijos tyrimai (31 ago 2026), via PolitPro",
   "partiti": [
    {
     "partito": "TS-LKD",
     "pct": 17.4,
     "famiglia": "centrodestra"
    },
    {
     "partito": "LSDP",
     "pct": 17.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "LVŽS",
     "pct": 14.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Nemuno aušra",
     "pct": 12.4,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Liberalų sąjūdis",
     "pct": 9.0,
     "famiglia": "centro"
    },
    {
     "partito": "DSVL",
     "pct": 7.3,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "Baltijos tyrimai (31 Aug 2026), via PolitPro"
  },
  "destra_principale": {
   "partito": "Nemuno aušra",
   "leader": "Remigijus Žemaitaitis",
   "gruppo_pe": "n/a",
   "pct_sondaggio": 12.4,
   "pct_ultime_elezioni": 15.3,
   "trend": "in_calo"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrosinistra",
   "coalizione": "centrodestra",
   "commento_coalizione": "Se si votasse oggi TS-LKD sarebbe primo partito e guiderebbe un governo di centrodestra con i liberali; Nemuno aušra, espulsa dalla coalizione e in calo rispetto al 2024, è isolata e potrebbe tornare al governo solo come partner di una LSDP indebolita, scenario oggi poco probabile.",
   "commento_coalizione_en": "If the vote were held today TS-LKD would be the largest party and would lead a centre-right government with the liberals; Nemuno aušra, expelled from the coalition and down on 2024, is isolated and could return to government only as the partner of a weakened LSDP, a scenario that is unlikely today."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Sinkevi%C4%8Dius_Cabinet",
   "https://politpro.eu/en/lithuania"
  ],
  "popolazione": 2.9,
  "ue": true,
  "nome_en": "Lithuania"
 },
 {
  "iso": "442",
  "sigla": "LU",
  "nome": "Lussemburgo",
  "governo": {
   "premier": "Luc Frieden",
   "partito": "CSV",
   "famiglia": "centrodestra",
   "coalizione": [
    {
     "partito": "CSV",
     "famiglia": "centrodestra"
    },
    {
     "partito": "DP",
     "famiglia": "centro"
    }
   ],
   "dal": "2023-11",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "Coalizione CSV–DP con 35 seggi su 60, stabile ma in calo nei consensi: nei sondaggi 2026 CSV, DP e LSAP sono quasi appaiati e la maggioranza uscente (circa 44-45%) non verrebbe riconfermata.",
   "note_en": "CSV–DP coalition with 35 of 60 seats, stable but losing support: in the 2026 polls CSV, DP and LSAP are almost level and the outgoing majority (around 44-45%) would not be renewed."
  },
  "ultime_elezioni": {
   "data": "2023-10",
   "risultati": [
    {
     "partito": "CSV",
     "pct": 29.2,
     "famiglia": "centrodestra"
    },
    {
     "partito": "LSAP",
     "pct": 18.9,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "DP",
     "pct": 18.7,
     "famiglia": "centro"
    },
    {
     "partito": "ADR",
     "pct": 9.3,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "déi gréng",
     "pct": 8.6,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Piraten",
     "pct": 6.7,
     "famiglia": "centro"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2028-10",
   "tipo": "legislative",
   "note": "Elezioni della Camera dei deputati entro l'8 ottobre 2028.",
   "note_en": "Chamber of Deputies election by 8 October 2028."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "ILRES / RTL-Luxemburger Wort (22 set – 2 ott 2026)",
   "partiti": [
    {
     "partito": "CSV",
     "pct": 22.8,
     "famiglia": "centrodestra"
    },
    {
     "partito": "DP",
     "pct": 21.7,
     "famiglia": "centro"
    },
    {
     "partito": "LSAP",
     "pct": 18.2,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "ADR",
     "pct": 12.8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "déi gréng",
     "pct": 10.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "déi Lénk",
     "pct": 5.8,
     "famiglia": "sinistra"
    },
    {
     "partito": "Piraten",
     "pct": 3.8,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "ILRES / RTL-Luxemburger Wort (22 Sep – 2 Oct 2026)"
  },
  "destra_principale": {
   "partito": "ADR",
   "leader": "Fred Keup (capogruppo)",
   "gruppo_pe": "NI",
   "pct_sondaggio": 12.8,
   "pct_ultime_elezioni": 9.3,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "coalizione": "centrodestra",
   "commento_coalizione": "CSV resta primo partito ma la perdita di consensi apre a una coalizione alternativa DP–LSAP–Verdi; l'ADR cresce (12-13%) ma anche con il CSV non raggiungerebbe la maggioranza e nessun partito la considera un partner: la destra radicale non può realisticamente governare entro il 2030.",
   "commento_coalizione_en": "CSV remains the largest party but its loss of support opens the way to an alternative DP–LSAP–Greens coalition; the ADR is growing (12-13%) but even with the CSV it would not reach a majority and no party regards it as a partner: the radical right cannot realistically govern by 2030."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Next_Luxembourg_general_election",
   "https://politpro.eu/en/luxembourg"
  ],
  "popolazione": 0.68,
  "ue": true,
  "nome_en": "Luxembourg"
 },
 {
  "iso": "470",
  "sigla": "MT",
  "nome": "Malta",
  "governo": {
   "premier": "Robert Abela",
   "partito": "PL",
   "famiglia": "centrosinistra",
   "coalizione": [
    {
     "partito": "PL",
     "famiglia": "centrosinistra"
    }
   ],
   "dal": "2026-06",
   "tipo": "maggioranza",
   "destra_nazionalista_al_governo": false,
   "note": "Abela (premier dal gennaio 2020) ha vinto le elezioni anticipate del 30/5/2026, quarta vittoria consecutiva del Labour. Maggioranza ridotta (42 seggi contro 37 del PN di Alex Borg) e vantaggio di voti quasi dimezzato rispetto al 2022.",
   "note_en": "Abela (prime minister since January 2020) won the snap election of 30/5/2026, Labour's fourth consecutive victory. Reduced majority (42 seats against 37 for Alex Borg's PN) and a vote lead almost halved compared with 2022."
  },
  "ultime_elezioni": {
   "data": "2026-05",
   "risultati": [
    {
     "partito": "PL",
     "pct": 51.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PN",
     "pct": 44.7,
     "famiglia": "centrodestra"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2031-06",
   "tipo": "legislative",
   "note": "Legislatura quinquennale: scadenza legale intorno all'estate 2031.",
   "note_en": "Five-year term: legal deadline around summer 2031."
  },
  "sondaggi": {
   "data": "2026-05",
   "fonte": "MaltaToday (13-24 mag 2026, ultimo sondaggio pre-elettorale)",
   "partiti": [
    {
     "partito": "PL",
     "pct": 50.6,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PN",
     "pct": 44.2,
     "famiglia": "centrodestra"
    }
   ],
   "fonte_en": "MaltaToday (13-24 May 2026, last pre-election poll)"
  },
  "destra_principale": {
   "partito": "Nessuna forza rilevante",
   "leader": "—",
   "gruppo_pe": "n/a",
   "pct_sondaggio": null,
   "pct_ultime_elezioni": null,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "centrosinistra",
   "status_quo": "centrosinistra",
   "coalizione": "centrosinistra",
   "commento_coalizione": "Sistema bipartitico senza una destra radicale rilevante: il Labour ha appena rinnovato il mandato fino al 2031 e l'unica alternativa è il PN di centrodestra; nessuno scenario di governo per la destra nazionalista.",
   "commento_coalizione_en": "Two-party system with no significant radical right: Labour has just renewed its mandate until 2031 and the only alternative is the centre-right PN; no government scenario for the nationalist right."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Maltese_general_election"
  ],
  "popolazione": 0.56,
  "ue": true,
  "nome_en": "Malta"
 },
 {
  "iso": "196",
  "sigla": "CY",
  "nome": "Cipro",
  "governo": {
   "premier": "Nikos Christodoulides (Presidente)",
   "partito": "Indipendente",
   "famiglia": "centro",
   "coalizione": [
    {
     "partito": "DIKO",
     "famiglia": "centro"
    },
    {
     "partito": "EDEK",
     "famiglia": "centrosinistra"
    },
    {
     "partito": "DIPA",
     "famiglia": "centro"
    }
   ],
   "dal": "2023-03",
   "tipo": "minoranza",
   "destra_nazionalista_al_governo": false,
   "note": "Repubblica presidenziale senza primo ministro: il gabinetto è nominato dal presidente Christodoulides (indipendente, ex DISY). Dopo le legislative del 24/5/2026 EDEK e DIPA hanno perso tutti i seggi e il governo si regge in Parlamento solo su DIKO (8 seggi su 56).",
   "note_en": "Presidential republic with no prime minister: the cabinet is appointed by President Christodoulides (independent, formerly DISY). After the parliamentary election of 24/5/2026 EDEK and DIPA lost all their seats and the government relies in Parliament solely on DIKO (8 of 56 seats)."
  },
  "ultime_elezioni": {
   "data": "2026-05",
   "risultati": [
    {
     "partito": "DISY",
     "pct": 27.2,
     "famiglia": "centrodestra"
    },
    {
     "partito": "AKEL",
     "pct": 23.9,
     "famiglia": "sinistra"
    },
    {
     "partito": "ELAM",
     "pct": 10.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "DIKO",
     "pct": 10.0,
     "famiglia": "centro"
    },
    {
     "partito": "ALMA",
     "pct": 5.8,
     "famiglia": "centro"
    },
    {
     "partito": "ADK (Fidias)",
     "pct": 5.4,
     "famiglia": "centro"
    }
   ]
  },
  "prossime_elezioni": {
   "data": "2028-02",
   "tipo": "presidenziali",
   "note": "Presidenziali a febbraio 2028; legislative a maggio 2031.",
   "note_en": "Presidential election in February 2028; parliamentary election in May 2031."
  },
  "sondaggi": {
   "data": "2026-05",
   "fonte": "Risultati legislative 24/5/2026 (nessun sondaggio partitico successivo reperito)",
   "partiti": [
    {
     "partito": "DISY",
     "pct": 27.2,
     "famiglia": "centrodestra"
    },
    {
     "partito": "AKEL",
     "pct": 23.9,
     "famiglia": "sinistra"
    },
    {
     "partito": "ELAM",
     "pct": 10.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "DIKO",
     "pct": 10.0,
     "famiglia": "centro"
    },
    {
     "partito": "ALMA",
     "pct": 5.8,
     "famiglia": "centro"
    },
    {
     "partito": "ADK (Fidias)",
     "pct": 5.4,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "Parliamentary election results 24/5/2026 (no subsequent party poll found)"
  },
  "destra_principale": {
   "partito": "ELAM",
   "leader": "Christos Christou",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 10.9,
   "pct_ultime_elezioni": 10.9,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centro",
   "coalizione": "centrodestra",
   "commento_coalizione": "Nel sistema presidenziale conta il voto del 2028: DISY è tornato primo partito e i partiti centristi che sostengono Christodoulides sono crollati, quindi il prossimo presidente verrebbe probabilmente dall'area di centrodestra. ELAM, terza forza all'11%, può pesare come ago della bilancia al ballottaggio ma non ha la massa per esprimere un presidente entro il 2030.",
   "commento_coalizione_en": "In the presidential system the 2028 vote is what counts: DISY is back as the largest party and the centrist parties backing Christodoulides have collapsed, so the next president would probably come from the centre-right camp. ELAM, the third force at 11%, can act as kingmaker in the run-off but lacks the critical mass to produce a president by 2030."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Cypriot_legislative_election",
   "https://en.wikipedia.org/wiki/2028_Cypriot_presidential_election"
  ],
  "popolazione": 0.97,
  "ue": true,
  "nome_en": "Cyprus"
 }
];
