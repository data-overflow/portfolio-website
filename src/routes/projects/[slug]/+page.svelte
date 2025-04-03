<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { fly, fade } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    // Project data - in a real implementation, you would fetch this from an API or database
    // based on the slug parameter
    const projectData = {
        'cupids-startup': {
            title: "Cupid's Startup",
            type: "Dating Sim Game",
            date: "February 2023",
            technologies: ["Godot", "GDScript", "Pixel Art"],
            description: "A dating simulation game where you play as a startup founder trying to find the perfect match for your company. Will your startup succeed or fail based on your choices?",
            longDescription: `In "Cupid's Startup," you're tasked with finding a compatible co-founder for your tech startup. The game combines dating sim mechanics with business strategy, as you navigate through conversations and decisions that impact both your personal and professional relationships.

The game features:
- Multiple endings based on your choices
- Character relationship development system
- Startup funding and growth mechanics
- Beautiful pixel art graphics
- Original soundtrack`,
            screenshots: [
                "/project-screenshots/cupids-startup/screenshot1.jpg",
                "/project-screenshots/cupids-startup/screenshot2.jpg", 
                "/project-screenshots/cupids-startup/screenshot3.jpg"
            ],
            playLink: "https://dataoverflow.itch.io/cs",
            sourceLink: "https://github.com/data-overflow/cupids-startup",
            features: [
                "Multiple character paths and endings",
                "Business simulation elements",
                "Original soundtrack and pixel art",
                "Decision-based narrative"
            ],
            challenges: [
                "Balancing game mechanics with storytelling",
                "Creating branching dialogue systems",
                "Character development and relationship progression"
            ],
            relatedProjects: ["mop-it", "the-last-corridor"]
        },
        'mop-it': {
            title: "Mop It",
            type: "Puzzle Game",
            date: "November 2022",
            technologies: ["Unity", "C#", "2D Graphics"],
            description: "A satisfying puzzle game where you clean up black pixels using unique mopping mechanics. Solve increasingly complex levels with limited moves.",
            longDescription: `"Mop It" is a unique puzzle game where your objective is to clean up all the black pixels on each level using a limited number of moves. The game features a simple but addictive gameplay loop, with each level introducing new mechanics and challenges.

The game includes:
- 50+ handcrafted levels of increasing difficulty
- Special power-ups and abilities
- Minimalist art style with satisfying visual feedback
- Leaderboards and score tracking`,
            screenshots: [
                "/project-screenshots/mop-it/screenshot1.jpg",
                "/project-screenshots/mop-it/screenshot2.jpg", 
                "/project-screenshots/mop-it/screenshot3.jpg"
            ],
            playLink: "https://dataoverflow.itch.io/mop-it",
            sourceLink: "https://github.com/data-overflow/mop-it",
            features: [
                "Unique mopping mechanics",
                "Progressive difficulty curve",
                "Level editor for community creations",
                "Minimalist but appealing visual style"
            ],
            challenges: [
                "Designing balanced puzzles",
                "Implementing efficient pixel manipulation",
                "Creating a smooth difficulty progression"
            ],
            relatedProjects: ["cupids-startup", "the-last-corridor"]
        },
        'the-last-corridor': {
            title: "The Last Corridor",
            type: "Platformer Game",
            date: "October 2022",
            technologies: ["Unity", "C#", "Pixel Art"],
            description: "A challenging platformer where you navigate through a corridor that's continuously deteriorating. Run away from your past and make it to the end.",
            longDescription: `"The Last Corridor" is a fast-paced platformer where you must navigate through a corridor that's falling apart behind you. The game combines tight controls with increasingly difficult obstacles, creating a tense and rewarding gameplay experience.

Features include:
- Procedurally generated obstacles
- Dynamic difficulty adjustment
- Speed-based gameplay with precise controls
- Atmospheric pixel art and sound design`,
            screenshots: [
                "/project-screenshots/the-last-corridor/screenshot1.jpg",
                "/project-screenshots/the-last-corridor/screenshot2.jpg", 
                "/project-screenshots/the-last-corridor/screenshot3.jpg"
            ],
            playLink: "https://dataoverflow.itch.io/the-last-corridor",
            sourceLink: "https://github.com/data-overflow/the-last-corridor",
            features: [
                "Procedural level generation",
                "Time-based challenges",
                "Unique movement mechanics",
                "Atmospheric soundtrack"
            ],
            challenges: [
                "Creating responsive controls",
                "Balancing procedural generation",
                "Performance optimization for smooth gameplay"
            ],
            relatedProjects: ["cupids-startup", "mop-it"]
        },
        'donation-station': {
            title: "The Do-Nation Station",
            type: "Web Application",
            date: "August 2024",
            technologies: ["Next.js", "Appwrite", "Tailwind", "Material UI", "GCP"],
            description: "A platform for transparent donations to charitable organizations, offering search filters, history, leaderboard, profiles, and more.",
            longDescription: `"The Do-Nation Station" is a comprehensive platform designed to increase transparency in charitable donations. The platform connects donors with verified charitable organizations and provides detailed tracking of how donations are used.

Key features include:
- Organization verification system
- Donation tracking and transparency reports
- User profiles with donation history
- Search and filter functionality
- Leaderboards and social features`,
            screenshots: [
                "/project-screenshots/donation-station/screenshot1.jpg",
                "/project-screenshots/donation-station/screenshot2.jpg", 
                "/project-screenshots/donation-station/screenshot3.jpg"
            ],
            demoLink: "https://the-do-nation-station.vercel.app/",
            sourceLink: "https://github.com/data-overflow/donation-station",
            features: [
                "User authentication and profiles",
                "Organization verification system",
                "Donation tracking and reporting",
                "Search and filter functionality"
            ],
            challenges: [
                "Building a secure payment processing system",
                "Implementing verification protocols",
                "Creating an intuitive user interface",
                "Ensuring data privacy and security"
            ],
            relatedProjects: ["cyberhakz", "article-summarization"]
        }
    };

    // Default to a placeholder if the project doesn't exist
    let project = { 
        title: "Project Not Found",
        type: "Unknown",
        date: "",
        technologies: [],
        description: "This project either doesn't exist or hasn't been added to our database yet.",
        longDescription: "Check back later or explore our other projects.",
        screenshots: [],
        features: [],
        challenges: [],
        relatedProjects: []
    };

    onMount(() => {
        const slug = $page.params.slug;
        if (projectData[slug]) {
            project = projectData[slug];
        }
    });

    let currentScreenshot = 0;
    
    function nextScreenshot() {
        if (project.screenshots.length > 0) {
            currentScreenshot = (currentScreenshot + 1) % project.screenshots.length;
        }
    }
    
    function prevScreenshot() {
        if (project.screenshots.length > 0) {
            currentScreenshot = (currentScreenshot - 1 + project.screenshots.length) % project.screenshots.length;
        }
    }

    function navigateToRelatedProject(slug) {
        goto(`/projects/${slug}`);
    }
</script>

<svelte:head>
    <title>{project.title} | Kavirajar B</title>
    <meta name="description" content={project.description} />
</svelte:head>

<main class="bg-black min-h-screen text-doswhite">
    <!-- Back button with retro styling -->
    <div class="container mx-auto p-4 pt-24">
        <a href="/#games" class="inline-block text-primary dos mb-6 text-lg hover:underline">
            <span class="mr-2">←</span> BACK TO PROJECTS
        </a>
        
        <!-- Project Header -->
        <div in:fly={{ y: 50, duration: 500, delay: 200, easing: cubicOut }} class="mb-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl text-primary dos mb-2">{project.title}</h1>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-black border border-primary text-primary text-sm px-3 py-1">{project.type}</span>
                        <span class="bg-black border border-secondary text-secondary text-sm px-3 py-1">{project.date}</span>
                    </div>
                    <p class="text-xl mb-4">{project.description}</p>
                    
                    <div class="flex flex-wrap gap-3 mb-6">
                        {#each project.technologies as tech}
                            <span class="bg-black/30 text-secondary text-sm px-2 py-1 rounded">{tech}</span>
                        {/each}
                    </div>
                    
                    <div class="flex gap-4 mb-8">
                        {#if project.playLink}
                            <a href={project.playLink} target="_blank" rel="noreferrer" 
                               class="bg-primary text-black px-6 py-2 text-lg dos-shadow hover:bg-primary/90 transition-all">
                                PLAY NOW
                            </a>
                        {/if}
                        {#if project.demoLink}
                            <a href={project.demoLink} target="_blank" rel="noreferrer" 
                               class="bg-primary text-black px-6 py-2 text-lg dos-shadow hover:bg-primary/90 transition-all">
                                VIEW DEMO
                            </a>
                        {/if}
                        {#if project.sourceLink}
                            <a href={project.sourceLink} target="_blank" rel="noreferrer" 
                               class="bg-black border border-doswhite/40 text-doswhite px-6 py-2 text-lg hover:border-primary hover:text-primary transition-all">
                                SOURCE CODE
                            </a>
                        {/if}
                    </div>
                </div>
                
                <!-- Project Screenshots/Preview -->
                {#if project.screenshots && project.screenshots.length > 0}
                    <div class="relative border-2 border-doswhite/30 dos-shadow-lg">
                        <div class="overflow-hidden aspect-video bg-black/50">
                            <img 
                                src={project.screenshots[currentScreenshot]} 
                                alt={`${project.title} screenshot ${currentScreenshot + 1}`} 
                                class="w-full h-full object-contain"
                                />
                                <!-- onerror="this.src='/project-screenshots/placeholder.jpg'" -->
                        </div>
                        
                        {#if project.screenshots.length > 1}
                            <div class="absolute top-0 bottom-0 left-0 right-0 flex justify-between items-center pointer-events-none">
                                <button 
                                    on:click={prevScreenshot} 
                                    class="bg-black/70 text-white w-10 h-10 flex items-center justify-center pointer-events-auto hover:bg-primary transition-colors"
                                >
                                    ←
                                </button>
                                <button 
                                    on:click={nextScreenshot}
                                    class="bg-black/70 text-white w-10 h-10 flex items-center justify-center pointer-events-auto hover:bg-primary transition-colors"
                                >
                                    →
                                </button>
                            </div>
                            
                            <div class="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                                {#each project.screenshots as _, i}
                                    <button 
                                        on:click={() => currentScreenshot = i}
                                        class="w-3 h-3 rounded-full {currentScreenshot === i ? 'bg-primary' : 'bg-doswhite/50'} pointer-events-auto hover:bg-primary/80 transition-colors"
                                    ></button>
                                {/each}
                            </div>
                        {/if}
                    </div>
                {/if}
            </div>
        </div>
        
        <!-- Project Details -->
        <div in:fly={{ y: 50, duration: 500, delay: 400, easing: cubicOut }} class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div class="md:col-span-2 bg-black/20 border border-doswhite/20 p-6">
                <h2 class="text-2xl dos text-secondary mb-4">PROJECT OVERVIEW</h2>
                <div class="prose prose-lg prose-invert max-w-none">
                    {#each project.longDescription.split('\n\n') as paragraph}
                        <p class="mb-4">{paragraph}</p>
                    {/each}
                </div>
            </div>
            
            <div class="flex flex-col gap-6">
                <!-- Features -->
                <div class="bg-black/20 border border-doswhite/20 p-6">
                    <h2 class="text-2xl dos text-secondary mb-4">FEATURES</h2>
                    <ul class="ml-5 list-disc space-y-2">
                        {#each project.features as feature}
                            <li>{feature}</li>
                        {/each}
                    </ul>
                </div>
                
                <!-- Challenges -->
                <div class="bg-black/20 border border-doswhite/20 p-6">
                    <h2 class="text-2xl dos text-secondary mb-4">CHALLENGES</h2>
                    <ul class="ml-5 list-disc space-y-2">
                        {#each project.challenges as challenge}
                            <li>{challenge}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Related Projects -->
        {#if project.relatedProjects && project.relatedProjects.length > 0}
            <div in:fly={{ y: 50, duration: 500, delay: 600, easing: cubicOut }} class="mb-16">
                <h2 class="text-3xl dos text-primary mb-6">RELATED PROJECTS</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {#each project.relatedProjects as slug}
                        {#if projectData[slug]}
                            <div 
                                class="bg-black/20 border border-doswhite/20 p-6 cursor-pointer hover:border-primary transition-all"
                                in:fade={{ duration: 300, delay: 200 }}
                                on:click={() => navigateToRelatedProject(slug)}
                            >
                                <h3 class="text-xl text-secondary dos mb-2">{projectData[slug].title}</h3>
                                <p class="text-doswhite/70 mb-4">{projectData[slug].description}</p>
                                <div class="flex justify-between items-center">
                                    <div class="flex gap-2">
                                        {#each projectData[slug].technologies.slice(0, 2) as tech}
                                            <span class="bg-black/30 text-xs text-secondary px-2 py-1 rounded">{tech}</span>
                                        {/each}
                                        {#if projectData[slug].technologies.length > 2}
                                            <span class="text-xs text-doswhite/60">+{projectData[slug].technologies.length - 2} more</span>
                                        {/if}
                                    </div>
                                    <span class="text-primary">View →</span>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</main>

<style>
    .dos-shadow {
        box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
    }
    
    .dos-shadow-lg {
        box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.6);
    }
    
    :global(body) {
        background-color: #000;
    }
</style>
