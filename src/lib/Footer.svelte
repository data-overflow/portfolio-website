<script>
	import linkedin from '$lib/assets/social/linkedin.svg';
	import github from '$lib/assets/social/github.svg';
	import instagram from '$lib/assets/social/instagram.svg';
	import itch from '$lib/assets/social/itch.svg';
	import fiverr from '$lib/assets/social/fiverr.svg';
	import soundcloud from '$lib/assets/social/soundcloud.svg';
	import telegram from '$lib/assets/social/telegram.svg';
	import x from '$lib/assets/social/x.svg';
	import youtube from '$lib/assets/social/youtube.svg';
	import { onMount } from 'svelte';
	import AOS from 'aos';

	const currentYear = new Date().getFullYear();
	const RESUME_LINK = "https://drive.google.com/file/d/1Iufwcex0A8wS0pBlGnAzqO1xxuQPpTWW/view?usp=sharing";

	const socialLinks = [
		{ icon: linkedin, url: 'https://in.linkedin.com/in/kavirajar', name: 'LinkedIn' },
		{ icon: github, url: 'https://github.com/data-overflow', name: 'GitHub' },
		{ icon: x, url: 'https://twitter.com/kvrjr', name: 'Twitter' },
		{ icon: telegram, url: 'https://t.me/kvrjr', name: 'Telegram' },
		{ icon: fiverr, url: 'https://www.fiverr.com/dataoverflow/', name: 'Fiverr' },
		{ icon: instagram, url: 'https://instagram.com/data.overflow', name: 'Instagram' },
		{ icon: itch, url: 'https://dataoverflow.itch.io', name: 'Itch.io' },
		{ icon: soundcloud, url: 'https://soundcloud.com/data-overflow', name: 'SoundCloud' },
		{ icon: youtube, url: 'https://www.youtube.com/@kavirajar', name: 'YouTube' }
	];

	// Newsletter subscription
	let email = '';
	let subscribing = false;
	let subscriptionMessage = '';
	let subscriptionStatus = '';

	async function subscribeToNewsletter() {
		if (!email) {
			subscriptionMessage = 'Please enter a valid email address';
			subscriptionStatus = 'error';
			return;
		}

		try {
			subscribing = true;
			subscriptionMessage = '';
			
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			});
			
			const result = await response.json();
			
			if (response.ok) {
				subscriptionMessage = result.message;
				subscriptionStatus = 'success';
				email = ''; // Clear the input on success
			} else {
				subscriptionMessage = result.message;
				subscriptionStatus = 'error';
			}
		} catch (error) {
			console.error('Subscription error:', error);
			subscriptionMessage = 'An error occurred. Please try again later.';
			subscriptionStatus = 'error';
		} finally {
			subscribing = false;
		}
	}

	onMount(() => {
		AOS.init();
	});
</script>

<footer id="connect" class="bg-black border-t-4 border-primary pt-16 pb-8 px-6 md:px-10">
	<div class="container mx-auto">
		<!-- Footer top -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 xl:gap-8 mb-12">
			<!-- Column 1: About & Social -->
			<div class="flex flex-col" data-aos="fade-up">
				<div class="text-primary text-3xl mb-4">DATAOVERFLOW</div>
				<p class="text-doswhite text-lg mb-4 sf">
					22 | Technologist & Indie Hacker | Game Development | Agentic AI | Web 2.0 | Quantitative Finance
				</p>
				<div class="flex flex-wrap gap-1 mt-2">
					{#each socialLinks as link}
						<a 
							href={link.url} 
							target="_blank" 
							rel="noreferrer"
							class="w-8 h-8 flex items-center justify-center border border-doswhite/20 hover:border-primary transition-colors bg-black/50 rounded-sm"
							aria-label={link.name}
						>
							<img src={link.icon} alt="" class="w-4 h-4" />
						</a>
					{/each}
				</div>
			</div>

			<!-- Column 2: Navigation -->
			<div class="flex flex-col" data-aos="fade-up" data-aos-delay="50">
				<div class="text-secondary windows text-xl mb-4">LEVEL SELECT</div>
				<nav aria-label="Footer navigation">
					<ul class="flex flex-col gap-2 windows text-xl">
						<li><a href="/#about" class="text-doswhite hover:text-primary transition-colors">ABOUT</a></li>
						<li><a href="/#games" class="text-doswhite hover:text-primary transition-colors">GAMES</a></li>
						<li><a href="/#projects" class="text-doswhite hover:text-primary transition-colors">PROJECTS</a></li>
						<li><a href="/music" class="text-doswhite hover:text-primary transition-colors">MUSIC</a></li>
						<li><a href="/blog" class="text-doswhite hover:text-primary transition-colors">BLOG</a></li>
					</ul>
				</nav>
			</div>

			<!-- Column 3: Resources -->
			<div class="flex flex-col" data-aos="fade-up" data-aos-delay="100">
				<div class="text-secondary windows text-xl mb-4">RESOURCES</div>
				<ul class="flex flex-col gap-2 windows text-xl">
					<li>
						<a
							class="text-doswhite hover:text-primary transition-colors windows"
							target="_blank"
							rel="noreferrer"
							href="https://docs.google.com/presentation/d/1OkTRtbzJCZRIzMU_4zev6jRgl67bUtxe/edit?usp=sharing&ouid=102067098286536378623&rtpof=true&sd=true"
							>BROCHURE</a
						>
					</li>
					<li>
						<a
							class="text-doswhite hover:text-primary transition-colors windows"
							target="_blank"
							rel="noreferrer"
							href={RESUME_LINK}
							>RESUME</a
						>
					</li>
				</ul>
			</div>

			<!-- Column 4: Archive -->
			<div class="flex flex-col" data-aos="fade-up" data-aos-delay="150">
				<div class="text-secondary windows text-xl mb-4">ARCHIVE</div>
				<ul class="flex flex-col gap-2 windows text-xl">
					<li>
						<a 
							class="text-doswhite hover:text-primary transition-colors windows" 
							href="/2024Q4"
							>2024</a
						>
					</li>
					<li>
						<a
							class="text-doswhite hover:text-primary transition-colors windows"
							href="https://data-overflow.github.io/archive/2023"
							target="_blank"
							rel="noreferrer"
							>2023</a
						>
					</li>
					<li>
						<a
							class="text-doswhite hover:text-primary transition-colors windows"
							href="https://data-overflow.github.io/archive/2022"
							target="_blank"
							rel="noreferrer"
							>2022</a
						>
					</li>
					<li>
						<a
							class="text-doswhite hover:text-primary transition-colors windows"
							href="https://data-overflow.github.io/archive/2021"
							target="_blank"
							rel="noreferrer"
							>2021</a
						>
					</li>
					<li>
						<a
							class="text-doswhite hover:text-primary transition-colors windows"
							href="https://data-overflow.github.io/archive/2020"
							target="_blank"
							rel="noreferrer"
							>2020</a
						>
					</li>
				</ul>
			</div>
		</div>

		<!-- Newsletter signup -->
		<div class="border-2 border-doswhite/30 p-6 mb-12" data-aos="fade-up">
			<div class="flex flex-col md:flex-row gap-6 items-center justify-between">
				<div class="flex-1">
					<h3 class="text-primary text-2xl mb-2">SUBSCRIBE TO MY NEWSLETTER</h3>
					<p class="text-doswhite text-lg sf">Get updates on new projects, blogs and game releases direct to your inbox!</p>
					{#if subscriptionMessage}
						<p class="mt-2 text-lg dos {subscriptionStatus === 'success' ? 'text-primary' : 'text-red-500'}">
							[ {subscriptionMessage} ]
						</p>
					{:else}
						<p class="mt-2 text-sm dos text-transparent">[ Hehhehehe what ye looking at? ]</p>
					{/if}

				</div>
				<form 
					on:submit|preventDefault={subscribeToNewsletter}
					class="flex flex-col md:flex-row gap-2 w-full md:w-auto"
				>
					<input 
						type="email" 
						bind:value={email}
						placeholder="YOUR EMAIL ADDRESS"
						class="bg-black border-2 border-doswhite/50 px-4 py-2 text-doswhite w-full md:w-auto placeholder:text-doswhite/50 focus:border-primary focus:outline-none"
						required
					/>
					<button 
						type="submit"
						class="bg-primary text-black border-2 border-primary px-6 py-2 hover:bg-primary/80 transition-colors {subscribing ? 'opacity-50 cursor-not-allowed' : ''}"
						disabled={subscribing}
					>
						{#if subscribing}
							SENDING...
						{:else}
							SUBSCRIBE
						{/if}
					</button>
				</form>
			</div>
		</div>

		<!-- Footer bottom -->
		<div class="border-t border-doswhite/10 pt-8 flex flex-col md:flex-row justify-between items-center">
			<div class="text-doswhite/70 text-sm mb-4 md:mb-0">
				Made with <span class="text-secondary animate-pulse inline-block">&lt;3</span> by Kavirajar B | <span class="switzer">&copy;</span> {currentYear}
			</div>
			<div class="text-doswhite/50 text-sm">
				<a href="/privacy-policy" class="hover:text-primary transition-colors">PRIVACY POLICY</a> | 
				<a href="/cookies" class="hover:text-primary transition-colors">COOKIES</a> | 
				<a href="/legal" class="hover:text-primary transition-colors">LEGAL</a>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Subtle social icon hover effect */
	a img {
		opacity: 0.8;
		transition: all 0.2s ease;
	}

	a:hover img {
		opacity: 1;
		transform: translateY(-2px);
	}
</style>
