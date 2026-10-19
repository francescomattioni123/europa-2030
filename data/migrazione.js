// Indicatori Eurostat su migrazione, asilo, rimpatri, popolazione e cittadinanza (UE27 e Stati membri). Generato da scripts/migrazione.js, non modificare a mano.
// Estratto dall'API Eurostat il 2026-10-19. Ultimo aggiornamento Eurostat dei dataset: migr_eiord 2026-09-30, migr_eirtn 2026-09-25, migr_eipre 2026-05-12, migr_eirfs 2026-05-12, migr_asyappctza 2026-09-03, migr_asydcfsta 2026-08-24, migr_asypenctzm 2026-10-13, migr_asytpsm 2026-10-15, migr_pop1ctz 2026-09-25, migr_pop5ctz 2026-09-25, lfsa_pgaccpm 2026-09-10, lfsa_pganedm 2026-09-10, migr_acq 2026-03-27, migr_resvalid 2026-09-28.
// Codici geo Eurostat: EL = Grecia. Dati su rimpatri e asilo arrotondati a 5 da Eurostat; "rimpatri_totali" include i trasferimenti verso altri Stati membri. null = dato non trasmesso dallo Stato, mai stimato.
window.MIGRAZIONE = {
 "estratto": "2026-10-19",
 "anno": 2025,
 "mese": "2025-12",
 "geo": [
  "EU27_2020",
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "EL",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE"
 ],
 "indicatori": {
  "ordini": {
   "nome": "Ordini di lasciare il territorio",
   "nome_en": "Orders to leave",
   "nome_de": "Ausreiseanordnungen",
   "dataset": "migr_eiord",
   "periodo": "2025",
   "aggiornato_eurostat": "2026-09-30",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_eiord/default/table",
   "valori": {
    "EU27_2020": 486705,
    "AT": 11165,
    "BE": 25340,
    "BG": 3880,
    "HR": 11330,
    "CY": 15185,
    "CZ": 5250,
    "DK": 2280,
    "EE": 660,
    "FI": 5070,
    "FR": 137550,
    "DE": 55240,
    "EL": 26635,
    "HU": 9080,
    "IE": 6260,
    "IT": 21295,
    "LV": 2640,
    "LT": 4900,
    "LU": 1340,
    "MT": 1090,
    "NL": 31230,
    "PL": 14760,
    "PT": 18245,
    "RO": 2860,
    "SK": 500,
    "SI": 880,
    "ES": 53700,
    "SE": 18340
   }
  },
  "rimpatri_totali": {
   "nome": "Rimpatriati (totale, inclusi i trasferimenti verso altri Stati membri)",
   "nome_en": "Returned (total, including transfers to other member states)",
   "nome_de": "Rückgeführte (gesamt, inkl. Überstellungen in andere Mitgliedstaaten)",
   "dataset": "migr_eirtn",
   "periodo": "2025",
   "aggiornato_eurostat": "2026-09-25",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn/default/table",
   "valori": {
    "EU27_2020": 156000,
    "AT": 8045,
    "BE": 5245,
    "BG": 1205,
    "HR": 6620,
    "CY": 10630,
    "CZ": 3255,
    "DK": 975,
    "EE": 660,
    "FI": 1915,
    "FR": 18930,
    "DE": 36075,
    "EL": 5080,
    "HU": 4335,
    "IE": 2050,
    "IT": 4780,
    "LV": 2280,
    "LT": 4555,
    "LU": 390,
    "MT": 1065,
    "NL": 4970,
    "PL": 9700,
    "PT": 825,
    "RO": 1800,
    "SK": 425,
    "SI": 490,
    "ES": 5705,
    "SE": 13990
   }
  },
  "rimpatri_terzi": {
   "nome": "Rimpatriati verso paesi terzi",
   "nome_en": "Returned to third countries",
   "nome_de": "In Drittstaaten Rückgeführte",
   "dataset": "migr_eirtn",
   "periodo": "2025",
   "aggiornato_eurostat": "2026-09-25",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_eirtn/default/table",
   "valori": {
    "EU27_2020": 139270,
    "AT": 7305,
    "BE": 4955,
    "BG": 1150,
    "HR": 6560,
    "CY": 10630,
    "CZ": 3180,
    "DK": 975,
    "EE": 565,
    "FI": 1820,
    "FR": 14940,
    "DE": 29295,
    "EL": 5050,
    "HU": 4135,
    "IE": 2030,
    "IT": 4780,
    "LV": 2280,
    "LT": 4545,
    "LU": 370,
    "MT": 1065,
    "NL": 4825,
    "PL": 9690,
    "PT": 825,
    "RO": 775,
    "SK": 395,
    "SI": 175,
    "ES": 5705,
    "SE": 11250
   }
  },
  "irregolari": {
   "nome": "Trovati in posizione irregolare",
   "nome_en": "Found to be illegally present",
   "nome_de": "Irregulär aufgegriffen",
   "dataset": "migr_eipre",
   "periodo": "2025",
   "aggiornato_eurostat": "2026-05-12",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_eipre/default/table",
   "valori": {
    "EU27_2020": 719395,
    "AT": 16550,
    "BE": 9420,
    "BG": 7745,
    "HR": 20300,
    "CY": 5335,
    "CZ": 10370,
    "DK": 1375,
    "EE": 585,
    "FI": 660,
    "FR": 159460,
    "DE": 168360,
    "EL": 60800,
    "HU": 20515,
    "IE": 5460,
    "IT": 82505,
    "LV": 2410,
    "LT": 5035,
    "LU": 2150,
    "MT": 2150,
    "NL": 3955,
    "PL": 17650,
    "PT": 735,
    "RO": 24350,
    "SK": 1535,
    "SI": 28575,
    "ES": 58910,
    "SE": 2495
   }
  },
  "respinti": {
   "nome": "Respinti alle frontiere esterne",
   "nome_en": "Refused entry at external borders",
   "nome_de": "An den Außengrenzen zurückgewiesen",
   "dataset": "migr_eirfs",
   "periodo": "2025",
   "aggiornato_eurostat": "2026-05-12",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_eirfs/default/table",
   "valori": {
    "EU27_2020": 132600,
    "AT": 820,
    "BE": 1605,
    "BG": 5130,
    "HR": 12090,
    "CY": 1145,
    "CZ": 465,
    "DK": 395,
    "EE": 1635,
    "FI": 465,
    "FR": 12210,
    "DE": 7465,
    "EL": 5650,
    "HU": 4505,
    "IE": 6610,
    "IT": 8875,
    "LV": 2765,
    "LT": 2320,
    "LU": 55,
    "MT": 320,
    "NL": 2460,
    "PL": 28960,
    "PT": 2135,
    "RO": 10135,
    "SK": 430,
    "SI": 2165,
    "ES": 10610,
    "SE": 1175
   }
  },
  "asilo_prime_domande": {
   "nome": "Prime domande di asilo",
   "nome_en": "First-time asylum applications",
   "nome_de": "Erstanträge auf Asyl",
   "dataset": "migr_asyappctza",
   "periodo": "2025",
   "aggiornato_eurostat": "2026-09-03",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_asyappctza/default/table",
   "valori": {
    "EU27_2020": 672350,
    "AT": 12505,
    "BE": 27540,
    "BG": 3800,
    "HR": 845,
    "CY": 2835,
    "CZ": 935,
    "DK": 1865,
    "EE": 1005,
    "FI": 1970,
    "FR": 116475,
    "DE": 113235,
    "EL": 55380,
    "HU": 110,
    "IE": 12975,
    "IT": 128655,
    "LV": 1290,
    "LT": 330,
    "LU": 1770,
    "MT": 405,
    "NL": 24115,
    "PL": 11155,
    "PT": 1755,
    "RO": 1145,
    "SK": 130,
    "SI": 3965,
    "ES": 141055,
    "SE": 5100
   }
  },
  "asilo_decisioni": {
   "nome": "Decisioni di prima istanza",
   "nome_en": "First-instance decisions",
   "nome_de": "Erstinstanzliche Entscheidungen",
   "dataset": "migr_asydcfsta",
   "periodo": "2025",
   "aggiornato_eurostat": "2026-08-24",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_asydcfsta/default/table",
   "valori": {
    "EU27_2020": 833650,
    "AT": 17870,
    "BE": 29860,
    "BG": 4655,
    "HR": 285,
    "CY": 8575,
    "CZ": 565,
    "DK": 1195,
    "EE": 805,
    "FI": 4150,
    "FR": 151125,
    "DE": 272800,
    "EL": 45735,
    "HU": 50,
    "IE": 5730,
    "IT": 104560,
    "LV": 520,
    "LT": 290,
    "LU": 1200,
    "MT": 500,
    "NL": 15540,
    "PL": 7590,
    "PT": 1375,
    "RO": 1190,
    "SK": 140,
    "SI": 225,
    "ES": 148490,
    "SE": 8625
   }
  },
  "asilo_positive": {
   "nome": "Decisioni positive di prima istanza",
   "nome_en": "Positive first-instance decisions",
   "nome_de": "Positive erstinstanzliche Entscheidungen",
   "dataset": "migr_asydcfsta",
   "periodo": "2025",
   "aggiornato_eurostat": "2026-08-24",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_asydcfsta/default/table",
   "valori": {
    "EU27_2020": 325935,
    "AT": 10935,
    "BE": 8860,
    "BG": 955,
    "HR": 25,
    "CY": 675,
    "CZ": 115,
    "DK": 420,
    "EE": 750,
    "FI": 2085,
    "FR": 60515,
    "DE": 87395,
    "EL": 26735,
    "HU": 35,
    "IE": 3635,
    "IT": 31365,
    "LV": 155,
    "LT": 130,
    "LU": 615,
    "MT": 200,
    "NL": 7420,
    "PL": 3670,
    "PT": 460,
    "RO": 625,
    "SK": 70,
    "SI": 70,
    "ES": 75835,
    "SE": 2185
   }
  },
  "asilo_pendenti": {
   "nome": "Domande di asilo pendenti a fine dicembre",
   "nome_en": "Asylum applications pending at end of December",
   "nome_de": "Anhängige Asylanträge Ende Dezember",
   "dataset": "migr_asypenctzm",
   "periodo": "2025-12",
   "aggiornato_eurostat": "2026-10-13",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_asypenctzm/default/table",
   "valori": {
    "EU27_2020": 1220920,
    "AT": 22555,
    "BE": 58720,
    "BG": 1630,
    "HR": 505,
    "CY": 23225,
    "CZ": 625,
    "DK": 2475,
    "EE": 325,
    "FI": 4220,
    "FR": 153200,
    "DE": 306650,
    "EL": 31945,
    "HU": 50,
    "IE": 32620,
    "IT": 234165,
    "LV": 725,
    "LT": 160,
    "LU": 4195,
    "MT": 1415,
    "NL": 63295,
    "PL": 12780,
    "PT": 8595,
    "RO": 295,
    "SK": 90,
    "SI": 1480,
    "ES": 248760,
    "SE": 6205
   }
  },
  "protezione_temporanea": {
   "nome": "Beneficiari di protezione temporanea a fine dicembre",
   "nome_en": "Beneficiaries of temporary protection at end of December",
   "nome_de": "Begünstigte des vorübergehenden Schutzes Ende Dezember",
   "dataset": "migr_asytpsm",
   "periodo": "2025-12",
   "aggiornato_eurostat": "2026-10-15",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_asytpsm/default/table",
   "valori": {
    "EU27_2020": 4353665,
    "AT": 92455,
    "BE": 93425,
    "BG": 78105,
    "HR": 28540,
    "CY": 25465,
    "CZ": 393055,
    "DK": 48685,
    "EE": 34395,
    "FI": 78225,
    "FR": 51885,
    "DE": 1251105,
    "EL": 38140,
    "HU": 43300,
    "IE": 119375,
    "IT": 60485,
    "LV": 31250,
    "LT": 51540,
    "LU": 4060,
    "MT": 2495,
    "NL": 134090,
    "PL": 969250,
    "PT": 66740,
    "RO": 201890,
    "SK": 139580,
    "SI": 11280,
    "ES": 255245,
    "SE": 49615
   }
  }
 },
 "composti": {
  "popolazione_cittadinanza": {
   "nome": "Popolazione residente al 1° gennaio per cittadinanza",
   "nome_en": "Resident population on 1 January by citizenship",
   "nome_de": "Wohnbevölkerung am 1. Januar nach Staatsangehörigkeit",
   "dataset": "migr_pop1ctz",
   "aggiornato_eurostat": "2026-09-25",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_pop1ctz/default/table",
   "valori": {
    "EU27_2020": {
     "anno": 2025,
     "totale": 450646971,
     "nazionali": 405729577,
     "altri_ue": 14070744,
     "extra_ue": 30600204,
     "apolidi": 54722
    },
    "AT": {
     "anno": 2025,
     "totale": 9197213,
     "nazionali": 7341794,
     "altri_ue": 923854,
     "extra_ue": 909689,
     "apolidi": 4990
    },
    "BE": {
     "anno": 2025,
     "totale": 11883495,
     "nazionali": 10193392,
     "altri_ue": 1006037,
     "extra_ue": 662127,
     "apolidi": 643
    },
    "BG": {
     "anno": 2025,
     "totale": 6437360,
     "nazionali": 6284422,
     "altri_ue": 31035,
     "extra_ue": 115754,
     "apolidi": 630
    },
    "HR": {
     "anno": 2025,
     "totale": 3874350,
     "nazionali": 3720379,
     "altri_ue": 23448,
     "extra_ue": 129750,
     "apolidi": 558
    },
    "CY": {
     "anno": 2025,
     "totale": 982966,
     "nazionali": 739677,
     "altri_ue": 99030,
     "extra_ue": 144259,
     "apolidi": 0
    },
    "CZ": {
     "anno": 2025,
     "totale": 10909500,
     "nazionali": 9926844,
     "altri_ue": 197668,
     "extra_ue": 784772,
     "apolidi": 216
    },
    "DK": {
     "anno": 2025,
     "totale": 5992734,
     "nazionali": 5315187,
     "altri_ue": 276115,
     "extra_ue": 392951,
     "apolidi": 8443
    },
    "EE": {
     "anno": 2025,
     "totale": 1369995,
     "nazionali": 1123385,
     "altri_ue": 22690,
     "extra_ue": 223135,
     "apolidi": 0
    },
    "FI": {
     "anno": 2025,
     "totale": 5635971,
     "nazionali": 5224870,
     "altri_ue": 107956,
     "extra_ue": 300096,
     "apolidi": 1317
    },
    "FR": {
     "anno": 2025,
     "totale": 68882600,
     "nazionali": 62414394,
     "altri_ue": 1621028,
     "extra_ue": 4847178,
     "apolidi": 0
    },
    "DE": {
     "anno": 2025,
     "totale": 83577140,
     "nazionali": 71184865,
     "altri_ue": 4350923,
     "extra_ue": 8024309,
     "apolidi": 17043
    },
    "EL": {
     "anno": 2025,
     "totale": 10372335,
     "nazionali": 9635274,
     "altri_ue": 114128,
     "extra_ue": 622933,
     "apolidi": 0
    },
    "HU": {
     "anno": 2025,
     "totale": 9539502,
     "nazionali": 9284059,
     "altri_ue": 87962,
     "extra_ue": 167205,
     "apolidi": 57
    },
    "IE": {
     "anno": 2025,
     "totale": 5440278,
     "nazionali": 4565956,
     "altri_ue": 366693,
     "extra_ue": 506707,
     "apolidi": 922
    },
    "IT": {
     "anno": 2025,
     "totale": 58943464,
     "nazionali": 53572213,
     "altri_ue": 1373870,
     "extra_ue": 3996856,
     "apolidi": 525
    },
    "LV": {
     "anno": 2025,
     "totale": 1860565,
     "nazionali": 1630884,
     "altri_ue": 3937,
     "extra_ue": 225629,
     "apolidi": 115
    },
    "LT": {
     "anno": 2025,
     "totale": 2890664,
     "nazionali": 2740912,
     "altri_ue": 3662,
     "extra_ue": 144294,
     "apolidi": 1796
    },
    "LU": {
     "anno": 2025,
     "totale": 681973,
     "nazionali": 361247,
     "altri_ue": 244291,
     "extra_ue": 76142,
     "apolidi": 175
    },
    "MT": {
     "anno": 2025,
     "totale": 574250,
     "nazionali": 405312,
     "altri_ue": 45771,
     "extra_ue": 123167,
     "apolidi": 0
    },
    "NL": {
     "anno": 2025,
     "totale": 18044027,
     "nazionali": 16428041,
     "altri_ue": 770888,
     "extra_ue": 821732,
     "apolidi": 4364
    },
    "PL": {
     "anno": 2025,
     "totale": 36497495,
     "nazionali": 36069586,
     "altri_ue": 32317,
     "extra_ue": 392169,
     "apolidi": 618
    },
    "PT": {
     "anno": 2025,
     "totale": 10749635,
     "nazionali": null,
     "altri_ue": null,
     "extra_ue": null,
     "apolidi": null
    },
    "RO": {
     "anno": 2025,
     "totale": 19043151,
     "nazionali": 18674247,
     "altri_ue": 68774,
     "extra_ue": 299603,
     "apolidi": 293
    },
    "SK": {
     "anno": 2025,
     "totale": 5419451,
     "nazionali": 5350766,
     "altri_ue": 39933,
     "extra_ue": 25736,
     "apolidi": 4
    },
    "SI": {
     "anno": 2025,
     "totale": 2130850,
     "nazionali": 1915919,
     "altri_ue": 21433,
     "extra_ue": 193498,
     "apolidi": 0
    },
    "ES": {
     "anno": 2025,
     "totale": 49128297,
     "nazionali": 42216326,
     "altri_ue": 1757955,
     "extra_ue": 5149235,
     "apolidi": 4781
    },
    "SE": {
     "anno": 2025,
     "totale": 10587710,
     "nazionali": 9755897,
     "altri_ue": 306724,
     "extra_ue": 508931,
     "apolidi": 7221
    }
   },
   "nota": "Chiavi: totale, nazionali (cittadini del paese), altri_ue (cittadini di altri Stati UE), extra_ue (cittadini di paesi terzi), apolidi. Popolazione al 1° gennaio dell'anno indicato."
  },
  "nazionali_nati_estero": {
   "nome": "Cittadini del paese nati all'estero (popolazione al 1° gennaio per cittadinanza e gruppo di paese di nascita)",
   "nome_en": "Nationals born abroad (population on 1 January by citizenship and group of country of birth)",
   "nome_de": "Im Ausland geborene Staatsbürger (Bevölkerung am 1. Januar nach Staatsangehörigkeit und Geburtsland-Gruppe)",
   "dataset": "migr_pop5ctz",
   "aggiornato_eurostat": "2026-09-25",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_pop5ctz/default/table",
   "valori": {
    "EU27_2020": null,
    "AT": {
     "anno": 2025,
     "nazionali_totale": 7341794,
     "nazionali_nati_estero": 510647,
     "di_cui_nati_ue": 182264,
     "di_cui_nati_extra_ue": 328383,
     "quota_pct": 7,
     "popolazione_nata_estero": 2069404
    },
    "BE": {
     "anno": 2025,
     "nazionali_totale": 10193392,
     "nazionali_nati_estero": 950286,
     "di_cui_nati_ue": 236063,
     "di_cui_nati_extra_ue": 714223,
     "quota_pct": 9.3,
     "popolazione_nata_estero": 2399622
    },
    "BG": {
     "anno": 2025,
     "nazionali_totale": 6284422,
     "nazionali_nati_estero": 107117,
     "di_cui_nati_ue": 49835,
     "di_cui_nati_extra_ue": 57282,
     "quota_pct": 1.7,
     "popolazione_nata_estero": 246575
    },
    "HR": null,
    "CY": null,
    "CZ": null,
    "DK": {
     "anno": 2021,
     "nazionali_totale": 5300551,
     "nazionali_nati_estero": 255071,
     "di_cui_nati_ue": null,
     "di_cui_nati_extra_ue": null,
     "quota_pct": 4.8,
     "popolazione_nata_estero": 721135
    },
    "EE": {
     "anno": 2025,
     "nazionali_totale": 1123385,
     "nazionali_nati_estero": 66131,
     "di_cui_nati_ue": 6917,
     "di_cui_nati_extra_ue": 59214,
     "quota_pct": 5.9,
     "popolazione_nata_estero": 243255
    },
    "FI": {
     "anno": 2025,
     "nazionali_totale": 5224870,
     "nazionali_nati_estero": 195871,
     "di_cui_nati_ue": 52659,
     "di_cui_nati_extra_ue": 143212,
     "quota_pct": 3.7,
     "popolazione_nata_estero": 566053
    },
    "FR": null,
    "DE": null,
    "EL": null,
    "HU": {
     "anno": 2025,
     "nazionali_totale": 9284059,
     "nazionali_nati_estero": 444036,
     "di_cui_nati_ue": 268768,
     "di_cui_nati_extra_ue": 175268,
     "quota_pct": 4.8,
     "popolazione_nata_estero": 693156
    },
    "IE": null,
    "IT": {
     "anno": 2025,
     "nazionali_totale": 53572213,
     "nazionali_nati_estero": 2358748,
     "di_cui_nati_ue": 537337,
     "di_cui_nati_extra_ue": 1821411,
     "quota_pct": 4.4,
     "popolazione_nata_estero": 6928045
    },
    "LV": {
     "anno": 2025,
     "nazionali_totale": 1630884,
     "nazionali_nati_estero": 75265,
     "di_cui_nati_ue": 12762,
     "di_cui_nati_extra_ue": 62503,
     "quota_pct": 4.6,
     "popolazione_nata_estero": 215606
    },
    "LT": null,
    "LU": {
     "anno": 2025,
     "nazionali_totale": 361247,
     "nazionali_nati_estero": 70017,
     "di_cui_nati_ue": 38832,
     "di_cui_nati_extra_ue": 31185,
     "quota_pct": 19.4,
     "popolazione_nata_estero": 351387
    },
    "MT": null,
    "NL": {
     "anno": 2025,
     "nazionali_totale": 16428041,
     "nazionali_nati_estero": 1523623,
     "di_cui_nati_ue": 168361,
     "di_cui_nati_extra_ue": 1355262,
     "quota_pct": 9.3,
     "popolazione_nata_estero": 3025656
    },
    "PL": null,
    "PT": null,
    "RO": null,
    "SK": {
     "anno": 2025,
     "nazionali_totale": 5350766,
     "nazionali_nati_estero": 165415,
     "di_cui_nati_ue": 124420,
     "di_cui_nati_extra_ue": 40995,
     "quota_pct": 3.1,
     "popolazione_nata_estero": 215941
    },
    "SI": {
     "anno": 2025,
     "nazionali_totale": 1915919,
     "nazionali_nati_estero": 130724,
     "di_cui_nati_ue": 43747,
     "di_cui_nati_extra_ue": 86977,
     "quota_pct": 6.8,
     "popolazione_nata_estero": 329515
    },
    "ES": {
     "anno": 2025,
     "nazionali_totale": 42216326,
     "nazionali_nati_estero": 3051382,
     "di_cui_nati_ue": 294795,
     "di_cui_nati_extra_ue": 2756587,
     "quota_pct": 7.2,
     "popolazione_nata_estero": 9464210
    },
    "SE": {
     "anno": 2025,
     "nazionali_totale": 9755897,
     "nazionali_nati_estero": 1441166,
     "di_cui_nati_ue": 300669,
     "di_cui_nati_extra_ue": 1140497,
     "quota_pct": 14.8,
     "popolazione_nata_estero": 2199046
    }
   },
   "nota": "Il dataset non è trasmesso da tutti gli Stati: dove manca il valore resta null. popolazione_nata_estero = tutti i residenti nati all'estero, qualunque cittadinanza."
  },
  "stato_migratorio_lfs": {
   "nome": "Popolazione 15-74 anni per stato migratorio (indagine forze di lavoro)",
   "nome_en": "Population aged 15-74 by migration status (Labour Force Survey)",
   "nome_de": "Bevölkerung 15-74 Jahre nach Migrationsstatus (Arbeitskräfteerhebung)",
   "dataset": "lfsa_pgaccpm",
   "aggiornato_eurostat": "2026-09-10",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/lfsa_pgaccpm/default/table",
   "valori": {
    "EU27_2020": {
     "anno": 2025,
     "totale_migliaia": 335604.8,
     "nati_paese_genitori_paese_migliaia": 257557.6,
     "nati_paese_genitore_estero_migliaia": 25944.6,
     "nati_estero_migliaia": 50912.8,
     "sconosciuto_migliaia": 1189.9,
     "quote_pct": {
      "nati_paese_genitori_paese": 76.7,
      "nati_paese_genitore_estero": 7.7,
      "nati_estero": 15.2
     }
    },
    "AT": {
     "anno": 2025,
     "totale_migliaia": 6877.3,
     "nati_paese_genitori_paese_migliaia": 4344.9,
     "nati_paese_genitore_estero_migliaia": 754.5,
     "nati_estero_migliaia": 1777.9,
     "sconosciuto_migliaia": null,
     "quote_pct": {
      "nati_paese_genitori_paese": 63.2,
      "nati_paese_genitore_estero": 11,
      "nati_estero": 25.9
     }
    },
    "BE": {
     "anno": 2025,
     "totale_migliaia": 8734.6,
     "nati_paese_genitori_paese_migliaia": 5642.5,
     "nati_paese_genitore_estero_migliaia": 1160.8,
     "nati_estero_migliaia": 1890.4,
     "sconosciuto_migliaia": 40.9,
     "quote_pct": {
      "nati_paese_genitori_paese": 64.6,
      "nati_paese_genitore_estero": 13.3,
      "nati_estero": 21.6
     }
    },
    "BG": {
     "anno": 2025,
     "totale_migliaia": 4816.7,
     "nati_paese_genitori_paese_migliaia": 4771.3,
     "nati_paese_genitore_estero_migliaia": 13.5,
     "nati_estero_migliaia": 32,
     "sconosciuto_migliaia": null,
     "quote_pct": {
      "nati_paese_genitori_paese": 99.1,
      "nati_paese_genitore_estero": 0.3,
      "nati_estero": 0.7
     }
    },
    "HR": {
     "anno": 2025,
     "totale_migliaia": 2946.1,
     "nati_paese_genitori_paese_migliaia": 2294.8,
     "nati_paese_genitore_estero_migliaia": 312.1,
     "nati_estero_migliaia": 337.7,
     "sconosciuto_migliaia": 1.5,
     "quote_pct": {
      "nati_paese_genitori_paese": 77.9,
      "nati_paese_genitore_estero": 10.6,
      "nati_estero": 11.5
     }
    },
    "CY": {
     "anno": 2025,
     "totale_migliaia": 729.5,
     "nati_paese_genitori_paese_migliaia": 462.9,
     "nati_paese_genitore_estero_migliaia": 33.2,
     "nati_estero_migliaia": 233.3,
     "sconosciuto_migliaia": null,
     "quote_pct": {
      "nati_paese_genitori_paese": 63.5,
      "nati_paese_genitore_estero": 4.6,
      "nati_estero": 32
     }
    },
    "CZ": {
     "anno": 2025,
     "totale_migliaia": 7875.5,
     "nati_paese_genitori_paese_migliaia": 7123.2,
     "nati_paese_genitore_estero_migliaia": 272.2,
     "nati_estero_migliaia": 472.4,
     "sconosciuto_migliaia": 7.5,
     "quote_pct": {
      "nati_paese_genitori_paese": 90.4,
      "nati_paese_genitore_estero": 3.5,
      "nati_estero": 6
     }
    },
    "DK": {
     "anno": 2025,
     "totale_migliaia": 4435.2,
     "nati_paese_genitori_paese_migliaia": 3751.4,
     "nati_paese_genitore_estero_migliaia": 171.7,
     "nati_estero_migliaia": 497,
     "sconosciuto_migliaia": 15,
     "quote_pct": {
      "nati_paese_genitori_paese": 84.6,
      "nati_paese_genitore_estero": 3.9,
      "nati_estero": 11.2
     }
    },
    "EE": {
     "anno": 2025,
     "totale_migliaia": 1011.7,
     "nati_paese_genitori_paese_migliaia": 659,
     "nati_paese_genitore_estero_migliaia": 171.6,
     "nati_estero_migliaia": 156.3,
     "sconosciuto_migliaia": 24.8,
     "quote_pct": {
      "nati_paese_genitori_paese": 65.1,
      "nati_paese_genitore_estero": 17,
      "nati_estero": 15.4
     }
    },
    "FI": {
     "anno": 2025,
     "totale_migliaia": 4144.1,
     "nati_paese_genitori_paese_migliaia": 3486.9,
     "nati_paese_genitore_estero_migliaia": 139.1,
     "nati_estero_migliaia": 498.9,
     "sconosciuto_migliaia": 19.2,
     "quote_pct": {
      "nati_paese_genitori_paese": 84.1,
      "nati_paese_genitore_estero": 3.4,
      "nati_estero": 12
     }
    },
    "FR": {
     "anno": 2025,
     "totale_migliaia": 49066,
     "nati_paese_genitori_paese_migliaia": 34480.3,
     "nati_paese_genitore_estero_migliaia": 6617.1,
     "nati_estero_migliaia": 7111.6,
     "sconosciuto_migliaia": 857.1,
     "quote_pct": {
      "nati_paese_genitori_paese": 70.3,
      "nati_paese_genitore_estero": 13.5,
      "nati_estero": 14.5
     }
    },
    "DE": {
     "anno": 2025,
     "totale_migliaia": 62576.6,
     "nati_paese_genitori_paese_migliaia": 39137.4,
     "nati_paese_genitore_estero_migliaia": 8993,
     "nati_estero_migliaia": 14419.2,
     "sconosciuto_migliaia": 27,
     "quote_pct": {
      "nati_paese_genitori_paese": 62.5,
      "nati_paese_genitore_estero": 14.4,
      "nati_estero": 23
     }
    },
    "EL": {
     "anno": 2025,
     "totale_migliaia": 7749.8,
     "nati_paese_genitori_paese_migliaia": 6897,
     "nati_paese_genitore_estero_migliaia": 232.9,
     "nati_estero_migliaia": 609.4,
     "sconosciuto_migliaia": 10.5,
     "quote_pct": {
      "nati_paese_genitori_paese": 89,
      "nati_paese_genitore_estero": 3,
      "nati_estero": 7.9
     }
    },
    "HU": {
     "anno": 2025,
     "totale_migliaia": 7160.8,
     "nati_paese_genitori_paese_migliaia": 6793.6,
     "nati_paese_genitore_estero_migliaia": 132.6,
     "nati_estero_migliaia": 230.7,
     "sconosciuto_migliaia": 3.8,
     "quote_pct": {
      "nati_paese_genitori_paese": 94.9,
      "nati_paese_genitore_estero": 1.9,
      "nati_estero": 3.2
     }
    },
    "IE": {
     "anno": 2025,
     "totale_migliaia": 4081.2,
     "nati_paese_genitori_paese_migliaia": 2620.5,
     "nati_paese_genitore_estero_migliaia": 301.8,
     "nati_estero_migliaia": 1143.7,
     "sconosciuto_migliaia": 15.2,
     "quote_pct": {
      "nati_paese_genitori_paese": 64.2,
      "nati_paese_genitore_estero": 7.4,
      "nati_estero": 28
     }
    },
    "IT": {
     "anno": 2025,
     "totale_migliaia": 44114.9,
     "nati_paese_genitori_paese_migliaia": 36715.8,
     "nati_paese_genitore_estero_migliaia": 1351.5,
     "nati_estero_migliaia": 6036.4,
     "sconosciuto_migliaia": 11.2,
     "quote_pct": {
      "nati_paese_genitori_paese": 83.2,
      "nati_paese_genitore_estero": 3.1,
      "nati_estero": 13.7
     }
    },
    "LV": {
     "anno": 2025,
     "totale_migliaia": 1369,
     "nati_paese_genitori_paese_migliaia": 955.5,
     "nati_paese_genitore_estero_migliaia": 242.8,
     "nati_estero_migliaia": 152.3,
     "sconosciuto_migliaia": 18.4,
     "quote_pct": {
      "nati_paese_genitori_paese": 69.8,
      "nati_paese_genitore_estero": 17.7,
      "nati_estero": 11.1
     }
    },
    "LT": {
     "anno": 2025,
     "totale_migliaia": 2213.7,
     "nati_paese_genitori_paese_migliaia": 1974.7,
     "nati_paese_genitore_estero_migliaia": 57.8,
     "nati_estero_migliaia": 144.8,
     "sconosciuto_migliaia": 36.4,
     "quote_pct": {
      "nati_paese_genitori_paese": 89.2,
      "nati_paese_genitore_estero": 2.6,
      "nati_estero": 6.5
     }
    },
    "LU": {
     "anno": 2025,
     "totale_migliaia": 520.7,
     "nati_paese_genitori_paese_migliaia": 136,
     "nati_paese_genitore_estero_migliaia": 94.4,
     "nati_estero_migliaia": 288,
     "sconosciuto_migliaia": null,
     "quote_pct": {
      "nati_paese_genitori_paese": 26.1,
      "nati_paese_genitore_estero": 18.1,
      "nati_estero": 55.3
     }
    },
    "MT": {
     "anno": 2025,
     "totale_migliaia": 459,
     "nati_paese_genitori_paese_migliaia": 274.2,
     "nati_paese_genitore_estero_migliaia": 16.2,
     "nati_estero_migliaia": 168.6,
     "sconosciuto_migliaia": null,
     "quote_pct": {
      "nati_paese_genitori_paese": 59.7,
      "nati_paese_genitore_estero": 3.5,
      "nati_estero": 36.7
     }
    },
    "NL": {
     "anno": 2025,
     "totale_migliaia": 13426.1,
     "nati_paese_genitori_paese_migliaia": 9417.3,
     "nati_paese_genitore_estero_migliaia": 1703.3,
     "nati_estero_migliaia": 2303.1,
     "sconosciuto_migliaia": 2.3,
     "quote_pct": {
      "nati_paese_genitori_paese": 70.1,
      "nati_paese_genitore_estero": 12.7,
      "nati_estero": 17.2
     }
    },
    "PL": {
     "anno": 2025,
     "totale_migliaia": 27592.7,
     "nati_paese_genitori_paese_migliaia": 26538.1,
     "nati_paese_genitore_estero_migliaia": 341,
     "nati_estero_migliaia": 713.5,
     "sconosciuto_migliaia": null,
     "quote_pct": {
      "nati_paese_genitori_paese": 96.2,
      "nati_paese_genitore_estero": 1.2,
      "nati_estero": 2.6
     }
    },
    "PT": {
     "anno": 2025,
     "totale_migliaia": 8139.5,
     "nati_paese_genitori_paese_migliaia": 6593.5,
     "nati_paese_genitore_estero_migliaia": 403.7,
     "nati_estero_migliaia": 1129,
     "sconosciuto_migliaia": 13.4,
     "quote_pct": {
      "nati_paese_genitori_paese": 81,
      "nati_paese_genitore_estero": 5,
      "nati_estero": 13.9
     }
    },
    "RO": {
     "anno": 2025,
     "totale_migliaia": 14365,
     "nati_paese_genitori_paese_migliaia": 14312.1,
     "nati_paese_genitore_estero_migliaia": 9.1,
     "nati_estero_migliaia": 43.8,
     "sconosciuto_migliaia": null,
     "quote_pct": {
      "nati_paese_genitori_paese": 99.6,
      "nati_paese_genitore_estero": 0.1,
      "nati_estero": 0.3
     }
    },
    "SK": {
     "anno": 2025,
     "totale_migliaia": 4140.1,
     "nati_paese_genitori_paese_migliaia": 4032.4,
     "nati_paese_genitore_estero_migliaia": 52.7,
     "nati_estero_migliaia": 55,
     "sconosciuto_migliaia": null,
     "quote_pct": {
      "nati_paese_genitori_paese": 97.4,
      "nati_paese_genitore_estero": 1.3,
      "nati_estero": 1.3
     }
    },
    "SI": {
     "anno": 2025,
     "totale_migliaia": 1582.4,
     "nati_paese_genitori_paese_migliaia": 1108.7,
     "nati_paese_genitore_estero_migliaia": 151.5,
     "nati_estero_migliaia": 238.8,
     "sconosciuto_migliaia": 83.4,
     "quote_pct": {
      "nati_paese_genitori_paese": 70.1,
      "nati_paese_genitore_estero": 9.6,
      "nati_estero": 15.1
     }
    },
    "ES": {
     "anno": 2025,
     "totale_migliaia": 37847.8,
     "nati_paese_genitori_paese_migliaia": 28162.7,
     "nati_paese_genitore_estero_migliaia": 1371.7,
     "nati_estero_migliaia": 8313.4,
     "sconosciuto_migliaia": null,
     "quote_pct": {
      "nati_paese_genitori_paese": 74.4,
      "nati_paese_genitore_estero": 3.6,
      "nati_estero": 22
     }
    },
    "SE": {
     "anno": 2025,
     "totale_migliaia": 7628.9,
     "nati_paese_genitori_paese_migliaia": 4870.9,
     "nati_paese_genitore_estero_migliaia": 842.5,
     "nati_estero_migliaia": 1915.5,
     "sconosciuto_migliaia": null,
     "quote_pct": {
      "nati_paese_genitori_paese": 63.8,
      "nati_paese_genitore_estero": 11,
      "nati_estero": 25.1
     }
    }
   },
   "nota": "Popolazione nelle famiglie private, 15-74 anni, in migliaia. Quote in percentuale del totale (il resto è \"sconosciuto\"). Prima generazione = nati all'estero; seconda generazione = nati nel paese con almeno un genitore nato all'estero."
  },
  "stato_migratorio_cittadinanza": {
   "nome": "Popolazione 15-74 anni per stato migratorio e cittadinanza (indagine forze di lavoro)",
   "nome_en": "Population aged 15-74 by migration status and citizenship (Labour Force Survey)",
   "nome_de": "Bevölkerung 15-74 Jahre nach Migrationsstatus und Staatsangehörigkeit (Arbeitskräfteerhebung)",
   "dataset": "lfsa_pganedm",
   "aggiornato_eurostat": "2026-09-10",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/lfsa_pganedm/default/table",
   "valori": {
    "EU27_2020": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 302713.1,
      "nati_paese_genitori_paese": 257465.3,
      "nati_paese_genitore_estero": 24267.3,
      "nati_estero": 19820.9
     },
     "stranieri": {
      "totale": 32744.3,
      "nati_paese_genitori_paese": 90.7,
      "nati_paese_genitore_estero": 1667,
      "nati_estero": 30963.7
     },
     "stranieri_ue": {
      "totale": 10563.4,
      "nati_paese_genitori_paese": 32.6,
      "nati_paese_genitore_estero": 726.4,
      "nati_estero": 9797.6
     },
     "stranieri_extra_ue": {
      "totale": 22136.5,
      "nati_paese_genitori_paese": 57.9,
      "nati_paese_genitore_estero": 939.7,
      "nati_estero": 21122.9
     }
    },
    "AT": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 5409.8,
      "nati_paese_genitori_paese": 4342.2,
      "nati_paese_genitore_estero": 642.1,
      "nati_estero": 425.6
     },
     "stranieri": {
      "totale": 1456.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 111.1,
      "nati_estero": 1342.7
     },
     "stranieri_ue": {
      "totale": 754.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 51.4,
      "nati_estero": 701.8
     },
     "stranieri_extra_ue": {
      "totale": 701.9,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 59.7,
      "nati_estero": 641
     }
    },
    "BE": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 7635.3,
      "nati_paese_genitori_paese": 5638.5,
      "nati_paese_genitore_estero": 1072.6,
      "nati_estero": 888
     },
     "stranieri": {
      "totale": 1094,
      "nati_paese_genitori_paese": 4,
      "nati_paese_genitore_estero": 87.7,
      "nati_estero": 1001.5
     },
     "stranieri_ue": {
      "totale": 718.4,
      "nati_paese_genitori_paese": 4,
      "nati_paese_genitore_estero": 81.8,
      "nati_estero": 631.8
     },
     "stranieri_extra_ue": {
      "totale": 372.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 5.8,
      "nati_estero": 366.3
     }
    },
    "BG": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 4794.4,
      "nati_paese_genitori_paese": 4771.3,
      "nati_paese_genitore_estero": 13.5,
      "nati_estero": 9.7
     },
     "stranieri": {
      "totale": 22.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 22.3
     },
     "stranieri_ue": {
      "totale": 2.9,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 2.9
     },
     "stranieri_extra_ue": {
      "totale": 19.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 19.4
     }
    },
    "HR": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 2926.5,
      "nati_paese_genitori_paese": 2294.2,
      "nati_paese_genitore_estero": 311.7,
      "nati_estero": 319.1
     },
     "stranieri": {
      "totale": 19.6,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 18.6
     },
     "stranieri_ue": {
      "totale": 6.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 5.7
     },
     "stranieri_extra_ue": {
      "totale": 13.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 12.9
     }
    },
    "CY": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 540.3,
      "nati_paese_genitori_paese": 462.9,
      "nati_paese_genitore_estero": 30,
      "nati_estero": 47.4
     },
     "stranieri": {
      "totale": 189.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 3.2,
      "nati_estero": 185.9
     },
     "stranieri_ue": {
      "totale": 72.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 2.5,
      "nati_estero": 69.8
     },
     "stranieri_extra_ue": {
      "totale": 116.9,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 0.7,
      "nati_estero": 116.1
     }
    },
    "CZ": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 7518.1,
      "nati_paese_genitori_paese": 7121.9,
      "nati_paese_genitore_estero": 268.7,
      "nati_estero": 120
     },
     "stranieri": {
      "totale": 357.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 3.5,
      "nati_estero": 352.5
     },
     "stranieri_ue": {
      "totale": 111.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 108
     },
     "stranieri_extra_ue": {
      "totale": 245.6,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 244.4
     }
    },
    "DK": null,
    "EE": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 829,
      "nati_paese_genitori_paese": 646.1,
      "nati_paese_genitore_estero": 124.2,
      "nati_estero": 38.9
     },
     "stranieri": {
      "totale": 182.6,
      "nati_paese_genitori_paese": 12.9,
      "nati_paese_genitore_estero": 47.4,
      "nati_estero": 117.4
     },
     "stranieri_ue": {
      "totale": 7.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 6.3
     },
     "stranieri_extra_ue": {
      "totale": 175.4,
      "nati_paese_genitori_paese": 12.8,
      "nati_paese_genitore_estero": 46.8,
      "nati_estero": 111.1
     }
    },
    "FI": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 3822.3,
      "nati_paese_genitori_paese": 3485.4,
      "nati_paese_genitore_estero": 135.1,
      "nati_estero": 183.3
     },
     "stranieri": {
      "totale": 320.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 4,
      "nati_estero": 314.1
     },
     "stranieri_ue": {
      "totale": 82.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 79.1
     },
     "stranieri_extra_ue": {
      "totale": 237.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 235
     }
    },
    "FR": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 44979.5,
      "nati_paese_genitori_paese": 34479,
      "nati_paese_genitore_estero": 6550,
      "nati_estero": 3095.8
     },
     "stranieri": {
      "totale": 4077.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 64.7,
      "nati_estero": 4009.8
     },
     "stranieri_ue": {
      "totale": 1060.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 33.2,
      "nati_estero": 1025
     },
     "stranieri_extra_ue": {
      "totale": 3008.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 31,
      "nati_estero": 2977
     }
    },
    "DE": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 52471.8,
      "nati_paese_genitori_paese": 39110.6,
      "nati_paese_genitore_estero": 8141.7,
      "nati_estero": 5197.1
     },
     "stranieri": {
      "totale": 10034.5,
      "nati_paese_genitori_paese": 26.8,
      "nati_paese_genitore_estero": 847.3,
      "nati_estero": 9155.9
     },
     "stranieri_ue": {
      "totale": 3529.5,
      "nati_paese_genitori_paese": 16,
      "nati_paese_genitore_estero": 374.7,
      "nati_estero": 3136.5
     },
     "stranieri_extra_ue": {
      "totale": 6499.7,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 472.4,
      "nati_estero": 6014.5
     }
    },
    "EL": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 7559.3,
      "nati_paese_genitori_paese": 6896.8,
      "nati_paese_genitore_estero": 219.2,
      "nati_estero": 432.9
     },
     "stranieri": {
      "totale": 189.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 13.1,
      "nati_estero": 175.8
     },
     "stranieri_ue": {
      "totale": 25.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 24.2
     },
     "stranieri_extra_ue": {
      "totale": 163.7,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 12.2,
      "nati_estero": 151.5
     }
    },
    "HU": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 7089.4,
      "nati_paese_genitori_paese": 6792.9,
      "nati_paese_genitore_estero": 131.6,
      "nati_estero": 161.1
     },
     "stranieri": {
      "totale": 71.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 69.7
     },
     "stranieri_ue": {
      "totale": 29.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 28.7
     },
     "stranieri_extra_ue": {
      "totale": 41.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 40.9
     }
    },
    "IE": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 3306.5,
      "nati_paese_genitori_paese": 2620.3,
      "nati_paese_genitore_estero": 293.4,
      "nati_estero": 380
     },
     "stranieri": {
      "totale": 774.6,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 8.4,
      "nati_estero": 763.7
     },
     "stranieri_ue": {
      "totale": 329.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 6.7,
      "nati_estero": 322.1
     },
     "stranieri_extra_ue": {
      "totale": 445.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 441.5
     }
    },
    "IT": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 39879.2,
      "nati_paese_genitori_paese": 36714.3,
      "nati_paese_genitore_estero": 1155.9,
      "nati_estero": 1998.4
     },
     "stranieri": {
      "totale": 4233.7,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 195.1,
      "nati_estero": 4036.7
     },
     "stranieri_ue": {
      "totale": 1174.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 45.7,
      "nati_estero": 1128.3
     },
     "stranieri_extra_ue": {
      "totale": 3059.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 149.4,
      "nati_estero": 2908.4
     }
    },
    "LV": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 1188.7,
      "nati_paese_genitori_paese": 940.4,
      "nati_paese_genitore_estero": 186.5,
      "nati_estero": 48.3
     },
     "stranieri": {
      "totale": 159.7,
      "nati_paese_genitori_paese": 15.1,
      "nati_paese_genitore_estero": 55.9,
      "nati_estero": 84
     },
     "stranieri_ue": {
      "totale": 5.9,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 5
     },
     "stranieri_extra_ue": {
      "totale": 153.8,
      "nati_paese_genitori_paese": 15,
      "nati_paese_genitore_estero": 55.2,
      "nati_estero": 79
     }
    },
    "LT": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 2145.3,
      "nati_paese_genitori_paese": 1972.5,
      "nati_paese_genitore_estero": 56.8,
      "nati_estero": 79.8
     },
     "stranieri": {
      "totale": 67,
      "nati_paese_genitori_paese": 1.5,
      "nati_paese_genitore_estero": null,
      "nati_estero": 64.3
     },
     "stranieri_ue": {
      "totale": 6.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 6.1
     },
     "stranieri_extra_ue": {
      "totale": 60.1,
      "nati_paese_genitori_paese": 1.2,
      "nati_paese_genitore_estero": null,
      "nati_estero": 58.2
     }
    },
    "LU": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 264.9,
      "nati_paese_genitori_paese": 134.9,
      "nati_paese_genitore_estero": 75.8,
      "nati_estero": 53.1
     },
     "stranieri": {
      "totale": 255.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 18.6,
      "nati_estero": 234.6
     },
     "stranieri_ue": {
      "totale": 204.1,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 17.4,
      "nati_estero": 184.8
     },
     "stranieri_extra_ue": {
      "totale": 51.1,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 49.6
     }
    },
    "MT": null,
    "NL": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 12494.2,
      "nati_paese_genitori_paese": 9416.6,
      "nati_paese_genitore_estero": 1676,
      "nati_estero": 1401.5
     },
     "stranieri": {
      "totale": 915.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 26.9,
      "nati_estero": 887.6
     },
     "stranieri_ue": {
      "totale": 471,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 18.5,
      "nati_estero": 452.3
     },
     "stranieri_extra_ue": {
      "totale": 444.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 8.4,
      "nati_estero": 435.3
     }
    },
    "PL": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 26943,
      "nati_paese_genitori_paese": 26535,
      "nati_paese_genitore_estero": 339.8,
      "nati_estero": 68.2
     },
     "stranieri": {
      "totale": 649.7,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 645.3
     },
     "stranieri_ue": {
      "totale": 25.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 23.9
     },
     "stranieri_extra_ue": {
      "totale": 624.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 621.4
     }
    },
    "PT": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 7607.3,
      "nati_paese_genitori_paese": 6591.8,
      "nati_paese_genitore_estero": 397.6,
      "nati_estero": 604.8
     },
     "stranieri": {
      "totale": 532.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 6.1,
      "nati_estero": 524.2
     },
     "stranieri_ue": {
      "totale": 49.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 48.4
     },
     "stranieri_extra_ue": {
      "totale": 482.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 4.8,
      "nati_estero": 475.8
     }
    },
    "RO": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 14330.2,
      "nati_paese_genitori_paese": 14311.9,
      "nati_paese_genitore_estero": 6.7,
      "nati_estero": 11.7
     },
     "stranieri": {
      "totale": 34.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 32.2
     },
     "stranieri_ue": {
      "totale": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": null
     },
     "stranieri_extra_ue": {
      "totale": 29.9,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 27.6
     }
    },
    "SK": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 4116.7,
      "nati_paese_genitori_paese": 4032.2,
      "nati_paese_genitore_estero": 52.7,
      "nati_estero": 31.8
     },
     "stranieri": {
      "totale": 23.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 23.2
     },
     "stranieri_ue": {
      "totale": 10.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 10.1
     },
     "stranieri_extra_ue": {
      "totale": 12.6,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 12.6
     }
    },
    "SI": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 1425.7,
      "nati_paese_genitori_paese": 1098.3,
      "nati_paese_genitore_estero": 149.7,
      "nati_estero": 94.7
     },
     "stranieri": {
      "totale": 156.7,
      "nati_paese_genitori_paese": 10.5,
      "nati_paese_genitore_estero": 1.8,
      "nati_estero": 144.1
     },
     "stranieri_ue": {
      "totale": 15.7,
      "nati_paese_genitori_paese": 1.6,
      "nati_paese_genitore_estero": null,
      "nati_estero": 13.9
     },
     "stranieri_extra_ue": {
      "totale": 141,
      "nati_paese_genitori_paese": 8.9,
      "nati_paese_genitore_estero": 1.6,
      "nati_estero": 130.2
     }
    },
    "ES": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 32021.8,
      "nati_paese_genitori_paese": 28161.6,
      "nati_paese_genitore_estero": 1233.5,
      "nati_estero": 2626.7
     },
     "stranieri": {
      "totale": 5826,
      "nati_paese_genitori_paese": 1.1,
      "nati_paese_genitore_estero": 138.2,
      "nati_estero": 5686.7
     },
     "stranieri_ue": {
      "totale": 1481.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 72,
      "nati_estero": 1408.6
     },
     "stranieri_extra_ue": {
      "totale": 4319.9,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 66.2,
      "nati_estero": 4253.4
     }
    },
    "SE": {
     "anno": 2025,
     "unita": "migliaia",
     "nazionali": {
      "totale": 7018.8,
      "nati_paese_genitori_paese": 4870.6,
      "nati_paese_genitore_estero": 831.8,
      "nati_estero": 1316.4
     },
     "stranieri": {
      "totale": 607.6,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 10.6,
      "nati_estero": 596.7
     },
     "stranieri_ue": {
      "totale": 205.7,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 8.5,
      "nati_estero": 197.2
     },
     "stranieri_extra_ue": {
      "totale": 400.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_estero": 398.1
     }
    }
   },
   "nota": "Popolazione nelle famiglie private, 15-74 anni, in migliaia. nazionali.nati_paese_genitore_estero = cittadini del paese nati nel paese con almeno un genitore nato all'estero (seconda generazione naturalizzata o nata cittadina); nazionali.nati_estero = cittadini nati all'estero (immigrati naturalizzati). Celle piccole possono essere null per segreto statistico."
  },
  "acquisizioni_cittadinanza": {
   "nome": "Acquisizioni di cittadinanza per anno",
   "nome_en": "Acquisitions of citizenship by year",
   "nome_de": "Einbürgerungen nach Jahr",
   "dataset": "migr_acq",
   "aggiornato_eurostat": "2026-03-27",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_acq/default/table",
   "valori": {
    "EU27_2020": {
     "anni": {
      "2015": 721740,
      "2016": 843894,
      "2017": 703724,
      "2018": 676593,
      "2019": 712266,
      "2020": 730668,
      "2021": 827708,
      "2022": 990857,
      "2023": 1054451,
      "2024": 1177232
     },
     "totale_2015_2024": 8439133
    },
    "AT": {
     "anni": {
      "2015": 8144,
      "2016": 8530,
      "2017": 9125,
      "2018": 9355,
      "2019": 10500,
      "2020": 8796,
      "2021": 9723,
      "2022": 10899,
      "2023": 11898,
      "2024": 13036
     },
     "totale_2015_2024": 100006
    },
    "BE": {
     "anni": {
      "2015": 27071,
      "2016": 31935,
      "2017": 37399,
      "2018": 36200,
      "2019": 40594,
      "2020": 33915,
      "2021": 39233,
      "2022": 48482,
      "2023": 55213,
      "2024": 60108
     },
     "totale_2015_2024": 410150
    },
    "BG": {
     "anni": {
      "2015": 1275,
      "2016": 1626,
      "2017": 914,
      "2018": 997,
      "2019": 736,
      "2020": 859,
      "2021": 2183,
      "2022": 893,
      "2023": 398,
      "2024": 343
     },
     "totale_2015_2024": 10224
    },
    "HR": {
     "anni": {
      "2015": 1196,
      "2016": 3973,
      "2017": 688,
      "2018": 853,
      "2019": 1121,
      "2020": 1149,
      "2021": 702,
      "2022": 753,
      "2023": 654,
      "2024": 793
     },
     "totale_2015_2024": 11882
    },
    "CY": {
     "anni": {
      "2015": 2353,
      "2016": 3127,
      "2017": 3737,
      "2018": 3198,
      "2019": 2859,
      "2020": 2740,
      "2021": 1910,
      "2022": 2873,
      "2023": 3318,
      "2024": 2800
     },
     "totale_2015_2024": 28915
    },
    "CZ": {
     "anni": {
      "2015": 2619,
      "2016": 4561,
      "2017": 3480,
      "2018": 2317,
      "2019": 2934,
      "2020": 2666,
      "2021": 5163,
      "2022": 5469,
      "2023": 5440,
      "2024": 5819
     },
     "totale_2015_2024": 40468
    },
    "DK": {
     "anni": {
      "2015": 11745,
      "2016": 15028,
      "2017": 7272,
      "2018": 2836,
      "2019": 1781,
      "2020": 7076,
      "2021": 6483,
      "2022": 5149,
      "2023": 3355,
      "2024": 6255
     },
     "totale_2015_2024": 66980
    },
    "EE": {
     "anni": {
      "2015": 898,
      "2016": 1779,
      "2017": 880,
      "2018": 766,
      "2019": 779,
      "2020": 770,
      "2021": 1034,
      "2022": 812,
      "2023": 1078,
      "2024": 758
     },
     "totale_2015_2024": 9554
    },
    "FI": {
     "anni": {
      "2015": 7921,
      "2016": 9375,
      "2017": 12219,
      "2018": 9211,
      "2019": 9649,
      "2020": 7816,
      "2021": 6643,
      "2022": 10198,
      "2023": 12224,
      "2024": 11512
     },
     "totale_2015_2024": 96768
    },
    "FR": {
     "anni": {
      "2015": 113608,
      "2016": 119152,
      "2017": 114274,
      "2018": 110014,
      "2019": 109821,
      "2020": 86483,
      "2021": 130385,
      "2022": 114483,
      "2023": 97288,
      "2024": 103661
     },
     "totale_2015_2024": 1099169
    },
    "DE": {
     "anni": {
      "2015": 110128,
      "2016": 112843,
      "2017": 115421,
      "2018": 116750,
      "2019": 131980,
      "2020": 111170,
      "2021": 129990,
      "2022": 166640,
      "2023": 199790,
      "2024": 288670
     },
     "totale_2015_2024": 1483382
    },
    "EL": {
     "anni": {
      "2015": 13933,
      "2016": 33210,
      "2017": 34305,
      "2018": 27857,
      "2019": 16328,
      "2020": 13272,
      "2021": 10120,
      "2022": 12733,
      "2023": 13319,
      "2024": 14275
     },
     "totale_2015_2024": 189352
    },
    "HU": {
     "anni": {
      "2015": 4048,
      "2016": 4315,
      "2017": 2787,
      "2018": 3508,
      "2019": 3255,
      "2020": 2139,
      "2021": 2511,
      "2022": 2973,
      "2023": 2429,
      "2024": 1742
     },
     "totale_2015_2024": 29707
    },
    "IE": {
     "anni": {
      "2015": 13565,
      "2016": 10038,
      "2017": 8195,
      "2018": 8223,
      "2019": 5791,
      "2020": 5475,
      "2021": 9778,
      "2022": 13597,
      "2023": 18265,
      "2024": 24059
     },
     "totale_2015_2024": 116986
    },
    "IT": {
     "anni": {
      "2015": 178035,
      "2016": 201591,
      "2017": 146605,
      "2018": 112523,
      "2019": 127001,
      "2020": 131803,
      "2021": 121457,
      "2022": 213716,
      "2023": 213567,
      "2024": 217448
     },
     "totale_2015_2024": 1663746
    },
    "LV": {
     "anni": {
      "2015": 1897,
      "2016": 1957,
      "2017": 1794,
      "2018": 1683,
      "2019": 1650,
      "2020": 1136,
      "2021": 850,
      "2022": 966,
      "2023": 1014,
      "2024": 1056
     },
     "totale_2015_2024": 14003
    },
    "LT": {
     "anni": {
      "2015": 183,
      "2016": 176,
      "2017": 187,
      "2018": 130,
      "2019": 117,
      "2020": 152,
      "2021": 150,
      "2022": 485,
      "2023": 106,
      "2024": 124
     },
     "totale_2015_2024": 1810
    },
    "LU": {
     "anni": {
      "2015": 3195,
      "2016": 3315,
      "2017": 4980,
      "2018": 6950,
      "2019": 5657,
      "2020": 4640,
      "2021": 4933,
      "2022": 5350,
      "2023": 5831,
      "2024": 5892
     },
     "totale_2015_2024": 50743
    },
    "MT": {
     "anni": {
      "2015": 646,
      "2016": 1495,
      "2017": 1973,
      "2018": 1044,
      "2019": 770,
      "2020": 1181,
      "2021": 1156,
      "2022": 842,
      "2023": 825,
      "2024": 1145
     },
     "totale_2015_2024": 11077
    },
    "NL": {
     "anni": {
      "2015": 27877,
      "2016": 28534,
      "2017": 27663,
      "2018": 27852,
      "2019": 34191,
      "2020": 55943,
      "2021": 62959,
      "2022": 53678,
      "2023": 56900,
      "2024": 58999
     },
     "totale_2015_2024": 434596
    },
    "PL": {
     "anni": {
      "2015": 3974,
      "2016": 3684,
      "2017": 4233,
      "2018": 5115,
      "2019": 6395,
      "2020": 6999,
      "2021": 7420,
      "2022": 9558,
      "2023": 11785,
      "2024": 16075
     },
     "totale_2015_2024": 75238
    },
    "PT": {
     "anni": {
      "2015": 20396,
      "2016": 25104,
      "2017": 18022,
      "2018": 21333,
      "2019": 21099,
      "2020": 32147,
      "2021": 24516,
      "2022": 20844,
      "2023": 16985,
      "2024": 20624
     },
     "totale_2015_2024": 221070
    },
    "RO": {
     "anni": {
      "2015": 2074,
      "2016": 4527,
      "2017": 9967,
      "2018": 10587,
      "2019": 11601,
      "2020": 3627,
      "2021": 12669,
      "2022": 13417,
      "2023": 12571,
      "2024": 4040
     },
     "totale_2015_2024": 85080
    },
    "SK": {
     "anni": {
      "2015": 309,
      "2016": 484,
      "2017": 645,
      "2018": 721,
      "2019": 586,
      "2020": 548,
      "2021": 592,
      "2022": 677,
      "2023": 552,
      "2024": 879
     },
     "totale_2015_2024": 5993
    },
    "SI": {
     "anni": {
      "2015": 1255,
      "2016": 1297,
      "2017": 1563,
      "2018": 1978,
      "2019": 1911,
      "2020": 1725,
      "2021": 1782,
      "2022": 1564,
      "2023": 1649,
      "2024": 1654
     },
     "totale_2015_2024": 16378
    },
    "ES": {
     "anni": {
      "2015": 114351,
      "2016": 150944,
      "2017": 66498,
      "2018": 90774,
      "2019": 98954,
      "2020": 126266,
      "2021": 144012,
      "2022": 181581,
      "2023": 240208,
      "2024": 252476
     },
     "totale_2015_2024": 1466064
    },
    "SE": {
     "anni": {
      "2015": 49044,
      "2016": 61294,
      "2017": 68898,
      "2018": 63818,
      "2019": 64206,
      "2020": 80175,
      "2021": 89354,
      "2022": 92225,
      "2023": 67789,
      "2024": 62989
     },
     "totale_2015_2024": 699792
    }
   },
   "nota": "Totale per paese di residenza, tutte le cittadinanze precedenti. totale_2015_2024 è calcolato solo se tutti i dieci anni sono presenti."
  },
  "permessi_validi": {
   "nome": "Permessi di soggiorno validi al 31 dicembre: totale e prime cinque nazionalità",
   "nome_en": "Valid residence permits on 31 December: total and top five nationalities",
   "nome_de": "Gültige Aufenthaltstitel am 31. Dezember: gesamt und fünf häufigste Staatsangehörigkeiten",
   "dataset": "migr_resvalid",
   "aggiornato_eurostat": "2026-09-28",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_resvalid/default/table",
   "valori": {
    "EU27_2020": {
     "anno": 2025,
     "totale": 27768258,
     "prime_cinque": [
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "permessi": 2229934,
       "quota_pct": 8
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "permessi": 2013933,
       "quota_pct": 7.3
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 1656525,
       "quota_pct": 6
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 1219012,
       "quota_pct": 4.4
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "permessi": 1053228,
       "quota_pct": 3.8
      }
     ]
    },
    "AT": {
     "anno": 2025,
     "totale": 596239,
     "prime_cinque": [
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "permessi": 113467,
       "quota_pct": 19
      },
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "permessi": 113003,
       "quota_pct": 19
      },
      {
       "cittadinanza": "BA",
       "nome": "Bosnia and Herzegovina",
       "permessi": 100094,
       "quota_pct": 16.8
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 27253,
       "quota_pct": 4.6
      },
      {
       "cittadinanza": "XK",
       "nome": "Kosovo*",
       "permessi": 25679,
       "quota_pct": 4.3
      }
     ]
    },
    "BE": {
     "anno": 2025,
     "totale": 535538,
     "prime_cinque": [
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "permessi": 76405,
       "quota_pct": 14.3
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "permessi": 42297,
       "quota_pct": 7.9
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "permessi": 31411,
       "quota_pct": 5.9
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "permessi": 27581,
       "quota_pct": 5.2
      },
      {
       "cittadinanza": "CD",
       "nome": "Democratic Republic of the Congo",
       "permessi": 20440,
       "quota_pct": 3.8
      }
     ]
    },
    "BG": {
     "anno": 2025,
     "totale": 135041,
     "prime_cinque": [
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "permessi": 40399,
       "quota_pct": 29.9
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 25777,
       "quota_pct": 19.1
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 11471,
       "quota_pct": 8.5
      },
      {
       "cittadinanza": "MK",
       "nome": "North Macedonia",
       "permessi": 6567,
       "quota_pct": 4.9
      },
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "permessi": 6158,
       "quota_pct": 4.6
      }
     ]
    },
    "HR": {
     "anno": 2025,
     "totale": 135075,
     "prime_cinque": [
      {
       "cittadinanza": "BA",
       "nome": "Bosnia and Herzegovina",
       "permessi": 31740,
       "quota_pct": 23.5
      },
      {
       "cittadinanza": "NP",
       "nome": "Nepal",
       "permessi": 22156,
       "quota_pct": 16.4
      },
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "permessi": 13569,
       "quota_pct": 10
      },
      {
       "cittadinanza": "PH",
       "nome": "Philippines",
       "permessi": 13235,
       "quota_pct": 9.8
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 10804,
       "quota_pct": 8
      }
     ]
    },
    "CY": {
     "anno": 2025,
     "totale": 200652,
     "prime_cinque": [
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 44794,
       "quota_pct": 22.3
      },
      {
       "cittadinanza": "NP",
       "nome": "Nepal",
       "permessi": 19351,
       "quota_pct": 9.6
      },
      {
       "cittadinanza": "UK",
       "nome": "United Kingdom",
       "permessi": 18198,
       "quota_pct": 9.1
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 16804,
       "quota_pct": 8.4
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "permessi": 14299,
       "quota_pct": 7.1
      }
     ]
    },
    "CZ": {
     "anno": 2025,
     "totale": 486518,
     "prime_cinque": [
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 211028,
       "quota_pct": 43.4
      },
      {
       "cittadinanza": "VN",
       "nome": "Viet Nam",
       "permessi": 68761,
       "quota_pct": 14.1
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 36437,
       "quota_pct": 7.5
      },
      {
       "cittadinanza": "MN",
       "nome": "Mongolia",
       "permessi": 14554,
       "quota_pct": 3
      },
      {
       "cittadinanza": "PH",
       "nome": "Philippines",
       "permessi": 14181,
       "quota_pct": 2.9
      }
     ]
    },
    "DK": {
     "anno": 2025,
     "totale": 396091,
     "prime_cinque": [
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 56490,
       "quota_pct": 14.3
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "permessi": 36590,
       "quota_pct": 9.2
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "permessi": 30590,
       "quota_pct": 7.7
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 18698,
       "quota_pct": 4.7
      },
      {
       "cittadinanza": "UK",
       "nome": "United Kingdom",
       "permessi": 17421,
       "quota_pct": 4.4
      }
     ]
    },
    "EE": {
     "anno": 2025,
     "totale": 187350,
     "prime_cinque": [
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 78377,
       "quota_pct": 41.8
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 25001,
       "quota_pct": 13.3
      },
      {
       "cittadinanza": "BY",
       "nome": "Belarus",
       "permessi": 2709,
       "quota_pct": 1.4
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 2011,
       "quota_pct": 1.1
      },
      {
       "cittadinanza": "NG",
       "nome": "Nigeria",
       "permessi": 1322,
       "quota_pct": 0.7
      }
     ]
    },
    "FI": {
     "anno": 2025,
     "totale": 274966,
     "prime_cinque": [
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 28493,
       "quota_pct": 10.4
      },
      {
       "cittadinanza": "PH",
       "nome": "Philippines",
       "permessi": 18095,
       "quota_pct": 6.6
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 17967,
       "quota_pct": 6.5
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 14571,
       "quota_pct": 5.3
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 13227,
       "quota_pct": 4.8
      }
     ]
    },
    "FR": {
     "anno": 2025,
     "totale": 4419080,
     "prime_cinque": [
      {
       "cittadinanza": "DZ",
       "nome": "Algeria",
       "permessi": 658073,
       "quota_pct": 14.9
      },
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "permessi": 621108,
       "quota_pct": 14.1
      },
      {
       "cittadinanza": "TN",
       "nome": "Tunisia",
       "permessi": 312432,
       "quota_pct": 7.1
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "permessi": 232055,
       "quota_pct": 5.3
      },
      {
       "cittadinanza": "UK",
       "nome": "United Kingdom",
       "permessi": 172233,
       "quota_pct": 3.9
      }
     ]
    },
    "DE": {
     "anno": 2025,
     "totale": 5935591,
     "prime_cinque": [
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "permessi": 1294981,
       "quota_pct": 21.8
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "permessi": 723210,
       "quota_pct": 12.2
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "permessi": 335257,
       "quota_pct": 5.6
      },
      {
       "cittadinanza": "XK",
       "nome": "Kosovo*",
       "permessi": 267406,
       "quota_pct": 4.5
      },
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "permessi": 238496,
       "quota_pct": 4
      }
     ]
    },
    "EL": {
     "anno": 2025,
     "totale": 713407,
     "prime_cinque": [
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "permessi": 303440,
       "quota_pct": 42.5
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 56933,
       "quota_pct": 8
      },
      {
       "cittadinanza": "PK",
       "nome": "Pakistan",
       "permessi": 35587,
       "quota_pct": 5
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "permessi": 34785,
       "quota_pct": 4.9
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "permessi": 25219,
       "quota_pct": 3.5
      }
     ]
    },
    "HU": {
     "anno": 2025,
     "totale": 211288,
     "prime_cinque": [
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 42553,
       "quota_pct": 20.1
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 18062,
       "quota_pct": 8.5
      },
      {
       "cittadinanza": "VN",
       "nome": "Viet Nam",
       "permessi": 16997,
       "quota_pct": 8
      },
      {
       "cittadinanza": "PH",
       "nome": "Philippines",
       "permessi": 15275,
       "quota_pct": 7.2
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 10111,
       "quota_pct": 4.8
      }
     ]
    },
    "IE": {
     "anno": 2025,
     "totale": 331623,
     "prime_cinque": [
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 96704,
       "quota_pct": 29.2
      },
      {
       "cittadinanza": "BR",
       "nome": "Brazil",
       "permessi": 41440,
       "quota_pct": 12.5
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 24334,
       "quota_pct": 7.3
      },
      {
       "cittadinanza": "PK",
       "nome": "Pakistan",
       "permessi": 15941,
       "quota_pct": 4.8
      },
      {
       "cittadinanza": "PH",
       "nome": "Philippines",
       "permessi": 14152,
       "quota_pct": 4.3
      }
     ]
    },
    "IT": {
     "anno": 2025,
     "totale": 4257673,
     "prime_cinque": [
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "permessi": 436804,
       "quota_pct": 10.3
      },
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "permessi": 407423,
       "quota_pct": 9.6
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 340829,
       "quota_pct": 8
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 269414,
       "quota_pct": 6.3
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "permessi": 244639,
       "quota_pct": 5.7
      }
     ]
    },
    "LV": {
     "anno": 2025,
     "totale": 244320,
     "prime_cinque": [
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 35078,
       "quota_pct": 14.4
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 6292,
       "quota_pct": 2.6
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 5839,
       "quota_pct": 2.4
      },
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "permessi": 4832,
       "quota_pct": 2
      },
      {
       "cittadinanza": "BY",
       "nome": "Belarus",
       "permessi": 4159,
       "quota_pct": 1.7
      }
     ]
    },
    "LT": {
     "anno": 2025,
     "totale": 158277,
     "prime_cinque": [
      {
       "cittadinanza": "BY",
       "nome": "Belarus",
       "permessi": 51021,
       "quota_pct": 32.2
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 29127,
       "quota_pct": 18.4
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 13657,
       "quota_pct": 8.6
      },
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "permessi": 10765,
       "quota_pct": 6.8
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 8059,
       "quota_pct": 5.1
      }
     ]
    },
    "LU": {
     "anno": 2025,
     "totale": 68865,
     "prime_cinque": [
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 5680,
       "quota_pct": 8.2
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 4582,
       "quota_pct": 6.7
      },
      {
       "cittadinanza": "UK",
       "nome": "United Kingdom",
       "permessi": 4572,
       "quota_pct": 6.6
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "permessi": 3631,
       "quota_pct": 5.3
      },
      {
       "cittadinanza": "BR",
       "nome": "Brazil",
       "permessi": 3610,
       "quota_pct": 5.2
      }
     ]
    },
    "MT": {
     "anno": 2025,
     "totale": 132067,
     "prime_cinque": [
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 27067,
       "quota_pct": 20.5
      },
      {
       "cittadinanza": "NP",
       "nome": "Nepal",
       "permessi": 14366,
       "quota_pct": 10.9
      },
      {
       "cittadinanza": "PH",
       "nome": "Philippines",
       "permessi": 14060,
       "quota_pct": 10.6
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 12207,
       "quota_pct": 9.2
      },
      {
       "cittadinanza": "UK",
       "nome": "United Kingdom",
       "permessi": 11304,
       "quota_pct": 8.6
      }
     ]
    },
    "NL": {
     "anno": 2025,
     "totale": 831413,
     "prime_cinque": [
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "permessi": 102942,
       "quota_pct": 12.4
      },
      {
       "cittadinanza": "UK",
       "nome": "United Kingdom",
       "permessi": 91824,
       "quota_pct": 11
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "permessi": 91563,
       "quota_pct": 11
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 59312,
       "quota_pct": 7.1
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 55946,
       "quota_pct": 6.7
      }
     ]
    },
    "PL": {
     "anno": 2025,
     "totale": 1055532,
     "prime_cinque": [
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 595231,
       "quota_pct": 56.4
      },
      {
       "cittadinanza": "BY",
       "nome": "Belarus",
       "permessi": 223551,
       "quota_pct": 21.2
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "permessi": 23232,
       "quota_pct": 2.2
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 22578,
       "quota_pct": 2.1
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 20046,
       "quota_pct": 1.9
      }
     ]
    },
    "PT": {
     "anno": 2025,
     "totale": 1122061,
     "prime_cinque": [
      {
       "cittadinanza": "BR",
       "nome": "Brazil",
       "permessi": 419460,
       "quota_pct": 37.4
      },
      {
       "cittadinanza": "AO",
       "nome": "Angola",
       "permessi": 78772,
       "quota_pct": 7
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 74528,
       "quota_pct": 6.6
      },
      {
       "cittadinanza": "CV",
       "nome": "Cabo Verde",
       "permessi": 60513,
       "quota_pct": 5.4
      },
      {
       "cittadinanza": "UK",
       "nome": "United Kingdom",
       "permessi": 46868,
       "quota_pct": 4.2
      }
     ]
    },
    "RO": {
     "anno": 2025,
     "totale": 223782,
     "prime_cinque": [
      {
       "cittadinanza": "NP",
       "nome": "Nepal",
       "permessi": 52446,
       "quota_pct": 23.4
      },
      {
       "cittadinanza": "LK",
       "nome": "Sri Lanka",
       "permessi": 25095,
       "quota_pct": 11.2
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "permessi": 19071,
       "quota_pct": 8.5
      },
      {
       "cittadinanza": "MD",
       "nome": "Moldova",
       "permessi": 14674,
       "quota_pct": 6.6
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 13869,
       "quota_pct": 6.2
      }
     ]
    },
    "SK": {
     "anno": 2025,
     "totale": 161007,
     "prime_cinque": [
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "permessi": 70966,
       "quota_pct": 44.1
      },
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "permessi": 14383,
       "quota_pct": 8.9
      },
      {
       "cittadinanza": "VN",
       "nome": "Viet Nam",
       "permessi": 12267,
       "quota_pct": 7.6
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 8424,
       "quota_pct": 5.2
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 7947,
       "quota_pct": 4.9
      }
     ]
    },
    "SI": {
     "anno": 2025,
     "totale": 228390,
     "prime_cinque": [
      {
       "cittadinanza": "BA",
       "nome": "Bosnia and Herzegovina",
       "permessi": 110486,
       "quota_pct": 48.4
      },
      {
       "cittadinanza": "XK",
       "nome": "Kosovo*",
       "permessi": 37947,
       "quota_pct": 16.6
      },
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "permessi": 26700,
       "quota_pct": 11.7
      },
      {
       "cittadinanza": "MK",
       "nome": "North Macedonia",
       "permessi": 20533,
       "quota_pct": 9
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "permessi": 6666,
       "quota_pct": 2.9
      }
     ]
    },
    "ES": {
     "anno": 2025,
     "totale": 4296727,
     "prime_cinque": [
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "permessi": 945112,
       "quota_pct": 22
      },
      {
       "cittadinanza": "UK",
       "nome": "United Kingdom",
       "permessi": 408939,
       "quota_pct": 9.5
      },
      {
       "cittadinanza": "CO",
       "nome": "Colombia",
       "permessi": 331747,
       "quota_pct": 7.7
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 271997,
       "quota_pct": 6.3
      },
      {
       "cittadinanza": "VE",
       "nome": "Venezuela",
       "permessi": 255577,
       "quota_pct": 5.9
      }
     ]
    },
    "SE": {
     "anno": 2025,
     "totale": 429685,
     "prime_cinque": [
      {
       "cittadinanza": "IN",
       "nome": "India",
       "permessi": 38922,
       "quota_pct": 9.1
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "permessi": 35511,
       "quota_pct": 8.3
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "permessi": 31635,
       "quota_pct": 7.4
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "permessi": 23925,
       "quota_pct": 5.6
      },
      {
       "cittadinanza": "ER",
       "nome": "Eritrea",
       "permessi": 21407,
       "quota_pct": 5
      }
     ]
    }
   },
   "verifica_protezione_temporanea": {
    "nota": "Confronto tra permessi validi a cittadini ucraini (migr_resvalid) e beneficiari ucraini di protezione temporanea a fine dicembre (migr_asytpsm). Un rapporto molto inferiore a 100% indica che la protezione temporanea non è contata tra i permessi.",
    "aggiornato_eurostat_protezione": "2026-10-15",
    "valori": {
     "EU27_2020": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 1656525,
      "protezione_temporanea_ucraini": 4284385,
      "rapporto_pct": 38.7
     },
     "AT": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 15828,
      "protezione_temporanea_ucraini": 91475,
      "rapporto_pct": 17.3
     },
     "BE": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 7371,
      "protezione_temporanea_ucraini": 91650,
      "rapporto_pct": 8
     },
     "BG": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 11471,
      "protezione_temporanea_ucraini": 77700,
      "rapporto_pct": 14.8
     },
     "HR": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 1960,
      "protezione_temporanea_ucraini": 28340,
      "rapporto_pct": 6.9
     },
     "CY": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 7046,
      "protezione_temporanea_ucraini": 25045,
      "rapporto_pct": 28.1
     },
     "CZ": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 211028,
      "protezione_temporanea_ucraini": 392335,
      "rapporto_pct": 53.8
     },
     "DK": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 56490,
      "protezione_temporanea_ucraini": 48365,
      "rapporto_pct": 116.8
     },
     "EE": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 25001,
      "protezione_temporanea_ucraini": 34295,
      "rapporto_pct": 72.9
     },
     "FI": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 13227,
      "protezione_temporanea_ucraini": 77385,
      "rapporto_pct": 17.1
     },
     "FR": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 40576,
      "protezione_temporanea_ucraini": 49915,
      "rapporto_pct": 81.3
     },
     "DE": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 122335,
      "protezione_temporanea_ucraini": 1215255,
      "rapporto_pct": 10.1
     },
     "EL": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 15651,
      "protezione_temporanea_ucraini": 37850,
      "rapporto_pct": 41.4
     },
     "HU": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 18062,
      "protezione_temporanea_ucraini": 42750,
      "rapporto_pct": 42.3
     },
     "IE": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 1332,
      "protezione_temporanea_ucraini": 118025,
      "rapporto_pct": 1.1
     },
     "IT": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 269414,
      "protezione_temporanea_ucraini": 60170,
      "rapporto_pct": 447.8
     },
     "LV": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 6292,
      "protezione_temporanea_ucraini": 30990,
      "rapporto_pct": 20.3
     },
     "LT": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 29127,
      "protezione_temporanea_ucraini": 51370,
      "rapporto_pct": 56.7
     },
     "LU": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 1798,
      "protezione_temporanea_ucraini": 3915,
      "rapporto_pct": 45.9
     },
     "MT": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 1157,
      "protezione_temporanea_ucraini": 2470,
      "rapporto_pct": 46.8
     },
     "NL": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 10422,
      "protezione_temporanea_ucraini": 131780,
      "rapporto_pct": 7.9
     },
     "PL": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 595231,
      "protezione_temporanea_ucraini": 965655,
      "rapporto_pct": 61.6
     },
     "PT": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 22756,
      "protezione_temporanea_ucraini": 58990,
      "rapporto_pct": 38.6
     },
     "RO": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 3652,
      "protezione_temporanea_ucraini": 199360,
      "rapporto_pct": 1.8
     },
     "SK": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 70966,
      "protezione_temporanea_ucraini": 138765,
      "rapporto_pct": 51.1
     },
     "SI": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 3011,
      "protezione_temporanea_ucraini": 11140,
      "rapporto_pct": 27
     },
     "ES": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 90960,
      "protezione_temporanea_ucraini": 250195,
      "rapporto_pct": 36.4
     },
     "SE": {
      "anno_permessi": 2025,
      "permessi_validi_ucraini": 4361,
      "protezione_temporanea_ucraini": 49195,
      "rapporto_pct": 8.9
     }
    }
   },
   "nota": "Permessi validi al 31 dicembre dell'anno indicato, tutte le ragioni e durate. prime_cinque: cittadinanze con più permessi, aggregati esclusi."
  }
 }
};
