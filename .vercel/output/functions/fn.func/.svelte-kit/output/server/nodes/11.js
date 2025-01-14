

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.DqRDzkO6.js","_app/immutable/chunks/disclose-version.C0ON5NiS.js","_app/immutable/chunks/runtime.CdhxA4nL.js","_app/immutable/chunks/legacy.D3CvSoT7.js"];
export const stylesheets = [];
export const fonts = [];
