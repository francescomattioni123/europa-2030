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
     "totale": {
      "totale": 335604.8,
      "nati_paese": 283502.2,
      "nati_paese_genitori_paese": 257557.6,
      "nati_paese_genitore_estero": 25944.6,
      "nati_paese_un_genitore_estero": 14774.9,
      "nati_paese_due_genitori_estero": 11169.6,
      "nati_estero": 50912.8,
      "sconosciuto": 1189.9
     },
     "nazionali": {
      "totale": 302713.1,
      "nati_paese": 281732.5,
      "nati_paese_genitori_paese": 257465.3,
      "nati_paese_genitore_estero": 24267.3,
      "nati_paese_un_genitore_estero": 14582.4,
      "nati_paese_due_genitori_estero": 9684.9,
      "nati_estero": 19820.9,
      "sconosciuto": 1159.6
     },
     "stranieri": {
      "totale": 32744.3,
      "nati_paese": 1757.6,
      "nati_paese_genitori_paese": 90.7,
      "nati_paese_genitore_estero": 1667,
      "nati_paese_un_genitore_estero": 191.4,
      "nati_paese_due_genitori_estero": 1475.6,
      "nati_estero": 30963.7,
      "sconosciuto": 22.9
     },
     "stranieri_ue": {
      "totale": 10563.4,
      "nati_paese": 759,
      "nati_paese_genitori_paese": 32.6,
      "nati_paese_genitore_estero": 726.4,
      "nati_paese_un_genitore_estero": 106.7,
      "nati_paese_due_genitori_estero": 619.7,
      "nati_estero": 9797.6,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 22136.5,
      "nati_paese": 997.7,
      "nati_paese_genitori_paese": 57.9,
      "nati_paese_genitore_estero": 939.7,
      "nati_paese_un_genitore_estero": 84.7,
      "nati_paese_due_genitori_estero": 855,
      "nati_estero": 21122.9,
      "sconosciuto": 16
     },
     "apolidi": {
      "totale": 119.1,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 109,
      "sconosciuto": null
     }
    },
    "AT": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 6877.3,
      "nati_paese": 5099.4,
      "nati_paese_genitori_paese": 4344.9,
      "nati_paese_genitore_estero": 754.5,
      "nati_paese_un_genitore_estero": 394.2,
      "nati_paese_due_genitori_estero": 360.3,
      "nati_estero": 1777.9,
      "sconosciuto": null
     },
     "nazionali": {
      "totale": 5409.8,
      "nati_paese": 4984.3,
      "nati_paese_genitori_paese": 4342.2,
      "nati_paese_genitore_estero": 642.1,
      "nati_paese_un_genitore_estero": 376.1,
      "nati_paese_due_genitori_estero": 266,
      "nati_estero": 425.6,
      "sconosciuto": null
     },
     "stranieri": {
      "totale": 1456.3,
      "nati_paese": 113.6,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 111.1,
      "nati_paese_un_genitore_estero": 18.2,
      "nati_paese_due_genitori_estero": 92.9,
      "nati_estero": 1342.7,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 754.4,
      "nati_paese": 52.6,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 51.4,
      "nati_paese_un_genitore_estero": 11.3,
      "nati_paese_due_genitori_estero": 40,
      "nati_estero": 701.8,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 701.9,
      "nati_paese": 60.9,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 59.7,
      "nati_paese_un_genitore_estero": 6.8,
      "nati_paese_due_genitori_estero": 52.9,
      "nati_estero": 641,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": 11.1,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 9.6,
      "sconosciuto": null
     }
    },
    "BE": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 8734.6,
      "nati_paese": 6803.2,
      "nati_paese_genitori_paese": 5642.5,
      "nati_paese_genitore_estero": 1160.8,
      "nati_paese_un_genitore_estero": 684.2,
      "nati_paese_due_genitori_estero": 476.6,
      "nati_estero": 1890.4,
      "sconosciuto": 40.9
     },
     "nazionali": {
      "totale": 7635.3,
      "nati_paese": 6711.1,
      "nati_paese_genitori_paese": 5638.5,
      "nati_paese_genitore_estero": 1072.6,
      "nati_paese_un_genitore_estero": 675.1,
      "nati_paese_due_genitori_estero": 397.5,
      "nati_estero": 888,
      "sconosciuto": 36.2
     },
     "stranieri": {
      "totale": 1094,
      "nati_paese": 91.6,
      "nati_paese_genitori_paese": 4,
      "nati_paese_genitore_estero": 87.7,
      "nati_paese_un_genitore_estero": 9.1,
      "nati_paese_due_genitori_estero": 78.6,
      "nati_estero": 1001.5,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 718.4,
      "nati_paese": 85.8,
      "nati_paese_genitori_paese": 4,
      "nati_paese_genitore_estero": 81.8,
      "nati_paese_un_genitore_estero": 8.8,
      "nati_paese_due_genitori_estero": 73,
      "nati_estero": 631.8,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 372.2,
      "nati_paese": 5.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 5.8,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 5.4,
      "nati_estero": 366.3,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "BG": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 4816.7,
      "nati_paese": 4784.8,
      "nati_paese_genitori_paese": 4771.3,
      "nati_paese_genitore_estero": 13.5,
      "nati_paese_un_genitore_estero": 10.8,
      "nati_paese_due_genitori_estero": 2.7,
      "nati_estero": 32,
      "sconosciuto": null
     },
     "nazionali": {
      "totale": 4794.4,
      "nati_paese": 4784.7,
      "nati_paese_genitori_paese": 4771.3,
      "nati_paese_genitore_estero": 13.5,
      "nati_paese_un_genitore_estero": 10.8,
      "nati_paese_due_genitori_estero": 2.7,
      "nati_estero": 9.7,
      "sconosciuto": null
     },
     "stranieri": {
      "totale": 22.3,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 22.3,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 2.9,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 2.9,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 19.5,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 19.4,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "HR": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 2946.1,
      "nati_paese": 2606.9,
      "nati_paese_genitori_paese": 2294.8,
      "nati_paese_genitore_estero": 312.1,
      "nati_paese_un_genitore_estero": 201.6,
      "nati_paese_due_genitori_estero": 110.5,
      "nati_estero": 337.7,
      "sconosciuto": 1.5
     },
     "nazionali": {
      "totale": 2926.5,
      "nati_paese": 2605.9,
      "nati_paese_genitori_paese": 2294.2,
      "nati_paese_genitore_estero": 311.7,
      "nati_paese_un_genitore_estero": 201.5,
      "nati_paese_due_genitori_estero": 110.1,
      "nati_estero": 319.1,
      "sconosciuto": 1.5
     },
     "stranieri": {
      "totale": 19.6,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 18.6,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 6.3,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 5.7,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 13.3,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 12.9,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "CY": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 729.5,
      "nati_paese": 496.1,
      "nati_paese_genitori_paese": 462.9,
      "nati_paese_genitore_estero": 33.2,
      "nati_paese_un_genitore_estero": 27,
      "nati_paese_due_genitori_estero": 6.2,
      "nati_estero": 233.3,
      "sconosciuto": null
     },
     "nazionali": {
      "totale": 540.3,
      "nati_paese": 492.9,
      "nati_paese_genitori_paese": 462.9,
      "nati_paese_genitore_estero": 30,
      "nati_paese_un_genitore_estero": 26.5,
      "nati_paese_due_genitori_estero": 3.5,
      "nati_estero": 47.4,
      "sconosciuto": null
     },
     "stranieri": {
      "totale": 189.2,
      "nati_paese": 3.2,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 3.2,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 2.7,
      "nati_estero": 185.9,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 72.3,
      "nati_paese": 2.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 2.5,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 2.2,
      "nati_estero": 69.8,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 116.9,
      "nati_paese": 0.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 0.7,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 0.6,
      "nati_estero": 116.1,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "CZ": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 7875.5,
      "nati_paese": 7395.5,
      "nati_paese_genitori_paese": 7123.2,
      "nati_paese_genitore_estero": 272.2,
      "nati_paese_un_genitore_estero": 210.6,
      "nati_paese_due_genitori_estero": 61.6,
      "nati_estero": 472.4,
      "sconosciuto": 7.5
     },
     "nazionali": {
      "totale": 7518.1,
      "nati_paese": 7390.6,
      "nati_paese_genitori_paese": 7121.9,
      "nati_paese_genitore_estero": 268.7,
      "nati_paese_un_genitore_estero": 209.7,
      "nati_paese_due_genitori_estero": 59,
      "nati_estero": 120,
      "sconosciuto": 7.5
     },
     "stranieri": {
      "totale": 357.4,
      "nati_paese": 4.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 3.5,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 352.5,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 111.8,
      "nati_paese": 3.7,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 108,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 245.6,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 244.4,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "DK": null,
    "EE": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 1011.7,
      "nati_paese": 830.6,
      "nati_paese_genitori_paese": 659,
      "nati_paese_genitore_estero": 171.6,
      "nati_paese_un_genitore_estero": 95.1,
      "nati_paese_due_genitori_estero": 76.6,
      "nati_estero": 156.3,
      "sconosciuto": 24.8
     },
     "nazionali": {
      "totale": 829,
      "nati_paese": 770.3,
      "nati_paese_genitori_paese": 646.1,
      "nati_paese_genitore_estero": 124.2,
      "nati_paese_un_genitore_estero": 84.2,
      "nati_paese_due_genitori_estero": 40,
      "nati_estero": 38.9,
      "sconosciuto": 19.9
     },
     "stranieri": {
      "totale": 182.6,
      "nati_paese": 60.3,
      "nati_paese_genitori_paese": 12.9,
      "nati_paese_genitore_estero": 47.4,
      "nati_paese_un_genitore_estero": 10.9,
      "nati_paese_due_genitori_estero": 36.6,
      "nati_estero": 117.4,
      "sconosciuto": 4.9
     },
     "stranieri_ue": {
      "totale": 7.2,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 6.3,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 175.4,
      "nati_paese": 59.6,
      "nati_paese_genitori_paese": 12.8,
      "nati_paese_genitore_estero": 46.8,
      "nati_paese_un_genitore_estero": 10.9,
      "nati_paese_due_genitori_estero": 36,
      "nati_estero": 111.1,
      "sconosciuto": 4.7
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "FI": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 4144.1,
      "nati_paese": 3626,
      "nati_paese_genitori_paese": 3486.9,
      "nati_paese_genitore_estero": 139.1,
      "nati_paese_un_genitore_estero": 111.1,
      "nati_paese_due_genitori_estero": 28,
      "nati_estero": 498.9,
      "sconosciuto": 19.2
     },
     "nazionali": {
      "totale": 3822.3,
      "nati_paese": 3620.5,
      "nati_paese_genitori_paese": 3485.4,
      "nati_paese_genitore_estero": 135.1,
      "nati_paese_un_genitore_estero": 110.3,
      "nati_paese_due_genitori_estero": 24.8,
      "nati_estero": 183.3,
      "sconosciuto": 18.6
     },
     "stranieri": {
      "totale": 320.2,
      "nati_paese": 5.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 4,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 3.1,
      "nati_estero": 314.1,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 82.8,
      "nati_paese": 3.6,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 79.1,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 237.4,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 235,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "FR": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 49066,
      "nati_paese": 41097.3,
      "nati_paese_genitori_paese": 34480.3,
      "nati_paese_genitore_estero": 6617.1,
      "nati_paese_un_genitore_estero": 3675.3,
      "nati_paese_due_genitori_estero": 2941.8,
      "nati_estero": 7111.6,
      "sconosciuto": 857.1
     },
     "nazionali": {
      "totale": 44979.5,
      "nati_paese": 41029,
      "nati_paese_genitori_paese": 34479,
      "nati_paese_genitore_estero": 6550,
      "nati_paese_un_genitore_estero": 3674.5,
      "nati_paese_due_genitori_estero": 2875.5,
      "nati_estero": 3095.8,
      "sconosciuto": 854.8
     },
     "stranieri": {
      "totale": 4077.2,
      "nati_paese": 65.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 64.7,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 63.9,
      "nati_estero": 4009.8,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 1060.4,
      "nati_paese": 33.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 33.2,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 32.8,
      "nati_estero": 1025,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 3008.5,
      "nati_paese": 31,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 31,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 30.5,
      "nati_estero": 2977,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": 8.6,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 6,
      "sconosciuto": null
     }
    },
    "DE": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 62576.6,
      "nati_paese": 48130.4,
      "nati_paese_genitori_paese": 39137.4,
      "nati_paese_genitore_estero": 8993,
      "nati_paese_un_genitore_estero": 4882.7,
      "nati_paese_due_genitori_estero": 4110.2,
      "nati_estero": 14419.2,
      "sconosciuto": 27
     },
     "nazionali": {
      "totale": 52471.8,
      "nati_paese": 47252.4,
      "nati_paese_genitori_paese": 39110.6,
      "nati_paese_genitore_estero": 8141.7,
      "nati_paese_un_genitore_estero": 4780.1,
      "nati_paese_due_genitori_estero": 3361.6,
      "nati_estero": 5197.1,
      "sconosciuto": 22.3
     },
     "stranieri": {
      "totale": 10034.5,
      "nati_paese": 874.1,
      "nati_paese_genitori_paese": 26.8,
      "nati_paese_genitore_estero": 847.3,
      "nati_paese_un_genitore_estero": 102,
      "nati_paese_due_genitori_estero": 745.3,
      "nati_estero": 9155.9,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 3529.5,
      "nati_paese": 390.7,
      "nati_paese_genitori_paese": 16,
      "nati_paese_genitore_estero": 374.7,
      "nati_paese_un_genitore_estero": 60.2,
      "nati_paese_due_genitori_estero": 314.5,
      "nati_estero": 3136.5,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 6499.7,
      "nati_paese": 483.1,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 472.4,
      "nati_paese_un_genitore_estero": 41.9,
      "nati_paese_due_genitori_estero": 430.6,
      "nati_estero": 6014.5,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": 70.4,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 66.2,
      "sconosciuto": null
     }
    },
    "EL": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 7749.8,
      "nati_paese": 7129.9,
      "nati_paese_genitori_paese": 6897,
      "nati_paese_genitore_estero": 232.9,
      "nati_paese_un_genitore_estero": 120.3,
      "nati_paese_due_genitori_estero": 112.6,
      "nati_estero": 609.4,
      "sconosciuto": 10.5
     },
     "nazionali": {
      "totale": 7559.3,
      "nati_paese": 7116,
      "nati_paese_genitori_paese": 6896.8,
      "nati_paese_genitore_estero": 219.2,
      "nati_paese_un_genitore_estero": 119,
      "nati_paese_due_genitori_estero": 100.2,
      "nati_estero": 432.9,
      "sconosciuto": 10.4
     },
     "stranieri": {
      "totale": 189.2,
      "nati_paese": 13.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 13.1,
      "nati_paese_un_genitore_estero": 1.4,
      "nati_paese_due_genitori_estero": 11.8,
      "nati_estero": 175.8,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 25.3,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 24.2,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 163.7,
      "nati_paese": 12.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 12.2,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 11,
      "nati_estero": 151.5,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "HU": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 7160.8,
      "nati_paese": 6926.2,
      "nati_paese_genitori_paese": 6793.6,
      "nati_paese_genitore_estero": 132.6,
      "nati_paese_un_genitore_estero": 99.4,
      "nati_paese_due_genitori_estero": 33.2,
      "nati_estero": 230.7,
      "sconosciuto": 3.8
     },
     "nazionali": {
      "totale": 7089.4,
      "nati_paese": 6924.5,
      "nati_paese_genitori_paese": 6792.9,
      "nati_paese_genitore_estero": 131.6,
      "nati_paese_un_genitore_estero": 99.4,
      "nati_paese_due_genitori_estero": 32.3,
      "nati_estero": 161.1,
      "sconosciuto": 3.8
     },
     "stranieri": {
      "totale": 71.4,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 69.7,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 29.8,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 28.7,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 41.5,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 40.9,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "IE": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 4081.2,
      "nati_paese": 2922.3,
      "nati_paese_genitori_paese": 2620.5,
      "nati_paese_genitore_estero": 301.8,
      "nati_paese_un_genitore_estero": 140.4,
      "nati_paese_due_genitori_estero": 161.4,
      "nati_estero": 1143.7,
      "sconosciuto": 15.2
     },
     "nazionali": {
      "totale": 3306.5,
      "nati_paese": 2913.7,
      "nati_paese_genitori_paese": 2620.3,
      "nati_paese_genitore_estero": 293.4,
      "nati_paese_un_genitore_estero": 140.3,
      "nati_paese_due_genitori_estero": 153.1,
      "nati_estero": 380,
      "sconosciuto": 12.9
     },
     "stranieri": {
      "totale": 774.6,
      "nati_paese": 8.6,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 8.4,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 8.3,
      "nati_estero": 763.7,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 329.4,
      "nati_paese": 6.7,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 6.7,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 6.6,
      "nati_estero": 322.1,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 445.2,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 441.5,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "IT": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 44114.9,
      "nati_paese": 38067.3,
      "nati_paese_genitori_paese": 36715.8,
      "nati_paese_genitore_estero": 1351.5,
      "nati_paese_un_genitore_estero": 833,
      "nati_paese_due_genitori_estero": 518.5,
      "nati_estero": 6036.4,
      "sconosciuto": 11.2
     },
     "nazionali": {
      "totale": 39879.2,
      "nati_paese": 37870.2,
      "nati_paese_genitori_paese": 36714.3,
      "nati_paese_genitore_estero": 1155.9,
      "nati_paese_un_genitore_estero": 824.5,
      "nati_paese_due_genitori_estero": 331.4,
      "nati_estero": 1998.4,
      "sconosciuto": 10.6
     },
     "stranieri": {
      "totale": 4233.7,
      "nati_paese": 196.3,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 195.1,
      "nati_paese_un_genitore_estero": 8.2,
      "nati_paese_due_genitori_estero": 186.9,
      "nati_estero": 4036.7,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 1174.2,
      "nati_paese": 45.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 45.7,
      "nati_paese_un_genitore_estero": 2.9,
      "nati_paese_due_genitori_estero": 42.8,
      "nati_estero": 1128.3,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 3059.4,
      "nati_paese": 150.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 149.4,
      "nati_paese_un_genitore_estero": 5.3,
      "nati_paese_due_genitori_estero": 144.1,
      "nati_estero": 2908.4,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": 2.1,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "LV": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 1369,
      "nati_paese": 1198.3,
      "nati_paese_genitori_paese": 955.5,
      "nati_paese_genitore_estero": 242.8,
      "nati_paese_un_genitore_estero": 133.7,
      "nati_paese_due_genitori_estero": 109.1,
      "nati_estero": 152.3,
      "sconosciuto": 18.4
     },
     "nazionali": {
      "totale": 1188.7,
      "nati_paese": 1126.8,
      "nati_paese_genitori_paese": 940.4,
      "nati_paese_genitore_estero": 186.5,
      "nati_paese_un_genitore_estero": 122.5,
      "nati_paese_due_genitori_estero": 64,
      "nati_estero": 48.3,
      "sconosciuto": 13.5
     },
     "stranieri": {
      "totale": 159.7,
      "nati_paese": 71,
      "nati_paese_genitori_paese": 15.1,
      "nati_paese_genitore_estero": 55.9,
      "nati_paese_un_genitore_estero": 11,
      "nati_paese_due_genitori_estero": 44.9,
      "nati_estero": 84,
      "sconosciuto": 4.7
     },
     "stranieri_ue": {
      "totale": 5.9,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 5,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 153.8,
      "nati_paese": 70.2,
      "nati_paese_genitori_paese": 15,
      "nati_paese_genitore_estero": 55.2,
      "nati_paese_un_genitore_estero": 10.9,
      "nati_paese_due_genitori_estero": 44.2,
      "nati_estero": 79,
      "sconosciuto": 4.6
     },
     "apolidi": {
      "totale": 20,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 19.6,
      "sconosciuto": null
     }
    },
    "LT": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 2213.7,
      "nati_paese": 2032.5,
      "nati_paese_genitori_paese": 1974.7,
      "nati_paese_genitore_estero": 57.8,
      "nati_paese_un_genitore_estero": 43.7,
      "nati_paese_due_genitori_estero": 14.1,
      "nati_estero": 144.8,
      "sconosciuto": 36.4
     },
     "nazionali": {
      "totale": 2145.3,
      "nati_paese": 2029.3,
      "nati_paese_genitori_paese": 1972.5,
      "nati_paese_genitore_estero": 56.8,
      "nati_paese_un_genitore_estero": 43.4,
      "nati_paese_due_genitori_estero": 13.3,
      "nati_estero": 79.8,
      "sconosciuto": 36.2
     },
     "stranieri": {
      "totale": 67,
      "nati_paese": 2.5,
      "nati_paese_genitori_paese": 1.5,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 64.3,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 6.8,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 6.1,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 60.1,
      "nati_paese": 1.9,
      "nati_paese_genitori_paese": 1.2,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 58.2,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "LU": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 520.7,
      "nati_paese": 230.4,
      "nati_paese_genitori_paese": 136,
      "nati_paese_genitore_estero": 94.4,
      "nati_paese_un_genitore_estero": 38.5,
      "nati_paese_due_genitori_estero": 55.9,
      "nati_estero": 288,
      "sconosciuto": null
     },
     "nazionali": {
      "totale": 264.9,
      "nati_paese": 210.7,
      "nati_paese_genitori_paese": 134.9,
      "nati_paese_genitore_estero": 75.8,
      "nati_paese_un_genitore_estero": 30.9,
      "nati_paese_due_genitori_estero": 44.9,
      "nati_estero": 53.1,
      "sconosciuto": null
     },
     "stranieri": {
      "totale": 255.5,
      "nati_paese": 19.7,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 18.6,
      "nati_paese_un_genitore_estero": 7.6,
      "nati_paese_due_genitori_estero": 11,
      "nati_estero": 234.6,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 204.1,
      "nati_paese": 18.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 17.4,
      "nati_paese_un_genitore_estero": 7.3,
      "nati_paese_due_genitori_estero": 10.1,
      "nati_estero": 184.8,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 51.1,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 49.6,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "MT": null,
    "NL": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 13426.1,
      "nati_paese": 11120.7,
      "nati_paese_genitori_paese": 9417.3,
      "nati_paese_genitore_estero": 1703.3,
      "nati_paese_un_genitore_estero": 995.5,
      "nati_paese_due_genitori_estero": 707.8,
      "nati_estero": 2303.1,
      "sconosciuto": 2.3
     },
     "nazionali": {
      "totale": 12494.2,
      "nati_paese": 11092.6,
      "nati_paese_genitori_paese": 9416.6,
      "nati_paese_genitore_estero": 1676,
      "nati_paese_un_genitore_estero": 990.8,
      "nati_paese_due_genitori_estero": 685.2,
      "nati_estero": 1401.5,
      "sconosciuto": null
     },
     "stranieri": {
      "totale": 915.2,
      "nati_paese": 27.6,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 26.9,
      "nati_paese_un_genitore_estero": 4.7,
      "nati_paese_due_genitori_estero": 22.2,
      "nati_estero": 887.6,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 471,
      "nati_paese": 18.7,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 18.5,
      "nati_paese_un_genitore_estero": 4.3,
      "nati_paese_due_genitori_estero": 14.2,
      "nati_estero": 452.3,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 444.3,
      "nati_paese": 8.9,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 8.4,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 8,
      "nati_estero": 435.3,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": 2.4,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 2.2,
      "sconosciuto": null
     }
    },
    "PL": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 27592.7,
      "nati_paese": 26879.2,
      "nati_paese_genitori_paese": 26538.1,
      "nati_paese_genitore_estero": 341,
      "nati_paese_un_genitore_estero": 234.3,
      "nati_paese_due_genitori_estero": 106.8,
      "nati_estero": 713.5,
      "sconosciuto": null
     },
     "nazionali": {
      "totale": 26943,
      "nati_paese": 26874.8,
      "nati_paese_genitori_paese": 26535,
      "nati_paese_genitore_estero": 339.8,
      "nati_paese_un_genitore_estero": 233,
      "nati_paese_due_genitori_estero": 106.8,
      "nati_estero": 68.2,
      "sconosciuto": null
     },
     "stranieri": {
      "totale": 649.7,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 645.3,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 25.4,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 23.9,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 624.3,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 621.4,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "PT": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 8139.5,
      "nati_paese": 6997.2,
      "nati_paese_genitori_paese": 6593.5,
      "nati_paese_genitore_estero": 403.7,
      "nati_paese_un_genitore_estero": 309.6,
      "nati_paese_due_genitori_estero": 94.1,
      "nati_estero": 1129,
      "sconosciuto": 13.4
     },
     "nazionali": {
      "totale": 7607.3,
      "nati_paese": 6989.4,
      "nati_paese_genitori_paese": 6591.8,
      "nati_paese_genitore_estero": 397.6,
      "nati_paese_un_genitore_estero": 308.3,
      "nati_paese_due_genitori_estero": 89.3,
      "nati_estero": 604.8,
      "sconosciuto": 13.2
     },
     "stranieri": {
      "totale": 532.2,
      "nati_paese": 7.8,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 6.1,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 4.9,
      "nati_estero": 524.2,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 49.8,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 48.4,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 482.4,
      "nati_paese": 6.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 4.8,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 4.1,
      "nati_estero": 475.8,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "RO": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 14365,
      "nati_paese": 14321.2,
      "nati_paese_genitori_paese": 14312.1,
      "nati_paese_genitore_estero": 9.1,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 43.8,
      "sconosciuto": null
     },
     "nazionali": {
      "totale": 14330.2,
      "nati_paese": 14318.6,
      "nati_paese_genitori_paese": 14311.9,
      "nati_paese_genitore_estero": 6.7,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 11.7,
      "sconosciuto": null
     },
     "stranieri": {
      "totale": 34.8,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 32.2,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 29.9,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 27.6,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "SK": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 4140.1,
      "nati_paese": 4085.1,
      "nati_paese_genitori_paese": 4032.4,
      "nati_paese_genitore_estero": 52.7,
      "nati_paese_un_genitore_estero": 45.9,
      "nati_paese_due_genitori_estero": 6.8,
      "nati_estero": 55,
      "sconosciuto": null
     },
     "nazionali": {
      "totale": 4116.7,
      "nati_paese": 4084.9,
      "nati_paese_genitori_paese": 4032.2,
      "nati_paese_genitore_estero": 52.7,
      "nati_paese_un_genitore_estero": 45.9,
      "nati_paese_due_genitori_estero": 6.8,
      "nati_estero": 31.8,
      "sconosciuto": null
     },
     "stranieri": {
      "totale": 23.5,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 23.2,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 10.4,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 10.1,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 12.6,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 12.6,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "SI": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 1582.4,
      "nati_paese": 1260.3,
      "nati_paese_genitori_paese": 1108.7,
      "nati_paese_genitore_estero": 151.5,
      "nati_paese_un_genitore_estero": 101.1,
      "nati_paese_due_genitori_estero": 50.4,
      "nati_estero": 238.8,
      "sconosciuto": 83.4
     },
     "nazionali": {
      "totale": 1425.7,
      "nati_paese": 1248,
      "nati_paese_genitori_paese": 1098.3,
      "nati_paese_genitore_estero": 149.7,
      "nati_paese_un_genitore_estero": 100.7,
      "nati_paese_due_genitori_estero": 49,
      "nati_estero": 94.7,
      "sconosciuto": 83
     },
     "stranieri": {
      "totale": 156.7,
      "nati_paese": 12.3,
      "nati_paese_genitori_paese": 10.5,
      "nati_paese_genitore_estero": 1.8,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 1.4,
      "nati_estero": 144.1,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 15.7,
      "nati_paese": 1.8,
      "nati_paese_genitori_paese": 1.6,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 13.9,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 141,
      "nati_paese": 10.5,
      "nati_paese_genitori_paese": 8.9,
      "nati_paese_genitore_estero": 1.6,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 1.4,
      "nati_estero": 130.2,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "ES": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 37847.8,
      "nati_paese": 29534.4,
      "nati_paese_genitori_paese": 28162.7,
      "nati_paese_genitore_estero": 1371.7,
      "nati_paese_un_genitore_estero": 740.5,
      "nati_paese_due_genitori_estero": 631.2,
      "nati_estero": 8313.4,
      "sconosciuto": null
     },
     "nazionali": {
      "totale": 32021.8,
      "nati_paese": 29395.1,
      "nati_paese_genitori_paese": 28161.6,
      "nati_paese_genitore_estero": 1233.5,
      "nati_paese_un_genitore_estero": 734.5,
      "nati_paese_due_genitori_estero": 499,
      "nati_estero": 2626.7,
      "sconosciuto": null
     },
     "stranieri": {
      "totale": 5826,
      "nati_paese": 139.4,
      "nati_paese_genitori_paese": 1.1,
      "nati_paese_genitore_estero": 138.2,
      "nati_paese_un_genitore_estero": 6,
      "nati_paese_due_genitori_estero": 132.3,
      "nati_estero": 5686.7,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 1481.5,
      "nati_paese": 72.9,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 72,
      "nati_paese_un_genitore_estero": 4.5,
      "nati_paese_due_genitori_estero": 67.5,
      "nati_estero": 1408.6,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 4319.9,
      "nati_paese": 66.4,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 66.2,
      "nati_paese_un_genitore_estero": 1.5,
      "nati_paese_due_genitori_estero": 64.7,
      "nati_estero": 4253.4,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    },
    "SE": {
     "anno": 2025,
     "unita": "migliaia",
     "totale": {
      "totale": 7628.9,
      "nati_paese": 5713.4,
      "nati_paese_genitori_paese": 4870.9,
      "nati_paese_genitore_estero": 842.5,
      "nati_paese_un_genitore_estero": 550.3,
      "nati_paese_due_genitori_estero": 292.2,
      "nati_estero": 1915.5,
      "sconosciuto": null
     },
     "nazionali": {
      "totale": 7018.8,
      "nati_paese": 5702.4,
      "nati_paese_genitori_paese": 4870.6,
      "nati_paese_genitore_estero": 831.8,
      "nati_paese_un_genitore_estero": 546.1,
      "nati_paese_due_genitori_estero": 285.7,
      "nati_estero": 1316.4,
      "sconosciuto": null
     },
     "stranieri": {
      "totale": 607.6,
      "nati_paese": 10.9,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 10.6,
      "nati_paese_un_genitore_estero": 4.1,
      "nati_paese_due_genitori_estero": 6.5,
      "nati_estero": 596.7,
      "sconosciuto": null
     },
     "stranieri_ue": {
      "totale": 205.7,
      "nati_paese": 8.5,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": 8.5,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": 5.5,
      "nati_estero": 197.2,
      "sconosciuto": null
     },
     "stranieri_extra_ue": {
      "totale": 400.5,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": 398.1,
      "sconosciuto": null
     },
     "apolidi": {
      "totale": null,
      "nati_paese": null,
      "nati_paese_genitori_paese": null,
      "nati_paese_genitore_estero": null,
      "nati_paese_un_genitore_estero": null,
      "nati_paese_due_genitori_estero": null,
      "nati_estero": null,
      "sconosciuto": null
     }
    }
   },
   "nota": "Popolazione nelle famiglie private, 15-74 anni, in migliaia. nazionali.nati_paese_genitore_estero = cittadini del paese nati nel paese con almeno un genitore nato all'estero (seconda generazione naturalizzata o nata cittadina); nazionali.nati_estero = cittadini nati all'estero (immigrati naturalizzati). Celle piccole possono essere null per segreto statistico."
  },
  "origine_genitori_lfs": {
   "nome": "Seconda generazione per origine dei genitori e nati all'estero per gruppo di paese di nascita, 15-74 anni, tutte le cittadinanze (indagine forze di lavoro)",
   "nome_en": "Second generation by parents' origin and foreign-born by group of country of birth, ages 15-74, all citizenships (Labour Force Survey)",
   "nome_de": "Zweite Generation nach Herkunft der Eltern und im Ausland Geborene nach Geburtslandgruppe, 15-74 Jahre, alle Staatsangehörigkeiten (Arbeitskräfteerhebung)",
   "dataset": "lfsa_pgaccpm",
   "aggiornato_eurostat": "2026-09-10",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/lfsa_pgaccpm/default/table",
   "valori": {
    "EU27_2020": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 25944.6,
      "un_genitore_nato_paese": 14774.9,
      "due_genitori_nati_estero": 11169.6,
      "di_cui_genitori_ue": 3374.8,
      "di_cui_genitori_extra_ue": 7661
     },
     "nati_estero": {
      "totale": 50912.8,
      "nati_ue": 12980.5,
      "nati_extra_ue": 37773.7
     }
    },
    "AT": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 754.5,
      "un_genitore_nato_paese": 394.2,
      "due_genitori_nati_estero": 360.3,
      "di_cui_genitori_ue": 97,
      "di_cui_genitori_extra_ue": 263.2
     },
     "nati_estero": {
      "totale": 1777.9,
      "nati_ue": 740.6,
      "nati_extra_ue": 1037.3
     }
    },
    "BE": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 1160.8,
      "un_genitore_nato_paese": 684.2,
      "due_genitori_nati_estero": 476.6,
      "di_cui_genitori_ue": 193,
      "di_cui_genitori_extra_ue": 272.4
     },
     "nati_estero": {
      "totale": 1890.4,
      "nati_ue": 760.7,
      "nati_extra_ue": 1095.2
     }
    },
    "BG": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 13.5,
      "un_genitore_nato_paese": 10.8,
      "due_genitori_nati_estero": 2.7,
      "di_cui_genitori_ue": null,
      "di_cui_genitori_extra_ue": null
     },
     "nati_estero": {
      "totale": 32,
      "nati_ue": 4.2,
      "nati_extra_ue": 27.8
     }
    },
    "HR": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 312.1,
      "un_genitore_nato_paese": 201.6,
      "due_genitori_nati_estero": 110.5,
      "di_cui_genitori_ue": 7.9,
      "di_cui_genitori_extra_ue": 102.6
     },
     "nati_estero": {
      "totale": 337.7,
      "nati_ue": 53.4,
      "nati_extra_ue": 284.3
     }
    },
    "CY": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 33.2,
      "un_genitore_nato_paese": 27,
      "due_genitori_nati_estero": 6.2,
      "di_cui_genitori_ue": 1.9,
      "di_cui_genitori_extra_ue": 4.3
     },
     "nati_estero": {
      "totale": 233.3,
      "nati_ue": 69.8,
      "nati_extra_ue": 163.6
     }
    },
    "CZ": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 272.2,
      "un_genitore_nato_paese": 210.6,
      "due_genitori_nati_estero": 61.6,
      "di_cui_genitori_ue": 48.6,
      "di_cui_genitori_extra_ue": 13
     },
     "nati_estero": {
      "totale": 472.4,
      "nati_ue": 191,
      "nati_extra_ue": 281.5
     }
    },
    "DK": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 171.7,
      "un_genitore_nato_paese": 76.6,
      "due_genitori_nati_estero": 95.1,
      "di_cui_genitori_ue": 8.7,
      "di_cui_genitori_extra_ue": 70.7
     },
     "nati_estero": {
      "totale": 497,
      "nati_ue": 160.3,
      "nati_extra_ue": 336.7
     }
    },
    "EE": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 171.6,
      "un_genitore_nato_paese": 95.1,
      "due_genitori_nati_estero": 76.6,
      "di_cui_genitori_ue": null,
      "di_cui_genitori_extra_ue": 4.8
     },
     "nati_estero": {
      "totale": 156.3,
      "nati_ue": 11.1,
      "nati_extra_ue": 144.9
     }
    },
    "FI": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 139.1,
      "un_genitore_nato_paese": 111.1,
      "due_genitori_nati_estero": 28,
      "di_cui_genitori_ue": 5.9,
      "di_cui_genitori_extra_ue": 21.5
     },
     "nati_estero": {
      "totale": 498.9,
      "nati_ue": 121.9,
      "nati_extra_ue": 376.7
     }
    },
    "FR": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 6617.1,
      "un_genitore_nato_paese": 3675.3,
      "due_genitori_nati_estero": 2941.8,
      "di_cui_genitori_ue": 763,
      "di_cui_genitori_extra_ue": 2178.8
     },
     "nati_estero": {
      "totale": 7111.6,
      "nati_ue": 1400.8,
      "nati_extra_ue": 5703
     }
    },
    "DE": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 8993,
      "un_genitore_nato_paese": 4882.7,
      "due_genitori_nati_estero": 4110.2,
      "di_cui_genitori_ue": 1678.4,
      "di_cui_genitori_extra_ue": 2425.6
     },
     "nati_estero": {
      "totale": 14419.2,
      "nati_ue": 4204.3,
      "nati_extra_ue": 10214.9
     }
    },
    "EL": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 232.9,
      "un_genitore_nato_paese": 120.3,
      "due_genitori_nati_estero": 112.6,
      "di_cui_genitori_ue": 10.9,
      "di_cui_genitori_extra_ue": 101.7
     },
     "nati_estero": {
      "totale": 609.4,
      "nati_ue": 111.9,
      "nati_extra_ue": 497.1
     }
    },
    "HU": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 132.6,
      "un_genitore_nato_paese": 99.4,
      "due_genitori_nati_estero": 33.2,
      "di_cui_genitori_ue": 26,
      "di_cui_genitori_extra_ue": 7.2
     },
     "nati_estero": {
      "totale": 230.7,
      "nati_ue": 127.2,
      "nati_extra_ue": 103.6
     }
    },
    "IE": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 301.8,
      "un_genitore_nato_paese": 140.4,
      "due_genitori_nati_estero": 161.4,
      "di_cui_genitori_ue": 25.6,
      "di_cui_genitori_extra_ue": 135.7
     },
     "nati_estero": {
      "totale": 1143.7,
      "nati_ue": 340.4,
      "nati_extra_ue": 803.3
     }
    },
    "IT": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 1351.5,
      "un_genitore_nato_paese": 833,
      "due_genitori_nati_estero": 518.5,
      "di_cui_genitori_ue": 97.8,
      "di_cui_genitori_extra_ue": 420.6
     },
     "nati_estero": {
      "totale": 6036.4,
      "nati_ue": 1608.3,
      "nati_extra_ue": 4428.1
     }
    },
    "LV": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 242.8,
      "un_genitore_nato_paese": 133.7,
      "due_genitori_nati_estero": 109.1,
      "di_cui_genitori_ue": 13.4,
      "di_cui_genitori_extra_ue": 95.7
     },
     "nati_estero": {
      "totale": 152.3,
      "nati_ue": 14.4,
      "nati_extra_ue": 137.9
     }
    },
    "LT": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 57.8,
      "un_genitore_nato_paese": 43.7,
      "due_genitori_nati_estero": 14.1,
      "di_cui_genitori_ue": 1.9,
      "di_cui_genitori_extra_ue": 12.2
     },
     "nati_estero": {
      "totale": 144.8,
      "nati_ue": 13.6,
      "nati_extra_ue": 130.7
     }
    },
    "LU": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 94.4,
      "un_genitore_nato_paese": 38.5,
      "due_genitori_nati_estero": 55.9,
      "di_cui_genitori_ue": 46.5,
      "di_cui_genitori_extra_ue": 9.1
     },
     "nati_estero": {
      "totale": 288,
      "nati_ue": 199.6,
      "nati_extra_ue": 85.5
     }
    },
    "MT": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 16.2,
      "un_genitore_nato_paese": 14.9,
      "due_genitori_nati_estero": 1.3,
      "di_cui_genitori_ue": null,
      "di_cui_genitori_extra_ue": 0.9
     },
     "nati_estero": {
      "totale": 168.6,
      "nati_ue": null,
      "nati_extra_ue": null
     }
    },
    "NL": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 1703.3,
      "un_genitore_nato_paese": 995.5,
      "due_genitori_nati_estero": 707.8,
      "di_cui_genitori_ue": 56.7,
      "di_cui_genitori_extra_ue": 650.6
     },
     "nati_estero": {
      "totale": 2303.1,
      "nati_ue": 575.8,
      "nati_extra_ue": 1724.3
     }
    },
    "PL": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 341,
      "un_genitore_nato_paese": 234.3,
      "due_genitori_nati_estero": 106.8,
      "di_cui_genitori_ue": 24.4,
      "di_cui_genitori_extra_ue": 80.7
     },
     "nati_estero": {
      "totale": 713.5,
      "nati_ue": 42.3,
      "nati_extra_ue": 671.3
     }
    },
    "PT": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 403.7,
      "un_genitore_nato_paese": 309.6,
      "due_genitori_nati_estero": 94.1,
      "di_cui_genitori_ue": 11.7,
      "di_cui_genitori_extra_ue": 82.5
     },
     "nati_estero": {
      "totale": 1129,
      "nati_ue": 168.6,
      "nati_extra_ue": 960.3
     }
    },
    "RO": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 9.1,
      "un_genitore_nato_paese": null,
      "due_genitori_nati_estero": null,
      "di_cui_genitori_ue": null,
      "di_cui_genitori_extra_ue": null
     },
     "nati_estero": {
      "totale": 43.8,
      "nati_ue": 10,
      "nati_extra_ue": 33.8
     }
    },
    "SK": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 52.7,
      "un_genitore_nato_paese": 45.9,
      "due_genitori_nati_estero": 6.8,
      "di_cui_genitori_ue": 5.5,
      "di_cui_genitori_extra_ue": null
     },
     "nati_estero": {
      "totale": 55,
      "nati_ue": 31.1,
      "nati_extra_ue": 23.1
     }
    },
    "SI": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 151.5,
      "un_genitore_nato_paese": 101.1,
      "due_genitori_nati_estero": 50.4,
      "di_cui_genitori_ue": 16.9,
      "di_cui_genitori_extra_ue": 33.5
     },
     "nati_estero": {
      "totale": 238.8,
      "nati_ue": 37.2,
      "nati_extra_ue": 201.5
     }
    },
    "ES": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 1371.7,
      "un_genitore_nato_paese": 740.5,
      "due_genitori_nati_estero": 631.2,
      "di_cui_genitori_ue": 111.8,
      "di_cui_genitori_extra_ue": 517
     },
     "nati_estero": {
      "totale": 8313.4,
      "nati_ue": 1506.9,
      "nati_extra_ue": 6761.2
     }
    },
    "SE": {
     "anno": 2025,
     "unita": "migliaia",
     "seconda_generazione": {
      "totale": 842.5,
      "un_genitore_nato_paese": 550.3,
      "due_genitori_nati_estero": 292.2,
      "di_cui_genitori_ue": 119.2,
      "di_cui_genitori_extra_ue": 149.4
     },
     "nati_estero": {
      "totale": 1915.5,
      "nati_ue": 440.6,
      "nati_extra_ue": 1412.4
     }
    }
   },
   "nota": "Eurostat non incrocia stato migratorio, cittadinanza e origine dei genitori nella stessa tabella: queste ripartizioni UE/extra-UE valgono per tutta la seconda generazione e per tutti i nati all'estero, cittadini e stranieri insieme. Per la seconda generazione Eurostat classifica il paese di nascita dei genitori così: NAT = un genitore nato nel paese (l'altro all'estero); FOR = entrambi nati all'estero, di cui UE o extra-UE; la quota UE/extra-UE vale quindi solo per chi ha entrambi i genitori nati all'estero."
  },
  "rimpatri_per_nazionalita": {
   "nome": "Ordini di lasciare il territorio e rimpatri verso paesi terzi per paese emittente e cittadinanza: prime dieci nazionalità",
   "nome_en": "Orders to leave and returns to third countries by issuing country and citizenship: top ten nationalities",
   "nome_de": "Ausreiseanordnungen und Rückführungen in Drittstaaten nach ausstellendem Land und Staatsangehörigkeit: zehn häufigste",
   "dataset": "migr_eiord",
   "aggiornato_eurostat": "2026-09-30",
   "fonte": "https://ec.europa.eu/eurostat/databrowser/view/migr_eiord/default/table",
   "valori": {
    "EU27_2020": {
     "anno": 2025,
     "ordini_totale": 486705,
     "rimpatriati_totale": 139270,
     "prime_dieci": [
      {
       "cittadinanza": "DZ",
       "nome": "Algeria",
       "ordini": 45265,
       "rimpatriati": 3135,
       "tasso_pct": 6.9,
       "quota_ordini_pct": 9.3
      },
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "ordini": 28880,
       "rimpatriati": 4655,
       "tasso_pct": 16.1,
       "quota_ordini_pct": 5.9
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 24780,
       "rimpatriati": 13820,
       "tasso_pct": 55.8,
       "quota_ordini_pct": 5.1
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "ordini": 20055,
       "rimpatriati": 8420,
       "tasso_pct": 42,
       "quota_ordini_pct": 4.1
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 18260,
       "rimpatriati": 590,
       "tasso_pct": 3.2,
       "quota_ordini_pct": 3.8
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 16475,
       "rimpatriati": 4015,
       "tasso_pct": 24.4,
       "quota_ordini_pct": 3.4
      },
      {
       "cittadinanza": "TN",
       "nome": "Tunisia",
       "ordini": 16240,
       "rimpatriati": 2885,
       "tasso_pct": 17.8,
       "quota_ordini_pct": 3.3
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 14095,
       "rimpatriati": 10590,
       "tasso_pct": 75.1,
       "quota_ordini_pct": 2.9
      },
      {
       "cittadinanza": "SN",
       "nome": "Senegal",
       "ordini": 13280,
       "rimpatriati": 505,
       "tasso_pct": 3.8,
       "quota_ordini_pct": 2.7
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 13185,
       "rimpatriati": 1925,
       "tasso_pct": 14.6,
       "quota_ordini_pct": 2.7
      }
     ]
    },
    "AT": {
     "anno": 2025,
     "ordini_totale": 11165,
     "rimpatriati_totale": 7305,
     "prime_dieci": [
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 2260,
       "rimpatriati": 1630,
       "tasso_pct": 72.1,
       "quota_ordini_pct": 20.2
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "ordini": 1085,
       "rimpatriati": 765,
       "tasso_pct": 70.5,
       "quota_ordini_pct": 9.7
      },
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "ordini": 765,
       "rimpatriati": 735,
       "tasso_pct": 96.1,
       "quota_ordini_pct": 6.9
      },
      {
       "cittadinanza": "EG",
       "nome": "Egypt",
       "ordini": 665,
       "rimpatriati": 55,
       "tasso_pct": 8.3,
       "quota_ordini_pct": 6
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 505,
       "rimpatriati": 15,
       "tasso_pct": 3,
       "quota_ordini_pct": 4.5
      },
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "ordini": 425,
       "rimpatriati": 100,
       "tasso_pct": 23.5,
       "quota_ordini_pct": 3.8
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 400,
       "rimpatriati": 370,
       "tasso_pct": 92.5,
       "quota_ordini_pct": 3.6
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "ordini": 350,
       "rimpatriati": 190,
       "tasso_pct": 54.3,
       "quota_ordini_pct": 3.1
      },
      {
       "cittadinanza": "IR",
       "nome": "Iran",
       "ordini": 315,
       "rimpatriati": 75,
       "tasso_pct": 23.8,
       "quota_ordini_pct": 2.8
      },
      {
       "cittadinanza": "IQ",
       "nome": "Iraq",
       "ordini": 305,
       "rimpatriati": 120,
       "tasso_pct": 39.3,
       "quota_ordini_pct": 2.7
      }
     ]
    },
    "BE": {
     "anno": 2025,
     "ordini_totale": 25340,
     "rimpatriati_totale": 4955,
     "prime_dieci": [
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "ordini": 3945,
       "rimpatriati": 410,
       "tasso_pct": 10.4,
       "quota_ordini_pct": 15.6
      },
      {
       "cittadinanza": "DZ",
       "nome": "Algeria",
       "ordini": 1975,
       "rimpatriati": 145,
       "tasso_pct": 7.3,
       "quota_ordini_pct": 7.8
      },
      {
       "cittadinanza": "BR",
       "nome": "Brazil",
       "ordini": 1545,
       "rimpatriati": 870,
       "tasso_pct": 56.3,
       "quota_ordini_pct": 6.1
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 1310,
       "rimpatriati": 35,
       "tasso_pct": 2.7,
       "quota_ordini_pct": 5.2
      },
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "ordini": 1235,
       "rimpatriati": 575,
       "tasso_pct": 46.6,
       "quota_ordini_pct": 4.9
      },
      {
       "cittadinanza": "PS",
       "nome": "Palestine*",
       "ordini": 1055,
       "rimpatriati": 10,
       "tasso_pct": 0.9,
       "quota_ordini_pct": 4.2
      },
      {
       "cittadinanza": "CD",
       "nome": "Democratic Republic of the Congo",
       "ordini": 960,
       "rimpatriati": 55,
       "tasso_pct": 5.7,
       "quota_ordini_pct": 3.8
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 900,
       "rimpatriati": 215,
       "tasso_pct": 23.9,
       "quota_ordini_pct": 3.6
      },
      {
       "cittadinanza": "CM",
       "nome": "Cameroon",
       "ordini": 860,
       "rimpatriati": 40,
       "tasso_pct": 4.7,
       "quota_ordini_pct": 3.4
      },
      {
       "cittadinanza": "TN",
       "nome": "Tunisia",
       "ordini": 765,
       "rimpatriati": 70,
       "tasso_pct": 9.2,
       "quota_ordini_pct": 3
      }
     ]
    },
    "BG": {
     "anno": 2025,
     "ordini_totale": 3880,
     "rimpatriati_totale": 1150,
     "prime_dieci": [
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "ordini": 960,
       "rimpatriati": 25,
       "tasso_pct": 2.6,
       "quota_ordini_pct": 24.7
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 945,
       "rimpatriati": 5,
       "tasso_pct": 0.5,
       "quota_ordini_pct": 24.4
      },
      {
       "cittadinanza": "IQ",
       "nome": "Iraq",
       "ordini": 465,
       "rimpatriati": 60,
       "tasso_pct": 12.9,
       "quota_ordini_pct": 12
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "ordini": 440,
       "rimpatriati": 375,
       "tasso_pct": 85.2,
       "quota_ordini_pct": 11.3
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 215,
       "rimpatriati": 220,
       "tasso_pct": 102.3,
       "quota_ordini_pct": 5.5
      },
      {
       "cittadinanza": "IR",
       "nome": "Iran",
       "ordini": 100,
       "rimpatriati": 10,
       "tasso_pct": 10,
       "quota_ordini_pct": 2.6
      },
      {
       "cittadinanza": "PK",
       "nome": "Pakistan",
       "ordini": 80,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 2.1
      },
      {
       "cittadinanza": "EG",
       "nome": "Egypt",
       "ordini": 75,
       "rimpatriati": 10,
       "tasso_pct": 13.3,
       "quota_ordini_pct": 1.9
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "ordini": 65,
       "rimpatriati": 55,
       "tasso_pct": 84.6,
       "quota_ordini_pct": 1.7
      },
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "ordini": 60,
       "rimpatriati": 35,
       "tasso_pct": 58.3,
       "quota_ordini_pct": 1.5
      }
     ]
    },
    "HR": {
     "anno": 2025,
     "ordini_totale": 11330,
     "rimpatriati_totale": 6560,
     "prime_dieci": [
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 2385,
       "rimpatriati": 1925,
       "tasso_pct": 80.7,
       "quota_ordini_pct": 21.1
      },
      {
       "cittadinanza": "NP",
       "nome": "Nepal",
       "ordini": 1055,
       "rimpatriati": 290,
       "tasso_pct": 27.5,
       "quota_ordini_pct": 9.3
      },
      {
       "cittadinanza": "BA",
       "nome": "Bosnia and Herzegovina",
       "ordini": 885,
       "rimpatriati": 590,
       "tasso_pct": 66.7,
       "quota_ordini_pct": 7.8
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 680,
       "rimpatriati": 210,
       "tasso_pct": 30.9,
       "quota_ordini_pct": 6
      },
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "ordini": 650,
       "rimpatriati": 450,
       "tasso_pct": 69.2,
       "quota_ordini_pct": 5.7
      },
      {
       "cittadinanza": "EG",
       "nome": "Egypt",
       "ordini": 555,
       "rimpatriati": 245,
       "tasso_pct": 44.1,
       "quota_ordini_pct": 4.9
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "ordini": 510,
       "rimpatriati": 445,
       "tasso_pct": 87.3,
       "quota_ordini_pct": 4.5
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 445,
       "rimpatriati": 85,
       "tasso_pct": 19.1,
       "quota_ordini_pct": 3.9
      },
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "ordini": 420,
       "rimpatriati": 350,
       "tasso_pct": 83.3,
       "quota_ordini_pct": 3.7
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "ordini": 350,
       "rimpatriati": 35,
       "tasso_pct": 10,
       "quota_ordini_pct": 3.1
      }
     ]
    },
    "CY": {
     "anno": 2025,
     "ordini_totale": 15185,
     "rimpatriati_totale": 10630,
     "prime_dieci": [
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "ordini": 4930,
       "rimpatriati": 4055,
       "tasso_pct": 82.3,
       "quota_ordini_pct": 32.5
      },
      {
       "cittadinanza": "CD",
       "nome": "Democratic Republic of the Congo",
       "ordini": 1585,
       "rimpatriati": 270,
       "tasso_pct": 17,
       "quota_ordini_pct": 10.4
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 1165,
       "rimpatriati": 915,
       "tasso_pct": 78.5,
       "quota_ordini_pct": 7.7
      },
      {
       "cittadinanza": "NG",
       "nome": "Nigeria",
       "ordini": 870,
       "rimpatriati": 845,
       "tasso_pct": 97.1,
       "quota_ordini_pct": 5.7
      },
      {
       "cittadinanza": "NP",
       "nome": "Nepal",
       "ordini": 625,
       "rimpatriati": 480,
       "tasso_pct": 76.8,
       "quota_ordini_pct": 4.1
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 610,
       "rimpatriati": 835,
       "tasso_pct": 136.9,
       "quota_ordini_pct": 4
      },
      {
       "cittadinanza": "CM",
       "nome": "Cameroon",
       "ordini": 595,
       "rimpatriati": 365,
       "tasso_pct": 61.3,
       "quota_ordini_pct": 3.9
      },
      {
       "cittadinanza": "PK",
       "nome": "Pakistan",
       "ordini": 505,
       "rimpatriati": 650,
       "tasso_pct": 128.7,
       "quota_ordini_pct": 3.3
      },
      {
       "cittadinanza": "EG",
       "nome": "Egypt",
       "ordini": 485,
       "rimpatriati": 365,
       "tasso_pct": 75.3,
       "quota_ordini_pct": 3.2
      },
      {
       "cittadinanza": "LK",
       "nome": "Sri Lanka",
       "ordini": 375,
       "rimpatriati": 295,
       "tasso_pct": 78.7,
       "quota_ordini_pct": 2.5
      }
     ]
    },
    "CZ": {
     "anno": 2025,
     "ordini_totale": 5250,
     "rimpatriati_totale": 3180,
     "prime_dieci": [
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "ordini": 1935,
       "rimpatriati": 45,
       "tasso_pct": 2.3,
       "quota_ordini_pct": 36.9
      },
      {
       "cittadinanza": "MD",
       "nome": "Moldova",
       "ordini": 1300,
       "rimpatriati": 1285,
       "tasso_pct": 98.8,
       "quota_ordini_pct": 24.8
      },
      {
       "cittadinanza": "VN",
       "nome": "Viet Nam",
       "ordini": 620,
       "rimpatriati": 610,
       "tasso_pct": 98.4,
       "quota_ordini_pct": 11.8
      },
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "ordini": 340,
       "rimpatriati": 330,
       "tasso_pct": 97.1,
       "quota_ordini_pct": 6.5
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 180,
       "rimpatriati": 145,
       "tasso_pct": 80.6,
       "quota_ordini_pct": 3.4
      },
      {
       "cittadinanza": "KZ",
       "nome": "Kazakhstan",
       "ordini": 120,
       "rimpatriati": 145,
       "tasso_pct": 120.8,
       "quota_ordini_pct": 2.3
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 95,
       "rimpatriati": 70,
       "tasso_pct": 73.7,
       "quota_ordini_pct": 1.8
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "ordini": 70,
       "rimpatriati": 70,
       "tasso_pct": 100,
       "quota_ordini_pct": 1.3
      },
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "ordini": 45,
       "rimpatriati": 55,
       "tasso_pct": 122.2,
       "quota_ordini_pct": 0.9
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 40,
       "rimpatriati": 40,
       "tasso_pct": 100,
       "quota_ordini_pct": 0.8
      }
     ]
    },
    "DK": {
     "anno": 2025,
     "ordini_totale": 2280,
     "rimpatriati_totale": 975,
     "prime_dieci": [
      {
       "cittadinanza": "TH",
       "nome": "Thailand",
       "ordini": 180,
       "rimpatriati": 95,
       "tasso_pct": 52.8,
       "quota_ordini_pct": 7.9
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 160,
       "rimpatriati": 35,
       "tasso_pct": 21.9,
       "quota_ordini_pct": 7
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "ordini": 130,
       "rimpatriati": 45,
       "tasso_pct": 34.6,
       "quota_ordini_pct": 5.7
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "ordini": 115,
       "rimpatriati": 35,
       "tasso_pct": 30.4,
       "quota_ordini_pct": 5
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 110,
       "rimpatriati": 70,
       "tasso_pct": 63.6,
       "quota_ordini_pct": 4.8
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 90,
       "rimpatriati": 15,
       "tasso_pct": 16.7,
       "quota_ordini_pct": 3.9
      },
      {
       "cittadinanza": "IR",
       "nome": "Iran",
       "ordini": 90,
       "rimpatriati": 30,
       "tasso_pct": 33.3,
       "quota_ordini_pct": 3.9
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "ordini": 80,
       "rimpatriati": 15,
       "tasso_pct": 18.8,
       "quota_ordini_pct": 3.5
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "ordini": 80,
       "rimpatriati": 20,
       "tasso_pct": 25,
       "quota_ordini_pct": 3.5
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 70,
       "rimpatriati": 55,
       "tasso_pct": 78.6,
       "quota_ordini_pct": 3.1
      }
     ]
    },
    "EE": {
     "anno": 2025,
     "ordini_totale": 660,
     "rimpatriati_totale": 565,
     "prime_dieci": [
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "ordini": 215,
       "rimpatriati": 200,
       "tasso_pct": 93,
       "quota_ordini_pct": 32.6
      },
      {
       "cittadinanza": "MD",
       "nome": "Moldova",
       "ordini": 60,
       "rimpatriati": 65,
       "tasso_pct": 108.3,
       "quota_ordini_pct": 9.1
      },
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "ordini": 45,
       "rimpatriati": 30,
       "tasso_pct": 66.7,
       "quota_ordini_pct": 6.8
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "ordini": 40,
       "rimpatriati": 15,
       "tasso_pct": 37.5,
       "quota_ordini_pct": 6.1
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 30,
       "rimpatriati": 25,
       "tasso_pct": 83.3,
       "quota_ordini_pct": 4.5
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 20,
       "rimpatriati": 20,
       "tasso_pct": 100,
       "quota_ordini_pct": 3
      },
      {
       "cittadinanza": "CO",
       "nome": "Colombia",
       "ordini": 20,
       "rimpatriati": 20,
       "tasso_pct": 100,
       "quota_ordini_pct": 3
      },
      {
       "cittadinanza": "BY",
       "nome": "Belarus",
       "ordini": 15,
       "rimpatriati": 10,
       "tasso_pct": 66.7,
       "quota_ordini_pct": 2.3
      },
      {
       "cittadinanza": "NG",
       "nome": "Nigeria",
       "ordini": 15,
       "rimpatriati": 15,
       "tasso_pct": 100,
       "quota_ordini_pct": 2.3
      },
      {
       "cittadinanza": "US",
       "nome": "United States",
       "ordini": 15,
       "rimpatriati": 15,
       "tasso_pct": 100,
       "quota_ordini_pct": 2.3
      }
     ]
    },
    "FI": {
     "anno": 2025,
     "ordini_totale": 5070,
     "rimpatriati_totale": 1820,
     "prime_dieci": [
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "ordini": 695,
       "rimpatriati": 235,
       "tasso_pct": 33.8,
       "quota_ordini_pct": 13.7
      },
      {
       "cittadinanza": "IQ",
       "nome": "Iraq",
       "ordini": 315,
       "rimpatriati": 105,
       "tasso_pct": 33.3,
       "quota_ordini_pct": 6.2
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 300,
       "rimpatriati": 120,
       "tasso_pct": 40,
       "quota_ordini_pct": 5.9
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 275,
       "rimpatriati": 80,
       "tasso_pct": 29.1,
       "quota_ordini_pct": 5.4
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 240,
       "rimpatriati": 30,
       "tasso_pct": 12.5,
       "quota_ordini_pct": 4.7
      },
      {
       "cittadinanza": "SO",
       "nome": "Somalia",
       "ordini": 220,
       "rimpatriati": 20,
       "tasso_pct": 9.1,
       "quota_ordini_pct": 4.3
      },
      {
       "cittadinanza": "VN",
       "nome": "Viet Nam",
       "ordini": 200,
       "rimpatriati": 100,
       "tasso_pct": 50,
       "quota_ordini_pct": 3.9
      },
      {
       "cittadinanza": "IR",
       "nome": "Iran",
       "ordini": 190,
       "rimpatriati": 35,
       "tasso_pct": 18.4,
       "quota_ordini_pct": 3.7
      },
      {
       "cittadinanza": "NG",
       "nome": "Nigeria",
       "ordini": 175,
       "rimpatriati": 35,
       "tasso_pct": 20,
       "quota_ordini_pct": 3.5
      },
      {
       "cittadinanza": "XK",
       "nome": "Kosovo*",
       "ordini": 165,
       "rimpatriati": 85,
       "tasso_pct": 51.5,
       "quota_ordini_pct": 3.3
      }
     ]
    },
    "FR": {
     "anno": 2025,
     "ordini_totale": 137550,
     "rimpatriati_totale": 14940,
     "prime_dieci": [
      {
       "cittadinanza": "DZ",
       "nome": "Algeria",
       "ordini": 26215,
       "rimpatriati": 1680,
       "tasso_pct": 6.4,
       "quota_ordini_pct": 19.1
      },
      {
       "cittadinanza": "TN",
       "nome": "Tunisia",
       "ordini": 11295,
       "rimpatriati": 1300,
       "tasso_pct": 11.5,
       "quota_ordini_pct": 8.2
      },
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "ordini": 10260,
       "rimpatriati": 1470,
       "tasso_pct": 14.3,
       "quota_ordini_pct": 7.5
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 5515,
       "rimpatriati": 150,
       "tasso_pct": 2.7,
       "quota_ordini_pct": 4
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 5370,
       "rimpatriati": 955,
       "tasso_pct": 17.8,
       "quota_ordini_pct": 3.9
      },
      {
       "cittadinanza": "CI",
       "nome": "Côte d’Ivoire",
       "ordini": 4560,
       "rimpatriati": 285,
       "tasso_pct": 6.3,
       "quota_ordini_pct": 3.3
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 4175,
       "rimpatriati": 1515,
       "tasso_pct": 36.3,
       "quota_ordini_pct": 3
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 3485,
       "rimpatriati": 30,
       "tasso_pct": 0.9,
       "quota_ordini_pct": 2.5
      },
      {
       "cittadinanza": "GN",
       "nome": "Guinea",
       "ordini": 3440,
       "rimpatriati": 165,
       "tasso_pct": 4.8,
       "quota_ordini_pct": 2.5
      },
      {
       "cittadinanza": "CD",
       "nome": "Democratic Republic of the Congo",
       "ordini": 3400,
       "rimpatriati": 75,
       "tasso_pct": 2.2,
       "quota_ordini_pct": 2.5
      }
     ]
    },
    "DE": {
     "anno": 2025,
     "ordini_totale": 55240,
     "rimpatriati_totale": 29295,
     "prime_dieci": [
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 7570,
       "rimpatriati": 6650,
       "tasso_pct": 87.8,
       "quota_ordini_pct": 13.7
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "ordini": 7440,
       "rimpatriati": 2290,
       "tasso_pct": 30.8,
       "quota_ordini_pct": 13.5
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 4920,
       "rimpatriati": 135,
       "tasso_pct": 2.7,
       "quota_ordini_pct": 8.9
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "ordini": 3030,
       "rimpatriati": 1375,
       "tasso_pct": 45.4,
       "quota_ordini_pct": 5.5
      },
      {
       "cittadinanza": "IQ",
       "nome": "Iraq",
       "ordini": 1870,
       "rimpatriati": 1590,
       "tasso_pct": 85,
       "quota_ordini_pct": 3.4
      },
      {
       "cittadinanza": "DZ",
       "nome": "Algeria",
       "ordini": 1710,
       "rimpatriati": 710,
       "tasso_pct": 41.5,
       "quota_ordini_pct": 3.1
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 1395,
       "rimpatriati": 2805,
       "tasso_pct": 201.1,
       "quota_ordini_pct": 2.5
      },
      {
       "cittadinanza": "SO",
       "nome": "Somalia",
       "ordini": 1245,
       "rimpatriati": 75,
       "tasso_pct": 6,
       "quota_ordini_pct": 2.3
      },
      {
       "cittadinanza": "VN",
       "nome": "Viet Nam",
       "ordini": 1180,
       "rimpatriati": 175,
       "tasso_pct": 14.8,
       "quota_ordini_pct": 2.1
      },
      {
       "cittadinanza": "IR",
       "nome": "Iran",
       "ordini": 1170,
       "rimpatriati": 235,
       "tasso_pct": 20.1,
       "quota_ordini_pct": 2.1
      }
     ]
    },
    "EL": {
     "anno": 2025,
     "ordini_totale": 26635,
     "rimpatriati_totale": 5050,
     "prime_dieci": [
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 4505,
       "rimpatriati": 5,
       "tasso_pct": 0.1,
       "quota_ordini_pct": 16.9
      },
      {
       "cittadinanza": "EG",
       "nome": "Egypt",
       "ordini": 3600,
       "rimpatriati": 255,
       "tasso_pct": 7.1,
       "quota_ordini_pct": 13.5
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "ordini": 2575,
       "rimpatriati": 70,
       "tasso_pct": 2.7,
       "quota_ordini_pct": 9.7
      },
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "ordini": 2210,
       "rimpatriati": 1805,
       "tasso_pct": 81.7,
       "quota_ordini_pct": 8.3
      },
      {
       "cittadinanza": "SD",
       "nome": "Sudan",
       "ordini": 2130,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 8
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 1655,
       "rimpatriati": 1515,
       "tasso_pct": 91.5,
       "quota_ordini_pct": 6.2
      },
      {
       "cittadinanza": "SO",
       "nome": "Somalia",
       "ordini": 1515,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 5.7
      },
      {
       "cittadinanza": "PK",
       "nome": "Pakistan",
       "ordini": 1140,
       "rimpatriati": 440,
       "tasso_pct": 38.6,
       "quota_ordini_pct": 4.3
      },
      {
       "cittadinanza": "ER",
       "nome": "Eritrea",
       "ordini": 855,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 3.2
      },
      {
       "cittadinanza": "YE",
       "nome": "Yemen",
       "ordini": 855,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 3.2
      }
     ]
    },
    "HU": {
     "anno": 2025,
     "ordini_totale": 9080,
     "rimpatriati_totale": 4135,
     "prime_dieci": [
      {
       "cittadinanza": "VN",
       "nome": "Viet Nam",
       "ordini": 2735,
       "rimpatriati": 210,
       "tasso_pct": 7.7,
       "quota_ordini_pct": 30.1
      },
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "ordini": 905,
       "rimpatriati": 885,
       "tasso_pct": 97.8,
       "quota_ordini_pct": 10
      },
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "ordini": 680,
       "rimpatriati": 655,
       "tasso_pct": 96.3,
       "quota_ordini_pct": 7.5
      },
      {
       "cittadinanza": "PH",
       "nome": "Philippines",
       "ordini": 510,
       "rimpatriati": 90,
       "tasso_pct": 17.6,
       "quota_ordini_pct": 5.6
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 390,
       "rimpatriati": 120,
       "tasso_pct": 30.8,
       "quota_ordini_pct": 4.3
      },
      {
       "cittadinanza": "KG",
       "nome": "Kyrgyzstan",
       "ordini": 325,
       "rimpatriati": 150,
       "tasso_pct": 46.2,
       "quota_ordini_pct": 3.6
      },
      {
       "cittadinanza": "MN",
       "nome": "Mongolia",
       "ordini": 325,
       "rimpatriati": 150,
       "tasso_pct": 46.2,
       "quota_ordini_pct": 3.6
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 315,
       "rimpatriati": 180,
       "tasso_pct": 57.1,
       "quota_ordini_pct": 3.5
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "ordini": 315,
       "rimpatriati": 135,
       "tasso_pct": 42.9,
       "quota_ordini_pct": 3.5
      },
      {
       "cittadinanza": "MK",
       "nome": "North Macedonia",
       "ordini": 285,
       "rimpatriati": 290,
       "tasso_pct": 101.8,
       "quota_ordini_pct": 3.1
      }
     ]
    },
    "IE": {
     "anno": 2025,
     "ordini_totale": 6260,
     "rimpatriati_totale": 2030,
     "prime_dieci": [
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 1220,
       "rimpatriati": 525,
       "tasso_pct": 43,
       "quota_ordini_pct": 19.5
      },
      {
       "cittadinanza": "BR",
       "nome": "Brazil",
       "ordini": 810,
       "rimpatriati": 410,
       "tasso_pct": 50.6,
       "quota_ordini_pct": 12.9
      },
      {
       "cittadinanza": "DZ",
       "nome": "Algeria",
       "ordini": 580,
       "rimpatriati": 50,
       "tasso_pct": 8.6,
       "quota_ordini_pct": 9.3
      },
      {
       "cittadinanza": "NG",
       "nome": "Nigeria",
       "ordini": 440,
       "rimpatriati": 100,
       "tasso_pct": 22.7,
       "quota_ordini_pct": 7
      },
      {
       "cittadinanza": "JO",
       "nome": "Jordan",
       "ordini": 370,
       "rimpatriati": 310,
       "tasso_pct": 83.8,
       "quota_ordini_pct": 5.9
      },
      {
       "cittadinanza": "PK",
       "nome": "Pakistan",
       "ordini": 350,
       "rimpatriati": 60,
       "tasso_pct": 17.1,
       "quota_ordini_pct": 5.6
      },
      {
       "cittadinanza": "ZA",
       "nome": "South Africa",
       "ordini": 245,
       "rimpatriati": 65,
       "tasso_pct": 26.5,
       "quota_ordini_pct": 3.9
      },
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "ordini": 215,
       "rimpatriati": 35,
       "tasso_pct": 16.3,
       "quota_ordini_pct": 3.4
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 190,
       "rimpatriati": 30,
       "tasso_pct": 15.8,
       "quota_ordini_pct": 3
      },
      {
       "cittadinanza": "EG",
       "nome": "Egypt",
       "ordini": 170,
       "rimpatriati": 15,
       "tasso_pct": 8.8,
       "quota_ordini_pct": 2.7
      }
     ]
    },
    "IT": {
     "anno": 2025,
     "ordini_totale": 21295,
     "rimpatriati_totale": 4780,
     "prime_dieci": [
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "ordini": 3570,
       "rimpatriati": 335,
       "tasso_pct": 9.4,
       "quota_ordini_pct": 16.8
      },
      {
       "cittadinanza": "TN",
       "nome": "Tunisia",
       "ordini": 2425,
       "rimpatriati": 705,
       "tasso_pct": 29.1,
       "quota_ordini_pct": 11.4
      },
      {
       "cittadinanza": "DZ",
       "nome": "Algeria",
       "ordini": 2055,
       "rimpatriati": 85,
       "tasso_pct": 4.1,
       "quota_ordini_pct": 9.7
      },
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "ordini": 1495,
       "rimpatriati": 860,
       "tasso_pct": 57.5,
       "quota_ordini_pct": 7
      },
      {
       "cittadinanza": "EG",
       "nome": "Egypt",
       "ordini": 1155,
       "rimpatriati": 575,
       "tasso_pct": 49.8,
       "quota_ordini_pct": 5.4
      },
      {
       "cittadinanza": "PE",
       "nome": "Peru",
       "ordini": 1100,
       "rimpatriati": 240,
       "tasso_pct": 21.8,
       "quota_ordini_pct": 5.2
      },
      {
       "cittadinanza": "NG",
       "nome": "Nigeria",
       "ordini": 890,
       "rimpatriati": 275,
       "tasso_pct": 30.9,
       "quota_ordini_pct": 4.2
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "ordini": 845,
       "rimpatriati": 130,
       "tasso_pct": 15.4,
       "quota_ordini_pct": 4
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 595,
       "rimpatriati": 250,
       "tasso_pct": 42,
       "quota_ordini_pct": 2.8
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 555,
       "rimpatriati": 140,
       "tasso_pct": 25.2,
       "quota_ordini_pct": 2.6
      }
     ]
    },
    "LV": {
     "anno": 2025,
     "ordini_totale": 2640,
     "rimpatriati_totale": 2280,
     "prime_dieci": [
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "ordini": 715,
       "rimpatriati": 680,
       "tasso_pct": 95.1,
       "quota_ordini_pct": 27.1
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "ordini": 695,
       "rimpatriati": 670,
       "tasso_pct": 96.4,
       "quota_ordini_pct": 26.3
      },
      {
       "cittadinanza": "TJ",
       "nome": "Tajikistan",
       "ordini": 265,
       "rimpatriati": 210,
       "tasso_pct": 79.2,
       "quota_ordini_pct": 10
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 175,
       "rimpatriati": 95,
       "tasso_pct": 54.3,
       "quota_ordini_pct": 6.6
      },
      {
       "cittadinanza": "MD",
       "nome": "Moldova",
       "ordini": 115,
       "rimpatriati": 110,
       "tasso_pct": 95.7,
       "quota_ordini_pct": 4.4
      },
      {
       "cittadinanza": "BY",
       "nome": "Belarus",
       "ordini": 110,
       "rimpatriati": 105,
       "tasso_pct": 95.5,
       "quota_ordini_pct": 4.2
      },
      {
       "cittadinanza": "KZ",
       "nome": "Kazakhstan",
       "ordini": 75,
       "rimpatriati": 65,
       "tasso_pct": 86.7,
       "quota_ordini_pct": 2.8
      },
      {
       "cittadinanza": "KG",
       "nome": "Kyrgyzstan",
       "ordini": 75,
       "rimpatriati": 80,
       "tasso_pct": 106.7,
       "quota_ordini_pct": 2.8
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "ordini": 55,
       "rimpatriati": 45,
       "tasso_pct": 81.8,
       "quota_ordini_pct": 2.1
      },
      {
       "cittadinanza": "AZ",
       "nome": "Azerbaijan",
       "ordini": 40,
       "rimpatriati": 35,
       "tasso_pct": 87.5,
       "quota_ordini_pct": 1.5
      }
     ]
    },
    "LT": {
     "anno": 2025,
     "ordini_totale": 4900,
     "rimpatriati_totale": 4545,
     "prime_dieci": [
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "ordini": 1795,
       "rimpatriati": 1795,
       "tasso_pct": 100,
       "quota_ordini_pct": 36.6
      },
      {
       "cittadinanza": "BY",
       "nome": "Belarus",
       "ordini": 835,
       "rimpatriati": 815,
       "tasso_pct": 97.6,
       "quota_ordini_pct": 17
      },
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "ordini": 470,
       "rimpatriati": 420,
       "tasso_pct": 89.4,
       "quota_ordini_pct": 9.6
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "ordini": 225,
       "rimpatriati": 145,
       "tasso_pct": 64.4,
       "quota_ordini_pct": 4.6
      },
      {
       "cittadinanza": "KG",
       "nome": "Kyrgyzstan",
       "ordini": 200,
       "rimpatriati": 205,
       "tasso_pct": 102.5,
       "quota_ordini_pct": 4.1
      },
      {
       "cittadinanza": "TJ",
       "nome": "Tajikistan",
       "ordini": 185,
       "rimpatriati": 170,
       "tasso_pct": 91.9,
       "quota_ordini_pct": 3.8
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 185,
       "rimpatriati": 145,
       "tasso_pct": 78.4,
       "quota_ordini_pct": 3.8
      },
      {
       "cittadinanza": "AZ",
       "nome": "Azerbaijan",
       "ordini": 170,
       "rimpatriati": 150,
       "tasso_pct": 88.2,
       "quota_ordini_pct": 3.5
      },
      {
       "cittadinanza": "KZ",
       "nome": "Kazakhstan",
       "ordini": 130,
       "rimpatriati": 135,
       "tasso_pct": 103.8,
       "quota_ordini_pct": 2.7
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 120,
       "rimpatriati": 95,
       "tasso_pct": 79.2,
       "quota_ordini_pct": 2.4
      }
     ]
    },
    "LU": {
     "anno": 2025,
     "ordini_totale": 1340,
     "rimpatriati_totale": 370,
     "prime_dieci": [
      {
       "cittadinanza": "VE",
       "nome": "Venezuela",
       "ordini": 135,
       "rimpatriati": 15,
       "tasso_pct": 11.1,
       "quota_ordini_pct": 10.1
      },
      {
       "cittadinanza": "DZ",
       "nome": "Algeria",
       "ordini": 80,
       "rimpatriati": 15,
       "tasso_pct": 18.8,
       "quota_ordini_pct": 6
      },
      {
       "cittadinanza": "CM",
       "nome": "Cameroon",
       "ordini": 65,
       "rimpatriati": 5,
       "tasso_pct": 7.7,
       "quota_ordini_pct": 4.9
      },
      {
       "cittadinanza": "CO",
       "nome": "Colombia",
       "ordini": 65,
       "rimpatriati": 25,
       "tasso_pct": 38.5,
       "quota_ordini_pct": 4.9
      },
      {
       "cittadinanza": "ER",
       "nome": "Eritrea",
       "ordini": 55,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 4.1
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 50,
       "rimpatriati": 10,
       "tasso_pct": 20,
       "quota_ordini_pct": 3.7
      },
      {
       "cittadinanza": "BR",
       "nome": "Brazil",
       "ordini": 50,
       "rimpatriati": 25,
       "tasso_pct": 50,
       "quota_ordini_pct": 3.7
      },
      {
       "cittadinanza": "TN",
       "nome": "Tunisia",
       "ordini": 45,
       "rimpatriati": 10,
       "tasso_pct": 22.2,
       "quota_ordini_pct": 3.4
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "ordini": 45,
       "rimpatriati": 30,
       "tasso_pct": 66.7,
       "quota_ordini_pct": 3.4
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 45,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 3.4
      }
     ]
    },
    "MT": {
     "anno": 2025,
     "ordini_totale": 1090,
     "rimpatriati_totale": 1065,
     "prime_dieci": [
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 160,
       "rimpatriati": 145,
       "tasso_pct": 90.6,
       "quota_ordini_pct": 14.7
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 145,
       "rimpatriati": 140,
       "tasso_pct": 96.6,
       "quota_ordini_pct": 13.3
      },
      {
       "cittadinanza": "CO",
       "nome": "Colombia",
       "ordini": 90,
       "rimpatriati": 90,
       "tasso_pct": 100,
       "quota_ordini_pct": 8.3
      },
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "ordini": 75,
       "rimpatriati": 75,
       "tasso_pct": 100,
       "quota_ordini_pct": 6.9
      },
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "ordini": 60,
       "rimpatriati": 55,
       "tasso_pct": 91.7,
       "quota_ordini_pct": 5.5
      },
      {
       "cittadinanza": "UK",
       "nome": "United Kingdom",
       "ordini": 55,
       "rimpatriati": 60,
       "tasso_pct": 109.1,
       "quota_ordini_pct": 5
      },
      {
       "cittadinanza": "PH",
       "nome": "Philippines",
       "ordini": 50,
       "rimpatriati": 50,
       "tasso_pct": 100,
       "quota_ordini_pct": 4.6
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 45,
       "rimpatriati": 45,
       "tasso_pct": 100,
       "quota_ordini_pct": 4.1
      },
      {
       "cittadinanza": "EG",
       "nome": "Egypt",
       "ordini": 40,
       "rimpatriati": 40,
       "tasso_pct": 100,
       "quota_ordini_pct": 3.7
      },
      {
       "cittadinanza": "LY",
       "nome": "Libya",
       "ordini": 35,
       "rimpatriati": 35,
       "tasso_pct": 100,
       "quota_ordini_pct": 3.2
      }
     ]
    },
    "NL": {
     "anno": 2025,
     "ordini_totale": 31230,
     "rimpatriati_totale": 4825,
     "prime_dieci": [
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 3095,
       "rimpatriati": 520,
       "tasso_pct": 16.8,
       "quota_ordini_pct": 9.9
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 2630,
       "rimpatriati": 100,
       "tasso_pct": 3.8,
       "quota_ordini_pct": 8.4
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "ordini": 1405,
       "rimpatriati": 195,
       "tasso_pct": 13.9,
       "quota_ordini_pct": 4.5
      },
      {
       "cittadinanza": "US",
       "nome": "United States",
       "ordini": 1355,
       "rimpatriati": 170,
       "tasso_pct": 12.5,
       "quota_ordini_pct": 4.3
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "ordini": 1195,
       "rimpatriati": 20,
       "tasso_pct": 1.7,
       "quota_ordini_pct": 3.8
      },
      {
       "cittadinanza": "CO",
       "nome": "Colombia",
       "ordini": 1000,
       "rimpatriati": 280,
       "tasso_pct": 28,
       "quota_ordini_pct": 3.2
      },
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "ordini": 975,
       "rimpatriati": 200,
       "tasso_pct": 20.5,
       "quota_ordini_pct": 3.1
      },
      {
       "cittadinanza": "SR",
       "nome": "Suriname",
       "ordini": 970,
       "rimpatriati": 150,
       "tasso_pct": 15.5,
       "quota_ordini_pct": 3.1
      },
      {
       "cittadinanza": "NG",
       "nome": "Nigeria",
       "ordini": 845,
       "rimpatriati": 95,
       "tasso_pct": 11.2,
       "quota_ordini_pct": 2.7
      },
      {
       "cittadinanza": "UK",
       "nome": "United Kingdom",
       "ordini": 825,
       "rimpatriati": 120,
       "tasso_pct": 14.5,
       "quota_ordini_pct": 2.6
      }
     ]
    },
    "PL": {
     "anno": 2025,
     "ordini_totale": 14760,
     "rimpatriati_totale": 9690,
     "prime_dieci": [
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 2245,
       "rimpatriati": 1965,
       "tasso_pct": 87.5,
       "quota_ordini_pct": 15.2
      },
      {
       "cittadinanza": "CO",
       "nome": "Colombia",
       "ordini": 1665,
       "rimpatriati": 630,
       "tasso_pct": 37.8,
       "quota_ordini_pct": 11.3
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "ordini": 1620,
       "rimpatriati": 1250,
       "tasso_pct": 77.2,
       "quota_ordini_pct": 11
      },
      {
       "cittadinanza": "BY",
       "nome": "Belarus",
       "ordini": 1435,
       "rimpatriati": 1305,
       "tasso_pct": 90.9,
       "quota_ordini_pct": 9.7
      },
      {
       "cittadinanza": "MD",
       "nome": "Moldova",
       "ordini": 1325,
       "rimpatriati": 1150,
       "tasso_pct": 86.8,
       "quota_ordini_pct": 9
      },
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "ordini": 695,
       "rimpatriati": 465,
       "tasso_pct": 66.9,
       "quota_ordini_pct": 4.7
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 680,
       "rimpatriati": 430,
       "tasso_pct": 63.2,
       "quota_ordini_pct": 4.6
      },
      {
       "cittadinanza": "RU",
       "nome": "Russia",
       "ordini": 545,
       "rimpatriati": 405,
       "tasso_pct": 74.3,
       "quota_ordini_pct": 3.7
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 370,
       "rimpatriati": 10,
       "tasso_pct": 2.7,
       "quota_ordini_pct": 2.5
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 260,
       "rimpatriati": 210,
       "tasso_pct": 80.8,
       "quota_ordini_pct": 1.8
      }
     ]
    },
    "PT": {
     "anno": 2025,
     "ordini_totale": 18245,
     "rimpatriati_totale": 825,
     "prime_dieci": [
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 4015,
       "rimpatriati": 15,
       "tasso_pct": 0.4,
       "quota_ordini_pct": 22
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 2945,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 16.1
      },
      {
       "cittadinanza": "BR",
       "nome": "Brazil",
       "ordini": 2515,
       "rimpatriati": 605,
       "tasso_pct": 24.1,
       "quota_ordini_pct": 13.8
      },
      {
       "cittadinanza": "PK",
       "nome": "Pakistan",
       "ordini": 1900,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 10.4
      },
      {
       "cittadinanza": "NG",
       "nome": "Nigeria",
       "ordini": 1095,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 6
      },
      {
       "cittadinanza": "DZ",
       "nome": "Algeria",
       "ordini": 1050,
       "rimpatriati": 5,
       "tasso_pct": 0.5,
       "quota_ordini_pct": 5.8
      },
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "ordini": 735,
       "rimpatriati": 5,
       "tasso_pct": 0.7,
       "quota_ordini_pct": 4
      },
      {
       "cittadinanza": "NP",
       "nome": "Nepal",
       "ordini": 590,
       "rimpatriati": 5,
       "tasso_pct": 0.8,
       "quota_ordini_pct": 3.2
      },
      {
       "cittadinanza": "GH",
       "nome": "Ghana",
       "ordini": 295,
       "rimpatriati": 5,
       "tasso_pct": 1.7,
       "quota_ordini_pct": 1.6
      },
      {
       "cittadinanza": "AO",
       "nome": "Angola",
       "ordini": 290,
       "rimpatriati": 20,
       "tasso_pct": 6.9,
       "quota_ordini_pct": 1.6
      }
     ]
    },
    "RO": {
     "anno": 2025,
     "ordini_totale": 2860,
     "rimpatriati_totale": 775,
     "prime_dieci": [
      {
       "cittadinanza": "NP",
       "nome": "Nepal",
       "ordini": 460,
       "rimpatriati": 150,
       "tasso_pct": 32.6,
       "quota_ordini_pct": 16.1
      },
      {
       "cittadinanza": "LK",
       "nome": "Sri Lanka",
       "ordini": 395,
       "rimpatriati": 135,
       "tasso_pct": 34.2,
       "quota_ordini_pct": 13.8
      },
      {
       "cittadinanza": "MD",
       "nome": "Moldova",
       "ordini": 295,
       "rimpatriati": 40,
       "tasso_pct": 13.6,
       "quota_ordini_pct": 10.3
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 170,
       "rimpatriati": 80,
       "tasso_pct": 47.1,
       "quota_ordini_pct": 5.9
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 160,
       "rimpatriati": 20,
       "tasso_pct": 12.5,
       "quota_ordini_pct": 5.6
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 145,
       "rimpatriati": 30,
       "tasso_pct": 20.7,
       "quota_ordini_pct": 5.1
      },
      {
       "cittadinanza": "EG",
       "nome": "Egypt",
       "ordini": 115,
       "rimpatriati": 25,
       "tasso_pct": 21.7,
       "quota_ordini_pct": 4
      },
      {
       "cittadinanza": "VN",
       "nome": "Viet Nam",
       "ordini": 115,
       "rimpatriati": 30,
       "tasso_pct": 26.1,
       "quota_ordini_pct": 4
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "ordini": 75,
       "rimpatriati": 30,
       "tasso_pct": 40,
       "quota_ordini_pct": 2.6
      },
      {
       "cittadinanza": "ET",
       "nome": "Ethiopia",
       "ordini": 65,
       "rimpatriati": 35,
       "tasso_pct": 53.8,
       "quota_ordini_pct": 2.3
      }
     ]
    },
    "SK": {
     "anno": 2025,
     "ordini_totale": 500,
     "rimpatriati_totale": 395,
     "prime_dieci": [
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "ordini": 45,
       "rimpatriati": 50,
       "tasso_pct": 111.1,
       "quota_ordini_pct": 9
      },
      {
       "cittadinanza": "UA",
       "nome": "Ukraine",
       "ordini": 45,
       "rimpatriati": 35,
       "tasso_pct": 77.8,
       "quota_ordini_pct": 9
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 45,
       "rimpatriati": 25,
       "tasso_pct": 55.6,
       "quota_ordini_pct": 9
      },
      {
       "cittadinanza": "VN",
       "nome": "Viet Nam",
       "ordini": 45,
       "rimpatriati": 30,
       "tasso_pct": 66.7,
       "quota_ordini_pct": 9
      },
      {
       "cittadinanza": "GE",
       "nome": "Georgia",
       "ordini": 40,
       "rimpatriati": 30,
       "tasso_pct": 75,
       "quota_ordini_pct": 8
      },
      {
       "cittadinanza": "MD",
       "nome": "Moldova",
       "ordini": 35,
       "rimpatriati": 30,
       "tasso_pct": 85.7,
       "quota_ordini_pct": 7
      },
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "ordini": 30,
       "rimpatriati": 15,
       "tasso_pct": 50,
       "quota_ordini_pct": 6
      },
      {
       "cittadinanza": "PH",
       "nome": "Philippines",
       "ordini": 20,
       "rimpatriati": 15,
       "tasso_pct": 75,
       "quota_ordini_pct": 4
      },
      {
       "cittadinanza": "MK",
       "nome": "North Macedonia",
       "ordini": 15,
       "rimpatriati": 10,
       "tasso_pct": 66.7,
       "quota_ordini_pct": 3
      },
      {
       "cittadinanza": "BR",
       "nome": "Brazil",
       "ordini": 15,
       "rimpatriati": 10,
       "tasso_pct": 66.7,
       "quota_ordini_pct": 3
      }
     ]
    },
    "SI": {
     "anno": 2025,
     "ordini_totale": 880,
     "rimpatriati_totale": 175,
     "prime_dieci": [
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 140,
       "rimpatriati": 60,
       "tasso_pct": 42.9,
       "quota_ordini_pct": 15.9
      },
      {
       "cittadinanza": "RS",
       "nome": "Serbia",
       "ordini": 80,
       "rimpatriati": 10,
       "tasso_pct": 12.5,
       "quota_ordini_pct": 9.1
      },
      {
       "cittadinanza": "XK",
       "nome": "Kosovo*",
       "ordini": 70,
       "rimpatriati": 10,
       "tasso_pct": 14.3,
       "quota_ordini_pct": 8
      },
      {
       "cittadinanza": "AL",
       "nome": "Albania",
       "ordini": 65,
       "rimpatriati": 5,
       "tasso_pct": 7.7,
       "quota_ordini_pct": 7.4
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 65,
       "rimpatriati": 5,
       "tasso_pct": 7.7,
       "quota_ordini_pct": 7.4
      },
      {
       "cittadinanza": "BA",
       "nome": "Bosnia and Herzegovina",
       "ordini": 50,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 5.7
      },
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "ordini": 50,
       "rimpatriati": 5,
       "tasso_pct": 10,
       "quota_ordini_pct": 5.7
      },
      {
       "cittadinanza": "CN",
       "nome": "China",
       "ordini": 45,
       "rimpatriati": 5,
       "tasso_pct": 11.1,
       "quota_ordini_pct": 5.1
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 45,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 5.1
      },
      {
       "cittadinanza": "MK",
       "nome": "North Macedonia",
       "ordini": 40,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 4.5
      }
     ]
    },
    "ES": {
     "anno": 2025,
     "ordini_totale": 53700,
     "rimpatriati_totale": 5705,
     "prime_dieci": [
      {
       "cittadinanza": "DZ",
       "nome": "Algeria",
       "ordini": 10270,
       "rimpatriati": 30,
       "tasso_pct": 0.3,
       "quota_ordini_pct": 19.1
      },
      {
       "cittadinanza": "SN",
       "nome": "Senegal",
       "ordini": 8935,
       "rimpatriati": 135,
       "tasso_pct": 1.5,
       "quota_ordini_pct": 16.6
      },
      {
       "cittadinanza": "ML",
       "nome": "Mali",
       "ordini": 8550,
       "rimpatriati": 5,
       "tasso_pct": 0.1,
       "quota_ordini_pct": 15.9
      },
      {
       "cittadinanza": "MA",
       "nome": "Morocco",
       "ordini": 5985,
       "rimpatriati": 905,
       "tasso_pct": 15.1,
       "quota_ordini_pct": 11.1
      },
      {
       "cittadinanza": "GN",
       "nome": "Guinea",
       "ordini": 3760,
       "rimpatriati": 10,
       "tasso_pct": 0.3,
       "quota_ordini_pct": 7
      },
      {
       "cittadinanza": "CO",
       "nome": "Colombia",
       "ordini": 3430,
       "rimpatriati": 1885,
       "tasso_pct": 55,
       "quota_ordini_pct": 6.4
      },
      {
       "cittadinanza": "GM",
       "nome": "Gambia, The",
       "ordini": 2585,
       "rimpatriati": 15,
       "tasso_pct": 0.6,
       "quota_ordini_pct": 4.8
      },
      {
       "cittadinanza": "SO",
       "nome": "Somalia",
       "ordini": 1710,
       "rimpatriati": 0,
       "tasso_pct": 0,
       "quota_ordini_pct": 3.2
      },
      {
       "cittadinanza": "MR",
       "nome": "Mauritania",
       "ordini": 1005,
       "rimpatriati": 5,
       "tasso_pct": 0.5,
       "quota_ordini_pct": 1.9
      },
      {
       "cittadinanza": "PE",
       "nome": "Peru",
       "ordini": 755,
       "rimpatriati": 615,
       "tasso_pct": 81.5,
       "quota_ordini_pct": 1.4
      }
     ]
    },
    "SE": {
     "anno": 2025,
     "ordini_totale": 18340,
     "rimpatriati_totale": 11250,
     "prime_dieci": [
      {
       "cittadinanza": "PK",
       "nome": "Pakistan",
       "ordini": 1240,
       "rimpatriati": 425,
       "tasso_pct": 34.3,
       "quota_ordini_pct": 6.8
      },
      {
       "cittadinanza": "IN",
       "nome": "India",
       "ordini": 815,
       "rimpatriati": 505,
       "tasso_pct": 62,
       "quota_ordini_pct": 4.4
      },
      {
       "cittadinanza": "IQ",
       "nome": "Iraq",
       "ordini": 800,
       "rimpatriati": 530,
       "tasso_pct": 66.3,
       "quota_ordini_pct": 4.4
      },
      {
       "cittadinanza": "IR",
       "nome": "Iran",
       "ordini": 770,
       "rimpatriati": 350,
       "tasso_pct": 45.5,
       "quota_ordini_pct": 4.2
      },
      {
       "cittadinanza": "UZ",
       "nome": "Uzbekistan",
       "ordini": 695,
       "rimpatriati": 850,
       "tasso_pct": 122.3,
       "quota_ordini_pct": 3.8
      },
      {
       "cittadinanza": "AF",
       "nome": "Afghanistan",
       "ordini": 670,
       "rimpatriati": 50,
       "tasso_pct": 7.5,
       "quota_ordini_pct": 3.7
      },
      {
       "cittadinanza": "TR",
       "nome": "Türkiye",
       "ordini": 625,
       "rimpatriati": 530,
       "tasso_pct": 84.8,
       "quota_ordini_pct": 3.4
      },
      {
       "cittadinanza": "SY",
       "nome": "Syria",
       "ordini": 580,
       "rimpatriati": 135,
       "tasso_pct": 23.3,
       "quota_ordini_pct": 3.2
      },
      {
       "cittadinanza": "BD",
       "nome": "Bangladesh",
       "ordini": 555,
       "rimpatriati": 195,
       "tasso_pct": 35.1,
       "quota_ordini_pct": 3
      },
      {
       "cittadinanza": "MN",
       "nome": "Mongolia",
       "ordini": 505,
       "rimpatriati": 415,
       "tasso_pct": 82.2,
       "quota_ordini_pct": 2.8
      }
     ]
    }
   },
   "aggiornato_eurostat_rimpatri": "2026-09-25",
   "nota": "Ordini (migr_eiord) e rimpatriati verso paesi terzi (migr_eirtn, c_dest THRD) per paese emittente e cittadinanza, arrotondati a 5. Le prime dieci sono per numero di ordini; il tasso è rimpatriati/ordini dello stesso anno (coorti diverse, può superare il 100%). Aggregati e sconosciuti esclusi dalla classifica."
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
