<script>
	import { onMount } from 'svelte';
	import SocialIcons from './SocialIcons.svelte';
	import { fly, fade, scale } from 'svelte/transition';
	import { cubicOut, elasticOut } from 'svelte/easing';
	import art from "$lib/assets/art.mp4"

	let { rss } = $props();
	let showMessage = $state(false);

	let home = $state();
	let message = $state();
	let typewriter = $state();
	let animationComplete = $state(false);
	let textVisible = $state(false);

	// Animated text content
	// const phrases = [
	// 	'I write Code.',
	// 	'I create Games.',
	// 	'I design UIs.',
	// 	'I love Pixel Art.'
	// ];
	const phrases = [
		'I write Code.',
		'I am Creative.\n\n\n\n\n\n\n\n\n\n\n\nI guess.',
		'I Love Design. Pixel Art. 8 Bit Music. And Creating Video Games.',
		'Humans call me Kavirajar B',
		'Scroll Down!\n\n\n\n\n\n\n\n And witness pure magic',
		'Wait you are still here?\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Lmao.',
		'This text is just going to loop itself, nothing fancy to see here. Scroll down.',
		"You can't be stuck here pls. Move on to the rest of the site!"
	];
	let currentPhraseIndex = $state(0);
	let typingText = $state('');
	let isDeleting = $state(false);
	let typingDelay = $state(150);

	// Parallax elements
	let parallaxElements = $state([]);
	
	// Typing animation
	function typeText() {
		const currentPhrase = phrases[currentPhraseIndex];
		
		if (!isDeleting && typingText === currentPhrase) {
			// Pause at the end of typing
			isDeleting = true;
			typingDelay = 1000;
		} else if (isDeleting && typingText === '') {
			// Move to the next phrase
			isDeleting = false;
			currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
			typingDelay = 250;
		} else {
			// Type or delete one character
			if (isDeleting) {
				typingText = currentPhrase.substring(0, typingText.length - 1);
				typingDelay = 25;
			} else {
				typingText = currentPhrase.substring(0, typingText.length + 1);
				typingDelay = 75 - Math.random() * 50;
			}
		}
		
		setTimeout(typeText, typingDelay);
	}

	onMount(() => {
		// Start typing animation
		setTimeout(() => {
			typeText();
		}, 1500);
		
		// Set animated elements to complete after intro animation
		setTimeout(() => {
			animationComplete = true;
			textVisible = true;
		}, 800);
		
		// Parallax effect
		window.addEventListener('scroll', function () {
			if (home) {
				home.style.backgroundPositionY = (-20 + this.scrollY * 0.2).toString() + '%';
			}
		});
		
		// Cursor following message
		document.addEventListener('mousemove', function (e) {
			const mouseX = e.clientX;
			const mouseY = e.clientY;
			let left;
			if (message && message.offsetWidth) {
				left = mouseX - (message.offsetWidth / 2) //- 125;
			} else {
				left = mouseX - 125;
			}
			let top = mouseY;
			left = Math.max(0, Math.min(left, window.innerWidth * 0.6));
			if (message) {
				message.style.left = left + 'px';
				message.style.top = top + 'px';
			}
		});
		
		// Mouse parallax effect for decorative elements
		document.addEventListener('mousemove', function(e) {
			const mouseX = e.clientX;
			const mouseY = e.clientY;
			
			document.querySelectorAll('.parallax-element').forEach((element, index) => {
				const speed = 0.03 + (index * 0.01);
				const x = (window.innerWidth / 2 - mouseX) * speed;
				const y = (window.innerHeight / 2 - mouseY) * speed;
				element.style.transform = `translateX(${x}px) translateY(${y}px)`;
			});
		});
	});
</script>

<div
	bind:this={message}
	class="absolute bg-black/50 backdrop-blur px-4 py-2 rounded transition-opacity z-10 text-doswhite dos {showMessage
		? 'opacity-100'
		: 'opacity-0'}"
>
<div class="flex flex-row">
	<div 
		class="h-14 w-fit absolute -mt-12 -ml-4 flex items-center"
	>
		<span class="text-xs md:text-sm text-primary">&gt;</span>
		<span class="text-xs md:text-sm text-doswhite/90 opacity-50 sf ml-2">{typingText}</span>
		<span class="text-xs md:text-sm text-doswhite/90 sf typing-cursor">|</span>
	</div>
	<video
		autoplay
		loop
		muted
		playsinline
		class="absolute inset-0 object-cover backdrop-blur-xl opacity-50 min-w-1/3 min-h-1/3 max-h-1/2 max-w-1/2"
	>
		<source src="{art}" type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	<span class="opacity-0"><span class="text-primary text-xs">&gt;</span> That's me working on the next big thing!</span>
</div>
</div>

<div id="home" bind:this={home} class="h-full w-full flex items-center relative overflow-hidden">
	
	
	<!-- Background video -->
	
	<!-- <div class="backdrop-blur bg-black/50 absolute inset-0 h-full w-full pointer-events-none"></div> -->
	
	<!-- Decorative elements -->
	<div class="absolute inset-0 pointer-events-none overflow-hidden">
		<!-- Animated grid background -->
		<div class="absolute inset-0 grid-animation opacity-30"></div>
		
		<!-- Pixelated decorative elements with parallax -->
		<!-- <div class="parallax-element absolute top-[15%] left-[10%] w-16 h-16 pixel-square opacity-30"></div>
		<div class="parallax-element absolute top-[25%] right-[15%] w-8 h-8 pixel-square opacity-20"></div>
		<div class="parallax-element absolute bottom-[20%] left-[20%] w-12 h-12 pixel-square opacity-25"></div>
		<div class="parallax-element absolute bottom-[30%] right-[25%] w-10 h-10 pixel-square opacity-30"></div> -->
		
		<!-- Animated scanlines -->
		<div class="scanlines absolute inset-0 pointer-events-none"></div>
	</div>
	
	<!-- Main content -->
	<div class="flex flex-col justify-end  h-full w-full z-20 px-6 md:px-10 xl:px-32 py-16">
		{#if animationComplete}
			<div 
				in:fly={{ y: 50, duration: 800, delay: 300, easing: cubicOut }}
				class="text-2xl md:text-3xl text-doswhite/60 sf"
			>
			Technologist & Indie Hacker
			</div>
			<div 
				in:fly={{ y: -50, duration: 800, delay: 100, easing: cubicOut }}
				class="text-6xl md:text-[min(12vw,_20rem)] font-semibold sf text-doswhite"
			>
				<span class="text-primary sf">Kavirajar B</span>
			</div>
			
			<div class="flex flex-col gap-6">
				<!-- <div 
					in:fly={{ y: 50, duration: 800, delay: 300, easing: cubicOut }}
					class="text-2xl md:text-3xl text-doswhite/90 sf"
				>
					Technologist & Indie Hacker 
				</div> -->
				
				
				
				<!-- <div 
					in:fade={{ duration: 800, delay: 700 }}
					class="h-fit"
				>
					<SocialIcons opacity={80} />
				</div>
				
				<div
					in:fade={{ duration: 800, delay: 900 }}
					class="flex z-100 pointer-events-auto flex-col md:flex-row w-full md:w-auto gap-4 items-center text-xl md:text-2xl mt-4 bg-transparent"
				>
					<a
						class="p-2 z-[1000] px-6 border-2 w-full md:w-auto border-primary text-primary hover:bg-primary/20 transition-all rounded-sm"
						href="https://flowcv.com/resume/pjasuoi5b2"
						target="_blank"
					>
						View_Resume.exe
					</a>
					
					<a 
						class="p-2 z-[1000] px-6 border-2 w-full md:w-auto border-doswhite text-doswhite hover:border-primary hover:text-primary transition-all rounded-sm"
						href="#about"
					>
						Explore_Work.bat
					</a>
				</div> -->
			</div>
		{/if}
	</div>

	<!-- Animated pointer element -->
	<div
		role="presentation"
		class="bg-transparent right-[15%] top-[50%] md:absolute w-64 h-96 hidden md:block z-50"
		onmouseenter={() => {
			showMessage = true;
		}}
		onmouseleave={() => {
			showMessage = false;
		}}
	></div>
</div>

{#if rss && rss.success}
	<div
		class="overflow-x-hidden flex h-fit relative bg-black text-white/60 windows font-bold text-base"
	>
		<div class="animate-marquee whitespace-nowrap h-fit w-fit">
			{#each rss.news as news}
				<span class="mx-2 min-h-fit">{news} <span class="mx-4">/</span> </span>
			{/each}
		</div>
		<div class="animate-marquee2 whitespace-nowrap h-fit absolute w-fit">
			{#each rss.news as news}
				<span class="mx-2 min-h-fit">{news} <span class="mx-4">/</span> </span>
			{/each}
		</div>
	</div>
{/if}

<style>
	::selection {
		background-color: #e9d05e;
		color: black;
	}
	
	#home {
		background-size: cover;
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(20, 21, 21, 0.5)),
			url('./assets/mood.webp');
		background-position-y: -20%;
		background-position-x: 80%;
		/* background-size: 125%; */
		height: 96vh;
		width: 100%;
	}
	
	/* Typing cursor animation */
	.typing-cursor {
		display: inline-block;
		animation: cursor-blink 1s infinite;
	}
	
	@keyframes cursor-blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}
	
	/* Grid background animation */
	.grid-animation {
		background-image: 
			linear-gradient(rgba(50, 50, 50, 0.1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(50, 50, 50, 0.1) 1px, transparent 1px);
		background-size: 40px 40px;
		animation: grid-scroll 20s linear infinite;
	}
	
	@keyframes grid-scroll {
		0% { background-position: 0px 0px; }
		100% { background-position: 40px 40px; }
	}
	
	/* Scanlines effect */
	.scanlines {
		background: linear-gradient(
			to bottom,
			transparent 0%,
			rgba(255, 255, 255, 0.05) 50%,
			transparent 100%
		);
		background-size: 100% 4px;
		animation: scanline 8s linear infinite;
	}
	
	@keyframes scanline {
		0% { background-position: 0 0; }
		100% { background-position: 0 100%; }
	}
	
	/* Pixel squares */
	/* .pixel-square {
		background-image: url('./assets/heart.png');
		background-size: 100% 100%;
		transition: transform 0.2s ease-out;
	} */
	 @media only screen and (min-width: 1540px) {
		#home {
			background-size: 125%;
		}
	 }
</style>
