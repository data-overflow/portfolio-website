<script>
	import { onMount } from 'svelte';
	import { graphics } from '$lib/stores';

	import NavBar from '$lib/NavBar.svelte';
	import Home from '$lib/Home.svelte';
	import Resume from '$lib/Resume.svelte';
	import Games from '$lib/Games.svelte';
	import Projects from '$lib/Projects.svelte';
	import Music from '$lib/Music.svelte';
	import GameOver from '$lib/GameOver.svelte';
	import Footer from '$lib/Footer.svelte';
	import mood from '$lib/assets/mood.png';

	import AOS from 'aos';
	import 'aos/dist/aos.css';

	let { data } = $props();

	onMount(() => {
		AOS.init();
		graphics.subscribe((value) => {
			console.log('graphics toggled', value);
			if (value < 2) {
				document.getElementById('terminal').style.display = 'none';
				document.getElementById('flicker').style.display = 'none';
				document.getElementById('noise').classList.remove('noise');
			} else {
				document.getElementById('terminal').style.display = 'unset';
				document.getElementById('flicker').style.display = 'unset';
			}
			if (value < 1) {
				document.getElementById('tv').style.display = 'none';
			} else {
				document.getElementById('tv').style.display = 'unset';
			}
			if (value > 2) {
				document.getElementById('noise').classList.add('noise');
			}
		});
	});
</script>

<div>
	<!-- <NavBar /> -->
	<Home rss={data} />

	<div id="about" class="flex flex-col bg-black md:py-10 2xl:p-10 py-16 gap-20">
		<div class="flex flex-col md:flex-row gap-8 p-6 md:px-10 xl:px-32">
			<div class="text-secondary text-6xl w-[50%]" data-aos="fade">ABOUT</div>
			<!-- <p class="text-sm md:px-8 text-doswhite apple" data-aos="fade">
				Passionate about technology from a young age, I began developing <a
					class="text-primary"
					href="#games">video games</a
				>
				at 14, which laid the foundation for a strong technical background in object-oriented programming,
				data structures, and algorithms. Currently, I am developing a
				<a class="text-primary" href="https://datable.web.app/" target="_blank"
					>social networking app</a
				>
				aimed at fostering genuine connections. I am seeking challenging internships to leverage my diverse
				expertise and contribute to innovative projects
			</p> -->
			<p class="whitespace-pre-line text-sm text-doswhite apple" data-aos="fade">
				{`Hi, I'm Kavi, a final year student pursuing my B. Tech in AI & Data Science. I have been making`}
				<a class="text-primary" href="#games">video games</a>
				{`from the age of 14, an experience that gave me strong foundations in computer science and design.
				
				Some quick stats:
					- Worked on 10+ video games
					- Finalist in 3+ national level hackathons
					- Served 5+ freelancing clients, charging 30k-2L INR per project
					- Solved 450+ problems on leetcode`}
			</p>
		</div>
		<Resume />
	</div>

	<Games />
	<Projects />
	<!-- <Music /> -->

	<!-- <div id="blog" class="p-10 bg-secondary py-16 h-[100vh]">
		<div class="flex flex-col gap-8">
			<div class="text-black text-6xl w-[50%]">BLOG</div>
			<p class="text-xl text-black apple text-center my-auto">
				Blogs are coming soon! Watch out for this space :)
			</p>
		</div>
	</div> -->

	<GameOver />

	<!-- <div id="blog" class="p-10 bg-black h-[100vh] py-16">
      <div class="flex flex-col gap-8">
        <div class="text-black text-6xl w-[50%]">BLOG</div>
        <p class="text-sm text-black apple">
          Blogs are coming soon! Watch out for this space :)
        </p>
      </div>
    </div> -->
</div>
