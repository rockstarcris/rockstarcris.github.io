import{s as se,f as b,a as N,l as P,g as E,h as I,d as u,c as T,m as C,j as $,i as V,v as h,n as Y,r as ie,z as Z,H as fe,w as y,x as de}from"../chunks/scheduler.4191ff18.js";import{S as le,i as ne,b as Q,d as U,m as W,a as O,t as M,e as X,c as x,g as ee}from"../chunks/index.ac363c80.js";import{e as K}from"../chunks/state.5aff7cf1.js";import{g as ue}from"../chunks/navigation.4c4e9e4b.js";import{p as ce,c as _e}from"../chunks/mantener-con-vida.function.11bd01ad.js";import{C as he,a as me}from"../chunks/cabecera-de-perfil.component.b0835f57.js";import"../chunks/index.esm.56b6a403.js";import{E as pe}from"../chunks/img.component.8ba1356c.js";import{G as ve}from"../chunks/get-db.component.31fa9698.js";const ge=!0,ze=Object.freeze(Object.defineProperty({__proto__:null,prerender:ge},Symbol.toStringTag,{value:"Module"}));function $e(s){var c;let e,a,t=(((c=s[3][0])==null?void 0:c.lista)??s[3]).length+"",l;return{c(){e=b("h3"),a=b("a"),l=P(t),this.h()},l(o){e=E(o,"H3",{slot:!0});var i=I(e);a=E(i,"A",{href:!0,class:!0});var _=I(a);l=C(_,t),_.forEach(u),i.forEach(u),this.h()},h(){$(a,"href","/"+s[1]),$(a,"class","hover:underline"),$(e,"slot","artículos")},m(o,i){V(o,e,i),h(e,a),h(a,l)},p(o,i){var _;i&8&&t!==(t=(((_=o[3][0])==null?void 0:_.lista)??o[3]).length+"")&&Y(l,t)},d(o){o&&u(e)}}}function be(s){let e,a=" ";return{c(){e=b("h3"),e.textContent=a,this.h()},l(t){e=E(t,"H3",{class:!0,slot:!0,"data-svelte-h":!0}),ie(e)!=="svelte-qtt1vd"&&(e.textContent=a),this.h()},h(){$(e,"class",pe.CARGANDO),$(e,"slot","cargando")},m(t,l){V(t,e,l)},p:Z,d(t){t&&u(e)}}}function Ee(s){let e,a,t,l,c,o,i,_,r,d=s[0].descripción+"",m,w,D,G,j=s[1].replace("_"," ")+"",q,g;return i=new ve({props:{collection_id:s[0].clave,sin_each:!0,$$slots:{cargando:[be],artículos:[$e,({datos:k})=>({3:k}),({datos:k})=>k?8:0]},$$scope:{ctx:s}}}),i.$on("cargado",s[2]),{c(){e=b("div"),a=b("div"),t=b("i"),c=N(),o=b("div"),Q(i.$$.fragment),_=N(),r=b("span"),m=P(d),w=N(),D=b("a"),G=P("Ver "),q=P(j),this.h()},l(k){e=E(k,"DIV",{class:!0});var A=I(e);a=E(A,"DIV",{class:!0});var p=I(a);t=E(p,"I",{class:!0}),I(t).forEach(u),c=T(p),o=E(p,"DIV",{});var F=I(o);U(i.$$.fragment,F),_=T(F),r=E(F,"SPAN",{});var J=I(r);m=C(J,d),J.forEach(u),F.forEach(u),p.forEach(u),w=T(A),D=E(A,"A",{href:!0,class:!0});var L=I(D);G=C(L,"Ver "),q=C(L,j),L.forEach(u),A.forEach(u),this.h()},h(){$(t,"class",l="fas fa-"+s[0].icono),$(a,"class","flex"),$(D,"href","/"+s[1]),$(D,"class","inline-btn"),$(e,"class","box")},m(k,A){V(k,e,A),h(e,a),h(a,t),h(a,c),h(a,o),W(i,o,null),h(o,_),h(o,r),h(r,m),h(e,w),h(e,D),h(D,G),h(D,q),g=!0},p(k,[A]){(!g||A&1&&l!==(l="fas fa-"+k[0].icono))&&$(t,"class",l);const p={};A&1&&(p.collection_id=k[0].clave),A&24&&(p.$$scope={dirty:A,ctx:k}),i.$set(p),(!g||A&1)&&d!==(d=k[0].descripción+"")&&Y(m,d)},i(k){g||(O(i.$$.fragment,k),g=!0)},o(k){M(i.$$.fragment,k),g=!1},d(k){k&&u(e),X(i)}}}function ke(s,e,a){let{detalle:t}=e;const{clave:l}=t,c=o=>{ce.update(i=>(i&&(i[t.clave]=o.detail.datos),i))};return s.$$set=o=>{"detalle"in o&&a(0,t=o.detalle)},[t,l,c]}class Ie extends le{constructor(e){super(),ne(this,e,ke,Ee,se,{detalle:0})}}function te(s,e,a){const t=s.slice();return t[4]=e[a].icon,t[5]=e[a].clave,t[6]=e[a].descripción,t}function ae(s,e,a){const t=s.slice();return t[10]=e[a],t}function re(s){let e,a;return e=new Ie({props:{detalle:s[10],cargando:s[1]}}),{c(){Q(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){W(e,t,l),a=!0},p(t,l){const c={};l&2&&(c.cargando=t[1]),e.$set(c)},i(t){a||(O(e.$$.fragment,t),a=!0)},o(t){M(e.$$.fragment,t),a=!1},d(t){X(e,t)}}}function De(s){let e;return{c(){e=P("Sin registrar")},l(a){e=C(a,"Sin registrar")},m(a,t){V(a,e,t)},p:Z,d(a){a&&u(e)}}}function Se(s){let e;return{c(){e=P(" ")},l(a){e=C(a," ")},m(a,t){V(a,e,t)},p:Z,d(a){a&&u(e)}}}function Ae(s){let e,a,t,l;return{c(){e=b("a"),a=P("Mi "),t=P(s[5]),this.h()},l(c){e=E(c,"A",{href:!0,target:!0});var o=I(e);a=C(o,"Mi "),t=C(o,s[5]),o.forEach(u),this.h()},h(){var c;$(e,"href",l=(c=s[0])==null?void 0:c[s[5]]),$(e,"target","_blank")},m(c,o){V(c,e,o),h(e,a),h(e,t)},p(c,o){var i;o&1&&l!==(l=(i=c[0])==null?void 0:i[c[5]])&&$(e,"href",l)},d(c){c&&u(e)}}}function Ve(s){let e,a,t,l,c;function o(r,d){var m;return(m=r[0])!=null&&m[r[5]]?Ae:r[1]?Se:De}let i=o(s),_=i(s);return{c(){e=b("h3"),_.c(),t=N(),l=b("span"),c=P(s[6]),this.h()},l(r){e=E(r,"H3",{class:!0});var d=I(e);_.l(d),d.forEach(u),t=T(r),l=E(r,"SPAN",{});var m=I(l);c=C(m,s[6]),m.forEach(u),this.h()},h(){$(e,"class",a=s[9])},m(r,d){V(r,e,d),_.m(e,null),V(r,t,d),V(r,l,d),h(l,c)},p(r,d){i===(i=o(r))&&_?_.p(r,d):(_.d(1),_=i(r),_&&(_.c(),_.m(e,null))),d&512&&a!==(a=r[9])&&$(e,"class",a)},d(r){r&&(u(e),u(t),u(l)),_.d()}}}function oe(s){let e,a,t,l,c,o,i,_;return o=new me({props:{cargando:s[1],$$slots:{default:[Ve,({class_name:r})=>({9:r}),({class_name:r})=>r?512:0]},$$scope:{ctx:s}}}),{c(){e=b("div"),a=b("div"),t=b("i"),l=N(),c=b("div"),Q(o.$$.fragment),i=N(),this.h()},l(r){e=E(r,"DIV",{class:!0});var d=I(e);a=E(d,"DIV",{class:!0});var m=I(a);t=E(m,"I",{class:!0}),I(t).forEach(u),l=T(m),c=E(m,"DIV",{});var w=I(c);U(o.$$.fragment,w),w.forEach(u),m.forEach(u),i=T(d),d.forEach(u),this.h()},h(){$(t,"class","fab fa-"+s[4]),$(a,"class","flex"),$(e,"class","box")},m(r,d){V(r,e,d),h(e,a),h(a,t),h(a,l),h(a,c),W(o,c,null),h(e,i),_=!0},p(r,d){const m={};d&2&&(m.cargando=r[1]),d&8707&&(m.$$scope={dirty:d,ctx:r}),o.$set(m)},i(r){_||(O(o.$$.fragment,r),_=!0)},o(r){M(o.$$.fragment,r),_=!1},d(r){r&&u(e),X(o)}}}function Pe(s){var J,L;let e,a,t,l,c,o=(((J=s[0])==null?void 0:J.nombre)??"")+"",i,_,r,d,m,w,D,G,j;document.title=e="Perfil "+(((L=s[0])==null?void 0:L.nombre)??""),m=new he({props:{perfil:s[0],cargando:s[1]}});let q=K([{icono:"bookmark",clave:"guardadas",descripción:"Promociones guardadas"},{icono:"heart",clave:"favoritos",descripción:"Anuncios favoritos"},{icono:"comment",clave:"comentarios",descripción:"Anuncios comentados"}]),g=[];for(let n=0;n<3;n+=1)g[n]=re(ae(s,q,n));const k=n=>M(g[n],1,1,()=>{g[n]=null});let A=K([{icon:"facebook",clave:"facebook",descripción:"Facebook"},{icon:"instagram",clave:"instagram",descripción:"Instagram"}]),p=[];for(let n=0;n<2;n+=1)p[n]=oe(te(s,A,n));const F=n=>M(p[n],1,1,()=>{p[n]=null});return{c(){a=N(),t=b("section"),l=b("h1"),c=P("Detalles Perfil "),i=P(o),_=N(),r=b("div"),d=b("div"),Q(m.$$.fragment),w=N(),D=b("div");for(let n=0;n<3;n+=1)g[n].c();G=N();for(let n=0;n<2;n+=1)p[n].c();this.h()},l(n){fe("svelte-yv0l1o",document.head).forEach(u),a=T(n),t=E(n,"SECTION",{class:!0});var S=I(t);l=E(S,"H1",{class:!0});var R=I(l);c=C(R,"Detalles Perfil "),i=C(R,o),R.forEach(u),_=T(S),r=E(S,"DIV",{class:!0});var z=I(r);d=E(z,"DIV",{class:!0});var f=I(d);U(m.$$.fragment,f),f.forEach(u),w=T(z),D=E(z,"DIV",{class:!0});var H=I(D);for(let B=0;B<3;B+=1)g[B].l(H);G=T(H);for(let B=0;B<2;B+=1)p[B].l(H);H.forEach(u),z.forEach(u),S.forEach(u),this.h()},h(){$(l,"class","heading"),$(d,"class","user"),$(D,"class","box-container"),$(r,"class","details"),$(t,"class","profile")},m(n,v){V(n,a,v),V(n,t,v),h(t,l),h(l,c),h(l,i),h(t,_),h(t,r),h(r,d),W(m,d,null),h(r,w),h(r,D);for(let S=0;S<3;S+=1)g[S]&&g[S].m(D,null);h(D,G);for(let S=0;S<2;S+=1)p[S]&&p[S].m(D,null);j=!0},p(n,[v]){var R,z;(!j||v&1)&&e!==(e="Perfil "+(((R=n[0])==null?void 0:R.nombre)??""))&&(document.title=e),(!j||v&1)&&o!==(o=(((z=n[0])==null?void 0:z.nombre)??"")+"")&&Y(i,o);const S={};if(v&1&&(S.perfil=n[0]),v&2&&(S.cargando=n[1]),m.$set(S),v&2){q=K([{icono:"bookmark",clave:"guardadas",descripción:"Promociones guardadas"},{icono:"heart",clave:"favoritos",descripción:"Anuncios favoritos"},{icono:"comment",clave:"comentarios",descripción:"Anuncios comentados"}]);let f;for(f=0;f<3;f+=1){const H=ae(n,q,f);g[f]?(g[f].p(H,v),O(g[f],1)):(g[f]=re(H),g[f].c(),O(g[f],1),g[f].m(D,G))}for(ee(),f=3;f<3;f+=1)k(f);x()}if(v&515){A=K([{icon:"facebook",clave:"facebook",descripción:"Facebook"},{icon:"instagram",clave:"instagram",descripción:"Instagram"}]);let f;for(f=0;f<2;f+=1){const H=te(n,A,f);p[f]?(p[f].p(H,v),O(p[f],1)):(p[f]=oe(H),p[f].c(),O(p[f],1),p[f].m(D,null))}for(ee(),f=2;f<2;f+=1)F(f);x()}},i(n){if(!j){O(m.$$.fragment,n);for(let v=0;v<3;v+=1)O(g[v]);for(let v=0;v<2;v+=1)O(p[v]);j=!0}},o(n){M(m.$$.fragment,n),g=g.filter(Boolean);for(let v=0;v<3;v+=1)M(g[v]);p=p.filter(Boolean);for(let v=0;v<2;v+=1)M(p[v]);j=!1},d(n){n&&(u(a),u(t)),X(m),y(g,n),y(p,n)}}}function Ce(s,e,a){let t,l,c;const o=_e.subscribe(i=>{a(1,l=i.perfil),!l&&(c=ce.subscribe(_=>{a(0,t=_),t?sessionStorage.setItem("user_id",t.id):ue("ingreso",{state:{desde:"perfil"}})}))});return de(()=>{c==null||c(),o()}),[t,l]}class Be extends le{constructor(e){super(),ne(this,e,Ce,Pe,se,{})}}export{Be as component,ze as universal};
