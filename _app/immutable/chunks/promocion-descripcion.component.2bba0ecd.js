import{s as B,f as S,l as r,a as w,g as j,h as q,m as u,d as c,c as x,j as y,i as d,v as h,n as k,y as z}from"./scheduler.af79bd7c.js";import{S as D,i as F}from"./index.eb17a6e8.js";function G(o){let e,m,s=o[0].pais+"",n,f,l,C,p=o[0].alcance+"",v,P,i,E,_=o[0].ciudad+"",b;return{c(){e=S("h2"),m=r("País: "),n=r(s),f=w(),l=S("h2"),C=r("Alcance: "),v=r(p),P=w(),i=S("h2"),E=r("Ciudad: "),b=r(_),this.h()},l(a){e=j(a,"H2",{class:!0});var t=q(e);m=u(t,"País: "),n=u(t,s),t.forEach(c),f=x(a),l=j(a,"H2",{class:!0});var H=q(l);C=u(H,"Alcance: "),v=u(H,p),H.forEach(c),P=x(a),i=j(a,"H2",{class:!0});var A=q(i);E=u(A,"Ciudad: "),b=u(A,_),A.forEach(c),this.h()},h(){y(e,"class","subtitle"),y(l,"class","subtitle"),y(i,"class","subtitle")},m(a,t){d(a,e,t),h(e,m),h(e,n),d(a,f,t),d(a,l,t),h(l,C),h(l,v),d(a,P,t),d(a,i,t),h(i,E),h(i,b)},p(a,[t]){t&1&&s!==(s=a[0].pais+"")&&k(n,s),t&1&&p!==(p=a[0].alcance+"")&&k(v,p),t&1&&_!==(_=a[0].ciudad+"")&&k(b,_)},i:z,o:z,d(a){a&&(c(e),c(f),c(l),c(P),c(i))}}}function I(o,e,m){let{promoción:s}=e;return o.$$set=n=>{"promoción"in n&&m(0,s=n.promoción)},[s]}class L extends D{constructor(e){super(),F(this,e,I,G,B,{promoción:0})}}export{L as P};
