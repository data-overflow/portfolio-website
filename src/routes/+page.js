export async function load({ fetch }) {
	const response = await fetch('/api/rss');
	const rssData = await response.json();
	if (response.ok) {
		return { news: rssData, success: true };
	} else {
		return { error: 'Failed to load RSS feed', success: false };
	}
}
