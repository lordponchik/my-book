!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequire78ed;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequire78ed=n),n.register,n("ahE03");var o=n("hrCnj"),a=n("hAqfH"),s=n("kP8Kb");let i=document.querySelectorAll(".book-series__list"),l=document.querySelector(".potter"),c=document.querySelector(".icefire"),d=document.querySelector(".witcher"),h=document.querySelector(".dark-tower");function f(e,r){!function(e,r){let t=[...document.querySelectorAll(`.${e} .${r}`)],n=document.querySelector(`.${e}`);n.insertAdjacentHTML("afterend",`<div class="controlls">
                <div class="prev"></div>
                <div class="next"></div>
              </div>`),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o[0].parentNode.style.display="none")}),window.matchMedia("(max-width: 767px)").addEventListener("change",e=>{e.matches&&(o[0].parentNode.style.display="flex")});let o=[...document.querySelector(`.${e}`).nextElementSibling.children];window.innerWidth>=768?o[0].parentNode.style.display="none":window.innerWidth<768&&(o[0].parentNode.style.display="flex");let a=0;function s(e){t[a].classList.remove("active"),t[e].classList.add("active"),a=e}s(0),o.forEach(e=>{e.addEventListener("click",e=>{if(e.target.classList.contains("prev")){let e=a-1;e<0&&(e=t.length-1),s(e)}else if(e.target.classList.contains("next")){let e=a+1;e>=t.length&&(e=0),s(e)}})})}(e,r)}(0,o.fetchBooksCategory)("harry+potter").then(e=>{l.innerHTML=(0,s.renderBooks)(e,"series"),f("potter","series")}).catch(e=>{l.innerHTML=`<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`}),(0,o.fetchBooksCategory)("a+song+of+ice+and+fire").then(e=>{c.innerHTML=(0,s.renderBooks)(e,"series"),f("icefire","series")}).catch(e=>{c.innerHTML=`<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`}),(0,o.fetchBooksCategory)("the+witcher").then(e=>{d.innerHTML=(0,s.renderBooks)(e,"series"),f("witcher","series")}).catch(e=>{d.innerHTML=`<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`}),(0,o.fetchBooksCategory)("the+dark+tower").then(e=>{h.innerHTML=(0,s.renderBooks)(e,"series"),f("dark-tower","series")}).catch(e=>{h.innerHTML=`<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`}),i.forEach(e=>{e.addEventListener("click",a.modalShow,!0)}),n("3OTDN")}();//# sourceMappingURL=index.547cedbc.js.map

//# sourceMappingURL=index.547cedbc.js.map