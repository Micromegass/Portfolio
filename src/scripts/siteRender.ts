/**
 * Procedural renders of "an outdated business website" and "its relaunch".
 * Drawn to offscreen canvases so the hero needs no image assets and stays
 * crisp at any resolution. Both renders are deliberately generic — this is
 * a typical German SME site, not any real client.
 */

const SANS = "'Hanken Grotesk Variable', system-ui, sans-serif";
const SERIF = 'Georgia, "Times New Roman", serif';

export interface RenderLabels {
  /** Localized strings so the mock sites speak the visitor's language */
  company: string;
  tagline: string;
  nav: string[];
  newsHeading: string;
  phone: string;
  visitors: string;
  heroLine1: string;
  heroLine2: string;
  heroSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  cards: string[];
  navNew: string[];
}

function roundRect(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

export function drawBefore(c: CanvasRenderingContext2D, W: number, H: number, L: RenderLabels) {
  c.save();
  c.fillStyle = '#e9e6dd';
  c.fillRect(0, 0, W, H);

  // browser chrome
  c.fillStyle = '#c9c4b8';
  c.fillRect(0, 0, W, 70);
  c.fillStyle = '#8d887c';
  c.font = `600 26px ${SANS}`;
  c.fillText('www.ihre-firma.de/index.html', 40, 46);

  // loud header
  c.fillStyle = '#1c4f8b';
  c.fillRect(0, 70, W, 150);
  c.fillStyle = '#ffd94a';
  c.font = `bold 62px ${SERIF}`;
  c.fillText(L.company, 48, 168);
  c.fillStyle = '#ffffff';
  c.font = `italic 28px ${SERIF}`;
  c.fillText(L.tagline, 780, 172);

  // cramped nav
  c.fillStyle = '#d6d2c6';
  c.fillRect(0, 220, W, 62);
  c.fillStyle = '#1c4f8b';
  c.font = `600 26px ${SANS}`;
  L.nav.forEach((t, i) => c.fillText(t, 40 + i * 250, 260));

  // sidebar
  c.fillStyle = '#dedacb';
  c.fillRect(40, 320, 520, 900);
  c.strokeStyle = '#b4ae9d';
  c.lineWidth = 3;
  c.strokeRect(40, 320, 520, 900);
  c.fillStyle = '#7a2020';
  c.font = `bold 30px ${SERIF}`;
  c.fillText(L.newsHeading, 70, 372);
  c.fillStyle = '#3d3a33';
  for (let i = 0; i < 14; i++) c.fillRect(70, 410 + i * 34, 380 - (i % 4) * 60, 12);

  // dense text column
  c.fillStyle = '#3d3a33';
  for (let i = 0; i < 26; i++) c.fillRect(620, 340 + i * 30, 1400 - (i % 5) * 190, 11);

  // contact box
  c.fillStyle = '#ffffff';
  c.fillRect(620, 1140, 760, 160);
  c.strokeRect(620, 1140, 760, 160);
  c.fillStyle = '#1c4f8b';
  c.font = `bold 34px ${SERIF}`;
  c.fillText(L.phone, 650, 1210);
  c.fillStyle = '#8d887c';
  c.font = `22px ${SANS}`;
  c.fillText(L.visitors, 650, 1265);
  c.restore();
}

export function drawAfter(c: CanvasRenderingContext2D, W: number, H: number, L: RenderLabels) {
  c.save();
  const g = c.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#0b0a0c');
  g.addColorStop(1, '#1a141f');
  c.fillStyle = g;
  c.fillRect(0, 0, W, H);

  const rg = c.createRadialGradient(W * 0.78, 100, 20, W * 0.78, 100, 900);
  rg.addColorStop(0, 'rgba(255,61,119,0.3)');
  rg.addColorStop(1, 'rgba(255,61,119,0)');
  c.fillStyle = rg;
  c.fillRect(0, 0, W, H);

  // chrome
  c.fillStyle = 'rgba(255,255,255,0.06)';
  c.fillRect(0, 0, W, 70);
  c.fillStyle = 'rgba(255,255,255,0.45)';
  c.font = `600 26px ${SANS}`;
  c.fillText('ihre-firma.de', 40, 46);

  // nav
  c.fillStyle = '#f5f2f6';
  c.font = `800 30px ${SANS}`;
  c.fillText(L.company, 48, 160);
  c.fillStyle = 'rgba(245,242,246,0.55)';
  c.font = `500 24px ${SANS}`;
  L.navNew.forEach((t, i) => c.fillText(t, 1480 + i * 190, 158));
  c.fillStyle = '#ff3d77';
  roundRect(c, 2200, 128, 160, 46, 23);
  c.fill();

  // hero
  c.fillStyle = '#f5f2f6';
  c.font = `780 120px ${SANS}`;
  c.fillText(L.heroLine1, 48, 420);
  c.fillStyle = '#ff3d77';
  c.fillText(L.heroLine2, 48, 550);
  c.fillStyle = 'rgba(245,242,246,0.6)';
  c.font = `400 34px ${SANS}`;
  c.fillText(L.heroSub, 52, 630);

  // buttons
  c.fillStyle = '#ff3d77';
  roundRect(c, 48, 690, 360, 86, 43);
  c.fill();
  c.fillStyle = '#0b0a0c';
  c.font = `650 30px ${SANS}`;
  c.fillText(L.ctaPrimary, 92, 743);
  c.strokeStyle = 'rgba(255,255,255,0.25)';
  c.lineWidth = 2;
  roundRect(c, 434, 690, 290, 86, 43);
  c.stroke();
  c.fillStyle = 'rgba(245,242,246,0.85)';
  c.fillText(L.ctaSecondary, 478, 743);

  // cards
  for (let i = 0; i < 3; i++) {
    const x = 48 + i * 500;
    c.fillStyle = 'rgba(255,255,255,0.05)';
    roundRect(c, x, 900, 460, 380, 26);
    c.fill();
    c.strokeStyle = 'rgba(255,255,255,0.1)';
    c.lineWidth = 2;
    c.stroke();
    c.fillStyle = '#ff3d77';
    c.fillRect(x + 40, 960, 60, 6);
    c.fillStyle = 'rgba(245,242,246,0.92)';
    c.font = `700 36px ${SANS}`;
    c.fillText(L.cards[i] ?? '', x + 40, 1030);
    c.fillStyle = 'rgba(245,242,246,0.4)';
    for (let l = 0; l < 4; l++) c.fillRect(x + 40, 1080 + l * 30, 360 - l * 45, 9);
  }

  // image panel
  const ig = c.createLinearGradient(1600, 880, 2350, 1300);
  ig.addColorStop(0, '#3a2b3f');
  ig.addColorStop(1, '#5c3550');
  c.fillStyle = ig;
  roundRect(c, 1600, 880, 752, 400, 26);
  c.fill();

  // Hero visual on the right — keeps the "after" side designed at any split
  const hg = c.createLinearGradient(1400, 250, 2352, 800);
  hg.addColorStop(0, '#2a1f2e');
  hg.addColorStop(1, '#4d2b45');
  c.fillStyle = hg;
  roundRect(c, 1400, 250, 952, 560, 30);
  c.fill();
  c.strokeStyle = 'rgba(255,255,255,0.1)';
  c.lineWidth = 2;
  c.stroke();

  // floating stat chip over the visual
  c.fillStyle = 'rgba(11,10,12,0.82)';
  roundRect(c, 1470, 640, 420, 116, 22);
  c.fill();
  c.strokeStyle = 'rgba(255,255,255,0.14)';
  c.stroke();
  c.fillStyle = '#ff3d77';
  c.font = `780 46px ${SANS}`;
  c.fillText('+38 %', 1508, 700);
  c.fillStyle = 'rgba(245,242,246,0.55)';
  c.font = `500 22px ${SANS}`;
  c.fillText('Anfragen', 1508, 730);

  // small logo/badge cluster top-right of the visual
  for (let i = 0; i < 3; i++) {
    c.fillStyle = 'rgba(255,255,255,0.09)';
    roundRect(c, 1980 + (i % 2) * 0, 300 + i * 78, 300, 58, 16);
    c.fill();
  }
  c.restore();
}

/* The two mock sites are authored against this fixed drawing surface. The
   canvas the caller asks for may be smaller (it is redrawn every frame, so
   resolution costs main-thread time), and the context is scaled to match —
   otherwise the right third of the composition falls off the edge. */
export const DESIGN_W = 2400;
export const DESIGN_H = 1350;

export function makeSiteCanvas(
  W: number,
  H: number,
  draw: (c: CanvasRenderingContext2D, W: number, H: number, L: RenderLabels) => void,
  labels: RenderLabels
): HTMLCanvasElement {
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext('2d')!;
  ctx.scale(W / DESIGN_W, H / DESIGN_H);
  draw(ctx, DESIGN_W, DESIGN_H, labels);
  return cv;
}
