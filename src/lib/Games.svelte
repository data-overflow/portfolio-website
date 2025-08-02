<script>
	import { onMount } from 'svelte';
	
	import img1 from '$lib/assets/projects/donationstation.png';
	import img2 from '$lib/assets/projects/cyberhakz.png';
	import img3 from '$lib/assets/projects/indianinfra.png';
	import img4 from '$lib/assets/projects/datable.png';
	import img5 from '$lib/assets/projects/lumos.png';
	import img6 from '$lib/assets/projects/ifm.png';
	import img7 from '$lib/assets/projects/float.png';

	import game1 from '$lib/assets/games/1.jpg';
	import game2 from '$lib/assets/games/2.jpg';
	import game3 from '$lib/assets/games/3.jpg';

	let layer0, layer1, layer2, layer3, layer4;

	const projects = [
		{
			title: 'The Float',
			desc: 'Luxury Waterfront Resort in Ghana',
			img: img7,
			link: 'https://thefloatgh.com/'
		},

		{
			title: 'Datable',
			desc: 'A social platform for meeting new people',
			img: img4,
			link: 'https://datable.web.app/'
		},
		{
			title: 'The Do-Nation Station',
			desc: 'Centralized Platform for Donations',
			img: img1,
			link: 'https://the-do-nation-station.vercel.app/'
		},
		{
			title: 'CyberHakz',
			desc: 'Website for a cybersecurity company',
			img: img2,
			link: 'https://cyberhakz.com/'
		},
		{
			title: 'Indian Infra',
			desc: 'Construction Company',
			img: img3,
			link: 'https://indianinfra.in/'
		},
		{
			title: 'Hikari No Matsuri',
			desc: 'Website for anime x japanese event',
			img: img5,
			link: 'https://lumos-web-sigma.vercel.app/'
		},
		// {
		// 	title: 'IFM Scaff & Forms',
		// 	desc: 'Website for a product company',
		// 	img: img6,
		// 	link: 'https://indianfasteners.in/'
		// }
	];

	const games = [
		{
			title: 'Cupid\'s Startup',
			desc: 'Are they really compatible?',
			img: game1,
			gif: 'https://img.itch.zone/aW1hZ2UvMjg0ODQzNS8xNzAzNDQwNC5naWY=/original/1hNkmZ.gif',
			link: 'https://dataoverflow.itch.io/cs',
			detailLink: '/projects/cupids-startup',
			type: 'DATING SIM',
			technologies: ['Godot', 'GDScript', 'Pixel Art']
		},
		{
			title: 'Notebook Game',
			desc: 'A satisfying platformer',
			img: game2,
			gif: 'https://img.itch.zone/aW1nLzUzNDc0NTAuZ2lm/315x250%23c/PgWGSy.gif',
			link: 'https://dataoverflow.itch.io/notebook-game',
			detailLink: '/projects/notebook-game',
			type: 'PUZZLE',
			technologies: ['Unity', 'C#', '2D']
		},
		{
			title: 'Survive 60 Seconds',
			desc: 'Can you survive longer?',
			img: game3,
			gif: 'https://img.itch.zone/aW1hZ2UvNjk2ODc5LzM4NzY0NDYuZ2lm/original/8Y0UXz.gif',
			link: 'https://dataoverflow.itch.io/survive-60-seconds',
			detailLink: '/projects/survive-60-seconds',
			type: 'PLATFORM',
			technologies: ['Unity', 'C#', 'Pixel Art']
		},
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
		class="windows font-bold opacity-80 relative bg-layer-3 w-full text-center top-[10%] md:top-[30%] xl:top-[35%] text-4xl md:text-8xl h-0"
	>
		Welcome to my <br /> Video Game Universe
	</h2>
	<div id="bg-layer-4" class="absolute" bind:this={layer4}></div>
</div>
<section class="flex flex-col bg-black p-4 md:p-10 xl:px-32 xl:min-h-full">
	<!-- <div class="text-primary text-6xl w-[50%] ">VIDEO GAMES</div> -->
	<div class="flex flex-col md:flex-row gap-8 p-4 md:p-0">
		<div class="text-primary text-6xl w-[50%] md:my-8">VIDEO GAMES</div>
		<p class="text-xl md:px-8 text-doswhite sf m-auto">
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
		{#each games as game, index}
			<a href={game.link} target="_blank" rel="noreferrer" class="card-container group" aria-label="View {game.title}" data-aos="fade-up" data-aos-delay={index * 100 + 300} data-aos-duration="1000">
				<div class="card-image-wrapper">
					<img
						loading="lazy"
						class="card-image"
						src={game.gif}
						alt={game.title}
					/>
				</div>
				<div class="card-content">
					<h3 class="card-title text-3xl group-hover:text-secondary">{game.title}</h3>
					<p class="card-subtitle text-xl">{game.desc}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
<section class="flex flex-col bg-black p-4 md:p-10 md:pt-0 xl:px-32 xl:min-h-full" id="projects">
	<div class="flex flex-col md:flex-row gap-8 p-4 md:p-0">
		<div class="text-primary text-6xl w-[50%] md:my-8">WEB PROJECTS</div>
		<p class="text-xl md:px-8 text-doswhite sf m-auto">
			Check out my high performance fullstack projects here
		</p>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 py-6 4xl:justify-center md:py-8 lg:py-16"
	>
		{#each projects as project, index}
			<a href={project.link} target="_blank" rel="noreferrer" class="card-container group" aria-label="View {project.title}" data-aos="fade-up" data-aos-delay={index * 50 + 150} data-aos-duration="750">
				<div class="card-image-wrapper">
					<img
						loading="lazy"
						class="card-image"
						src={project.img}
						alt={project.title}
					/>
				</div>
				<div class="card-content">
					<h3 class="card-title text-3xl group-hover:text-secondary">{project.title}</h3>
					<p class="card-subtitle text-xl">{project.desc}</p>
				</div>
			</a>
		{/each}
	</div>
</section>

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

	/* New Card Styles */
	.card-container {
		display: flex;
		flex-direction: column;
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 0.25rem;
		overflow: hidden;
		height: 100%;
		width: 100%;
		max-width: 24rem;
		margin: 0 auto;
		text-decoration: none;
		color: inherit;
	}
	
	.card-container:focus {
		outline: 2px solid #edb336;
		outline-offset: 2px;
	}
	
	.card-image-wrapper {
		position: relative;
		height: 12rem;
		overflow: hidden;
	}
	
	.card-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.card-content {
		padding: 1rem;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
	
	.card-title {
		margin: 0 0 0.1rem;
		color: #ffffff;
	}
	
	.card-subtitle {
		margin: 0;
		color: rgba(255, 255, 255, 0.7);
	}
	
	@media (min-width: 768px) {
		.card-image-wrapper {
			height: 10rem;
		}
	}
	
	@media (min-width: 1280px) {
		.card-image-wrapper {
			height: 14rem;
		}
	}
</style>
