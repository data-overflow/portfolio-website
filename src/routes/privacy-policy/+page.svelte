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
	<title>Privacy Policy | DataOverflow</title>
	<meta name="description" content="Privacy Policy for DataOverflow - The non-boring version." />
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
				<!-- <span>[RETURN HOME]</span> -->
			</a>
		</div>
		
		<!-- Header -->
		<div class="mb-12">
			<h1 class="text-4xl md:text-5xl text-primary mb-4" data-aos="fade-up">
				PRIVACY POLICY
			</h1>
			<p class="text-secondary sf" data-aos="fade-up" data-aos-delay="100">
				LAST UPDATED: {lastUpdated}
			</p>
		</div>
		
		<!-- Content -->
		<div class="text-doswhite sf" data-aos="fade-up" data-aos-delay="200">
			<div class="mb-8 text-lg">
				<p class="text-xl mb-6">
					This is the world's shortest privacy policy. I respect your privacy as much as I want others to respect mine.
				</p>
				
				<h2 class="text-secondary text-2xl mb-4">THE SHORT VERSION</h2>
				<p class="mb-6">
					• This is a portfolio website. I don't collect any personal data except email addresses for my newsletter (if you sign up).
				</p>
				<p class="mb-6">
					• I don't sell your data because I don't have your data. And even if I did, I wouldn't sell it because that's just not cool.
				</p>
				<p class="mb-6">
					• I use standard analytics to see how many people visit my site. I can't identify you personally from this.
				</p>
				<p class="mb-6">
					• If you email me, I'll have your email (shocking, I know). I'll only use it to respond to you.
				</p>
				
				<h2 class="text-secondary text-2xl mb-4 mt-12">NEWSLETTER EMAILS</h2>
				<p class="mb-6">
					If you subscribe to my newsletter: 
				</p>
				<ul class="list-disc pl-8 mb-8">
					<li class="mb-2">I'll only email you about new projects, blogs, game releases, or other cool stuff</li>
					<li class="mb-2">You can unsubscribe anytime (I won't be offended... much)</li>
					<li class="mb-2">I won't spam you. I hate spam as much as you do</li>
				</ul>
				
				<h2 class="text-secondary text-2xl mb-4 mt-12">THAT'S IT</h2>
				<p class="mb-6">
					Congratulations! You've reached the end of possibly the shortest privacy policy on the internet.
				</p>
				<p class="mb-6">
					If you have any questions, just <a href="mailto:kavirajar27@gmail.com" class="text-primary hover:underline">shoot me an email</a>.
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
