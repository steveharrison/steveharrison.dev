import type { CollectionEntry } from 'astro:content';
import articleViews from '../data/article-views.json';

// Page views per post slug, exported by hand from Google Analytics (see the
// "_source" note in the JSON). Posts missing from it count as zero.
const views = articleViews as Record<string, number | string>;

export function viewsFor(id: string): number {
	const count = views[id];
	return typeof count === 'number' ? count : 0;
}

// Most viewed first; ties (including unviewed posts) fall back to newest first.
export function byPopularity(a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>): number {
	return viewsFor(b.id) - viewsFor(a.id) || b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}
