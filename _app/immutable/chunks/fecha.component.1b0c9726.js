import{s as c,l as _,m as f,i as l,n as p,z as i,d as u}from"./scheduler.4191ff18.js";import{S as h,i as d}from"./index.ac363c80.js";function z(a){let e;return{c(){e=_(a[0])},l(t){e=f(t,a[0])},m(t,n){l(t,e,n)},p(t,[n]){n&1&&p(e,t[0])},i,o:i,d(t){t&&u(e)}}}function S(a,e,t){let{timestamp:n}=e,s;const r=o=>{const m=new Date(o).getTimezoneOffset();return new Date(o-m*60*1e3).toISOString().split("T")[0]};return a.$$set=o=>{"timestamp"in o&&t(1,n=o.timestamp)},a.$$.update=()=>{a.$$.dirty&2&&t(0,s=r(n))},[s,n]}class y extends h{constructor(e){super(),d(this,e,S,z,c,{timestamp:1})}}export{y as F};