<script>
	import linkedin from '$lib/assets/social/linkedin.svg';
	import github from '$lib/assets/social/github.svg';
	import instagram from '$lib/assets/social/instagram.svg';
	import itch from '$lib/assets/social/itch.svg';
	import fiverr from '$lib/assets/social/fiverr.svg';
	import soundcloud from '$lib/assets/social/soundcloud.svg';
	import telegram from '$lib/assets/social/telegram.svg';
	import x from '$lib/assets/social/x.svg';
	import youtube from '$lib/assets/social/youtube.svg';

	const icons = [
		[linkedin, 'https://in.linkedin.com/in/kavirajar'],
		[github, 'https://github.com/data-overflow'],
		[x, 'https://twitter.com/kvrjr'],
		[telegram, 'https://t.me/kvrjr'],
		[fiverr, 'https://www.fiverr.com/dataoverflow/'],
		[instagram, 'https://instagram.com/data.overflow'],
		[itch, 'https://dataoverflow.itch.io'],
		[soundcloud, 'https://soundcloud.com/data-overflow'],
		[youtube, 'https://www.youtube.com/@kavirajar']
	];
	const style = {
		a: 'hover:underline active:text-secondary'
	};
</script>

<footer id="connect" class="bg-[#0000B0] flex flex-col p-10 lg:pr-32 text-2xl lg:gap-0 gap-10">
	<div
		class="flex flex-col md:flex-wrap md:flex-row justify-between gap-8 lg:gap-0 text-center lg:text-left"
	>
		<div class="flex flex-col lg:w-1/4 w-full text-left">
			<div class="text-4xl">DATAOVERFLOW</div>
			<div class="flex flex-row flex-wrap gap-4 lg:gap-2">
				{#each icons as icon}
					<a class="w-8 h-8 md:w-6 md:h-6" href={icon[1]} target="_blank" rel="noreferrer">
						<img class="fill-black" src={icon[0]} alt={icon[1]} />
					</a>
				{/each}
			</div>
			<!-- <div>Want websites likes this one? DM!</div> -->
		</div>
		<div class="flex flex-col">
			<div class="text-white/80">LEVEL SELECT</div>
			<a class={style.a} href="/#about">About</a>
			<a class={style.a} href="/#games">Games</a>
			<a class={style.a} href="/#projects">Projects</a>
			<a class={style.a} href="/music">Music</a>
			<a class={style.a} href="/blog">Blog</a>
		</div>
		<div class="flex flex-col">
			<div class="text-white/80">RESOURCES</div>
			<a
				class={style.a}
				target="_blank"
				rel="noreferrer"
				href="https://docs.google.com/presentation/d/1OkTRtbzJCZRIzMU_4zev6jRgl67bUtxe/edit?usp=sharing&ouid=102067098286536378623&rtpof=true&sd=true"
				>Brochure</a
			>
			<a
				class={style.a}
				target="_blank"
				rel="noreferrer"
				href="https://flowcv.com/resume/pjasuoi5b2">Resume</a
			>
		</div>
		<div class="flex flex-col">
			<div class="text-white/80">ARCHIVE</div>
			<a class={style.a} target="_blank" rel="noreferrer" href="/archive-2024">2024</a>
			<a
				class={style.a}
				target="_blank"
				rel="noreferrer"
				href="https://data-overflow.github.io/archive/2023">2023</a
			>
			<a
				class={style.a}
				target="_blank"
				rel="noreferrer"
				href="https://data-overflow.github.io/archive/2022">2022</a
			>
			<a
				class={style.a}
				target="_blank"
				rel="noreferrer"
				href="https://data-overflow.github.io/archive/2021">2021</a
			>
			<a
				class={style.a}
				target="_blank"
				rel="noreferrer"
				href="https://data-overflow.github.io/archive/2020">2020</a
			>
		</div>
	</div>
	<div class="text-center lg:text-left">
		Made with <span class="text-secondary">&lt;3</span> by Kavirajar B
	</div>
</footer>

<style>
	img {
		/* filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
        filter: invert(72%) sepia(6%) saturate(21%) hue-rotate(251deg)
            brightness(98%) contrast(94%); */
		opacity: 80%;
	}

	img:hover {
		opacity: 100%;
	}
</style>
