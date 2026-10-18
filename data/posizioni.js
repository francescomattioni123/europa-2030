// Posizioni dei governi UE27 sui dossier di dossier.js (v2, passo 1). Le usa il motore del Consiglio in consiglio.js.
// governi.<SIGLA>: governo in carica. nuovi.<SIGLA>:<famiglia>: governo che lo scenario porta al potere (voto dei suoi eurodeputati o dichiarazione del partito).
// voto: favorevole | contrario | astensione | condizionato | opt_out | da_verificare. confidenza: alta | media | bassa (fonte obbligatoria con alta e media).
// esito_voluto_destra: esito che il blocco di destra vuole sull'atto descritto in "atto" (passa | bloccato).
// Un governo assente da "governi" è trattato come da_verificare. Non inventare posizioni: senza evidenza la voce resta assente.
window.POSIZIONI = {
 "aggiornato": "2026-10-17",
 "dossier": {
  "rimpatri": {
   "esito_voluto_destra": "passa",
   "atto": "Adozione del regolamento sul sistema comune europeo dei rimpatri (2025/0059 COD)",
   "atto_en": "Adoption of the regulation establishing a common EU system for returns (2025/0059 COD)",
   "atto_de": "Annahme der Verordnung über ein gemeinsames EU-Rückkehrsystem (2025/0059 COD)",
   "voto_reale": {
    "data": "2026-10-01",
    "esito": "Adottato a maggioranza qualificata: 23 favorevoli, 1 contrario (ES), 1 astenuto (BE); DK e IE non partecipanti",
    "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf"
   },
   "governi": {
    "AT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "BE": {
     "voto": "astensione",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Astensione sull'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Abstained on adoption in the Council on 1 October 2026.",
     "nota_de": "Enthielt sich bei der Annahme im Rat am 1. Oktober 2026."
    },
    "BG": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "CY": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "CZ": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "DE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "DK": {
     "voto": "opt_out",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Non ha partecipato al voto in virtù dell'opt-out in materia di giustizia e affari interni.",
     "nota_en": "Did not take part in the vote under its justice and home affairs opt-out.",
     "nota_de": "Nahm aufgrund seines Opt-outs im Bereich Justiz und Inneres nicht an der Abstimmung teil."
    },
    "EE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "ES": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto contrario all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted against adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 gegen die Annahme."
    },
    "FI": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "FR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "GR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "HR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "HU": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "IE": {
     "voto": "opt_out",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Non ha partecipato al voto in virtù dell'opt-out in materia di giustizia e affari interni.",
     "nota_en": "Did not take part in the vote under its justice and home affairs opt-out.",
     "nota_de": "Nahm aufgrund seines Opt-outs im Bereich Justiz und Inneres nicht an der Abstimmung teil."
    },
    "IT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "LT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "LU": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "LV": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "MT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "NL": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "PL": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "PT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "RO": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "SE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "SI": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    },
    "SK": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-13916-2026-INIT/en/pdf",
     "data": "2026-10",
     "nota": "Voto favorevole all'adozione nel Consiglio del 1° ottobre 2026.",
     "nota_en": "Voted in favour of adoption in the Council on 1 October 2026.",
     "nota_de": "Stimmte im Rat am 1. Oktober 2026 für die Annahme."
    }
   },
   "nuovi": {
    "AT:destra_nazionalista": {
     "partito": "FPÖ",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di FPÖ hanno votato a favore (PE, giugno 2026).",
     "nota_en": "FPÖ MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die FPÖ-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "BE:destra_nazionalista": {
     "partito": "Vlaams Belang",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di Vlaams Belang hanno votato a favore (PE, giugno 2026).",
     "nota_en": "Vlaams Belang MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die Vlaams Belang-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "CY:centrodestra": {
     "partito": "DISY",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di DISY hanno votato a favore (PE, giugno 2026).",
     "nota_en": "DISY MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die DISY-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "DE:destra_nazionalista": {
     "partito": "AfD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di AfD hanno votato a favore (PE, giugno 2026).",
     "nota_en": "AfD MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die AfD-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "DK:centrodestra": {
     "partito": "Liberal Alliance",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "L'eurodeputato di Liberal Alliance ha votato a favore (PE, giugno 2026).",
     "nota_en": "The Liberal Alliance MEP voted in favour (EP, June 2026).",
     "nota_de": "Der Liberal Alliance-Abgeordnete stimmte dafür (EP, Juni 2026)."
    },
    "EE:centrodestra": {
     "partito": "Isamaa",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di Isamaa hanno votato a favore (PE, giugno 2026).",
     "nota_en": "Isamaa MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die Isamaa-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "ES:centrodestra": {
     "partito": "PP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati del PP hanno votato a favore (PE, giugno 2026).",
     "nota_en": "PP MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die PP-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "FI:centrosinistra": {
     "partito": "SDP",
     "voto": "astensione",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di SDP si sono astenuti (PE, giugno 2026).",
     "nota_en": "SDP MEPs abstained (EP, June 2026).",
     "nota_de": "Die SDP-Abgeordneten enthielten sich (EP, Juni 2026)."
    },
    "FR:destra_nazionalista": {
     "partito": "RN",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di RN hanno votato a favore (PE, giugno 2026).",
     "nota_en": "RN MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die RN-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "IE:sinistra": {
     "partito": "Sinn Féin",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di Sinn Féin hanno votato contro (PE, giugno 2026).",
     "nota_en": "Sinn Féin MEPs voted against (EP, June 2026).",
     "nota_de": "Die Sinn Féin-Abgeordneten stimmten dagegen (EP, Juni 2026)."
    },
    "LT:centrodestra": {
     "partito": "TS-LKD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di TS-LKD hanno votato a favore (PE, giugno 2026).",
     "nota_en": "TS-LKD MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die TS-LKD-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "NL:centrosinistra": {
     "partito": "GL-PvdA (PRO)",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di GL-PvdA (PRO) hanno votato contro (PE, giugno 2026).",
     "nota_en": "GL-PvdA (PRO) MEPs voted against (EP, June 2026).",
     "nota_de": "Die GL-PvdA (PRO)-Abgeordneten stimmten dagegen (EP, Juni 2026)."
    },
    "NL:destra_nazionalista": {
     "partito": "PVV",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di PVV hanno votato a favore (PE, giugno 2026).",
     "nota_en": "PVV MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die PVV-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "PL:destra_nazionalista": {
     "partito": "PiS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di PiS hanno votato a favore (PE, giugno 2026).",
     "nota_en": "PiS MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die PiS-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "PT:centrosinistra": {
     "partito": "PS",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati del PS hanno votato contro (PE, giugno 2026).",
     "nota_en": "PS MEPs voted against (EP, June 2026).",
     "nota_de": "Die PS-Abgeordneten stimmten dagegen (EP, Juni 2026)."
    },
    "PT:destra_nazionalista": {
     "partito": "Chega",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di Chega hanno votato a favore (PE, giugno 2026).",
     "nota_en": "Chega MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die Chega-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "RO:destra_nazionalista": {
     "partito": "AUR",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di AUR hanno votato a favore (PE, giugno 2026).",
     "nota_en": "AUR MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die AUR-Abgeordneten stimmten dafür (EP, Juni 2026)."
    },
    "SE:centrosinistra": {
     "partito": "Socialdemokraterna",
     "voto": "astensione",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati di Socialdemokraterna si sono astenuti (PE, giugno 2026).",
     "nota_en": "Socialdemokraterna MEPs abstained (EP, June 2026).",
     "nota_de": "Die Socialdemokraterna-Abgeordneten enthielten sich (EP, Juni 2026)."
    },
    "SK:centro": {
     "partito": "PS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/194134",
     "data": "2026-06",
     "nota": "Gli eurodeputati del PS hanno votato a favore (PE, giugno 2026).",
     "nota_en": "PS MEPs voted in favour (EP, June 2026).",
     "nota_de": "Die PS-Abgeordneten stimmten dafür (EP, Juni 2026)."
    }
   }
  },
  "paesi_sicuri": {
   "esito_voluto_destra": "passa",
   "atto": "Adozione dei regolamenti che modificano il regolamento procedure (UE) 2024/1348: lista UE dei paesi di origine sicuri e concetto di paese terzo sicuro",
   "atto_en": "Adoption of the regulations amending the Asylum Procedure Regulation (EU) 2024/1348: EU safe countries of origin list and safe third country concept",
   "atto_de": "Annahme der Verordnungen zur Änderung der Asylverfahrensverordnung (EU) 2024/1348: EU-Liste sicherer Herkunftsstaaten und Konzept des sicheren Drittstaats",
   "voto_reale": {
    "data": "2026-02-23",
    "esito": "Entrambi adottati a maggioranza qualificata. Lista paesi di origine sicuri: 24 favorevoli, 2 astenuti (BE, HU). Paese terzo sicuro: 23 favorevoli, 3 contrari (ES, FR, PT). DK non partecipante",
    "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf"
   },
   "governi": {
    "AT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "BE": {
     "voto": "astensione",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Astensione sulla lista UE dei paesi di origine sicuri e voto favorevole al regolamento sul paese terzo sicuro (23 febbraio 2026).",
     "nota_en": "Abstained on the EU safe countries of origin list and voted in favour of the safe third country regulation (23 February 2026).",
     "nota_de": "Enthielt sich bei der EU-Liste sicherer Herkunftsstaaten und stimmte für die Verordnung zum sicheren Drittstaat (23. Februar 2026)."
    },
    "BG": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026 (governo precedente).",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026 (previous government).",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat) (Vorgängerregierung)."
    },
    "CY": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "CZ": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "DE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "DK": {
     "voto": "opt_out",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Non ha partecipato al voto in virtù dell'opt-out in materia di giustizia e affari interni.",
     "nota_en": "Did not take part in the vote under its justice and home affairs opt-out.",
     "nota_de": "Nahm aufgrund seines Opt-outs im Bereich Justiz und Inneres nicht an der Abstimmung teil."
    },
    "EE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "ES": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6628-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto contrario al regolamento sul paese terzo sicuro e favorevole alla lista UE dei paesi di origine sicuri (23 febbraio 2026).",
     "nota_en": "Voted against the safe third country regulation and in favour of the EU safe countries of origin list (23 February 2026).",
     "nota_de": "Stimmte gegen die Verordnung zum sicheren Drittstaat und für die EU-Liste sicherer Herkunftsstaaten (23. Februar 2026)."
    },
    "FI": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "FR": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6628-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto contrario al regolamento sul paese terzo sicuro e favorevole alla lista UE dei paesi di origine sicuri (23 febbraio 2026).",
     "nota_en": "Voted against the safe third country regulation and in favour of the EU safe countries of origin list (23 February 2026).",
     "nota_de": "Stimmte gegen die Verordnung zum sicheren Drittstaat und für die EU-Liste sicherer Herkunftsstaaten (23. Februar 2026)."
    },
    "GR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "HR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "HU": {
     "voto": "astensione",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Astensione sulla lista UE dei paesi di origine sicuri e voto favorevole al regolamento sul paese terzo sicuro (23 febbraio 2026) (governo precedente).",
     "nota_en": "Abstained on the EU safe countries of origin list and voted in favour of the safe third country regulation (23 February 2026) (previous government).",
     "nota_de": "Enthielt sich bei der EU-Liste sicherer Herkunftsstaaten und stimmte für die Verordnung zum sicheren Drittstaat (23. Februar 2026) (Vorgängerregierung)."
    },
    "IE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "IT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "LT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "LU": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "LV": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "MT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "NL": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026 (governo precedente).",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026 (previous government).",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat) (Vorgängerregierung)."
    },
    "PL": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "PT": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6628-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto contrario al regolamento sul paese terzo sicuro e favorevole alla lista UE dei paesi di origine sicuri (23 febbraio 2026).",
     "nota_en": "Voted against the safe third country regulation and in favour of the EU safe countries of origin list (23 February 2026).",
     "nota_de": "Stimmte gegen die Verordnung zum sicheren Drittstaat und für die EU-Liste sicherer Herkunftsstaaten (23. Februar 2026)."
    },
    "RO": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026 (governo precedente).",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026 (previous government).",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat) (Vorgängerregierung)."
    },
    "SE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    },
    "SI": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026 (governo precedente).",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026 (previous government).",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat) (Vorgängerregierung)."
    },
    "SK": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6629-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Voto favorevole a entrambi i regolamenti (lista UE dei paesi di origine sicuri e paese terzo sicuro) il 23 febbraio 2026.",
     "nota_en": "Voted in favour of both regulations (EU safe countries of origin list and safe third country) on 23 February 2026.",
     "nota_de": "Stimmte am 23. Februar 2026 für beide Verordnungen (EU-Liste sicherer Herkunftsstaaten und sicherer Drittstaat)."
    }
   },
   "nuovi": {
    "AT:destra_nazionalista": {
     "partito": "FPÖ",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di FPÖ hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "FPÖ MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die FPÖ-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "BE:destra_nazionalista": {
     "partito": "Vlaams Belang",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di Vlaams Belang hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "Vlaams Belang MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die Vlaams Belang-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "CY:centrodestra": {
     "partito": "DISY",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di DISY hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "DISY MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die DISY-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "DE:destra_nazionalista": {
     "partito": "AfD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di AfD hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "AfD MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die AfD-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "DK:centrodestra": {
     "partito": "Liberal Alliance",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "L'eurodeputato di Liberal Alliance ha votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "The Liberal Alliance MEP voted in favour on both texts (EP, February 2026).",
     "nota_de": "Der Liberal Alliance-Abgeordnete stimmte bei beiden Texten dafür (EP, Februar 2026)."
    },
    "EE:centrodestra": {
     "partito": "Isamaa",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di Isamaa hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "Isamaa MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die Isamaa-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "ES:centrodestra": {
     "partito": "PP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati del PP hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "PP MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die PP-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "FI:centrosinistra": {
     "partito": "SDP",
     "voto": "condizionato",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati SDP hanno votato a favore della lista ma si sono astenuti sul paese terzo sicuro (PE, febbraio 2026).",
     "nota_en": "SDP MEPs voted for the list but abstained on the safe third country text (EP, February 2026).",
     "nota_de": "Die SDP-Abgeordneten stimmten für die Liste, enthielten sich aber beim sicheren Drittstaat (EP, Februar 2026)."
    },
    "FR:destra_nazionalista": {
     "partito": "RN",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di RN hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "RN MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die RN-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "IE:sinistra": {
     "partito": "Sinn Féin",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di Sinn Féin hanno votato contro entrambi i testi (PE, febbraio 2026).",
     "nota_en": "Sinn Féin MEPs voted against on both texts (EP, February 2026).",
     "nota_de": "Die Sinn Féin-Abgeordneten stimmten bei beiden Texten dagegen (EP, Februar 2026)."
    },
    "LT:centrodestra": {
     "partito": "TS-LKD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di TS-LKD hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "TS-LKD MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die TS-LKD-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "NL:centrosinistra": {
     "partito": "GL-PvdA",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di GL-PvdA hanno votato contro entrambi i testi (PE, febbraio 2026).",
     "nota_en": "GL-PvdA MEPs voted against on both texts (EP, February 2026).",
     "nota_de": "Die GL-PvdA-Abgeordneten stimmten bei beiden Texten dagegen (EP, Februar 2026)."
    },
    "NL:destra_nazionalista": {
     "partito": "PVV",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di PVV hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "PVV MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die PVV-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "PL:destra_nazionalista": {
     "partito": "PiS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di PiS hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "PiS MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die PiS-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "PT:centrosinistra": {
     "partito": "PS",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati del PS hanno votato contro entrambi i testi (PE, febbraio 2026).",
     "nota_en": "PS MEPs voted against on both texts (EP, February 2026).",
     "nota_de": "Die PS-Abgeordneten stimmten bei beiden Texten dagegen (EP, Februar 2026)."
    },
    "PT:destra_nazionalista": {
     "partito": "Chega",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di Chega hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "Chega MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die Chega-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "RO:destra_nazionalista": {
     "partito": "AUR",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di AUR hanno votato a favore del paese terzo sicuro e in maggioranza (2 su 3) della lista (PE, febbraio 2026).",
     "nota_en": "AUR MEPs voted for the safe third country text and mostly (2 of 3) for the list (EP, February 2026).",
     "nota_de": "Die AUR-Abgeordneten stimmten für den sicheren Drittstaat und mehrheitlich (2 von 3) für die Liste (EP, Februar 2026)."
    },
    "SE:centrosinistra": {
     "partito": "Socialdemokraterna",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati di Socialdemokraterna hanno votato a favore di entrambi i testi (PE, febbraio 2026).",
     "nota_en": "Socialdemokraterna MEPs voted in favour on both texts (EP, February 2026).",
     "nota_de": "Die Socialdemokraterna-Abgeordneten stimmten bei beiden Texten dafür (EP, Februar 2026)."
    },
    "SK:centro": {
     "partito": "PS",
     "voto": "astensione",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184172",
     "data": "2026-02",
     "nota": "Gli eurodeputati del PS si sono astenuti su entrambi i testi (PE, febbraio 2026).",
     "nota_en": "PS MEPs abstained on both texts (EP, February 2026).",
     "nota_de": "Die PS-Abgeordneten enthielten sich bei beiden Texten (EP, Februar 2026)."
    }
   }
  },
  "auto_2035": {
   "esito_voluto_destra": "passa",
   "atto": "Posizione del Consiglio sulla proposta della Commissione (dicembre 2025) di ridurre l'obiettivo CO2 2035 per le auto dal 100% al 90% con flessibilità; favorevole = sostiene l'allentamento",
   "atto_en": "Council position on the Commission proposal (December 2025) to cut the 2035 car CO2 target from 100% to 90% with flexibilities; in favour = supports the relaxation",
   "atto_de": "Ratsposition zum Kommissionsvorschlag (Dezember 2025), das CO2-Ziel 2035 für Pkw mit Flexibilitäten von 100 % auf 90 % zu senken; dafür = unterstützt die Lockerung",
   "voto_reale": null,
   "governi": {
    "BG": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.euronews.com/my-europe/2025/12/08/seven-eu-countries-pressure-european-commission-to-rethink-2035-diesel-and-petrol-car-ban",
     "data": "2025-12",
     "nota": "Il governo precedente aveva chiesto di abolire il divieto 2035; il governo è cambiato a maggio 2026.",
     "nota_en": "The previous government had asked to scrap the 2035 ban; the government changed in May 2026.",
     "nota_de": "Die Vorgängerregierung hatte die Abschaffung des Verbots 2035 gefordert; Regierungswechsel im Mai 2026."
    },
    "CZ": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13830/5/european-ministers-divided-over-revision-of-co2-emission-standards-for-cars-and-vans",
     "data": "2026-03",
     "nota": "Al Consiglio di marzo 2026 ha detto che il 90% va bene ma non basta.",
     "nota_en": "At the March 2026 Council it said 90% is fine but not enough.",
     "nota_de": "Im Rat im März 2026 erklärte es, 90 % seien in Ordnung, aber nicht genug."
    },
    "DE": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://ca.news.yahoo.com/france-germany-strike-car-industry-123620505.html",
     "data": "2026-10",
     "nota": "Ha spinto per l'allentamento e il 16 ottobre 2026 ha concordato con la Francia il 90% senza compensazione del 10% residuo.",
     "nota_en": "Pushed for the relaxation and on 16 October 2026 agreed with France on 90% without offsetting the remaining 10%.",
     "nota_de": "Drängte auf die Lockerung und einigte sich am 16. Oktober 2026 mit Frankreich auf 90 % ohne Ausgleich der restlichen 10 %."
    },
    "DK": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13830/5/european-ministers-divided-over-revision-of-co2-emission-standards-for-cars-and-vans",
     "data": "2026-03",
     "nota": "Il governo precedente ha definito la proposta un errore strategico; il governo è cambiato a giugno 2026.",
     "nota_en": "The previous government called the proposal a strategic error; the government changed in June 2026.",
     "nota_de": "Die Vorgängerregierung nannte den Vorschlag einen strategischen Fehler; Regierungswechsel im Juni 2026."
    },
    "ES": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13830/5/european-ministers-divided-over-revision-of-co2-emission-standards-for-cars-and-vans",
     "data": "2026-03",
     "nota": "Contraria all'allentamento, chiede un quadro stabile; a giugno 2026 ha firmato un non-paper contro ulteriori riduzioni di ambizione.",
     "nota_en": "Opposes the relaxation and wants a stable framework; in June 2026 it signed a non-paper against any further cut in ambition.",
     "nota_de": "Lehnt die Lockerung ab und will einen stabilen Rahmen; im Juni 2026 unterzeichnete es ein Non-Paper gegen weitere Abstriche."
    },
    "FI": {
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13830/5/european-ministers-divided-over-revision-of-co2-emission-standards-for-cars-and-vans",
     "data": "2026-03",
     "nota": "A marzo 2026 ha accettato le flessibilità ma senza estenderle; a giugno ha chiesto neutralità tecnologica.",
     "nota_en": "In March 2026 it accepted the flexibilities but not extending them; in June it called for technological neutrality.",
     "nota_de": "Im März 2026 akzeptierte es die Flexibilitäten, aber ohne Ausweitung; im Juni forderte es Technologieneutralität."
    },
    "FR": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://ca.news.yahoo.com/france-germany-strike-car-industry-123620505.html",
     "data": "2026-10",
     "nota": "Dopo aver difeso a giugno l'ambizione del testo, il 16 ottobre 2026 ha concordato con la Germania il 90% senza compensazione in cambio di regole 'Made in Europe'.",
     "nota_en": "After defending the text's ambition in June, on 16 October 2026 it agreed with Germany on 90% without offsetting in exchange for 'Made in Europe' rules.",
     "nota_de": "Nachdem es im Juni die Ambition des Textes verteidigt hatte, einigte es sich am 16. Oktober 2026 mit Deutschland auf 90 % ohne Ausgleich gegen 'Made in Europe'-Regeln."
    },
    "HU": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.euronews.com/my-europe/2025/12/08/seven-eu-countries-pressure-european-commission-to-rethink-2035-diesel-and-petrol-car-ban",
     "data": "2025-12",
     "nota": "Il governo precedente aveva chiesto di abolire il divieto 2035; il governo è cambiato a maggio 2026.",
     "nota_en": "The previous government had asked to scrap the 2035 ban; the government changed in May 2026.",
     "nota_de": "Die Vorgängerregierung hatte die Abschaffung des Verbots 2035 gefordert; Regierungswechsel im Mai 2026."
    },
    "IT": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13896/4/blocking-minority-confirmed-in-eu-council-over-emission-standards-of-co2-for-cars-and-vans",
     "data": "2026-06",
     "nota": "Sostiene l'allentamento e chiede di andare oltre in nome della neutralità tecnologica e dei carburanti alternativi.",
     "nota_en": "Supports the relaxation and wants to go further on technological neutrality and alternative fuels.",
     "nota_de": "Unterstützt die Lockerung und will mit Technologieneutralität und alternativen Kraftstoffen weiter gehen."
    },
    "LT": {
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13830/5/european-ministers-divided-over-revision-of-co2-emission-standards-for-cars-and-vans",
     "data": "2026-03",
     "nota": "Accetta le flessibilità proposte ma chiede limiti chiari.",
     "nota_en": "Accepts the proposed flexibilities but wants clear limits.",
     "nota_de": "Akzeptiert die vorgeschlagenen Flexibilitäten, verlangt aber klare Grenzen."
    },
    "LU": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13830/5/european-ministers-divided-over-revision-of-co2-emission-standards-for-cars-and-vans",
     "data": "2026-03",
     "nota": "Tra i governi contrari all'allentamento; a giugno 2026 ha firmato il non-paper contro ulteriori riduzioni di ambizione.",
     "nota_en": "Among the governments opposing the relaxation; in June 2026 it signed the non-paper against further cuts in ambition.",
     "nota_de": "Gehört zu den Gegnern der Lockerung; im Juni 2026 unterzeichnete es das Non-Paper gegen weitere Abstriche."
    },
    "LV": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13830/5/european-ministers-divided-over-revision-of-co2-emission-standards-for-cars-and-vans",
     "data": "2026-03",
     "nota": "Al Consiglio di marzo 2026 ha proposto di abbassare l'obiettivo 2035 all'80%.",
     "nota_en": "At the March 2026 Council it proposed lowering the 2035 target to 80%.",
     "nota_de": "Im Rat im März 2026 schlug es vor, das Ziel 2035 auf 80 % zu senken."
    },
    "NL": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13830/5/european-ministers-divided-over-revision-of-co2-emission-standards-for-cars-and-vans",
     "data": "2026-03",
     "nota": "Tra i governi contrari all'allentamento; a giugno 2026 ha firmato il non-paper contro ulteriori riduzioni di ambizione.",
     "nota_en": "Among the governments opposing the relaxation; in June 2026 it signed the non-paper against further cuts in ambition.",
     "nota_de": "Gehört zu den Gegnern der Lockerung; im Juni 2026 unterzeichnete es das Non-Paper gegen weitere Abstriche."
    },
    "PL": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13830/5/european-ministers-divided-over-revision-of-co2-emission-standards-for-cars-and-vans",
     "data": "2026-03",
     "nota": "Chiede più flessibilità del previsto, tra cui un obiettivo per i furgoni ridotto dal 50% al 30%.",
     "nota_en": "Wants more flexibility than proposed, including cutting the van target from 50% to 30%.",
     "nota_de": "Fordert mehr Flexibilität als vorgeschlagen, u. a. eine Senkung des Transporterziels von 50 % auf 30 %."
    },
    "PT": {
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13896/4/blocking-minority-confirmed-in-eu-council-over-emission-standards-of-co2-for-cars-and-vans",
     "data": "2026-06",
     "nota": "Accetta le flessibilità proposte ma non oltre; a giugno 2026 ha firmato il non-paper contro ulteriori riduzioni di ambizione.",
     "nota_en": "Accepts the proposed flexibilities but nothing more; in June 2026 it signed the non-paper against further cuts in ambition.",
     "nota_de": "Akzeptiert die vorgeschlagenen Flexibilitäten, aber nicht mehr; im Juni 2026 unterzeichnete es das Non-Paper gegen weitere Abstriche."
    },
    "SE": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13830/5/european-ministers-divided-over-revision-of-co2-emission-standards-for-cars-and-vans",
     "data": "2026-03",
     "nota": "Contraria all'allentamento, teme incertezza dalle flessibilità; a giugno 2026 ha firmato il non-paper pro elettrificazione.",
     "nota_en": "Opposes the relaxation, warning flexibilities create uncertainty; in June 2026 it signed the pro-electrification non-paper.",
     "nota_de": "Lehnt die Lockerung ab und warnt vor Unsicherheit durch Flexibilitäten; im Juni 2026 unterzeichnete es das Non-Paper für Elektrifizierung."
    },
    "SK": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13896/4/blocking-minority-confirmed-in-eu-council-over-emission-standards-of-co2-for-cars-and-vans",
     "data": "2026-06",
     "nota": "Nel gruppo che chiede più flessibilità e neutralità tecnologica.",
     "nota_en": "Among the group calling for more flexibility and technological neutrality.",
     "nota_de": "Gehört zur Gruppe, die mehr Flexibilität und Technologieneutralität fordert."
    }
   },
   "nuovi": {
    "AT:destra_nazionalista": {
     "partito": "FPÖ",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati FPÖ hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (6 a favore), indizio di sostegno all'allentamento dei vincoli.",
     "nota_en": "FPÖ MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (6 in favour), a sign of support for easing the targets.",
     "nota_de": "Die FPÖ-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (6 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben."
    },
    "BE:destra_nazionalista": {
     "partito": "Vlaams Belang",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati Vlaams Belang hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (1 a favore), indizio di sostegno all'allentamento dei vincoli. Due eurodeputati non hanno votato.",
     "nota_en": "Vlaams Belang MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (1 in favour), a sign of support for easing the targets. Two MEPs did not vote.",
     "nota_de": "Die Vlaams Belang-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (1 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben. Zwei Abgeordnete stimmten nicht ab."
    },
    "CY:centrodestra": {
     "partito": "DISY",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati DISY hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (1 a favore), indizio di sostegno all'allentamento dei vincoli. L'altro eurodeputato non ha votato.",
     "nota_en": "DISY MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (1 in favour), a sign of support for easing the targets. The other MEP did not vote.",
     "nota_de": "Die DISY-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (1 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben. Der andere Abgeordnete stimmte nicht ab."
    },
    "DE:destra_nazionalista": {
     "partito": "AfD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati AfD hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (14 a favore), indizio di sostegno all'allentamento dei vincoli.",
     "nota_en": "AfD MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (14 in favour), a sign of support for easing the targets.",
     "nota_de": "Die AfD-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (14 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben."
    },
    "DK:centrodestra": {
     "partito": "Liberal Alliance",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati Liberal Alliance hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (1 a favore), indizio di sostegno all'allentamento dei vincoli. Liberal Alliance ha un solo eurodeputato (gruppo PPE).",
     "nota_en": "Liberal Alliance MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (1 in favour), a sign of support for easing the targets. Liberal Alliance has a single MEP (EPP group).",
     "nota_de": "Die Liberal Alliance-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (1 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben. Liberal Alliance hat nur einen Abgeordneten (EVP-Fraktion)."
    },
    "EE:centrodestra": {
     "partito": "Isamaa",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati Isamaa hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (2 a favore), indizio di sostegno all'allentamento dei vincoli.",
     "nota_en": "Isamaa MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (2 in favour), a sign of support for easing the targets.",
     "nota_de": "Die Isamaa-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (2 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben."
    },
    "ES:centrodestra": {
     "partito": "PP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati PP hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (16 a favore), indizio di sostegno all'allentamento dei vincoli. Anche Vox ha votato a favore (6).",
     "nota_en": "PP MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (16 in favour), a sign of support for easing the targets. Vox also voted in favour (6).",
     "nota_de": "Die PP-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (16 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben. Auch Vox stimmte dafür (6)."
    },
    "FI:centrosinistra": {
     "partito": "SDP",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati SDP hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (1 a favore), indizio di sostegno all'allentamento dei vincoli. L'altro eurodeputato non ha votato; nessuna posizione nota sul 2035.",
     "nota_en": "SDP MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (1 in favour), a sign of support for easing the targets. The other MEP did not vote; no known position on 2035.",
     "nota_de": "Die SDP-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (1 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben. Der andere Abgeordnete stimmte nicht ab; keine bekannte Position zu 2035."
    },
    "FR:destra_nazionalista": {
     "partito": "RN",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati RN hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (26 a favore), indizio di sostegno all'allentamento dei vincoli.",
     "nota_en": "RN MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (26 in favour), a sign of support for easing the targets.",
     "nota_de": "Die RN-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (26 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben."
    },
    "IE:sinistra": {
     "partito": "Sinn Féin",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati Sinn Féin hanno votato contro la flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (2 contro), indizio di opposizione all'allentamento dei vincoli.",
     "nota_en": "Sinn Féin MEPs voted against the 2025-2027 car CO2 compliance flexibility in May 2025 (2 against), a sign of opposition to easing the targets.",
     "nota_de": "Die Sinn Féin-Abgeordneten stimmten im Mai 2025 gegen die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (2 dagegen), ein Hinweis auf Ablehnung gelockerter Vorgaben."
    },
    "LT:centrodestra": {
     "partito": "TS-LKD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati TS-LKD hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (2 a favore), indizio di sostegno all'allentamento dei vincoli.",
     "nota_en": "TS-LKD MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (2 in favour), a sign of support for easing the targets.",
     "nota_de": "Die TS-LKD-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (2 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben."
    },
    "NL:centrosinistra": {
     "partito": "GL-PvdA (PRO)",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://nieuws.nl/economie/eu-parlementariers-benieuwd-naar-gevolgen-nu-benzineauto-blijft",
     "data": "2025-12",
     "nota": "Gli eurodeputati GL-PvdA Chahim ed Eickhout hanno criticato la proposta di dicembre 2025 di scendere al 90%; a maggio 2025 la delegazione si era divisa (4 sì S&D, 4 no Verdi).",
     "nota_en": "GL-PvdA MEPs Chahim and Eickhout criticised the December 2025 proposal to lower the target to 90%; in May 2025 the delegation split (4 S&D in favour, 4 Greens against).",
     "nota_de": "Die GL-PvdA-Abgeordneten Chahim und Eickhout kritisierten den Vorschlag vom Dezember 2025, das Ziel auf 90 % zu senken; im Mai 2025 war die Delegation gespalten (4 S&D dafür, 4 Grüne dagegen)."
    },
    "NL:destra_nazionalista": {
     "partito": "PVV",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati PVV hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (6 a favore), indizio di sostegno all'allentamento dei vincoli.",
     "nota_en": "PVV MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (6 in favour), a sign of support for easing the targets.",
     "nota_de": "Die PVV-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (6 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben."
    },
    "PL:destra_nazionalista": {
     "partito": "PiS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati PiS hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (17 a favore), indizio di sostegno all'allentamento dei vincoli.",
     "nota_en": "PiS MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (17 in favour), a sign of support for easing the targets.",
     "nota_de": "Die PiS-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (17 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben."
    },
    "PT:centrosinistra": {
     "partito": "PS",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati PS hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (7 a favore), indizio di sostegno all'allentamento dei vincoli. Nessuna posizione nota sul target 2035.",
     "nota_en": "PS MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (7 in favour), a sign of support for easing the targets. No known position on the 2035 target itself.",
     "nota_de": "Die PS-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (7 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben. Keine bekannte Position zum Ziel 2035 selbst."
    },
    "PT:destra_nazionalista": {
     "partito": "Chega",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati Chega hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (2 a favore), indizio di sostegno all'allentamento dei vincoli.",
     "nota_en": "Chega MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (2 in favour), a sign of support for easing the targets.",
     "nota_de": "Die Chega-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (2 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben."
    },
    "RO:destra_nazionalista": {
     "partito": "AUR",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati AUR hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (3 a favore), indizio di sostegno all'allentamento dei vincoli.",
     "nota_en": "AUR MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (3 in favour), a sign of support for easing the targets.",
     "nota_de": "Die AUR-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (3 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben."
    },
    "SE:centrosinistra": {
     "partito": "Socialdemokraterna",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati Socialdemokraterna hanno votato contro la flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (5 contro), indizio di opposizione all'allentamento dei vincoli.",
     "nota_en": "Socialdemokraterna MEPs voted against the 2025-2027 car CO2 compliance flexibility in May 2025 (5 against), a sign of opposition to easing the targets.",
     "nota_de": "Die Socialdemokraterna-Abgeordneten stimmten im Mai 2025 gegen die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (5 dagegen), ein Hinweis auf Ablehnung gelockerter Vorgaben."
    },
    "SK:centro": {
     "partito": "Progresívne Slovensko",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/176302",
     "data": "2025-05",
     "nota": "Gli eurodeputati Progresívne Slovensko hanno votato a favore della flessibilità sui target CO2 auto 2025-2027 a maggio 2025 (5 a favore), indizio di sostegno all'allentamento dei vincoli. Nessuna posizione nota sul target 2035.",
     "nota_en": "Progresívne Slovensko MEPs voted for the 2025-2027 car CO2 compliance flexibility in May 2025 (5 in favour), a sign of support for easing the targets. No known position on the 2035 target itself.",
     "nota_de": "Die Progresívne Slovensko-Abgeordneten stimmten im Mai 2025 für die Flexibilität bei den CO2-Zielen für Pkw 2025-2027 (5 dafür), ein Hinweis auf Unterstützung für gelockerte Vorgaben. Keine bekannte Position zum Ziel 2035 selbst."
    }
   }
  },
  "clima_2040": {
   "esito_voluto_destra": "bloccato",
   "atto": "Adozione finale del regolamento che modifica la Legge europea sul clima (obiettivo -90% al 2040, crediti internazionali, rinvio ETS2 al 2028), Consiglio del 5 marzo 2026",
   "atto_en": "Final adoption of the regulation amending the European Climate Law (-90% target for 2040, international credits, ETS2 delayed to 2028), Council of 5 March 2026",
   "atto_de": "Endgültige Annahme der Verordnung zur Änderung des Europäischen Klimagesetzes (-90 % bis 2040, internationale Gutschriften, ETS2-Verschiebung auf 2028), Rat vom 5. März 2026",
   "voto_reale": {
    "data": "2026-03-05",
    "esito": "Adottato a maggioranza qualificata: 22 sì, 4 no (CZ, HU, PL, SK), 1 astensione (BE). Orientamento generale del 5/11/2025: no di CZ, HU, PL, SK; astenuti BE, BG.",
    "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf"
   },
   "governi": {
    "AT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "BE": {
     "voto": "astensione",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo si è astenuto nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio). Si era astenuto anche sull'orientamento generale di novembre 2025.",
     "nota_en": "The government abstained in the final vote on the 2040 climate target (recorded Council vote). It also abstained on the November 2025 general approach.",
     "nota_de": "Die Regierung enthielt sich bei der Schlussabstimmung über das Klimaziel 2040 (protokollierte Ratsabstimmung). Auch bei der allgemeinen Ausrichtung im November 2025 enthielt sie sich."
    },
    "BG": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo precedente ha votato a favore nel voto finale sull'obiettivo clima 2040; il governo è cambiato a maggio 2026. Nell'orientamento generale di novembre 2025 si era astenuto.",
     "nota_en": "The previous government voted in favour in the final vote on the 2040 climate target; the government changed in May 2026. It had abstained on the November 2025 general approach.",
     "nota_de": "Die Vorgängerregierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür; Regierungswechsel im Mai 2026. Bei der allgemeinen Ausrichtung im November 2025 hatte sie sich enthalten."
    },
    "CY": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "CZ": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato contro nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio). Aveva votato contro anche l'orientamento generale di novembre 2025.",
     "nota_en": "The government voted against in the final vote on the 2040 climate target (recorded Council vote). It also voted against the November 2025 general approach.",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dagegen (protokollierte Ratsabstimmung). Auch gegen die allgemeine Ausrichtung im November 2025 stimmte sie."
    },
    "DE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "DK": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo precedente ha votato a favore nel voto finale sull'obiettivo clima 2040; il governo è cambiato a giugno 2026.",
     "nota_en": "The previous government voted in favour in the final vote on the 2040 climate target; the government changed in June 2026.",
     "nota_de": "Die Vorgängerregierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür; Regierungswechsel im Juni 2026."
    },
    "EE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "ES": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "FI": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "FR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "GR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "HR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "HU": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo precedente ha votato contro nel voto finale sull'obiettivo clima 2040; il governo è cambiato a maggio 2026. Aveva votato contro anche l'orientamento generale di novembre 2025.",
     "nota_en": "The previous government voted against in the final vote on the 2040 climate target; the government changed in May 2026. It also voted against the November 2025 general approach.",
     "nota_de": "Die Vorgängerregierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dagegen; Regierungswechsel im Mai 2026. Auch gegen die allgemeine Ausrichtung im November 2025 stimmte sie."
    },
    "IE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "IT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "LT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "LU": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "LV": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "MT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "NL": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "PL": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato contro nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio). Aveva votato contro anche l'orientamento generale di novembre 2025.",
     "nota_en": "The government voted against in the final vote on the 2040 climate target (recorded Council vote). It also voted against the November 2025 general approach.",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dagegen (protokollierte Ratsabstimmung). Auch gegen die allgemeine Ausrichtung im November 2025 stimmte sie."
    },
    "PT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "RO": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo precedente ha votato a favore nel voto finale sull'obiettivo clima 2040; il governo è cambiato a maggio 2026 (governo ad interim).",
     "nota_en": "The previous government voted in favour in the final vote on the 2040 climate target; the government changed in May 2026 (caretaker).",
     "nota_de": "Die Vorgängerregierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür; Regierungswechsel im Mai 2026 (geschäftsführend)."
    },
    "SE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato a favore nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on the 2040 climate target (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür (protokollierte Ratsabstimmung)."
    },
    "SI": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo precedente ha votato a favore nel voto finale sull'obiettivo clima 2040; il governo è cambiato a giugno 2026.",
     "nota_en": "The previous government voted in favour in the final vote on the 2040 climate target; the government changed in June 2026.",
     "nota_de": "Die Vorgängerregierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dafür; Regierungswechsel im Juni 2026."
    },
    "SK": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-7048-2026-INIT/en/pdf",
     "data": "2026-03",
     "nota": "Il governo ha votato contro nel voto finale sull'obiettivo clima 2040 (voto registrato del Consiglio). Aveva votato contro anche l'orientamento generale di novembre 2025.",
     "nota_en": "The government voted against in the final vote on the 2040 climate target (recorded Council vote). It also voted against the November 2025 general approach.",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über das Klimaziel 2040 dagegen (protokollierte Ratsabstimmung). Auch gegen die allgemeine Ausrichtung im November 2025 stimmte sie."
    }
   },
   "nuovi": {
    "AT:destra_nazionalista": {
     "partito": "FPÖ",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di FPÖ hanno votato contro (PE, febbraio 2026).",
     "nota_en": "FPÖ MEPs voted against (EP, February 2026).",
     "nota_de": "Die FPÖ-Abgeordneten stimmten dagegen (EP, Februar 2026)."
    },
    "BE:destra_nazionalista": {
     "partito": "Vlaams Belang",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di Vlaams Belang hanno votato contro (PE, febbraio 2026).",
     "nota_en": "Vlaams Belang MEPs voted against (EP, February 2026).",
     "nota_de": "Die Vlaams Belang-Abgeordneten stimmten dagegen (EP, Februar 2026)."
    },
    "CY:centrodestra": {
     "partito": "DISY",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di DISY hanno votato a favore (PE, febbraio 2026).",
     "nota_en": "DISY MEPs voted in favour (EP, February 2026).",
     "nota_de": "Die DISY-Abgeordneten stimmten dafür (EP, Februar 2026)."
    },
    "DE:destra_nazionalista": {
     "partito": "AfD",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di AfD hanno votato contro (PE, febbraio 2026).",
     "nota_en": "AfD MEPs voted against (EP, February 2026).",
     "nota_de": "Die AfD-Abgeordneten stimmten dagegen (EP, Februar 2026)."
    },
    "DK:centrodestra": {
     "partito": "Liberal Alliance",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "L'eurodeputato di Liberal Alliance ha votato a favore (PE, febbraio 2026).",
     "nota_en": "The Liberal Alliance MEP voted in favour (EP, February 2026).",
     "nota_de": "Der Liberal Alliance-Abgeordnete stimmte dafür (EP, Februar 2026)."
    },
    "EE:centrodestra": {
     "partito": "Isamaa",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Dei due eurodeputati di Isamaa uno ha votato a favore e uno si è astenuto (PE, febbraio 2026).",
     "nota_en": "Of Isamaa's two MEPs, one voted in favour and one abstained (EP, February 2026).",
     "nota_de": "Von den zwei Isamaa-Abgeordneten stimmte einer dafür, einer enthielt sich (EP, Februar 2026)."
    },
    "ES:centrodestra": {
     "partito": "PP",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati del PP hanno votato contro, diversamente dalla maggioranza del PPE (PE, febbraio 2026).",
     "nota_en": "PP MEPs voted against, unlike most of the EPP (EP, February 2026).",
     "nota_de": "Die PP-Abgeordneten stimmten dagegen, anders als die Mehrheit der EVP (EP, Februar 2026)."
    },
    "FI:centrosinistra": {
     "partito": "SDP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di SDP hanno votato a favore (PE, febbraio 2026).",
     "nota_en": "SDP MEPs voted in favour (EP, February 2026).",
     "nota_de": "Die SDP-Abgeordneten stimmten dafür (EP, Februar 2026)."
    },
    "FR:destra_nazionalista": {
     "partito": "RN",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di RN hanno votato contro (PE, febbraio 2026).",
     "nota_en": "RN MEPs voted against (EP, February 2026).",
     "nota_de": "Die RN-Abgeordneten stimmten dagegen (EP, Februar 2026)."
    },
    "IE:sinistra": {
     "partito": "Sinn Féin",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di Sinn Féin hanno votato a favore (PE, febbraio 2026).",
     "nota_en": "Sinn Féin MEPs voted in favour (EP, February 2026).",
     "nota_de": "Die Sinn Féin-Abgeordneten stimmten dafür (EP, Februar 2026)."
    },
    "LT:centrodestra": {
     "partito": "TS-LKD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di TS-LKD hanno votato a favore (PE, febbraio 2026).",
     "nota_en": "TS-LKD MEPs voted in favour (EP, February 2026).",
     "nota_de": "Die TS-LKD-Abgeordneten stimmten dafür (EP, Februar 2026)."
    },
    "NL:centrosinistra": {
     "partito": "GL-PvdA",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di GL-PvdA hanno votato a favore (PE, febbraio 2026).",
     "nota_en": "GL-PvdA MEPs voted in favour (EP, February 2026).",
     "nota_de": "Die GL-PvdA-Abgeordneten stimmten dafür (EP, Februar 2026)."
    },
    "NL:destra_nazionalista": {
     "partito": "PVV",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di PVV hanno votato contro (PE, febbraio 2026).",
     "nota_en": "PVV MEPs voted against (EP, February 2026).",
     "nota_de": "Die PVV-Abgeordneten stimmten dagegen (EP, Februar 2026)."
    },
    "PL:destra_nazionalista": {
     "partito": "PiS",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di PiS hanno votato contro (PE, febbraio 2026).",
     "nota_en": "PiS MEPs voted against (EP, February 2026).",
     "nota_de": "Die PiS-Abgeordneten stimmten dagegen (EP, Februar 2026)."
    },
    "PT:centrosinistra": {
     "partito": "PS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati del PS hanno votato a favore (PE, febbraio 2026).",
     "nota_en": "PS MEPs voted in favour (EP, February 2026).",
     "nota_de": "Die PS-Abgeordneten stimmten dafür (EP, Februar 2026)."
    },
    "PT:destra_nazionalista": {
     "partito": "Chega",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "L'eurodeputato presente di Chega ha votato contro (PE, febbraio 2026).",
     "nota_en": "The Chega MEP present voted against (EP, February 2026).",
     "nota_de": "Der anwesende Chega-Abgeordnete stimmte dagegen (EP, Februar 2026)."
    },
    "RO:destra_nazionalista": {
     "partito": "AUR",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di AUR hanno votato contro (PE, febbraio 2026).",
     "nota_en": "AUR MEPs voted against (EP, February 2026).",
     "nota_de": "Die AUR-Abgeordneten stimmten dagegen (EP, Februar 2026)."
    },
    "SE:centrosinistra": {
     "partito": "Socialdemokraterna",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati di Socialdemokraterna hanno votato a favore (PE, febbraio 2026).",
     "nota_en": "Socialdemokraterna MEPs voted in favour (EP, February 2026).",
     "nota_de": "Die Socialdemokraterna-Abgeordneten stimmten dafür (EP, Februar 2026)."
    },
    "SK:centro": {
     "partito": "PS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184178",
     "data": "2026-02",
     "nota": "Gli eurodeputati del PS hanno votato a favore (PE, febbraio 2026).",
     "nota_en": "PS MEPs voted in favour (EP, February 2026).",
     "nota_de": "Die PS-Abgeordneten stimmten dafür (EP, Februar 2026)."
    }
   }
  },
  "bilancio": {
   "esito_voluto_destra": "bloccato",
   "atto": "Adozione all'unanimità del regolamento QFP 2028-2034 sulla base della proposta della Commissione (circa 2.000 miliardi, 1,26% del RNL)",
   "atto_en": "Unanimous adoption of the 2028-2034 MFF regulation based on the Commission proposal (about EUR 2 trillion, 1.26% of GNI)",
   "atto_de": "Einstimmige Annahme der MFR-Verordnung 2028-2034 auf Grundlage des Kommissionsvorschlags (rund 2 Billionen Euro, 1,26 % des BNE)",
   "voto_reale": {
    "data": "2026-10-16",
    "esito": "Nessun accordo: il Consiglio europeo ha discusso il 'negotiating box' irlandese senza progressi e ha affidato a Costa la guida dei negoziati.",
    "fonte": "https://www.euronews.com/2026/10/16/budget-ukraine-migration-five-takeaways-from-the-eu-leaders-summit"
   },
   "governi": {
    "AT": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13957/2/mff-2028-2034-frugal-countries-outcry-against-irish-negotiating-box-raises-doubts-about-agreement-by-end-2026",
     "data": "2026-10",
     "nota": "La ministra Bauer chiede ulteriori tagli per diverse centinaia di miliardi, ma senza ridurre il sostegno agricolo.",
     "nota_en": "Minister Bauer demands further cuts of several hundred billion euros, but no cuts to farm support.",
     "nota_de": "Ministerin Bauer fordert weitere Kürzungen um mehrere hundert Milliarden Euro, aber keine Kürzungen bei den Agrarhilfen."
    },
    "BE": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://aa.com.tr/en/europe/belgium-warns-against-higher-eu-budget-contributions-as-divisions-deepen-in-talks/3949681",
     "data": "2026-05",
     "nota": "Il Belgio, il cui contributo salirebbe del 56%, respinge aumenti dei contributi, nuove tasse UE e debito comune, chiedendo di proteggere agricoltura e coesione.",
     "nota_en": "Belgium, whose contribution would rise by 56%, rejects higher contributions, new EU taxes and joint debt, while asking to protect farming and cohesion.",
     "nota_de": "Belgien, dessen Beitrag um 56 % stiege, lehnt höhere Beiträge, neue EU-Steuern und gemeinsame Schulden ab und will Landwirtschaft und Kohäsion schützen."
    },
    "BG": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Bulgaria tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Bulgaria is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Bulgarien gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "CY": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Cipro tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Cyprus is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Zypern gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "CZ": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Cechia tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Czechia is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Tschechien gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "DE": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13957/2/mff-2028-2034-frugal-countries-outcry-against-irish-negotiating-box-raises-doubts-about-agreement-by-end-2026",
     "data": "2026-10",
     "nota": "Merz giudica le cifre, già ridotte dalla presidenza irlandese, una base non accettabile; Berlino respinge l'aumento proposto e il rinvio del rimborso del debito comune.",
     "nota_en": "Merz calls even the Irish presidency's reduced figures an unacceptable basis; Berlin rejects the proposed increase and delayed repayment of joint debt.",
     "nota_de": "Merz nennt selbst die gekürzten Zahlen der irischen Ratspräsidentschaft keine akzeptable Grundlage; Berlin lehnt die Erhöhung und eine spätere Rückzahlung gemeinsamer Schulden ab."
    },
    "DK": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://brusselssignal.eu/2026/05/northern-eu-states-reject-friends-of-cohesion-push-to-expand-farm-budget-and-stretch-recovery-debt-repayment/",
     "data": "2026-05",
     "nota": "La Danimarca giudica eccessivo l'aumento proposto e lo accetterebbe solo legato a difesa, Ucraina e competitività.",
     "nota_en": "Denmark calls the proposed increase excessive and would accept more only if tied to defence, Ukraine and competitiveness.",
     "nota_de": "Dänemark hält die vorgeschlagene Erhöhung für überzogen und würde mehr nur für Verteidigung, Ukraine und Wettbewerbsfähigkeit akzeptieren."
    },
    "EE": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Estonia tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Estonia is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Estland gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "ES": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Spagna tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Spain is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Spanien gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "FI": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13959/1/2028-2034-mff-irish-negotiating-box-draws-criticism-from-all-sides-ahead-of-european-council",
     "data": "2026-10",
     "nota": "Il ministro Strand vede il negoziato andare nella giusta direzione ma il livello resta troppo alto; chiede tagli in tutte le rubriche, coesione compresa.",
     "nota_en": "Minister Strand sees talks moving in the right direction but the level still too high; he wants cuts in every heading including cohesion.",
     "nota_de": "Minister Strand sieht die Richtung positiv, das Niveau aber weiter zu hoch; er fordert Kürzungen in allen Rubriken einschließlich Kohäsion."
    },
    "FR": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13959/1/2028-2034-mff-irish-negotiating-box-draws-criticism-from-all-sides-ahead-of-european-council",
     "data": "2026-10",
     "nota": "Il ministro Haddad pone la preferenza europea come condizione per adottare il bilancio e insiste sulle nuove risorse proprie.",
     "nota_en": "Minister Haddad makes European preference a condition for adopting the budget and stresses new own resources.",
     "nota_de": "Minister Haddad macht die europäische Präferenz zur Bedingung für den Haushalt und betont neue Eigenmittel."
    },
    "GR": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Grecia tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Greece is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Griechenland gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "HR": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Croazia tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Croatia is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Kroatien gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "HU": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Ungheria tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Hungary is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Ungarn gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "IE": {
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://www.farmersjournal.ie/news/news/minister-heydon-to-seek-cap-budget-boost-in-negotiations-884115",
     "data": "2025-09",
     "nota": "L'Irlanda, ora alla presidenza, considera la dotazione PAC proposta solo un punto di partenza e chiede di aumentarla.",
     "nota_en": "Ireland, now holding the presidency, sees the proposed CAP envelope only as a starting point and wants it increased.",
     "nota_de": "Irland, derzeit Ratsvorsitz, sieht den vorgeschlagenen GAP-Rahmen nur als Ausgangspunkt und will ihn erhöhen."
    },
    "IT": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Italia tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Italy is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Italien gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "LT": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Lituania tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Lithuania is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Litauen gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "LV": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Lettonia tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Latvia is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Lettland gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "MT": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Malta tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Malta is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Malta gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "NL": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13957/2/mff-2028-2034-frugal-countries-outcry-against-irish-negotiating-box-raises-doubts-about-agreement-by-end-2026",
     "data": "2026-10",
     "nota": "Il ministro Heinen chiede tagli ben maggiori; i Paesi Bassi sono nel gruppo dei frugali contrario alle dimensioni proposte.",
     "nota_en": "Minister Heinen wants much deeper cuts; the Netherlands is in the frugal group opposing the proposed size.",
     "nota_de": "Minister Heinen fordert deutlich tiefere Kürzungen; die Niederlande gehören zur Gruppe der Sparsamen, die den vorgeschlagenen Umfang ablehnt."
    },
    "PL": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Polonia tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Poland is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Polen gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "PT": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Portogallo tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Portugal is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Portugal gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "RO": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Romania tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Romania is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Rumänien gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "SE": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://agenceurope.eu/en/bulletin/article/13957/2/mff-2028-2034-frugal-countries-outcry-against-irish-negotiating-box-raises-doubts-about-agreement-by-end-2026",
     "data": "2026-10",
     "nota": "La ministra Rosencrantz giudica irragionevole anche il totale ridotto a 1.825 miliardi; la Svezia chiede tagli di diverse centinaia di miliardi.",
     "nota_en": "Minister Rosencrantz calls even the reduced EUR 1,825bn total unreasonable; Sweden wants cuts of several hundred billion euros.",
     "nota_de": "Ministerin Rosencrantz nennt selbst die gekürzte Summe von 1.825 Mrd. Euro unvernünftig; Schweden fordert Kürzungen um mehrere hundert Milliarden."
    },
    "SI": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Slovenia tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Slovenia is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Slowenien gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    },
    "SK": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://eutoday.net/17-eu-countries-oppose-farm-cohesion-budget-cuts/",
     "data": "2026-10",
     "nota": "Slovacchia tra i 17 'amici della coesione' della lettera del 2 ottobre 2026: sostiene un bilancio ambizioso ma chiede di mantenere i fondi di coesione e PAC, abolire gli sconti e rimborsare più gradualmente NextGenerationEU.",
     "nota_en": "Slovakia is among the 17 'Friends of Cohesion' of the 2 October 2026 letter: backs an ambitious budget but wants cohesion and CAP funding kept, rebates abolished and NextGenerationEU repaid more gradually.",
     "nota_de": "Slowakei gehört zu den 17 'Freunden der Kohäsion' des Briefs vom 2. Oktober 2026: unterstützt einen ambitionierten Haushalt, fordert aber Erhalt von Kohäsions- und GAP-Mitteln, Abschaffung der Rabatte und langsamere Rückzahlung von NextGenerationEU."
    }
   },
   "nuovi": {
    "AT:destra_nazionalista": {
     "partito": "FPÖ",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati FPÖ hanno votato contro la relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (6 contro).",
     "nota_en": "FPÖ MEPs voted against Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (6 against).",
     "nota_de": "Die FPÖ-Abgeordneten stimmten gegen den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (6 dagegen)."
    },
    "BE:destra_nazionalista": {
     "partito": "Vlaams Belang",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati Vlaams Belang hanno votato contro la relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (3 contro).",
     "nota_en": "Vlaams Belang MEPs voted against Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (3 against).",
     "nota_de": "Die Vlaams Belang-Abgeordneten stimmten gegen den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (3 dagegen)."
    },
    "CY:centrodestra": {
     "partito": "DISY",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati DISY hanno votato a favore della relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (2 a favore).",
     "nota_en": "DISY MEPs voted for Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (2 in favour).",
     "nota_de": "Die DISY-Abgeordneten stimmten für den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (2 dafür)."
    },
    "DE:destra_nazionalista": {
     "partito": "AfD",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati AfD hanno votato contro la relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (15 contro).",
     "nota_en": "AfD MEPs voted against Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (15 against).",
     "nota_de": "Die AfD-Abgeordneten stimmten gegen den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (15 dagegen)."
    },
    "DK:centrodestra": {
     "partito": "Liberal Alliance",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati Liberal Alliance hanno votato contro la relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (1 contro). Liberal Alliance ha un solo eurodeputato (PPE).",
     "nota_en": "Liberal Alliance MEPs voted against Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (1 against). Liberal Alliance has a single MEP (EPP).",
     "nota_de": "Die Liberal Alliance-Abgeordneten stimmten gegen den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (1 dagegen). Liberal Alliance hat nur einen Abgeordneten (EVP)."
    },
    "EE:centrodestra": {
     "partito": "Isamaa",
     "voto": "da_verificare",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Voto degli eurodeputati Isamaa sulla relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione: 1 a favore, 1 contro. Delegazione divisa.",
     "nota_en": "Isamaa MEPs on Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed: 1 in favour, 1 against. Split delegation.",
     "nota_de": "Abstimmung der Isamaa-Abgeordneten zum Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert: 1 dafür, 1 dagegen. Gespaltene Delegation."
    },
    "ES:centrodestra": {
     "partito": "PP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati PP hanno votato a favore della relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (20 a favore). Il partner Vox ha votato contro (5).",
     "nota_en": "PP MEPs voted for Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (20 in favour). Partner Vox voted against (5).",
     "nota_de": "Die PP-Abgeordneten stimmten für den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (20 dafür). Partner Vox stimmte dagegen (5)."
    },
    "FI:centrosinistra": {
     "partito": "SDP",
     "voto": "astensione",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati SDP si sono astenuti sulla relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (2 astenuti).",
     "nota_en": "SDP MEPs abstained on Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (2 abstaining).",
     "nota_de": "Die SDP-Abgeordneten enthielten sich beim Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (2 Enthaltungen)."
    },
    "FR:destra_nazionalista": {
     "partito": "RN",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati RN hanno votato contro la relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (25 contro).",
     "nota_en": "RN MEPs voted against Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (25 against).",
     "nota_de": "Die RN-Abgeordneten stimmten gegen den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (25 dagegen)."
    },
    "IE:sinistra": {
     "partito": "Sinn Féin",
     "voto": "astensione",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati Sinn Féin si sono astenuti sulla relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (2 astenuti).",
     "nota_en": "Sinn Féin MEPs abstained on Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (2 abstaining).",
     "nota_de": "Die Sinn Féin-Abgeordneten enthielten sich beim Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (2 Enthaltungen)."
    },
    "LT:centrodestra": {
     "partito": "TS-LKD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati TS-LKD hanno votato a favore della relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (3 a favore).",
     "nota_en": "TS-LKD MEPs voted for Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (3 in favour).",
     "nota_de": "Die TS-LKD-Abgeordneten stimmten für den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (3 dafür)."
    },
    "NL:centrosinistra": {
     "partito": "GL-PvdA (PRO)",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati GL-PvdA (PRO) hanno votato a favore della relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (7 a favore).",
     "nota_en": "GL-PvdA (PRO) MEPs voted for Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (7 in favour).",
     "nota_de": "Die GL-PvdA (PRO)-Abgeordneten stimmten für den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (7 dafür)."
    },
    "NL:destra_nazionalista": {
     "partito": "PVV",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati PVV hanno votato contro la relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (6 contro).",
     "nota_en": "PVV MEPs voted against Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (6 against).",
     "nota_de": "Die PVV-Abgeordneten stimmten gegen den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (6 dagegen)."
    },
    "PL:destra_nazionalista": {
     "partito": "PiS",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati PiS hanno votato contro la relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (19 contro).",
     "nota_en": "PiS MEPs voted against Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (19 against).",
     "nota_de": "Die PiS-Abgeordneten stimmten gegen den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (19 dagegen)."
    },
    "PT:centrosinistra": {
     "partito": "PS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati PS hanno votato a favore della relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (8 a favore).",
     "nota_en": "PS MEPs voted for Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (8 in favour).",
     "nota_de": "Die PS-Abgeordneten stimmten für den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (8 dafür)."
    },
    "PT:destra_nazionalista": {
     "partito": "Chega",
     "voto": "astensione",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati Chega si sono astenuti sulla relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (2 astenuti).",
     "nota_en": "Chega MEPs abstained on Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (2 abstaining).",
     "nota_de": "Die Chega-Abgeordneten enthielten sich beim Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (2 Enthaltungen)."
    },
    "RO:destra_nazionalista": {
     "partito": "AUR",
     "voto": "astensione",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Voto degli eurodeputati AUR sulla relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione: 1 a favore, 2 astenuti.",
     "nota_en": "AUR MEPs on Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed: 1 in favour, 2 abstaining.",
     "nota_de": "Abstimmung der AUR-Abgeordneten zum Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert: 1 dafür, 2 Enthaltungen."
    },
    "SE:centrosinistra": {
     "partito": "Socialdemokraterna",
     "voto": "condizionato",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati S hanno votato contro la relazione interim del Parlamento che chiede un QFP più ampio (5 contro); in Riksdag (dicembre 2025) il partito chiede un bilancio stretto, il rimborso svedese e debito comune solo come eccezione.",
     "nota_en": "S MEPs voted against Parliament's interim report seeking a larger MFF (5 against); in the Riksdag (December 2025) the party called for a tight budget, keeping the Swedish rebate and joint borrowing only as an exception.",
     "nota_de": "Die S-Abgeordneten stimmten gegen den Zwischenbericht des Parlaments für einen größeren MFR (5 dagegen); im Reichstag (Dezember 2025) forderte die Partei einen straffen Haushalt, den Erhalt des schwedischen Rabatts und gemeinsame Schulden nur als Ausnahme."
    },
    "SK:centro": {
     "partito": "Progresívne Slovensko",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/190026",
     "data": "2026-04",
     "nota": "Gli eurodeputati Progresívne Slovensko hanno votato a favore della relazione interim del Parlamento sul QFP 2028-2034, che chiede più risorse della Commissione (5 a favore).",
     "nota_en": "Progresívne Slovensko MEPs voted for Parliament's interim report on the 2028-2034 MFF, which asks for more than the Commission proposed (5 in favour).",
     "nota_de": "Die Progresívne Slovensko-Abgeordneten stimmten für den Zwischenbericht des Parlaments zum MFR 2028-2034, der mehr Mittel als die Kommission fordert (5 dafür)."
    }
   }
  },
  "mercosur": {
   "esito_voluto_destra": "bloccato",
   "atto": "Decisioni sulla firma e applicazione provvisoria dell'Accordo di partenariato UE-Mercosur e dell'Accordo commerciale interinale",
   "atto_en": "Decisions on signing and provisional application of the EU-Mercosur Partnership Agreement and Interim Trade Agreement",
   "atto_de": "Beschlüsse über Unterzeichnung und vorläufige Anwendung des EU-Mercosur-Partnerschaftsabkommens und des Interimshandelsabkommens",
   "voto_reale": {
    "data": "2026-01-09",
    "esito": "Adottate a maggioranza qualificata con procedura scritta: 21 favorevoli, 5 contrari (FR, PL, AT, HU, IE), 1 astenuto (BE)",
    "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf"
   },
   "governi": {
    "AT": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto contrario nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted against in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dagegen."
    },
    "BE": {
     "voto": "astensione",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Astensione nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Abstained in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Enthielt sich im schriftlichen Verfahren des Rates vom 9. Januar 2026."
    },
    "BG": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026 (governo precedente).",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026 (previous government).",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür (Vorgängerregierung)."
    },
    "CY": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "CZ": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "DE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "DK": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026 (governo precedente).",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026 (previous government).",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür (Vorgängerregierung)."
    },
    "EE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "ES": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "FI": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "FR": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto contrario nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted against in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dagegen."
    },
    "GR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "HR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "HU": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto contrario nella procedura scritta del Consiglio conclusa il 9 gennaio 2026 (governo precedente).",
     "nota_en": "Voted against in the Council written procedure concluded on 9 January 2026 (previous government).",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dagegen (Vorgängerregierung)."
    },
    "IE": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto contrario nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted against in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dagegen."
    },
    "IT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "LT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "LU": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "LV": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "MT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "NL": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026 (governo precedente).",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026 (previous government).",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür (Vorgängerregierung)."
    },
    "PL": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto contrario nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted against in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dagegen."
    },
    "PT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "RO": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026 (governo precedente).",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026 (previous government).",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür (Vorgängerregierung)."
    },
    "SE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    },
    "SI": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026 (governo precedente).",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026 (previous government).",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür (Vorgängerregierung)."
    },
    "SK": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-1113-2026-INIT/en/pdf",
     "data": "2026-01",
     "nota": "Voto favorevole nella procedura scritta del Consiglio conclusa il 9 gennaio 2026.",
     "nota_en": "Voted in favour in the Council written procedure concluded on 9 January 2026.",
     "nota_de": "Stimmte im schriftlichen Verfahren des Rates vom 9. Januar 2026 dafür."
    }
   },
   "nuovi": {
    "AT:destra_nazionalista": {
     "partito": "FPÖ",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://pressefeuer.at/news/fpoe-fordert-widerstand-gegen-mercosur-abkommen",
     "data": "2026-01",
     "nota": "L'FPÖ chiede di opporsi all'accordo con ogni mezzo; i suoi eurodeputati hanno votato per il rinvio alla Corte (gennaio 2026).",
     "nota_en": "The FPÖ urges opposing the deal by all means; its MEPs voted for referral to the Court (January 2026).",
     "nota_de": "Die FPÖ fordert Widerstand gegen das Abkommen mit allen Mitteln; ihre Abgeordneten stimmten für die Vorlage beim Gerichtshof (Januar 2026)."
    },
    "BE:destra_nazionalista": {
     "partito": "Vlaams Belang",
     "voto": "contrario",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati di Vlaams Belang hanno votato per il rinvio dell'accordo alla Corte di giustizia (PE, gennaio 2026).",
     "nota_en": "Vlaams Belang MEPs voted to refer the agreement to the Court of Justice (EP, January 2026).",
     "nota_de": "Die Vlaams Belang-Abgeordneten stimmten für die Vorlage des Abkommens beim Gerichtshof (EP, Januar 2026)."
    },
    "CY:centrodestra": {
     "partito": "DISY",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati di DISY hanno votato contro il rinvio alla Corte di giustizia, cioè per procedere (PE, gennaio 2026).",
     "nota_en": "DISY MEPs voted against referral to the Court of Justice, i.e. to proceed (EP, January 2026).",
     "nota_de": "Die DISY-Abgeordneten stimmten gegen die Vorlage beim Gerichtshof, also für ein Weitergehen (EP, Januar 2026)."
    },
    "DE:destra_nazionalista": {
     "partito": "AfD",
     "voto": "contrario",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati di AfD hanno votato per il rinvio dell'accordo alla Corte di giustizia (PE, gennaio 2026).",
     "nota_en": "AfD MEPs voted to refer the agreement to the Court of Justice (EP, January 2026).",
     "nota_de": "Die AfD-Abgeordneten stimmten für die Vorlage des Abkommens beim Gerichtshof (EP, Januar 2026)."
    },
    "DK:centrodestra": {
     "partito": "Liberal Alliance",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "L'eurodeputato di Liberal Alliance ha votato contro il rinvio alla Corte di giustizia, cioè per procedere (PE, gennaio 2026).",
     "nota_en": "The Liberal Alliance MEP voted against referral to the Court of Justice, i.e. to proceed (EP, January 2026).",
     "nota_de": "Der Abgeordnete der Liberal Alliance stimmte gegen die Vorlage beim Gerichtshof, also für ein Weitergehen (EP, Januar 2026)."
    },
    "EE:centrodestra": {
     "partito": "Isamaa",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati di Isamaa hanno votato contro il rinvio alla Corte di giustizia, cioè per procedere (PE, gennaio 2026).",
     "nota_en": "Isamaa MEPs voted against referral to the Court of Justice, i.e. to proceed (EP, January 2026).",
     "nota_de": "Die Isamaa-Abgeordneten stimmten gegen die Vorlage beim Gerichtshof, also für ein Weitergehen (EP, Januar 2026)."
    },
    "ES:centrodestra": {
     "partito": "PP",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati del PP hanno votato contro il rinvio alla Corte di giustizia, cioè per procedere (PE, gennaio 2026).",
     "nota_en": "PP MEPs voted against referral to the Court of Justice, i.e. to proceed (EP, January 2026).",
     "nota_de": "Die PP-Abgeordneten stimmten gegen die Vorlage beim Gerichtshof, also für ein Weitergehen (EP, Januar 2026)."
    },
    "FI:centrosinistra": {
     "partito": "SDP",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati di SDP hanno votato contro il rinvio alla Corte di giustizia, cioè per procedere (PE, gennaio 2026).",
     "nota_en": "SDP MEPs voted against referral to the Court of Justice, i.e. to proceed (EP, January 2026).",
     "nota_de": "Die SDP-Abgeordneten stimmten gegen die Vorlage beim Gerichtshof, also für ein Weitergehen (EP, Januar 2026)."
    },
    "FR:destra_nazionalista": {
     "partito": "RN",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://www.terre-net.fr/assemblee-nationale/article/873970/les-deputes-sefforcent-de-faire-monter-la-pression-sur-laccord-ue-mercosur",
     "data": "2024-11",
     "nota": "Bardella ha chiesto un 'no' chiaro e definitivo all'accordo; gli eurodeputati RN hanno votato per il rinvio alla Corte (gennaio 2026).",
     "nota_en": "Bardella called for a clear and final 'no' to the deal; RN MEPs voted for referral to the Court (January 2026).",
     "nota_de": "Bardella forderte ein klares und endgültiges Nein zum Abkommen; die RN-Abgeordneten stimmten für die Vorlage beim Gerichtshof (Januar 2026)."
    },
    "IE:sinistra": {
     "partito": "Sinn Féin",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://lynnboylan.ie/2026/01/24/",
     "data": "2026-01",
     "nota": "Le eurodeputate di Sinn Féin hanno promosso il rinvio alla Corte e chiedono di opporsi all'applicazione provvisoria (gennaio 2026).",
     "nota_en": "Sinn Féin MEPs drove the Court referral and call for opposing provisional application (January 2026).",
     "nota_de": "Die Sinn-Féin-Abgeordneten trieben die Vorlage beim Gerichtshof voran und fordern Widerstand gegen die vorläufige Anwendung (Januar 2026)."
    },
    "LT:centrodestra": {
     "partito": "TS-LKD",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati di TS-LKD hanno votato contro il rinvio alla Corte di giustizia, cioè per procedere (PE, gennaio 2026).",
     "nota_en": "TS-LKD MEPs voted against referral to the Court of Justice, i.e. to proceed (EP, January 2026).",
     "nota_de": "Die TS-LKD-Abgeordneten stimmten gegen die Vorlage beim Gerichtshof, also für ein Weitergehen (EP, Januar 2026)."
    },
    "NL:centrosinistra": {
     "partito": "GL-PvdA",
     "voto": "da_verificare",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "La delegazione GL-PvdA si è divisa 4-4 sul rinvio alla Corte di giustizia (PE, gennaio 2026).",
     "nota_en": "The GL-PvdA delegation split 4-4 on referral to the Court of Justice (EP, January 2026).",
     "nota_de": "Die GL-PvdA-Delegation war bei der Vorlage beim Gerichtshof 4:4 gespalten (EP, Januar 2026)."
    },
    "NL:destra_nazionalista": {
     "partito": "PVV",
     "voto": "contrario",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati di PVV hanno votato per il rinvio dell'accordo alla Corte di giustizia (PE, gennaio 2026).",
     "nota_en": "PVV MEPs voted to refer the agreement to the Court of Justice (EP, January 2026).",
     "nota_de": "Die PVV-Abgeordneten stimmten für die Vorlage des Abkommens beim Gerichtshof (EP, Januar 2026)."
    },
    "PL:destra_nazionalista": {
     "partito": "PiS",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://www.polskieradio.pl/395/7784/Artykul/3592357,opposition-party-rallies-in-warsaw-against-migration-pact-mercosur-deal",
     "data": "2025-10",
     "nota": "Il PiS ha promesso di respingere l'accordo; i suoi eurodeputati hanno votato per il rinvio alla Corte (gennaio 2026).",
     "nota_en": "PiS pledged to reject the deal; its MEPs voted for referral to the Court (January 2026).",
     "nota_de": "Die PiS versprach, das Abkommen abzulehnen; ihre Abgeordneten stimmten für die Vorlage beim Gerichtshof (Januar 2026)."
    },
    "PT:centrosinistra": {
     "partito": "PS",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati del PS hanno votato contro il rinvio alla Corte di giustizia, cioè per procedere (PE, gennaio 2026).",
     "nota_en": "PS MEPs voted against referral to the Court of Justice, i.e. to proceed (EP, January 2026).",
     "nota_de": "Die PS-Abgeordneten stimmten gegen die Vorlage beim Gerichtshof, also für ein Weitergehen (EP, Januar 2026)."
    },
    "PT:destra_nazionalista": {
     "partito": "Chega",
     "voto": "contrario",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati presenti di Chega hanno votato per il rinvio dell'accordo alla Corte di giustizia (PE, gennaio 2026).",
     "nota_en": "Chega MEPs present voted to refer the agreement to the Court of Justice (EP, January 2026).",
     "nota_de": "Die anwesenden Chega-Abgeordneten stimmten für die Vorlage des Abkommens beim Gerichtshof (EP, Januar 2026)."
    },
    "RO:destra_nazionalista": {
     "partito": "AUR",
     "voto": "contrario",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati presenti di AUR hanno votato per il rinvio dell'accordo alla Corte di giustizia (PE, gennaio 2026).",
     "nota_en": "AUR MEPs present voted to refer the agreement to the Court of Justice (EP, January 2026).",
     "nota_de": "Die anwesenden AUR-Abgeordneten stimmten für die Vorlage des Abkommens beim Gerichtshof (EP, Januar 2026)."
    },
    "SE:centrosinistra": {
     "partito": "Socialdemokraterna",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati di Socialdemokraterna hanno votato contro il rinvio alla Corte di giustizia, cioè per procedere (PE, gennaio 2026).",
     "nota_en": "Socialdemokraterna MEPs voted against referral to the Court of Justice, i.e. to proceed (EP, January 2026).",
     "nota_de": "Die Socialdemokraterna-Abgeordneten stimmten gegen die Vorlage beim Gerichtshof, also für ein Weitergehen (EP, Januar 2026)."
    },
    "SK:centro": {
     "partito": "PS",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/183884",
     "data": "2026-01",
     "nota": "Gli eurodeputati del PS hanno votato contro il rinvio alla Corte di giustizia, cioè per procedere (PE, gennaio 2026).",
     "nota_en": "PS MEPs voted against referral to the Court of Justice, i.e. to proceed (EP, January 2026).",
     "nota_de": "Die PS-Abgeordneten stimmten gegen die Vorlage beim Gerichtshof, also für ein Weitergehen (EP, Januar 2026)."
    }
   }
  },
  "ucraina_prestito": {
   "esito_voluto_destra": "bloccato",
   "atto": "Finanziamento dell'Ucraina per il 2027 (prestito di riparazione dagli asset russi o nuovo debito comune) e rinnovo delle sanzioni alla Russia",
   "atto_en": "Financing Ukraine for 2027 (reparations loan from Russian assets or new joint borrowing) and renewal of Russia sanctions",
   "atto_de": "Ukraine-Finanzierung 2027 (Reparationskredit aus russischen Vermögen oder neue gemeinsame Schulden) und Verlängerung der Russland-Sanktionen",
   "voto_reale": {
    "data": "2026-09-22",
    "esito": "Sanzioni individuali prorogate di 36 mesi all'unanimità dopo la cancellazione di Usmanov (richiesta francese) e Fridman (veto slovacco); Lettonia astenuta. Il 16 ottobre il Consiglio europeo ha solo incaricato la Commissione di proporre come coprire il fabbisogno 2027.",
    "fonte": "https://www.euronews.com/2026/09/22/eu-renews-russia-sanctions-but-removes-usmanov-at-frances-request"
   },
   "governi": {
    "AT": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.eeas.europa.eu/delegations/ukraine/council-finalises-%E2%82%AC90-billion-support-loan-ukraine_en",
     "data": "2026-04",
     "nota": "Austria partecipa alla cooperazione rafforzata a 24 sul prestito da 90 miliardi.",
     "nota_en": "Austria takes part in the 24-state enhanced cooperation on the EUR 90bn loan.",
     "nota_de": "Österreich beteiligt sich an der verstärkten Zusammenarbeit der 24 zum 90-Mrd.-Kredit."
    },
    "BE": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://www.eurointegration.com.ua/eng/news/2026/10/16/7247864/",
     "data": "2026-10",
     "nota": "De Wever resta contrario all'uso degli asset russi immobilizzati prima di un accordo di pace; partecipa invece al prestito con debito comune.",
     "nota_en": "De Wever remains opposed to using immobilised Russian assets before a peace deal; Belgium does take part in the joint-debt loan.",
     "nota_de": "De Wever lehnt die Nutzung eingefrorener russischer Vermögen vor einem Friedensabkommen weiter ab; am Kredit mit gemeinsamen Schulden beteiligt sich Belgien."
    },
    "BG": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://www.bta.bg/en/news/1160360-pm-radev-says-he-will-oppose-eu-s-21st-sanctions-package-against-russia",
     "data": "2026-07",
     "nota": "Il governo Radev ha posto riserve sul 21° pacchetto di sanzioni per tutelare la raffineria di Burgas; il pacchetto è stato poi adottato.",
     "nota_en": "The Radev government placed reservations on the 21st sanctions package to protect the Burgas refinery; the package was later adopted.",
     "nota_de": "Die Regierung Radev legte zum Schutz der Raffinerie Burgas Vorbehalte gegen das 21. Sanktionspaket ein; das Paket wurde später angenommen."
    },
    "CY": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.eeas.europa.eu/delegations/ukraine/council-finalises-%E2%82%AC90-billion-support-loan-ukraine_en",
     "data": "2026-04",
     "nota": "Cipro partecipa alla cooperazione rafforzata a 24 sul prestito da 90 miliardi.",
     "nota_en": "Cyprus takes part in the 24-state enhanced cooperation on the EUR 90bn loan.",
     "nota_de": "Zypern beteiligt sich an der verstärkten Zusammenarbeit der 24 zum 90-Mrd.-Kredit."
    },
    "CZ": {
     "voto": "opt_out",
     "confidenza": "alta",
     "fonte": "https://uv.gov.cz/en/media-centrum/aktualne/prime-minister-babis-in-brussels-the-european-council-has-agreed-on-a-loan-to-ukraine--the-czech-republic-will-not-back-it-with-guarantees-224770/",
     "data": "2025-12",
     "nota": "Il governo Babiš non garantisce il prestito all'Ucraina e resta fuori dalla cooperazione rafforzata a 24.",
     "nota_en": "The Babiš government does not guarantee the Ukraine loan and stays outside the 24-state enhanced cooperation.",
     "nota_de": "Die Regierung Babiš bürgt nicht für den Ukraine-Kredit und bleibt außerhalb der verstärkten Zusammenarbeit der 24."
    },
    "DE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://www.kyivpost.com/post/87171",
     "data": "2026-10",
     "nota": "Merz afferma che l'UE dovrà aumentare i fondi per l'Ucraina nel 2027 e che gli asset russi devono restare sotto controllo europeo.",
     "nota_en": "Merz says the EU will have to increase funding for Ukraine in 2027 and that Russian assets must stay under European control.",
     "nota_de": "Merz sagt, die EU müsse die Mittel für die Ukraine 2027 erhöhen; die russischen Vermögen müssten unter europäischer Kontrolle bleiben."
    },
    "DK": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://unn.ua/en/news/the-eu-is-discussing-the-use-of-frozen-russian-assets-for-ukraine-again-who-is-for-it-and-who-is-against-it",
     "data": "2026-10",
     "nota": "Frederiksen indica gli asset congelati come la fonte più ovvia per sostenere l'Ucraina.",
     "nota_en": "Frederiksen calls the frozen assets the most obvious source of support for Ukraine.",
     "nota_de": "Frederiksen nennt die eingefrorenen Vermögen die naheliegendste Quelle zur Unterstützung der Ukraine."
    },
    "EE": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.euronews.com/my-europe/2026/08/28/once-again-the-eu-grapples-with-thorny-questions-about-russian-assets",
     "data": "2026-08",
     "nota": "Estonia considerata favorevole al rilancio dell'uso degli asset russi, pur senza aver firmato la lettera di agosto.",
     "nota_en": "Estonia is considered supportive of reviving the use of Russian assets, though it did not sign the August letter.",
     "nota_de": "Estland gilt als Befürworter einer Wiederaufnahme der Nutzung russischer Vermögen, hat den Brief vom August aber nicht unterzeichnet."
    },
    "ES": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://www.euronews.com/my-europe/2026/08/28/once-again-the-eu-grapples-with-thorny-questions-about-russian-assets",
     "data": "2026-08",
     "nota": "Spagna tra i firmatari della lettera del 27 agosto 2026 che chiede di riprendere l'uso degli asset russi per l'Ucraina.",
     "nota_en": "Spain co-signed the 27 August 2026 letter asking to revive the use of Russian assets for Ukraine.",
     "nota_de": "Spanien unterzeichnete den Brief vom 27. August 2026, der die Nutzung russischer Vermögen für die Ukraine wieder aufgreifen will."
    },
    "FI": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.euronews.com/my-europe/2026/08/28/once-again-the-eu-grapples-with-thorny-questions-about-russian-assets",
     "data": "2026-08",
     "nota": "Finlandia considerata favorevole al rilancio dell'uso degli asset russi, pur senza aver firmato la lettera di agosto.",
     "nota_en": "Finland is considered supportive of reviving the use of Russian assets, though it did not sign the August letter.",
     "nota_de": "Finnland gilt als Befürworter einer Wiederaufnahme der Nutzung russischer Vermögen, hat den Brief vom August aber nicht unterzeichnet."
    },
    "FR": {
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://www.euronews.com/2026/09/22/eu-renews-russia-sanctions-but-removes-usmanov-at-frances-request",
     "data": "2026-09",
     "nota": "La Francia ha condizionato il rinnovo delle sanzioni alla cancellazione di Usmanov e ha sollevato dubbi giuridici sugli asset.",
     "nota_en": "France conditioned the sanctions renewal on delisting Usmanov and has raised legal doubts about the assets.",
     "nota_de": "Frankreich knüpfte die Sanktionsverlängerung an die Streichung Usmanows und äußerte rechtliche Bedenken zu den Vermögen."
    },
    "GR": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.eeas.europa.eu/delegations/ukraine/council-finalises-%E2%82%AC90-billion-support-loan-ukraine_en",
     "data": "2026-04",
     "nota": "Grecia partecipa alla cooperazione rafforzata a 24 sul prestito da 90 miliardi.",
     "nota_en": "Greece takes part in the 24-state enhanced cooperation on the EUR 90bn loan.",
     "nota_de": "Griechenland beteiligt sich an der verstärkten Zusammenarbeit der 24 zum 90-Mrd.-Kredit."
    },
    "HR": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.eeas.europa.eu/delegations/ukraine/council-finalises-%E2%82%AC90-billion-support-loan-ukraine_en",
     "data": "2026-04",
     "nota": "Croazia partecipa alla cooperazione rafforzata a 24 sul prestito da 90 miliardi.",
     "nota_en": "Croatia takes part in the 24-state enhanced cooperation on the EUR 90bn loan.",
     "nota_de": "Kroatien beteiligt sich an der verstärkten Zusammenarbeit der 24 zum 90-Mrd.-Kredit."
    },
    "HU": {
     "voto": "opt_out",
     "confidenza": "alta",
     "fonte": "https://united24media.com/war-in-ukraine/slovakia-and-hungary-opt-out-of-new-eu-aid-package-for-ukraine-23534",
     "data": "2026-10",
     "nota": "Il governo Magyar non partecipa al prestito da 90 miliardi né al nuovo meccanismo 2027, ma non blocca gli altri.",
     "nota_en": "The Magyar government does not take part in the EUR 90bn loan or the new 2027 mechanism, but does not block others.",
     "nota_de": "Die Regierung Magyar beteiligt sich weder am 90-Mrd.-Kredit noch am neuen Mechanismus für 2027, blockiert aber die anderen nicht."
    },
    "IE": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.eeas.europa.eu/delegations/ukraine/council-finalises-%E2%82%AC90-billion-support-loan-ukraine_en",
     "data": "2026-04",
     "nota": "Irlanda partecipa alla cooperazione rafforzata a 24 sul prestito da 90 miliardi; Martin cauto sul riaprire il dossier asset.",
     "nota_en": "Ireland takes part in the 24-state enhanced cooperation on the EUR 90bn loan; Martin is cautious about reopening the assets debate.",
     "nota_de": "Irland beteiligt sich an der verstärkten Zusammenarbeit der 24 zum 90-Mrd.-Kredit; Martin ist zurückhaltend bei einer Neuauflage der Vermögensdebatte."
    },
    "IT": {
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://www.euronews.com/my-europe/2026/08/28/once-again-the-eu-grapples-with-thorny-questions-about-russian-assets",
     "data": "2026-08",
     "nota": "L'Italia ha sostenuto le riserve belghe sugli asset e preferito il debito comune; Meloni chiede il rispetto del diritto internazionale.",
     "nota_en": "Italy backed Belgium's reservations on the assets and preferred joint debt; Meloni insists on respect for international law.",
     "nota_de": "Italien unterstützte die belgischen Vorbehalte zu den Vermögen und bevorzugte gemeinsame Schulden; Meloni pocht auf das Völkerrecht."
    },
    "LT": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.euronews.com/my-europe/2026/08/28/once-again-the-eu-grapples-with-thorny-questions-about-russian-assets",
     "data": "2026-08",
     "nota": "Lituania considerata favorevole al rilancio dell'uso degli asset russi, pur senza aver firmato la lettera di agosto.",
     "nota_en": "Lithuania is considered supportive of reviving the use of Russian assets, though it did not sign the August letter.",
     "nota_de": "Litauen gilt als Befürworter einer Wiederaufnahme der Nutzung russischer Vermögen, hat den Brief vom August aber nicht unterzeichnet."
    },
    "LU": {
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://www.euronews.com/2026/09/22/eu-renews-russia-sanctions-but-removes-usmanov-at-frances-request",
     "data": "2026-09",
     "nota": "Il Lussemburgo ha chiesto che, se cancellato Usmanov, fosse cancellato anche Fridman, che gli ha fatto causa per gli asset congelati.",
     "nota_en": "Luxembourg argued that if Usmanov was delisted Fridman should be too; Fridman is suing Luxembourg over his frozen assets.",
     "nota_de": "Luxemburg verlangte, bei einer Streichung Usmanows auch Fridman zu streichen, der Luxemburg wegen seiner eingefrorenen Vermögen verklagt."
    },
    "LV": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://unn.ua/en/news/the-eu-is-discussing-the-use-of-frozen-russian-assets-for-ukraine-again-who-is-for-it-and-who-is-against-it",
     "data": "2026-10",
     "nota": "Il premier Kulbergs chiede di usare subito gli asset congelati per l'Ucraina; a settembre la Lettonia si è astenuta sulle cancellazioni dalla lista sanzioni.",
     "nota_en": "PM Kulbergs wants the frozen assets used for Ukraine now; in September Latvia abstained on the sanctions delistings.",
     "nota_de": "Premier Kulbergs will die eingefrorenen Vermögen sofort für die Ukraine nutzen; im September enthielt sich Lettland bei den Sanktionsstreichungen."
    },
    "MT": {
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://www.euronews.com/my-europe/2026/08/28/once-again-the-eu-grapples-with-thorny-questions-about-russian-assets",
     "data": "2026-08",
     "nota": "Malta ha sostenuto le riserve belghe sull'uso degli asset russi nel dibattito del 2025.",
     "nota_en": "Malta backed Belgium's reservations on using Russian assets in the 2025 debate.",
     "nota_de": "Malta unterstützte in der Debatte 2025 die belgischen Vorbehalte gegen die Nutzung russischer Vermögen."
    },
    "NL": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://www.euronews.com/my-europe/2026/08/28/once-again-the-eu-grapples-with-thorny-questions-about-russian-assets",
     "data": "2026-08",
     "nota": "Paesi Bassi tra i firmatari della lettera del 27 agosto 2026 che chiede di riprendere l'uso degli asset russi per l'Ucraina.",
     "nota_en": "Netherlands co-signed the 27 August 2026 letter asking to revive the use of Russian assets for Ukraine.",
     "nota_de": "Niederlande unterzeichnete den Brief vom 27. August 2026, der die Nutzung russischer Vermögen für die Ukraine wieder aufgreifen will."
    },
    "PL": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://www.euronews.com/my-europe/2026/08/28/once-again-the-eu-grapples-with-thorny-questions-about-russian-assets",
     "data": "2026-08",
     "nota": "Polonia tra i firmatari della lettera del 27 agosto 2026 che chiede di riprendere l'uso degli asset russi per l'Ucraina.",
     "nota_en": "Poland co-signed the 27 August 2026 letter asking to revive the use of Russian assets for Ukraine.",
     "nota_de": "Polen unterzeichnete den Brief vom 27. August 2026, der die Nutzung russischer Vermögen für die Ukraine wieder aufgreifen will."
    },
    "PT": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.eeas.europa.eu/delegations/ukraine/council-finalises-%E2%82%AC90-billion-support-loan-ukraine_en",
     "data": "2026-04",
     "nota": "Portogallo partecipa alla cooperazione rafforzata a 24 sul prestito da 90 miliardi.",
     "nota_en": "Portugal takes part in the 24-state enhanced cooperation on the EUR 90bn loan.",
     "nota_de": "Portugal beteiligt sich an der verstärkten Zusammenarbeit der 24 zum 90-Mrd.-Kredit."
    },
    "RO": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.eeas.europa.eu/delegations/ukraine/council-finalises-%E2%82%AC90-billion-support-loan-ukraine_en",
     "data": "2026-04",
     "nota": "Romania partecipa alla cooperazione rafforzata a 24 sul prestito da 90 miliardi (prima del governo provvisorio).",
     "nota_en": "Romania takes part in the 24-state enhanced cooperation on the EUR 90bn loan (before the caretaker government).",
     "nota_de": "Rumänien beteiligt sich an der verstärkten Zusammenarbeit der 24 zum 90-Mrd.-Kredit (vor der Übergangsregierung)."
    },
    "SE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://www.euronews.com/my-europe/2026/08/28/once-again-the-eu-grapples-with-thorny-questions-about-russian-assets",
     "data": "2026-08",
     "nota": "Svezia tra i firmatari della lettera del 27 agosto 2026 che chiede di riprendere l'uso degli asset russi per l'Ucraina.",
     "nota_en": "Sweden co-signed the 27 August 2026 letter asking to revive the use of Russian assets for Ukraine.",
     "nota_de": "Schweden unterzeichnete den Brief vom 27. August 2026, der die Nutzung russischer Vermögen für die Ukraine wieder aufgreifen will."
    },
    "SI": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.eeas.europa.eu/delegations/ukraine/council-finalises-%E2%82%AC90-billion-support-loan-ukraine_en",
     "data": "2026-04",
     "nota": "Slovenia partecipa alla cooperazione rafforzata a 24 sul prestito da 90 miliardi (decisione del governo precedente a Janša).",
     "nota_en": "Slovenia takes part in the 24-state enhanced cooperation on the EUR 90bn loan (decision taken by the government before Janša).",
     "nota_de": "Slowenien beteiligt sich an der verstärkten Zusammenarbeit der 24 zum 90-Mrd.-Kredit (Entscheidung der Regierung vor Janša)."
    },
    "SK": {
     "voto": "opt_out",
     "confidenza": "alta",
     "fonte": "https://united24media.com/war-in-ukraine/slovakia-and-hungary-opt-out-of-new-eu-aid-package-for-ukraine-23534",
     "data": "2026-10",
     "nota": "Fico esclude la partecipazione al finanziamento 2027 senza bloccarlo; a settembre ha condizionato il rinnovo delle sanzioni alla cancellazione di Fridman.",
     "nota_en": "Fico rules out joining 2027 financing without blocking it; in September he conditioned the sanctions renewal on delisting Fridman.",
     "nota_de": "Fico schließt eine Beteiligung an der Finanzierung 2027 aus, ohne sie zu blockieren; im September knüpfte er die Sanktionsverlängerung an die Streichung Fridmans."
    }
   },
   "nuovi": {
    "AT:destra_nazionalista": {
     "partito": "FPÖ",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati FPÖ hanno votato contro il regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (5 contro).",
     "nota_en": "FPÖ MEPs voted against the Ukraine Support Loan regulation on 11 February 2026 (5 against).",
     "nota_de": "Die FPÖ-Abgeordneten stimmten am 11. Februar 2026 gegen den Ukraine-Unterstützungskredit (5 dagegen)."
    },
    "BE:destra_nazionalista": {
     "partito": "Vlaams Belang",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati Vlaams Belang hanno votato contro il regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (2 contro).",
     "nota_en": "Vlaams Belang MEPs voted against the Ukraine Support Loan regulation on 11 February 2026 (2 against).",
     "nota_de": "Die Vlaams Belang-Abgeordneten stimmten am 11. Februar 2026 gegen den Ukraine-Unterstützungskredit (2 dagegen)."
    },
    "CY:centrodestra": {
     "partito": "DISY",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati DISY hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (2 a favore).",
     "nota_en": "DISY MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (2 in favour).",
     "nota_de": "Die DISY-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (2 dafür)."
    },
    "DE:destra_nazionalista": {
     "partito": "AfD",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati AfD hanno votato contro il regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (15 contro).",
     "nota_en": "AfD MEPs voted against the Ukraine Support Loan regulation on 11 February 2026 (15 against).",
     "nota_de": "Die AfD-Abgeordneten stimmten am 11. Februar 2026 gegen den Ukraine-Unterstützungskredit (15 dagegen)."
    },
    "DK:centrodestra": {
     "partito": "Liberal Alliance",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati Liberal Alliance hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (1 a favore). Liberal Alliance ha un solo eurodeputato (PPE).",
     "nota_en": "Liberal Alliance MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (1 in favour). Liberal Alliance has a single MEP (EPP).",
     "nota_de": "Die Liberal Alliance-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (1 dafür). Liberal Alliance hat nur einen Abgeordneten (EVP)."
    },
    "EE:centrodestra": {
     "partito": "Isamaa",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati Isamaa hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (2 a favore).",
     "nota_en": "Isamaa MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (2 in favour).",
     "nota_de": "Die Isamaa-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (2 dafür)."
    },
    "ES:centrodestra": {
     "partito": "PP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati PP hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (20 a favore). Il partner Vox si è astenuto (5).",
     "nota_en": "PP MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (20 in favour). Partner Vox abstained (5).",
     "nota_de": "Die PP-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (20 dafür). Partner Vox enthielt sich (5)."
    },
    "FI:centrosinistra": {
     "partito": "SDP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati SDP hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (2 a favore).",
     "nota_en": "SDP MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (2 in favour).",
     "nota_de": "Die SDP-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (2 dafür)."
    },
    "FR:destra_nazionalista": {
     "partito": "RN",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati RN hanno votato contro il regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (26 contro).",
     "nota_en": "RN MEPs voted against the Ukraine Support Loan regulation on 11 February 2026 (26 against).",
     "nota_de": "Die RN-Abgeordneten stimmten am 11. Februar 2026 gegen den Ukraine-Unterstützungskredit (26 dagegen)."
    },
    "IE:sinistra": {
     "partito": "Sinn Féin",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati Sinn Féin hanno votato contro il regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (2 contro).",
     "nota_en": "Sinn Féin MEPs voted against the Ukraine Support Loan regulation on 11 February 2026 (2 against).",
     "nota_de": "Die Sinn Féin-Abgeordneten stimmten am 11. Februar 2026 gegen den Ukraine-Unterstützungskredit (2 dagegen)."
    },
    "LT:centrodestra": {
     "partito": "TS-LKD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati TS-LKD hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (2 a favore).",
     "nota_en": "TS-LKD MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (2 in favour).",
     "nota_de": "Die TS-LKD-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (2 dafür)."
    },
    "NL:centrosinistra": {
     "partito": "GL-PvdA (PRO)",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati GL-PvdA (PRO) hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (6 a favore). Gli altri due eurodeputati non hanno votato.",
     "nota_en": "GL-PvdA (PRO) MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (6 in favour). The other two MEPs did not vote.",
     "nota_de": "Die GL-PvdA (PRO)-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (6 dafür). Die übrigen zwei Abgeordneten stimmten nicht ab."
    },
    "NL:destra_nazionalista": {
     "partito": "PVV",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati PVV hanno votato contro il regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (6 contro).",
     "nota_en": "PVV MEPs voted against the Ukraine Support Loan regulation on 11 February 2026 (6 against).",
     "nota_de": "Die PVV-Abgeordneten stimmten am 11. Februar 2026 gegen den Ukraine-Unterstützungskredit (6 dagegen)."
    },
    "PL:destra_nazionalista": {
     "partito": "PiS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati PiS hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (16 a favore, 1 contro).",
     "nota_en": "PiS MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (16 in favour, 1 against).",
     "nota_de": "Die PiS-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (16 dafür, 1 dagegen)."
    },
    "PT:centrosinistra": {
     "partito": "PS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati PS hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (7 a favore).",
     "nota_en": "PS MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (7 in favour).",
     "nota_de": "Die PS-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (7 dafür)."
    },
    "PT:destra_nazionalista": {
     "partito": "Chega",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati Chega hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (1 a favore). L'altro eurodeputato non ha votato.",
     "nota_en": "Chega MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (1 in favour). The other MEP did not vote.",
     "nota_de": "Die Chega-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (1 dafür). Der andere Abgeordnete stimmte nicht ab."
    },
    "RO:destra_nazionalista": {
     "partito": "AUR",
     "voto": "contrario",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati AUR hanno votato contro il regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (1 contro). Gli altri due eurodeputati AUR non hanno votato.",
     "nota_en": "AUR MEPs voted against the Ukraine Support Loan regulation on 11 February 2026 (1 against). The other two AUR MEPs did not vote.",
     "nota_de": "Die AUR-Abgeordneten stimmten am 11. Februar 2026 gegen den Ukraine-Unterstützungskredit (1 dagegen). Die übrigen zwei AUR-Abgeordneten stimmten nicht ab."
    },
    "SE:centrosinistra": {
     "partito": "Socialdemokraterna",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati Socialdemokraterna hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (5 a favore).",
     "nota_en": "Socialdemokraterna MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (5 in favour).",
     "nota_de": "Die Socialdemokraterna-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (5 dafür)."
    },
    "SK:centro": {
     "partito": "Progresívne Slovensko",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/184699",
     "data": "2026-02",
     "nota": "Gli eurodeputati Progresívne Slovensko hanno votato a favore del regolamento sul prestito di sostegno all'Ucraina l'11 febbraio 2026 (4 a favore).",
     "nota_en": "Progresívne Slovensko MEPs voted for the Ukraine Support Loan regulation on 11 February 2026 (4 in favour).",
     "nota_de": "Die Progresívne Slovensko-Abgeordneten stimmten am 11. Februar 2026 für den Ukraine-Unterstützungskredit (4 dafür)."
    }
   }
  },
  "allargamento": {
   "esito_voluto_destra": "bloccato",
   "atto": "Apertura dei cluster negoziali 4 (agenda verde) e 5 (agricoltura e coesione) con Ucraina e Moldova",
   "atto_en": "Opening negotiating clusters 4 (green agenda) and 5 (agriculture and cohesion) with Ukraine and Moldova",
   "atto_de": "Eröffnung der Verhandlungscluster 4 (grüne Agenda) und 5 (Landwirtschaft und Kohäsion) mit der Ukraine und Moldau",
   "voto_reale": {
    "data": "2026-10-13",
    "esito": "Tutti i 27 hanno approvato l'apertura dei cluster 2 e 3 per Ucraina e Moldova (conferenze intergovernative a Lussemburgo), dopo che l'Ungheria ha tolto il veto.",
    "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/"
   },
   "governi": {
    "AT": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Austria ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Austria agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Österreich stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "BE": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Belgio ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Belgium agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Belgien stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "BG": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Bulgaria ha approvato con tutti gli Stati l'apertura dei cluster 2 e 3; la stampa riporta diffidenza sull'integrazione agricola.",
     "nota_en": "Bulgaria agreed with all member states to open clusters 2 and 3; press reports note distrust over agricultural integration.",
     "nota_de": "Bulgarien stimmte mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu; Presseberichte nennen Misstrauen bei der Agrarintegration."
    },
    "CY": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Cipro ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Cyprus agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Zypern stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "CZ": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Cechia ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Czechia agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Tschechien stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "DE": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Germania ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Germany agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Deutschland stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "DK": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Danimarca ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Denmark agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Dänemark stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "EE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://vm.ee/en/news/tsahkna-luxembourg-european-union-opens-first-accession-negotiation-cluster-ukraine-and",
     "data": "2026-06",
     "nota": "Il ministro Tsahkna ha accolto l'apertura del primo cluster con Ucraina e Moldova a Lussemburgo.",
     "nota_en": "Minister Tsahkna welcomed the opening of the first cluster with Ukraine and Moldova in Luxembourg.",
     "nota_de": "Minister Tsahkna begrüßte in Luxemburg die Eröffnung des ersten Clusters mit der Ukraine und Moldau."
    },
    "ES": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Spagna ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Spain agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Spanien stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "FI": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Finlandia ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Finland agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Finnland stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "FR": {
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://www.eurointegration.com.ua/eng/news/2026/05/15/7237617/",
     "data": "2026-05",
     "nota": "La Francia, con la Polonia, ha chiesto di rinviare i cluster restanti per i timori del settore agricolo.",
     "nota_en": "France, together with Poland, has pushed to postpone the remaining clusters over farm-sector concerns.",
     "nota_de": "Frankreich drängte gemeinsam mit Polen wegen Sorgen der Landwirtschaft auf eine Verschiebung der verbleibenden Cluster."
    },
    "GR": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Grecia ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Greece agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Griechenland stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "HR": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Croazia ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Croatia agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Kroatien stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "HU": {
     "voto": "condizionato",
     "confidenza": "alta",
     "fonte": "https://www.kyivpost.com/post/87303",
     "data": "2026-10",
     "nota": "Il governo Magyar ha tolto il veto sui cluster 2 e 3 dopo la legge ucraina sulle scuole delle minoranze, ma lega ogni ulteriore passo al rispetto dei diritti della minoranza ungherese.",
     "nota_en": "The Magyar government lifted its veto on clusters 2 and 3 after Ukraine's minority-schools law, but ties further steps to respect for Hungarian minority rights.",
     "nota_de": "Die Regierung Magyar hob ihr Veto gegen die Cluster 2 und 3 nach dem ukrainischen Minderheitenschulgesetz auf, knüpft weitere Schritte aber an die Rechte der ungarischen Minderheit."
    },
    "IE": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Irlanda ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Ireland agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Irland stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "IT": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Italia ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Italy agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Italien stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "LT": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Lituania ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Lithuania agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Litauen stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "LU": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Lussemburgo ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Luxembourg agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Luxemburg stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "LV": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Lettonia ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Latvia agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Lettland stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "MT": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Malta ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Malta agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Malta stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "NL": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Paesi Bassi ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Netherlands agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Niederlande stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "PL": {
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://www.eurointegration.com.ua/eng/news/2026/05/15/7237617/",
     "data": "2026-05",
     "nota": "La Polonia non blocca i cluster ma frena su agricoltura e trasporti (cluster 4 e 5) per timore della concorrenza ucraina.",
     "nota_en": "Poland does not block the clusters but holds back on agriculture and transport (clusters 4 and 5) over fears of Ukrainian competition.",
     "nota_de": "Polen blockiert die Cluster nicht, bremst aber bei Landwirtschaft und Verkehr (Cluster 4 und 5) aus Sorge vor ukrainischer Konkurrenz."
    },
    "PT": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Portogallo ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Portugal agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Portugal stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "RO": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Romania ha approvato con tutti gli Stati l'apertura dei cluster 2 e 3; la stampa riporta diffidenza sull'integrazione agricola.",
     "nota_en": "Romania agreed with all member states to open clusters 2 and 3; press reports note distrust over agricultural integration.",
     "nota_de": "Rumänien stimmte mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu; Presseberichte nennen Misstrauen bei der Agrarintegration."
    },
    "SE": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Svezia ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Sweden agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Schweden stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "SI": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Slovenia ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Slovenia agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Slowenien stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    },
    "SK": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://www.pravda.com.ua/eng/news/2026/10/12/8057677/",
     "data": "2026-10",
     "nota": "Slovacchia ha approvato con tutti gli Stati membri l'apertura dei cluster 2 e 3 il 12-13 ottobre 2026, senza obiezioni note.",
     "nota_en": "Slovakia agreed with all member states to open clusters 2 and 3 on 12-13 October 2026, with no reported objections.",
     "nota_de": "Slowakei stimmte am 12./13. Oktober 2026 mit allen Mitgliedstaaten der Eröffnung der Cluster 2 und 3 zu, ohne bekannte Einwände."
    }
   },
   "nuovi": {
    "AT:destra_nazionalista": {
     "partito": "FPÖ",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati FPÖ hanno votato contro le risoluzioni 2026 su Ucraina (6 contro) e Moldova (6 contro) che sostengono l'adesione.",
     "nota_en": "FPÖ MEPs voted against the 2026 resolutions on Ukraine (6 against) and Moldova (6 against) backing accession.",
     "nota_de": "Die FPÖ-Abgeordneten stimmten gegen die Entschließungen 2026 zu Ukraine (6 dagegen) und Moldau (6 dagegen), die den Beitritt unterstützen."
    },
    "BE:destra_nazionalista": {
     "partito": "Vlaams Belang",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati Vlaams Belang hanno votato contro le risoluzioni 2026 su Ucraina (3 contro) e Moldova (3 contro) che sostengono l'adesione.",
     "nota_en": "Vlaams Belang MEPs voted against the 2026 resolutions on Ukraine (3 against) and Moldova (3 against) backing accession.",
     "nota_de": "Die Vlaams Belang-Abgeordneten stimmten gegen die Entschließungen 2026 zu Ukraine (3 dagegen) und Moldau (3 dagegen), die den Beitritt unterstützen."
    },
    "CY:centrodestra": {
     "partito": "DISY",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati DISY hanno votato a favore delle risoluzioni 2026 su Ucraina (2 a favore) e Moldova (2 a favore) che sostengono l'adesione.",
     "nota_en": "DISY MEPs voted for the 2026 resolutions on Ukraine (2 in favour) and Moldova (2 in favour) backing accession.",
     "nota_de": "Die DISY-Abgeordneten stimmten für die Entschließungen 2026 zu Ukraine (2 dafür) und Moldau (2 dafür), die den Beitritt unterstützen."
    },
    "DE:destra_nazionalista": {
     "partito": "AfD",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati AfD hanno votato contro le risoluzioni 2026 su Ucraina (14 contro) e Moldova (13 contro) che sostengono l'adesione.",
     "nota_en": "AfD MEPs voted against the 2026 resolutions on Ukraine (14 against) and Moldova (13 against) backing accession.",
     "nota_de": "Die AfD-Abgeordneten stimmten gegen die Entschließungen 2026 zu Ukraine (14 dagegen) und Moldau (13 dagegen), die den Beitritt unterstützen."
    },
    "DK:centrodestra": {
     "partito": "Liberal Alliance",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati Liberal Alliance hanno votato a favore delle risoluzioni 2026 su Ucraina (1 a favore) e Moldova (1 a favore) che sostengono l'adesione. Liberal Alliance ha un solo eurodeputato (PPE).",
     "nota_en": "Liberal Alliance MEPs voted for the 2026 resolutions on Ukraine (1 in favour) and Moldova (1 in favour) backing accession. Liberal Alliance has a single MEP (EPP).",
     "nota_de": "Die Liberal Alliance-Abgeordneten stimmten für die Entschließungen 2026 zu Ukraine (1 dafür) und Moldau (1 dafür), die den Beitritt unterstützen. Liberal Alliance hat nur einen Abgeordneten (EVP)."
    },
    "EE:centrodestra": {
     "partito": "Isamaa",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati Isamaa hanno votato a favore delle risoluzioni 2026 su Ucraina (2 a favore) e Moldova (2 a favore) che sostengono l'adesione.",
     "nota_en": "Isamaa MEPs voted for the 2026 resolutions on Ukraine (2 in favour) and Moldova (2 in favour) backing accession.",
     "nota_de": "Die Isamaa-Abgeordneten stimmten für die Entschließungen 2026 zu Ukraine (2 dafür) und Moldau (2 dafür), die den Beitritt unterstützen."
    },
    "ES:centrodestra": {
     "partito": "PP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati PP hanno votato a favore delle risoluzioni 2026 su Ucraina (19 a favore) e Moldova (19 a favore) che sostengono l'adesione. Il partner Vox si è astenuto sull'Ucraina e ha votato contro sulla Moldova.",
     "nota_en": "PP MEPs voted for the 2026 resolutions on Ukraine (19 in favour) and Moldova (19 in favour) backing accession. Partner Vox abstained on Ukraine and voted against on Moldova.",
     "nota_de": "Die PP-Abgeordneten stimmten für die Entschließungen 2026 zu Ukraine (19 dafür) und Moldau (19 dafür), die den Beitritt unterstützen. Partner Vox enthielt sich zur Ukraine und stimmte zu Moldau dagegen."
    },
    "FI:centrosinistra": {
     "partito": "SDP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati SDP hanno votato a favore delle risoluzioni 2026 su Ucraina (2 a favore) e Moldova (2 a favore) che sostengono l'adesione.",
     "nota_en": "SDP MEPs voted for the 2026 resolutions on Ukraine (2 in favour) and Moldova (2 in favour) backing accession.",
     "nota_de": "Die SDP-Abgeordneten stimmten für die Entschließungen 2026 zu Ukraine (2 dafür) und Moldau (2 dafür), die den Beitritt unterstützen."
    },
    "FR:destra_nazionalista": {
     "partito": "RN",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati RN hanno votato contro le risoluzioni 2026 su Ucraina (23 contro) e Moldova (23 contro) che sostengono l'adesione.",
     "nota_en": "RN MEPs voted against the 2026 resolutions on Ukraine (23 against) and Moldova (23 against) backing accession.",
     "nota_de": "Die RN-Abgeordneten stimmten gegen die Entschließungen 2026 zu Ukraine (23 dagegen) und Moldau (23 dagegen), die den Beitritt unterstützen."
    },
    "IE:sinistra": {
     "partito": "Sinn Féin",
     "voto": "astensione",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Voto misto degli eurodeputati Sinn Féin sulle risoluzioni 2026: Ucraina (1 astenuto), Moldova (1 astenuto). L'altro eurodeputato non ha votato; sulla strategia di allargamento (marzo 2026) entrambi contro.",
     "nota_en": "Mixed votes by Sinn Féin MEPs on the 2026 resolutions: Ukraine (1 abstaining), Moldova (1 abstaining). The other MEP did not vote; both voted against the enlargement strategy (March 2026).",
     "nota_de": "Gemischtes Abstimmungsverhalten der Sinn Féin-Abgeordneten zu den Entschließungen 2026: Ukraine (1 Enthaltung), Moldau (1 Enthaltung). Der andere Abgeordnete stimmte nicht ab; beide stimmten gegen die Erweiterungsstrategie (März 2026)."
    },
    "LT:centrodestra": {
     "partito": "TS-LKD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati TS-LKD hanno votato a favore delle risoluzioni 2026 su Ucraina (2 a favore) e Moldova (3 a favore) che sostengono l'adesione.",
     "nota_en": "TS-LKD MEPs voted for the 2026 resolutions on Ukraine (2 in favour) and Moldova (3 in favour) backing accession.",
     "nota_de": "Die TS-LKD-Abgeordneten stimmten für die Entschließungen 2026 zu Ukraine (2 dafür) und Moldau (3 dafür), die den Beitritt unterstützen."
    },
    "NL:centrosinistra": {
     "partito": "GL-PvdA (PRO)",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati GL-PvdA (PRO) hanno votato a favore delle risoluzioni 2026 su Ucraina (6 a favore, 1 contro) e Moldova (7 a favore) che sostengono l'adesione.",
     "nota_en": "GL-PvdA (PRO) MEPs voted for the 2026 resolutions on Ukraine (6 in favour, 1 against) and Moldova (7 in favour) backing accession.",
     "nota_de": "Die GL-PvdA (PRO)-Abgeordneten stimmten für die Entschließungen 2026 zu Ukraine (6 dafür, 1 dagegen) und Moldau (7 dafür), die den Beitritt unterstützen."
    },
    "NL:destra_nazionalista": {
     "partito": "PVV",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati PVV hanno votato contro le risoluzioni 2026 su Ucraina (6 contro) e Moldova (6 contro) che sostengono l'adesione.",
     "nota_en": "PVV MEPs voted against the 2026 resolutions on Ukraine (6 against) and Moldova (6 against) backing accession.",
     "nota_de": "Die PVV-Abgeordneten stimmten gegen die Entschließungen 2026 zu Ukraine (6 dagegen) und Moldau (6 dagegen), die den Beitritt unterstützen."
    },
    "PL:destra_nazionalista": {
     "partito": "PiS",
     "voto": "condizionato",
     "confidenza": "media",
     "fonte": "https://www.polsatnews.pl/wiadomosc/2026-07-04/kaczynski-napisal-list-do-partii-kategoryczna-deklaracja-ws-ukrainy/",
     "data": "2026-07",
     "nota": "Kaczyński ha scritto a luglio 2026 che il PiS al governo non permetterà l'adesione dell'Ucraina finché non ripudierà il culto di UPA/Bandera; all'Europarlamento PiS ha votato 15-3 sulla relazione Ucraina e 19-0 su quella Moldova.",
     "nota_en": "Kaczyński wrote in July 2026 that a PiS government would not allow Ukraine's accession until it rejects the UPA/Bandera cult; in Parliament PiS voted 15-3 on the Ukraine report and 19-0 on the Moldova report.",
     "nota_de": "Kaczyński schrieb im Juli 2026, eine PiS-Regierung werde den Beitritt der Ukraine nicht zulassen, solange sie den UPA/Bandera-Kult nicht aufgibt; im Parlament stimmte PiS 15-3 zum Ukraine- und 19-0 zum Moldau-Bericht."
    },
    "PT:centrosinistra": {
     "partito": "PS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati PS hanno votato a favore delle risoluzioni 2026 su Ucraina (7 a favore) e Moldova (7 a favore) che sostengono l'adesione.",
     "nota_en": "PS MEPs voted for the 2026 resolutions on Ukraine (7 in favour) and Moldova (7 in favour) backing accession.",
     "nota_de": "Die PS-Abgeordneten stimmten für die Entschließungen 2026 zu Ukraine (7 dafür) und Moldau (7 dafür), die den Beitritt unterstützen."
    },
    "PT:destra_nazionalista": {
     "partito": "Chega",
     "voto": "da_verificare",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Voto misto degli eurodeputati Chega sulle risoluzioni 2026: Ucraina (1 a favore, 1 astenuto), Moldova (1 contro, 1 astenuto). Entrambi contro la strategia di allargamento (marzo 2026).",
     "nota_en": "Mixed votes by Chega MEPs on the 2026 resolutions: Ukraine (1 in favour, 1 abstaining), Moldova (1 against, 1 abstaining). Both voted against the enlargement strategy (March 2026).",
     "nota_de": "Gemischtes Abstimmungsverhalten der Chega-Abgeordneten zu den Entschließungen 2026: Ukraine (1 dafür, 1 Enthaltung), Moldau (1 dagegen, 1 Enthaltung). Beide stimmten gegen die Erweiterungsstrategie (März 2026)."
    },
    "RO:destra_nazionalista": {
     "partito": "AUR",
     "voto": "condizionato",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Voto misto degli eurodeputati AUR sulle risoluzioni 2026: Ucraina (1 contro, 2 astenuti), Moldova (3 a favore). Sostegno alla Moldova, riserve sull'Ucraina.",
     "nota_en": "Mixed votes by AUR MEPs on the 2026 resolutions: Ukraine (1 against, 2 abstaining), Moldova (3 in favour). Support for Moldova, reservations on Ukraine.",
     "nota_de": "Gemischtes Abstimmungsverhalten der AUR-Abgeordneten zu den Entschließungen 2026: Ukraine (1 dagegen, 2 Enthaltungen), Moldau (3 dafür). Unterstützung für Moldau, Vorbehalte gegenüber der Ukraine."
    },
    "SE:centrosinistra": {
     "partito": "Socialdemokraterna",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati Socialdemokraterna hanno votato a favore delle risoluzioni 2026 su Ucraina (5 a favore) e Moldova (5 a favore) che sostengono l'adesione.",
     "nota_en": "Socialdemokraterna MEPs voted for the 2026 resolutions on Ukraine (5 in favour) and Moldova (5 in favour) backing accession.",
     "nota_de": "Die Socialdemokraterna-Abgeordneten stimmten für die Entschließungen 2026 zu Ukraine (5 dafür) und Moldau (5 dafür), die den Beitritt unterstützen."
    },
    "SK:centro": {
     "partito": "Progresívne Slovensko",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/195067",
     "data": "2026-07",
     "nota": "Gli eurodeputati Progresívne Slovensko hanno votato a favore delle risoluzioni 2026 su Ucraina (5 a favore) e Moldova (5 a favore) che sostengono l'adesione.",
     "nota_en": "Progresívne Slovensko MEPs voted for the 2026 resolutions on Ukraine (5 in favour) and Moldova (5 in favour) backing accession.",
     "nota_de": "Die Progresívne Slovensko-Abgeordneten stimmten für die Entschließungen 2026 zu Ukraine (5 dafür) und Moldau (5 dafür), die den Beitritt unterstützen."
    }
   }
  },
  "omnibus": {
   "esito_voluto_destra": "passa",
   "atto": "Adozione finale della direttiva Omnibus I che riduce gli obblighi CSRD e CSDDD (direttiva UE 2026/470), Consiglio Affari generali del 24 febbraio 2026",
   "atto_en": "Final adoption of the Omnibus I directive cutting CSRD and CSDDD obligations (Directive (EU) 2026/470), General Affairs Council of 24 February 2026",
   "atto_de": "Endgültige Annahme der Omnibus-I-Richtlinie zur Kürzung der CSRD- und CSDDD-Pflichten (Richtlinie (EU) 2026/470), Rat Allgemeine Angelegenheiten vom 24. Februar 2026",
   "voto_reale": {
    "data": "2026-02-24",
    "esito": "Adottata a maggioranza qualificata: 23 sì, 1 no (CZ), 3 astensioni (AT, BE, BG).",
    "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf"
   },
   "governi": {
    "AT": {
     "voto": "astensione",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo si è astenuto nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government abstained in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung enthielt sich bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) (protokollierte Ratsabstimmung)."
    },
    "BE": {
     "voto": "astensione",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo si è astenuto nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government abstained in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung enthielt sich bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) (protokollierte Ratsabstimmung)."
    },
    "BG": {
     "voto": "astensione",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo precedente si è astenuto nel voto finale sull'Omnibus I (CSRD/CSDDD); il governo è cambiato a maggio 2026.",
     "nota_en": "The previous government abstained in the final vote on Omnibus I (CSRD/CSDDD); the government changed in May 2026.",
     "nota_de": "Die Vorgängerregierung enthielt sich bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD); Regierungswechsel im Mai 2026."
    },
    "CY": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "CZ": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato contro nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted against in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dagegen (protokollierte Ratsabstimmung)."
    },
    "DE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "DK": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo precedente ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD); il governo è cambiato a giugno 2026.",
     "nota_en": "The previous government voted in favour in the final vote on Omnibus I (CSRD/CSDDD); the government changed in June 2026.",
     "nota_de": "Die Vorgängerregierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür; Regierungswechsel im Juni 2026."
    },
    "EE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "ES": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "FI": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "FR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "GR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "HR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "HU": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo precedente ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD); il governo è cambiato a maggio 2026.",
     "nota_en": "The previous government voted in favour in the final vote on Omnibus I (CSRD/CSDDD); the government changed in May 2026.",
     "nota_de": "Die Vorgängerregierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür; Regierungswechsel im Mai 2026."
    },
    "IE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "IT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "LT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "LU": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "LV": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "MT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "NL": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "PL": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "PT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "RO": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo precedente ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD); il governo è cambiato a maggio 2026 (governo ad interim).",
     "nota_en": "The previous government voted in favour in the final vote on Omnibus I (CSRD/CSDDD); the government changed in May 2026 (caretaker).",
     "nota_de": "Die Vorgängerregierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür; Regierungswechsel im Mai 2026 (geschäftsführend)."
    },
    "SE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    },
    "SI": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo precedente ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD); il governo è cambiato a giugno 2026.",
     "nota_en": "The previous government voted in favour in the final vote on Omnibus I (CSRD/CSDDD); the government changed in June 2026.",
     "nota_de": "Die Vorgängerregierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür; Regierungswechsel im Juni 2026."
    },
    "SK": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-6660-2026-INIT/en/pdf",
     "data": "2026-02",
     "nota": "Il governo ha votato a favore nel voto finale sull'Omnibus I (CSRD/CSDDD) (voto registrato del Consiglio).",
     "nota_en": "The government voted in favour in the final vote on Omnibus I (CSRD/CSDDD) (recorded Council vote).",
     "nota_de": "Die Regierung stimmte bei der Schlussabstimmung über den Omnibus I (CSRD/CSDDD) dafür (protokollierte Ratsabstimmung)."
    }
   },
   "nuovi": {
    "AT:destra_nazionalista": {
     "partito": "FPÖ",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati FPÖ hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (6 a favore).",
     "nota_en": "FPÖ MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (6 in favour).",
     "nota_de": "Die FPÖ-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (6 dafür)."
    },
    "BE:destra_nazionalista": {
     "partito": "Vlaams Belang",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati Vlaams Belang hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (3 a favore).",
     "nota_en": "Vlaams Belang MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (3 in favour).",
     "nota_de": "Die Vlaams Belang-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (3 dafür)."
    },
    "CY:centrodestra": {
     "partito": "DISY",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati DISY hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (2 a favore).",
     "nota_en": "DISY MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (2 in favour).",
     "nota_de": "Die DISY-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (2 dafür)."
    },
    "DE:destra_nazionalista": {
     "partito": "AfD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati AfD hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (14 a favore).",
     "nota_en": "AfD MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (14 in favour).",
     "nota_de": "Die AfD-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (14 dafür)."
    },
    "DK:centrodestra": {
     "partito": "Liberal Alliance",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati Liberal Alliance hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (1 a favore). Liberal Alliance ha un solo eurodeputato (PPE).",
     "nota_en": "Liberal Alliance MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (1 in favour). Liberal Alliance has a single MEP (EPP).",
     "nota_de": "Die Liberal Alliance-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (1 dafür). Liberal Alliance hat nur einen Abgeordneten (EVP)."
    },
    "EE:centrodestra": {
     "partito": "Isamaa",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati Isamaa hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (2 a favore).",
     "nota_en": "Isamaa MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (2 in favour).",
     "nota_de": "Die Isamaa-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (2 dafür)."
    },
    "ES:centrodestra": {
     "partito": "PP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati PP hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (21 a favore). Anche Vox a favore (4).",
     "nota_en": "PP MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (21 in favour). Vox also in favour (4).",
     "nota_de": "Die PP-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (21 dafür). Auch Vox dafür (4)."
    },
    "FI:centrosinistra": {
     "partito": "SDP",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati SDP hanno votato contro l'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (2 contro).",
     "nota_en": "SDP MEPs voted against the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (2 against).",
     "nota_de": "Die SDP-Abgeordneten stimmten am 16. Dezember 2025 gegen die endgültige Einigung zum CSRD/CSDDD-Omnibus (2 dagegen)."
    },
    "FR:destra_nazionalista": {
     "partito": "RN",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati RN hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (28 a favore).",
     "nota_en": "RN MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (28 in favour).",
     "nota_de": "Die RN-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (28 dafür)."
    },
    "IE:sinistra": {
     "partito": "Sinn Féin",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati Sinn Féin hanno votato contro l'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (2 contro).",
     "nota_en": "Sinn Féin MEPs voted against the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (2 against).",
     "nota_de": "Die Sinn Féin-Abgeordneten stimmten am 16. Dezember 2025 gegen die endgültige Einigung zum CSRD/CSDDD-Omnibus (2 dagegen)."
    },
    "LT:centrodestra": {
     "partito": "TS-LKD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati TS-LKD hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (3 a favore).",
     "nota_en": "TS-LKD MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (3 in favour).",
     "nota_de": "Die TS-LKD-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (3 dafür)."
    },
    "NL:centrosinistra": {
     "partito": "GL-PvdA (PRO)",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati GL-PvdA (PRO) hanno votato contro l'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (8 contro). Delegazione compatta tra S&D e Verdi.",
     "nota_en": "GL-PvdA (PRO) MEPs voted against the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (8 against). Delegation united across S&D and Greens.",
     "nota_de": "Die GL-PvdA (PRO)-Abgeordneten stimmten am 16. Dezember 2025 gegen die endgültige Einigung zum CSRD/CSDDD-Omnibus (8 dagegen). Delegation geschlossen über S&D und Grüne hinweg."
    },
    "NL:destra_nazionalista": {
     "partito": "PVV",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati PVV hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (5 a favore).",
     "nota_en": "PVV MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (5 in favour).",
     "nota_de": "Die PVV-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (5 dafür)."
    },
    "PL:destra_nazionalista": {
     "partito": "PiS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati PiS hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (16 a favore).",
     "nota_en": "PiS MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (16 in favour).",
     "nota_de": "Die PiS-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (16 dafür)."
    },
    "PT:centrosinistra": {
     "partito": "PS",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati PS hanno votato contro l'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (8 contro).",
     "nota_en": "PS MEPs voted against the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (8 against).",
     "nota_de": "Die PS-Abgeordneten stimmten am 16. Dezember 2025 gegen die endgültige Einigung zum CSRD/CSDDD-Omnibus (8 dagegen)."
    },
    "PT:destra_nazionalista": {
     "partito": "Chega",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati Chega hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (2 a favore).",
     "nota_en": "Chega MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (2 in favour).",
     "nota_de": "Die Chega-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (2 dafür)."
    },
    "RO:destra_nazionalista": {
     "partito": "AUR",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati AUR hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (3 a favore).",
     "nota_en": "AUR MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (3 in favour).",
     "nota_de": "Die AUR-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (3 dafür)."
    },
    "SE:centrosinistra": {
     "partito": "Socialdemokraterna",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati Socialdemokraterna hanno votato contro l'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (5 contro).",
     "nota_en": "Socialdemokraterna MEPs voted against the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (5 against).",
     "nota_de": "Die Socialdemokraterna-Abgeordneten stimmten am 16. Dezember 2025 gegen die endgültige Einigung zum CSRD/CSDDD-Omnibus (5 dagegen)."
    },
    "SK:centro": {
     "partito": "Progresívne Slovensko",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/182518",
     "data": "2025-12",
     "nota": "Gli eurodeputati Progresívne Slovensko hanno votato a favore dell'accordo finale sull'Omnibus CSRD/CSDDD il 16 dicembre 2025 (5 a favore). A novembre 2025 gli stessi eurodeputati avevano votato contro la posizione del Parlamento (5 contro).",
     "nota_en": "Progresívne Slovensko MEPs voted for the final CSRD/CSDDD Omnibus agreement on 16 December 2025 (5 in favour). In November 2025 the same MEPs had voted against Parliament's position (5 against).",
     "nota_de": "Die Progresívne Slovensko-Abgeordneten stimmten am 16. Dezember 2025 für die endgültige Einigung zum CSRD/CSDDD-Omnibus (5 dafür). Im November 2025 hatten dieselben Abgeordneten gegen die Parlamentsposition gestimmt (5 dagegen)."
    }
   }
  },
  "patto_migrazione": {
   "esito_voluto_destra": "bloccato",
   "atto": "Decisione di esecuzione sul pool di solidarietà annuale 2026 (dicembre 2025); regolamenti del Patto, incl. AMMR, adottati il 14 maggio 2024",
   "atto_en": "Implementing decision on the 2026 annual solidarity pool (December 2025); Pact regulations incl. AMMR adopted on 14 May 2024",
   "atto_de": "Durchführungsbeschluss zum jährlichen Solidaritätspool 2026 (Dezember 2025); Verordnungen des Pakts inkl. AMMR, angenommen am 14. Mai 2024",
   "voto_reale": {
    "data": "2025-12-22",
    "esito": "Pool 2026 adottato con procedura scritta: contrari HU e SK, astenuti CY, LV, PT, ES. Nel 2024 l'AMMR passò con 19 sì, 3 no (HU, PL, SK), 3 astenuti (CZ, MT, AT)",
    "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf"
   },
   "governi": {
    "AT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); esentata dai contributi 2026; nel maggio 2024 si era astenuta sul regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); exempted from 2026 contributions; in May 2024 it abstained on the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); von den Beiträgen 2026 befreit; im Mai 2024 enthielt es sich bei der AMMR."
    },
    "BE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "BG": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR (governo precedente).",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR (previous government).",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR (Vorgängerregierung)."
    },
    "CY": {
     "voto": "astensione",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Astensione sulla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Abstained on the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Enthielt sich beim Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "CZ": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); esentata dai contributi 2026; nel maggio 2024 si era astenuta sul regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); exempted from 2026 contributions; in May 2024 it abstained on the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); von den Beiträgen 2026 befreit; im Mai 2024 enthielt es sich bei der AMMR."
    },
    "DE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "DK": {
     "voto": "opt_out",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/ST-9978-2024-INIT/en/pdf",
     "data": "2024-05",
     "nota": "Non partecipa al regolamento AMMR in virtù dell'opt-out in materia di giustizia e affari interni.",
     "nota_en": "Does not take part in the AMMR under its justice and home affairs opt-out.",
     "nota_de": "Nimmt aufgrund seines Opt-outs im Bereich Justiz und Inneres nicht an der AMMR teil."
    },
    "EE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "ES": {
     "voto": "astensione",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Astensione sulla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Abstained on the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Enthielt sich beim Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "FI": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "FR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "GR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "HR": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); esentata dai contributi 2026; nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); exempted from 2026 contributions; in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); von den Beiträgen 2026 befreit; im Mai 2024 stimmte es für die AMMR."
    },
    "HU": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://www.euronews.com/2026/06/12/how-eu-countries-watered-down-solidarity-plans-to-relocate-asylum-seekers",
     "data": "2026-06",
     "nota": "Il governo Magyar dichiara che non accoglierà richiedenti asilo ricollocati; il governo precedente votò contro l'AMMR (2024) e il pool 2026.",
     "nota_en": "The Magyar government says it will not take relocated asylum seekers; the previous government voted against the AMMR (2024) and the 2026 pool.",
     "nota_de": "Die Regierung Magyar will keine umgesiedelten Asylbewerber aufnehmen; die Vorgängerregierung stimmte gegen die AMMR (2024) und den Pool 2026."
    },
    "IE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 non aveva partecipato al voto sul regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it did not take part in the AMMR vote.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 nahm es nicht an der AMMR-Abstimmung teil."
    },
    "IT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "LT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "LU": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "LV": {
     "voto": "astensione",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Astensione sulla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Abstained on the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Enthielt sich beim Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "MT": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 si era astenuta sul regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it abstained on the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 enthielt es sich bei der AMMR."
    },
    "NL": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR (governo precedente).",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR (previous government).",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR (Vorgängerregierung)."
    },
    "PL": {
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://notesfrompoland.com/2025/02/04/tusk-poland-will-not-implement-eu-migration-pact-if-it-involves-receiving-relocated-migrants",
     "data": "2025-02",
     "nota": "Il governo esclude ricollocazioni e pagamenti; contraria all'AMMR nel 2024, ha votato a favore del pool 2026, da cui è esentata.",
     "nota_en": "The government rules out relocations and payments; it voted against the AMMR in 2024 and for the 2026 pool, from which it is exempted.",
     "nota_de": "Die Regierung lehnt Umsiedlungen und Zahlungen ab; stimmte 2024 gegen die AMMR und für den Pool 2026, von dem es befreit ist."
    },
    "PT": {
     "voto": "astensione",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Astensione sulla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Abstained on the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Enthielt sich beim Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "RO": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR (governo precedente).",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR (previous government).",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR (Vorgängerregierung)."
    },
    "SE": {
     "voto": "favorevole",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR.",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR.",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR."
    },
    "SI": {
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto favorevole alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato a favore del regolamento AMMR (governo precedente).",
     "nota_en": "Voted in favour of the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted for the AMMR (previous government).",
     "nota_de": "Stimmte für den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es für die AMMR (Vorgängerregierung)."
    },
    "SK": {
     "voto": "contrario",
     "confidenza": "alta",
     "fonte": "https://data.consilium.europa.eu/doc/document/CM-5563-2025-REV-1/en/pdf",
     "data": "2025-12",
     "nota": "Voto contrario alla decisione sul pool di solidarietà 2026 (22 dicembre 2025); nel maggio 2024 aveva votato contro il regolamento AMMR.",
     "nota_en": "Voted against the 2026 solidarity pool decision (22 December 2025); in May 2024 it voted against the AMMR.",
     "nota_de": "Stimmte gegen den Beschluss zum Solidaritätspool 2026 (22. Dezember 2025); im Mai 2024 stimmte es gegen die AMMR."
    }
   },
   "nuovi": {
    "AT:destra_nazionalista": {
     "partito": "FPÖ",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati di FPÖ hanno votato contro il regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "FPÖ MEPs voted against the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die FPÖ-Abgeordneten stimmten gegen die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "BE:destra_nazionalista": {
     "partito": "Vlaams Belang",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati di Vlaams Belang hanno votato contro il regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "Vlaams Belang MEPs voted against the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die Vlaams Belang-Abgeordneten stimmten gegen die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "CY:centrodestra": {
     "partito": "DISY",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati di DISY hanno votato a favore del regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "DISY MEPs voted for the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die DISY-Abgeordneten stimmten für die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "DE:destra_nazionalista": {
     "partito": "AfD",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati di AfD hanno votato contro il regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "AfD MEPs voted against the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die AfD-Abgeordneten stimmten gegen die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "DK:centrodestra": {
     "partito": "Venstre/Konservative (proxy per Liberal Alliance)",
     "voto": "favorevole",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Liberal Alliance non aveva eurodeputati nel 2024; Venstre e Konservative (blocco blu) hanno votato a favore (PE, aprile 2024).",
     "nota_en": "Liberal Alliance had no MEP in 2024; Venstre and the Conservatives (blue bloc) voted in favour (EP, April 2024).",
     "nota_de": "Liberal Alliance hatte 2024 keinen Abgeordneten; Venstre und die Konservativen (blauer Block) stimmten dafür (EP, April 2024)."
    },
    "EE:centrodestra": {
     "partito": "Isamaa",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "L'unico eurodeputato di Isamaa ha votato contro i regolamenti su gestione dell'asilo, procedure e crisi (PE, aprile 2024).",
     "nota_en": "Isamaa's only MEP voted against the asylum management, procedure and crisis regulations (EP, April 2024).",
     "nota_de": "Der einzige Isamaa-Abgeordnete stimmte gegen die Verordnungen zu Asylmanagement, Verfahren und Krisen (EP, April 2024)."
    },
    "ES:centrodestra": {
     "partito": "PP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati del PP hanno votato a favore del regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "PP MEPs voted for the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die PP-Abgeordneten stimmten für die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "FI:centrosinistra": {
     "partito": "SDP",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati di SDP hanno votato a favore del regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "SDP MEPs voted for the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die SDP-Abgeordneten stimmten für die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "FR:destra_nazionalista": {
     "partito": "RN",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati di RN hanno votato contro il regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "RN MEPs voted against the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die RN-Abgeordneten stimmten gegen die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "IE:sinistra": {
     "partito": "Sinn Féin",
     "voto": "condizionato",
     "confidenza": "bassa",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "L'eurodeputato di Sinn Féin ha votato a favore del regolamento sulla solidarietà ma contro le procedure d'asilo e il regolamento crisi (PE, aprile 2024).",
     "nota_en": "The Sinn Féin MEP voted for the solidarity regulation but against the asylum procedure and crisis regulations (EP, April 2024).",
     "nota_de": "Der Sinn-Féin-Abgeordnete stimmte für die Solidaritätsverordnung, aber gegen die Asylverfahrens- und Krisenverordnung (EP, April 2024)."
    },
    "LT:centrodestra": {
     "partito": "TS-LKD",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati di TS-LKD hanno votato a favore del regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "TS-LKD MEPs voted for the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die TS-LKD-Abgeordneten stimmten für die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "NL:centrosinistra": {
     "partito": "GL-PvdA",
     "voto": "contrario",
     "confidenza": "bassa",
     "fonte": "https://www.eerstekamer.nl/nonav/wetsvoorstel/36871_uitvoerings_en",
     "data": "2026-04",
     "nota": "GL-PvdA ha votato contro la legge olandese di attuazione del Patto (2026), dopo aver sostenuto nel PE solo il regolamento sulla solidarietà (2024).",
     "nota_en": "GL-PvdA voted against the Dutch Pact implementation law (2026), having backed only the solidarity regulation in the EP (2024).",
     "nota_de": "GL-PvdA stimmte gegen das niederländische Umsetzungsgesetz zum Pakt (2026), nachdem sie im EP nur die Solidaritätsverordnung unterstützt hatte (2024)."
    },
    "NL:destra_nazionalista": {
     "partito": "PVV",
     "voto": "condizionato",
     "confidenza": "bassa",
     "fonte": "https://www.eerstekamer.nl/nonav/wetsvoorstel/36871_uitvoerings_en",
     "data": "2026-04",
     "nota": "Il PVV, senza eurodeputati nel 2024, ha votato a favore della legge olandese di attuazione del Patto pur chiedendo un opt-out UE sulla migrazione.",
     "nota_en": "The PVV, with no MEP in 2024, voted for the Dutch Pact implementation law while seeking an EU migration opt-out.",
     "nota_de": "Die PVV, 2024 ohne Abgeordnete, stimmte für das niederländische Umsetzungsgesetz zum Pakt, strebt aber ein EU-Opt-out bei Migration an."
    },
    "PL:destra_nazionalista": {
     "partito": "PiS",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati di PiS hanno votato contro il regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "PiS MEPs voted against the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die PiS-Abgeordneten stimmten gegen die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "PT:centrosinistra": {
     "partito": "PS",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati del PS hanno votato in maggioranza (7 su 9) a favore del regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "PS MEPs voted mostly (7 of 9) for the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die PS-Abgeordneten stimmten mehrheitlich (7 von 9) für die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "PT:destra_nazionalista": {
     "partito": "Chega",
     "voto": "contrario",
     "confidenza": "media",
     "fonte": "https://www.rtp.pt/noticias/politica/ventura-acusa-por-igual-psd-e-ps-de-irresponsabilidade-na-imigracao_n1750284",
     "data": "2026-06",
     "nota": "Ventura ha rivendicato l'opposizione di Chega e dei suoi alleati al Patto (Chega non aveva eurodeputati nel 2024).",
     "nota_en": "Ventura stated that Chega and its allies opposed the Pact (Chega had no MEP in 2024).",
     "nota_de": "Ventura erklärte, Chega und seine Verbündeten hätten den Pakt abgelehnt (Chega hatte 2024 keine Abgeordneten)."
    },
    "RO:destra_nazionalista": {
     "partito": "AUR",
     "voto": "contrario",
     "confidenza": "bassa",
     "fonte": "https://agerpres.ro/comunicate/2026/06/17/comunicat-de-presa---alianta-pentru-unirea-romanilor--1567255",
     "data": "2026-06",
     "nota": "AUR critica la 'cosiddetta solidarietà' e le quote obbligatorie di ricollocazione del Patto (comunicato, giugno 2026).",
     "nota_en": "AUR criticises the Pact's 'so-called solidarity' and mandatory relocation quotas (press release, June 2026).",
     "nota_de": "Die AUR kritisiert die 'sogenannte Solidarität' und verpflichtende Umverteilungsquoten des Pakts (Mitteilung, Juni 2026)."
    },
    "SE:centrosinistra": {
     "partito": "Socialdemokraterna",
     "voto": "favorevole",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati di Socialdemokraterna hanno votato a favore del regolamento gestione asilo e migrazione (PE, aprile 2024).",
     "nota_en": "Socialdemokraterna MEPs voted for the asylum and migration management regulation (EP, April 2024).",
     "nota_de": "Die Socialdemokraterna-Abgeordneten stimmten für die Verordnung über Asyl- und Migrationsmanagement (EP, April 2024)."
    },
    "SK:centro": {
     "partito": "PS",
     "voto": "astensione",
     "confidenza": "media",
     "fonte": "https://howtheyvote.eu/votes/167531",
     "data": "2024-04",
     "nota": "Gli eurodeputati del PS si sono astenuti sui testi del Patto (PE, aprile 2024).",
     "nota_en": "PS MEPs abstained on the Pact texts (EP, April 2024).",
     "nota_de": "Die PS-Abgeordneten enthielten sich bei den Pakt-Texten (EP, April 2024)."
    }
   }
  }
 }
};
