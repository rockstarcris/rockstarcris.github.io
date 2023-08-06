import{s as z,f as d,a as S,l as U,g as h,h as g,d as f,c as R,m as Y,j as v,i as b,u,n as j,D as se,N as _t,B as A,o as ct,e as x,x as Be,W as Je,r as Oe,v as mt,L as dt}from"../chunks/scheduler.e36e92f8.js";import{S as W,i as Q,b as V,d as D,m as N,a as w,t as k,e as q,g as pe,c as $e}from"../chunks/index.9bb3785f.js";import{b as ht,a as pt}from"../chunks/index.esm.56b6a403.js";import{Q as ge}from"../chunks/query-db.component.92d7171d.js";import{q as Se,e as ce}from"../chunks/state.68d0945b.js";import{I as je,h as Xe,u as ft,E as $t}from"../chunks/img.component.00fe73e4.js";import{F as ye}from"../chunks/fecha.component.15477ce8.js";import{a as ut}from"../chunks/mantener-con-vida.function.b3d64ec2.js";import{p as gt}from"../chunks/prueba.function.8024517c.js";import{c as Et}from"../chunks/create-form.dfc38636.js";import{v as vt}from"../chunks/v4.a960c1f4.js";import{u as bt}from"../chunks/update-db.function.ae9669cf.js";const F={YOUTUBE_TEST:/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/|youtu\.be\/)/,YOUTUBE_REPLACE:/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:live\/)?)?(?:youtu\.be\/)?(.+)$/,YOUTUBE_REPLACE_TO:"https://www.youtube.com/embed/$1",VIMEO_TEST:/^(?:https?:\/\/)?(?:www\.)?(?:player\.)?vimeo\.com\//,VIMEO_REPLACE:/^(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(\d+)$/,VIMEO_REPLACE_TO:"https://player.vimeo.com/video/$1",ODYSEE_TEST:/^https:\/\/(odysee\.com|odysee\.com\/\$\/embed)\/(@[^:]+:[^\/]+\/[^?]+)(\?r=[^&]+)?$/,ODYSEE_REPLACE:/https:\/\/odysee\.com\/(.+)/g,ODYSEE_REPLACE_TO:"https://odysee.com/$/embed/$1"},Ke=[{TITLE:"YouTube",ALLOW:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",TEST_REGEX:F.YOUTUBE_TEST,REPLACE_REGEX:F.YOUTUBE_REPLACE,REPLACE_TO:F.YOUTUBE_REPLACE_TO},{TITLE:"Vimeo",TEST_REGEX:F.VIMEO_TEST,REPLACE_REGEX:F.VIMEO_REPLACE,REPLACE_TO:F.VIMEO_REPLACE_TO},{TITLE:"Odysee",TEST_REGEX:F.ODYSEE_TEST,REPLACE_REGEX:F.ODYSEE_REPLACE,REPLACE_TO:F.ODYSEE_REPLACE_TO}],Tt="auto";function wt({params:r}){return{promoción_id:r.promocion_id,contenido_id:r.contenido_id}}const bn=Object.freeze(Object.defineProperty({__proto__:null,load:wt,prerender:Tt},Symbol.toStringTag,{value:"Module"}));function Ct(r){let t,o;return t=new je({props:{slot:"artículo",src:"/perfil/"+r[2].imagen}}),{c(){V(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){N(t,e,n),o=!0},p(e,n){const l={};n&4&&(l.src="/perfil/"+e[2].imagen),t.$set(l)},i(e){o||(w(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){q(t,e)}}}function Pt(r){let t,o,e,n,l=r[1].nombre+"",i,a,s,c,$;return t=new ge({props:{collection_id:"usuarios",clave:"id",valor:r[0].user_id,$$slots:{artículo:[Ct,({artículo:_})=>({2:_}),({artículo:_})=>_?4:0]},$$scope:{ctx:r}}}),c=new ye({props:{timestamp:r[0].fecha}}),{c(){V(t.$$.fragment),o=S(),e=d("div"),n=d("h3"),i=U(l),a=S(),s=d("span"),V(c.$$.fragment)},l(_){D(t.$$.fragment,_),o=R(_),e=h(_,"DIV",{});var P=g(e);n=h(P,"H3",{});var m=g(n);i=Y(m,l),m.forEach(f),a=R(P),s=h(P,"SPAN",{});var C=g(s);D(c.$$.fragment,C),C.forEach(f),P.forEach(f)},m(_,P){N(t,_,P),b(_,o,P),b(_,e,P),u(e,n),u(n,i),u(e,a),u(e,s),N(c,s,null),$=!0},p(_,P){const m={};P&1&&(m.valor=_[0].user_id),P&12&&(m.$$scope={dirty:P,ctx:_}),t.$set(m),(!$||P&2)&&l!==(l=_[1].nombre+"")&&j(i,l);const C={};P&1&&(C.timestamp=_[0].fecha),c.$set(C)},i(_){$||(w(t.$$.fragment,_),w(c.$$.fragment,_),$=!0)},o(_){k(t.$$.fragment,_),k(c.$$.fragment,_),$=!1},d(_){_&&(f(o),f(e)),q(t,_),q(c)}}}function kt(r){let t,o,e,n,l=r[0].comentario+"",i,a;return o=new ge({props:{collection_id:"usuarios",clave:"id",valor:r[0].user_id,$$slots:{artículo:[Pt,({artículo:s})=>({1:s}),({artículo:s})=>s?2:0]},$$scope:{ctx:r}}}),{c(){t=d("div"),V(o.$$.fragment),e=S(),n=d("p"),i=U(l),this.h()},l(s){t=h(s,"DIV",{class:!0});var c=g(t);D(o.$$.fragment,c),c.forEach(f),e=R(s),n=h(s,"P",{class:!0});var $=g(n);i=Y($,l),$.forEach(f),this.h()},h(){v(t,"class","user"),v(n,"class","text")},m(s,c){b(s,t,c),N(o,t,null),b(s,e,c),b(s,n,c),u(n,i),a=!0},p(s,[c]){const $={};c&1&&($.valor=s[0].user_id),c&11&&($.$$scope={dirty:c,ctx:s}),o.$set($),(!a||c&1)&&l!==(l=s[0].comentario+"")&&j(i,l)},i(s){a||(w(o.$$.fragment,s),a=!0)},o(s){k(o.$$.fragment,s),a=!1},d(s){s&&(f(t),f(e),f(n)),q(o)}}}function At(r,t,o){let{comentario:e}=t;return r.$$set=n=>{"comentario"in n&&o(0,e=n.comentario)},[e]}class Ot extends W{constructor(t){super(),Q(this,t,At,kt,z,{comentario:0})}}function St(r){let t,o='<textarea name="comentario" required="" placeholder="Escribe tu comentario..." maxlength="1000" cols="30" rows="10"></textarea> <input type="submit" value="Comentar" class="inline-btn"/>',e,n;return{c(){t=d("form"),t.innerHTML=o,this.h()},l(l){t=h(l,"FORM",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-19ro58i"&&(t.innerHTML=o),this.h()},h(){v(t,"class","add-comment")},m(l,i){b(l,t,i),e||(n=_t(r[0].call(null,t)),e=!0)},p:A,i:A,o:A,d(l){l&&f(t),e=!1,n()}}}function Rt(r,t,o){let{contenido_id:e,promoción_id:n}=t,l;ct(async()=>{l=(await Se("contenido","id",e))[0]});const{form:i}=Et({onSubmit:async a=>{const s=vt();await gt(async()=>{ut("comentarios",s,{...a,id:s,tutor_id:l.tutor_id,fecha:new Date().getTime(),user_id:sessionStorage.getItem("user_id"),contenido_id:e,promocion_id:n})})}});return r.$$set=a=>{"contenido_id"in a&&o(1,e=a.contenido_id),"promoción_id"in a&&o(2,n=a.promoción_id)},[i,e,n]}class It extends W{constructor(t){super(),Q(this,t,Rt,St,z,{contenido_id:1,promoción_id:2})}}function Lt(r){let t,o,e;return o=new Ot({props:{comentario:r[2],promoción_id:r[1]}}),{c(){t=d("div"),V(o.$$.fragment),this.h()},l(n){t=h(n,"DIV",{class:!0,slot:!0});var l=g(t);D(o.$$.fragment,l),l.forEach(f),this.h()},h(){v(t,"class","box"),v(t,"slot","artículo")},m(n,l){b(n,t,l),N(o,t,null),e=!0},p(n,l){const i={};l&4&&(i.comentario=n[2]),l&2&&(i.promoción_id=n[1]),o.$set(i)},i(n){e||(w(o.$$.fragment,n),e=!0)},o(n){k(o.$$.fragment,n),e=!1},d(n){n&&f(t),q(o)}}}function Vt(r){let t,o="Se el primero en comentar!";return{c(){t=d("p"),t.textContent=o,this.h()},l(e){t=h(e,"P",{class:!0,slot:!0,"data-svelte-h":!0}),se(t)!=="svelte-scewzj"&&(t.textContent=o),this.h()},h(){v(t,"class","empty"),v(t,"slot","vacío")},m(e,n){b(e,t,n)},p:A,d(e){e&&f(t)}}}function Dt(r){let t,o,e="Agrega un comentario",n,l,i,a,s="Comentarios Rock",c,$,_,P;return l=new It({props:{contenido_id:r[0],promoción_id:r[1]}}),_=new ge({props:{collection_id:"comentarios",clave:"contenido_id",valor:r[0],$$slots:{vacío:[Vt],artículo:[Lt,({artículo:m})=>({2:m}),({artículo:m})=>m?4:0]},$$scope:{ctx:r}}}),{c(){t=d("section"),o=d("h1"),o.textContent=e,n=S(),V(l.$$.fragment),i=S(),a=d("h1"),a.textContent=s,c=S(),$=d("div"),V(_.$$.fragment),this.h()},l(m){t=h(m,"SECTION",{class:!0});var C=g(t);o=h(C,"H1",{class:!0,"data-svelte-h":!0}),se(o)!=="svelte-1n1u2ho"&&(o.textContent=e),n=R(C),D(l.$$.fragment,C),i=R(C),a=h(C,"H1",{class:!0,"data-svelte-h":!0}),se(a)!=="svelte-1lb57hy"&&(a.textContent=s),c=R(C),$=h(C,"DIV",{class:!0});var T=g($);D(_.$$.fragment,T),T.forEach(f),C.forEach(f),this.h()},h(){v(o,"class","heading"),v(a,"class","heading"),v($,"class","show-comments"),v(t,"class","comments")},m(m,C){b(m,t,C),u(t,o),u(t,n),N(l,t,null),u(t,i),u(t,a),u(t,c),u(t,$),N(_,$,null),P=!0},p(m,[C]){const T={};C&1&&(T.contenido_id=m[0]),C&2&&(T.promoción_id=m[1]),l.$set(T);const O={};C&1&&(O.valor=m[0]),C&14&&(O.$$scope={dirty:C,ctx:m}),_.$set(O)},i(m){P||(w(l.$$.fragment,m),w(_.$$.fragment,m),P=!0)},o(m){k(l.$$.fragment,m),k(_.$$.fragment,m),P=!1},d(m){m&&f(t),q(l),q(_)}}}function Nt(r,t,o){let{contenido_id:e}=t,{promoción_id:n}=t;return r.$$set=l=>{"contenido_id"in l&&o(0,e=l.contenido_id),"promoción_id"in l&&o(1,n=l.promoción_id)},[e,n]}class qt extends W{constructor(t){super(),Q(this,t,Nt,Dt,z,{contenido_id:0,promoción_id:1})}}function Ze(r,t,o){const e=r.slice();return e[1]=t[o],e}function xe(r){let t,o;return{c(){t=d("iframe"),this.h()},l(e){t=h(e,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),g(t).forEach(f),this.h()},h(){v(t,"class","aspect-video w-full"),Je(t.src,o=r[0].replace(r[1].REPLACE_REGEX,r[1].REPLACE_TO))||v(t,"src",o),v(t,"title","YouTube video player"),v(t,"frameborder","0"),v(t,"allow",r[1].ALLOW),t.allowFullscreen=!0},m(e,n){b(e,t,n)},p(e,n){n&1&&!Je(t.src,o=e[0].replace(e[1].REPLACE_REGEX,e[1].REPLACE_TO))&&v(t,"src",o)},d(e){e&&f(t)}}}function et(r){let t=r[0].match(r[1].TEST_REGEX),o,e=t&&xe(r);return{c(){e&&e.c(),o=x()},l(n){e&&e.l(n),o=x()},m(n,l){e&&e.m(n,l),b(n,o,l)},p(n,l){l&1&&(t=n[0].match(n[1].TEST_REGEX)),t?e?e.p(n,l):(e=xe(n),e.c(),e.m(o.parentNode,o)):e&&(e.d(1),e=null)},d(n){n&&f(o),e&&e.d(n)}}}function Mt(r){let t,o=ce(Ke),e=[];for(let n=0;n<o.length;n+=1)e[n]=et(Ze(r,o,n));return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=x()},l(n){for(let l=0;l<e.length;l+=1)e[l].l(n);t=x()},m(n,l){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(n,l);b(n,t,l)},p(n,[l]){if(l&1){o=ce(Ke);let i;for(i=0;i<o.length;i+=1){const a=Ze(n,o,i);e[i]?e[i].p(a,l):(e[i]=et(a),e[i].c(),e[i].m(t.parentNode,t))}for(;i<e.length;i+=1)e[i].d(1);e.length=o.length}},i:A,o:A,d(n){n&&f(t),Be(e,n)}}}function Ut(r,t,o){let{url:e}=t;return r.$$set=n=>{"url"in n&&o(0,e=n.url)},[e]}class Yt extends W{constructor(t){super(),Q(this,t,Ut,Mt,z,{url:0})}}function Gt(r){let t,o,e,n,l=r[0].nombre+"",i,a,s,c=r[0].profesión+"",$,_,P,m,C;return t=new je({props:{src:"perfil/"+r[0].imagen}}),m=new ye({props:{timestamp:r[0].fecha}}),{c(){V(t.$$.fragment),o=S(),e=d("div"),n=d("h3"),i=U(l),a=S(),s=d("span"),$=U(c),_=S(),P=d("span"),V(m.$$.fragment)},l(T){D(t.$$.fragment,T),o=R(T),e=h(T,"DIV",{});var O=g(e);n=h(O,"H3",{});var G=g(n);i=Y(G,l),G.forEach(f),a=R(O),s=h(O,"SPAN",{});var B=g(s);$=Y(B,c),B.forEach(f),_=R(O),P=h(O,"SPAN",{});var oe=g(P);D(m.$$.fragment,oe),oe.forEach(f),O.forEach(f)},m(T,O){N(t,T,O),b(T,o,O),b(T,e,O),u(e,n),u(n,i),u(e,a),u(e,s),u(s,$),u(e,_),u(e,P),N(m,P,null),C=!0},p(T,[O]){const G={};O&1&&(G.src="perfil/"+T[0].imagen),t.$set(G),(!C||O&1)&&l!==(l=T[0].nombre+"")&&j(i,l),(!C||O&1)&&c!==(c=T[0].profesión+"")&&j($,c);const B={};O&1&&(B.timestamp=T[0].fecha),m.$set(B)},i(T){C||(w(t.$$.fragment,T),w(m.$$.fragment,T),C=!0)},o(T){k(t.$$.fragment,T),k(m.$$.fragment,T),C=!1},d(T){T&&(f(o),f(e)),q(t,T),q(m)}}}function Xt(r,t,o){let{tutor:e}=t;return r.$$set=n=>{"tutor"in n&&o(0,e=n.tutor)},[e]}class Bt extends W{constructor(t){super(),Q(this,t,Xt,Gt,z,{tutor:0})}}function jt(r){return{c:A,l:A,m:A,p:A,d:A}}function yt(r){let t,o=r[0]?"me guste":"me gusta",e;return{c(){t=d("span"),e=U(o),this.h()},l(n){t=h(n,"SPAN",{class:!0});var l=g(t);e=Y(l,o),l.forEach(f),this.h()},h(){v(t,"class","capitalize"),Oe(t,"animate-pulse",r[1])},m(n,l){b(n,t,l),u(t,e)},p(n,l){l&1&&o!==(o=n[0]?"me guste":"me gusta")&&j(e,o),l&2&&Oe(t,"animate-pulse",n[1])},d(n){n&&f(t)}}}function Ht(r){let t,o=" ";return{c(){t=d("span"),t.textContent=o,this.h()},l(e){t=h(e,"SPAN",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-15qf0bo"&&(t.textContent=o),this.h()},h(){v(t,"class","capitalize "+$t.CARGANDO_SPAN)},m(e,n){b(e,t,n)},p:A,d(e){e&&f(t)}}}function Ft(r){let t,o,e,n,l,i={ctx:r,current:null,token:null,hasCatch:!1,pending:Ht,then:yt,catch:jt};return Xe(r[3](),i),{c(){t=d("button"),o=d("i"),e=S(),i.block.c(),this.h()},l(a){t=h(a,"BUTTON",{});var s=g(t);o=h(s,"I",{class:!0}),g(o).forEach(f),e=R(s),i.block.l(s),s.forEach(f),this.h()},h(){v(o,"class","far fa-heart"),Oe(o,"fas",r[0])},m(a,s){b(a,t,s),u(t,o),u(t,e),i.block.m(t,i.anchor=null),i.mount=()=>t,i.anchor=null,n||(l=mt(t,"click",r[2]),n=!0)},p(a,[s]){r=a,s&1&&Oe(o,"fas",r[0]),ft(i,r,s)},i:A,o:A,d(a){a&&f(t),i.block.d(),i.token=null,i=null,n=!1,l()}}}function zt(r,t,o){let{user_id:e}=t,{contenido_id:n}=t,l,i;const a=async()=>{const c=async()=>{await bt("me_gustas",e,{lista:(l?ht:pt)(n)})};o(1,i=!0);try{await c()}catch($){$.message.includes("No document to update")&&(await ut("me_gustas",e,{lista:[n]}),await c())}o(1,i=!1),s()},s=async()=>{var $,_;const c=(_=($=await Se("me_gustas","doc_id",e))==null?void 0:$[0])==null?void 0:_.lista;o(0,l=c==null?void 0:c.includes(n))};return r.$$set=c=>{"user_id"in c&&o(4,e=c.user_id),"contenido_id"in c&&o(5,n=c.contenido_id)},[l,i,a,s,e,n]}class Wt extends W{constructor(t){super(),Q(this,t,zt,Ft,z,{user_id:4,contenido_id:5})}}function tt(r,t,o){const e=r.slice();return e[5]=t[o],e}function nt(r,t,o){const e=r.slice();return e[9]=t[o],e}function ot(r){let t,o,e=ce(r[2].videos),n=[];for(let a=0;a<e.length;a+=1)n[a]=it(nt(r,e,a));const l=a=>k(n[a],1,1,()=>{n[a]=null});let i=null;return e.length||(i=rt()),{c(){for(let a=0;a<n.length;a+=1)n[a].c();t=x(),i&&i.c()},l(a){for(let s=0;s<n.length;s+=1)n[s].l(a);t=x(),i&&i.l(a)},m(a,s){for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(a,s);b(a,t,s),i&&i.m(a,s),o=!0},p(a,s){if(s&4){e=ce(a[2].videos);let c;for(c=0;c<e.length;c+=1){const $=nt(a,e,c);n[c]?(n[c].p($,s),w(n[c],1)):(n[c]=it($),n[c].c(),w(n[c],1),n[c].m(t.parentNode,t))}for(pe(),c=e.length;c<n.length;c+=1)l(c);$e(),!e.length&&i?i.p(a,s):e.length?i&&(i.d(1),i=null):(i=rt(),i.c(),i.m(t.parentNode,t))}},i(a){if(!o){for(let s=0;s<e.length;s+=1)w(n[s]);o=!0}},o(a){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)k(n[s]);o=!1},d(a){a&&f(t),Be(n,a),i&&i.d(a)}}}function rt(r){let t,o=`Aún no se agregan anuncios!
				<a href="#" class="btn" style="margin-top: 1.5rem;">add videos</a> `;return{c(){t=d("p"),t.innerHTML=o,this.h()},l(e){t=h(e,"P",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-10vzas2"&&(t.innerHTML=o),this.h()},h(){v(t,"class","empty")},m(e,n){b(e,t,n)},p:A,d(e){e&&f(t)}}}function it(r){let t,o;return t=new Yt({props:{url:r[9]}}),{c(){V(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){N(t,e,n),o=!0},p(e,n){const l={};n&4&&(l.url=e[9]),t.$set(l)},i(e){o||(w(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){q(t,e)}}}function lt(r){let t,o;return t=new ge({props:{collection_id:"me_gustas",clave:"doc_id",valor:r[3],$$slots:{artículo:[Qt,({artículo:e})=>({8:e}),({artículo:e})=>e?256:0]},$$scope:{ctx:r}}}),{c(){V(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){N(t,e,n),o=!0},p(e,n){const l={};n&8&&(l.valor=e[3]),n&4352&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){o||(w(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){q(t,e)}}}function Qt(r){let t=r[8].lista.length+"",o;return{c(){o=U(t)},l(e){o=Y(e,t)},m(e,n){b(e,o,n)},p(e,n){n&256&&t!==(t=e[8].lista.length+"")&&j(o,t)},d(e){e&&f(o)}}}function Jt(r){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function Kt(r){let t,o,e=ce(r[4]),n=[];for(let i=0;i<e.length;i+=1)n[i]=at(tt(r,e,i));const l=i=>k(n[i],1,1,()=>{n[i]=null});return{c(){for(let i=0;i<n.length;i+=1)n[i].c();t=x()},l(i){for(let a=0;a<n.length;a+=1)n[a].l(i);t=x()},m(i,a){for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(i,a);b(i,t,a),o=!0},p(i,a){if(a&4){e=ce(i[4]);let s;for(s=0;s<e.length;s+=1){const c=tt(i,e,s);n[s]?(n[s].p(c,a),w(n[s],1)):(n[s]=at(c),n[s].c(),w(n[s],1),n[s].m(t.parentNode,t))}for(pe(),s=e.length;s<n.length;s+=1)l(s);$e()}},i(i){if(!o){for(let a=0;a<e.length;a+=1)w(n[a]);o=!0}},o(i){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)k(n[a]);o=!1},d(i){i&&f(t),Be(n,i)}}}function at(r){let t,o;return t=new Bt({props:{tutor:r[5]}}),{c(){V(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){N(t,e,n),o=!0},p(e,n){const l={};n&4&&(l.tutor=e[5]),t.$set(l)},i(e){o||(w(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){q(t,e)}}}function Zt(r){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function xt(r){let t,o,e,n,l,i=r[2].título+"",a,s,c,$,_,P,m,C,T,O,G,B,oe,re,fe,ie,Re,ue=r[2].tipo+"",Ee,Ie,le,_e,ae,Le,me=r[2].porcentaje+"",ve,be,J,Te,we,y,K,Ve,Ce,De,Z,Pe,ee,de,he=r[2].descripción+"",ke,H;t=new je({props:{src:"contenido/"+r[2].promo,class:"promo w-full mb-1"}});let I=r[2]&&ot(r);m=new ye({props:{timestamp:r[2].fecha}});let L=r[3]&&lt(r),M={ctx:r,current:null,token:null,hasCatch:!1,pending:Zt,then:Kt,catch:Jt,value:4,blocks:[,,,]};return Xe(Te=Se("usuarios","id",r[2].tutor_id),M),Z=new Wt({props:{user_id:r[3],contenido_id:r[1]}}),{c(){V(t.$$.fragment),o=S(),e=d("div"),I&&I.c(),n=S(),l=d("h3"),a=U(i),s=S(),c=d("div"),$=d("p"),_=d("i"),P=d("span"),V(m.$$.fragment),C=S(),T=d("p"),O=d("i"),G=d("span"),L&&L.c(),B=U(`
			me gustas`),oe=S(),re=d("p"),fe=d("i"),ie=d("span"),Re=U("Tipo: "),Ee=U(ue),Ie=S(),le=d("p"),_e=d("i"),ae=d("span"),Le=U("Porcentaje: "),ve=U(me),be=S(),J=d("div"),M.block.c(),we=S(),y=d("div"),K=d("a"),Ve=U("Ver promoción"),De=S(),V(Z.$$.fragment),Pe=S(),ee=d("div"),de=d("p"),ke=U(he),this.h()},l(p){D(t.$$.fragment,p),o=R(p),e=h(p,"DIV",{class:!0});var E=g(e);I&&I.l(E),E.forEach(f),n=R(p),l=h(p,"H3",{class:!0});var te=g(l);a=Y(te,i),te.forEach(f),s=R(p),c=h(p,"DIV",{class:!0});var X=g(c);$=h(X,"P",{});var ne=g($);_=h(ne,"I",{class:!0}),g(_).forEach(f),P=h(ne,"SPAN",{});var He=g(P);D(m.$$.fragment,He),He.forEach(f),ne.forEach(f),C=R(X),T=h(X,"P",{});var Ne=g(T);O=h(Ne,"I",{class:!0}),g(O).forEach(f),G=h(Ne,"SPAN",{});var qe=g(G);L&&L.l(qe),B=Y(qe,`
			me gustas`),qe.forEach(f),Ne.forEach(f),oe=R(X),re=h(X,"P",{});var Me=g(re);fe=h(Me,"I",{class:!0}),g(fe).forEach(f),ie=h(Me,"SPAN",{});var Ue=g(ie);Re=Y(Ue,"Tipo: "),Ee=Y(Ue,ue),Ue.forEach(f),Me.forEach(f),Ie=R(X),le=h(X,"P",{});var Ye=g(le);_e=h(Ye,"I",{class:!0}),g(_e).forEach(f),ae=h(Ye,"SPAN",{});var Ge=g(ae);Le=Y(Ge,"Porcentaje: "),ve=Y(Ge,me),Ge.forEach(f),Ye.forEach(f),X.forEach(f),be=R(p),J=h(p,"DIV",{class:!0});var Fe=g(J);M.block.l(Fe),Fe.forEach(f),we=R(p),y=h(p,"DIV",{class:!0});var Ae=g(y);K=h(Ae,"A",{href:!0,class:!0});var ze=g(K);Ve=Y(ze,"Ver promoción"),ze.forEach(f),De=R(Ae),D(Z.$$.fragment,Ae),Ae.forEach(f),Pe=R(p),ee=h(p,"DIV",{class:!0});var We=g(ee);de=h(We,"P",{});var Qe=g(de);ke=Y(Qe,he),Qe.forEach(f),We.forEach(f),this.h()},h(){v(e,"class","grid grid-cols-2 gap-1 justify-center items-center"),v(l,"class","title"),v(_,"class","fas fa-calendar"),v(O,"class","fas fa-heart"),v(fe,"class","fas fa-duotone fa-icons"),v(_e,"class","fa-solid fa-tag"),v(c,"class","info"),v(J,"class","tutor"),v(K,"href",Ce="/lista-promociones/"+r[0]),v(K,"class","inline-btn"),v(y,"class","flex"),v(ee,"class","description")},m(p,E){N(t,p,E),b(p,o,E),b(p,e,E),I&&I.m(e,null),b(p,n,E),b(p,l,E),u(l,a),b(p,s,E),b(p,c,E),u(c,$),u($,_),u($,P),N(m,P,null),u(c,C),u(c,T),u(T,O),u(T,G),L&&L.m(G,null),u(G,B),u(c,oe),u(c,re),u(re,fe),u(re,ie),u(ie,Re),u(ie,Ee),u(c,Ie),u(c,le),u(le,_e),u(le,ae),u(ae,Le),u(ae,ve),b(p,be,E),b(p,J,E),M.block.m(J,M.anchor=null),M.mount=()=>J,M.anchor=null,b(p,we,E),b(p,y,E),u(y,K),u(K,Ve),u(y,De),N(Z,y,null),b(p,Pe,E),b(p,ee,E),u(ee,de),u(de,ke),H=!0},p(p,[E]){r=p;const te={};E&4&&(te.src="contenido/"+r[2].promo),t.$set(te),r[2]?I?(I.p(r,E),E&4&&w(I,1)):(I=ot(r),I.c(),w(I,1),I.m(e,null)):I&&(pe(),k(I,1,1,()=>{I=null}),$e()),(!H||E&4)&&i!==(i=r[2].título+"")&&j(a,i);const X={};E&4&&(X.timestamp=r[2].fecha),m.$set(X),r[3]?L?(L.p(r,E),E&8&&w(L,1)):(L=lt(r),L.c(),w(L,1),L.m(G,B)):L&&(pe(),k(L,1,1,()=>{L=null}),$e()),(!H||E&4)&&ue!==(ue=r[2].tipo+"")&&j(Ee,ue),(!H||E&4)&&me!==(me=r[2].porcentaje+"")&&j(ve,me),M.ctx=r,E&4&&Te!==(Te=Se("usuarios","id",r[2].tutor_id))&&Xe(Te,M)||ft(M,r,E),(!H||E&1&&Ce!==(Ce="/lista-promociones/"+r[0]))&&v(K,"href",Ce);const ne={};E&8&&(ne.user_id=r[3]),E&2&&(ne.contenido_id=r[1]),Z.$set(ne),(!H||E&4)&&he!==(he=r[2].descripción+"")&&j(ke,he)},i(p){H||(w(t.$$.fragment,p),w(I),w(m.$$.fragment,p),w(L),w(M.block),w(Z.$$.fragment,p),H=!0)},o(p){k(t.$$.fragment,p),k(I),k(m.$$.fragment,p),k(L);for(let E=0;E<3;E+=1){const te=M.blocks[E];k(te)}k(Z.$$.fragment,p),H=!1},d(p){p&&(f(o),f(e),f(n),f(l),f(s),f(c),f(be),f(J),f(we),f(y),f(Pe),f(ee)),q(t,p),I&&I.d(),q(m),L&&L.d(),M.block.d(),M.token=null,M=null,q(Z)}}}function en(r,t,o){let{lista_promocion_id:e}=t,{contenido_id:n}=t,{contenido:l}=t,i;return ct(()=>{o(3,i=sessionStorage.getItem("user_id"))}),r.$$set=a=>{"lista_promocion_id"in a&&o(0,e=a.lista_promocion_id),"contenido_id"in a&&o(1,n=a.contenido_id),"contenido"in a&&o(2,l=a.contenido)},[e,n,l,i]}class tn extends W{constructor(t){super(),Q(this,t,en,xt,z,{lista_promocion_id:0,contenido_id:1,contenido:2})}}function st(r){let t,o;return t=new ge({props:{collection_id:"contenido",clave:"id",valor:r[1],$$slots:{artículo:[nn,({artículo:e})=>({2:e}),({artículo:e})=>e?4:0]},$$scope:{ctx:r}}}),{c(){V(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){N(t,e,n),o=!0},p(e,n){const l={};n&2&&(l.valor=e[1]),n&15&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){o||(w(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){q(t,e)}}}function nn(r){let t,o;return t=new tn({props:{slot:"artículo",contenido:r[2],lista_promocion_id:r[0],contenido_id:r[1]}}),{c(){V(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){N(t,e,n),o=!0},p(e,n){const l={};n&4&&(l.contenido=e[2]),n&1&&(l.lista_promocion_id=e[0]),n&2&&(l.contenido_id=e[1]),t.$set(l)},i(e){o||(w(t.$$.fragment,e),o=!0)},o(e){k(t.$$.fragment,e),o=!1},d(e){q(t,e)}}}function on(r){let t,o,e,n=r[1]&&st(r);return{c(){t=d("section"),o=d("div"),n&&n.c(),this.h()},l(l){t=h(l,"SECTION",{class:!0});var i=g(t);o=h(i,"DIV",{class:!0});var a=g(o);n&&n.l(a),a.forEach(f),i.forEach(f),this.h()},h(){v(o,"class","detalles-anuncio"),v(t,"class","ver-anuncio")},m(l,i){b(l,t,i),u(t,o),n&&n.m(o,null),e=!0},p(l,[i]){l[1]?n?(n.p(l,i),i&2&&w(n,1)):(n=st(l),n.c(),w(n,1),n.m(o,null)):n&&(pe(),k(n,1,1,()=>{n=null}),$e())},i(l){e||(w(n),e=!0)},o(l){k(n),e=!1},d(l){l&&f(t),n&&n.d()}}}function rn(r,t,o){let{lista_promocion_id:e}=t,{contenido_id:n}=t;return r.$$set=l=>{"lista_promocion_id"in l&&o(0,e=l.lista_promocion_id),"contenido_id"in l&&o(1,n=l.contenido_id)},[e,n]}class ln extends W{constructor(t){super(),Q(this,t,rn,on,z,{lista_promocion_id:0,contenido_id:1})}}function an(r){let t,o,e,n,l;return o=new ln({props:{lista_promocion_id:r[0],contenido_id:r[1]}}),n=new qt({props:{contenido_id:r[1],promoción_id:r[0]}}),{c(){t=S(),V(o.$$.fragment),e=S(),V(n.$$.fragment),this.h()},l(i){dt("svelte-149s2tg",document.head).forEach(f),t=R(i),D(o.$$.fragment,i),e=R(i),D(n.$$.fragment,i),this.h()},h(){document.title="Ver Anuncio"},m(i,a){b(i,t,a),N(o,i,a),b(i,e,a),N(n,i,a),l=!0},p:A,i(i){l||(w(o.$$.fragment,i),w(n.$$.fragment,i),l=!0)},o(i){k(o.$$.fragment,i),k(n.$$.fragment,i),l=!1},d(i){i&&(f(t),f(e)),q(o,i),q(n,i)}}}function sn(r,t,o){let{data:e}=t;const{promoción_id:n,contenido_id:l}=e;return r.$$set=i=>{"data"in i&&o(2,e=i.data)},[n,l,e]}class Tn extends W{constructor(t){super(),Q(this,t,sn,an,z,{data:2})}}export{Tn as component,bn as universal};
