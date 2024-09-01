<script>
	import '../app.css';
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
	import { menuState } from '../lib/stores';
	let { children } = $props();
</script>

<NavBar />
{@render children()}
<Footer />
