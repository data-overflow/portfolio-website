import { k as attr, e as pop, l as stringify, p as push, m as ensure_array_like, h as escape_html } from "./index2.js";
function Home($$payload, $$props) {
  push();
  $$payload.out += `<div${attr("class", `absolute bg-black/50 backdrop-blur px-2 transition-opacity ${stringify("opacity-0")} svelte-5myb1g`)}>That's me working on the next big thing!</div> <div id="home" class="h-full w-full flex pb-16 md:p-0 md:items-center items-end svelte-5myb1g"><div class="flex flex-col w-full svelte-5myb1g"><div class="text-3xl md:text-5xl text-white px-6 md:px-10 svelte-5myb1g">Hiii I'm DATA OVERFLOW</div> <div class="px-6 md:px-10 svelte-5myb1g"><p class="typewrite text-left text-doswhite text-2xl md:text-3xl svelte-5myb1g"><span class="wrap svelte-5myb1g"></span></p></div> <div class="px-6 md:px-10 text-xl md:text-2xl mt-8 bg-transparent svelte-5myb1g"><a class="p-2 px-6 border-2 hover:bg-white hover:text-black z-100 svelte-5myb1g" href="https://flowcv.com/resume/pjasuoi5b2" target="_blank">View Resume</a></div></div> <div role="presentation" class="bg-black/0 right-[15%] top-[50%] md:absolute w-64 h-96 hidden md:block svelte-5myb1g"></div></div>`;
  pop();
}
const arrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAGRJREFUWIXtlkEKwCAMBK34/y/Xi4ciBDdRGoQZ8LbCZlSwFADY5x0rRD1Y5HfmyUMmrjSwmtRl4ioD3jOW8ukGHiFjTWHtdeXTDTQhMzdX74FiN98ABSigvAKL8B/gS7oBAIAOMkQSEhmoDtUAAAAASUVORK5CYII=";
const cognizant = "/_app/immutable/assets/cognizant.Dm5Hl-7U.png";
const fiverr = "/_app/immutable/assets/fiverr.Cjn4SrRP.png";
function Resume($$payload) {
  $$payload.out += `<div id="apple-bg" class="flex flex-col gap-2 justify-center bg-white h-fit w-full xl:h-[120vh] 2xl:h-[110vh] 3xl:h-[90vh] svelte-1q6rcg1"><div class="bg-doswhite h-fit xl:h-[90%] w-[98%] md:w-[90%] xl:w-[80%] mt-4 mb-4 mx-auto border-2 border-black svelte-1q6rcg1"><div class="flex flex-col items-center apple svelte-1q6rcg1"><div class="flex flex-row justify-between w-full svelte-1q6rcg1"><div class="relative z-[10] border-x-4 top-[4px] left-[20px] border-doswhite svelte-1q6rcg1"><div class="border-2 border-black w-6 h-6 bg-doswhite svelte-1q6rcg1"></div></div> <div class="relative text-center px-2 top-[4px] z-[100] text-black bg-doswhite w-fit m-auto svelte-1q6rcg1">Resume.exe</div></div> <div class="relative top-[-24px] flex flex-col w-full svelte-1q6rcg1"><div class="mt-1 border-t-2 border-black mx-2 svelte-1q6rcg1"></div> <div class="mt-1 border-t-2 border-black mx-2 svelte-1q6rcg1"></div> <div class="mt-1 border-t-2 border-black mx-2 svelte-1q6rcg1"></div> <div class="mt-1 border-t-2 border-black mx-2 svelte-1q6rcg1"></div> <div class="mt-1 border-t-2 border-black mx-2 svelte-1q6rcg1"></div> <div class="mt-1 border-t-2 border-black svelte-1q6rcg1"></div></div></div> <div class="flex flex-col md:flex-row apple text-black p-4 md:p-8 gap-8 svelte-1q6rcg1"><div class="flex flex-col gap-1 sticky top-10 z-50 bg-doswhite border-4 border-doswhite text-sm md:text-base svelte-1q6rcg1"><div class="svelte-1q6rcg1">Disk: /C</div> <div class="flex flex-col md:flex-row svelte-1q6rcg1"><div class="border-2 border-black w-full svelte-1q6rcg1"><ul class="grid grid-cols-2 text-xs md:text-base md:flex md:flex-col svelte-1q6rcg1"><li${attr("class", `border-b-2 border-transparent hover:border-black ${stringify("")} svelte-1q6rcg1`)}><button class="p-2 md:p-1 w-full text-left svelte-1q6rcg1">Education</button></li> <li${attr("class", `border-y-2 border-transparent hover:border-black ${stringify("bg-black text-doswhite")} svelte-1q6rcg1`)}><button class="p-2 md:p-1 w-full text-left svelte-1q6rcg1">Experience</button></li> <li${attr("class", `border-y-2 border-transparent hover:border-black ${stringify("")} svelte-1q6rcg1`)}><button class="p-2 md:p-1 w-full text-left svelte-1q6rcg1">Extracurricular</button></li> <li${attr("class", `border-y-2 border-transparent hover:border-black ${stringify("")} svelte-1q6rcg1`)}><button class="p-2 md:p-1 w-full text-left svelte-1q6rcg1">Skills</button></li> <li${attr("class", `border-t-2 border-transparent hover:border-black ${stringify("")} svelte-1q6rcg1`)}><button class="p-2 md:p-1 w-full text-left svelte-1q6rcg1">Achievements</button></li></ul></div> <div class="md:border-2 border-b-2 md:w-8 border-t-0 border-x-0 md:border-l-0 border-black flex flex-row w-full md:flex-col justify-between svelte-1q6rcg1"><button class="svelte-1q6rcg1"><img${attr("src", arrow)} class="w-8 h-8 border-y-2 md:border-y-0 md:border-b-2 -rotate-90 md:rotate-0 border-black cursor-pointer svelte-1q6rcg1" alt="arrow"></button> <button class="svelte-1q6rcg1"><img${attr("src", arrow)} class="w-8 h-8 border-y-2 md:border-y-0 md:border-b-2 border-black rotate-90 md:rotate-180 cursor-pointer svelte-1q6rcg1" alt="arrow"></button></div></div></div> <div class="flex flex-col w-full h-full gap-8 lg:gap-2 justify-between text-sm lg:text-md svelte-1q6rcg1">`;
  {
    $$payload.out += "<!--[!-->";
    {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="px-2 py-2 md:px-8 flex flex-col gap-8 svelte-1q6rcg1"><div class="text-xl apple sticky top-48 pt-4 md:top-56 md:static bg-doswhite border-2 border-doswhite svelte-1q6rcg1">Experience</div> <div class="flex flex-col gap-10 apple svelte-1q6rcg1"><div class="flex flex-col md:flex-row gap-2 md:gap-10 svelte-1q6rcg1"><img${attr("src", fiverr)} class="h-24 w-24 svelte-1q6rcg1" alt="cit logo"> <div class="flex flex-col svelte-1q6rcg1"><div class="text-sm text-black svelte-1q6rcg1">Fiverr</div> <div class="text-sm text-black svelte-1q6rcg1">Freelancer, Full Stack Developer</div> <div class="text-sm text-black svelte-1q6rcg1">Dec 2023 - Present</div> <ul class="text-xs svelte-1q6rcg1"><li class="svelte-1q6rcg1">- Developed animated, responsive, and accessible websites for 5+ clients using
											SvelteKit and FastAPI, delivering high-quality projects on time</li> <li class="svelte-1q6rcg1">- Generated $1200 in revenue in under 3 weeks while working part-time,
											demonstrating strong project management and client satisfaction</li></ul></div></div> <div class="flex flex-col md:flex-row gap-2 md:gap-10 svelte-1q6rcg1"><img${attr("src", cognizant)} class="h-24 w-24 svelte-1q6rcg1" alt="cit logo"> <div class="flex flex-col svelte-1q6rcg1"><div class="text-sm text-black svelte-1q6rcg1">Cognizant</div> <div class="text-sm text-black svelte-1q6rcg1">Research &amp; Development Intern</div> <div class="text-sm text-black svelte-1q6rcg1">Jun 2023 - Aug 2023</div> <ul class="text-xs svelte-1q6rcg1"><li class="svelte-1q6rcg1">- Innovated an Augmented Reality (AR) app using Unity3D and Vuforia Engine for
											the Vuzix m400 device, enhancing user interaction</li> <li class="svelte-1q6rcg1">- Improved navigation efficiency by 100% using AR, significantly boosting
											productivity</li> <li class="svelte-1q6rcg1">- Solved complex data structures and algorithms problems on computer vision &amp;
											path finding, reduced computational delay by 50%, enhancing overall product
											quality and operational effectiveness</li></ul></div></div></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> <div class="flex flex-row w-full justify-center p-4 svelte-1q6rcg1"><a class="apple bg-doswhite text-black border-2 border-black p-2 px-4 active:underline hover:text-doswhite hover:bg-black svelte-1q6rcg1" href="https://flowcv.com/resume/pjasuoi5b2" target="_blank" rel="noreferrer">View Full Resume</a></div></div></div></div></div>`;
}
const img1 = "/_app/immutable/assets/donationstation.BbB2po_f.png";
const img2 = "/_app/immutable/assets/cyberhakz.DhPrJWbp.png";
const img3 = "/_app/immutable/assets/indianinfra.D2Boj4o0.png";
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
  function card($$payload2, img, title, desc, link) {
    $$payload2.out += `<div class="flex flex-col h-full w-full md:w-72 md:h-72 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"><img loading="lazy" class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover"${attr("src", img)} alt="banner"> <div class="p-4 flex flex-col gap-2"><div class="text-3xl">${escape_html(title)}</div> <div class="relative text-xl leading-5">${escape_html(desc)}</div> <a class="text-primary text-xl w-fit group hover:opacity-80"${attr("href", link)} target="_blank" rel="noreferrer">Visit Site <span class="group-hover:visible invisible">→</span></a></div></div>`;
  }
  const each_array = ensure_array_like(projects);
  $$payload.out += `<div class="h-fit svelte-1qrqq0h" id="games"><div class="absolute svelte-1qrqq0h" id="bg-layer-0"></div> <div id="bg-layer-1" class="absolute svelte-1qrqq0h"></div> <div id="bg-layer-2" class="absolute svelte-1qrqq0h"></div> <div id="bg-layer-3" class="absolute svelte-1qrqq0h"></div> <h2 data-aos="fade" data-aos-duration="1000" data-aos-delay="500" class="pstart opacity-80 relative bg-layer-3 w-full text-center top-[10%] md:top-[40%] text-xl md:text-7xl h-0">Welcome to my <br> Video Game Universe</h2> <div id="bg-layer-4" class="absolute svelte-1qrqq0h"></div></div> <section class="flex flex-col bg-black p-4 md:p-10 xl:min-h-full"><div class="flex flex-col md:flex-row gap-8 p-4 md:p-0"><div class="text-primary text-6xl w-[50%] md:my-8">VIDEO GAMES</div> <p class="text-sm md:px-8 text-doswhite apple m-auto">I craft rich purpose driven experience that shares a story, dive into my video game universe!
			Check out my games at <a href="https://dataoverflow.itch.io/" target="_blank" class="text-primary" rel="noreferrer">dataoverflow.itch.io</a></p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 py-6 4xl:justify-center md:py-8 lg:py-16"><div class="flex flex-col h-full w-full md:w-72 md:h-72 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"><img loading="lazy" class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover" src="https://img.itch.zone/aW1hZ2UvMjg0ODQzNS8xNzAzNDQwNC5naWY=/original/1hNkmZ.gif" alt="banner"> <div class="p-4 flex flex-col"><div class="text-3xl">Cupid's Startup</div> <div class="relative top-[-0.5rem] text-xl">Are they really compatible?</div> <a class="text-primary text-xl w-fit group hover:opacity-80" href="https://dataoverflow.itch.io/cs" target="_blank" rel="noreferrer">Play Game <span class="group-hover:visible invisible">→</span></a></div></div> <div class="flex flex-col h-full w-full md:w-72 md:h-64 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"><img loading="lazy" class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover" src="https://img.itch.zone/aW1nLzUzNDc0NTAuZ2lm/315x250%23c/PgWGSy.gif" alt="banner"> <div class="p-4 flex flex-col"><div class="text-3xl">Notebook Game</div> <div class="relative top-[-0.5rem] text-xl">A satisfying platformer</div> <a class="text-primary text-xl w-fit group hover:opacity-80" href="https://dataoverflow.itch.io/notebook-game" target="_blank" rel="noreferrer">Play Game <span class="group-hover:visible invisible">→</span></a></div></div> <div class="flex flex-col h-full w-full md:w-72 md:h-72 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"><img loading="lazy" class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover" src="https://img.itch.zone/aW1hZ2UvNjk2ODc5LzM4NzY0NDYuZ2lm/original/8Y0UXz.gif" alt="banner"> <div class="p-4 flex flex-col"><div class="text-3xl">Survive 60 Seconds</div> <div class="relative top-[-0.5rem] text-xl">Can you survive longer?</div> <a class="text-primary text-xl w-fit group hover:opacity-80" href="https://dataoverflow.itch.io/survive-60-seconds" target="_blank" rel="noreferrer">Play Game <span class="group-hover:visible invisible">→</span></a></div></div></div></section> <section class="flex flex-col bg-black p-4 md:p-10 md:pt-0 xl:min-h-full" id="projects"><div class="flex flex-col md:flex-row gap-8 p-4 md:p-0"><div class="text-primary text-6xl w-[50%] md:my-8">PROJECTS</div> <p class="text-sm md:px-8 text-doswhite apple m-auto">Check out my high performance fullstack projects here</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 py-6 4xl:justify-center md:py-8 lg:py-16"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    const project = each_array[$$index];
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
    const project = each_array[i];
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
  $$payload.out += `<div class="md:h-[100vh] flex flex-col items-center"><div class="flex flex-col w-full m-auto p-10 bg-black text-white md:min-h-[100vh] lg:h-[100vh] md:text-lg lg:text-xl xl:text-3xl pstart"><div class="flex flex-row justify-between sticky top-16 pointer-events-none"><div class="flex flex-col z-50"><div>SCORE</div> <div${attr("class", "")}>${escape_html(scroll)}</div></div> <div class="flex flex-col"><div>TIME</div> <div class="text-right">${escape_html(time)}</div></div></div> <div class="relative -top-16 flex flex-col w-full py-32 md:p-64 gap-8 items-center"><div class="text-center z-50">${escape_html("GAME OVER")}</div> <div class="flex flex-col text-left gap-4 z-10"><div class="flex flex-row gap-8 group"><img class="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 group-hover:visible invisible hidden md:block" alt="heart"${attr("src", heart)}> <a class="text-doswhite group-hover:text-white group-active:text-[#fe0000]" href="#home">RETRY</a></div> <div class="flex flex-row gap-8 group"><img class="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 group-hover:visible invisible hidden md:block" alt="heart"${attr("src", heart)}> <a class="text-doswhite group-hover:text-white group-active:text-[#fe0000]" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">END</a></div></div></div></div> <canvas class="relative h-[100vh] w-full top-[-100vh] hidden lg:block"></canvas></div>`;
  pop();
}
export {
  Games as G,
  Home as H,
  Projects as P,
  Resume as R,
  GameOver as a
};
