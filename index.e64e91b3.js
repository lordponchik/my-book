var t,e,r,n,o,i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function a(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function u(t,e){return function(){return t.apply(e,arguments)}}// utils is a library of generic helper functions non-specific to axios
const{toString:f}=Object.prototype,{getPrototypeOf:l}=Object,c=(t=Object.create(null),e=>{let r=f.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}),h=t=>(t=t.toLowerCase(),e=>c(e)===t),p=t=>e=>typeof e===t,{isArray:d}=Array,g=p("undefined"),y=h("ArrayBuffer"),m=p("string"),b=p("function"),w=p("number"),E=t=>null!==t&&"object"==typeof t,A=t=>{if("object"!==c(t))return!1;let e=l(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},O=h("Date"),R=h("File"),B=h("Blob"),v=h("FileList"),S=h("URLSearchParams");/**
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
 */function T(t,e,{allOwnKeys:r=!1}={}){let n,o;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),d(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{let o;// Iterate over object keys
let i=r?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;for(n=0;n<s;n++)o=i[n],e.call(null,t[o],o,t)}}}function U(t,e){let r;e=e.toLowerCase();let n=Object.keys(t),o=n.length;for(;o-- >0;)if(e===(r=n[o]).toLowerCase())return r;return null}const C=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:s,I=t=>!g(t)&&t!==C,_=(e="undefined"!=typeof Uint8Array&&l(Uint8Array),t=>e&&t instanceof e),x=h("HTMLFormElement"),L=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),N=h("RegExp"),j=(t,e)=>{let r=Object.getOwnPropertyDescriptors(t),n={};T(r,(r,o)=>{let i;!1!==(i=e(r,o,t))&&(n[o]=i||r)}),Object.defineProperties(t,n)},P="abcdefghijklmnopqrstuvwxyz",F="0123456789",k={DIGIT:F,ALPHA:P,ALPHA_DIGIT:P+P.toUpperCase()+F},D=h("AsyncFunction");var M={isArray:d,isArrayBuffer:y,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!g(t)&&null!==t.constructor&&!g(t.constructor)&&b(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&("function"==typeof FormData&&t instanceof FormData||b(t.append)&&("formdata"===(e=c(t))||// detect form-data instance
"object"===e&&b(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&y(t.buffer)},isString:m,isNumber:w,isBoolean:t=>!0===t||!1===t,isObject:E,isPlainObject:A,isUndefined:g,isDate:O,isFile:R,isBlob:B,isRegExp:N,isFunction:b,isStream:t=>E(t)&&b(t.pipe),isURLSearchParams:S,isTypedArray:_,isFileList:v,forEach:T,merge:/**
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
 */function t(){let{caseless:e}=I(this)&&this||{},r={},n=(n,o)=>{let i=e&&U(r,o)||o;A(r[i])&&A(n)?r[i]=t(r[i],n):A(n)?r[i]=t({},n):d(n)?r[i]=n.slice():r[i]=n};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&T(arguments[t],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(T(e,(e,n)=>{r&&b(e)?t[n]=u(e,r):t[n]=e},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let o,i,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(i=(o=Object.getOwnPropertyNames(t)).length;i-- >0;)s=o[i],(!n||n(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=!1!==r&&l(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:c,kindOfTest:h,endsWith:(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;let n=t.indexOf(e,r);return -1!==n&&n===r},toArray:t=>{if(!t)return null;if(d(t))return t;let e=t.length;if(!w(e))return null;let r=Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{let r;let n=t&&t[Symbol.iterator],o=n.call(t);for(;(r=o.next())&&!r.done;){let n=r.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let r;let n=[];for(;null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:x,hasOwnProperty:L,hasOwnProp:L,reduceDescriptors:j,freezeMethods:t=>{j(t,(e,r)=>{// skip restricted props in strict mode
if(b(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=t[r];if(b(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(t,e)=>{let r={};return(t=>{t.forEach(t=>{r[t]=!0})})(d(t)?t:String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(t,e)=>Number.isFinite(t=+t)?t:e,findKey:U,global:C,isContextDefined:I,ALPHABET:k,generateString:(t=16,e=k.ALPHA_DIGIT)=>{let r="",{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&b(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{let e=Array(10),r=(t,n)=>{if(E(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;let o=d(t)?[]:{};return T(t,(t,e)=>{let i=r(t,n+1);g(i)||(o[e]=i)}),e[n]=void 0,o}}return t};return r(t,0)},isAsyncFn:D,isThenable:t=>t&&(E(t)||b(t))&&b(t.then)&&b(t.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function $(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}M.inherits($,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:M.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const q=$.prototype,z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{z[t]={value:t}}),Object.defineProperties($,z),Object.defineProperty(q,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
$.from=(t,e,r,n,o,i)=>{let s=Object.create(q);return M.toFlatObject(t,s,function(t){return t!==Error.prototype},t=>"isAxiosError"!==t),$.call(s,t.message,e,r,n,o),s.cause=t,s.name=t.name,i&&Object.assign(s,i),s},n=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],i=0,s=r-n;i<s;i+=16383// must be multiple of 3
)o.push(function(t,e,r){for(var n,o=[],i=e;i<r;i+=3)o.push(H[(n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]))>>18&63]+H[n>>12&63]+H[n>>6&63]+H[63&n]);return o.join("")}(t,i,i+16383>s?s:i+16383));return 1===n?o.push(H[(e=t[r-1])>>2]+H[e<<4&63]+"=="):2===n&&o.push(H[(e=(t[r-2]<<8)+t[r-1])>>10]+H[e>>4&63]+H[e<<2&63]+"="),o.join("")};for(var H=[],J=[],V="undefined"!=typeof Uint8Array?Uint8Array:Array,W="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G=0,K=W.length;G<K;++G)H[G]=W[G],J[W.charCodeAt(G)]=G;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
J["-".charCodeAt(0)]=62,J["_".charCodeAt(0)]=63,o=function(t,e,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,f=u>>1,l=-7,c=r?o-1:0,h=r?-1:1,p=t[e+c];for(c+=h,i=p&(1<<-l)-1,p>>=-l,l+=a;l>0;i=256*i+t[e+c],c+=h,l-=8);for(s=i&(1<<-l)-1,i>>=-l,l+=n;l>0;s=256*s+t[e+c],c+=h,l-=8);if(0===i)i=1-f;else{if(i===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),i-=f}return(p?-1:1)*s*Math.pow(2,i-n)},i=function(t,e,r,n,o,i){var s,a,u,f=8*i-o-1,l=(1<<f)-1,c=l>>1,h=23===o?5960464477539062e-23:0,p=n?0:i-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+c>=1?e+=h/u:e+=h*Math.pow(2,1-c),e*u>=2&&(s++,u/=2),s+c>=l?(a=0,s=l):s+c>=1?(a=(e*u-1)*Math.pow(2,o),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&a,p+=d,a/=256,o-=8);for(s=s<<o|a,f+=o;f>0;t[r+p]=255&s,p+=d,s/=256,f-=8);t[r+p-d]|=128*g};const Y="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function X(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,Q.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function Q(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return te(t)}return Z(t,e,r)}function Z(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!Q.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|ti(t,e),n=X(r),o=n.write(t,e);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(tU(t,Uint8Array)){let e=new Uint8Array(t);return tn(e.buffer,e.byteOffset,e.byteLength)}return tr(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(tU(t,ArrayBuffer)||t&&tU(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tU(t,SharedArrayBuffer)||t&&tU(t.buffer,SharedArrayBuffer)))return tn(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return Q.from(n,e,r);let o=function(t){var e;if(Q.isBuffer(t)){let e=0|to(t.length),r=X(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?X(0):tr(t):"Buffer"===t.type&&Array.isArray(t.data)?tr(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Q.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function tt(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function te(t){return tt(t),X(t<0?0:0|to(t))}function tr(t){let e=t.length<0?0:0|to(t.length),r=X(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function tn(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Q.prototype),n)}function to(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function ti(t,e){if(Q.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||tU(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tv(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tS(t).length;default:if(o)return n?-1:tv(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function ts(t,e,r){let o=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=e;n<r;++n)o+=tC[t[n]];return o}(this,e,r);case"utf8":case"utf-8":return tl(this,e,r);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":var i,s;return i=e,s=r,0===i&&s===this.length?n(this):n(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),o="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1]);return o}(this,e,r);default:if(o)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),o=!0}}function ta(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tu(t,e,r,n,o){var i;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=Q.from(e,n)),Q.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:tf(t,e,r,n,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):tf(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function tf(t,e,r,n,o){let i,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,a/=2,u/=2,r/=2}function f(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){let n=-1;for(i=r;i<a;i++)if(f(t,i)===f(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===u)return n*s}else -1!==n&&(i-=i-n),n=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){let r=!0;for(let n=0;n<u;n++)if(f(t,i+n)!==f(e,n)){r=!1;break}if(r)return i}return -1}function tl(t,e,r){r=Math.min(t.length,r);let n=[],o=e;for(;o<r;){let e=t[o],i=null,s=e>239?4:e>223?3:e>191?2:1;if(o+s<=r){let r,n,a,u;switch(s){case 1:e<128&&(i=e);break;case 2:(192&(r=t[o+1]))==128&&(u=(31&e)<<6|63&r)>127&&(i=u);break;case 3:r=t[o+1],n=t[o+2],(192&r)==128&&(192&n)==128&&(u=(15&e)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(i=u);break;case 4:r=t[o+1],n=t[o+2],a=t[o+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&u<1114112&&(i=u)}}null===i?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
i=65533,s=1):i>65535&&(// encode to utf16 (surrogate pair dance)
i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=s}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tc(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function th(t,e,r,n,o,i){if(!Q.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function tp(t,e,r,n,o){tA(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function td(t,e,r,n,o){tA(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function tg(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function ty(t,e,r,n,o){return e=+e,r>>>=0,o||tg(t,e,r,4,34028234663852886e22,-34028234663852886e22),i(t,e,r,n,23,4),r+4}function tm(t,e,r,n,o){return e=+e,r>>>=0,o||tg(t,e,r,8,17976931348623157e292,-17976931348623157e292),i(t,e,r,n,52,8),r+8}/**
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
 */Q.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Q.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Q.prototype,"parent",{enumerable:!0,get:function(){if(Q.isBuffer(this))return this.buffer}}),Object.defineProperty(Q.prototype,"offset",{enumerable:!0,get:function(){if(Q.isBuffer(this))return this.byteOffset}}),Q.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/Q.from=function(t,e,r){return Z(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Q.prototype,Uint8Array.prototype),Object.setPrototypeOf(Q,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/Q.alloc=function(t,e,r){return(tt(t),t<=0)?X(t):void 0!==e?"string"==typeof r?X(t).fill(e,r):X(t).fill(e):X(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */Q.allocUnsafe=function(t){return te(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */Q.allocUnsafeSlow=function(t){return te(t)},Q.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Q.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},Q.compare=function(t,e){if(tU(t,Uint8Array)&&(t=Q.from(t,t.offset,t.byteLength)),tU(e,Uint8Array)&&(e=Q.from(e,e.offset,e.byteLength)),!Q.isBuffer(t)||!Q.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},Q.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Q.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Q.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=Q.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){let e=t[r];if(tU(e,Uint8Array))o+e.length>n.length?(Q.isBuffer(e)||(e=Q.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o);else if(Q.isBuffer(e))e.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=e.length}return n},Q.byteLength=ti,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Q.prototype._isBuffer=!0,Q.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ta(this,e,e+1);return this},Q.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ta(this,e,e+3),ta(this,e+1,e+2);return this},Q.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ta(this,e,e+7),ta(this,e+1,e+6),ta(this,e+2,e+5),ta(this,e+3,e+4);return this},Q.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?tl(this,0,t):ts.apply(this,arguments)},Q.prototype.toLocaleString=Q.prototype.toString,Q.prototype.equals=function(t){if(!Q.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===Q.compare(this,t)},Q.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},Y&&(Q.prototype[Y]=Q.prototype.inspect),Q.prototype.compare=function(t,e,r,n,o){if(tU(t,Uint8Array)&&(t=Q.from(t,t.offset,t.byteLength)),!Q.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;let i=o-n,s=r-e,a=Math.min(i,s),u=this.slice(n,o),f=t.slice(e,r);for(let t=0;t<a;++t)if(u[t]!==f[t]){i=u[t],s=f[t];break}return i<s?-1:s<i?1:0},Q.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},Q.prototype.indexOf=function(t,e,r){return tu(this,t,e,r,!0)},Q.prototype.lastIndexOf=function(t,e,r){return tu(this,t,e,r,!1)},Q.prototype.write=function(t,e,r,n){var o,i,s,a,u,f,l,c;// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-e;if((void 0===r||r>h)&&(r=h),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let o;r=Number(r)||0;let i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;let s=e.length;for(n>s/2&&(n=s/2),o=0;o<n;++o){let n=parseInt(e.substr(2*o,2),16);if(n!=n)break;t[r+o]=n}return o}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,tT(tv(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=e,a=r,tT(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=e,f=r,tT(tS(t),this,u,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return l=e,c=r,tT(function(t,e){let r,n;let o=[];for(let i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-l),this,l,c);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},Q.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Q.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,Q.prototype),n)},Q.prototype.readUintLE=Q.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tc(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n},Q.prototype.readUintBE=Q.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tc(t,e,this.length);let n=this[t+--e],o=1;for(;e>0&&(o*=256);)n+=this[t+--e]*o;return n},Q.prototype.readUint8=Q.prototype.readUInt8=function(t,e){return t>>>=0,e||tc(t,1,this.length),this[t]},Q.prototype.readUint16LE=Q.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tc(t,2,this.length),this[t]|this[t+1]<<8},Q.prototype.readUint16BE=Q.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tc(t,2,this.length),this[t]<<8|this[t+1]},Q.prototype.readUint32LE=Q.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tc(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Q.prototype.readUint32BE=Q.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tc(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Q.prototype.readBigUInt64LE=tI(function(t){tO(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tR(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],o=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(o)<<BigInt(32))}),Q.prototype.readBigUInt64BE=tI(function(t){tO(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tR(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],o=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)}),Q.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tc(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},Q.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tc(t,e,this.length);let n=e,o=1,i=this[t+--n];for(;n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},Q.prototype.readInt8=function(t,e){return(t>>>=0,e||tc(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},Q.prototype.readInt16LE=function(t,e){t>>>=0,e||tc(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},Q.prototype.readInt16BE=function(t,e){t>>>=0,e||tc(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},Q.prototype.readInt32LE=function(t,e){return t>>>=0,e||tc(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Q.prototype.readInt32BE=function(t,e){return t>>>=0,e||tc(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Q.prototype.readBigInt64LE=tI(function(t){tO(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tR(t,this.length-8);let n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),Q.prototype.readBigInt64BE=tI(function(t){tO(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tR(t,this.length-8);let n=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),Q.prototype.readFloatLE=function(t,e){return t>>>=0,e||tc(t,4,this.length),o(this,t,!0,23,4)},Q.prototype.readFloatBE=function(t,e){return t>>>=0,e||tc(t,4,this.length),o(this,t,!1,23,4)},Q.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tc(t,8,this.length),o(this,t,!0,52,8)},Q.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tc(t,8,this.length),o(this,t,!1,52,8)},Q.prototype.writeUintLE=Q.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;th(this,t,e,r,n,0)}let o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},Q.prototype.writeUintBE=Q.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;th(this,t,e,r,n,0)}let o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},Q.prototype.writeUint8=Q.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,1,255,0),this[e]=255&t,e+1},Q.prototype.writeUint16LE=Q.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Q.prototype.writeUint16BE=Q.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Q.prototype.writeUint32LE=Q.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Q.prototype.writeUint32BE=Q.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Q.prototype.writeBigUInt64LE=tI(function(t,e=0){return tp(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),Q.prototype.writeBigUInt64BE=tI(function(t,e=0){return td(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),Q.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);th(this,t,e,r,n-1,-n)}let o=0,i=1,s=0;for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+r},Q.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);th(this,t,e,r,n-1,-n)}let o=r-1,i=1,s=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+r},Q.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Q.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Q.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Q.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Q.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||th(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Q.prototype.writeBigInt64LE=tI(function(t,e=0){return tp(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Q.prototype.writeBigInt64BE=tI(function(t,e=0){return td(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Q.prototype.writeFloatLE=function(t,e,r){return ty(this,t,e,!0,r)},Q.prototype.writeFloatBE=function(t,e,r){return ty(this,t,e,!1,r)},Q.prototype.writeDoubleLE=function(t,e,r){return tm(this,t,e,!0,r)},Q.prototype.writeDoubleBE=function(t,e,r){return tm(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Q.prototype.copy=function(t,e,r,n){if(!Q.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Q.prototype.fill=function(t,e,r,n){let o;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!Q.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{let i=Q.isBuffer(t)?t:Q.from(t,n),s=i.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=i[o%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const tb={};function tw(t,e,r){tb[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function tE(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function tA(t,e,r,n,o,i){if(t>r||t<e){let n;let o="bigint"==typeof e?"n":"";throw n=i>3?0===e||e===BigInt(0)?`>= 0${o} and < 2${o} ** ${(i+1)*8}${o}`:`>= -(2${o} ** ${(i+1)*8-1}${o}) and < 2 ** ${(i+1)*8-1}${o}`:`>= ${e}${o} and <= ${r}${o}`,new tb.ERR_OUT_OF_RANGE("value",n,t)}tO(o,"offset"),(void 0===n[o]||void 0===n[o+i])&&tR(o,n.length-(i+1))}function tO(t,e){if("number"!=typeof t)throw new tb.ERR_INVALID_ARG_TYPE(e,"number",t)}function tR(t,e,r){if(Math.floor(t)!==t)throw tO(t,r),new tb.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new tb.ERR_BUFFER_OUT_OF_BOUNDS;throw new tb.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}tw("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tw("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),tw("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?o=tE(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=tE(o)),o+="n"),n+=` It must be ${e}. Received ${o}`},RangeError);// HELPER FUNCTIONS
// ================
const tB=/[^+/0-9A-Za-z-_]/g;function tv(t,e){let r;e=e||1/0;let n=t.length,o=null,i=[];for(let s=0;s<n;++s){// is surrogate component
if((r=t.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(e-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function tS(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),o=n[0],i=n[1],s=new V((o+i)*3/4-i),a=0,u=i>0?o-4:o;for(r=0;r<u;r+=4)e=J[t.charCodeAt(r)]<<18|J[t.charCodeAt(r+1)]<<12|J[t.charCodeAt(r+2)]<<6|J[t.charCodeAt(r+3)],s[a++]=e>>16&255,s[a++]=e>>8&255,s[a++]=255&e;return 2===i&&(e=J[t.charCodeAt(r)]<<2|J[t.charCodeAt(r+1)]>>4,s[a++]=255&e),1===i&&(e=J[t.charCodeAt(r)]<<10|J[t.charCodeAt(r+1)]<<4|J[t.charCodeAt(r+2)]>>2,s[a++]=e>>8&255,s[a++]=255&e),s}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tB,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tT(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function tU(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const tC=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();// Return not function with Error if BigInt not supported
function tI(t){return"undefined"==typeof BigInt?t_:t}function t_(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tx(t){return M.isPlainObject(t)||M.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tL(t){return M.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tN(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tL(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}const tj=M.toFlatObject(M,{},null,function(t){return/^is[A-Z]/.test(t)});var tP=/**
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
 */function(t,e,r){if(!M.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData,// eslint-disable-next-line no-param-reassign
r=M.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!M.isUndefined(e[t])});let n=r.metaTokens,o=r.visitor||l,i=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&M.isSpecCompliantForm(e);if(!M.isFunction(o))throw TypeError("visitor must be a function");function f(t){if(null===t)return"";if(M.isDate(t))return t.toISOString();if(!u&&M.isBlob(t))throw new $("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(t)||M.isTypedArray(t)?u&&"function"==typeof Blob?new Blob([t]):Q.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function l(t,r,o){let a=t;if(t&&!o&&"object"==typeof t){if(M.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else{var u;if(M.isArray(t)&&(u=t,M.isArray(u)&&!u.some(tx))||(M.isFileList(t)||M.endsWith(r,"[]"))&&(a=M.toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=tL(r),a.forEach(function(t,n){M.isUndefined(t)||null===t||e.append(!0===s?tN([r],n,i):null===s?r:r+"[]",f(t))}),!1)}}return!!tx(t)||(e.append(tN(o,r,i),f(t)),!1)}let c=[],h=Object.assign(tj,{defaultVisitor:l,convertValue:f,isVisitable:tx});if(!M.isObject(t))throw TypeError("data must be an object");return!function t(r,n){if(!M.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),M.forEach(r,function(r,i){let s=!(M.isUndefined(r)||null===r)&&o.call(e,r,M.isString(i)?i.trim():i,n,h);!0===s&&t(r,n?n.concat(i):[i])}),c.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tF(t){let e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tk(t,e){this._pairs=[],t&&tP(t,this,e)}const tD=tk.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tM(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function t$(t,e,r){let n;/*eslint no-param-reassign:0*/if(!e)return t;let o=r&&r.encode||tM,i=r&&r.serialize;if(n=i?i(e,r):M.isURLSearchParams(e)?e.toString():new tk(e,r).toString(o)){let e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t}tD.append=function(t,e){this._pairs.push([t,e])},tD.toString=function(t){let e=t?function(e){return t.call(this,e,tF)}:tF;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tq=class{constructor(){this.handlers=[]}/**
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
   */forEach(t){M.forEach(this.handlers,function(e){null!==e&&t(e)})}},tz={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tH="undefined"!=typeof URLSearchParams?URLSearchParams:tk,tJ="undefined"!=typeof FormData?FormData:null,tV="undefined"!=typeof Blob?Blob:null,tW={};a(tW,"hasBrowserEnv",function(){return tG}),a(tW,"hasStandardBrowserEnv",function(){return tK}),a(tW,"hasStandardBrowserWebWorkerEnv",function(){return tY});const tG="undefined"!=typeof window&&"undefined"!=typeof document,tK=(r="undefined"!=typeof navigator&&navigator.product,tG&&0>["ReactNative","NativeScript","NS"].indexOf(r)),tY="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var tX={...tW,isBrowser:!0,classes:{URLSearchParams:tH,FormData:tJ,Blob:tV},protocols:["http","https","file","blob","url","data"]},tQ=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(M.isFormData(t)&&M.isFunction(t.entries)){let e={};return M.forEachEntry(t,(t,r)=>{!function t(e,r,n,o){let i=e[o++],s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&M.isArray(n)?n.length:i,a)return M.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!s;n[i]&&M.isObject(n[i])||(n[i]=[]);let u=t(e,r,n[i],o);return u&&M.isArray(n[i])&&(n[i]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){let e,r;let n={},o=Object.keys(t),i=o.length;for(e=0;e<i;e++)n[r=o[e]]=t[r];return n}(n[i])),!s}(M.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0]),r,e,0)}),e}return null};const tZ={transitional:tz,adapter:["xhr","http"],transformRequest:[function(t,e){let r;let n=e.getContentType()||"",o=n.indexOf("application/json")>-1,i=M.isObject(t);i&&M.isHTMLForm(t)&&(t=new FormData(t));let s=M.isFormData(t);if(s)return o&&o?JSON.stringify(tQ(t)):t;if(M.isArrayBuffer(t)||M.isBuffer(t)||M.isStream(t)||M.isFile(t)||M.isBlob(t))return t;if(M.isArrayBufferView(t))return t.buffer;if(M.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=t,u=this.formSerializer,tP(a,new tX.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return tX.isNode&&M.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=M.isFileList(t))||n.indexOf("multipart/form-data")>-1){let e=this.env&&this.env.FormData;return tP(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||o?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if(M.isString(t))try{return(0,JSON.parse)(t),M.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){let e=this.transitional||tZ.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&M.isString(t)&&(r&&!this.responseType||n)){let r=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!r&&n){if("SyntaxError"===t.name)throw $.from(t,$.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tX.classes.FormData,Blob:tX.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};M.forEach(["delete","get","head","post","put","patch"],t=>{tZ.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const t0=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
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
 */t1=t=>{let e,r,n;let o={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||o[e]&&t0[e]||("set-cookie"===e?o[e]?o[e].push(r):o[e]=[r]:o[e]=o[e]?o[e]+", "+r:r)}),o};const t2=Symbol("internals");function t6(t){return t&&String(t).trim().toLowerCase()}function t5(t){return!1===t||null==t?t:M.isArray(t)?t.map(t5):String(t)}const t8=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function t4(t,e,r,n,o){if(M.isFunction(n))return n.call(this,e,r);if(o&&(e=r),M.isString(e)){if(M.isString(n))return -1!==e.indexOf(n);if(M.isRegExp(n))return n.test(e)}}class t3{constructor(t){t&&this.set(t)}set(t,e,r){let n=this;function o(t,e,r){let o=t6(e);if(!o)throw Error("header name must be a non-empty string");let i=M.findKey(n,o);i&&void 0!==n[i]&&!0!==r&&(void 0!==r||!1===n[i])||(n[i||e]=t5(t))}let i=(t,e)=>M.forEach(t,(t,r)=>o(t,r,e));return M.isPlainObject(t)||t instanceof this.constructor?i(t,e):M.isString(t)&&(t=t.trim())&&!t8(t)?i(t1(t),e):null!=t&&o(e,t,r),this}get(t,e){if(t=t6(t)){let r=M.findKey(this,t);if(r){let t=this[r];if(!e)return t;if(!0===e)return function(t){let e;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;e=n.exec(t);)r[e[1]]=e[2];return r}(t);if(M.isFunction(e))return e.call(this,t,r);if(M.isRegExp(e))return e.exec(t);throw TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=t6(t)){let r=M.findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||t4(this,this[r],r,e)))}return!1}delete(t,e){let r=this,n=!1;function o(t){if(t=t6(t)){let o=M.findKey(r,t);o&&(!e||t4(r,r[o],o,e))&&(delete r[o],n=!0)}}return M.isArray(t)?t.forEach(o):o(t),n}clear(t){let e=Object.keys(this),r=e.length,n=!1;for(;r--;){let o=e[r];(!t||t4(this,this[o],o,t,!0))&&(delete this[o],n=!0)}return n}normalize(t){let e=this,r={};return M.forEach(this,(n,o)=>{let i=M.findKey(r,o);if(i){e[i]=t5(n),delete e[o];return}let s=t?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,r)=>e.toUpperCase()+r):String(o).trim();s!==o&&delete e[o],e[s]=t5(n),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let e=Object.create(null);return M.forEach(this,(r,n)=>{null!=r&&!1!==r&&(e[n]=t&&M.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){let r=new this(t);return e.forEach(t=>r.set(t)),r}static accessor(t){let e=this[t2]=this[t2]={accessors:{}},r=e.accessors,n=this.prototype;function o(t){let e=t6(t);r[e]||(!function(t,e){let r=M.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})})}(n,t),r[e]=!0)}return M.isArray(t)?t.forEach(o):o(t),this}}function t7(t,e){let r=this||tZ,n=e||r,o=t3.from(n.headers),i=n.data;return M.forEach(t,function(t){i=t.call(r,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function t9(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function et(t,e,r){$.call(this,null==t?"canceled":t,$.ERR_CANCELED,e,r),this.name="CanceledError"}t3.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),M.reduceDescriptors(t3.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);// map `set` => `Set`
return{get:()=>t,set(t){this[r]=t}}}),M.freezeMethods(t3),M.inherits(et,$,{__CANCEL__:!0});var ee=tX.hasStandardBrowserEnv?{write:function(t,e,r,n,o,i){let s=[];s.push(t+"="+encodeURIComponent(e)),M.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),M.isString(n)&&s.push("path="+n),M.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){let e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function er(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var en=tX.hasStandardBrowserEnv?// whether the request URL is of the same origin as current location.
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
    */return t=n(window.location.href),function(e){let r=M.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},eo=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){let r;t=t||10;let n=Array(t),o=Array(t),i=0,s=0;return e=void 0!==e?e:1e3,function(a){let u=Date.now(),f=o[s];r||(r=u),n[i]=a,o[i]=u;let l=s,c=0;for(;l!==i;)c+=n[l++],l%=t;if((i=(i+1)%t)===s&&(s=(s+1)%t),u-r<e)return;let h=f&&u-f;return h?Math.round(1e3*c/h):void 0}};function ei(t,e){let r=0,n=eo(50,250);return o=>{let i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,u=n(a);r=i;let f={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&i<=s?(s-i)/u:void 0,event:o};f[e?"download":"upload"]=!0,t(f)}}const es="undefined"!=typeof XMLHttpRequest;var ea=es&&function(t){return new Promise(function(e,r){let n,o,i=t.data,s=t3.from(t.headers).normalize(),a=t.responseType;function u(){t.cancelToken&&t.cancelToken.unsubscribe(n),t.signal&&t.signal.removeEventListener("abort",n)}if(M.isFormData(i)){if(tX.hasStandardBrowserEnv||tX.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);// Let the browser set it
else if(!1!==(o=s.getContentType())){// fix semicolon duplication issue for ReactNative FormData implementation
let[t,...e]=o?o.split(";").map(t=>t.trim()).filter(Boolean):[];s.setContentType([t||"multipart/form-data",...e].join("; "))}}let f=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){let e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(e+":"+r))}let l=er(t.baseURL,t.url);function c(){if(!f)return;// Prepare the response
let n=t3.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),o=a&&"text"!==a&&"json"!==a?f.response:f.responseText,i={data:o,status:f.status,statusText:f.statusText,headers:n,config:t,request:f};!function(t,e,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):e(new $("Request failed with status code "+r.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(t){e(t),u()},function(t){r(t),u()},i),// Clean up request
f=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(f.open(t.method.toUpperCase(),t$(l,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
f.timeout=t.timeout,"onloadend"in f?f.onloadend=c:f.onreadystatechange=function(){f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(c)},// Handle browser request cancellation (as opposed to a manual cancellation)
f.onabort=function(){f&&(r(new $("Request aborted",$.ECONNABORTED,t,f)),// Clean up request
f=null)},// Handle low level network errors
f.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new $("Network Error",$.ERR_NETWORK,t,f)),// Clean up request
f=null},// Handle timeout
f.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||tz;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new $(e,n.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,t,f)),// Clean up request
f=null},tX.hasStandardBrowserEnv){// Add xsrf header
// regarding CVE-2023-45857 config.withCredentials condition was removed temporarily
let e=en(l)&&t.xsrfCookieName&&ee.read(t.xsrfCookieName);e&&s.set(t.xsrfHeaderName,e)}// Remove Content-Type if data is undefined
void 0===i&&s.setContentType(null),"setRequestHeader"in f&&M.forEach(s.toJSON(),function(t,e){f.setRequestHeader(e,t)}),M.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),a&&"json"!==a&&(f.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&f.addEventListener("progress",ei(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",ei(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=e=>{f&&(r(!e||e.type?new et(null,t,f):e),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(n),t.signal&&(t.signal.aborted?n():t.signal.addEventListener("abort",n)));let h=function(t){let e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(l);if(h&&-1===tX.protocols.indexOf(h)){r(new $("Unsupported protocol "+h+":",$.ERR_BAD_REQUEST,t));return}// Send the request
f.send(i||null)})};const eu={http:null,xhr:ea};M.forEach(eu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});const ef=t=>`- ${t}`,el=t=>M.isFunction(t)||null===t||!1===t;var ec={getAdapter:t=>{let e,r;t=M.isArray(t)?t:[t];let{length:n}=t,o={};for(let i=0;i<n;i++){let n;if(r=e=t[i],!el(e)&&void 0===(r=eu[(n=String(e)).toLowerCase()]))throw new $(`Unknown adapter '${n}'`);if(r)break;o[n||"#"+i]=r}if(!r){let t=Object.entries(o).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build"));throw new $("There is no suitable adapter to dispatch the request "+(n?t.length>1?"since :\n"+t.map(ef).join("\n"):" "+ef(t[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:eu};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function eh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new et(null,t)}function ep(t){eh(t),t.headers=t3.from(t.headers),// Transform request data
t.data=t7.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);let e=ec.getAdapter(t.adapter||tZ.adapter);return e(t).then(function(e){return eh(t),// Transform response data
e.data=t7.call(t,t.transformResponse,e),e.headers=t3.from(e.headers),e},function(e){return!t9(e)&&(eh(t),e&&e.response&&(e.response.data=t7.call(t,t.transformResponse,e.response),e.response.headers=t3.from(e.response.headers))),Promise.reject(e)})}const ed=t=>t instanceof t3?t.toJSON():t;function eg(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};let r={};function n(t,e,r){return M.isPlainObject(t)&&M.isPlainObject(e)?M.merge.call({caseless:r},t,e):M.isPlainObject(e)?M.merge({},e):M.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function o(t,e,r){return M.isUndefined(e)?M.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}// eslint-disable-next-line consistent-return
function i(t,e){if(!M.isUndefined(e))return n(void 0,e)}// eslint-disable-next-line consistent-return
function s(t,e){return M.isUndefined(e)?M.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}// eslint-disable-next-line consistent-return
function a(r,o,i){return i in e?n(r,o):i in t?n(void 0,r):void 0}let u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>o(ed(t),ed(e),!0)};return M.forEach(Object.keys(Object.assign({},t,e)),function(n){let i=u[n]||o,s=i(t[n],e[n],n);M.isUndefined(s)&&i!==a||(r[n]=s)}),r}const ey="1.6.1",em={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((t,e)=>{em[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const eb={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */em.transitional=function(t,e,r){function n(t,e){return"[Axios v"+ey+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,o,i)=>{if(!1===t)throw new $(n(o," has been removed"+(e?" in "+e:"")),$.ERR_DEPRECATED);return e&&!eb[o]&&(eb[o]=!0,// eslint-disable-next-line no-console
console.warn(n(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,o,i)}};var ew={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);let n=Object.keys(t),o=n.length;for(;o-- >0;){let i=n[o],s=e[i];if(s){let e=t[i],r=void 0===e||s(e,i,t);if(!0!==r)throw new $("option "+i+" must be "+r,$.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new $("Unknown option "+i,$.ERR_BAD_OPTION)}},validators:em};const eE=ew.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class eA{constructor(t){this.defaults=t,this.interceptors={request:new tq,response:new tq}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(t,e){let r,n;"string"==typeof t?(e=e||{}).url=t:e=t||{},e=eg(this.defaults,e);let{transitional:o,paramsSerializer:i,headers:s}=e;void 0!==o&&ew.assertOptions(o,{silentJSONParsing:eE.transitional(eE.boolean),forcedJSONParsing:eE.transitional(eE.boolean),clarifyTimeoutError:eE.transitional(eE.boolean)},!1),null!=i&&(M.isFunction(i)?e.paramsSerializer={serialize:i}:ew.assertOptions(i,{encode:eE.function,serialize:eE.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&M.merge(s.common,s[e.method]);s&&M.forEach(["delete","get","head","post","put","patch","common"],t=>{delete s[t]}),e.headers=t3.concat(a,s);// filter out skipped interceptors
let u=[],f=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(f=f&&t.synchronous,u.unshift(t.fulfilled,t.rejected))});let l=[];this.interceptors.response.forEach(function(t){l.push(t.fulfilled,t.rejected)});let c=0;if(!f){let t=[ep.bind(this),void 0];for(t.unshift.apply(t,u),t.push.apply(t,l),n=t.length,r=Promise.resolve(e);c<n;)r=r.then(t[c++],t[c++]);return r}n=u.length;let h=e;for(c=0;c<n;){let t=u[c++],e=u[c++];try{h=t(h)}catch(t){e.call(this,t);break}}try{r=ep.call(this,h)}catch(t){return Promise.reject(t)}for(c=0,n=l.length;c<n;)r=r.then(l[c++],l[c++]);return r}getUri(t){t=eg(this.defaults,t);let e=er(t.baseURL,t.url);return t$(e,t.params,t.paramsSerializer)}}M.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/eA.prototype[t]=function(e,r){return this.request(eg(r||{},{method:t,url:e,data:(r||{}).data}))}}),M.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,o){return this.request(eg(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}eA.prototype[t]=e(),eA.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class eO{constructor(t){let e;if("function"!=typeof t)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){e=t});let r=this;// eslint-disable-next-line func-names
this.promise.then(t=>{if(!r._listeners)return;let e=r._listeners.length;for(;e-- >0;)r._listeners[e](t);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=t=>{let e;// eslint-disable-next-line func-names
let n=new Promise(t=>{r.subscribe(t),e=t}).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t(function(t,n,o){r.reason||(r.reason=new et(t,n,o),e(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(t){if(!this._listeners)return;let e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let t;let e=new eO(function(e){t=e});return{token:e,cancel:t}}}const eR={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eR).forEach(([t,e])=>{eR[e]=t});// Create the default instance to be exported
const eB=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){let r=new eA(e),n=u(eA.prototype.request,r);return M.extend(n,eA.prototype,r,{allOwnKeys:!0}),M.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return t(eg(e,r))},n}(tZ);// Expose Axios class to allow class inheritance
eB.Axios=eA,// Expose Cancel & CancelToken
eB.CanceledError=et,eB.CancelToken=eO,eB.isCancel=t9,eB.VERSION=ey,eB.toFormData=tP,// Expose AxiosError class
eB.AxiosError=$,// alias for CanceledError for backward compatibility
eB.Cancel=eB.CanceledError,// Expose all/spread
eB.all=function(t){return Promise.all(t)},eB.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eB.isAxiosError=function(t){return M.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eB.mergeConfig=eg,eB.AxiosHeaders=t3,eB.formToJSON=t=>tQ(M.isHTMLForm(t)?new FormData(t):t),eB.getAdapter=ec.getAdapter,eB.HttpStatusCode=eR,eB.default=eB;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:ev,AxiosError:eS,CanceledError:eT,isCancel:eU,CancelToken:eC,VERSION:eI,all:e_,Cancel:ex,isAxiosError:eL,spread:eN,toFormData:ej,AxiosHeaders:eP,HttpStatusCode:eF,formToJSON:ek,getAdapter:eD,mergeConfig:eM}=eB;async function e$(t){let e=`volumes?q=intitle:${t}&printType=books&startIndex=${Math.floor(11*Math.random())}&maxResults=6`,r=await eB.get(e),n=await r.data,o=await n.items;return o}eB.defaults.baseURL="https://www.googleapis.com/books/v1/";var eq={};eq=new URL("no-image-placeholder.b4c3556e.svg",import.meta.url).toString();const ez=document.querySelector(".potter"),eH=document.querySelector(".icefire"),eJ=document.querySelector(".witcher"),eV=document.querySelector(".dark-tower");function eW(t){return t.map(({volumeInfo:t})=>{var e,r,n;return`<li class="book-series__item">
              <div class="book-series__img"><img src="${function({imageLinks:t}){if(!t||!t.thumbnail){var e;return(e=eq)&&e.__esModule?e.default:e}return t.thumbnail}(t)}" alt="" width="150"></div>
              <div class="book-series__wrapper">
                <h3 class="book-series__name">${(e=t.title)?e.length>45?`${e.slice(0,45)}...`:e:"Title in the registration process..."}</h3>
                <p class="book-series__author">${(r=t.authors)?r.join(", "):"..."}</p>
                <p class="book-series__date">${(n=t.publishedDate)?n:"in the process of writing..."}</p>
              </div>
            </li>`}).join("")}//# sourceMappingURL=index.e64e91b3.js.map
e$("harry+potter").then(t=>{ez.innerHTML=eW(t)}),e$("a+song+of+ice+and+fire").then(t=>{eH.innerHTML=eW(t)}),e$("the+witcher").then(t=>{eJ.innerHTML=eW(t)}),e$("the+dark+tower").then(t=>{eV.innerHTML=eW(t)});
//# sourceMappingURL=index.e64e91b3.js.map
