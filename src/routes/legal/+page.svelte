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
	<title>Terms of Service | DataOverflow</title>
	<meta name="description" content="Legal Terms and Conditions for DataOverflow - Learn about the rules governing the use of our services." />
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
				TERMS OF SERVICE
			</h1>
			<p class="text-secondary dos" data-aos="fade-up" data-aos-delay="100">
				LAST UPDATED: {lastUpdated}
			</p>
		</div>
		
		<!-- Content -->
		<div class="legal-content text-doswhite" data-aos="fade-up" data-aos-delay="200">
			<div class="mb-8">
				<p class="apple text-lg mb-4">
					These Terms of Service ("Terms") govern your access to and use of DataOverflow's website, services, and applications (collectively, the "Services").
				</p>
				<p class="apple text-lg">
					By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use our Services.
				</p>
			</div>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ ACCOUNT REGISTRATION ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">To access certain features of our Services, you may need to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself.</p>
					<p class="apple mb-4">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
					<p class="apple">We reserve the right to disable any user account at any time if, in our opinion, you have failed to comply with these Terms.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ USER CONDUCT ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">You agree not to:</p>
					<ul class="list-disc pl-6 mb-4 apple">
						<li>Use our Services in any way that violates any applicable law or regulation</li>
						<li>Use our Services for the purpose of exploiting, harming, or attempting to exploit or harm minors</li>
						<li>Send, knowingly receive, upload, download, use, or re-use any material that does not comply with these Terms</li>
						<li>Impersonate or attempt to impersonate DataOverflow, a DataOverflow employee, another user, or any other person</li>
						<li>Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
						<li>Use any robot, spider, or other automatic device, process, or means to access the Services for any purpose</li>
						<li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
						<li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services</li>
					</ul>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ INTELLECTUAL PROPERTY RIGHTS ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by DataOverflow, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
					<p class="apple mb-4">These Terms permit you to use the Services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as permitted by these Terms.</p>
					<p class="apple">If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Services in breach of the Terms, your right to use the Services will stop immediately and you must, at our option, return or destroy any copies of the materials you have made.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ USER CONTENT ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">Our Services may allow you to post, submit, publish, display, or transmit content (collectively, "User Content"). By providing any User Content on the Services, you grant us a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such User Content in connection with operating and providing the Services.</p>
					<p class="apple mb-4">You represent and warrant that you own or control all rights in and to the User Content and have the right to grant the license granted above, and that all of your User Content does not violate these Terms or any applicable law.</p>
					<p class="apple">We are not responsible for the content of any User Content. We reserve the right to remove any User Content for any or no reason, including User Content that we believe violates these Terms or our policies.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ DISCLAIMER OF WARRANTIES ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
					<p class="apple">DATAOVERFLOW EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ LIMITATION OF LIABILITY ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL DATAOVERFLOW OR ITS AFFILIATES, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ INDEMNIFICATION ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">You agree to defend, indemnify, and hold harmless DataOverflow, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ CHANGES TO THESE TERMS ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">We may update these Terms from time to time. The updated version will be indicated by an updated "Last Updated" date.</p>
					<p class="apple">If we make material changes to these Terms, we will notify you by email or by posting a notice on our website prior to the changes becoming effective. Your continued use of the Services after the effective date of the revised Terms means that you accept and agree to the changes.</p>
				</div>
			</section>
			
			<section class="mb-8">
				<h2 class="text-secondary text-2xl dos mb-4">[ CONTACT US ]</h2>
				<div class="border-l-2 border-primary pl-4 ml-2">
					<p class="apple mb-4">If you have any questions about these Terms, please contact us at:</p>
					<p class="apple text-lg mb-2">Email: <a href="mailto:legal@dataoverflow.com" class="text-primary hover:underline">legal@dataoverflow.com</a></p>
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
