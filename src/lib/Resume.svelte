<script>
	import arrow from '$lib/assets/scroll-arrow.png';
	import cit from '$lib/assets/cit.png';
	import dav from '$lib/assets/dav.png';
	import cognizant from '$lib/assets/cognizant.png';
	import fiverr from '$lib/assets/fiverr.png';
	import lumos from '$lib/assets/lumos.png';

	const MAX_TAB = 5;
	let tab = 2;

	$: {
		if (tab < 1) {
			tab = 1;
		} else if (tab > MAX_TAB) {
			tab = MAX_TAB;
		}
	}
</script>

<div
	id="apple-bg"
	class="flex flex-col gap-2 justify-center bg-white h-fit w-full xl:h-[120vh] 2xl:h-[110vh] 3xl:h-[90vh]"
>
	<!-- Window -->
	<div
		class="bg-doswhite h-fit xl:h-[90%] w-[98%] md:w-[90%] xl:w-[80%] mt-4 mb-4 mx-auto border-2 border-black"
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

		<div class="flex flex-col md:flex-row apple text-black p-4 md:p-8 gap-8">
			<div
				class="flex flex-col gap-1 sticky top-10 z-50 bg-doswhite border-4 border-doswhite text-sm md:text-base"
			>
				<div>Disk: /C</div>
				<div class="flex flex-col md:flex-row">
					<div class="border-2 border-black w-full">
						<ul class="grid grid-cols-2 text-xs md:text-base md:flex md:flex-col">
							<li
								class="border-b-2 border-transparent hover:border-black {tab == 1
									? 'bg-black text-doswhite'
									: ''}"
							>
								<button
									class="p-2 md:p-1 w-full text-left"
									on:click={() => {
										tab = 1;
									}}>Education</button
								>
							</li>
							<li
								class="border-y-2 border-transparent hover:border-black {tab == 2
									? 'bg-black text-doswhite'
									: ''}"
							>
								<button
									class="p-2 md:p-1 w-full text-left"
									on:click={() => {
										tab = 2;
									}}>Experience</button
								>
							</li>
							<li
								class="border-y-2 border-transparent hover:border-black {tab == 3
									? 'bg-black text-doswhite'
									: ''}"
							>
								<button
									class="p-2 md:p-1 w-full text-left"
									on:click={() => {
										tab = 3;
									}}>Extracurricular</button
								>
							</li>
							<li
								class="border-y-2 border-transparent hover:border-black {tab == 4
									? 'bg-black text-doswhite'
									: ''}"
							>
								<button
									class="p-2 md:p-1 w-full text-left"
									on:click={() => {
										tab = 4;
									}}>Skills</button
								>
							</li>
							<li
								class="border-t-2 border-transparent hover:border-black {tab == 5
									? 'bg-black text-doswhite'
									: ''}"
							>
								<button
									class="p-2 md:p-1 w-full text-left"
									on:click={() => {
										tab = 5;
									}}>Achievements</button
								>
							</li>
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
								alt="arrow"
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
								alt="arrow"
							/>
						</button>
					</div>
				</div>
			</div>
			<div class="flex flex-col w-full h-full gap-8 lg:gap-2 justify-between text-sm lg:text-md">
				{#if tab == 1}
					<div class="px-2 py-2 md:px-8 flex flex-col gap-8">
						<div
							class="text-xl apple sticky top-48 pt-4 md:top-56 md:static bg-doswhite border-2 border-doswhite"
						>
							Education
						</div>
						<div class="flex flex-col gap-10 apple">
							<div class="flex flex-col md:flex-row gap-2 md:gap-10">
								<img src={cit} class="h-24 w-24" alt="cit logo" />
								<div class="flex flex-col">
									<div class="text-sm text-black">Chennai Institute of Technology</div>
									<div class="text-sm text-black">
										B.Tech Artificial Intelligence & Data Science
									</div>
									<div class="text-sm text-black">2021-2025 (Can't wait)</div>
								</div>
							</div>
							<div class="flex flex-col md:flex-row gap-2 md:gap-10">
								<img src={dav} class="h-24 w-24" alt="cit logo" />
								<div class="flex flex-col">
									<div class="text-sm text-black">
										DAV Boys Senior Secondary School, Gopalapuram
									</div>
									<div class="text-sm text-black">Grade: SSC - 464/500 | HSC - 432/500</div>
									<div class="text-sm text-black">2009-2021</div>
								</div>
							</div>
						</div>
					</div>
				{:else if tab == 2}
					<div class="px-2 py-2 md:px-8 flex flex-col gap-8">
						<div
							class="text-xl apple sticky top-48 pt-4 md:top-56 md:static bg-doswhite border-2 border-doswhite"
						>
							Experience
						</div>
						<div class="flex flex-col gap-10 apple">
							<div class="flex flex-col md:flex-row gap-2 md:gap-10">
								<img src={fiverr} class="h-24 w-24" alt="cit logo" />
								<div class="flex flex-col">
									<div class="text-sm text-black">Fiverr</div>
									<div class="text-sm text-black">Freelancer, Full Stack Developer</div>
									<div class="text-sm text-black">Dec 2023 - Present</div>
									<ul class="text-xs">
										<li>
											- Developed animated, responsive, and accessible websites for 5+ clients using
											SvelteKit and FastAPI, delivering high-quality projects on time
										</li>
										<li>
											- Generated $1200 in revenue in under 3 weeks while working part-time,
											demonstrating strong project management and client satisfaction
										</li>
									</ul>
								</div>
							</div>
							<div class="flex flex-col md:flex-row gap-2 md:gap-10">
								<img src={cognizant} class="h-24 w-24" alt="cit logo" />
								<div class="flex flex-col">
									<div class="text-sm text-black">Cognizant</div>
									<div class="text-sm text-black">Research & Development Intern</div>
									<div class="text-sm text-black">Jun 2023 - Aug 2023</div>
									<ul class="text-xs">
										<li>
											- Innovated an Augmented Reality (AR) app using Unity3D and Vuforia Engine for
											the Vuzix m400 device, enhancing user interaction
										</li>
										<li>
											- Improved navigation efficiency by 100% using AR, significantly boosting
											productivity
										</li>
										<li>
											- Solved complex data structures and algorithms problems on computer vision &
											path finding, reduced computational delay by 50%, enhancing overall product
											quality and operational effectiveness
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				{:else if tab == 3}
					<div class="px-2 py-2 md:px-8 flex flex-col gap-8">
						<div
							class="text-xl apple sticky top-48 pt-4 md:top-56 md:static bg-doswhite border-2 border-doswhite"
						>
							Extracurricular Activities
						</div>
						<div class="flex flex-col gap-10 apple">
							<div class="flex flex-col md:flex-row gap-2 md:gap-10">
								<img src={lumos} class="h-24 w-24" alt="cit logo" />
								<div class="flex flex-col">
									<div class="text-sm text-black">Lumos</div>
									<div class="text-sm text-black">Technical Head</div>
									<div class="text-sm text-black">Feb 2023 - Apr 2024</div>
									<ul class="text-xs">
										<li>
											- Led a team of 100+ students to develop the Lumos App, providing instant
											access to critical information such as competitions, conferences, and alerts,
											effectively connecting 1500+ students on campus
										</li>
										<li>
											- Implemented a website for Chennai's largest Japanese X Anime event <a
												href="https://lumos-web-sigma.vercel.app/"
												target="_blank"
												class="underline">Hikari No Matsuri</a
											>, attracting a significant number of attendees and enhancing event visibility
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				{:else if tab == 4}
					<div class="px-2 py-2 md:px-8 flex flex-col gap-8">
						<div
							class="text-xl apple sticky top-48 pt-4 md:top-56 md:static bg-doswhite border-2 border-doswhite"
						>
							Skills
						</div>
						<div class="text-sm text-black apple">
							<ul class="flex flex-col gap-4">
								<li>
									<span class="text-black">• Languages</span> <br /> C, C++, C#, Python, HTML, CSS, JavaScript,
									TypeScript, SQL, GDScript
								</li>
								<li>
									<span class="text-black">• Web Development</span> <br />
									Svelte, ReactJS, NodeJS, ExpressJS, FastAPI, Flask, Django, Tailwind
								</li>
								<li>
									<span class="text-black">• Data Analytics & Machine Learning</span> <br /> NumPy, Pandas,
									Matplotlib, TensorFlow, Keras, Scikit-learn
								</li>
								<li>
									<span class="text-black">• Misc</span> <br /> Git, Figma (UI/UX), Networking, React
									Native, Unity3D, Godot Engine, MS Office
								</li>
							</ul>
						</div>
					</div>
				{:else if tab == 5}
					<div class="px-2 py-2 md:px-8 flex flex-col gap-8">
						<div
							class="text-xl apple sticky top-48 pt-4 md:top-56 md:static bg-doswhite border-2 border-doswhite"
						>
							Achievements
						</div>
						<ul class="flex flex-col">
							<li>
								• Selected for final round (top 40 out of 6000+ submissions) of Hack4Change Charcha
								2024 organized by the Nudge Institute & Google
							</li>
							<li>
								• Special Mention at WTF x IGDC Game Jam 2024 - Placed as the 11th video game among
								350+ other submissions created within 48 hours across India
							</li>
							<li>• Selected as Intel Student Ambassador for oneAPI</li>
							<li>
								• Global Game Jam 2024 Chennai: Won the Best Innovative Game Award among 30+ other
								teams
							</li>
							<li>
								• Google Developer Student Clubs WOW Hackathon 2023: Secured an entry to the finals
								being part of the top 30 among 3800+ teams across India
							</li>
							<li>• PECTEAM Conference 2023: Runner up for best project (PersonalGPT)</li>
							<li>
								• Coding Ninjas Code-a-thon 2022: Rank 2 among 1500+ students conducted by Chennai
								Institute of Technology
							</li>
						</ul>
					</div>
				{/if}
				<div class="flex flex-row w-full justify-center p-4">
					<a
						class="apple bg-doswhite text-black border-2 border-black p-2 px-4 active:underline hover:text-doswhite hover:bg-black"
						href="https://flowcv.com/resume/pjasuoi5b2"
						target="_blank"
						rel="noreferrer">View Full Resume</a
					>
				</div>
			</div>
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
		background-color: black;
		color: #b4b3b4;
	}

	#apple-bg {
		background-image: url('$lib/assets/apple-tile.png');
	}

	button {
		letter-spacing: -0.2rem;
	}

	button:hover {
		cursor: url('$lib/assets/cursor-pointer.cur'), pointer;
	}
</style>
