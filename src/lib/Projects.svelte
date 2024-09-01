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
		'DoNationStation.cpp',
		'CyberHakz.cpp',
		'GlobalArticle.cpp',
		'IndianInfra.cpp',
		'WhatsAppTLDR.cpp',
		'RAWatts.cpp',
		'CalendarApp.cpp',
		'Datable.cpp'
	];

	let projectDetails = [
		{
			title: 'The Do-Nation Station - Social Media + Centralized Donation Platform',
			techstack: 'Next.js, Appwrite, Tailwind, Material UI, GCP',
			description: `A platform for transparent donations to charitable organizations, offers search filters, history, leaderboard, profiles, etc.`,
			link: 'https://the-do-nation-station.vercel.app/',
			date: 'Aug, 2024'
		},
		{
			title: 'CyberHakz Professional Website',
			techstack: 'SvelteKit 5, Tailwind, NocoDB, Docker, Figma (UI/UX)',
			description: `Designed a fast, multipage, responsive web app with dark & light themes, caching & API integration for a cybersecurity company in 2 weeks. Scores 100% on Best Practices, 97% on Performance, 93% on Accessibility and 91% on SEO in Chrome's Lighthouse`,
			link: 'https://cyberhakz.com',
			date: 'Jun, 2024'
		},
		{
			title: 'Global Article Summarization and Link Analysis',
			techstack: 'Intel oneAPI, Python, Pandas, Huggingface Transformers, NumPy, Scikit-learn',
			description: `Created a tool to find relevant articles, summarize them, and recommend related articles, improving information retrieval and relevance`,
			link: 'https://github.com/data-overflow/article-summarization',
			date: 'Feb, 2024'
		},
		{
			title: 'Indian Infra Professional Website',
			techstack: 'Svelte, Tailwind, HTML, CSS, JavaScript',
			description: `A high-performance website for a global construction company.
            The site incorporates a mobile responsive design that also fluidly
            rescales to every screen size`,
			link: 'https://indianinfra.in',
			date: 'Dec, 2023'
		},
		{
			title: 'WhatsApp TLDR',
			techstack: 'Python, Hugging Face Transformers, Bart',
			description: `WhatsApp TLDR helps you to summarize thousands of unread messages,
            reducing content by up to 90%, so that you
            can always stay on the loop and be productive.`,
			link: 'https://github.com/data-overflow/whatsapp-tldr',
			date: 'May, 2023'
		},
		{
			title: 'RA Watts: Solar Output Predictor',
			techstack: 'Flask, RESTful API, PvLib, GeoPy, SQLAlchemy, Godot Engine',
			description: `A mobile app to predict the energy produced by solar panels,
            using at any given location and timespan in a
            user-friendly interface, encouraging its wider adoption`,
			link: 'https://github.com/data-overflow/solar-output-predictor',
			date: 'Apr, 2023'
		},
		{
			title: 'The Calendar App',
			techstack: 'Python, Tkinter',
			description: `Okay this is some dummy project I did in school, someone
            remind me to replace this placeholder with some other project :,)`,
			link: 'https://github.com/data-overflow/the-calendar-app',
			date: 'Feb, 2021'
		},
		{
			title: 'Datable',
			techstack: 'React Native, Tailwind, Supabase, FastAPI',
			description: `Th3 NeX7 b1g t8i7G?? Watch this space
            > :/ Meet people the OG way, IRL! shush, visit - https://datable.web.app/
            `,
			link: 'https://media1.tenor.com/m/qRpNbT_IhBAAAAAC/appurajosh-appu.gif',
			date: '???, 20XX'
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
