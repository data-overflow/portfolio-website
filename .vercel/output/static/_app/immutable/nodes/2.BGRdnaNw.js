import{a as y,t as x}from"../chunks/disclose-version.C0ON5NiS.js";import{p as h,a as _,c as n,s as e,r as o}from"../chunks/runtime.CdhxA4nL.js";import{o as I}from"../chunks/index-client.BXlL_vRa.js";import{g as b}from"../chunks/Footer.svelte_svelte_type_style_lang.BFfM1Rlb.js";import"../chunks/legacy.D3CvSoT7.js";import{H as B,R as k,G as S,P as E,a as w,A as j}from"../chunks/aos.D2LCBIoN.js";async function O({fetch:i}){const a=await i("/api/rss"),t=await a.json();return a.ok?{news:t,success:!0}:{error:"Failed to load RSS feed",success:!1}}const D=Object.freeze(Object.defineProperty({__proto__:null,load:O},Symbol.toStringTag,{value:"Module"}));var A=x('<div><!> <div id="about" class="flex flex-col bg-black md:py-10 2xl:p-10 py-16 gap-20"><div class="flex flex-col md:flex-row gap-8 p-6 md:px-10 xl:px-32"><div class="text-secondary text-6xl w-[50%]" data-aos="fade">ABOUT</div> <p class="whitespace-pre-line text-sm text-doswhite apple" data-aos="fade"> <a class="text-primary" href="#games">video games</a> </p></div> <!></div> <!> <!>  <!></div>');function F(i,a){h(a,!0),I(()=>{j.init(),b.subscribe(s=>{console.log("graphics toggled",s),s<2?(document.getElementById("terminal").style.display="none",document.getElementById("flicker").style.display="none",document.getElementById("noise").classList.remove("noise")):(document.getElementById("terminal").style.display="unset",document.getElementById("flicker").style.display="unset"),s<1?document.getElementById("tv").style.display="none":document.getElementById("tv").style.display="unset",s>2&&document.getElementById("noise").classList.add("noise")})});var t=A(),l=n(t);B(l,{get rss(){return a.data}});var r=e(l,2),d=n(r),c=e(n(d),2),m=n(c);m.nodeValue="Hi, I'm Kavi, a final year student pursuing my B. Tech in AI & Data Science. I have been making ";var u=e(m,2);u.nodeValue=` from the age of 14, an experience that gave me strong foundations in computer science and design.
				
				Some quick stats:
					- Worked on 10+ video games
					- Finalist in 3+ national level hackathons
					- Served 5+ freelancing clients, charging 30k-2L INR per project
					- Solved 450+ problems on leetcode`,o(c),o(d);var v=e(d,2);k(v,{}),o(r);var p=e(r,2);S(p,{});var g=e(p,2);E(g,{});var f=e(g,2);w(f,{}),o(t),y(i,t),_()}export{F as component,D as universal};