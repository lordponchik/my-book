function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=n.parcelRequire78ed;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire78ed=a),a.register,a("1qHQF"),a("8QdEj");var i=a("04Pik"),l=a("jj8gv"),o={};o=JSON.parse('["Leute","Mensch","Mann","Frau","Kind","Junge","M\xe4dchen","Freund","Bekannte","Nachbar","Gast","Chef","Konkurrent","Kunde","Kollege","Familie","Eltern","Vater","Mutter","Sohn","Tochter","Bruder","Schwester","Gro\xdfvater","Gro\xdfmutter","Enkel","Enkelin","Schwiegervater","Schwiegermutter","Onkel","Tante","Cousin","Cousine","Neffe","Nichte","Arbeit","Gesch\xe4ftsmann","Lehrer","Fahrer","Arbeiter","Ingenieur","Arzt","Rechtsanwalt","Journalist","Krankenschwester","Verk\xe4ufer","Kellner","Buchhalter","Maler","Musiker","Schauspieler","Student","Sch\xfcler","Tier","Katze","Hund","Vogel","Eichh\xf6rnchen","Wolf","Gans","Giraffe","Kaninchen","Hase","Kuh","Ratte","Fuchs","Pferd","Frosch","B\xe4r","Maus","Affe","Schwein","Elefant","Ente","Stadt","Haus","Geb\xe4ude","Platz","Eingang","Ausgang","Zentrum","Hof","Dach","Zaun","Dorf","Schule","Universit\xe4t","Theater","Kirche","Restaurant","Cafe","Hotel","Bank","Kino","Krankenhaus","Polizei","Postamt","Bahnhof","Flughafen","Gesch\xe4ft","Apotheke","Markt","B\xfcro","Firma","Betrieb","Stra\xdfe","Weg","Kreuzung","Haltestelle","Gehsteig","Pfad","Garten","Park","Br\xfccke","Fluss","Wald","Feld","Berg","See","Meer","Ozean","K\xfcste","Strand","Sand","Insel","Grenze","Stein","Pflanze","Baum","Gras","Blume","Blatt","Zimmer","T\xfcr","Fenster","M\xf6bel","Teppich","Spiegel","Schrank","Bett","Brot","Honig","Kuchen","Wein","Tasse","Glas","Messer","Mahlzeit","Fr\xfchst\xfcck","Mittagessen","Abendessen","Flugzeug","Auto","Bus","Zug","Minute","Stunde","Jahr","Tag","Morgen","Abend","Nacht","Fr\xfchling","Sommer","Herbst","Winter","Weihnachten","Geburtstag","Name","Adresse","Sache","Notiz","Buch","Brief","Zeitung","Uhr","Karte","Ball","Gep\xe4ck","Vase","Geschenk","Rad","Lampe","Kleid","Kopf","K\xf6rper","Gesundheit","Ereignis","Spiel","Urlaub","Reise","Tod","Treffen","Wetter","Sonne","Mond","Wind","Nebel","Regen","Schnee","Himmel","Wolke","Luft","Kunst","Musik","Entfernung","Gef\xfchl","Spa\xdf","Freude","Angst","Traurigkeit","Leidenschaft","Gl\xfcck","Frieden","Welt","Seele","Leben","Wissen","Aufgabe","Problem","Sch\xf6nkeit","Gefahr","Erfahrung","Nutzen","Erinnerung","Grund","Sprache","Feuer","Fall","Umstand","Wahl","Gedanke","Erlaubnis","Leistung","Fehler","Einladung","Entwicklung","L\xf6sung","Schritt","Ordnung","Farbe","Liebe","Magie","Hexerei","Wunder","Wunsch","Roboter","Ticket","Anfang","Ende"]');var u=a("15KYv");const s=document.querySelector(".rndbook"),d=document.querySelector(".btn-random");function c(){return /*@__PURE__*/e(o)[Math.floor(Math.random()*/*@__PURE__*/e(o).length)]}(0,i.fetchRandomBook)(c()).then(e=>{s.innerHTML=(0,l.renderBooks)(e[0],"random-book",!0,!0),(0,u.loadBtn)()}),d.addEventListener("click",e=>{e.preventDefault(),s.innerHTML="",(0,i.fetchRandomBook)(c()).then(e=>{s.innerHTML=(0,l.renderBooks)(e[0],"random-book",!0,!0),(0,u.loadBtn)()})});var l=a("jj8gv"),h=a("6mMsB");const f=JSON.parse(localStorage.getItem("library")),g=document.querySelector(".loc-library__list");null!==f&&(g.innerHTML=(0,l.renderBooks)(f,"library",!1,!1)),g.addEventListener("click",h.modalShow);//# sourceMappingURL=library.5d7677f5.js.map

//# sourceMappingURL=library.5d7677f5.js.map
