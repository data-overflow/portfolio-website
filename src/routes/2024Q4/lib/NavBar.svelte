<script>
	import { slide } from 'svelte/transition';
	import matrix from './assets/matrix-gif.gif';
	import { graphics, menuState } from './stores';
	import { onMount } from 'svelte';

	const GRAPHICS_NAME = {
		0: 'LOW',
		1: 'MEDIUM',
		2: 'HIGH',
		3: 'ULTRA'
	};
	// let $menuState = false;

	function toggleGraphics() {
		graphics.update((n) => {
			if (n > 2) {
				return 0;
			} else {
				return n + 1;
			}
		});
	}

	onMount(() => {
		const graphicsCache = sessionStorage.getItem('graphics');
		if (graphicsCache) {
			graphics.set(JSON.parse(graphicsCache));
		}
		graphics.subscribe((val) => {
			sessionStorage.setItem('graphics', JSON.stringify(val));
		});
	});
</script>

<header id="navigation fixed w-full">
	<nav
		id="navbar"
		class="flex flex-row w-full text-primary bg-black/80 backdrop-blur-xl text-2xl fixed z-[256]"
	>
		<button
			on:click={() => {
				$menuState = true;
			}}
			class="p-4 block md:hidden transition-all {$menuState ? 'rotate-90' : 'rotate-0'}"
			>&#9776;</button
		>
		<ul
			class="flex-col {$menuState
				? 'hidden'
				: 'hidden'} md:flex md:flex-row md:gap-8 px-8 md:grow my-auto"
		>
			<li class="active:bg-primary active:text-black">
				<a href="2024Q4/#about" class="p-2 hover:first-letter:underline hover:bg-gray-500/20"
					><span class="first-letter">A</span>BOUT</a
				>
			</li>
			<li class="active:bg-primary active:text-black">
				<a class="p-2 hover:bg-gray-500/20" href="2024Q4/#games"
					><span class="first-letter">G</span>AMES</a
				>
			</li>
			<li class="active:bg-primary active:text-black">
				<a class="p-2 hover:bg-gray-500/20" href="2024Q4/#projects"
					><span class="first-letter">P</span>ROJECTS</a
				>
			</li>
			<li class="active:bg-primary active:text-black hidden 2xl:block">
				<a class="p-2 hover:bg-gray-500/20" href="2024Q4/music"><span class="first-letter">M</span>USIC</a
				>
			</li>
			<li class="active:bg-primary active:text-black">
				<a class="p-2 hover:bg-gray-500/20" href="2024Q4/blog"><span class="first-letter">B</span>LOG</a>
			</li>
			<li class="active:bg-primary active:text-black hidden xl:block">
				<a class="p-2 hover:bg-gray-500/20" href="2024Q4/#connect"
					><span class="first-letter">C</span>ONNECT</a
				>
			</li>
		</ul>
		<div class="md:px-8 my-auto"><a href="/">DATAOVERFLOW</a></div>
	</nav>
</header>

<div
	class="fixed {$graphics >= 1
		? $graphics >= 2
			? 'bg-black/50 backdrop-blur-md'
			: 'bg-black/90'
		: 'bg-black'} text-2xl w-full h-[100dvh] z-[300] flex flex-col {$menuState ? '' : 'hidden'}"
>
	<img
		loading="lazy"
		src={matrix}
		alt="matrix-bg"
		class="fixed bottom-0 top-0 h-full -z-30 opacity-20 {$graphics >= 2 ? '' : 'hidden'}"
	/>
	<div class="flex flex-row">
		<button
			class="p-4 block md:hidden {$menuState ? 'rotate-0' : 'rotate-90'}"
			on:click={() => {
				$menuState = false;
			}}
		>
			[ <span class="text-primary">X</span> ]
		</button>
		<div class="md:px-8 my-auto text-primary">DATAOVERFLOW</div>
	</div>

	<ul class="flex-col md:flex md:flex-row md:gap-8 px-8 md:grow my-auto">
		{#key $menuState}
			<li in:slide={{ duration: 300 }} class="hover:bg-gray-500/20 p-2">
				<a
					on:click={() => {
						$menuState = false;
					}}
					href="2024Q4/#about"
					class="hover:first-letter:underline"><span class="first-letter">A</span>BOUT</a
				>
			</li>
			<li in:slide={{ duration: 300, delay: 100 }} class="active:bg-primary active:text-black">
				<a
					on:click={() => {
						$menuState = false;
					}}
					class="p-2 hover:bg-gray-500/20"
					href="2024Q4/#games"><span class="first-letter">G</span>AMES</a
				>
			</li>
			<li in:slide={{ duration: 300, delay: 200 }} class="active:bg-primary active:text-black">
				<a
					on:click={() => {
						$menuState = false;
					}}
					class="p-2 hover:bg-gray-500/20"
					href="2024Q4/#projects"><span class="first-letter">P</span>ROJECTS</a
				>
			</li>
			<li in:slide={{ duration: 300, delay: 300 }} class="active:bg-primary active:text-black">
				<a
					on:click={() => {
						$menuState = false;
					}}
					class="p-2 hover:bg-gray-500/20"
					href="2024Q4/music"><span class="first-letter">M</span>USIC</a
				>
			</li>
			<li in:slide={{ duration: 300, delay: 400 }} class="active:bg-primary active:text-black">
				<a
					on:click={() => {
						$menuState = false;
					}}
					class="p-2 hover:bg-gray-500/20"
					href="2024Q4/blog"><span class="first-letter">B</span>LOG</a
				>
			</li>

			<li in:slide={{ duration: 300, delay: 500 }} class="active:bg-primary active:text-black">
				<a
					on:click={() => {
						$menuState = false;
					}}
					class="p-2 hover:bg-gray-500/20"
					href="2024Q4/#connect"><span class="first-letter">C</span>ONNECT</a
				>
			</li>
		{/key}
	</ul>
	<div class="flex flex-col-reverse grow p-8">
		<button class="text-md text-secondary text-left" on:click={toggleGraphics}
			>GRAPHICS: {GRAPHICS_NAME[$graphics]}</button
		>
	</div>
</div>

<style>
	a {
		display: block;
	}
	a:hover:first-letter {
		text-decoration: underline;
		color: yellow;
		animation: blinker 0.9s step-start infinite;
	}
	a:active:first-letter {
		background-color: yellow;
		color: blue;
	}
	@keyframes blinker {
		50% {
			text-decoration: none;
		}
		100% {
			text-decoration: underline;
		}
	}
	/* nav {
    width: 100%;
    background-color: #400;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #111;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    font-size: 2vw;
    text-align: center;
    padding: 14px 24px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #222;
  }
  a:hover::first-letter {
    text-decoration: underline;
    animation: blinker 1s step-start infinite; 
  }
  .scroll-up {
    transform: translateY(0);
    position: fixed;
    width: 100%;
  }

  .scroll-down {
    transform: translateY(-100%);
    position: unset;
  }

  */
</style>
