// Portfolio data for the homepage: apps I've built, my career, and the technologies
// that tie them together. Each app, role and technology opens in a lightbox.

export type Media = {
	src: string;
	alt: string;
	video?: boolean;
	poster?: string;
	// Portrait landing-page shots are pinned to the top; wide strips are letterboxed.
	fit?: 'top' | 'contain';
	// Videos with a soundtrack get controls in the lightbox instead of autoplaying.
	audio?: boolean;
};

// A post on X or LinkedIn about the thing, with the engagement it got (snapshot, Oct 2026).
export type SocialPost = {
	platform: 'x' | 'linkedin';
	url: string;
	date: string;
	stats: string;
};

export type Project = {
	slug: string;
	// Kept in the data but left off the site.
	hidden?: boolean;
	// Adds a drop shadow under the icon, for icons drawn without one of their own.
	iconShadow?: boolean;
	title: string;
	years: string;
	appIcon: string;
	description: string;
	icon?: string;
	website?: string;
	links?: { label: string; href: string }[];
	tech?: string[];
	social?: SocialPost[];
	// The first item is the primary slide, ideally a video. With more than one,
	// the gallery becomes a slideshow with thumbnails.
	media: Media[];
};

export const projects: Project[] = [
	{
		slug: 'the-finances-app',
		title: 'Finances',
		years: '2024 – Present',
		appIcon: '/content/images/app-icons/the-finances-app.png',
		description: 'I built an app to view your spending on macOS, stored in an encrypted SQLite database. It auto-categorises common transactions by linking them to known merchants from a dataset I created (see [openenrichment.org](https://openenrichment.org)). Claude can then give you "total spend at Dymocks". You can also add receipts and Uber trip route details to transactions. It supports CSV, OFX, Up Bank API, and the Redbark API. I built it in Electron first, and I\'m now rewriting it as a native macOS app.',
		website: 'https://thefinances.app',
		tech: ['swift', 'electron', 'react', 'typescript'],
		media: [
			{ src: '/content/images/projects/finances-mac-app.mp4', poster: '/content/images/projects/finances-mac-app-poster.jpg', alt: 'A walkthrough of the native Mac app with demo data', video: true },
			{ src: '/content/images/projects/finances-overview.mp4', poster: '/content/images/projects/finances-overview-poster.jpg', alt: 'A tour of The Finances App', video: true },
			{ src: '/content/images/projects/finances-website.jpg', alt: 'The Finances App website, thefinances.app', fit: 'top' },
		],
	},
	{
		slug: 'openenrichment',
		title: 'Open Enrichment',
		years: '2026',
		appIcon: '/content/images/app-icons/openenrichment.svg',
		description: 'An open, human-reviewed dataset that maps raw bank statement text like "SQ *BRICKFIELDS CHIPP" to the real merchant, with regular expressions for matching. I built it for The Finances App so transactions can be enriched on your own device instead of being sent to an API. It covers 687 merchants across 12 regions.',
		icon: '/content/images/app-icons/openenrichment.svg',
		website: 'https://openenrichment.org',
		links: [{ label: 'View on GitHub', href: 'https://github.com/steveharrison/openenrichment' }],
		media: [
			{ src: '/content/images/projects/openenrichment-demo.mp4', poster: '/content/images/projects/openenrichment-demo-poster.jpg', alt: 'Typing bank statement lines into Open Enrichment and zooming in on the merchant each one matches: Capital Gatherings (Bookplate), Koko Black and Uber', video: true },
		],
	},
	{
		slug: 'photosbysize',
		title: 'Photos by Size',
		years: '2026',
		appIcon: '/content/images/app-icons/photosbysize.png',
		description: 'Your Photos library sorted by file size, biggest first. See what is taking the space, then download, file, or delete it in a couple of clicks.',
		icon: '/photosbysize/icon-180.png',
		website: '/photosbysize/',
		tech: ['swift'],
		media: [
			{ src: '/content/images/projects/photosbysize-demo.mp4', poster: '/content/images/projects/photosbysize-demo-poster.jpg', alt: 'Photos by Size demo', video: true },
		],
	},
	{
		slug: 'snake',
		iconShadow: true,
		title: 'Snake',
		years: '2011',
		appIcon: '/content/images/app-icons/snake.png',
		description: 'An iPhone Snake game I built in Objective-C in 2011, with my own artwork, a high-score table and in-app settings. In 2026, I got Claude to upgrade it to the latest iOS, reusing the original artwork.',
		tech: ['swift'],
		media: [
			{ src: '/content/images/projects/snake-gameplay.mp4', poster: '/content/images/projects/snake-gameplay-poster.jpg', alt: 'The snake steering around the board, eating food and growing longer', video: true, fit: 'contain' },
			{ src: '/content/images/projects/snake-2011.jpg', alt: 'The Snake menu, rebuilt from the original 2011 artwork', fit: 'contain' },
		],
	},
	{
		slug: 'comics',
		title: 'Comics',
		years: '2009',
		appIcon: '/content/images/app-icons/comics.png',
		description: 'I built a dashboard widget for Mac OS X 10.5 to show daily comic strips, after wanting a cleaner UI and more features from a similar widget called [SayCheese](https://say-cheese.en.softonic.com/mac). I created a "Comicule" plug-in architecture so users could easily add their own comic strips and RegExp rules. I built a calendar component from scratch, inspired by Apple\'s native calendar at the time. Strips that you hadn\'t read were marked blue in the calendar. I drew the icons and graphics myself.',
		tech: ['javascript'],
		media: [
			{ src: '/content/images/projects/comics-widget.jpg', alt: 'The Comics widget showing Calvin and Hobbes, with the calendar open' },
			{ src: '/content/images/projects/comics-illustration.jpg', alt: 'The comic I drew to introduce Comics', fit: 'contain' },
		],
	},
	{
		slug: 'dazzle',
		iconShadow: true,
		title: 'Dazzle',
		years: '2008',
		appIcon: '/content/images/app-icons/dazzle.png',
		description: 'I built a self-updating "check for updates" framework for Apple Dashboard widgets in high school, inspired by Sparkle for macOS apps. I used it in my Comics widget, and it was also used in a popular Australian weather widget.',
		website: 'http://sculptedcode.com/dazzle/',
		tech: ['javascript'],
		media: [
			{ src: '/content/images/projects/dazzle-scroll.mp4', poster: '/content/images/projects/dazzle-scroll-poster.jpg', alt: 'Scrolling through the Dazzle website', video: true },
		],
	},
];

// The projects shown on the site.
export const visibleProjects = projects.filter((project) => !project.hidden);

export type Role = {
	slug: string;
	company: string;
	// Shown in the career list, e.g. "2024 – now".
	years: string;
	// When the role started, for ordering the homepage timeline. Months come from the
	// dated folders in Documents/Career; where there isn't one, it's January.
	start: string;
	// The full terms from my resume, e.g. "Contract: 2015 – 2016 • Perm 2016 – 2020".
	terms: string;
	// The role's title, where my resume gives one.
	title?: string;
	// A logo image, or initials for a plain tile when there's no usable logo.
	logo?: string;
	initials?: string;
	// Inline Markdown, e.g. `code` and [links](https://…).
	summary?: string;
	highlights?: string[];
	tech?: string[];
	media?: Media[];
	// Shown in full on a card beneath the current role, instead of as a row.
	featured?: boolean;
	// Shown in place on its timeline card instead of opening in the lightbox, with the
	// screenshots as small images that each zoom open: a masonry of tiny thumbnails, or
	// a row of a few side by side.
	inline?: 'masonry' | 'row';
};

// From my resume, newest first.
export const career: Role[] = [
	{
		slug: 'qantas-2024',
		inline: 'row',
		start: '2024-09-24',
		company: 'Qantas',
		years: '2024 – now',
		terms: 'Contract: 2024 – Present',
		logo: '/content/images/logos/qantas.png',
		summary: 'Helped build a new Next.js UI for the Qantas.com booking engine that calls Amadeus APIs (previously, this was a white-label UI provided by Amadeus). In 2025, we released a new Cancel Booking UI, and in 2026, we launched a new Book Flights UI, starting with the Sydney > Tamworth route. We also created a new PandaCSS component library that imports tokens from Supernova. Tech Stack: Next.js App Router, React, TypeScript, CSS Modules, Adobe Analytics, Optimizely, DataDog, Tailwind, Zustand, Cypress, and Playwright.',
		highlights: [
			"Experimented with WebMCP.",
			"Fixed a jumpy reveal animation on the Flight Search results page by reducing React re-renders (passing in less props that change), adjusting the easing, and using `grid-template-rows: 0fr -> 1fr` so no JS is needed to measure the height and the layout doesn't get re-calculated.",
			'Worked with design system team to add subtle animations to make buttons and selects feel less static; added cross-fade transitions to make toggling views smoother. Ensured the user can disable all animations for accessibility with `prefers-reduced-motion`.',
			"Added accessibility improvements: made sure select menus disappear when using swipe gestures in VoiceOver for iOS, fixed focus jumping issues (removed a Portal, ensured focused elements don't get unmounted during loading transitions, made sure hidden content is actually removed from the accessibility tree), made mobile toolbar have larger tap targets, styled focus rings to be on brand and only visible for keyboard users using `focus-visible`, and added `role=\"status\"` region to the header so the new cart balance gets read when adding an item to cart.",
			'Added local visual regression tests using Playwright.',
			'Built a dev UI to view mock bookings and a CLI tool to generate them so we can test the app locally and in Playwright easily.',
			'Integrated and themed a non-React Amadeus Outpayce SDK for taking payments on Change Flights.',
			'Added localisation.',
		],
		tech: ['nextdotjs', 'react', 'typescript', 'tailwindcss', 'cypress', 'playwright'],
		media: [
			{ src: '/content/images/career/qantas-book-flights-desktop.mp4', poster: '/content/images/career/qantas-book-flights-desktop-poster.jpg', alt: 'Choosing flights and fares, then entering passenger details, in Book Flights on desktop', video: true },
			{ src: '/content/images/career/qantas-book-flights-mobile.mp4', poster: '/content/images/career/qantas-book-flights-mobile-poster.jpg', alt: 'Booking a return flight from Sydney to Tamworth in Book Flights on iPhone', video: true, fit: 'contain' },
			{ src: '/content/images/career/qantas-cancel-booking.jpg', alt: 'Choosing a refund or flight credit in Cancel Booking' },
		],
	},
	{
		slug: 'nsw-dcs',
		inline: 'row',
		featured: true,
		start: '2022-08-22',
		company: 'NSW Department of Customer Service',
		years: '2022 – 2024',
		terms: 'Contract: 2022 – 2024',
		logo: '/content/images/logos/nsw-government.png',
		summary: 'Added new features to hazardwatch.gov.au, a public-facing tool to display SES flood/tsunami warnings. Also worked across Front End, Back End, and Infrastructure for an internal tool to publish the warnings. Tech stack: React, TypeScript, Mapbox, Google Address API, Next.js (Pages Router), Prisma, PostgreSQL, DynamoDB, Node.js, postgresql.js, Ant Design, React Material UI, Jest, Playwright.',
		highlights: [
			'Built user accounts for HazardWatch: custom React UI components using AWS Cognito SDK.',
			'Built a notification history UI using DynamoDB.',
			'Built an embeddable HazardWatch widget that can be embedded on news websites like ABC.',
			'Added a Share button that uses short URLs and the native Web Share API; worked with design to provide custom link preview images.',
			'Rewrote the social media post templates for every flood and tsunami warning in Handlebars, with snapshot tests for each.',
			'Moved the Playwright end-to-end tests into each project, ran them inside Docker so the visual diffs matched between local and CI, and scheduled them in GitHub Actions.',

		],
		tech: ['react', 'typescript', 'nextdotjs', 'mapbox', 'prisma', 'postgresql', 'amazondynamodb', 'nodedotjs', 'antdesign', 'mui', 'jest', 'playwright', 'docker'],
		media: [
			{ src: '/content/images/career/hazardwatch-web.mp4', poster: '/content/images/career/hazardwatch-web-poster.jpg', alt: 'Exploring flood warnings on the HazardWatch map', video: true },
			{ src: '/content/images/career/hazardwatch-mobile.mp4', poster: '/content/images/career/hazardwatch-mobile-poster.jpg', alt: 'Opening a flood warning on HazardWatch on iPhone', video: true, fit: 'contain' },
		],
	},
	{
		slug: 'tulip',
		start: '2022-03-01',
		company: 'Tulip',
		years: '2022',
		terms: 'Contract: 2022',
		logo: '/content/images/logos/tulip.png',
		summary: 'Worked on the Front End for a Solana-based cryptocurrency yield aggregator. Built stop-loss and take-profit triggers for leveraged farming positions, and an Overview dashboard that brings together a user\'s deposits across Vaults, Leveraged Farming, Lending and Staking. Also redesigned the app\'s navigation, with a new sidebar and a mobile tab bar, and shipped Close and Repay Debt, Instant Unstaking, APY history charts and the Exodus wallet integration. The tech stack included MobX, React, Sass, MUI, Reactstrap, Recharts, Anchor, and @solana/web3.',
		tech: ['react', 'mobx', 'sass', 'mui', 'bootstrap', 'solana'],
		inline: 'masonry',
		media: [
			{ src: '/content/images/career/tulip-overview-distribution.jpg', alt: 'A pie chart of deposits across Leverage, Lending, Vaults and Staking on the Tulip Overview page' },
			{ src: '/content/images/career/tulip-auto-vaults.jpg', alt: 'Auto Vaults with each vault’s TVL and APY, and the default explorer setting' },
			{ src: '/content/images/career/tulip-unstake.jpg', alt: 'Unstaking TULIP, with the option to unstake instantly for a 10% fee' },
			{ src: '/content/images/career/tulip-farm.jpg', alt: 'Opening a leveraged SOL-USDC farm with stop-loss limits' },
			{ src: '/content/images/career/tulip-apy-history.jpg', alt: 'A Recharts chart of USDC lending APY history' },
			{ src: '/content/images/career/tulip-mobile-menu-framed.jpg', alt: 'The Tulip mobile navigation on tulip.garden' },
			{ src: '/content/images/career/tulip-mobile-settings.jpg', alt: 'Choosing a default explorer in the Settings section of the Tulip mobile menu' },
		],
	},
	{
		slug: 'streamotion',
		start: '2021-03-01',
		company: 'Streamotion',
		years: '2021',
		terms: 'Contract: 2021',
		logo: '/content/images/logos/streamotion.jpg',
		summary: 'Updated the Manage Account UI shared across Binge, Kayo Sports, and Flash News streaming apps. Also improved test automation and addressed tech debt. The tech stack included React, Bacon.js (similar to Rx.js), Parcel, React Storybook, and Styled Components.',
		tech: ['react', 'storybook', 'styledcomponents'],
	},
	{
		slug: 'qbe',
		start: '2020-09-01',
		company: 'QBE',
		years: '2020 – 2021',
		terms: 'Contract: 2020 – 2021',
		logo: '/content/images/logos/qbe.png',
		summary: 'Worked on a redesign of Home and Car insurance.',
		tech: ['typescript', 'styledcomponents', 'mui'],
	},
	{
		slug: 'qantas-2015',
		inline: 'row',
		featured: true,
		start: '2015-01-01',
		company: 'Qantas',
		years: '2015 – 2020',
		terms: 'Contract: 2015 – 2016 • Perm 2016 – 2020',
		title: 'Lead Front End Developer',
		logo: '/content/images/logos/qantas.png',
		summary: 'I was a lead Front End Developer on several cross-functional teams improving the experience of different parts of qantas.com. I also organised guilds, mentored developers, and worked on tooling to simplify development. The tech stack included React, Preact, Sass, CSS Modules, Emotion, Cypress, Jest, ESLint, Babel, Webpack, and AEM.',
		highlights: [
			'Improved the load time of the qantas.com homepage by 2s by removing unnecessary code and adjusting the critical path.',
			'Rebuilt a mega menu for QBR that can be hovered or navigated by keyboard at the same time. (Hover + keyboard nav interactions all update one central React state.)',
			'Riffed with a designer to create a filtering and searching UI for the QBR Earn Points partners page.',
			'Built an accessible and custom styled select menu component from scratch.',
			'Replatformed the Qantas Business Rewards website to AEM with React/Preact. Implemented automated testing with Cypress, including visual regression testing.',
			'Replatformed the Multi-city flights booking page.',
			'Updated disclaimers on qantas.com to meet WCAG 2.0 accessibility guidelines.',
			'Updated the logo and fonts across all AEM pages for the 2016 rebranding.',
			'Replatformed the Manage Booking section on the qantas.com homepage.',
			'Replatformed Flight Deals pages.',
			'Built a standalone version of the qantas.com header and footer so Qantas sites outside AEM could use them.',
			'Built shared React form components for qantas.com widgets: inputs, form validation, a loading indicator and translation helpers.',
			'Built accessible AEM components, including tabs that can be linked to, a compactor, in-page anchor links, and focus outlines shown only to keyboard users.',
			'Improved the widget boilerplate and CLI that teams used to start new qantas.com widgets, adding translations, test coverage reporting in Bamboo and Node version checks.',
		],
		tech: ['react', 'preact', 'sass', 'cypress', 'jest', 'eslint', 'babel', 'webpack'],
		media: [
			{ src: '/content/images/career/qantas-homepage-performance.mp4', poster: '/content/images/career/qantas-homepage-performance-poster.jpg', alt: 'qantas.com homepage load, before and after', video: true },
			{ src: '/content/images/career/qantas-business-rewards.mp4', poster: '/content/images/career/qantas-business-rewards-poster.jpg', alt: 'The Qantas Business Rewards website', video: true },
		],
	},
	{
		slug: 'traffik',
		start: '2015-01-01',
		company: 'TRAFFIK',
		years: '2015',
		terms: 'Contract: 2015',
		initials: 'T',
		inline: 'row',
		summary: 'Built websites for Arnott\'s "Twisted Faves" and Dyson + Airbnb "Hidden House" promotions.',
		media: [
			{ src: '/content/images/career/traffik-hidden-house.jpg', alt: 'The Hidden House, a Dyson + Airbnb promotion' },
			{ src: '/content/images/career/traffik-twisted-faves.jpg', alt: 'Arnott\'s Twisted Faves' },
		],
	},
	{
		slug: 'nearmap',
		start: '2014-01-01',
		company: 'nearmap',
		years: '2014 – 2015',
		terms: 'Contract: 2014 – 2015',
		logo: '/content/images/logos/nearmap.png',
		highlights: [
			'Added new Site Planner and Layers Manager tools to MapBrowser, the core web app for viewing aerial imagery.',
			'Refactored the legacy codebase to a component-based architecture powered by AngularJS 1.3/ES6/Angular UI/Bootstrap.',
		],
		tech: ['angular', 'bootstrap'],
	},
	{
		slug: 'wlpc',
		inline: 'row',
		start: '2013-01-01',
		company: 'White Label Personal Clouds',
		years: '2013 – 2014',
		terms: 'Contract: 2013 – 2014',
		initials: 'W',
		highlights: [
			'Created a JavaScript SDK.',
			'Developed a dashboard in AngularJS 1.3 that was shown at CeBIT 2014: a consumer-facing privacy dashboard showing customers the contact details and information a company knows about them.',
			'Designed and built the first WLPC company website, and the landing page for the WelcomerID online verification product.',
		],
		tech: ['angular'],
		media: [
			{ src: '/content/images/behance/wlpc-dashboard-1.jpg', alt: 'The WLPC My Dashboard prototype' },
		],
	},
	{
		slug: 'freelancing',
		inline: 'row',
		start: '2014-05-01',
		company: 'The Winterlake House',
		years: '2014',
		terms: 'Freelance: 2014',
		logo: '/content/images/logos/winterlake-house.jpg',
		summary: 'Worked with a [Canberra-based designer](https://www.linkedin.com/in/cspo/) to build a marketing website to sell a lakeside house in Warners Bay, NSW.',
		media: [
			{ src: '/content/images/career/winterlake-house-website.jpg', alt: 'The Winterlake House website' },
		],
	},
	{
		slug: 'anu',
		start: '2012-01-01',
		company: 'Australian National University',
		years: '2012',
		terms: '2012',
		title: 'Bachelor of Information Technology (not completed)',
		logo: '/content/images/logos/anu.png',
	},
];

// Technology logos are Simple Icons (CC0), coloured in each brand's colour; Playwright's is its own.
export const tech: Record<string, { name: string; icon: string }> = {
	typescript: { name: 'TypeScript', icon: '/content/images/tech/typescript.svg' },
	javascript: { name: 'JavaScript', icon: '/content/images/tech/javascript.svg' },
	react: { name: 'React', icon: '/content/images/tech/react.svg' },
	nextdotjs: { name: 'Next.js', icon: '/content/images/tech/nextdotjs.svg' },
	preact: { name: 'Preact', icon: '/content/images/tech/preact.svg' },
	tailwindcss: { name: 'Tailwind CSS', icon: '/content/images/tech/tailwindcss.svg' },
	sass: { name: 'Sass', icon: '/content/images/tech/sass.svg' },
	styledcomponents: { name: 'styled-components', icon: '/content/images/tech/styledcomponents.svg' },
	mui: { name: 'MUI', icon: '/content/images/tech/mui.svg' },
	antdesign: { name: 'Ant Design', icon: '/content/images/tech/antdesign.svg' },
	mobx: { name: 'MobX', icon: '/content/images/tech/mobx.svg' },
	playwright: { name: 'Playwright', icon: '/content/images/tech/playwright.svg' },
	cypress: { name: 'Cypress', icon: '/content/images/tech/cypress.svg' },
	jest: { name: 'Jest', icon: '/content/images/tech/jest.svg' },
	storybook: { name: 'Storybook', icon: '/content/images/tech/storybook.svg' },
	webpack: { name: 'Webpack', icon: '/content/images/tech/webpack.svg' },
	babel: { name: 'Babel', icon: '/content/images/tech/babel.svg' },
	eslint: { name: 'ESLint', icon: '/content/images/tech/eslint.svg' },
	nodedotjs: { name: 'Node.js', icon: '/content/images/tech/nodedotjs.svg' },
	postgresql: { name: 'PostgreSQL', icon: '/content/images/tech/postgresql.svg' },
	prisma: { name: 'Prisma', icon: '/content/images/tech/prisma.svg' },
	amazondynamodb: { name: 'DynamoDB', icon: '/content/images/tech/amazondynamodb.svg' },
	docker: { name: 'Docker', icon: '/content/images/tech/docker.svg' },
	mapbox: { name: 'Mapbox', icon: '/content/images/tech/mapbox.svg' },
	solana: { name: 'Solana', icon: '/content/images/tech/solana.svg' },
	angular: { name: 'AngularJS', icon: '/content/images/tech/angular.svg' },
	bootstrap: { name: 'Bootstrap', icon: '/content/images/tech/bootstrap.svg' },
	electron: { name: 'Electron', icon: '/content/images/tech/electron.svg' },
	swift: { name: 'Swift', icon: '/content/images/tech/swift.svg' },
};

// Design work from my Behance portfolio (behance.net/steveharrison), oldest last.
export type Design = {
	slug: string;
	title: string;
	year: string;
	description: string;
	behance: string;
	images: { src: string; alt: string }[];
	// 'contain' shows the whole cover image (e.g. an icon) instead of filling the card.
	thumbFit?: 'contain';
	hidden?: boolean;
};

export const designs: Design[] = [
	{
		slug: 'personal-website-2014',
		title: 'Personal website',
		year: '2014 – 2015',
		description: 'My personal website design for 2014 and 2015. I went for a modern, edgy, flat design.',
		behance: 'https://www.behance.net/gallery/29367885/Personal-Website-20142015',
		images: [
			{ src: '/content/images/behance/personal-website-2014-1.jpg', alt: 'My 2014 personal website on iPhone' },
			{ src: '/content/images/behance/personal-website-2014-2.jpg', alt: 'My 2014 personal website' },
		],
	},
	{
		slug: 'pot-belly',
		title: 'The Pot Belly Bar & Bistro',
		year: '2015',
		description: 'A menu and logo for The Pot Belly Bar & Bistro in Canberra.',
		behance: 'https://www.behance.net/gallery/29306701/Menu-and-logo-for-The-Pot-Belly-Bar-Bistro',
		images: [
			{ src: '/content/images/behance/pot-belly-1.jpg', alt: 'The Pot Belly menu' },
			{ src: '/content/images/behance/pot-belly-2.jpg', alt: 'The Pot Belly logo' },
			{ src: '/content/images/behance/pot-belly-3.jpg', alt: 'The Pot Belly menu, both sides' },
		],
	},
	{
		slug: 'kremlin-bar',
		title: 'Kremlin Bar poster',
		year: '2013',
		description: "A poster for Canberra's Kremlin Bar to launch its 2013 winter cocktails and tapas menu.",
		behance: 'https://www.behance.net/gallery/16752365/Kremlin-Bar-Winter-Menu-Launch-Poster',
		images: [{ src: '/content/images/behance/kremlin-poster-1.jpg', alt: 'The Kremlin Bar winter menu launch poster' }],
	},
];

export const visibleDesigns = designs.filter((design) => !design.hidden);
