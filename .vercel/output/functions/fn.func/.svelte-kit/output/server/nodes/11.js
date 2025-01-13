

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.g3N9aEMM.js","_app/immutable/chunks/disclose-version.D2XAChPR.js","_app/immutable/chunks/runtime.D2zd1mVY.js","_app/immutable/chunks/legacy.CUleYnE3.js"];
export const stylesheets = [];
export const fonts = [];
