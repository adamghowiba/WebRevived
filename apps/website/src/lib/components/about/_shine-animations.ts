import { gsap, ScrollTrigger } from '$lib/gsap';
import { destoryTimelines, destoryTweens } from '$lib/gsap-utils';

function pinHeader(heading: HTMLElement, container: HTMLElement) {
	if (!heading) return;
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

	return trigger;
}

// prettier-ignore
function changeBackgroundColor(groups: HTMLElement[], heading: HTMLElement, parentGroup: HTMLElement) {
	const blackGroups: HTMLElement[] = gsap.utils.toArray(groups);
	const timelines: gsap.core.Timeline[] = [];

	blackGroups.forEach((blackGroup, i) => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: blackGroup,
				start: 'top bottom',
				end: 'bottom bottom',
				onLeave: (self) => {
					if (i == blackGroups.length - 1) return;
					self.animation?.reverse();
				},
				onEnterBack: (self) => self.animation?.play(),
				onLeaveBack: (self) => self.animation?.reverse()
			}
		});

		timeline.to(parentGroup, {
			backgroundColor: '#141313'
		});
		timeline.to(heading, { color: 'white' }, '<');

		timelines.push(timeline);
	});

	return () => {
		destoryTimelines(timelines, true);
	};
}

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
				scrub: gsap.utils.random([0.7, 2, 1.5, 3])
			},
			y: `-${gsap.utils.random([40, 80, 50, 70, 90])}%`
		});

		tweens.push(tween);
	});

	return () => {
		destoryTweens(tweens, true);
	};
}

function changeHeaderText(parentGroup: HTMLElement, callback: (index: number) => void) {
	const groups = parentGroup.querySelectorAll('.group');

	groups.forEach((group, i) => {
		ScrollTrigger.create({
			trigger: group,
			start: 'top bottom',
			end: 'bottom bottom',
			invalidateOnRefresh: true,
			onEnter: () => callback(i),
			onEnterBack: () => callback(i),
			onLeaveBack: () => callback(i)
		});
	});
}

export { changeBackgroundColor, changeHeaderText, moveImagesSlightly, pinHeader };
