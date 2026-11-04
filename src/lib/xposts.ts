import xPosts from '../data/x-posts.json';

// X (Twitter) posts that shared a blog post, keyed by post slug. X has no free API
// to fetch these at build time, so the counts are a hand-updated snapshot.
export type XPost = { url: string; views: number; likes: number; reposts: number; replies: number };

export function xPostFor(id: string): XPost | undefined {
	const post = (xPosts as Record<string, XPost | string>)[id];
	return typeof post === 'object' ? post : undefined;
}
