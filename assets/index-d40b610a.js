(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Kr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const K={},yt=[],ke=()=>{},ps=()=>!1,hs=/^on[^a-z]/,Hn=e=>hs.test(e),Vr=e=>e.startsWith("onUpdate:"),ee=Object.assign,Xr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gs=Object.prototype.hasOwnProperty,$=(e,t)=>gs.call(e,t),R=Array.isArray,xt=e=>Yn(e)==="[object Map]",Ui=e=>Yn(e)==="[object Set]",L=e=>typeof e=="function",te=e=>typeof e=="string",qr=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",Bi=e=>q(e)&&L(e.then)&&L(e.catch),Hi=Object.prototype.toString,Yn=e=>Hi.call(e),vs=e=>Yn(e).slice(8,-1),Yi=e=>Yn(e)==="[object Object]",Gr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,En=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bs=/-(\w)/g,Ne=Wn(e=>e.replace(bs,(t,n)=>n?n.toUpperCase():"")),ys=/\B([A-Z])/g,Pt=Wn(e=>e.replace(ys,"-$1").toLowerCase()),Kn=Wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),lr=Wn(e=>e?`on${Kn(e)}`:""),Kt=(e,t)=>!Object.is(e,t),fr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ma;const wr=()=>Ma||(Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?As(r):Jr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(q(e))return e}}const ws=/;(?![^(]*\))/g,_s=/:([^]+)/,ks=/\/\*[^]*?\*\//g;function As(e){const t={};return e.replace(ks,"").split(ws).forEach(n=>{if(n){const r=n.split(_s);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Vn(e){let t="";if(te(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Vn(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Os="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Es=Kr(Os);function Wi(e){return!!e||e===""}const Cs=e=>te(e)?e:e==null?"":R(e)||q(e)&&(e.toString===Hi||!L(e.toString))?JSON.stringify(e,Ki,2):String(e),Ki=(e,t)=>t&&t.__v_isRef?Ki(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ui(t)?{[`Set(${t.size})`]:[...t.values()]}:q(t)&&!R(t)&&!Yi(t)?String(t):t;let ye;class Ps{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ss(e,t=ye){t&&t.active&&t.effects.push(e)}function Ts(){return ye}const Zr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Vi=e=>(e.w&qe)>0,Xi=e=>(e.n&qe)>0,Is=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},Ns=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Vi(a)&&!Xi(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},_r=new WeakMap;let jt=0,qe=1;const kr=30;let xe;const lt=Symbol(""),Ar=Symbol("");class Qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ss(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Ve=!0,qe=1<<++jt,jt<=kr?Is(this):Fa(this),this.fn()}finally{jt<=kr&&Ns(this),qe=1<<--jt,xe=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(Fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Fa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const qi=[];function St(){qi.push(Ve),Ve=!1}function Tt(){const e=qi.pop();Ve=e===void 0?!0:e}function de(e,t,n){if(Ve&&xe){let r=_r.get(e);r||_r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Zr()),Gi(a)}}function Gi(e,t){let n=!1;jt<=kr?Xi(e)||(e.n|=qe,n=!Vi(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function De(e,t,n,r,a,i){const o=_r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Gr(n)&&s.push(o.get("length")):(s.push(o.get(lt)),xt(e)&&s.push(o.get(Ar)));break;case"delete":R(e)||(s.push(o.get(lt)),xt(e)&&s.push(o.get(Ar)));break;case"set":xt(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&Or(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Or(Zr(l))}}function Or(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Ra(r);for(const r of n)r.computed||Ra(r)}function Ra(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ms=Kr("__proto__,__v_isRef,__isVue"),Ji=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(qr)),Fs=ea(),Rs=ea(!1,!0),Ls=ea(!0),La=js();function js(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=U(this)[t].apply(this,n);return Tt(),r}}),e}function Ds(e){const t=U(this);return de(t,"has",e),t.hasOwnProperty(e)}function ea(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?el:no:t?to:eo).get(r))return r;const o=R(r);if(!e){if(o&&$(La,a))return Reflect.get(La,a,i);if(a==="hasOwnProperty")return Ds}const s=Reflect.get(r,a,i);return(qr(a)?Ji.has(a):Ms(a))||(e||de(r,"get",a),t)?s:se(s)?o&&Gr(a)?s:s.value:q(s)?e?ro(s):ra(s):s}}const zs=Zi(),$s=Zi(!0);function Zi(e=!1){return function(n,r,a,i){let o=n[r];if(At(o)&&se(o)&&!se(a))return!1;if(!e&&(!Fn(a)&&!At(a)&&(o=U(o),a=U(a)),!R(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=R(n)&&Gr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Kt(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Us(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Bs(e,t){const n=Reflect.has(e,t);return(!qr(t)||!Ji.has(t))&&de(e,"has",t),n}function Hs(e){return de(e,"iterate",R(e)?"length":lt),Reflect.ownKeys(e)}const Qi={get:Fs,set:zs,deleteProperty:Us,has:Bs,ownKeys:Hs},Ys={get:Ls,set(e,t){return!0},deleteProperty(e,t){return!0}},Ws=ee({},Qi,{get:Rs,set:$s}),ta=e=>e,Xn=e=>Reflect.getPrototypeOf(e);function un(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=Xn(a),s=r?ta:n?ia:Vt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function dn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function mn(e,t=!1){return e=e.__v_raw,!t&&de(U(e),"iterate",lt),Reflect.get(e,"size",e)}function ja(e){e=U(e);const t=U(this);return Xn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Da(e,t){t=U(t);const n=U(this),{has:r,get:a}=Xn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Kt(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function za(e){const t=U(this),{has:n,get:r}=Xn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function $a(){const e=U(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function pn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?ta:e?ia:Vt;return!e&&de(s,"iterate",lt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function hn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=xt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ta:t?ia:Vt;return!t&&de(i,"iterate",l?Ar:lt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Ks(){const e={get(i){return un(this,i)},get size(){return mn(this)},has:dn,add:ja,set:Da,delete:za,clear:$a,forEach:pn(!1,!1)},t={get(i){return un(this,i,!1,!0)},get size(){return mn(this)},has:dn,add:ja,set:Da,delete:za,clear:$a,forEach:pn(!1,!0)},n={get(i){return un(this,i,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:pn(!0,!1)},r={get(i){return un(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return dn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:pn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=hn(i,!1,!1),n[i]=hn(i,!0,!1),t[i]=hn(i,!1,!0),r[i]=hn(i,!0,!0)}),[e,n,t,r]}const[Vs,Xs,qs,Gs]=Ks();function na(e,t){const n=t?e?Gs:qs:e?Xs:Vs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Js={get:na(!1,!1)},Zs={get:na(!1,!0)},Qs={get:na(!0,!1)},eo=new WeakMap,to=new WeakMap,no=new WeakMap,el=new WeakMap;function tl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nl(e){return e.__v_skip||!Object.isExtensible(e)?0:tl(vs(e))}function ra(e){return At(e)?e:aa(e,!1,Qi,Js,eo)}function rl(e){return aa(e,!1,Ws,Zs,to)}function ro(e){return aa(e,!0,Ys,Qs,no)}function aa(e,t,n,r,a){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=nl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function wt(e){return At(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function At(e){return!!(e&&e.__v_isReadonly)}function Fn(e){return!!(e&&e.__v_isShallow)}function ao(e){return wt(e)||At(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function io(e){return Mn(e,"__v_skip",!0),e}const Vt=e=>q(e)?ra(e):e,ia=e=>q(e)?ro(e):e;function oo(e){Ve&&xe&&(e=U(e),Gi(e.dep||(e.dep=Zr())))}function so(e,t){e=U(e);const n=e.dep;n&&Or(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function al(e){return il(e,!1)}function il(e,t){return se(e)?e:new ol(e,t)}class ol{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Vt(t)}get value(){return oo(this),this._value}set value(t){const n=this.__v_isShallow||Fn(t)||At(t);t=n?t:U(t),Kt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Vt(t),so(this))}}function sl(e){return se(e)?e.value:e}const ll={get:(e,t,n)=>sl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function lo(e){return wt(e)?e:new Proxy(e,ll)}class fl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Qr(t,()=>{this._dirty||(this._dirty=!0,so(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return oo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function cl(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=ke):(r=e.get,a=e.set),new fl(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){qn(i,t,n)}return a}function Ae(e,t,n,r){if(L(e)){const i=Xe(e,t,n,r);return i&&Bi(i)&&i.catch(o=>{qn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ae(e[i],t,n,r));return a}function qn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}ul(e,n,a,r)}function ul(e,t,n,r=!0){console.error(e)}let Xt=!1,Er=!1;const oe=[];let Te=0;const _t=[];let Re=null,rt=0;const fo=Promise.resolve();let oa=null;function dl(e){const t=oa||fo;return e?t.then(this?e.bind(this):e):t}function ml(e){let t=Te+1,n=oe.length;for(;t<n;){const r=t+n>>>1;qt(oe[r])<e?t=r+1:n=r}return t}function sa(e){(!oe.length||!oe.includes(e,Xt&&e.allowRecurse?Te+1:Te))&&(e.id==null?oe.push(e):oe.splice(ml(e.id),0,e),co())}function co(){!Xt&&!Er&&(Er=!0,oa=fo.then(mo))}function pl(e){const t=oe.indexOf(e);t>Te&&oe.splice(t,1)}function hl(e){R(e)?_t.push(...e):(!Re||!Re.includes(e,e.allowRecurse?rt+1:rt))&&_t.push(e),co()}function Ua(e,t=Xt?Te+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function uo(e){if(_t.length){const t=[...new Set(_t)];if(_t.length=0,Re){Re.push(...t);return}for(Re=t,Re.sort((n,r)=>qt(n)-qt(r)),rt=0;rt<Re.length;rt++)Re[rt]();Re=null,rt=0}}const qt=e=>e.id==null?1/0:e.id,gl=(e,t)=>{const n=qt(e)-qt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function mo(e){Er=!1,Xt=!0,oe.sort(gl);const t=ke;try{for(Te=0;Te<oe.length;Te++){const n=oe[Te];n&&n.active!==!1&&Xe(n,null,14)}}finally{Te=0,oe.length=0,uo(),Xt=!1,oa=null,(oe.length||_t.length)&&mo()}}function vl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||K;v&&(a=n.map(_=>te(_)?_.trim():_)),m&&(a=n.map(xs))}let s,l=r[s=lr(t)]||r[s=lr(Ne(t))];!l&&i&&(l=r[s=lr(Pt(t))]),l&&Ae(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ae(c,e,6,a)}}function po(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=po(c,t,!0);d&&(s=!0,ee(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(q(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ee(o,i),q(e)&&r.set(e,o),o)}function Gn(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Pt(t))||$(e,t))}let ge=null,ho=null;function Rn(e){const t=ge;return ge=e,ho=e&&e.type.__scopeId||null,t}function bl(e,t=ge,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Qa(-1);const i=Rn(t);let o;try{o=e(...a)}finally{Rn(i),r._d&&Qa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function cr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:_,ctx:j,inheritAttrs:N}=e;let z,k;const O=Rn(e);try{if(n.shapeFlag&4){const S=a||r;z=Se(d.call(S,S,m,i,_,v,j)),k=l}else{const S=t;z=Se(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),k=t.props?l:yl(l)}}catch(S){Bt.length=0,qn(S,e,1),z=re(ct)}let M=z;if(k&&N!==!1){const S=Object.keys(k),{shapeFlag:B}=M;S.length&&B&7&&(o&&S.some(Vr)&&(k=xl(k,o)),M=Ot(M,k))}return n.dirs&&(M=Ot(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),z=M,Rn(O),z}const yl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},xl=(e,t)=>{const n={};for(const r in e)(!Vr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function wl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ba(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Gn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ba(r,o,c):!0:!!o;return!1}function Ba(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Gn(n,i))return!0}return!1}function _l({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const kl=e=>e.__isSuspense;function Al(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):hl(e)}const gn={};function Cn(e,t,n){return go(e,t,n)}function go(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){var s;const l=Ts()===((s=ne)==null?void 0:s.scope)?ne:null;let c,d=!1,m=!1;if(se(e)?(c=()=>e.value,d=Fn(e)):wt(e)?(c=()=>e,r=!0):R(e)?(m=!0,d=e.some(S=>wt(S)||Fn(S)),c=()=>e.map(S=>{if(se(S))return S.value;if(wt(S))return it(S);if(L(S))return Xe(S,l,2)})):L(e)?t?c=()=>Xe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ae(e,l,3,[_])}:c=ke,t&&r){const S=c;c=()=>it(S())}let v,_=S=>{v=O.onStop=()=>{Xe(S,l,4)}},j;if(Jt)if(_=ke,t?n&&Ae(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const S=kf();j=S.__watcherHandles||(S.__watcherHandles=[])}else return ke;let N=m?new Array(e.length).fill(gn):gn;const z=()=>{if(O.active)if(t){const S=O.run();(r||d||(m?S.some((B,ae)=>Kt(B,N[ae])):Kt(S,N)))&&(v&&v(),Ae(t,l,3,[S,N===gn?void 0:m&&N[0]===gn?[]:N,_]),N=S)}else O.run()};z.allowRecurse=!!t;let k;a==="sync"?k=z:a==="post"?k=()=>ue(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),k=()=>sa(z));const O=new Qr(c,k);t?n?z():N=O.run():a==="post"?ue(O.run.bind(O),l&&l.suspense):O.run();const M=()=>{O.stop(),l&&l.scope&&Xr(l.scope.effects,O)};return j&&j.push(M),M}function Ol(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?vo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=ne;Et(this);const s=go(a,i.bind(r),n);return o?Et(o):ft(),s}function vo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function it(e,t){if(!q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))it(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)it(e[n],t);else if(Ui(e)||xt(e))e.forEach(n=>{it(n,t)});else if(Yi(e))for(const n in e)it(e[n],t);return e}function Ha(e,t){const n=ge;if(n===null)return e;const r=er(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=K]=t[i];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&it(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(St(),Ae(l,n,8,[e.el,s,e,t]),Tt())}}function bo(e,t){return L(e)?(()=>ee({name:e.name},t,{setup:e}))():e}const Pn=e=>!!e.type.__asyncLoader,yo=e=>e.type.__isKeepAlive;function El(e,t){xo(e,"a",t)}function Cl(e,t){xo(e,"da",t)}function xo(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Jn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)yo(a.parent.vnode)&&Pl(r,t,n,a),a=a.parent}}function Pl(e,t,n,r){const a=Jn(t,e,r,!0);wo(()=>{Xr(r[t],a)},n)}function Jn(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;St(),Et(n);const s=Ae(t,n,e,o);return ft(),Tt(),s});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=ne)=>(!Jt||e==="sp")&&Jn(e,(...r)=>t(...r),n),Sl=Be("bm"),Tl=Be("m"),Il=Be("bu"),Nl=Be("u"),Ml=Be("bum"),wo=Be("um"),Fl=Be("sp"),Rl=Be("rtg"),Ll=Be("rtc");function jl(e,t=ne){Jn("ec",e,t)}const _o="components";function Dl(e,t){return $l(_o,e,!0,t)||e}const zl=Symbol.for("v-ndc");function $l(e,t,n=!0,r=!1){const a=ge||ne;if(a){const i=a.type;if(e===_o){const s=yf(i,!1);if(s&&(s===t||s===Ne(t)||s===Kn(Ne(t))))return i}const o=Ya(a[e]||i[e],t)||Ya(a.appContext[e],t);return!o&&r?i:o}}function Ya(e,t){return e&&(e[t]||e[Ne(t)]||e[Kn(Ne(t))])}const Cr=e=>e?Mo(e)?er(e)||e.proxy:Cr(e.parent):null,Ut=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cr(e.parent),$root:e=>Cr(e.root),$emit:e=>e.emit,$options:e=>la(e),$forceUpdate:e=>e.f||(e.f=()=>sa(e.update)),$nextTick:e=>e.n||(e.n=dl.bind(e.proxy)),$watch:e=>Ol.bind(e)}),ur=(e,t)=>e!==K&&!e.__isScriptSetup&&$(e,t),Ul={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(ur(r,t))return o[t]=1,r[t];if(a!==K&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==K&&$(n,t))return o[t]=4,n[t];Pr&&(o[t]=0)}}const d=Ut[t];let m,v;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return ur(a,t)?(a[t]=n,!0):r!==K&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&$(e,o)||ur(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Ut,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Wa(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Pr=!0;function Bl(e){const t=la(e),n=e.proxy,r=e.ctx;Pr=!1,t.beforeCreate&&Ka(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:_,updated:j,activated:N,deactivated:z,beforeDestroy:k,beforeUnmount:O,destroyed:M,unmounted:S,render:B,renderTracked:ae,renderTriggered:ie,errorCaptured:ve,serverPrefetch:he,expose:Me,inheritAttrs:Nt,components:sn,directives:ln,filters:ir}=t;if(c&&Hl(c,r,null),o)for(const G in o){const Y=o[G];L(Y)&&(r[G]=Y.bind(n))}if(a){const G=a.call(n,n);q(G)&&(e.data=ra(G))}if(Pr=!0,i)for(const G in i){const Y=i[G],Qe=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):ke,fn=!L(Y)&&L(Y.set)?Y.set.bind(n):ke,et=Le({get:Qe,set:fn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>et.value,set:Oe=>et.value=Oe})}if(s)for(const G in s)ko(s[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Y=>{ql(Y,G[Y])})}d&&Ka(d,e,"c");function le(G,Y){R(Y)?Y.forEach(Qe=>G(Qe.bind(n))):Y&&G(Y.bind(n))}if(le(Sl,m),le(Tl,v),le(Il,_),le(Nl,j),le(El,N),le(Cl,z),le(jl,ve),le(Ll,ae),le(Rl,ie),le(Ml,O),le(wo,S),le(Fl,he),R(Me))if(Me.length){const G=e.exposed||(e.exposed={});Me.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:Qe=>n[Y]=Qe})})}else e.exposed||(e.exposed={});B&&e.render===ke&&(e.render=B),Nt!=null&&(e.inheritAttrs=Nt),sn&&(e.components=sn),ln&&(e.directives=ln)}function Hl(e,t,n=ke){R(e)&&(e=Sr(e));for(const r in e){const a=e[r];let i;q(a)?"default"in a?i=Sn(a.from||r,a.default,!0):i=Sn(a.from||r):i=Sn(a),se(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ka(e,t,n){Ae(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ko(e,t,n,r){const a=r.includes(".")?vo(n,r):()=>n[r];if(te(e)){const i=t[e];L(i)&&Cn(a,i)}else if(L(e))Cn(a,e.bind(n));else if(q(e))if(R(e))e.forEach(i=>ko(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Cn(a,i,e)}}function la(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Ln(l,c,o,!0)),Ln(l,t,o)),q(t)&&i.set(t,l),l}function Ln(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Ln(e,i,n,!0),a&&a.forEach(o=>Ln(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Yl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Yl={data:Va,props:Xa,emits:Xa,methods:Dt,computed:Dt,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:Dt,directives:Dt,watch:Kl,provide:Va,inject:Wl};function Va(e,t){return t?e?function(){return ee(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Wl(e,t){return Dt(Sr(e),Sr(t))}function Sr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?ee(Object.create(null),e,t):t}function Xa(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:ee(Object.create(null),Wa(e),Wa(t??{})):t}function Kl(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function Ao(){return{app:null,config:{isNativeTag:ps,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vl=0;function Xl(e,t){return function(r,a=null){L(r)||(r=ee({},r)),a!=null&&!q(a)&&(a=null);const i=Ao(),o=new Set;let s=!1;const l=i.app={_uid:Vl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Af,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=re(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,er(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){jn=l;try{return c()}finally{jn=null}}};return l}}let jn=null;function ql(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function Sn(e,t,n=!1){const r=ne||ge;if(r||jn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:jn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Gl(e,t,n,r=!1){const a={},i={};Mn(i,Qn,1),e.propsDefaults=Object.create(null),Oo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:rl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Jl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Gn(e.emitsOptions,v))continue;const _=t[v];if(l)if($(i,v))_!==i[v]&&(i[v]=_,c=!0);else{const j=Ne(v);a[j]=Tr(l,s,j,_,e,!1)}else _!==i[v]&&(i[v]=_,c=!0)}}}else{Oo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Pt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Tr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function Oo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(En(l))continue;const c=t[l];let d;a&&$(a,d=Ne(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Gn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Tr(a,l,m,c[m],e,!$(c,m))}}return o}function Tr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Et(a),r=c[n]=l.call(null,t),ft())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Pt(n))&&(r=!0))}return r}function Eo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,_]=Eo(m,t,!0);ee(o,v),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return q(e)&&r.set(e,yt),yt;if(R(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);qa(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Ne(d);if(qa(m)){const v=i[d],_=o[m]=R(v)||L(v)?{type:v}:ee({},v);if(_){const j=Za(Boolean,_.type),N=Za(String,_.type);_[0]=j>-1,_[1]=N<0||j<N,(j>-1||$(_,"default"))&&s.push(m)}}}const c=[o,s];return q(e)&&r.set(e,c),c}function qa(e){return e[0]!=="$"}function Ga(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ja(e,t){return Ga(e)===Ga(t)}function Za(e,t){return R(t)?t.findIndex(n=>Ja(n,e)):L(t)&&Ja(t,e)?0:-1}const Co=e=>e[0]==="_"||e==="$stable",fa=e=>R(e)?e.map(Se):[Se(e)],Zl=(e,t,n)=>{if(t._n)return t;const r=bl((...a)=>fa(t(...a)),n);return r._c=!1,r},Po=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Co(a))continue;const i=e[a];if(L(i))t[a]=Zl(a,i,r);else if(i!=null){const o=fa(i);t[a]=()=>o}}},So=(e,t)=>{const n=fa(t);e.slots.default=()=>n},Ql=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Mn(t,"_",n)):Po(t,e.slots={})}else e.slots={},t&&So(e,t);Mn(e.slots,Qn,1)},ef=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ee(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Po(t,a)),o=t}else t&&(So(e,t),o={default:1});if(i)for(const s in a)!Co(s)&&!(s in o)&&delete a[s]};function Ir(e,t,n,r,a=!1){if(R(e)){e.forEach((v,_)=>Ir(v,t&&(R(t)?t[_]:t),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?er(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,$(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),L(l))Xe(l,s,12,[o,d]);else{const v=te(l),_=se(l);if(v||_){const j=()=>{if(e.f){const N=v?$(m,l)?m[l]:d[l]:l.value;a?R(N)&&Xr(N,i):R(N)?N.includes(i)||N.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,ue(j,n)):j()}}}const ue=Al;function tf(e){return nf(e)}function nf(e,t){const n=wr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:_=ke,insertStaticContent:j}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ft(f,u)&&(g=cn(f),Oe(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:C}=u;switch(b){case Zn:z(f,u,p,g);break;case ct:k(f,u,p,g);break;case dr:f==null&&O(u,p,g,A);break;case Pe:sn(f,u,p,g,h,x,A,y,w);break;default:C&1?B(f,u,p,g,h,x,A,y,w):C&6?ln(f,u,p,g,h,x,A,y,w):(C&64||C&128)&&b.process(f,u,p,g,h,x,A,y,w,mt)}T!=null&&h&&Ir(T,f&&f.ref,x,u||f,!u)},z=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=j(f.children,u,p,g,f.el,f.anchor)},M=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},S=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},B=(f,u,p,g,h,x,A,y,w)=>{A=A||u.type==="svg",f==null?ae(u,p,g,h,x,A,y,w):he(f,u,h,x,A,y,w)},ae=(f,u,p,g,h,x,A,y)=>{let w,b;const{type:T,props:C,shapeFlag:I,transition:F,dirs:D}=f;if(w=f.el=o(f.type,x,C&&C.is,C),I&8?d(w,f.children):I&16&&ve(f.children,w,null,g,h,x&&T!=="foreignObject",A,y),D&&tt(f,null,g,"created"),ie(w,f,f.scopeId,A,g),C){for(const H in C)H!=="value"&&!En(H)&&i(w,H,null,C[H],x,f.children,g,h,Fe);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ce(b,g,f)}D&&tt(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;W&&F.beforeEnter(w),r(w,u,p),((b=C&&C.onVnodeMounted)||W||D)&&ue(()=>{b&&Ce(b,g,f),W&&F.enter(w),D&&tt(f,null,g,"mounted")},h)},ie=(f,u,p,g,h)=>{if(p&&_(f,p),g)for(let x=0;x<g.length;x++)_(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ie(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ve=(f,u,p,g,h,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const T=f[b]=y?Ke(f[b]):Se(f[b]);N(null,T,u,p,g,h,x,A,y)}},he=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=u;w|=f.patchFlag&16;const C=f.props||K,I=u.props||K;let F;p&&nt(p,!1),(F=I.onVnodeBeforeUpdate)&&Ce(F,p,u,f),T&&tt(u,f,p,"beforeUpdate"),p&&nt(p,!0);const D=h&&u.type!=="foreignObject";if(b?Me(f.dynamicChildren,b,y,p,g,D,x):A||Y(f,u,y,null,p,g,D,x,!1),w>0){if(w&16)Nt(y,u,C,I,p,g,h);else if(w&2&&C.class!==I.class&&i(y,"class",null,I.class,h),w&4&&i(y,"style",C.style,I.style,h),w&8){const W=u.dynamicProps;for(let H=0;H<W.length;H++){const Z=W[H],be=C[Z],pt=I[Z];(pt!==be||Z==="value")&&i(y,Z,be,pt,h,f.children,p,g,Fe)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Nt(y,u,C,I,p,g,h);((F=I.onVnodeUpdated)||T)&&ue(()=>{F&&Ce(F,p,u,f),T&&tt(u,f,p,"updated")},g)},Me=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],T=w.el&&(w.type===Pe||!Ft(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,T,null,g,h,x,A,!0)}},Nt=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==K)for(const y in p)!En(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,Fe);for(const y in g){if(En(y))continue;const w=g[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,h,x,Fe)}"value"in g&&i(f,"value",p.value,g.value)}},sn=(f,u,p,g,h,x,A,y,w)=>{const b=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,g),r(T,p,g),ve(u.children,p,T,h,x,A,y,w)):C>0&&C&64&&I&&f.dynamicChildren?(Me(f.dynamicChildren,I,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&To(f,u,!0)):Y(f,u,p,T,h,x,A,y,w)},ln=(f,u,p,g,h,x,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):ir(u,p,g,h,x,A,w):Ca(f,u,w)},ir=(f,u,p,g,h,x,A)=>{const y=f.component=pf(f,g,h);if(yo(f)&&(y.ctx.renderer=mt),hf(y),y.asyncDep){if(h&&h.registerDep(y,le),!f.el){const w=y.subTree=re(ct);k(null,w,u,p)}return}le(y,f,u,p,h,x,A)},Ca=(f,u,p)=>{const g=u.component=f.component;if(wl(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,pl(g.update),g.update();else u.el=f.el,g.vnode=u},le=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:T,bu:C,u:I,parent:F,vnode:D}=f,W=T,H;nt(f,!1),T?(T.el=D.el,G(f,T,A)):T=D,C&&fr(C),(H=T.props&&T.props.onVnodeBeforeUpdate)&&Ce(H,F,T,D),nt(f,!0);const Z=cr(f),be=f.subTree;f.subTree=Z,N(be,Z,m(be.el),cn(be),f,h,x),T.el=Z.el,W===null&&_l(f,Z.el),I&&ue(I,h),(H=T.props&&T.props.onVnodeUpdated)&&ue(()=>Ce(H,F,T,D),h)}else{let T;const{el:C,props:I}=u,{bm:F,m:D,parent:W}=f,H=Pn(u);if(nt(f,!1),F&&fr(F),!H&&(T=I&&I.onVnodeBeforeMount)&&Ce(T,W,u),nt(f,!0),C&&sr){const Z=()=>{f.subTree=cr(f),sr(C,f.subTree,f,h,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=cr(f);N(null,Z,p,g,f,h,x),u.el=Z.el}if(D&&ue(D,h),!H&&(T=I&&I.onVnodeMounted)){const Z=u;ue(()=>Ce(T,W,Z),h)}(u.shapeFlag&256||W&&Pn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ue(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new Qr(y,()=>sa(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,nt(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Jl(f,u.props,g,p),ef(f,u.children,p),St(),Ua(),Tt()},Y=(f,u,p,g,h,x,A,y,w=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,C=u.children,{patchFlag:I,shapeFlag:F}=u;if(I>0){if(I&128){fn(b,C,p,g,h,x,A,y,w);return}else if(I&256){Qe(b,C,p,g,h,x,A,y,w);return}}F&8?(T&16&&Fe(b,h,x),C!==b&&d(p,C)):T&16?F&16?fn(b,C,p,g,h,x,A,y,w):Fe(b,h,x,!0):(T&8&&d(p,""),F&16&&ve(C,p,g,h,x,A,y,w))},Qe=(f,u,p,g,h,x,A,y,w)=>{f=f||yt,u=u||yt;const b=f.length,T=u.length,C=Math.min(b,T);let I;for(I=0;I<C;I++){const F=u[I]=w?Ke(u[I]):Se(u[I]);N(f[I],F,p,null,h,x,A,y,w)}b>T?Fe(f,h,x,!0,!1,C):ve(u,p,g,h,x,A,y,w,C)},fn=(f,u,p,g,h,x,A,y,w)=>{let b=0;const T=u.length;let C=f.length-1,I=T-1;for(;b<=C&&b<=I;){const F=f[b],D=u[b]=w?Ke(u[b]):Se(u[b]);if(Ft(F,D))N(F,D,p,null,h,x,A,y,w);else break;b++}for(;b<=C&&b<=I;){const F=f[C],D=u[I]=w?Ke(u[I]):Se(u[I]);if(Ft(F,D))N(F,D,p,null,h,x,A,y,w);else break;C--,I--}if(b>C){if(b<=I){const F=I+1,D=F<T?u[F].el:g;for(;b<=I;)N(null,u[b]=w?Ke(u[b]):Se(u[b]),p,D,h,x,A,y,w),b++}}else if(b>I)for(;b<=C;)Oe(f[b],h,x,!0),b++;else{const F=b,D=b,W=new Map;for(b=D;b<=I;b++){const me=u[b]=w?Ke(u[b]):Se(u[b]);me.key!=null&&W.set(me.key,b)}let H,Z=0;const be=I-D+1;let pt=!1,Ta=0;const Mt=new Array(be);for(b=0;b<be;b++)Mt[b]=0;for(b=F;b<=C;b++){const me=f[b];if(Z>=be){Oe(me,h,x,!0);continue}let Ee;if(me.key!=null)Ee=W.get(me.key);else for(H=D;H<=I;H++)if(Mt[H-D]===0&&Ft(me,u[H])){Ee=H;break}Ee===void 0?Oe(me,h,x,!0):(Mt[Ee-D]=b+1,Ee>=Ta?Ta=Ee:pt=!0,N(me,u[Ee],p,null,h,x,A,y,w),Z++)}const Ia=pt?rf(Mt):yt;for(H=Ia.length-1,b=be-1;b>=0;b--){const me=D+b,Ee=u[me],Na=me+1<T?u[me+1].el:g;Mt[b]===0?N(null,Ee,p,Na,h,x,A,y,w):pt&&(H<0||b!==Ia[H]?et(Ee,p,Na,2):H--)}}},et=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){et(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,mt);return}if(A===Pe){r(x,u,p);for(let C=0;C<w.length;C++)et(w[C],u,p,g);r(f.anchor,u,p);return}if(A===dr){M(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ue(()=>y.enter(x),h);else{const{leave:C,delayLeave:I,afterLeave:F}=y,D=()=>r(x,u,p),W=()=>{C(x,()=>{D(),F&&F()})};I?I(x,D,W):W()}else r(x,u,p)},Oe=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:C,dirs:I}=f;if(y!=null&&Ir(y,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const F=T&1&&I,D=!Pn(f);let W;if(D&&(W=A&&A.onVnodeBeforeUnmount)&&Ce(W,u,f),T&6)ms(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}F&&tt(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,h,mt,g):b&&(x!==Pe||C>0&&C&64)?Fe(b,u,p,!1,!0):(x===Pe&&C&384||!h&&T&16)&&Fe(w,u,p),g&&Pa(f)}(D&&(W=A&&A.onVnodeUnmounted)||F)&&ue(()=>{W&&Ce(W,u,f),F&&tt(f,null,u,"unmounted")},p)},Pa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===Pe){ds(p,g);return}if(u===dr){S(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,w=()=>A(p,x);y?y(f.el,x,w):w()}else x()},ds=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},ms=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&fr(g),h.stop(),x&&(x.active=!1,Oe(A,f,u,p)),y&&ue(y,u),ue(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Oe(f[A],u,p,g,h)},cn=f=>f.shapeFlag&6?cn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Sa=(f,u,p)=>{f==null?u._vnode&&Oe(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Ua(),uo(),u._vnode=f},mt={p:N,um:Oe,m:et,r:Pa,mt:ir,mc:ve,pc:Y,pbc:Me,n:cn,o:e};let or,sr;return t&&([or,sr]=t(mt)),{render:Sa,hydrate:or,createApp:Xl(Sa,or)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function To(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||To(o,s)),s.type===Zn&&(s.el=o.el)}}function rf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const af=e=>e.__isTeleport,Pe=Symbol.for("v-fgt"),Zn=Symbol.for("v-txt"),ct=Symbol.for("v-cmt"),dr=Symbol.for("v-stc"),Bt=[];let we=null;function gt(e=!1){Bt.push(we=e?null:[])}function of(){Bt.pop(),we=Bt[Bt.length-1]||null}let Gt=1;function Qa(e){Gt+=e}function Io(e){return e.dynamicChildren=Gt>0?we||yt:null,of(),Gt>0&&we&&we.push(e),e}function zt(e,t,n,r,a,i){return Io(Ht(e,t,n,r,a,i,!0))}function sf(e,t,n,r,a){return Io(re(e,t,n,r,a,!0))}function Nr(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Qn="__vInternal",No=({key:e})=>e??null,Tn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||se(e)||L(e)?{i:ge,r:e,k:t,f:!!n}:e:null);function Ht(e,t=null,n=null,r=0,a=null,i=e===Pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&No(t),ref:t&&Tn(t),scopeId:ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ge};return s?(ca(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Gt>0&&!o&&we&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&we.push(l),l}const re=lf;function lf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===zl)&&(e=ct),Nr(e)){const s=Ot(e,t,!0);return n&&ca(s,n),Gt>0&&!i&&we&&(s.shapeFlag&6?we[we.indexOf(e)]=s:we.push(s)),s.patchFlag|=-2,s}if(xf(e)&&(e=e.__vccOpts),t){t=ff(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=Vn(s)),q(l)&&(ao(l)&&!R(l)&&(l=ee({},l)),t.style=Jr(l))}const o=te(e)?1:kl(e)?128:af(e)?64:q(e)?4:L(e)?2:0;return Ht(e,t,n,r,a,o,i,!0)}function ff(e){return e?ao(e)||Qn in e?ee({},e):e:null}function Ot(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?uf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&No(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function cf(e=" ",t=0){return re(Zn,null,e,t)}function mr(e="",t=!1){return t?(gt(),sf(ct,null,e)):re(ct,null,e)}function Se(e){return e==null||typeof e=="boolean"?re(ct):R(e)?re(Pe,null,e.slice()):typeof e=="object"?Ke(e):re(Zn,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function ca(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ca(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Qn in t)?t._ctx=ge:a===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),r&64?(n=16,t=[cf(t)]):n=8);e.children=t,e.shapeFlag|=n}function uf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Vn([t.class,r.class]));else if(a==="style")t.style=Jr([t.style,r.style]);else if(Hn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ce(e,t,n,r=null){Ae(e,t,7,[n,r])}const df=Ao();let mf=0;function pf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||df,i={uid:mf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ps(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eo(r,a),emitsOptions:po(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=vl.bind(null,i),e.ce&&e.ce(i),i}let ne=null,ua,ht,ei="__VUE_INSTANCE_SETTERS__";(ht=wr()[ei])||(ht=wr()[ei]=[]),ht.push(e=>ne=e),ua=e=>{ht.length>1?ht.forEach(t=>t(e)):ht[0](e)};const Et=e=>{ua(e),e.scope.on()},ft=()=>{ne&&ne.scope.off(),ua(null)};function Mo(e){return e.vnode.shapeFlag&4}let Jt=!1;function hf(e,t=!1){Jt=t;const{props:n,children:r}=e.vnode,a=Mo(e);Gl(e,n,a,t),Ql(e,r);const i=a?gf(e,t):void 0;return Jt=!1,i}function gf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=io(new Proxy(e.ctx,Ul));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?bf(e):null;Et(e),St();const i=Xe(r,e,0,[e.props,a]);if(Tt(),ft(),Bi(i)){if(i.then(ft,ft),t)return i.then(o=>{ti(e,o,t)}).catch(o=>{qn(o,e,0)});e.asyncDep=i}else ti(e,i,t)}else Fo(e,t)}function ti(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=lo(t)),Fo(e,n)}let ni;function Fo(e,t,n){const r=e.type;if(!e.render){if(!t&&ni&&!r.render){const a=r.template||la(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ee(ee({isCustomElement:i,delimiters:s},o),l);r.render=ni(a,c)}}e.render=r.render||ke}Et(e),St(),Bl(e),Tt(),ft()}function vf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}}))}function bf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return vf(e)},slots:e.slots,emit:e.emit,expose:t}}function er(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(lo(io(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ut)return Ut[n](e)},has(t,n){return n in t||n in Ut}}))}function yf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function xf(e){return L(e)&&"__vccOpts"in e}const Le=(e,t)=>cl(e,t,Jt);function wf(e,t,n){const r=arguments.length;return r===2?q(t)&&!R(t)?Nr(t)?re(e,null,[t]):re(e,t):re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Nr(n)&&(n=[n]),re(e,t,n))}const _f=Symbol.for("v-scx"),kf=()=>Sn(_f),Af="3.3.4",Of="http://www.w3.org/2000/svg",at=typeof document<"u"?document:null,ri=at&&at.createElement("template"),Ef={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?at.createElementNS(Of,e):at.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>at.createTextNode(e),createComment:e=>at.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>at.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ri.innerHTML=r?`<svg>${e}</svg>`:e;const s=ri.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Cf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Pf(e,t,n){const r=e.style,a=te(n);if(n&&!a){if(t&&!te(t))for(const i in t)n[i]==null&&Mr(r,i,"");for(const i in n)Mr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ai=/\s*!important$/;function Mr(e,t,n){if(R(n))n.forEach(r=>Mr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Sf(e,t);ai.test(n)?e.setProperty(Pt(r),n.replace(ai,""),"important"):e[r]=n}}const ii=["Webkit","Moz","ms"],pr={};function Sf(e,t){const n=pr[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return pr[t]=r;r=Kn(r);for(let a=0;a<ii.length;a++){const i=ii[a]+r;if(i in e)return pr[t]=i}return t}const oi="http://www.w3.org/1999/xlink";function Tf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(oi,t.slice(6,t.length)):e.setAttributeNS(oi,t,n);else{const i=Es(t);n==null||i&&!Wi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function If(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Wi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Nf(e,t,n,r){e.addEventListener(t,n,r)}function Mf(e,t,n,r){e.removeEventListener(t,n,r)}function Ff(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Rf(t);if(r){const c=i[t]=Df(r,a);Nf(e,s,c,l)}else o&&(Mf(e,s,o,l),i[t]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function Rf(e){let t;if(si.test(e)){t={};let r;for(;r=e.match(si);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pt(e.slice(2)),t]}let hr=0;const Lf=Promise.resolve(),jf=()=>hr||(Lf.then(()=>hr=0),hr=Date.now());function Df(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ae(zf(r,n.value),t,5,[r])};return n.value=e,n.attached=jf(),n}function zf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const li=/^on[a-z]/,$f=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Cf(e,r,a):t==="style"?Pf(e,n,r):Hn(t)?Vr(t)||Ff(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Uf(e,t,r,a))?If(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Tf(e,t,r,a))};function Uf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&li.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||li.test(t)&&te(n)?!1:t in e}const fi={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Rt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Rt(e,!0),r.enter(e)):r.leave(e,()=>{Rt(e,!1)}):Rt(e,t))},beforeUnmount(e,{value:t}){Rt(e,t)}};function Rt(e,t){e.style.display=t?e._vod:"none"}const Bf=ee({patchProp:$f},Ef);let ci;function Hf(){return ci||(ci=tf(Bf))}const Yf=(...e)=>{const t=Hf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Wf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Wf(e){return te(e)?document.querySelector(e):e}var Kf=typeof global=="object"&&global&&global.Object===Object&&global;const Vf=Kf;var Xf=typeof self=="object"&&self&&self.Object===Object&&self,qf=Vf||Xf||Function("return this")();const Gf=qf;var Jf=Gf.Symbol;const Dn=Jf;var Ro=Object.prototype,Zf=Ro.hasOwnProperty,Qf=Ro.toString,Lt=Dn?Dn.toStringTag:void 0;function ec(e){var t=Zf.call(e,Lt),n=e[Lt];try{e[Lt]=void 0;var r=!0}catch{}var a=Qf.call(e);return r&&(t?e[Lt]=n:delete e[Lt]),a}var tc=Object.prototype,nc=tc.toString;function rc(e){return nc.call(e)}var ac="[object Null]",ic="[object Undefined]",ui=Dn?Dn.toStringTag:void 0;function da(e){return e==null?e===void 0?ic:ac:ui&&ui in Object(e)?ec(e):rc(e)}function ma(e){return e!=null&&typeof e=="object"}var oc=Array.isArray;const sc=oc;var lc="[object String]";function fc(e){return typeof e=="string"||!sc(e)&&ma(e)&&da(e)==lc}var cc="[object Boolean]";function uc(e){return e===!0||e===!1||ma(e)&&da(e)==cc}var dc="[object Number]";function mc(e){return typeof e=="number"||ma(e)&&da(e)==dc}function di(e){return e===null}function pc(e){return e===void 0}const hc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},gc=bo({props:{modelValue:{type:[String,Boolean,Number],default:void 0},disabled:{type:Boolean,default:!1},activeColor:{type:String,default:"green-1"},disActiveColor:{type:String,default:"gray-3"},trueValue:{type:[String,Number],default:null},falseValue:{type:[String,Number],default:null},label:{type:String,default:"標題文字"},labelColor:{type:String,default:"gray-1"},description:{type:String,default:""},descriptionColor:{type:String,default:"gray-2"},iconDescriptionColor:{type:String,default:"gray-2"},spacing:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const n=Le(()=>({activeColor:`var(--${e.activeColor}-color)`,disactiveColor:`var(--${e.disActiveColor}-color)`,labelColor:`var(--${e.labelColor}-color)`})),r=Le(()=>mc(e.modelValue)||fc(e.modelValue)||pc(e.modelValue)?e.modelValue===e.trueValue:e.modelValue);return{style:n,toggle:()=>{if(!e.disabled){if(uc(e.modelValue))return t("update:modelValue",!r.value);if(di(e.trueValue)||di(e.falseValue))return console.warn("missing required prop.");t("update:modelValue",r.value?e.falseValue:e.trueValue)}},checked:r}}}),vc={class:"gdb-switch__inner"},bc={class:"gdb-switch__switch"},yc={class:"gdb-switch__icon material-icons-outlined"},xc={key:0,class:"gdb-switch__right"},wc=["textContent"],_c={key:1,class:"gdb-switch__description"};function kc(e,t,n,r,a,i){const o=Dl("font-awesome-icon");return gt(),zt("span",{class:Vn(["gdb-switch",{"gdb-switch--checked":e.checked,"gdb-switch--disabled":e.disabled,"gdb-switch--spacing":e.spacing}]),onClick:t[0]||(t[0]=(...s)=>e.toggle&&e.toggle(...s))},[Ht("div",vc,[Ht("div",bc,[Ht("span",yc,[Ha(re(o,{icon:"fa-solid fa-check"},null,512),[[fi,e.checked]]),Ha(re(o,{icon:"fa-solid fa-xmark"},null,512),[[fi,!e.checked]])])])]),e.label||e.description?(gt(),zt("div",xc,[e.label?(gt(),zt("span",{key:0,class:"gdb-switch__label",textContent:Cs(e.label)},null,8,wc)):mr("",!0),e.description?(gt(),zt("div",_c)):mr("",!0)])):mr("",!0)],2)}const mi=hc(gc,[["render",kc]]),Ac={__name:"App",setup(e){const t=al(!0);return(n,r)=>(gt(),zt(Pe,null,[re(mi,{disabled:!0,label:"星期一"}),re(mi,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=a=>t.value=a),label:"星期二"},null,8,["modelValue"])],64))}};function pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pi(Object(n),!0).forEach(function(r){Q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){"@babel/helpers - typeof";return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function Oc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ec(e,t,n){return t&&hi(e.prototype,t),n&&hi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pa(e,t){return Pc(e)||Tc(e,t)||Lo(e,t)||Nc()}function rn(e){return Cc(e)||Sc(e)||Lo(e)||Ic()}function Cc(e){if(Array.isArray(e))return Fr(e)}function Pc(e){if(Array.isArray(e))return e}function Sc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Lo(e,t){if(e){if(typeof e=="string")return Fr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fr(e,t)}}function Fr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ic(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gi=function(){},ha={},jo={},Do=null,zo={mark:gi,measure:gi};try{typeof window<"u"&&(ha=window),typeof document<"u"&&(jo=document),typeof MutationObserver<"u"&&(Do=MutationObserver),typeof performance<"u"&&(zo=performance)}catch{}var Mc=ha.navigator||{},vi=Mc.userAgent,bi=vi===void 0?"":vi,Ge=ha,X=jo,yi=Do,vn=zo;Ge.document;var He=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",$o=~bi.indexOf("MSIE")||~bi.indexOf("Trident/"),bn,yn,xn,wn,_n,ze="___FONT_AWESOME___",Rr=16,Uo="fa",Bo="svg-inline--fa",ut="data-fa-i2svg",Lr="data-fa-pseudo-element",Fc="data-fa-pseudo-element-pending",ga="data-prefix",va="data-icon",xi="fontawesome-i2svg",Rc="async",Lc=["HTML","HEAD","STYLE","SCRIPT"],Ho=function(){try{return!0}catch{return!1}}(),V="classic",J="sharp",ba=[V,J];function an(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Zt=an((bn={},Q(bn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Q(bn,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),bn)),Qt=an((yn={},Q(yn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Q(yn,J,{solid:"fass",regular:"fasr",light:"fasl"}),yn)),en=an((xn={},Q(xn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Q(xn,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),xn)),jc=an((wn={},Q(wn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Q(wn,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),wn)),Dc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Yo="fa-layers-text",zc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$c=an((_n={},Q(_n,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Q(_n,J,{900:"fass",400:"fasr",300:"fasl"}),_n)),Wo=[1,2,3,4,5,6,7,8,9,10],Uc=Wo.concat([11,12,13,14,15,16,17,18,19,20]),Bc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tn=new Set;Object.keys(Qt[V]).map(tn.add.bind(tn));Object.keys(Qt[J]).map(tn.add.bind(tn));var Hc=[].concat(ba,rn(tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(Wo.map(function(e){return"".concat(e,"x")})).concat(Uc.map(function(e){return"w-".concat(e)})),Yt=Ge.FontAwesomeConfig||{};function Yc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Wc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Kc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kc.forEach(function(e){var t=pa(e,2),n=t[0],r=t[1],a=Wc(Yc(n));a!=null&&(Yt[r]=a)})}var Ko={styleDefault:"solid",familyDefault:"classic",cssPrefix:Uo,replacementClass:Bo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);var Ct=E(E({},Ko),Yt);Ct.autoReplaceSvg||(Ct.observeMutations=!1);var P={};Object.keys(Ko).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Ct[e]=n,Wt.forEach(function(r){return r(P)})},get:function(){return Ct[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Ct.cssPrefix=t,Wt.forEach(function(n){return n(P)})},get:function(){return Ct.cssPrefix}});Ge.FontAwesomeConfig=P;var Wt=[];function Vc(e){return Wt.push(e),function(){Wt.splice(Wt.indexOf(e),1)}}var We=Rr,Ie={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xc(e){if(!(!e||!He)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var qc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nn(){for(var e=12,t="";e-- >0;)t+=qc[Math.random()*62|0];return t}function It(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ya(e){return e.classList?It(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Vo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Vo(e[n]),'" ')},"").trim()}function tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function xa(e){return e.size!==Ie.size||e.x!==Ie.x||e.y!==Ie.y||e.rotate!==Ie.rotate||e.flipX||e.flipY}function Jc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Zc(e){var t=e.transform,n=e.width,r=n===void 0?Rr:n,a=e.height,i=a===void 0?Rr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&$o?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Qc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xo(){var e=Uo,t=Bo,n=P.cssPrefix,r=P.replacementClass,a=Qc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var wi=!1;function gr(){P.autoAddCss&&!wi&&(Xc(Xo()),wi=!0)}var eu={mixout:function(){return{dom:{css:Xo,insertCss:gr}}},hooks:function(){return{beforeDOMElementCreation:function(){gr()},beforeI2svg:function(){gr()}}}},$e=Ge||{};$e[ze]||($e[ze]={});$e[ze].styles||($e[ze].styles={});$e[ze].hooks||($e[ze].hooks={});$e[ze].shims||($e[ze].shims=[]);var _e=$e[ze],qo=[],tu=function e(){X.removeEventListener("DOMContentLoaded",e),$n=1,qo.map(function(t){return t()})},$n=!1;He&&($n=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),$n||X.addEventListener("DOMContentLoaded",tu));function nu(e){He&&($n?setTimeout(e,0):qo.push(e))}function on(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Vo(e):"<".concat(t," ").concat(Gc(r),">").concat(i.map(on).join(""),"</").concat(t,">")}function _i(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ru=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},vr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ru(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function au(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function jr(e){var t=au(e);return t.length===1?t[0].toString(16):null}function iu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ki(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Dr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ki(t);typeof _e.hooks.addPack=="function"&&!a?_e.hooks.addPack(e,ki(t)):_e.styles[e]=E(E({},_e.styles[e]||{}),i),e==="fas"&&Dr("fa",t)}var kn,An,On,vt=_e.styles,ou=_e.shims,su=(kn={},Q(kn,V,Object.values(en[V])),Q(kn,J,Object.values(en[J])),kn),wa=null,Go={},Jo={},Zo={},Qo={},es={},lu=(An={},Q(An,V,Object.keys(Zt[V])),Q(An,J,Object.keys(Zt[J])),An);function fu(e){return~Hc.indexOf(e)}function cu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!fu(a)?a:null}var ts=function(){var t=function(i){return vr(vt,function(o,s,l){return o[l]=vr(s,i,{}),o},{})};Go=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Jo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),es=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in vt||P.autoFetchSvg,r=vr(ou,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Zo=r.names,Qo=r.unicodes,wa=nr(P.styleDefault,{family:P.familyDefault})};Vc(function(e){wa=nr(e.styleDefault,{family:P.familyDefault})});ts();function _a(e,t){return(Go[e]||{})[t]}function uu(e,t){return(Jo[e]||{})[t]}function st(e,t){return(es[e]||{})[t]}function ns(e){return Zo[e]||{prefix:null,iconName:null}}function du(e){var t=Qo[e],n=_a("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return wa}var ka=function(){return{prefix:null,iconName:null,rest:[]}};function nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=Zt[r][e],i=Qt[r][e]||Qt[r][a],o=e in _e.styles?e:null;return i||o||null}var Ai=(On={},Q(On,V,Object.keys(en[V])),Q(On,J,Object.keys(en[J])),On);function rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},Q(t,V,"".concat(P.cssPrefix,"-").concat(V)),Q(t,J,"".concat(P.cssPrefix,"-").concat(J)),t),o=null,s=V;(e.includes(i[V])||e.some(function(c){return Ai[V].includes(c)}))&&(s=V),(e.includes(i[J])||e.some(function(c){return Ai[J].includes(c)}))&&(s=J);var l=e.reduce(function(c,d){var m=cu(P.cssPrefix,d);if(vt[d]?(d=su[s].includes(d)?jc[s][d]:d,o=d,c.prefix=d):lu[s].indexOf(d)>-1?(o=d,c.prefix=nr(d,{family:s})):m?c.iconName=m:d!==P.replacementClass&&d!==i[V]&&d!==i[J]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?ns(c.iconName):{},_=st(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||_||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!vt.far&&vt.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},ka());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(vt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Je()||"fas"),l}var mu=function(){function e(){Oc(this,e),this.definitions={}}return Ec(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Dr(s,o[s]);var l=en[V][s];l&&Dr(l,o[s]),ts()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Oi=[],bt={},kt={},pu=Object.keys(kt);function hu(e,t){var n=t.mixoutsTo;return Oi=e,bt={},Object.keys(kt).forEach(function(r){pu.indexOf(r)===-1&&delete kt[r]}),Oi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){bt[o]||(bt[o]=[]),bt[o].push(i[o])})}r.provides&&r.provides(kt)}),n}function zr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function dt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kt[e]?kt[e].apply(null,t):void 0}function $r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(t)return t=st(n,t)||t,_i(rs.definitions,n,t)||_i(_e.styles,n,t)}var rs=new mu,gu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,dt("noAuto")},vu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(dt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,nu(function(){yu({autoReplaceSvgRoot:n}),dt("watch",t)})}},bu={icon:function(t){if(t===null)return null;if(zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=nr(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Dc))){var a=rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:st(i,t)||t}}}},pe={noAuto:gu,config:P,dom:vu,parse:bu,library:rs,findIconDefinition:$r,toHtml:on},yu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(_e.styles).length>0||P.autoFetchSvg)&&He&&P.autoReplaceSvg&&pe.dom.i2svg({node:r})};function ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return on(r)})}}),Object.defineProperty(e,"node",{get:function(){if(He){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function xu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(xa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=tr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function wu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Aa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,_=v===void 0?!1:v,j=r.found?r:n,N=j.width,z=j.height,k=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(he){return m.classes.indexOf(he)===-1}).filter(function(he){return he!==""||!!he}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},S=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};_&&(M.attributes[ut]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||nn())},children:[l]}),delete M.attributes.title);var B=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},S),m.styles)}),ae=r.found&&n.found?Ue("generateAbstractMask",B)||{children:[],attributes:{}}:Ue("generateAbstractIcon",B)||{children:[],attributes:{}},ie=ae.children,ve=ae.attributes;return B.children=ie,B.attributes=ve,s?wu(B):xu(B)}function Ei(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ut]="");var d=E({},o.styles);xa(a)&&(d.transform=Zc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=tr(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function _u(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var br=_e.styles;function Ur(e){var t=e[0],n=e[1],r=e.slice(4),a=pa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var ku={found:!1,width:512,height:512};function Au(e,t){!Ho&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Br(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=ns(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&br[t]&&br[t][e]){var o=br[t][e];return r(Ur(o))}Au(e,t),r(E(E({},ku),{},{icon:P.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var Ci=function(){},Hr=P.measurePerformance&&vn&&vn.mark&&vn.measure?vn:{mark:Ci,measure:Ci},$t='FA "6.4.2"',Ou=function(t){return Hr.mark("".concat($t," ").concat(t," begins")),function(){return as(t)}},as=function(t){Hr.mark("".concat($t," ").concat(t," ends")),Hr.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},Oa={begin:Ou,end:as},In=function(){};function Pi(e){var t=e.getAttribute?e.getAttribute(ut):null;return typeof t=="string"}function Eu(e){var t=e.getAttribute?e.getAttribute(ga):null,n=e.getAttribute?e.getAttribute(va):null;return t&&n}function Cu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Pu(){if(P.autoReplaceSvg===!0)return Nn.replace;var e=Nn[P.autoReplaceSvg];return e||Nn.replace}function Su(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Tu(e){return X.createElement(e)}function is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Su:Tu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(is(o,{ceFn:r}))}),a}function Iu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Nn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(is(a),n)}),n.getAttribute(ut)===null&&P.keepOriginalSource){var r=X.createComment(Iu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ya(n).indexOf(P.replacementClass))return Nn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(ut,""),n.innerHTML=o}};function Si(e){e()}function os(e,t){var n=typeof t=="function"?t:In;if(e.length===0)n();else{var r=Si;P.mutateApproach===Rc&&(r=Ge.requestAnimationFrame||Si),r(function(){var a=Pu(),i=Oa.begin("mutate");e.map(a),i(),n()})}}var Ea=!1;function ss(){Ea=!0}function Yr(){Ea=!1}var Un=null;function Ti(e){if(yi&&P.observeMutations){var t=e.treeCallback,n=t===void 0?In:t,r=e.nodeCallback,a=r===void 0?In:r,i=e.pseudoElementsCallback,o=i===void 0?In:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Un=new yi(function(c){if(!Ea){var d=Je();It(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Pi(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Pi(m.target)&&~Bc.indexOf(m.attributeName))if(m.attributeName==="class"&&Eu(m.target)){var v=rr(ya(m.target)),_=v.prefix,j=v.iconName;m.target.setAttribute(ga,_||d),j&&m.target.setAttribute(va,j)}else Cu(m.target)&&a(m.target)})}}),He&&Un.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nu(){Un&&Un.disconnect()}function Mu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Fu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=rr(ya(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=uu(a.prefix,e.innerText)||_a(a.prefix,jr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ru(e){var t=It(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||nn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Lu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ie,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Fu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Ru(e),s=zr("parseNodeAttributes",{},e),l=t.styleParser?Mu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ie,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ju=_e.styles;function ls(e){var t=P.autoReplaceSvg==="nest"?Ii(e,{styleParser:!1}):Ii(e);return~t.extra.classes.indexOf(Yo)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var Ze=new Set;ba.map(function(e){Ze.add("fa-".concat(e))});Object.keys(Zt[V]).map(Ze.add.bind(Ze));Object.keys(Zt[J]).map(Ze.add.bind(Ze));Ze=rn(Ze);function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(xi,"-").concat(m))},a=function(m){return n.remove("".concat(xi,"-").concat(m))},i=P.autoFetchSvg?Ze:ba.map(function(d){return"fa-".concat(d)}).concat(Object.keys(ju));i.includes("fa")||i.push("fa");var o=[".".concat(Yo,":not([").concat(ut,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ut,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=It(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Oa.begin("onTree"),c=s.reduce(function(d,m){try{var v=ls(m);v&&d.push(v)}catch(_){Ho||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){os(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Du(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ls(e).then(function(n){n&&os([n],t)})}function zu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:$r(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:$r(a||{})),e(r,E(E({},n),{},{mask:a}))}}var $u=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ie:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,_=n.titleId,j=_===void 0?null:_,N=n.classes,z=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,M=n.styles,S=M===void 0?{}:M;if(t){var B=t.prefix,ae=t.iconName,ie=t.icon;return ar(E({type:"icon"},t),function(){return dt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(j||nn()):(O["aria-hidden"]="true",O.focusable="false")),Aa({icons:{main:Ur(ie),mask:l?Ur(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ae,transform:E(E({},Ie),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:O,styles:S,classes:z}})})}},Uu={mixout:function(){return{icon:zu($u)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ni,n.nodeCallback=Du,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Ni(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(_,j){Promise.all([Br(a,s),d.iconName?Br(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=pa(N,2),k=z[0],O=z[1];_([n,Aa({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=tr(s);l.length>0&&(a.style=l);var c;return xa(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Bu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ar({type:"layer"},function(){dt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(rn(i)).join(" ")},children:o}]})}}}},Hu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return ar({type:"counter",content:n},function(){return dt("beforeDOMElementCreation",{content:n,params:r}),_u({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(rn(s))}})})}}}},Yu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ie:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,_=v===void 0?{}:v;return ar({type:"text",content:n},function(){return dt("beforeDOMElementCreation",{content:n,params:r}),Ei({content:n,transform:E(E({},Ie),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(P.cssPrefix,"-layers-text")].concat(rn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if($o){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ei({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Wu=new RegExp('"',"ug"),Mi=[1105920,1112319];function Ku(e){var t=e.replace(Wu,""),n=iu(t,0),r=n>=Mi[0]&&n<=Mi[1],a=t.length===2?t[0]===t[1]:!1;return{value:jr(a?t[0]:t),isSecondary:r||a}}function Fi(e,t){var n="".concat(Fc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=It(e.children),o=i.filter(function(ie){return ie.getAttribute(Lr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(zc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?J:V,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qt[v][l[2].toLowerCase()]:$c[v][c],j=Ku(m),N=j.value,z=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=_a(_,N),M=O;if(k){var S=du(N);S.iconName&&S.prefix&&(O=S.iconName,_=S.prefix)}if(O&&!z&&(!o||o.getAttribute(ga)!==_||o.getAttribute(va)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var B=Lu(),ae=B.extra;ae.attributes[Lr]=t,Br(O,_).then(function(ie){var ve=Aa(E(E({},B),{},{icons:{main:ie,mask:ka()},prefix:_,iconName:M,extra:ae,watchable:!0})),he=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(he,e.firstChild):e.appendChild(he),he.outerHTML=ve.map(function(Me){return on(Me)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Vu(e){return Promise.all([Fi(e,"::before"),Fi(e,"::after")])}function Xu(e){return e.parentNode!==document.head&&!~Lc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ri(e){if(He)return new Promise(function(t,n){var r=It(e.querySelectorAll("*")).filter(Xu).map(Vu),a=Oa.begin("searchPseudoElements");ss(),Promise.all(r).then(function(){a(),Yr(),t()}).catch(function(){a(),Yr(),n()})})}var qu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ri,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;P.searchPseudoElements&&Ri(a)}}},Li=!1,Gu={mixout:function(){return{dom:{unwatch:function(){ss(),Li=!0}}}},hooks:function(){return{bootstrap:function(){Ti(zr("mutationObserverCallbacks",{}))},noAuto:function(){Nu()},watch:function(n){var r=n.observeMutationsRoot;Li?Yr():Ti(zr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ji=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Ju={mixout:function(){return{parse:{transform:function(n){return ji(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ji(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},yr={x:0,y:0,width:"100%",height:"100%"};function Di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zu(e){return e.tag==="g"?e.children:[e]}var Qu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?rr(a.split(" ").map(function(o){return o.trim()})):ka();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,_=Jc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},yr),{},{fill:"white"})},N=d.children?{children:d.children.map(Di)}:{},z={tag:"g",attributes:E({},_.inner),children:[Di(E({tag:d.tag,attributes:E(E({},d.attributes),_.path)},N))]},k={tag:"g",attributes:E({},_.outer),children:[z]},O="mask-".concat(s||nn()),M="clip-".concat(s||nn()),S={tag:"mask",attributes:E(E({},yr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Zu(v)},S]};return r.push(B,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},yr)}),{children:r,attributes:a}}}},ed={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},td={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},nd=[eu,Uu,Bu,Hu,Yu,qu,Gu,Ju,Qu,ed,td];hu(nd,{mixoutsTo:pe});pe.noAuto;pe.config;var rd=pe.library;pe.dom;var Wr=pe.parse;pe.findIconDefinition;pe.toHtml;var ad=pe.icon;pe.layer;pe.text;pe.counter;function zi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zi(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function id(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function od(e,t){if(e==null)return{};var n=id(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fs={exports:{}};(function(e){(function(t){var n=function(k,O,M){if(!c(O)||m(O)||v(O)||_(O)||l(O))return O;var S,B=0,ae=0;if(d(O))for(S=[],ae=O.length;B<ae;B++)S.push(n(k,O[B],M));else{S={};for(var ie in O)Object.prototype.hasOwnProperty.call(O,ie)&&(S[k(ie,M)]=n(k,O[ie],M))}return S},r=function(k,O){O=O||{};var M=O.separator||"_",S=O.split||/(?=[A-Z])/;return k.split(S).join(M)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},_=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},N=function(k,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?k:function(S,B){return M(S,k,B)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(sd)})(fs);var ld=fs.exports,fd=["class","style"];function cd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ld.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ud(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function cs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return cs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=ud(d);break;case"style":l.style=cd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=od(n,fd);return wf(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var us=!1;try{us=!0}catch{}function dd(){if(!us&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function xr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function md(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function $i(e){if(e&&Bn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Wr.icon)return Wr.icon(e);if(e===null)return null;if(Bn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var pd=bo({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Le(function(){return $i(t.icon)}),i=Le(function(){return xr("classes",md(t))}),o=Le(function(){return xr("transform",typeof t.transform=="string"?Wr.transform(t.transform):t.transform)}),s=Le(function(){return xr("mask",$i(t.mask))}),l=Le(function(){return ad(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Cn(l,function(d){if(!d)return dd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Le(function(){return l.value?cs(l.value.abstract[0],{},r):null});return function(){return c.value}}}),hd={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},gd={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},vd={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},bd={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};rd.add(gd,hd,bd,vd);Yf(Ac).component("font-awesome-icon",pd).mount("#app");
