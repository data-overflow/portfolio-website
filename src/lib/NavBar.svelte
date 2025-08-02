<script>
	import { slide } from 'svelte/transition';
	import matrix from './assets/matrix-gif.gif';
	import { graphics, menuState } from './stores';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const GRAPHICS_NAME = {
		0: 'LOW',
		1: 'MEDIUM',
		2: 'HIGH',
		3: 'ULTRA'
	};

	function toggleGraphics() {
		graphics.update((n) => {
			if (n > 2) {
				return 0;
			} else {
				return n + 1;
			}
		});
	}

	// Handle active link tracking
	$: pathname = $page.url.pathname;
	$: hash = $page.url.hash || '';
	$: currentSection = pathname === '/' ? 'home' : pathname.substring(1).split('/')[0];

	function isActive(path) {
		// For hash links on the home page (/#something)
		if (path.startsWith('/#') && pathname === '/') {
			// If no hash is present in the URL, don't highlight anything
			if (!hash) return false;
			
			// Compare the hash portion of the path with the current hash
			return path.substring(1) === hash;
		}
		
		// For non-hash links (like /blog, /music)
		return path.includes(currentSection) && !path.startsWith('/#');
	}

	// Close menu when clicking outside
	function handleClickOutside(event) {
		if ($menuState && !event.target.closest('#mobile-menu') && !event.target.closest('#menu-toggle')) {
			$menuState = false;
		}
	}

	onMount(() => {
		const graphicsCache = sessionStorage.getItem('graphics');
		if (graphicsCache) {
			graphics.set(JSON.parse(graphicsCache));
		}
		graphics.subscribe((val) => {
			sessionStorage.setItem('graphics', JSON.stringify(val));
		});

		// Add click outside listener
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<header id="navigation" class="w-full ">
	<nav
		id="navbar"
		class="flex flex-row w-full text-primary bg-black/80 backdrop-blur-xl text-2xl fixed z-[256] px-6 md:px-10 xl:px-32"
		aria-label="Main navigation"
	>
		<button
			id="menu-toggle"
			on:click={() => {
				$menuState = !$menuState;
			}}
			class="p-4 block md:hidden transition-all {$menuState ? 'rotate-90' : 'rotate-0'}"
			aria-controls="mobile-nav-menu"
			aria-expanded={$menuState}
			aria-label="Toggle navigation menu"
			>&#9776;</button
		>
		<ul
			class="hidden md:flex md:flex-row md:grow my-auto"
			aria-label="Desktop navigation links"
		>
			<li class:active={isActive('/#about')}>
				<a href="/#about" class="-ml-4 p-1 px-4 hover:first-letter:underline hover:bg-gray-500/20 {isActive('/#about') ? 'text-secondary' : ''}"
					><span class="first-letter">A</span>BOUT</a
				>
			</li>
			<li class:active={isActive('/#games')}>
				<a class="p-1 px-4 hover:bg-gray-500/20 {isActive('/#games') ? 'text-secondary' : ''}" href="/#games"
					><span class="first-letter">G</span>AMES</a
				>
			</li>
			<li class:active={isActive('/#projects')}>
				<a class="p-1 px-4 hover:bg-gray-500/20 {isActive('/#projects') ? 'text-secondary' : ''}" href="/#projects"
					><span class="first-letter">P</span>ROJECTS</a
				>
			</li>
			<li class:active={isActive('/music')}>
				<a class="p-1 px-4 hover:bg-gray-500/20 {isActive('/music') ? 'text-secondary' : ''}" href="/music"><span class="first-letter">M</span>USIC</a
				>
			</li>
			<li class:active={isActive('/blog')}>
				<a class="p-1 px-4 hover:bg-gray-500/20 {isActive('/blog') ? 'text-secondary' : ''}" href="/blog"><span class="first-letter">B</span>LOG</a>
			</li>
			<li class:active={isActive('/#connect')}>
				<a class="p-1 px-4 hover:bg-gray-500/20 {isActive('/#connect') ? 'text-secondary' : ''}" href="/#connect"
					><span class="first-letter">C</span>ONNECT</a
				>
			</li>
		</ul>
		<div class="px-4 md:px-8 my-auto ml-auto md:ml-0">
			<a href="/" class="text-primary font-bold hover:text-secondary transition-colors">DATAOVERFLOW</a>
		</div>
	</nav>
</header>

<div
	id="mobile-menu"
	class="fixed {$graphics >= 1
		? $graphics >= 2
			? 'bg-black/90 backdrop-blur-md'
			: 'bg-black/95'
		: 'bg-black'} text-2xl w-full h-[100dvh] z-[300] flex flex-col {$menuState ? '' : 'hidden'}"
	aria-hidden={!$menuState}
>
	<img
		loading="lazy"
		src={matrix}
		alt=""
		class="fixed bottom-0 top-0 h-full -z-30 opacity-20 {$graphics >= 2 ? '' : 'hidden'}"
		aria-hidden="true"
	/>
	<div class="flex flex-row justify-between p-4">
		<button
			class="block md:hidden {$menuState ? 'rotate-0' : 'rotate-90'}"
			on:click={() => {
				$menuState = false;
			}}
			aria-label="Close navigation menu"
		>
			[ <span class="text-primary">X</span> ]
		</button>
		<div class="text-primary font-bold">DATAOVERFLOW</div>
	</div>

	<ul id="mobile-nav-menu" class="flex flex-col gap-2 px-8 py-8 grow">
		{#key $menuState}
			<li in:slide={{ duration: 200 }} class="hover:bg-gray-500/20 p-2">
				<a
					on:click={() => {
						$menuState = false;
					}}
					href="/#about"
					class="hover:first-letter:underline {isActive('/#about') ? 'text-secondary' : ''}"
					><span class="first-letter">A</span>BOUT</a
				>
			</li>
			<li in:slide={{ duration: 200, delay: 100 }} class="hover:bg-gray-500/20 p-2">
				<a
					on:click={() => {
						$menuState = false;
					}}
					href="/#games"
					class="{isActive('/#games') ? 'text-secondary' : ''}"
					><span class="first-letter">G</span>AMES</a
				>
			</li>
			<li in:slide={{ duration: 200, delay: 200 }} class="hover:bg-gray-500/20 p-2">
				<a
					on:click={() => {
						$menuState = false;
					}}
					href="/#projects"
					class="{isActive('/#projects') ? 'text-secondary' : ''}"
					><span class="first-letter">P</span>ROJECTS</a
				>
			</li>
			<li in:slide={{ duration: 200, delay: 300 }} class="hover:bg-gray-500/20 p-2">
				<a
					on:click={() => {
						$menuState = false;
					}}
					href="/music"
					class="{isActive('/music') ? 'text-secondary' : ''}"
					><span class="first-letter">M</span>USIC</a
				>
			</li>
			<li in:slide={{ duration: 200, delay: 400 }} class="hover:bg-gray-500/20 p-2">
				<a
					on:click={() => {
						$menuState = false;
					}}
					href="/blog"
					class="{isActive('/blog') ? 'text-secondary' : ''}"
					><span class="first-letter">B</span>LOG</a
				>
			</li>
			<li in:slide={{ duration: 200, delay: 500 }} class="hover:bg-gray-500/20 p-2">
				<a
					on:click={() => {
						$menuState = false;
					}}
					href="/#connect"
					class="{isActive('/#connect') ? 'text-secondary' : ''}"
					><span class="first-letter">C</span>ONNECT</a
				>
			</li>
		{/key}
	</ul>
	<div class="flex flex-col-reverse p-8">
		<button 
			class="text-md text-secondary text-left border border-secondary px-4 py-2 hover:bg-secondary/10 transition-colors" 
			on:click={toggleGraphics}
			aria-label="Toggle graphics quality"
		>
			GRAPHICS: [ <span class="text-primary">{GRAPHICS_NAME[$graphics]}</span> ]
		</button>
	</div>
</div>

<style>
	a {
		display: block;
	}
	a:hover:first-letter {
		text-decoration: underline;
		color: #e9d05e; /* Secondary color */
		animation: blinker 0.9s step-start infinite;
	}
	a:active:first-letter {
		background-color: #e9d05e;
		color: black;
	}
	
	.active a {
		color: #e9d05e;
	}
	
	@keyframes blinker {
		50% {
			text-decoration: none;
		}
		100% {
			text-decoration: underline;
		}
	}
</style>
