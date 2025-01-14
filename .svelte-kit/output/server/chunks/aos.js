import { Z as fallback, Y as ensure_array_like, _ as bind_props, V as stringify, R as pop, P as push } from "./index.js";
import { l as linkedin, g as github, x } from "./Footer.svelte_svelte_type_style_lang.js";
import { a as attr, c as clsx } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
const whatsapp = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_590_4)'%3e%3cpath%20d='M54.404%209.30422C51.4704%206.34221%2047.9764%203.994%2044.1257%202.3966C40.275%200.799188%2036.1448%20-0.0154433%2031.976%200.0002217C14.508%200.0002217%200.272%2014.2322%200.256%2031.7042C0.256%2037.3002%201.72%2042.7442%204.484%2047.5642L0%2064.0002L16.816%2059.5922C21.4659%2062.1292%2026.679%2063.4565%2031.976%2063.4522H31.992C49.464%2063.4522%2063.696%2049.2202%2063.712%2031.7322C63.7156%2027.5645%2062.8946%2023.4372%2061.2965%2019.588C59.6983%2015.7388%2057.3585%2012.2438%2054.404%209.30422ZM31.976%2058.0842C27.2527%2058.0805%2022.6169%2056.8097%2018.552%2054.4042L17.592%2053.8282L7.616%2056.4442L10.28%2046.7122L9.656%2045.7082C7.01523%2041.5095%205.61859%2036.6483%205.628%2031.6882C5.628%2017.1842%2017.456%205.35222%2031.992%205.35222C35.455%205.34601%2038.8849%206.02532%2042.0841%207.35099C45.2833%208.67666%2048.1884%2010.6225%2050.632%2013.0762C53.0836%2015.5208%2055.0272%2018.4264%2056.3508%2021.6255C57.6744%2024.8247%2058.3518%2028.2541%2058.344%2031.7162C58.328%2046.2722%2046.5%2058.0842%2031.976%2058.0842ZM46.436%2038.3482C45.648%2037.9522%2041.756%2036.0362%2041.024%2035.7642C40.296%2035.5042%2039.764%2035.3682%2039.244%2036.1602C38.712%2036.9482%2037.192%2038.7442%2036.736%2039.2602C36.28%2039.7922%2035.808%2039.8522%2035.016%2039.4602C34.228%2039.0602%2031.672%2038.2282%2028.648%2035.5202C26.288%2033.4202%2024.708%2030.8202%2024.236%2030.0322C23.78%2029.2402%2024.192%2028.8162%2024.588%2028.4202C24.936%2028.0682%2025.376%2027.4922%2025.772%2027.0362C26.172%2026.5802%2026.304%2026.2442%2026.564%2025.7162C26.824%2025.1802%2026.7%2024.7242%2026.504%2024.3282C26.304%2023.9322%2024.724%2020.0242%2024.056%2018.4482C23.416%2016.8922%2022.764%2017.1082%2022.276%2017.0882C21.82%2017.0602%2021.288%2017.0602%2020.756%2017.0602C20.3543%2017.0704%2019.959%2017.1635%2019.5949%2017.3335C19.2308%2017.5035%2018.9057%2017.7468%2018.64%2018.0482C17.912%2018.8402%2015.876%2020.7562%2015.876%2024.6642C15.876%2028.5722%2018.716%2032.3282%2019.116%2032.8602C19.508%2033.3922%2024.692%2041.3882%2032.648%2044.8282C34.528%2045.6482%2036.008%2046.1322%2037.164%2046.5002C39.064%2047.1082%2040.78%2047.0162%2042.148%2046.8202C43.668%2046.5882%2046.832%2044.9002%2047.5%2043.0482C48.156%2041.1922%2048.156%2039.6082%2047.956%2039.2762C47.76%2038.9402%2047.228%2038.7442%2046.436%2038.3482Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_590_4'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
function SocialIcons($$payload, $$props) {
  let opacity = fallback($$props["opacity"], 50);
  let useSmallerIcons = fallback($$props["useSmallerIcons"], false);
  const icons = [
    [
      linkedin,
      "https://www.linkedin.com/in/kavirajar"
    ],
    [github, "https://github.com/data-overflow"],
    [x, "https://x.com/kvrjr"],
    // [instagram, 'https://www.instagram.com/data.overflow/'],
    [whatsapp, "https://wa.me/917695901087"]
  ];
  const each_array = ensure_array_like(icons);
  $$payload.out += `<div class="flex flex-row flex-wrap gap-3"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let icon = each_array[$$index];
    $$payload.out += `<a${attr("style", `opacity: ${stringify(opacity)}%;`)}${attr("class", `${stringify(useSmallerIcons ? "w-5 h-5" : "w-8 h-8 md:w-6 md:h-6")} hover:!opacity-80`)}${attr("href", icon[1])} target="_blank" rel="noreferrer"><img class="brightness-0 dark:brightness-100"${attr("src", icon[0])}${attr("alt", icon[1])}></a>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { opacity, useSmallerIcons });
}
function Home($$payload, $$props) {
  push();
  let { rss } = $$props;
  $$payload.out += `<div${attr("class", `absolute bg-black/50 backdrop-blur px-2 transition-opacity ${stringify("opacity-0")} svelte-1fpx7my`)}>That's me working on the next big thing!</div> <div id="home" class="h-full w-full flex pb-16 md:p-0 md:items-center items-end svelte-1fpx7my"><div class="flex flex-col gap-2 w-full z-10 svelte-1fpx7my"><div class="flex items-end text-4xl md:text-6xl md:w-[60%] px-6 md:px-10 xl:px-32 font-bold switzer h-40 align-text-bottom svelte-1fpx7my">This is me, Kavirajar B</div> <div class="flex flex-col gap-0 svelte-1fpx7my"><div class="text-2xl md:text-3xl text-doswhite switzer px-6 md:px-10 xl:px-32 svelte-1fpx7my">Distrupting the Ordinary, Building for a Better World</div></div> <div class="h-fit px-6 md:px-10 xl:px-32 svelte-1fpx7my">`;
  SocialIcons($$payload, { opacity: 50 });
  $$payload.out += `<!----></div> <div class="flex flex-row gap-4 items-center px-6 md:px-10 xl:px-32 text-xl md:text-2xl mt-8 bg-transparent svelte-1fpx7my"><a class="p-2 px-6 border-2 hover:bg-white rounded-sm hover:text-black z-100 svelte-1fpx7my" href="https://flowcv.com/resume/pjasuoi5b2" target="_blank">View Resume</a></div></div> <div role="presentation" class="bg-black/0 right-[15%] top-[50%] md:absolute w-64 h-96 hidden md:block svelte-1fpx7my"></div></div> `;
  if (rss && rss.success) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(rss.news);
    const each_array_1 = ensure_array_like(rss.news);
    $$payload.out += `<div class="overflow-x-hidden flex h-hit relative -mt-4 bg-white text-black jersey font-bold text-xl svelte-1fpx7my"><div class="animate-marquee whitespace-nowrap h-fit w-fit svelte-1fpx7my"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let news = each_array[$$index];
      $$payload.out += `<span class="mx-4 min-h-fit svelte-1fpx7my">${escape_html(news.toUpperCase())}</span>`;
    }
    $$payload.out += `<!--]--></div> <div class="animate-marquee2 whitespace-nowrap h-fit absolute w-fit svelte-1fpx7my"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let news = each_array_1[$$index_1];
      $$payload.out += `<span class="mx-4 min-h-fit svelte-1fpx7my">${escape_html(news.toUpperCase())}</span>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
const arrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAGRJREFUWIXtlkEKwCAMBK34/y/Xi4ciBDdRGoQZ8LbCZlSwFADY5x0rRD1Y5HfmyUMmrjSwmtRl4ioD3jOW8ukGHiFjTWHtdeXTDTQhMzdX74FiN98ABSigvAKL8B/gS7oBAIAOMkQSEhmoDtUAAAAASUVORK5CYII=";
const cognizant = "/_app/immutable/assets/cognizant.Dm5Hl-7U.png";
const fiverr = "/_app/immutable/assets/fiverr.Cjn4SrRP.png";
const teachafy = "/_app/immutable/assets/teachafy.0phtI4wM.png";
function Resume($$payload) {
  $$payload.out += `<div id="apple-bg" class="flex flex-col gap-2 justify-center bg-white h-fit w-full svelte-1q6rcg1"><div class="bg-doswhite h-fit xl:h-[100vh] 3xl:h-[90vh] w-[98%] md:w-[90%] xl:w-[80%] mt-4 mb-4 mx-auto border-2 border-black svelte-1q6rcg1"><div class="flex flex-col items-center apple svelte-1q6rcg1"><div class="flex flex-row justify-between w-full svelte-1q6rcg1"><div class="relative z-[10] border-x-4 top-[4px] left-[20px] border-doswhite svelte-1q6rcg1"><div class="border-2 border-black w-6 h-6 bg-doswhite svelte-1q6rcg1"></div></div> <div class="relative text-center px-2 top-[4px] z-[100] text-black bg-doswhite w-fit m-auto svelte-1q6rcg1">Resume.exe</div></div> <div class="relative top-[-24px] flex flex-col w-full svelte-1q6rcg1"><div class="mt-1 border-t-2 border-black mx-2 svelte-1q6rcg1"></div> <div class="mt-1 border-t-2 border-black mx-2 svelte-1q6rcg1"></div> <div class="mt-1 border-t-2 border-black mx-2 svelte-1q6rcg1"></div> <div class="mt-1 border-t-2 border-black mx-2 svelte-1q6rcg1"></div> <div class="mt-1 border-t-2 border-black mx-2 svelte-1q6rcg1"></div> <div class="mt-1 border-t-2 border-black svelte-1q6rcg1"></div></div></div> <div class="flex flex-col lg:flex-row h-fit apple text-black p-4 md:p-8 gap-8 svelte-1q6rcg1"><div class="flex flex-col gap-1 sticky min-w-[30%] md:relative top-10 h-fit overflow-hidden z-50 bg-doswhite border-4 border-doswhite text-sm md:text-base svelte-1q6rcg1"><div class="svelte-1q6rcg1">Disk: /C</div> <div class="flex flex-col md:flex-row w-full svelte-1q6rcg1"><div class="border-2 border-black w-full svelte-1q6rcg1"><ul class="grid grid-cols-2 text-xs md:text-base md:flex md:flex-col svelte-1q6rcg1"><li${attr("class", `border-b-2 border-transparent hover:border-black ${stringify("")} svelte-1q6rcg1`)}><button class="p-2 md:p-1 w-full text-left svelte-1q6rcg1">Education</button></li> <li${attr("class", `border-y-2 border-transparent hover:border-black ${stringify("bg-black text-doswhite")} svelte-1q6rcg1`)}><button class="p-2 md:p-1 w-full text-left svelte-1q6rcg1">Experience</button></li> <li${attr("class", `border-y-2 border-transparent hover:border-black ${stringify("")} svelte-1q6rcg1`)}><button class="p-2 md:p-1 w-full text-left svelte-1q6rcg1">Extracurricular</button></li> <li${attr("class", `border-y-2 border-transparent hover:border-black ${stringify("")} svelte-1q6rcg1`)}><button class="p-2 md:p-1 w-full text-left svelte-1q6rcg1">Skills</button></li> <li${attr("class", `border-t-2 border-transparent hover:border-black ${stringify("")} svelte-1q6rcg1`)}><button class="p-2 md:p-1 w-full text-left svelte-1q6rcg1">Achievements</button></li></ul></div> <div class="md:border-2 border-b-2 md:w-8 border-t-0 border-x-0 md:border-l-0 border-black flex flex-row w-full md:flex-col justify-between svelte-1q6rcg1"><button class="svelte-1q6rcg1"><img${attr("src", arrow)} class="w-8 h-8 border-y-2 md:border-y-0 md:border-b-2 -rotate-90 md:rotate-0 border-black cursor-pointer svelte-1q6rcg1" alt="arrow"></button> <button class="svelte-1q6rcg1"><img${attr("src", arrow)} class="w-8 h-8 border-y-2 md:border-y-0 md:border-b-2 border-black rotate-90 md:rotate-180 cursor-pointer svelte-1q6rcg1" alt="arrow"></button></div></div></div> <div class="flex flex-col xl:h-[100vh] 3xl:h-[90vh] gap-8 lg:gap-2 justify-between text-sm lg:text-md svelte-1q6rcg1">`;
  {
    $$payload.out += "<!--[!-->";
    {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="px-2 py-2 md:px-8 flex flex-col gap-8 svelte-1q6rcg1"><div class="text-xl apple sticky top-48 pt-4 md:top-56 md:static bg-doswhite border-2 border-doswhite svelte-1q6rcg1">Experience</div> <div class="flex flex-col gap-10 apple xl:h-[75%] overflow-y-scroll svelte-1q6rcg1"><div class="flex flex-col md:flex-row gap-2 md:gap-10 svelte-1q6rcg1"><img${attr("src", teachafy)} class="h-24 w-24 svelte-1q6rcg1" alt="cit logo"> <div class="flex flex-col svelte-1q6rcg1"><div class="text-sm text-black svelte-1q6rcg1">Teachafy Labs</div> <div class="text-sm text-black svelte-1q6rcg1">ML &amp; Backend Developer Intern</div> <div class="text-sm text-black svelte-1q6rcg1">Dec 2024 - Present</div> <ul class="text-xs svelte-1q6rcg1"><li class="svelte-1q6rcg1">- Working on development of AI products using Open AI API, FastAPI, Nango,
											n8n, Docker, EasyPanel, and other tools</li></ul></div></div> <div class="flex flex-col md:flex-row gap-2 md:gap-10 svelte-1q6rcg1"><img${attr("src", fiverr)} class="h-24 w-24 svelte-1q6rcg1" alt="cit logo"> <div class="flex flex-col svelte-1q6rcg1"><div class="text-sm text-black svelte-1q6rcg1">Fiverr</div> <div class="text-sm text-black svelte-1q6rcg1">Freelancer, Full Stack Developer</div> <div class="text-sm text-black svelte-1q6rcg1">Dec 2023 - Dec 2024</div> <ul class="text-xs svelte-1q6rcg1"><li class="svelte-1q6rcg1">- Developed animated, responsive, and accessible websites for 5+ clients using
											SvelteKit and FastAPI, delivering high-quality projects on time</li> <li class="svelte-1q6rcg1">- Generated $1200 in revenue in under 3 weeks while working part-time,
											demonstrating strong project management and client satisfaction</li></ul></div></div> <div class="flex flex-col md:flex-row gap-2 md:gap-10 svelte-1q6rcg1"><img${attr("src", cognizant)} class="h-24 w-24 svelte-1q6rcg1" alt="cit logo"> <div class="flex flex-col svelte-1q6rcg1"><div class="text-sm text-black svelte-1q6rcg1">Cognizant</div> <div class="text-sm text-black svelte-1q6rcg1">Research &amp; Development Intern</div> <div class="text-sm text-black svelte-1q6rcg1">Jun 2023 - Aug 2023</div> <ul class="text-xs svelte-1q6rcg1"><li class="svelte-1q6rcg1">- Innovated an Augmented Reality (AR) app using Unity3D and Vuforia Engine for
											the Vuzix m400 device, enhancing user interaction</li> <li class="svelte-1q6rcg1">- Improved navigation efficiency by 100% using AR, significantly boosting
											productivity</li> <li class="svelte-1q6rcg1">- Solved complex data structures and algorithms problems on computer vision &amp;
											path finding, reduced computational delay by 50%, enhancing overall product
											quality and operational effectiveness</li></ul></div></div></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></div> <div class="flex flex-row w-full justify-center p-4 svelte-1q6rcg1"><a class="apple bg-doswhite text-black border-2 border-black p-2 px-4 active:underline hover:text-doswhite hover:bg-black svelte-1q6rcg1" href="https://flowcv.com/resume/pjasuoi5b2" target="_blank" rel="noreferrer">View Full Resume</a></div></div>`;
}
const img1 = "/_app/immutable/assets/donationstation.BbB2po_f.png";
const img2 = "/_app/immutable/assets/cyberhakz.DhPrJWbp.png";
const img3 = "/_app/immutable/assets/indianinfra.D2Boj4o0.png";
const game1 = "/_app/immutable/assets/1.BsyCZDma.jpg";
const game2 = "/_app/immutable/assets/2.CTgfnhaH.jpg";
const game3 = "data:image/jpeg;base64,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";
function card($$payload, img, title, desc, link) {
  $$payload.out += `<div class="flex flex-col h-full w-full md:w-72 md:h-72 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"><img loading="lazy" class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover"${attr("src", img)} alt="banner"> <div class="p-4 flex flex-col gap-2"><div class="text-3xl">${escape_html(title)}</div> <div class="relative text-xl leading-5">${escape_html(desc)}</div> <a class="text-primary text-xl w-fit group hover:opacity-80"${attr("href", link)} target="_blank" rel="noreferrer">Visit Site <span class="group-hover:visible invisible">→</span></a></div></div>`;
}
function Games($$payload, $$props) {
  push();
  const projects = [
    {
      title: "The Do-Nation Station",
      desc: "Social Media + Centralized Platform for Donations",
      img: img1,
      link: "https://the-do-nation-station.vercel.app/"
    },
    {
      title: "CyberHakz",
      desc: "Cybersecurity Company",
      img: img2,
      link: "https://cyberhakz.com/"
    },
    {
      title: "Indian Infra",
      desc: "Construction Company",
      img: img3,
      link: "https://indianinfra.in/"
    }
  ];
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="h-fit svelte-1qrqq0h" id="games"><div class="absolute svelte-1qrqq0h" id="bg-layer-0"></div> <div id="bg-layer-1" class="absolute svelte-1qrqq0h"></div> <div id="bg-layer-2" class="absolute svelte-1qrqq0h"></div> <div id="bg-layer-3" class="absolute svelte-1qrqq0h"></div> <h2 data-aos="fade" data-aos-duration="1000" data-aos-delay="500" class="jersey uppercase opacity-80 relative bg-layer-3 w-full text-center top-[10%] md:top-[30%] text-xl md:text-9xl h-0">Welcome to my <br> Video Game Universe</h2> <div id="bg-layer-4" class="absolute svelte-1qrqq0h"></div></div> <section class="flex flex-col bg-black p-4 md:p-10 xl:px-32 xl:min-h-full"><div class="flex flex-col md:flex-row gap-8 p-4 md:p-0"><div class="text-primary text-6xl w-[50%] md:my-8">VIDEO GAMES</div> <p class="text-sm md:px-8 text-doswhite apple m-auto">I craft rich purpose driven experience that shares a story, dive into my video game universe!
			Check out my games at <a href="https://dataoverflow.itch.io/" target="_blank" class="text-primary" rel="noreferrer">dataoverflow.itch.io</a></p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 py-6 4xl:justify-center md:py-8 lg:py-16"><div class="group flex flex-col h-full w-full md:w-72 md:h-72 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"><div class="grid"><img loading="lazy" class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover col-start-1 row-start-1" src="https://img.itch.zone/aW1hZ2UvMjg0ODQzNS8xNzAzNDQwNC5naWY=/original/1hNkmZ.gif" alt="banner"> <div class="col-start-1 row-start-1"><img loading="lazy" class="inline-block h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover col-start-1 row-start-1 group-hover:invisible"${attr("src", game1)} alt="banner"></div></div> <div class="p-4 flex flex-col"><div class="text-3xl">Cupid's Startup</div> <div class="relative top-[-0.5rem] text-xl">Are they really compatible?</div> <a class="text-primary text-xl w-fit group hover:opacity-80" href="https://dataoverflow.itch.io/cs" target="_blank" rel="noreferrer">Play Game <span class="group-hover:visible invisible">→</span></a></div></div> <div class="group flex flex-col h-full w-full md:w-72 md:h-64 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"><div class="grid"><img loading="lazy" class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover col-start-1 row-start-1" src="https://img.itch.zone/aW1nLzUzNDc0NTAuZ2lm/315x250%23c/PgWGSy.gif" alt="banner"> <div class="col-start-1 row-start-1"><img loading="lazy" class="inline-block h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover col-start-1 row-start-1 invisible md:visible group-hover:opacity-0 transition-all duration-300"${attr("src", game2)} alt="banner"></div></div> <div class="p-4 flex flex-col"><div class="text-3xl">Notebook Game</div> <div class="relative top-[-0.5rem] text-xl">A satisfying platformer</div> <a class="text-primary text-xl w-fit group hover:opacity-80" href="https://dataoverflow.itch.io/notebook-game" target="_blank" rel="noreferrer">Play Game <span class="group-hover:visible invisible">→</span></a></div></div> <div class="group flex flex-col h-full w-full md:w-72 md:h-72 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"><div class="grid"><img loading="lazy" class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover col-start-1 row-start-1" src="https://img.itch.zone/aW1hZ2UvNjk2ODc5LzM4NzY0NDYuZ2lm/original/8Y0UXz.gif" alt="banner"> <div class="col-start-1 row-start-1"><img loading="lazy" class="inline-block h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover col-start-1 row-start-1 invisible md:visible group-hover:opacity-0 transition-all duration-300"${attr("src", game3)} alt="banner"></div></div> <div class="p-4 flex flex-col"><div class="text-3xl">Survive 60 Seconds</div> <div class="relative top-[-0.5rem] text-xl">Can you survive longer?</div> <a class="text-primary text-xl w-fit group hover:opacity-80" href="https://dataoverflow.itch.io/survive-60-seconds" target="_blank" rel="noreferrer">Play Game <span class="group-hover:visible invisible">→</span></a></div></div></div></section> <section class="flex flex-col bg-black p-4 md:p-10 md:pt-0 xl:px-32 xl:min-h-full" id="projects"><div class="flex flex-col md:flex-row gap-8 p-4 md:p-0"><div class="text-primary text-6xl w-[50%] md:my-8">PROJECTS</div> <p class="text-sm md:px-8 text-doswhite apple m-auto">Check out my high performance fullstack projects here</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 py-6 4xl:justify-center md:py-8 lg:py-16"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    card($$payload, project.img, project.title, project.desc, project.link);
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
function Projects($$payload, $$props) {
  push();
  let tab = 0;
  let projects = [
    "DoNationStation.cpp",
    "CyberHakz.cpp",
    "GlobalArticle.cpp",
    "IndianInfra.cpp",
    "WhatsAppTLDR.cpp",
    "RAWatts.cpp",
    "CalendarApp.cpp",
    "Datable.cpp"
  ];
  let projectDetails = [
    {
      title: "The Do-Nation Station - Social Media + Centralized Donation Platform",
      techstack: "Next.js, Appwrite, Tailwind, Material UI, GCP",
      description: `A platform for transparent donations to charitable organizations, offers search filters, history, leaderboard, profiles, etc.`,
      link: "https://the-do-nation-station.vercel.app/",
      date: "Aug, 2024"
    },
    {
      title: "CyberHakz Professional Website",
      techstack: "SvelteKit 5, Tailwind, NocoDB, Docker, Figma (UI/UX)",
      description: `Designed a fast, multipage, responsive web app with dark & light themes, caching & API integration for a cybersecurity company in 2 weeks. Scores 100% on Best Practices, 97% on Performance, 93% on Accessibility and 91% on SEO in Chrome's Lighthouse`,
      link: "https://cyberhakz.com",
      date: "Jun, 2024"
    },
    {
      title: "Global Article Summarization and Link Analysis",
      techstack: "Intel oneAPI, Python, Pandas, Huggingface Transformers, NumPy, Scikit-learn",
      description: `Created a tool to find relevant articles, summarize them, and recommend related articles, improving information retrieval and relevance`,
      link: "https://github.com/data-overflow/article-summarization",
      date: "Feb, 2024"
    },
    {
      title: "Indian Infra Professional Website",
      techstack: "Svelte, Tailwind, HTML, CSS, JavaScript",
      description: `A high-performance website for a global construction company.
            The site incorporates a mobile responsive design that also fluidly
            rescales to every screen size`,
      link: "https://indianinfra.in",
      date: "Dec, 2023"
    },
    {
      title: "WhatsApp TLDR",
      techstack: "Python, Hugging Face Transformers, Bart",
      description: `WhatsApp TLDR helps you to summarize thousands of unread messages,
            reducing content by up to 90%, so that you
            can always stay on the loop and be productive.`,
      link: "https://github.com/data-overflow/whatsapp-tldr",
      date: "May, 2023"
    },
    {
      title: "RA Watts: Solar Output Predictor",
      techstack: "Flask, RESTful API, PvLib, GeoPy, SQLAlchemy, Godot Engine",
      description: `A mobile app to predict the energy produced by solar panels,
            using at any given location and timespan in a
            user-friendly interface, encouraging its wider adoption`,
      link: "https://github.com/data-overflow/solar-output-predictor",
      date: "Apr, 2023"
    },
    {
      title: "The Calendar App",
      techstack: "Python, Tkinter",
      description: `Okay this is some dummy project I did in school, someone
            remind me to replace this placeholder with some other project :,)`,
      link: "https://github.com/data-overflow/the-calendar-app",
      date: "Feb, 2021"
    },
    {
      title: "Datable",
      techstack: "React Native, Tailwind, Supabase, FastAPI",
      description: `Th3 NeX7 b1g t8i7G?? Watch this space
            > :/ Meet people the OG way, IRL! shush, visit - https://datable.web.app/
            `,
      link: "https://media1.tenor.com/m/qRpNbT_IhBAAAAAC/appurajosh-appu.gif",
      date: "???, 20XX"
    }
  ];
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div id="dos-bg" class="flex flex-col gap-2 justify-center bg-[#0000B0] h-fit xl:h-[110vh] 2xl:h-[105vh] 3xl:h-[90vh] svelte-1pha16v"><div id="dos-window" class="bg-[#AFA8AF] h-fit w-[95%] md:w-[90%] xl:w-[80%] my-10 mx-auto text-md svelte-1pha16v"><div class="p-1 border-4 border-white m-2 mt-3 svelte-1pha16v"><div class="p-1 border-4 border-white svelte-1pha16v"><div class="flex flex-col items-center dos svelte-1pha16v"><div class="flex flex-row justify-between w-full svelte-1pha16v"><div class="relative z-[10] border-x-4 top-[4px] left-[20px] border-[#AFA8AF] svelte-1pha16v"></div> <div class="relative top-[-1.5rem] bg-[#AFA8AF] px-2 text-2xl svelte-1pha16v">[ <span class="text-primary svelte-1pha16v">■</span> ]</div> <div class="relative text-center px-2 top-[-1.5rem] z-[100] text-white bg-[#AFA8AF] w-fit m-auto text-xl md:text-2xl svelte-1pha16v">All Projects</div></div></div> <div id="allprojects" class="svelte-1pha16v"><div class="flex flex-col md:flex-row dos min-h-[80vh] md:min-h-[65vh] text-black p-2 md:p-8 sm:text-lg gap-8 md:text-2xl svelte-1pha16v"><div class="flex flex-col gap-2 text-black w-full lg:w-[40%] sticky top-16 md:top-8 border-4 bg-[#AFA8AF] border-[#AFA8AF] svelte-1pha16v"><div class="svelte-1pha16v"><span class="text-yellow-200 svelte-1pha16v">O</span>pen Project <span class="inline md:hidden svelte-1pha16v">(Scroll)</span></div> <div class="flex flex-row bg-[#00A8AF] w-full svelte-1pha16v"><div class="w-full svelte-1pha16v"><ul class="grid grid-cols-3 grid-flow-row gap-x-56 md:flex md:flex-col overflow-x-scroll md:overflow-x-hidden svelte-1pha16v"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let project = each_array[i];
    $$payload.out += `<li${attr("class", `min-w-56 border-r-4 md:border-0 border-[#0000B0] ${stringify(tab == i ? "bg-[#00B000] text-white active-li blink" : "hover:text-yellow-200")} svelte-1pha16v`)}><button class="p-1 px-4 w-full text-left svelte-1pha16v">${escape_html(project.toUpperCase())}</button></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="w-8 border-l-4 hidden md:flex border-[#0000B0] flex-col justify-between svelte-1pha16v"></div></div></div> <div class="flex flex-col h-full gap-8 lg:gap-2 justify-between svelte-1pha16v"><div class="px-2 py-2 md:px-8 flex flex-col gap-1 text-lg md:text-xl lg:text-2xl svelte-1pha16v"><div class="text-xl md:text-2xl dos svelte-1pha16v">${escape_html(projectDetails[tab].title.toUpperCase())}</div> <div class="text-[#FF0000] svelte-1pha16v">${escape_html(projectDetails[tab].techstack)}</div> <div class="svelte-1pha16v">${escape_html(projectDetails[tab].description)}</div> <a class="my-4 bg-[#00B000] hover:text-white active:ml-4 text-black w-fit px-4 pr-12 dos-shadow svelte-1pha16v"${attr("href", projectDetails[tab].link)} target="_blank" rel="noreferrer"><span class="text-[#FFFF50] svelte-1pha16v">E</span>xplore</a></div></div></div> <div class="bg-[#0000B0] text-[#00A8AF] p-2 flex flex-col md:text-2xl dos select-none svelte-1pha16v"><div class="svelte-1pha16v">C:\\TURBOC3\\BIN\\PROJECTS\\*CPP</div> <div class="flex flex-row justify-between svelte-1pha16v"><div class="svelte-1pha16v">${escape_html(projects[tab].toUpperCase())}</div> <div class="svelte-1pha16v">${escape_html(projectDetails[tab].date)}</div></div></div></div></div></div></div></div>`;
  pop();
}
const heart = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAFJJREFUOI3tksEKACAIQ5f//83VRUFGmZHHdszlHjhA1YHRgYGD2NfskY2iM/9x5WlRqgQBzvOmkCCjZ4K/wJXl9hrWkTqCLAlXvJ5gR8LJZQQT6zIYB7qaB+EAAAAASUVORK5CYII=";
function GameOver($$payload, $$props) {
  push();
  let time = 0;
  let scroll = 0;
  function tick() {
    time += 1;
  }
  tick();
  setInterval(tick, 1e3);
  $$payload.out += `<div id="gameover" class="min-h-[60vh] md:h-[100vh] flex flex-col items-center"><div class="flex flex-col w-full m-auto p-10 bg-black text-white md:min-h-[100vh] lg:h-[100vh] md:text-lg lg:text-xl xl:text-3xl pstart"><div class="flex flex-row justify-between sticky top-16 pointer-events-none"><div class="flex flex-col z-50"><div>SCORE</div> <div${attr("class", clsx(""))}>${escape_html(scroll)}</div></div> <div class="flex flex-col"><div>TIME</div> <div class="text-right">${escape_html(time)}</div></div></div> <div class="relative -top-16 flex flex-col w-full py-32 xl:p-64 gap-8 items-center"><div class="text-center z-50">${escape_html("GAME OVER")}</div> <div class="flex flex-col text-left gap-4 z-10"><div class="flex flex-row gap-8 group"><img class="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 group-hover:visible invisible hidden md:block" alt="heart"${attr("src", heart)}> <a class="text-doswhite group-hover:text-white group-active:text-[#fe0000]" href="#home">RETRY</a></div> <div class="flex flex-row gap-8 group"><img class="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 group-hover:visible invisible hidden md:block" alt="heart"${attr("src", heart)}> <a class="text-doswhite group-hover:text-white group-active:text-[#fe0000]" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">END</a></div></div></div></div> <canvas class="relative h-[100vh] w-full top-[-100vh] hidden lg:block"></canvas></div>`;
  pop();
}
export {
  Games as G,
  Home as H,
  Projects as P,
  Resume as R,
  GameOver as a
};
