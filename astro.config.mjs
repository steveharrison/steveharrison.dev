// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

// Code blocks, shadcn-style: a hairline border with 12px corners and no shadow, a muted
// header bar with the file name, and GitHub's light theme and diff colours on white.
// The file icon and copy button are finished off in global.css.
const codeStyle = {
	themes: ['github-light'],
	styleOverrides: {
		borderRadius: '12px',
		borderColor: 'rgba(31, 35, 40, 0.12)',
		codeBackground: '#ffffff',
		codeFontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, monospace",
		codeFontSize: '0.82rem',
		codeLineHeight: '1.7',
		codePaddingBlock: '1rem',
		codePaddingInline: '1.25rem',
		uiFontFamily: "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, monospace",
		uiFontSize: '0.78rem',
		uiPaddingBlock: '0.6rem',
		uiPaddingInline: '0.9rem',
		scrollbarThumbColor: 'rgba(31, 35, 40, 0.15)',
		scrollbarThumbHoverColor: 'rgba(31, 35, 40, 0.3)',
		frames: {
			// One full-width header bar rather than an editor tab.
			editorTabBarBackground: '#fafafa',
			editorTabBarBorderColor: 'rgba(31, 35, 40, 0.12)',
			editorTabBarBorderBottomColor: 'rgba(31, 35, 40, 0.1)',
			editorActiveTabBackground: 'transparent',
			editorActiveTabForeground: '#59636e',
			editorActiveTabBorderColor: 'transparent',
			editorActiveTabIndicatorTopColor: 'transparent',
			editorActiveTabIndicatorBottomColor: 'transparent',
			editorActiveTabIndicatorHeight: '0px',
			editorTabsMarginBlockStart: '0',
			editorTabsMarginInlineStart: '0',
			editorTabBorderRadius: '0',
			terminalTitlebarBackground: '#fafafa',
			terminalTitlebarBorderBottomColor: 'rgba(31, 35, 40, 0.1)',
			terminalBackground: '#ffffff',
			frameBoxShadowCssValue: 'none',
			// A ghost icon button: no border, a faint fill on hover.
			inlineButtonBackground: '#1f2328',
			inlineButtonBackgroundIdleOpacity: '0',
			inlineButtonBackgroundHoverOrFocusOpacity: '0.06',
			inlineButtonBackgroundActiveOpacity: '0.1',
			inlineButtonForeground: '#59636e',
			inlineButtonBorder: 'transparent',
			inlineButtonBorderOpacity: '0',
			tooltipSuccessBackground: '#1f2328',
			tooltipSuccessForeground: '#ffffff',
		},
		// GitHub's diff colours: green and red rows, with darker +/− markers.
		textMarkers: {
			insBackground: '#dafbe1',
			insBorderColor: 'transparent',
			insDiffIndicatorColor: '#1a7f37',
			delBackground: '#ffebe9',
			delBorderColor: 'transparent',
			delDiffIndicatorColor: '#cf222e',
			lineMarkerAccentWidth: '0px',
		},
	},
};

// https://astro.build/config
export default defineConfig({
	site: 'https://steveharrison.dev',
	integrations: [expressiveCode(codeStyle), mdx(), sitemap()],
});
