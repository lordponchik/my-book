function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire78ed;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire78ed=a);var i=a.register;i("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return n},set:function(e){return n=e},enumerable:!0,configurable:!0});var n,r=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),i("cRRkZ",function(e,t){e.exports=new URL("no-image-placeholder.b4c3556e.svg",import.meta.url).toString()}),a("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["9NLH0","catalog.f5063c32.js","hTCF4","no-image-placeholder.b4c3556e.svg","jYfZl","catalog.acd0932d.css","4h2LY","catalog.ab753a21.js","XFgfB","catalog.runtime.d980a76e.js"]')),a("1qHQF"),a("6mMsB");var o=a("04Pik"),l=a("cRRkZ");const c=document.querySelector(".hero__wrapper--genre"),s=document.querySelector(".category");let u=s.querySelector(".category__btn.active");function d(t){return t.map(t=>{var n,r,a,i;return`
  <div class="genre">
           <div class="genre__container"><div class="genre__img"><img src="${function({imageLinks:t}){return t&&t.thumbnail?t.thumbnail:/*@__PURE__*/e(l)}(t.volumeInfo)}" alt="" width="100"></div>
              <div class="genre__wrapper">
                <h3 class="genre__name">${t.volumeInfo.title||"Title in the registration process..."}</h3>
                <p class="genre__author">${(r=t.volumeInfo.authors)?r.join(", "):""}</p>
                <p class="genre__date">${t.volumeInfo.publishedDate||"in the process of writing..."}</p>     
              </div></div>
              <p class="genre__description">${(i=t.volumeInfo.description)?(i.includes("<p>")&&(i=(i=i.replaceAll("<p>","")).replaceAll("</p>","")),i.length>585?`${i.slice(0,580)}...`:i):""}</p>
            </div>`}).join("")}(0,o.fetchGenre)("love").then(e=>{c.innerHTML=d(e)}),s.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;u.classList.remove("active");let t=e.target;t.classList.add("active"),u=t,c.innerHTML="",(0,o.fetchGenre)(e.target.getAttribute("data-name")).then(e=>{c.innerHTML=d(e)})});var o=a("04Pik"),l=a("cRRkZ");const g=document.querySelector(".sect-catalog__wrapper"),p=document.querySelector(".sect-catalog__input"),_=document.querySelector(".sect-catalog__submit");function f(e){e.preventDefault(),g.innerHTML="",(0,o.fetchCatalog)(`${p.value.split(" ").join("+")}`).then(e=>{g.innerHTML=v(e)})}function v(t){return t.map(t=>{var n,r,a;return`
  <div class="catalog__item">
           <div class="catalog__container"><div class="catalog__img"><img src="${function({imageLinks:t}){return t&&t.thumbnail?t.thumbnail:/*@__PURE__*/e(l)}(t.volumeInfo)}" alt="" width="100"></div>
              <div class="catalog__wrapper">
                <h3 class="catalog__name">${t.volumeInfo.title||"Title in the registration process..."}</h3>
                <p class="catalog__author">${(r=t.volumeInfo.authors)?r.join(", "):""}</p>
                <p class="catalog__date">${t.volumeInfo.publishedDate||"in the process of writing..."}</p>     
              </div></div>
            </div>`}).join("")}g.innerHTML="",(0,o.fetchCatalog)("love").then(e=>{g.innerHTML=v(e)}),_.addEventListener("click",f),p.addEventListener("submit",f);//# sourceMappingURL=catalog.f5063c32.js.map

//# sourceMappingURL=catalog.f5063c32.js.map
