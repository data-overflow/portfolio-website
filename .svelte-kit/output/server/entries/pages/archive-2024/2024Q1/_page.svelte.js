import { e as pop, p as push } from "../../../../chunks/index2.js";
import { N as NavBar, F as Footer } from "../../../../chunks/Footer.js";
import { H as Home, R as Resume, G as Games, P as Projects, a as GameOver } from "../../../../chunks/aos.js";
import { M as Music } from "../../../../chunks/Music.js";
import "aos";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div>`;
  NavBar($$payload);
  $$payload.out += `<!----> `;
  Home($$payload);
  $$payload.out += `<!----> <div id="about" class="flex flex-col bg-black md:p-10 py-16 gap-20"><div class="flex flex-col md:flex-row gap-8 p-6"><div class="text-secondary text-6xl w-[50%]" data-aos="fade">ABOUT</div> <p class="text-sm md:px-8 text-doswhite apple" data-aos="fade">I'm a 21 year old student, technologist &amp; Entrepreneurial Hacker with a geek towards
				computer science from an early age. I've worked on <a class="text-primary" href="#games">video games</a> and random projects I find interesting, right from the age of 14.</p></div> `;
  Resume($$payload);
  $$payload.out += `<!----></div> `;
  Games($$payload);
  $$payload.out += `<!----> `;
  Projects($$payload);
  $$payload.out += `<!----> `;
  Music($$payload);
  $$payload.out += `<!----> <div id="blog" class="p-10 bg-secondary py-16 h-[100vh]"><div class="flex flex-col gap-8"><div class="text-black text-6xl w-[50%]">BLOG</div> <p class="text-xl text-black apple text-center my-auto">Blogs are coming soon! Watch out for this space :)</p></div></div> `;
  GameOver($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
