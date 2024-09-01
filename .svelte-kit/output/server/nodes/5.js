

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/music/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CPJll0cG.js","_app/immutable/chunks/disclose-version.CwbsKFIk.js","_app/immutable/chunks/runtime.s-S3P415.js","_app/immutable/chunks/Music.CIzdksUC.js","_app/immutable/chunks/attributes.DZ4EOMXf.js"];
export const stylesheets = [];
export const fonts = [];
