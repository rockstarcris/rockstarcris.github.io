import{s as M,e as h,i as v,d as q,P,z as g,D as k,E as p,F as b}from"./scheduler.816f6b02.js";import{S as A,i as H,g as z,t as u,c as B,a as d}from"./index.ac55fbe5.js";import{d as I,h as J,q as K,j as L,o as O,e as w,k as Q,l as R}from"./state.9cc63495.js";import{d as T,m as U}from"./mantener-con-vida.function.4ff1c9d5.js";const V=s=>({}),D=s=>({});function S(s,e,n){const t=s.slice();return t[10]=e[n],t}const W=s=>({artículo:s&2}),E=s=>({artículo:s[10]}),X=s=>({datos:s&2}),G=s=>({datos:s[1]}),Y=s=>({}),N=s=>({});function Z(s){let e;const n=s[7].vacío,t=g(n,s,s[6],D);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,c){t&&t.m(o,c),e=!0},p(o,c){t&&t.p&&(!e||c&64)&&k(t,n,o,o[6],e?b(n,o[6],c,V):p(o[6]),D)},i(o){e||(d(t,o),e=!0)},o(o){u(t,o),e=!1},d(o){t&&t.d(o)}}}function x(s){let e=[],n=new Map,t,o,c=w(s[1]);const _=r=>r[10].id;for(let r=0;r<c.length;r+=1){let l=S(s,c,r),a=_(l);n.set(a,e[r]=j(a,l))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=h()},l(r){for(let l=0;l<e.length;l+=1)e[l].l(r);t=h()},m(r,l){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(r,l);v(r,t,l),o=!0},p(r,l){l&66&&(c=w(r[1]),z(),e=Q(e,l,_,1,r,c,n,t.parentNode,R,j,t,S),B())},i(r){if(!o){for(let l=0;l<c.length;l+=1)d(e[l]);o=!0}},o(r){for(let l=0;l<e.length;l+=1)u(e[l]);o=!1},d(r){r&&q(t);for(let l=0;l<e.length;l+=1)e[l].d(r)}}}function $(s){let e;const n=s[7].artículos,t=g(n,s,s[6],G);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,c){t&&t.m(o,c),e=!0},p(o,c){t&&t.p&&(!e||c&66)&&k(t,n,o,o[6],e?b(n,o[6],c,X):p(o[6]),G)},i(o){e||(d(t,o),e=!0)},o(o){u(t,o),e=!1},d(o){t&&t.d(o)}}}function ee(s){let e;const n=s[7].cargando,t=g(n,s,s[6],N);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,c){t&&t.m(o,c),e=!0},p(o,c){t&&t.p&&(!e||c&64)&&k(t,n,o,o[6],e?b(n,o[6],c,Y):p(o[6]),N)},i(o){e||(d(t,o),e=!0)},o(o){u(t,o),e=!1},d(o){t&&t.d(o)}}}function j(s,e){let n,t;const o=e[7].artículo,c=g(o,e,e[6],E);return{key:s,first:null,c(){n=h(),c&&c.c(),this.h()},l(_){n=h(),c&&c.l(_),this.h()},h(){this.first=n},m(_,r){v(_,n,r),c&&c.m(_,r),t=!0},p(_,r){e=_,c&&c.p&&(!t||r&66)&&k(c,o,e,e[6],t?b(o,e[6],r,W):p(e[6]),E)},i(_){t||(d(c,_),t=!0)},o(_){u(c,_),t=!1},d(_){_&&q(n),c&&c.d(_)}}}function te(s){let e,n,t,o;const c=[ee,$,x,Z],_=[];function r(l,a){var f;return l[2]?0:l[0]?1:(f=l[1])!=null&&f.length?2:3}return e=r(s),n=_[e]=c[e](s),{c(){n.c(),t=h()},l(l){n.l(l),t=h()},m(l,a){_[e].m(l,a),v(l,t,a),o=!0},p(l,[a]){let f=e;e=r(l),e===f?_[e].p(l,a):(z(),u(_[f],1,1,()=>{_[f]=null}),B(),n=_[e],n?n.p(l,a):(n=_[e]=c[e](l),n.c()),d(n,1),n.m(t.parentNode,t))},i(l){o||(d(n),o=!0)},o(l){u(n),o=!1},d(l){l&&q(t),_[e].d(l)}}}function oe(s,e,n){let{$$slots:t={},$$scope:o}=e,{collection_id:c}=e,{orden_por:_=void 0}=e,{descendente:r=!1}=e,{sin_each:l=!1}=e,a=[{}],f=!0,m;const C=P();return m=I.subscribe(async i=>{if(i&&f){m==null||m();try{T(async()=>{await U()},1e4);const y=await J(K(L(i,c),..._?[O(_,r?"desc":void 0)]:[]));n(1,a=y.docs.map(F=>F.data())),C("cargado",{datos:a}),n(2,f=!1)}catch(y){console.error(y)}}}),s.$$set=i=>{"collection_id"in i&&n(3,c=i.collection_id),"orden_por"in i&&n(4,_=i.orden_por),"descendente"in i&&n(5,r=i.descendente),"sin_each"in i&&n(0,l=i.sin_each),"$$scope"in i&&n(6,o=i.$$scope)},[l,a,f,c,_,r,o,t]}class re extends A{constructor(e){super(),H(this,e,oe,te,M,{collection_id:3,orden_por:4,descendente:5,sin_each:0})}}export{re as G};
