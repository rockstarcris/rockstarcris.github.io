import{s as J,f as I,a as B,g as v,h as C,r as Y,c as S,d as m,j as h,u as H,i as O,v as T,w as Z,x as K,l as y,m as M,n as x,y as ee,z as te,A as ae,B as se,C as ne,D as re,E as oe,o as le}from"../chunks/scheduler.4191ff18.js";import{S as Q,i as W,g as ie,t as $,c as ce,a as E,b as D,d as V,m as L,e as j}from"../chunks/index.ac363c80.js";import{d as fe,g as ue,e as z}from"../chunks/state.5aff7cf1.js";import{I as _e,a as U}from"../chunks/ingreso.component.5a84a472.js";import{d as me,m as X,p as R,c as pe}from"../chunks/mantener-con-vida.function.11bd01ad.js";import{a as de,E as q}from"../chunks/img.component.8ba1356c.js";import{C as he}from"../chunks/cabecera-de-perfil.component.b0835f57.js";import{n as Ae}from"../chunks/stores.a7e59ae7.js";import{i as be,g as ge,d as Te}from"../chunks/index.esm.56b6a403.js";const Ie=!0,je=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ie},Symbol.toStringTag,{value:"Module"})),w={MAIN:[{TAB_CAPTION:"Inicio",ICON:"fas fa-home",PATH:""},{TAB_CAPTION:"Promociones",ICON:"fas fa-bullhorn",PATH:"promociones"},{TAB_CAPTION:"Anunciantes",ICON:"far fa-handshake",PATH:"anunciantes"},{TAB_CAPTION:"Sobre la App",ICON:"fas fa-solid fa-gear",PATH:"about"},{TAB_CAPTION:"Escríbenos",ICON:"fas fa-headset",PATH:"contacto"}],ANUNCIANTE:[{TAB_CAPTION:"Inicio",ICON:"fas fa-home",PATH:""},{TAB_CAPTION:"Tus Promociones",ICON:"fas fa-bullhorn",PATH:"tus-promociones"},{TAB_CAPTION:"Tus Anuncios",ICON:"far fa-handshake",PATH:"tus-anuncios"},{TAB_CAPTION:"Comentarios",ICON:"fas fa-comment",PATH:"comentarios"}]},ve=async()=>{const o=await(await fetch("/firebase-config.json")).json(),e=be(o);return fe.set(ge(e)),de.set(ue(e)),me(X(),1e4),e};function F(o,e,n){const a=o.slice();return a[6]=e[n],a}function Ne(o){let e,n,a,u=U.VER_PERFIL+"",f,r,t,s,_=U.SALIR+"",A,N,b,k;return e=new he({props:{perfil:o[0],cargando:o[1]}}),{c(){D(e.$$.fragment),n=B(),a=I("a"),f=y(u),t=B(),s=I("button"),A=y(_),this.h()},l(c){V(e.$$.fragment,c),n=S(c),a=v(c,"A",{href:!0,class:!0});var i=C(a);f=M(i,u),i.forEach(m),t=S(c),s=v(c,"BUTTON",{class:!0});var l=C(s);A=M(l,_),l.forEach(m),this.h()},h(){h(a,"href","/perfil"),h(a,"class",r="btn "+(o[1]?q.BOTÓN_DESACTIVADO:"")),h(s,"class","text-main-color text-2xl mt-4 hover:text-light-color"),s.disabled=o[1]},m(c,i){L(e,c,i),O(c,n,i),O(c,a,i),T(a,f),O(c,t,i),O(c,s,i),T(s,A),N=!0,b||(k=ee(s,"click",o[3]),b=!0)},p(c,i){const l={};i&1&&(l.perfil=c[0]),i&2&&(l.cargando=c[1]),e.$set(l),(!N||i&2&&r!==(r="btn "+(c[1]?q.BOTÓN_DESACTIVADO:"")))&&h(a,"class",r),(!N||i&2)&&(s.disabled=c[1])},i(c){N||(E(e.$$.fragment,c),N=!0)},o(c){$(e.$$.fragment,c),N=!1},d(c){c&&(m(n),m(a),m(t),m(s)),j(e,c),b=!1,k()}}}function Ce(o){let e,n;return e=new _e({}),{c(){D(e.$$.fragment)},l(a){V(e.$$.fragment,a)},m(a,u){L(e,a,u),n=!0},p:te,i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){$(e.$$.fragment,a),n=!1},d(a){j(e,a)}}}function G(o){let e,n,a,u,f=o[6].TAB_CAPTION+"",r,t;return{c(){e=I("a"),n=I("i"),u=I("span"),r=y(f),this.h()},l(s){e=v(s,"A",{href:!0});var _=C(e);n=v(_,"I",{class:!0}),C(n).forEach(m),u=v(_,"SPAN",{});var A=C(u);r=M(A,f),A.forEach(m),_.forEach(m),this.h()},h(){h(n,"class",a=o[6].ICON),h(e,"href",t="/"+o[6].PATH)},m(s,_){O(s,e,_),T(e,n),T(e,u),T(u,r)},p(s,_){_&1&&a!==(a=s[6].ICON)&&h(n,"class",a),_&1&&f!==(f=s[6].TAB_CAPTION+"")&&x(r,f),_&1&&t!==(t="/"+s[6].PATH)&&h(e,"href",t)},d(s){s&&m(e)}}}function Oe(o){let e,n,a='<i class="fas fa-times"></i>',u,f,r,t,s,_,A;const N=[Ce,Ne],b=[];function k(l,p){return l[2]?0:1}r=k(o),t=b[r]=N[r](o);let c=z(o[0]&&o[0].membresia==="Anunciante"?w.ANUNCIANTE:w.MAIN),i=[];for(let l=0;l<c.length;l+=1)i[l]=G(F(o,c,l));return{c(){e=I("div"),n=I("div"),n.innerHTML=a,u=B(),f=I("div"),t.c(),s=B(),_=I("nav");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){e=v(l,"DIV",{class:!0});var p=C(e);n=v(p,"DIV",{class:!0,"data-svelte-h":!0}),Y(n)!=="svelte-uinjsv"&&(n.innerHTML=a),u=S(p),f=v(p,"DIV",{class:!0});var g=C(f);t.l(g),g.forEach(m),s=S(p),_=v(p,"NAV",{class:!0});var d=C(_);for(let P=0;P<i.length;P+=1)i[P].l(d);d.forEach(m),p.forEach(m),this.h()},h(){h(n,"class","close-side-bar"),h(f,"class","profile"),H(f,"!py-8",o[2]),h(_,"class","navbar"),h(e,"class","side-bar")},m(l,p){O(l,e,p),T(e,n),T(e,u),T(e,f),b[r].m(f,null),T(e,s),T(e,_);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(_,null);A=!0},p(l,[p]){let g=r;if(r=k(l),r===g?b[r].p(l,p):(ie(),$(b[g],1,1,()=>{b[g]=null}),ce(),t=b[r],t?t.p(l,p):(t=b[r]=N[r](l),t.c()),E(t,1),t.m(f,null)),(!A||p&4)&&H(f,"!py-8",l[2]),p&1){c=z(l[0]&&l[0].membresia==="Anunciante"?w.ANUNCIANTE:w.MAIN);let d;for(d=0;d<c.length;d+=1){const P=F(l,c,d);i[d]?i[d].p(P,p):(i[d]=G(P),i[d].c(),i[d].m(_,null))}for(;d<i.length;d+=1)i[d].d(1);i.length=c.length}},i(l){A||(E(t),A=!0)},o(l){$(t),A=!1},d(l){l&&m(e),b[r].d(),Z(i,l)}}}function Pe(o,e,n){let a,u,f;const r=R.subscribe(_=>{n(0,a=_)}),t=pe.subscribe(_=>{n(1,u=_.perfil)}),s=()=>{sessionStorage.removeItem("user_id"),R.set(void 0)};return K(()=>{r(),t()}),o.$$.update=()=>{o.$$.dirty&3&&n(2,f=!u&&!(a!=null&&a.correo))},[a,u,f,s]}class $e extends Q{constructor(e){super(),W(this,e,Pe,Oe,J,{})}}function Ee(o){let e,n,a,u;n=new $e({});const f=o[3].default,r=ae(f,o,o[2],null);return{c(){e=I("div"),D(n.$$.fragment),a=B(),r&&r.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var s=C(e);V(n.$$.fragment,s),a=S(s),r&&r.l(s),s.forEach(m),this.h()},h(){h(e,"class","layout"),H(e,"dark",o[0])},m(t,s){O(t,e,s),L(n,e,null),T(e,a),r&&r.m(e,null),u=!0},p(t,[s]){r&&r.p&&(!u||s&4)&&se(r,f,t,t[2],u?re(f,t[2],s,null):ne(t[2]),null),(!u||s&1)&&H(e,"dark",t[0])},i(t){u||(E(n.$$.fragment,t),E(r,t),u=!0)},o(t){$(n.$$.fragment,t),$(r,t),u=!1},d(t){t&&m(e),j(n),r&&r.d(t)}}}function ke(o,e,n){let a;oe(o,Ae,s=>n(1,a=s));let{$$slots:u={},$$scope:f}=e,r,t;return le(async()=>{n(0,r=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",s=>{n(0,r=s.matches)}),t=await ve()}),K(()=>{t&&Te(t)}),o.$$set=s=>{"$$scope"in s&&n(2,f=s.$$scope)},o.$$.update=()=>{o.$$.dirty&2&&a&&X()},[r,a,f,u]}class ze extends Q{constructor(e){super(),W(this,e,ke,Ee,J,{})}}export{ze as component,je as universal};