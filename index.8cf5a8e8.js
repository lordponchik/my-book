!function(){function t(t){return t&&t.__esModule?t.default:t}var e,r,n,i,o,s,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function u(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var f={},l={},c=a.parcelRequire78ed;function h(t,e){return function(){return t.apply(e,arguments)}}null==c&&((c=function(t){if(t in f)return f[t].exports;if(t in l){var e=l[t];delete l[t];var r={id:t,exports:{}};return f[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){l[t]=e},a.parcelRequire78ed=c),c.register;// utils is a library of generic helper functions non-specific to axios
let{toString:p}=Object.prototype,{getPrototypeOf:d}=Object,g=(e=Object.create(null),t=>{let r=p.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}),y=t=>(t=t.toLowerCase(),e=>g(e)===t),m=t=>e=>typeof e===t,{isArray:b}=Array,w=m("undefined"),E=y("ArrayBuffer"),A=m("string"),v=m("function"),O=m("number"),R=t=>null!==t&&"object"==typeof t,B=t=>{if("object"!==g(t))return!1;let e=d(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},S=y("Date"),T=y("File"),U=y("Blob"),_=y("FileList"),C=y("URLSearchParams");/**
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
 */function L(t,e,{allOwnKeys:r=!1}={}){let n,i;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),b(t))for(n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else{let i;// Iterate over object keys
let o=r?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;for(n=0;n<s;n++)i=o[n],e.call(null,t[i],i,t)}}}function I(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),i=n.length;for(;i-- >0;)if(e===(r=n[i]).toLowerCase())return r;return null}let x=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:a,N=t=>!w(t)&&t!==x,j=(r="undefined"!=typeof Uint8Array&&d(Uint8Array),t=>r&&t instanceof r),P=y("HTMLFormElement"),k=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),F=y("RegExp"),D=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};L(r,(r,i)=>{let o;!1!==(o=e(r,i,t))&&(n[i]=o||r)}),Object.defineProperties(t,n)},M="abcdefghijklmnopqrstuvwxyz",$="0123456789",q={DIGIT:$,ALPHA:M,ALPHA_DIGIT:M+M.toUpperCase()+$},z=y("AsyncFunction");var H={isArray:b,isArrayBuffer:E,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!w(t)&&null!==t.constructor&&!w(t.constructor)&&v(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||v(t.append)&&("formdata"===(e=g(t))||// detect form-data instance
"object"===e&&v(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&E(t.buffer)},isString:A,isNumber:O,isBoolean:t=>!0===t||!1===t,isObject:R,isPlainObject:B,isUndefined:w,isDate:S,isFile:T,isBlob:U,isRegExp:F,isFunction:v,isStream:t=>R(t)&&v(t.pipe),isURLSearchParams:C,isTypedArray:j,isFileList:_,forEach:L,merge:/**
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
 */function t(){let{caseless:e}=N(this)&&this||{},r={},n=(n,i)=>{let o=e&&I(r,i)||i;B(r[o])&&B(n)?r[o]=t(r[o],n):B(n)?r[o]=t({},n):b(n)?r[o]=n.slice():r[o]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&L(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(L(e,(e,n)=>{r&&v(e)?t[n]=h(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let i,o,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(o=(i=Object.getOwnPropertyNames(t)).length;o-- >0;)s=i[o],(!n||n(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=!1!==r&&d(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:g,kindOfTest:y,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(b(t))return t;let e=t.length;if(!O(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],i=n.call(t);for(;(r=i.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:P,hasOwnProperty:k,hasOwnProp:k,reduceDescriptors:D,freezeMethods:t=>{D(t,(e,r)=>{// skip restricted props in strict mode
if(v(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(v(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(b(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:I,global:x,isContextDefined:N,ALPHABET:q,generateString:(t=16,e=q.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&v(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(R(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let i=b(t)?[]:{};return L(t,(t,e)=>{let o=r(t,n+1);w(o)||(i[e]=o)}),e[n]=void 0,i}}return t};return r(t,0)},isAsyncFn:z,isThenable:t=>t&&(R(t)||v(t))&&v(t.then)&&v(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function J(t,e,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}H.inherits(J,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:H.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let V=J.prototype,W={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{W[t]={value:t}}),Object.defineProperties(J,W),Object.defineProperty(V,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
J.from=(t,e,r,n,i,o)=>{let s=Object.create(V);return H.toFlatObject(t,s,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),J.call(s,t.message,e,r,n,i),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s},i=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,i=[],o=0,s=r-n;o<s;o+=16383// must be multiple of 3
)i.push(function(t,e,r){for(var n,i=[],o=e;o<r;o+=3)i.push(G[(n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]))>>18&63]+G[n>>12&63]+G[n>>6&63]+G[63&n]);return i.join("")}(t,o,o+16383>s?s:o+16383));return 1===n?i.push(G[(e=t[r-1])>>2]+G[e<<4&63]+"=="):2===n&&i.push(G[(e=(t[r-2]<<8)+t[r-1])>>10]+G[e>>4&63]+G[e<<2&63]+"="),i.join("")};for(var G=[],K=[],Y="undefined"!=typeof Uint8Array?Uint8Array:Array,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Q=0,Z=X.length;Q<Z;++Q)G[Q]=X[Q],K[X.charCodeAt(Q)]=Q;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
K["-".charCodeAt(0)]=62,K["_".charCodeAt(0)]=63,o=function(t,e,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,f=u>>1,l=-7,c=r?i-1:0,h=r?-1:1,p=t[e+c];for(c+=h,o=p&(1<<-l)-1,p>>=-l,l+=a;l>0;o=256*o+t[e+c],c+=h,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=n;l>0;s=256*s+t[e+c],c+=h,l-=8);if(0===o)o=1-f;else{if(o===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),o-=f}return(p?-1:1)*s*Math.pow(2,o-n)},s=function(t,e,r,n,i,o){var s,a,u,f=8*o-i-1,l=(1<<f)-1,c=l>>1,h=23===i?5960464477539062e-23:0,p=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+c>=1?e+=h/u:e+=h*Math.pow(2,1-c),e*u>=2&&(s++,u/=2),s+c>=l?(a=0,s=l):s+c>=1?(a=(e*u-1)*Math.pow(2,i),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,f+=i;f>0;t[r+p]=255&s,p+=d,s/=256,f-=8);t[r+p-d]|=128*g};let tt="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function te(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,tr.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function tr(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return to(t)}return tn(t,e,r)}function tn(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!tr.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|tf(t,e),n=te(r),i=n.write(t,e);return i!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,i)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(tI(t,Uint8Array)){let e=new Uint8Array(t);return ta(e.buffer,e.byteOffset,e.byteLength)}return ts(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(tI(t,ArrayBuffer)||t&&tI(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tI(t,SharedArrayBuffer)||t&&tI(t.buffer,SharedArrayBuffer)))return ta(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return tr.from(n,e,r);let i=function(t){var e;if(tr.isBuffer(t)){let e=0|tu(t.length),r=te(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?te(0):ts(t):"Buffer"===t.type&&Array.isArray(t.data)?ts(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return tr.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function ti(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function to(t){return ti(t),te(t<0?0:0|tu(t))}function ts(t){let e=t.length<0?0:0|tu(t.length),r=te(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function ta(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),tr.prototype),n)}function tu(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function tf(t,e){if(tr.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||tI(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return t_(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tC(t).length;default:if(i)return n?-1:t_(t).length// assume utf8
;e=(""+e).toLowerCase(),i=!0}}function tl(t,e,r){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=tx[t[n]];return i}(this,e,r);case"utf8":case"utf-8":return td(this,e,r);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}(this,e,r);case"base64":var o,s;return o=e,s=r,0===o&&s===this.length?i(this):i(this.slice(o,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),i="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}(this,e,r);default:if(n)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function tc(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function th(t,e,r,n,i){var o;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r// Coerce to Number.
)!=o&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return -1;r=t.length-1}else if(r<0){if(!i)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=tr.from(e,n)),tr.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:tp(t,e,r,n,i));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):tp(t,[e],r,n,i);throw TypeError("val must be string, number or Buffer")}function tp(t,e,r,n,i){let o,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,a/=2,u/=2,r/=2}function f(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){let n=-1;for(o=r;o<a;o++)if(f(t,o)===f(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*s}else -1!==n&&(o-=o-n),n=-1}else for(r+u>a&&(r=a-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(f(t,o+n)!==f(e,n)){r=!1;break}if(r)return o}return -1}function td(t,e,r){r=Math.min(t.length,r);let n=[],i=e;for(;i<r;){let e=t[i],o=null,s=e>239?4:e>223?3:e>191?2:1;if(i+s<=r){let r,n,a,u;switch(s){case 1:e<128&&(o=e);break;case 2:(192&(r=t[i+1]))==128&&(u=(31&e)<<6|63&r)>127&&(o=u);break;case 3:r=t[i+1],n=t[i+2],(192&r)==128&&(192&n)==128&&(u=(15&e)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(o=u);break;case 4:r=t[i+1],n=t[i+2],a=t[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&u<1114112&&(o=u)}}null===o?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
o=65533,s=1):o>65535&&(// encode to utf16 (surrogate pair dance)
o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tg(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function ty(t,e,r,n,i,o){if(!tr.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function tm(t,e,r,n,i){tB(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function tb(t,e,r,n,i){tB(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function tw(t,e,r,n,i,o){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function tE(t,e,r,n,i){return e=+e,r>>>=0,i||tw(t,e,r,4,34028234663852886e22,-34028234663852886e22),s(t,e,r,n,23,4),r+4}function tA(t,e,r,n,i){return e=+e,r>>>=0,i||tw(t,e,r,8,17976931348623157e292,-17976931348623157e292),s(t,e,r,n,52,8),r+8}/**
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
 */tr.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),tr.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(tr.prototype,"parent",{enumerable:!0,get:function(){if(tr.isBuffer(this))return this.buffer}}),Object.defineProperty(tr.prototype,"offset",{enumerable:!0,get:function(){if(tr.isBuffer(this))return this.byteOffset}}),tr.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/tr.from=function(t,e,r){return tn(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(tr.prototype,Uint8Array.prototype),Object.setPrototypeOf(tr,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/tr.alloc=function(t,e,r){return(ti(t),t<=0)?te(t):void 0!==e?"string"==typeof r?te(t).fill(e,r):te(t).fill(e):te(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */tr.allocUnsafe=function(t){return to(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */tr.allocUnsafeSlow=function(t){return to(t)},tr.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==tr.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},tr.compare=function(t,e){if(tI(t,Uint8Array)&&(t=tr.from(t,t.offset,t.byteLength)),tI(e,Uint8Array)&&(e=tr.from(e,e.offset,e.byteLength)),!tr.isBuffer(t)||!tr.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},tr.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},tr.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return tr.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=tr.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){let e=t[r];if(tI(e,Uint8Array))i+e.length>n.length?(tr.isBuffer(e)||(e=tr.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else if(tr.isBuffer(e))e.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=e.length}return n},tr.byteLength=tf,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
tr.prototype._isBuffer=!0,tr.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)tc(this,e,e+1);return this},tr.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)tc(this,e,e+3),tc(this,e+1,e+2);return this},tr.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)tc(this,e,e+7),tc(this,e+1,e+6),tc(this,e+2,e+5),tc(this,e+3,e+4);return this},tr.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?td(this,0,t):tl.apply(this,arguments)},tr.prototype.toLocaleString=tr.prototype.toString,tr.prototype.equals=function(t){if(!tr.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===tr.compare(this,t)},tr.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},tt&&(tr.prototype[tt]=tr.prototype.inspect),tr.prototype.compare=function(t,e,r,n,i){if(tI(t,Uint8Array)&&(t=tr.from(t,t.offset,t.byteLength)),!tr.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;let o=i-n,s=r-e,a=Math.min(o,s),u=this.slice(n,i),f=t.slice(e,r);for(let t=0;t<a;++t)if(u[t]!==f[t]){o=u[t],s=f[t];break}return o<s?-1:s<o?1:0},tr.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},tr.prototype.indexOf=function(t,e,r){return th(this,t,e,r,!0)},tr.prototype.lastIndexOf=function(t,e,r){return th(this,t,e,r,!1)},tr.prototype.write=function(t,e,r,n){var i,o,s,a,u,f,l,c;// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-e;if((void 0===r||r>h)&&(r=h),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let i;r=Number(r)||0;let o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;let s=e.length;for(n>s/2&&(n=s/2),i=0;i<n;++i){let n=parseInt(e.substr(2*i,2),16);if(n!=n)break;t[r+i]=n}return i}(this,t,e,r);case"utf8":case"utf-8":return i=e,o=r,tL(t_(t,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return s=e,a=r,tL(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=e,f=r,tL(tC(t),this,u,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return l=e,c=r,tL(function(t,e){let r,n;let i=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=(r=t.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(t,this.length-l),this,l,c);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},tr.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},tr.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,tr.prototype),n)},tr.prototype.readUintLE=tr.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tg(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},tr.prototype.readUintBE=tr.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tg(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},tr.prototype.readUint8=tr.prototype.readUInt8=function(t,e){return t>>>=0,e||tg(t,1,this.length),this[t]},tr.prototype.readUint16LE=tr.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tg(t,2,this.length),this[t]|this[t+1]<<8},tr.prototype.readUint16BE=tr.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tg(t,2,this.length),this[t]<<8|this[t+1]},tr.prototype.readUint32LE=tr.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tg(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},tr.prototype.readUint32BE=tr.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tg(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},tr.prototype.readBigUInt64LE=tN(function(t){tS(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tT(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],i=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),tr.prototype.readBigUInt64BE=tN(function(t){tS(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tT(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],i=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),tr.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tg(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},tr.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tg(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},tr.prototype.readInt8=function(t,e){return(t>>>=0,e||tg(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},tr.prototype.readInt16LE=function(t,e){t>>>=0,e||tg(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},tr.prototype.readInt16BE=function(t,e){t>>>=0,e||tg(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},tr.prototype.readInt32LE=function(t,e){return t>>>=0,e||tg(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},tr.prototype.readInt32BE=function(t,e){return t>>>=0,e||tg(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},tr.prototype.readBigInt64LE=tN(function(t){tS(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tT(t,this.length-8);let n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),tr.prototype.readBigInt64BE=tN(function(t){tS(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tT(t,this.length-8);let n=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),tr.prototype.readFloatLE=function(t,e){return t>>>=0,e||tg(t,4,this.length),o(this,t,!0,23,4)},tr.prototype.readFloatBE=function(t,e){return t>>>=0,e||tg(t,4,this.length),o(this,t,!1,23,4)},tr.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tg(t,8,this.length),o(this,t,!0,52,8)},tr.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tg(t,8,this.length),o(this,t,!1,52,8)},tr.prototype.writeUintLE=tr.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;ty(this,t,e,r,n,0)}let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},tr.prototype.writeUintBE=tr.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;ty(this,t,e,r,n,0)}let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},tr.prototype.writeUint8=tr.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||ty(this,t,e,1,255,0),this[e]=255&t,e+1},tr.prototype.writeUint16LE=tr.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||ty(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},tr.prototype.writeUint16BE=tr.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||ty(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},tr.prototype.writeUint32LE=tr.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||ty(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},tr.prototype.writeUint32BE=tr.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||ty(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tr.prototype.writeBigUInt64LE=tN(function(t,e=0){return tm(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),tr.prototype.writeBigUInt64BE=tN(function(t,e=0){return tb(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),tr.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);ty(this,t,e,r,n-1,-n)}let i=0,o=1,s=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+r},tr.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);ty(this,t,e,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+r},tr.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||ty(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},tr.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||ty(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},tr.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||ty(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},tr.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||ty(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},tr.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||ty(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tr.prototype.writeBigInt64LE=tN(function(t,e=0){return tm(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tr.prototype.writeBigInt64BE=tN(function(t,e=0){return tb(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tr.prototype.writeFloatLE=function(t,e,r){return tE(this,t,e,!0,r)},tr.prototype.writeFloatBE=function(t,e,r){return tE(this,t,e,!1,r)},tr.prototype.writeDoubleLE=function(t,e,r){return tA(this,t,e,!0,r)},tr.prototype.writeDoubleBE=function(t,e,r){return tA(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
tr.prototype.copy=function(t,e,r,n){if(!tr.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
tr.prototype.fill=function(t,e,r,n){let i;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!tr.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{let o=tr.isBuffer(t)?t:tr.from(t,n),s=o.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let tv={};function tO(t,e,r){tv[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function tR(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function tB(t,e,r,n,i,o){if(t>r||t<e){let n;let i="bigint"==typeof e?"n":"";throw n=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${e}${i} and <= ${r}${i}`,new tv.ERR_OUT_OF_RANGE("value",n,t)}tS(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&tT(i,n.length-(o+1))}function tS(t,e){if("number"!=typeof t)throw new tv.ERR_INVALID_ARG_TYPE(e,"number",t)}function tT(t,e,r){if(Math.floor(t)!==t)throw tS(t,r),new tv.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new tv.ERR_BUFFER_OUT_OF_BOUNDS;throw new tv.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}tO("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tO("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),tO("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=tR(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=tR(i)),i+="n"),n+=` It must be ${e}. Received ${i}`},RangeError);// HELPER FUNCTIONS
// ================
let tU=/[^+/0-9A-Za-z-_]/g;function t_(t,e){let r;e=e||1/0;let n=t.length,i=null,o=[];for(let s=0;s<n;++s){// is surrogate component
if((r=t.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!i){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(e-=3)>-1&&o.push(239,191,189);continue}// valid lead
i=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}// valid surrogate pair
r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);// encode utf8
if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function tC(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),i=n[0],o=n[1],s=new Y((i+o)*3/4-o),a=0,u=o>0?i-4:i;for(r=0;r<u;r+=4)e=K[t.charCodeAt(r)]<<18|K[t.charCodeAt(r+1)]<<12|K[t.charCodeAt(r+2)]<<6|K[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return 2===o&&(e=K[t.charCodeAt(r)]<<2|K[t.charCodeAt(r+1)]>>4,s[a++]=255&e),1===o&&(e=K[t.charCodeAt(r)]<<10|K[t.charCodeAt(r+1)]<<4|K[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tU,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tL(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length)&&!(i>=t.length);++i)e[i+r]=t[i];return i}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function tI(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let tx=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();// Return not function with Error if BigInt not supported
function tN(t){return"undefined"==typeof BigInt?tj:t}function tj(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tP(t){return H.isPlainObject(t)||H.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tk(t){return H.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tF(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tk(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}let tD=H.toFlatObject(H,{},null,function(t){return/^is[A-Z]/.test(t)});var tM=/**
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
 */function(t,e,r){if(!H.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
r=H.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!H.isUndefined(e[t])});let n=r.metaTokens,i=r.visitor||l,o=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&H.isSpecCompliantForm(e);if(!H.isFunction(i))throw TypeError("visitor must be a function");function f(t){if(null===t)return"";if(H.isDate(t))return t.toISOString();if(!u&&H.isBlob(t))throw new J("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(t)||H.isTypedArray(t)?u&&"function"==typeof Blob?new Blob([t]):tr.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function l(t,r,i){let a=t;if(t&&!i&&"object"==typeof t){if(H.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var u;if(H.isArray(t)&&(u=t,H.isArray(u)&&!u.some(tP))||(H.isFileList(t)||H.endsWith(r,"[]"))&&(a=H.toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=tk(r),a.forEach(function(t,n){H.isUndefined(t)||null===t||e.append(!0===s?tF([r],n,o):null===s?r:r+"[]",f(t))}),!1)}}return!!tP(t)||(e.append(tF(i,r,o),f(t)),!1)}let c=[],h=Object.assign(tD,{defaultVisitor:l,convertValue:f,isVisitable:tP});if(!H.isObject(t))throw TypeError("data must be an object");return!function t(r,n){if(!H.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),H.forEach(r,function(r,o){let s=!(H.isUndefined(r)||null===r)&&i.call(e,r,H.isString(o)?o.trim():o,n,h);!0===s&&t(r,n?n.concat(o):[o])}),c.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function t$(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tq(t,e){this._pairs=[],t&&tM(t,this,e)}let tz=tq.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tH(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tJ(t,e,r){let n;/*eslint no-param-reassign:0*/if(!e)return t;let i=r&&r.encode||tH,o=r&&r.serialize;if(n=o?o(e,r):H.isURLSearchParams(e)?e.toString():new tq(e,r).toString(i)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t}tz.append=function(t,e){this._pairs.push([t,e])},tz.toString=function(t){let e=t?function(e){return t.call(this,e,t$)}:t$;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tV=class{constructor(){this.handlers=[]}/**
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
   */forEach(t){H.forEach(this.handlers,function(e){null!==e&&t(e)})}},tW={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tG="undefined"!=typeof URLSearchParams?URLSearchParams:tq,tK="undefined"!=typeof FormData?FormData:null,tY="undefined"!=typeof Blob?Blob:null,tX={};u(tX,"hasBrowserEnv",function(){return tQ}),u(tX,"hasStandardBrowserEnv",function(){return tZ}),u(tX,"hasStandardBrowserWebWorkerEnv",function(){return t0});let tQ="undefined"!=typeof window&&"undefined"!=typeof document,tZ=(n="undefined"!=typeof navigator&&navigator.product,tQ&&0>["ReactNative","NativeScript","NS"].indexOf(n)),t0="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var t1={...tX,isBrowser:!0,classes:{URLSearchParams:tG,FormData:tK,Blob:tY},protocols:["http","https","file","blob","url","data"]},t2=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(H.isFormData(t)&&H.isFunction(t.entries)){let e={};return H.forEachEntry(t,(t,r)=>{!function t(e,r,n,i){let o=e[i++],s=Number.isFinite(+o),a=i>=e.length;if(o=!o&&H.isArray(n)?n.length:o,a)return H.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!s;n[o]&&H.isObject(n[o])||(n[o]=[]);let u=t(e,r,n[o],i);return u&&H.isArray(n[o])&&(n[o]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},i=Object.keys(t),o=i.length;for(e=0;e<o;e++)n[r=i[e]]=t[r];return n}(n[o])),!s}(H.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null};let t6={transitional:tW,adapter:["xhr","http"],transformRequest:[function(t,e){let r;let n=e.getContentType()||"",i=n.indexOf("application/json")>-1,o=H.isObject(t);o&&H.isHTMLForm(t)&&(t=new FormData(t));let s=H.isFormData(t);if(s)return i&&i?JSON.stringify(t2(t)):t;if(H.isArrayBuffer(t)||H.isBuffer(t)||H.isStream(t)||H.isFile(t)||H.isBlob(t))return t;if(H.isArrayBufferView(t))return t.buffer;if(H.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=t,u=this.formSerializer,tM(a,new t1.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return t1.isNode&&H.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=H.isFileList(t))||n.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tM(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return o||i?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if(H.isString(t))try{return(0,JSON.parse)(t),H.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||t6.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&H.isString(t)&&(r&&!this.responseType||n)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&n){if("SyntaxError"===t.name)throw J.from(t,J.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t1.classes.FormData,Blob:t1.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],t=>{t6.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
let t5=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */t8=t=>{let e,r,n;let i={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||i[e]&&t5[e]||("set-cookie"===e?i[e]?i[e].push(r):i[e]=[r]:i[e]=i[e]?i[e]+", "+r:r)}),i};let t4=Symbol("internals");function t3(t){return t&&String(t).trim().toLowerCase()}function t7(t){return!1===t||null==t?t:H.isArray(t)?t.map(t7):String(t)}let t9=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function et(t,e,r,n,i){if(H.isFunction(n))return n.call(this,e,r);if(i&&(e=r),H.isString(e)){if(H.isString(n))return -1!==e.indexOf(n);if(H.isRegExp(n))return n.test(e)}}class ee{constructor(t){t&&this.set(t)}set(t,e,r){let n=this;function i(t,e,r){let i=t3(e);if(!i)throw Error("header name must be a non-empty string");let o=H.findKey(n,i);o&&void 0!==n[o]&&!0!==r&&(void 0!==r||!1===n[o])||(n[o||e]=t7(t))}let o=(t,e)=>H.forEach(t,(t,r)=>i(t,r,e));return H.isPlainObject(t)||t instanceof this.constructor?o(t,e):H.isString(t)&&(t=t.trim())&&!t9(t)?o(t8(t),e):null!=t&&i(e,t,r),this}get(t,e){if(t=t3(t)){let r=H.findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if(H.isFunction(e))return e.call(this,t,r);if(H.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=t3(t)){let r=H.findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||et(this,this[r],r,e)))}return!1}delete(t,e){let r=this,n=!1;function i(t){if(t=t3(t)){let i=H.findKey(r,t);i&&(!e||et(r,r[i],i,e))&&(delete r[i],n=!0)}}return H.isArray(t)?t.forEach(i):i(t),n}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let i=e[r];(!t||et(this,this[i],i,t,!0))&&(delete this[i],n=!0)}return n}normalize(t){let e=this,r={};return H.forEach(this,(n,i)=>{let o=H.findKey(r,i);if(o){e[o]=t7(n),delete e[i];return}let s=t?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(i).trim();s!==i&&delete e[i],e[s]=t7(n),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return H.forEach(this,(r,n)=>{null!=r&&!1!==r&&(e[n]=t&&H.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[t4]=this[t4]={accessors:{}},r=e.accessors,n=this.prototype;function i(t){let e=t3(t);r[e]||(!function(t,e){let r=H.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,i){return this[n].call(this,e,t,r,i)},configurable:!0})})}(n,t),r[e]=!0)}return H.isArray(t)?t.forEach(i):i(t),this}}function er(t,e){let r=this||t6,n=e||r,i=ee.from(n.headers),o=n.data;return H.forEach(t,function(t){o=t.call(r,o,i.normalize(),e?e.status:void 0)}),i.normalize(),o}function en(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function ei(t,e,r){J.call(this,null==t?"canceled":t,J.ERR_CANCELED,e,r),this.name="CanceledError"}ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),H.reduceDescriptors(ee.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),H.freezeMethods(ee),H.inherits(ei,J,{__CANCEL__:!0});var eo=t1.hasStandardBrowserEnv?{write:function(t,e,r,n,i,o){let s=[];s.push(t+"="+encodeURIComponent(e)),H.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),H.isString(n)&&s.push("path="+n),H.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function es(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var ea=t1.hasStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let t;let e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(t){let n=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=n(window.location.href),function(e){let r=H.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},eu=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),i=Array(t),o=0,s=0;return e=void 0!==e?e:1e3,function(a){let u=Date.now(),f=i[s];r||(r=u),n[o]=a,i[o]=u;let l=s,c=0;for(;l!==o;)c+=n[l++],l%=t;if((o=(o+1)%t)===s&&(s=(s+1)%t),u-r<e)return;let h=f&&u-f;return h?Math.round(1e3*c/h):void 0}};function ef(t,e){let r=0,n=eu(50,250);return i=>{let o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-r,u=n(a);r=o;let f={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&o<=s?(s-o)/u:void 0,event:i};f[e?"download":"upload"]=!0,t(f)}}let el="undefined"!=typeof XMLHttpRequest;var ec=el&&function(t){return new Promise(function(e,r){let n,i,o=t.data,s=ee.from(t.headers).normalize(),a=t.responseType;function u(){t.cancelToken&&t.cancelToken.unsubscribe(n),t.signal&&t.signal.removeEventListener("abort",n)}if(H.isFormData(o)){if(t1.hasStandardBrowserEnv||t1.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);// Let the browser set it
else if(!1!==(i=s.getContentType())){// fix semicolon duplication issue for ReactNative FormData implementation
let[t,...e]=i?i.split(";").map(t=>t.trim()).filter(Boolean):[];s.setContentType([t||"multipart/form-data",...e].join("; "))}}let f=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(e+":"+r))}let l=es(t.baseURL,t.url);function c(){if(!f)return;// Prepare the response
let n=ee.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),i=a&&"text"!==a&&"json"!==a?f.response:f.responseText,o={data:i,status:f.status,statusText:f.statusText,headers:n,config:t,request:f};!function(t,e,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new J("Request failed with status code "+r.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(t){e(t),u()},function(t){r(t),u()},o),// Clean up request
f=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(f.open(t.method.toUpperCase(),tJ(l,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
f.timeout=t.timeout,"onloadend"in f?f.onloadend=c:f.onreadystatechange=function(){f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(c)},// Handle browser request cancellation (as opposed to a manual cancellation)
f.onabort=function(){f&&(r(new J("Request aborted",J.ECONNABORTED,t,f)),// Clean up request
f=null)},// Handle low level network errors
f.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new J("Network Error",J.ERR_NETWORK,t,f)),// Clean up request
f=null},// Handle timeout
f.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||tW;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new J(e,n.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,t,f)),// Clean up request
f=null},t1.hasStandardBrowserEnv){// Add xsrf header
// regarding CVE-2023-45857 config.withCredentials condition was removed temporarily
let e=ea(l)&&t.xsrfCookieName&&eo.read(t.xsrfCookieName);e&&s.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===o&&s.setContentType(null),"setRequestHeader"in f&&H.forEach(s.toJSON(),function(t,e){f.setRequestHeader(e,t)}),H.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),a&&"json"!==a&&(f.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&f.addEventListener("progress",ef(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",ef(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=e=>{f&&(r(!e||e.type?new ei(null,t,f):e),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(n),t.signal&&(t.signal.aborted?n():t.signal.addEventListener("abort",n)));let h=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(l);if(h&&-1===t1.protocols.indexOf(h)){r(new J("Unsupported protocol "+h+":",J.ERR_BAD_REQUEST,t));return}// Send the request
f.send(o||null)})};let eh={http:null,xhr:ec};H.forEach(eh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});let ep=t=>`- ${t}`,ed=t=>H.isFunction(t)||null===t||!1===t;var eg={getAdapter:t=>{let e,r;t=H.isArray(t)?t:[t];let{length:n}=t,i={};for(let o=0;o<n;o++){let n;if(r=e=t[o],!ed(e)&&void 0===(r=eh[(n=String(e)).toLowerCase()]))throw new J(`Unknown adapter '${n}'`);if(r)break;i[n||"#"+o]=r}if(!r){let t=Object.entries(i).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build"));throw new J("There is no suitable adapter to dispatch the request "+(n?t.length>1?"since :\n"+t.map(ep).join("\n"):" "+ep(t[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:eh};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function ey(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ei(null,t)}function em(t){ey(t),t.headers=ee.from(t.headers),// Transform request data
t.data=er.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=eg.getAdapter(t.adapter||t6.adapter);return e(t).then(function(e){return ey(t),// Transform response data
e.data=er.call(t,t.transformResponse,e),e.headers=ee.from(e.headers),e},function(e){return!en(e)&&(ey(t),e&&e.response&&(e.response.data=er.call(t,t.transformResponse,e.response),e.response.headers=ee.from(e.response.headers))),Promise.reject(e)})}let eb=t=>t instanceof ee?t.toJSON():t;function ew(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function n(t,e,r){return H.isPlainObject(t)&&H.isPlainObject(e)?H.merge.call({caseless:r},t,e):H.isPlainObject(e)?H.merge({},e):H.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function i(t,e,r){return H.isUndefined(e)?H.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}// eslint-disable-next-line consistent-return
function o(t,e){if(!H.isUndefined(e))return n(void 0,e)}// eslint-disable-next-line consistent-return
function s(t,e){return H.isUndefined(e)?H.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}// eslint-disable-next-line consistent-return
function a(r,i,o){return o in e?n(r,i):o in t?n(void 0,r):void 0}let u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>i(eb(t),eb(e),!0)};return H.forEach(Object.keys(Object.assign({},t,e)),function(n){let o=u[n]||i,s=o(t[n],e[n],n);H.isUndefined(s)&&o!==a||(r[n]=s)}),r}let eE="1.6.1",eA={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{eA[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});let ev={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */eA.transitional=function(t,e,r){function n(t,e){return"[Axios v"+eE+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,i,o)=>{if(!1===t)throw new J(n(i," has been removed"+(e?" in "+e:"")),J.ERR_DEPRECATED);return e&&!ev[i]&&(ev[i]=!0,// eslint-disable-next-line no-console
console.warn(n(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,i,o)}};var eO={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),i=n.length;for(;i-- >0;){let o=n[i],s=e[o];if(s){let e=t[o],r=void 0===e||s(e,o,t);if(!0!==r)throw new J("option "+o+" must be "+r,J.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new J("Unknown option "+o,J.ERR_BAD_OPTION)}},validators:eA};let eR=eO.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class eB{constructor(t){this.defaults=t,this.interceptors={request:new tV,response:new tV}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,n;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=ew(this.defaults,e);let{transitional:i,paramsSerializer:o,headers:s}=e;void 0!==i&&eO.assertOptions(i,{silentJSONParsing:eR.transitional(eR.boolean),forcedJSONParsing:eR.transitional(eR.boolean),clarifyTimeoutError:eR.transitional(eR.boolean)},!1),null!=o&&(H.isFunction(o)?e.paramsSerializer={serialize:o}:eO.assertOptions(o,{encode:eR.function,serialize:eR.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&H.merge(s.common,s[e.method]);s&&H.forEach(["delete","get","head","post","put","patch","common"],t=>{delete s[t]}),e.headers=ee.concat(a,s);// filter out skipped interceptors
let u=[],f=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(f=f&&t.synchronous,u.unshift(t.fulfilled,t.rejected))});let l=[];this.interceptors.response.forEach(function(t){l.push(t.fulfilled,t.rejected)});let c=0;if(!f){let t=[em.bind(this),void 0];for(t.unshift.apply(t,u),t.push.apply(t,l),n=t.length,r=Promise.resolve(e);c<n;)r=r.then(t[c++],t[c++]);return r}n=u.length;let h=e;for(c=0;c<n;){let t=u[c++],e=u[c++];try{h=t(h)}catch(t){e.call(this,t);break}}try{r=em.call(this,h)}catch(t){return Promise.reject(t)}for(c=0,n=l.length;c<n;)r=r.then(l[c++],l[c++]);return r}getUri(t){t=ew(this.defaults,t);let e=es(t.baseURL,t.url);return tJ(e,t.params,t.paramsSerializer)}}H.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/eB.prototype[t]=function(e,r){return this.request(ew(r||{},{method:t,url:e,data:(r||{}).data}))}}),H.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,i){return this.request(ew(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}eB.prototype[t]=e(),eB.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class eS{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,n,i){r.reason||(r.reason=new ei(t,n,i),e(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new eS(function(e){t=e});return{token:e,cancel:t}}}let eT={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eT).forEach(([t,e])=>{eT[e]=t});// Create the default instance to be exported
let eU=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let r=new eB(e),n=h(eB.prototype.request,r);return H.extend(n,eB.prototype,r,{allOwnKeys:!0}),H.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return t(ew(e,r))},n}(t6);// Expose Axios class to allow class inheritance
eU.Axios=eB,// Expose Cancel & CancelToken
eU.CanceledError=ei,eU.CancelToken=eS,eU.isCancel=en,eU.VERSION=eE,eU.toFormData=tM,// Expose AxiosError class
eU.AxiosError=J,// alias for CanceledError for backward compatibility
eU.Cancel=eU.CanceledError,// Expose all/spread
eU.all=function(t){return Promise.all(t)},eU.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eU.isAxiosError=function(t){return H.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eU.mergeConfig=ew,eU.AxiosHeaders=ee,eU.formToJSON=t=>t2(H.isHTMLForm(t)?new FormData(t):t),eU.getAdapter=eg.getAdapter,eU.HttpStatusCode=eT,eU.default=eU;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
let{Axios:e_,AxiosError:eC,CanceledError:eL,isCancel:eI,CancelToken:ex,VERSION:eN,all:ej,Cancel:eP,isAxiosError:ek,spread:eF,toFormData:eD,AxiosHeaders:eM,HttpStatusCode:e$,formToJSON:eq,getAdapter:ez,mergeConfig:eH}=eU;async function eJ(t){let e=`volumes?q=intitle:${t}&printType=books&startIndex=${Math.floor(11*Math.random())}&maxResults=6`,r=await eU.get(e),n=await r.data,i=await n.items;return i}async function eV(t){let e=`volumes/${t}`,r=await eU.get(e),n=await r.data;return n}eU.defaults.baseURL="https://www.googleapis.com/books/v1/";var eW={};eW=c("aNJCr").getBundleURL("EVgbq")+"no-image-placeholder.b4c3556e.svg";let eG=document.querySelector(".potter"),eK=document.querySelector(".icefire"),eY=document.querySelector(".witcher"),eX=document.querySelector(".dark-tower");function eQ(e){return e.map(e=>{var r,n,i;return`<li class="book-series__item" data-id="${e.id}">
             <div class="book-series__img"><img src="${function({imageLinks:e}){return e&&e.thumbnail?e.thumbnail:/*@__PURE__*/t(eW)}(e.volumeInfo)}" alt="" width="150"></div>
              <div class="book-series__wrapper">
                <h3 class="book-series__name">${(r=e.volumeInfo.title)?r.length>45?`${r.slice(0,45)}...`:r:"Title in the registration process..."}</h3>
                <p class="book-series__author">${(n=e.volumeInfo.authors)?n.join(", "):""}</p>
                <p class="book-series__date">${(i=e.volumeInfo.publishedDate)?i:"in the process of writing..."}</p>
              </div>
            </li>`}).join("")}eJ("harry+potter").then(t=>{eG.innerHTML=eQ(t)}),eJ("a+song+of+ice+and+fire").then(t=>{eK.innerHTML=eQ(t)}),eJ("the+witcher").then(t=>{eY.innerHTML=eQ(t)}),eJ("the+dark+tower").then(t=>{eX.innerHTML=eQ(t)});let eZ=document.querySelector(".backdrop"),e0=document.querySelectorAll(".book-series__list"),e1=document.querySelector(".backdrop__close");function e2(e){if(e.target.nodeName===e.currentTarget.nodeName)return;let r="LI"===e.target.nodeName?e.target:e.target.parentNode.parentNode;eZ.classList.add("show"),e6(),eV(r.getAttribute("data-id")).then(e=>{eZ.firstElementChild.lastElementChild.innerHTML=function({volumeInfo:e}){var r,n,i,o;return`
  <div class="book">
             <div class="book__img"><img src="${function({imageLinks:e}){return e&&e.thumbnail?e.thumbnail:/*@__PURE__*/t(eW)}(e)}" alt="" width="200"></div>
              <div class="book__wrapper">
                <h3 class="book__name">${e.title||"Title in the registration process..."}</h3>
                <p class="book__author">${(n=e.authors)?n.join(", "):""}</p>
                <p class="book__date">${e.publishedDate||"in the process of writing..."}</p>
                <p class="book__description">${(o=e.description)?(o.includes("<p>")&&(o=(o=o.replaceAll("<p>","")).replaceAll("</p>","")),o.length>550?`${o.slice(0,550)}...`:o):""}</p>
              </div>
            </div>`}(e)})}function e6(){eZ.classList.contains("show")?document.body.style.overflow="hidden":document.body.style.removeProperty("overflow")}eZ.addEventListener("click",function(t){t.target===t.currentTarget&&(t.target.firstElementChild.lastElementChild.innerHTML="",t.target.classList.remove("show"),e6())}),e1.addEventListener("click",function(){eZ.firstElementChild.lastElementChild.innerHTML="",eZ.classList.remove("show"),e6()}),e0.forEach(t=>{t.addEventListener("click",e2)})}();//# sourceMappingURL=index.8cf5a8e8.js.map

//# sourceMappingURL=index.8cf5a8e8.js.map
