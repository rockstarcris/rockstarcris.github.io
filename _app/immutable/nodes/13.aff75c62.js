import{s as K,a as S,f as v,l as z,c as T,g as b,h as I,m as G,d as h,i as V,u as _,n as le,j as w,v as ie,y as C,e as H,w as ae,K as ue,A as fe,o as me}from"../chunks/scheduler.aba5b0ee.js";import{S as R,i as U,b as N,d as D,m as M,a as d,t as g,e as O,g as J,c as L}from"../chunks/index.62cbe4b4.js";import{q as Z,e as Q}from"../chunks/state.43a53f62.js";import"../chunks/index.esm.56b6a403.js";import{Q as se}from"../chunks/query-db.component.306eebe4.js";import{I as ce,h as x,u as _e}from"../chunks/img.component.b5edab59.js";import{T as he}from"../chunks/tutor-cargando.component.a1270e92.js";import{F as de}from"../chunks/fecha.component.57b5a18e.js";const $e=!0,He=Object.freeze(Object.defineProperty({__proto__:null,prerender:$e},Symbol.toStringTag,{value:"Module"}));function pe(a){let t,r,e,n,c=a[0].nombre+"",l,s,o,u,$;return t=new ce({props:{src:"perfil/"+a[0].imagen,class:"w-[70px] h-[70px] rounded-full"}}),u=new de({props:{timestamp:a[0].fecha}}),{c(){N(t.$$.fragment),r=S(),e=v("div"),n=v("h3"),l=z(c),s=S(),o=v("span"),N(u.$$.fragment)},l(i){D(t.$$.fragment,i),r=T(i),e=b(i,"DIV",{});var f=I(e);n=b(f,"H3",{});var q=I(n);l=G(q,c),q.forEach(h),s=T(f),o=b(f,"SPAN",{});var E=I(o);D(u.$$.fragment,E),E.forEach(h),f.forEach(h)},m(i,f){M(t,i,f),V(i,r,f),V(i,e,f),_(e,n),_(n,l),_(e,s),_(e,o),M(u,o,null),$=!0},p(i,[f]){const q={};f&1&&(q.src="perfil/"+i[0].imagen),t.$set(q),(!$||f&1)&&c!==(c=i[0].nombre+"")&&le(l,c);const E={};f&1&&(E.timestamp=i[0].fecha),u.$set(E)},i(i){$||(d(t.$$.fragment,i),d(u.$$.fragment,i),$=!0)},o(i){g(t.$$.fragment,i),g(u.$$.fragment,i),$=!1},d(i){i&&(h(r),h(e)),O(t,i),O(u)}}}function ge(a,t,r){let{tutor:e}=t;return a.$$set=n=>{"tutor"in n&&r(0,e=n.tutor)},[e]}class ve extends R{constructor(t){super(),U(this,t,ge,pe,K,{tutor:0})}}function ee(a,t,r){const e=a.slice();return e[3]=t[r],e}function be(a){return{c:C,l:C,m:C,p:C,i:C,o:C,d:C}}function ke(a){let t,r,e=Q(a[2]),n=[];for(let l=0;l<e.length;l+=1)n[l]=te(ee(a,e,l));const c=l=>g(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();t=H()},l(l){for(let s=0;s<n.length;s+=1)n[s].l(l);t=H()},m(l,s){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(l,s);V(l,t,s),r=!0},p(l,s){if(s&1){e=Q(l[2]);let o;for(o=0;o<e.length;o+=1){const u=ee(l,e,o);n[o]?(n[o].p(u,s),d(n[o],1)):(n[o]=te(u),n[o].c(),d(n[o],1),n[o].m(t.parentNode,t))}for(J(),o=e.length;o<n.length;o+=1)c(o);L()}},i(l){if(!r){for(let s=0;s<e.length;s+=1)d(n[s]);r=!0}},o(l){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)g(n[s]);r=!1},d(l){l&&h(t),ae(n,l)}}}function te(a){let t,r;return t=new ve({props:{tutor:a[3]}}),{c(){N(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){M(t,e,n),r=!0},p(e,n){const c={};n&1&&(c.tutor=e[3]),t.$set(c)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function we(a){let t,r;return t=new he({}),{c(){N(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){M(t,e,n),r=!0},p:C,i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function Ee(a){let t,r,e,n,c,l,s,o=a[0].título+"",u,$,i,f,q,E,y,j,A,B,W,p={ctx:a,current:null,token:null,hasCatch:!1,pending:we,then:ke,catch:be,value:2,blocks:[,,,]};return x(e=Z("usuarios","id",a[0].tutor_id),p),c=new ce({props:{src:"contenido/"+a[0].miniatura}}),{c(){t=v("div"),r=v("div"),p.block.c(),n=S(),N(c.$$.fragment),l=S(),s=v("h3"),u=z(o),$=S(),i=v("form"),f=v("a"),q=z("ver contenido"),y=S(),j=v("input"),this.h()},l(k){t=b(k,"DIV",{class:!0});var m=I(t);r=b(m,"DIV",{class:!0});var P=I(r);p.block.l(P),P.forEach(h),n=T(m),D(c.$$.fragment,m),l=T(m),s=b(m,"H3",{class:!0});var X=I(s);u=G(X,o),X.forEach(h),$=T(m),i=b(m,"FORM",{class:!0});var F=I(i);f=b(F,"A",{href:!0,class:!0});var Y=I(f);q=G(Y,"ver contenido"),Y.forEach(h),y=T(F),j=b(F,"INPUT",{class:!0}),F.forEach(h),m.forEach(h),this.h()},h(){w(r,"class","tutor"),w(s,"class","title"),w(f,"href",E="/ver-promocion/"+a[0].promoción+"/"+a[0].id),w(f,"class","inline-btn w-[170px] !px-0"),j.value="eliminar",w(j,"class","inline-delete-btn"),w(i,"class","flex-btn"),w(t,"class","box")},m(k,m){V(k,t,m),_(t,r),p.block.m(r,p.anchor=null),p.mount=()=>r,p.anchor=null,_(t,n),M(c,t,null),_(t,l),_(t,s),_(s,u),_(t,$),_(t,i),_(i,f),_(f,q),_(i,y),_(i,j),A=!0,B||(W=ie(j,"click",a[1]),B=!0)},p(k,[m]){a=k,p.ctx=a,m&1&&e!==(e=Z("usuarios","id",a[0].tutor_id))&&x(e,p)||_e(p,a,m);const P={};m&1&&(P.src="contenido/"+a[0].miniatura),c.$set(P),(!A||m&1)&&o!==(o=a[0].título+"")&&le(u,o),(!A||m&1&&E!==(E="/ver-promocion/"+a[0].promoción+"/"+a[0].id))&&w(f,"href",E)},i(k){A||(d(p.block),d(c.$$.fragment,k),A=!0)},o(k){for(let m=0;m<3;m+=1){const P=p.blocks[m];g(P)}g(c.$$.fragment,k),A=!1},d(k){k&&h(t),p.block.d(),p.token=null,p=null,O(c),B=!1,W()}}}function Ie(a,t,r){let{contenido:e}=t;const n=()=>{confirm("Quita como este anuncio?")};return a.$$set=c=>{"contenido"in c&&r(0,e=c.contenido)},[e,n]}class qe extends R{constructor(t){super(),U(this,t,Ie,Ee,K,{contenido:0})}}function ne(a,t,r){const e=a.slice();return e[2]=t[r],e}function oe(a){let t,r;return t=new se({props:{collection_id:"me_gustas",clave:"doc_id",valor:a[0],$$slots:{artículo:[Se,({artículo:e})=>({1:e}),({artículo:e})=>e?2:0]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){M(t,e,n),r=!0},p(e,n){const c={};n&1&&(c.valor=e[0]),n&34&&(c.$$scope={dirty:n,ctx:e}),t.$set(c)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function Ce(a){let t,r;return t=new qe({props:{slot:"artículo",contenido:a[1]}}),{c(){N(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){M(t,e,n),r=!0},p(e,n){const c={};n&2&&(c.contenido=e[1]),t.$set(c)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function re(a){let t,r;return t=new se({props:{collection_id:"contenido",clave:"id",valor:a[2],$$slots:{artículo:[Ce,({artículo:e})=>({1:e}),({artículo:e})=>e?2:0]},$$scope:{ctx:a}}}),{c(){N(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){M(t,e,n),r=!0},p(e,n){const c={};n&2&&(c.valor=e[2]),n&34&&(c.$$scope={dirty:n,ctx:e}),t.$set(c)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){O(t,e)}}}function Se(a){let t,r,e=Q(a[1].lista),n=[];for(let l=0;l<e.length;l+=1)n[l]=re(ne(a,e,l));const c=l=>g(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();t=H()},l(l){for(let s=0;s<n.length;s+=1)n[s].l(l);t=H()},m(l,s){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(l,s);V(l,t,s),r=!0},p(l,s){if(s&2){e=Q(l[1].lista);let o;for(o=0;o<e.length;o+=1){const u=ne(l,e,o);n[o]?(n[o].p(u,s),d(n[o],1)):(n[o]=re(u),n[o].c(),d(n[o],1),n[o].m(t.parentNode,t))}for(J(),o=e.length;o<n.length;o+=1)c(o);L()}},i(l){if(!r){for(let s=0;s<e.length;s+=1)d(n[s]);r=!0}},o(l){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)g(n[s]);r=!1},d(l){l&&h(t),ae(n,l)}}}function Te(a){let t,r,e,n="contenido que me gustan",c,l,s,o=a[0]&&oe(a);return{c(){t=S(),r=v("section"),e=v("h1"),e.textContent=n,c=S(),l=v("div"),o&&o.c(),this.h()},l(u){ue("svelte-pl1fgv",document.head).forEach(h),t=T(u),r=b(u,"SECTION",{class:!0});var i=I(r);e=b(i,"H1",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-f4vfi7"&&(e.textContent=n),c=T(i),l=b(i,"DIV",{class:!0});var f=I(l);o&&o.l(f),f.forEach(h),i.forEach(h),this.h()},h(){document.title="Me Gustas",w(e,"class","heading"),w(l,"class","box-container"),w(r,"class","liked-videos")},m(u,$){V(u,t,$),V(u,r,$),_(r,e),_(r,c),_(r,l),o&&o.m(l,null),s=!0},p(u,[$]){u[0]?o?(o.p(u,$),$&1&&d(o,1)):(o=oe(u),o.c(),d(o,1),o.m(l,null)):o&&(J(),g(o,1,1,()=>{o=null}),L())},i(u){s||(d(o),s=!0)},o(u){g(o),s=!1},d(u){u&&(h(t),h(r)),o&&o.d()}}}function Ne(a,t,r){let e;return me(()=>{r(0,e=sessionStorage.getItem("user_id"))}),[e]}class Qe extends R{constructor(t){super(),U(this,t,Ne,Te,K,{})}}export{Qe as component,He as universal};