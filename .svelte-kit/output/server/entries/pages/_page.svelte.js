import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import { R as pop, P as push } from "../../chunks/index.js";
import "../../chunks/Footer.svelte_svelte_type_style_lang.js";
import { H as Home, R as Resume, G as Games, P as Projects, a as GameOver } from "../../chunks/aos.js";
import "aos";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  $$payload.out += `<div>`;
  Home($$payload, { rss: data });
  $$payload.out += `<!----> <div id="about" class="flex flex-col bg-black md:py-10 2xl:p-10 py-16 gap-20"><div class="flex flex-col md:flex-row gap-8 p-6 md:px-10 xl:px-32"><div class="text-secondary text-6xl w-[50%]" data-aos="fade">ABOUT</div> <p class="whitespace-pre-line text-sm text-doswhite apple" data-aos="fade">${escape_html(`Hi, I'm Kavi, a final year student pursuing my B. Tech in AI & Data Science. I have been making`)} <a class="text-primary" href="#games">video games</a> ${escape_html(`from the age of 14, an experience that gave me strong foundations in computer science and design.
				
				Some quick stats:
					- Worked on 10+ video games
					- Finalist in 3+ national level hackathons
					- Served 5+ freelancing clients, charging 30k-2L INR per project
					- Solved 450+ problems on leetcode`)}</p></div> `;
  Resume($$payload);
  $$payload.out += `<!----></div> `;
  Games($$payload);
  $$payload.out += `<!----> `;
  Projects($$payload);
  $$payload.out += `<!---->  `;
  GameOver($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
