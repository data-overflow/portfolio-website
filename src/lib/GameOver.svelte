<script>
	import { onMount } from 'svelte';
	import heart from '$lib/assets/heart.png';

	let time = 0;
	let scroll = 0;
	let myCanvas;

	const tiles = [];
	const thisTile = [];

	function tick() {
		time += 1;
	}
	tick();
	$: setInterval(tick, 1000);

	onMount(() => {
		window.addEventListener('scroll', (event) => {
			scroll = Math.floor(window.scrollY + (window.innerWidth < 480 ? 62715 : 64572));
		});

		const c = myCanvas;
		const ctx = c.getContext('2d');

		const cWidth = 400;
		const cHeight = 300;

		const tileSize = 5;

		const gridSize = [cWidth / tileSize, cHeight / tileSize];

		c.width = cWidth;
		c.height = cHeight;

		ctx.fillStyle = '#fff';

		c.addEventListener('mousemove', (e) => {
			const rect = e.target.getBoundingClientRect();
			const tileX = Math.min(
				gridSize[0],
				Math.max(0, Math.floor(((e.clientX - rect.x) / rect.width) * gridSize[0]))
			);
			const tileY = Math.min(
				gridSize[1],
				Math.max(0, Math.floor(((e.clientY - rect.y) / rect.height) * gridSize[1]))
			);

			if (tileX !== thisTile[0] || tileY !== thisTile[1]) {
				thisTile[0] = tileX;
				thisTile[1] = tileY;

				if (tiles[tileX][tileY].value === -1) {
					tiles[tileX][tileY].value = 1;
				}
			}
		});

		for (let x = 0; x < gridSize[0]; x++) {
			tiles[x] = [];
			for (let y = 0; y < gridSize[1]; y++) {
				tiles[x][y] = {
					value: -1,
					color: `hsl(${(720 / gridSize[1]) * y} 100% 50%`,
					startColor: `hsl(${(720 / gridSize[1]) * y} 100% 50%`
				};
			}
		}

		render();

		function render() {
			ctx.clearRect(0, 0, cWidth, cHeight);
			//console.log("rendering weeee", ctx, cWidth, cHeight, tiles, tileSize);
			for (let y = gridSize[1] - 1; y >= 0; y--) {
				for (let x = 0; x < gridSize[0]; x++) {
					if (tiles[x][y].value >= 0) {
						ctx.fillStyle = tiles[x][y].color;
						// ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
						// ctx.beginPath();
						// ctx.arc(
						//   (x + 0.5) * tileSize,
						//   (y + 0.5) * tileSize,
						//   tileSize * 0.65,
						//   0,
						//   2 * Math.PI
						// );
						// ctx.fill();
						//ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
						ctx.beginPath();
						ctx.rect(x * tileSize, y * tileSize, tileSize, tileSize);
						ctx.fill();
						ctx.closePath();

						if (tiles[x][y].value > 0) {
							let nextY = Math.floor(tiles[x][y].value);
							while (nextY > 0 && (y + nextY + 1 > gridSize[1] || tiles[x][y + nextY].value >= 0)) {
								nextY--;
							}

							if (nextY === 0) {
								const dirs = [];
								if (y + 1 < gridSize[1]) {
									if (x + 1 < gridSize[0] && tiles[x + 1][y + 1].value === -1) {
										dirs.push(1);
									}
									if (x > 0 && tiles[x - 1][y + 1].value === -1) {
										dirs.push(-1);
									}
								}

								if (dirs.length === 0) {
									tiles[x][y].value = 0;
								} else {
									const dir = dirs[Math.floor(Math.random() * dirs.length)];
									tiles[x + dir][y + 1].value = 1;
									tiles[x][y].value = -1;
									tiles[x + dir][y + 1].color = tiles[x][y].color;
									tiles[x][y].color = tiles[x][y].startColor;
								}
							} else {
								tiles[x][y + nextY].value = tiles[x][y].value + 0.1;
								tiles[x][y].value = -1;
								tiles[x][y + nextY].color = tiles[x][y].color;
								tiles[x][y].color = tiles[x][y].startColor;
							}
						}
					}
				}
			}
			requestAnimationFrame(render);
		}
	});
</script>

<div id="gameover" class="min-h-[60vh] md:h-[100vh] flex flex-col items-center">
	<div
		class="flex flex-col w-full m-auto p-10 bg-black text-white md:min-h-[100vh] lg:h-[100vh] md:text-lg lg:text-xl xl:text-3xl pstart"
	>
		<div class="flex flex-row justify-between sticky top-16 pointer-events-none">
			<div class="flex flex-col z-50">
				<div>SCORE</div>
				<div class={scroll == 69420 ? 'text-yellow-300' : ''}>{scroll}</div>
			</div>
			<div class="flex flex-col">
				<div>TIME</div>
				<div class="text-right">{time}</div>
			</div>
		</div>
		<div class="relative -top-16 flex flex-col w-full py-32 xl:p-64 gap-8 items-center">
			<div class="text-center z-50">
				{scroll == 69420 ? 'YOU WIN!' : 'GAME OVER'}
			</div>
			<div class="flex flex-col text-left gap-4 z-10">
				<div class="flex flex-row gap-8 group">
					<img
						class="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 group-hover:visible invisible hidden md:block"
						alt="heart"
						src={heart}
					/>
					<a class="text-doswhite group-hover:text-white group-active:text-[#fe0000]" href="#home"
						>RETRY</a
					>
				</div>
				<div class="flex flex-row gap-8 group">
					<img
						class="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 group-hover:visible invisible hidden md:block"
						alt="heart"
						src={heart}
					/>
					<a
						class="text-doswhite group-hover:text-white group-active:text-[#fe0000]"
						href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
						target="_blank"
						rel="noreferrer">END</a
					>
				</div>
			</div>
		</div>
	</div>
	<canvas class="relative h-[100vh] w-full top-[-100vh] hidden lg:block" bind:this={myCanvas}
	></canvas>
</div>
