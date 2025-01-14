import { V as stringify, W as store_get, X as unsubscribe_stores, R as pop, P as push, Y as ensure_array_like } from "./index.js";
import { w as writable } from "./index3.js";
import { l as linkedin, g as github, x } from "./Footer.svelte_svelte_type_style_lang.js";
import { a as attr, c as clsx } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
const matrix = "/_app/immutable/assets/matrix-gif.CFrjL3yg.gif";
const graphics = writable(2);
const menuState = writable(false);
function NavBar($$payload, $$props) {
  push();
  var $$store_subs;
  const GRAPHICS_NAME = {
    0: "LOW",
    1: "MEDIUM",
    2: "HIGH",
    3: "ULTRA"
  };
  $$payload.out += `<header id="navigation fixed w-full" class="svelte-1ubhwvs"><nav id="navbar" class="flex flex-row w-full text-primary bg-black/80 backdrop-blur-xl text-2xl fixed z-[256] svelte-1ubhwvs"><button${attr("class", `p-4 block md:hidden transition-all ${stringify(store_get($$store_subs ??= {}, "$menuState", menuState) ? "rotate-90" : "rotate-0")} svelte-1ubhwvs`)}>☰</button> <ul${attr("class", `flex-col ${stringify(store_get($$store_subs ??= {}, "$menuState", menuState) ? "hidden" : "hidden")} md:flex md:flex-row md:gap-8 px-8 md:grow my-auto svelte-1ubhwvs`)}><li class="active:bg-primary active:text-black svelte-1ubhwvs"><a href="/#about" class="p-2 hover:first-letter:underline hover:bg-gray-500/20 svelte-1ubhwvs"><span class="first-letter svelte-1ubhwvs">A</span>BOUT</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#games"><span class="first-letter svelte-1ubhwvs">G</span>AMES</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#projects"><span class="first-letter svelte-1ubhwvs">P</span>ROJECTS</a></li> <li class="active:bg-primary active:text-black hidden 2xl:block svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/music"><span class="first-letter svelte-1ubhwvs">M</span>USIC</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/blog"><span class="first-letter svelte-1ubhwvs">B</span>LOG</a></li> <li class="active:bg-primary active:text-black hidden xl:block svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#connect"><span class="first-letter svelte-1ubhwvs">C</span>ONNECT</a></li></ul> <div class="md:px-8 my-auto svelte-1ubhwvs"><a href="/" class="svelte-1ubhwvs">DATAOVERFLOW</a></div></nav></header> <div${attr("class", `fixed ${stringify(store_get($$store_subs ??= {}, "$graphics", graphics) >= 1 ? store_get($$store_subs ??= {}, "$graphics", graphics) >= 2 ? "bg-black/50 backdrop-blur-md" : "bg-black/90" : "bg-black")} text-2xl w-full h-[100dvh] z-[300] flex flex-col ${stringify(store_get($$store_subs ??= {}, "$menuState", menuState) ? "" : "hidden")} svelte-1ubhwvs`)}><img loading="lazy"${attr("src", matrix)} alt="matrix-bg"${attr("class", `fixed bottom-0 top-0 h-full -z-30 opacity-20 ${stringify(store_get($$store_subs ??= {}, "$graphics", graphics) >= 2 ? "" : "hidden")} svelte-1ubhwvs`)}> <div class="flex flex-row svelte-1ubhwvs"><button${attr("class", `p-4 block md:hidden ${stringify(store_get($$store_subs ??= {}, "$menuState", menuState) ? "rotate-0" : "rotate-90")} svelte-1ubhwvs`)}>[ <span class="text-primary svelte-1ubhwvs">X</span> ]</button> <div class="md:px-8 my-auto text-primary svelte-1ubhwvs">DATAOVERFLOW</div></div> <ul class="flex-col md:flex md:flex-row md:gap-8 px-8 md:grow my-auto svelte-1ubhwvs"><!---->`;
  {
    $$payload.out += `<li class="hover:bg-gray-500/20 p-2 svelte-1ubhwvs"><a href="/#about" class="hover:first-letter:underline svelte-1ubhwvs"><span class="first-letter svelte-1ubhwvs">A</span>BOUT</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#games"><span class="first-letter svelte-1ubhwvs">G</span>AMES</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#projects"><span class="first-letter svelte-1ubhwvs">P</span>ROJECTS</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/music"><span class="first-letter svelte-1ubhwvs">M</span>USIC</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/blog"><span class="first-letter svelte-1ubhwvs">B</span>LOG</a></li> <li class="active:bg-primary active:text-black svelte-1ubhwvs"><a class="p-2 hover:bg-gray-500/20 svelte-1ubhwvs" href="/#connect"><span class="first-letter svelte-1ubhwvs">C</span>ONNECT</a></li>`;
  }
  $$payload.out += `<!----></ul> <div class="flex flex-col-reverse grow p-8 svelte-1ubhwvs"><button class="text-md text-secondary text-left svelte-1ubhwvs">GRAPHICS: ${escape_html(GRAPHICS_NAME[store_get($$store_subs ??= {}, "$graphics", graphics)])}</button></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
const instagram = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_553_12)'%3e%3cpath%20d='M18.56%200H45.44C55.68%200%2064%208.32%2064%2018.56V45.44C64%2050.3624%2062.0446%2055.0832%2058.5639%2058.5639C55.0832%2062.0446%2050.3624%2064%2045.44%2064H18.56C8.32%2064%200%2055.68%200%2045.44V18.56C0%2013.6376%201.95542%208.91677%205.4361%205.4361C8.91677%201.95542%2013.6376%200%2018.56%200ZM17.92%206.4C14.8647%206.4%2011.9345%207.61371%209.77413%209.77413C7.61371%2011.9345%206.4%2014.8647%206.4%2017.92V46.08C6.4%2052.448%2011.552%2057.6%2017.92%2057.6H46.08C49.1353%2057.6%2052.0655%2056.3863%2054.2259%2054.2259C56.3863%2052.0655%2057.6%2049.1353%2057.6%2046.08V17.92C57.6%2011.552%2052.448%206.4%2046.08%206.4H17.92ZM48.8%2011.2C49.8609%2011.2%2050.8783%2011.6214%2051.6284%2012.3716C52.3786%2013.1217%2052.8%2014.1391%2052.8%2015.2C52.8%2016.2609%2052.3786%2017.2783%2051.6284%2018.0284C50.8783%2018.7786%2049.8609%2019.2%2048.8%2019.2C47.7391%2019.2%2046.7217%2018.7786%2045.9716%2018.0284C45.2214%2017.2783%2044.8%2016.2609%2044.8%2015.2C44.8%2014.1391%2045.2214%2013.1217%2045.9716%2012.3716C46.7217%2011.6214%2047.7391%2011.2%2048.8%2011.2ZM32%2016C36.2435%2016%2040.3131%2017.6857%2043.3137%2020.6863C46.3143%2023.6869%2048%2027.7565%2048%2032C48%2036.2435%2046.3143%2040.3131%2043.3137%2043.3137C40.3131%2046.3143%2036.2435%2048%2032%2048C27.7565%2048%2023.6869%2046.3143%2020.6863%2043.3137C17.6857%2040.3131%2016%2036.2435%2016%2032C16%2027.7565%2017.6857%2023.6869%2020.6863%2020.6863C23.6869%2017.6857%2027.7565%2016%2032%2016ZM32%2022.4C29.4539%2022.4%2027.0121%2023.4114%2025.2118%2025.2118C23.4114%2027.0121%2022.4%2029.4539%2022.4%2032C22.4%2034.5461%2023.4114%2036.9879%2025.2118%2038.7882C27.0121%2040.5886%2029.4539%2041.6%2032%2041.6C34.5461%2041.6%2036.9879%2040.5886%2038.7882%2038.7882C40.5886%2036.9879%2041.6%2034.5461%2041.6%2032C41.6%2029.4539%2040.5886%2027.0121%2038.7882%2025.2118C36.9879%2023.4114%2034.5461%2022.4%2032%2022.4Z'%20fill='%23F8F8F8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_553_12'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const itch = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_553_16)'%3e%3cpath%20d='M8.344%203.57399C5.552%205.22999%200.054%2011.542%200%2013.198V15.948C0%2019.418%203.25%2022.482%206.198%2022.482C9.74%2022.482%2012.7%2019.544%2012.7%2016.056C12.7%2019.544%2015.542%2022.482%2019.094%2022.482C22.636%2022.482%2025.396%2019.544%2025.396%2016.056C25.396%2019.544%2028.428%2022.482%2031.97%2022.482H32.034C35.586%2022.482%2038.616%2019.544%2038.616%2016.056C38.616%2019.544%2041.378%2022.482%2044.92%2022.482C48.462%2022.482%2051.314%2019.544%2051.314%2016.056C51.314%2019.544%2054.264%2022.482%2057.804%2022.482C60.762%2022.482%2064.012%2019.418%2064.012%2015.948V13.198C63.948%2011.542%2058.46%205.22999%2055.658%203.57399C46.98%203.26199%2040.97%203.20799%2032.012%203.20799C23.044%203.21799%2010.826%203.35399%208.356%203.57399H8.344ZM25.354%2020.842C25.013%2021.4285%2024.5923%2021.965%2024.104%2022.436V22.446C22.7128%2023.8008%2020.8479%2024.5593%2018.906%2024.56C16.961%2024.5636%2015.093%2023.7996%2013.708%2022.434C13.2336%2021.9705%2012.8293%2021.4402%2012.508%2020.86C12.174%2021.454%2011.708%2021.964%2011.218%2022.434C9.83079%2023.7963%207.96429%2024.5597%206.02%2024.56H6.01C5.77085%2024.5503%205.53497%2024.501%205.312%2024.414C5.06886%2027.0325%204.91943%2029.6588%204.864%2032.288V32.298C4.854%2033.352%204.854%2034.204%204.842%2035.402C4.906%2041.632%204.228%2055.58%207.594%2059.008C12.802%2060.216%2022.386%2060.768%2031.988%2060.778H31.998C41.612%2060.768%2051.184%2060.216%2056.392%2059.008C59.758%2055.582%2059.08%2041.632%2059.144%2035.402C59.134%2034.204%2059.134%2033.352%2059.122%2032.298V32.288C59.0716%2029.6586%2058.9222%2027.0321%2058.674%2024.414C58.4513%2024.502%2058.2153%2024.5514%2057.976%2024.56H57.966C56.0217%2024.5597%2054.1552%2023.7963%2052.768%2022.434H52.778C52.288%2021.964%2051.82%2021.456%2051.488%2020.86H51.478C51.1597%2021.4396%2050.7588%2021.9698%2050.288%2022.434C48.9006%2023.7959%2047.0341%2024.559%2045.09%2024.559C43.1459%2024.559%2041.2794%2023.7959%2039.892%2022.434C39.4112%2021.9687%2038.9972%2021.439%2038.662%2020.86L38.64%2020.828C38.296%2021.444%2037.88%2021.974%2037.41%2022.434C36.0228%2023.7963%2034.1563%2024.5597%2032.212%2024.56H32.202C32.14%2024.56%2032.066%2024.56%2031.994%2024.55C31.922%2024.56%2031.848%2024.56%2031.776%2024.56H31.766C29.8248%2024.562%2027.9612%2023.798%2026.58%2022.434C26.0994%2021.9716%2025.689%2021.4413%2025.362%2020.86L25.34%2020.828L25.354%2020.842ZM20.01%2027.75C22.124%2027.76%2024%2027.75%2026.332%2030.292C28.164%2030.106%2030.082%2030.012%2031.998%2030.012C33.914%2030.012%2035.832%2030.106%2037.664%2030.292C39.998%2027.75%2041.872%2027.75%2043.986%2027.75H43.996C44.996%2027.75%2048.996%2027.75%2051.778%2035.574L54.768%2046.312C56.986%2054.302%2054.058%2054.502%2050.414%2054.502C44.998%2054.302%2041.998%2050.366%2041.998%2046.428C38.998%2046.93%2035.496%2047.17%2031.998%2047.17C28.5%2047.17%2024.998%2046.93%2022.008%2046.428C22.008%2050.366%2019.008%2054.302%2013.592%2054.502C9.936%2054.492%207.008%2054.302%209.226%2046.312L12.216%2035.574C15.008%2027.75%2019.008%2027.75%2020.008%2027.75H20.01ZM32%2033.906C31.99%2033.906%2026.302%2039.146%2025.272%2041L29%2040.854V44.104C29%2044.262%2030.502%2044.198%2032%2044.126C33.498%2044.198%2034.99%2044.262%2034.99%2044.104V40.854L38.728%2041C37.698%2039.146%2032%2033.906%2032%2033.906Z'%20fill='%23F8F8F8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_553_16'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const fiverr = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M50%2048.6667V22H23.3333V20.3333C23.3333%2017.576%2025.576%2015.3333%2028.3333%2015.3333H33.3333V5.33334H28.3333C24.3566%205.33828%2020.5441%206.92021%2017.7321%209.73219C14.9202%2012.5442%2013.3382%2016.3566%2013.3333%2020.3333V22H6.66663V32H13.3333V48.6667H6.66663V58.6667H30V48.6667H23.3333V32H40.0933V48.6667H33.3333V58.6667H56.6666V48.6667H50Z'%20fill='%23F8F8F8'/%3e%3cpath%20d='M45%2015.3333C47.7614%2015.3333%2050%2013.0948%2050%2010.3333C50%207.57191%2047.7614%205.33334%2045%205.33334C42.2386%205.33334%2040%207.57191%2040%2010.3333C40%2013.0948%2042.2386%2015.3333%2045%2015.3333Z'%20fill='%23F8F8F8'/%3e%3c/svg%3e";
const soundcloud = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.72%2021.3745V45.0255H56.2036C61.5855%2044.6473%2064%2041.3309%2064%2037.2582C64%2032.9527%2060.7418%2029.4909%2056.3782%2029.4909C55.2727%2029.4909%2054.3418%2029.7236%2053.3818%2030.1309C52.6836%2023.3236%2046.8945%2018%2039.7673%2018C36.3636%2018%2033.1345%2019.28%2030.72%2021.3745ZM28.16%2024.3418C27.2873%2023.8182%2026.3564%2023.4109%2025.3382%2023.2073V45.0255H29.3818V22.7418C28.9455%2023.2073%2028.5382%2023.7891%2028.16%2024.3418ZM21.3236%2022.7709V45.0255H24V22.8582C23.4473%2022.7709%2022.8945%2022.7418%2022.3127%2022.7418C21.9636%2022.7418%2021.6436%2022.7418%2021.3236%2022.7709ZM16%2024.6618V45.0255H18.6473V23.3236C17.6873%2023.6436%2016.7855%2024.1091%2016%2024.6618ZM11.1418%2031.9345C10.9673%2031.9345%2010.7927%2031.76%2010.5891%2031.6727V45.0255H13.2655V27.1636C12.1891%2028.56%2011.4618%2030.2182%2011.1418%2031.9345ZM5.20727%2031.12V44.7636C5.81818%2044.9382%206.51636%2045.0255%207.27273%2045.0255H7.91273V30.8873C7.68%2030.8582%207.44727%2030.8291%207.27273%2030.8291C6.51636%2030.8291%205.81818%2030.9455%205.20727%2031.12ZM0%2037.9273C0%2040.1091%200.989091%2042.0291%202.53091%2043.3382V32.5455C0.989091%2033.8255%200%2035.7745%200%2037.9273Z'%20fill='%23F8F8F8'/%3e%3c/svg%3e";
const telegram = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_553_8)'%3e%3cpath%20d='M32%200C14.336%200%200%2014.336%200%2032C0%2049.664%2014.336%2064%2032%2064C49.664%2064%2064%2049.664%2064%2032C64%2014.336%2049.664%200%2032%200ZM46.848%2021.76C46.368%2026.816%2044.288%2039.104%2043.232%2044.768C42.784%2047.168%2041.888%2047.968%2041.056%2048.064C39.2%2048.224%2037.792%2046.848%2036%2045.664C33.184%2043.808%2031.584%2042.656%2028.864%2040.864C25.696%2038.784%2027.744%2037.632%2029.568%2035.776C30.048%2035.296%2038.24%2027.84%2038.4%2027.168C38.4222%2027.0662%2038.4193%2026.9606%2038.3914%2026.8602C38.3635%2026.7598%2038.3115%2026.6677%2038.24%2026.592C38.048%2026.432%2037.792%2026.496%2037.568%2026.528C37.28%2026.592%2032.8%2029.568%2024.064%2035.456C22.784%2036.32%2021.632%2036.768%2020.608%2036.736C19.456%2036.704%2017.28%2036.096%2015.648%2035.552C13.632%2034.912%2012.064%2034.56%2012.192%2033.44C12.256%2032.864%2013.056%2032.288%2014.56%2031.68C23.904%2027.616%2030.112%2024.928%2033.216%2023.648C42.112%2019.936%2043.936%2019.296%2045.152%2019.296C45.408%2019.296%2046.016%2019.36%2046.4%2019.68C46.72%2019.936%2046.816%2020.288%2046.848%2020.544C46.816%2020.736%2046.88%2021.312%2046.848%2021.76Z'%20fill='%23F8F8F8'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_553_8'%3e%3crect%20width='64'%20height='64'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const youtube = "data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M25.6%2042L42.208%2032.4L25.6%2022.8V42ZM62.592%2016.944C63.008%2018.448%2063.296%2020.464%2063.488%2023.024C63.712%2025.584%2063.808%2027.792%2063.808%2029.712L64%2032.4C64%2039.408%2063.488%2044.56%2062.592%2047.856C61.792%2050.736%2059.936%2052.592%2057.056%2053.392C55.552%2053.808%2052.8%2054.096%2048.576%2054.288C44.416%2054.512%2040.608%2054.608%2037.088%2054.608L32%2054.8C18.592%2054.8%2010.24%2054.288%206.944%2053.392C4.064%2052.592%202.208%2050.736%201.408%2047.856C0.992%2046.352%200.704%2044.336%200.512%2041.776C0.288%2039.216%200.192%2037.008%200.192%2035.088L0%2032.4C0%2025.392%200.512%2020.24%201.408%2016.944C2.208%2014.064%204.064%2012.208%206.944%2011.408C8.448%2010.992%2011.2%2010.704%2015.424%2010.512C19.584%2010.288%2023.392%2010.192%2026.912%2010.192L32%2010C45.408%2010%2053.76%2010.512%2057.056%2011.408C59.936%2012.208%2061.792%2014.064%2062.592%2016.944Z'%20fill='%23F8F8F8'/%3e%3c/svg%3e";
function Footer($$payload) {
  const icons = [
    [
      linkedin,
      "https://in.linkedin.com/in/kavirajar"
    ],
    [github, "https://github.com/data-overflow"],
    [x, "https://twitter.com/kvrjr"],
    [telegram, "https://t.me/kvrjr"],
    [
      fiverr,
      "https://www.fiverr.com/dataoverflow/"
    ],
    [
      instagram,
      "https://instagram.com/data.overflow"
    ],
    [itch, "https://dataoverflow.itch.io"],
    [
      soundcloud,
      "https://soundcloud.com/data-overflow"
    ],
    [youtube, "https://www.youtube.com/@kavirajar"]
  ];
  const style = { a: "hover:underline active:text-secondary" };
  const each_array = ensure_array_like(icons);
  $$payload.out += `<footer id="connect" class="bg-[#0000B0] flex flex-col p-10 lg:pr-32 text-2xl lg:gap-0 gap-10"><div class="flex flex-col md:flex-wrap md:flex-row justify-between gap-8 lg:gap-0 text-center lg:text-left"><div class="flex flex-col lg:w-1/4 w-full text-left"><div class="text-4xl">DATAOVERFLOW</div> <div class="flex flex-row flex-wrap gap-4 lg:gap-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let icon = each_array[$$index];
    $$payload.out += `<a class="w-8 h-8 md:w-6 md:h-6"${attr("href", icon[1])} target="_blank" rel="noreferrer"><img class="fill-black svelte-ftglgi"${attr("src", icon[0])}${attr("alt", icon[1])}></a>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="flex flex-col"><div class="text-white/80">LEVEL SELECT</div> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} href="/#about">About</a> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} href="/#games">Games</a> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} href="/#projects">Projects</a> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} href="/music">Music</a> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} href="/blog">Blog</a></div> <div class="flex flex-col"><div class="text-white/80">RESOURCES</div> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/1OkTRtbzJCZRIzMU_4zev6jRgl67bUtxe/edit?usp=sharing&amp;ouid=102067098286536378623&amp;rtpof=true&amp;sd=true">Brochure</a> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} target="_blank" rel="noreferrer" href="https://flowcv.com/resume/pjasuoi5b2">Resume</a></div> <div class="flex flex-col"><div class="text-white/80">ARCHIVE</div> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} target="_blank" rel="noreferrer" href="/archive-2024">2024</a> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} target="_blank" rel="noreferrer" href="https://data-overflow.github.io/archive/2023">2023</a> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} target="_blank" rel="noreferrer" href="https://data-overflow.github.io/archive/2022">2022</a> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} target="_blank" rel="noreferrer" href="https://data-overflow.github.io/archive/2021">2021</a> <a${attr("class", clsx(style.a) + " svelte-ftglgi")} target="_blank" rel="noreferrer" href="https://data-overflow.github.io/archive/2020">2020</a></div></div> <div class="text-center lg:text-left">Made with <span class="text-secondary">&lt;3</span> by Kavirajar B</div></footer>`;
}
export {
  Footer as F,
  NavBar as N
};
