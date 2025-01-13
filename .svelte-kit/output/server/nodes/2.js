import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BQJdkUyd.js","_app/immutable/chunks/disclose-version.D2XAChPR.js","_app/immutable/chunks/runtime.D2zd1mVY.js","_app/immutable/chunks/index-client.Cu6A4ath.js","_app/immutable/chunks/Footer.svelte_svelte_type_style_lang.B7CM3nQl.js","_app/immutable/chunks/index.cPOwBCPQ.js","_app/immutable/chunks/legacy.CUleYnE3.js","_app/immutable/chunks/aos.9M38Bqgo.js","_app/immutable/chunks/render.CwZWKxgQ.js","_app/immutable/chunks/if.DVUVKsNo.js","_app/immutable/chunks/props.DU76EdKT.js","_app/immutable/chunks/store.DZH9q7LG.js","_app/immutable/chunks/attributes.Bs0tQp9y.js","_app/immutable/chunks/lifecycle.B6lB1Flq.js"];
export const stylesheets = ["_app/immutable/assets/Footer.B0FZX9Y1.css","_app/immutable/assets/aos.Da2bJX9P.css"];
export const fonts = [];
