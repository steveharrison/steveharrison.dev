#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { parse } from 'node-html-parser';

// Read Ghost export JSON
const ghostExport = JSON.parse(
  fs.readFileSync('/Users/steveharrison/Downloads/steve-writes.ghost.2025-12-03-00-03-25.json', 'utf8')
);

// Configure parser to handle code blocks properly
const parserOptions = {
  blockTextElements: {
    script: true,
    noscript: true,
    style: true,
  }
};

const posts = ghostExport.db[0].data.posts;
const publishedPosts = posts.filter(post => post.status === 'published' && post.type === 'post');

console.log(`Found ${publishedPosts.length} published posts`);

// Track if we need to import BookmarkCard
let needsBookmarkCard = false;

// Convert HTML to MDX-friendly markdown
function htmlToMdx(html) {
  if (!html) return '';

  const root = parse(html, parserOptions);
  let currentPostNeedsBookmarkCard = false;

  // Process all elements
  const processNode = (node) => {
    if (node.nodeType === 3) { // Text node
      return node.text;
    }

    const tagName = node.rawTagName;

    // Handle different HTML tags
    switch (tagName) {
      case 'p':
        return `${node.childNodes.map(processNode).join('')}\n\n`;

      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        const level = tagName[1];
        return `${'#'.repeat(level)} ${node.childNodes.map(processNode).join('')}\n\n`;

      case 'a':
        const href = node.getAttribute('href');
        const text = node.childNodes.map(processNode).join('');
        return `[${text}](${href})`;

      case 'code':
        // Check if this is inside a <pre> tag (code block)
        if (node.parentNode && node.parentNode.rawTagName === 'pre') {
          return node.childNodes.map(processNode).join('');
        }
        return `\`${node.childNodes.map(processNode).join('')}\``;

      case 'pre':
        // Get language from code child if present
        let lang = '';
        const codeElem = node.querySelector('code');
        if (codeElem) {
          const className = codeElem.getAttribute('class') || '';
          const langMatch = className.match(/language-(\w+)/);
          lang = langMatch ? langMatch[1] : '';
        }
        // Use structuredText to get clean code content
        const codeContent = node.structuredText;
        return `\`\`\`${lang}\n${codeContent}\n\`\`\`\n\n`;

      case 'strong':
      case 'b':
        return `**${node.childNodes.map(processNode).join('').trim()}**`;

      case 'em':
      case 'i':
        return `*${node.childNodes.map(processNode).join('').trim()}*`;

      case 'ul':
        const listItems = node.childNodes.filter(n => n.rawTagName === 'li' || n.rawTagName === 'ul');

        // Check if list items start with numbers (manually numbered list in Ghost)
        const firstItem = listItems.find(n => n.rawTagName === 'li');
        const firstText = firstItem ? firstItem.childNodes.map(processNode).join('').trim() : '';
        const isNumberedList = /^\d+\.\s/.test(firstText);

        return listItems
          .map(item => {
            if (item.rawTagName === 'ul') {
              // Handle nested ul (just process its items directly)
              return processNode(item).trim();
            }
            const text = item.childNodes.map(processNode).join('').trim();
            // If it's already numbered or we're preserving the format, use it as-is
            if (isNumberedList) {
              return text;
            }
            return `- ${text}`;
          })
          .join('\n') + '\n\n';

      case 'ol':
        return node.childNodes
          .filter(n => n.rawTagName === 'li')
          .map((li, i) => `${i + 1}. ${li.childNodes.map(processNode).join('').trim()}`)
          .join('\n') + '\n\n';

      case 'li':
        return node.childNodes.map(processNode).join('');

      case 'br':
        return '\n';

      case 'hr':
        return '---\n\n';

      case 'blockquote':
        // Check if this is a Twitter embed
        if (node.classList.contains('twitter-tweet')) {
          // Preserve Twitter embeds as raw HTML
          return `\n${node.toString()}\n\n`;
        }
        // Regular blockquote
        return node.childNodes
          .map(processNode)
          .join('')
          .split('\n')
          .map(line => line ? `> ${line}` : '>')
          .join('\n') + '\n\n';

      case 'script':
        // Check if this is a Twitter widget script
        const src = node.getAttribute('src');
        if (src && src.includes('platform.twitter.com/widgets.js')) {
          return `<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n\n`;
        }
        // Skip other scripts
        return '';

      case 'iframe':
        // Handle YouTube embeds
        const iframeSrc = node.getAttribute('src');
        if (iframeSrc && (iframeSrc.includes('youtube.com') || iframeSrc.includes('youtu.be'))) {
          return `\n<iframe width="100%" height="413" src="${iframeSrc}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="${node.getAttribute('title') || 'YouTube video'}"></iframe>\n\n`;
        }
        // Handle Twitter/X embeds
        if (iframeSrc && (iframeSrc.includes('twitter.com') || iframeSrc.includes('x.com'))) {
          return `\n<iframe src="${iframeSrc}" width="100%" height="500" frameborder="0"></iframe>\n\n`;
        }
        // Handle other iframes
        return `\n${node.toString()}\n\n`;

      case 'img':
        const imgSrc = node.getAttribute('src');
        const alt = node.getAttribute('alt') || '';
        // Skip Ghost placeholder images
        if (imgSrc && (imgSrc.includes('static.ghost.org') && imgSrc.includes('link-icon'))) {
          return '';
        }
        // Replace __GHOST_URL__ with actual site URL
        let finalSrc = imgSrc;
        if (imgSrc && imgSrc.includes('__GHOST_URL__')) {
          finalSrc = imgSrc.replace('__GHOST_URL__', 'https://www.steveharrison.dev');
        }
        return `![${alt}](${finalSrc})\n\n`;

      case 'figure':
        // Handle Ghost bookmark cards
        if (node.classList.contains('kg-bookmark-card')) {
          const link = node.querySelector('a.kg-bookmark-container');
          if (link) {
            const url = link.getAttribute('href');
            const titleElem = node.querySelector('.kg-bookmark-title');
            const descElem = node.querySelector('.kg-bookmark-description');
            const thumbElem = node.querySelector('.kg-bookmark-thumbnail img');
            const iconElem = node.querySelector('.kg-bookmark-icon');
            const publisherElem = node.querySelector('.kg-bookmark-publisher, .kg-bookmark-author');

            const title = titleElem ? titleElem.text.trim() : '';
            const description = descElem ? descElem.text.trim() : '';
            let thumbnail = thumbElem ? thumbElem.getAttribute('src') : '';
            let icon = iconElem ? iconElem.getAttribute('src') : '';
            const publisher = publisherElem ? publisherElem.text.trim() : '';

            // Replace __GHOST_URL__ in thumbnail and icon
            if (thumbnail && thumbnail.includes('__GHOST_URL__')) {
              thumbnail = thumbnail.replace('__GHOST_URL__', 'https://www.steveharrison.dev');
            }
            if (icon && icon.includes('__GHOST_URL__')) {
              icon = icon.replace('__GHOST_URL__', 'https://www.steveharrison.dev');
            }

            // Skip if it's a placeholder icon
            const cleanIcon = (icon && icon.includes('static.ghost.org') && icon.includes('link-icon')) ? '' : icon;

            currentPostNeedsBookmarkCard = true;

            // Build the props object
            const props = {
              url: url || '',
              title: title.replace(/"/g, '&quot;'),
              ...(description && { description: description.replace(/"/g, '&quot;') }),
              ...(thumbnail && { thumbnail }),
              ...(cleanIcon && { icon: cleanIcon }),
              ...(publisher && { publisher: publisher.replace(/"/g, '&quot;') })
            };

            const propsStr = Object.entries(props)
              .map(([key, value]) => {
                if (typeof value === 'string') {
                  return `${key}="${value}"`;
                }
                return `${key}={${value}}`;
              })
              .join('\n  ');

            return `\n<BookmarkCard\n  ${propsStr}\n/>\n\n`;
          }
        }

        // Handle Ghost embed cards
        if (node.classList.contains('kg-embed-card') || node.classList.contains('kg-card')) {
          // Check for Twitter embeds
          const twitterBlockquote = node.querySelector('blockquote.twitter-tweet');
          if (twitterBlockquote) {
            // Return the entire figure as HTML to preserve Twitter embed
            const scriptTag = node.querySelector('script[src*="twitter.com"]');
            let embedHtml = twitterBlockquote.toString();
            if (scriptTag) {
              embedHtml += '\n' + scriptTag.toString();
            }
            return `\n${embedHtml}\n\n`;
          }

          const iframe = node.querySelector('iframe');
          if (iframe) {
            return processNode(iframe);
          }
          const img = node.querySelector('img');
          if (img) {
            return processNode(img);
          }
        }
        return node.childNodes.map(processNode).join('');

      default:
        // For unknown tags, process children
        if (node.childNodes) {
          return node.childNodes.map(processNode).join('');
        }
        return '';
    }
  };

  let mdx = root.childNodes.map(processNode).join('');

  // Clean up excessive newlines
  mdx = mdx.replace(/\n{3,}/g, '\n\n');

  return { mdx: mdx.trim(), needsImport: currentPostNeedsBookmarkCard };
}

// Format date for frontmatter
function formatDate(dateString) {
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')} ${date.getFullYear()}`;
}

// Create MDX files
publishedPosts.forEach(post => {
  const frontmatter = {
    title: post.title,
    description: post.custom_excerpt || post.plaintext?.substring(0, 155) || '',
    pubDate: formatDate(post.published_at),
  };

  if (post.feature_image) {
    frontmatter.heroImage = post.feature_image;
  }

  const frontmatterStr = Object.entries(frontmatter)
    .map(([key, value]) => `${key}: '${value.replace(/'/g, "''")}'`)
    .join('\n');

  const { mdx: mdxContent, needsImport } = htmlToMdx(post.html);

  // Add imports at the top if needed
  const imports = needsImport ? `import BookmarkCard from '../../components/BookmarkCard.astro';\n\n` : '';

  const fullContent = `---
${frontmatterStr}
---

${imports}${mdxContent}
`;

  const outputPath = path.join(
    '/Users/steveharrison/Dev/steveharrison.dev/src/content/blog',
    `${post.slug}.mdx`
  );

  fs.writeFileSync(outputPath, fullContent, 'utf8');
  console.log(`✓ Created ${post.slug}.mdx`);
});

console.log(`\n✓ Successfully created ${publishedPosts.length} MDX files!`);
