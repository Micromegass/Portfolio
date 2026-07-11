import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

/**
 * Camino motion system — calm by design.
 *
 * Conventions (used declaratively in markup):
 *   data-reveal          — element rises/fades in gently on scroll
 *   data-reveal-group    — children stagger in
 *   data-draw            — SVG paths draw themselves (the journey trail)
 *
 * Reduced motion: nothing is hidden, no smooth scroll, no animation.
 */
export function initMotion(): void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  gsap.registerPlugin(ScrollTrigger);

  // Gentle smooth scroll, synced with ScrollTrigger
  const lenis = new Lenis({ lerp: 0.09 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 22 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      }
    );
  });

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    gsap.fromTo(
      Array.from(group.children),
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.14,
        scrollTrigger: { trigger: group, start: 'top 86%', once: true },
      }
    );
  });

  // The journey trail draws itself in as you walk down the page
  document.querySelectorAll<SVGElement>('[data-draw]').forEach((svg) => {
    const strokes = svg.querySelectorAll<SVGGeometryElement>('[data-draw-stroke]');
    strokes.forEach((s) => {
      const len = s.getTotalLength ? s.getTotalLength() : 100;
      s.style.strokeDasharray = `${len}`;
      s.style.strokeDashoffset = `${len}`;
      gsap.to(s, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: svg,
          start: 'top 75%',
          end: 'bottom 60%',
          scrub: 0.8,
        },
      });
    });
  });
}
