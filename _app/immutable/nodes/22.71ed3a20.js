import{s as B,f as d,a as S,l as U,g as h,h as E,d as f,c as R,m as Y,j as v,i as $,u,n as J,A as ae,L as _t,y as O,o as ft,e as j,w as ye,V as We,r as Oe,v as mt,p as dt,C as ht,J as pt}from"../chunks/scheduler.0517bdfa.js";import{S as H,i as F,b as I,d as L,m as V,a as g,t as C,e as N,g as ce,c as fe,f as gt}from"../chunks/index.ab3b9798.js";import{a as $t,b as Et}from"../chunks/index.esm.1ca8c23c.js";import{Q as _e}from"../chunks/query-db.component.d9b5c7c7.js";import{e as ue}from"../chunks/state.509bd9e9.js";import{I as Xe,E as vt,h as Je,u as bt}from"../chunks/img.component.f05e2069.js";import{F as je}from"../chunks/fecha.component.72fe72ee.js";import{a as ut}from"../chunks/mantener-con-vida.function.a2867607.js";import{q as Ge}from"../chunks/query-db.function.4d72cd5a.js";import{p as Tt}from"../chunks/prueba.function.32537536.js";import{c as wt}from"../chunks/create-form.afbd6fc6.js";import{v as Ct}from"../chunks/icon.component.33475b58.js";import{u as kt}from"../chunks/update-db.function.bd84b6a6.js";const W={YOUTUBE_TEST:/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/|youtu\.be\/)/,YOUTUBE_REPLACE:/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:live\/)?)?(?:youtu\.be\/)?(.+)$/,YOUTUBE_REPLACE_TO:"https://www.youtube.com/embed/$1",VIMEO_TEST:/^(?:https?:\/\/)?(?:www\.)?(?:player\.)?vimeo\.com\//,VIMEO_REPLACE:/^(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(\d+)$/,VIMEO_REPLACE_TO:"https://player.vimeo.com/video/$1",ODYSEE_TEST:/^https:\/\/(odysee\.com|odysee\.com\/\$\/embed)\/(@[^:]+:[^\/]+\/[^?]+)(\?r=[^&]+)?$/,ODYSEE_REPLACE:/https:\/\/odysee\.com\/(.+)/g,ODYSEE_REPLACE_TO:"https://odysee.com/$/embed/$1"},Ke=[{TITLE:"YouTube",ALLOW:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",TEST_REGEX:W.YOUTUBE_TEST,REPLACE_REGEX:W.YOUTUBE_REPLACE,REPLACE_TO:W.YOUTUBE_REPLACE_TO},{TITLE:"Vimeo",TEST_REGEX:W.VIMEO_TEST,REPLACE_REGEX:W.VIMEO_REPLACE,REPLACE_TO:W.VIMEO_REPLACE_TO},{TITLE:"Odysee",TEST_REGEX:W.ODYSEE_TEST,REPLACE_REGEX:W.ODYSEE_REPLACE,REPLACE_TO:W.ODYSEE_REPLACE_TO}],At="auto";function Pt({params:r}){return{promoción_id:r.promocion_id,contenido_id:r.contenido_id}}const Rn=Object.freeze(Object.defineProperty({__proto__:null,load:Pt,prerender:At},Symbol.toStringTag,{value:"Module"}));function Ot(r){let e,o;return e=new Xe({props:{slot:"artículo",src:"/perfil/"+r[2].imagen}}),{c(){I(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){V(e,t,n),o=!0},p(t,n){const i={};n&4&&(i.src="/perfil/"+t[2].imagen),e.$set(i)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){C(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function St(r){let e,o,t,n,i=r[1].nombre+"",l,s,a,c,b;return e=new _e({props:{collection_id:"usuarios",clave:"id",valor:r[0].user_id,$$slots:{artículo:[Ot,({artículo:m})=>({2:m}),({artículo:m})=>m?4:0]},$$scope:{ctx:r}}}),c=new je({props:{timestamp:r[0].fecha}}),{c(){I(e.$$.fragment),o=S(),t=d("div"),n=d("h3"),l=U(i),s=S(),a=d("span"),I(c.$$.fragment)},l(m){L(e.$$.fragment,m),o=R(m),t=h(m,"DIV",{});var A=E(t);n=h(A,"H3",{});var _=E(n);l=Y(_,i),_.forEach(f),s=R(A),a=h(A,"SPAN",{});var k=E(a);L(c.$$.fragment,k),k.forEach(f),A.forEach(f)},m(m,A){V(e,m,A),$(m,o,A),$(m,t,A),u(t,n),u(n,l),u(t,s),u(t,a),V(c,a,null),b=!0},p(m,A){const _={};A&1&&(_.valor=m[0].user_id),A&12&&(_.$$scope={dirty:A,ctx:m}),e.$set(_),(!b||A&2)&&i!==(i=m[1].nombre+"")&&J(l,i);const k={};A&1&&(k.timestamp=m[0].fecha),c.$set(k)},i(m){b||(g(e.$$.fragment,m),g(c.$$.fragment,m),b=!0)},o(m){C(e.$$.fragment,m),C(c.$$.fragment,m),b=!1},d(m){m&&(f(o),f(t)),N(e,m),N(c)}}}function Rt(r){let e,o,t,n,i=r[0].comentario+"",l,s;return o=new _e({props:{collection_id:"usuarios",clave:"id",valor:r[0].user_id,$$slots:{artículo:[St,({artículo:a})=>({1:a}),({artículo:a})=>a?2:0]},$$scope:{ctx:r}}}),{c(){e=d("div"),I(o.$$.fragment),t=S(),n=d("p"),l=U(i),this.h()},l(a){e=h(a,"DIV",{class:!0});var c=E(e);L(o.$$.fragment,c),c.forEach(f),t=R(a),n=h(a,"P",{class:!0});var b=E(n);l=Y(b,i),b.forEach(f),this.h()},h(){v(e,"class","user"),v(n,"class","text")},m(a,c){$(a,e,c),V(o,e,null),$(a,t,c),$(a,n,c),u(n,l),s=!0},p(a,[c]){const b={};c&1&&(b.valor=a[0].user_id),c&11&&(b.$$scope={dirty:c,ctx:a}),o.$set(b),(!s||c&1)&&i!==(i=a[0].comentario+"")&&J(l,i)},i(a){s||(g(o.$$.fragment,a),s=!0)},o(a){C(o.$$.fragment,a),s=!1},d(a){a&&(f(e),f(t),f(n)),N(o)}}}function It(r,e,o){let{comentario:t}=e;return r.$$set=n=>{"comentario"in n&&o(0,t=n.comentario)},[t]}class Lt extends H{constructor(e){super(),F(this,e,It,Rt,B,{comentario:0})}}function Vt(r){let e,o='<textarea name="comentario" required="" placeholder="Escribe tu comentario..." maxlength="1000" cols="30" rows="10"></textarea> <input type="submit" value="Comentar" class="inline-btn"/>',t,n;return{c(){e=d("form"),e.innerHTML=o,this.h()},l(i){e=h(i,"FORM",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-19ro58i"&&(e.innerHTML=o),this.h()},h(){v(e,"class","add-comment")},m(i,l){$(i,e,l),t||(n=_t(r[0].call(null,e)),t=!0)},p:O,i:O,o:O,d(i){i&&f(e),t=!1,n()}}}function Nt(r,e,o){let{contenido_id:t,promoción_id:n}=e,i;ft(async()=>{i=(await Ge("contenido","id",t))[0]});const{form:l}=wt({onSubmit:async s=>{const a=Ct();await Tt(async()=>{ut("comentarios",a,{...s,id:a,tutor_id:i.tutor_id,fecha:new Date().getTime(),user_id:sessionStorage.getItem("user_id"),contenido_id:t,promocion_id:n})})}});return r.$$set=s=>{"contenido_id"in s&&o(1,t=s.contenido_id),"promoción_id"in s&&o(2,n=s.promoción_id)},[l,t,n]}class Dt extends H{constructor(e){super(),F(this,e,Nt,Vt,B,{contenido_id:1,promoción_id:2})}}function qt(r){let e,o,t;return o=new Lt({props:{comentario:r[2],promoción_id:r[1]}}),{c(){e=d("div"),I(o.$$.fragment),this.h()},l(n){e=h(n,"DIV",{class:!0,slot:!0});var i=E(e);L(o.$$.fragment,i),i.forEach(f),this.h()},h(){v(e,"class","box"),v(e,"slot","artículo")},m(n,i){$(n,e,i),V(o,e,null),t=!0},p(n,i){const l={};i&4&&(l.comentario=n[2]),i&2&&(l.promoción_id=n[1]),o.$set(l)},i(n){t||(g(o.$$.fragment,n),t=!0)},o(n){C(o.$$.fragment,n),t=!1},d(n){n&&f(e),N(o)}}}function Mt(r){let e,o="Se el primero en comentar!";return{c(){e=d("p"),e.textContent=o,this.h()},l(t){e=h(t,"P",{class:!0,slot:!0,"data-svelte-h":!0}),ae(e)!=="svelte-scewzj"&&(e.textContent=o),this.h()},h(){v(e,"class","empty"),v(e,"slot","vacío")},m(t,n){$(t,e,n)},p:O,d(t){t&&f(e)}}}function Ut(r){let e,o,t="Agrega un comentario",n,i,l,s,a="Comentarios Rock",c,b,m,A;return i=new Dt({props:{contenido_id:r[0],promoción_id:r[1]}}),m=new _e({props:{collection_id:"comentarios",clave:"contenido_id",valor:r[0],$$slots:{vacío:[Mt],artículo:[qt,({artículo:_})=>({2:_}),({artículo:_})=>_?4:0]},$$scope:{ctx:r}}}),{c(){e=d("section"),o=d("h1"),o.textContent=t,n=S(),I(i.$$.fragment),l=S(),s=d("h1"),s.textContent=a,c=S(),b=d("div"),I(m.$$.fragment),this.h()},l(_){e=h(_,"SECTION",{class:!0});var k=E(e);o=h(k,"H1",{class:!0,"data-svelte-h":!0}),ae(o)!=="svelte-1n1u2ho"&&(o.textContent=t),n=R(k),L(i.$$.fragment,k),l=R(k),s=h(k,"H1",{class:!0,"data-svelte-h":!0}),ae(s)!=="svelte-1lb57hy"&&(s.textContent=a),c=R(k),b=h(k,"DIV",{class:!0});var w=E(b);L(m.$$.fragment,w),w.forEach(f),k.forEach(f),this.h()},h(){v(o,"class","heading"),v(s,"class","heading"),v(b,"class","show-comments"),v(e,"class","comments")},m(_,k){$(_,e,k),u(e,o),u(e,n),V(i,e,null),u(e,l),u(e,s),u(e,c),u(e,b),V(m,b,null),A=!0},p(_,[k]){const w={};k&1&&(w.contenido_id=_[0]),k&2&&(w.promoción_id=_[1]),i.$set(w);const P={};k&1&&(P.valor=_[0]),k&14&&(P.$$scope={dirty:k,ctx:_}),m.$set(P)},i(_){A||(g(i.$$.fragment,_),g(m.$$.fragment,_),A=!0)},o(_){C(i.$$.fragment,_),C(m.$$.fragment,_),A=!1},d(_){_&&f(e),N(i),N(m)}}}function Yt(r,e,o){let{contenido_id:t}=e,{promoción_id:n}=e;return r.$$set=i=>{"contenido_id"in i&&o(0,t=i.contenido_id),"promoción_id"in i&&o(1,n=i.promoción_id)},[t,n]}class Gt extends H{constructor(e){super(),F(this,e,Yt,Ut,B,{contenido_id:0,promoción_id:1})}}function Ze(r,e,o){const t=r.slice();return t[1]=e[o],t}function xe(r){let e,o;return{c(){e=d("iframe"),this.h()},l(t){e=h(t,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),E(e).forEach(f),this.h()},h(){v(e,"class","aspect-video w-full"),We(e.src,o=r[0].replace(r[1].REPLACE_REGEX,r[1].REPLACE_TO))||v(e,"src",o),v(e,"title","YouTube video player"),v(e,"frameborder","0"),v(e,"allow",r[1].ALLOW),e.allowFullscreen=!0},m(t,n){$(t,e,n)},p(t,n){n&1&&!We(e.src,o=t[0].replace(t[1].REPLACE_REGEX,t[1].REPLACE_TO))&&v(e,"src",o)},d(t){t&&f(e)}}}function et(r){let e=r[0].match(r[1].TEST_REGEX),o,t=e&&xe(r);return{c(){t&&t.c(),o=j()},l(n){t&&t.l(n),o=j()},m(n,i){t&&t.m(n,i),$(n,o,i)},p(n,i){i&1&&(e=n[0].match(n[1].TEST_REGEX)),e?t?t.p(n,i):(t=xe(n),t.c(),t.m(o.parentNode,o)):t&&(t.d(1),t=null)},d(n){n&&f(o),t&&t.d(n)}}}function yt(r){let e,o=ue(Ke),t=[];for(let n=0;n<o.length;n+=1)t[n]=et(Ze(r,o,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=j()},l(n){for(let i=0;i<t.length;i+=1)t[i].l(n);e=j()},m(n,i){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(n,i);$(n,e,i)},p(n,[i]){if(i&1){o=ue(Ke);let l;for(l=0;l<o.length;l+=1){const s=Ze(n,o,l);t[l]?t[l].p(s,i):(t[l]=et(s),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},i:O,o:O,d(n){n&&f(e),ye(t,n)}}}function Xt(r,e,o){let{url:t}=e;return r.$$set=n=>{"url"in n&&o(0,t=n.url)},[t]}class jt extends H{constructor(e){super(),F(this,e,Xt,yt,B,{url:0})}}function Bt(r){let e,o,t,n,i=r[0].nombre+"",l,s,a,c=r[0].profesión+"",b,m,A,_,k;return e=new Xe({props:{src:"perfil/"+r[0].imagen}}),_=new je({props:{timestamp:r[0].fecha}}),{c(){I(e.$$.fragment),o=S(),t=d("div"),n=d("h3"),l=U(i),s=S(),a=d("span"),b=U(c),m=S(),A=d("span"),I(_.$$.fragment)},l(w){L(e.$$.fragment,w),o=R(w),t=h(w,"DIV",{});var P=E(t);n=h(P,"H3",{});var G=E(n);l=Y(G,i),G.forEach(f),s=R(P),a=h(P,"SPAN",{});var X=E(a);b=Y(X,c),X.forEach(f),m=R(P),A=h(P,"SPAN",{});var oe=E(A);L(_.$$.fragment,oe),oe.forEach(f),P.forEach(f)},m(w,P){V(e,w,P),$(w,o,P),$(w,t,P),u(t,n),u(n,l),u(t,s),u(t,a),u(a,b),u(t,m),u(t,A),V(_,A,null),k=!0},p(w,[P]){const G={};P&1&&(G.src="perfil/"+w[0].imagen),e.$set(G),(!k||P&1)&&i!==(i=w[0].nombre+"")&&J(l,i),(!k||P&1)&&c!==(c=w[0].profesión+"")&&J(b,c);const X={};P&1&&(X.timestamp=w[0].fecha),_.$set(X)},i(w){k||(g(e.$$.fragment,w),g(_.$$.fragment,w),k=!0)},o(w){C(e.$$.fragment,w),C(_.$$.fragment,w),k=!1},d(w){w&&(f(o),f(t)),N(e,w),N(_)}}}function Ht(r,e,o){let{tutor:t}=e;return r.$$set=n=>{"tutor"in n&&o(0,t=n.tutor)},[t]}class Ft extends H{constructor(e){super(),F(this,e,Ht,Bt,B,{tutor:0})}}function zt(r){let e;return{c(){e=U("me gusta")},l(o){e=Y(o,"me gusta")},m(o,t){$(o,e,t)},d(o){o&&f(e)}}}function Qt(r){let e;return{c(){e=U("me guste")},l(o){e=Y(o,"me guste")},m(o,t){$(o,e,t)},d(o){o&&f(e)}}}function Wt(r){let e;function o(i,l){return i[0]?Qt:zt}let t=o(r),n=t(r);return{c(){n.c(),e=j()},l(i){n.l(i),e=j()},m(i,l){n.m(i,l),$(i,e,l)},p(i,[l]){t!==(t=o(i))&&(n.d(1),n=t(i),n&&(n.c(),n.m(e.parentNode,e)))},i:O,o:O,d(i){i&&f(e),n.d(i)}}}function Jt(r,e,o){let{me_gustas:t}=e,{me_guste:n}=e,{contenido_id:i}=e;return r.$$set=l=>{"me_gustas"in l&&o(1,t=l.me_gustas),"me_guste"in l&&o(0,n=l.me_guste),"contenido_id"in l&&o(2,i=l.contenido_id)},r.$$.update=()=>{r.$$.dirty&6&&o(0,n=t==null?void 0:t.includes(i))},[n,t,i]}class Kt extends H{constructor(e){super(),F(this,e,Jt,Wt,B,{me_gustas:1,me_guste:0,contenido_id:2})}}function tt(r){let e,o;return e=new _e({props:{collection_id:"me_gustas",clave:"doc_id",valor:r[0],$$slots:{cargando:[xt],artículo:[Zt,({artículo:t})=>({6:t}),({artículo:t})=>t?64:0]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){V(e,t,n),o=!0},p(t,n){const i={};n&1&&(i.valor=t[0]),n&206&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){C(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function Zt(r){let e,o,t,n;function i(s){r[5](s)}let l={me_gustas:r[6].lista,contenido_id:r[1]};return r[2]!==void 0&&(l.me_guste=r[2]),o=new Kt({props:l}),dt.push(()=>gt(o,"me_guste",i)),{c(){e=d("span"),I(o.$$.fragment),this.h()},l(s){e=h(s,"SPAN",{class:!0,slot:!0});var a=E(e);L(o.$$.fragment,a),a.forEach(f),this.h()},h(){v(e,"class","capitalize"),v(e,"slot","artículo"),Oe(e,"animate-pulse",r[3])},m(s,a){$(s,e,a),V(o,e,null),n=!0},p(s,a){const c={};a&64&&(c.me_gustas=s[6].lista),a&2&&(c.contenido_id=s[1]),!t&&a&4&&(t=!0,c.me_guste=s[2],ht(()=>t=!1)),o.$set(c),(!n||a&8)&&Oe(e,"animate-pulse",s[3])},i(s){n||(g(o.$$.fragment,s),n=!0)},o(s){C(o.$$.fragment,s),n=!1},d(s){s&&f(e),N(o)}}}function xt(r){let e,o=" ";return{c(){e=d("span"),e.textContent=o,this.h()},l(t){e=h(t,"SPAN",{class:!0,slot:!0,"data-svelte-h":!0}),ae(e)!=="svelte-olhqzg"&&(e.textContent=o),this.h()},h(){v(e,"class","capitalize "+vt.CARGANDO_SPAN),v(e,"slot","cargando")},m(t,n){$(t,e,n)},p:O,d(t){t&&f(e)}}}function en(r){let e,o,t,n,i,l,s=r[0]&&tt(r);return{c(){e=d("button"),o=d("i"),t=S(),s&&s.c(),this.h()},l(a){e=h(a,"BUTTON",{});var c=E(e);o=h(c,"I",{class:!0}),E(o).forEach(f),t=R(c),s&&s.l(c),c.forEach(f),this.h()},h(){v(o,"class","far fa-heart"),Oe(o,"fas",r[2])},m(a,c){$(a,e,c),u(e,o),u(e,t),s&&s.m(e,null),n=!0,i||(l=mt(e,"click",r[4]),i=!0)},p(a,[c]){(!n||c&4)&&Oe(o,"fas",a[2]),a[0]?s?(s.p(a,c),c&1&&g(s,1)):(s=tt(a),s.c(),g(s,1),s.m(e,null)):s&&(ce(),C(s,1,1,()=>{s=null}),fe())},i(a){n||(g(s),n=!0)},o(a){C(s),n=!1},d(a){a&&f(e),s&&s.d(),i=!1,l()}}}function tn(r,e,o){let{user_id:t}=e,{contenido_id:n}=e,i,l;const s=async()=>{const c=async()=>{await kt("me_gustas",t,{lista:(i?$t:Et)(n)})};o(3,l=!0);try{await c()}catch(b){b.message.includes("No document to update")&&(await ut("me_gustas",t,{lista:[n]}),await c())}o(3,l=!1)};function a(c){i=c,o(2,i)}return r.$$set=c=>{"user_id"in c&&o(0,t=c.user_id),"contenido_id"in c&&o(1,n=c.contenido_id)},[t,n,i,l,s,a]}class nn extends H{constructor(e){super(),F(this,e,tn,en,B,{user_id:0,contenido_id:1})}}function nt(r,e,o){const t=r.slice();return t[5]=e[o],t}function ot(r,e,o){const t=r.slice();return t[9]=e[o],t}function rt(r){let e,o,t=ue(r[2].videos),n=[];for(let s=0;s<t.length;s+=1)n[s]=lt(ot(r,t,s));const i=s=>C(n[s],1,1,()=>{n[s]=null});let l=null;return t.length||(l=it()),{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=j(),l&&l.c()},l(s){for(let a=0;a<n.length;a+=1)n[a].l(s);e=j(),l&&l.l(s)},m(s,a){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(s,a);$(s,e,a),l&&l.m(s,a),o=!0},p(s,a){if(a&4){t=ue(s[2].videos);let c;for(c=0;c<t.length;c+=1){const b=ot(s,t,c);n[c]?(n[c].p(b,a),g(n[c],1)):(n[c]=lt(b),n[c].c(),g(n[c],1),n[c].m(e.parentNode,e))}for(ce(),c=t.length;c<n.length;c+=1)i(c);fe(),!t.length&&l?l.p(s,a):t.length?l&&(l.d(1),l=null):(l=it(),l.c(),l.m(e.parentNode,e))}},i(s){if(!o){for(let a=0;a<t.length;a+=1)g(n[a]);o=!0}},o(s){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)C(n[a]);o=!1},d(s){s&&f(e),ye(n,s),l&&l.d(s)}}}function it(r){let e,o=`Aún no se agregan anuncios!
				<a href="#" class="btn" style="margin-top: 1.5rem;">add videos</a> `;return{c(){e=d("p"),e.innerHTML=o,this.h()},l(t){e=h(t,"P",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-10vzas2"&&(e.innerHTML=o),this.h()},h(){v(e,"class","empty")},m(t,n){$(t,e,n)},p:O,d(t){t&&f(e)}}}function lt(r){let e,o;return e=new jt({props:{url:r[9]}}),{c(){I(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){V(e,t,n),o=!0},p(t,n){const i={};n&4&&(i.url=t[9]),e.$set(i)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){C(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function st(r){let e,o;return e=new _e({props:{collection_id:"me_gustas",clave:"doc_id",valor:r[3],$$slots:{artículo:[on,({artículo:t})=>({8:t}),({artículo:t})=>t?256:0]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){V(e,t,n),o=!0},p(t,n){const i={};n&8&&(i.valor=t[3]),n&4352&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){C(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function on(r){let e=r[8].lista.length+"",o;return{c(){o=U(e)},l(t){o=Y(t,e)},m(t,n){$(t,o,n)},p(t,n){n&256&&e!==(e=t[8].lista.length+"")&&J(o,e)},d(t){t&&f(o)}}}function rn(r){return{c:O,l:O,m:O,p:O,i:O,o:O,d:O}}function ln(r){let e,o,t=ue(r[4]),n=[];for(let l=0;l<t.length;l+=1)n[l]=at(nt(r,t,l));const i=l=>C(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=j()},l(l){for(let s=0;s<n.length;s+=1)n[s].l(l);e=j()},m(l,s){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(l,s);$(l,e,s),o=!0},p(l,s){if(s&4){t=ue(l[4]);let a;for(a=0;a<t.length;a+=1){const c=nt(l,t,a);n[a]?(n[a].p(c,s),g(n[a],1)):(n[a]=at(c),n[a].c(),g(n[a],1),n[a].m(e.parentNode,e))}for(ce(),a=t.length;a<n.length;a+=1)i(a);fe()}},i(l){if(!o){for(let s=0;s<t.length;s+=1)g(n[s]);o=!0}},o(l){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)C(n[s]);o=!1},d(l){l&&f(e),ye(n,l)}}}function at(r){let e,o;return e=new Ft({props:{tutor:r[5]}}),{c(){I(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){V(e,t,n),o=!0},p(t,n){const i={};n&4&&(i.tutor=t[5]),e.$set(i)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){C(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function sn(r){return{c:O,l:O,m:O,p:O,i:O,o:O,d:O}}function an(r){let e,o,t,n,i,l=r[2].título+"",s,a,c,b,m,A,_,k,w,P,G,X,oe,re,me,ie,Se,de=r[2].tipo+"",Ee,Re,le,he,se,Ie,pe=r[2].porcentaje+"",ve,be,K,Te,we,z,Z,Le,Ce,Ve,x,ke,ee,ge,$e=r[2].descripción+"",Ae,Q;e=new Xe({props:{src:"contenido/"+r[2].promo,class:"promo w-full mb-1"}});let D=r[2]&&rt(r);_=new je({props:{timestamp:r[2].fecha}});let q=r[3]&&st(r),M={ctx:r,current:null,token:null,hasCatch:!1,pending:sn,then:ln,catch:rn,value:4,blocks:[,,,]};return Je(Te=Ge("usuarios","id",r[2].tutor_id),M),x=new nn({props:{user_id:r[3],contenido_id:r[1]}}),{c(){I(e.$$.fragment),o=S(),t=d("div"),D&&D.c(),n=S(),i=d("h3"),s=U(l),a=S(),c=d("div"),b=d("p"),m=d("i"),A=d("span"),I(_.$$.fragment),k=S(),w=d("p"),P=d("i"),G=d("span"),q&&q.c(),X=U(`
			me gustas`),oe=S(),re=d("p"),me=d("i"),ie=d("span"),Se=U("Tipo: "),Ee=U(de),Re=S(),le=d("p"),he=d("i"),se=d("span"),Ie=U("Porcentaje: "),ve=U(pe),be=S(),K=d("div"),M.block.c(),we=S(),z=d("div"),Z=d("a"),Le=U("Ver promoción"),Ve=S(),I(x.$$.fragment),ke=S(),ee=d("div"),ge=d("p"),Ae=U($e),this.h()},l(p){L(e.$$.fragment,p),o=R(p),t=h(p,"DIV",{class:!0});var T=E(t);D&&D.l(T),T.forEach(f),n=R(p),i=h(p,"H3",{class:!0});var te=E(i);s=Y(te,l),te.forEach(f),a=R(p),c=h(p,"DIV",{class:!0});var y=E(c);b=h(y,"P",{});var ne=E(b);m=h(ne,"I",{class:!0}),E(m).forEach(f),A=h(ne,"SPAN",{});var Be=E(A);L(_.$$.fragment,Be),Be.forEach(f),ne.forEach(f),k=R(y),w=h(y,"P",{});var Ne=E(w);P=h(Ne,"I",{class:!0}),E(P).forEach(f),G=h(Ne,"SPAN",{});var De=E(G);q&&q.l(De),X=Y(De,`
			me gustas`),De.forEach(f),Ne.forEach(f),oe=R(y),re=h(y,"P",{});var qe=E(re);me=h(qe,"I",{class:!0}),E(me).forEach(f),ie=h(qe,"SPAN",{});var Me=E(ie);Se=Y(Me,"Tipo: "),Ee=Y(Me,de),Me.forEach(f),qe.forEach(f),Re=R(y),le=h(y,"P",{});var Ue=E(le);he=h(Ue,"I",{class:!0}),E(he).forEach(f),se=h(Ue,"SPAN",{});var Ye=E(se);Ie=Y(Ye,"Porcentaje: "),ve=Y(Ye,pe),Ye.forEach(f),Ue.forEach(f),y.forEach(f),be=R(p),K=h(p,"DIV",{class:!0});var He=E(K);M.block.l(He),He.forEach(f),we=R(p),z=h(p,"DIV",{class:!0});var Pe=E(z);Z=h(Pe,"A",{href:!0,class:!0});var Fe=E(Z);Le=Y(Fe,"Ver promoción"),Fe.forEach(f),Ve=R(Pe),L(x.$$.fragment,Pe),Pe.forEach(f),ke=R(p),ee=h(p,"DIV",{class:!0});var ze=E(ee);ge=h(ze,"P",{});var Qe=E(ge);Ae=Y(Qe,$e),Qe.forEach(f),ze.forEach(f),this.h()},h(){v(t,"class","grid grid-cols-2 gap-1 justify-center items-center"),v(i,"class","title"),v(m,"class","fas fa-calendar"),v(P,"class","fas fa-heart"),v(me,"class","fas fa-duotone fa-icons"),v(he,"class","fa-solid fa-tag"),v(c,"class","info"),v(K,"class","tutor"),v(Z,"href",Ce="/lista-promociones/"+r[0]),v(Z,"class","inline-btn"),v(z,"class","flex"),v(ee,"class","description")},m(p,T){V(e,p,T),$(p,o,T),$(p,t,T),D&&D.m(t,null),$(p,n,T),$(p,i,T),u(i,s),$(p,a,T),$(p,c,T),u(c,b),u(b,m),u(b,A),V(_,A,null),u(c,k),u(c,w),u(w,P),u(w,G),q&&q.m(G,null),u(G,X),u(c,oe),u(c,re),u(re,me),u(re,ie),u(ie,Se),u(ie,Ee),u(c,Re),u(c,le),u(le,he),u(le,se),u(se,Ie),u(se,ve),$(p,be,T),$(p,K,T),M.block.m(K,M.anchor=null),M.mount=()=>K,M.anchor=null,$(p,we,T),$(p,z,T),u(z,Z),u(Z,Le),u(z,Ve),V(x,z,null),$(p,ke,T),$(p,ee,T),u(ee,ge),u(ge,Ae),Q=!0},p(p,[T]){r=p;const te={};T&4&&(te.src="contenido/"+r[2].promo),e.$set(te),r[2]?D?(D.p(r,T),T&4&&g(D,1)):(D=rt(r),D.c(),g(D,1),D.m(t,null)):D&&(ce(),C(D,1,1,()=>{D=null}),fe()),(!Q||T&4)&&l!==(l=r[2].título+"")&&J(s,l);const y={};T&4&&(y.timestamp=r[2].fecha),_.$set(y),r[3]?q?(q.p(r,T),T&8&&g(q,1)):(q=st(r),q.c(),g(q,1),q.m(G,X)):q&&(ce(),C(q,1,1,()=>{q=null}),fe()),(!Q||T&4)&&de!==(de=r[2].tipo+"")&&J(Ee,de),(!Q||T&4)&&pe!==(pe=r[2].porcentaje+"")&&J(ve,pe),M.ctx=r,T&4&&Te!==(Te=Ge("usuarios","id",r[2].tutor_id))&&Je(Te,M)||bt(M,r,T),(!Q||T&1&&Ce!==(Ce="/lista-promociones/"+r[0]))&&v(Z,"href",Ce);const ne={};T&8&&(ne.user_id=r[3]),T&2&&(ne.contenido_id=r[1]),x.$set(ne),(!Q||T&4)&&$e!==($e=r[2].descripción+"")&&J(Ae,$e)},i(p){Q||(g(e.$$.fragment,p),g(D),g(_.$$.fragment,p),g(q),g(M.block),g(x.$$.fragment,p),Q=!0)},o(p){C(e.$$.fragment,p),C(D),C(_.$$.fragment,p),C(q);for(let T=0;T<3;T+=1){const te=M.blocks[T];C(te)}C(x.$$.fragment,p),Q=!1},d(p){p&&(f(o),f(t),f(n),f(i),f(a),f(c),f(be),f(K),f(we),f(z),f(ke),f(ee)),N(e,p),D&&D.d(),N(_),q&&q.d(),M.block.d(),M.token=null,M=null,N(x)}}}function cn(r,e,o){let{lista_promocion_id:t}=e,{contenido_id:n}=e,{contenido:i}=e,l;return ft(()=>{o(3,l=sessionStorage.getItem("user_id"))}),r.$$set=s=>{"lista_promocion_id"in s&&o(0,t=s.lista_promocion_id),"contenido_id"in s&&o(1,n=s.contenido_id),"contenido"in s&&o(2,i=s.contenido)},[t,n,i,l]}class fn extends H{constructor(e){super(),F(this,e,cn,an,B,{lista_promocion_id:0,contenido_id:1,contenido:2})}}function ct(r){let e,o;return e=new _e({props:{collection_id:"contenido",clave:"id",valor:r[1],$$slots:{artículo:[un,({artículo:t})=>({2:t}),({artículo:t})=>t?4:0]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){V(e,t,n),o=!0},p(t,n){const i={};n&2&&(i.valor=t[1]),n&15&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){C(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function un(r){let e,o;return e=new fn({props:{slot:"artículo",contenido:r[2],lista_promocion_id:r[0],contenido_id:r[1]}}),{c(){I(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){V(e,t,n),o=!0},p(t,n){const i={};n&4&&(i.contenido=t[2]),n&1&&(i.lista_promocion_id=t[0]),n&2&&(i.contenido_id=t[1]),e.$set(i)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){C(e.$$.fragment,t),o=!1},d(t){N(e,t)}}}function _n(r){let e,o,t,n=r[1]&&ct(r);return{c(){e=d("section"),o=d("div"),n&&n.c(),this.h()},l(i){e=h(i,"SECTION",{class:!0});var l=E(e);o=h(l,"DIV",{class:!0});var s=E(o);n&&n.l(s),s.forEach(f),l.forEach(f),this.h()},h(){v(o,"class","detalles-anuncio"),v(e,"class","ver-anuncio")},m(i,l){$(i,e,l),u(e,o),n&&n.m(o,null),t=!0},p(i,[l]){i[1]?n?(n.p(i,l),l&2&&g(n,1)):(n=ct(i),n.c(),g(n,1),n.m(o,null)):n&&(ce(),C(n,1,1,()=>{n=null}),fe())},i(i){t||(g(n),t=!0)},o(i){C(n),t=!1},d(i){i&&f(e),n&&n.d()}}}function mn(r,e,o){let{lista_promocion_id:t}=e,{contenido_id:n}=e;return r.$$set=i=>{"lista_promocion_id"in i&&o(0,t=i.lista_promocion_id),"contenido_id"in i&&o(1,n=i.contenido_id)},[t,n]}class dn extends H{constructor(e){super(),F(this,e,mn,_n,B,{lista_promocion_id:0,contenido_id:1})}}function hn(r){let e,o,t,n,i;return o=new dn({props:{lista_promocion_id:r[0],contenido_id:r[1]}}),n=new Gt({props:{contenido_id:r[1],promoción_id:r[0]}}),{c(){e=S(),I(o.$$.fragment),t=S(),I(n.$$.fragment),this.h()},l(l){pt("svelte-149s2tg",document.head).forEach(f),e=R(l),L(o.$$.fragment,l),t=R(l),L(n.$$.fragment,l),this.h()},h(){document.title="Ver Anuncio"},m(l,s){$(l,e,s),V(o,l,s),$(l,t,s),V(n,l,s),i=!0},p:O,i(l){i||(g(o.$$.fragment,l),g(n.$$.fragment,l),i=!0)},o(l){C(o.$$.fragment,l),C(n.$$.fragment,l),i=!1},d(l){l&&(f(e),f(t)),N(o,l),N(n,l)}}}function pn(r,e,o){let{data:t}=e;const{promoción_id:n,contenido_id:i}=t;return r.$$set=l=>{"data"in l&&o(2,t=l.data)},[n,i,t]}class In extends H{constructor(e){super(),F(this,e,pn,hn,B,{data:2})}}export{In as component,Rn as universal};