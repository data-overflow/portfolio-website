<script>
	import arrow from '$lib/assets/scroll-arrow.png';
	import cit from '$lib/assets/cit.png';
	import dav from '$lib/assets/dav.png';
	import cognizant from '$lib/assets/cognizant.png';
	import fiverr from '$lib/assets/fiverr.png';
	import lumos from '$lib/assets/lumos.png';
	import { onMount } from 'svelte';

	let tab = 0;

	let projects = [
		'Datable.cpp',
		'DoNationStation.cpp',
		'CyberHakz.cpp',
		'NotebookGame.cpp',
		'AmazonML.cpp',
		'RAWatts.cpp',
		'IndianInfra.cpp',
		'GlobalArticle.cpp'
	];

	let projectDetails = [
		{
			title: 'Datable - Geolocation Social App',
			techstack: 'SvelteKit 5, Tailwind CSS, Capacitor, Pocketbase, GCP, Docker',
			description: `Built a community driven platform to augment real life places or events, implementing a recommeder system to meet people. Achieved 99.9% uptime using Docker and GCP, enabling real-time interactions for 100+ active users on the app.`,
			link: 'https://datable.web.app/',
			date: '2024'
		},
		{
			title: 'The Do-Nation Station - Centralized Donation Platform',
			techstack: 'Next.js, Appwrite, Tailwind CSS, Material UI, GCP',
			description: `A platform for transparent donations to charitable organizations, offers search filters, history, leaderboard, profiles, etc. Selected for final round (top 40/6000+ submissions) in Hack4Change Charcha 2024 by Google, The Nudge Institute.`,
			link: 'https://the-do-nation-station.vercel.app/',
			date: 'Aug, 2024'
		},
		{
			title: 'CyberHakz Professional Website',
			techstack: 'SvelteKit 5, Tailwind CSS, Restful APIs, Oracle Cloud, NocoDB, Docker, Figma (UI/UX)',
			description: `Designed a multithemed web app with API integration in 10 days, boosting organic traffic 4x via SEO-optimized design. Achieved 100% Best Practices and 97% Performance on Lighthouse, ensuring top-tier accessibility and search ranking.`,
			link: 'https://cyberhakz.com',
			date: 'Jun, 2024'
		},
		{
			title: 'Notebook Game - Godot Game Engine',
			techstack: 'Godot Game Engine, Game Programming, Aseprite',
			description: `Ranked 42nd globally among 1K+ entries for a responsive platformer game made in 72 hours, garnering 12K+ plays on itch.`,
			link: 'https://github.com/data-overflow/notebook-game',
			date: '2021'
		},
		{
			title: 'Amazon ML Challenge',
			techstack: 'OpenCV, Pandas, NumPy, Torch, Image Processing, RegEx, OCR',
			description: `Developed a pipeline to extract measurements from product images using OCR and computer vision, achieving an F1-score of 0.83 (top 5% in the challenge).`,
			link: 'https://github.com/data-overflow/AmazonML',
			date: 'Mar, 2024'
		},
		{
			title: 'RA Watts: Solar Output Predictor',
			techstack: 'Flask, RESTful API, PvLib, GeoPy, SQLAlchemy, Godot Engine',
			description: `A mobile app to predict the energy produced by solar panels, using at any given location and timespan in a user-friendly interface, encouraging its wider adoption.`,
			link: 'https://github.com/data-overflow/solar-output-predictor',
			date: 'Apr, 2023'
		},
		{
			title: 'Indian Infra Professional Website',
			techstack: 'Svelte, Tailwind, HTML, CSS, JavaScript',
			description: `A high-performance website for a global construction company. The site incorporates a mobile responsive design that also fluidly rescales to every screen size.`,
			link: 'https://indianinfra.in',
			date: 'Dec, 2023'
		},
		{
			title: 'Global Article Summarization and Link Analysis',
			techstack: 'Intel oneAPI, Python, Pandas, Huggingface Transformers, NumPy, Scikit-learn',
			description: `Created a tool to find relevant articles, summarize them, and recommend related articles, improving information retrieval and relevance.`,
			link: 'https://github.com/data-overflow/article-summarization',
			date: 'Feb, 2024'
		}
	];

	function blinkCursor() {
		document.getElementsByClassName('active-li')[0].classList.toggle('blink');
		setTimeout(blinkCursor, 200);
	}

	onMount(() => {
		blinkCursor();
	});
</script>

<div
	id="dos-bg"
	class="flex flex-col gap-2 justify-center bg-[#0000B0] h-fit xl:h-[110vh] 2xl:h-[105vh] 3xl:h-[90vh]"
>
	<!-- Window -->
	<div
		id="dos-window"
		class="bg-[#AFA8AF] h-fit w-[95%] md:w-[90%] xl:w-[80%] my-10 mx-auto text-md"
	>
		<div class="p-1 border-4 border-white m-2 mt-3">
			<div class="p-1 border-4 border-white">
				<!-- Top Bar -->
				<div class="flex flex-col items-center dos">
					<div class="flex flex-row justify-between w-full">
						<div class="relative z-[10] border-x-4 top-[4px] left-[20px] border-[#AFA8AF]"></div>
						<div class="relative top-[-1.5rem] bg-[#AFA8AF] px-2 text-2xl">
							[ <span class="text-primary">&#9632;</span> ]
						</div>
						<div
							class="relative text-center px-2 top-[-1.5rem] z-[100] text-white bg-[#AFA8AF] w-fit m-auto text-xl md:text-2xl"
						>
							All Projects
						</div>
					</div>
				</div>

				<!-- Main content -->
				<div id="allprojects">
					<div
						class="flex flex-col md:flex-row dos min-h-[80vh] md:min-h-[65vh] text-black p-2 md:p-8 sm:text-lg gap-8 md:text-2xl"
					>
						<div
							class="flex flex-col gap-2 text-black w-full lg:w-[40%] sticky top-16 md:top-8 border-4 bg-[#AFA8AF] border-[#AFA8AF]"
						>
							<div>
								<span class="text-yellow-200">O</span>pen Project
								<span class="inline md:hidden">(Scroll)</span>
							</div>
							<div class="flex flex-row bg-[#00A8AF] w-full">
								<div class="w-full">
									<ul
										class="grid grid-cols-3 grid-flow-row gap-x-56 md:flex md:flex-col overflow-x-scroll md:overflow-x-hidden"
									>
										{#each projects as project, i}
											<li
												class="min-w-56 border-r-4 md:border-0 border-[#0000B0] {tab == i
													? 'bg-[#00B000] text-white active-li blink'
													: 'hover:text-yellow-200'}"
											>
												<button
													class="p-1 px-4 w-full text-left"
													on:click={() => {
														tab = i;
													}}>{project.toUpperCase()}</button
												>
											</li>
										{/each}
									</ul>
								</div>
								<div
									class="w-8 border-l-4 hidden md:flex border-[#0000B0] flex-col justify-between"
								></div>
							</div>
						</div>
						<div class="flex flex-col h-full gap-8 lg:gap-2 justify-between">
							<div class="px-2 py-2 md:px-8 flex flex-col gap-1 text-lg md:text-xl lg:text-2xl">
								<div class="text-xl md:text-2xl dos">
									{projectDetails[tab].title.toUpperCase()}
								</div>
								<div class="text-[#FF0000]">
									{projectDetails[tab].techstack}
								</div>
								<div>
									{projectDetails[tab].description}
								</div>
								<a
									class="my-4 bg-[#00B000] hover:text-white active:ml-4 text-black w-fit px-4 pr-12 dos-shadow"
									href={projectDetails[tab].link}
									target="_blank"
									rel="noreferrer"
								>
									<span class="text-[#FFFF50]">E</span>xplore
								</a>
							</div>
						</div>
					</div>
					<div class="bg-[#0000B0] text-[#00A8AF] p-2 flex flex-col md:text-2xl dos select-none">
						<div>C:\TURBOC3\BIN\PROJECTS\*CPP</div>
						<div class="flex flex-row justify-between">
							<div>
								{projects[tab].toUpperCase()}
							</div>
							<div>{projectDetails[tab].date}</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Topbar -->
		</div>
	</div>
	<!-- <div class="flex flex-row w-full justify-center pb-4">
        <button
            class="apple bg-doswhite text-black border-2 border-black p-2 px-4"
            >Download Resume</button
        >
    </div> -->
</div>

<style>
	::selection {
		background-color: #0b0;
		color: white;
	}

	#dos-bg {
		/* background-image: url("$lib/assets/code.png"); */
		background-size: 100%;
		background-repeat: no-repeat;
		background-position-y: 10%;
	}

	#dos-window {
		box-shadow: 32px 32px rgb(0, 0, 0, 0.6);
	}

	.dos-shadow {
		box-shadow: 10px 10px rgb(0, 0, 0);
	}
	.dos-shadow:active {
		box-shadow: 10px 10px rgba(255, 0, 0, 0);
	}
	/*
button {
        letter-spacing: -0.2rem;
    } */

	button:hover {
		cursor: url('$lib/assets/cursor-pointer.cur'), pointer;
	}

	.blink button::first-letter {
		/* display: block; */
		text-decoration: underline;
		-webkit-animation: 1s blink step-end infinite;
		-moz-animation: 1s blink step-end infinite;
		-ms-animation: 1s blink step-end infinite;
		-o-animation: 1s blink step-end infinite;
		animation: 1s blink step-end infinite;
	}

	@keyframes blink {
		from,
		to {
			text-decoration: underline;
		}
		50% {
			text-decoration: none;
		}
	}

	@-moz-keyframes blink {
		from,
		to {
			color: transparent;
		}
		50% {
			color: black;
		}
	}

	@-webkit-keyframes blink {
		from,
		to {
			color: transparent;
		}
		50% {
			color: black;
		}
	}

	@-ms-keyframes blink {
		from,
		to {
			color: transparent;
		}
		50% {
			color: black;
		}
	}

	@-o-keyframes blink {
		from,
		to {
			color: transparent;
		}
		50% {
			color: black;
		}
	}
</style>