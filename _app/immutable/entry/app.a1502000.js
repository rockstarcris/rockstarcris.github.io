import{S as C,i as q,s as U,a as j,e as d,c as z,b as w,d as h,f as P,g,h as E,j as W,o as F,k as G,l as H,m as J,n as D,p,q as K,r as M,u as Q,v as A,w as I,x as b,y as k,z as O,A as R,B as L}from"../chunks/index.cd4ec8d3.js";const X="modulepreload",Y=function(a,e){return new URL(a,e).href},T={},m=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(_=>{if(_=Y(_,i),_ in T)return;T[_]=!0;const t=_.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(!!i)for(let l=r.length-1;l>=0;l--){const u=r[l];if(u.href===_&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${o}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":X,t||(s.as="script",s.crossOrigin=""),s.href=_,document.head.appendChild(s),t)return new Promise((l,u)=>{s.addEventListener("load",l),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${_}`)))})})).then(()=>e())},ie={};function Z(a){let e,n,i;var r=a[1][0];function _(t){return{props:{data:t[3],form:t[2]}}}return r&&(e=b(r,_(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&R(e,t,o),w(t,n,o),i=!0},p(t,o){const c={};if(o&8&&(c.data=t[3]),o&4&&(c.form=t[2]),o&2&&r!==(r=t[1][0])){if(e){A();const s=e;h(s.$$.fragment,1,0,()=>{L(s,1)}),P()}r?(e=b(r,_(t)),t[12](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&E(n),e&&L(e,t)}}}function $(a){let e,n,i;var r=a[1][0];function _(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return r&&(e=b(r,_(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&R(e,t,o),w(t,n,o),i=!0},p(t,o){const c={};if(o&8&&(c.data=t[3]),o&8215&&(c.$$scope={dirty:o,ctx:t}),o&2&&r!==(r=t[1][0])){if(e){A();const s=e;h(s.$$.fragment,1,0,()=>{L(s,1)}),P()}r?(e=b(r,_(t)),t[11](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&E(n),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][1];function _(t){return{props:{data:t[4],form:t[2]}}}return r&&(e=b(r,_(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,o){e&&R(e,t,o),w(t,n,o),i=!0},p(t,o){const c={};if(o&16&&(c.data=t[4]),o&4&&(c.form=t[2]),o&2&&r!==(r=t[1][1])){if(e){A();const s=e;h(s.$$.fragment,1,0,()=>{L(s,1)}),P()}r?(e=b(r,_(t)),t[10](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&E(n),e&&L(e,t)}}}function V(a){let e,n=a[6]&&y(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(E),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){w(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=y(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&E(e),n&&n.d()}}}function y(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){w(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&E(e)}}}function ee(a){let e,n,i,r,_;const t=[$,Z],o=[];function c(l,u){return l[1][1]?0:1}e=c(a),n=o[e]=t[e](a);let s=a[5]&&V(a);return{c(){n.c(),i=j(),s&&s.c(),r=d()},l(l){n.l(l),i=z(l),s&&s.l(l),r=d()},m(l,u){o[e].m(l,u),w(l,i,u),s&&s.m(l,u),w(l,r,u),_=!0},p(l,[u]){let v=e;e=c(l),e===v?o[e].p(l,u):(A(),h(o[v],1,1,()=>{o[v]=null}),P(),n=o[e],n?n.p(l,u):(n=o[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?s?s.p(l,u):(s=V(l),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},i(l){_||(g(n),_=!0)},o(l){h(n),_=!1},d(l){o[e].d(l),l&&E(i),s&&s.d(l),l&&E(r)}}}function te(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:o}=e,{data_0:c=null}=e,{data_1:s=null}=e;W(i.page.notify);let l=!1,u=!1,v=null;F(()=>{const f=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,v=document.title||"untitled page"))});return n(5,l=!0),f});function N(f){I[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function B(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,o=f.form),"data_0"in f&&n(3,c=f.data_0),"data_1"in f&&n(4,s=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,o,c,s,l,u,v,i,r,N,S,B]}class re extends C{constructor(e){super(),q(this,e,te,ee,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const oe=[()=>m(()=>import("../nodes/0.dd6367d2.js"),["../nodes/0.dd6367d2.js","../chunks/index.cd4ec8d3.js","../chunks/ingreso.component.cde9d29b.js","../assets/0.1d2d23a9.css"],import.meta.url),()=>m(()=>import("../nodes/1.20525a64.js"),["../nodes/1.20525a64.js","../chunks/index.cd4ec8d3.js","../chunks/singletons.3261719f.js"],import.meta.url),()=>m(()=>import("../nodes/2.51810faf.js"),["../nodes/2.51810faf.js","../chunks/index.cd4ec8d3.js","../chunks/ingreso.component.cde9d29b.js"],import.meta.url),()=>m(()=>import("../nodes/3.1d61927a.js"),["../nodes/3.1d61927a.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url),()=>m(()=>import("../nodes/4.4f58be11.js"),["../nodes/4.4f58be11.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url),()=>m(()=>import("../nodes/5.4f58be11.js"),["../nodes/5.4f58be11.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url),()=>m(()=>import("../nodes/6.4f58be11.js"),["../nodes/6.4f58be11.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url),()=>m(()=>import("../nodes/7.4ca5d004.js"),["../nodes/7.4ca5d004.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url),()=>m(()=>import("../nodes/8.4f58be11.js"),["../nodes/8.4f58be11.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url),()=>m(()=>import("../nodes/9.4f58be11.js"),["../nodes/9.4f58be11.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url),()=>m(()=>import("../nodes/10.3cec0c29.js"),["../nodes/10.3cec0c29.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url),()=>m(()=>import("../nodes/11.02c60c37.js"),["../nodes/11.02c60c37.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url),()=>m(()=>import("../nodes/12.4f58be11.js"),["../nodes/12.4f58be11.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url),()=>m(()=>import("../nodes/13.4f58be11.js"),["../nodes/13.4f58be11.js","../chunks/environment.9aa685ef.js","../chunks/index.cd4ec8d3.js"],import.meta.url)],se=[],ae={"/":[2],"/about":[3],"/anunciantes":[4],"/comentarios":[5],"/contact":[6],"/favoritos":[7],"/guardadas":[8],"/login":[9],"/playlist":[10],"/promociones":[11],"/register":[12],"/watch-promo":[13]},le={handleError:({error:a})=>{console.error(a)}};export{ae as dictionary,le as hooks,ie as matchers,oe as nodes,re as root,se as server_loads};