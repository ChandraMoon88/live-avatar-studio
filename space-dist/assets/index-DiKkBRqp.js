(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function P0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var tf={exports:{}},ia={},nf={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function L0(){if(Em)return vt;Em=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(O,ie,ke){this.props=O,this.context=ie,this.refs=E,this.updater=ke||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=S.prototype;function L(O,ie,ke){this.props=O,this.context=ie,this.refs=E,this.updater=ke||y}var b=L.prototype=new x;b.constructor=L,M(b,S.prototype),b.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function H(O,ie,ke){var Z,pe={},Te=null,xe=null;if(ie!=null)for(Z in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Te=""+ie.key),ie)N.call(ie,Z)&&!U.hasOwnProperty(Z)&&(pe[Z]=ie[Z]);var Ce=arguments.length-2;if(Ce===1)pe.children=ke;else if(1<Ce){for(var be=Array(Ce),Xe=0;Xe<Ce;Xe++)be[Xe]=arguments[Xe+2];pe.children=be}if(O&&O.defaultProps)for(Z in Ce=O.defaultProps,Ce)pe[Z]===void 0&&(pe[Z]=Ce[Z]);return{$$typeof:o,type:O,key:Te,ref:xe,props:pe,_owner:F.current}}function P(O,ie){return{$$typeof:o,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function z(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ke){return ie[ke]})}var ae=/\/+/g;function J(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):ie.toString(36)}function me(O,ie,ke,Z,pe){var Te=typeof O;(Te==="undefined"||Te==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(Te){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case o:case e:xe=!0}}if(xe)return xe=O,pe=pe(xe),O=Z===""?"."+J(xe,0):Z,A(pe)?(ke="",O!=null&&(ke=O.replace(ae,"$&/")+"/"),me(pe,ie,ke,"",function(Xe){return Xe})):pe!=null&&(C(pe)&&(pe=P(pe,ke+(!pe.key||xe&&xe.key===pe.key?"":(""+pe.key).replace(ae,"$&/")+"/")+O)),ie.push(pe)),1;if(xe=0,Z=Z===""?".":Z+":",A(O))for(var Ce=0;Ce<O.length;Ce++){Te=O[Ce];var be=Z+J(Te,Ce);xe+=me(Te,ie,ke,be,pe)}else if(be=_(O),typeof be=="function")for(O=be.call(O),Ce=0;!(Te=O.next()).done;)Te=Te.value,be=Z+J(Te,Ce++),xe+=me(Te,ie,ke,be,pe);else if(Te==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function ge(O,ie,ke){if(O==null)return O;var Z=[],pe=0;return me(O,Z,"","",function(Te){return ie.call(ke,Te,pe++)}),Z}function fe(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(ke){(O._status===0||O._status===-1)&&(O._status=1,O._result=ke)},function(ke){(O._status===0||O._status===-1)&&(O._status=2,O._result=ke)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var he={current:null},k={transition:null},de={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:k,ReactCurrentOwner:F};function oe(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ge,forEach:function(O,ie,ke){ge(O,function(){ie.apply(this,arguments)},ke)},count:function(O){var ie=0;return ge(O,function(){ie++}),ie},toArray:function(O){return ge(O,function(ie){return ie})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},vt.Component=S,vt.Fragment=t,vt.Profiler=s,vt.PureComponent=L,vt.StrictMode=i,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,vt.act=oe,vt.cloneElement=function(O,ie,ke){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Z=M({},O.props),pe=O.key,Te=O.ref,xe=O._owner;if(ie!=null){if(ie.ref!==void 0&&(Te=ie.ref,xe=F.current),ie.key!==void 0&&(pe=""+ie.key),O.type&&O.type.defaultProps)var Ce=O.type.defaultProps;for(be in ie)N.call(ie,be)&&!U.hasOwnProperty(be)&&(Z[be]=ie[be]===void 0&&Ce!==void 0?Ce[be]:ie[be])}var be=arguments.length-2;if(be===1)Z.children=ke;else if(1<be){Ce=Array(be);for(var Xe=0;Xe<be;Xe++)Ce[Xe]=arguments[Xe+2];Z.children=Ce}return{$$typeof:o,type:O.type,key:pe,ref:Te,props:Z,_owner:xe}},vt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},vt.createElement=H,vt.createFactory=function(O){var ie=H.bind(null,O);return ie.type=O,ie},vt.createRef=function(){return{current:null}},vt.forwardRef=function(O){return{$$typeof:u,render:O}},vt.isValidElement=C,vt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:fe}},vt.memo=function(O,ie){return{$$typeof:h,type:O,compare:ie===void 0?null:ie}},vt.startTransition=function(O){var ie=k.transition;k.transition={};try{O()}finally{k.transition=ie}},vt.unstable_act=oe,vt.useCallback=function(O,ie){return he.current.useCallback(O,ie)},vt.useContext=function(O){return he.current.useContext(O)},vt.useDebugValue=function(){},vt.useDeferredValue=function(O){return he.current.useDeferredValue(O)},vt.useEffect=function(O,ie){return he.current.useEffect(O,ie)},vt.useId=function(){return he.current.useId()},vt.useImperativeHandle=function(O,ie,ke){return he.current.useImperativeHandle(O,ie,ke)},vt.useInsertionEffect=function(O,ie){return he.current.useInsertionEffect(O,ie)},vt.useLayoutEffect=function(O,ie){return he.current.useLayoutEffect(O,ie)},vt.useMemo=function(O,ie){return he.current.useMemo(O,ie)},vt.useReducer=function(O,ie,ke){return he.current.useReducer(O,ie,ke)},vt.useRef=function(O){return he.current.useRef(O)},vt.useState=function(O){return he.current.useState(O)},vt.useSyncExternalStore=function(O,ie,ke){return he.current.useSyncExternalStore(O,ie,ke)},vt.useTransition=function(){return he.current.useTransition()},vt.version="18.3.1",vt}var Tm;function Dd(){return Tm||(Tm=1,nf.exports=L0()),nf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function I0(){if(wm)return ia;wm=1;var o=Dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var m,g={},_=null,y=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(y=d.ref);for(m in d)i.call(d,m)&&!a.hasOwnProperty(m)&&(g[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:u,key:_,ref:y,props:g,_owner:s.current}}return ia.Fragment=t,ia.jsx=c,ia.jsxs=c,ia}var Am;function N0(){return Am||(Am=1,tf.exports=I0()),tf.exports}var q=N0(),dt=Dd();const D0=P0(dt);var Il={},rf={exports:{}},Vn={},sf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function U0(){return Rm||(Rm=1,(function(o){function e(k,de){var oe=k.length;k.push(de);e:for(;0<oe;){var O=oe-1>>>1,ie=k[O];if(0<s(ie,de))k[O]=de,k[oe]=ie,oe=O;else break e}}function t(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var de=k[0],oe=k.pop();if(oe!==de){k[0]=oe;e:for(var O=0,ie=k.length,ke=ie>>>1;O<ke;){var Z=2*(O+1)-1,pe=k[Z],Te=Z+1,xe=k[Te];if(0>s(pe,oe))Te<ie&&0>s(xe,pe)?(k[O]=xe,k[Te]=oe,O=Te):(k[O]=pe,k[Z]=oe,O=Z);else if(Te<ie&&0>s(xe,oe))k[O]=xe,k[Te]=oe,O=Te;else break e}}return de}function s(k,de){var oe=k.sortIndex-de.sortIndex;return oe!==0?oe:k.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var d=[],h=[],m=1,g=null,_=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(k){for(var de=t(h);de!==null;){if(de.callback===null)i(h);else if(de.startTime<=k)i(h),de.sortIndex=de.expirationTime,e(d,de);else break;de=t(h)}}function A(k){if(E=!1,b(k),!M)if(t(d)!==null)M=!0,fe(N);else{var de=t(h);de!==null&&he(A,de.startTime-k)}}function N(k,de){M=!1,E&&(E=!1,x(H),H=-1),y=!0;var oe=_;try{for(b(de),g=t(d);g!==null&&(!(g.expirationTime>de)||k&&!z());){var O=g.callback;if(typeof O=="function"){g.callback=null,_=g.priorityLevel;var ie=O(g.expirationTime<=de);de=o.unstable_now(),typeof ie=="function"?g.callback=ie:g===t(d)&&i(d),b(de)}else i(d);g=t(d)}if(g!==null)var ke=!0;else{var Z=t(h);Z!==null&&he(A,Z.startTime-de),ke=!1}return ke}finally{g=null,_=oe,y=!1}}var F=!1,U=null,H=-1,P=5,C=-1;function z(){return!(o.unstable_now()-C<P)}function ae(){if(U!==null){var k=o.unstable_now();C=k;var de=!0;try{de=U(!0,k)}finally{de?J():(F=!1,U=null)}}else F=!1}var J;if(typeof L=="function")J=function(){L(ae)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ge=me.port2;me.port1.onmessage=ae,J=function(){ge.postMessage(null)}}else J=function(){S(ae,0)};function fe(k){U=k,F||(F=!0,J())}function he(k,de){H=S(function(){k(o.unstable_now())},de)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,fe(N))},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(k){switch(_){case 1:case 2:case 3:var de=3;break;default:de=_}var oe=_;_=de;try{return k()}finally{_=oe}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(k,de){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var oe=_;_=k;try{return de()}finally{_=oe}},o.unstable_scheduleCallback=function(k,de,oe){var O=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=oe+ie,k={id:m++,callback:de,priorityLevel:k,startTime:oe,expirationTime:ie,sortIndex:-1},oe>O?(k.sortIndex=oe,e(h,k),t(d)===null&&k===t(h)&&(E?(x(H),H=-1):E=!0,he(A,oe-O))):(k.sortIndex=ie,e(d,k),M||y||(M=!0,fe(N))),k},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(k){var de=_;return function(){var oe=_;_=de;try{return k.apply(this,arguments)}finally{_=oe}}}})(of)),of}var Cm;function F0(){return Cm||(Cm=1,sf.exports=U0()),sf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function O0(){if(bm)return Vn;bm=1;var o=Dd(),e=F0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return d.call(g,n)?!0:d.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,f,p,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,L);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,r,l,f){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,f)&&(l=null),f||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,f=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var A=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),k=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,O;function ie(n){if(O===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ke=!1;function Z(n,r){if(!n||ke)return"";ke=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(te){var f=te}Reflect.construct(n,[],r)}else{try{r.call()}catch(te){f=te}n.call(r.prototype)}else{try{throw Error()}catch(te){f=te}n()}}catch(te){if(te&&f&&typeof te.stack=="string"){for(var p=te.stack.split(`
`),v=f.stack.split(`
`),T=p.length-1,D=v.length-1;1<=T&&0<=D&&p[T]!==v[D];)D--;for(;1<=T&&0<=D;T--,D--)if(p[T]!==v[D]){if(T!==1||D!==1)do if(T--,D--,0>D||p[T]!==v[D]){var B=`
`+p[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=D);break}}}finally{ke=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ie(n):""}function pe(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case P:return"Profiler";case H:return"StrictMode";case J:return"Suspense";case me:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ae:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ge:return r=n.displayName||null,r!==null?r:Te(n.type)||"Memo";case fe:r=n._payload,n=n._init;try{return Te(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(r);case 8:return r===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Xe(n){var r=be(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){f=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ct(n){n._valueTracker||(n._valueTracker=Xe(n))}function gt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=be(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function Ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function V(n,r){var l=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function $e(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Ce(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Be(n,r){r=r.checked,r!=null&&b(n,"checked",r,!1)}function Ze(n,r){Be(n,r);var l=Ce(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Pe(n,r.type,l):r.hasOwnProperty("defaultValue")&&Pe(n,r.type,Ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function ve(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Pe(n,r,l){(r!=="number"||Ft(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Le=Array.isArray;function I(n,r,l,f){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Ce(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,f&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function w(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Le(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Ce(l)}}function ue(n,r){var l=Ce(r.value),f=Ce(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function ee(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,Me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function tt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(re).forEach(function(n){Ue.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),re[r]=re[n]})});function Je(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||re.hasOwnProperty(n)&&re[n]?(""+r).trim():r+"px"}function rt(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,p=Je(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,p):n[l]=p}}var je=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(n,r){if(r){if(je[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ct(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ie=null,le=null,_e=null;function Oe(n){if(n=Vo(n)){if(typeof Ie!="function")throw Error(t(280));var r=n.stateNode;r&&(r=qa(r),Ie(n.stateNode,n.type,r))}}function Fe(n){le?_e?_e.push(n):_e=[n]:le=n}function ut(){if(le){var n=le,r=_e;if(_e=le=null,Oe(n),r)for(n=0;n<r.length;n++)Oe(r[n])}}function zt(n,r){return n(r)}function tn(){}var At=!1;function Fn(n,r,l){if(At)return n(r,l);At=!0;try{return zt(n,r,l)}finally{At=!1,(le!==null||_e!==null)&&(tn(),ut())}}function Tn(n,r){var l=n.stateNode;if(l===null)return null;var f=qa(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var vs=!1;if(u)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){vs=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{vs=!1}function Oi(n,r,l,f,p,v,T,D,B){var te=Array.prototype.slice.call(arguments,3);try{r.apply(l,te)}catch(Se){this.onError(Se)}}var ki=!1,Vr=null,Gr=!1,lr=null,Aa={onError:function(n){ki=!0,Vr=n}};function xs(n,r,l,f,p,v,T,D,B){ki=!1,Vr=null,Oi.apply(Aa,arguments)}function Ra(n,r,l,f,p,v,T,D,B){if(xs.apply(this,arguments),ki){if(ki){var te=Vr;ki=!1,Vr=null}else throw Error(t(198));Gr||(Gr=!0,lr=te)}}function Ti(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ca(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ba(n){if(Ti(n)!==n)throw Error(t(188))}function Tc(n){var r=n.alternate;if(!r){if(r=Ti(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(f=p.return,f!==null){l=f;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return ba(p),n;if(v===f)return ba(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==f.return)l=p,f=v;else{for(var T=!1,D=p.child;D;){if(D===l){T=!0,l=p,f=v;break}if(D===f){T=!0,f=p,l=v;break}D=D.sibling}if(!T){for(D=v.child;D;){if(D===l){T=!0,l=v,f=p;break}if(D===f){T=!0,f=v,l=p;break}D=D.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Pa(n){return n=Tc(n),n!==null?La(n):null}function La(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=La(n);if(r!==null)return r;n=n.sibling}return null}var R=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ne=e.unstable_shouldYield,se=e.unstable_requestPaint,G=e.unstable_now,we=e.unstable_getCurrentPriorityLevel,Ne=e.unstable_ImmediatePriority,Ve=e.unstable_UserBlockingPriority,Ge=e.unstable_NormalPriority,ot=e.unstable_LowPriority,at=e.unstable_IdlePriority,Qe=null,ft=null;function bt(n){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:et,Gt=Math.log,Et=Math.LN2;function et(n){return n>>>=0,n===0?32:31-(Gt(n)/Et|0)|0}var Yt=64,Mt=4194304;function hn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ai(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,p=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var D=T&~p;D!==0?f=hn(D):(v&=T,v!==0&&(f=hn(v)))}else T=l&~p,T!==0?f=hn(T):v!==0&&(f=hn(v));if(f===0)return 0;if(r!==0&&r!==f&&(r&p)===0&&(p=f&-f,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-Pt(r),p=1<<l,f|=n[l],r&=~p;return f}function wn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wr(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Pt(v),D=1<<T,B=p[T];B===-1?((D&l)===0||(D&f)!==0)&&(p[T]=wn(D,r)):B<=r&&(n.expiredLanes|=D),v&=~D}}function Ot(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=Yt;return Yt<<=1,(Yt&4194240)===0&&(Yt=64),n}function gn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function $t(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Pt(r),n[r]=l}function _n(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Pt(l),v=1<<p;r[p]=0,f[p]=-1,n[p]=-1,l&=~v}}function Xr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-Pt(l),p=1<<f;p&r|n[f]&r&&(n[f]|=r),l&=~p}}var xt=0;function th(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var nh,wc,ih,rh,sh,Ac=!1,Ia=[],cr=null,ur=null,fr=null,Ao=new Map,Ro=new Map,dr=[],Q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(n,r){switch(n){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Ao.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(r.pointerId)}}function Co(n,r,l,f,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:v,targetContainers:[p]},r!==null&&(r=Vo(r),r!==null&&wc(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function J_(n,r,l,f,p){switch(r){case"focusin":return cr=Co(cr,n,r,l,f,p),!0;case"dragenter":return ur=Co(ur,n,r,l,f,p),!0;case"mouseover":return fr=Co(fr,n,r,l,f,p),!0;case"pointerover":var v=p.pointerId;return Ao.set(v,Co(Ao.get(v)||null,n,r,l,f,p)),!0;case"gotpointercapture":return v=p.pointerId,Ro.set(v,Co(Ro.get(v)||null,n,r,l,f,p)),!0}return!1}function ah(n){var r=jr(n.target);if(r!==null){var l=Ti(r);if(l!==null){if(r=l.tag,r===13){if(r=Ca(l),r!==null){n.blockedOn=r,sh(n.priority,function(){ih(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Na(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Cc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Nt=f,l.target.dispatchEvent(f),Nt=null}else return r=Vo(l),r!==null&&wc(r),n.blockedOn=l,!1;r.shift()}return!0}function lh(n,r,l){Na(n)&&l.delete(r)}function ev(){Ac=!1,cr!==null&&Na(cr)&&(cr=null),ur!==null&&Na(ur)&&(ur=null),fr!==null&&Na(fr)&&(fr=null),Ao.forEach(lh),Ro.forEach(lh)}function bo(n,r){n.blockedOn===r&&(n.blockedOn=null,Ac||(Ac=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ev)))}function Po(n){function r(p){return bo(p,n)}if(0<Ia.length){bo(Ia[0],n);for(var l=1;l<Ia.length;l++){var f=Ia[l];f.blockedOn===n&&(f.blockedOn=null)}}for(cr!==null&&bo(cr,n),ur!==null&&bo(ur,n),fr!==null&&bo(fr,n),Ao.forEach(r),Ro.forEach(r),l=0;l<dr.length;l++)f=dr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<dr.length&&(l=dr[0],l.blockedOn===null);)ah(l),l.blockedOn===null&&dr.shift()}var ys=A.ReactCurrentBatchConfig,Da=!0;function tv(n,r,l,f){var p=xt,v=ys.transition;ys.transition=null;try{xt=1,Rc(n,r,l,f)}finally{xt=p,ys.transition=v}}function nv(n,r,l,f){var p=xt,v=ys.transition;ys.transition=null;try{xt=4,Rc(n,r,l,f)}finally{xt=p,ys.transition=v}}function Rc(n,r,l,f){if(Da){var p=Cc(n,r,l,f);if(p===null)Xc(n,r,f,Ua,l),oh(n,f);else if(J_(p,n,r,l,f))f.stopPropagation();else if(oh(n,f),r&4&&-1<Q_.indexOf(n)){for(;p!==null;){var v=Vo(p);if(v!==null&&nh(v),v=Cc(n,r,l,f),v===null&&Xc(n,r,f,Ua,l),v===p)break;p=v}p!==null&&f.stopPropagation()}else Xc(n,r,f,null,l)}}var Ua=null;function Cc(n,r,l,f){if(Ua=null,n=X(f),n=jr(n),n!==null)if(r=Ti(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ca(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ua=n,null}function ch(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(we()){case Ne:return 1;case Ve:return 4;case Ge:case ot:return 16;case at:return 536870912;default:return 16}default:return 16}}var hr=null,bc=null,Fa=null;function uh(){if(Fa)return Fa;var n,r=bc,l=r.length,f,p="value"in hr?hr.value:hr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(f=1;f<=T&&r[l-f]===p[v-f];f++);return Fa=p.slice(n,1<f?1-f:void 0)}function Oa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ka(){return!0}function fh(){return!1}function Xn(n){function r(l,f,p,v,T){this._reactName=l,this._targetInst=p,this.type=f,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(l=n[D],this[D]=l?l(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?ka:fh,this.isPropagationStopped=fh,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),r}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=Xn(Ss),Lo=oe({},Ss,{view:0,detail:0}),iv=Xn(Lo),Lc,Ic,Io,Ba=oe({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Io&&(Io&&n.type==="mousemove"?(Lc=n.screenX-Io.screenX,Ic=n.screenY-Io.screenY):Ic=Lc=0,Io=n),Lc)},movementY:function(n){return"movementY"in n?n.movementY:Ic}}),dh=Xn(Ba),rv=oe({},Ba,{dataTransfer:0}),sv=Xn(rv),ov=oe({},Lo,{relatedTarget:0}),Nc=Xn(ov),av=oe({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),lv=Xn(av),cv=oe({},Ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uv=Xn(cv),fv=oe({},Ss,{data:0}),hh=Xn(fv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=pv[n])?!!r[n]:!1}function Dc(){return mv}var gv=oe({},Lo,{key:function(n){if(n.key){var r=dv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Oa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?hv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(n){return n.type==="keypress"?Oa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Oa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_v=Xn(gv),vv=oe({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=Xn(vv),xv=oe({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),yv=Xn(xv),Sv=oe({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=Xn(Sv),Ev=oe({},Ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=Xn(Ev),wv=[9,13,27,32],Uc=u&&"CompositionEvent"in window,No=null;u&&"documentMode"in document&&(No=document.documentMode);var Av=u&&"TextEvent"in window&&!No,mh=u&&(!Uc||No&&8<No&&11>=No),gh=" ",_h=!1;function vh(n,r){switch(n){case"keyup":return wv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ms=!1;function Rv(n,r){switch(n){case"compositionend":return xh(r);case"keypress":return r.which!==32?null:(_h=!0,gh);case"textInput":return n=r.data,n===gh&&_h?null:n;default:return null}}function Cv(n,r){if(Ms)return n==="compositionend"||!Uc&&vh(n,r)?(n=uh(),Fa=bc=hr=null,Ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return mh&&r.locale!=="ko"?null:r.data;default:return null}}var bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!bv[n.type]:r==="textarea"}function Sh(n,r,l,f){Fe(f),r=Wa(r,"onChange"),0<r.length&&(l=new Pc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var Do=null,Uo=null;function Pv(n){Bh(n,0)}function za(n){var r=Rs(n);if(gt(r))return n}function Lv(n,r){if(n==="change")return r}var Mh=!1;if(u){var Fc;if(u){var Oc="oninput"in document;if(!Oc){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),Oc=typeof Eh.oninput=="function"}Fc=Oc}else Fc=!1;Mh=Fc&&(!document.documentMode||9<document.documentMode)}function Th(){Do&&(Do.detachEvent("onpropertychange",wh),Uo=Do=null)}function wh(n){if(n.propertyName==="value"&&za(Uo)){var r=[];Sh(r,Uo,n,X(n)),Fn(Pv,r)}}function Iv(n,r,l){n==="focusin"?(Th(),Do=r,Uo=l,Do.attachEvent("onpropertychange",wh)):n==="focusout"&&Th()}function Nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return za(Uo)}function Dv(n,r){if(n==="click")return za(r)}function Uv(n,r){if(n==="input"||n==="change")return za(r)}function Fv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var li=typeof Object.is=="function"?Object.is:Fv;function Fo(n,r){if(li(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var p=l[f];if(!d.call(r,p)||!li(n[p],r[p]))return!1}return!0}function Ah(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Rh(n,r){var l=Ah(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ah(l)}}function Ch(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ch(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function bh(){for(var n=window,r=Ft();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ft(n.document)}return r}function kc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Ov(n){var r=bh(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Ch(l.ownerDocument.documentElement,l)){if(f!==null&&kc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(f.start,p);f=f.end===void 0?v:Math.min(f.end,p),!n.extend&&v>f&&(p=f,f=v,v=p),p=Rh(l,v);var T=Rh(l,f);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kv=u&&"documentMode"in document&&11>=document.documentMode,Es=null,Bc=null,Oo=null,zc=!1;function Ph(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;zc||Es==null||Es!==Ft(f)||(f=Es,"selectionStart"in f&&kc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Oo&&Fo(Oo,f)||(Oo=f,f=Wa(Bc,"onSelect"),0<f.length&&(r=new Pc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=Es)))}function Ha(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ts={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},Hc={},Lh={};u&&(Lh=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Va(n){if(Hc[n])return Hc[n];if(!Ts[n])return n;var r=Ts[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Lh)return Hc[n]=r[l];return n}var Ih=Va("animationend"),Nh=Va("animationiteration"),Dh=Va("animationstart"),Uh=Va("transitionend"),Fh=new Map,Oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,r){Fh.set(n,r),a(r,[n])}for(var Vc=0;Vc<Oh.length;Vc++){var Gc=Oh[Vc],Bv=Gc.toLowerCase(),zv=Gc[0].toUpperCase()+Gc.slice(1);pr(Bv,"on"+zv)}pr(Ih,"onAnimationEnd"),pr(Nh,"onAnimationIteration"),pr(Dh,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(Uh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function kh(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,Ra(f,r,void 0,n),n.currentTarget=null}function Bh(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],p=f.event;f=f.listeners;e:{var v=void 0;if(r)for(var T=f.length-1;0<=T;T--){var D=f[T],B=D.instance,te=D.currentTarget;if(D=D.listener,B!==v&&p.isPropagationStopped())break e;kh(p,D,te),v=B}else for(T=0;T<f.length;T++){if(D=f[T],B=D.instance,te=D.currentTarget,D=D.listener,B!==v&&p.isPropagationStopped())break e;kh(p,D,te),v=B}}}if(Gr)throw n=lr,Gr=!1,lr=null,n}function Ht(n,r){var l=r[Zc];l===void 0&&(l=r[Zc]=new Set);var f=n+"__bubble";l.has(f)||(zh(r,n,2,!1),l.add(f))}function Wc(n,r,l){var f=0;r&&(f|=4),zh(l,n,f,r)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function Bo(n){if(!n[Ga]){n[Ga]=!0,i.forEach(function(l){l!=="selectionchange"&&(Hv.has(l)||Wc(l,!1,n),Wc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ga]||(r[Ga]=!0,Wc("selectionchange",!1,r))}}function zh(n,r,l,f){switch(ch(r)){case 1:var p=tv;break;case 4:p=nv;break;default:p=Rc}l=p.bind(null,r,l,n),p=void 0,!vs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),f?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Xc(n,r,l,f,p){var v=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var D=f.stateNode.containerInfo;if(D===p||D.nodeType===8&&D.parentNode===p)break;if(T===4)for(T=f.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;T=T.return}for(;D!==null;){if(T=jr(D),T===null)return;if(B=T.tag,B===5||B===6){f=v=T;continue e}D=D.parentNode}}f=f.return}Fn(function(){var te=v,Se=X(l),Ee=[];e:{var ye=Fh.get(n);if(ye!==void 0){var ze=Pc,qe=n;switch(n){case"keypress":if(Oa(l)===0)break e;case"keydown":case"keyup":ze=_v;break;case"focusin":qe="focus",ze=Nc;break;case"focusout":qe="blur",ze=Nc;break;case"beforeblur":case"afterblur":ze=Nc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=yv;break;case Ih:case Nh:case Dh:ze=lv;break;case Uh:ze=Mv;break;case"scroll":ze=iv;break;case"wheel":ze=Tv;break;case"copy":case"cut":case"paste":ze=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=ph}var Ye=(r&4)!==0,Zt=!Ye&&n==="scroll",$=Ye?ye!==null?ye+"Capture":null:ye;Ye=[];for(var W=te,Q;W!==null;){Q=W;var Ae=Q.stateNode;if(Q.tag===5&&Ae!==null&&(Q=Ae,$!==null&&(Ae=Tn(W,$),Ae!=null&&Ye.push(zo(W,Ae,Q)))),Zt)break;W=W.return}0<Ye.length&&(ye=new ze(ye,qe,null,l,Se),Ee.push({event:ye,listeners:Ye}))}}if((r&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ye&&l!==Nt&&(qe=l.relatedTarget||l.fromElement)&&(jr(qe)||qe[Bi]))break e;if((ze||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,ze?(qe=l.relatedTarget||l.toElement,ze=te,qe=qe?jr(qe):null,qe!==null&&(Zt=Ti(qe),qe!==Zt||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(ze=null,qe=te),ze!==qe)){if(Ye=dh,Ae="onMouseLeave",$="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=ph,Ae="onPointerLeave",$="onPointerEnter",W="pointer"),Zt=ze==null?ye:Rs(ze),Q=qe==null?ye:Rs(qe),ye=new Ye(Ae,W+"leave",ze,l,Se),ye.target=Zt,ye.relatedTarget=Q,Ae=null,jr(Se)===te&&(Ye=new Ye($,W+"enter",qe,l,Se),Ye.target=Q,Ye.relatedTarget=Zt,Ae=Ye),Zt=Ae,ze&&qe)t:{for(Ye=ze,$=qe,W=0,Q=Ye;Q;Q=ws(Q))W++;for(Q=0,Ae=$;Ae;Ae=ws(Ae))Q++;for(;0<W-Q;)Ye=ws(Ye),W--;for(;0<Q-W;)$=ws($),Q--;for(;W--;){if(Ye===$||$!==null&&Ye===$.alternate)break t;Ye=ws(Ye),$=ws($)}Ye=null}else Ye=null;ze!==null&&Hh(Ee,ye,ze,Ye,!1),qe!==null&&Zt!==null&&Hh(Ee,Zt,qe,Ye,!0)}}e:{if(ye=te?Rs(te):window,ze=ye.nodeName&&ye.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ye.type==="file")var Ke=Lv;else if(yh(ye))if(Mh)Ke=Uv;else{Ke=Nv;var nt=Iv}else(ze=ye.nodeName)&&ze.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Ke=Dv);if(Ke&&(Ke=Ke(n,te))){Sh(Ee,Ke,l,Se);break e}nt&&nt(n,ye,te),n==="focusout"&&(nt=ye._wrapperState)&&nt.controlled&&ye.type==="number"&&Pe(ye,"number",ye.value)}switch(nt=te?Rs(te):window,n){case"focusin":(yh(nt)||nt.contentEditable==="true")&&(Es=nt,Bc=te,Oo=null);break;case"focusout":Oo=Bc=Es=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Ph(Ee,l,Se);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":Ph(Ee,l,Se)}var it;if(Uc)e:{switch(n){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Ms?vh(n,l)&&(lt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(lt="onCompositionStart");lt&&(mh&&l.locale!=="ko"&&(Ms||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Ms&&(it=uh()):(hr=Se,bc="value"in hr?hr.value:hr.textContent,Ms=!0)),nt=Wa(te,lt),0<nt.length&&(lt=new hh(lt,n,null,l,Se),Ee.push({event:lt,listeners:nt}),it?lt.data=it:(it=xh(l),it!==null&&(lt.data=it)))),(it=Av?Rv(n,l):Cv(n,l))&&(te=Wa(te,"onBeforeInput"),0<te.length&&(Se=new hh("onBeforeInput","beforeinput",null,l,Se),Ee.push({event:Se,listeners:te}),Se.data=it))}Bh(Ee,r)})}function zo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Wa(n,r){for(var l=r+"Capture",f=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Tn(n,l),v!=null&&f.unshift(zo(n,v,p)),v=Tn(n,r),v!=null&&f.push(zo(n,v,p))),n=n.return}return f}function ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hh(n,r,l,f,p){for(var v=r._reactName,T=[];l!==null&&l!==f;){var D=l,B=D.alternate,te=D.stateNode;if(B!==null&&B===f)break;D.tag===5&&te!==null&&(D=te,p?(B=Tn(l,v),B!=null&&T.unshift(zo(l,B,D))):p||(B=Tn(l,v),B!=null&&T.push(zo(l,B,D)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var Vv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function Vh(n){return(typeof n=="string"?n:""+n).replace(Vv,`
`).replace(Gv,"")}function Xa(n,r,l){if(r=Vh(r),Vh(n)!==r&&l)throw Error(t(425))}function ja(){}var jc=null,qc=null;function Yc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(n){return Gh.resolve(null).then(n).catch(jv)}:Kc;function jv(n){setTimeout(function(){throw n})}function $c(n,r){var l=r,f=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(f===0){n.removeChild(p),Po(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=p}while(l);Po(r)}function mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Wh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var As=Math.random().toString(36).slice(2),wi="__reactFiber$"+As,Ho="__reactProps$"+As,Bi="__reactContainer$"+As,Zc="__reactEvents$"+As,qv="__reactListeners$"+As,Yv="__reactHandles$"+As;function jr(n){var r=n[wi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Bi]||l[wi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Wh(n);n!==null;){if(l=n[wi])return l;n=Wh(n)}return r}n=l,l=n.parentNode}return null}function Vo(n){return n=n[wi]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qa(n){return n[Ho]||null}var Qc=[],Cs=-1;function gr(n){return{current:n}}function Vt(n){0>Cs||(n.current=Qc[Cs],Qc[Cs]=null,Cs--)}function Bt(n,r){Cs++,Qc[Cs]=n.current,n.current=r}var _r={},vn=gr(_r),On=gr(!1),qr=_r;function bs(n,r){var l=n.type.contextTypes;if(!l)return _r;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function kn(n){return n=n.childContextTypes,n!=null}function Ya(){Vt(On),Vt(vn)}function Xh(n,r,l){if(vn.current!==_r)throw Error(t(168));Bt(vn,r),Bt(On,l)}function jh(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var p in f)if(!(p in r))throw Error(t(108,xe(n)||"Unknown",p));return oe({},l,f)}function Ka(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,qr=vn.current,Bt(vn,n),Bt(On,On.current),!0}function qh(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=jh(n,r,qr),f.__reactInternalMemoizedMergedChildContext=n,Vt(On),Vt(vn),Bt(vn,n)):Vt(On),Bt(On,l)}var zi=null,$a=!1,Jc=!1;function Yh(n){zi===null?zi=[n]:zi.push(n)}function Kv(n){$a=!0,Yh(n)}function vr(){if(!Jc&&zi!==null){Jc=!0;var n=0,r=xt;try{var l=zi;for(xt=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}zi=null,$a=!1}catch(p){throw zi!==null&&(zi=zi.slice(n+1)),R(Ne,vr),p}finally{xt=r,Jc=!1}}return null}var Ps=[],Ls=0,Za=null,Qa=0,Qn=[],Jn=0,Yr=null,Hi=1,Vi="";function Kr(n,r){Ps[Ls++]=Qa,Ps[Ls++]=Za,Za=n,Qa=r}function Kh(n,r,l){Qn[Jn++]=Hi,Qn[Jn++]=Vi,Qn[Jn++]=Yr,Yr=n;var f=Hi;n=Vi;var p=32-Pt(f)-1;f&=~(1<<p),l+=1;var v=32-Pt(r)+p;if(30<v){var T=p-p%5;v=(f&(1<<T)-1).toString(32),f>>=T,p-=T,Hi=1<<32-Pt(r)+p|l<<p|f,Vi=v+n}else Hi=1<<v|l<<p|f,Vi=n}function eu(n){n.return!==null&&(Kr(n,1),Kh(n,1,0))}function tu(n){for(;n===Za;)Za=Ps[--Ls],Ps[Ls]=null,Qa=Ps[--Ls],Ps[Ls]=null;for(;n===Yr;)Yr=Qn[--Jn],Qn[Jn]=null,Vi=Qn[--Jn],Qn[Jn]=null,Hi=Qn[--Jn],Qn[Jn]=null}var jn=null,qn=null,Wt=!1,ci=null;function $h(n,r){var l=ii(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Zh(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,jn=n,qn=mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,jn=n,qn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Yr!==null?{id:Hi,overflow:Vi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ii(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,jn=n,qn=null,!0):!1;default:return!1}}function nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function iu(n){if(Wt){var r=qn;if(r){var l=r;if(!Zh(n,r)){if(nu(n))throw Error(t(418));r=mr(l.nextSibling);var f=jn;r&&Zh(n,r)?$h(f,l):(n.flags=n.flags&-4097|2,Wt=!1,jn=n)}}else{if(nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,jn=n}}}function Qh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Ja(n){if(n!==jn)return!1;if(!Wt)return Qh(n),Wt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Yc(n.type,n.memoizedProps)),r&&(r=qn)){if(nu(n))throw Jh(),Error(t(418));for(;r;)$h(n,r),r=mr(r.nextSibling)}if(Qh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){qn=mr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}qn=null}}else qn=jn?mr(n.stateNode.nextSibling):null;return!0}function Jh(){for(var n=qn;n;)n=mr(n.nextSibling)}function Is(){qn=jn=null,Wt=!1}function ru(n){ci===null?ci=[n]:ci.push(n)}var $v=A.ReactCurrentBatchConfig;function Go(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var p=f,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var D=p.refs;T===null?delete D[v]:D[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function el(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function ep(n){var r=n._init;return r(n._payload)}function tp(n){function r($,W){if(n){var Q=$.deletions;Q===null?($.deletions=[W],$.flags|=16):Q.push(W)}}function l($,W){if(!n)return null;for(;W!==null;)r($,W),W=W.sibling;return null}function f($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function p($,W){return $=Ar($,W),$.index=0,$.sibling=null,$}function v($,W,Q){return $.index=Q,n?(Q=$.alternate,Q!==null?(Q=Q.index,Q<W?($.flags|=2,W):Q):($.flags|=2,W)):($.flags|=1048576,W)}function T($){return n&&$.alternate===null&&($.flags|=2),$}function D($,W,Q,Ae){return W===null||W.tag!==6?(W=Ku(Q,$.mode,Ae),W.return=$,W):(W=p(W,Q),W.return=$,W)}function B($,W,Q,Ae){var Ke=Q.type;return Ke===U?Se($,W,Q.props.children,Ae,Q.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===fe&&ep(Ke)===W.type)?(Ae=p(W,Q.props),Ae.ref=Go($,W,Q),Ae.return=$,Ae):(Ae=Tl(Q.type,Q.key,Q.props,null,$.mode,Ae),Ae.ref=Go($,W,Q),Ae.return=$,Ae)}function te($,W,Q,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==Q.containerInfo||W.stateNode.implementation!==Q.implementation?(W=$u(Q,$.mode,Ae),W.return=$,W):(W=p(W,Q.children||[]),W.return=$,W)}function Se($,W,Q,Ae,Ke){return W===null||W.tag!==7?(W=is(Q,$.mode,Ae,Ke),W.return=$,W):(W=p(W,Q),W.return=$,W)}function Ee($,W,Q){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Ku(""+W,$.mode,Q),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return Q=Tl(W.type,W.key,W.props,null,$.mode,Q),Q.ref=Go($,null,W),Q.return=$,Q;case F:return W=$u(W,$.mode,Q),W.return=$,W;case fe:var Ae=W._init;return Ee($,Ae(W._payload),Q)}if(Le(W)||de(W))return W=is(W,$.mode,Q,null),W.return=$,W;el($,W)}return null}function ye($,W,Q,Ae){var Ke=W!==null?W.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ke!==null?null:D($,W,""+Q,Ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case N:return Q.key===Ke?B($,W,Q,Ae):null;case F:return Q.key===Ke?te($,W,Q,Ae):null;case fe:return Ke=Q._init,ye($,W,Ke(Q._payload),Ae)}if(Le(Q)||de(Q))return Ke!==null?null:Se($,W,Q,Ae,null);el($,Q)}return null}function ze($,W,Q,Ae,Ke){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return $=$.get(Q)||null,D(W,$,""+Ae,Ke);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case N:return $=$.get(Ae.key===null?Q:Ae.key)||null,B(W,$,Ae,Ke);case F:return $=$.get(Ae.key===null?Q:Ae.key)||null,te(W,$,Ae,Ke);case fe:var nt=Ae._init;return ze($,W,Q,nt(Ae._payload),Ke)}if(Le(Ae)||de(Ae))return $=$.get(Q)||null,Se(W,$,Ae,Ke,null);el(W,Ae)}return null}function qe($,W,Q,Ae){for(var Ke=null,nt=null,it=W,lt=W=0,cn=null;it!==null&&lt<Q.length;lt++){it.index>lt?(cn=it,it=null):cn=it.sibling;var Lt=ye($,it,Q[lt],Ae);if(Lt===null){it===null&&(it=cn);break}n&&it&&Lt.alternate===null&&r($,it),W=v(Lt,W,lt),nt===null?Ke=Lt:nt.sibling=Lt,nt=Lt,it=cn}if(lt===Q.length)return l($,it),Wt&&Kr($,lt),Ke;if(it===null){for(;lt<Q.length;lt++)it=Ee($,Q[lt],Ae),it!==null&&(W=v(it,W,lt),nt===null?Ke=it:nt.sibling=it,nt=it);return Wt&&Kr($,lt),Ke}for(it=f($,it);lt<Q.length;lt++)cn=ze(it,$,lt,Q[lt],Ae),cn!==null&&(n&&cn.alternate!==null&&it.delete(cn.key===null?lt:cn.key),W=v(cn,W,lt),nt===null?Ke=cn:nt.sibling=cn,nt=cn);return n&&it.forEach(function(Rr){return r($,Rr)}),Wt&&Kr($,lt),Ke}function Ye($,W,Q,Ae){var Ke=de(Q);if(typeof Ke!="function")throw Error(t(150));if(Q=Ke.call(Q),Q==null)throw Error(t(151));for(var nt=Ke=null,it=W,lt=W=0,cn=null,Lt=Q.next();it!==null&&!Lt.done;lt++,Lt=Q.next()){it.index>lt?(cn=it,it=null):cn=it.sibling;var Rr=ye($,it,Lt.value,Ae);if(Rr===null){it===null&&(it=cn);break}n&&it&&Rr.alternate===null&&r($,it),W=v(Rr,W,lt),nt===null?Ke=Rr:nt.sibling=Rr,nt=Rr,it=cn}if(Lt.done)return l($,it),Wt&&Kr($,lt),Ke;if(it===null){for(;!Lt.done;lt++,Lt=Q.next())Lt=Ee($,Lt.value,Ae),Lt!==null&&(W=v(Lt,W,lt),nt===null?Ke=Lt:nt.sibling=Lt,nt=Lt);return Wt&&Kr($,lt),Ke}for(it=f($,it);!Lt.done;lt++,Lt=Q.next())Lt=ze(it,$,lt,Lt.value,Ae),Lt!==null&&(n&&Lt.alternate!==null&&it.delete(Lt.key===null?lt:Lt.key),W=v(Lt,W,lt),nt===null?Ke=Lt:nt.sibling=Lt,nt=Lt);return n&&it.forEach(function(b0){return r($,b0)}),Wt&&Kr($,lt),Ke}function Zt($,W,Q,Ae){if(typeof Q=="object"&&Q!==null&&Q.type===U&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case N:e:{for(var Ke=Q.key,nt=W;nt!==null;){if(nt.key===Ke){if(Ke=Q.type,Ke===U){if(nt.tag===7){l($,nt.sibling),W=p(nt,Q.props.children),W.return=$,$=W;break e}}else if(nt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===fe&&ep(Ke)===nt.type){l($,nt.sibling),W=p(nt,Q.props),W.ref=Go($,nt,Q),W.return=$,$=W;break e}l($,nt);break}else r($,nt);nt=nt.sibling}Q.type===U?(W=is(Q.props.children,$.mode,Ae,Q.key),W.return=$,$=W):(Ae=Tl(Q.type,Q.key,Q.props,null,$.mode,Ae),Ae.ref=Go($,W,Q),Ae.return=$,$=Ae)}return T($);case F:e:{for(nt=Q.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===Q.containerInfo&&W.stateNode.implementation===Q.implementation){l($,W.sibling),W=p(W,Q.children||[]),W.return=$,$=W;break e}else{l($,W);break}else r($,W);W=W.sibling}W=$u(Q,$.mode,Ae),W.return=$,$=W}return T($);case fe:return nt=Q._init,Zt($,W,nt(Q._payload),Ae)}if(Le(Q))return qe($,W,Q,Ae);if(de(Q))return Ye($,W,Q,Ae);el($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,W!==null&&W.tag===6?(l($,W.sibling),W=p(W,Q),W.return=$,$=W):(l($,W),W=Ku(Q,$.mode,Ae),W.return=$,$=W),T($)):l($,W)}return Zt}var Ns=tp(!0),np=tp(!1),tl=gr(null),nl=null,Ds=null,su=null;function ou(){su=Ds=nl=null}function au(n){var r=tl.current;Vt(tl),n._currentValue=r}function lu(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Us(n,r){nl=n,su=Ds=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function ei(n){var r=n._currentValue;if(su!==n)if(n={context:n,memoizedValue:r,next:null},Ds===null){if(nl===null)throw Error(t(308));Ds=n,nl.dependencies={lanes:0,firstContext:n}}else Ds=Ds.next=n;return r}var $r=null;function cu(n){$r===null?$r=[n]:$r.push(n)}function ip(n,r,l,f){var p=r.interleaved;return p===null?(l.next=l,cu(r)):(l.next=p.next,p.next=l),r.interleaved=l,Gi(n,f)}function Gi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var xr=!1;function uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function yr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(Rt&2)!==0){var p=f.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),f.pending=r,Gi(n,l)}return p=f.interleaved,p===null?(r.next=r,cu(f)):(r.next=p.next,p.next=r),f.interleaved=r,Gi(n,l)}function il(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Xr(n,l)}}function sp(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function rl(n,r,l,f){var p=n.updateQueue;xr=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var B=D,te=B.next;B.next=null,T===null?v=te:T.next=te,T=B;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==T&&(D===null?Se.firstBaseUpdate=te:D.next=te,Se.lastBaseUpdate=B))}if(v!==null){var Ee=p.baseState;T=0,Se=te=B=null,D=v;do{var ye=D.lane,ze=D.eventTime;if((f&ye)===ye){Se!==null&&(Se=Se.next={eventTime:ze,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var qe=n,Ye=D;switch(ye=r,ze=l,Ye.tag){case 1:if(qe=Ye.payload,typeof qe=="function"){Ee=qe.call(ze,Ee,ye);break e}Ee=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ye.payload,ye=typeof qe=="function"?qe.call(ze,Ee,ye):qe,ye==null)break e;Ee=oe({},Ee,ye);break e;case 2:xr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ye=p.effects,ye===null?p.effects=[D]:ye.push(D))}else ze={eventTime:ze,lane:ye,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(te=Se=ze,B=Ee):Se=Se.next=ze,T|=ye;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;ye=D,D=ye.next,ye.next=null,p.lastBaseUpdate=ye,p.shared.pending=null}}while(!0);if(Se===null&&(B=Ee),p.baseState=B,p.firstBaseUpdate=te,p.lastBaseUpdate=Se,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);Jr|=T,n.lanes=T,n.memoizedState=Ee}}function op(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],p=f.callback;if(p!==null){if(f.callback=null,f=l,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var Wo={},Ai=gr(Wo),Xo=gr(Wo),jo=gr(Wo);function Zr(n){if(n===Wo)throw Error(t(174));return n}function fu(n,r){switch(Bt(jo,r),Bt(Xo,n),Bt(Ai,Wo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:He(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=He(r,n)}Vt(Ai),Bt(Ai,r)}function Fs(){Vt(Ai),Vt(Xo),Vt(jo)}function ap(n){Zr(jo.current);var r=Zr(Ai.current),l=He(r,n.type);r!==l&&(Bt(Xo,n),Bt(Ai,l))}function du(n){Xo.current===n&&(Vt(Ai),Vt(Xo))}var jt=gr(0);function sl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hu=[];function pu(){for(var n=0;n<hu.length;n++)hu[n]._workInProgressVersionPrimary=null;hu.length=0}var ol=A.ReactCurrentDispatcher,mu=A.ReactCurrentBatchConfig,Qr=0,qt=null,nn=null,an=null,al=!1,qo=!1,Yo=0,Zv=0;function xn(){throw Error(t(321))}function gu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!li(n[l],r[l]))return!1;return!0}function _u(n,r,l,f,p,v){if(Qr=v,qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ol.current=n===null||n.memoizedState===null?t0:n0,n=l(f,p),qo){v=0;do{if(qo=!1,Yo=0,25<=v)throw Error(t(301));v+=1,an=nn=null,r.updateQueue=null,ol.current=i0,n=l(f,p)}while(qo)}if(ol.current=ul,r=nn!==null&&nn.next!==null,Qr=0,an=nn=qt=null,al=!1,r)throw Error(t(300));return n}function vu(){var n=Yo!==0;return Yo=0,n}function Ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?qt.memoizedState=an=n:an=an.next=n,an}function ti(){if(nn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var r=an===null?qt.memoizedState:an.next;if(r!==null)an=r,nn=n;else{if(n===null)throw Error(t(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},an===null?qt.memoizedState=an=n:an=an.next=n}return an}function Ko(n,r){return typeof r=="function"?r(n):r}function xu(n){var r=ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=nn,p=f.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}f.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,f=f.baseState;var D=T=null,B=null,te=v;do{var Se=te.lane;if((Qr&Se)===Se)B!==null&&(B=B.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),f=te.hasEagerState?te.eagerState:n(f,te.action);else{var Ee={lane:Se,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};B===null?(D=B=Ee,T=f):B=B.next=Ee,qt.lanes|=Se,Jr|=Se}te=te.next}while(te!==null&&te!==v);B===null?T=f:B.next=D,li(f,r.memoizedState)||(Bn=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=B,l.lastRenderedState=f}if(n=l.interleaved,n!==null){p=n;do v=p.lane,qt.lanes|=v,Jr|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function yu(n){var r=ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);li(v,r.memoizedState)||(Bn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,f]}function lp(){}function cp(n,r){var l=qt,f=ti(),p=r(),v=!li(f.memoizedState,p);if(v&&(f.memoizedState=p,Bn=!0),f=f.queue,Su(dp.bind(null,l,f,n),[n]),f.getSnapshot!==r||v||an!==null&&an.memoizedState.tag&1){if(l.flags|=2048,$o(9,fp.bind(null,l,f,p,r),void 0,null),ln===null)throw Error(t(349));(Qr&30)!==0||up(l,r,p)}return p}function up(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function fp(n,r,l,f){r.value=l,r.getSnapshot=f,hp(r)&&pp(n)}function dp(n,r,l){return l(function(){hp(r)&&pp(n)})}function hp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!li(n,l)}catch{return!0}}function pp(n){var r=Gi(n,1);r!==null&&hi(r,n,1,-1)}function mp(n){var r=Ri();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:n},r.queue=n,n=n.dispatch=e0.bind(null,qt,n),[r.memoizedState,n]}function $o(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function gp(){return ti().memoizedState}function ll(n,r,l,f){var p=Ri();qt.flags|=n,p.memoizedState=$o(1|r,l,void 0,f===void 0?null:f)}function cl(n,r,l,f){var p=ti();f=f===void 0?null:f;var v=void 0;if(nn!==null){var T=nn.memoizedState;if(v=T.destroy,f!==null&&gu(f,T.deps)){p.memoizedState=$o(r,l,v,f);return}}qt.flags|=n,p.memoizedState=$o(1|r,l,v,f)}function _p(n,r){return ll(8390656,8,n,r)}function Su(n,r){return cl(2048,8,n,r)}function vp(n,r){return cl(4,2,n,r)}function xp(n,r){return cl(4,4,n,r)}function yp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Sp(n,r,l){return l=l!=null?l.concat([n]):null,cl(4,4,yp.bind(null,r,n),l)}function Mu(){}function Mp(n,r){var l=ti();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&gu(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function Ep(n,r){var l=ti();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&gu(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function Tp(n,r,l){return(Qr&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=l):(li(l,r)||(l=An(),qt.lanes|=l,Jr|=l,n.baseState=!0),r)}function Qv(n,r){var l=xt;xt=l!==0&&4>l?l:4,n(!0);var f=mu.transition;mu.transition={};try{n(!1),r()}finally{xt=l,mu.transition=f}}function wp(){return ti().memoizedState}function Jv(n,r,l){var f=Tr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Ap(n))Rp(r,l);else if(l=ip(n,r,l,f),l!==null){var p=Cn();hi(l,n,f,p),Cp(l,r,f)}}function e0(n,r,l){var f=Tr(n),p={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ap(n))Rp(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,D=v(T,l);if(p.hasEagerState=!0,p.eagerState=D,li(D,T)){var B=r.interleaved;B===null?(p.next=p,cu(r)):(p.next=B.next,B.next=p),r.interleaved=p;return}}catch{}finally{}l=ip(n,r,p,f),l!==null&&(p=Cn(),hi(l,n,f,p),Cp(l,r,f))}}function Ap(n){var r=n.alternate;return n===qt||r!==null&&r===qt}function Rp(n,r){qo=al=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Cp(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Xr(n,l)}}var ul={readContext:ei,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},t0={readContext:ei,useCallback:function(n,r){return Ri().memoizedState=[n,r===void 0?null:r],n},useContext:ei,useEffect:_p,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,ll(4194308,4,yp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return ll(4194308,4,n,r)},useInsertionEffect:function(n,r){return ll(4,2,n,r)},useMemo:function(n,r){var l=Ri();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Ri();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=Jv.bind(null,qt,n),[f.memoizedState,n]},useRef:function(n){var r=Ri();return n={current:n},r.memoizedState=n},useState:mp,useDebugValue:Mu,useDeferredValue:function(n){return Ri().memoizedState=n},useTransition:function(){var n=mp(!1),r=n[0];return n=Qv.bind(null,n[1]),Ri().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=qt,p=Ri();if(Wt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),ln===null)throw Error(t(349));(Qr&30)!==0||up(f,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,_p(dp.bind(null,f,v,n),[n]),f.flags|=2048,$o(9,fp.bind(null,f,v,l,r),void 0,null),l},useId:function(){var n=Ri(),r=ln.identifierPrefix;if(Wt){var l=Vi,f=Hi;l=(f&~(1<<32-Pt(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Yo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Zv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},n0={readContext:ei,useCallback:Mp,useContext:ei,useEffect:Su,useImperativeHandle:Sp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:Ep,useReducer:xu,useRef:gp,useState:function(){return xu(Ko)},useDebugValue:Mu,useDeferredValue:function(n){var r=ti();return Tp(r,nn.memoizedState,n)},useTransition:function(){var n=xu(Ko)[0],r=ti().memoizedState;return[n,r]},useMutableSource:lp,useSyncExternalStore:cp,useId:wp,unstable_isNewReconciler:!1},i0={readContext:ei,useCallback:Mp,useContext:ei,useEffect:Su,useImperativeHandle:Sp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:Ep,useReducer:yu,useRef:gp,useState:function(){return yu(Ko)},useDebugValue:Mu,useDeferredValue:function(n){var r=ti();return nn===null?r.memoizedState=n:Tp(r,nn.memoizedState,n)},useTransition:function(){var n=yu(Ko)[0],r=ti().memoizedState;return[n,r]},useMutableSource:lp,useSyncExternalStore:cp,useId:wp,unstable_isNewReconciler:!1};function ui(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Eu(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:oe({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var fl={isMounted:function(n){return(n=n._reactInternals)?Ti(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Cn(),p=Tr(n),v=Wi(f,p);v.payload=r,l!=null&&(v.callback=l),r=yr(n,v,p),r!==null&&(hi(r,n,p,f),il(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Cn(),p=Tr(n),v=Wi(f,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=yr(n,v,p),r!==null&&(hi(r,n,p,f),il(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Cn(),f=Tr(n),p=Wi(l,f);p.tag=2,r!=null&&(p.callback=r),r=yr(n,p,f),r!==null&&(hi(r,n,f,l),il(r,n,f))}};function bp(n,r,l,f,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,v,T):r.prototype&&r.prototype.isPureReactComponent?!Fo(l,f)||!Fo(p,v):!0}function Pp(n,r,l){var f=!1,p=_r,v=r.contextType;return typeof v=="object"&&v!==null?v=ei(v):(p=kn(r)?qr:vn.current,f=r.contextTypes,v=(f=f!=null)?bs(n,p):_r),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=fl,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Lp(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&fl.enqueueReplaceState(r,r.state,null)}function Tu(n,r,l,f){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},uu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=ei(v):(v=kn(r)?qr:vn.current,p.context=bs(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Eu(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&fl.enqueueReplaceState(p,p.state,null),rl(n,l,p,f),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Os(n,r){try{var l="",f=r;do l+=pe(f),f=f.return;while(f);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function wu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Au(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var r0=typeof WeakMap=="function"?WeakMap:Map;function Ip(n,r,l){l=Wi(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){vl||(vl=!0,Hu=f),Au(n,r)},l}function Np(n,r,l){l=Wi(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var p=r.value;l.payload=function(){return f(p)},l.callback=function(){Au(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Au(n,r),typeof f!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function Dp(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new r0;var p=new Set;f.set(r,p)}else p=f.get(r),p===void 0&&(p=new Set,f.set(r,p));p.has(l)||(p.add(l),n=v0.bind(null,n,r,l),r.then(n,n))}function Up(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Fp(n,r,l,f,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Wi(-1,1),r.tag=2,yr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var s0=A.ReactCurrentOwner,Bn=!1;function Rn(n,r,l,f){r.child=n===null?np(r,null,l,f):Ns(r,n.child,l,f)}function Op(n,r,l,f,p){l=l.render;var v=r.ref;return Us(r,p),f=_u(n,r,l,f,v,p),l=vu(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Xi(n,r,p)):(Wt&&l&&eu(r),r.flags|=1,Rn(n,r,f,p),r.child)}function kp(n,r,l,f,p){if(n===null){var v=l.type;return typeof v=="function"&&!Yu(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Bp(n,r,v,f,p)):(n=Tl(l.type,null,f,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:Fo,l(T,f)&&n.ref===r.ref)return Xi(n,r,p)}return r.flags|=1,n=Ar(v,f),n.ref=r.ref,n.return=r,r.child=n}function Bp(n,r,l,f,p){if(n!==null){var v=n.memoizedProps;if(Fo(v,f)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=f=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,Xi(n,r,p)}return Ru(n,r,l,f,p)}function zp(n,r,l){var f=r.pendingProps,p=f.children,v=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Bs,Yn),Yn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Bt(Bs,Yn),Yn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:l,Bt(Bs,Yn),Yn|=f}else v!==null?(f=v.baseLanes|l,r.memoizedState=null):f=l,Bt(Bs,Yn),Yn|=f;return Rn(n,r,p,l),r.child}function Hp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Ru(n,r,l,f,p){var v=kn(l)?qr:vn.current;return v=bs(r,v),Us(r,p),l=_u(n,r,l,f,v,p),f=vu(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Xi(n,r,p)):(Wt&&f&&eu(r),r.flags|=1,Rn(n,r,l,p),r.child)}function Vp(n,r,l,f,p){if(kn(l)){var v=!0;Ka(r)}else v=!1;if(Us(r,p),r.stateNode===null)hl(n,r),Pp(r,l,f),Tu(r,l,f,p),f=!0;else if(n===null){var T=r.stateNode,D=r.memoizedProps;T.props=D;var B=T.context,te=l.contextType;typeof te=="object"&&te!==null?te=ei(te):(te=kn(l)?qr:vn.current,te=bs(r,te));var Se=l.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==f||B!==te)&&Lp(r,T,f,te),xr=!1;var ye=r.memoizedState;T.state=ye,rl(r,f,T,p),B=r.memoizedState,D!==f||ye!==B||On.current||xr?(typeof Se=="function"&&(Eu(r,l,Se,f),B=r.memoizedState),(D=xr||bp(r,l,D,f,ye,B,te))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=B),T.props=f,T.state=B,T.context=te,f=D):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,rp(n,r),D=r.memoizedProps,te=r.type===r.elementType?D:ui(r.type,D),T.props=te,Ee=r.pendingProps,ye=T.context,B=l.contextType,typeof B=="object"&&B!==null?B=ei(B):(B=kn(l)?qr:vn.current,B=bs(r,B));var ze=l.getDerivedStateFromProps;(Se=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(D!==Ee||ye!==B)&&Lp(r,T,f,B),xr=!1,ye=r.memoizedState,T.state=ye,rl(r,f,T,p);var qe=r.memoizedState;D!==Ee||ye!==qe||On.current||xr?(typeof ze=="function"&&(Eu(r,l,ze,f),qe=r.memoizedState),(te=xr||bp(r,l,te,f,ye,qe,B)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,qe,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,qe,B)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=qe),T.props=f,T.state=qe,T.context=B,f=te):(typeof T.componentDidUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ye===n.memoizedState||(r.flags|=1024),f=!1)}return Cu(n,r,l,f,v,p)}function Cu(n,r,l,f,p,v){Hp(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return p&&qh(r,l,!1),Xi(n,r,v);f=r.stateNode,s0.current=r;var D=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=Ns(r,n.child,null,v),r.child=Ns(r,null,D,v)):Rn(n,r,D,v),r.memoizedState=f.state,p&&qh(r,l,!0),r.child}function Gp(n){var r=n.stateNode;r.pendingContext?Xh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Xh(n,r.context,!1),fu(n,r.containerInfo)}function Wp(n,r,l,f,p){return Is(),ru(p),r.flags|=256,Rn(n,r,l,f),r.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xp(n,r,l){var f=r.pendingProps,p=jt.current,v=!1,T=(r.flags&128)!==0,D;if((D=T)||(D=n!==null&&n.memoizedState===null?!1:(p&2)!==0),D?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Bt(jt,p&1),n===null)return iu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=f.children,n=f.fallback,v?(f=r.mode,v=r.child,T={mode:"hidden",children:T},(f&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=wl(T,f,0,null),n=is(n,f,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Pu(l),r.memoizedState=bu,n):Lu(r,T));if(p=n.memoizedState,p!==null&&(D=p.dehydrated,D!==null))return o0(n,r,T,f,D,p,l);if(v){v=f.fallback,T=r.mode,p=n.child,D=p.sibling;var B={mode:"hidden",children:f.children};return(T&1)===0&&r.child!==p?(f=r.child,f.childLanes=0,f.pendingProps=B,r.deletions=null):(f=Ar(p,B),f.subtreeFlags=p.subtreeFlags&14680064),D!==null?v=Ar(D,v):(v=is(v,T,l,null),v.flags|=2),v.return=r,f.return=r,f.sibling=v,r.child=f,f=v,v=r.child,T=n.child.memoizedState,T=T===null?Pu(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=bu,f}return v=n.child,n=v.sibling,f=Ar(v,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Lu(n,r){return r=wl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function dl(n,r,l,f){return f!==null&&ru(f),Ns(r,n.child,null,l),n=Lu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function o0(n,r,l,f,p,v,T){if(l)return r.flags&256?(r.flags&=-257,f=wu(Error(t(422))),dl(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=f.fallback,p=r.mode,f=wl({mode:"visible",children:f.children},p,0,null),v=is(v,p,T,null),v.flags|=2,f.return=r,v.return=r,f.sibling=v,r.child=f,(r.mode&1)!==0&&Ns(r,n.child,null,T),r.child.memoizedState=Pu(T),r.memoizedState=bu,v);if((r.mode&1)===0)return dl(n,r,T,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var D=f.dgst;return f=D,v=Error(t(419)),f=wu(v,f,void 0),dl(n,r,T,f)}if(D=(T&n.childLanes)!==0,Bn||D){if(f=ln,f!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(f.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Gi(n,p),hi(f,n,p,-1))}return qu(),f=wu(Error(t(421))),dl(n,r,T,f)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=x0.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,qn=mr(p.nextSibling),jn=r,Wt=!0,ci=null,n!==null&&(Qn[Jn++]=Hi,Qn[Jn++]=Vi,Qn[Jn++]=Yr,Hi=n.id,Vi=n.overflow,Yr=r),r=Lu(r,f.children),r.flags|=4096,r)}function jp(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),lu(n.return,r,l)}function Iu(n,r,l,f,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=l,v.tailMode=p)}function qp(n,r,l){var f=r.pendingProps,p=f.revealOrder,v=f.tail;if(Rn(n,r,f.children,l),f=jt.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jp(n,l,r);else if(n.tag===19)jp(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Bt(jt,f),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&sl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Iu(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&sl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Iu(r,!0,l,null,v);break;case"together":Iu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function hl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Xi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Jr|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Ar(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Ar(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function a0(n,r,l){switch(r.tag){case 3:Gp(r),Is();break;case 5:ap(r);break;case 1:kn(r.type)&&Ka(r);break;case 4:fu(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,p=r.memoizedProps.value;Bt(tl,f._currentValue),f._currentValue=p;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Bt(jt,jt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Xp(n,r,l):(Bt(jt,jt.current&1),n=Xi(n,r,l),n!==null?n.sibling:null);Bt(jt,jt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return qp(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Bt(jt,jt.current),f)break;return null;case 22:case 23:return r.lanes=0,zp(n,r,l)}return Xi(n,r,l)}var Yp,Nu,Kp,$p;Yp=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Nu=function(){},Kp=function(n,r,l,f){var p=n.memoizedProps;if(p!==f){n=r.stateNode,Zr(Ai.current);var v=null;switch(l){case"input":p=V(n,p),f=V(n,f),v=[];break;case"select":p=oe({},p,{value:void 0}),f=oe({},f,{value:void 0}),v=[];break;case"textarea":p=w(n,p),f=w(n,f),v=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=ja)}_t(l,f);var T;l=null;for(te in p)if(!f.hasOwnProperty(te)&&p.hasOwnProperty(te)&&p[te]!=null)if(te==="style"){var D=p[te];for(T in D)D.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(s.hasOwnProperty(te)?v||(v=[]):(v=v||[]).push(te,null));for(te in f){var B=f[te];if(D=p!=null?p[te]:void 0,f.hasOwnProperty(te)&&B!==D&&(B!=null||D!=null))if(te==="style")if(D){for(T in D)!D.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in B)B.hasOwnProperty(T)&&D[T]!==B[T]&&(l||(l={}),l[T]=B[T])}else l||(v||(v=[]),v.push(te,l)),l=B;else te==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(v=v||[]).push(te,B)):te==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(te,""+B):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(s.hasOwnProperty(te)?(B!=null&&te==="onScroll"&&Ht("scroll",n),v||D===B||(v=[])):(v=v||[]).push(te,B))}l&&(v=v||[]).push("style",l);var te=v;(r.updateQueue=te)&&(r.flags|=4)}},$p=function(n,r,l,f){l!==f&&(r.flags|=4)};function Zo(n,r){if(!Wt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function yn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function l0(n,r,l){var f=r.pendingProps;switch(tu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(r),null;case 1:return kn(r.type)&&Ya(),yn(r),null;case 3:return f=r.stateNode,Fs(),Vt(On),Vt(vn),pu(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(Ja(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ci!==null&&(Wu(ci),ci=null))),Nu(n,r),yn(r),null;case 5:du(r);var p=Zr(jo.current);if(l=r.type,n!==null&&r.stateNode!=null)Kp(n,r,l,f,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return yn(r),null}if(n=Zr(Ai.current),Ja(r)){f=r.stateNode,l=r.type;var v=r.memoizedProps;switch(f[wi]=r,f[Ho]=v,n=(r.mode&1)!==0,l){case"dialog":Ht("cancel",f),Ht("close",f);break;case"iframe":case"object":case"embed":Ht("load",f);break;case"video":case"audio":for(p=0;p<ko.length;p++)Ht(ko[p],f);break;case"source":Ht("error",f);break;case"img":case"image":case"link":Ht("error",f),Ht("load",f);break;case"details":Ht("toggle",f);break;case"input":$e(f,v),Ht("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},Ht("invalid",f);break;case"textarea":K(f,v),Ht("invalid",f)}_t(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var D=v[T];T==="children"?typeof D=="string"?f.textContent!==D&&(v.suppressHydrationWarning!==!0&&Xa(f.textContent,D,n),p=["children",D]):typeof D=="number"&&f.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&Xa(f.textContent,D,n),p=["children",""+D]):s.hasOwnProperty(T)&&D!=null&&T==="onScroll"&&Ht("scroll",f)}switch(l){case"input":Ct(f),ve(f,v,!0);break;case"textarea":Ct(f),ee(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=ja)}f=p,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(l,{is:f.is}):(n=T.createElement(l),l==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,l),n[wi]=r,n[Ho]=f,Yp(n,r,!1,!1),r.stateNode=n;e:{switch(T=ct(l,f),l){case"dialog":Ht("cancel",n),Ht("close",n),p=f;break;case"iframe":case"object":case"embed":Ht("load",n),p=f;break;case"video":case"audio":for(p=0;p<ko.length;p++)Ht(ko[p],n);p=f;break;case"source":Ht("error",n),p=f;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),p=f;break;case"details":Ht("toggle",n),p=f;break;case"input":$e(n,f),p=V(n,f),Ht("invalid",n);break;case"option":p=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},p=oe({},f,{value:void 0}),Ht("invalid",n);break;case"textarea":K(n,f),p=w(n,f),Ht("invalid",n);break;default:p=f}_t(l,p),D=p;for(v in D)if(D.hasOwnProperty(v)){var B=D[v];v==="style"?rt(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Me(n,B)):v==="children"?typeof B=="string"?(l!=="textarea"||B!=="")&&tt(n,B):typeof B=="number"&&tt(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?B!=null&&v==="onScroll"&&Ht("scroll",n):B!=null&&b(n,v,B,T))}switch(l){case"input":Ct(n),ve(n,f,!1);break;case"textarea":Ct(n),ee(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Ce(f.value));break;case"select":n.multiple=!!f.multiple,v=f.value,v!=null?I(n,!!f.multiple,v,!1):f.defaultValue!=null&&I(n,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ja)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return yn(r),null;case 6:if(n&&r.stateNode!=null)$p(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Zr(jo.current),Zr(Ai.current),Ja(r)){if(f=r.stateNode,l=r.memoizedProps,f[wi]=r,(v=f.nodeValue!==l)&&(n=jn,n!==null))switch(n.tag){case 3:Xa(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Xa(f.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[wi]=r,r.stateNode=f}return yn(r),null;case 13:if(Vt(jt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&qn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Jh(),Is(),r.flags|=98560,v=!1;else if(v=Ja(r),f!==null&&f.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[wi]=r}else Is(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;yn(r),v=!1}else ci!==null&&(Wu(ci),ci=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(jt.current&1)!==0?rn===0&&(rn=3):qu())),r.updateQueue!==null&&(r.flags|=4),yn(r),null);case 4:return Fs(),Nu(n,r),n===null&&Bo(r.stateNode.containerInfo),yn(r),null;case 10:return au(r.type._context),yn(r),null;case 17:return kn(r.type)&&Ya(),yn(r),null;case 19:if(Vt(jt),v=r.memoizedState,v===null)return yn(r),null;if(f=(r.flags&128)!==0,T=v.rendering,T===null)if(f)Zo(v,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=sl(n),T!==null){for(r.flags|=128,Zo(v,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)v=l,n=f,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Bt(jt,jt.current&1|2),r.child}n=n.sibling}v.tail!==null&&G()>zs&&(r.flags|=128,f=!0,Zo(v,!1),r.lanes=4194304)}else{if(!f)if(n=sl(T),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Zo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Wt)return yn(r),null}else 2*G()-v.renderingStartTime>zs&&l!==1073741824&&(r.flags|=128,f=!0,Zo(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=G(),r.sibling=null,l=jt.current,Bt(jt,f?l&1|2:l&1),r):(yn(r),null);case 22:case 23:return ju(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(Yn&1073741824)!==0&&(yn(r),r.subtreeFlags&6&&(r.flags|=8192)):yn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function c0(n,r){switch(tu(r),r.tag){case 1:return kn(r.type)&&Ya(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Fs(),Vt(On),Vt(vn),pu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return du(r),null;case 13:if(Vt(jt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Is()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Vt(jt),null;case 4:return Fs(),null;case 10:return au(r.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var pl=!1,Sn=!1,u0=typeof WeakSet=="function"?WeakSet:Set,We=null;function ks(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Kt(n,r,f)}else l.current=null}function Du(n,r,l){try{l()}catch(f){Kt(n,r,f)}}var Zp=!1;function f0(n,r){if(jc=Da,n=bh(),kc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var p=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,D=-1,B=-1,te=0,Se=0,Ee=n,ye=null;t:for(;;){for(var ze;Ee!==l||p!==0&&Ee.nodeType!==3||(D=T+p),Ee!==v||f!==0&&Ee.nodeType!==3||(B=T+f),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(ze=Ee.firstChild)!==null;)ye=Ee,Ee=ze;for(;;){if(Ee===n)break t;if(ye===l&&++te===p&&(D=T),ye===v&&++Se===f&&(B=T),(ze=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=ze}l=D===-1||B===-1?null:{start:D,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(qc={focusedElem:n,selectionRange:l},Da=!1,We=r;We!==null;)if(r=We,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,We=n;else for(;We!==null;){r=We;try{var qe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ye=qe.memoizedProps,Zt=qe.memoizedState,$=r.stateNode,W=$.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:ui(r.type,Ye),Zt);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Q=r.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Kt(r,r.return,Ae)}if(n=r.sibling,n!==null){n.return=r.return,We=n;break}We=r.return}return qe=Zp,Zp=!1,qe}function Qo(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Du(r,l,v)}p=p.next}while(p!==f)}}function ml(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Uu(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Qp(n){var r=n.alternate;r!==null&&(n.alternate=null,Qp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[wi],delete r[Ho],delete r[Zc],delete r[qv],delete r[Yv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jp(n){return n.tag===5||n.tag===3||n.tag===4}function em(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fu(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ja));else if(f!==4&&(n=n.child,n!==null))for(Fu(n,r,l),n=n.sibling;n!==null;)Fu(n,r,l),n=n.sibling}function Ou(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Ou(n,r,l),n=n.sibling;n!==null;)Ou(n,r,l),n=n.sibling}var pn=null,fi=!1;function Sr(n,r,l){for(l=l.child;l!==null;)tm(n,r,l),l=l.sibling}function tm(n,r,l){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Qe,l)}catch{}switch(l.tag){case 5:Sn||ks(l,r);case 6:var f=pn,p=fi;pn=null,Sr(n,r,l),pn=f,fi=p,pn!==null&&(fi?(n=pn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):pn.removeChild(l.stateNode));break;case 18:pn!==null&&(fi?(n=pn,l=l.stateNode,n.nodeType===8?$c(n.parentNode,l):n.nodeType===1&&$c(n,l),Po(n)):$c(pn,l.stateNode));break;case 4:f=pn,p=fi,pn=l.stateNode.containerInfo,fi=!0,Sr(n,r,l),pn=f,fi=p;break;case 0:case 11:case 14:case 15:if(!Sn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Du(l,r,T),p=p.next}while(p!==f)}Sr(n,r,l);break;case 1:if(!Sn&&(ks(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(D){Kt(l,r,D)}Sr(n,r,l);break;case 21:Sr(n,r,l);break;case 22:l.mode&1?(Sn=(f=Sn)||l.memoizedState!==null,Sr(n,r,l),Sn=f):Sr(n,r,l);break;default:Sr(n,r,l)}}function nm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new u0),r.forEach(function(f){var p=y0.bind(null,n,f);l.has(f)||(l.add(f),f.then(p,p))})}}function di(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var p=l[f];try{var v=n,T=r,D=T;e:for(;D!==null;){switch(D.tag){case 5:pn=D.stateNode,fi=!1;break e;case 3:pn=D.stateNode.containerInfo,fi=!0;break e;case 4:pn=D.stateNode.containerInfo,fi=!0;break e}D=D.return}if(pn===null)throw Error(t(160));tm(v,T,p),pn=null,fi=!1;var B=p.alternate;B!==null&&(B.return=null),p.return=null}catch(te){Kt(p,r,te)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)im(r,n),r=r.sibling}function im(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(r,n),Ci(n),f&4){try{Qo(3,n,n.return),ml(3,n)}catch(Ye){Kt(n,n.return,Ye)}try{Qo(5,n,n.return)}catch(Ye){Kt(n,n.return,Ye)}}break;case 1:di(r,n),Ci(n),f&512&&l!==null&&ks(l,l.return);break;case 5:if(di(r,n),Ci(n),f&512&&l!==null&&ks(l,l.return),n.flags&32){var p=n.stateNode;try{tt(p,"")}catch(Ye){Kt(n,n.return,Ye)}}if(f&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,D=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&Be(p,v),ct(D,T);var te=ct(D,v);for(T=0;T<B.length;T+=2){var Se=B[T],Ee=B[T+1];Se==="style"?rt(p,Ee):Se==="dangerouslySetInnerHTML"?Me(p,Ee):Se==="children"?tt(p,Ee):b(p,Se,Ee,te)}switch(D){case"input":Ze(p,v);break;case"textarea":ue(p,v);break;case"select":var ye=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var ze=v.value;ze!=null?I(p,!!v.multiple,ze,!1):ye!==!!v.multiple&&(v.defaultValue!=null?I(p,!!v.multiple,v.defaultValue,!0):I(p,!!v.multiple,v.multiple?[]:"",!1))}p[Ho]=v}catch(Ye){Kt(n,n.return,Ye)}}break;case 6:if(di(r,n),Ci(n),f&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ye){Kt(n,n.return,Ye)}}break;case 3:if(di(r,n),Ci(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Po(r.containerInfo)}catch(Ye){Kt(n,n.return,Ye)}break;case 4:di(r,n),Ci(n);break;case 13:di(r,n),Ci(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(zu=G())),f&4&&nm(n);break;case 22:if(Se=l!==null&&l.memoizedState!==null,n.mode&1?(Sn=(te=Sn)||Se,di(r,n),Sn=te):di(r,n),Ci(n),f&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!Se&&(n.mode&1)!==0)for(We=n,Se=n.child;Se!==null;){for(Ee=We=Se;We!==null;){switch(ye=We,ze=ye.child,ye.tag){case 0:case 11:case 14:case 15:Qo(4,ye,ye.return);break;case 1:ks(ye,ye.return);var qe=ye.stateNode;if(typeof qe.componentWillUnmount=="function"){f=ye,l=ye.return;try{r=f,qe.props=r.memoizedProps,qe.state=r.memoizedState,qe.componentWillUnmount()}catch(Ye){Kt(f,l,Ye)}}break;case 5:ks(ye,ye.return);break;case 22:if(ye.memoizedState!==null){om(Ee);continue}}ze!==null?(ze.return=ye,We=ze):om(Ee)}Se=Se.sibling}e:for(Se=null,Ee=n;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{p=Ee.stateNode,te?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=Ee.stateNode,B=Ee.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=Je("display",T))}catch(Ye){Kt(n,n.return,Ye)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=te?"":Ee.memoizedProps}catch(Ye){Kt(n,n.return,Ye)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:di(r,n),Ci(n),f&4&&nm(n);break;case 21:break;default:di(r,n),Ci(n)}}function Ci(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Jp(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(tt(p,""),f.flags&=-33);var v=em(n);Ou(n,v,p);break;case 3:case 4:var T=f.stateNode.containerInfo,D=em(n);Fu(n,D,T);break;default:throw Error(t(161))}}catch(B){Kt(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function d0(n,r,l){We=n,rm(n)}function rm(n,r,l){for(var f=(n.mode&1)!==0;We!==null;){var p=We,v=p.child;if(p.tag===22&&f){var T=p.memoizedState!==null||pl;if(!T){var D=p.alternate,B=D!==null&&D.memoizedState!==null||Sn;D=pl;var te=Sn;if(pl=T,(Sn=B)&&!te)for(We=p;We!==null;)T=We,B=T.child,T.tag===22&&T.memoizedState!==null?am(p):B!==null?(B.return=T,We=B):am(p);for(;v!==null;)We=v,rm(v),v=v.sibling;We=p,pl=D,Sn=te}sm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,We=v):sm(n)}}function sm(n){for(;We!==null;){var r=We;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Sn||ml(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Sn)if(l===null)f.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:ui(r.type,l.memoizedProps);f.componentDidUpdate(p,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&op(r,v,f);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}op(r,T,l)}break;case 5:var D=r.stateNode;if(l===null&&r.flags&4){l=D;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&l.focus();break;case"img":B.src&&(l.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var te=r.alternate;if(te!==null){var Se=te.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&Po(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Sn||r.flags&512&&Uu(r)}catch(ye){Kt(r,r.return,ye)}}if(r===n){We=null;break}if(l=r.sibling,l!==null){l.return=r.return,We=l;break}We=r.return}}function om(n){for(;We!==null;){var r=We;if(r===n){We=null;break}var l=r.sibling;if(l!==null){l.return=r.return,We=l;break}We=r.return}}function am(n){for(;We!==null;){var r=We;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{ml(4,r)}catch(B){Kt(r,l,B)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var p=r.return;try{f.componentDidMount()}catch(B){Kt(r,p,B)}}var v=r.return;try{Uu(r)}catch(B){Kt(r,v,B)}break;case 5:var T=r.return;try{Uu(r)}catch(B){Kt(r,T,B)}}}catch(B){Kt(r,r.return,B)}if(r===n){We=null;break}var D=r.sibling;if(D!==null){D.return=r.return,We=D;break}We=r.return}}var h0=Math.ceil,gl=A.ReactCurrentDispatcher,ku=A.ReactCurrentOwner,ni=A.ReactCurrentBatchConfig,Rt=0,ln=null,Jt=null,mn=0,Yn=0,Bs=gr(0),rn=0,Jo=null,Jr=0,_l=0,Bu=0,ea=null,zn=null,zu=0,zs=1/0,ji=null,vl=!1,Hu=null,Mr=null,xl=!1,Er=null,yl=0,ta=0,Vu=null,Sl=-1,Ml=0;function Cn(){return(Rt&6)!==0?G():Sl!==-1?Sl:Sl=G()}function Tr(n){return(n.mode&1)===0?1:(Rt&2)!==0&&mn!==0?mn&-mn:$v.transition!==null?(Ml===0&&(Ml=An()),Ml):(n=xt,n!==0||(n=window.event,n=n===void 0?16:ch(n.type)),n)}function hi(n,r,l,f){if(50<ta)throw ta=0,Vu=null,Error(t(185));$t(n,l,f),((Rt&2)===0||n!==ln)&&(n===ln&&((Rt&2)===0&&(_l|=l),rn===4&&wr(n,mn)),Hn(n,f),l===1&&Rt===0&&(r.mode&1)===0&&(zs=G()+500,$a&&vr()))}function Hn(n,r){var l=n.callbackNode;Wr(n,r);var f=ai(n,n===ln?mn:0);if(f===0)l!==null&&j(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&j(l),r===1)n.tag===0?Kv(cm.bind(null,n)):Yh(cm.bind(null,n)),Xv(function(){(Rt&6)===0&&vr()}),l=null;else{switch(th(f)){case 1:l=Ne;break;case 4:l=Ve;break;case 16:l=Ge;break;case 536870912:l=at;break;default:l=Ge}l=_m(l,lm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function lm(n,r){if(Sl=-1,Ml=0,(Rt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Hs()&&n.callbackNode!==l)return null;var f=ai(n,n===ln?mn:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=El(n,f);else{r=f;var p=Rt;Rt|=2;var v=fm();(ln!==n||mn!==r)&&(ji=null,zs=G()+500,ts(n,r));do try{g0();break}catch(D){um(n,D)}while(!0);ou(),gl.current=v,Rt=p,Jt!==null?r=0:(ln=null,mn=0,r=rn)}if(r!==0){if(r===2&&(p=Ot(n),p!==0&&(f=p,r=Gu(n,p))),r===1)throw l=Jo,ts(n,0),wr(n,f),Hn(n,G()),l;if(r===6)wr(n,f);else{if(p=n.current.alternate,(f&30)===0&&!p0(p)&&(r=El(n,f),r===2&&(v=Ot(n),v!==0&&(f=v,r=Gu(n,v))),r===1))throw l=Jo,ts(n,0),wr(n,f),Hn(n,G()),l;switch(n.finishedWork=p,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:ns(n,zn,ji);break;case 3:if(wr(n,f),(f&130023424)===f&&(r=zu+500-G(),10<r)){if(ai(n,0)!==0)break;if(p=n.suspendedLanes,(p&f)!==f){Cn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Kc(ns.bind(null,n,zn,ji),r);break}ns(n,zn,ji);break;case 4:if(wr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,p=-1;0<f;){var T=31-Pt(f);v=1<<T,T=r[T],T>p&&(p=T),f&=~v}if(f=p,f=G()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*h0(f/1960))-f,10<f){n.timeoutHandle=Kc(ns.bind(null,n,zn,ji),f);break}ns(n,zn,ji);break;case 5:ns(n,zn,ji);break;default:throw Error(t(329))}}}return Hn(n,G()),n.callbackNode===l?lm.bind(null,n):null}function Gu(n,r){var l=ea;return n.current.memoizedState.isDehydrated&&(ts(n,r).flags|=256),n=El(n,r),n!==2&&(r=zn,zn=l,r!==null&&Wu(r)),n}function Wu(n){zn===null?zn=n:zn.push.apply(zn,n)}function p0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var p=l[f],v=p.getSnapshot;p=p.value;try{if(!li(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function wr(n,r){for(r&=~Bu,r&=~_l,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Pt(r),f=1<<l;n[l]=-1,r&=~f}}function cm(n){if((Rt&6)!==0)throw Error(t(327));Hs();var r=ai(n,0);if((r&1)===0)return Hn(n,G()),null;var l=El(n,r);if(n.tag!==0&&l===2){var f=Ot(n);f!==0&&(r=f,l=Gu(n,f))}if(l===1)throw l=Jo,ts(n,0),wr(n,r),Hn(n,G()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ns(n,zn,ji),Hn(n,G()),null}function Xu(n,r){var l=Rt;Rt|=1;try{return n(r)}finally{Rt=l,Rt===0&&(zs=G()+500,$a&&vr())}}function es(n){Er!==null&&Er.tag===0&&(Rt&6)===0&&Hs();var r=Rt;Rt|=1;var l=ni.transition,f=xt;try{if(ni.transition=null,xt=1,n)return n()}finally{xt=f,ni.transition=l,Rt=r,(Rt&6)===0&&vr()}}function ju(){Yn=Bs.current,Vt(Bs)}function ts(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Wv(l)),Jt!==null)for(l=Jt.return;l!==null;){var f=l;switch(tu(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Ya();break;case 3:Fs(),Vt(On),Vt(vn),pu();break;case 5:du(f);break;case 4:Fs();break;case 13:Vt(jt);break;case 19:Vt(jt);break;case 10:au(f.type._context);break;case 22:case 23:ju()}l=l.return}if(ln=n,Jt=n=Ar(n.current,null),mn=Yn=r,rn=0,Jo=null,Bu=_l=Jr=0,zn=ea=null,$r!==null){for(r=0;r<$r.length;r++)if(l=$r[r],f=l.interleaved,f!==null){l.interleaved=null;var p=f.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,f.next=T}l.pending=f}$r=null}return n}function um(n,r){do{var l=Jt;try{if(ou(),ol.current=ul,al){for(var f=qt.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}al=!1}if(Qr=0,an=nn=qt=null,qo=!1,Yo=0,ku.current=null,l===null||l.return===null){rn=1,Jo=r,Jt=null;break}e:{var v=n,T=l.return,D=l,B=r;if(r=mn,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var te=B,Se=D,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var ze=Up(T);if(ze!==null){ze.flags&=-257,Fp(ze,T,D,v,r),ze.mode&1&&Dp(v,te,r),r=ze,B=te;var qe=r.updateQueue;if(qe===null){var Ye=new Set;Ye.add(B),r.updateQueue=Ye}else qe.add(B);break e}else{if((r&1)===0){Dp(v,te,r),qu();break e}B=Error(t(426))}}else if(Wt&&D.mode&1){var Zt=Up(T);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),Fp(Zt,T,D,v,r),ru(Os(B,D));break e}}v=B=Os(B,D),rn!==4&&(rn=2),ea===null?ea=[v]:ea.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var $=Ip(v,B,r);sp(v,$);break e;case 1:D=B;var W=v.type,Q=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(Mr===null||!Mr.has(Q)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ae=Np(v,D,r);sp(v,Ae);break e}}v=v.return}while(v!==null)}hm(l)}catch(Ke){r=Ke,Jt===l&&l!==null&&(Jt=l=l.return);continue}break}while(!0)}function fm(){var n=gl.current;return gl.current=ul,n===null?ul:n}function qu(){(rn===0||rn===3||rn===2)&&(rn=4),ln===null||(Jr&268435455)===0&&(_l&268435455)===0||wr(ln,mn)}function El(n,r){var l=Rt;Rt|=2;var f=fm();(ln!==n||mn!==r)&&(ji=null,ts(n,r));do try{m0();break}catch(p){um(n,p)}while(!0);if(ou(),Rt=l,gl.current=f,Jt!==null)throw Error(t(261));return ln=null,mn=0,rn}function m0(){for(;Jt!==null;)dm(Jt)}function g0(){for(;Jt!==null&&!ne();)dm(Jt)}function dm(n){var r=gm(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,r===null?hm(n):Jt=r,ku.current=null}function hm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=l0(l,r,Yn),l!==null){Jt=l;return}}else{if(l=c0(l,r),l!==null){l.flags&=32767,Jt=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Jt=null;return}}if(r=r.sibling,r!==null){Jt=r;return}Jt=r=n}while(r!==null);rn===0&&(rn=5)}function ns(n,r,l){var f=xt,p=ni.transition;try{ni.transition=null,xt=1,_0(n,r,l,f)}finally{ni.transition=p,xt=f}return null}function _0(n,r,l,f){do Hs();while(Er!==null);if((Rt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(_n(n,v),n===ln&&(Jt=ln=null,mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||xl||(xl=!0,_m(Ge,function(){return Hs(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=ni.transition,ni.transition=null;var T=xt;xt=1;var D=Rt;Rt|=4,ku.current=null,f0(n,l),im(l,n),Ov(qc),Da=!!jc,qc=jc=null,n.current=l,d0(l),se(),Rt=D,xt=T,ni.transition=v}else n.current=l;if(xl&&(xl=!1,Er=n,yl=p),v=n.pendingLanes,v===0&&(Mr=null),bt(l.stateNode),Hn(n,G()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],f(p.value,{componentStack:p.stack,digest:p.digest});if(vl)throw vl=!1,n=Hu,Hu=null,n;return(yl&1)!==0&&n.tag!==0&&Hs(),v=n.pendingLanes,(v&1)!==0?n===Vu?ta++:(ta=0,Vu=n):ta=0,vr(),null}function Hs(){if(Er!==null){var n=th(yl),r=ni.transition,l=xt;try{if(ni.transition=null,xt=16>n?16:n,Er===null)var f=!1;else{if(n=Er,Er=null,yl=0,(Rt&6)!==0)throw Error(t(331));var p=Rt;for(Rt|=4,We=n.current;We!==null;){var v=We,T=v.child;if((We.flags&16)!==0){var D=v.deletions;if(D!==null){for(var B=0;B<D.length;B++){var te=D[B];for(We=te;We!==null;){var Se=We;switch(Se.tag){case 0:case 11:case 15:Qo(8,Se,v)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,We=Ee;else for(;We!==null;){Se=We;var ye=Se.sibling,ze=Se.return;if(Qp(Se),Se===te){We=null;break}if(ye!==null){ye.return=ze,We=ye;break}We=ze}}}var qe=v.alternate;if(qe!==null){var Ye=qe.child;if(Ye!==null){qe.child=null;do{var Zt=Ye.sibling;Ye.sibling=null,Ye=Zt}while(Ye!==null)}}We=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,We=T;else e:for(;We!==null;){if(v=We,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Qo(9,v,v.return)}var $=v.sibling;if($!==null){$.return=v.return,We=$;break e}We=v.return}}var W=n.current;for(We=W;We!==null;){T=We;var Q=T.child;if((T.subtreeFlags&2064)!==0&&Q!==null)Q.return=T,We=Q;else e:for(T=W;We!==null;){if(D=We,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:ml(9,D)}}catch(Ke){Kt(D,D.return,Ke)}if(D===T){We=null;break e}var Ae=D.sibling;if(Ae!==null){Ae.return=D.return,We=Ae;break e}We=D.return}}if(Rt=p,vr(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Qe,n)}catch{}f=!0}return f}finally{xt=l,ni.transition=r}}return!1}function pm(n,r,l){r=Os(l,r),r=Ip(n,r,1),n=yr(n,r,1),r=Cn(),n!==null&&($t(n,1,r),Hn(n,r))}function Kt(n,r,l){if(n.tag===3)pm(n,n,l);else for(;r!==null;){if(r.tag===3){pm(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Mr===null||!Mr.has(f))){n=Os(l,n),n=Np(r,n,1),r=yr(r,n,1),n=Cn(),r!==null&&($t(r,1,n),Hn(r,n));break}}r=r.return}}function v0(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Cn(),n.pingedLanes|=n.suspendedLanes&l,ln===n&&(mn&l)===l&&(rn===4||rn===3&&(mn&130023424)===mn&&500>G()-zu?ts(n,0):Bu|=l),Hn(n,r)}function mm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Mt,Mt<<=1,(Mt&130023424)===0&&(Mt=4194304)));var l=Cn();n=Gi(n,r),n!==null&&($t(n,r,l),Hn(n,l))}function x0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),mm(n,l)}function y0(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),mm(n,l)}var gm;gm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||On.current)Bn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Bn=!1,a0(n,r,l);Bn=(n.flags&131072)!==0}else Bn=!1,Wt&&(r.flags&1048576)!==0&&Kh(r,Qa,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;hl(n,r),n=r.pendingProps;var p=bs(r,vn.current);Us(r,l),p=_u(null,r,f,n,p,l);var v=vu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,kn(f)?(v=!0,Ka(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,uu(r),p.updater=fl,r.stateNode=p,p._reactInternals=r,Tu(r,f,n,l),r=Cu(null,r,f,!0,v,l)):(r.tag=0,Wt&&v&&eu(r),Rn(null,r,p,l),r=r.child),r;case 16:f=r.elementType;e:{switch(hl(n,r),n=r.pendingProps,p=f._init,f=p(f._payload),r.type=f,p=r.tag=M0(f),n=ui(f,n),p){case 0:r=Ru(null,r,f,n,l);break e;case 1:r=Vp(null,r,f,n,l);break e;case 11:r=Op(null,r,f,n,l);break e;case 14:r=kp(null,r,f,ui(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:ui(f,p),Ru(n,r,f,p,l);case 1:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:ui(f,p),Vp(n,r,f,p,l);case 3:e:{if(Gp(r),n===null)throw Error(t(387));f=r.pendingProps,v=r.memoizedState,p=v.element,rp(n,r),rl(r,f,null,l);var T=r.memoizedState;if(f=T.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Os(Error(t(423)),r),r=Wp(n,r,f,l,p);break e}else if(f!==p){p=Os(Error(t(424)),r),r=Wp(n,r,f,l,p);break e}else for(qn=mr(r.stateNode.containerInfo.firstChild),jn=r,Wt=!0,ci=null,l=np(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Is(),f===p){r=Xi(n,r,l);break e}Rn(n,r,f,l)}r=r.child}return r;case 5:return ap(r),n===null&&iu(r),f=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,Yc(f,p)?T=null:v!==null&&Yc(f,v)&&(r.flags|=32),Hp(n,r),Rn(n,r,T,l),r.child;case 6:return n===null&&iu(r),null;case 13:return Xp(n,r,l);case 4:return fu(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Ns(r,null,f,l):Rn(n,r,f,l),r.child;case 11:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:ui(f,p),Op(n,r,f,p,l);case 7:return Rn(n,r,r.pendingProps,l),r.child;case 8:return Rn(n,r,r.pendingProps.children,l),r.child;case 12:return Rn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,p=r.pendingProps,v=r.memoizedProps,T=p.value,Bt(tl,f._currentValue),f._currentValue=T,v!==null)if(li(v.value,T)){if(v.children===p.children&&!On.current){r=Xi(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var D=v.dependencies;if(D!==null){T=v.child;for(var B=D.firstContext;B!==null;){if(B.context===f){if(v.tag===1){B=Wi(-1,l&-l),B.tag=2;var te=v.updateQueue;if(te!==null){te=te.shared;var Se=te.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),te.pending=B}}v.lanes|=l,B=v.alternate,B!==null&&(B.lanes|=l),lu(v.return,l,r),D.lanes|=l;break}B=B.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,D=T.alternate,D!==null&&(D.lanes|=l),lu(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Rn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,f=r.pendingProps.children,Us(r,l),p=ei(p),f=f(p),r.flags|=1,Rn(n,r,f,l),r.child;case 14:return f=r.type,p=ui(f,r.pendingProps),p=ui(f.type,p),kp(n,r,f,p,l);case 15:return Bp(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,p=r.pendingProps,p=r.elementType===f?p:ui(f,p),hl(n,r),r.tag=1,kn(f)?(n=!0,Ka(r)):n=!1,Us(r,l),Pp(r,f,p),Tu(r,f,p,l),Cu(null,r,f,!0,n,l);case 19:return qp(n,r,l);case 22:return zp(n,r,l)}throw Error(t(156,r.tag))};function _m(n,r){return R(n,r)}function S0(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,r,l,f){return new S0(n,r,l,f)}function Yu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function M0(n){if(typeof n=="function")return Yu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===ge)return 14}return 2}function Ar(n,r){var l=n.alternate;return l===null?(l=ii(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Tl(n,r,l,f,p,v){var T=2;if(f=n,typeof n=="function")Yu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return is(l.children,p,v,r);case H:T=8,p|=8;break;case P:return n=ii(12,l,r,p|2),n.elementType=P,n.lanes=v,n;case J:return n=ii(13,l,r,p),n.elementType=J,n.lanes=v,n;case me:return n=ii(19,l,r,p),n.elementType=me,n.lanes=v,n;case he:return wl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:T=10;break e;case z:T=9;break e;case ae:T=11;break e;case ge:T=14;break e;case fe:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ii(T,l,r,p),r.elementType=n,r.type=f,r.lanes=v,r}function is(n,r,l,f){return n=ii(7,n,f,r),n.lanes=l,n}function wl(n,r,l,f){return n=ii(22,n,f,r),n.elementType=he,n.lanes=l,n.stateNode={isHidden:!1},n}function Ku(n,r,l){return n=ii(6,n,null,r),n.lanes=l,n}function $u(n,r,l){return r=ii(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function E0(n,r,l,f,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Zu(n,r,l,f,p,v,T,D,B){return n=new E0(n,r,l,D,B),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ii(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(v),n}function T0(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function vm(n){if(!n)return _r;n=n._reactInternals;e:{if(Ti(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(kn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(kn(l))return jh(n,l,r)}return r}function xm(n,r,l,f,p,v,T,D,B){return n=Zu(l,f,!0,n,p,v,T,D,B),n.context=vm(null),l=n.current,f=Cn(),p=Tr(l),v=Wi(f,p),v.callback=r??null,yr(l,v,p),n.current.lanes=p,$t(n,p,f),Hn(n,f),n}function Al(n,r,l,f){var p=r.current,v=Cn(),T=Tr(p);return l=vm(l),r.context===null?r.context=l:r.pendingContext=l,r=Wi(v,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=yr(p,r,T),n!==null&&(hi(n,p,T,v),il(n,p,T)),T}function Rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ym(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Qu(n,r){ym(n,r),(n=n.alternate)&&ym(n,r)}function w0(){return null}var Sm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ju(n){this._internalRoot=n}Cl.prototype.render=Ju.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Al(n,r,null,null)},Cl.prototype.unmount=Ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;es(function(){Al(null,n,null,null)}),r[Bi]=null}};function Cl(n){this._internalRoot=n}Cl.prototype.unstable_scheduleHydration=function(n){if(n){var r=rh();n={blockedOn:null,target:n,priority:r};for(var l=0;l<dr.length&&r!==0&&r<dr[l].priority;l++);dr.splice(l,0,n),l===0&&ah(n)}};function ef(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function A0(n,r,l,f,p){if(p){if(typeof f=="function"){var v=f;f=function(){var te=Rl(T);v.call(te)}}var T=xm(r,f,n,0,null,!1,!1,"",Mm);return n._reactRootContainer=T,n[Bi]=T.current,Bo(n.nodeType===8?n.parentNode:n),es(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof f=="function"){var D=f;f=function(){var te=Rl(B);D.call(te)}}var B=Zu(n,0,!1,null,null,!1,!1,"",Mm);return n._reactRootContainer=B,n[Bi]=B.current,Bo(n.nodeType===8?n.parentNode:n),es(function(){Al(r,B,l,f)}),B}function Pl(n,r,l,f,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var D=p;p=function(){var B=Rl(T);D.call(B)}}Al(r,T,n,p)}else T=A0(l,r,n,p,f);return Rl(T)}nh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=hn(r.pendingLanes);l!==0&&(Xr(r,l|1),Hn(r,G()),(Rt&6)===0&&(zs=G()+500,vr()))}break;case 13:es(function(){var f=Gi(n,1);if(f!==null){var p=Cn();hi(f,n,1,p)}}),Qu(n,1)}},wc=function(n){if(n.tag===13){var r=Gi(n,134217728);if(r!==null){var l=Cn();hi(r,n,134217728,l)}Qu(n,134217728)}},ih=function(n){if(n.tag===13){var r=Tr(n),l=Gi(n,r);if(l!==null){var f=Cn();hi(l,n,r,f)}Qu(n,r)}},rh=function(){return xt},sh=function(n,r){var l=xt;try{return xt=n,r()}finally{xt=l}},Ie=function(n,r,l){switch(r){case"input":if(Ze(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var p=qa(f);if(!p)throw Error(t(90));gt(f),Ze(f,p)}}}break;case"textarea":ue(n,l);break;case"select":r=l.value,r!=null&&I(n,!!l.multiple,r,!1)}},zt=Xu,tn=es;var R0={usingClientEntryPoint:!1,Events:[Vo,Rs,qa,Fe,ut,Xu]},na={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C0={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Pa(n),n===null?null:n.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||w0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{Qe=Ll.inject(C0),ft=Ll}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0,Vn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(r))throw Error(t(200));return T0(n,r,null,l)},Vn.createRoot=function(n,r){if(!ef(n))throw Error(t(299));var l=!1,f="",p=Sm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Zu(n,1,!1,null,null,l,!1,f,p),n[Bi]=r.current,Bo(n.nodeType===8?n.parentNode:n),new Ju(r)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Pa(r),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return es(n)},Vn.hydrate=function(n,r,l){if(!bl(r))throw Error(t(200));return Pl(null,n,r,!0,l)},Vn.hydrateRoot=function(n,r,l){if(!ef(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,p=!1,v="",T=Sm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=xm(r,null,n,1,l??null,p,!1,v,T),n[Bi]=r.current,Bo(n),f)for(n=0;n<f.length;n++)l=f[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Cl(r)},Vn.render=function(n,r,l){if(!bl(r))throw Error(t(200));return Pl(null,n,r,!1,l)},Vn.unmountComponentAtNode=function(n){if(!bl(n))throw Error(t(40));return n._reactRootContainer?(es(function(){Pl(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1},Vn.unstable_batchedUpdates=Xu,Vn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!bl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pl(n,r,l,!1,f)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var Pm;function k0(){if(Pm)return rf.exports;Pm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rf.exports=O0(),rf.exports}var Lm;function B0(){if(Lm)return Il;Lm=1;var o=k0();return Il.createRoot=o.createRoot,Il.hydrateRoot=o.hydrateRoot,Il}var z0=B0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="171",H0=0,Im=1,V0=2,n_=1,i_=2,Ji=3,sr=0,Wn=1,Pi=2,Br=0,so=1,Nm=2,Dm=3,Um=4,G0=5,hs=100,W0=101,X0=102,j0=103,q0=104,Y0=200,K0=201,$0=202,Z0=203,Gf=204,Wf=205,Q0=206,J0=207,ex=208,tx=209,nx=210,ix=211,rx=212,sx=213,ox=214,Xf=0,jf=1,qf=2,co=3,Yf=4,Kf=5,$f=6,Zf=7,r_=0,ax=1,lx=2,zr=0,cx=1,ux=2,fx=3,s_=4,dx=5,hx=6,px=7,Fm="attached",mx="detached",o_=300,uo=301,fo=302,Qf=303,Jf=304,xc=306,ho=1e3,Or=1001,pc=1002,In=1003,a_=1004,ha=1005,Zn=1006,ac=1007,tr=1008,or=1009,l_=1010,c_=1011,va=1012,Fd=1013,gs=1014,xi=1015,Ma=1016,Od=1017,kd=1018,po=1020,u_=35902,f_=1021,d_=1022,oi=1023,h_=1024,p_=1025,oo=1026,mo=1027,Bd=1028,zd=1029,m_=1030,Hd=1031,Vd=1033,lc=33776,cc=33777,uc=33778,fc=33779,ed=35840,td=35841,nd=35842,id=35843,rd=36196,sd=37492,od=37496,ad=37808,ld=37809,cd=37810,ud=37811,fd=37812,dd=37813,hd=37814,pd=37815,md=37816,gd=37817,_d=37818,vd=37819,xd=37820,yd=37821,dc=36492,Sd=36494,Md=36495,g_=36283,Ed=36284,Td=36285,wd=36286,xa=2300,ya=2301,af=2302,Om=2400,km=2401,Bm=2402,gx=2500,_x=0,__=1,Ad=2,vx=3200,xx=3201,v_=0,yx=1,Ur="",fn="srgb",Dn="srgb-linear",mc="linear",kt="srgb",Vs=7680,zm=519,Sx=512,Mx=513,Ex=514,x_=515,Tx=516,wx=517,Ax=518,Rx=519,Rd=35044,Hm="300 es",nr=2e3,gc=2001;class So{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vm=1234567;const ma=Math.PI/180,go=180/Math.PI;function yi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[o&255]+Mn[o>>8&255]+Mn[o>>16&255]+Mn[o>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function yt(o,e,t){return Math.max(e,Math.min(t,o))}function Gd(o,e){return(o%e+e)%e}function Cx(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function bx(o,e,t){return o!==e?(t-o)/(e-o):0}function ga(o,e,t){return(1-t)*o+t*e}function Px(o,e,t,i){return ga(o,e,1-Math.exp(-t*i))}function Lx(o,e=1){return e-Math.abs(Gd(o,e*2)-e)}function Ix(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Nx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Dx(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Ux(o,e){return o+Math.random()*(e-o)}function Fx(o){return o*(.5-Math.random())}function Ox(o){o!==void 0&&(Vm=o);let e=Vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kx(o){return o*ma}function Bx(o){return o*go}function zx(o){return(o&o-1)===0&&o!==0}function Hx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Vx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Gx(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),d=c(t/2),h=a((e+i)/2),m=c((e+i)/2),g=a((e-i)/2),_=c((e-i)/2),y=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*m,d*g,d*_,u*h);break;case"YZY":o.set(d*_,u*m,d*g,u*h);break;case"ZXZ":o.set(d*g,d*_,u*m,u*h);break;case"XZX":o.set(u*m,d*M,d*y,u*h);break;case"YXY":o.set(d*y,u*m,d*M,u*h);break;case"ZYZ":o.set(d*M,d*y,u*m,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Dt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Fr={DEG2RAD:ma,RAD2DEG:go,generateUUID:yi,clamp:yt,euclideanModulo:Gd,mapLinear:Cx,inverseLerp:bx,lerp:ga,damp:Px,pingpong:Lx,smoothstep:Ix,smootherstep:Nx,randInt:Dx,randFloat:Ux,randFloatSpread:Fx,seededRandom:Ox,degToRad:kx,radToDeg:Bx,isPowerOfTwo:zx,ceilPowerOfTwo:Hx,floorPowerOfTwo:Vx,setQuaternionFromProperEuler:Gx,normalize:Dt,denormalize:_i};class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,i,s,a,c,u,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,h)}set(e,t,i,s,a,c,u,d,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=a,m[5]=d,m[6]=i,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],m=i[4],g=i[7],_=i[2],y=i[5],M=i[8],E=s[0],S=s[3],x=s[6],L=s[1],b=s[4],A=s[7],N=s[2],F=s[5],U=s[8];return a[0]=c*E+u*L+d*N,a[3]=c*S+u*b+d*F,a[6]=c*x+u*A+d*U,a[1]=h*E+m*L+g*N,a[4]=h*S+m*b+g*F,a[7]=h*x+m*A+g*U,a[2]=_*E+y*L+M*N,a[5]=_*S+y*b+M*F,a[8]=_*x+y*A+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-i*a*m+i*u*d+s*a*h-s*c*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8],g=m*c-u*h,_=u*d-m*a,y=h*a-c*d,M=t*g+i*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*h-m*i)*E,e[2]=(u*i-s*c)*E,e[3]=_*E,e[4]=(m*t-s*d)*E,e[5]=(s*a-u*t)*E,e[6]=y*E,e[7]=(i*d-h*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-s*h,s*d,-s*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(lf.makeScale(e,t)),this}rotate(e){return this.premultiply(lf.makeRotation(-e)),this}translate(e,t){return this.premultiply(lf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lf=new ht;function y_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Sa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Wx(){const o=Sa("canvas");return o.style.display="block",o}const Gm={};function io(o){o in Gm||(Gm[o]=!0,console.warn(o))}function Xx(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function jx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yx(){const o={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ur?mc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Dn]:{primaries:e,whitePoint:i,transfer:mc,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:Wm,fromXYZ:Xm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),o}const Tt=Yx();function rr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ao(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Gs;class Kx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=Sa("canvas")),Gs.width=e.width,Gs.height=e.height;const i=Gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=rr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rr(t[i]/255)*255):t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $x=0;class S_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(cf(s[c].image)):a.push(cf(s[c]))}else a=cf(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function cf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Kx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zx=0;class dn extends So{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=Or,s=Or,a=Zn,c=tr,u=oi,d=or,h=dn.DEFAULT_ANISOTROPY,m=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=yi(),this.name="",this.source=new S_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ho:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ho:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=o_;dn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],m=d[4],g=d[8],_=d[1],y=d[5],M=d[9],E=d[2],S=d[6],x=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,A=(y+1)/2,N=(x+1)/2,F=(m+_)/4,U=(g+E)/4,H=(M+S)/4;return b>A&&b>N?b<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(b),s=F/i,a=U/i):A>N?A<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(A),i=F/s,a=H/s):N<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(N),i=U/a,s=H/a),this.set(i,s,a,t),this}let L=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-E)/L,this.z=(_-m)/L,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qx extends So{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new dn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new S_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends Qx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class M_ extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jx extends dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let d=i[s+0],h=i[s+1],m=i[s+2],g=i[s+3];const _=a[c+0],y=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==_||h!==y||m!==M){let S=1-u;const x=d*_+h*y+m*M+g*E,L=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){const N=Math.sqrt(b),F=Math.atan2(N,x*L);S=Math.sin(S*F)/N,u=Math.sin(u*F)/N}const A=u*L;if(d=d*S+_*A,h=h*S+y*A,m=m*S+M*A,g=g*S+E*A,S===1-u){const N=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=N,h*=N,m*=N,g*=N}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],d=i[s+1],h=i[s+2],m=i[s+3],g=a[c],_=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+m*g+d*y-h*_,e[t+1]=d*M+m*_+h*g-u*y,e[t+2]=h*M+m*y+u*_-d*g,e[t+3]=m*M-u*g-d*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),m=u(s/2),g=u(a/2),_=d(i/2),y=d(s/2),M=d(a/2);switch(c){case"XYZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"YXZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"ZXY":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"ZYX":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"YZX":this._x=_*m*g+h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g-_*y*M;break;case"XZY":this._x=_*m*g-h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],m=t[6],g=t[10],_=i+u+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-d)*y,this._y=(a-h)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(m-d)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+h)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(a-h)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(a+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,m=t._w;return this._x=i*m+c*u+s*h-a*d,this._y=s*m+c*d+a*u-i*h,this._z=a*m+c*h+i*d-s*u,this._w=c*m-i*u-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,u),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=c*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*s-u*i),m=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+d*h+c*g-u*m,this.y=i+d*m+u*h-a*g,this.z=s+d*g+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=s*d-a*u,this.y=a*c-i*d,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uf.copy(this).projectOnVector(e),this.sub(uf)}reflect(e){return this.sub(uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uf=new Y,jm=new Si;class Ni{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,pi):pi.fromBufferAttribute(a,c),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Dl.subVectors(this.max,ra),Ws.subVectors(e.a,ra),Xs.subVectors(e.b,ra),js.subVectors(e.c,ra),Cr.subVectors(Xs,Ws),br.subVectors(js,Xs),rs.subVectors(Ws,js);let t=[0,-Cr.z,Cr.y,0,-br.z,br.y,0,-rs.z,rs.y,Cr.z,0,-Cr.x,br.z,0,-br.x,rs.z,0,-rs.x,-Cr.y,Cr.x,0,-br.y,br.x,0,-rs.y,rs.x,0];return!ff(t,Ws,Xs,js,Dl)||(t=[1,0,0,0,1,0,0,0,1],!ff(t,Ws,Xs,js,Dl))?!1:(Ul.crossVectors(Cr,br),t=[Ul.x,Ul.y,Ul.z],ff(t,Ws,Xs,js,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],pi=new Y,Nl=new Ni,Ws=new Y,Xs=new Y,js=new Y,Cr=new Y,br=new Y,rs=new Y,ra=new Y,Dl=new Y,Ul=new Y,ss=new Y;function ff(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){ss.fromArray(o,a);const u=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),d=e.dot(ss),h=t.dot(ss),m=i.dot(ss);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>u)return!1}return!0}const ey=new Ni,sa=new Y,df=new Y;class Di{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ey.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(df)),this.expandByPoint(sa.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new Y,hf=new Y,Fl=new Y,Pr=new Y,pf=new Y,Ol=new Y,mf=new Y;class yc{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hf.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(hf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Fl),u=Pr.dot(this.direction),d=-Pr.dot(Fl),h=Pr.lengthSq(),m=Math.abs(1-c*c);let g,_,y,M;if(m>0)if(g=c*d-u,_=c*u-d,M=a*m,g>=0)if(_>=-M)if(_<=M){const E=1/m;g*=E,_*=E,y=g*(g+c*_+2*u)+_*(c*g+_+2*d)+h}else _=a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*d)+h;else _=-a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*d)+h;else _<=-M?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-d),a),y=-g*g+_*(_+2*d)+h):_<=M?(g=0,_=Math.min(Math.max(-a,-d),a),y=_*(_+2*d)+h):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-d),a),y=-g*g+_*(_+2*d)+h);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(hf).addScaledVector(Fl,_),y}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),s=Yi.dot(Yi)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||u>s)||((u>i||i!==i)&&(i=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,s,a){pf.subVectors(t,e),Ol.subVectors(i,e),mf.crossVectors(pf,Ol);let c=this.direction.dot(mf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Pr.subVectors(this.origin,e);const d=u*this.direction.dot(Ol.crossVectors(Pr,Ol));if(d<0)return null;const h=u*this.direction.dot(pf.cross(Pr));if(h<0||d+h>c)return null;const m=-u*Pr.dot(mf);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,s,a,c,u,d,h,m,g,_,y,M,E,S){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,d,h,m,g,_,y,M,E,S)}set(e,t,i,s,a,c,u,d,h,m,g,_,y,M,E,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=c,x[9]=u,x[13]=d,x[2]=h,x[6]=m,x[10]=g,x[14]=_,x[3]=y,x[7]=M,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),a=1/qs.setFromMatrixColumn(e,1).length(),c=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(s),h=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,y=c*g,M=u*m,E=u*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=y+M*h,t[5]=_-E*h,t[9]=-u*d,t[2]=E-_*h,t[6]=M+y*h,t[10]=c*d}else if(e.order==="YXZ"){const _=d*m,y=d*g,M=h*m,E=h*g;t[0]=_+E*u,t[4]=M*u-y,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=y*u-M,t[6]=E+_*u,t[10]=c*d}else if(e.order==="ZXY"){const _=d*m,y=d*g,M=h*m,E=h*g;t[0]=_-E*u,t[4]=-c*g,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*m,t[9]=E-_*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const _=c*m,y=c*g,M=u*m,E=u*g;t[0]=d*m,t[4]=M*h-y,t[8]=_*h+E,t[1]=d*g,t[5]=E*h+_,t[9]=y*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,y=c*h,M=u*d,E=u*h;t[0]=d*m,t[4]=E-_*g,t[8]=M*g+y,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=y*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=c*d,y=c*h,M=u*d,E=u*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=_*g+E,t[5]=c*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=u*m,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ty,e,ny)}lookAt(e,t,i){const s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Lr.crossVectors(i,Kn),Lr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Lr.crossVectors(i,Kn)),Lr.normalize(),kl.crossVectors(Kn,Lr),s[0]=Lr.x,s[4]=kl.x,s[8]=Kn.x,s[1]=Lr.y,s[5]=kl.y,s[9]=Kn.y,s[2]=Lr.z,s[6]=kl.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],m=i[1],g=i[5],_=i[9],y=i[13],M=i[2],E=i[6],S=i[10],x=i[14],L=i[3],b=i[7],A=i[11],N=i[15],F=s[0],U=s[4],H=s[8],P=s[12],C=s[1],z=s[5],ae=s[9],J=s[13],me=s[2],ge=s[6],fe=s[10],he=s[14],k=s[3],de=s[7],oe=s[11],O=s[15];return a[0]=c*F+u*C+d*me+h*k,a[4]=c*U+u*z+d*ge+h*de,a[8]=c*H+u*ae+d*fe+h*oe,a[12]=c*P+u*J+d*he+h*O,a[1]=m*F+g*C+_*me+y*k,a[5]=m*U+g*z+_*ge+y*de,a[9]=m*H+g*ae+_*fe+y*oe,a[13]=m*P+g*J+_*he+y*O,a[2]=M*F+E*C+S*me+x*k,a[6]=M*U+E*z+S*ge+x*de,a[10]=M*H+E*ae+S*fe+x*oe,a[14]=M*P+E*J+S*he+x*O,a[3]=L*F+b*C+A*me+N*k,a[7]=L*U+b*z+A*ge+N*de,a[11]=L*H+b*ae+A*fe+N*oe,a[15]=L*P+b*J+A*he+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],m=e[2],g=e[6],_=e[10],y=e[14],M=e[3],E=e[7],S=e[11],x=e[15];return M*(+a*d*g-s*h*g-a*u*_+i*h*_+s*u*y-i*d*y)+E*(+t*d*y-t*h*_+a*c*_-s*c*y+s*h*m-a*d*m)+S*(+t*h*g-t*u*y-a*c*g+i*c*y+a*u*m-i*h*m)+x*(-s*u*m-t*d*g+t*u*_+s*c*g-i*c*_+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8],g=e[9],_=e[10],y=e[11],M=e[12],E=e[13],S=e[14],x=e[15],L=g*S*h-E*_*h+E*d*y-u*S*y-g*d*x+u*_*x,b=M*_*h-m*S*h-M*d*y+c*S*y+m*d*x-c*_*x,A=m*E*h-M*g*h+M*u*y-c*E*y-m*u*x+c*g*x,N=M*g*d-m*E*d-M*u*_+c*E*_+m*u*S-c*g*S,F=t*L+i*b+s*A+a*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=L*U,e[1]=(E*_*a-g*S*a-E*s*y+i*S*y+g*s*x-i*_*x)*U,e[2]=(u*S*a-E*d*a+E*s*h-i*S*h-u*s*x+i*d*x)*U,e[3]=(g*d*a-u*_*a-g*s*h+i*_*h+u*s*y-i*d*y)*U,e[4]=b*U,e[5]=(m*S*a-M*_*a+M*s*y-t*S*y-m*s*x+t*_*x)*U,e[6]=(M*d*a-c*S*a-M*s*h+t*S*h+c*s*x-t*d*x)*U,e[7]=(c*_*a-m*d*a+m*s*h-t*_*h-c*s*y+t*d*y)*U,e[8]=A*U,e[9]=(M*g*a-m*E*a-M*i*y+t*E*y+m*i*x-t*g*x)*U,e[10]=(c*E*a-M*u*a+M*i*h-t*E*h-c*i*x+t*u*x)*U,e[11]=(m*u*a-c*g*a-m*i*h+t*g*h+c*i*y-t*u*y)*U,e[12]=N*U,e[13]=(m*E*s-M*g*s+M*i*_-t*E*_-m*i*S+t*g*S)*U,e[14]=(M*u*s-c*E*s-M*i*d+t*E*d+c*i*S-t*u*S)*U,e[15]=(c*g*s-m*u*s+m*i*d-t*g*d-c*i*_+t*u*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,h=a*c,m=a*u;return this.set(h*c+i,h*u-s*d,h*d+s*u,0,h*u+s*d,m*u+i,m*d-s*c,0,h*d-s*u,m*d+s*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,m=c+c,g=u+u,_=a*h,y=a*m,M=a*g,E=c*m,S=c*g,x=u*g,L=d*h,b=d*m,A=d*g,N=i.x,F=i.y,U=i.z;return s[0]=(1-(E+x))*N,s[1]=(y+A)*N,s[2]=(M-b)*N,s[3]=0,s[4]=(y-A)*F,s[5]=(1-(_+x))*F,s[6]=(S+L)*F,s[7]=0,s[8]=(M+b)*U,s[9]=(S-L)*U,s[10]=(1-(_+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=qs.set(s[0],s[1],s[2]).length();const c=qs.set(s[4],s[5],s[6]).length(),u=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);const h=1/a,m=1/c,g=1/u;return mi.elements[0]*=h,mi.elements[1]*=h,mi.elements[2]*=h,mi.elements[4]*=m,mi.elements[5]*=m,mi.elements[6]*=m,mi.elements[8]*=g,mi.elements[9]*=g,mi.elements[10]*=g,t.setFromRotationMatrix(mi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=nr){const d=this.elements,h=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let y,M;if(u===nr)y=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===gc)y=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=nr){const d=this.elements,h=1/(t-e),m=1/(i-s),g=1/(c-a),_=(t+e)*h,y=(i+s)*m;let M,E;if(u===nr)M=(c+a)*g,E=-2*g;else if(u===gc)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qs=new Y,mi=new pt,ty=new Y(0,0,0),ny=new Y(1,1,1),Lr=new Y,kl=new Y,Kn=new Y,qm=new pt,Ym=new Si;class Ii{constructor(e=0,t=0,i=0,s=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],d=s[1],h=s[5],m=s[9],g=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class E_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iy=0;const Km=new Y,Ys=new Si,Ki=new pt,Bl=new Y,oa=new Y,ry=new Y,sy=new Si,$m=new Y(1,0,0),Zm=new Y(0,1,0),Qm=new Y(0,0,1),Jm={type:"added"},oy={type:"removed"},Ks={type:"childadded",child:null},gf={type:"childremoved",child:null};class Xt extends So{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new Y,t=new Ii,i=new Si,s=new Y(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new ht}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bl.copy(e):Bl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(oa,Bl,this.up):Ki.lookAt(Bl,oa,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Ki),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oy),gf.child=e,this.dispatchEvent(gf),gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new Y(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new Y,$i=new Y,_f=new Y,Zi=new Y,$s=new Y,Zs=new Y,eg=new Y,vf=new Y,xf=new Y,yf=new Y,Sf=new It,Mf=new It,Ef=new It;class vi{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gi.subVectors(e,t),s.cross(gi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){gi.subVectors(s,t),$i.subVectors(i,t),_f.subVectors(e,t);const c=gi.dot(gi),u=gi.dot($i),d=gi.dot(_f),h=$i.dot($i),m=$i.dot(_f),g=c*h-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,y=(h*d-u*m)*_,M=(c*m-u*d)*_;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,i,s,a,c,u,d){return this.getBarycoord(e,t,i,s,Zi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Zi.x),d.addScaledVector(c,Zi.y),d.addScaledVector(u,Zi.z),d)}static getInterpolatedAttribute(e,t,i,s,a,c){return Sf.setScalar(0),Mf.setScalar(0),Ef.setScalar(0),Sf.fromBufferAttribute(e,t),Mf.fromBufferAttribute(e,i),Ef.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Sf,a.x),c.addScaledVector(Mf,a.y),c.addScaledVector(Ef,a.z),c}static isFrontFacing(e,t,i,s){return gi.subVectors(i,t),$i.subVectors(e,t),gi.cross($i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),gi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;$s.subVectors(s,i),Zs.subVectors(a,i),vf.subVectors(e,i);const d=$s.dot(vf),h=Zs.dot(vf);if(d<=0&&h<=0)return t.copy(i);xf.subVectors(e,s);const m=$s.dot(xf),g=Zs.dot(xf);if(m>=0&&g<=m)return t.copy(s);const _=d*g-m*h;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(i).addScaledVector($s,c);yf.subVectors(e,a);const y=$s.dot(yf),M=Zs.dot(yf);if(M>=0&&y<=M)return t.copy(a);const E=y*h-d*M;if(E<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(Zs,u);const S=m*M-y*g;if(S<=0&&g-m>=0&&y-M>=0)return eg.subVectors(a,s),u=(g-m)/(g-m+(y-M)),t.copy(s).addScaledVector(eg,u);const x=1/(S+E+_);return c=E*x,u=_*x,t.copy(i).addScaledVector($s,c).addScaledVector(Zs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const T_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},zl={h:0,s:0,l:0};function Tf(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Tt.workingColorSpace){if(e=Gd(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Tf(c,a,e+1/3),this.g=Tf(c,a,e),this.b=Tf(c,a,e-1/3)}return Tt.toWorkingColorSpace(this,s),this}setStyle(e,t=fn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=T_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Tt.fromWorkingColorSpace(En.copy(this),e),Math.round(yt(En.r*255,0,255))*65536+Math.round(yt(En.g*255,0,255))*256+Math.round(yt(En.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(En.copy(this),t);const i=En.r,s=En.g,a=En.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let d,h;const m=(u+c)/2;if(u===c)d=0,h=0;else{const g=c-u;switch(h=m<=.5?g/(c+u):g/(2-c-u),c){case i:d=(s-a)/g+(s<a?6:0);break;case s:d=(a-i)/g+2;break;case a:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=fn){Tt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,s=En.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(zl);const i=ga(Ir.h,zl.h,t),s=ga(Ir.s,zl.s,t),a=ga(Ir.l,zl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new st;st.NAMES=T_;let ay=0;class Li extends So{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=so,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gf,this.blendDst=Wf,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gf&&(i.blendSrc=this.blendSrc),this.blendDst!==Wf&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ms extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new Y,Hl=new wt;class Nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rd,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hl.fromBufferAttribute(this,t),Hl.applyMatrix3(e),this.setXY(t,Hl.x,Hl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array),a=Dt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rd&&(e.usage=this.usage),e}}class w_ extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class A_ extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mi extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ly=0;const ri=new pt,wf=new Xt,Qs=new Y,$n=new Ni,aa=new Ni,un=new Y;class Ei extends So{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y_(e)?A_:w_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ht().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Mi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];$n.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];aa.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors($n.min,aa.min),$n.expandByPoint(un),un.addVectors($n.max,aa.max),$n.expandByPoint(un)):($n.expandByPoint(aa.min),$n.expandByPoint(aa.max))}$n.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)un.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(un));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)un.fromBufferAttribute(u,h),d&&(Qs.fromBufferAttribute(e,h),un.add(Qs)),s=Math.max(s,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let H=0;H<i.count;H++)u[H]=new Y,d[H]=new Y;const h=new Y,m=new Y,g=new Y,_=new wt,y=new wt,M=new wt,E=new Y,S=new Y;function x(H,P,C){h.fromBufferAttribute(i,H),m.fromBufferAttribute(i,P),g.fromBufferAttribute(i,C),_.fromBufferAttribute(a,H),y.fromBufferAttribute(a,P),M.fromBufferAttribute(a,C),m.sub(h),g.sub(h),y.sub(_),M.sub(_);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(z),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(z),u[H].add(E),u[P].add(E),u[C].add(E),d[H].add(S),d[P].add(S),d[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let H=0,P=L.length;H<P;++H){const C=L[H],z=C.start,ae=C.count;for(let J=z,me=z+ae;J<me;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const b=new Y,A=new Y,N=new Y,F=new Y;function U(H){N.fromBufferAttribute(s,H),F.copy(N);const P=u[H];b.copy(P),b.sub(N.multiplyScalar(N.dot(P))).normalize(),A.crossVectors(F,P);const z=A.dot(d[H])<0?-1:1;c.setXYZW(H,b.x,b.y,b.z,z)}for(let H=0,P=L.length;H<P;++H){const C=L[H],z=C.start,ae=C.count;for(let J=z,me=z+ae;J<me;J+=3)U(e.getX(J+0)),U(e.getX(J+1)),U(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new Y,a=new Y,c=new Y,u=new Y,d=new Y,h=new Y,m=new Y,g=new Y;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),u.add(m),d.add(m),h.add(m),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(u,d){const h=u.array,m=u.itemSize,g=u.normalized,_=new h.constructor(d.length*m);let y=0,M=0;for(let E=0,S=d.length;E<S;E++){u.isInterleavedBufferAttribute?y=d[E]*u.data.stride+u.offset:y=d[E]*m;for(let x=0;x<m;x++)_[M++]=h[y++]}return new Nn(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,i=this.index.array,s=this.attributes;for(const u in s){const d=s[u],h=e(d,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let m=0,g=h.length;m<g;m++){const _=h[m],y=e(_,i);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,_=h.length;g<_;g++){const y=h[g];m.push(y.toJSON(e.data))}m.length>0&&(s[d]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],g=a[h];for(let _=0,y=g.length;_<y;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tg=new pt,os=new yc,Vl=new Di,ng=new Y,Gl=new Y,Wl=new Y,Xl=new Y,Af=new Y,jl=new Y,ig=new Y,ql=new Y;class Gn extends Xt{constructor(e=new Ei,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){jl.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const m=u[d],g=a[d];m!==0&&(Af.fromBufferAttribute(g,e),c?jl.addScaledVector(Af,m):jl.addScaledVector(Af.sub(t),m))}t.add(jl)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(a),os.copy(e.ray).recast(e.near),!(Vl.containsPoint(os.origin)===!1&&(os.intersectSphere(Vl,ng)===null||os.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(a).invert(),os.copy(e.ray).applyMatrix4(tg),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],x=c[S.materialIndex],L=Math.max(S.start,y.start),b=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,N=b;A<N;A+=3){const F=u.getX(A),U=u.getX(A+1),H=u.getX(A+2);s=Yl(this,x,e,i,h,m,g,F,U,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const L=u.getX(S),b=u.getX(S+1),A=u.getX(S+2);s=Yl(this,c,e,i,h,m,g,L,b,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=_.length;M<E;M++){const S=_[M],x=c[S.materialIndex],L=Math.max(S.start,y.start),b=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let A=L,N=b;A<N;A+=3){const F=A,U=A+1,H=A+2;s=Yl(this,x,e,i,h,m,g,F,U,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const L=S,b=S+1,A=S+2;s=Yl(this,c,e,i,h,m,g,L,b,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function cy(o,e,t,i,s,a,c,u){let d;if(e.side===Wn?d=i.intersectTriangle(c,a,s,!0,u):d=i.intersectTriangle(s,a,c,e.side===sr,u),d===null)return null;ql.copy(u),ql.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(ql);return h<t.near||h>t.far?null:{distance:h,point:ql.clone(),object:o}}function Yl(o,e,t,i,s,a,c,u,d,h){o.getVertexPosition(u,Gl),o.getVertexPosition(d,Wl),o.getVertexPosition(h,Xl);const m=cy(o,e,t,i,Gl,Wl,Xl,ig);if(m){const g=new Y;vi.getBarycoord(ig,Gl,Wl,Xl,g),s&&(m.uv=vi.getInterpolatedAttribute(s,u,d,h,g,new wt)),a&&(m.uv1=vi.getInterpolatedAttribute(a,u,d,h,g,new wt)),c&&(m.normal=vi.getInterpolatedAttribute(c,u,d,h,g,new Y),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:d,c:h,normal:new Y,materialIndex:0};vi.getNormal(Gl,Wl,Xl,_.normal),m.face=_,m.barycoord=g}return m}class Ea extends Ei{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],m=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new Mi(h,3)),this.setAttribute("normal",new Mi(m,3)),this.setAttribute("uv",new Mi(g,2));function M(E,S,x,L,b,A,N,F,U,H,P){const C=A/U,z=N/H,ae=A/2,J=N/2,me=F/2,ge=U+1,fe=H+1;let he=0,k=0;const de=new Y;for(let oe=0;oe<fe;oe++){const O=oe*z-J;for(let ie=0;ie<ge;ie++){const ke=ie*C-ae;de[E]=ke*L,de[S]=O*b,de[x]=me,h.push(de.x,de.y,de.z),de[E]=0,de[S]=0,de[x]=F>0?1:-1,m.push(de.x,de.y,de.z),g.push(ie/U),g.push(1-oe/H),he+=1}}for(let oe=0;oe<H;oe++)for(let O=0;O<U;O++){const ie=_+O+ge*oe,ke=_+O+ge*(oe+1),Z=_+(O+1)+ge*(oe+1),pe=_+(O+1)+ge*oe;d.push(ie,ke,pe),d.push(ke,Z,pe),k+=6}u.addGroup(y,k,P),y+=k,_+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pn(o){const e={};for(let t=0;t<o.length;t++){const i=_o(o[t]);for(const s in i)e[s]=i[s]}return e}function uy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function R_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const fy={clone:_o,merge:Pn};var dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hr extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dy,this.fragmentShader=hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let C_=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Nr=new Y,rg=new wt,sg=new wt;class Ln extends C_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,rg,sg),t.subVectors(sg,rg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*i/h,s*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,eo=1;class py extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(Js,eo,e,t);s.layers=this.layers,this.add(s);const a=new Ln(Js,eo,e,t);a.layers=this.layers,this.add(a);const c=new Ln(Js,eo,e,t);c.layers=this.layers,this.add(c);const u=new Ln(Js,eo,e,t);u.layers=this.layers,this.add(u);const d=new Ln(Js,eo,e,t);d.layers=this.layers,this.add(d);const h=new Ln(Js,eo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===gc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,d),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class b_ extends dn{constructor(e,t,i,s,a,c,u,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:uo,super(e,t,i,s,a,c,u,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class my extends _s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new b_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ea(5,5,5),a=new Hr({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wn,blending:Br});a.uniforms.tEquirect.value=t;const c=new Gn(s,a),u=t.minFilter;return t.minFilter===tr&&(t.minFilter=Zn),new py(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class Wd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=i}clone(){return new Wd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gy extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _y{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rd,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new Y;class Xd{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array),a=Dt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const og=new Y,ag=new It,lg=new It,vy=new Y,cg=new pt,Kl=new Y,Rf=new Di,ug=new pt,Cf=new yc;class xy extends Gn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fm,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Kl),this.boundingBox.expandByPoint(Kl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Kl),this.boundingSphere.expandByPoint(Kl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rf.copy(this.boundingSphere),Rf.applyMatrix4(s),e.ray.intersectsSphere(Rf)!==!1&&(ug.copy(s).invert(),Cf.copy(e.ray).applyMatrix4(ug),!(this.boundingBox!==null&&Cf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new It,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;ag.fromBufferAttribute(s.attributes.skinIndex,e),lg.fromBufferAttribute(s.attributes.skinWeight,e),og.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=lg.getComponent(a);if(c!==0){const u=ag.getComponent(a);cg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(vy.copy(og).applyMatrix4(cg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class P_ extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class L_ extends dn{constructor(e=null,t=1,i=1,s,a,c,u,d,h=In,m=In,g,_){super(null,c,u,d,h,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fg=new pt,yy=new pt;class jd{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new pt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:yy;fg.multiplyMatrices(u,t[a]),fg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new jd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new L_(t,e,e,oi,xi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new P_),this.bones.push(c),this.boneInverses.push(new pt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class Cd extends Nn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const to=new pt,dg=new pt,$l=[],hg=new Ni,Sy=new pt,la=new Gn,ca=new Di;class My extends Gn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Sy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,to),hg.copy(e.boundingBox).applyMatrix4(to),this.boundingBox.union(hg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,to),ca.copy(e.boundingSphere).applyMatrix4(to),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(i),e.ray.intersectsSphere(ca)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,to),dg.multiplyMatrices(i,to),la.matrixWorld=dg,la.raycast(e,$l);for(let c=0,u=$l.length;c<u;c++){const d=$l[c];d.instanceId=a,d.object=this,t.push(d)}$l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new L_(new Float32Array(s*this.count),s,this.count,Bd,xi));const a=this.morphTexture.source.data.data;let c=0;for(let h=0;h<i.length;h++)c+=i[h];const u=this.geometry.morphTargetsRelative?1:1-c,d=s*e;a[d]=u,a.set(i,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const bf=new Y,Ey=new Y,Ty=new ht;class fs{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=bf.subVectors(i,t).cross(Ey.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(bf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ty.getNormalMatrix(e),s=this.coplanarPoint(bf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Di,Zl=new Y;class qd{constructor(e=new fs,t=new fs,i=new fs,s=new fs,a=new fs,c=new fs){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],d=s[3],h=s[4],m=s[5],g=s[6],_=s[7],y=s[8],M=s[9],E=s[10],S=s[11],x=s[12],L=s[13],b=s[14],A=s[15];if(i[0].setComponents(d-a,_-h,S-y,A-x).normalize(),i[1].setComponents(d+a,_+h,S+y,A+x).normalize(),i[2].setComponents(d+c,_+m,S+M,A+L).normalize(),i[3].setComponents(d-c,_-m,S-M,A-L).normalize(),i[4].setComponents(d-u,_-g,S-E,A-b).normalize(),t===nr)i[5].setComponents(d+u,_+g,S+E,A+b).normalize();else if(t===gc)i[5].setComponents(u,g,E,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Zl.x=s.normal.x>0?e.max.x:e.min.x,Zl.y=s.normal.y>0?e.max.y:e.min.y,Zl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yd extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _c=new Y,vc=new Y,pg=new pt,ua=new yc,Ql=new Di,Pf=new Y,mg=new Y;class Kd extends Xt{constructor(e=new Ei,t=new Yd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)_c.fromBufferAttribute(t,s-1),vc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_c.distanceTo(vc);e.setAttribute("lineDistance",new Mi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(s),Ql.radius+=a,e.ray.intersectsSphere(Ql)===!1)return;pg.copy(s).invert(),ua.copy(e.ray).applyMatrix4(pg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=h){const x=m.getX(E),L=m.getX(E+1),b=Jl(this,e,ua,d,x,L);b&&t.push(b)}if(this.isLineLoop){const E=m.getX(M-1),S=m.getX(y),x=Jl(this,e,ua,d,E,S);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=h){const x=Jl(this,e,ua,d,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=Jl(this,e,ua,d,M-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Jl(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(_c.fromBufferAttribute(c,s),vc.fromBufferAttribute(c,a),t.distanceSqToSegment(_c,vc,Pf,mg)>i)return;Pf.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Pf);if(!(d<e.near||d>e.far))return{distance:d,point:mg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const gg=new Y,_g=new Y;class I_ extends Kd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)gg.fromBufferAttribute(t,s),_g.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+gg.distanceTo(_g);e.setAttribute("lineDistance",new Mi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wy extends Kd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class N_ extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vg=new pt,bd=new yc,ec=new Di,tc=new Y;class Ay extends Xt{constructor(e=new Ei,t=new N_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(s),ec.radius+=a,e.ray.intersectsSphere(ec)===!1)return;vg.copy(s).invert(),bd.copy(e.ray).applyMatrix4(vg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=i.index,g=i.attributes.position;if(h!==null){const _=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let M=_,E=y;M<E;M++){const S=h.getX(M);tc.fromBufferAttribute(g,S),xg(tc,S,d,s,e,t,this)}}else{const _=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let M=_,E=y;M<E;M++)tc.fromBufferAttribute(g,M),xg(tc,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function xg(o,e,t,i,s,a,c){const u=bd.distanceSqToPoint(o);if(u<t){const d=new Y;bd.closestPointToPoint(o,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class ir extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class D_ extends dn{constructor(e,t,i,s,a,c,u,d,h,m=oo){if(m!==oo&&m!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===oo&&(i=gs),i===void 0&&m===mo&&(i=po),super(null,s,a,c,u,d,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:In,this.minFilter=d!==void 0?d:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ta extends Ei{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(s),h=u+1,m=d+1,g=e/u,_=t/d,y=[],M=[],E=[],S=[];for(let x=0;x<m;x++){const L=x*_-c;for(let b=0;b<h;b++){const A=b*g-a;M.push(A,-L,0),E.push(0,0,1),S.push(b/u),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<u;L++){const b=L+h*x,A=L+h*(x+1),N=L+1+h*(x+1),F=L+1+h*x;y.push(b,A,F),y.push(A,N,F)}this.setIndex(y),this.setAttribute("position",new Mi(M,3)),this.setAttribute("normal",new Mi(E,3)),this.setAttribute("uv",new Mi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sc extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=v_,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ui extends Sc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ry extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function nc(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function by(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Py(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function yg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let d=0;d!==e;++d)s[c++]=o[u+d]}return s}function U_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class wa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ly extends wa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Om,endingEnd:Om}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],d=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case km:a=e,u=2*t-i;break;case Bm:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(d===void 0)switch(this.getSettings_().endingEnd){case km:c=e,d=2*i-t;break;case Bm:c=1,d=i+s[1]-s[0];break;default:c=e-1,d=t}const h=(i-t)*.5,m=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(d-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,h=d-u,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,x=-_*S+2*_*E-_*M,L=(1+_)*S+(-1.5-2*_)*E+(-.5+_)*M+1,b=(-1-y)*S+(1.5+y)*E+.5*M,A=y*S-y*E;for(let N=0;N!==u;++N)a[N]=x*c[m+N]+L*c[h+N]+b*c[d+N]+A*c[g+N];return a}}class Iy extends wa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=e*u,h=d-u,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==u;++_)a[_]=c[h+_]*g+c[d+_]*m;return a}}class Ny extends wa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nc(t,this.TimeBufferType),this.values=nc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:nc(e.times,Array),values:nc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ny(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Iy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ly(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case ya:t=this.InterpolantFactoryMethodLinear;break;case af:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return af}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const d=i[u];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(c!==null&&c>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,d,c),e=!1;break}c=d}if(s!==void 0&&by(s))for(let u=0,d=s.length;u!==d;++u){const h=s[u];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===af,a=e.length-1;let c=1;for(let u=1;u<a;++u){let d=!1;const h=e[u],m=e[u+1];if(h!==m&&(u!==1||h!==e[0]))if(s)d=!0;else{const g=u*i,_=g-i,y=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[_+M]||E!==t[y+M]){d=!0;break}}}if(d){if(u!==c){e[c]=e[u];const g=u*i,_=c*i;for(let y=0;y!==i;++y)t[_+y]=t[g+y]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,d=c*i,h=0;h!==i;++h)t[d+h]=t[u+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=ya;class Mo extends Fi{constructor(e,t,i){super(e,t,i)}}Mo.prototype.ValueTypeName="bool";Mo.prototype.ValueBufferType=Array;Mo.prototype.DefaultInterpolation=xa;Mo.prototype.InterpolantFactoryMethodLinear=void 0;Mo.prototype.InterpolantFactoryMethodSmooth=void 0;class F_ extends Fi{}F_.prototype.ValueTypeName="color";class vo extends Fi{}vo.prototype.ValueTypeName="number";class Dy extends wa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=(i-t)/(s-t);let h=e*u;for(let m=h+u;h!==m;h+=4)Si.slerpFlat(a,0,c,h-u,c,h,d);return a}}class xo extends Fi{InterpolantFactoryMethodLinear(e){return new Dy(this.times,this.values,this.getValueSize(),e)}}xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;class Eo extends Fi{constructor(e,t,i){super(e,t,i)}}Eo.prototype.ValueTypeName="string";Eo.prototype.ValueBufferType=Array;Eo.prototype.DefaultInterpolation=xa;Eo.prototype.InterpolantFactoryMethodLinear=void 0;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends Fi{}yo.prototype.ValueTypeName="vector";class Uy{constructor(e="",t=-1,i=[],s=gx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=yi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(Oy(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Fi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let d=[],h=[];d.push((u+a-1)%a,u,(u+1)%a),h.push(0,1,0);const m=Py(d);d=yg(d,1,m),h=yg(h,1,m),!s&&d[0]===0&&(d.push(a),h.push(h[0])),c.push(new vo(".morphTargetInfluences["+t[u].name+"]",d,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const h=e[u],m=h.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(h)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,y,M,E){if(y.length!==0){const S=[],x=[];U_(y,S,x,M),S.length!==0&&E.push(new g(_,S,x))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const _=h[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let E=0;E<_[M].morphTargets.length;E++)y[_[M].morphTargets[E]]=-1;for(const E in y){const S=[],x=[];for(let L=0;L!==_[M].morphTargets.length;++L){const b=_[M];S.push(b.time),x.push(b.morphTarget===E?1:0)}s.push(new vo(".morphTargetInfluence["+E+"]",S,x))}d=y.length*c}else{const y=".bones["+t[g].name+"]";i(yo,y+".position",_,"pos",s),i(xo,y+".quaternion",_,"rot",s),i(yo,y+".scale",_,"scl",s)}}return s.length===0?null:new this(a,d,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Fy(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vo;case"vector":case"vector2":case"vector3":case"vector4":return yo;case"color":return F_;case"quaternion":return xo;case"bool":case"boolean":return Mo;case"string":return Eo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Oy(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Fy(o.type);if(o.times===void 0){const t=[],i=[];U_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const kr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class ky{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){u++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,u),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=h.length;g<_;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null}}}const By=new ky;class To{constructor(e){this.manager=e!==void 0?e:By,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}To.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi={};class zy extends Error{constructor(e,t){super(e),this.response=t}}class O_ extends To{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=kr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:i,onError:s});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Qi[e],g=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let E=0;const S=new ReadableStream({start(x){L();function L(){g.read().then(({done:b,value:A})=>{if(b)x.close();else{E+=A.byteLength;const N=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let F=0,U=m.length;F<U;F++){const H=m[F];H.onProgress&&H.onProgress(N)}x.enqueue(A),L()}},b=>{x.error(b)})}}});return new Response(S)}else throw new zy(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return h.json();default:if(u===void 0)return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{kr.add(e,h);const m=Qi[e];delete Qi[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onLoad&&y.onLoad(h)}}).catch(h=>{const m=Qi[e];if(m===void 0)throw this.manager.itemError(e),h;delete Qi[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hy extends To{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=kr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Sa("img");function d(){m(),kr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",d,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class Vy extends To{constructor(e){super(e)}load(e,t,i,s){const a=new dn,c=new Hy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Mc extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gy extends Mc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Lf=new pt,Sg=new Y,Mg=new Y;class $d{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Sg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sg),Mg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mg),t.updateMatrixWorld(),Lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wy extends $d{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=go*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xy extends Mc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new Wy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Eg=new pt,fa=new Y,If=new Y;class jy extends $d{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),fa.setFromMatrixPosition(e.matrixWorld),i.position.copy(fa),If.copy(i.position),If.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(If),i.updateMatrixWorld(),s.makeTranslation(-fa.x,-fa.y,-fa.z),Eg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eg)}}class k_ extends Mc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zd extends C_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qy extends $d{constructor(){super(new Zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pd extends Mc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new qy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _a{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Yy extends To{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=kr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{t&&t(h),a.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const d=fetch(e,u).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return kr.add(e,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),kr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});kr.add(e,d),a.manager.itemStart(e)}}class Ky extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Qd="\\[\\]\\.:\\/",$y=new RegExp("["+Qd+"]","g"),Jd="[^"+Qd+"]",Zy="[^"+Qd.replace("\\.","")+"]",Qy=/((?:WC+[\/:])*)/.source.replace("WC",Jd),Jy=/(WCOD+)?/.source.replace("WCOD",Zy),eS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jd),tS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jd),nS=new RegExp("^"+Qy+Jy+eS+tS+"$"),iS=["material","materials","bones","map"];class rS{constructor(e,t,i){const s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ut{constructor(e,t,i){this.path=t,this.parsedPath=i||Ut.parseTrackName(t),this.node=Ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ut.Composite(e,t,i):new Ut(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($y,"")}static parseTrackName(e){const t=nS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);iS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const d=i(u.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[s];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ut.Composite=rS;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class sS extends I_{constructor(e=10,t=10,i=4473924,s=8947848){i=new st(i),s=new st(s);const a=t/2,c=e/t,u=e/2,d=[],h=[];for(let _=0,y=0,M=-u;_<=t;_++,M+=c){d.push(-u,0,M,u,0,M),d.push(M,0,-u,M,0,u);const E=_===a?i:s;E.toArray(h,y),y+=3,E.toArray(h,y),y+=3,E.toArray(h,y),y+=3,E.toArray(h,y),y+=3}const m=new Ei;m.setAttribute("position",new Mi(d,3)),m.setAttribute("color",new Mi(h,3));const g=new Yd({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Tg(o,e,t,i){const s=oS(i);switch(t){case f_:return o*e;case h_:return o*e;case p_:return o*e*2;case Bd:return o*e/s.components*s.byteLength;case zd:return o*e/s.components*s.byteLength;case m_:return o*e*2/s.components*s.byteLength;case Hd:return o*e*2/s.components*s.byteLength;case d_:return o*e*3/s.components*s.byteLength;case oi:return o*e*4/s.components*s.byteLength;case Vd:return o*e*4/s.components*s.byteLength;case lc:case cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case uc:case fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case td:case id:return Math.max(o,16)*Math.max(e,8)/4;case ed:case nd:return Math.max(o,8)*Math.max(e,8)/2;case rd:case sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case od:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case cd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ud:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case pd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case md:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case gd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case vd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case xd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case dc:case Sd:case Md:return Math.ceil(o/4)*Math.ceil(e/4)*16;case g_:case Ed:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Td:case wd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oS(o){switch(o){case or:case l_:return{byteLength:1,components:1};case va:case c_:case Ma:return{byteLength:2,components:1};case Od:case kd:return{byteLength:2,components:4};case gs:case Fd:case xi:return{byteLength:4,components:1};case u_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function B_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function aS(o){const e=new WeakMap;function t(u,d){const h=u.array,m=u.usage,g=h.byteLength,_=o.createBuffer();o.bindBuffer(d,_),o.bufferData(d,h,m),u.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,d,h){const m=d.array,g=d.updateRanges;if(o.bindBuffer(h,u),g.length===0)o.bufferSubData(h,0,m);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];o.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(o.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,d),h.version=u.version}}return{get:s,remove:a,update:c}}var lS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kS="gl_FragColor = linearToOutputTexel( gl_FragColor );",BS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:lS,alphahash_pars_fragment:cS,alphamap_fragment:uS,alphamap_pars_fragment:fS,alphatest_fragment:dS,alphatest_pars_fragment:hS,aomap_fragment:pS,aomap_pars_fragment:mS,batching_pars_vertex:gS,batching_vertex:_S,begin_vertex:vS,beginnormal_vertex:xS,bsdfs:yS,iridescence_fragment:SS,bumpmap_pars_fragment:MS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:TS,clipping_planes_pars_vertex:wS,clipping_planes_vertex:AS,color_fragment:RS,color_pars_fragment:CS,color_pars_vertex:bS,color_vertex:PS,common:LS,cube_uv_reflection_fragment:IS,defaultnormal_vertex:NS,displacementmap_pars_vertex:DS,displacementmap_vertex:US,emissivemap_fragment:FS,emissivemap_pars_fragment:OS,colorspace_fragment:kS,colorspace_pars_fragment:BS,envmap_fragment:zS,envmap_common_pars_fragment:HS,envmap_pars_fragment:VS,envmap_pars_vertex:GS,envmap_physical_pars_fragment:eM,envmap_vertex:WS,fog_vertex:XS,fog_pars_vertex:jS,fog_fragment:qS,fog_pars_fragment:YS,gradientmap_pars_fragment:KS,lightmap_pars_fragment:$S,lights_lambert_fragment:ZS,lights_lambert_pars_fragment:QS,lights_pars_begin:JS,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:rM,lights_physical_fragment:sM,lights_physical_pars_fragment:oM,lights_fragment_begin:aM,lights_fragment_maps:lM,lights_fragment_end:cM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:hM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:_M,metalnessmap_fragment:vM,metalnessmap_pars_fragment:xM,morphinstance_vertex:yM,morphcolor_vertex:SM,morphnormal_vertex:MM,morphtarget_pars_vertex:EM,morphtarget_vertex:TM,normal_fragment_begin:wM,normal_fragment_maps:AM,normal_pars_fragment:RM,normal_pars_vertex:CM,normal_vertex:bM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:LM,clearcoat_normal_fragment_maps:IM,clearcoat_pars_fragment:NM,iridescence_pars_fragment:DM,opaque_fragment:UM,packing:FM,premultiplied_alpha_fragment:OM,project_vertex:kM,dithering_fragment:BM,dithering_pars_fragment:zM,roughnessmap_fragment:HM,roughnessmap_pars_fragment:VM,shadowmap_pars_fragment:GM,shadowmap_pars_vertex:WM,shadowmap_vertex:XM,shadowmask_pars_fragment:jM,skinbase_vertex:qM,skinning_pars_vertex:YM,skinning_vertex:KM,skinnormal_vertex:$M,specularmap_fragment:ZM,specularmap_pars_fragment:QM,tonemapping_fragment:JM,tonemapping_pars_fragment:eE,transmission_fragment:tE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:oE,background_vert:aE,background_frag:lE,backgroundCube_vert:cE,backgroundCube_frag:uE,cube_vert:fE,cube_frag:dE,depth_vert:hE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:gE,equirect_vert:_E,equirect_frag:vE,linedashed_vert:xE,linedashed_frag:yE,meshbasic_vert:SE,meshbasic_frag:ME,meshlambert_vert:EE,meshlambert_frag:TE,meshmatcap_vert:wE,meshmatcap_frag:AE,meshnormal_vert:RE,meshnormal_frag:CE,meshphong_vert:bE,meshphong_frag:PE,meshphysical_vert:LE,meshphysical_frag:IE,meshtoon_vert:NE,meshtoon_frag:DE,points_vert:UE,points_frag:FE,shadow_vert:OE,shadow_frag:kE,sprite_vert:BE,sprite_frag:zE},De={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},bi={basic:{uniforms:Pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new st(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Pn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Pn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Pn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new st(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Pn([De.points,De.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Pn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Pn([De.common,De.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Pn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Pn([De.sprite,De.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Pn([De.common,De.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Pn([De.lights,De.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};bi.physical={uniforms:Pn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const ic={r:0,b:0,g:0},ls=new Ii,HE=new pt;function VE(o,e,t,i,s,a,c){const u=new st(0);let d=a===!0?0:1,h,m,g=null,_=0,y=null;function M(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?t:e).get(A)),A}function E(b){let A=!1;const N=M(b);N===null?x(u,d):N&&N.isColor&&(x(N,1),A=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(b,A){const N=M(A);N&&(N.isCubeTexture||N.mapping===xc)?(m===void 0&&(m=new Gn(new Ea(1,1,1),new Hr({name:"BackgroundCubeMaterial",uniforms:_o(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,U,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),ls.copy(A.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(HE.makeRotationFromEuler(ls)),m.material.toneMapped=Tt.getTransfer(N.colorSpace)!==kt,(g!==N||_!==N.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,g=N,_=N.version,y=o.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Gn(new Ta(2,2),new Hr({name:"BackgroundMaterial",uniforms:_o(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||_!==N.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,g=N,_=N.version,y=o.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function x(b,A){b.getRGB(ic,R_(o)),i.buffers.color.setClear(ic.r,ic.g,ic.b,A,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(b,A=1){u.set(b),d=A,x(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,x(u,d)},render:E,addToRenderList:S,dispose:L}}function GE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,c=!1;function u(C,z,ae,J,me){let ge=!1;const fe=g(J,ae,z);a!==fe&&(a=fe,h(a.object)),ge=y(C,J,ae,me),ge&&M(C,J,ae,me),me!==null&&e.update(me,o.ELEMENT_ARRAY_BUFFER),(ge||c)&&(c=!1,A(C,z,ae,J),me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function d(){return o.createVertexArray()}function h(C){return o.bindVertexArray(C)}function m(C){return o.deleteVertexArray(C)}function g(C,z,ae){const J=ae.wireframe===!0;let me=i[C.id];me===void 0&&(me={},i[C.id]=me);let ge=me[z.id];ge===void 0&&(ge={},me[z.id]=ge);let fe=ge[J];return fe===void 0&&(fe=_(d()),ge[J]=fe),fe}function _(C){const z=[],ae=[],J=[];for(let me=0;me<t;me++)z[me]=0,ae[me]=0,J[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ae,attributeDivisors:J,object:C,attributes:{},index:null}}function y(C,z,ae,J){const me=a.attributes,ge=z.attributes;let fe=0;const he=ae.getAttributes();for(const k in he)if(he[k].location>=0){const oe=me[k];let O=ge[k];if(O===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),oe===void 0||oe.attribute!==O||O&&oe.data!==O.data)return!0;fe++}return a.attributesNum!==fe||a.index!==J}function M(C,z,ae,J){const me={},ge=z.attributes;let fe=0;const he=ae.getAttributes();for(const k in he)if(he[k].location>=0){let oe=ge[k];oe===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const O={};O.attribute=oe,oe&&oe.data&&(O.data=oe.data),me[k]=O,fe++}a.attributes=me,a.attributesNum=fe,a.index=J}function E(){const C=a.newAttributes;for(let z=0,ae=C.length;z<ae;z++)C[z]=0}function S(C){x(C,0)}function x(C,z){const ae=a.newAttributes,J=a.enabledAttributes,me=a.attributeDivisors;ae[C]=1,J[C]===0&&(o.enableVertexAttribArray(C),J[C]=1),me[C]!==z&&(o.vertexAttribDivisor(C,z),me[C]=z)}function L(){const C=a.newAttributes,z=a.enabledAttributes;for(let ae=0,J=z.length;ae<J;ae++)z[ae]!==C[ae]&&(o.disableVertexAttribArray(ae),z[ae]=0)}function b(C,z,ae,J,me,ge,fe){fe===!0?o.vertexAttribIPointer(C,z,ae,me,ge):o.vertexAttribPointer(C,z,ae,J,me,ge)}function A(C,z,ae,J){E();const me=J.attributes,ge=ae.getAttributes(),fe=z.defaultAttributeValues;for(const he in ge){const k=ge[he];if(k.location>=0){let de=me[he];if(de===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const oe=de.normalized,O=de.itemSize,ie=e.get(de);if(ie===void 0)continue;const ke=ie.buffer,Z=ie.type,pe=ie.bytesPerElement,Te=Z===o.INT||Z===o.UNSIGNED_INT||de.gpuType===Fd;if(de.isInterleavedBufferAttribute){const xe=de.data,Ce=xe.stride,be=de.offset;if(xe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<k.locationSize;Xe++)x(k.location+Xe,xe.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Xe=0;Xe<k.locationSize;Xe++)S(k.location+Xe);o.bindBuffer(o.ARRAY_BUFFER,ke);for(let Xe=0;Xe<k.locationSize;Xe++)b(k.location+Xe,O/k.locationSize,Z,oe,Ce*pe,(be+O/k.locationSize*Xe)*pe,Te)}else{if(de.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)x(k.location+xe,de.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<k.locationSize;xe++)S(k.location+xe);o.bindBuffer(o.ARRAY_BUFFER,ke);for(let xe=0;xe<k.locationSize;xe++)b(k.location+xe,O/k.locationSize,Z,oe,O*pe,O/k.locationSize*xe*pe,Te)}}else if(fe!==void 0){const oe=fe[he];if(oe!==void 0)switch(oe.length){case 2:o.vertexAttrib2fv(k.location,oe);break;case 3:o.vertexAttrib3fv(k.location,oe);break;case 4:o.vertexAttrib4fv(k.location,oe);break;default:o.vertexAttrib1fv(k.location,oe)}}}}L()}function N(){H();for(const C in i){const z=i[C];for(const ae in z){const J=z[ae];for(const me in J)m(J[me].object),delete J[me];delete z[ae]}delete i[C]}}function F(C){if(i[C.id]===void 0)return;const z=i[C.id];for(const ae in z){const J=z[ae];for(const me in J)m(J[me].object),delete J[me];delete z[ae]}delete i[C.id]}function U(C){for(const z in i){const ae=i[z];if(ae[C.id]===void 0)continue;const J=ae[C.id];for(const me in J)m(J[me].object),delete J[me];delete ae[C.id]}}function H(){P(),c=!0,a!==s&&(a=s,h(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:H,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function WE(o,e,t){let i;function s(h){i=h}function a(h,m){o.drawArrays(i,h,m),t.update(m,i,1)}function c(h,m,g){g!==0&&(o.drawArraysInstanced(i,h,m,g),t.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];t.update(y,i,1)}function d(h,m,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)c(h[M],m[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,m,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*_[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function XE(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==oi&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const H=U===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==or&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==xi&&!H)}function d(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),b=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:A,vertexTextures:N,maxSamples:F}}function jE(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new fs,u=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||i!==0||s;return s=_,i=g.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?m(null):h();else{const L=a?0:i,b=L*4;let A=x.clippingState||null;d.value=A,A=m(M,_,b,y);for(let N=0;N!==b;++N)A[N]=t[N];x.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,y,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const x=y+E*4,L=_.matrixWorldInverse;u.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let b=0,A=y;b!==E;++b,A+=4)c.copy(g[b]).applyMatrix4(L,u),c.normal.toArray(S,A),S[A+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function qE(o){let e=new WeakMap;function t(c,u){return u===Qf?c.mapping=uo:u===Jf&&(c.mapping=fo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Qf||u===Jf)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new my(d.height);return h.fromEquirectangularTexture(o,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const ro=4,wg=[.125,.215,.35,.446,.526,.582],ps=20,Nf=new Zd,Ag=new st;let Df=null,Uf=0,Ff=0,Of=!1;const ds=(1+Math.sqrt(5))/2,no=1/ds,Rg=[new Y(-ds,no,0),new Y(ds,no,0),new Y(-no,0,ds),new Y(no,0,ds),new Y(0,ds,-no),new Y(0,ds,no),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Df=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Df,Uf,Ff),this._renderer.xr.enabled=Of,e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===uo||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Df=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Ma,format:oi,colorSpace:Dn,depthBuffer:!1},s=bg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(a)),this._blurMaterial=KE(a,e,t)}return s}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,Nf)}_sceneToCubeUV(e,t,i,s){const u=new Ln(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Ag),m.toneMapping=zr,m.autoClear=!1;const y=new ms({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),M=new Gn(new Ea,y);let E=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,E=!0):(y.color.copy(Ag),E=!0);for(let x=0;x<6;x++){const L=x%3;L===0?(u.up.set(0,d[x],0),u.lookAt(h[x],0,0)):L===1?(u.up.set(0,0,d[x]),u.lookAt(0,h[x],0)):(u.up.set(0,d[x],0),u.lookAt(0,0,h[x]));const b=this._cubeSize;rc(s,L*b,x>2?b:0,b,b),m.setRenderTarget(s),E&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===uo||e.mapping===fo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pg());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Gn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;rc(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Nf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Rg[(s-a-1)%Rg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Gn(this._lodPlanes[s],h),_=h.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ps-1),E=a/M,S=isFinite(a)?1+Math.floor(m*E):ps;S>ps&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ps}`);const x=[];let L=0;for(let U=0;U<ps;++U){const H=U/E,P=Math.exp(-H*H/2);x.push(P),U===0?L+=P:U<S&&(L+=2*P)}for(let U=0;U<x.length;U++)x[U]=x[U]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:b}=this;_.dTheta.value=M,_.mipInt.value=b-i;const A=this._sizeLods[s],N=3*A*(s>b-ro?s-b+ro:0),F=4*(this._cubeSize-A);rc(t,N,F,3*A,2*A),d.setRenderTarget(t),d.render(g,Nf)}}function YE(o){const e=[],t=[],i=[];let s=o;const a=o-ro+1+wg.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let d=1/u;c>o-ro?d=wg[c-o+ro-1]:c===0&&(d=0),i.push(d);const h=1/(u-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,E=3,S=2,x=1,L=new Float32Array(E*M*y),b=new Float32Array(S*M*y),A=new Float32Array(x*M*y);for(let F=0;F<y;F++){const U=F%3*2/3-1,H=F>2?0:-1,P=[U,H,0,U+2/3,H,0,U+2/3,H+1,0,U,H,0,U+2/3,H+1,0,U,H+1,0];L.set(P,E*M*F),b.set(_,S*M*F);const C=[F,F,F,F,F,F];A.set(C,x*M*F)}const N=new Ei;N.setAttribute("position",new Nn(L,E)),N.setAttribute("uv",new Nn(b,S)),N.setAttribute("faceIndex",new Nn(A,x)),e.push(N),s>ro&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bg(o,e,t){const i=new _s(o,e,t);return i.texture.mapping=xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rc(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function KE(o,e,t){const i=new Float32Array(ps),s=new Y(0,1,0);return new Hr({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Pg(){return new Hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Lg(){return new Hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $E(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===Qf||d===Jf,m=d===uo||d===fo;if(h||m){let g=e.get(u);const _=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new Cg(o)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return h&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new Cg(o)),g=h?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let d=0;const h=6;for(let m=0;m<h;m++)u[m]!==void 0&&d++;return d===h}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function ZE(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&io("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function QE(o,e,t,i){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete s[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const y in _)e.update(_[y],o.ARRAY_BUFFER)}function h(g){const _=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let b=0,A=L.length;b<A;b+=3){const N=L[b+0],F=L[b+1],U=L[b+2];_.push(N,F,F,U,U,N)}}else if(M!==void 0){const L=M.array;E=M.version;for(let b=0,A=L.length/3-1;b<A;b+=3){const N=b+0,F=b+1,U=b+2;_.push(N,F,F,U,U,N)}}else return;const S=new(y_(_)?A_:w_)(_,1);S.version=E;const x=a.get(g);x&&e.remove(x),a.set(g,S)}function m(g){const _=a.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&h(g)}else h(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function JE(o,e,t){let i;function s(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function d(_,y){o.drawElements(i,y,a,_*c),t.update(y,i,1)}function h(_,y,M){M!==0&&(o.drawElementsInstanced(i,y,a,_*c,M),t.update(y,i,M))}function m(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,i,1)}function g(_,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)h(_[x]/c,y[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,_,0,E,0,M);let x=0;for(let L=0;L<M;L++)x+=y[L]*E[L];t.update(x,i,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function eT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function tT(o,e,t){const i=new WeakMap,s=new It;function a(c,u,d){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(u);if(_===void 0||_.count!==g){let C=function(){H.dispose(),i.delete(u),u.removeEventListener("dispose",C)};var y=C;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let A=0;M===!0&&(A=1),E===!0&&(A=2),S===!0&&(A=3);let N=u.attributes.position.count*A,F=1;N>e.maxTextureSize&&(F=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const U=new Float32Array(N*F*4*g),H=new M_(U,N,F,g);H.type=xi,H.needsUpdate=!0;const P=A*4;for(let z=0;z<g;z++){const ae=x[z],J=L[z],me=b[z],ge=N*F*4*z;for(let fe=0;fe<ae.count;fe++){const he=fe*P;M===!0&&(s.fromBufferAttribute(ae,fe),U[ge+he+0]=s.x,U[ge+he+1]=s.y,U[ge+he+2]=s.z,U[ge+he+3]=0),E===!0&&(s.fromBufferAttribute(J,fe),U[ge+he+4]=s.x,U[ge+he+5]=s.y,U[ge+he+6]=s.z,U[ge+he+7]=0),S===!0&&(s.fromBufferAttribute(me,fe),U[ge+he+8]=s.x,U[ge+he+9]=s.y,U[ge+he+10]=s.z,U[ge+he+11]=me.itemSize===4?s.w:1)}}_={count:g,texture:H,size:new wt(N,F)},i.set(u,_),u.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function nT(o,e,t,i){let s=new WeakMap;function a(d){const h=i.render.frame,m=d.geometry,g=e.get(d,m);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==h&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return g}function c(){s=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}const z_=new dn,Ig=new D_(1,1),H_=new M_,V_=new Jx,G_=new b_,Ng=[],Dg=[],Ug=new Float32Array(16),Fg=new Float32Array(9),Og=new Float32Array(4);function wo(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=Ng[s];if(a===void 0&&(a=new Float32Array(s),Ng[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function sn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function on(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Ec(o,e){let t=Dg[e];t===void 0&&(t=new Int32Array(e),Dg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function iT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function rT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;o.uniform2fv(this.addr,e),on(t,e)}}function sT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;o.uniform3fv(this.addr,e),on(t,e)}}function oT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;o.uniform4fv(this.addr,e),on(t,e)}}function aT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Og.set(i),o.uniformMatrix2fv(this.addr,!1,Og),on(t,i)}}function lT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Fg.set(i),o.uniformMatrix3fv(this.addr,!1,Fg),on(t,i)}}function cT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Ug.set(i),o.uniformMatrix4fv(this.addr,!1,Ug),on(t,i)}}function uT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function fT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;o.uniform2iv(this.addr,e),on(t,e)}}function dT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;o.uniform3iv(this.addr,e),on(t,e)}}function hT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;o.uniform4iv(this.addr,e),on(t,e)}}function pT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function mT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;o.uniform2uiv(this.addr,e),on(t,e)}}function gT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;o.uniform3uiv(this.addr,e),on(t,e)}}function _T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;o.uniform4uiv(this.addr,e),on(t,e)}}function vT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Ig.compareFunction=x_,a=Ig):a=z_,t.setTexture2D(e||a,s)}function xT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||V_,s)}function yT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||G_,s)}function ST(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||H_,s)}function MT(o){switch(o){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function ET(o,e){o.uniform1fv(this.addr,e)}function TT(o,e){const t=wo(e,this.size,2);o.uniform2fv(this.addr,t)}function wT(o,e){const t=wo(e,this.size,3);o.uniform3fv(this.addr,t)}function AT(o,e){const t=wo(e,this.size,4);o.uniform4fv(this.addr,t)}function RT(o,e){const t=wo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function CT(o,e){const t=wo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function bT(o,e){const t=wo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function PT(o,e){o.uniform1iv(this.addr,e)}function LT(o,e){o.uniform2iv(this.addr,e)}function IT(o,e){o.uniform3iv(this.addr,e)}function NT(o,e){o.uniform4iv(this.addr,e)}function DT(o,e){o.uniform1uiv(this.addr,e)}function UT(o,e){o.uniform2uiv(this.addr,e)}function FT(o,e){o.uniform3uiv(this.addr,e)}function OT(o,e){o.uniform4uiv(this.addr,e)}function kT(o,e,t){const i=this.cache,s=e.length,a=Ec(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||z_,a[c])}function BT(o,e,t){const i=this.cache,s=e.length,a=Ec(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||V_,a[c])}function zT(o,e,t){const i=this.cache,s=e.length,a=Ec(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||G_,a[c])}function HT(o,e,t){const i=this.cache,s=e.length,a=Ec(t,s);sn(i,a)||(o.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||H_,a[c])}function VT(o){switch(o){case 5126:return ET;case 35664:return TT;case 35665:return wT;case 35666:return AT;case 35674:return RT;case 35675:return CT;case 35676:return bT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return IT;case 35669:case 35673:return NT;case 5125:return DT;case 36294:return UT;case 36295:return FT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return zT;case 36289:case 36303:case 36311:case 36292:return HT}}class GT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MT(t.type)}}class WT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VT(t.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const kf=/(\w+)(\])?(\[|\.)?/g;function kg(o,e){o.seq.push(e),o.map[e.id]=e}function jT(o,e,t){const i=o.name,s=i.length;for(kf.lastIndex=0;;){const a=kf.exec(i),c=kf.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===s){kg(t,h===void 0?new GT(u,o,e):new WT(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new XT(u),kg(t,g)),t=g}}}class hc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);jT(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Bg(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const qT=37297;let YT=0;function KT(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const zg=new ht;function $T(o){Tt._getMatrix(zg,Tt.workingColorSpace,o);const e=`mat3( ${zg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(o)){case mc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Hg(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+KT(o.getShaderSource(e),c)}else return s}function ZT(o,e){const t=$T(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function QT(o,e){let t;switch(e){case cx:t="Linear";break;case ux:t="Reinhard";break;case fx:t="Cineon";break;case s_:t="ACESFilmic";break;case hx:t="AgX";break;case px:t="Neutral";break;case dx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sc=new Y;function JT(){Tt.getLuminanceCoefficients(sc);const o=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ew(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function tw(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nw(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function pa(o){return o!==""}function Vg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(o){return o.replace(iw,sw)}const rw=new Map;function sw(o,e){let t=mt[e];if(t===void 0){const i=rw.get(e);if(i!==void 0)t=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ld(t)}const ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(o){return o.replace(ow,aw)}function aw(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Xg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lw(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function cw(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case uo:case fo:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uw(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function fw(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case ax:e="ENVMAP_BLENDING_MIX";break;case lx:e="ENVMAP_BLENDING_ADD";break}return e}function dw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hw(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=lw(t),h=cw(t),m=uw(t),g=fw(t),_=dw(t),y=ew(t),M=tw(a),E=s.createProgram();let S,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(pa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(pa).join(`
`),x.length>0&&(x+=`
`)):(S=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),x=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?mt.tonemapping_pars_fragment:"",t.toneMapping!==zr?QT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,ZT("linearToOutputTexel",t.outputColorSpace),JT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),c=Ld(c),c=Vg(c,t),c=Gg(c,t),u=Ld(u),u=Vg(u,t),u=Gg(u,t),c=Wg(c),u=Wg(u),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const b=L+S+c,A=L+x+u,N=Bg(s,s.VERTEX_SHADER,b),F=Bg(s,s.FRAGMENT_SHADER,A);s.attachShader(E,N),s.attachShader(E,F),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function U(z){if(o.debug.checkShaderErrors){const ae=s.getProgramInfoLog(E).trim(),J=s.getShaderInfoLog(N).trim(),me=s.getShaderInfoLog(F).trim();let ge=!0,fe=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ge=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,N,F);else{const he=Hg(s,N,"vertex"),k=Hg(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ae+`
`+he+`
`+k)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(J===""||me==="")&&(fe=!1);fe&&(z.diagnostics={runnable:ge,programLog:ae,vertexShader:{log:J,prefix:S},fragmentShader:{log:me,prefix:x}})}s.deleteShader(N),s.deleteShader(F),H=new hc(s,E),P=nw(s,E)}let H;this.getUniforms=function(){return H===void 0&&U(this),H};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(E,qT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=N,this.fragmentShader=F,this}let pw=0;class mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gw(e),t.set(e,i)),i}}class gw{constructor(e){this.id=pw++,this.code=e,this.usedTimes=0}}function _w(o,e,t,i,s,a,c){const u=new E_,d=new mw,h=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,C,z,ae,J){const me=ae.fog,ge=J.geometry,fe=P.isMeshStandardMaterial?ae.environment:null,he=(P.isMeshStandardMaterial?t:e).get(P.envMap||fe),k=he&&he.mapping===xc?he.image.height:null,de=M[P.type];P.precision!==null&&(y=s.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const oe=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,O=oe!==void 0?oe.length:0;let ie=0;ge.morphAttributes.position!==void 0&&(ie=1),ge.morphAttributes.normal!==void 0&&(ie=2),ge.morphAttributes.color!==void 0&&(ie=3);let ke,Z,pe,Te;if(de){const At=bi[de];ke=At.vertexShader,Z=At.fragmentShader}else ke=P.vertexShader,Z=P.fragmentShader,d.update(P),pe=d.getVertexShaderID(P),Te=d.getFragmentShaderID(P);const xe=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),be=J.isInstancedMesh===!0,Xe=J.isBatchedMesh===!0,Ct=!!P.map,gt=!!P.matcap,Ft=!!he,V=!!P.aoMap,$e=!!P.lightMap,Be=!!P.bumpMap,Ze=!!P.normalMap,ve=!!P.displacementMap,Pe=!!P.emissiveMap,Le=!!P.metalnessMap,I=!!P.roughnessMap,w=P.anisotropy>0,K=P.clearcoat>0,ue=P.dispersion>0,ee=P.iridescence>0,ce=P.sheen>0,He=P.transmission>0,Re=w&&!!P.anisotropyMap,Me=K&&!!P.clearcoatMap,tt=K&&!!P.clearcoatNormalMap,re=K&&!!P.clearcoatRoughnessMap,Ue=ee&&!!P.iridescenceMap,Je=ee&&!!P.iridescenceThicknessMap,rt=ce&&!!P.sheenColorMap,je=ce&&!!P.sheenRoughnessMap,_t=!!P.specularMap,ct=!!P.specularColorMap,Nt=!!P.specularIntensityMap,X=He&&!!P.transmissionMap,Ie=He&&!!P.thicknessMap,le=!!P.gradientMap,_e=!!P.alphaMap,Oe=P.alphaTest>0,Fe=!!P.alphaHash,ut=!!P.extensions;let zt=zr;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(zt=o.toneMapping);const tn={shaderID:de,shaderType:P.type,shaderName:P.name,vertexShader:ke,fragmentShader:Z,defines:P.defines,customVertexShaderID:pe,customFragmentShaderID:Te,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Xe,batchingColor:Xe&&J._colorsTexture!==null,instancing:be,instancingColor:be&&J.instanceColor!==null,instancingMorph:be&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:xe===null?o.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Dn,alphaToCoverage:!!P.alphaToCoverage,map:Ct,matcap:gt,envMap:Ft,envMapMode:Ft&&he.mapping,envMapCubeUVHeight:k,aoMap:V,lightMap:$e,bumpMap:Be,normalMap:Ze,displacementMap:_&&ve,emissiveMap:Pe,normalMapObjectSpace:Ze&&P.normalMapType===yx,normalMapTangentSpace:Ze&&P.normalMapType===v_,metalnessMap:Le,roughnessMap:I,anisotropy:w,anisotropyMap:Re,clearcoat:K,clearcoatMap:Me,clearcoatNormalMap:tt,clearcoatRoughnessMap:re,dispersion:ue,iridescence:ee,iridescenceMap:Ue,iridescenceThicknessMap:Je,sheen:ce,sheenColorMap:rt,sheenRoughnessMap:je,specularMap:_t,specularColorMap:ct,specularIntensityMap:Nt,transmission:He,transmissionMap:X,thicknessMap:Ie,gradientMap:le,opaque:P.transparent===!1&&P.blending===so&&P.alphaToCoverage===!1,alphaMap:_e,alphaTest:Oe,alphaHash:Fe,combine:P.combine,mapUv:Ct&&E(P.map.channel),aoMapUv:V&&E(P.aoMap.channel),lightMapUv:$e&&E(P.lightMap.channel),bumpMapUv:Be&&E(P.bumpMap.channel),normalMapUv:Ze&&E(P.normalMap.channel),displacementMapUv:ve&&E(P.displacementMap.channel),emissiveMapUv:Pe&&E(P.emissiveMap.channel),metalnessMapUv:Le&&E(P.metalnessMap.channel),roughnessMapUv:I&&E(P.roughnessMap.channel),anisotropyMapUv:Re&&E(P.anisotropyMap.channel),clearcoatMapUv:Me&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:tt&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:je&&E(P.sheenRoughnessMap.channel),specularMapUv:_t&&E(P.specularMap.channel),specularColorMapUv:ct&&E(P.specularColorMap.channel),specularIntensityMapUv:Nt&&E(P.specularIntensityMap.channel),transmissionMapUv:X&&E(P.transmissionMap.channel),thicknessMapUv:Ie&&E(P.thicknessMap.channel),alphaMapUv:_e&&E(P.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(Ze||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ge.attributes.uv&&(Ct||_e),fog:!!me,useFog:P.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:J.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ct&&P.map.isVideoTexture===!0&&Tt.getTransfer(P.map.colorSpace)===kt,decodeVideoTextureEmissive:Pe&&P.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(P.emissiveMap.colorSpace)===kt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Pi,flipSided:P.side===Wn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ut&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&P.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return tn.vertexUv1s=h.has(1),tn.vertexUv2s=h.has(2),tn.vertexUv3s=h.has(3),h.clear(),tn}function x(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(L(C,P),b(C,P),C.push(o.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function L(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function b(P,C){u.disableAll(),C.supportsVertexTextures&&u.enable(0),C.instancing&&u.enable(1),C.instancingColor&&u.enable(2),C.instancingMorph&&u.enable(3),C.matcap&&u.enable(4),C.envMap&&u.enable(5),C.normalMapObjectSpace&&u.enable(6),C.normalMapTangentSpace&&u.enable(7),C.clearcoat&&u.enable(8),C.iridescence&&u.enable(9),C.alphaTest&&u.enable(10),C.vertexColors&&u.enable(11),C.vertexAlphas&&u.enable(12),C.vertexUv1s&&u.enable(13),C.vertexUv2s&&u.enable(14),C.vertexUv3s&&u.enable(15),C.vertexTangents&&u.enable(16),C.anisotropy&&u.enable(17),C.alphaHash&&u.enable(18),C.batching&&u.enable(19),C.dispersion&&u.enable(20),C.batchingColor&&u.enable(21),P.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reverseDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),P.push(u.mask)}function A(P){const C=M[P.type];let z;if(C){const ae=bi[C];z=fy.clone(ae.uniforms)}else z=P.uniforms;return z}function N(P,C){let z;for(let ae=0,J=m.length;ae<J;ae++){const me=m[ae];if(me.cacheKey===C){z=me,++z.usedTimes;break}}return z===void 0&&(z=new hw(o,C,P,a),m.push(z)),z}function F(P){if(--P.usedTimes===0){const C=m.indexOf(P);m[C]=m[m.length-1],m.pop(),P.destroy()}}function U(P){d.remove(P)}function H(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:N,releaseProgram:F,releaseShaderCache:U,programs:m,dispose:H}}function vw(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,d){o.get(c)[u]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function xw(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function jg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function qg(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,_,y,M,E,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=E,x.group=S),e++,x}function u(g,_,y,M,E,S){const x=c(g,_,y,M,E,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function d(g,_,y,M,E,S){const x=c(g,_,y,M,E,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(g,_){t.length>1&&t.sort(g||xw),i.length>1&&i.sort(_||jg),s.length>1&&s.sort(_||jg)}function m(){for(let g=e,_=o.length;g<_;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:d,finish:m,sort:h}}function yw(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new qg,o.set(i,[c])):s>=a.length?(c=new qg,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function Sw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new st};break;case"SpotLight":t={position:new Y,direction:new Y,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=t,t}}}function Mw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Ew=0;function Tw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ww(o){const e=new Sw,t=Mw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const s=new Y,a=new pt,c=new pt;function u(h){let m=0,g=0,_=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let y=0,M=0,E=0,S=0,x=0,L=0,b=0,A=0,N=0,F=0,U=0;h.sort(Tw);for(let P=0,C=h.length;P<C;P++){const z=h[P],ae=z.color,J=z.intensity,me=z.distance,ge=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=ae.r*J,g+=ae.g*J,_+=ae.b*J;else if(z.isLightProbe){for(let fe=0;fe<9;fe++)i.probe[fe].addScaledVector(z.sh.coefficients[fe],J);U++}else if(z.isDirectionalLight){const fe=e.get(z);if(fe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const he=z.shadow,k=t.get(z);k.shadowIntensity=he.intensity,k.shadowBias=he.bias,k.shadowNormalBias=he.normalBias,k.shadowRadius=he.radius,k.shadowMapSize=he.mapSize,i.directionalShadow[y]=k,i.directionalShadowMap[y]=ge,i.directionalShadowMatrix[y]=z.shadow.matrix,L++}i.directional[y]=fe,y++}else if(z.isSpotLight){const fe=e.get(z);fe.position.setFromMatrixPosition(z.matrixWorld),fe.color.copy(ae).multiplyScalar(J),fe.distance=me,fe.coneCos=Math.cos(z.angle),fe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),fe.decay=z.decay,i.spot[E]=fe;const he=z.shadow;if(z.map&&(i.spotLightMap[N]=z.map,N++,he.updateMatrices(z),z.castShadow&&F++),i.spotLightMatrix[E]=he.matrix,z.castShadow){const k=t.get(z);k.shadowIntensity=he.intensity,k.shadowBias=he.bias,k.shadowNormalBias=he.normalBias,k.shadowRadius=he.radius,k.shadowMapSize=he.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=ge,A++}E++}else if(z.isRectAreaLight){const fe=e.get(z);fe.color.copy(ae).multiplyScalar(J),fe.halfWidth.set(z.width*.5,0,0),fe.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=fe,S++}else if(z.isPointLight){const fe=e.get(z);if(fe.color.copy(z.color).multiplyScalar(z.intensity),fe.distance=z.distance,fe.decay=z.decay,z.castShadow){const he=z.shadow,k=t.get(z);k.shadowIntensity=he.intensity,k.shadowBias=he.bias,k.shadowNormalBias=he.normalBias,k.shadowRadius=he.radius,k.shadowMapSize=he.mapSize,k.shadowCameraNear=he.camera.near,k.shadowCameraFar=he.camera.far,i.pointShadow[M]=k,i.pointShadowMap[M]=ge,i.pointShadowMatrix[M]=z.shadow.matrix,b++}i.point[M]=fe,M++}else if(z.isHemisphereLight){const fe=e.get(z);fe.skyColor.copy(z.color).multiplyScalar(J),fe.groundColor.copy(z.groundColor).multiplyScalar(J),i.hemi[x]=fe,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const H=i.hash;(H.directionalLength!==y||H.pointLength!==M||H.spotLength!==E||H.rectAreaLength!==S||H.hemiLength!==x||H.numDirectionalShadows!==L||H.numPointShadows!==b||H.numSpotShadows!==A||H.numSpotMaps!==N||H.numLightProbes!==U)&&(i.directional.length=y,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=A+N-F,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=U,H.directionalLength=y,H.pointLength=M,H.spotLength=E,H.rectAreaLength=S,H.hemiLength=x,H.numDirectionalShadows=L,H.numPointShadows=b,H.numSpotShadows=A,H.numSpotMaps=N,H.numLightProbes=U,i.version=Ew++)}function d(h,m){let g=0,_=0,y=0,M=0,E=0;const S=m.matrixWorldInverse;for(let x=0,L=h.length;x<L;x++){const b=h[x];if(b.isDirectionalLight){const A=i.directional[g];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),g++}else if(b.isSpotLight){const A=i.spot[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),y++}else if(b.isRectAreaLight){const A=i.rectArea[M];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(S),c.identity(),a.copy(b.matrixWorld),a.premultiply(S),c.extractRotation(a),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(b.isPointLight){const A=i.point[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(S),_++}else if(b.isHemisphereLight){const A=i.hemi[E];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(S),E++}}}return{setup:u,setupView:d,state:i}}function Yg(o){const e=new ww(o),t=[],i=[];function s(m){h.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function u(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function Aw(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new Yg(o),e.set(s,[u])):a>=c.length?(u=new Yg(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const Rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bw(o,e,t){let i=new qd;const s=new wt,a=new wt,c=new It,u=new Ry({depthPacking:xx}),d=new Cy,h={},m=t.maxTextureSize,g={[sr]:Wn,[Wn]:sr,[Pi]:Pi},_=new Hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Rw,fragmentShader:Cw}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Ei;M.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Gn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let x=this.type;this.render=function(F,U,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const P=o.getRenderTarget(),C=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),ae=o.state;ae.setBlending(Br),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const J=x!==Ji&&this.type===Ji,me=x===Ji&&this.type!==Ji;for(let ge=0,fe=F.length;ge<fe;ge++){const he=F[ge],k=he.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const de=k.getFrameExtents();if(s.multiply(de),a.copy(k.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/de.x),s.x=a.x*de.x,k.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/de.y),s.y=a.y*de.y,k.mapSize.y=a.y)),k.map===null||J===!0||me===!0){const O=this.type!==Ji?{minFilter:In,magFilter:In}:{};k.map!==null&&k.map.dispose(),k.map=new _s(s.x,s.y,O),k.map.texture.name=he.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const oe=k.getViewportCount();for(let O=0;O<oe;O++){const ie=k.getViewport(O);c.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),ae.viewport(c),k.updateMatrices(he,O),i=k.getFrustum(),A(U,H,k.camera,he,this.type)}k.isPointLightShadow!==!0&&this.type===Ji&&L(k,H),k.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(P,C,z)};function L(F,U){const H=e.update(E);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new _s(s.x,s.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(U,null,H,_,E,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(U,null,H,y,E,null)}function b(F,U,H,P){let C=null;const z=H.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(z!==void 0)C=z;else if(C=H.isPointLight===!0?d:u,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ae=C.uuid,J=U.uuid;let me=h[ae];me===void 0&&(me={},h[ae]=me);let ge=me[J];ge===void 0&&(ge=C.clone(),me[J]=ge,U.addEventListener("dispose",N)),C=ge}if(C.visible=U.visible,C.wireframe=U.wireframe,P===Ji?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:g[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=o.properties.get(C);ae.light=H}return C}function A(F,U,H,P,C){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===Ji)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,F.matrixWorld);const J=e.update(F),me=F.material;if(Array.isArray(me)){const ge=J.groups;for(let fe=0,he=ge.length;fe<he;fe++){const k=ge[fe],de=me[k.materialIndex];if(de&&de.visible){const oe=b(F,de,P,C);F.onBeforeShadow(o,F,U,H,J,oe,k),o.renderBufferDirect(H,null,J,oe,F,k),F.onAfterShadow(o,F,U,H,J,oe,k)}}}else if(me.visible){const ge=b(F,me,P,C);F.onBeforeShadow(o,F,U,H,J,ge,null),o.renderBufferDirect(H,null,J,ge,F,null),F.onAfterShadow(o,F,U,H,J,ge,null)}}const ae=F.children;for(let J=0,me=ae.length;J<me;J++)A(ae[J],U,H,P,C)}function N(F){F.target.removeEventListener("dispose",N);for(const H in h){const P=h[H],C=F.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const Pw={[Xf]:jf,[qf]:$f,[Yf]:Zf,[co]:Kf,[jf]:Xf,[$f]:qf,[Zf]:Yf,[Kf]:co};function Lw(o,e){function t(){let X=!1;const Ie=new It;let le=null;const _e=new It(0,0,0,0);return{setMask:function(Oe){le!==Oe&&!X&&(o.colorMask(Oe,Oe,Oe,Oe),le=Oe)},setLocked:function(Oe){X=Oe},setClear:function(Oe,Fe,ut,zt,tn){tn===!0&&(Oe*=zt,Fe*=zt,ut*=zt),Ie.set(Oe,Fe,ut,zt),_e.equals(Ie)===!1&&(o.clearColor(Oe,Fe,ut,zt),_e.copy(Ie))},reset:function(){X=!1,le=null,_e.set(-1,0,0,0)}}}function i(){let X=!1,Ie=!1,le=null,_e=null,Oe=null;return{setReversed:function(Fe){if(Ie!==Fe){const ut=e.get("EXT_clip_control");Ie?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const zt=Oe;Oe=null,this.setClear(zt)}Ie=Fe},getReversed:function(){return Ie},setTest:function(Fe){Fe?xe(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(Fe){le!==Fe&&!X&&(o.depthMask(Fe),le=Fe)},setFunc:function(Fe){if(Ie&&(Fe=Pw[Fe]),_e!==Fe){switch(Fe){case Xf:o.depthFunc(o.NEVER);break;case jf:o.depthFunc(o.ALWAYS);break;case qf:o.depthFunc(o.LESS);break;case co:o.depthFunc(o.LEQUAL);break;case Yf:o.depthFunc(o.EQUAL);break;case Kf:o.depthFunc(o.GEQUAL);break;case $f:o.depthFunc(o.GREATER);break;case Zf:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_e=Fe}},setLocked:function(Fe){X=Fe},setClear:function(Fe){Oe!==Fe&&(Ie&&(Fe=1-Fe),o.clearDepth(Fe),Oe=Fe)},reset:function(){X=!1,le=null,_e=null,Oe=null,Ie=!1}}}function s(){let X=!1,Ie=null,le=null,_e=null,Oe=null,Fe=null,ut=null,zt=null,tn=null;return{setTest:function(At){X||(At?xe(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(At){Ie!==At&&!X&&(o.stencilMask(At),Ie=At)},setFunc:function(At,Fn,Tn){(le!==At||_e!==Fn||Oe!==Tn)&&(o.stencilFunc(At,Fn,Tn),le=At,_e=Fn,Oe=Tn)},setOp:function(At,Fn,Tn){(Fe!==At||ut!==Fn||zt!==Tn)&&(o.stencilOp(At,Fn,Tn),Fe=At,ut=Fn,zt=Tn)},setLocked:function(At){X=At},setClear:function(At){tn!==At&&(o.clearStencil(At),tn=At)},reset:function(){X=!1,Ie=null,le=null,_e=null,Oe=null,Fe=null,ut=null,zt=null,tn=null}}}const a=new t,c=new i,u=new s,d=new WeakMap,h=new WeakMap;let m={},g={},_=new WeakMap,y=[],M=null,E=!1,S=null,x=null,L=null,b=null,A=null,N=null,F=null,U=new st(0,0,0),H=0,P=!1,C=null,z=null,ae=null,J=null,me=null;const ge=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,he=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(k)[1]),fe=he>=1):k.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),fe=he>=2);let de=null,oe={};const O=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),ke=new It().fromArray(O),Z=new It().fromArray(ie);function pe(X,Ie,le,_e){const Oe=new Uint8Array(4),Fe=o.createTexture();o.bindTexture(X,Fe),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ut=0;ut<le;ut++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ie,0,o.RGBA,1,1,_e,0,o.RGBA,o.UNSIGNED_BYTE,Oe):o.texImage2D(Ie+ut,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Oe);return Fe}const Te={};Te[o.TEXTURE_2D]=pe(o.TEXTURE_2D,o.TEXTURE_2D,1),Te[o.TEXTURE_CUBE_MAP]=pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[o.TEXTURE_2D_ARRAY]=pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Te[o.TEXTURE_3D]=pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),xe(o.DEPTH_TEST),c.setFunc(co),Be(!1),Ze(Im),xe(o.CULL_FACE),V(Br);function xe(X){m[X]!==!0&&(o.enable(X),m[X]=!0)}function Ce(X){m[X]!==!1&&(o.disable(X),m[X]=!1)}function be(X,Ie){return g[X]!==Ie?(o.bindFramebuffer(X,Ie),g[X]=Ie,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ie),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Xe(X,Ie){let le=y,_e=!1;if(X){le=_.get(Ie),le===void 0&&(le=[],_.set(Ie,le));const Oe=X.textures;if(le.length!==Oe.length||le[0]!==o.COLOR_ATTACHMENT0){for(let Fe=0,ut=Oe.length;Fe<ut;Fe++)le[Fe]=o.COLOR_ATTACHMENT0+Fe;le.length=Oe.length,_e=!0}}else le[0]!==o.BACK&&(le[0]=o.BACK,_e=!0);_e&&o.drawBuffers(le)}function Ct(X){return M!==X?(o.useProgram(X),M=X,!0):!1}const gt={[hs]:o.FUNC_ADD,[W0]:o.FUNC_SUBTRACT,[X0]:o.FUNC_REVERSE_SUBTRACT};gt[j0]=o.MIN,gt[q0]=o.MAX;const Ft={[Y0]:o.ZERO,[K0]:o.ONE,[$0]:o.SRC_COLOR,[Gf]:o.SRC_ALPHA,[nx]:o.SRC_ALPHA_SATURATE,[ex]:o.DST_COLOR,[Q0]:o.DST_ALPHA,[Z0]:o.ONE_MINUS_SRC_COLOR,[Wf]:o.ONE_MINUS_SRC_ALPHA,[tx]:o.ONE_MINUS_DST_COLOR,[J0]:o.ONE_MINUS_DST_ALPHA,[ix]:o.CONSTANT_COLOR,[rx]:o.ONE_MINUS_CONSTANT_COLOR,[sx]:o.CONSTANT_ALPHA,[ox]:o.ONE_MINUS_CONSTANT_ALPHA};function V(X,Ie,le,_e,Oe,Fe,ut,zt,tn,At){if(X===Br){E===!0&&(Ce(o.BLEND),E=!1);return}if(E===!1&&(xe(o.BLEND),E=!0),X!==G0){if(X!==S||At!==P){if((x!==hs||A!==hs)&&(o.blendEquation(o.FUNC_ADD),x=hs,A=hs),At)switch(X){case so:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nm:o.blendFunc(o.ONE,o.ONE);break;case Dm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Um:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case so:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Nm:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Dm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Um:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,b=null,N=null,F=null,U.set(0,0,0),H=0,S=X,P=At}return}Oe=Oe||Ie,Fe=Fe||le,ut=ut||_e,(Ie!==x||Oe!==A)&&(o.blendEquationSeparate(gt[Ie],gt[Oe]),x=Ie,A=Oe),(le!==L||_e!==b||Fe!==N||ut!==F)&&(o.blendFuncSeparate(Ft[le],Ft[_e],Ft[Fe],Ft[ut]),L=le,b=_e,N=Fe,F=ut),(zt.equals(U)===!1||tn!==H)&&(o.blendColor(zt.r,zt.g,zt.b,tn),U.copy(zt),H=tn),S=X,P=!1}function $e(X,Ie){X.side===Pi?Ce(o.CULL_FACE):xe(o.CULL_FACE);let le=X.side===Wn;Ie&&(le=!le),Be(le),X.blending===so&&X.transparent===!1?V(Br):V(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),a.setMask(X.colorWrite);const _e=X.stencilWrite;u.setTest(_e),_e&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Pe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function Be(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function Ze(X){X!==H0?(xe(o.CULL_FACE),X!==z&&(X===Im?o.cullFace(o.BACK):X===V0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),z=X}function ve(X){X!==ae&&(fe&&o.lineWidth(X),ae=X)}function Pe(X,Ie,le){X?(xe(o.POLYGON_OFFSET_FILL),(J!==Ie||me!==le)&&(o.polygonOffset(Ie,le),J=Ie,me=le)):Ce(o.POLYGON_OFFSET_FILL)}function Le(X){X?xe(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function I(X){X===void 0&&(X=o.TEXTURE0+ge-1),de!==X&&(o.activeTexture(X),de=X)}function w(X,Ie,le){le===void 0&&(de===null?le=o.TEXTURE0+ge-1:le=de);let _e=oe[le];_e===void 0&&(_e={type:void 0,texture:void 0},oe[le]=_e),(_e.type!==X||_e.texture!==Ie)&&(de!==le&&(o.activeTexture(le),de=le),o.bindTexture(X,Ie||Te[X]),_e.type=X,_e.texture=Ie)}function K(){const X=oe[de];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ue(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function re(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function rt(X){ke.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),ke.copy(X))}function je(X){Z.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Z.copy(X))}function _t(X,Ie){let le=h.get(Ie);le===void 0&&(le=new WeakMap,h.set(Ie,le));let _e=le.get(X);_e===void 0&&(_e=o.getUniformBlockIndex(Ie,X.name),le.set(X,_e))}function ct(X,Ie){const _e=h.get(Ie).get(X);d.get(Ie)!==_e&&(o.uniformBlockBinding(Ie,_e,X.__bindingPointIndex),d.set(Ie,_e))}function Nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},de=null,oe={},g={},_=new WeakMap,y=[],M=null,E=!1,S=null,x=null,L=null,b=null,A=null,N=null,F=null,U=new st(0,0,0),H=0,P=!1,C=null,z=null,ae=null,J=null,me=null,ke.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:xe,disable:Ce,bindFramebuffer:be,drawBuffers:Xe,useProgram:Ct,setBlending:V,setMaterial:$e,setFlipSided:Be,setCullFace:Ze,setLineWidth:ve,setPolygonOffset:Pe,setScissorTest:Le,activeTexture:I,bindTexture:w,unbindTexture:K,compressedTexImage2D:ue,compressedTexImage3D:ee,texImage2D:Ue,texImage3D:Je,updateUBOMapping:_t,uniformBlockBinding:ct,texStorage2D:tt,texStorage3D:re,texSubImage2D:ce,texSubImage3D:He,compressedTexSubImage2D:Re,compressedTexSubImage3D:Me,scissor:rt,viewport:je,reset:Nt}}function Iw(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,m=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,w){return y?new OffscreenCanvas(I,w):Sa("canvas")}function E(I,w,K){let ue=1;const ee=Le(I);if((ee.width>K||ee.height>K)&&(ue=K/Math.max(ee.width,ee.height)),ue<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ce=Math.floor(ue*ee.width),He=Math.floor(ue*ee.height);g===void 0&&(g=M(ce,He));const Re=w?M(ce,He):g;return Re.width=ce,Re.height=He,Re.getContext("2d").drawImage(I,0,0,ce,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ce+"x"+He+")."),Re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function S(I){return I.generateMipmaps}function x(I){o.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function b(I,w,K,ue,ee=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=w;if(w===o.RED&&(K===o.FLOAT&&(ce=o.R32F),K===o.HALF_FLOAT&&(ce=o.R16F),K===o.UNSIGNED_BYTE&&(ce=o.R8)),w===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.R8UI),K===o.UNSIGNED_SHORT&&(ce=o.R16UI),K===o.UNSIGNED_INT&&(ce=o.R32UI),K===o.BYTE&&(ce=o.R8I),K===o.SHORT&&(ce=o.R16I),K===o.INT&&(ce=o.R32I)),w===o.RG&&(K===o.FLOAT&&(ce=o.RG32F),K===o.HALF_FLOAT&&(ce=o.RG16F),K===o.UNSIGNED_BYTE&&(ce=o.RG8)),w===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RG8UI),K===o.UNSIGNED_SHORT&&(ce=o.RG16UI),K===o.UNSIGNED_INT&&(ce=o.RG32UI),K===o.BYTE&&(ce=o.RG8I),K===o.SHORT&&(ce=o.RG16I),K===o.INT&&(ce=o.RG32I)),w===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),K===o.UNSIGNED_INT&&(ce=o.RGB32UI),K===o.BYTE&&(ce=o.RGB8I),K===o.SHORT&&(ce=o.RGB16I),K===o.INT&&(ce=o.RGB32I)),w===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),K===o.UNSIGNED_INT&&(ce=o.RGBA32UI),K===o.BYTE&&(ce=o.RGBA8I),K===o.SHORT&&(ce=o.RGBA16I),K===o.INT&&(ce=o.RGBA32I)),w===o.RGB&&K===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),w===o.RGBA){const He=ee?mc:Tt.getTransfer(ue);K===o.FLOAT&&(ce=o.RGBA32F),K===o.HALF_FLOAT&&(ce=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ce=He===kt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function A(I,w){let K;return I?w===null||w===gs||w===po?K=o.DEPTH24_STENCIL8:w===xi?K=o.DEPTH32F_STENCIL8:w===va&&(K=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===gs||w===po?K=o.DEPTH_COMPONENT24:w===xi?K=o.DEPTH_COMPONENT32F:w===va&&(K=o.DEPTH_COMPONENT16),K}function N(I,w){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==In&&I.minFilter!==Zn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function F(I){const w=I.target;w.removeEventListener("dispose",F),H(w),w.isVideoTexture&&m.delete(w)}function U(I){const w=I.target;w.removeEventListener("dispose",U),C(w)}function H(I){const w=i.get(I);if(w.__webglInit===void 0)return;const K=I.source,ue=_.get(K);if(ue){const ee=ue[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(I),Object.keys(ue).length===0&&_.delete(K)}i.remove(I)}function P(I){const w=i.get(I);o.deleteTexture(w.__webglTexture);const K=I.source,ue=_.get(K);delete ue[w.__cacheKey],c.memory.textures--}function C(I){const w=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(w.__webglFramebuffer[ue]))for(let ee=0;ee<w.__webglFramebuffer[ue].length;ee++)o.deleteFramebuffer(w.__webglFramebuffer[ue][ee]);else o.deleteFramebuffer(w.__webglFramebuffer[ue]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[ue])}else{if(Array.isArray(w.__webglFramebuffer))for(let ue=0;ue<w.__webglFramebuffer.length;ue++)o.deleteFramebuffer(w.__webglFramebuffer[ue]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ue=0;ue<w.__webglColorRenderbuffer.length;ue++)w.__webglColorRenderbuffer[ue]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[ue]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=I.textures;for(let ue=0,ee=K.length;ue<ee;ue++){const ce=i.get(K[ue]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),c.memory.textures--),i.remove(K[ue])}i.remove(I)}let z=0;function ae(){z=0}function J(){const I=z;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),z+=1,I}function me(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function ge(I,w){const K=i.get(I);if(I.isVideoTexture&&ve(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const ue=I.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,I,w);return}}t.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+w)}function fe(I,w){const K=i.get(I);if(I.version>0&&K.__version!==I.version){Z(K,I,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+w)}function he(I,w){const K=i.get(I);if(I.version>0&&K.__version!==I.version){Z(K,I,w);return}t.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+w)}function k(I,w){const K=i.get(I);if(I.version>0&&K.__version!==I.version){pe(K,I,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+w)}const de={[ho]:o.REPEAT,[Or]:o.CLAMP_TO_EDGE,[pc]:o.MIRRORED_REPEAT},oe={[In]:o.NEAREST,[a_]:o.NEAREST_MIPMAP_NEAREST,[ha]:o.NEAREST_MIPMAP_LINEAR,[Zn]:o.LINEAR,[ac]:o.LINEAR_MIPMAP_NEAREST,[tr]:o.LINEAR_MIPMAP_LINEAR},O={[Sx]:o.NEVER,[Rx]:o.ALWAYS,[Mx]:o.LESS,[x_]:o.LEQUAL,[Ex]:o.EQUAL,[Ax]:o.GEQUAL,[Tx]:o.GREATER,[wx]:o.NOTEQUAL};function ie(I,w){if(w.type===xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Zn||w.magFilter===ac||w.magFilter===ha||w.magFilter===tr||w.minFilter===Zn||w.minFilter===ac||w.minFilter===ha||w.minFilter===tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,de[w.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,de[w.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,de[w.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,oe[w.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===In||w.minFilter!==ha&&w.minFilter!==tr||w.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ke(I,w){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",F));const ue=w.source;let ee=_.get(ue);ee===void 0&&(ee={},_.set(ue,ee));const ce=me(w);if(ce!==I.__cacheKey){ee[ce]===void 0&&(ee[ce]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,K=!0),ee[ce].usedTimes++;const He=ee[I.__cacheKey];He!==void 0&&(ee[I.__cacheKey].usedTimes--,He.usedTimes===0&&P(w)),I.__cacheKey=ce,I.__webglTexture=ee[ce].texture}return K}function Z(I,w,K){let ue=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=o.TEXTURE_3D);const ee=ke(I,w),ce=w.source;t.bindTexture(ue,I.__webglTexture,o.TEXTURE0+K);const He=i.get(ce);if(ce.version!==He.__version||ee===!0){t.activeTexture(o.TEXTURE0+K);const Re=Tt.getPrimaries(Tt.workingColorSpace),Me=w.colorSpace===Ur?null:Tt.getPrimaries(w.colorSpace),tt=w.colorSpace===Ur||Re===Me?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let re=E(w.image,!1,s.maxTextureSize);re=Pe(w,re);const Ue=a.convert(w.format,w.colorSpace),Je=a.convert(w.type);let rt=b(w.internalFormat,Ue,Je,w.colorSpace,w.isVideoTexture);ie(ue,w);let je;const _t=w.mipmaps,ct=w.isVideoTexture!==!0,Nt=He.__version===void 0||ee===!0,X=ce.dataReady,Ie=N(w,re);if(w.isDepthTexture)rt=A(w.format===mo,w.type),Nt&&(ct?t.texStorage2D(o.TEXTURE_2D,1,rt,re.width,re.height):t.texImage2D(o.TEXTURE_2D,0,rt,re.width,re.height,0,Ue,Je,null));else if(w.isDataTexture)if(_t.length>0){ct&&Nt&&t.texStorage2D(o.TEXTURE_2D,Ie,rt,_t[0].width,_t[0].height);for(let le=0,_e=_t.length;le<_e;le++)je=_t[le],ct?X&&t.texSubImage2D(o.TEXTURE_2D,le,0,0,je.width,je.height,Ue,Je,je.data):t.texImage2D(o.TEXTURE_2D,le,rt,je.width,je.height,0,Ue,Je,je.data);w.generateMipmaps=!1}else ct?(Nt&&t.texStorage2D(o.TEXTURE_2D,Ie,rt,re.width,re.height),X&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,re.width,re.height,Ue,Je,re.data)):t.texImage2D(o.TEXTURE_2D,0,rt,re.width,re.height,0,Ue,Je,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ct&&Nt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,rt,_t[0].width,_t[0].height,re.depth);for(let le=0,_e=_t.length;le<_e;le++)if(je=_t[le],w.format!==oi)if(Ue!==null)if(ct){if(X)if(w.layerUpdates.size>0){const Oe=Tg(je.width,je.height,w.format,w.type);for(const Fe of w.layerUpdates){const ut=je.data.subarray(Fe*Oe/je.data.BYTES_PER_ELEMENT,(Fe+1)*Oe/je.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,Fe,je.width,je.height,1,Ue,ut)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,0,je.width,je.height,re.depth,Ue,je.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,le,rt,je.width,je.height,re.depth,0,je.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?X&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,le,0,0,0,je.width,je.height,re.depth,Ue,Je,je.data):t.texImage3D(o.TEXTURE_2D_ARRAY,le,rt,je.width,je.height,re.depth,0,Ue,Je,je.data)}else{ct&&Nt&&t.texStorage2D(o.TEXTURE_2D,Ie,rt,_t[0].width,_t[0].height);for(let le=0,_e=_t.length;le<_e;le++)je=_t[le],w.format!==oi?Ue!==null?ct?X&&t.compressedTexSubImage2D(o.TEXTURE_2D,le,0,0,je.width,je.height,Ue,je.data):t.compressedTexImage2D(o.TEXTURE_2D,le,rt,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?X&&t.texSubImage2D(o.TEXTURE_2D,le,0,0,je.width,je.height,Ue,Je,je.data):t.texImage2D(o.TEXTURE_2D,le,rt,je.width,je.height,0,Ue,Je,je.data)}else if(w.isDataArrayTexture)if(ct){if(Nt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,rt,re.width,re.height,re.depth),X)if(w.layerUpdates.size>0){const le=Tg(re.width,re.height,w.format,w.type);for(const _e of w.layerUpdates){const Oe=re.data.subarray(_e*le/re.data.BYTES_PER_ELEMENT,(_e+1)*le/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_e,re.width,re.height,1,Ue,Je,Oe)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ue,Je,re.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,rt,re.width,re.height,re.depth,0,Ue,Je,re.data);else if(w.isData3DTexture)ct?(Nt&&t.texStorage3D(o.TEXTURE_3D,Ie,rt,re.width,re.height,re.depth),X&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ue,Je,re.data)):t.texImage3D(o.TEXTURE_3D,0,rt,re.width,re.height,re.depth,0,Ue,Je,re.data);else if(w.isFramebufferTexture){if(Nt)if(ct)t.texStorage2D(o.TEXTURE_2D,Ie,rt,re.width,re.height);else{let le=re.width,_e=re.height;for(let Oe=0;Oe<Ie;Oe++)t.texImage2D(o.TEXTURE_2D,Oe,rt,le,_e,0,Ue,Je,null),le>>=1,_e>>=1}}else if(_t.length>0){if(ct&&Nt){const le=Le(_t[0]);t.texStorage2D(o.TEXTURE_2D,Ie,rt,le.width,le.height)}for(let le=0,_e=_t.length;le<_e;le++)je=_t[le],ct?X&&t.texSubImage2D(o.TEXTURE_2D,le,0,0,Ue,Je,je):t.texImage2D(o.TEXTURE_2D,le,rt,Ue,Je,je);w.generateMipmaps=!1}else if(ct){if(Nt){const le=Le(re);t.texStorage2D(o.TEXTURE_2D,Ie,rt,le.width,le.height)}X&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ue,Je,re)}else t.texImage2D(o.TEXTURE_2D,0,rt,Ue,Je,re);S(w)&&x(ue),He.__version=ce.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function pe(I,w,K){if(w.image.length!==6)return;const ue=ke(I,w),ee=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+K);const ce=i.get(ee);if(ee.version!==ce.__version||ue===!0){t.activeTexture(o.TEXTURE0+K);const He=Tt.getPrimaries(Tt.workingColorSpace),Re=w.colorSpace===Ur?null:Tt.getPrimaries(w.colorSpace),Me=w.colorSpace===Ur||He===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const tt=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,Ue=[];for(let _e=0;_e<6;_e++)!tt&&!re?Ue[_e]=E(w.image[_e],!0,s.maxCubemapSize):Ue[_e]=re?w.image[_e].image:w.image[_e],Ue[_e]=Pe(w,Ue[_e]);const Je=Ue[0],rt=a.convert(w.format,w.colorSpace),je=a.convert(w.type),_t=b(w.internalFormat,rt,je,w.colorSpace),ct=w.isVideoTexture!==!0,Nt=ce.__version===void 0||ue===!0,X=ee.dataReady;let Ie=N(w,Je);ie(o.TEXTURE_CUBE_MAP,w);let le;if(tt){ct&&Nt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,_t,Je.width,Je.height);for(let _e=0;_e<6;_e++){le=Ue[_e].mipmaps;for(let Oe=0;Oe<le.length;Oe++){const Fe=le[Oe];w.format!==oi?rt!==null?ct?X&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,Fe.width,Fe.height,rt,Fe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,_t,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,0,0,Fe.width,Fe.height,rt,je,Fe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe,_t,Fe.width,Fe.height,0,rt,je,Fe.data)}}}else{if(le=w.mipmaps,ct&&Nt){le.length>0&&Ie++;const _e=Le(Ue[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,_t,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(re){ct?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ue[_e].width,Ue[_e].height,rt,je,Ue[_e].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,_t,Ue[_e].width,Ue[_e].height,0,rt,je,Ue[_e].data);for(let Oe=0;Oe<le.length;Oe++){const ut=le[Oe].image[_e].image;ct?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,ut.width,ut.height,rt,je,ut.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,_t,ut.width,ut.height,0,rt,je,ut.data)}}else{ct?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,rt,je,Ue[_e]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,_t,rt,je,Ue[_e]);for(let Oe=0;Oe<le.length;Oe++){const Fe=le[Oe];ct?X&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,0,0,rt,je,Fe.image[_e]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Oe+1,_t,rt,je,Fe.image[_e])}}}S(w)&&x(o.TEXTURE_CUBE_MAP),ce.__version=ee.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Te(I,w,K,ue,ee,ce){const He=a.convert(K.format,K.colorSpace),Re=a.convert(K.type),Me=b(K.internalFormat,He,Re,K.colorSpace),tt=i.get(w),re=i.get(K);if(re.__renderTarget=w,!tt.__hasExternalTextures){const Ue=Math.max(1,w.width>>ce),Je=Math.max(1,w.height>>ce);ee===o.TEXTURE_3D||ee===o.TEXTURE_2D_ARRAY?t.texImage3D(ee,ce,Me,Ue,Je,w.depth,0,He,Re,null):t.texImage2D(ee,ce,Me,Ue,Je,0,He,Re,null)}t.bindFramebuffer(o.FRAMEBUFFER,I),Ze(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ue,ee,re.__webglTexture,0,Be(w)):(ee===o.TEXTURE_2D||ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ue,ee,re.__webglTexture,ce),t.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(I,w,K){if(o.bindRenderbuffer(o.RENDERBUFFER,I),w.depthBuffer){const ue=w.depthTexture,ee=ue&&ue.isDepthTexture?ue.type:null,ce=A(w.stencilBuffer,ee),He=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=Be(w);Ze(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Re,ce,w.width,w.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Re,ce,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ce,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,He,o.RENDERBUFFER,I)}else{const ue=w.textures;for(let ee=0;ee<ue.length;ee++){const ce=ue[ee],He=a.convert(ce.format,ce.colorSpace),Re=a.convert(ce.type),Me=b(ce.internalFormat,He,Re,ce.colorSpace),tt=Be(w);K&&Ze(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,tt,Me,w.width,w.height):Ze(w)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tt,Me,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Me,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ce(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(w.depthTexture);ue.__renderTarget=w,(!ue.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ge(w.depthTexture,0);const ee=ue.__webglTexture,ce=Be(w);if(w.depthTexture.format===oo)Ze(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ee,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ee,0);else if(w.depthTexture.format===mo)Ze(w)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ee,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function be(I){const w=i.get(I),K=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const ue=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){const ee=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",ee)};ue.addEventListener("dispose",ee),w.__depthDisposeCallback=ee}w.__boundDepthTexture=ue}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ce(w.__webglFramebuffer,I)}else if(K){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=o.createRenderbuffer(),xe(w.__webglDepthbuffer[ue],I,!1);else{const ee=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer[ue];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ee,o.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),xe(w.__webglDepthbuffer,I,!1);else{const ue=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ee),o.framebufferRenderbuffer(o.FRAMEBUFFER,ue,o.RENDERBUFFER,ee)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Xe(I,w,K){const ue=i.get(I);w!==void 0&&Te(ue.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&be(I)}function Ct(I){const w=I.texture,K=i.get(I),ue=i.get(w);I.addEventListener("dispose",U);const ee=I.textures,ce=I.isWebGLCubeRenderTarget===!0,He=ee.length>1;if(He||(ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture()),ue.__version=w.version,c.memory.textures++),ce){K.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Re]=[];for(let Me=0;Me<w.mipmaps.length;Me++)K.__webglFramebuffer[Re][Me]=o.createFramebuffer()}else K.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)K.__webglFramebuffer[Re]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(He)for(let Re=0,Me=ee.length;Re<Me;Re++){const tt=i.get(ee[Re]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),c.memory.textures++)}if(I.samples>0&&Ze(I)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Re=0;Re<ee.length;Re++){const Me=ee[Re];K.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Re]);const tt=a.convert(Me.format,Me.colorSpace),re=a.convert(Me.type),Ue=b(Me.internalFormat,tt,re,Me.colorSpace,I.isXRRenderTarget===!0),Je=Be(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Je,Ue,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,K.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),xe(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){t.bindTexture(o.TEXTURE_CUBE_MAP,ue.__webglTexture),ie(o.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)Te(K.__webglFramebuffer[Re][Me],I,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Me);else Te(K.__webglFramebuffer[Re],I,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(w)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Re=0,Me=ee.length;Re<Me;Re++){const tt=ee[Re],re=i.get(tt);t.bindTexture(o.TEXTURE_2D,re.__webglTexture),ie(o.TEXTURE_2D,tt),Te(K.__webglFramebuffer,I,tt,o.COLOR_ATTACHMENT0+Re,o.TEXTURE_2D,0),S(tt)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let Re=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Re,ue.__webglTexture),ie(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)Te(K.__webglFramebuffer[Me],I,w,o.COLOR_ATTACHMENT0,Re,Me);else Te(K.__webglFramebuffer,I,w,o.COLOR_ATTACHMENT0,Re,0);S(w)&&x(Re),t.unbindTexture()}I.depthBuffer&&be(I)}function gt(I){const w=I.textures;for(let K=0,ue=w.length;K<ue;K++){const ee=w[K];if(S(ee)){const ce=L(I),He=i.get(ee).__webglTexture;t.bindTexture(ce,He),x(ce),t.unbindTexture()}}}const Ft=[],V=[];function $e(I){if(I.samples>0){if(Ze(I)===!1){const w=I.textures,K=I.width,ue=I.height;let ee=o.COLOR_BUFFER_BIT;const ce=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,He=i.get(I),Re=w.length>1;if(Re)for(let Me=0;Me<w.length;Me++)t.bindFramebuffer(o.FRAMEBUFFER,He.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Me,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,He.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Me,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,He.__webglColorRenderbuffer[Me]);const tt=i.get(w[Me]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,tt,0)}o.blitFramebuffer(0,0,K,ue,0,0,K,ue,ee,o.NEAREST),d===!0&&(Ft.length=0,V.length=0,Ft.push(o.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ft.push(ce),V.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,V)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let Me=0;Me<w.length;Me++){t.bindFramebuffer(o.FRAMEBUFFER,He.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Me,o.RENDERBUFFER,He.__webglColorRenderbuffer[Me]);const tt=i.get(w[Me]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,He.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Me,o.TEXTURE_2D,tt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const w=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function Be(I){return Math.min(s.maxSamples,I.samples)}function Ze(I){const w=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ve(I){const w=c.render.frame;m.get(I)!==w&&(m.set(I,w),I.update())}function Pe(I,w){const K=I.colorSpace,ue=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==Dn&&K!==Ur&&(Tt.getTransfer(K)===kt?(ue!==oi||ee!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function Le(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=ae,this.setTexture2D=ge,this.setTexture2DArray=fe,this.setTexture3D=he,this.setTextureCube=k,this.rebindTextures=Xe,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ze}function Nw(o,e){function t(i,s=Ur){let a;const c=Tt.getTransfer(s);if(i===or)return o.UNSIGNED_BYTE;if(i===Od)return o.UNSIGNED_SHORT_4_4_4_4;if(i===kd)return o.UNSIGNED_SHORT_5_5_5_1;if(i===u_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===l_)return o.BYTE;if(i===c_)return o.SHORT;if(i===va)return o.UNSIGNED_SHORT;if(i===Fd)return o.INT;if(i===gs)return o.UNSIGNED_INT;if(i===xi)return o.FLOAT;if(i===Ma)return o.HALF_FLOAT;if(i===f_)return o.ALPHA;if(i===d_)return o.RGB;if(i===oi)return o.RGBA;if(i===h_)return o.LUMINANCE;if(i===p_)return o.LUMINANCE_ALPHA;if(i===oo)return o.DEPTH_COMPONENT;if(i===mo)return o.DEPTH_STENCIL;if(i===Bd)return o.RED;if(i===zd)return o.RED_INTEGER;if(i===m_)return o.RG;if(i===Hd)return o.RG_INTEGER;if(i===Vd)return o.RGBA_INTEGER;if(i===lc||i===cc||i===uc||i===fc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===lc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===lc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ed||i===td||i===nd||i===id)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ed)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===td)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===id)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rd||i===sd||i===od)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===rd||i===sd)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===od)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ad||i===ld||i===cd||i===ud||i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===_d||i===vd||i===xd||i===yd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ad)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ld)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ud)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===md)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_d)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===Sd||i===Md)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===dc)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Md)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===g_||i===Ed||i===Td||i===wd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===dc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ed)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Td)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===po?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const Dw={type:"move"};class Bf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),x=this._getHandJoint(h,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Dw)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ir;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new dn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hr({vertexShader:Uw,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new Ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kw extends So{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",d=1,h=null,m=null,g=null,_=null,y=null,M=null;const E=new Ow,S=t.getContextAttributes();let x=null,L=null;const b=[],A=[],N=new wt;let F=null;const U=new Ln;U.viewport=new It;const H=new Ln;H.viewport=new It;const P=[U,H],C=new Ky;let z=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pe=b[Z];return pe===void 0&&(pe=new Bf,b[Z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Z){let pe=b[Z];return pe===void 0&&(pe=new Bf,b[Z]=pe),pe.getGripSpace()},this.getHand=function(Z){let pe=b[Z];return pe===void 0&&(pe=new Bf,b[Z]=pe),pe.getHandSpace()};function J(Z){const pe=A.indexOf(Z.inputSource);if(pe===-1)return;const Te=b[pe];Te!==void 0&&(Te.update(Z.inputSource,Z.frame,h||c),Te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function me(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",me),s.removeEventListener("inputsourceschange",ge);for(let Z=0;Z<b.length;Z++){const pe=A[Z];pe!==null&&(A[Z]=null,b[Z].disconnect(pe))}z=null,ae=null,E.reset(),e.setRenderTarget(x),y=null,_=null,g=null,s=null,L=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",me),s.addEventListener("inputsourceschange",ge),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const pe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new _s(y.framebufferWidth,y.framebufferHeight,{format:oi,type:or,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let pe=null,Te=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=S.stencil?mo:oo,Te=S.stencil?po:gs);const Ce={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Ce),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new _s(_.textureWidth,_.textureHeight,{format:oi,type:or,depthTexture:new D_(_.textureWidth,_.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await s.requestReferenceSpace(u),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ge(Z){for(let pe=0;pe<Z.removed.length;pe++){const Te=Z.removed[pe],xe=A.indexOf(Te);xe>=0&&(A[xe]=null,b[xe].disconnect(Te))}for(let pe=0;pe<Z.added.length;pe++){const Te=Z.added[pe];let xe=A.indexOf(Te);if(xe===-1){for(let be=0;be<b.length;be++)if(be>=A.length){A.push(Te),xe=be;break}else if(A[be]===null){A[be]=Te,xe=be;break}if(xe===-1)break}const Ce=b[xe];Ce&&Ce.connect(Te)}}const fe=new Y,he=new Y;function k(Z,pe,Te){fe.setFromMatrixPosition(pe.matrixWorld),he.setFromMatrixPosition(Te.matrixWorld);const xe=fe.distanceTo(he),Ce=pe.projectionMatrix.elements,be=Te.projectionMatrix.elements,Xe=Ce[14]/(Ce[10]-1),Ct=Ce[14]/(Ce[10]+1),gt=(Ce[9]+1)/Ce[5],Ft=(Ce[9]-1)/Ce[5],V=(Ce[8]-1)/Ce[0],$e=(be[8]+1)/be[0],Be=Xe*V,Ze=Xe*$e,ve=xe/(-V+$e),Pe=ve*-V;if(pe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pe),Z.translateZ(ve),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Le=Xe+ve,I=Ct+ve,w=Be-Pe,K=Ze+(xe-Pe),ue=gt*Ct/I*Le,ee=Ft*Ct/I*Le;Z.projectionMatrix.makePerspective(w,K,ue,ee,Le,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function de(Z,pe){pe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let pe=Z.near,Te=Z.far;E.texture!==null&&(E.depthNear>0&&(pe=E.depthNear),E.depthFar>0&&(Te=E.depthFar)),C.near=H.near=U.near=pe,C.far=H.far=U.far=Te,(z!==C.near||ae!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,ae=C.far),U.layers.mask=Z.layers.mask|2,H.layers.mask=Z.layers.mask|4,C.layers.mask=U.layers.mask|H.layers.mask;const xe=Z.parent,Ce=C.cameras;de(C,xe);for(let be=0;be<Ce.length;be++)de(Ce[be],xe);Ce.length===2?k(C,U,H):C.projectionMatrix.copy(U.projectionMatrix),oe(Z,C,xe)};function oe(Z,pe,Te){Te===null?Z.matrix.copy(pe.matrixWorld):(Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=go*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function(Z){d=Z,_!==null&&(_.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let O=null;function ie(Z,pe){if(m=pe.getViewerPose(h||c),M=pe,m!==null){const Te=m.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let xe=!1;Te.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let be=0;be<Te.length;be++){const Xe=Te[be];let Ct=null;if(y!==null)Ct=y.getViewport(Xe);else{const Ft=g.getViewSubImage(_,Xe);Ct=Ft.viewport,be===0&&(e.setRenderTargetTextures(L,Ft.colorTexture,_.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(L))}let gt=P[be];gt===void 0&&(gt=new Ln,gt.layers.enable(be),gt.viewport=new It,P[be]=gt),gt.matrix.fromArray(Xe.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Xe.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),be===0&&(C.matrix.copy(gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(gt)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const be=g.getDepthInformation(Te[0]);be&&be.isValid&&be.texture&&E.init(e,be,s.renderState)}}for(let Te=0;Te<b.length;Te++){const xe=A[Te],Ce=b[Te];xe!==null&&Ce!==void 0&&Ce.update(xe,pe,h||c)}O&&O(Z,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),M=null}const ke=new B_;ke.setAnimationLoop(ie),this.setAnimationLoop=function(Z){O=Z},this.dispose=function(){}}}const cs=new Ii,Bw=new pt;function zw(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,R_(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,L,b,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),g(S,x)):x.isMeshPhongMaterial?(a(S,x),m(S,x)):x.isMeshStandardMaterial?(a(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),E(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?d(S,x,L,b):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),b=L.envMap,A=L.envMapRotation;b&&(S.envMap.value=b,cs.copy(A),cs.x*=-1,cs.y*=-1,cs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),S.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(cs)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,L,b){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=b*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hw(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,b){const A=b.program;i.uniformBlockBinding(L,A)}function h(L,b){let A=s[L.id];A===void 0&&(M(L),A=m(L),s[L.id]=A,L.addEventListener("dispose",S));const N=b.program;i.updateUBOMapping(L,N);const F=e.render.frame;a[L.id]!==F&&(_(L),a[L.id]=F)}function m(L){const b=g();L.__bindingPointIndex=b;const A=o.createBuffer(),N=L.__size,F=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,N,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,b,A),A}function g(){for(let L=0;L<u;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const b=s[L.id],A=L.uniforms,N=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,b);for(let F=0,U=A.length;F<U;F++){const H=Array.isArray(A[F])?A[F]:[A[F]];for(let P=0,C=H.length;P<C;P++){const z=H[P];if(y(z,F,P,N)===!0){const ae=z.__offset,J=Array.isArray(z.value)?z.value:[z.value];let me=0;for(let ge=0;ge<J.length;ge++){const fe=J[ge],he=E(fe);typeof fe=="number"||typeof fe=="boolean"?(z.__data[0]=fe,o.bufferSubData(o.UNIFORM_BUFFER,ae+me,z.__data)):fe.isMatrix3?(z.__data[0]=fe.elements[0],z.__data[1]=fe.elements[1],z.__data[2]=fe.elements[2],z.__data[3]=0,z.__data[4]=fe.elements[3],z.__data[5]=fe.elements[4],z.__data[6]=fe.elements[5],z.__data[7]=0,z.__data[8]=fe.elements[6],z.__data[9]=fe.elements[7],z.__data[10]=fe.elements[8],z.__data[11]=0):(fe.toArray(z.__data,me),me+=he.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ae,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,b,A,N){const F=L.value,U=b+"_"+A;if(N[U]===void 0)return typeof F=="number"||typeof F=="boolean"?N[U]=F:N[U]=F.clone(),!0;{const H=N[U];if(typeof F=="number"||typeof F=="boolean"){if(H!==F)return N[U]=F,!0}else if(H.equals(F)===!1)return H.copy(F),!0}return!1}function M(L){const b=L.uniforms;let A=0;const N=16;for(let U=0,H=b.length;U<H;U++){const P=Array.isArray(b[U])?b[U]:[b[U]];for(let C=0,z=P.length;C<z;C++){const ae=P[C],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let me=0,ge=J.length;me<ge;me++){const fe=J[me],he=E(fe),k=A%N,de=k%he.boundary,oe=k+de;A+=de,oe!==0&&N-oe<he.storage&&(A+=N-oe),ae.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=A,A+=he.storage}}}const F=A%N;return F>0&&(A+=N-F),L.__size=A,L.__cache={},this}function E(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function S(L){const b=L.target;b.removeEventListener("dispose",S);const A=c.indexOf(b.__bindingPointIndex);c.splice(A,1),o.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function x(){for(const L in s)o.deleteBuffer(s[L]);c=[],s={},a={}}return{bind:d,update:h,dispose:x}}class Vw{constructor(e={}){const{canvas:t=Wx(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=zr,this.toneMappingExposure=1;const A=this;let N=!1,F=0,U=0,H=null,P=-1,C=null;const z=new It,ae=new It;let J=null;const me=new st(0);let ge=0,fe=t.width,he=t.height,k=1,de=null,oe=null;const O=new It(0,0,fe,he),ie=new It(0,0,fe,he);let ke=!1;const Z=new qd;let pe=!1,Te=!1;const xe=new pt,Ce=new pt,be=new Y,Xe=new It,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Ft(){return H===null?k:1}let V=i;function $e(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ud}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),V===null){const j="webgl2";if(V=$e(j,R),V===null)throw $e(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Be,Ze,ve,Pe,Le,I,w,K,ue,ee,ce,He,Re,Me,tt,re,Ue,Je,rt,je,_t,ct,Nt,X;function Ie(){Be=new ZE(V),Be.init(),ct=new Nw(V,Be),Ze=new XE(V,Be,e,ct),ve=new Lw(V,Be),Ze.reverseDepthBuffer&&_&&ve.buffers.depth.setReversed(!0),Pe=new eT(V),Le=new vw,I=new Iw(V,Be,ve,Le,Ze,ct,Pe),w=new qE(A),K=new $E(A),ue=new aS(V),Nt=new GE(V,ue),ee=new QE(V,ue,Pe,Nt),ce=new nT(V,ee,ue,Pe),rt=new tT(V,Ze,I),re=new jE(Le),He=new _w(A,w,K,Be,Ze,Nt,re),Re=new zw(A,Le),Me=new yw,tt=new Aw(Be),Je=new VE(A,w,K,ve,ce,y,d),Ue=new bw(A,ce,Ze),X=new Hw(V,Pe,Ze,ve),je=new WE(V,Be,Pe),_t=new JE(V,Be,Pe),Pe.programs=He.programs,A.capabilities=Ze,A.extensions=Be,A.properties=Le,A.renderLists=Me,A.shadowMap=Ue,A.state=ve,A.info=Pe}Ie();const le=new kw(A,V);this.xr=le,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Be.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Be.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(fe,he,!1))},this.getSize=function(R){return R.set(fe,he)},this.setSize=function(R,j,ne=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=R,he=j,t.width=Math.floor(R*k),t.height=Math.floor(j*k),ne===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(fe*k,he*k).floor()},this.setDrawingBufferSize=function(R,j,ne){fe=R,he=j,k=ne,t.width=Math.floor(R*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,j,ne,se){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,j,ne,se),ve.viewport(z.copy(O).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,j,ne,se){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,j,ne,se),ve.scissor(ae.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(R){ve.setScissorTest(ke=R)},this.setOpaqueSort=function(R){de=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(R=!0,j=!0,ne=!0){let se=0;if(R){let G=!1;if(H!==null){const we=H.texture.format;G=we===Vd||we===Hd||we===zd}if(G){const we=H.texture.type,Ne=we===or||we===gs||we===va||we===po||we===Od||we===kd,Ve=Je.getClearColor(),Ge=Je.getClearAlpha(),ot=Ve.r,at=Ve.g,Qe=Ve.b;Ne?(M[0]=ot,M[1]=at,M[2]=Qe,M[3]=Ge,V.clearBufferuiv(V.COLOR,0,M)):(E[0]=ot,E[1]=at,E[2]=Qe,E[3]=Ge,V.clearBufferiv(V.COLOR,0,E))}else se|=V.COLOR_BUFFER_BIT}j&&(se|=V.DEPTH_BUFFER_BIT),ne&&(se|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Je.dispose(),Me.dispose(),tt.dispose(),Le.dispose(),w.dispose(),K.dispose(),ce.dispose(),Nt.dispose(),X.dispose(),He.dispose(),le.dispose(),le.removeEventListener("sessionstart",vs),le.removeEventListener("sessionend",ar),Oi.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=Pe.autoReset,j=Ue.enabled,ne=Ue.autoUpdate,se=Ue.needsUpdate,G=Ue.type;Ie(),Pe.autoReset=R,Ue.enabled=j,Ue.autoUpdate=ne,Ue.needsUpdate=se,Ue.type=G}function Fe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){const j=R.target;j.removeEventListener("dispose",ut),zt(j)}function zt(R){tn(R),Le.remove(R)}function tn(R){const j=Le.get(R).programs;j!==void 0&&(j.forEach(function(ne){He.releaseProgram(ne)}),R.isShaderMaterial&&He.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ne,se,G,we){j===null&&(j=Ct);const Ne=G.isMesh&&G.matrixWorld.determinant()<0,Ve=Ca(R,j,ne,se,G);ve.setMaterial(se,Ne);let Ge=ne.index,ot=1;if(se.wireframe===!0){if(Ge=ee.getWireframeAttribute(ne),Ge===void 0)return;ot=2}const at=ne.drawRange,Qe=ne.attributes.position;let ft=at.start*ot,bt=(at.start+at.count)*ot;we!==null&&(ft=Math.max(ft,we.start*ot),bt=Math.min(bt,(we.start+we.count)*ot)),Ge!==null?(ft=Math.max(ft,0),bt=Math.min(bt,Ge.count)):Qe!=null&&(ft=Math.max(ft,0),bt=Math.min(bt,Qe.count));const Pt=bt-ft;if(Pt<0||Pt===1/0)return;Nt.setup(G,se,Ve,ne,Ge);let Gt,Et=je;if(Ge!==null&&(Gt=ue.get(Ge),Et=_t,Et.setIndex(Gt)),G.isMesh)se.wireframe===!0?(ve.setLineWidth(se.wireframeLinewidth*Ft()),Et.setMode(V.LINES)):Et.setMode(V.TRIANGLES);else if(G.isLine){let et=se.linewidth;et===void 0&&(et=1),ve.setLineWidth(et*Ft()),G.isLineSegments?Et.setMode(V.LINES):G.isLineLoop?Et.setMode(V.LINE_LOOP):Et.setMode(V.LINE_STRIP)}else G.isPoints?Et.setMode(V.POINTS):G.isSprite&&Et.setMode(V.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Et.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const et=G._multiDrawStarts,Yt=G._multiDrawCounts,Mt=G._multiDrawCount,hn=Ge?ue.get(Ge).bytesPerElement:1,ai=Le.get(se).currentProgram.getUniforms();for(let wn=0;wn<Mt;wn++)ai.setValue(V,"_gl_DrawID",wn),Et.render(et[wn]/hn,Yt[wn])}else if(G.isInstancedMesh)Et.renderInstances(ft,Pt,G.count);else if(ne.isInstancedBufferGeometry){const et=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Yt=Math.min(ne.instanceCount,et);Et.renderInstances(ft,Pt,Yt)}else Et.render(ft,Pt)};function At(R,j,ne){R.transparent===!0&&R.side===Pi&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,xs(R,j,ne),R.side=sr,R.needsUpdate=!0,xs(R,j,ne),R.side=Pi):xs(R,j,ne)}this.compile=function(R,j,ne=null){ne===null&&(ne=R),x=tt.get(ne),x.init(j),b.push(x),ne.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),R!==ne&&R.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const se=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const we=G.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const Ve=we[Ne];At(Ve,ne,G),se.add(Ve)}else At(we,ne,G),se.add(we)}),b.pop(),x=null,se},this.compileAsync=function(R,j,ne=null){const se=this.compile(R,j,ne);return new Promise(G=>{function we(){if(se.forEach(function(Ne){Le.get(Ne).currentProgram.isReady()&&se.delete(Ne)}),se.size===0){G(R);return}setTimeout(we,10)}Be.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Fn=null;function Tn(R){Fn&&Fn(R)}function vs(){Oi.stop()}function ar(){Oi.start()}const Oi=new B_;Oi.setAnimationLoop(Tn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(R){Fn=R,le.setAnimationLoop(R),R===null?Oi.stop():Oi.start()},le.addEventListener("sessionstart",vs),le.addEventListener("sessionend",ar),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(j),j=le.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,j,H),x=tt.get(R,b.length),x.init(j),b.push(x),Ce.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Z.setFromProjectionMatrix(Ce),Te=this.localClippingEnabled,pe=re.init(this.clippingPlanes,Te),S=Me.get(R,L.length),S.init(),L.push(S),le.enabled===!0&&le.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&ki(we,j,-1/0,A.sortObjects)}ki(R,j,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(de,oe),gt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,gt&&Je.addToRenderList(S,R),this.info.render.frame++,pe===!0&&re.beginShadows();const ne=x.state.shadowsArray;Ue.render(ne,R,j),pe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,G=S.transmissive;if(x.setupLights(),j.isArrayCamera){const we=j.cameras;if(G.length>0)for(let Ne=0,Ve=we.length;Ne<Ve;Ne++){const Ge=we[Ne];Gr(se,G,R,Ge)}gt&&Je.render(R);for(let Ne=0,Ve=we.length;Ne<Ve;Ne++){const Ge=we[Ne];Vr(S,R,Ge,Ge.viewport)}}else G.length>0&&Gr(se,G,R,j),gt&&Je.render(R),Vr(S,R,j);H!==null&&(I.updateMultisampleRenderTarget(H),I.updateRenderTargetMipmap(H)),R.isScene===!0&&R.onAfterRender(A,R,j),Nt.resetDefaultState(),P=-1,C=null,b.pop(),b.length>0?(x=b[b.length-1],pe===!0&&re.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function ki(R,j,ne,se){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){se&&Xe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ce);const Ne=ce.update(R),Ve=R.material;Ve.visible&&S.push(R,Ne,Ve,ne,Xe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Ne=ce.update(R),Ve=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xe.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Xe.copy(Ne.boundingSphere.center)),Xe.applyMatrix4(R.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ve)){const Ge=Ne.groups;for(let ot=0,at=Ge.length;ot<at;ot++){const Qe=Ge[ot],ft=Ve[Qe.materialIndex];ft&&ft.visible&&S.push(R,Ne,ft,ne,Xe.z,Qe)}}else Ve.visible&&S.push(R,Ne,Ve,ne,Xe.z,null)}}const we=R.children;for(let Ne=0,Ve=we.length;Ne<Ve;Ne++)ki(we[Ne],j,ne,se)}function Vr(R,j,ne,se){const G=R.opaque,we=R.transmissive,Ne=R.transparent;x.setupLightsView(ne),pe===!0&&re.setGlobalState(A.clippingPlanes,ne),se&&ve.viewport(z.copy(se)),G.length>0&&lr(G,j,ne),we.length>0&&lr(we,j,ne),Ne.length>0&&lr(Ne,j,ne),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Gr(R,j,ne,se){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new _s(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Ma:or,minFilter:tr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const we=x.state.transmissionRenderTarget[se.id],Ne=se.viewport||z;we.setSize(Ne.z,Ne.w);const Ve=A.getRenderTarget();A.setRenderTarget(we),A.getClearColor(me),ge=A.getClearAlpha(),ge<1&&A.setClearColor(16777215,.5),A.clear(),gt&&Je.render(ne);const Ge=A.toneMapping;A.toneMapping=zr;const ot=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),pe===!0&&re.setGlobalState(A.clippingPlanes,se),lr(R,ne,se),I.updateMultisampleRenderTarget(we),I.updateRenderTargetMipmap(we),Be.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Qe=0,ft=j.length;Qe<ft;Qe++){const bt=j[Qe],Pt=bt.object,Gt=bt.geometry,Et=bt.material,et=bt.group;if(Et.side===Pi&&Pt.layers.test(se.layers)){const Yt=Et.side;Et.side=Wn,Et.needsUpdate=!0,Aa(Pt,ne,se,Gt,Et,et),Et.side=Yt,Et.needsUpdate=!0,at=!0}}at===!0&&(I.updateMultisampleRenderTarget(we),I.updateRenderTargetMipmap(we))}A.setRenderTarget(Ve),A.setClearColor(me,ge),ot!==void 0&&(se.viewport=ot),A.toneMapping=Ge}function lr(R,j,ne){const se=j.isScene===!0?j.overrideMaterial:null;for(let G=0,we=R.length;G<we;G++){const Ne=R[G],Ve=Ne.object,Ge=Ne.geometry,ot=se===null?Ne.material:se,at=Ne.group;Ve.layers.test(ne.layers)&&Aa(Ve,j,ne,Ge,ot,at)}}function Aa(R,j,ne,se,G,we){R.onBeforeRender(A,j,ne,se,G,we),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(A,j,ne,se,R,we),G.transparent===!0&&G.side===Pi&&G.forceSinglePass===!1?(G.side=Wn,G.needsUpdate=!0,A.renderBufferDirect(ne,j,se,G,R,we),G.side=sr,G.needsUpdate=!0,A.renderBufferDirect(ne,j,se,G,R,we),G.side=Pi):A.renderBufferDirect(ne,j,se,G,R,we),R.onAfterRender(A,j,ne,se,G,we)}function xs(R,j,ne){j.isScene!==!0&&(j=Ct);const se=Le.get(R),G=x.state.lights,we=x.state.shadowsArray,Ne=G.state.version,Ve=He.getParameters(R,G.state,we,j,ne),Ge=He.getProgramCacheKey(Ve);let ot=se.programs;se.environment=R.isMeshStandardMaterial?j.environment:null,se.fog=j.fog,se.envMap=(R.isMeshStandardMaterial?K:w).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,ot===void 0&&(R.addEventListener("dispose",ut),ot=new Map,se.programs=ot);let at=ot.get(Ge);if(at!==void 0){if(se.currentProgram===at&&se.lightsStateVersion===Ne)return Ti(R,Ve),at}else Ve.uniforms=He.getUniforms(R),R.onBeforeCompile(Ve,A),at=He.acquireProgram(Ve,Ge),ot.set(Ge,at),se.uniforms=Ve.uniforms;const Qe=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=re.uniform),Ti(R,Ve),se.needsLights=Tc(R),se.lightsStateVersion=Ne,se.needsLights&&(Qe.ambientLightColor.value=G.state.ambient,Qe.lightProbe.value=G.state.probe,Qe.directionalLights.value=G.state.directional,Qe.directionalLightShadows.value=G.state.directionalShadow,Qe.spotLights.value=G.state.spot,Qe.spotLightShadows.value=G.state.spotShadow,Qe.rectAreaLights.value=G.state.rectArea,Qe.ltc_1.value=G.state.rectAreaLTC1,Qe.ltc_2.value=G.state.rectAreaLTC2,Qe.pointLights.value=G.state.point,Qe.pointLightShadows.value=G.state.pointShadow,Qe.hemisphereLights.value=G.state.hemi,Qe.directionalShadowMap.value=G.state.directionalShadowMap,Qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Qe.spotShadowMap.value=G.state.spotShadowMap,Qe.spotLightMatrix.value=G.state.spotLightMatrix,Qe.spotLightMap.value=G.state.spotLightMap,Qe.pointShadowMap.value=G.state.pointShadowMap,Qe.pointShadowMatrix.value=G.state.pointShadowMatrix),se.currentProgram=at,se.uniformsList=null,at}function Ra(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=hc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Ti(R,j){const ne=Le.get(R);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function Ca(R,j,ne,se,G){j.isScene!==!0&&(j=Ct),I.resetTextureUnits();const we=j.fog,Ne=se.isMeshStandardMaterial?j.environment:null,Ve=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Dn,Ge=(se.isMeshStandardMaterial?K:w).get(se.envMap||Ne),ot=se.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,at=!!ne.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Qe=!!ne.morphAttributes.position,ft=!!ne.morphAttributes.normal,bt=!!ne.morphAttributes.color;let Pt=zr;se.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Pt=A.toneMapping);const Gt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Et=Gt!==void 0?Gt.length:0,et=Le.get(se),Yt=x.state.lights;if(pe===!0&&(Te===!0||R!==C)){const $t=R===C&&se.id===P;re.setState(se,R,$t)}let Mt=!1;se.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Yt.state.version||et.outputColorSpace!==Ve||G.isBatchedMesh&&et.batching===!1||!G.isBatchedMesh&&et.batching===!0||G.isBatchedMesh&&et.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&et.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&et.instancing===!1||!G.isInstancedMesh&&et.instancing===!0||G.isSkinnedMesh&&et.skinning===!1||!G.isSkinnedMesh&&et.skinning===!0||G.isInstancedMesh&&et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&et.instancingMorph===!1&&G.morphTexture!==null||et.envMap!==Ge||se.fog===!0&&et.fog!==we||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==re.numPlanes||et.numIntersection!==re.numIntersection)||et.vertexAlphas!==ot||et.vertexTangents!==at||et.morphTargets!==Qe||et.morphNormals!==ft||et.morphColors!==bt||et.toneMapping!==Pt||et.morphTargetsCount!==Et)&&(Mt=!0):(Mt=!0,et.__version=se.version);let hn=et.currentProgram;Mt===!0&&(hn=xs(se,j,G));let ai=!1,wn=!1,Wr=!1;const Ot=hn.getUniforms(),An=et.uniforms;if(ve.useProgram(hn.program)&&(ai=!0,wn=!0,Wr=!0),se.id!==P&&(P=se.id,wn=!0),ai||C!==R){ve.buffers.depth.getReversed()?(xe.copy(R.projectionMatrix),jx(xe),qx(xe),Ot.setValue(V,"projectionMatrix",xe)):Ot.setValue(V,"projectionMatrix",R.projectionMatrix),Ot.setValue(V,"viewMatrix",R.matrixWorldInverse);const _n=Ot.map.cameraPosition;_n!==void 0&&_n.setValue(V,be.setFromMatrixPosition(R.matrixWorld)),Ze.logarithmicDepthBuffer&&Ot.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ot.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,wn=!0,Wr=!0)}if(G.isSkinnedMesh){Ot.setOptional(V,G,"bindMatrix"),Ot.setOptional(V,G,"bindMatrixInverse");const $t=G.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Ot.setValue(V,"boneTexture",$t.boneTexture,I))}G.isBatchedMesh&&(Ot.setOptional(V,G,"batchingTexture"),Ot.setValue(V,"batchingTexture",G._matricesTexture,I),Ot.setOptional(V,G,"batchingIdTexture"),Ot.setValue(V,"batchingIdTexture",G._indirectTexture,I),Ot.setOptional(V,G,"batchingColorTexture"),G._colorsTexture!==null&&Ot.setValue(V,"batchingColorTexture",G._colorsTexture,I));const gn=ne.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&rt.update(G,ne,hn),(wn||et.receiveShadow!==G.receiveShadow)&&(et.receiveShadow=G.receiveShadow,Ot.setValue(V,"receiveShadow",G.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(An.envMap.value=Ge,An.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&j.environment!==null&&(An.envMapIntensity.value=j.environmentIntensity),wn&&(Ot.setValue(V,"toneMappingExposure",A.toneMappingExposure),et.needsLights&&ba(An,Wr),we&&se.fog===!0&&Re.refreshFogUniforms(An,we),Re.refreshMaterialUniforms(An,se,k,he,x.state.transmissionRenderTarget[R.id]),hc.upload(V,Ra(et),An,I)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(hc.upload(V,Ra(et),An,I),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ot.setValue(V,"center",G.center),Ot.setValue(V,"modelViewMatrix",G.modelViewMatrix),Ot.setValue(V,"normalMatrix",G.normalMatrix),Ot.setValue(V,"modelMatrix",G.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const $t=se.uniformsGroups;for(let _n=0,Xr=$t.length;_n<Xr;_n++){const xt=$t[_n];X.update(xt,hn),X.bind(xt,hn)}}return hn}function ba(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Tc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,j,ne){Le.get(R.texture).__webglTexture=j,Le.get(R.depthTexture).__webglTexture=ne;const se=Le.get(R);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ne===void 0,se.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const ne=Le.get(R);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,ne=0){H=R,F=j,U=ne;let se=!0,G=null,we=!1,Ne=!1;if(R){const Ge=Le.get(R);if(Ge.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(V.FRAMEBUFFER,null),se=!1;else if(Ge.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Ge.__hasExternalTextures)I.rebindTextures(R,Le.get(R.texture).__webglTexture,Le.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(Ge.__boundDepthTexture!==Qe){if(Qe!==null&&Le.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const ot=R.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ne=!0);const at=Le.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[j])?G=at[j][ne]:G=at[j],we=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?G=Le.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?G=at[ne]:G=at,z.copy(R.viewport),ae.copy(R.scissor),J=R.scissorTest}else z.copy(O).multiplyScalar(k).floor(),ae.copy(ie).multiplyScalar(k).floor(),J=ke;if(ve.bindFramebuffer(V.FRAMEBUFFER,G)&&se&&ve.drawBuffers(R,G),ve.viewport(z),ve.scissor(ae),ve.setScissorTest(J),we){const Ge=Le.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ge.__webglTexture,ne)}else if(Ne){const Ge=Le.get(R.texture),ot=j||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.__webglTexture,ne||0,ot)}P=-1},this.readRenderTargetPixels=function(R,j,ne,se,G,we,Ne){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve){ve.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const Ge=R.texture,ot=Ge.format,at=Ge.type;if(!Ze.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-se&&ne>=0&&ne<=R.height-G&&V.readPixels(j,ne,se,G,ct.convert(ot),ct.convert(at),we)}finally{const Ge=H!==null?Le.get(H).__webglFramebuffer:null;ve.bindFramebuffer(V.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,j,ne,se,G,we,Ne){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve){const Ge=R.texture,ot=Ge.format,at=Ge.type;if(!Ze.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-se&&ne>=0&&ne<=R.height-G){ve.bindFramebuffer(V.FRAMEBUFFER,Ve);const Qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.bufferData(V.PIXEL_PACK_BUFFER,we.byteLength,V.STREAM_READ),V.readPixels(j,ne,se,G,ct.convert(ot),ct.convert(at),0);const ft=H!==null?Le.get(H).__webglFramebuffer:null;ve.bindFramebuffer(V.FRAMEBUFFER,ft);const bt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Xx(V,bt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,we),V.deleteBuffer(Qe),V.deleteSync(bt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,ne=0){R.isTexture!==!0&&(io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const se=Math.pow(2,-ne),G=Math.floor(R.image.width*se),we=Math.floor(R.image.height*se),Ne=j!==null?j.x:0,Ve=j!==null?j.y:0;I.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ne,0,0,Ne,Ve,G,we),ve.unbindTexture()};const Pa=V.createFramebuffer(),La=V.createFramebuffer();this.copyTextureToTexture=function(R,j,ne=null,se=null,G=0,we=null){R.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,R=arguments[1],j=arguments[2],we=arguments[3]||0,ne=null),we===null&&(G!==0?(io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=G,G=0):we=0);let Ne,Ve,Ge,ot,at,Qe,ft,bt,Pt;const Gt=R.isCompressedTexture?R.mipmaps[we]:R.image;if(ne!==null)Ne=ne.max.x-ne.min.x,Ve=ne.max.y-ne.min.y,Ge=ne.isBox3?ne.max.z-ne.min.z:1,ot=ne.min.x,at=ne.min.y,Qe=ne.isBox3?ne.min.z:0;else{const gn=Math.pow(2,-G);Ne=Math.floor(Gt.width*gn),Ve=Math.floor(Gt.height*gn),R.isDataArrayTexture?Ge=Gt.depth:R.isData3DTexture?Ge=Math.floor(Gt.depth*gn):Ge=1,ot=0,at=0,Qe=0}se!==null?(ft=se.x,bt=se.y,Pt=se.z):(ft=0,bt=0,Pt=0);const Et=ct.convert(j.format),et=ct.convert(j.type);let Yt;j.isData3DTexture?(I.setTexture3D(j,0),Yt=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(I.setTexture2DArray(j,0),Yt=V.TEXTURE_2D_ARRAY):(I.setTexture2D(j,0),Yt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Mt=V.getParameter(V.UNPACK_ROW_LENGTH),hn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ai=V.getParameter(V.UNPACK_SKIP_PIXELS),wn=V.getParameter(V.UNPACK_SKIP_ROWS),Wr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Gt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Gt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ot),V.pixelStorei(V.UNPACK_SKIP_ROWS,at),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qe);const Ot=R.isDataArrayTexture||R.isData3DTexture,An=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const gn=Le.get(R),$t=Le.get(j),_n=Le.get(gn.__renderTarget),Xr=Le.get($t.__renderTarget);ve.bindFramebuffer(V.READ_FRAMEBUFFER,_n.__webglFramebuffer),ve.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let xt=0;xt<Ge;xt++)Ot&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Le.get(R).__webglTexture,G,Qe+xt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Le.get(j).__webglTexture,we,Pt+xt)),V.blitFramebuffer(ot,at,Ne,Ve,ft,bt,Ne,Ve,V.DEPTH_BUFFER_BIT,V.NEAREST);ve.bindFramebuffer(V.READ_FRAMEBUFFER,null),ve.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(G!==0||R.isRenderTargetTexture||Le.has(R)){const gn=Le.get(R),$t=Le.get(j);ve.bindFramebuffer(V.READ_FRAMEBUFFER,Pa),ve.bindFramebuffer(V.DRAW_FRAMEBUFFER,La);for(let _n=0;_n<Ge;_n++)Ot?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,gn.__webglTexture,G,Qe+_n):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,gn.__webglTexture,G),An?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$t.__webglTexture,we,Pt+_n):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,$t.__webglTexture,we),G!==0?V.blitFramebuffer(ot,at,Ne,Ve,ft,bt,Ne,Ve,V.COLOR_BUFFER_BIT,V.NEAREST):An?V.copyTexSubImage3D(Yt,we,ft,bt,Pt+_n,ot,at,Ne,Ve):V.copyTexSubImage2D(Yt,we,ft,bt,ot,at,Ne,Ve);ve.bindFramebuffer(V.READ_FRAMEBUFFER,null),ve.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Yt,we,ft,bt,Pt,Ne,Ve,Ge,Et,et,Gt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Yt,we,ft,bt,Pt,Ne,Ve,Ge,Et,Gt.data):V.texSubImage3D(Yt,we,ft,bt,Pt,Ne,Ve,Ge,Et,et,Gt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,we,ft,bt,Ne,Ve,Et,et,Gt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,we,ft,bt,Gt.width,Gt.height,Et,Gt.data):V.texSubImage2D(V.TEXTURE_2D,we,ft,bt,Ne,Ve,Et,et,Gt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Mt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,hn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ai),V.pixelStorei(V.UNPACK_SKIP_ROWS,wn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wr),we===0&&j.generateMipmaps&&V.generateMipmap(Yt),ve.unbindTexture()},this.copyTextureToTexture3D=function(R,j,ne=null,se=null,G=0){return R.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,se=arguments[1]||null,R=arguments[2],j=arguments[3],G=arguments[4]||0),io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,ne,se,G)},this.initRenderTarget=function(R){Le.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),ve.unbindTexture()},this.resetState=function(){F=0,U=0,H=null,ve.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),W_=(...o)=>o.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ww={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=dt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:c,...u},d)=>dt.createElement("svg",{ref:d,...Ww,width:e,height:e,stroke:o,strokeWidth:i?Number(t)*24/Number(e):t,className:W_("lucide",s),...u},[...c.map(([h,m])=>dt.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=(o,e)=>{const t=dt.forwardRef(({className:i,...s},a)=>dt.createElement(Xw,{ref:a,iconNode:e,className:W_(`lucide-${Gw(o)}`,i),...s}));return t.displayName=`${o}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Un("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=Un("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=Un("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=Un("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=Un("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=Un("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=Un("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=Un("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Un("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=Un("ScanFace",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=Un("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Un("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=Un("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=Un("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Un("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function $g(o,e){if(e===_x)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Ad||e===__){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let d=0;d<u.count;d++)c.push(d);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Ad)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class n1 extends To{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new a1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new v1(t)}),this.register(function(t){return new x1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new y1(t)}),this.register(function(t){return new S1(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=_a.extractUrlBase(e);c=_a.resolveURL(h,this.path)}else c=_a.extractUrlBase(e);this.manager.itemStart(e);const u=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},d=new O_(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{a.parse(h,c,function(m){t(m),a.manager.itemEnd(e)},u)}catch(m){u(m)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===K_){try{c[St.KHR_BINARY_GLTF]=new M1(e)}catch(g){s&&s(g);return}a=JSON.parse(c[St.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new U1(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case St.KHR_MATERIALS_UNLIT:c[g]=new s1;break;case St.KHR_DRACO_MESH_COMPRESSION:c[g]=new E1(a,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:c[g]=new T1;break;case St.KHR_MESH_QUANTIZATION:c[g]=new w1;break;default:_.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(c),h.setPlugins(u),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function i1(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class r1{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const m=new st(16777215);d.color!==void 0&&m.setRGB(d.color[0],d.color[1],d.color[2],Dn);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new Pd(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new k_(m),h.distance=g;break;case"spot":h=new Xy(m),h.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),h.decay=2,er(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(d){return i._getNodeRef(t.cache,u,d)})}}class s1{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return ms}extendParams(e,t,i){const s=[];e.color=new st(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Dn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,fn))}return Promise.all(s)}}class o1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class a1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new wt(u,u)}return Promise.all(a)}}class l1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class c1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class u1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new st(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Dn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,fn)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class f1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class d1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new st().setRGB(u[0],u[1],u[2],Dn),Promise.all(a)}}class h1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class p1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new st().setRGB(u[0],u[1],u[2],Dn),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,fn)),Promise.all(a)}}class m1{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class g1{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class _1{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class v1{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let d=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class x1{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let d=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(d=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,d);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class y1{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const d=s.byteOffset||0,h=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(u,d,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(m*g);return c.decodeGltfBuffer(new Uint8Array(y),m,g,_,s.mode,s.filter),y})})}else return null}}class S1{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==si.TRIANGLES&&h.mode!==si.TRIANGLE_STRIP&&h.mode!==si.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],d={};for(const h in c)u.push(this.parser.getDependency("accessor",c[h]).then(m=>(d[h]=m,d[h])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(h=>{const m=h.pop(),g=m.isGroup?m.children:[m],_=h[0].count,y=[];for(const M of g){const E=new pt,S=new Y,x=new Si,L=new Y(1,1,1),b=new My(M.geometry,M.material,_);for(let A=0;A<_;A++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,A),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,A),d.SCALE&&L.fromBufferAttribute(d.SCALE,A),b.setMatrixAt(A,E.compose(S,x,L));for(const A in d)if(A==="_COLOR_0"){const N=d[A];b.instanceColor=new Cd(N.array,N.itemSize,N.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&M.geometry.setAttribute(A,d[A]);Xt.prototype.copy.call(b,M),this.parser.assignFinalMaterial(b),y.push(b)}return m.isGroup?(m.clear(),m.add(...y),m):y[0]}))}}const K_="glTF",da=12,Zg={JSON:1313821514,BIN:5130562};class M1{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,da),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==K_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-da,a=new DataView(e,da);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const d=a.getUint32(c,!0);if(c+=4,d===Zg.JSON){const h=new Uint8Array(e,da+c,u);this.content=i.decode(h)}else if(d===Zg.BIN){const h=da+c;this.body=e.slice(h,h+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class E1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},d={},h={};for(const m in c){const g=Id[m]||m.toLowerCase();u[g]=c[m]}for(const m in e.attributes){const g=Id[m]||m.toLowerCase();if(c[m]!==void 0){const _=i.accessors[e.attributes[m]],y=lo[_.componentType];h[g]=y.name,d[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(y){for(const M in y.attributes){const E=y.attributes[M],S=d[M];S!==void 0&&(E.normalized=S)}g(y)},u,h,Dn,_)})})}}class T1{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class w1{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class $_ extends wa{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,d=u*2,h=u*3,m=s-t,g=(i-t)/m,_=g*g,y=_*g,M=e*h,E=M-h,S=-2*y+3*_,x=y-_,L=1-S,b=x-_+g;for(let A=0;A!==u;A++){const N=c[E+A+u],F=c[E+A+d]*m,U=c[M+A+u],H=c[M+A]*m;a[A]=L*N+b*F+S*U+x*H}return a}}const A1=new Si;class R1 extends $_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return A1.fromArray(a).normalize().toArray(a),a}}const si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qg={9728:In,9729:Zn,9984:a_,9985:ac,9986:ha,9987:tr},Jg={33071:Or,33648:pc,10497:ho},zf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},C1={CUBICSPLINE:void 0,LINEAR:ya,STEP:xa},Hf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function b1(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Sc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sr})),o.DefaultMaterial}function us(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function er(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function P1(o,e,t){let i=!1,s=!1,a=!1;for(let h=0,m=e.length;h<m;h++){const g=e[h];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],d=[];for(let h=0,m=e.length;h<m;h++){const g=e[h];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;d.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d)]).then(function(h){const m=h[0],g=h[1],_=h[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function L1(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function I1(o){let e;const t=o.extensions&&o.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vf(t.attributes):e=o.indices+":"+Vf(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+Vf(o.targets[i]);return e}function Vf(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function Nd(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function N1(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const D1=new pt;class U1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new i1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const d=u.match(/Version\/(\d+)/);s=i&&d?parseInt(d[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new Vy(this.options.manager):this.textureLoader=new Yy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new O_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return us(a,u,s),er(u,s),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(u)})).then(function(){for(const d of u.scenes)d.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,d=c.length;u<d;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const d=this.associations.get(c);d!=null&&this.associations.set(u,d);for(const[h,m]of c.children.entries())a(m,u.children[h])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(_a.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=zf[s.type],u=lo[s.componentType],d=s.normalized===!0,h=new u(s.count*c);return Promise.resolve(new Nn(h,c,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],d=zf[s.type],h=lo[s.componentType],m=h.BYTES_PER_ELEMENT,g=m*d,_=s.byteOffset||0,y=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(y&&y!==g){const x=Math.floor(_/y),L="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let b=t.cache.get(L);b||(E=new h(u,x*y,s.count*y/m),b=new _y(E,y/m),t.cache.add(L,b)),S=new Xd(b,d,_%y/m,M)}else u===null?E=new h(s.count*d):E=new h(u,_,s.count*d),S=new Nn(E,d,M);if(s.sparse!==void 0){const x=zf.SCALAR,L=lo[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,N=new L(c[1],b,s.sparse.count*x),F=new h(c[2],A,s.sparse.count*d);u!==null&&(S=new Nn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,H=N.length;U<H;U++){const P=N[U];if(S.setX(P,F[U*d]),d>=2&&S.setY(P,F[U*d+1]),d>=3&&S.setZ(P,F[U*d+2]),d>=4&&S.setW(P,F[U*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const d=i.manager.getHandler(c.uri);d!==null&&(u=d)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],d=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||u.name||"",m.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(m.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return m.magFilter=Qg[_.magFilter]||Zn,m.minFilter=Qg[_.minFilter]||tr,m.wrapS=Jg[_.wrapS]||ho,m.wrapT=Jg[_.wrapT]||ho,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==In&&m.minFilter!==Zn,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let d=c.uri||"",h=!1;if(c.bufferView!==void 0)d=i.getDependency("bufferView",c.bufferView).then(function(g){h=!0;const _=new Blob([g],{type:c.mimeType});return d=u.createObjectURL(_),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(d).then(function(g){return new Promise(function(_,y){let M=_;t.isImageBitmapLoader===!0&&(M=function(E){const S=new dn(E);S.needsUpdate=!0,_(S)}),t.load(_a.resolveURL(g,a.path),M,void 0,y)})}).then(function(g){return h===!0&&u.revokeObjectURL(d),er(g,c),g.userData.mimeType=c.mimeType||N1(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[St.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const d=a.associations.get(c);c=a.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,d)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let d=this.cache.get(u);d||(d=new N_,Li.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(u,d)),i=d}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let d=this.cache.get(u);d||(d=new Yd,Li.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(u,d)),i=d}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let d=this.cache.get(u);d||(d=i.clone(),a&&(d.vertexColors=!0),c&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(u,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return Sc}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},d=a.extensions||{},h=[];if(d[St.KHR_MATERIALS_UNLIT]){const g=s[St.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),h.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new st(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],Dn),u.opacity=_[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(u,"map",g.baseColorTexture,fn)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=Pi);const m=a.alphaMode||Hf.OPAQUE;if(m===Hf.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===Hf.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==ms&&(h.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new wt(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==ms&&(h.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==ms){const g=a.emissiveFactor;u.emissive=new st().setRGB(g[0],g[1],g[2],Dn)}return a.emissiveTexture!==void 0&&c!==ms&&h.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,fn)),Promise.all(h).then(function(){const g=new c(u);return a.name&&(g.name=a.name),er(g,a),t.associations.set(g,{materials:e}),a.extensions&&us(s,g,a),g})}createUniqueName(e){const t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(d){return e_(d,u,t)})}const c=[];for(let u=0,d=e.length;u<d;u++){const h=e[u],m=I1(h),g=s[m];if(g)c.push(g.promise);else{let _;h.extensions&&h.extensions[St.KHR_DRACO_MESH_COMPRESSION]?_=a(h):_=e_(new Ei,h,t),s[m]={primitive:h,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d].material===void 0?b1(this.cache):this.getDependency("material",c[d].material);u.push(m)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(d){const h=d.slice(0,d.length-1),m=d[d.length-1],g=[];for(let y=0,M=m.length;y<M;y++){const E=m[y],S=c[y];let x;const L=h[y];if(S.mode===si.TRIANGLES||S.mode===si.TRIANGLE_STRIP||S.mode===si.TRIANGLE_FAN||S.mode===void 0)x=a.isSkinnedMesh===!0?new xy(E,L):new Gn(E,L),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===si.TRIANGLE_STRIP?x.geometry=$g(x.geometry,__):S.mode===si.TRIANGLE_FAN&&(x.geometry=$g(x.geometry,Ad));else if(S.mode===si.LINES)x=new I_(E,L);else if(S.mode===si.LINE_STRIP)x=new Kd(E,L);else if(S.mode===si.LINE_LOOP)x=new wy(E,L);else if(S.mode===si.POINTS)x=new Ay(E,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&L1(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),er(x,a),S.extensions&&us(s,x,S),t.assignFinalMaterial(x),g.push(x)}for(let y=0,M=g.length;y<M;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return a.extensions&&us(s,g[0],a),g[0];const _=new ir;a.extensions&&us(s,_,a),t.associations.set(_,{meshes:e});for(let y=0,M=g.length;y<M;y++)_.add(g[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ln(Fr.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Zd(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),er(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],d=[];for(let h=0,m=c.length;h<m;h++){const g=c[h];if(g){u.push(g);const _=new pt;a!==null&&_.fromArray(a.array,h*16),d.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new jd(u,d)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],d=[],h=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const y=s.channels[g],M=s.samplers[y.sampler],E=y.target,S=E.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,L=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",L)),h.push(M),m.push(E))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(d),Promise.all(h),Promise.all(m)]).then(function(g){const _=g[0],y=g[1],M=g[2],E=g[3],S=g[4],x=[];for(let L=0,b=_.length;L<b;L++){const A=_[L],N=y[L],F=M[L],U=E[L],H=S[L];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const P=i._createAnimationTracks(A,N,F,U,H);if(P)for(let C=0;C<P.length;C++)x.push(P[C])}return new Uy(a,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let d=0,h=s.weights.length;d<h;d++)u.morphTargetInfluences[d]=s.weights[d]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let h=0,m=u.length;h<m;h++)c.push(i.getDependency("node",u[h]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),d]).then(function(h){const m=h[0],g=h[1],_=h[2];_!==null&&m.traverse(function(y){y.isSkinnedMesh&&y.bind(_,D1)});for(let y=0,M=g.length;y<M;y++)m.add(g[y]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&u.push(d),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){u.push(h)}),this.nodeCache[e]=Promise.all(u).then(function(h){let m;if(a.isBone===!0?m=new P_:h.length>1?m=new ir:h.length===1?m=h[0]:m=new Xt,m!==h[0])for(let g=0,_=h.length;g<_;g++)m.add(h[g]);if(a.name&&(m.userData.name=a.name,m.name=c),er(m,a),a.extensions&&us(i,m,a),a.matrix!==void 0){const g=new pt;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new ir;i.name&&(a.name=s.createUniqueName(i.name)),er(a,i),i.extensions&&us(t,a,i);const c=i.nodes||[],u=[];for(let d=0,h=c.length;d<h;d++)u.push(s.getDependency("node",c[d]));return Promise.all(u).then(function(d){for(let m=0,g=d.length;m<g;m++)a.add(d[m]);const h=m=>{const g=new Map;for(const[_,y]of s.associations)(_ instanceof Li||_ instanceof dn)&&g.set(_,y);return m.traverse(_=>{const y=s.associations.get(_);y!=null&&g.set(_,y)}),g};return s.associations=h(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,d=[];Dr[a.path]===Dr.weights?e.traverse(function(_){_.morphTargetInfluences&&d.push(_.name?_.name:_.uuid)}):d.push(u);let h;switch(Dr[a.path]){case Dr.weights:h=vo;break;case Dr.rotation:h=xo;break;case Dr.position:case Dr.scale:h=yo;break;default:switch(i.itemSize){case 1:h=vo;break;case 2:case 3:default:h=yo;break}break}const m=s.interpolation!==void 0?C1[s.interpolation]:ya,g=this._getArrayFromAccessor(i);for(let _=0,y=d.length;_<y;_++){const M=new h(d[_]+"."+Dr[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Nd(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof xo?R1:$_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function F1(o,e,t){const i=e.attributes,s=new Ni;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],d=u.min,h=u.max;if(d!==void 0&&h!==void 0){if(s.set(new Y(d[0],d[1],d[2]),new Y(h[0],h[1],h[2])),u.normalized){const m=Nd(lo[u.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new Y,d=new Y;for(let h=0,m=a.length;h<m;h++){const g=a[h];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const E=Nd(lo[_.componentType]);d.multiplyScalar(E)}u.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Di;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function e_(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(d){o.setAttribute(u,d)})}for(const c in i){const u=Id[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return Tt.workingColorSpace!==Dn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Tt.workingColorSpace}" not supported.`),er(o,e),F1(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?P1(o,e.targets,t):o})}function O1(o){const e=new Map,t=new Map,i=o.clone();return Z_(o,i,function(s,a){e.set(a,s),t.set(s,a)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const a=s,c=e.get(s),u=c.skeleton.bones;a.skeleton=c.skeleton.clone(),a.bindMatrix.copy(c.bindMatrix),a.skeleton.bones=u.map(function(d){return t.get(d)}),a.bind(a.skeleton,a.bindMatrix)}),i}function Z_(o,e,t){t(o,e);for(let i=0;i<o.children.length;i++)Z_(o.children[i],e.children[i],t)}const k1={spine:["Spine","Spine1"],neck:["Neck","Head"],head:["Head","Jaw"],leftUpperArm:["LeftArm","LeftForeArm"],leftForearm:["LeftForeArm","LeftHand"],leftHand:["LeftHand","LeftHandMiddle1"],rightUpperArm:["RightArm","RightForeArm"],rightForearm:["RightForeArm","RightHand"],rightHand:["RightHand","RightHandMiddle1"],leftUpperLeg:["LeftUpLeg","LeftLeg"],leftLowerLeg:["LeftLeg","LeftFoot"],rightUpperLeg:["RightUpLeg","RightLeg"],rightLowerLeg:["RightLeg","RightFoot"],leftIndex:["LeftHandIndex1","LeftHandIndex2"],leftIndexTip:["LeftHandIndex2","LeftHandIndex3"],leftMiddle:["LeftHandMiddle1","LeftHandMiddle2"],leftMiddleTip:["LeftHandMiddle2","LeftHandMiddle3"],leftRing:["LeftHandRing1","LeftHandRing2"],leftRingTip:["LeftHandRing2","LeftHandRing3"],leftPinky:["LeftHandPinky1","LeftHandPinky2"],leftPinkyTip:["LeftHandPinky2","LeftHandPinky3"],leftThumb:["LeftHandThumb1","LeftHandThumb2"],leftThumbTip:["LeftHandThumb2","LeftHandThumb3"],rightIndex:["RightHandIndex1","RightHandIndex2"],rightIndexTip:["RightHandIndex2","RightHandIndex3"],rightMiddle:["RightHandMiddle1","RightHandMiddle2"],rightMiddleTip:["RightHandMiddle2","RightHandMiddle3"],rightRing:["RightHandRing1","RightHandRing2"],rightRingTip:["RightHandRing2","RightHandRing3"],rightPinky:["RightHandPinky1","RightHandPinky2"],rightPinkyTip:["RightHandPinky2","RightHandPinky3"],rightThumb:["RightHandThumb1","RightHandThumb2"],rightThumbTip:["RightHandThumb2","RightHandThumb3"]},Qt=(o,e,t=0)=>new Y(o,e,t);let oc;function B1(){return oc||(oc=new Promise((o,e)=>{const t=new URL("/",window.location.origin);new n1().load(new URL("models/mpfb.glb",t).href,i=>o(i.scene),void 0,e)}).catch(o=>{throw oc=null,o})),oc}function z1(o,e,t){if(!o.value)return o.value=e.clone(),o.time=t,o.derivative=0,o.value;const i=Math.max((t-o.time)/1e3,1/120),s=o.value.angleTo(e)/i,a=1-Math.exp(-2*Math.PI*1*i);o.derivative+=a*(s-o.derivative);const c=1.2+.035*o.derivative;return o.value.slerp(e,1-Math.exp(-2*Math.PI*c*i)),o.time=t,o.value}function H1(o,e,t){if(!o.value)return o.value=e.clone(),o.time=t,o.derivative=0,o.value;const i=Math.max((t-o.time)/1e3,1/120),s=o.value.distanceTo(e)/i,a=1-Math.exp(-2*Math.PI*1*i);o.derivative+=a*(s-o.derivative);const c=1.2+.035*o.derivative;return o.value.lerp(e,1-Math.exp(-2*Math.PI*c*i)),o.time=t,o.value}function t_(o){const e=new ir;o.add(e);const t=new ir;e.add(t);const i=new Map,s=new Map,a={},c=new Map;let u=null,d=null,h={height:100,weight:50,skinTone:"#c88c68",clothing:"#7c79ff"};const m=B1().then(L=>{const b=O1(L);t.add(b),b.traverse(H=>{H.isMesh&&(H.castShadow=!0,H.receiveShadow=!0,H.material&&(H.material=Array.isArray(H.material)?H.material.map(P=>P.clone()):H.material.clone()))});const A=new Ni().setFromObject(b),N=A.getSize(new Y),F=3.25/Math.max(N.y,.001);b.scale.multiplyScalar(F),b.position.y=-A.min.y*F-1.68,b.position.x=-(A.min.x+A.max.x)*.5*F,b.position.z=-(A.min.z+A.max.z)*.5*F,b.updateMatrixWorld(!0);const U=new Map;b.traverse(H=>{H.name&&U.set(H.name,H)});for(const[H,[P,C]]of Object.entries(k1)){const z=U.get(P),ae=U.get(C);if(!z||!ae)throw new Error(`Rig bone is missing: ${P} or ${C}`);z.updateWorldMatrix(!0,!1),ae.updateWorldMatrix(!0,!1);const J=z.getWorldPosition(new Y),ge=ae.getWorldPosition(new Y).sub(J).normalize();i.set(H,{bone:z,restDirection:ge,restWorldQuaternion:z.getWorldQuaternion(new Si)})}return S(h),M(u,d),b});function g(L,b,A){const N=L==null?void 0:L[b];return!N||(N.visibility??1)<.2?A:Qt((N.x-.5)*3.1,(.56-N.y)*3.35,Fr.clamp(-N.z*1.4,-.65,.65))}function _(L,b,A,N){const F=L==null?void 0:L[A];if(F&&(F.visibility??1)>=.2){const U=g(L,A,N);return c.set(b,U),U}return c.get(b)??N}function y(L,b,A,N){const F=i.get(L);if(!F)return;const U=A.clone().sub(b).normalize();if(U.lengthSq()<.01)return;const P=new Si().setFromUnitVectors(F.restDirection,U).multiply(F.restWorldQuaternion);F.bone.parent.updateWorldMatrix(!0,!1);const z=F.bone.parent.getWorldQuaternion(new Si).invert().multiply(P),ae=s.get(L)??{};s.set(L,ae),F.bone.quaternion.copy(z1(ae,z,N)),F.bone.updateWorldMatrix(!1,!0)}function M(L,b=null){if(u=L,d=b,!i.size)return;const A={leftShoulder:Qt(.39,.98),rightShoulder:Qt(-.39,.98),leftElbow:Qt(.55,.68),rightElbow:Qt(-.55,.68),leftWrist:Qt(.6,.36),rightWrist:Qt(-.6,.36),leftHip:Qt(.2,0),rightHip:Qt(-.2,0),leftKnee:Qt(.21,-.76),rightKnee:Qt(-.21,-.76),leftAnkle:Qt(.21,-1.5),rightAnkle:Qt(-.21,-1.5),leftEar:Qt(.08,1.48),rightEar:Qt(-.08,1.48),leftEye:Qt(.04,1.53),rightEye:Qt(-.04,1.53),leftMouth:Qt(.02,1.43),rightMouth:Qt(-.02,1.43)},N=(be,Xe)=>_(L,be,Xe,A[be]),F=N("leftShoulder",11),U=N("rightShoulder",12),H=N("leftElbow",13),P=N("rightElbow",14),C=N("leftWrist",15),z=N("rightWrist",16),ae=N("leftEar",7),J=N("rightEar",8),me=N("leftEye",2),ge=N("rightEye",5),fe=N("leftMouth",9),he=N("rightMouth",10),k=N("leftHip",23),de=N("rightHip",24),oe=N("leftKnee",25),O=N("rightKnee",26),ie=N("leftAnkle",27),ke=N("rightAnkle",28),Z=F.clone().add(U).multiplyScalar(.5),pe=k.clone().add(de).multiplyScalar(.5),Te=Qt(Fr.clamp(pe.x,-1.4,1.4),Fr.clamp(pe.y,-.35,.55),Fr.clamp(pe.z,-.5,.5)),xe=performance.now();e.position.copy(H1(a,Te,xe)),[["spine",pe,Z],["neck",Z,ae.clone().add(J).multiplyScalar(.5)],["head",me.clone().add(ge).multiplyScalar(.5),fe.clone().add(he).multiplyScalar(.5)],["leftUpperArm",F,H],["leftForearm",H,C],["rightUpperArm",U,P],["rightForearm",P,z],["leftUpperLeg",k,oe],["leftLowerLeg",oe,ie],["rightUpperLeg",de,O],["rightLowerLeg",O,ke]].forEach(([be,Xe,Ct])=>y(be,Xe,Ct,xe)),E("left",b==null?void 0:b.left,xe),E("right",b==null?void 0:b.right,xe)}function E(L,b,A){if(!b||b.length<21)return;const N=b.map(U=>Qt((U.x-.5)*3.1,(.56-U.y)*3.35,Fr.clamp(-U.z*1.4,-.65,.65)));y(`${L}Hand`,N[0],N[9],A),[["Index",5],["Middle",9],["Ring",13],["Pinky",17],["Thumb",1]].forEach(([U,H])=>{const P=`${L}${U}`;y(P,N[H],N[H+1],A),y(`${P}Tip`,N[H+1],N[H+2],A)})}function S(L){var N;h={...h,...L};const b=h.height/100,A=.82+h.weight/100*.36;t.scale.set(A,b,A),t.position.y=1.68*(b-1);for(const F of t.children)(N=F.traverse)==null||N.call(F,U=>{if(!U.isMesh||!U.material)return;(Array.isArray(U.material)?U.material:[U.material]).forEach(P=>{P.name==="Human.body"&&P.color&&P.color.set(h.skinTone),P.name==="Human.female_casualsuit01"&&P.color&&P.color.set(h.clothing)})});i.size&&M(u,d)}function x(){u=null,d=null,c.clear(),s.clear(),a.value=null,e.position.set(0,0,0),M(null,null)}return{root:e,ready:m,update:M,configure:S,reset:x}}function V1(o){const t=new Map;let i=0;const s=t_(o);t.set(i++,{avatar:s,center:null,velocity:{x:0,y:0},lastSeen:performance.now(),misses:0});function a(h){const m=[h==null?void 0:h[23],h==null?void 0:h[24]].filter(y=>y&&y.visibility>=.2),g=[h==null?void 0:h[11],h==null?void 0:h[12]].filter(y=>y&&y.visibility>=.2),_=m.length?m:g;return _.length?{x:_.reduce((y,M)=>y+M.x,0)/_.length,y:_.reduce((y,M)=>y+M.y,0)/_.length}:null}function c(h,m=[]){const g=(Array.isArray(h)?h:h?[h]:[]).map((S,x)=>({landmarks:S,index:x,center:a(S)})).filter(S=>S.center),_=performance.now(),y=[];t.forEach((S,x)=>{if(!S.center)return;const L=Math.max((_-S.lastSeen)/1e3,1/120),b={x:S.center.x+S.velocity.x*L,y:S.center.y+S.velocity.y*L};g.forEach((A,N)=>{y.push({id:x,detectionIndex:N,distance:Math.hypot(A.center.x-b.x,A.center.y-b.y)})})}),y.sort((S,x)=>S.distance-x.distance);const M=new Map,E=new Set;y.forEach(({id:S,detectionIndex:x,distance:L})=>{L>.4||M.has(S)||E.has(x)||(M.set(S,x),E.add(x))}),t.forEach((S,x)=>{if(S.center||g.length===0||E.size>=g.length)return;const L=g.findIndex((b,A)=>!E.has(A));L<0||(M.set(x,L),E.add(L))}),g.forEach((S,x)=>{if(E.has(x)||t.size>=4)return;const L=t_(o),b=i++;t.set(b,{avatar:L,center:null,velocity:{x:0,y:0},lastSeen:_,misses:0}),M.set(b,x),E.add(x)}),t.forEach((S,x)=>{const L=M.get(x);if(L===void 0){S.misses+=1,x!==0&&_-S.lastSeen>1500&&(o.remove(S.avatar.root),t.delete(x));return}const b=g[L],A=Math.max((_-S.lastSeen)/1e3,1/120);if(S.center){const N=(b.center.x-S.center.x)/A,F=(b.center.y-S.center.y)/A;S.velocity.x=Fr.clamp(N,-2,2),S.velocity.y=Fr.clamp(F,-2,2)}S.center=b.center,S.lastSeen=_,S.misses=0,S.avatar.update(b.landmarks,m[b.index]??null)})}function u(h){t.forEach(m=>m.avatar.configure(h))}function d(){t.forEach((h,m)=>{if(m!==0){o.remove(h.avatar.root),t.delete(m);return}h.avatar.reset(),h.center=null,h.velocity={x:0,y:0},h.lastSeen=performance.now(),h.misses=0})}return{root:s.root,ready:s.ready,update:c,configure:u,reset:d}}const G1=[[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[25,27],[27,29],[29,31],[27,31],[24,26],[26,28],[28,30],[30,32],[28,32],[0,11],[0,12]],W1=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];function X1({stageRef:o,renderFps:e}){return q.jsxs("div",{className:"stage",ref:o,children:[q.jsx("div",{className:"stage-vignette"}),q.jsxs("div",{className:"stage-caption",children:[q.jsx("span",{className:"status-dot"})," LIVE STAGE ",q.jsx("span",{className:"caption-divider",children:"/"})," 01"]}),q.jsxs("div",{className:"stage-bottom",children:[q.jsx("span",{children:"FRONT VIEW"}),q.jsxs("span",{className:"stage-bottom-center",children:["FORM ",q.jsx("i",{children:"STUDIO"})]}),q.jsxs("span",{children:["3D VIEWPORT ",q.jsx("b",{children:"·"})," ",e||"--"," FPS"]})]})]})}function j1({videoRef:o,canvasRef:e,fps:t,latency:i,engine:s,status:a,poseDetected:c,cameraDevices:u,cameraDeviceId:d,onCameraChange:h}){return q.jsxs("section",{className:"preview-card",children:[q.jsxs("div",{className:"preview-media",children:[q.jsx("video",{ref:o,autoPlay:!0,muted:!0,playsInline:!0}),q.jsx("canvas",{ref:e}),a!=="active"&&q.jsxs("div",{className:"preview-empty",children:[q.jsx("div",{className:"preview-empty-icon",children:q.jsx(X_,{size:19})}),q.jsx("span",{children:"Camera preview"}),q.jsx("small",{children:a==="loading"?"Allow camera access to continue":"Waiting for camera"})]}),q.jsxs("div",{className:"preview-label",children:[q.jsx("span",{className:"recording-dot"})," LIVE PREVIEW"]}),q.jsxs("div",{className:"preview-stats",children:[q.jsxs("span",{children:[q.jsx($w,{size:12})," ",t," ",q.jsx("small",{children:"FPS"})]}),q.jsx("i",{}),q.jsx("span",{children:i?`${Math.round(i)} ms`:"-- ms"}),q.jsx("i",{}),q.jsxs("span",{children:[q.jsx(Yw,{size:12})," ",s]})]}),q.jsx("button",{className:"expand-button","aria-label":"Expand preview",children:q.jsx(Kw,{size:14})})]}),q.jsxs("div",{className:"preview-footer",children:[q.jsxs("span",{children:[q.jsx(Qw,{size:14})," Pose tracking"]}),q.jsxs("span",{className:`tracking-state ${a==="active"&&!c?"searching":""}`,children:[a!=="active"?"Ready":c?"Person found":"Finding person"," ",q.jsx("span",{})]})]}),u.length>1&&q.jsxs("div",{className:"preview-device-row",children:[q.jsx("label",{htmlFor:"camera-device",children:"CAMERA INPUT"}),q.jsx("select",{id:"camera-device","aria-label":"Camera input",value:d,onChange:m=>h(m.target.value),children:u.map((m,g)=>q.jsx("option",{value:m.deviceId,children:m.label||`Camera ${g+1}`},m.deviceId))})]})]})}function q1(o){return(o==null?void 0:o.name)==="NotAllowedError"||(o==null?void 0:o.name)==="SecurityError"?"Camera access is blocked. Use the site controls beside the address bar to allow camera access for this site, then reload and try again. Also check your device privacy settings.":(o==null?void 0:o.name)==="NotFoundError"||(o==null?void 0:o.name)==="DevicesNotFoundError"?"No camera was found. Connect or enable a webcam, then try again.":(o==null?void 0:o.name)==="NotReadableError"||(o==null?void 0:o.name)==="TrackStartError"?"The camera is already in use or unavailable. Close other camera apps and try again.":(o==null?void 0:o.name)==="TimeoutError"?"Camera permission is still pending. Allow camera access in the browser prompt or site controls, then try again.":o instanceof Error?o.message:"Camera could not be started."}function Y1(){const o=["localhost","127.0.0.1","::1"].includes(window.location.hostname),e="Local server",t=dt.useRef(null),i=dt.useRef(null),s=dt.useRef(null),a=dt.useRef(null),c=dt.useRef(null),u=dt.useRef(!1),d=dt.useRef(!1),h=dt.useRef(0),m=dt.useRef(null),g=dt.useRef(!1),_=dt.useRef(null),y=dt.useRef({landmarks:null,last:0}),M=dt.useRef(0),[E,S]=dt.useState("device"),[x,L]=dt.useState("lite"),[b,A]=dt.useState(1),[N,F]=dt.useState("idle"),[U,H]=dt.useState("CPU"),[P,C]=dt.useState(0),[z,ae]=dt.useState(0),[J,me]=dt.useState(0),[ge,fe]=dt.useState(!1),[he,k]=dt.useState(""),[de,oe]=dt.useState(!1),[O,ie]=dt.useState({height:100,weight:50,skinTone:"#c88c68",clothing:"#7c79ff"}),[ke,Z]=dt.useState("disconnected"),[pe,Te]=dt.useState([]),[xe,Ce]=dt.useState("");dt.useEffect(()=>{const $e=t.current;if(!$e)return;let Be,Ze;try{const ve=new gy;ve.background=new st("#101219"),ve.fog=new Wd("#101219",7,17);const Pe=new Ln(36,1,.1,100);Pe.position.set(0,1.35,7.5),Pe.lookAt(0,.45,0),Be=new Vw({antialias:!0,alpha:!1}),Be.setPixelRatio(Math.min(window.devicePixelRatio,2)),Be.shadowMap.enabled=!0,Be.shadowMap.type=i_,Be.outputColorSpace=fn,Be.toneMapping=s_,Be.toneMappingExposure=1.12,$e.prepend(Be.domElement),ve.add(new Gy("#d9e3ff","#25222b",2.1));const Le=new Pd("#fff0df",3.2);Le.position.set(-3.5,5,4),Le.castShadow=!0,Le.shadow.mapSize.set(1024,1024),ve.add(Le);const I=new Pd("#8c92ff",1.7);I.position.set(4,2,2),ve.add(I);const w=new k_("#d677a0",9,8);w.position.set(0,3.5,-2.4),ve.add(w);const K=new Gn(new Ta(30,30),new Sc({color:"#171a22",roughness:.82,metalness:.08}));K.rotation.x=-Math.PI/2,K.position.y=-1.7,K.receiveShadow=!0,ve.add(K);const ue=new sS(16,32,"#44445a","#282b35");ue.position.y=-1.685,ue.material.transparent=!0,ue.material.opacity=.38,ve.add(ue);const ee=V1(ve);_.current=ee,ee.configure(O),ee.ready.catch(re=>{k(`Could not load the rigged 3D avatar: ${re instanceof Error?re.message:String(re)}`)});const ce=()=>{const re=$e.clientWidth||1,Ue=$e.clientHeight||1;Pe.aspect=re/Ue,Pe.position.z=re<700?8.6:7.5,Pe.updateProjectionMatrix(),Be.setSize(re,Ue)};Ze=new ResizeObserver(ce),Ze.observe($e),ce();let He,Re=performance.now(),Me=0;const tt=()=>{He=requestAnimationFrame(tt),Be.render(ve,Pe),Me+=1;const re=performance.now();re-Re>=500&&(ae(Math.round(Me*1e3/(re-Re))),Re=re,Me=0)};return tt(),()=>{cancelAnimationFrame(He),Ze==null||Ze.disconnect(),Be.dispose(),$e.removeChild(Be.domElement),ve.traverse(re=>{re.geometry&&re.geometry.dispose(),re.material&&(Array.isArray(re.material)?re.material:[re.material]).forEach(Ue=>Ue.dispose())})}}catch(ve){k(`Could not create the 3D stage: ${ve instanceof Error?ve.message:String(ve)}`);return}},[]),dt.useEffect(()=>{var $e;($e=_.current)==null||$e.configure(O)},[O]);const be=dt.useCallback(($e,Be=null)=>{const Ze=i.current,ve=s.current;if(!Ze||!ve)return;const Pe=ve.getContext("2d");if(!Pe)return;const Le=Ze.videoWidth||640,I=Ze.videoHeight||480;(ve.width!==Le||ve.height!==I)&&(ve.width=Le,ve.height=I),Pe.clearRect(0,0,ve.width,ve.height),$e&&(Pe.save(),Pe.translate(ve.width,0),Pe.scale(-1,1),Pe.lineCap="round",Pe.lineJoin="round",Pe.strokeStyle="rgba(147, 133, 255, .86)",Pe.lineWidth=Math.max(2,ve.width/280),G1.forEach(([w,K])=>{const ue=$e[w],ee=$e[K];!ue||!ee||ue.visibility<.25||ee.visibility<.25||(Pe.beginPath(),Pe.moveTo(ue.x*ve.width,ue.y*ve.height),Pe.lineTo(ee.x*ve.width,ee.y*ve.height),Pe.stroke())}),$e.forEach(w=>{w.visibility<.35||(Pe.beginPath(),Pe.fillStyle="#d9d4ff",Pe.arc(w.x*ve.width,w.y*ve.height,Math.max(2.2,ve.width/230),0,Math.PI*2),Pe.fill())}),[Be==null?void 0:Be.left,Be==null?void 0:Be.right].filter(Boolean).forEach(w=>{Pe.strokeStyle="rgba(255, 202, 135, .92)",Pe.lineWidth=Math.max(1.5,ve.width/360),W1.forEach(([K,ue])=>{const ee=w[K],ce=w[ue];!ee||!ce||(Pe.beginPath(),Pe.moveTo(ee.x*ve.width,ee.y*ve.height),Pe.lineTo(ce.x*ve.width,ce.y*ve.height),Pe.stroke())}),w.forEach(K=>{Pe.beginPath(),Pe.fillStyle="#ffe5c4",Pe.arc(K.x*ve.width,K.y*ve.height,Math.max(1.5,ve.width/340),0,Math.PI*2),Pe.fill()})}),Pe.restore())},[]);dt.useEffect(()=>{if(N!=="active")return;let $e;const Be=()=>{be(y.current.landmarks,y.current.hands),$e=requestAnimationFrame(Be)};return $e=requestAnimationFrame(Be),()=>cancelAnimationFrame($e)},[be,N]);const Xe=dt.useCallback(()=>{var $e,Be,Ze;h.current+=1,($e=m.current)==null||$e.call(m),m.current=null,(Be=c.current)==null||Be.getTracks().forEach(ve=>ve.stop()),c.current=null,i.current&&(i.current.srcObject=null),a.current&&(a.current.terminate(),a.current=null),u.current=!1,d.current=!1,y.current.landmarks=null,y.current.hands=null,fe(!1),(Ze=_.current)==null||Ze.reset(),be(null),F("idle"),Z("disconnected")},[be]),Ct=dt.useCallback(async()=>{var Be,Ze;k(""),F("loading");const $e=++h.current;try{if(!((Be=navigator.mediaDevices)!=null&&Be.getUserMedia))throw new Error("Camera access requires HTTPS or localhost.");const ve=(await navigator.mediaDevices.enumerateDevices()).filter(Me=>Me.kind==="videoinput"&&Me.deviceId);if($e!==h.current)return;Te(ve);const Pe=g.current?ve.find(Me=>Me.deviceId===xe):ve.find(Me=>!/(virtual|obs|snap camera|manycam|droidcam|iriun)/i.test(Me.label))??ve[0],Le=Pe==null?void 0:Pe.deviceId;let I,w;const K=new Promise((Me,tt)=>{w=()=>tt(new Error("Camera startup was cancelled."))});m.current=w;const ue=new Promise((Me,tt)=>{I=window.setTimeout(()=>{const re=new Error("Camera permission request timed out.");re.name="TimeoutError",tt(re)},2e4)});let ee;try{const Me=navigator.mediaDevices.getUserMedia({audio:!1,video:{...Le?{deviceId:{exact:Le}}:{facingMode:"user"},width:{ideal:640},height:{ideal:480},frameRate:{ideal:30,max:30}}}).then(tt=>$e!==h.current?(tt.getTracks().forEach(re=>re.stop()),null):tt);ee=await Promise.race([Me,ue,K])}finally{window.clearTimeout(I),m.current===w&&(m.current=null)}if($e!==h.current||!ee){ee==null||ee.getTracks().forEach(Me=>Me.stop());return}c.current=ee;const ce=i.current;if(!ce)throw new Error("Camera preview is unavailable.");if(ce.srcObject=ee,await ce.play(),$e!==h.current){ee.getTracks().forEach(Me=>Me.stop());return}const He=(Ze=ee.getVideoTracks()[0])==null?void 0:Ze.getSettings().deviceId,Re=(await navigator.mediaDevices.enumerateDevices()).filter(Me=>Me.kind==="videoinput"&&Me.deviceId);if($e!==h.current){ee.getTracks().forEach(Me=>Me.stop());return}if(Te(Re),He&&Ce(He),E==="device"){const Me=new Worker("/pose.worker.js");a.current=Me;const tt=async()=>{if(!(!c.current||!i.current||a.current!==Me)){if(!u.current&&i.current.readyState>=2){u.current=!0;try{const re=await createImageBitmap(i.current,{resizeWidth:480,resizeHeight:Math.round(480*i.current.videoHeight/i.current.videoWidth)||360,resizeQuality:"low"});Me.postMessage({type:"frame",bitmap:re,timestamp:performance.now()},[re])}catch(re){u.current=!1,k(`Could not process camera frame: ${re instanceof Error?re.message:String(re)}`)}}c.current&&a.current===Me&&requestAnimationFrame(tt)}};Me.onmessage=({data:re})=>{var Ue;if(re.type==="ready")H(`${re.engine} · ${re.model}`),F("active"),requestAnimationFrame(tt);else if(re.type==="pose"){u.current=!1,me(re.latency);const Je=performance.now();y.current.last&&C(Math.round(1e3/(Je-y.current.last))),y.current.last=Je,y.current.landmarks=re.landmarks,y.current.hands=re.hands,fe(!!re.landmarks),(Ue=_.current)==null||Ue.update(re.poses??(re.landmarks?[re.landmarks]:[]),re.handsByPose??[re.hands]),be(re.landmarks,re.hands)}else re.type==="error"&&(u.current=!1,k(`Pose tracking failed: ${re.message}`),Xe())},Me.onerror=re=>{k(`Pose worker failed: ${re.message}`),Xe()},Me.postMessage({type:"init",model:x,people:b}),F("loading")}else await Ft()}catch(ve){if($e!==h.current)return;Xe(),F("idle"),k(q1(ve))}},[xe,b,be,x,Xe,E]),gt=dt.useCallback($e=>{g.current=!0,N!=="idle"&&Xe(),Ce($e),k("Camera input changed. Start the camera to use the selected device.")},[N,Xe]);async function Ft(){const $e=i.current;if(!$e)throw new Error("Camera preview is unavailable.");const Be=window.location.protocol==="https:"?"wss:":"ws:",ve=`${o?`${Be}//${window.location.hostname}:8000`:`${Be}//${window.location.host}`}/ws/pose?model=${encodeURIComponent(x)}&people=${b}`,Pe=new WebSocket(ve);Z("connecting"),await new Promise((ue,ee)=>{Pe.onopen=ue,Pe.onerror=()=>ee(new Error(o?"Could not connect to the local pose server at ws://localhost:8000. Start the Python server and try again.":"Could not connect to the Hugging Face Space pose server. Check that the Space is awake, then try again."))}),Z("connected"),F("active"),Pe.onmessage=ue=>{var He;const ee=JSON.parse(ue.data);if(d.current=!1,ee.error){k(`Local pose tracking failed: ${ee.error}`);return}me(ee.latency_ms||0),H(`${ee.engine||"CPU"} · ${ee.model||x}`);const ce=performance.now();M.current&&C(Math.round(1e3/(ce-M.current))),M.current=ce,y.current.landmarks=ee.landmarks,y.current.hands=ee.hands,fe(!!ee.landmarks),(He=_.current)==null||He.update(ee.poses??(ee.landmarks?[ee.landmarks]:[]),ee.hands_by_pose??[ee.hands]),be(ee.landmarks,ee.hands)},Pe.onclose=()=>{c.current&&(Z("disconnected"),k("The local pose server disconnected."))},a.current={terminate:()=>Pe.close()};const Le=document.createElement("canvas"),I=Le.getContext("2d");let w=0;const K=()=>{if(!c.current||Pe.readyState!==WebSocket.OPEN)return;const ue=performance.now();!d.current&&ue-w>15&&$e.readyState>=2&&(w=ue,d.current=!0,Le.width=480,Le.height=Math.round(480*$e.videoHeight/$e.videoWidth)||360,I==null||I.drawImage($e,0,0,Le.width,Le.height),Le.toBlob(async ee=>{if(!ee||Pe.readyState!==WebSocket.OPEN){d.current=!1;return}const ce=await ee.arrayBuffer();Pe.readyState===WebSocket.OPEN?Pe.send(ce):d.current=!1},"image/jpeg",.72)),requestAnimationFrame(K)};requestAnimationFrame(K)}dt.useEffect(()=>()=>Xe(),[Xe]);const V=($e,Be)=>ie(Ze=>({...Ze,[$e]:Be}));return q.jsxs("main",{className:"app-shell",children:[q.jsxs("header",{className:"topbar",children:[q.jsxs("a",{className:"brand",href:"#","aria-label":"Form home",children:[q.jsxs("span",{className:"brand-mark",children:[q.jsx("span",{}),q.jsx("span",{}),q.jsx("span",{}),q.jsx("span",{})]}),q.jsxs("span",{className:"brand-name",children:["form",q.jsx("span",{children:"."})]}),q.jsx("span",{className:"brand-divider"}),q.jsx("span",{className:"brand-product",children:"LIVE AVATAR STUDIO"})]}),q.jsxs("div",{className:"header-controls",children:[q.jsxs("div",{className:"privacy-toggle",role:"group","aria-label":"Pose processing mode",children:[q.jsxs("button",{className:E==="device"?"selected":"",onClick:()=>{N==="idle"&&S("device")},children:[q.jsx("span",{className:"privacy-dot device"}),"On-device"]}),o&&q.jsxs("button",{className:E==="server"?"selected":"",onClick:()=>{N==="idle"&&S("server")},children:[q.jsx("span",{className:"privacy-dot server"}),e]})]}),q.jsxs("label",{className:"model-picker",children:[q.jsx("span",{children:"POSE"}),q.jsxs("select",{value:x,onChange:$e=>L($e.target.value),disabled:N!=="idle","aria-label":"Pose model",children:[q.jsx("option",{value:"lite",children:"Lite · fastest"}),q.jsx("option",{value:"full",children:"Full · balanced"}),q.jsx("option",{value:"heavy",children:"Heavy · quality"})]})]}),q.jsxs("label",{className:"model-picker people-picker",children:[q.jsx("span",{children:"PEOPLE"}),q.jsxs("select",{value:b,onChange:$e=>A(Number($e.target.value)),disabled:N!=="idle","aria-label":"People to track",children:[q.jsx("option",{value:1,children:"1 · fastest"}),q.jsx("option",{value:2,children:"2 people"}),q.jsx("option",{value:3,children:"3 people"}),q.jsx("option",{value:4,children:"4 people"})]})]}),q.jsxs("button",{className:"body-button",onClick:()=>oe(!de),children:[q.jsx(t1,{size:15})," Body shape ",q.jsx(jw,{size:13,className:de?"rotate-icon":""})]}),q.jsx("button",{className:`camera-button ${N==="active"?"is-live":""}`,onClick:N==="active"||N==="loading"?Xe:Ct,children:N==="active"?q.jsxs(q.Fragment,{children:[q.jsx("span",{className:"button-record-dot"}),"Stop camera"]}):N==="loading"?q.jsxs(q.Fragment,{children:[q.jsx("span",{className:"spinner"}),"Cancel"]}):q.jsxs(q.Fragment,{children:[q.jsx(X_,{size:15}),"Start camera"]})})]})]}),q.jsxs("div",{className:"workspace",children:[q.jsxs("aside",{className:"sidebar",children:[q.jsx("div",{className:"side-label",children:"YOUR WORKSPACE"}),q.jsxs("button",{className:"side-item active",children:[q.jsx("span",{className:"side-item-icon",children:q.jsx(Zw,{size:16})}),q.jsx("span",{children:"Live stage"}),q.jsx("span",{className:"side-count",children:"01"})]}),q.jsxs("button",{className:"side-item",onClick:()=>oe(!de),children:[q.jsx("span",{className:"side-item-icon",children:q.jsx(q_,{size:16})}),q.jsx("span",{children:"Appearance"})]}),q.jsx("div",{className:"side-separator"}),q.jsx("div",{className:"side-label setup-label",children:"QUICK SETUP"}),q.jsxs("div",{className:"setup-card",children:[q.jsx("div",{className:"setup-icon",children:q.jsx(e1,{size:16})}),q.jsx("div",{className:"setup-title",children:N==="active"?"You’re all set":"Ready when you are"}),q.jsx("p",{children:N==="active"?"Your avatar is following your movement.":"Start your camera to bring your avatar to life."}),q.jsxs("div",{className:"setup-progress",children:[q.jsx("span",{className:N==="active"?"completed":""}),q.jsx("span",{}),q.jsx("span",{})]}),q.jsxs("div",{className:"setup-steps",children:[q.jsx("span",{children:"Camera"}),q.jsx("span",{children:"Pose"}),q.jsx("span",{children:"Move"})]})]}),q.jsxs("div",{className:"sidebar-bottom",children:[q.jsxs("button",{className:"help-button",children:[q.jsx(qw,{size:15})," Help & shortcuts ",q.jsx("span",{children:"?"})]}),"        ",q.jsxs("div",{className:"privacy-note",children:[q.jsx("span",{className:"lock-icon",children:"✳"}),q.jsxs("span",{children:[q.jsx("b",{children:"Your movement stays yours."}),q.jsx("br",{}),E==="device"?"Pose inference runs locally on CPU.":o?"Frames are sent only to localhost.":"Live frames are sent to this private Space for inference."]})]})]})]}),q.jsxs("section",{className:"main-stage",children:[q.jsx(X1,{stageRef:t,renderFps:z}),q.jsxs("div",{className:"stage-toolbar",children:[q.jsx("button",{"aria-label":"Reset view",title:"Reset view",children:q.jsx(j_,{size:14})}),q.jsx("span",{}),q.jsx("button",{"aria-label":"Stage settings",title:"Stage settings",children:q.jsx(Jw,{size:15})})]}),q.jsxs("div",{className:"stage-status",children:[q.jsx("span",{className:N==="active"?ge?"connected":"searching-dot":""}),N==="active"?ge?"PERSON DETECTED · TRACKING LIVE":"CAMERA LIVE · CENTER YOUR FULL BODY":N==="loading"?"REQUESTING CAMERA PERMISSION":"AWAITING CAMERA"]}),q.jsx(j1,{videoRef:i,canvasRef:s,fps:P,latency:J,engine:U,status:N,poseDetected:ge,cameraDevices:pe,cameraDeviceId:xe,onCameraChange:gt}),he&&q.jsxs("div",{className:"error-toast",role:"alert",children:[q.jsx("span",{children:he}),q.jsx("button",{onClick:()=>k(""),"aria-label":"Dismiss error",children:q.jsx(Y_,{size:15})})]}),de&&q.jsx(K1,{settings:O,updateSetting:V,close:()=>oe(!1)})]})]}),q.jsxs("footer",{className:"app-footer",children:[q.jsxs("span",{children:["FORM STUDIO ",q.jsx("b",{children:"v1.0"})]}),q.jsxs("span",{children:[q.jsx("span",{className:"footer-dot"})," ",E==="device"?"PRIVATE BY DESIGN · CPU":ke==="connected"?`${o?"LOCAL":"SPACE"} SERVER CONNECTED`:`${o?"LOCAL":"SPACE"} SERVER MODE`," ",q.jsx("i",{children:"·"})," NO RECORDING"]}),q.jsxs("span",{children:["MADE FOR MOVEMENT ",q.jsx("span",{className:"footer-spark",children:"✳"})]})]})]})}function K1({settings:o,updateSetting:e,close:t}){const i=["#e7b997","#c88c68","#995f45","#704636","#e3c5a1","#a87659"],s=["#7c79ff","#e27d91","#69b9a2","#e8a34c","#5686c9","#d2d3dc"];return q.jsxs("div",{className:"custom-card",children:[q.jsxs("div",{className:"card-title",children:[q.jsxs("span",{children:[q.jsx(q_,{size:14})," Appearance"]}),q.jsx("button",{onClick:t,"aria-label":"Close customization",children:q.jsx(Y_,{size:15})})]}),q.jsx("p",{className:"card-subtitle",children:"Make your avatar feel like you."}),q.jsxs("label",{className:"range-label",children:[q.jsx("span",{children:"Height"}),q.jsxs("b",{children:[o.height,q.jsx("small",{children:"%"})]})]}),q.jsx("input",{type:"range",min:"70",max:"130",value:o.height,onChange:a=>e("height",Number(a.target.value))}),q.jsxs("label",{className:"range-label weight-label",children:[q.jsx("span",{children:"Body build"}),q.jsxs("b",{children:[o.weight,q.jsx("small",{children:"%"})]})]}),q.jsx("input",{type:"range",min:"10",max:"100",value:o.weight,onChange:a=>e("weight",Number(a.target.value))}),q.jsxs("div",{className:"swatch-group",children:[q.jsx("span",{children:"Skin tone"}),q.jsx("div",{children:i.map(a=>q.jsx("button",{"aria-label":`Skin tone ${a}`,className:o.skinTone===a?"active":"",style:{background:a},onClick:()=>e("skinTone",a),children:o.skinTone===a&&q.jsx(Kg,{size:12})},a))})]}),q.jsxs("div",{className:"swatch-group clothing-group",children:[q.jsx("span",{children:"Top color"}),q.jsx("div",{children:s.map(a=>q.jsx("button",{"aria-label":`Top color ${a}`,className:o.clothing===a?"active":"",style:{background:a},onClick:()=>e("clothing",a),children:o.clothing===a&&q.jsx(Kg,{size:12})},a))})]}),q.jsxs("button",{className:"reset-button",onClick:()=>{e("height",100),e("weight",50),e("skinTone","#c88c68"),e("clothing","#7c79ff")},children:[q.jsx(j_,{size:12})," Reset appearance"]})]})}z0.createRoot(document.getElementById("root")).render(q.jsx(D0.StrictMode,{children:q.jsx(Y1,{})}));
