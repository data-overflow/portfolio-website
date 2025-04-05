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
	<title>Cookie Policy | DataOverflow</title>
	<meta name="description" content="Cookie Policy for DataOverflow - The fun version about digital cookies." />
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
				COOKIE POLICY
			</h1>
			<p class="text-secondary" data-aos="fade-up" data-aos-delay="100">
				LAST UPDATED: {lastUpdated}
			</p>
		</div>
		
		<!-- Content -->
		<div class="text-doswhite" data-aos="fade-up" data-aos-delay="200">
			<div class="mb-8 text-lg">
				<p class="text-xl mb-6">
					Not the chocolate chip kind, unfortunately. These are the digital ones.
				</p>
				
				<h2 class="text-secondary text-2xl mb-4">WHAT ARE COOKIES?</h2>
				<p class="mb-6">
					Cookies are small text files stored on your device when you visit websites. They're not the delicious kind that come out of ovens, sadly.
				</p>
				
				<h2 class="text-secondary text-2xl mb-4 mt-12">DO I USE COOKIES?</h2>
				<p class="mb-6">
					Yes, but very minimally. This website uses cookies for:
				</p>
				<ul class="list-disc pl-8 mb-8">
					<li class="mb-2">Essential stuff: Making the site work properly</li>
					<li class="mb-2">Analytics: Seeing how many people visit (I get excited when the numbers go up!)</li>
					<li class="mb-2">That's pretty much it</li>
				</ul>
				
				<h2 class="text-secondary text-2xl mb-4 mt-12">HOW TO CONTROL COOKIES</h2>
				<p class="mb-6">
					Most browsers let you control cookies through their settings. You can:
				</p>
				<ul class="list-disc pl-8 mb-8">
					<li class="mb-2">Block cookies entirely (though this might break some websites)</li>
					<li class="mb-2">Delete cookies when you close your browser</li>
					<li class="mb-2">Browse in "incognito" or "private" mode</li>
				</ul>
				
				<h2 class="text-secondary text-2xl mb-4 mt-12">THAT'S IT</h2>
				<p class="mb-6">
					Congrats on reading a cookie policy! You deserve an actual cookie for that. 🍪
				</p>
				<p class="mb-6">
					If you have questions, just <a href="/#connect" class="text-primary hover:underline">shoot me an email</a>.
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
