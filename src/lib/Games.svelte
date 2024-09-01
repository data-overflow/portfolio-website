<script>
	import { onMount } from 'svelte';
	import img1 from '$lib/assets/projects/donationstation.png';
	import img2 from '$lib/assets/projects/cyberhakz.png';
	import img3 from '$lib/assets/projects/indianinfra.png';

	let layer0, layer1, layer2, layer3, layer4;

	const projects = [
		{
			title: 'The Do-Nation Station',
			desc: 'Social Media + Centralized Platform for Donations',
			img: img1,
			link: 'https://the-do-nation-station.vercel.app/'
		},
		{
			title: 'CyberHakz',
			desc: 'Cybersecurity Company',
			img: img2,
			link: 'https://cyberhakz.com/'
		},
		{
			title: 'Indian Infra',
			desc: 'Construction Company',
			img: img3,
			link: 'https://indianinfra.in/'
		}
	];

	onMount(() => {
		window.addEventListener('scroll', function () {
			// var zoomLevel = window.innerWidth / 1546;
			// zoomLevel = -0.001336898395721925 * (window.innerWidth - 1546) + 1;
			// console.log("zoom level", zoomLevel);
			//layer0.style.backgroundPositionY = "-50%";
			if (layer0) {
				layer4.style.backgroundPositionY =
					// (-124 + this.scrollY * 0.07).toString() + "%";
					(-50 + this.scrollY * 0.05).toString() + '%';
				layer3.style.backgroundPositionY = (-55 + this.scrollY * 0.06).toString() + '%';
				layer2.style.backgroundPositionY = (-25 + this.scrollY * 0.1).toString() + '%';
				layer1.style.backgroundPositionY = (-25 + this.scrollY * 0.03).toString() + '%';
			}
		});
	});
</script>

<div class="h-fit" id="games">
	<div class="absolute" id="bg-layer-0" bind:this={layer0}></div>
	<div id="bg-layer-1" class="absolute" bind:this={layer1}></div>
	<div id="bg-layer-2" class="absolute" bind:this={layer2}></div>

	<div id="bg-layer-3" class="absolute" bind:this={layer3}></div>
	<h2
		data-aos="fade"
		data-aos-duration="1000"
		data-aos-delay="500"
		class="pstart opacity-80 relative bg-layer-3 w-full text-center top-[10%] md:top-[40%] text-xl md:text-7xl h-0"
	>
		Welcome to my <br /> Video Game Universe
	</h2>
	<div id="bg-layer-4" class="absolute" bind:this={layer4}></div>
</div>
<section class="flex flex-col bg-black p-4 md:p-10 xl:min-h-full">
	<!-- <div class="text-primary text-6xl w-[50%] ">VIDEO GAMES</div> -->
	<div class="flex flex-col md:flex-row gap-8 p-4 md:p-0">
		<div class="text-primary text-6xl w-[50%] md:my-8">VIDEO GAMES</div>
		<p class="text-sm md:px-8 text-doswhite apple m-auto">
			I craft rich purpose driven experience that shares a story, dive into my video game universe!
			Check out my games at <a
				href="https://dataoverflow.itch.io/"
				target="_blank"
				class="text-primary"
				rel="noreferrer">dataoverflow.itch.io</a
			>
		</p>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 py-6 4xl:justify-center md:py-8 lg:py-16"
	>
		<div
			class="flex flex-col h-full w-full md:w-72 md:h-72 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"
		>
			<img
				loading="lazy"
				class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover"
				src="https://img.itch.zone/aW1hZ2UvMjg0ODQzNS8xNzAzNDQwNC5naWY=/original/1hNkmZ.gif"
				alt="banner"
			/>
			<div class="p-4 flex flex-col">
				<div class="text-3xl">Cupid's Startup</div>
				<div class="relative top-[-0.5rem] text-xl">Are they really compatible?</div>
				<a
					class="text-primary text-xl w-fit group hover:opacity-80"
					href="https://dataoverflow.itch.io/cs"
					target="_blank"
					rel="noreferrer">Play Game <span class="group-hover:visible invisible">&rarr;</span></a
				>
			</div>
		</div>
		<div
			class="flex flex-col h-full w-full md:w-72 md:h-64 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"
		>
			<img
				loading="lazy"
				class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover"
				src="https://img.itch.zone/aW1nLzUzNDc0NTAuZ2lm/315x250%23c/PgWGSy.gif"
				alt="banner"
			/>
			<div class="p-4 flex flex-col">
				<div class="text-3xl">Notebook Game</div>
				<div class="relative top-[-0.5rem] text-xl">A satisfying platformer</div>
				<a
					class="text-primary text-xl w-fit group hover:opacity-80"
					href="https://dataoverflow.itch.io/notebook-game"
					target="_blank"
					rel="noreferrer">Play Game <span class="group-hover:visible invisible">&rarr;</span></a
				>
			</div>
		</div>
		<div
			class="flex flex-col h-full w-full md:w-72 md:h-72 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"
		>
			<img
				loading="lazy"
				class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover"
				src="https://img.itch.zone/aW1hZ2UvNjk2ODc5LzM4NzY0NDYuZ2lm/original/8Y0UXz.gif"
				alt="banner"
			/>
			<div class="p-4 flex flex-col">
				<div class="text-3xl">Survive 60 Seconds</div>
				<div class="relative top-[-0.5rem] text-xl">Can you survive longer?</div>
				<a
					class="text-primary text-xl w-fit group hover:opacity-80"
					href="https://dataoverflow.itch.io/survive-60-seconds"
					target="_blank"
					rel="noreferrer"
					>Play Game <span class="group-hover:visible invisible">&rarr;</span>
				</a>
			</div>
		</div>
	</div>
</section>
<section class="flex flex-col bg-black p-4 md:p-10 md:pt-0 xl:min-h-full" id="projects">
	<div class="flex flex-col md:flex-row gap-8 p-4 md:p-0">
		<div class="text-primary text-6xl w-[50%] md:my-8">PROJECTS</div>
		<p class="text-sm md:px-8 text-doswhite apple m-auto">
			Check out my high performance fullstack projects here
		</p>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 py-6 4xl:justify-center md:py-8 lg:py-16"
	>
		{#each projects as project}
			{@render card(project.img, project.title, project.desc, project.link)}
		{/each}
	</div>
</section>

{#snippet card(img, title, desc, link)}
	<div
		class="flex flex-col h-full w-full md:w-72 md:h-72 xl:w-96 xl:h-96 py-4 hover:text-secondary border-b-2 border-transparent hover:border-doswhite/40 transition-all 2xl:grayscale hover:grayscale-0"
	>
		<img
			loading="lazy"
			class="h-full w-full md:w-72 md:h-32 xl:w-96 xl:h-56 object-cover"
			src={img}
			alt="banner"
		/>
		<div class="p-4 flex flex-col gap-2">
			<div class="text-3xl">{title}</div>
			<div class="relative text-xl leading-5">{desc}</div>
			<a
				class="text-primary text-xl w-fit group hover:opacity-80"
				href={link}
				target="_blank"
				rel="noreferrer">Visit Site <span class="group-hover:visible invisible">&rarr;</span></a
			>
		</div>
	</div>
{/snippet}

<style>
	#bg-layer-0 {
		background-image: linear-gradient(0deg, rgba(237, 179, 54, 0.127), rgba(91, 117, 234, 0.033)),
			url('$lib/assets/games/layer-0.gif');
		background-size: cover;
		/* background-position-y: -200px; */
		background-position-x: 80%;
		height: 56.25vw;
		width: 100%;
	}

	#bg-layer-1 {
		background-image: url('$lib/assets/games/layer-1.gif');
		background-size: cover;
		/* background-position-y: -35%; */
		background-position-x: 80%;
		height: 56.25vw;
		width: 100%;
	}

	#bg-layer-2 {
		background-image: url('$lib/assets/games/layer-2.gif');
		background-size: cover;
		/* background-position-y: -35%; */
		background-position-x: 80%;
		height: 56.25vw;
		width: 100%;
	}

	#bg-layer-3 {
		background-image: linear-gradient(90deg, rgba(19, 19, 19, 0.152), rgba(43, 57, 42, 0.073)),
			url('$lib/assets/games/layer-3.gif');
		background-size: cover;
		/* background-position-y: -35%; */
		background-size: 120%;
		background-position-x: 80%;
		background-repeat: no-repeat;
		height: 56.25vw;
		width: 100%;
	}

	#bg-layer-4 {
		background-image: linear-gradient(0deg, rgb(0, 0, 0), rgba(43, 57, 42, 0.073)),
			url('$lib/assets/games/layer-4.gif');
		background-size: cover;
		/* background-position-y: -35%; */
		background-size: 150%;
		background-position-x: 50%;
		background-repeat: no-repeat;
		height: 56.25vw;
		width: 100%;
	}

	#games {
		height: 56.25vw;
	}

	/* @media screen and (min-width: 550px) {
        #bg-layer-0,
        #bg-layer-1,
        #bg-layer-2,
        #bg-layer-3,
        #bg-layer-4,
        #games {
            height: 60vh;
            background-size: 150%;
        }
    }
    @media screen and (min-width: 700px) {
        #bg-layer-0,
        #bg-layer-1,
        #bg-layer-2,
        #bg-layer-3,
        #bg-layer-4,
        #games {
            height: 70vh;
            background-size: 150%;
        }
    }
    @media screen and (min-width: 900px) {
        #bg-layer-0,
        #bg-layer-1,
        #bg-layer-2,
        #bg-layer-3,
        #bg-layer-4,
        #games {
            height: 80vh;
            background-size: 150%;
        }
    } */
	@media screen and (min-width: 1400px) {
		#games {
			height: 56.25vw;
		}
		#bg-layer-0 {
			background-size: cover;
			background-position-x: 80%;
			height: 56.25vw;
			width: 100%;
		}

		#bg-layer-1 {
			background-size: cover;
			background-position-x: 80%;
			height: 56.25vw;
			width: 100%;
		}

		#bg-layer-2 {
			background-size: cover;
			background-position-x: 80%;
			height: 56.25vw;
			width: 100%;
		}

		#bg-layer-3 {
			background-size: cover;
			background-size: 120%;
			background-position-x: 80%;
			height: 56.25vw;
			width: 100%;
		}

		#bg-layer-4 {
			background-size: cover;
			background-size: 150%;
			background-position-x: 50%;
			height: 56.25vw;
			width: 100%;
		}
	}

	@media screen and (min-width: 1800px) {
		#bg-layer-0,
		#bg-layer-1,
		#bg-layer-2,
		#bg-layer-3,
		#bg-layer-4,
		#games {
			height: 80vh;
			background-size: 120%;
		}

		#bg-layer-4 {
			background-size: 110%;
		}
	}
</style>
