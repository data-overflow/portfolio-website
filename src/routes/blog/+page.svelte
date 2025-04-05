<script>
	import { onMount } from 'svelte';
	import mood from '$lib/assets/mood.png';
	import AOS from 'aos';

	// Sample blog posts data - in a real implementation, you'd fetch these from an API or markdown files
	const blogPosts = [
		{
			id: 'making-it-at-21',
			title: 'What It\'s Like Trying to Make It at 21',
			date: '2025-04-05',
			excerpt: 'What it feels like to be 21, ambitious, and running out of doors to knock on.',
			category: 'Personal',
			coverImage: mood,
			readTime: '6 min'
		},
		{
			id: 'retro-game-dev-tips',
			title: 'Retro Game Development Tips',
			date: '2025-04-01',
			excerpt: 'Essential tips and tricks for creating authentic retro-style games that capture the magic of classic video games.',
			category: 'Game Development',
			coverImage: '/blog/retro-game-cover.jpg',
			readTime: '5 min'
		},
		{
			id: 'pixel-art-fundamentals',
			title: 'Pixel Art Fundamentals',
			date: '2025-03-15',
			excerpt: 'Learn the basics of creating stunning pixel art for your games and digital projects with these fundamental techniques.',
			category: 'Design',
			coverImage: '/blog/pixel-art-cover.jpg',
			readTime: '7 min'
		},
		{
			id: 'svelte-for-game-uis',
			title: 'Using SvelteKit for Game UIs',
			date: '2025-02-28',
			excerpt: 'How to leverage SvelteKit to create responsive and interactive user interfaces for web-based games.',
			category: 'Web Development',
			coverImage: '/blog/svelte-cover.jpg',
			readTime: '8 min'
		},
		{
			id: 'retro-sound-design',
			title: 'Retro Sound Design',
			date: '2025-02-10',
			excerpt: 'Creating authentic 8-bit and 16-bit sound effects and music for your retro-style games.',
			category: 'Audio',
			coverImage: '/blog/sound-cover.jpg',
			readTime: '6 min'
		}
	];

	// Get unique categories for filter buttons
	const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
	
	// Filter state
	let selectedCategory = 'All';
	let filteredPosts = [];
	
	// Pagination
	let postsPerPage = 3;
	let currentPage = 1;
	let displayedPosts = [];
	
	// Filter function
	function filterPosts(category) {
		selectedCategory = category;
		currentPage = 1; // Reset to first page when filtering
		
		if (category === 'All') {
			filteredPosts = [...blogPosts];
		} else {
			filteredPosts = blogPosts.filter(post => post.category === category);
		}
		
		updateDisplayedPosts();
	}
	
	// Update displayed posts based on current page
	function updateDisplayedPosts() {
		const startIndex = 0;
		const endIndex = currentPage * postsPerPage;
		displayedPosts = filteredPosts.slice(startIndex, endIndex);
	}
	
	// Load more posts function
	function loadMorePosts() {
		currentPage += 1;
		updateDisplayedPosts();
	}

	// Initialize with all posts
	onMount(() => {
		AOS.init();
		filterPosts('All'); // Initialize with all posts
	});
</script>

<div id="blog" class="bg-black py-16 min-h-screen px-4 md:px-10">
	<div class="container mx-auto">
		<div class="flex flex-col gap-8 mb-12">
			<div class="text-primary text-6xl" data-aos="fade">BLOG (THIS PAGE IS A WORK IN PROGRESS!!!)</div>
			<div class="flex items-center gap-2 text-doswhite text-sm mb-4 overflow-x-auto pb-2">
				<span class="dos text-secondary">[FILTER]:</span>
				{#each categories as category}
					<button 
						class="px-3 py-1 border {selectedCategory === category ? 'border-primary text-primary bg-primary/20' : 'border-doswhite hover:border-primary hover:text-primary'} transition-all"
						on:click={() => filterPosts(category)}
					>
						{category}
					</button>
				{/each}
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each displayedPosts as post}
				<div class="group h-full" data-aos="fade-up">
					<a href={`/blog/${post.id}`} class="flex bg-black border-2 border-doswhite hover:border-primary transition-all h-full flex-col">
						<div class="aspect-video bg-black/50 relative flex items-center justify-center overflow-hidden group-hover:brightness-110 transition-all">
							<div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
							{#if post.id === 'making-it-at-21' && post.coverImage}
								<img src={post.coverImage} alt="{post.title}" class="w-full h-full object-cover" />
							{:else}
								<div class="bg-gray-800 w-full h-full flex items-center justify-center">
									<span class="text-secondary text-2xl dos animate-pulse">[ Placeholder Blog ]</span>
								</div>
							{/if}
							<div class="absolute bottom-0 left-0 right-0 p-4 z-20">
								<span class="text-xs text-secondary dos">{post.category}</span>
								<h3 class="text-white text-xl font-bold mt-1 dos">{post.title}</h3>
							</div>
						</div>
						<div class="p-4 flex-grow flex flex-col">
							<p class="text-doswhite text-sm apple mb-4 flex-grow">{post.excerpt}</p>
							<div class="flex justify-between items-center mt-auto">
								<div class="text-secondary text-xs dos">{post.date}</div>
								<div class="text-primary text-xs dos">{post.readTime} READ</div>
							</div>
						</div>
					</a>
				</div>
			{:else}
				<div class="col-span-full py-12 text-center">
					<p class="text-doswhite dos text-lg">NO POSTS FOUND IN THIS CATEGORY [ ! ]</p>
				</div>
			{/each}
		</div>

		{#if displayedPosts.length < filteredPosts.length}
			<div class="flex justify-center mt-12">
				<button 
					class="px-6 py-2 border-2 border-primary text-primary dos hover:bg-primary/20 transition-all text-xl"
					on:click={loadMorePosts}
				>
					LOAD MORE POSTS [ ... ]
				</button>
			</div>
		{/if}
	</div>
</div>
