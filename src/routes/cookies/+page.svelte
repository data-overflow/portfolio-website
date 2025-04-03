<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	const lastUpdated = "April 3, 2025";

	onMount(() => {
		AOS.init();
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<title>Cookie Policy | DataOverflow</title>
	<meta name="description" content="Cookie Policy for DataOverflow - Learn how we use cookies on our website." />
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
				<span class="dos">[RETURN HOME]</span>
			</a>
		</div>
		
		<!-- Header -->
		<div class="mb-12">
			<h1 class="text-4xl md:text-5xl text-primary dos mb-4" data-aos="fade-up">
				COOKIE POLICY
			</h1>
			<p class="text-secondary dos" data-aos="fade-up" data-aos-delay="100">
				LAST UPDATED: {lastUpdated}
			</p>
		</div>
		
		<!-- Content -->
		<div class="legal-content text-doswhite" data-aos="fade-up" data-aos-delay="200">
			<div class="mb-8">
				<p class="apple text-lg mb-4">
					This Cookie Policy explains how DataOverflow ("we", "us", or "our") uses cookies and similar technologies when you visit our website and use our services (collectively, the "Services").
				</p>
				<p class="apple text-lg">
					By using our Services, you consent to the use of cookies in accordance with this Cookie Policy. If you do not accept the use of cookies, please disable them as described below or refrain from using our Services.
				</p>
			</div>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ WHAT ARE COOKIES? ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
					<p class="apple">Cookies enable us to recognize your device and collect information about your activity on our website, such as the pages you visit, the time you spend on each page, and the links you click.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ TYPES OF COOKIES WE USE ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<h3 class="text-xl text-primary dos mb-2">Essential Cookies</h3>
					<p class="apple mb-4">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
					
					<h3 class="text-xl text-primary dos mb-2">Performance Cookies</h3>
					<p class="apple mb-4">These cookies collect information about how you use our website, such as which pages you visit most often and if you experience any errors. All information collected by these cookies is aggregated and anonymous.</p>
					
					<h3 class="text-xl text-primary dos mb-2">Functionality Cookies</h3>
					<p class="apple mb-4">These cookies allow the website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced, more personal features.</p>
					
					<h3 class="text-xl text-primary dos mb-2">Targeting/Advertising Cookies</h3>
					<p class="apple mb-4">These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of advertising campaigns.</p>
					
					<h3 class="text-xl text-primary dos mb-2">Third-Party Cookies</h3>
					<p class="apple">We may allow third parties to place cookies on your device when you visit our website. These third parties may include analytics providers, advertising networks, and social media platforms. The information collected by these third parties is governed by their own privacy policies.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ HOW WE USE COOKIES ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">We use cookies for the following purposes:</p>
					<ul class="list-disc pl-6 mb-4 apple">
						<li>To provide and maintain our Services</li>
						<li>To analyze how users interact with our Services</li>
						<li>To remember your preferences and settings</li>
						<li>To improve the user experience</li>
						<li>To measure the effectiveness of our marketing campaigns</li>
						<li>To detect and prevent fraud and security issues</li>
					</ul>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ MANAGING COOKIES ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">You can control and manage cookies in various ways. Most web browsers allow you to manage your cookie preferences by adjusting your browser settings. You can:</p>
					<ul class="list-disc pl-6 mb-4 apple">
						<li>Delete cookies from your device</li>
						<li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
						<li>Set your browser to notify you when you receive a cookie</li>
					</ul>
					<p class="apple mb-4">Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our Services, and some functions may not work properly.</p>
					<p class="apple">For more information about how to manage cookies, please visit your browser's help pages:</p>
					<ul class="list-disc pl-6 mb-4 apple">
						<li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Google Chrome</a></li>
						<li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Mozilla Firefox</a></li>
						<li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Microsoft Edge</a></li>
						<li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Safari</a></li>
					</ul>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ CHANGES TO THIS POLICY ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">We may update this Cookie Policy from time to time. The updated version will be indicated by an updated "Last Updated" date.</p>
					<p class="apple">If we make material changes to this Cookie Policy, we will notify you by email or by posting a notice on our website prior to the changes becoming effective.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ CONTACT US ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">If you have any questions about this Cookie Policy, please contact us at:</p>
					<p class="apple text-lg mb-2">Email: <a href="mailto:info@dataoverflow.com" class="text-primary hover:underline">info@dataoverflow.com</a></p>
				</div>
			</section>
		</div>
	</div>
</div>

<style>
	.legal-content h2 {
		position: relative;
	}
	
	.legal-content h2::after {
		content: "";
		position: absolute;
		bottom: -8px;
		left: 0;
		width: 60px;
		height: 2px;
		background-color: theme('colors.primary');
	}
</style>
