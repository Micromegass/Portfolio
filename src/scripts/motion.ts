import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

/**
 * Das Werkbuch motion system.
 *
 * Conventions (used declaratively in markup):
 *   data-reveal          — element rises/fades in when scrolled into view
 *   data-reveal-group    — children stagger in
 *   data-draw            — SVG paths/lines draw themselves (dimension lines)
 *   #scale-story         — the one bold moment: pinned Micromegas zoom
 *
 * Reduced motion: everything becomes instantly visible, no Lenis, no pin.
 */
export function initMotion(): void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    document
      .querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group] > *')
      .forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Smooth scroll, synced with ScrollTrigger
  const lenis = new Lenis({ lerp: 0.12 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // --- Reveals -------------------------------------------------
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      }
    );
  });

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    gsap.fromTo(
      Array.from(group.children),
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: group, start: 'top 84%', once: true },
      }
    );
  });

  // --- Dimension lines draw in --------------------------------
  document.querySelectorAll<SVGElement>('[data-draw]').forEach((svg) => {
    const strokes = svg.querySelectorAll<SVGGeometryElement>('path, line, polyline');
    strokes.forEach((s) => {
      const len = s.getTotalLength ? s.getTotalLength() : 100;
      s.style.strokeDasharray = `${len}`;
      s.style.strokeDashoffset = `${len}`;
    });
    gsap.to(strokes, {
      strokeDashoffset: 0,
      duration: 1.1,
      ease: 'power2.inOut',
      stagger: 0.15,
      scrollTrigger: { trigger: svg, start: 'top 85%', once: true },
    });
  });

  // --- The bold moment: Micromegas scale story -----------------
  const story = document.querySelector<HTMLElement>('#scale-story');
  if (story) {
    const frames = Array.from(story.querySelectorAll<HTMLElement>('.scale-frame'));
    if (frames.length > 1) {
      // First frame visible; the rest scale up from "far away"
      gsap.set(frames.slice(1), { opacity: 0, scale: 0.4 });
      gsap.set(frames[0], { opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: story,
          start: 'top top',
          end: () => `+=${frames.length * 90}%`,
          pin: true,
          scrub: 0.6,
        },
      });

      frames.forEach((frame, i) => {
        if (i === 0) return;
        // Previous frame zooms past the camera; next one arrives
        tl.to(frames[i - 1], { opacity: 0, scale: 2.4, ease: 'power2.in', duration: 1 }, i)
          .to(frame, { opacity: 1, scale: 1, ease: 'power2.out', duration: 1 }, i + 0.15);
      });
    }
  }
}
