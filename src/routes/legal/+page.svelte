<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	const lastUpdated = "April 5, 2025";

	onMount(() => {
		AOS.init();
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<title>Terms of Service | DataOverflow</title>
	<meta name="description" content="Terms of Service for DataOverflow - The friendly version without legal jargon." />
</svelte:head>

<div class="bg-black min-h-screen py-16 px-4 md:px-10">
	<div class="container mx-auto max-w-4xl">
		<!-- Back button -->
		<div class="mb-8">
			<a 
				href="/" 
				class="inline-flex items-center text-doswhite hover:text-primary transition-colors"
				data-aos="fade-right"
			>
				<span class="text-2xl mr-1">←</span> 
				<span>[RETURN HOME]</span>
			</a>
		</div>
		
		<!-- Header -->
		<div class="mb-12">
			<h1 class="text-4xl md:text-5xl text-primary mb-4" data-aos="fade-up">
				TERMS OF SERVICE
			</h1>
			<p class="text-secondary" data-aos="fade-up" data-aos-delay="100">
				LAST UPDATED: {lastUpdated}
			</p>
		</div>
		
		<!-- Content -->
		<div class="text-doswhite" data-aos="fade-up" data-aos-delay="200">
			<div class="mb-8 text-lg">
				<p class="text-xl mb-6">
					The "please don't do anything sketchy" agreement. (In plain English!)
				</p>
				
				<h2 class="text-secondary text-2xl mb-4">THE BASICS</h2>
				<p class="mb-6">
					• This is my personal portfolio website. You're welcome to browse it.
				</p>
				<p class="mb-6">
					• All the content on this site (code, art, text, etc.) is stuff I made or have permission to use. Please don't steal it.
				</p>
				<p class="mb-6">
					• If you want to share something from my site (like a project), that's cool! Just credit me and link back.
				</p>
				
				<h2 class="text-secondary text-2xl mb-4 mt-12">PLEASE DON'T</h2>
				<p class="mb-6">
					I'd really appreciate if you didn't:
				</p>
				<ul class="list-disc pl-8 mb-8">
					<li class="mb-2">Try to break my website (I worked hard on it!)</li>
					<li class="mb-2">Pretend my work is yours</li>
					<li class="mb-2">Use my content for anything illegal or harmful</li>
					<li class="mb-2">Spam my contact form or subscribe box</li>
				</ul>
				
				<h2 class="text-secondary text-2xl mb-4 mt-12">LINKS TO OTHER SITES</h2>
				<p class="mb-6">
					This site might have links to other websites. I don't control those other sites, so once you click those links, you're in their territory and subject to their rules.
				</p>
				
				<h2 class="text-secondary text-2xl mb-4 mt-12">DISCLAIMER</h2>
				<p class="mb-6">
					I've tried to make everything on this site accurate and useful, but I can't promise it's perfect. Use the code examples, projects, and information at your own risk.
				</p>
				
				<h2 class="text-secondary text-2xl mb-4 mt-12">THAT'S IT</h2>
				<p class="mb-6">
					Thanks for reading! If you have questions, just <a href="/#connect" class="text-primary hover:underline">shoot me an email</a>.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	h2 {
		position: relative;
	}
</style>
