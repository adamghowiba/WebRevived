/**
 * Destory a group of timelines, and release it to grabage collection
 *
 * @param timelines Array of timelines
 * @param trigger Boolean to also destory ScrollTrigger
 * @returns
 */
function destoryTimelines(timelines: gsap.core.Timeline[], trigger: boolean) {
	return timelines.forEach((timeline) => {
		if (trigger) timeline?.scrollTrigger?.kill();
		timeline.kill();
	});
}

/**
 * Destory a group of tweens, and release it to grabage collection
 *
 * @param tweens Array of tweens
 * @param trigger Boolean to also destory scrolltrigger
 * @returns
 */
function destoryTweens(tweens: gsap.core.Tween[], trigger: boolean) {
	return tweens.forEach((tween) => {
		if (!tween) return;
		if (trigger) tween?.scrollTrigger?.kill();
		tween.kill();
	});
}

export { destoryTimelines, destoryTweens };
