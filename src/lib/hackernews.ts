// Hacker News stories that link to this site, fetched from the Algolia HN API at
// build time. Only stories that did reasonably well are kept, keyed by post slug.
export type HackerNewsStory = { points: number; comments: number; url: string };

const MIN_POINTS = 20;

let cached: Promise<Map<string, HackerNewsStory>> | undefined;

export function getHackerNewsStories(): Promise<Map<string, HackerNewsStory>> {
	cached ??= fetchStories();
	return cached;
}

async function fetchStories(): Promise<Map<string, HackerNewsStory>> {
	const stories = new Map<string, HackerNewsStory>();
	try {
		const res = await fetch(
			'https://hn.algolia.com/api/v1/search?query=steveharrison.dev&restrictSearchableAttributes=url&tags=story&hitsPerPage=100',
		);
		const { hits } = await res.json();
		for (const hit of hits) {
			if (!hit.url || (hit.points ?? 0) < MIN_POINTS) continue;
			const { hostname, pathname } = new URL(hit.url);
			if (!hostname.endsWith('steveharrison.dev')) continue;
			// Post ids are lowercased slugs, but submitted URLs keep the original casing.
			const slug = pathname.replace(/^\/|\/$/g, '').toLowerCase();
			const existing = stories.get(slug);
			// If a post was submitted more than once, keep its best run.
			if (!existing || hit.points > existing.points) {
				stories.set(slug, {
					points: hit.points,
					comments: hit.num_comments ?? 0,
					url: `https://news.ycombinator.com/item?id=${hit.objectID}`,
				});
			}
		}
	} catch (e) {
		console.warn('Failed to fetch Hacker News stories:', e);
	}
	return stories;
}
