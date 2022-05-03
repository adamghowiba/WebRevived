import { gsap } from 'gsap';
import { ScrollTrigge } from 'gsap/dist/ScrollTrigger.js';
// import { SplitText } from 'gsap/dist/SplitText.js';
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/all';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

const ScrollTriggerExport: typeof ScrollTriggerType = ScrollTrigger;

export { gsap } from 'gsap';
export { ScrollTriggerExport as ScrollTrigger };
