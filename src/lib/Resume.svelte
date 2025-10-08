<script>
	import arrow from '$lib/assets/scroll-arrow.png';
	import cit from '$lib/assets/cit.png';
	import dav from '$lib/assets/dav.png';
	import cognizant from '$lib/assets/cognizant.png';
	import fiverr from '$lib/assets/fiverr.png';
	import lumos from '$lib/assets/lumos.png';
	import teachafy from '$lib/assets/teachafy.png';
	import quantegies from '$lib/assets/quantegies.png';
	import lyzr from '$lib/assets/lyzr.png';

	const MAX_TAB = 5;
	const RESUME_LINK = "https://drive.google.com/file/d/1Iufwcex0A8wS0pBlGnAzqO1xxuQPpTWW/view?usp=sharing";
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
				period: "Oct 2021 - May 2025 (Can't wait) | Chennai, India",
				link: "https://www.citchennai.edu.in/"
			},
			{
				logo: dav,
				logoAlt: "dav logo",
				institution: "DAV Boys Senior Secondary School, Gopalapuram",
				detail: "Grade: SSC - 464/500 | HSC - 432/500",
				period: "2009 - 2021",
				link: "https://bgpm.davchennai.org/"
			}
		],
		experience: [
			{
				logo: lyzr,
				logoAlt: "lyzr logo",
				company: "Lyzr AI",
				position: "Founder's Office Developer",
				period: "Aug 2025 - Present | Bengaluru, India (Hybrid)",
				link: "https://lyzr.ai/",
				responsibilities: [
					"Building SaaS applications powered by production ready Lyzr AI Agents"
				]
			},
			{
				logo: quantegies,
				logoAlt: "quantegies logo",
				company: "Quantegies",
				position: "AI Engineer",
				period: "July 2025 - Aug 2025 | CA, United States (Remote)",
				link: "https://quantegies.com/",
				responsibilities: [
					"Worked on areas such as quantitative finance, algorithmic trading and machine learning using C++"
				]
			},

			{
				logo: teachafy,
				logoAlt: "teachafy logo",
				company: "Teachafy Labs",
				position: "Founding AI/ML Engineer",
				period: "Dec 2024 - July 2025 | Chennai, India",
				link: "https://teachafy.com/",
				responsibilities: [
					"Designed & engineered the product to production, and setup CI/CD pipelines using Git, Docker Compose & AWS",
					"Ensured 100% consistency integrating 3rd party platforms such as Notion & Frappe, using a two-way database sync system",
					"Awarded Most Valuable Player of the organization, for completing a four-month project in one month",
					"Technologies Used: OpenAI Assistants API, Google Agent Development Kit, LangChain, FastAPI, PostgreSQL, Docker Compose, AWS, Composio, Notion, Frappe, Supabase, DevOps, CI/CD"
				]
			},
			{
				logo: fiverr,
				logoAlt: "fiverr logo",
				company: "Fiverr",
				position: "Freelance Full Stack Developer",
				period: "Dec 2023 - Nov 2024 | Remote, Global",
				link: "https://www.fiverr.com/dataoverflow",
				responsibilities: [
					"Delivered 5+ client websites using SvelteKit with 100% on-time completion, and $1.2K revenue in 2 weeks",
					"Deployed frontend websites with 95-97% mobile performance using optimizations such as caching, lazy loading and splitting"
				]
			},
			{
				logo: cognizant,
				logoAlt: "cognizant logo",
				company: "Cognizant",
				position: "Research & Development Intern",
				period: "Jun 2023 - Aug 2023 | Chennai, India",
				link: "https://www.cognizant.com/",
				responsibilities: [
					"Reduced warehouse navigation time by 50% for clients by innovating an AR navigation app (for Vuzix m400) using Unity3D",
					"Optimized pathfinding algorithms to enable error-free routing in complex environments, boosting client productivity",
					"Presented a demo to the President EMEA of Cognizant following internal recognition by high-level executives for work"
				]
			}
		],
		extracurricular: [
			{
				title: "Intel Student Ambassador for oneAPI",
				description: "Spearheaded workshops and technical sessions to educate 200+ students on oneAPI's AI tools, driving adoption of cross-architecture development"
			},
			{
				title: "Technical Head, Lumos Magazine",
				description: "Led cross-functional teams to build the Lumos App and Hikari No Matsuri website, driving engagement for 1,500+ students and 1K+ event attendees"
			},
			{
				title: "Competitive Coding",
				description: "Active participant in coding competitions with impressive rankings:",
				list: [
					"Leetcode (data-overflow), Contest Rating 1649, Best Rank 2711, Solved 475+ Problems",
					"CodeChef (data_overflow), Div 3, Contest Rating 1481, Best Rank 217 Globally",
					"CodeForces (data-overflow), Newbie, Contest Rating 1064, Best Rank 3749 globally",
					"Rank 2, Coding Ninjas Code-a-thon 2022 among 1000+ students in university"
				]
			}
		],
		skills: [
			{
				category: "Programming Languages",
				items: "C#, C++, Python, HTML, JavaScript, TypeScript"
			},
			{
				category: "Frameworks/Libraries",
				subCategories: [
					{
						name: "Frontend",
						items: "SvelteKit, React, Next.js, Tailwind CSS, Material UI"
					},
					{
						name: "Backend",
						items: "Express.js, FastAPI, Flask"
					},
					{
						name: "Database",
						items: "MySQL, Pocketbase, Supabase, PostgreSQL"
					}
				]
			},
			{
				category: "AI & Machine Learning",
				items: "Pandas, NumPy, Scikit-learn, Tensorflow, Keras, OpenCV, LangChain, OpenAI API"
			},
			{
				category: "Tools & Skills",
				items: "Docker, Git & GitHub, Google Cloud Platform, Unix & Linux, TCP/IP, CI/CD, Figma (UI/UX)"
			},
			{
				category: "Game Development",
				items: "Godot Engine, Unity 3D, Game Programming"
			}
		],
		achievements: [
			{
				title: "Hack4Change Charcha 2024 by Google and The Nudge Institute National Finalist",
				description: "Selected for final round (top 40/6000+ submissions) in Hack4Change Charcha 2024 by Google, The Nudge Institute."
			},
			{
				title: "Special Mention at IGDC Game Jam 2024",
				description: "Organized by WTF, Nikhil Kamath - ranked among top 11 from 350+ submissions"
			},
			{
				title: "Best Game Award at Global Game Jam 2024",
				description: "Also received 'Most Innovative Game' title among 30+ teams in Chennai"
			},
			{
				title: "Google DSC WOW 2023 Hackathon National Finalist",
				description: "Top 30 out of 3800+ teams (nation wide) for solar energy prediction tool"
			},
			{
				title: "Rank 42 in Global Game Jam",
				description: "Ranked 42nd globally among 1K+ entries for a responsive platformer game made in 72 hours, garnering 12K+ plays on itch"
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
		<div class="flex flex-col items-center windows">
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

		<div class="flex flex-col lg:flex-row h-[calc(90vh-80px)] xl:h-[calc(90vh-80px)] 3xl:h-[calc(70vh-80px)] windows text-black p-2 md:p-4 gap-4">
			<!-- Sidebar Navigation -->
			<div
				class="flex flex-col gap-1 sticky min-w-[30%] lg:min-w-[25%] xl:min-w-[20%] top-0 h-fit overflow-hidden z-50 bg-doswhite border-4 border-doswhite text-base md:text-xl lg:text-2xl"
			>
				<div class="flex items-center justify-between border-b-2 border-black py-1">
					<div class="flex-1">Disk: /C</div>
					<div class="w-8 border-2 border-black flex items-center justify-center text-base py-1">?</div>
				</div>
				<div class="flex flex-col md:flex-row w-full">
					<div class="border-2 border-black w-full">
						<ul class="grid grid-cols-2 text-xs md:text-sm sf lg:text-base md:flex md:flex-col">
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
						class="sf text-xl bg-doswhite text-black border-2 border-black p-2 px-4 block text-center active:underline hover:text-doswhite hover:bg-black"
						href={RESUME_LINK}
						target="_blank"
						rel="noreferrer"
					>
						Download PDF Version
					</a>
				</div>
			</div>
			
			<!-- Content Area -->
			<div
				class="flex-1 flex flex-col gap-2 justify-between text-base md:text-xl lg:text-2xl content-container h-full md:pb-8"
			>
				{#if tab == 1}
					<div class="px-2 py-2 md:px-4 flex flex-col gap-4 h-full">
						<div
							class="text-2xl sf sticky top-0 pt-2 z-10 bg-doswhite border-b-2 border-black"
						>
							{resumeData.tabs[0]}
						</div>
						<div class="flex flex-col gap-8 sf content-scrollable">
							{#each resumeData.education as item}
								<div class="flex flex-col md:flex-row gap-2 md:gap-6">
									<a href={item.link} target="_blank" rel="noreferrer" class="min-h-20 min-w-20 md:min-h-24 md:min-w-24">
										<img src={item.logo} class="h-20 w-20 md:h-24 md:w-24 border-2 border-black" alt={item.logoAlt} />
									</a>
									<div class="flex flex-col">
										<div class="text-xl font-bold text-black">{item.institution}</div>
										<div class="text-xl text-black">{item.detail}</div>
										<div class="text-xl text-black">{item.period}</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{:else if tab == 2}
					<div class="px-2 py-2 md:px-4 flex flex-col gap-4 h-full">
						<div
							class="text-2xl sf sticky top-0 pt-2 z-10 bg-doswhite border-b-2 border-black"
						>
							{resumeData.tabs[1]}
						</div>
						<div class="flex flex-col gap-8 sf content-scrollable">
							{#each resumeData.experience as job}
								<div class="flex flex-col md:flex-row gap-2 md:gap-6">
									<a href={job.link} target="_blank" rel="noreferrer" class="min-h-20 min-w-20 md:min-h-24 md:min-w-24">
										<img src={job.logo} class="h-20 w-20 md:h-24 md:w-24 border-2 border-black" alt={job.logoAlt} />
									</a>
									<div class="flex flex-col">
										<div class="text-xl font-bold text-black">{job.company}</div>
										<div class="text-xl text-black">{job.position}</div>
										<div class="text-xl text-black">{job.period}</div>
										<ul class="text-lg pl-4 mt-1 list-disc">
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
							class="text-2xl sf sticky top-0 pt-2 z-10 bg-doswhite border-b-2 border-black"
						>
							{resumeData.tabs[2]}
						</div>
						<div class="flex flex-col gap-8 sf content-scrollable">
							{#each resumeData.extracurricular as activity}
								<div class="flex flex-col">
									<div class="text-xl font-bold text-black">→ {activity.title}</div>
									<div class="text-xl text-black">
										{activity.description}
										{#if activity.list}
											<ul class="text-xl pl-4 mt-1 list-disc">
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
							class="text-2xl sf sticky top-0 pt-2 z-10 bg-doswhite border-b-2 border-black"
						>
							{resumeData.tabs[3]}
						</div>
						<div class="flex flex-col gap-8 sf content-scrollable">
							{#each resumeData.skills as skill}
								<div class="flex flex-col">
									<div class="text-xl font-bold text-black">→ {skill.category}</div>
									{#if skill.items}
										<div class="text-xl text-black">{skill.items}</div>
									{:else if skill.subCategories}
										{#each skill.subCategories as subCat}
											<div class="text-xl text-black">{subCat.name}: {subCat.items}</div>
										{/each}
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{:else if tab == 5}
					<div class="px-2 py-2 md:px-4 flex flex-col gap-4 h-full">
						<div
							class="text-2xl sf sticky top-0 pt-2 z-10 bg-doswhite border-b-2 border-black"
						>
							{resumeData.tabs[4]}
						</div>
						<div class="flex flex-col gap-8 sf content-scrollable">
							{#each resumeData.achievements as achievement}
								<div class="flex flex-col">
									<div class="text-xl font-bold text-black">→ {achievement.title}</div>
									<div class="text-xl text-black">{achievement.description}</div>
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
			<div class="text-black font-bold">{
				// Get the length of the array for the current tab
				(() => {
					const currentTab = resumeData.tabs[tab - 1].toLowerCase();
					return resumeData[currentTab]?.length || 0;
				})()
			} Items</div>
		</div>
	</div>
	<!-- Mobile download button -->
	<div class="flex flex-row w-full justify-center p-2 lg:hidden">
		<a
			class="sf bg-doswhite text-black border-2 border-black p-2 px-4 active:underline hover:text-doswhite hover:bg-black"
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
		background-color: #B4B3B4;
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
		background-color: #B4B3B4;
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
