<script>
	import arrow from '$lib/assets/scroll-arrow.png';
	import cit from '$lib/assets/cit.png';
	import dav from '$lib/assets/dav.png';
	import cognizant from '$lib/assets/cognizant.png';
	import fiverr from '$lib/assets/fiverr.png';
	import lumos from '$lib/assets/lumos.png';
	import teachafy from '$lib/assets/teachafy.png';

	const MAX_TAB = 5;
	let tab = 2;

	$: {
		if (tab < 1) {
			tab = 1;
		} else if (tab > MAX_TAB) {
			tab = MAX_TAB;
		}
	}
	
	// Resume data separated into variable objects for easy editing
	const resumeData = {
		education: [
			{
				logo: cit,
				logoAlt: "cit logo",
				institution: "Chennai Institute of Technology",
				detail: "B.Tech Artificial Intelligence & Data Science",
				period: "2021-2025 (Can't wait)"
			},
			{
				logo: dav,
				logoAlt: "dav logo",
				institution: "DAV Boys Senior Secondary School, Gopalapuram",
				detail: "Grade: SSC - 464/500 | HSC - 432/500",
				period: "2009-2021"
			}
		],
		experience: [
			{
				logo: teachafy,
				logoAlt: "teachafy logo",
				company: "Teachafy Labs",
				position: "ML & Backend Developer Intern",
				period: "Dec 2024 - Present",
				responsibilities: [
					"Working on building a platform that connects students with teachers for personalized learning.",
					"Built the ML model for matching students with teachers.",
					"Also working on the backend for the platform using Node.js and Express."
				]
			},
			{
				logo: lumos,
				logoAlt: "lumos logo",
				company: "Lumos Code",
				position: "FullStack Developer Intern",
				period: "Aug 2023 - Nov 2023",
				responsibilities: [
					"Built a platform for tracking and managing expenses. My focus was creating the login, payment, and admin portals",
					"Worked on the frontend using React and backend using Node.js and Express.",
					"Improved user retention by ~72%",
					"Redesigned sign up flow reducing bounce rate by 43%",
					"Added new features including recurring payment, payment reminders, expense categorization, and more."
				]
			},
			{
				logo: cognizant,
				logoAlt: "cognizant logo",
				company: "Cognizant",
				position: "Technical Co-author",
				period: "Jul 2022 - Oct 2022",
				responsibilities: [
					"Technical writer for a Cognizant whitepaper",
					"Created comprehensive documentation and wrote user guides for Cognizant's proprietary AI product.",
					"Built a proof-of-concept using Python Tensorflow."
				]
			},
			{
				logo: fiverr,
				logoAlt: "fiverr logo",
				company: "Fiverr",
				position: "Technical Writer & Bot Developer",
				period: "Jun 2022 - Jul 2023",
				responsibilities: [
					"Achieved a rating of 5 stars on Fiverr.",
					"Built Discord bots and technical documentation for multiple projects, including my own documentation for my game.",
					"Collaborated with clients from diverse backgrounds, delivering high-quality solutions that met their specific requirements.",
					"Designed and implemented custom bots for community management, content moderation, and user engagement."
				]
			}
		],
		extracurricular: [
			{
				title: "GDSC Lead",
				description: "Led a team of 100+ to conduct workshops, hackathons, and developer events."
			},
			{
				title: "Hackathon Organiser",
				description: "Organised a hackathon in my college with 80+ participants and 25 teams."
			},
			{
				title: "SIH Finalist",
				description: "Was a part of Smart India Hackathon 2023 working on a problem given by the Ministry of Housing and Urban Affairs."
			},
			{
				title: "Participated in Hackathons",
				description: "Participated in 20+ hackathons and won or got prizes in 12 of them."
			},
			{
				title: "Community Leader",
				description: "Led and engaged with multiple tech communities including:",
				list: [
					"Active contributor to open-source communities",
					"Created and led student developer communities in college",
					"Organised weekly coding sessions and tech talks for beginners"
				]
			}
		],
		skills: [
			{
				category: "Programming Languages",
				items: "Python, JavaScript (Node.js), TypeScript, Java, C, C++, SQL, Bash, Dart"
			},
			{
				category: "Frameworks/Libraries",
				subCategories: [
					{
						name: "Backend",
						items: "Express, Flask, Django, FastAPI"
					},
					{
						name: "Frontend",
						items: "React, Next.js, Svelte, SvelteKit, Flutter"
					},
					{
						name: "Database",
						items: "MongoDB, PostgreSQL, MySQL, Redis, Firestore"
					}
				]
			},
			{
				category: "Tools & Skills",
				items: "Docker, Kubernetes, AWS, Terraform, CI/CD, Git, Technical Writing, Application Architecture, API Design, OAuth"
			},
			{
				category: "MLOps & Data Science",
				items: "Tensorflow, PyTorch, Scikit-learn, Hugging Face, LangChain, MLflow, Pandas, NumPy"
			},
			{
				category: "Game Development",
				items: "Unity, Godot, Pixel Art, Game Design, 2D Animation"
			}
		],
		achievements: [
			{
				title: "AWS Community Builder (2023)",
				description: "Selected as one of the AWS Community Builders for Technical Writing."
			},
			{
				title: "Presidential Award 🏅 (2018)",
				description: "Got a medal from the then President of India for a design thinking innovation."
			},
			{
				title: "Kubernetes Certified (2023)",
				description: "Certified Kubernetes Application Developer. Solid knowledge of deployments, services, pods and networking."
			},
			{
				title: "GCP Certified (2022)",
				description: "Completed GCP certifications for Cloud Engineering and Architecture."
			},
			{
				title: "GitHub Campus Expert (2023)",
				description: "One of the 100 GitHub Campus Experts in India as of 2023."
			},
			{
				title: "SIH Finalist 2023",
				description: "Finalist in Smart India Hackathon 2023, working on a problem for Ministry of Housing and Urban Affairs."
			},
			{
				title: "5⭐ Hackerrank (2022)",
				description: "5 star coder on Hackerrank for Problem Solving and Python."
			}
		],
		tabs: [
			"Education",
			"Experience",
			"Extracurricular",
			"Skills",
			"Achievements"
		]
	};
</script>

<div id="apple-bg" class="flex flex-col gap-2 justify-center h-fit w-full py-4 apple-bg-pattern">
	<!-- Window drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] -->
	<div
		class="resume-window bg-doswhite h-fit max-h-[90vh] xl:max-h-[90vh] 3xl:max-h-[70vh] w-[95%] md:w-[90%] xl:w-[80%] mx-auto border-2 border-black "
	>
		<!-- Topbar -->
		<div class="flex flex-col items-center apple">
			<div class="flex flex-row justify-between w-full">
				<div class="relative z-[10] border-x-4 top-[4px] left-[20px] border-doswhite">
					<div class="border-2 border-black w-6 h-6 bg-doswhite"></div>
				</div>
				<div
					class="relative text-center px-2 top-[4px] z-[100] text-black bg-doswhite w-fit m-auto"
				>
					Resume.exe
				</div>
				<!-- <div class="relative z-[10] border-x-4 top-[4px] right-[20px] border-doswhite">
					<div class="border-2 border-black w-6 h-6 bg-doswhite flex items-center justify-center text-xs">
						 <span class="text-black">✕</span>
					</div>
				</div> -->
			</div>
			<div class="relative top-[-24px] flex flex-col w-full">
				<div class="mt-1 border-t-2 border-black mx-2"></div>
				<div class="mt-1 border-t-2 border-black mx-2"></div>
				<div class="mt-1 border-t-2 border-black mx-2"></div>
				<div class="mt-1 border-t-2 border-black mx-2"></div>
				<div class="mt-1 border-t-2 border-black mx-2"></div>
				<div class="mt-1 border-t-2 border-black"></div>
			</div>
		</div>

		<div class="flex flex-col lg:flex-row h-[calc(90vh-80px)] xl:h-[calc(90vh-80px)] 3xl:h-[calc(70vh-80px)] apple text-black p-2 md:p-4 gap-4">
			<!-- Sidebar Navigation -->
			<div
				class="flex flex-col gap-1 sticky min-w-[30%] lg:min-w-[25%] xl:min-w-[20%] top-0 h-fit overflow-hidden z-50 bg-doswhite border-4 border-doswhite text-sm md:text-base"
			>
				<div class="flex items-center justify-between border-b-2 border-black py-1">
					<div class="flex-1">Disk: /C</div>
					<div class="w-8 border-2 border-black flex items-center justify-center text-xs py-1">?</div>
				</div>
				<div class="flex flex-col md:flex-row w-full">
					<div class="border-2 border-black w-full">
						<ul class="grid grid-cols-2 text-xs md:text-sm lg:text-base md:flex md:flex-col">
							{#each resumeData.tabs as tabName, index}
								<li
									class="border-{index === 0 ? 'b' : index === MAX_TAB-1 ? 't' : 'y'}-2 border-transparent hover:border-black {tab === index+1
										? 'bg-black text-doswhite'
										: ''}"
								>
									<button
										class="p-2 md:p-1 w-full text-left"
										on:click={() => {
											tab = index+1;
										}}>{tabName}</button
									>
								</li>
							{/each}
						</ul>
					</div>
					<div
						class="md:border-2 border-b-2 md:w-8 border-t-0 border-x-0 md:border-l-0 border-black flex flex-row w-full md:flex-col justify-between"
					>
						<button
							on:click={() => {
								tab -= 1;
							}}
							on:keydown={() => {
								tab -= 1;
							}}
						>
							<img
								src={arrow}
								class="w-8 h-8 border-y-2 md:border-y-0 md:border-b-2 -rotate-90 md:rotate-0 border-black cursor-pointer"
								alt="up arrow"
							/>
						</button>
						<button
							on:click={() => {
								tab += 1;
							}}
							on:keydown={() => {
								tab += 1;
							}}
						>
							<img
								src={arrow}
								class="w-8 h-8 border-y-2 md:border-y-0 md:border-b-2 border-black rotate-90 md:rotate-180 cursor-pointer"
								alt="down arrow"
							/>
						</button>
					</div>
				</div>
				
				<!-- Download button in desktop view -->
				<div class="hidden lg:block mt-4">
					<a
						class="apple bg-doswhite text-black border-2 border-black p-2 px-4 block text-center active:underline hover:text-doswhite hover:bg-black"
						href="https://flowcv.com/resume/pjasuoi5b2"
						target="_blank"
						rel="noreferrer"
					>
						Download PDF Version
					</a>
				</div>
			</div>
			
			<!-- Content Area -->
			<div
				class="flex-1 flex flex-col gap-2 justify-between text-sm lg:text-base content-container h-full md:pb-8"
			>
				{#if tab == 1}
					<div class="px-2 py-2 md:px-4 flex flex-col gap-4 h-full">
						<div
							class="text-xl apple sticky top-0 pt-2 z-10 bg-doswhite border-b-2 border-black"
						>
							{resumeData.tabs[0]}
						</div>
						<div class="flex flex-col gap-8 apple content-scrollable">
							{#each resumeData.education as item}
								<div class="flex flex-col md:flex-row gap-2 md:gap-6">
									<img src={item.logo} class="h-20 w-20 md:h-24 md:w-24 border-2 border-black" alt={item.logoAlt} />
									<div class="flex flex-col">
										<div class="text-sm font-bold text-black">{item.institution}</div>
										<div class="text-sm text-black">{item.detail}</div>
										<div class="text-sm text-black">{item.period}</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{:else if tab == 2}
					<div class="px-2 py-2 md:px-4 flex flex-col gap-4 h-full">
						<div
							class="text-xl apple sticky top-0 pt-2 z-10 bg-doswhite border-b-2 border-black"
						>
							{resumeData.tabs[1]}
						</div>
						<div class="flex flex-col gap-8 apple content-scrollable">
							{#each resumeData.experience as job}
								<div class="flex flex-col md:flex-row gap-2 md:gap-6">
									<img src={job.logo} class="h-20 w-20 md:h-24 md:w-24 border-2 border-black" alt={job.logoAlt} />
									<div class="flex flex-col">
										<div class="text-sm font-bold text-black">{job.company}</div>
										<div class="text-sm text-black">{job.position}</div>
										<div class="text-sm text-black">{job.period}</div>
										<ul class="text-xs pl-4 mt-1 list-disc">
											{#each job.responsibilities as responsibility}
												<li>{responsibility}</li>
											{/each}
										</ul>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{:else if tab == 3}
					<div class="px-2 py-2 md:px-4 flex flex-col gap-4 h-full">
						<div
							class="text-xl apple sticky top-0 pt-2 z-10 bg-doswhite border-b-2 border-black"
						>
							{resumeData.tabs[2]}
						</div>
						<div class="flex flex-col gap-8 apple content-scrollable">
							{#each resumeData.extracurricular as activity}
								<div class="flex flex-col">
									<div class="text-sm font-bold text-black">{activity.title}</div>
									<div class="text-sm text-black">
										{activity.description}
										{#if activity.list}
											<ul class="text-xs pl-4 mt-1 list-disc">
												{#each activity.list as item}
													<li>{item}</li>
												{/each}
											</ul>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</div>
				{:else if tab == 4}
					<div class="px-2 py-2 md:px-4 flex flex-col gap-4 h-full">
						<div
							class="text-xl apple sticky top-0 pt-2 z-10 bg-doswhite border-b-2 border-black"
						>
							{resumeData.tabs[3]}
						</div>
						<div class="flex flex-col gap-8 apple content-scrollable">
							{#each resumeData.skills as skill}
								<div class="flex flex-col">
									<div class="text-sm font-bold text-black">{skill.category}</div>
									{#if skill.items}
										<div class="text-sm text-black">{skill.items}</div>
									{:else if skill.subCategories}
										{#each skill.subCategories as subCat}
											<div class="text-sm text-black">{subCat.name}: {subCat.items}</div>
										{/each}
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{:else if tab == 5}
					<div class="px-2 py-2 md:px-4 flex flex-col gap-4 h-full">
						<div
							class="text-xl apple sticky top-0 pt-2 z-10 bg-doswhite border-b-2 border-black"
						>
							{resumeData.tabs[4]}
						</div>
						<div class="flex flex-col gap-8 apple content-scrollable">
							{#each resumeData.achievements as achievement}
								<div class="flex flex-col">
									<div class="text-sm font-bold text-black">{achievement.title}</div>
									<div class="text-sm text-black">{achievement.description}</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
		
		<!-- Status Bar -->
		<div class="flex flex-row justify-between items-center border-t-2 relative -mt-4 border-black px-4 py-1 text-xs md:text-sm bg-[#b4b3b4]">
			<div class="text-black font-bold">
				Selected: {resumeData.tabs[tab - 1]}
			</div>
			<div class="text-black font-bold">{MAX_TAB} Items</div>
		</div>
	</div>
	<!-- Mobile download button -->
	<div class="flex flex-row w-full justify-center p-2 lg:hidden">
		<a
			class="apple bg-doswhite text-black border-2 border-black p-2 px-4 active:underline hover:text-doswhite hover:bg-black"
			href="https://flowcv.com/resume/pjasuoi5b2"
			target="_blank"
			rel="noreferrer"
		>
			Download PDF Version
		</a>
	</div>
</div>

<style>
	::selection {
		background-color: black;
		color: #b4b3b4;
	}

	.resume-window {
		position: relative;
	}

	.content-container {
		overflow: hidden;
		scroll-behavior: auto;
		overscroll-behavior: auto;
	}

	.content-scrollable {
		overflow-y: auto;
		scrollbar-width: none; /* For Firefox */
		-ms-overflow-style: none; /* For Internet Explorer and Edge */
		height: calc(100% - 50px);
		padding-right: 12px;
	}

	/* Custom scrollbar styling */
	.content-scrollable::-webkit-scrollbar {
		width: 16px;
		background-color: #f0f0f0;
		border-left: 2px solid black;
	}

	.content-scrollable::-webkit-scrollbar-thumb {
		background-color: #888;
		border: 2px solid black;
		border-radius: 0;
	}

	.content-scrollable::-webkit-scrollbar-thumb:hover {
		background-color: #555;
	}

	.content-scrollable::-webkit-scrollbar-track {
		background-color: #f0f0f0;
		border-left: 2px solid black;
	}

	/* Add a subtle inner shadow to the window to enhance the retro feel */
	/* .resume-window {
		box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.2);
	} */
	
	/* Apple background pattern */
	.apple-bg-pattern {
		background-image: url('$lib/assets/apple-tile.png');
		background-repeat: repeat;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.content-scrollable {
			height: calc(100% - 40px);
			max-height: 60vh;
		}
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		.content-scrollable {
			max-height: 65vh;
		}
	}
</style>
