import{s as x,f as u,l as h,a as y,g as d,h as v,m as g,d as m,c as H,i as _,u as E,n as $,y as b,H as S}from"../chunks/scheduler.aba5b0ee.js";import{S as q,i as C}from"../chunks/index.62cbe4b4.js";import{p as P}from"../chunks/stores.2ef922c3.js";function j(i){var f;let a,s=i[0].status+"",r,o,n,p=((f=i[0].error)==null?void 0:f.message)+"",c;return{c(){a=u("h1"),r=h(s),o=y(),n=u("p"),c=h(p)},l(e){a=d(e,"H1",{});var t=v(a);r=g(t,s),t.forEach(m),o=H(e),n=d(e,"P",{});var l=v(n);c=g(l,p),l.forEach(m)},m(e,t){_(e,a,t),E(a,r),_(e,o,t),_(e,n,t),E(n,c)},p(e,[t]){var l;t&1&&s!==(s=e[0].status+"")&&$(r,s),t&1&&p!==(p=((l=e[0].error)==null?void 0:l.message)+"")&&$(c,p)},i:b,o:b,d(e){e&&(m(a),m(o),m(n))}}}function k(i,a,s){let r;return S(i,P,o=>s(0,r=o)),[r]}class B extends q{constructor(a){super(),C(this,a,k,j,x,{})}}export{B as component};
