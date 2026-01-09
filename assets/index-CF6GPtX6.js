(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))m(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const x of f.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&m(x)}).observe(document,{childList:!0,subtree:!0});function c(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function m(d){if(d.ep)return;d.ep=!0;const f=c(d);fetch(d.href,f)}})();function Af(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var yi={exports:{}},Vr={},vi={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Mf(){if(Lu)return ae;Lu=1;var o=Symbol.for("react.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),x=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),C=Symbol.iterator;function P(b){return b===null||typeof b!="object"?null:(b=C&&b[C]||b["@@iterator"],typeof b=="function"?b:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,L={};function M(b,I,re){this.props=b,this.context=I,this.refs=L,this.updater=re||O}M.prototype.isReactComponent={},M.prototype.setState=function(b,I){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,I,"setState")},M.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function z(){}z.prototype=M.prototype;function K(b,I,re){this.props=b,this.context=I,this.refs=L,this.updater=re||O}var W=K.prototype=new z;W.constructor=K,_(W,M.prototype),W.isPureReactComponent=!0;var te=Array.isArray,xe=Object.prototype.hasOwnProperty,me={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function Se(b,I,re){var se,oe={},ce=null,ge=null;if(I!=null)for(se in I.ref!==void 0&&(ge=I.ref),I.key!==void 0&&(ce=""+I.key),I)xe.call(I,se)&&!ve.hasOwnProperty(se)&&(oe[se]=I[se]);var pe=arguments.length-2;if(pe===1)oe.children=re;else if(1<pe){for(var Ne=Array(pe),rt=0;rt<pe;rt++)Ne[rt]=arguments[rt+2];oe.children=Ne}if(b&&b.defaultProps)for(se in pe=b.defaultProps,pe)oe[se]===void 0&&(oe[se]=pe[se]);return{$$typeof:o,type:b,key:ce,ref:ge,props:oe,_owner:me.current}}function E(b,I){return{$$typeof:o,type:b.type,key:I,ref:b.ref,props:b.props,_owner:b._owner}}function F(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function le(b){var I={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(re){return I[re]})}var ne=/\/+/g;function fe(b,I){return typeof b=="object"&&b!==null&&b.key!=null?le(""+b.key):I.toString(36)}function Ve(b,I,re,se,oe){var ce=typeof b;(ce==="undefined"||ce==="boolean")&&(b=null);var ge=!1;if(b===null)ge=!0;else switch(ce){case"string":case"number":ge=!0;break;case"object":switch(b.$$typeof){case o:case s:ge=!0}}if(ge)return ge=b,oe=oe(ge),b=se===""?"."+fe(ge,0):se,te(oe)?(re="",b!=null&&(re=b.replace(ne,"$&/")+"/"),Ve(oe,I,re,"",function(rt){return rt})):oe!=null&&(F(oe)&&(oe=E(oe,re+(!oe.key||ge&&ge.key===oe.key?"":(""+oe.key).replace(ne,"$&/")+"/")+b)),I.push(oe)),1;if(ge=0,se=se===""?".":se+":",te(b))for(var pe=0;pe<b.length;pe++){ce=b[pe];var Ne=se+fe(ce,pe);ge+=Ve(ce,I,re,Ne,oe)}else if(Ne=P(b),typeof Ne=="function")for(b=Ne.call(b),pe=0;!(ce=b.next()).done;)ce=ce.value,Ne=se+fe(ce,pe++),ge+=Ve(ce,I,re,Ne,oe);else if(ce==="object")throw I=String(b),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return ge}function Qe(b,I,re){if(b==null)return b;var se=[],oe=0;return Ve(b,se,"","",function(ce){return I.call(re,ce,oe++)}),se}function Ke(b){if(b._status===-1){var I=b._result;I=I(),I.then(function(re){(b._status===0||b._status===-1)&&(b._status=1,b._result=re)},function(re){(b._status===0||b._status===-1)&&(b._status=2,b._result=re)}),b._status===-1&&(b._status=0,b._result=I)}if(b._status===1)return b._result.default;throw b._result}var Pe={current:null},B={transition:null},X={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:B,ReactCurrentOwner:me};function G(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:Qe,forEach:function(b,I,re){Qe(b,function(){I.apply(this,arguments)},re)},count:function(b){var I=0;return Qe(b,function(){I++}),I},toArray:function(b){return Qe(b,function(I){return I})||[]},only:function(b){if(!F(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ae.Component=M,ae.Fragment=c,ae.Profiler=d,ae.PureComponent=K,ae.StrictMode=m,ae.Suspense=y,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,ae.act=G,ae.cloneElement=function(b,I,re){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var se=_({},b.props),oe=b.key,ce=b.ref,ge=b._owner;if(I!=null){if(I.ref!==void 0&&(ce=I.ref,ge=me.current),I.key!==void 0&&(oe=""+I.key),b.type&&b.type.defaultProps)var pe=b.type.defaultProps;for(Ne in I)xe.call(I,Ne)&&!ve.hasOwnProperty(Ne)&&(se[Ne]=I[Ne]===void 0&&pe!==void 0?pe[Ne]:I[Ne])}var Ne=arguments.length-2;if(Ne===1)se.children=re;else if(1<Ne){pe=Array(Ne);for(var rt=0;rt<Ne;rt++)pe[rt]=arguments[rt+2];se.children=pe}return{$$typeof:o,type:b.type,key:oe,ref:ce,props:se,_owner:ge}},ae.createContext=function(b){return b={$$typeof:x,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:f,_context:b},b.Consumer=b},ae.createElement=Se,ae.createFactory=function(b){var I=Se.bind(null,b);return I.type=b,I},ae.createRef=function(){return{current:null}},ae.forwardRef=function(b){return{$$typeof:p,render:b}},ae.isValidElement=F,ae.lazy=function(b){return{$$typeof:N,_payload:{_status:-1,_result:b},_init:Ke}},ae.memo=function(b,I){return{$$typeof:g,type:b,compare:I===void 0?null:I}},ae.startTransition=function(b){var I=B.transition;B.transition={};try{b()}finally{B.transition=I}},ae.unstable_act=G,ae.useCallback=function(b,I){return Pe.current.useCallback(b,I)},ae.useContext=function(b){return Pe.current.useContext(b)},ae.useDebugValue=function(){},ae.useDeferredValue=function(b){return Pe.current.useDeferredValue(b)},ae.useEffect=function(b,I){return Pe.current.useEffect(b,I)},ae.useId=function(){return Pe.current.useId()},ae.useImperativeHandle=function(b,I,re){return Pe.current.useImperativeHandle(b,I,re)},ae.useInsertionEffect=function(b,I){return Pe.current.useInsertionEffect(b,I)},ae.useLayoutEffect=function(b,I){return Pe.current.useLayoutEffect(b,I)},ae.useMemo=function(b,I){return Pe.current.useMemo(b,I)},ae.useReducer=function(b,I,re){return Pe.current.useReducer(b,I,re)},ae.useRef=function(b){return Pe.current.useRef(b)},ae.useState=function(b){return Pe.current.useState(b)},ae.useSyncExternalStore=function(b,I,re){return Pe.current.useSyncExternalStore(b,I,re)},ae.useTransition=function(){return Pe.current.useTransition()},ae.version="18.3.1",ae}var Au;function Ei(){return Au||(Au=1,vi.exports=Mf()),vi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function zf(){if(Mu)return Vr;Mu=1;var o=Ei(),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function x(p,y,g){var N,C={},P=null,O=null;g!==void 0&&(P=""+g),y.key!==void 0&&(P=""+y.key),y.ref!==void 0&&(O=y.ref);for(N in y)m.call(y,N)&&!f.hasOwnProperty(N)&&(C[N]=y[N]);if(p&&p.defaultProps)for(N in y=p.defaultProps,y)C[N]===void 0&&(C[N]=y[N]);return{$$typeof:s,type:p,key:P,ref:O,props:C,_owner:d.current}}return Vr.Fragment=c,Vr.jsx=x,Vr.jsxs=x,Vr}var zu;function Of(){return zu||(zu=1,yi.exports=zf()),yi.exports}var r=Of(),$=Ei();const Fe=Af($);var fs={},wi={exports:{}},nt={},bi={exports:{}},Ni={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou;function Df(){return Ou||(Ou=1,function(o){function s(B,X){var G=B.length;B.push(X);e:for(;0<G;){var b=G-1>>>1,I=B[b];if(0<d(I,X))B[b]=X,B[G]=I,G=b;else break e}}function c(B){return B.length===0?null:B[0]}function m(B){if(B.length===0)return null;var X=B[0],G=B.pop();if(G!==X){B[0]=G;e:for(var b=0,I=B.length,re=I>>>1;b<re;){var se=2*(b+1)-1,oe=B[se],ce=se+1,ge=B[ce];if(0>d(oe,G))ce<I&&0>d(ge,oe)?(B[b]=ge,B[ce]=G,b=ce):(B[b]=oe,B[se]=G,b=se);else if(ce<I&&0>d(ge,G))B[b]=ge,B[ce]=G,b=ce;else break e}}return X}function d(B,X){var G=B.sortIndex-X.sortIndex;return G!==0?G:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var x=Date,p=x.now();o.unstable_now=function(){return x.now()-p}}var y=[],g=[],N=1,C=null,P=3,O=!1,_=!1,L=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(B){for(var X=c(g);X!==null;){if(X.callback===null)m(g);else if(X.startTime<=B)m(g),X.sortIndex=X.expirationTime,s(y,X);else break;X=c(g)}}function te(B){if(L=!1,W(B),!_)if(c(y)!==null)_=!0,Ke(xe);else{var X=c(g);X!==null&&Pe(te,X.startTime-B)}}function xe(B,X){_=!1,L&&(L=!1,z(Se),Se=-1),O=!0;var G=P;try{for(W(X),C=c(y);C!==null&&(!(C.expirationTime>X)||B&&!le());){var b=C.callback;if(typeof b=="function"){C.callback=null,P=C.priorityLevel;var I=b(C.expirationTime<=X);X=o.unstable_now(),typeof I=="function"?C.callback=I:C===c(y)&&m(y),W(X)}else m(y);C=c(y)}if(C!==null)var re=!0;else{var se=c(g);se!==null&&Pe(te,se.startTime-X),re=!1}return re}finally{C=null,P=G,O=!1}}var me=!1,ve=null,Se=-1,E=5,F=-1;function le(){return!(o.unstable_now()-F<E)}function ne(){if(ve!==null){var B=o.unstable_now();F=B;var X=!0;try{X=ve(!0,B)}finally{X?fe():(me=!1,ve=null)}}else me=!1}var fe;if(typeof K=="function")fe=function(){K(ne)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Qe=Ve.port2;Ve.port1.onmessage=ne,fe=function(){Qe.postMessage(null)}}else fe=function(){M(ne,0)};function Ke(B){ve=B,me||(me=!0,fe())}function Pe(B,X){Se=M(function(){B(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){_||O||(_=!0,Ke(xe))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return P},o.unstable_getFirstCallbackNode=function(){return c(y)},o.unstable_next=function(B){switch(P){case 1:case 2:case 3:var X=3;break;default:X=P}var G=P;P=X;try{return B()}finally{P=G}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var G=P;P=B;try{return X()}finally{P=G}},o.unstable_scheduleCallback=function(B,X,G){var b=o.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?b+G:b):G=b,B){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=G+I,B={id:N++,callback:X,priorityLevel:B,startTime:G,expirationTime:I,sortIndex:-1},G>b?(B.sortIndex=G,s(g,B),c(y)===null&&B===c(g)&&(L?(z(Se),Se=-1):L=!0,Pe(te,G-b))):(B.sortIndex=I,s(y,B),_||O||(_=!0,Ke(xe))),B},o.unstable_shouldYield=le,o.unstable_wrapCallback=function(B){var X=P;return function(){var G=P;P=X;try{return B.apply(this,arguments)}finally{P=G}}}}(Ni)),Ni}var Du;function Ff(){return Du||(Du=1,bi.exports=Df()),bi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function Bf(){if(Fu)return nt;Fu=1;var o=Ei(),s=Ff();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,d={};function f(e,t){x(e,t),x(e+"Capture",t)}function x(e,t){for(d[e]=t,e=0;e<t.length;e++)m.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},C={};function P(e){return y.call(C,e)?!0:y.call(N,e)?!1:g.test(e)?C[e]=!0:(N[e]=!0,!1)}function O(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,t,n,a){if(t===null||typeof t>"u"||O(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function L(e,t,n,a,l,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=u}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new L(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new L(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new L(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new L(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new L(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new L(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(z,K);M[t]=new L(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(z,K);M[t]=new L(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(z,K);M[t]=new L(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,n,a){var l=M.hasOwnProperty(t)?M[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_(t,n,l,a)&&(n=null),a||l===null?P(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,a=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var te=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xe=Symbol.for("react.element"),me=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),le=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),Qe=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),B=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,b;function I(e){if(b===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);b=t&&t[1]||""}return`
`+b+e}var re=!1;function se(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(S){var a=S}Reflect.construct(e,[],t)}else{try{t.call()}catch(S){a=S}e.call(t.prototype)}else{try{throw Error()}catch(S){a=S}e()}}catch(S){if(S&&a&&typeof S.stack=="string"){for(var l=S.stack.split(`
`),i=a.stack.split(`
`),u=l.length-1,h=i.length-1;1<=u&&0<=h&&l[u]!==i[h];)h--;for(;1<=u&&0<=h;u--,h--)if(l[u]!==i[h]){if(u!==1||h!==1)do if(u--,h--,0>h||l[u]!==i[h]){var v=`
`+l[u].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=u&&0<=h);break}}}finally{re=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function oe(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return""}}function ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case me:return"Portal";case E:return"Profiler";case Se:return"StrictMode";case fe:return"Suspense";case Ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:return(e.displayName||"Context")+".Consumer";case F:return(e._context.displayName||"Context")+".Provider";case ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qe:return t=e.displayName||null,t!==null?t:ce(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(t);case 8:return t===Se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rt(e){var t=Ne(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ra(e){e._valueTracker||(e._valueTracker=rt(e))}function Di(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Ne(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ss(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fi(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=pe(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bi(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function $s(e,t){Bi(e,t);var n=pe(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cs(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ui(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cs(e,t,n){(t!=="number"||aa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function En(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+pe(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ps(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(ir(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pe(n)}}function Hi(e,t){var n=pe(t.value),a=pe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Gi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Es(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sa,qi=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Od=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(e){Od.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cr[t]=cr[e]})});function Yi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||cr.hasOwnProperty(e)&&cr[e]?(""+t).trim():t+"px"}function Qi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,l=Yi(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,l):e[n]=l}}var Dd=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _s(e,t){if(t){if(Dd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function Ts(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Is=null;function Rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,_n=null,Tn=null;function Ki(e){if(e=Tr(e)){if(typeof Ls!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Pa(t),Ls(e.stateNode,e.type,t))}}function Ji(e){_n?Tn?Tn.push(e):Tn=[e]:_n=e}function Zi(){if(_n){var e=_n,t=Tn;if(Tn=_n=null,Ki(e),t)for(e=0;e<t.length;e++)Ki(t[e])}}function Xi(e,t){return e(t)}function eo(){}var As=!1;function to(e,t,n){if(As)return e(t,n);As=!0;try{return Xi(e,t,n)}finally{As=!1,(_n!==null||Tn!==null)&&(eo(),Zi())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var a=Pa(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Ms=!1;if(p)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Ms=!1}function Fd(e,t,n,a,l,i,u,h,v){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch(R){this.onError(R)}}var mr=!1,la=null,ia=!1,zs=null,Bd={onError:function(e){mr=!0,la=e}};function Ud(e,t,n,a,l,i,u,h,v){mr=!1,la=null,Fd.apply(Bd,arguments)}function Wd(e,t,n,a,l,i,u,h,v){if(Ud.apply(this,arguments),mr){if(mr){var S=la;mr=!1,la=null}else throw Error(c(198));ia||(ia=!0,zs=S)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function no(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ro(e){if(pn(e)!==e)throw Error(c(188))}function Hd(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ro(l),e;if(i===a)return ro(l),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=i;else{for(var u=!1,h=l.child;h;){if(h===n){u=!0,n=l,a=i;break}if(h===a){u=!0,a=l,n=i;break}h=h.sibling}if(!u){for(h=i.child;h;){if(h===n){u=!0,n=i,a=l;break}if(h===a){u=!0,a=i,n=l;break}h=h.sibling}if(!u)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function ao(e){return e=Hd(e),e!==null?so(e):null}function so(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=so(e);if(t!==null)return t;e=e.sibling}return null}var lo=s.unstable_scheduleCallback,io=s.unstable_cancelCallback,Gd=s.unstable_shouldYield,Vd=s.unstable_requestPaint,_e=s.unstable_now,qd=s.unstable_getCurrentPriorityLevel,Os=s.unstable_ImmediatePriority,oo=s.unstable_UserBlockingPriority,oa=s.unstable_NormalPriority,Yd=s.unstable_LowPriority,co=s.unstable_IdlePriority,ca=null,Tt=null;function Qd(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(ca,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Zd,Kd=Math.log,Jd=Math.LN2;function Zd(e){return e>>>=0,e===0?32:31-(Kd(e)/Jd|0)|0}var ua=64,da=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ma(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,l=e.suspendedLanes,i=e.pingedLanes,u=n&268435455;if(u!==0){var h=u&~l;h!==0?a=fr(h):(i&=u,i!==0&&(a=fr(i)))}else u=n&~l,u!==0?a=fr(u):i!==0&&(a=fr(i));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((a&4)!==0&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-yt(t),l=1<<n,a|=e[n],t&=~l;return a}function Xd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function em(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var u=31-yt(i),h=1<<u,v=l[u];v===-1?((h&n)===0||(h&a)!==0)&&(l[u]=Xd(h,t)):v<=t&&(e.expiredLanes|=h),i&=~h}}function Ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uo(){var e=ua;return ua<<=1,(ua&4194240)===0&&(ua=64),e}function Fs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function tm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-yt(n),i=1<<l;t[l]=0,a[l]=-1,e[l]=-1,n&=~i}}function Bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-yt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}var he=0;function mo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fo,Us,po,ho,xo,Ws=!1,fa=[],Yt=null,Qt=null,Kt=null,hr=new Map,xr=new Map,Jt=[],nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function go(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function gr(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Tr(t),t!==null&&Us(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function rm(e,t,n,a,l){switch(t){case"focusin":return Yt=gr(Yt,e,t,n,a,l),!0;case"dragenter":return Qt=gr(Qt,e,t,n,a,l),!0;case"mouseover":return Kt=gr(Kt,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return hr.set(i,gr(hr.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,xr.set(i,gr(xr.get(i)||null,e,t,n,a,l)),!0}return!1}function yo(e){var t=hn(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=no(n),t!==null){e.blockedOn=t,xo(e.priority,function(){po(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Is=a,n.target.dispatchEvent(a),Is=null}else return t=Tr(n),t!==null&&Us(t),e.blockedOn=n,!1;t.shift()}return!0}function vo(e,t,n){pa(e)&&n.delete(t)}function am(){Ws=!1,Yt!==null&&pa(Yt)&&(Yt=null),Qt!==null&&pa(Qt)&&(Qt=null),Kt!==null&&pa(Kt)&&(Kt=null),hr.forEach(vo),xr.forEach(vo)}function yr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ws||(Ws=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,am)))}function vr(e){function t(l){return yr(l,e)}if(0<fa.length){yr(fa[0],e);for(var n=1;n<fa.length;n++){var a=fa[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Yt!==null&&yr(Yt,e),Qt!==null&&yr(Qt,e),Kt!==null&&yr(Kt,e),hr.forEach(t),xr.forEach(t),n=0;n<Jt.length;n++)a=Jt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)yo(n),n.blockedOn===null&&Jt.shift()}var In=te.ReactCurrentBatchConfig,ha=!0;function sm(e,t,n,a){var l=he,i=In.transition;In.transition=null;try{he=1,Hs(e,t,n,a)}finally{he=l,In.transition=i}}function lm(e,t,n,a){var l=he,i=In.transition;In.transition=null;try{he=4,Hs(e,t,n,a)}finally{he=l,In.transition=i}}function Hs(e,t,n,a){if(ha){var l=Gs(e,t,n,a);if(l===null)ol(e,t,a,xa,n),go(e,a);else if(rm(l,e,t,n,a))a.stopPropagation();else if(go(e,a),t&4&&-1<nm.indexOf(e)){for(;l!==null;){var i=Tr(l);if(i!==null&&fo(i),i=Gs(e,t,n,a),i===null&&ol(e,t,a,xa,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else ol(e,t,a,null,n)}}var xa=null;function Gs(e,t,n,a){if(xa=null,e=Rs(a),e=hn(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=no(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xa=e,null}function wo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qd()){case Os:return 1;case oo:return 4;case oa:case Yd:return 16;case co:return 536870912;default:return 16}default:return 16}}var Zt=null,Vs=null,ga=null;function bo(){if(ga)return ga;var e,t=Vs,n=t.length,a,l="value"in Zt?Zt.value:Zt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(a=1;a<=u&&t[n-a]===l[i-a];a++);return ga=l.slice(e,1<a?1-a:void 0)}function ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function va(){return!0}function No(){return!1}function at(e){function t(n,a,l,i,u){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?va:No,this.isPropagationStopped=No,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=at(Rn),wr=G({},Rn,{view:0,detail:0}),im=at(wr),Ys,Qs,br,wa=G({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Ys=e.screenX-br.screenX,Qs=e.screenY-br.screenY):Qs=Ys=0,br=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),jo=at(wa),om=G({},wa,{dataTransfer:0}),cm=at(om),um=G({},wr,{relatedTarget:0}),Ks=at(um),dm=G({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),mm=at(dm),fm=G({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pm=at(fm),hm=G({},Rn,{data:0}),ko=at(hm),xm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ym[e])?!!t[e]:!1}function Js(){return vm}var wm=G({},wr,{key:function(e){if(e.key){var t=xm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(e){return e.type==="keypress"?ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bm=at(wm),Nm=G({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),So=at(Nm),jm=G({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js}),km=at(jm),Sm=G({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$m=at(Sm),Cm=G({},wa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pm=at(Cm),Em=[9,13,27,32],Zs=p&&"CompositionEvent"in window,Nr=null;p&&"documentMode"in document&&(Nr=document.documentMode);var _m=p&&"TextEvent"in window&&!Nr,$o=p&&(!Zs||Nr&&8<Nr&&11>=Nr),Co=" ",Po=!1;function Eo(e,t){switch(e){case"keyup":return Em.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _o(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Tm(e,t){switch(e){case"compositionend":return _o(t);case"keypress":return t.which!==32?null:(Po=!0,Co);case"textInput":return e=t.data,e===Co&&Po?null:e;default:return null}}function Im(e,t){if(Ln)return e==="compositionend"||!Zs&&Eo(e,t)?(e=bo(),ga=Vs=Zt=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $o&&t.locale!=="ko"?null:t.data;default:return null}}var Rm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function To(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rm[e.type]:t==="textarea"}function Io(e,t,n,a){Ji(a),t=Sa(t,"onChange"),0<t.length&&(n=new qs("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var jr=null,kr=null;function Lm(e){Ko(e,0)}function ba(e){var t=Dn(e);if(Di(t))return e}function Am(e,t){if(e==="change")return t}var Ro=!1;if(p){var Xs;if(p){var el="oninput"in document;if(!el){var Lo=document.createElement("div");Lo.setAttribute("oninput","return;"),el=typeof Lo.oninput=="function"}Xs=el}else Xs=!1;Ro=Xs&&(!document.documentMode||9<document.documentMode)}function Ao(){jr&&(jr.detachEvent("onpropertychange",Mo),kr=jr=null)}function Mo(e){if(e.propertyName==="value"&&ba(kr)){var t=[];Io(t,kr,e,Rs(e)),to(Lm,t)}}function Mm(e,t,n){e==="focusin"?(Ao(),jr=t,kr=n,jr.attachEvent("onpropertychange",Mo)):e==="focusout"&&Ao()}function zm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ba(kr)}function Om(e,t){if(e==="click")return ba(t)}function Dm(e,t){if(e==="input"||e==="change")return ba(t)}function Fm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Fm;function Sr(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!y.call(t,l)||!vt(e[l],t[l]))return!1}return!0}function zo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oo(e,t){var n=zo(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zo(n)}}function Do(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Do(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fo(){for(var e=window,t=aa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=aa(e.document)}return t}function tl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bm(e){var t=Fo(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Do(n.ownerDocument.documentElement,n)){if(a!==null&&tl(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(a.start,l);a=a.end===void 0?i:Math.min(a.end,l),!e.extend&&i>a&&(l=a,a=i,i=l),l=Oo(n,i);var u=Oo(n,a);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Um=p&&"documentMode"in document&&11>=document.documentMode,An=null,nl=null,$r=null,rl=!1;function Bo(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rl||An==null||An!==aa(a)||(a=An,"selectionStart"in a&&tl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),$r&&Sr($r,a)||($r=a,a=Sa(nl,"onSelect"),0<a.length&&(t=new qs("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=An)))}function Na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},al={},Uo={};p&&(Uo=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function ja(e){if(al[e])return al[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uo)return al[e]=t[n];return e}var Wo=ja("animationend"),Ho=ja("animationiteration"),Go=ja("animationstart"),Vo=ja("transitionend"),qo=new Map,Yo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){qo.set(e,t),f(t,[e])}for(var sl=0;sl<Yo.length;sl++){var ll=Yo[sl],Wm=ll.toLowerCase(),Hm=ll[0].toUpperCase()+ll.slice(1);Xt(Wm,"on"+Hm)}Xt(Wo,"onAnimationEnd"),Xt(Ho,"onAnimationIteration"),Xt(Go,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Vo,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function Qo(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Wd(a,t,void 0,e),e.currentTarget=null}function Ko(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var h=a[u],v=h.instance,S=h.currentTarget;if(h=h.listener,v!==i&&l.isPropagationStopped())break e;Qo(l,h,S),i=v}else for(u=0;u<a.length;u++){if(h=a[u],v=h.instance,S=h.currentTarget,h=h.listener,v!==i&&l.isPropagationStopped())break e;Qo(l,h,S),i=v}}}if(ia)throw e=zs,ia=!1,zs=null,e}function we(e,t){var n=t[pl];n===void 0&&(n=t[pl]=new Set);var a=e+"__bubble";n.has(a)||(Jo(t,e,2,!1),n.add(a))}function il(e,t,n){var a=0;t&&(a|=4),Jo(n,e,a,t)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[ka]){e[ka]=!0,m.forEach(function(n){n!=="selectionchange"&&(Gm.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ka]||(t[ka]=!0,il("selectionchange",!1,t))}}function Jo(e,t,n,a){switch(wo(t)){case 1:var l=sm;break;case 4:l=lm;break;default:l=Hs}n=l.bind(null,t,n,e),l=void 0,!Ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ol(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var h=a.stateNode.containerInfo;if(h===l||h.nodeType===8&&h.parentNode===l)break;if(u===4)for(u=a.return;u!==null;){var v=u.tag;if((v===3||v===4)&&(v=u.stateNode.containerInfo,v===l||v.nodeType===8&&v.parentNode===l))return;u=u.return}for(;h!==null;){if(u=hn(h),u===null)return;if(v=u.tag,v===5||v===6){a=i=u;continue e}h=h.parentNode}}a=a.return}to(function(){var S=i,R=Rs(n),A=[];e:{var T=qo.get(e);if(T!==void 0){var U=qs,V=e;switch(e){case"keypress":if(ya(n)===0)break e;case"keydown":case"keyup":U=bm;break;case"focusin":V="focus",U=Ks;break;case"focusout":V="blur",U=Ks;break;case"beforeblur":case"afterblur":U=Ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=km;break;case Wo:case Ho:case Go:U=mm;break;case Vo:U=$m;break;case"scroll":U=im;break;case"wheel":U=Pm;break;case"copy":case"cut":case"paste":U=pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=So}var q=(t&4)!==0,Te=!q&&e==="scroll",j=q?T!==null?T+"Capture":null:T;q=[];for(var w=S,k;w!==null;){k=w;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,j!==null&&(D=ur(w,j),D!=null&&q.push(Er(w,D,k)))),Te)break;w=w.return}0<q.length&&(T=new U(T,V,null,n,R),A.push({event:T,listeners:q}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",T&&n!==Is&&(V=n.relatedTarget||n.fromElement)&&(hn(V)||V[zt]))break e;if((U||T)&&(T=R.window===R?R:(T=R.ownerDocument)?T.defaultView||T.parentWindow:window,U?(V=n.relatedTarget||n.toElement,U=S,V=V?hn(V):null,V!==null&&(Te=pn(V),V!==Te||V.tag!==5&&V.tag!==6)&&(V=null)):(U=null,V=S),U!==V)){if(q=jo,D="onMouseLeave",j="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(q=So,D="onPointerLeave",j="onPointerEnter",w="pointer"),Te=U==null?T:Dn(U),k=V==null?T:Dn(V),T=new q(D,w+"leave",U,n,R),T.target=Te,T.relatedTarget=k,D=null,hn(R)===S&&(q=new q(j,w+"enter",V,n,R),q.target=k,q.relatedTarget=Te,D=q),Te=D,U&&V)t:{for(q=U,j=V,w=0,k=q;k;k=zn(k))w++;for(k=0,D=j;D;D=zn(D))k++;for(;0<w-k;)q=zn(q),w--;for(;0<k-w;)j=zn(j),k--;for(;w--;){if(q===j||j!==null&&q===j.alternate)break t;q=zn(q),j=zn(j)}q=null}else q=null;U!==null&&Zo(A,T,U,q,!1),V!==null&&Te!==null&&Zo(A,Te,V,q,!0)}}e:{if(T=S?Dn(S):window,U=T.nodeName&&T.nodeName.toLowerCase(),U==="select"||U==="input"&&T.type==="file")var Y=Am;else if(To(T))if(Ro)Y=Dm;else{Y=zm;var J=Mm}else(U=T.nodeName)&&U.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(Y=Om);if(Y&&(Y=Y(e,S))){Io(A,Y,n,R);break e}J&&J(e,T,S),e==="focusout"&&(J=T._wrapperState)&&J.controlled&&T.type==="number"&&Cs(T,"number",T.value)}switch(J=S?Dn(S):window,e){case"focusin":(To(J)||J.contentEditable==="true")&&(An=J,nl=S,$r=null);break;case"focusout":$r=nl=An=null;break;case"mousedown":rl=!0;break;case"contextmenu":case"mouseup":case"dragend":rl=!1,Bo(A,n,R);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":Bo(A,n,R)}var Z;if(Zs)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Ln?Eo(e,n)&&(ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ee="onCompositionStart");ee&&($o&&n.locale!=="ko"&&(Ln||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Ln&&(Z=bo()):(Zt=R,Vs="value"in Zt?Zt.value:Zt.textContent,Ln=!0)),J=Sa(S,ee),0<J.length&&(ee=new ko(ee,e,null,n,R),A.push({event:ee,listeners:J}),Z?ee.data=Z:(Z=_o(n),Z!==null&&(ee.data=Z)))),(Z=_m?Tm(e,n):Im(e,n))&&(S=Sa(S,"onBeforeInput"),0<S.length&&(R=new ko("onBeforeInput","beforeinput",null,n,R),A.push({event:R,listeners:S}),R.data=Z))}Ko(A,t)})}function Er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sa(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=ur(e,n),i!=null&&a.unshift(Er(e,i,l)),i=ur(e,t),i!=null&&a.push(Er(e,i,l))),e=e.return}return a}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zo(e,t,n,a,l){for(var i=t._reactName,u=[];n!==null&&n!==a;){var h=n,v=h.alternate,S=h.stateNode;if(v!==null&&v===a)break;h.tag===5&&S!==null&&(h=S,l?(v=ur(n,i),v!=null&&u.unshift(Er(n,v,h))):l||(v=ur(n,i),v!=null&&u.push(Er(n,v,h)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Vm=/\r\n?/g,qm=/\u0000|\uFFFD/g;function Xo(e){return(typeof e=="string"?e:""+e).replace(Vm,`
`).replace(qm,"")}function $a(e,t,n){if(t=Xo(t),Xo(e)!==t&&n)throw Error(c(425))}function Ca(){}var cl=null,ul=null;function dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,Ym=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,Qm=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(Km)}:ml;function Km(e){setTimeout(function(){throw e})}function fl(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){e.removeChild(l),vr(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);vr(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var On=Math.random().toString(36).slice(2),It="__reactFiber$"+On,_r="__reactProps$"+On,zt="__reactContainer$"+On,pl="__reactEvents$"+On,Jm="__reactListeners$"+On,Zm="__reactHandles$"+On;function hn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tc(e);e!==null;){if(n=e[It])return n;e=tc(e)}return t}e=n,n=e.parentNode}return null}function Tr(e){return e=e[It]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Pa(e){return e[_r]||null}var hl=[],Fn=-1;function tn(e){return{current:e}}function be(e){0>Fn||(e.current=hl[Fn],hl[Fn]=null,Fn--)}function ye(e,t){Fn++,hl[Fn]=e.current,e.current=t}var nn={},Be=tn(nn),Je=tn(!1),xn=nn;function Bn(e,t){var n=e.type.contextTypes;if(!n)return nn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ze(e){return e=e.childContextTypes,e!=null}function Ea(){be(Je),be(Be)}function nc(e,t,n){if(Be.current!==nn)throw Error(c(168));ye(Be,t),ye(Je,n)}function rc(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(c(108,ge(e)||"Unknown",l));return G({},n,a)}function _a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,xn=Be.current,ye(Be,e),ye(Je,Je.current),!0}function ac(e,t,n){var a=e.stateNode;if(!a)throw Error(c(169));n?(e=rc(e,t,xn),a.__reactInternalMemoizedMergedChildContext=e,be(Je),be(Be),ye(Be,e)):be(Je),ye(Je,n)}var Ot=null,Ta=!1,xl=!1;function sc(e){Ot===null?Ot=[e]:Ot.push(e)}function Xm(e){Ta=!0,sc(e)}function rn(){if(!xl&&Ot!==null){xl=!0;var e=0,t=he;try{var n=Ot;for(he=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Ot=null,Ta=!1}catch(l){throw Ot!==null&&(Ot=Ot.slice(e+1)),lo(Os,rn),l}finally{he=t,xl=!1}}return null}var Un=[],Wn=0,Ia=null,Ra=0,ct=[],ut=0,gn=null,Dt=1,Ft="";function yn(e,t){Un[Wn++]=Ra,Un[Wn++]=Ia,Ia=e,Ra=t}function lc(e,t,n){ct[ut++]=Dt,ct[ut++]=Ft,ct[ut++]=gn,gn=e;var a=Dt;e=Ft;var l=32-yt(a)-1;a&=~(1<<l),n+=1;var i=32-yt(t)+l;if(30<i){var u=l-l%5;i=(a&(1<<u)-1).toString(32),a>>=u,l-=u,Dt=1<<32-yt(t)+l|n<<l|a,Ft=i+e}else Dt=1<<i|n<<l|a,Ft=e}function gl(e){e.return!==null&&(yn(e,1),lc(e,1,0))}function yl(e){for(;e===Ia;)Ia=Un[--Wn],Un[Wn]=null,Ra=Un[--Wn],Un[Wn]=null;for(;e===gn;)gn=ct[--ut],ct[ut]=null,Ft=ct[--ut],ct[ut]=null,Dt=ct[--ut],ct[ut]=null}var st=null,lt=null,je=!1,wt=null;function ic(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function oc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:Dt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(je){var t=lt;if(t){var n=t;if(!oc(e,t)){if(vl(e))throw Error(c(418));t=en(n.nextSibling);var a=st;t&&oc(e,t)?ic(a,n):(e.flags=e.flags&-4097|2,je=!1,st=e)}}else{if(vl(e))throw Error(c(418));e.flags=e.flags&-4097|2,je=!1,st=e}}}function cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function La(e){if(e!==st)return!1;if(!je)return cc(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!dl(e.type,e.memoizedProps)),t&&(t=lt)){if(vl(e))throw uc(),Error(c(418));for(;t;)ic(e,t),t=en(t.nextSibling)}if(cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?en(e.stateNode.nextSibling):null;return!0}function uc(){for(var e=lt;e;)e=en(e.nextSibling)}function Hn(){lt=st=null,je=!1}function bl(e){wt===null?wt=[e]:wt.push(e)}var ef=te.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var a=n.stateNode}if(!a)throw Error(c(147,e));var l=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(u){var h=l.refs;u===null?delete h[i]:h[i]=u},t._stringRef=i,t)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function Aa(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dc(e){var t=e._init;return t(e._payload)}function mc(e){function t(j,w){if(e){var k=j.deletions;k===null?(j.deletions=[w],j.flags|=16):k.push(w)}}function n(j,w){if(!e)return null;for(;w!==null;)t(j,w),w=w.sibling;return null}function a(j,w){for(j=new Map;w!==null;)w.key!==null?j.set(w.key,w):j.set(w.index,w),w=w.sibling;return j}function l(j,w){return j=mn(j,w),j.index=0,j.sibling=null,j}function i(j,w,k){return j.index=k,e?(k=j.alternate,k!==null?(k=k.index,k<w?(j.flags|=2,w):k):(j.flags|=2,w)):(j.flags|=1048576,w)}function u(j){return e&&j.alternate===null&&(j.flags|=2),j}function h(j,w,k,D){return w===null||w.tag!==6?(w=mi(k,j.mode,D),w.return=j,w):(w=l(w,k),w.return=j,w)}function v(j,w,k,D){var Y=k.type;return Y===ve?R(j,w,k.props.children,D,k.key):w!==null&&(w.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ke&&dc(Y)===w.type)?(D=l(w,k.props),D.ref=Ir(j,w,k),D.return=j,D):(D=ss(k.type,k.key,k.props,null,j.mode,D),D.ref=Ir(j,w,k),D.return=j,D)}function S(j,w,k,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=fi(k,j.mode,D),w.return=j,w):(w=l(w,k.children||[]),w.return=j,w)}function R(j,w,k,D,Y){return w===null||w.tag!==7?(w=$n(k,j.mode,D,Y),w.return=j,w):(w=l(w,k),w.return=j,w)}function A(j,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=mi(""+w,j.mode,k),w.return=j,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xe:return k=ss(w.type,w.key,w.props,null,j.mode,k),k.ref=Ir(j,null,w),k.return=j,k;case me:return w=fi(w,j.mode,k),w.return=j,w;case Ke:var D=w._init;return A(j,D(w._payload),k)}if(ir(w)||X(w))return w=$n(w,j.mode,k,null),w.return=j,w;Aa(j,w)}return null}function T(j,w,k,D){var Y=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return Y!==null?null:h(j,w,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case xe:return k.key===Y?v(j,w,k,D):null;case me:return k.key===Y?S(j,w,k,D):null;case Ke:return Y=k._init,T(j,w,Y(k._payload),D)}if(ir(k)||X(k))return Y!==null?null:R(j,w,k,D,null);Aa(j,k)}return null}function U(j,w,k,D,Y){if(typeof D=="string"&&D!==""||typeof D=="number")return j=j.get(k)||null,h(w,j,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case xe:return j=j.get(D.key===null?k:D.key)||null,v(w,j,D,Y);case me:return j=j.get(D.key===null?k:D.key)||null,S(w,j,D,Y);case Ke:var J=D._init;return U(j,w,k,J(D._payload),Y)}if(ir(D)||X(D))return j=j.get(k)||null,R(w,j,D,Y,null);Aa(w,D)}return null}function V(j,w,k,D){for(var Y=null,J=null,Z=w,ee=w=0,ze=null;Z!==null&&ee<k.length;ee++){Z.index>ee?(ze=Z,Z=null):ze=Z.sibling;var ue=T(j,Z,k[ee],D);if(ue===null){Z===null&&(Z=ze);break}e&&Z&&ue.alternate===null&&t(j,Z),w=i(ue,w,ee),J===null?Y=ue:J.sibling=ue,J=ue,Z=ze}if(ee===k.length)return n(j,Z),je&&yn(j,ee),Y;if(Z===null){for(;ee<k.length;ee++)Z=A(j,k[ee],D),Z!==null&&(w=i(Z,w,ee),J===null?Y=Z:J.sibling=Z,J=Z);return je&&yn(j,ee),Y}for(Z=a(j,Z);ee<k.length;ee++)ze=U(Z,j,ee,k[ee],D),ze!==null&&(e&&ze.alternate!==null&&Z.delete(ze.key===null?ee:ze.key),w=i(ze,w,ee),J===null?Y=ze:J.sibling=ze,J=ze);return e&&Z.forEach(function(fn){return t(j,fn)}),je&&yn(j,ee),Y}function q(j,w,k,D){var Y=X(k);if(typeof Y!="function")throw Error(c(150));if(k=Y.call(k),k==null)throw Error(c(151));for(var J=Y=null,Z=w,ee=w=0,ze=null,ue=k.next();Z!==null&&!ue.done;ee++,ue=k.next()){Z.index>ee?(ze=Z,Z=null):ze=Z.sibling;var fn=T(j,Z,ue.value,D);if(fn===null){Z===null&&(Z=ze);break}e&&Z&&fn.alternate===null&&t(j,Z),w=i(fn,w,ee),J===null?Y=fn:J.sibling=fn,J=fn,Z=ze}if(ue.done)return n(j,Z),je&&yn(j,ee),Y;if(Z===null){for(;!ue.done;ee++,ue=k.next())ue=A(j,ue.value,D),ue!==null&&(w=i(ue,w,ee),J===null?Y=ue:J.sibling=ue,J=ue);return je&&yn(j,ee),Y}for(Z=a(j,Z);!ue.done;ee++,ue=k.next())ue=U(Z,j,ee,ue.value,D),ue!==null&&(e&&ue.alternate!==null&&Z.delete(ue.key===null?ee:ue.key),w=i(ue,w,ee),J===null?Y=ue:J.sibling=ue,J=ue);return e&&Z.forEach(function(Lf){return t(j,Lf)}),je&&yn(j,ee),Y}function Te(j,w,k,D){if(typeof k=="object"&&k!==null&&k.type===ve&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case xe:e:{for(var Y=k.key,J=w;J!==null;){if(J.key===Y){if(Y=k.type,Y===ve){if(J.tag===7){n(j,J.sibling),w=l(J,k.props.children),w.return=j,j=w;break e}}else if(J.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Ke&&dc(Y)===J.type){n(j,J.sibling),w=l(J,k.props),w.ref=Ir(j,J,k),w.return=j,j=w;break e}n(j,J);break}else t(j,J);J=J.sibling}k.type===ve?(w=$n(k.props.children,j.mode,D,k.key),w.return=j,j=w):(D=ss(k.type,k.key,k.props,null,j.mode,D),D.ref=Ir(j,w,k),D.return=j,j=D)}return u(j);case me:e:{for(J=k.key;w!==null;){if(w.key===J)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(j,w.sibling),w=l(w,k.children||[]),w.return=j,j=w;break e}else{n(j,w);break}else t(j,w);w=w.sibling}w=fi(k,j.mode,D),w.return=j,j=w}return u(j);case Ke:return J=k._init,Te(j,w,J(k._payload),D)}if(ir(k))return V(j,w,k,D);if(X(k))return q(j,w,k,D);Aa(j,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(j,w.sibling),w=l(w,k),w.return=j,j=w):(n(j,w),w=mi(k,j.mode,D),w.return=j,j=w),u(j)):n(j,w)}return Te}var Gn=mc(!0),fc=mc(!1),Ma=tn(null),za=null,Vn=null,Nl=null;function jl(){Nl=Vn=za=null}function kl(e){var t=Ma.current;be(Ma),e._currentValue=t}function Sl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function qn(e,t){za=e,Nl=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Xe=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(za===null)throw Error(c(308));Vn=e,za.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var vn=null;function $l(e){vn===null?vn=[e]:vn.push(e)}function pc(e,t,n,a){var l=t.interleaved;return l===null?(n.next=n,$l(t)):(n.next=l.next,l.next=n),t.interleaved=n,Bt(e,a)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var an=!1;function Cl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ie&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Bt(e,n)}return l=a.interleaved,l===null?(t.next=t,$l(a)):(t.next=l.next,l.next=t),a.interleaved=t,Bt(e,n)}function Oa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Bs(e,n)}}function xc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Da(e,t,n,a){var l=e.updateQueue;an=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var v=h,S=v.next;v.next=null,u===null?i=S:u.next=S,u=v;var R=e.alternate;R!==null&&(R=R.updateQueue,h=R.lastBaseUpdate,h!==u&&(h===null?R.firstBaseUpdate=S:h.next=S,R.lastBaseUpdate=v))}if(i!==null){var A=l.baseState;u=0,R=S=v=null,h=i;do{var T=h.lane,U=h.eventTime;if((a&T)===T){R!==null&&(R=R.next={eventTime:U,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var V=e,q=h;switch(T=t,U=n,q.tag){case 1:if(V=q.payload,typeof V=="function"){A=V.call(U,A,T);break e}A=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=q.payload,T=typeof V=="function"?V.call(U,A,T):V,T==null)break e;A=G({},A,T);break e;case 2:an=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,T=l.effects,T===null?l.effects=[h]:T.push(h))}else U={eventTime:U,lane:T,tag:h.tag,payload:h.payload,callback:h.callback,next:null},R===null?(S=R=U,v=A):R=R.next=U,u|=T;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;T=h,h=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);if(R===null&&(v=A),l.baseState=v,l.firstBaseUpdate=S,l.lastBaseUpdate=R,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Nn|=u,e.lanes=u,e.memoizedState=A}}function gc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=n,typeof l!="function")throw Error(c(191,l));l.call(a)}}}var Rr={},Rt=tn(Rr),Lr=tn(Rr),Ar=tn(Rr);function wn(e){if(e===Rr)throw Error(c(174));return e}function Pl(e,t){switch(ye(Ar,t),ye(Lr,e),ye(Rt,Rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Es(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Es(t,e)}be(Rt),ye(Rt,t)}function Yn(){be(Rt),be(Lr),be(Ar)}function yc(e){wn(Ar.current);var t=wn(Rt.current),n=Es(t,e.type);t!==n&&(ye(Lr,e),ye(Rt,n))}function El(e){Lr.current===e&&(be(Rt),be(Lr))}var $e=tn(0);function Fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function Tl(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var Ba=te.ReactCurrentDispatcher,Il=te.ReactCurrentBatchConfig,bn=0,Ce=null,Re=null,Ae=null,Ua=!1,Mr=!1,zr=0,tf=0;function Ue(){throw Error(c(321))}function Rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Ll(e,t,n,a,l,i){if(bn=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ba.current=e===null||e.memoizedState===null?sf:lf,e=n(a,l),Mr){i=0;do{if(Mr=!1,zr=0,25<=i)throw Error(c(301));i+=1,Ae=Re=null,t.updateQueue=null,Ba.current=of,e=n(a,l)}while(Mr)}if(Ba.current=Ga,t=Re!==null&&Re.next!==null,bn=0,Ae=Re=Ce=null,Ua=!1,t)throw Error(c(300));return e}function Al(){var e=zr!==0;return zr=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Ce.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function mt(){if(Re===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ae===null?Ce.memoizedState:Ae.next;if(t!==null)Ae=t,Re=e;else{if(e===null)throw Error(c(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ae===null?Ce.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Or(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=mt(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=Re,l=a.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}a.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,a=a.baseState;var h=u=null,v=null,S=i;do{var R=S.lane;if((bn&R)===R)v!==null&&(v=v.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),a=S.hasEagerState?S.eagerState:e(a,S.action);else{var A={lane:R,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};v===null?(h=v=A,u=a):v=v.next=A,Ce.lanes|=R,Nn|=R}S=S.next}while(S!==null&&S!==i);v===null?u=a:v.next=h,vt(a,t.memoizedState)||(Xe=!0),t.memoizedState=a,t.baseState=u,t.baseQueue=v,n.lastRenderedState=a}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Ce.lanes|=i,Nn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zl(e){var t=mt(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);vt(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function vc(){}function wc(e,t){var n=Ce,a=mt(),l=t(),i=!vt(a.memoizedState,l);if(i&&(a.memoizedState=l,Xe=!0),a=a.queue,Ol(jc.bind(null,n,a,e),[e]),a.getSnapshot!==t||i||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Dr(9,Nc.bind(null,n,a,l,t),void 0,null),Me===null)throw Error(c(349));(bn&30)!==0||bc(n,t,l)}return l}function bc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nc(e,t,n,a){t.value=n,t.getSnapshot=a,kc(t)&&Sc(e)}function jc(e,t,n){return n(function(){kc(t)&&Sc(e)})}function kc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Sc(e){var t=Bt(e,1);t!==null&&kt(t,e,1,-1)}function $c(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=af.bind(null,Ce,e),[t.memoizedState,e]}function Dr(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Cc(){return mt().memoizedState}function Wa(e,t,n,a){var l=Lt();Ce.flags|=e,l.memoizedState=Dr(1|t,n,void 0,a===void 0?null:a)}function Ha(e,t,n,a){var l=mt();a=a===void 0?null:a;var i=void 0;if(Re!==null){var u=Re.memoizedState;if(i=u.destroy,a!==null&&Rl(a,u.deps)){l.memoizedState=Dr(t,n,i,a);return}}Ce.flags|=e,l.memoizedState=Dr(1|t,n,i,a)}function Pc(e,t){return Wa(8390656,8,e,t)}function Ol(e,t){return Ha(2048,8,e,t)}function Ec(e,t){return Ha(4,2,e,t)}function _c(e,t){return Ha(4,4,e,t)}function Tc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ic(e,t,n){return n=n!=null?n.concat([e]):null,Ha(4,4,Tc.bind(null,t,e),n)}function Dl(){}function Rc(e,t){var n=mt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Rl(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Lc(e,t){var n=mt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Rl(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Ac(e,t,n){return(bn&21)===0?(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n):(vt(n,t)||(n=uo(),Ce.lanes|=n,Nn|=n,e.baseState=!0),t)}function nf(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var a=Il.transition;Il.transition={};try{e(!1),t()}finally{he=n,Il.transition=a}}function Mc(){return mt().memoizedState}function rf(e,t,n){var a=un(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},zc(e))Oc(t,n);else if(n=pc(e,t,n,a),n!==null){var l=Ye();kt(n,e,a,l),Dc(n,t,a)}}function af(e,t,n){var a=un(e),l={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(zc(e))Oc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,h=i(u,n);if(l.hasEagerState=!0,l.eagerState=h,vt(h,u)){var v=t.interleaved;v===null?(l.next=l,$l(t)):(l.next=v.next,v.next=l),t.interleaved=l;return}}catch{}finally{}n=pc(e,t,l,a),n!==null&&(l=Ye(),kt(n,e,a,l),Dc(n,t,a))}}function zc(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Oc(e,t){Mr=Ua=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dc(e,t,n){if((n&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Bs(e,n)}}var Ga={readContext:dt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},sf={readContext:dt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Pc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4194308,4,Tc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wa(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Lt();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=rf.bind(null,Ce,e),[a.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:$c,useDebugValue:Dl,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=$c(!1),t=e[0];return e=nf.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Ce,l=Lt();if(je){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Me===null)throw Error(c(349));(bn&30)!==0||bc(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Pc(jc.bind(null,a,i,e),[e]),a.flags|=2048,Dr(9,Nc.bind(null,a,i,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Me.identifierPrefix;if(je){var n=Ft,a=Dt;n=(a&~(1<<32-yt(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lf={readContext:dt,useCallback:Rc,useContext:dt,useEffect:Ol,useImperativeHandle:Ic,useInsertionEffect:Ec,useLayoutEffect:_c,useMemo:Lc,useReducer:Ml,useRef:Cc,useState:function(){return Ml(Or)},useDebugValue:Dl,useDeferredValue:function(e){var t=mt();return Ac(t,Re.memoizedState,e)},useTransition:function(){var e=Ml(Or)[0],t=mt().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:wc,useId:Mc,unstable_isNewReconciler:!1},of={readContext:dt,useCallback:Rc,useContext:dt,useEffect:Ol,useImperativeHandle:Ic,useInsertionEffect:Ec,useLayoutEffect:_c,useMemo:Lc,useReducer:zl,useRef:Cc,useState:function(){return zl(Or)},useDebugValue:Dl,useDeferredValue:function(e){var t=mt();return Re===null?t.memoizedState=e:Ac(t,Re.memoizedState,e)},useTransition:function(){var e=zl(Or)[0],t=mt().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:wc,useId:Mc,unstable_isNewReconciler:!1};function bt(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fl(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Va={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ye(),l=un(e),i=Ut(a,l);i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,l),t!==null&&(kt(t,e,l,a),Oa(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ye(),l=un(e),i=Ut(a,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=sn(e,i,l),t!==null&&(kt(t,e,l,a),Oa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),a=un(e),l=Ut(n,a);l.tag=2,t!=null&&(l.callback=t),t=sn(e,l,a),t!==null&&(kt(t,e,a,n),Oa(t,e,a))}};function Fc(e,t,n,a,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,a)||!Sr(l,i):!0}function Bc(e,t,n){var a=!1,l=nn,i=t.contextType;return typeof i=="object"&&i!==null?i=dt(i):(l=Ze(t)?xn:Be.current,a=t.contextTypes,i=(a=a!=null)?Bn(e,l):nn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Va,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Uc(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Va.enqueueReplaceState(t,t.state,null)}function Bl(e,t,n,a){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Cl(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=dt(i):(i=Ze(t)?xn:Be.current,l.context=Bn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fl(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Va.enqueueReplaceState(l,l.state,null),Da(e,n,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Qn(e,t){try{var n="",a=t;do n+=oe(a),a=a.return;while(a);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function Wc(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){Xa||(Xa=!0,ai=a),Wl(e,t)},n}function Hc(e,t,n){n=Ut(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;n.payload=function(){return a(l)},n.callback=function(){Wl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wl(e,t),typeof a!="function"&&(on===null?on=new Set([this]):on.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Gc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new cf;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(l.add(n),e=jf.bind(null,e,t,n),t.then(e,e))}function Vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qc(e,t,n,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var uf=te.ReactCurrentOwner,Xe=!1;function qe(e,t,n,a){t.child=e===null?fc(t,null,n,a):Gn(t,e.child,n,a)}function Yc(e,t,n,a,l){n=n.render;var i=t.ref;return qn(t,l),a=Ll(e,t,n,a,i,l),n=Al(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Wt(e,t,l)):(je&&n&&gl(t),t.flags|=1,qe(e,t,a,l),t.child)}function Qc(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!di(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Kc(e,t,i,a,l)):(e=ss(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:Sr,n(u,a)&&e.ref===t.ref)return Wt(e,t,l)}return t.flags|=1,e=mn(i,a),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(Sr(i,a)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=a=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Wt(e,t,l)}return Hl(e,t,n,a,l)}function Jc(e,t,n){var a=t.pendingProps,l=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Jn,it),it|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(Jn,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:n,ye(Jn,it),it|=a}else i!==null?(a=i.baseLanes|n,t.memoizedState=null):a=n,ye(Jn,it),it|=a;return qe(e,t,l,n),t.child}function Zc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hl(e,t,n,a,l){var i=Ze(n)?xn:Be.current;return i=Bn(t,i),qn(t,l),n=Ll(e,t,n,a,i,l),a=Al(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Wt(e,t,l)):(je&&a&&gl(t),t.flags|=1,qe(e,t,n,l),t.child)}function Xc(e,t,n,a,l){if(Ze(n)){var i=!0;_a(t)}else i=!1;if(qn(t,l),t.stateNode===null)Ya(e,t),Bc(t,n,a),Bl(t,n,a,l),a=!0;else if(e===null){var u=t.stateNode,h=t.memoizedProps;u.props=h;var v=u.context,S=n.contextType;typeof S=="object"&&S!==null?S=dt(S):(S=Ze(n)?xn:Be.current,S=Bn(t,S));var R=n.getDerivedStateFromProps,A=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function";A||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==a||v!==S)&&Uc(t,u,a,S),an=!1;var T=t.memoizedState;u.state=T,Da(t,a,u,l),v=t.memoizedState,h!==a||T!==v||Je.current||an?(typeof R=="function"&&(Fl(t,n,R,a),v=t.memoizedState),(h=an||Fc(t,n,h,a,T,v,S))?(A||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=v),u.props=a,u.state=v,u.context=S,a=h):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,hc(e,t),h=t.memoizedProps,S=t.type===t.elementType?h:bt(t.type,h),u.props=S,A=t.pendingProps,T=u.context,v=n.contextType,typeof v=="object"&&v!==null?v=dt(v):(v=Ze(n)?xn:Be.current,v=Bn(t,v));var U=n.getDerivedStateFromProps;(R=typeof U=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==A||T!==v)&&Uc(t,u,a,v),an=!1,T=t.memoizedState,u.state=T,Da(t,a,u,l);var V=t.memoizedState;h!==A||T!==V||Je.current||an?(typeof U=="function"&&(Fl(t,n,U,a),V=t.memoizedState),(S=an||Fc(t,n,S,a,T,V,v)||!1)?(R||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,V,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,V,v)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=V),u.props=a,u.state=V,u.context=v,a=S):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),a=!1)}return Gl(e,t,n,a,i,l)}function Gl(e,t,n,a,l,i){Zc(e,t);var u=(t.flags&128)!==0;if(!a&&!u)return l&&ac(t,n,!1),Wt(e,t,i);a=t.stateNode,uf.current=t;var h=u&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&u?(t.child=Gn(t,e.child,null,i),t.child=Gn(t,null,h,i)):qe(e,t,h,i),t.memoizedState=a.state,l&&ac(t,n,!0),t.child}function eu(e){var t=e.stateNode;t.pendingContext?nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nc(e,t.context,!1),Pl(e,t.containerInfo)}function tu(e,t,n,a,l){return Hn(),bl(l),t.flags|=256,qe(e,t,n,a),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function nu(e,t,n){var a=t.pendingProps,l=$e.current,i=!1,u=(t.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(l&2)!==0),h?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ye($e,l&1),e===null)return wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=a.children,e=a.fallback,i?(a=t.mode,i=t.child,u={mode:"hidden",children:u},(a&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=u):i=ls(u,a,0,null),e=$n(e,a,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ql(n),t.memoizedState=Vl,e):Yl(t,u));if(l=e.memoizedState,l!==null&&(h=l.dehydrated,h!==null))return df(e,t,u,a,h,l,n);if(i){i=a.fallback,u=t.mode,l=e.child,h=l.sibling;var v={mode:"hidden",children:a.children};return(u&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=v,t.deletions=null):(a=mn(l,v),a.subtreeFlags=l.subtreeFlags&14680064),h!==null?i=mn(h,i):(i=$n(i,u,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,u=e.child.memoizedState,u=u===null?ql(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=e.childLanes&~n,t.memoizedState=Vl,a}return i=e.child,e=i.sibling,a=mn(i,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Yl(e,t){return t=ls({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qa(e,t,n,a){return a!==null&&bl(a),Gn(t,e.child,null,n),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n,a,l,i,u){if(n)return t.flags&256?(t.flags&=-257,a=Ul(Error(c(422))),qa(e,t,u,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,l=t.mode,a=ls({mode:"visible",children:a.children},l,0,null),i=$n(i,l,u,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,(t.mode&1)!==0&&Gn(t,e.child,null,u),t.child.memoizedState=ql(u),t.memoizedState=Vl,i);if((t.mode&1)===0)return qa(e,t,u,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;return a=h,i=Error(c(419)),a=Ul(i,a,void 0),qa(e,t,u,a)}if(h=(u&e.childLanes)!==0,Xe||h){if(a=Me,a!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|u))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Bt(e,l),kt(a,e,l,-1))}return ui(),a=Ul(Error(c(421))),qa(e,t,u,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=kf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,lt=en(l.nextSibling),st=t,je=!0,wt=null,e!==null&&(ct[ut++]=Dt,ct[ut++]=Ft,ct[ut++]=gn,Dt=e.id,Ft=e.overflow,gn=t),t=Yl(t,a.children),t.flags|=4096,t)}function ru(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Sl(e.return,t,n)}function Ql(e,t,n,a,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=l)}function au(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;if(qe(e,t,a.children,n),a=$e.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ru(e,n,t);else if(e.tag===19)ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ye($e,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Fa(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Fa(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ql(t,!0,n,null,i);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ya(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mf(e,t,n){switch(t.tag){case 3:eu(t),Hn();break;case 5:yc(t);break;case 1:Ze(t.type)&&_a(t);break;case 4:Pl(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;ye(Ma,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ye($e,$e.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?nu(e,t,n):(ye($e,$e.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ye($e,$e.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&128)!==0){if(a)return au(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ye($e,$e.current),a)break;return null;case 22:case 23:return t.lanes=0,Jc(e,t,n)}return Wt(e,t,n)}var su,Kl,lu,iu;su=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Kl=function(){},lu=function(e,t,n,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,wn(Rt.current);var i=null;switch(n){case"input":l=Ss(e,l),a=Ss(e,a),i=[];break;case"select":l=G({},l,{value:void 0}),a=G({},a,{value:void 0}),i=[];break;case"textarea":l=Ps(e,l),a=Ps(e,a),i=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ca)}_s(n,a);var u;n=null;for(S in l)if(!a.hasOwnProperty(S)&&l.hasOwnProperty(S)&&l[S]!=null)if(S==="style"){var h=l[S];for(u in h)h.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(d.hasOwnProperty(S)?i||(i=[]):(i=i||[]).push(S,null));for(S in a){var v=a[S];if(h=l!=null?l[S]:void 0,a.hasOwnProperty(S)&&v!==h&&(v!=null||h!=null))if(S==="style")if(h){for(u in h)!h.hasOwnProperty(u)||v&&v.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in v)v.hasOwnProperty(u)&&h[u]!==v[u]&&(n||(n={}),n[u]=v[u])}else n||(i||(i=[]),i.push(S,n)),n=v;else S==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,h=h?h.__html:void 0,v!=null&&h!==v&&(i=i||[]).push(S,v)):S==="children"?typeof v!="string"&&typeof v!="number"||(i=i||[]).push(S,""+v):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(d.hasOwnProperty(S)?(v!=null&&S==="onScroll"&&we("scroll",e),i||h===v||(i=[])):(i=i||[]).push(S,v))}n&&(i=i||[]).push("style",n);var S=i;(t.updateQueue=S)&&(t.flags|=4)}},iu=function(e,t,n,a){n!==a&&(t.flags|=4)};function Fr(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ff(e,t,n){var a=t.pendingProps;switch(yl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return Ze(t.type)&&Ea(),We(t),null;case 3:return a=t.stateNode,Yn(),be(Je),be(Be),Tl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(La(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wt!==null&&(ii(wt),wt=null))),Kl(e,t),We(t),null;case 5:El(t);var l=wn(Ar.current);if(n=t.type,e!==null&&t.stateNode!=null)lu(e,t,n,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(c(166));return We(t),null}if(e=wn(Rt.current),La(t)){a=t.stateNode,n=t.type;var i=t.memoizedProps;switch(a[It]=t,a[_r]=i,e=(t.mode&1)!==0,n){case"dialog":we("cancel",a),we("close",a);break;case"iframe":case"object":case"embed":we("load",a);break;case"video":case"audio":for(l=0;l<Cr.length;l++)we(Cr[l],a);break;case"source":we("error",a);break;case"img":case"image":case"link":we("error",a),we("load",a);break;case"details":we("toggle",a);break;case"input":Fi(a,i),we("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},we("invalid",a);break;case"textarea":Wi(a,i),we("invalid",a)}_s(n,i),l=null;for(var u in i)if(i.hasOwnProperty(u)){var h=i[u];u==="children"?typeof h=="string"?a.textContent!==h&&(i.suppressHydrationWarning!==!0&&$a(a.textContent,h,e),l=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(i.suppressHydrationWarning!==!0&&$a(a.textContent,h,e),l=["children",""+h]):d.hasOwnProperty(u)&&h!=null&&u==="onScroll"&&we("scroll",a)}switch(n){case"input":ra(a),Ui(a,i,!0);break;case"textarea":ra(a),Gi(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Ca)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=u.createElement(n,{is:a.is}):(e=u.createElement(n),n==="select"&&(u=e,a.multiple?u.multiple=!0:a.size&&(u.size=a.size))):e=u.createElementNS(e,n),e[It]=t,e[_r]=a,su(e,t,!1,!1),t.stateNode=e;e:{switch(u=Ts(n,a),n){case"dialog":we("cancel",e),we("close",e),l=a;break;case"iframe":case"object":case"embed":we("load",e),l=a;break;case"video":case"audio":for(l=0;l<Cr.length;l++)we(Cr[l],e);l=a;break;case"source":we("error",e),l=a;break;case"img":case"image":case"link":we("error",e),we("load",e),l=a;break;case"details":we("toggle",e),l=a;break;case"input":Fi(e,a),l=Ss(e,a),we("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=G({},a,{value:void 0}),we("invalid",e);break;case"textarea":Wi(e,a),l=Ps(e,a),we("invalid",e);break;default:l=a}_s(n,l),h=l;for(i in h)if(h.hasOwnProperty(i)){var v=h[i];i==="style"?Qi(e,v):i==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&qi(e,v)):i==="children"?typeof v=="string"?(n!=="textarea"||v!=="")&&or(e,v):typeof v=="number"&&or(e,""+v):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(d.hasOwnProperty(i)?v!=null&&i==="onScroll"&&we("scroll",e):v!=null&&W(e,i,v,u))}switch(n){case"input":ra(e),Ui(e,a,!1);break;case"textarea":ra(e),Gi(e);break;case"option":a.value!=null&&e.setAttribute("value",""+pe(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?En(e,!!a.multiple,i,!1):a.defaultValue!=null&&En(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ca)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)iu(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(n=wn(Ar.current),wn(Rt.current),La(t)){if(a=t.stateNode,n=t.memoizedProps,a[It]=t,(i=a.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:$a(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$a(a.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[It]=t,t.stateNode=a}return We(t),null;case 13:if(be($e),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)uc(),Hn(),t.flags|=98560,i=!1;else if(i=La(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[It]=t}else Hn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;We(t),i=!1}else wt!==null&&(ii(wt),wt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||($e.current&1)!==0?Le===0&&(Le=3):ui())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Yn(),Kl(e,t),e===null&&Pr(t.stateNode.containerInfo),We(t),null;case 10:return kl(t.type._context),We(t),null;case 17:return Ze(t.type)&&Ea(),We(t),null;case 19:if(be($e),i=t.memoizedState,i===null)return We(t),null;if(a=(t.flags&128)!==0,u=i.rendering,u===null)if(a)Fr(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Fa(e),u!==null){for(t.flags|=128,Fr(i,!1),a=u.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)i=n,e=a,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye($e,$e.current&1|2),t.child}e=e.sibling}i.tail!==null&&_e()>Zn&&(t.flags|=128,a=!0,Fr(i,!1),t.lanes=4194304)}else{if(!a)if(e=Fa(u),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!je)return We(t),null}else 2*_e()-i.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,a=!0,Fr(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(n=i.last,n!==null?n.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=_e(),t.sibling=null,n=$e.current,ye($e,a?n&1|2:n&1),t):(We(t),null);case 22:case 23:return ci(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(it&1073741824)!==0&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function pf(e,t){switch(yl(t),t.tag){case 1:return Ze(t.type)&&Ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),be(Je),be(Be),Tl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return El(t),null;case 13:if(be($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be($e),null;case 4:return Yn(),null;case 10:return kl(t.type._context),null;case 22:case 23:return ci(),null;case 24:return null;default:return null}}var Qa=!1,He=!1,hf=typeof WeakSet=="function"?WeakSet:Set,H=null;function Kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Ee(e,t,a)}else n.current=null}function Jl(e,t,n){try{n()}catch(a){Ee(e,t,a)}}var ou=!1;function xf(e,t){if(cl=ha,e=Fo(),tl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var u=0,h=-1,v=-1,S=0,R=0,A=e,T=null;t:for(;;){for(var U;A!==n||l!==0&&A.nodeType!==3||(h=u+l),A!==i||a!==0&&A.nodeType!==3||(v=u+a),A.nodeType===3&&(u+=A.nodeValue.length),(U=A.firstChild)!==null;)T=A,A=U;for(;;){if(A===e)break t;if(T===n&&++S===l&&(h=u),T===i&&++R===a&&(v=u),(U=A.nextSibling)!==null)break;A=T,T=A.parentNode}A=U}n=h===-1||v===-1?null:{start:h,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(ul={focusedElem:e,selectionRange:n},ha=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var V=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var q=V.memoizedProps,Te=V.memoizedState,j=t.stateNode,w=j.getSnapshotBeforeUpdate(t.elementType===t.type?q:bt(t.type,q),Te);j.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(D){Ee(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return V=ou,ou=!1,V}function Br(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Jl(t,n,i)}l=l.next}while(l!==a)}}function Ka(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cu(e){var t=e.alternate;t!==null&&(e.alternate=null,cu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[_r],delete t[pl],delete t[Jm],delete t[Zm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uu(e){return e.tag===5||e.tag===3||e.tag===4}function du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ca));else if(a!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function ei(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ei(e,t,n),e=e.sibling;e!==null;)ei(e,t,n),e=e.sibling}var Oe=null,Nt=!1;function ln(e,t,n){for(n=n.child;n!==null;)mu(e,t,n),n=n.sibling}function mu(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(ca,n)}catch{}switch(n.tag){case 5:He||Kn(n,t);case 6:var a=Oe,l=Nt;Oe=null,ln(e,t,n),Oe=a,Nt=l,Oe!==null&&(Nt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Nt?(e=Oe,n=n.stateNode,e.nodeType===8?fl(e.parentNode,n):e.nodeType===1&&fl(e,n),vr(e)):fl(Oe,n.stateNode));break;case 4:a=Oe,l=Nt,Oe=n.stateNode.containerInfo,Nt=!0,ln(e,t,n),Oe=a,Nt=l;break;case 0:case 11:case 14:case 15:if(!He&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var i=l,u=i.destroy;i=i.tag,u!==void 0&&((i&2)!==0||(i&4)!==0)&&Jl(n,t,u),l=l.next}while(l!==a)}ln(e,t,n);break;case 1:if(!He&&(Kn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(h){Ee(n,t,h)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(He=(a=He)||n.memoizedState!==null,ln(e,t,n),He=a):ln(e,t,n);break;default:ln(e,t,n)}}function fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hf),t.forEach(function(a){var l=Sf.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];try{var i=e,u=t,h=u;e:for(;h!==null;){switch(h.tag){case 5:Oe=h.stateNode,Nt=!1;break e;case 3:Oe=h.stateNode.containerInfo,Nt=!0;break e;case 4:Oe=h.stateNode.containerInfo,Nt=!0;break e}h=h.return}if(Oe===null)throw Error(c(160));mu(i,u,l),Oe=null,Nt=!1;var v=l.alternate;v!==null&&(v.return=null),l.return=null}catch(S){Ee(l,t,S)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pu(t,e),t=t.sibling}function pu(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),At(e),a&4){try{Br(3,e,e.return),Ka(3,e)}catch(q){Ee(e,e.return,q)}try{Br(5,e,e.return)}catch(q){Ee(e,e.return,q)}}break;case 1:jt(t,e),At(e),a&512&&n!==null&&Kn(n,n.return);break;case 5:if(jt(t,e),At(e),a&512&&n!==null&&Kn(n,n.return),e.flags&32){var l=e.stateNode;try{or(l,"")}catch(q){Ee(e,e.return,q)}}if(a&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,u=n!==null?n.memoizedProps:i,h=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{h==="input"&&i.type==="radio"&&i.name!=null&&Bi(l,i),Ts(h,u);var S=Ts(h,i);for(u=0;u<v.length;u+=2){var R=v[u],A=v[u+1];R==="style"?Qi(l,A):R==="dangerouslySetInnerHTML"?qi(l,A):R==="children"?or(l,A):W(l,R,A,S)}switch(h){case"input":$s(l,i);break;case"textarea":Hi(l,i);break;case"select":var T=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var U=i.value;U!=null?En(l,!!i.multiple,U,!1):T!==!!i.multiple&&(i.defaultValue!=null?En(l,!!i.multiple,i.defaultValue,!0):En(l,!!i.multiple,i.multiple?[]:"",!1))}l[_r]=i}catch(q){Ee(e,e.return,q)}}break;case 6:if(jt(t,e),At(e),a&4){if(e.stateNode===null)throw Error(c(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(q){Ee(e,e.return,q)}}break;case 3:if(jt(t,e),At(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(q){Ee(e,e.return,q)}break;case 4:jt(t,e),At(e);break;case 13:jt(t,e),At(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ri=_e())),a&4&&fu(e);break;case 22:if(R=n!==null&&n.memoizedState!==null,e.mode&1?(He=(S=He)||R,jt(t,e),He=S):jt(t,e),At(e),a&8192){if(S=e.memoizedState!==null,(e.stateNode.isHidden=S)&&!R&&(e.mode&1)!==0)for(H=e,R=e.child;R!==null;){for(A=H=R;H!==null;){switch(T=H,U=T.child,T.tag){case 0:case 11:case 14:case 15:Br(4,T,T.return);break;case 1:Kn(T,T.return);var V=T.stateNode;if(typeof V.componentWillUnmount=="function"){a=T,n=T.return;try{t=a,V.props=t.memoizedProps,V.state=t.memoizedState,V.componentWillUnmount()}catch(q){Ee(a,n,q)}}break;case 5:Kn(T,T.return);break;case 22:if(T.memoizedState!==null){gu(A);continue}}U!==null?(U.return=T,H=U):gu(A)}R=R.sibling}e:for(R=null,A=e;;){if(A.tag===5){if(R===null){R=A;try{l=A.stateNode,S?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(h=A.stateNode,v=A.memoizedProps.style,u=v!=null&&v.hasOwnProperty("display")?v.display:null,h.style.display=Yi("display",u))}catch(q){Ee(e,e.return,q)}}}else if(A.tag===6){if(R===null)try{A.stateNode.nodeValue=S?"":A.memoizedProps}catch(q){Ee(e,e.return,q)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;R===A&&(R=null),A=A.return}R===A&&(R=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:jt(t,e),At(e),a&4&&fu(e);break;case 21:break;default:jt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uu(n)){var a=n;break e}n=n.return}throw Error(c(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(or(l,""),a.flags&=-33);var i=du(e);ei(e,i,l);break;case 3:case 4:var u=a.stateNode.containerInfo,h=du(e);Xl(e,h,u);break;default:throw Error(c(161))}}catch(v){Ee(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gf(e,t,n){H=e,hu(e)}function hu(e,t,n){for(var a=(e.mode&1)!==0;H!==null;){var l=H,i=l.child;if(l.tag===22&&a){var u=l.memoizedState!==null||Qa;if(!u){var h=l.alternate,v=h!==null&&h.memoizedState!==null||He;h=Qa;var S=He;if(Qa=u,(He=v)&&!S)for(H=l;H!==null;)u=H,v=u.child,u.tag===22&&u.memoizedState!==null?yu(l):v!==null?(v.return=u,H=v):yu(l);for(;i!==null;)H=i,hu(i),i=i.sibling;H=l,Qa=h,He=S}xu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,H=i):xu(e)}}function xu(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:He||Ka(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!He)if(n===null)a.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:bt(t.type,n.memoizedProps);a.componentDidUpdate(l,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&gc(t,i,a);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gc(t,u,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var v=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&n.focus();break;case"img":v.src&&(n.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var S=t.alternate;if(S!==null){var R=S.memoizedState;if(R!==null){var A=R.dehydrated;A!==null&&vr(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}He||t.flags&512&&Zl(t)}catch(T){Ee(t,t.return,T)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function gu(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function yu(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ka(4,t)}catch(v){Ee(t,n,v)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(v){Ee(t,l,v)}}var i=t.return;try{Zl(t)}catch(v){Ee(t,i,v)}break;case 5:var u=t.return;try{Zl(t)}catch(v){Ee(t,u,v)}}}catch(v){Ee(t,t.return,v)}if(t===e){H=null;break}var h=t.sibling;if(h!==null){h.return=t.return,H=h;break}H=t.return}}var yf=Math.ceil,Ja=te.ReactCurrentDispatcher,ti=te.ReactCurrentOwner,ft=te.ReactCurrentBatchConfig,ie=0,Me=null,Ie=null,De=0,it=0,Jn=tn(0),Le=0,Ur=null,Nn=0,Za=0,ni=0,Wr=null,et=null,ri=0,Zn=1/0,Ht=null,Xa=!1,ai=null,on=null,es=!1,cn=null,ts=0,Hr=0,si=null,ns=-1,rs=0;function Ye(){return(ie&6)!==0?_e():ns!==-1?ns:ns=_e()}function un(e){return(e.mode&1)===0?1:(ie&2)!==0&&De!==0?De&-De:ef.transition!==null?(rs===0&&(rs=uo()),rs):(e=he,e!==0||(e=window.event,e=e===void 0?16:wo(e.type)),e)}function kt(e,t,n,a){if(50<Hr)throw Hr=0,si=null,Error(c(185));pr(e,n,a),((ie&2)===0||e!==Me)&&(e===Me&&((ie&2)===0&&(Za|=n),Le===4&&dn(e,De)),tt(e,a),n===1&&ie===0&&(t.mode&1)===0&&(Zn=_e()+500,Ta&&rn()))}function tt(e,t){var n=e.callbackNode;em(e,t);var a=ma(e,e===Me?De:0);if(a===0)n!==null&&io(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&io(n),t===1)e.tag===0?Xm(wu.bind(null,e)):sc(wu.bind(null,e)),Qm(function(){(ie&6)===0&&rn()}),n=null;else{switch(mo(a)){case 1:n=Os;break;case 4:n=oo;break;case 16:n=oa;break;case 536870912:n=co;break;default:n=oa}n=Pu(n,vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vu(e,t){if(ns=-1,rs=0,(ie&6)!==0)throw Error(c(327));var n=e.callbackNode;if(Xn()&&e.callbackNode!==n)return null;var a=ma(e,e===Me?De:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=as(e,a);else{t=a;var l=ie;ie|=2;var i=Nu();(Me!==e||De!==t)&&(Ht=null,Zn=_e()+500,kn(e,t));do try{bf();break}catch(h){bu(e,h)}while(!0);jl(),Ja.current=i,ie=l,Ie!==null?t=0:(Me=null,De=0,t=Le)}if(t!==0){if(t===2&&(l=Ds(e),l!==0&&(a=l,t=li(e,l))),t===1)throw n=Ur,kn(e,0),dn(e,a),tt(e,_e()),n;if(t===6)dn(e,a);else{if(l=e.current.alternate,(a&30)===0&&!vf(l)&&(t=as(e,a),t===2&&(i=Ds(e),i!==0&&(a=i,t=li(e,i))),t===1))throw n=Ur,kn(e,0),dn(e,a),tt(e,_e()),n;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(c(345));case 2:Sn(e,et,Ht);break;case 3:if(dn(e,a),(a&130023424)===a&&(t=ri+500-_e(),10<t)){if(ma(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){Ye(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ml(Sn.bind(null,e,et,Ht),t);break}Sn(e,et,Ht);break;case 4:if(dn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var u=31-yt(a);i=1<<u,u=t[u],u>l&&(l=u),a&=~i}if(a=l,a=_e()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*yf(a/1960))-a,10<a){e.timeoutHandle=ml(Sn.bind(null,e,et,Ht),a);break}Sn(e,et,Ht);break;case 5:Sn(e,et,Ht);break;default:throw Error(c(329))}}}return tt(e,_e()),e.callbackNode===n?vu.bind(null,e):null}function li(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=as(e,t),e!==2&&(t=et,et=n,t!==null&&ii(t)),e}function ii(e){et===null?et=e:et.push.apply(et,e)}function vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!vt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~ni,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),a=1<<n;e[n]=-1,t&=~a}}function wu(e){if((ie&6)!==0)throw Error(c(327));Xn();var t=ma(e,0);if((t&1)===0)return tt(e,_e()),null;var n=as(e,t);if(e.tag!==0&&n===2){var a=Ds(e);a!==0&&(t=a,n=li(e,a))}if(n===1)throw n=Ur,kn(e,0),dn(e,t),tt(e,_e()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,et,Ht),tt(e,_e()),null}function oi(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Zn=_e()+500,Ta&&rn())}}function jn(e){cn!==null&&cn.tag===0&&(ie&6)===0&&Xn();var t=ie;ie|=1;var n=ft.transition,a=he;try{if(ft.transition=null,he=1,e)return e()}finally{he=a,ft.transition=n,ie=t,(ie&6)===0&&rn()}}function ci(){it=Jn.current,be(Jn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ym(n)),Ie!==null)for(n=Ie.return;n!==null;){var a=n;switch(yl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ea();break;case 3:Yn(),be(Je),be(Be),Tl();break;case 5:El(a);break;case 4:Yn();break;case 13:be($e);break;case 19:be($e);break;case 10:kl(a.type._context);break;case 22:case 23:ci()}n=n.return}if(Me=e,Ie=e=mn(e.current,null),De=it=t,Le=0,Ur=null,ni=Za=Nn=0,et=Wr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],a=n.interleaved,a!==null){n.interleaved=null;var l=a.next,i=n.pending;if(i!==null){var u=i.next;i.next=l,a.next=u}n.pending=a}vn=null}return e}function bu(e,t){do{var n=Ie;try{if(jl(),Ba.current=Ga,Ua){for(var a=Ce.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}Ua=!1}if(bn=0,Ae=Re=Ce=null,Mr=!1,zr=0,ti.current=null,n===null||n.return===null){Le=1,Ur=t,Ie=null;break}e:{var i=e,u=n.return,h=n,v=t;if(t=De,h.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var S=v,R=h,A=R.tag;if((R.mode&1)===0&&(A===0||A===11||A===15)){var T=R.alternate;T?(R.updateQueue=T.updateQueue,R.memoizedState=T.memoizedState,R.lanes=T.lanes):(R.updateQueue=null,R.memoizedState=null)}var U=Vc(u);if(U!==null){U.flags&=-257,qc(U,u,h,i,t),U.mode&1&&Gc(i,S,t),t=U,v=S;var V=t.updateQueue;if(V===null){var q=new Set;q.add(v),t.updateQueue=q}else V.add(v);break e}else{if((t&1)===0){Gc(i,S,t),ui();break e}v=Error(c(426))}}else if(je&&h.mode&1){var Te=Vc(u);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),qc(Te,u,h,i,t),bl(Qn(v,h));break e}}i=v=Qn(v,h),Le!==4&&(Le=2),Wr===null?Wr=[i]:Wr.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var j=Wc(i,v,t);xc(i,j);break e;case 1:h=v;var w=i.type,k=i.stateNode;if((i.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(on===null||!on.has(k)))){i.flags|=65536,t&=-t,i.lanes|=t;var D=Hc(i,h,t);xc(i,D);break e}}i=i.return}while(i!==null)}ku(n)}catch(Y){t=Y,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function Nu(){var e=Ja.current;return Ja.current=Ga,e===null?Ga:e}function ui(){(Le===0||Le===3||Le===2)&&(Le=4),Me===null||(Nn&268435455)===0&&(Za&268435455)===0||dn(Me,De)}function as(e,t){var n=ie;ie|=2;var a=Nu();(Me!==e||De!==t)&&(Ht=null,kn(e,t));do try{wf();break}catch(l){bu(e,l)}while(!0);if(jl(),ie=n,Ja.current=a,Ie!==null)throw Error(c(261));return Me=null,De=0,Le}function wf(){for(;Ie!==null;)ju(Ie)}function bf(){for(;Ie!==null&&!Gd();)ju(Ie)}function ju(e){var t=Cu(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?ku(e):Ie=t,ti.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ff(n,t,it),n!==null){Ie=n;return}}else{if(n=pf(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ie=null;return}}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Le===0&&(Le=5)}function Sn(e,t,n){var a=he,l=ft.transition;try{ft.transition=null,he=1,Nf(e,t,n,a)}finally{ft.transition=l,he=a}return null}function Nf(e,t,n,a){do Xn();while(cn!==null);if((ie&6)!==0)throw Error(c(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(tm(e,i),e===Me&&(Ie=Me=null,De=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||es||(es=!0,Pu(oa,function(){return Xn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=ft.transition,ft.transition=null;var u=he;he=1;var h=ie;ie|=4,ti.current=null,xf(e,n),pu(n,e),Bm(ul),ha=!!cl,ul=cl=null,e.current=n,gf(n),Vd(),ie=h,he=u,ft.transition=i}else e.current=n;if(es&&(es=!1,cn=e,ts=l),i=e.pendingLanes,i===0&&(on=null),Qd(n.stateNode),tt(e,_e()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],a(l.value,{componentStack:l.stack,digest:l.digest});if(Xa)throw Xa=!1,e=ai,ai=null,e;return(ts&1)!==0&&e.tag!==0&&Xn(),i=e.pendingLanes,(i&1)!==0?e===si?Hr++:(Hr=0,si=e):Hr=0,rn(),null}function Xn(){if(cn!==null){var e=mo(ts),t=ft.transition,n=he;try{if(ft.transition=null,he=16>e?16:e,cn===null)var a=!1;else{if(e=cn,cn=null,ts=0,(ie&6)!==0)throw Error(c(331));var l=ie;for(ie|=4,H=e.current;H!==null;){var i=H,u=i.child;if((H.flags&16)!==0){var h=i.deletions;if(h!==null){for(var v=0;v<h.length;v++){var S=h[v];for(H=S;H!==null;){var R=H;switch(R.tag){case 0:case 11:case 15:Br(8,R,i)}var A=R.child;if(A!==null)A.return=R,H=A;else for(;H!==null;){R=H;var T=R.sibling,U=R.return;if(cu(R),R===S){H=null;break}if(T!==null){T.return=U,H=T;break}H=U}}}var V=i.alternate;if(V!==null){var q=V.child;if(q!==null){V.child=null;do{var Te=q.sibling;q.sibling=null,q=Te}while(q!==null)}}H=i}}if((i.subtreeFlags&2064)!==0&&u!==null)u.return=i,H=u;else e:for(;H!==null;){if(i=H,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Br(9,i,i.return)}var j=i.sibling;if(j!==null){j.return=i.return,H=j;break e}H=i.return}}var w=e.current;for(H=w;H!==null;){u=H;var k=u.child;if((u.subtreeFlags&2064)!==0&&k!==null)k.return=u,H=k;else e:for(u=w;H!==null;){if(h=H,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:Ka(9,h)}}catch(Y){Ee(h,h.return,Y)}if(h===u){H=null;break e}var D=h.sibling;if(D!==null){D.return=h.return,H=D;break e}H=h.return}}if(ie=l,rn(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(ca,e)}catch{}a=!0}return a}finally{he=n,ft.transition=t}}return!1}function Su(e,t,n){t=Qn(n,t),t=Wc(e,t,1),e=sn(e,t,1),t=Ye(),e!==null&&(pr(e,1,t),tt(e,t))}function Ee(e,t,n){if(e.tag===3)Su(e,e,n);else for(;t!==null;){if(t.tag===3){Su(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(on===null||!on.has(a))){e=Qn(n,e),e=Hc(t,e,1),t=sn(t,e,1),e=Ye(),t!==null&&(pr(t,1,e),tt(t,e));break}}t=t.return}}function jf(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(De&n)===n&&(Le===4||Le===3&&(De&130023424)===De&&500>_e()-ri?kn(e,0):ni|=n),tt(e,t)}function $u(e,t){t===0&&((e.mode&1)===0?t=1:(t=da,da<<=1,(da&130023424)===0&&(da=4194304)));var n=Ye();e=Bt(e,t),e!==null&&(pr(e,t,n),tt(e,n))}function kf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$u(e,n)}function Sf(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(c(314))}a!==null&&a.delete(t),$u(e,n)}var Cu;Cu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Xe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Xe=!1,mf(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,je&&(t.flags&1048576)!==0&&lc(t,Ra,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Ya(e,t),e=t.pendingProps;var l=Bn(t,Be.current);qn(t,n),l=Ll(null,t,a,e,l,n);var i=Al();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(a)?(i=!0,_a(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Cl(t),l.updater=Va,t.stateNode=l,l._reactInternals=t,Bl(t,a,e,n),t=Gl(null,t,a,!0,i,n)):(t.tag=0,je&&i&&gl(t),qe(null,t,l,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Ya(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=Cf(a),e=bt(a,e),l){case 0:t=Hl(null,t,a,e,n);break e;case 1:t=Xc(null,t,a,e,n);break e;case 11:t=Yc(null,t,a,e,n);break e;case 14:t=Qc(null,t,a,bt(a.type,e),n);break e}throw Error(c(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:bt(a,l),Hl(e,t,a,l,n);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:bt(a,l),Xc(e,t,a,l,n);case 3:e:{if(eu(t),e===null)throw Error(c(387));a=t.pendingProps,i=t.memoizedState,l=i.element,hc(e,t),Da(t,a,null,n);var u=t.memoizedState;if(a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Qn(Error(c(423)),t),t=tu(e,t,a,n,l);break e}else if(a!==l){l=Qn(Error(c(424)),t),t=tu(e,t,a,n,l);break e}else for(lt=en(t.stateNode.containerInfo.firstChild),st=t,je=!0,wt=null,n=fc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),a===l){t=Wt(e,t,n);break e}qe(e,t,a,n)}t=t.child}return t;case 5:return yc(t),e===null&&wl(t),a=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,u=l.children,dl(a,l)?u=null:i!==null&&dl(a,i)&&(t.flags|=32),Zc(e,t),qe(e,t,u,n),t.child;case 6:return e===null&&wl(t),null;case 13:return nu(e,t,n);case 4:return Pl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Gn(t,null,a,n):qe(e,t,a,n),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:bt(a,l),Yc(e,t,a,l,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,i=t.memoizedProps,u=l.value,ye(Ma,a._currentValue),a._currentValue=u,i!==null)if(vt(i.value,u)){if(i.children===l.children&&!Je.current){t=Wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var h=i.dependencies;if(h!==null){u=i.child;for(var v=h.firstContext;v!==null;){if(v.context===a){if(i.tag===1){v=Ut(-1,n&-n),v.tag=2;var S=i.updateQueue;if(S!==null){S=S.shared;var R=S.pending;R===null?v.next=v:(v.next=R.next,R.next=v),S.pending=v}}i.lanes|=n,v=i.alternate,v!==null&&(v.lanes|=n),Sl(i.return,n,t),h.lanes|=n;break}v=v.next}}else if(i.tag===10)u=i.type===t.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(c(341));u.lanes|=n,h=u.alternate,h!==null&&(h.lanes|=n),Sl(u,n,t),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}qe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,qn(t,n),l=dt(l),a=a(l),t.flags|=1,qe(e,t,a,n),t.child;case 14:return a=t.type,l=bt(a,t.pendingProps),l=bt(a.type,l),Qc(e,t,a,l,n);case 15:return Kc(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:bt(a,l),Ya(e,t),t.tag=1,Ze(a)?(e=!0,_a(t)):e=!1,qn(t,n),Bc(t,a,l),Bl(t,a,l,n),Gl(null,t,a,!0,e,n);case 19:return au(e,t,n);case 22:return Jc(e,t,n)}throw Error(c(156,t.tag))};function Pu(e,t){return lo(e,t)}function $f(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,a){return new $f(e,t,n,a)}function di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cf(e){if(typeof e=="function")return di(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ne)return 11;if(e===Qe)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ss(e,t,n,a,l,i){var u=2;if(a=e,typeof e=="function")di(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ve:return $n(n.children,l,i,t);case Se:u=8,l|=8;break;case E:return e=pt(12,n,t,l|2),e.elementType=E,e.lanes=i,e;case fe:return e=pt(13,n,t,l),e.elementType=fe,e.lanes=i,e;case Ve:return e=pt(19,n,t,l),e.elementType=Ve,e.lanes=i,e;case Pe:return ls(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:u=10;break e;case le:u=9;break e;case ne:u=11;break e;case Qe:u=14;break e;case Ke:u=16,a=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=pt(u,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function $n(e,t,n,a){return e=pt(7,e,a,t),e.lanes=n,e}function ls(e,t,n,a){return e=pt(22,e,a,t),e.elementType=Pe,e.lanes=n,e.stateNode={isHidden:!1},e}function mi(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function fi(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pf(e,t,n,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function pi(e,t,n,a,l,i,u,h,v){return e=new Pf(e,t,n,h,v),t===1?(t=1,i===!0&&(t|=8)):t=0,i=pt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cl(i),e}function Ef(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Eu(e){if(!e)return nn;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(Ze(n))return rc(e,n,t)}return t}function _u(e,t,n,a,l,i,u,h,v){return e=pi(n,a,!0,e,l,i,u,h,v),e.context=Eu(null),n=e.current,a=Ye(),l=un(n),i=Ut(a,l),i.callback=t??null,sn(n,i,l),e.current.lanes=l,pr(e,l,a),tt(e,a),e}function is(e,t,n,a){var l=t.current,i=Ye(),u=un(l);return n=Eu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(i,u),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=sn(l,t,u),e!==null&&(kt(e,l,u,i),Oa(e,l,u)),u}function os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hi(e,t){Tu(e,t),(e=e.alternate)&&Tu(e,t)}function _f(){return null}var Iu=typeof reportError=="function"?reportError:function(e){console.error(e)};function xi(e){this._internalRoot=e}cs.prototype.render=xi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));is(e,t,null,null)},cs.prototype.unmount=xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){is(null,e,null,null)}),t[zt]=null}};function cs(e){this._internalRoot=e}cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=ho();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&yo(e)}};function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Tf(e,t,n,a,l){if(l){if(typeof a=="function"){var i=a;a=function(){var S=os(u);i.call(S)}}var u=_u(t,a,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=u,e[zt]=u.current,Pr(e.nodeType===8?e.parentNode:e),jn(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var h=a;a=function(){var S=os(v);h.call(S)}}var v=pi(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=v,e[zt]=v.current,Pr(e.nodeType===8?e.parentNode:e),jn(function(){is(t,v,n,a)}),v}function ds(e,t,n,a,l){var i=n._reactRootContainer;if(i){var u=i;if(typeof l=="function"){var h=l;l=function(){var v=os(u);h.call(v)}}is(t,u,e,l)}else u=Tf(n,t,e,l,a);return os(u)}fo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Bs(t,n|1),tt(t,_e()),(ie&6)===0&&(Zn=_e()+500,rn()))}break;case 13:jn(function(){var a=Bt(e,1);if(a!==null){var l=Ye();kt(a,e,1,l)}}),hi(e,1)}},Us=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Ye();kt(t,e,134217728,n)}hi(e,134217728)}},po=function(e){if(e.tag===13){var t=un(e),n=Bt(e,t);if(n!==null){var a=Ye();kt(n,e,t,a)}hi(e,t)}},ho=function(){return he},xo=function(e,t){var n=he;try{return he=e,t()}finally{he=n}},Ls=function(e,t,n){switch(t){case"input":if($s(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=Pa(a);if(!l)throw Error(c(90));Di(a),$s(a,l)}}}break;case"textarea":Hi(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}},Xi=oi,eo=jn;var If={usingClientEntryPoint:!1,Events:[Tr,Dn,Pa,Ji,Zi,oi]},Gr={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rf={bundleType:Gr.bundleType,version:Gr.version,rendererPackageName:Gr.rendererPackageName,rendererConfig:Gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ao(e),e===null?null:e.stateNode},findFiberByHostInstance:Gr.findFiberByHostInstance||_f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{ca=ms.inject(Rf),Tt=ms}catch{}}return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If,nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gi(t))throw Error(c(200));return Ef(e,t,null,n)},nt.createRoot=function(e,t){if(!gi(e))throw Error(c(299));var n=!1,a="",l=Iu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=pi(e,1,!1,null,null,n,!1,a,l),e[zt]=t.current,Pr(e.nodeType===8?e.parentNode:e),new xi(t)},nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ao(t),e=e===null?null:e.stateNode,e},nt.flushSync=function(e){return jn(e)},nt.hydrate=function(e,t,n){if(!us(t))throw Error(c(200));return ds(null,e,t,!0,n)},nt.hydrateRoot=function(e,t,n){if(!gi(e))throw Error(c(405));var a=n!=null&&n.hydratedSources||null,l=!1,i="",u=Iu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=_u(t,null,e,1,n??null,l,!1,i,u),e[zt]=t.current,Pr(e),a)for(e=0;e<a.length;e++)n=a[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new cs(t)},nt.render=function(e,t,n){if(!us(t))throw Error(c(200));return ds(null,e,t,!1,n)},nt.unmountComponentAtNode=function(e){if(!us(e))throw Error(c(40));return e._reactRootContainer?(jn(function(){ds(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1},nt.unstable_batchedUpdates=oi,nt.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!us(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return ds(e,t,n,!1,a)},nt.version="18.3.1-next-f1338f8080-20240426",nt}var Bu;function Uf(){if(Bu)return wi.exports;Bu=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),wi.exports=Bf(),wi.exports}var Uu;function Wf(){if(Uu)return fs;Uu=1;var o=Uf();return fs.createRoot=o.createRoot,fs.hydrateRoot=o.hydrateRoot,fs}var Hf=Wf(),qr={},Wu;function Gf(){if(Wu)return qr;Wu=1,Object.defineProperty(qr,"__esModule",{value:!0}),qr.parse=x,qr.serialize=g;const o=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,m=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,f=(()=>{const P=function(){};return P.prototype=Object.create(null),P})();function x(P,O){const _=new f,L=P.length;if(L<2)return _;const M=(O==null?void 0:O.decode)||N;let z=0;do{const K=P.indexOf("=",z);if(K===-1)break;const W=P.indexOf(";",z),te=W===-1?L:W;if(K>te){z=P.lastIndexOf(";",K-1)+1;continue}const xe=p(P,z,K),me=y(P,K,xe),ve=P.slice(xe,me);if(_[ve]===void 0){let Se=p(P,K+1,te),E=y(P,te,Se);const F=M(P.slice(Se,E));_[ve]=F}z=te+1}while(z<L);return _}function p(P,O,_){do{const L=P.charCodeAt(O);if(L!==32&&L!==9)return O}while(++O<_);return _}function y(P,O,_){for(;O>_;){const L=P.charCodeAt(--O);if(L!==32&&L!==9)return O+1}return _}function g(P,O,_){const L=(_==null?void 0:_.encode)||encodeURIComponent;if(!o.test(P))throw new TypeError(`argument name is invalid: ${P}`);const M=L(O);if(!s.test(M))throw new TypeError(`argument val is invalid: ${O}`);let z=P+"="+M;if(!_)return z;if(_.maxAge!==void 0){if(!Number.isInteger(_.maxAge))throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);z+="; Max-Age="+_.maxAge}if(_.domain){if(!c.test(_.domain))throw new TypeError(`option domain is invalid: ${_.domain}`);z+="; Domain="+_.domain}if(_.path){if(!m.test(_.path))throw new TypeError(`option path is invalid: ${_.path}`);z+="; Path="+_.path}if(_.expires){if(!C(_.expires)||!Number.isFinite(_.expires.valueOf()))throw new TypeError(`option expires is invalid: ${_.expires}`);z+="; Expires="+_.expires.toUTCString()}if(_.httpOnly&&(z+="; HttpOnly"),_.secure&&(z+="; Secure"),_.partitioned&&(z+="; Partitioned"),_.priority)switch(typeof _.priority=="string"?_.priority.toLowerCase():void 0){case"low":z+="; Priority=Low";break;case"medium":z+="; Priority=Medium";break;case"high":z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${_.priority}`)}if(_.sameSite)switch(typeof _.sameSite=="string"?_.sameSite.toLowerCase():_.sameSite){case!0:case"strict":z+="; SameSite=Strict";break;case"lax":z+="; SameSite=Lax";break;case"none":z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${_.sameSite}`)}return z}function N(P){if(P.indexOf("%")===-1)return P;try{return decodeURIComponent(P)}catch{return P}}function C(P){return d.call(P)==="[object Date]"}return qr}Gf();var Hu="popstate";function Vf(o={}){function s(d,f){let{pathname:x="/",search:p="",hash:y=""}=Pn(d.location.hash.substring(1));return!x.startsWith("/")&&!x.startsWith(".")&&(x="/"+x),Ci("",{pathname:x,search:p,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(d,f){let x=d.document.querySelector("base"),p="";if(x&&x.getAttribute("href")){let y=d.location.href,g=y.indexOf("#");p=g===-1?y:y.slice(0,g)}return p+"#"+(typeof f=="string"?f:Kr(f))}function m(d,f){xt(d.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return Yf(s,c,m,o)}function ke(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}function xt(o,s){if(!o){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function qf(){return Math.random().toString(36).substring(2,10)}function Gu(o,s){return{usr:o.state,key:o.key,idx:s}}function Ci(o,s,c=null,m){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof s=="string"?Pn(s):s,state:c,key:s&&s.key||m||qf()}}function Kr({pathname:o="/",search:s="",hash:c=""}){return s&&s!=="?"&&(o+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(o+=c.charAt(0)==="#"?c:"#"+c),o}function Pn(o){let s={};if(o){let c=o.indexOf("#");c>=0&&(s.hash=o.substring(c),o=o.substring(0,c));let m=o.indexOf("?");m>=0&&(s.search=o.substring(m),o=o.substring(0,m)),o&&(s.pathname=o)}return s}function Yf(o,s,c,m={}){let{window:d=document.defaultView,v5Compat:f=!1}=m,x=d.history,p="POP",y=null,g=N();g==null&&(g=0,x.replaceState({...x.state,idx:g},""));function N(){return(x.state||{idx:null}).idx}function C(){p="POP";let M=N(),z=M==null?null:M-g;g=M,y&&y({action:p,location:L.location,delta:z})}function P(M,z){p="PUSH";let K=Ci(L.location,M,z);c&&c(K,M),g=N()+1;let W=Gu(K,g),te=L.createHref(K);try{x.pushState(W,"",te)}catch(xe){if(xe instanceof DOMException&&xe.name==="DataCloneError")throw xe;d.location.assign(te)}f&&y&&y({action:p,location:L.location,delta:1})}function O(M,z){p="REPLACE";let K=Ci(L.location,M,z);c&&c(K,M),g=N();let W=Gu(K,g),te=L.createHref(K);x.replaceState(W,"",te),f&&y&&y({action:p,location:L.location,delta:0})}function _(M){return Qf(M)}let L={get action(){return p},get location(){return o(d,x)},listen(M){if(y)throw new Error("A history only accepts one active listener");return d.addEventListener(Hu,C),y=M,()=>{d.removeEventListener(Hu,C),y=null}},createHref(M){return s(d,M)},createURL:_,encodeLocation(M){let z=_(M);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:P,replace:O,go(M){return x.go(M)}};return L}function Qf(o,s=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),ke(c,"No window.location.(origin|href) available to create URL");let m=typeof o=="string"?o:Kr(o);return m=m.replace(/ $/,"%20"),!s&&m.startsWith("//")&&(m=c+m),new URL(m,c)}function ld(o,s,c="/"){return Kf(o,s,c,!1)}function Kf(o,s,c,m){let d=typeof s=="string"?Pn(s):s,f=qt(d.pathname||"/",c);if(f==null)return null;let x=id(o);Jf(x);let p=null;for(let y=0;p==null&&y<x.length;++y){let g=op(f);p=lp(x[y],g,m)}return p}function id(o,s=[],c=[],m=""){let d=(f,x,p)=>{let y={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:x,route:f};y.relativePath.startsWith("/")&&(ke(y.relativePath.startsWith(m),`Absolute route path "${y.relativePath}" nested under path "${m}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(m.length));let g=Gt([m,y.relativePath]),N=c.concat(y);f.children&&f.children.length>0&&(ke(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),id(f.children,s,N,g)),!(f.path==null&&!f.index)&&s.push({path:g,score:ap(g,f.index),routesMeta:N})};return o.forEach((f,x)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))d(f,x);else for(let y of od(f.path))d(f,x,y)}),s}function od(o){let s=o.split("/");if(s.length===0)return[];let[c,...m]=s,d=c.endsWith("?"),f=c.replace(/\?$/,"");if(m.length===0)return d?[f,""]:[f];let x=od(m.join("/")),p=[];return p.push(...x.map(y=>y===""?f:[f,y].join("/"))),d&&p.push(...x),p.map(y=>o.startsWith("/")&&y===""?"/":y)}function Jf(o){o.sort((s,c)=>s.score!==c.score?c.score-s.score:sp(s.routesMeta.map(m=>m.childrenIndex),c.routesMeta.map(m=>m.childrenIndex)))}var Zf=/^:[\w-]+$/,Xf=3,ep=2,tp=1,np=10,rp=-2,Vu=o=>o==="*";function ap(o,s){let c=o.split("/"),m=c.length;return c.some(Vu)&&(m+=rp),s&&(m+=ep),c.filter(d=>!Vu(d)).reduce((d,f)=>d+(Zf.test(f)?Xf:f===""?tp:np),m)}function sp(o,s){return o.length===s.length&&o.slice(0,-1).every((m,d)=>m===s[d])?o[o.length-1]-s[s.length-1]:0}function lp(o,s,c=!1){let{routesMeta:m}=o,d={},f="/",x=[];for(let p=0;p<m.length;++p){let y=m[p],g=p===m.length-1,N=f==="/"?s:s.slice(f.length)||"/",C=vs({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},N),P=y.route;if(!C&&g&&c&&!m[m.length-1].route.index&&(C=vs({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},N)),!C)return null;Object.assign(d,C.params),x.push({params:d,pathname:Gt([f,C.pathname]),pathnameBase:mp(Gt([f,C.pathnameBase])),route:P}),C.pathnameBase!=="/"&&(f=Gt([f,C.pathnameBase]))}return x}function vs(o,s){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[c,m]=ip(o.path,o.caseSensitive,o.end),d=s.match(c);if(!d)return null;let f=d[0],x=f.replace(/(.)\/+$/,"$1"),p=d.slice(1);return{params:m.reduce((g,{paramName:N,isOptional:C},P)=>{if(N==="*"){let _=p[P]||"";x=f.slice(0,f.length-_.length).replace(/(.)\/+$/,"$1")}const O=p[P];return C&&!O?g[N]=void 0:g[N]=(O||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:x,pattern:o}}function ip(o,s=!1,c=!0){xt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let m=[],d="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,p,y)=>(m.push({paramName:p,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(m.push({paramName:"*"}),d+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":o!==""&&o!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),m]}function op(o){try{return o.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return xt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),o}}function qt(o,s){if(s==="/")return o;if(!o.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,m=o.charAt(c);return m&&m!=="/"?null:o.slice(c)||"/"}function cp(o,s="/"){let{pathname:c,search:m="",hash:d=""}=typeof o=="string"?Pn(o):o;return{pathname:c?c.startsWith("/")?c:up(c,s):s,search:fp(m),hash:pp(d)}}function up(o,s){let c=s.replace(/\/+$/,"").split("/");return o.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function ji(o,s,c,m){return`Cannot include a '${o}' character in a manually specified \`to.${s}\` field [${JSON.stringify(m)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dp(o){return o.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function _i(o){let s=dp(o);return s.map((c,m)=>m===s.length-1?c.pathname:c.pathnameBase)}function Ti(o,s,c,m=!1){let d;typeof o=="string"?d=Pn(o):(d={...o},ke(!d.pathname||!d.pathname.includes("?"),ji("?","pathname","search",d)),ke(!d.pathname||!d.pathname.includes("#"),ji("#","pathname","hash",d)),ke(!d.search||!d.search.includes("#"),ji("#","search","hash",d)));let f=o===""||d.pathname==="",x=f?"/":d.pathname,p;if(x==null)p=c;else{let C=s.length-1;if(!m&&x.startsWith("..")){let P=x.split("/");for(;P[0]==="..";)P.shift(),C-=1;d.pathname=P.join("/")}p=C>=0?s[C]:"/"}let y=cp(d,p),g=x&&x!=="/"&&x.endsWith("/"),N=(f||x===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(g||N)&&(y.pathname+="/"),y}var Gt=o=>o.join("/").replace(/\/\/+/g,"/"),mp=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),fp=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,pp=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function hp(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var cd=["POST","PUT","PATCH","DELETE"];new Set(cd);var xp=["GET",...cd];new Set(xp);var sr=$.createContext(null);sr.displayName="DataRouter";var Ns=$.createContext(null);Ns.displayName="DataRouterState";var ud=$.createContext({isTransitioning:!1});ud.displayName="ViewTransition";var gp=$.createContext(new Map);gp.displayName="Fetchers";var yp=$.createContext(null);yp.displayName="Await";var Ct=$.createContext(null);Ct.displayName="Navigation";var ea=$.createContext(null);ea.displayName="Location";var Pt=$.createContext({outlet:null,matches:[],isDataRoute:!1});Pt.displayName="Route";var Ii=$.createContext(null);Ii.displayName="RouteError";function vp(o,{relative:s}={}){ke(lr(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:m}=$.useContext(Ct),{hash:d,pathname:f,search:x}=ta(o,{relative:s}),p=f;return c!=="/"&&(p=f==="/"?c:Gt([c,f])),m.createHref({pathname:p,search:x,hash:d})}function lr(){return $.useContext(ea)!=null}function Et(){return ke(lr(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(ea).location}var dd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function md(o){$.useContext(Ct).static||$.useLayoutEffect(o)}function fd(){let{isDataRoute:o}=$.useContext(Pt);return o?Rp():wp()}function wp(){ke(lr(),"useNavigate() may be used only in the context of a <Router> component.");let o=$.useContext(sr),{basename:s,navigator:c}=$.useContext(Ct),{matches:m}=$.useContext(Pt),{pathname:d}=Et(),f=JSON.stringify(_i(m)),x=$.useRef(!1);return md(()=>{x.current=!0}),$.useCallback((y,g={})=>{if(xt(x.current,dd),!x.current)return;if(typeof y=="number"){c.go(y);return}let N=Ti(y,JSON.parse(f),d,g.relative==="path");o==null&&s!=="/"&&(N.pathname=N.pathname==="/"?s:Gt([s,N.pathname])),(g.replace?c.replace:c.push)(N,g.state,g)},[s,c,f,d,o])}$.createContext(null);function bp(){let{matches:o}=$.useContext(Pt),s=o[o.length-1];return s?s.params:{}}function ta(o,{relative:s}={}){let{matches:c}=$.useContext(Pt),{pathname:m}=Et(),d=JSON.stringify(_i(c));return $.useMemo(()=>Ti(o,JSON.parse(d),m,s==="path"),[o,d,m,s])}function Np(o,s){return pd(o,s)}function pd(o,s,c,m){var K;ke(lr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d,static:f}=$.useContext(Ct),{matches:x}=$.useContext(Pt),p=x[x.length-1],y=p?p.params:{},g=p?p.pathname:"/",N=p?p.pathnameBase:"/",C=p&&p.route;{let W=C&&C.path||"";hd(g,!C||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let P=Et(),O;if(s){let W=typeof s=="string"?Pn(s):s;ke(N==="/"||((K=W.pathname)==null?void 0:K.startsWith(N)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${W.pathname}" was given in the \`location\` prop.`),O=W}else O=P;let _=O.pathname||"/",L=_;if(N!=="/"){let W=N.replace(/^\//,"").split("/");L="/"+_.replace(/^\//,"").split("/").slice(W.length).join("/")}let M=!f&&c&&c.matches&&c.matches.length>0?c.matches:ld(o,{pathname:L});xt(C||M!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),xt(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=Cp(M&&M.map(W=>Object.assign({},W,{params:Object.assign({},y,W.params),pathname:Gt([N,d.encodeLocation?d.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?N:Gt([N,d.encodeLocation?d.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),x,c,m);return s&&z?$.createElement(ea.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},z):z}function jp(){let o=Ip(),s=hp(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),c=o instanceof Error?o.stack:null,m="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:m},f={padding:"2px 4px",backgroundColor:m},x=null;return console.error("Error handled by React Router default ErrorBoundary:",o),x=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:f},"ErrorBoundary")," or"," ",$.createElement("code",{style:f},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},s),c?$.createElement("pre",{style:d},c):null,x)}var kp=$.createElement(jp,null),Sp=class extends $.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,s){return s.location!==o.location||s.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:s.error,location:s.location,revalidation:o.revalidation||s.revalidation}}componentDidCatch(o,s){console.error("React Router caught the following error during render",o,s)}render(){return this.state.error!==void 0?$.createElement(Pt.Provider,{value:this.props.routeContext},$.createElement(Ii.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $p({routeContext:o,match:s,children:c}){let m=$.useContext(sr);return m&&m.static&&m.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=s.route.id),$.createElement(Pt.Provider,{value:o},c)}function Cp(o,s=[],c=null,m=null){if(o==null){if(!c)return null;if(c.errors)o=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let d=o,f=c==null?void 0:c.errors;if(f!=null){let y=d.findIndex(g=>g.route.id&&(f==null?void 0:f[g.route.id])!==void 0);ke(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,y+1))}let x=!1,p=-1;if(c)for(let y=0;y<d.length;y++){let g=d[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=y),g.route.id){let{loaderData:N,errors:C}=c,P=g.route.loader&&!N.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||P){x=!0,p>=0?d=d.slice(0,p+1):d=[d[0]];break}}}return d.reduceRight((y,g,N)=>{let C,P=!1,O=null,_=null;c&&(C=f&&g.route.id?f[g.route.id]:void 0,O=g.route.errorElement||kp,x&&(p<0&&N===0?(hd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),P=!0,_=null):p===N&&(P=!0,_=g.route.hydrateFallbackElement||null)));let L=s.concat(d.slice(0,N+1)),M=()=>{let z;return C?z=O:P?z=_:g.route.Component?z=$.createElement(g.route.Component,null):g.route.element?z=g.route.element:z=y,$.createElement($p,{match:g,routeContext:{outlet:y,matches:L,isDataRoute:c!=null},children:z})};return c&&(g.route.ErrorBoundary||g.route.errorElement||N===0)?$.createElement(Sp,{location:c.location,revalidation:c.revalidation,component:O,error:C,children:M(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):M()},null)}function Ri(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pp(o){let s=$.useContext(sr);return ke(s,Ri(o)),s}function Ep(o){let s=$.useContext(Ns);return ke(s,Ri(o)),s}function _p(o){let s=$.useContext(Pt);return ke(s,Ri(o)),s}function Li(o){let s=_p(o),c=s.matches[s.matches.length-1];return ke(c.route.id,`${o} can only be used on routes that contain a unique "id"`),c.route.id}function Tp(){return Li("useRouteId")}function Ip(){var m;let o=$.useContext(Ii),s=Ep("useRouteError"),c=Li("useRouteError");return o!==void 0?o:(m=s.errors)==null?void 0:m[c]}function Rp(){let{router:o}=Pp("useNavigate"),s=Li("useNavigate"),c=$.useRef(!1);return md(()=>{c.current=!0}),$.useCallback(async(d,f={})=>{xt(c.current,dd),c.current&&(typeof d=="number"?o.navigate(d):await o.navigate(d,{fromRouteId:s,...f}))},[o,s])}var qu={};function hd(o,s,c){!s&&!qu[o]&&(qu[o]=!0,xt(!1,c))}$.memo(Lp);function Lp({routes:o,future:s,state:c}){return pd(o,void 0,c,s)}function Ap({to:o,replace:s,state:c,relative:m}){ke(lr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=$.useContext(Ct);xt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=$.useContext(Pt),{pathname:x}=Et(),p=fd(),y=Ti(o,_i(f),x,m==="path"),g=JSON.stringify(y);return $.useEffect(()=>{p(JSON.parse(g),{replace:s,state:c,relative:m})},[p,g,m,s,c]),null}function St(o){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Mp({basename:o="/",children:s=null,location:c,navigationType:m="POP",navigator:d,static:f=!1}){ke(!lr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=o.replace(/^\/*/,"/"),p=$.useMemo(()=>({basename:x,navigator:d,static:f,future:{}}),[x,d,f]);typeof c=="string"&&(c=Pn(c));let{pathname:y="/",search:g="",hash:N="",state:C=null,key:P="default"}=c,O=$.useMemo(()=>{let _=qt(y,x);return _==null?null:{location:{pathname:_,search:g,hash:N,state:C,key:P},navigationType:m}},[x,y,g,N,C,P,m]);return xt(O!=null,`<Router basename="${x}"> is not able to match the URL "${y}${g}${N}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:$.createElement(Ct.Provider,{value:p},$.createElement(ea.Provider,{children:s,value:O}))}function zp({children:o,location:s}){return Np(Pi(o),s)}function Pi(o,s=[]){let c=[];return $.Children.forEach(o,(m,d)=>{if(!$.isValidElement(m))return;let f=[...s,d];if(m.type===$.Fragment){c.push.apply(c,Pi(m.props.children,f));return}ke(m.type===St,`[${typeof m.type=="string"?m.type:m.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!m.props.index||!m.props.children,"An index route cannot have child routes.");let x={id:m.props.id||f.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,hydrateFallbackElement:m.props.hydrateFallbackElement,HydrateFallback:m.props.HydrateFallback,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.hasErrorBoundary===!0||m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(x.children=Pi(m.props.children,f)),c.push(x)}),c}var hs="get",xs="application/x-www-form-urlencoded";function js(o){return o!=null&&typeof o.tagName=="string"}function Op(o){return js(o)&&o.tagName.toLowerCase()==="button"}function Dp(o){return js(o)&&o.tagName.toLowerCase()==="form"}function Fp(o){return js(o)&&o.tagName.toLowerCase()==="input"}function Bp(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Up(o,s){return o.button===0&&(!s||s==="_self")&&!Bp(o)}var ps=null;function Wp(){if(ps===null)try{new FormData(document.createElement("form"),0),ps=!1}catch{ps=!0}return ps}var Hp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ki(o){return o!=null&&!Hp.has(o)?(xt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xs}"`),null):o}function Gp(o,s){let c,m,d,f,x;if(Dp(o)){let p=o.getAttribute("action");m=p?qt(p,s):null,c=o.getAttribute("method")||hs,d=ki(o.getAttribute("enctype"))||xs,f=new FormData(o)}else if(Op(o)||Fp(o)&&(o.type==="submit"||o.type==="image")){let p=o.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=o.getAttribute("formaction")||p.getAttribute("action");if(m=y?qt(y,s):null,c=o.getAttribute("formmethod")||p.getAttribute("method")||hs,d=ki(o.getAttribute("formenctype"))||ki(p.getAttribute("enctype"))||xs,f=new FormData(p,o),!Wp()){let{name:g,type:N,value:C}=o;if(N==="image"){let P=g?`${g}.`:"";f.append(`${P}x`,"0"),f.append(`${P}y`,"0")}else g&&f.append(g,C)}}else{if(js(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=hs,m=null,d=xs,x=o}return f&&d==="text/plain"&&(x=f,f=void 0),{action:m,method:c.toLowerCase(),encType:d,formData:f,body:x}}function Ai(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}async function Vp(o,s){if(o.id in s)return s[o.id];try{let c=await import(o.module);return s[o.id]=c,c}catch(c){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qp(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Yp(o,s,c){let m=await Promise.all(o.map(async d=>{let f=s.routes[d.route.id];if(f){let x=await Vp(f,c);return x.links?x.links():[]}return[]}));return Zp(m.flat(1).filter(qp).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Yu(o,s,c,m,d,f){let x=(y,g)=>c[g]?y.route.id!==c[g].route.id:!0,p=(y,g)=>{var N;return c[g].pathname!==y.pathname||((N=c[g].route.path)==null?void 0:N.endsWith("*"))&&c[g].params["*"]!==y.params["*"]};return f==="assets"?s.filter((y,g)=>x(y,g)||p(y,g)):f==="data"?s.filter((y,g)=>{var C;let N=m.routes[y.route.id];if(!N||!N.hasLoader)return!1;if(x(y,g)||p(y,g))return!0;if(y.route.shouldRevalidate){let P=y.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((C=c[0])==null?void 0:C.params)||{},nextUrl:new URL(o,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof P=="boolean")return P}return!0}):[]}function Qp(o,s,{includeHydrateFallback:c}={}){return Kp(o.map(m=>{let d=s.routes[m.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function Kp(o){return[...new Set(o)]}function Jp(o){let s={},c=Object.keys(o).sort();for(let m of c)s[m]=o[m];return s}function Zp(o,s){let c=new Set;return new Set(s),o.reduce((m,d)=>{let f=JSON.stringify(Jp(d));return c.has(f)||(c.add(f),m.push({key:f,link:d})),m},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Xp=new Set([100,101,204,205]);function eh(o,s){let c=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return c.pathname==="/"?c.pathname="_root.data":s&&qt(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function xd(){let o=$.useContext(sr);return Ai(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function th(){let o=$.useContext(Ns);return Ai(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Mi=$.createContext(void 0);Mi.displayName="FrameworkContext";function gd(){let o=$.useContext(Mi);return Ai(o,"You must render this element inside a <HydratedRouter> element"),o}function nh(o,s){let c=$.useContext(Mi),[m,d]=$.useState(!1),[f,x]=$.useState(!1),{onFocus:p,onBlur:y,onMouseEnter:g,onMouseLeave:N,onTouchStart:C}=s,P=$.useRef(null);$.useEffect(()=>{if(o==="render"&&x(!0),o==="viewport"){let L=z=>{z.forEach(K=>{x(K.isIntersecting)})},M=new IntersectionObserver(L,{threshold:.5});return P.current&&M.observe(P.current),()=>{M.disconnect()}}},[o]),$.useEffect(()=>{if(m){let L=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(L)}}},[m]);let O=()=>{d(!0)},_=()=>{d(!1),x(!1)};return c?o!=="intent"?[f,P,{}]:[f,P,{onFocus:Yr(p,O),onBlur:Yr(y,_),onMouseEnter:Yr(g,O),onMouseLeave:Yr(N,_),onTouchStart:Yr(C,O)}]:[!1,P,{}]}function Yr(o,s){return c=>{o&&o(c),c.defaultPrevented||s(c)}}function rh({page:o,...s}){let{router:c}=xd(),m=$.useMemo(()=>ld(c.routes,o,c.basename),[c.routes,o,c.basename]);return m?$.createElement(sh,{page:o,matches:m,...s}):null}function ah(o){let{manifest:s,routeModules:c}=gd(),[m,d]=$.useState([]);return $.useEffect(()=>{let f=!1;return Yp(o,s,c).then(x=>{f||d(x)}),()=>{f=!0}},[o,s,c]),m}function sh({page:o,matches:s,...c}){let m=Et(),{manifest:d,routeModules:f}=gd(),{basename:x}=xd(),{loaderData:p,matches:y}=th(),g=$.useMemo(()=>Yu(o,s,y,d,m,"data"),[o,s,y,d,m]),N=$.useMemo(()=>Yu(o,s,y,d,m,"assets"),[o,s,y,d,m]),C=$.useMemo(()=>{if(o===m.pathname+m.search+m.hash)return[];let _=new Set,L=!1;if(s.forEach(z=>{var W;let K=d.routes[z.route.id];!K||!K.hasLoader||(!g.some(te=>te.route.id===z.route.id)&&z.route.id in p&&((W=f[z.route.id])!=null&&W.shouldRevalidate)||K.hasClientLoader?L=!0:_.add(z.route.id))}),_.size===0)return[];let M=eh(o,x);return L&&_.size>0&&M.searchParams.set("_routes",s.filter(z=>_.has(z.route.id)).map(z=>z.route.id).join(",")),[M.pathname+M.search]},[x,p,m,d,g,s,o,f]),P=$.useMemo(()=>Qp(N,d),[N,d]),O=ah(N);return $.createElement($.Fragment,null,C.map(_=>$.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...c})),P.map(_=>$.createElement("link",{key:_,rel:"modulepreload",href:_,...c})),O.map(({key:_,link:L})=>$.createElement("link",{key:_,...L})))}function lh(...o){return s=>{o.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var yd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yd&&(window.__reactRouterVersion="7.6.0")}catch{}function ih({basename:o,children:s,window:c}){let m=$.useRef();m.current==null&&(m.current=Vf({window:c,v5Compat:!0}));let d=m.current,[f,x]=$.useState({action:d.action,location:d.location}),p=$.useCallback(y=>{$.startTransition(()=>x(y))},[x]);return $.useLayoutEffect(()=>d.listen(p),[d,p]),$.createElement(Mp,{basename:o,children:s,location:f.location,navigationType:f.action,navigator:d})}var vd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,de=$.forwardRef(function({onClick:s,discover:c="render",prefetch:m="none",relative:d,reloadDocument:f,replace:x,state:p,target:y,to:g,preventScrollReset:N,viewTransition:C,...P},O){let{basename:_}=$.useContext(Ct),L=typeof g=="string"&&vd.test(g),M,z=!1;if(typeof g=="string"&&L&&(M=g,yd))try{let E=new URL(window.location.href),F=g.startsWith("//")?new URL(E.protocol+g):new URL(g),le=qt(F.pathname,_);F.origin===E.origin&&le!=null?g=le+F.search+F.hash:z=!0}catch{xt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=vp(g,{relative:d}),[W,te,xe]=nh(m,P),me=dh(g,{replace:x,state:p,target:y,preventScrollReset:N,relative:d,viewTransition:C});function ve(E){s&&s(E),E.defaultPrevented||me(E)}let Se=$.createElement("a",{...P,...xe,href:M||K,onClick:z||f?s:ve,ref:lh(O,te),target:y,"data-discover":!L&&c==="render"?"true":void 0});return W&&!L?$.createElement($.Fragment,null,Se,$.createElement(rh,{page:K})):Se});de.displayName="Link";var oh=$.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:m="",end:d=!1,style:f,to:x,viewTransition:p,children:y,...g},N){let C=ta(x,{relative:g.relative}),P=Et(),O=$.useContext(Ns),{navigator:_,basename:L}=$.useContext(Ct),M=O!=null&&xh(C)&&p===!0,z=_.encodeLocation?_.encodeLocation(C).pathname:C.pathname,K=P.pathname,W=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;c||(K=K.toLowerCase(),W=W?W.toLowerCase():null,z=z.toLowerCase()),W&&L&&(W=qt(W,L)||W);const te=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let xe=K===z||!d&&K.startsWith(z)&&K.charAt(te)==="/",me=W!=null&&(W===z||!d&&W.startsWith(z)&&W.charAt(z.length)==="/"),ve={isActive:xe,isPending:me,isTransitioning:M},Se=xe?s:void 0,E;typeof m=="function"?E=m(ve):E=[m,xe?"active":null,me?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let F=typeof f=="function"?f(ve):f;return $.createElement(de,{...g,"aria-current":Se,className:E,ref:N,style:F,to:x,viewTransition:p},typeof y=="function"?y(ve):y)});oh.displayName="NavLink";var ch=$.forwardRef(({discover:o="render",fetcherKey:s,navigate:c,reloadDocument:m,replace:d,state:f,method:x=hs,action:p,onSubmit:y,relative:g,preventScrollReset:N,viewTransition:C,...P},O)=>{let _=ph(),L=hh(p,{relative:g}),M=x.toLowerCase()==="get"?"get":"post",z=typeof p=="string"&&vd.test(p),K=W=>{if(y&&y(W),W.defaultPrevented)return;W.preventDefault();let te=W.nativeEvent.submitter,xe=(te==null?void 0:te.getAttribute("formmethod"))||x;_(te||W.currentTarget,{fetcherKey:s,method:xe,navigate:c,replace:d,state:f,relative:g,preventScrollReset:N,viewTransition:C})};return $.createElement("form",{ref:O,method:M,action:L,onSubmit:m?y:K,...P,"data-discover":!z&&o==="render"?"true":void 0})});ch.displayName="Form";function uh(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wd(o){let s=$.useContext(sr);return ke(s,uh(o)),s}function dh(o,{target:s,replace:c,state:m,preventScrollReset:d,relative:f,viewTransition:x}={}){let p=fd(),y=Et(),g=ta(o,{relative:f});return $.useCallback(N=>{if(Up(N,s)){N.preventDefault();let C=c!==void 0?c:Kr(y)===Kr(g);p(o,{replace:C,state:m,preventScrollReset:d,relative:f,viewTransition:x})}},[y,p,g,c,m,s,o,d,f,x])}var mh=0,fh=()=>`__${String(++mh)}__`;function ph(){let{router:o}=wd("useSubmit"),{basename:s}=$.useContext(Ct),c=Tp();return $.useCallback(async(m,d={})=>{let{action:f,method:x,encType:p,formData:y,body:g}=Gp(m,s);if(d.navigate===!1){let N=d.fetcherKey||fh();await o.fetch(N,c,d.action||f,{preventScrollReset:d.preventScrollReset,formData:y,body:g,formMethod:d.method||x,formEncType:d.encType||p,flushSync:d.flushSync})}else await o.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:y,body:g,formMethod:d.method||x,formEncType:d.encType||p,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,s,c])}function hh(o,{relative:s}={}){let{basename:c}=$.useContext(Ct),m=$.useContext(Pt);ke(m,"useFormAction must be used inside a RouteContext");let[d]=m.matches.slice(-1),f={...ta(o||".",{relative:s})},x=Et();if(o==null){f.search=x.search;let p=new URLSearchParams(f.search),y=p.getAll("index");if(y.some(N=>N==="")){p.delete("index"),y.filter(C=>C).forEach(C=>p.append("index",C));let N=p.toString();f.search=N?`?${N}`:""}}return(!o||o===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(f.pathname=f.pathname==="/"?c:Gt([c,f.pathname])),Kr(f)}function xh(o,s={}){let c=$.useContext(ud);ke(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:m}=wd("useViewTransitionState"),d=ta(o,{relative:s.relative});if(!c.isTransitioning)return!1;let f=qt(c.currentLocation.pathname,m)||c.currentLocation.pathname,x=qt(c.nextLocation.pathname,m)||c.nextLocation.pathname;return vs(d.pathname,x)!=null||vs(d.pathname,f)!=null}[...Xp];const bd=$.createContext({darkMode:!1,theme:"light",toggleDarkMode:()=>{}});function gh({children:o}){const[s,c]=$.useState(()=>localStorage.theme??(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));$.useLayoutEffect(()=>{document.documentElement.classList.toggle("dark",s==="dark")},[s]),$.useEffect(()=>{localStorage.theme=s},[s]);const m=()=>c(d=>d==="dark"?"light":"dark");return r.jsx(bd.Provider,{value:{darkMode:s==="dark",theme:s,toggleDarkMode:m},children:o})}/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vh=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,c,m)=>m?m.toUpperCase():c.toLowerCase()),Qu=o=>{const s=vh(o);return s.charAt(0).toUpperCase()+s.slice(1)},Nd=(...o)=>o.filter((s,c,m)=>!!s&&s.trim()!==""&&m.indexOf(s)===c).join(" ").trim(),wh=o=>{for(const s in o)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=$.forwardRef(({color:o="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:m,className:d="",children:f,iconNode:x,...p},y)=>$.createElement("svg",{ref:y,...bh,width:s,height:s,stroke:o,strokeWidth:m?Number(c)*24/Number(s):c,className:Nd("lucide",d),...!f&&!wh(p)&&{"aria-hidden":"true"},...p},[...x.map(([g,N])=>$.createElement(g,N)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(o,s)=>{const c=$.forwardRef(({className:m,...d},f)=>$.createElement(Nh,{ref:f,iconNode:s,className:Nd(`lucide-${yh(Qu(o))}`,`lucide-${o}`,m),...d}));return c.displayName=Qu(o),c};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],jd=Q("arrow-left",jh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ht=Q("arrow-right",kh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],$h=Q("award",Sh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ku=Q("book-open",Ch);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],kd=Q("brain",Ph);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],Ju=Q("building",Eh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Jr=Q("calendar",_h);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ih=Q("check",Th);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],na=Q("chevron-right",Rh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ah=Q("circle-alert",Lh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Cn=Q("circle-check-big",Mh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Oh=Q("circle-x",zh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Zr=Q("clock",Dh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],$t=Q("code",Fh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Uh=Q("compass",Bh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Sd=Q("cpu",Wh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],$d=Q("database",Hh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Vh=Q("dollar-sign",Gh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Cd=Q("download",qh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]],Qh=Q("euro",Yh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Jh=Q("external-link",Kh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Zu=Q("eye",Zh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],tr=Q("file-text",Xh);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],Pd=Q("folder-tree",e0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],n0=Q("funnel",t0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],a0=Q("gauge",r0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],l0=Q("git-branch",s0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Xr=Q("globe",i0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Ed=Q("graduation-cap",o0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Xu=Q("house",c0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],d0=Q("layers",u0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],f0=Q("lightbulb",m0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],h0=Q("loader",p0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],_d=Q("lock",x0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ot=Q("mail",g0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],v0=Q("menu",y0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ed=Q("moon",w0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],nr=Q("package",b0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],j0=Q("phone",N0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],td=Q("rocket",k0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Td=Q("scale",S0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],C0=Q("search",$0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],E0=Q("send",P0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],T0=Q("share-2",_0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],rr=Q("shield",I0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],L0=Q("smartphone",R0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Mt=Q("sparkles",A0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],gs=Q("star",M0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],nd=Q("sun",z0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],D0=Q("tag",O0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],zi=Q("target",F0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],U0=Q("telescope",B0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Id=Q("triangle-alert",W0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],G0=Q("upload",H0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ks=Q("users",V0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Rd=Q("user",q0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Ld=Q("wrench",Y0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ad=Q("x",Q0);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Oi=Q("zap",K0),J0=({darkMode:o,toggleDarkMode:s,theme:c})=>{const[m,d]=$.useState(!1),f=Et(),x=p=>f.pathname===p;return r.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 ${c.navBg} backdrop-blur-2xl border-b ${c.border} transition-all duration-300`,children:[r.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",children:[r.jsxs(de,{to:"/",className:"flex items-center gap-2",children:[r.jsxs("div",{className:"relative",children:[r.jsx($t,{className:"w-6 h-6"}),r.jsx("div",{className:`absolute -inset-1 bg-gradient-to-r ${c.gradientPrimary} rounded-lg blur opacity-20 group-hover:opacity-40 transition`})]}),r.jsx("span",{className:"font-semibold text-lg",children:"NF Software"})]}),r.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[r.jsx(de,{to:"/about",className:`text-sm ${x("/about")?c.text+" font-medium":c.textSecondary+" hover:"+c.text} transition`,children:"About"}),r.jsx(de,{to:"/products",className:`text-sm ${x("/products")?c.text+" font-medium":c.textSecondary+" hover:"+c.text} transition`,children:"Products"}),r.jsx(de,{to:"/pricing",className:`text-sm ${x("/pricing")?c.text+" font-medium":c.textSecondary+" hover:"+c.text} transition`,children:"Pricing"}),r.jsx(de,{to:"/blog",className:`text-sm ${x("/blog")?c.text+" font-medium":c.textSecondary+" hover:"+c.text} transition`,children:"Blog"}),r.jsx(de,{to:"/contact",className:`text-sm ${x("/contact")?c.text+" font-medium":c.textSecondary+" hover:"+c.text} transition`,children:"Start"}),r.jsx("button",{onClick:s,className:`p-2 rounded-full ${c.bgButton} transition ${c.hoverBg}`,"aria-label":"Toggle theme",children:o?r.jsx(nd,{className:"w-4 h-4"}):r.jsx(ed,{className:"w-4 h-4"})}),r.jsx("a",{href:"mailto:contact@nf-software.com",className:`px-6 py-2.5 ${c.bgPrimary} ${c.textPrimary} rounded-full text-sm font-medium hover:opacity-90 transition transform hover:scale-105`,children:"Contact"})]}),r.jsx("button",{onClick:()=>d(!m),className:"md:hidden p-2","aria-label":"Toggle menu",children:m?r.jsx(Ad,{className:"w-6 h-6"}):r.jsx(v0,{className:"w-6 h-6"})})]}),m&&r.jsx("div",{className:`md:hidden ${c.cardBg} border-t ${c.border}`,children:r.jsxs("div",{className:"px-6 py-4 space-y-4",children:[r.jsx(de,{to:"/about",className:`block text-sm ${c.textSecondary}`,onClick:()=>d(!1),children:"About"}),r.jsx(de,{to:"/products",className:`block text-sm ${c.textSecondary}`,onClick:()=>d(!1),children:"Products"}),r.jsx(de,{to:"/pricing",className:`block text-sm ${c.textSecondary}`,onClick:()=>d(!1),children:"Pricing"}),r.jsx(de,{to:"/blog",className:`block text-sm ${c.textSecondary}`,onClick:()=>d(!1),children:"Blog"}),r.jsx(de,{to:"/contact",className:`block text-sm ${c.textSecondary}`,onClick:()=>d(!1),children:"Start"}),r.jsx("button",{onClick:s,className:`p-2 rounded-full ${c.bgButton} transition ${c.hoverBg}`,"aria-label":"Toggle theme",children:o?r.jsx(nd,{className:"w-4 h-4"}):r.jsx(ed,{className:"w-4 h-4"})}),r.jsx("a",{href:"mailto:contact@nf-software.com",className:`block w-full text-center px-6 py-2.5 ${c.bgPrimary} ${c.textPrimary} rounded-full text-sm font-medium`,children:"Contact"})]})})]})},Z0="#181717",Vt=$.forwardRef(function({title:s="GitHub",color:c="currentColor",size:m=24,...d},f){return c==="default"&&(c=Z0),r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:m,height:m,fill:c,viewBox:"0 0 24 24",ref:f,...d,children:[r.jsx("title",{children:s}),r.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}),X0="#FF0069",ex=$.forwardRef(function({title:s="Instagram",color:c="currentColor",size:m=24,...d},f){return c==="default"&&(c=X0),r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:m,height:m,fill:c,viewBox:"0 0 24 24",ref:f,...d,children:[r.jsx("title",{children:s}),r.jsx("path",{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"})]})}),tx=({theme:o})=>{const s={products:["Iris","Sysmon-CLI","Zvezda","CodeGrep"],company:[{label:"About",href:"/about"},{label:"Products",href:"/products"},{label:"Pricing",href:"/pricing"},{label:"Blog",href:"/blog"},{label:"Start Your Project",href:"/contact"}]};return r.jsx("footer",{className:`border-t ${o.border} py-12 px-6`,children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-12 mb-12",children:[r.jsxs("div",{className:"md:col-span-2 space-y-4",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx($t,{className:"w-6 h-6"}),r.jsx("span",{className:"font-semibold text-lg",children:"NF Software"})]}),r.jsx("p",{className:`${o.textSecondary} text-sm max-w-md`,children:"Building the future of software, one line of code at a time. Trusted by developers and enterprises worldwide."}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("a",{href:"https://github.com/NoamFav",target:"_blank",rel:"noopener noreferrer",className:`${o.textSecondary} hover:${o.text} transition`,"aria-label":"GitHub",children:r.jsx(Vt,{className:"w-5 h-5"})}),r.jsx("a",{href:"mailto:contact@nf-software.com",className:`${o.textSecondary} hover:${o.text} transition`,"aria-label":"Email",children:r.jsx(ot,{className:"w-5 h-5"})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:`font-semibold ${o.text} mb-4`,children:"Products"}),r.jsx("ul",{className:"space-y-2",children:s.products.map(c=>r.jsx("li",{children:r.jsx(de,{to:`/products#${c.toLowerCase()}`,className:`text-sm ${o.textSecondary} hover:${o.text} transition`,children:c})},c))})]}),r.jsxs("div",{children:[r.jsx("h3",{className:`font-semibold ${o.text} mb-4`,children:"Company"}),r.jsx("ul",{className:"space-y-2",children:s.company.map(c=>r.jsx("li",{children:r.jsx(de,{to:c.href,className:`text-sm ${o.textSecondary} hover:${o.text} transition`,children:c.label})},c.label))})]})]}),r.jsxs("div",{className:`border-t ${o.border} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`,children:[r.jsx("div",{className:`text-sm ${o.textTertiary}`,children:"© 2025 NF Software. All rights reserved."}),r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsx(de,{to:"/privacy",className:`text-sm ${o.textSecondary} hover:${o.text} transition`,children:"Privacy Policy"}),r.jsx(de,{to:"/terms",className:`text-sm ${o.textSecondary} hover:${o.text} transition`,children:"Terms of Service"})]})]})]})})},gt=()=>$.useContext(bd),nx=()=>{$.useEffect(()=>{let o=0;const s=c=>{cancelAnimationFrame(o),o=requestAnimationFrame(()=>{document.documentElement.style.setProperty("--mx",`${c.clientX}px`),document.documentElement.style.setProperty("--my",`${c.clientY}px`)})};return window.addEventListener("mousemove",s,{passive:!0}),()=>{cancelAnimationFrame(o),window.removeEventListener("mousemove",s)}},[])},rx=()=>{const o=Et(),{darkMode:s}=gt();$.useEffect(()=>{const c=setTimeout(()=>{const m=document.querySelectorAll("[data-animate]");if(!m.length)return;m.forEach(f=>{f.classList.remove("is-visible")});const d=new IntersectionObserver(f=>{for(const x of f)x.isIntersecting&&x.target.classList.add("is-visible")},{threshold:.1,rootMargin:"0px 0px -10% 0px"});return m.forEach(f=>d.observe(f)),()=>d.disconnect()},50);return()=>clearTimeout(c)},[o.pathname,s])},_t=o=>({bg:o?"bg-black":"bg-zinc-50",cardBg:o?"bg-gray-900":"bg-white shadow-sm ring-1 ring-black/5",navBg:o?"bg-black/80":"bg-white/80",hoverBg:o?"hover:bg-gray-800":"hover:bg-black/5",text:o?"text-white":"text-gray-700",textSecondary:o?"text-gray-400":"text-gray-600",textTertiary:"text-gray-500",border:o?"border-gray-800":"border-black/10",bgInput:o?"bg-black":"bg-white",bgButton:o?"bg-gray-800":"bg-gray-100",borderButton:o?"border-gray-700":"border-black/10",bgPrimary:o?"bg-white":"bg-neutral-900",textPrimary:o?"text-black":"text-white",blobBlue:"bg-blue-500",blobPurple:"bg-purple-500",blobPink:"bg-pink-500",textBlue:"text-blue-500",cursorGlow:o?"rgba(99,102,241,.15)":"rgba(99,102,241,.08)",gradientPrimary:"from-blue-500 to-purple-500",ligthGradientPrimary:"from-blue-500/20 to-purple-500/20",lightGradient:"from-blue-400 to-purple-400",gradientSecondary:"from-purple-500 to-pink-500",gradientAccent:"from-blue-500 via-purple-500 to-pink-500",lightGradientAccent:"from-blue-400 via-purple-400 to-pink-400",gradientThirdary:"from-purple-400 to-pink-400",gradientQuaterly:"from-pink-400 to-orange-400",gradientQuintly:"from-orange-400 to-red-400",badgeGradient:"from-blue-500/10 to-purple-500/10",secondBadgeGradient:"from-blue-500/5 to-purple-500/5",selectBg:o?"bg-black":"bg-white",hoverBorder:o?"hover:border-gray-600":"hover:border-gray-300"});function ax(){const{pathname:o,hash:s}=Et();return $.useEffect(()=>{s||window.scrollTo({top:0,behavior:"smooth"})},[o,s]),null}const sx=({children:o})=>{const{darkMode:s,toggleDarkMode:c}=gt(),m=_t(s);return nx(),rx(),r.jsxs("div",{className:`${m.bg} ${m.text} transition-colors duration-500 overflow-hidden`,children:[r.jsx("div",{className:"fixed w-96 h-96 rounded-full pointer-events-none z-50 transition-opacity duration-300",style:{left:"calc(var(--mx) - 192px)",top:"calc(var(--my) - 192px)",background:`radial-gradient(circle, ${s?"rgba(99,102,241,.15)":"rgba(99,102,241,.08)"} 0%, transparent 70%)`}}),r.jsx(ax,{}),r.jsx(J0,{darkMode:s,toggleDarkMode:c,theme:m}),r.jsx("main",{children:o}),r.jsx(tx,{theme:m}),r.jsx("style",{children:`
                @keyframes gradient {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    25% {
                        transform: translate(20px, -50px) scale(1.1);
                    }
                    50% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    75% {
                        transform: translate(50px, 50px) scale(1.05);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }

                .animation-delay-200 {
                    animation-delay: 0.2s;
                    animation-fill-mode: backwards;
                }

                .animation-delay-400 {
                    animation-delay: 0.4s;
                    animation-fill-mode: backwards;
                }

                .animation-delay-600 {
                    animation-delay: 0.6s;
                    animation-fill-mode: backwards;
                }

                /* FIXED: Don't hide elements initially */
                [data-animate] {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                /* Only apply hiding when not visible yet */
                [data-animate]:not(.is-visible) {
                    opacity: 0;
                    transform: translateY(30px);
                }

                [data-animate].is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }

                    [data-animate] {
                        opacity: 1 !important;
                        transform: none !important;
                    }
                }
            `})]})};var Md={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rd=Fe.createContext&&Fe.createContext(Md),lx=["attr","size","title"];function ix(o,s){if(o==null)return{};var c=ox(o,s),m,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);for(d=0;d<f.length;d++)m=f[d],!(s.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(o,m)&&(c[m]=o[m])}return c}function ox(o,s){if(o==null)return{};var c={};for(var m in o)if(Object.prototype.hasOwnProperty.call(o,m)){if(s.indexOf(m)>=0)continue;c[m]=o[m]}return c}function ws(){return ws=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var c=arguments[s];for(var m in c)Object.prototype.hasOwnProperty.call(c,m)&&(o[m]=c[m])}return o},ws.apply(this,arguments)}function ad(o,s){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(o);s&&(m=m.filter(function(d){return Object.getOwnPropertyDescriptor(o,d).enumerable})),c.push.apply(c,m)}return c}function bs(o){for(var s=1;s<arguments.length;s++){var c=arguments[s]!=null?arguments[s]:{};s%2?ad(Object(c),!0).forEach(function(m){cx(o,m,c[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):ad(Object(c)).forEach(function(m){Object.defineProperty(o,m,Object.getOwnPropertyDescriptor(c,m))})}return o}function cx(o,s,c){return s=ux(s),s in o?Object.defineProperty(o,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[s]=c,o}function ux(o){var s=dx(o,"string");return typeof s=="symbol"?s:s+""}function dx(o,s){if(typeof o!="object"||!o)return o;var c=o[Symbol.toPrimitive];if(c!==void 0){var m=c.call(o,s);if(typeof m!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(o)}function zd(o){return o&&o.map((s,c)=>Fe.createElement(s.tag,bs({key:c},s.attr),zd(s.child)))}function mx(o){return s=>Fe.createElement(fx,ws({attr:bs({},o.attr)},s),zd(o.child))}function fx(o){var s=c=>{var{attr:m,size:d,title:f}=o,x=ix(o,lx),p=d||c.size||"1em",y;return c.className&&(y=c.className),o.className&&(y=(y?y+" ":"")+o.className),Fe.createElement("svg",ws({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,m,x,{className:y,style:bs(bs({color:o.color||c.color},c.style),o.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),f&&Fe.createElement("title",null,f),o.children)};return rd!==void 0?Fe.createElement(rd.Consumer,null,c=>s(c)):s(Md)}function px(o){return mx({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}const sd=o=>o.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),ar=[{id:"dev",slug:"dev",name:"NF Dev Suite",tagline:"Complete developer automation toolkit",description:"Full developer automation toolkit integrating all Git, repo, and productivity utilities.",gradient:"from-blue-500 to-cyan-500",icon:"Code",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",plans:{individual:{annual:39,oneTime:129,skuAnnual:"suite_dev_annual_001",skuOneTime:"suite_dev_onetime_001"},professional:{annual:59,seats:1,sku:"suite_dev_professional_001"},enterprise:{annual:249,seats:5,sku:"suite_dev_enterprise_001"}},tools:[{name:"auto-commit",slug:"auto-commit",tagline:"AI-Powered Git Automation",description:"High-performance automation tool managing commits, pushes, and repository cleanup with AI-generated conventional commit messages.",features:["AI commit messages - Context-aware and consistent","Batch operations - Multi-repo support","Zvezda integration - Seamless workflow"],tech:["Go","Python","OpenAI API"],status:"Beta",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:9,oneTime:19,skuAnnual:"tool_auto-commit_annual_001",skuOneTime:"tool_auto-commit_onetime_001"},github:!1},{name:"zvezda",slug:"zvezda",tagline:"Visual DevOps CLI",description:"Modern terminal interface built on Charm stack providing real-time repository analytics and interactive dashboards.",features:["Terminal UI - Beautiful Bubble Tea interface","Repo analytics - Real-time insights","GitHub integration - Native API support"],tech:["Go","Bubble Tea","Lipgloss"],status:"Alpha",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:12,oneTime:29,skuAnnual:"tool_zvezda_annual_001",skuOneTime:"tool_zvezda_onetime_001"},github:!1},{name:"repoops",slug:"repoops",tagline:"Repository Orchestration Suite",description:"Advanced CLI for large-scale repository management with automated scanning, pruning, and analytics.",features:["Multi-repo management - Unified control","Batch operations - Automated workflows","Health analytics - Code quality insights"],tech:["Go","GitHub API","SQLite"],status:"In Development",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:10,oneTime:24,skuAnnual:"tool_repoops_annual_001",skuOneTime:"tool_repoops_onetime_001"},github:!1},{name:"CodeGrep",slug:"code-grep",tagline:"Syntax-Aware Code Search",description:"High-performance code search using Tree-sitter for syntax-aware, context-rich code discovery.",features:["AST parsing - Understands code structure","Multi-language - Supports 40+ languages","Fast indexing - 100K+ files in seconds"],tech:["Rust","Tree-sitter","Regex"],status:"In Development",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:7,oneTime:15,skuAnnual:"tool_code-grep_annual_001",skuOneTime:"tool_code-grep_onetime_001"},github:!1},{name:"NFvim Suite",slug:"nfvim-suite",tagline:"Neovim Workflow Environment",description:"Curated Neovim setup with custom plugins including Apple Music control and Cyberpunk theme.",features:["Open Source","LSP integration - Full language support","Custom plugins - apple_music.nvim & 2077 theme","Optimized config - Professional workflow"],tech:["Lua","VimScript","Tree-sitter"],status:"Live",license:{devices:1,offlineActivation:!0,upgradeDiscount:1},plan:{annual:0,oneTime:0,skuAnnual:"tool_nfvim-suite_annual_001",skuOneTime:"tool_nfvim-suite_onetime_001"},github:!0}]},{id:"sys",slug:"sys",name:"NF Sys Suite",tagline:"System telemetry and visualization",description:"Real-time system telemetry, dashboards, and network visualization for performance monitoring.",gradient:"from-purple-500 to-pink-500",icon:"Cpu",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",plans:{individual:{annual:29,oneTime:99,skuAnnual:"suite_sys_annual_001",skuOneTime:"suite_sys_onetime_001"},professional:{annual:49,seats:1,sku:"suite_sys_professional_001"},enterprise:{annual:199,seats:5,sku:"suite_sys_enterprise_001"}},tools:[{name:"Sysmon-CLI",slug:"sysmon-cli",tagline:"Terminal System Monitor",description:"Cross-platform command-line system monitor with minimal overhead and maximum insight.",features:["Real-time metrics - CPU, RAM, disk, network","Low overhead - Less than 1% CPU usage","Cross-platform - Linux, macOS, Windows, BSD"],tech:["C","POSIX","IOKit","procfs"],status:"Alpha",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:7,oneTime:15,skuAnnual:"tool_sysmon-cli_annual_001",skuOneTime:"tool_sysmon-cli_onetime_001"},github:!1},{name:"SysDash Ultra",slug:"sysdash-ultra",tagline:"Intelligent Performance Dashboard",description:"Graphical monitoring suite with predictive analytics and interactive visualizations.",features:["Predictive analytics - AI-powered alerts","Real-time charts - Interactive dashboards","GPU metrics - Complete system view"],tech:["Rust","SwiftUI","WebGL"],status:"In Development",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:12,oneTime:25,skuAnnual:"tool_sysdash-ultra_annual_001",skuOneTime:"tool_sysdash-ultra_onetime_001"},github:!1},{name:"NetViz Pro",slug:"netviz-pro",tagline:"Network Visualization Platform",description:"3D network analysis tool transforming traffic data into visual maps with anomaly detection.",features:["3D visualization - WebGL-powered maps","Packet inspection - Deep protocol analysis","Anomaly detection - ML-based alerts"],tech:["Rust","libpcap","BPF","WebGL"],status:"In Development",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:14,oneTime:29,skuAnnual:"tool_netviz-pro_annual_001",skuOneTime:"tool_netviz-pro_onetime_001"},github:!1}]},{id:"iris",slug:"iris",name:"NF Iris Suite",tagline:"Local-first AI platform",description:"AI assistant platform with local voice, contextual memory, and modular agents - fully offline.",gradient:"from-indigo-500 to-purple-500",icon:"Brain",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",plans:{individual:{annual:49,oneTime:149,skuAnnual:"suite_iris_annual_001",skuOneTime:"suite_iris_onetime_001"},professional:{annual:69,seats:1,sku:"suite_iris_professional_001"},enterprise:{annual:299,seats:5,sku:"suite_iris_enterprise_001"}},tools:[{name:"Iris Core",slug:"iris-core",tagline:"Local-First AI Assistant",description:"Multimodal assistant with speech recognition, NLU, and agent-based automation - operates fully offline.",features:["Offline operation - Complete privacy","Voice control - Whisper.cpp & Coqui TTS","Contextual memory - Learns your workflow"],tech:["Rust","Go","Whisper.cpp","Coqui TTS"],status:"Alpha",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:19,oneTime:39,skuAnnual:"tool_iris-core_annual_001",skuOneTime:"tool_iris-core_onetime_001"},github:!1},{name:"Iris Voice CLI",slug:"iris-voice-cli",tagline:"Push-to-Talk AI Interface",description:"Lightweight CLI enabling real-time voice communication with Iris using hotkey activation.",features:["Hotkey activation - Instant access","Local ASR - Privacy-first transcription","Developer integration - Terminal-native"],tech:["Rust"],status:"Alpha",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:12,oneTime:25,skuAnnual:"tool_iris-voice-cli_annual_001",skuOneTime:"tool_iris-voice-cli_onetime_001"},github:!1},{name:"Iris Factory",slug:"iris-factory",tagline:"Agent Generation Framework",description:"Dynamic agent creation system enabling Iris to self-assemble new capabilities as needed.",features:["Dynamic agents - Self-generating tasks","Task automation - Autonomous execution","Extensible - Custom agent creation"],tech:["Go"],status:"In Development",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:9,oneTime:19,skuAnnual:"tool_iris-factory_annual_001",skuOneTime:"tool_iris-factory_onetime_001"},github:!1},{name:"Iris Memory",slug:"iris-memory",tagline:"Graph-Based Context Database",description:"Hybrid database storing interconnected data about user habits and preferences.",features:["Graph database - Connected knowledge","Context recall - Session continuity","User adaptation - Personalized AI"],tech:["MongoDB","Go"],status:"Testing",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:9,oneTime:19,skuAnnual:"tool_iris-memory_annual_001",skuOneTime:"tool_iris-memory_onetime_001"},github:!1}]},{id:"lab",slug:"lab",name:"NF Lab Suite",tagline:"Experimental tools and learning platforms",description:"Experimental and educational tools for learning, visualization, and research.",gradient:"from-emerald-500 to-teal-500",icon:"GraduationCap",image:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80",plans:{individual:{annual:19,oneTime:59,skuAnnual:"suite_lab_annual_001",skuOneTime:"suite_lab_onetime_001"},professional:{annual:29,seats:1,sku:"suite_lab_professional_001"},enterprise:{annual:149,seats:5,sku:"suite_lab_enterprise_001"}},tools:[{name:"BitVoyager",slug:"bitvoyager",tagline:"Gamified Coding Platform",description:"Browser-based learning platform with XP-based progression and interactive coding challenges.",features:["XP progression - Gamified learning","Interactive terminal - Real coding practice","Multi-paradigm - Multiple languages supported"],tech:["TypeScript","Rust","WebAssembly","xterm.js"],status:"Beta",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:6,oneTime:14,skuAnnual:"tool_bitvoyager_annual_001",skuOneTime:"tool_bitvoyager_onetime_001"},github:!1},{name:"WorkTime",slug:"worktime",tagline:"Intelligent Productivity Tracker",description:"iOS app automatically tracking productive time through app usage and motion data analysis.",features:["Auto-tracking - Passive monitoring","Analytics - Detailed insights","Screen Time API - Native integration"],tech:["Swift","SwiftUI","CoreData"],status:"In Development",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:4,oneTime:9,skuAnnual:"tool_worktime_annual_001",skuOneTime:"tool_worktime_onetime_001"},github:!1},{name:"GymBuddy",slug:"gymbuddy",tagline:"Your Smart Gym Knowledge Coach",description:"iOS app that helps you master fitness fundamentals through adaptive quizzes, exercise facts, and intelligent spaced repetition.",features:["Adaptive Quizzes – Difficulty adjusts to your level","Exercise Library – Facts, cues, and common mistakes","Spaced Repetition – Long-term retention system"],tech:["Swift","SwiftUI","CoreData"],status:"Alpha",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:5,oneTime:10,skuAnnual:"tool_gymbuddy_annual_001",skuOneTime:"tool_gymbuddy_onetime_001"},github:!1}]}],ys=[{name:"AutoSort",slug:"autosort",tagline:"Automated File Organization",description:"Background service continuously monitoring and organizing files with OCR recognition and intelligent renaming.",features:["Auto-organization - Rule-based sorting","OCR renaming - Intelligent file naming","Metadata extraction - Smart categorization"],tech:["Go","fsnotify","YAML","Tesseract OCR"],status:"Alpha",gradient:"from-orange-500 to-red-500",icon:"FolderTree",license:{devices:1,offlineActivation:!0,upgradeDiscount:.4},plan:{annual:5,oneTime:12,skuAnnual:"tool_autosort_annual_001",skuOneTime:"tool_autosort_onetime_001"},github:!1}];ar.flatMap(o=>o.tools.map(s=>{var d,f,x,p;const c=((f=(d=o.plans)==null?void 0:d.individual)==null?void 0:f.annual)??null,m=((p=(x=o.plans)==null?void 0:x.individual)==null?void 0:p.oneTime)??null;return{...s,slug:s.slug??sd(s.name),suite:o.name,suiteId:o.id,suiteSlug:o.slug??sd(o.name),suiteGradient:o.gradient,image:o.image,suitePricing:{annual:c,oneTime:m},plan:s.plan??null,license:s.license??{devices:1,offlineActivation:!0,upgradeDiscount:.4}}}));const hx=()=>{const{darkMode:o}=gt(),s=_t(o),[c,m]=Fe.useState(0),d="polygon(60% 0, 100% 0, 100% 100%, 50% 100%)",f="polygon(0 0, 40% 0, 50% 100%, 0 100%)";Fe.useEffect(()=>{const p=()=>m(window.scrollY);return window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[]);const x=[{label:"Projects Delivered",value:"10+",icon:td},{label:"Lines of Code",value:"100K+",icon:$t},{label:"Active Users",value:"20+",icon:ks},{label:"GitHub Stars",value:"20+",icon:gs}];return r.jsxs(r.Fragment,{children:[r.jsxs("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center px-6 pt-20",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:`radial-gradient(circle at 50% 50%, ${o?"rgba(99, 102, 241, 0.15)":"rgba(99, 102, 241, 0.08)"}, transparent 50%)`}}),r.jsx("div",{className:`absolute top-1/4 left-1/4 w-96 h-96 ${s.blobBlue} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}),r.jsx("div",{className:`absolute top-1/3 right-1/4 w-96 h-96 ${s.blobPurple} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}),r.jsx("div",{className:`absolute bottom-1/4 left-1/2 w-96 h-96 ${s.blobPink} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 `})]}),r.jsxs("div",{className:"max-w-5xl mx-auto text-center space-y-8 relative z-10",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${s.badgeGradient} rounded-full border ${s.blobBlue}/20 mb-6 animate-fade-in`,children:[r.jsx(Mt,{className:`w-4 h-4 ${s.textBlue} animate-pulse`}),r.jsx("span",{className:"text-sm font-medium",children:"Innovating Software Solutions Since 2023"})]}),r.jsxs("h1",{className:`text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight ${s.text} animate-fade-in-up`,children:["We build tools",r.jsx("br",{}),r.jsx("span",{className:`bg-gradient-to-r ${s.gradientAccent} bg-clip-text text-transparent animate-gradient`,children:"that matter"})]}),r.jsx("p",{className:`text-xl md:text-2xl ${s.textSecondary} max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200`,children:"Custom tooling, automation systems, and local-first workflows — built for developers, teams, and research groups who care about quality."}),r.jsxs("div",{className:"flex flex-wrap gap-4 justify-center pt-8 animate-fade-in-up animation-delay-400",children:[r.jsxs(de,{to:"/products",className:`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105`,children:["Explore Products",r.jsx(ht,{className:"w-5 h-5"})]}),r.jsxs("a",{href:"https://github.com/NoamFav",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-8 py-4 ${s.bgButton} border ${s.borderButton} border font-semibold rounded-full hover:border-gray-400 transition-all duration-300 transform hover:scale-105`,children:[r.jsx(Vt,{className:"w-5 h-5"}),"View on GitHub"]})]}),r.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8 pt-12 animate-fade-in animation-delay-600",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Cn,{className:"w-5 h-5 text-green-500"}),r.jsx("span",{className:`text-sm ${s.textSecondary}`,children:"Trusted by 10+ teams"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(gs,{className:"w-5 h-5 text-yellow-500"}),r.jsx("span",{className:`text-sm ${s.textSecondary}`,children:"20+ GitHub stars"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx($h,{className:"w-5 h-5 text-blue-500"}),r.jsx("span",{className:`text-sm ${s.textSecondary}`,children:"Award-winning design"})]})]})]}),r.jsx("div",{className:"absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce",children:r.jsx("div",{className:`w-6 h-10 rounded-full border-2 ${s.border} flex items-start justify-center p-2`,children:r.jsx("div",{className:`w-1.5 h-1.5 ${s.bgPrimary} rounded-full animate-pulse`})})})]}),r.jsx("section",{id:"about","data-animate":!0,className:"relative py-32 px-6",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"text-center space-y-6 mb-20",children:[r.jsx("h2",{className:`text-5xl md:text-6xl font-bold ${s.text}`,children:"Innovation at Scale"}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-3xl mx-auto`,children:"We combine cutting-edge technology with elegant design to create software that doesn't just work—it excels."})]}),r.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:x.map((p,y)=>r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-8 text-center border ${s.border} hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`,style:{animationDelay:`${y*100}ms`},children:[r.jsx(p.icon,{className:"w-12 h-12 mx-auto mb-4 text-blue-500"}),r.jsx("div",{className:`text-4xl font-bold ${s.text} mb-2`,children:p.value}),r.jsx("div",{className:`text-sm ${s.textSecondary}`,children:p.label})]},p.label))})]})}),r.jsxs("section",{id:"products",className:"relative",children:[r.jsxs("div",{className:"text-center py-20 px-6",children:[r.jsx("h2",{className:`text-5xl md:text-6xl font-bold ${s.text} mb-6`,children:"Our Products"}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-2xl mx-auto`,children:"Each product is crafted with precision, designed for performance, and built to last."})]}),ar.map((p,y)=>r.jsxs("div",{className:"relative",children:[r.jsxs("section",{id:p.id,className:"relative min-h-[60vh] flex items-center overflow-hidden","data-animate":!0,children:[r.jsxs("div",{className:"absolute inset-0",children:[r.jsx("img",{src:p.image,alt:"","aria-hidden":"true",decoding:"async",fetchpriority:y===0?"high":void 0,loading:y===0?void 0:"lazy",sizes:"(min-width: 1024px) 100vw, 100vw",className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute inset-0 bg-black/40"})]}),r.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 py-20",children:[r.jsx("div",{className:`inline-block px-4 py-1 bg-gradient-to-r rounded-full text-white text-sm font-semibold
                        from-gray-900/40 to-gray-900/20 border border-white/10 backdrop-blur`,children:"Suite"}),r.jsx("h2",{className:"mt-4 text-4xl md:text-5xl font-bold text-white",children:p.name}),r.jsx("p",{className:"mt-3 text-lg max-w-2xl text-gray-600",children:p.tagline}),r.jsx("p",{className:"mt-1 text-base max-w-3xl text-gray-600",children:p.description})]})]}),((p==null?void 0:p.tools)??[]).slice(0,3).map((g,N)=>{const P=(y*100+N)%2===0,O=P?d:f,_=`${p.id}-${((g==null?void 0:g.name)??"tool").toLowerCase().replace(/\s+/g,"-")}`;return r.jsxs("section",{id:_,"data-animate":!0,className:"relative min-h-screen flex items-center overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:r.jsxs("div",{className:"absolute inset-0 will-change-[clip-path]",style:{clipPath:O},children:[r.jsx("img",{src:p.image,alt:"","aria-hidden":"true",decoding:"async",loading:"lazy",sizes:"(min-width: 1024px) 100vw, 100vw",className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"})]})}),r.jsxs("div",{className:`relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full ${P?"":"lg:flex-row-reverse"}`,children:[r.jsxs("div",{className:`space-y-8 ${P?"lg:pr-16":"lg:pl-16 lg:order-2"}`,children:[r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[r.jsx("div",{className:`inline-block px-4 py-1 bg-gradient-to-r ${p.gradient} rounded-full text-white text-sm font-semibold`,children:g==null?void 0:g.name}),r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium border ${s.textSecondary} ${s.cardBg} ${s.border}`,children:g==null?void 0:g.status}),r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium border ${s.textSecondary} ${s.cardBg} ${s.border}`,children:p.name})]}),r.jsx("h3",{className:`text-4xl md:text-5xl font-bold ${s.text} leading-tight`,children:g==null?void 0:g.tagline}),r.jsx("p",{className:`text-lg ${s.textSecondary} leading-relaxed`,children:g==null?void 0:g.description})]}),r.jsx("div",{className:"space-y-3",children:((g==null?void 0:g.features)??[]).map((L,M)=>r.jsxs("div",{className:"flex items-center gap-3 group",children:[r.jsxs("div",{className:`w-8 h-8 rounded-full bg-gradient-to-r ${p.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`,children:[M===0&&r.jsx(Oi,{className:"w-4 h-4 text-white"}),M===1&&r.jsx(rr,{className:"w-4 h-4 text-white"}),M===2&&r.jsx(zi,{className:"w-4 h-4 text-white"})]}),r.jsx("span",{className:`text-base font-medium ${s.text}`,children:L})]},M))}),r.jsx("div",{className:"flex flex-wrap gap-2",children:((g==null?void 0:g.tech)??[]).map(L=>r.jsx("span",{className:`px-3 py-1 ${s.cardBg} rounded-lg text-sm ${s.textSecondary} border ${s.border}`,children:L},L))}),r.jsx("div",{className:"flex flex-wrap gap-4 pt-4",children:(g==null?void 0:g.status)==="Live"?r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${p.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`,children:[r.jsx(Cd,{className:"w-5 h-5"}),"Download"]}),r.jsxs("button",{className:`inline-flex items-center gap-2 px-6 py-3 ${s.cardBg} border ${s.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`,children:["Learn More",r.jsx(ht,{className:"w-5 h-5"})]}),(g==null?void 0:g.github)&&r.jsxs("a",{href:`https://github.com/NoamFav/${g.name}`,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-6 py-3 ${s.cardBg} border ${s.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`,children:["GitHub",r.jsx(ht,{className:"w-5 h-5"})]})]}):(g==null?void 0:g.status)==="Beta"?r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${p.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105`,children:[r.jsx(gs,{className:"w-5 h-5"}),"Join Beta"]}),r.jsxs("button",{className:`inline-flex items-center gap-2 px-6 py-3 ${s.cardBg} border ${s.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`,children:["Learn More",r.jsx(ht,{className:"w-5 h-5"})]}),(g==null?void 0:g.github)&&r.jsxs("a",{href:`https://github.com/NoamFav/${g.name}`,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-6 py-3 ${s.cardBg} border ${s.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300`,children:["GitHub",r.jsx(ht,{className:"w-5 h-5"})]})]}):r.jsxs("button",{className:`inline-flex items-center gap-2 px-6 py-3 ${s.cardBg} border ${s.border} font-semibold rounded-full cursor-default opacity-75`,children:[r.jsx(Mt,{className:"w-5 h-5"}),"Coming Soon"]})})]}),r.jsx("div",{className:`hidden lg:block ${P?"lg:pl-16":"lg:pr-16 lg:order-1"}`})]})]},`${p.id}-${g==null?void 0:g.name}`)})]},p.id))]}),r.jsx("section",{id:"cta",className:"relative py-32 px-6",children:r.jsx("div",{className:"max-w-5xl mx-auto",children:r.jsxs("div",{className:`${s.cardBg} rounded-3xl p-12 md:p-20 text-center space-y-8 border ${s.border} relative overflow-hidden`,children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 2px 2px, ${o?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"} 1px, transparent 0)`,backgroundSize:"32px 32px"}})}),r.jsxs("div",{className:"relative z-10",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6",children:[r.jsx(td,{className:"w-4 h-4 text-blue-500"}),r.jsx("span",{className:"text-sm font-medium",children:"Let's Build Together"})]}),r.jsx("h2",{className:`text-4xl md:text-6xl font-bold ${s.text} mb-6`,children:"Ready to innovate?"}),r.jsx("p",{className:`text-lg md:text-xl ${s.textSecondary} max-w-2xl mx-auto mb-8`,children:"Let's collaborate on building exceptional software solutions that push boundaries and create lasting impact."}),r.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[r.jsxs(de,{to:"/contact",className:`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105`,children:[r.jsx(ot,{className:"w-5 h-5"}),"Start Your Project"]}),r.jsxs("a",{href:"https://github.com/NoamFav",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-8 py-4 ${s.cardBg} border ${s.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`,children:[r.jsx(Vt,{className:"w-5 h-5"}),"Explore Projects"]})]}),r.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-6 pt-12",children:[r.jsxs("a",{href:"https://github.com/NoamFav",target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 ${s.textSecondary} hover:${s.text} transition`,"aria-label":"GitHub",children:[r.jsx(Vt,{className:"w-5 h-5"}),r.jsx("span",{className:"text-sm",children:"GitHub"})]}),r.jsxs("a",{href:"www.linkedin.com/in/NoamFav",target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 ${s.textSecondary} hover:${s.text} transition`,"aria-label":"LinkedIn",children:[r.jsx(px,{className:"w-5 h-5"}),r.jsx("span",{className:"text-sm",children:"LinkedIn"})]}),r.jsxs("a",{href:"https://www.instagram.com/noamfav/",target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 ${s.textSecondary} hover:${s.text} transition`,"aria-label":"Instagram",children:[r.jsx(ex,{className:"w-5 h-5"}),r.jsx("span",{className:"text-sm",children:"Instagram"})]}),r.jsxs("a",{href:"mailto:contact@nf-software.com",className:`flex items-center gap-2 ${s.textSecondary} hover:${s.text} transition`,children:[r.jsx(ot,{className:"w-5 h-5"}),r.jsx("span",{className:"text-sm",children:"Email"})]})]})]})]})})}),c>500&&r.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`fixed bottom-8 right-8 p-4 ${s.bgPrimary} ${s.textPrimary} rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50`,"aria-label":"Scroll to top",children:r.jsx(na,{className:"w-6 h-6 -rotate-90"})})]})},xx=[{label:"Open Source Projects",value:"10+"},{label:"GitHub Stars",value:"20+"},{label:"Active Users",value:"20+"},{label:"Years Building",value:"2+"}],gx=[{year:"2023",title:"First Experiments",description:"Began exploring developer tooling, productivity workflows, and local-first software ideas."},{year:"2023",title:"NFvim Suite",description:"Released a personal Neovim workflow that later evolved into the NFvim Suite."},{year:"2024",title:"NF Software Identity",description:"Defined the NF Software vision: fast, minimal, privacy-first tools that feel good to use."},{year:"2024",title:"Zvezda / CodeGrep Prototypes",description:"Built early prototypes for visual repository analytics (Zvezda) and syntax-aware code search (CodeGrep)."},{year:"2024",title:"Iris Research",description:"Started experimenting with local voice interfaces, Whisper.cpp, and contextual memory systems."},{year:"2025",title:"Website & Public Launch",description:"Rolled out nf-software.com with clear product suites, pricing, contact, licensing, and brand identity."},{year:"2025",title:"auto-commit Beta",description:"Released auto-commit in beta: AI-assisted conventional commits and multi-repo automation."},{year:"2025",title:"BitVoyager Beta",description:"Launched BitVoyager early beta: gamified terminal-based learning environment."},{year:"2025",title:"Building Forward",description:"Continued development on Zvezda, RepoOps, Sysmon-CLI, SysDash Ultra, NetViz Pro, and the Iris suite."}],yx=[{title:"Privacy by Default",description:"Your data stays on your machine. Local-first whenever possible. No tracking. No analytics. No hidden collection."},{title:"Performance Matters",description:"Software should be fast. We measure, profile, and optimize until interactions feel instantaneous."},{title:"Craft Over Scale",description:"Small, focused tools that excel at their purpose. Precision is more valuable than features."},{title:"Open by Design",description:"Transparency builds trust. We build in public, document decisions, and encourage contribution."},{title:"AI as Augmentation",description:"AI should extend human ability — not replace it. Intelligence is a tool, not the driver."}],vx=[{title:"Research",description:"Start with the real use case. Understand workflows, constraints, and what actually matters — not just what could be built."},{title:"Prototype",description:"Build small and prove the core idea quickly. If it doesn’t feel right early, it doesn’t ship."},{title:"Performance Pass",description:"Profile, measure, and tune. Every tool has latency budgets and resource constraints — nothing ships until it meets them."},{title:"Polish",description:"Refine interaction, naming, feel, pacing, clarity. Details are the difference between usable and effortless."}],wx=()=>{const{darkMode:o}=gt(),s=_t(o),c="polygon(60% 0, 100% 0, 100% 100%, 50% 100%)",m="polygon(0 0, 40% 0, 50% 100%, 0 100%)",d={"Privacy by Default":_d,"Performance Matters":a0,"Craft Over Scale":d0,"Open by Design":l0,"AI as Augmentation":f0,Research:U0,Prototype:Ld,"Performance Pass":Oi,Polish:Mt},f=yx.map(p=>({...p,icon:d[p.title]})),x=vx.map(p=>({...p,icon:d[p.title]}));return r.jsxs(r.Fragment,{children:[r.jsxs("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center px-6 pt-20",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:`radial-gradient(circle at 50% 50%, ${o?"rgba(99, 102, 241, 0.15)":"rgba(99, 102, 241, 0.08)"}, transparent 50%)`}}),r.jsx("div",{className:`absolute top-1/4 left-1/4 w-96 h-96 ${s.blobBlue} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}),r.jsx("div",{className:`absolute top-1/3 right-1/4 w-96 h-96 ${s.blobPurple} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}),r.jsx("div",{className:`absolute bottom-1/4 left-1/2 w-96 h-96 ${s.blobPink} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 `})]}),r.jsxs("div",{className:"max-w-5xl mx-auto text-center space-y-8 relative z-10",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${s.badgeGradient} rounded-full border ${s.blobBlue}/20 mb-6 animate-fade-in`,children:[r.jsx(Mt,{className:`w-4 h-4 ${s.textBlue} animate-pulse`}),r.jsx("span",{className:"text-sm font-medium",children:"Building Since 2023"})]}),r.jsxs("h1",{className:`text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight ${s.text} animate-fade-in-up`,children:["Craft meets",r.jsx("br",{}),r.jsx("span",{className:`bg-gradient-to-r ${s.gradientAccent} bg-clip-text text-transparent animate-gradient`,children:"performance"})]}),r.jsx("p",{className:`text-xl md:text-2xl ${s.textSecondary} max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200`,children:"NF Software is an independent software studio focused on building developer tools that respect your privacy, optimize for speed, and feel intentional to use."}),r.jsxs("div",{className:"flex flex-wrap gap-4 justify-center pt-8 animate-fade-in-up animation-delay-400",children:[r.jsxs(de,{to:"/products",className:`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105`,children:["Explore Products",r.jsx(ht,{className:"w-5 h-5"})]}),r.jsxs("a",{href:"https://github.com/NoamFav",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-8 py-4 ${s.bgButton} border ${s.borderButton} border font-semibold rounded-full hover:border-gray-400 transition-all duration-300 transform hover:scale-105`,children:[r.jsx(Vt,{className:"w-5 h-5"}),"View on GitHub"]})]})]}),r.jsx("div",{className:"absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce",children:r.jsx("div",{className:`w-6 h-10 rounded-full border-2 ${s.border} flex items-start justify-center p-2`,children:r.jsx("div",{className:`w-1.5 h-1.5 ${s.bgPrimary} rounded-full animate-pulse`})})})]}),r.jsx("section",{id:"mission","data-animate":!0,className:"relative py-32 px-6",children:r.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-8",children:[r.jsx("h2",{className:`text-4xl md:text-5xl font-bold ${s.text}`,children:"We build tools that matter"}),r.jsx("p",{className:`text-lg md:text-xl ${s.textSecondary} leading-relaxed`,children:"Since 2023, the goal has been simple: create software that is fast, minimal, and grounded in real use — no tracking, no bloat, no unnecessary complexity."}),r.jsx("p",{className:`text-lg md:text-xl ${s.textSecondary} leading-relaxed`,children:"Our tools run locally when possible, prioritize performance, and use AI as augmentation, not replacement. Software should feel invisible until the moment you need it — then become indispensable."})]})}),r.jsx("section",{"data-animate":!0,className:"relative py-20 px-6",children:r.jsx("div",{className:"max-w-7xl mx-auto",children:r.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:xx.map((p,y)=>r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-8 text-center border ${s.border} hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`,style:{animationDelay:`${y*100}ms`},children:[r.jsx("div",{className:`text-4xl font-bold ${s.text} mb-2`,children:p.value}),r.jsx("div",{className:`text-sm ${s.textSecondary}`,children:p.label})]},p.label))})})}),r.jsxs("section",{id:"principles","data-animate":!0,className:"relative min-h-screen flex items-center py-32 px-6",children:[r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:r.jsxs("div",{className:"absolute inset-0",style:{clipPath:c},children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",alt:"","aria-hidden":"true",decoding:"async",loading:"lazy",sizes:"(min-width: 1024px) 100vw, 100vw",className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"})]})}),r.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[r.jsxs("div",{className:"text-center space-y-6 mb-20",children:[r.jsx("h2",{className:`text-5xl md:text-6xl font-bold ${s.text}`,children:"What We Believe"}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-3xl mx-auto`,children:"Five principles that shape how we build software and how it should feel to use."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:f.map((p,y)=>r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-8 border ${s.border} hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`,style:{animationDelay:`${y*100}ms`},children:[r.jsx(p.icon,{className:"w-12 h-12 text-blue-500 mb-4"}),r.jsx("h3",{className:`text-xl font-bold ${s.text} mb-3`,children:p.title}),r.jsx("p",{className:`${s.textSecondary} leading-relaxed`,children:p.description})]},p.title))})]})]}),r.jsx("section",{id:"process","data-animate":!0,className:"relative py-32 px-6",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"text-center space-y-6 mb-20",children:[r.jsx("h2",{className:`text-5xl md:text-6xl font-bold ${s.text}`,children:"How We Build"}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-3xl mx-auto`,children:"The process is simple: understand the problem deeply, build with intention, and refine until it feels right. Every release is measured, tested, and tuned for performance."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:x.map((p,y)=>r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-6 border ${s.border} hover:border-purple-500/50 transition-all duration-300`,style:{animationDelay:`${y*100}ms`},children:[r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("div",{className:`w-10 h-10 rounded-full bg-gradient-to-r ${s.gradientSecondary} flex items-center justify-center flex-shrink-0`,children:r.jsx(p.icon,{className:"w-5 h-5 text-white"})}),r.jsx("h3",{className:`text-lg font-bold ${s.text}`,children:p.title})]}),r.jsx("p",{className:`text-sm ${s.textSecondary} leading-relaxed`,children:p.description})]},p.title))})]})}),r.jsxs("section",{id:"timeline","data-animate":!0,className:"relative min-h-screen flex items-center py-32 px-6",children:[r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:r.jsxs("div",{className:"absolute inset-0",style:{clipPath:m},children:[r.jsx("img",{src:"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",alt:"","aria-hidden":"true",decoding:"async",loading:"lazy",sizes:"(min-width: 1024px) 100vw, 100vw",className:"w-full h-full object-cover"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"})]})}),r.jsxs("div",{className:"max-w-5xl mx-auto relative z-10",children:[r.jsxs("div",{className:"text-center space-y-6 mb-20",children:[r.jsx("h2",{className:`text-5xl md:text-6xl font-bold ${s.text}`,children:"The Journey"}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-3xl mx-auto`,children:"2 years of building, learning, and growing with our community."})]}),r.jsx("div",{className:"space-y-8",children:gx.map((p,y)=>r.jsx("div",{className:`${s.cardBg} rounded-2xl p-8 border ${s.border} hover:border-blue-500/50 transition-all duration-300 transform hover:translate-x-2`,style:{animationDelay:`${y*100}ms`},children:r.jsxs("div",{className:"flex flex-col md:flex-row md:items-center gap-6",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsx("div",{className:`w-20 h-20 rounded-full bg-gradient-to-r ${s.gradientPrimary} flex items-center justify-center`,children:r.jsx("span",{className:"text-white font-bold text-lg",children:p.year})})}),r.jsxs("div",{className:"flex-1",children:[r.jsx("h3",{className:`text-2xl font-bold ${s.text} mb-2`,children:p.title}),r.jsx("p",{className:`${s.textSecondary} leading-relaxed`,children:p.description})]})]})},p.year))})]})]}),r.jsx("section",{id:"team","data-animate":!0,className:"relative py-32 px-6",children:r.jsxs("div",{className:"max-w-5xl mx-auto",children:[r.jsxs("div",{className:"text-center space-y-6 mb-20",children:[r.jsx("h2",{className:`text-5xl md:text-6xl font-bold ${s.text}`,children:"How this studio works"}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-3xl mx-auto`,children:"NF Software is a one-person studio. I lead engineering, product, and design; collaborators join on specific projects when it helps the work. The bar is performance, clarity, and respect for the user."})]}),r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-12 border ${s.border} space-y-6`,children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[r.jsxs("div",{className:"text-center",children:[r.jsx(ks,{className:"w-12 h-12 text-blue-500 mx-auto mb-4"}),r.jsx("h3",{className:`text-lg font-bold ${s.text} mb-2`,children:"Engineering"}),r.jsx("p",{className:`text-sm ${s.textSecondary}`,children:"Performance first. Measure, profile, and keep strict latency budgets. Ship fast, keep it lean, no regressions."})]}),r.jsxs("div",{className:"text-center",children:[r.jsx(zi,{className:"w-12 h-12 text-purple-500 mx-auto mb-4"}),r.jsx("h3",{className:`text-lg font-bold ${s.text} mb-2`,children:"Product"}),r.jsx("p",{className:`text-sm ${s.textSecondary}`,children:"Solve real problems with small, focused tools. Ship the minimum that matters, iterate with real usage."})]}),r.jsxs("div",{className:"text-center",children:[r.jsx(Mt,{className:"w-12 h-12 text-pink-500 mx-auto mb-4"}),r.jsx("h3",{className:`text-lg font-bold ${s.text} mb-2`,children:"Design"}),r.jsx("p",{className:`text-sm ${s.textSecondary}`,children:"Interfaces that disappear until you need them. Motion only when it improves clarity. Accessible by default."})]})]}),r.jsx("div",{className:`pt-8 border-t ${s.border}`,children:r.jsx("p",{className:`text-center ${s.textSecondary} leading-relaxed`,children:"I build in public and use what I ship. When a project needs extra hands, I bring in trusted collaborators."})})]})]})}),r.jsx("section",{id:"opensource","data-animate":!0,className:"relative py-32 px-6",children:r.jsxs("div",{className:"max-w-5xl mx-auto",children:[r.jsxs("div",{className:"text-center space-y-6 mb-20",children:[r.jsx("h2",{className:`text-5xl md:text-6xl font-bold ${s.text}`,children:"Open Source at Our Core"}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-3xl mx-auto`,children:"Transparency builds trust. A large part of NF Software is developed in public, where ideas, experiments, and improvements are shared openly."})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",children:[r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-8 border ${s.border} hover:border-blue-500/50 transition-all duration-300`,children:[r.jsx(nr,{className:"w-12 h-12 text-blue-500 mb-4"}),r.jsx("h3",{className:`text-2xl font-bold ${s.text} mb-4`,children:"Built in Public"}),r.jsx("p",{className:`${s.textSecondary} mb-6 leading-relaxed`,children:"From system monitoring tools to AI-assisted Git workflows, our projects are available for anyone to explore, learn from, and contribute to."}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx("span",{className:`px-3 py-1 ${s.bgButton} rounded-lg text-sm ${s.textSecondary}`,children:"Rust"}),r.jsx("span",{className:`px-3 py-1 ${s.bgButton} rounded-lg text-sm ${s.textSecondary}`,children:"Go"}),r.jsx("span",{className:`px-3 py-1 ${s.bgButton} rounded-lg text-sm ${s.textSecondary}`,children:"React"}),r.jsx("span",{className:`px-3 py-1 ${s.bgButton} rounded-lg text-sm ${s.textSecondary}`,children:"Lua"}),r.jsx("span",{className:`px-3 py-1 ${s.bgButton} rounded-lg text-sm ${s.textSecondary}`,children:"Java"}),r.jsx("span",{className:`px-3 py-1 ${s.bgButton} rounded-lg text-sm ${s.textSecondary}`,children:"Python"}),r.jsx("span",{className:`px-3 py-1 ${s.bgButton} rounded-lg text-sm ${s.textSecondary}`,children:"..."})]})]}),r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-8 border ${s.border} hover:border-purple-500/50 transition-all duration-300`,children:[r.jsx(gs,{className:"w-12 h-12 text-yellow-500 mb-4"}),r.jsx("h3",{className:`text-2xl font-bold ${s.text} mb-4`,children:"Growing Community"}),r.jsx("p",{className:`${s.textSecondary} mb-6 leading-relaxed`,children:"Development is driven by real usage and feedback from developers who care about privacy, performance, and craft."}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Cn,{className:"w-5 h-5 text-green-500"}),r.jsx("span",{className:`text-sm ${s.textSecondary}`,children:"Active development"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Cn,{className:"w-5 h-5 text-green-500"}),r.jsx("span",{className:`text-sm ${s.textSecondary}`,children:"Regular updates"})]})]})]})]}),r.jsx("div",{className:"text-center",children:r.jsxs("a",{href:"https://github.com/NoamFav",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105`,children:[r.jsx(Vt,{className:"w-5 h-5"}),"Explore on GitHub",r.jsx(Jh,{className:"w-4 h-4"})]})})]})}),r.jsx("section",{id:"cta","data-animate":!0,className:"relative py-32 px-6",children:r.jsx("div",{className:"max-w-5xl mx-auto",children:r.jsxs("div",{className:`${s.cardBg} rounded-3xl p-12 md:p-20 text-center space-y-8 border ${s.border} relative overflow-hidden`,children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 2px 2px, ${o?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"} 1px, transparent 0)`,backgroundSize:"32px 32px"}})}),r.jsxs("div",{className:"relative z-10",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${s.badgeGradient} rounded-full border border-blue-500/20 mb-6`,children:[r.jsx(Mt,{className:"w-4 h-4 text-blue-500"}),r.jsx("span",{className:"text-sm font-medium",children:"Let's Connect"})]}),r.jsx("h2",{className:`text-4xl md:text-6xl font-bold ${s.text} mb-6`,children:"Want to build something together?"}),r.jsx("p",{className:`text-lg md:text-xl ${s.textSecondary} max-w-2xl mx-auto mb-8`,children:"Whether you're interested in collaborating, contributing to our open source projects, or just want to say hello—I'd love to hear from you."}),r.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[r.jsxs(de,{to:"/contact",className:`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105`,children:[r.jsx(ot,{className:"w-5 h-5"}),"Start Your Project"]}),r.jsxs(de,{to:"/products",className:`inline-flex items-center gap-2 px-8 py-4 ${s.cardBg} border ${s.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`,children:[r.jsx(nr,{className:"w-5 h-5"}),"Explore Products",r.jsx(ht,{className:"w-4 h-4"})]})]}),r.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-6 pt-12",children:[r.jsxs("a",{href:"https://github.com/NoamFav",target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 ${s.textSecondary} hover:${s.text} transition`,"aria-label":"GitHub",children:[r.jsx(Vt,{className:"w-5 h-5"}),r.jsx("span",{className:"text-sm",children:"GitHub"})]}),r.jsxs("a",{href:"mailto:contact@nf-software.com",className:`flex items-center gap-2 ${s.textSecondary} hover:${s.text} transition`,children:[r.jsx(ot,{className:"w-5 h-5"}),r.jsx("span",{className:"text-sm",children:"Email"})]})]})]})]})})})]})},bx=()=>{const{darkMode:o}=gt(),s=_t(o),[c,m]=$.useState("All"),[d,f]=$.useState(0);$.useEffect(()=>{const N=()=>f(window.scrollY);return window.addEventListener("scroll",N,{passive:!0}),()=>window.removeEventListener("scroll",N)},[]);const x=N=>N??N===0?new Intl.NumberFormat(void 0,{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(N):"—",p=N=>({Code:$t,Cpu:Sd,Brain:kd,GraduationCap:Ed,FolderTree:Pd})[N]??$t,y=ar.flatMap(N=>N.tools.map(C=>({...C,suite:N.name,suiteGradient:N.gradient}))),g=N=>{switch(N){case"Live":return"border-green-500/50 text-green-500 bg-green-500/10";case"Beta":return"border-yellow-500/50 text-yellow-500 bg-yellow-500/10";case"Alpha":return"border-purple-500/50 text-purple-500 bg-purple-500/10";case"In Development":return"border-blue-500/50 text-blue-500 bg-blue-500/10";default:return"border-gray-500/50 text-gray-500 bg-gray-500/10"}};return r.jsxs(r.Fragment,{children:[r.jsxs("section",{id:"products",className:"relative pt-32 pb-20 px-6 overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:`radial-gradient(circle at 50% 50%, ${o?"rgba(99, 102, 241, 0.15)":"rgba(99, 102, 241, 0.08)"}, transparent 50%)`}}),r.jsx("div",{className:`absolute top-1/4 left-1/4 w-96 h-96 ${s.blobBlue} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}),r.jsx("div",{className:`absolute top-1/3 right-1/4 w-96 h-96 ${s.blobPurple} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}),r.jsx("div",{className:`absolute bottom-1/4 left-1/2 w-96 h-96 ${s.blobPink} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 `})]}),r.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[r.jsxs("div",{className:"text-center space-y-6 mb-12",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${s.badgeGradient} rounded-full border ${s.blobBlue}/20 mb-6 animate-fade-in`,children:[r.jsx(nr,{className:`w-4 h-4 ${s.textBlue} animate-pulse`}),r.jsx("span",{className:"text-sm font-medium",children:"Tools Built with Intention"})]}),r.jsxs("h1",{className:`text-5xl md:text-6xl lg:text-7xl font-bold ${s.text}`,children:["Professional Software",r.jsx("br",{}),r.jsx("span",{className:`bg-gradient-to-r ${s.gradientAccent} bg-clip-text text-transparent animate-gradient`,children:"Built to Excel"})]}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-3xl mx-auto`,children:"Four focused suites for development, system monitoring, AI, and research. Every tool is designed to be fast, minimal, and built to last."})]}),r.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-16",children:[r.jsx(n0,{className:"w-5 h-5 text-gray-500"}),["All","Live","Beta","In Development"].map(N=>r.jsxs("button",{onClick:()=>m(N),className:`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${c===N?`bg-gradient-to-r ${s.gradientPrimary} text-white shadow-lg`:`${s.cardBg} ${s.textSecondary} border ${s.border} ${s.hoverBg}`}`,children:[N,N!=="All"&&r.jsxs("span",{className:"ml-2 opacity-60",children:["(",y.filter(C=>C.status===N).length,")"]})]},N))]})]})]}),r.jsx("section",{className:"relative pb-20 px-6",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[ar.map(N=>{var O,_;const C=p(N.icon),P=c==="All"?N.tools:N.tools.filter(L=>L.status===c);return P.length===0&&c!=="All"?null:r.jsxs("div",{id:N.slug,"data-animate":!0,className:"mb-24",children:[r.jsx("div",{className:`${s.cardBg} rounded-3xl p-8 border ${s.border} mb-8 hover:border-blue-500/50 transition-all duration-300`,children:r.jsxs("div",{className:"flex items-start justify-between flex-wrap gap-6",children:[r.jsxs("div",{className:"space-y-4 flex-1",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(C,{className:"w-12 h-12 text-blue-500"}),r.jsxs("div",{children:[r.jsx("h2",{className:`text-3xl font-bold ${s.text}`,children:N.name}),r.jsx("p",{className:`${s.textSecondary}`,children:N.tagline})]})]}),r.jsx("p",{className:`text-lg ${s.textSecondary}`,children:N.description}),r.jsx("div",{className:"flex flex-wrap gap-2",children:N.tools.map(L=>r.jsx("span",{className:`px-3 py-1 ${s.cardBg} border ${s.border} rounded-lg text-sm`,children:L.name},L.name))})]}),r.jsx("div",{className:`${s.bg} rounded-2xl p-6 border ${s.border} min-w-[280px]`,children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("div",{className:`text-sm ${s.textTertiary} mb-1`,children:"Individual (Annual)"}),r.jsxs("div",{className:`text-3xl font-bold ${s.text}`,children:[x((O=N.plans)==null?void 0:O.individual.annual),"/yr"]})]}),r.jsxs("div",{children:[r.jsx("div",{className:`text-sm ${s.textTertiary} mb-1`,children:"One-Time License"}),r.jsx("div",{className:`text-2xl font-bold ${s.text}`,children:x((_=N.plans)==null?void 0:_.individual.oneTime)})]}),r.jsx("button",{onClick:()=>{const L=`Checkout coming soon!

Interested in ${N.name}?
Contact us at contact@nf-software.com`;alert(L)},className:`w-full py-3 bg-gradient-to-r ${N.gradient} text-white font-semibold rounded-full hover:shadow-xl transition`,children:"Get Suite"}),r.jsx("a",{href:"#/pricing",className:`block text-center text-sm ${s.textSecondary} hover:${s.text} transition`,children:"View all pricing options →"})]})})]})}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:P.map(L=>{var M,z;return r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-6 border ${s.border} hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]`,children:[r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("h3",{className:`text-xl font-bold ${s.text}`,children:L.name}),r.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium border ${g(L.status)}`,children:L.status})]}),r.jsx("p",{className:`text-sm ${s.textSecondary} mb-2`,children:L.tagline}),r.jsx("p",{className:`text-sm ${s.textSecondary}`,children:L.description})]}),r.jsx("div",{className:"space-y-2",children:(L.features??[]).map((K,W)=>r.jsxs("div",{className:"flex items-start gap-2",children:[r.jsx(Cn,{className:"w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"}),r.jsx("span",{className:`text-sm ${s.textSecondary}`,children:K.includes(" - ")?K.split(" - ")[0]:K})]},W))}),r.jsx("div",{className:"flex flex-wrap gap-2",children:(L.tech??[]).map(K=>r.jsx("span",{className:`px-2 py-1 rounded text-xs ${s.textTertiary} border ${s.border}`,children:K},K))}),r.jsxs("div",{className:`pt-4 border-t ${s.border} space-y-2`,children:[r.jsxs("div",{className:"flex justify-between text-sm",children:[r.jsx("span",{className:s.textSecondary,children:"Annual"}),r.jsxs("span",{className:`font-semibold ${s.text}`,children:[x((M=L.plan)==null?void 0:M.annual),"/yr"]})]}),r.jsxs("div",{className:"flex justify-between text-sm",children:[r.jsx("span",{className:s.textSecondary,children:"One-Time"}),r.jsx("span",{className:`font-semibold ${s.text}`,children:x((z=L.plan)==null?void 0:z.oneTime)})]})]}),L.github&&r.jsxs("a",{href:"https://github.com/NoamFav",target:"_blank",rel:"noopener noreferrer",className:`flex items-center justify-center gap-2 px-4 py-2 ${s.cardBg} border ${s.border} rounded-lg text-sm font-medium hover:border-blue-500/50 transition`,children:[r.jsx(Vt,{className:"w-4 h-4"}),"View on GitHub"]})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2",children:[r.jsx("button",{onClick:()=>alert("Checkout not yet supported. Please contact us at contact@nf-software.com for purchasing inquiries."),className:`text-center px-4 py-2.5 bg-gradient-to-r ${N.gradient} text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer`,children:"Subscribe"}),r.jsx("button",{onClick:()=>alert("Checkout not yet supported. Please contact us at contact@nf-software.com for purchasing inquiries."),className:`text-center px-4 py-2.5 ${s.cardBg} border ${s.border} font-semibold rounded-lg hover:border-blue-500/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer`,children:"Buy Once"})]})]},L.name)})})]},N.id)}),(c==="All"||ys.some(N=>N.status===c))&&ys.length>0&&r.jsxs("div",{"data-animate":!0,className:"mb-24",children:[r.jsx("h2",{className:`text-3xl font-bold ${s.text} mb-8`,children:"Standalone Tools"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:ys.filter(N=>c==="All"||N.status===c).map(N=>{var P,O;const C=p(N.icon);return r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-6 border ${s.border} hover:border-orange-500/50 transition-all duration-300`,children:[r.jsx(C,{className:"w-10 h-10 text-orange-500 mb-4"}),r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("h3",{className:`text-xl font-bold ${s.text}`,children:N.name}),r.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium border ${g(N.status)}`,children:N.status})]}),r.jsx("p",{className:`text-sm ${s.textSecondary} mb-4`,children:N.description}),r.jsx("div",{className:"space-y-2 mb-4",children:(N.features??[]).map((_,L)=>r.jsxs("div",{className:"flex items-start gap-2",children:[r.jsx(Cn,{className:"w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"}),r.jsx("span",{className:`text-sm ${s.textSecondary}`,children:_.split(" - ")[0]})]},L))}),r.jsxs("div",{className:`flex justify-between text-sm pt-4 border-t ${s.border}`,children:[r.jsxs("span",{className:s.textSecondary,children:[x((P=N.plan)==null?void 0:P.annual),"/yr"]}),r.jsxs("span",{className:s.textSecondary,children:[x((O=N.plan)==null?void 0:O.oneTime)," ","one-time"]})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2",children:[r.jsx("button",{onClick:()=>alert("Checkout not yet supported. Please contact us at contact@nf-software.com for purchasing inquiries."),className:`text-center px-4 py-2.5 bg-gradient-to-r ${N.gradient} text-white rounded-lg cursor-pointer`,children:"Subscribe"}),r.jsx("button",{onClick:()=>alert("Checkout not yet supported. Please contact us at contact@nf-software.com for purchasing inquiries."),className:`text-center px-4 py-2.5 ${s.cardBg} border ${s.border} rounded-lg cursor-pointer`,children:"Buy Once"})]})]},N.name)})})]})]})}),r.jsx("section",{"data-animate":!0,className:"relative py-32 px-6",children:r.jsx("div",{className:"max-w-5xl mx-auto",children:r.jsxs("div",{className:`${s.cardBg} rounded-3xl p-12 md:p-20 text-center space-y-8 border ${s.border}`,children:[r.jsx("h2",{className:`text-4xl md:text-6xl font-bold ${s.text} mb-6`,children:"Ready to elevate your workflow?"}),r.jsx("p",{className:`text-lg md:text-xl ${s.textSecondary} max-w-2xl mx-auto`,children:"Join developers who trust NF Software for their mission-critical tools."}),r.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[r.jsxs("a",{href:"#/pricing",className:`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl transition`,children:["View Pricing",r.jsx(ht,{className:"w-5 h-5"})]}),r.jsxs("a",{href:"https://github.com/NoamFav",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-8 py-4 ${s.cardBg} border ${s.border} font-semibold rounded-full hover:border-blue-500/50 transition`,children:[r.jsx(Vt,{className:"w-5 h-5"}),"Explore on GitHub"]})]})]})})}),d>500&&r.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`fixed bottom-8 right-8 p-4 ${s.bgPrimary} ${s.textPrimary} rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50`,"aria-label":"Scroll to top",children:r.jsx(na,{className:"w-6 h-6 -rotate-90"})})]})},Nx=[{value:"web-app",label:"Web Application",icon:Xr},{value:"mobile-app",label:"Mobile App",icon:L0},{value:"api",label:"API/Backend",icon:$d},{value:"fullstack",label:"Full-Stack Solution",icon:$t},{value:"other",label:"Other",icon:Oi}],jx=["User Authentication","Payment Integration","Admin Dashboard","Real-time Updates","API Integration","Database Design","Cloud Deployment","Mobile Responsive","Analytics","Email Notifications","CMS Integration","Third-party APIs"],kx=[{value:"",label:"Select team size"},{value:"solo",label:"Solo Founder"},{value:"small",label:"2-10 people"},{value:"medium",label:"11-50 people"},{value:"large",label:"50+ people"}],Sx=[{value:"",label:"Select timeframe"},{value:"urgent",label:"ASAP (1-2 weeks)"},{value:"short",label:"Short-term (1-2 months)"},{value:"medium",label:"Medium-term (3-6 months)"},{value:"long",label:"Long-term (6+ months)"},{value:"flexible",label:"Flexible"}],$x=[{value:"",label:"Select budget range"},{value:"micro",label:"€20 - €500 (Micro Project)"},{value:"tiny",label:"€500 - €1,000 (Small Script/Tool)"},{value:"small",label:"€1,000 - €5,000"},{value:"medium",label:"€5,000 - €15,000"},{value:"large",label:"€15,000 - €50,000"},{value:"enterprise",label:"€50,000+"},{value:"discuss",label:"Prefer to discuss"}],Cx=[{value:"no",label:"No, need full design"},{value:"partial",label:"Have wireframes/mockups"},{value:"yes",label:"Complete design ready"}],Px=[{value:"unsure",label:"Not sure yet"},{value:"yes",label:"Yes, full deployment"},{value:"no",label:"No, I'll handle it"}],Ex=[{question:"What's included in your proposal?",answer:"You'll receive a detailed breakdown including project timeline with milestones, comprehensive feature list, technology stack recommendations, pricing in EUR (with payment schedule options), and estimated delivery dates. I also include potential challenges and how we'll address them."},{question:"How do you calculate pricing?",answer:"Pricing is based on project complexity, required features, timeline, and ongoing support needs. I offer both fixed-price packages for well-defined projects and flexible hourly rates for evolving requirements. All prices are in EUR and include regular check-ins and revisions."},{question:"What information helps you provide the most accurate estimate?",answer:"The more details, the better! Specific feature requirements, user flow descriptions, design references, technical constraints, target launch date, and any existing systems to integrate with. Wireframes or mockups are incredibly helpful but not required."},{question:"Do you work with startups on equity/revenue share?",answer:"I primarily work on paid projects, but I'm open to discussing hybrid arrangements (partial payment + equity) for exceptional early-stage startups with strong potential. This is evaluated case-by-case."},{question:"What's your development process?",answer:"I follow an agile approach with 1-2 week sprints, regular demos, and iterative feedback. You'll have access to staging environments, GitHub repositories, and regular progress updates. Communication is key - I use Slack, email, and video calls as needed."},{question:"Do you provide post-launch support?",answer:"Yes! I offer flexible maintenance packages including bug fixes, security updates, performance optimization, and feature additions. We can discuss ongoing support needs during the proposal phase."},{question:"Can you work with my existing development team?",answer:"Absolutely! I'm experienced in collaborating with in-house teams, providing technical leadership, code reviews, or handling specific components. I adapt to your team's workflow and tools."},{question:"What if my project requirements change?",answer:"Change is natural in software development. For fixed-price projects, we'll discuss scope adjustments and pricing impacts. For hourly projects, you have full flexibility to pivot as needed. Clear communication ensures we stay aligned."},{question:"What about micro projects and automation scripts?",answer:"I also take on smaller projects. Whether it's a simple automation script (€20–200), a browser extension (€200–500), or a quick data processing tool, I'm happy to help. These projects typically have a faster turnaround (1–7 days) and are perfect for testing the waters before larger commitments."}],er={email:"contact@nf-software.com",responseTime:"Typically 24–48 hours",location:"Europe (CET/CEST)"},_x="https://nf-software-server.fly.dev/submit",Si="contact_form_draft",Tx=10*1024*1024,$i=8,Ix=256*1024,Ge={name:100,email:150,phone:30,company:150,website:200,industry:100,description:5e3,goals:3e3,targetAudience:2e3,technicalRequirements:3e3,designPreferences:2e3},Rx=Fe.memo(function({icon:s,label:c,name:m,type:d="text",required:f=!1,placeholder:x,maxLength:p,theme:y,value:g,onChange:N,error:C}){return r.jsxs("div",{children:[r.jsxs("label",{className:`block text-sm font-medium mb-2 ${y.text}`,children:[c," ",f&&r.jsx("span",{className:"text-red-400",children:"*"})]}),r.jsxs("div",{className:"relative",children:[r.jsx(s,{className:`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${y.textSecondary}`}),r.jsx("input",{type:d,name:m,value:g,onChange:N,required:f,maxLength:p,className:`w-full pl-12 pr-4 py-4 ${y.inputBg} border ${C?"border-red-500":y.border} rounded-xl ${y.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`,placeholder:x})]}),C&&r.jsx("p",{className:"mt-1 text-xs text-red-400",children:C}),p&&r.jsxs("p",{className:`mt-1 text-xs ${y.textSecondary}`,children:[(g??"").length,"/",p]})]})}),Lx=Fe.memo(function({icon:s,label:c,name:m,rows:d=4,required:f=!1,placeholder:x,maxLength:p,theme:y,value:g,onChange:N,error:C}){return r.jsxs("div",{children:[r.jsxs("label",{className:`block text-sm font-medium mb-2 ${y.text}`,children:[c," ",f&&r.jsx("span",{className:"text-red-400",children:"*"})]}),r.jsxs("div",{className:"relative",children:[r.jsx(s,{className:`absolute left-4 top-4 w-5 h-5 ${y.textSecondary}`}),r.jsx("textarea",{name:m,value:g,onChange:N,required:f,maxLength:p,rows:d,className:`w-full pl-12 pr-4 py-4 ${y.inputBg} border ${C?"border-red-500":y.border} rounded-xl ${y.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition`,placeholder:x})]}),C&&r.jsx("p",{className:"mt-1 text-xs text-red-400",children:C}),p&&r.jsxs("p",{className:`mt-1 text-xs ${y.textSecondary}`,children:[(g??"").length,"/",p]})]})}),Ax=()=>{const{darkMode:o}=gt(),s=_t(o),c={name:"",email:"",phone:"",company:"",website:"",projectType:"web-app",industry:"",teamSize:"",timeframe:"",budget:"",description:"",goals:"",technicalRequirements:"",designPreferences:"",targetAudience:"",features:[],hasDesign:"no",needsHosting:"unsure",attachments:[]},[m,d]=$.useState(c),[f,x]=$.useState({type:"",message:""}),[p,y]=$.useState(!1),[g,N]=$.useState(1),[C,P]=$.useState({});$.useEffect(()=>{try{const E=localStorage.getItem(Si);if(E){const F=JSON.parse(E);d({...c,...F,attachments:[]}),N(F.currentStep||1)}}catch(E){console.error("Error loading saved form data:",E)}},[]),$.useEffect(()=>{const E=setTimeout(()=>{try{const F={...m,currentStep:g};localStorage.setItem(Si,JSON.stringify(F))}catch(F){console.error("Error saving form data:",F)}},500);return()=>clearTimeout(E)},[m,g]);const O=({icon:E,label:F,name:le,type:ne="text",required:fe=!1,placeholder:Ve,maxLength:Qe})=>r.jsx(Rx,{icon:E,label:F,name:le,type:ne,required:fe,placeholder:Ve,maxLength:Qe,theme:s,value:m[le]??"",onChange:z,error:C[le]}),_=({icon:E,label:F,name:le,rows:ne=4,required:fe=!1,placeholder:Ve,maxLength:Qe})=>r.jsx(Lx,{icon:E,label:F,name:le,rows:ne,required:fe,placeholder:Ve,maxLength:Qe,theme:s,value:m[le]??"",onChange:z,error:C[le]}),L=(E,F)=>F.length>Ge[E]?`Maximum ${Ge[E]} characters`:F&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F)?"Invalid email format":null,M=E=>{const F={};if(E===1){m.name.trim()||(F.name="Name is required"),m.email.trim()||(F.email="Email is required");const le=L("email",m.email);le&&(F.email=le)}else E===2&&(m.description.trim()||(F.description="Description is required"),m.timeframe||(F.timeframe="Timeframe is required"),m.budget||(F.budget="Budget is required"));return P(F),Object.keys(F).length===0},z=E=>{const{name:F,value:le}=E.target;if(Ge[F]&&le.length>Ge[F]){P(ne=>({...ne,[F]:`Maximum ${Ge[F]} characters`}));return}if(new Blob([le]).size>Ix){P(ne=>({...ne,[F]:"Field content too large"}));return}d(ne=>({...ne,[F]:le})),C[F]&&P(ne=>{const fe={...ne};return delete fe[F],fe})},K=E=>{d(F=>({...F,features:F.features.includes(E)?F.features.filter(le=>le!==E):[...F.features,E]}))},W=E=>{const F=Array.from(E.target.files),le=[],ne=[];if(m.attachments.length+F.length>$i){x({type:"error",message:`Maximum ${$i} files allowed`});return}F.forEach(fe=>{fe.size>Tx?ne.push(`${fe.name} exceeds 10MB limit`):le.push(fe)}),ne.length>0&&x({type:"error",message:ne.join(", ")}),le.length>0&&d(fe=>({...fe,attachments:[...fe.attachments,...le]}))},te=E=>{d(F=>({...F,attachments:F.attachments.filter((le,ne)=>ne!==E)}))},xe=()=>{try{localStorage.removeItem(Si)}catch(E){console.error("Error clearing draft:",E)}},me=E=>{if(E>g&&!M(g)){x({type:"error",message:"Please fill in all required fields correctly"});return}N(E),x({type:"",message:""})},ve=async E=>{if(E.preventDefault(),!E.target.company_website.value){if(!M(g)){x({type:"error",message:"Please fill in all required fields correctly"});return}y(!0),x({type:"",message:""});try{const F=new FormData;if(Object.keys(m).forEach(ne=>{ne!=="attachments"&&(ne==="features"?F.append(ne,JSON.stringify(m[ne])):F.append(ne,m[ne]))}),m.attachments.forEach((ne,fe)=>{F.append(`attachment_${fe}`,ne)}),(await fetch(_x,{method:"POST",body:F})).ok){x({type:"success",message:"Thank you! Your detailed project inquiry has been received. I'll review everything and get back to you within 24-48 hours with a comprehensive proposal."}),d(c),N(1),xe();const ne=document.getElementById("file-upload");ne&&(ne.value="")}else throw new Error("Failed to submit form")}catch(F){x({type:"error",message:`Sorry, there was an error submitting your form. Please try again or email me directly at ${er.email}`}),console.error("Form submission error:",F)}finally{y(!1)}}},Se=[{number:1,title:"Contact Info"},{number:2,title:"Project Details"},{number:3,title:"Requirements"},{number:4,title:"Additional Info"}];return r.jsxs("div",{className:`min-h-screen ${s.bg} ${s.text}`,children:[r.jsxs("section",{className:"relative pt-32 pb-20 px-6 overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:`radial-gradient(circle at 50% 50%, ${o?"rgba(99, 102, 241, 0.15)":"rgba(99, 102, 241, 0.08)"}, transparent 50%)`}}),r.jsx("div",{className:`absolute top-1/4 left-1/4 w-96 h-96 ${s.blobBlue} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}),r.jsx("div",{className:`absolute top-1/3 right-1/4 w-96 h-96 ${s.blobPurple} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}),r.jsx("div",{className:`absolute bottom-1/4 left-1/2 w-96 h-96 ${s.blobPink} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000`})]}),r.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 ${o?`bg-gradient-to-r ${s.ligthGradientPrimary} border-blue-500/30`:`bg-gradient-to-r ${s.badgeGradient} border-blue-500/20`} rounded-full border mb-6`,children:[r.jsx(Mt,{className:"w-4 h-4 text-blue-400 animate-pulse"}),r.jsx("span",{className:"text-sm font-medium",children:"Let's Build Something Amazing"})]}),r.jsx("h1",{className:`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${s.lightGradientAccent} bg-clip-text text-transparent`,children:"Start Your Project"}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-2xl mx-auto`,children:"Every project begins with a clear conversation. Tell me what you're looking to build, and I’ll provide a detailed estimate with timeline, deliverables, and pricing. I take on everything from small automation tools (€20+) to full-scale systems and long-term development partnerships."})]})]}),r.jsx("section",{className:"px-6 pb-12",children:r.jsx("div",{className:"max-w-7xl mx-auto",children:r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{icon:ot,title:"Email",content:er.email,color:"blue",href:`mailto:${er.email}`},{icon:Zr,title:"Response Time",content:er.responseTime,color:"purple"},{icon:Xr,title:"Location",content:er.location,color:"pink"}].map((E,F)=>r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-6 border ${s.border} hover:border-${E.color}-500/50 transition-all duration-300 group`,children:[r.jsx(E.icon,{className:`w-10 h-10 text-${E.color}-400 mb-4 group-hover:scale-110 transition-transform`}),r.jsx("h3",{className:`text-lg font-semibold mb-2 ${s.text}`,children:E.title}),E.href?r.jsx("a",{href:E.href,className:`text-sm ${s.textSecondary} hover:text-${E.color}-400 transition`,children:E.content}):r.jsx("p",{className:`text-sm ${s.textSecondary}`,children:E.content})]},F))})})}),r.jsx("section",{className:"px-6 pb-32",children:r.jsxs("div",{className:"max-w-5xl mx-auto",children:[r.jsx("div",{className:"mb-12",children:r.jsx("div",{className:"flex items-center justify-between max-w-3xl mx-auto",children:Se.map((E,F)=>r.jsxs("div",{className:"flex items-center flex-1",children:[r.jsxs("div",{className:"flex flex-col items-center",children:[r.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${g>=E.number?`bg-gradient-to-r ${s.gradientPrimary} text-white scale-110`:`${o?"bg-gray-800 text-gray-500":"bg-gray-200 text-gray-400"}`}`,children:E.number}),r.jsx("span",{className:`text-xs mt-2 ${g>=E.number?s.text:s.textSecondary}`,children:E.title})]}),F<Se.length-1&&r.jsx("div",{className:`flex-1 h-1 mx-4 ${g>E.number?`bg-gradient-to-r ${s.gradientPrimary}`:s.bgButton}`})]},E.number))})}),r.jsxs("form",{onSubmit:ve,className:`${s.cardBg} rounded-3xl p-8 md:p-12 border ${s.border}`,children:[r.jsx("input",{type:"text",name:"company_website",className:"hidden",tabIndex:-1,autoComplete:"off"}),f.message&&r.jsxs("div",{className:`mb-8 p-4 rounded-xl flex items-start gap-3 ${f.type==="success"?`${o?"bg-green-500/10 border-green-500/30":"bg-green-50 border-green-200"} border`:`${o?"bg-red-500/10 border-red-500/30":"bg-red-50 border-red-200"} border`}`,children:[f.type==="success"?r.jsx(Cn,{className:`w-5 h-5 ${o?"text-green-400":"text-green-600"} flex-shrink-0 mt-0.5`}):r.jsx(Ah,{className:`w-5 h-5 ${o?"text-red-400":"text-red-600"} flex-shrink-0 mt-0.5`}),r.jsx("p",{className:`text-sm ${f.type==="success"?o?"text-green-400":"text-green-700":o?"text-red-400":"text-red-700"}`,children:f.message})]}),g===1&&r.jsxs("div",{className:"space-y-8",children:[r.jsxs("div",{children:[r.jsx("h3",{className:`text-3xl font-bold mb-2 bg-gradient-to-r ${s.lightGradient} bg-clip-text text-transparent`,children:"Contact Information"}),r.jsx("p",{className:`${s.textSecondary} mb-8`,children:"Tell me where to reach you."})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[O({icon:Rd,label:"Full Name",name:"name",required:!0,placeholder:"John Doe",maxLength:Ge.name}),O({icon:ot,label:"Email Address",name:"email",required:!0,type:"email",placeholder:"john@example.com",maxLength:Ge.email}),O({icon:j0,label:"Phone Number (Optional)",name:"phone",type:"tel",placeholder:"+31 6 1234 5678",maxLength:Ge.phone}),O({icon:Ju,label:"Company Name (Optional)",name:"company",placeholder:"Your Company",maxLength:Ge.company}),r.jsx("div",{className:"md:col-span-2",children:O({icon:Xr,label:"Website (Optional)",name:"website",type:"url",placeholder:"https://yourcompany.com",maxLength:Ge.website})})," "]}),r.jsx("button",{type:"button",onClick:()=>me(2),className:`w-full py-4 px-6 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]`,children:"Next Step → Project Details"})]}),g===2&&r.jsxs("div",{className:"space-y-8",children:[r.jsxs("div",{children:[r.jsx("h3",{className:`text-3xl font-bold mb-2 bg-gradient-to-r ${s.gradientThirdary} bg-clip-text text-transparent`,children:"Project Details"}),r.jsx("p",{className:`${s.textSecondary} mb-8`,children:"Tell me about your project vision"})]}),r.jsxs("div",{children:[r.jsxs("label",{className:`block text-sm font-medium mb-4 ${s.text}`,children:["Project Type"," ",r.jsx("span",{className:"text-red-400",children:"*"})]}),r.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:Nx.map(E=>{const F=E.icon;return r.jsxs("button",{type:"button",onClick:()=>d(le=>({...le,projectType:E.value})),className:`p-4 rounded-xl border-2 transition-all ${m.projectType===E.value?"border-blue-500 bg-blue-500/10":`${s.border} ${s.inputBg} ${s.hoverBorder}`}`,children:[r.jsx(F,{className:`w-8 h-8 mx-auto mb-2 ${m.projectType===E.value?"text-blue-400":s.textSecondary}`}),r.jsx("p",{className:`text-sm font-medium ${s.text}`,children:E.label})]},E.value)})})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[O({icon:Ju,label:"Industry/Sector (Optional)",name:"industry",placeholder:"e.g., E-commerce, Healthcare",maxLength:Ge.industry}),r.jsxs("div",{children:[r.jsx("label",{className:`block text-sm font-medium mb-2 ${s.text}`,children:"Team Size (Optional)"}),r.jsx("select",{name:"teamSize",value:m.teamSize,onChange:z,className:`w-full px-4 py-4 ${s.selectBg} border ${s.border} rounded-xl ${s.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`,children:kx.map(E=>r.jsx("option",{value:E.value,children:E.label},E.value))})]}),r.jsxs("div",{children:[r.jsxs("label",{className:`block text-sm font-medium mb-2 ${s.text}`,children:["Expected Timeframe"," ",r.jsx("span",{className:"text-red-400",children:"*"})]}),r.jsxs("div",{className:"relative",children:[r.jsx(Jr,{className:`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${s.textSecondary} pointer-events-none`}),r.jsx("select",{name:"timeframe",value:m.timeframe,onChange:z,required:!0,className:`w-full pl-12 pr-4 py-4 ${s.selectBg} border ${C.timeframe?"border-red-500":s.border} rounded-xl ${s.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none`,children:Sx.map(E=>r.jsx("option",{value:E.value,children:E.label},E.value))})]}),C.timeframe&&r.jsx("p",{className:"mt-1 text-xs text-red-400",children:C.timeframe})]}),r.jsxs("div",{children:[r.jsxs("label",{className:`block text-sm font-medium mb-2 ${s.text}`,children:["Budget Range (EUR)"," ",r.jsx("span",{className:"text-red-400",children:"*"})]}),r.jsxs("div",{className:"relative",children:[r.jsx(Qh,{className:`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${s.textSecondary} pointer-events-none`}),r.jsx("select",{name:"budget",value:m.budget,onChange:z,required:!0,className:`w-full pl-12 pr-4 py-4 ${s.selectBg} border ${C.budget?"border-red-500":s.border} rounded-xl ${s.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none`,children:$x.map(E=>r.jsx("option",{value:E.value,children:E.label},E.value))})]}),C.budget&&r.jsx("p",{className:"mt-1 text-xs text-red-400",children:C.budget})]})]}),_({icon:tr,label:"Project Description",name:"description",required:!0,rows:6,placeholder:"Describe your project…",maxLength:Ge.description}),r.jsxs("div",{className:"flex gap-4",children:[r.jsx("button",{type:"button",onClick:()=>me(1),className:`flex-1 py-4 px-6 ${o?"bg-gray-800 hover:bg-gray-700":"bg-gray-200 hover:bg-gray-300"} ${s.text} font-semibold rounded-xl transition-all duration-300`,children:"Back"}),r.jsx("button",{type:"button",onClick:()=>me(3),className:`flex-1 py-4 px-6 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]`,children:"Continue to Requirements"})]})]}),g===3&&r.jsxs("div",{className:"space-y-8",children:[r.jsxs("div",{children:[r.jsx("h3",{className:`text-3xl font-bold mb-2 bg-gradient-to-r ${s.gradientQuaterly} bg-clip-text text-transparent`,children:"Technical Requirements"}),r.jsx("p",{className:`${s.textSecondary} mb-8`,children:"Help me understand your technical needs"})]}),r.jsxs("div",{children:[r.jsxs("label",{className:`block text-sm font-medium mb-4 ${s.text}`,children:["Key Features"," ",r.jsx("span",{className:s.textSecondary,children:"(Select all that apply)"})]}),r.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:jx.map(E=>r.jsx("button",{type:"button",onClick:()=>K(E),className:`px-4 py-3 rounded-lg border transition-all text-sm ${m.features.includes(E)?"border-blue-500 bg-blue-500/10 text-blue-400":`${s.border} ${s.inputBg} ${s.textSecondary} ${s.hoverBorder}`}`,children:E},E))})]}),_({icon:zi,label:"Project Goals & Success Metrics",name:"goals",placeholder:"Objectives and how you'll measure success",maxLength:Ge.goals}),_({icon:ks,label:"Target Audience",name:"targetAudience",rows:3,placeholder:"Who will use this?",maxLength:Ge.targetAudience}),_({icon:$t,label:"Technical Requirements & Integrations",name:"technicalRequirements",placeholder:"Stripe, AWS, frameworks, etc.",maxLength:Ge.technicalRequirements}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsx("label",{className:`block text-sm font-medium mb-2 ${s.text}`,children:"Do you have existing designs?"}),r.jsx("select",{name:"hasDesign",value:m.hasDesign,onChange:z,className:`w-full px-4 py-4 ${s.selectBg} border ${s.border} rounded-xl ${s.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`,children:Cx.map(E=>r.jsx("option",{value:E.value,children:E.label},E.value))})]}),r.jsxs("div",{children:[r.jsx("label",{className:`block text-sm font-medium mb-2 ${s.text}`,children:"Need hosting/deployment help?"}),r.jsx("select",{name:"needsHosting",value:m.needsHosting,onChange:z,className:`w-full px-4 py-4 ${s.selectBg} border ${s.border} rounded-xl ${s.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`,children:Px.map(E=>r.jsx("option",{value:E.value,children:E.label},E.value))})]})]}),r.jsxs("div",{className:"flex gap-4",children:[r.jsx("button",{type:"button",onClick:()=>me(2),className:`flex-1 py-4 px-6 ${o?"bg-gray-800 hover:bg-gray-700":"bg-gray-200 hover:bg-gray-300"} ${s.text} font-semibold rounded-xl transition-all duration-300`,children:"Back"}),r.jsx("button",{type:"button",onClick:()=>me(4),className:`flex-1 py-4 px-6 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]`,children:"Continue to Final Details"})]})]}),g===4&&r.jsxs("div",{className:"space-y-8",children:[r.jsxs("div",{children:[r.jsx("h3",{className:`text-3xl font-bold mb-2 bg-gradient-to-r ${s.gradientQuintly} bg-clip-text text-transparent`,children:"Additional Information"}),r.jsx("p",{className:`${s.textSecondary} mb-8`,children:"Final details to help me provide an accurate estimate"})]}),_({icon:tr,label:"Design Preferences & Inspiration",name:"designPreferences",placeholder:"e.g., 'Modern and minimal like Stripe'",maxLength:Ge.designPreferences}),r.jsxs("div",{children:[r.jsx("label",{className:`block text-sm font-medium mb-4 ${s.text}`,children:"Attachments (Optional)"}),r.jsxs("div",{className:`border-2 border-dashed ${s.border} rounded-xl p-8 text-center ${s.hoverBorder} transition`,children:[r.jsx("input",{type:"file",multiple:!0,onChange:W,className:"hidden",id:"file-upload",accept:"image/*,.pdf,.doc,.docx,.xls,.xlsx,.fig"}),r.jsxs("label",{htmlFor:"file-upload",className:"cursor-pointer block",children:[r.jsx(G0,{className:`w-12 h-12 ${s.textSecondary} mx-auto mb-4`}),r.jsx("p",{className:`text-sm ${s.text} mb-2 font-medium`,children:"Click to upload or drag and drop"}),r.jsx("p",{className:`text-xs ${s.textSecondary} mb-4`,children:"Wireframes, mockups, specifications, or reference files"}),r.jsxs("p",{className:`text-xs ${s.textSecondary}`,children:["Max ",$i," files, 10MB each"]})]})]}),m.attachments.length>0&&r.jsx("div",{className:"mt-4 space-y-2",children:m.attachments.map((E,F)=>r.jsxs("div",{className:`flex items-center justify-between p-3 ${s.inputBg} border ${s.border} rounded-lg`,children:[r.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[r.jsx(tr,{className:"w-5 h-5 text-blue-400 flex-shrink-0"}),r.jsxs("div",{className:"min-w-0 flex-1",children:[r.jsx("p",{className:`text-sm ${s.text} truncate`,children:E.name}),r.jsxs("p",{className:`text-xs ${s.textSecondary}`,children:[(E.size/1024/1024).toFixed(2)," ","MB"]})]})]}),r.jsx("button",{type:"button",onClick:()=>te(F),className:`p-1 ${o?"hover:bg-red-500/10":"hover:bg-red-50"} rounded-lg transition`,children:r.jsx(Ad,{className:"w-5 h-5 text-red-400"})})]},F))})]}),r.jsxs("div",{className:`${o?`bg-gradient-to-r ${s.badgeGradient} border-blue-500/30`:`bg-gradient-to-r ${s.secondBadgeGradient} border-blue-500/20`} border rounded-xl p-6`,children:[r.jsxs("h4",{className:`font-semibold mb-3 flex items-center gap-2 ${s.text}`,children:[r.jsx(Mt,{className:"w-5 h-5 text-blue-400"}),"What happens next?"]}),r.jsx("ul",{className:`space-y-2 text-sm ${s.textSecondary}`,children:["I'll review your requirements in detail (24-48 hours)","You'll receive a comprehensive proposal with timeline, milestones, and pricing in EUR","We can schedule a call to discuss any questions or refinements","Once approved, we'll kick off with a detailed project roadmap"].map((E,F)=>r.jsxs("li",{className:"flex items-start gap-2",children:[r.jsx(Cn,{className:"w-4 h-4 text-green-400 mt-0.5 flex-shrink-0"}),r.jsx("span",{children:E})]},F))})]}),r.jsxs("div",{className:"flex gap-4",children:[r.jsx("button",{type:"button",onClick:()=>me(3),className:`flex-1 py-4 px-6 ${o?"bg-gray-800 hover:bg-gray-700":"bg-gray-200 hover:bg-gray-300"} ${s.text} font-semibold rounded-xl transition-all duration-300`,children:"Back"}),r.jsx("button",{type:"submit",disabled:p,className:`flex-1 py-4 px-6 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2`,children:p?r.jsxs(r.Fragment,{children:[r.jsx(h0,{className:"w-5 h-5 animate-spin"}),"Submitting..."]}):r.jsxs(r.Fragment,{children:[r.jsx(E0,{className:"w-5 h-5"}),"Submit Project Inquiry"]})})]}),r.jsx("p",{className:`text-xs ${s.textSecondary} text-center`,children:"By submitting, you agree to receive project-related communications. Your information will be kept confidential."})]})]})]})}),r.jsx("section",{className:"px-6 pb-32",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsxs("div",{className:"text-center mb-12",children:[r.jsx("h2",{className:`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${s.lightGradient} bg-clip-text text-transparent`,children:"Frequently Asked Questions"}),r.jsx("p",{className:`text-lg ${s.textSecondary}`,children:"Everything you need to know about working together"})]}),r.jsx("div",{className:"grid gap-6",children:Ex.map((E,F)=>r.jsxs("div",{className:`${s.cardBg} rounded-xl p-6 border ${s.border} ${s.hoverBorder} transition-all`,children:[r.jsx("h3",{className:`text-lg font-semibold mb-3 ${s.text}`,children:E.question}),r.jsx("p",{className:`text-sm ${s.textSecondary} leading-relaxed`,children:E.answer})]},F))}),r.jsx("div",{className:"mt-12 text-center",children:r.jsxs("div",{className:`inline-block ${o?`bg-gradient-to-r ${s.badgeGradient} border-blue-500/30`:`bg-gradient-to-r ${s.secondBadgeGradient} border-blue-500/20`} border rounded-xl p-8`,children:[r.jsx("p",{className:`${s.textSecondary} mb-4`,children:"Still unsure where your project fits?"}),r.jsxs("a",{href:`mailto:${er.email}`,className:`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105`,children:[r.jsx(ot,{className:"w-5 h-5"}),"Send a message!"]})]})})]})})]})},Mx=()=>{const{darkMode:o}=gt(),s=_t(o),[c,m]=$.useState("individual"),d=p=>p==null?"—":p===0?"Free":new Intl.NumberFormat(void 0,{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(p),f=p=>{const y={Code:$t,Cpu:Sd,Brain:kd,GraduationCap:Ed,FolderTree:Pd};return y[p]||y.Code},x={dev:"Developer workflow & automation",sys:"System monitoring & telemetry",iris:"Local-first AI tooling",lab:"Experimental & learning tools"};return r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"relative pt-32 pb-20 px-6 overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:`radial-gradient(circle at 50% 50%, ${o?"rgba(99, 102, 241, 0.15)":"rgba(99, 102, 241, 0.08)"}, transparent 50%)`}}),r.jsx("div",{className:`absolute top-1/4 left-1/4 w-96 h-96 ${s.blobBlue} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}),r.jsx("div",{className:`absolute top-1/3 right-1/4 w-96 h-96 ${s.blobPurple} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}),r.jsx("div",{className:`absolute bottom-1/4 left-1/2 w-96 h-96 ${s.blobPink} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 `})]}),r.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${s.badgeGradient} rounded-full border ${s.blobBlue}/20 mb-6 animate-fade-in`,children:[r.jsx(Vh,{className:`w-4 h-4 ${s.textBlue} animate-pulse`}),r.jsx("span",{className:"text-sm font-medium",children:"Straightforward, Transparent Pricing"})]}),r.jsx("h1",{className:`text-5xl md:text-6xl font-bold ${s.text} mb-6`,children:"Choose Your Plan"}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-3xl mx-auto`,children:"Pay once or subscribe annually — your choice. All licenses include continuous updates and offline activation."})]}),r.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-16",children:[{id:"individual",label:"Personal Use"},{id:"professional",label:"Team Use"},{id:"enterprise",label:"Organization Use"}].map(p=>r.jsx("button",{onClick:()=>m(p.id),className:`px-8 py-3 rounded-full font-medium transition ${c===p.id?`bg-gradient-to-r ${s.gradientPrimary} text-white shadow-lg`:`${s.cardBg} ${s.textSecondary} border ${s.border} ${s.hoverBg}`}`,children:p.label},p.id))}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",children:ar.map(p=>{var g,N,C,P;const y=f(p.icon);return r.jsxs("div",{"data-animate":!0,className:`${s.cardBg} rounded-3xl p-8 border ${s.border} hover:border-blue-500/50 transition-all duration-300`,children:[r.jsx(y,{className:"w-12 h-12 text-blue-500 mb-4"}),r.jsx("h3",{className:`text-2xl font-bold ${s.text} mb-2`,children:p.name}),r.jsx("p",{className:`text-sm ${s.textSecondary} mb-6`,children:p.tagline}),r.jsxs("div",{className:"space-y-4 mb-6",children:[c==="individual"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:[r.jsx("div",{className:`text-sm ${s.textTertiary} mb-1`,children:"Annual"}),r.jsxs("div",{className:`text-4xl font-bold ${s.text}`,children:[d((g=p.plans)==null?void 0:g.individual.annual),r.jsx("span",{className:"text-lg",children:"/yr"})]})]}),r.jsxs("div",{children:[r.jsx("div",{className:`text-sm ${s.textTertiary} mb-1`,children:"One-Time"}),r.jsx("div",{className:`text-3xl font-bold ${s.text}`,children:d((N=p.plans)==null?void 0:N.individual.oneTime)})]})]}),c==="professional"&&r.jsxs("div",{children:[r.jsx("div",{className:`text-sm ${s.textTertiary} mb-1`,children:"Annual"}),r.jsxs("div",{className:`text-4xl font-bold ${s.text}`,children:[d((C=p.plans)==null?void 0:C.professional.annual),r.jsx("span",{className:"text-lg",children:"/yr"})]}),r.jsx("div",{className:`text-sm ${s.textSecondary} mt-2`,children:"+ Priority support & 2 devices"})]}),c==="enterprise"&&r.jsxs("div",{children:[r.jsxs("div",{className:`text-sm ${s.textTertiary} mb-1`,children:["Annual (",p.plans.enterprise.seats," ","seats)"]}),r.jsxs("div",{className:`text-4xl font-bold ${s.text}`,children:[d((P=p.plans)==null?void 0:P.enterprise.annual),r.jsx("span",{className:"text-lg",children:"/yr"})]}),r.jsx("div",{className:`text-sm ${s.textSecondary} mt-2`,children:"Central license management + SLA"})]})]}),r.jsxs("button",{onClick:()=>{const O=`Checkout coming soon!

Interested in ${p.name}?
Contact us at contact@nf-software.com`;alert(O)},className:`block text-center w-full py-3 bg-gradient-to-r ${p.gradient} text-white font-semibold rounded-full hover:shadow-xl transition mb-4 cursor-pointer`,children:["Get ",p.name]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("div",{className:`text-xs ${s.textTertiary} mb-2`,children:"Includes:"}),p.tools.slice(0,3).map(O=>r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Ih,{className:"w-4 h-4 text-green-500 flex-shrink-0"}),r.jsx("span",{className:`text-sm ${s.textSecondary}`,children:O.name})]},O.name)),p.tools.length>3&&r.jsxs("div",{className:`text-sm ${s.textSecondary} pl-6`,children:["+ ",p.tools.length-3," more tools"]})]})]},p.slug)})}),r.jsxs("div",{"data-animate":!0,className:`${s.cardBg} rounded-3xl p-8 border ${s.border} overflow-x-auto mb-16`,children:[r.jsx("h2",{className:`text-3xl font-bold ${s.text} mb-8`,children:"Full Pricing Breakdown"}),r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"w-full min-w-[800px]",children:[r.jsx("thead",{children:r.jsxs("tr",{className:`border-b ${s.border}`,children:[r.jsx("th",{className:`text-left p-4 ${s.text} font-semibold`,children:"Tool / Product"}),r.jsx("th",{className:`text-left p-4 ${s.text} font-semibold`,children:"Suite"}),r.jsx("th",{className:`text-left p-4 ${s.text} font-semibold`,children:"Annual"}),r.jsx("th",{className:`text-left p-4 ${s.text} font-semibold`,children:"One-Time"}),r.jsx("th",{className:`text-left p-4 ${s.text} font-semibold`,children:"Status"})]})}),r.jsxs("tbody",{children:[ar.map(p=>{var g,N;const y=f(p.icon);return r.jsxs($.Fragment,{children:[r.jsxs("tr",{className:`border-b ${s.border} ${s.hoverBg}`,children:[r.jsx("td",{className:"p-4",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-r ${p.gradient} flex items-center justify-center`,children:r.jsx(y,{className:"w-5 h-5 text-white"})}),r.jsxs("div",{children:[r.jsx("div",{className:`font-semibold ${s.text}`,children:p.name}),r.jsx("div",{className:`text-sm ${s.textSecondary}`,children:x[p.id]})]})]})}),r.jsx("td",{className:"p-4",children:r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${p.gradient} text-white`,children:"Bundle"})}),r.jsx("td",{className:"p-4",children:r.jsxs("span",{className:`font-semibold ${s.text}`,children:[d((g=p.plans)==null?void 0:g.individual.annual),"/yr"]})}),r.jsx("td",{className:"p-4",children:r.jsx("span",{className:`font-semibold ${s.text}`,children:d((N=p.plans)==null?void 0:N.individual.oneTime)})}),r.jsx("td",{className:"p-4",children:r.jsx("span",{className:"px-3 py-1 rounded-full text-xs border border-blue-500/50 text-blue-500",children:"Bundle Pricing"})})]}),p.tools.map(C=>{var P,O;return r.jsxs("tr",{className:`border-b ${s.border} ${s.hoverBg}`,children:[r.jsxs("td",{className:"p-4 pl-16",children:[r.jsx("div",{className:`font-medium ${s.text}`,children:C.name}),r.jsx("div",{className:`text-sm ${s.textSecondary}`,children:C.tagline})]}),r.jsx("td",{className:"p-4",children:r.jsx("span",{className:`text-sm ${s.textSecondary}`,children:p.name})}),r.jsx("td",{className:"p-4",children:r.jsxs("span",{className:s.text,children:[d((P=C.plan)==null?void 0:P.annual),"/yr"]})}),r.jsx("td",{className:"p-4",children:r.jsx("span",{className:s.text,children:d((O=C.plan)==null?void 0:O.oneTime)})}),r.jsx("td",{className:"p-4",children:r.jsx("span",{className:`px-2 py-1 rounded-full text-xs ${C.status==="Live"?"bg-green-500/20 text-green-500":C.status==="Beta"?"bg-yellow-500/20 text-yellow-500":C.status==="Alpha"?"bg-purple-500/20 text-purple-500":"bg-blue-500/20 text-blue-500"}`,children:C.status})})]},C.slug||C.name)})]},p.slug)}),ys.map(p=>{var g,N;const y=f(p.icon);return r.jsxs("tr",{className:`border-b ${s.border} ${s.hoverBg}`,children:[r.jsx("td",{className:"p-4",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-r ${p.gradient} flex items-center justify-center`,children:r.jsx(y,{className:"w-5 h-5 text-white"})}),r.jsxs("div",{children:[r.jsx("div",{className:`font-medium ${s.text}`,children:p.name}),r.jsx("div",{className:`text-sm ${s.textSecondary}`,children:p.tagline})]})]})}),r.jsx("td",{className:"p-4",children:r.jsx("span",{className:`text-sm ${s.textSecondary}`,children:"Standalone"})}),r.jsx("td",{className:"p-4",children:r.jsxs("span",{className:s.text,children:[d((g=p.plan)==null?void 0:g.annual),"/yr"]})}),r.jsx("td",{className:"p-4",children:r.jsx("span",{className:s.text,children:d((N=p.plan)==null?void 0:N.oneTime)})}),r.jsx("td",{className:"p-4",children:r.jsx("span",{className:`px-2 py-1 rounded-full text-xs ${p.status==="Live"?"bg-green-500/20 text-green-500":p.status==="Beta"?"bg-yellow-500/20 text-yellow-500":p.status==="Alpha"?"bg-purple-500/20 text-purple-500":"bg-blue-500/20 text-blue-500"}`,children:p.status})})]},p.name)})]})]})})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[r.jsxs("div",{"data-animate":!0,className:`${s.cardBg} rounded-2xl p-8 border ${s.border} hover:border-blue-500/50 transition`,children:[r.jsx(rr,{className:"w-12 h-12 text-blue-500 mb-4"}),r.jsx("h3",{className:`text-xl font-bold ${s.text} mb-3`,children:"Lifetime Updates"}),r.jsx("p",{className:`text-sm ${s.textSecondary}`,children:"All annual plans include continuous updates. One-time licenses receive major version upgrades at 40% off."})]}),r.jsxs("div",{"data-animate":!0,className:`${s.cardBg} rounded-2xl p-8 border ${s.border} hover:border-purple-500/50 transition`,children:[r.jsx(ks,{className:"w-12 h-12 text-purple-500 mb-4"}),r.jsx("h3",{className:`text-xl font-bold ${s.text} mb-3`,children:"Team Plans"}),r.jsx("p",{className:`text-sm ${s.textSecondary}`,children:"Enterprise plans include central license management, multi-user support, and priority assistance."})]}),r.jsxs("div",{"data-animate":!0,className:`${s.cardBg} rounded-2xl p-8 border ${s.border} hover:border-green-500/50 transition`,children:[r.jsx(Cd,{className:"w-12 h-12 text-green-500 mb-4"}),r.jsx("h3",{className:`text-xl font-bold ${s.text} mb-3`,children:"Offline Activation"}),r.jsx("p",{className:`text-sm ${s.textSecondary}`,children:"All licenses support offline activation via machine binding. Transfer licenses between devices anytime."})]})]})]})]}),r.jsx("section",{"data-animate":!0,className:"relative py-32 px-6",children:r.jsx("div",{className:"max-w-5xl mx-auto",children:r.jsxs("div",{className:`${s.cardBg} rounded-3xl p-12 md:p-20 text-center space-y-8 border ${s.border} relative overflow-hidden`,children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 2px 2px, ${o?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"} 1px, transparent 0)`,backgroundSize:"32px 32px"}})}),r.jsxs("div",{className:"relative z-10",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${s.badgeGradient} rounded-full border border-blue-500/20 mb-6`,children:[r.jsx(Mt,{className:"w-4 h-4 text-blue-500"}),r.jsx("span",{className:"text-sm font-medium",children:"Questions?"})]}),r.jsx("h2",{className:`text-4xl md:text-6xl font-bold ${s.text} mb-6`,children:"Need something more specific?"}),r.jsx("p",{className:`text-lg md:text-xl ${s.textSecondary} max-w-2xl mx-auto mb-8`,children:"For larger teams or specialized workflows, custom licensing and collaboration agreements are available."}),r.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[r.jsxs(de,{to:"/contact",className:`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105`,children:["Start Your Project",r.jsx(ht,{className:"w-5 h-5"})]}),r.jsxs("a",{href:"#/products",className:`inline-flex items-center gap-2 px-8 py-4 ${s.cardBg} border ${s.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`,children:[r.jsx(nr,{className:"w-5 h-5"}),"View Products"]})]})]})]})})})]})},Qr=[{id:"building-iris-local-ai",title:"Building Iris: A Local-First AI Assistant",slug:"building-iris-local-ai",excerpt:"How we built Iris, a privacy-focused AI assistant that runs entirely on your machine. No cloud dependencies, no data collection.",content:`
# Building Iris: A Local-First AI Assistant

In an era where AI services increasingly depend on cloud infrastructure, we took a different approach. Iris is built with a local-first philosophy—your data never leaves your machine.

## The Challenge

Modern AI assistants require constant internet connectivity and send all your queries to remote servers. This creates several problems:

- **Privacy concerns**: Your conversations are stored on company servers
- **Latency**: Network round-trips add delay to every interaction
- **Costs**: Cloud processing isn't free at scale
- **Availability**: No internet means no assistant

## Our Solution

Iris uses local models and runs entirely on your hardware. Here's what makes it special:

### Privacy by Design
All processing happens on your machine. We literally can't see your data because it never reaches us.

### Lightning Fast
No network latency. Responses are instant because everything runs locally.

### Offline Capable
Work anywhere—on a plane, in a coffee shop, or in your basement. Internet optional.

### Cost Effective
Pay once, use forever. No subscription fees or API costs.

## Technical Architecture

Iris is built with:
- **Go** for the core engine (fast, efficient, cross-platform)
- **Python** for ML model integration
- **OpenAI API** compatibility layer for easy integration

The architecture allows you to swap models, customize behavior, and extend functionality without vendor lock-in.

## What's Next

We're working on:
- More model support
- Better context management
- Plugin system for extensibility
- Mobile apps

Iris is currently in alpha. Join our waitlist to be among the first testers.
        `,author:"Noam Favier",date:"2024-12-15",readTime:"5 min read",category:"Product",tags:["AI","Privacy","Local-First","Open Source"],image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&q=80&fit=crop",featured:!0},{id:"why-local-first-software",title:"Why Local-First Software Matters",slug:"why-local-first-software",excerpt:"The case for building software that prioritizes local execution over cloud dependency. Better performance, privacy, and user control.",content:`
# Why Local-First Software Matters

The pendulum has swung too far toward cloud-centric architectures. It's time to bring computing back to the edge.

## The Cloud-First Problem

Over the last decade, we've moved everything to the cloud:
- Documents (Google Docs, Office 365)
- Photos (iCloud, Google Photos)
- Development tools (GitHub Codespaces, GitPod)
- Even our text editors (VS Code Server)

This creates problems:
- **Performance**: Network is always slower than local disk
- **Privacy**: Your data is on someone else's computer
- **Cost**: Monthly fees add up
- **Reliability**: Service outages affect everyone

## Local-First Advantages

### Speed
RAM and SSD access measured in nanoseconds. Network requests in milliseconds. That's 6 orders of magnitude difference.

### Privacy
Your files stay on your machine. No telemetry, no tracking, no data mining.

### Ownership
You paid for your computer. Use it. Don't rent someone else's.

### Resilience
Your tools work offline. No internet outage can stop you.

## The Best of Both Worlds

Local-first doesn't mean "never cloud." It means:
- Local by default
- Cloud when beneficial
- User controls sync
- Works offline

Tools like Sysmon-CLI embody this: monitoring runs locally, but you can export to your preferred cloud service.

## Building Local-First

At NF Software, we're committed to:
- Native applications over web apps when appropriate
- Local data storage
- Optional sync, never required
- Open file formats

The future of software is local-first. Join us.
        `,author:"Noam Favier",date:"2024-11-28",readTime:"4 min read",category:"Philosophy",tags:["Local-First","Privacy","Performance"],image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&q=80&fit=crop",featured:!0},{id:"sysmon-cli-architecture",title:"Sysmon-CLI: Building a Cross-Platform System Monitor",slug:"sysmon-cli-architecture",excerpt:"Deep dive into the architecture of Sysmon-CLI and how we achieved cross-platform system monitoring with minimal overhead.",content:`
# Sysmon-CLI: Building a Cross-Platform System Monitor

System monitoring is harder than it looks. Different OSes expose metrics differently. Polling too often wastes CPU. Too slow misses spikes.

## Design Goals

For Sysmon-CLI, we set clear goals:
- **Lightweight**: <10MB memory footprint
- **Fast**: <1% CPU usage during monitoring
- **Cross-platform**: Windows, macOS, Linux
- **Real-time**: Updates every second
- **Accurate**: No dropped metrics

## Architecture

### The Core Engine (Go)
We chose Go for several reasons:
- Great cross-platform support
- Excellent concurrency primitives
- Fast compilation
- Small binaries

### Platform-Specific Collection
Each OS requires different syscalls:
- Linux: \`/proc\` filesystem
- macOS: \`sysctlbyname\`
- Windows: Performance Data Helper (PDH)

We abstracted these into a unified interface.

### Efficient Polling
Instead of naive polling, we use:
- Event-driven collection where possible
- Batched metric reads
- Goroutines for concurrent collection
- Ring buffers for history

### Export Flexibility
Sysmon-CLI can export to:
- CSV files
- JSON streams
- Prometheus format
- Custom webhooks

## Performance

On a typical system:
- 8MB RAM
- 0.3% CPU
- <1ms metric collection time

This lets you monitor continuously without impacting workload.

## What's Coming

We're adding:
- GPU monitoring
- Network flow tracking
- Process-level metrics
- Alert rules

Sysmon-CLI is open source. Contributions welcome!
        `,author:"Noam Favier",date:"2024-11-10",readTime:"6 min read",category:"Technical",tags:["Go","Systems Programming","Performance"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&q=80&fit=crop",featured:!1},{id:"announcing-zvezda-git-manager",title:"Announcing Zvezda: Git Repository Manager",slug:"announcing-zvezda-git-manager",excerpt:"Introducing Zvezda, a powerful CLI for managing multiple Git repositories. Batch operations, insights, and automation.",content:`
# Announcing Zvezda: Git Repository Manager

If you work with multiple Git repositories, you know the pain. Keeping them updated, finding files across repos, running commands everywhere—it's tedious.

## Enter Zvezda

Zvezda is a Git repository manager built for developers who juggle many projects.

### Key Features

**Batch Operations**
Run commands across all repos:
\`\`\`bash
zvezda exec "git pull"
zvezda exec "npm update"
\`\`\`

**Cross-Repo Search**
Find files or code across all your projects:
\`\`\`bash
zvezda search "TODO" --type js
\`\`\`

**Repository Insights**
See stats across your entire codebase:
- Lines of code by language
- Commit activity
- Branch health
- Dependency versions

**Smart Sync**
Keep everything up to date automatically:
\`\`\`bash
zvezda sync --auto-stash
\`\`\`

## Why We Built It

As we developed multiple suites at NF Software, managing repos became a bottleneck. We tried existing tools but they were either:
- Too heavy (full GUI apps)
- Too limited (basic scripts)
- Too opinionated (forced workflows)

So we built Zvezda: powerful, fast, and flexible.

## Architecture

Built with:
- **Go**: Fast, single-binary distribution
- **GitHub API**: Native integration
- **SQLite**: Local repo metadata
- **Cobra**: CLI framework

## Get Started

Zvezda is in beta. Install:
\`\`\`bash
brew install nf-software/tap/zvezda
\`\`\`

Or grab binaries from our releases page.

## Roadmap

Coming soon:
- GitLab/Bitbucket support
- Team collaboration features
- CI/CD integration
- Visual repo graphs

Try Zvezda today and let us know what you think!
        `,author:"Noam Favier",date:"2024-10-22",readTime:"4 min read",category:"Product",tags:["Git","CLI","Developer Tools"],image:"https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&h=600&q=80&fit=crop",featured:!1},{id:"developer-productivity-tools",title:"Essential Developer Productivity Tools",slug:"developer-productivity-tools",excerpt:"A curated list of tools that actually improve developer productivity. No fluff, just tools we use daily.",content:`
# Essential Developer Productivity Tools

After years of development, here are the tools that actually made us more productive.

## CLI Tools

### bat
Better \`cat\` with syntax highlighting:
\`\`\`bash
bat src/main.go
\`\`\`

### ripgrep (rg)
Insanely fast code search:
\`\`\`bash
rg "TODO" --type rust
\`\`\`

### fzf
Fuzzy finder for everything:
\`\`\`bash
git checkout $(git branch | fzf)
\`\`\`

### jq
JSON processing:
\`\`\`bash
curl api.example.com | jq '.data.users'
\`\`\`

## Development Environment

### tmux
Terminal multiplexer. Run multiple sessions, detach/reattach:
\`\`\`bash
tmux new -s dev
\`\`\`

### neovim
Modern Vim with LSP support. Lightning fast.

### VS Code
When you need a full IDE. Great debugging, extensions.

## Automation

### Make
Simple task automation:
\`\`\`makefile
build:
    go build -o bin/app

test:
    go test ./...
\`\`\`

### Just
Better task runner than Make for project commands.

## Monitoring

### htop
Better \`top\` for process monitoring.

### ncdu
Disk usage analyzer.

### Sysmon-CLI (shameless plug)
Real-time system monitoring with export capabilities.

## Version Control

### lazygit
TUI for Git operations. Makes rebasing easy.

### tig
Text-mode interface for Git.

### Zvezda (another plug)
Manage multiple repos efficiently.

## Principles

The best tools:
- **Do one thing well**
- **Compose with others**
- **Are fast**
- **Work offline**
- **Have great docs**

## Your Stack?

What tools make you more productive? Let us know on GitHub or Twitter.
        `,author:"Noam Favier",date:"2024-10-05",readTime:"5 min read",category:"Resources",tags:["Productivity","CLI","Developer Tools"],image:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=600&q=80&fit=crop",featured:!1},{id:"microservices-vs-monolith",title:"Microservices vs Monolith: Choosing the Right Architecture",slug:"microservices-vs-monolith",excerpt:"A practical guide to deciding between microservices and monolithic architectures. When each makes sense and what to consider.",content:`
# Microservices vs Monolith: Choosing the Right Architecture

The microservices vs monolith debate continues. But the answer isn't one-size-fits-all.

## The Monolith Case

Start with a monolith. Here's why:

### Simplicity
- Single codebase
- One deployment
- Easier debugging
- Simpler testing

### Performance
- No network overhead between components
- Faster inter-module communication
- Single database transaction

### Team Size
If you have fewer than 20 developers, a monolith is likely optimal. Conway's Law applies: your architecture mirrors your org structure.

## When Microservices Make Sense

Consider microservices when:

### Scale Requirements Differ
One component needs 100x more resources than others. Split it out.

### Team Independence
Multiple teams need to deploy independently without coordination overhead.

### Technology Diversity
Different components genuinely benefit from different tech stacks.

### Failure Isolation
Critical that one component's failure doesn't bring down everything.

## The Middle Ground: Modular Monolith

Before jumping to microservices, try a modular monolith:
- Clear module boundaries
- Well-defined interfaces
- Independent deployment of modules
- Extract to microservices later if needed

## Our Approach at NF Software

We build modular monoliths:
- Clear separation of concerns
- Interfaces designed for potential extraction
- Monitor which modules need scaling
- Extract only when necessary

## Common Microservices Pitfalls

### Premature Distribution
Most startups don't need microservices on day one. The complexity overhead is real.

### Distributed Monolith
Poorly bounded microservices that all call each other = worst of both worlds.

### Operational Overhead
Kubernetes, service mesh, distributed tracing, log aggregation—it adds up fast.

## Decision Framework

**Start with monolith if:**
- Small team (< 20 devs)
- MVP or early stage
- Uncertain about domain boundaries
- Limited ops resources

**Consider microservices if:**
- Large team (> 50 devs)
- Clear domain boundaries
- Different scaling needs
- Strong ops capability

## Conclusion

Architecture is about tradeoffs. Microservices solve real problems but introduce complexity. Start simple, evolve as needed.

Most importantly: you can change your mind. Build for easy refactoring.
        `,author:"Noam Favier",date:"2025-01-05",readTime:"7 min read",category:"Technical",tags:["Architecture","Microservices","Software Design"],image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&q=80&fit=crop",featured:!1},{id:"debugging-production-issues",title:"Debugging Production Issues: A Systematic Approach",slug:"debugging-production-issues",excerpt:"Learn how to effectively debug production issues with limited information. Battle-tested techniques from real incidents.",content:`
# Debugging Production Issues: A Systematic Approach

Production bugs are different. No debugger, limited logs, users affected. Here's how to handle them.

## The Incident Response Framework

### 1. Assess and Triage
First, understand the scope:
- How many users affected?
- Is it getting worse?
- Can we rollback?

**Action**: Make a quick decision on severity. P0 means all hands on deck.

### 2. Gather Information
Collect data before diving in:
\`\`\`bash
# Check recent deployments
git log --since="2 hours ago" --oneline

# View error rates
grep "ERROR" /var/log/app.log | tail -100

# Check system metrics
sysmon-cli --last 2h
\`\`\`

### 3. Form Hypotheses
Based on data, list possible causes:
- Recent code changes
- Infrastructure issues
- Third-party service problems
- Data corruption

### 4. Test Systematically
Test one hypothesis at a time. Document what you try.

## Essential Debugging Techniques

### Read the Logs
Obvious but often skipped. Read the actual error messages:
\`\`\`bash
# Find the first occurrence
grep -n "ERROR" app.log | head -1

# Context around errors
grep -B 10 -A 10 "ERROR" app.log
\`\`\`

### Binary Search Deploys
If logs don't help, find the breaking commit:
\`\`\`bash
git bisect start
git bisect bad HEAD
git bisect good v1.2.0
\`\`\`

Deploy each bisect point to staging and test.

### Reproduce Locally
Try to recreate the issue:
- Use production data (anonymized)
- Match infrastructure versions
- Check environment variables

### Add Instrumentation
Can't see what's happening? Add logging:
\`\`\`go
log.Printf("DEBUG: user_id=%s, action=%s, result=%v",
    userID, action, result)
\`\`\`

Deploy, wait for logs, then remove debug statements.

## Production Debugging Tools

### Structured Logging
Use structured logs for easier filtering:
\`\`\`json
{
  "timestamp": "2025-01-05T10:30:00Z",
  "level": "error",
  "service": "api",
  "user_id": "123",
  "error": "connection timeout"
}
\`\`\`

### Distributed Tracing
For microservices, use tracing:
- Jaeger or Zipkin
- Track requests across services
- Identify bottlenecks

### Metrics and Monitoring
Set up alerts before incidents:
- Error rates
- Response times
- Resource usage

Sysmon-CLI helps with real-time system metrics.

## Common Production Issues

### Memory Leaks
Symptoms: Gradually increasing memory, eventual OOM
\`\`\`bash
# Monitor memory over time
watch -n 5 'ps aux | grep app'
\`\`\`

### Database Connection Exhaustion
Symptoms: "Too many connections" errors
\`\`\`sql
SHOW PROCESSLIST;
-- Look for stuck queries
\`\`\`

### Rate Limiting
Symptoms: Intermittent failures, 429 errors
Check external API usage, add backoff/retry logic.

## Post-Incident

### Write a Postmortem
Document:
- What happened
- Root cause
- How it was fixed
- How to prevent recurrence

**No blame**. Focus on systems and processes.

### Add Tests
Prevent regression:
\`\`\`go
func TestProductionBug_Issue123(t *testing.T) {
    // Reproduce the bug
    // Verify the fix
}
\`\`\`

### Improve Observability
Each incident should result in better monitoring.

## Prevention is Better

The best production bugs are the ones that never happen:
- Comprehensive testing
- Gradual rollouts
- Feature flags
- Monitoring and alerts
- Chaos engineering

## Tools We Use

At NF Software:
- **Logging**: Structured JSON logs
- **Monitoring**: Prometheus + Grafana
- **Tracing**: When needed for distributed systems
- **Sysmon-CLI**: System-level monitoring

## Remember

Stay calm. Production incidents are learning opportunities. Follow the process, document everything, and make systems more resilient.
        `,author:"Noam Favier",date:"2024-12-28",readTime:"8 min read",category:"Technical",tags:["Debugging","DevOps","Production","Monitoring"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&q=80&fit=crop",featured:!1},{id:"go-performance-tips",title:"Go Performance Tips: Making Your Code Faster",slug:"go-performance-tips",excerpt:"Practical tips for optimizing Go applications. From profiling to concurrency patterns that actually improve performance.",content:`
# Go Performance Tips: Making Your Code Faster

Go is fast by default. But you can make it faster. Here's how.

## Rule 0: Measure First

Never optimize without data:
\`\`\`bash
go test -bench=. -benchmem
go test -cpuprofile=cpu.prof
go tool pprof cpu.prof
\`\`\`

Measure, optimize, measure again.

## Memory Allocation

Allocations are often the bottleneck.

### Preallocate Slices
Bad:
\`\`\`go
var results []string
for _, item := range items {
    results = append(results, process(item))
}
\`\`\`

Good:
\`\`\`go
results := make([]string, 0, len(items))
for _, item := range items {
    results = append(results, process(item))
}
\`\`\`

### Use sync.Pool for Temporary Objects
\`\`\`go
var bufferPool = sync.Pool{
    New: func() interface{} {
        return new(bytes.Buffer)
    },
}

func process(data []byte) {
    buf := bufferPool.Get().(*bytes.Buffer)
    defer bufferPool.Put(buf)
    buf.Reset()
    // use buf
}
\`\`\`

### Avoid String Concatenation in Loops
Bad:
\`\`\`go
var result string
for _, s := range strings {
    result += s // allocates every iteration
}
\`\`\`

Good:
\`\`\`go
var builder strings.Builder
for _, s := range strings {
    builder.WriteString(s)
}
result := builder.String()
\`\`\`

## Concurrency Patterns

### Use Worker Pools
Don't spawn unlimited goroutines:
\`\`\`go
func processWithPool(items []Item, workers int) {
    jobs := make(chan Item, len(items))
    results := make(chan Result, len(items))

    // Start workers
    for w := 0; w < workers; w++ {
        go worker(jobs, results)
    }

    // Send jobs
    for _, item := range items {
        jobs <- item
    }
    close(jobs)

    // Collect results
    for i := 0; i < len(items); i++ {
        <-results
    }
}
\`\`\`

### Use Buffered Channels
Reduce goroutine blocking:
\`\`\`go
// Better
ch := make(chan int, 100)
\`\`\`

### Avoid Goroutine Leaks
Always ensure goroutines can exit:
\`\`\`go
func worker(ctx context.Context, jobs <-chan Job) {
    for {
        select {
        case job := <-jobs:
            process(job)
        case <-ctx.Done():
            return // goroutine exits cleanly
        }
    }
}
\`\`\`

## I/O Optimization

### Batch Database Operations
Bad:
\`\`\`go
for _, user := range users {
    db.Insert(user) // N queries
}
\`\`\`

Good:
\`\`\`go
db.BulkInsert(users) // 1 query
\`\`\`

### Use Connection Pools
\`\`\`go
db.SetMaxOpenConns(25)
db.SetMaxIdleConns(5)
db.SetConnMaxLifetime(5 * time.Minute)
\`\`\`

### Buffer I/O
\`\`\`go
file, _ := os.Open("large.txt")
reader := bufio.NewReader(file)
// Much faster than file.Read()
\`\`\`

## CPU Optimization

### Avoid Reflection
Reflection is slow. Use code generation instead:
\`\`\`bash
go install github.com/mailru/easyjson/...
easyjson -all types.go
\`\`\`

### Use Integer Math
Floating-point math is slower:
\`\`\`go
// Store cents as int, not dollars as float64
price := 1999 // $19.99
\`\`\`

### Inline Hot Paths
Small, frequently-called functions get inlined:
\`\`\`go
//go:inline
func add(a, b int) int {
    return a + b
}
\`\`\`

## Profiling Deep Dive

### CPU Profile
\`\`\`bash
go test -cpuprofile=cpu.prof
go tool pprof -http=:8080 cpu.prof
\`\`\`

### Memory Profile
\`\`\`bash
go test -memprofile=mem.prof
go tool pprof -http=:8080 mem.prof
\`\`\`

### Trace
For concurrency issues:
\`\`\`bash
go test -trace=trace.out
go tool trace trace.out
\`\`\`

## Benchmarking Best Practices

\`\`\`go
func BenchmarkProcess(b *testing.B) {
    // Setup
    data := setupTestData()

    b.ResetTimer() // Don't measure setup

    for i := 0; i < b.N; i++ {
        process(data)
    }
}
\`\`\`

Run benchmarks:
\`\`\`bash
go test -bench=. -benchmem -benchtime=10s
\`\`\`

## Real-World Example: Sysmon-CLI

In Sysmon-CLI, we optimized metric collection:
- Preallocated buffers for metrics
- Worker pool for concurrent collection
- sync.Pool for temporary objects
- Result: <1% CPU usage, 8MB memory

## Common Mistakes

1. **Premature optimization**: Measure first
2. **Over-concurrency**: More goroutines ≠ faster
3. **Ignoring allocations**: Profile memory
4. **Not benchmarking**: Intuition is often wrong

## When to Optimize

Optimize when:
- Profiler shows clear hotspot
- Performance impacts users
- Cost savings justify engineering time

Don't optimize:
- Before measuring
- Code that runs once
- When readability matters more

## Tools

- **pprof**: Built-in profiler
- **benchstat**: Compare benchmark runs
- **Sysmon-CLI**: Monitor production performance
- **trace**: Analyze concurrency

## Conclusion

Go is fast. Make it faster by:
1. Measuring with pprof
2. Reducing allocations
3. Using concurrency wisely
4. Profiling continuously

Performance is a feature. Treat it as such.
        `,author:"Noam Favier",date:"2024-12-20",readTime:"10 min read",category:"Technical",tags:["Go","Performance","Optimization","Profiling"],image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&q=80&fit=crop",featured:!1},{id:"api-design-principles",title:"API Design Principles: Building APIs Developers Love",slug:"api-design-principles",excerpt:"Essential principles for designing REST APIs that are intuitive, consistent, and a joy to use. Lessons from building developer tools.",content:`
# API Design Principles: Building APIs Developers Love

Good API design is invisible. Developers just "get it." Here's how to achieve that.

## Core Principles

### 1. Consistency is King

Use the same patterns everywhere:
\`\`\`http
GET    /users
GET    /users/123
POST   /users
PUT    /users/123
DELETE /users/123

GET    /repos
GET    /repos/456
POST   /repos
PUT    /repos/456
DELETE /repos/456
\`\`\`

Same structure for every resource. No surprises.

### 2. Use Standard HTTP Methods

- **GET**: Retrieve data (safe, idempotent)
- **POST**: Create resource
- **PUT**: Update entire resource (idempotent)
- **PATCH**: Partial update
- **DELETE**: Remove resource (idempotent)

Don't invent custom methods.

### 3. Resource-Oriented Design

Think in resources, not actions:
\`\`\`
❌ POST /getUserData
✅ GET  /users/123

❌ POST /addToCart
✅ POST /cart/items

❌ GET  /deleteUser?id=123
✅ DELETE /users/123
\`\`\`

### 4. Use HTTP Status Codes Properly

- **200 OK**: Success
- **201 Created**: Resource created
- **204 No Content**: Success, no body
- **400 Bad Request**: Client error
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Authenticated but not allowed
- **404 Not Found**: Resource doesn't exist
- **500 Internal Server Error**: Server error

### 5. Versioning

Include version in URL:
\`\`\`
/v1/users
/v2/users
\`\`\`

Never break backward compatibility within a version.

## Request Design

### Use JSON

Unless you have a specific reason (binary data, streaming), use JSON:
\`\`\`json
{
  "user": {
    "id": 123,
    "email": "user@example.com",
    "name": "John Doe"
  }
}
\`\`\`

### Accept Flexible Input

Be liberal in what you accept:
\`\`\`json
// All valid date formats
"created_at": "2025-01-05"
"created_at": "2025-01-05T10:30:00Z"
"created_at": 1736071800
\`\`\`

### Validate Early

Return clear validation errors:
\`\`\`json
{
  "error": "validation_failed",
  "message": "Invalid request data",
  "details": [
    {
      "field": "email",
      "message": "Must be a valid email address"
    },
    {
      "field": "age",
      "message": "Must be at least 18"
    }
  ]
}
\`\`\`

## Response Design

### Return Useful Data

When creating a resource, return the full resource:
\`\`\`http
POST /users
{
  "email": "new@example.com",
  "name": "Jane"
}

201 Created
Location: /users/456
{
  "id": 456,
  "email": "new@example.com",
  "name": "Jane",
  "created_at": "2025-01-05T10:30:00Z"
}
\`\`\`

### Include Metadata for Lists

\`\`\`json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 150,
    "total_pages": 8
  }
}
\`\`\`

### Error Responses

Consistent error format:
\`\`\`json
{
  "error": {
    "code": "resource_not_found",
    "message": "User with ID 123 not found",
    "request_id": "req_abc123"
  }
}
\`\`\`

## Pagination

Use cursor-based pagination for scale:
\`\`\`http
GET /users?cursor=abc123&limit=20

{
  "data": [...],
  "pagination": {
    "next_cursor": "def456",
    "has_more": true
  }
}
\`\`\`

Offset-based pagination is simpler but doesn't scale:
\`\`\`http
GET /users?page=2&per_page=20
\`\`\`

## Filtering and Sorting

Support common operations:
\`\`\`http
GET /users?status=active&role=admin
GET /users?sort=-created_at,name
GET /users?q=search+term
\`\`\`

## Rate Limiting

Communicate limits in headers:
\`\`\`http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 987
X-RateLimit-Reset: 1736071800

429 Too Many Requests
{
  "error": "rate_limit_exceeded",
  "message": "Rate limit exceeded. Retry after 60 seconds."
}
\`\`\`

## Authentication

Use standard schemes:
\`\`\`http
Authorization: Bearer <token>
\`\`\`

For API keys:
\`\`\`http
Authorization: ApiKey <key>
\`\`\`

## Webhooks

For events, offer webhooks:
\`\`\`json
POST https://your-app.com/webhooks
{
  "event": "user.created",
  "data": {
    "user": {...}
  },
  "timestamp": "2025-01-05T10:30:00Z"
}
\`\`\`

Include signature for verification:
\`\`\`http
X-Webhook-Signature: sha256=abc123...
\`\`\`

## Documentation

Good APIs have great docs:
- Interactive examples
- Sample requests/responses
- SDKs in major languages
- Changelog for breaking changes

Use OpenAPI/Swagger for machine-readable specs.

## Testing APIs

Provide sandbox environment:
\`\`\`
https://api.example.com      # Production
https://api-sandbox.example.com  # Testing
\`\`\`

## Real-World Example: Iris API

Iris local AI assistant exposes OpenAI-compatible API:
\`\`\`http
POST /v1/chat/completions
Authorization: Bearer local-only

{
  "model": "iris",
  "messages": [...]
}
\`\`\`

Compatibility means existing tools work immediately.

## Common Mistakes

1. **Inconsistent naming**: user_id vs userId vs id
2. **Missing status codes**: Everything returns 200
3. **Unclear errors**: "Error occurred"
4. **Breaking changes**: Without versioning
5. **No rate limiting**: API gets abused

## Best Practices Checklist

- [ ] Consistent resource naming
- [ ] Proper HTTP methods and status codes
- [ ] Clear error messages
- [ ] Pagination support
- [ ] Rate limiting
- [ ] API versioning
- [ ] Authentication/authorization
- [ ] Comprehensive documentation
- [ ] Sandbox environment
- [ ] SDKs for popular languages

## Conclusion

Great APIs are:
- **Intuitive**: Follows conventions
- **Consistent**: Same patterns everywhere
- **Forgiving**: Flexible input, clear errors
- **Well-documented**: Examples and guides
- **Stable**: Backward compatible

Design for your users. They'll thank you.
        `,author:"Noam Favier",date:"2024-12-12",readTime:"9 min read",category:"Technical",tags:["API Design","REST","Software Architecture","Best Practices"],image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&q=80&fit=crop",featured:!1},{id:"effective-code-reviews",title:"The Art of Effective Code Reviews",slug:"effective-code-reviews",excerpt:"How to give and receive code reviews that improve code quality without slowing down development. Practical guidelines from our team.",content:`
# The Art of Effective Code Reviews

Code reviews are essential. But they can be painful. Here's how to make them valuable for everyone.

## Why Code Reviews Matter

Beyond catching bugs:
- **Knowledge sharing**: Everyone learns
- **Code consistency**: Maintain standards
- **Mentorship**: Junior devs improve
- **Collective ownership**: No silos

## For Reviewers

### Review Mindset

You're not the gatekeeper. You're a collaborator helping improve the code.

**Ask questions instead of giving orders:**
- ❌ "This is wrong"
- ✅ "Could we handle this edge case?"

**Praise good work:**
\`\`\`
Nice refactoring here! Much cleaner than before.
\`\`\`

**Distinguish must-fix from nice-to-have:**
\`\`\`
⚠️ BLOCKER: This will cause a memory leak
💡 NIT: Consider renaming for clarity
\`\`\`

### What to Look For

#### Correctness
- Does it solve the problem?
- Are edge cases handled?
- Will it break under load?

#### Design
- Is the approach sound?
- Does it fit the architecture?
- Is there a simpler way?

#### Tests
- Are there tests?
- Do they cover the important cases?
- Are they maintainable?

#### Readability
- Can you understand it?
- Are names clear?
- Is it overly clever?

#### Performance
- Are there obvious bottlenecks?
- Unnecessary allocations?
- N+1 queries?

#### Security
- Input validation?
- Authorization checks?
- Injection vulnerabilities?

### How to Review

#### Review Promptly
Don't make PRs sit for days. Review within 24 hours.

#### Review in Chunks
Big PRs are hard to review. Suggest splitting:
\`\`\`
This PR is pretty large. Could we split into:
1. Database schema changes
2. API implementation
3. Frontend updates
\`\`\`

#### Be Specific
❌ "This is confusing"
✅ "The variable name 'data' doesn't indicate this is user billing info. Consider 'billingRecords'?"

#### Suggest, Don't Demand
\`\`\`go
// Consider using a map for O(1) lookup instead:
userMap := make(map[int]*User)
for _, u := range users {
    userMap[u.ID] = u
}
\`\`\`

#### Focus on Important Issues
Don't nitpick formatting—use automated tools:
\`\`\`bash
go fmt
eslint --fix
\`\`\`

### Common Review Patterns

#### Approving with Comments
\`\`\`
Looks good! A few minor suggestions but nothing blocking.

LGTM (with comments) ✅
\`\`\`

#### Requesting Changes
\`\`\`
A few issues that should be addressed:
⚠️ Missing error handling on line 45
⚠️ Race condition in concurrent access
💡 Consider adding integration test
\`\`\`

#### Asking for More Context
\`\`\`
I'm not familiar with this part of the codebase.
Could you explain why we're caching here?
\`\`\`

## For Authors

### Before Requesting Review

#### Self-Review First
Review your own PR like someone else wrote it:
- Read the diff line by line
- Check for debug code
- Verify tests pass
- Run linters

#### Write a Good Description
\`\`\`markdown
## What
Implements user authentication with JWT tokens

## Why
Replace session-based auth to support mobile apps

## How
- Add JWT signing/validation middleware
- Update user model with refresh tokens
- Add /auth/refresh endpoint

## Testing
- Unit tests for JWT functions
- Integration test for auth flow
- Manual testing on staging

## Screenshots
[Include for UI changes]
\`\`\`

#### Keep PRs Small
Aim for < 400 lines changed. Easier to review = faster feedback.

### Responding to Feedback

#### Don't Take It Personally
Comments are about code, not you.

#### Ask Questions
If you don't understand feedback:
\`\`\`
Could you elaborate on the race condition?
I don't see where concurrent access happens.
\`\`\`

#### Explain Your Reasoning
\`\`\`
I considered using a map but we need to maintain
insertion order for the UI. That's why I used a slice.
\`\`\`

#### Accept Good Suggestions
\`\`\`
Great catch! Fixed in the latest commit.
\`\`\`

#### Push Back When Needed
\`\`\`
I disagree on extracting this into a separate function.
It's only used once and the inline version is clearer.
\`\`\`

### Updating the PR

#### Address Each Comment
Either fix it or explain why not:
- ✅ Fixed in abc123
- ✅ Added test in def456
- 💬 Explained above

#### Push Incremental Commits
Don't force push during review:
\`\`\`bash
git commit -m "Address review feedback"
git push
\`\`\`

Squash after approval.

#### Re-request Review
After addressing feedback:
\`\`\`
Updated based on your feedback. Ready for another look!
\`\`\`

## Team Guidelines

### Response Time
- Reviewers: Respond within 24 hours
- Authors: Address feedback within 48 hours

### Required Reviewers
- 1 approval for small changes
- 2 approvals for significant changes
- Domain expert for specialized code

### When to Auto-Approve
- Documentation fixes
- Minor typo corrections
- Automated dependency updates (after CI passes)

## Automated Checks

Use CI to catch mechanical issues:
\`\`\`yaml
# .github/workflows/pr.yml
- name: Lint
  run: golangci-lint run

- name: Test
  run: go test -race ./...

- name: Security
  run: gosec ./...
\`\`\`

This frees reviewers to focus on logic and design.

## Common Anti-Patterns

### Bikeshedding
Arguing about trivial details while missing major issues.

**Fix**: Establish style guides. Use formatters.

### Approval Without Reading
Rubber-stamping PRs.

**Fix**: Only approve if you actually reviewed.

### Death by a Thousand Nits
Overwhelming authors with minor comments.

**Fix**: Prioritize important issues. Use automated tools for style.

### Blocking on Preferences
"I would have done it differently" isn't a reason to block.

**Fix**: Only block on actual problems.

## Tools

At NF Software, we use:
- **GitHub**: PR reviews
- **golangci-lint**: Automated linting
- **CodeQL**: Security scanning
- **Codecov**: Coverage tracking

## Code Review Checklist

Before approving, verify:
- [ ] Code solves the stated problem
- [ ] Tests are present and pass
- [ ] No obvious bugs or edge cases
- [ ] Follows project conventions
- [ ] No security issues
- [ ] Documentation updated if needed
- [ ] Breaking changes are noted

## Conclusion

Great code reviews:
- **Improve code quality**
- **Share knowledge**
- **Build team culture**
- **Ship features faster** (yes, faster!)

Review with empathy. Write code reviewers will appreciate. Everyone wins.
        `,author:"Noam Favier",date:"2024-11-15",readTime:"9 min read",category:"Philosophy",tags:["Code Review","Software Engineering","Best Practices","Team Culture"],image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&q=80&fit=crop",featured:!1},{id:"cli-tools-best-practices",title:"Building Great CLI Tools: Lessons from Sysmon and Zvezda",slug:"cli-tools-best-practices",excerpt:"What makes a CLI tool great? Insights from building cross-platform command-line applications that developers actually want to use.",content:`
# Building Great CLI Tools: Lessons from Sysmon and Zvezda

We've built multiple CLI tools at NF Software. Here's what we learned about making them great.

## Core Principles

### 1. Do One Thing Well

Unix philosophy applies:
- Sysmon-CLI: System monitoring
- Zvezda: Git repository management
- Iris: AI assistance

Each tool has a clear purpose.

### 2. Sensible Defaults

Tools should work with zero configuration:
\`\`\`bash
# Just works
sysmon-cli

# Advanced usage optional
sysmon-cli --interval 5s --export json
\`\`\`

### 3. Composable

Play nice with other tools:
\`\`\`bash
sysmon-cli --json | jq '.cpu.usage'
zvezda list | grep pending | wc -l
\`\`\`

Output formats that pipe well.

## Command Structure

### Clear Hierarchy

\`\`\`bash
tool [global-flags] command [command-flags] [args]

# Good structure:
zvezda --verbose sync --auto-stash
git --version log --oneline

# Bad structure:
tool -v -f file command -x -y
\`\`\`

### Verb-Noun Convention

\`\`\`bash
zvezda list repos
zvezda add repo
zvezda remove repo

iris chat start
iris model list
iris config set
\`\`\`

Verbs first, nouns second.

### Subcommands

Group related functionality:
\`\`\`bash
sysmon-cli             # Default action
sysmon-cli export      # Export data
sysmon-cli config      # Configuration
sysmon-cli version     # Version info
\`\`\`

## Flags and Options

### Use Standard Conventions

\`\`\`bash
-h, --help       # Help
-v, --version    # Version
-q, --quiet      # Quiet
-V, --verbose    # Verbose
-f, --force      # Force
-o, --output     # Output file
\`\`\`

### Long and Short Forms

\`\`\`bash
-o file.json
--output file.json
\`\`\`

Short for interactive, long for scripts.

### Boolean Flags

Don't require values:
\`\`\`bash
--verbose    # Not --verbose=true
--json       # Not --json true
\`\`\`

### Environment Variables

Support config via env:
\`\`\`bash
SYSMON_INTERVAL=5s sysmon-cli
ZVEZDA_REPOS_DIR=~/repos zvezda list
\`\`\`

Precedence: flags > env > config file > defaults

## Output

### Human-Readable by Default

\`\`\`bash
$ sysmon-cli
CPU Usage:    45.2%
Memory:       8.2 GB / 16 GB
Disk:         120 GB / 500 GB
Network In:   1.2 MB/s
Network Out:  0.8 MB/s
\`\`\`

### Machine-Readable Optional

\`\`\`bash
$ sysmon-cli --json
{
  "cpu": {"usage": 45.2},
  "memory": {"used": 8.2, "total": 16.0}
}

$ sysmon-cli --csv
timestamp,cpu_usage,memory_used
2025-01-05T10:30:00Z,45.2,8.2
\`\`\`

### Quiet Mode

For automation:
\`\`\`bash
if sysmon-cli check --quiet; then
    echo "System healthy"
fi
\`\`\`

### Progress Indicators

For long operations:
\`\`\`bash
Syncing repositories...
[=====>           ] 42% (15/36)
\`\`\`

Use TTY detection—don't show in pipes.

## Error Handling

### Exit Codes

\`\`\`bash
0   # Success
1   # General error
2   # Misuse (bad arguments)
130 # Terminated by Ctrl+C
\`\`\`

### Error Messages

Be specific:
\`\`\`
❌ Error: something went wrong

✅ Error: failed to connect to database
   Connection refused at localhost:5432

   Try:
   - Check if PostgreSQL is running
   - Verify connection settings
\`\`\`

### Colors for Clarity

\`\`\`bash
✓ Success messages in green
⚠ Warnings in yellow
✗ Errors in red
\`\`\`

But respect NO_COLOR environment variable.

## Help Text

### Good --help

\`\`\`bash
$ sysmon-cli --help
System monitoring tool

USAGE:
    sysmon-cli [OPTIONS] [COMMAND]

COMMANDS:
    export    Export metrics to file
    config    Configure sysmon-cli
    version   Show version info

OPTIONS:
    -i, --interval <DURATION>    Update interval [default: 1s]
    -j, --json                   Output as JSON
    -h, --help                   Print help
    -V, --version                Print version

EXAMPLES:
    sysmon-cli                           # Start monitoring
    sysmon-cli --interval 5s --json      # JSON output every 5s
    sysmon-cli export --output data.csv  # Export to CSV

For more info: https://docs.nfsoftware.dev/sysmon-cli
\`\`\`

### Command-Specific Help

\`\`\`bash
$ zvezda sync --help
Sync all repositories

USAGE:
    zvezda sync [OPTIONS]

OPTIONS:
    --auto-stash    Stash changes before sync
    --parallel <N>  Sync N repos in parallel [default: 4]
    --dry-run       Show what would be done
\`\`\`

## Configuration

### Layered Config

1. Command-line flags (highest priority)
2. Environment variables
3. Config file
4. Defaults (lowest priority)

### Config File Location

Follow conventions:
\`\`\`
~/.config/sysmon-cli/config.yaml    # Linux/macOS
%APPDATA%\\sysmon-cli\\config.yaml    # Windows
\`\`\`

### Config Commands

\`\`\`bash
sysmon-cli config set interval 5s
sysmon-cli config get interval
sysmon-cli config list
\`\`\`

## Installation

### Single Binary

Go tools compile to single binaries:
\`\`\`bash
curl -L github.com/nf-software/sysmon-cli/releases/latest/download/sysmon-cli-linux -o sysmon-cli
chmod +x sysmon-cli
mv sysmon-cli /usr/local/bin/
\`\`\`

### Package Managers

\`\`\`bash
# Homebrew
brew install nf-software/tap/sysmon-cli

# APT
curl -sL https://packagecloud.io/install/repositories/nf-software/sysmon-cli/script.deb.sh | bash
apt-get install sysmon-cli
\`\`\`

### Auto-Update

\`\`\`bash
sysmon-cli update --check
sysmon-cli update --install
\`\`\`

## Cross-Platform

### Handle Path Differences

\`\`\`go
import (
    "path/filepath"
    "os"
)

configPath := filepath.Join(os.UserConfigDir(), "sysmon-cli", "config.yaml")
\`\`\`

### Platform-Specific Builds

\`\`\`bash
GOOS=linux GOARCH=amd64 go build
GOOS=windows GOARCH=amd64 go build
GOOS=darwin GOARCH=arm64 go build
\`\`\`

### Test on All Platforms

CI for Windows, macOS, Linux.

## Testing

### Integration Tests

Test real command execution:
\`\`\`go
func TestCommand(t *testing.T) {
    cmd := exec.Command("sysmon-cli", "--json")
    output, err := cmd.Output()
    require.NoError(t, err)

    var result SystemStats
    json.Unmarshal(output, &result)
    assert.Greater(t, result.CPU.Usage, 0.0)
}
\`\`\`

### Test Help Text

\`\`\`go
func TestHelpText(t *testing.T) {
    cmd := exec.Command("sysmon-cli", "--help")
    output, _ := cmd.Output()

    assert.Contains(t, string(output), "USAGE:")
    assert.Contains(t, string(output), "OPTIONS:")
}
\`\`\`

## Documentation

### README

- Installation instructions
- Quick start
- Common use cases
- Link to full docs

### Man Pages

For Unix tools:
\`\`\`bash
man sysmon-cli
\`\`\`

### Online Docs

Comprehensive guide with examples.

## Our Tools

### Sysmon-CLI
Real-time system monitoring with export capabilities.

**What we got right:**
- Lightweight (<10MB memory)
- Works immediately, no config
- Cross-platform

### Zvezda
Git repository manager for multiple projects.

**What we got right:**
- Batch operations across repos
- Fast (Go with concurrency)
- Intuitive command structure

### Iris
Local-first AI assistant.

**What we got right:**
- OpenAI-compatible API
- Single binary, no dependencies
- Privacy-focused

## Checklist for Great CLI Tools

- [ ] Sensible defaults
- [ ] Clear command structure
- [ ] Comprehensive --help
- [ ] JSON/CSV output options
- [ ] Proper exit codes
- [ ] Cross-platform support
- [ ] Single binary distribution
- [ ] Package manager support
- [ ] Good error messages
- [ ] Examples in docs

## Conclusion

Great CLI tools:
- Work immediately
- Compose with others
- Feel natural
- Are well-documented
- Respect conventions

Build tools you'd want to use every day.
        `,author:"Noam Favier",date:"2024-11-02",readTime:"11 min read",category:"Technical",tags:["CLI","Developer Tools","Go","Software Design"],image:"https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&h=600&q=80&fit=crop",featured:!1}],zx=["All","Product","Technical","Philosophy","Resources"],Ox=()=>{const{darkMode:o}=gt(),s=_t(o),[c,m]=$.useState("All"),d=c==="All"?Qr:Qr.filter(x=>x.category===c),f=Qr.find(x=>x.featured);return r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"relative pt-32 pb-20 px-6 overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:`radial-gradient(circle at 50% 50%, ${o?"rgba(99, 102, 241, 0.15)":"rgba(99, 102, 241, 0.08)"}, transparent 50%)`}}),r.jsx("div",{className:`absolute top-1/4 left-1/4 w-96 h-96 ${s.blobBlue} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}),r.jsx("div",{className:`absolute top-1/3 right-1/4 w-96 h-96 ${s.blobPurple} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}),r.jsx("div",{className:`absolute bottom-1/4 left-1/2 w-96 h-96 ${s.blobPink} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000`})]}),r.jsx("div",{className:"max-w-7xl mx-auto relative z-10",children:r.jsxs("div",{className:"text-center mb-16",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${s.badgeGradient} rounded-full border ${s.blobBlue}/20 mb-6 animate-fade-in`,children:[r.jsx(Mt,{className:`w-4 h-4 ${s.textBlue} animate-pulse`}),r.jsx("span",{className:"text-sm font-medium",children:"Insights & Updates"})]}),r.jsx("h1",{className:`text-5xl md:text-6xl font-bold ${s.text} mb-6`,children:"Blog"}),r.jsx("p",{className:`text-xl ${s.textSecondary} max-w-3xl mx-auto`,children:"Technical deep dives, product updates, and thoughts on building better software."})]})})]}),f&&r.jsx("section",{className:"px-6 pb-12",children:r.jsx("div",{className:"max-w-7xl mx-auto",children:r.jsx(de,{to:`/blog/${f.slug}`,"data-animate":!0,className:`block ${s.cardBg} rounded-3xl overflow-hidden border ${s.border} hover:border-blue-500/50 transition-all duration-300 group`,children:r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-0",children:[r.jsxs("div",{className:"relative h-64 lg:h-auto overflow-hidden",children:[r.jsx("img",{src:f.image,alt:f.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),r.jsx("div",{className:"absolute top-4 left-4",children:r.jsx("span",{className:"px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full",children:"Featured"})})]}),r.jsxs("div",{className:"p-8 lg:p-12 flex flex-col justify-center",children:[r.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[r.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20",children:f.category}),r.jsxs("div",{className:`flex items-center gap-2 text-sm ${s.textSecondary}`,children:[r.jsx(Jr,{className:"w-4 h-4"}),new Date(f.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]})]}),r.jsx("h2",{className:`text-3xl md:text-4xl font-bold ${s.text} mb-4 group-hover:text-blue-500 transition-colors`,children:f.title}),r.jsx("p",{className:`text-lg ${s.textSecondary} mb-6`,children:f.excerpt}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:`flex items-center gap-2 text-sm ${s.textSecondary}`,children:[r.jsx(Zr,{className:"w-4 h-4"}),f.readTime]}),r.jsxs("div",{className:"flex items-center gap-2 text-blue-500 font-medium group-hover:gap-4 transition-all",children:["Read More",r.jsx(ht,{className:"w-5 h-5"})]})]})]})]})})})}),r.jsx("section",{className:"px-6 pb-8",children:r.jsx("div",{className:"max-w-7xl mx-auto",children:r.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:zx.map(x=>r.jsx("button",{onClick:()=>m(x),className:`px-6 py-2.5 rounded-full font-medium transition-all ${c===x?`bg-gradient-to-r ${s.gradientPrimary} text-white shadow-lg`:`${s.cardBg} ${s.textSecondary} border ${s.border} ${s.hoverBg}`}`,children:x},x))})})}),r.jsx("section",{className:"px-6 pb-32",children:r.jsx("div",{className:"max-w-7xl mx-auto",children:d.length===0?r.jsxs("div",{className:`text-center py-20 ${s.textSecondary}`,children:[r.jsx(Ku,{className:"w-16 h-16 mx-auto mb-4 opacity-50"}),r.jsx("p",{className:"text-lg",children:"No posts found in this category."})]}):r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map((x,p)=>r.jsxs(de,{to:`/blog/${x.slug}`,"data-animate":!0,className:`${s.cardBg} rounded-2xl overflow-hidden border ${s.border} hover:border-blue-500/50 transition-all duration-300 group flex flex-col`,style:{animationDelay:`${p*100}ms`},children:[r.jsxs("div",{className:"relative h-48 overflow-hidden",children:[r.jsx("img",{src:x.image,alt:x.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"}),x.featured&&r.jsx("div",{className:"absolute top-3 left-3",children:r.jsx("span",{className:"px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full",children:"Featured"})})]}),r.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[r.jsx("span",{className:"px-2 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400",children:x.category}),r.jsxs("div",{className:`flex items-center gap-1.5 text-xs ${s.textSecondary}`,children:[r.jsx(Jr,{className:"w-3.5 h-3.5"}),new Date(x.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})]})]}),r.jsx("h3",{className:`text-xl font-bold ${s.text} mb-3 group-hover:text-blue-500 transition-colors line-clamp-2`,children:x.title}),r.jsx("p",{className:`text-sm ${s.textSecondary} mb-4 line-clamp-3 flex-grow`,children:x.excerpt}),r.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800",children:[r.jsxs("div",{className:`flex items-center gap-1.5 text-xs ${s.textSecondary}`,children:[r.jsx(Zr,{className:"w-3.5 h-3.5"}),x.readTime]}),r.jsxs("div",{className:"flex items-center gap-2 text-sm text-blue-500 font-medium group-hover:gap-3 transition-all",children:["Read",r.jsx(ht,{className:"w-4 h-4"})]})]})]})]},x.id))})})}),r.jsx("section",{"data-animate":!0,className:"relative py-20 px-6",children:r.jsx("div",{className:"max-w-4xl mx-auto",children:r.jsxs("div",{className:`${s.cardBg} rounded-3xl p-12 text-center border ${s.border} relative overflow-hidden`,children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 2px 2px, ${o?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"} 1px, transparent 0)`,backgroundSize:"32px 32px"}})}),r.jsxs("div",{className:"relative z-10",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${s.badgeGradient} rounded-full border border-blue-500/20 mb-6`,children:[r.jsx(Ku,{className:"w-4 h-4 text-blue-500"}),r.jsx("span",{className:"text-sm font-medium",children:"Stay Updated"})]}),r.jsx("h2",{className:`text-3xl md:text-4xl font-bold ${s.text} mb-4`,children:"Never miss a post"}),r.jsx("p",{className:`text-lg ${s.textSecondary} max-w-2xl mx-auto mb-8`,children:"Get notified when we publish new technical articles, product updates, and deep dives."}),r.jsxs(de,{to:"/contact",className:`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${s.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105`,children:["Get in Touch",r.jsx(ht,{className:"w-5 h-5"})]})]})]})})})]})},Dx=()=>{const{darkMode:o}=gt(),s=_t(o),{slug:c}=bp(),m=Qr.find(x=>x.slug===c);if(!m)return r.jsx(Ap,{to:"/blog",replace:!0});const d=Qr.filter(x=>x.category===m.category&&x.id!==m.id).slice(0,3),f=x=>{const p=x.trim().split(`
`),y=[];let g=!1,N=[];return p.forEach((C,P)=>{if(C.trim().startsWith("```")){g?(y.push(r.jsx("pre",{className:`${o?"bg-gray-900":"bg-gray-100"} rounded-xl p-6 overflow-x-auto my-6 border ${s.border}`,children:r.jsx("code",{className:`text-sm ${o?"text-gray-300":"text-gray-700"}`,children:N.join(`
`)})},`code-${P}`)),N=[],g=!1):g=!0;return}if(g){N.push(C);return}C.startsWith("# ")?y.push(r.jsx("h1",{className:`text-4xl md:text-5xl font-bold ${s.text} mb-6 mt-8`,children:C.substring(2)},P)):C.startsWith("## ")?y.push(r.jsx("h2",{className:`text-3xl md:text-4xl font-bold ${s.text} mb-4 mt-8`,children:C.substring(3)},P)):C.startsWith("### ")?y.push(r.jsx("h3",{className:`text-2xl font-bold ${s.text} mb-3 mt-6`,children:C.substring(4)},P)):C.trim().startsWith("- ")?y.push(r.jsx("li",{className:`${s.textSecondary} mb-2 ml-6`,children:C.substring(2)},P)):C.trim()?y.push(r.jsx("p",{className:`text-lg ${s.textSecondary} leading-relaxed mb-6`,children:C},P)):y.push(r.jsx("div",{className:"h-4"},P))}),y};return r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"relative pt-32 pb-12 px-6 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 overflow-hidden",children:r.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`radial-gradient(circle at 50% 50%, ${o?"rgba(99, 102, 241, 0.15)":"rgba(99, 102, 241, 0.08)"}, transparent 50%)`}})}),r.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[r.jsxs(de,{to:"/blog",className:`inline-flex items-center gap-2 ${s.textSecondary} hover:${s.text} transition mb-8`,children:[r.jsx(jd,{className:"w-4 h-4"}),"Back to Blog"]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6",children:[r.jsx("span",{className:"px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20",children:m.category}),r.jsxs("div",{className:`flex items-center gap-2 text-sm ${s.textSecondary}`,children:[r.jsx(Jr,{className:"w-4 h-4"}),new Date(m.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]}),r.jsxs("div",{className:`flex items-center gap-2 text-sm ${s.textSecondary}`,children:[r.jsx(Zr,{className:"w-4 h-4"}),m.readTime]})]}),r.jsx("h1",{className:`text-4xl md:text-5xl lg:text-6xl font-bold ${s.text} mb-6`,children:m.title}),r.jsx("p",{className:`text-xl ${s.textSecondary} mb-8`,children:m.excerpt}),r.jsxs("div",{className:"flex items-center justify-between pb-8 border-b border-gray-200 dark:border-gray-800",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`w-12 h-12 rounded-full bg-gradient-to-r ${s.gradientPrimary} flex items-center justify-center`,children:r.jsx(Rd,{className:"w-6 h-6 text-white"})}),r.jsxs("div",{children:[r.jsx("div",{className:`font-semibold ${s.text}`,children:m.author}),r.jsx("div",{className:`text-sm ${s.textSecondary}`,children:"Developer & Founder"})]})]}),r.jsx("button",{onClick:()=>{navigator.share&&navigator.share({title:m.title,text:m.excerpt,url:window.location.href})},className:`p-3 ${s.cardBg} border ${s.border} rounded-full hover:border-blue-500/50 transition`,"aria-label":"Share post",children:r.jsx(T0,{className:"w-5 h-5"})})]})]})]}),r.jsx("section",{className:"px-6 pb-12",children:r.jsx("div",{className:"max-w-5xl mx-auto",children:r.jsx("div",{className:"rounded-3xl overflow-hidden",children:r.jsx("img",{src:m.image,alt:m.title,className:"w-full h-auto"})})})}),r.jsx("section",{className:"px-6 pb-12",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsx("article",{className:`prose prose-lg ${o?"prose-invert":""} max-w-none`,children:f(m.content)}),m.tags&&m.tags.length>0&&r.jsx("div",{className:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-800",children:r.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[r.jsx(D0,{className:`w-5 h-5 ${s.textSecondary}`}),m.tags.map(x=>r.jsx("span",{className:`px-3 py-1 ${s.cardBg} rounded-lg text-sm ${s.textSecondary} border ${s.border}`,children:x},x))]})})]})}),d.length>0&&r.jsx("section",{className:"px-6 pb-32",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("h2",{className:`text-3xl font-bold ${s.text} mb-2`,children:"Related Posts"}),r.jsxs("p",{className:`${s.textSecondary}`,children:["More from ",m.category]})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:d.map(x=>r.jsxs(de,{to:`/blog/${x.slug}`,className:`${s.cardBg} rounded-2xl overflow-hidden border ${s.border} hover:border-blue-500/50 transition-all duration-300 group`,children:[r.jsx("div",{className:"relative h-48 overflow-hidden",children:r.jsx("img",{src:x.image,alt:x.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"})}),r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:`flex items-center gap-2 text-xs ${s.textSecondary} mb-3`,children:[r.jsx(Jr,{className:"w-3.5 h-3.5"}),new Date(x.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})]}),r.jsx("h3",{className:`text-lg font-bold ${s.text} mb-2 group-hover:text-blue-500 transition-colors line-clamp-2`,children:x.title}),r.jsx("p",{className:`text-sm ${s.textSecondary} line-clamp-2 mb-4`,children:x.excerpt}),r.jsxs("div",{className:"flex items-center gap-2 text-sm text-blue-500 font-medium group-hover:gap-3 transition-all",children:["Read More",r.jsx(na,{className:"w-4 h-4"})]})]})]},x.id))})]})})]})},Fx=[{number:"1",title:"Overview",icon:Zu,content:"This policy explains how NF Software handles information submitted through this website (nf-software.com) and related communication channels."},{number:"2",title:"Data We Collect  ",icon:$d,content:"If you submit a contact or project inquiry form, we may collect:",list:["Name (if provided)","Email address","Project details or message content","Company / Team size / Budget (if provided)"],note:"No account creation is required. No tracking of sensitive personal data is performed."},{number:"3",title:"How the Data Is Used",icon:tr,content:"Information is used only to:",list:["Respond to inquiries","Prepare project proposals or estimates","Communicate regarding ongoing work"],negativeList:{title:"We do not:",items:["Sell data","Share data with advertisers","Use data for automated decision-making"]}},{number:"4",title:"Storage",icon:Xr,content:"Form submissions and communication records are stored in a private business inbox and/or secure server infrastructure located in the EU."},{number:"5",title:"Access",icon:_d,content:"Access is limited to the owner (Noam Favier). If external collaboration is required, access is granted only with your explicit permission."},{number:"6",title:"Analytics",icon:Zu,content:"This website may use a privacy-friendly analytics tool (e.g., Plausible or Umami) to measure page usage.",list:["Page views","Browser/device type","Referring pages"],note:"It does not collect identifying information, IP addresses, or cookies. No tracking for advertising or behavioral profiling is performed."},{number:"7",title:"Cookies",icon:rr,content:"This website does not use tracking cookies. If analytics are enabled, they are cookie-free."},{number:"8",title:"Data Retention",icon:Zr,content:"Emails and project inquiries may be stored for future reference. You may request deletion at any time.",cta:{text:"To request deletion, email:",email:"contact@nf-software.com"}},{number:"9",title:"Your Rights (EU GDPR)",icon:rr,content:"If you are in the EU, you may:",list:["Request access to your stored data","Request correction or deletion","Restrict or object to processing","Request data export (where applicable)"]},{number:"10",title:"Third-Party Links",icon:Xr,content:"Some pages may link to GitHub, product documentation, or demos. External websites are not covered by this Privacy Policy."},{number:"11",title:"Changes",icon:tr,content:"Any updates to this Privacy Policy will be posted on this page with a revised date."}],Bx=()=>{const{darkMode:o}=gt(),s=_t(o),[c,m]=Fe.useState(0);return Fe.useEffect(()=>{const d=()=>m(window.scrollY);return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),r.jsxs("div",{className:`min-h-screen ${s.bg} ${s.text} transition-colors duration-300`,children:[r.jsxs("section",{className:"relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:`radial-gradient(circle at 50% 50%, ${o?"rgba(99, 102, 241, 0.15)":"rgba(99, 102, 241, 0.08)"}, transparent 50%)`}}),r.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"}),r.jsx("div",{className:"absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse",style:{animationDelay:"2s"}})]}),r.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6 relative z-10",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6",children:[r.jsx(rr,{className:"w-4 h-4 text-blue-500"}),r.jsx("span",{className:"text-sm font-medium",children:"Your Privacy Matters"})]}),r.jsx("h1",{className:`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${s.text}`,children:"Privacy Policy"}),r.jsxs("div",{className:"space-y-3 pt-4",children:[r.jsxs("p",{className:`text-lg ${s.textSecondary}`,children:[r.jsx("strong",{children:"Last Updated:"})," October 29, 2025"]}),r.jsxs("p",{className:`text-lg ${s.textSecondary}`,children:[r.jsx("strong",{children:"Owner:"})," NF Software — operated by Noam Favier"]}),r.jsxs("a",{href:"mailto:contact@nf-software.com",className:"inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors",children:[r.jsx(ot,{className:"w-5 h-5"}),"contact@nf-software.com"]})]})]})]}),r.jsx("section",{className:"relative py-20 px-6",children:r.jsx("div",{className:"max-w-4xl mx-auto space-y-16",children:Fx.map(d=>r.jsx("div",{className:`${s.cardBg} rounded-2xl p-8 md:p-12 border ${s.border} hover:border-blue-500/50 transition-all duration-300`,children:r.jsxs("div",{className:"flex items-start gap-6",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center",children:r.jsx(d.icon,{className:"w-6 h-6 text-white"})})}),r.jsxs("div",{className:"flex-1 space-y-4",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsxs("span",{className:"text-sm font-bold text-blue-500",children:[d.number,"."]}),r.jsx("h2",{className:`text-2xl md:text-3xl font-bold ${s.text}`,children:d.title})]}),r.jsx("p",{className:`text-base leading-relaxed ${s.textSecondary}`,children:d.content}),d.list&&r.jsx("ul",{className:"space-y-2 mt-4",children:d.list.map((f,x)=>r.jsxs("li",{className:"flex items-start gap-3",children:[r.jsx("span",{className:"text-blue-500 mt-1",children:"•"}),r.jsx("span",{className:s.textSecondary,children:f})]},x))}),d.negativeList&&r.jsxs("div",{className:"mt-6 space-y-3",children:[r.jsx("p",{className:`font-semibold ${s.text}`,children:d.negativeList.title}),r.jsx("ul",{className:"space-y-2",children:d.negativeList.items.map((f,x)=>r.jsxs("li",{className:"flex items-start gap-3",children:[r.jsx("span",{className:"text-red-500 mt-1",children:"✗"}),r.jsx("span",{className:s.textSecondary,children:f})]},x))})]}),d.note&&r.jsx("div",{className:`mt-4 p-4 rounded-lg border-l-4 border-blue-500 ${o?"bg-blue-500/10":"bg-blue-50"}`,children:r.jsx("p",{className:`text-sm ${s.textSecondary}`,children:d.note})}),d.cta&&r.jsxs("div",{className:"mt-6 space-y-2",children:[r.jsx("p",{className:s.textSecondary,children:d.cta.text}),r.jsxs("a",{href:`mailto:${d.cta.email}`,className:"inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold transition-colors",children:[r.jsx(ot,{className:"w-5 h-5"}),d.cta.email]})]})]})]})},d.number))})}),r.jsx("section",{className:"relative py-20 px-6",children:r.jsx("div",{className:"max-w-4xl mx-auto",children:r.jsxs("div",{className:`${s.cardBg} rounded-3xl p-12 text-center space-y-6 border ${s.border} relative overflow-hidden`,children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 2px 2px, ${o?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"} 1px, transparent 0)`,backgroundSize:"32px 32px"}})}),r.jsxs("div",{className:"relative z-10",children:[r.jsx("h3",{className:`text-3xl font-bold ${s.text} mb-4`,children:"Questions About Your Privacy?"}),r.jsx("p",{className:`${s.textSecondary} mb-8 max-w-2xl mx-auto`,children:"If you have any questions or concerns about how we handle your data, please don't hesitate to reach out."}),r.jsxs("a",{href:"mailto:contact@nf-software.com",className:"inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105",children:[r.jsx(ot,{className:"w-5 h-5"}),"Contact Us"]})]})]})})}),c>500&&r.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`fixed bottom-8 right-8 p-4 ${s.bgPrimary} text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50`,"aria-label":"Scroll to top",children:r.jsx(na,{className:"w-6 h-6 -rotate-90"})})]})},Ux=[{number:"1",title:"Overview",icon:tr,content:"By using this website or purchasing any product, you agree to these Terms. Software provided by NF Software is built for professional use and should be used with technical awareness."},{number:"2",title:"Licensing",icon:nr,content:"Unless stated otherwise, NF Software products are licensed, not sold.",subtitle:"A license grants you:",list:["Permission to install and use the software on the number of devices included in your plan","Access to updates within your license period (if annual), or the purchased version (if one-time license)"],negativeList:{title:"You may not:",items:["Re-sell, share, or redistribute licenses","Repackage or rebrand NF Software products","Reverse-engineer or bypass license verification mechanisms"]}},{number:"3",title:"No Refunds",icon:Oh,important:!0,content:"Due to the nature of digital software delivery, all sales are final. Once a license or download key has been issued, no refunds or cancellations are provided.",note:"If you experience a technical issue, contact support — issues will be addressed promptly."},{number:"4",title:"Support",icon:Ld,content:"Support is offered through email and GitHub issue tracking where applicable. Response time is typically 24–48 hours."},{number:"5",title:"Product Changes",icon:nr,content:"NF Software may update or modify products over time to improve performance, stability, or usability. Features may change or evolve — no guarantee is made that any specific feature will remain available indefinitely."},{number:"6",title:"Disclaimer",icon:Id,content:'NF Software is provided "as is" without warranties of any kind.',subtitle:"No guarantee is made regarding:",list:["Uninterrupted access","Correctness or reliability of results","Compatibility with specific hardware or environments"],note:"You are responsible for backing up your data and environments."},{number:"7",title:"Limitation of Liability",icon:rr,content:"To the fullest extent permitted by law:",list:["NF Software is not liable for any direct, indirect, incidental, or consequential damages","Use of the software is at your own risk"]},{number:"8",title:"Governing Law",icon:Td,content:"These Terms are governed by the laws of France and The Netherlands, depending on the registered point of contract. Disputes will be resolved through informal negotiation before any legal action."}],Wx=()=>{const{darkMode:o}=gt(),s=_t(o),[c,m]=Fe.useState(0);return Fe.useEffect(()=>{const d=()=>m(window.scrollY);return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),r.jsxs("div",{className:`min-h-screen ${s.bg} ${s.text} transition-colors duration-300`,children:[r.jsxs("section",{className:"relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:`radial-gradient(circle at 50% 50%, ${o?"rgba(99, 102, 241, 0.15)":"rgba(99, 102, 241, 0.08)"}, transparent 50%)`}}),r.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"}),r.jsx("div",{className:"absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse",style:{animationDelay:"2s"}})]}),r.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-6 relative z-10",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6",children:[r.jsx(Td,{className:"w-4 h-4 text-blue-500"}),r.jsx("span",{className:"text-sm font-medium",children:"Legal Terms & Conditions"})]}),r.jsx("h1",{className:`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${s.text}`,children:"Terms of Service"}),r.jsxs("div",{className:"space-y-3 pt-4",children:[r.jsxs("p",{className:`text-lg ${s.textSecondary}`,children:[r.jsx("strong",{children:"Last Updated:"})," October 29, 2025"]}),r.jsxs("p",{className:`text-lg ${s.textSecondary}`,children:[r.jsx("strong",{children:"Owner:"})," NF Software — operated by Noam Favier"]}),r.jsxs("a",{href:"mailto:contact@nf-software.com",className:"inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors",children:[r.jsx(ot,{className:"w-5 h-5"}),"contact@nf-software.com"]})]})]})]}),r.jsx("section",{className:"relative py-20 px-6",children:r.jsx("div",{className:"max-w-4xl mx-auto space-y-16",children:Ux.map(d=>r.jsx("div",{className:`${s.cardBg} rounded-2xl p-8 md:p-12 border ${d.important?"border-red-500/50":s.border} hover:border-blue-500/50 transition-all duration-300 ${d.important?"ring-2 ring-red-500/20":""}`,children:r.jsxs("div",{className:"flex items-start gap-6",children:[r.jsx("div",{className:"flex-shrink-0",children:r.jsx("div",{className:`w-12 h-12 rounded-full ${d.important?"bg-gradient-to-r from-red-600 to-orange-600":"bg-gradient-to-r from-blue-600 to-purple-600"} flex items-center justify-center`,children:r.jsx(d.icon,{className:"w-6 h-6 text-white"})})}),r.jsxs("div",{className:"flex-1 space-y-4",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsxs("span",{className:`text-sm font-bold ${d.important?"text-red-500":"text-blue-500"}`,children:[d.number,"."]}),r.jsx("h2",{className:`text-2xl md:text-3xl font-bold ${s.text}`,children:d.title})]}),r.jsx("p",{className:`text-base leading-relaxed ${s.textSecondary}`,children:d.content}),d.subtitle&&r.jsx("p",{className:`font-semibold ${s.text} mt-4`,children:d.subtitle}),d.list&&r.jsx("ul",{className:"space-y-2 mt-4",children:d.list.map((f,x)=>r.jsxs("li",{className:"flex items-start gap-3",children:[r.jsx("span",{className:"text-blue-500 mt-1",children:"•"}),r.jsx("span",{className:s.textSecondary,children:f})]},x))}),d.negativeList&&r.jsxs("div",{className:"mt-6 space-y-3",children:[r.jsx("p",{className:`font-semibold ${s.text}`,children:d.negativeList.title}),r.jsx("ul",{className:"space-y-2",children:d.negativeList.items.map((f,x)=>r.jsxs("li",{className:"flex items-start gap-3",children:[r.jsx("span",{className:"text-red-500 mt-1",children:"✗"}),r.jsx("span",{className:s.textSecondary,children:f})]},x))})]}),d.note&&r.jsx("div",{className:`mt-4 p-4 rounded-lg border-l-4 ${d.important?"border-red-500 bg-red-500/10":"border-blue-500 bg-blue-500/10"}`,children:r.jsx("p",{className:`text-sm ${s.textSecondary}`,children:d.note})})]})]})},d.number))})}),r.jsx("section",{className:"relative py-20 px-6",children:r.jsx("div",{className:"max-w-4xl mx-auto",children:r.jsxs("div",{className:`${s.cardBg} rounded-3xl p-12 text-center space-y-6 border ${s.border} relative overflow-hidden`,children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 2px 2px, ${o?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"} 1px, transparent 0)`,backgroundSize:"32px 32px"}})}),r.jsxs("div",{className:"relative z-10",children:[r.jsx("h3",{className:`text-3xl font-bold ${s.text} mb-4`,children:"Questions About These Terms?"}),r.jsx("p",{className:`${s.textSecondary} mb-8 max-w-2xl mx-auto`,children:"If you have any questions about our terms of service or licensing, feel free to reach out."}),r.jsxs("a",{href:"mailto:contact@nf-software.com",className:"inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105",children:[r.jsx(ot,{className:"w-5 h-5"}),"Contact Us"]})]})]})})}),c>500&&r.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`fixed bottom-8 right-8 p-4 ${s.bgPrimary} text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50`,"aria-label":"Scroll to top",children:r.jsx(na,{className:"w-6 h-6 -rotate-90"})})]})},Hx=()=>{const{darkMode:o}=gt(),s=_t(o),[c,m]=Fe.useState({x:0,y:0});Fe.useEffect(()=>{const f=x=>{m({x:x.clientX,y:x.clientY})};return window.addEventListener("mousemove",f),()=>window.removeEventListener("mousemove",f)},[]);const d=[{label:"Home",href:"/",icon:Xu},{label:"Products",href:"/products",icon:$t},{label:"About",href:"/about",icon:Uh}];return r.jsxs("div",{className:`min-h-screen ${s.bg} ${s.text} transition-colors duration-300 flex items-center justify-center px-6 relative overflow-hidden`,children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:`radial-gradient(circle at 50% 50%, ${o?"rgba(99, 102, 241, 0.15)":"rgba(99, 102, 241, 0.08)"}, transparent 50%)`}}),r.jsx("div",{className:"absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse",style:{left:`${c.x-192}px`,top:`${c.y-192}px`,transition:"left 0.3s ease-out, top 0.3s ease-out"}}),r.jsx("div",{className:"absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse",style:{animationDelay:"2s"}})]}),r.jsxs("div",{className:"max-w-4xl mx-auto text-center space-y-8 relative z-10",children:[r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"inline-flex items-center justify-center gap-4",children:r.jsx(Id,{className:"w-16 h-16 text-yellow-500 animate-pulse"})}),r.jsx("h1",{className:`text-[10rem] md:text-[12rem] font-bold tracking-tight ${s.text} leading-none mb-0 bg-gradient-to-r ${s.gradientPrimary} bg-clip-text text-transparent`,children:"404"})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h2",{className:`text-3xl md:text-4xl font-bold ${s.text}`,children:"Page Not Found"}),r.jsx("p",{className:`text-lg md:text-xl ${s.textSecondary} max-w-2xl mx-auto`,children:"The page you're looking for has wandered off into the digital void. It might have been moved, deleted, or never existed in the first place."})]}),r.jsxs("div",{className:`${s.cardBg} rounded-2xl p-6 border ${s.border} max-w-md mx-auto`,children:[r.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[r.jsx($t,{className:"w-5 h-5 text-blue-500"}),r.jsx("span",{className:`font-mono text-sm ${s.textSecondary}`,children:"ERROR_CODE"})]}),r.jsx("p",{className:`font-mono text-2xl font-bold ${s.text}`,children:"HTTP 404"}),r.jsx("p",{className:`text-sm ${s.textSecondary} mt-2`,children:"Resource not found on this server"})]}),r.jsxs("div",{className:"flex flex-wrap gap-4 justify-center pt-8",children:[r.jsxs(de,{to:"/",className:"inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105",children:[r.jsx(Xu,{className:"w-5 h-5"}),"Go Home"]}),r.jsxs("button",{onClick:()=>window.history.back(),className:`inline-flex items-center gap-2 px-8 py-4 ${s.cardBg} border ${s.border} font-semibold rounded-full hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`,children:[r.jsx(jd,{className:"w-5 h-5"}),"Go Back"]})]}),r.jsxs("div",{className:"pt-12",children:[r.jsx("p",{className:`text-sm ${s.textSecondary} mb-6`,children:"Try one of these popular pages:"}),r.jsx("div",{className:"flex flex-wrap gap-3 justify-center",children:d.map(f=>r.jsxs(de,{to:f.href,className:`inline-flex items-center gap-2 px-6 py-3 ${s.cardBg} border ${s.border} rounded-full hover:border-blue-500/50 transition-all duration-300 text-sm font-medium`,children:[r.jsx(f.icon,{className:"w-4 h-4"}),f.label]},f.label))})]}),r.jsx("div",{className:"pt-8",children:r.jsxs("p",{className:`text-xs ${s.textSecondary} italic`,children:[`"In the vast universe of code, sometimes we get lost. That's okay."`,r.jsx("span",{className:"ml-2",children:"✨"})]})})]}),r.jsx("div",{className:"absolute top-20 left-10 animate-bounce",style:{animationDelay:"1s"},children:r.jsx("div",{className:`w-12 h-12 rounded-full ${s.cardBg} border ${s.border} flex items-center justify-center`,children:r.jsx(C0,{className:"w-6 h-6 text-blue-500"})})}),r.jsx("div",{className:"absolute bottom-20 right-10 animate-bounce",style:{animationDelay:"2s"},children:r.jsx("div",{className:`w-12 h-12 rounded-full ${s.cardBg} border ${s.border} flex items-center justify-center`,children:r.jsx($t,{className:"w-6 h-6 text-purple-500"})})})]})};function Gx(){return r.jsx(ih,{children:r.jsx(gh,{children:r.jsx(sx,{children:r.jsxs(zp,{children:[r.jsx(St,{path:"/",element:r.jsx(hx,{})}),r.jsx(St,{path:"/about",element:r.jsx(wx,{})}),r.jsx(St,{path:"/products",element:r.jsx(bx,{})}),r.jsx(St,{path:"/contact",element:r.jsx(Ax,{})}),r.jsx(St,{path:"/pricing",element:r.jsx(Mx,{})}),r.jsx(St,{path:"/blog",element:r.jsx(Ox,{})}),r.jsx(St,{path:"/blog/:slug",element:r.jsx(Dx,{})}),r.jsx(St,{path:"/privacy",element:r.jsx(Bx,{})}),r.jsx(St,{path:"/terms",element:r.jsx(Wx,{})}),r.jsx(St,{path:"*",element:r.jsx(Hx,{})})]})})})})}Hf.createRoot(document.getElementById("root")).render(r.jsx($.StrictMode,{children:r.jsx(Gx,{})}));
