var rp=Object.create;var Is=Object.defineProperty;var op=Object.getOwnPropertyDescriptor;var ap=Object.getOwnPropertyNames;var ip=Object.getPrototypeOf,lp=Object.prototype.hasOwnProperty;var Mn=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var sp=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of ap(n))!lp.call(e,o)&&o!==t&&Is(e,o,{get:()=>n[o],enumerable:!(r=op(n,o))||r.enumerable});return e};var W=(e,n,t)=>(t=e!=null?rp(ip(e)):{},sp(n||!e||!e.__esModule?Is(t,"default",{value:e,enumerable:!0}):t,e));var Qs=Mn(j=>{"use strict";var fr=Symbol.for("react.element"),up=Symbol.for("react.portal"),cp=Symbol.for("react.fragment"),dp=Symbol.for("react.strict_mode"),fp=Symbol.for("react.profiler"),pp=Symbol.for("react.provider"),mp=Symbol.for("react.context"),hp=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),yp=Symbol.for("react.memo"),vp=Symbol.for("react.lazy"),Fs=Symbol.iterator;function xp(e){return e===null||typeof e!="object"?null:(e=Fs&&e[Fs]||e["@@iterator"],typeof e=="function"?e:null)}var js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$s=Object.assign,Us={};function zt(e,n,t){this.props=e,this.context=n,this.refs=Us,this.updater=t||js}zt.prototype.isReactComponent={};zt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};zt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vs(){}Vs.prototype=zt.prototype;function Xa(e,n,t){this.props=e,this.context=n,this.refs=Us,this.updater=t||js}var qa=Xa.prototype=new Vs;qa.constructor=Xa;$s(qa,zt.prototype);qa.isPureReactComponent=!0;var As=Array.isArray,Ws=Object.prototype.hasOwnProperty,Za={current:null},Ys={key:!0,ref:!0,__self:!0,__source:!0};function Ks(e,n,t){var r,o={},a=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(a=""+n.key),n)Ws.call(n,r)&&!Ys.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:fr,type:e,key:a,ref:i,props:o,_owner:Za.current}}function kp(e,n){return{$$typeof:fr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ei(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function wp(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Hs=/\/+/g;function Ja(e,n){return typeof e=="object"&&e!==null&&e.key!=null?wp(""+e.key):n.toString(36)}function uo(e,n,t,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case fr:case up:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Ja(i,0):r,As(o)?(t="",e!=null&&(t=e.replace(Hs,"$&/")+"/"),uo(o,n,t,"",function(u){return u})):o!=null&&(ei(o)&&(o=kp(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Hs,"$&/")+"/")+e)),n.push(o)),1;if(i=0,r=r===""?".":r+":",As(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Ja(a,l);i+=uo(a,n,t,s,o)}else if(s=xp(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Ja(a,l++),i+=uo(a,n,t,s,o);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function so(e,n,t){if(e==null)return e;var r=[],o=0;return uo(e,r,"","",function(a){return n.call(t,a,o++)}),r}function bp(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},co={transition:null},Sp={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:co,ReactCurrentOwner:Za};function Gs(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:so,forEach:function(e,n,t){so(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return so(e,function(){n++}),n},toArray:function(e){return so(e,function(n){return n})||[]},only:function(e){if(!ei(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=zt;j.Fragment=cp;j.Profiler=fp;j.PureComponent=Xa;j.StrictMode=dp;j.Suspense=gp;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sp;j.act=Gs;j.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$s({},e.props),o=e.key,a=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,i=Za.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Ws.call(n,s)&&!Ys.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:fr,type:e.type,key:o,ref:a,props:r,_owner:i}};j.createContext=function(e){return e={$$typeof:mp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pp,_context:e},e.Consumer=e};j.createElement=Ks;j.createFactory=function(e){var n=Ks.bind(null,e);return n.type=e,n};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:hp,render:e}};j.isValidElement=ei;j.lazy=function(e){return{$$typeof:vp,_payload:{_status:-1,_result:e},_init:bp}};j.memo=function(e,n){return{$$typeof:yp,type:e,compare:n===void 0?null:n}};j.startTransition=function(e){var n=co.transition;co.transition={};try{e()}finally{co.transition=n}};j.unstable_act=Gs;j.useCallback=function(e,n){return Pe.current.useCallback(e,n)};j.useContext=function(e){return Pe.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};j.useEffect=function(e,n){return Pe.current.useEffect(e,n)};j.useId=function(){return Pe.current.useId()};j.useImperativeHandle=function(e,n,t){return Pe.current.useImperativeHandle(e,n,t)};j.useInsertionEffect=function(e,n){return Pe.current.useInsertionEffect(e,n)};j.useLayoutEffect=function(e,n){return Pe.current.useLayoutEffect(e,n)};j.useMemo=function(e,n){return Pe.current.useMemo(e,n)};j.useReducer=function(e,n,t){return Pe.current.useReducer(e,n,t)};j.useRef=function(e){return Pe.current.useRef(e)};j.useState=function(e){return Pe.current.useState(e)};j.useSyncExternalStore=function(e,n,t){return Pe.current.useSyncExternalStore(e,n,t)};j.useTransition=function(){return Pe.current.useTransition()};j.version="18.3.1"});var Ve=Mn((ph,Js)=>{"use strict";Js.exports=Qs()});var iu=Mn(J=>{"use strict";function oi(e,n){var t=e.length;e.push(n);e:for(;0<t;){var r=t-1>>>1,o=e[r];if(0<fo(o,n))e[r]=n,e[t]=o,t=r;else break e}}function dn(e){return e.length===0?null:e[0]}function mo(e){if(e.length===0)return null;var n=e[0],t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var i=2*(r+1)-1,l=e[i],s=i+1,u=e[s];if(0>fo(l,t))s<o&&0>fo(u,l)?(e[r]=u,e[s]=t,r=s):(e[r]=l,e[i]=t,r=i);else if(s<o&&0>fo(u,t))e[r]=u,e[s]=t,r=s;else break e}}return n}function fo(e,n){var t=e.sortIndex-n.sortIndex;return t!==0?t:e.id-n.id}typeof performance=="object"&&typeof performance.now=="function"?(Xs=performance,J.unstable_now=function(){return Xs.now()}):(ni=Date,qs=ni.now(),J.unstable_now=function(){return ni.now()-qs});var Xs,ni,qs,bn=[],Un=[],Cp=1,nn=null,Te=3,ho=!1,gt=!1,mr=!1,nu=typeof setTimeout=="function"?setTimeout:null,tu=typeof clearTimeout=="function"?clearTimeout:null,Zs=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ai(e){for(var n=dn(Un);n!==null;){if(n.callback===null)mo(Un);else if(n.startTime<=e)mo(Un),n.sortIndex=n.expirationTime,oi(bn,n);else break;n=dn(Un)}}function ii(e){if(mr=!1,ai(e),!gt)if(dn(bn)!==null)gt=!0,si(li);else{var n=dn(Un);n!==null&&ui(ii,n.startTime-e)}}function li(e,n){gt=!1,mr&&(mr=!1,tu(hr),hr=-1),ho=!0;var t=Te;try{for(ai(n),nn=dn(bn);nn!==null&&(!(nn.expirationTime>n)||e&&!au());){var r=nn.callback;if(typeof r=="function"){nn.callback=null,Te=nn.priorityLevel;var o=r(nn.expirationTime<=n);n=J.unstable_now(),typeof o=="function"?nn.callback=o:nn===dn(bn)&&mo(bn),ai(n)}else mo(bn);nn=dn(bn)}if(nn!==null)var a=!0;else{var i=dn(Un);i!==null&&ui(ii,i.startTime-n),a=!1}return a}finally{nn=null,Te=t,ho=!1}}var go=!1,po=null,hr=-1,ru=5,ou=-1;function au(){return!(J.unstable_now()-ou<ru)}function ti(){if(po!==null){var e=J.unstable_now();ou=e;var n=!0;try{n=po(!0,e)}finally{n?pr():(go=!1,po=null)}}else go=!1}var pr;typeof Zs=="function"?pr=function(){Zs(ti)}:typeof MessageChannel<"u"?(ri=new MessageChannel,eu=ri.port2,ri.port1.onmessage=ti,pr=function(){eu.postMessage(null)}):pr=function(){nu(ti,0)};var ri,eu;function si(e){po=e,go||(go=!0,pr())}function ui(e,n){hr=nu(function(){e(J.unstable_now())},n)}J.unstable_IdlePriority=5;J.unstable_ImmediatePriority=1;J.unstable_LowPriority=4;J.unstable_NormalPriority=3;J.unstable_Profiling=null;J.unstable_UserBlockingPriority=2;J.unstable_cancelCallback=function(e){e.callback=null};J.unstable_continueExecution=function(){gt||ho||(gt=!0,si(li))};J.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ru=0<e?Math.floor(1e3/e):5};J.unstable_getCurrentPriorityLevel=function(){return Te};J.unstable_getFirstCallbackNode=function(){return dn(bn)};J.unstable_next=function(e){switch(Te){case 1:case 2:case 3:var n=3;break;default:n=Te}var t=Te;Te=n;try{return e()}finally{Te=t}};J.unstable_pauseExecution=function(){};J.unstable_requestPaint=function(){};J.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=Te;Te=e;try{return n()}finally{Te=t}};J.unstable_scheduleCallback=function(e,n,t){var r=J.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?r+t:r):t=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=t+o,e={id:Cp++,callback:n,priorityLevel:e,startTime:t,expirationTime:o,sortIndex:-1},t>r?(e.sortIndex=t,oi(Un,e),dn(bn)===null&&e===dn(Un)&&(mr?(tu(hr),hr=-1):mr=!0,ui(ii,t-r))):(e.sortIndex=o,oi(bn,e),gt||ho||(gt=!0,si(li))),e};J.unstable_shouldYield=au;J.unstable_wrapCallback=function(e){var n=Te;return function(){var t=Te;Te=n;try{return e.apply(this,arguments)}finally{Te=t}}}});var su=Mn((hh,lu)=>{"use strict";lu.exports=iu()});var pf=Mn(Je=>{"use strict";var Np=Ve(),Ge=su();function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hc=new Set,Ir={};function Rt(e,n){Zt(e,n),Zt(e+"Capture",n)}function Zt(e,n){for(Ir[e]=n,e=0;e<n.length;e++)hc.add(n[e])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zi=Object.prototype.hasOwnProperty,Tp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uu={},cu={};function _p(e){return zi.call(cu,e)?!0:zi.call(uu,e)?!1:Tp.test(e)?cu[e]=!0:(uu[e]=!0,!1)}function Ep(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rp(e,n,t,r){if(n===null||typeof n>"u"||Ep(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Be(e,n,t,r,o,a,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=i}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Se[n]=new Be(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cl=/[\-:]([a-z])/g;function Nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Cl,Nl);Se[n]=new Be(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Cl,Nl);Se[n]=new Be(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Cl,Nl);Se[n]=new Be(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tl(e,n,t,r){var o=Se.hasOwnProperty(n)?Se[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Rp(n,t,o,r)&&(t=null),r||o===null?_p(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Hn=Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),_l=Symbol.for("react.strict_mode"),Li=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),El=Symbol.for("react.forward_ref"),Bi=Symbol.for("react.suspense"),Di=Symbol.for("react.suspense_list"),Rl=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var vc=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var du=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,ci;function Cr(e){if(ci===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ci=n&&n[1]||""}return`
`+ci+e}var di=!1;function fi(e,n){if(!e||di)return"";di=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{di=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Cr(e):""}function Mp(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=fi(e.type,!1),e;case 11:return e=fi(e.type.render,!1),e;case 1:return e=fi(e.type,!0),e;default:return""}}function Oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Dt:return"Portal";case Li:return"Profiler";case _l:return"StrictMode";case Bi:return"Suspense";case Di:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yc:return(e.displayName||"Context")+".Consumer";case gc:return(e._context.displayName||"Context")+".Provider";case El:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rl:return n=e.displayName||null,n!==null?n:Oi(e.type)||"Memo";case Wn:n=e._payload,e=e._init;try{return Oi(e(n))}catch{}}return null}function Pp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oi(n);case 8:return n===_l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function at(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zp(e){var n=xc(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vo(e){e._valueTracker||(e._valueTracker=zp(e))}function kc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=xc(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ii(e,n){var t=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function fu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=at(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function wc(e,n){n=n.checked,n!=null&&Tl(e,"checked",n,!1)}function Fi(e,n){wc(e,n);var t=at(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ai(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ai(e,n.type,at(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function pu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ai(e,n,t){(n!=="number"||Yo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Nr=Array.isArray;function Kt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+at(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Hi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(Nr(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:at(t)}}function bc(e,n){var t=at(n.value),r=at(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function hu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ji(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Sc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xo,Cc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Fr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lp=["Webkit","ms","Moz","O"];Object.keys(Er).forEach(function(e){Lp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Er[n]=Er[e]})});function Nc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Er.hasOwnProperty(e)&&Er[e]?(""+n).trim():n+"px"}function Tc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Nc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Bp=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $i(e,n){if(n){if(Bp[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Ui(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wi=null,Gt=null,Qt=null;function gu(e){if(e=to(e)){if(typeof Wi!="function")throw Error(E(280));var n=e.stateNode;n&&(n=ka(n),Wi(e.stateNode,e.type,n))}}function _c(e){Gt?Qt?Qt.push(e):Qt=[e]:Gt=e}function Ec(){if(Gt){var e=Gt,n=Qt;if(Qt=Gt=null,gu(e),n)for(e=0;e<n.length;e++)gu(n[e])}}function Rc(e,n){return e(n)}function Mc(){}var pi=!1;function Pc(e,n,t){if(pi)return e(n,t);pi=!0;try{return Rc(e,n,t)}finally{pi=!1,(Gt!==null||Qt!==null)&&(Mc(),Ec())}}function Ar(e,n){var t=e.stateNode;if(t===null)return null;var r=ka(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var Yi=!1;if(On)try{Lt={},Object.defineProperty(Lt,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Lt,Lt),window.removeEventListener("test",Lt,Lt)}catch{Yi=!1}var Lt;function Dp(e,n,t,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(g){this.onError(g)}}var Rr=!1,Ko=null,Go=!1,Ki=null,Op={onError:function(e){Rr=!0,Ko=e}};function Ip(e,n,t,r,o,a,i,l,s){Rr=!1,Ko=null,Dp.apply(Op,arguments)}function Fp(e,n,t,r,o,a,i,l,s){if(Ip.apply(this,arguments),Rr){if(Rr){var u=Ko;Rr=!1,Ko=null}else throw Error(E(198));Go||(Go=!0,Ki=u)}}function Mt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function zc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function yu(e){if(Mt(e)!==e)throw Error(E(188))}function Ap(e){var n=e.alternate;if(!n){if(n=Mt(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===t)return yu(o),e;if(a===r)return yu(o),n;a=a.sibling}throw Error(E(188))}if(t.return!==r.return)t=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===t){i=!0,t=o,r=a;break}if(l===r){i=!0,r=o,t=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===t){i=!0,t=a,r=o;break}if(l===r){i=!0,r=a,t=o;break}l=l.sibling}if(!i)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function Lc(e){return e=Ap(e),e!==null?Bc(e):null}function Bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Bc(e);if(n!==null)return n;e=e.sibling}return null}var Dc=Ge.unstable_scheduleCallback,vu=Ge.unstable_cancelCallback,Hp=Ge.unstable_shouldYield,jp=Ge.unstable_requestPaint,fe=Ge.unstable_now,$p=Ge.unstable_getCurrentPriorityLevel,Pl=Ge.unstable_ImmediatePriority,Oc=Ge.unstable_UserBlockingPriority,Qo=Ge.unstable_NormalPriority,Up=Ge.unstable_LowPriority,Ic=Ge.unstable_IdlePriority,ga=null,Tn=null;function Vp(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(ga,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:Kp,Wp=Math.log,Yp=Math.LN2;function Kp(e){return e>>>=0,e===0?32:31-(Wp(e)/Yp|0)|0}var ko=64,wo=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~o;l!==0?r=Tr(l):(a&=i,a!==0&&(r=Tr(a)))}else i=t&~o,i!==0?r=Tr(i):a!==0&&(r=Tr(a));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,a=n&-n,o>=a||o===16&&(a&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-gn(n),o=1<<t,r|=e[t],n&=~o;return r}function Gp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-gn(a),l=1<<i,s=o[i];s===-1?(!(l&t)||l&r)&&(o[i]=Gp(l,n)):s<=n&&(e.expiredLanes|=l),a&=~l}}function Gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fc(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function mi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function eo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-gn(n),e[n]=t}function Jp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-gn(t),a=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~a}}function zl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-gn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var K=0;function Ac(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hc,Ll,jc,$c,Uc,Qi=!1,bo=[],Xn=null,qn=null,Zn=null,Hr=new Map,jr=new Map,Kn=[],Xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xu(e,n){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":Hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(n.pointerId)}}function yr(e,n,t,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},n!==null&&(n=to(n),n!==null&&Ll(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function qp(e,n,t,r,o){switch(n){case"focusin":return Xn=yr(Xn,e,n,t,r,o),!0;case"dragenter":return qn=yr(qn,e,n,t,r,o),!0;case"mouseover":return Zn=yr(Zn,e,n,t,r,o),!0;case"pointerover":var a=o.pointerId;return Hr.set(a,yr(Hr.get(a)||null,e,n,t,r,o)),!0;case"gotpointercapture":return a=o.pointerId,jr.set(a,yr(jr.get(a)||null,e,n,t,r,o)),!0}return!1}function Vc(e){var n=xt(e.target);if(n!==null){var t=Mt(n);if(t!==null){if(n=t.tag,n===13){if(n=zc(t),n!==null){e.blockedOn=n,Uc(e.priority,function(){jc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ji(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Vi=r,t.target.dispatchEvent(r),Vi=null}else return n=to(t),n!==null&&Ll(n),e.blockedOn=t,!1;n.shift()}return!0}function ku(e,n,t){Oo(e)&&t.delete(n)}function Zp(){Qi=!1,Xn!==null&&Oo(Xn)&&(Xn=null),qn!==null&&Oo(qn)&&(qn=null),Zn!==null&&Oo(Zn)&&(Zn=null),Hr.forEach(ku),jr.forEach(ku)}function vr(e,n){e.blockedOn===n&&(e.blockedOn=null,Qi||(Qi=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Zp)))}function $r(e){function n(o){return vr(o,e)}if(0<bo.length){vr(bo[0],e);for(var t=1;t<bo.length;t++){var r=bo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Xn!==null&&vr(Xn,e),qn!==null&&vr(qn,e),Zn!==null&&vr(Zn,e),Hr.forEach(n),jr.forEach(n),t=0;t<Kn.length;t++)r=Kn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&(t=Kn[0],t.blockedOn===null);)Vc(t),t.blockedOn===null&&Kn.shift()}var Jt=Hn.ReactCurrentBatchConfig,Xo=!0;function e0(e,n,t,r){var o=K,a=Jt.transition;Jt.transition=null;try{K=1,Bl(e,n,t,r)}finally{K=o,Jt.transition=a}}function n0(e,n,t,r){var o=K,a=Jt.transition;Jt.transition=null;try{K=4,Bl(e,n,t,r)}finally{K=o,Jt.transition=a}}function Bl(e,n,t,r){if(Xo){var o=Ji(e,n,t,r);if(o===null)wi(e,n,r,qo,t),xu(e,r);else if(qp(o,e,n,t,r))r.stopPropagation();else if(xu(e,r),n&4&&-1<Xp.indexOf(e)){for(;o!==null;){var a=to(o);if(a!==null&&Hc(a),a=Ji(e,n,t,r),a===null&&wi(e,n,r,qo,t),a===o)break;o=a}o!==null&&r.stopPropagation()}else wi(e,n,r,null,t)}}var qo=null;function Ji(e,n,t,r){if(qo=null,e=Ml(r),e=xt(e),e!==null)if(n=Mt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=zc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return qo=e,null}function Wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($p()){case Pl:return 1;case Oc:return 4;case Qo:case Up:return 16;case Ic:return 536870912;default:return 16}default:return 16}}var Qn=null,Dl=null,Io=null;function Yc(){if(Io)return Io;var e,n=Dl,t=n.length,r,o="value"in Qn?Qn.value:Qn.textContent,a=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[a-r];r++);return Io=o.slice(e,1<r?1-r:void 0)}function Fo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function So(){return!0}function wu(){return!1}function Qe(e){function n(t,r,o,a,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?So:wu,this.isPropagationStopped=wu,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Qe(ir),no=se({},ir,{view:0,detail:0}),t0=Qe(no),hi,gi,xr,ya=se({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(hi=e.screenX-xr.screenX,gi=e.screenY-xr.screenY):gi=hi=0,xr=e),hi)},movementY:function(e){return"movementY"in e?e.movementY:gi}}),bu=Qe(ya),r0=se({},ya,{dataTransfer:0}),o0=Qe(r0),a0=se({},no,{relatedTarget:0}),yi=Qe(a0),i0=se({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),l0=Qe(i0),s0=se({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u0=Qe(s0),c0=se({},ir,{data:0}),Su=Qe(c0),d0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=p0[e])?!!n[e]:!1}function Il(){return m0}var h0=se({},no,{key:function(e){if(e.key){var n=d0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g0=Qe(h0),y0=se({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=Qe(y0),v0=se({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),x0=Qe(v0),k0=se({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),w0=Qe(k0),b0=se({},ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),S0=Qe(b0),C0=[9,13,27,32],Fl=On&&"CompositionEvent"in window,Mr=null;On&&"documentMode"in document&&(Mr=document.documentMode);var N0=On&&"TextEvent"in window&&!Mr,Kc=On&&(!Fl||Mr&&8<Mr&&11>=Mr),Nu=" ",Tu=!1;function Gc(e,n){switch(e){case"keyup":return C0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function T0(e,n){switch(e){case"compositionend":return Qc(n);case"keypress":return n.which!==32?null:(Tu=!0,Nu);case"textInput":return e=n.data,e===Nu&&Tu?null:e;default:return null}}function _0(e,n){if(It)return e==="compositionend"||!Fl&&Gc(e,n)?(e=Yc(),Io=Dl=Qn=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kc&&n.locale!=="ko"?null:n.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!E0[e.type]:n==="textarea"}function Jc(e,n,t,r){_c(r),n=Zo(n,"onChange"),0<n.length&&(t=new Ol("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Pr=null,Ur=null;function R0(e){ld(e,0)}function va(e){var n=Ht(e);if(kc(n))return e}function M0(e,n){if(e==="change")return n}var Xc=!1;On&&(On?(No="oninput"in document,No||(vi=document.createElement("div"),vi.setAttribute("oninput","return;"),No=typeof vi.oninput=="function"),Co=No):Co=!1,Xc=Co&&(!document.documentMode||9<document.documentMode));var Co,No,vi;function Eu(){Pr&&(Pr.detachEvent("onpropertychange",qc),Ur=Pr=null)}function qc(e){if(e.propertyName==="value"&&va(Ur)){var n=[];Jc(n,Ur,e,Ml(e)),Pc(R0,n)}}function P0(e,n,t){e==="focusin"?(Eu(),Pr=n,Ur=t,Pr.attachEvent("onpropertychange",qc)):e==="focusout"&&Eu()}function z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return va(Ur)}function L0(e,n){if(e==="click")return va(n)}function B0(e,n){if(e==="input"||e==="change")return va(n)}function D0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var vn=typeof Object.is=="function"?Object.is:D0;function Vr(e,n){if(vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!zi.call(n,o)||!vn(e[o],n[o]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mu(e,n){var t=Ru(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ru(t)}}function Zc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ed(){for(var e=window,n=Yo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Yo(e.document)}return n}function Al(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function O0(e){var n=ed(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Zc(t.ownerDocument.documentElement,t)){if(r!==null&&Al(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Mu(t,a);var i=Mu(t,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var I0=On&&"documentMode"in document&&11>=document.documentMode,Ft=null,Xi=null,zr=null,qi=!1;function Pu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;qi||Ft==null||Ft!==Yo(r)||(r=Ft,"selectionStart"in r&&Al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Vr(zr,r)||(zr=r,r=Zo(Xi,"onSelect"),0<r.length&&(n=new Ol("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ft)))}function To(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var At={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},xi={},nd={};On&&(nd=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function xa(e){if(xi[e])return xi[e];if(!At[e])return e;var n=At[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in nd)return xi[e]=n[t];return e}var td=xa("animationend"),rd=xa("animationiteration"),od=xa("animationstart"),ad=xa("transitionend"),id=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lt(e,n){id.set(e,n),Rt(n,[e])}for(_o=0;_o<zu.length;_o++)Eo=zu[_o],Lu=Eo.toLowerCase(),Bu=Eo[0].toUpperCase()+Eo.slice(1),lt(Lu,"on"+Bu);var Eo,Lu,Bu,_o;lt(td,"onAnimationEnd");lt(rd,"onAnimationIteration");lt(od,"onAnimationStart");lt("dblclick","onDoubleClick");lt("focusin","onFocus");lt("focusout","onBlur");lt(ad,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function Du(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Fp(r,n,void 0,e),e.currentTarget=null}function ld(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Du(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Du(o,l,u),a=s}}}if(Go)throw e=Ki,Go=!1,Ki=null,e}function Z(e,n){var t=n[rl];t===void 0&&(t=n[rl]=new Set);var r=e+"__bubble";t.has(r)||(sd(n,e,2,!1),t.add(r))}function ki(e,n,t){var r=0;n&&(r|=4),sd(t,e,r,n)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Ro]){e[Ro]=!0,hc.forEach(function(t){t!=="selectionchange"&&(F0.has(t)||ki(t,!1,e),ki(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ro]||(n[Ro]=!0,ki("selectionchange",!1,n))}}function sd(e,n,t,r){switch(Wc(n)){case 1:var o=e0;break;case 4:o=n0;break;default:o=Bl}t=o.bind(null,n,t,e),o=void 0,!Yi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function wi(e,n,t,r,o){var a=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=xt(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}Pc(function(){var u=a,g=Ml(t),v=[];e:{var m=id.get(e);if(m!==void 0){var k=Ol,x=e;switch(e){case"keypress":if(Fo(t)===0)break e;case"keydown":case"keyup":k=g0;break;case"focusin":x="focus",k=yi;break;case"focusout":x="blur",k=yi;break;case"beforeblur":case"afterblur":k=yi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=x0;break;case td:case rd:case od:k=l0;break;case ad:k=w0;break;case"scroll":k=t0;break;case"wheel":k=S0;break;case"copy":case"cut":case"paste":k=u0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Cu}var C=(n&4)!==0,I=!C&&e==="scroll",p=C?m!==null?m+"Capture":null:m;C=[];for(var d=u,h;d!==null;){h=d;var T=h.stateNode;if(h.tag===5&&T!==null&&(h=T,p!==null&&(T=Ar(d,p),T!=null&&C.push(Yr(d,T,h)))),I)break;d=d.return}0<C.length&&(m=new k(m,x,null,t,g),v.push({event:m,listeners:C}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&t!==Vi&&(x=t.relatedTarget||t.fromElement)&&(xt(x)||x[In]))break e;if((k||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,k?(x=t.relatedTarget||t.toElement,k=u,x=x?xt(x):null,x!==null&&(I=Mt(x),x!==I||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=u),k!==x)){if(C=bu,T="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=Cu,T="onPointerLeave",p="onPointerEnter",d="pointer"),I=k==null?m:Ht(k),h=x==null?m:Ht(x),m=new C(T,d+"leave",k,t,g),m.target=I,m.relatedTarget=h,T=null,xt(g)===u&&(C=new C(p,d+"enter",x,t,g),C.target=h,C.relatedTarget=I,T=C),I=T,k&&x)n:{for(C=k,p=x,d=0,h=C;h;h=Bt(h))d++;for(h=0,T=p;T;T=Bt(T))h++;for(;0<d-h;)C=Bt(C),d--;for(;0<h-d;)p=Bt(p),h--;for(;d--;){if(C===p||p!==null&&C===p.alternate)break n;C=Bt(C),p=Bt(p)}C=null}else C=null;k!==null&&Ou(v,m,k,C,!1),x!==null&&I!==null&&Ou(v,I,x,C,!0)}}e:{if(m=u?Ht(u):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var P=M0;else if(_u(m))if(Xc)P=B0;else{P=z0;var _=P0}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=L0);if(P&&(P=P(e,u))){Jc(v,P,t,g);break e}_&&_(e,m,u),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Ai(m,"number",m.value)}switch(_=u?Ht(u):window,e){case"focusin":(_u(_)||_.contentEditable==="true")&&(Ft=_,Xi=u,zr=null);break;case"focusout":zr=Xi=Ft=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,Pu(v,t,g);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":Pu(v,t,g)}var M;if(Fl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else It?Gc(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Kc&&t.locale!=="ko"&&(It||N!=="onCompositionStart"?N==="onCompositionEnd"&&It&&(M=Yc()):(Qn=g,Dl="value"in Qn?Qn.value:Qn.textContent,It=!0)),_=Zo(u,N),0<_.length&&(N=new Su(N,e,null,t,g),v.push({event:N,listeners:_}),M?N.data=M:(M=Qc(t),M!==null&&(N.data=M)))),(M=N0?T0(e,t):_0(e,t))&&(u=Zo(u,"onBeforeInput"),0<u.length&&(g=new Su("onBeforeInput","beforeinput",null,t,g),v.push({event:g,listeners:u}),g.data=M))}ld(v,n)})}function Yr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Zo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Ar(e,t),a!=null&&r.unshift(Yr(e,a,o)),a=Ar(e,n),a!=null&&r.push(Yr(e,a,o))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,n,t,r,o){for(var a=n._reactName,i=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Ar(t,a),s!=null&&i.unshift(Yr(t,s,l))):o||(s=Ar(t,a),s!=null&&i.push(Yr(t,s,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var A0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function Iu(e){return(typeof e=="string"?e:""+e).replace(A0,`
`).replace(H0,"")}function Mo(e,n,t){if(n=Iu(n),Iu(e)!==n&&t)throw Error(E(425))}function ea(){}var Zi=null,el=null;function nl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var tl=typeof setTimeout=="function"?setTimeout:void 0,j0=typeof clearTimeout=="function"?clearTimeout:void 0,Fu=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof Fu<"u"?function(e){return Fu.resolve(null).then(e).catch(U0)}:tl;function U0(e){setTimeout(function(){throw e})}function bi(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),$r(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);$r(n)}function et(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Au(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),Nn="__reactFiber$"+lr,Kr="__reactProps$"+lr,In="__reactContainer$"+lr,rl="__reactEvents$"+lr,V0="__reactListeners$"+lr,W0="__reactHandles$"+lr;function xt(e){var n=e[Nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[In]||t[Nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Au(e);e!==null;){if(t=e[Nn])return t;e=Au(e)}return n}e=t,t=e.parentNode}return null}function to(e){return e=e[Nn]||e[In],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ka(e){return e[Kr]||null}var ol=[],jt=-1;function st(e){return{current:e}}function ee(e){0>jt||(e.current=ol[jt],ol[jt]=null,jt--)}function X(e,n){jt++,ol[jt]=e.current,e.current=n}var it={},Me=st(it),Ae=st(!1),Ct=it;function er(e,n){var t=e.type.contextTypes;if(!t)return it;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in t)o[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function na(){ee(Ae),ee(Me)}function Hu(e,n,t){if(Me.current!==it)throw Error(E(168));X(Me,n),X(Ae,t)}function ud(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(E(108,Pp(e)||"Unknown",o));return se({},t,r)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||it,Ct=Me.current,X(Me,e),X(Ae,Ae.current),!0}function ju(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=ud(e,n,Ct),r.__reactInternalMemoizedMergedChildContext=e,ee(Ae),ee(Me),X(Me,e)):ee(Ae),X(Ae,t)}var zn=null,wa=!1,Si=!1;function cd(e){zn===null?zn=[e]:zn.push(e)}function Y0(e){wa=!0,cd(e)}function ut(){if(!Si&&zn!==null){Si=!0;var e=0,n=K;try{var t=zn;for(K=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}zn=null,wa=!1}catch(o){throw zn!==null&&(zn=zn.slice(e+1)),Dc(Pl,ut),o}finally{K=n,Si=!1}}return null}var $t=[],Ut=0,ra=null,oa=0,tn=[],rn=0,Nt=null,Ln=1,Bn="";function yt(e,n){$t[Ut++]=oa,$t[Ut++]=ra,ra=e,oa=n}function dd(e,n,t){tn[rn++]=Ln,tn[rn++]=Bn,tn[rn++]=Nt,Nt=e;var r=Ln;e=Bn;var o=32-gn(r)-1;r&=~(1<<o),t+=1;var a=32-gn(n)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ln=1<<32-gn(n)+o|t<<o|r,Bn=a+e}else Ln=1<<a|t<<o|r,Bn=e}function Hl(e){e.return!==null&&(yt(e,1),dd(e,1,0))}function jl(e){for(;e===ra;)ra=$t[--Ut],$t[Ut]=null,oa=$t[--Ut],$t[Ut]=null;for(;e===Nt;)Nt=tn[--rn],tn[rn]=null,Bn=tn[--rn],tn[rn]=null,Ln=tn[--rn],tn[rn]=null}var Ke=null,Ye=null,oe=!1,hn=null;function fd(e,n){var t=on(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function $u(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ke=e,Ye=et(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ke=e,Ye=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Nt!==null?{id:Ln,overflow:Bn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=on(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ke=e,Ye=null,!0):!1;default:return!1}}function al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function il(e){if(oe){var n=Ye;if(n){var t=n;if(!$u(e,n)){if(al(e))throw Error(E(418));n=et(t.nextSibling);var r=Ke;n&&$u(e,n)?fd(r,t):(e.flags=e.flags&-4097|2,oe=!1,Ke=e)}}else{if(al(e))throw Error(E(418));e.flags=e.flags&-4097|2,oe=!1,Ke=e}}}function Uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function Po(e){if(e!==Ke)return!1;if(!oe)return Uu(e),oe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!nl(e.type,e.memoizedProps)),n&&(n=Ye)){if(al(e))throw pd(),Error(E(418));for(;n;)fd(e,n),n=et(n.nextSibling)}if(Uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ye=et(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ye=null}}else Ye=Ke?et(e.stateNode.nextSibling):null;return!0}function pd(){for(var e=Ye;e;)e=et(e.nextSibling)}function nr(){Ye=Ke=null,oe=!1}function $l(e){hn===null?hn=[e]:hn.push(e)}var K0=Hn.ReactCurrentBatchConfig;function kr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var o=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},n._stringRef=a,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function zo(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Vu(e){var n=e._init;return n(e._payload)}function md(e){function n(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=ot(p,d),p.index=0,p.sibling=null,p}function a(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,h,T){return d===null||d.tag!==6?(d=Mi(h,p.mode,T),d.return=p,d):(d=o(d,h),d.return=p,d)}function s(p,d,h,T){var P=h.type;return P===Ot?g(p,d,h.props.children,T,h.key):d!==null&&(d.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Wn&&Vu(P)===d.type)?(T=o(d,h.props),T.ref=kr(p,d,h),T.return=p,T):(T=Wo(h.type,h.key,h.props,null,p.mode,T),T.ref=kr(p,d,h),T.return=p,T)}function u(p,d,h,T){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Pi(h,p.mode,T),d.return=p,d):(d=o(d,h.children||[]),d.return=p,d)}function g(p,d,h,T,P){return d===null||d.tag!==7?(d=St(h,p.mode,T,P),d.return=p,d):(d=o(d,h),d.return=p,d)}function v(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Mi(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yo:return h=Wo(d.type,d.key,d.props,null,p.mode,h),h.ref=kr(p,null,d),h.return=p,h;case Dt:return d=Pi(d,p.mode,h),d.return=p,d;case Wn:var T=d._init;return v(p,T(d._payload),h)}if(Nr(d)||gr(d))return d=St(d,p.mode,h,null),d.return=p,d;zo(p,d)}return null}function m(p,d,h,T){var P=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return P!==null?null:l(p,d,""+h,T);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yo:return h.key===P?s(p,d,h,T):null;case Dt:return h.key===P?u(p,d,h,T):null;case Wn:return P=h._init,m(p,d,P(h._payload),T)}if(Nr(h)||gr(h))return P!==null?null:g(p,d,h,T,null);zo(p,h)}return null}function k(p,d,h,T,P){if(typeof T=="string"&&T!==""||typeof T=="number")return p=p.get(h)||null,l(d,p,""+T,P);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case yo:return p=p.get(T.key===null?h:T.key)||null,s(d,p,T,P);case Dt:return p=p.get(T.key===null?h:T.key)||null,u(d,p,T,P);case Wn:var _=T._init;return k(p,d,h,_(T._payload),P)}if(Nr(T)||gr(T))return p=p.get(h)||null,g(d,p,T,P,null);zo(d,T)}return null}function x(p,d,h,T){for(var P=null,_=null,M=d,N=d=0,F=null;M!==null&&N<h.length;N++){M.index>N?(F=M,M=null):F=M.sibling;var L=m(p,M,h[N],T);if(L===null){M===null&&(M=F);break}e&&M&&L.alternate===null&&n(p,M),d=a(L,d,N),_===null?P=L:_.sibling=L,_=L,M=F}if(N===h.length)return t(p,M),oe&&yt(p,N),P;if(M===null){for(;N<h.length;N++)M=v(p,h[N],T),M!==null&&(d=a(M,d,N),_===null?P=M:_.sibling=M,_=M);return oe&&yt(p,N),P}for(M=r(p,M);N<h.length;N++)F=k(M,p,N,h[N],T),F!==null&&(e&&F.alternate!==null&&M.delete(F.key===null?N:F.key),d=a(F,d,N),_===null?P=F:_.sibling=F,_=F);return e&&M.forEach(function(ne){return n(p,ne)}),oe&&yt(p,N),P}function C(p,d,h,T){var P=gr(h);if(typeof P!="function")throw Error(E(150));if(h=P.call(h),h==null)throw Error(E(151));for(var _=P=null,M=d,N=d=0,F=null,L=h.next();M!==null&&!L.done;N++,L=h.next()){M.index>N?(F=M,M=null):F=M.sibling;var ne=m(p,M,L.value,T);if(ne===null){M===null&&(M=F);break}e&&M&&ne.alternate===null&&n(p,M),d=a(ne,d,N),_===null?P=ne:_.sibling=ne,_=ne,M=F}if(L.done)return t(p,M),oe&&yt(p,N),P;if(M===null){for(;!L.done;N++,L=h.next())L=v(p,L.value,T),L!==null&&(d=a(L,d,N),_===null?P=L:_.sibling=L,_=L);return oe&&yt(p,N),P}for(M=r(p,M);!L.done;N++,L=h.next())L=k(M,p,N,L.value,T),L!==null&&(e&&L.alternate!==null&&M.delete(L.key===null?N:L.key),d=a(L,d,N),_===null?P=L:_.sibling=L,_=L);return e&&M.forEach(function(Oe){return n(p,Oe)}),oe&&yt(p,N),P}function I(p,d,h,T){if(typeof h=="object"&&h!==null&&h.type===Ot&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case yo:e:{for(var P=h.key,_=d;_!==null;){if(_.key===P){if(P=h.type,P===Ot){if(_.tag===7){t(p,_.sibling),d=o(_,h.props.children),d.return=p,p=d;break e}}else if(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Wn&&Vu(P)===_.type){t(p,_.sibling),d=o(_,h.props),d.ref=kr(p,_,h),d.return=p,p=d;break e}t(p,_);break}else n(p,_);_=_.sibling}h.type===Ot?(d=St(h.props.children,p.mode,T,h.key),d.return=p,p=d):(T=Wo(h.type,h.key,h.props,null,p.mode,T),T.ref=kr(p,d,h),T.return=p,p=T)}return i(p);case Dt:e:{for(_=h.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(p,d.sibling),d=o(d,h.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=Pi(h,p.mode,T),d.return=p,p=d}return i(p);case Wn:return _=h._init,I(p,d,_(h._payload),T)}if(Nr(h))return x(p,d,h,T);if(gr(h))return C(p,d,h,T);zo(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(t(p,d.sibling),d=o(d,h),d.return=p,p=d):(t(p,d),d=Mi(h,p.mode,T),d.return=p,p=d),i(p)):t(p,d)}return I}var tr=md(!0),hd=md(!1),aa=st(null),ia=null,Vt=null,Ul=null;function Vl(){Ul=Vt=ia=null}function Wl(e){var n=aa.current;ee(aa),e._currentValue=n}function ll(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Xt(e,n){ia=e,Ul=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Fe=!0),e.firstContext=null)}function ln(e){var n=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:n,next:null},Vt===null){if(ia===null)throw Error(E(308));Vt=e,ia.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return n}var kt=null;function Yl(e){kt===null?kt=[e]:kt.push(e)}function gd(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Yl(n)):(t.next=o.next,o.next=t),n.interleaved=t,Fn(e,r)}function Fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Yn=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function nt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Fn(e,t)}return o=r.interleaved,o===null?(n.next=n,Yl(r)):(n.next=o.next,o.next=n),r.interleaved=n,Fn(e,t)}function Ao(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zl(e,t)}}function Wu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?o=a=i:a=a.next=i,t=t.next}while(t!==null);a===null?o=a=n:a=a.next=n}else o=a=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function la(e,n,t,r){var o=e.updateQueue;Yn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==i&&(l===null?g.firstBaseUpdate=u:l.next=u,g.lastBaseUpdate=s))}if(a!==null){var v=o.baseState;i=0,g=u=s=null,l=a;do{var m=l.lane,k=l.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,C=l;switch(m=n,k=t,C.tag){case 1:if(x=C.payload,typeof x=="function"){v=x.call(k,v,m);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,m=typeof x=="function"?x.call(k,v,m):x,m==null)break e;v=se({},v,m);break e;case 2:Yn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else k={eventTime:k,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(u=g=k,s=v):g=g.next=k,i|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(g===null&&(s=v),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=g,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else a===null&&(o.shared.lanes=0);_t|=i,e.lanes=i,e.memoizedState=v}}function Yu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var ro={},_n=st(ro),Gr=st(ro),Qr=st(ro);function wt(e){if(e===ro)throw Error(E(174));return e}function Gl(e,n){switch(X(Qr,n),X(Gr,e),X(_n,ro),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ji(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ji(n,e)}ee(_n),X(_n,n)}function rr(){ee(_n),ee(Gr),ee(Qr)}function vd(e){wt(Qr.current);var n=wt(_n.current),t=ji(n,e.type);n!==t&&(X(Gr,e),X(_n,t))}function Ql(e){Gr.current===e&&(ee(_n),ee(Gr))}var ie=st(0);function sa(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ci=[];function Jl(){for(var e=0;e<Ci.length;e++)Ci[e]._workInProgressVersionPrimary=null;Ci.length=0}var Ho=Hn.ReactCurrentDispatcher,Ni=Hn.ReactCurrentBatchConfig,Tt=0,le=null,ge=null,ve=null,ua=!1,Lr=!1,Jr=0,G0=0;function _e(){throw Error(E(321))}function Xl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!vn(e[t],n[t]))return!1;return!0}function ql(e,n,t,r,o,a){if(Tt=a,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ho.current=e===null||e.memoizedState===null?q0:Z0,e=t(r,o),Lr){a=0;do{if(Lr=!1,Jr=0,25<=a)throw Error(E(301));a+=1,ve=ge=null,n.updateQueue=null,Ho.current=em,e=t(r,o)}while(Lr)}if(Ho.current=ca,n=ge!==null&&ge.next!==null,Tt=0,ve=ge=le=null,ua=!1,n)throw Error(E(300));return e}function Zl(){var e=Jr!==0;return Jr=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?le.memoizedState=ve=e:ve=ve.next=e,ve}function sn(){if(ge===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var n=ve===null?le.memoizedState:ve.next;if(n!==null)ve=n,ge=e;else{if(e===null)throw Error(E(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ve===null?le.memoizedState=ve=e:ve=ve.next=e}return ve}function Xr(e,n){return typeof n=="function"?n(e):n}function Ti(e){var n=sn(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=ge,o=r.baseQueue,a=t.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,t.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var g=u.lane;if((Tt&g)===g)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var v={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=v,i=r):s=s.next=v,le.lanes|=g,_t|=g}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,vn(r,n.memoizedState)||(Fe=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do a=o.lane,le.lanes|=a,_t|=a,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function _i(e){var n=sn(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,a=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);vn(a,n.memoizedState)||(Fe=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function xd(){}function kd(e,n){var t=le,r=sn(),o=n(),a=!vn(r.memoizedState,o);if(a&&(r.memoizedState=o,Fe=!0),r=r.queue,es(Sd.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||ve!==null&&ve.memoizedState.tag&1){if(t.flags|=2048,qr(9,bd.bind(null,t,r,o,n),void 0,null),xe===null)throw Error(E(349));Tt&30||wd(t,n,o)}return o}function wd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function bd(e,n,t,r){n.value=t,n.getSnapshot=r,Cd(n)&&Nd(e)}function Sd(e,n,t){return t(function(){Cd(n)&&Nd(e)})}function Cd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!vn(e,t)}catch{return!0}}function Nd(e){var n=Fn(e,1);n!==null&&yn(n,e,1,-1)}function Ku(e){var n=Cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},n.queue=e,e=e.dispatch=X0.bind(null,le,e),[n.memoizedState,e]}function qr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Td(){return sn().memoizedState}function jo(e,n,t,r){var o=Cn();le.flags|=e,o.memoizedState=qr(1|n,t,void 0,r===void 0?null:r)}function ba(e,n,t,r){var o=sn();r=r===void 0?null:r;var a=void 0;if(ge!==null){var i=ge.memoizedState;if(a=i.destroy,r!==null&&Xl(r,i.deps)){o.memoizedState=qr(n,t,a,r);return}}le.flags|=e,o.memoizedState=qr(1|n,t,a,r)}function Gu(e,n){return jo(8390656,8,e,n)}function es(e,n){return ba(2048,8,e,n)}function _d(e,n){return ba(4,2,e,n)}function Ed(e,n){return ba(4,4,e,n)}function Rd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Md(e,n,t){return t=t!=null?t.concat([e]):null,ba(4,4,Rd.bind(null,n,e),t)}function ns(){}function Pd(e,n){var t=sn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Xl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function zd(e,n){var t=sn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Xl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ld(e,n,t){return Tt&21?(vn(t,n)||(t=Fc(),le.lanes|=t,_t|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=t)}function Q0(e,n){var t=K;K=t!==0&&4>t?t:4,e(!0);var r=Ni.transition;Ni.transition={};try{e(!1),n()}finally{K=t,Ni.transition=r}}function Bd(){return sn().memoizedState}function J0(e,n,t){var r=rt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Dd(e))Od(n,t);else if(t=gd(e,n,t,r),t!==null){var o=Le();yn(t,e,r,o),Id(t,n,r)}}function X0(e,n,t){var r=rt(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Dd(e))Od(n,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var i=n.lastRenderedState,l=a(i,t);if(o.hasEagerState=!0,o.eagerState=l,vn(l,i)){var s=n.interleaved;s===null?(o.next=o,Yl(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=gd(e,n,o,r),t!==null&&(o=Le(),yn(t,e,r,o),Id(t,n,r))}}function Dd(e){var n=e.alternate;return e===le||n!==null&&n===le}function Od(e,n){Lr=ua=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Id(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zl(e,t)}}var ca={readContext:ln,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},q0={readContext:ln,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:ln,useEffect:Gu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,jo(4194308,4,Rd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return jo(4194308,4,e,n)},useInsertionEffect:function(e,n){return jo(4,2,e,n)},useMemo:function(e,n){var t=Cn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Cn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=J0.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:Ku,useDebugValue:ns,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=Ku(!1),n=e[0];return e=Q0.bind(null,e[1]),Cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=le,o=Cn();if(oe){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),xe===null)throw Error(E(349));Tt&30||wd(r,n,t)}o.memoizedState=t;var a={value:t,getSnapshot:n};return o.queue=a,Gu(Sd.bind(null,r,a,e),[e]),r.flags|=2048,qr(9,bd.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=Cn(),n=xe.identifierPrefix;if(oe){var t=Bn,r=Ln;t=(r&~(1<<32-gn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=G0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Z0={readContext:ln,useCallback:Pd,useContext:ln,useEffect:es,useImperativeHandle:Md,useInsertionEffect:_d,useLayoutEffect:Ed,useMemo:zd,useReducer:Ti,useRef:Td,useState:function(){return Ti(Xr)},useDebugValue:ns,useDeferredValue:function(e){var n=sn();return Ld(n,ge.memoizedState,e)},useTransition:function(){var e=Ti(Xr)[0],n=sn().memoizedState;return[e,n]},useMutableSource:xd,useSyncExternalStore:kd,useId:Bd,unstable_isNewReconciler:!1},em={readContext:ln,useCallback:Pd,useContext:ln,useEffect:es,useImperativeHandle:Md,useInsertionEffect:_d,useLayoutEffect:Ed,useMemo:zd,useReducer:_i,useRef:Td,useState:function(){return _i(Xr)},useDebugValue:ns,useDeferredValue:function(e){var n=sn();return ge===null?n.memoizedState=e:Ld(n,ge.memoizedState,e)},useTransition:function(){var e=_i(Xr)[0],n=sn().memoizedState;return[e,n]},useMutableSource:xd,useSyncExternalStore:kd,useId:Bd,unstable_isNewReconciler:!1};function pn(e,n){if(e&&e.defaultProps){n=se({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function sl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:se({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Sa={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Le(),o=rt(e),a=Dn(r,o);a.payload=n,t!=null&&(a.callback=t),n=nt(e,a,o),n!==null&&(yn(n,e,o,r),Ao(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Le(),o=rt(e),a=Dn(r,o);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=nt(e,a,o),n!==null&&(yn(n,e,o,r),Ao(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Le(),r=rt(e),o=Dn(t,r);o.tag=2,n!=null&&(o.callback=n),n=nt(e,o,r),n!==null&&(yn(n,e,r,t),Ao(n,e,r))}};function Qu(e,n,t,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):n.prototype&&n.prototype.isPureReactComponent?!Vr(t,r)||!Vr(o,a):!0}function Fd(e,n,t){var r=!1,o=it,a=n.contextType;return typeof a=="object"&&a!==null?a=ln(a):(o=He(n)?Ct:Me.current,r=n.contextTypes,a=(r=r!=null)?er(e,o):it),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Sa,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),n}function Ju(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Sa.enqueueReplaceState(n,n.state,null)}function ul(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Kl(e);var a=n.contextType;typeof a=="object"&&a!==null?o.context=ln(a):(a=He(n)?Ct:Me.current,o.context=er(e,a)),o.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(sl(e,n,a,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Sa.enqueueReplaceState(o,o.state,null),la(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,n){try{var t="",r=n;do t+=Mp(r),r=r.return;while(r);var o=t}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:o,digest:null}}function Ei(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function cl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var nm=typeof WeakMap=="function"?WeakMap:Map;function Ad(e,n,t){t=Dn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){fa||(fa=!0,kl=r),cl(e,n)},t}function Hd(e,n,t){t=Dn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){cl(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){cl(e,n),typeof r!="function"&&(tt===null?tt=new Set([this]):tt.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Xu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new nm;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=hm.bind(null,e,n,t),n.then(e,e))}function qu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Zu(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Dn(-1,1),n.tag=2,nt(t,n,1))),t.lanes|=1),e)}var tm=Hn.ReactCurrentOwner,Fe=!1;function ze(e,n,t,r){n.child=e===null?hd(n,null,t,r):tr(n,e.child,t,r)}function ec(e,n,t,r,o){t=t.render;var a=n.ref;return Xt(n,o),r=ql(e,n,t,r,a,o),t=Zl(),e!==null&&!Fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,An(e,n,o)):(oe&&t&&Hl(n),n.flags|=1,ze(e,n,r,o),n.child)}function nc(e,n,t,r,o){if(e===null){var a=t.type;return typeof a=="function"&&!us(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,jd(e,n,a,r,o)):(e=Wo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&o)){var i=a.memoizedProps;if(t=t.compare,t=t!==null?t:Vr,t(i,r)&&e.ref===n.ref)return An(e,n,o)}return n.flags|=1,e=ot(a,r),e.ref=n.ref,e.return=n,n.child=e}function jd(e,n,t,r,o){if(e!==null){var a=e.memoizedProps;if(Vr(a,r)&&e.ref===n.ref)if(Fe=!1,n.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(Fe=!0);else return n.lanes=e.lanes,An(e,n,o)}return dl(e,n,t,r,o)}function $d(e,n,t){var r=n.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Yt,We),We|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,X(Yt,We),We|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,X(Yt,We),We|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,X(Yt,We),We|=r;return ze(e,n,o,t),n.child}function Ud(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function dl(e,n,t,r,o){var a=He(t)?Ct:Me.current;return a=er(n,a),Xt(n,o),t=ql(e,n,t,r,a,o),r=Zl(),e!==null&&!Fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,An(e,n,o)):(oe&&r&&Hl(n),n.flags|=1,ze(e,n,t,o),n.child)}function tc(e,n,t,r,o){if(He(t)){var a=!0;ta(n)}else a=!1;if(Xt(n,o),n.stateNode===null)$o(e,n),Fd(n,t,r),ul(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var s=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=ln(u):(u=He(t)?Ct:Me.current,u=er(n,u));var g=t.getDerivedStateFromProps,v=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Ju(n,i,r,u),Yn=!1;var m=n.memoizedState;i.state=m,la(n,r,i,o),s=n.memoizedState,l!==r||m!==s||Ae.current||Yn?(typeof g=="function"&&(sl(n,t,g,r),s=n.memoizedState),(l=Yn||Qu(n,t,l,r,m,s,u))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,yd(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:pn(n.type,l),i.props=u,v=n.pendingProps,m=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=ln(s):(s=He(t)?Ct:Me.current,s=er(n,s));var k=t.getDerivedStateFromProps;(g=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==v||m!==s)&&Ju(n,i,r,s),Yn=!1,m=n.memoizedState,i.state=m,la(n,r,i,o);var x=n.memoizedState;l!==v||m!==x||Ae.current||Yn?(typeof k=="function"&&(sl(n,t,k,r),x=n.memoizedState),(u=Yn||Qu(n,t,u,r,m,x,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),i.props=r,i.state=x,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return fl(e,n,t,r,a,o)}function fl(e,n,t,r,o,a){Ud(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return o&&ju(n,t,!1),An(e,n,a);r=n.stateNode,tm.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=tr(n,e.child,null,a),n.child=tr(n,null,l,a)):ze(e,n,l,a),n.memoizedState=r.state,o&&ju(n,t,!0),n.child}function Vd(e){var n=e.stateNode;n.pendingContext?Hu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Hu(e,n.context,!1),Gl(e,n.containerInfo)}function rc(e,n,t,r,o){return nr(),$l(o),n.flags|=256,ze(e,n,t,r),n.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wd(e,n,t){var r=n.pendingProps,o=ie.current,a=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(ie,o&1),e===null)return il(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,a?(r=n.mode,a=n.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Ta(i,r,0,null),e=St(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=ml(t),n.memoizedState=pl,e):ts(n,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return rm(e,n,i,r,l,o,t);if(a){a=r.fallback,i=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=ot(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=ot(l,a):(a=St(a,i,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,i=e.child.memoizedState,i=i===null?ml(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~t,n.memoizedState=pl,r}return a=e.child,e=a.sibling,r=ot(a,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ts(e,n){return n=Ta({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Lo(e,n,t,r){return r!==null&&$l(r),tr(n,e.child,null,t),e=ts(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rm(e,n,t,r,o,a,i){if(t)return n.flags&256?(n.flags&=-257,r=Ei(Error(E(422))),Lo(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,o=n.mode,r=Ta({mode:"visible",children:r.children},o,0,null),a=St(a,o,i,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,n.mode&1&&tr(n,e.child,null,i),n.child.memoizedState=ml(i),n.memoizedState=pl,a);if(!(n.mode&1))return Lo(e,n,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(E(419)),r=Ei(a,r,void 0),Lo(e,n,i,r)}if(l=(i&e.childLanes)!==0,Fe||l){if(r=xe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Fn(e,o),yn(r,e,o,-1))}return ss(),r=Ei(Error(E(421))),Lo(e,n,i,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=gm.bind(null,e),o._reactRetry=n,null):(e=a.treeContext,Ye=et(o.nextSibling),Ke=n,oe=!0,hn=null,e!==null&&(tn[rn++]=Ln,tn[rn++]=Bn,tn[rn++]=Nt,Ln=e.id,Bn=e.overflow,Nt=n),n=ts(n,r.children),n.flags|=4096,n)}function oc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ll(e.return,n,t)}function Ri(e,n,t,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=o)}function Yd(e,n,t){var r=n.pendingProps,o=r.revealOrder,a=r.tail;if(ze(e,n,r.children,t),r=ie.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,t,n);else if(e.tag===19)oc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ie,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&sa(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Ri(n,!1,o,t,a);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&sa(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Ri(n,!0,t,null,a);break;case"together":Ri(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function $o(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function An(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_t|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=ot(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ot(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function om(e,n,t){switch(n.tag){case 3:Vd(n),nr();break;case 5:vd(n);break;case 1:He(n.type)&&ta(n);break;case 4:Gl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;X(aa,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),n.flags|=128,null):t&n.child.childLanes?Wd(e,n,t):(X(ie,ie.current&1),e=An(e,n,t),e!==null?e.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Yd(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return n.lanes=0,$d(e,n,t)}return An(e,n,t)}var Kd,hl,Gd,Qd;Kd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};hl=function(){};Gd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,wt(_n.current);var a=null;switch(t){case"input":o=Ii(e,o),r=Ii(e,r),a=[];break;case"select":o=se({},o,{value:void 0}),r=se({},r,{value:void 0}),a=[];break;case"textarea":o=Hi(e,o),r=Hi(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ea)}$i(t,r);var i;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ir.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o?.[u],r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(a||(a=[]),a.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Z("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}t&&(a=a||[]).push("style",t);var u=a;(n.updateQueue=u)&&(n.flags|=4)}};Qd=function(e,n,t,r){t!==r&&(n.flags|=4)};function wr(e,n){if(!oe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function am(e,n,t){var r=n.pendingProps;switch(jl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return He(n.type)&&na(),Ee(n),null;case 3:return r=n.stateNode,rr(),ee(Ae),ee(Me),Jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,hn!==null&&(Sl(hn),hn=null))),hl(e,n),Ee(n),null;case 5:Ql(n);var o=wt(Qr.current);if(t=n.type,e!==null&&n.stateNode!=null)Gd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return Ee(n),null}if(e=wt(_n.current),Po(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[Nn]=n,r[Kr]=a,e=(n.mode&1)!==0,t){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(o=0;o<_r.length;o++)Z(_r[o],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":fu(r,a),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Z("invalid",r);break;case"textarea":mu(r,a),Z("invalid",r)}$i(t,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),o=["children",""+l]):Ir.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Z("scroll",r)}switch(t){case"input":vo(r),pu(r,a,!0);break;case"textarea":vo(r),hu(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ea)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Nn]=n,e[Kr]=r,Kd(e,n,!1,!1),n.stateNode=e;e:{switch(i=Ui(t,r),t){case"dialog":Z("cancel",e),Z("close",e),o=r;break;case"iframe":case"object":case"embed":Z("load",e),o=r;break;case"video":case"audio":for(o=0;o<_r.length;o++)Z(_r[o],e);o=r;break;case"source":Z("error",e),o=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=r;break;case"details":Z("toggle",e),o=r;break;case"input":fu(e,r),o=Ii(e,r),Z("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=se({},r,{value:void 0}),Z("invalid",e);break;case"textarea":mu(e,r),o=Hi(e,r),Z("invalid",e);break;default:o=r}$i(t,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Tc(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Cc(e,s)):a==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Fr(e,s):typeof s=="number"&&Fr(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ir.hasOwnProperty(a)?s!=null&&a==="onScroll"&&Z("scroll",e):s!=null&&Tl(e,a,s,i))}switch(t){case"input":vo(e),pu(e,r,!1);break;case"textarea":vo(e),hu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+at(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Kt(e,!!r.multiple,a,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ea)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ee(n),null;case 6:if(e&&n.stateNode!=null)Qd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=wt(Qr.current),wt(_n.current),Po(n)){if(r=n.stateNode,t=n.memoizedProps,r[Nn]=n,(a=r.nodeValue!==t)&&(e=Ke,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Nn]=n,n.stateNode=r}return Ee(n),null;case 13:if(ee(ie),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ye!==null&&n.mode&1&&!(n.flags&128))pd(),nr(),n.flags|=98560,a=!1;else if(a=Po(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[Nn]=n}else nr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ee(n),a=!1}else hn!==null&&(Sl(hn),hn=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||ie.current&1?ye===0&&(ye=3):ss())),n.updateQueue!==null&&(n.flags|=4),Ee(n),null);case 4:return rr(),hl(e,n),e===null&&Wr(n.stateNode.containerInfo),Ee(n),null;case 10:return Wl(n.type._context),Ee(n),null;case 17:return He(n.type)&&na(),Ee(n),null;case 19:if(ee(ie),a=n.memoizedState,a===null)return Ee(n),null;if(r=(n.flags&128)!==0,i=a.rendering,i===null)if(r)wr(a,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=sa(e),i!==null){for(n.flags|=128,wr(a,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return X(ie,ie.current&1|2),n.child}e=e.sibling}a.tail!==null&&fe()>ar&&(n.flags|=128,r=!0,wr(a,!1),n.lanes=4194304)}else{if(!r)if(e=sa(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!oe)return Ee(n),null}else 2*fe()-a.renderingStartTime>ar&&t!==1073741824&&(n.flags|=128,r=!0,wr(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(t=a.last,t!==null?t.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=fe(),n.sibling=null,t=ie.current,X(ie,r?t&1|2:t&1),n):(Ee(n),null);case 22:case 23:return ls(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?We&1073741824&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function im(e,n){switch(jl(n),n.tag){case 1:return He(n.type)&&na(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rr(),ee(Ae),ee(Me),Jl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ql(n),null;case 13:if(ee(ie),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ee(ie),null;case 4:return rr(),null;case 10:return Wl(n.type._context),null;case 22:case 23:return ls(),null;case 24:return null;default:return null}}var Bo=!1,Re=!1,lm=typeof WeakSet=="function"?WeakSet:Set,z=null;function Wt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){de(e,n,r)}else t.current=null}function gl(e,n,t){try{t()}catch(r){de(e,n,r)}}var ac=!1;function sm(e,n){if(Zi=Xo,e=ed(),Al(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var i=0,l=-1,s=-1,u=0,g=0,v=e,m=null;n:for(;;){for(var k;v!==t||o!==0&&v.nodeType!==3||(l=i+o),v!==a||r!==0&&v.nodeType!==3||(s=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(k=v.firstChild)!==null;)m=v,v=k;for(;;){if(v===e)break n;if(m===t&&++u===o&&(l=i),m===a&&++g===r&&(s=i),(k=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=k}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(el={focusedElem:e,selectionRange:t},Xo=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var C=x.memoizedProps,I=x.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?C:pn(n.type,C),I);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(T){de(n,n.return,T)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return x=ac,ac=!1,x}function Br(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&gl(n,t,a)}o=o.next}while(o!==r)}}function Ca(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function yl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Jd(e){var n=e.alternate;n!==null&&(e.alternate=null,Jd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Nn],delete n[Kr],delete n[rl],delete n[V0],delete n[W0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xd(e){return e.tag===5||e.tag===3||e.tag===4}function ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ea));else if(r!==4&&(e=e.child,e!==null))for(vl(e,n,t),e=e.sibling;e!==null;)vl(e,n,t),e=e.sibling}function xl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xl(e,n,t),e=e.sibling;e!==null;)xl(e,n,t),e=e.sibling}var we=null,mn=!1;function Vn(e,n,t){for(t=t.child;t!==null;)qd(e,n,t),t=t.sibling}function qd(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(ga,t)}catch{}switch(t.tag){case 5:Re||Wt(t,n);case 6:var r=we,o=mn;we=null,Vn(e,n,t),we=r,mn=o,we!==null&&(mn?(e=we,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):we.removeChild(t.stateNode));break;case 18:we!==null&&(mn?(e=we,t=t.stateNode,e.nodeType===8?bi(e.parentNode,t):e.nodeType===1&&bi(e,t),$r(e)):bi(we,t.stateNode));break;case 4:r=we,o=mn,we=t.stateNode.containerInfo,mn=!0,Vn(e,n,t),we=r,mn=o;break;case 0:case 11:case 14:case 15:if(!Re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&gl(t,n,i),o=o.next}while(o!==r)}Vn(e,n,t);break;case 1:if(!Re&&(Wt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){de(t,n,l)}Vn(e,n,t);break;case 21:Vn(e,n,t);break;case 22:t.mode&1?(Re=(r=Re)||t.memoizedState!==null,Vn(e,n,t),Re=r):Vn(e,n,t);break;default:Vn(e,n,t)}}function lc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new lm),n.forEach(function(r){var o=ym.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function fn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var a=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:we=l.stateNode,mn=!1;break e;case 3:we=l.stateNode.containerInfo,mn=!0;break e;case 4:we=l.stateNode.containerInfo,mn=!0;break e}l=l.return}if(we===null)throw Error(E(160));qd(a,i,o),we=null,mn=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){de(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Zd(n,e),n=n.sibling}function Zd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fn(n,e),Sn(e),r&4){try{Br(3,e,e.return),Ca(3,e)}catch(C){de(e,e.return,C)}try{Br(5,e,e.return)}catch(C){de(e,e.return,C)}}break;case 1:fn(n,e),Sn(e),r&512&&t!==null&&Wt(t,t.return);break;case 5:if(fn(n,e),Sn(e),r&512&&t!==null&&Wt(t,t.return),e.flags&32){var o=e.stateNode;try{Fr(o,"")}catch(C){de(e,e.return,C)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=t!==null?t.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&wc(o,a),Ui(l,i);var u=Ui(l,a);for(i=0;i<s.length;i+=2){var g=s[i],v=s[i+1];g==="style"?Tc(o,v):g==="dangerouslySetInnerHTML"?Cc(o,v):g==="children"?Fr(o,v):Tl(o,g,v,u)}switch(l){case"input":Fi(o,a);break;case"textarea":bc(o,a);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var k=a.value;k!=null?Kt(o,!!a.multiple,k,!1):m!==!!a.multiple&&(a.defaultValue!=null?Kt(o,!!a.multiple,a.defaultValue,!0):Kt(o,!!a.multiple,a.multiple?[]:"",!1))}o[Kr]=a}catch(C){de(e,e.return,C)}}break;case 6:if(fn(n,e),Sn(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(C){de(e,e.return,C)}}break;case 3:if(fn(n,e),Sn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{$r(n.containerInfo)}catch(C){de(e,e.return,C)}break;case 4:fn(n,e),Sn(e);break;case 13:fn(n,e),Sn(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(as=fe())),r&4&&lc(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(Re=(u=Re)||g,fn(n,e),Re=u):fn(n,e),Sn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(z=e,g=e.child;g!==null;){for(v=z=g;z!==null;){switch(m=z,k=m.child,m.tag){case 0:case 11:case 14:case 15:Br(4,m,m.return);break;case 1:Wt(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(C){de(r,t,C)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){uc(v);continue}}k!==null?(k.return=m,z=k):uc(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{o=v.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=v.stateNode,s=v.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Nc("display",i))}catch(C){de(e,e.return,C)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(C){de(e,e.return,C)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:fn(n,e),Sn(e),r&4&&lc(e);break;case 21:break;default:fn(n,e),Sn(e)}}function Sn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Xd(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Fr(o,""),r.flags&=-33);var a=ic(e);xl(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=ic(e);vl(e,l,i);break;default:throw Error(E(161))}}catch(s){de(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function um(e,n,t){z=e,ef(e,n,t)}function ef(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var o=z,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Bo;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Re;l=Bo;var u=Re;if(Bo=i,(Re=s)&&!u)for(z=o;z!==null;)i=z,s=i.child,i.tag===22&&i.memoizedState!==null?cc(o):s!==null?(s.return=i,z=s):cc(o);for(;a!==null;)z=a,ef(a,n,t),a=a.sibling;z=o,Bo=l,Re=u}sc(e,n,t)}else o.subtreeFlags&8772&&a!==null?(a.return=o,z=a):sc(e,n,t)}}function sc(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Re||Ca(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Re)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:pn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Yu(n,a,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Yu(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&$r(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Re||n.flags&512&&yl(n)}catch(m){de(n,n.return,m)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function uc(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function cc(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ca(4,n)}catch(s){de(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){de(n,o,s)}}var a=n.return;try{yl(n)}catch(s){de(n,a,s)}break;case 5:var i=n.return;try{yl(n)}catch(s){de(n,i,s)}}}catch(s){de(n,n.return,s)}if(n===e){z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,z=l;break}z=n.return}}var cm=Math.ceil,da=Hn.ReactCurrentDispatcher,rs=Hn.ReactCurrentOwner,an=Hn.ReactCurrentBatchConfig,U=0,xe=null,he=null,be=0,We=0,Yt=st(0),ye=0,Zr=null,_t=0,Na=0,os=0,Dr=null,Ie=null,as=0,ar=1/0,Pn=null,fa=!1,kl=null,tt=null,Do=!1,Jn=null,pa=0,Or=0,wl=null,Uo=-1,Vo=0;function Le(){return U&6?fe():Uo!==-1?Uo:Uo=fe()}function rt(e){return e.mode&1?U&2&&be!==0?be&-be:K0.transition!==null?(Vo===0&&(Vo=Fc()),Vo):(e=K,e!==0||(e=window.event,e=e===void 0?16:Wc(e.type)),e):1}function yn(e,n,t,r){if(50<Or)throw Or=0,wl=null,Error(E(185));eo(e,t,r),(!(U&2)||e!==xe)&&(e===xe&&(!(U&2)&&(Na|=t),ye===4&&Gn(e,be)),je(e,r),t===1&&U===0&&!(n.mode&1)&&(ar=fe()+500,wa&&ut()))}function je(e,n){var t=e.callbackNode;Qp(e,n);var r=Jo(e,e===xe?be:0);if(r===0)t!==null&&vu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&vu(t),n===1)e.tag===0?Y0(dc.bind(null,e)):cd(dc.bind(null,e)),$0(function(){!(U&6)&&ut()}),t=null;else{switch(Ac(r)){case 1:t=Pl;break;case 4:t=Oc;break;case 16:t=Qo;break;case 536870912:t=Ic;break;default:t=Qo}t=uf(t,nf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function nf(e,n){if(Uo=-1,Vo=0,U&6)throw Error(E(327));var t=e.callbackNode;if(qt()&&e.callbackNode!==t)return null;var r=Jo(e,e===xe?be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ma(e,r);else{n=r;var o=U;U|=2;var a=rf();(xe!==e||be!==n)&&(Pn=null,ar=fe()+500,bt(e,n));do try{pm();break}catch(l){tf(e,l)}while(!0);Vl(),da.current=a,U=o,he!==null?n=0:(xe=null,be=0,n=ye)}if(n!==0){if(n===2&&(o=Gi(e),o!==0&&(r=o,n=bl(e,o))),n===1)throw t=Zr,bt(e,0),Gn(e,r),je(e,fe()),t;if(n===6)Gn(e,r);else{if(o=e.current.alternate,!(r&30)&&!dm(o)&&(n=ma(e,r),n===2&&(a=Gi(e),a!==0&&(r=a,n=bl(e,a))),n===1))throw t=Zr,bt(e,0),Gn(e,r),je(e,fe()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:vt(e,Ie,Pn);break;case 3:if(Gn(e,r),(r&130023424)===r&&(n=as+500-fe(),10<n)){if(Jo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=tl(vt.bind(null,e,Ie,Pn),n);break}vt(e,Ie,Pn);break;case 4:if(Gn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var i=31-gn(r);a=1<<i,i=n[i],i>o&&(o=i),r&=~a}if(r=o,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cm(r/1960))-r,10<r){e.timeoutHandle=tl(vt.bind(null,e,Ie,Pn),r);break}vt(e,Ie,Pn);break;case 5:vt(e,Ie,Pn);break;default:throw Error(E(329))}}}return je(e,fe()),e.callbackNode===t?nf.bind(null,e):null}function bl(e,n){var t=Dr;return e.current.memoizedState.isDehydrated&&(bt(e,n).flags|=256),e=ma(e,n),e!==2&&(n=Ie,Ie=t,n!==null&&Sl(n)),e}function Sl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function dm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],a=o.getSnapshot;o=o.value;try{if(!vn(a(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Gn(e,n){for(n&=~os,n&=~Na,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-gn(n),r=1<<t;e[t]=-1,n&=~r}}function dc(e){if(U&6)throw Error(E(327));qt();var n=Jo(e,0);if(!(n&1))return je(e,fe()),null;var t=ma(e,n);if(e.tag!==0&&t===2){var r=Gi(e);r!==0&&(n=r,t=bl(e,r))}if(t===1)throw t=Zr,bt(e,0),Gn(e,n),je(e,fe()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vt(e,Ie,Pn),je(e,fe()),null}function is(e,n){var t=U;U|=1;try{return e(n)}finally{U=t,U===0&&(ar=fe()+500,wa&&ut())}}function Et(e){Jn!==null&&Jn.tag===0&&!(U&6)&&qt();var n=U;U|=1;var t=an.transition,r=K;try{if(an.transition=null,K=1,e)return e()}finally{K=r,an.transition=t,U=n,!(U&6)&&ut()}}function ls(){We=Yt.current,ee(Yt)}function bt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,j0(t)),he!==null)for(t=he.return;t!==null;){var r=t;switch(jl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:rr(),ee(Ae),ee(Me),Jl();break;case 5:Ql(r);break;case 4:rr();break;case 13:ee(ie);break;case 19:ee(ie);break;case 10:Wl(r.type._context);break;case 22:case 23:ls()}t=t.return}if(xe=e,he=e=ot(e.current,null),be=We=n,ye=0,Zr=null,os=Na=_t=0,Ie=Dr=null,kt!==null){for(n=0;n<kt.length;n++)if(t=kt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,a=t.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}t.pending=r}kt=null}return e}function tf(e,n){do{var t=he;try{if(Vl(),Ho.current=ca,ua){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ua=!1}if(Tt=0,ve=ge=le=null,Lr=!1,Jr=0,rs.current=null,t===null||t.return===null){ye=1,Zr=n,he=null;break}e:{var a=e,i=t.return,l=t,s=n;if(n=be,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,g=l,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var k=qu(i);if(k!==null){k.flags&=-257,Zu(k,i,l,a,n),k.mode&1&&Xu(a,u,n),n=k,s=u;var x=n.updateQueue;if(x===null){var C=new Set;C.add(s),n.updateQueue=C}else x.add(s);break e}else{if(!(n&1)){Xu(a,u,n),ss();break e}s=Error(E(426))}}else if(oe&&l.mode&1){var I=qu(i);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Zu(I,i,l,a,n),$l(or(s,l));break e}}a=s=or(s,l),ye!==4&&(ye=2),Dr===null?Dr=[a]:Dr.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var p=Ad(a,s,n);Wu(a,p);break e;case 1:l=s;var d=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tt===null||!tt.has(h)))){a.flags|=65536,n&=-n,a.lanes|=n;var T=Hd(a,l,n);Wu(a,T);break e}}a=a.return}while(a!==null)}af(t)}catch(P){n=P,he===t&&t!==null&&(he=t=t.return);continue}break}while(!0)}function rf(){var e=da.current;return da.current=ca,e===null?ca:e}function ss(){(ye===0||ye===3||ye===2)&&(ye=4),xe===null||!(_t&268435455)&&!(Na&268435455)||Gn(xe,be)}function ma(e,n){var t=U;U|=2;var r=rf();(xe!==e||be!==n)&&(Pn=null,bt(e,n));do try{fm();break}catch(o){tf(e,o)}while(!0);if(Vl(),U=t,da.current=r,he!==null)throw Error(E(261));return xe=null,be=0,ye}function fm(){for(;he!==null;)of(he)}function pm(){for(;he!==null&&!Hp();)of(he)}function of(e){var n=sf(e.alternate,e,We);e.memoizedProps=e.pendingProps,n===null?af(e):he=n,rs.current=null}function af(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=im(t,n),t!==null){t.flags&=32767,he=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,he=null;return}}else if(t=am(t,n,We),t!==null){he=t;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);ye===0&&(ye=5)}function vt(e,n,t){var r=K,o=an.transition;try{an.transition=null,K=1,mm(e,n,t,r)}finally{an.transition=o,K=r}return null}function mm(e,n,t,r){do qt();while(Jn!==null);if(U&6)throw Error(E(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Jp(e,a),e===xe&&(he=xe=null,be=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Do||(Do=!0,uf(Qo,function(){return qt(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=an.transition,an.transition=null;var i=K;K=1;var l=U;U|=4,rs.current=null,sm(e,t),Zd(t,e),O0(el),Xo=!!Zi,el=Zi=null,e.current=t,um(t,e,o),jp(),U=l,K=i,an.transition=a}else e.current=t;if(Do&&(Do=!1,Jn=e,pa=o),a=e.pendingLanes,a===0&&(tt=null),Vp(t.stateNode,r),je(e,fe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(fa)throw fa=!1,e=kl,kl=null,e;return pa&1&&e.tag!==0&&qt(),a=e.pendingLanes,a&1?e===wl?Or++:(Or=0,wl=e):Or=0,ut(),null}function qt(){if(Jn!==null){var e=Ac(pa),n=an.transition,t=K;try{if(an.transition=null,K=16>e?16:e,Jn===null)var r=!1;else{if(e=Jn,Jn=null,pa=0,U&6)throw Error(E(331));var o=U;for(U|=4,z=e.current;z!==null;){var a=z,i=a.child;if(z.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(z=u;z!==null;){var g=z;switch(g.tag){case 0:case 11:case 15:Br(8,g,a)}var v=g.child;if(v!==null)v.return=g,z=v;else for(;z!==null;){g=z;var m=g.sibling,k=g.return;if(Jd(g),g===u){z=null;break}if(m!==null){m.return=k,z=m;break}z=k}}}var x=a.alternate;if(x!==null){var C=x.child;if(C!==null){x.child=null;do{var I=C.sibling;C.sibling=null,C=I}while(C!==null)}}z=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,z=i;else e:for(;z!==null;){if(a=z,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Br(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,z=p;break e}z=a.return}}var d=e.current;for(z=d;z!==null;){i=z;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,z=h;else e:for(i=d;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ca(9,l)}}catch(P){de(l,l.return,P)}if(l===i){z=null;break e}var T=l.sibling;if(T!==null){T.return=l.return,z=T;break e}z=l.return}}if(U=o,ut(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(ga,e)}catch{}r=!0}return r}finally{K=t,an.transition=n}}return!1}function fc(e,n,t){n=or(t,n),n=Ad(e,n,1),e=nt(e,n,1),n=Le(),e!==null&&(eo(e,1,n),je(e,n))}function de(e,n,t){if(e.tag===3)fc(e,e,t);else for(;n!==null;){if(n.tag===3){fc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tt===null||!tt.has(r))){e=or(t,e),e=Hd(n,e,1),n=nt(n,e,1),e=Le(),n!==null&&(eo(n,1,e),je(n,e));break}}n=n.return}}function hm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Le(),e.pingedLanes|=e.suspendedLanes&t,xe===e&&(be&t)===t&&(ye===4||ye===3&&(be&130023424)===be&&500>fe()-as?bt(e,0):os|=t),je(e,n)}function lf(e,n){n===0&&(e.mode&1?(n=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):n=1);var t=Le();e=Fn(e,n),e!==null&&(eo(e,n,t),je(e,t))}function gm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),lf(e,t)}function ym(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),lf(e,t)}var sf;sf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ae.current)Fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Fe=!1,om(e,n,t);Fe=!!(e.flags&131072)}else Fe=!1,oe&&n.flags&1048576&&dd(n,oa,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;$o(e,n),e=n.pendingProps;var o=er(n,Me.current);Xt(n,t),o=ql(null,n,r,e,o,t);var a=Zl();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,He(r)?(a=!0,ta(n)):a=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Kl(n),o.updater=Sa,n.stateNode=o,o._reactInternals=n,ul(n,r,e,t),n=fl(null,n,r,!0,a,t)):(n.tag=0,oe&&a&&Hl(n),ze(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch($o(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=xm(r),e=pn(r,e),o){case 0:n=dl(null,n,r,e,t);break e;case 1:n=tc(null,n,r,e,t);break e;case 11:n=ec(null,n,r,e,t);break e;case 14:n=nc(null,n,r,pn(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:pn(r,o),dl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:pn(r,o),tc(e,n,r,o,t);case 3:e:{if(Vd(n),e===null)throw Error(E(387));r=n.pendingProps,a=n.memoizedState,o=a.element,yd(e,n),la(n,r,null,t);var i=n.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){o=or(Error(E(423)),n),n=rc(e,n,r,t,o);break e}else if(r!==o){o=or(Error(E(424)),n),n=rc(e,n,r,t,o);break e}else for(Ye=et(n.stateNode.containerInfo.firstChild),Ke=n,oe=!0,hn=null,t=hd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nr(),r===o){n=An(e,n,t);break e}ze(e,n,r,t)}n=n.child}return n;case 5:return vd(n),e===null&&il(n),r=n.type,o=n.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,nl(r,o)?i=null:a!==null&&nl(r,a)&&(n.flags|=32),Ud(e,n),ze(e,n,i,t),n.child;case 6:return e===null&&il(n),null;case 13:return Wd(e,n,t);case 4:return Gl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=tr(n,null,r,t):ze(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:pn(r,o),ec(e,n,r,o,t);case 7:return ze(e,n,n.pendingProps,t),n.child;case 8:return ze(e,n,n.pendingProps.children,t),n.child;case 12:return ze(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,a=n.memoizedProps,i=o.value,X(aa,r._currentValue),r._currentValue=i,a!==null)if(vn(a.value,i)){if(a.children===o.children&&!Ae.current){n=An(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Dn(-1,t&-t),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?s.next=s:(s.next=g.next,g.next=s),u.pending=s}}a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),ll(a.return,t,n),l.lanes|=t;break}s=s.next}}else if(a.tag===10)i=a.type===n.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(E(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),ll(i,t,n),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}ze(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Xt(n,t),o=ln(o),r=r(o),n.flags|=1,ze(e,n,r,t),n.child;case 14:return r=n.type,o=pn(r,n.pendingProps),o=pn(r.type,o),nc(e,n,r,o,t);case 15:return jd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:pn(r,o),$o(e,n),n.tag=1,He(r)?(e=!0,ta(n)):e=!1,Xt(n,t),Fd(n,r,o),ul(n,r,o,t),fl(null,n,r,!0,e,t);case 19:return Yd(e,n,t);case 22:return $d(e,n,t)}throw Error(E(156,n.tag))};function uf(e,n){return Dc(e,n)}function vm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,n,t,r){return new vm(e,n,t,r)}function us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xm(e){if(typeof e=="function")return us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===El)return 11;if(e===Rl)return 14}return 2}function ot(e,n){var t=e.alternate;return t===null?(t=on(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Wo(e,n,t,r,o,a){var i=2;if(r=e,typeof e=="function")us(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ot:return St(t.children,o,a,n);case _l:i=8,o|=8;break;case Li:return e=on(12,t,n,o|2),e.elementType=Li,e.lanes=a,e;case Bi:return e=on(13,t,n,o),e.elementType=Bi,e.lanes=a,e;case Di:return e=on(19,t,n,o),e.elementType=Di,e.lanes=a,e;case vc:return Ta(t,o,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gc:i=10;break e;case yc:i=9;break e;case El:i=11;break e;case Rl:i=14;break e;case Wn:i=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=on(i,t,n,o),n.elementType=e,n.type=r,n.lanes=a,n}function St(e,n,t,r){return e=on(7,e,r,n),e.lanes=t,e}function Ta(e,n,t,r){return e=on(22,e,r,n),e.elementType=vc,e.lanes=t,e.stateNode={isHidden:!1},e}function Mi(e,n,t){return e=on(6,e,null,n),e.lanes=t,e}function Pi(e,n,t){return n=on(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function km(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mi(0),this.expirationTimes=mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function cs(e,n,t,r,o,a,i,l,s){return e=new km(e,n,t,l,s),n===1?(n=1,a===!0&&(n|=8)):n=0,a=on(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kl(a),e}function wm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function cf(e){if(!e)return it;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(He(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(He(t))return ud(e,t,n)}return n}function df(e,n,t,r,o,a,i,l,s){return e=cs(t,r,!0,e,o,a,i,l,s),e.context=cf(null),t=e.current,r=Le(),o=rt(t),a=Dn(r,o),a.callback=n??null,nt(t,a,o),e.current.lanes=o,eo(e,o,r),je(e,r),e}function _a(e,n,t,r){var o=n.current,a=Le(),i=rt(o);return t=cf(t),n.context===null?n.context=t:n.pendingContext=t,n=Dn(a,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=nt(o,n,i),e!==null&&(yn(e,o,i,a),Ao(e,o,i)),i}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ds(e,n){pc(e,n),(e=e.alternate)&&pc(e,n)}function bm(){return null}var ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function fs(e){this._internalRoot=e}Ea.prototype.render=fs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));_a(e,n,null,null)};Ea.prototype.unmount=fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Et(function(){_a(null,e,null,null)}),n[In]=null}};function Ea(e){this._internalRoot=e}Ea.prototype.unstable_scheduleHydration=function(e){if(e){var n=$c();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Kn.length&&n!==0&&n<Kn[t].priority;t++);Kn.splice(t,0,e),t===0&&Vc(e)}};function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function Sm(e,n,t,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=ha(i);a.call(u)}}var i=df(n,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=i,e[In]=i.current,Wr(e.nodeType===8?e.parentNode:e),Et(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ha(s);l.call(u)}}var s=cs(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=s,e[In]=s.current,Wr(e.nodeType===8?e.parentNode:e),Et(function(){_a(n,s,t,r)}),s}function Ma(e,n,t,r,o){var a=t._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=ha(i);l.call(s)}}_a(n,i,e,o)}else i=Sm(t,n,e,o,r);return ha(i)}Hc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Tr(n.pendingLanes);t!==0&&(zl(n,t|1),je(n,fe()),!(U&6)&&(ar=fe()+500,ut()))}break;case 13:Et(function(){var r=Fn(e,1);if(r!==null){var o=Le();yn(r,e,1,o)}}),ds(e,1)}};Ll=function(e){if(e.tag===13){var n=Fn(e,134217728);if(n!==null){var t=Le();yn(n,e,134217728,t)}ds(e,134217728)}};jc=function(e){if(e.tag===13){var n=rt(e),t=Fn(e,n);if(t!==null){var r=Le();yn(t,e,n,r)}ds(e,n)}};$c=function(){return K};Uc=function(e,n){var t=K;try{return K=e,n()}finally{K=t}};Wi=function(e,n,t){switch(n){case"input":if(Fi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=ka(r);if(!o)throw Error(E(90));kc(r),Fi(r,o)}}}break;case"textarea":bc(e,t);break;case"select":n=t.value,n!=null&&Kt(e,!!t.multiple,n,!1)}};Rc=is;Mc=Et;var Cm={usingClientEntryPoint:!1,Events:[to,Ht,ka,_c,Ec,is]},br={findFiberByHostInstance:xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nm={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lc(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Sr.isDisabled&&Sr.supportsFiber))try{ga=Sr.inject(Nm),Tn=Sr}catch{}var Sr;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cm;Je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(n))throw Error(E(200));return wm(e,n,null,t)};Je.createRoot=function(e,n){if(!ps(e))throw Error(E(299));var t=!1,r="",o=ff;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=cs(e,1,!1,null,null,t,!1,r,o),e[In]=n.current,Wr(e.nodeType===8?e.parentNode:e),new fs(n)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Lc(n),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return Et(e)};Je.hydrate=function(e,n,t){if(!Ra(n))throw Error(E(200));return Ma(null,e,n,!0,t)};Je.hydrateRoot=function(e,n,t){if(!ps(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,o=!1,a="",i=ff;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=df(n,null,e,1,t??null,o,!1,a,i),e[In]=n.current,Wr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Ea(n)};Je.render=function(e,n,t){if(!Ra(n))throw Error(E(200));return Ma(null,e,n,!1,t)};Je.unmountComponentAtNode=function(e){if(!Ra(e))throw Error(E(40));return e._reactRootContainer?(Et(function(){Ma(null,null,e,!1,function(){e._reactRootContainer=null,e[In]=null})}),!0):!1};Je.unstable_batchedUpdates=is;Je.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ra(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ma(e,n,t,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426"});var gf=Mn((yh,hf)=>{"use strict";function mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf)}catch(e){console.error(e)}}mf(),hf.exports=pf()});var vf=Mn(ms=>{"use strict";var yf=gf();ms.createRoot=yf.createRoot,ms.hydrateRoot=yf.hydrateRoot;var vh});var Sf=Mn(La=>{"use strict";var Mm=Ve(),Pm=Symbol.for("react.element"),zm=Symbol.for("react.fragment"),Lm=Object.prototype.hasOwnProperty,Bm=Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dm={key:!0,ref:!0,__self:!0,__source:!0};function bf(e,n,t){var r,o={},a=null,i=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Lm.call(n,r)&&!Dm.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Pm,type:e,key:a,ref:i,props:o,_owner:Bm.current}}La.Fragment=zm;La.jsx=bf;La.jsxs=bf});var pe=Mn((bh,Cf)=>{"use strict";Cf.exports=Sf()});var Kf=W(Ve(),1),Gf=W(vf(),1);var D=W(Ve(),1);var Eh=W(Ve(),1);var Sh=W(Ve(),1);var Tm=["hearts","diamonds","clubs","spades"],_m=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],Em={A:11,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:10,Q:10,K:10},jn={A:14,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13};function Rm(e,n){return{id:`${e}-${n}`,rank:e,suit:n,chips:Em[e],value:jn[e],enhancement:null,edition:null,seal:null,selected:!1}}function Pa(){let e=[];for(let n of Tm)for(let t of _m)e.push(Rm(t,n));return e}function za(e){let n=[...e];for(let t=n.length-1;t>0;t--){let r=Math.floor(Math.random()*(t+1));[n[t],n[r]]=[n[r],n[t]]}return n}function xf(e){return{hearts:"\u2665",diamonds:"\u2666",clubs:"\u2663",spades:"\u2660"}[e]||"?"}function kf(e){return e==="hearts"||e==="diamonds"?"red":"black"}var wf=document.createElement("style");wf.textContent=`/* Playing Card Styles */

.card {
  width: 112px;  /* 80 * 1.4 = 112 (40% larger) */
  height: 168px; /* 120 * 1.4 = 168 (40% larger) */
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.2s ease, margin-top 0.2s ease;
  position: relative;
  user-select: none;
}

.card:hover:not(.disabled) {
  transform: translateY(-12px);
  z-index: 10;
}

.card.selected {
  margin-top: -28px;
}

.card.selected .card-inner {
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.8),
              0 8px 25px rgba(0, 0, 0, 0.4);
  border-color: gold;
}

.card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.card-inner {
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%);
  border-radius: 10px;
  border: 3px solid #ccc;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-inner.red {
  color: #d40000;
}

.card-inner.black {
  color: #1a1a1a;
}

/* Corner rank and suit */
.card-corner {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  line-height: 1;
}

.card-corner.top-left {
  top: 8px;
  left: 10px;
}

.card-corner.bottom-right {
  bottom: 8px;
  right: 10px;
  transform: rotate(180deg);
}

.card-rank {
  font-size: 22px;  /* Scaled up */
  font-family: 'Georgia', serif;
}

.card-suit {
  font-size: 20px;  /* Scaled up */
}

/* Center suit display */
.card-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-suit-large {
  font-size: 50px;  /* Scaled up */
}

/* Chip value badge */
.card-chips {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #4a90d9;
  color: white;
  font-size: 13px;  /* Scaled up */
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
}

/* Enhancement indicators */
.card-enhancement {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
}

.card-enhancement.bonus { background: #4a90d9; }
.card-enhancement.mult { background: #e85050; }
.card-enhancement.wild { background: #9b59b6; }
.card-enhancement.glass { background: linear-gradient(135deg, #a8e6cf, #88d8b0); }
.card-enhancement.steel { background: linear-gradient(135deg, #bdc3c7, #95a5a6); }
.card-enhancement.stone { background: #7f8c8d; }
.card-enhancement.gold { background: linear-gradient(135deg, #f1c40f, #f39c12); }
.card-enhancement.lucky { background: linear-gradient(135deg, #2ecc71, #27ae60); }

/* Edition effects */
.card-edition {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 6px;
  pointer-events: none;
}

.card-edition.foil {
  background: linear-gradient(135deg,
    rgba(192, 192, 192, 0.3) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(192, 192, 192, 0.3) 100%);
}

.card-edition.holographic {
  background: linear-gradient(135deg,
    rgba(255, 0, 0, 0.1) 0%,
    rgba(255, 165, 0, 0.1) 25%,
    rgba(0, 255, 0, 0.1) 50%,
    rgba(0, 0, 255, 0.1) 75%,
    rgba(128, 0, 128, 0.1) 100%);
  animation: holo-shift 3s ease infinite;
}

.card-edition.polychrome {
  background: linear-gradient(135deg,
    rgba(255, 0, 128, 0.2) 0%,
    rgba(0, 255, 255, 0.2) 50%,
    rgba(255, 255, 0, 0.2) 100%);
  animation: poly-shift 2s ease infinite;
}

@keyframes holo-shift {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(180deg); }
}

@keyframes poly-shift {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.5; }
}

/* Seal indicators */
.card-seal {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-shadow: 0 0 8px currentColor;
}

.card-seal.gold { background: #f1c40f; color: #f1c40f; }
.card-seal.red { background: #e74c3c; color: #e74c3c; }
.card-seal.blue { background: #3498db; color: #3498db; }
.card-seal.purple { background: #9b59b6; color: #9b59b6; }

/* Play order badge for selected cards */
.card-play-order {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 26px;
  height: 26px;
  background: linear-gradient(135deg, #ffd700, #ff8c00);
  color: #1a1a1a;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  z-index: 20;
  border: 2px solid #fff;
}

/* ================================
   SCORING ANIMATION STYLES
   ================================ */

/* Card currently being scored - pop up animation */
.card.scoring {
  animation: cardScore 0.4s ease;
  z-index: 100;
}

@keyframes cardScore {
  0% { transform: scale(1) translateY(0); }
  30% { transform: scale(1.15) translateY(-20px); }
  100% { transform: scale(1) translateY(0); }
}

/* Card that has already scored - stays highlighted */
.card.has-scored .card-inner {
  box-shadow: 0 0 15px rgba(74, 144, 217, 0.6),
              0 6px 12px rgba(0, 0, 0, 0.25);
}

/* Chip scoring glow */
.card.scoring-chips .card-inner {
  box-shadow: 0 0 25px rgba(74, 144, 217, 1),
              0 0 50px rgba(74, 144, 217, 0.5),
              0 8px 25px rgba(0, 0, 0, 0.4);
  border-color: #4a90d9;
}

/* Plus mult scoring glow */
.card.scoring-plus-mult .card-inner {
  box-shadow: 0 0 25px rgba(232, 80, 80, 1),
              0 0 50px rgba(232, 80, 80, 0.5),
              0 8px 25px rgba(0, 0, 0, 0.4);
  border-color: #e85050;
}

/* Times mult scoring glow */
.card.scoring-times-mult .card-inner {
  box-shadow: 0 0 30px rgba(255, 51, 102, 1),
              0 0 60px rgba(255, 51, 102, 0.6),
              0 8px 25px rgba(0, 0, 0, 0.4);
  border-color: #ff3366;
}

/* Scoring popup that appears above the card */
.scoring-popup {
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
  animation: popupFloat 0.5s ease forwards;
  z-index: 200;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

@keyframes popupFloat {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(10px) scale(0.8);
  }
  20% {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

.scoring-popup.chips {
  background: linear-gradient(135deg, #4a90d9, #2e6cb5);
  color: white;
}

.scoring-popup.plusMult {
  background: linear-gradient(135deg, #e85050, #c23a3a);
  color: white;
}

.scoring-popup.timesMult {
  background: linear-gradient(135deg, #ff3366, #cc1144);
  color: white;
  font-size: 1.4rem;
}
`;document.head.appendChild(wf);var ke=W(pe(),1);function hs({card:e,selected:n,playOrder:t,onClick:r,disabled:o,isScoring:a,scoringEffect:i,hasScored:l}){let s=xf(e.suit),u=kf(e.suit),g=()=>{!o&&r&&r(e)},v=["card",n?"selected":"",o?"disabled":"",a?"scoring":"",l?"has-scored":"",i?.type==="chips"?"scoring-chips":"",i?.type==="plusMult"?"scoring-plus-mult":"",i?.type==="timesMult"?"scoring-times-mult":""].filter(Boolean).join(" ");return(0,ke.jsxs)("div",{className:v,onClick:g,"data-suit":e.suit,children:[(0,ke.jsxs)("div",{className:`card-inner ${u}`,children:[(0,ke.jsxs)("div",{className:"card-corner top-left",children:[(0,ke.jsx)("span",{className:"card-rank",children:e.rank}),(0,ke.jsx)("span",{className:"card-suit",children:s})]}),(0,ke.jsx)("div",{className:"card-center",children:(0,ke.jsx)("span",{className:"card-suit-large",children:s})}),(0,ke.jsxs)("div",{className:"card-corner bottom-right",children:[(0,ke.jsx)("span",{className:"card-rank",children:e.rank}),(0,ke.jsx)("span",{className:"card-suit",children:s})]}),e.enhancement&&(0,ke.jsx)("div",{className:"card-enhancement",style:{backgroundColor:e.enhancement.color||"#f39c12"},title:`${e.enhancement.name}: ${e.enhancement.effect}`,children:e.enhancement.name[0].toUpperCase()}),e.edition&&(0,ke.jsx)("div",{className:`card-edition ${e.edition}`}),e.seal&&(0,ke.jsx)("div",{className:`card-seal ${e.seal}`}),a&&i&&(0,ke.jsxs)("div",{className:`scoring-popup ${i.type}`,children:[i.type==="chips"&&`+${i.value}`,i.type==="plusMult"&&`+${i.value}`,i.type==="timesMult"&&`\xD7${i.value}`]})]}),(0,ke.jsxs)("div",{className:"card-chips",children:["+",e.chips]}),t&&(0,ke.jsx)("div",{className:"card-play-order",children:t})]})}var Nf=document.createElement("style");Nf.textContent=`/* Hand container styles */

.hand-container {
  padding: 20px;
  min-height: 180px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.hand {
  display: flex;
  justify-content: center;
  gap: -20px; /* Overlap cards slightly */
  flex-wrap: nowrap;
}

/* Fan the cards out slightly */
.hand .card {
  margin: 0 -10px;
  transition: transform 0.2s ease, margin-top 0.2s ease, z-index 0s;
}

.hand .card:hover {
  z-index: 100;
}

/* Slight rotation for card fan effect */
.hand .card:nth-child(1) { transform: rotate(-6deg); }
.hand .card:nth-child(2) { transform: rotate(-4deg); }
.hand .card:nth-child(3) { transform: rotate(-2deg); }
.hand .card:nth-child(4) { transform: rotate(0deg); }
.hand .card:nth-child(5) { transform: rotate(2deg); }
.hand .card:nth-child(6) { transform: rotate(4deg); }
.hand .card:nth-child(7) { transform: rotate(6deg); }
.hand .card:nth-child(8) { transform: rotate(8deg); }

.hand .card:hover {
  transform: translateY(-15px) rotate(0deg) !important;
}

.hand .card.selected {
  transform: translateY(-25px) rotate(0deg) !important;
}

.hand-empty {
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  padding: 40px;
}

/* Play order reorder bar */
.play-order-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  padding: 8px 16px;
  border-radius: 20px;
  margin-left: 20px;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.play-order-label {
  color: #ffd700;
  font-size: 0.8rem;
  font-weight: bold;
  white-space: nowrap;
}

.play-order-chips {
  display: flex;
  gap: 6px;
}

.play-order-chip {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 0.85rem;
  cursor: grab;
  border: 2px solid #ffd700;
  transition: all 0.15s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.play-order-chip:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.play-order-chip:active {
  cursor: grabbing;
}

.play-order-chip.drag-over {
  border-color: #fff;
  box-shadow: 0 0 12px rgba(255, 215, 0, 0.6);
}

.chip-order {
  background: #ffd700;
  color: #1a1a1a;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  margin-right: 2px;
}

.chip-rank {
  font-size: 0.9rem;
}

.chip-suit {
  font-size: 1rem;
}

.play-order-hint {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  font-style: italic;
  white-space: nowrap;
}

/* Make hand container flex column to stack order bar below */
.hand-container {
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
`;document.head.appendChild(Nf);var $e=W(pe(),1);function gs({cards:e,selectedCards:n,onCardClick:t,disabled:r,onReorderSelected:o,onDragStart:a,onDragOver:i,onDragEnd:l,scoringCardId:s,scoringEffect:u,scoredCardIds:g}){let v=k=>n.some(x=>x.id===k.id),m=k=>{let x=n.findIndex(C=>C.id===k.id);return x>=0?x+1:null};return(0,$e.jsxs)("div",{className:"hand-container",children:[(0,$e.jsx)("div",{className:"hand",children:e.map((k,x)=>{let C=v(k),I=C?m(k):null,p=s===k.id,d=g?.has(k.id);return(0,$e.jsx)(hs,{card:k,selected:C,playOrder:I,onClick:t,disabled:r,isScoring:p,scoringEffect:p?u:null,hasScored:d},k.id)})}),n.length>=2&&!r&&(0,$e.jsxs)("div",{className:"play-order-bar",children:[(0,$e.jsx)("span",{className:"play-order-label",children:"Scoring Order:"}),(0,$e.jsx)("div",{className:"play-order-chips",children:n.map((k,x)=>(0,$e.jsxs)("div",{className:"play-order-chip",draggable:!0,onDragStart:C=>a&&a(C,x),onDragOver:C=>i&&i(C),onDrop:C=>o&&o(C,x),onDragEnd:C=>l&&l(C),style:{color:k.suit==="hearts"||k.suit==="diamonds"?"#e74c3c":"#2c3e50",backgroundColor:"white"},children:[(0,$e.jsx)("span",{className:"chip-order",children:x+1}),(0,$e.jsx)("span",{className:"chip-rank",children:k.rank}),(0,$e.jsx)("span",{className:"chip-suit",children:k.suit==="hearts"?"\u2665":k.suit==="diamonds"?"\u2666":k.suit==="clubs"?"\u2663":"\u2660"})]},k.id))}),(0,$e.jsx)("span",{className:"play-order-hint",children:"drag to reorder \u2192"})]}),e.length===0&&(0,$e.jsx)("div",{className:"hand-empty",children:"No cards in hand"})]})}var Dh=W(Ve(),1);var Tf=document.createElement("style");Tf.textContent=`/* Scoreboard Styles */

.scoreboard {
  background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
  border-radius: 12px;
  padding: 20px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
  min-width: 280px;
}

/* Header */
.scoreboard-header {
  margin-bottom: 15px;
  text-align: center;
}

.series-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.series-label {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffd700;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.atbat-label {
  font-size: 0.9rem;
  color: #aaa;
}

/* Score display */
.score-section {
  margin-bottom: 15px;
}

.score-display {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
}

.current-score {
  font-size: 2rem;
  font-weight: bold;
  color: #4a90d9;
}

.score-divider {
  color: #666;
  font-size: 1.5rem;
}

.target-score {
  font-size: 1.2rem;
  color: #888;
}

/* Score bar */
.score-bar {
  height: 12px;
  background: #333;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #444;
}

.score-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #4a90d9 0%, #67a9e8 100%);
  border-radius: 6px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(74, 144, 217, 0.5);
}

/* Hand preview */
.hand-preview {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 15px;
  text-align: center;
}

.preview-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 4px;
}

.preview-hint {
  font-size: 0.85rem;
  color: #888;
  font-style: italic;
}

.preview-score {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
}

.preview-x {
  color: #888;
}

.preview-equals {
  color: #888;
  margin: 0 4px;
}

.preview-total {
  font-weight: bold;
  color: #4a90d9;
  font-size: 1.3rem;
}

/* Resources */
.resources {
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  border-top: 1px solid #333;
}

.resource {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.resource-icon {
  font-size: 1.5rem;
}

.resource-value {
  font-size: 1.2rem;
  font-weight: bold;
}

.resource-label {
  font-size: 0.75rem;
  color: #888;
  text-transform: uppercase;
}

.resource.money .resource-value {
  color: #ffd700;
}

/* Text colors (from index.css) */
.text-chips {
  color: #4a90d9;
  font-weight: bold;
}

.text-mult {
  color: #e85050;
  font-weight: bold;
}
`;document.head.appendChild(Tf);function Ef(){let e=Pa(),n=za([...e]);return{phase:"PLAYING",fullDeck:e,deck:n.slice(8),hand:n.slice(0,8),selectedCards:[],discardPile:[],currentScore:0,targetScore:300,handsRemaining:4,discardsRemaining:3,money:4,series:1,atBat:1,atBatType:"FIRST",handLevels:{HIGH_CARD:1,PAIR:1,TWO_PAIR:1,THREE_OF_A_KIND:1,STRAIGHT:1,FLUSH:1,FULL_HOUSE:1,FOUR_OF_A_KIND:1,STRAIGHT_FLUSH:1,ROYAL_FLUSH:1,FIVE_OF_A_KIND:1,FLUSH_HOUSE:1,FLUSH_FIVE:1},legends:[],maxLegends:5,ballparks:[],maxBallparks:5,consumables:[],maxConsumables:2,legendInjuries:{},legendBuffs:{},hasTrainingCamp:!1,hasScoutReport:!1,rerollsThisShop:0,upcomingBossModifiers:[],bossModifiers:[],voucherBoughtThisSeries:!1,purchasedVoucherEffects:[],handsPlayed:0,highestScore:0,runStartTime:Date.now()}}var _f={1:"Draft Day",2:"Minor League Promotion",3:"Spring Training",4:"Opening Day",5:"All-Star Game",6:"Wild Card Round",7:"Divisional Round",8:"League Championship",9:"World Series"};function Rf(e){return _f[e]?_f[e]:`Extra Innings ${e}`}function Ba(e,n){let t={1:{FIRST:300,SECOND:300,BOSS:300},2:{FIRST:800,SECOND:900,BOSS:1e3},3:{FIRST:2e3,SECOND:2600,BOSS:3200},4:{FIRST:5e3,SECOND:8e3,BOSS:9e3},5:{FIRST:11e3,SECOND:2e4,BOSS:25e3},6:{FIRST:2e4,SECOND:36e3,BOSS:6e4},7:{FIRST:35e3,SECOND:6e4,BOSS:11e4},8:{FIRST:5e4,SECOND:1e5,BOSS:2e5},9:{FIRST:75e3,SECOND:15e4,BOSS:3e5}};if(t[e])return t[e][n]||t[e].FIRST;let r=t[9],o=e-9,a=Math.pow(2.5,o),i={FIRST:r.FIRST,SECOND:r.SECOND,BOSS:r.BOSS};return Math.floor((i[n]||i.FIRST)*a)}function Mf(e,n){return({FIRST:3,SECOND:4,BOSS:5}[n]||3)+e}var Om={"Babe Ruth":"Yankee Stadium","Mickey Mantle":"Yankee Stadium","Derek Jeter":"Yankee Stadium","Mariano Rivera":"Yankee Stadium","Yogi Berra":"Yankee Stadium","Reggie Jackson":"Yankee Stadium","Ted Williams":"Fenway Park","Willie Mays":"Oracle Park","Shohei Ohtani":"Dodger Stadium","Jackie Robinson":"Dodger Stadium","Sandy Koufax":"Dodger Stadium","Ozzie Smith":"Busch Stadium","Ernie Banks":"Wrigley Field","Tony Gwynn":"Petco Park","George Brett":"Kauffman Stadium","Cal Ripken Jr.":"Camden Yards","Roberto Clemente":"PNC Park"};function Im(e){return Om[e]||null}function Pf(e,n,t={}){let r=[],o=[],a=1,i=n.map(l=>l.name);for(let l of e){if(sr(l.name,t)||l.isStaff||l.noHomeAwayBonus)continue;let s=Im(l.name);s&&i.includes(s)&&Math.random()<.25&&(r.push({legend:l.name,park:s,multiplier:1.5}),a*=1.5);for(let u of n)u.name!==s&&Math.random()<1/60&&(o.push({legend:l.name,park:u.name,multiplier:5}),a*=5)}return{homeWinners:r,awayWinners:o,totalMultiplier:a}}var Fm=.04,Am=.02;function Hm(e){return e==="legendary"?Fm:Am}function sr(e,n={}){return(n[e]||0)>0}function ys(e,n={}){let t=n[e];return t&&t.inningsRemaining>0?1+t.buffPercent/100:1}function jm(e){return e.some(n=>n.name==="Dr. Awesome")}function zf(e,n={},t=!1){let r={...n},o=[];if(jm(e))return{newInjuries:r,injuredThisHand:o};for(let a of e){if(sr(a.name,n))continue;let i=Hm(a.rarity);if(t&&(i*=.5),Math.random()<i){let l=Math.floor(Math.random()*5)+2;r[a.name]=l,o.push({name:a.name,innings:l})}}return{newInjuries:r,injuredThisHand:o}}function Lf(e={},n={}){let t={},r={},o=[],a=[];for(let[i,l]of Object.entries(e)){let s=l-1;s>0?t[i]=s:o.push(i)}for(let[i,l]of Object.entries(n)){let s=l.inningsRemaining-1;s>0?r[i]={...l,inningsRemaining:s}:a.push(i)}return{injuries:t,buffs:r,healed:o,buffExpired:a}}function Bf(e,n={},t={}){let r={...n},o={...t},a=e.filter(i=>sr(i.name,n));if(a.length>0){let i=a[Math.floor(Math.random()*a.length)];return delete r[i.name],{injuries:r,buffs:o,effect:"healed",affectedLegend:i.name}}else if(e.length>0){let i=e[Math.floor(Math.random()*e.length)];return o[i.name]={inningsRemaining:3,buffPercent:20},{injuries:r,buffs:o,effect:"buffed",affectedLegend:i.name}}return{injuries:r,buffs:o,effect:"none",affectedLegend:null}}var $m=[{id:"debuff_hearts",name:"Heartless",description:"Hearts are debuffed (-5 chips each)",icon:"\u{1F494}",type:"suit_debuff",suit:"hearts",chipPenalty:5},{id:"debuff_diamonds",name:"Diamond in the Rough",description:"Diamonds are debuffed (-5 chips each)",icon:"\u{1F48E}",type:"suit_debuff",suit:"diamonds",chipPenalty:5},{id:"debuff_clubs",name:"Clubbed",description:"Clubs are debuffed (-5 chips each)",icon:"\u2663\uFE0F",type:"suit_debuff",suit:"clubs",chipPenalty:5},{id:"debuff_spades",name:"Spade Work",description:"Spades are debuffed (-5 chips each)",icon:"\u2660\uFE0F",type:"suit_debuff",suit:"spades",chipPenalty:5},{id:"debuff_red",name:"Seeing Red",description:"Red cards give no chip bonus",icon:"\u{1F534}",type:"color_debuff",color:"red",nullifyChips:!0},{id:"debuff_black",name:"Blackout",description:"Black cards give no chip bonus",icon:"\u26AB",type:"color_debuff",color:"black",nullifyChips:!0},{id:"debuff_ballparks",name:"Away Game",description:"All ballpark bonuses are disabled",icon:"\u{1F6AB}\u{1F3DF}\uFE0F",type:"ballpark_debuff",disableBallparks:!0},{id:"debuff_yankees",name:"Bronx Blues",description:"Yankees legends are debuffed (Babe Ruth, Mickey Mantle, Derek Jeter, Mariano Rivera, Yogi Berra, Reggie Jackson)",icon:"\u{1F5FD}",type:"legend_debuff",affectedLegends:["Babe Ruth","Mickey Mantle","Derek Jeter","Mariano Rivera","Yogi Berra","Reggie Jackson"]},{id:"debuff_redsox",name:"Curse of the Bambino",description:"Red Sox legends are debuffed (Ted Williams, Nolan Ryan)",icon:"\u{1F9E6}",type:"legend_debuff",affectedLegends:["Ted Williams","Nolan Ryan"]},{id:"debuff_pairs",name:"Odd One Out",description:"Pairs and Two Pairs give -2 mult",icon:"\u{1F46F}",type:"hand_debuff",affectedHands:["PAIR","TWO_PAIR"],multPenalty:2},{id:"debuff_flushes",name:"Color Blind",description:"Flushes give -3 mult",icon:"\u{1F3A8}",type:"hand_debuff",affectedHands:["FLUSH","STRAIGHT_FLUSH","ROYAL_FLUSH"],multPenalty:3},{id:"debuff_face",name:"Faceless",description:"Face cards (J, Q, K) give no chip bonus",icon:"\u{1F464}",type:"face_debuff",nullifyFaceChips:!0},{id:"debuff_discards",name:"No Mulligans",description:"Start with -1 discard",icon:"\u{1F6AB}\u{1F5D1}\uFE0F",type:"resource_debuff",discardPenalty:1},{id:"debuff_hands",name:"Short Inning",description:"Start with -1 hand",icon:"\u23F1\uFE0F",type:"resource_debuff",handPenalty:1},{id:"debuff_mult_cap",name:"Grounded",description:"Max multiplier is capped at 10",icon:"\u{1F4C9}",type:"mult_cap",maxMult:10},{id:"debuff_chip_threshold",name:"Chip Away",description:"Chips under 50 are halved",icon:"\u{1F4B0}",type:"chip_threshold",threshold:50,penalty:.5},{id:"debuff_salary_cap",name:"Salary Cap",description:"Lose $5 for each hand played this At-Bat",icon:"\u{1F4B8}",type:"money_debuff",moneyPerHand:-5}];function Um(e){let n=[...$m];e<=2?n=n.filter(r=>r.type==="suit_debuff"||r.id==="debuff_pairs"):e<=4&&(n=n.filter(r=>r.type!=="mult_cap"&&r.type!=="resource_debuff"));let t=Math.floor(Math.random()*n.length);return n[t]}function vs(e){return[Um(e)]}var G=W(pe(),1);function xs({currentScore:e,targetScore:n,handsRemaining:t,discardsRemaining:r,money:o,series:a,atBatType:i,handPreview:l}){let s=Math.min(e/n*100,100),u={FIRST:"First At-Bat",SECOND:"Second At-Bat",BOSS:"Boss At-Bat"},g=Rf(a);return(0,G.jsxs)("div",{className:"scoreboard",children:[(0,G.jsx)("div",{className:"scoreboard-header",children:(0,G.jsxs)("div",{className:"series-info",children:[(0,G.jsx)("span",{className:"series-label",children:g}),(0,G.jsx)("span",{className:"atbat-label",children:u[i]})]})}),(0,G.jsxs)("div",{className:"score-section",children:[(0,G.jsxs)("div",{className:"score-display",children:[(0,G.jsx)("span",{className:"current-score",children:e.toLocaleString()}),(0,G.jsx)("span",{className:"score-divider",children:"/"}),(0,G.jsx)("span",{className:"target-score",children:n.toLocaleString()})]}),(0,G.jsx)("div",{className:"score-bar",children:(0,G.jsx)("div",{className:"score-bar-fill",style:{width:`${s}%`}})})]}),l&&(0,G.jsxs)("div",{className:"hand-preview",children:[(0,G.jsx)("div",{className:"preview-name",children:l.name}),(0,G.jsx)("div",{className:"preview-hint",children:"Play to see score"})]}),(0,G.jsxs)("div",{className:"resources",children:[(0,G.jsxs)("div",{className:"resource",children:[(0,G.jsx)("span",{className:"resource-icon",children:"\u{1F0CF}"}),(0,G.jsx)("span",{className:"resource-value",children:t}),(0,G.jsx)("span",{className:"resource-label",children:"Hands"})]}),(0,G.jsxs)("div",{className:"resource",children:[(0,G.jsx)("span",{className:"resource-icon",children:"\u{1F5D1}\uFE0F"}),(0,G.jsx)("span",{className:"resource-value",children:r}),(0,G.jsx)("span",{className:"resource-label",children:"Discards"})]}),(0,G.jsxs)("div",{className:"resource money",children:[(0,G.jsx)("span",{className:"resource-icon",children:"\u{1F4B0}"}),(0,G.jsxs)("span",{className:"resource-value",children:["$",o]})]})]})]})}var Hh=W(Ve(),1);var Df=document.createElement("style");Df.textContent=`/* Action Button Styles */

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.action-buttons button {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 30px;
  border-radius: 12px;
  border: 2px solid transparent;
  font-weight: bold;
  transition: all 0.2s ease;
  min-width: 140px;
}

.btn-play {
  background: linear-gradient(180deg, #2d7d32 0%, #1b5e20 100%);
  color: white;
  border-color: #4caf50;
}

.btn-play:hover:not(:disabled) {
  background: linear-gradient(180deg, #388e3c 0%, #2e7d32 100%);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
}

.btn-play:disabled {
  background: #333;
  border-color: #555;
  color: #777;
}

.btn-discard {
  background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
  color: white;
  border-color: #f44336;
}

.btn-discard:hover:not(:disabled) {
  background: linear-gradient(180deg, #e53935 0%, #c62828 100%);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(244, 67, 54, 0.4);
}

.btn-discard:disabled {
  background: #333;
  border-color: #555;
  color: #777;
}

.btn-icon {
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.btn-text {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-subtext {
  font-size: 0.75rem;
  opacity: 0.8;
  margin-top: 4px;
  font-weight: normal;
}
`;document.head.appendChild(Df);var xn=W(pe(),1);function ks({selectedCount:e,canPlay:n,canDiscard:t,onPlayHand:r,onDiscard:o,handsRemaining:a,discardsRemaining:i}){return(0,xn.jsxs)("div",{className:"action-buttons",children:[(0,xn.jsxs)("button",{className:"btn-play",onClick:r,disabled:!n,children:[(0,xn.jsx)("span",{className:"btn-icon",children:"\u26BE"}),(0,xn.jsx)("span",{className:"btn-text",children:"Play Hand"}),(0,xn.jsx)("span",{className:"btn-subtext",children:e>0?`${e} card${e!==1?"s":""}`:"Select cards"})]}),(0,xn.jsxs)("button",{className:"btn-discard",onClick:o,disabled:!t,children:[(0,xn.jsx)("span",{className:"btn-icon",children:"\u{1F5D1}\uFE0F"}),(0,xn.jsx)("span",{className:"btn-text",children:"Discard"}),(0,xn.jsxs)("span",{className:"btn-subtext",children:[i," left"]})]})]})}var Vh=W(Ve(),1);var Of=document.createElement("style");Of.textContent=`/* Sort Controls Styles */

.sort-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  margin-bottom: 10px;
}

.sort-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
}

.sort-btn {
  padding: 8px 16px;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sort-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.sort-btn.active {
  background: linear-gradient(180deg, #4a90d9 0%, #357abd 100%);
  color: white;
  border-color: #5a9fe9;
  box-shadow: 0 2px 8px rgba(74, 144, 217, 0.4);
}
`;document.head.appendChild(Of);var ur=W(pe(),1);function ws({sortMode:e,onSortChange:n}){return(0,ur.jsxs)("div",{className:"sort-controls",children:[(0,ur.jsx)("span",{className:"sort-label",children:"Sort:"}),(0,ur.jsx)("button",{className:`sort-btn ${e==="rank"?"active":""}`,onClick:()=>n("rank"),children:"By Rank"}),(0,ur.jsx)("button",{className:`sort-btn ${e==="suit"?"active":""}`,onClick:()=>n("suit"),children:"By Suit"})]})}var Ue=W(Ve(),1);var If=document.createElement("style");If.textContent=`/* Shop/Dugout Styles */

.shop-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: fadeIn 0.3s ease;
}

.shop-container {
  background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
  border-radius: 16px;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Header */
.shop-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 2px solid #444;
  background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
  border-radius: 16px 16px 0 0;
}

.shop-header h2 {
  margin: 0;
  color: #ffd700;
  font-size: 1.8rem;
}

.shop-money {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 8px;
}

.money-icon {
  font-size: 1.5rem;
}

.money-amount {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffd700;
}

/* Content area */
.shop-content {
  padding: 20px 30px;
}

.shop-section {
  margin-bottom: 25px;
}

.shop-section h3 {
  color: #ddd;
  margin-bottom: 12px;
  font-size: 1.1rem;
  border-bottom: 1px solid #444;
  padding-bottom: 8px;
}

/* Item rows */
.shop-items {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

/* Base shop item */
.shop-item {
  background: linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%);
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid #555;
  position: relative;
}

.shop-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.shop-item.selected {
  border-color: #ffd700;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

/* Legend cards */
.legend-card {
  width: 180px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  border-width: 3px;
}

.legend-rarity {
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.legend-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
}

.legend-position {
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 10px;
}

.legend-effect {
  font-size: 0.9rem;
  color: #4a90d9;
  font-weight: 500;
  margin-bottom: 8px;
  flex-grow: 1;
}

.legend-description {
  font-size: 0.75rem;
  color: #777;
  font-style: italic;
  margin-bottom: 10px;
}

/* Inventory warning box */
.inventory-warning {
  background: linear-gradient(135deg, rgba(139, 0, 0, 0.3), rgba(80, 0, 0, 0.4));
  border: 2px solid #8b0000;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 12px;
  color: #ff6b6b;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Pack cards */
.pack-card {
  width: 140px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

/* Blocked pack styling */
.pack-card.blocked {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.pack-card.blocked:hover {
  transform: none;
  box-shadow: none;
}

.blocked-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: #ff6b6b;
  pointer-events: none;
}

.pack-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.pack-name {
  font-size: 0.95rem;
  font-weight: bold;
  color: white;
  margin-bottom: 6px;
}

.pack-description {
  font-size: 0.8rem;
  color: #888;
  flex-grow: 1;
}

/* Voucher cards */
.voucher-card {
  width: 160px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #4a3a6a 0%, #2a2a4a 100%);
  border-color: #6a5a8a;
}

.voucher-name {
  font-size: 1rem;
  font-weight: bold;
  color: #dda0dd;
  margin-bottom: 8px;
}

.voucher-description {
  font-size: 0.85rem;
  color: #aaa;
  flex-grow: 1;
}

/* Medical Pack */
.medical-card {
  width: 180px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #2d5a3d 0%, #1a3a2a 100%);
  border-color: #4caf50;
}

.medical-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.medical-name {
  font-size: 1rem;
  font-weight: bold;
  color: #81c784;
  margin-bottom: 8px;
}

.medical-description {
  font-size: 0.8rem;
  color: #aaa;
  text-align: center;
  flex-grow: 1;
  line-height: 1.3;
}

/* Price tag */
.item-price {
  background: linear-gradient(180deg, #2d7d32 0%, #1b5e20 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
  margin-top: auto;
}

/* Roster section */
.roster-section {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
}

.roster-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.roster-legend {
  background: linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%);
  border: 2px solid #555;
  border-radius: 8px;
  padding: 12px;
  min-width: 150px;
}

.roster-legend .legend-name {
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.roster-legend .legend-effect {
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.sell-btn {
  width: 100%;
  padding: 6px;
  font-size: 0.8rem;
  background: #8b0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.sell-btn:hover {
  background: #a00000;
}

.sell-btn.disabled {
  background: #444;
  color: #888;
  cursor: not-allowed;
  font-size: 0.75rem;
  text-align: center;
}

.roster-empty {
  color: #666;
  font-style: italic;
  padding: 20px;
}

/* Roster legend injury/buff status */
.roster-legend.injured {
  background: linear-gradient(180deg, #3a2a2a 0%, #2a1a1a 100%);
  opacity: 0.8;
}

.roster-legend.injured .legend-effect.strikethrough {
  text-decoration: line-through;
  opacity: 0.5;
}

.roster-legend.buffed {
  box-shadow: 0 0 12px rgba(76, 175, 80, 0.5);
}

.status-badge {
  font-size: 0.75rem;
  margin-left: 8px;
  padding: 1px 4px;
  border-radius: 4px;
}

.status-badge.injury {
  background: rgba(139, 0, 0, 0.4);
  color: #ff6b6b;
}

.status-badge.buff {
  background: rgba(76, 175, 80, 0.3);
  color: #81c784;
}

/* Ballparks roster */
.ballparks-roster {
  border-color: #27ae60;
}

.roster-ballpark {
  background: linear-gradient(180deg, #2a4a3a 0%, #1a3a2a 100%);
  border: 2px solid #27ae60;
  border-radius: 8px;
  padding: 10px;
  min-width: 140px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.roster-ballpark .ballpark-name {
  font-weight: bold;
  font-size: 0.85rem;
  color: #81c784;
}

.roster-ballpark .ballpark-effect {
  font-size: 0.75rem;
  color: #aaa;
  flex: 1;
}

.roster-ballpark .sell-btn {
  background: #2d5a3d;
  margin-top: 6px;
}

.roster-ballpark .sell-btn:hover {
  background: #3d7a4d;
}

/* Footer */
.shop-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-top: 2px solid #444;
  background: linear-gradient(180deg, #2d2d2d 0%, #1f1f1f 100%);
  border-radius: 0 0 16px 16px;
  gap: 15px;
}

.btn-view-deck {
  background: linear-gradient(135deg, #3d5a80, #2c3e50);
  border: 2px solid #4a90d9;
  color: #ecf0f1;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: bold;
  transition: all 0.2s;
}

.btn-view-deck:hover {
  background: linear-gradient(135deg, #4a90d9, #3d5a80);
  transform: translateY(-2px);
}

.btn-reroll {
  background: linear-gradient(180deg, #5a5a5a 0%, #3a3a3a 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  border: 2px solid #666;
}

.btn-reroll:hover:not(:disabled) {
  background: linear-gradient(180deg, #6a6a6a 0%, #4a4a4a 100%);
}

.btn-buy {
  flex: 1;
  max-width: 300px;
  background: linear-gradient(180deg, #2d7d32 0%, #1b5e20 100%);
  color: white;
  padding: 14px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid #4caf50;
}

.btn-buy:hover:not(:disabled) {
  background: linear-gradient(180deg, #388e3c 0%, #2e7d32 100%);
}

.btn-buy:disabled {
  background: #333;
  border-color: #555;
  color: #777;
}

.btn-continue {
  background: linear-gradient(180deg, #1565c0 0%, #0d47a1 100%);
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid #1976d2;
}

.btn-continue:hover {
  background: linear-gradient(180deg, #1976d2 0%, #1565c0 100%);
}

/* No items message */
.no-items-message {
  color: #888;
  font-style: italic;
  padding: 20px;
  text-align: center;
  width: 100%;
}

/* Pack opening overlay */
.pack-opening-container {
  background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
  border-radius: 16px;
  width: 90%;
  max-width: 900px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: packReveal 0.4s ease;
}

@keyframes packReveal {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.pack-header {
  text-align: center;
  padding: 25px 30px;
  border-bottom: 2px solid #444;
  background: linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%);
  border-radius: 16px 16px 0 0;
}

.pack-header h2 {
  margin: 0 0 10px 0;
  color: #ffd700;
  font-size: 1.8rem;
}

.pack-instruction {
  margin: 0;
  color: #aaa;
  font-size: 1rem;
}

.pack-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  flex-wrap: wrap;
}

.pack-legend-card {
  background: linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%);
  border-radius: 12px;
  padding: 20px;
  width: 150px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 3px solid #555;
  display: flex;
  flex-direction: column;
  min-height: 180px;
}

.pack-legend-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.pack-legend-card.selected {
  border-color: #4caf50;
  box-shadow: 0 0 25px rgba(76, 175, 80, 0.5);
  transform: translateY(-8px) scale(1.05);
}

.pack-footer {
  text-align: center;
  padding: 20px 30px;
  border-top: 2px solid #444;
  background: linear-gradient(180deg, #2d2d2d 0%, #1f1f1f 100%);
  border-radius: 0 0 16px 16px;
}

.btn-confirm-pack {
  background: linear-gradient(180deg, #2d7d32 0%, #1b5e20 100%);
  color: white;
  padding: 15px 40px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  border: 2px solid #4caf50;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-confirm-pack:hover:not(:disabled) {
  background: linear-gradient(180deg, #388e3c 0%, #2e7d32 100%);
  transform: translateY(-2px);
}

.btn-confirm-pack:disabled {
  background: #333;
  border-color: #555;
  color: #777;
  cursor: not-allowed;
}

/* Card type labels for Position and Ballpark cards */
.card-type-label {
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
}

.position-label {
  background: #4a90d9;
  color: white;
}

.ballpark-label {
  background: #27ae60;
  color: white;
}

/* Position card styling */
.pack-legend-card.position-card {
  background: linear-gradient(180deg, #2a3a4a 0%, #1a2a3a 100%);
}

/* Ballpark card styling */
.pack-legend-card.ballpark-card {
  background: linear-gradient(180deg, #2a4a3a 0%, #1a3a2a 100%);
}

/* Voucher bought message */
.voucher-bought-message {
  color: #888;
  font-style: italic;
  padding: 15px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

/* Enhancement card styling */
.pack-legend-card.enhancement-card {
  background: linear-gradient(180deg, #3a3a2a 0%, #2a2a1a 100%);
}

.enhancement-label {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.7rem;
}

/* Enhancement container */
.enhancement-container {
  background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
  border-radius: 16px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.enhancement-info {
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  border-left: 4px solid #f39c12;
}

.enhancement-name {
  font-size: 1.2rem;
  font-weight: bold;
}

.enhancement-effect {
  font-size: 1rem;
  color: #ccc;
  margin-top: 5px;
}

/* Deck selection grid */
.deck-selection {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  gap: 8px;
  padding: 20px;
  max-height: 400px;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.2);
  margin: 10px 20px;
  border-radius: 8px;
}

.deck-card {
  width: 50px;
  height: 70px;
  background: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  position: relative;
  font-weight: bold;
}

.deck-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.deck-card.selected {
  border-color: #ffd700;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  transform: translateY(-4px);
}

.deck-card.has-enhancement {
  background: linear-gradient(135deg, white 70%, #f39c12 100%);
}

.deck-card-rank {
  font-size: 1.2rem;
}

.deck-card-suit {
  font-size: 1.4rem;
}

.deck-card-enhancement {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  color: white;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.btn-cancel {
  padding: 12px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #666;
  color: white;
}

.btn-cancel:hover {
  background: #888;
}

/* Cards-first view styles */
.enhancement-container.cards-first {
  max-width: 900px;
}

.deck-preview-section {
  padding: 0 20px;
  margin-bottom: 20px;
}

.deck-preview-section h3 {
  color: #ffd700;
  font-size: 1rem;
  margin-bottom: 10px;
}

.deck-selection.preview {
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid #3d5a80;
  pointer-events: none; /* Cards are just for viewing */
}

.deck-selection.preview .deck-card {
  cursor: default;
}

.deck-selection.preview .deck-card:hover {
  transform: none;
  box-shadow: none;
}

.enhancement-options-section {
  padding: 0 20px;
  margin-bottom: 20px;
}

.enhancement-options-section h3 {
  color: #ffd700;
  font-size: 1rem;
  margin-bottom: 10px;
}

.enhancement-options {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.enhancement-option-card {
  background: linear-gradient(180deg, #3a3a2a 0%, #2a2a1a 100%);
  border: 3px solid #555;
  border-radius: 12px;
  padding: 15px 20px;
  min-width: 180px;
  max-width: 220px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.enhancement-option-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.enhancement-option-card .enhancement-type {
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.enhancement-option-card .enhancement-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 6px;
}

.enhancement-option-card .enhancement-effect {
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.enhancement-option-card .enhancement-desc {
  font-size: 0.8rem;
  color: #999;
  font-style: italic;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;document.head.appendChild(If);var cr=W(Ve(),1);var Ff=document.createElement("style");Ff.textContent=`/* DeckViewer styles */

.deck-viewer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.deck-viewer-container {
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  border-radius: 16px;
  border: 2px solid #3d5a80;
  max-width: 900px;
  max-height: 85vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.deck-viewer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: linear-gradient(135deg, #2c3e50, #1a252f);
  border-bottom: 2px solid #3d5a80;
}

.deck-viewer-header h2 {
  margin: 0;
  color: #ffd700;
  font-size: 1.4rem;
}

.deck-viewer-close {
  background: transparent;
  border: none;
  color: #8b9dc3;
  width: 32px;
  height: 32px;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.deck-viewer-close:hover {
  color: #ecf0f1;
}

/* Statistics */
.deck-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid #3d5a80;
}

.stat-group {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.stat-label {
  color: #8b9dc3;
  font-weight: bold;
}

.stat-item {
  font-weight: bold;
  font-size: 1.1rem;
}

.stat-value {
  color: #4a90d9;
  font-weight: bold;
}

.enhancement-stat {
  background: rgba(243, 156, 18, 0.2);
  padding: 2px 8px;
  border-radius: 4px;
  color: #f39c12;
  font-size: 0.85rem;
}

/* Controls */
.deck-viewer-controls {
  display: flex;
  gap: 20px;
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.2);
}

.control-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.control-group label {
  color: #8b9dc3;
}

.control-group select {
  background: #2c3e50;
  border: 1px solid #3d5a80;
  color: #ecf0f1;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

/* Card Grid - 13 cards per row to match standard deck */
.deck-viewer-cards {
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: 6px;
  padding: 16px 20px;
  overflow-y: auto;
  flex: 1;
}

.viewer-card {
  width: 100%;
  aspect-ratio: 2.5 / 3.5;
  max-width: 60px;
  background: linear-gradient(145deg, #fff, #f0f0f0);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
  border: 2px solid #ddd;
}

.viewer-card:hover {
  transform: scale(1.1);
  z-index: 10;
}

.viewer-card.has-enhancement {
  border-color: gold;
  box-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
}

.viewer-card-rank {
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1;
}

.viewer-card-suit {
  font-size: 1.4rem;
  line-height: 1;
}

.viewer-card-enhancement {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: bold;
  color: white;
  border: 2px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Rank Counts */
.rank-counts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid #3d5a80;
  align-items: center;
}

.rank-label {
  color: #8b9dc3;
  font-weight: bold;
  margin-right: 8px;
}

.rank-count {
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  color: #ecf0f1;
  font-size: 0.85rem;
}

.rank-count.extra {
  background: rgba(39, 174, 96, 0.3);
  color: #27ae60;
}

.rank-count.missing {
  background: rgba(231, 76, 60, 0.3);
  color: #e74c3c;
}

/* View Deck Button (for use in other components) */
.btn-view-deck {
  background: linear-gradient(135deg, #3d5a80, #2c3e50);
  border: 1px solid #4a90d9;
  color: #ecf0f1;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-view-deck:hover {
  background: linear-gradient(135deg, #4a90d9, #3d5a80);
  transform: translateY(-2px);
}
`;document.head.appendChild(Ff);var A=W(pe(),1);function oo({deck:e,isOpen:n,onClose:t,title:r="Your Deck"}){let[o,a]=(0,cr.useState)("suit"),[i,l]=(0,cr.useState)("all"),s=x=>({hearts:"\u2665",diamonds:"\u2666",clubs:"\u2663",spades:"\u2660"})[x]||"?",u=x=>x==="hearts"||x==="diamonds"?"#e74c3c":"#2c3e50",g={A:14,K:13,Q:12,J:11,10:10,9:9,8:8,7:7,6:6,5:5,4:4,3:3,2:2},v={spades:0,hearts:1,clubs:2,diamonds:3},m=(0,cr.useMemo)(()=>{let x={total:e.length,bySuit:{hearts:0,diamonds:0,clubs:0,spades:0},byRank:{},enhanced:0,enhancements:{}};for(let C of e)if(x.bySuit[C.suit]=(x.bySuit[C.suit]||0)+1,x.byRank[C.rank]=(x.byRank[C.rank]||0)+1,C.enhancement){x.enhanced++;let I=C.enhancement.name;x.enhancements[I]=(x.enhancements[I]||0)+1}return x},[e]),k=(0,cr.useMemo)(()=>{let x=[...e];return i!=="all"&&(x=x.filter(C=>C.suit===i)),o==="suit"?x.sort((C,I)=>{let p=v[C.suit]-v[I.suit];return p!==0?p:g[I.rank]-g[C.rank]}):o==="rank"?x.sort((C,I)=>{let p=g[I.rank]-g[C.rank];return p!==0?p:v[C.suit]-v[I.suit]}):o==="enhancement"&&x.sort((C,I)=>{if(C.enhancement&&!I.enhancement)return-1;if(!C.enhancement&&I.enhancement)return 1;if(C.enhancement&&I.enhancement){let d=C.enhancement.name.localeCompare(I.enhancement.name);if(d!==0)return d}let p=v[C.suit]-v[I.suit];return p!==0?p:g[I.rank]-g[C.rank]}),x},[e,o,i]);return n?(0,A.jsx)("div",{className:"deck-viewer-overlay",onClick:t,children:(0,A.jsxs)("div",{className:"deck-viewer-container",onClick:x=>x.stopPropagation(),children:[(0,A.jsxs)("header",{className:"deck-viewer-header",children:[(0,A.jsxs)("h2",{children:["\u{1F3B4} ",r," (",m.total," cards)"]}),(0,A.jsx)("button",{className:"deck-viewer-close",onClick:t,children:"\xD7"})]}),(0,A.jsxs)("div",{className:"deck-stats",children:[(0,A.jsxs)("div",{className:"stat-group suits",children:[(0,A.jsx)("span",{className:"stat-label",children:"Suits:"}),(0,A.jsxs)("span",{className:"stat-item",style:{color:"#e74c3c"},children:["\u2665 ",m.bySuit.hearts]}),(0,A.jsxs)("span",{className:"stat-item",style:{color:"#e74c3c"},children:["\u2666 ",m.bySuit.diamonds]}),(0,A.jsxs)("span",{className:"stat-item",style:{color:"#2c3e50"},children:["\u2663 ",m.bySuit.clubs]}),(0,A.jsxs)("span",{className:"stat-item",style:{color:"#2c3e50"},children:["\u2660 ",m.bySuit.spades]})]}),m.enhanced>0&&(0,A.jsxs)("div",{className:"stat-group enhanced",children:[(0,A.jsx)("span",{className:"stat-label",children:"Enhanced:"}),(0,A.jsxs)("span",{className:"stat-value",children:[m.enhanced," cards"]}),Object.entries(m.enhancements).map(([x,C])=>(0,A.jsxs)("span",{className:"enhancement-stat",children:[x,": ",C]},x))]})]}),(0,A.jsxs)("div",{className:"deck-viewer-controls",children:[(0,A.jsxs)("div",{className:"control-group",children:[(0,A.jsx)("label",{children:"Sort by:"}),(0,A.jsxs)("select",{value:o,onChange:x=>a(x.target.value),children:[(0,A.jsx)("option",{value:"suit",children:"Suit"}),(0,A.jsx)("option",{value:"rank",children:"Rank"}),(0,A.jsx)("option",{value:"enhancement",children:"Enhancement"})]})]}),(0,A.jsxs)("div",{className:"control-group",children:[(0,A.jsx)("label",{children:"Filter:"}),(0,A.jsxs)("select",{value:i,onChange:x=>l(x.target.value),children:[(0,A.jsx)("option",{value:"all",children:"All Suits"}),(0,A.jsx)("option",{value:"hearts",children:"\u2665 Hearts"}),(0,A.jsx)("option",{value:"diamonds",children:"\u2666 Diamonds"}),(0,A.jsx)("option",{value:"clubs",children:"\u2663 Clubs"}),(0,A.jsx)("option",{value:"spades",children:"\u2660 Spades"})]})]})]}),(0,A.jsx)("div",{className:"deck-viewer-cards",children:k.map((x,C)=>(0,A.jsxs)("div",{className:`viewer-card ${x.enhancement?"has-enhancement":""}`,style:{color:u(x.suit)},children:[(0,A.jsx)("div",{className:"viewer-card-rank",children:x.rank}),(0,A.jsx)("div",{className:"viewer-card-suit",children:s(x.suit)}),x.enhancement&&(0,A.jsx)("div",{className:"viewer-card-enhancement",style:{backgroundColor:x.enhancement.color},title:`${x.enhancement.name}: ${x.enhancement.effect}`,children:x.enhancement.name.charAt(0)})]},`${x.id}-${C}`))}),(0,A.jsxs)("div",{className:"rank-counts",children:[(0,A.jsx)("span",{className:"rank-label",children:"Card Counts:"}),["A","K","Q","J","10","9","8","7","6","5","4","3","2"].map(x=>(0,A.jsxs)("span",{className:`rank-count ${(m.byRank[x]||0)>4?"extra":(m.byRank[x]||0)<4?"missing":""}`,children:[x,": ",m.byRank[x]||0]},x))]})]})}):null}var y=W(pe(),1);function Af(e,n,t=[],r=!1,o=[]){let a=[],i=t.map(g=>g.name),s=[...$f().filter(g=>!i.includes(g.name))].sort(()=>Math.random()-.5);for(let g=0;g<Math.min(2,s.length);g++){let v=s[g];a.push({id:`legend-${g}-${Date.now()}`,type:"legend",...v,price:Hf(v.rarity)})}let u=["standard","position","ballpark","training","training"];for(let g=0;g<2;g++){let v=u[Math.floor(Math.random()*u.length)];a.push({id:`pack-${g}-${Date.now()}`,type:"pack",packType:v,...jf(v)})}if(!r){let g=Wm(o);g&&a.push({id:`voucher-${Date.now()}`,type:"voucher",...g})}return a.push({id:`medical-${Date.now()}`,type:"medical",name:"Medical Pack",description:"Heals injured legend OR buffs random legend +20% for 3 innings",price:e*5,effect:"medical"}),a}function Hf(e){return{common:4,uncommon:6,rare:8,legendary:12}[e]||5}function jf(e){return{standard:{name:"Trading Card Pack",description:"Choose 1 of 5 random Legends",price:4,icon:"\u{1F3B4}",legendCount:5},position:{name:"Position Pack",description:"Choose 1 of 3 Position cards",price:4,icon:"\u26BE",cardCount:3},ballpark:{name:"Ballpark Pack",description:"Choose 1 of 3 Ballpark cards",price:6,icon:"\u{1F3DF}\uFE0F",cardCount:3},training:{name:"Training Pack",description:"Choose 1 of 3 card enhancements",price:5,icon:"\u{1F3CB}\uFE0F",cardCount:3}}[e]}function Vm(){return[{name:"Batting Practice",type:"training",effect:"+30 Chips",bonus:{chips:30},description:"Perfecting your swing",color:"#4a90d9"},{name:"Film Study",type:"training",effect:"+4 Mult",bonus:{mult:4},description:"Know the pitcher's tendencies",color:"#9b59b6"},{name:"Clutch Training",type:"training",effect:"1 in 4: +10 Mult",bonus:{clutchMult:10,clutchChance:.25},description:"Perform under pressure",color:"#e74c3c"},{name:"Pine Tar Grip",type:"equipment",effect:"+50 Chips",bonus:{chips:50},description:"Better bat control",color:"#8b4513"},{name:"Weighted Bat",type:"equipment",effect:"+10 Mult",bonus:{mult:10},description:"Power hitting",color:"#e67e22"},{name:"Lucky Cleats",type:"equipment",effect:"1.5\xD7 Mult",bonus:{multMult:1.5},description:"Superstition pays off",color:"#f39c12"},{name:"Doubleheader",type:"special",effect:"Duplicate card",bonus:{duplicate:!0},description:"Play it twice",color:"#27ae60"},{name:"Caught Stealing",type:"special",effect:"Remove card",bonus:{remove:!0},description:"Trim the fat",color:"#c0392b"}]}function Wm(e=[]){let t=[{name:"Expanded Roster",description:"+1 Legend slot",effect:"maxLegends"},{name:"Extra Innings",description:"+1 hand per round",effect:"handsPerRound"},{name:"Bullpen Depth",description:"+1 discard per round",effect:"discardsPerRound"},{name:"Farm System",description:"Earn interest on up to $50",effect:"interestCap"},{name:"Scout Report",description:"Rerolls cost $2 less",effect:"rerollCost"},{name:"Paint the Corner",description:"+1 hand size",effect:"handSize"},{name:"Training Camp",description:"Reduce injury chance by 50%",effect:"trainingCamp"}].filter(o=>!e.includes(o.effect));return t.length===0?null:{...t[Math.floor(Math.random()*t.length)],price:10}}function Ym(){return[{name:"First Base",position:"1B",effect:"Pair +1 Level",handType:"PAIR",description:"Power hitter's corner"},{name:"Second Base",position:"2B",effect:"Two Pair +1 Level",handType:"TWO_PAIR",description:"Turn two specialist"},{name:"Shortstop",position:"SS",effect:"Straight +1 Level",handType:"STRAIGHT",description:"Field general"},{name:"Third Base",position:"3B",effect:"Three of a Kind +1 Level",handType:"THREE_OF_A_KIND",description:"Hot corner"},{name:"Catcher",position:"C",effect:"Full House +1 Level",handType:"FULL_HOUSE",description:"Field commander"},{name:"Pitcher",position:"P",effect:"Flush +1 Level",handType:"FLUSH",description:"Ace of the staff"},{name:"Left Field",position:"LF",effect:"High Card +2 Levels",handType:"HIGH_CARD",description:"Green monster patrol"},{name:"Center Field",position:"CF",effect:"Four of a Kind +1 Level",handType:"FOUR_OF_A_KIND",description:"Range for days"},{name:"Right Field",position:"RF",effect:"Straight Flush +1 Level",handType:"STRAIGHT_FLUSH",description:"Cannon arm"},{name:"Designated Hitter",position:"DH",effect:"+5 Mult to all hands",handType:"ALL",description:"Pure offense"}]}function Km(){return[{name:"Fenway Park",city:"Boston",effect:"+50 Chips on flushes",bonus:"flush_chips",description:"The Green Monster"},{name:"Yankee Stadium",city:"New York",effect:"+3 Mult always",bonus:"flat_mult",description:"The House That Ruth Built"},{name:"Wrigley Field",city:"Chicago",effect:"+30 Chips always",bonus:"flat_chips",description:"The Friendly Confines"},{name:"Dodger Stadium",city:"Los Angeles",effect:"Pairs give +15 Chips",bonus:"pair_chips",description:"Blue Heaven on Earth"},{name:"Oracle Park",city:"San Francisco",effect:"+20 Mult on straights",bonus:"straight_mult",description:"McCovey Cove"},{name:"Camden Yards",city:"Baltimore",effect:"+$2 per hand played",bonus:"money_per_hand",description:"Retro classic"},{name:"Busch Stadium",city:"St. Louis",effect:"Full House +40 Chips",bonus:"fullhouse_chips",description:"Gateway to the West"},{name:"PNC Park",city:"Pittsburgh",effect:"+1 Discard per round",bonus:"extra_discard",description:"Best view in baseball"},{name:"Petco Park",city:"San Diego",effect:"+1 Hand size",bonus:"hand_size",description:"Pitcher's paradise"},{name:"Coors Field",city:"Denver",effect:"All chip bonuses +25%",bonus:"chip_multiplier",description:"Mile high magic"},{name:"Kauffman Stadium",city:"Kansas City",effect:"+15 Mult if hand contains Three of a Kind",bonus:"trips_mult",description:"The K - Triples Alley"}]}function $f(){return[{name:"Babe Ruth",position:"RF/P",rarity:"legendary",effect:"+50 Mult",description:"The Sultan of Swat"},{name:"Willie Mays",position:"CF",rarity:"legendary",effect:"+40 Mult",description:"The Say Hey Kid"},{name:"Ted Williams",position:"LF",rarity:"legendary",effect:"+100 Chips per face card",description:"The Splendid Splinter"},{name:"Shohei Ohtani",position:"DH/P",rarity:"legendary",effect:"+10 Chips, +2 Mult per hand played",description:"The Two-Way Star"},{name:"Walter Johnson",position:"P",rarity:"legendary",effect:"+20 Mult",description:"The Big Train"},{name:"Dr. Awesome",position:"STAFF",rarity:"legendary",effect:"Team immunity to injuries",description:"The Miracle Worker",isStaff:!0,noHomeAwayBonus:!0},{name:"Hank Aaron",position:"RF",rarity:"rare",effect:"+25 Chips per face card",description:"Hammerin' Hank"},{name:"Sandy Koufax",position:"P",rarity:"rare",effect:"+20 Mult if no discards used",description:"Perfect game artist"},{name:"Mickey Mantle",position:"CF",rarity:"rare",effect:"+15 Mult if hand has both red & black cards",description:"The Commerce Comet (Switch Hitter)"},{name:"Derek Jeter",position:"SS",rarity:"uncommon",effect:"+10 Mult if 5 Legends",description:"The Captain"},{name:"Ken Griffey Jr.",position:"CF",rarity:"uncommon",effect:"+15 Mult for Aces",description:"The Kid"},{name:"Mariano Rivera",position:"RP",rarity:"uncommon",effect:"+30 Mult on final hand",description:"Enter Sandman"},{name:"Jackie Robinson",position:"2B",rarity:"uncommon",effect:"+10 Mult (Barrier Breaker)",description:"42"},{name:"Cal Ripken Jr.",position:"SS",rarity:"uncommon",effect:"+8 Mult",description:"Iron Man"},{name:"Tony Gwynn",position:"RF",rarity:"common",effect:"+20 Chips always",description:"Mr. Padre"},{name:"Reggie Jackson",position:"RF",rarity:"common",effect:"+25 Mult in Boss At-Bats",description:"Mr. October"},{name:"Yogi Berra",position:"C",rarity:"common",effect:"Random +10-30 Chips",description:"It ain't over til it's over"},{name:"Ozzie Smith",position:"SS",rarity:"common",effect:"+15 Chips",description:"The Wizard"},{name:"Ernie Banks",position:"SS",rarity:"common",effect:"+15 Chips",description:"Let's play two!"},{name:"George Brett",position:"3B",rarity:"legendary",effect:"3\xD7 Mult when score < target",description:"Pine Tar Game - Comeback King"},{name:"Rickey Henderson",position:"LF",rarity:"common",effect:"+10 Chips",description:"Man of Steal"},{name:"Nolan Ryan",position:"P",rarity:"common",effect:"+25 Chips",description:"The Ryan Express"}]}function Gm(e,n=[],t=[],r=[]){let o=jf(e);if(e==="standard"){let a=n.map(m=>m.name),l=[...$f().filter(m=>!a.includes(m.name))].sort(()=>Math.random()-.5),s=[];for(let m of l){let k=1;m.rarity==="common"?k=4:m.rarity==="uncommon"?k=3:m.rarity==="rare"&&(k=2);for(let x=0;x<k;x++)s.push(m)}let u=[...s].sort(()=>Math.random()-.5),g=[],v=new Set;for(let m of u)!v.has(m.name)&&g.length<5&&(g.push({...m,id:`pack-legend-${m.name}-${Date.now()}`,cardType:"legend"}),v.add(m.name));return{type:"legend_selection",cards:g,pickCount:Math.min(1,g.length)}}if(e==="position"){let a=t.map(u=>u.name),s=[...Ym().filter(u=>!a.includes(u.name))].sort(()=>Math.random()-.5).slice(0,3).map(u=>({...u,id:`pack-position-${u.name}-${Date.now()}`,cardType:"position"}));return{type:"position_selection",cards:s,pickCount:Math.min(1,s.length)}}if(e==="ballpark"){let a=r.map(u=>u.name),s=[...Km().filter(u=>!a.includes(u.name))].sort(()=>Math.random()-.5).slice(0,3).map(u=>({...u,id:`pack-ballpark-${u.name}-${Date.now()}`,cardType:"ballpark"}));return{type:"ballpark_selection",cards:s,pickCount:Math.min(1,s.length)}}if(e==="training"){let l=[...Vm()].sort(()=>Math.random()-.5).slice(0,3).map(s=>({...s,id:`pack-enhancement-${s.name}-${Date.now()}`,cardType:"enhancement"}));return{type:"enhancement_selection",cards:l,pickCount:Math.min(1,l.length)}}return{type:"coming_soon",cards:[],pickCount:0}}function bs({money:e,series:n,onBuyItem:t,onSellLegend:r,onSellBallpark:o,onReroll:a,onContinue:i,onMedicalPack:l,onApplyEnhancement:s,legends:u,maxLegends:g,positions:v=[],ballparks:m=[],maxBallparks:k=5,legendInjuries:x={},legendBuffs:C={},voucherBoughtThisSeries:I=!1,rerollsThisShop:p=0,hasScoutReport:d=!1,deck:h=[],purchasedVoucherEffects:T=[]}){let[P,_]=(0,Ue.useState)([]),[M,N]=(0,Ue.useState)(null),[F,L]=(0,Ue.useState)(null),[ne,Oe]=(0,Ue.useState)(null),[Ce,un]=(0,Ue.useState)([]),[ue,Q]=(0,Ue.useState)(null),[O,ct]=(0,Ue.useState)(null),[kn,Xe]=(0,Ue.useState)([]),[dt,ft]=(0,Ue.useState)([]),[En,$n]=(0,Ue.useState)(!1),[Ia,Pt]=(0,Ue.useState)(!1),pt=(d?3:5)+p;(0,Ue.useEffect)(()=>{_(Af(n,e,u,I,T))},[n]);let Fa=()=>{e>=pt&&(a(pt),_(Af(n,e-pt,u,I,T)),N(null))},Aa=w=>{if(e>=w.price){if(w.type==="legend"&&u.length>=g){alert("Legend roster is full! Sell a Legend first or buy an Expanded Roster voucher.");return}if(w.type==="medical"){if(u.length===0){alert("You need at least one Legend to use a Medical Pack!");return}l(w.price),_(P.filter(B=>B.id!==w.id)),N(null);return}if(w.type==="pack"){let B=Gm(w.packType,u,v,m);if(B.type==="coming_soon"||B.cards.length===0){alert(`No more cards available in ${w.name}! You may own them all.`);return}if(w.packType==="training"){let ae=[...h].sort(()=>Math.random()-.5).slice(0,8);Xe(ae),ft(B.cards),$n(!0),Q(null),ct(null),t({...w,isPack:!0}),_(P.filter(te=>te.id!==w.id)),N(null);return}L(w),Oe(B),un([]),t({...w,isPack:!0}),_(P.filter(Y=>Y.id!==w.id)),N(null);return}t(w),_(P.filter(B=>B.id!==w.id)),N(null)}},Ha=w=>{if(!ne)return;Ce.some(Y=>Y.id===w.id)?un(Ce.filter(Y=>Y.id!==w.id)):Ce.length<ne.pickCount?un([...Ce,w]):un([w])},ja=()=>{if(Ce.length>0)for(let w of Ce){let B=w.cardType||"legend";if(B==="legend"&&u.length>=g){alert("Legend roster is full! Sell a Legend first.");return}if(B==="ballpark"&&m.length>=k){alert("Ballpark collection is full! Maximum of 5 ballparks.");return}if(B==="enhancement"){let ae=[...h].sort(()=>Math.random()-.5).slice(0,8);Xe(ae),Q(w),$n(!1),L(null),Oe(null),un([]);return}t({type:B,...w,price:0})}L(null),Oe(null),un([])},$a=()=>{ue&&O&&s&&(s(O.id,ue),Q(null),ct(null),Xe([]))},ao=()=>{Q(null),ct(null),Xe([]),ft([]),$n(!1)},Ua=w=>{Q(w),$n(!1)},mt=w=>({common:"#aaa",uncommon:"#4a90d9",rare:"#9b59b6",legendary:"#ffd700"})[w]||"#aaa",Va=w=>w==="position_selection"?"Position":w==="ballpark_selection"?"Ballpark":w==="enhancement_selection"?"Enhancement":"Legend",Wa=w=>w.cardType==="position"?"#4a90d9":w.cardType==="ballpark"?"#27ae60":w.cardType==="enhancement"?w.color||"#f39c12":mt(w.rarity),dr=w=>({hearts:"\u2665",diamonds:"\u2666",clubs:"\u2663",spades:"\u2660"})[w]||"?",io=w=>w==="hearts"||w==="diamonds"?"#e74c3c":"#2c3e50";if(F&&!ne)return(0,y.jsx)("div",{className:"shop-overlay",children:(0,y.jsxs)("div",{className:"pack-opening-container",children:[(0,y.jsxs)("header",{className:"pack-header",children:[(0,y.jsxs)("h2",{children:[F.icon||"\u{1F4E6}"," ",F.name||"Pack"]}),(0,y.jsx)("p",{className:"pack-instruction",children:"Unable to open pack. Please try again."})]}),(0,y.jsx)("footer",{className:"pack-footer",children:(0,y.jsx)("button",{className:"btn-confirm-pack",onClick:()=>{L(null),Oe(null)},children:"Close"})})]})});if(F&&ne){let w=Va(ne.type);return!ne.cards||ne.cards.length===0?(0,y.jsx)("div",{className:"shop-overlay",children:(0,y.jsxs)("div",{className:"pack-opening-container",children:[(0,y.jsxs)("header",{className:"pack-header",children:[(0,y.jsxs)("h2",{children:[F.icon," ",F.name]}),(0,y.jsx)("p",{className:"pack-instruction",children:"No cards available in this pack!"})]}),(0,y.jsx)("footer",{className:"pack-footer",children:(0,y.jsx)("button",{className:"btn-confirm-pack",onClick:()=>{L(null),Oe(null)},children:"Close"})})]})}):(0,y.jsx)("div",{className:"shop-overlay",children:(0,y.jsxs)("div",{className:"pack-opening-container",children:[(0,y.jsxs)("header",{className:"pack-header",children:[(0,y.jsxs)("h2",{children:[F.icon," ",F.name]}),(0,y.jsx)("p",{className:"pack-instruction",children:ne.pickCount>0?`Choose ${ne.pickCount} ${w} card to add!`:"No cards available"})]}),(0,y.jsx)("div",{className:"pack-cards",children:ne.cards.map(B=>(0,y.jsx)("div",{className:`pack-legend-card ${B.cardType||"legend"}-card ${Ce.some(Y=>Y.id===B.id)?"selected":""}`,onClick:()=>Ha(B),style:{borderColor:Wa(B)},children:B.cardType==="legend"||!B.cardType?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"legend-rarity",style:{color:mt(B.rarity)},children:B.rarity?.toUpperCase()||"LEGEND"}),(0,y.jsx)("div",{className:"legend-name",children:B.name}),(0,y.jsx)("div",{className:"legend-position",children:B.position}),(0,y.jsx)("div",{className:"legend-effect",children:B.effect}),(0,y.jsx)("div",{className:"legend-description",children:B.description})]}):B.cardType==="position"?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"card-type-label position-label",children:"POSITION"}),(0,y.jsx)("div",{className:"legend-name",children:B.name}),(0,y.jsx)("div",{className:"legend-position",children:B.position}),(0,y.jsx)("div",{className:"legend-effect",children:B.effect}),(0,y.jsx)("div",{className:"legend-description",children:B.description})]}):B.cardType==="ballpark"?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"card-type-label ballpark-label",children:"BALLPARK"}),(0,y.jsx)("div",{className:"legend-name",children:B.name}),(0,y.jsx)("div",{className:"legend-position",children:B.city}),(0,y.jsx)("div",{className:"legend-effect",children:B.effect}),(0,y.jsx)("div",{className:"legend-description",children:B.description})]}):B.cardType==="enhancement"?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("div",{className:"card-type-label enhancement-label",style:{color:B.color},children:B.type?.toUpperCase()}),(0,y.jsx)("div",{className:"legend-name",children:B.name}),(0,y.jsx)("div",{className:"legend-effect",style:{color:B.color},children:B.effect}),(0,y.jsx)("div",{className:"legend-description",children:B.description})]}):null},B.id))}),(0,y.jsx)("footer",{className:"pack-footer",children:(0,y.jsx)("button",{className:"btn-confirm-pack",onClick:ja,children:Ce.length>0?`Add ${Ce[0].name}`:"Skip (No Selection)"})})]})})}if(En&&(kn.length===0||dt.length===0)&&($n(!1),Xe([]),ft([])),En&&kn.length>0&&dt.length>0)return(0,y.jsx)("div",{className:"shop-overlay",children:(0,y.jsxs)("div",{className:"enhancement-container cards-first",children:[(0,y.jsxs)("header",{className:"pack-header",children:[(0,y.jsx)("h2",{children:"\u{1F3CB}\uFE0F Training Pack"}),(0,y.jsx)("p",{className:"pack-instruction",children:"Here are your 8 random cards. Now choose which training to apply:"})]}),(0,y.jsxs)("div",{className:"deck-preview-section",children:[(0,y.jsx)("h3",{children:"Available Cards to Enhance:"}),(0,y.jsx)("div",{className:"deck-selection preview",children:kn.map(w=>(0,y.jsxs)("div",{className:`deck-card ${w.enhancement?"has-enhancement":""}`,style:{color:io(w.suit)},children:[(0,y.jsx)("div",{className:"deck-card-rank",children:w.rank}),(0,y.jsx)("div",{className:"deck-card-suit",children:dr(w.suit)}),w.enhancement&&(0,y.jsx)("div",{className:"deck-card-enhancement",style:{backgroundColor:w.enhancement.color},children:w.enhancement.name.charAt(0)})]},w.id))})]}),(0,y.jsxs)("div",{className:"enhancement-options-section",children:[(0,y.jsx)("h3",{children:"Choose Enhancement:"}),(0,y.jsx)("div",{className:"enhancement-options",children:dt.map(w=>(0,y.jsxs)("div",{className:"enhancement-option-card",onClick:()=>Ua(w),style:{borderColor:w.color},children:[(0,y.jsx)("div",{className:"enhancement-type",style:{color:w.color},children:w.type?.toUpperCase()}),(0,y.jsx)("div",{className:"enhancement-name",children:w.name}),(0,y.jsx)("div",{className:"enhancement-effect",style:{color:w.color},children:w.effect}),(0,y.jsx)("div",{className:"enhancement-desc",children:w.description})]},w.id))})]}),(0,y.jsx)("footer",{className:"pack-footer",children:(0,y.jsx)("button",{className:"btn-cancel",onClick:ao,children:"Skip Enhancement"})})]})});if(ue&&kn.length===0&&(Q(null),ct(null)),ue&&kn.length>0){let w=ue.bonus?.remove,B=ue.bonus?.duplicate,Y=w?"Remove":B?"Duplicate":"Enhance";return(0,y.jsx)("div",{className:"shop-overlay",children:(0,y.jsxs)("div",{className:"enhancement-container",children:[(0,y.jsxs)("header",{className:"pack-header",children:[(0,y.jsxs)("h2",{children:[w?"\u{1F6AB}":B?"\u{1F46F}":"\u{1F3CB}\uFE0F"," ",ue.name]}),(0,y.jsxs)("div",{className:"enhancement-info",style:{borderColor:ue.color},children:[(0,y.jsx)("div",{className:"enhancement-name",style:{color:ue.color},children:ue.name}),(0,y.jsx)("div",{className:"enhancement-effect",children:ue.effect})]}),(0,y.jsx)("p",{className:"pack-instruction",children:w?"Select a card to REMOVE from your deck:":B?"Select a card to DUPLICATE in your deck:":"Select a card to enhance:"})]}),(0,y.jsx)("div",{className:"deck-selection",children:kn.map(te=>(0,y.jsxs)("div",{className:`deck-card ${O?.id===te.id?"selected":""} ${te.enhancement?"has-enhancement":""}`,onClick:()=>ct(te),style:{color:io(te.suit)},children:[(0,y.jsx)("div",{className:"deck-card-rank",children:te.rank}),(0,y.jsx)("div",{className:"deck-card-suit",children:dr(te.suit)}),te.enhancement&&(0,y.jsx)("div",{className:"deck-card-enhancement",style:{backgroundColor:te.enhancement.color},children:te.enhancement.name.charAt(0)})]},te.id))}),(0,y.jsxs)("footer",{className:"pack-footer",children:[(0,y.jsx)("button",{className:"btn-cancel",onClick:ao,children:"Cancel"}),(0,y.jsx)("button",{className:"btn-confirm-pack",onClick:$a,disabled:!O,style:w?{backgroundColor:"#c0392b"}:B?{backgroundColor:"#27ae60"}:{},children:O?`${Y} ${O.rank}${dr(O.suit)}`:"Select a card"})]})]})})}return(0,y.jsxs)("div",{className:"shop-overlay",children:[(0,y.jsxs)("div",{className:"shop-container",children:[(0,y.jsxs)("header",{className:"shop-header",children:[(0,y.jsx)("h2",{children:"\u{1F3DF}\uFE0F The Dugout"}),(0,y.jsxs)("div",{className:"shop-money",children:[(0,y.jsx)("span",{className:"money-icon",children:"\u{1F4B0}"}),(0,y.jsxs)("span",{className:"money-amount",children:["$",e]})]})]}),(0,y.jsxs)("div",{className:"shop-content",children:[(0,y.jsxs)("section",{className:"shop-section",children:[(0,y.jsx)("h3",{children:"\u2B50 Legends"}),(0,y.jsxs)("div",{className:"shop-items legends-row",children:[P.filter(w=>w.type==="legend").length===0&&(0,y.jsx)("div",{className:"no-items-message",children:"You own all available Legends!"}),P.filter(w=>w.type==="legend").map(w=>(0,y.jsxs)("div",{className:`shop-item legend-card ${M?.id===w.id?"selected":""}`,onClick:()=>N(w),style:{borderColor:mt(w.rarity)},children:[(0,y.jsx)("div",{className:"legend-rarity",style:{color:mt(w.rarity)},children:w.rarity.toUpperCase()}),(0,y.jsx)("div",{className:"legend-name",children:w.name}),(0,y.jsx)("div",{className:"legend-position",children:w.position}),(0,y.jsx)("div",{className:"legend-effect",children:w.effect}),(0,y.jsx)("div",{className:"legend-description",children:w.description}),(0,y.jsxs)("div",{className:"item-price",children:["$",w.price]})]},w.id))]})]}),(0,y.jsxs)("section",{className:"shop-section",children:[(0,y.jsx)("h3",{children:"\u{1F4E6} Booster Packs"}),u.length>=g&&(0,y.jsx)("div",{className:"inventory-warning",children:'\u26A0\uFE0F Legend roster is full! Sell a Legend or buy "Expanded Roster" voucher to open Trading Card Packs.'}),m.length>=k&&(0,y.jsx)("div",{className:"inventory-warning",children:"\u26A0\uFE0F Ballpark collection is full (5/5)! Sell a Ballpark to open Ballpark Packs."}),(0,y.jsx)("div",{className:"shop-items packs-row",children:P.filter(w=>w.type==="pack").map(w=>{let B=w.packType==="standard"&&u.length>=g,Y=w.packType==="ballpark"&&m.length>=k,ae=B||Y;return(0,y.jsxs)("div",{className:`shop-item pack-card ${M?.id===w.id?"selected":""} ${ae?"blocked":""}`,onClick:()=>!ae&&N(w),title:ae?B?"Legend roster full!":"Ballpark collection full!":"",children:[(0,y.jsx)("div",{className:"pack-icon",children:w.icon}),(0,y.jsx)("div",{className:"pack-name",children:w.name}),(0,y.jsx)("div",{className:"pack-description",children:w.description}),(0,y.jsxs)("div",{className:"item-price",children:["$",w.price]}),ae&&(0,y.jsx)("div",{className:"blocked-overlay",children:"\u{1F6AB} FULL"})]},w.id)})})]}),(0,y.jsxs)("section",{className:"shop-section",children:[(0,y.jsx)("h3",{children:"\u{1F3AB} Vouchers"}),(0,y.jsx)("div",{className:"shop-items vouchers-row",children:P.filter(w=>w.type==="voucher").map(w=>(0,y.jsxs)("div",{className:`shop-item voucher-card ${M?.id===w.id?"selected":""}`,onClick:()=>N(w),children:[(0,y.jsx)("div",{className:"voucher-name",children:w.name}),(0,y.jsx)("div",{className:"voucher-description",children:w.description}),(0,y.jsxs)("div",{className:"item-price",children:["$",w.price]})]},w.id))})]}),(0,y.jsxs)("section",{className:"shop-section",children:[(0,y.jsx)("h3",{children:"\u{1F3E5} Medical"}),(0,y.jsx)("div",{className:"shop-items medical-row",children:P.filter(w=>w.type==="medical").map(w=>(0,y.jsxs)("div",{className:`shop-item medical-card ${M?.id===w.id?"selected":""}`,onClick:()=>N(w),children:[(0,y.jsx)("div",{className:"medical-icon",children:"\u{1F3E5}"}),(0,y.jsx)("div",{className:"medical-name",children:w.name}),(0,y.jsx)("div",{className:"medical-description",children:w.description}),(0,y.jsxs)("div",{className:"item-price",children:["$",w.price]})]},w.id))})]}),(0,y.jsxs)("section",{className:"shop-section roster-section",children:[(0,y.jsxs)("h3",{children:["\u{1F3C6} Your Legends (",u.length,"/",g,")"]}),(0,y.jsxs)("div",{className:"roster-row",children:[u.map((w,B)=>{let Y=x[w.name]||0,ae=Y>0,te=C[w.name],cn=te&&te.inningsRemaining>0;return(0,y.jsxs)("div",{className:`roster-legend ${ae?"injured":""} ${cn?"buffed":""}`,style:{borderColor:ae?"#8b0000":cn?"#4caf50":mt(w.rarity)},children:[(0,y.jsxs)("div",{className:"legend-name",children:[w.name,ae&&(0,y.jsxs)("span",{className:"status-badge injury",title:`Injured for ${Y} more innings`,children:["\u{1F915} ",Y]}),cn&&(0,y.jsxs)("span",{className:"status-badge buff",title:`+20% for ${te.inningsRemaining} more innings`,children:["\u{1F4AA} ",te.inningsRemaining]})]}),(0,y.jsx)("div",{className:`legend-effect ${ae?"strikethrough":""}`,children:w.effect}),ae?(0,y.jsx)("div",{className:"sell-btn disabled",title:"Cannot sell injured legends",children:"\u{1F915} Injured"}):(0,y.jsxs)("button",{className:"sell-btn",onClick:()=>r(w,B),children:["Sell $",Math.floor(Hf(w.rarity)/2)]})]},B)}),u.length===0&&(0,y.jsx)("div",{className:"roster-empty",children:"No Legends yet - buy some above!"})]})]}),(0,y.jsxs)("section",{className:"shop-section roster-section ballparks-roster",children:[(0,y.jsxs)("h3",{children:["\u{1F3DF}\uFE0F Your Ballparks (",m.length,"/",k,")"]}),(0,y.jsxs)("div",{className:"roster-row",children:[m.map((w,B)=>(0,y.jsxs)("div",{className:"roster-ballpark",children:[(0,y.jsx)("div",{className:"ballpark-name",children:w.name}),(0,y.jsx)("div",{className:"ballpark-effect",children:w.effect}),(0,y.jsx)("button",{className:"sell-btn",onClick:()=>o(w,B),children:"Sell $1"})]},B)),m.length===0&&(0,y.jsx)("div",{className:"roster-empty",children:"No Ballparks yet - buy packs above!"})]})]})]}),(0,y.jsxs)("footer",{className:"shop-footer",children:[(0,y.jsxs)("button",{className:"btn-view-deck",onClick:()=>Pt(!0),children:["\u{1F3B4} View Deck (",h.length,")"]}),(0,y.jsxs)("button",{className:"btn-reroll",onClick:Fa,disabled:e<pt,children:["\u{1F504} Reroll ($",pt,")"]}),(0,y.jsx)("button",{className:"btn-buy",onClick:()=>M&&Aa(M),disabled:!M||e<M?.price,children:M?`Buy ${M.name} - $${M.price}`:"Select an item"}),(0,y.jsx)("button",{className:"btn-continue",onClick:i,children:"Next At-Bat \u27A1\uFE0F"})]})]}),(0,y.jsx)(oo,{deck:h,isOpen:Ia,onClose:()=>Pt(!1)})]})}var og=W(Ve(),1);function Cs(e){if(!e||e.length===0)return{type:"HIGH_CARD",scoringCards:[],name:"No Cards"};let n=[...e].sort((v,m)=>m.value-v.value),t=Ns(e),r=Qm(e),o=e.length>=5&&Object.values(r).some(v=>v>=5),a=Xm(n),i=a.isStraight;if(o&&i&&a.highCard===14)return{type:"ROYAL_FLUSH",scoringCards:a.cards,name:"Royal Flush"};if(o&&i)return{type:"STRAIGHT_FLUSH",scoringCards:a.cards,name:"Straight Flush"};let l=Ss(e,4);if(l)return{type:"FOUR_OF_A_KIND",scoringCards:l,name:"Four of a Kind"};let s=Ss(e,3),u=Ss(e.filter(v=>!s?.includes(v)),2);if(s&&u)return{type:"FULL_HOUSE",scoringCards:[...s,...u],name:"Full House"};if(o){let v=Object.entries(r).find(([k,x])=>x>=5)?.[0];return{type:"FLUSH",scoringCards:n.filter(k=>k.suit===v).slice(0,5),name:"Flush"}}if(i)return{type:"STRAIGHT",scoringCards:a.cards,name:"Straight"};if(s)return{type:"THREE_OF_A_KIND",scoringCards:s,name:"Three of a Kind"};let g=Jm(e);return g.length>=2?{type:"TWO_PAIR",scoringCards:[...g[0],...g[1]],name:"Two Pair"}:g.length===1?{type:"PAIR",scoringCards:g[0],name:"Pair"}:{type:"HIGH_CARD",scoringCards:[n[0]],name:"High Card"}}function Ns(e){let n={};for(let t of e)n[t.rank]=(n[t.rank]||0)+1;return n}function Qm(e){let n={};for(let t of e)n[t.suit]=(n[t.suit]||0)+1;return n}function Ss(e,n){let t=Ns(e);for(let[r,o]of Object.entries(t))if(o>=n)return e.filter(a=>a.rank===r).slice(0,n);return null}function Jm(e){let n=Ns(e),t=[],r=Object.entries(n).filter(([o,a])=>a>=2).sort((o,a)=>jn[a[0]]-jn[o[0]]);for(let[o,a]of r){let i=e.filter(l=>l.rank===o).slice(0,2);t.push(i)}return t}function Xm(e){if(e.length<5)return{isStraight:!1,cards:[],highCard:0};let n=[],t=new Set;for(let o of e)t.has(o.value)||(t.add(o.value),n.push(o));for(let o=0;o<=n.length-5;o++){let a=n.slice(o,o+5);if(qm(a))return{isStraight:!0,cards:a,highCard:a[0].value}}let r=n.map(o=>o.value);return r.includes(14)&&r.includes(2)&&r.includes(3)&&r.includes(4)&&r.includes(5)?{isStraight:!0,cards:[n.find(a=>a.value===5),n.find(a=>a.value===4),n.find(a=>a.value===3),n.find(a=>a.value===2),n.find(a=>a.value===14)],highCard:5}:{isStraight:!1,cards:[],highCard:0}}function qm(e){if(e.length!==5)return!1;for(let n=0;n<4;n++)if(e[n].value-e[n+1].value!==1)return!1;return!0}function Uf(e,n={},t=[],r={},o=null){let{type:a,scoringCards:i,name:l}=e,s=n[a]||1,u=r?.ballparks||[],g=r?.bossModifiers||[],v=r?.legendInjuries||{},m=r?.legendBuffs||{},k=[],x=Da[a]||{chips:0,mult:1},C=s-1,I=x.chips+C*10,p=x.mult+C*1;for(let _ of g)_.type==="hand_debuff"&&_.affectedHands?.includes(a)&&(p=Math.max(1,p-(_.multPenalty||0)));k.push({type:"base",chips:I,mult:p,handName:l+(s>1?` Lv.${s}`:""),source:l});let d=new Set(i.map(_=>_.id)),h=o?o.filter(_=>d.has(_.id)):i,T=1;for(let _ of h){let M=eh(_,g),N=`${_.rank}${Zm(_.suit)}`;if(M>0&&k.push({type:"chips",value:M,source:N}),_.enhancement&&_.enhancement.bonus){let F=_.enhancement.bonus;F.chips&&k.push({type:"chips",value:F.chips,source:`${N} ${_.enhancement.name}`}),F.mult&&k.push({type:"plusMult",value:F.mult,source:`${N} ${_.enhancement.name}`}),F.clutchMult&&F.clutchChance&&Math.random()<F.clutchChance&&k.push({type:"plusMult",value:F.clutchMult,source:`${N} CLUTCH!`}),F.multMult&&k.push({type:"timesMult",value:F.multMult,source:`${N} ${_.enhancement.name}`})}}if(!g.some(_=>_.type==="ballpark_debuff"&&_.disableBallparks))for(let _ of u){let M=th(_,a,h,r);M&&k.push({...M,source:`\u{1F3DF}\uFE0F ${_.name}`})}for(let _ of t){if(sr(_.name,v)||nh(_.name,g))continue;let M=ys(_.name,m),N=rh(_,h,o,r,M);N&&k.push({...N,source:`\u2B50 ${_.name}${M>1?" \u{1F4AA}":""}`})}return k}function Zm(e){return{hearts:"\u2665",diamonds:"\u2666",clubs:"\u2663",spades:"\u2660"}[e]||e[0]}function eh(e,n){let t=e.chips;for(let r of n){if(r.type==="suit_debuff"&&e.suit===r.suit&&(t=Math.max(0,t-r.chipPenalty)),r.type==="color_debuff"){let o=e.suit==="hearts"||e.suit==="diamonds",a=e.suit==="spades"||e.suit==="clubs";(r.color==="red"&&o||r.color==="black"&&a)&&r.nullifyChips&&(t=0)}r.type==="face_debuff"&&r.nullifyFaceChips&&["J","Q","K"].includes(e.rank)&&(t=0)}return t}function nh(e,n){for(let t of n)if(t.type==="legend_debuff"&&t.affectedLegends?.includes(e))return!0;return!1}function th(e,n,t,r){switch(e.bonus){case"flush_chips":if(n==="FLUSH"||n==="STRAIGHT_FLUSH"||n==="ROYAL_FLUSH")return{type:"chips",value:50};break;case"flat_mult":return{type:"plusMult",value:3};case"flat_chips":return{type:"chips",value:30};case"pair_chips":if(["PAIR","TWO_PAIR","FULL_HOUSE","THREE_OF_A_KIND","FOUR_OF_A_KIND"].includes(n))return{type:"chips",value:15};break;case"straight_mult":if(n==="STRAIGHT"||n==="STRAIGHT_FLUSH"||n==="ROYAL_FLUSH")return{type:"plusMult",value:20};break;case"fullhouse_chips":if(n==="FULL_HOUSE")return{type:"chips",value:40};break;case"trips_mult":if(["THREE_OF_A_KIND","FULL_HOUSE","FOUR_OF_A_KIND"].includes(n))return{type:"plusMult",value:15};break;default:return null}return null}function rh(e,n,t,r,o){let a=t||n;switch(e.name){case"Babe Ruth":return{type:"plusMult",value:Math.floor(50*o)};case"Willie Mays":return{type:"plusMult",value:Math.floor(40*o)};case"Ted Williams":{let i=n.filter(l=>["J","Q","K"].includes(l.rank));if(i.length>0)return{type:"chips",value:Math.floor(i.length*100*o)};break}case"Shohei Ohtani":{let i=r?.handsPlayed||0;if(i>0)return{type:"chips",value:Math.floor(i*10*o)};break}case"Walter Johnson":return{type:"plusMult",value:Math.floor(20*o)};case"Hank Aaron":{let i=n.filter(l=>["J","Q","K"].includes(l.rank));if(i.length>0)return{type:"chips",value:Math.floor(i.length*25*o)};break}case"Sandy Koufax":if(r?.discardsRemaining===(r?.baseDiscards||3))return{type:"plusMult",value:Math.floor(20*o)};break;case"Mickey Mantle":{let i=a.some(s=>s.suit==="hearts"||s.suit==="diamonds"),l=a.some(s=>s.suit==="spades"||s.suit==="clubs");if(i&&l)return{type:"plusMult",value:Math.floor(15*o)};break}case"Derek Jeter":if(r?.legends?.length>=5)return{type:"plusMult",value:Math.floor(10*o)};break;case"Ken Griffey Jr.":{let i=n.filter(l=>l.rank==="A");if(i.length>0)return{type:"plusMult",value:Math.floor(i.length*15*o)};break}case"Mariano Rivera":if(r?.handsRemaining===1)return{type:"plusMult",value:Math.floor(30*o)};break;case"Jackie Robinson":return{type:"plusMult",value:Math.floor(10*o)};case"Cal Ripken Jr.":return{type:"plusMult",value:Math.floor(8*o)};case"Tony Gwynn":return{type:"chips",value:Math.floor(20*o)};case"Reggie Jackson":if(r?.atBatType==="BOSS")return{type:"plusMult",value:Math.floor(25*o)};break;case"Yogi Berra":return{type:"chips",value:Math.floor((10+Math.random()*21)*o)};case"Ozzie Smith":return{type:"chips",value:Math.floor(15*o)};case"Ernie Banks":return{type:"chips",value:Math.floor(15*o)};case"George Brett":if(r&&r.currentScore<r.targetScore)return{type:"timesMult",value:Math.round(3*o*10)/10};break;case"Rickey Henderson":return{type:"chips",value:Math.floor(10*o)};case"Nolan Ryan":return{type:"chips",value:Math.floor(25*o)};default:return null}return null}var Da={HIGH_CARD:{chips:5,mult:1},PAIR:{chips:10,mult:2},TWO_PAIR:{chips:20,mult:2},THREE_OF_A_KIND:{chips:30,mult:3},STRAIGHT:{chips:30,mult:4},FLUSH:{chips:35,mult:4},FULL_HOUSE:{chips:40,mult:4},FOUR_OF_A_KIND:{chips:60,mult:7},STRAIGHT_FLUSH:{chips:100,mult:8},ROYAL_FLUSH:{chips:100,mult:8},FIVE_OF_A_KIND:{chips:120,mult:12},FLUSH_HOUSE:{chips:140,mult:14},FLUSH_FIVE:{chips:160,mult:16}};function oh(e,n,t=[]){let{chips:r,mult:o}=e,a=[],i=e.gameState?.legendInjuries||{},l=e.gameState?.legendBuffs||{};for(let s of n){if(sr(s.name,i)){a.push({legend:s.name,effect:"\u{1F915} INJURED (No effect)",debuffed:!0,injured:!0});continue}if(lh(s.name,t)){a.push({legend:s.name,effect:"\u{1F6AB} DEBUFFED (Boss modifier)",debuffed:!0});continue}let u=ys(s.name,l),g=u>1,v=!1,m="",k=r,x=o;switch(s.name){case"Babe Ruth":o+=Math.floor(50*u),m=`+${Math.floor(50*u)} Mult`,v=!0;break;case"Willie Mays":o+=Math.floor(40*u),m=`+${Math.floor(40*u)} Mult`,v=!0;break;case"Ted Williams":let C=e.scoringCards.filter(O=>["J","Q","K"].includes(O.rank));if(C.length>0){let O=Math.floor(C.length*100*u);r+=O,m=`+${O} Chips (${C.length} face cards)`,v=!0}break;case"Shohei Ohtani":let I=e.gameState?.handsPlayed||0,p=Math.floor(I*10*u),d=Math.floor(I*2*u);r+=p,o+=d,m=`+${p} Chips, +${d} Mult (${I} hands played)`,v=!0;break;case"Walter Johnson":o+=Math.floor(20*u),m=`+${Math.floor(20*u)} Mult (The Big Train)`,v=!0;break;case"Hank Aaron":let h=e.scoringCards.filter(O=>["J","Q","K"].includes(O.rank));if(h.length>0){let O=Math.floor(h.length*25*u);r+=O,m=`+${O} Chips`,v=!0}break;case"Sandy Koufax":if(e.gameState?.discardsRemaining===(e.gameState?.baseDiscards||3)){let O=Math.floor(20*u);o+=O,m=`+${O} Mult (Perfect game - no discards)`,v=!0}break;case"Mickey Mantle":let T=e.allCards||e.scoringCards,P=T.some(O=>O.suit==="hearts"||O.suit==="diamonds"),_=T.some(O=>O.suit==="spades"||O.suit==="clubs");if(P&&_){let O=Math.floor(15*u);o+=O,m=`+${O} Mult (Switch hitter - red & black cards)`,v=!0}break;case"Derek Jeter":if(n.length>=5){let O=Math.floor(10*u);o+=O,m=`+${O} Mult (Full roster)`,v=!0}break;case"Ken Griffey Jr.":let M=e.scoringCards.filter(O=>O.rank==="A");if(M.length>0){let O=Math.floor(M.length*15*u);o+=O,m=`+${O} Mult (${M.length} Aces)`,v=!0}break;case"Mariano Rivera":if(e.gameState?.handsRemaining===1){let O=Math.floor(30*u);o+=O,m=`+${O} Mult (Closing time)`,v=!0}break;case"Jackie Robinson":let N=Math.floor(10*u);o+=N,m=`+${N} Mult (Barrier Breaker)`,v=!0;break;case"Cal Ripken Jr.":let F=Math.floor(8*u);o+=F,m=`+${F} Mult (Iron Man)`,v=!0;break;case"Tony Gwynn":let L=Math.floor(20*u);r+=L,m=`+${L} Chips`,v=!0;break;case"Reggie Jackson":if(e.gameState?.atBatType==="BOSS"){let O=Math.floor(25*u);o+=O,m=`+${O} Mult (Mr. October)`,v=!0}break;case"Yogi Berra":let ne=10+Math.floor(Math.random()*21),Oe=Math.floor(ne*u);r+=Oe,m=`+${Oe} Chips (It ain't over...)`,v=!0;break;case"Ozzie Smith":let Ce=Math.floor(15*u);r+=Ce,m=`+${Ce} Chips (The Wizard)`,v=!0;break;case"Ernie Banks":let un=Math.floor(15*u);r+=un,m=`+${un} Chips (Let's play two!)`,v=!0;break;case"George Brett":if(e.gameState&&e.gameState.currentScore<e.gameState.targetScore){let O=3*u;o=Math.floor(o*O),m=`\xD7${O.toFixed(1)} Mult (Comeback King!)`,v=!0}break;case"Rickey Henderson":let ue=Math.floor(10*u);r+=ue,m=`+${ue} Chips (Man of Steal)`,v=!0;break;case"Nolan Ryan":let Q=Math.floor(25*u);r+=Q,m=`+${Q} Chips (The Ryan Express)`,v=!0;break;case"Dr. Awesome":m="\u{1F3E5} Team Immunity",v=!0;break;default:break}v&&(g&&(m+=" \u{1F4AA}+20%"),a.push({legend:s.name,effect:m,buffed:g}))}return{chips:r,mult:o,legendEffects:a}}function ah(e,n,t=[]){let{chips:r,mult:o}=e,a=[];if(t.some(l=>l.type==="ballpark_debuff"&&l.disableBallparks)){for(let l of n)a.push({ballpark:l.name,effect:"\u{1F6AB} DISABLED (Away Game)",debuffed:!0});return{chips:r,mult:o,ballparkEffects:a}}for(let l of n){let s=!1,u="";switch(l.bonus){case"flush_chips":(e.handType==="FLUSH"||e.handType==="STRAIGHT_FLUSH"||e.handType==="ROYAL_FLUSH")&&(r+=50,u="+50 Chips (Flush)",s=!0);break;case"flat_mult":o+=3,u="+3 Mult",s=!0;break;case"flat_chips":r+=30,u="+30 Chips",s=!0;break;case"pair_chips":(e.handType==="PAIR"||e.handType==="TWO_PAIR"||e.handType==="FULL_HOUSE"||e.handType==="THREE_OF_A_KIND"||e.handType==="FOUR_OF_A_KIND")&&(r+=15,u="+15 Chips (Pair bonus)",s=!0);break;case"straight_mult":(e.handType==="STRAIGHT"||e.handType==="STRAIGHT_FLUSH"||e.handType==="ROYAL_FLUSH")&&(o+=20,u="+20 Mult (Straight)",s=!0);break;case"money_per_hand":u="+$2 (Hand played)",s=!0;break;case"fullhouse_chips":e.handType==="FULL_HOUSE"&&(r+=40,u="+40 Chips (Full House)",s=!0);break;case"extra_discard":break;case"hand_size":break;case"chip_multiplier":let g=Math.floor(r*.25);r+=g,u=`+${g} Chips (+25%)`,s=!0;break;case"trips_mult":(e.handType==="THREE_OF_A_KIND"||e.handType==="FULL_HOUSE"||e.handType==="FOUR_OF_A_KIND")&&(o+=15,u="+15 Mult (Three of a Kind)",s=!0);break;default:break}s&&u&&a.push({ballpark:l.name,effect:u})}return{chips:r,mult:o,ballparkEffects:a}}function ih(e,n){let t=e.chips;for(let r of n){if(r.type==="suit_debuff"&&e.suit===r.suit&&(t=Math.max(0,t-r.chipPenalty)),r.type==="color_debuff"){let o=e.suit==="hearts"||e.suit==="diamonds",a=e.suit==="spades"||e.suit==="clubs";(r.color==="red"&&o||r.color==="black"&&a)&&r.nullifyChips&&(t=0)}r.type==="face_debuff"&&r.nullifyFaceChips&&["J","Q","K"].includes(e.rank)&&(t=0)}return t}function lh(e,n){for(let t of n)if(t.type==="legend_debuff"&&t.affectedLegends?.includes(e))return!0;return!1}function Ts(e,n={},t=[],r={},o=null){let{type:a,scoringCards:i}=e,l=n[a]||1,s=r?.ballparks||[],u=r?.bossModifiers||[],g=Da[a]||{chips:0,mult:1},v=l-1,m=g.chips+v*10,k=g.mult+v*1;for(let N of u)N.type==="hand_debuff"&&N.affectedHands?.includes(a)&&(k=Math.max(1,k-(N.multPenalty||0)));let x=[],C=1,I=new Set(i.map(N=>N.id)),p=o?o.filter(N=>I.has(N.id)):i;for(let N of p){let F=ih(N,u);if(m+=F,N.enhancement&&N.enhancement.bonus){let L=N.enhancement.bonus;L.chips&&(m+=L.chips,x.push({card:`${N.rank}${N.suit[0].toUpperCase()}`,name:N.enhancement.name,effect:`+${L.chips} Chips`})),L.mult&&(k+=L.mult,x.push({card:`${N.rank}${N.suit[0].toUpperCase()}`,name:N.enhancement.name,effect:`+${L.mult} Mult`})),L.clutchMult&&L.clutchChance&&Math.random()<L.clutchChance&&(k+=L.clutchMult,x.push({card:`${N.rank}${N.suit[0].toUpperCase()}`,name:N.enhancement.name,effect:`+${L.clutchMult} Mult (Clutch!)`})),L.multMult&&(C*=L.multMult,x.push({card:`${N.rank}${N.suit[0].toUpperCase()}`,name:N.enhancement.name,effect:`\xD7${L.multMult} Mult`}))}}k=Math.floor(k*C);let h=ah({chips:m,mult:k,handType:a,scoringCards:i,gameState:r},s,u);m=h.chips,k=h.mult;let P=oh({chips:m,mult:k,handType:a,scoringCards:i,allCards:o||i,gameState:r},t,u);m=P.chips,k=P.mult;for(let N of u)N.type==="chip_threshold"&&m<N.threshold&&(m=Math.floor(m*N.penalty));for(let N of u)N.type==="mult_cap"&&k>N.maxMult&&(k=N.maxMult);let _=m*k,M=[];for(let N of u)M.push({name:N.name,description:N.description,icon:N.icon});return{chips:m,mult:k,total:_,breakdown:{baseChips:g.chips,baseMult:g.mult,levelBonus:v,cardChips:i.reduce((N,F)=>N+F.chips,0),scoringCardCount:i.length},legendEffects:P.legendEffects,ballparkEffects:h.ballparkEffects,enhancementEffects:x,bossEffects:M}}var Vf=document.createElement("style");Vf.textContent=`/* Hand Reference Panel Styles */

.hand-ref-toggle {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%);
  color: white;
  border: 2px solid #555;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 50;
  transition: all 0.2s ease;
}

.hand-ref-toggle:hover {
  background: linear-gradient(180deg, #4a4a4a 0%, #3a3a3a 100%);
  transform: translateY(-2px);
}

.hand-reference {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 320px;
  max-height: 70vh;
  background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  z-index: 50;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.hand-ref-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%);
  border-bottom: 1px solid #444;
}

.hand-ref-header h3 {
  margin: 0;
  color: #ffd700;
  font-size: 1rem;
}

.hand-ref-close {
  background: none;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
}

.hand-ref-close:hover {
  color: white;
}

.hand-ref-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.hand-ref-row {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid #333;
  gap: 12px;
}

.hand-ref-row:last-child {
  border-bottom: none;
}

.hand-ref-row:hover {
  background: rgba(255, 255, 255, 0.05);
}

.hand-ref-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.hand-ref-name {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.hand-ref-example {
  color: #777;
  font-size: 0.75rem;
}

.hand-ref-score {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: bold;
}

.hand-ref-chips {
  color: #4a90d9;
  min-width: 30px;
  text-align: right;
}

.hand-ref-x {
  color: #666;
  font-size: 0.8rem;
}

.hand-ref-mult {
  color: #e85050;
  min-width: 20px;
}

.hand-ref-level {
  background: #4a90d9;
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}

.hand-ref-footer {
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid #444;
}

.scoring-explanation {
  margin-bottom: 8px;
}

.scoring-formula {
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 0 8px 0;
}

.scoring-breakdown {
  margin: 6px 0;
  padding-left: 8px;
  border-left: 2px solid #444;
}

.scoring-breakdown p {
  margin: 2px 0;
  font-size: 0.8rem;
  color: #aaa;
}

.scoring-detail {
  font-size: 0.7rem !important;
  color: #777 !important;
  padding-left: 8px;
}

.text-chips {
  color: #4a90d9;
  font-weight: bold;
}

.text-mult {
  color: #e85050;
  font-weight: bold;
}

.text-total {
  color: #ffd700;
  font-weight: bold;
}

.hand-ref-footer p {
  margin: 0;
  color: #888;
  font-size: 0.75rem;
  text-align: center;
}

.hand-ref-footer .hand-ref-note {
  margin-top: 8px;
  color: #666;
  text-align: center;
  font-style: italic;
}
`;document.head.appendChild(Vf);var V=W(pe(),1),sh=[{type:"HIGH_CARD",name:"High Card",example:"Any single card",minCards:1},{type:"PAIR",name:"Pair",example:"2 cards same rank",minCards:2},{type:"TWO_PAIR",name:"Two Pair",example:"2 different pairs",minCards:4},{type:"THREE_OF_A_KIND",name:"Three of a Kind",example:"3 cards same rank",minCards:3},{type:"STRAIGHT",name:"Straight",example:"5 sequential ranks",minCards:5},{type:"FLUSH",name:"Flush",example:"5 cards same suit",minCards:5},{type:"FULL_HOUSE",name:"Full House",example:"3 of a kind + pair",minCards:5},{type:"FOUR_OF_A_KIND",name:"Four of a Kind",example:"4 cards same rank",minCards:4},{type:"STRAIGHT_FLUSH",name:"Straight Flush",example:"Straight + Flush",minCards:5},{type:"ROYAL_FLUSH",name:"Royal Flush",example:"10-J-Q-K-A same suit",minCards:5}];function _s({handLevels:e={},isOpen:n,onToggle:t}){return n?(0,V.jsxs)("div",{className:"hand-reference",children:[(0,V.jsxs)("div",{className:"hand-ref-header",children:[(0,V.jsx)("h3",{children:"\u{1F4CA} Hand Scoring"}),(0,V.jsx)("button",{className:"hand-ref-close",onClick:t,children:"\xD7"})]}),(0,V.jsx)("div",{className:"hand-ref-list",children:sh.map(({type:r,name:o,example:a,minCards:i})=>{let l=Da[r],s=e[r]||1,u=s-1,g=l.chips+u*10,v=l.mult+u*1;return(0,V.jsxs)("div",{className:"hand-ref-row",children:[(0,V.jsxs)("div",{className:"hand-ref-info",children:[(0,V.jsx)("span",{className:"hand-ref-name",children:o}),(0,V.jsx)("span",{className:"hand-ref-example",children:a})]}),(0,V.jsxs)("div",{className:"hand-ref-score",children:[(0,V.jsx)("span",{className:"hand-ref-chips",children:g}),(0,V.jsx)("span",{className:"hand-ref-x",children:"\xD7"}),(0,V.jsx)("span",{className:"hand-ref-mult",children:v})]}),s>1&&(0,V.jsxs)("span",{className:"hand-ref-level",children:["Lv.",s]})]},r)})}),(0,V.jsxs)("div",{className:"hand-ref-footer",children:[(0,V.jsxs)("div",{className:"scoring-explanation",children:[(0,V.jsxs)("p",{className:"scoring-formula",children:[(0,V.jsx)("span",{className:"text-chips",children:"Chips"})," \xD7 ",(0,V.jsx)("span",{className:"text-mult",children:"Mult"})," = ",(0,V.jsx)("span",{className:"text-total",children:"Total Score"})]}),(0,V.jsxs)("div",{className:"scoring-breakdown",children:[(0,V.jsxs)("p",{children:[(0,V.jsx)("span",{className:"text-chips",children:"Chips"})," = Hand Base + Card Values"]}),(0,V.jsx)("p",{className:"scoring-detail",children:"Card Values: A=11, K/Q/J=10, Others=face value"}),(0,V.jsx)("p",{className:"scoring-detail",children:"Legend bonuses can add more chips!"})]}),(0,V.jsxs)("div",{className:"scoring-breakdown",children:[(0,V.jsxs)("p",{children:[(0,V.jsx)("span",{className:"text-mult",children:"Mult"})," = Hand Base + Legend Bonuses"]}),(0,V.jsx)("p",{className:"scoring-detail",children:"Higher hands have higher base mult"})]})]}),(0,V.jsx)("p",{className:"hand-ref-note",children:"Level up hands by playing them to boost chips & mult!"})]})]}):(0,V.jsx)("button",{className:"hand-ref-toggle",onClick:t,children:"\u{1F4CA} Hands"})}var Es=class{constructor(){this.audioContext=null,this.masterVolume=.5,this.enabled=!0,this.loadedSounds={}}init(){this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.audioContext.state==="suspended"&&this.audioContext.resume()}playTone(n,t,r="sine",o=1){if((!this.enabled||!this.audioContext)&&this.init(),!this.audioContext)return;let a=this.audioContext.createOscillator(),i=this.audioContext.createGain();a.connect(i),i.connect(this.audioContext.destination),a.type=r,a.frequency.setValueAtTime(n,this.audioContext.currentTime);let l=this.audioContext.currentTime;i.gain.setValueAtTime(0,l),i.gain.linearRampToValueAtTime(this.masterVolume*o,l+.02),i.gain.exponentialRampToValueAtTime(.01,l+t),a.start(l),a.stop(l+t)}createNoiseBuffer(n){let t=this.audioContext.sampleRate*n,r=this.audioContext.createBuffer(1,t,this.audioContext.sampleRate),o=r.getChannelData(0);for(let a=0;a<t;a++)o[a]=Math.random()*2-1;return r}playFilteredNoise(n,t,r,o,a=.01,i=null){if((!this.enabled||!this.audioContext)&&this.init(),!this.audioContext)return;let l=this.audioContext.createBufferSource();l.buffer=this.createNoiseBuffer(n+.1);let s=this.audioContext.createBiquadFilter();s.type=o,s.frequency.value=r,s.Q.value=1;let u=this.audioContext.createGain(),g=this.audioContext.currentTime;l.connect(s),s.connect(u),u.connect(this.audioContext.destination),u.gain.setValueAtTime(0,g),u.gain.linearRampToValueAtTime(this.masterVolume*t,g+a),i!==null?u.gain.exponentialRampToValueAtTime(.01,g+i):u.gain.exponentialRampToValueAtTime(.01,g+n),l.start(g),l.stop(g+n+.1)}playChipSound(){if(!this.enabled)return;this.init();let n=800;this.playTone(n,.08,"square",.3),setTimeout(()=>this.playTone(n*1.25,.08,"square",.25),30),setTimeout(()=>this.playTone(n*1.5,.12,"square",.2),60)}playPlusMultSound(){if(!this.enabled)return;this.init();let n=400;this.playTone(n,.1,"triangle",.4),setTimeout(()=>this.playTone(n*1.5,.15,"triangle",.35),50)}playTimesMultSound(){if(!this.enabled)return;this.init();let n=300;this.playTone(n,.05,"sawtooth",.3),setTimeout(()=>this.playTone(n*2,.1,"sawtooth",.4),40),setTimeout(()=>this.playTone(n*3,.2,"sine",.35),80)}playLegendSound(){if(!this.enabled)return;this.init();let n=this.audioContext.currentTime;this.playFilteredNoise(.06,.6,4e3,"highpass",.001,.04);let t=this.audioContext.createOscillator(),r=this.audioContext.createGain();t.type="triangle",t.frequency.setValueAtTime(800,n),t.frequency.exponentialRampToValueAtTime(200,n+.1),t.connect(r),r.connect(this.audioContext.destination),r.gain.setValueAtTime(this.masterVolume*.5,n),r.gain.exponentialRampToValueAtTime(.01,n+.08),t.start(n),t.stop(n+.1);let o=this.audioContext.createOscillator(),a=this.audioContext.createGain();o.type="sine",o.frequency.setValueAtTime(150,n),o.frequency.exponentialRampToValueAtTime(80,n+.15),o.connect(a),a.connect(this.audioContext.destination),a.gain.setValueAtTime(this.masterVolume*.4,n+.01),a.gain.exponentialRampToValueAtTime(.01,n+.2),o.start(n),o.stop(n+.25),setTimeout(()=>{this.playTone(1200,.03,"sine",.2)},5)}playCrowdSound(){if(!this.enabled)return;this.init();let n=this.audioContext.currentTime;this.playFilteredNoise(.6,.25,400,"lowpass",.05,.5),this.playFilteredNoise(.55,.3,1200,"bandpass",.08,.45),setTimeout(()=>{this.playFilteredNoise(.4,.2,2500,"bandpass",.05,.35)},50);let t=(r,o,a,i,l)=>{let s=this.audioContext.createOscillator(),u=this.audioContext.createGain();s.type="sine",s.frequency.setValueAtTime(r,n+a),s.frequency.linearRampToValueAtTime(o,n+a+i*.6),s.frequency.linearRampToValueAtTime(o*.9,n+a+i),s.connect(u),u.connect(this.audioContext.destination),u.gain.setValueAtTime(0,n+a),u.gain.linearRampToValueAtTime(this.masterVolume*l,n+a+.05),u.gain.linearRampToValueAtTime(this.masterVolume*l*.8,n+a+i*.7),u.gain.exponentialRampToValueAtTime(.01,n+a+i),s.start(n+a),s.stop(n+a+i+.1)};t(250,400,0,.4,.15),t(300,480,.05,.35,.12),t(200,350,.1,.4,.1),t(350,500,.15,.3,.08)}playHandTypeSound(){this.enabled&&(this.init(),this.playTone(523,.1,"square",.3),setTimeout(()=>this.playTone(659,.1,"square",.3),80),setTimeout(()=>this.playTone(784,.15,"square",.3),160))}playVictorySound(){if(!this.enabled)return;this.init(),[523,659,784,1047].forEach((t,r)=>{setTimeout(()=>this.playTone(t,.2,"square",.35),r*100)}),setTimeout(()=>{this.playTone(523,.4,"sine",.25),this.playTone(659,.4,"sine",.25),this.playTone(784,.4,"sine",.25)},400)}playDefeatSound(){this.enabled&&(this.init(),this.playTone(400,.2,"sine",.3),setTimeout(()=>this.playTone(350,.2,"sine",.25),150),setTimeout(()=>this.playTone(300,.3,"sine",.2),300))}playSelectSound(){this.enabled&&(this.init(),this.playTone(600,.05,"sine",.2))}playDeselectSound(){this.enabled&&(this.init(),this.playTone(400,.05,"sine",.15))}playClickSound(){this.enabled&&(this.init(),this.playTone(500,.03,"square",.15))}playPurchaseSound(){this.enabled&&(this.init(),this.playTone(1200,.05,"square",.25),setTimeout(()=>this.playTone(1500,.1,"square",.3),50))}playErrorSound(){this.enabled&&(this.init(),this.playTone(200,.15,"square",.25))}setVolume(n){this.masterVolume=Math.max(0,Math.min(1,n))}toggle(){return this.enabled=!this.enabled,this.enabled}enable(){this.enabled=!0}disable(){this.enabled=!1}},uh=new Es,De=uh;var Wf=document.createElement("style");Wf.textContent=`/* Main App Layout Styles */

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
.app-header {
  background: linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 15px 20px;
  text-align: center;
  border-bottom: 3px solid #bf0d3e;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;
}

.app-header h1 {
  margin: 0;
  font-size: 2rem;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 3px;
}

.sound-toggle {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sound-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}

/* Main game area - 3 column layout */
.game-area {
  flex: 1;
  display: flex;
  padding: 20px;
  gap: 20px;
}

/* Sidebars */
.sidebar {
  width: 300px;
  flex-shrink: 0;
}

.sidebar.left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar.right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Play area - center column */
.play-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Message display */
.message {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

.message.scoring {
  background: linear-gradient(135deg, #ffd700 0%, #ff8c00 100%);
  color: #1a1a1a;
  font-size: 1.5rem;
  animation: pulse 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Deck info */
.deck-info {
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.btn-view-deck-small {
  background: linear-gradient(135deg, #3d5a80, #2c3e50);
  border: 1px solid #4a90d9;
  color: #ecf0f1;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.btn-view-deck-small:hover {
  background: linear-gradient(135deg, #4a90d9, #3d5a80);
  transform: translateY(-2px);
}

/* Legends area */
.legends-area {
  background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
  border-radius: 12px;
  padding: 20px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.legends-area h3 {
  margin: 0 0 10px 0;
  color: #ffd700;
  text-align: center;
}

.placeholder-text {
  color: #666;
  text-align: center;
  font-style: italic;
  margin-bottom: 15px;
}

.legend-slots {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.legend-slot {
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.legend-slot.empty {
  background: rgba(255, 255, 255, 0.05);
  border: 2px dashed #444;
  color: #555;
  font-size: 1.5rem;
}

.legend-slot.filled {
  flex-direction: column;
  padding: 8px 12px;
  background: linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%);
  border: 2px solid #555;
  position: relative;
  transition: all 0.3s ease;
}

.legend-slot.filled.common {
  border-color: #aaa;
}

.legend-slot.filled.uncommon {
  border-color: #4a90d9;
  background: linear-gradient(180deg, #2a3a4a 0%, #1a2a3a 100%);
}

.legend-slot.filled.rare {
  border-color: #9b59b6;
  background: linear-gradient(180deg, #3a2a4a 0%, #2a1a3a 100%);
}

.legend-slot.filled.legendary {
  border-color: #ffd700;
  background: linear-gradient(180deg, #4a4a2a 0%, #3a3a1a 100%);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.legend-slot-name {
  font-weight: bold;
  font-size: 0.9rem;
  color: white;
}

.legend-slot-effect {
  font-size: 0.75rem;
  color: #4a90d9;
  margin-top: 2px;
}

/* Triggered animation for Legends */
.legend-slot.triggered {
  animation: legendTrigger 1.5s ease;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.8),
              0 0 40px rgba(255, 215, 0, 0.4);
  border-color: #ffd700 !important;
}

@keyframes legendTrigger {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 215, 0, 0);
  }
  15% {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.9);
  }
  30% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  }
}

.trigger-indicator {
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 1.2rem;
  animation: sparkle 0.5s ease infinite;
}

@keyframes sparkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

/* Injury styling for legends */
.legend-slot.injured {
  opacity: 0.7;
  border-color: #8b0000 !important;
  background: linear-gradient(180deg, #3a2a2a 0%, #2a1a1a 100%) !important;
}

.legend-slot.injured .legend-slot-name {
  color: #ff6b6b;
}

.legend-slot.injured .legend-slot-effect {
  text-decoration: line-through;
  opacity: 0.5;
}

.injury-badge {
  margin-left: 6px;
  font-size: 0.9rem;
}

/* Buff styling for legends */
.legend-slot.buffed {
  box-shadow: 0 0 15px rgba(76, 175, 80, 0.6);
  border-color: #4caf50 !important;
}

.legend-slot.buffed .legend-slot-effect {
  color: #81c784;
}

.buff-badge {
  margin-left: 6px;
  font-size: 0.9rem;
}

/* Status indicator for injuries/buffs */
.status-indicator {
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 4px;
  text-align: center;
}

.status-indicator.injury {
  background: rgba(139, 0, 0, 0.4);
  color: #ff6b6b;
}

.status-indicator.buff {
  background: rgba(76, 175, 80, 0.3);
  color: #81c784;
}

/* Ballparks area */
.ballparks-area {
  background: linear-gradient(180deg, #1a3a2a 0%, #0a2a1a 100%);
  border-radius: 12px;
  padding: 15px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  border: 2px solid #27ae60;
}

.ballparks-area h3 {
  margin: 0 0 10px 0;
  color: #27ae60;
  text-align: center;
  font-size: 1rem;
}

.ballpark-slots {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ballpark-slot {
  background: linear-gradient(180deg, #2a4a3a 0%, #1a3a2a 100%);
  border-radius: 8px;
  padding: 8px 12px;
  border: 2px solid #27ae60;
  position: relative;
  transition: all 0.3s ease;
}

.ballpark-slot.triggered {
  animation: ballparkTrigger 1.5s ease;
  box-shadow: 0 0 20px rgba(39, 174, 96, 0.8);
}

@keyframes ballparkTrigger {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(39, 174, 96, 0);
  }
  15% {
    transform: scale(1.08);
    box-shadow: 0 0 25px rgba(39, 174, 96, 0.9);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 15px rgba(39, 174, 96, 0.5);
  }
}

.ballpark-slot-name {
  font-weight: bold;
  font-size: 0.85rem;
  color: white;
}

.ballpark-slot-effect {
  font-size: 0.7rem;
  color: #7dcea0;
  margin-top: 2px;
}

/* Positions area */
.positions-area {
  background: linear-gradient(180deg, #2a3a4a 0%, #1a2a3a 100%);
  border-radius: 12px;
  padding: 15px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  border: 2px solid #4a90d9;
}

.positions-area h3 {
  margin: 0 0 10px 0;
  color: #4a90d9;
  text-align: center;
  font-size: 1rem;
}

.position-slots {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.position-slot {
  background: linear-gradient(180deg, #3a4a5a 0%, #2a3a4a 100%);
  border-radius: 8px;
  padding: 8px 12px;
  border: 2px solid #4a90d9;
}

.position-slot-name {
  font-weight: bold;
  font-size: 0.85rem;
  color: white;
}

.position-slot-effect {
  font-size: 0.7rem;
  color: #85c1e9;
  margin-top: 2px;
}

/* Boss Modifiers area */
.boss-modifiers-area {
  background: linear-gradient(180deg, #4a1a1a 0%, #2a0a0a 100%);
  border-radius: 12px;
  padding: 15px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  border: 2px solid #e74c3c;
  margin-top: 15px;
  animation: bossGlow 2s ease infinite;
}

@keyframes bossGlow {
  0%, 100% { box-shadow: 0 0 10px rgba(231, 76, 60, 0.4); }
  50% { box-shadow: 0 0 20px rgba(231, 76, 60, 0.7); }
}

.boss-modifiers-area h3 {
  margin: 0 0 12px 0;
  color: #e74c3c;
  text-align: center;
  font-size: 1rem;
}

.boss-modifier-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.boss-modifier {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #c0392b;
}

.boss-modifier-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.boss-modifier-info {
  flex: 1;
}

.boss-modifier-name {
  font-weight: bold;
  font-size: 0.9rem;
  color: #e74c3c;
  margin-bottom: 2px;
}

.boss-modifier-desc {
  font-size: 0.75rem;
  color: #e6b0aa;
  line-height: 1.3;
}

/* Boss modifiers preview (upcoming) - visible but muted */
.boss-modifiers-area.preview {
  background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
  border-color: #777;
  opacity: 0.85;
  animation: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.boss-modifiers-area.preview h3 {
  color: #aaa;
}

.boss-modifiers-area.preview .boss-modifier {
  border-color: #666;
  background: rgba(0, 0, 0, 0.2);
}

.boss-modifiers-area.preview .boss-modifier-name {
  color: #cc9999;
}

.boss-modifiers-area.preview .boss-modifier-desc {
  color: #b0a0a0;
}

.boss-modifiers-area.preview .boss-modifier-icon {
  filter: grayscale(40%);
  opacity: 0.85;
}

/* At-Bat Won overlay */
.at-bat-won-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: fadeIn 0.5s ease;
}

.at-bat-won-content {
  background: linear-gradient(180deg, #1a3a1a 0%, #0a2a0a 100%);
  padding: 40px 60px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
              0 0 40px rgba(76, 175, 80, 0.3);
  border: 3px solid #4caf50;
}

.at-bat-won-content h2 {
  color: #4caf50;
  font-size: 2rem;
  margin: 0 0 25px 0;
}

.win-stats {
  margin-bottom: 25px;
}

.win-stats p {
  margin: 8px 0;
  color: #aaa;
  font-size: 1.1rem;
}

.win-score {
  font-size: 1.3rem !important;
  color: #fff !important;
}

.win-score span {
  color: #4caf50;
  font-weight: bold;
}

.win-reward {
  color: #ffd700 !important;
  font-weight: bold;
}

.btn-continue-to-shop {
  background: linear-gradient(180deg, #2d7d32 0%, #1b5e20 100%);
  color: white;
  padding: 18px 45px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  border: 2px solid #4caf50;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-continue-to-shop:hover {
  background: linear-gradient(180deg, #388e3c 0%, #2e7d32 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
}

/* Scoring breakdown on win screen */
.scoring-breakdown {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  padding: 15px 20px;
  margin: 15px 0;
  border: 1px solid rgba(133, 193, 233, 0.3);
}

.scoring-breakdown h3 {
  color: #85c1e9;
  font-size: 1rem;
  margin: 0 0 12px 0;
  text-align: center;
}

.winning-hand-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: rgba(76, 175, 80, 0.2);
  border-radius: 8px;
  margin-bottom: 10px;
}

.winning-hand-display .hand-name {
  color: #4caf50;
  font-weight: bold;
  font-size: 1.1rem;
}

.winning-hand-display .hand-calculation {
  color: #ddd;
  font-size: 0.95rem;
}

.winning-hand-display .hand-calculation strong {
  color: #ffd700;
  font-size: 1.1rem;
}

.effect-triggers {
  margin-top: 10px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
}

.effect-label {
  color: #aaa;
  font-size: 0.85rem;
  margin-bottom: 6px;
  font-weight: bold;
}

.effect-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  margin: 4px 0;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
}

.effect-item .effect-name {
  color: #ffd700;
  font-size: 0.9rem;
}

.effect-item .effect-value {
  color: #4caf50;
  font-size: 0.85rem;
  font-weight: bold;
}

.effect-item.debuffed .effect-name {
  color: #888;
  text-decoration: line-through;
}

.effect-item.debuffed .effect-value {
  color: #e74c3c;
}

/* Home/Away Game Winners */
.effect-triggers.home-winners {
  background: rgba(76, 175, 80, 0.2);
  border: 1px solid rgba(76, 175, 80, 0.5);
}

.effect-triggers.home-winners .effect-label {
  color: #4caf50;
}

.effect-item.home-win {
  background: rgba(76, 175, 80, 0.15);
}

.effect-item.home-win .effect-name {
  color: #81c784;
}

.effect-item.home-win .effect-value {
  color: #4caf50;
  font-weight: bold;
}

.effect-triggers.away-winners {
  background: rgba(255, 193, 7, 0.2);
  border: 1px solid rgba(255, 193, 7, 0.5);
}

.effect-triggers.away-winners .effect-label {
  color: #ffc107;
}

.effect-item.away-win {
  background: rgba(255, 193, 7, 0.15);
}

.effect-item.away-win .effect-name {
  color: #ffeb3b;
}

.effect-item.away-win .effect-value {
  color: #ffc107;
  font-weight: bold;
}

.home-away-total {
  margin-top: 15px;
  padding: 12px;
  background: linear-gradient(90deg, rgba(76, 175, 80, 0.2), rgba(255, 193, 7, 0.2));
  border-radius: 8px;
  text-align: center;
  font-size: 1.1rem;
  color: #ddd;
  border: 1px solid rgba(255, 215, 0, 0.5);
}

.home-away-total strong {
  color: #ffd700;
  font-size: 1.3rem;
}

/* Money breakdown on win screen */
.money-breakdown {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.money-breakdown h3 {
  color: #ffd700;
  font-size: 1.1rem;
  margin: 0 0 15px 0;
  text-align: center;
}

.breakdown-lines {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.breakdown-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.95rem;
  color: #ccc;
}

.breakdown-line.positive {
  color: #4caf50;
}

.breakdown-line.positive span:last-child {
  font-weight: bold;
}

.breakdown-line.negative {
  color: #e74c3c;
  background: rgba(231, 76, 60, 0.1);
}

.breakdown-line.negative span:last-child {
  font-weight: bold;
}

.breakdown-line.ballpark {
  color: #85c1e9;
  background: rgba(133, 193, 233, 0.1);
}

.breakdown-line.interest {
  color: #9b59b6;
  font-style: italic;
}

.breakdown-line.total {
  margin-top: 10px;
  padding-top: 12px;
  border-top: 2px solid rgba(255, 215, 0, 0.5);
  color: #ffd700;
  font-size: 1.2rem;
  font-weight: bold;
}

.breakdown-line.total span:last-child {
  font-size: 1.4rem;
}

/* Game over overlay */
.game-over-overlay,
.victory-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: fadeIn 0.5s ease;
}

.game-over-content,
.victory-content {
  background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 40px 60px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.game-over-content h2 {
  color: #e85050;
  margin-bottom: 20px;
}

.victory-content h2 {
  color: #ffd700;
  font-size: 2rem;
  margin-bottom: 20px;
}

.game-over-content p,
.victory-content p {
  color: #aaa;
  margin: 10px 0;
}

.game-over-content button,
.victory-content button {
  margin-top: 20px;
  padding: 15px 40px;
  font-size: 1.1rem;
}

/* Loading state */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  color: white;
}

/* Welcome Screen */
.welcome-screen {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a1a2a 0%, #1a2a3a 50%, #0a1520 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  overflow-y: auto;
}

.welcome-content {
  max-width: 800px;
  width: 100%;
  background: linear-gradient(180deg, #1a2a3a 0%, #0d1a28 100%);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
              0 0 40px rgba(191, 13, 62, 0.2);
  border: 2px solid #bf0d3e;
}

.welcome-content h1 {
  text-align: center;
  font-size: 3rem;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5),
               0 0 20px rgba(255, 215, 0, 0.3);
  margin: 0 0 10px 0;
  letter-spacing: 4px;
}

.welcome-tagline {
  text-align: center;
  font-size: 1.2rem;
  color: #85c1e9;
  margin: 0 0 30px 0;
  font-style: italic;
}

.welcome-instructions {
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 30px;
}

.welcome-instructions::-webkit-scrollbar {
  width: 8px;
}

.welcome-instructions::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.welcome-instructions::-webkit-scrollbar-thumb {
  background: #bf0d3e;
  border-radius: 4px;
}

.welcome-instructions::-webkit-scrollbar-thumb:hover {
  background: #e63946;
}

.instruction-section {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  border-left: 4px solid #4a90d9;
}

.instruction-section.highlight {
  border-left-color: #ffd700;
  background: rgba(255, 215, 0, 0.1);
}

.home-park-hint {
  margin-top: 12px;
  padding: 10px 15px;
  background: rgba(39, 174, 96, 0.2);
  border-radius: 8px;
  color: #81c784;
  font-size: 0.95rem;
}

.instruction-section h2 {
  color: #ffd700;
  font-size: 1.3rem;
  margin: 0 0 12px 0;
}

.instruction-section p {
  color: #ddd;
  line-height: 1.6;
  margin: 0 0 12px 0;
}

.instruction-section ul {
  margin: 0;
  padding-left: 20px;
  color: #ccc;
}

.instruction-section li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.instruction-section strong {
  color: #85c1e9;
}

.btn-play-game {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px 40px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(180deg, #bf0d3e 0%, #8a0a2d 100%);
  border: 3px solid #ffd700;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 8px 20px rgba(191, 13, 62, 0.4);
}

.btn-play-game:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(191, 13, 62, 0.6),
              0 0 20px rgba(255, 215, 0, 0.3);
  background: linear-gradient(180deg, #d41046 0%, #a00c36 100%);
}

.btn-play-game:active {
  transform: translateY(-2px);
}

/* Dialog overlays */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.dialog-box {
  background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
  border-radius: 16px;
  padding: 30px 40px;
  text-align: center;
  min-width: 320px;
  max-width: 450px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.dialog-icon {
  font-size: 4rem;
  margin-bottom: 15px;
}

.dialog-box h2 {
  color: #ffd700;
  font-size: 1.8rem;
  margin: 0 0 20px 0;
}

/* Injury Dialog */
.injury-dialog {
  border: 3px solid #e74c3c;
}

.injury-dialog .dialog-icon {
  animation: shake 0.5s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

.dialog-legend-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6b6b;
  margin: 0;
}

.dialog-message {
  color: #aaa;
  font-size: 1rem;
  margin: 10px 0 5px 0;
}

.dialog-innings {
  font-size: 2.5rem;
  font-weight: bold;
  color: #e74c3c;
  margin: 10px 0;
}

.dialog-hint {
  color: #666;
  font-size: 0.85rem;
  margin: 20px 0 10px 0;
  font-style: italic;
}

/* Home/Away Dialog */
.home-away-dialog {
  border: 3px solid #4caf50;
}

.home-away-dialog h2 {
  color: #81c784;
}

.dialog-section {
  margin: 20px 0;
  padding: 15px;
  border-radius: 8px;
  text-align: left;
}

.dialog-section h3 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
}

.home-section {
  background: rgba(76, 175, 80, 0.15);
  border: 1px solid rgba(76, 175, 80, 0.4);
}

.home-section h3 {
  color: #81c784;
}

.away-section {
  background: rgba(255, 193, 7, 0.15);
  border: 1px solid rgba(255, 193, 7, 0.4);
}

.away-section h3 {
  color: #ffc107;
}

.winner-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.winner-item:last-child {
  border-bottom: none;
}

.winner-legend {
  color: #fff;
  font-weight: bold;
}

.winner-bonus {
  color: #ffd700;
}

.total-multiplier {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffd700;
  margin: 20px 0;
  padding: 15px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.dialog-btn {
  padding: 12px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(180deg, #4caf50 0%, #388e3c 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 15px;
}

.dialog-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
}

.injury-dialog .dialog-btn {
  background: linear-gradient(180deg, #e74c3c 0%, #c0392b 100%);
}

.injury-dialog .dialog-btn:hover {
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .sidebar {
    width: 250px;
  }
}

@media (max-width: 900px) {
  .game-area {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }

  .sidebar.left,
  .sidebar.right {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* ================================
   DRAG AND DROP REORDERING STYLES
   ================================ */

/* Scoring hint text in headers */
.scoring-hint {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: normal;
  font-style: italic;
  margin-left: 8px;
}

/* Drag handle for draggable items */
.drag-handle {
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
  cursor: grab;
  user-select: none;
  letter-spacing: -2px;
}

.drag-handle:active {
  cursor: grabbing;
}

/* Dragging state */
.legend-slot.dragging,
.ballpark-slot.dragging,
.selected-preview-card.dragging {
  opacity: 0.5;
  transform: scale(0.95);
}

/* Drag over state */
.legend-slot.drag-over,
.ballpark-slot.drag-over,
.selected-preview-card.drag-over {
  border-color: #ffd700 !important;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
}

/* Make ballpark and legend slots draggable */
.ballpark-slot,
.legend-slot.filled {
  position: relative;
  cursor: grab;
  padding-left: 20px;
  transition: all 0.2s ease, transform 0.1s ease;
}

.ballpark-slot:active,
.legend-slot.filled:active {
  cursor: grabbing;
}

/* Selected cards preview area */
.selected-cards-preview {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
  border-radius: 12px;
  padding: 12px 16px;
  margin: 15px 0;
  border: 2px solid rgba(255, 215, 0, 0.3);
  min-width: 300px;
}

.selected-preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.selected-preview-title {
  color: #ffd700;
  font-weight: bold;
  font-size: 0.9rem;
}

.selected-preview-cards {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

.selected-preview-card {
  width: 55px;
  height: 75px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: grab;
  border: 3px solid #ffd700;
  position: relative;
  font-weight: bold;
  transition: all 0.15s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.selected-preview-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.selected-preview-card:active {
  cursor: grabbing;
}

.selected-preview-card.has-enhancement {
  background: linear-gradient(135deg, white 70%, #f39c12 100%);
}

.selected-card-order {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 20px;
  height: 20px;
  background: #ffd700;
  color: #1a1a1a;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.selected-card-rank {
  font-size: 1.2rem;
}

.selected-card-suit {
  font-size: 1.4rem;
}

.selected-card-enhancement {
  position: absolute;
  bottom: -6px;
  right: -6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  color: white;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

/* ================================
   LIVE SCORING DISPLAY
   ================================ */

.scoring-live-display {
  background: linear-gradient(145deg, #1a2a3a, #0d1520);
  border: 3px solid #ffd700;
  border-radius: 16px;
  padding: 20px 30px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.3),
              0 10px 40px rgba(0, 0, 0, 0.5);
  animation: scoreDisplayPulse 1s ease infinite;
}

@keyframes scoreDisplayPulse {
  0%, 100% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.3), 0 10px 40px rgba(0, 0, 0, 0.5); }
  50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.5), 0 10px 40px rgba(0, 0, 0, 0.5); }
}

.scoring-hand-name {
  font-size: 1.4rem;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.scoring-calculation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 1.8rem;
  font-weight: bold;
}

.scoring-chips {
  color: #4a90d9;
  text-shadow: 0 0 10px rgba(74, 144, 217, 0.5);
}

.scoring-operator,
.scoring-equals {
  color: rgba(255, 255, 255, 0.5);
}

.scoring-mult {
  color: #e85050;
  text-shadow: 0 0 10px rgba(232, 80, 80, 0.5);
}

.scoring-total {
  color: #ffd700;
  font-size: 2rem;
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  transition: all 0.3s ease;
}

.scoring-total.winning {
  color: #4ade80;
  text-shadow: 0 0 20px rgba(74, 222, 128, 0.6);
  animation: winningPulse 0.5s ease infinite;
}

@keyframes winningPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.scoring-target {
  margin-top: 12px;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Bonus cards scoring animation */
.ballpark-slot.scoring-now,
.legend-slot.scoring-now {
  animation: bonusScore 0.4s ease;
  z-index: 100;
}

@keyframes bonusScore {
  0% { transform: scale(1); }
  30% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

.ballpark-slot.scoring-now {
  box-shadow: 0 0 20px rgba(74, 144, 217, 0.8),
              0 4px 15px rgba(0, 0, 0, 0.4);
  border-color: #4a90d9 !important;
}

.legend-slot.scoring-now {
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.8),
              0 4px 15px rgba(0, 0, 0, 0.4);
  border-color: #ffd700 !important;
}

/* Bonus scoring popup */
.bonus-scoring-popup {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  white-space: nowrap;
  animation: bonusPopup 0.5s ease forwards;
  z-index: 200;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

@keyframes bonusPopup {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(10px) scale(0.8);
  }
  20% {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

.bonus-scoring-popup.chips {
  background: linear-gradient(135deg, #4a90d9, #2e6cb5);
  color: white;
}

.bonus-scoring-popup.plusMult {
  background: linear-gradient(135deg, #e85050, #c23a3a);
  color: white;
}

.bonus-scoring-popup.timesMult {
  background: linear-gradient(135deg, #ff3366, #cc1144);
  color: white;
  font-size: 1.3rem;
}
`;document.head.appendChild(Wf);var c=W(pe(),1),Oa={spades:0,hearts:1,clubs:2,diamonds:3};function Rs(){let[e,n]=(0,D.useState)(null),[t,r]=(0,D.useState)(null),[o,a]=(0,D.useState)(""),[i,l]=(0,D.useState)(!1),[s,u]=(0,D.useState)("rank"),[g,v]=(0,D.useState)(!1),[m,k]=(0,D.useState)([]),[x,C]=(0,D.useState)([]),[I,p]=(0,D.useState)(!0),[d,h]=(0,D.useState)(null),[T,P]=(0,D.useState)(null),[_,M]=(0,D.useState)(null),[N,F]=(0,D.useState)(null),[L,ne]=(0,D.useState)(null),[Oe,Ce]=(0,D.useState)(-1),[un,ue]=(0,D.useState)(null),[Q,O]=(0,D.useState)(null),[ct,kn]=(0,D.useState)(new Set),[Xe,dt]=(0,D.useState)({chips:0,mult:0}),[ft,En]=(0,D.useState)(null),[$n,Ia]=(0,D.useState)(!0);(0,D.useEffect)(()=>{},[]);let Pt=()=>{let f=Ef();f.targetScore=Ba(f.series,f.atBatType),f.upcomingBossModifiers=vs(f.series),n(f),a("Select cards to play a poker hand!"),r(null),p(!1)},Ps=(0,D.useMemo)(()=>{if(!e)return[];let f=[...e.hand];return s==="rank"?f.sort((S,b)=>{let R=jn[b.rank]-jn[S.rank];return R!==0?R:Oa[S.suit]-Oa[b.suit]}):f.sort((S,b)=>{let R=Oa[S.suit]-Oa[b.suit];return R!==0?R:jn[b.rank]-jn[S.rank]}),f},[e?.hand,s]);(0,D.useEffect)(()=>{if(!e||e.selectedCards.length===0){r(null);return}let f=Cs(e.selectedCards),S=Ts(f,e.handLevels,e.legends,e,e.selectedCards);r({name:f.name,chips:S.chips,mult:S.mult,total:S.total,legendEffects:S.legendEffects})},[e?.selectedCards,e?.legends,e?.handLevels]);let pt=(0,D.useCallback)(f=>{i||n(S=>S.selectedCards.some(R=>R.id===f.id)?(De.playDeselectSound(),{...S,selectedCards:S.selectedCards.filter(R=>R.id!==f.id)}):S.selectedCards.length<5?(De.playSelectSound(),{...S,selectedCards:[...S.selectedCards,f]}):S)},[i]),Fa=(0,D.useCallback)(()=>{if(!e||e.selectedCards.length===0||e.handsRemaining<=0)return;De.init(),l(!0);let f=Cs(e.selectedCards),S=Ts(f,e.handLevels,e.legends,e,e.selectedCards),b=Uf(f,e.handLevels,e.legends,e,e.selectedCards);Ce(-1),ue(null),O(null),kn(new Set),dt({chips:0,mult:0}),En(null),k([]),C([]),ne({steps:b,targetScore:e.targetScore,result:f,score:S,selectedCards:e.selectedCards})},[e]);(0,D.useEffect)(()=>{if(!L)return;let{steps:f,selectedCards:S}=L,b=Oe+1;if(b>=f.length){let ce=setTimeout(()=>{Ha()},600);return()=>clearTimeout(ce)}let R=f[b],$;Oe===-1?$=400:R?.source?.includes("\u{1F3DF}\uFE0F")?$=550:R?.source?.includes("\u2B50")?$=500:$=350;let me=setTimeout(()=>{let ce=R.source?.includes("\u{1F3DF}\uFE0F"),H=R.source?.includes("\u2B50");if(dt(q=>{let Ne=q.chips,re=q.mult;return R.type==="base"?(Ne=R.chips,re=R.mult,De.playHandTypeSound()):R.type==="chips"?(Ne=q.chips+R.value,ce?De.playCrowdSound():H?De.playLegendSound():De.playChipSound()):R.type==="plusMult"?(re=q.mult+R.value,ce?De.playCrowdSound():H?De.playLegendSound():De.playPlusMultSound()):R.type==="timesMult"&&(re=Math.round(q.mult*R.value*100)/100,ce?De.playCrowdSound():H?De.playLegendSound():De.playTimesMultSound()),{chips:Ne,mult:re}}),R.source)if(["\u2665","\u2666","\u2663","\u2660"].some(re=>R.source.includes(re))){let re=S.find(qe=>{let Ze=`${qe.rank}${Aa(qe.suit)}`;return R.source.startsWith(Ze)});re&&(ue(re.id),O({type:R.type,value:R.value}),setTimeout(()=>{kn(qe=>new Set([...qe,re.id]))},300)),En(null)}else if(ce){let re=R.source.replace("\u{1F3DF}\uFE0F ","");En(re),ue(null),O({type:R.type,value:R.value}),C(qe=>[...qe,re])}else if(H){let re=R.source.replace("\u2B50 ","").replace(" \u{1F4AA}","");En(re),ue(null),O({type:R.type,value:R.value}),k(qe=>[...qe,re])}else R.type==="base"&&(En(R.handName),ue(null),O(null));Ce(b),setTimeout(()=>{ue(null),O(null)},ce||H?450:300)},$);return()=>clearTimeout(me)},[L,Oe]);let Aa=f=>({hearts:"\u2665",diamonds:"\u2666",clubs:"\u2663",spades:"\u2660"})[f]||f[0],Ha=(0,D.useCallback)(()=>{if(!L)return;let{result:f,score:S}=L;ne(null),Ce(-1),ue(null),O(null),kn(new Set),dt({chips:0,mult:0}),En(null),n(b=>{let R=b.currentScore+S.total,$=b.handsRemaining-1,me=b.hand.filter(Rn=>!b.selectedCards.some(lo=>lo.id===Rn.id)),ce=Math.min(b.selectedCards.length,b.deck.length),H=b.deck.slice(0,ce),wn=b.deck.slice(ce),q=b.phase,Ne=b.atBat,re=b.atBatType,qe=b.series,Ze=b.money,zs=b.targetScore,en=null,Ls=null,Bs=null,Ga=S.total,Qa=R;if(R>=b.targetScore){let Rn=Pf(b.legends,b.ballparks||[],b.legendInjuries||{});(Rn.homeWinners.length>0||Rn.awayWinners.length>0)&&(Bs=Rn),Ga=Math.floor(S.total*Rn.totalMultiplier),Qa=b.currentScore+Ga,Ls={handName:f.name,chips:S.chips,mult:S.mult,baseTotal:S.total,total:Ga,legendEffects:S.legendEffects||[],ballparkEffects:S.ballparkEffects||[],homeWinners:Rn.homeWinners,awayWinners:Rn.awayWinners,homeAwayMultiplier:Rn.totalMultiplier,targetBeaten:b.targetScore},en={starting:b.money,reward:Mf(b.series,b.atBatType),handsBonus:0,ballparkBonus:0,salaryCap:0,interest:0};let lo=b.money;if(b.ballparks?.find(ht=>ht.bonus==="money_per_hand")){let ht=(b.baseHands||4)-$;en.ballparkBonus=ht*2,lo+=en.ballparkBonus}en.interest=Math.min(5,Math.floor(lo/5)),Ze=b.money,Ze+=en.ballparkBonus,Ze+=en.interest,Ze+=en.reward,en.handsBonus=$,Ze+=en.handsBonus;let Os=b.bossModifiers?.find(ht=>ht.type==="money_debuff");if(Os){let ht=(b.baseHands||4)-$;en.salaryCap=ht*(Os.moneyPerHand||-5),Ze=Math.max(0,Ze+en.salaryCap)}Ze=Math.max(0,Ze),q="AT_BAT_WON",b.atBatType==="FIRST"?(re="SECOND",Ne=2):b.atBatType==="SECOND"?(re="BOSS",Ne=3):b.series===9?q="VICTORY":(qe=b.series+1,Ne=1,re="FIRST"),q!=="VICTORY"&&(zs=Ba(qe,re))}else $<=0&&(q="GAME_OVER");let Ds=zf(b.legends,b.legendInjuries||{},b.hasTrainingCamp);return{...b,currentScore:Qa,hand:[...me,...H],deck:wn,selectedCards:[],handsRemaining:$,phase:q,series:qe,atBat:Ne,atBatType:re,money:Ze,targetScore:zs,handsPlayed:b.handsPlayed+1,highestScore:Math.max(b.highestScore,S.total),moneyBreakdown:en,scoringBreakdown:Ls,legendInjuries:Ds.newInjuries,injuredThisHand:Ds.injuredThisHand,pendingHomeAwayBonus:Bs}}),l(!1),a(""),k([]),C([])},[L,e]);(0,D.useEffect)(()=>{if(e?.injuredThisHand?.length>0&&!T){let f=e.injuredThisHand[0];P(f)}},[e?.injuredThisHand]),(0,D.useEffect)(()=>{e?.pendingHomeAwayBonus&&!_&&!T&&(M(e.pendingHomeAwayBonus),n(f=>({...f,pendingHomeAwayBonus:null})))},[e?.pendingHomeAwayBonus,T]);let ja=(0,D.useCallback)(()=>{P(null),n(f=>f.injuredThisHand?.length>1?(setTimeout(()=>P(f.injuredThisHand[1]),100),{...f,injuredThisHand:f.injuredThisHand.slice(1)}):{...f,injuredThisHand:[]})},[]),$a=(0,D.useCallback)(()=>{M(null)},[]),ao=(0,D.useCallback)(()=>{!e||e.selectedCards.length===0||e.discardsRemaining<=0||(n(f=>{let S=f.hand.filter(me=>!f.selectedCards.some(ce=>ce.id===me.id)),b=Math.min(f.selectedCards.length,f.deck.length),R=f.deck.slice(0,b),$=f.deck.slice(b);return{...f,hand:[...S,...R],deck:$,discardPile:[...f.discardPile,...f.selectedCards],selectedCards:[],discardsRemaining:f.discardsRemaining-1}}),a("Discarded! Drew new cards."))},[e]),Ua=(0,D.useCallback)(f=>{n(S=>{let b={...S,money:Math.max(0,S.money-f.price)};if(f.isPack)return b;if(f.type==="legend")b.legends=[...S.legends,{name:f.name,position:f.position,rarity:f.rarity,effect:f.effect,description:f.description}];else if(f.type==="position"){if(b.positions=[...S.positions||[],{name:f.name,position:f.position,effect:f.effect,handType:f.handType,description:f.description}],f.handType&&f.handType!=="ALL"){let R=S.handLevels?.[f.handType]||1;b.handLevels={...S.handLevels,[f.handType]:R+1}}}else f.type==="ballpark"?(b.ballparks=[...S.ballparks||[],{name:f.name,city:f.city,effect:f.effect,bonus:f.bonus,description:f.description}],f.bonus==="hand_size"?b.handSize=(S.handSize||8)+1:f.bonus==="extra_discard"&&(b.baseDiscards=(S.baseDiscards||3)+1)):f.type==="voucher"&&(f.effect==="maxLegends"?b.maxLegends=S.maxLegends+1:f.effect==="handsPerRound"?b.baseHands=(S.baseHands||4)+1:f.effect==="discardsPerRound"?b.baseDiscards=(S.baseDiscards||3)+1:f.effect==="handSize"?b.handSize=(S.handSize||8)+1:f.effect==="trainingCamp"?b.hasTrainingCamp=!0:f.effect==="rerollCost"&&(b.hasScoutReport=!0),b.vouchers=[...S.vouchers||[],f],b.voucherBoughtThisSeries=!0,b.purchasedVoucherEffects=[...S.purchasedVoucherEffects||[],f.effect]);return b})},[]),mt=(0,D.useCallback)(f=>{n(S=>{let b=Bf(S.legends,S.legendInjuries||{},S.legendBuffs||{});return b.effect==="healed"?a(`\u{1F3E5} ${b.affectedLegend} has been healed!`):b.effect==="buffed"&&a(`\u{1F4AA} ${b.affectedLegend} buffed +20% for 3 innings!`),{...S,money:Math.max(0,S.money-f),legendInjuries:b.injuries,legendBuffs:b.buffs}})},[]),Va=(0,D.useCallback)((f,S)=>{let b=Math.floor({common:4,uncommon:6,rare:8,legendary:12}[f.rarity]/2);n(R=>({...R,money:R.money+b,legends:R.legends.filter(($,me)=>me!==S)}))},[]),Wa=(0,D.useCallback)((f,S)=>{n(b=>{let R={...b,money:b.money+1,ballparks:b.ballparks.filter(($,me)=>me!==S)};return f.bonus==="hand_size"?R.handSize=Math.max(8,(b.handSize||8)-1):f.bonus==="extra_discard"&&(R.baseDiscards=Math.max(3,(b.baseDiscards||3)-1)),R})},[]),dr=(0,D.useCallback)(f=>{n(S=>({...S,money:Math.max(0,S.money-f),rerollsThisShop:(S.rerollsThisShop||0)+1}))},[]),io=(0,D.useCallback)((f,S)=>{n(b=>{let R=b.fullDeck.find(H=>H.id===f);if(!R)return b;if(S.bonus?.duplicate){let H={...R,id:`${R.rank}-${R.suit}-dup-${Date.now()}`},wn=R.enhancement?` (with ${R.enhancement.name})`:"";return a(`\u26BE Doubleheader! Duplicated ${R.rank} of ${R.suit}${wn}!`),{...b,fullDeck:[...b.fullDeck,H],deck:[...b.deck,H]}}if(S.bonus?.remove)return a(`\u{1F6A8} Caught Stealing! Removed ${R.rank} of ${R.suit} from deck!`),{...b,fullDeck:b.fullDeck.filter(H=>H.id!==f),deck:b.deck.filter(H=>H.id!==f),hand:b.hand.filter(H=>H.id!==f)};let $=b.fullDeck.map(H=>H.id===f?{...H,enhancement:S}:H),me=b.deck.map(H=>H.id===f?{...H,enhancement:S}:H),ce=b.hand.map(H=>H.id===f?{...H,enhancement:S}:H);return a(`\u{1F3CB}\uFE0F ${S.name} applied to ${R.rank} of ${R.suit}!`),{...b,fullDeck:$,deck:me,hand:ce}})},[]),w=(0,D.useCallback)(()=>{n(f=>({...f,phase:"SHOP",currentScore:0,rerollsThisShop:0})),a("")},[]),B=(0,D.useCallback)(()=>{n(f=>{let S=f.fullDeck||Pa(),b=za([...S]),R=f.handSize||8,$=f.atBatType==="BOSS"||f.atBat===1&&f.atBatType==="FIRST",me=[],ce=f.baseHands||4,H=f.baseDiscards||3;if(f.atBatType==="BOSS"){me=f.upcomingBossModifiers||[];for(let Ne of me)Ne.handPenalty&&(ce=Math.max(1,ce-Ne.handPenalty)),Ne.discardPenalty&&(H=Math.max(0,H-Ne.discardPenalty))}let wn=f.upcomingBossModifiers;$&&f.atBatType==="BOSS"&&(wn=vs(f.series+1));let q=Lf(f.legendInjuries||{},f.legendBuffs||{});return{...f,phase:"PLAYING",hand:b.slice(0,R),deck:b.slice(R),discardPile:[],handsRemaining:ce,discardsRemaining:H,currentScore:0,voucherBoughtThisSeries:$?!1:f.voucherBoughtThisSeries,bossModifiers:me,upcomingBossModifiers:wn,legendInjuries:q.injuries,legendBuffs:q.buffs,injuredThisHand:[]}}),a("New At-Bat! Fresh deck shuffled. Good luck!")},[]),[Y,ae]=(0,D.useState)(null),[te,cn]=(0,D.useState)(null),Ya=(0,D.useCallback)(f=>{f.preventDefault(),f.currentTarget.classList.add("drag-over")},[]),Ka=(0,D.useCallback)(f=>{f.currentTarget.classList.remove("drag-over"),document.querySelectorAll(".drag-over").forEach(S=>S.classList.remove("drag-over")),ae(null),cn(null)},[]),Qf=(0,D.useCallback)((f,S)=>{ae(S),cn("legend"),f.dataTransfer.effectAllowed="move",f.currentTarget.classList.add("dragging")},[]),Jf=(0,D.useCallback)((f,S)=>{f.preventDefault(),f.currentTarget.classList.remove("drag-over"),!(te!=="legend"||Y===null||Y===S)&&(n(b=>{let R=[...b.legends],[$]=R.splice(Y,1);return R.splice(S,0,$),{...b,legends:R}}),ae(null),cn(null))},[Y,te]),Xf=(0,D.useCallback)((f,S)=>{ae(S),cn("ballpark"),f.dataTransfer.effectAllowed="move",f.currentTarget.classList.add("dragging")},[]),qf=(0,D.useCallback)((f,S)=>{f.preventDefault(),f.currentTarget.classList.remove("drag-over"),!(te!=="ballpark"||Y===null||Y===S)&&(n(b=>{let R=[...b.ballparks],[$]=R.splice(Y,1);return R.splice(S,0,$),{...b,ballparks:R}}),ae(null),cn(null))},[Y,te]),Zf=(0,D.useCallback)((f,S)=>{ae(S),cn("card"),f.dataTransfer.effectAllowed="move",f.currentTarget.classList.add("dragging")},[]),ep=(0,D.useCallback)((f,S)=>{f.preventDefault(),f.currentTarget.classList.remove("drag-over"),!(te!=="card"||Y===null||Y===S)&&(n(b=>{let R=[...b.selectedCards],[$]=R.splice(Y,1);return R.splice(S,0,$),{...b,selectedCards:R}}),ae(null),cn(null))},[Y,te]);if(I)return(0,c.jsx)("div",{className:"welcome-screen",children:(0,c.jsxs)("div",{className:"welcome-content",children:[(0,c.jsx)("h1",{children:"\u26BE Diamond Dynasty \u26BE"}),(0,c.jsx)("p",{className:"welcome-tagline",children:"Test your skills at Poker, Baseball, and a little Math"}),(0,c.jsxs)("div",{className:"welcome-instructions",children:[(0,c.jsxs)("section",{className:"instruction-section",children:[(0,c.jsx)("h2",{children:"\u{1F3AF} Objective"}),(0,c.jsx)("p",{children:"Score enough points each At-Bat to advance through 8 Series and become the ultimate champion! Each At-Bat requires you to reach a target score before running out of hands."})]}),(0,c.jsxs)("section",{className:"instruction-section",children:[(0,c.jsx)("h2",{children:"\u{1F0CF} How to Play"}),(0,c.jsxs)("p",{children:["Select up to 5 cards from your hand to form poker hands. Each hand type has a base Chips and Multiplier value. Your score is calculated as ",(0,c.jsx)("strong",{children:"Chips \xD7 Mult"}),"."]}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Hands:"})," You have limited hands per At-Bat. Use them wisely!"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Discards:"})," Don't like your cards? Discard and draw replacements."]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Card Values:"})," Each card adds its chip value to your total (Aces = 11, Face cards = 10, etc.)"]})]})]}),(0,c.jsxs)("section",{className:"instruction-section",children:[(0,c.jsx)("h2",{children:"\u{1F3DF}\uFE0F The Dugout (Shop)"}),(0,c.jsx)("p",{children:"After winning an At-Bat, visit the Dugout to power up your run:"}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Legends:"})," Baseball legends that boost your scoring with unique abilities"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Ballparks:"})," Stadium bonuses that trigger on specific hand types"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Positions:"})," Position cards that level up your hand types permanently"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Vouchers:"})," One-time upgrades for extra hands, discards, or legend slots"]})]})]}),(0,c.jsxs)("section",{className:"instruction-section",children:[(0,c.jsx)("h2",{children:"\u26BE Series Structure"}),(0,c.jsx)("p",{children:"Each Series has 3 At-Bats with increasing difficulty:"}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"First At-Bat:"})," Standard difficulty"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Second At-Bat:"})," Higher target score"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Boss At-Bat:"})," Highest target with special debuffs that make scoring harder!"]})]})]}),(0,c.jsxs)("section",{className:"instruction-section",children:[(0,c.jsx)("h2",{children:"\u{1F4B0} Economy"}),(0,c.jsx)("p",{children:"Earn money by winning At-Bats. You'll also earn interest on your savings (1$ per $5, max $5). Spend wisely in the Dugout to build your ultimate deck!"})]}),(0,c.jsxs)("section",{className:"instruction-section highlight",children:[(0,c.jsx)("h2",{children:"\u{1F31F} Pro Tips"}),(0,c.jsxs)("p",{children:["Success depends on your ",(0,c.jsx)("strong",{children:"strategy"}),", ",(0,c.jsx)("strong",{children:"baseball knowledge"}),", and ",(0,c.jsx)("strong",{children:"a little luck"}),". Build synergies between your Legends and Ballparks. Level up the hand types you play most often. Save money for interest, but don't be afraid to invest in powerful Legends!"]}),(0,c.jsxs)("p",{className:"home-park-hint",children:["\u{1F3E0} ",(0,c.jsx)("em",{children:"As in baseball, Legends may play better in their home Ballparks!"})]})]})]}),(0,c.jsx)("button",{className:"btn-play-game",onClick:Pt,children:"\u26BE Play Ball! \u26BE"})]})});if(!e)return(0,c.jsx)("div",{className:"loading",children:"Loading Diamond Dynasty..."});let np=e.selectedCards.length>0&&e.handsRemaining>0&&e.phase==="PLAYING"&&!i,tp=e.selectedCards.length>0&&e.discardsRemaining>0&&e.phase==="PLAYING"&&!i;return(0,c.jsxs)("div",{className:"app",children:[(0,c.jsxs)("header",{className:"app-header",children:[(0,c.jsx)("h1",{children:"\u26BE Diamond Dynasty \u26BE"}),(0,c.jsx)("button",{className:"sound-toggle",onClick:()=>{let f=De.toggle();Ia(f)},title:$n?"Mute sounds":"Enable sounds",children:$n?"\u{1F50A}":"\u{1F507}"})]}),(0,c.jsxs)("main",{className:"game-area",children:[(0,c.jsxs)("aside",{className:"sidebar left",children:[(0,c.jsx)(xs,{currentScore:e.currentScore,targetScore:e.phase==="AT_BAT_WON"&&e.scoringBreakdown?.targetBeaten||e.targetScore,handsRemaining:e.handsRemaining,discardsRemaining:e.discardsRemaining,money:e.money,series:e.series,atBatType:e.atBatType,handPreview:t}),e.bossModifiers?.length>0&&(0,c.jsxs)("div",{className:"boss-modifiers-area active",children:[(0,c.jsx)("h3",{children:"\u26A0\uFE0F Boss Debuffs"}),(0,c.jsx)("div",{className:"boss-modifier-list",children:e.bossModifiers.map((f,S)=>(0,c.jsxs)("div",{className:"boss-modifier",children:[(0,c.jsx)("span",{className:"boss-modifier-icon",children:f.icon}),(0,c.jsxs)("div",{className:"boss-modifier-info",children:[(0,c.jsx)("div",{className:"boss-modifier-name",children:f.name}),(0,c.jsx)("div",{className:"boss-modifier-desc",children:f.description})]})]},S))})]}),(!e.bossModifiers||e.bossModifiers.length===0)&&e.upcomingBossModifiers?.length>0&&(e.atBatType==="FIRST"||e.atBatType==="SECOND")&&(0,c.jsxs)("div",{className:"boss-modifiers-area preview",children:[(0,c.jsx)("h3",{children:"\u{1F440} Upcoming Boss"}),(0,c.jsx)("div",{className:"boss-modifier-list",children:e.upcomingBossModifiers.map((f,S)=>(0,c.jsxs)("div",{className:"boss-modifier preview",children:[(0,c.jsx)("span",{className:"boss-modifier-icon",children:f.icon}),(0,c.jsxs)("div",{className:"boss-modifier-info",children:[(0,c.jsx)("div",{className:"boss-modifier-name",children:f.name}),(0,c.jsx)("div",{className:"boss-modifier-desc",children:f.description})]})]},S))})]})]}),(0,c.jsxs)("div",{className:"play-area",children:[o&&!L&&(0,c.jsx)("div",{className:`message ${i?"scoring":""}`,children:o}),L&&(0,c.jsxs)("div",{className:"scoring-live-display",children:[(0,c.jsx)("div",{className:"scoring-hand-name",children:ft||"Scoring..."}),(0,c.jsxs)("div",{className:"scoring-calculation",children:[(0,c.jsx)("span",{className:"scoring-chips",children:Xe.chips}),(0,c.jsx)("span",{className:"scoring-operator",children:"\xD7"}),(0,c.jsx)("span",{className:"scoring-mult",children:Xe.mult}),(0,c.jsx)("span",{className:"scoring-equals",children:"="}),(0,c.jsx)("span",{className:`scoring-total ${Math.floor(Xe.chips*Xe.mult)>=e.targetScore?"winning":""}`,children:Math.floor(Xe.chips*Xe.mult).toLocaleString()})]}),(0,c.jsxs)("div",{className:"scoring-target",children:["Target: ",e.targetScore.toLocaleString()]})]}),e.phase==="AT_BAT_WON"&&(0,c.jsx)("div",{className:"at-bat-won-overlay",children:(0,c.jsxs)("div",{className:"at-bat-won-content",children:[(0,c.jsx)("h2",{children:"\u{1F389} At-Bat Won! \u{1F389}"}),(0,c.jsxs)("div",{className:"win-stats",children:[(0,c.jsxs)("p",{className:"win-score",children:["Final Score: ",(0,c.jsx)("span",{children:e.currentScore.toLocaleString()})]}),(0,c.jsxs)("p",{className:"win-target",children:["Target: ",(e.scoringBreakdown?.targetBeaten||e.targetScore).toLocaleString()]})]}),e.scoringBreakdown&&(0,c.jsxs)("div",{className:"scoring-breakdown",children:[(0,c.jsx)("h3",{children:"\u{1F0CF} Winning Hand"}),(0,c.jsxs)("div",{className:"winning-hand-display",children:[(0,c.jsx)("span",{className:"hand-name",children:e.scoringBreakdown.handName}),(0,c.jsxs)("span",{className:"hand-calculation",children:[e.scoringBreakdown.chips," \xD7 ",e.scoringBreakdown.mult," = ",(0,c.jsx)("strong",{children:e.scoringBreakdown.baseTotal?.toLocaleString()||e.scoringBreakdown.total.toLocaleString()})]})]}),e.scoringBreakdown.legendEffects?.length>0&&(0,c.jsxs)("div",{className:"effect-triggers",children:[(0,c.jsx)("div",{className:"effect-label",children:"\u{1F3C6} Legends:"}),e.scoringBreakdown.legendEffects.map((f,S)=>(0,c.jsxs)("div",{className:`effect-item ${f.debuffed?"debuffed":""}`,children:[(0,c.jsx)("span",{className:"effect-name",children:f.legend}),(0,c.jsx)("span",{className:"effect-value",children:f.effect})]},S))]}),e.scoringBreakdown.ballparkEffects?.length>0&&(0,c.jsxs)("div",{className:"effect-triggers",children:[(0,c.jsx)("div",{className:"effect-label",children:"\u{1F3DF}\uFE0F Ballparks:"}),e.scoringBreakdown.ballparkEffects.map((f,S)=>(0,c.jsxs)("div",{className:`effect-item ${f.debuffed?"debuffed":""}`,children:[(0,c.jsx)("span",{className:"effect-name",children:f.ballpark}),(0,c.jsx)("span",{className:"effect-value",children:f.effect})]},S))]}),e.scoringBreakdown.homeWinners?.length>0&&(0,c.jsxs)("div",{className:"effect-triggers home-winners",children:[(0,c.jsx)("div",{className:"effect-label",children:"\u{1F3E0} Home Game Winners!"}),e.scoringBreakdown.homeWinners.map((f,S)=>(0,c.jsxs)("div",{className:"effect-item home-win",children:[(0,c.jsx)("span",{className:"effect-name",children:f.legend}),(0,c.jsxs)("span",{className:"effect-value",children:["\xD7",f.multiplier," at ",f.park]})]},S))]}),e.scoringBreakdown.awayWinners?.length>0&&(0,c.jsxs)("div",{className:"effect-triggers away-winners",children:[(0,c.jsx)("div",{className:"effect-label",children:"\u2708\uFE0F Away Game Winners!"}),e.scoringBreakdown.awayWinners.map((f,S)=>(0,c.jsxs)("div",{className:"effect-item away-win",children:[(0,c.jsx)("span",{className:"effect-name",children:f.legend}),(0,c.jsxs)("span",{className:"effect-value",children:["\xD7",f.multiplier," at ",f.park]})]},S))]}),e.scoringBreakdown.homeAwayMultiplier>1&&(0,c.jsxs)("div",{className:"home-away-total",children:[(0,c.jsxs)("span",{children:["Final Score: ",e.scoringBreakdown.baseTotal?.toLocaleString()," \xD7 ",e.scoringBreakdown.homeAwayMultiplier.toFixed(2)," = "]}),(0,c.jsx)("strong",{children:e.scoringBreakdown.total.toLocaleString()})]})]}),e.moneyBreakdown&&(0,c.jsxs)("div",{className:"money-breakdown",children:[(0,c.jsx)("h3",{children:"\u{1F4B0} Earnings Breakdown"}),(0,c.jsxs)("div",{className:"breakdown-lines",children:[(0,c.jsxs)("div",{className:"breakdown-line",children:[(0,c.jsx)("span",{children:"Starting Cash:"}),(0,c.jsxs)("span",{children:["$",e.moneyBreakdown.starting]})]}),e.moneyBreakdown.ballparkBonus>0&&(0,c.jsxs)("div",{className:"breakdown-line positive ballpark",children:[(0,c.jsx)("span",{children:"\u{1F3DF}\uFE0F Camden Yards:"}),(0,c.jsxs)("span",{children:["+$",e.moneyBreakdown.ballparkBonus]})]}),e.moneyBreakdown.interest>0&&(0,c.jsxs)("div",{className:"breakdown-line positive interest",children:[(0,c.jsxs)("span",{children:["Interest ($",Math.floor((e.moneyBreakdown.starting+e.moneyBreakdown.ballparkBonus)/5)," \xD7 $1, max $5):"]}),(0,c.jsxs)("span",{children:["+$",e.moneyBreakdown.interest]})]}),(0,c.jsxs)("div",{className:"breakdown-line positive",children:[(0,c.jsx)("span",{children:"At-Bat Reward:"}),(0,c.jsxs)("span",{children:["+$",e.moneyBreakdown.reward]})]}),e.moneyBreakdown.handsBonus>0&&(0,c.jsxs)("div",{className:"breakdown-line positive",children:[(0,c.jsx)("span",{children:"Remaining Hands Bonus:"}),(0,c.jsxs)("span",{children:["+$",e.moneyBreakdown.handsBonus]})]}),e.moneyBreakdown.salaryCap<0&&(0,c.jsxs)("div",{className:"breakdown-line negative",children:[(0,c.jsx)("span",{children:"\u{1F4B8} Salary Cap:"}),(0,c.jsxs)("span",{children:["$",e.moneyBreakdown.salaryCap]})]}),(0,c.jsxs)("div",{className:"breakdown-line total",children:[(0,c.jsx)("span",{children:"Total:"}),(0,c.jsxs)("span",{children:["$",e.money]})]})]})]}),(0,c.jsx)("button",{className:"btn-continue-to-shop",onClick:w,children:"\u{1F3DF}\uFE0F Head to the Dugout"})]})}),e.phase==="SHOP"&&(0,c.jsx)(bs,{money:e.money,series:e.series,onBuyItem:Ua,onSellLegend:Va,onSellBallpark:Wa,onReroll:dr,onContinue:B,onMedicalPack:mt,onApplyEnhancement:io,legends:e.legends,maxLegends:e.maxLegends,positions:e.positions||[],ballparks:e.ballparks||[],maxBallparks:e.maxBallparks||5,legendInjuries:e.legendInjuries||{},legendBuffs:e.legendBuffs||{},voucherBoughtThisSeries:e.voucherBoughtThisSeries||!1,rerollsThisShop:e.rerollsThisShop||0,hasScoutReport:e.hasScoutReport||!1,deck:e.fullDeck||[],purchasedVoucherEffects:e.purchasedVoucherEffects||[]}),e.phase==="GAME_OVER"&&(0,c.jsx)("div",{className:"game-over-overlay",children:(0,c.jsxs)("div",{className:"game-over-content",children:[(0,c.jsx)("h2",{children:"Game Over"}),(0,c.jsxs)("p",{children:["Series ",e.series," - ",e.atBatType.replace("_"," ")]}),(0,c.jsxs)("p",{children:["Hands Played: ",e.handsPlayed]}),(0,c.jsxs)("p",{children:["Best Hand: ",e.highestScore.toLocaleString()]}),(0,c.jsx)("button",{className:"btn-primary",onClick:Pt,children:"New Game"})]})}),e.phase==="VICTORY"&&(0,c.jsx)("div",{className:"victory-overlay",children:(0,c.jsxs)("div",{className:"victory-content",children:[(0,c.jsx)("h2",{children:"\u{1F3C6} WORLD SERIES CHAMPION! \u{1F3C6}"}),(0,c.jsx)("p",{children:"You conquered all 9 Series and won the World Series!"}),(0,c.jsxs)("p",{children:["Hands Played: ",e.handsPlayed]}),(0,c.jsxs)("p",{children:["Final Money: $",e.money]}),(0,c.jsxs)("p",{children:["Legends: ",e.legends.length]}),(0,c.jsxs)("div",{className:"victory-buttons",children:[(0,c.jsx)("button",{className:"btn-primary",onClick:()=>{n(f=>({...f,phase:"SHOP",series:10,atBat:1,atBatType:"FIRST",targetScore:Ba(10,"FIRST"),currentScore:0,voucherBoughtThisSeries:!1}))},children:"\u26BE Continue to Extra Innings"}),(0,c.jsx)("button",{className:"btn-secondary",onClick:Pt,children:"\u{1F504} New Game"})]})]})}),(0,c.jsx)(ws,{sortMode:s,onSortChange:u}),(0,c.jsx)(gs,{cards:Ps,selectedCards:e.selectedCards,onCardClick:pt,disabled:e.phase!=="PLAYING"||i,onReorderSelected:ep,onDragStart:Zf,onDragOver:Ya,onDragEnd:Ka,scoringCardId:un,scoringEffect:Q,scoredCardIds:ct}),(0,c.jsx)(ks,{selectedCount:e.selectedCards.length,canPlay:np,canDiscard:tp,onPlayHand:Fa,onDiscard:ao,handsRemaining:e.handsRemaining,discardsRemaining:e.discardsRemaining}),(0,c.jsxs)("div",{className:"deck-info",children:[(0,c.jsxs)("button",{className:"btn-view-deck-small",onClick:()=>h("remaining"),title:"View cards remaining in current draw pile",children:["\u{1F3B4} Cards Remaining (",e.deck.length,")"]}),(0,c.jsxs)("button",{className:"btn-view-deck-small",onClick:()=>h("full"),title:"View your complete deck with all cards",children:["\u{1F4CB} Full Deck (",e.fullDeck?.length||52,")"]})]})]}),(0,c.jsxs)("aside",{className:"sidebar right",children:[e.ballparks?.length>0&&(0,c.jsxs)("div",{className:"ballparks-area",children:[(0,c.jsxs)("h3",{children:["\u{1F3DF}\uFE0F Ballparks (",e.ballparks.length,"/",e.maxBallparks||5,") ",(0,c.jsx)("span",{className:"scoring-hint",children:"\u2193 scores top to bottom"})]}),(0,c.jsx)("div",{className:"ballpark-slots",children:e.ballparks.map((f,S)=>{let b=ft===f.name,R=x.includes(f.name);return(0,c.jsxs)("div",{className:`ballpark-slot ${R?"triggered":""} ${b?"scoring-now":""}`,draggable:!0,onDragStart:$=>Xf($,S),onDragOver:Ya,onDrop:$=>qf($,S),onDragEnd:Ka,children:[(0,c.jsx)("div",{className:"drag-handle",children:"\u22EE\u22EE"}),(0,c.jsx)("div",{className:"ballpark-slot-name",children:f.name}),(0,c.jsx)("div",{className:"ballpark-slot-effect",children:f.effect}),R&&(0,c.jsx)("div",{className:"trigger-indicator",children:"\u2728"}),b&&Q&&(0,c.jsxs)("div",{className:`bonus-scoring-popup ${Q.type}`,children:[Q.type==="chips"&&`+${Q.value}`,Q.type==="plusMult"&&`+${Q.value}`,Q.type==="timesMult"&&`\xD7${Q.value}`]})]},S)})})]}),(0,c.jsxs)("div",{className:"legends-area",children:[(0,c.jsxs)("h3",{children:["\u{1F3C6} Legends (",e.legends.length,"/",e.maxLegends,") ",(0,c.jsx)("span",{className:"scoring-hint",children:"\u2193 scores top to bottom"})]}),(0,c.jsxs)("div",{className:"legend-slots",children:[e.legends.map((f,S)=>{let b=f.effect;if(f.name==="Shohei Ohtani"){let q=e.handsPlayed||0,Ne=q*10,re=q*2;b=`+${Ne} Chips, +${re} Mult (${q} hands)`}let R=e.legendInjuries?.[f.name]||0,$=R>0,me=e.legendBuffs?.[f.name],ce=me&&me.inningsRemaining>0,H=ft===f.name,wn=m.includes(f.name);return(0,c.jsxs)("div",{className:`legend-slot filled ${f.rarity} ${wn?"triggered":""} ${$?"injured":""} ${ce?"buffed":""} ${H?"scoring-now":""}`,draggable:!0,onDragStart:q=>Qf(q,S),onDragOver:Ya,onDrop:q=>Jf(q,S),onDragEnd:Ka,children:[(0,c.jsx)("div",{className:"drag-handle",children:"\u22EE\u22EE"}),(0,c.jsxs)("div",{className:"legend-slot-name",children:[f.name,$&&(0,c.jsx)("span",{className:"injury-badge",title:`Injured for ${R} more innings`,children:"\u{1F915}"}),ce&&(0,c.jsx)("span",{className:"buff-badge",title:`+20% for ${me.inningsRemaining} more innings`,children:"\u{1F4AA}"})]}),(0,c.jsx)("div",{className:"legend-slot-effect",children:b}),$&&(0,c.jsxs)("div",{className:"status-indicator injury",children:[R," innings"]}),ce&&(0,c.jsxs)("div",{className:"status-indicator buff",children:["+20% (",me.inningsRemaining," inn)"]}),wn&&(0,c.jsx)("div",{className:"trigger-indicator",children:"\u2728"}),H&&Q&&(0,c.jsxs)("div",{className:`bonus-scoring-popup ${Q.type}`,children:[Q.type==="chips"&&`+${Q.value}`,Q.type==="plusMult"&&`+${Q.value}`,Q.type==="timesMult"&&`\xD7${Q.value}`]})]},S)}),[...Array(Math.max(0,e.maxLegends-e.legends.length))].map((f,S)=>(0,c.jsx)("div",{className:"legend-slot empty",children:(0,c.jsx)("span",{children:"+"})},`empty-${S}`))]})]}),e.positions?.length>0&&(0,c.jsxs)("div",{className:"positions-area",children:[(0,c.jsx)("h3",{children:"\u26BE Positions"}),(0,c.jsx)("div",{className:"position-slots",children:e.positions.map((f,S)=>(0,c.jsxs)("div",{className:"position-slot",children:[(0,c.jsx)("div",{className:"position-slot-name",children:f.name}),(0,c.jsx)("div",{className:"position-slot-effect",children:f.effect})]},S))})]})]})]}),(0,c.jsx)(_s,{handLevels:e.handLevels,isOpen:g,onToggle:()=>v(!g)}),T&&(0,c.jsx)("div",{className:"dialog-overlay",children:(0,c.jsxs)("div",{className:"dialog-box injury-dialog",children:[(0,c.jsx)("div",{className:"dialog-icon",children:"\u{1F915}"}),(0,c.jsx)("h2",{children:"Injury Report!"}),(0,c.jsx)("p",{className:"dialog-legend-name",children:T.name}),(0,c.jsx)("p",{className:"dialog-message",children:"has been injured and will be out for"}),(0,c.jsxs)("p",{className:"dialog-innings",children:[T.innings," innings"]}),(0,c.jsx)("p",{className:"dialog-hint",children:"Use a Medical Pack to heal injured legends"}),(0,c.jsx)("button",{className:"dialog-btn",onClick:ja,children:"Continue"})]})}),_&&(0,c.jsx)("div",{className:"dialog-overlay",children:(0,c.jsxs)("div",{className:"dialog-box home-away-dialog",children:[(0,c.jsx)("div",{className:"dialog-icon",children:"\u{1F3C6}"}),(0,c.jsx)("h2",{children:"Bonus Multiplier!"}),_.homeWinners?.length>0&&(0,c.jsxs)("div",{className:"dialog-section home-section",children:[(0,c.jsx)("h3",{children:"\u{1F3E0} Home Game Winners"}),_.homeWinners.map((f,S)=>(0,c.jsxs)("div",{className:"winner-item",children:[(0,c.jsx)("span",{className:"winner-legend",children:f.legend}),(0,c.jsxs)("span",{className:"winner-bonus",children:["\xD7",f.multiplier," at ",f.park]})]},S))]}),_.awayWinners?.length>0&&(0,c.jsxs)("div",{className:"dialog-section away-section",children:[(0,c.jsx)("h3",{children:"\u2708\uFE0F Away Game Winners"}),_.awayWinners.map((f,S)=>(0,c.jsxs)("div",{className:"winner-item",children:[(0,c.jsx)("span",{className:"winner-legend",children:f.legend}),(0,c.jsxs)("span",{className:"winner-bonus",children:["\xD7",f.multiplier," at ",f.park]})]},S))]}),(0,c.jsxs)("div",{className:"total-multiplier",children:["Total: \xD7",_.totalMultiplier.toFixed(2)]}),(0,c.jsx)("button",{className:"dialog-btn",onClick:$a,children:"Continue"})]})}),(0,c.jsx)(oo,{deck:d==="remaining"?e.deck:e.fullDeck||[],isOpen:d!==null,onClose:()=>h(null),title:d==="remaining"?"Cards Remaining in Draw Pile":"Full Deck"})]})}var Yf=document.createElement("style");Yf.textContent=`/* Diamond Dynasty - Main Styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Baseball-inspired color palette */
  --grass-green: #2d5a27;
  --grass-light: #3d7a37;
  --dirt-brown: #8b6914;
  --leather-tan: #c4a35a;
  --baseball-white: #f5f5f5;
  --baseball-red: #bf0d3e;
  --dugout-gray: #3a3a3a;
  --scoreboard-yellow: #ffd700;

  /* Card colors */
  --card-red: #d40000;
  --card-black: #1a1a1a;
  --card-back: #1e3a5f;

  /* UI colors */
  --chip-blue: #4a90d9;
  --mult-red: #e85050;
  --money-gold: #ffc107;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, var(--grass-green) 0%, var(--grass-light) 100%);
  min-height: 100vh;
  color: var(--baseball-white);
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Typography */
h1, h2, h3 {
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Utility classes */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-chips {
  color: var(--chip-blue);
  font-weight: bold;
}

.text-mult {
  color: var(--mult-red);
  font-weight: bold;
}

.text-money {
  color: var(--money-gold);
  font-weight: bold;
}

/* Button base styles */
button {
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

button:active {
  transform: translateY(0);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.btn-primary {
  background: var(--baseball-red);
  color: white;
}

.btn-secondary {
  background: var(--dugout-gray);
  color: white;
}

.btn-success {
  background: var(--grass-green);
  color: white;
}
`;document.head.appendChild(Yf);var Ms=W(pe(),1);Gf.default.createRoot(document.getElementById("root")).render((0,Ms.jsx)(Kf.default.StrictMode,{children:(0,Ms.jsx)(Rs,{})}));
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
