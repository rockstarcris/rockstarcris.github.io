import{u as x,r as w,g as k,e as I}from"./state.5aff7cf1.js";import{a as D}from"./mantener-con-vida.function.11bd01ad.js";import{v as E}from"./v4.a960c1f4.js";import{s as $,f as h,g as _,h as p,d as m,j as u,i as y,z as g,w as F,l as v,a as L,m as b,c as S,v as d}from"./scheduler.4191ff18.js";import{S as T,i as j}from"./index.ac363c80.js";const Z=async(s,t)=>{var r,l,c;const o=new FormData(s.target),e={};for(let[i,f]of o.entries())e[i]=f;const a=E(),n=`${a}.${(l=(r=e.foto)==null?void 0:r.name.match(/\.(.+)$/))==null?void 0:l[1]}`;(c=e.foto)!=null&&c.name.length&&await x(w(k(),`perfil/${n}`),e.foto),delete e.foto,D("usuarios",e.nombre,{...e,membresia:t,imagen:n,id:a,fecha:new Date().getTime()})};function G(s){if(s.length<8)return"La contraseña debe tener al menos 8 caracteres.";if(!/[A-Z]/.test(s))return"La contraseña debe contener al menos una letra mayúscula.";if(!/\d/.test(s))return"La contraseña debe contener al menos un número."}function B(s,t,o){const e=s.slice();return e[0]=t[o],e}function C(s){let t,o,e,a,n=s[0].replace(/\b\w/g,V)+"",r,l;return{c(){t=h("div"),o=h("button"),e=h("i"),a=v(`
				Iniciar sesión con `),r=v(n),l=L(),this.h()},l(c){t=_(c,"DIV",{class:!0});var i=p(t);o=_(i,"BUTTON",{type:!0,class:!0});var f=p(o);e=_(f,"I",{class:!0}),p(e).forEach(m),a=b(f,`
				Iniciar sesión con `),r=b(f,n),f.forEach(m),l=S(i),i.forEach(m),this.h()},h(){u(e,"class","fa-brands fa-"+s[0]+" text-3xl"),u(o,"type","button"),u(o,"class","social-button "+s[0]+" md:!my-10 text-xl grid grid-cols-2 gap-3"),u(t,"class","flex justify-center items-center")},m(c,i){y(c,t,i),d(t,o),d(o,e),d(o,a),d(o,r),d(t,l)},p:g,d(c){c&&m(t)}}}function U(s){let t,o=I(["facebook","google"]),e=[];for(let a=0;a<2;a+=1)e[a]=C(B(s,o,a));return{c(){t=h("div");for(let a=0;a<2;a+=1)e[a].c();this.h()},l(a){t=_(a,"DIV",{class:!0});var n=p(t);for(let r=0;r<2;r+=1)e[r].l(n);n.forEach(m),this.h()},h(){u(t,"class","grid w-full grid-rows-2 !mt-5 md:grid-cols-2 md:w-3/5 md:!mt-0 mx-auto")},m(a,n){y(a,t,n);for(let r=0;r<2;r+=1)e[r]&&e[r].m(t,null)},p:g,i:g,o:g,d(a){a&&m(t),F(e,a)}}}const V=s=>s.toUpperCase();class H extends T{constructor(t){super(),j(this,t,null,U,$,{})}}export{H as F,Z as r,G as v};
