import{d as w,q as d}from"./index.esm2017.e5973e54.js";import{s as u,d as _}from"./index.esm.a0d8edf4.js";import{w as m}from"./index.d2456d52.js";const n=m(),f=m({perfil:!0}),l=(e,r=500)=>{let s;return(...t)=>{clearTimeout(s),s=setTimeout(()=>{e.apply(void 0,t)},r)}},y=(e,r,s,t)=>new Promise((a,c)=>{const i=w.subscribe(async o=>{if(o){try{l(async()=>{!t&&await h()},1e4),await u(_(o,e,r),s),a()}catch(p){c(p)}i()}})}),b=async()=>{var e;try{const r=i=>{f.update(o=>(o.perfil=i,o))},s=sessionStorage.getItem("user_id");if(!s)throw n.set(void 0),r(!1),new Error("No información de inicio de sesión.");const t=s&&((e=await d("sesiónes","id",s))==null?void 0:e[0]),a=t==null?void 0:t.tiempo_de_expiración;if(a&&new Date().getTime()>=a)throw sessionStorage.removeItem("user_id"),n.set(void 0),r(!1),new Error("La sesión está vencida.");{const i=(await d("users","id",s))[0];n.set(i),r(!1)}return t}catch(r){throw new Error(r)}},h=async()=>{try{const e=await b();e&&await y("sesiónes",e.id,{...e,tiempo_de_expiración:new Date().getTime()+36e5})}catch(e){throw new Error(e)}};export{y as a,f as c,l as d,h as m,n as p};
