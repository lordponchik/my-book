var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequire78ed;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequire78ed=a),a.register,a("1qHQF");var n=a("04Pik"),o=a("jj8gv"),s=a("15KYv");const l=document.querySelector(".hero__wrapper--genre"),i=document.querySelector(".category");let c=i.querySelector(".category__btn.active");(0,n.fetchGenre)("liebe").then(e=>{let t=[];e.map(e=>t.push(new s.objBook(e))),l.innerHTML=(0,o.renderBooks)(e,"genre",!0,!1,t),t.forEach(e=>e.addEvent())}).catch(e=>{l.innerHTML=`<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`}),i.addEventListener("click",function(e){if("BUTTON"!==e.target.nodeName)return;c.classList.remove("active");let t=e.target;t.classList.add("active"),c=t,l.innerHTML="",(0,n.fetchGenre)(e.target.getAttribute("data-name")).then(e=>{let t=[];e.map(e=>t.push(new s.objBook(e))),l.innerHTML=(0,o.renderBooks)(e,"genre",!0,!1,t),t.forEach(e=>e.addEvent())}).catch(e=>{l.innerHTML=`<p style="align-self:center;margin:0 auto;text-align:center;color:var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We have lost the results from the server, please reload the page</p>`})});var n=a("04Pik"),d=a("6mMsB"),u=a("fb9GJ");const p=document.getElementById("pagination"),g=new(u&&u.__esModule?u.default:u)(p,{totalItems:198,itemsPerPage:33,visiblePages:6,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});var o=a("jj8gv");const h=document.querySelector(".sect-catalog__wrapper"),y=document.querySelector(".sect-catalog__input"),v=document.querySelector(".sect-catalog__submit");let f="liebe";function m(e){e.preventDefault(),f=`${y.value.split(" ").join("+")}`,h.innerHTML="",(0,n.fetchCatalog)(f).then(e=>{h.innerHTML=(0,o.renderBooks)(e,"catalog"),g.reset()}).catch(e=>{h.innerHTML=`<p style="text-align:center;color: var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We don\u{2019}t have any results matching your search.</p>`})}h.innerHTML="",(0,n.fetchCatalog)(f).then(e=>{h.innerHTML=(0,o.renderBooks)(e,"catalog")}).catch(e=>{h.innerHTML=`<p style="text-align:center;color: var(--secondary-text-color);">OOPS... <br />
We are very sorry!</p>`}),v.addEventListener("click",m),y.addEventListener("submit",m),h.addEventListener("click",d.modalShow),g.on("afterMove",e=>{let t=(e.page-1)*33;h.innerHTML="",(0,n.fetchCatalog)(f,t).then(e=>{h.innerHTML=(0,o.renderBooks)(e,"catalog")}).catch(e=>{h.innerHTML=`<p style="text-align:center;color: var(--secondary-text-color);">OOPS... <br />
We are very sorry!<br />
We don\u{2019}t have any results matching your search.</p>`}),window.scrollTo({top:y.getBoundingClientRect().y,left:0,behavior:"smooth"})}),a("8QdEj");//# sourceMappingURL=catalog.9e8f944d.js.map

//# sourceMappingURL=catalog.9e8f944d.js.map