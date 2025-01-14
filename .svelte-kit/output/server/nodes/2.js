import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BGRdnaNw.js","_app/immutable/chunks/disclose-version.C0ON5NiS.js","_app/immutable/chunks/runtime.CdhxA4nL.js","_app/immutable/chunks/index-client.BXlL_vRa.js","_app/immutable/chunks/Footer.svelte_svelte_type_style_lang.BFfM1Rlb.js","_app/immutable/chunks/index.De_KEhe_.js","_app/immutable/chunks/legacy.D3CvSoT7.js","_app/immutable/chunks/aos.D2LCBIoN.js","_app/immutable/chunks/render.CL8mvRJp.js","_app/immutable/chunks/props.NROzqpRA.js","_app/immutable/chunks/store.DyFkm4wv.js","_app/immutable/chunks/attributes.8jeP3YW2.js","_app/immutable/chunks/lifecycle.BSsLOHF7.js"];
export const stylesheets = ["_app/immutable/assets/Footer.B0FZX9Y1.css","_app/immutable/assets/aos.DcMfPpCp.css"];
export const fonts = [];
