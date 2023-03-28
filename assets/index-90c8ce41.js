function cN(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var wG=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hN(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mu={},dN={get exports(){return Mu},set exports(t){Mu=t}},Id={},L={},fN={get exports(){return L},set exports(t){L=t}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Al=Symbol.for("react.element"),pN=Symbol.for("react.portal"),mN=Symbol.for("react.fragment"),gN=Symbol.for("react.strict_mode"),yN=Symbol.for("react.profiler"),vN=Symbol.for("react.provider"),wN=Symbol.for("react.context"),_N=Symbol.for("react.forward_ref"),EN=Symbol.for("react.suspense"),SN=Symbol.for("react.memo"),IN=Symbol.for("react.lazy"),F_=Symbol.iterator;function TN(t){return t===null||typeof t!="object"?null:(t=F_&&t[F_]||t["@@iterator"],typeof t=="function"?t:null)}var OI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},LI=Object.assign,MI={};function ca(t,e,n){this.props=t,this.context=e,this.refs=MI,this.updater=n||OI}ca.prototype.isReactComponent={};ca.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ca.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $I(){}$I.prototype=ca.prototype;function Iy(t,e,n){this.props=t,this.context=e,this.refs=MI,this.updater=n||OI}var Ty=Iy.prototype=new $I;Ty.constructor=Iy;LI(Ty,ca.prototype);Ty.isPureReactComponent=!0;var U_=Array.isArray,FI=Object.prototype.hasOwnProperty,ky={current:null},UI={key:!0,ref:!0,__self:!0,__source:!0};function BI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)FI.call(e,r)&&!UI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Al,type:t,key:s,ref:o,props:i,_owner:ky.current}}function kN(t,e){return{$$typeof:Al,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function by(t){return typeof t=="object"&&t!==null&&t.$$typeof===Al}function bN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var B_=/\/+/g;function Sp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bN(""+t.key):e.toString(36)}function Wc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Al:case pN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sp(o,0):r,U_(i)?(n="",t!=null&&(n=t.replace(B_,"$&/")+"/"),Wc(i,e,n,"",function(l){return l})):i!=null&&(by(i)&&(i=kN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(B_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",U_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Sp(s,a);o+=Wc(s,e,n,u,i)}else if(u=TN(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Sp(s,a++),o+=Wc(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gc(t,e,n){if(t==null)return t;var r=[],i=0;return Wc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function CN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Gc={transition:null},RN={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Gc,ReactCurrentOwner:ky};se.Children={map:gc,forEach:function(t,e,n){gc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gc(t,function(){e++}),e},toArray:function(t){return gc(t,function(e){return e})||[]},only:function(t){if(!by(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=ca;se.Fragment=mN;se.Profiler=yN;se.PureComponent=Iy;se.StrictMode=gN;se.Suspense=EN;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RN;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=LI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ky.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)FI.call(e,u)&&!UI.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Al,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:wN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vN,_context:t},t.Consumer=t};se.createElement=BI;se.createFactory=function(t){var e=BI.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:_N,render:t}};se.isValidElement=by;se.lazy=function(t){return{$$typeof:IN,_payload:{_status:-1,_result:t},_init:CN}};se.memo=function(t,e){return{$$typeof:SN,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Gc.transition;Gc.transition={};try{t()}finally{Gc.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return qt.current.useCallback(t,e)};se.useContext=function(t){return qt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};se.useEffect=function(t,e){return qt.current.useEffect(t,e)};se.useId=function(){return qt.current.useId()};se.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return qt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};se.useRef=function(t){return qt.current.useRef(t)};se.useState=function(t){return qt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return qt.current.useTransition()};se.version="18.2.0";(function(t){t.exports=se})(fN);const js=hN(L),Rm=cN({__proto__:null,default:js},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AN=L,xN=Symbol.for("react.element"),NN=Symbol.for("react.fragment"),DN=Object.prototype.hasOwnProperty,PN=AN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ON={key:!0,ref:!0,__self:!0,__source:!0};function VI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DN.call(e,r)&&!ON.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xN,type:t,key:s,ref:o,props:i,_owner:PN.current}}Id.Fragment=NN;Id.jsx=VI;Id.jsxs=VI;(function(t){t.exports=Id})(dN);const _G=Mu.Fragment,gr=Mu.jsx,EG=Mu.jsxs;var Am={},yh={},LN={get exports(){return yh},set exports(t){yh=t}},dn={},xm={},MN={get exports(){return xm},set exports(t){xm=t}},jI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,X){var ne=F.length;F.push(X);e:for(;0<ne;){var me=ne-1>>>1,Ge=F[me];if(0<i(Ge,X))F[me]=X,F[ne]=Ge,ne=me;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var X=F[0],ne=F.pop();if(ne!==X){F[0]=ne;e:for(var me=0,Ge=F.length,Zs=Ge>>>1;me<Zs;){var Vn=2*(me+1)-1,Da=F[Vn],fr=Vn+1,eo=F[fr];if(0>i(Da,ne))fr<Ge&&0>i(eo,Da)?(F[me]=eo,F[fr]=ne,me=fr):(F[me]=Da,F[Vn]=ne,me=Vn);else if(fr<Ge&&0>i(eo,ne))F[me]=eo,F[fr]=ne,me=fr;else break e}}return X}function i(F,X){var ne=F.sortIndex-X.sortIndex;return ne!==0?ne:F.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,d=3,f=!1,p=!1,g=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var X=n(l);X!==null;){if(X.callback===null)r(l);else if(X.startTime<=F)r(l),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(l)}}function w(F){if(g=!1,v(F),!p)if(n(u)!==null)p=!0,Na(b);else{var X=n(l);X!==null&&We(w,X.startTime-F)}}function b(F,X){p=!1,g&&(g=!1,y($),$=-1),f=!0;var ne=d;try{for(v(X),h=n(u);h!==null&&(!(h.expirationTime>X)||F&&!Le());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var Ge=me(h.expirationTime<=X);X=t.unstable_now(),typeof Ge=="function"?h.callback=Ge:h===n(u)&&r(u),v(X)}else r(u);h=n(u)}if(h!==null)var Zs=!0;else{var Vn=n(l);Vn!==null&&We(w,Vn.startTime-X),Zs=!1}return Zs}finally{h=null,d=ne,f=!1}}var R=!1,P=null,$=-1,re=5,K=-1;function Le(){return!(t.unstable_now()-K<re)}function Rn(){if(P!==null){var F=t.unstable_now();K=F;var X=!0;try{X=P(!0,F)}finally{X?dr():(R=!1,P=null)}}else R=!1}var dr;if(typeof m=="function")dr=function(){m(Rn)};else if(typeof MessageChannel<"u"){var cc=new MessageChannel,pp=cc.port2;cc.port1.onmessage=Rn,dr=function(){pp.postMessage(null)}}else dr=function(){_(Rn,0)};function Na(F){P=F,R||(R=!0,dr())}function We(F,X){$=_(function(){F(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){p||f||(p=!0,Na(b))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(F){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var ne=d;d=X;try{return F()}finally{d=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ne=d;d=F;try{return X()}finally{d=ne}},t.unstable_scheduleCallback=function(F,X,ne){var me=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?me+ne:me):ne=me,F){case 1:var Ge=-1;break;case 2:Ge=250;break;case 5:Ge=1073741823;break;case 4:Ge=1e4;break;default:Ge=5e3}return Ge=ne+Ge,F={id:c++,callback:X,priorityLevel:F,startTime:ne,expirationTime:Ge,sortIndex:-1},ne>me?(F.sortIndex=ne,e(l,F),n(u)===null&&F===n(l)&&(g?(y($),$=-1):g=!0,We(w,ne-me))):(F.sortIndex=Ge,e(u,F),p||f||(p=!0,Na(b))),F},t.unstable_shouldYield=Le,t.unstable_wrapCallback=function(F){var X=d;return function(){var ne=d;d=X;try{return F.apply(this,arguments)}finally{d=ne}}}})(jI);(function(t){t.exports=jI})(MN);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zI=L,ln=xm;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qI=new Set,$u={};function zs(t,e){Uo(t,e),Uo(t+"Capture",e)}function Uo(t,e){for($u[t]=e,t=0;t<e.length;t++)qI.add(e[t])}var Dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nm=Object.prototype.hasOwnProperty,$N=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V_={},j_={};function FN(t){return Nm.call(j_,t)?!0:Nm.call(V_,t)?!1:$N.test(t)?j_[t]=!0:(V_[t]=!0,!1)}function UN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BN(t,e,n,r){if(e===null||typeof e>"u"||UN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cy=/[\-:]([a-z])/g;function Ry(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cy,Ry);Et[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cy,Ry);Et[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cy,Ry);Et[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ay(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BN(e,n,i,r)&&(n=null),r||i===null?FN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vr=zI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yc=Symbol.for("react.element"),co=Symbol.for("react.portal"),ho=Symbol.for("react.fragment"),xy=Symbol.for("react.strict_mode"),Dm=Symbol.for("react.profiler"),HI=Symbol.for("react.provider"),WI=Symbol.for("react.context"),Ny=Symbol.for("react.forward_ref"),Pm=Symbol.for("react.suspense"),Om=Symbol.for("react.suspense_list"),Dy=Symbol.for("react.memo"),ni=Symbol.for("react.lazy"),GI=Symbol.for("react.offscreen"),z_=Symbol.iterator;function Ma(t){return t===null||typeof t!="object"?null:(t=z_&&t[z_]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Ip;function iu(t){if(Ip===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ip=e&&e[1]||""}return`
`+Ip+t}var Tp=!1;function kp(t,e){if(!t||Tp)return"";Tp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Tp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?iu(t):""}function VN(t){switch(t.tag){case 5:return iu(t.type);case 16:return iu("Lazy");case 13:return iu("Suspense");case 19:return iu("SuspenseList");case 0:case 2:case 15:return t=kp(t.type,!1),t;case 11:return t=kp(t.type.render,!1),t;case 1:return t=kp(t.type,!0),t;default:return""}}function Lm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ho:return"Fragment";case co:return"Portal";case Dm:return"Profiler";case xy:return"StrictMode";case Pm:return"Suspense";case Om:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case WI:return(t.displayName||"Context")+".Consumer";case HI:return(t._context.displayName||"Context")+".Provider";case Ny:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dy:return e=t.displayName||null,e!==null?e:Lm(t.type)||"Memo";case ni:e=t._payload,t=t._init;try{return Lm(t(e))}catch{}}return null}function jN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lm(e);case 8:return e===xy?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Si(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function KI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zN(t){var e=KI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vc(t){t._valueTracker||(t._valueTracker=zN(t))}function QI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=KI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mm(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function q_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Si(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function YI(t,e){e=e.checked,e!=null&&Ay(t,"checked",e,!1)}function $m(t,e){YI(t,e);var n=Si(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fm(t,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function H_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fm(t,e,n){(e!=="number"||vh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var su=Array.isArray;function bo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Si(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Um(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function W_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(su(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Si(n)}}function XI(t,e){var n=Si(e.value),r=Si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function G_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function JI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?JI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wc,ZI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wc=wc||document.createElement("div"),wc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qN=["Webkit","ms","Moz","O"];Object.keys(mu).forEach(function(t){qN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mu[e]=mu[t]})});function eT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mu.hasOwnProperty(t)&&mu[t]?(""+e).trim():e+"px"}function tT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HN=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vm(t,e){if(e){if(HN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function jm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zm=null;function Py(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qm=null,Co=null,Ro=null;function K_(t){if(t=Dl(t)){if(typeof qm!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Rd(e),qm(t.stateNode,t.type,e))}}function nT(t){Co?Ro?Ro.push(t):Ro=[t]:Co=t}function rT(){if(Co){var t=Co,e=Ro;if(Ro=Co=null,K_(t),e)for(t=0;t<e.length;t++)K_(e[t])}}function iT(t,e){return t(e)}function sT(){}var bp=!1;function oT(t,e,n){if(bp)return t(e,n);bp=!0;try{return iT(t,e,n)}finally{bp=!1,(Co!==null||Ro!==null)&&(sT(),rT())}}function Uu(t,e){var n=t.stateNode;if(n===null)return null;var r=Rd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Hm=!1;if(Dr)try{var $a={};Object.defineProperty($a,"passive",{get:function(){Hm=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{Hm=!1}function WN(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var gu=!1,wh=null,_h=!1,Wm=null,GN={onError:function(t){gu=!0,wh=t}};function KN(t,e,n,r,i,s,o,a,u){gu=!1,wh=null,WN.apply(GN,arguments)}function QN(t,e,n,r,i,s,o,a,u){if(KN.apply(this,arguments),gu){if(gu){var l=wh;gu=!1,wh=null}else throw Error(N(198));_h||(_h=!0,Wm=l)}}function qs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function aT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Q_(t){if(qs(t)!==t)throw Error(N(188))}function YN(t){var e=t.alternate;if(!e){if(e=qs(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Q_(i),t;if(s===r)return Q_(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function uT(t){return t=YN(t),t!==null?lT(t):null}function lT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lT(t);if(e!==null)return e;t=t.sibling}return null}var cT=ln.unstable_scheduleCallback,Y_=ln.unstable_cancelCallback,XN=ln.unstable_shouldYield,JN=ln.unstable_requestPaint,je=ln.unstable_now,ZN=ln.unstable_getCurrentPriorityLevel,Oy=ln.unstable_ImmediatePriority,hT=ln.unstable_UserBlockingPriority,Eh=ln.unstable_NormalPriority,eD=ln.unstable_LowPriority,dT=ln.unstable_IdlePriority,Td=null,nr=null;function tD(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(Td,t,void 0,(t.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:iD,nD=Math.log,rD=Math.LN2;function iD(t){return t>>>=0,t===0?32:31-(nD(t)/rD|0)|0}var _c=64,Ec=4194304;function ou(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ou(a):(s&=o,s!==0&&(r=ou(s)))}else o=n&~i,o!==0?r=ou(o):s!==0&&(r=ou(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mn(e),i=1<<n,r|=t[n],e&=~i;return r}function sD(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oD(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=sD(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Gm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fT(){var t=_c;return _c<<=1,!(_c&4194240)&&(_c=64),t}function Cp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mn(e),t[e]=n}function aD(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ly(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function pT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mT,My,gT,yT,vT,Km=!1,Sc=[],di=null,fi=null,pi=null,Bu=new Map,Vu=new Map,ii=[],uD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function X_(t,e){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":Bu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vu.delete(e.pointerId)}}function Fa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Dl(e),e!==null&&My(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lD(t,e,n,r,i){switch(e){case"focusin":return di=Fa(di,t,e,n,r,i),!0;case"dragenter":return fi=Fa(fi,t,e,n,r,i),!0;case"mouseover":return pi=Fa(pi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bu.set(s,Fa(Bu.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vu.set(s,Fa(Vu.get(s)||null,t,e,n,r,i)),!0}return!1}function wT(t){var e=os(t.target);if(e!==null){var n=qs(e);if(n!==null){if(e=n.tag,e===13){if(e=aT(n),e!==null){t.blockedOn=e,vT(t.priority,function(){gT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zm=r,n.target.dispatchEvent(r),zm=null}else return e=Dl(n),e!==null&&My(e),t.blockedOn=n,!1;e.shift()}return!0}function J_(t,e,n){Kc(t)&&n.delete(e)}function cD(){Km=!1,di!==null&&Kc(di)&&(di=null),fi!==null&&Kc(fi)&&(fi=null),pi!==null&&Kc(pi)&&(pi=null),Bu.forEach(J_),Vu.forEach(J_)}function Ua(t,e){t.blockedOn===e&&(t.blockedOn=null,Km||(Km=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,cD)))}function ju(t){function e(i){return Ua(i,t)}if(0<Sc.length){Ua(Sc[0],t);for(var n=1;n<Sc.length;n++){var r=Sc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(di!==null&&Ua(di,t),fi!==null&&Ua(fi,t),pi!==null&&Ua(pi,t),Bu.forEach(e),Vu.forEach(e),n=0;n<ii.length;n++)r=ii[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ii.length&&(n=ii[0],n.blockedOn===null);)wT(n),n.blockedOn===null&&ii.shift()}var Ao=Vr.ReactCurrentBatchConfig,Ih=!0;function hD(t,e,n,r){var i=ye,s=Ao.transition;Ao.transition=null;try{ye=1,$y(t,e,n,r)}finally{ye=i,Ao.transition=s}}function dD(t,e,n,r){var i=ye,s=Ao.transition;Ao.transition=null;try{ye=4,$y(t,e,n,r)}finally{ye=i,Ao.transition=s}}function $y(t,e,n,r){if(Ih){var i=Qm(t,e,n,r);if(i===null)$p(t,e,r,Th,n),X_(t,r);else if(lD(i,t,e,n,r))r.stopPropagation();else if(X_(t,r),e&4&&-1<uD.indexOf(t)){for(;i!==null;){var s=Dl(i);if(s!==null&&mT(s),s=Qm(t,e,n,r),s===null&&$p(t,e,r,Th,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $p(t,e,r,null,n)}}var Th=null;function Qm(t,e,n,r){if(Th=null,t=Py(r),t=os(t),t!==null)if(e=qs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=aT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Th=t,null}function _T(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZN()){case Oy:return 1;case hT:return 4;case Eh:case eD:return 16;case dT:return 536870912;default:return 16}default:return 16}}var ui=null,Fy=null,Qc=null;function ET(){if(Qc)return Qc;var t,e=Fy,n=e.length,r,i="value"in ui?ui.value:ui.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qc=i.slice(t,1<r?1-r:void 0)}function Yc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ic(){return!0}function Z_(){return!1}function fn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ic:Z_,this.isPropagationStopped=Z_,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ic)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ic)},persist:function(){},isPersistent:Ic}),e}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uy=fn(ha),Nl=De({},ha,{view:0,detail:0}),fD=fn(Nl),Rp,Ap,Ba,kd=De({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:By,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ba&&(Ba&&t.type==="mousemove"?(Rp=t.screenX-Ba.screenX,Ap=t.screenY-Ba.screenY):Ap=Rp=0,Ba=t),Rp)},movementY:function(t){return"movementY"in t?t.movementY:Ap}}),e0=fn(kd),pD=De({},kd,{dataTransfer:0}),mD=fn(pD),gD=De({},Nl,{relatedTarget:0}),xp=fn(gD),yD=De({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),vD=fn(yD),wD=De({},ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_D=fn(wD),ED=De({},ha,{data:0}),t0=fn(ED),SD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ID={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kD(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TD[t])?!!e[t]:!1}function By(){return kD}var bD=De({},Nl,{key:function(t){if(t.key){var e=SD[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ID[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:By,charCode:function(t){return t.type==="keypress"?Yc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CD=fn(bD),RD=De({},kd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n0=fn(RD),AD=De({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:By}),xD=fn(AD),ND=De({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),DD=fn(ND),PD=De({},kd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OD=fn(PD),LD=[9,13,27,32],Vy=Dr&&"CompositionEvent"in window,yu=null;Dr&&"documentMode"in document&&(yu=document.documentMode);var MD=Dr&&"TextEvent"in window&&!yu,ST=Dr&&(!Vy||yu&&8<yu&&11>=yu),r0=String.fromCharCode(32),i0=!1;function IT(t,e){switch(t){case"keyup":return LD.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function TT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fo=!1;function $D(t,e){switch(t){case"compositionend":return TT(e);case"keypress":return e.which!==32?null:(i0=!0,r0);case"textInput":return t=e.data,t===r0&&i0?null:t;default:return null}}function FD(t,e){if(fo)return t==="compositionend"||!Vy&&IT(t,e)?(t=ET(),Qc=Fy=ui=null,fo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ST&&e.locale!=="ko"?null:e.data;default:return null}}var UD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function s0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UD[t.type]:e==="textarea"}function kT(t,e,n,r){nT(r),e=kh(e,"onChange"),0<e.length&&(n=new Uy("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vu=null,zu=null;function BD(t){MT(t,0)}function bd(t){var e=go(t);if(QI(e))return t}function VD(t,e){if(t==="change")return e}var bT=!1;if(Dr){var Np;if(Dr){var Dp="oninput"in document;if(!Dp){var o0=document.createElement("div");o0.setAttribute("oninput","return;"),Dp=typeof o0.oninput=="function"}Np=Dp}else Np=!1;bT=Np&&(!document.documentMode||9<document.documentMode)}function a0(){vu&&(vu.detachEvent("onpropertychange",CT),zu=vu=null)}function CT(t){if(t.propertyName==="value"&&bd(zu)){var e=[];kT(e,zu,t,Py(t)),oT(BD,e)}}function jD(t,e,n){t==="focusin"?(a0(),vu=e,zu=n,vu.attachEvent("onpropertychange",CT)):t==="focusout"&&a0()}function zD(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bd(zu)}function qD(t,e){if(t==="click")return bd(e)}function HD(t,e){if(t==="input"||t==="change")return bd(e)}function WD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:WD;function qu(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nm.call(e,i)||!Fn(t[i],e[i]))return!1}return!0}function u0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function l0(t,e){var n=u0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=u0(n)}}function RT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?RT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function AT(){for(var t=window,e=vh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vh(t.document)}return e}function jy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GD(t){var e=AT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&RT(n.ownerDocument.documentElement,n)){if(r!==null&&jy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=l0(n,s);var o=l0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KD=Dr&&"documentMode"in document&&11>=document.documentMode,po=null,Ym=null,wu=null,Xm=!1;function c0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xm||po==null||po!==vh(r)||(r=po,"selectionStart"in r&&jy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wu&&qu(wu,r)||(wu=r,r=kh(Ym,"onSelect"),0<r.length&&(e=new Uy("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=po)))}function Tc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mo={animationend:Tc("Animation","AnimationEnd"),animationiteration:Tc("Animation","AnimationIteration"),animationstart:Tc("Animation","AnimationStart"),transitionend:Tc("Transition","TransitionEnd")},Pp={},xT={};Dr&&(xT=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function Cd(t){if(Pp[t])return Pp[t];if(!mo[t])return t;var e=mo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xT)return Pp[t]=e[n];return t}var NT=Cd("animationend"),DT=Cd("animationiteration"),PT=Cd("animationstart"),OT=Cd("transitionend"),LT=new Map,h0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(t,e){LT.set(t,e),zs(e,[t])}for(var Op=0;Op<h0.length;Op++){var Lp=h0[Op],QD=Lp.toLowerCase(),YD=Lp[0].toUpperCase()+Lp.slice(1);Mi(QD,"on"+YD)}Mi(NT,"onAnimationEnd");Mi(DT,"onAnimationIteration");Mi(PT,"onAnimationStart");Mi("dblclick","onDoubleClick");Mi("focusin","onFocus");Mi("focusout","onBlur");Mi(OT,"onTransitionEnd");Uo("onMouseEnter",["mouseout","mouseover"]);Uo("onMouseLeave",["mouseout","mouseover"]);Uo("onPointerEnter",["pointerout","pointerover"]);Uo("onPointerLeave",["pointerout","pointerover"]);zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var au="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XD=new Set("cancel close invalid load scroll toggle".split(" ").concat(au));function d0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,QN(r,e,void 0,t),t.currentTarget=null}function MT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;d0(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;d0(i,a,l),s=u}}}if(_h)throw t=Wm,_h=!1,Wm=null,t}function Se(t,e){var n=e[ng];n===void 0&&(n=e[ng]=new Set);var r=t+"__bubble";n.has(r)||($T(e,t,2,!1),n.add(r))}function Mp(t,e,n){var r=0;e&&(r|=4),$T(n,t,r,e)}var kc="_reactListening"+Math.random().toString(36).slice(2);function Hu(t){if(!t[kc]){t[kc]=!0,qI.forEach(function(n){n!=="selectionchange"&&(XD.has(n)||Mp(n,!1,t),Mp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[kc]||(e[kc]=!0,Mp("selectionchange",!1,e))}}function $T(t,e,n,r){switch(_T(e)){case 1:var i=hD;break;case 4:i=dD;break;default:i=$y}n=i.bind(null,e,n,t),i=void 0,!Hm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $p(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=os(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}oT(function(){var l=s,c=Py(n),h=[];e:{var d=LT.get(t);if(d!==void 0){var f=Uy,p=t;switch(t){case"keypress":if(Yc(n)===0)break e;case"keydown":case"keyup":f=CD;break;case"focusin":p="focus",f=xp;break;case"focusout":p="blur",f=xp;break;case"beforeblur":case"afterblur":f=xp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=e0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=mD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=xD;break;case NT:case DT:case PT:f=vD;break;case OT:f=DD;break;case"scroll":f=fD;break;case"wheel":f=OD;break;case"copy":case"cut":case"paste":f=_D;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=n0}var g=(e&4)!==0,_=!g&&t==="scroll",y=g?d!==null?d+"Capture":null:d;g=[];for(var m=l,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,y!==null&&(w=Uu(m,y),w!=null&&g.push(Wu(m,w,v)))),_)break;m=m.return}0<g.length&&(d=new f(d,p,null,n,c),h.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==zm&&(p=n.relatedTarget||n.fromElement)&&(os(p)||p[Pr]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=l,p=p?os(p):null,p!==null&&(_=qs(p),p!==_||p.tag!==5&&p.tag!==6)&&(p=null)):(f=null,p=l),f!==p)){if(g=e0,w="onMouseLeave",y="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(g=n0,w="onPointerLeave",y="onPointerEnter",m="pointer"),_=f==null?d:go(f),v=p==null?d:go(p),d=new g(w,m+"leave",f,n,c),d.target=_,d.relatedTarget=v,w=null,os(c)===l&&(g=new g(y,m+"enter",p,n,c),g.target=v,g.relatedTarget=_,w=g),_=w,f&&p)t:{for(g=f,y=p,m=0,v=g;v;v=no(v))m++;for(v=0,w=y;w;w=no(w))v++;for(;0<m-v;)g=no(g),m--;for(;0<v-m;)y=no(y),v--;for(;m--;){if(g===y||y!==null&&g===y.alternate)break t;g=no(g),y=no(y)}g=null}else g=null;f!==null&&f0(h,d,f,g,!1),p!==null&&_!==null&&f0(h,_,p,g,!0)}}e:{if(d=l?go(l):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var b=VD;else if(s0(d))if(bT)b=HD;else{b=zD;var R=jD}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=qD);if(b&&(b=b(t,l))){kT(h,b,n,c);break e}R&&R(t,d,l),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Fm(d,"number",d.value)}switch(R=l?go(l):window,t){case"focusin":(s0(R)||R.contentEditable==="true")&&(po=R,Ym=l,wu=null);break;case"focusout":wu=Ym=po=null;break;case"mousedown":Xm=!0;break;case"contextmenu":case"mouseup":case"dragend":Xm=!1,c0(h,n,c);break;case"selectionchange":if(KD)break;case"keydown":case"keyup":c0(h,n,c)}var P;if(Vy)e:{switch(t){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else fo?IT(t,n)&&($="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(ST&&n.locale!=="ko"&&(fo||$!=="onCompositionStart"?$==="onCompositionEnd"&&fo&&(P=ET()):(ui=c,Fy="value"in ui?ui.value:ui.textContent,fo=!0)),R=kh(l,$),0<R.length&&($=new t0($,t,null,n,c),h.push({event:$,listeners:R}),P?$.data=P:(P=TT(n),P!==null&&($.data=P)))),(P=MD?$D(t,n):FD(t,n))&&(l=kh(l,"onBeforeInput"),0<l.length&&(c=new t0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=P))}MT(h,e)})}function Wu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Uu(t,n),s!=null&&r.unshift(Wu(t,s,i)),s=Uu(t,e),s!=null&&r.push(Wu(t,s,i))),t=t.return}return r}function no(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function f0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Uu(n,s),u!=null&&o.unshift(Wu(n,u,a))):i||(u=Uu(n,s),u!=null&&o.push(Wu(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var JD=/\r\n?/g,ZD=/\u0000|\uFFFD/g;function p0(t){return(typeof t=="string"?t:""+t).replace(JD,`
`).replace(ZD,"")}function bc(t,e,n){if(e=p0(e),p0(t)!==e&&n)throw Error(N(425))}function bh(){}var Jm=null,Zm=null;function eg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tg=typeof setTimeout=="function"?setTimeout:void 0,eP=typeof clearTimeout=="function"?clearTimeout:void 0,m0=typeof Promise=="function"?Promise:void 0,tP=typeof queueMicrotask=="function"?queueMicrotask:typeof m0<"u"?function(t){return m0.resolve(null).then(t).catch(nP)}:tg;function nP(t){setTimeout(function(){throw t})}function Fp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ju(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ju(e)}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function g0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var da=Math.random().toString(36).slice(2),Hn="__reactFiber$"+da,Gu="__reactProps$"+da,Pr="__reactContainer$"+da,ng="__reactEvents$"+da,rP="__reactListeners$"+da,iP="__reactHandles$"+da;function os(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pr]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=g0(t);t!==null;){if(n=t[Hn])return n;t=g0(t)}return e}t=n,n=t.parentNode}return null}function Dl(t){return t=t[Hn]||t[Pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Rd(t){return t[Gu]||null}var rg=[],yo=-1;function $i(t){return{current:t}}function Te(t){0>yo||(t.current=rg[yo],rg[yo]=null,yo--)}function Ee(t,e){yo++,rg[yo]=t.current,t.current=e}var Ii={},Ot=$i(Ii),Zt=$i(!1),Is=Ii;function Bo(t,e){var n=t.type.contextTypes;if(!n)return Ii;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function en(t){return t=t.childContextTypes,t!=null}function Ch(){Te(Zt),Te(Ot)}function y0(t,e,n){if(Ot.current!==Ii)throw Error(N(168));Ee(Ot,e),Ee(Zt,n)}function FT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,jN(t)||"Unknown",i));return De({},n,r)}function Rh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,Is=Ot.current,Ee(Ot,t),Ee(Zt,Zt.current),!0}function v0(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=FT(t,e,Is),r.__reactInternalMemoizedMergedChildContext=t,Te(Zt),Te(Ot),Ee(Ot,t)):Te(Zt),Ee(Zt,n)}var wr=null,Ad=!1,Up=!1;function UT(t){wr===null?wr=[t]:wr.push(t)}function sP(t){Ad=!0,UT(t)}function Fi(){if(!Up&&wr!==null){Up=!0;var t=0,e=ye;try{var n=wr;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wr=null,Ad=!1}catch(i){throw wr!==null&&(wr=wr.slice(t+1)),cT(Oy,Fi),i}finally{ye=e,Up=!1}}return null}var vo=[],wo=0,Ah=null,xh=0,mn=[],gn=0,Ts=null,Er=1,Sr="";function Xi(t,e){vo[wo++]=xh,vo[wo++]=Ah,Ah=t,xh=e}function BT(t,e,n){mn[gn++]=Er,mn[gn++]=Sr,mn[gn++]=Ts,Ts=t;var r=Er;t=Sr;var i=32-Mn(r)-1;r&=~(1<<i),n+=1;var s=32-Mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Er=1<<32-Mn(e)+i|n<<i|r,Sr=s+t}else Er=1<<s|n<<i|r,Sr=t}function zy(t){t.return!==null&&(Xi(t,1),BT(t,1,0))}function qy(t){for(;t===Ah;)Ah=vo[--wo],vo[wo]=null,xh=vo[--wo],vo[wo]=null;for(;t===Ts;)Ts=mn[--gn],mn[gn]=null,Sr=mn[--gn],mn[gn]=null,Er=mn[--gn],mn[gn]=null}var un=null,on=null,be=!1,On=null;function VT(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function w0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,on=mi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ts!==null?{id:Er,overflow:Sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,on=null,!0):!1;default:return!1}}function ig(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sg(t){if(be){var e=on;if(e){var n=e;if(!w0(t,e)){if(ig(t))throw Error(N(418));e=mi(n.nextSibling);var r=un;e&&w0(t,e)?VT(r,n):(t.flags=t.flags&-4097|2,be=!1,un=t)}}else{if(ig(t))throw Error(N(418));t.flags=t.flags&-4097|2,be=!1,un=t}}}function _0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function Cc(t){if(t!==un)return!1;if(!be)return _0(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eg(t.type,t.memoizedProps)),e&&(e=on)){if(ig(t))throw jT(),Error(N(418));for(;e;)VT(t,e),e=mi(e.nextSibling)}if(_0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=mi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=un?mi(t.stateNode.nextSibling):null;return!0}function jT(){for(var t=on;t;)t=mi(t.nextSibling)}function Vo(){on=un=null,be=!1}function Hy(t){On===null?On=[t]:On.push(t)}var oP=Vr.ReactCurrentBatchConfig;function Dn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Nh=$i(null),Dh=null,_o=null,Wy=null;function Gy(){Wy=_o=Dh=null}function Ky(t){var e=Nh.current;Te(Nh),t._currentValue=e}function og(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xo(t,e){Dh=t,Wy=_o=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Wy!==t)if(t={context:t,memoizedValue:e,next:null},_o===null){if(Dh===null)throw Error(N(308));_o=t,Dh.dependencies={lanes:0,firstContext:t}}else _o=_o.next=t;return e}var as=null;function Qy(t){as===null?as=[t]:as.push(t)}function zT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qy(e)):(n.next=i.next,i.next=n),e.interleaved=n,Or(t,r)}function Or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ri=!1;function Yy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function br(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Or(t,n)}return i=r.interleaved,i===null?(e.next=e,Qy(r)):(e.next=i.next,i.next=e),r.interleaved=e,Or(t,n)}function Xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ly(t,n)}}function E0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ph(t,e,n,r){var i=t.updateQueue;ri=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,g=a;switch(d=e,f=n,g.tag){case 1:if(p=g.payload,typeof p=="function"){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=g.payload,d=typeof p=="function"?p.call(f,h,d):p,d==null)break e;h=De({},h,d);break e;case 2:ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=f,u=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bs|=o,t.lanes=o,t.memoizedState=h}}function S0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var HT=new zI.Component().refs;function ag(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xd={isMounted:function(t){return(t=t._reactInternals)?qs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=vi(t),s=br(r,i);s.payload=e,n!=null&&(s.callback=n),e=gi(t,s,i),e!==null&&($n(e,t,i,r),Xc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=vi(t),s=br(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gi(t,s,i),e!==null&&($n(e,t,i,r),Xc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=vi(t),i=br(n,r);i.tag=2,e!=null&&(i.callback=e),e=gi(t,i,r),e!==null&&($n(e,t,r,n),Xc(e,t,r))}};function I0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qu(n,r)||!qu(i,s):!0}function WT(t,e,n){var r=!1,i=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(i=en(e)?Is:Ot.current,r=e.contextTypes,s=(r=r!=null)?Bo(t,i):Ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function T0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xd.enqueueReplaceState(e,e.state,null)}function ug(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=HT,Yy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=In(s):(s=en(e)?Is:Ot.current,i.context=Bo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ag(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xd.enqueueReplaceState(i,i.state,null),Ph(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Va(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===HT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function Rc(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function k0(t){var e=t._init;return e(t._payload)}function GT(t){function e(y,m){if(t){var v=y.deletions;v===null?(y.deletions=[m],y.flags|=16):v.push(m)}}function n(y,m){if(!t)return null;for(;m!==null;)e(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=wi(y,m),y.index=0,y.sibling=null,y}function s(y,m,v){return y.index=v,t?(v=y.alternate,v!==null?(v=v.index,v<m?(y.flags|=2,m):v):(y.flags|=2,m)):(y.flags|=1048576,m)}function o(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,m,v,w){return m===null||m.tag!==6?(m=Wp(v,y.mode,w),m.return=y,m):(m=i(m,v),m.return=y,m)}function u(y,m,v,w){var b=v.type;return b===ho?c(y,m,v.props.children,w,v.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ni&&k0(b)===m.type)?(w=i(m,v.props),w.ref=Va(y,m,v),w.return=y,w):(w=rh(v.type,v.key,v.props,null,y.mode,w),w.ref=Va(y,m,v),w.return=y,w)}function l(y,m,v,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Gp(v,y.mode,w),m.return=y,m):(m=i(m,v.children||[]),m.return=y,m)}function c(y,m,v,w,b){return m===null||m.tag!==7?(m=gs(v,y.mode,w,b),m.return=y,m):(m=i(m,v),m.return=y,m)}function h(y,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Wp(""+m,y.mode,v),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yc:return v=rh(m.type,m.key,m.props,null,y.mode,v),v.ref=Va(y,null,m),v.return=y,v;case co:return m=Gp(m,y.mode,v),m.return=y,m;case ni:var w=m._init;return h(y,w(m._payload),v)}if(su(m)||Ma(m))return m=gs(m,y.mode,v,null),m.return=y,m;Rc(y,m)}return null}function d(y,m,v,w){var b=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(y,m,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yc:return v.key===b?u(y,m,v,w):null;case co:return v.key===b?l(y,m,v,w):null;case ni:return b=v._init,d(y,m,b(v._payload),w)}if(su(v)||Ma(v))return b!==null?null:c(y,m,v,w,null);Rc(y,v)}return null}function f(y,m,v,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(v)||null,a(m,y,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yc:return y=y.get(w.key===null?v:w.key)||null,u(m,y,w,b);case co:return y=y.get(w.key===null?v:w.key)||null,l(m,y,w,b);case ni:var R=w._init;return f(y,m,v,R(w._payload),b)}if(su(w)||Ma(w))return y=y.get(v)||null,c(m,y,w,b,null);Rc(m,w)}return null}function p(y,m,v,w){for(var b=null,R=null,P=m,$=m=0,re=null;P!==null&&$<v.length;$++){P.index>$?(re=P,P=null):re=P.sibling;var K=d(y,P,v[$],w);if(K===null){P===null&&(P=re);break}t&&P&&K.alternate===null&&e(y,P),m=s(K,m,$),R===null?b=K:R.sibling=K,R=K,P=re}if($===v.length)return n(y,P),be&&Xi(y,$),b;if(P===null){for(;$<v.length;$++)P=h(y,v[$],w),P!==null&&(m=s(P,m,$),R===null?b=P:R.sibling=P,R=P);return be&&Xi(y,$),b}for(P=r(y,P);$<v.length;$++)re=f(P,y,$,v[$],w),re!==null&&(t&&re.alternate!==null&&P.delete(re.key===null?$:re.key),m=s(re,m,$),R===null?b=re:R.sibling=re,R=re);return t&&P.forEach(function(Le){return e(y,Le)}),be&&Xi(y,$),b}function g(y,m,v,w){var b=Ma(v);if(typeof b!="function")throw Error(N(150));if(v=b.call(v),v==null)throw Error(N(151));for(var R=b=null,P=m,$=m=0,re=null,K=v.next();P!==null&&!K.done;$++,K=v.next()){P.index>$?(re=P,P=null):re=P.sibling;var Le=d(y,P,K.value,w);if(Le===null){P===null&&(P=re);break}t&&P&&Le.alternate===null&&e(y,P),m=s(Le,m,$),R===null?b=Le:R.sibling=Le,R=Le,P=re}if(K.done)return n(y,P),be&&Xi(y,$),b;if(P===null){for(;!K.done;$++,K=v.next())K=h(y,K.value,w),K!==null&&(m=s(K,m,$),R===null?b=K:R.sibling=K,R=K);return be&&Xi(y,$),b}for(P=r(y,P);!K.done;$++,K=v.next())K=f(P,y,$,K.value,w),K!==null&&(t&&K.alternate!==null&&P.delete(K.key===null?$:K.key),m=s(K,m,$),R===null?b=K:R.sibling=K,R=K);return t&&P.forEach(function(Rn){return e(y,Rn)}),be&&Xi(y,$),b}function _(y,m,v,w){if(typeof v=="object"&&v!==null&&v.type===ho&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case yc:e:{for(var b=v.key,R=m;R!==null;){if(R.key===b){if(b=v.type,b===ho){if(R.tag===7){n(y,R.sibling),m=i(R,v.props.children),m.return=y,y=m;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ni&&k0(b)===R.type){n(y,R.sibling),m=i(R,v.props),m.ref=Va(y,R,v),m.return=y,y=m;break e}n(y,R);break}else e(y,R);R=R.sibling}v.type===ho?(m=gs(v.props.children,y.mode,w,v.key),m.return=y,y=m):(w=rh(v.type,v.key,v.props,null,y.mode,w),w.ref=Va(y,m,v),w.return=y,y=w)}return o(y);case co:e:{for(R=v.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(y,m.sibling),m=i(m,v.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else e(y,m);m=m.sibling}m=Gp(v,y.mode,w),m.return=y,y=m}return o(y);case ni:return R=v._init,_(y,m,R(v._payload),w)}if(su(v))return p(y,m,v,w);if(Ma(v))return g(y,m,v,w);Rc(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,v),m.return=y,y=m):(n(y,m),m=Wp(v,y.mode,w),m.return=y,y=m),o(y)):n(y,m)}return _}var jo=GT(!0),KT=GT(!1),Pl={},rr=$i(Pl),Ku=$i(Pl),Qu=$i(Pl);function us(t){if(t===Pl)throw Error(N(174));return t}function Xy(t,e){switch(Ee(Qu,e),Ee(Ku,t),Ee(rr,Pl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bm(e,t)}Te(rr),Ee(rr,e)}function zo(){Te(rr),Te(Ku),Te(Qu)}function QT(t){us(Qu.current);var e=us(rr.current),n=Bm(e,t.type);e!==n&&(Ee(Ku,t),Ee(rr,n))}function Jy(t){Ku.current===t&&(Te(rr),Te(Ku))}var xe=$i(0);function Oh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bp=[];function Zy(){for(var t=0;t<Bp.length;t++)Bp[t]._workInProgressVersionPrimary=null;Bp.length=0}var Jc=Vr.ReactCurrentDispatcher,Vp=Vr.ReactCurrentBatchConfig,ks=0,Ne=null,Xe=null,it=null,Lh=!1,_u=!1,Yu=0,aP=0;function bt(){throw Error(N(321))}function ev(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function tv(t,e,n,r,i,s){if(ks=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jc.current=t===null||t.memoizedState===null?hP:dP,t=n(r,i),_u){s=0;do{if(_u=!1,Yu=0,25<=s)throw Error(N(301));s+=1,it=Xe=null,e.updateQueue=null,Jc.current=fP,t=n(r,i)}while(_u)}if(Jc.current=Mh,e=Xe!==null&&Xe.next!==null,ks=0,it=Xe=Ne=null,Lh=!1,e)throw Error(N(300));return t}function nv(){var t=Yu!==0;return Yu=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Ne.memoizedState=it=t:it=it.next=t,it}function Tn(){if(Xe===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=it===null?Ne.memoizedState:it.next;if(e!==null)it=e,Xe=t;else{if(t===null)throw Error(N(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},it===null?Ne.memoizedState=it=t:it=it.next=t}return it}function Xu(t,e){return typeof e=="function"?e(t):e}function jp(t){var e=Tn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((ks&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,Ne.lanes|=c,bs|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,Fn(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,bs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zp(t){var e=Tn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Fn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function YT(){}function XT(t,e){var n=Ne,r=Tn(),i=e(),s=!Fn(r.memoizedState,i);if(s&&(r.memoizedState=i,Qt=!0),r=r.queue,rv(e1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Ju(9,ZT.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(N(349));ks&30||JT(n,e,i)}return i}function JT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ZT(t,e,n,r){e.value=n,e.getSnapshot=r,t1(e)&&n1(t)}function e1(t,e,n){return n(function(){t1(e)&&n1(t)})}function t1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function n1(t){var e=Or(t,1);e!==null&&$n(e,t,1,-1)}function b0(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xu,lastRenderedState:t},e.queue=t,t=t.dispatch=cP.bind(null,Ne,t),[e.memoizedState,t]}function Ju(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function r1(){return Tn().memoizedState}function Zc(t,e,n,r){var i=qn();Ne.flags|=t,i.memoizedState=Ju(1|e,n,void 0,r===void 0?null:r)}function Nd(t,e,n,r){var i=Tn();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&ev(r,o.deps)){i.memoizedState=Ju(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Ju(1|e,n,s,r)}function C0(t,e){return Zc(8390656,8,t,e)}function rv(t,e){return Nd(2048,8,t,e)}function i1(t,e){return Nd(4,2,t,e)}function s1(t,e){return Nd(4,4,t,e)}function o1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a1(t,e,n){return n=n!=null?n.concat([t]):null,Nd(4,4,o1.bind(null,e,t),n)}function iv(){}function u1(t,e){var n=Tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ev(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function l1(t,e){var n=Tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ev(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function c1(t,e,n){return ks&21?(Fn(n,e)||(n=fT(),Ne.lanes|=n,bs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function uP(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=Vp.transition;Vp.transition={};try{t(!1),e()}finally{ye=n,Vp.transition=r}}function h1(){return Tn().memoizedState}function lP(t,e,n){var r=vi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},d1(t))f1(e,n);else if(n=zT(t,e,n,r),n!==null){var i=jt();$n(n,t,r,i),p1(n,e,r)}}function cP(t,e,n){var r=vi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(d1(t))f1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,o)){var u=e.interleaved;u===null?(i.next=i,Qy(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=zT(t,e,i,r),n!==null&&(i=jt(),$n(n,t,r,i),p1(n,e,r))}}function d1(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function f1(t,e){_u=Lh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ly(t,n)}}var Mh={readContext:In,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},hP={readContext:In,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:C0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4194308,4,o1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zc(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lP.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:b0,useDebugValue:iv,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=b0(!1),e=t[0];return t=uP.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=qn();if(be){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),ot===null)throw Error(N(349));ks&30||JT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,C0(e1.bind(null,r,s,t),[t]),r.flags|=2048,Ju(9,ZT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=ot.identifierPrefix;if(be){var n=Sr,r=Er;n=(r&~(1<<32-Mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dP={readContext:In,useCallback:u1,useContext:In,useEffect:rv,useImperativeHandle:a1,useInsertionEffect:i1,useLayoutEffect:s1,useMemo:l1,useReducer:jp,useRef:r1,useState:function(){return jp(Xu)},useDebugValue:iv,useDeferredValue:function(t){var e=Tn();return c1(e,Xe.memoizedState,t)},useTransition:function(){var t=jp(Xu)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:YT,useSyncExternalStore:XT,useId:h1,unstable_isNewReconciler:!1},fP={readContext:In,useCallback:u1,useContext:In,useEffect:rv,useImperativeHandle:a1,useInsertionEffect:i1,useLayoutEffect:s1,useMemo:l1,useReducer:zp,useRef:r1,useState:function(){return zp(Xu)},useDebugValue:iv,useDeferredValue:function(t){var e=Tn();return Xe===null?e.memoizedState=t:c1(e,Xe.memoizedState,t)},useTransition:function(){var t=zp(Xu)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:YT,useSyncExternalStore:XT,useId:h1,unstable_isNewReconciler:!1};function qo(t,e){try{var n="",r=e;do n+=VN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pP=typeof WeakMap=="function"?WeakMap:Map;function m1(t,e,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fh||(Fh=!0,wg=r),lg(t,e)},n}function g1(t,e,n){n=br(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lg(t,e),typeof r!="function"&&(yi===null?yi=new Set([this]):yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function R0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=RP.bind(null,t,e,n),e.then(t,t))}function A0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function x0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=br(-1,1),e.tag=2,gi(n,e,1))),n.lanes|=1),t)}var mP=Vr.ReactCurrentOwner,Qt=!1;function $t(t,e,n,r){e.child=t===null?KT(e,null,n,r):jo(e,t.child,n,r)}function N0(t,e,n,r,i){n=n.render;var s=e.ref;return xo(e,i),r=tv(t,e,n,r,s,i),n=nv(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(be&&n&&zy(e),e.flags|=1,$t(t,e,r,i),e.child)}function D0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,y1(t,e,s,r,i)):(t=rh(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qu,n(o,r)&&t.ref===e.ref)return Lr(t,e,i)}return e.flags|=1,t=wi(s,r),t.ref=e.ref,t.return=e,e.child=t}function y1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qu(s,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,Lr(t,e,i)}return cg(t,e,n,r,i)}function v1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(So,rn),rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(So,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(So,rn),rn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(So,rn),rn|=r;return $t(t,e,i,n),e.child}function w1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cg(t,e,n,r,i){var s=en(n)?Is:Ot.current;return s=Bo(e,s),xo(e,i),n=tv(t,e,n,r,s,i),r=nv(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(be&&r&&zy(e),e.flags|=1,$t(t,e,n,i),e.child)}function P0(t,e,n,r,i){if(en(n)){var s=!0;Rh(e)}else s=!1;if(xo(e,i),e.stateNode===null)eh(t,e),WT(e,n,r),ug(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=In(l):(l=en(n)?Is:Ot.current,l=Bo(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&T0(e,o,r,l),ri=!1;var d=e.memoizedState;o.state=d,Ph(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Zt.current||ri?(typeof c=="function"&&(ag(e,n,c,r),u=e.memoizedState),(a=ri||I0(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qT(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Dn(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=In(u):(u=en(n)?Is:Ot.current,u=Bo(e,u));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&T0(e,o,r,u),ri=!1,d=e.memoizedState,o.state=d,Ph(e,r,o,i);var p=e.memoizedState;a!==h||d!==p||Zt.current||ri?(typeof f=="function"&&(ag(e,n,f,r),p=e.memoizedState),(l=ri||I0(e,n,l,r,d,p,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return hg(t,e,n,r,s,i)}function hg(t,e,n,r,i,s){w1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&v0(e,n,!1),Lr(t,e,s);r=e.stateNode,mP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jo(e,t.child,null,s),e.child=jo(e,null,a,s)):$t(t,e,a,s),e.memoizedState=r.state,i&&v0(e,n,!0),e.child}function _1(t){var e=t.stateNode;e.pendingContext?y0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&y0(t,e.context,!1),Xy(t,e.containerInfo)}function O0(t,e,n,r,i){return Vo(),Hy(i),e.flags|=256,$t(t,e,n,r),e.child}var dg={dehydrated:null,treeContext:null,retryLane:0};function fg(t){return{baseLanes:t,cachePool:null,transitions:null}}function E1(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(xe,i&1),t===null)return sg(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Od(o,r,0,null),t=gs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fg(n),e.memoizedState=dg,t):sv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=wi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wi(a,s):(s=gs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dg,r}return s=t.child,t=s.sibling,r=wi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sv(t,e){return e=Od({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ac(t,e,n,r){return r!==null&&Hy(r),jo(e,t.child,null,n),t=sv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qp(Error(N(422))),Ac(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Od({mode:"visible",children:r.children},i,0,null),s=gs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&jo(e,t.child,null,o),e.child.memoizedState=fg(o),e.memoizedState=dg,s);if(!(e.mode&1))return Ac(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=qp(s,r,void 0),Ac(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qt||a){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Or(t,i),$n(r,t,i,-1))}return hv(),r=qp(Error(N(421))),Ac(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=AP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,on=mi(i.nextSibling),un=e,be=!0,On=null,t!==null&&(mn[gn++]=Er,mn[gn++]=Sr,mn[gn++]=Ts,Er=t.id,Sr=t.overflow,Ts=e),e=sv(e,r.children),e.flags|=4096,e)}function L0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),og(t.return,e,n)}function Hp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function S1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if($t(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&L0(t,n,e);else if(t.tag===19)L0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Oh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Oh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hp(e,!0,n,null,s);break;case"together":Hp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eh(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yP(t,e,n){switch(e.tag){case 3:_1(e),Vo();break;case 5:QT(e);break;case 1:en(e.type)&&Rh(e);break;case 4:Xy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(Nh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?E1(t,e,n):(Ee(xe,xe.current&1),t=Lr(t,e,n),t!==null?t.sibling:null);Ee(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return S1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,v1(t,e,n)}return Lr(t,e,n)}var I1,pg,T1,k1;I1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pg=function(){};T1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,us(rr.current);var s=null;switch(n){case"input":i=Mm(t,i),r=Mm(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=Um(t,i),r=Um(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bh)}Vm(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&($u.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&($u.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Se("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};k1=function(t,e,n,r){n!==r&&(e.flags|=4)};function ja(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vP(t,e,n){var r=e.pendingProps;switch(qy(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return en(e.type)&&Ch(),Ct(e),null;case 3:return r=e.stateNode,zo(),Te(Zt),Te(Ot),Zy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(Sg(On),On=null))),pg(t,e),Ct(e),null;case 5:Jy(e);var i=us(Qu.current);if(n=e.type,t!==null&&e.stateNode!=null)T1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return Ct(e),null}if(t=us(rr.current),Cc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Hn]=e,r[Gu]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<au.length;i++)Se(au[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":q_(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":W_(r,s),Se("invalid",r)}Vm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&bc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bc(r.textContent,a,t),i=["children",""+a]):$u.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":vc(r),H_(r,s,!0);break;case"textarea":vc(r),G_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=JI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Hn]=e,t[Gu]=r,I1(t,e,!1,!1),e.stateNode=t;e:{switch(o=jm(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<au.length;i++)Se(au[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":q_(t,r),i=Mm(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Se("invalid",t);break;case"textarea":W_(t,r),i=Um(t,r),Se("invalid",t);break;default:i=r}Vm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?tT(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ZI(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fu(t,u):typeof u=="number"&&Fu(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($u.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&Ay(t,s,u,o))}switch(n){case"input":vc(t),H_(t,r,!1);break;case"textarea":vc(t),G_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Si(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?bo(t,!!r.multiple,s,!1):r.defaultValue!=null&&bo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)k1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=us(Qu.current),us(rr.current),Cc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(s=r.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:bc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return Ct(e),null;case 13:if(Te(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&on!==null&&e.mode&1&&!(e.flags&128))jT(),Vo(),e.flags|=98560,s=!1;else if(s=Cc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Hn]=e}else Vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),s=!1}else On!==null&&(Sg(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Ze===0&&(Ze=3):hv())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return zo(),pg(t,e),t===null&&Hu(e.stateNode.containerInfo),Ct(e),null;case 10:return Ky(e.type._context),Ct(e),null;case 17:return en(e.type)&&Ch(),Ct(e),null;case 19:if(Te(xe),s=e.memoizedState,s===null)return Ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ja(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Oh(t),o!==null){for(e.flags|=128,ja(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>Ho&&(e.flags|=128,r=!0,ja(s,!1),e.lanes=4194304)}else{if(!r)if(t=Oh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ja(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return Ct(e),null}else 2*je()-s.renderingStartTime>Ho&&n!==1073741824&&(e.flags|=128,r=!0,ja(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=xe.current,Ee(xe,r?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return cv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rn&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function wP(t,e){switch(qy(e),e.tag){case 1:return en(e.type)&&Ch(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zo(),Te(Zt),Te(Ot),Zy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jy(e),null;case 13:if(Te(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));Vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(xe),null;case 4:return zo(),null;case 10:return Ky(e.type._context),null;case 22:case 23:return cv(),null;case 24:return null;default:return null}}var xc=!1,At=!1,_P=typeof WeakSet=="function"?WeakSet:Set,B=null;function Eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function mg(t,e,n){try{n()}catch(r){$e(t,e,r)}}var M0=!1;function EP(t,e){if(Jm=Ih,t=AT(),jy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zm={focusedElem:t,selectionRange:n},Ih=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var g=p.memoizedProps,_=p.memoizedState,y=e.stateNode,m=y.getSnapshotBeforeUpdate(e.elementType===e.type?g:Dn(e.type,g),_);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){$e(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return p=M0,M0=!1,p}function Eu(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mg(e,n,s)}i=i.next}while(i!==r)}}function Dd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b1(t){var e=t.alternate;e!==null&&(t.alternate=null,b1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[Gu],delete e[ng],delete e[rP],delete e[iP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C1(t){return t.tag===5||t.tag===3||t.tag===4}function $0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bh));else if(r!==4&&(t=t.child,t!==null))for(yg(t,e,n),t=t.sibling;t!==null;)yg(t,e,n),t=t.sibling}function vg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vg(t,e,n),t=t.sibling;t!==null;)vg(t,e,n),t=t.sibling}var pt=null,Pn=!1;function Yr(t,e,n){for(n=n.child;n!==null;)R1(t,e,n),n=n.sibling}function R1(t,e,n){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(Td,n)}catch{}switch(n.tag){case 5:At||Eo(n,e);case 6:var r=pt,i=Pn;pt=null,Yr(t,e,n),pt=r,Pn=i,pt!==null&&(Pn?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(Pn?(t=pt,n=n.stateNode,t.nodeType===8?Fp(t.parentNode,n):t.nodeType===1&&Fp(t,n),ju(t)):Fp(pt,n.stateNode));break;case 4:r=pt,i=Pn,pt=n.stateNode.containerInfo,Pn=!0,Yr(t,e,n),pt=r,Pn=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mg(n,e,o),i=i.next}while(i!==r)}Yr(t,e,n);break;case 1:if(!At&&(Eo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$e(n,e,a)}Yr(t,e,n);break;case 21:Yr(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,Yr(t,e,n),At=r):Yr(t,e,n);break;default:Yr(t,e,n)}}function F0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _P),e.forEach(function(r){var i=xP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,Pn=!1;break e;case 3:pt=a.stateNode.containerInfo,Pn=!0;break e;case 4:pt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(pt===null)throw Error(N(160));R1(s,o,i),pt=null,Pn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){$e(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A1(e,t),e=e.sibling}function A1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),zn(t),r&4){try{Eu(3,t,t.return),Dd(3,t)}catch(g){$e(t,t.return,g)}try{Eu(5,t,t.return)}catch(g){$e(t,t.return,g)}}break;case 1:Nn(e,t),zn(t),r&512&&n!==null&&Eo(n,n.return);break;case 5:if(Nn(e,t),zn(t),r&512&&n!==null&&Eo(n,n.return),t.flags&32){var i=t.stateNode;try{Fu(i,"")}catch(g){$e(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&YI(i,s),jm(a,o);var l=jm(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?tT(i,h):c==="dangerouslySetInnerHTML"?ZI(i,h):c==="children"?Fu(i,h):Ay(i,c,h,l)}switch(a){case"input":$m(i,s);break;case"textarea":XI(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?bo(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?bo(i,!!s.multiple,s.defaultValue,!0):bo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Gu]=s}catch(g){$e(t,t.return,g)}}break;case 6:if(Nn(e,t),zn(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){$e(t,t.return,g)}}break;case 3:if(Nn(e,t),zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ju(e.containerInfo)}catch(g){$e(t,t.return,g)}break;case 4:Nn(e,t),zn(t);break;case 13:Nn(e,t),zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uv=je())),r&4&&F0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(At=(l=At)||c,Nn(e,t),At=l):Nn(e,t),zn(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(h=B=c;B!==null;){switch(d=B,f=d.child,d.tag){case 0:case 11:case 14:case 15:Eu(4,d,d.return);break;case 1:Eo(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(g){$e(r,n,g)}}break;case 5:Eo(d,d.return);break;case 22:if(d.memoizedState!==null){B0(h);continue}}f!==null?(f.return=d,B=f):B0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=eT("display",o))}catch(g){$e(t,t.return,g)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(g){$e(t,t.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nn(e,t),zn(t),r&4&&F0(t);break;case 21:break;default:Nn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C1(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fu(i,""),r.flags&=-33);var s=$0(t);vg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$0(t);yg(t,a,o);break;default:throw Error(N(161))}}catch(u){$e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SP(t,e,n){B=t,x1(t)}function x1(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xc;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||At;a=xc;var l=At;if(xc=o,(At=u)&&!l)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?V0(i):u!==null?(u.return=o,B=u):V0(i);for(;s!==null;)B=s,x1(s),s=s.sibling;B=i,xc=a,At=l}U0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):U0(t)}}function U0(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:At||Dd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&S0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}S0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ju(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}At||e.flags&512&&gg(e)}catch(d){$e(e,e.return,d)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function B0(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function V0(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dd(4,e)}catch(u){$e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){$e(e,i,u)}}var s=e.return;try{gg(e)}catch(u){$e(e,s,u)}break;case 5:var o=e.return;try{gg(e)}catch(u){$e(e,o,u)}}}catch(u){$e(e,e.return,u)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var IP=Math.ceil,$h=Vr.ReactCurrentDispatcher,ov=Vr.ReactCurrentOwner,En=Vr.ReactCurrentBatchConfig,de=0,ot=null,Ye=null,vt=0,rn=0,So=$i(0),Ze=0,Zu=null,bs=0,Pd=0,av=0,Su=null,Kt=null,uv=0,Ho=1/0,yr=null,Fh=!1,wg=null,yi=null,Nc=!1,li=null,Uh=0,Iu=0,_g=null,th=-1,nh=0;function jt(){return de&6?je():th!==-1?th:th=je()}function vi(t){return t.mode&1?de&2&&vt!==0?vt&-vt:oP.transition!==null?(nh===0&&(nh=fT()),nh):(t=ye,t!==0||(t=window.event,t=t===void 0?16:_T(t.type)),t):1}function $n(t,e,n,r){if(50<Iu)throw Iu=0,_g=null,Error(N(185));xl(t,n,r),(!(de&2)||t!==ot)&&(t===ot&&(!(de&2)&&(Pd|=n),Ze===4&&si(t,vt)),tn(t,r),n===1&&de===0&&!(e.mode&1)&&(Ho=je()+500,Ad&&Fi()))}function tn(t,e){var n=t.callbackNode;oD(t,e);var r=Sh(t,t===ot?vt:0);if(r===0)n!==null&&Y_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Y_(n),e===1)t.tag===0?sP(j0.bind(null,t)):UT(j0.bind(null,t)),tP(function(){!(de&6)&&Fi()}),n=null;else{switch(pT(r)){case 1:n=Oy;break;case 4:n=hT;break;case 16:n=Eh;break;case 536870912:n=dT;break;default:n=Eh}n=F1(n,N1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function N1(t,e){if(th=-1,nh=0,de&6)throw Error(N(327));var n=t.callbackNode;if(No()&&t.callbackNode!==n)return null;var r=Sh(t,t===ot?vt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bh(t,r);else{e=r;var i=de;de|=2;var s=P1();(ot!==t||vt!==e)&&(yr=null,Ho=je()+500,ms(t,e));do try{bP();break}catch(a){D1(t,a)}while(1);Gy(),$h.current=s,de=i,Ye!==null?e=0:(ot=null,vt=0,e=Ze)}if(e!==0){if(e===2&&(i=Gm(t),i!==0&&(r=i,e=Eg(t,i))),e===1)throw n=Zu,ms(t,0),si(t,r),tn(t,je()),n;if(e===6)si(t,r);else{if(i=t.current.alternate,!(r&30)&&!TP(i)&&(e=Bh(t,r),e===2&&(s=Gm(t),s!==0&&(r=s,e=Eg(t,s))),e===1))throw n=Zu,ms(t,0),si(t,r),tn(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:Ji(t,Kt,yr);break;case 3:if(si(t,r),(r&130023424)===r&&(e=uv+500-je(),10<e)){if(Sh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tg(Ji.bind(null,t,Kt,yr),e);break}Ji(t,Kt,yr);break;case 4:if(si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IP(r/1960))-r,10<r){t.timeoutHandle=tg(Ji.bind(null,t,Kt,yr),r);break}Ji(t,Kt,yr);break;case 5:Ji(t,Kt,yr);break;default:throw Error(N(329))}}}return tn(t,je()),t.callbackNode===n?N1.bind(null,t):null}function Eg(t,e){var n=Su;return t.current.memoizedState.isDehydrated&&(ms(t,e).flags|=256),t=Bh(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Sg(e)),t}function Sg(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function TP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function si(t,e){for(e&=~av,e&=~Pd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mn(e),r=1<<n;t[n]=-1,e&=~r}}function j0(t){if(de&6)throw Error(N(327));No();var e=Sh(t,0);if(!(e&1))return tn(t,je()),null;var n=Bh(t,e);if(t.tag!==0&&n===2){var r=Gm(t);r!==0&&(e=r,n=Eg(t,r))}if(n===1)throw n=Zu,ms(t,0),si(t,e),tn(t,je()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ji(t,Kt,yr),tn(t,je()),null}function lv(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Ho=je()+500,Ad&&Fi())}}function Cs(t){li!==null&&li.tag===0&&!(de&6)&&No();var e=de;de|=1;var n=En.transition,r=ye;try{if(En.transition=null,ye=1,t)return t()}finally{ye=r,En.transition=n,de=e,!(de&6)&&Fi()}}function cv(){rn=So.current,Te(So)}function ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eP(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(qy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ch();break;case 3:zo(),Te(Zt),Te(Ot),Zy();break;case 5:Jy(r);break;case 4:zo();break;case 13:Te(xe);break;case 19:Te(xe);break;case 10:Ky(r.type._context);break;case 22:case 23:cv()}n=n.return}if(ot=t,Ye=t=wi(t.current,null),vt=rn=e,Ze=0,Zu=null,av=Pd=bs=0,Kt=Su=null,as!==null){for(e=0;e<as.length;e++)if(n=as[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}as=null}return t}function D1(t,e){do{var n=Ye;try{if(Gy(),Jc.current=Mh,Lh){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lh=!1}if(ks=0,it=Xe=Ne=null,_u=!1,Yu=0,ov.current=null,n===null||n.return===null){Ze=1,Zu=e,Ye=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=vt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=A0(o);if(f!==null){f.flags&=-257,x0(f,o,a,s,e),f.mode&1&&R0(s,l,e),e=f,u=l;var p=e.updateQueue;if(p===null){var g=new Set;g.add(u),e.updateQueue=g}else p.add(u);break e}else{if(!(e&1)){R0(s,l,e),hv();break e}u=Error(N(426))}}else if(be&&a.mode&1){var _=A0(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),x0(_,o,a,s,e),Hy(qo(u,a));break e}}s=u=qo(u,a),Ze!==4&&(Ze=2),Su===null?Su=[s]:Su.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=m1(s,u,e);E0(s,y);break e;case 1:a=u;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yi===null||!yi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=g1(s,a,e);E0(s,w);break e}}s=s.return}while(s!==null)}L1(n)}catch(b){e=b,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function P1(){var t=$h.current;return $h.current=Mh,t===null?Mh:t}function hv(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),ot===null||!(bs&268435455)&&!(Pd&268435455)||si(ot,vt)}function Bh(t,e){var n=de;de|=2;var r=P1();(ot!==t||vt!==e)&&(yr=null,ms(t,e));do try{kP();break}catch(i){D1(t,i)}while(1);if(Gy(),de=n,$h.current=r,Ye!==null)throw Error(N(261));return ot=null,vt=0,Ze}function kP(){for(;Ye!==null;)O1(Ye)}function bP(){for(;Ye!==null&&!XN();)O1(Ye)}function O1(t){var e=$1(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?L1(t):Ye=e,ov.current=null}function L1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wP(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Ye=null;return}}else if(n=vP(n,e,rn),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);Ze===0&&(Ze=5)}function Ji(t,e,n){var r=ye,i=En.transition;try{En.transition=null,ye=1,CP(t,e,n,r)}finally{En.transition=i,ye=r}return null}function CP(t,e,n,r){do No();while(li!==null);if(de&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(aD(t,s),t===ot&&(Ye=ot=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nc||(Nc=!0,F1(Eh,function(){return No(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=ye;ye=1;var a=de;de|=4,ov.current=null,EP(t,n),A1(n,t),GD(Zm),Ih=!!Jm,Zm=Jm=null,t.current=n,SP(n),JN(),de=a,ye=o,En.transition=s}else t.current=n;if(Nc&&(Nc=!1,li=t,Uh=i),s=t.pendingLanes,s===0&&(yi=null),tD(n.stateNode),tn(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fh)throw Fh=!1,t=wg,wg=null,t;return Uh&1&&t.tag!==0&&No(),s=t.pendingLanes,s&1?t===_g?Iu++:(Iu=0,_g=t):Iu=0,Fi(),null}function No(){if(li!==null){var t=pT(Uh),e=En.transition,n=ye;try{if(En.transition=null,ye=16>t?16:t,li===null)var r=!1;else{if(t=li,li=null,Uh=0,de&6)throw Error(N(331));var i=de;for(de|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(B=l;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:Eu(8,c,s)}var h=c.child;if(h!==null)h.return=c,B=h;else for(;B!==null;){c=B;var d=c.sibling,f=c.return;if(b1(c),c===l){B=null;break}if(d!==null){d.return=f,B=d;break}B=f}}}var p=s.alternate;if(p!==null){var g=p.child;if(g!==null){p.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Eu(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,B=y;break e}B=s.return}}var m=t.current;for(B=m;B!==null;){o=B;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,B=v;else e:for(o=m;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dd(9,a)}}catch(b){$e(a,a.return,b)}if(a===o){B=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,B=w;break e}B=a.return}}if(de=i,Fi(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(Td,t)}catch{}r=!0}return r}finally{ye=n,En.transition=e}}return!1}function z0(t,e,n){e=qo(n,e),e=m1(t,e,1),t=gi(t,e,1),e=jt(),t!==null&&(xl(t,1,e),tn(t,e))}function $e(t,e,n){if(t.tag===3)z0(t,t,n);else for(;e!==null;){if(e.tag===3){z0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yi===null||!yi.has(r))){t=qo(n,t),t=g1(e,t,1),e=gi(e,t,1),t=jt(),e!==null&&(xl(e,1,t),tn(e,t));break}}e=e.return}}function RP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(vt&n)===n&&(Ze===4||Ze===3&&(vt&130023424)===vt&&500>je()-uv?ms(t,0):av|=n),tn(t,e)}function M1(t,e){e===0&&(t.mode&1?(e=Ec,Ec<<=1,!(Ec&130023424)&&(Ec=4194304)):e=1);var n=jt();t=Or(t,e),t!==null&&(xl(t,e,n),tn(t,n))}function AP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M1(t,n)}function xP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),M1(t,n)}var $1;$1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,yP(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,be&&e.flags&1048576&&BT(e,xh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eh(t,e),t=e.pendingProps;var i=Bo(e,Ot.current);xo(e,n),i=tv(null,e,r,t,i,n);var s=nv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(s=!0,Rh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yy(e),i.updater=xd,e.stateNode=i,i._reactInternals=e,ug(e,r,t,n),e=hg(null,e,r,!0,s,n)):(e.tag=0,be&&s&&zy(e),$t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eh(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DP(r),t=Dn(r,t),i){case 0:e=cg(null,e,r,t,n);break e;case 1:e=P0(null,e,r,t,n);break e;case 11:e=N0(null,e,r,t,n);break e;case 14:e=D0(null,e,r,Dn(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),cg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),P0(t,e,r,i,n);case 3:e:{if(_1(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qT(t,e),Ph(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qo(Error(N(423)),e),e=O0(t,e,r,n,i);break e}else if(r!==i){i=qo(Error(N(424)),e),e=O0(t,e,r,n,i);break e}else for(on=mi(e.stateNode.containerInfo.firstChild),un=e,be=!0,On=null,n=KT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vo(),r===i){e=Lr(t,e,n);break e}$t(t,e,r,n)}e=e.child}return e;case 5:return QT(e),t===null&&sg(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,eg(r,i)?o=null:s!==null&&eg(r,s)&&(e.flags|=32),w1(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&sg(e),null;case 13:return E1(t,e,n);case 4:return Xy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jo(e,null,r,n):$t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),N0(t,e,r,i,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(Nh,r._currentValue),r._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===i.children&&!Zt.current){e=Lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=br(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),og(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),og(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xo(e,n),i=In(i),r=r(i),e.flags|=1,$t(t,e,r,n),e.child;case 14:return r=e.type,i=Dn(r,e.pendingProps),i=Dn(r.type,i),D0(t,e,r,i,n);case 15:return y1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dn(r,i),eh(t,e),e.tag=1,en(r)?(t=!0,Rh(e)):t=!1,xo(e,n),WT(e,r,i),ug(e,r,i,n),hg(null,e,r,!0,t,n);case 19:return S1(t,e,n);case 22:return v1(t,e,n)}throw Error(N(156,e.tag))};function F1(t,e){return cT(t,e)}function NP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,r){return new NP(t,e,n,r)}function dv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DP(t){if(typeof t=="function")return dv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ny)return 11;if(t===Dy)return 14}return 2}function wi(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rh(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ho:return gs(n.children,i,s,e);case xy:o=8,i|=8;break;case Dm:return t=vn(12,n,e,i|2),t.elementType=Dm,t.lanes=s,t;case Pm:return t=vn(13,n,e,i),t.elementType=Pm,t.lanes=s,t;case Om:return t=vn(19,n,e,i),t.elementType=Om,t.lanes=s,t;case GI:return Od(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case HI:o=10;break e;case WI:o=9;break e;case Ny:o=11;break e;case Dy:o=14;break e;case ni:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=vn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gs(t,e,n,r){return t=vn(7,t,r,e),t.lanes=n,t}function Od(t,e,n,r){return t=vn(22,t,r,e),t.elementType=GI,t.lanes=n,t.stateNode={isHidden:!1},t}function Wp(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function Gp(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cp(0),this.expirationTimes=Cp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fv(t,e,n,r,i,s,o,a,u){return t=new PP(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yy(s),t}function OP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:co,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function U1(t){if(!t)return Ii;t=t._reactInternals;e:{if(qs(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(en(n))return FT(t,n,e)}return e}function B1(t,e,n,r,i,s,o,a,u){return t=fv(n,r,!0,t,i,s,o,a,u),t.context=U1(null),n=t.current,r=jt(),i=vi(n),s=br(r,i),s.callback=e??null,gi(n,s,i),t.current.lanes=i,xl(t,i,r),tn(t,r),t}function Ld(t,e,n,r){var i=e.current,s=jt(),o=vi(i);return n=U1(n),e.context===null?e.context=n:e.pendingContext=n,e=br(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gi(i,e,o),t!==null&&($n(t,i,o,s),Xc(t,i,o)),o}function Vh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function q0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pv(t,e){q0(t,e),(t=t.alternate)&&q0(t,e)}function LP(){return null}var V1=typeof reportError=="function"?reportError:function(t){console.error(t)};function mv(t){this._internalRoot=t}Md.prototype.render=mv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));Ld(t,e,null,null)};Md.prototype.unmount=mv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cs(function(){Ld(null,t,null,null)}),e[Pr]=null}};function Md(t){this._internalRoot=t}Md.prototype.unstable_scheduleHydration=function(t){if(t){var e=yT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ii.length&&e!==0&&e<ii[n].priority;n++);ii.splice(n,0,t),n===0&&wT(t)}};function gv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function H0(){}function MP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=Vh(o);s.call(l)}}var o=B1(e,r,t,0,null,!1,!1,"",H0);return t._reactRootContainer=o,t[Pr]=o.current,Hu(t.nodeType===8?t.parentNode:t),Cs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=Vh(u);a.call(l)}}var u=fv(t,0,!1,null,null,!1,!1,"",H0);return t._reactRootContainer=u,t[Pr]=u.current,Hu(t.nodeType===8?t.parentNode:t),Cs(function(){Ld(e,u,n,r)}),u}function Fd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Vh(o);a.call(u)}}Ld(e,o,t,i)}else o=MP(n,e,t,i,r);return Vh(o)}mT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ou(e.pendingLanes);n!==0&&(Ly(e,n|1),tn(e,je()),!(de&6)&&(Ho=je()+500,Fi()))}break;case 13:Cs(function(){var r=Or(t,1);if(r!==null){var i=jt();$n(r,t,1,i)}}),pv(t,1)}};My=function(t){if(t.tag===13){var e=Or(t,134217728);if(e!==null){var n=jt();$n(e,t,134217728,n)}pv(t,134217728)}};gT=function(t){if(t.tag===13){var e=vi(t),n=Or(t,e);if(n!==null){var r=jt();$n(n,t,e,r)}pv(t,e)}};yT=function(){return ye};vT=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};qm=function(t,e,n){switch(e){case"input":if($m(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rd(r);if(!i)throw Error(N(90));QI(r),$m(r,i)}}}break;case"textarea":XI(t,n);break;case"select":e=n.value,e!=null&&bo(t,!!n.multiple,e,!1)}};iT=lv;sT=Cs;var $P={usingClientEntryPoint:!1,Events:[Dl,go,Rd,nT,rT,lv]},za={findFiberByHostInstance:os,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},FP={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uT(t),t===null?null:t.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||LP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{Td=Dc.inject(FP),nr=Dc}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$P;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gv(e))throw Error(N(200));return OP(t,e,null,n)};dn.createRoot=function(t,e){if(!gv(t))throw Error(N(299));var n=!1,r="",i=V1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fv(t,1,!1,null,null,n,!1,r,i),t[Pr]=e.current,Hu(t.nodeType===8?t.parentNode:t),new mv(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=uT(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return Cs(t)};dn.hydrate=function(t,e,n){if(!$d(e))throw Error(N(200));return Fd(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!gv(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=V1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=B1(e,null,t,1,n??null,i,!1,s,o),t[Pr]=e.current,Hu(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Md(e)};dn.render=function(t,e,n){if(!$d(e))throw Error(N(200));return Fd(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!$d(t))throw Error(N(40));return t._reactRootContainer?(Cs(function(){Fd(null,null,t,!1,function(){t._reactRootContainer=null,t[Pr]=null})}),!0):!1};dn.unstable_batchedUpdates=lv;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$d(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Fd(t,e,n,!1,r)};dn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=dn})(LN);var W0=yh;Am.createRoot=W0.createRoot,Am.hydrateRoot=W0.hydrateRoot;var Ig={},UP={get exports(){return Ig},set exports(t){Ig=t}},j1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=L;function BP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var VP=typeof Object.is=="function"?Object.is:BP,jP=Wo.useState,zP=Wo.useEffect,qP=Wo.useLayoutEffect,HP=Wo.useDebugValue;function WP(t,e){var n=e(),r=jP({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return qP(function(){i.value=n,i.getSnapshot=e,Kp(i)&&s({inst:i})},[t,n,e]),zP(function(){return Kp(i)&&s({inst:i}),t(function(){Kp(i)&&s({inst:i})})},[t]),HP(n),n}function Kp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!VP(t,n)}catch{return!0}}function GP(t,e){return e()}var KP=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?GP:WP;j1.useSyncExternalStore=Wo.useSyncExternalStore!==void 0?Wo.useSyncExternalStore:KP;(function(t){t.exports=j1})(UP);var Tg={},QP={get exports(){return Tg},set exports(t){Tg=t}},z1={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=L,YP=Ig;function XP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var JP=typeof Object.is=="function"?Object.is:XP,ZP=YP.useSyncExternalStore,eO=Ud.useRef,tO=Ud.useEffect,nO=Ud.useMemo,rO=Ud.useDebugValue;z1.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=eO(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=nO(function(){function u(f){if(!l){if(l=!0,c=f,f=r(f),i!==void 0&&o.hasValue){var p=o.value;if(i(p,f))return h=p}return h=f}if(p=h,JP(c,f))return p;var g=r(f);return i!==void 0&&i(p,g)?p:(c=f,h=g)}var l=!1,c,h,d=n===void 0?null:n;return[function(){return u(e())},d===null?void 0:function(){return u(d())}]},[e,n,r,i]);var a=ZP(t,s[0],s[1]);return tO(function(){o.hasValue=!0,o.value=a},[a]),rO(a),a};(function(t){t.exports=z1})(QP);function iO(t){t()}let q1=iO;const sO=t=>q1=t,oO=()=>q1,Ti=L.createContext(null);function H1(){return L.useContext(Ti)}const aO=()=>{throw new Error("uSES not initialized!")};let W1=aO;const uO=t=>{W1=t},lO=(t,e)=>t===e;function cO(t=Ti){const e=t===Ti?H1:()=>L.useContext(t);return function(r,i=lO){const{store:s,subscription:o,getServerState:a}=e(),u=W1(o.addNestedSub,s.getState,a||s.getState,r,i);return L.useDebugValue(u),u}}const hO=cO();var kg={},dO={get exports(){return kg},set exports(t){kg=t}},ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ct=typeof Symbol=="function"&&Symbol.for,yv=ct?Symbol.for("react.element"):60103,vv=ct?Symbol.for("react.portal"):60106,Bd=ct?Symbol.for("react.fragment"):60107,Vd=ct?Symbol.for("react.strict_mode"):60108,jd=ct?Symbol.for("react.profiler"):60114,zd=ct?Symbol.for("react.provider"):60109,qd=ct?Symbol.for("react.context"):60110,wv=ct?Symbol.for("react.async_mode"):60111,Hd=ct?Symbol.for("react.concurrent_mode"):60111,Wd=ct?Symbol.for("react.forward_ref"):60112,Gd=ct?Symbol.for("react.suspense"):60113,fO=ct?Symbol.for("react.suspense_list"):60120,Kd=ct?Symbol.for("react.memo"):60115,Qd=ct?Symbol.for("react.lazy"):60116,pO=ct?Symbol.for("react.block"):60121,mO=ct?Symbol.for("react.fundamental"):60117,gO=ct?Symbol.for("react.responder"):60118,yO=ct?Symbol.for("react.scope"):60119;function pn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case yv:switch(t=t.type,t){case wv:case Hd:case Bd:case jd:case Vd:case Gd:return t;default:switch(t=t&&t.$$typeof,t){case qd:case Wd:case Qd:case Kd:case zd:return t;default:return e}}case vv:return e}}}function G1(t){return pn(t)===Hd}ve.AsyncMode=wv;ve.ConcurrentMode=Hd;ve.ContextConsumer=qd;ve.ContextProvider=zd;ve.Element=yv;ve.ForwardRef=Wd;ve.Fragment=Bd;ve.Lazy=Qd;ve.Memo=Kd;ve.Portal=vv;ve.Profiler=jd;ve.StrictMode=Vd;ve.Suspense=Gd;ve.isAsyncMode=function(t){return G1(t)||pn(t)===wv};ve.isConcurrentMode=G1;ve.isContextConsumer=function(t){return pn(t)===qd};ve.isContextProvider=function(t){return pn(t)===zd};ve.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===yv};ve.isForwardRef=function(t){return pn(t)===Wd};ve.isFragment=function(t){return pn(t)===Bd};ve.isLazy=function(t){return pn(t)===Qd};ve.isMemo=function(t){return pn(t)===Kd};ve.isPortal=function(t){return pn(t)===vv};ve.isProfiler=function(t){return pn(t)===jd};ve.isStrictMode=function(t){return pn(t)===Vd};ve.isSuspense=function(t){return pn(t)===Gd};ve.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Bd||t===Hd||t===jd||t===Vd||t===Gd||t===fO||typeof t=="object"&&t!==null&&(t.$$typeof===Qd||t.$$typeof===Kd||t.$$typeof===zd||t.$$typeof===qd||t.$$typeof===Wd||t.$$typeof===mO||t.$$typeof===gO||t.$$typeof===yO||t.$$typeof===pO)};ve.typeOf=pn;(function(t){t.exports=ve})(dO);var K1=kg,vO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wO={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Q1={};Q1[K1.ForwardRef]=vO;Q1[K1.Memo]=wO;var G0={},_O={get exports(){return G0},set exports(t){G0=t}},we={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=Symbol.for("react.element"),Ev=Symbol.for("react.portal"),Yd=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),Zd=Symbol.for("react.provider"),ef=Symbol.for("react.context"),EO=Symbol.for("react.server_context"),tf=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),sf=Symbol.for("react.memo"),of=Symbol.for("react.lazy"),SO=Symbol.for("react.offscreen"),Y1;Y1=Symbol.for("react.module.reference");function Cn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case _v:switch(t=t.type,t){case Yd:case Jd:case Xd:case nf:case rf:return t;default:switch(t=t&&t.$$typeof,t){case EO:case ef:case tf:case of:case sf:case Zd:return t;default:return e}}case Ev:return e}}}we.ContextConsumer=ef;we.ContextProvider=Zd;we.Element=_v;we.ForwardRef=tf;we.Fragment=Yd;we.Lazy=of;we.Memo=sf;we.Portal=Ev;we.Profiler=Jd;we.StrictMode=Xd;we.Suspense=nf;we.SuspenseList=rf;we.isAsyncMode=function(){return!1};we.isConcurrentMode=function(){return!1};we.isContextConsumer=function(t){return Cn(t)===ef};we.isContextProvider=function(t){return Cn(t)===Zd};we.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===_v};we.isForwardRef=function(t){return Cn(t)===tf};we.isFragment=function(t){return Cn(t)===Yd};we.isLazy=function(t){return Cn(t)===of};we.isMemo=function(t){return Cn(t)===sf};we.isPortal=function(t){return Cn(t)===Ev};we.isProfiler=function(t){return Cn(t)===Jd};we.isStrictMode=function(t){return Cn(t)===Xd};we.isSuspense=function(t){return Cn(t)===nf};we.isSuspenseList=function(t){return Cn(t)===rf};we.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Yd||t===Jd||t===Xd||t===nf||t===rf||t===SO||typeof t=="object"&&t!==null&&(t.$$typeof===of||t.$$typeof===sf||t.$$typeof===Zd||t.$$typeof===ef||t.$$typeof===tf||t.$$typeof===Y1||t.getModuleId!==void 0)};we.typeOf=Cn;(function(t){t.exports=we})(_O);function IO(){const t=oO();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const K0={notify(){},get:()=>[]};function TO(t,e){let n,r=K0;function i(h){return u(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=IO())}function l(){n&&(n(),n=void 0,r.clear(),r=K0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:l,getListeners:()=>r};return c}const kO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bO=kO?L.useLayoutEffect:L.useEffect;function CO({store:t,context:e,children:n,serverState:r}){const i=L.useMemo(()=>{const a=TO(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=L.useMemo(()=>t.getState(),[t]);bO(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]);const o=e||Ti;return js.createElement(o.Provider,{value:i},n)}function X1(t=Ti){const e=t===Ti?H1:()=>L.useContext(t);return function(){const{store:r}=e();return r}}const RO=X1();function AO(t=Ti){const e=t===Ti?RO:X1(t);return function(){return e().dispatch}}const xO=AO();uO(Tg.useSyncExternalStoreWithSelector);sO(yh.unstable_batchedUpdates);function el(t){return el=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},el(t)}function NO(t,e){if(el(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(el(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function DO(t){var e=NO(t,"string");return el(e)==="symbol"?e:String(e)}function PO(t,e,n){return e=DO(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Q0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Y0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Q0(Object(n),!0).forEach(function(r){PO(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Rt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var X0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Qp=function(){return Math.random().toString(36).substring(7).split("").join(".")},jh={INIT:"@@redux/INIT"+Qp(),REPLACE:"@@redux/REPLACE"+Qp(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Qp()}};function OO(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function J1(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Rt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Rt(1));return n(J1)(t,e)}if(typeof t!="function")throw new Error(Rt(2));var i=t,s=e,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(Rt(3));return s}function h(g){if(typeof g!="function")throw new Error(Rt(4));if(u)throw new Error(Rt(5));var _=!0;return l(),a.push(g),function(){if(_){if(u)throw new Error(Rt(6));_=!1,l();var m=a.indexOf(g);a.splice(m,1),o=null}}}function d(g){if(!OO(g))throw new Error(Rt(7));if(typeof g.type>"u")throw new Error(Rt(8));if(u)throw new Error(Rt(9));try{u=!0,s=i(s,g)}finally{u=!1}for(var _=o=a,y=0;y<_.length;y++){var m=_[y];m()}return g}function f(g){if(typeof g!="function")throw new Error(Rt(10));i=g,d({type:jh.REPLACE})}function p(){var g,_=h;return g={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(Rt(11));function v(){m.next&&m.next(c())}v();var w=_(v);return{unsubscribe:w}}},g[X0]=function(){return this},g}return d({type:jh.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:f},r[X0]=p,r}var LO=J1;function MO(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:jh.INIT});if(typeof r>"u")throw new Error(Rt(12));if(typeof n(void 0,{type:jh.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Rt(13))})}function $O(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{MO(n)}catch(a){o=a}return function(u,l){if(u===void 0&&(u={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var f=s[d],p=n[f],g=u[f],_=p(g,l);if(typeof _>"u")throw l&&l.type,new Error(Rt(14));h[f]=_,c=c||_!==g}return c=c||s.length!==Object.keys(u).length,c?h:u}}function FO(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function UO(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Rt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(u){return u(o)});return s=FO.apply(void 0,a)(i.dispatch),Y0(Y0({},i),{},{dispatch:s})}}}function Z1(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var ek=Z1();ek.withExtraArgument=Z1;const BO=ek;function Sv(t){return t==null}function Iv(t){throw new Error("Argument "+t+" is empty.")}function tk(t){return typeof t=="function"&&"getType"in t}function VO(t){throw new Error("Argument "+t+' is invalid, it should be an action-creator instance from "typesafe-actions"')}function nk(t){return typeof t=="string"||typeof t=="symbol"}function rk(t){return!nk(t)}function ik(t){throw new Error("Argument "+t+" is invalid, it should be an action type of type: string | symbol")}function jO(t,e){return Sv(t)&&Iv(1),rk(t)&&ik(1),Object.assign(function(){var n=e!=null?e.apply(void 0,arguments):void 0;return Object.assign({type:t},n)},{getType:function(){return t},toString:function(){return t}})}function Mr(t,e,n){return Sv(t)&&Iv(1),rk(t)&&ik(1),function(){return jO(t,function(){var r=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1];return e==null&&n==null||(r=e!=null?e.apply(void 0,arguments):void 0,i=n!=null?n.apply(void 0,arguments):void 0),Object.assign({},r!==void 0&&{payload:r},{},i!==void 0&&{meta:i})})}}function sk(t,e,n,r){return function(){var i=[t,e,n,r].map(function(s,o){return Array.isArray(s)?Mr(s[0],s[1],s[2])():typeof s=="string"||typeof s=="symbol"?Mr(s)():void(o<3&&function(a){throw new Error("Argument "+a+' is invalid, it should be an action type of "string | symbol" or a tuple of "[string | symbol, Function, Function?]"')}(o))});return{request:i[0],success:i[1],failure:i[2],cancel:i[3]}}}function zO(t){return Sv(t)&&Iv(1),tk(t)||VO(1),t.getType()}function Ol(t,e){e===void 0&&(e={});var n=Object.assign({},e),r=function(i,s){var o=Array.isArray(i)?i:[i],a={};return o.map(function(u,l){return tk(u)?zO(u):nk(u)?u:function(c){throw new Error("Argument "+c+' is invalid, it should be an action-creator instance from "typesafe-actions" or action type of type: string | symbol')}(l+1)}).forEach(function(u){return a[u]=s}),Ol(t,Object.assign({},n,{},a))};return Object.assign(function(i,s){if(i===void 0&&(i=t),n.hasOwnProperty(s.type)){var o=n[s.type];if(typeof o!="function")throw Error('Reducer under "'+s.type+'" key is not a valid reducer');return o(i,s)}return i},{handlers:Object.assign({},n),handleAction:r,handleType:r})}function ok(t,e){return function(){return t.apply(e,arguments)}}const{toString:ak}=Object.prototype,{getPrototypeOf:Tv}=Object,kv=(t=>e=>{const n=ak.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jr=t=>(t=t.toLowerCase(),e=>kv(e)===t),af=t=>e=>typeof e===t,{isArray:fa}=Array,tl=af("undefined");function qO(t){return t!==null&&!tl(t)&&t.constructor!==null&&!tl(t.constructor)&&ki(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const uk=jr("ArrayBuffer");function HO(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&uk(t.buffer),e}const WO=af("string"),ki=af("function"),lk=af("number"),bv=t=>t!==null&&typeof t=="object",GO=t=>t===!0||t===!1,ih=t=>{if(kv(t)!=="object")return!1;const e=Tv(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},KO=jr("Date"),QO=jr("File"),YO=jr("Blob"),XO=jr("FileList"),JO=t=>bv(t)&&ki(t.pipe),ZO=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||ak.call(t)===e||ki(t.toString)&&t.toString()===e)},eL=jr("URLSearchParams"),tL=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ll(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),fa(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function ck(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const hk=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),dk=t=>!tl(t)&&t!==hk;function bg(){const{caseless:t}=dk(this)&&this||{},e={},n=(r,i)=>{const s=t&&ck(e,i)||i;ih(e[s])&&ih(r)?e[s]=bg(e[s],r):ih(r)?e[s]=bg({},r):fa(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ll(arguments[r],n);return e}const nL=(t,e,n,{allOwnKeys:r}={})=>(Ll(e,(i,s)=>{n&&ki(i)?t[s]=ok(i,n):t[s]=i},{allOwnKeys:r}),t),rL=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),iL=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},sL=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Tv(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},oL=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},aL=t=>{if(!t)return null;if(fa(t))return t;let e=t.length;if(!lk(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},uL=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Tv(Uint8Array)),lL=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},cL=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},hL=jr("HTMLFormElement"),dL=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),J0=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),fL=jr("RegExp"),fk=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ll(n,(i,s)=>{e(i,s,t)!==!1&&(r[s]=i)}),Object.defineProperties(t,r)},pL=t=>{fk(t,(e,n)=>{if(ki(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(ki(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},mL=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return fa(t)?r(t):r(String(t).split(e)),n},gL=()=>{},yL=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Yp="abcdefghijklmnopqrstuvwxyz",Z0="0123456789",pk={DIGIT:Z0,ALPHA:Yp,ALPHA_DIGIT:Yp+Yp.toUpperCase()+Z0},vL=(t=16,e=pk.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function wL(t){return!!(t&&ki(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const _L=t=>{const e=new Array(10),n=(r,i)=>{if(bv(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=fa(r)?[]:{};return Ll(r,(o,a)=>{const u=n(o,i+1);!tl(u)&&(s[a]=u)}),e[i]=void 0,s}}return r};return n(t,0)},k={isArray:fa,isArrayBuffer:uk,isBuffer:qO,isFormData:ZO,isArrayBufferView:HO,isString:WO,isNumber:lk,isBoolean:GO,isObject:bv,isPlainObject:ih,isUndefined:tl,isDate:KO,isFile:QO,isBlob:YO,isRegExp:fL,isFunction:ki,isStream:JO,isURLSearchParams:eL,isTypedArray:uL,isFileList:XO,forEach:Ll,merge:bg,extend:nL,trim:tL,stripBOM:rL,inherits:iL,toFlatObject:sL,kindOf:kv,kindOfTest:jr,endsWith:oL,toArray:aL,forEachEntry:lL,matchAll:cL,isHTMLForm:hL,hasOwnProperty:J0,hasOwnProp:J0,reduceDescriptors:fk,freezeMethods:pL,toObjectSet:mL,toCamelCase:dL,noop:gL,toFiniteNumber:yL,findKey:ck,global:hk,isContextDefined:dk,ALPHABET:pk,generateString:vL,isSpecCompliantForm:wL,toJSONObject:_L};function he(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}k.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const mk=he.prototype,gk={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{gk[t]={value:t}});Object.defineProperties(he,gk);Object.defineProperty(mk,"isAxiosError",{value:!0});he.from=(t,e,n,r,i,s)=>{const o=Object.create(mk);return k.toFlatObject(t,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),he.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const EL=null;function Cg(t){return k.isPlainObject(t)||k.isArray(t)}function yk(t){return k.endsWith(t,"[]")?t.slice(0,-2):t}function eE(t,e,n){return t?t.concat(e).map(function(i,s){return i=yk(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function SL(t){return k.isArray(t)&&!t.some(Cg)}const IL=k.toFlatObject(k,{},null,function(e){return/^is[A-Z]/.test(e)});function uf(t,e,n){if(!k.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,_){return!k.isUndefined(_[g])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(e);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(k.isDate(p))return p.toISOString();if(!u&&k.isBlob(p))throw new he("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(p)||k.isTypedArray(p)?u&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,g,_){let y=p;if(p&&!_&&typeof p=="object"){if(k.endsWith(g,"{}"))g=r?g:g.slice(0,-2),p=JSON.stringify(p);else if(k.isArray(p)&&SL(p)||(k.isFileList(p)||k.endsWith(g,"[]"))&&(y=k.toArray(p)))return g=yk(g),y.forEach(function(v,w){!(k.isUndefined(v)||v===null)&&e.append(o===!0?eE([g],w,s):o===null?g:g+"[]",l(v))}),!1}return Cg(p)?!0:(e.append(eE(_,g,s),l(p)),!1)}const h=[],d=Object.assign(IL,{defaultVisitor:c,convertValue:l,isVisitable:Cg});function f(p,g){if(!k.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+g.join("."));h.push(p),k.forEach(p,function(y,m){(!(k.isUndefined(y)||y===null)&&i.call(e,y,k.isString(m)?m.trim():m,g,d))===!0&&f(y,g?g.concat(m):[m])}),h.pop()}}if(!k.isObject(t))throw new TypeError("data must be an object");return f(t),e}function tE(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Cv(t,e){this._pairs=[],t&&uf(t,this,e)}const vk=Cv.prototype;vk.append=function(e,n){this._pairs.push([e,n])};vk.toString=function(e){const n=e?function(r){return e.call(this,r,tE)}:tE;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function TL(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function wk(t,e,n){if(!e)return t;const r=n&&n.encode||TL,i=n&&n.serialize;let s;if(i?s=i(e,n):s=k.isURLSearchParams(e)?e.toString():new Cv(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class kL{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){k.forEach(this.handlers,function(r){r!==null&&e(r)})}}const nE=kL,_k={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bL=typeof URLSearchParams<"u"?URLSearchParams:Cv,CL=FormData,RL=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),AL=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Jn={isBrowser:!0,classes:{URLSearchParams:bL,FormData:CL,Blob},isStandardBrowserEnv:RL,isStandardBrowserWebWorkerEnv:AL,protocols:["http","https","file","blob","url","data"]};function xL(t,e){return uf(t,new Jn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Jn.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function NL(t){return k.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function DL(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Ek(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),u=s>=n.length;return o=!o&&k.isArray(i)?i.length:o,u?(k.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!k.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&k.isArray(i[o])&&(i[o]=DL(i[o])),!a)}if(k.isFormData(t)&&k.isFunction(t.entries)){const n={};return k.forEachEntry(t,(r,i)=>{e(NL(r),i,n,0)}),n}return null}const PL={"Content-Type":void 0};function OL(t,e,n){if(k.isString(t))try{return(e||JSON.parse)(t),k.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const lf={transitional:_k,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=k.isObject(e);if(s&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return i&&i?JSON.stringify(Ek(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return xL(e,this.formSerializer).toString();if((a=k.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return uf(a?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),OL(e)):e}],transformResponse:[function(e){const n=this.transitional||lf.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&k.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?he.from(a,he.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jn.classes.FormData,Blob:Jn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};k.forEach(["delete","get","head"],function(e){lf.headers[e]={}});k.forEach(["post","put","patch"],function(e){lf.headers[e]=k.merge(PL)});const Rv=lf,LL=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ML=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&LL[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},rE=Symbol("internals");function qa(t){return t&&String(t).trim().toLowerCase()}function sh(t){return t===!1||t==null?t:k.isArray(t)?t.map(sh):String(t)}function $L(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}function FL(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function Xp(t,e,n,r){if(k.isFunction(r))return r.call(this,e,n);if(k.isString(e)){if(k.isString(r))return e.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(e)}}function UL(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function BL(t,e){const n=k.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class cf{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,u,l){const c=qa(u);if(!c)throw new Error("header name must be a non-empty string");const h=k.findKey(i,c);(!h||i[h]===void 0||l===!0||l===void 0&&i[h]!==!1)&&(i[h||u]=sh(a))}const o=(a,u)=>k.forEach(a,(l,c)=>s(l,c,u));return k.isPlainObject(e)||e instanceof this.constructor?o(e,n):k.isString(e)&&(e=e.trim())&&!FL(e)?o(ML(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=qa(e),e){const r=k.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return $L(i);if(k.isFunction(n))return n.call(this,i,r);if(k.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=qa(e),e){const r=k.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Xp(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=qa(o),o){const a=k.findKey(r,o);a&&(!n||Xp(r,r[a],a,n))&&(delete r[a],i=!0)}}return k.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Xp(this,this[s],s,e))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return k.forEach(this,(i,s)=>{const o=k.findKey(r,s);if(o){n[o]=sh(i),delete n[s];return}const a=e?UL(s):String(s).trim();a!==s&&delete n[s],n[a]=sh(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return k.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[rE]=this[rE]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=qa(o);r[a]||(BL(i,o),r[a]=!0)}return k.isArray(e)?e.forEach(s):s(e),this}}cf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.freezeMethods(cf.prototype);k.freezeMethods(cf);const Cr=cf;function Jp(t,e){const n=this||Rv,r=e||n,i=Cr.from(r.headers);let s=r.data;return k.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Sk(t){return!!(t&&t.__CANCEL__)}function Ml(t,e,n){he.call(this,t??"canceled",he.ERR_CANCELED,e,n),this.name="CanceledError"}k.inherits(Ml,he,{__CANCEL__:!0});function VL(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new he("Request failed with status code "+n.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const jL=Jn.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const u=[];u.push(n+"="+encodeURIComponent(r)),k.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),k.isString(s)&&u.push("path="+s),k.isString(o)&&u.push("domain="+o),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function zL(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function qL(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Ik(t,e){return t&&!zL(e)?qL(t,e):e}const HL=Jn.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=k.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function WL(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function GL(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const l=Date.now(),c=r[s];o||(o=l),n[i]=u,r[i]=l;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),l-o<e)return;const f=c&&l-c;return f?Math.round(d*1e3/f):void 0}}function iE(t,e){let n=0;const r=GL(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,u=r(a),l=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&l?(o-s)/u:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const KL=typeof XMLHttpRequest<"u",QL=KL&&function(t){return new Promise(function(n,r){let i=t.data;const s=Cr.from(t.headers).normalize(),o=t.responseType;let a;function u(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}k.isFormData(i)&&(Jn.isStandardBrowserEnv||Jn.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const f=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+p))}const c=Ik(t.baseURL,t.url);l.open(t.method.toUpperCase(),wk(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function h(){if(!l)return;const f=Cr.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),g={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:t,request:l};VL(function(y){n(y),u()},function(y){r(y),u()},g),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){l&&(r(new he("Request aborted",he.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new he("Network Error",he.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const g=t.transitional||_k;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),r(new he(p,g.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,t,l)),l=null},Jn.isStandardBrowserEnv){const f=(t.withCredentials||HL(c))&&t.xsrfCookieName&&jL.read(t.xsrfCookieName);f&&s.set(t.xsrfHeaderName,f)}i===void 0&&s.setContentType(null),"setRequestHeader"in l&&k.forEach(s.toJSON(),function(p,g){l.setRequestHeader(g,p)}),k.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",iE(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",iE(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=f=>{l&&(r(!f||f.type?new Ml(null,t,l):f),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=WL(c);if(d&&Jn.protocols.indexOf(d)===-1){r(new he("Unsupported protocol "+d+":",he.ERR_BAD_REQUEST,t));return}l.send(i||null)})},oh={http:EL,xhr:QL};k.forEach(oh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const YL={getAdapter:t=>{t=k.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=k.isString(n)?oh[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new he(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(k.hasOwnProp(oh,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!k.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:oh};function Zp(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ml(null,t)}function sE(t){return Zp(t),t.headers=Cr.from(t.headers),t.data=Jp.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),YL.getAdapter(t.adapter||Rv.adapter)(t).then(function(r){return Zp(t),r.data=Jp.call(t,t.transformResponse,r),r.headers=Cr.from(r.headers),r},function(r){return Sk(r)||(Zp(t),r&&r.response&&(r.response.data=Jp.call(t,t.transformResponse,r.response),r.response.headers=Cr.from(r.response.headers))),Promise.reject(r)})}const oE=t=>t instanceof Cr?t.toJSON():t;function Go(t,e){e=e||{};const n={};function r(l,c,h){return k.isPlainObject(l)&&k.isPlainObject(c)?k.merge.call({caseless:h},l,c):k.isPlainObject(c)?k.merge({},c):k.isArray(c)?c.slice():c}function i(l,c,h){if(k.isUndefined(c)){if(!k.isUndefined(l))return r(void 0,l,h)}else return r(l,c,h)}function s(l,c){if(!k.isUndefined(c))return r(void 0,c)}function o(l,c){if(k.isUndefined(c)){if(!k.isUndefined(l))return r(void 0,l)}else return r(void 0,c)}function a(l,c,h){if(h in e)return r(l,c);if(h in t)return r(void 0,l)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,c)=>i(oE(l),oE(c),!0)};return k.forEach(Object.keys(t).concat(Object.keys(e)),function(c){const h=u[c]||i,d=h(t[c],e[c],c);k.isUndefined(d)&&h!==a||(n[c]=d)}),n}const Tk="1.3.2",Av={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Av[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const aE={};Av.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Tk+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new he(i(o," has been removed"+(n?" in "+n:"")),he.ERR_DEPRECATED);return n&&!aE[o]&&(aE[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function XL(t,e,n){if(typeof t!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],u=a===void 0||o(a,s,t);if(u!==!0)throw new he("option "+s+" must be "+u,he.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new he("Unknown option "+s,he.ERR_BAD_OPTION)}}const Rg={assertOptions:XL,validators:Av},Xr=Rg.validators;class zh{constructor(e){this.defaults=e,this.interceptors={request:new nE,response:new nE}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Go(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Rg.assertOptions(r,{silentJSONParsing:Xr.transitional(Xr.boolean),forcedJSONParsing:Xr.transitional(Xr.boolean),clarifyTimeoutError:Xr.transitional(Xr.boolean)},!1),i!==void 0&&Rg.assertOptions(i,{encode:Xr.function,serialize:Xr.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&k.merge(s.common,s[n.method]),o&&k.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=Cr.concat(o,s);const a=[];let u=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(u=u&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let c,h=0,d;if(!u){const p=[sE.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,l),d=p.length,c=Promise.resolve(n);h<d;)c=c.then(p[h++],p[h++]);return c}d=a.length;let f=n;for(h=0;h<d;){const p=a[h++],g=a[h++];try{f=p(f)}catch(_){g.call(this,_);break}}try{c=sE.call(this,f)}catch(p){return Promise.reject(p)}for(h=0,d=l.length;h<d;)c=c.then(l[h++],l[h++]);return c}getUri(e){e=Go(this.defaults,e);const n=Ik(e.baseURL,e.url);return wk(n,e.params,e.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(e){zh.prototype[e]=function(n,r){return this.request(Go(r||{},{method:e,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Go(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}zh.prototype[e]=n(),zh.prototype[e+"Form"]=n(!0)});const ah=zh;class xv{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Ml(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new xv(function(i){e=i}),cancel:e}}}const JL=xv;function ZL(t){return function(n){return t.apply(null,n)}}function eM(t){return k.isObject(t)&&t.isAxiosError===!0}const Ag={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ag).forEach(([t,e])=>{Ag[e]=t});const tM=Ag;function kk(t){const e=new ah(t),n=ok(ah.prototype.request,e);return k.extend(n,ah.prototype,e,{allOwnKeys:!0}),k.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return kk(Go(t,i))},n}const et=kk(Rv);et.Axios=ah;et.CanceledError=Ml;et.CancelToken=JL;et.isCancel=Sk;et.VERSION=Tk;et.toFormData=uf;et.AxiosError=he;et.Cancel=et.CanceledError;et.all=function(e){return Promise.all(e)};et.spread=ZL;et.isAxiosError=eM;et.mergeConfig=Go;et.AxiosHeaders=Cr;et.formToJSON=t=>Ek(k.isHTMLForm(t)?new FormData(t):t);et.HttpStatusCode=tM;et.default=et;const nM=et;async function rM(t){return(await nM.get(`https://api.github.com/user/${t}`)).data}const yn={initial:t=>({loading:!0,data:t||null,error:null}),loading:t=>({loading:!0,data:t||null,error:null}),success:t=>({loading:!1,data:t,error:null}),error:t=>({loading:!1,data:null,error:t}),null:t=>({loading:!1,data:t||null,error:null})},bk="github/GET_GITHUB_PROFILE",Ck="github/GET_GITHUB_PROFILE_SUCCESS",Rk="github/GET_GITHUB_PROFILE_ERROR",Ak="github/GET_GITHUB_PROFILE_NULL",iM=sk(bk,Ck,Rk,Ak)();function SG(t){return async(e,n)=>{const{request:r,success:i,failure:s,cancel:o}=iM;if(e(r()),n().authReducer.auth.data)try{const a=await rM(t);e(i(a))}catch(a){e(s(a))}else e(o())}}const sM={github:yn.initial()},oM=Ol(sM,{[bk]:t=>({...t,github:yn.loading()}),[Ck]:(t,e)=>({...t,github:yn.success(e.payload)}),[Rk]:(t,e)=>({...t,github:yn.error(e.payload)}),[Ak]:t=>({...t,github:yn.null()})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xk(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const p=l<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},uM=function(t){const e=xk(t);return Nk.encodeByteArray(e,!0)},qh=function(t){return uM(t).replace(/\./g,"")},Dk=function(t){try{return Nk.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Hh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lM(n)||(t[n]=Hh(t[n],e[n]));return t}function lM(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=()=>cM().__FIREBASE_DEFAULTS__,dM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dk(t[1]);return e&&JSON.parse(e)},Nv=()=>{try{return hM()||dM()||fM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pM=()=>{var t;return(t=Nv())===null||t===void 0?void 0:t.config},mM=t=>{var e;return(e=Nv())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[qh(JSON.stringify(n)),qh(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yM(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function hf(){var t;const e=(t=Nv())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vM(){return typeof self=="object"&&self.self===self}function Ok(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lk(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wM(){return!hf()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nl(){try{return typeof indexedDB=="object"}catch{return!1}}function _M(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EM,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?SM(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nt(i,a,r)}}function SM(t,e){return t.replace(IM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IM=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function TM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xg(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(lE(s)&&lE(o)){if(!xg(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function lE(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function uu(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Mk(t,e){const n=new kM(t,e);return n.subscribe.bind(n)}class kM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=em),i.error===void 0&&(i.error=em),i.complete===void 0&&(i.complete=em);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function em(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gM;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AM(e))try{this.getOrInitializeService({instanceIdentifier:Zi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zi){return this.instances.has(e)}getOptions(e=Zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zi){return this.component?this.component.multipleInstances?e:Zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RM(t){return t===Zi?void 0:t}function AM(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=[];var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const $k={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},NM=ce.INFO,DM={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},PM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class df{constructor(e){this.name=e,this._logLevel=NM,this._logHandler=PM,this._userLogHandler=null,Pv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$k[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}function OM(t){Pv.forEach(e=>{e.setLogLevel(t)})}function LM(t,e){for(const n of Pv){let r=null;e&&e.level&&(r=$k[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r??i.logLevel)&&t({level:ce[s].toLowerCase(),message:a,args:o,type:i.name})}}}const MM=(t,e)=>e.some(n=>t instanceof n);let cE,hE;function $M(){return cE||(cE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FM(){return hE||(hE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fk=new WeakMap,Ng=new WeakMap,Uk=new WeakMap,tm=new WeakMap,Ov=new WeakMap;function UM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_i(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fk.set(n,t)}).catch(()=>{}),Ov.set(e,t),e}function BM(t){if(Ng.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ng.set(t,e)}let Dg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ng.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uk.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _i(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VM(t){Dg=t(Dg)}function jM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nm(this),e,...n);return Uk.set(r,e.sort?e.sort():[e]),_i(r)}:FM().includes(t)?function(...e){return t.apply(nm(this),e),_i(Fk.get(this))}:function(...e){return _i(t.apply(nm(this),e))}}function zM(t){return typeof t=="function"?jM(t):(t instanceof IDBTransaction&&BM(t),MM(t,$M())?new Proxy(t,Dg):t)}function _i(t){if(t instanceof IDBRequest)return UM(t);if(tm.has(t))return tm.get(t);const e=zM(t);return e!==t&&(tm.set(t,e),Ov.set(e,t)),e}const nm=t=>Ov.get(t);function qM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_i(o);return r&&o.addEventListener("upgradeneeded",u=>{r(_i(o.result),u.oldVersion,u.newVersion,_i(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const HM=["get","getKey","getAll","getAllKeys","count"],WM=["put","add","delete","clear"],rm=new Map;function dE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rm.get(e))return rm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HM.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return rm.set(e,s),s}VM(t=>({...t,get:(e,n,r)=>dE(e,n)||t.get(e,n,r),has:(e,n)=>!!dE(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pg="@firebase/app",fE="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new df("@firebase/app"),QM="@firebase/app-compat",YM="@firebase/analytics-compat",XM="@firebase/analytics",JM="@firebase/app-check-compat",ZM="@firebase/app-check",e$="@firebase/auth",t$="@firebase/auth-compat",n$="@firebase/database",r$="@firebase/database-compat",i$="@firebase/functions",s$="@firebase/functions-compat",o$="@firebase/installations",a$="@firebase/installations-compat",u$="@firebase/messaging",l$="@firebase/messaging-compat",c$="@firebase/performance",h$="@firebase/performance-compat",d$="@firebase/remote-config",f$="@firebase/remote-config-compat",p$="@firebase/storage",m$="@firebase/storage-compat",g$="@firebase/firestore",y$="@firebase/firestore-compat",v$="firebase",w$="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="[DEFAULT]",_$={[Pg]:"fire-core",[QM]:"fire-core-compat",[XM]:"fire-analytics",[YM]:"fire-analytics-compat",[ZM]:"fire-app-check",[JM]:"fire-app-check-compat",[e$]:"fire-auth",[t$]:"fire-auth-compat",[n$]:"fire-rtdb",[r$]:"fire-rtdb-compat",[i$]:"fire-fn",[s$]:"fire-fn-compat",[o$]:"fire-iid",[a$]:"fire-iid-compat",[u$]:"fire-fcm",[l$]:"fire-fcm-compat",[c$]:"fire-perf",[h$]:"fire-perf-compat",[d$]:"fire-rc",[f$]:"fire-rc-compat",[p$]:"fire-gcs",[m$]:"fire-gcs-compat",[g$]:"fire-fst",[y$]:"fire-fst-compat","fire-js":"fire-js",[v$]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Map,rl=new Map;function Wh(t,e){try{t.container.addComponent(e)}catch(n){Rs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bk(t,e){t.container.addOrOverwriteComponent(e)}function $r(t){const e=t.name;if(rl.has(e))return Rs.debug(`There were multiple attempts to register component ${e}.`),!1;rl.set(e,t);for(const n of Ci.values())Wh(n,t);return!0}function Vk(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function E$(t,e,n=bi){Vk(t,e).clearInstance(n)}function S$(){rl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I$={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rr=new Hs("app","Firebase",I$);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T$=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=w$;function Lv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=pM()),!n)throw Rr.create("no-options");const s=Ci.get(i);if(s){if(xg(n,s.options)&&xg(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new xM(i);for(const u of rl.values())o.addComponent(u);const a=new T$(n,r,o);return Ci.set(i,a),a}function k$(t=bi){const e=Ci.get(t);if(!e&&t===bi)return Lv();if(!e)throw Rr.create("no-app",{appName:t});return e}function b$(){return Array.from(Ci.values())}async function jk(t){const e=t.name;Ci.has(e)&&(Ci.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Sn(t,e,n){var r;let i=(r=_$[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rs.warn(a.join(" "));return}$r(new kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function zk(t,e){if(t!==null&&typeof t!="function")throw Rr.create("invalid-log-argument");LM(t,e)}function qk(t){OM(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C$="firebase-heartbeat-database",R$=1,il="firebase-heartbeat-store";let im=null;function Hk(){return im||(im=qM(C$,R$,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(il)}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),im}async function A$(t){try{return(await Hk()).transaction(il).objectStore(il).get(Wk(t))}catch(e){if(e instanceof Nt)Rs.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rs.warn(n.message)}}}async function pE(t,e){try{const r=(await Hk()).transaction(il,"readwrite");return await r.objectStore(il).put(e,Wk(t)),r.done}catch(n){if(n instanceof Nt)Rs.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rs.warn(r.message)}}}function Wk(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x$=1024,N$=30*24*60*60*1e3;class D${constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O$(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=mE();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=N$}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mE(),{heartbeatsToSend:n,unsentEntries:r}=P$(this._heartbeatsCache.heartbeats),i=qh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function mE(){return new Date().toISOString().substring(0,10)}function P$(t,e=x$){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class O${constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nl()?_M().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await A$(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gE(t){return qh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L$(t){$r(new kn("platform-logger",e=>new GM(e),"PRIVATE")),$r(new kn("heartbeat",e=>new D$(e),"PRIVATE")),Sn(Pg,fE,t),Sn(Pg,fE,"esm2017"),Sn("fire-js","")}L$("");const M$=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Nt,SDK_VERSION:Ui,_DEFAULT_ENTRY_NAME:bi,_addComponent:Wh,_addOrOverwriteComponent:Bk,_apps:Ci,_clearComponents:S$,_components:rl,_getProvider:Vk,_registerComponent:$r,_removeServiceInstance:E$,deleteApp:jk,getApp:k$,getApps:b$,initializeApp:Lv,onLog:zk,registerVersion:Sn,setLogLevel:qk},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(e,n){this._delegate=e,this.firebase=n,Wh(e,new kn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),jk(this._delegate)))}_getService(e,n=bi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=bi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Wh(this._delegate,e)}_addOrOverwriteComponent(e){Bk(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F$={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},yE=new Hs("app-compat","Firebase",F$);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U$(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Sn,setLogLevel:qk,onLog:zk,apps:null,SDK_VERSION:Ui,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:M$}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||bi,!uE(e,l))throw yE.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=Lv(l,c);if(uE(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if($r(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw yE.create("invalid-app-argument",{appName:c});return f[h]()};l.serviceProps!==void 0&&Hh(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(){const t=U$($$);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Gk,extendNamespace:e,createSubscribe:Mk,ErrorFactory:Hs,deepExtend:Hh});function e(n){Hh(t,n)}return t}const B$=Gk();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=new df("@firebase/app-compat"),V$="@firebase/app-compat",j$="0.2.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z$(t){Sn(V$,j$,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(vM()&&self.firebase!==void 0){vE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&vE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Bn=B$;z$();var q$="firebase",H$="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bn.registerVersion(q$,H$,"app-compat");function Mv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ha={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ro={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W$(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Kk(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G$=W$,K$=Kk,Qk=new Hs("auth","Firebase",Kk());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new df("@firebase/auth");function uh(t,...e){wE.logLevel<=ce.ERROR&&wE.error(`Auth (${Ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,...e){throw $v(t,...e)}function wt(t,...e){return $v(t,...e)}function Yk(t,e,n){const r=Object.assign(Object.assign({},K$()),{[e]:n});return new Hs("auth","Firebase",r).create(e,{appName:t.name})}function ma(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(t,"argument-error"),Yk(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $v(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qk.create(t,...e)}function D(t,e,...n){if(!t)throw $v(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uh(e),new Error(e)}function Un(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new Map;function an(t){Un(t instanceof Function,"Expected a class definition");let e=_E.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_E.set(t,e),e)}function Q$(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fv(){return EE()==="http:"||EE()==="https:"}function EE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y$(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fv()||Ok()||"connection"in navigator)?navigator.onLine:!0}function X$(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=yM()||Dv()}get(){return Y$()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z$=new $l(3e4,6e4);function nt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ht(t,e,n,r,i={}){return Jk(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=pa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Xk.fetch()(Zk(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Jk(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},J$),e);try{const i=new eF(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw lu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw lu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw lu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw lu(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Yk(t,c,l);St(t,c)}}catch(i){if(i instanceof Nt)throw i;St(t,"network-request-failed")}}async function zr(t,e,n,r,i={}){const s=await ht(t,e,n,r,i);return"mfaPendingCredential"in s&&St(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Zk(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Uv(t.config,i):`${t.config.apiScheme}://${i}`}class eF{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),Z$.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tF(t,e){return ht(t,"POST","/v1/accounts:delete",e)}async function nF(t,e){return ht(t,"POST","/v1/accounts:update",e)}async function rF(t,e){return ht(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iF(t,e=!1){const n=j(t),r=await n.getIdToken(e),i=ff(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Tu(sm(i.auth_time)),issuedAtTime:Tu(sm(i.iat)),expirationTime:Tu(sm(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sm(t){return Number(t)*1e3}function ff(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uh("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dk(n);return i?JSON.parse(i):(uh("Failed to decode base64 JWT payload"),null)}catch(i){return uh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sF(t){const e=ff(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&oF(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oF({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tu(this.lastLoginAt),this.creationTime=Tu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fr(t,rF(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cF(s.providerUserInfo):[],a=lF(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new eb(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function uF(t){const e=j(t);await ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lF(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cF(t){return t.map(e=>{var{providerId:n}=e,r=Mv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hF(t,e){const n=await Jk(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Zk(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xk.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sF(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hF(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new al;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new al,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ys{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Mv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new eb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fr(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iF(this,e)}reload(){return uF(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ys(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fr(this,tF(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:R,stsTokenManager:P}=n;D(v&&P,e,"internal-error");const $=al.fromJSON(this.name,P);D(typeof v=="string",e,"internal-error"),Jr(h,e.name),Jr(d,e.name),D(typeof w=="boolean",e,"internal-error"),D(typeof b=="boolean",e,"internal-error"),Jr(f,e.name),Jr(p,e.name),Jr(g,e.name),Jr(_,e.name),Jr(y,e.name),Jr(m,e.name);const re=new ys({uid:v,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:$,createdAt:y,lastLoginAt:m});return R&&Array.isArray(R)&&(re.providerData=R.map(K=>Object.assign({},K))),_&&(re._redirectEventId=_),re}static async _fromIdTokenResponse(e,n,r=!1){const i=new al;i.updateFromServerResponse(n);const s=new ys({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ol(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tb.type="NONE";const Ko=tb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e,n){return`firebase:${t}:${e}:${n}`}class Do{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vs(this.userKey,i.apiKey,s),this.fullPersistenceKey=vs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ys._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Do(an(Ko),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||an(Ko);const o=vs(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=ys._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Do(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Do(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ib(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sb(e))return"Blackberry";if(ob(e))return"Webos";if(Bv(e))return"Safari";if((e.includes("chrome/")||rb(e))&&!e.includes("edge/"))return"Chrome";if(Fl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nb(t=Pe()){return/firefox\//i.test(t)}function Bv(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rb(t=Pe()){return/crios\//i.test(t)}function ib(t=Pe()){return/iemobile/i.test(t)}function Fl(t=Pe()){return/android/i.test(t)}function sb(t=Pe()){return/blackberry/i.test(t)}function ob(t=Pe()){return/webos/i.test(t)}function ga(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dF(t=Pe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function fF(t=Pe()){var e;return ga(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pF(){return Lk()&&document.documentMode===10}function ab(t=Pe()){return ga(t)||Fl(t)||ob(t)||sb(t)||/windows phone/i.test(t)||ib(t)}function mF(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t,e=[]){let n;switch(t){case"Browser":n=SE(Pe());break;case"Worker":n=`${SE(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ui}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new IE(this),this.idTokenSubscription=new IE(this),this.beforeStateQueue=new gF(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qk,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Do.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X$()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?j(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Do.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ub(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ut(t){return j(t)}class IE{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mk(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function vF(t,e,n){const r=ut(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=lb(e),{host:o,port:a}=wF(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_F()}function lb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wF(t){const e=lb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:TE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:TE(o)}}}function TE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _F(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(t,e){return ht(t,"POST","/v1/accounts:resetPassword",nt(t,e))}async function hb(t,e){return ht(t,"POST","/v1/accounts:update",e)}async function EF(t,e){return ht(t,"POST","/v1/accounts:update",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SF(t,e){return zr(t,"POST","/v1/accounts:signInWithPassword",nt(t,e))}async function pf(t,e){return ht(t,"POST","/v1/accounts:sendOobCode",nt(t,e))}async function IF(t,e){return pf(t,e)}async function TF(t,e){return pf(t,e)}async function kF(t,e){return pf(t,e)}async function bF(t,e){return pf(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CF(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",nt(t,e))}async function RF(t,e){return zr(t,"POST","/v1/accounts:signInWithEmailLink",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends ya{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ul(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ul(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return SF(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CF(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return hb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return RF(e,{idToken:n,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t,e){return zr(t,"POST","/v1/accounts:signInWithIdp",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AF="http://localhost";class ur extends ya{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Mv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}buildRequest(){const e={requestUri:AF,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xF(t,e){return ht(t,"POST","/v1/accounts:sendVerificationCode",nt(t,e))}async function NF(t,e){return zr(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,e))}async function DF(t,e){const n=await zr(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,e));if(n.temporaryProof)throw lu(t,"account-exists-with-different-credential",n);return n}const PF={USER_NOT_FOUND:"user-not-found"};async function OF(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return zr(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,n),PF)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends ya{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ws({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ws({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return NF(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return DF(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return OF(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ws({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LF(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MF(t){const e=Io(uu(t)).link,n=e?Io(uu(e)).deep_link_id:null,r=Io(uu(t)).deep_link_id;return(r?Io(uu(r)).link:null)||r||n||e||t}class mf{constructor(e){var n,r,i,s,o,a;const u=Io(uu(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=LF((i=u.mode)!==null&&i!==void 0?i:null);D(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MF(e);try{return new mf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.providerId=Bi.PROVIDER_ID}static credential(e,n){return ul._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=mf.parseLink(n);return D(r,"argument-error"),ul._fromEmailAndCode(e,r.code,r.tenantId)}}Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends qr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Po extends va{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return D("providerId"in n&&"signInMethod"in n,"argument-error"),ur._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),ur._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Po.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Po.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Po(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends va{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends va{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $F="http://localhost";class Qo extends ya{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Qo(r,s)}static _create(e,n){return new Qo(e,n)}buildRequest(){return{requestUri:$F,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FF="saml.";class Gh extends qr{constructor(e){D(e.startsWith(FF),"argument-error"),super(e)}static credentialFromResult(e){return Gh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Gh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Qo.fromJSON(e);return D(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Qo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends va{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e){return zr(t,"POST","/v1/accounts:signUp",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ys._fromIdTokenResponse(e,r,i),o=kE(r);return new bn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=kE(r);return new bn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function kE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UF(t){var e;const n=ut(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new bn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await db(n,{returnSecureToken:!0}),i=await bn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends Nt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kh(e,n,r,i)}}function fb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BF(t,e){const n=j(t);await gf(!0,n,e);const{providerUserInfo:r}=await nF(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=pb(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Vv(t,e,n=!1){const r=await Fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}async function gf(t,e,n){await ol(e);const r=pb(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";D(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Fr(t,fb(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=ff(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),bn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&St(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(t,e,n=!1){const r="signIn",i=await fb(t,r,e),s=await bn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function yf(t,e){return gb(ut(t),e)}async function yb(t,e){const n=j(t);return await gf(!1,n,e.providerId),Vv(n,e)}async function vb(t,e){return mb(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VF(t,e){return zr(t,"POST","/v1/accounts:signInWithCustomToken",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jF(t,e){const n=ut(t),r=await VF(n,{token:e,returnSecureToken:!0}),i=await bn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?jv._fromServerResponse(e,n):St(e,"internal-error")}}class jv extends vf{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new jv(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t,e,n){var r;D(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),D(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(D(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(D(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zF(t,e,n){const r=j(t),i={requestType:"PASSWORD_RESET",email:e};n&&wf(r,i,n),await TF(r,i)}async function qF(t,e,n){await cb(j(t),{oobCode:e,newPassword:n})}async function HF(t,e){await EF(j(t),{oobCode:e})}async function wb(t,e){const n=j(t),r=await cb(n,{oobCode:e}),i=r.requestType;switch(D(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,n,"internal-error");default:D(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=vf._fromServerResponse(ut(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function WF(t,e){const{data:n}=await wb(j(t),e);return n.email}async function GF(t,e,n){const r=ut(t),i=await db(r,{returnSecureToken:!0,email:e,password:n}),s=await bn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function KF(t,e,n){return yf(j(t),Bi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QF(t,e,n){const r=j(t),i={requestType:"EMAIL_SIGNIN",email:e};D(n.handleCodeInApp,r,"argument-error"),n&&wf(r,i,n),await kF(r,i)}function YF(t,e){const n=mf.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function XF(t,e,n){const r=j(t),i=Bi.credentialWithLink(e,n||sl());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),yf(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JF(t,e){return ht(t,"POST","/v1/accounts:createAuthUri",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZF(t,e){const n=Fv()?sl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await JF(j(t),r);return i||[]}async function eU(t,e){const n=j(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&wf(n.auth,i,e);const{email:s}=await IF(n.auth,i);s!==t.email&&await t.reload()}async function tU(t,e,n){const r=j(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&wf(r.auth,s,n);const{email:o}=await bF(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nU(t,e){return ht(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rU(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=j(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fr(r,nU(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function iU(t,e){return _b(j(t),e,null)}function sU(t,e){return _b(j(t),null,e)}async function _b(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Fr(t,hb(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oU(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=ff(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Oo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new aU(s,i);case"github.com":return new uU(s,i);case"google.com":return new lU(s,i);case"twitter.com":return new cU(s,i,t.screenName||null);case"custom":case"anonymous":return new Oo(s,null);default:return new Oo(s,r,i)}}class Oo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Eb extends Oo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class aU extends Oo{constructor(e,n){super(e,"facebook.com",n)}}class uU extends Eb{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class lU extends Oo{constructor(e,n){super(e,"google.com",n)}}class cU extends Eb{constructor(e,n,r){super(e,"twitter.com",n,r)}}function hU(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:oU(n)}class ls{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new ls("enroll",e,n)}static _fromMfaPendingCredential(e){return new ls("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ls._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ls._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ut(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>vf._fromServerResponse(r,a));D(i.mfaPendingCredential,r,"internal-error");const o=ls._fromMfaPendingCredential(i.mfaPendingCredential);return new zv(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await bn._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return D(n.user,r,"internal-error"),bn._forOperation(n.user,n.operationType,l);default:St(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function dU(t,e){var n;const r=j(t),i=e;return D(e.customData.operationType,r,"argument-error"),D((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),zv._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fU(t,e){return ht(t,"POST","/v2/accounts/mfaEnrollment:start",nt(t,e))}function pU(t,e){return ht(t,"POST","/v2/accounts/mfaEnrollment:finalize",nt(t,e))}function mU(t,e){return ht(t,"POST","/v2/accounts/mfaEnrollment:withdraw",nt(t,e))}class qv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>vf._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new qv(e)}async getSession(){return ls._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Fr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Fr(this.user,mU(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if((s==null?void 0:s.code)!=="auth/user-token-expired")throw s}}}const om=new WeakMap;function gU(t){const e=j(t);return om.has(e)||om.set(e,qv._fromUser(e)),om.get(e)}const Qh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qh,"1"),this.storage.removeItem(Qh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yU(){const t=Pe();return Bv(t)||ga(t)}const vU=1e3,wU=10;class Ib extends Sb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yU()&&mF(),this.fallbackToPolling=ab(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);pF()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ib.type="LOCAL";const Hv=Ib;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb extends Sb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tb.type="SESSION";const As=Tb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _U(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _f(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await _U(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_f.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Ul("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function SU(t){Je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function IU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TU(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kU(){return Wv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="firebaseLocalStorageDb",bU=1,Yh="firebaseLocalStorage",bb="fbase_key";class Bl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ef(t,e){return t.transaction([Yh],e?"readwrite":"readonly").objectStore(Yh)}function CU(){const t=indexedDB.deleteDatabase(kb);return new Bl(t).toPromise()}function Og(){const t=indexedDB.open(kb,bU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yh,{keyPath:bb})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yh)?e(r):(r.close(),await CU(),e(await Og()))})})}async function bE(t,e,n){const r=Ef(t,!0).put({[bb]:e,value:n});return new Bl(r).toPromise()}async function RU(t,e){const n=Ef(t,!1).get(e),r=await new Bl(n).toPromise();return r===void 0?null:r.value}function CE(t,e){const n=Ef(t,!0).delete(e);return new Bl(n).toPromise()}const AU=800,xU=3;class Cb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Og(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xU)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_f._getInstance(kU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IU(),!this.activeServiceWorker)return;this.sender=new EU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Og();return await bE(e,Qh,"1"),await CE(e,Qh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RU(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>CE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ef(i,!1).getAll();return new Bl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cb.type="LOCAL";const ll=Cb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NU(t,e){return ht(t,"POST","/v2/accounts/mfaSignIn:start",nt(t,e))}function DU(t,e){return ht(t,"POST","/v2/accounts/mfaSignIn:finalize",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PU(t){return(await ht(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OU().appendChild(r)})}function Ab(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LU=500,MU=6e4,Pc=1e12;class $U{constructor(e){this.auth=e,this.counter=Pc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new FU(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Pc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Pc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Pc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class FU{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=UU(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},MU)},LU))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function UU(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=Ab("rcb"),BU=new $l(3e4,6e4),VU="https://www.google.com/recaptcha/api.js?";class jU{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Je().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return D(zU(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Je().grecaptcha):new Promise((r,i)=>{const s=Je().setTimeout(()=>{i(wt(e,"network-request-failed"))},BU.get());Je()[am]=()=>{Je().clearTimeout(s),delete Je()[am];const a=Je().grecaptcha;if(!a){i(wt(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${VU}?${pa({onload:am,render:"explicit",hl:n})}`;Rb(o).catch(()=>{clearTimeout(s),i(wt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Je().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zU(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class qU{async load(e){return new $U(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="recaptcha",HU={theme:"light",type:"image"};let WU=class{constructor(e,n=Object.assign({},HU),r){this.parameters=n,this.type=xb,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ut(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new qU:new jU,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Je()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(Fv()&&!Wv(),this.auth,"internal-error"),await GU(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await PU(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function GU(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ws._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function KU(t,e,n){const r=ut(t),i=await Sf(r,e,j(n));return new Gv(i,s=>yf(r,s))}async function QU(t,e,n){const r=j(t);await gf(!1,r,"phone");const i=await Sf(r.auth,e,j(n));return new Gv(i,s=>yb(r,s))}async function YU(t,e,n){const r=j(t),i=await Sf(r.auth,e,j(n));return new Gv(i,s=>vb(r,s))}async function Sf(t,e,n){var r;const i=await n.verify();try{D(typeof i=="string",t,"argument-error"),D(n.type===xb,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return D(o.type==="enroll",t,"internal-error"),(await fU(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return D(a,t,"missing-multi-factor-info"),(await NU(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await xF(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function XU(t,e){await Vv(j(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir=class{constructor(e){this.providerId=ir.PROVIDER_ID,this.auth=ut(e)}verifyPhoneNumber(e,n){return Sf(this.auth,e,j(n))}static credential(e,n){return ws._fromVerification(e,n)}static credentialFromResult(e){const n=e;return ir.credentialFromTaggedObject(n)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ws._fromTokenResponse(n,r):null}};ir.PROVIDER_ID="phone";ir.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t,e){return e?an(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv extends ya{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JU(t){return gb(t.auth,new Kv(t),t.bypassAuthState)}function ZU(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),mb(n,new Kv(t),t.bypassAuthState)}async function e2(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Vv(n,new Kv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JU;case"linkViaPopup":case"linkViaRedirect":return e2;case"reauthViaPopup":case"reauthViaRedirect":return ZU;default:St(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=new $l(2e3,1e4);async function n2(t,e,n){const r=ut(t);ma(t,e,qr);const i=Ws(r,n);return new Ir(r,"signInViaPopup",e,i).executeNotNull()}async function r2(t,e,n){const r=j(t);ma(r.auth,e,qr);const i=Ws(r.auth,n);return new Ir(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function i2(t,e,n){const r=j(t);ma(r.auth,e,qr);const i=Ws(r.auth,n);return new Ir(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ir extends Nb{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=Ul();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,t2.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2="pendingRedirect",ku=new Map;class o2 extends Nb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ku.get(this.auth._key());if(!e){try{const r=await a2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ku.set(this.auth._key(),e)}return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function a2(t,e){const n=Pb(e),r=Db(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Qv(t,e){return Db(t)._set(Pb(e),"true")}function u2(){ku.clear()}function Yv(t,e){ku.set(t._key(),e)}function Db(t){return an(t._redirectPersistence)}function Pb(t){return vs(s2,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t,e,n){return c2(t,e,n)}async function c2(t,e,n){const r=ut(t);ma(t,e,qr),await r._initializationPromise;const i=Ws(r,n);return await Qv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function h2(t,e,n){return d2(t,e,n)}async function d2(t,e,n){const r=j(t);ma(r.auth,e,qr),await r.auth._initializationPromise;const i=Ws(r.auth,n);await Qv(i,r.auth);const s=await Ob(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function f2(t,e,n){return p2(t,e,n)}async function p2(t,e,n){const r=j(t);ma(r.auth,e,qr),await r.auth._initializationPromise;const i=Ws(r.auth,n);await gf(!1,r,e.providerId),await Qv(i,r.auth);const s=await Ob(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function m2(t,e){return await ut(t)._initializationPromise,If(t,e,!1)}async function If(t,e,n=!1){const r=ut(t),i=Ws(r,e),o=await new o2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Ob(t){const e=Ul(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=10*60*1e3;class Lb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mb(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g2&&this.cachedEventUids.clear(),this.cachedEventUids.has(RE(e))}saveEventToCache(e){this.cachedEventUids.add(RE(e)),this.lastProcessedEventTime=Date.now()}}function RE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function y2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(t,e={}){return ht(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w2=/^https?/;async function _2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $b(t);for(const n of e)try{if(E2(n))return}catch{}St(t,"unauthorized-domain")}function E2(t){const e=sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!w2.test(n))return!1;if(v2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=new $l(3e4,6e4);function AE(){const t=Je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I2(t){return new Promise((e,n)=>{var r,i,s;function o(){AE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{AE(),n(wt(t,"network-request-failed"))},timeout:S2.get()})}if(!((i=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Je().gapi)===null||s===void 0)&&s.load)o();else{const a=Ab("iframefcb");return Je()[a]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},Rb(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw lh=null,e})}let lh=null;function T2(t){return lh=lh||I2(t),lh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=new $l(5e3,15e3),b2="__/auth/iframe",C2="emulator/auth/iframe",R2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x2(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uv(e,C2):`https://${t.config.authDomain}/${b2}`,r={apiKey:e.apiKey,appName:t.name,v:Ui},i=A2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pa(r).slice(1)}`}async function N2(t){const e=await T2(t),n=Je().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:x2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),a=Je().setTimeout(()=>{s(o)},k2.get());function u(){Je().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P2=500,O2=600,L2="_blank",M2="http://localhost";class xE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $2(t,e,n,r=P2,i=O2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},D2),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Pe().toLowerCase();n&&(a=rb(l)?L2:n),nb(l)&&(e=e||M2,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(fF(l)&&a!=="_self")return F2(e||"",a),new xE(null);const h=window.open(e||"",a,c);D(h,t,"popup-blocked");try{h.focus()}catch{}return new xE(h)}function F2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2="__/auth/handler",B2="emulator/auth/handler";function Lg(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ui,eventId:i};if(e instanceof qr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TM(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof va){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${V2(t)}?${pa(a).slice(1)}`}function V2({config:t}){return t.emulator?Uv(t,B2):`https://${t.authDomain}/${U2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="webStorageSupport";class j2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=As,this._completeRedirectFn=If,this._overrideRedirectResult=Yv}async _openPopup(e,n,r,i){var s;Un((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Lg(e,n,r,sl(),i);return $2(e,o,Ul())}async _openRedirect(e,n,r,i){return await this._originValidation(e),SU(Lg(e,n,r,sl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await N2(e),r=new Lb(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(um,{type:um},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[um];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ab()||Bv()||ga()}}const z2=j2;class q2{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Zn("unexpected MultiFactorSessionType")}}}class Xv extends q2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xv(e)}_finalizeEnroll(e,n,r){return pU(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return DU(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Fb{constructor(){}static assertion(e){return Xv._fromCredential(e)}}Fb.FACTOR_ID="phone";var NE="@firebase/auth",DE="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function G2(t){$r(new kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ub(t)},c=new yF(a,u,l);return Q$(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$r(new kn("auth-internal",e=>{const n=ut(e.getProvider("auth").getImmediate());return(r=>new H2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(NE,DE,W2(t)),Sn(NE,DE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=5*60;mM("authIdTokenMaxAge");G2("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=2e3;async function Y2(t,e,n){var r;const{BuildInfo:i}=xs();Un(e.sessionId,"AuthEvent did not contain a session ID");const s=await tB(e.sessionId),o={};return ga()?o.ibi=i.packageName:Fl()?o.apn=i.packageName:St(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Lg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function X2(t){const{BuildInfo:e}=xs(),n={};ga()?n.iosBundleId=e.packageName:Fl()?n.androidPackageName=e.packageName:St(t,"operation-not-supported-in-this-environment"),await $b(t,n)}function J2(t){const{cordova:e}=xs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,dF()?"_blank":"_system","location=yes"),n(i)})})}async function Z2(t,e,n){const{cordova:r}=xs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(wt(t,"redirect-cancelled-by-user"))},Q2))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Fl()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function eB(t){var e,n,r,i,s,o,a,u,l,c;const h=xs();D(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function tB(t){const e=nB(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function nB(t){if(Un(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rB=20;class iB extends Lb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function sB(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:uB(),postBody:null,tenantId:t.tenantId,error:wt(t,"no-auth-event")}}function oB(t,e){return Mg()._set($g(t),e)}async function PE(t){const e=await Mg()._get($g(t));return e&&await Mg()._remove($g(t)),e}function aB(t,e){var n,r;const i=cB(e);if(i.includes("/__/auth/callback")){const s=ch(i),o=s.firebaseError?lB(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?wt(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function uB(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<rB;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Mg(){return an(Hv)}function $g(t){return vs("authEvent",t.config.apiKey,t.name)}function lB(t){try{return JSON.parse(t)}catch{return null}}function cB(t){const e=ch(t),n=e.link?decodeURIComponent(e.link):void 0,r=ch(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ch(i).link||i||r||n||t}function ch(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Io(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hB=500;class dB{constructor(){this._redirectPersistence=As,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=If,this._overrideRedirectResult=Yv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new iB(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){St(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){eB(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),u2(),await this._originValidation(e);const o=sB(e,r,i);await oB(e,o);const a=await Y2(e,o,n),u=await J2(a);return Z2(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=X2(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=xs(),o=setTimeout(async()=>{await PE(e),n.onEvent(OE())},hB),a=async c=>{clearTimeout(o);const h=await PE(e);let d=null;h&&(c!=null&&c.url)&&(d=aB(h,c.url)),n.onEvent(d||OE())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;xs().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const fB=dB;function OE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:wt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pB(t,e){ut(t)._logFramework(e)}var mB="@firebase/auth-compat",gB="0.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yB=1e3;function bu(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function vB(){return bu()==="http:"||bu()==="https:"}function Ub(t=Pe()){return!!((bu()==="file:"||bu()==="ionic:"||bu()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function wB(){return Dv()||hf()}function _B(){return Lk()&&(document==null?void 0:document.documentMode)===11}function EB(t=Pe()){return/Edge\/\d+/.test(t)}function SB(t=Pe()){return _B()||EB(t)}function Bb(){try{const t=self.localStorage,e=Ul();if(t)return t.setItem(e,"1"),t.removeItem(e),SB()?nl():!0}catch{return Jv()&&nl()}return!1}function Jv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function lm(){return(vB()||Ok()||Ub())&&!wB()&&Bb()&&!Jv()}function Vb(){return Ub()&&typeof document<"u"}async function IB(){return Vb()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},yB);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function TB(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={LOCAL:"local",NONE:"none",SESSION:"session"},Wa=D,jb="persistence";function kB(t,e){if(Wa(Object.values(sn).includes(e),t,"invalid-persistence-type"),Dv()){Wa(e!==sn.SESSION,t,"unsupported-persistence-type");return}if(hf()){Wa(e===sn.NONE,t,"unsupported-persistence-type");return}if(Jv()){Wa(e===sn.NONE||e===sn.LOCAL&&nl(),t,"unsupported-persistence-type");return}Wa(e===sn.NONE||Bb(),t,"unsupported-persistence-type")}async function Fg(t){await t._initializationPromise;const e=zb(),n=vs(jb,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function bB(t,e){const n=zb();if(!n)return[];const r=vs(jb,t,e);switch(n.getItem(r)){case sn.NONE:return[Ko];case sn.LOCAL:return[ll,As];case sn.SESSION:return[As];default:return[]}}function zb(){var t;try{return((t=TB())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CB=D;class ci{constructor(){this.browserResolver=an(z2),this.cordovaResolver=an(fB),this.underlyingResolver=null,this._redirectPersistence=As,this._completeRedirectFn=If,this._overrideRedirectResult=Yv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Vb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return CB(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await IB();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t){return t.unwrap()}function RB(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AB(t){return Hb(t)}function xB(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new NB(t,dU(t,e))}else if(r){const i=Hb(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Hb(t){const{_tokenResponse:e}=t instanceof Nt?t.customData:t;if(!e)return null;if(!(t instanceof Nt)&&"temporaryProof"in e&&"phoneNumber"in e)return ir.credentialFromResult(t);const n=e.providerId;if(!n||n===Ha.PASSWORD)return null;let r;switch(n){case Ha.GOOGLE:r=Gn;break;case Ha.FACEBOOK:r=Wn;break;case Ha.GITHUB:r=Kn;break;case Ha.TWITTER:r=Qn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Qo._create(n,a):ur._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Po(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Nt?r.credentialFromError(t):r.credentialFromResult(t)}function Wt(t,e){return e.catch(n=>{throw n instanceof Nt&&xB(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:AB(n),additionalUserInfo:hU(n),user:Tr.getOrCreate(i)}})}async function Ug(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Wt(t,n.confirm(r))}}class NB{constructor(e,n){this.resolver=n,this.auth=RB(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Wt(qb(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this._delegate=e,this.multiFactor=gU(e)}static getOrCreate(e){return Tr.USER_MAP.has(e)||Tr.USER_MAP.set(e,new Tr(e)),Tr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Wt(this.auth,yb(this._delegate,e))}async linkWithPhoneNumber(e,n){return Ug(this.auth,QU(this._delegate,e,n))}async linkWithPopup(e){return Wt(this.auth,i2(this._delegate,e,ci))}async linkWithRedirect(e){return await Fg(ut(this.auth)),f2(this._delegate,e,ci)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Wt(this.auth,vb(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Ug(this.auth,YU(this._delegate,e,n))}reauthenticateWithPopup(e){return Wt(this.auth,r2(this._delegate,e,ci))}async reauthenticateWithRedirect(e){return await Fg(ut(this.auth)),h2(this._delegate,e,ci)}sendEmailVerification(e){return eU(this._delegate,e)}async unlink(e){return await BF(this._delegate,e),this}updateEmail(e){return iU(this._delegate,e)}updatePassword(e){return sU(this._delegate,e)}updatePhoneNumber(e){return XU(this._delegate,e)}updateProfile(e){return rU(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return tU(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Tr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=D;class Bg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ga(r,"invalid-api-key",{appName:e.name}),Ga(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ci:void 0;this._delegate=n.initialize({options:{persistence:DB(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(G$),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Tr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){vF(this._delegate,e,n)}applyActionCode(e){return HF(this._delegate,e)}checkActionCode(e){return wb(this._delegate,e)}confirmPasswordReset(e,n){return qF(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Wt(this._delegate,GF(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return ZF(this._delegate,e)}isSignInWithEmailLink(e){return YF(this._delegate,e)}async getRedirectResult(){Ga(lm(),this._delegate,"operation-not-supported-in-this-environment");const e=await m2(this._delegate,ci);return e?Wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){pB(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=LE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=LE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return QF(this._delegate,e,n)}sendPasswordResetEmail(e,n){return zF(this._delegate,e,n||void 0)}async setPersistence(e){kB(this._delegate,e);let n;switch(e){case sn.SESSION:n=As;break;case sn.LOCAL:n=await an(ll)._isAvailable()?ll:Hv;break;case sn.NONE:n=Ko;break;default:return St("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Wt(this._delegate,UF(this._delegate))}signInWithCredential(e){return Wt(this._delegate,yf(this._delegate,e))}signInWithCustomToken(e){return Wt(this._delegate,jF(this._delegate,e))}signInWithEmailAndPassword(e,n){return Wt(this._delegate,KF(this._delegate,e,n))}signInWithEmailLink(e,n){return Wt(this._delegate,XF(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Ug(this._delegate,KU(this._delegate,e,n))}async signInWithPopup(e){return Ga(lm(),this._delegate,"operation-not-supported-in-this-environment"),Wt(this._delegate,n2(this._delegate,e,ci))}async signInWithRedirect(e){return Ga(lm(),this._delegate,"operation-not-supported-in-this-environment"),await Fg(this._delegate),l2(this._delegate,e,ci)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return WF(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Bg.Persistence=sn;function LE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Tr.getOrCreate(o)),error:e,complete:n}}function DB(t,e){const n=bB(t,e);if(typeof self<"u"&&!n.includes(ll)&&n.push(ll),typeof window<"u")for(const r of[Hv,As])n.includes(r)||n.push(r);return n.includes(Ko)||n.push(Ko),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(){this.providerId="phone",this._delegate=new ir(qb(Bn.auth()))}static credential(e,n){return ir.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Zv.PHONE_SIGN_IN_METHOD=ir.PHONE_SIGN_IN_METHOD;Zv.PROVIDER_ID=ir.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PB=D;class OB{constructor(e,n,r=Bn.app()){var i;PB((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new WU(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LB="auth-compat";function MB(t){t.INTERNAL.registerComponent(new kn(LB,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Bg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ro.EMAIL_SIGNIN,PASSWORD_RESET:ro.PASSWORD_RESET,RECOVER_EMAIL:ro.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ro.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ro.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ro.VERIFY_EMAIL}},EmailAuthProvider:Bi,FacebookAuthProvider:Wn,GithubAuthProvider:Kn,GoogleAuthProvider:Gn,OAuthProvider:Po,SAMLAuthProvider:Gh,PhoneAuthProvider:Zv,PhoneMultiFactorGenerator:Fb,RecaptchaVerifier:OB,TwitterAuthProvider:Qn,Auth:Bg,AuthCredential:ya,Error:Nt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(mB,gB)}MB(Bn);var $B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,ew=ew||{},Y=$B||self;function Xh(){}function Tf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Vl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FB(t){return Object.prototype.hasOwnProperty.call(t,cm)&&t[cm]||(t[cm]=++UB)}var cm="closure_uid_"+(1e9*Math.random()>>>0),UB=0;function BB(t,e,n){return t.call.apply(t.bind,arguments)}function VB(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Dt=BB:Dt=VB,Dt.apply(null,arguments)}function Oc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Tt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Vi(){this.s=this.s,this.o=this.o}var jB=0;Vi.prototype.s=!1;Vi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),jB!=0)&&FB(this)};Vi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tw(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ME(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Tf(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var zB=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Xh,e),Y.removeEventListener("test",Xh,e)}catch{}return t}();function Jh(t){return/^[\s\xa0]*$/.test(t)}var $E=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function hm(t,e){return t<e?-1:t>e?1:0}function kf(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Yn(t){return kf().indexOf(t)!=-1}function nw(t){return nw[" "](t),t}nw[" "]=Xh;function qB(t){var e=GB;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var HB=Yn("Opera"),Yo=Yn("Trident")||Yn("MSIE"),Gb=Yn("Edge"),Vg=Gb||Yo,Kb=Yn("Gecko")&&!(kf().toLowerCase().indexOf("webkit")!=-1&&!Yn("Edge"))&&!(Yn("Trident")||Yn("MSIE"))&&!Yn("Edge"),WB=kf().toLowerCase().indexOf("webkit")!=-1&&!Yn("Edge");function Qb(){var t=Y.document;return t?t.documentMode:void 0}var Zh;e:{var dm="",fm=function(){var t=kf();if(Kb)return/rv:([^\);]+)(\)|;)/.exec(t);if(Gb)return/Edge\/([\d\.]+)/.exec(t);if(Yo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(WB)return/WebKit\/(\S+)/.exec(t);if(HB)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fm&&(dm=fm?fm[1]:""),Yo){var pm=Qb();if(pm!=null&&pm>parseFloat(dm)){Zh=String(pm);break e}}Zh=dm}var GB={};function KB(){return qB(function(){let t=0;const e=$E(String(Zh)).split("."),n=$E("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=hm(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||hm(i[2].length==0,s[2].length==0)||hm(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var jg;if(Y.document&&Yo){var FE=Qb();jg=FE||parseInt(Zh,10)||void 0}else jg=void 0;var QB=jg;function cl(t,e){if(Pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kb){e:{try{nw(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YB[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&cl.X.h.call(this)}}Tt(cl,Pt);var YB={2:"touch",3:"pen",4:"mouse"};cl.prototype.h=function(){cl.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var jl="closure_listenable_"+(1e6*Math.random()|0),XB=0;function JB(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++XB,this.ba=this.ea=!1}function bf(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rw(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Yb(t){const e={};for(const n in t)e[n]=t[n];return e}const UE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xb(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<UE.length;s++)n=UE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Cf(t){this.src=t,this.g={},this.h=0}Cf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=qg(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new JB(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function zg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Wb(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(bf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var iw="closure_lm_"+(1e6*Math.random()|0),mm={};function Jb(t,e,n,r,i){if(r&&r.once)return eC(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Jb(t,e[s],n,r,i);return null}return n=aw(n),t&&t[jl]?t.N(e,n,Vl(r)?!!r.capture:!!r,i):Zb(t,e,n,!1,r,i)}function Zb(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Vl(i)?!!i.capture:!!i,a=ow(t);if(a||(t[iw]=a=new Cf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ZB(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)zB||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(nC(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZB(){function t(n){return e.call(t.src,t.listener,n)}const e=eV;return t}function eC(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)eC(t,e[s],n,r,i);return null}return n=aw(n),t&&t[jl]?t.O(e,n,Vl(r)?!!r.capture:!!r,i):Zb(t,e,n,!0,r,i)}function tC(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)tC(t,e[s],n,r,i);else r=Vl(r)?!!r.capture:!!r,n=aw(n),t&&t[jl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=qg(s,n,r,i),-1<n&&(bf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ow(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qg(e,n,r,i)),(n=-1<t?e[t]:null)&&sw(n))}function sw(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[jl])zg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(nC(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ow(e))?(zg(n,t),n.h==0&&(n.src=null,e[iw]=null)):bf(t)}}}function nC(t){return t in mm?mm[t]:mm[t]="on"+t}function eV(t,e){if(t.ba)t=!0;else{e=new cl(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&sw(t),t=n.call(r,e)}return t}function ow(t){return t=t[iw],t instanceof Cf?t:null}var gm="__closure_events_fn_"+(1e9*Math.random()>>>0);function aw(t){return typeof t=="function"?t:(t[gm]||(t[gm]=function(e){return t.handleEvent(e)}),t[gm])}function lt(){Vi.call(this),this.i=new Cf(this),this.P=this,this.I=null}Tt(lt,Vi);lt.prototype[jl]=!0;lt.prototype.removeEventListener=function(t,e,n,r){tC(this,t,e,n,r)};function _t(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Pt(e,t);else if(e instanceof Pt)e.target=e.target||t;else{var i=e;e=new Pt(r,t),Xb(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Lc(o,r,!0,e)&&i}if(o=e.g=t,i=Lc(o,r,!0,e)&&i,i=Lc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Lc(o,r,!1,e)&&i}lt.prototype.M=function(){if(lt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)bf(n[r]);delete t.g[e],t.h--}}this.I=null};lt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};lt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Lc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&zg(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var uw=Y.JSON.stringify;function tV(){var t=sC;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nV{constructor(){this.h=this.g=null}add(e,n){const r=rC.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var rC=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rV,t=>t.reset());class rV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iV(t){Y.setTimeout(()=>{throw t},0)}function iC(t,e){Hg||sV(),Wg||(Hg(),Wg=!0),sC.add(t,e)}var Hg;function sV(){var t=Y.Promise.resolve(void 0);Hg=function(){t.then(oV)}}var Wg=!1,sC=new nV;function oV(){for(var t;t=tV();){try{t.h.call(t.g)}catch(n){iV(n)}var e=rC;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wg=!1}function Rf(t,e){lt.call(this),this.h=t||1,this.g=e||Y,this.j=Dt(this.lb,this),this.l=Date.now()}Tt(Rf,lt);z=Rf.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),_t(this,"tick"),this.ca&&(lw(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lw(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}z.M=function(){Rf.X.M.call(this),lw(this),delete this.g};function cw(t,e,n){if(typeof t=="function")n&&(t=Dt(t,n));else if(t&&typeof t.handleEvent=="function")t=Dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function oC(t){t.g=cw(()=>{t.g=null,t.i&&(t.i=!1,oC(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class aV extends Vi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:oC(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hl(t){Vi.call(this),this.h=t,this.g={}}Tt(hl,Vi);var BE=[];function aC(t,e,n,r){Array.isArray(n)||(n&&(BE[0]=n.toString()),n=BE);for(var i=0;i<n.length;i++){var s=Jb(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function uC(t){rw(t.g,function(e,n){this.g.hasOwnProperty(n)&&sw(e)},t),t.g={}}hl.prototype.M=function(){hl.X.M.call(this),uC(this)};hl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Af(){this.g=!0}Af.prototype.Aa=function(){this.g=!1};function uV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function lV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function To(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+hV(t,n)+(r?" "+r:"")})}function cV(t,e){t.info(function(){return"TIMEOUT: "+e})}Af.prototype.info=function(){};function hV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return uw(n)}catch{return e}}var Gs={},VE=null;function xf(){return VE=VE||new lt}Gs.Pa="serverreachability";function lC(t){Pt.call(this,Gs.Pa,t)}Tt(lC,Pt);function dl(t){const e=xf();_t(e,new lC(e))}Gs.STAT_EVENT="statevent";function cC(t,e){Pt.call(this,Gs.STAT_EVENT,t),this.stat=e}Tt(cC,Pt);function Vt(t){const e=xf();_t(e,new cC(e,t))}Gs.Qa="timingevent";function hC(t,e){Pt.call(this,Gs.Qa,t),this.size=e}Tt(hC,Pt);function zl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Nf={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},dC={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function hw(){}hw.prototype.h=null;function jE(t){return t.h||(t.h=t.i())}function fC(){}var ql={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function dw(){Pt.call(this,"d")}Tt(dw,Pt);function fw(){Pt.call(this,"c")}Tt(fw,Pt);var Gg;function Df(){}Tt(Df,hw);Df.prototype.g=function(){return new XMLHttpRequest};Df.prototype.i=function(){return{}};Gg=new Df;function Hl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new hl(this),this.O=dV,t=Vg?125:void 0,this.T=new Rf(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new pC}function pC(){this.i=null,this.g="",this.h=!1}var dV=45e3,Kg={},ed={};z=Hl.prototype;z.setTimeout=function(t){this.O=t};function Qg(t,e,n){t.K=1,t.v=Of(Ur(e)),t.s=n,t.P=!0,mC(t,null)}function mC(t,e){t.F=Date.now(),Wl(t),t.A=Ur(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),IC(n.i,"t",r),t.C=0,n=t.l.H,t.h=new pC,t.g=qC(t.l,n?e:null,!t.s),0<t.N&&(t.L=new aV(Dt(t.La,t,t.g),t.N)),aC(t.S,t.g,"readystatechange",t.ib),e=t.H?Yb(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),dl(),uV(t.j,t.u,t.A,t.m,t.U,t.s)}z.ib=function(t){t=t.target;const e=this.L;e&&kr(t)==3?e.l():this.La(t)};z.La=function(t){try{if(t==this.g)e:{const c=kr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Vg||this.g&&(this.h.h||this.g.fa()||WE(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?dl(3):dl(2)),Pf(this);var n=this.g.aa();this.Y=n;t:if(gC(this)){var r=WE(this.g);t="";var i=r.length,s=kr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cs(this),Cu(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,lV(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Jh(a)){var l=a;break t}}l=null}if(n=l)To(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Yg(this,n);else{this.i=!1,this.o=3,Vt(12),cs(this),Cu(this);break e}}this.P?(yC(this,c,o),Vg&&this.i&&c==3&&(aC(this.S,this.T,"tick",this.hb),this.T.start())):(To(this.j,this.m,o,null),Yg(this,o)),c==4&&cs(this),this.i&&!this.I&&(c==4?BC(this.l,this):(this.i=!1,Wl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Vt(12)):(this.o=0,Vt(13)),cs(this),Cu(this)}}}catch{}finally{}};function gC(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function yC(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=fV(t,n),i==ed){e==4&&(t.o=4,Vt(14),r=!1),To(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Kg){t.o=4,Vt(15),To(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else To(t.j,t.m,i,null),Yg(t,i);gC(t)&&i!=ed&&i!=Kg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),_w(e),e.K=!0,Vt(11))):(To(t.j,t.m,n,"[Invalid Chunked Response]"),cs(t),Cu(t))}z.hb=function(){if(this.g){var t=kr(this.g),e=this.g.fa();this.C<e.length&&(Pf(this),yC(this,t,e),this.i&&t!=4&&Wl(this))}};function fV(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ed:(n=Number(e.substring(n,r)),isNaN(n)?Kg:(r+=1,r+n>e.length?ed:(e=e.substr(r,n),t.C=r+n,e)))}z.cancel=function(){this.I=!0,cs(this)};function Wl(t){t.V=Date.now()+t.O,vC(t,t.O)}function vC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zl(Dt(t.gb,t),e)}function Pf(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}z.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(cV(this.j,this.A),this.K!=2&&(dl(),Vt(17)),cs(this),this.o=2,Cu(this)):vC(this,this.V-t)};function Cu(t){t.l.G==0||t.I||BC(t.l,t)}function cs(t){Pf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,lw(t.T),uC(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Yg(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Xg(n.h,t))){if(!t.J&&Xg(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)rd(n),$f(n);else break e;ww(n),Vt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=zl(Dt(n.cb,n),6e3));if(1>=bC(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else hs(n,11)}else if((t.J||n.g==t)&&rd(n),!Jh(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(pw(s,s.h),s.h=null))}if(r.D){const g=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.za=g,Ce(r.F,r.D,g))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=zC(r,r.H?r.ka:null,r.V),o.J){CC(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(Pf(a),Wl(a)),r.g=o}else FC(r);0<n.i.length&&Ff(n)}else l[0]!="stop"&&l[0]!="close"||hs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?hs(n,7):vw(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}dl(4)}catch{}}function pV(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Tf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function mV(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Tf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function wC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mV(t),r=pV(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var _C=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _s(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _s){this.h=e!==void 0?e:t.h,td(this,t.j),this.s=t.s,this.g=t.g,nd(this,t.m),this.l=t.l,e=t.i;var n=new fl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zE(this,n),this.o=t.o}else t&&(n=String(t).match(_C))?(this.h=!!e,td(this,n[1]||"",!0),this.s=cu(n[2]||""),this.g=cu(n[3]||"",!0),nd(this,n[4]),this.l=cu(n[5]||"",!0),zE(this,n[6]||"",!0),this.o=cu(n[7]||"")):(this.h=!!e,this.i=new fl(null,this.h))}_s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hu(e,qE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hu(e,qE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(hu(n,n.charAt(0)=="/"?wV:vV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hu(n,EV)),t.join("")};function Ur(t){return new _s(t)}function td(t,e,n){t.j=n?cu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function nd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zE(t,e,n){e instanceof fl?(t.i=e,SV(t.i,t.h)):(n||(e=hu(e,_V)),t.i=new fl(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Of(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hu(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,yV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qE=/[#\/\?@]/g,vV=/[#\?:]/g,wV=/[#\?]/g,_V=/[#\?@]/g,EV=/#/g;function fl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ji(t){t.g||(t.g=new Map,t.h=0,t.i&&gV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=fl.prototype;z.add=function(t,e){ji(this),this.i=null,t=wa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function EC(t,e){ji(t),e=wa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function SC(t,e){return ji(t),e=wa(t,e),t.g.has(e)}z.forEach=function(t,e){ji(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};z.oa=function(){ji(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};z.W=function(t){ji(this);let e=[];if(typeof t=="string")SC(this,t)&&(e=e.concat(this.g.get(wa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return ji(this),this.i=null,t=wa(this,t),SC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function IC(t,e,n){EC(t,e),0<n.length&&(t.i=null,t.g.set(wa(t,e),tw(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function wa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function SV(t,e){e&&!t.j&&(ji(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(EC(this,r),IC(this,i,n))},t)),t.j=e}var IV=class{constructor(e,n){this.h=e,this.g=n}};function TC(t){this.l=t||TV,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TV=10;function kC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bC(t){return t.h?1:t.g?t.g.size:0}function Xg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pw(t,e){t.g?t.g.add(e):t.h=e}function CC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}TC.prototype.cancel=function(){if(this.i=RC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function RC(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return tw(t.i)}function mw(){}mw.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};mw.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function kV(){this.g=new mw}function bV(t,e,n){const r=n||"";try{wC(t,function(i,s){let o=i;Vl(i)&&(o=uw(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function CV(t,e){const n=new Af;if(Y.Image){const r=new Image;r.onload=Oc(Mc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Oc(Mc,n,r,"TestLoadImage: error",!1,e),r.onabort=Oc(Mc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Oc(Mc,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Mc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Gl(t){this.l=t.ac||null,this.j=t.jb||!1}Tt(Gl,hw);Gl.prototype.g=function(){return new Lf(this.l,this.j)};Gl.prototype.i=function(t){return function(){return t}}({});function Lf(t,e){lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gw,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Tt(Lf,lt);var gw=0;z=Lf.prototype;z.open=function(t,e){if(this.readyState!=gw)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pl(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kl(this)),this.readyState=gw};z.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pl(this)),this.g&&(this.readyState=3,pl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;AC(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function AC(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}z.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Kl(this):pl(this),this.readyState==3&&AC(this)}};z.Va=function(t){this.g&&(this.response=this.responseText=t,Kl(this))};z.Ua=function(t){this.g&&(this.response=t,Kl(this))};z.ga=function(){this.g&&Kl(this)};function Kl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pl(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function pl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Lf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var RV=Y.JSON.parse;function Ue(t){lt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xC,this.K=this.L=!1}Tt(Ue,lt);var xC="",AV=/^https?$/i,xV=["POST","PUT"];z=Ue.prototype;z.Ka=function(t){this.L=t};z.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gg.g(),this.C=this.u?jE(this.u):jE(Gg),this.g.onreadystatechange=Dt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){HE(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=Wb(xV,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{PC(this),0<this.B&&((this.K=NV(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Dt(this.qa,this)):this.A=cw(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){HE(this,s)}};function NV(t){return Yo&&KB()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.qa=function(){typeof ew<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function HE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,NC(t),Mf(t)}function NC(t){t.D||(t.D=!0,_t(t,"complete"),_t(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),Mf(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mf(this,!0)),Ue.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?DC(this):this.fb())};z.fb=function(){DC(this)};function DC(t){if(t.h&&typeof ew<"u"&&(!t.C[1]||kr(t)!=4||t.aa()!=2)){if(t.v&&kr(t)==4)cw(t.Ha,0,t);else if(_t(t,"readystatechange"),kr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(_C)[1]||null;if(!i&&Y.self&&Y.self.location){var s=Y.self.location.protocol;i=s.substr(0,s.length-1)}r=!AV.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var o=2<kr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",NC(t)}}finally{Mf(t)}}}}function Mf(t,e){if(t.g){PC(t);const n=t.g,r=t.C[0]?Xh:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=r}catch{}}}function PC(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function kr(t){return t.g?t.g.readyState:0}z.aa=function(){try{return 2<kr(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),RV(e)}};function WE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function OC(t){let e="";return rw(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function yw(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=OC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Ka(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function LC(t){this.Ca=0,this.i=[],this.j=new Af,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ka("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ka("baseRetryDelayMs",5e3,t),this.bb=Ka("retryDelaySeedMs",1e4,t),this.$a=Ka("forwardChannelMaxRetries",2,t),this.ta=Ka("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new TC(t&&t.concurrentRequestLimit),this.Fa=new kV,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=LC.prototype;z.ma=8;z.G=1;function vw(t){if(MC(t),t.G==3){var e=t.U++,n=Ur(t.F);Ce(n,"SID",t.I),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Ql(t,n),e=new Hl(t,t.j,e,void 0),e.K=2,e.v=Of(Ur(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=qC(e.l,null),e.g.da(e.v)),e.F=Date.now(),Wl(e)}jC(t)}function $f(t){t.g&&(_w(t),t.g.cancel(),t.g=null)}function MC(t){$f(t),t.u&&(Y.clearTimeout(t.u),t.u=null),rd(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Ff(t){kC(t.h)||t.m||(t.m=!0,iC(t.Ja,t),t.C=0)}function DV(t,e){return bC(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=zl(Dt(t.Ja,t,e),VC(t,t.C)),t.C++,!0)}z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Hl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Yb(s),Xb(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$C(this,i,e),n=Ur(this.F),Ce(n,"RID",t),Ce(n,"CVER",22),this.D&&Ce(n,"X-HTTP-Session-Id",this.D),Ql(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(OC(s)))+"&"+e:this.o&&yw(n,this.o,s)),pw(this.h,i),this.Ya&&Ce(n,"TYPE","init"),this.O?(Ce(n,"$req",e),Ce(n,"SID","null"),i.Z=!0,Qg(i,n,null)):Qg(i,n,e),this.G=2}}else this.G==3&&(t?GE(this,t):this.i.length==0||kC(this.h)||GE(this))};function GE(t,e){var n;e?n=e.m:n=t.U++;const r=Ur(t.F);Ce(r,"SID",t.I),Ce(r,"RID",n),Ce(r,"AID",t.T),Ql(t,r),t.o&&t.s&&yw(r,t.o,t.s),n=new Hl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=$C(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),pw(t.h,n),Qg(n,r,e)}function Ql(t,e){t.ia&&rw(t.ia,function(n,r){Ce(e,r,n)}),t.l&&wC({},function(n,r){Ce(e,r,n)})}function $C(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Dt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{bV(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function FC(t){t.g||t.u||(t.Z=1,iC(t.Ia,t),t.A=0)}function ww(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=zl(Dt(t.Ia,t),VC(t,t.A)),t.A++,!0)}z.Ia=function(){if(this.u=null,UC(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=zl(Dt(this.eb,this),t)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Vt(10),$f(this),UC(this))};function _w(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function UC(t){t.g=new Hl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ur(t.sa);Ce(e,"RID","rpc"),Ce(e,"SID",t.I),Ce(e,"CI",t.L?"0":"1"),Ce(e,"AID",t.T),Ce(e,"TYPE","xmlhttp"),Ql(t,e),t.o&&t.s&&yw(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Of(Ur(e)),n.s=null,n.P=!0,mC(n,t)}z.cb=function(){this.v!=null&&(this.v=null,$f(this),ww(this),Vt(19))};function rd(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function BC(t,e){var n=null;if(t.g==e){rd(t),_w(t),t.g=null;var r=2}else if(Xg(t.h,e))n=e.D,CC(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=xf(),_t(r,new hC(r,n)),Ff(t)}else FC(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&DV(t,e)||r==2&&ww(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:hs(t,5);break;case 4:hs(t,10);break;case 3:hs(t,6);break;default:hs(t,2)}}}function VC(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function hs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Dt(t.kb,t);n||(n=new _s("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||td(n,"https"),Of(n)),CV(n.toString(),r)}else Vt(2);t.G=0,t.l&&t.l.va(e),jC(t),MC(t)}z.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function jC(t){if(t.G=0,t.la=[],t.l){const e=RC(t.h);(e.length!=0||t.i.length!=0)&&(ME(t.la,e),ME(t.la,t.i),t.h.i.length=0,tw(t.i),t.i.length=0),t.l.ua()}}function zC(t,e,n){var r=n instanceof _s?Ur(n):new _s(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),nd(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new _s(null,void 0);r&&td(s,r),e&&(s.g=e),i&&nd(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ma),Ql(t,r),r}function qC(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ue(new Gl({jb:!0})):new Ue(t.ra),e.Ka(t.H),e}function HC(){}z=HC.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function id(){if(Yo&&!(10<=Number(QB)))throw Error("Environmental error: no available transport.")}id.prototype.g=function(t,e){return new cn(t,e)};function cn(t,e){lt.call(this),this.g=new LC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Jh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Jh(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _a(this)}Tt(cn,lt);cn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=zC(t,null,t.V),Ff(t)};cn.prototype.close=function(){vw(this.g)};cn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=uw(t),t=n);e.i.push(new IV(e.ab++,t)),e.G==3&&Ff(e)};cn.prototype.M=function(){this.g.l=null,delete this.j,vw(this.g),delete this.g,cn.X.M.call(this)};function WC(t){dw.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Tt(WC,dw);function GC(){fw.call(this),this.status=1}Tt(GC,fw);function _a(t){this.g=t}Tt(_a,HC);_a.prototype.xa=function(){_t(this.g,"a")};_a.prototype.wa=function(t){_t(this.g,new WC(t))};_a.prototype.va=function(t){_t(this.g,new GC)};_a.prototype.ua=function(){_t(this.g,"b")};id.prototype.createWebChannel=id.prototype.g;cn.prototype.send=cn.prototype.u;cn.prototype.open=cn.prototype.m;cn.prototype.close=cn.prototype.close;Nf.NO_ERROR=0;Nf.TIMEOUT=8;Nf.HTTP_ERROR=6;dC.COMPLETE="complete";fC.EventType=ql;ql.OPEN="a";ql.CLOSE="b";ql.ERROR="c";ql.MESSAGE="d";lt.prototype.listen=lt.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.Oa;Ue.prototype.getLastErrorCode=Ue.prototype.Ea;Ue.prototype.getStatus=Ue.prototype.aa;Ue.prototype.getResponseJson=Ue.prototype.Sa;Ue.prototype.getResponseText=Ue.prototype.fa;Ue.prototype.send=Ue.prototype.da;Ue.prototype.setWithCredentials=Ue.prototype.Ka;var PV=function(){return new id},OV=function(){return xf()},ym=Nf,LV=dC,MV=Gs,KE={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},$V=Gl,$c=fC,FV=Ue;const QE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new df("@firebase/firestore");function Jg(){return Ri.logLevel}function UV(t){Ri.setLogLevel(t)}function A(t,...e){if(Ri.logLevel<=ce.DEBUG){const n=e.map(Ew);Ri.debug(`Firestore (${Ea}): ${t}`,...n)}}function ze(t,...e){if(Ri.logLevel<=ce.ERROR){const n=e.map(Ew);Ri.error(`Firestore (${Ea}): ${t}`,...n)}}function Xo(t,...e){if(Ri.logLevel<=ce.WARN){const n=e.map(Ew);Ri.warn(`Firestore (${Ea}): ${t}`,...n)}}function Ew(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Ea}) INTERNAL ASSERTION FAILED: `+t;throw ze(e),new Error(e)}function q(t,e){t||U()}function BV(t,e){t||U()}function M(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class jV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zV{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new at;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new at,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new at)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string"),new KC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string"),new st(e)}}class qV{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=st.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(q(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class HV{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new qV(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GV{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(q(typeof n.token=="string"),this.A=n.token,new WV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=KV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function Jo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function YC(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ae(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ae(0,0))}static max(){return new W(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ml.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ml?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends ml{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const QV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends ml{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return QV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new C(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(le.fromString(e))}static fromName(e){return new O(le.fromString(e).popFirst(5))}static empty(){return new O(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new le(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Zg(t){return t.fields.find(e=>e.kind===2)}function es(t){return t.fields.filter(e=>e.kind!==2)}XC.UNKNOWN_ID=-1;class YV{constructor(e,n){this.fieldPath=e,this.kind=n}}class sd{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new sd(0,hn.min())}}function JC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new hn(i,O.empty(),e)}function ZC(t){return new hn(t.readTime,t.key,-1)}class hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hn(W.min(),O.empty(),-1)}static max(){return new hn(W.max(),O.empty(),-1)}}function Sw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==eR)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new at,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Ru(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=Iw(r.target.error);this.P.reject(new Ru(e,i))}}static open(e,n,r,i){try{return new Uf(n,e.transaction(i,r))}catch(s){throw new Ru(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new JV(n)}}class Ln{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Ln.D(Pe())===12.2&&ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),ts(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!nl())return!1;if(Ln.N())return!0;const e=Pe(),n=Ln.D(e),r=0<n&&n<10,i=Ln.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ru(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ru(e,o))},i.onupgradeneeded=s=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Uf.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),E.reject(l))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class XV{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return ts(this.q.delete())}}class Ru extends C{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function qi(t){return t.name==="IndexedDbTransactionError"}class JV{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ts(r)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),ts(this.store.add(e))}get(e){return ts(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),ts(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),ts(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new E((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new E((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new E((r,i)=>{n.onerror=s=>{const o=Iw(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new XV(a),l=n(a.primaryKey,a.value,u);if(l instanceof E){const c=l.catch(h=>(u.done(),E.reject(h)));r.push(c)}u.isDone?i():u.G===null?a.continue():a.continue(u.G)}}).next(()=>E.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ts(t){return new E((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Iw(r.target.error);n(i)}})}let YE=!1;function Iw(t){const e=Ln.D(Pe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return YE||(YE=!0,setTimeout(()=>{throw r},0)),r}}return t}class ZV{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){A("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{A("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){qi(n)?A("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await zi(n)}await this.nt(6e4)})}}class ej{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return E.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return A("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(A("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=ZC(s);Sw(o,r)>0&&(r=o)}),new hn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Yt.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t){return t==null}function gl(t){return t===0&&1/t==-1/0}function rR(t){return typeof t=="number"&&Number.isInteger(t)&&!gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nj(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new tt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const rj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(t){if(q(!!t),typeof t=="string"){let e=0;const n=rj.exec(t);if(q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ns(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function iR(t){const e=t.mapValue.fields.__previous_value__;return Tw(e)?iR(e):e}function yl(t){const e=xi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},hh={nullValue:"NULL_VALUE"};function Ds(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tw(t)?4:sR(t)?9007199254740991:10:U()}function lr(t,e){if(t===e)return!0;const n=Ds(t);if(n!==Ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yl(t).isEqual(yl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=xi(r.timestampValue),o=xi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ns(r.bytesValue).isEqual(Ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Fe(r.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(r.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Fe(r.integerValue)===Fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Fe(r.doubleValue),o=Fe(i.doubleValue);return s===o?gl(s)===gl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Jo(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(XE(s)!==XE(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!lr(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function vl(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function Ni(t,e){if(t===e)return 0;const n=Ds(t),r=Ds(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Fe(i.integerValue||i.doubleValue),a=Fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return JE(t.timestampValue,e.timestampValue);case 4:return JE(yl(t),yl(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ns(i),a=Ns(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=Z(o[u],a[u]);if(l!==0)return l}return Z(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Z(Fe(i.latitude),Fe(s.latitude));return o!==0?o:Z(Fe(i.longitude),Fe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Ni(o[u],a[u]);if(l)return l}return Z(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===hi.mapValue&&s===hi.mapValue)return 0;if(i===hi.mapValue)return 1;if(s===hi.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=Z(a[c],l[c]);if(h!==0)return h;const d=Ni(o[a[c]],u[l[c]]);if(d!==0)return d}return Z(a.length,l.length)}(t.mapValue,e.mapValue);default:throw U()}}function JE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=xi(t),r=xi(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Zo(t){return ey(t)}function ey(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=xi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ns(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ey(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ey(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function Ps(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ty(t){return!!t&&"integerValue"in t}function wl(t){return!!t&&"arrayValue"in t}function ZE(t){return!!t&&"nullValue"in t}function eS(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dh(t){return!!t&&"mapValue"in t}function Au(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Au(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Au(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function ij(t){return"nullValue"in t?hh:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ps(Ai.empty(),O.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:U()}function sj(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ps(Ai.empty(),O.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?hi:U()}function tS(t,e){const n=Ni(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function nS(t,e){const n=Ni(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.position=e,this.inclusive=n}}function rS(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=Ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function iS(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{}class ie extends oR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oj(e,n,r):n==="array-contains"?new lj(e,r):n==="in"?new dR(e,r):n==="not-in"?new cj(e,r):n==="array-contains-any"?new hj(e,r):new ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aj(e,r):new uj(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ni(n,this.value)):n!==null&&Ds(this.value)===Ds(n)&&this.matchesComparison(Ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ge extends oR{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ge(e,n)}matches(e){return ea(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ea(t){return t.op==="and"}function ny(t){return t.op==="or"}function kw(t){return aR(t)&&ea(t)}function aR(t){for(const e of t.filters)if(e instanceof ge)return!1;return!0}function ry(t){if(t instanceof ie)return t.field.canonicalString()+t.op.toString()+Zo(t.value);if(kw(t))return t.filters.map(e=>ry(e)).join(",");{const e=t.filters.map(n=>ry(n)).join(",");return`${t.op}(${e})`}}function uR(t,e){return t instanceof ie?function(n,r){return r instanceof ie&&n.op===r.op&&n.field.isEqual(r.field)&&lr(n.value,r.value)}(t,e):t instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&uR(s,r.filters[o]),!0):!1}(t,e):void U()}function lR(t,e){const n=t.filters.concat(e);return ge.create(n,t.op)}function cR(t){return t instanceof ie?function(e){return`${e.field.canonicalString()} ${e.op} ${Zo(e.value)}`}(t):t instanceof ge?function(e){return e.op.toString()+" {"+e.getFilters().map(cR).join(" ,")+"}"}(t):"Filter"}class oj extends ie{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class aj extends ie{constructor(e,n){super(e,"in",n),this.keys=hR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uj extends ie{constructor(e,n){super(e,"not-in",n),this.keys=hR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class lj extends ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wl(n)&&vl(n.arrayValue,this.value)}}class dR extends ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vl(this.value.arrayValue,n)}}class cj extends ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vl(this.value.arrayValue,n)}}class hj extends ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function dj(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fc(this.root,e,this.comparator,!0)}}class Fc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??mt.EMPTY,this.right=s??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sS(this.data.getIterator())}getIteratorFrom(e){return new sS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class sS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function io(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new _e(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Au(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Au(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ks(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(Au(this.value))}}function fR(t){const e=[];return Ks(t.fields,(n,r)=>{const i=new qe([n]);if(dh(r)){const s=fR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ie(e,0,W.min(),W.min(),W.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ie(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new Ie(e,2,n,W.min(),W.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,W.min(),W.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function iy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new fj(t,e,n,r,i,s,o)}function Os(t){const e=M(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ry(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zo(r)).join(",")),e.ft=n}return e.ft}function Xl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dj(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!iS(t.startAt,e.startAt)&&iS(t.endAt,e.endAt)}function od(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ad(t,e){return t.filters.filter(n=>n instanceof ie&&n.field.isEqual(e))}function oS(t,e,n){let r=hh,i=!0;for(const s of ad(t,e)){let o=hh,a=!0;switch(s.op){case"<":case"<=":o=ij(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=hh}tS({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];tS({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function aS(t,e,n){let r=hi,i=!0;for(const s of ad(t,e)){let o=hi,a=!0;switch(s.op){case">=":case">":o=sj(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=hi}nS({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];nS({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function pR(t,e,n,r,i,s,o,a){return new Hr(t,e,n,r,i,s,o,a)}function Sa(t){return new Hr(t)}function uS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bf(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Cw(t){return t.collectionGroup!==null}function Es(t){const e=M(t);if(e.dt===null){e.dt=[];const n=Bf(e),r=bw(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Lo(n)),e.dt.push(new Lo(qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Lo(qe.keyField(),s))}}}return e.dt}function nn(t){const e=M(t);if(!e._t)if(e.limitType==="F")e._t=iy(e.path,e.collectionGroup,Es(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Es(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Lo(s.field,o))}const r=e.endAt?new Di(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Di(e.startAt.position,e.startAt.inclusive):null;e._t=iy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function sy(t,e){e.getFirstInequalityField(),Bf(t);const n=t.filters.concat([e]);return new Hr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ud(t,e,n){return new Hr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jl(t,e){return Xl(nn(t),nn(e))&&t.limitType===e.limitType}function mR(t){return`${Os(nn(t))}|lt:${t.limitType}`}function oy(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>cR(r)).join(", ")}]`),Yl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zo(r)).join(",")),`Target(${n})`}(nn(t))}; limitType=${t.limitType})`}function Rw(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Es(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=rS(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Es(n),r)||n.endAt&&!function(i,s,o){const a=rS(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Es(n),r))}(t,e)}function gR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yR(t){return(e,n)=>{let r=!1;for(const i of Es(t)){const s=pj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function pj(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Ni(a,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gl(e)?"-0":e}}function wR(t){return{integerValue:""+t}}function _R(t,e){return rR(e)?wR(e):vR(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this._=void 0}}function mj(t,e,n){return t instanceof ta?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ls?SR(t,e):t instanceof Ms?IR(t,e):function(r,i){const s=ER(r,i),o=lS(s)+lS(r.gt);return ty(s)&&ty(r.gt)?wR(o):vR(r.yt,o)}(t,e)}function gj(t,e,n){return t instanceof Ls?SR(t,e):t instanceof Ms?IR(t,e):n}function ER(t,e){return t instanceof na?ty(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ta extends Vf{}class Ls extends Vf{constructor(e){super(),this.elements=e}}function SR(t,e){const n=TR(e);for(const r of t.elements)n.some(i=>lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ms extends Vf{constructor(e){super(),this.elements=e}}function IR(t,e){let n=TR(e);for(const r of t.elements)n=n.filter(i=>!lr(i,r));return{arrayValue:{values:n}}}class na extends Vf{constructor(e,n){super(),this.yt=e,this.gt=n}}function lS(t){return Fe(t.integerValue||t.doubleValue)}function TR(t){return wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n){this.field=e,this.transform=n}}function yj(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ls&&r instanceof Ls||n instanceof Ms&&r instanceof Ms?Jo(n.elements,r.elements,lr):n instanceof na&&r instanceof na?lr(n.gt,r.gt):n instanceof ta&&r instanceof ta}(t.transform,e.transform)}class vj{constructor(e,n){this.version=e,this.transformResults=n}}class Re{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jf{}function kR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ta(t.key,Re.none()):new Ia(t.key,t.data,Re.none());{const n=t.data,r=yt.empty();let i=new _e(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wr(t.key,r,new Xt(i.toArray()),Re.none())}}function wj(t,e,n){t instanceof Ia?function(r,i,s){const o=r.value.clone(),a=hS(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Wr?function(r,i,s){if(!fh(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=hS(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(bR(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function xu(t,e,n,r){return t instanceof Ia?function(i,s,o,a){if(!fh(i.precondition,s))return o;const u=i.value.clone(),l=dS(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wr?function(i,s,o,a){if(!fh(i.precondition,s))return o;const u=dS(i.fieldTransforms,a,s),l=s.data;return l.setAll(bR(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return fh(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function _j(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ER(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function cS(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Jo(n,r,(i,s)=>yj(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ia extends jf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wr extends jf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function bR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hS(t,e,n){const r=new Map;q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,gj(o,a,n[i]))}return r}function dS(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mj(s,o,e))}return r}let Ta=class extends jf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}};class Aw extends jf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ej{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,ue;function CR(t){switch(t){default:return U();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function RR(t){if(t===void 0)return ze("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ke.OK:return S.OK;case Ke.CANCELLED:return S.CANCELLED;case Ke.UNKNOWN:return S.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return S.INTERNAL;case Ke.UNAVAILABLE:return S.UNAVAILABLE;case Ke.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ke.NOT_FOUND:return S.NOT_FOUND;case Ke.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ke.ABORTED:return S.ABORTED;case Ke.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ke.DATA_LOSS:return S.DATA_LOSS;default:return U()}}(ue=Ke||(Ke={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ks(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sj=new Be(O.comparator);function Jt(){return Sj}const AR=new Be(O.comparator);function du(...t){let e=AR;for(const n of t)e=e.insert(n.key,n);return e}function xR(t){let e=AR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function er(){return Nu()}function NR(){return Nu()}function Nu(){return new Hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ij=new Be(O.comparator),Tj=new _e(O.comparator);function te(...t){let e=Tj;for(const n of t)e=e.add(n);return e}const kj=new _e(Z);function zf(){return kj}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ec(W.min(),i,zf(),Jt(),te())}}class tc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tc(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class DR{constructor(e,n){this.targetId=e,this.Et=n}}class PR{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class fS{constructor(){this.At=0,this.Rt=mS(),this.bt=tt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=te(),n=te(),r=te();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new tc(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=mS()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class bj{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Jt(),this.qt=pS(),this.Ut=new _e(Z)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(od(s))if(r===0){const o=new O(s.path);this.Qt(n,o,Ie.newNoDocument(o,W.min()))}else q(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&od(a.target)){const u=new O(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,Ie.newNoDocument(u,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=te();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Yt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new ec(e,n,this.Ut,this.Lt,r);return this.Lt=Jt(),this.qt=pS(),this.Ut=new _e(Z),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new fS,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new _e(Z),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new fS),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function pS(){return new Be(O.comparator)}function mS(){return new Be(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cj=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Rj=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Aj=(()=>({and:"AND",or:"OR"}))();class xj{constructor(e,n){this.databaseId=e,this.wt=n}}function ra(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function OR(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Nj(t,e){return ra(t,e.toTimestamp())}function He(t){return q(!!t),W.fromTimestamp(function(e){const n=xi(e);return new Ae(n.seconds,n.nanos)}(t))}function xw(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function LR(t){const e=le.fromString(t);return q(qR(e)),e}function _l(t,e){return xw(t.databaseId,e.path)}function sr(t,e){const n=LR(e);if(n.get(1)!==t.databaseId.projectId)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O($R(n))}function ay(t,e){return xw(t.databaseId,e)}function MR(t){const e=LR(t);return e.length===4?le.emptyPath():$R(e)}function El(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $R(t){return q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gS(t,e,n){return{name:_l(t,e),fields:n.value.mapValue.fields}}function FR(t,e,n){const r=sr(t,e.name),i=He(e.updateTime),s=e.createTime?He(e.createTime):W.min(),o=new yt({mapValue:{fields:e.fields}}),a=Ie.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Dj(t,e){return"found"in e?function(n,r){q(!!r.found),r.found.name,r.found.updateTime;const i=sr(n,r.found.name),s=He(r.found.updateTime),o=r.found.createTime?He(r.found.createTime):W.min(),a=new yt({mapValue:{fields:r.found.fields}});return Ie.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){q(!!r.missing),q(!!r.readTime);const i=sr(n,r.missing),s=He(r.readTime);return Ie.newNoDocument(i,s)}(t,e):U()}function Pj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.wt?(q(l===void 0||typeof l=="string"),tt.fromBase64String(l||"")):(q(l===void 0||l instanceof Uint8Array),tt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?S.UNKNOWN:RR(u.code);return new C(l,u.message||"")}(o);n=new PR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sr(t,r.document.name),s=He(r.document.updateTime),o=r.document.createTime?He(r.document.createTime):W.min(),a=new yt({mapValue:{fields:r.document.fields}}),u=Ie.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new ph(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sr(t,r.document),s=r.readTime?He(r.readTime):W.min(),o=Ie.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ph([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sr(t,r.document),s=r.removedTargetIds||[];n=new ph([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Ej(i),o=r.targetId;n=new DR(o,s)}}return n}function Sl(t,e){let n;if(e instanceof Ia)n={update:gS(t,e.key,e.value)};else if(e instanceof Ta)n={delete:_l(t,e.key)};else if(e instanceof Wr)n={update:gS(t,e.key,e.data),updateMask:Uj(e.fieldMask)};else{if(!(e instanceof Aw))return U();n={verify:_l(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ta)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ls)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ms)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof na)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Nj(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function uy(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Re.updateTime(He(i.updateTime)):i.exists!==void 0?Re.exists(i.exists):Re.none()}(e.currentDocument):Re.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)q(o.setToServerValue==="REQUEST_TIME"),a=new ta;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Ls(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Ms(l)}else"increment"in o?a=new na(s,o.increment):U();const u=qe.fromServerFormat(o.fieldPath);return new Zl(u,a)}(t,i)):[];if(e.update){e.update.name;const i=sr(t,e.update.name),s=new yt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Xt(u.map(l=>qe.fromServerFormat(l)))}(e.updateMask);return new Wr(i,s,o,n,r)}return new Ia(i,s,n,r)}if(e.delete){const i=sr(t,e.delete);return new Ta(i,n)}if(e.verify){const i=sr(t,e.verify);return new Aw(i,n)}return U()}function Oj(t,e){return t&&t.length>0?(q(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?He(r.updateTime):He(i);return s.isEqual(W.min())&&(s=He(i)),new vj(s,r.transformResults||[])}(n,e))):[]}function UR(t,e){return{documents:[ay(t,e.path)]}}function BR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ay(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ay(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return zR(ge.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:ao(c.field),direction:Mj(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.wt||Yl(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function VR(t){let e=MR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){q(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=jR(c);return h instanceof ge&&kw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Lo(uo(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Yl(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new Di(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new Di(d,h)}(n.endAt)),pR(e,i,o,s,a,"F",u,l)}function Lj(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function jR(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=uo(e.unaryFilter.field);return ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=uo(e.unaryFilter.field);return ie.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=uo(e.unaryFilter.field);return ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=uo(e.unaryFilter.field);return ie.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return ie.create(uo(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ge.create(e.compositeFilter.filters.map(n=>jR(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function Mj(t){return Cj[t]}function $j(t){return Rj[t]}function Fj(t){return Aj[t]}function ao(t){return{fieldPath:t.canonicalString()}}function uo(t){return qe.fromServerFormat(t.fieldPath)}function zR(t){return t instanceof ie?function(e){if(e.op==="=="){if(eS(e.value))return{unaryFilter:{field:ao(e.field),op:"IS_NAN"}};if(ZE(e.value))return{unaryFilter:{field:ao(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(eS(e.value))return{unaryFilter:{field:ao(e.field),op:"IS_NOT_NAN"}};if(ZE(e.value))return{unaryFilter:{field:ao(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ao(e.field),op:$j(e.op),value:e.value}}}(t):t instanceof ge?function(e){const n=e.getFilters().map(r=>zR(r));return n.length===1?n[0]:{compositeFilter:{op:Fj(e.op),filters:n}}}(t):U()}function Uj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=yS(e)),e=Bj(t.get(n),e);return yS(e)}function Bj(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function yS(t){return t+""}function tr(t){const e=t.length;if(q(e>=2),e===2)return q(t.charAt(0)===""&&t.charAt(1)===""),le.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&U(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:U()}s=o+2}return new le(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e){return[t,zt(e)]}function HR(t,e,n){return[t,zt(e),n]}const Vj={},jj=["prefixPath","collectionGroup","readTime","documentId"],zj=["prefixPath","collectionGroup","documentId"],qj=["collectionGroup","readTime","prefixPath","documentId"],Hj=["canonicalId","targetId"],Wj=["targetId","path"],Gj=["path","targetId"],Kj=["collectionId","parent"],Qj=["indexId","uid"],Yj=["uid","sequenceNumber"],Xj=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Jj=["indexId","uid","orderedDocumentKey"],Zj=["userId","collectionPath","documentId"],ez=["userId","collectionPath","largestBatchId"],tz=["userId","collectionGroup","largestBatchId"],WR=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],nz=[...WR,"documentOverlays"],GR=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],KR=GR,rz=[...KR,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly extends tR{constructor(e,n){super(),this.se=e,this.currentSequenceNumber=n}}function dt(t,e){const n=M(t);return Ln.M(n.se,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wj(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xu(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xu(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=NR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=kR(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Jo(this.mutations,e.mutations,(n,r)=>cS(n,r))&&Jo(this.baseMutations,e.baseMutations,(n,r)=>cS(n,r))}}class Dw{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){q(e.mutations.length===r.length);let i=Ij;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Dw(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r,i,s=W.min(),o=W.min(),a=tt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.ie=e}}function iz(t,e){let n;if(e.document)n=FR(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=O.fromSegments(e.noDocument.path),i=Fs(e.noDocument.readTime);n=Ie.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const r=O.fromSegments(e.unknownDocument.path),i=Fs(e.unknownDocument.version);n=Ie.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Ae(r[0],r[1]);return W.fromTimestamp(i)}(e.readTime)),n}function wS(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ld(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:_l(i,s.key),fields:s.data.value.mapValue.fields,updateTime:ra(i,s.version.toTimestamp()),createTime:ra(i,s.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:$s(e.version)};else{if(!e.isUnknownDocument())return U();r.unknownDocument={path:n.path.toArray(),version:$s(e.version)}}return r}function ld(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function $s(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Fs(t){const e=new Ae(t.seconds,t.nanoseconds);return W.fromTimestamp(e)}function ns(t,e){const n=(e.baseMutations||[]).map(s=>uy(t.ie,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>uy(t.ie,s)),i=Ae.fromMillis(e.localWriteTimeMs);return new Nw(e.batchId,i,n,r)}function fu(t){const e=Fs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Fs(t.lastLimboFreeSnapshotVersion):W.min();let r;var i;return t.query.documents!==void 0?(q((i=t.query).documents.length===1),r=nn(Sa(MR(i.documents[0])))):r=function(s){return nn(VR(s))}(t.query),new Ei(r,t.targetId,0,t.lastListenSequenceNumber,e,n,tt.fromBase64String(t.resumeToken))}function YR(t,e){const n=$s(e.snapshotVersion),r=$s(e.lastLimboFreeSnapshotVersion);let i;i=od(e.target)?UR(t.ie,e.target):BR(t.ie,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Os(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ow(t){const e=VR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ud(e,e.limit,"L"):e}function vm(t,e){return new Pw(e.largestBatchId,uy(t.ie,e.overlayMutation))}function _S(t,e){const n=e.path.lastSegment();return[t,zt(e.path.popLast()),n]}function ES(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:$s(r.readTime),documentKey:zt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{getBundleMetadata(e,n){return SS(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Fs(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return SS(e).put({bundleId:(r=n).id,createTime:$s(He(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return IS(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Ow(i.bundledQuery),readTime:Fs(i.readTime)};var i})}saveNamedQuery(e,n){return IS(e).put(function(r){return{name:r.name,readTime:$s(He(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function SS(t){return dt(t,"bundles")}function IS(t){return dt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n){this.yt=e,this.userId=n}static re(e,n){const r=n.uid||"";return new qf(e,r)}getOverlay(e,n){return Qa(e).get(_S(this.userId,n)).next(r=>r?vm(this.yt,r):null)}getOverlays(e,n){const r=er();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Pw(n,o);i.push(this.oe(e,a))}),E.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(zt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Qa(e).Y("collectionPathOverlayIndex",a))}),E.waitFor(s)}getOverlaysForCollection(e,n,r){const i=er(),s=zt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Qa(e).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=vm(this.yt,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=er();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Qa(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=vm(this.yt,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}oe(e,n){return Qa(e).put(function(r,i,s){const[o,a,u]=_S(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Sl(r.ie,s.mutation)}}(this.yt,this.userId,n))}}function Qa(t){return dt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){}ue(e,n){this.ce(e,n),n.ae()}ce(e,n){if("nullValue"in e)this.he(n,5);else if("booleanValue"in e)this.he(n,10),n.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(n,15),n.le(Fe(e.integerValue));else if("doubleValue"in e){const r=Fe(e.doubleValue);isNaN(r)?this.he(n,13):(this.he(n,15),gl(r)?n.le(0):n.le(r))}else if("timestampValue"in e){const r=e.timestampValue;this.he(n,20),typeof r=="string"?n.fe(r):(n.fe(`${r.seconds||""}`),n.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,n),this._e(n);else if("bytesValue"in e)this.he(n,30),n.we(Ns(e.bytesValue)),this._e(n);else if("referenceValue"in e)this.me(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.he(n,45),n.le(r.latitude||0),n.le(r.longitude||0)}else"mapValue"in e?sR(e)?this.he(n,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,n),this._e(n)):"arrayValue"in e?(this.ye(e.arrayValue,n),this._e(n)):U()}de(e,n){this.he(n,25),this.pe(e,n)}pe(e,n){n.fe(e)}ge(e,n){const r=e.fields||{};this.he(n,55);for(const i of Object.keys(r))this.de(i,n),this.ce(r[i],n)}ye(e,n){const r=e.values||[];this.he(n,50);for(const i of r)this.ce(i,n)}me(e,n){this.he(n,37),O.fromName(e).path.forEach(r=>{this.he(n,60),this.pe(r,n)})}he(e,n){e.le(n)}_e(e){e.le(2)}}rs.Ie=new rs;function oz(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function TS(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=oz(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class az{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ee(r.value),r=n.next();this.Ae()}Re(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.be(r.value),r=n.next();this.Pe()}ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ee(r);else if(r<2048)this.Ee(960|r>>>6),this.Ee(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ee(480|r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r);else{const i=n.codePointAt(0);this.Ee(240|i>>>18),this.Ee(128|63&i>>>12),this.Ee(128|63&i>>>6),this.Ee(128|63&i)}}this.Ae()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const i=n.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Pe()}Se(e){const n=this.De(e),r=TS(n);this.Ce(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}xe(e){const n=this.De(e),r=TS(n);this.Ce(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ee(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(n)}be(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class uz{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class lz{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class Ya{constructor(){this.$e=new az,this.Be=new uz(this.$e),this.Le=new lz(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ue(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new is(this.indexId,this.documentKey,this.arrayValue,r)}}function Zr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=kS(t.arrayValue,e.arrayValue),n!==0?n:(n=kS(t.directionalValue,e.directionalValue),n!==0?n:O.comparator(t.documentKey,e.documentKey)))}function kS(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cz{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const n of e.filters){const r=n;r.isInequality()?this.Qe=r:this.Ge.push(r)}}je(e){q(e.collectionGroup===this.collectionId);const n=Zg(e);if(n!==void 0&&!this.We(n))return!1;const r=es(e);let i=0,s=0;for(;i<r.length&&this.We(r[i]);++i);if(i===r.length)return!0;if(this.Qe!==void 0){const o=r[i];if(!this.ze(this.Qe,o)||!this.He(this.Ke[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ke.length||!this.He(this.Ke[s++],o))return!1}return!0}We(e){for(const n of this.Ge)if(this.ze(n,e))return!0;return!1}ze(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}He(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t){var e,n;if(q(t instanceof ie||t instanceof ge),t instanceof ie){if(t instanceof dR){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ie.create(t.field,"==",s)))||[];return ge.create(i,"or")}return t}const r=t.filters.map(i=>XR(i));return ge.create(r,t.op)}function hz(t){if(t.getFilters().length===0)return[];const e=dy(XR(t));return q(JR(e)),cy(e)||hy(e)?[e]:e.getFilters()}function cy(t){return t instanceof ie}function hy(t){return t instanceof ge&&kw(t)}function JR(t){return cy(t)||hy(t)||function(e){if(e instanceof ge&&ny(e)){for(const n of e.getFilters())if(!cy(n)&&!hy(n))return!1;return!0}return!1}(t)}function dy(t){if(q(t instanceof ie||t instanceof ge),t instanceof ie)return t;if(t.filters.length===1)return dy(t.filters[0]);const e=t.filters.map(r=>dy(r));let n=ge.create(e,t.op);return n=cd(n),JR(n)?n:(q(n instanceof ge),q(ea(n)),q(n.filters.length>1),n.filters.reduce((r,i)=>Lw(r,i)))}function Lw(t,e){let n;return q(t instanceof ie||t instanceof ge),q(e instanceof ie||e instanceof ge),n=t instanceof ie?e instanceof ie?function(r,i){return ge.create([r,i],"and")}(t,e):bS(t,e):e instanceof ie?bS(e,t):function(r,i){if(q(r.filters.length>0&&i.filters.length>0),ea(r)&&ea(i))return lR(r,i.getFilters());const s=ny(r)?r:i,o=ny(r)?i:r,a=s.filters.map(u=>Lw(u,o));return ge.create(a,"or")}(t,e),cd(n)}function bS(t,e){if(ea(e))return lR(e,t.getFilters());{const n=e.filters.map(r=>Lw(t,r));return ge.create(n,"or")}}function cd(t){if(q(t instanceof ie||t instanceof ge),t instanceof ie)return t;const e=t.getFilters();if(e.length===1)return cd(e[0]);if(aR(t))return t;const n=e.map(i=>cd(i)),r=[];return n.forEach(i=>{i instanceof ie?r.push(i):i instanceof ge&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ge.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dz{constructor(){this.Je=new Mw}addToCollectionParentIndex(e,n){return this.Je.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(hn.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(hn.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class Mw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new Uint8Array(0);class fz{constructor(e,n){this.user=e,this.databaseId=n,this.Ye=new Mw,this.Xe=new Hi(r=>Os(r),(r,i)=>Xl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ye.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Ye.add(n)});const s={collectionId:r,parent:zt(i)};return CS(e).put(s)}return E.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[YC(n),""],!1,!0);return CS(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(tr(o.parent))}return r})}addFieldIndex(e,n){const r=Bc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ja(e);return s.next(a=>{o.put(ES(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Bc(e),i=Ja(e),s=Xa(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Xa(e);let i=!0;const s=new Map;return E.forEach(this.Ze(n),o=>this.tn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return E.forEach(s,(u,l)=>{var c;A("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(v=>`${v.fieldPath}:${v.kind}`).join(",")}`} to execute ${Os(n)}`);const h=function(v,w){const b=Zg(w);if(b===void 0)return null;for(const R of ad(v,b.fieldPath))switch(R.op){case"array-contains-any":return R.value.arrayValue.values||[];case"array-contains":return[R.value]}return null}(l,u),d=function(v,w){const b=new Map;for(const R of es(w))for(const P of ad(v,R.fieldPath))switch(P.op){case"==":case"in":b.set(R.fieldPath.canonicalString(),P.value);break;case"not-in":case"!=":return b.set(R.fieldPath.canonicalString(),P.value),Array.from(b.values())}return null}(l,u),f=function(v,w){const b=[];let R=!0;for(const P of es(w)){const $=P.kind===0?oS(v,P.fieldPath,v.startAt):aS(v,P.fieldPath,v.startAt);b.push($.value),R&&(R=$.inclusive)}return new Di(b,R)}(l,u),p=function(v,w){const b=[];let R=!0;for(const P of es(w)){const $=P.kind===0?aS(v,P.fieldPath,v.endAt):oS(v,P.fieldPath,v.endAt);b.push($.value),R&&(R=$.inclusive)}return new Di(b,R)}(l,u),g=this.en(u,l,f),_=this.en(u,l,p),y=this.nn(u,l,d),m=this.sn(u.indexId,h,g,f.inclusive,_,p.inclusive,y);return E.forEach(m,v=>r.J(v,n.limit).next(w=>{w.forEach(b=>{const R=O.fromSegments(b.documentKey);o.has(R)||(o=o.add(R),a.push(R))})}))}).next(()=>a)}return E.resolve(null)})}Ze(e){let n=this.Xe.get(e);return n||(e.filters.length===0?n=[e]:n=hz(ge.create(e.filters,"and")).map(r=>iy(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,n),n)}sn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.rn(n[h/l]):Uc,f=this.on(e,d,r[h%l],i),p=this.un(e,d,s[h%l],o),g=a.map(_=>this.on(e,d,_,!0));c.push(...this.createRange(f,p,g))}return c}on(e,n,r,i){const s=new is(e,O.empty(),n,r);return i?s:s.Ue()}un(e,n,r,i){const s=new is(e,O.empty(),n,r);return i?s.Ue():s}tn(e,n){const r=new cz(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.Ze(n);return E.forEach(i,s=>this.tn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let u=new _e(qe.comparator),l=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:u=u.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(u=u.add(c.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}cn(e,n){const r=new Ya;for(const i of es(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);rs.Ie.ue(s,o)}return r.Fe()}rn(e){const n=new Ya;return rs.Ie.ue(e,n.qe(0)),n.Fe()}an(e,n){const r=new Ya;return rs.Ie.ue(Ps(this.databaseId,n),r.qe(function(i){const s=es(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Fe()}nn(e,n,r){if(r===null)return[];let i=[];i.push(new Ya);let s=0;for(const o of es(e)){const a=r[s++];for(const u of i)if(this.hn(n,o.fieldPath)&&wl(a))i=this.ln(i,o,a);else{const l=u.qe(o.kind);rs.Ie.ue(a,l)}}return this.fn(i)}en(e,n,r){return this.nn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Fe();return n}ln(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Ya;u.seed(a.Fe()),rs.Ie.ue(o,u.qe(n.kind)),s.push(u)}return s}hn(e,n){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Bc(e),i=Ja(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return E.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new sd(c.sequenceNumber,new hn(Fs(c.readTime),new O(tr(c.documentKey)),c.largestBatchId)):sd.empty(),d=l.fields.map(([f,p])=>new YV(qe.fromServerFormat(f),p));return new XC(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Bc(e),s=Ja(e);return this.dn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>E.forEach(a,u=>s.put(ES(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return E.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?E.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),E.forEach(a,u=>this._n(e,i,u).next(l=>{const c=this.wn(s,u);return l.isEqual(c)?E.resolve():this.mn(e,s,u,l,c)}))))})}gn(e,n,r,i){return Xa(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.an(r,n.key),documentKey:n.key.path.toArray()})}yn(e,n,r,i){return Xa(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.an(r,n.key),n.key.path.toArray()])}_n(e,n,r){const i=Xa(e);let s=new _e(Zr);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.an(r,n)])},(o,a)=>{s=s.add(new is(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,n){let r=new _e(Zr);const i=this.cn(n,e);if(i==null)return r;const s=Zg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(wl(o))for(const a of o.arrayValue.values||[])r=r.add(new is(n.indexId,e.key,this.rn(a),i))}else r=r.add(new is(n.indexId,e.key,Uc,i));return r}mn(e,n,r,i,s){A("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),f=u.getIterator();let p=io(d),g=io(f);for(;p||g;){let _=!1,y=!1;if(p&&g){const m=l(p,g);m<0?y=!0:m>0&&(_=!0)}else p!=null?y=!0:_=!0;_?(c(g),g=io(f)):y?(h(p),p=io(d)):(p=io(d),g=io(f))}}(i,s,Zr,a=>{o.push(this.gn(e,n,r,a))},a=>{o.push(this.yn(e,n,r,a))}),E.waitFor(o)}dn(e){let n=1;return Ja(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Zr(o,a)).filter((o,a,u)=>!a||Zr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Zr(o,e),u=Zr(o,n);if(a===0)i[0]=e.Ue();else if(a>0&&u<0)i.push(o),i.push(o.Ue());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Uc,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Uc,[]];s.push(IDBKeyRange.bound(a,u))}return s}pn(e,n){return Zr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(RS)}getMinOffset(e,n){return E.mapArray(this.Ze(n),r=>this.tn(e,r).next(i=>i||U())).next(RS)}}function CS(t){return dt(t,"collectionParents")}function Xa(t){return dt(t,"indexEntries")}function Bc(t){return dt(t,"indexConfiguration")}function Ja(t){return dt(t,"indexState")}function RS(t){q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Sw(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new hn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Gt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{q(a===1)}));const l=[];for(const c of n.mutations){const h=HR(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return E.waitFor(s).next(()=>l)}function hd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw U();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(41943040,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);class Hf{constructor(e,n,r,i){this.userId=e,this.yt=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static re(e,n,r,i){q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Hf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ei(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=lo(e),o=ei(e);return o.add({}).next(a=>{q(typeof a=="number");const u=new Nw(a,n,r,i),l=function(d,f,p){const g=p.baseMutations.map(y=>Sl(d.ie,y)),_=p.mutations.map(y=>Sl(d.ie,y));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:g,mutations:_}}(this.yt,this.userId,u),c=[];let h=new _e((d,f)=>Z(d.canonicalString(),f.canonicalString()));for(const d of i){const f=HR(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(f,Vj))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=u.keys()}),E.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return ei(e).get(n).next(r=>r?(q(r.userId===this.userId),ns(this.yt,r)):null)}Tn(e,n){return this.In[n]?E.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ei(e).Z({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(q(a.batchId>=r),s=ns(this.yt,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ei(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ei(e).W("userMutationsIndex",n).next(r=>r.map(i=>ns(this.yt,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=mh(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return lo(e).Z({range:i},(o,a,u)=>{const[l,c,h]=o,d=tr(c);if(l===this.userId&&n.path.isEqual(d))return ei(e).get(h).next(f=>{if(!f)throw U();q(f.userId===this.userId),s.push(ns(this.yt,f))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(Z);const i=[];return n.forEach(s=>{const o=mh(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=lo(e).Z({range:a},(l,c,h)=>{const[d,f,p]=l,g=tr(f);d===this.userId&&s.path.isEqual(g)?r=r.add(p):h.done()});i.push(u)}),E.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=mh(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new _e(Z);return lo(e).Z({range:o},(u,l,c)=>{const[h,d,f]=u,p=tr(d);h===this.userId&&r.isPrefixOf(p)?p.length===i&&(a=a.add(f)):c.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ei(e).get(s).next(o=>{if(o===null)throw U();q(o.userId===this.userId),r.push(ns(this.yt,o))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return ZR(e.se,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return E.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return lo(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=tr(s[1]);i.push(u)}else a.done()}).next(()=>{q(i.length===0)})})}containsKey(e,n){return eA(e,this.userId,n)}Rn(e){return tA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function eA(t,e,n){const r=mh(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return lo(t).Z({range:s,X:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function ei(t){return dt(t,"mutations")}function lo(t){return dt(t,"documentMutations")}function tA(t){return dt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Us(0)}static vn(){return new Us(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pz{constructor(e,n){this.referenceDelegate=e,this.yt=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new Us(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>W.fromTimestamp(new Ae(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>so(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(q(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return so(e).Z((o,a)=>{const u=fu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,n){return so(e).Z((r,i)=>{const s=fu(i);n(s)})}Vn(e){return xS(e).get("targetGlobalKey").next(n=>(q(n!==null),n))}Sn(e,n){return xS(e).put("targetGlobalKey",n)}Dn(e,n){return so(e).put(YR(this.yt,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Os(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return so(e).Z({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=fu(a);Xl(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=oi(e);return n.forEach(o=>{const a=zt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(i)}removeMatchingKeys(e,n,r){const i=oi(e);return E.forEach(n,s=>{const o=zt(s.path);return E.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=oi(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=oi(e);let s=te();return i.Z({range:r,X:!0},(o,a,u)=>{const l=tr(o[1]),c=new O(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=zt(n.path),i=IDBKeyRange.bound([r],[YC(r)],!1,!0);let s=0;return oi(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}ne(e,n){return so(e).get(n).next(r=>r?fu(r):null)}}function so(t){return dt(t,"targets")}function xS(t){return dt(t,"targetGlobal")}function oi(t){return dt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class mz{constructor(e){this.xn=e,this.buffer=new _e(NS),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();NS(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class gz{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qi(n)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await zi(n)}await this.Fn(3e5)})}}class yz{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return E.resolve(Yt.at);const r=new mz(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(AS)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),AS):this.qn(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),Jg()<=ce.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vz{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new yz(r,i)}(this,n)}Bn(e){const n=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Un(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return Vc(e,r)}removeReference(e,n,r){return Vc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Vc(e,n)}Gn(e,n){return function(r,i){let s=!1;return tA(r).tt(o=>eA(r,o,i).next(a=>(a&&(s=!0),E.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const u=this.Gn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),oi(e).delete([0,zt(o.path)])))});i.push(u)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Vc(e,n)}Kn(e,n){const r=oi(e);let i,s=Yt.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Yt.at&&n(new O(tr(i)),s),s=l,i=u):s=Yt.at}).next(()=>{s!==Yt.at&&n(new O(tr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Vc(t,e){return oi(t).put(function(n,r){return{targetId:0,path:zt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.changes=new Hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wz{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Yi(e).put(r)}removeEntry(e,n,r){return Yi(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],ld(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=Ie.newInvalidDocument(n);return Yi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Za(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:Ie.newInvalidDocument(n)};return Yi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Za(n))},(i,s)=>{r={document:this.jn(n,s),size:hd(s)}}).next(()=>r)}getEntries(e,n){let r=Jt();return this.zn(e,n,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,n){let r=Jt(),i=new Be(O.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,hd(o))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return E.resolve();let i=new _e(OS);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Za(i.first()),Za(i.last())),o=i.getIterator();let a=o.getNext();return Yi(e).Z({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=O.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&OS(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.j(Za(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),ld(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Yi(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=Jt();for(const u of o){const l=this.jn(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=Jt();const o=PS(n,r),a=PS(n,hn.max());return Yi(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.jn(O.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new _z(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return DS(e).get("remoteDocumentGlobalKey").next(n=>(q(!!n),n))}Qn(e,n){return DS(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=iz(this.yt,n);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return Ie.newInvalidDocument(e)}}function rA(t){return new wz(t)}class _z extends nA{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Hi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new _e((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=wS(this.Yn.yt,o);i=i.add(s.path.popLast());const l=hd(u);r+=l-a.size,n.push(this.Yn.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=wS(this.Yn.yt,o.convertToNoDocument(W.min()));n.push(this.Yn.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),E.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function DS(t){return dt(t,"remoteDocumentGlobal")}function Yi(t){return dt(t,"remoteDocumentsV14")}function Za(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function PS(t,e){const n=e.documentKey.path.toArray();return[t,ld(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function OS(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Z(n[s],r[s]),i)return i;return i=Z(n.length,r.length),i||(i=Z(n[n.length-2],r[r.length-2]),i||Z(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ez{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xu(r.mutation,i,Xt.empty(),Ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=er();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=du();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=er();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Jt();const o=Nu(),a=Nu();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Wr)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),xu(c.mutation,l,c.mutation.getFieldMask(),Ae.now())):o.set(l.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new Ez(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Nu();let i=new Be((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Xt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||te()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=NR();c.forEach(d=>{if(!s.has(d)){const f=kR(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Cw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(er());let a=-1,u=s;return o.next(l=>E.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?E.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,te())).next(c=>({batchId:a,changes:xR(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=du();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=du();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const u=function(l,c){return new Hr(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,Ie.newInvalidDocument(l)))});let o=du();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&xu(l.mutation,u,Xt.empty(),Ae.now()),Rw(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sz{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return E.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:He(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Ow(r.bundledQuery),readTime:He(r.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iz{constructor(){this.overlays=new Be(O.comparator),this.es=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=er();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=er(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Be((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=er(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=er(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return E.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Pw(n,r));let s=this.es.get(n);s===void 0&&(s=te(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.ns=new _e(rt.ss),this.rs=new _e(rt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new rt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new rt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new O(new le([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new le([])),r=new rt(n,e),i=new rt(n,e+1);let s=te();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||Z(e._s,n._s)}static os(e,n){return Z(e._s,n._s)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tz{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new _e(rt.ss)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nw(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new rt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(Z);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),E.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new rt(new O(s),0);let a=new _e(Z);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),E.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){q(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return E.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new rt(n,0),i=this.gs.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kz{constructor(e){this.Es=e,this.docs=new Be(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(n))}getEntries(e,n){let r=Jt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ie.newInvalidDocument(i))}),E.resolve(r)}getAllFromCollection(e,n,r){let i=Jt();const s=new O(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Sw(ZC(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,r,i){U()}As(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bz(this)}getSize(e){return E.resolve(this.size)}}class bz extends nA{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cz{constructor(e){this.persistence=e,this.Rs=new Hi(n=>Os(n),Xl),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.bs=0,this.Ps=new $w,this.targetCount=0,this.vs=Us.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),E.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Us(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.Dn(n),E.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Yt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Cz(this),this.indexManager=new dz,this.remoteDocumentCache=function(r){return new kz(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new QR(n),this.Ns=new Sz(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Iz,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new Tz(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){A("MemoryPersistence","Starting transaction:",e);const i=new Rz(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return E.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class Rz extends tR{constructor(e){super(),this.currentSequenceNumber=e}}class Wf{constructor(e){this.persistence=e,this.Fs=new $w,this.$s=null}static Bs(e){return new Wf(e)}get Ls(){if(this.$s)return this.$s;throw U()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),E.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ls,r=>{const i=O.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return E.or([()=>E.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Az{constructor(e){this.yt=e}$(e,n,r,i){const s=new Uf("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",vS,{unique:!0}),a.createObjectStore("documentMutations")}(e),LS(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=E.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),LS(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",vS,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return E.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Us(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:Zj});u.createIndex("collectionPathOverlayIndex",ez,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",tz,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:jj});u.createIndex("documentKeyIndex",zj),u.createIndex("collectionGroupIndex",qj)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Qj}).createIndex("sequenceNumberIndex",Yj,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Xj}).createIndex("documentKeyIndex",Jj,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=hd(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Us(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>E.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>E.forEach(a,u=>{q(u.userId===s.userId);const l=ns(this.yt,u);return ZR(e,s.userId,l).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const u=new le(o),l=function(c){return[0,zt(c)]}(u);s.push(n.get(l).next(c=>c?E.resolve():(h=>n.put({targetId:0,path:zt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>E.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:Kj});const r=n.store("collectionParents"),i=new Mw,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:zt(u)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const u=new le(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,u],l)=>{const c=tr(a);return s(c.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=fu(i),o=YR(this.yt,s);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new O(le.fromString(l.document.name).popFirst(5)):l.noDocument?O.fromSegments(l.noDocument.path):l.unknownDocument?O.fromSegments(l.unknownDocument.path):U()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>E.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=rA(this.yt),s=new sA(Wf.Bs,this.yt.ie);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:te();ns(this.yt,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),E.forEach(a,(u,l)=>{const c=new st(l),h=qf.re(this.yt,c),d=s.getIndexManager(c),f=Hf.re(c,this.yt,d,s.referenceDelegate);return new iA(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new ly(n,Yt.at),u).next()})})}}function LS(t){t.createObjectStore("targetDocuments",{keyPath:Wj}).createIndex("documentTargetsIndex",Gj,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Hj,{unique:!0}),t.createObjectStore("targetGlobal")}const wm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Fw{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=l,this.Ys=c,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Fw.C())throw new C(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new vz(this,i),this.ii=n+"main",this.yt=new QR(u),this.ri=new Ln(this.ii,this.Xs,new Az(this.yt)),this.Cs=new pz(this.referenceDelegate,this.yt),this.remoteDocumentCache=rA(this.yt),this.Ns=new sz,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,c===!1&&ze("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,wm);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Yt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>jc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(qi(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return eu(e).get("owner").next(n=>E.resolve(this.mi(n)))}gi(e){return jc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=dt(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?E.resolve(!0):eu(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,wm);return!1}}return!(!this.networkEnabled||!this.inForeground)||jc(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&A("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new ly(e,Yt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>jc(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return Hf.re(e,this.yt,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fz(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return qf.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){A("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?rz:o===14?KR:o===13?GR:o===12?nz:o===11?WR:void U();var o;let a;return this.ri.runTransaction(e,i,s,u=>(a=new ly(u,this.Ss?this.Ss.next():Yt.at),n==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new C(S.FAILED_PRECONDITION,eR);return r(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Vi(e){return eu(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(S.FAILED_PRECONDITION,wm)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return eu(e).put("owner",n)}static C(){return Ln.C()}_i(e){const n=eu(e);return n.get("owner").next(r=>this.mi(r)?(A("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):E.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ze(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),wM()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ze("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){ze("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function eu(t){return dt(t,"owner")}function jc(t){return dt(t,"clientMetadata")}function Uw(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bw(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(uS(n))return E.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ud(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,ud(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,r,i){return uS(n)||i.isEqual(W.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Jg()<=ce.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),oy(n)),this.Bi(e,o,n,JC(i,-1)))})}Fi(e,n){let r=new _e(yR(e));return n.forEach((i,s)=>{Rw(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Jg()<=ce.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",oy(n)),this.Ni.getDocumentsMatchingQuery(e,n,hn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xz{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Be(Z),this.Ui=new Hi(s=>Os(s),Xl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iA(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function aA(t,e,n,r){return new xz(t,e,n,r)}async function uA(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=te();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function Nz(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(p=>{const g=u.docVersions.get(f);q(g!==null),p.version.compareTo(g)<0&&(c.applyToRemoteDocument(p,u),p.isValidDocument()&&(p.setReadTime(u.commitVersion),l.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=te();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function lA(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Dz(t,e){const n=M(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(tt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(p,g,_){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let u=Jt(),l=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(cA(s,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!r.isEqual(W.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.qi=i,s))}function cA(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jt();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function Pz(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ia(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Ei(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function sa(t,e,n){const r=M(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qi(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function dd(t,e,n){const r=M(t);let i=W.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=M(a),h=c.Ui.get(l);return h!==void 0?E.resolve(c.qi.get(h)):c.Cs.getTargetData(u,l)}(r,o,nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:te())).next(a=>(fA(r,gR(e),a),{documents:a,Hi:s})))}function hA(t,e){const n=M(t),r=M(n.Cs),i=n.qi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ne(s,e).next(o=>o?o.target:null))}function dA(t,e){const n=M(t),r=n.Ki.get(e)||W.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,JC(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(fA(n,e,i),i))}function fA(t,e,n){let r=t.Ki.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function Oz(t,e,n,r){const i=M(t);let s=te(),o=Jt();for(const l of n){const c=e.Ji(l.metadata.name);l.document&&(s=s.add(c));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),u=await ia(i,function(l){return nn(Sa(le.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>cA(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Cs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Cs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.Wi,c.zi)).next(()=>c.Wi)))}async function Lz(t,e,n=te()){const r=await ia(t,nn(Ow(e.bundledQuery))),i=M(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=He(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(tt.EMPTY_BYTE_STRING,o);return i.qi=i.qi.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function MS(t,e){return`firestore_clients_${t}_${e}`}function $S(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function _m(t,e){return`firestore_targets_${t}_${e}`}class fd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new fd(e,n,i.state,s):(ze("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Du{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new Du(e,r.state,i):(ze("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pd{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=zf();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=rR(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new pd(e,s):(ze("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Vw{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Vw(n.clientId,n.onlineState):(ze("SharedClientState",`Failed to parse online state: ${e}`),null)}}class fy{constructor(){this.activeTargetIds=zf()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Em{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Be(Z),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=MS(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new fy),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(MS(this.persistenceKey,r));if(i){const s=pd.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(_m(this.persistenceKey,e));if(r){const i=Du.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(_m(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return A("SharedClientState","READ",e,n),n}setItem(e,n){A("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){A("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(A("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=Yt.at;if(i!=null)try{const o=JSON.parse(i);q(typeof o=="number"),s=o}catch(o){ze("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Yt.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new fd(this.currentUser,e,n,r),s=$S(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=$S(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=_m(this.persistenceKey,e),s=new Du(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return pd.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return fd.Zi(new st(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return Du.Zi(i,n)}yr(e){return Vw.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);A("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=zf();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class pA{constructor(){this.Lr=new fy,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new fy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mz{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $z={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fz{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uz extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);A("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(u=>(A("RestConnection","Received: ",u),u),u=>{throw Xo("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ea,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=$z[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new FV;a.setWithCredentials(!0),a.listenOnce(LV.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ym.NO_ERROR:const l=a.getResponseJson();A("Connection","XHR received:",JSON.stringify(l)),s(l);break;case ym.TIMEOUT:A("Connection",'RPC "'+e+'" timed out'),o(new C(S.DEADLINE_EXCEEDED,"Request time out"));break;case ym.HTTP_ERROR:const c=a.getStatus();if(A("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(g)>=0?g:S.UNKNOWN}(d.status);o(new C(f,d.message))}else o(new C(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(S.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{A("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=PV(),o=OV(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $V({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");A("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new Fz({Hr:p=>{h?A("Connection","Not sending because WebChannel is closed:",p):(c||(A("Connection","Opening WebChannel transport."),l.open(),c=!0),A("Connection","WebChannel sending:",p),l.send(p))},Jr:()=>l.close()}),f=(p,g,_)=>{p.listen(g,y=>{try{_(y)}catch(m){setTimeout(()=>{throw m},0)}})};return f(l,$c.EventType.OPEN,()=>{h||A("Connection","WebChannel transport opened.")}),f(l,$c.EventType.CLOSE,()=>{h||(h=!0,A("Connection","WebChannel transport closed"),d.io())}),f(l,$c.EventType.ERROR,p=>{h||(h=!0,Xo("Connection","WebChannel transport errored:",p),d.io(new C(S.UNAVAILABLE,"The operation could not be completed")))}),f(l,$c.EventType.MESSAGE,p=>{var g;if(!h){const _=p.data[0];q(!!_);const y=_,m=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(m){A("Connection","WebChannel received error:",m);const v=m.status;let w=function(R){const P=Ke[R];if(P!==void 0)return RR(P)}(v),b=m.message;w===void 0&&(w=S.INTERNAL,b="Unknown error status: "+v+" with message "+m.message),h=!0,d.io(new C(w,b)),l.close()}else A("Connection","WebChannel received:",_),d.ro(_)}}),f(o,MV.STAT_EVENT,p=>{p.stat===KE.PROXY?A("Connection","Detected buffering proxy"):p.stat===KE.NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(){return typeof window<"u"?window:null}function gh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t){return new xj(t,!0)}class jw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new jw(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(ze(n.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new C(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bz extends gA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Pj(this.yt,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?He(s.readTime):W.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=El(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=od(a)?{documents:UR(i,a)}:{query:BR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=OR(i,s.resumeToken):s.snapshotVersion.compareTo(W.min())>0&&(o.readTime=ra(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=Lj(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=El(this.yt),n.removeTarget=e,this.Bo(n)}}class Vz extends gA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Oj(e.writeResults,e.commitTime),r=He(e.commitTime);return this.listener.Zo(r,n)}return q(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=El(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sl(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jz extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(S.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(S.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class zz{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(ze(n),this.ou=!1):A("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qz{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Wi(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=M(a);u._u.add(4),await ka(u),u.gu.set("Unknown"),u._u.delete(4),await rc(u)}(this))})}),this.gu=new zz(r,i)}}async function rc(t){if(Wi(t))for(const e of t.wu)await e(!0)}async function ka(t){for(const e of t.wu)await e(!1)}function Gf(t,e){const n=M(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Hw(n)?qw(n):Ca(n).ko()&&zw(n,e))}function Il(t,e){const n=M(t),r=Ca(n);n.du.delete(e),r.ko()&&yA(n,e),n.du.size===0&&(r.ko()?r.Fo():Wi(n)&&n.gu.set("Unknown"))}function zw(t,e){t.yu.Ot(e.targetId),Ca(t).zo(e)}function yA(t,e){t.yu.Ot(e),Ca(t).Ho(e)}function qw(t){t.yu=new bj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Ca(t).start(),t.gu.uu()}function Hw(t){return Wi(t)&&!Ca(t).No()&&t.du.size>0}function Wi(t){return M(t)._u.size===0}function vA(t){t.yu=void 0}async function Hz(t){t.du.forEach((e,n)=>{zw(t,e)})}async function Wz(t,e){vA(t),Hw(t)?(t.gu.hu(e),qw(t)):t.gu.set("Unknown")}async function Gz(t,e,n){if(t.gu.set("Online"),e instanceof PR&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await md(t,r)}else if(e instanceof ph?t.yu.Kt(e):e instanceof DR?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(W.min()))try{const r=await lA(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(tt.EMPTY_BYTE_STRING,u.snapshotVersion)),yA(i,a);const l=new Ei(u.target,a,1,u.sequenceNumber);zw(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await md(t,r)}}async function md(t,e,n){if(!qi(e))throw e;t._u.add(1),await ka(t),t.gu.set("Offline"),n||(n=()=>lA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await rc(t)})}function wA(t,e){return e().catch(n=>md(t,n,e))}async function ba(t){const e=M(t),n=Pi(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Kz(e);)try{const i=await Pz(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,Qz(e,i)}catch(i){await md(e,i)}_A(e)&&EA(e)}function Kz(t){return Wi(t)&&t.fu.length<10}function Qz(t,e){t.fu.push(e);const n=Pi(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function _A(t){return Wi(t)&&!Pi(t).No()&&t.fu.length>0}function EA(t){Pi(t).start()}async function Yz(t){Pi(t).eu()}async function Xz(t){const e=Pi(t);for(const n of t.fu)e.Xo(n.mutations)}async function Jz(t,e,n){const r=t.fu.shift(),i=Dw.from(r,e,n);await wA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ba(t)}async function Zz(t,e){e&&Pi(t).Yo&&await async function(n,r){if(i=r.code,CR(i)&&i!==S.ABORTED){const s=n.fu.shift();Pi(n).Mo(),await wA(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ba(n)}var i}(t,e),_A(t)&&EA(t)}async function US(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=Wi(n);n._u.add(3),await ka(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await rc(n)}async function py(t,e){const n=M(t);e?(n._u.delete(2),await rc(n)):e||(n._u.add(2),await ka(n),n.gu.set("Unknown"))}function Ca(t){return t.pu||(t.pu=function(e,n,r){const i=M(e);return i.su(),new Bz(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:Hz.bind(null,t),Zr:Wz.bind(null,t),Wo:Gz.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Hw(t)?qw(t):t.gu.set("Unknown")):(await t.pu.stop(),vA(t))})),t.pu}function Pi(t){return t.Iu||(t.Iu=function(e,n,r){const i=M(e);return i.su(),new Vz(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:Yz.bind(null,t),Zr:Zz.bind(null,t),tu:Xz.bind(null,t),Zo:Jz.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await ba(t)):(await t.Iu.stop(),t.fu.length>0&&(A("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ww(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ra(t,e){if(ze("AsyncQueue",`${e}: ${t}`),qi(t))return new C(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=du(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Mo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.Tu=new Be(O.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):U():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class oa{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oa(e,n,Mo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eq{constructor(){this.Au=void 0,this.listeners=[]}}class tq{constructor(){this.queries=new Hi(e=>mR(e),Jl),this.onlineState="Unknown",this.Ru=new Set}}async function Gw(t,e){const n=M(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new eq),i)try{s.Au=await n.onListen(r)}catch(o){const a=Ra(o,`Initialization of query '${oy(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Qw(n)}async function Kw(t,e){const n=M(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function nq(t,e){const n=M(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Qw(n)}function rq(t,e,n){const r=M(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Qw(t){t.Ru.forEach(e=>{e.next()})}class Yw{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new oa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=oa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e){this.yt=e}Ji(e){return sr(this.yt,e)}Yi(e){return e.metadata.exists?FR(this.yt,e.document,!1):Ie.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return He(e)}}class sq{constructor(e,n,r){this.Mu=e,this.localStore=n,this.yt=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=SA(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=le.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new VS(this.yt);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await Oz(this.localStore,new VS(this.yt),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await Lz(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function SA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.key=e}}class TA{constructor(e){this.key=e}}class kA{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=te(),this.mutatedKeys=te(),this.Gu=yR(e),this.Qu=new Mo(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new BS,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Rw(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),g=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?p!==g&&(r.track({type:3,doc:f}),_=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),_=!0,(u&&this.Gu(f,u)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(u||l)&&(a=!0)),_&&(f?(o=o.add(f),s=g?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((l,c)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return f(h)-f(d)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,s.length!==0||u?{snapshot:new oa(this.query,e.Qu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new BS,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=te(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new TA(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new IA(r))}),n}tc(e){this.qu=e.Hi,this.Ku=te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return oa.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class oq{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aq{constructor(e){this.key=e,this.nc=!1}}class uq{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Hi(a=>mR(a),Jl),this.rc=new Map,this.oc=new Set,this.uc=new Be(O.comparator),this.cc=new Map,this.ac=new $w,this.hc={},this.lc=new Map,this.fc=Us.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function lq(t,e){const n=t_(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await ia(n.localStore,nn(e));n.isPrimaryClient&&Gf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Xw(n,e,r,a==="current",o.resumeToken)}return i}async function Xw(t,e,n,r,i){t._c=(h,d,f)=>async function(p,g,_,y){let m=g.view.Wu(_);m.$i&&(m=await dd(p.localStore,g.query,!1).then(({documents:b})=>g.view.Wu(b,m)));const v=y&&y.targetChanges.get(g.targetId),w=g.view.applyChanges(m,p.isPrimaryClient,v);return my(p,g.targetId,w.Xu),w.snapshot}(t,h,d,f);const s=await dd(t.localStore,e,!0),o=new kA(e,s.Hi),a=o.Wu(s.documents),u=tc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);my(t,n,l.Xu);const c=new oq(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function cq(t,e){const n=M(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Jl(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await sa(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Il(n.remoteStore,r.targetId),aa(n,r.targetId)}).catch(zi)):(aa(n,r.targetId),await sa(n.localStore,r.targetId,!0))}async function hq(t,e,n){const r=n_(t);try{const i=await function(s,o){const a=M(s),u=Ae.now(),l=o.reduce((d,f)=>d.add(f.key),te());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Jt(),p=te();return a.Gi.getEntries(d,l).next(g=>{f=g,f.forEach((_,y)=>{y.isValidDocument()||(p=p.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(g=>{c=g;const _=[];for(const y of o){const m=_j(y,c.get(y.key).overlayedDocument);m!=null&&_.push(new Wr(y.key,m,fR(m.value.mapValue),Re.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,_,o)}).next(g=>{h=g;const _=g.applyToLocalDocumentSet(c,p);return a.documentOverlayCache.saveOverlays(d,g.batchId,_)})}).then(()=>({batchId:h.batchId,changes:xR(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.hc[s.currentUser.toKey()];u||(u=new Be(Z)),u=u.insert(o,a),s.hc[s.currentUser.toKey()]=u}(r,i.batchId,n),await Gr(r,i.changes),await ba(r.remoteStore)}catch(i){const s=Ra(i,"Failed to persist write");n.reject(s)}}async function bA(t,e){const n=M(t);try{const r=await Dz(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?q(o.nc):i.removedDocuments.size>0&&(q(o.nc),o.nc=!1))}),await Gr(n,r,e)}catch(r){await zi(r)}}function jS(t,e,n){const r=M(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=M(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.bu(o)&&(u=!0)}),u&&Qw(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dq(t,e,n){const r=M(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Be(O.comparator);o=o.insert(s,Ie.newNoDocument(s,W.min()));const a=te().add(s),u=new ec(W.min(),new Map,new _e(Z),o,a);await bA(r,u),r.uc=r.uc.remove(s),r.cc.delete(e),e_(r)}else await sa(r.localStore,e,!1).then(()=>aa(r,e,n)).catch(zi)}async function fq(t,e){const n=M(t),r=e.batch.batchId;try{const i=await Nz(n.localStore,e);Zw(n,r,null),Jw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gr(n,i)}catch(i){await zi(i)}}async function pq(t,e,n){const r=M(t);try{const i=await function(s,o){const a=M(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(q(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);Zw(r,e,n),Jw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gr(r,i)}catch(i){await zi(i)}}async function mq(t,e){const n=M(t);Wi(n.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=M(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=Ra(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Jw(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Zw(t,e,n){const r=M(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function aa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||CA(t,r)})}function CA(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Il(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),e_(t))}function my(t,e,n){for(const r of n)r instanceof IA?(t.ac.addReference(r.key,e),gq(t,r)):r instanceof TA?(A("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||CA(t,r.key)):U()}function gq(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(A("SyncEngine","New document in limbo: "+n),t.oc.add(r),e_(t))}function e_(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new O(le.fromString(e)),r=t.fc.next();t.cc.set(r,new aq(n)),t.uc=t.uc.insert(n,r),Gf(t.remoteStore,new Ei(nn(Sa(n.path)),r,2,Yt.at))}}async function Gr(t,e,n){const r=M(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,u)=>{o.push(r._c(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Bw.Ci(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,u){const l=M(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>E.forEach(u,h=>E.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>E.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!qi(c))throw c;A("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.qi.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);l.qi=l.qi.insert(h,p)}}}(r.localStore,s))}async function yq(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const r=await uA(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new C(S.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gr(n,r.ji)}}function vq(t,e){const n=M(t),r=n.cc.get(e);if(r&&r.nc)return te().add(r.key);{let i=te();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function wq(t,e){const n=M(t),r=await dd(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&my(n,e.targetId,i.Xu),i}async function _q(t,e){const n=M(t);return dA(n.localStore,e).then(r=>Gr(n,r))}async function Eq(t,e,n,r){const i=M(t),s=await function(o,a){const u=M(o),l=M(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Tn(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):E.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ba(i.remoteStore):n==="acknowledged"||n==="rejected"?(Zw(i,e,r||null),Jw(i,e),function(o,a){M(M(o).mutationQueue).An(a)}(i.localStore,e)):U(),await Gr(i,s)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Sq(t,e){const n=M(t);if(t_(n),n_(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await zS(n,r.toArray());n.dc=!0,await py(n.remoteStore,!0);for(const s of i)Gf(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(aa(n,o),sa(n.localStore,o,!0))),Il(n.remoteStore,o)}),await i,await zS(n,r),function(s){const o=M(s);o.cc.forEach((a,u)=>{Il(o.remoteStore,u)}),o.ac.fs(),o.cc=new Map,o.uc=new Be(O.comparator)}(n),n.dc=!1,await py(n.remoteStore,!1)}}async function zS(t,e,n){const r=M(t),i=[],s=[];for(const o of e){let a;const u=r.rc.get(o);if(u&&u.length!==0){a=await ia(r.localStore,nn(u[0]));for(const l of u){const c=r.ic.get(l),h=await wq(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await hA(r.localStore,o);a=await ia(r.localStore,l),await Xw(r,RA(l),o,!1,a.resumeToken)}i.push(a)}return r.sc.Wo(s),i}function RA(t){return pR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function Iq(t){const e=M(t);return M(M(e.localStore).persistence).vi()}async function Tq(t,e,n,r){const i=M(t);if(i.dc)return void A("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await dA(i.localStore,gR(s[0])),a=ec.createSynthesizedRemoteEventForCurrentChange(e,n==="current",tt.EMPTY_BYTE_STRING);await Gr(i,o,a);break}case"rejected":await sa(i.localStore,e,!0),aa(i,e,r);break;default:U()}}async function kq(t,e,n){const r=t_(t);if(r.dc){for(const i of e){if(r.rc.has(i)){A("SyncEngine","Adding an already active target "+i);continue}const s=await hA(r.localStore,i),o=await ia(r.localStore,s);await Xw(r,RA(s),o.targetId,!1,o.resumeToken),Gf(r.remoteStore,o)}for(const i of n)r.rc.has(i)&&await sa(r.localStore,i,!1).then(()=>{Il(r.remoteStore,i),aa(r,i)}).catch(zi)}}function t_(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vq.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dq.bind(null,e),e.sc.Wo=nq.bind(null,e.eventManager),e.sc.wc=rq.bind(null,e.eventManager),e}function n_(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fq.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pq.bind(null,e),e}function bq(t,e,n){const r=M(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=M(h),p=He(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",g=>f.Ns.getBundleMetadata(g,d.id)).then(g=>!!g&&g.createTime.compareTo(p)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(SA(a));const u=new sq(a,i.localStore,s.yt);let l=await s.mc();for(;l;){const h=await u.Fu(l);h&&o._updateProgress(h),l=await s.mc()}const c=await u.complete();return await Gr(i,c.Lu,void 0),await function(h,d){const f=M(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ns.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Bu)}catch(a){return Xo("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class AA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=nc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return aA(this.persistence,new oA,e.initialUser,this.yt)}yc(e){return new sA(Wf.Bs,this.yt)}gc(e){return new pA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xA extends AA{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await n_(this.Ac.syncEngine),await ba(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return aA(this.persistence,new oA,e.initialUser,this.yt)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new gz(r,e.asyncQueue,n)}Ec(e,n){const r=new ej(n,this.persistence);return new ZV(e.asyncQueue,r)}yc(e){const n=Uw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new Fw(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,mA(),gh(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new pA}}class Cq extends xA{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof Em&&(this.sharedClientState.syncEngine={Fr:Eq.bind(null,n),$r:Tq.bind(null,n),Br:kq.bind(null,n),vi:Iq.bind(null,n),Mr:_q.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await Sq(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=mA();if(!Em.C(n))throw new C(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Uw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Em(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class r_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yq.bind(null,this.syncEngine),await py(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tq}createDatastore(e){const n=nc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Uz(i));var i;return function(s,o,a,u){return new jz(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>jS(this.syncEngine,a,0),o=FS.C()?new FS:new Mz,new qz(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new uq(r,i,s,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=M(e);A("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ka(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t,e,n){if(!n)throw new C(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NA(t,e,n,r){if(e===!0&&r===!0)throw new C(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qS(t){if(!O.isDocumentKey(t))throw new C(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function HS(t){if(O.isDocumentKey(t))throw new C(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function fe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kf(t);throw new C(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function DA(t,e){if(e<=0)throw new C(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=new Map;class GS{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,NA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new GS({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new GS(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new VV;switch(n.type){case"gapi":const r=n.client;return new HV(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=WS.get(e);n&&(A("ComponentProvider","Removing Datastore"),WS.delete(e),n.terminate())}(this),Promise.resolve()}}function Rq(t,e,n,r={}){var i;const s=(t=fe(t,ic))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Xo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=st.MOCK_USER;else{o=Pk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new C(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new st(u)}t._authCredentials=new jV(new KC(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class It{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new It(this.firestore,e,this._query)}}class or extends It{constructor(e,n,r){super(e,n,Sa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new O(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function s_(t,e,...n){if(t=j(t),i_("collection","path",e),t instanceof ic){const r=le.fromString(e,...n);return HS(r),new or(t,null,r)}{if(!(t instanceof ke||t instanceof or))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return HS(r),new or(t.firestore,null,r)}}function Aq(t,e){if(t=fe(t,ic),i_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new It(t,null,function(n){return new Hr(le.emptyPath(),n)}(e))}function gd(t,e,...n){if(t=j(t),arguments.length===1&&(e=QC.R()),i_("doc","path",e),t instanceof ic){const r=le.fromString(e,...n);return qS(r),new ke(t,null,new O(r))}{if(!(t instanceof ke||t instanceof or))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return qS(r),new ke(t.firestore,t instanceof or?t.converter:null,new O(r))}}function PA(t,e){return t=j(t),e=j(e),(t instanceof ke||t instanceof or)&&(e instanceof ke||e instanceof or)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function OA(t,e){return t=j(t),e=j(e),t instanceof It&&e instanceof It&&t.firestore===e.firestore&&Jl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xq{constructor(e,n){this.Pc=e,this.yt=n,this.metadata=new at,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new iq(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nq{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=M(r),o=El(s.yt)+"/documents",a={documents:i.map(h=>_l(s.yt,h))},u=await s._o("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=Dj(s.yt,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());q(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ta(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=O.fromPath(r);this.mutations.push(new Aw(i,this.precondition(i)))}),await async function(n,r){const i=M(n),s=El(i.yt)+"/documents",o={writes:r.map(a=>Sl(i.yt,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw U();n=W.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(W.min())?Re.exists(!1):Re.updateTime(n):Re.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(W.min()))throw new C(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Re.updateTime(n)}return Re.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dq{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new jw(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new Nq(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!Yl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!CR(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pq{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=QC.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ra(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function LA(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function MA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await o_(t);A("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>US(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>US(e.remoteStore,s)),t.onlineComponents=e}async function o_(t){return t.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await LA(t,new AA)),t.offlineComponents}async function Yf(t){return t.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await MA(t,new r_)),t.onlineComponents}function $A(t){return o_(t).then(e=>e.persistence)}function a_(t){return o_(t).then(e=>e.localStore)}function FA(t){return Yf(t).then(e=>e.remoteStore)}function u_(t){return Yf(t).then(e=>e.syncEngine)}function Oq(t){return Yf(t).then(e=>e.datastore)}async function ua(t){const e=await Yf(t),n=e.eventManager;return n.onListen=lq.bind(null,e.syncEngine),n.onUnlisten=cq.bind(null,e.syncEngine),n}function Lq(t){return t.asyncQueue.enqueue(async()=>{const e=await $A(t),n=await FA(t);return e.setNetworkEnabled(!0),function(r){const i=M(r);return i._u.delete(0),rc(i)}(n)})}function Mq(t){return t.asyncQueue.enqueue(async()=>{const e=await $A(t),n=await FA(t);return e.setNetworkEnabled(!1),async function(r){const i=M(r);i._u.add(0),await ka(i),i.gu.set("Offline")}(n)})}function $q(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=M(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Ra(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await a_(t),e,n)),n.promise}function UA(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Qf({next:h=>{s.enqueueAndForget(()=>Kw(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new C(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new C(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Yw(Sa(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Gw(i,c)}(await ua(t),t.asyncQueue,e,n,r)),r.promise}function Fq(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await dd(r,i,!0),a=new kA(i,o.Hi),u=a.Wu(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=Ra(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await a_(t),e,n)),n.promise}function BA(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Qf({next:h=>{s.enqueueAndForget(()=>Kw(i,c)),h.fromCache&&a.source==="server"?u.reject(new C(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Yw(o,l,{includeMetadataChanges:!0,Nu:!0});return Gw(i,c)}(await ua(t),t.asyncQueue,e,n,r)),r.promise}function Uq(t,e){const n=new Qf(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){M(r).Ru.add(i),i.next()}(await ua(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){M(r).Ru.delete(i)}(await ua(t),n))}}function Bq(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new xq(u,l)}(function(u,l){if(u instanceof Uint8Array)return KS(u,l);if(u instanceof ArrayBuffer)return KS(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,nc(e));t.asyncQueue.enqueueAndForget(async()=>{bq(await u_(t),i,r)})}function Vq(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await a_(t),e))}class jq{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new jw(this,"async_queue_retry"),this.Wc=()=>{const n=gh();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=gh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new at;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!qi(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ze("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Ww.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&U()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function gy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class zq{constructor(){this._progressObserver={},this._taskCompletionResolver=new at,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qq=-1;class Ve extends ic{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new jq,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||VA(this),this._firestoreClient.terminate()}}function ft(t){return t._firestoreClient||VA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function VA(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new tj(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Pq(t._authCredentials,t._appCheckCredentials,t._queue,r)}function Hq(t,e){zA(t=fe(t,Ve));const n=ft(t),r=t._freezeSettings(),i=new r_;return jA(n,i,new xA(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Wq(t){zA(t=fe(t,Ve));const e=ft(t),n=t._freezeSettings(),r=new r_;return jA(e,r,new Cq(r,n.cacheSizeBytes))}function jA(t,e,n){const r=new at;return t.asyncQueue.enqueue(async()=>{try{await LA(t,n),await MA(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===S.FAILED_PRECONDITION||o.code===S.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;Xo("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function Gq(t){if(t._initialized&&!t._terminated)throw new C(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new at;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Ln.C())return Promise.resolve();const r=n+"main";await Ln.delete(r)}(Uw(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function Kq(t){return function(e){const n=new at;return e.asyncQueue.enqueueAndForget(async()=>mq(await u_(e),n)),n.promise}(ft(t=fe(t,Ve)))}function Qq(t){return Lq(ft(t=fe(t,Ve)))}function Yq(t){return Mq(ft(t=fe(t,Ve)))}function Xq(t,e){const n=ft(t=fe(t,Ve)),r=new zq;return Bq(n,t._databaseId,e,r),r}function Jq(t,e){return Vq(ft(t=fe(t,Ve)),e).then(n=>n?new It(t,null,n.query):null)}function zA(t){if(t._initialized||t._terminated)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cr(tt.fromBase64String(e))}catch(n){throw new C(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cr(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zq=/^__.*__$/;class e3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ia(e,this.data,n,this.fieldTransforms)}}class qA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function HA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Jf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Jf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return yd(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(HA(this.sa)&&Zq.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class t3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||nc(e)}da(e,n,r,i=!1){return new Jf({sa:e,methodName:n,fa:r,path:qe.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ys(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new t3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zf(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);d_("Data must be an object, but it was:",o,r);const a=KA(r,o);let u,l;if(s.merge)u=new Xt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=yy(e,h,n);if(!o.contains(d))throw new C(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);YA(c,d)||c.push(d)}u=new Xt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new e3(new yt(a),u,l)}class sc extends Qs{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sc}}function WA(t,e,n){return new Jf({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class l_ extends Qs{_toFieldTransform(e){return new Zl(e.path,new ta)}isEqual(e){return e instanceof l_}}class n3 extends Qs{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=WA(this,e,!0),r=this._a.map(s=>Xs(s,n)),i=new Ls(r);return new Zl(e.path,i)}isEqual(e){return this===e}}class r3 extends Qs{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=WA(this,e,!0),r=this._a.map(s=>Xs(s,n)),i=new Ms(r);return new Zl(e.path,i)}isEqual(e){return this===e}}class i3 extends Qs{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new na(e.yt,_R(e.yt,this.wa));return new Zl(e.path,n)}isEqual(e){return this===e}}function c_(t,e,n,r){const i=t.da(1,e,n);d_("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();Ks(r,(u,l)=>{const c=f_(e,u,n);l=j(l);const h=i.ca(c);if(l instanceof sc)s.push(c);else{const d=Xs(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Xt(s);return new qA(o,a,i.fieldTransforms)}function h_(t,e,n,r,i,s){const o=t.da(1,e,n),a=[yy(e,r,n)],u=[i];if(s.length%2!=0)throw new C(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(yy(e,s[d])),u.push(s[d+1]);const l=[],c=yt.empty();for(let d=a.length-1;d>=0;--d)if(!YA(l,a[d])){const f=a[d];let p=u[d];p=j(p);const g=o.ca(f);if(p instanceof sc)l.push(f);else{const _=Xs(p,g);_!=null&&(l.push(f),c.set(f,_))}}const h=new Xt(l);return new qA(c,h,o.fieldTransforms)}function GA(t,e,n,r=!1){return Xs(n,t.da(r?4:3,e))}function Xs(t,e){if(QA(t=j(t)))return d_("Unsupported field value:",e,t),KA(t,e);if(t instanceof Qs)return function(n,r){if(!HA(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Xs(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=j(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _R(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ae.fromDate(n);return{timestampValue:ra(r.yt,i)}}if(n instanceof Ae){const i=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ra(r.yt,i)}}if(n instanceof Xf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof cr)return{bytesValue:OR(r.yt,n._byteString)};if(n instanceof ke){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xw(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Kf(n)}`)}(t,e)}function KA(t,e){const n={};return nR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ks(t,(r,i)=>{const s=Xs(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function QA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Xf||t instanceof cr||t instanceof ke||t instanceof Qs)}function d_(t,e,n){if(!QA(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Kf(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function yy(t,e,n){if((e=j(e))instanceof Oi)return e._internalPath;if(typeof e=="string")return f_(t,e);throw yd("Field path arguments must be of type string or ",t,!1,void 0,n)}const s3=new RegExp("[~\\*/\\[\\]]");function f_(t,e,n){if(e.search(s3)>=0)throw yd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oi(...e.split("."))._internalPath}catch{throw yd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new C(S.INVALID_ARGUMENT,a+t+u)}function YA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new o3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ep("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class o3 extends Tl{data(){return super.data()}}function ep(t,e){return typeof e=="string"?f_(t,e):e instanceof Oi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class p_{}class oc extends p_{}function mr(t,e,...n){let r=[];e instanceof p_&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof m_).length,o=i.filter(a=>a instanceof tp).length;if(s>1||s>0&&o>0)throw new C(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class tp extends oc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tp(e,n,r)}_apply(e){const n=this._parse(e);return ZA(e._query,n),new It(e.firestore,e.converter,sy(e._query,n))}_parse(e){const n=Ys(e.firestore);return function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new C(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){YS(c,l);const d=[];for(const f of c)d.push(QS(a,i,f));h={arrayValue:{values:d}}}else h=QS(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||YS(c,l),h=GA(o,s,c,l==="in"||l==="not-in");return ie.create(u,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function a3(t,e,n){const r=e,i=ep("where",t);return tp._create(i,r,n)}class m_ extends p_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new m_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ge.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)ZA(s,a),s=sy(s,a)}(e._query,n),new It(e.firestore,e.converter,sy(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class g_ extends oc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new g_(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Lo(i,s);return function(a,u){if(bw(a)===null){const l=Bf(a);l!==null&&ex(a,l,u.field)}}(r,o),o}(e._query,this._field,this._direction);return new It(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Hr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function u3(t,e="asc"){const n=e,r=ep("orderBy",t);return g_._create(r,n)}class np extends oc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new np(e,n,r)}_apply(e){return new It(e.firestore,e.converter,ud(e._query,this._limit,this._limitType))}}function l3(t){return DA("limit",t),np._create("limit",t,"F")}function c3(t){return DA("limitToLast",t),np._create("limitToLast",t,"L")}class rp extends oc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new rp(e,n,r)}_apply(e){const n=JA(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(r,i){return new Hr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function h3(...t){return rp._create("startAt",t,!0)}function d3(...t){return rp._create("startAfter",t,!1)}class ip extends oc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new ip(e,n,r)}_apply(e){const n=JA(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(r,i){return new Hr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function f3(...t){return ip._create("endBefore",t,!1)}function p3(...t){return ip._create("endAt",t,!0)}function JA(t,e,n,r){if(n[0]=j(n[0]),n[0]instanceof Tl)return function(i,s,o,a,u){if(!a)throw new C(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Es(i))if(c.field.isKeyField())l.push(Ps(s,a.key));else{const h=a.data.field(c.field);if(Tw(h))throw new C(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new C(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Di(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ys(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new C(S.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const p=l[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new C(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof p}`);if(!Cw(s)&&p.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${p}' contains a slash.`);const g=s.path.child(le.fromString(p));if(!O.isDocumentKey(g))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const _=new O(g);d.push(Ps(o,_))}else{const g=GA(a,u,p);d.push(g)}}return new Di(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function QS(t,e,n){if(typeof(n=j(n))=="string"){if(n==="")throw new C(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cw(e)&&n.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!O.isDocumentKey(r))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ps(t,new O(r))}if(n instanceof ke)return Ps(t,n._key);throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kf(n)}.`)}function YS(t,e){if(!Array.isArray(t)||t.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new C(S.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ZA(t,e){if(e.isInequality()){const r=Bf(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new C(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=bw(t);s!==null&&ex(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ex(t,e,n){if(!n.isEqual(e))throw new C(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class y_{convertValue(e,n="none"){switch(Ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const r={};return Ks(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Xf(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=iR(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yl(e));default:return null}}convertTimestamp(e){const n=xi(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);q(qR(r));const i=new Ai(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||ze(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class m3 extends y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Br extends Tl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ep("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Pu extends Br{data(e={}){return super.data(e)}}class Li{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ds(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pu(this._firestore,this._userDataWriter,r.key,r,new ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Pu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ds(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Pu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ds(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:g3(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function g3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}function tx(t,e){return t instanceof Br&&e instanceof Br?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Li&&e instanceof Li&&t._firestore===e._firestore&&OA(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y3(t){t=fe(t,ke);const e=fe(t.firestore,Ve);return UA(ft(e),t._key).then(n=>w_(e,t,n))}class Js extends y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new cr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function v3(t){t=fe(t,ke);const e=fe(t.firestore,Ve),n=ft(e),r=new Js(e);return $q(n,t._key).then(i=>new Br(e,r,t._key,i,new ds(i!==null&&i.hasLocalMutations,!0),t.converter))}function w3(t){t=fe(t,ke);const e=fe(t.firestore,Ve);return UA(ft(e),t._key,{source:"server"}).then(n=>w_(e,t,n))}function _3(t){t=fe(t,It);const e=fe(t.firestore,Ve),n=ft(e),r=new Js(e);return XA(t._query),BA(n,t._query).then(i=>new Li(e,r,t,i))}function E3(t){t=fe(t,It);const e=fe(t.firestore,Ve),n=ft(e),r=new Js(e);return Fq(n,t._query).then(i=>new Li(e,r,t,i))}function S3(t){t=fe(t,It);const e=fe(t.firestore,Ve),n=ft(e),r=new Js(e);return BA(n,t._query,{source:"server"}).then(i=>new Li(e,r,t,i))}function XS(t,e,n){t=fe(t,ke);const r=fe(t.firestore,Ve),i=sp(t.converter,e,n);return ac(r,[Zf(Ys(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Re.none())])}function JS(t,e,n,...r){t=fe(t,ke);const i=fe(t.firestore,Ve),s=Ys(i);let o;return o=typeof(e=j(e))=="string"||e instanceof Oi?h_(s,"updateDoc",t._key,e,n,r):c_(s,"updateDoc",t._key,e),ac(i,[o.toMutation(t._key,Re.exists(!0))])}function I3(t){return ac(fe(t.firestore,Ve),[new Ta(t._key,Re.none())])}function T3(t,e){const n=fe(t.firestore,Ve),r=gd(t),i=sp(t.converter,e);return ac(n,[Zf(Ys(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Re.exists(!1))]).then(()=>r)}function v_(t,...e){var n,r,i;t=j(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||gy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(gy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof ke)l=fe(t.firestore,Ve),c=Sa(t._key.path),u={next:h=>{e[o]&&e[o](w_(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=fe(t,It);l=fe(h.firestore,Ve),c=h._query;const d=new Js(l);u={next:f=>{e[o]&&e[o](new Li(l,d,h,f))},error:e[o+1],complete:e[o+2]},XA(t._query)}return function(h,d,f,p){const g=new Qf(p),_=new Yw(d,g,f);return h.asyncQueue.enqueueAndForget(async()=>Gw(await ua(h),_)),()=>{g.bc(),h.asyncQueue.enqueueAndForget(async()=>Kw(await ua(h),_))}}(ft(l),c,a,u)}function k3(t,e){return Uq(ft(t=fe(t,Ve)),gy(e)?e:{next:e})}function ac(t,e){return function(n,r){const i=new at;return n.asyncQueue.enqueueAndForget(async()=>hq(await u_(n),r,i)),i.promise}(ft(t),e)}function w_(t,e,n){const r=n.docs.get(e._key),i=new Js(t);return new Br(t,i,e._key,r,new ds(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b3={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ys(e)}set(e,n,r){this._verifyNotCommitted();const i=ai(e,this._firestore),s=sp(i.converter,n,r),o=Zf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Re.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ai(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof Oi?h_(this._dataReader,"WriteBatch.update",s._key,n,r,i):c_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Re.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ai(e,this._firestore);return this._mutations=this._mutations.concat(new Ta(n._key,Re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ai(t,e){if((t=j(t)).firestore!==e)throw new C(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ys(e)}get(e){const n=ai(e,this._firestore),r=new m3(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return U();const s=i[0];if(s.isFoundDocument())return new Tl(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Tl(this._firestore,r,n._key,null,n.converter);throw U()})}set(e,n,r){const i=ai(e,this._firestore),s=sp(i.converter,n,r),o=Zf(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=ai(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof Oi?h_(this._dataReader,"Transaction.update",s._key,n,r,i):c_(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=ai(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ai(e,this._firestore),r=new Js(this._firestore);return super.get(e).then(i=>new Br(this._firestore,r,n._key,i._document,new ds(!1,!1),n.converter))}}function A3(t,e,n){t=fe(t,Ve);const r=Object.assign(Object.assign({},b3),n);return function(i){if(i.maxAttempts<1)throw new C(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new at;return i.asyncQueue.enqueueAndForget(async()=>{const u=await Oq(i);new Dq(i.asyncQueue,u,o,s,a).run()}),a.promise}(ft(t),i=>e(new R3(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x3(){return new sc("deleteField")}function N3(){return new l_("serverTimestamp")}function D3(...t){return new n3("arrayUnion",t)}function P3(...t){return new r3("arrayRemove",t)}function O3(t){return new i3("increment",t)}(function(t,e=!0){(function(n){Ea=n})(Ui),$r(new kn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ve(new zV(n.getProvider("auth-internal")),new GV(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ai(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Sn(QE,"3.8.1",t),Sn(QE,"3.8.1","esm2017")})();const L3="@firebase/firestore-compat",M3="0.3.1";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function eI(){if(!nj())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}let vd=class{constructor(e){this._delegate=e}static fromBase64String(e){return eI(),new vd(cr.fromBase64String(e))}static fromUint8Array(e){return ZS(),new vd(cr.fromUint8Array(e))}toBase64(){return eI(),this._delegate.toBase64()}toUint8Array(){return ZS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t){return $3(t,["next","error","complete"])}function $3(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{enableIndexedDbPersistence(e,n){return Hq(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return Wq(e._delegate)}clearIndexedDbPersistence(e){return Gq(e._delegate)}}class nx{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ai||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Xo("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){Rq(this._delegate,e,n,r)}enableNetwork(){return Qq(this._delegate)}disableNetwork(){return Yq(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,NA("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Kq(this._delegate)}onSnapshotsInSync(e){return k3(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new la(this,s_(this._delegate,e))}catch(n){throw Ut(n,"collection()","Firestore.collection()")}}doc(e){try{return new wn(this,gd(this._delegate,e))}catch(n){throw Ut(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ft(this,Aq(this._delegate,e))}catch(n){throw Ut(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return A3(this._delegate,n=>e(new rx(this,n)))}batch(){return ft(this._delegate),new ix(new C3(this._delegate,e=>ac(this._delegate,e)))}loadBundle(e){return Xq(this._delegate,e)}namedQuery(e){return Jq(this._delegate,e).then(n=>n?new Ft(this,n):null)}}class op extends y_{constructor(e){super(),this.firestore=e}convertBytes(e){return new vd(new cr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return wn.forKey(n,this.firestore,null)}}function U3(t){UV(t)}class rx{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new op(e)}get(e){const n=fs(e);return this._delegate.get(n).then(r=>new kl(this._firestore,new Br(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=fs(e);return r?(__("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=fs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=fs(e);return this._delegate.delete(n),this}}class ix{constructor(e){this._delegate=e}set(e,n,r){const i=fs(e);return r?(__("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=fs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=fs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Bs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Pu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new bl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Bs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Bs(e,new op(e),n),i.set(n,s)),s}}Bs.INSTANCES=new WeakMap;class wn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new op(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new wn(n,new ke(n._delegate,r,new O(e)))}static forKey(e,n,r){return new wn(n,new ke(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new la(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new la(this.firestore,s_(this._delegate,e))}catch(n){throw Ut(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=j(e),e instanceof ke?PA(this._delegate,e):!1}set(e,n){n=__("DocumentReference.set",n);try{return n?XS(this._delegate,e,n):XS(this._delegate,e)}catch(r){throw Ut(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?JS(this._delegate,e):JS(this._delegate,e,n,...r)}catch(i){throw Ut(i,"updateDoc()","DocumentReference.update()")}}delete(){return I3(this._delegate)}onSnapshot(...e){const n=sx(e),r=ox(e,i=>new kl(this.firestore,new Br(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return v_(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=v3(this._delegate):(e==null?void 0:e.source)==="server"?n=w3(this._delegate):n=y3(this._delegate),n.then(r=>new kl(this.firestore,new Br(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new wn(this.firestore,e?this._delegate.withConverter(Bs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ut(t,e,n){return t.message=t.message.replace(e,n),t}function sx(t){for(const e of t)if(typeof e=="object"&&!vy(e))return e;return{}}function ox(t,e){var n,r;let i;return vy(t[0])?i=t[0]:vy(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class kl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new wn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return tx(this._delegate,e._delegate)}}class bl extends kl{data(e){const n=this._delegate.data(e);return BV(n!==void 0),n}}class Ft{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new op(e)}where(e,n,r){try{return new Ft(this.firestore,mr(this._delegate,a3(e,n,r)))}catch(i){throw Ut(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ft(this.firestore,mr(this._delegate,u3(e,n)))}catch(r){throw Ut(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ft(this.firestore,mr(this._delegate,l3(e)))}catch(n){throw Ut(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ft(this.firestore,mr(this._delegate,c3(e)))}catch(n){throw Ut(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ft(this.firestore,mr(this._delegate,h3(...e)))}catch(n){throw Ut(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ft(this.firestore,mr(this._delegate,d3(...e)))}catch(n){throw Ut(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ft(this.firestore,mr(this._delegate,f3(...e)))}catch(n){throw Ut(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ft(this.firestore,mr(this._delegate,p3(...e)))}catch(n){throw Ut(n,"endAt()","Query.endAt()")}}isEqual(e){return OA(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=E3(this._delegate):(e==null?void 0:e.source)==="server"?n=S3(this._delegate):n=_3(this._delegate),n.then(r=>new wy(this.firestore,new Li(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=sx(e),r=ox(e,i=>new wy(this.firestore,new Li(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return v_(this._delegate,n,r)}withConverter(e){return new Ft(this.firestore,e?this._delegate.withConverter(Bs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class B3{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new bl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class wy{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ft(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new bl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new B3(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new bl(this._firestore,r))})}isEqual(e){return tx(this._delegate,e._delegate)}}class la extends Ft{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new wn(this.firestore,e):null}doc(e){try{return e===void 0?new wn(this.firestore,gd(this._delegate)):new wn(this.firestore,gd(this._delegate,e))}catch(n){throw Ut(n,"doc()","CollectionReference.doc()")}}add(e){return T3(this._delegate,e).then(n=>new wn(this.firestore,n))}isEqual(e){return PA(this._delegate,e._delegate)}withConverter(e){return new la(this.firestore,e?this._delegate.withConverter(Bs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function fs(t){return fe(t,ke)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(...e){this._delegate=new Oi(...e)}static documentId(){return new E_(qe.keyField().canonicalString())}isEqual(e){return e=j(e),e instanceof Oi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this._delegate=e}static serverTimestamp(){const e=N3();return e._methodName="FieldValue.serverTimestamp",new ss(e)}static delete(){const e=x3();return e._methodName="FieldValue.delete",new ss(e)}static arrayUnion(...e){const n=D3(...e);return n._methodName="FieldValue.arrayUnion",new ss(n)}static arrayRemove(...e){const n=P3(...e);return n._methodName="FieldValue.arrayRemove",new ss(n)}static increment(e){const n=O3(e);return n._methodName="FieldValue.increment",new ss(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V3={Firestore:nx,GeoPoint:Xf,Timestamp:Ae,Blob:vd,Transaction:rx,WriteBatch:ix,DocumentReference:wn,DocumentSnapshot:kl,Query:Ft,QueryDocumentSnapshot:bl,QuerySnapshot:wy,CollectionReference:la,FieldPath:E_,FieldValue:ss,setLogLevel:U3,CACHE_SIZE_UNLIMITED:qq};function j3(t,e){t.INTERNAL.registerComponent(new kn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},V3)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z3(t){j3(t,(e,n)=>new nx(e,n,new F3)),t.registerVersion(L3,M3)}z3(Bn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="firebasestorage.googleapis.com",ux="storageBucket",q3=2*60*1e3,H3=10*60*1e3,W3=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Nt{constructor(e,n,r=0){super(Sm(e),`Firebase Storage: ${n} (${Sm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Sm(t){return"storage/"+t}function S_(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe("unknown",t)}function G3(t){return new Oe("object-not-found","Object '"+t+"' does not exist.")}function K3(t){return new Oe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Q3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe("unauthenticated",t)}function Y3(){return new Oe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function X3(t){return new Oe("unauthorized","User does not have permission to access '"+t+"'.")}function lx(){return new Oe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function cx(){return new Oe("canceled","User canceled the upload/download.")}function J3(t){return new Oe("invalid-url","Invalid URL '"+t+"'.")}function Z3(t){return new Oe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function e4(){return new Oe("no-default-bucket","No default bucket found. Did you set the '"+ux+"' property when initializing the app?")}function hx(){return new Oe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function t4(){return new Oe("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function n4(){return new Oe("no-download-url","The given file does not have any download URLs.")}function r4(t){return new Oe("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $o(t){return new Oe("invalid-argument",t)}function dx(){return new Oe("app-deleted","The Firebase app was deleted.")}function fx(t){return new Oe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ou(t,e){return new Oe("invalid-format","String does not match format '"+t+"': "+e)}function tu(t){throw new Oe("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(r.path==="")return r;throw Z3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},g=n===ax?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",y=new RegExp(`^https?://${g}/${i}/${_}`,"i"),v=[{regex:a,indices:u,postModify:s},{regex:f,indices:p,postModify:l},{regex:y,indices:{bucket:1,path:2},postModify:l}];for(let w=0;w<v.length;w++){const b=v[w],R=b.regex.exec(e);if(R){const P=R[b.indices.bucket];let $=R[b.indices.path];$||($=""),r=new xt(P,$),b.postModify(r);break}}if(r==null)throw J3(e);return r}}class i4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s4(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let l=!1;function c(..._){l||(l=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(f,u())},_)}function d(){s&&clearTimeout(s)}function f(_,...y){if(l){d();return}if(_){d(),c.call(null,_,...y);return}if(u()||o){d(),c.call(null,_,...y);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let p=!1;function g(_){p||(p=!0,d(),!l&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function o4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(t){return t!==void 0}function u4(t){return typeof t=="function"}function l4(t){return typeof t=="object"&&!Array.isArray(t)}function ap(t){return typeof t=="string"||t instanceof String}function tI(t){return I_()&&t instanceof Blob}function I_(){return typeof Blob<"u"&&!hf()}function _y(t,e,n,r){if(r<e)throw $o(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $o(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function px(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ss;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ss||(Ss={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e,n,r,i,s,o,a,u,l,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new zc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ss.NO_ERROR,u=s.getStatus();if(!a||mx(u,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Ss.ABORT;r(!1,new zc(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new zc(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());a4(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=S_();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?dx():cx();o(u)}else{const u=lx();o(u)}};this.canceled_?n(!1,new zc(!1,null,!0)):this.backoffId_=s4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&o4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function h4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function d4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function f4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function p4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function m4(t,e,n,r,i,s,o=!0){const a=px(t.urlParams),u=t.url+a,l=Object.assign({},t.headers);return f4(l,e),h4(l,n),d4(l,s),p4(l,r),new c4(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function y4(...t){const e=g4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(I_())return new Blob(t);throw new Oe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function v4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(t){if(typeof atob>"u")throw r4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Im{constructor(e,n){this.data=e,this.contentType=n||null}}function gx(t,e){switch(t){case _n.RAW:return new Im(yx(e));case _n.BASE64:case _n.BASE64URL:return new Im(vx(t,e));case _n.DATA_URL:return new Im(E4(e),S4(e))}throw S_()}function yx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _4(t){let e;try{e=decodeURIComponent(t)}catch{throw Ou(_n.DATA_URL,"Malformed data URL.")}return yx(e)}function vx(t,e){switch(t){case _n.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ou(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case _n.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ou(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=w4(e)}catch(i){throw i.message.includes("polyfill")?i:Ou(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class wx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ou(_n.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=I4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function E4(t){const e=new wx(t);return e.base64?vx(_n.BASE64,e.rest):_4(e.rest)}function S4(t){return new wx(t).contentType}function I4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n){let r=0,i="";tI(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(tI(this.data_)){const r=this.data_,i=v4(r,e,n);return i===null?null:new _r(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new _r(r,!0)}}static getBlob(...e){if(I_()){const n=e.map(r=>r instanceof _r?r.data_:r);return new _r(y4.apply(null,n))}else{const n=e.map(o=>ap(o)?gx(_n.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new _r(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t){let e;try{e=JSON.parse(t)}catch{return null}return l4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function k4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function _x(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b4(t,e){return e}class Mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||b4}}let qc=null;function C4(t){return!ap(t)||t.length<2?t:_x(t)}function up(){if(qc)return qc;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));function e(s,o){return C4(o)}const n=new Mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Mt("size");return i.xform=r,t.push(i),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),qc=t,qc}function R4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new xt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function A4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return R4(r,t),r}function Ex(t,e,n){const r=T_(e);return r===null?null:A4(t,r,n)}function x4(t,e,n,r){const i=T_(e);if(i===null||!ap(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),f=Gi(d,n,r),p=px({alt:"media",token:l});return f+p})[0]}function k_(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="prefixes",rI="items";function N4(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[nI])for(const i of n[nI]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new xt(e,s));r.prefixes.push(o)}if(n[rI])for(const i of n[rI]){const s=t._makeStorageReference(new xt(e,i.name));r.items.push(s)}return r}function D4(t,e,n){const r=T_(n);return r===null?null:N4(t,e,r)}class Kr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){if(!t)throw S_()}function lp(t,e){function n(r,i){const s=Ex(t,i,e);return ar(s!==null),s}return n}function P4(t,e){function n(r,i){const s=D4(t,e,i);return ar(s!==null),s}return n}function O4(t,e){function n(r,i){const s=Ex(t,i,e);return ar(s!==null),x4(s,i,t.host,t._protocol)}return n}function Aa(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Y3():i=Q3():n.getStatus()===402?i=K3(t.bucket):n.getStatus()===403?i=X3(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function cp(t){const e=Aa(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=G3(t.path)),s.serverResponse=i.serverResponse,s}return n}function Sx(t,e,n){const r=e.fullServerUrl(),i=Gi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Kr(i,s,lp(t,n),o);return a.errorHandler=cp(e),a}function L4(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Gi(o,t.host,t._protocol),u="GET",l=t.maxOperationRetryTime,c=new Kr(a,u,P4(t,e.bucket),l);return c.urlParams=s,c.errorHandler=Aa(e),c}function M4(t,e,n){const r=e.fullServerUrl(),i=Gi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Kr(i,s,O4(t,n),o);return a.errorHandler=cp(e),a}function $4(t,e,n,r){const i=e.fullServerUrl(),s=Gi(i,t.host,t._protocol),o="PATCH",a=k_(n,r),u={"Content-Type":"application/json; charset=utf-8"},l=t.maxOperationRetryTime,c=new Kr(s,o,lp(t,r),l);return c.headers=u,c.body=a,c.errorHandler=cp(e),c}function F4(t,e){const n=e.fullServerUrl(),r=Gi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,l){}const a=new Kr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=cp(e),a}function U4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ix(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=U4(null,e)),r}function B4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let w=0;w<2;w++)v=v+Math.random().toString().slice(2);return v}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=Ix(e,r,i),c=k_(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+u+"--",f=_r.getBlob(h,r,d);if(f===null)throw hx();const p={name:l.fullPath},g=Gi(s,t.host,t._protocol),_="POST",y=t.maxUploadRetryTime,m=new Kr(g,_,lp(t,n),y);return m.urlParams=p,m.headers=o,m.body=f.uploadData(),m.errorHandler=Aa(e),m}class wd{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function b_(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{ar(!1)}return ar(!!n&&(e||["active"]).indexOf(n)!==-1),n}function V4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Ix(e,r,i),a={name:o.fullPath},u=Gi(s,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=k_(o,n),d=t.maxUploadRetryTime;function f(g){b_(g);let _;try{_=g.getResponseHeader("X-Goog-Upload-URL")}catch{ar(!1)}return ar(ap(_)),_}const p=new Kr(u,l,f,d);return p.urlParams=a,p.headers=c,p.body=h,p.errorHandler=Aa(e),p}function j4(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const c=b_(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ar(!1)}h||ar(!1);const d=Number(h);return ar(!isNaN(d)),new wd(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new Kr(n,o,s,a);return u.headers=i,u.errorHandler=Aa(e),u}const iI=256*1024;function z4(t,e,n,r,i,s,o,a){const u=new wd(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw t4();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,d=h+c;let f="";c===0?f="finalize":l===c?f="upload, finalize":f="upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${u.current}`},g=r.slice(h,d);if(g===null)throw hx();function _(w,b){const R=b_(w,["active","final"]),P=u.current+c,$=r.size();let re;return R==="final"?re=lp(e,s)(w,b):re=null,new wd(P,$,R==="final",re)}const y="POST",m=e.maxUploadRetryTime,v=new Kr(n,y,_,m);return v.headers=p,v.body=g.uploadData(),v.progressCallback=a||null,v.errorHandler=Aa(t),v}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4={STATE_CHANGED:"state_changed"},Bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Tm(t){switch(t){case"running":case"pausing":case"canceling":return Bt.RUNNING;case"paused":return Bt.PAUSED;case"success":return Bt.SUCCESS;case"canceled":return Bt.CANCELED;case"error":return Bt.ERROR;default:return Bt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(e,n,r){if(u4(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class W4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw tu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw tu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw tu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw tu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw tu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class G4 extends W4{initXhr(){this.xhr_.responseType="text"}}function Xn(){return new G4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=up(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(mx(i.status,[]))if(s)i=lx();else{this.sleepTime=Math.max(this.sleepTime*2,W3),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=V4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Xn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=j4(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Xn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=iI*this._chunkMultiplier,n=new wd(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=z4(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Xn,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){iI*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Sx(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Xn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=B4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Xn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=cx(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Tm(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new H4(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Tm(this._state)){case Bt.SUCCESS:oo(this._resolve.bind(null,this.snapshot))();break;case Bt.CANCELED:case Bt.ERROR:const n=this._reject;oo(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Tm(this._state)){case Bt.RUNNING:case Bt.PAUSED:e.next&&oo(e.next.bind(e,this.snapshot))();break;case Bt.SUCCESS:e.complete&&oo(e.complete.bind(e))();break;case Bt.CANCELED:case Bt.ERROR:e.error&&oo(e.error.bind(e,this._error))();break;default:e.error&&oo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vs(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _x(this._location.path)}get storage(){return this._service}get parent(){const e=T4(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new Vs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fx(e)}}function K4(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Tx(t,new _r(e),n)}function Q4(t){const e={prefixes:[],items:[]};return kx(t,e).then(()=>e)}async function kx(t,e,n){const i=await bx(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await kx(t,e,i.nextPageToken)}function bx(t,e){e!=null&&typeof e.maxResults=="number"&&_y("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=L4(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Xn)}function Y4(t){t._throwIfRoot("getMetadata");const e=Sx(t.storage,t._location,up());return t.storage.makeRequestWithTokens(e,Xn)}function X4(t,e){t._throwIfRoot("updateMetadata");const n=$4(t.storage,t._location,e,up());return t.storage.makeRequestWithTokens(n,Xn)}function J4(t){t._throwIfRoot("getDownloadURL");const e=M4(t.storage,t._location,up());return t.storage.makeRequestWithTokens(e,Xn).then(n=>{if(n===null)throw n4();return n})}function Z4(t){t._throwIfRoot("deleteObject");const e=F4(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Xn)}function Cx(t,e){const n=k4(t._location.path,e),r=new xt(t._location.bucket,n);return new Vs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eH(t){return/^[A-Za-z]+:\/\//.test(t)}function tH(t,e){return new Vs(t,e)}function Rx(t,e){if(t instanceof C_){const n=t;if(n._bucket==null)throw e4();const r=new Vs(n,n._bucket);return e!=null?Rx(r,e):r}else return e!==void 0?Cx(t,e):t}function nH(t,e){if(e&&eH(e)){if(t instanceof C_)return tH(t,e);throw $o("To use ref(service, url), the first argument must be a Storage instance.")}else return Rx(t,e)}function sI(t,e){const n=e==null?void 0:e[ux];return n==null?null:xt.makeFromBucketSpec(n,t)}function rH(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Pk(i,t.app.options.projectId))}class C_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ax,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=q3,this._maxUploadRetryTime=H3,this._requests=new Set,i!=null?this._bucket=xt.makeFromBucketSpec(i,this._host):this._bucket=sI(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=sI(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new i4(dx());{const o=m4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const oI="@firebase/storage",aI="0.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iH="storage";function sH(t,e,n){return t=j(t),K4(t,e,n)}function oH(t){return t=j(t),Y4(t)}function aH(t,e){return t=j(t),X4(t,e)}function uH(t,e){return t=j(t),bx(t,e)}function lH(t){return t=j(t),Q4(t)}function cH(t){return t=j(t),J4(t)}function hH(t){return t=j(t),Z4(t)}function uI(t,e){return t=j(t),nH(t,e)}function dH(t,e){return Cx(t,e)}function fH(t,e,n,r={}){rH(t,e,n,r)}function pH(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new C_(n,r,i,e,Ui)}function mH(){$r(new kn(iH,pH,"PUBLIC").setMultipleInstances(!0)),Sn(oI,aI,""),Sn(oI,aI,"esm2017")}mH();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Hc(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Hc(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Hc(o,this,this._ref)):s={next:n.next?o=>n.next(new Hc(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class cI{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new xr(e,this._service))}get items(){return this._delegate.items.map(e=>new xr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=dH(this._delegate,e);return new xr(n,this.storage)}get root(){return new xr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new xr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new lI(sH(this._delegate,e,n),this)}putString(e,n=_n.RAW,r){this._throwIfRoot("putString");const i=gx(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new lI(new Tx(this._delegate,new _r(i.data,!0),s),this)}listAll(){return lH(this._delegate).then(e=>new cI(e,this.storage))}list(e){return uH(this._delegate,e||void 0).then(n=>new cI(n,this.storage))}getMetadata(){return oH(this._delegate)}updateMetadata(e){return aH(this._delegate,e)}getDownloadURL(){return cH(this._delegate)}delete(){return this._throwIfRoot("delete"),hH(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw fx(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(hI(e))throw $o("ref() expected a child path but got a URL, use refFromURL instead.");return new xr(uI(this._delegate,e),this)}refFromURL(e){if(!hI(e))throw $o("refFromURL() expected a full URL but got a child path, use ref() instead.");try{xt.makeFromUrl(e,this._delegate.host)}catch{throw $o("refFromUrl() expected a valid full URL but got an invalid one.")}return new xr(uI(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){fH(this._delegate,e,n,r)}}function hI(t){return/^[A-Za-z]+:\/\//.test(t)}const gH="@firebase/storage-compat",yH="0.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vH="storage-compat";function wH(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new Ax(n,r)}function _H(t){const e={TaskState:Bt,TaskEvent:q4,StringFormat:_n,Storage:Ax,Reference:xr};t.INTERNAL.registerComponent(new kn(vH,wH,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(gH,yH)}_H(Bn);const EH={apiKey:"AIzaSyBsUK8JTkDttU8Qg5OngvOhQtmc97kK-5I",authDomain:"blog-v2-ef333.firebaseapp.com",projectId:"blog-v2-ef333",storageBucket:"blog-v2-ef333.appspot.com",messagingSenderId:"240898426488",appId:"1:240898426488:web:f34e1baf034f9b79310f8d",measurementId:"G-2JL2Z0C860"};Bn.initializeApp(EH);const SH=Bn,Ey=Bn.auth(),IH=Bn.firestore(),AG=Bn.storage(),xx="auth/GET_FIREBASE_USER",Nx="auth/GET_FIREBASE_USER_SUCCESS",Dx="auth/GET_FIREBASE_USER_NULL",TH=sk(xx,Nx,Dx)(),Px="auth/ACTION_FIREBASE_LOGIN_SUCCESS",Ox="auth/ACTION_FIREBASE_LOGIN_ERROR",Lx="auth/ACTION_FIREBASE_LOGOUT",kH=Mr(Px)(),bH=Mr(Ox)(),CH=Mr(Lx)();function xG(){return t=>{const{request:e,success:n,failure:r}=TH;t(e()),Ey.onAuthStateChanged(async i=>{t(i?n(i):r())})}}function NG(t){return async e=>{const n=new SH.auth.GithubAuthProvider;t?await Ey.signInWithPopup(n).then(r=>e(kH(r.user))).catch(r=>e(bH(r))):(await Ey.signOut(),e(CH()))}}const RH={auth:yn.initial()},AH=Ol(RH,{[xx]:t=>({...t,auth:yn.loading()}),[Nx]:(t,e)=>({...t,auth:yn.success(e.payload)}),[Dx]:t=>({...t,auth:yn.null()}),[Px]:(t,e)=>({...t,auth:yn.success(e.payload)}),[Ox]:(t,e)=>({...t,auth:yn.error(e.payload)}),[Lx]:t=>({...t,auth:yn.null()})});function Mx(t,e,n){return async r=>{try{v_(mr(s_(IH,t)),i=>{const s=i.docs.map(o=>({id:o.id,...o.data()}));r(e(s))})}catch(i){r(n(i))}}}const $x="blog/GET_BLOG_SUCCESS",Fx="blog/GET_BLOG_ERROR",xH=Mr($x)(),NH=Mr(Fx)();function DG(){return Mx("blog",xH,NH)}const DH={loading:!0,error:null,blog:[]},PH=Ol(DH,{[$x]:(t,e)=>({...t,loading:!1,blog:e.payload}),[Fx]:(t,e)=>({...t,loading:!1,error:e.payload})}),Ux="category/GET_CATEGORY_SUCCESS",Bx="category/GET_CATEGORY_ERROR",OH=Mr(Ux)(),LH=Mr(Bx)();function PG(){return Mx("categories",OH,LH)}const MH={loading:!0,error:null,categories:[]},$H=Ol(MH,{[Ux]:(t,e)=>({...t,loading:!1,categories:e.payload}),[Bx]:(t,e)=>({...t,loading:!1,error:e.payload})}),FH=$O({githubReducer:oM,authReducer:AH,blogReducer:PH,categoryReducer:$H}),UH=t=>LO(FH,t,UO(BO)),BH=UH(),OG=hO,LG=()=>xO();/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(){return pe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pe.apply(this,arguments)}var Qe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qe||(Qe={}));const dI="popstate";function VH(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Cl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hr(i)}return zH(e,n,null,t)}function ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jH(){return Math.random().toString(36).substr(2,8)}function fI(t,e){return{usr:t.state,key:t.key,idx:e}}function Cl(t,e,n,r){return n===void 0&&(n=null),pe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qr(e):e,{state:n,key:e&&e.key||r||jH()})}function hr(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function zH(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Qe.Pop,u=null,l=c();l==null&&(l=0,o.replaceState(pe({},o.state,{idx:l}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Qe.Pop;let _=c(),y=_==null?null:_-l;l=_,u&&u({action:a,location:g.location,delta:y})}function d(_,y){a=Qe.Push;let m=Cl(g.location,_,y);n&&n(m,_),l=c()+1;let v=fI(m,l),w=g.createHref(m);try{o.pushState(v,"",w)}catch{i.location.assign(w)}s&&u&&u({action:a,location:g.location,delta:1})}function f(_,y){a=Qe.Replace;let m=Cl(g.location,_,y);n&&n(m,_),l=c();let v=fI(m,l),w=g.createHref(m);o.replaceState(v,"",w),s&&u&&u({action:a,location:g.location,delta:0})}function p(_){let y=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof _=="string"?_:hr(_);return ee(y,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,y)}let g={get action(){return a},get location(){return t(i,o)},listen(_){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(dI,h),u=_,()=>{i.removeEventListener(dI,h),u=null}},createHref(_){return e(i,_)},createURL:p,encodeLocation(_){let y=p(_);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:d,replace:f,go(_){return o.go(_)}};return g}var gt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gt||(gt={}));function qH(t){return t.index===!0}function Vx(t,e,n){return e===void 0&&(e=[]),n===void 0&&(n=new Set),t.map((r,i)=>{let s=[...e,i],o=typeof r.id=="string"?r.id:s.join("-");return ee(r.index!==!0||!r.children,"Cannot specify children on an index route"),ee(!n.has(o),'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),n.add(o),qH(r)?pe({},r,{id:o}):pe({},r,{id:o,children:r.children?Vx(r.children,s,n):void 0})})}function pu(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qr(e):e,i=Hx(r.pathname||"/",n);if(i==null)return null;let s=jx(t);HH(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=eW(s[a],nW(i));return o}function jx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ee(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let l=Nr([r,u.relativePath]),c=n.concat(u);s.children&&s.children.length>0&&(ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),jx(s.children,e,c,l)),!(s.path==null&&!s.index)&&e.push({path:l,score:JH(l,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of zx(s.path))i(s,o,u)}),e}function zx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zx(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function HH(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ZH(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const WH=/^:\w+$/,GH=3,KH=2,QH=1,YH=10,XH=-2,pI=t=>t==="*";function JH(t,e){let n=t.split("/"),r=n.length;return n.some(pI)&&(r+=XH),e&&(r+=KH),n.filter(i=>!pI(i)).reduce((i,s)=>i+(WH.test(s)?GH:s===""?QH:YH),r)}function ZH(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function eW(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=qx({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Nr([i,c.pathname]),pathnameBase:oW(Nr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Nr([i,c.pathnameBase]))}return s}function qx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tW(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return l[c]=rW(a[h]||"",c),l},{}),pathname:s,pathnameBase:o,pattern:t}}function tW(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Rl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function nW(t){try{return decodeURI(t)}catch(e){return Rl(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function rW(t,e){try{return decodeURIComponent(t)}catch(n){return Rl(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Hx(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Rl(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iW(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qr(t):t;return{pathname:n?n.startsWith("/")?n:sW(n,e):e,search:aW(r),hash:uW(i)}}function sW(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function km(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function R_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qr(t):(i=pe({},t),ee(!i.pathname||!i.pathname.includes("?"),km("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),km("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),km("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let u=iW(i,a),l=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(l||c)&&(u.pathname+="/"),u}const Nr=t=>t.join("/").replace(/\/\/+/g,"/"),oW=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),aW=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,uW=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class mI extends Error{}class lW{constructor(e,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],ee(e&&typeof e=="object"&&!Array.isArray(e),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((s,o)=>r=o),this.controller=new AbortController;let i=()=>r(new mI("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(e).reduce((s,o)=>{let[a,u]=o;return Object.assign(s,{[a]:this.trackPromise(a,u)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(e,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(e),this.pendingKeysSet.add(e);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,e,null,i),i=>this.onSettle(r,e,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(e,n,r,i){return this.controller.signal.aborted&&r instanceof mI?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(e,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(e,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(e,n){this.subscribers.forEach(r=>r(e,n))}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((e,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(e){let n=!1;if(!this.done){let r=()=>this.cancel();e.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(s=>{e.removeEventListener("abort",r),(s||this.done)&&i(s)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return ee(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((e,n)=>{let[r,i]=n;return Object.assign(e,{[r]:hW(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function cW(t){return t instanceof Promise&&t._tracked===!0}function hW(t){if(!cW(t))return t;if(t._error)throw t._error;return t._data}const dW=function(e,n){n===void 0&&(n=302);let r=n;typeof r=="number"?r={status:r}:typeof r.status>"u"&&(r.status=302);let i=new Headers(r.headers);return i.set("Location",e),new Response(null,pe({},r,{headers:i}))};class A_{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Wx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Gx=["post","put","patch","delete"],fW=new Set(Gx),pW=["get",...Gx],mW=new Set(pW),gW=new Set([301,302,303,307,308]),yW=new Set([307,308]),bm={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},vW={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},gI={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Kx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wW=!Kx;function _W(t){ee(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=Vx(t.routes),n=null,r=new Set,i=null,s=null,o=null,a=t.hydrationData!=null,u=pu(e,t.history.location,t.basename),l=null;if(u==null){let I=ti(404,{pathname:t.history.location.pathname}),{matches:T,route:x}=SI(e);u=T,l={[x.id]:I}}let c=!u.some(I=>I.route.loader)||t.hydrationData!=null,h,d={historyAction:t.history.action,location:t.history.location,matches:u,initialized:c,navigation:bm,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||l,fetchers:new Map,blockers:new Map},f=Qe.Pop,p=!1,g,_=!1,y=!1,m=[],v=[],w=new Map,b=0,R=-1,P=new Map,$=new Set,re=new Map,K=new Map,Le=null,Rn=new Map,dr=!1;function cc(){return n=t.history.listen(I=>{let{action:T,location:x,delta:H}=I;if(dr){dr=!1;return}Rl(Le!=null&&H===null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=L_({currentLocation:d.location,nextLocation:x,historyAction:T});if(V&&H!=null){dr=!0,t.history.go(H*-1),dc(V,{state:"blocked",location:x,proceed(){dc(V,{state:"proceeding",proceed:void 0,reset:void 0,location:x}),t.history.go(H)},reset(){Oa(V),We({blockers:new Map(h.state.blockers)})}});return}return me(T,x)}),d.initialized||me(Qe.Pop,d.location),h}function pp(){n&&n(),r.clear(),g&&g.abort(),d.fetchers.forEach((I,T)=>yp(T)),d.blockers.forEach((I,T)=>Oa(T))}function Na(I){return r.add(I),()=>r.delete(I)}function We(I){d=pe({},d,I),r.forEach(T=>T(d))}function F(I,T){var x,H;let V=d.actionData!=null&&d.navigation.formMethod!=null&&vr(d.navigation.formMethod)&&d.navigation.state==="loading"&&((x=I.state)==null?void 0:x._isRedirect)!==!0,J;T.actionData?Object.keys(T.actionData).length>0?J=T.actionData:J=null:V?J=d.actionData:J=null;let Q=T.loaderData?EI(d.loaderData,T.loaderData,T.matches||[],T.errors):d.loaderData;for(let[G]of Rn)Oa(G);let ae=p===!0||d.navigation.formMethod!=null&&vr(d.navigation.formMethod)&&((H=I.state)==null?void 0:H._isRedirect)!==!0;We(pe({},T,{actionData:J,loaderData:Q,historyAction:f,location:I,initialized:!0,navigation:bm,revalidation:"idle",restoreScrollPosition:M_(I,T.matches||d.matches),preventScrollReset:ae,blockers:new Map(d.blockers)})),_||f===Qe.Pop||(f===Qe.Push?t.history.push(I,I.state):f===Qe.Replace&&t.history.replace(I,I.state)),f=Qe.Pop,p=!1,_=!1,y=!1,m=[],v=[]}async function X(I,T){if(typeof I=="number"){t.history.go(I);return}let{path:x,submission:H,error:V}=yI(I,T),J=d.location,Q=Cl(d.location,x,T&&T.state);Q=pe({},Q,t.history.encodeLocation(Q));let ae=T&&T.replace!=null?T.replace:void 0,G=Qe.Push;ae===!0?G=Qe.Replace:ae===!1||H!=null&&vr(H.formMethod)&&H.formAction===d.location.pathname+d.location.search&&(G=Qe.Replace);let Lt=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,oe=L_({currentLocation:J,nextLocation:Q,historyAction:G});if(oe){dc(oe,{state:"blocked",location:Q,proceed(){dc(oe,{state:"proceeding",proceed:void 0,reset:void 0,location:Q}),X(I,T)},reset(){Oa(oe),We({blockers:new Map(d.blockers)})}});return}return await me(G,Q,{submission:H,pendingError:V,preventScrollReset:Lt,replace:T&&T.replace})}function ne(){if(mp(),We({revalidation:"loading"}),d.navigation.state!=="submitting"){if(d.navigation.state==="idle"){me(d.historyAction,d.location,{startUninterruptedRevalidation:!0});return}me(f||d.historyAction,d.navigation.location,{overrideNavigation:d.navigation})}}async function me(I,T,x){g&&g.abort(),g=null,f=I,_=(x&&x.startUninterruptedRevalidation)===!0,oN(d.location,d.matches),p=(x&&x.preventScrollReset)===!0;let H=x&&x.overrideNavigation,V=pu(e,T,t.basename);if(!V){let Me=ti(404,{pathname:T.pathname}),{matches:An,route:xn}=SI(e);vp(),F(T,{matches:An,loaderData:{},errors:{[xn.id]:Me}});return}if(kW(d.location,T)&&!(x&&x.submission&&vr(x.submission.formMethod))){F(T,{matches:V});return}g=new AbortController;let J=ru(t.history,T,g.signal,x&&x.submission),Q,ae;if(x&&x.pendingError)ae={[ko(V).route.id]:x.pendingError};else if(x&&x.submission&&vr(x.submission.formMethod)){let Me=await Ge(J,T,x.submission,V,{replace:x.replace});if(Me.shortCircuited)return;Q=Me.pendingActionData,ae=Me.pendingActionError,H=pe({state:"loading",location:T},x.submission),J=new Request(J.url,{signal:J.signal})}let{shortCircuited:G,loaderData:Lt,errors:oe}=await Zs(J,T,V,H,x&&x.submission,x&&x.replace,Q,ae);G||(g=null,F(T,pe({matches:V},Q?{actionData:Q}:{},{loaderData:Lt,errors:oe})))}async function Ge(I,T,x,H,V){mp();let J=pe({state:"submitting",location:T},x);We({navigation:J});let Q,ae=bI(H,T);if(!ae.route.action)Q={type:gt.error,error:ti(405,{method:I.method,pathname:T.pathname,routeId:ae.route.id})};else if(Q=await nu("action",I,ae,H,h.basename),I.signal.aborted)return{shortCircuited:!0};if(Fo(Q)){let G;return V&&V.replace!=null?G=V.replace:G=Q.location===d.location.pathname+d.location.search,await Pa(d,Q,{submission:x,replace:G}),{shortCircuited:!0}}if(Lu(Q)){let G=ko(H,ae.route.id);return(V&&V.replace)!==!0&&(f=Qe.Push),{pendingActionData:{},pendingActionError:{[G.route.id]:Q.error}}}if(ps(Q))throw ti(400,{type:"defer-action"});return{pendingActionData:{[ae.route.id]:Q.data}}}async function Zs(I,T,x,H,V,J,Q,ae){let G=H;G||(G=pe({state:"loading",location:T,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},V));let Lt=V||(G.formMethod&&G.formAction&&G.formData&&G.formEncType?{formMethod:G.formMethod,formAction:G.formAction,formData:G.formData,formEncType:G.formEncType}:void 0),[oe,Me]=vI(t.history,d,x,Lt,T,y,m,v,Q,ae,re);if(vp(kt=>!(x&&x.some(jn=>jn.route.id===kt))||oe&&oe.some(jn=>jn.route.id===kt)),oe.length===0&&Me.length===0)return F(T,pe({matches:x,loaderData:{},errors:ae||null},Q?{actionData:Q}:{})),{shortCircuited:!0};if(!_){Me.forEach(jn=>{let Qi=d.fetchers.get(jn.key),mc={state:"loading",data:Qi&&Qi.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};d.fetchers.set(jn.key,mc)});let kt=Q||d.actionData;We(pe({navigation:G},kt?Object.keys(kt).length===0?{actionData:null}:{actionData:kt}:{},Me.length>0?{fetchers:new Map(d.fetchers)}:{}))}R=++b,Me.forEach(kt=>w.set(kt.key,g));let{results:An,loaderResults:xn,fetcherResults:La}=await D_(d.matches,x,oe,Me,I);if(I.signal.aborted)return{shortCircuited:!0};Me.forEach(kt=>w.delete(kt.key));let fc=II(An);if(fc)return await Pa(d,fc,{replace:J}),{shortCircuited:!0};let{loaderData:pc,errors:to}=_I(d,x,oe,xn,ae,Me,La,K);K.forEach((kt,jn)=>{kt.subscribe(Qi=>{(Qi||kt.done)&&K.delete(jn)})}),rN();let wp=O_(R);return pe({loaderData:pc,errors:to},wp||Me.length>0?{fetchers:new Map(d.fetchers)}:{})}function Vn(I){return d.fetchers.get(I)||vW}function Da(I,T,x,H){if(wW)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");w.has(I)&&hc(I);let V=pu(e,x,t.basename);if(!V){gp(I,T,ti(404,{pathname:x}));return}let{path:J,submission:Q}=yI(x,H,!0),ae=bI(V,J);if(p=(H&&H.preventScrollReset)===!0,Q&&vr(Q.formMethod)){fr(I,T,J,ae,V,Q);return}re.set(I,{routeId:T,path:J,match:ae,matches:V}),eo(I,T,J,ae,V,Q)}async function fr(I,T,x,H,V,J){if(mp(),re.delete(I),!H.route.action){let pr=ti(405,{method:J.formMethod,pathname:x,routeId:T});gp(I,T,pr);return}let Q=d.fetchers.get(I),ae=pe({state:"submitting"},J,{data:Q&&Q.data," _hasFetcherDoneAnything ":!0});d.fetchers.set(I,ae),We({fetchers:new Map(d.fetchers)});let G=new AbortController,Lt=ru(t.history,x,G.signal,J);w.set(I,G);let oe=await nu("action",Lt,H,V,h.basename);if(Lt.signal.aborted){w.get(I)===G&&w.delete(I);return}if(Fo(oe)){w.delete(I),$.add(I);let pr=pe({state:"loading"},J,{data:void 0," _hasFetcherDoneAnything ":!0});return d.fetchers.set(I,pr),We({fetchers:new Map(d.fetchers)}),Pa(d,oe,{isFetchActionRedirect:!0})}if(Lu(oe)){gp(I,T,oe.error);return}if(ps(oe))throw ti(400,{type:"defer-action"});let Me=d.navigation.location||d.location,An=ru(t.history,Me,G.signal),xn=d.navigation.state!=="idle"?pu(e,d.navigation.location,t.basename):d.matches;ee(xn,"Didn't find any matches after fetcher action");let La=++b;P.set(I,La);let fc=pe({state:"loading",data:oe.data},J,{" _hasFetcherDoneAnything ":!0});d.fetchers.set(I,fc);let[pc,to]=vI(t.history,d,xn,J,Me,y,m,v,{[H.route.id]:oe.data},void 0,re);to.filter(pr=>pr.key!==I).forEach(pr=>{let Ep=pr.key,$_=d.fetchers.get(Ep),lN={state:"loading",data:$_&&$_.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};d.fetchers.set(Ep,lN),w.set(Ep,G)}),We({fetchers:new Map(d.fetchers)});let{results:wp,loaderResults:kt,fetcherResults:jn}=await D_(d.matches,xn,pc,to,An);if(G.signal.aborted)return;P.delete(I),w.delete(I),to.forEach(pr=>w.delete(pr.key));let Qi=II(wp);if(Qi)return Pa(d,Qi);let{loaderData:mc,errors:_p}=_I(d,d.matches,pc,kt,void 0,to,jn,K),aN={state:"idle",data:oe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};d.fetchers.set(I,aN);let uN=O_(La);d.navigation.state==="loading"&&La>R?(ee(f,"Expected pending action"),g&&g.abort(),F(d.navigation.location,{matches:xn,loaderData:mc,errors:_p,fetchers:new Map(d.fetchers)})):(We(pe({errors:_p,loaderData:EI(d.loaderData,mc,xn,_p)},uN?{fetchers:new Map(d.fetchers)}:{})),y=!1)}async function eo(I,T,x,H,V,J){let Q=d.fetchers.get(I),ae=pe({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},J,{data:Q&&Q.data," _hasFetcherDoneAnything ":!0});d.fetchers.set(I,ae),We({fetchers:new Map(d.fetchers)});let G=new AbortController,Lt=ru(t.history,x,G.signal);w.set(I,G);let oe=await nu("loader",Lt,H,V,h.basename);if(ps(oe)&&(oe=await Jx(oe,Lt.signal,!0)||oe),w.get(I)===G&&w.delete(I),Lt.signal.aborted)return;if(Fo(oe)){await Pa(d,oe);return}if(Lu(oe)){let An=ko(d.matches,T);d.fetchers.delete(I),We({fetchers:new Map(d.fetchers),errors:{[An.route.id]:oe.error}});return}ee(!ps(oe),"Unhandled fetcher deferred data");let Me={state:"idle",data:oe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};d.fetchers.set(I,Me),We({fetchers:new Map(d.fetchers)})}async function Pa(I,T,x){var H;let{submission:V,replace:J,isFetchActionRedirect:Q}=x===void 0?{}:x;T.revalidate&&(y=!0);let ae=Cl(I.location,T.location,pe({_isRedirect:!0},Q?{_isFetchActionRedirect:!0}:{}));if(ee(ae,"Expected a location on the redirect navigation"),Kx&&typeof((H=window)==null?void 0:H.location)<"u"){let xn=t.history.createURL(T.location).origin;if(window.location.origin!==xn){J?window.location.replace(T.location):window.location.assign(T.location);return}}g=null;let G=J===!0?Qe.Replace:Qe.Push,{formMethod:Lt,formAction:oe,formEncType:Me,formData:An}=I.navigation;!V&&Lt&&oe&&An&&Me&&(V={formMethod:Lt,formAction:oe,formEncType:Me,formData:An}),yW.has(T.status)&&V&&vr(V.formMethod)?await me(G,ae,{submission:pe({},V,{formAction:T.location}),preventScrollReset:p}):await me(G,ae,{overrideNavigation:{state:"loading",location:ae,formMethod:V?V.formMethod:void 0,formAction:V?V.formAction:void 0,formEncType:V?V.formEncType:void 0,formData:V?V.formData:void 0},preventScrollReset:p})}async function D_(I,T,x,H,V){let J=await Promise.all([...x.map(G=>nu("loader",V,G,T,h.basename)),...H.map(G=>nu("loader",ru(t.history,G.path,V.signal),G.match,G.matches,h.basename))]),Q=J.slice(0,x.length),ae=J.slice(x.length);return await Promise.all([TI(I,x,Q,V.signal,!1,d.loaderData),TI(I,H.map(G=>G.match),ae,V.signal,!0)]),{results:J,loaderResults:Q,fetcherResults:ae}}function mp(){y=!0,m.push(...vp()),re.forEach((I,T)=>{w.has(T)&&(v.push(T),hc(T))})}function gp(I,T,x){let H=ko(d.matches,T);yp(I),We({errors:{[H.route.id]:x},fetchers:new Map(d.fetchers)})}function yp(I){w.has(I)&&hc(I),re.delete(I),P.delete(I),$.delete(I),d.fetchers.delete(I)}function hc(I){let T=w.get(I);ee(T,"Expected fetch controller: "+I),T.abort(),w.delete(I)}function P_(I){for(let T of I){let H={state:"idle",data:Vn(T).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};d.fetchers.set(T,H)}}function rN(){let I=[];for(let T of $){let x=d.fetchers.get(T);ee(x,"Expected fetcher: "+T),x.state==="loading"&&($.delete(T),I.push(T))}P_(I)}function O_(I){let T=[];for(let[x,H]of P)if(H<I){let V=d.fetchers.get(x);ee(V,"Expected fetcher: "+x),V.state==="loading"&&(hc(x),P.delete(x),T.push(x))}return P_(T),T.length>0}function iN(I,T){let x=d.blockers.get(I)||gI;return Rn.get(I)!==T&&(Rn.set(I,T),Le==null?Le=I:I!==Le&&Rl(!1,"A router only supports one blocker at a time")),x}function Oa(I){d.blockers.delete(I),Rn.delete(I),Le===I&&(Le=null)}function dc(I,T){let x=d.blockers.get(I)||gI;ee(x.state==="unblocked"&&T.state==="blocked"||x.state==="blocked"&&T.state==="blocked"||x.state==="blocked"&&T.state==="proceeding"||x.state==="blocked"&&T.state==="unblocked"||x.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+x.state+" -> "+T.state),d.blockers.set(I,T),We({blockers:new Map(d.blockers)})}function L_(I){let{currentLocation:T,nextLocation:x,historyAction:H}=I;if(Le==null)return;let V=Rn.get(Le);ee(V,"Could not find a function for the active blocker");let J=d.blockers.get(Le);if(!(J&&J.state==="proceeding")&&V({currentLocation:T,nextLocation:x,historyAction:H}))return Le}function vp(I){let T=[];return K.forEach((x,H)=>{(!I||I(H))&&(x.cancel(),T.push(H),K.delete(H))}),T}function sN(I,T,x){if(i=I,o=T,s=x||(H=>H.key),!a&&d.navigation===bm){a=!0;let H=M_(d.location,d.matches);H!=null&&We({restoreScrollPosition:H})}return()=>{i=null,o=null,s=null}}function oN(I,T){if(i&&s&&o){let x=T.map(V=>kI(V,d.loaderData)),H=s(I,x)||I.key;i[H]=o()}}function M_(I,T){if(i&&s&&o){let x=T.map(J=>kI(J,d.loaderData)),H=s(I,x)||I.key,V=i[H];if(typeof V=="number")return V}return null}return h={get basename(){return t.basename},get state(){return d},get routes(){return e},initialize:cc,subscribe:Na,enableScrollRestoration:sN,navigate:X,fetch:Da,revalidate:ne,createHref:I=>t.history.createHref(I),encodeLocation:I=>t.history.encodeLocation(I),getFetcher:Vn,deleteFetcher:yp,dispose:pp,getBlocker:iN,deleteBlocker:Oa,_internalFetchControllers:w,_internalActiveDeferreds:K},h}function EW(t){return t!=null&&"formData"in t}function yI(t,e,n){n===void 0&&(n=!1);let r=typeof t=="string"?t:hr(t);if(!e||!EW(e))return{path:r};if(e.formMethod&&!CW(e.formMethod))return{path:r,error:ti(405,{method:e.formMethod})};let i;if(e.formData&&(i={formMethod:e.formMethod||"get",formAction:Xx(r),formEncType:e&&e.formEncType||"application/x-www-form-urlencoded",formData:e.formData},vr(i.formMethod)))return{path:r,submission:i};let s=Qr(r),o=Yx(e.formData);return n&&s.search&&Zx(s.search)&&o.append("index",""),s.search="?"+o,{path:hr(s),submission:i}}function SW(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function vI(t,e,n,r,i,s,o,a,u,l,c){let h=l?Object.values(l)[0]:u?Object.values(u)[0]:void 0,d=t.createURL(e.location),f=t.createURL(i),p=s||d.toString()===f.toString()||d.search!==f.search,g=l?Object.keys(l)[0]:void 0,y=SW(n,g).filter((v,w)=>{if(v.route.loader==null)return!1;if(IW(e.loaderData,e.matches[w],v)||o.some(P=>P===v.route.id))return!0;let b=e.matches[w],R=v;return wI(v,pe({currentUrl:d,currentParams:b.params,nextUrl:f,nextParams:R.params},r,{actionResult:h,defaultShouldRevalidate:p||Qx(b,R)}))}),m=[];return c&&c.forEach((v,w)=>{if(n.some(b=>b.route.id===v.routeId))a.includes(w)?m.push(pe({key:w},v)):wI(v.match,pe({currentUrl:d,currentParams:e.matches[e.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:h,defaultShouldRevalidate:p}))&&m.push(pe({key:w},v));else return}),[y,m]}function IW(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Qx(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function wI(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function nu(t,e,n,r,i,s,o,a){i===void 0&&(i="/"),s===void 0&&(s=!1),o===void 0&&(o=!1);let u,l,c,h=new Promise((f,p)=>c=p),d=()=>c();e.signal.addEventListener("abort",d);try{let f=n.route[t];ee(f,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),l=await Promise.race([f({request:e,params:n.params,context:a}),h]),ee(l!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(f){u=gt.error,l=f}finally{e.signal.removeEventListener("abort",d)}if(bW(l)){let f=l.status;if(gW.has(f)){let _=l.headers.get("Location");if(ee(_,"Redirects returned/thrown from loaders/actions must have a Location header"),/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(_)){if(!s){let m=new URL(e.url),v=_.startsWith("//")?new URL(m.protocol+_):new URL(_);v.origin===m.origin&&(_=v.pathname+v.search+v.hash)}}else{let m=r.slice(0,r.indexOf(n)+1),v=hp(m).map(b=>b.pathnameBase),w=R_(_,v,new URL(e.url).pathname);if(ee(hr(w),"Unable to resolve redirect location: "+_),i){let b=w.pathname;w.pathname=b==="/"?i:Nr([i,b])}_=hr(w)}if(s)throw l.headers.set("Location",_),l;return{type:gt.redirect,status:f,location:_,revalidate:l.headers.get("X-Remix-Revalidate")!==null}}if(o)throw{type:u||gt.data,response:l};let p,g=l.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?p=await l.json():p=await l.text(),u===gt.error?{type:u,error:new A_(f,l.statusText,p),headers:l.headers}:{type:gt.data,data:p,statusCode:l.status,headers:l.headers}}return u===gt.error?{type:u,error:l}:l instanceof lW?{type:gt.deferred,deferredData:l}:{type:gt.data,data:l}}function ru(t,e,n,r){let i=t.createURL(Xx(e)).toString(),s={signal:n};if(r&&vr(r.formMethod)){let{formMethod:o,formEncType:a,formData:u}=r;s.method=o.toUpperCase(),s.body=a==="application/x-www-form-urlencoded"?Yx(u):u}return new Request(i,s)}function Yx(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,r instanceof File?r.name:r);return e}function TW(t,e,n,r,i){let s={},o=null,a,u=!1,l={};return n.forEach((c,h)=>{let d=e[h].route.id;if(ee(!Fo(c),"Cannot handle redirect results in processLoaderData"),Lu(c)){let f=ko(t,d),p=c.error;r&&(p=Object.values(r)[0],r=void 0),o=o||{},o[f.route.id]==null&&(o[f.route.id]=p),s[d]=void 0,u||(u=!0,a=Wx(c.error)?c.error.status:500),c.headers&&(l[d]=c.headers)}else ps(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!u&&(a=c.statusCode),c.headers&&(l[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:l}}function _I(t,e,n,r,i,s,o,a){let{loaderData:u,errors:l}=TW(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d}=s[c];ee(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let f=o[c];if(Lu(f)){let p=ko(t.matches,d.route.id);l&&l[p.route.id]||(l=pe({},l,{[p.route.id]:f.error})),t.fetchers.delete(h)}else if(Fo(f))ee(!1,"Unhandled fetcher revalidation redirect");else if(ps(f))ee(!1,"Unhandled fetcher deferred data");else{let p={state:"idle",data:f.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(h,p)}}return{loaderData:u,errors:l}}function EI(t,e,n,r){let i=pe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ko(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function SI(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function ti(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(a="defer() is not supported in actions")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new A_(t||500,o,new Error(a),!0)}function II(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Fo(n))return n}}function Xx(t){let e=typeof t=="string"?Qr(t):t;return hr(pe({},e,{hash:""}))}function kW(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function ps(t){return t.type===gt.deferred}function Lu(t){return t.type===gt.error}function Fo(t){return(t&&t.type)===gt.redirect}function bW(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function CW(t){return mW.has(t)}function vr(t){return fW.has(t)}async function TI(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],u=e[o],l=t.find(h=>h.route.id===u.route.id),c=l!=null&&!Qx(l,u)&&(s&&s[u.route.id])!==void 0;ps(a)&&(i||c)&&await Jx(a,r,i).then(h=>{h&&(n[o]=h||n[o])})}}async function Jx(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:gt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:gt.error,error:i}}return{type:gt.data,data:t.deferredData.data}}}function Zx(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function kI(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function bI(t,e){let n=typeof e=="string"?Qr(e).search:e.search;if(t[t.length-1].route.index&&Zx(n||""))return t[t.length-1];let r=hp(t);return r[r.length-1]}/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _d(){return _d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_d.apply(this,arguments)}function RW(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const AW=typeof Object.is=="function"?Object.is:RW,{useState:xW,useEffect:NW,useLayoutEffect:DW,useDebugValue:PW}=Rm;function OW(t,e,n){const r=e(),[{inst:i},s]=xW({inst:{value:r,getSnapshot:e}});return DW(()=>{i.value=r,i.getSnapshot=e,Cm(i)&&s({inst:i})},[t,r,e]),NW(()=>(Cm(i)&&s({inst:i}),t(()=>{Cm(i)&&s({inst:i})})),[t]),PW(r),r}function Cm(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!AW(n,r)}catch{return!0}}function LW(t,e,n){return e()}const MW=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$W=!MW,FW=$W?LW:OW,UW="useSyncExternalStore"in Rm?(t=>t.useSyncExternalStore)(Rm):FW,x_=L.createContext(null),N_=L.createContext(null),dp=L.createContext(null),fp=L.createContext(null),Ki=L.createContext({outlet:null,matches:[]}),eN=L.createContext(null);function BW(t,e){let{relative:n}=e===void 0?{}:e;xa()||ee(!1);let{basename:r,navigator:i}=L.useContext(dp),{hash:s,pathname:o,search:a}=tN(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Nr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function xa(){return L.useContext(fp)!=null}function uc(){return xa()||ee(!1),L.useContext(fp).location}function MG(t){xa()||ee(!1);let{pathname:e}=uc();return L.useMemo(()=>qx(t,e),[e,t])}function VW(){xa()||ee(!1);let{basename:t,navigator:e}=L.useContext(dp),{matches:n}=L.useContext(Ki),{pathname:r}=uc(),i=JSON.stringify(hp(n).map(a=>a.pathnameBase)),s=L.useRef(!1);return L.useEffect(()=>{s.current=!0}),L.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let l=R_(a,JSON.parse(i),r,u.relative==="path");t!=="/"&&(l.pathname=l.pathname==="/"?t:Nr([t,l.pathname])),(u.replace?e.replace:e.push)(l,u.state,u)},[t,e,i,r])}const jW=L.createContext(null);function zW(t){let e=L.useContext(Ki).outlet;return e&&L.createElement(jW.Provider,{value:t},e)}function $G(){let{matches:t}=L.useContext(Ki),e=t[t.length-1];return e?e.params:{}}function tN(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=L.useContext(Ki),{pathname:i}=uc(),s=JSON.stringify(hp(r).map(o=>o.pathnameBase));return L.useMemo(()=>R_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function qW(t,e){xa()||ee(!1);let{navigator:n}=L.useContext(dp),r=L.useContext(N_),{matches:i}=L.useContext(Ki),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=uc(),l;if(e){var c;let g=typeof e=="string"?Qr(e):e;a==="/"||(c=g.pathname)!=null&&c.startsWith(a)||ee(!1),l=g}else l=u;let h=l.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=pu(t,{pathname:d}),p=KW(f&&f.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Nr([a,n.encodeLocation?n.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:Nr([a,n.encodeLocation?n.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),i,r||void 0);return e&&p?L.createElement(fp.Provider,{value:{location:_d({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Qe.Pop}},p):p}function HW(){let t=JW(),e=Wx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,s)}class WW extends L.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?L.createElement(Ki.Provider,{value:this.props.routeContext},L.createElement(eN.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GW(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(x_);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Ki.Provider,{value:e},r)}function KW(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ee(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let u=o.route.id?i==null?void 0:i[o.route.id]:null,l=n?o.route.errorElement||L.createElement(HW,null):null,c=e.concat(r.slice(0,a+1)),h=()=>L.createElement(GW,{match:o,routeContext:{outlet:s,matches:c}},u?l:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?L.createElement(WW,{location:n.location,component:l,error:u,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var CI;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(CI||(CI={}));var Ed;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Ed||(Ed={}));function QW(t){let e=L.useContext(N_);return e||ee(!1),e}function YW(t){let e=L.useContext(Ki);return e||ee(!1),e}function XW(t){let e=YW(),n=e.matches[e.matches.length-1];return n.route.id||ee(!1),n.route.id}function JW(){var t;let e=L.useContext(eN),n=QW(Ed.UseRouteError),r=XW(Ed.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function ZW(t){let{fallbackElement:e,router:n}=t,r=UW(n.subscribe,()=>n.state,()=>n.state),i=L.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:o=>n.navigate(o),push:(o,a,u)=>n.navigate(o,{state:a,preventScrollReset:u==null?void 0:u.preventScrollReset}),replace:(o,a,u)=>n.navigate(o,{replace:!0,state:a,preventScrollReset:u==null?void 0:u.preventScrollReset})}),[n]),s=n.basename||"/";return L.createElement(L.Fragment,null,L.createElement(x_.Provider,{value:{router:n,navigator:i,static:!1,basename:s}},L.createElement(N_.Provider,{value:r},L.createElement(tG,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?L.createElement(nG,null):e))),null)}function FG(t){return zW(t.context)}function eG(t){ee(!1)}function tG(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qe.Pop,navigator:s,static:o=!1}=t;xa()&&ee(!1);let a=e.replace(/^\/*/,"/"),u=L.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Qr(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,p=L.useMemo(()=>{let g=Hx(l,a);return g==null?null:{pathname:g,search:c,hash:h,state:d,key:f}},[a,l,c,h,d,f]);return p==null?null:L.createElement(dp.Provider,{value:u},L.createElement(fp.Provider,{children:n,value:{location:p,navigationType:i}}))}function nG(t){let{children:e,location:n}=t,r=L.useContext(x_),i=r&&!e?r.router.routes:Sy(e);return qW(i,n)}var RI;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(RI||(RI={}));new Promise(()=>{});function Sy(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;if(r.type===L.Fragment){n.push.apply(n,Sy(r.props.children,e));return}r.type!==eG&&ee(!1),!r.props.index||!r.props.children||ee(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Sy(r.props.children,s)),n.push(o)}),n}function nN(t){return t.map(e=>{let n=_d({},e);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=nN(n.children)),n})}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sd(){return Sd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sd.apply(this,arguments)}function rG(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function iG(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function sG(t,e){return t.button===0&&(!e||e==="_self")&&!iG(t)}const oG=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function aG(t,e){return _W({basename:e==null?void 0:e.basename,history:VH({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||uG(),routes:nN(t)}).initialize()}function uG(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Sd({},e,{errors:lG(e.errors)})),e}function lG(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new A_(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const cG=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UG=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:l,preventScrollReset:c}=e,h=rG(e,oG),d=typeof l=="string"?l:hr(l),f=/^[a-z+]+:\/\//i.test(d)||d.startsWith("//"),p=d,g=!1;if(cG&&f){let v=new URL(window.location.href),w=d.startsWith("//")?new URL(v.protocol+d):new URL(d);w.origin===v.origin?p=w.pathname+w.search+w.hash:g=!0}let _=BW(p,{relative:i}),y=hG(p,{replace:o,state:a,target:u,preventScrollReset:c,relative:i});function m(v){r&&r(v),v.defaultPrevented||y(v)}return L.createElement("a",Sd({},h,{href:f?d:_,onClick:g||s?r:m,ref:n,target:u}))});var AI;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(AI||(AI={}));var xI;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(xI||(xI={}));function hG(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=VW(),u=uc(),l=tN(t,{relative:o});return L.useCallback(c=>{if(sG(c,n)){c.preventDefault();let h=r!==void 0?r:hr(u)===hr(l);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[u,a,l,r,i,n,t,s,o])}const dG="modulepreload",fG=function(t){return"/react-blog_v2/"+t},NI={},lc=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=fG(s),s in NI)return;NI[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":dG,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((c,h)=>{l.addEventListener("load",c),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},pG=js.lazy(()=>lc(()=>import("./Root-b5e7917c.js"),["assets/Root-b5e7917c.js","assets/useCheckAdmin-86197d09.js","assets/motion-3294bdbd.js","assets/blogUtils-970908a7.js"])),DI=js.lazy(()=>lc(()=>import("./Home-24c82935.js"),["assets/Home-24c82935.js","assets/index-c6db98f5.js","assets/motion-3294bdbd.js"])),mG=js.lazy(()=>lc(()=>import("./Blog-47bd48e0.js"),["assets/Blog-47bd48e0.js","assets/blogUtils-970908a7.js","assets/useCheckAdmin-86197d09.js"])),PI=js.lazy(()=>lc(()=>import("./Write-2932a28a.js"),["assets/Write-2932a28a.js","assets/blogUtils-970908a7.js"])),gG=js.lazy(()=>lc(()=>import("./Category-369b85cb.js"),["assets/Category-369b85cb.js","assets/index-c6db98f5.js","assets/motion-3294bdbd.js"])),yG=[{path:"/",element:gr(pG,{}),children:[{path:"",element:gr(DI,{})},{path:"page/:page",element:gr(DI,{})},{path:"blog/:id",element:gr(mG,{})},{path:"write",element:gr(PI,{})},{path:"write/:id",element:gr(PI,{})},{path:"tag",element:gr(gG,{})}]},{path:"*",loader:()=>dW("/")}];const vG=aG(yG,{basename:"/react-blog_v2/"});Am.createRoot(document.getElementById("root")).render(gr(CO,{store:BH,children:gr(ZW,{router:vG})}));export{DG as B,PG as C,_G as F,UG as L,FG as O,js as R,AG as S,OG as a,MG as b,gr as c,NG as d,VW as e,IH as f,xG as g,SG as h,Ey as i,EG as j,wG as k,hN as l,$G as m,L as r,LG as u};
