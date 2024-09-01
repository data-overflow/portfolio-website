

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.CMGVi29_.js","_app/immutable/chunks/disclose-version.CwbsKFIk.js","_app/immutable/chunks/runtime.s-S3P415.js"];
export const stylesheets = [];
export const fonts = [];
