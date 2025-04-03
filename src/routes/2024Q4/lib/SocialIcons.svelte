<script>
	import linkedin from '$lib/assets/social/linkedin.svg';
	import github from '$lib/assets/social/github.svg';
	import itch from '$lib/assets/social/itch.svg';
	// import fiverr from '$lib/assets/social/fiverr.svg';
	// import soundcloud from '$lib/assets/social/soundcloud.svg';
	// import telegram from '$lib/assets/social/telegram.svg';
	import x from '$lib/assets/social/x.svg';
	// import logo from '$lib/assets/logo.svg';
	import youtube from '$lib/assets/social/youtube.svg';
	// import facebook from "$lib/assets/social/facebook.svg";
	import instagram from '$lib/assets/social/instagram.svg';
	import whatsapp from '$lib/assets/social/whatsapp.svg';
	// import linkedin from '$lib/assets/social/linkedin.svg';

	export let opacity = 50;
	export let useSmallerIcons = false;

	const icons = [
		[linkedin, 'https://www.linkedin.com/in/kavirajar'],
		[github, 'https://github.com/data-overflow'],
		[x, 'https://x.com/kvrjr'],
		// [instagram, 'https://www.instagram.com/data.overflow/'],
		[whatsapp, 'https://wa.me/917695901087']
	];
	const style = {
		a: 'hover:text-primary-yellow'
	};
</script>

<div class="flex flex-row flex-wrap gap-3">
	{#each icons as icon}
		<a
			style="opacity: {opacity}%;"
			class="{useSmallerIcons ? 'w-5 h-5' : 'w-8 h-8 md:w-6 md:h-6'} hover:!opacity-80"
			href={icon[1]}
			target="_blank"
			rel="noreferrer"
		>
			<img class="brightness-0 dark:brightness-100" src={icon[0]} alt={icon[1]} />
		</a>
	{/each}
</div>
