<script>
	import { onMount } from 'svelte';
	import SocialIcons from './SocialIcons.svelte';

	let { rss } = $props();
	let showMessage = $state(false);

	let home = $state();
	let message = $state();
	let typewriter = $state();

	onMount(() => {
		let TxtType = function (el, toRotate, period) {
			this.toRotate = toRotate;
			this.el = el;
			this.loopNum = 0;
			this.period = period;
			this.txt = '';
			this.tick();
			this.isDeleting = false;
		};

		TxtType.prototype.tick = function () {
			var i = this.loopNum % this.toRotate.length;
			var fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

			var that = this;
			var delta = 90 - Math.random() * 100;

			if (this.isDeleting) {
				delta /= 2;
			}

			if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt.length == 1) {
				this.isDeleting = false;
				this.loopNum++;
				delta = 500;
			}

			setTimeout(function () {
				that.tick();
			}, delta);
		};

		var toRotate = [
			'I write Code.',
			'I am Creative.\n\n\n\n\n\n\n\n\n\n\n\nI guess.',
			'I Love Design. Pixel Art. 8 Bit Music. And Creating Video Games.',
			'Humans call me Kavirajar B',
			'Scroll Down!\n\n\n\n\n\n\n\n And witness pure magic',
			'Wait you are still here?\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Lmao.',
			'This text is just going to loop itself, nothing fancy to see here. Scroll down.',
			"You can't be stuck here pls. Move on to the rest of the site!"
		];
		var period = 1800;
		if (toRotate && typewriter) {
			new TxtType(typewriter, toRotate, period);
		}
		var css = document.createElement('style');
		css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
		document.body.appendChild(css);

		window.addEventListener('scroll', function () {
			if (home) {
				home.style.backgroundPositionY = (-20 + this.scrollY * 0.2).toString() + '%';
			}
		});

		document.addEventListener('mousemove', function (e) {
			let left = e.screenX - 125;
			let top = e.screenY - 20;
			left = Math.max(0, Math.min(left, window.innerWidth * 0.75));
			if (message) {
				message.style.left = left + 'px';
				message.style.top = top + 'px';
			}
		});
	});
</script>

<div
	bind:this={message}
	class="absolute bg-black/50 backdrop-blur px-2 transition-opacity {showMessage
		? 'opacity-100'
		: 'opacity-0'}"
>
	That's me working on the next big thing!
</div>
<div id="home" bind:this={home} class="h-full w-full flex pb-16 md:p-0 md:items-center items-end">
	<div class="flex flex-col gap-2 w-full">
		<div
			class="flex items-end text-4xl md:text-6xl md:w-[60%] px-6 md:px-10 xl:px-32 font-bold switzer h-40 align-text-bottom"
		>
			This is me, Kavirajar B
		</div>
		<div class="flex flex-col gap-0">
			<div class="text-2xl md:text-3xl text-doswhite switzer px-6 md:px-10 xl:px-32">
				Distrupting the Ordinary, Building for a Better World
			</div>
			<!-- <div class="px-6 md:px-10 xl:px-32">
				<p bind:this={typewriter} class="typewrite text-left text-doswhite text-2xl md:text-2xl">
					<span class="wrap"></span>
				</p>
			</div> -->
		</div>
		<div class="h-fit px-6 md:px-10 xl:px-32">
			<SocialIcons opacity={50} />
		</div>
		<div
			class="flex flex-row gap-4 items-center px-6 md:px-10 xl:px-32 text-xl md:text-2xl mt-8 bg-transparent"
		>
			<a
				class="p-2 px-6 border-2 hover:bg-white rounded-sm hover:text-black z-100"
				href="https://flowcv.com/resume/pjasuoi5b2"
				target="_blank">View Resume</a
			>
		</div>
	</div>

	<div
		role="presentation"
		class="bg-black/0 right-[15%] top-[50%] md:absolute w-64 h-96 hidden md:block"
		onmouseenter={() => {
			showMessage = true;
		}}
		onmouseleave={() => {
			showMessage = false;
		}}
	></div>
</div>
{#if rss.success}
	<!-- <div
		class="marquee flex items-center justify-center h-4 relative -mt-4 bg-white text-black jersey font-bold text-xl"
	>
		<p class="text-ellipsis flex flex-row">
			{#each rss.news as news}
				<span class="w-fit">{news.toUpperCase() + ' | '}</span>
			{/each}
		</p>
	</div> -->
	<div
		class="overflow-x-hidden flex h-hit relative -mt-4 bg-white text-black jersey font-bold text-xl"
	>
		<div class="animate-marquee whitespace-nowrap h-fit w-fit">
			{#each rss.news as news}
				<span class="mx-4 min-h-fit">{news.toUpperCase()}</span>
			{/each}
		</div>
		<div class="animate-marquee2 whitespace-nowrap h-fit absolute w-fit">
			{#each rss.news as news}
				<span class="mx-4 min-h-fit">{news.toUpperCase()}</span>
			{/each}
		</div>
	</div>
{/if}

<style>
	::selection {
		background-color: #e9d05e;
		color: black;
	}
	#home {
		/* background-image: url('./assets/mood.png?enhanced'); */
		background-size: cover;
		background-image: linear-gradient(0deg, rgb(0, 0, 0), rgba(43, 57, 42, 0.073)),
			url('./assets/mood.png?enhanced');
		background-position-y: -20%;
		background-position-x: 80%;
		height: 99vh;
		width: 100%;
	}

	.marquee {
		height: 50px;
		position: relative;
		background: #fefefe;
		color: #333;
		border: 1px solid #4a4a4a;
	}

	.marquee p {
		position: absolute;
		width: 100%;
		height: 100%;
		margin: 0;
		line-height: 50px;
		text-align: center;
		-moz-transform: translateX(100%);
		-webkit-transform: translateX(100%);
		transform: translateX(100%);
		-moz-animation: scroll-left 2s linear infinite;
		-webkit-animation: scroll-left 2s linear infinite;
		animation: scroll-left 10s linear infinite;
	}

	@media screen and (min-width: 640px) {
		#home {
			background-image: linear-gradient(120deg, rgba(0, 0, 0, 0.811), rgba(255, 219, 135, 0.032)),
				url('./assets/mood.png');
		}
	}

	@media screen and (min-width: 1800px) {
		#home {
			height: 90vh;
		}
	}

	@-moz-keyframes scroll-left {
		0% {
			-moz-transform: translateX(100%);
		}
		100% {
			-moz-transform: translateX(-100%);
		}
	}

	@-webkit-keyframes scroll-left {
		0% {
			-webkit-transform: translateX(100%);
		}
		100% {
			-webkit-transform: translateX(-100%);
		}
	}

	@keyframes scroll-left {
		0% {
			-moz-transform: translateX(100%);
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
		100% {
			-moz-transform: translateX(-100%);
			-webkit-transform: translateX(-100%);
			transform: translateX(-100%);
		}
	}
</style>
