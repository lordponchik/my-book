!function(){var t,e,r,n,i,o,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function a(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var u={},f={},l=s.parcelRequire78ed;function c(t,e){return function(){return t.apply(e,arguments)}}null==l&&((l=function(t){if(t in u)return u[t].exports;if(t in f){var e=f[t];delete f[t];var r={id:t,exports:{}};return u[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){f[t]=e},s.parcelRequire78ed=l),l.register;// utils is a library of generic helper functions non-specific to axios
let{toString:h}=Object.prototype,{getPrototypeOf:p}=Object,d=(t=Object.create(null),e=>{let r=h.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}),g=t=>(t=t.toLowerCase(),e=>d(e)===t),y=t=>e=>typeof e===t,{isArray:m}=Array,b=y("undefined"),w=g("ArrayBuffer"),E=y("string"),O=y("function"),A=y("number"),R=t=>null!==t&&"object"==typeof t,v=t=>{if("object"!==d(t))return!1;let e=p(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},B=g("Date"),S=g("File"),T=g("Blob"),U=g("FileList"),C=g("URLSearchParams");/**
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
 */function x(t,e,{allOwnKeys:r=!1}={}){let n,i;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),m(t))for(n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else{let i;// Iterate over object keys
let o=r?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;for(n=0;n<s;n++)i=o[n],e.call(null,t[i],i,t)}}}function _(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),i=n.length;for(;i-- >0;)if(e===(r=n[i]).toLowerCase())return r;return null}let I=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:s,N=t=>!b(t)&&t!==I,L=(e="undefined"!=typeof Uint8Array&&p(Uint8Array),t=>e&&t instanceof e),j=g("HTMLFormElement"),P=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),F=g("RegExp"),k=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};x(r,(r,i)=>{let o;!1!==(o=e(r,i,t))&&(n[i]=o||r)}),Object.defineProperties(t,n)},D="abcdefghijklmnopqrstuvwxyz",M="0123456789",$={DIGIT:M,ALPHA:D,ALPHA_DIGIT:D+D.toUpperCase()+M},q=g("AsyncFunction");var z={isArray:m,isArrayBuffer:w,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!b(t)&&null!==t.constructor&&!b(t.constructor)&&O(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||O(t.append)&&("formdata"===(e=d(t))||// detect form-data instance
"object"===e&&O(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&w(t.buffer)},isString:E,isNumber:A,isBoolean:t=>!0===t||!1===t,isObject:R,isPlainObject:v,isUndefined:b,isDate:B,isFile:S,isBlob:T,isRegExp:F,isFunction:O,isStream:t=>R(t)&&O(t.pipe),isURLSearchParams:C,isTypedArray:L,isFileList:U,forEach:x,merge:/**
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
 */function t(){let{caseless:e}=N(this)&&this||{},r={},n=(n,i)=>{let o=e&&_(r,i)||i;v(r[o])&&v(n)?r[o]=t(r[o],n):v(n)?r[o]=t({},n):m(n)?r[o]=n.slice():r[o]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&x(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(x(e,(e,n)=>{r&&O(e)?t[n]=c(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let i,o,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(o=(i=Object.getOwnPropertyNames(t)).length;o-- >0;)s=i[o],(!n||n(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=!1!==r&&p(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:d,kindOfTest:g,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(m(t))return t;let e=t.length;if(!A(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],i=n.call(t);for(;(r=i.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:j,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:k,freezeMethods:t=>{k(t,(e,r)=>{// skip restricted props in strict mode
if(O(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(O(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(m(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:_,global:I,isContextDefined:N,ALPHABET:$,generateString:(t=16,e=$.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&O(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(R(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let i=m(t)?[]:{};return x(t,(t,e)=>{let o=r(t,n+1);b(o)||(i[e]=o)}),e[n]=void 0,i}}return t};return r(t,0)},isAsyncFn:q,isThenable:t=>t&&(R(t)||O(t))&&O(t.then)&&O(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function H(t,e,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}z.inherits(H,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:z.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let J=H.prototype,V={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{V[t]={value:t}}),Object.defineProperties(H,V),Object.defineProperty(J,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
H.from=(t,e,r,n,i,o)=>{let s=Object.create(J);return z.toFlatObject(t,s,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),H.call(s,t.message,e,r,n,i),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s},n=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,i=[],o=0,s=r-n;o<s;o+=16383// must be multiple of 3
)i.push(function(t,e,r){for(var n,i=[],o=e;o<r;o+=3)i.push(W[(n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]))>>18&63]+W[n>>12&63]+W[n>>6&63]+W[63&n]);return i.join("")}(t,o,o+16383>s?s:o+16383));return 1===n?i.push(W[(e=t[r-1])>>2]+W[e<<4&63]+"=="):2===n&&i.push(W[(e=(t[r-2]<<8)+t[r-1])>>10]+W[e>>4&63]+W[e<<2&63]+"="),i.join("")};for(var W=[],G=[],K="undefined"!=typeof Uint8Array?Uint8Array:Array,Y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",X=0,Q=Y.length;X<Q;++X)W[X]=Y[X],G[Y.charCodeAt(X)]=X;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
G["-".charCodeAt(0)]=62,G["_".charCodeAt(0)]=63,i=function(t,e,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,f=u>>1,l=-7,c=r?i-1:0,h=r?-1:1,p=t[e+c];for(c+=h,o=p&(1<<-l)-1,p>>=-l,l+=a;l>0;o=256*o+t[e+c],c+=h,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=n;l>0;s=256*s+t[e+c],c+=h,l-=8);if(0===o)o=1-f;else{if(o===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),o-=f}return(p?-1:1)*s*Math.pow(2,o-n)},o=function(t,e,r,n,i,o){var s,a,u,f=8*o-i-1,l=(1<<f)-1,c=l>>1,h=23===i?5960464477539062e-23:0,p=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+c>=1?e+=h/u:e+=h*Math.pow(2,1-c),e*u>=2&&(s++,u/=2),s+c>=l?(a=0,s=l):s+c>=1?(a=(e*u-1)*Math.pow(2,i),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,f+=i;f>0;t[r+p]=255&s,p+=d,s/=256,f-=8);t[r+p-d]|=128*g};let Z="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function tt(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,te.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function te(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return ti(t)}return tr(t,e,r)}function tr(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!te.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|tu(t,e),n=tt(r),i=n.write(t,e);return i!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,i)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(t_(t,Uint8Array)){let e=new Uint8Array(t);return ts(e.buffer,e.byteOffset,e.byteLength)}return to(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(t_(t,ArrayBuffer)||t&&t_(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(t_(t,SharedArrayBuffer)||t&&t_(t.buffer,SharedArrayBuffer)))return ts(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return te.from(n,e,r);let i=function(t){var e;if(te.isBuffer(t)){let e=0|ta(t.length),r=tt(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?tt(0):to(t):"Buffer"===t.type&&Array.isArray(t.data)?to(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return te.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function tn(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function ti(t){return tn(t),tt(t<0?0:0|ta(t))}function to(t){let e=t.length<0?0:0|ta(t.length),r=tt(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function ts(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),te.prototype),n)}function ta(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function tu(t,e){if(te.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||t_(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tU(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tC(t).length;default:if(i)return n?-1:tU(t).length// assume utf8
;e=(""+e).toLowerCase(),i=!0}}function tf(t,e,r){let i=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=tI[t[n]];return i}(this,e,r);case"utf8":case"utf-8":return tp(this,e,r);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}(this,e,r);case"base64":var o,s;return o=e,s=r,0===o&&s===this.length?n(this):n(this.slice(o,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),i="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}(this,e,r);default:if(i)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function tl(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tc(t,e,r,n,i){var o;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r// Coerce to Number.
)!=o&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return -1;r=t.length-1}else if(r<0){if(!i)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=te.from(e,n)),te.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:th(t,e,r,n,i));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):th(t,[e],r,n,i);throw TypeError("val must be string, number or Buffer")}function th(t,e,r,n,i){let o,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,a/=2,u/=2,r/=2}function f(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){let n=-1;for(o=r;o<a;o++)if(f(t,o)===f(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*s}else -1!==n&&(o-=o-n),n=-1}else for(r+u>a&&(r=a-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(f(t,o+n)!==f(e,n)){r=!1;break}if(r)return o}return -1}function tp(t,e,r){r=Math.min(t.length,r);let n=[],i=e;for(;i<r;){let e=t[i],o=null,s=e>239?4:e>223?3:e>191?2:1;if(i+s<=r){let r,n,a,u;switch(s){case 1:e<128&&(o=e);break;case 2:(192&(r=t[i+1]))==128&&(u=(31&e)<<6|63&r)>127&&(o=u);break;case 3:r=t[i+1],n=t[i+2],(192&r)==128&&(192&n)==128&&(u=(15&e)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(o=u);break;case 4:r=t[i+1],n=t[i+2],a=t[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&u<1114112&&(o=u)}}null===o?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
o=65533,s=1):o>65535&&(// encode to utf16 (surrogate pair dance)
o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function td(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function tg(t,e,r,n,i,o){if(!te.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function ty(t,e,r,n,i){tv(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function tm(t,e,r,n,i){tv(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function tb(t,e,r,n,i,o){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function tw(t,e,r,n,i){return e=+e,r>>>=0,i||tb(t,e,r,4,34028234663852886e22,-34028234663852886e22),o(t,e,r,n,23,4),r+4}function tE(t,e,r,n,i){return e=+e,r>>>=0,i||tb(t,e,r,8,17976931348623157e292,-17976931348623157e292),o(t,e,r,n,52,8),r+8}/**
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
 */te.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),te.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(te.prototype,"parent",{enumerable:!0,get:function(){if(te.isBuffer(this))return this.buffer}}),Object.defineProperty(te.prototype,"offset",{enumerable:!0,get:function(){if(te.isBuffer(this))return this.byteOffset}}),te.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/te.from=function(t,e,r){return tr(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(te.prototype,Uint8Array.prototype),Object.setPrototypeOf(te,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/te.alloc=function(t,e,r){return(tn(t),t<=0)?tt(t):void 0!==e?"string"==typeof r?tt(t).fill(e,r):tt(t).fill(e):tt(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */te.allocUnsafe=function(t){return ti(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */te.allocUnsafeSlow=function(t){return ti(t)},te.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==te.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},te.compare=function(t,e){if(t_(t,Uint8Array)&&(t=te.from(t,t.offset,t.byteLength)),t_(e,Uint8Array)&&(e=te.from(e,e.offset,e.byteLength)),!te.isBuffer(t)||!te.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},te.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},te.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return te.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=te.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){let e=t[r];if(t_(e,Uint8Array))i+e.length>n.length?(te.isBuffer(e)||(e=te.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else if(te.isBuffer(e))e.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=e.length}return n},te.byteLength=tu,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
te.prototype._isBuffer=!0,te.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)tl(this,e,e+1);return this},te.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)tl(this,e,e+3),tl(this,e+1,e+2);return this},te.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)tl(this,e,e+7),tl(this,e+1,e+6),tl(this,e+2,e+5),tl(this,e+3,e+4);return this},te.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?tp(this,0,t):tf.apply(this,arguments)},te.prototype.toLocaleString=te.prototype.toString,te.prototype.equals=function(t){if(!te.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===te.compare(this,t)},te.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},Z&&(te.prototype[Z]=te.prototype.inspect),te.prototype.compare=function(t,e,r,n,i){if(t_(t,Uint8Array)&&(t=te.from(t,t.offset,t.byteLength)),!te.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;let o=i-n,s=r-e,a=Math.min(o,s),u=this.slice(n,i),f=t.slice(e,r);for(let t=0;t<a;++t)if(u[t]!==f[t]){o=u[t],s=f[t];break}return o<s?-1:s<o?1:0},te.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},te.prototype.indexOf=function(t,e,r){return tc(this,t,e,r,!0)},te.prototype.lastIndexOf=function(t,e,r){return tc(this,t,e,r,!1)},te.prototype.write=function(t,e,r,n){var i,o,s,a,u,f,l,c;// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-e;if((void 0===r||r>h)&&(r=h),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let i;r=Number(r)||0;let o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;let s=e.length;for(n>s/2&&(n=s/2),i=0;i<n;++i){let n=parseInt(e.substr(2*i,2),16);if(n!=n)break;t[r+i]=n}return i}(this,t,e,r);case"utf8":case"utf-8":return i=e,o=r,tx(tU(t,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return s=e,a=r,tx(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=e,f=r,tx(tC(t),this,u,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return l=e,c=r,tx(function(t,e){let r,n;let i=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=(r=t.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(t,this.length-l),this,l,c);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},te.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},te.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,te.prototype),n)},te.prototype.readUintLE=te.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||td(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},te.prototype.readUintBE=te.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||td(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},te.prototype.readUint8=te.prototype.readUInt8=function(t,e){return t>>>=0,e||td(t,1,this.length),this[t]},te.prototype.readUint16LE=te.prototype.readUInt16LE=function(t,e){return t>>>=0,e||td(t,2,this.length),this[t]|this[t+1]<<8},te.prototype.readUint16BE=te.prototype.readUInt16BE=function(t,e){return t>>>=0,e||td(t,2,this.length),this[t]<<8|this[t+1]},te.prototype.readUint32LE=te.prototype.readUInt32LE=function(t,e){return t>>>=0,e||td(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},te.prototype.readUint32BE=te.prototype.readUInt32BE=function(t,e){return t>>>=0,e||td(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},te.prototype.readBigUInt64LE=tN(function(t){tB(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tS(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],i=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),te.prototype.readBigUInt64BE=tN(function(t){tB(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tS(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],i=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),te.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||td(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},te.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||td(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},te.prototype.readInt8=function(t,e){return(t>>>=0,e||td(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},te.prototype.readInt16LE=function(t,e){t>>>=0,e||td(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},te.prototype.readInt16BE=function(t,e){t>>>=0,e||td(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},te.prototype.readInt32LE=function(t,e){return t>>>=0,e||td(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},te.prototype.readInt32BE=function(t,e){return t>>>=0,e||td(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},te.prototype.readBigInt64LE=tN(function(t){tB(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tS(t,this.length-8);let n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),te.prototype.readBigInt64BE=tN(function(t){tB(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tS(t,this.length-8);let n=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),te.prototype.readFloatLE=function(t,e){return t>>>=0,e||td(t,4,this.length),i(this,t,!0,23,4)},te.prototype.readFloatBE=function(t,e){return t>>>=0,e||td(t,4,this.length),i(this,t,!1,23,4)},te.prototype.readDoubleLE=function(t,e){return t>>>=0,e||td(t,8,this.length),i(this,t,!0,52,8)},te.prototype.readDoubleBE=function(t,e){return t>>>=0,e||td(t,8,this.length),i(this,t,!1,52,8)},te.prototype.writeUintLE=te.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tg(this,t,e,r,n,0)}let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},te.prototype.writeUintBE=te.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tg(this,t,e,r,n,0)}let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},te.prototype.writeUint8=te.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||tg(this,t,e,1,255,0),this[e]=255&t,e+1},te.prototype.writeUint16LE=te.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tg(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},te.prototype.writeUint16BE=te.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tg(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},te.prototype.writeUint32LE=te.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tg(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},te.prototype.writeUint32BE=te.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tg(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},te.prototype.writeBigUInt64LE=tN(function(t,e=0){return ty(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),te.prototype.writeBigUInt64BE=tN(function(t,e=0){return tm(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),te.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);tg(this,t,e,r,n-1,-n)}let i=0,o=1,s=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+r},te.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);tg(this,t,e,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/o>>0)-s&255;return e+r},te.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||tg(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},te.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tg(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},te.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tg(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},te.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tg(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},te.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tg(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},te.prototype.writeBigInt64LE=tN(function(t,e=0){return ty(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),te.prototype.writeBigInt64BE=tN(function(t,e=0){return tm(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),te.prototype.writeFloatLE=function(t,e,r){return tw(this,t,e,!0,r)},te.prototype.writeFloatBE=function(t,e,r){return tw(this,t,e,!1,r)},te.prototype.writeDoubleLE=function(t,e,r){return tE(this,t,e,!0,r)},te.prototype.writeDoubleBE=function(t,e,r){return tE(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
te.prototype.copy=function(t,e,r,n){if(!te.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
te.prototype.fill=function(t,e,r,n){let i;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!te.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{let o=te.isBuffer(t)?t:te.from(t,n),s=o.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let tO={};function tA(t,e,r){tO[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function tR(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function tv(t,e,r,n,i,o){if(t>r||t<e){let n;let i="bigint"==typeof e?"n":"";throw n=o>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${e}${i} and <= ${r}${i}`,new tO.ERR_OUT_OF_RANGE("value",n,t)}tB(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&tS(i,n.length-(o+1))}function tB(t,e){if("number"!=typeof t)throw new tO.ERR_INVALID_ARG_TYPE(e,"number",t)}function tS(t,e,r){if(Math.floor(t)!==t)throw tB(t,r),new tO.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new tO.ERR_BUFFER_OUT_OF_BOUNDS;throw new tO.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}tA("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tA("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),tA("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=tR(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=tR(i)),i+="n"),n+=` It must be ${e}. Received ${i}`},RangeError);// HELPER FUNCTIONS
// ================
let tT=/[^+/0-9A-Za-z-_]/g;function tU(t,e){let r;e=e||1/0;let n=t.length,i=null,o=[];for(let s=0;s<n;++s){// is surrogate component
if((r=t.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!i){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(e-=3)>-1&&o.push(239,191,189);continue}// valid lead
i=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}// valid surrogate pair
r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);// encode utf8
if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function tC(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),i=n[0],o=n[1],s=new K((i+o)*3/4-o),a=0,u=o>0?i-4:i;for(r=0;r<u;r+=4)e=G[t.charCodeAt(r)]<<18|G[t.charCodeAt(r+1)]<<12|G[t.charCodeAt(r+2)]<<6|G[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return 2===o&&(e=G[t.charCodeAt(r)]<<2|G[t.charCodeAt(r+1)]>>4,s[a++]=255&e),1===o&&(e=G[t.charCodeAt(r)]<<10|G[t.charCodeAt(r+1)]<<4|G[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tT,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tx(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length)&&!(i>=t.length);++i)e[i+r]=t[i];return i}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function t_(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let tI=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();// Return not function with Error if BigInt not supported
function tN(t){return"undefined"==typeof BigInt?tL:t}function tL(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tj(t){return z.isPlainObject(t)||z.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tP(t){return z.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tF(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tP(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}let tk=z.toFlatObject(z,{},null,function(t){return/^is[A-Z]/.test(t)});var tD=/**
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
 */function(t,e,r){if(!z.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
r=z.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!z.isUndefined(e[t])});let n=r.metaTokens,i=r.visitor||l,o=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&z.isSpecCompliantForm(e);if(!z.isFunction(i))throw TypeError("visitor must be a function");function f(t){if(null===t)return"";if(z.isDate(t))return t.toISOString();if(!u&&z.isBlob(t))throw new H("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(t)||z.isTypedArray(t)?u&&"function"==typeof Blob?new Blob([t]):te.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function l(t,r,i){let a=t;if(t&&!i&&"object"==typeof t){if(z.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var u;if(z.isArray(t)&&(u=t,z.isArray(u)&&!u.some(tj))||(z.isFileList(t)||z.endsWith(r,"[]"))&&(a=z.toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=tP(r),a.forEach(function(t,n){z.isUndefined(t)||null===t||e.append(!0===s?tF([r],n,o):null===s?r:r+"[]",f(t))}),!1)}}return!!tj(t)||(e.append(tF(i,r,o),f(t)),!1)}let c=[],h=Object.assign(tk,{defaultVisitor:l,convertValue:f,isVisitable:tj});if(!z.isObject(t))throw TypeError("data must be an object");return!function t(r,n){if(!z.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),z.forEach(r,function(r,o){let s=!(z.isUndefined(r)||null===r)&&i.call(e,r,z.isString(o)?o.trim():o,n,h);!0===s&&t(r,n?n.concat(o):[o])}),c.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tM(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function t$(t,e){this._pairs=[],t&&tD(t,this,e)}let tq=t$.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tz(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tH(t,e,r){let n;/*eslint no-param-reassign:0*/if(!e)return t;let i=r&&r.encode||tz,o=r&&r.serialize;if(n=o?o(e,r):z.isURLSearchParams(e)?e.toString():new t$(e,r).toString(i)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t}tq.append=function(t,e){this._pairs.push([t,e])},tq.toString=function(t){let e=t?function(e){return t.call(this,e,tM)}:tM;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tJ=class{constructor(){this.handlers=[]}/**
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
   */forEach(t){z.forEach(this.handlers,function(e){null!==e&&t(e)})}},tV={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tW="undefined"!=typeof URLSearchParams?URLSearchParams:t$,tG="undefined"!=typeof FormData?FormData:null,tK="undefined"!=typeof Blob?Blob:null,tY={};a(tY,"hasBrowserEnv",function(){return tX}),a(tY,"hasStandardBrowserEnv",function(){return tQ}),a(tY,"hasStandardBrowserWebWorkerEnv",function(){return tZ});let tX="undefined"!=typeof window&&"undefined"!=typeof document,tQ=(r="undefined"!=typeof navigator&&navigator.product,tX&&0>["ReactNative","NativeScript","NS"].indexOf(r)),tZ="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var t0={...tY,isBrowser:!0,classes:{URLSearchParams:tW,FormData:tG,Blob:tK},protocols:["http","https","file","blob","url","data"]},t1=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(z.isFormData(t)&&z.isFunction(t.entries)){let e={};return z.forEachEntry(t,(t,r)=>{!function t(e,r,n,i){let o=e[i++],s=Number.isFinite(+o),a=i>=e.length;if(o=!o&&z.isArray(n)?n.length:o,a)return z.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!s;n[o]&&z.isObject(n[o])||(n[o]=[]);let u=t(e,r,n[o],i);return u&&z.isArray(n[o])&&(n[o]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},i=Object.keys(t),o=i.length;for(e=0;e<o;e++)n[r=i[e]]=t[r];return n}(n[o])),!s}(z.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null};let t2={transitional:tV,adapter:["xhr","http"],transformRequest:[function(t,e){let r;let n=e.getContentType()||"",i=n.indexOf("application/json")>-1,o=z.isObject(t);o&&z.isHTMLForm(t)&&(t=new FormData(t));let s=z.isFormData(t);if(s)return i&&i?JSON.stringify(t1(t)):t;if(z.isArrayBuffer(t)||z.isBuffer(t)||z.isStream(t)||z.isFile(t)||z.isBlob(t))return t;if(z.isArrayBufferView(t))return t.buffer;if(z.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=t,u=this.formSerializer,tD(a,new t0.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return t0.isNode&&z.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=z.isFileList(t))||n.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tD(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return o||i?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if(z.isString(t))try{return(0,JSON.parse)(t),z.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||t2.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&z.isString(t)&&(r&&!this.responseType||n)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&n){if("SyntaxError"===t.name)throw H.from(t,H.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t0.classes.FormData,Blob:t0.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],t=>{t2.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
let t6=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */t5=t=>{let e,r,n;let i={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||i[e]&&t6[e]||("set-cookie"===e?i[e]?i[e].push(r):i[e]=[r]:i[e]=i[e]?i[e]+", "+r:r)}),i};let t8=Symbol("internals");function t4(t){return t&&String(t).trim().toLowerCase()}function t3(t){return!1===t||null==t?t:z.isArray(t)?t.map(t3):String(t)}let t7=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function t9(t,e,r,n,i){if(z.isFunction(n))return n.call(this,e,r);if(i&&(e=r),z.isString(e)){if(z.isString(n))return -1!==e.indexOf(n);if(z.isRegExp(n))return n.test(e)}}class et{constructor(t){t&&this.set(t)}set(t,e,r){let n=this;function i(t,e,r){let i=t4(e);if(!i)throw Error("header name must be a non-empty string");let o=z.findKey(n,i);o&&void 0!==n[o]&&!0!==r&&(void 0!==r||!1===n[o])||(n[o||e]=t3(t))}let o=(t,e)=>z.forEach(t,(t,r)=>i(t,r,e));return z.isPlainObject(t)||t instanceof this.constructor?o(t,e):z.isString(t)&&(t=t.trim())&&!t7(t)?o(t5(t),e):null!=t&&i(e,t,r),this}get(t,e){if(t=t4(t)){let r=z.findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if(z.isFunction(e))return e.call(this,t,r);if(z.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=t4(t)){let r=z.findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||t9(this,this[r],r,e)))}return!1}delete(t,e){let r=this,n=!1;function i(t){if(t=t4(t)){let i=z.findKey(r,t);i&&(!e||t9(r,r[i],i,e))&&(delete r[i],n=!0)}}return z.isArray(t)?t.forEach(i):i(t),n}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let i=e[r];(!t||t9(this,this[i],i,t,!0))&&(delete this[i],n=!0)}return n}normalize(t){let e=this,r={};return z.forEach(this,(n,i)=>{let o=z.findKey(r,i);if(o){e[o]=t3(n),delete e[i];return}let s=t?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(i).trim();s!==i&&delete e[i],e[s]=t3(n),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return z.forEach(this,(r,n)=>{null!=r&&!1!==r&&(e[n]=t&&z.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[t8]=this[t8]={accessors:{}},r=e.accessors,n=this.prototype;function i(t){let e=t4(t);r[e]||(!function(t,e){let r=z.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,i){return this[n].call(this,e,t,r,i)},configurable:!0})})}(n,t),r[e]=!0)}return z.isArray(t)?t.forEach(i):i(t),this}}function ee(t,e){let r=this||t2,n=e||r,i=et.from(n.headers),o=n.data;return z.forEach(t,function(t){o=t.call(r,o,i.normalize(),e?e.status:void 0)}),i.normalize(),o}function er(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function en(t,e,r){H.call(this,null==t?"canceled":t,H.ERR_CANCELED,e,r),this.name="CanceledError"}et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),z.reduceDescriptors(et.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),z.freezeMethods(et),z.inherits(en,H,{__CANCEL__:!0});var ei=t0.hasStandardBrowserEnv?{write:function(t,e,r,n,i,o){let s=[];s.push(t+"="+encodeURIComponent(e)),z.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),z.isString(n)&&s.push("path="+n),z.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function eo(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var es=t0.hasStandardBrowserEnv?// whether the request URL is of the same origin as current location.
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
    */return t=n(window.location.href),function(e){let r=z.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},ea=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),i=Array(t),o=0,s=0;return e=void 0!==e?e:1e3,function(a){let u=Date.now(),f=i[s];r||(r=u),n[o]=a,i[o]=u;let l=s,c=0;for(;l!==o;)c+=n[l++],l%=t;if((o=(o+1)%t)===s&&(s=(s+1)%t),u-r<e)return;let h=f&&u-f;return h?Math.round(1e3*c/h):void 0}};function eu(t,e){let r=0,n=ea(50,250);return i=>{let o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-r,u=n(a);r=o;let f={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&o<=s?(s-o)/u:void 0,event:i};f[e?"download":"upload"]=!0,t(f)}}let ef="undefined"!=typeof XMLHttpRequest;var el=ef&&function(t){return new Promise(function(e,r){let n,i,o=t.data,s=et.from(t.headers).normalize(),a=t.responseType;function u(){t.cancelToken&&t.cancelToken.unsubscribe(n),t.signal&&t.signal.removeEventListener("abort",n)}if(z.isFormData(o)){if(t0.hasStandardBrowserEnv||t0.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);// Let the browser set it
else if(!1!==(i=s.getContentType())){// fix semicolon duplication issue for ReactNative FormData implementation
let[t,...e]=i?i.split(";").map(t=>t.trim()).filter(Boolean):[];s.setContentType([t||"multipart/form-data",...e].join("; "))}}let f=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(e+":"+r))}let l=eo(t.baseURL,t.url);function c(){if(!f)return;// Prepare the response
let n=et.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),i=a&&"text"!==a&&"json"!==a?f.response:f.responseText,o={data:i,status:f.status,statusText:f.statusText,headers:n,config:t,request:f};!function(t,e,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new H("Request failed with status code "+r.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(t){e(t),u()},function(t){r(t),u()},o),// Clean up request
f=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(f.open(t.method.toUpperCase(),tH(l,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
f.timeout=t.timeout,"onloadend"in f?f.onloadend=c:f.onreadystatechange=function(){f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(c)},// Handle browser request cancellation (as opposed to a manual cancellation)
f.onabort=function(){f&&(r(new H("Request aborted",H.ECONNABORTED,t,f)),// Clean up request
f=null)},// Handle low level network errors
f.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new H("Network Error",H.ERR_NETWORK,t,f)),// Clean up request
f=null},// Handle timeout
f.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||tV;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new H(e,n.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,t,f)),// Clean up request
f=null},t0.hasStandardBrowserEnv){// Add xsrf header
// regarding CVE-2023-45857 config.withCredentials condition was removed temporarily
let e=es(l)&&t.xsrfCookieName&&ei.read(t.xsrfCookieName);e&&s.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===o&&s.setContentType(null),"setRequestHeader"in f&&z.forEach(s.toJSON(),function(t,e){f.setRequestHeader(e,t)}),z.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),a&&"json"!==a&&(f.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&f.addEventListener("progress",eu(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",eu(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=e=>{f&&(r(!e||e.type?new en(null,t,f):e),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(n),t.signal&&(t.signal.aborted?n():t.signal.addEventListener("abort",n)));let h=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(l);if(h&&-1===t0.protocols.indexOf(h)){r(new H("Unsupported protocol "+h+":",H.ERR_BAD_REQUEST,t));return}// Send the request
f.send(o||null)})};let ec={http:null,xhr:el};z.forEach(ec,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});let eh=t=>`- ${t}`,ep=t=>z.isFunction(t)||null===t||!1===t;var ed={getAdapter:t=>{let e,r;t=z.isArray(t)?t:[t];let{length:n}=t,i={};for(let o=0;o<n;o++){let n;if(r=e=t[o],!ep(e)&&void 0===(r=ec[(n=String(e)).toLowerCase()]))throw new H(`Unknown adapter '${n}'`);if(r)break;i[n||"#"+o]=r}if(!r){let t=Object.entries(i).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build"));throw new H("There is no suitable adapter to dispatch the request "+(n?t.length>1?"since :\n"+t.map(eh).join("\n"):" "+eh(t[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:ec};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function eg(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new en(null,t)}function ey(t){eg(t),t.headers=et.from(t.headers),// Transform request data
t.data=ee.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=ed.getAdapter(t.adapter||t2.adapter);return e(t).then(function(e){return eg(t),// Transform response data
e.data=ee.call(t,t.transformResponse,e),e.headers=et.from(e.headers),e},function(e){return!er(e)&&(eg(t),e&&e.response&&(e.response.data=ee.call(t,t.transformResponse,e.response),e.response.headers=et.from(e.response.headers))),Promise.reject(e)})}let em=t=>t instanceof et?t.toJSON():t;function eb(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function n(t,e,r){return z.isPlainObject(t)&&z.isPlainObject(e)?z.merge.call({caseless:r},t,e):z.isPlainObject(e)?z.merge({},e):z.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function i(t,e,r){return z.isUndefined(e)?z.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}// eslint-disable-next-line consistent-return
function o(t,e){if(!z.isUndefined(e))return n(void 0,e)}// eslint-disable-next-line consistent-return
function s(t,e){return z.isUndefined(e)?z.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}// eslint-disable-next-line consistent-return
function a(r,i,o){return o in e?n(r,i):o in t?n(void 0,r):void 0}let u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>i(em(t),em(e),!0)};return z.forEach(Object.keys(Object.assign({},t,e)),function(n){let o=u[n]||i,s=o(t[n],e[n],n);z.isUndefined(s)&&o!==a||(r[n]=s)}),r}let ew="1.6.1",eE={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{eE[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});let eO={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */eE.transitional=function(t,e,r){function n(t,e){return"[Axios v"+ew+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,i,o)=>{if(!1===t)throw new H(n(i," has been removed"+(e?" in "+e:"")),H.ERR_DEPRECATED);return e&&!eO[i]&&(eO[i]=!0,// eslint-disable-next-line no-console
console.warn(n(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,i,o)}};var eA={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),i=n.length;for(;i-- >0;){let o=n[i],s=e[o];if(s){let e=t[o],r=void 0===e||s(e,o,t);if(!0!==r)throw new H("option "+o+" must be "+r,H.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new H("Unknown option "+o,H.ERR_BAD_OPTION)}},validators:eE};let eR=eA.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class ev{constructor(t){this.defaults=t,this.interceptors={request:new tJ,response:new tJ}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,n;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=eb(this.defaults,e);let{transitional:i,paramsSerializer:o,headers:s}=e;void 0!==i&&eA.assertOptions(i,{silentJSONParsing:eR.transitional(eR.boolean),forcedJSONParsing:eR.transitional(eR.boolean),clarifyTimeoutError:eR.transitional(eR.boolean)},!1),null!=o&&(z.isFunction(o)?e.paramsSerializer={serialize:o}:eA.assertOptions(o,{encode:eR.function,serialize:eR.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&z.merge(s.common,s[e.method]);s&&z.forEach(["delete","get","head","post","put","patch","common"],t=>{delete s[t]}),e.headers=et.concat(a,s);// filter out skipped interceptors
let u=[],f=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(f=f&&t.synchronous,u.unshift(t.fulfilled,t.rejected))});let l=[];this.interceptors.response.forEach(function(t){l.push(t.fulfilled,t.rejected)});let c=0;if(!f){let t=[ey.bind(this),void 0];for(t.unshift.apply(t,u),t.push.apply(t,l),n=t.length,r=Promise.resolve(e);c<n;)r=r.then(t[c++],t[c++]);return r}n=u.length;let h=e;for(c=0;c<n;){let t=u[c++],e=u[c++];try{h=t(h)}catch(t){e.call(this,t);break}}try{r=ey.call(this,h)}catch(t){return Promise.reject(t)}for(c=0,n=l.length;c<n;)r=r.then(l[c++],l[c++]);return r}getUri(t){t=eb(this.defaults,t);let e=eo(t.baseURL,t.url);return tH(e,t.params,t.paramsSerializer)}}z.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/ev.prototype[t]=function(e,r){return this.request(eb(r||{},{method:t,url:e,data:(r||{}).data}))}}),z.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,i){return this.request(eb(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}ev.prototype[t]=e(),ev.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class eB{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,n,i){r.reason||(r.reason=new en(t,n,i),e(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new eB(function(e){t=e});return{token:e,cancel:t}}}let eS={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eS).forEach(([t,e])=>{eS[e]=t});// Create the default instance to be exported
let eT=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let r=new ev(e),n=c(ev.prototype.request,r);return z.extend(n,ev.prototype,r,{allOwnKeys:!0}),z.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return t(eb(e,r))},n}(t2);// Expose Axios class to allow class inheritance
eT.Axios=ev,// Expose Cancel & CancelToken
eT.CanceledError=en,eT.CancelToken=eB,eT.isCancel=er,eT.VERSION=ew,eT.toFormData=tD,// Expose AxiosError class
eT.AxiosError=H,// alias for CanceledError for backward compatibility
eT.Cancel=eT.CanceledError,// Expose all/spread
eT.all=function(t){return Promise.all(t)},eT.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eT.isAxiosError=function(t){return z.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eT.mergeConfig=eb,eT.AxiosHeaders=et,eT.formToJSON=t=>t1(z.isHTMLForm(t)?new FormData(t):t),eT.getAdapter=ed.getAdapter,eT.HttpStatusCode=eS,eT.default=eT;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
let{Axios:eU,AxiosError:eC,CanceledError:ex,isCancel:e_,CancelToken:eI,VERSION:eN,all:eL,Cancel:ej,isAxiosError:eP,spread:eF,toFormData:ek,AxiosHeaders:eD,HttpStatusCode:eM,formToJSON:e$,getAdapter:eq,mergeConfig:ez}=eT;async function eH(t){let e=`volumes?q=intitle:${t}&printType=books&startIndex=${Math.floor(11*Math.random())}&maxResults=6`,r=await eT.get(e),n=await r.data,i=await n.items;return i}eT.defaults.baseURL="https://www.googleapis.com/books/v1/";var eJ={};eJ=l("aNJCr").getBundleURL("EVgbq")+"no-image-placeholder.b4c3556e.svg";let eV=document.querySelector(".potter"),eW=document.querySelector(".icefire"),eG=document.querySelector(".witcher"),eK=document.querySelector(".dark-tower");function eY(t){return t.map(({volumeInfo:t})=>{var e,r,n;return`<li class="book-series__item">
              <div class="book-series__img"><img src="${function({imageLinks:t}){if(!t||!t.thumbnail){var e;return(e=eJ)&&e.__esModule?e.default:e}return t.thumbnail}(t)}" alt="" width="150"></div>
              <div class="book-series__wrapper">
                <h3 class="book-series__name">${(e=t.title)?e.length>45?`${e.slice(0,45)}...`:e:"Title in the registration process..."}</h3>
                <p class="book-series__author">${(r=t.authors)?r.join(", "):"..."}</p>
                <p class="book-series__date">${(n=t.publishedDate)?n:"in the process of writing..."}</p>
              </div>
            </li>`}).join("")}eH("harry+potter").then(t=>{eV.innerHTML=eY(t)}),eH("a+song+of+ice+and+fire").then(t=>{eW.innerHTML=eY(t)}),eH("the+witcher").then(t=>{eG.innerHTML=eY(t)}),eH("the+dark+tower").then(t=>{eK.innerHTML=eY(t)})}();//# sourceMappingURL=index.6bef2a93.js.map

//# sourceMappingURL=index.6bef2a93.js.map
