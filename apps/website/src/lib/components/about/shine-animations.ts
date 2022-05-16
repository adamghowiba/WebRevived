import { gsap, ScrollTrigger } from '$lib/gsap';
import { destoryTimelines, destoryTweens } from '$lib/gsap-utils';

function pinHeader(heading: HTMLElement, container: HTMLElement) {
	const headingSize = heading.clientHeight + 20;

	const trigger = ScrollTrigger.create({
		trigger: container,
		start: () => `top bottom-=${headingSize}`,
		end: () => `bottom bottom`,
		pinnedContainer: container,
		pin: heading,
		pinSpacing: false,
		invalidateOnRefresh: true
	});

	return () => trigger.kill();
}

const groupScrollTrigger = (groupsWrapper: HTMLElement, headingElement: HTMLElement) => {
	const evenGroups = groupsWrapper.querySelectorAll<HTMLElement>('.group:nth-child(even)');
	const timelines: gsap.core.Timeline[] = [];

	evenGroups.forEach((group,  i) => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: group,
				start: 'top bottom-=20%',
				end: 'bottom bottom-=20%',
				toggleActions: 'play reverse play reverse'
			}
		});

		timeline.to(groupsWrapper, { backgroundColor: '#141313' });
		timeline.to(headingElement, { color: 'white' }, '<');

		timelines.push(timeline);
	});

	return () => {
		destoryTimelines(timelines, true);
	};
};

function moveImagesSlightly(parentGroup: HTMLElement) {
	const imagesFirst = parentGroup.querySelectorAll('img');
	if (!imagesFirst?.length) return;

	const tweens: gsap.core.Tween[] = [];

	imagesFirst.forEach((image) => {
		const tween = gsap.to(image, {
			scrollTrigger: {
				trigger: image.parentElement,
				start: 'top bottom',
				end: 'bottom top',
				scrub: gsap.utils.random([0.7, 2, 1.5, 2.5])
			},
			y: `-${gsap.utils.random([80, 70, 90])}%`
		});

		tweens.push(tween);
	});

	return () => {
		destoryTweens(tweens, true);
	};
}

function changeHeaderText(parentGroup: HTMLElement, callback: (index: number) => void) {
	const groups = parentGroup.querySelectorAll('.group');
	const triggers: ScrollTrigger[] = [];

	groups.forEach((group, i) => {
		const trigger = ScrollTrigger.create({
			trigger: group,
			start: 'top bottom-=20%',
			end: 'bottom bottom-=20%',
			invalidateOnRefresh: true,
			onEnter: () => callback(i),
			onEnterBack: () => callback(i),
			onLeaveBack: () => callback(i)
		});

		triggers.push(trigger);
	});

	return () => {
		triggers.forEach((trigger) => trigger.kill());
	};
}

export { changeHeaderText, moveImagesSlightly, pinHeader, groupScrollTrigger };
