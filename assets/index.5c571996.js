import{s as t,g as e,l as n,c as i,S as s,i as r,a,b as o,e as l,d as c,f as $,h as d,j as u,k as y,m as p,u as f,n as g,o as h,t as m,p as x,q as v,r as b,v as k,w,x as M,y as O,z as S,A as P,B as A,C as E,D as L,W as R,E as z,F as Y,G as j,H as N,I as X,J as H,K as I,L as B,M as U,N as q,O as K,P as W,Q as C,R as D,T as F,U as G,V as J,X as Q,Y as T,Z as V,_ as Z,$ as _,a0 as tt,a1 as et,a2 as nt,a3 as it,a4 as st}from"./vendor.bfd07566.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const rt={};function at(){return e(rt)}const ot={};const lt={};const ct={};function $t(){return e(ct)}function dt(t,e,i){return n.range(Math.floor(t/i)*i,Math.ceil(e/i)*i,i).iter().toArray()}function ut(t){let e,n,i,s,r,a,b;const k=t[38].default,w=o(k,t,t[37],null);return{c(){e=l("div"),n=c("svg"),w&&w.c(),$(n,"width",t[2]),$(n,"height",t[3]),$(n,"viewBox",i=`${-t[5](0)} ${-t[4](0)} ${t[2]} ${t[3]}`),$(n,"preserveAspectRatio","xMidYMin"),$(n,"style",s=`width: ${t[0]}; touchAction: ${t[1]?"none":"auto"};`),$(e,"class","visual-math"),$(e,"style",r=`width: ${t[8]}; height: ${t[7]}`),d((()=>t[40].call(e)))},m(i,s){u(i,e,s),y(e,n),w&&w.m(n,null),t[39](e),a=p(e,t[40].bind(e)),b=!0},p(t,a){w&&w.p&&(!b||64&a[1])&&f(w,k,t,t[37],b?h(k,t[37],a,null):g(t[37]),null),(!b||4&a[0])&&$(n,"width",t[2]),(!b||8&a[0])&&$(n,"height",t[3]),(!b||60&a[0]&&i!==(i=`${-t[5](0)} ${-t[4](0)} ${t[2]} ${t[3]}`))&&$(n,"viewBox",i),(!b||3&a[0]&&s!==(s=`width: ${t[0]}; touchAction: ${t[1]?"none":"auto"};`))&&$(n,"style",s),(!b||384&a[0]&&r!==(r=`width: ${t[8]}; height: ${t[7]}`))&&$(e,"style",r)},i(t){b||(m(w,t),b=!0)},o(t){x(w,t),b=!1},d(n){n&&v(e),w&&w.d(n),t[39](null),a()}}}const yt=i();function pt(e,s,r){let a,o,l,c,$,d,u,y,p,f,g,h,m,x,v,Y,j,N,X,{$$slots:H={},$$scope:I}=s,{width:B=500}=s,{height:U=500}=s,{pan:q=!0}=s,{zoom:K=!0}=s,{xAxisExtent:W=b(-5.5,5.5)}=s,{yAxisExtent:C=b(-5.5,5.5)}=s,D="number"==typeof B?B:500,F="number"==typeof U?U:500,G=Math.min(W[1]-W[0],C[1]-C[0]),J=b(0,0),Q=b(W[0],C[0]),T=b(W[1],C[1]),V=i(),Z=k(),_=k(),tt=[],et=[],nt=i(),it=i(),st=E({xPanes:tt,yPanes:et,xPaneRange:nt,yPaneRange:it});t(ct,st);let at=E({min:Q,max:T,width:D,height:F});!function(e){t(ot,e)}(at);let $t=E({scaleX:$,scaleY:d,span:V,pixelMatrix:Z,inversePixelMatrix:_,cssScale:p});!function(e){t(rt,e)}($t);let dt,ut=E({mapX:l,mapY:c});!function(e){t(lt,e)}(ut);const pt=new w.Lethargy;return M((()=>{const t=new L(dt,N),e=new R(dt,X);return()=>{t.destroy(),e.destroy()}})),e.$$set=t=>{"width"in t&&r(0,B=t.width),"height"in t&&r(11,U=t.height),"pan"in t&&r(1,q=t.pan),"zoom"in t&&r(12,K=t.zoom),"xAxisExtent"in t&&r(9,W=t.xAxisExtent),"yAxisExtent"in t&&r(10,C=t.yAxisExtent),"$$scope"in t&&r(37,I=t.$$scope)},e.$$.update=()=>{if(1&e.$$.dirty[0]&&r(8,a="auto"===B?"100%":`${B}px`),2048&e.$$.dirty[0]&&r(7,o="auto"===U?"100%":`${U}px`),13824&e.$$.dirty[0]&&(X=t=>{if(!K||t.last)return;const e=pt.check(t.event)>0,n=e?-1:1;(G>3||!e)&&(r(9,W=S(W,W[0]-n,W[1]+n)),r(10,C=S(C,C[0]-n,C[1]+n)),r(13,G=Math.min(W[1]-W[0],C[1]-C[0])))}),8204&e.$$.dirty[0]){const t=.5*G,e=.5*(G*(D/F));r(9,W[0]=-e,W),r(9,W[1]=e,W),r(10,C[0]=-t,C),r(10,C[1]=t,C)}1550&e.$$.dirty[0]&&(N=t=>{q&&(r(14,J[0]=-t.offset[0]/D*(W[1]-W[0]),J),r(14,J[1]=-t.offset[1]/F*(C[1]-C[0]),J))}),50688&e.$$.dirty[0]&&r(15,Q=O(Q,J,S(yt,W[0],C[0]))),83456&e.$$.dirty[0]&&r(16,T=O(T,J,S(yt,W[1],C[1]))),98308&e.$$.dirty[0]&&r(5,l=t=>(t-Q[0])/(T[0]-Q[0])*D),98312&e.$$.dirty[0]&&r(4,c=t=>(t-Q[1])/(T[1]-Q[1])*F),229376&e.$$.dirty[0]&&r(17,V=P(V,T,Q)),131076&e.$$.dirty[0]&&r(26,$=t=>t/V[0]*D),131080&e.$$.dirty[0]&&r(25,d=t=>-t/V[1]*F),98304&e.$$.dirty[0]&&r(34,f=T[0]-Q[0]),4&e.$$.dirty[0]|8&e.$$.dirty[1]&&r(36,u=t=>t/D*f),98304&e.$$.dirty[0]&&r(30,x=T[1]-Q[1]),1073741832&e.$$.dirty[0]&&r(35,y=t=>-t/F*x),100925440&e.$$.dirty[0]&&r(18,Z=A(Z,S(yt,$(1),d(1)))),524288&e.$$.dirty[0]|48&e.$$.dirty[1]&&r(19,_=A(_,S(yt,u(1),y(1)))),100663296&e.$$.dirty[0]&&r(24,p=`scale(${$(1)} ${d(1)})`),8&e.$$.dirty[1]&&r(33,g=Math.pow(2,Math.round(Math.log10(f)/Math.log10(2)))),32768&e.$$.dirty[0]|4&e.$$.dirty[1]&&r(32,h=Math.floor(Q[0]/g)*g),65536&e.$$.dirty[0]|4&e.$$.dirty[1]&&r(31,m=Math.ceil(T[0]/g)*g),7&e.$$.dirty[1]&&r(20,tt=n.range(h,m,g).iter().map((t=>b(t,t+g))).toArray()),4194304&e.$$.dirty[0]|3&e.$$.dirty[1]&&r(22,nt=S(nt,h,m)),1073741824&e.$$.dirty[0]&&r(29,v=Math.pow(2,Math.round(Math.log10(x)/Math.log10(2)))),536903680&e.$$.dirty[0]&&r(28,Y=Math.floor(Q[0]/v)*v),536936448&e.$$.dirty[0]&&r(27,j=Math.ceil(T[0]/v)*v),939524096&e.$$.dirty[0]&&r(21,et=n.range(Y,j,v).iter().map((t=>b(t,t+v))).toArray()),411041792&e.$$.dirty[0]&&r(23,it=S(it,Y,j)),15728640&e.$$.dirty[0]&&st.set({xPanes:tt,yPanes:et,xPaneRange:nt,yPaneRange:it}),98316&e.$$.dirty[0]&&at.set({min:Q,max:T,width:D,height:F}),118358016&e.$$.dirty[0]&&$t.set({scaleX:$,scaleY:d,span:V,pixelMatrix:Z,inversePixelMatrix:_,cssScale:p}),48&e.$$.dirty[0]&&ut.set({mapX:l,mapY:c})},[B,q,D,F,c,l,dt,o,a,W,C,U,K,G,J,Q,T,V,Z,_,tt,et,nt,it,p,d,$,j,Y,v,x,m,h,g,f,y,u,I,H,function(t){z[t?"unshift":"push"]((()=>{dt=t,r(6,dt)}))},function(){D=this.offsetWidth,F=this.offsetHeight,r(2,D),r(3,F)}]}class ft extends s{constructor(t){super(),r(this,t,pt,ut,a,{width:0,height:11,pan:1,zoom:12,xAxisExtent:9,yAxisExtent:10},null,[-1,-1])}}function gt(t,e,n){const i=t.slice();return i[10]=e[n],i}function ht(t,e){let n,i,s,r,a=(e[0]?e[0](e[10]):e[10])+"";return{key:t,first:null,c(){n=c("text"),i=Y(a),$(n,"x",s=e[2](e[10])),$(n,"y",r=5),$(n,"alignment-baseline","hanging"),$(n,"text-anchor","middle"),this.first=n},m(t,e){u(t,n,e),y(n,i)},p(t,r){e=t,7&r&&a!==(a=(e[0]?e[0](e[10]):e[10])+"")&&j(i,a),6&r&&s!==(s=e[2](e[10]))&&$(n,"x",s)},d(t){t&&v(n)}}}function mt(t){let e,n=[],i=new Map,s=t[1].filter(t[9]);const r=t=>t[10];for(let a=0;a<s.length;a+=1){let e=gt(t,s,a),o=r(e);i.set(o,n[a]=ht(o,e))}return{c(){e=c("g");for(let t=0;t<n.length;t+=1)n[t].c();$(e,"class","svelte-139hgxz")},m(t,i){u(t,e,i);for(let s=0;s<n.length;s+=1)n[s].m(e,null)},p(t,[a]){7&a&&(s=t[1].filter(t[9]),n=N(n,a,r,1,t,s,i,e,X,ht,null,gt))},i:H,o:H,d(t){t&&v(e);for(let e=0;e<n.length;e+=1)n[e].d()}}}function xt(t,e,n){let i,s,r,a,o,{separation:l}=e,{labelMaker:c}=e,$=at();I(t,$,(t=>n(8,o=t)));let d=$t();I(t,d,(t=>n(7,a=t)));return t.$$set=t=>{"separation"in t&&n(5,l=t.separation),"labelMaker"in t&&n(0,c=t.labelMaker)},t.$$.update=()=>{256&t.$$.dirty&&n(2,i=o.scaleX),128&t.$$.dirty&&n(6,s=a.xPanes),96&t.$$.dirty&&n(1,r=dt(s[0][0]-l,s[s.length-1][1]+l,l))},[c,r,i,$,d,l,s,a,o,t=>Math.abs(i(t)-i(0))>1]}class vt extends s{constructor(t){super(),r(this,t,xt,mt,a,{separation:5,labelMaker:0})}}function bt(t,e,n){const i=t.slice();return i[10]=e[n],i}function kt(t,e){let n,i,s,r,a=(e[0]?e[0](e[10]):e[10])+"";return{key:t,first:null,c(){n=c("text"),i=Y(a),$(n,"x",s=5),$(n,"y",r=e[2](e[10])),$(n,"alignment-baseline","central"),this.first=n},m(t,e){u(t,n,e),y(n,i)},p(t,s){e=t,7&s&&a!==(a=(e[0]?e[0](e[10]):e[10])+"")&&j(i,a),6&s&&r!==(r=e[2](e[10]))&&$(n,"y",r)},d(t){t&&v(n)}}}function wt(t){let e,n=[],i=new Map,s=t[1].filter(t[9]);const r=t=>t[10];for(let a=0;a<s.length;a+=1){let e=bt(t,s,a),o=r(e);i.set(o,n[a]=kt(o,e))}return{c(){e=c("g");for(let t=0;t<n.length;t+=1)n[t].c();$(e,"class","svelte-139hgxz")},m(t,i){u(t,e,i);for(let s=0;s<n.length;s+=1)n[s].m(e,null)},p(t,[a]){7&a&&(s=t[1].filter(t[9]),n=N(n,a,r,1,t,s,i,e,X,kt,null,bt))},i:H,o:H,d(t){t&&v(e);for(let e=0;e<n.length;e+=1)n[e].d()}}}function Mt(t,e,n){let i,s,r,a,o,{separation:l}=e,{labelMaker:c}=e,$=at();I(t,$,(t=>n(8,o=t)));let d=$t();I(t,d,(t=>n(7,a=t)));return t.$$set=t=>{"separation"in t&&n(5,l=t.separation),"labelMaker"in t&&n(0,c=t.labelMaker)},t.$$.update=()=>{256&t.$$.dirty&&n(2,i=o.scaleY),128&t.$$.dirty&&n(6,s=a.yPanes),96&t.$$.dirty&&n(1,r=dt(s[0][0]-l,s[s.length-1][1]+l,l))},[c,r,i,$,d,l,s,a,o,t=>Math.abs(i(t)-i(0))>1]}class Ot extends s{constructor(t){super(),r(this,t,Mt,wt,a,{separation:5,labelMaker:0})}}function St(t,e,n){const i=t.slice();return i[13]=e[n],i}function Pt(t,e,n){const i=t.slice();return i[16]=e[n],i}function At(t,e){let n,i,s;return{key:t,first:null,c(){n=c("line"),$(n,"x1",i=e[16]),$(n,"y1",0),$(n,"x2",s=e[16]),$(n,"y2",e[3]),$(n,"style","stroke: var(--grid-line-subdivision-color)"),this.first=n},m(t,e){u(t,n,e)},p(t,r){e=t,32&r&&i!==(i=e[16])&&$(n,"x1",i),32&r&&s!==(s=e[16])&&$(n,"x2",s),8&r&&$(n,"y2",e[3])},d(t){t&&v(n)}}}function Et(t,e){let n,i,s;return{key:t,first:null,c(){n=c("line"),$(n,"y1",i=e[13]),$(n,"x1",0),$(n,"y2",s=e[13]),$(n,"x2",e[4]),$(n,"style","stroke: var(--grid-line-subdivision-color)"),this.first=n},m(t,e){u(t,n,e)},p(t,r){e=t,64&r&&i!==(i=e[13])&&$(n,"y1",i),64&r&&s!==(s=e[13])&&$(n,"y2",s),16&r&&$(n,"x2",e[4])},d(t){t&&v(n)}}}function Lt(t){let e,n,i,s,r,a,o,l;return{c(){e=c("line"),a=c("line"),$(e,"x1",n=0),$(e,"y1",i=0),$(e,"x2",s=0),$(e,"y2",t[3]),$(e,"style",r="stroke: var(--mafs-line-color)"),$(a,"x1",t[4]),$(a,"y1",o=0),$(a,"x2",t[4]),$(a,"y2",t[3]),$(a,"style",l="stroke: var(--mafs-line-color)")},m(t,n){u(t,e,n),u(t,a,n)},p(t,n){8&n&&$(e,"y2",t[3]),16&n&&$(a,"x1",t[4]),16&n&&$(a,"x2",t[4]),8&n&&$(a,"y2",t[3])},d(t){t&&v(e),t&&v(a)}}}function Rt(t){let e,n,i,s,r,a,o,l;return{c(){e=c("line"),a=c("line"),$(e,"x1",n=0),$(e,"y1",i=0),$(e,"x2",t[4]),$(e,"y2",s=0),$(e,"style",r="stroke: var(--mafs-line-color)"),$(a,"x1",o=0),$(a,"y1",t[3]),$(a,"x2",t[4]),$(a,"y2",t[3]),$(a,"style",l="stroke: var(--mafs-line-color)")},m(t,n){u(t,e,n),u(t,a,n)},p(t,n){16&n&&$(e,"x2",t[4]),8&n&&$(a,"y1",t[3]),16&n&&$(a,"x2",t[4]),8&n&&$(a,"y2",t[3])},d(t){t&&v(e),t&&v(a)}}}function zt(t){let e,n,i,s,r=[],a=new Map,o=[],l=new Map,d=t[5];const p=t=>t[16];for(let c=0;c<d.length;c+=1){let e=Pt(t,d,c),n=p(e);a.set(n,r[c]=At(n,e))}let f=t[6];const g=t=>t[13];for(let c=0;c<f.length;c+=1){let e=St(t,f,c),n=g(e);l.set(n,o[c]=Et(n,e))}let h=t[1]&&Lt(t),m=t[2]&&Rt(t);return{c(){e=c("pattern");for(let t=0;t<r.length;t+=1)r[t].c();n=B();for(let t=0;t<o.length;t+=1)o[t].c();i=B(),h&&h.c(),s=B(),m&&m.c(),$(e,"id",t[0]),$(e,"x","0"),$(e,"y","0"),$(e,"width",t[4]),$(e,"height",t[3]),$(e,"patternUnits","userSpaceOnUse")},m(t,a){u(t,e,a);for(let n=0;n<r.length;n+=1)r[n].m(e,null);y(e,n);for(let n=0;n<o.length;n+=1)o[n].m(e,null);y(e,i),h&&h.m(e,null),y(e,s),m&&m.m(e,null)},p(t,[c]){40&c&&(d=t[5],r=N(r,c,p,1,t,d,a,e,X,At,n,Pt)),80&c&&(f=t[6],o=N(o,c,g,1,t,f,l,e,X,Et,i,St)),t[1]?h?h.p(t,c):(h=Lt(t),h.c(),h.m(e,s)):h&&(h.d(1),h=null),t[2]?m?m.p(t,c):(m=Rt(t),m.c(),m.m(e,null)):m&&(m.d(1),m=null),1&c&&$(e,"id",t[0]),16&c&&$(e,"width",t[4]),8&c&&$(e,"height",t[3])},i:H,o:H,d(t){t&&v(e);for(let e=0;e<r.length;e+=1)r[e].d();for(let e=0;e<o.length;e+=1)o[e].d();h&&h.d(),m&&m.d()}}}function Yt(t,e,i){let s,r,a,o,l,{id:c}=e,{xLines:$=1}=e,{yLines:d=1}=e,{xSubdivisions:u=1}=e,{ySubdivisions:y=1}=e,p=at();I(t,p,(t=>i(12,l=t)));let f=[],g=[];return t.$$set=t=>{"id"in t&&i(0,c=t.id),"xLines"in t&&i(1,$=t.xLines),"yLines"in t&&i(2,d=t.yLines),"xSubdivisions"in t&&i(8,u=t.xSubdivisions),"ySubdivisions"in t&&i(9,y=t.ySubdivisions)},t.$$.update=()=>{if(4096&t.$$.dirty&&i(11,s=l.scaleX),4096&t.$$.dirty&&i(10,r=l.scaleY),2050&t.$$.dirty&&i(4,a=s($||1)),1028&t.$$.dirty&&i(3,o=-r(d||1)),272&t.$$.dirty&&u&&u>1){const t=a/u;i(5,f=n.range(0,a+1.1*t,t).iter().toArray())}if(520&t.$$.dirty&&y&&y>1){const t=o/y;i(6,g=n.range(0,o+1.1*t,t).iter().toArray())}},[c,$,d,o,a,f,g,p,u,y,r,s,l]}class jt extends s{constructor(t){super(),r(this,t,Yt,zt,a,{id:0,xLines:1,yLines:2,xSubdivisions:8,ySubdivisions:9})}}function Nt(t){let e,n;return e=new vt({props:{labelMaker:t[3].labels,separation:t[3].lines||1}}),{c(){U(e.$$.fragment)},m(t,i){q(e,t,i),n=!0},p(t,n){const i={};8&n&&(i.labelMaker=t[3].labels),8&n&&(i.separation=t[3].lines||1),e.$set(i)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Xt(t){let e,n;return e=new Ot({props:{labelMaker:t[2].labels,separation:t[2].lines||1}}),{c(){U(e.$$.fragment)},m(t,i){q(e,t,i),n=!0},p(t,n){const i={};4&n&&(i.labelMaker=t[2].labels),4&n&&(i.separation=t[2].lines||1),e.$set(i)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Ht(t){let e,n,i,s,r;return{c(){e=c("line"),$(e,"x1",n=-1e7),$(e,"x2",i=1e7),$(e,"y1",s=0),$(e,"y2",r=0),$(e,"class","transform-y-to-center svelte-eht84a")},m(t,n){u(t,e,n)},d(t){t&&v(e)}}}function It(t){let e,n,i,s,r;return{c(){e=c("line"),$(e,"x1",n=0),$(e,"x2",i=0),$(e,"y1",s=-1e7),$(e,"y2",r=1e7),$(e,"class","transform-x-to-center svelte-eht84a")},m(t,n){u(t,e,n)},d(t){t&&v(e)}}}function Bt(t){let e,n,i,s,r,a,o,l,d,y;n=new jt({props:{id:t[4],xLines:t[3].lines,yLines:t[2].lines,xSubdivisions:t[3].subdivisions,ySubdivisions:t[2].subdivisions}});let p=t[0].labels&&Nt(t),f=t[1].labels&&Xt(t),g=t[3].axis&&Ht(),h=t[2].axis&&It();return{c(){e=c("defs"),U(n.$$.fragment),i=W(),s=c("rect"),r=W(),p&&p.c(),a=W(),f&&f.c(),o=W(),g&&g.c(),l=W(),h&&h.c(),d=B(),$(s,"fill",`url(#${t[4]})`),$(s,"x",-1e7),$(s,"y",-1e7),$(s,"width",2e7),$(s,"height",2e7)},m(t,c){u(t,e,c),q(n,e,null),u(t,i,c),u(t,s,c),u(t,r,c),p&&p.m(t,c),u(t,a,c),f&&f.m(t,c),u(t,o,c),g&&g.m(t,c),u(t,l,c),h&&h.m(t,c),u(t,d,c),y=!0},p(t,[e]){const i={};8&e&&(i.xLines=t[3].lines),4&e&&(i.yLines=t[2].lines),8&e&&(i.xSubdivisions=t[3].subdivisions),4&e&&(i.ySubdivisions=t[2].subdivisions),n.$set(i),t[0].labels?p?(p.p(t,e),1&e&&m(p,1)):(p=Nt(t),p.c(),m(p,1),p.m(a.parentNode,a)):p&&(C(),x(p,1,1,(()=>{p=null})),D()),t[1].labels?f?(f.p(t,e),2&e&&m(f,1)):(f=Xt(t),f.c(),m(f,1),f.m(o.parentNode,o)):f&&(C(),x(f,1,1,(()=>{f=null})),D()),t[3].axis?g||(g=Ht(),g.c(),g.m(l.parentNode,l)):g&&(g.d(1),g=null),t[2].axis?h||(h=It(),h.c(),h.m(d.parentNode,d)):h&&(h.d(1),h=null)},i(t){y||(m(n.$$.fragment,t),m(p),m(f),y=!0)},o(t){x(n.$$.fragment,t),x(p),x(f),y=!1},d(t){t&&v(e),K(n),t&&v(i),t&&v(s),t&&v(r),p&&p.d(t),t&&v(a),f&&f.d(t),t&&v(o),g&&g.d(t),t&&v(l),h&&h.d(t),t&&v(d)}}}let Ut=0;const qt={axis:!0,lines:1,labels:t=>t};function Kt(t,e,n){let i,s,{subdivisions:r=!1}=e,{xAxis:a=Object.assign({subdivisions:r},qt)}=e,{yAxis:o=Object.assign({subdivisions:r},qt)}=e;const l="mafs-grid-"+Ut++;return t.$$set=t=>{"subdivisions"in t&&n(5,r=t.subdivisions),"xAxis"in t&&n(0,a=t.xAxis),"yAxis"in t&&n(1,o=t.yAxis)},t.$$.update=()=>{33&t.$$.dirty&&n(3,i=Object.assign(Object.assign({subdivisions:r},qt),a)),34&t.$$.dirty&&n(2,s=Object.assign(Object.assign({subdivisions:r},qt),o))},[a,o,s,i,l,r]}class Wt extends s{constructor(t){super(),r(this,t,Kt,Bt,a,{subdivisions:5,xAxis:0,yAxis:1})}}function Ct(t){let e,n,i,s,r,a,o,l,$=[{cx:n=t[0][0]},{cy:i=t[0][1]},{rx:s=Math.abs(t[1][0])},{ry:r=Math.abs(t[1][1])},{"stroke-width":t[4]},{"stroke-dasharray":a="dashed"===t[2]?"4,3":void 0},{transform:o=`${t[9]} ${t[8]}`},t[7],{style:l=`\n    stroke: ${t[5]};\n    fill: ${t[5]};\n    fill-opacity: ${t[6]};\n    stroke-opacity: ${t[3]};\n    ${t[7].style||""}\n  `}],d={};for(let c=0;c<$.length;c+=1)d=F(d,$[c]);return{c(){e=c("ellipse"),G(e,d),J(e,"svelte-cc8k9r",!0)},m(t,n){u(t,e,n)},p(t,[c]){G(e,d=Q($,[1&c&&n!==(n=t[0][0])&&{cx:n},1&c&&i!==(i=t[0][1])&&{cy:i},2&c&&s!==(s=Math.abs(t[1][0]))&&{rx:s},2&c&&r!==(r=Math.abs(t[1][1]))&&{ry:r},16&c&&{"stroke-width":t[4]},4&c&&a!==(a="dashed"===t[2]?"4,3":void 0)&&{"stroke-dasharray":a},768&c&&o!==(o=`${t[9]} ${t[8]}`)&&{transform:o},128&c&&t[7],232&c&&l!==(l=`\n    stroke: ${t[5]};\n    fill: ${t[5]};\n    fill-opacity: ${t[6]};\n    stroke-opacity: ${t[3]};\n    ${t[7].style||""}\n  `)&&{style:l}])),J(e,"svelte-cc8k9r",!0)},i:H,o:H,d(t){t&&v(e)}}}function Dt(t,e,n){let i,s,r,{center:a=b(0,0)}=e,{radius:o=b(1,1)}=e,{angle:l=0}=e,{strokeStyle:c="solid"}=e,{strokeOpacity:$=1}=e,{weight:d=2}=e,{color:u="var(--mafs-fg)"}=e,{fillOpacity:y=.15}=e,{svgEllipseProps:p={}}=e,f=at();return I(t,f,(t=>n(12,r=t))),t.$$set=t=>{"center"in t&&n(0,a=t.center),"radius"in t&&n(1,o=t.radius),"angle"in t&&n(11,l=t.angle),"strokeStyle"in t&&n(2,c=t.strokeStyle),"strokeOpacity"in t&&n(3,$=t.strokeOpacity),"weight"in t&&n(4,d=t.weight),"color"in t&&n(5,u=t.color),"fillOpacity"in t&&n(6,y=t.fillOpacity),"svgEllipseProps"in t&&n(7,p=t.svgEllipseProps)},t.$$.update=()=>{4096&t.$$.dirty&&n(9,i=r.cssScale),2049&t.$$.dirty&&n(8,s=`rotate(${180*l/Math.PI} ${a[0]} ${a[1]})`)},[a,o,c,$,d,u,y,p,s,i,f,l,r]}class Ft extends s{constructor(t){super(),r(this,t,Dt,Ct,a,{center:0,radius:1,angle:11,strokeStyle:2,strokeOpacity:3,weight:4,color:5,fillOpacity:6,svgEllipseProps:7})}}function Gt(t){let e,n;return e=new Ft({props:{center:t[0],radius:t[8],angle:t[1],strokeStyle:t[2],strokeOpacity:t[3],weight:t[4],color:t[5],fillOpacity:t[6],svgEllipseProps:t[7]}}),{c(){U(e.$$.fragment)},m(t,i){q(e,t,i),n=!0},p(t,[n]){const i={};1&n&&(i.center=t[0]),256&n&&(i.radius=t[8]),2&n&&(i.angle=t[1]),4&n&&(i.strokeStyle=t[2]),8&n&&(i.strokeOpacity=t[3]),16&n&&(i.weight=t[4]),32&n&&(i.color=t[5]),64&n&&(i.fillOpacity=t[6]),128&n&&(i.svgEllipseProps=t[7]),e.$set(i)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Jt(t,e,n){let{center:i=b(0,0)}=e,{radius:s=1}=e,{angle:r=0}=e,{strokeStyle:a="solid"}=e,{strokeOpacity:o=1}=e,{weight:l=2}=e,{color:c="var(--mafs-fg)"}=e,{fillOpacity:$=.15}=e,{svgEllipseProps:d={}}=e,u=b(s,s);return t.$$set=t=>{"center"in t&&n(0,i=t.center),"radius"in t&&n(9,s=t.radius),"angle"in t&&n(1,r=t.angle),"strokeStyle"in t&&n(2,a=t.strokeStyle),"strokeOpacity"in t&&n(3,o=t.strokeOpacity),"weight"in t&&n(4,l=t.weight),"color"in t&&n(5,c=t.color),"fillOpacity"in t&&n(6,$=t.fillOpacity),"svgEllipseProps"in t&&n(7,d=t.svgEllipseProps)},t.$$.update=()=>{768&t.$$.dirty&&n(8,u=S(u,s,s))},[i,r,a,o,l,c,$,d,u,s]}class Qt extends s{constructor(t){super(),r(this,t,Jt,Gt,a,{center:0,radius:9,angle:1,strokeStyle:2,strokeOpacity:3,weight:4,color:5,fillOpacity:6,svgEllipseProps:7})}}function Tt(t){let e,n,i,s,r,a,o;return{c(){e=c("g"),n=c("circle"),r=c("circle"),$(n,"cx",i=t[5](t[1][0])),$(n,"cy",s=t[4](t[1][1])),$(n,"r",30),$(n,"fill","transparent"),$(r,"cx",a=t[5](t[1][0])),$(r,"cy",o=t[4](t[1][1])),$(r,"r",6),$(r,"fill",t[0]),$(r,"stroke",t[0]),$(r,"stroke-opacity",.25),$(r,"tabindex",0),J(r,"draggable",t[3])},m(i,s){u(i,e,s),y(e,n),y(e,r),t[15](e)},p(t,[e]){34&e&&i!==(i=t[5](t[1][0]))&&$(n,"cx",i),18&e&&s!==(s=t[4](t[1][1]))&&$(n,"cy",s),34&e&&a!==(a=t[5](t[1][0]))&&$(r,"cx",a),18&e&&o!==(o=t[4](t[1][1]))&&$(r,"cy",o),1&e&&$(r,"fill",t[0]),1&e&&$(r,"stroke",t[0]),8&e&&J(r,"draggable",t[3])},i:H,o:H,d(n){n&&v(e),t[15](null)}}}const Vt=i();function Zt(t,e,n){let s,r,a,o,l,{point:c=i()}=e,{color:$="var(--mafs-blue)"}=e,{transform:d=k()}=e,{constrain:u}=e,y=b(c[0],c[1]),p=t=>t;c=p(c);let f=at();I(t,f,(t=>n(14,l=t)));let g,h=i(),m=k(),x=i(),v=!1;return M((()=>{const t=new L(g,o,{eventOptions:{passive:!1}});return()=>{t.destroy()}})),t.$$set=t=>{"point"in t&&n(7,c=t.point),"color"in t&&n(0,$=t.color),"transform"in t&&n(8,d=t.transform),"constrain"in t&&n(9,u=t.constrain)},t.$$.update=()=>{512&t.$$.dirty&&("horizontal"===u?n(10,p=([t,e])=>[t,y[1]]):"vertical"===u?n(10,p=([t,e])=>[y[0],e]):"function"==typeof u&&n(10,p=u)),16384&t.$$.dirty&&n(5,s=l.scaleX),16384&t.$$.dirty&&n(4,r=l.scaleY),16384&t.$$.dirty&&n(13,a=l.inversePixelMatrix),2304&t.$$.dirty&&n(11,m=T(m,d)),15744&t.$$.dirty&&(o=t=>{var e;null===(e=t.event)||void 0===e||e.stopPropagation(),n(3,v=t.down);const i=V(Vt,t.movement,a);t.first&&n(12,x=V(x,c,d)),O(c,x,i),V(c,c,m),n(7,c=p(c))}),386&t.$$.dirty&&n(1,h=V(h,c,d))},[$,h,g,v,r,s,f,c,d,u,p,m,x,a,l,function(t){z[t?"unshift":"push"]((()=>{g=t,n(2,g)}))}]}class _t extends s{constructor(t){super(),r(this,t,Zt,Tt,a,{point:7,color:0,transform:8,constrain:9})}}function te(t){let e,n,i,s,r,a,o,l,c,$,d,y,p,f,g,h,b,k;function w(e){t[11](e)}e=new Wt({}),i=new Qt({props:{center:t[1],radius:t[0],strokeStyle:"dashed",strokeOpacity:.3,fillOpacity:0}}),r=new Ft({props:{center:t[1],radius:t[6],angle:t[8]}});let M={};function O(e){t[12](e)}void 0!==t[1]&&(M.point=t[1]),o=new _t({props:M}),z.push((()=>it(o,"point",w)));let S={transform:t[7],constrain:"horizontal"};function P(e){t[13](e)}void 0!==t[4]&&(S.point=t[4]),$=new _t({props:S}),z.push((()=>it($,"point",O)));let A={transform:t[7],constrain:"vertical"};function E(e){t[14](e)}void 0!==t[5]&&(A.point=t[5]),p=new _t({props:A}),z.push((()=>it(p,"point",P)));let L={transform:t[2],constrain:t[9]};return void 0!==t[3]&&(L.point=t[3]),h=new _t({props:L}),z.push((()=>it(h,"point",E))),{c(){U(e.$$.fragment),n=W(),U(i.$$.fragment),s=W(),U(r.$$.fragment),a=W(),U(o.$$.fragment),c=W(),U($.$$.fragment),y=W(),U(p.$$.fragment),g=W(),U(h.$$.fragment)},m(t,l){q(e,t,l),u(t,n,l),q(i,t,l),u(t,s,l),q(r,t,l),u(t,a,l),q(o,t,l),u(t,c,l),q($,t,l),u(t,y,l),q(p,t,l),u(t,g,l),q(h,t,l),k=!0},p(t,e){const n={};2&e&&(n.center=t[1]),1&e&&(n.radius=t[0]),i.$set(n);const s={};2&e&&(s.center=t[1]),64&e&&(s.radius=t[6]),256&e&&(s.angle=t[8]),r.$set(s);const a={};!l&&2&e&&(l=!0,a.point=t[1],st((()=>l=!1))),o.$set(a);const c={};128&e&&(c.transform=t[7]),!d&&16&e&&(d=!0,c.point=t[4],st((()=>d=!1))),$.$set(c);const u={};128&e&&(u.transform=t[7]),!f&&32&e&&(f=!0,u.point=t[5],st((()=>f=!1))),p.$set(u);const y={};4&e&&(y.transform=t[2]),512&e&&(y.constrain=t[9]),!b&&8&e&&(b=!0,y.point=t[3],st((()=>b=!1))),h.$set(y)},i(t){k||(m(e.$$.fragment,t),m(i.$$.fragment,t),m(r.$$.fragment,t),m(o.$$.fragment,t),m($.$$.fragment,t),m(p.$$.fragment,t),m(h.$$.fragment,t),k=!0)},o(t){x(e.$$.fragment,t),x(i.$$.fragment,t),x(r.$$.fragment,t),x(o.$$.fragment,t),x($.$$.fragment,t),x(p.$$.fragment,t),x(h.$$.fragment,t),k=!1},d(t){K(e,t),t&&v(n),K(i,t),t&&v(s),K(r,t),t&&v(a),K(o,t),t&&v(c),K($,t),t&&v(y),K(p,t),t&&v(g),K(h,t)}}}function ee(t){let e,n;return e=new ft({props:{width:"auto",height:"auto",$$slots:{default:[te]},$$scope:{ctx:t}}}),{c(){U(e.$$.fragment)},m(t,i){q(e,t,i),n=!0},p(t,[n]){const i={};33791&n&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function ne(t,e,n){let s,r,{rotationHintRadius:a=4}=e,o=b(0,0),l=k(),c=b(a,0),$=k(),d=b(a-1,0),u=b(0,a-2),y=i(),p=k();return t.$$set=t=>{"rotationHintRadius"in t&&n(0,a=t.rotationHintRadius)},t.$$.update=()=>{6&t.$$.dirty&&n(2,l=Z(l,o)),8&t.$$.dirty&&n(8,s=Math.PI/2-Math.atan2(c[0],c[1])),1280&t.$$.dirty&&n(10,$=_($,s)),112&t.$$.dirty&&n(6,y=S(y,d[0],u[1])),1156&t.$$.dirty&&n(7,p=tt(p,l,$)),1&t.$$.dirty&&n(9,r=t=>et(t,nt(t,t),a))},[a,o,l,c,d,u,y,p,s,r,$,function(t){o=t,n(1,o)},function(t){d=t,n(4,d)},function(t){u=t,n(5,u)},function(t){c=t,n(3,c)}]}class ie extends s{constructor(t){super(),r(this,t,ne,ee,a,{rotationHintRadius:0})}}window.addEventListener("load",(function(){new ie({target:document.getElementById("app")})}));