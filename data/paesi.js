// popolazione: milioni, Eurostat 1 gennaio 2025 (arrotondata); ue: membro dell'Unione.
// Dati politici per paese, aggiornati al 19 ottobre 2026. Fonti per paese nel campo "fonti".
// scenario.coalizione = coalizione più probabile secondo i sondaggi (valutazione); scenario.trend = se la crescita della destra nazionalista continua.
// I campi *_en e *_de sono le versioni inglese e tedesca dei testi (nome, note, nota, fonte, commento_coalizione): vanno aggiornati insieme a quelli italiani.
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
   "note": "Governo stabile al quarto anno; FdI in leggera crescita (27-28%). Novità del 2026: Futuro Nazionale di Vannacci (scissione dalla Lega) al 7-8%, che erode la Lega ma allarga l'area di destra. L'8 ottobre 2026 la Camera ha approvato in via definitiva la nuova legge elettorale (227 sì, 164 no) dopo tre voti di fiducia; le opposizioni preparano i ricorsi alla Consulta. Il voto anticipato a fine maggio 2027 resta un'ipotesi smentita dal governo e osteggiata da FI e Lega.",
   "note_en": "Stable government in its fourth year; FdI slightly up (27-28%). New in 2026: Vannacci's Futuro Nazionale (a split from the Lega) at 7-8%, eroding the Lega but widening the right-wing area. On 8 October 2026 the Chamber gave final approval to the new electoral law (227 to 164) after three confidence votes; the opposition is preparing appeals to the Constitutional Court. A snap election in late May 2027 remains a hypothesis denied by the government and opposed by FI and the Lega.",
   "note_de": "Stabile Regierung im vierten Jahr; FdI leicht im Aufwind (27-28%). Neu 2026: Vannaccis Futuro Nazionale (Abspaltung von der Lega) bei 7-8%, das die Lega schwächt, aber das rechte Lager verbreitert. Am 8. Oktober 2026 hat die Abgeordnetenkammer das neue Wahlgesetz nach drei Vertrauensabstimmungen endgültig verabschiedet (227 Ja, 164 Nein); die Opposition bereitet Klagen vor dem Verfassungsgericht vor. Eine vorgezogene Wahl Ende Mai 2027 bleibt eine von der Regierung dementierte und von FI und Lega abgelehnte Hypothese."
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
   "note_en": "End of the regular parliamentary term (by 22 December 2027); a snap election in spring 2027 is under discussion.",
   "note_de": "Reguläres Ende der Legislaturperiode (bis zum 22. Dezember 2027); eine Neuwahl im Frühjahr 2027 wird diskutiert."
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
   "fonte_en": "SWG (7-12 October 2026)",
   "fonte_de": "SWG (7.-12. Oktober 2026)"
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
   "commento_coalizione": "Il centrodestra a guida FdI vale circa il 43% e resterebbe maggioranza anche senza Vannacci; nella Supermedia Youtrend del 15 ottobre 2026 il campo largo (PD-M5S-AVS e alleati) lo tallona al 43,1% contro 42,9%, ma è competitivo solo se pienamente unito. La destra nazionalista governa già e, salvo crolli, è favorita per il 2027.",
   "commento_coalizione_en": "The FdI-led centre-right is worth about 43% and would keep its majority even without Vannacci; in the Youtrend poll average of 15 October 2026 the broad progressive field (PD-M5S-AVS and allies) is close behind at 43.1% to 42.9%, but it is competitive only if fully united. The nationalist right already governs and, barring a collapse, is the favourite for 2027.",
   "commento_coalizione_de": "Das von FdI geführte Mitte-rechts-Lager liegt bei rund 43% und bliebe auch ohne Vannacci in der Mehrheit; im Youtrend-Umfragemittel vom 15. Oktober 2026 folgt das breite Mitte-links-Bündnis (PD-M5S-AVS und Verbündete) mit 43,1% zu 42,9% dicht dahinter, ist aber nur geschlossen konkurrenzfähig. Die nationalistische Rechte regiert bereits und ist, von einem Einbruch abgesehen, für 2027 Favoritin."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Italian_general_election",
   "https://sondaggibidimedia.com/sondaggio-eumetra-7-ottobre-2026/",
   "https://www.stampaparlamento.it/2026/10/13/sondaggi-meloni-allunga-su-schlein-il-pd-scivola-verso-il-20-centrodestra-oltre-il-42/"
  ],
  "popolazione": 58.9,
  "ue": true,
  "nome_en": "Italy",
  "nome_de": "Italien"
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
   "note": "Governo Lecornu II (dal 10 ottobre 2025), di minoranza, sopravvive grazie alla non-censura del PS e ha usato il 49.3 per il bilancio 2026. Il bilancio 2027 è in aula dal 13 ottobre 2026: la mozione di rigetto del PS è stata respinta 149-236 perché il RN non l'ha votata; il PS minaccia la censura se il testo non cambia, LFI la voterà in caso di 49.3. Nei sondaggi presidenziali della settimana Le Pen è tra il 32% e il 37% al primo turno.",
   "note_en": "The Lecornu II minority government (since 10 October 2025) survives thanks to the PS not voting censure and used article 49.3 for the 2026 budget. The 2027 budget has been on the floor since 13 October 2026: the PS motion to reject it was defeated 149-236 because the RN did not back it; the PS threatens censure if the text does not change, LFI will vote it if 49.3 is used. In this week's presidential polls Le Pen stands at 32-37% in the first round.",
   "note_de": "Die Minderheitsregierung Lecornu II (seit 10. Oktober 2025) überlebt dank des Verzichts der PS auf ein Misstrauensvotum und hat für den Haushalt 2026 den Artikel 49.3 genutzt. Der Haushalt 2027 wird seit dem 13. Oktober 2026 im Plenum beraten: Der Ablehnungsantrag der PS scheiterte mit 149 zu 236, weil der RN ihn nicht mittrug; die PS droht mit einem Misstrauensvotum, falls sich der Text nicht ändert, LFI würde es bei einem 49.3 unterstützen. In den Präsidentschaftsumfragen der Woche liegt Le Pen im ersten Wahlgang zwischen 32% und 37%."
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
   "note_en": "Presidential election April-May 2027 (Le Pen leads the polls, eligible after the appeal ruling of 7 July 2026 but with an appeal to the Court of Cassation pending); legislative elections by June 2029 unless parliament is dissolved again.",
   "note_de": "Präsidentschaftswahl April-Mai 2027 (Le Pen in den Umfragen Favoritin, nach dem Berufungsurteil vom 7.7.2026 wählbar, aber mit anhängiger Revision vor dem Kassationshof); Parlamentswahl bis Juni 2029, sofern keine erneute Auflösung erfolgt."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media sondaggi legislative (18 ottobre 2026)",
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
   "fonte_en": "PolitPro, legislative poll average (18 October 2026)",
   "fonte_de": "PolitPro, Umfragemittel Parlamentswahl (18. Oktober 2026)"
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
   "commento_coalizione_en": "With RN at 35% and Le Pen at 32-37% in the first round of the presidential election, the nationalist right is the favourite to lead both the government and the Élysée in 2027; the republican front is weakened and RN could govern alone or with part of LR.",
   "commento_coalizione_de": "Mit dem RN bei 35% und Le Pen bei 32-37% im ersten Wahlgang der Präsidentschaftswahl ist die nationalistische Rechte Favoritin für die Führung von Regierung und Élysée im Jahr 2027; die republikanische Front ist geschwächt, und der RN könnte allein oder mit einem Teil von LR regieren."
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
   "nota_en": "In the Fifth Republic the president leads the executive: Prime Minister Lecornu runs a minority government until the 2027 presidential election.",
   "nota_de": "In der Fünften Republik führt der Präsident die Exekutive: Premierminister Lecornu leitet bis zur Präsidentschaftswahl 2027 eine Minderheitsregierung."
  },
  "popolazione": 68.6,
  "ue": true,
  "nome_en": "France",
  "nome_de": "Frankreich"
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
   "note": "Grande coalizione nero-rossa molto impopolare (circa 89% di insoddisfatti nel DeutschlandTrend di ottobre 2026) e logorata da liti su sanità, fisco e pensioni. Il 12 ottobre 2026 la ministra del Lavoro e co-presidente SPD Bärbel Bas si è dimessa da entrambe le cariche citando un lutto e gli attacchi della Union; le succede Alexander Schweitzer al ministero, mentre la SPD sceglierà il nuovo co-leader a un congresso tra dicembre e gennaio. Merz esclude elezioni anticipate. L'AfD, al 29-30% in INSA e al 26% in Forsa, ha superato stabilmente la Union.",
   "note_en": "The black-red grand coalition is deeply unpopular (about 89% dissatisfied in the October 2026 DeutschlandTrend) and worn down by rows over health, tax and pensions. On 12 October 2026 Labour Minister and SPD co-leader Bärbel Bas resigned from both posts, citing a bereavement and attacks from the Union; Alexander Schweitzer takes over the ministry, while the SPD will pick a new co-leader at a congress in December or January. Merz rules out a snap election. The AfD, at 29-30% with INSA and 26% with Forsa, has consistently overtaken the Union.",
   "note_de": "Die schwarz-rote Große Koalition ist sehr unbeliebt (rund 89% Unzufriedene im DeutschlandTrend vom Oktober 2026) und von Streit über Gesundheit, Steuern und Rente zermürbt. Am 12. Oktober 2026 ist Arbeitsministerin und SPD-Co-Vorsitzende Bärbel Bas unter Verweis auf einen Trauerfall und Angriffe aus der Union von beiden Ämtern zurückgetreten; Alexander Schweitzer übernimmt das Ministerium, die SPD wählt auf einem Parteitag im Dezember oder Januar eine neue Doppelspitze. Merz schließt Neuwahlen aus. Die AfD, bei 29-30% (INSA) und 26% (Forsa), liegt stabil vor der Union."
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
   "note_en": "End of the regular term (by 26 March 2029); the coalition has no majority in the polls but Merz rules out a snap election.",
   "note_de": "Reguläres Ende der Legislaturperiode (bis zum 26. März 2029); Koalition ohne Mehrheit in den Umfragen, aber Merz schließt eine Neuwahl aus."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "INSA per Bild am Sonntag (12-16 ottobre 2026)",
   "partiti": [
    {
     "partito": "AfD",
     "pct": 29.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "CDU/CSU",
     "pct": 18.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Grüne",
     "pct": 14.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "SPD",
     "pct": 13.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Linke",
     "pct": 11.0,
     "famiglia": "sinistra"
    },
    {
     "partito": "BSW",
     "pct": 4.0,
     "famiglia": "sinistra"
    },
    {
     "partito": "FDP",
     "pct": 4.0,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "INSA for Bild am Sonntag (12-16 October 2026)",
   "fonte_de": "INSA für Bild am Sonntag (12.-16. Oktober 2026)"
  },
  "destra_principale": {
   "partito": "AfD",
   "leader": "Alice Weidel",
   "gruppo_pe": "ESN",
   "pct_sondaggio": 29.0,
   "pct_ultime_elezioni": 20.8,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrodestra",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "L'AfD è primo partito al 26-30% e Union, SPD e Verdi insieme non arrivano al 50%: dopo un voto anticipato una maggioranza senza l'AfD non esiste nei numeri, e il cordone (Brandmauer) regge solo finché la CDU accetta di governare con tutta la sinistra. Qui si assume che ceda: governo a guida AfD o AfD-Union.",
   "commento_coalizione_en": "The AfD is the largest party at 26-30% and the Union, SPD and Greens together fall short of 50%: after a snap election no majority without the AfD exists in the numbers, and the firewall (Brandmauer) holds only as long as the CDU is willing to govern with the entire left. The assumption here is that it gives way: an AfD-led or AfD-Union government.",
   "commento_coalizione_de": "Die AfD ist mit 26-30% stärkste Partei, und Union, SPD und Grüne kommen zusammen nicht auf 50%: Nach einer Neuwahl gibt es rechnerisch keine Mehrheit ohne die AfD, und die Brandmauer hält nur, solange die CDU bereit ist, mit der gesamten Linken zu regieren. Hier wird angenommen, dass sie fällt: Regierung unter Führung der AfD oder AfD-Union."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_German_federal_election",
   "https://dawum.de/Bundestag/INSA/",
   "https://www.finanznachrichten.de/nachrichten-2026-10/69733921-ard-deutschlandtrend-afd-weiter-in-der-sonntagsfrage-deutlich-vor-der-union-007.htm"
  ],
  "anticipate": {
   "data": "2028-03",
   "nota": "Coalizione Merz senza maggioranza nei sondaggi e con l'89% di insoddisfatti: una crisi prima della scadenza del 2029 è lo sbocco più probabile.",
   "nota_en": "The Merz coalition has no majority in the polls and 89% dissatisfied: a crisis before the 2029 end of term is the most likely outcome.",
   "nota_de": "Koalition Merz ohne Mehrheit in den Umfragen und mit 89% Unzufriedenen: Eine Krise vor dem regulären Ende 2029 ist der wahrscheinlichste Ausgang."
  },
  "popolazione": 83.6,
  "ue": true,
  "nome_en": "Germany",
  "nome_de": "Deutschland"
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
   "note": "Dopo la rottura con Junts (ottobre 2025) e la bocciatura dei decreti sulla casa, Sánchez ha sciolto le Cortes il 5 ottobre 2026 e convocato elezioni anticipate per il 29 novembre 2026; il governo resta in carica fino all'insediamento del successivo. La precampagna è iniziata l'11 ottobre: Abascal pone a Feijóo tre condizioni per un patto (priorità nazionale, 'remigrazione', riduzione delle tasse), mentre Vox tocca il 19,5% in Sigma Dos, il suo massimo.",
   "note_en": "After the break with Junts (October 2025) and the defeat of the housing decrees, Sánchez dissolved the Cortes on 5 October 2026 and called a snap election for 29 November 2026; the government stays in office until the next one is sworn in. The pre-campaign began on 11 October: Abascal sets Feijóo three conditions for a pact (national priority, 'remigration', tax cuts), while Vox reaches 19.5% with Sigma Dos, its record.",
   "note_de": "Nach dem Bruch mit Junts (Oktober 2025) und dem Scheitern der Wohnungsdekrete hat Sánchez die Cortes am 5. Oktober 2026 aufgelöst und Neuwahlen für den 29. November 2026 angesetzt; die Regierung bleibt bis zur Vereidigung der nächsten im Amt. Der Vorwahlkampf begann am 11. Oktober: Abascal stellt Feijóo drei Bedingungen für einen Pakt (nationale Priorität, 'Remigration', Steuersenkungen), während Vox bei Sigma Dos mit 19,5% seinen Höchstwert erreicht."
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
   "note_en": "Snap general election on 29 November 2026 (the regular term would have ended in August 2027).",
   "note_de": "Vorgezogene Parlamentswahl am 29. November 2026 (reguläres Ende der Legislaturperiode wäre August 2027 gewesen)."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "Sigma Dos per El Mundo (1-14 ottobre 2026)",
   "partiti": [
    {
     "partito": "PP",
     "pct": 31.5,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PSOE",
     "pct": 25.3,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Vox",
     "pct": 19.5,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Sumar",
     "pct": 7.2,
     "famiglia": "sinistra"
    },
    {
     "partito": "Podemos",
     "pct": 2.8,
     "famiglia": "sinistra"
    },
    {
     "partito": "ERC",
     "pct": 2.5,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Junts",
     "pct": 1.2,
     "famiglia": "centrodestra"
    }
   ],
   "fonte_en": "Sigma Dos for El Mundo (1-14 October 2026)",
   "fonte_de": "Sigma Dos für El Mundo (1.-14. Oktober 2026)"
  },
  "destra_principale": {
   "partito": "Vox",
   "leader": "Santiago Abascal",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 19.5,
   "pct_ultime_elezioni": 12.4,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrosinistra",
   "partner_trend": true,
   "coalizione": "centrodestra",
   "partner_coalizione": true,
   "commento_coalizione": "PP e Vox sommano circa 200 seggi (maggioranza assoluta 176): il 29 novembre è molto probabile un governo Feijóo con Vox come partner o appoggio esterno. Vox è in forte crescita (19-19,5%, 68 seggi stimati da Sigma Dos) e detta già le condizioni, ma resta junior partner; difficile che guidi da solo l'esecutivo entro il 2030.",
   "partner_primo": true,
   "commento_coalizione_en": "PP and Vox add up to about 200 seats (absolute majority 176): on 29 November a Feijóo government with Vox as partner or external support is very likely. Vox is growing strongly (19-19.5%, 68 seats projected by Sigma Dos) and is already setting conditions, but remains the junior partner; it is unlikely to lead the executive on its own by 2030.",
   "commento_coalizione_de": "PP und Vox kommen zusammen auf rund 200 Sitze (absolute Mehrheit 176): Am 29. November ist eine Regierung Feijóo mit Vox als Partner oder externer Stütze sehr wahrscheinlich. Vox wächst stark (19-19,5%, 68 Sitze laut Sigma Dos) und stellt bereits Bedingungen, bleibt aber Juniorpartner; dass es bis 2030 allein die Regierung führt, ist unwahrscheinlich."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Spanish_general_election",
   "https://www.democrata.es/elecciones-generales-espana/herramientas/encuestas",
   "https://electomania.es/sanchez-disuelve-las-cortes-y-convoca-elecciones-generales-para-el-29-de-noviembre/"
  ],
  "popolazione": 49.1,
  "ue": true,
  "nome_en": "Spain",
  "nome_de": "Spanien"
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
   "note": "Burnham ha sostituito Starmer il 20 luglio 2026 dopo le sue dimissioni (eletto leader senza avversari); ha rimosso Reeves e dato una svolta sociale. Il 'Burnham bounce' ha riportato il Labour davanti a Reform UK, indebolito anche dallo scandalo della donazione a Farage. A ottobre 2026 Burnham ha rilanciato l'avvicinamento all'UE (vertice Regno Unito-UE il 20 novembre) e denunciato le interferenze russe nel referendum Brexit; le medie dei sondaggi danno il Labour al 27% e Reform al 22%.",
   "note_en": "Burnham replaced Starmer on 20 July 2026 after his resignation (elected leader unopposed); he removed Reeves and shifted to the left on social policy. The 'Burnham bounce' has put Labour back ahead of Reform UK, which has also been weakened by the scandal over the donation to Farage. In October 2026 Burnham pushed closer ties with the EU (UK-EU summit on 20 November) and denounced Russian interference in the Brexit referendum; poll averages put Labour at 27% and Reform at 22%.",
   "note_de": "Burnham hat Starmer am 20. Juli 2026 nach dessen Rücktritt abgelöst (ohne Gegenkandidaten zum Parteichef gewählt); er hat Reeves entlassen und einen sozialen Kurswechsel eingeleitet. Der 'Burnham-Bounce' hat Labour wieder vor Reform UK gebracht, das auch durch den Skandal um die Spende an Farage geschwächt ist. Im Oktober 2026 hat Burnham die Annäherung an die EU forciert (Gipfel Vereinigtes Königreich-EU am 20. November) und russische Einmischung ins Brexit-Referendum angeprangert; die Umfragemittel sehen Labour bei 27% und Reform bei 22%."
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
   "note_en": "Statutory deadline 15 August 2029; Burnham has a large majority and has not announced a snap election.",
   "note_de": "Gesetzliche Frist 15. August 2029; Burnham verfügt über eine breite Mehrheit und hat keine Neuwahl angekündigt."
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
   "fonte_en": "YouGov (11-12 October 2026)",
   "fonte_de": "YouGov (11.-12. Oktober 2026)"
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
   "commento_coalizione_en": "Editorial assumption of the platform: Reform UK wins the 2029 election. In the October 2026 polls Reform is third (21%) behind Labour (24%) and the Tories (23%), after leading for over a year above 30%: the assumption here is that it returns to those levels and that first-past-the-post turns the plateau into a majority of seats for Farage.",
   "commento_coalizione_de": "Redaktionelle Annahme der Plattform: Reform UK gewinnt die Wahl 2029. In den Umfragen vom Oktober 2026 liegt Reform mit 21% auf Platz drei hinter Labour (24%) und den Tories (23%), nachdem die Partei über ein Jahr lang mit mehr als 30% geführt hatte: Hier wird angenommen, dass sie zu diesen Werten zurückkehrt und das Mehrheitswahlrecht das Plateau in eine Sitzmehrheit für Farage verwandelt."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_United_Kingdom_general_election",
   "https://en.wikipedia.org/wiki/Andy_Burnham",
   "https://www.aljazeera.com/news/2026/9/30/burnham-bounce-why-labours-rising-again-reforms-slipping"
  ],
  "popolazione": 69.3,
  "ue": false,
  "nome_en": "United Kingdom",
  "nome_de": "Vereinigtes Königreich"
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
   "note": "Primo gabinetto di minoranza dal 1945 (66 seggi su 150), insediato il 23 febbraio 2026 dopo quattro mesi di formazione; cerca maggioranze variabili (PRO su clima/azoto, JA21 su migrazione). Nel sondaggio Ipsos I&O del 14 ottobre 2026 la coalizione vale 43-44 seggi, con D66 e VVD a -5 ciascuna e JA21 a 18 seggi, appaiata al PVV. Il nodo è il pacchetto fiscale 2027, senza maggioranza: voto alla Camera il 12 novembre, trattative con PRO da una parte e JA21-SGP-BBB dall'altra.",
   "note_en": "First minority cabinet since 1945 (66 of 150 seats), sworn in on 23 February 2026 after four months of formation; it seeks shifting majorities (PRO on climate/nitrogen, JA21 on migration). In the Ipsos I&O poll of 14 October 2026 the coalition is worth 43-44 seats, with D66 and VVD down 5 each and JA21 at 18 seats, level with the PVV. The crux is the 2027 tax package, which lacks a majority: a Lower House vote on 12 November, with talks with PRO on one side and JA21-SGP-BBB on the other.",
   "note_de": "Erstes Minderheitskabinett seit 1945 (66 von 150 Sitzen), am 23. Februar 2026 nach vier Monaten Regierungsbildung vereidigt; es sucht wechselnde Mehrheiten (PRO bei Klima/Stickstoff, JA21 bei Migration). In der Ipsos-I&O-Umfrage vom 14. Oktober 2026 kommt die Koalition auf 43-44 Sitze, D66 und VVD verlieren je 5, JA21 liegt mit 18 Sitzen gleichauf mit der PVV. Knackpunkt ist das Steuerpaket 2027 ohne Mehrheit: Abstimmung in der Zweiten Kammer am 12. November, Verhandlungen mit PRO auf der einen und JA21-SGP-BBB auf der anderen Seite."
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
   "note_en": "Regular end of term (date to be confirmed). Very fragile minority cabinet: a snap election is likely well before then.",
   "note_de": "Reguläres Ende der Legislaturperiode (Datum noch zu bestätigen). Sehr fragiles Minderheitskabinett: Eine Neuwahl ist deutlich früher wahrscheinlich."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media sondaggi (18 ottobre 2026)",
   "partiti": [
    {
     "partito": "PRO (ex GL-PvdA)",
     "pct": 18.7,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PVV",
     "pct": 12.3,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "JA21",
     "pct": 11.7,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "D66",
     "pct": 10.7,
     "famiglia": "centro"
    },
    {
     "partito": "VVD",
     "pct": 9.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "CDA",
     "pct": 8.7,
     "famiglia": "centrodestra"
    },
    {
     "partito": "FvD",
     "pct": 7.5,
     "famiglia": "destra_nazionalista"
    }
   ],
   "fonte_en": "PolitPro, poll average (18 October 2026)",
   "fonte_de": "PolitPro, Umfragemittel (18. Oktober 2026)"
  },
  "destra_principale": {
   "partito": "PVV",
   "leader": "Geert Wilders",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 12.3,
   "pct_ultime_elezioni": 16.7,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centro",
   "coalizione": "centrosinistra",
   "commento_coalizione": "Il PVV si è stabilizzato intorno al 12% ma la destra nazionalista nel complesso (PVV+JA21+FvD circa 31-32%) cresce, trainata da JA21 di Eerdmans, ormai appaiata al PVV e più accettabile come partner per VVD e CDA. Con i numeri attuali guiderebbe PRO (Klaver), ma un governo VVD-CDA-JA21 (eventualmente con PVV) è uno scenario realistico se la coalizione Jetten cade.",
   "commento_coalizione_en": "The PVV has stabilised around 12% but the nationalist right as a whole (PVV+JA21+FvD, about 31-32%) is growing, driven by Eerdmans' JA21, now level with the PVV and more acceptable as a partner for VVD and CDA. On current numbers PRO (Klaver) would lead, but a VVD-CDA-JA21 government (possibly with the PVV) is a realistic scenario if the Jetten coalition falls.",
   "commento_coalizione_de": "Die PVV hat sich bei rund 12% stabilisiert, doch die nationalistische Rechte insgesamt (PVV+JA21+FvD, etwa 31-32%) wächst, getragen von Eerdmans' JA21, das inzwischen gleichauf mit der PVV liegt und für VVD und CDA als Partner eher akzeptabel ist. Nach den aktuellen Zahlen würde PRO (Klaver) führen, doch eine Regierung VVD-CDA-JA21 (eventuell mit PVV) ist ein realistisches Szenario, falls die Koalition Jetten stürzt."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Dutch_general_election",
   "https://politpro.eu/en/netherlands",
   "https://www.parlement.com/kabinet-jetten-2026-heden"
  ],
  "anticipate": {
   "data": "2027-09",
   "nota": "Primo gabinetto di minoranza dal 1945, soddisfazione al 24%: caduta e voto anticipato probabili ben prima del 2030.",
   "nota_en": "First minority cabinet since 1945, approval at 24%: a collapse and a snap election are likely well before 2030.",
   "nota_de": "Erstes Minderheitskabinett seit 1945, Zufriedenheit bei 24%: Sturz und Neuwahl deutlich vor 2030 wahrscheinlich."
  },
  "popolazione": 18.0,
  "ue": true,
  "nome_en": "Netherlands",
  "nome_de": "Niederlande"
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
   "note": "Coalizione 'Arizona' di maggioranza impegnata in austerità e riforme (pensioni, lavoro) contestate dai sindacati. A ottobre 2026 è in crisi sul bilancio: dopo il secondo sciopero nazionale del 12 ottobre De Wever ha annullato lo State of the Union del 13, il 'kern' ha respinto il suo pacchetto ridotto da 4 miliardi e si negozia di nuovo un piano pluriennale da 10 miliardi, con MR e CD&V contrari all'aumento generale dell'IVA. De Wever resta popolare e N-VA è l'unico partito di governo premiato nei sondaggi, mentre il Vlaams Belang lo supera in diverse rilevazioni fiamminghe.",
   "note_en": "The majority 'Arizona' coalition is pursuing austerity and reforms (pensions, labour) contested by the unions. In October 2026 it is in a budget crisis: after the second national strike on 12 October De Wever cancelled the State of the Union on the 13th, the inner cabinet rejected his reduced 4 billion package and a 10 billion multi-year plan is being negotiated again, with MR and CD&V opposed to a general VAT increase. De Wever remains popular and N-VA is the only governing party rewarded in the polls, while Vlaams Belang overtakes it in several Flemish surveys.",
   "note_de": "Die Mehrheitskoalition 'Arizona' verfolgt Sparkurs und Reformen (Renten, Arbeit), die von den Gewerkschaften bekämpft werden. Im Oktober 2026 steckt sie in einer Haushaltskrise: Nach dem zweiten landesweiten Streik am 12. Oktober hat De Wever die State of the Union vom 13. abgesagt, der Kernkabinett hat sein verkleinertes 4-Milliarden-Paket abgelehnt, und es wird erneut über einen Mehrjahresplan von 10 Milliarden verhandelt, wobei MR und CD&V eine allgemeine Mehrwertsteuererhöhung ablehnen. De Wever bleibt beliebt, und die N-VA ist die einzige Regierungspartei mit Zugewinnen in den Umfragen, während der Vlaams Belang sie in mehreren flämischen Erhebungen überholt."
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
   "note_en": "Fixed five-year term (June 2029, alongside regional and European elections).",
   "note_de": "Feste fünfjährige Wahlperiode (Juni 2029, zusammen mit Regional- und Europawahl)."
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
   "fonte_en": "PolitPro, regional averages (15 October 2026): figures by region, not national",
   "fonte_de": "PolitPro, regionale Durchschnitte (15. Oktober 2026): Werte je Region, nicht landesweit"
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
   "commento_coalizione_en": "Vlaams Belang is the largest party in Flanders (26-28%) but remains excluded by the cordon sanitaire: on current numbers a new government would still be formed by N-VA and MR. Only if N-VA broke the cordon after 2029 (a possibility De Wever rules out) could the nationalist right enter the federal or Flemish government.",
   "commento_coalizione_de": "Der Vlaams Belang ist in Flandern stärkste Partei (26-28%), bleibt aber durch die Brandmauer ausgeschlossen: Mit den aktuellen Zahlen würde eine neue Regierung weiterhin von N-VA und MR gebildet. Nur wenn die N-VA nach 2029 die Brandmauer aufgäbe (was De Wever ausschließt), könnte die nationalistische Rechte in die föderale oder die flämische Regierung einziehen."
  },
  "fonti": [
   "https://politpro.eu/nl/belgie",
   "https://www.vrt.be/vrtnws/nl/2026/05/26/de-stemming-peiling/",
   "https://en.wikipedia.org/wiki/2024_Belgian_federal_election"
  ],
  "popolazione": 11.8,
  "ue": true,
  "nome_en": "Belgium",
  "nome_de": "Belgien"
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
   "note": "Coalizione tripartita nero-rosso-rosa in forte difficoltà: 63% di insoddisfatti, FPÖ al 39-40% e coalizione senza maggioranza nei sondaggi. Dopo il ritiro annunciato da Babler, l'8 ottobre 2026 la SPÖ ha nominato Holzleitner e Kucher co-presidenti ad interim; Marterbauer dovrebbe diventare vicecancelliere a inizio 2027. Il 15 ottobre il Nationalrat ha respinto la mozione di sfiducia della FPÖ contro il governo (contrari ÖVP, SPÖ, NEOS e Verdi); Stocker esclude elezioni anticipate.",
   "note_en": "The three-party black-red-pink coalition is in deep trouble: 63% dissatisfied, FPÖ at 39-40% and the coalition without a majority in the polls. After Babler's announced withdrawal, on 8 October 2026 the SPÖ appointed Holzleitner and Kucher as interim co-leaders; Marterbauer is due to become vice-chancellor in early 2027. On 15 October the Nationalrat rejected the FPÖ no-confidence motion against the government (ÖVP, SPÖ, NEOS and Greens voting against); Stocker rules out a snap election.",
   "note_de": "Die schwarz-rot-pinke Dreierkoalition steckt in großen Schwierigkeiten: 63% Unzufriedene, FPÖ bei 39-40% und keine Mehrheit für die Koalition in den Umfragen. Nach Bablers angekündigtem Rückzug hat die SPÖ am 8. Oktober 2026 Holzleitner und Kucher zu interimistischen Co-Vorsitzenden ernannt; Marterbauer soll Anfang 2027 Vizekanzler werden. Am 15. Oktober hat der Nationalrat den FPÖ-Misstrauensantrag gegen die Regierung abgelehnt (ÖVP, SPÖ, NEOS und Grüne dagegen); Stocker schließt Neuwahlen aus."
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
   "note_en": "End of the regular term (autumn 2029); growing pressure for a snap election given the coalition crisis.",
   "note_de": "Reguläres Ende der Legislaturperiode (Herbst 2029); angesichts der Koalitionskrise wachsender Druck in Richtung Neuwahl."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "Lazarsfeld per oe24 (5-13 ottobre 2026)",
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
     "partito": "SPÖ",
     "pct": 14.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Grüne",
     "pct": 12.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "NEOS",
     "pct": 6.0,
     "famiglia": "centro"
    },
    {
     "partito": "KPÖ",
     "pct": 4.0,
     "famiglia": "sinistra"
    }
   ],
   "fonte_en": "Lazarsfeld for oe24 (5-13 October 2026)",
   "fonte_de": "Lazarsfeld für oe24 (5.-13. Oktober 2026)"
  },
  "destra_principale": {
   "partito": "FPÖ",
   "leader": "Herbert Kickl",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 40.0,
   "pct_ultime_elezioni": 28.8,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrodestra",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "Con la FPÖ vicina al 40% e la coalizione sotto il 50%, alle prossime elezioni Kickl sarebbe quasi certamente incaricato e potrebbe governare con la ÖVP come junior partner o persino sfiorare la maggioranza assoluta in seggi. È il caso più maturo in Europa per un governo guidato dalla destra nazionalista.",
   "commento_coalizione_en": "With the FPÖ close to 40% and the coalition below 50%, at the next election Kickl would almost certainly be asked to form a government and could govern with the ÖVP as junior partner or even come close to an absolute majority of seats. It is the most advanced case in Europe for a government led by the nationalist right.",
   "commento_coalizione_de": "Mit der FPÖ nahe 40% und der Koalition unter 50% würde Kickl bei der nächsten Wahl fast sicher den Regierungsauftrag erhalten und könnte mit der ÖVP als Juniorpartner regieren oder sogar nahe an eine absolute Mandatsmehrheit herankommen. Es ist der reifste Fall in Europa für eine von der nationalistischen Rechten geführte Regierung."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Austrian_legislative_election",
   "https://www.boerse-express.com/news/articles/fpoe-bei-38-prozent-umfrage-sieht-oesterreichs-koalition-ohne-mehrheit-951673",
   "https://orf.at/stories/3444111/"
  ],
  "anticipate": {
   "data": "2027-09",
   "nota": "Coalizione tripartita sotto il 50% nei sondaggi e in crisi di leadership: il voto anticipato è più probabile della scadenza naturale del 2029.",
   "nota_en": "Three-party coalition below 50% in the polls and in a leadership crisis: a snap election is more likely than the regular end of term in 2029.",
   "nota_de": "Dreierkoalition unter 50% in den Umfragen und in einer Führungskrise: Eine Neuwahl ist wahrscheinlicher als das reguläre Ende der Legislaturperiode 2029."
  },
  "popolazione": 9.2,
  "ue": true,
  "nome_en": "Austria",
  "nome_de": "Österreich"
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
   "note": "Coalizione pro-UE di Tusk a un anno dal voto del 2027, con il presidente Karol Nawrocki (area PiS) che usa il veto: il 15 ottobre 2026 ha bloccato altre tre leggi (codice elettorale, esecuzione delle sentenze CEDU, pubblicità politica). Polska 2050 è crollata nei sondaggi (circa 1%), mentre la destra è frammentata tra PiS, Konfederacja, Korona (KKP) e Rozwój Plus di Morawiecki; il PiS ha frenato il calo (18-25% a ottobre) e nel sondaggio OGB del 15 ottobre la coalizione di governo è senza maggioranza (215 seggi contro 245 della destra).",
   "note_en": "Tusk's pro-EU coalition is a year from the 2027 vote, with President Karol Nawrocki (PiS camp) using his veto: on 15 October 2026 he blocked three more laws (electoral code, enforcement of ECHR judgments, political advertising). Polska 2050 has collapsed in the polls (about 1%), while the right is fragmented between PiS, Konfederacja, Korona (KKP) and Morawiecki's Rozwój Plus; PiS has halted its decline (18-25% in October) and in the OGB poll of 15 October the governing coalition has no majority (215 seats against 245 for the right).",
   "note_de": "Tusks pro-europäische Koalition ein Jahr vor der Wahl 2027, mit Präsident Karol Nawrocki (PiS-Lager), der sein Veto einsetzt: Am 15. Oktober 2026 hat er drei weitere Gesetze blockiert (Wahlgesetzbuch, Vollstreckung von EGMR-Urteilen, politische Werbung). Polska 2050 ist in den Umfragen eingebrochen (rund 1%), während die Rechte zwischen PiS, Konfederacja, Korona (KKP) und Morawieckis Rozwój Plus zersplittert ist; die PiS hat ihren Abwärtstrend gestoppt (18-25% im Oktober), und in der OGB-Umfrage vom 15. Oktober hat die Regierungskoalition keine Mehrheit (215 Sitze gegen 245 für die Rechte)."
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
   "note_en": "End of the regular parliamentary term (autumn 2027).",
   "note_de": "Reguläres Ende der Legislaturperiode (Herbst 2027)."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (18 ott 2026)",
   "partiti": [
    {
     "partito": "KO",
     "pct": 34.2,
     "famiglia": "centrodestra"
    },
    {
     "partito": "PiS",
     "pct": 21.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Konfederacja",
     "pct": 13.8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "KKP",
     "pct": 9.2,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Lewica",
     "pct": 6.7,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Rozwój Plus",
     "pct": 4.8,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Razem",
     "pct": 3.9,
     "famiglia": "sinistra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (18 Oct 2026)",
   "fonte_de": "PolitPro, gewichteter Durchschnitt (18. Okt. 2026)"
  },
  "destra_principale": {
   "partito": "PiS",
   "leader": "Jarosław Kaczyński",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 21.9,
   "pct_ultime_elezioni": 35.4,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "centrodestra",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "KO è primo partito ma la coalizione di governo è stimata attorno al 45% dei seggi; PiS, Konfederacja e KKP (più Rozwój Plus) sommano circa il 50% e potrebbero formare una maggioranza di destra, anche se PiS perde consensi a favore di Konfederacja e Korona. La destra radicale può realisticamente governare nel 2027 in coalizione a guida PiS.",
   "commento_coalizione_en": "KO is the largest party but the governing coalition is estimated at around 45% of seats; PiS, Konfederacja and KKP (plus Rozwój Plus) total around 50% and could form a right-wing majority, even though PiS is losing support to Konfederacja and Korona. The radical right can realistically govern in 2027 in a PiS-led coalition.",
   "commento_coalizione_de": "KO ist stärkste Partei, aber die Regierungskoalition wird auf rund 45% der Sitze geschätzt; PiS, Konfederacja und KKP (plus Rozwój Plus) kommen zusammen auf rund 50% und könnten eine rechte Mehrheit bilden, auch wenn die PiS Stimmen an Konfederacja und Korona verliert. Die radikale Rechte kann 2027 realistisch in einer Koalition unter Führung der PiS regieren."
  },
  "fonti": [
   "https://politpro.eu/en/poland",
   "https://notesfrompoland.com/2026/10/15/everything-you-need-to-know-one-year-ahead-of-polands-parliamentary-elections/",
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Polish_parliamentary_election"
  ],
  "popolazione": 36.6,
  "ue": true,
  "nome_en": "Poland",
  "nome_de": "Polen"
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
   "note": "Alle elezioni del 12 aprile 2026 Tisza ha ottenuto 141 seggi su 199 (maggioranza dei due terzi), ponendo fine a 16 anni di governo Orbán; Magyar è premier dal 9 maggio 2026. Orbán è stato rieletto presidente di Fidesz a giugno 2026 e resta leader dell'opposizione. Il 12 ottobre 2026 Magyar ha annunciato che la nuova costituzione sarà sottoposta a referendum (processo di almeno un anno); nel sondaggio Europion del 14-15 ottobre Tisza è al 58%, Fidesz al 26% e Mi Hazánk al 12% tra chi esprime una preferenza.",
   "note_en": "At the election of 12 April 2026 Tisza won 141 of 199 seats (a two-thirds majority), ending 16 years of Orbán government; Magyar has been prime minister since 9 May 2026. Orbán was re-elected Fidesz president in June 2026 and remains leader of the opposition. On 12 October 2026 Magyar announced that the new constitution will be put to a referendum (a process of at least a year); in the Europion poll of 14-15 October Tisza stands at 58%, Fidesz at 26% and Mi Hazánk at 12% among those expressing a preference.",
   "note_de": "Bei der Wahl am 12. April 2026 hat Tisza 141 von 199 Sitzen gewonnen (Zweidrittelmehrheit) und 16 Jahre Orbán-Regierung beendet; Magyar ist seit dem 9. Mai 2026 Ministerpräsident. Orbán wurde im Juni 2026 erneut zum Fidesz-Vorsitzenden gewählt und bleibt Oppositionsführer. Am 12. Oktober 2026 hat Magyar angekündigt, die neue Verfassung einem Referendum zu unterwerfen (ein Prozess von mindestens einem Jahr); in der Europion-Umfrage vom 14.-15. Oktober liegt Tisza bei 58%, Fidesz bei 26% und Mi Hazánk bei 12% unter den Befragten mit Parteipräferenz."
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
   "note_en": "End of the regular parliamentary term.",
   "note_de": "Reguläres Ende der Legislaturperiode."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (18 ott 2026)",
   "partiti": [
    {
     "partito": "Tisza",
     "pct": 62.1,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Fidesz-KDNP",
     "pct": 25.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Mi Hazánk",
     "pct": 8.7,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "MKKP",
     "pct": 1.4,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "PolitPro, weighted average (18 Oct 2026)",
   "fonte_de": "PolitPro, gewichteter Durchschnitt (18. Okt. 2026)"
  },
  "destra_principale": {
   "partito": "Fidesz-KDNP",
   "leader": "Viktor Orbán",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 25.9,
   "pct_ultime_elezioni": 38.6,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "coalizione": "centrodestra",
   "commento_coalizione": "Tisza domina con oltre il 60% nei sondaggi; Fidesz è crollato dal 38,6% al 25-26% con un lieve recupero negli ultimi mesi, mentre Mi Hazánk (ESN) cresce all'8-10%. Un ritorno della destra nazionalista al governo entro il 2030 appare oggi improbabile.",
   "commento_coalizione_en": "Tisza dominates with over 60% in the polls; Fidesz has collapsed from 38.6% to 25-26% with a slight recovery in recent months, while Mi Hazánk (ESN) is growing to 8-10%. A return of the nationalist right to government by 2030 currently looks unlikely.",
   "commento_coalizione_de": "Tisza dominiert mit über 60% in den Umfragen; Fidesz ist von 38,6% auf 25-26% eingebrochen, mit leichter Erholung in den letzten Monaten, während Mi Hazánk (ESN) auf 8-10% wächst. Eine Rückkehr der nationalistischen Rechten an die Regierung bis 2030 erscheint derzeit unwahrscheinlich."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Hungarian_parliamentary_election",
   "https://politpro.eu/en/hungary"
  ],
  "popolazione": 9.6,
  "ue": true,
  "nome_en": "Hungary",
  "nome_de": "Ungarn"
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
   "note": "Terzo governo Babiš (ANO 9 ministri, Motoristé 4, SPD 3), nominato il 9 dicembre 2025; Tomio Okamura (SPD) è presidente della Camera. ANO è classificato qui come destra nazionalista perché membro di Patrioti per l'Europa e alleato di SPD, pur restando un partito populista a vocazione tecnocratica. Il governo ha superato una mozione di sfiducia il 1° ottobre 2026 (83 voti a favore su 101 necessari), ma alle amministrative del 9-10 ottobre ANO ha vinto in 6 capoluoghi regionali su 13 perdendo Praga e Brno, e al ballottaggio delle senatoriali del 17 ottobre non ha conquistato alcun seggio: l'opposizione conserva la maggioranza al Senato.",
   "note_en": "Third Babiš government (ANO 9 ministers, Motoristé 4, SPD 3), appointed on 9 December 2025; Tomio Okamura (SPD) is speaker of the Chamber. ANO is classed here as nationalist right because it belongs to Patriots for Europe and is allied with the SPD, while remaining a populist party with a technocratic bent. The government survived a no-confidence motion on 1 October 2026 (83 votes in favour out of the 101 needed), but at the local elections of 9-10 October ANO won in 6 of 13 regional capitals, losing Prague and Brno, and in the Senate run-off of 17 October it took no seats: the opposition keeps its Senate majority.",
   "note_de": "Dritte Regierung Babiš (ANO 9 Minister, Motoristé 4, SPD 3), ernannt am 9. Dezember 2025; Tomio Okamura (SPD) ist Präsident des Abgeordnetenhauses. ANO wird hier als nationalistische Rechte eingestuft, weil es den Patrioten für Europa angehört und mit der SPD verbündet ist, obwohl es eine populistische Partei mit technokratischer Ausrichtung bleibt. Die Regierung hat am 1. Oktober 2026 einen Misstrauensantrag überstanden (83 Ja-Stimmen bei 101 nötigen), doch bei den Kommunalwahlen vom 9.-10. Oktober gewann ANO nur in 6 von 13 Regionalhauptstädten und verlor Prag und Brünn, und in der Senatsstichwahl vom 17. Oktober errang es keinen Sitz: Die Opposition behält die Senatsmehrheit."
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
   "note_en": "End of the regular term; presidential election in January 2028.",
   "note_de": "Reguläres Ende der Legislaturperiode; Präsidentschaftswahl im Januar 2028."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (18 ott 2026)",
   "partiti": [
    {
     "partito": "ANO",
     "pct": 29.7,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "STAN",
     "pct": 17.4,
     "famiglia": "centro"
    },
    {
     "partito": "ODS",
     "pct": 12.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SPD",
     "pct": 8.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Piráti",
     "pct": 7.1,
     "famiglia": "centro"
    },
    {
     "partito": "Motoristé",
     "pct": 5.2,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "TOP 09",
     "pct": 3.1,
     "famiglia": "centrodestra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (18 Oct 2026)",
   "fonte_de": "PolitPro, gewichteter Durchschnitt (18. Okt. 2026)"
  },
  "destra_principale": {
   "partito": "ANO",
   "leader": "Andrej Babiš",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 29.7,
   "pct_ultime_elezioni": 34.5,
   "trend": "in_calo"
  },
  "scenario": {
   "trend": "destra_nazionalista",
   "status_quo": "destra_nazionalista",
   "coalizione": "destra_nazionalista",
   "commento_coalizione": "ANO resta primo ma è sceso al 29-30% (minimo da febbraio) e l'attuale maggioranza ANO-SPD-Motoristé sarebbe a rischio: i Motoristé oscillano attorno alla soglia del 5% e l'opposizione (STAN, ODS, Piráti) cresce, come confermano comunali e senatoriali di ottobre 2026. La destra radicale (SPD) governa già oggi come partner minore e potrebbe restarlo, ma dipende dalla tenuta di ANO.",
   "commento_coalizione_en": "ANO is still first but has slipped to 29-30% (its lowest since February) and the current ANO-SPD-Motoristé majority would be at risk: the Motoristé hover around the 5% threshold and the opposition (STAN, ODS, Pirates) is growing, as the October 2026 local and Senate elections confirm. The radical right (SPD) already governs as junior partner and could remain so, but it depends on ANO holding up.",
   "commento_coalizione_de": "ANO bleibt vorn, ist aber auf 29-30% gefallen (Tiefstand seit Februar), und die aktuelle Mehrheit ANO-SPD-Motoristé wäre gefährdet: Die Motoristé pendeln um die 5%-Hürde, und die Opposition (STAN, ODS, Piraten) wächst, wie Kommunal- und Senatswahlen im Oktober 2026 bestätigen. Die radikale Rechte (SPD) regiert schon heute als Juniorpartner und könnte es bleiben, doch das hängt vom Halt von ANO ab."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2025_Czech_parliamentary_election",
   "https://politpro.eu/en/czechia",
   "https://balkaninsight.com/2026/10/12/czech-local-elections-deliver-warning-to-babiss-governing-coalition/rd/"
  ],
  "popolazione": 10.9,
  "ue": true,
  "nome_en": "Czech Republic",
  "nome_de": "Tschechien"
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
   "note": "Smer è nominalmente socialdemocratico ma ha compiuto una svolta nazional-populista e filo-russa. Il 29 settembre 2026 il parlamento ha rimosso il vicepremier Taraba (quota SNS); la maggioranza è scesa a 76-78 seggi su 150 e Fico ha evocato elezioni anticipate a gennaio 2027 e una possibile alleanza con Republika, mentre la SNS (all'1,7%) dichiara che non voterà mai l'abbreviazione della legislatura. Nel sondaggio Infostat del 5-9 ottobre Smer torna primo (19,0% contro 18,5% di PS) per la prima volta da mesi.",
   "note_en": "Smer is nominally social democratic but has taken a national-populist, pro-Russian turn. On 29 September 2026 parliament removed Deputy Prime Minister Taraba (SNS quota); the majority fell to 76-78 of 150 seats and Fico raised the prospect of a snap election in January 2027 and a possible alliance with Republika, while the SNS (at 1.7%) says it will never vote to shorten the term. In the Infostat poll of 5-9 October Smer is back in first place (19.0% against 18.5% for PS) for the first time in months.",
   "note_de": "Smer ist nominell sozialdemokratisch, hat aber eine nationalpopulistische, russlandfreundliche Wende vollzogen. Am 29. September 2026 hat das Parlament Vizepremier Taraba (SNS-Quote) abgesetzt; die Mehrheit ist auf 76-78 von 150 Sitzen geschrumpft, und Fico hat Neuwahlen im Januar 2027 und ein mögliches Bündnis mit Republika ins Spiel gebracht, während die SNS (bei 1,7%) erklärt, einer Verkürzung der Legislaturperiode nie zuzustimmen. In der Infostat-Umfrage vom 5.-9. Oktober liegt Smer erstmals seit Monaten wieder vorn (19,0% gegen 18,5% für PS)."
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
   "note_en": "End of the regular term; a possible snap election in January 2027 according to Fico (requires a qualified majority).",
   "note_de": "Reguläres Ende der Legislaturperiode; laut Fico mögliche Neuwahl im Januar 2027 (erfordert qualifizierte Mehrheit)."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (18 ott 2026)",
   "partiti": [
    {
     "partito": "PS",
     "pct": 19.0,
     "famiglia": "centro"
    },
    {
     "partito": "Smer-SD",
     "pct": 17.3,
     "famiglia": "sinistra"
    },
    {
     "partito": "Republika",
     "pct": 12.4,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Slovensko",
     "pct": 9.6,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SaS",
     "pct": 8.2,
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
   "fonte_en": "PolitPro, weighted average (18 Oct 2026)",
   "fonte_de": "PolitPro, gewichteter Durchschnitt (18. Okt. 2026)"
  },
  "destra_principale": {
   "partito": "Republika",
   "leader": "Milan Uhrík",
   "gruppo_pe": "ESN",
   "pct_sondaggio": 12.4,
   "pct_ultime_elezioni": 4.7,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "sinistra",
   "status_quo": "sinistra",
   "partner_trend": true,
   "coalizione": "centro",
   "commento_coalizione": "Le opposizioni (PS, SaS, KDH, Slovensko, Demokrati) sommano circa il 48% contro il 36% di Smer-Hlas-Republika, con SNS sotto soglia: con i numeri attuali guiderebbe PS. Se la crescita di Republika continua, lo scenario alternativo è un governo Smer-Republika a guida Fico, nazional-populista pur se nominalmente di sinistra.",
   "commento_coalizione_en": "The opposition parties (PS, SaS, KDH, Slovensko, Demokrati) total around 48% against 36% for Smer-Hlas-Republika, with SNS below the threshold: on current numbers PS would lead. If Republika's growth continues, the alternative scenario is a Fico-led Smer-Republika government, national-populist even if nominally left-wing.",
   "commento_coalizione_de": "Die Opposition (PS, SaS, KDH, Slovensko, Demokrati) kommt zusammen auf rund 48% gegenüber 36% für Smer-Hlas-Republika, mit der SNS unter der Hürde: Mit den aktuellen Zahlen würde PS die Regierung führen. Setzt sich das Wachstum von Republika fort, ist das Alternativszenario eine Regierung Smer-Republika unter Fico, national-populistisch, wenn auch nominell links."
  },
  "fonti": [
   "https://politpro.eu/en/slovakia",
   "https://spectator.sme.sk/politics-and-society/c/fico-january-early-election-coalition-crisis"
  ],
  "anticipate": {
   "data": "2027-01",
   "nota": "Fico ha evocato elezioni anticipate a gennaio 2027 dopo la rottura con la SNS.",
   "nota_en": "Fico has floated a snap election in January 2027 after the break with the SNS.",
   "nota_de": "Fico hat nach dem Bruch mit der SNS eine Neuwahl im Januar 2027 ins Spiel gebracht."
  },
  "popolazione": 5.4,
  "ue": true,
  "nome_en": "Slovakia",
  "nome_de": "Slowakei"
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
   "note": "Il PSD è uscito dalla grande coalizione il 23 aprile 2026 e il 5 maggio il governo Bolojan è caduto con una mozione PSD-AUR; Bolojan resta premier ad interim. Dopo tre tentativi falliti, il presidente Nicușor Dan ha designato il diplomatico Luca Niculescu: 17 ministri, 11 del PSD e 6 tecnici, con il PSD unico partito al governo. Il voto di fiducia è fissato per il 20 ottobre 2026 (servono 233 voti): il PNL ha deciso il 17 ottobre di votare sì restando fuori dall'esecutivo, l'UDMR dà un sostegno condizionato, USR e AUR votano contro; Dan non esclude lo scioglimento del Parlamento se il voto fallisce.",
   "note_en": "The PSD left the grand coalition on 23 April 2026 and on 5 May the Bolojan government fell to a PSD-AUR motion; Bolojan remains interim prime minister. After three failed attempts, President Nicușor Dan nominated the diplomat Luca Niculescu: 17 ministers, 11 from the PSD and 6 technocrats, with the PSD as the only party in government. The confidence vote is set for 20 October 2026 (233 votes needed): the PNL decided on 17 October to vote yes while staying out of the executive, the UDMR gives conditional support, USR and AUR vote against; Dan does not rule out dissolving parliament if the vote fails.",
   "note_de": "Die PSD ist am 23. April 2026 aus der Großen Koalition ausgetreten, und am 5. Mai ist die Regierung Bolojan durch einen Misstrauensantrag von PSD und AUR gestürzt; Bolojan bleibt geschäftsführender Premier. Nach drei gescheiterten Anläufen hat Präsident Nicușor Dan den Diplomaten Luca Niculescu nominiert: 17 Minister, 11 von der PSD und 6 Fachleute, die PSD als einzige Regierungspartei. Die Vertrauensabstimmung ist für den 20. Oktober 2026 angesetzt (233 Stimmen nötig): Die PNL hat am 17. Oktober beschlossen, mit Ja zu stimmen und der Regierung fernzubleiben, die UDMR gibt bedingte Unterstützung, USR und AUR stimmen dagegen; Dan schließt eine Parlamentsauflösung nicht aus, falls die Abstimmung scheitert."
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
   "note_en": "End of the regular term; AUR is calling for a snap election but the president and the mainstream parties rule it out.",
   "note_de": "Reguläres Ende der Legislaturperiode; die AUR fordert eine Neuwahl, aber Präsident und traditionelle Parteien schließen sie aus."
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
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)",
   "fonte_de": "PolitPro, gewichteter Durchschnitt (15. Okt. 2026)"
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
   "commento_coalizione_en": "AUR is consistently first at around 36-40% (double its 2024 result) and, together with the smaller sovereignist parties, would come close to an absolute majority; the mainstream parties hold on thanks to President Dan's cordon sanitaire but the government crisis is wearing them down. The radical right could realistically govern after 2028, alone or with the PSD.",
   "commento_coalizione_de": "Die AUR liegt stabil mit rund 36-40% vorn (doppelt so viel wie 2024) und würde mit den kleineren souveränistischen Parteien knapp an die absolute Mehrheit herankommen; die traditionellen Parteien halten dank der Brandmauer von Präsident Dan stand, doch die Regierungskrise zermürbt sie. Die radikale Rechte könnte nach 2028 realistisch regieren, allein oder mit der PSD."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Romanian_political_crisis",
   "https://politpro.eu/en/romania"
  ],
  "anticipate": {
   "data": "2027-06",
   "nota": "Crisi di governo aperta da maggio 2026 e AUR che chiede il voto: elezioni anticipate plausibili nel 2027.",
   "nota_en": "Government crisis open since May 2026 and AUR calling for a vote: a snap election is plausible in 2027.",
   "nota_de": "Seit Mai 2026 offene Regierungskrise und die AUR fordert Wahlen: Eine Neuwahl 2027 ist plausibel."
  },
  "popolazione": 19.1,
  "ue": true,
  "nome_en": "Romania",
  "nome_de": "Rumänien",
  "transizione": {
   "data": "2026-10",
   "nota": "Voto di fiducia sul governo Niculescu (PSD e tecnici) il 20 ottobre 2026",
   "nota_en": "Confidence vote on the Niculescu government (PSD and technocrats) on 20 October 2026",
   "nota_de": "Vertrauensabstimmung über die Regierung Niculescu (PSD und Fachleute) am 20. Oktober 2026"
  }
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
   "note": "L'ex presidente Radev ha vinto le anticipate del 19 aprile 2026 (settime dal 2021) con il 44,6% e 131 seggi su 240: primo governo monocolore con maggioranza assoluta dal 1997. Bulgaria Progressista è un movimento populista-sovranista di matrice sociale, con posizioni ambigue su Russia e Ucraina; classificazione centrosinistra indicativa. Presidenziali il 25 ottobre 2026 con 27 candidature: la presidente Iotova (ticket con Valchev) è al 44-48% nei sondaggi di inizio ottobre contro il 25% dell'ex premier tecnico Gyurov sostenuto dall'opposizione e l'11% di Kostadinov (Vazrazhdane); ballottaggio probabile il 1° novembre. Il 15 ottobre proteste a Sofia dopo gli attacchi con droni a navi mercantili nel Mar Nero.",
   "note_en": "Former president Radev won the snap election of 19 April 2026 (the seventh since 2021) with 44.6% and 131 of 240 seats: the first single-party government with an absolute majority since 1997. Progressive Bulgaria is a populist-sovereignist movement with a social bent and ambiguous positions on Russia and Ukraine; the centre-left classification is indicative. Presidential election on 25 October 2026 with 27 tickets: President Iotova (running with Valchev) stands at 44-48% in early-October polls against 25% for the former caretaker prime minister Gyurov, backed by the opposition, and 11% for Kostadinov (Vazrazhdane); a run-off on 1 November is likely. Protests in Sofia on 15 October after drone attacks on merchant ships in the Black Sea.",
   "note_de": "Ex-Präsident Radev hat die vorgezogene Wahl vom 19. April 2026 (die siebte seit 2021) mit 44,6% und 131 von 240 Sitzen gewonnen: die erste Alleinregierung mit absoluter Mehrheit seit 1997. Progressives Bulgarien ist eine populistisch-souveränistische Bewegung mit sozialer Prägung und zweideutigen Positionen zu Russland und der Ukraine; die Einstufung als Mitte-links ist indikativ. Präsidentschaftswahl am 25. Oktober 2026 mit 27 Kandidaturen: Präsidentin Iotova (Tandem mit Valchev) liegt in den Umfragen von Anfang Oktober bei 44-48% gegen 25% für den von der Opposition unterstützten früheren Übergangspremier Gyurov und 11% für Kostadinov (Vazrazhdane); eine Stichwahl am 1. November ist wahrscheinlich. Am 15. Oktober Proteste in Sofia nach Drohnenangriffen auf Handelsschiffe im Schwarzen Meer."
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
   "note": "Legislative a scadenza naturale nel 2030; presidenziali il 25 ottobre 2026 (Iotova favorita, ballottaggio probabile il 1° novembre).",
   "note_en": "Parliamentary election at the end of the regular term in 2030; presidential election on 25 October 2026 (Iotova the favourite, run-off likely on 1 November).",
   "note_de": "Parlamentswahl zum regulären Ende der Legislaturperiode 2030; Präsidentschaftswahl am 25. Oktober 2026 (Iotova Favoritin, Stichwahl wahrscheinlich am 1. November)."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (18 ott 2026)",
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
     "partito": "Vazrazhdane",
     "pct": 6.2,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "DPS",
     "pct": 6.1,
     "famiglia": "centro"
    },
    {
     "partito": "BSP",
     "pct": 3.3,
     "famiglia": "centrosinistra"
    }
   ],
   "fonte_en": "PolitPro, weighted average (18 Oct 2026)",
   "fonte_de": "PolitPro, gewichteter Durchschnitt (18. Okt. 2026)"
  },
  "destra_principale": {
   "partito": "Vazrazhdane",
   "leader": "Kostadin Kostadinov",
   "gruppo_pe": "ESN",
   "pct_sondaggio": 6.2,
   "pct_ultime_elezioni": 4.3,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrosinistra",
   "status_quo": "centrosinistra",
   "coalizione": "centrosinistra",
   "commento_coalizione": "Bulgaria Progressista resta dominante (40-44%) anche se in lieve calo; Vazrazhdane, crollato dal 13% del 2024 al 4% del 2026, recupera leggermente. La destra radicale non è in grado di governare; il vero nodo è la deriva sovranista dello stesso governo Radev.",
   "commento_coalizione_en": "Progressive Bulgaria remains dominant (40-44%) though slightly down; Vazrazhdane, which collapsed from 13% in 2024 to 4% in 2026, is recovering slightly. The radical right is in no position to govern; the real issue is the sovereignist drift of the Radev government itself.",
   "commento_coalizione_de": "Progressives Bulgarien bleibt dominant (40-44%), wenn auch mit leichtem Rückgang; Wasraschdane, von 13% im Jahr 2024 auf 4% im Jahr 2026 eingebrochen, erholt sich leicht. Die radikale Rechte ist nicht regierungsfähig; der eigentliche Knackpunkt ist der souveränistische Kurs der Regierung Radev selbst."
  },
  "fonti": [
   "https://politpro.eu/en/bulgaria",
   "https://en.wikipedia.org/wiki/Radev_government"
  ],
  "popolazione": 6.4,
  "ue": true,
  "nome_en": "Bulgaria",
  "nome_de": "Bulgarien"
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
   "note": "Terzo governo Plenković: HDZ con il Movimento Patriottico (DP) di Penava e il sostegno dei deputati delle minoranze. Rapporti tesi con DP nel 2026, ma Plenković non ha alternative; il gradimento del governo è ai minimi, con HDZ al 25% in CRO Demoskop di ottobre. Il 13-14 ottobre 2026 il Sabor ha discusso per dieci ore la mozione di revoca del premier presentata dall'SDP (54 firme) per lo scandalo dei rifiuti pericolosi in Lika; il voto, rinviato alla settimana del 20 ottobre, è dato per respinto dalla maggioranza HDZ-DP-minoranze.",
   "note_en": "Third Plenković government: HDZ with Penava's Homeland Movement (DP) and the support of the minority MPs. Relations with DP were tense in 2026, but Plenković has no alternative; approval of the government is at its lowest, with HDZ at 25% in October's CRO Demoskop. On 13-14 October 2026 the Sabor debated for ten hours the SDP motion to remove the prime minister (54 signatures) over the hazardous-waste scandal in Lika; the vote, postponed to the week of 20 October, is expected to be rejected by the HDZ-DP-minorities majority.",
   "note_de": "Dritte Regierung Plenković: HDZ mit Penavas Heimatbewegung (DP) und der Unterstützung der Minderheitenabgeordneten. 2026 angespanntes Verhältnis zur DP, doch Plenković hat keine Alternative; die Zustimmung zur Regierung ist auf dem Tiefpunkt, die HDZ liegt im CRO Demoskop vom Oktober bei 25%. Am 13.-14. Oktober 2026 hat der Sabor zehn Stunden lang über den Abberufungsantrag der SDP gegen den Premier (54 Unterschriften) wegen des Giftmüllskandals in Lika debattiert; die auf die Woche des 20. Oktober vertagte Abstimmung dürfte an der Mehrheit aus HDZ, DP und Minderheiten scheitern."
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
   "note_en": "End of the regular parliamentary term.",
   "note_de": "Reguläres Ende der Legislaturperiode."
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
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)",
   "fonte_de": "PolitPro, gewichteter Durchschnitt (15. Okt. 2026)"
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
   "commento_coalizione_en": "HDZ remains first but is declining; DP has collapsed below the 5% threshold and the right-wing vote is shifting to Most (conservative-sovereignist, 11%). An HDZ-Most government is the most likely outcome; the left (SDP+Možemo, around 39%) is growing but lacks sufficient allies. The radical right can govern only as a junior partner of HDZ.",
   "commento_coalizione_de": "Die HDZ bleibt stärkste Partei, verliert aber; die DP ist unter die 5%-Hürde gefallen, und die rechten Stimmen wandern zu Most (konservativ-souveränistisch, 11%). Eine Regierung HDZ-Most ist der wahrscheinlichste Ausgang; die Linke (SDP+Možemo, rund 39%) wächst, aber ohne ausreichende Verbündete. Die radikale Rechte kann nur als Juniorpartner der HDZ regieren."
  },
  "fonti": [
   "https://politpro.eu/en/croatia",
   "https://en.wikipedia.org/wiki/Cabinet_of_Andrej_Plenkovi%C4%87_III"
  ],
  "popolazione": 3.9,
  "ue": true,
  "nome_en": "Croatia",
  "nome_de": "Kroatien"
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
   "note": "Dopo le elezioni del 22 marzo 2026 (Svoboda di Golob primo di misura ma senza maggioranza), Janša è stato eletto premier per la quarta volta il 22 maggio e il governo è entrato in carica il 4 giugno. La coalizione conta 43 seggi su 90 e si regge sull'appoggio esterno del partito populista Resni.ca (5 seggi). SDS siede nel PPE a Strasburgo pur essendo nazional-conservatore. A ottobre 2026 i Demokrati di Logar sono in crisi interna (uscita della deputata Košir, che ha poi rinunciato al seggio lasciando la coalizione a 43) e la coalizione ha perso un referendum sulla commissione d'inchiesta; nel sondaggio Mediana per Delo del 5-8 ottobre il vantaggio di SDS su Svoboda si riduce a due punti (21,7% contro 19,8% sul totale degli intervistati).",
   "note_en": "After the election of 22 March 2026 (Golob's Svoboda narrowly first but without a majority), Janša was elected prime minister for the fourth time on 22 May and the government took office on 4 June. The coalition holds 43 of 90 seats and relies on external support from the populist Resni.ca party (5 seats). SDS sits with the EPP in Strasbourg despite being national-conservative. In October 2026 Logar's Demokrati are in internal crisis (MP Košir left the party and then gave up her seat, leaving the coalition at 43) and the coalition lost a referendum on the parliamentary inquiry committee; in the Mediana poll for Delo of 5-8 October the SDS lead over Svoboda narrows to two points (21.7% against 19.8% of all respondents).",
   "note_de": "Nach der Wahl vom 22. März 2026 (Golobs Svoboda knapp vorn, aber ohne Mehrheit) wurde Janša am 22. Mai zum vierten Mal zum Ministerpräsidenten gewählt, die Regierung trat am 4. Juni an. Die Koalition hat 43 von 90 Sitzen und stützt sich auf die externe Unterstützung der populistischen Partei Resni.ca (5 Sitze). Die SDS sitzt in Straßburg bei der EVP, obwohl sie nationalkonservativ ist. Im Oktober 2026 stecken Logars Demokrati in einer internen Krise (Austritt der Abgeordneten Košir, die dann ihr Mandat niederlegte, sodass die Koalition bei 43 bleibt), und die Koalition hat ein Referendum über den Untersuchungsausschuss verloren; in der Mediana-Umfrage für Delo vom 5.-8. Oktober schrumpft der Vorsprung der SDS vor Svoboda auf zwei Punkte (21,7% gegen 19,8% aller Befragten)."
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
   "note_en": "End of the regular term; presidential election in late 2027.",
   "note_de": "Reguläres Ende der Legislaturperiode; Präsidentschaftswahl Ende 2027."
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
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)",
   "fonte_de": "PolitPro, gewichteter Durchschnitt (15. Okt. 2026)"
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
   "commento_coalizione_en": "SDS is now the largest party and the right-wing bloc is close to 46% against 43% for the centre-left: the nationalist right already governs and would retain the lead. The fragility lies in the relative majority (43 seats) and the dependence on Resni.ca.",
   "commento_coalizione_de": "Die SDS ist nun stärkste Partei, und der rechte Block kommt auf knapp 46 % gegenüber 43 % für Mitte-links: Die nationalistische Rechte regiert bereits und würde die Führung behalten. Die Schwachstelle liegt in der relativen Mehrheit (43 Sitze) und in der Abhängigkeit von Resni.ca."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Slovenian_parliamentary_election",
   "https://politpro.eu/en/slovenia"
  ],
  "popolazione": 2.1,
  "ue": true,
  "nome_en": "Slovenia",
  "nome_de": "Slowenien"
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
   "note": "Il blocco di centrosinistra (S, V, C, MP) ha vinto le elezioni del 13 settembre 2026 con 176 seggi su 349 contro i 173 dei partiti di Tidö; Kristersson si è dimesso il 17 settembre e resta in carica per gli affari correnti. Magdalena Andersson (S) ha restituito l'incarico il 13 ottobre per il veto incrociato tra Centerpartiet e Vänsterpartiet e il 15 ottobre il Riksdag ha bocciato la sua nomina (99 sì, 248 no), primo di quattro voti possibili prima di elezioni straordinarie. Il 19 ottobre il presidente del Riksdag ha affidato un mandato esplorativo alla leader del Centro Elisabeth Thand Ringqvist per un governo di centro (S-MP-C, con possibile apertura a KD e L), con rapporto entro il 26 ottobre.",
   "note_en": "The centre-left bloc (S, V, C, MP) won the election of 13 September 2026 with 176 of 349 seats against 173 for the Tidö parties; Kristersson resigned on 17 September and stays on as caretaker. Magdalena Andersson (S) handed back her mandate on 13 October because of the mutual veto between the Centre Party and the Left Party, and on 15 October the Riksdag rejected her nomination (99 yes, 248 no), the first of four possible votes before an extraordinary election. On 19 October the Speaker gave an exploratory mandate to Centre Party leader Elisabeth Thand Ringqvist for a centre government (S-MP-C, possibly opening to KD and L), reporting back by 26 October.",
   "note_de": "Der Mitte-links-Block (S, V, C, MP) hat die Wahl vom 13. September 2026 mit 176 von 349 Sitzen gegen 173 der Tidö-Parteien gewonnen; Kristersson ist am 17. September zurückgetreten und bleibt geschäftsführend im Amt. Magdalena Andersson (S) hat den Auftrag am 13. Oktober wegen des gegenseitigen Vetos von Zentrumspartei und Linkspartei zurückgegeben, und am 15. Oktober hat der Reichstag ihre Nominierung abgelehnt (99 Ja, 248 Nein), die erste von vier möglichen Abstimmungen vor einer außerordentlichen Wahl. Am 19. Oktober hat der Reichstagspräsident der Zentrums-Vorsitzenden Elisabeth Thand Ringqvist einen Sondierungsauftrag für eine Regierung der Mitte (S-MP-C, mit möglicher Öffnung zu KD und L) erteilt, Bericht bis zum 26. Oktober."
  },
  "transizione": {
   "data": "2026-12",
   "nota": "Formazione del nuovo governo dopo il voto di settembre 2026: sondaggio esplorativo di Thand Ringqvist (C) fino al 26 ottobre, restano tre voti sul premier prima di elezioni straordinarie",
   "nota_en": "Formation of the new government after the September 2026 election: exploratory talks led by Thand Ringqvist (C) until 26 October, three prime-minister votes left before an extraordinary election",
   "nota_de": "Regierungsbildung nach der Wahl vom September 2026: Sondierung durch Thand Ringqvist (C) bis zum 26. Oktober, drei Abstimmungen über den Ministerpräsidenten bleiben vor einer außerordentlichen Wahl"
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
   "note_en": "Regular term ends September 2030; an extraordinary election is possible if the Riksdag rejects four candidates for prime minister.",
   "note_de": "Reguläre Wahl im September 2030; außerordentliche Wahlen möglich, falls der Riksdag vier Kandidaten für das Amt des Ministerpräsidenten ablehnt."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "Novus per TV4 (5-11 ottobre 2026)",
   "partiti": [
    {
     "partito": "S",
     "pct": 25.9,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "M",
     "pct": 23.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SD",
     "pct": 18.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "V",
     "pct": 7.2,
     "famiglia": "sinistra"
    },
    {
     "partito": "C",
     "pct": 6.7,
     "famiglia": "centro"
    },
    {
     "partito": "MP",
     "pct": 6.5,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "KD",
     "pct": 6.4,
     "famiglia": "centrodestra"
    }
   ],
   "fonte_en": "Novus for TV4 (5-11 October 2026)",
   "fonte_de": "Novus für TV4 (5.-11. Oktober 2026)"
  },
  "destra_principale": {
   "partito": "Sverigedemokraterna (SD)",
   "leader": "Jimmie Åkesson",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 18.0,
   "pct_ultime_elezioni": 17.5,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "partner_trend": true,
   "coalizione": "centrosinistra",
   "commento_coalizione": "Il blocco rosso-verde ha la maggioranza in seggi ma non riesce a formare un governo per l'impasse fra C e V, e nei sondaggi di ottobre 2026 il vantaggio è già passato ai partiti di Tidö (Novus: 52,2% contro 46,3%, con M al 23,9%). Gli SD sono scesi dal 20,5% del 2022 al 17-18% e restano confinati al ruolo di partner esterno di un centrodestra a guida M; un governo a guida SD non è realistico.",
   "commento_coalizione_en": "The red-green bloc has a majority of seats but cannot form a government because of the stalemate between C and V, and in the October 2026 polls the lead has already passed to the Tidö parties (Novus: 52.2% against 46.3%, with M at 23.9%). The SD have fallen from 20.5% in 2022 to 17-18% and remain confined to the role of external partner of an M-led centre-right; an SD-led government is not realistic.",
   "commento_coalizione_de": "Der rot-grüne Block hat die Sitzmehrheit, kann aber wegen der Blockade zwischen C und V keine Regierung bilden, und in den Umfragen vom Oktober 2026 liegen bereits die Tidö-Parteien vorn (Novus: 52,2% gegen 46,3%, M bei 23,9%). Die SD sind von 20,5% im Jahr 2022 auf 17-18% gefallen und bleiben auf die Rolle des externen Partners eines von M geführten Mitte-rechts-Lagers beschränkt; eine von SD geführte Regierung ist nicht realistisch."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Swedish_general_election",
   "https://www.veriangroup.com/sv/news-and-insights/valjarbarometer-oktober-2026"
  ],
  "popolazione": 10.6,
  "ue": true,
  "nome_en": "Sweden",
  "nome_de": "Schweden"
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
   "note": "Dopo le elezioni anticipate del 24 marzo 2026 (convocate sull'onda della crisi con Trump sulla Groenlandia) i socialdemocratici hanno perso 12 seggi ma Frederiksen ha formato il 3 giugno 2026 un governo di minoranza a quattro (82 seggi su 179) sostenuto dall'esterno da Enhedslisten e Alternativet. L'8 ottobre 2026 il governo ha presentato la finanziaria 2027 (abolizione di due scaglioni fiscali, taglio di 3 punti dell'imposta sulle società, tagli al sussidio di studio), criticata da Enhedslisten, SF e Danmarksdemokraterne: è il primo vero banco di prova della coalizione.",
   "note_en": "After the snap election of 24 March 2026 (called on the back of the crisis with Trump over Greenland) the Social Democrats lost 12 seats, but on 3 June 2026 Frederiksen formed a four-party minority government (82 of 179 seats) supported from outside by Enhedslisten and Alternativet. On 8 October 2026 the government presented the 2027 budget (abolition of two income-tax brackets, a 3-point cut in corporation tax, cuts to student grants), criticised by Enhedslisten, SF and the Denmark Democrats: the coalition's first real test.",
   "note_de": "Nach der vorgezogenen Wahl vom 24. März 2026 (ausgerufen im Zuge der Grönland-Krise mit Trump) haben die Sozialdemokraten 12 Sitze verloren, doch Frederiksen hat am 3. Juni 2026 eine Vierer-Minderheitsregierung (82 von 179 Sitzen) gebildet, die von Enhedslisten und Alternativet von außen gestützt wird. Am 8. Oktober 2026 hat die Regierung den Haushalt 2027 vorgelegt (Abschaffung zweier Einkommensteuerstufen, Senkung der Körperschaftsteuer um 3 Punkte, Kürzungen beim Studienstipendium), kritisiert von Enhedslisten, SF und Danmarksdemokraterne: die erste echte Bewährungsprobe der Koalition."
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
   "note_en": "Legal deadline by 23 March 2030.",
   "note_de": "Gesetzliche Frist: spätestens 23. März 2030."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "PolitPro, media ponderata (18 ott 2026)",
   "partiti": [
    {
     "partito": "S",
     "pct": 20.8,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "DF",
     "pct": 13.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "SF",
     "pct": 10.6,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "K",
     "pct": 9.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "LA",
     "pct": 9.6,
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
   "fonte_en": "PolitPro, weighted average (18 Oct 2026)",
   "fonte_de": "PolitPro, gewichteter Durchschnitt (18. Okt. 2026)"
  },
  "destra_principale": {
   "partito": "Dansk Folkeparti (DF)",
   "leader": "Morten Messerschmidt",
   "gruppo_pe": "PfE",
   "pct_sondaggio": 13.0,
   "pct_ultime_elezioni": 9.1,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrosinistra",
   "partner_trend": true,
   "coalizione": "centrosinistra",
   "commento_coalizione": "Nei sondaggi il blocco rosso resta intorno al 53% e conserverebbe la maggioranza, mentre DF è risalito al 13% diventando il primo partito del blocco blu. Un ritorno al potere del centrodestra passerebbe per un governo Venstre/Konservative/LA con DF e Danmarksdemokraterne come partner di sostegno, non per un premier di destra radicale.",
   "commento_coalizione_en": "In the polls the red bloc remains around 53% and would keep its majority, while DF has climbed back to 13%, becoming the largest party in the blue bloc. A return to power for the centre-right would come through a Venstre/Konservative/LA government with DF and Danmarksdemokraterne as supporting partners, not through a radical-right prime minister.",
   "commento_coalizione_de": "In den Umfragen liegt der rote Block weiterhin bei rund 53 % und würde die Mehrheit behalten, während die DF auf 13 % gestiegen ist und damit stärkste Partei des blauen Blocks wurde. Eine Rückkehr von Mitte-rechts an die Macht würde über eine Regierung aus Venstre, Konservative und LA mit DF und Danmarksdemokraterne als Stützpartnern führen, nicht über einen rechtsradikalen Ministerpräsidenten."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Danish_general_election",
   "https://politpro.eu/en/denmark"
  ],
  "popolazione": 6.0,
  "ue": true,
  "nome_en": "Denmark",
  "nome_de": "Dänemark"
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
   "note_en": "The Orpo government (Kokoomus, Finns Party, RKP, Christian Democrats) has been in office since June 2023 with austerity policies and a crackdown on immigration. The governing parties are falling sharply in the polls while Antti Lindtman's SDP leads steadily.",
   "note_de": "Die Regierung Orpo (Kokoomus, Wahre Finnen, RKP, Christdemokraten) ist seit Juni 2023 im Amt und steht für Sparpolitik und eine Verschärfung der Einwanderungspolitik. Die Regierungsparteien verlieren in den Umfragen deutlich, während die SDP von Antti Lindtman stabil vorn liegt."
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
   "note_en": "Parliamentary election scheduled for 18 April 2027.",
   "note_de": "Parlamentswahl angesetzt für den 18. April 2027."
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
   "fonte_en": "Yle/Taloustutkimus (7 Sep – 5 Oct 2026)",
   "fonte_de": "Yle/Taloustutkimus (7. Sept. – 5. Okt. 2026)"
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
   "commento_coalizione_en": "With the SDP at 22-23% and the governing parties in decline, a Social Democrat-led government with the Centre and the left is likely in 2027. The Finns Party, although back up to 16.5%, are well below their 20.1% of 2023 and could hardly lead a government.",
   "commento_coalizione_de": "Mit der SDP bei 22–23 % und den Regierungsparteien im Abwärtstrend ist 2027 eine sozialdemokratisch geführte Regierung mit Zentrum und Linksbündnis wahrscheinlich. Die Wahren Finnen liegen zwar wieder bei 16,5 %, aber deutlich unter den 20,1 % von 2023 und könnten kaum eine Regierung führen."
  },
  "fonti": [
   "https://politpro.eu/en/finland",
   "https://en.wikipedia.org/wiki/2027_Finnish_parliamentary_election"
  ],
  "popolazione": 5.6,
  "ue": true,
  "nome_en": "Finland",
  "nome_de": "Finnland"
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
   "note": "Il Partito Laburista governa da solo in minoranza (53 seggi su 169) dopo l'uscita del Senterpartiet a inizio 2025; alle elezioni dell'8 settembre 2025 il blocco rosso-verde ha conservato la maggioranza (88 seggi). Il Fremskrittspartiet di Sylvi Listhaug ha più che raddoppiato i seggi (47) ed è ora primo partito in tutti i sondaggi, con record del 33,9% in Respons del 13 ottobre 2026. Il 7 ottobre 2026 il governo ha presentato il bilancio 2027 con un taglio dell'imposta sul reddito da 6,4 miliardi di corone, da negoziare in Storting entro Natale.",
   "note_en": "The Labour Party governs alone in minority (53 of 169 seats) after the Centre Party left in early 2025; at the election of 8 September 2025 the red-green bloc kept its majority (88 seats). Sylvi Listhaug's Progress Party more than doubled its seats (47) and is now first in every poll, with a record 33.9% in the Respons poll of 13 October 2026. On 7 October 2026 the government presented the 2027 budget with a 6.4 billion kroner income-tax cut, to be negotiated in the Storting before Christmas.",
   "note_de": "Die Arbeiterpartei regiert nach dem Ausstieg der Zentrumspartei Anfang 2025 allein in der Minderheit (53 von 169 Sitzen); bei der Wahl vom 8. September 2025 hat der rot-grüne Block seine Mehrheit behalten (88 Sitze). Die Fortschrittspartei von Sylvi Listhaug hat ihre Sitze mehr als verdoppelt (47) und ist jetzt in allen Umfragen stärkste Kraft, mit einem Rekord von 33,9% bei Respons am 13. Oktober 2026. Am 7. Oktober 2026 hat die Regierung den Haushalt 2027 mit einer Einkommensteuersenkung von 6,4 Milliarden Kronen vorgelegt, der bis Weihnachten im Storting zu verhandeln ist."
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
   "note_en": "Fixed four-year term; next Storting election in September 2029.",
   "note_de": "Feste vierjährige Legislaturperiode; nächste Storting-Wahl im September 2029."
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
   "fonte_en": "pollofpolls.no, national average October 2026",
   "fonte_de": "pollofpolls.no, nationaler Durchschnitt Oktober 2026"
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
   "commento_coalizione_en": "With FrP above 33% and Høyre below 14%, the October 2026 polls give FrP+H a majority on their own (87 mandates): Sylvi Listhaug would be Scandinavia's first populist-right prime minister, with Høyre as junior partner. This is the most concrete scenario of a national-populist-led government among the countries analysed.",
   "commento_coalizione_de": "Mit der FrP bei über 33 % und Høyre unter 14 % geben die Umfragen vom Oktober 2026 FrP und H allein die Mehrheit (87 Mandate): Sylvi Listhaug wäre die erste rechtspopulistische Ministerpräsidentin Skandinaviens, mit Høyre als Juniorpartner. Es ist das konkreteste Szenario einer nationalpopulistisch geführten Regierung unter den untersuchten Ländern."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2025_Norwegian_parliamentary_election",
   "https://www.pollofpolls.no/?cmd=Stortinget&do=snitt&yw=202610"
  ],
  "popolazione": 5.6,
  "ue": false,
  "nome_en": "Norway",
  "nome_de": "Norwegen"
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
   "note_en": "FF-FG government with the support of a group of independent TDs, sworn in on 23 January 2025. Rotation agreement: Simon Harris (FG) is due to become Taoiseach in November 2027. Catherine Connolly (backed by the left) has been president since November 2025.",
   "note_de": "Regierung aus FF und FG mit Unterstützung einer Gruppe unabhängiger Abgeordneter, im Amt seit dem 23. Januar 2025. Rotationsvereinbarung: Simon Harris (FG) soll im November 2027 Taoiseach werden. Catherine Connolly (von der Linken unterstützt) ist seit November 2025 Präsidentin."
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
   "note_en": "The Dáil must be dissolved by 17 December 2029; election by January 2030.",
   "note_de": "Der Dáil muss bis zum 17. Dezember 2029 aufgelöst werden; Wahl bis Januar 2030."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "Ireland Thinks / Sunday Independent (4 ott 2026)",
   "partiti": [
    {
     "partito": "Sinn Féin",
     "pct": 19.0,
     "famiglia": "sinistra"
    },
    {
     "partito": "FG",
     "pct": 18.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "FF",
     "pct": 18.0,
     "famiglia": "centrodestra"
    },
    {
     "partito": "SocDem",
     "pct": 11.0,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Aontú",
     "pct": 8.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Independent Ireland",
     "pct": 5.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "Labour",
     "pct": 4.0,
     "famiglia": "centrosinistra"
    }
   ],
   "fonte_en": "Ireland Thinks / Sunday Independent (4 Oct 2026)",
   "fonte_de": "Ireland Thinks / Sunday Independent (4. Okt. 2026)"
  },
  "destra_principale": {
   "partito": "Aontú",
   "leader": "Peadar Tóibín",
   "gruppo_pe": "n/a",
   "pct_sondaggio": 8.0,
   "pct_ultime_elezioni": 3.9,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "coalizione": "centrodestra",
   "commento_coalizione": "Il quadro è frammentato: Sinn Féin è primo partito ma intorno al 20% e senza alleati sufficienti, mentre FF e FG insieme restano la combinazione più probabile, magari con Aontú o Independent Ireland come stampelle. La destra nazional-conservatrice (Aontú al record dell'8%) cresce ma non ha alcuna prospettiva di guidare il governo.",
   "commento_coalizione_en": "The picture is fragmented: Sinn Féin is the largest party but at around 20% and without sufficient allies, while FF and FG together remain the most likely combination, perhaps propped up by Aontú or Independent Ireland. The national-conservative right (Aontú at a record 8%) is growing but has no prospect whatsoever of leading the government.",
   "commento_coalizione_de": "Das Bild ist zersplittert: Sinn Féin ist stärkste Partei, liegt aber bei rund 20 % und hat nicht genügend Verbündete, während FF und FG zusammen die wahrscheinlichste Kombination bleiben, möglicherweise mit Aontú oder Independent Ireland als Stützen. Die nationalkonservative Rechte (Aontú mit Rekordwert von 8 %) wächst, hat aber keinerlei Aussicht, die Regierung zu führen."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Next_Irish_general_election",
   "https://www.irishtimes.com/politics/2026/09/24/poll-indicates-irish-political-landscape-continuing-to-fragment/"
  ],
  "popolazione": 5.4,
  "ue": true,
  "nome_en": "Ireland",
  "nome_de": "Irland"
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
   "note": "Governo AD di minoranza (91 seggi su 230) in carica dal 5 giugno 2025 dopo le terze elezioni in tre anni. Montenegro esclude accordi con Chega; il socialista António José Seguro ha vinto le presidenziali di febbraio 2026 battendo André Ventura al ballottaggio (66,8%-33,2%). Il bilancio 2027 passerà grazie all'astensione annunciata dal PS (voto generale il 28 ottobre 2026, finale il 24 novembre); l'approvazione del governo è al 34% contro il 59% di disapprovazione (Pitagórica, 15 ottobre) e nel sondaggio Aximage del 6-7 ottobre Chega è per la prima volta primo con il 30,7%.",
   "note_en": "AD minority government (91 of 230 seats) in office since 5 June 2025 after the third election in three years. Montenegro rules out deals with Chega; the socialist António José Seguro won the February 2026 presidential election, beating André Ventura in the run-off (66.8%-33.2%). The 2027 budget will pass thanks to the abstention announced by the PS (general vote on 28 October 2026, final vote on 24 November); approval of the government stands at 34% against 59% disapproval (Pitagórica, 15 October) and in the Aximage poll of 6-7 October Chega is first for the first time with 30.7%.",
   "note_de": "AD-Minderheitsregierung (91 von 230 Sitzen) seit dem 5. Juni 2025 nach der dritten Wahl in drei Jahren. Montenegro schließt Abmachungen mit Chega aus; der Sozialist António José Seguro hat die Präsidentschaftswahl im Februar 2026 gewonnen und André Ventura in der Stichwahl geschlagen (66,8%-33,2%). Der Haushalt 2027 wird dank der angekündigten Enthaltung der PS durchkommen (Grundsatzabstimmung am 28. Oktober 2026, Schlussabstimmung am 24. November); die Zustimmung zur Regierung liegt bei 34% gegen 59% Ablehnung (Pitagórica, 15. Oktober), und in der Aximage-Umfrage vom 6.-7. Oktober liegt Chega mit 30,7% erstmals vorn."
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
   "note_en": "Legal deadline by 14 October 2029, barring early dissolution (frequent in Portugal).",
   "note_de": "Gesetzliche Frist: spätestens 14. Oktober 2029, vorbehaltlich einer vorzeitigen Auflösung (in Portugal häufig)."
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
   "fonte_en": "PolitPro, weighted average (15 Oct 2026)",
   "fonte_de": "PolitPro, gewichteter Durchschnitt (15. Okt. 2026)"
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
   "commento_coalizione": "PS e Chega sono appaiati intorno al 28% con l'AD scesa sotto il 24%, e in Aximage Chega è già primo (30,7%): se si votasse oggi il PS sarebbe il candidato più probabile a un governo di minoranza, ma la somma AD+Chega+IL resta maggioritaria. Se la crescita di Chega continua, Ventura diventerebbe primo partito e renderebbe difficile al PSD mantenere il cordone sanitario.",
   "commento_coalizione_en": "PS and Chega are level around 28% with AD below 24%, and in Aximage Chega is already first (30.7%): if a vote were held today the PS would be the most likely candidate for a minority government, but AD+Chega+IL together still hold a majority. If Chega keeps growing, Ventura would become the largest party and make it hard for the PSD to maintain the cordon sanitaire.",
   "commento_coalizione_de": "PS und Chega liegen gleichauf bei rund 28%, die AD ist unter 24% gefallen, und bei Aximage liegt Chega bereits vorn (30,7%): Würde heute gewählt, wäre die PS der wahrscheinlichste Kandidat für eine Minderheitsregierung, doch AD+Chega+IL haben zusammen weiterhin die Mehrheit. Wächst Chega weiter, würde Ventura stärkste Kraft und es der PSD schwer machen, die Brandmauer aufrechtzuerhalten."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Next_Portuguese_legislative_election",
   "https://politpro.eu/en/portugal"
  ],
  "anticipate": {
   "data": "2028-03",
   "nota": "Terzo governo di minoranza in tre anni e scioglimenti frequenti: difficile arrivare al 2029.",
   "nota_en": "Third minority government in three years and frequent dissolutions: reaching 2029 will be difficult.",
   "nota_de": "Dritte Minderheitsregierung in drei Jahren und häufige Parlamentsauflösungen: Ein Durchhalten bis 2029 ist schwierig."
  },
  "popolazione": 10.7,
  "ue": true,
  "nome_en": "Portugal",
  "nome_de": "Portugal"
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
   "note": "Nea Dimokratia governa da sola con maggioranza assoluta (156 seggi) dal giugno 2023. Il consenso è crollato dal 40,6% a circa il 30% per caro-vita, scandalo OPEKEPE e strage di Tempi; l'opposizione è frammentata tra il nuovo partito di Tsipras (ELAS), PASOK, Elliniki Lysi e il movimento di Maria Karystianou, in calo al 4-5%. A metà ottobre 2026 Mitsotakis ha escluso di nuovo elezioni anticipate e rimpasto: si vota a scadenza nella primavera 2027.",
   "note_en": "New Democracy has governed alone with an absolute majority (156 seats) since June 2023. Its support has collapsed from 40.6% to about 30% over the cost of living, the OPEKEPE scandal and the Tempi disaster; the opposition is fragmented between Tsipras's new party (ELAS), PASOK, Elliniki Lysi and Maria Karystianou's movement, down to 4-5%. In mid-October 2026 Mitsotakis again ruled out a snap election and a reshuffle: the vote will be held at the end of the term in spring 2027.",
   "note_de": "Die Nea Dimokratia regiert seit Juni 2023 allein mit absoluter Mehrheit (156 Sitze). Ihre Zustimmung ist wegen Teuerung, OPEKEPE-Skandal und Zugunglück von Tempi von 40,6% auf rund 30% eingebrochen; die Opposition ist zersplittert zwischen Tsipras' neuer Partei (ELAS), PASOK, Elliniki Lysi und der auf 4-5% gefallenen Bewegung von Maria Karystianou. Mitte Oktober 2026 hat Mitsotakis Neuwahlen und eine Kabinettsumbildung erneut ausgeschlossen: Gewählt wird regulär im Frühjahr 2027."
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
   "note_en": "End of the parliamentary term: election by summer 2027; Mitsotakis rules out a snap election.",
   "note_de": "Reguläres Ende der Legislaturperiode: Wahl bis Sommer 2027; Mitsotakis schließt eine Neuwahl aus."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "Marc per ANT1, stima di voto (12-14 ottobre 2026)",
   "partiti": [
    {
     "partito": "ND",
     "pct": 30.4,
     "famiglia": "centrodestra"
    },
    {
     "partito": "ELAS (Tsipras)",
     "pct": 15.8,
     "famiglia": "sinistra"
    },
    {
     "partito": "PASOK",
     "pct": 12.4,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Elliniki Lysi",
     "pct": 7.0,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "KKE",
     "pct": 7.0,
     "famiglia": "sinistra"
    },
    {
     "partito": "Plefsi Eleftherias",
     "pct": 5.5,
     "famiglia": "sinistra"
    },
    {
     "partito": "Elpida (Karystianou)",
     "pct": 4.5,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "Marc for ANT1, vote estimate (12-14 October 2026)",
   "fonte_de": "Marc für ANT1, Wahlprognose (12.-14. Oktober 2026)"
  },
  "destra_principale": {
   "partito": "Elliniki Lysi",
   "leader": "Kyriakos Velopoulos",
   "gruppo_pe": "ECR",
   "pct_sondaggio": 7.0,
   "pct_ultime_elezioni": 4.4,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrodestra",
   "coalizione": "centrodestra",
   "commento_coalizione": "ND resta prima con 12-15 punti di vantaggio ma intorno al 30% non otterrebbe la maggioranza assoluta: probabile un secondo turno elettorale o una coalizione con PASOK. La destra radicale è frammentata (Elliniki Lysi, Foni Logikis, Niki) e sommata non supera il 12-13%: può al più condizionare ND, non guidare il governo.",
   "commento_coalizione_en": "ND remains first with a 12-15 point lead but at around 30% would not win an absolute majority: a second round of elections or a coalition with PASOK is likely. The radical right is fragmented (Elliniki Lysi, Foni Logikis, Niki) and combined does not exceed 12-13%: at most it can influence ND, not lead the government.",
   "commento_coalizione_de": "Die ND bleibt mit 12–15 Punkten Vorsprung vorn, würde aber bei rund 30 % keine absolute Mehrheit erreichen: Wahrscheinlich sind ein zweiter Wahlgang oder eine Koalition mit der PASOK. Die radikale Rechte ist zersplittert (Elliniki Lysi, Foni Logikis, Niki) und kommt zusammen nicht über 12–13 %: Sie kann die ND allenfalls beeinflussen, aber nicht die Regierung führen."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Greek_parliamentary_election",
   "https://politpro.eu/en/greece"
  ],
  "popolazione": 10.4,
  "ue": true,
  "nome_en": "Greece",
  "nome_de": "Griechenland"
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
   "note": "Governo di concordanza permanente a sette membri (formula 2-2-2-1 dal 2008). La presidenza ruota ogni anno: nel 2026 spetta a Guy Parmelin dell'UDC, che è il primo partito con 62 seggi al Consiglio nazionale. Nessun partito 'guida' l'esecutivo. Parmelin ha annunciato a inizio ottobre 2026 le dimissioni dal Consiglio federale per fine anno: l'Assemblea federale eleggerà il successore il 9 dicembre 2026 e la candidata UDC è la ginevrina Céline Amaudruz (annuncio del 15 ottobre); la formula 2-2-2-1 non è in discussione.",
   "note_en": "Permanent seven-member consensus government (2-2-2-1 formula since 2008). The presidency rotates every year: in 2026 it falls to Guy Parmelin of the SVP, the largest party with 62 seats in the National Council. No party 'leads' the executive. In early October 2026 Parmelin announced his resignation from the Federal Council at the end of the year: the Federal Assembly will elect his successor on 9 December 2026 and the SVP candidate is Céline Amaudruz from Geneva (announced on 15 October); the 2-2-2-1 formula is not in question.",
   "note_de": "Dauerhafte Konkordanzregierung mit sieben Mitgliedern (Zauberformel 2-2-2-1 seit 2008). Das Präsidium wechselt jährlich: 2026 hat es Guy Parmelin von der SVP inne, der stärksten Partei mit 62 Sitzen im Nationalrat. Keine Partei 'führt' die Exekutive. Parmelin hat Anfang Oktober 2026 seinen Rücktritt aus dem Bundesrat auf Jahresende angekündigt: Die Bundesversammlung wählt die Nachfolge am 9. Dezember 2026, SVP-Kandidatin ist die Genferin Céline Amaudruz (Ankündigung vom 15. Oktober); die Formel 2-2-2-1 steht nicht zur Debatte."
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
   "note_en": "Federal election on 24 October 2027; the Federal Council is then elected by the Federal Assembly in December 2027.",
   "note_de": "Eidgenössische Wahlen am 24. Oktober 2027; der Bundesrat wird anschließend im Dezember 2027 von der Bundesversammlung gewählt."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "SRG/Sotomo Wahlbarometer 2026 (campo 10-23 settembre, pubblicato 16 ottobre 2026)",
   "partiti": [
    {
     "partito": "UDC/SVP",
     "pct": 29.9,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "PS/SP",
     "pct": 19.3,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PLR/FDP",
     "pct": 13.3,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Il Centro",
     "pct": 12.6,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Verdi",
     "pct": 10.3,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PVL/GLP",
     "pct": 7.1,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "SRG/Sotomo election barometer 2026 (fieldwork 10-23 September, published 16 October 2026)",
   "fonte_de": "SRG/Sotomo Wahlbarometer 2026 (Erhebung 10.-23. September, veröffentlicht 16. Oktober 2026)"
  },
  "destra_principale": {
   "partito": "UDC/SVP",
   "leader": "Marcel Dettling",
   "gruppo_pe": "n/a",
   "pct_sondaggio": 29.9,
   "pct_ultime_elezioni": 27.9,
   "trend": "stabile"
  },
  "scenario": {
   "trend": "tecnico",
   "status_quo": "tecnico",
   "partner_trend": true,
   "coalizione": "tecnico",
   "partner_coalizione": true,
   "commento_coalizione": "Il sistema di concordanza impedisce a qualsiasi partito di 'guidare' il governo: anche con l'UDC al 29,9% nel barometro SRG 2026 (+2 punti sul 2023, sopra il record del 2015) la composizione 2-2-2-1 del Consiglio federale non cambierebbe. L'influenza della destra nazionalista passa per le iniziative popolari (es. 'No a una Svizzera da 10 milioni') più che per la guida dell'esecutivo.",
   "primo": "tecnico",
   "partner_primo": true,
   "commento_coalizione_en": "The consensus system prevents any party from 'leading' the government: even with the SVP at 29.9% in the 2026 SRG barometer (up 2 points on 2023, above the 2015 record) the 2-2-2-1 composition of the Federal Council would not change. The nationalist right's influence runs through popular initiatives (e.g. 'No to a 10-million Switzerland') rather than through leadership of the executive.",
   "commento_coalizione_de": "Das Konkordanzsystem verhindert, dass eine Partei die Regierung 'führt': Selbst mit der SVP bei 29,9% im SRG-Barometer 2026 (+2 Punkte gegenüber 2023, über dem Rekord von 2015) würde sich die Zusammensetzung 2-2-2-1 des Bundesrats nicht ändern. Der Einfluss der nationalistischen Rechten läuft eher über Volksinitiativen (z. B. 'Nein zu einer 10-Millionen-Schweiz') als über die Führung der Exekutive."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2023_Swiss_federal_election",
   "https://www.srf.ch/news/schweiz/zwei-jahre-vor-den-wahlen-wahlbarometer-zeigt-svp-mit-historischem-hoch-liberale-im-tief-1"
  ],
  "popolazione": 9.0,
  "ue": false,
  "nome_en": "Switzerland",
  "nome_de": "Schweiz"
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
   "note": "Coalizione Reform–Eesti 200 (SDE espulsa a marzo 2025) ridotta a 50 seggi su 101 dopo le defezioni di due deputati nel 2026; governo molto impopolare, i due partiti di coalizione sommano circa il 14% nei sondaggi a cinque mesi dal voto. Il 14 ottobre 2026 Keskerakond, Isamaa ed EKRE hanno depositato una mozione di sfiducia contro il governo Michal (33 firme, ne servono 51 per approvarla) che la SDE non sostiene senza un piano per il governo successivo; Eesti 200, all'1,2%, ha deciso di non fondersi con i Verdi.",
   "note_en": "The Reform–Eesti 200 coalition (SDE expelled in March 2025) is down to 50 of 101 seats after two MPs defected in 2026; the government is deeply unpopular, the two coalition parties adding up to about 14% in the polls five months before the vote. On 14 October 2026 Keskerakond, Isamaa and EKRE tabled a no-confidence motion against the Michal government (33 signatures, 51 needed to carry it) which the SDE will not back without a plan for the next government; Eesti 200, at 1.2%, has decided not to merge with the Greens.",
   "note_de": "Die Koalition Reform–Eesti 200 (SDE im März 2025 ausgeschlossen) ist nach dem Abgang zweier Abgeordneter 2026 auf 50 von 101 Sitzen geschrumpft; die Regierung ist sehr unbeliebt, die beiden Koalitionsparteien kommen fünf Monate vor der Wahl zusammen auf etwa 14% in den Umfragen. Am 14. Oktober 2026 haben Keskerakond, Isamaa und EKRE einen Misstrauensantrag gegen die Regierung Michal eingebracht (33 Unterschriften, 51 wären zur Annahme nötig), den die SDE ohne Plan für die nächste Regierung nicht unterstützt; Eesti 200, bei 1,2%, hat sich gegen eine Fusion mit den Grünen entschieden."
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
   "note_en": "Riigikogu election by 7 March 2027.",
   "note_de": "Wahl zum Riigikogu bis zum 7. März 2027."
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
   "fonte_en": "Norstat / Institute for Societal Studies (14 Sep – 12 Oct 2026), via ERR",
   "fonte_de": "Norstat / Institute for Societal Studies (14. Sept. – 12. Okt. 2026), via ERR"
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
   "commento_coalizione_en": "On current polls Isamaa (Reinsalu) would lead the next government, probably with Keskerakond and/or SDE; EKRE, split in 2024 and stuck at 14-18%, is in no position to lead a government but could join as Isamaa's junior partner (as in 2019-21), a possible scenario if the centre-right were to prefer a right-wing coalition.",
   "commento_coalizione_de": "Nach den aktuellen Umfragen würde Isamaa (Reinsalu) die nächste Regierung führen, wahrscheinlich mit Keskerakond und/oder SDE; die EKRE, 2024 gespalten und bei 14–18 % stagnierend, ist nicht in der Lage, eine Regierung zu führen, könnte aber als Juniorpartner von Isamaa eintreten (wie 2019–21) – ein mögliches Szenario, falls Mitte-rechts eine Rechtskoalition vorziehen sollte."
  },
  "fonti": [
   "https://news.err.ee/1610165908/norstat-isamaa-extends-lead-in-front-of-center-again",
   "https://en.wikipedia.org/wiki/Next_Estonian_parliamentary_election"
  ],
  "popolazione": 1.4,
  "ue": true,
  "nome_en": "Estonia",
  "nome_de": "Estland"
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
   "note": "Governo nato il 28/5/2026 dopo la caduta di Siliņa (JV). Alle elezioni del 3/10/2026 AS ha stravinto: risultati confermati dalla commissione elettorale il 16 ottobre con 41 seggi ad AS, 17 a LPV, 15 a SV–AJ, 10 a NA, 10 ai Progresīvie e 7 a JV, mentre ZZS resta fuori dalla Saeima per la prima volta in 24 anni. Il presidente Rinkēvičs ha incaricato Kulbergs il 6/10; AS esclude coalizioni con LPV e Progresīvie e ha respinto l'offerta di appoggio esterno di Šlesers (LPV); i primi colloqui formali con NA e JV sono fissati per il 28 ottobre, con l'obiettivo di un governo AS–NA–JV (58 seggi) entro il 18 novembre.",
   "note_en": "Government formed on 28/5/2026 after the fall of Siliņa (JV). At the election of 3/10/2026 AS won by a landslide: results confirmed by the electoral commission on 16 October with 41 seats for AS, 17 for LPV, 15 for SV–AJ, 10 for NA, 10 for the Progressives and 7 for JV, while ZZS is out of the Saeima for the first time in 24 years. President Rinkēvičs tasked Kulbergs on 6/10; AS rules out coalitions with LPV and the Progressives and has rejected Šlesers' (LPV) offer of external support; the first formal talks with NA and JV are set for 28 October, aiming at an AS–NA–JV government (58 seats) by 18 November.",
   "note_de": "Regierung gebildet am 28.5.2026 nach dem Sturz von Siliņa (JV). Bei der Wahl vom 3.10.2026 hat AS haushoch gewonnen: Die Wahlkommission hat die Ergebnisse am 16. Oktober bestätigt, mit 41 Sitzen für AS, 17 für LPV, 15 für SV–AJ, 10 für NA, 10 für die Progressiven und 7 für JV, während ZZS erstmals seit 24 Jahren nicht mehr in der Saeima vertreten ist. Präsident Rinkēvičs hat Kulbergs am 6.10. mit der Regierungsbildung beauftragt; AS schließt Koalitionen mit LPV und den Progressiven aus und hat das Angebot externer Unterstützung von Šlesers (LPV) abgelehnt; die ersten formellen Gespräche mit NA und JV sind für den 28. Oktober angesetzt, mit dem Ziel einer Regierung AS–NA–JV (58 Sitze) bis zum 18. November."
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
   "note_en": "Next Saeima election in October 2030; in 2027 the Saeima elects the President of the Republic.",
   "note_de": "Nächste Saeima-Wahl im Oktober 2030; 2027 wählt die Saeima den Staatspräsidenten."
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
   "fonte_en": "SKDS/LTV (4-16 Sep 2026, last pre-election poll)",
   "fonte_de": "SKDS/LTV (4.–16. Sept. 2026, letzte Umfrage vor der Wahl)"
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
   "commento_coalizione_en": "The October 2026 vote handed AS a dominant position: the United List will lead a centre-right government with the national-conservative NA and JV. Šlesers's LPV and the populist SV–AJ together total 25% but remain isolated: the radical right governs only through NA as a junior partner.",
   "commento_coalizione_de": "Die Wahl vom Oktober 2026 hat AS eine dominante Position verschafft: Die Vereinigte Liste wird eine Mitte-rechts-Regierung mit der nationalkonservativen NA und JV führen. LPV von Šlesers und die populistische SV–AJ kommen zusammen auf 25 %, bleiben aber isoliert: Die radikale Rechte regiert nur über die NA als Juniorpartner mit."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Latvian_parliamentary_election",
   "https://eng.lsm.lv/article/politics/politics/06.10.2026-president-asks-kulbergs-to-form-next-latvian-government.a666382/",
   "https://politpro.eu/en/latvia"
  ],
  "popolazione": 1.9,
  "ue": true,
  "nome_en": "Latvia",
  "nome_de": "Lettland"
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
   "note": "A giugno 2026 i socialdemocratici hanno rotto con la populista Nemuno aušra; la premier Ruginienė si è dimessa e il leader LSDP Sinkevičius è stato insediato il 14/7 alla guida di una coalizione con maggioranza risicata (circa 76 seggi su 141). Il governo resta impopolare (gradimento del premier sceso dal 38% al 33% in ottobre) e i conservatori TS-LKD guidano i sondaggi con il 20-21%, mentre Nemuno aušra risale al 14%.",
   "note_en": "In June 2026 the Social Democrats broke with the populist Nemuno aušra; Prime Minister Ruginienė resigned and LSDP leader Sinkevičius was sworn in on 14/7 at the head of a coalition with a slim majority (about 76 of 141 seats). The government remains unpopular (the prime minister's approval fell from 38% to 33% in October) and the conservative TS-LKD leads the polls with 20-21%, while Nemuno aušra climbs back to 14%.",
   "note_de": "Im Juni 2026 haben die Sozialdemokraten mit der populistischen Nemuno aušra gebrochen; Premierministerin Ruginienė ist zurückgetreten, und LSDP-Chef Sinkevičius wurde am 14.7. an die Spitze einer Koalition mit knapper Mehrheit (rund 76 von 141 Sitzen) vereidigt. Die Regierung bleibt unbeliebt (Zustimmung zum Premier im Oktober von 38% auf 33% gesunken), die konservative TS-LKD führt die Umfragen mit 20-21% an, während Nemuno aušra wieder auf 14% steigt."
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
   "note_en": "Seimas election in October 2028; presidential election in May 2029.",
   "note_de": "Seimas-Wahl im Oktober 2028; Präsidentschaftswahl im Mai 2029."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "Baltijos tyrimai per ELTA (23 set – 5 ott 2026), via PolitPro",
   "partiti": [
    {
     "partito": "TS-LKD",
     "pct": 20.7,
     "famiglia": "centrodestra"
    },
    {
     "partito": "LSDP",
     "pct": 16.3,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "Nemuno aušra",
     "pct": 14.1,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "LVŽS",
     "pct": 13.9,
     "famiglia": "centrodestra"
    },
    {
     "partito": "Liberalų sąjūdis",
     "pct": 7.7,
     "famiglia": "centro"
    },
    {
     "partito": "Nacionalinis susivienijimas",
     "pct": 6.6,
     "famiglia": "destra_nazionalista"
    },
    {
     "partito": "DSVL",
     "pct": 6.2,
     "famiglia": "centro"
    }
   ],
   "fonte_en": "Baltijos tyrimai for ELTA (23 Sep – 5 Oct 2026), via PolitPro",
   "fonte_de": "Baltijos tyrimai für ELTA (23. Sep. – 5. Okt. 2026), via PolitPro"
  },
  "destra_principale": {
   "partito": "Nemuno aušra",
   "leader": "Remigijus Žemaitaitis",
   "gruppo_pe": "n/a",
   "pct_sondaggio": 14.1,
   "pct_ultime_elezioni": 15.3,
   "trend": "in_crescita"
  },
  "scenario": {
   "trend": "centrodestra",
   "status_quo": "centrosinistra",
   "coalizione": "centrodestra",
   "commento_coalizione": "Se si votasse oggi TS-LKD sarebbe primo partito e guiderebbe un governo di centrodestra con i liberali; Nemuno aušra, espulsa dalla coalizione, è risalita al 14% ma resta isolata e potrebbe tornare al governo solo come partner di una LSDP indebolita, scenario oggi poco probabile.",
   "commento_coalizione_en": "If a vote were held today TS-LKD would be the largest party and would lead a centre-right government with the liberals; Nemuno aušra, expelled from the coalition, has climbed back to 14% but remains isolated and could return to government only as partner of a weakened LSDP, an unlikely scenario today.",
   "commento_coalizione_de": "Würde heute gewählt, wäre TS-LKD stärkste Partei und würde eine Mitte-rechts-Regierung mit den Liberalen führen; Nemuno aušra, aus der Koalition ausgeschlossen, ist wieder auf 14% gestiegen, bleibt aber isoliert und könnte nur als Partner einer geschwächten LSDP in die Regierung zurückkehren, ein derzeit wenig wahrscheinliches Szenario."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Sinkevi%C4%8Dius_Cabinet",
   "https://politpro.eu/en/lithuania"
  ],
  "popolazione": 2.9,
  "ue": true,
  "nome_en": "Lithuania",
  "nome_de": "Litauen"
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
   "note_en": "CSV–DP coalition with 35 of 60 seats, stable but losing support: in the 2026 polls CSV, DP and LSAP are almost level and the outgoing majority (around 44-45%) would not be renewed.",
   "note_de": "Koalition aus CSV und DP mit 35 von 60 Sitzen, stabil, aber mit sinkender Zustimmung: In den Umfragen 2026 liegen CSV, DP und LSAP fast gleichauf, und die amtierende Mehrheit (rund 44–45 %) würde nicht bestätigt."
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
   "note_en": "Chamber of Deputies election by 8 October 2028.",
   "note_de": "Wahl zur Abgeordnetenkammer bis zum 8. Oktober 2028."
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
   "fonte_en": "ILRES / RTL-Luxemburger Wort (22 Sep – 2 Oct 2026)",
   "fonte_de": "ILRES / RTL-Luxemburger Wort (22. Sept. – 2. Okt. 2026)"
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
   "commento_coalizione_en": "CSV remains the largest party but its loss of support opens the way to an alternative DP–LSAP–Greens coalition; the ADR is growing (12-13%) but even with the CSV it would not reach a majority and no party regards it as a partner: the radical right cannot realistically govern by 2030.",
   "commento_coalizione_de": "Die CSV bleibt stärkste Partei, doch der Stimmenverlust eröffnet die Möglichkeit einer alternativen Koalition aus DP, LSAP und Grünen; die ADR legt zu (12–13 %), würde aber auch mit der CSV keine Mehrheit erreichen, und keine Partei betrachtet sie als Partner: Die radikale Rechte kann bis 2030 realistischerweise nicht regieren."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/Next_Luxembourg_general_election",
   "https://politpro.eu/en/luxembourg"
  ],
  "popolazione": 0.68,
  "ue": true,
  "nome_en": "Luxembourg",
  "nome_de": "Luxemburg"
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
   "note": "Abela (premier dal gennaio 2020) ha vinto le elezioni anticipate del 30/5/2026, quarta vittoria consecutiva del Labour. Maggioranza ridotta (42 seggi contro 37 del PN di Alex Borg) e vantaggio di voti quasi dimezzato rispetto al 2022. Nel primo sondaggio post-elettorale (MaltaToday, 11 ottobre 2026) PL e PN sono in pareggio statistico (48,2% contro 48,0%), con il Labour che perde soprattutto verso l'astensione; Abela resta avanti a Borg nella fiducia (44,4% contro 35,1%).",
   "note_en": "Abela (prime minister since January 2020) won the snap election of 30/5/2026, Labour's fourth consecutive victory. Reduced majority (42 seats against 37 for Alex Borg's PN) and a vote lead almost halved compared with 2022. In the first post-election poll (MaltaToday, 11 October 2026) PL and PN are statistically tied (48.2% against 48.0%), with Labour losing mainly to abstention; Abela stays ahead of Borg on trust (44.4% against 35.1%).",
   "note_de": "Abela (Premier seit Januar 2020) hat die vorgezogene Wahl vom 30.5.2026 gewonnen, der vierte Sieg von Labour in Folge. Verkleinerte Mehrheit (42 Sitze gegen 37 für die PN von Alex Borg) und ein gegenüber 2022 fast halbierter Stimmenvorsprung. In der ersten Umfrage nach der Wahl (MaltaToday, 11. Oktober 2026) liegen PL und PN statistisch gleichauf (48,2% gegen 48,0%), wobei Labour vor allem an die Enthaltung verliert; Abela bleibt beim Vertrauen vor Borg (44,4% gegen 35,1%)."
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
   "note_en": "Five-year term: legal deadline around summer 2031.",
   "note_de": "Fünfjährige Legislaturperiode: gesetzliche Frist etwa im Sommer 2031."
  },
  "sondaggi": {
   "data": "2026-10",
   "fonte": "MaltaToday (22 set – 2 ott 2026)",
   "partiti": [
    {
     "partito": "PL",
     "pct": 48.2,
     "famiglia": "centrosinistra"
    },
    {
     "partito": "PN",
     "pct": 48.0,
     "famiglia": "centrodestra"
    }
   ],
   "fonte_en": "MaltaToday (22 Sep – 2 Oct 2026)",
   "fonte_de": "MaltaToday (22. Sep. – 2. Okt. 2026)"
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
   "commento_coalizione": "Sistema bipartitico senza una destra radicale rilevante: il Labour ha appena rinnovato il mandato fino al 2031 ma a cinque mesi dal voto il suo vantaggio è già evaporato (pareggio PL-PN nel sondaggio di ottobre 2026); l'unica alternativa è il PN di centrodestra e non esiste alcuno scenario di governo per la destra nazionalista.",
   "commento_coalizione_en": "Two-party system without a relevant radical right: Labour has just renewed its mandate until 2031 but five months after the vote its lead has already evaporated (PL-PN tie in the October 2026 poll); the only alternative is the centre-right PN and there is no government scenario for the nationalist right.",
   "commento_coalizione_de": "Zweiparteiensystem ohne relevante radikale Rechte: Labour hat gerade sein Mandat bis 2031 erneuert, doch fünf Monate nach der Wahl ist sein Vorsprung bereits verflogen (Gleichstand PL-PN in der Umfrage vom Oktober 2026); die einzige Alternative ist die Mitte-rechts-PN, und es gibt kein Regierungsszenario für die nationalistische Rechte."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Maltese_general_election"
  ],
  "popolazione": 0.56,
  "ue": true,
  "nome_en": "Malta",
  "nome_de": "Malta"
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
   "note_en": "Presidential republic with no prime minister: the cabinet is appointed by President Christodoulides (independent, formerly DISY). After the parliamentary election of 24/5/2026 EDEK and DIPA lost all their seats and the government relies in Parliament solely on DIKO (8 of 56 seats).",
   "note_de": "Präsidialrepublik ohne Premierminister: Das Kabinett wird von Präsident Christodoulides (parteilos, ehemals DISY) ernannt. Nach der Parlamentswahl vom 24.5.2026 haben EDEK und DIPA alle Sitze verloren, und die Regierung stützt sich im Parlament nur noch auf DIKO (8 von 56 Sitzen)."
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
   "note_en": "Presidential election in February 2028; parliamentary election in May 2031.",
   "note_de": "Präsidentschaftswahl im Februar 2028; Parlamentswahl im Mai 2031."
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
   "fonte_en": "Parliamentary election results 24/5/2026 (no subsequent party poll found)",
   "fonte_de": "Ergebnisse der Parlamentswahl vom 24.5.2026 (keine spätere Parteienumfrage gefunden)"
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
   "commento_coalizione_en": "In the presidential system the 2028 vote is what counts: DISY is back as the largest party and the centrist parties backing Christodoulides have collapsed, so the next president would probably come from the centre-right camp. ELAM, the third force at 11%, can act as kingmaker in the run-off but lacks the critical mass to produce a president by 2030.",
   "commento_coalizione_de": "Im Präsidialsystem zählt die Wahl 2028: DISY ist wieder stärkste Partei, und die zentristischen Parteien, die Christodoulides stützen, sind eingebrochen; der nächste Präsident käme daher wahrscheinlich aus dem Mitte-rechts-Lager. ELAM, drittstärkste Kraft mit 11 %, kann in der Stichwahl als Zünglein an der Waage wirken, hat aber nicht das Gewicht, bis 2030 einen Präsidenten zu stellen."
  },
  "fonti": [
   "https://en.wikipedia.org/wiki/2026_Cypriot_legislative_election",
   "https://en.wikipedia.org/wiki/2028_Cypriot_presidential_election"
  ],
  "popolazione": 0.97,
  "ue": true,
  "nome_en": "Cyprus",
  "nome_de": "Zypern"
 }
];
