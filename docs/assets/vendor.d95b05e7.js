function Xa(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Sm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cm=Xa(Sm);function zh(t){return!!t||t===""}function Ja(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?Nm(s):Ja(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Re(t))return t;if(ke(t))return t}}const Rm=/;(?![^(]*\))/g,km=/:(.+)/;function Nm(t){const e={};return t.split(Rm).forEach(n=>{if(n){const s=n.split(km);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Qa(t){let e="";if(Re(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Qa(t[n]);s&&(e+=s+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zS=t=>Re(t)?t:t==null?"":z(t)||ke(t)&&(t.toString===Xh||!X(t.toString))?JSON.stringify(t,Gh,2):String(t),Gh=(t,e)=>e&&e.__v_isRef?Gh(t,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Wh(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!z(e)&&!Jh(e)?String(e):e,ge={},ns=[],wt=()=>{},Om=()=>!1,Dm=/^on[^a-z]/,$i=t=>Dm.test(t),Za=t=>t.startsWith("onUpdate:"),ze=Object.assign,ec=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pm=Object.prototype.hasOwnProperty,ne=(t,e)=>Pm.call(t,e),z=Array.isArray,ss=t=>Bi(t)==="[object Map]",Wh=t=>Bi(t)==="[object Set]",X=t=>typeof t=="function",Re=t=>typeof t=="string",tc=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Yh=t=>ke(t)&&X(t.then)&&X(t.catch),Xh=Object.prototype.toString,Bi=t=>Xh.call(t),Mm=t=>Bi(t).slice(8,-1),Jh=t=>Bi(t)==="[object Object]",nc=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qr=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ji=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xm=/-(\w)/g,Nt=ji(t=>t.replace(xm,(e,n)=>n?n.toUpperCase():"")),Lm=/\B([A-Z])/g,Is=ji(t=>t.replace(Lm,"-$1").toLowerCase()),qi=ji(t=>t.charAt(0).toUpperCase()+t.slice(1)),bo=ji(t=>t?`on${qi(t)}`:""),Zs=(t,e)=>!Object.is(t,e),Ao=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ui=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fm=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Dl;const Um=()=>Dl||(Dl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let xt;class Vm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&xt&&(this.parent=xt,this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}run(e){if(this.active)try{return xt=this,e()}finally{xt=this.parent}}on(){xt=this}off(){xt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function $m(t,e=xt){e&&e.active&&e.effects.push(t)}const sc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Qh=t=>(t.w&un)>0,Zh=t=>(t.n&un)>0,Bm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=un},jm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Qh(r)&&!Zh(r)?r.delete(t):e[n++]=r,r.w&=~un,r.n&=~un}e.length=n}},ea=new WeakMap;let Ls=0,un=1;const ta=30;let Ct;const Sn=Symbol(""),na=Symbol("");class rc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$m(this,s)}run(){if(!this.active)return this.fn();let e=Ct,n=rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,rn=!0,un=1<<++Ls,Ls<=ta?Bm(this):Pl(this),this.fn()}finally{Ls<=ta&&jm(this),un=1<<--Ls,Ct=this.parent,rn=n,this.parent=void 0}}stop(){this.active&&(Pl(this),this.onStop&&this.onStop(),this.active=!1)}}function Pl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let rn=!0;const ef=[];function Ts(){ef.push(rn),rn=!1}function bs(){const t=ef.pop();rn=t===void 0?!0:t}function ct(t,e,n){if(rn&&Ct){let s=ea.get(t);s||ea.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=sc()),tf(r)}}function tf(t,e){let n=!1;Ls<=ta?Zh(t)||(t.n|=un,n=!Qh(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function Bt(t,e,n,s,r,i){const o=ea.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?nc(n)&&a.push(o.get("length")):(a.push(o.get(Sn)),ss(t)&&a.push(o.get(na)));break;case"delete":z(t)||(a.push(o.get(Sn)),ss(t)&&a.push(o.get(na)));break;case"set":ss(t)&&a.push(o.get(Sn));break}if(a.length===1)a[0]&&sa(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);sa(sc(c))}}function sa(t,e){for(const n of z(t)?t:[...t])(n!==Ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const qm=Xa("__proto__,__v_isRef,__isVue"),nf=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(tc)),Hm=ic(),Km=ic(!1,!0),zm=ic(!0),Ml=Gm();function Gm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ie(this);for(let i=0,o=this.length;i<o;i++)ct(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ie)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ts();const s=ie(this)[e].apply(this,n);return bs(),s}}),t}function ic(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?ly:cf:e?af:of).get(s))return s;const o=z(s);if(!t&&o&&ne(Ml,r))return Reflect.get(Ml,r,i);const a=Reflect.get(s,r,i);return(tc(r)?nf.has(r):qm(r))||(t||ct(s,"get",r),e)?a:xe(a)?!o||!nc(r)?a.value:a:ke(a)?t?lf(a):_r(a):a}}const Wm=sf(),Ym=sf(!0);function sf(t=!1){return function(n,s,r,i){let o=n[s];if(er(o)&&xe(o)&&!xe(r))return!1;if(!t&&!er(r)&&(uf(r)||(r=ie(r),o=ie(o)),!z(n)&&xe(o)&&!xe(r)))return o.value=r,!0;const a=z(n)&&nc(s)?Number(s)<n.length:ne(n,s),c=Reflect.set(n,s,r,i);return n===ie(i)&&(a?Zs(r,o)&&Bt(n,"set",s,r):Bt(n,"add",s,r)),c}}function Xm(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Bt(t,"delete",e,void 0),s}function Jm(t,e){const n=Reflect.has(t,e);return(!tc(e)||!nf.has(e))&&ct(t,"has",e),n}function Qm(t){return ct(t,"iterate",z(t)?"length":Sn),Reflect.ownKeys(t)}const rf={get:Hm,set:Wm,deleteProperty:Xm,has:Jm,ownKeys:Qm},Zm={get:zm,set(t,e){return!0},deleteProperty(t,e){return!0}},ey=ze({},rf,{get:Km,set:Ym}),oc=t=>t,Hi=t=>Reflect.getPrototypeOf(t);function jr(t,e,n=!1,s=!1){t=t.__v_raw;const r=ie(t),i=ie(e);e!==i&&!n&&ct(r,"get",e),!n&&ct(r,"get",i);const{has:o}=Hi(r),a=s?oc:n?lc:tr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function qr(t,e=!1){const n=this.__v_raw,s=ie(n),r=ie(t);return t!==r&&!e&&ct(s,"has",t),!e&&ct(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function Hr(t,e=!1){return t=t.__v_raw,!e&&ct(ie(t),"iterate",Sn),Reflect.get(t,"size",t)}function xl(t){t=ie(t);const e=ie(this);return Hi(e).has.call(e,t)||(e.add(t),Bt(e,"add",t,t)),this}function Ll(t,e){e=ie(e);const n=ie(this),{has:s,get:r}=Hi(n);let i=s.call(n,t);i||(t=ie(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Zs(e,o)&&Bt(n,"set",t,e):Bt(n,"add",t,e),this}function Fl(t){const e=ie(this),{has:n,get:s}=Hi(e);let r=n.call(e,t);r||(t=ie(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Bt(e,"delete",t,void 0),i}function Ul(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&Bt(t,"clear",void 0,void 0),n}function Kr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ie(o),c=e?oc:t?lc:tr;return!t&&ct(a,"iterate",Sn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function zr(t,e,n){return function(...s){const r=this.__v_raw,i=ie(r),o=ss(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?oc:e?lc:tr;return!e&&ct(i,"iterate",c?na:Sn),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Gt(t){return function(...e){return t==="delete"?!1:this}}function ty(){const t={get(i){return jr(this,i)},get size(){return Hr(this)},has:qr,add:xl,set:Ll,delete:Fl,clear:Ul,forEach:Kr(!1,!1)},e={get(i){return jr(this,i,!1,!0)},get size(){return Hr(this)},has:qr,add:xl,set:Ll,delete:Fl,clear:Ul,forEach:Kr(!1,!0)},n={get(i){return jr(this,i,!0)},get size(){return Hr(this,!0)},has(i){return qr.call(this,i,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:Kr(!0,!1)},s={get(i){return jr(this,i,!0,!0)},get size(){return Hr(this,!0)},has(i){return qr.call(this,i,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:Kr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zr(i,!1,!1),n[i]=zr(i,!0,!1),e[i]=zr(i,!1,!0),s[i]=zr(i,!0,!0)}),[t,n,e,s]}const[ny,sy,ry,iy]=ty();function ac(t,e){const n=e?t?iy:ry:t?sy:ny;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ne(n,r)&&r in s?n:s,r,i)}const oy={get:ac(!1,!1)},ay={get:ac(!1,!0)},cy={get:ac(!0,!1)},of=new WeakMap,af=new WeakMap,cf=new WeakMap,ly=new WeakMap;function uy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hy(t){return t.__v_skip||!Object.isExtensible(t)?0:uy(Mm(t))}function _r(t){return er(t)?t:cc(t,!1,rf,oy,of)}function fy(t){return cc(t,!1,ey,ay,af)}function lf(t){return cc(t,!0,Zm,cy,cf)}function cc(t,e,n,s,r){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=hy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function rs(t){return er(t)?rs(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function uf(t){return!!(t&&t.__v_isShallow)}function hf(t){return rs(t)||er(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function ff(t){return ui(t,"__v_skip",!0),t}const tr=t=>ke(t)?_r(t):t,lc=t=>ke(t)?lf(t):t;function df(t){rn&&Ct&&(t=ie(t),tf(t.dep||(t.dep=sc())))}function pf(t,e){t=ie(t),t.dep&&sa(t.dep)}function xe(t){return!!(t&&t.__v_isRef===!0)}function dy(t){return gf(t,!1)}function py(t){return gf(t,!0)}function gf(t,e){return xe(t)?t:new gy(t,e)}class gy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:tr(e)}get value(){return df(this),this._value}set value(e){e=this.__v_isShallow?e:ie(e),Zs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:tr(e),pf(this))}}function Bs(t){return xe(t)?t.value:t}const my={get:(t,e,n)=>Bs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return xe(r)&&!xe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function mf(t){return rs(t)?t:new Proxy(t,my)}class yy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new rc(e,()=>{this._dirty||(this._dirty=!0,pf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ie(this);return df(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function vy(t,e,n=!1){let s,r;const i=X(t);return i?(s=t,r=wt):(s=t.get,r=t.set),new yy(s,r,i||!r,n)}Promise.resolve();function on(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ki(i,e,n)}return r}function dt(t,e,n,s){if(X(t)){const i=on(t,e,n,s);return i&&Yh(i)&&i.catch(o=>{Ki(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(dt(t[i],e,n,s));return r}function Ki(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){on(c,null,10,[t,o,a]);return}}wy(t,n,r,s)}function wy(t,e,n,s=!0){console.error(t)}let hi=!1,ra=!1;const rt=[];let Lt=0;const js=[];let Fs=null,Xn=0;const qs=[];let Jt=null,Jn=0;const yf=Promise.resolve();let uc=null,ia=null;function vf(t){const e=uc||yf;return t?e.then(this?t.bind(this):t):e}function _y(t){let e=Lt+1,n=rt.length;for(;e<n;){const s=e+n>>>1;nr(rt[s])<t?e=s+1:n=s}return e}function wf(t){(!rt.length||!rt.includes(t,hi&&t.allowRecurse?Lt+1:Lt))&&t!==ia&&(t.id==null?rt.push(t):rt.splice(_y(t.id),0,t),_f())}function _f(){!hi&&!ra&&(ra=!0,uc=yf.then(Tf))}function Ey(t){const e=rt.indexOf(t);e>Lt&&rt.splice(e,1)}function Ef(t,e,n,s){z(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),_f()}function Iy(t){Ef(t,Fs,js,Xn)}function Ty(t){Ef(t,Jt,qs,Jn)}function hc(t,e=null){if(js.length){for(ia=e,Fs=[...new Set(js)],js.length=0,Xn=0;Xn<Fs.length;Xn++)Fs[Xn]();Fs=null,Xn=0,ia=null,hc(t,e)}}function If(t){if(qs.length){const e=[...new Set(qs)];if(qs.length=0,Jt){Jt.push(...e);return}for(Jt=e,Jt.sort((n,s)=>nr(n)-nr(s)),Jn=0;Jn<Jt.length;Jn++)Jt[Jn]();Jt=null,Jn=0}}const nr=t=>t.id==null?1/0:t.id;function Tf(t){ra=!1,hi=!0,hc(t),rt.sort((n,s)=>nr(n)-nr(s));const e=wt;try{for(Lt=0;Lt<rt.length;Lt++){const n=rt[Lt];n&&n.active!==!1&&on(n,null,14)}}finally{Lt=0,rt.length=0,If(),hi=!1,uc=null,(rt.length||js.length||qs.length)&&Tf(t)}}function by(t,e,...n){const s=t.vnode.props||ge;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ge;d?r=n.map(g=>g.trim()):h&&(r=n.map(Fm))}let a,c=s[a=bo(e)]||s[a=bo(Nt(e))];!c&&i&&(c=s[a=bo(Is(e))]),c&&dt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,dt(l,t,6,r)}}function bf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=bf(l,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):ze(o,i),s.set(t,o),o)}function fc(t,e){return!t||!$i(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Is(e))||ne(t,e))}let vt=null,Af=null;function fi(t){const e=vt;return vt=t,Af=t&&t.type.__scopeId||null,e}function Ay(t,e=vt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Yl(-1);const i=fi(e),o=t(...r);return fi(i),s._d&&Yl(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function So(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:N}=t;let I,R;const x=fi(t);try{if(n.shapeFlag&4){const G=r||s;I=At(u.call(G,G,h,i,g,d,y)),R=c}else{const G=e;I=At(G.length>1?G(i,{attrs:c,slots:a,emit:l}):G(i,null)),R=e.props?c:Sy(c)}}catch(G){Hs.length=0,Ki(G,t,1),I=it(hn)}let K=I;if(R&&N!==!1){const G=Object.keys(R),{shapeFlag:ae}=K;G.length&&ae&7&&(o&&G.some(Za)&&(R=Cy(R,o)),K=ls(K,R))}return n.dirs&&(K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),I=K,fi(x),I}const Sy=t=>{let e;for(const n in t)(n==="class"||n==="style"||$i(n))&&((e||(e={}))[n]=t[n]);return e},Cy=(t,e)=>{const n={};for(const s in t)(!Za(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ry(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Vl(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!fc(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Vl(s,o,l):!0:!!o;return!1}function Vl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!fc(n,i))return!0}return!1}function ky({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ny=t=>t.__isSuspense;function Oy(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Ty(t)}function Zr(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function an(t,e,n=!1){const s=Oe||vt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const $l={};function ei(t,e,n){return Sf(t,e,n)}function Sf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ge){const a=Oe;let c,l=!1,u=!1;if(xe(t)?(c=()=>t.value,l=uf(t)):rs(t)?(c=()=>t,s=!0):z(t)?(u=!0,l=t.some(rs),c=()=>t.map(R=>{if(xe(R))return R.value;if(rs(R))return Zn(R);if(X(R))return on(R,a,2)})):X(t)?e?c=()=>on(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),dt(t,a,3,[d])}:c=wt,e&&s){const R=c;c=()=>Zn(R())}let h,d=R=>{h=I.onStop=()=>{on(R,a,4)}};if(sr)return d=wt,e?n&&dt(e,a,3,[c(),u?[]:void 0,d]):c(),wt;let g=u?[]:$l;const y=()=>{if(!!I.active)if(e){const R=I.run();(s||l||(u?R.some((x,K)=>Zs(x,g[K])):Zs(R,g)))&&(h&&h(),dt(e,a,3,[R,g===$l?void 0:g,d]),g=R)}else I.run()};y.allowRecurse=!!e;let N;r==="sync"?N=y:r==="post"?N=()=>et(y,a&&a.suspense):N=()=>{!a||a.isMounted?Iy(y):y()};const I=new rc(c,N);return e?n?y():g=I.run():r==="post"?et(I.run.bind(I),a&&a.suspense):I.run(),()=>{I.stop(),a&&a.scope&&ec(a.scope.effects,I)}}function Dy(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?Cf(s,t):()=>s[t]:t.bind(s,s);let i;X(e)?i=e:(i=e.handler,n=e);const o=Oe;us(this);const a=Sf(r,i.bind(s),n);return o?us(o):Rn(),a}function Cf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Zn(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),xe(t))Zn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Zn(t[n],e);else if(Wh(t)||ss(t))t.forEach(n=>{Zn(n,e)});else if(Jh(t))for(const n in t)Zn(t[n],e);return t}function Py(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Df(()=>{t.isMounted=!0}),Pf(()=>{t.isUnmounting=!0}),t}const ht=[Function,Array],My={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ht,onEnter:ht,onAfterEnter:ht,onEnterCancelled:ht,onBeforeLeave:ht,onLeave:ht,onAfterLeave:ht,onLeaveCancelled:ht,onBeforeAppear:ht,onAppear:ht,onAfterAppear:ht,onAppearCancelled:ht},setup(t,{slots:e}){const n=yv(),s=Py();let r;return()=>{const i=e.default&&kf(e.default(),!0);if(!i||!i.length)return;const o=ie(t),{mode:a}=o,c=i[0];if(s.isLeaving)return Co(c);const l=Bl(c);if(!l)return Co(c);const u=oa(l,o,s,n);aa(l,u);const h=n.subTree,d=h&&Bl(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const N=y();r===void 0?r=N:N!==r&&(r=N,g=!0)}if(d&&d.type!==hn&&(!_n(l,d)||g)){const N=oa(d,o,s,n);if(aa(d,N),a==="out-in")return s.isLeaving=!0,N.afterLeave=()=>{s.isLeaving=!1,n.update()},Co(c);a==="in-out"&&l.type!==hn&&(N.delayLeave=(I,R,x)=>{const K=Rf(s,d);K[String(d.key)]=d,I._leaveCb=()=>{R(),I._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return c}}},xy=My;function Rf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function oa(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:N,onAppear:I,onAfterAppear:R,onAppearCancelled:x}=e,K=String(t.key),G=Rf(n,t),ae=(Y,Ie)=>{Y&&dt(Y,s,9,Ie)},Ee={mode:i,persisted:o,beforeEnter(Y){let Ie=a;if(!n.isMounted)if(r)Ie=N||a;else return;Y._leaveCb&&Y._leaveCb(!0);const fe=G[K];fe&&_n(t,fe)&&fe.el._leaveCb&&fe.el._leaveCb(),ae(Ie,[Y])},enter(Y){let Ie=c,fe=l,je=u;if(!n.isMounted)if(r)Ie=I||c,fe=R||l,je=x||u;else return;let qe=!1;const Ge=Y._enterCb=zt=>{qe||(qe=!0,zt?ae(je,[Y]):ae(fe,[Y]),Ee.delayedLeave&&Ee.delayedLeave(),Y._enterCb=void 0)};Ie?(Ie(Y,Ge),Ie.length<=1&&Ge()):Ge()},leave(Y,Ie){const fe=String(t.key);if(Y._enterCb&&Y._enterCb(!0),n.isUnmounting)return Ie();ae(h,[Y]);let je=!1;const qe=Y._leaveCb=Ge=>{je||(je=!0,Ie(),Ge?ae(y,[Y]):ae(g,[Y]),Y._leaveCb=void 0,G[fe]===t&&delete G[fe])};G[fe]=t,d?(d(Y,qe),d.length<=1&&qe()):qe()},clone(Y){return oa(Y,e,n,s)}};return Ee}function Co(t){if(zi(t))return t=ls(t),t.children=null,t}function Bl(t){return zi(t)?t.children?t.children[0]:void 0:t}function aa(t,e){t.shapeFlag&6&&t.component?aa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kf(t,e=!1){let n=[],s=0;for(let r=0;r<t.length;r++){const i=t[r];i.type===bt?(i.patchFlag&128&&s++,n=n.concat(kf(i.children,e))):(e||i.type!==hn)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Nf(t){return X(t)?{setup:t,name:t.name}:t}const ca=t=>!!t.type.__asyncLoader,zi=t=>t.type.__isKeepAlive;function Ly(t,e){Of(t,"a",e)}function Fy(t,e){Of(t,"da",e)}function Of(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Gi(e,s,n),n){let r=n.parent;for(;r&&r.parent;)zi(r.parent.vnode)&&Uy(s,e,n,r),r=r.parent}}function Uy(t,e,n,s){const r=Gi(e,t,s,!0);Mf(()=>{ec(s[e],r)},n)}function Gi(t,e,n=Oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ts(),us(n);const a=dt(e,n,t,o);return Rn(),bs(),a});return s?r.unshift(i):r.push(i),i}}const Ht=t=>(e,n=Oe)=>(!sr||t==="sp")&&Gi(t,e,n),Vy=Ht("bm"),Df=Ht("m"),$y=Ht("bu"),By=Ht("u"),Pf=Ht("bum"),Mf=Ht("um"),jy=Ht("sp"),qy=Ht("rtg"),Hy=Ht("rtc");function Ky(t,e=Oe){Gi("ec",t,e)}let la=!0;function zy(t){const e=Lf(t),n=t.proxy,s=t.ctx;la=!1,e.beforeCreate&&jl(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:N,deactivated:I,beforeDestroy:R,beforeUnmount:x,destroyed:K,unmounted:G,render:ae,renderTracked:Ee,renderTriggered:Y,errorCaptured:Ie,serverPrefetch:fe,expose:je,inheritAttrs:qe,components:Ge,directives:zt,filters:Hn}=e;if(l&&Gy(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const de in o){const ce=o[de];X(ce)&&(s[de]=ce.bind(n))}if(r){const de=r.call(n,n);ke(de)&&(t.data=_r(de))}if(la=!0,i)for(const de in i){const ce=i[de],nt=X(ce)?ce.bind(n,n):X(ce.get)?ce.get.bind(n,n):wt,zn=!X(ce)&&X(ce.set)?ce.set.bind(n):wt,Mt=St({get:nt,set:zn});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Et=>Mt.value=Et})}if(a)for(const de in a)xf(a[de],s,n,de);if(c){const de=X(c)?c.call(n):c;Reflect.ownKeys(de).forEach(ce=>{Zr(ce,de[ce])})}u&&jl(u,t,"c");function Ce(de,ce){z(ce)?ce.forEach(nt=>de(nt.bind(n))):ce&&de(ce.bind(n))}if(Ce(Vy,h),Ce(Df,d),Ce($y,g),Ce(By,y),Ce(Ly,N),Ce(Fy,I),Ce(Ky,Ie),Ce(Hy,Ee),Ce(qy,Y),Ce(Pf,x),Ce(Mf,G),Ce(jy,fe),z(je))if(je.length){const de=t.exposed||(t.exposed={});je.forEach(ce=>{Object.defineProperty(de,ce,{get:()=>n[ce],set:nt=>n[ce]=nt})})}else t.exposed||(t.exposed={});ae&&t.render===wt&&(t.render=ae),qe!=null&&(t.inheritAttrs=qe),Ge&&(t.components=Ge),zt&&(t.directives=zt)}function Gy(t,e,n=wt,s=!1){z(t)&&(t=ua(t));for(const r in t){const i=t[r];let o;ke(i)?"default"in i?o=an(i.from||r,i.default,!0):o=an(i.from||r):o=an(i),xe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function jl(t,e,n){dt(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xf(t,e,n,s){const r=s.includes(".")?Cf(n,s):()=>n[s];if(Re(t)){const i=e[t];X(i)&&ei(r,i)}else if(X(t))ei(r,t.bind(n));else if(ke(t))if(z(t))t.forEach(i=>xf(i,e,n,s));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&ei(r,i,t)}}function Lf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>di(c,l,o,!0)),di(c,e,o)),i.set(e,c),c}function di(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&di(t,i,n,!0),r&&r.forEach(o=>di(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Wy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wy={data:ql,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:vn,directives:vn,watch:Xy,provide:ql,inject:Yy};function ql(t,e){return e?t?function(){return ze(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Yy(t,e){return vn(ua(t),ua(e))}function ua(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?ze(ze(Object.create(null),t),e):e}function Xy(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const s in e)n[s]=We(t[s],e[s]);return n}function Jy(t,e,n,s=!1){const r={},i={};ui(i,Wi,1),t.propsDefaults=Object.create(null),Ff(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:fy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Qy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ie(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];const g=e[d];if(c)if(ne(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const y=Nt(d);r[y]=ha(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Ff(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=Is(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ha(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ne(e,h)&&!0)&&(delete i[h],l=!0)}l&&Bt(t,"set","$attrs")}function Ff(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Qr(c))continue;const l=e[c];let u;r&&ne(r,u=Nt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:fc(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ie(n),l=a||ge;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ha(r,c,h,l[h],t,!ne(l,h))}}return o}function ha(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(us(r),s=l[n]=c.call(null,e),Rn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Is(n))&&(s=!0))}return s}function Uf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[d,g]=Uf(h,e,!0);ze(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,ns),ns;if(z(i))for(let u=0;u<i.length;u++){const h=Nt(i[u]);Hl(h)&&(o[h]=ge)}else if(i)for(const u in i){const h=Nt(u);if(Hl(h)){const d=i[u],g=o[h]=z(d)||X(d)?{type:d}:d;if(g){const y=Gl(Boolean,g.type),N=Gl(String,g.type);g[0]=y>-1,g[1]=N<0||y<N,(y>-1||ne(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function Hl(t){return t[0]!=="$"}function Kl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function zl(t,e){return Kl(t)===Kl(e)}function Gl(t,e){return z(e)?e.findIndex(n=>zl(n,t)):X(e)&&zl(e,t)?0:-1}const Vf=t=>t[0]==="_"||t==="$stable",dc=t=>z(t)?t.map(At):[At(t)],Zy=(t,e,n)=>{const s=Ay((...r)=>dc(e(...r)),n);return s._c=!1,s},$f=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Vf(r))continue;const i=t[r];if(X(i))e[r]=Zy(r,i,s);else if(i!=null){const o=dc(i);e[r]=()=>o}}},Bf=(t,e)=>{const n=dc(e);t.slots.default=()=>n},ev=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),ui(e,"_",n)):$f(e,t.slots={})}else t.slots={},e&&Bf(t,e);ui(t.slots,Wi,1)},tv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ge;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(r,e),!n&&a===1&&delete r._):(i=!e.$stable,$f(e,r)),o=e}else e&&(Bf(t,e),o={default:1});if(i)for(const a in r)!Vf(a)&&!(a in o)&&delete r[a]};function mn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ts(),dt(c,n,8,[t.el,a,t,e]),bs())}}function jf(){return{app:null,config:{isNativeTag:Om,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nv=0;function sv(t,e){return function(s,r=null){r!=null&&!ke(r)&&(r=null);const i=jf(),o=new Set;let a=!1;const c=i.app={_uid:nv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:bv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=it(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,yc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function fa(t,e,n,s,r=!1){if(z(t)){t.forEach((d,g)=>fa(d,e&&(z(e)?e[g]:e),n,s,r));return}if(ca(s)&&!r)return;const i=s.shapeFlag&4?yc(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Re(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):xe(l)&&(l.value=null)),X(c))on(c,a,12,[o,u]);else{const d=Re(c),g=xe(c);if(d||g){const y=()=>{if(t.f){const N=d?u[c]:c.value;r?z(N)&&ec(N,i):z(N)?N.includes(i)||N.push(i):d?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ne(h,c)&&(h[c]=o)):xe(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,et(y,n)):y()}}}const et=Oy;function rv(t){return iv(t)}function iv(t,e){const n=Um();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=wt,cloneNode:y,insertStaticContent:N}=t,I=(f,p,m,_=null,w=null,A=null,O=!1,b=null,C=!!p.dynamicChildren)=>{if(f===p)return;f&&!_n(f,p)&&(_=F(f),ut(f,w,A,!0),f=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:E,ref:$,shapeFlag:M}=p;switch(E){case gc:R(f,p,m,_);break;case hn:x(f,p,m,_);break;case ti:f==null&&K(p,m,_,O);break;case bt:zt(f,p,m,_,w,A,O,b,C);break;default:M&1?Ee(f,p,m,_,w,A,O,b,C):M&6?Hn(f,p,m,_,w,A,O,b,C):(M&64||M&128)&&E.process(f,p,m,_,w,A,O,b,C,pe)}$!=null&&w&&fa($,f&&f.ref,A,p||f,!p)},R=(f,p,m,_)=>{if(f==null)s(p.el=a(p.children),m,_);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},x=(f,p,m,_)=>{f==null?s(p.el=c(p.children||""),m,_):p.el=f.el},K=(f,p,m,_)=>{[f.el,f.anchor]=N(f.children,p,m,_,f.el,f.anchor)},G=({el:f,anchor:p},m,_)=>{let w;for(;f&&f!==p;)w=d(f),s(f,m,_),f=w;s(p,m,_)},ae=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},Ee=(f,p,m,_,w,A,O,b,C)=>{O=O||p.type==="svg",f==null?Y(p,m,_,w,A,O,b,C):je(f,p,w,A,O,b,C)},Y=(f,p,m,_,w,A,O,b)=>{let C,E;const{type:$,props:M,shapeFlag:B,transition:q,patchFlag:te,dirs:ve}=f;if(f.el&&y!==void 0&&te===-1)C=f.el=y(f.el);else{if(C=f.el=o(f.type,A,M&&M.is,M),B&8?u(C,f.children):B&16&&fe(f.children,C,null,_,w,A&&$!=="foreignObject",O,b),ve&&mn(f,null,_,"created"),M){for(const me in M)me!=="value"&&!Qr(me)&&i(C,me,null,M[me],A,f.children,_,w,k);"value"in M&&i(C,"value",null,M.value),(E=M.onVnodeBeforeMount)&&Tt(E,_,f)}Ie(C,f,f.scopeId,O,_)}ve&&mn(f,null,_,"beforeMount");const ue=(!w||w&&!w.pendingBranch)&&q&&!q.persisted;ue&&q.beforeEnter(C),s(C,p,m),((E=M&&M.onVnodeMounted)||ue||ve)&&et(()=>{E&&Tt(E,_,f),ue&&q.enter(C),ve&&mn(f,null,_,"mounted")},w)},Ie=(f,p,m,_,w)=>{if(m&&g(f,m),_)for(let A=0;A<_.length;A++)g(f,_[A]);if(w){let A=w.subTree;if(p===A){const O=w.vnode;Ie(f,O,O.scopeId,O.slotScopeIds,w.parent)}}},fe=(f,p,m,_,w,A,O,b,C=0)=>{for(let E=C;E<f.length;E++){const $=f[E]=b?Qt(f[E]):At(f[E]);I(null,$,p,m,_,w,A,O,b)}},je=(f,p,m,_,w,A,O)=>{const b=p.el=f.el;let{patchFlag:C,dynamicChildren:E,dirs:$}=p;C|=f.patchFlag&16;const M=f.props||ge,B=p.props||ge;let q;m&&yn(m,!1),(q=B.onVnodeBeforeUpdate)&&Tt(q,m,p,f),$&&mn(p,f,m,"beforeUpdate"),m&&yn(m,!0);const te=w&&p.type!=="foreignObject";if(E?qe(f.dynamicChildren,E,b,m,_,te,A):O||nt(f,p,b,null,m,_,te,A,!1),C>0){if(C&16)Ge(b,p,M,B,m,_,w);else if(C&2&&M.class!==B.class&&i(b,"class",null,B.class,w),C&4&&i(b,"style",M.style,B.style,w),C&8){const ve=p.dynamicProps;for(let ue=0;ue<ve.length;ue++){const me=ve[ue],yt=M[me],Gn=B[me];(Gn!==yt||me==="value")&&i(b,me,yt,Gn,w,f.children,m,_,k)}}C&1&&f.children!==p.children&&u(b,p.children)}else!O&&E==null&&Ge(b,p,M,B,m,_,w);((q=B.onVnodeUpdated)||$)&&et(()=>{q&&Tt(q,m,p,f),$&&mn(p,f,m,"updated")},_)},qe=(f,p,m,_,w,A,O)=>{for(let b=0;b<p.length;b++){const C=f[b],E=p[b],$=C.el&&(C.type===bt||!_n(C,E)||C.shapeFlag&70)?h(C.el):m;I(C,E,$,null,_,w,A,O,!0)}},Ge=(f,p,m,_,w,A,O)=>{if(m!==_){for(const b in _){if(Qr(b))continue;const C=_[b],E=m[b];C!==E&&b!=="value"&&i(f,b,E,C,O,p.children,w,A,k)}if(m!==ge)for(const b in m)!Qr(b)&&!(b in _)&&i(f,b,m[b],null,O,p.children,w,A,k);"value"in _&&i(f,"value",m.value,_.value)}},zt=(f,p,m,_,w,A,O,b,C)=>{const E=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:B,slotScopeIds:q}=p;q&&(b=b?b.concat(q):q),f==null?(s(E,m,_),s($,m,_),fe(p.children,m,$,w,A,O,b,C)):M>0&&M&64&&B&&f.dynamicChildren?(qe(f.dynamicChildren,B,m,w,A,O,b),(p.key!=null||w&&p===w.subTree)&&qf(f,p,!0)):nt(f,p,m,$,w,A,O,b,C)},Hn=(f,p,m,_,w,A,O,b,C)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?w.ctx.activate(p,m,_,O,C):Kn(p,m,_,w,A,O,C):Ce(f,p,C)},Kn=(f,p,m,_,w,A,O)=>{const b=f.component=mv(f,_,w);if(zi(f)&&(b.ctx.renderer=pe),vv(b),b.asyncDep){if(w&&w.registerDep(b,de),!f.el){const C=b.subTree=it(hn);x(null,C,p,m)}return}de(b,f,p,m,w,A,O)},Ce=(f,p,m)=>{const _=p.component=f.component;if(Ry(f,p,m))if(_.asyncDep&&!_.asyncResolved){ce(_,p,m);return}else _.next=p,Ey(_.update),_.update();else p.component=f.component,p.el=f.el,_.vnode=p},de=(f,p,m,_,w,A,O)=>{const b=()=>{if(f.isMounted){let{next:$,bu:M,u:B,parent:q,vnode:te}=f,ve=$,ue;yn(f,!1),$?($.el=te.el,ce(f,$,O)):$=te,M&&Ao(M),(ue=$.props&&$.props.onVnodeBeforeUpdate)&&Tt(ue,q,$,te),yn(f,!0);const me=So(f),yt=f.subTree;f.subTree=me,I(yt,me,h(yt.el),F(yt),f,w,A),$.el=me.el,ve===null&&ky(f,me.el),B&&et(B,w),(ue=$.props&&$.props.onVnodeUpdated)&&et(()=>Tt(ue,q,$,te),w)}else{let $;const{el:M,props:B}=p,{bm:q,m:te,parent:ve}=f,ue=ca(p);if(yn(f,!1),q&&Ao(q),!ue&&($=B&&B.onVnodeBeforeMount)&&Tt($,ve,p),yn(f,!0),M&&W){const me=()=>{f.subTree=So(f),W(M,f.subTree,f,w,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&me()):me()}else{const me=f.subTree=So(f);I(null,me,m,_,f,w,A),p.el=me.el}if(te&&et(te,w),!ue&&($=B&&B.onVnodeMounted)){const me=p;et(()=>Tt($,ve,me),w)}p.shapeFlag&256&&f.a&&et(f.a,w),f.isMounted=!0,p=m=_=null}},C=f.effect=new rc(b,()=>wf(f.update),f.scope),E=f.update=C.run.bind(C);E.id=f.uid,yn(f,!0),E()},ce=(f,p,m)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Qy(f,p.props,_,m),tv(f,p.children,m),Ts(),hc(void 0,f.update),bs()},nt=(f,p,m,_,w,A,O,b,C=!1)=>{const E=f&&f.children,$=f?f.shapeFlag:0,M=p.children,{patchFlag:B,shapeFlag:q}=p;if(B>0){if(B&128){Mt(E,M,m,_,w,A,O,b,C);return}else if(B&256){zn(E,M,m,_,w,A,O,b,C);return}}q&8?($&16&&k(E,w,A),M!==E&&u(m,M)):$&16?q&16?Mt(E,M,m,_,w,A,O,b,C):k(E,w,A,!0):($&8&&u(m,""),q&16&&fe(M,m,_,w,A,O,b,C))},zn=(f,p,m,_,w,A,O,b,C)=>{f=f||ns,p=p||ns;const E=f.length,$=p.length,M=Math.min(E,$);let B;for(B=0;B<M;B++){const q=p[B]=C?Qt(p[B]):At(p[B]);I(f[B],q,m,null,w,A,O,b,C)}E>$?k(f,w,A,!0,!1,M):fe(p,m,_,w,A,O,b,C,M)},Mt=(f,p,m,_,w,A,O,b,C)=>{let E=0;const $=p.length;let M=f.length-1,B=$-1;for(;E<=M&&E<=B;){const q=f[E],te=p[E]=C?Qt(p[E]):At(p[E]);if(_n(q,te))I(q,te,m,null,w,A,O,b,C);else break;E++}for(;E<=M&&E<=B;){const q=f[M],te=p[B]=C?Qt(p[B]):At(p[B]);if(_n(q,te))I(q,te,m,null,w,A,O,b,C);else break;M--,B--}if(E>M){if(E<=B){const q=B+1,te=q<$?p[q].el:_;for(;E<=B;)I(null,p[E]=C?Qt(p[E]):At(p[E]),m,te,w,A,O,b,C),E++}}else if(E>B)for(;E<=M;)ut(f[E],w,A,!0),E++;else{const q=E,te=E,ve=new Map;for(E=te;E<=B;E++){const st=p[E]=C?Qt(p[E]):At(p[E]);st.key!=null&&ve.set(st.key,E)}let ue,me=0;const yt=B-te+1;let Gn=!1,kl=0;const Ps=new Array(yt);for(E=0;E<yt;E++)Ps[E]=0;for(E=q;E<=M;E++){const st=f[E];if(me>=yt){ut(st,w,A,!0);continue}let It;if(st.key!=null)It=ve.get(st.key);else for(ue=te;ue<=B;ue++)if(Ps[ue-te]===0&&_n(st,p[ue])){It=ue;break}It===void 0?ut(st,w,A,!0):(Ps[It-te]=E+1,It>=kl?kl=It:Gn=!0,I(st,p[It],m,null,w,A,O,b,C),me++)}const Nl=Gn?ov(Ps):ns;for(ue=Nl.length-1,E=yt-1;E>=0;E--){const st=te+E,It=p[st],Ol=st+1<$?p[st+1].el:_;Ps[E]===0?I(null,It,m,Ol,w,A,O,b,C):Gn&&(ue<0||E!==Nl[ue]?Et(It,m,Ol,2):ue--)}}},Et=(f,p,m,_,w=null)=>{const{el:A,type:O,transition:b,children:C,shapeFlag:E}=f;if(E&6){Et(f.component.subTree,p,m,_);return}if(E&128){f.suspense.move(p,m,_);return}if(E&64){O.move(f,p,m,pe);return}if(O===bt){s(A,p,m);for(let M=0;M<C.length;M++)Et(C[M],p,m,_);s(f.anchor,p,m);return}if(O===ti){G(f,p,m);return}if(_!==2&&E&1&&b)if(_===0)b.beforeEnter(A),s(A,p,m),et(()=>b.enter(A),w);else{const{leave:M,delayLeave:B,afterLeave:q}=b,te=()=>s(A,p,m),ve=()=>{M(A,()=>{te(),q&&q()})};B?B(A,te,ve):ve()}else s(A,p,m)},ut=(f,p,m,_=!1,w=!1)=>{const{type:A,props:O,ref:b,children:C,dynamicChildren:E,shapeFlag:$,patchFlag:M,dirs:B}=f;if(b!=null&&fa(b,null,m,f,!0),$&256){p.ctx.deactivate(f);return}const q=$&1&&B,te=!ca(f);let ve;if(te&&(ve=O&&O.onVnodeBeforeUnmount)&&Tt(ve,p,f),$&6)L(f.component,m,_);else{if($&128){f.suspense.unmount(m,_);return}q&&mn(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,m,w,pe,_):E&&(A!==bt||M>0&&M&64)?k(E,p,m,!1,!0):(A===bt&&M&384||!w&&$&16)&&k(C,p,m),_&&To(f)}(te&&(ve=O&&O.onVnodeUnmounted)||q)&&et(()=>{ve&&Tt(ve,p,f),q&&mn(f,null,p,"unmounted")},m)},To=f=>{const{type:p,el:m,anchor:_,transition:w}=f;if(p===bt){v(m,_);return}if(p===ti){ae(f);return}const A=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:b}=w,C=()=>O(m,A);b?b(f.el,A,C):C()}else A()},v=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},L=(f,p,m)=>{const{bum:_,scope:w,update:A,subTree:O,um:b}=f;_&&Ao(_),w.stop(),A&&(A.active=!1,ut(O,f,p,m)),b&&et(b,p),et(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},k=(f,p,m,_=!1,w=!1,A=0)=>{for(let O=A;O<f.length;O++)ut(f[O],p,m,_,w)},F=f=>f.shapeFlag&6?F(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),le=(f,p,m)=>{f==null?p._vnode&&ut(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,m),If(),p._vnode=f},pe={p:I,um:ut,m:Et,r:To,mt:Kn,mc:fe,pc:nt,pbc:qe,n:F,o:t};let Z,W;return e&&([Z,W]=e(pe)),{render:le,hydrate:Z,createApp:sv(le,Z)}}function yn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qf(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Qt(r[i]),a.el=o.el),n||qf(o,a))}}function ov(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const av=t=>t.__isTeleport,pc="components";function GS(t,e){return Kf(pc,t,!0,e)||t}const Hf=Symbol();function WS(t){return Re(t)?Kf(pc,t,!1)||t:t||Hf}function Kf(t,e,n=!0,s=!1){const r=vt||Oe;if(r){const i=r.type;if(t===pc){const a=Iv(i);if(a&&(a===e||a===Nt(e)||a===qi(Nt(e))))return i}const o=Wl(r[t]||i[t],e)||Wl(r.appContext[t],e);return!o&&s?i:o}}function Wl(t,e){return t&&(t[e]||t[Nt(e)]||t[qi(Nt(e))])}const bt=Symbol(void 0),gc=Symbol(void 0),hn=Symbol(void 0),ti=Symbol(void 0),Hs=[];let Cn=null;function YS(t=!1){Hs.push(Cn=t?null:[])}function cv(){Hs.pop(),Cn=Hs[Hs.length-1]||null}let pi=1;function Yl(t){pi+=t}function zf(t){return t.dynamicChildren=pi>0?Cn||ns:null,cv(),pi>0&&Cn&&Cn.push(t),t}function XS(t,e,n,s,r,i){return zf(Wf(t,e,n,s,r,i,!0))}function JS(t,e,n,s,r){return zf(it(t,e,n,s,r,!0))}function da(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const Wi="__vInternal",Gf=({key:t})=>t!=null?t:null,ni=({ref:t,ref_key:e,ref_for:n})=>t!=null?Re(t)||xe(t)||X(t)?{i:vt,r:t,k:e,f:!!n}:t:null;function Wf(t,e=null,n=null,s=0,r=null,i=t===bt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gf(e),ref:e&&ni(e),scopeId:Af,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(mc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Re(n)?8:16),pi>0&&!o&&Cn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Cn.push(c),c}const it=lv;function lv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Hf)&&(t=hn),da(t)){const a=ls(t,e,!0);return n&&mc(a,n),a}if(Tv(t)&&(t=t.__vccOpts),e){e=uv(e);let{class:a,style:c}=e;a&&!Re(a)&&(e.class=Qa(a)),ke(c)&&(hf(c)&&!z(c)&&(c=ze({},c)),e.style=Ja(c))}const o=Re(t)?1:Ny(t)?128:av(t)?64:ke(t)?4:X(t)?2:0;return Wf(t,e,n,s,r,o,i,!0)}function uv(t){return t?hf(t)||Wi in t?ze({},t):t:null}function ls(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?fv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Gf(a),ref:e&&e.ref?n&&r?z(r)?r.concat(ni(e)):[r,ni(e)]:ni(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ls(t.ssContent),ssFallback:t.ssFallback&&ls(t.ssFallback),el:t.el,anchor:t.anchor}}function hv(t=" ",e=0){return it(gc,null,t,e)}function QS(t,e){const n=it(ti,null,t);return n.staticCount=e,n}function At(t){return t==null||typeof t=="boolean"?it(hn):z(t)?it(bt,null,t.slice()):typeof t=="object"?Qt(t):it(gc,null,String(t))}function Qt(t){return t.el===null||t.memo?t:ls(t)}function mc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),mc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Wi in e)?e._ctx=vt:r===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),s&64?(n=16,e=[hv(e)]):n=8);t.children=e,t.shapeFlag|=n}function fv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Qa([e.class,s.class]));else if(r==="style")e.style=Ja([e.style,s.style]);else if($i(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Tt(t,e,n,s=null){dt(t,e,7,[n,s])}function ZS(t,e,n,s){let r;const i=n&&n[s];if(z(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ke(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const pa=t=>t?Yf(t)?yc(t)||t.proxy:pa(t.parent):null,gi=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pa(t.parent),$root:t=>pa(t.root),$emit:t=>t.emit,$options:t=>Lf(t),$forceUpdate:t=>()=>wf(t.update),$nextTick:t=>vf.bind(t.proxy),$watch:t=>Dy.bind(t)}),dv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ge&&ne(s,e))return o[e]=1,s[e];if(r!==ge&&ne(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=3,i[e];if(n!==ge&&ne(n,e))return o[e]=4,n[e];la&&(o[e]=0)}}const u=gi[e];let h,d;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&ne(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ge&&ne(r,e)?(r[e]=n,!0):s!==ge&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ge&&ne(t,o)||e!==ge&&ne(e,o)||(a=i[0])&&ne(a,o)||ne(s,o)||ne(gi,o)||ne(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},pv=jf();let gv=0;function mv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||pv,i={uid:gv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uf(s,r),emitsOptions:bf(s,r),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=by.bind(null,i),t.ce&&t.ce(i),i}let Oe=null;const yv=()=>Oe||vt,us=t=>{Oe=t,t.scope.on()},Rn=()=>{Oe&&Oe.scope.off(),Oe=null};function Yf(t){return t.vnode.shapeFlag&4}let sr=!1;function vv(t,e=!1){sr=e;const{props:n,children:s}=t.vnode,r=Yf(t);Jy(t,n,r,e),ev(t,s);const i=r?wv(t,e):void 0;return sr=!1,i}function wv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ff(new Proxy(t.ctx,dv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Ev(t):null;us(t),Ts();const i=on(s,t,0,[t.props,r]);if(bs(),Rn(),Yh(i)){if(i.then(Rn,Rn),e)return i.then(o=>{Xl(t,o,e)}).catch(o=>{Ki(o,t,0)});t.asyncDep=i}else Xl(t,i,e)}else Xf(t,e)}function Xl(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=mf(e)),Xf(t,n)}let Jl;function Xf(t,e,n){const s=t.type;if(!t.render){if(!e&&Jl&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=ze(ze({isCustomElement:i,delimiters:a},o),c);s.render=Jl(r,l)}}t.render=s.render||wt}us(t),Ts(),zy(t),bs(),Rn()}function _v(t){return new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}})}function Ev(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=_v(t))},slots:t.slots,emit:t.emit,expose:e}}function yc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mf(ff(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gi)return gi[n](t)}}))}function Iv(t){return X(t)&&t.displayName||t.name}function Tv(t){return X(t)&&"__vccOpts"in t}const St=(t,e)=>vy(t,e,sr);function Jf(t,e,n){const s=arguments.length;return s===2?ke(e)&&!z(e)?da(e)?it(t,null,[e]):it(t,e):it(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&da(n)&&(n=[n]),it(t,e,n))}const bv="3.2.31",Av="http://www.w3.org/2000/svg",En=typeof document!="undefined"?document:null,Ql=En&&En.createElement("template"),Sv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?En.createElementNS(Av,t):En.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ql.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ql.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Rv(t,e,n){const s=t.style,r=Re(n);if(n&&!r){for(const i in n)ga(s,i,n[i]);if(e&&!Re(e))for(const i in e)n[i]==null&&ga(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Zl=/\s*!important$/;function ga(t,e,n){if(z(n))n.forEach(s=>ga(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=kv(t,e);Zl.test(n)?t.setProperty(Is(s),n.replace(Zl,""),"important"):t[s]=n}}const eu=["Webkit","Moz","ms"],Ro={};function kv(t,e){const n=Ro[e];if(n)return n;let s=Nt(e);if(s!=="filter"&&s in t)return Ro[e]=s;s=qi(s);for(let r=0;r<eu.length;r++){const i=eu[r]+s;if(i in t)return Ro[e]=i}return e}const tu="http://www.w3.org/1999/xlink";function Nv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(tu,e.slice(6,e.length)):t.setAttributeNS(tu,e,n);else{const i=Cm(e);n==null||i&&!zh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ov(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=zh(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let mi=Date.now,Qf=!1;if(typeof window!="undefined"){mi()>document.createEvent("Event").timeStamp&&(mi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Qf=!!(t&&Number(t[1])<=53)}let ma=0;const Dv=Promise.resolve(),Pv=()=>{ma=0},Mv=()=>ma||(Dv.then(Pv),ma=mi());function xv(t,e,n,s){t.addEventListener(e,n,s)}function Lv(t,e,n,s){t.removeEventListener(e,n,s)}function Fv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Uv(e);if(s){const l=i[e]=Vv(s,r);xv(t,a,l,c)}else o&&(Lv(t,a,o,c),i[e]=void 0)}}const nu=/(?:Once|Passive|Capture)$/;function Uv(t){let e;if(nu.test(t)){e={};let n;for(;n=t.match(nu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Is(t.slice(2)),e]}function Vv(t,e){const n=s=>{const r=s.timeStamp||mi();(Qf||r>=n.attached-1)&&dt($v(s,n.value),e,5,[s])};return n.value=t,n.attached=Mv(),n}function $v(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const su=/^on[a-z]/,Bv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Cv(t,s,r):e==="style"?Rv(t,n,s):$i(e)?Za(e)||Fv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jv(t,e,s,r))?Ov(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Nv(t,e,s,r))};function jv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&su.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||su.test(e)&&Re(n)?!1:e in t}const qv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};xy.props;const Hv=ze({patchProp:Bv},Sv);let ru;function Kv(){return ru||(ru=rv(Hv))}const eC=(...t)=>{const e=Kv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=zv(s);if(!r)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function zv(t){return Re(t)?document.querySelector(t):t}/**
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
 */const Zf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Gv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wv=function(t){const e=Zf(t);return ed.encodeByteArray(e,!0)},td=function(t){return Wv(t).replace(/\./g,"")},Yv=function(t){try{return ed.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Xv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function De(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function vc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jv(){return De().indexOf("Electron/")>=0}function rd(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qv(){return De().indexOf("MSAppHost/")>=0}function id(){return typeof indexedDB=="object"}function od(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Zv(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const ew="FirebaseError";class Kt extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=ew,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?tw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Kt(r,a,s)}}function tw(t,e){return t.replace(nw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const nw=/\{\$([^}]+)}/g;function sw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(iu(i)&&iu(o)){if(!rr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function iu(t){return t!==null&&typeof t=="object"}/**
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
 */function Er(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function rw(t,e){const n=new iw(t,e);return n.subscribe.bind(n)}class iw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ow(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ko),r.error===void 0&&(r.error=ko),r.complete===void 0&&(r.complete=ko);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ow(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ko(){}/**
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
 */const aw=1e3,cw=2,lw=4*60*60*1e3,uw=.5;function ou(t,e=aw,n=cw){const s=e*Math.pow(n,t),r=Math.round(uw*s*(Math.random()-.5)*2);return Math.min(lw,s+r)}/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Us(t,e){return new Promise((n,s)=>{t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;s(`${e}: ${(i=r.target.error)===null||i===void 0?void 0:i.message}`)}})}class au{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new ad(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new cd(this._db.createObjectStore(e,n))}close(){this._db.close()}}class ad{constructor(e){this._transaction=e,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(e){return new cd(this._transaction.objectStore(e))}}class cd{constructor(e){this._store=e}index(e){return new cu(this._store.index(e))}createIndex(e,n,s){return new cu(this._store.createIndex(e,n,s))}get(e){const n=this._store.get(e);return Us(n,"Error reading from IndexedDB")}put(e,n){const s=this._store.put(e,n);return Us(s,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Us(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Us(e,"Error clearing IndexedDB object store")}}class cu{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Us(n,"Error reading from IndexedDB")}}function ld(t,e,n){return new Promise((s,r)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{s(new au(o.target.result))},i.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new au(i.result),o.oldVersion,o.newVersion,new ad(i.transaction))}}catch(i){r(`Error opening indexedDB: ${i.message}`)}})}class _t{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wn="[DEFAULT]";/**
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
 */class hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dw(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fw(t){return t===wn?void 0:t}function dw(t){return t.instantiationMode==="EAGER"}/**
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
 */class pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const gw={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},mw=re.INFO,yw={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},vw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=yw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yi{constructor(e){this.name=e,this._logLevel=mw,this._logHandler=vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}/**
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
 */class ww{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_w(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _w(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ya="@firebase/app",lu="0.7.20";/**
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
 */const wc=new Yi("@firebase/app"),Ew="@firebase/app-compat",Iw="@firebase/analytics-compat",Tw="@firebase/analytics",bw="@firebase/app-check-compat",Aw="@firebase/app-check",Sw="@firebase/auth",Cw="@firebase/auth-compat",Rw="@firebase/database",kw="@firebase/database-compat",Nw="@firebase/functions",Ow="@firebase/functions-compat",Dw="@firebase/installations",Pw="@firebase/installations-compat",Mw="@firebase/messaging",xw="@firebase/messaging-compat",Lw="@firebase/performance",Fw="@firebase/performance-compat",Uw="@firebase/remote-config",Vw="@firebase/remote-config-compat",$w="@firebase/storage",Bw="@firebase/storage-compat",jw="@firebase/firestore",qw="@firebase/firestore-compat",Hw="firebase",Kw="9.6.10";/**
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
 */const ud="[DEFAULT]",zw={[ya]:"fire-core",[Ew]:"fire-core-compat",[Tw]:"fire-analytics",[Iw]:"fire-analytics-compat",[Aw]:"fire-app-check",[bw]:"fire-app-check-compat",[Sw]:"fire-auth",[Cw]:"fire-auth-compat",[Rw]:"fire-rtdb",[kw]:"fire-rtdb-compat",[Nw]:"fire-fn",[Ow]:"fire-fn-compat",[Dw]:"fire-iid",[Pw]:"fire-iid-compat",[Mw]:"fire-fcm",[xw]:"fire-fcm-compat",[Lw]:"fire-perf",[Fw]:"fire-perf-compat",[Uw]:"fire-rc",[Vw]:"fire-rc-compat",[$w]:"fire-gcs",[Bw]:"fire-gcs-compat",[jw]:"fire-fst",[qw]:"fire-fst-compat","fire-js":"fire-js",[Hw]:"fire-js-all"};/**
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
 */const yi=new Map,va=new Map;function Gw(t,e){try{t.container.addComponent(e)}catch(n){wc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(va.has(e))return wc.debug(`There were multiple attempts to register component ${e}.`),!1;va.set(e,t);for(const n of yi.values())Gw(n,t);return!0}function jn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ww={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},On=new Bn("app","Firebase",Ww);/**
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
 */class Yw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const Ir=Kw;function tC(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ud,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw On.create("bad-app-name",{appName:String(s)});const r=yi.get(s);if(r){if(rr(t,r.options)&&rr(n,r.config))return r;throw On.create("duplicate-app",{appName:s})}const i=new pw(s);for(const a of va.values())i.addComponent(a);const o=new Yw(t,n,i);return yi.set(s,o),o}function _c(t=ud){const e=yi.get(t);if(!e)throw On.create("no-app",{appName:t});return e}function pt(t,e,n){var s;let r=(s=zw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wc.warn(a.join(" "));return}Ot(new _t(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Xw="firebase-heartbeat-database",Jw=1,ir="firebase-heartbeat-store";let No=null;function hd(){return No||(No=ld(Xw,Jw,(t,e)=>{switch(e){case 0:t.createObjectStore(ir)}}).catch(t=>{throw On.create("storage-open",{originalErrorMessage:t.message})})),No}async function Qw(t){try{return(await hd()).transaction(ir).objectStore(ir).get(fd(t))}catch(e){throw On.create("storage-get",{originalErrorMessage:e.message})}}async function uu(t,e){try{const s=(await hd()).transaction(ir,"readwrite");return await s.objectStore(ir).put(e,fd(t)),s.complete}catch(n){throw On.create("storage-set",{originalErrorMessage:n.message})}}function fd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Zw=1024,e_=30*24*60*60*1e3;class t_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new s_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=e_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hu(),{heartbeatsToSend:n,unsentEntries:s}=n_(this._heartbeatsCache.heartbeats),r=td(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function hu(){return new Date().toISOString().substring(0,10)}function n_(t,e=Zw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),fu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),fu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class s_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return id()?od().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function fu(t){return td(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function r_(t){Ot(new _t("platform-logger",e=>new ww(e),"PRIVATE")),Ot(new _t("heartbeat",e=>new t_(e),"PRIVATE")),pt(ya,lu,t),pt(ya,lu,"esm2017"),pt("fire-js","")}r_("");var i_="firebase",o_="9.6.10";/**
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
 */pt(i_,o_,"app");const dd="@firebase/installations",Ec="0.5.7";/**
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
 */const pd=1e4,gd=`w:${Ec}`,md="FIS_v2",a_="https://firebaseinstallations.googleapis.com/v1",c_=60*60*1e3,l_="installations",u_="Installations";/**
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
 */const h_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Dn=new Bn(l_,u_,h_);function yd(t){return t instanceof Kt&&t.code.includes("request-failed")}/**
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
 */function vd({projectId:t}){return`${a_}/projects/${t}/installations`}function wd(t){return{token:t.token,requestStatus:2,expiresIn:d_(t.expiresIn),creationTime:Date.now()}}async function _d(t,e){const s=(await e.json()).error;return Dn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ed({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function f_(t,{refreshToken:e}){const n=Ed(t);return n.append("Authorization",p_(e)),n}async function Id(t){const e=await t();return e.status>=500&&e.status<600?t():e}function d_(t){return Number(t.replace("s","000"))}function p_(t){return`${md} ${t}`}/**
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
 */async function g_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=vd(t),r=Ed(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:md,appId:t.appId,sdkVersion:gd},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Id(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:wd(l.authToken)}}else throw await _d("Create Installation",c)}/**
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
 */function Td(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function m_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const y_=/^[cdef][\w-]{21}$/,wa="";function v_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=w_(t);return y_.test(n)?n:wa}catch{return wa}}function w_(t){return m_(t).substr(0,22)}/**
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
 */function Xi(t){return`${t.appName}!${t.appId}`}/**
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
 */const bd=new Map;function Ad(t,e){const n=Xi(t);Sd(n,e),__(n,e)}function Sd(t,e){const n=bd.get(t);if(!!n)for(const s of n)s(e)}function __(t,e){const n=E_();n&&n.postMessage({key:t,fid:e}),I_()}let In=null;function E_(){return!In&&"BroadcastChannel"in self&&(In=new BroadcastChannel("[Firebase] FID Change"),In.onmessage=t=>{Sd(t.data.key,t.data.fid)}),In}function I_(){bd.size===0&&In&&(In.close(),In=null)}/**
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
 */const T_="firebase-installations-database",b_=1,Pn="firebase-installations-store";let Oo=null;function Ic(){return Oo||(Oo=ld(T_,b_,(t,e)=>{switch(e){case 0:t.createObjectStore(Pn)}})),Oo}async function vi(t,e){const n=Xi(t),r=(await Ic()).transaction(Pn,"readwrite"),i=r.objectStore(Pn),o=await i.get(n);return await i.put(e,n),await r.complete,(!o||o.fid!==e.fid)&&Ad(t,e.fid),e}async function Cd(t){const e=Xi(t),s=(await Ic()).transaction(Pn,"readwrite");await s.objectStore(Pn).delete(e),await s.complete}async function Ji(t,e){const n=Xi(t),r=(await Ic()).transaction(Pn,"readwrite"),i=r.objectStore(Pn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.complete,a&&(!o||o.fid!==a.fid)&&Ad(t,a.fid),a}/**
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
 */async function Tc(t){let e;const n=await Ji(t.appConfig,s=>{const r=A_(s),i=S_(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===wa?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function A_(t){const e=t||{fid:v_(),registrationStatus:0};return Rd(e)}function S_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Dn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=C_(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:R_(t)}:{installationEntry:e}}async function C_(t,e){try{const n=await g_(t,e);return vi(t.appConfig,n)}catch(n){throw yd(n)&&n.customData.serverCode===409?await Cd(t.appConfig):await vi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function R_(t){let e=await du(t.appConfig);for(;e.registrationStatus===1;)await Td(100),e=await du(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Tc(t);return s||n}return e}function du(t){return Ji(t,e=>{if(!e)throw Dn.create("installation-not-found");return Rd(e)})}function Rd(t){return k_(t)?{fid:t.fid,registrationStatus:0}:t}function k_(t){return t.registrationStatus===1&&t.registrationTime+pd<Date.now()}/**
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
 */async function N_({appConfig:t,heartbeatServiceProvider:e},n){const s=O_(t,n),r=f_(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:gd,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Id(()=>fetch(s,a));if(c.ok){const l=await c.json();return wd(l)}else throw await _d("Generate Auth Token",c)}function O_(t,{fid:e}){return`${vd(t)}/${e}/authTokens:generate`}/**
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
 */async function bc(t,e=!1){let n;const s=await Ji(t.appConfig,i=>{if(!kd(i))throw Dn.create("not-registered");const o=i.authToken;if(!e&&M_(o))return i;if(o.requestStatus===1)return n=D_(t,e),i;{if(!navigator.onLine)throw Dn.create("app-offline");const a=L_(i);return n=P_(t,a),a}});return n?await n:s.authToken}async function D_(t,e){let n=await pu(t.appConfig);for(;n.authToken.requestStatus===1;)await Td(100),n=await pu(t.appConfig);const s=n.authToken;return s.requestStatus===0?bc(t,e):s}function pu(t){return Ji(t,e=>{if(!kd(e))throw Dn.create("not-registered");const n=e.authToken;return F_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function P_(t,e){try{const n=await N_(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await vi(t.appConfig,s),n}catch(n){if(yd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Cd(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await vi(t.appConfig,s)}throw n}}function kd(t){return t!==void 0&&t.registrationStatus===2}function M_(t){return t.requestStatus===2&&!x_(t)}function x_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+c_}function L_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function F_(t){return t.requestStatus===1&&t.requestTime+pd<Date.now()}/**
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
 */async function U_(t){const e=t,{installationEntry:n,registrationPromise:s}=await Tc(e);return s?s.catch(console.error):bc(e).catch(console.error),n.fid}/**
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
 */async function V_(t,e=!1){const n=t;return await $_(n),(await bc(n,e)).token}async function $_(t){const{registrationPromise:e}=await Tc(t);e&&await e}/**
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
 */function B_(t){if(!t||!t.options)throw Do("App Configuration");if(!t.name)throw Do("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Do(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Do(t){return Dn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Nd="installations",j_="installations-internal",q_=t=>{const e=t.getProvider("app").getImmediate(),n=B_(e),s=jn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},H_=t=>{const e=t.getProvider("app").getImmediate(),n=jn(e,Nd).getImmediate();return{getId:()=>U_(n),getToken:r=>V_(n,r)}};function K_(){Ot(new _t(Nd,q_,"PUBLIC")),Ot(new _t(j_,H_,"PRIVATE"))}K_();pt(dd,Ec);pt(dd,Ec,"esm2017");/**
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
 */const wi="analytics",z_="firebase_id",G_="origin",W_=60*1e3,Y_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Od="https://www.googletagmanager.com/gtag/js";/**
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
 */const ot=new Yi("@firebase/analytics");/**
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
 */function Dd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function X_(t,e){const n=document.createElement("script");n.src=`${Od}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function J_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Q_(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await Dd(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){ot.error(a)}t("config",r,i)}async function Z_(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Dd(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){ot.error(i)}}function eE(t,e,n,s){async function r(i,o,a){try{i==="event"?await Z_(t,e,n,o,a):i==="config"?await Q_(t,e,n,s,o,a):t("set",o)}catch(c){ot.error(c)}}return r}function tE(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=eE(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function nE(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Od))return e;return null}/**
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
 */const sE={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},gt=new Bn("analytics","Analytics",sE);/**
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
 */const rE=30,iE=1e3;class oE{constructor(e={},n=iE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Pd=new oE;function aE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cE(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:aE(s)},i=Y_.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function lE(t,e=Pd,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw gt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw gt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new fE;return setTimeout(async()=>{a.abort()},n!==void 0?n:W_),Md({appId:s,apiKey:r,measurementId:i},o,a,e)}async function Md(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Pd){const{appId:i,measurementId:o}=t;try{await uE(s,e)}catch(a){if(o)return ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}try{const a=await cE(t);return r.deleteThrottleMetadata(i),a}catch(a){if(!hE(a)){if(r.deleteThrottleMetadata(i),o)return ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:i,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?ou(n,r.intervalMillis,rE):ou(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return r.setThrottleMetadata(i,l),ot.debug(`Calling attemptFetch again in ${c} millis`),Md(t,l,s,r)}}function uE(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hE(t){if(!(t instanceof Kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class fE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function dE(){if(id())try{await od()}catch(t){return ot.warn(gt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return ot.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pE(t,e,n,s,r,i,o){var a;const c=lE(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ot.error(g)),e.push(c);const l=dE().then(g=>{if(g)return s.getId()}),[u,h]=await Promise.all([c,l]);nE()||X_(i,u.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[G_]="firebase",d.update=!0,h!=null&&(d[z_]=h),r("config",u.measurementId,d),u.measurementId}/**
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
 */class gE{constructor(e){this.app=e}_delete(){return delete Ks[this.app.options.appId],Promise.resolve()}}let Ks={},gu=[];const mu={};let Po="dataLayer",mE="gtag",yu,xd,vu=!1;function yE(){const t=[];if(vc()&&t.push("This is a browser extension environment."),Zv()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=gt.create("invalid-analytics-context",{errorInfo:e});ot.warn(n.message)}}function vE(t,e,n){yE();const s=t.options.appId;if(!s)throw gt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(Ks[s]!=null)throw gt.create("already-exists",{id:s});if(!vu){J_(Po);const{wrappedGtag:i,gtagCore:o}=tE(Ks,gu,mu,Po,mE);xd=i,yu=o,vu=!0}return Ks[s]=pE(t,gu,mu,e,yu,Po,n),new gE(t)}/**
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
 */async function wE(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}function nC(t=_c()){t=mt(t);const e=jn(t,wi);return e.isInitialized()?e.getImmediate():_E(t)}function _E(t,e={}){const n=jn(t,wi);if(n.isInitialized()){const r=n.getImmediate();if(rr(e,n.getOptions()))return r;throw gt.create("already-initialized")}return n.initialize({options:e})}function EE(t,e,n,s){t=mt(t),wE(xd,Ks[t.app.options.appId],e,n,s).catch(r=>ot.error(r))}const wu="@firebase/analytics",_u="0.7.7";function IE(){Ot(new _t(wi,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return vE(s,r,n)},"PUBLIC")),Ot(new _t("analytics-internal",t,"PRIVATE")),pt(wu,_u),pt(wu,_u,"esm2017");function t(e){try{const n=e.getProvider(wi).getImmediate();return{logEvent:(s,r,i)=>EE(n,s,r,i)}}catch(n){throw gt.create("interop-component-reg-failed",{reason:n})}}}IE();/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ld=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",As=t=>Ld?Symbol(t):"_vr_"+t,TE=As("rvlm"),Eu=As("rvd"),Ac=As("r"),Fd=As("rl"),_a=As("rvl"),Qn=typeof window!="undefined";function bE(t){return t.__esModule||Ld&&t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Mo(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const zs=()=>{},AE=/\/$/,SE=t=>t.replace(AE,"");function xo(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=NE(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function CE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Iu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function RE(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&hs(e.matched[s],n.matched[r])&&Ud(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ud(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kE(t[n],e[n]))return!1;return!0}function kE(t,e){return Array.isArray(t)?Tu(t,e):Array.isArray(e)?Tu(e,t):t===e}function Tu(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function NE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var or;(function(t){t.pop="pop",t.push="push"})(or||(or={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function OE(t){if(!t)if(Qn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),SE(t)}const DE=/^[^#]+#/;function PE(t,e){return t.replace(DE,"#")+e}function ME(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Qi=()=>({left:window.pageXOffset,top:window.pageYOffset});function xE(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=ME(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bu(t,e){return(history.state?history.state.position-e:-1)+t}const Ea=new Map;function LE(t,e){Ea.set(t,e)}function FE(t){const e=Ea.get(t);return Ea.delete(t),e}let UE=()=>location.protocol+"//"+location.host;function Vd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Iu(c,"")}return Iu(n,t)+s+r}function VE(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Vd(t,location),y=n.value,N=e.value;let I=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}I=N?d.position-N.position:0}else s(g);r.forEach(R=>{R(n.value,y,{delta:I,type:or.pop,direction:I?I>0?Gs.forward:Gs.back:Gs.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(he({},d.state,{scroll:Qi()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Au(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Qi():null}}function $E(t){const{history:e,location:n}=window,s={value:Vd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:UE()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=he({},e.state,Au(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=he({},r.value,e.state,{forward:c,scroll:Qi()});i(u.current,u,!0);const h=he({},Au(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function sC(t){t=OE(t);const e=$E(t),n=VE(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=he({location:"",base:t,go:s,createHref:PE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function BE(t){return typeof t=="string"||t&&typeof t=="object"}function $d(t){return typeof t=="string"||typeof t=="symbol"}const Wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bd=As("nf");var Su;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Su||(Su={}));function fs(t,e){return he(new Error,{type:t,[Bd]:!0},e)}function Yt(t,e){return t instanceof Error&&Bd in t&&(e==null||!!(t.type&e))}const Cu="[^/]+?",jE={sensitive:!1,strict:!1,start:!0,end:!0},qE=/[.+*?^${}()[\]/\\]/g;function HE(t,e){const n=he({},jE,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(qE,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:N,optional:I,regexp:R}=d;i.push({name:y,repeatable:N,optional:I});const x=R||Cu;if(x!==Cu){g+=10;try{new RegExp(`(${x})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+G.message)}}let K=N?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(K=I&&l.length<2?`(?:/${K})`:"/"+K),I&&(K+="?"),r+=K,g+=20,I&&(g+=-8),N&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:N,optional:I}=g,R=y in l?l[y]:"";if(Array.isArray(R)&&!N)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(R)?R.join("/"):R;if(!x)if(I)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function KE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zE(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=KE(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const GE={type:0,value:""},WE=/[a-zA-Z0-9_]/;function YE(t){if(!t)return[[]];if(t==="/")return[[GE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:WE.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function XE(t,e,n){const s=HE(YE(t.path),n),r=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function JE(t,e){const n=[],s=new Map;e=ku({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,y=ZE(u);y.aliasOf=d&&d.record;const N=ku(e,u),I=[y];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of K)I.push(he({},y,{components:d?d.record.components:y.components,path:G,aliasOf:d?d.record:y}))}let R,x;for(const K of I){const{path:G}=K;if(h&&G[0]!=="/"){const ae=h.record.path,Ee=ae[ae.length-1]==="/"?"":"/";K.path=h.record.path+(G&&Ee+G)}if(R=XE(K,h,N),d?d.alias.push(R):(x=x||R,x!==R&&x.alias.push(R),g&&u.name&&!Ru(R)&&o(u.name)),"children"in y){const ae=y.children;for(let Ee=0;Ee<ae.length;Ee++)i(ae[Ee],R,d&&d.children[Ee])}d=d||R,c(R)}return x?()=>{o(x)}:zs}function o(u){if($d(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&zE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!jd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ru(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},y,N;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw fs(1,{location:u});N=d.record.name,g=he(QE(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),y=d.stringify(g)}else if("path"in u)y=u.path,d=n.find(x=>x.re.test(y)),d&&(g=d.parse(y),N=d.record.name);else{if(d=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw fs(1,{location:u,currentLocation:h});N=d.record.name,g=he({},h.params,u.params),y=d.stringify(g)}const I=[];let R=d;for(;R;)I.unshift(R.record),R=R.parent;return{name:N,path:y,params:g,matched:I,meta:tI(I)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function QE(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ZE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:eI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function eI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ru(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tI(t){return t.reduce((e,n)=>he(e,n.meta),{})}function ku(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function jd(t,e){return e.children.some(n=>n===t||jd(t,n))}const qd=/#/g,nI=/&/g,sI=/\//g,rI=/=/g,iI=/\?/g,Hd=/\+/g,oI=/%5B/g,aI=/%5D/g,Kd=/%5E/g,cI=/%60/g,zd=/%7B/g,lI=/%7C/g,Gd=/%7D/g,uI=/%20/g;function Sc(t){return encodeURI(""+t).replace(lI,"|").replace(oI,"[").replace(aI,"]")}function hI(t){return Sc(t).replace(zd,"{").replace(Gd,"}").replace(Kd,"^")}function Ia(t){return Sc(t).replace(Hd,"%2B").replace(uI,"+").replace(qd,"%23").replace(nI,"%26").replace(cI,"`").replace(zd,"{").replace(Gd,"}").replace(Kd,"^")}function fI(t){return Ia(t).replace(rI,"%3D")}function dI(t){return Sc(t).replace(qd,"%23").replace(iI,"%3F")}function pI(t){return t==null?"":dI(t).replace(sI,"%2F")}function _i(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function gI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Hd," "),o=i.indexOf("="),a=_i(o<0?i:i.slice(0,o)),c=o<0?null:_i(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Nu(t){let e="";for(let n in t){const s=t[n];if(n=fI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Ia(i)):[s&&Ia(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function Ms(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Zt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(fs(4,{from:n,to:e})):h instanceof Error?a(h):BE(h)?a(fs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Lo(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(yI(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Zt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=bE(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Zt(d,n,s,i,o)()}))}}return r}function yI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ou(t){const e=an(Ac),n=an(Fd),s=St(()=>e.resolve(Bs(t.to))),r=St(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(hs.bind(null,u));if(d>-1)return d;const g=Du(c[l-2]);return l>1&&Du(u)===g&&h[h.length-1].path!==g?h.findIndex(hs.bind(null,c[l-2])):d}),i=St(()=>r.value>-1&&EI(n.params,s.value.params)),o=St(()=>r.value>-1&&r.value===n.matched.length-1&&Ud(n.params,s.value.params));function a(c={}){return _I(c)?e[Bs(t.replace)?"replace":"push"](Bs(t.to)).catch(zs):Promise.resolve()}return{route:s,href:St(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const vI=Nf({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ou,setup(t,{slots:e}){const n=_r(Ou(t)),{options:s}=an(Ac),r=St(()=>({[Pu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Pu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Jf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),wI=vI;function _I(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EI(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Du(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pu=(t,e,n)=>t!=null?t:e!=null?e:n,II=Nf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=an(_a),r=St(()=>t.route||s.value),i=an(Eu,0),o=St(()=>r.value.matched[i]);Zr(Eu,i+1),Zr(TE,o),Zr(_a,r);const a=dy();return ei(()=>[a.value,o.value,t.name],([c,l,u],[h,d,g])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!hs(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Mu(n.default,{Component:u,route:c});const d=l.props[t.name],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,N=Jf(u,he({},g,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Mu(n.default,{Component:N,route:c})||N}}});function Mu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TI=II;function rC(t){const e=JE(t.routes,t),n=t.parseQuery||gI,s=t.stringifyQuery||Nu,r=t.history,i=Ms(),o=Ms(),a=Ms(),c=py(Wt);let l=Wt;Qn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Mo.bind(null,v=>""+v),h=Mo.bind(null,pI),d=Mo.bind(null,_i);function g(v,L){let k,F;return $d(v)?(k=e.getRecordMatcher(v),F=L):F=v,e.addRoute(F,k)}function y(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function N(){return e.getRoutes().map(v=>v.record)}function I(v){return!!e.getRecordMatcher(v)}function R(v,L){if(L=he({},L||c.value),typeof v=="string"){const W=xo(n,v,L.path),f=e.resolve({path:W.path},L),p=r.createHref(W.fullPath);return he(W,f,{params:d(f.params),hash:_i(W.hash),redirectedFrom:void 0,href:p})}let k;if("path"in v)k=he({},v,{path:xo(n,v.path,L.path).path});else{const W=he({},v.params);for(const f in W)W[f]==null&&delete W[f];k=he({},v,{params:h(v.params)}),L.params=h(L.params)}const F=e.resolve(k,L),le=v.hash||"";F.params=u(d(F.params));const pe=CE(s,he({},v,{hash:hI(le),path:F.path})),Z=r.createHref(pe);return he({fullPath:pe,hash:le,query:s===Nu?mI(v.query):v.query||{}},F,{redirectedFrom:void 0,href:Z})}function x(v){return typeof v=="string"?xo(n,v,c.value.path):he({},v)}function K(v,L){if(l!==v)return fs(8,{from:L,to:v})}function G(v){return Y(v)}function ae(v){return G(he(x(v),{replace:!0}))}function Ee(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:k}=L;let F=typeof k=="function"?k(v):k;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=x(F):{path:F},F.params={}),he({query:v.query,hash:v.hash,params:v.params},F)}}function Y(v,L){const k=l=R(v),F=c.value,le=v.state,pe=v.force,Z=v.replace===!0,W=Ee(k);if(W)return Y(he(x(W),{state:le,force:pe,replace:Z}),L||k);const f=k;f.redirectedFrom=L;let p;return!pe&&RE(s,F,k)&&(p=fs(16,{to:f,from:F}),zn(F,F,!0,!1)),(p?Promise.resolve(p):fe(f,F)).catch(m=>Yt(m)?Yt(m,2)?m:nt(m):de(m,f,F)).then(m=>{if(m){if(Yt(m,2))return Y(he(x(m.to),{state:le,force:pe,replace:Z}),L||f)}else m=qe(f,F,!0,Z,le);return je(f,F,m),m})}function Ie(v,L){const k=K(v,L);return k?Promise.reject(k):Promise.resolve()}function fe(v,L){let k;const[F,le,pe]=bI(v,L);k=Lo(F.reverse(),"beforeRouteLeave",v,L);for(const W of F)W.leaveGuards.forEach(f=>{k.push(Zt(f,v,L))});const Z=Ie.bind(null,v,L);return k.push(Z),Wn(k).then(()=>{k=[];for(const W of i.list())k.push(Zt(W,v,L));return k.push(Z),Wn(k)}).then(()=>{k=Lo(le,"beforeRouteUpdate",v,L);for(const W of le)W.updateGuards.forEach(f=>{k.push(Zt(f,v,L))});return k.push(Z),Wn(k)}).then(()=>{k=[];for(const W of v.matched)if(W.beforeEnter&&!L.matched.includes(W))if(Array.isArray(W.beforeEnter))for(const f of W.beforeEnter)k.push(Zt(f,v,L));else k.push(Zt(W.beforeEnter,v,L));return k.push(Z),Wn(k)}).then(()=>(v.matched.forEach(W=>W.enterCallbacks={}),k=Lo(pe,"beforeRouteEnter",v,L),k.push(Z),Wn(k))).then(()=>{k=[];for(const W of o.list())k.push(Zt(W,v,L));return k.push(Z),Wn(k)}).catch(W=>Yt(W,8)?W:Promise.reject(W))}function je(v,L,k){for(const F of a.list())F(v,L,k)}function qe(v,L,k,F,le){const pe=K(v,L);if(pe)return pe;const Z=L===Wt,W=Qn?history.state:{};k&&(F||Z?r.replace(v.fullPath,he({scroll:Z&&W&&W.scroll},le)):r.push(v.fullPath,le)),c.value=v,zn(v,L,k,Z),nt()}let Ge;function zt(){Ge=r.listen((v,L,k)=>{const F=R(v),le=Ee(F);if(le){Y(he(le,{replace:!0}),F).catch(zs);return}l=F;const pe=c.value;Qn&&LE(bu(pe.fullPath,k.delta),Qi()),fe(F,pe).catch(Z=>Yt(Z,12)?Z:Yt(Z,2)?(Y(Z.to,F).then(W=>{Yt(W,20)&&!k.delta&&k.type===or.pop&&r.go(-1,!1)}).catch(zs),Promise.reject()):(k.delta&&r.go(-k.delta,!1),de(Z,F,pe))).then(Z=>{Z=Z||qe(F,pe,!1),Z&&(k.delta?r.go(-k.delta,!1):k.type===or.pop&&Yt(Z,20)&&r.go(-1,!1)),je(F,pe,Z)}).catch(zs)})}let Hn=Ms(),Kn=Ms(),Ce;function de(v,L,k){nt(v);const F=Kn.list();return F.length?F.forEach(le=>le(v,L,k)):console.error(v),Promise.reject(v)}function ce(){return Ce&&c.value!==Wt?Promise.resolve():new Promise((v,L)=>{Hn.add([v,L])})}function nt(v){return Ce||(Ce=!v,zt(),Hn.list().forEach(([L,k])=>v?k(v):L()),Hn.reset()),v}function zn(v,L,k,F){const{scrollBehavior:le}=t;if(!Qn||!le)return Promise.resolve();const pe=!k&&FE(bu(v.fullPath,0))||(F||!k)&&history.state&&history.state.scroll||null;return vf().then(()=>le(v,L,pe)).then(Z=>Z&&xE(Z)).catch(Z=>de(Z,v,L))}const Mt=v=>r.go(v);let Et;const ut=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:I,getRoutes:N,resolve:R,options:t,push:G,replace:ae,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Kn.add,isReady:ce,install(v){const L=this;v.component("RouterLink",wI),v.component("RouterView",TI),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Bs(c)}),Qn&&!Et&&c.value===Wt&&(Et=!0,G(r.location).catch(le=>{}));const k={};for(const le in Wt)k[le]=St(()=>c.value[le]);v.provide(Ac,L),v.provide(Fd,_r(k)),v.provide(_a,c);const F=v.unmount;ut.add(v),v.unmount=function(){ut.delete(v),ut.size<1&&(l=Wt,Ge&&Ge(),c.value=Wt,Et=!1,Ce=!1),F()}}}}function Wn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function bI(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>hs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>hs(l,c))||r.push(c))}return[n,s,r]}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Cc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Wd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AI=Wd,Yd=new Bn("auth","Firebase",Wd());/**
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
 */const xu=new Yi("@firebase/auth");function si(t,...e){xu.logLevel<=re.ERROR&&xu.error(`Auth (${Ir}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw Rc(t,...e)}function Rt(t,...e){return Rc(t,...e)}function Xd(t,e,n){const s=Object.assign(Object.assign({},AI()),{[e]:n});return new Bn("auth","Firebase",s).create(e,{appName:t.name})}function SI(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Dt(t,"argument-error"),Xd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Yd.create(t,...e)}function H(t,e,...n){if(!t)throw Rc(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw si(e),new Error(e)}function jt(t,e){t||Ut(e)}/**
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
 */const Lu=new Map;function Vt(t){jt(t instanceof Function,"Expected a class definition");let e=Lu.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lu.set(t,e),e)}/**
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
 */function CI(t,e){const n=jn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(rr(i,e!=null?e:{}))return r;Dt(r,"already-initialized")}return n.initialize({options:e})}function RI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ta(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kI(){return Fu()==="http:"||Fu()==="https:"}function Fu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kI()||vc()||"connection"in navigator)?navigator.onLine:!0}function OI(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Tr{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=nd()||sd()}get(){return NI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kc(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Jd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const PI=new Tr(3e4,6e4);function MI(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zi(t,e,n,s,r={}){return Qd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Er(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Jd.fetch()(Zd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Qd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},DI),e);try{const r=new LI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Xd(t,u,l);Dt(t,u)}}catch(r){if(r instanceof Kt)throw r;Dt(t,"network-request-failed")}}async function xI(t,e,n,s,r={}){const i=await Zi(t,e,n,s,r);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zd(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?kc(t.config,r):`${t.config.apiScheme}://${r}`}class LI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rt(this.auth,"network-request-failed")),PI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Rt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function FI(t,e){return Zi(t,"POST","/v1/accounts:delete",e)}async function UI(t,e){return Zi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ws(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VI(t,e=!1){const n=mt(t),s=await n.getIdToken(e),r=Nc(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ws(Uo(r.auth_time)),issuedAtTime:Ws(Uo(r.iat)),expirationTime:Ws(Uo(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Uo(t){return Number(t)*1e3}function Nc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return si("JWT malformed, contained fewer than 3 sections"),null;try{const r=Yv(n);return r?JSON.parse(r):(si("Failed to decode base64 JWT payload"),null)}catch(r){return si("Caught error parsing JWT payload as JSON",r),null}}function $I(t){const e=Nc(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ar(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Kt&&BI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function BI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ep{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ei(t){var e;const n=t.auth,s=await t.getIdToken(),r=await ar(t,UI(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?KI(i.providerUserInfo):[],a=HI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ep(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qI(t){const e=mt(t);await Ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function KI(t){return t.map(e=>{var{providerId:n}=e,s=Cc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function zI(t,e){const n=await Qd(t,{},async()=>{const s=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Zd(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):$I(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await zI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new cr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function Xt(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Cc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ep(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ar(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VI(this,e)}reload(){return qI(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ei(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ar(this,FI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:G,isAnonymous:ae,providerData:Ee,stsTokenManager:Y}=n;H(K&&Y,e,"internal-error");const Ie=cr.fromJSON(this.name,Y);H(typeof K=="string",e,"internal-error"),Xt(h,e.name),Xt(d,e.name),H(typeof G=="boolean",e,"internal-error"),H(typeof ae=="boolean",e,"internal-error"),Xt(g,e.name),Xt(y,e.name),Xt(N,e.name),Xt(I,e.name),Xt(R,e.name),Xt(x,e.name);const fe=new kn({uid:K,auth:e,email:d,emailVerified:G,displayName:h,isAnonymous:ae,photoURL:y,phoneNumber:g,tenantId:N,stsTokenManager:Ie,createdAt:R,lastLoginAt:x});return Ee&&Array.isArray(Ee)&&(fe.providerData=Ee.map(je=>Object.assign({},je))),I&&(fe._redirectEventId=I),fe}static async _fromIdTokenResponse(e,n,s=!1){const r=new cr;r.updateFromServerResponse(n);const i=new kn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ei(i),i}}/**
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
 */class tp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tp.type="NONE";const Uu=tp;/**
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
 */function ri(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ri(this.userKey,r.apiKey,i),this.fullPersistenceKey=ri("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new is(Vt(Uu),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Vt(Uu);const o=ri(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=kn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new is(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new is(i,e,s))}}/**
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
 */function Vu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(np(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(op(e))return"Blackberry";if(ap(e))return"Webos";if(Oc(e))return"Safari";if((e.includes("chrome/")||sp(e))&&!e.includes("edge/"))return"Chrome";if(ip(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function np(t=De()){return/firefox\//i.test(t)}function Oc(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sp(t=De()){return/crios\//i.test(t)}function rp(t=De()){return/iemobile/i.test(t)}function ip(t=De()){return/android/i.test(t)}function op(t=De()){return/blackberry/i.test(t)}function ap(t=De()){return/webos/i.test(t)}function eo(t=De()){return/iphone|ipad|ipod/i.test(t)}function GI(t=De()){var e;return eo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WI(){return rd()&&document.documentMode===10}function cp(t=De()){return eo(t)||ip(t)||ap(t)||op(t)||/windows phone/i.test(t)||rp(t)}function YI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function lp(t,e=[]){let n;switch(t){case"Browser":n=Vu(De());break;case"Worker":n=`${Vu(De())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ir}/${s}`}/**
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
 */class XI{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $u(this),this.idTokenSubscription=new $u(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ei(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Dc(t){return mt(t)}class $u{constructor(e){this.auth=e,this.observer=null,this.addObserver=rw(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class up{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
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
 */async function os(t,e){return xI(t,"POST","/v1/accounts:signInWithIdp",MI(t,e))}/**
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
 */const JI="http://localhost";class Mn extends up{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Cc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Mn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,os(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:JI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Er(n)}return e}}/**
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
 */class Pc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class br extends Pc{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends br{constructor(){super("facebook.com")}static credential(e){return Mn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class tn extends br{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Mn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return tn.credential(n,s)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
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
 */class nn extends br{constructor(){super("github.com")}static credential(e){return Mn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
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
 */class sn extends br{constructor(){super("twitter.com")}static credential(e,n){return Mn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return sn.credential(n,s)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
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
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await kn._fromIdTokenResponse(e,s,r),o=Bu(s);return new ds({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Bu(s);return new ds({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Bu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ii extends Kt{constructor(e,n,s,r){var i;super(n.code,n.message);this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ii.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ii(e,n,s,r)}}function hp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ii._fromErrorAndOperation(t,i,e,s):i})}async function QI(t,e,n=!1){const s=await ar(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",s)}/**
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
 */async function ZI(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await ar(t,hp(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=Nc(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),ds._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(s,"user-mismatch"),i}}/**
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
 */async function e0(t,e,n=!1){const s="signIn",r=await hp(t,s,e),i=await ds._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function iC(t,e,n,s){return mt(t).onAuthStateChanged(e,n,s)}const Ti="__sak";/**
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
 */class fp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function t0(){const t=De();return Oc(t)||eo(t)}const n0=1e3,s0=10;class dp extends fp{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=t0()&&YI(),this.fallbackToPolling=cp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);WI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,s0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},n0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dp.type="LOCAL";const r0=dp;/**
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
 */class pp extends fp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pp.type="SESSION";const gp=pp;/**
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
 */function i0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class to{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new to(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await i0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}to.receivers=[];/**
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
 */function Mc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class o0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Mc("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kt(){return window}function a0(t){kt().location.href=t}/**
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
 */function mp(){return typeof kt().WorkerGlobalScope!="undefined"&&typeof kt().importScripts=="function"}async function c0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function u0(){return mp()?self:null}/**
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
 */const yp="firebaseLocalStorageDb",h0=1,bi="firebaseLocalStorage",vp="fbase_key";class Ar{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function no(t,e){return t.transaction([bi],e?"readwrite":"readonly").objectStore(bi)}function f0(){const t=indexedDB.deleteDatabase(yp);return new Ar(t).toPromise()}function ba(){const t=indexedDB.open(yp,h0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(bi,{keyPath:vp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(bi)?e(s):(s.close(),await f0(),e(await ba()))})})}async function ju(t,e,n){const s=no(t,!0).put({[vp]:e,value:n});return new Ar(s).toPromise()}async function d0(t,e){const n=no(t,!1).get(e),s=await new Ar(n).toPromise();return s===void 0?null:s.value}function qu(t,e){const n=no(t,!0).delete(e);return new Ar(n).toPromise()}const p0=800,g0=3;class wp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ba(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>g0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=to._getInstance(u0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await c0(),!this.activeServiceWorker)return;this.sender=new o0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ba();return await ju(e,Ti,"1"),await qu(e,Ti),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ju(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>d0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=no(r,!1).getAll();return new Ar(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),p0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wp.type="LOCAL";const m0=wp;/**
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
 */function y0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function v0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Rt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",y0().appendChild(s)})}function w0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Tr(3e4,6e4);/**
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
 */function _p(t,e){return e?Vt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xc extends up{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _0(t){return e0(t.auth,new xc(t),t.bypassAuthState)}function E0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),ZI(n,new xc(t),t.bypassAuthState)}async function I0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),QI(n,new xc(t),t.bypassAuthState)}/**
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
 */class Ep{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _0;case"linkViaPopup":case"linkViaRedirect":return I0;case"reauthViaPopup":case"reauthViaRedirect":return E0;default:Dt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const T0=new Tr(2e3,1e4);async function oC(t,e,n){const s=Dc(t);SI(t,e,Pc);const r=_p(s,n);return new Tn(s,"signInViaPopup",e,r).executeNotNull()}class Tn extends Ep{constructor(e,n,s,r,i){super(e,n,r,i);this.provider=s,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,T0.get())};e()}}Tn.currentPopupAction=null;/**
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
 */const b0="pendingRedirect",Vo=new Map;class A0 extends Ep{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=Vo.get(this.auth._key());if(!e){try{const s=await S0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Vo.set(this.auth._key(),e)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S0(t,e){const n=R0(e),s=C0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function C0(t){return Vt(t._redirectPersistence)}function R0(t){return ri(b0,t.config.apiKey,t.name)}async function k0(t,e,n=!1){const s=Dc(t),r=_p(s,e),o=await new A0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const N0=10*60*1e3;class O0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ip(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hu(e))}saveEventToCache(e){this.cachedEventUids.add(Hu(e)),this.lastProcessedEventTime=Date.now()}}function Hu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ip({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ip(t);default:return!1}}/**
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
 */async function P0(t,e={}){return Zi(t,"GET","/v1/projects",e)}/**
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
 */const M0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,x0=/^https?/;async function L0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await P0(t);for(const n of e)try{if(F0(n))return}catch{}Dt(t,"unauthorized-domain")}function F0(t){const e=Ta(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!x0.test(n))return!1;if(M0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const U0=new Tr(3e4,6e4);function Ku(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function V0(t){return new Promise((e,n)=>{var s,r,i;function o(){Ku(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ku(),n(Rt(t,"network-request-failed"))},timeout:U0.get()})}if(!((r=(s=kt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=kt().gapi)===null||i===void 0)&&i.load)o();else{const a=w0("iframefcb");return kt()[a]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},v0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ii=null,e})}let ii=null;function $0(t){return ii=ii||V0(t),ii}/**
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
 */const B0=new Tr(5e3,15e3),j0="__/auth/iframe",q0="emulator/auth/iframe",H0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z0(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kc(e,q0):`https://${t.config.authDomain}/${j0}`,s={apiKey:e.apiKey,appName:t.name,v:Ir},r=K0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Er(s).slice(1)}`}async function G0(t){const e=await $0(t),n=kt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:z0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:H0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=kt().setTimeout(()=>{i(o)},B0.get());function c(){kt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const W0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y0=500,X0=600,J0="_blank",Q0="http://localhost";class zu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z0(t,e,n,s=Y0,r=X0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},W0),{width:s.toString(),height:r.toString(),top:i,left:o}),l=De().toLowerCase();n&&(a=sp(l)?J0:n),np(l)&&(e=e||Q0,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(GI(l)&&a!=="_self")return eT(e||"",a),new zu(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new zu(h)}function eT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const tT="__/auth/handler",nT="emulator/auth/handler";function Gu(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ir,eventId:r};if(e instanceof Pc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof br){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${sT(t)}?${Er(a).slice(1)}`}function sT({config:t}){return t.emulator?kc(t,nT):`https://${t.authDomain}/${tT}`}/**
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
 */const $o="webStorageSupport";class rT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gp,this._completeRedirectFn=k0}async _openPopup(e,n,s,r){var i;jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Gu(e,n,s,Ta(),r);return Z0(e,o,Mc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),a0(Gu(e,n,s,Ta(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(jt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await G0(e),s=new O0(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($o,{type:$o},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[$o];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cp()||Oc()||eo()}}const iT=rT;var Wu="@firebase/auth",Yu="0.19.11";/**
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
 */class oT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cT(t){Ot(new _t("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lp(t)},u=new XI(a,c,l);return RI(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ot(new _t("auth-internal",e=>{const n=Dc(e.getProvider("auth").getImmediate());return(s=>new oT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(Wu,Yu,aT(t)),pt(Wu,Yu,"esm2017")}/**
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
 */function aC(t=_c()){const e=jn(t,"auth");return e.isInitialized()?e.getImmediate():CI(t,{popupRedirectResolver:iT,persistence:[m0,r0,gp]})}cT("Browser");var lT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,Lc=Lc||{},j=lT||self;function Ai(){}function Aa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Sr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uT(t){return Object.prototype.hasOwnProperty.call(t,Bo)&&t[Bo]||(t[Bo]=++hT)}var Bo="closure_uid_"+(1e9*Math.random()>>>0),hT=0;function fT(t,e,n){return t.call.apply(t.bind,arguments)}function dT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=fT:Le=dT,Le.apply(null,arguments)}function Gr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function pn(){this.s=this.s,this.o=this.o}var pT=0,gT={};pn.prototype.s=!1;pn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),pT!=0)){var t=uT(this);delete gT[t]}};pn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},bp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function mT(t){e:{var e=ab;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Xu(t){return Array.prototype.concat.apply([],arguments)}function Fc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Si(t){return/^[\s\xa0]*$/.test(t)}var Ju=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ye(t,e){return t.indexOf(e)!=-1}function jo(t,e){return t<e?-1:t>e?1:0}var Xe;e:{var Qu=j.navigator;if(Qu){var Zu=Qu.userAgent;if(Zu){Xe=Zu;break e}}Xe=""}function Uc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ap(t){const e={};for(const n in t)e[n]=t[n];return e}var eh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<eh.length;i++)n=eh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Vc(t){return Vc[" "](t),t}Vc[" "]=Ai;function yT(t){var e=_T;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var vT=Ye(Xe,"Opera"),ps=Ye(Xe,"Trident")||Ye(Xe,"MSIE"),Cp=Ye(Xe,"Edge"),Sa=Cp||ps,Rp=Ye(Xe,"Gecko")&&!(Ye(Xe.toLowerCase(),"webkit")&&!Ye(Xe,"Edge"))&&!(Ye(Xe,"Trident")||Ye(Xe,"MSIE"))&&!Ye(Xe,"Edge"),wT=Ye(Xe.toLowerCase(),"webkit")&&!Ye(Xe,"Edge");function kp(){var t=j.document;return t?t.documentMode:void 0}var Ci;e:{var qo="",Ho=function(){var t=Xe;if(Rp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cp)return/Edge\/([\d\.]+)/.exec(t);if(ps)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wT)return/WebKit\/(\S+)/.exec(t);if(vT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ho&&(qo=Ho?Ho[1]:""),ps){var Ko=kp();if(Ko!=null&&Ko>parseFloat(qo)){Ci=String(Ko);break e}}Ci=qo}var _T={};function ET(){return yT(function(){let t=0;const e=Ju(String(Ci)).split("."),n=Ju("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=jo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||jo(r[2].length==0,i[2].length==0)||jo(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ca;if(j.document&&ps){var th=kp();Ca=th||parseInt(Ci,10)||void 0}else Ca=void 0;var IT=Ca,TT=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Ai,e),j.removeEventListener("test",Ai,e)}catch{}return t}();function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};function lr(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Rp){e:{try{Vc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lr.Z.h.call(this)}}Be(lr,Ke);var bT={2:"touch",3:"pen",4:"mouse"};lr.prototype.h=function(){lr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Cr="closure_listenable_"+(1e6*Math.random()|0),AT=0;function ST(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++AT,this.ca=this.fa=!1}function so(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ro(t){this.src=t,this.g={},this.h=0}ro.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ka(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ST(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Ra(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Tp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(so(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ka(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var $c="closure_lm_"+(1e6*Math.random()|0),zo={};function Np(t,e,n,s,r){if(s&&s.once)return Dp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Np(t,e[i],n,s,r);return null}return n=qc(n),t&&t[Cr]?t.N(e,n,Sr(s)?!!s.capture:!!s,r):Op(t,e,n,!1,s,r)}function Op(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Sr(r)?!!r.capture:!!r,a=jc(t);if(a||(t[$c]=a=new ro(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=CT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)TT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Mp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CT(){function t(n){return e.call(t.src,t.listener,n)}var e=RT;return t}function Dp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Dp(t,e[i],n,s,r);return null}return n=qc(n),t&&t[Cr]?t.O(e,n,Sr(s)?!!s.capture:!!s,r):Op(t,e,n,!0,s,r)}function Pp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Pp(t,e[i],n,s,r);else s=Sr(s)?!!s.capture:!!s,n=qc(n),t&&t[Cr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ka(i,n,s,r),-1<n&&(so(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=jc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ka(e,n,s,r)),(n=-1<t?e[t]:null)&&Bc(n))}function Bc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Cr])Ra(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Mp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=jc(e))?(Ra(n,t),n.h==0&&(n.src=null,e[$c]=null)):so(t)}}}function Mp(t){return t in zo?zo[t]:zo[t]="on"+t}function RT(t,e){if(t.ca)t=!0;else{e=new lr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Bc(t),t=n.call(s,e)}return t}function jc(t){return t=t[$c],t instanceof ro?t:null}var Go="__closure_events_fn_"+(1e9*Math.random()>>>0);function qc(t){return typeof t=="function"?t:(t[Go]||(t[Go]=function(e){return t.handleEvent(e)}),t[Go])}function Pe(){pn.call(this),this.i=new ro(this),this.P=this,this.I=null}Be(Pe,pn);Pe.prototype[Cr]=!0;Pe.prototype.removeEventListener=function(t,e,n,s){Pp(this,t,e,n,s)};function Fe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var r=e;e=new Ke(s,t),Sp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Wr(o,s,!0,e)&&r}if(o=e.g=t,r=Wr(o,s,!0,e)&&r,r=Wr(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Wr(o,s,!1,e)&&r}Pe.prototype.M=function(){if(Pe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)so(n[s]);delete t.g[e],t.h--}}this.I=null};Pe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Pe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Wr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ra(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Hc=j.JSON.stringify;function kT(){var t=Lp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NT{constructor(){this.h=this.g=null}add(e,n){const s=xp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var xp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new OT,t=>t.reset());class OT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DT(t){j.setTimeout(()=>{throw t},0)}function Kc(t,e){Na||PT(),Oa||(Na(),Oa=!0),Lp.add(t,e)}var Na;function PT(){var t=j.Promise.resolve(void 0);Na=function(){t.then(MT)}}var Oa=!1,Lp=new NT;function MT(){for(var t;t=kT();){try{t.h.call(t.g)}catch(n){DT(n)}var e=xp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Oa=!1}function io(t,e){Pe.call(this),this.h=t||1,this.g=e||j,this.j=Le(this.kb,this),this.l=Date.now()}Be(io,Pe);D=io.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Fe(this,"tick"),this.da&&(zc(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){io.Z.M.call(this),zc(this),delete this.g};function Gc(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function Fp(t){t.g=Gc(()=>{t.g=null,t.i&&(t.i=!1,Fp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xT extends pn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fp(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ur(t){pn.call(this),this.h=t,this.g={}}Be(ur,pn);var nh=[];function Up(t,e,n,s){Array.isArray(n)||(n&&(nh[0]=n.toString()),n=nh);for(var r=0;r<n.length;r++){var i=Np(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Vp(t){Uc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bc(e)},t),t.g={}}ur.prototype.M=function(){ur.Z.M.call(this),Vp(this)};ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oo(){this.g=!0}oo.prototype.Aa=function(){this.g=!1};function LT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function FT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function es(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+VT(t,n)+(s?" "+s:"")})}function UT(t,e){t.info(function(){return"TIMEOUT: "+e})}oo.prototype.info=function(){};function VT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Hc(n)}catch{return e}}var qn={},sh=null;function ao(){return sh=sh||new Pe}qn.Ma="serverreachability";function $p(t){Ke.call(this,qn.Ma,t)}Be($p,Ke);function hr(t){const e=ao();Fe(e,new $p(e,t))}qn.STAT_EVENT="statevent";function Bp(t,e){Ke.call(this,qn.STAT_EVENT,t),this.stat=e}Be(Bp,Ke);function Je(t){const e=ao();Fe(e,new Bp(e,t))}qn.Na="timingevent";function jp(t,e){Ke.call(this,qn.Na,t),this.size=e}Be(jp,Ke);function Rr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var co={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Wc(){}Wc.prototype.h=null;function rh(t){return t.h||(t.h=t.i())}function Hp(){}var kr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Yc(){Ke.call(this,"d")}Be(Yc,Ke);function Xc(){Ke.call(this,"c")}Be(Xc,Ke);var Da;function lo(){}Be(lo,Wc);lo.prototype.g=function(){return new XMLHttpRequest};lo.prototype.i=function(){return{}};Da=new lo;function Nr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new ur(this),this.P=$T,t=Sa?125:void 0,this.W=new io(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Kp}function Kp(){this.i=null,this.g="",this.h=!1}var $T=45e3,Pa={},Ri={};D=Nr.prototype;D.setTimeout=function(t){this.P=t};function Ma(t,e,n){t.K=1,t.v=ho(qt(e)),t.s=n,t.U=!0,zp(t,null)}function zp(t,e){t.F=Date.now(),Or(t),t.A=qt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Zp(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Kp,t.g=wg(t.l,n?e:null,!t.s),0<t.O&&(t.L=new xT(Le(t.Ia,t,t.g),t.O)),Up(t.V,t.g,"readystatechange",t.gb),e=t.H?Ap(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),hr(1),LT(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&$t(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Sa||this.g&&(this.h.h||this.g.ga()||ch(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?hr(3):hr(2)),uo(this);var n=this.g.ba();this.N=n;t:if(Gp(this)){var s=ch(this.g);t="";var r=s.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){bn(this),Ys(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,FT(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Si(a)){var l=a;break t}}l=null}if(n=l)es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xa(this,n);else{this.i=!1,this.o=3,Je(12),bn(this),Ys(this);break e}}this.U?(Wp(this,u,o),Sa&&this.i&&u==3&&(Up(this.V,this.W,"tick",this.fb),this.W.start())):(es(this.j,this.m,o,null),xa(this,o)),u==4&&bn(this),this.i&&!this.I&&(u==4?gg(this.l,this):(this.i=!1,Or(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),bn(this),Ys(this)}}}catch{}finally{}};function Gp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Wp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=BT(t,n),r==Ri){e==4&&(t.o=4,Je(14),s=!1),es(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Pa){t.o=4,Je(15),es(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else es(t.j,t.m,r,null),xa(t,r);Gp(t)&&r!=Ri&&r!=Pa&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Je(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),il(e),e.L=!0,Je(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),bn(t),Ys(t))}D.fb=function(){if(this.g){var t=$t(this.g),e=this.g.ga();this.C<e.length&&(uo(this),Wp(this,t,e),this.i&&t!=4&&Or(this))}};function BT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ri:(n=Number(e.substring(n,s)),isNaN(n)?Pa:(s+=1,s+n>e.length?Ri:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,bn(this)};function Or(t){t.Y=Date.now()+t.P,Yp(t,t.P)}function Yp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Rr(Le(t.eb,t),e)}function uo(t){t.B&&(j.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(UT(this.j,this.A),this.K!=2&&(hr(3),Je(17)),bn(this),this.o=2,Ys(this)):Yp(this,this.Y-t)};function Ys(t){t.l.G==0||t.I||gg(t.l,t)}function bn(t){uo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,zc(t.W),Vp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xa(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||La(n.i,t))){if(n.I=t.N,!t.J&&La(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Di(n),go(n);else break e;rl(n),Je(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Rr(Le(n.ab,n),6e3));if(1>=ng(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else An(n,11)}else if((t.J||n.g==t)&&Di(n),!Si(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(Ye(y,"spdy")||Ye(y,"quic")||Ye(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Zc(i,i.h),i.h=null))}if(s.D){const N=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.sa=N,we(s.F,s.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=vg(s,s.H?s.la:null,s.W),o.J){sg(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(uo(a),Or(a)),s.g=o}else dg(s);0<n.l.length&&mo(n)}else l[0]!="stop"&&l[0]!="close"||An(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?An(n,7):sl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}hr(4)}catch{}}function jT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Aa(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Jc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Aa(t)||typeof t=="string")bp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Aa(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=jT(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Ss(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Ss)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}D=Ss.prototype;D.R=function(){Qc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return Qc(this),this.g.concat()};function Qc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];xn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],xn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}D.get=function(t,e){return xn(this.h,t)?this.h[t]:e};D.set=function(t,e){xn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function xn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Xp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ln(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ln){this.g=e!==void 0?e:t.g,ki(this,t.j),this.s=t.s,Ni(this,t.i),Oi(this,t.m),this.l=t.l,e=t.h;var n=new fr;n.i=e.i,e.g&&(n.g=new Ss(e.g),n.h=e.h),ih(this,n),this.o=t.o}else t&&(n=String(t).match(Xp))?(this.g=!!e,ki(this,n[1]||"",!0),this.s=Xs(n[2]||""),Ni(this,n[3]||"",!0),Oi(this,n[4]),this.l=Xs(n[5]||"",!0),ih(this,n[6]||"",!0),this.o=Xs(n[7]||"")):(this.g=!!e,this.h=new fr(null,this.g))}Ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vs(e,oh,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vs(e,oh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Vs(n,n.charAt(0)=="/"?WT:GT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vs(n,XT)),t.join("")};function qt(t){return new Ln(t)}function ki(t,e,n){t.j=n?Xs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ni(t,e,n){t.i=n?Xs(e,!0):e}function Oi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ih(t,e,n){e instanceof fr?(t.h=e,JT(t.h,t.g)):(n||(e=Vs(e,YT)),t.h=new fr(e,t.g))}function we(t,e,n){t.h.set(e,n)}function ho(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function HT(t){return t instanceof Ln?qt(t):new Ln(t,void 0)}function KT(t,e,n,s){var r=new Ln(null,void 0);return t&&ki(r,t),e&&Ni(r,e),n&&Oi(r,n),s&&(r.l=s),r}function Xs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var oh=/[#\/\?@]/g,GT=/[#\?:]/g,WT=/[#\?]/g,YT=/[#\?@]/g,XT=/#/g;function fr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gn(t){t.g||(t.g=new Ss,t.h=0,t.i&&qT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=fr.prototype;D.add=function(t,e){gn(this),this.i=null,t=Cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Jp(t,e){gn(t),e=Cs(t,e),xn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,xn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Qc(t)))}function Qp(t,e){return gn(t),e=Cs(t,e),xn(t.g.h,e)}D.forEach=function(t,e){gn(this),this.g.forEach(function(n,s){bp(n,function(r){t.call(e,r,s,this)},this)},this)};D.T=function(){gn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};D.R=function(t){gn(this);var e=[];if(typeof t=="string")Qp(this,t)&&(e=Xu(e,this.g.get(Cs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Xu(e,t[n])}return e};D.set=function(t,e){return gn(this),this.i=null,t=Cs(this,t),Qp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Zp(t,e,n){Jp(t,e),0<n.length&&(t.i=null,t.g.set(Cs(t,e),Fc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JT(t,e){e&&!t.j&&(gn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Jp(this,s),Zp(this,r,n))},t)),t.j=e}var QT=class{constructor(t,e){this.h=t,this.g=e}};function eg(t){this.l=t||ZT,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ea&&j.g.Ea()&&j.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ZT=10;function tg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ng(t){return t.h?1:t.g?t.g.size:0}function La(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zc(t,e){t.g?t.g.add(e):t.h=e}function sg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}eg.prototype.cancel=function(){if(this.i=rg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Fc(t.i)}function el(){}el.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};el.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function eb(){this.g=new el}function tb(t,e,n){const s=n||"";try{Jc(t,function(r,i){let o=r;Sr(r)&&(o=Hc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function nb(t,e){const n=new oo;if(j.Image){const s=new Image;s.onload=Gr(Yr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Gr(Yr,n,s,"TestLoadImage: error",!1,e),s.onabort=Gr(Yr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Gr(Yr,n,s,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Yr(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Dr(t){this.l=t.$b||null,this.j=t.ib||!1}Be(Dr,Wc);Dr.prototype.g=function(){return new fo(this.l,this.j)};Dr.prototype.i=function(t){return function(){return t}}({});function fo(t,e){Pe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=tl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(fo,Pe);var tl=0;D=fo.prototype;D.open=function(t,e){if(this.readyState!=tl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dr(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=tl};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dr(this)),this.g&&(this.readyState=3,dr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof j.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ig(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function ig(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pr(this):dr(this),this.readyState==3&&ig(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,Pr(this))};D.Ta=function(t){this.g&&(this.response=t,Pr(this))};D.ha=function(){this.g&&Pr(this)};function Pr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dr(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function dr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sb=j.JSON.parse;function Se(t){Pe.call(this),this.headers=new Ss,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=og,this.K=this.L=!1}Be(Se,Pe);var og="",rb=/^https?$/i,ib=["POST","PUT"];D=Se.prototype;D.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Da.g(),this.C=this.u?rh(this.u):rh(Da),this.g.onreadystatechange=Le(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){ah(this,i);return}t=n||"";const r=new Ss(this.headers);s&&Jc(s,function(i,o){r.set(o,i)}),s=mT(r.T()),n=j.FormData&&t instanceof j.FormData,!(0<=Tp(ib,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{lg(this),0<this.B&&((this.K=ob(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.pa,this)):this.A=Gc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ah(this,i)}};function ob(t){return ps&&ET()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function ab(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof Lc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function ah(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ag(t),po(t)}function ag(t){t.D||(t.D=!0,Fe(t,"complete"),Fe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),po(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),po(this,!0)),Se.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?cg(this):this.cb())};D.cb=function(){cg(this)};function cg(t){if(t.h&&typeof Lc!="undefined"&&(!t.C[1]||$t(t)!=4||t.ba()!=2)){if(t.v&&$t(t)==4)Gc(t.Fa,0,t);else if(Fe(t,"readystatechange"),$t(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Xp)[1]||null;if(!r&&j.self&&j.self.location){var i=j.self.location.protocol;r=i.substr(0,i.length-1)}s=!rb.test(r?r.toLowerCase():"")}n=s}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var o=2<$t(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",ag(t)}}finally{po(t)}}}}function po(t,e){if(t.g){lg(t);const n=t.g,s=t.C[0]?Ai:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=s}catch{}}}function lg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function $t(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sb(e)}};function ch(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case og:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function cb(t){let e="";return Uc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function nl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=cb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ug(t){this.za=0,this.l=[],this.h=new oo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=xs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=xs("baseRetryDelayMs",5e3,t),this.$a=xs("retryDelaySeedMs",1e4,t),this.Ya=xs("forwardChannelMaxRetries",2,t),this.ra=xs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new eg(t&&t.concurrentRequestLimit),this.Ca=new eb,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=ug.prototype;D.ma=8;D.G=1;function sl(t){if(hg(t),t.G==3){var e=t.V++,n=qt(t.F);we(n,"SID",t.J),we(n,"RID",e),we(n,"TYPE","terminate"),Mr(t,n),e=new Nr(t,t.h,e,void 0),e.K=2,e.v=ho(qt(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=wg(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Or(e)}yg(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function go(t){t.g&&(il(t),t.g.cancel(),t.g=null)}function hg(t){go(t),t.u&&(j.clearTimeout(t.u),t.u=null),Di(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function Wo(t,e){t.l.push(new QT(t.Za++,e)),t.G==3&&mo(t)}function mo(t){tg(t.i)||t.m||(t.m=!0,Kc(t.Ha,t),t.C=0)}function lb(t,e){return ng(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Rr(Le(t.Ha,t,e),mg(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Nr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Ap(i),Sp(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fg(this,r,e),n=qt(this.F),we(n,"RID",t),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),Mr(this,n),this.o&&i&&nl(n,this.o,i),Zc(this.i,r),this.Ra&&we(n,"TYPE","init"),this.ja?(we(n,"$req",e),we(n,"SID","null"),r.$=!0,Ma(r,n,null)):Ma(r,n,e),this.G=2}}else this.G==3&&(t?lh(this,t):this.l.length==0||tg(this.i)||lh(this))};function lh(t,e){var n;e?n=e.m:n=t.V++;const s=qt(t.F);we(s,"SID",t.J),we(s,"RID",n),we(s,"AID",t.U),Mr(t,s),t.o&&t.s&&nl(s,t.o,t.s),n=new Nr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Zc(t.i,n),Ma(n,s,e)}function Mr(t,e){t.j&&Jc({},function(n,s){we(e,s,n)})}function fg(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Le(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{tb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function dg(t){t.g||t.u||(t.Y=1,Kc(t.Ga,t),t.A=0)}function rl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Rr(Le(t.Ga,t),mg(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,pg(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Rr(Le(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Je(10),go(this),pg(this))};function il(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function pg(t){t.g=new Nr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=qt(t.oa);we(e,"RID","rpc"),we(e,"SID",t.J),we(e,"CI",t.N?"0":"1"),we(e,"AID",t.U),Mr(t,e),we(e,"TYPE","xmlhttp"),t.o&&t.s&&nl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ho(qt(e)),n.s=null,n.U=!0,zp(n,t)}D.ab=function(){this.v!=null&&(this.v=null,go(this),rl(this),Je(19))};function Di(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function gg(t,e){var n=null;if(t.g==e){Di(t),il(t),t.g=null;var s=2}else if(La(t.i,e))n=e.D,sg(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ao(),Fe(s,new jp(s,n,e,r)),mo(t)}else dg(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&lb(t,e)||s==2&&rl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:An(t,5);break;case 4:An(t,10);break;case 3:An(t,6);break;default:An(t,2)}}}function mg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function An(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Le(t.jb,t);n||(n=new Ln("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||ki(n,"https"),ho(n)),nb(n.toString(),s)}else Je(2);t.G=0,t.j&&t.j.va(e),yg(t),hg(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Je(2)):(this.h.info("Failed to ping google.com"),Je(1))};function yg(t){t.G=0,t.I=-1,t.j&&((rg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Fc(t.l),t.l.length=0),t.j.ua())}function vg(t,e,n){let s=HT(n);if(s.i!="")e&&Ni(s,e+"."+s.i),Oi(s,s.m);else{const r=j.location;s=KT(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Uc(t.aa,function(r,i){we(s,i,r)}),e=t.D,n=t.sa,e&&n&&we(s,e,n),we(s,"VER",t.ma),Mr(t,s),s}function wg(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Se(new Dr({ib:!0})):new Se(t.qa),e.L=t.H,e}function _g(){}D=_g.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function Pi(){if(ps&&!(10<=Number(IT)))throw Error("Environmental error: no available transport.")}Pi.prototype.g=function(t,e){return new lt(t,e)};function lt(t,e){Pe.call(this),this.g=new ug(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Si(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Si(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rs(this)}Be(lt,Pe);lt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Kc(Le(t.hb,t,e))),Je(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vg(t,null,t.W),mo(t)};lt.prototype.close=function(){sl(this.g)};lt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Wo(this.g,e)}else this.v?(e={},e.__data__=Hc(t),Wo(this.g,e)):Wo(this.g,t)};lt.prototype.M=function(){this.g.j=null,delete this.j,sl(this.g),delete this.g,lt.Z.M.call(this)};function Eg(t){Yc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(Eg,Yc);function Ig(){Xc.call(this),this.status=1}Be(Ig,Xc);function Rs(t){this.g=t}Be(Rs,_g);Rs.prototype.xa=function(){Fe(this.g,"a")};Rs.prototype.wa=function(t){Fe(this.g,new Eg(t))};Rs.prototype.va=function(t){Fe(this.g,new Ig(t))};Rs.prototype.ua=function(){Fe(this.g,"b")};Pi.prototype.createWebChannel=Pi.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;co.NO_ERROR=0;co.TIMEOUT=8;co.HTTP_ERROR=6;qp.COMPLETE="complete";Hp.EventType=kr;kr.OPEN="a";kr.CLOSE="b";kr.ERROR="c";kr.MESSAGE="d";Pe.prototype.listen=Pe.prototype.N;Se.prototype.listenOnce=Se.prototype.O;Se.prototype.getLastError=Se.prototype.La;Se.prototype.getLastErrorCode=Se.prototype.Da;Se.prototype.getStatus=Se.prototype.ba;Se.prototype.getResponseJson=Se.prototype.Qa;Se.prototype.getResponseText=Se.prototype.ga;Se.prototype.send=Se.prototype.ea;var ub=function(){return new Pi},hb=function(){return ao()},Yo=co,fb=qp,db=qn,uh={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},pb=Dr,Xr=Hp,gb=Se;const hh="@firebase/firestore";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let ks="9.6.10";/**
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
 */const Fn=new Yi("@firebase/firestore");function fh(){return Fn.logLevel}function U(t,...e){if(Fn.logLevel<=re.DEBUG){const n=e.map(ol);Fn.debug(`Firestore (${ks}): ${t}`,...n)}}function fn(t,...e){if(Fn.logLevel<=re.ERROR){const n=e.map(ol);Fn.error(`Firestore (${ks}): ${t}`,...n)}}function dh(t,...e){if(Fn.logLevel<=re.WARN){const n=e.map(ol);Fn.warn(`Firestore (${ks}): ${t}`,...n)}}function ol(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw fn(e),new Error(e)}function Ae(t,e){t||J()}function se(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class mb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class vb{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ae(typeof s.accessToken=="string"),new mb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new tt(e)}}class wb{constructor(e,n,s){this.type="FirstParty",this.user=tt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class _b{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new wb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Eb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ib{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.p=n.token,new Eb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class al{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function Tb(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */al.A=-1;class Tg{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Tb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function oe(t,e){return t<e?-1:t>e?1:0}function pr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ze(0,0))}static max(){return new Q(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function ph(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class gr{constructor(e,n,s){n===void 0?n=0:n>e.length&&J(),s===void 0?s=e.length-n:s>e.length-n&&J(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends gr{construct(e,n,s){return new ye(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new P(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const bb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends gr{construct(e,n,s){return new ft(e,n,s)}static isValidIdentifier(e){return bb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new P(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new P(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new P(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ve(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const Ab=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=Ab.exec(t);if(Ae(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gs(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
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
 */function Ag(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sg(t){const e=t.mapValue.fields.__previous_value__;return Ag(e)?Sg(e):e}function mr(t){const e=dn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class Sb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ms{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ms&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Ns(t){return t==null}function Mi(t){return t===0&&1/t==-1/0}function Cb(t){return typeof t=="number"&&Number.isInteger(t)&&!Mi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ye.fromString(e))}static fromName(e){return new V(ye.fromString(e).popFirst(5))}static empty(){return new V(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ye(e.slice()))}}function Un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ag(t)?4:Rb(t)?9:10:J()}function Pt(t,e){if(t===e)return!0;const n=Un(t);if(n!==Un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mr(t).isEqual(mr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=dn(s.timestampValue),o=dn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return gs(s.bytesValue).isEqual(gs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return be(s.geoPointValue.latitude)===be(r.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return be(s.integerValue)===be(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=be(s.doubleValue),o=be(r.doubleValue);return i===o?Mi(i)===Mi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return pr(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ph(i)!==ph(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Pt(i[a],o[a])))return!1;return!0}(t,e);default:return J()}}function yr(t,e){return(t.values||[]).find(n=>Pt(n,e))!==void 0}function ys(t,e){if(t===e)return 0;const n=Un(t),s=Un(e);if(n!==s)return oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=be(r.integerValue||r.doubleValue),a=be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return gh(t.timestampValue,e.timestampValue);case 4:return gh(mr(t),mr(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=gs(r),a=gs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=oe(o[c],a[c]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=oe(be(r.latitude),be(i.latitude));return o!==0?o:oe(be(r.longitude),be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ys(o[c],a[c]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=oe(a[u],l[u]);if(h!==0)return h;const d=ys(o[a[u]],c[l[u]]);if(d!==0)return d}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw J()}}function gh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=dn(t),s=dn(e),r=oe(n.seconds,s.seconds);return r!==0?r:oe(n.nanos,s.nanos)}function as(t){return Fa(t)}function Fa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=dn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Fa(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Fa(s.fields[a])}`;return i+"}"}(t.mapValue):J();var e,n}function mh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ua(t){return!!t&&"integerValue"in t}function cl(t){return!!t&&"arrayValue"in t}function yh(t){return!!t&&"nullValue"in t}function vh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xo(t){return!!t&&"mapValue"in t}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Js(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Rb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Xo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=ft.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Js(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Xo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){xr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ft(Js(this.value))}}/**
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
 */class He{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new He(e,0,Q.min(),Q.min(),Ft.empty(),0)}static newFoundDocument(e,n,s){return new He(e,1,n,Q.min(),s,0)}static newNoDocument(e,n){return new He(e,2,n,Q.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new He(e,3,n,Q.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function kb(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(s===1e9?new Ze(n+1,0):new Ze(n,s));return new vs(r,V.empty(),e)}function Nb(t){return new vs(t.readTime,t.key,-1)}class vs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new vs(Q.min(),V.empty(),-1)}static max(){return new vs(Q.max(),V.empty(),-1)}}function Ob(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */class Db{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function wh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Db(t,e,n,s,r,i,o)}function ll(t){const e=se(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+as(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ns(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>as(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>as(s)).join(",")),e.P=n}return e.P}function Pb(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${as(s.value)}`;var s}).join(", ")}]`),Ns(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>as(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>as(n)).join(",")),`Target(${e})`}function ul(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Bb(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Pt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Eh(t.startAt,e.startAt)&&Eh(t.endAt,e.endAt)}function Va(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Qe extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,s):new Mb(e,n,s):n==="array-contains"?new Fb(e,s):n==="in"?new Ub(e,s):n==="not-in"?new Vb(e,s):n==="array-contains-any"?new $b(e,s):new Qe(e,n,s)}static V(e,n,s){return n==="in"?new xb(e,s):new Lb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(ys(n,this.value)):n!==null&&Un(this.value)===Un(n)&&this.v(ys(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Mb extends Qe{constructor(e,n,s){super(e,n,s),this.key=V.fromName(s.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.v(n)}}class xb extends Qe{constructor(e,n){super(e,"in",n),this.keys=Cg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Lb extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Cg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>V.fromName(s.referenceValue))}class Fb extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cl(n)&&yr(n.arrayValue,this.value)}}class Ub extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yr(this.value.arrayValue,n)}}class Vb extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yr(this.value.arrayValue,n)}}class $b extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>yr(this.value.arrayValue,s))}}class xi{constructor(e,n){this.position=e,this.inclusive=n}}class Qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _h(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=V.comparator(V.fromName(o.referenceValue),n.key):s=ys(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Eh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Lr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function jb(t,e,n,s,r,i,o,a){return new Lr(t,e,n,s,r,i,o,a)}function hl(t){return new Lr(t)}function oi(t){return!Ns(t.limit)&&t.limitType==="F"}function Li(t){return!Ns(t.limit)&&t.limitType==="L"}function Rg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function kg(t){for(const e of t.filters)if(e.S())return e.field;return null}function Ng(t){return t.collectionGroup!==null}function vr(t){const e=se(t);if(e.D===null){e.D=[];const n=kg(e),s=Rg(e);if(n!==null&&s===null)n.isKeyField()||e.D.push(new Qs(n)),e.D.push(new Qs(ft.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Qs(ft.keyField(),i))}}}return e.D}function Vn(t){const e=se(t);if(!e.C)if(e.limitType==="F")e.C=wh(e.path,e.collectionGroup,vr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of vr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Qs(i.field,o))}const s=e.endAt?new xi(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new xi(e.startAt.position,!e.startAt.inclusive):null;e.C=wh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.C}function qb(t,e,n){return new Lr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yo(t,e){return ul(Vn(t),Vn(e))&&t.limitType===e.limitType}function Og(t){return`${ll(Vn(t))}|lt:${t.limitType}`}function $a(t){return`Query(target=${Pb(Vn(t))}; limitType=${t.limitType})`}function fl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):V.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=_h(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,vr(n),s)||n.endAt&&!function(r,i,o){const a=_h(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,vr(n),s))}(t,e)}function Hb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dg(t){return(e,n)=>{let s=!1;for(const r of vr(t)){const i=Kb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Kb(t,e,n){const s=t.field.isKeyField()?V.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ys(a,c):J()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return J()}}/**
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
 */function Pg(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mi(e)?"-0":e}}function Mg(t){return{integerValue:""+t}}function zb(t,e){return Cb(e)?Mg(e):Pg(t,e)}/**
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
 */class vo{constructor(){this._=void 0}}function Gb(t,e,n){return t instanceof Ba?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Fi?xg(t,e):t instanceof Ui?Lg(t,e):function(s,r){const i=Yb(s,r),o=Ih(i)+Ih(s.k);return Ua(i)&&Ua(s.k)?Mg(o):Pg(s.M,o)}(t,e)}function Wb(t,e,n){return t instanceof Fi?xg(t,e):t instanceof Ui?Lg(t,e):n}function Yb(t,e){return t instanceof ja?Ua(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ba extends vo{}class Fi extends vo{constructor(e){super(),this.elements=e}}function xg(t,e){const n=Fg(e);for(const s of t.elements)n.some(r=>Pt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ui extends vo{constructor(e){super(),this.elements=e}}function Lg(t,e){let n=Fg(e);for(const s of t.elements)n=n.filter(r=>!Pt(r,s));return{arrayValue:{values:n}}}class ja extends vo{constructor(e,n){super(),this.M=e,this.k=n}}function Ih(t){return be(t.integerValue||t.doubleValue)}function Fg(t){return cl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Xb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Fi&&s instanceof Fi||n instanceof Ui&&s instanceof Ui?pr(n.elements,s.elements,Pt):n instanceof ja&&s instanceof ja?Pt(n.k,s.k):n instanceof Ba&&s instanceof Ba}(t.transform,e.transform)}function ai(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ug{}function Jb(t,e,n){t instanceof Vg?function(s,r,i){const o=s.value.clone(),a=Ah(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof $g?function(s,r,i){if(!ai(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Ah(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Bg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function qa(t,e,n){t instanceof Vg?function(s,r,i){if(!ai(s.precondition,r))return;const o=s.value.clone(),a=Sh(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(bh(r),o).setHasLocalMutations()}(t,e,n):t instanceof $g?function(s,r,i){if(!ai(s.precondition,r))return;const o=Sh(s.fieldTransforms,i,r),a=r.data;a.setAll(Bg(s)),a.setAll(o),r.convertToFoundDocument(bh(r),a).setHasLocalMutations()}(t,e,n):function(s,r){ai(s.precondition,r)&&r.convertToNoDocument(Q.min())}(t,e)}function Th(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pr(n,s,(r,i)=>Xb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function bh(t){return t.isFoundDocument()?t.version:Q.min()}class Vg extends Ug{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class $g extends Ug{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Bg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ah(t,e,n){const s=new Map;Ae(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Wb(o,a,n[r]))}return s}function Sh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Gb(i,o,e))}return s}/**
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
 */class Qb{constructor(e){this.count=e}}/**
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
 */var Te,ee;function jg(t){if(t===void 0)return fn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Te.OK:return T.OK;case Te.CANCELLED:return T.CANCELLED;case Te.UNKNOWN:return T.UNKNOWN;case Te.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Te.INTERNAL:return T.INTERNAL;case Te.UNAVAILABLE:return T.UNAVAILABLE;case Te.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Te.NOT_FOUND:return T.NOT_FOUND;case Te.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Te.ABORTED:return T.ABORTED;case Te.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Te.DATA_LOSS:return T.DATA_LOSS;default:return J()}}(ee=Te||(Te={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return bg(this.inner)}size(){return this.innerSize}}/**
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
 */class $e{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jr(this.root,e,this.comparator,!0)}}class Jr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:Me.RED,this.left=r!=null?r:Me.EMPTY,this.right=i!=null?i:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Me(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Me.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ch(this.data.getIterator())}getIteratorFrom(e){return new Ch(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Ch{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Zb=new $e(V.comparator);function $n(){return Zb}const eA=new $e(V.comparator);function Ha(){return eA}function Jo(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}new $e(V.comparator);const tA=new Ue(V.comparator);function _e(...t){let e=tA;for(const n of t)e=e.add(n);return e}const nA=new Ue(oe);function qg(){return nA}/**
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
 */class wo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Fr.createSynthesizedTargetChangeForCurrentChange(e,n)),new wo(Q.min(),s,qg(),$n(),_e())}}class Fr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Fr(Ve.EMPTY_BYTE_STRING,n,_e(),_e(),_e())}}/**
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
 */class ci{constructor(e,n,s,r){this.O=e,this.removedTargetIds=n,this.key=s,this.F=r}}class Hg{constructor(e,n){this.targetId=e,this.$=n}}class Kg{constructor(e,n,s=Ve.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Rh{constructor(){this.B=0,this.L=Nh(),this.U=Ve.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=_e(),n=_e(),s=_e();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:J()}}),new Fr(this.U,this.q,e,n,s)}J(){this.G=!1,this.L=Nh()}Y(e,n){this.G=!0,this.L=this.L.insert(e,n)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class sA{constructor(e){this.nt=e,this.st=new Map,this.it=$n(),this.rt=kh(),this.ot=new Ue(oe)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const s=this.lt(n);switch(e.state){case 0:this.ft(n)&&s.W(e.resumeToken);break;case 1:s.tt(),s.K||s.J(),s.W(e.resumeToken);break;case 2:s.tt(),s.K||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((s,r)=>{this.ft(r)&&n(r)})}_t(e){const n=e.targetId,s=e.$.count,r=this.wt(n);if(r){const i=r.target;if(Va(i))if(s===0){const o=new V(i.path);this.ct(n,o,He.newNoDocument(o,Q.min()))}else Ae(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Va(a.target)){const c=new V(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,He.newNoDocument(c,e))}i.j&&(n.set(o,i.H()),i.J())}});let s=_e();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const r=new wo(e,n,this.ot,this.it,s);return this.it=$n(),this.rt=kh(),this.ot=new Ue(oe),r}at(e,n){if(!this.ft(e))return;const s=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,s){if(!this.ft(e))return;const r=this.lt(e);this.It(e,n)?r.Y(n,1):r.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),s&&(this.it=this.it.insert(n,s))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new Rh,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new Ue(oe),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new Rh),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function kh(){return new $e(V.comparator)}function Nh(){return new $e(V.comparator)}/**
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
 */const rA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),iA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class oA{constructor(e,n){this.databaseId=e,this.N=n}}function Ka(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zg(t,e){return t.N?e.toBase64():e.toUint8Array()}function wr(t){return Ae(!!t),Q.fromTimestamp(function(e){const n=dn(e);return new Ze(n.seconds,n.nanos)}(t))}function Gg(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Wg(t){const e=ye.fromString(t);return Ae(Jg(e)),e}function Qo(t,e){const n=Wg(e);if(n.get(1)!==t.databaseId.projectId)throw new P(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(Yg(n))}function za(t,e){return Gg(t.databaseId,e)}function aA(t){const e=Wg(t);return e.length===4?ye.emptyPath():Yg(e)}function Oh(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yg(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.N?(Ae(l===void 0||typeof l=="string"),Ve.fromBase64String(l||"")):(Ae(l===void 0||l instanceof Uint8Array),Ve.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:jg(c.code);return new P(l,c.message||"")}(o);n=new Kg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Qo(t,s.document.name),i=wr(s.document.updateTime),o=new Ft({mapValue:{fields:s.document.fields}}),a=He.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new ci(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Qo(t,s.document),i=s.readTime?wr(s.readTime):Q.min(),o=He.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ci([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Qo(t,s.document),i=s.removedTargetIds||[];n=new ci([],i,r,null)}else{if(!("filter"in e))return J();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Qb(r),o=s.targetId;n=new Hg(o,i)}}return n}function lA(t,e){return{documents:[za(t,e.path)]}}function uA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=za(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=za(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(h){if(h.op==="=="){if(vh(h.value))return{unaryFilter:{field:Yn(h.field),op:"IS_NAN"}};if(yh(h.value))return{unaryFilter:{field:Yn(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(vh(h.value))return{unaryFilter:{field:Yn(h.field),op:"IS_NOT_NAN"}};if(yh(h.value))return{unaryFilter:{field:Yn(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(h.field),op:pA(h.op),value:h.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Yn(u.field),direction:dA(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.N||Ns(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function hA(t){let e=aA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ae(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Xg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Qs(ts(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ns(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new xi(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new xi(d,h)}(n.endAt)),jb(e,r,o,i,a,"F",c,l)}function fA(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xg(t){return t?t.unaryFilter!==void 0?[mA(t)]:t.fieldFilter!==void 0?[gA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Xg(e)).reduce((e,n)=>e.concat(n)):J():[]}function dA(t){return rA[t]}function pA(t){return iA[t]}function Yn(t){return{fieldPath:t.canonicalString()}}function ts(t){return ft.fromServerFormat(t.fieldPath)}function gA(t){return Qe.create(ts(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(t.fieldFilter.op),t.fieldFilter.value)}function mA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ts(t.unaryFilter.field);return Qe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ts(t.unaryFilter.field);return Qe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ts(t.unaryFilter.field);return Qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ts(t.unaryFilter.field);return Qe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return J()}}function Jg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const yA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,s)=>{n(e)})}static reject(e){return new S((n,s)=>{s(e)})}static waitFor(e){return new S((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=S.resolve(!1);for(const s of e)n=n.next(r=>r?S.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Ur(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wA{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Jb(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&qa(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&qa(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(Q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&pr(this.mutations,e.mutations,(n,s)=>Th(n,s))&&pr(this.baseMutations,e.baseMutations,(n,s)=>Th(n,s))}}/**
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
 */class _A{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Nn{constructor(e,n,s,r,i=Q.min(),o=Q.min(),a=Ve.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Nn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class EA{constructor(e){this.Jt=e}}function IA(t){const e=hA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qb(e,e.limit,"L"):e}/**
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
 */class TA{constructor(){this.qe=new bA}addToCollectionParentIndex(e,n){return this.qe.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getFieldIndex(e,n){return S.resolve(null)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}updateCollectionGroup(e,n,s){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class bA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ue(ye.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ue(ye.comparator)).toArray()}}/**
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
 */class ws{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new ws(0)}static gn(){return new ws(-1)}}/**
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
 */async function dl(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==yA)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class AA{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?S.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SA{constructor(e,n,s){this.fs=e,this.$s=n,this.indexManager=s}Bs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.Ls(e,n,s))}Ls(e,n,s){return this.fs.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Us(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}qs(e,n){return this.fs.getEntries(e,n).next(s=>this.Gs(e,s).next(()=>s))}Gs(e,n){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Us(n,s))}Ks(e,n,s){return function(r){return V.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Qs(e,n.path):Ng(n)?this.js(e,n,s):this.Ws(e,n,s)}Qs(e,n){return this.Bs(e,new V(n)).next(s=>{let r=Ha();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}js(e,n,s){const r=n.collectionGroup;let i=Ha();return this.indexManager.getCollectionParents(e,r).next(o=>S.forEach(o,a=>{const c=function(l,u){return new Lr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.Ws(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Ws(e,n,s){let r;return this.fs.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.$s.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let l=r.get(c);l==null&&(l=He.newInvalidDocument(c),r=r.insert(c,l)),qa(a,l,o.localWriteTime),l.isFoundDocument()||(r=r.remove(c))}}).next(()=>(r.forEach((i,o)=>{fl(n,o)||(r=r.remove(i))}),r))}}/**
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
 */class pl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.zs=s,this.Hs=r}static Js(e,n){let s=_e(),r=_e();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new pl(e,n.fromCache,s,r)}}/**
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
 */class CA{Ys(e){this.Xs=e}Ks(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(Q.min())?this.Zs(e,n):this.Xs.qs(e,r).next(i=>{const o=this.ti(n,i);return(oi(n)||Li(n))&&this.ei(n.limitType,o,r,s)?this.Zs(e,n):(fh()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$a(n)),this.Xs.Ks(e,n,kb(s,-1)).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ti(e,n){let s=new Ue(Dg(e));return n.forEach((r,i)=>{fl(e,i)&&(s=s.add(i))}),s}ei(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zs(e,n){return fh()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",$a(n)),this.Xs.Ks(e,n,vs.min())}}/**
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
 */class RA{constructor(e,n,s,r){this.persistence=e,this.ni=n,this.M=r,this.si=new $e(oe),this.ii=new Os(i=>ll(i),ul),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(s)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new SA(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.si))}}function kA(t,e,n,s){return new RA(t,e,n,s)}async function Qg(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.$s.getAllMutationBatches(s).next(i=>(r=i,n.ui(e),n.$s.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=_e();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.ai.qs(s,c).next(l=>({ci:l,removedBatchIds:o,addedBatchIds:a}))})})}function Zg(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ls.getLastRemoteSnapshotVersion(n))}function NA(t,e){const n=se(t),s=e.snapshotVersion;let r=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});r=n.si;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.ls.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ls.addMatchingKeys(i,l.addedDocuments,u)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?d=d.withResumeToken(Ve.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,s)),r=r.insert(u,d),function(g,y,N){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(h,d,l)&&a.push(n.ls.updateTargetData(i,d))});let c=$n();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(OA(i,o,e.documentUpdates).next(l=>{c=l})),!s.isEqual(Q.min())){const l=n.ls.getLastRemoteSnapshotVersion(i).next(u=>n.ls.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.ai.Gs(i,c)).next(()=>c)}).then(i=>(n.si=r,i))}function OA(t,e,n){let s=_e();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let i=$n();return n.forEach((o,a)=>{const c=r.get(o);a.isNoDocument()&&a.version.isEqual(Q.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):U("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function DA(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.ls.getTargetData(s,e).next(i=>i?(r=i,S.resolve(r)):n.ls.allocateTargetId(s).next(o=>(r=new Nn(e,o,0,s.currentSequenceNumber),n.ls.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.si.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.si=n.si.insert(s.targetId,s),n.ii.set(e,s.targetId)),s})}async function Ga(t,e,n){const s=se(t),r=s.si.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ur(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.si=s.si.remove(e),s.ii.delete(r.target)}function Dh(t,e,n){const s=se(t);let r=Q.min(),i=_e();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=se(a),h=u.ii.get(l);return h!==void 0?S.resolve(u.si.get(h)):u.ls.getTargetData(c,l)}(s,o,Vn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.ls.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.ni.Ks(o,e,n?r:Q.min(),n?i:_e())).next(a=>(PA(s,Hb(e),a),{documents:a,hi:i})))}function PA(t,e,n){let s=Q.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ri.set(e,s)}/**
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
 */class MA{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,n){return S.resolve(this._i.get(n))}saveBundleMetadata(e,n){var s;return this._i.set(n.id,{id:(s=n).id,version:s.version,createTime:wr(s.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.wi.get(n))}saveNamedQuery(e,n){return this.wi.set(n.name,function(s){return{name:s.name,query:IA(s.bundledQuery),readTime:wr(s.readTime)}}(n)),S.resolve()}}/**
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
 */class xA{constructor(){this.overlays=new $e(V.comparator),this.mi=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Xt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.mi.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.mi.delete(s)),S.resolve()}getOverlaysForCollection(e,n,s){const r=Jo(),i=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return S.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new $e((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Jo(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Jo(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return S.resolve(a)}Xt(e,n,s){if(s===null)return;const r=this.overlays.get(s.key);if(r!==null){const o=this.mi.get(r.largestBatchId).delete(s.key);this.mi.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new _A(n,s));let i=this.mi.get(n);i===void 0&&(i=_e(),this.mi.set(n,i)),this.mi.set(n,i.add(s.key))}}/**
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
 */class gl{constructor(){this.gi=new Ue(Ne.yi),this.pi=new Ue(Ne.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,n){const s=new Ne(e,n);this.gi=this.gi.add(s),this.pi=this.pi.add(s)}Ti(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ei(new Ne(e,n))}Ai(e,n){e.forEach(s=>this.removeReference(s,n))}Ri(e){const n=new V(new ye([])),s=new Ne(n,e),r=new Ne(n,e+1),i=[];return this.pi.forEachInRange([s,r],o=>{this.Ei(o),i.push(o.key)}),i}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const n=new V(new ye([])),s=new Ne(n,e),r=new Ne(n,e+1);let i=_e();return this.pi.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ne(e,0),s=this.gi.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ne{constructor(e,n){this.key=e,this.Vi=n}static yi(e,n){return V.comparator(e.key,n.key)||oe(e.Vi,n.Vi)}static Ii(e,n){return oe(e.Vi,n.Vi)||V.comparator(e.key,n.key)}}/**
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
 */class LA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.$s=[],this.vi=1,this.Si=new Ue(Ne.yi)}checkEmpty(e){return S.resolve(this.$s.length===0)}addMutationBatch(e,n,s,r){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new wA(i,n,s,r);this.$s.push(o);for(const a of r)this.Si=this.Si.add(new Ne(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ci(s),i=r<0?0:r;return S.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(e){return S.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ne(n,0),r=new Ne(n,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([s,r],o=>{const a=this.Di(o.Vi);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ue(oe);return n.forEach(r=>{const i=new Ne(r,0),o=new Ne(r,Number.POSITIVE_INFINITY);this.Si.forEachInRange([i,o],a=>{s=s.add(a.Vi)})}),S.resolve(this.xi(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;V.isDocumentKey(i)||(i=i.child(""));const o=new Ne(new V(i),0);let a=new Ue(oe);return this.Si.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Vi)),!0)},o),S.resolve(this.xi(a))}xi(e){const n=[];return e.forEach(s=>{const r=this.Di(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ae(this.Ni(n.batchId,"removed")===0),this.$s.shift();let s=this.Si;return S.forEach(n.mutations,r=>{const i=new Ne(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Si=s})}dn(e){}containsKey(e,n){const s=new Ne(n,0),r=this.Si.firstAfterOrEqual(s);return S.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.$s.length,S.resolve()}Ni(e,n){return this.Ci(e)}Ci(e){return this.$s.length===0?0:e-this.$s[0].batchId}Di(e){const n=this.Ci(e);return n<0||n>=this.$s.length?null:this.$s[n]}}/**
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
 */class FA{constructor(e){this.ki=e,this.docs=new $e(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ki(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return S.resolve(s?s.document.mutableCopy():He.newInvalidDocument(n))}getEntries(e,n){let s=$n();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():He.newInvalidDocument(r))}),S.resolve(s)}getAllFromCollection(e,n,s){let r=$n();const i=new V(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Ob(Nb(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return S.resolve(r)}getAllFromCollectionGroup(e,n,s,r){J()}Mi(e,n){return S.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new UA(this)}getSize(e){return S.resolve(this.size)}}class UA extends AA{constructor(e){super(),this.qn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.qn.addEntry(e,r)):this.qn.removeEntry(s)}),S.waitFor(n)}getFromCache(e,n){return this.qn.getEntry(e,n)}getAllFromCache(e,n){return this.qn.getEntries(e,n)}}/**
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
 */class VA{constructor(e){this.persistence=e,this.Oi=new Os(n=>ll(n),ul),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Fi=0,this.$i=new gl,this.targetCount=0,this.Bi=ws.mn()}forEachTarget(e,n){return this.Oi.forEach((s,r)=>n(r)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Fi&&(this.Fi=n),S.resolve()}In(e){this.Oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Bi=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,n){return this.In(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.In(n),S.resolve()}removeTargetData(e,n){return this.Oi.delete(n.target),this.$i.Ri(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),S.waitFor(i).next(()=>r)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const s=this.Oi.get(n)||null;return S.resolve(s)}addMatchingKeys(e,n,s){return this.$i.Ti(n,s),S.resolve()}removeMatchingKeys(e,n,s){this.$i.Ai(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.$i.Ri(n),S.resolve()}getMatchingKeysForTargetId(e,n){const s=this.$i.Pi(n);return S.resolve(s)}containsKey(e,n){return S.resolve(this.$i.containsKey(n))}}/**
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
 */class $A{constructor(e,n){this.Li={},this.overlays={},this.ts=new al(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new VA(this),this.indexManager=new TA,this.fs=function(s){return new FA(s)}(s=>this.referenceDelegate.Ui(s)),this.M=new EA(n),this.ds=new MA(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Li[e.toKey()];return s||(s=new LA(n,this.referenceDelegate),this.Li[e.toKey()]=s),s}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new BA(this.ts.next());return this.referenceDelegate.qi(),s(r).next(i=>this.referenceDelegate.Gi(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ki(e,n){return S.or(Object.values(this.Li).map(s=>()=>s.containsKey(e,n)))}}class BA extends vA{constructor(e){super(),this.currentSequenceNumber=e}}class ml{constructor(e){this.persistence=e,this.Qi=new gl,this.ji=null}static Wi(e){return new ml(e)}get zi(){if(this.ji)return this.ji;throw J()}addReference(e,n,s){return this.Qi.addReference(s,n),this.zi.delete(s.toString()),S.resolve()}removeReference(e,n,s){return this.Qi.removeReference(s,n),this.zi.add(s.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.zi.add(n.toString()),S.resolve()}removeTarget(e,n){this.Qi.Ri(n.targetId).forEach(r=>this.zi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qi(){this.ji=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.zi,s=>{const r=V.fromPath(s);return this.Hi(e,r).next(i=>{i||n.removeEntry(r,Q.min())})}).next(()=>(this.ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hi(e,n).next(s=>{s?this.zi.delete(n.toString()):this.zi.add(n.toString())})}Ui(e){return 0}Hi(e,n){return S.or([()=>S.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ki(e,n)])}}class Ph{constructor(){this.activeTargetIds=qg()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jA{constructor(){this.Fr=new Ph,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Ph,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qA{Br(e){}shutdown(){}}/**
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
 */class Mh{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const HA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class KA{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class zA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);U("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.ao(e,o,a,s).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw dh("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}co(e,n,s,r,i){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ks,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=HA[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,n,s,r){return new Promise((i,o)=>{const a=new gb;a.listenOnce(fb.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Yo.NO_ERROR:const l=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Yo.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new P(T.DEADLINE_EXCEEDED,"Request time out"));break;case Yo.HTTP_ERROR:const u=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(h.status);o(new P(d,h.message))}else o(new P(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(T.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=ub(),o=hb(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new pb({})),this.uo(a.initMessageHeaders,n,s),nd()||sd()||Jv()||rd()||Qv()||vc()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");U("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const d=new KA({jr:y=>{h?U("Connection","Not sending because WebChannel is closed:",y):(u||(U("Connection","Opening WebChannel transport."),l.open(),u=!0),U("Connection","WebChannel sending:",y),l.send(y))},Wr:()=>l.close()}),g=(y,N,I)=>{y.listen(N,R=>{try{I(R)}catch(x){setTimeout(()=>{throw x},0)}})};return g(l,Xr.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(l,Xr.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),d.eo())}),g(l,Xr.EventType.ERROR,y=>{h||(h=!0,dh("Connection","WebChannel transport errored:",y),d.eo(new P(T.UNAVAILABLE,"The operation could not be completed")))}),g(l,Xr.EventType.MESSAGE,y=>{var N;if(!h){const I=y.data[0];Ae(!!I);const R=I,x=R.error||((N=R[0])===null||N===void 0?void 0:N.error);if(x){U("Connection","WebChannel received error:",x);const K=x.status;let G=function(Ee){const Y=Te[Ee];if(Y!==void 0)return jg(Y)}(K),ae=x.message;G===void 0&&(G=T.INTERNAL,ae="Unknown error status: "+K+" with message "+x.message),h=!0,d.eo(new P(G,ae)),l.close()}else U("Connection","WebChannel received:",I),d.no(I)}}),g(o,db.STAT_EVENT,y=>{y.stat===uh.PROXY?U("Connection","Detected buffering proxy"):y.stat===uh.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Zo(){return typeof document!="undefined"?document:null}/**
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
 */function _o(t){return new oA(t,!0)}class em{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Jn=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class GA{constructor(e,n,s,r,i,o,a,c){this.Jn=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new em(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(fn(n.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new P(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Go(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.Jn.enqueueAndForget(()=>this.Po===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WA extends GA{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.M=i}Go(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=cA(this.M,e),s=function(r){if(!("targetChange"in r))return Q.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Q.min():i.readTime?wr(i.readTime):Q.min()}(e);return this.listener.Ko(n,s)}Qo(e){const n={};n.database=Oh(this.M),n.addTarget=function(r,i){let o;const a=i.target;return o=Va(a)?{documents:lA(r,a)}:{query:uA(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=zg(r,i.resumeToken):i.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=Ka(r,i.snapshotVersion.toTimestamp())),o}(this.M,e);const s=fA(this.M,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=Oh(this.M),n.removeTarget=e,this.Oo(n)}}/**
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
 */class YA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.M=r,this.Zo=!1}tu(){if(this.Zo)throw new P(T.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new P(T.UNKNOWN,r.toString())})}co(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new P(T.UNKNOWN,r.toString())})}terminate(){this.Zo=!0}}class XA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.au(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(fn(n),this.su=!1):U("OnlineStateTracker",n)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class JA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{$r(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=se(a);c.lu.add(4),await Vr(c),c._u.set("Unknown"),c.lu.delete(4),await Eo(c)}(this))})}),this._u=new XA(s,r)}}async function Eo(t){if($r(t))for(const e of t.fu)await e(!0)}async function Vr(t){for(const e of t.fu)await e(!1)}function tm(t,e){const n=se(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),wl(n)?vl(n):Ds(n).Co()&&yl(n,e))}function nm(t,e){const n=se(t),s=Ds(n);n.hu.delete(e),s.Co()&&sm(n,e),n.hu.size===0&&(s.Co()?s.ko():$r(n)&&n._u.set("Unknown"))}function yl(t,e){t.wu.Z(e.targetId),Ds(t).Qo(e)}function sm(t,e){t.wu.Z(e),Ds(t).jo(e)}function vl(t){t.wu=new sA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),Ds(t).start(),t._u.iu()}function wl(t){return $r(t)&&!Ds(t).Do()&&t.hu.size>0}function $r(t){return se(t).lu.size===0}function rm(t){t.wu=void 0}async function QA(t){t.hu.forEach((e,n)=>{yl(t,e)})}async function ZA(t,e){rm(t),wl(t)?(t._u.uu(e),vl(t)):t._u.set("Unknown")}async function eS(t,e,n){if(t._u.set("Online"),e instanceof Kg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xh(t,s)}else if(e instanceof ci?t.wu.ut(e):e instanceof Hg?t.wu._t(e):t.wu.ht(e),!n.isEqual(Q.min()))try{const s=await Zg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.hu.get(c);l&&r.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(Ve.EMPTY_BYTE_STRING,c.snapshotVersion)),sm(r,a);const l=new Nn(c.target,a,1,c.sequenceNumber);yl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await xh(t,s)}}async function xh(t,e,n){if(!Ur(e))throw e;t.lu.add(1),await Vr(t),t._u.set("Offline"),n||(n=()=>Zg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Eo(t)})}async function Lh(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=$r(n);n.lu.add(3),await Vr(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Eo(n)}async function tS(t,e){const n=se(t);e?(n.lu.delete(2),await Eo(n)):e||(n.lu.add(2),await Vr(n),n._u.set("Unknown"))}function Ds(t){return t.mu||(t.mu=function(e,n,s){const r=se(e);return r.tu(),new WA(n,r.bo,r.authCredentials,r.appCheckCredentials,r.M,s)}(t.datastore,t.asyncQueue,{zr:QA.bind(null,t),Jr:ZA.bind(null,t),Ko:eS.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),wl(t)?vl(t):t._u.set("Unknown")):(await t.mu.stop(),rm(t))})),t.mu}/**
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
 */class _l{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new _l(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function im(t,e){if(fn("AsyncQueue",`${e}: ${t}`),Ur(t))return new P(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||V.comparator(n.key,s.key):(n,s)=>V.comparator(n.key,s.key),this.keyedMap=Ha(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new cs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Fh{constructor(){this.yu=new $e(V.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):J():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class _s{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new _s(e,n,cs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class nS{constructor(){this.Iu=void 0,this.listeners=[]}}class sS{constructor(){this.queries=new Os(e=>Og(e),yo),this.onlineState="Unknown",this.Tu=new Set}}async function om(t,e){const n=se(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new nS),r)try{i.Iu=await n.onListen(s)}catch(o){const a=im(o,`Initialization of query '${$a(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&El(n)}async function am(t,e){const n=se(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function rS(t,e){const n=se(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&El(n)}function iS(t,e,n){const s=se(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function El(t){t.Tu.forEach(e=>{e.next()})}class cm{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new _s(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),n=!0):this.vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}Vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class lm{constructor(e){this.key=e}}class um{constructor(e){this.key=e}}class oS{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=_e(),this.mutatedKeys=_e(),this.Lu=Dg(e),this.Uu=new cs(this.Lu)}get qu(){return this.Fu}Gu(e,n){const s=n?n.Ku:new Fh,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=oi(this.query)&&r.size===this.query.limit?r.last():null,l=Li(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=fl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),N=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?y!==N&&(s.track({type:3,doc:g}),I=!0):this.Qu(d,g)||(s.track({type:2,doc:g}),I=!0,(c&&this.Lu(g,c)>0||l&&this.Lu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),I=!0):d&&!g&&(s.track({type:1,doc:d}),I=!0,(c||l)&&(a=!0)),I&&(g?(o=o.add(g),i=N?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),oi(this.query)||Li(this.query))for(;o.size>this.query.limit;){const u=oi(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Ku:s,ei:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Ku.pu();i.sort((l,u)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return g(h)-g(d)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new _s(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new Fh,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=_e(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new um(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new lm(s))}),n}Ju(e){this.Fu=e.hi,this.Bu=_e();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Yu(){return _s.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class aS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class cS{constructor(e){this.key=e,this.Xu=!1}}class lS{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new Os(a=>Og(a),yo),this.ea=new Map,this.na=new Set,this.sa=new $e(V.comparator),this.ia=new Map,this.ra=new gl,this.oa={},this.ua=new Map,this.aa=ws.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function uS(t,e){const n=yS(t);let s,r;const i=n.ta.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await DA(n.localStore,Vn(e));n.isPrimaryClient&&tm(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await hS(n,e,s,a==="current")}return r}async function hS(t,e,n,s){t.ha=(u,h,d)=>async function(g,y,N,I){let R=y.view.Gu(N);R.ei&&(R=await Dh(g.localStore,y.query,!1).then(({documents:G})=>y.view.Gu(G,R)));const x=I&&I.targetChanges.get(y.targetId),K=y.view.applyChanges(R,g.isPrimaryClient,x);return Vh(g,y.targetId,K.zu),K.snapshot}(t,u,h,d);const r=await Dh(t.localStore,e,!0),i=new oS(e,r.hi),o=i.Gu(r.documents),a=Fr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Vh(t,n,c.zu);const l=new aS(e,n,i);return t.ta.set(e,l),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),c.snapshot}async function fS(t,e){const n=se(t),s=n.ta.get(e),r=n.ea.get(s.targetId);if(r.length>1)return n.ea.set(s.targetId,r.filter(i=>!yo(i,e))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ga(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),nm(n.remoteStore,s.targetId),Wa(n,s.targetId)}).catch(dl)):(Wa(n,s.targetId),await Ga(n.localStore,s.targetId,!0))}async function hm(t,e){const n=se(t);try{const s=await NA(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ia.get(i);o&&(Ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?Ae(o.Xu):r.removedDocuments.size>0&&(Ae(o.Xu),o.Xu=!1))}),await dm(n,s,e)}catch(s){await dl(s)}}function Uh(t,e,n){const s=se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ta.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=se(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Eu(o)&&(c=!0)}),c&&El(a)}(s.eventManager,e),r.length&&s.Zu.Ko(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function dS(t,e,n){const s=se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ia.get(e),i=r&&r.key;if(i){let o=new $e(V.comparator);o=o.insert(i,He.newNoDocument(i,Q.min()));const a=_e().add(i),c=new wo(Q.min(),new Map,new Ue(oe),o,a);await hm(s,c),s.sa=s.sa.remove(i),s.ia.delete(e),Il(s)}else await Ga(s.localStore,e,!1).then(()=>Wa(s,e,n)).catch(dl)}function Wa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ea.get(e))t.ta.delete(s),n&&t.Zu.la(s,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach(s=>{t.ra.containsKey(s)||fm(t,s)})}function fm(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);n!==null&&(nm(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),Il(t))}function Vh(t,e,n){for(const s of n)s instanceof lm?(t.ra.addReference(s.key,e),pS(t,s)):s instanceof um?(U("SyncEngine","Document no longer in limbo: "+s.key),t.ra.removeReference(s.key,e),t.ra.containsKey(s.key)||fm(t,s.key)):J()}function pS(t,e){const n=e.key,s=n.path.canonicalString();t.sa.get(n)||t.na.has(s)||(U("SyncEngine","New document in limbo: "+n),t.na.add(s),Il(t))}function Il(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new V(ye.fromString(e)),s=t.aa.next();t.ia.set(s,new cS(n)),t.sa=t.sa.insert(n,s),tm(t.remoteStore,new Nn(Vn(hl(n.path)),s,2,al.A))}}async function dm(t,e,n){const s=se(t),r=[],i=[],o=[];s.ta.isEmpty()||(s.ta.forEach((a,c)=>{o.push(s.ha(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=pl.Js(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Zu.Ko(r),await async function(a,c){const l=se(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>S.forEach(c,h=>S.forEach(h.zs,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>S.forEach(h.Hs,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ur(u))throw u;U("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.si.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.si=l.si.insert(h,y)}}}(s.localStore,i))}async function gS(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await Qg(n.localStore,e);n.currentUser=e,function(r,i){r.ua.forEach(o=>{o.forEach(a=>{a.reject(new P(T.CANCELLED,i))})}),r.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await dm(n,s.ci)}}function mS(t,e){const n=se(t),s=n.ia.get(e);if(s&&s.Xu)return _e().add(s.key);{let r=_e();const i=n.ea.get(e);if(!i)return r;for(const o of i){const a=n.ta.get(o);r=r.unionWith(a.view.qu)}return r}}function yS(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dS.bind(null,e),e.Zu.Ko=rS.bind(null,e.eventManager),e.Zu.la=iS.bind(null,e.eventManager),e}class vS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=_o(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return kA(this.persistence,new CA,e.initialUser,this.M)}_a(e){return new $A(ml.Wi,this.M)}da(e){return new jA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Uh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gS.bind(null,this.syncEngine),await tS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sS}createDatastore(e){const n=_o(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new zA(r));var r;return function(i,o,a,c){return new YA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Uh(this.syncEngine,a,0),o=Mh.vt()?new Mh:new qA,new JA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new lS(s,r,i,o,a,c);return l&&(u.ca=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);U("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Vr(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class pm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _S{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=tt.UNAUTHENTICATED,this.clientId=Tg.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=im(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ES(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Qg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function IS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TS(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Lh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Lh(e.remoteStore,i)),t.onlineComponents=e}async function TS(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await ES(t,new vS)),t.offlineComponents}async function bS(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await IS(t,new wS)),t.onlineComponents}async function gm(t){const e=await bS(t),n=e.eventManager;return n.onListen=uS.bind(null,e.syncEngine),n.onUnlisten=fS.bind(null,e.syncEngine),n}function AS(t,e,n={}){const s=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new pm({next:h=>{i.enqueueAndForget(()=>am(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new P(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new P(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new cm(hl(o.path),l,{includeMetadataChanges:!0,Du:!0});return om(r,u)}(await gm(t),t.asyncQueue,e,n,s)),s.promise}function SS(t,e,n={}){const s=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new pm({next:h=>{i.enqueueAndForget(()=>am(r,u)),h.fromCache&&a.source==="server"?c.reject(new P(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new cm(o,l,{includeMetadataChanges:!0,Du:!0});return om(r,u)}(await gm(t),t.asyncQueue,e,n,s)),s.promise}const $h=new Map;/**
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
 */function mm(t,e,n){if(!n)throw new P(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CS(t,e,n,s){if(e===!0&&s===!0)throw new P(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bh(t){if(!V.isDocumentKey(t))throw new P(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jh(t){if(V.isDocumentKey(t))throw new P(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Io(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Vi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Io(t);throw new P(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class qh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,CS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Tl{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qh({}),this._settingsFrozen=!1,e instanceof ms?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new P(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(r.options.projectId)}(e))}get app(){if(!this._app)throw new P(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yb;switch(n.type){case"gapi":const s=n.client;return Ae(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new _b(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new P(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=$h.get(e);n&&(U("ComponentProvider","Removing Datastore"),$h.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class at{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class Br{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class ln extends Br{constructor(e,n,s){super(e,n,hl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new V(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function cC(t,e,...n){if(t=mt(t),mm("collection","path",e),t instanceof Tl){const s=ye.fromString(e,...n);return jh(s),new ln(t,null,s)}{if(!(t instanceof at||t instanceof ln))throw new P(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ye.fromString(e,...n));return jh(s),new ln(t.firestore,null,s)}}function lC(t,e,...n){if(t=mt(t),arguments.length===1&&(e=Tg.R()),mm("doc","path",e),t instanceof Tl){const s=ye.fromString(e,...n);return Bh(s),new at(t,null,new V(s))}{if(!(t instanceof at||t instanceof ln))throw new P(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ye.fromString(e,...n));return Bh(s),new at(t.firestore,t instanceof ln?t.converter:null,new V(s))}}/**
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
 */class RS{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new em(this,"async_queue_retry"),this.Ua=()=>{const n=Zo();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Zo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const n=Zo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise(()=>{});const n=new cn;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ka.push(e),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(e){if(!Ur(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(e){const n=this.Na.then(()=>(this.$a=!0,e().catch(s=>{this.Fa=s,this.$a=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw fn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.$a=!1,s))));return this.Na=n,n}enqueueAfterDelay(e,n,s){this.qa(),this.La.indexOf(e)>-1&&(n=0);const r=_l.createAndSchedule(this,e,n,s,i=>this.Qa(i));return this.Oa.push(r),r}qa(){this.Fa&&J()}verifyOperationInProgress(){}async ja(){let e;do e=this.Na,await e;while(e!==this.Na)}Wa(e){for(const n of this.Oa)if(n.timerId===e)return!0;return!1}za(e){return this.ja().then(()=>{this.Oa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Oa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ja()})}Ha(e){this.La.push(e)}Qa(e){const n=this.Oa.indexOf(e);this.Oa.splice(n,1)}}class bl extends Tl{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new RS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||vm(this),this._firestoreClient.terminate()}}function uC(t=_c()){return jn(t,"firestore").getImmediate()}function ym(t){return t._firestoreClient||vm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Sb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _S(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class wm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(Ve.fromBase64String(e))}catch(n){throw new P(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _m{constructor(e){this._methodName=e}}/**
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
 */class Al{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const kS=/^__.*__$/;function Em(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Sl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.M=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(e){return new Sl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Xa({path:s,tc:!1});return r.ec(e),r}nc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Xa({path:s,tc:!1});return r.Ja(),r}sc(e){return this.Xa({path:void 0,tc:!0})}ic(e){return Ya(e,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ja(){if(this.path)for(let e=0;e<this.path.length;e++)this.ec(this.path.get(e))}ec(e){if(e.length===0)throw this.ic("Document fields must not be empty");if(Em(this.Ya)&&kS.test(e))throw this.ic('Document fields cannot begin and end with "__"')}}class NS{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=s||_o(e)}uc(e,n,s,r=!1){return new Sl({Ya:e,methodName:n,oc:s,path:ft.emptyPath(),tc:!1,rc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function OS(t){const e=t._freezeSettings(),n=_o(t._databaseId);return new NS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DS(t,e,n,s=!1){return Cl(n,t.uc(s?4:3,e))}function Cl(t,e){if(Im(t=mt(t)))return MS("Unsupported field value:",e,t),PS(t,e);if(t instanceof _m)return function(n,s){if(!Em(s.Ya))throw s.ic(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ic(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.tc&&e.Ya!==4)throw e.ic("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Cl(o,s.sc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=mt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zb(s.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ze.fromDate(n);return{timestampValue:Ka(s.M,r)}}if(n instanceof Ze){const r=new Ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ka(s.M,r)}}if(n instanceof Al)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Es)return{bytesValue:zg(s.M,n._byteString)};if(n instanceof at){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ic(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Gg(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ic(`Unsupported field value: ${Io(n)}`)}(t,e)}function PS(t,e){const n={};return bg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(t,(s,r)=>{const i=Cl(r,e.Za(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Im(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Al||t instanceof Es||t instanceof at||t instanceof _m)}function MS(t,e,n){if(!Im(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Io(n);throw s==="an object"?e.ic(t+" a custom object"):e.ic(t+" "+s)}}const xS=new RegExp("[~\\*/\\[\\]]");function LS(t,e,n){if(e.search(xS)>=0)throw Ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wm(...e.split("."))._internalPath}catch{throw Ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ya(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new P(T.INVALID_ARGUMENT,a+t+c)}/**
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
 */class Tm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FS extends Tm{data(){return super.data()}}function Rl(t,e){return typeof e=="string"?LS(t,e):e instanceof wm?e._internalPath:e._delegate._internalPath}/**
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
 */class $s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bm extends Tm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Rl("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class li extends bm{data(e={}){return super.data(e)}}class US{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new $s(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new li(this._firestore,this._userDataWriter,s.key,s,new $s(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new li(s._firestore,s._userDataWriter,o.doc.key,o.doc,new $s(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new li(s._firestore,s._userDataWriter,o.doc.key,o.doc,new $s(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:VS(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function $S(t){if(Li(t)&&t.explicitOrderBy.length===0)throw new P(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class BS{}function hC(t,...e){for(const n of e)t=n._apply(t);return t}class jS extends BS{constructor(e,n,s){super(),this.hc=e,this.lc=n,this.fc=s,this.type="where"}_apply(e){const n=OS(e.firestore),s=function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new P(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Kh(u,l);const g=[];for(const y of u)g.push(Hh(a,r,y));h={arrayValue:{values:g}}}else h=Hh(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Kh(u,l),h=DS(o,i,u,l==="in"||l==="not-in");const d=Qe.create(c,l,h);return function(g,y){if(y.S()){const I=kg(g);if(I!==null&&!I.isEqual(y.field))throw new P(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${I.toString()}' and '${y.field.toString()}'`);const R=Rg(g);R!==null&&qS(g,y.field,R)}const N=function(I,R){for(const x of I.filters)if(R.indexOf(x.op)>=0)return x.op;return null}(g,function(I){switch(I){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(N!==null)throw N===y.op?new P(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new P(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${N.toString()}' filters.`)}(r,d),d}(e._query,"where",n,e.firestore._databaseId,this.hc,this.lc,this.fc);return new Br(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new Lr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function fC(t,e,n){const s=e,r=Rl("where",t);return new jS(r,s,n)}function Hh(t,e,n){if(typeof(n=mt(n))=="string"){if(n==="")throw new P(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ng(e)&&n.indexOf("/")!==-1)throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ye.fromString(n));if(!V.isDocumentKey(s))throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return mh(t,new V(s))}if(n instanceof at)return mh(t,n._key);throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Io(n)}.`)}function Kh(t,e){if(!Array.isArray(t)||t.length===0)throw new P(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new P(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function qS(t,e,n){if(!n.isEqual(e))throw new P(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class HS{convertValue(e,n="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const s={};return xr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Al(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Sg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(mr(e));default:return null}}convertTimestamp(e){const n=dn(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ye.fromString(e);Ae(Jg(s));const r=new ms(s.get(1),s.get(3)),i=new V(s.popFirst(5));return r.isEqual(n)||fn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function dC(t){t=Vi(t,at);const e=Vi(t.firestore,bl);return AS(ym(e),t._key).then(n=>KS(e,t,n))}class Am extends HS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function pC(t){t=Vi(t,Br);const e=Vi(t.firestore,bl),n=ym(e),s=new Am(e);return $S(t._query),SS(n,t._query).then(r=>new US(e,s,t,r))}function KS(t,e,n){const s=n.docs.get(e._key),r=new Am(t);return new bm(t,r,e._key,s,new $s(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ks=n})(Ir),Ot(new _t("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new bl(r,new vb(n.getProvider("auth-internal")),new Ib(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),pt(hh,"3.4.7",t),pt(hh,"3.4.7","esm2017")})();export{eC as A,fC as D,bt as F,tn as G,uC as P,dC as Y,XS as a,Wf as b,JS as c,it as d,hv as e,lC as f,nC as g,Qa as h,tC as i,QS as j,WS as k,EE as l,cC as m,Ja as n,YS as o,pC as p,ZS as q,GS as r,aC as s,zS as t,iC as u,hC as v,Ay as w,rC as x,sC as y,oC as z};
