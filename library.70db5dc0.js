function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequire78ed;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequire78ed=o);var i=o.register;i("1qHQF",function(t,e){let r=document.querySelector(".switch-theme"),n={light:r.querySelector(".switch-icon__light"),dark:r.querySelector(".switch-icon__dark")};r.addEventListener("click",()=>{let t=document.documentElement.getAttribute("data-theme"),e="light"===t?"dark":"light";localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),n[t].classList.toggle("hidden"),n[e].classList.toggle("hidden")})}),i("8QdEj",function(t,e){let r=document.querySelector(".btnUp");window.addEventListener("scroll",()=>{let t=document.documentElement.scrollTop;t>400?r.classList.remove("hide"):r.classList.add("hide")}),r.addEventListener("click",()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})})}),i("04Pik",function(e,r){t(e.exports,"fetchBooksCategory",function(){return i}),t(e.exports,"fetchBook",function(){return a}),t(e.exports,"fetchGenre",function(){return u}),t(e.exports,"fetchCatalog",function(){return s}),t(e.exports,"fetchRandomBook",function(){return f}),o("2shzp");var n=o("bRlFp");async function i(t){let e=`volumes?q=intitle:${t}&printType=books&startIndex=${l(11)}&maxResults=6`,r=await (0,n.default).get(e),o=await r.data,i=await o.items;return i}async function a(t){let e=`volumes/${t}`,r=await (0,n.default).get(e),o=await r.data;return o}async function u(t){let e=`volumes?q=${t}&printType=books&startIndex=${l(500)}&maxResults=10`,r=await (0,n.default).get(e),o=await r.data,i=await o.items;return i}async function s(t,e=0){let r=`volumes?q=${t}&printType=books&startIndex=${e}&maxResults=33`,o=await (0,n.default).get(r),i=await o.data,a=await i.items;return a}async function f(t){let e=`volumes?q=${t}&printType=books&startIndex=${l(33)}&maxResults=1`,r=await (0,n.default).get(e),o=await r.data,i=await o.items;return i}function l(t){return Math.floor(Math.random()*t)}n.default.defaults.baseURL="https://www.googleapis.com/books/v1/"}),i("2shzp",function(e,r){t(e.exports,"default",function(){return o("bRlFp").default});var n=o("bRlFp");// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
let{Axios:i,AxiosError:a,CanceledError:u,isCancel:s,CancelToken:f,VERSION:l,all:c,Cancel:d,isAxiosError:h,spread:p,toFormData:g,AxiosHeaders:y,HttpStatusCode:m,formToJSON:b,getAdapter:w,mergeConfig:E}=n.default}),i("bRlFp",function(e,r){t(e.exports,"default",function(){return B});var n=o("2bBga"),i=o("djt5d"),a=o("6zSb1"),u=o("d0EKm"),s=o("hqlPG"),f=o("4bmvb"),l=o("83xK9"),c=o("2sjhC"),d=o("ksuZT"),h=o("50GW0"),p=o("aewVa"),g=o("121rJ"),y=o("av9gA"),m=o("gNhGc"),b=o("gbTL1"),w=o("enpjQ"),E=o("jd7iQ");// Create the default instance to be exported
let v=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let r=new a.default(e),o=(0,i.default)(a.default.prototype.request,r);return(// Copy axios.prototype to instance
(0,n.default).extend(o,a.default.prototype,r,{allOwnKeys:!0}),// Copy context to instance
(0,n.default).extend(o,r,null,{allOwnKeys:!0}),// Factory for creating new instances
o.create=function(r){return t((0,u.default)(e,r))},o)}(s.default);// Expose Axios class to allow class inheritance
v.Axios=a.default,// Expose Cancel & CancelToken
v.CanceledError=l.default,v.CancelToken=c.default,v.isCancel=d.default,v.VERSION=h.VERSION,v.toFormData=p.default,// Expose AxiosError class
v.AxiosError=g.default,// alias for CanceledError for backward compatibility
v.Cancel=v.CanceledError,// Expose all/spread
v.all=function(t){return Promise.all(t)},v.spread=y.default,// Expose isAxiosError
v.isAxiosError=m.default,// Expose mergeConfig
v.mergeConfig=u.default,v.AxiosHeaders=b.default,v.formToJSON=t=>(0,f.default)((0,n.default).isHTMLForm(t)?new FormData(t):t),v.getAdapter=w.default.getAdapter,v.HttpStatusCode=E.default,v.default=v;var B=v}),i("2bBga",function(r,n){t(r.exports,"default",function(){return $});var i,a,u=o("djt5d");// utils is a library of generic helper functions non-specific to axios
let{toString:s}=Object.prototype,{getPrototypeOf:f}=Object,l=(i=Object.create(null),t=>{let e=s.call(t);return i[e]||(i[e]=e.slice(8,-1).toLowerCase())}),c=t=>(t=t.toLowerCase(),e=>l(e)===t),d=t=>e=>typeof e===t,{isArray:h}=Array,p=d("undefined"),g=c("ArrayBuffer"),y=d("string"),m=d("function"),b=d("number"),w=t=>null!==t&&"object"==typeof t,E=t=>{if("object"!==l(t))return!1;let e=f(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},v=c("Date"),B=c("File"),O=c("Blob"),A=c("FileList"),R=c("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function x(t,e,{allOwnKeys:r=!1}={}){let n,o;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),h(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(t):Object.keys(t),a=i.length;for(n=0;n<a;n++)o=i[n],e.call(null,t[o],o,t)}}}function S(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),o=n.length;for(;o-- >0;)if(e===(r=n[o]).toLowerCase())return r;return null}let T=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:e,U=t=>!p(t)&&t!==T,_=(a="undefined"!=typeof Uint8Array&&f(Uint8Array),t=>a&&t instanceof a),L=c("HTMLFormElement"),I=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),C=c("RegExp"),j=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};x(r,(r,o)=>{let i;!1!==(i=e(r,o,t))&&(n[o]=i||r)}),Object.defineProperties(t,n)},N="abcdefghijklmnopqrstuvwxyz",k="0123456789",P={DIGIT:k,ALPHA:N,ALPHA_DIGIT:N+N.toUpperCase()+k},F=c("AsyncFunction");var $={isArray:h,isArrayBuffer:g,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!p(t)&&null!==t.constructor&&!p(t.constructor)&&m(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||m(t.append)&&("formdata"===(e=l(t))||// detect form-data instance
"object"===e&&m(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&g(t.buffer)},isString:y,isNumber:b,isBoolean:t=>!0===t||!1===t,isObject:w,isPlainObject:E,isUndefined:p,isDate:v,isFile:B,isBlob:O,isRegExp:C,isFunction:m,isStream:t=>w(t)&&m(t.pipe),isURLSearchParams:R,isTypedArray:_,isFileList:A,forEach:x,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function t(){let{caseless:e}=U(this)&&this||{},r={},n=(n,o)=>{let i=e&&S(r,o)||o;E(r[i])&&E(n)?r[i]=t(r[i],n):E(n)?r[i]=t({},n):h(n)?r[i]=n.slice():r[i]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&x(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(x(e,(e,n)=>{r&&m(e)?t[n]=(0,u.default)(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let o,i,a;let u={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(i=(o=Object.getOwnPropertyNames(t)).length;i-- >0;)a=o[i],(!n||n(a,t,e))&&!u[a]&&(e[a]=t[a],u[a]=!0);t=!1!==r&&f(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:l,kindOfTest:c,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(h(t))return t;let e=t.length;if(!b(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],o=n.call(t);for(;(r=o.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:L,hasOwnProperty:I,hasOwnProp:I,reduceDescriptors:j,freezeMethods:t=>{j(t,(e,r)=>{// skip restricted props in strict mode
if(m(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(m(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(h(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:S,global:T,isContextDefined:U,ALPHABET:P,generateString:(t=16,e=P.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&m(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(w(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let o=h(t)?[]:{};return x(t,(t,e)=>{let i=r(t,n+1);p(i)||(o[e]=i)}),e[n]=void 0,o}}return t};return r(t,0)},isAsyncFn:F,isThenable:t=>t&&(w(t)||m(t))&&m(t.then)&&m(t.catch)}}),i("djt5d",function(e,r){t(e.exports,"default",function(){return n});function n(t,e){return function(){return t.apply(e,arguments)}}}),i("6zSb1",function(e,r){t(e.exports,"default",function(){return p});var n=o("2bBga"),i=o("2RNjJ"),a=o("5Dm7L"),u=o("eQ5d8"),s=o("d0EKm"),f=o("1ZTQa"),l=o("6zj0X"),c=o("gbTL1");let d=l.default.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class h{constructor(t){this.defaults=t,this.interceptors={request:new a.default,response:new a.default}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,o;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=(0,s.default)(this.defaults,e);let{transitional:i,paramsSerializer:a,headers:f}=e;void 0!==i&&(0,l.default).assertOptions(i,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1),null!=a&&((0,n.default).isFunction(a)?e.paramsSerializer={serialize:a}:(0,l.default).assertOptions(a,{encode:d.function,serialize:d.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let h=f&&(0,n.default).merge(f.common,f[e.method]);f&&(0,n.default).forEach(["delete","get","head","post","put","patch","common"],t=>{delete f[t]}),e.headers=(0,c.default).concat(h,f);// filter out skipped interceptors
let p=[],g=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(g=g&&t.synchronous,p.unshift(t.fulfilled,t.rejected))});let y=[];this.interceptors.response.forEach(function(t){y.push(t.fulfilled,t.rejected)});let m=0;if(!g){let t=[(0,u.default).bind(this),void 0];for(t.unshift.apply(t,p),t.push.apply(t,y),o=t.length,r=Promise.resolve(e);m<o;)r=r.then(t[m++],t[m++]);return r}o=p.length;let b=e;for(m=0;m<o;){let t=p[m++],e=p[m++];try{b=t(b)}catch(t){e.call(this,t);break}}try{r=(0,u.default).call(this,b)}catch(t){return Promise.reject(t)}for(m=0,o=y.length;m<o;)r=r.then(y[m++],y[m++]);return r}getUri(t){t=(0,s.default)(this.defaults,t);let e=(0,f.default)(t.baseURL,t.url);return(0,i.default)(e,t.params,t.paramsSerializer)}}// Provide aliases for supported request methods
(0,n.default).forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/h.prototype[t]=function(e,r){return this.request((0,s.default)(r||{},{method:t,url:e,data:(r||{}).data}))}}),(0,n.default).forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,o){return this.request((0,s.default)(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}h.prototype[t]=e(),h.prototype[t+"Form"]=e(!0)});var p=h}),i("2RNjJ",function(e,r){t(e.exports,"default",function(){return u});var n=o("2bBga"),i=o("hz3Ym");/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function a(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function u(t,e,r){let o;/*eslint no-param-reassign:0*/if(!e)return t;let u=r&&r.encode||a,s=r&&r.serialize;if(o=s?s(e,r):(0,n.default).isURLSearchParams(e)?e.toString():new(0,i.default)(e,r).toString(u)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}}),i("hz3Ym",function(e,r){t(e.exports,"default",function(){return s});var n=o("aewVa");/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function i(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function a(t,e){this._pairs=[],t&&(0,n.default)(t,this,e)}let u=a.prototype;u.append=function(t,e){this._pairs.push([t,e])},u.toString=function(t){let e=t?function(e){return t.call(this,e,i)}:i;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var s=a}),i("aewVa",function(e,r){t(e.exports,"default",function(){return d});var n=o("2bBga"),i=o("121rJ"),a=o("1gvAv"),u=o("ihoyg").Buffer;/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function s(t){return(0,n.default).isPlainObject(t)||(0,n.default).isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function f(t){return(0,n.default).endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function l(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=f(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}let c=(0,n.default).toFlatObject(n.default,{},null,function(t){return/^is[A-Z]/.test(t)});var d=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(t,e,r){if(!(0,n.default).isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new(a.default||FormData),// eslint-disable-next-line no-param-reassign
r=(0,n.default).toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!(0,n.default).isUndefined(e[t])});let o=r.metaTokens,d=r.visitor||b,h=r.dots,p=r.indexes,g=r.Blob||"undefined"!=typeof Blob&&Blob,y=g&&(0,n.default).isSpecCompliantForm(e);if(!(0,n.default).isFunction(d))throw TypeError("visitor must be a function");function m(t){if(null===t)return"";if((0,n.default).isDate(t))return t.toISOString();if(!y&&(0,n.default).isBlob(t))throw new i.default("Blob is not supported. Use a Buffer instead.");return(0,n.default).isArrayBuffer(t)||(0,n.default).isTypedArray(t)?y&&"function"==typeof Blob?new Blob([t]):u.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function b(t,r,i){let a=t;if(t&&!i&&"object"==typeof t){if((0,n.default).endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=o?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var u;if((0,n.default).isArray(t)&&(u=t,(0,n.default).isArray(u)&&!u.some(s))||((0,n.default).isFileList(t)||(0,n.default).endsWith(r,"[]"))&&(a=(0,n.default).toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=f(r),a.forEach(function(t,o){(0,n.default).isUndefined(t)||null===t||e.append(!0===p?l([r],o,h):null===p?r:r+"[]",m(t))}),!1)}}return!!s(t)||(e.append(l(i,r,h),m(t)),!1)}let w=[],E=Object.assign(c,{defaultVisitor:b,convertValue:m,isVisitable:s});if(!(0,n.default).isObject(t))throw TypeError("data must be an object");return function t(r,o){if(!(0,n.default).isUndefined(r)){if(-1!==w.indexOf(r))throw Error("Circular reference detected in "+o.join("."));w.push(r),(0,n.default).forEach(r,function(r,i){let a=!((0,n.default).isUndefined(r)||null===r)&&d.call(e,r,(0,n.default).isString(i)?i.trim():i,o,E);!0===a&&t(r,o?o.concat(i):[i])}),w.pop()}}(t),e}}),i("121rJ",function(e,r){t(e.exports,"default",function(){return s});var n=o("2bBga");/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function i(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}(0,n.default).inherits(i,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:(0,n.default).toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let a=i.prototype,u={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{u[t]={value:t}}),Object.defineProperties(i,u),Object.defineProperty(a,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
i.from=(t,e,r,o,u,s)=>{let f=Object.create(a);return(0,n.default).toFlatObject(t,f,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),i.call(f,t.message,e,r,o,u),f.cause=t,f.name=t.name,s&&Object.assign(f,s),f};var s=i}),i("1gvAv",function(e,r){t(e.exports,"default",function(){return n});// eslint-disable-next-line strict
var n=null}),i("ihoyg",function(e,r){t(e.exports,"Buffer",function(){return n},function(t){return n=t}),t(e.exports,"INSPECT_MAX_BYTES",function(){return i},function(t){return i=t});var n,i,a=o("hqZtu"),u=o("5WQj6");let s="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function f(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,l.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function l(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return h(t)}return c(t,e,r)}function c(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!l.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|m(t,e),n=f(r),o=n.write(t,e);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(D(t,Uint8Array)){let e=new Uint8Array(t);return g(e.buffer,e.byteOffset,e.byteLength)}return p(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(D(t,ArrayBuffer)||t&&D(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(D(t,SharedArrayBuffer)||t&&D(t.buffer,SharedArrayBuffer)))return g(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return l.from(n,e,r);let o=function(t){var e;if(l.isBuffer(t)){let e=0|y(t.length),r=f(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?f(0):p(t):"Buffer"===t.type&&Array.isArray(t.data)?p(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return l.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function d(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return d(t),f(t<0?0:0|y(t))}function p(t){let e=t.length<0?0:0|y(t.length),r=f(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function g(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),l.prototype),n)}function y(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function m(t,e){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||D(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return P(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return F(t).length;default:if(o)return n?-1:P(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function b(t,e,r){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=e;n<r;++n)o+=M[t[n]];return o}(this,e,r);case"utf8":case"utf-8":return B(this,e,r);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":var o,i;return o=e,i=r,0===o&&i===this.length?a.fromByteArray(this):a.fromByteArray(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),o="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1]);return o}(this,e,r);default:if(n)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function E(t,e,r,n,o){var i;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=l.from(e,n)),l.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:v(t,e,r,n,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):v(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function v(t,e,r,n,o){let i,a=1,u=t.length,s=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;a=2,u/=2,s/=2,r/=2}function f(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){let n=-1;for(i=r;i<u;i++)if(f(t,i)===f(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===s)return n*a}else -1!==n&&(i-=i-n),n=-1}else for(r+s>u&&(r=u-s),i=r;i>=0;i--){let r=!0;for(let n=0;n<s;n++)if(f(t,i+n)!==f(e,n)){r=!1;break}if(r)return i}return -1}function B(t,e,r){r=Math.min(t.length,r);let n=[],o=e;for(;o<r;){let e=t[o],i=null,a=e>239?4:e>223?3:e>191?2:1;if(o+a<=r){let r,n,u,s;switch(a){case 1:e<128&&(i=e);break;case 2:(192&(r=t[o+1]))==128&&(s=(31&e)<<6|63&r)>127&&(i=s);break;case 3:r=t[o+1],n=t[o+2],(192&r)==128&&(192&n)==128&&(s=(15&e)<<12|(63&r)<<6|63&n)>2047&&(s<55296||s>57343)&&(i=s);break;case 4:r=t[o+1],n=t[o+2],u=t[o+3],(192&r)==128&&(192&n)==128&&(192&u)==128&&(s=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&u)>65535&&s<1114112&&(i=s)}}null===i?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
i=65533,a=1):i>65535&&(// encode to utf16 (surrogate pair dance)
i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=a}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function O(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function A(t,e,r,n,o,i){if(!l.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function R(t,e,r,n,o){C(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,r}function x(t,e,r,n,o){C(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=a,a>>=8,t[r+2]=a,a>>=8,t[r+1]=a,a>>=8,t[r]=a,r+8}function S(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function T(t,e,r,n,o){return e=+e,r>>>=0,o||S(t,e,r,4,34028234663852886e22,-34028234663852886e22),u.write(t,e,r,n,23,4),r+4}function U(t,e,r,n,o){return e=+e,r>>>=0,o||S(t,e,r,8,17976931348623157e292,-17976931348623157e292),u.write(t,e,r,n,52,8),r+8}n=l,i=50,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */l.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/l.from=function(t,e,r){return c(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/l.alloc=function(t,e,r){return(d(t),t<=0)?f(t):void 0!==e?"string"==typeof r?f(t).fill(e,r):f(t).fill(e):f(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */l.allocUnsafe=function(t){return h(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */l.allocUnsafeSlow=function(t){return h(t)},l.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==l.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},l.compare=function(t,e){if(D(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),D(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(t)||!l.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},l.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return l.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=l.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){let e=t[r];if(D(e,Uint8Array))o+e.length>n.length?(l.isBuffer(e)||(e=l.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o);else if(l.isBuffer(e))e.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=e.length}return n},l.byteLength=m,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
l.prototype._isBuffer=!0,l.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)w(this,e,e+1);return this},l.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},l.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},l.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?B(this,0,t):b.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(t){if(!l.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===l.compare(this,t)},l.prototype.inspect=function(){let t="",e=i;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},s&&(l.prototype[s]=l.prototype.inspect),l.prototype.compare=function(t,e,r,n,o){if(D(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;let i=o-n,a=r-e,u=Math.min(i,a),s=this.slice(n,o),f=t.slice(e,r);for(let t=0;t<u;++t)if(s[t]!==f[t]){i=s[t],a=f[t];break}return i<a?-1:a<i?1:0},l.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},l.prototype.indexOf=function(t,e,r){return E(this,t,e,r,!0)},l.prototype.lastIndexOf=function(t,e,r){return E(this,t,e,r,!1)},l.prototype.write=function(t,e,r,n){var o,i,a,u,s,f,l,c;// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-e;if((void 0===r||r>d)&&(r=d),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let h=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let o;r=Number(r)||0;let i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;let a=e.length;for(n>a/2&&(n=a/2),o=0;o<n;++o){let n=parseInt(e.substr(2*o,2),16);if(n!=n)break;t[r+o]=n}return o}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,$(P(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return a=e,u=r,$(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,a,u);case"base64":// Warning: maxLength not taken into account in base64Write
return s=e,f=r,$(F(t),this,s,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return l=e,c=r,$(function(t,e){let r,n;let o=[];for(let i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-l),this,l,c);default:if(h)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),h=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,l.prototype),n)},l.prototype.readUintLE=l.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t+--e],o=1;for(;e>0&&(o*=256);)n+=this[t+--e]*o;return n},l.prototype.readUint8=l.prototype.readUInt8=function(t,e){return t>>>=0,e||O(t,1,this.length),this[t]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(t,e){return t>>>=0,e||O(t,2,this.length),this[t]|this[t+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(t,e){return t>>>=0,e||O(t,2,this.length),this[t]<<8|this[t+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(t,e){return t>>>=0,e||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(t,e){return t>>>=0,e||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},l.prototype.readBigUInt64LE=q(function(t){j(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&N(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],o=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(o)<<BigInt(32))}),l.prototype.readBigUInt64BE=q(function(t){j(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&N(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],o=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)}),l.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},l.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=e,o=1,i=this[t+--n];for(;n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},l.prototype.readInt8=function(t,e){return(t>>>=0,e||O(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},l.prototype.readInt16LE=function(t,e){t>>>=0,e||O(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(t,e){t>>>=0,e||O(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(t,e){return t>>>=0,e||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},l.prototype.readInt32BE=function(t,e){return t>>>=0,e||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},l.prototype.readBigInt64LE=q(function(t){j(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&N(t,this.length-8);let n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),l.prototype.readBigInt64BE=q(function(t){j(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&N(t,this.length-8);let n=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),l.prototype.readFloatLE=function(t,e){return t>>>=0,e||O(t,4,this.length),u.read(this,t,!0,23,4)},l.prototype.readFloatBE=function(t,e){return t>>>=0,e||O(t,4,this.length),u.read(this,t,!1,23,4)},l.prototype.readDoubleLE=function(t,e){return t>>>=0,e||O(t,8,this.length),u.read(this,t,!0,52,8)},l.prototype.readDoubleBE=function(t,e){return t>>>=0,e||O(t,8,this.length),u.read(this,t,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;A(this,t,e,r,n,0)}let o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;A(this,t,e,r,n,0)}let o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||A(this,t,e,1,255,0),this[e]=255&t,e+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||A(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||A(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||A(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||A(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},l.prototype.writeBigUInt64LE=q(function(t,e=0){return R(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeBigUInt64BE=q(function(t,e=0){return x(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);A(this,t,e,r,n-1,-n)}let o=0,i=1,a=0;for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/i>>0)-a&255;return e+r},l.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);A(this,t,e,r,n-1,-n)}let o=r-1,i=1,a=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/i>>0)-a&255;return e+r},l.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||A(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},l.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||A(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},l.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||A(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},l.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||A(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},l.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||A(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},l.prototype.writeBigInt64LE=q(function(t,e=0){return R(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeBigInt64BE=q(function(t,e=0){return x(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeFloatLE=function(t,e,r){return T(this,t,e,!0,r)},l.prototype.writeFloatBE=function(t,e,r){return T(this,t,e,!1,r)},l.prototype.writeDoubleLE=function(t,e,r){return U(this,t,e,!0,r)},l.prototype.writeDoubleBE=function(t,e,r){return U(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
l.prototype.copy=function(t,e,r,n){if(!l.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
l.prototype.fill=function(t,e,r,n){let o;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{let i=l.isBuffer(t)?t:l.from(t,n),a=i.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=i[o%a]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let _={};function L(t,e,r){_[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function I(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function C(t,e,r,n,o,i){if(t>r||t<e){let n;let o="bigint"==typeof e?"n":"";throw n=i>3?0===e||e===BigInt(0)?`>= 0${o} and < 2${o} ** ${(i+1)*8}${o}`:`>= -(2${o} ** ${(i+1)*8-1}${o}) and < 2 ** ${(i+1)*8-1}${o}`:`>= ${e}${o} and <= ${r}${o}`,new _.ERR_OUT_OF_RANGE("value",n,t)}j(o,"offset"),(void 0===n[o]||void 0===n[o+i])&&N(o,n.length-(i+1))}function j(t,e){if("number"!=typeof t)throw new _.ERR_INVALID_ARG_TYPE(e,"number",t)}function N(t,e,r){if(Math.floor(t)!==t)throw j(t,r),new _.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new _.ERR_BUFFER_OUT_OF_BOUNDS;throw new _.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}L("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),L("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),L("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?o=I(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=I(o)),o+="n"),n+=` It must be ${e}. Received ${o}`},RangeError);// HELPER FUNCTIONS
// ================
let k=/[^+/0-9A-Za-z-_]/g;function P(t,e){let r;e=e||1/0;let n=t.length,o=null,i=[];for(let a=0;a<n;++a){// is surrogate component
if((r=t.charCodeAt(a))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||a+1===n){// unexpected trail
(e-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function F(t){return a.toByteArray(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(k,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function $(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function D(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let M=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();// Return not function with Error if BigInt not supported
function q(t){return"undefined"==typeof BigInt?z:t}function z(){throw Error("BigInt not supported")}}),i("hqZtu",function(e,r){t(e.exports,"toByteArray",function(){return n},function(t){return n=t}),t(e.exports,"fromByteArray",function(){return o},function(t){return o=t}),n=function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),o=n[0],i=n[1],s=new u((o+i)*3/4-i),f=0,l=i>0?o-4:o;for(r=0;r<l;r+=4)e=a[t.charCodeAt(r)]<<18|a[t.charCodeAt(r+1)]<<12|a[t.charCodeAt(r+2)]<<6|a[t.charCodeAt(r+3)],s[f++]=e>>16&255,s[f++]=e>>8&255,s[f++]=255&e;return 2===i&&(e=a[t.charCodeAt(r)]<<2|a[t.charCodeAt(r+1)]>>4,s[f++]=255&e),1===i&&(e=a[t.charCodeAt(r)]<<10|a[t.charCodeAt(r+1)]<<4|a[t.charCodeAt(r+2)]>>2,s[f++]=e>>8&255,s[f++]=255&e),s},o=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],a=0,u=r-n;a<u;a+=16383// must be multiple of 3
)o.push(function(t,e,r){for(var n,o=[],a=e;a<r;a+=3)o.push(i[(n=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]))>>18&63]+i[n>>12&63]+i[n>>6&63]+i[63&n]);return o.join("")}(t,a,a+16383>u?u:a+16383));return 1===n?o.push(i[(e=t[r-1])>>2]+i[e<<4&63]+"=="):2===n&&o.push(i[(e=(t[r-2]<<8)+t[r-1])>>10]+i[e>>4&63]+i[e<<2&63]+"="),o.join("")};for(var n,o,i=[],a=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,l=s.length;f<l;++f)i[f]=s[f],a[s.charCodeAt(f)]=f;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63}),i("5WQj6",function(e,r){var n,o;t(e.exports,"read",function(){return n},function(t){return n=t}),t(e.exports,"write",function(){return o},function(t){return o=t}),n=function(t,e,r,n,o){var i,a,u=8*o-n-1,s=(1<<u)-1,f=s>>1,l=-7,c=r?o-1:0,d=r?-1:1,h=t[e+c];for(c+=d,i=h&(1<<-l)-1,h>>=-l,l+=u;l>0;i=256*i+t[e+c],c+=d,l-=8);for(a=i&(1<<-l)-1,i>>=-l,l+=n;l>0;a=256*a+t[e+c],c+=d,l-=8);if(0===i)i=1-f;else{if(i===s)return a?NaN:(h?-1:1)*(1/0);a+=Math.pow(2,n),i-=f}return(h?-1:1)*a*Math.pow(2,i-n)},o=function(t,e,r,n,o,i){var a,u,s,f=8*i-o-1,l=(1<<f)-1,c=l>>1,d=23===o?5960464477539062e-23:0,h=n?0:i-1,p=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(u=isNaN(e)?1:0,a=l):(a=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-a))<1&&(a--,s*=2),a+c>=1?e+=d/s:e+=d*Math.pow(2,1-c),e*s>=2&&(a++,s/=2),a+c>=l?(u=0,a=l):a+c>=1?(u=(e*s-1)*Math.pow(2,o),a+=c):(u=e*Math.pow(2,c-1)*Math.pow(2,o),a=0));o>=8;t[r+h]=255&u,h+=p,u/=256,o-=8);for(a=a<<o|u,f+=o;f>0;t[r+h]=255&a,h+=p,a/=256,f-=8);t[r+h-p]|=128*g}}),i("5Dm7L",function(e,r){t(e.exports,"default",function(){return i});var n=o("2bBga"),i=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(t){this.handlers[t]&&(this.handlers[t]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(t){(0,n.default).forEach(this.handlers,function(e){null!==e&&t(e)})}}}),i("eQ5d8",function(e,r){t(e.exports,"default",function(){return c});var n=o("bhEpd"),i=o("ksuZT"),a=o("hqlPG"),u=o("83xK9"),s=o("gbTL1"),f=o("enpjQ");/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function l(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new u.default(null,t)}function c(t){l(t),t.headers=(0,s.default).from(t.headers),// Transform request data
t.data=(0,n.default).call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=(0,f.default).getAdapter(t.adapter||a.default.adapter);return e(t).then(function(e){return l(t),// Transform response data
e.data=(0,n.default).call(t,t.transformResponse,e),e.headers=(0,s.default).from(e.headers),e},function(e){return!(0,i.default)(e)&&(l(t),e&&e.response&&(e.response.data=(0,n.default).call(t,t.transformResponse,e.response),e.response.headers=(0,s.default).from(e.response.headers))),Promise.reject(e)})}}),i("bhEpd",function(e,r){t(e.exports,"default",function(){return u});var n=o("2bBga"),i=o("hqlPG"),a=o("gbTL1");function u(t,e){let r=this||i.default,o=e||r,u=(0,a.default).from(o.headers),s=o.data;return(0,n.default).forEach(t,function(t){s=t.call(r,s,u.normalize(),e?e.status:void 0)}),u.normalize(),s}}),i("hqlPG",function(e,r){t(e.exports,"default",function(){return d});var n=o("2bBga"),i=o("121rJ"),a=o("2wfLM"),u=o("aewVa"),s=o("5tcKT"),f=o("d5Oi9"),l=o("4bmvb");let c={transitional:a.default,adapter:["xhr","http"],transformRequest:[function(t,e){let r;let o=e.getContentType()||"",i=o.indexOf("application/json")>-1,a=(0,n.default).isObject(t);a&&(0,n.default).isHTMLForm(t)&&(t=new FormData(t));let f=(0,n.default).isFormData(t);if(f)return i&&i?JSON.stringify((0,l.default)(t)):t;if((0,n.default).isArrayBuffer(t)||(0,n.default).isBuffer(t)||(0,n.default).isStream(t)||(0,n.default).isFile(t)||(0,n.default).isBlob(t))return t;if((0,n.default).isArrayBufferView(t))return t.buffer;if((0,n.default).isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(a){if(o.indexOf("application/x-www-form-urlencoded")>-1)return(0,s.default)(t,this.formSerializer).toString();if((r=(0,n.default).isFileList(t))||o.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return(0,u.default)(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return a||i?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if((0,n.default).isString(t))try{return(0,JSON.parse)(t),(0,n.default).trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||c.transitional,r=e&&e.forcedJSONParsing,o="json"===this.responseType;if(t&&(0,n.default).isString(t)&&(r&&!this.responseType||o)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&o){if("SyntaxError"===t.name)throw(0,i.default).from(t,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:f.default.classes.FormData,Blob:f.default.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};(0,n.default).forEach(["delete","get","head","post","put","patch"],t=>{c.headers[t]={}});var d=c}),i("2wfLM",function(e,r){t(e.exports,"default",function(){return n});var n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}}),i("5tcKT",function(e,r){t(e.exports,"default",function(){return u});var n=o("2bBga"),i=o("aewVa"),a=o("d5Oi9");function u(t,e){return(0,i.default)(t,new a.default.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,o){return a.default.isNode&&(0,n.default).isBuffer(t)?(this.append(e,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}}),i("d5Oi9",function(e,r){t(e.exports,"default",function(){return i});var n=o("hdo0R"),i={...o("fd0Wi"),...n.default}}),i("hdo0R",function(e,r){t(e.exports,"default",function(){return u});var n=o("9matH"),i=o("eN04z"),a=o("2J1oD"),u={isBrowser:!0,classes:{URLSearchParams:n.default,FormData:i.default,Blob:a.default},protocols:["http","https","file","blob","url","data"]}}),i("9matH",function(e,r){t(e.exports,"default",function(){return i});var n=o("hz3Ym"),i="undefined"!=typeof URLSearchParams?URLSearchParams:n.default}),i("eN04z",function(e,r){t(e.exports,"default",function(){return n});var n="undefined"!=typeof FormData?FormData:null}),i("2J1oD",function(e,r){t(e.exports,"default",function(){return n});var n="undefined"!=typeof Blob?Blob:null}),i("fd0Wi",function(e,r){var n;t(e.exports,"hasBrowserEnv",function(){return o}),t(e.exports,"hasStandardBrowserEnv",function(){return i}),t(e.exports,"hasStandardBrowserWebWorkerEnv",function(){return a});let o="undefined"!=typeof window&&"undefined"!=typeof document,i=(n="undefined"!=typeof navigator&&navigator.product,o&&0>["ReactNative","NativeScript","NS"].indexOf(n)),a="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts}),i("4bmvb",function(e,r){t(e.exports,"default",function(){return i});var n=o("2bBga"),i=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if((0,n.default).isFormData(t)&&(0,n.default).isFunction(t.entries)){let e={};return(0,n.default).forEachEntry(t,(t,r)=>{!function t(e,r,o,i){let a=e[i++],u=Number.isFinite(+a),s=i>=e.length;if(a=!a&&(0,n.default).isArray(o)?o.length:a,s)return(0,n.default).hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!u;o[a]&&(0,n.default).isObject(o[a])||(o[a]=[]);let f=t(e,r,o[a],i);return f&&(0,n.default).isArray(o[a])&&(o[a]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},o=Object.keys(t),i=o.length;for(e=0;e<i;e++)n[r=o[e]]=t[r];return n}(o[a])),!u}((0,n.default).matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null}}),i("gbTL1",function(e,r){t(e.exports,"default",function(){return d});var n=o("2bBga"),i=o("9cPEm");let a=Symbol("internals");function u(t){return t&&String(t).trim().toLowerCase()}function s(t){return!1===t||null==t?t:(0,n.default).isArray(t)?t.map(s):String(t)}let f=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function l(t,e,r,o,i){if((0,n.default).isFunction(o))return o.call(this,e,r);if(i&&(e=r),(0,n.default).isString(e)){if((0,n.default).isString(o))return -1!==e.indexOf(o);if((0,n.default).isRegExp(o))return o.test(e)}}class c{constructor(t){t&&this.set(t)}set(t,e,r){let o=this;function a(t,e,r){let i=u(e);if(!i)throw Error("header name must be a non-empty string");let a=(0,n.default).findKey(o,i);a&&void 0!==o[a]&&!0!==r&&(void 0!==r||!1===o[a])||(o[a||e]=s(t))}let l=(t,e)=>(0,n.default).forEach(t,(t,r)=>a(t,r,e));return(0,n.default).isPlainObject(t)||t instanceof this.constructor?l(t,e):(0,n.default).isString(t)&&(t=t.trim())&&!f(t)?l((0,i.default)(t),e):null!=t&&a(e,t,r),this}get(t,e){if(t=u(t)){let r=(0,n.default).findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if((0,n.default).isFunction(e))return e.call(this,t,r);if((0,n.default).isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=u(t)){let r=(0,n.default).findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||l(this,this[r],r,e)))}return!1}delete(t,e){let r=this,o=!1;function i(t){if(t=u(t)){let i=(0,n.default).findKey(r,t);i&&(!e||l(r,r[i],i,e))&&(delete r[i],o=!0)}}return(0,n.default).isArray(t)?t.forEach(i):i(t),o}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let o=e[r];(!t||l(this,this[o],o,t,!0))&&(delete this[o],n=!0)}return n}normalize(t){let e=this,r={};return(0,n.default).forEach(this,(o,i)=>{let a=(0,n.default).findKey(r,i);if(a){e[a]=s(o),delete e[i];return}let u=t?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(i).trim();u!==i&&delete e[i],e[u]=s(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return(0,n.default).forEach(this,(r,o)=>{null!=r&&!1!==r&&(e[o]=t&&(0,n.default).isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[a]=this[a]={accessors:{}},r=e.accessors,o=this.prototype;function i(t){let e=u(t);r[e]||(function(t,e){let r=(0,n.default).toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})})}(o,t),r[e]=!0)}return(0,n.default).isArray(t)?t.forEach(i):i(t),this}}c.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),// reserved names hotfix
(0,n.default).reduceDescriptors(c.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),(0,n.default).freezeMethods(c);var d=c}),i("9cPEm",function(e,r){t(e.exports,"default",function(){return a});var n=o("2bBga");// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
let i=(0,n.default).toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */a=t=>{let e,r,n;let o={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||o[e]&&i[e]||("set-cookie"===e?o[e]?o[e].push(r):o[e]=[r]:o[e]=o[e]?o[e]+", "+r:r)}),o}}),i("ksuZT",function(e,r){t(e.exports,"default",function(){return n});function n(t){return!!(t&&t.__CANCEL__)}}),i("83xK9",function(e,r){t(e.exports,"default",function(){return a});var n=o("121rJ");/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function i(t,e,r){// eslint-disable-next-line no-eq-null,eqeqeq
(0,n.default).call(this,null==t?"canceled":t,n.default.ERR_CANCELED,e,r),this.name="CanceledError"}(0,o("2bBga").default).inherits(i,n.default,{__CANCEL__:!0});var a=i}),i("enpjQ",function(e,r){t(e.exports,"default",function(){return c});var n=o("2bBga"),i=o("1gvAv"),a=o("9VVcb"),u=o("121rJ");let s={http:i.default,xhr:a.default};(0,n.default).forEach(s,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});let f=t=>`- ${t}`,l=t=>(0,n.default).isFunction(t)||null===t||!1===t;var c={getAdapter:t=>{let e,r;t=(0,n.default).isArray(t)?t:[t];let{length:o}=t,i={};for(let n=0;n<o;n++){let o;if(r=e=t[n],!l(e)&&void 0===(r=s[(o=String(e)).toLowerCase()]))throw new u.default(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+n]=r}if(!r){let t=Object.entries(i).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build")),e=o?t.length>1?"since :\n"+t.map(f).join("\n"):" "+f(t[0]):"as no adapter specified";throw new u.default("There is no suitable adapter to dispatch the request "+e,"ERR_NOT_SUPPORT")}return r},adapters:s}}),i("9VVcb",function(e,r){t(e.exports,"default",function(){return w});var n=o("2bBga"),i=o("1TQad"),a=o("kTwUV"),u=o("2RNjJ"),s=o("1ZTQa"),f=o("g3yOT"),l=o("2wfLM"),c=o("121rJ"),d=o("83xK9"),h=o("8wMQb"),p=o("d5Oi9"),g=o("gbTL1"),y=o("5OiBb");function m(t,e){let r=0,n=(0,y.default)(50,250);return o=>{let i=o.loaded,a=o.lengthComputable?o.total:void 0,u=i-r,s=n(u);r=i;let f={loaded:i,total:a,progress:a?i/a:void 0,bytes:u,rate:s||void 0,estimated:s&&a&&i<=a?(a-i)/s:void 0,event:o};f[e?"download":"upload"]=!0,t(f)}}let b="undefined"!=typeof XMLHttpRequest;var w=b&&function(t){return new Promise(function(e,r){let o,y,b=t.data,w=(0,g.default).from(t.headers).normalize(),E=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}if((0,n.default).isFormData(b)){if(p.default.hasStandardBrowserEnv||p.default.hasStandardBrowserWebWorkerEnv)w.setContentType(!1);// Let the browser set it
else if(!1!==(y=w.getContentType())){// fix semicolon duplication issue for ReactNative FormData implementation
let[t,...e]=y?y.split(";").map(t=>t.trim()).filter(Boolean):[];w.setContentType([t||"multipart/form-data",...e].join("; "))}}let B=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";w.set("Authorization","Basic "+btoa(e+":"+r))}let O=(0,s.default)(t.baseURL,t.url);function A(){if(!B)return;// Prepare the response
let n=(0,g.default).from("getAllResponseHeaders"in B&&B.getAllResponseHeaders()),o=E&&"text"!==E&&"json"!==E?B.response:B.responseText,a={data:o,status:B.status,statusText:B.statusText,headers:n,config:t,request:B};(0,i.default)(function(t){e(t),v()},function(t){r(t),v()},a),// Clean up request
B=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(B.open(t.method.toUpperCase(),(0,u.default)(O,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
B.timeout=t.timeout,"onloadend"in B?B.onloadend=A:B.onreadystatechange=function(){B&&4===B.readyState&&(0!==B.status||B.responseURL&&0===B.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(A)},// Handle browser request cancellation (as opposed to a manual cancellation)
B.onabort=function(){B&&(r(new c.default("Request aborted",c.default.ECONNABORTED,t,B)),// Clean up request
B=null)},// Handle low level network errors
B.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new c.default("Network Error",c.default.ERR_NETWORK,t,B)),// Clean up request
B=null},// Handle timeout
B.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||l.default;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new c.default(e,n.clarifyTimeoutError?c.default.ETIMEDOUT:c.default.ECONNABORTED,t,B)),// Clean up request
B=null},p.default.hasStandardBrowserEnv){// Add xsrf header
// regarding CVE-2023-45857 config.withCredentials condition was removed temporarily
let e=(0,f.default)(O)&&t.xsrfCookieName&&(0,a.default).read(t.xsrfCookieName);e&&w.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===b&&w.setContentType(null),"setRequestHeader"in B&&(0,n.default).forEach(w.toJSON(),function(t,e){B.setRequestHeader(e,t)}),(0,n.default).isUndefined(t.withCredentials)||(B.withCredentials=!!t.withCredentials),E&&"json"!==E&&(B.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&B.addEventListener("progress",m(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&B.upload&&B.upload.addEventListener("progress",m(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
o=e=>{B&&(r(!e||e.type?new d.default(null,t,B):e),B.abort(),B=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));let R=(0,h.default)(O);if(R&&-1===(0,p.default).protocols.indexOf(R)){r(new c.default("Unsupported protocol "+R+":",c.default.ERR_BAD_REQUEST,t));return}// Send the request
B.send(b||null)})}}),i("1TQad",function(e,r){t(e.exports,"default",function(){return i});var n=o("121rJ");function i(t,e,r){let o=r.config.validateStatus;!r.status||!o||o(r.status)?t(r):e(new n.default("Request failed with status code "+r.status,[n.default.ERR_BAD_REQUEST,n.default.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}}),i("kTwUV",function(e,r){t(e.exports,"default",function(){return i});var n=o("2bBga"),i=o("d5Oi9").default.hasStandardBrowserEnv?{write:function(t,e,r,o,i,a){let u=[];u.push(t+"="+encodeURIComponent(e)),(0,n.default).isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),(0,n.default).isString(o)&&u.push("path="+o),(0,n.default).isString(i)&&u.push("domain="+i),!0===a&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}),i("1ZTQa",function(e,r){t(e.exports,"default",function(){return a});var n=o("iUwU6"),i=o("91vFE");function a(t,e){return t&&!(0,n.default)(e)?(0,i.default)(t,e):e}}),i("iUwU6",function(e,r){t(e.exports,"default",function(){return n});function n(t){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}}),i("91vFE",function(e,r){t(e.exports,"default",function(){return n});function n(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}}),i("g3yOT",function(e,r){t(e.exports,"default",function(){return i});var n=o("2bBga"),i=o("d5Oi9").default.hasStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function o(t){let n=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=o(window.location.href),function(e){let r=(0,n.default).isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}}),i("8wMQb",function(e,r){t(e.exports,"default",function(){return n});function n(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}}),i("5OiBb",function(e,r){t(e.exports,"default",function(){return n});var n=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),o=Array(t),i=0,a=0;return e=void 0!==e?e:1e3,function(u){let s=Date.now(),f=o[a];r||(r=s),n[i]=u,o[i]=s;let l=a,c=0;for(;l!==i;)c+=n[l++],l%=t;if((i=(i+1)%t)===a&&(a=(a+1)%t),s-r<e)return;let d=f&&s-f;return d?Math.round(1e3*c/d):void 0}}}),i("d0EKm",function(e,r){t(e.exports,"default",function(){return u});var n=o("2bBga"),i=o("gbTL1");let a=t=>t instanceof i.default?t.toJSON():t;function u(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function o(t,e,r){return(0,n.default).isPlainObject(t)&&(0,n.default).isPlainObject(e)?(0,n.default).merge.call({caseless:r},t,e):(0,n.default).isPlainObject(e)?(0,n.default).merge({},e):(0,n.default).isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function i(t,e,r){return(0,n.default).isUndefined(e)?(0,n.default).isUndefined(t)?void 0:o(void 0,t,r):o(t,e,r)}// eslint-disable-next-line consistent-return
function u(t,e){if(!(0,n.default).isUndefined(e))return o(void 0,e)}// eslint-disable-next-line consistent-return
function s(t,e){return(0,n.default).isUndefined(e)?(0,n.default).isUndefined(t)?void 0:o(void 0,t):o(void 0,e)}// eslint-disable-next-line consistent-return
function f(r,n,i){return i in e?o(r,n):i in t?o(void 0,r):void 0}let l={url:u,method:u,data:u,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:f,headers:(t,e)=>i(a(t),a(e),!0)};return(0,n.default).forEach(Object.keys(Object.assign({},t,e)),function(o){let a=l[o]||i,u=a(t[o],e[o],o);(0,n.default).isUndefined(u)&&a!==f||(r[o]=u)}),r}}),i("6zj0X",function(e,r){t(e.exports,"default",function(){return s});var n=o("50GW0"),i=o("121rJ");let a={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{a[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});let u={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */a.transitional=function(t,e,r){function o(t,e){return"[Axios v"+n.VERSION+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,n,a)=>{if(!1===t)throw new i.default(o(n," has been removed"+(e?" in "+e:"")),i.default.ERR_DEPRECATED);return e&&!u[n]&&(u[n]=!0,// eslint-disable-next-line no-console
console.warn(o(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,n,a)}};var s={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new i.default("options must be an object",i.default.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),o=n.length;for(;o-- >0;){let a=n[o],u=e[a];if(u){let e=t[a],r=void 0===e||u(e,a,t);if(!0!==r)throw new i.default("option "+a+" must be "+r,i.default.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new i.default("Unknown option "+a,i.default.ERR_BAD_OPTION)}},validators:a}}),i("50GW0",function(e,r){t(e.exports,"VERSION",function(){return n});let n="1.6.1"}),i("2sjhC",function(e,r){t(e.exports,"default",function(){return a});var n=o("83xK9");/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class i{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,o,i){r.reason||(r.reason=new n.default(t,o,i),e(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new i(function(e){t=e});return{token:e,cancel:t}}}var a=i}),i("av9gA",function(e,r){t(e.exports,"default",function(){return n});function n(t){return function(e){return t.apply(null,e)}}}),i("gNhGc",function(e,r){t(e.exports,"default",function(){return i});var n=o("2bBga");function i(t){return(0,n.default).isObject(t)&&!0===t.isAxiosError}}),i("jd7iQ",function(e,r){t(e.exports,"default",function(){return o});let n={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(n).forEach(([t,e])=>{n[e]=t});var o=n}),i("jj8gv",function(e,r){t(e.exports,"renderBooks",function(){return i});var n=o("cRRkZ");function i(t,e="book",r=!1,n=!1,o={}){return!0===n?`
  <div class="${e}" data-id="${t.id}">
             <div class="${e}__img"><img src="${u(t.volumeInfo)}" alt="" width="200"></div>
              <div class="${e}__wrapper">
                <h3 class="${e}__name">${t.volumeInfo.title}</h3>
                <p class="${e}__author">${s(t.volumeInfo.authors)}</p>
                <p class="${e}__date">${f(t.volumeInfo.publishedDate)}</p>
                <p class="${e}__description">${a(t.volumeInfo.description)}</p>
                ${o.createBtn(e)}
              </div>
            </div>`:t.map(t=>{var n;return`<div class="${e}" data-id="${t.id}">
           <div class="${e}__container"><div class="${e}__img"><img src="${u(t.volumeInfo)}" alt="" width="100"></div>
              <div class="${e}__wrapper">
                <h3 class="${e}__name">${(n=t.volumeInfo.title)?n.length>40?`${n.slice(0,40)}...`:n:"Title in the registration process..."}</h3>
                <p class="${e}__author">${s(t.volumeInfo.authors)}</p>
                <p class="${e}__date">${f(t.volumeInfo.publishedDate)}</p>
              </div></div>
              ${r?` <p class="${e}__description">${a(t.volumeInfo.description)}</p>`:""}
              </div>`}).join("")}function a(t){return t?(t.includes("<p>")&&(t=(t=t.replaceAll("<p>","")).replaceAll("</p>","")),t.length>585?`${t.slice(0,585)}...`:t):""}function u({imageLinks:t}){return t&&t.thumbnail?t.thumbnail:n&&n.__esModule?n.default:n}function s(t){return t?t.join(", "):""}function f(t){return t||"in the process of writing..."}}),i("cRRkZ",function(t,e){t.exports=new URL("no-image-placeholder.b4c3556e.svg",import.meta.url).toString()}),i("15KYv",function(e,r){t(e.exports,"objBook",function(){return u});var n=o("jj8gv");let i="library",a=JSON.parse(localStorage.getItem(i))||[];class u{constructor(t){this.book=t,this.id=this.book.id,this.btns=null}createBtn(t){return(a=JSON.parse(localStorage.getItem(i))||[]).find(t=>t.id===this.id)?`<button type="button" class="${t}__btn" data-id="${this.id}">remove book from library</button>`:`<button type="button" class="${t}__btn" data-id="${this.id}">add book to library</button>`}addEvent(){this.btns=[...document.querySelectorAll(`button[data-id="${this.id}"]`)],this.btns[1===this.btns.length?0:1].addEventListener("click",t=>{if("add book to library"===t.currentTarget.textContent){a.push(this.book),localStorage.setItem(i,JSON.stringify(a)),this.btns.forEach(t=>{t.textContent="remove book from library"});let t=document.querySelector(".loc-library__list");null!==t&&(t.innerHTML="",t.innerHTML=(0,n.renderBooks)(a,"library",!1,!1))}else if("remove book from library"===t.currentTarget.textContent){a.splice(a.findIndex(t=>t.id===this.id),1),localStorage.setItem(i,JSON.stringify(a)),this.btns.forEach(t=>{t.textContent="add book to library"});let t=document.querySelector(".loc-library__list");null!==t&&(t.innerHTML="",t.innerHTML=(0,n.renderBooks)(a,"library",!1,!1))}})}}}),i("6mMsB",function(e,r){t(e.exports,"modalShow",function(){return f});var n=o("04Pik"),i=o("15KYv"),a=o("jj8gv");let u=document.querySelector(".backdrop"),s=document.querySelector(".backdrop__close");function f(t){if(t.target===t.currentTarget)return;let e=t.target.closest("DIV").parentNode.parentNode;u.classList.add("show"),l(),(0,n.fetchBook)(e.getAttribute("data-id")).then(t=>{let e=new i.objBook(t);u.firstElementChild.lastElementChild.innerHTML=(0,a.renderBooks)(t,"book",!0,!0,e),e.addEvent()})}function l(){u.classList.contains("show")?document.body.style.overflow="hidden":document.body.style.removeProperty("overflow")}u.addEventListener("click",function(t){t.target===t.currentTarget&&(t.target.firstElementChild.lastElementChild.innerHTML="",t.target.classList.remove("show"),l())}),s.addEventListener("click",function(){u.firstElementChild.lastElementChild.innerHTML="",u.classList.remove("show"),l()})});//# sourceMappingURL=library.70db5dc0.js.map

//# sourceMappingURL=library.70db5dc0.js.map
