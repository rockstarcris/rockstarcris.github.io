import{s as p,e as m,i as _,y as c,d as l,l as y,m as g,n as h,f as b,g as A,A as k,j as S}from"./scheduler.816f6b02.js";import{S as C,i as w}from"./index.ac55fbe5.js";import{E as x}from"./estilos.constants.ef6e286e.js";import{q as d}from"./index.esm.098bce7e.js";import"./paths.7646cfe1.js";import"./state.26aa9024.js";function N(s){let t;return{c(){t=y(s[0])},l(e){t=g(e,s[0])},m(e,n){_(e,t,n)},p(e,n){n&1&&h(t,e[0])},d(e){e&&l(t)}}}function q(s){let t,e=" ";return{c(){t=b("span"),t.textContent=e,this.h()},l(n){t=A(n,"SPAN",{class:!0,"data-svelte-h":!0}),k(t)!=="svelte-ibo6pi"&&(t.textContent=e),this.h()},h(){S(t,"class",x.CARGANDO_SPAN+" !w-10")},m(n,i){_(n,t,i)},p:c,d(n){n&&l(t)}}}function v(s){let t;function e(a,o){return a[1]?q:N}let n=e(s),i=n(s);return{c(){i.c(),t=m()},l(a){i.l(a),t=m()},m(a,o){i.m(a,o),_(a,t,o)},p(a,[o]){n===(n=e(a))&&i?i.p(a,o):(i.d(1),i=n(a),i&&(i.c(),i.m(t.parentNode,t)))},i:c,o:c,d(a){a&&l(t),i.d(a)}}}function P(s,t,e){let{anunciante_id:n}=t,i,a;return s.$$set=o=>{"anunciante_id"in o&&e(2,n=o.anunciante_id)},s.$$.update=()=>{s.$$.dirty&4&&(async()=>{e(1,a=!0);const o=await d("contenido","tutor_id",n),f=await Promise.all(o.map(async r=>await d("me_gustas","lista",r.id,void 0,void 0,!0)));e(0,i=f.reduce((r,u)=>r+u.length,0)),e(1,a=!1)})()},[i,a,n]}class L extends C{constructor(t){super(),w(this,t,P,v,p,{anunciante_id:2})}}export{L as A};
