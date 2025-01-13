import{a as P,t as U}from"./disclose-version.CwbsKFIk.js";import{v as l2,k as W,w as c2,j as v2,C as o2,B as n2,ac as h2,D as f2,E as d2,at as p2,au as C2,F as g2,f as u2,$ as w2,av as b2,I as m2,n as I,aw as _2,p as x2,l as q,t as D,a as y2,c as f,s as c,J,r as h,h as z}from"./runtime.s-S3P415.js";import{a as k2,e as V,s as H2}from"./render.gRTlRlOi.js";import{s as j,h as V2}from"./attributes.DZ4EOMXf.js";import{g as N,s as g,m as F,e as F2,i as M2}from"./Footer.svelte_svelte_type_style_lang.ZDgQbxTq.js";import{i as L2}from"./lifecycle.CCeIttTi.js";import{s as $2,b as L,a as K}from"./store.BD142jjA.js";import{o as Z2}from"./index-client.ihum2Rkx.js";function E2(t,e,s){W&&c2();var r=t,v=h2,a;l2(()=>{v2(v,v=e())&&(a&&o2(a),a=n2(()=>s(r)))}),W&&(r=f2)}const B2=requestAnimationFrame,S2=()=>performance.now(),$={tick:t=>B2(t),now:()=>S2(),tasks:new Set};function Y(t){$.tasks.forEach(e=>{e.c(t)||($.tasks.delete(e),e.f())}),$.tasks.size!==0&&$.tick(Y)}function A2(t){let e;return $.tasks.size===0&&$.tick(Y),{promise:new Promise(s=>{$.tasks.add(e={c:t,f:s})}),abort(){$.tasks.delete(e)}}}function X(t,e){t.dispatchEvent(new CustomEvent(e))}function O2(t){const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function Q(t){const e={},s=t.split(";");for(const r of s){const[v,a]=r.split(":");if(!v||a===void 0)break;const u=O2(v.trim());e[u]=a.trim()}return e}const R2=t=>t;function E(t,e,s,r){var v=(t&_2)!==0,a="in",u,m=e.inert,i,o;function p(){return u??(u=s()(e,(r==null?void 0:r())??{},{direction:a}))}var _={is_global:v,in(){e.inert=m,i==null||i.abort(),X(e,"introstart"),i=e2(e,p(),o,1,()=>{X(e,"introend"),i==null||i.abort(),i=u=void 0})},out(C){{C==null||C(),u=void 0;return}},stop:()=>{i==null||i.abort()}},w=w2;if((w.transitions??(w.transitions=[])).push(_),k2){var d=v;if(!d){for(var l=w.parent;l&&l.f&d2;)for(;(l=l.parent)&&!(l.f&p2););d=!l||(l.f&C2)!==0}d&&g2(()=>{u2(()=>_.in())})}}function e2(t,e,s,r,v){if(b2(e)){var a,u=!1;return m2(()=>{if(!u){var C=e({direction:"in"});a=e2(t,C,s,r,v)}}),{abort:()=>{u=!0,a==null||a.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(!(e!=null&&e.duration))return v(),{abort:I,deactivate:I,reset:I,t:()=>r};const{delay:m=0,css:i,tick:o,easing:p=R2}=e;var _=[];if(o&&o(0,1),i){var w=Q(i(0,1));_.push(w,w)}var d=()=>1-r,l=t.animate(_,{duration:m});return l.onfinish=()=>{var C=1-r,x=r-C,n=e.duration*Math.abs(x),M=[];if(n>0){if(i)for(var H=Math.ceil(n/16.666666666666668),Z=0;Z<=H;Z+=1){var y=C+x*p(Z/H),k=i(y,1-y);M.push(Q(k))}d=()=>{var b=l.currentTime;return C+x*p(b/n)},o&&A2(()=>{if(l.playState!=="running")return!1;var b=d();return o(b,1-b),!0})}l=t.animate(M,{duration:n,fill:"forwards"}),l.onfinish=()=>{d=()=>r,o==null||o(r,1-r),v()}},{abort:()=>{l&&(l.cancel(),l.effect=null)},deactivate:()=>{v=I},reset:()=>{},t:()=>d()}}function T2(t){const e=t-1;return e*e*e+1}function B(t,{delay:e=0,duration:s=400,easing:r=T2,axis:v="y"}={}){const a=getComputedStyle(t),u=+a.opacity,m=v==="y"?"height":"width",i=parseFloat(a[m]),o=v==="y"?["top","bottom"]:["left","right"],p=o.map(n=>`${n[0].toUpperCase()}${n.slice(1)}`),_=parseFloat(a[`padding${p[0]}`]),w=parseFloat(a[`padding${p[1]}`]),d=parseFloat(a[`margin${p[0]}`]),l=parseFloat(a[`margin${p[1]}`]),C=parseFloat(a[`border${p[0]}Width`]),x=parseFloat(a[`border${p[1]}Width`]);return{delay:e,duration:s,easing:r,css:n=>`overflow: hidden;opacity: ${Math.min(n*20,1)*u};${m}: ${n*i}px;padding-${o[0]}: ${n*_}px;padding-${o[1]}: ${n*w}px;margin-${o[0]}: ${n*d}px;margin-${o[1]}: ${n*l}px;border-${o[0]}-width: ${n*C}px;border-${o[1]}-width: ${n*x}px;`}}const I2=""+new URL("../assets/matrix-gif.CFrjL3yg.gif",import.meta.url).href;var N2=U('<li class="hover:bg-gray-500/20 p-2 svelte-1ubhwvs"><a href="/#about" class="hover:first-letter:underline svelte-1ubhwvs"><span class="first-letter svelte-1ubhwvs">A</span>BOUT</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#games"><span class="first-letter svelte-1ubhwvs">G</span>AMES</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#projects"><span class="first-letter svelte-1ubhwvs">P</span>ROJECTS</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/music"><span class="first-letter svelte-1ubhwvs">M</span>USIC</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/blog"><span class="first-letter svelte-1ubhwvs">B</span>LOG</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#connect"><span class="first-letter svelte-1ubhwvs">C</span>ONNECT</a></li>',1),j2=U('<header id="navigation fixed w-full" class="svelte-1ubhwvs"><nav id="navbar" class="flex flex-row w-full text-primary bg-black/80 backdrop-blur-xl text-2xl fixed z-[256] svelte-1ubhwvs"><button>&#9776;</button> <ul><li class="active:bg-primary active:text-black svelte-1ubhwvs"><a href="/#about" class="p-2 hover:first-letter:underline hover:bg-gray-500/20 svelte-1ubhwvs"><span class="first-letter svelte-1ubhwvs">A</span>BOUT</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#games"><span class="first-letter svelte-1ubhwvs">G</span>AMES</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#projects"><span class="first-letter svelte-1ubhwvs">P</span>ROJECTS</a></li> <li class="active:bg-primary active:text-black hidden 2xl:block svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/music"><span class="first-letter svelte-1ubhwvs">M</span>USIC</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/blog"><span class="first-letter svelte-1ubhwvs">B</span>LOG</a></li> <li class="active:bg-primary active:text-black hidden xl:block svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#connect"><span class="first-letter svelte-1ubhwvs">C</span>ONNECT</a></li></ul> <div class="md:px-8 my-auto svelte-1ubhwvs"><a href="/" class="svelte-1ubhwvs">DATAOVERFLOW</a></div></nav></header> <div><img loading="lazy" alt="matrix-bg"> <div class="flex flex-row svelte-1ubhwvs"><button>[ <span class="text-primary svelte-1ubhwvs">X</span> ]</button> <div class="md:px-8 my-auto text-primary svelte-1ubhwvs">DATAOVERFLOW</div></div> <ul class="flex-col md:flex md:flex-row md:gap-8 px-8 md:grow my-auto svelte-1ubhwvs"><!></ul> <div class="flex flex-col-reverse grow p-8 svelte-1ubhwvs"><button class="text-md text-secondary text-left svelte-1ubhwvs"> </button></div></div>',1);function c0(t,e){x2(e,!1);const s=$2(),r=()=>K(F,"$menuState",s),v=()=>K(N,"$graphics",s),a={0:"LOW",1:"MEDIUM",2:"HIGH",3:"ULTRA"};function u(){N.update(y=>y>2?0:y+1)}Z2(()=>{const y=sessionStorage.getItem("graphics");y&&N.set(JSON.parse(y)),N.subscribe(k=>{sessionStorage.setItem("graphics",JSON.stringify(k))})}),L2();var m=j2(),i=q(m),o=f(i),p=f(o),_=c(p,2);J(2),h(o),h(i);var w=c(i,2),d=f(w);j(d,"src",I2);var l=c(d,2),C=f(l);J(2),h(l);var x=c(l,2),n=f(x);E2(n,r,y=>{var k=N2(),b=q(k),S=f(b);h(b);var A=c(b,2),a2=f(A);h(A);var O=c(A,2),t2=f(O);h(O);var R=c(O,2),s2=f(R);h(R);var T=c(R,2),r2=f(T);h(T);var G=c(T,2),i2=f(G);h(G),E(1,b,()=>B,()=>({duration:300})),V("click",S,()=>{L(F,!1)}),E(1,A,()=>B,()=>({duration:300,delay:100})),V("click",a2,()=>{L(F,!1)}),E(1,O,()=>B,()=>({duration:300,delay:200})),V("click",t2,()=>{L(F,!1)}),E(1,R,()=>B,()=>({duration:300,delay:300})),V("click",s2,()=>{L(F,!1)}),E(1,T,()=>B,()=>({duration:300,delay:400})),V("click",r2,()=>{L(F,!1)}),E(1,G,()=>B,()=>({duration:300,delay:500})),V("click",i2,()=>{L(F,!1)}),P(y,k)}),h(x);var M=c(x,2),H=f(M),Z=f(H);h(H),h(M),h(w),D(()=>{g(p,`p-4 block md:hidden transition-all ${(r()?"rotate-90":"rotate-0")??""} svelte-1ubhwvs`),g(_,`flex-col ${r(),"hidden"} md:flex md:flex-row md:gap-8 px-8 md:grow my-auto svelte-1ubhwvs`),g(w,`fixed ${(v()>=1?v()>=2?"bg-black/50 backdrop-blur-md":"bg-black/90":"bg-black")??""} text-2xl w-full h-[100dvh] z-[300] flex flex-col ${(r()?"":"hidden")??""} svelte-1ubhwvs`),g(d,`fixed bottom-0 top-0 h-full -z-30 opacity-20 ${(v()>=2?"":"hidden")??""} svelte-1ubhwvs`),g(C,`p-4 block md:hidden ${(r()?"rotate-0":"rotate-90")??""} svelte-1ubhwvs`),H2(Z,`GRAPHICS: ${a[v()]??""}`)}),V("click",p,()=>{L(F,!0)}),V2(d),V("click",C,()=>{L(F,!1)}),V("click",H,u),P(t,m),y2()}const P2="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_b_5_19)'%3e%3cpath%20d='M54.5244%2054.5387H45.0489V39.6871C45.0489%2036.1458%2044.9778%2031.5876%2040.1067%2031.5876C35.168%2031.5876%2034.4142%2035.4418%2034.4142%2039.4276V54.5387H24.9351V24H34.0373V28.16H34.1618C35.4347%2025.7636%2038.528%2023.2284%2043.1502%2023.2284C52.7502%2023.2284%2054.528%2029.5502%2054.528%2037.7742V54.5387H54.5244ZM14.2329%2019.8222C13.5095%2019.8232%2012.7931%2019.6813%2012.1247%2019.4048C11.4562%2019.1283%2010.849%2018.7226%2010.3376%2018.211C9.8263%2017.6993%209.42099%2017.0918%209.14493%2016.4232C8.86887%2015.7545%208.72748%2015.038%208.72889%2014.3147C8.72959%2013.2261%209.05308%2012.1621%209.65846%2011.2574C10.2638%2010.3527%2011.1239%209.64777%2012.1299%209.23183C13.1359%208.8159%2014.2426%208.70761%2015.3102%208.92068C16.3777%209.13374%2017.3581%209.65858%2018.1273%2010.4288C18.8966%2011.1991%2019.4201%2012.1801%2019.6318%2013.2479C19.8435%2014.3157%2019.7338%2015.4223%2019.3166%2016.4278C18.8993%2017.4333%2018.1933%2018.2924%2017.2878%2018.8966C16.3823%2019.5008%2015.3215%2019.8229%2014.2329%2019.8222ZM18.9831%2054.5387H9.47911V24H18.9867V54.5387H18.9831ZM59.2711%200H4.72533C2.10844%200%200%202.06222%200%204.61156V59.3884C0%2061.9378%202.112%2064%204.72178%2064H59.2569C61.8667%2064%2064%2061.9378%2064%2059.3884V4.61156C64%202.06222%2061.8667%200%2059.2569%200H59.2711Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_b_5_19'%20x='-8'%20y='-8'%20width='80'%20height='80'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeGaussianBlur%20in='BackgroundImageFix'%20stdDeviation='4'/%3e%3cfeComposite%20in2='SourceAlpha'%20operator='in'%20result='effect1_backgroundBlur_5_19'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_backgroundBlur_5_19'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",U2="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32%200C14.32%200%200%2014.32%200%2032C0%2046.16%209.16%2058.12%2021.88%2062.36C23.48%2062.64%2024.08%2061.68%2024.08%2060.84C24.08%2060.08%2024.04%2057.56%2024.04%2054.88C16%2056.36%2013.92%2052.92%2013.28%2051.12C12.92%2050.2%2011.36%2047.36%2010%2046.6C8.88%2046%207.28%2044.52%209.96%2044.48C12.48%2044.44%2014.28%2046.8%2014.88%2047.76C17.76%2052.6%2022.36%2051.24%2024.2%2050.4C24.48%2048.32%2025.32%2046.92%2026.24%2046.12C19.12%2045.32%2011.68%2042.56%2011.68%2030.32C11.68%2026.84%2012.92%2023.96%2014.96%2021.72C14.64%2020.92%2013.52%2017.64%2015.28%2013.24C15.28%2013.24%2017.96%2012.4%2024.08%2016.52C26.64%2015.8%2029.36%2015.44%2032.08%2015.44C34.8%2015.44%2037.52%2015.8%2040.08%2016.52C46.2%2012.36%2048.88%2013.24%2048.88%2013.24C50.64%2017.64%2049.52%2020.92%2049.2%2021.72C51.24%2023.96%2052.48%2026.8%2052.48%2030.32C52.48%2042.6%2045%2045.32%2037.88%2046.12C39.04%2047.12%2040.04%2049.04%2040.04%2052.04C40.04%2056.32%2040%2059.76%2040%2060.84C40%2061.68%2040.6%2062.68%2042.2%2062.36C48.5529%2060.216%2054.0734%2056.1334%2057.9841%2050.687C61.8948%2045.2407%2063.9989%2038.705%2064%2032C64%2014.32%2049.68%200%2032%200Z'%20fill='white'/%3e%3c/svg%3e",G2="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_553_12)'%3e%3cpath%20d='M18.56%200H45.44C55.68%200%2064%208.32%2064%2018.56V45.44C64%2050.3624%2062.0446%2055.0832%2058.5639%2058.5639C55.0832%2062.0446%2050.3624%2064%2045.44%2064H18.56C8.32%2064%200%2055.68%200%2045.44V18.56C0%2013.6376%201.95542%208.91677%205.4361%205.4361C8.91677%201.95542%2013.6376%200%2018.56%200ZM17.92%206.4C14.8647%206.4%2011.9345%207.61371%209.77413%209.77413C7.61371%2011.9345%206.4%2014.8647%206.4%2017.92V46.08C6.4%2052.448%2011.552%2057.6%2017.92%2057.6H46.08C49.1353%2057.6%2052.0655%2056.3863%2054.2259%2054.2259C56.3863%2052.0655%2057.6%2049.1353%2057.6%2046.08V17.92C57.6%2011.552%2052.448%206.4%2046.08%206.4H17.92ZM48.8%2011.2C49.8609%2011.2%2050.8783%2011.6214%2051.6284%2012.3716C52.3786%2013.1217%2052.8%2014.1391%2052.8%2015.2C52.8%2016.2609%2052.3786%2017.2783%2051.6284%2018.0284C50.8783%2018.7786%2049.8609%2019.2%2048.8%2019.2C47.7391%2019.2%2046.7217%2018.7786%2045.9716%2018.0284C45.2214%2017.2783%2044.8%2016.2609%2044.8%2015.2C44.8%2014.1391%2045.2214%2013.1217%2045.9716%2012.3716C46.7217%2011.6214%2047.7391%2011.2%2048.8%2011.2ZM32%2016C36.2435%2016%2040.3131%2017.6857%2043.3137%2020.6863C46.3143%2023.6869%2048%2027.7565%2048%2032C48%2036.2435%2046.3143%2040.3131%2043.3137%2043.3137C40.3131%2046.3143%2036.2435%2048%2032%2048C27.7565%2048%2023.6869%2046.3143%2020.6863%2043.3137C17.6857%2040.3131%2016%2036.2435%2016%2032C16%2027.7565%2017.6857%2023.6869%2020.6863%2020.6863C23.6869%2017.6857%2027.7565%2016%2032%2016ZM32%2022.4C29.4539%2022.4%2027.0121%2023.4114%2025.2118%2025.2118C23.4114%2027.0121%2022.4%2029.4539%2022.4%2032C22.4%2034.5461%2023.4114%2036.9879%2025.2118%2038.7882C27.0121%2040.5886%2029.4539%2041.6%2032%2041.6C34.5461%2041.6%2036.9879%2040.5886%2038.7882%2038.7882C40.5886%2036.9879%2041.6%2034.5461%2041.6%2032C41.6%2029.4539%2040.5886%2027.0121%2038.7882%2025.2118C36.9879%2023.4114%2034.5461%2022.4%2032%2022.4Z'%20fill='%23F8F8F8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_553_12'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",z2="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_553_16)'%3e%3cpath%20d='M8.344%203.57399C5.552%205.22999%200.054%2011.542%200%2013.198V15.948C0%2019.418%203.25%2022.482%206.198%2022.482C9.74%2022.482%2012.7%2019.544%2012.7%2016.056C12.7%2019.544%2015.542%2022.482%2019.094%2022.482C22.636%2022.482%2025.396%2019.544%2025.396%2016.056C25.396%2019.544%2028.428%2022.482%2031.97%2022.482H32.034C35.586%2022.482%2038.616%2019.544%2038.616%2016.056C38.616%2019.544%2041.378%2022.482%2044.92%2022.482C48.462%2022.482%2051.314%2019.544%2051.314%2016.056C51.314%2019.544%2054.264%2022.482%2057.804%2022.482C60.762%2022.482%2064.012%2019.418%2064.012%2015.948V13.198C63.948%2011.542%2058.46%205.22999%2055.658%203.57399C46.98%203.26199%2040.97%203.20799%2032.012%203.20799C23.044%203.21799%2010.826%203.35399%208.356%203.57399H8.344ZM25.354%2020.842C25.013%2021.4285%2024.5923%2021.965%2024.104%2022.436V22.446C22.7128%2023.8008%2020.8479%2024.5593%2018.906%2024.56C16.961%2024.5636%2015.093%2023.7996%2013.708%2022.434C13.2336%2021.9705%2012.8293%2021.4402%2012.508%2020.86C12.174%2021.454%2011.708%2021.964%2011.218%2022.434C9.83079%2023.7963%207.96429%2024.5597%206.02%2024.56H6.01C5.77085%2024.5503%205.53497%2024.501%205.312%2024.414C5.06886%2027.0325%204.91943%2029.6588%204.864%2032.288V32.298C4.854%2033.352%204.854%2034.204%204.842%2035.402C4.906%2041.632%204.228%2055.58%207.594%2059.008C12.802%2060.216%2022.386%2060.768%2031.988%2060.778H31.998C41.612%2060.768%2051.184%2060.216%2056.392%2059.008C59.758%2055.582%2059.08%2041.632%2059.144%2035.402C59.134%2034.204%2059.134%2033.352%2059.122%2032.298V32.288C59.0716%2029.6586%2058.9222%2027.0321%2058.674%2024.414C58.4513%2024.502%2058.2153%2024.5514%2057.976%2024.56H57.966C56.0217%2024.5597%2054.1552%2023.7963%2052.768%2022.434H52.778C52.288%2021.964%2051.82%2021.456%2051.488%2020.86H51.478C51.1597%2021.4396%2050.7588%2021.9698%2050.288%2022.434C48.9006%2023.7959%2047.0341%2024.559%2045.09%2024.559C43.1459%2024.559%2041.2794%2023.7959%2039.892%2022.434C39.4112%2021.9687%2038.9972%2021.439%2038.662%2020.86L38.64%2020.828C38.296%2021.444%2037.88%2021.974%2037.41%2022.434C36.0228%2023.7963%2034.1563%2024.5597%2032.212%2024.56H32.202C32.14%2024.56%2032.066%2024.56%2031.994%2024.55C31.922%2024.56%2031.848%2024.56%2031.776%2024.56H31.766C29.8248%2024.562%2027.9612%2023.798%2026.58%2022.434C26.0994%2021.9716%2025.689%2021.4413%2025.362%2020.86L25.34%2020.828L25.354%2020.842ZM20.01%2027.75C22.124%2027.76%2024%2027.75%2026.332%2030.292C28.164%2030.106%2030.082%2030.012%2031.998%2030.012C33.914%2030.012%2035.832%2030.106%2037.664%2030.292C39.998%2027.75%2041.872%2027.75%2043.986%2027.75H43.996C44.996%2027.75%2048.996%2027.75%2051.778%2035.574L54.768%2046.312C56.986%2054.302%2054.058%2054.502%2050.414%2054.502C44.998%2054.302%2041.998%2050.366%2041.998%2046.428C38.998%2046.93%2035.496%2047.17%2031.998%2047.17C28.5%2047.17%2024.998%2046.93%2022.008%2046.428C22.008%2050.366%2019.008%2054.302%2013.592%2054.502C9.936%2054.492%207.008%2054.302%209.226%2046.312L12.216%2035.574C15.008%2027.75%2019.008%2027.75%2020.008%2027.75H20.01ZM32%2033.906C31.99%2033.906%2026.302%2039.146%2025.272%2041L29%2040.854V44.104C29%2044.262%2030.502%2044.198%2032%2044.126C33.498%2044.198%2034.99%2044.262%2034.99%2044.104V40.854L38.728%2041C37.698%2039.146%2032%2033.906%2032%2033.906Z'%20fill='%23F8F8F8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_553_16'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",D2="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M50%2048.6667V22H23.3333V20.3333C23.3333%2017.576%2025.576%2015.3333%2028.3333%2015.3333H33.3333V5.33334H28.3333C24.3566%205.33828%2020.5441%206.92021%2017.7321%209.73219C14.9202%2012.5442%2013.3382%2016.3566%2013.3333%2020.3333V22H6.66663V32H13.3333V48.6667H6.66663V58.6667H30V48.6667H23.3333V32H40.0933V48.6667H33.3333V58.6667H56.6666V48.6667H50Z'%20fill='%23F8F8F8'/%3e%3cpath%20d='M45%2015.3333C47.7614%2015.3333%2050%2013.0948%2050%2010.3333C50%207.57191%2047.7614%205.33334%2045%205.33334C42.2386%205.33334%2040%207.57191%2040%2010.3333C40%2013.0948%2042.2386%2015.3333%2045%2015.3333Z'%20fill='%23F8F8F8'/%3e%3c/svg%3e",J2="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.72%2021.3745V45.0255H56.2036C61.5855%2044.6473%2064%2041.3309%2064%2037.2582C64%2032.9527%2060.7418%2029.4909%2056.3782%2029.4909C55.2727%2029.4909%2054.3418%2029.7236%2053.3818%2030.1309C52.6836%2023.3236%2046.8945%2018%2039.7673%2018C36.3636%2018%2033.1345%2019.28%2030.72%2021.3745ZM28.16%2024.3418C27.2873%2023.8182%2026.3564%2023.4109%2025.3382%2023.2073V45.0255H29.3818V22.7418C28.9455%2023.2073%2028.5382%2023.7891%2028.16%2024.3418ZM21.3236%2022.7709V45.0255H24V22.8582C23.4473%2022.7709%2022.8945%2022.7418%2022.3127%2022.7418C21.9636%2022.7418%2021.6436%2022.7418%2021.3236%2022.7709ZM16%2024.6618V45.0255H18.6473V23.3236C17.6873%2023.6436%2016.7855%2024.1091%2016%2024.6618ZM11.1418%2031.9345C10.9673%2031.9345%2010.7927%2031.76%2010.5891%2031.6727V45.0255H13.2655V27.1636C12.1891%2028.56%2011.4618%2030.2182%2011.1418%2031.9345ZM5.20727%2031.12V44.7636C5.81818%2044.9382%206.51636%2045.0255%207.27273%2045.0255H7.91273V30.8873C7.68%2030.8582%207.44727%2030.8291%207.27273%2030.8291C6.51636%2030.8291%205.81818%2030.9455%205.20727%2031.12ZM0%2037.9273C0%2040.1091%200.989091%2042.0291%202.53091%2043.3382V32.5455C0.989091%2033.8255%200%2035.7745%200%2037.9273Z'%20fill='%23F8F8F8'/%3e%3c/svg%3e",W2="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_553_8)'%3e%3cpath%20d='M32%200C14.336%200%200%2014.336%200%2032C0%2049.664%2014.336%2064%2032%2064C49.664%2064%2064%2049.664%2064%2032C64%2014.336%2049.664%200%2032%200ZM46.848%2021.76C46.368%2026.816%2044.288%2039.104%2043.232%2044.768C42.784%2047.168%2041.888%2047.968%2041.056%2048.064C39.2%2048.224%2037.792%2046.848%2036%2045.664C33.184%2043.808%2031.584%2042.656%2028.864%2040.864C25.696%2038.784%2027.744%2037.632%2029.568%2035.776C30.048%2035.296%2038.24%2027.84%2038.4%2027.168C38.4222%2027.0662%2038.4193%2026.9606%2038.3914%2026.8602C38.3635%2026.7598%2038.3115%2026.6677%2038.24%2026.592C38.048%2026.432%2037.792%2026.496%2037.568%2026.528C37.28%2026.592%2032.8%2029.568%2024.064%2035.456C22.784%2036.32%2021.632%2036.768%2020.608%2036.736C19.456%2036.704%2017.28%2036.096%2015.648%2035.552C13.632%2034.912%2012.064%2034.56%2012.192%2033.44C12.256%2032.864%2013.056%2032.288%2014.56%2031.68C23.904%2027.616%2030.112%2024.928%2033.216%2023.648C42.112%2019.936%2043.936%2019.296%2045.152%2019.296C45.408%2019.296%2046.016%2019.36%2046.4%2019.68C46.72%2019.936%2046.816%2020.288%2046.848%2020.544C46.816%2020.736%2046.88%2021.312%2046.848%2021.76Z'%20fill='%23F8F8F8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_553_8'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",q2="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_552_2)'%3e%3cpath%20d='M9.14286%200C4.1%200%200%204.1%200%209.14286V54.8571C0%2059.9%204.1%2064%209.14286%2064H54.8571C59.9%2064%2064%2059.9%2064%2054.8571V9.14286C64%204.1%2059.9%200%2054.8571%200H9.14286ZM51.5857%2012L36.7571%2028.9429L54.2%2052H40.5429L29.8571%2038.0143L17.6143%2052H10.8286L26.6857%2033.8714L9.95714%2012H23.9571L33.6286%2024.7857L44.8%2012H51.5857ZM46.1857%2047.9429L21.9143%2015.8429H17.8714L42.4143%2047.9429H46.1714H46.1857Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_552_2'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",K2="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.6%2042L42.208%2032.4L25.6%2022.8V42ZM62.592%2016.944C63.008%2018.448%2063.296%2020.464%2063.488%2023.024C63.712%2025.584%2063.808%2027.792%2063.808%2029.712L64%2032.4C64%2039.408%2063.488%2044.56%2062.592%2047.856C61.792%2050.736%2059.936%2052.592%2057.056%2053.392C55.552%2053.808%2052.8%2054.096%2048.576%2054.288C44.416%2054.512%2040.608%2054.608%2037.088%2054.608L32%2054.8C18.592%2054.8%2010.24%2054.288%206.944%2053.392C4.064%2052.592%202.208%2050.736%201.408%2047.856C0.992%2046.352%200.704%2044.336%200.512%2041.776C0.288%2039.216%200.192%2037.008%200.192%2035.088L0%2032.4C0%2025.392%200.512%2020.24%201.408%2016.944C2.208%2014.064%204.064%2012.208%206.944%2011.408C8.448%2010.992%2011.2%2010.704%2015.424%2010.512C19.584%2010.288%2023.392%2010.192%2026.912%2010.192L32%2010C45.408%2010%2053.76%2010.512%2057.056%2011.408C59.936%2012.208%2061.792%2014.064%2062.592%2016.944Z'%20fill='%23F8F8F8'/%3e%3c/svg%3e";var X2=U('<a class="w-8 h-8 md:w-6 md:h-6" target="_blank" rel="noreferrer"><img class="fill-black svelte-ftglgi"></a>'),Q2=U('<footer id="connect" class="bg-[#0000B0] flex flex-col p-10 lg:pr-32 text-2xl lg:gap-0 gap-10"><div class="flex flex-col md:flex-wrap md:flex-row justify-between gap-8 lg:gap-0 text-center lg:text-left"><div class="flex flex-col lg:w-1/4 w-full text-left"><div class="text-4xl">DATAOVERFLOW</div> <div class="flex flex-row flex-wrap gap-4 lg:gap-2"></div></div> <div class="flex flex-col"><div class="text-white/80">LEVEL SELECT</div> <a href="/#about">About</a> <a href="/#games">Games</a> <a href="/#projects">Projects</a> <a href="/music">Music</a> <a href="/blog">Blog</a></div> <div class="flex flex-col"><div class="text-white/80">RESOURCES</div> <a target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/1OkTRtbzJCZRIzMU_4zev6jRgl67bUtxe/edit?usp=sharing&amp;ouid=102067098286536378623&amp;rtpof=true&amp;sd=true">Brochure</a> <a target="_blank" rel="noreferrer" href="https://flowcv.com/resume/pjasuoi5b2">Resume</a></div> <div class="flex flex-col"><div class="text-white/80">ARCHIVE</div> <a target="_blank" rel="noreferrer" href="https://data-overflow.github.io/archive/2023">2023</a> <a target="_blank" rel="noreferrer" href="https://data-overflow.github.io/archive/2022">2022</a> <a target="_blank" rel="noreferrer" href="https://data-overflow.github.io/archive/2021">2021</a> <a target="_blank" rel="noreferrer" href="https://data-overflow.github.io/archive/2020">2020</a></div></div> <div class="text-center lg:text-left">Made with <span class="text-secondary">&lt;3</span> by Kavirajar B</div></footer>');function v0(t){const e=[[P2,"https://in.linkedin.com/in/kavirajar"],[U2,"https://github.com/data-overflow"],[q2,"https://twitter.com/kvrjr"],[W2,"https://t.me/kvrjr"],[D2,"https://www.fiverr.com/dataoverflow/"],[G2,"https://instagram.com/data.overflow"],[z2,"https://dataoverflow.itch.io"],[J2,"https://soundcloud.com/data-overflow"],[K2,"https://www.youtube.com/@kavirajar"]],s={a:"hover:underline active:text-secondary"};var r=Q2(),v=f(r),a=f(v),u=c(f(a),2);F2(u,5,()=>e,M2,(y,k)=>{var b=X2(),S=f(b);h(b),D(()=>{j(b,"href",z(k)[1]),j(S,"src",z(k)[0]),j(S,"alt",z(k)[1])}),P(y,b)}),h(u),h(a);var m=c(a,2),i=c(f(m),2),o=c(i,2),p=c(o,2),_=c(p,2),w=c(_,2);h(m);var d=c(m,2),l=c(f(d),2),C=c(l,2);h(d);var x=c(d,2),n=c(f(x),2),M=c(n,2),H=c(M,2),Z=c(H,2);h(x),h(v),J(2),h(r),D(()=>{g(i,s.a),g(o,s.a),g(p,s.a),g(_,s.a),g(w,s.a),g(l,s.a),g(C,s.a),g(n,s.a),g(M,s.a),g(H,s.a),g(Z,s.a)}),P(t,r)}export{v0 as F,c0 as N};
