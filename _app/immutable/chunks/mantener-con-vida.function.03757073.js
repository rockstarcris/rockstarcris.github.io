import{d as w,q as d}from"./index.esm2017.4bc87ef9.js";import{s as u,d as _}from"./index.esm.a0d8edf4.js";import{w as m}from"./index.d2456d52.js";const a=m(),f=m({perfil:!0}),l=(e,s=500)=>{let r;return(...t)=>{clearTimeout(r),r=setTimeout(()=>{e.apply(void 0,t)},s)}},y=(e,s,r,t)=>new Promise((n,i)=>{const o=w.subscribe(async c=>{if(c){try{l(async()=>{!t&&await h()},1e4),await u(_(c,e,s),r),n()}catch(p){i(p)}o()}})}),b=async()=>{try{const e=i=>{f.update(o=>(o.perfil=i,o))},s=sessionStorage.getItem("user_id");if(!s)throw a.set(void 0),e(!1),new Error("No información de inicio de sesión.");const r=s&&await d("sesiónes","id",s),t=r==null?void 0:r.tiempo_de_expiración;if(t&&new Date().getTime()>=t)throw sessionStorage.removeItem("user_id"),a.set(void 0),e(!1),new Error("La sesión está vencida.");{const i=await d("users","id",s);a.set(i),e(!1)}return r}catch(e){throw new Error(e)}},h=async()=>{try{const e=await b();e&&await y("sesiónes",e.id,{...e,tiempo_de_expiración:new Date().getTime()+36e5})}catch(e){throw new Error(e)}};export{y as a,f as c,l as d,h as m,a as p};