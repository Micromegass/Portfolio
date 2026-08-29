import gsap from 'gsap';
import Lenis from 'lenis';

/**
 * RENOVO motion — restrained and, above all, robust.
 *
 *   data-hero-seq      hero entrance (pure CSS — see global.css, no JS needed)
 *   data-reveal        rises in when scrolled into view
 *   data-reveal-group  children stagger in
 *
 * Reveals use IntersectionObserver + CSS classes rather than scroll-position
 * maths, so smooth scrolling can never desync them. The `motion` class is set
 * inline in <head> and dropped again if this module never runs, so content is
 * never trapped behind JavaScript.
 */
export function initMotion(): void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  const root = document.documentElement;
  root.dataset.motionReady = '1';

  // Smooth scroll purely for feel — nothing depends on its position.
  // Duration + ease-out glide instead of raw lerp, and `anchors` routes
  // in-page links through Lenis; global.css switches native
  // `scroll-behavior: smooth` off while Lenis runs, because the two easings
  // fighting is what made scrolling feel notchy. GSAP's default lag smoothing
  // stays on so a heavy frame (WebGL init) can't turn into a scroll jump.
  const lenis = new Lenis({ duration: 1.2, anchors: true });
  gsap.ticker.add((time) => lenis.raf(time * 1000));

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' }
  );

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => io.observe(el));

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      (child as HTMLElement).style.transitionDelay = `${i * 90}ms`;
    });
    io.observe(group);
  });
}
