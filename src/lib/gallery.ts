// A project gallery is a slideshow: images stay up for IMAGE_MS, videos play through,
// then it moves to the next slide. It only runs while the gallery is on screen, and
// never advances on its own if the visitor prefers reduced motion. The .pause button
// stops it where it is (the current video and image timer both freeze) until pressed again.
const IMAGE_MS = 2000;

export function initGallery(gallery: HTMLElement): void {
	const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
	const slides = [...gallery.querySelectorAll<HTMLElement>('.slide')];
	const thumbs = [...gallery.querySelectorAll<HTMLButtonElement>('.thumb')];
	const pauseButton = gallery.querySelector<HTMLButtonElement>('.pause');
	let index = 0;
	let shownAt = 0;
	let visible = false;
	let paused = false;
	let pausedAt = 0;
	let frame = 0;

	const videoAt = (i: number) => slides[i].querySelector('video');

	function show(next: number) {
		videoAt(index)?.pause();
		slides[index].classList.remove('is-active');
		thumbs[index]?.classList.remove('is-active');
		thumbs[index]?.removeAttribute('aria-current');
		thumbs[index]?.style.removeProperty('--progress');

		index = next;
		slides[index].classList.add('is-active');
		thumbs[index]?.classList.add('is-active');
		thumbs[index]?.setAttribute('aria-current', 'true');
		shownAt = performance.now();
		// While paused, a new slide's timer starts from zero when play resumes.
		if (paused) pausedAt = shownAt;

		const video = videoAt(index);
		if (video) {
			video.currentTime = 0;
			if (visible && !paused && !reduceMotion) video.play().catch(() => {});
		}
	}

	function start() {
		videoAt(index)?.play().catch(() => {});
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(tick);
	}

	function stop() {
		videoAt(index)?.pause();
		cancelAnimationFrame(frame);
	}

	function setPaused(next: boolean) {
		paused = next;
		const now = performance.now();
		if (paused) {
			pausedAt = now;
			stop();
		} else {
			// Pick the image timer up where it was frozen.
			shownAt += now - pausedAt;
			if (visible) start();
		}
		gallery.toggleAttribute('data-paused', paused);
		if (pauseButton) {
			pauseButton.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
			pauseButton.title = paused ? 'Play' : 'Pause';
		}
	}

	const advance = () => show((index + 1) % slides.length);

	function tick(now: number) {
		const video = videoAt(index);
		let progress: number;
		if (video) {
			progress = video.duration ? video.currentTime / video.duration : 0;
		} else {
			progress = (now - shownAt) / IMAGE_MS;
			if (progress >= 1 && slides.length > 1) {
				advance();
				progress = 0;
			}
		}
		thumbs[index]?.style.setProperty('--progress', String(Math.min(progress, 1)));
		frame = requestAnimationFrame(tick);
	}

	for (const slide of slides) {
		slide.querySelector('video')?.addEventListener('ended', () => {
			if (slides.length > 1) advance();
		});
	}

	thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => show(i)));
	pauseButton?.addEventListener('click', () => setPaused(!paused));

	if (reduceMotion) {
		// No autoplay: give videos their controls so they can still be watched.
		gallery.querySelectorAll<HTMLVideoElement>('.slide video').forEach((video) => (video.controls = true));
		pauseButton?.remove();
		return;
	}

	new IntersectionObserver(([entry]) => {
		visible = entry.isIntersecting;
		if (paused) return;
		if (visible) {
			// Restart the current image's timer rather than skipping it straight away.
			shownAt = performance.now();
			start();
		} else {
			stop();
		}
	}, { threshold: 0.5 }).observe(gallery);
}
