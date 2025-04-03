<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { page } from '$app/stores';

	// In a real implementation, you'd fetch blog post data based on the slug
	// This is a placeholder with sample content
	const blogPosts = {
		'retro-game-dev-tips': {
			title: 'Retro Game Development Tips',
			date: '2025-04-01',
			content: `
				<h2>Getting Started with Retro Game Development</h2>
				<p>Creating games with a retro aesthetic is not just about pixelated graphics. It's about capturing the essence of classic gaming while incorporating modern design principles.</p>
				
				<h3>1. Study the Classics</h3>
				<p>Take time to play and analyze games from the 8-bit and 16-bit eras. Pay attention to the limitations developers worked with and how they created memorable experiences despite these constraints.</p>
				
				<h3>2. Embrace Pixel Art</h3>
				<p>Pixel art is not just about low resolution—it's an art form with its own techniques and principles. Learn about concepts like limited color palettes, dithering, and careful pixel placement.</p>
				
				<h3>3. Focus on Game Feel</h3>
				<p>Retro games often had excellent "game feel" despite simple visuals. Pay attention to tight controls, responsive feedback, and satisfying mechanics.</p>
				
				<div class="code-block">
					<pre><code>// Example of tight jump controls
function handleJump() {
  if (isGrounded && jumpPressed) {
    // Apply immediate upward velocity
    velocity.y = -jumpForce;
    
    // Add a small grace period for jump input
    coyoteTimeRemaining = COYOTE_TIME;
    
    // Play sound effect
    playSfx(SFX.JUMP);
  }
}</code></pre>
				</div>
				
				<h3>4. Sound Design Matters</h3>
				<p>Authentic chiptune music and sound effects can elevate your retro game. Tools like FamiTracker or BFXR can help you create authentic 8-bit sounds.</p>
				
				<h3>5. Constraint-Driven Design</h3>
				<p>Imposing artificial limitations can lead to creative solutions. Try limiting your color palette, resolution, or control scheme to inspire creative problem-solving.</p>
			`,
			author: 'Kavi',
			category: 'Game Development',
			tags: ['retro gaming', 'game development', 'pixel art', 'sound design'],
			readTime: '5 min'
		},
		'pixel-art-fundamentals': {
			title: 'Pixel Art Fundamentals',
			date: '2025-03-15',
			content: `
				<h2>Mastering Pixel Art Fundamentals</h2>
				<p>Pixel art is a digital art form where images are created at the pixel level, with precise control over the placement and color of each pixel.</p>
				
				<h3>1. Start with Small Canvases</h3>
				<p>Begin with small sprite sizes like 16x16 or 32x32. This forces you to focus on simplicity and readability.</p>
				
				<div class="image-placeholder">
					<span>[16x16 SPRITE EXAMPLES]</span>
				</div>
				
				<h3>2. Use Limited Color Palettes</h3>
				<p>Classic games used limited color palettes due to hardware constraints. Using a limited palette helps maintain visual cohesion and a authentic retro look.</p>
				
				<h3>3. Understand Dithering</h3>
				<p>Dithering is a technique using patterns of dots to create the illusion of additional colors or shading. It was commonly used in older games to work around color limitations.</p>
				
				<div class="image-placeholder">
					<span>[DITHERING PATTERNS]</span>
				</div>
				
				<h3>4. Learn Proper Anti-Aliasing</h3>
				<p>Anti-aliasing in pixel art is the careful addition of intermediate color pixels to smooth jagged edges. Unlike automatic anti-aliasing, pixel art requires manual placement of these transition pixels.</p>
				
				<h3>5. Practice with References</h3>
				<p>Study classic sprites from NES, SNES, or Game Boy games. Try to recreate them to understand the techniques and principles used by professional pixel artists.</p>
			`,
			author: 'Kavi',
			category: 'Design',
			tags: ['pixel art', 'design', 'retro gaming', 'graphics'],
			readTime: '7 min'
		},
		'svelte-for-game-uis': {
			title: 'Using SvelteKit for Game UIs',
			date: '2025-02-28',
			content: `
				<h2>Creating Game UIs with SvelteKit</h2>
				<p>SvelteKit is an excellent framework for building responsive and interactive user interfaces for web-based games.</p>
				
				<h3>1. Reactive Game State</h3>
				<p>Svelte's reactive declarations make it easy to reflect game state changes in your UI:</p>
				
				<div class="code-block">
					<pre><code>// Game state store
const gameState = writable({
  health: 100,
  score: 0,
  level: 1,
  inventory: []
});

// In your component
let { health, score, level } = $gameState;

// Health bar that updates automatically
$: healthPercentage = (health / 100) * 100;</code></pre>
				</div>
				
				<h3>2. Animated Transitions</h3>
				<p>Use Svelte's built-in transitions to create smooth UI animations for game events:</p>
				
				<div class="code-block">
					<pre><code>{#if showInventory}
  <div transition:slide>
    <!-- Inventory UI here -->
  </div>
{/if}</code></pre>
				</div>
				
				<h3>3. Game Asset Preloading</h3>
				<p>SvelteKit's server-side rendering can help with asset preloading strategies:</p>
				
				<div class="code-block">
					<pre><code>// In +page.js
export function load() {
  return {
    gameAssets: [
      '/sprites/character.png',
      '/sprites/enemies.png',
      '/audio/soundtrack.mp3'
    ]
  };
}

// In your component
let { data } = $props();
let assetsLoaded = false;

onMount(() => {
  preloadAssets(data.gameAssets).then(() => {
    assetsLoaded = true;
  });
});</code></pre>
				</div>
				
				<h3>4. Responsive Game Controls</h3>
				<p>Create adaptive control schemes for different devices:</p>
				
				<div class="code-block">
					<pre><code>// Detect touch devices
$: isTouchDevice = 'ontouchstart' in window;

// Render appropriate controls
{#if isTouchDevice}
  <VirtualGamepad on:buttonpress={handleInput} />
{:else}
  <KeyboardControls />
{/if}</code></pre>
				</div>
			`,
			author: 'Kavi',
			category: 'Web Development',
			tags: ['svelte', 'sveltekit', 'ui design', 'game development'],
			readTime: '8 min'
		},
		'retro-sound-design': {
			title: 'Retro Sound Design',
			date: '2025-02-10',
			content: `
				<h2>Creating Authentic Retro Game Audio</h2>
				<p>Sound design is a crucial element in creating an authentic retro gaming experience. Here's how to capture that nostalgic audio aesthetic.</p>
				
				<h3>1. Understand Historical Limitations</h3>
				<p>Different console generations had specific audio hardware limitations:</p>
				<ul>
					<li>NES: 5 channels (2 pulse, 1 triangle, 1 noise, 1 PCM)</li>
					<li>SNES: 8 channels with DSP effects</li>
					<li>Game Boy: 4 channels (2 pulse, 1 custom wave, 1 noise)</li>
				</ul>
				
				<h3>2. Use the Right Tools</h3>
				<p>Several tools can help you create authentic chiptune sounds:</p>
				<ul>
					<li>FamiTracker: For NES-style music</li>
					<li>DefleMask: Multi-system tracker</li>
					<li>BFXR/SFXR: Quick 8-bit sound effect generation</li>
					<li>Plogue Chipsounds: VST for authentic chip emulation</li>
				</ul>
				
				<div class="image-placeholder">
					<span>[AUDIO WAVEFORM VISUALIZATION]</span>
				</div>
				
				<h3>3. Composition Techniques</h3>
				<p>Write music that works within the constraints:</p>
				<ul>
					<li>Use arpeggios to simulate chords</li>
					<li>Create illusion of reverb with echo patterns</li>
					<li>Employ duty cycle variations for timbral changes</li>
				</ul>
				
				<h3>4. Sound Effect Design Principles</h3>
				<p>Great retro sound effects follow certain patterns:</p>
				<ul>
					<li>Keep them short and distinctive</li>
					<li>Use pitch bends for movement</li>
					<li>Consider gameplay feedback - players should understand what the sound means</li>
				</ul>
				
				<h3>5. Implementation Tips</h3>
				<p>How to integrate retro sounds in modern engines:</p>
				<div class="code-block">
					<pre><code>// Example of simple audio manager for retro sounds
class RetroAudioManager {
  constructor() {
    this.sounds = new Map();
    this.music = null;
    
    // Limit simultaneous sounds to emulate chip limitations
    this.maxSimultaneousSounds = 4;
    this.activeSounds = [];
  }
  
  playSound(name) {
    // Prioritize important sounds if we hit channel limit
    if (this.activeSounds.length >= this.maxSimultaneousSounds) {
      // Stop least important sound
      const oldestSound = this.activeSounds.shift();
      oldestSound.stop();
    }
    
    const sound = this.sounds.get(name);
    sound.play();
    this.activeSounds.push(sound);
  }
}</code></pre>
				</div>
			`,
			author: 'Kavi',
			category: 'Audio',
			tags: ['audio', 'chiptune', 'sound design', '8-bit', 'game development'],
			readTime: '6 min'
		}
	};

	// Get current blog post slug from URL
	$: slug = $page.params.slug;
	$: post = blogPosts[slug] || {
		title: 'Post Not Found',
		date: '',
		content: '<p>Sorry, this blog post could not be found.</p>',
		author: '',
		category: '',
		tags: [],
		readTime: ''
	};

	onMount(() => {
		AOS.init();
		window.scrollTo(0, 0);
	});
</script>

<svelte:head>
	<title>{post.title} | DataOverflow</title>
	<meta name="description" content={post.content.substring(0, 160).replace(/<[^>]*>/g, '')} />
</svelte:head>

<div class="bg-black min-h-screen pt-16 pb-24 px-4 md:px-10">
	<div class="container mx-auto max-w-4xl">
		<!-- Back button -->
		<div class="mb-8">
			<a 
				href="/blog" 
				class="inline-flex items-center text-doswhite hover:text-primary transition-colors"
				data-aos="fade-right"
			>
				<span class="text-2xl mr-1">←</span> 
				<span class="dos">[RETURN TO BLOG]</span>
			</a>
		</div>
		
		<!-- Post header -->
		<div class="mb-12">
			<div class="flex gap-2 mb-4" data-aos="fade-up">
				<span class="text-secondary dos text-sm px-3 py-1 border border-secondary">
					{post.category}
				</span>
				<span class="text-doswhite dos text-sm px-3 py-1 border border-doswhite">
					{post.readTime} READ
				</span>
			</div>
			
			<h1 class="text-4xl md:text-5xl text-primary dos mb-4" data-aos="fade-up" data-aos-delay="100">
				{post.title}
			</h1>
			
			<div class="flex justify-between text-doswhite text-sm mb-8" data-aos="fade-up" data-aos-delay="200">
				<div>
					<span class="dos">BY: <span class="text-secondary">{post.author}</span></span>
				</div>
				<div>
					<span class="dos">{post.date}</span>
				</div>
			</div>
			
			<!-- Featured image placeholder -->
			<div 
				class="w-full aspect-video bg-gray-800 flex items-center justify-center mb-8 border-2 border-doswhite"
				data-aos="fade-up"
				data-aos-delay="300"
			>
				<span class="text-secondary text-2xl dos">[FEATURED IMAGE]</span>
			</div>
		</div>
		
		<!-- Post content -->
		<div class="blog-content text-doswhite apple" data-aos="fade-up" data-aos-delay="400">
			{@html post.content}
		</div>
		
		<!-- Tags -->
		{#if post.tags && post.tags.length > 0}
			<div class="mt-12 pt-8 border-t border-doswhite/30" data-aos="fade-up">
				<div class="flex flex-wrap gap-2 items-center">
					<span class="text-secondary dos text-sm">[TAGS]:</span>
					{#each post.tags as tag}
						<a 
							href={`/blog?tag=${tag}`} 
							class="text-doswhite dos text-xs px-3 py-1 border border-doswhite hover:border-primary hover:text-primary transition-all"
						>
							{tag}
						</a>
					{/each}
				</div>
			</div>
		{/if}
		
		<!-- More posts section -->
		<div class="mt-16 pt-8 border-t border-doswhite/30" data-aos="fade-up">
			<h3 class="text-primary dos text-2xl mb-6">READ NEXT [ ... ]</h3>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each Object.entries(blogPosts).slice(0, 2).filter(([key]) => key !== slug) as [key, relatedPost]}
					<div class="group">
						<a href={`/blog/${key}`} class="block bg-black border-2 border-doswhite hover:border-primary transition-all">
							<div class="p-4">
								<span class="text-xs text-secondary dos">{relatedPost.category}</span>
								<h3 class="text-white text-xl font-bold mt-1 mb-2 dos">{relatedPost.title}</h3>
								<div class="flex justify-between items-center">
									<div class="text-secondary text-xs dos">{relatedPost.date}</div>
									<div class="text-primary text-xs dos">{relatedPost.readTime} READ</div>
								</div>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.blog-content h2 {
		font-family: 'VT323', monospace;
		font-size: 2rem;
		color: theme('colors.primary');
		margin: 2rem 0 1rem 0;
	}
	
	.blog-content h3 {
		font-family: 'VT323', monospace;
		font-size: 1.5rem;
		color: theme('colors.secondary');
		margin: 1.5rem 0 0.75rem 0;
	}
	
	.blog-content p {
		margin-bottom: 1.25rem;
		line-height: 1.6;
	}
	
	.blog-content ul {
		list-style-type: square;
		margin: 1rem 0;
		padding-left: 1.5rem;
	}
	
	.blog-content ul li {
		padding: 0.25rem 0;
	}
	
	.code-block {
		background-color: #1a1a1a;
		border: 1px solid theme('colors.doswhite');
		border-left: 4px solid theme('colors.primary');
		padding: 1rem;
		margin: 1.5rem 0;
		overflow-x: auto;
	}
	
	.code-block pre {
		font-family: DOSVGA, 'VT323', monospace;
		font-size: 0.9rem;
		color: theme('colors.doswhite');
		line-height: 1.4;
	}
	
	.image-placeholder {
		background-color: #1a1a1a;
		border: 2px solid theme('colors.doswhite');
		padding: 2rem;
		margin: 1.5rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
		color: theme('colors.secondary');
		font-family: DOSVGA, 'VT323', monospace;
		text-align: center;
	}
</style>
