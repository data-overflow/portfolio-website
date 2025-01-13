<script>
	import '../app.css';
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();
</script>

<NavBar />
{@render children()}
<Footer />
