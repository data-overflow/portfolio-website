export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple.ttf","archive/2020/404/404.html","archive/2020/404/debug.log","archive/2020/404/index.html","archive/2020/404.html","archive/2020/assets/css/font-awesome.min.css","archive/2020/assets/css/main.css","archive/2020/assets/fonts/fontawesome-webfont.eot","archive/2020/assets/fonts/fontawesome-webfont.svg","archive/2020/assets/fonts/fontawesome-webfont.ttf","archive/2020/assets/fonts/fontawesome-webfont.woff","archive/2020/assets/fonts/fontawesome-webfont.woff2","archive/2020/assets/fonts/FontAwesome.otf","archive/2020/assets/js/jquery.min.js","archive/2020/assets/js/jquery.scrollex.min.js","archive/2020/assets/js/jquery.scrolly.min.js","archive/2020/assets/js/main.js","archive/2020/assets/js/skel.min.js","archive/2020/assets/js/util.js","archive/2020/CNAME","archive/2020/CREDITS.txt","archive/2020/debug.log","archive/2020/elements.html","archive/2020/favicon.ico","archive/2020/generic.html","archive/2020/icons/icon-144x144.png","archive/2020/icons/icon-192x192.png","archive/2020/icons/icon-256x256.png","archive/2020/icons/icon-384x384.png","archive/2020/icons/icon-48x48.png","archive/2020/icons/icon-512x512.png","archive/2020/icons/icon-72x72.png","archive/2020/icons/icon-96x96.png","archive/2020/images/banner.jpg","archive/2020/images/banner2.jpg","archive/2020/images/banner3.jpg","archive/2020/images/banner4.jpg","archive/2020/images/banner5.jpg","archive/2020/images/blog.jpg","archive/2020/images/code.jpg","archive/2020/images/connect.jpg","archive/2020/images/data.jpg","archive/2020/images/favicon.png","archive/2020/images/forward.png","archive/2020/images/gamecode.png","archive/2020/images/icon.ico","archive/2020/images/logo.svg","archive/2020/images/new.jpg","archive/2020/images/pic01.jpg","archive/2020/images/pic02.jpg","archive/2020/images/skull.jpg","archive/2020/images/work.jpg","archive/2020/index.html","archive/2020/LICENSE.txt","archive/2021/icons/discord_icon.svg","archive/2021/icons/github.svg","archive/2021/icons/github_icon.svg","archive/2021/icons/icon.png","archive/2021/icons/instagram.svg","archive/2021/icons/instagram_icon.svg","archive/2021/icons/itch-io.svg","archive/2021/icons/itch_icon.svg","archive/2021/icons/linkedin.svg","archive/2021/icons/linkedin_icon.svg","archive/2021/icons/linkedin_icon2.svg","archive/2021/icons/soundcloud.svg","archive/2021/icons/soundcloud_icon.svg","archive/2021/icons/twitter.svg","archive/2021/icons/twitter_icon.svg","archive/2021/index.html","archive/2021/main.css","archive/2022/404.html","archive/2022/display1.html","archive/2022/display2.html","archive/2022/hiiii.gif","archive/2022/icons/git.svg","archive/2022/icons/insta.svg","archive/2022/icons/itc.svg","archive/2022/icons/linkedin.svg","archive/2022/icons/snap.svg","archive/2022/icons/sound.svg","archive/2022/icons/telegram.svg","archive/2022/icons/twitter.svg","archive/2022/index.html","archive/2022/README.md","archive/2022/stone.jpg","archive/2022/trex.jpg","archive/2023/assets/cursor-pointer.cur","archive/2023/assets/cursor.cur","archive/2023/assets/glitch-light.gif","archive/2023/assets/icons/git.svg","archive/2023/assets/icons/insta.svg","archive/2023/assets/icons/itc.svg","archive/2023/assets/icons/linkedin.svg","archive/2023/assets/icons/snap.svg","archive/2023/assets/icons/sound.svg","archive/2023/assets/icons/telegram.svg","archive/2023/assets/icons/twitter.svg","archive/2023/assets/layer1.gif","archive/2023/assets/layer2.gif","archive/2023/assets/layer3.gif","archive/2023/assets/me.jpg","archive/2023/assets/me2.jpg","archive/2023/assets/mood.png","archive/2023/assets/splash-edit.gif","archive/2023/assets/splash.gif","archive/2023/index.html","archive/2023/KavirajarB-Resume.pdf","archive/2023/script.js","archive/2023/style.css","archive/2023/terminal/terminal-style.css","archive/2023/terminal/terminal.js","archive/2023/vanilla/assets/Battle Code/battlecode.py","archive/2023/vanilla/assets/Battle Code/competition.py","archive/2023/vanilla/assets/Battle Code/frontend/fonts/Quantum.otf","archive/2023/vanilla/assets/Battle Code/frontend/home.html","archive/2023/vanilla/assets/Battle Code/frontend/styles.css","archive/2023/vanilla/assets/Battle Code/new/battlecode.py","archive/2023/vanilla/assets/Battle Code/new/template.py","archive/2023/vanilla/assets/Battle Code/new/__pycache__/template.cpython-39.pyc","archive/2023/vanilla/assets/Battle Code/template.py","archive/2023/vanilla/assets/Battle Code/__pycache__/battlecode.cpython-39.pyc","archive/2023/vanilla/assets/Battle Code/__pycache__/template.cpython-39.pyc","archive/2023/vanilla/assets/cursor-pointer.cur","archive/2023/vanilla/assets/cursor.cur","archive/2023/vanilla/assets/glitch-light.gif","archive/2023/vanilla/assets/icons/git.svg","archive/2023/vanilla/assets/icons/insta.svg","archive/2023/vanilla/assets/icons/itc.svg","archive/2023/vanilla/assets/icons/linkedin.svg","archive/2023/vanilla/assets/icons/snap.svg","archive/2023/vanilla/assets/icons/sound.svg","archive/2023/vanilla/assets/icons/telegram.svg","archive/2023/vanilla/assets/icons/twitter.svg","archive/2023/vanilla/assets/layer1.gif","archive/2023/vanilla/assets/layer2.gif","archive/2023/vanilla/assets/layer3.gif","archive/2023/vanilla/assets/me.jpg","archive/2023/vanilla/assets/me2.jpg","archive/2023/vanilla/assets/mood.png","archive/2023/vanilla/assets/splash-edit.gif","archive/2023/vanilla/assets/splash.gif","archive/2023/vanilla/index.html","archive/2023/vanilla/KavirajarB-Resume.pdf","archive/2023/vanilla/script.js","archive/2023/vanilla/style.css","archive/2023/vanilla/terminal/terminal-style.css","archive/2023/vanilla/terminal/terminal.js","assets/1-9b6357df.png","assets/apple-966cac34.ttf","assets/cognizant-1c516bd8.png","assets/dav-bcd1db6c.png","assets/fiverr-00fe6218.png","assets/fiverr-7ce3f85c.svg","assets/github-eccccd64.svg","assets/index-186428f0.js","assets/index-ee47c1ca.css","assets/instagram-73791538.svg","assets/itch-f6a955b3.svg","assets/layer-1-cf6b95fa.gif","assets/layer-3-92ef77fd.gif","assets/linkedin-62e710a5.svg","assets/matrix-gif-be019705.gif","assets/mood-91db0d69.png","assets/moutain_city-de9c9bab.png","assets/soundcloud-03b3da6f.svg","assets/telegram-2c39aa3f.svg","assets/x-2ad2ed01.svg","assets/youtube-36253922.svg","favicon.png","hi.gif","PerfectDOSVGA437.ttf","robots.txt","terminal/terminal-style.css","terminal/terminal.js","vite.svg"]),
	mimeTypes: {".ttf":"font/ttf",".html":"text/html",".log":"text/plain",".css":"text/css",".svg":"image/svg+xml",".woff":"font/woff",".woff2":"font/woff2",".otf":"font/otf",".js":"text/javascript",".txt":"text/plain",".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".md":"text/markdown",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.9wQKXj8H.js","app":"_app/immutable/entry/app.DhW76MV3.js","imports":["_app/immutable/entry/start.9wQKXj8H.js","_app/immutable/chunks/entry.CV4WPPGP.js","_app/immutable/chunks/runtime.CdhxA4nL.js","_app/immutable/chunks/index.De_KEhe_.js","_app/immutable/chunks/index-client.BXlL_vRa.js","_app/immutable/entry/app.DhW76MV3.js","_app/immutable/chunks/runtime.CdhxA4nL.js","_app/immutable/chunks/render.CL8mvRJp.js","_app/immutable/chunks/disclose-version.C0ON5NiS.js","_app/immutable/chunks/props.NROzqpRA.js","_app/immutable/chunks/store.DyFkm4wv.js","_app/immutable/chunks/index-client.BXlL_vRa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/2024Q1",
				pattern: /^\/2024Q1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/rss",
				pattern: /^\/api\/rss\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/rss/_server.js'))
			},
			{
				id: "/archive-2024",
				pattern: /^\/archive-2024\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/archive-2024/2024Q1",
				pattern: /^\/archive-2024\/2024Q1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/archive-2024/blog",
				pattern: /^\/archive-2024\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/archive-2024/music",
				pattern: /^\/archive-2024\/music\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/archive-2024/test",
				pattern: /^\/archive-2024\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/music",
				pattern: /^\/music\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
