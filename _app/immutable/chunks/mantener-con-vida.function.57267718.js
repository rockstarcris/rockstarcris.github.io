import{d as m,s as u,l as _,q as p}from"./index.esm.098bce7e.js";import{c as w,p as c}from"./cargando.store.d89b5574.js";import{g as f}from"./navigation.e58c8af4.js";const l=(t,e=500)=>{let r;return(...s)=>{clearTimeout(r),r=setTimeout(()=>{t.apply(void 0,s)},e)}},y=(t,e,r,s)=>new Promise((a,o)=>{const d=m.subscribe(async i=>{if(i){try{l(async()=>{!s&&await b()},1e4),await u(_(i,t,e),r),a()}catch(n){o(n)}d()}})}),g=async t=>{var e;try{const r=i=>{w.update(n=>(n.perfil=i,n))},s=sessionStorage.getItem("user_id");if(!s){c.set(void 0),r(!1);return}const a=s&&((e=await p("sesiónes","id",s))==null?void 0:e[0]),o=a==null?void 0:a.tiempo_de_expiración;if(o&&new Date().getTime()>=o)throw sessionStorage.removeItem("user_id"),c.set(void 0),r(!1),f("/"),new Error("La sesión está vencida.");{const i=(await p("usuarios","id",s))[0];c.set(i),r(!1)}return a}catch(r){throw new Error(r)}},b=async t=>{try{const e=await g(t);e&&await y("sesiónes",e.id,{...e,tiempo_de_expiración:new Date().getTime()+36e5})}catch(e){throw new Error(e)}};export{l as d,b as m,y as p};