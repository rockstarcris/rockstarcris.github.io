import{d as p,y as u,n as _}from"./state.9cc63495.js";import{q as d}from"./query-db.function.e61c3954.js";import{c as w,p as n}from"./cargando.store.d89b5574.js";const f=(e,r=500)=>{let s;return(...t)=>{clearTimeout(s),s=setTimeout(()=>{e.apply(void 0,t)},r)}},y=(e,r,s,t)=>new Promise((o,c)=>{const i=p.subscribe(async a=>{if(a){try{f(async()=>{!t&&await b()},1e4),await u(_(a,e,r),s),o()}catch(m){c(m)}i()}})}),l=async()=>{var e;try{const r=i=>{w.update(a=>(a.perfil=i,a))},s=sessionStorage.getItem("user_id");if(!s){n.set(void 0),r(!1);return}const t=s&&((e=await d("sesiónes","id",s))==null?void 0:e[0]),o=t==null?void 0:t.tiempo_de_expiración;if(o&&new Date().getTime()>=o)throw sessionStorage.removeItem("user_id"),n.set(void 0),r(!1),new Error("La sesión está vencida.");{const i=(await d("usuarios","id",s))[0];n.set(i),r(!1)}return t}catch(r){throw new Error(r)}},b=async()=>{try{const e=await l();e&&await y("sesiónes",e.id,{...e,tiempo_de_expiración:new Date().getTime()+36e5})}catch(e){throw new Error(e)}};export{f as d,b as m,y as p};