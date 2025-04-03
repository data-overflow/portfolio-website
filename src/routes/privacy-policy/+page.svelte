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
	<title>Privacy Policy | DataOverflow</title>
	<meta name="description" content="Privacy Policy for DataOverflow - Learn how we collect, use, and protect your data." />
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
				PRIVACY POLICY
			</h1>
			<p class="text-secondary dos" data-aos="fade-up" data-aos-delay="100">
				LAST UPDATED: {lastUpdated}
			</p>
		</div>
		
		<!-- Content -->
		<div class="legal-content text-doswhite" data-aos="fade-up" data-aos-delay="200">
			<div class="mb-8">
				<p class="apple text-lg mb-4">
					This Privacy Policy explains how DataOverflow ("we", "us", or "our") collects, uses, and shares information about you when you use our website, services, and applications (collectively, the "Services").
				</p>
				<p class="apple text-lg">
					By using our Services, you agree to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree, please do not use our Services.
				</p>
			</div>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ INFORMATION WE COLLECT ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">We collect the following types of information:</p>
					<h3 class="text-xl text-primary dos mb-2">Information You Provide</h3>
					<ul class="list-disc pl-6 mb-4 apple">
						<li>Contact information (such as name and email address) when you sign up for our newsletter</li>
						<li>Information you provide when contacting us for support or inquiries</li>
						<li>Content you submit when participating in interactive features of our Services</li>
					</ul>
					
					<h3 class="text-xl text-primary dos mb-2">Information Collected Automatically</h3>
					<ul class="list-disc pl-6 mb-4 apple">
						<li>Usage information (such as pages visited, time spent on pages, links clicked)</li>
						<li>Device information (such as browser type, operating system, IP address)</li>
						<li>Cookies and similar technologies (as described in our Cookie Policy)</li>
					</ul>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ HOW WE USE YOUR INFORMATION ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">We use the information we collect to:</p>
					<ul class="list-disc pl-6 mb-4 apple">
						<li>Provide, maintain, and improve our Services</li>
						<li>Send you technical notices, updates, and administrative messages</li>
						<li>Respond to your comments, questions, and requests</li>
						<li>Send you newsletters and promotional communications</li>
						<li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
						<li>Detect, investigate, and prevent security incidents</li>
					</ul>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ SHARING YOUR INFORMATION ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">We may share your information with:</p>
					<ul class="list-disc pl-6 mb-4 apple">
						<li>Service providers who perform services on our behalf</li>
						<li>Professional advisors (such as lawyers, accountants, and insurers)</li>
						<li>Third parties in connection with a merger, sale, or acquisition</li>
						<li>Government authorities when required by law</li>
					</ul>
					<p class="apple">We do not sell your personal information to third parties.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ YOUR RIGHTS AND CHOICES ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
					<ul class="list-disc pl-6 mb-4 apple">
						<li>The right to access, update, or delete your information</li>
						<li>The right to object to or restrict processing of your information</li>
						<li>The right to data portability</li>
						<li>The right to withdraw consent</li>
					</ul>
					<p class="apple mb-4">You can exercise these rights by contacting us at info@dataoverflow.com</p>
					<p class="apple">You can also unsubscribe from our marketing communications by following the unsubscribe instructions in the emails we send.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ DATA SECURITY ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, alteration, or destruction.</p>
					<p class="apple">However, no security measures are 100% secure. We cannot guarantee the security of your information.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ CHANGES TO THIS POLICY ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date.</p>
					<p class="apple">If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on our website prior to the changes becoming effective.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ CONTACT US ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
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
