!function(){let e;function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=t.parcelRequire78ed;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},t.parcelRequire78ed=i),i.register,i("ahE03"),i("3OTDN");var s=i("hrCnj"),l=i("kP8Kb"),o={};o=JSON.parse('["Leute","Mensch","Mann","Frau","Kind","Junge","M\xe4dchen","Freund","Bekannte","Nachbar","Gast","Chef","Konkurrent","Kunde","Kollege","Familie","Eltern","Vater","Mutter","Sohn","Tochter","Bruder","Schwester","Gro\xdfvater","Gro\xdfmutter","Enkel","Enkelin","Schwiegervater","Schwiegermutter","Onkel","Tante","Cousin","Cousine","Neffe","Nichte","Arbeit","Gesch\xe4ftsmann","Lehrer","Fahrer","Arbeiter","Ingenieur","Arzt","Rechtsanwalt","Journalist","Krankenschwester","Verk\xe4ufer","Kellner","Buchhalter","Maler","Musiker","Schauspieler","Student","Sch\xfcler","Tier","Katze","Hund","Vogel","Eichh\xf6rnchen","Wolf","Gans","Giraffe","Kaninchen","Hase","Kuh","Ratte","Fuchs","Pferd","Frosch","B\xe4r","Maus","Affe","Schwein","Elefant","Ente","Stadt","Haus","Geb\xe4ude","Platz","Eingang","Ausgang","Zentrum","Hof","Dach","Zaun","Dorf","Schule","Universit\xe4t","Theater","Kirche","Restaurant","Cafe","Hotel","Bank","Kino","Krankenhaus","Polizei","Postamt","Bahnhof","Flughafen","Gesch\xe4ft","Apotheke","Markt","B\xfcro","Firma","Betrieb","Stra\xdfe","Weg","Kreuzung","Haltestelle","Gehsteig","Pfad","Garten","Park","Br\xfccke","Fluss","Wald","Feld","Berg","See","Meer","Ozean","K\xfcste","Strand","Sand","Insel","Grenze","Stein","Pflanze","Baum","Gras","Blume","Blatt","Zimmer","T\xfcr","Fenster","M\xf6bel","Teppich","Spiegel","Schrank","Bett","Brot","Honig","Kuchen","Wein","Tasse","Glas","Messer","Mahlzeit","Fr\xfchst\xfcck","Mittagessen","Abendessen","Flugzeug","Auto","Bus","Zug","Minute","Stunde","Jahr","Tag","Morgen","Abend","Nacht","Fr\xfchling","Sommer","Herbst","Winter","Weihnachten","Geburtstag","Name","Adresse","Sache","Notiz","Buch","Brief","Zeitung","Uhr","Karte","Ball","Gep\xe4ck","Vase","Geschenk","Rad","Lampe","Kleid","Kopf","K\xf6rper","Gesundheit","Ereignis","Spiel","Urlaub","Reise","Tod","Treffen","Wetter","Sonne","Mond","Wind","Nebel","Regen","Schnee","Himmel","Wolke","Luft","Kunst","Musik","Entfernung","Gef\xfchl","Spa\xdf","Freude","Angst","Traurigkeit","Leidenschaft","Gl\xfcck","Frieden","Welt","Seele","Leben","Wissen","Aufgabe","Problem","Sch\xf6nkeit","Gefahr","Erfahrung","Nutzen","Erinnerung","Grund","Sprache","Feuer","Fall","Umstand","Wahl","Gedanke","Erlaubnis","Leistung","Fehler","Einladung","Entwicklung","L\xf6sung","Schritt","Ordnung","Farbe","Liebe","Magie","Hexerei","Wunder","Wunsch","Roboter","Ticket","Anfang","Ende"]');var u=i("enFAQ");let d=document.querySelector(".rndbook"),c=document.querySelector(".btn-random");function h(){return /*@__PURE__*/n(o)[Math.floor(Math.random()*/*@__PURE__*/n(o).length)]}(0,s.fetchRandomBook)(h()).then(e=>{let n=[];n.push(new u.objBook(e[0])),d.innerHTML=(0,l.renderBooks)(e[0],"random-book",!0,!0,n),n[0].addEvent()}),c.addEventListener("click",e=>{e.preventDefault(),d.innerHTML="",(0,s.fetchRandomBook)(h()).then(e=>{let n=[];n.push(new u.objBook(e[0])),d.innerHTML=(0,l.renderBooks)(e[0],"random-book",!0,!0,n),n[0].addEvent()})});var l=i("kP8Kb"),f=i("hAqfH"),g=i("1VFfL");let p=JSON.parse(localStorage.getItem("library")),b=document.querySelector(".loc-library__list");b.insertAdjacentHTML("afterbegin",'<div id="pagination" class="tui-pagination"></div>');let m=document.getElementById("pagination");null!==p&&(b.innerHTML=(0,l.renderBooks)(p,"library",!1,!1)),b.addEventListener("click",f.modalShow),new/*@__PURE__*/(n(g))(m,(e=0,window.innerWidth<768?e=6:window.innerWidth>=768&&window.innerWidth<1280?e=14:window.innerWidth>=1280&&(e=21),{totalItems:p.length,itemsPerPage:e,visiblePages:6,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}))}();//# sourceMappingURL=library.17adc25c.js.map

//# sourceMappingURL=library.17adc25c.js.map
