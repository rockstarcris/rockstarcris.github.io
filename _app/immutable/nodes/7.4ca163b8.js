import{s as H,f as d,a as w,l as z,g as h,h as g,d as u,c as I,m as O,r as F,j as m,i as v,v as p,y as L,n as U,o as W,z as X}from"../chunks/scheduler.4191ff18.js";import{S as G,i as J,b as A,d as B,m as D,a as E,t as S,e as N,c as Y,g as Z}from"../chunks/index.ac363c80.js";import"../chunks/index.esm.56b6a403.js";import{Q as K}from"../chunks/query-db.component.4fd6d44f.js";import"../chunks/state.5aff7cf1.js";import{F as ee}from"../chunks/fecha.component.1b0c9726.js";const te=!0,he=Object.freeze(Object.defineProperty({__proto__:null,prerender:te},Symbol.toStringTag,{value:"Module"}));function oe(l){let e,o,t=l[2].título+"",a,s;return{c(){e=d("p"),o=z("- "),a=z(t),s=z(" -"),this.h()},l(i){e=h(i,"P",{slot:!0});var n=g(e);o=O(n,"- "),a=O(n,t),s=O(n," -"),n.forEach(u),this.h()},h(){m(e,"slot","artículo")},m(i,n){v(i,e,n),p(e,o),p(e,a),p(e,s)},p(i,n){n&4&&t!==(t=i[2].título+"")&&U(a,t)},d(i){i&&u(e)}}}function ne(l){let e,o,t,a,s,i,n,f,_,b,C,P=l[0].comentario+"",T,j,$,M="Borrar comentario",k,V,Q;return t=new ee({props:{timestamp:l[0].fecha}}),s=new K({props:{collection_id:"contenido",clave:"id",valor:l[0].contenido_id,$$slots:{artículo:[oe,({artículo:r})=>({2:r}),({artículo:r})=>r?4:0]},$$scope:{ctx:l}}}),{c(){e=d("div"),o=d("span"),A(t.$$.fragment),a=w(),A(s.$$.fragment),i=w(),n=d("a"),f=z("ver contenido"),b=w(),C=d("p"),T=z(P),j=w(),$=d("button"),$.textContent=M,this.h()},l(r){e=h(r,"DIV",{class:!0});var c=g(e);o=h(c,"SPAN",{});var q=g(o);B(t.$$.fragment,q),q.forEach(u),a=I(c),B(s.$$.fragment,c),i=I(c),n=h(c,"A",{href:!0,class:!0});var y=g(n);f=O(y,"ver contenido"),y.forEach(u),c.forEach(u),b=I(r),C=h(r,"P",{class:!0});var R=g(C);T=O(R,P),R.forEach(u),j=I(r),$=h(r,"BUTTON",{class:!0,"data-svelte-h":!0}),F($)!=="svelte-omaoty"&&($.textContent=M),this.h()},h(){m(n,"href",_="/ver-promocion/"+l[0].promocion_id+"/"+l[0].contenido_id),m(n,"class","capitalize"),m(e,"class","content"),m(C,"class","text"),m($,"class","inline-delete-btn")},m(r,c){v(r,e,c),p(e,o),D(t,o,null),p(e,a),D(s,e,null),p(e,i),p(e,n),p(n,f),v(r,b,c),v(r,C,c),p(C,T),v(r,j,c),v(r,$,c),k=!0,V||(Q=L($,"click",l[1]),V=!0)},p(r,[c]){const q={};c&1&&(q.timestamp=r[0].fecha),t.$set(q);const y={};c&1&&(y.valor=r[0].contenido_id),c&12&&(y.$$scope={dirty:c,ctx:r}),s.$set(y),(!k||c&1&&_!==(_="/ver-promocion/"+r[0].promocion_id+"/"+r[0].contenido_id))&&m(n,"href",_),(!k||c&1)&&P!==(P=r[0].comentario+"")&&U(T,P)},i(r){k||(E(t.$$.fragment,r),E(s.$$.fragment,r),k=!0)},o(r){S(t.$$.fragment,r),S(s.$$.fragment,r),k=!1},d(r){r&&(u(e),u(b),u(C),u(j),u($)),N(t),N(s),V=!1,Q()}}}function ae(l,e,o){let{comentario:t}=e;const a=()=>{confirm("Borrar este comentario?")};return l.$$set=s=>{"comentario"in s&&o(0,t=s.comentario)},[t,a]}class se extends G{constructor(e){super(),J(this,e,ae,ne,H,{comentario:0})}}function x(l){let e,o;return e=new K({props:{collection_id:"comentarios",clave:"tutor_id",valor:l[0],$$slots:{vacío:[le],artículo:[re,({artículo:t})=>({1:t}),({artículo:t})=>t?2:0]},$$scope:{ctx:l}}}),{c(){A(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,a){D(e,t,a),o=!0},p(t,a){const s={};a&1&&(s.valor=t[0]),a&6&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){o||(E(e.$$.fragment,t),o=!0)},o(t){S(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function re(l){let e,o,t;return o=new se({props:{comentario:l[1]}}),{c(){e=d("div"),A(o.$$.fragment),this.h()},l(a){e=h(a,"DIV",{class:!0,style:!0,slot:!0});var s=g(e);B(o.$$.fragment,s),s.forEach(u),this.h()},h(){m(e,"class","box"),m(e,"style",""),m(e,"slot","artículo")},m(a,s){v(a,e,s),D(o,e,null),t=!0},p(a,s){const i={};s&2&&(i.comentario=a[1]),o.$set(i)},i(a){t||(E(o.$$.fragment,a),t=!0)},o(a){S(o.$$.fragment,a),t=!1},d(a){a&&u(e),N(o)}}}function le(l){let e,o="Aún no tienes comentarios Rock!";return{c(){e=d("p"),e.textContent=o,this.h()},l(t){e=h(t,"P",{class:!0,slot:!0,"data-svelte-h":!0}),F(e)!=="svelte-3cninz"&&(e.textContent=o),this.h()},h(){m(e,"class","empty"),m(e,"slot","vacío")},m(t,a){v(t,e,a)},p:X,d(t){t&&u(e)}}}function ie(l){let e,o,t="Comentarios usuarios Rock",a,s,i,n=l[0]&&x(l);return{c(){e=d("section"),o=d("h1"),o.textContent=t,a=w(),s=d("div"),n&&n.c(),this.h()},l(f){e=h(f,"SECTION",{class:!0});var _=g(e);o=h(_,"H1",{class:!0,"data-svelte-h":!0}),F(o)!=="svelte-1a4os7n"&&(o.textContent=t),a=I(_),s=h(_,"DIV",{class:!0});var b=g(s);n&&n.l(b),b.forEach(u),_.forEach(u),this.h()},h(){m(o,"class","heading"),m(s,"class","show-comments"),m(e,"class","comments")},m(f,_){v(f,e,_),p(e,o),p(e,a),p(e,s),n&&n.m(s,null),i=!0},p(f,[_]){f[0]?n?(n.p(f,_),_&1&&E(n,1)):(n=x(f),n.c(),E(n,1),n.m(s,null)):n&&(Z(),S(n,1,1,()=>{n=null}),Y())},i(f){i||(E(n),i=!0)},o(f){S(n),i=!1},d(f){f&&u(e),n&&n.d()}}}function ce(l,e,o){let t;return W(()=>{o(0,t=sessionStorage.getItem("user_id"))}),[t]}class $e extends G{constructor(e){super(),J(this,e,ce,ie,H,{})}}export{$e as component,he as universal};