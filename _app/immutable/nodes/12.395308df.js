import{s as Q,a as N,f as k,l as R,c as P,g as w,h as C,m as z,d as _,i as D,u as h,n as oe,A as le,j as E,v as X,O as ie,y as A,e as B,w as ae,J as ue,o as fe}from"../chunks/scheduler.a665a98d.js";import{S as G,i as J,b as I,d as S,m as T,a as $,t as g,e as O,g as U,c as K}from"../chunks/index.d0ee8e99.js";import{e as F}from"../chunks/state.1193ba7e.js";import"../chunks/singletons.56bd98f6.js";import{q as Y,e as me,b as _e}from"../chunks/index.esm.43a66c50.js";import{Q as se}from"../chunks/query-db.component.3d549771.js";import{I as ce,h as Z,u as $e}from"../chunks/img.component.3d7c4993.js";import{P as de}from"../chunks/perfil.component.0705e992.js";import{u as he}from"../chunks/update-db.function.347c1ec4.js";import{T as pe}from"../chunks/tutor-cargando.component.67301efc.js";import{F as ge}from"../chunks/fecha.component.884c2262.js";const ve=!0,Je=Object.freeze(Object.defineProperty({__proto__:null,prerender:ve},Symbol.toStringTag,{value:"Module"}));function be(s){let t,o,e,n,c=s[0].nombre+"",l,a,r,u,p;return t=new ce({props:{src:"perfil/"+s[0].imagen,class:"w-[70px] h-[70px] rounded-full"}}),u=new ge({props:{timestamp:s[0].fecha}}),{c(){I(t.$$.fragment),o=N(),e=k("div"),n=k("h3"),l=R(c),a=N(),r=k("span"),I(u.$$.fragment)},l(i){S(t.$$.fragment,i),o=P(i),e=w(i,"DIV",{});var f=C(e);n=w(f,"H3",{});var q=C(n);l=z(q,c),q.forEach(_),a=P(f),r=w(f,"SPAN",{});var b=C(r);S(u.$$.fragment,b),b.forEach(_),f.forEach(_)},m(i,f){T(t,i,f),D(i,o,f),D(i,e,f),h(e,n),h(n,l),h(e,a),h(e,r),T(u,r,null),p=!0},p(i,[f]){const q={};f&1&&(q.src="perfil/"+i[0].imagen),t.$set(q),(!p||f&1)&&c!==(c=i[0].nombre+"")&&oe(l,c);const b={};f&1&&(b.timestamp=i[0].fecha),u.$set(b)},i(i){p||($(t.$$.fragment,i),$(u.$$.fragment,i),p=!0)},o(i){g(t.$$.fragment,i),g(u.$$.fragment,i),p=!1},d(i){i&&(_(o),_(e)),O(t,i),O(u)}}}function ke(s,t,o){let{tutor:e}=t;return s.$$set=n=>{"tutor"in n&&o(0,e=n.tutor)},[e]}class we extends G{constructor(t){super(),J(this,t,ke,be,Q,{tutor:0})}}function x(s,t,o){const e=s.slice();return e[6]=t[o],e}function Ee(s){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function Ce(s){let t,o,e=F(s[5]),n=[];for(let l=0;l<e.length;l+=1)n[l]=ee(x(s,e,l));const c=l=>g(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();t=B()},l(l){for(let a=0;a<n.length;a+=1)n[a].l(l);t=B()},m(l,a){for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(l,a);D(l,t,a),o=!0},p(l,a){if(a&1){e=F(l[5]);let r;for(r=0;r<e.length;r+=1){const u=x(l,e,r);n[r]?(n[r].p(u,a),$(n[r],1)):(n[r]=ee(u),n[r].c(),$(n[r],1),n[r].m(t.parentNode,t))}for(U(),r=e.length;r<n.length;r+=1)c(r);K()}},i(l){if(!o){for(let a=0;a<e.length;a+=1)$(n[a]);o=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)g(n[a]);o=!1},d(l){l&&_(t),ae(n,l)}}}function ee(s){let t,o;return t=new we({props:{tutor:s[6]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){T(t,e,n),o=!0},p(e,n){const c={};n&1&&(c.tutor=e[6]),t.$set(c)},i(e){o||($(t.$$.fragment,e),o=!0)},o(e){g(t.$$.fragment,e),o=!1},d(e){O(t,e)}}}function qe(s){let t,o;return t=new pe({}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){T(t,e,n),o=!0},p:A,i(e){o||($(t.$$.fragment,e),o=!0)},o(e){g(t.$$.fragment,e),o=!1},d(e){O(t,e)}}}function Ie(s){let t,o,e;return{c(){t=k("a"),o=R("ver contenido"),this.h()},l(n){t=w(n,"A",{href:!0,class:!0});var c=C(t);o=z(c,"ver contenido"),c.forEach(_),this.h()},h(){E(t,"href",e="/ver"+(s[4].membresia==="Anunciante"?"-tu":"")+"-anuncio/"+s[0].promoción+"/"+s[0].id),E(t,"class","inline-btn w-[170px] !px-0")},m(n,c){D(n,t,c),h(t,o)},p(n,c){c&17&&e!==(e="/ver"+(n[4].membresia==="Anunciante"?"-tu":"")+"-anuncio/"+n[0].promoción+"/"+n[0].id)&&E(t,"href",e)},d(n){n&&_(t)}}}function Se(s){let t,o,e,n,c,l,a,r=s[0].título+"",u,p,i,f,q,b,L="eliminar",V,H,W,v={ctx:s,current:null,token:null,hasCatch:!1,pending:qe,then:Ce,catch:Ee,value:5,blocks:[,,,]};return Z(e=Y("usuarios","id",s[0].tutor_id),v),c=new ce({props:{src:"contenido/"+s[0].miniatura}}),f=new de({props:{$$slots:{default:[Ie,({perfil:d})=>({4:d}),({perfil:d})=>d?16:0]},$$scope:{ctx:s}}}),{c(){t=k("div"),o=k("div"),v.block.c(),n=N(),I(c.$$.fragment),l=N(),a=k("h3"),u=R(r),p=N(),i=k("form"),I(f.$$.fragment),q=N(),b=k("button"),b.textContent=L,this.h()},l(d){t=w(d,"DIV",{class:!0});var m=C(t);o=w(m,"DIV",{class:!0});var M=C(o);v.block.l(M),M.forEach(_),n=P(m),S(c.$$.fragment,m),l=P(m),a=w(m,"H3",{class:!0});var j=C(a);u=z(j,r),j.forEach(_),p=P(m),i=w(m,"FORM",{class:!0});var y=C(i);S(f.$$.fragment,y),q=P(y),b=w(y,"BUTTON",{class:!0,"data-svelte-h":!0}),le(b)!=="svelte-ncxcgs"&&(b.textContent=L),y.forEach(_),m.forEach(_),this.h()},h(){E(o,"class","tutor cursor-pointer"),E(a,"class","title"),E(b,"class","inline-delete-btn"),E(i,"class","flex-btn"),E(t,"class","box")},m(d,m){D(d,t,m),h(t,o),v.block.m(o,v.anchor=null),v.mount=()=>o,v.anchor=null,h(t,n),T(c,t,null),h(t,l),h(t,a),h(a,u),h(t,p),h(t,i),T(f,i,null),h(i,q),h(i,b),V=!0,H||(W=[X(o,"click",s[2]),X(b,"click",s[3])],H=!0)},p(d,[m]){s=d,v.ctx=s,m&1&&e!==(e=Y("usuarios","id",s[0].tutor_id))&&Z(e,v)||$e(v,s,m);const M={};m&1&&(M.src="contenido/"+s[0].miniatura),c.$set(M),(!V||m&1)&&r!==(r=s[0].título+"")&&oe(u,r);const j={};m&529&&(j.$$scope={dirty:m,ctx:s}),f.$set(j)},i(d){V||($(v.block),$(c.$$.fragment,d),$(f.$$.fragment,d),V=!0)},o(d){for(let m=0;m<3;m+=1){const M=v.blocks[m];g(M)}g(c.$$.fragment,d),g(f.$$.fragment,d),V=!1},d(d){d&&_(t),v.block.d(),v.token=null,v=null,O(c),O(f),H=!1,ie(W)}}}function Te(s,t,o){let{contenido:e}=t;const n=async()=>{const a=sessionStorage.getItem("user_id");a&&await he("me_gustas",a,{lista:me(e.id)})},c=()=>{_e(`/perfil/${e.tutor_id}`)},l=()=>{confirm("Quitar me gustan de este anuncio?"),n()};return s.$$set=a=>{"contenido"in a&&o(0,e=a.contenido)},[e,n,c,l]}class Oe extends G{constructor(t){super(),J(this,t,Te,Se,Q,{contenido:0})}}function te(s,t,o){const e=s.slice();return e[2]=t[o],e}function ne(s){let t,o;return t=new se({props:{collection_id:"me_gustas",clave:"doc_id",valor:s[0],$$slots:{artículo:[Ne,({artículo:e})=>({1:e}),({artículo:e})=>e?2:0]},$$scope:{ctx:s}}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){T(t,e,n),o=!0},p(e,n){const c={};n&1&&(c.valor=e[0]),n&34&&(c.$$scope={dirty:n,ctx:e}),t.$set(c)},i(e){o||($(t.$$.fragment,e),o=!0)},o(e){g(t.$$.fragment,e),o=!1},d(e){O(t,e)}}}function Ae(s){let t,o;return t=new Oe({props:{slot:"artículo",contenido:s[1]}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){T(t,e,n),o=!0},p(e,n){const c={};n&2&&(c.contenido=e[1]),t.$set(c)},i(e){o||($(t.$$.fragment,e),o=!0)},o(e){g(t.$$.fragment,e),o=!1},d(e){O(t,e)}}}function re(s){let t,o;return t=new se({props:{collection_id:"contenido",clave:"id",valor:s[2],$$slots:{artículo:[Ae,({artículo:e})=>({1:e}),({artículo:e})=>e?2:0]},$$scope:{ctx:s}}}),{c(){I(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,n){T(t,e,n),o=!0},p(e,n){const c={};n&2&&(c.valor=e[2]),n&34&&(c.$$scope={dirty:n,ctx:e}),t.$set(c)},i(e){o||($(t.$$.fragment,e),o=!0)},o(e){g(t.$$.fragment,e),o=!1},d(e){O(t,e)}}}function Ne(s){let t,o,e=F(s[1].lista),n=[];for(let l=0;l<e.length;l+=1)n[l]=re(te(s,e,l));const c=l=>g(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();t=B()},l(l){for(let a=0;a<n.length;a+=1)n[a].l(l);t=B()},m(l,a){for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(l,a);D(l,t,a),o=!0},p(l,a){if(a&2){e=F(l[1].lista);let r;for(r=0;r<e.length;r+=1){const u=te(l,e,r);n[r]?(n[r].p(u,a),$(n[r],1)):(n[r]=re(u),n[r].c(),$(n[r],1),n[r].m(t.parentNode,t))}for(U(),r=e.length;r<n.length;r+=1)c(r);K()}},i(l){if(!o){for(let a=0;a<e.length;a+=1)$(n[a]);o=!0}},o(l){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)g(n[a]);o=!1},d(l){l&&_(t),ae(n,l)}}}function Pe(s){let t,o,e,n="contenido que me gustan",c,l,a,r=s[0]&&ne(s);return{c(){t=N(),o=k("section"),e=k("h1"),e.textContent=n,c=N(),l=k("div"),r&&r.c(),this.h()},l(u){ue("svelte-n1ffaa",document.head).forEach(_),t=P(u),o=w(u,"SECTION",{class:!0});var i=C(o);e=w(i,"H1",{class:!0,"data-svelte-h":!0}),le(e)!=="svelte-f4vfi7"&&(e.textContent=n),c=P(i),l=w(i,"DIV",{class:!0});var f=C(l);r&&r.l(f),f.forEach(_),i.forEach(_),this.h()},h(){document.title="Me Gustan",E(e,"class","heading"),E(l,"class","box-container"),E(o,"class","liked-videos")},m(u,p){D(u,t,p),D(u,o,p),h(o,e),h(o,c),h(o,l),r&&r.m(l,null),a=!0},p(u,[p]){u[0]?r?(r.p(u,p),p&1&&$(r,1)):(r=ne(u),r.c(),$(r,1),r.m(l,null)):r&&(U(),g(r,1,1,()=>{r=null}),K())},i(u){a||($(r),a=!0)},o(u){g(r),a=!1},d(u){u&&(_(t),_(o)),r&&r.d()}}}function De(s,t,o){let e;return fe(()=>{o(0,e=sessionStorage.getItem("user_id"))}),[e]}class Ue extends G{constructor(t){super(),J(this,t,De,Pe,Q,{})}}export{Ue as component,Je as universal};
