!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequire78ed;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequire78ed=i);var o=i.register;o("iE7OH",function(t,n){e(t.exports,"register",function(){return r},function(e){return r=e});var r,a=new Map;r=function(e,t){for(var n=0;n<t.length-1;n+=2)a.set(t[n],{baseUrl:e,path:t[n+1]})}}),o("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,a={};r=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),i("iE7OH").register(i("aNJCr").getBundleURL("gin8l"),JSON.parse('["gin8l","catalog.2db590cb.js","h6PUd","no-image-placeholder.b4c3556e.svg","jYfZl","catalog.acd0932d.css","7xZFN","catalog.6bb7072e.js","gBpKj","catalog.runtime.efb48da7.js"]')),i("ahE03"),i("hAqfH");var l=i("hrCnj"),c={};c=i("aNJCr").getBundleURL("gin8l")+"no-image-placeholder.b4c3556e.svg";let s=document.querySelector(".hero__wrapper--genre"),u=document.querySelector(".category"),d=u.querySelector(".category__btn.active");function g(e){return e.map(e=>{var n,r,a,i;return`
  <div class="genre">
           <div class="genre__container"><div class="genre__img"><img src="${function({imageLinks:e}){return e&&e.thumbnail?e.thumbnail:/*@__PURE__*/t(c)}(e.volumeInfo)}" alt="" width="100"></div>
              <div class="genre__wrapper">
                <h3 class="genre__name">${e.volumeInfo.title||"Title in the registration process..."}</h3>
                <p class="genre__author">${(r=e.volumeInfo.authors)?r.join(", "):""}</p>
                <p class="genre__date">${e.volumeInfo.publishedDate||"in the process of writing..."}</p>     
              </div></div>
              <p class="genre__description">${(i=e.volumeInfo.description)?(i.includes("<p>")&&(i=(i=i.replaceAll("<p>","")).replaceAll("</p>","")),i.length>585?`${i.slice(0,580)}...`:i):""}</p>
            </div>`}).join("")}(0,l.fetchGenre)("love").then(e=>{s.innerHTML=g(e)}),u.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;d.classList.remove("active");let t=e.target;t.classList.add("active"),d=t,s.innerHTML="",(0,l.fetchGenre)(e.target.getAttribute("data-name")).then(e=>{s.innerHTML=g(e)})});var l=i("hrCnj");let f=document.querySelector(".sect-catalog__wrapper"),p=document.querySelector(".sect-catalog__input"),_=document.querySelector(".sect-catalog__submit");function v(e){e.preventDefault(),f.innerHTML="",(0,l.fetchCatalog)(`${p.value.split(" ").join("+")}`).then(e=>{f.innerHTML=h(e)})}function h(e){return e.map(e=>{var n,r,a;return`
  <div class="catalog__item">
           <div class="catalog__container"><div class="catalog__img"><img src="${function({imageLinks:e}){return e&&e.thumbnail?e.thumbnail:/*@__PURE__*/t(c)}(e.volumeInfo)}" alt="" width="100"></div>
              <div class="catalog__wrapper">
                <h3 class="catalog__name">${e.volumeInfo.title||"Title in the registration process..."}</h3>
                <p class="catalog__author">${(r=e.volumeInfo.authors)?r.join(", "):""}</p>
                <p class="catalog__date">${e.volumeInfo.publishedDate||"in the process of writing..."}</p>     
              </div></div>
            </div>`}).join("")}f.innerHTML="",(0,l.fetchCatalog)("love").then(e=>{f.innerHTML=h(e)}),_.addEventListener("click",v),p.addEventListener("submit",v)}();//# sourceMappingURL=catalog.2db590cb.js.map

//# sourceMappingURL=catalog.2db590cb.js.map
