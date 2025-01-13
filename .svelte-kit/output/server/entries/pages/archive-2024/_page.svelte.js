import "clsx";
import { R as pop, P as push } from "../../../chunks/index.js";
import "../../../chunks/Footer.svelte_svelte_type_style_lang.js";
import { H as Home, R as Resume, G as Games, P as Projects, a as GameOver } from "../../../chunks/aos.js";
import "aos";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div>`;
  Home($$payload, {});
  $$payload.out += `<!----> <div id="about" class="flex flex-col bg-black md:p-10 py-16 gap-20"><div class="flex flex-col md:flex-row gap-8 p-6"><div class="text-secondary text-6xl w-[50%]" data-aos="fade">ABOUT</div> <p class="text-sm md:px-8 text-doswhite apple" data-aos="fade">Passionate about technology from a young age, I began developing <a class="text-primary" href="#games">video games</a> at 14, which laid the foundation for a strong technical background in object-oriented programming,
				data structures, and algorithms. Currently, I am developing a <a class="text-primary" href="https://datable.web.app/" target="_blank">social networking app</a> aimed at fostering genuine connections. I am seeking challenging internships to leverage my diverse
				expertise and contribute to innovative projects</p></div> `;
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
