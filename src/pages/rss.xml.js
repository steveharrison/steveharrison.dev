import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { loadRenderers } from 'astro:container';
import { getContainerRenderer as getMDXRenderer } from '@astrojs/mdx';
import sanitizeHtml from 'sanitize-html';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	const renderers = await loadRenderers([getMDXRenderer()]);
	const container = await AstroContainer.create({ renderers });

	const items = await Promise.all(
		posts.map(async (post) => {
			const { Content } = await render(post);
			const html = await container.renderToString(Content);
			const content = sanitizeHtml(html, {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'figure', 'figcaption']),
				allowedAttributes: {
					...sanitizeHtml.defaults.allowedAttributes,
					'*': ['class', 'id', 'style'],
					img: ['src', 'alt', 'title', 'width', 'height', 'loading', 'srcset', 'sizes'],
					a: ['href', 'name', 'target', 'rel', 'title'],
				},
			});

			return {
				...post.data,
				link: `/${post.id}/`,
				content,
			};
		}),
	);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
