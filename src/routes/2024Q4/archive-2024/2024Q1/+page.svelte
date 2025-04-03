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

	onMount(() => {
		AOS.init();
		graphics.subscribe((value) => {
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
	<NavBar />
	<Home />

	<div id="about" class="flex flex-col bg-black md:p-10 py-16 gap-20">
		<div class="flex flex-col md:flex-row gap-8 p-6">
			<div class="text-secondary text-6xl w-[50%]" data-aos="fade">ABOUT</div>
			<p class="text-sm md:px-8 text-doswhite apple" data-aos="fade">
				I'm a 21 year old student, technologist & Entrepreneurial Hacker with a geek towards
				computer science from an early age. I've worked on <a class="text-primary" href="#games"
					>video games</a
				> and random projects I find interesting, right from the age of 14.
			</p>
		</div>
		<Resume />
	</div>

	<Games />
	<Projects />
	<Music />

	<div id="blog" class="p-10 bg-secondary py-16 h-[100vh]">
		<div class="flex flex-col gap-8">
			<div class="text-black text-6xl w-[50%]">BLOG</div>
			<p class="text-xl text-black apple text-center my-auto">
				Blogs are coming soon! Watch out for this space :)
			</p>
		</div>
	</div>

	<GameOver />
	<Footer />

	<!-- <div id="blog" class="p-10 bg-black h-[100vh] py-16">
      <div class="flex flex-col gap-8">
        <div class="text-black text-6xl w-[50%]">BLOG</div>
        <p class="text-sm text-black apple">
          Blogs are coming soon! Watch out for this space :)
        </p>
      </div>
    </div> -->
</div>
