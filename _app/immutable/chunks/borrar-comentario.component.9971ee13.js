import{s as x,z as B,f as b,a as k,l as F,g as v,h as E,d as f,c as y,m as I,j as g,i as u,u as N,D as q,E as D,F as S,n as O,A as P,v as U,y as h}from"./scheduler.816f6b02.js";import{S as z,i as A,a as T,t as $}from"./index.ac55fbe5.js";import"./paths.7378d809.js";import"./index.esm.098bce7e.js";import{t as V}from"./state.26aa9024.js";import{d as G}from"./delete-db.function.d9a5edac.js";import{p as H}from"./prueba.function.48c3e16e.js";const J=o=>({}),j=o=>({}),K=o=>({}),w=o=>({});function L(o){let e,_,s,n=o[0].comentario+"",a,i,m;const p=o[2].título,l=B(p,o,o[1],w),d=o[2].borrar,c=B(d,o,o[1],j);return{c(){e=b("div"),l&&l.c(),_=k(),s=b("p"),a=F(n),i=k(),c&&c.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var r=E(e);l&&l.l(r),r.forEach(f),_=y(t),s=v(t,"P",{class:!0});var C=E(s);a=I(C,n),C.forEach(f),i=y(t),c&&c.l(t),this.h()},h(){g(e,"class","content"),g(s,"class","text")},m(t,r){u(t,e,r),l&&l.m(e,null),u(t,_,r),u(t,s,r),N(s,a),u(t,i,r),c&&c.m(t,r),m=!0},p(t,[r]){l&&l.p&&(!m||r&2)&&q(l,p,t,t[1],m?S(p,t[1],r,K):D(t[1]),w),(!m||r&1)&&n!==(n=t[0].comentario+"")&&O(a,n),c&&c.p&&(!m||r&2)&&q(c,d,t,t[1],m?S(d,t[1],r,J):D(t[1]),j)},i(t){m||(T(l,t),T(c,t),m=!0)},o(t){$(l,t),$(c,t),m=!1},d(t){t&&(f(e),f(_),f(s),f(i)),l&&l.d(t),c&&c.d(t)}}}function M(o,e,_){let{$$slots:s={},$$scope:n}=e,{comentario:a}=e;return o.$$set=i=>{"comentario"in i&&_(0,a=i.comentario),"$$scope"in i&&_(1,n=i.$$scope)},[a,n,s]}class st extends z{constructor(e){super(),A(this,e,M,L,x,{comentario:0})}}function Q(o){let e,_="Borrar comentario",s,n;return{c(){e=b("button"),e.textContent=_,this.h()},l(a){e=v(a,"BUTTON",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1aokkgq"&&(e.textContent=_),this.h()},h(){g(e,"class","inline-delete-btn")},m(a,i){u(a,e,i),s||(n=U(e,"click",o[2]),s=!0)},p:h,i:h,o:h,d(a){a&&f(e),s=!1,n()}}}function R(o,e,_){let{comentario:s}=e;const n=()=>{H(async()=>{await G("comentarios",s.id),V.success("Comentario eliminado con éxito.")})},a=()=>{confirm("Borrar este comentario?"),n()};return o.$$set=i=>{"comentario"in i&&_(1,s=i.comentario)},[n,s,a]}class at extends z{constructor(e){super(),A(this,e,R,Q,x,{comentario:1})}}export{at as B,st as C};