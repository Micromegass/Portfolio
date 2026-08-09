import { drawAfter, drawBefore, makeSiteCanvas, type RenderLabels } from './siteRender';

/**
 * The hero centrepiece: an outdated website dissolving into its relaunch.
 *
 * Progressive enhancement in three stages so the wow never costs the page:
 *   1. Canvas 2D composite paints immediately (works everywhere, no deps).
 *   2. Three.js loads lazily once the hero is visible and the browser is idle,
 *      then upgrades to a shader morph with noise dissolve + chromatic seam.
 *   3. prefers-reduced-motion stops at stage 1 with a static 50/50 split.
 *
 * Interaction: drag or arrow keys set the split; otherwise it breathes slowly.
 */

/* Backing resolution. Kept modest on purpose: the composite is redrawn every
   frame, and 2400×1350 costs enough main-thread time on throttled CPUs to
   delay first paint. CSS scales this up; the art is vector-ish so it holds. */
const W = 1600;
const H = 900;

/* How long the hero waits, after the visitor lets go and stays away, before it
   resumes its own sweep. Releasing a drag fires pointerup → lostpointercapture
   → pointerleave, and on touch that sequence runs on *every* release — so
   resuming straight off `pointerleave` used to snatch the split back the
   instant the visitor finished setting it. */
const RESUME_DELAY_MS = 4000;

interface Options {
  /** WebGL target — must never receive a 2D context */
  canvas: HTMLCanvasElement;
  /** 2D layer painted on top until WebGL takes over */
  fallback: HTMLCanvasElement;
  frame: HTMLElement;
  slider: HTMLInputElement;
  labels: RenderLabels;
}

export function initTransformer(options: Options): void {
  // Draw as soon as the page has loaded — never gated on scrolling into view.
  // The frame is often below the fold at common viewport heights, and an
  // uninitialised frame is just a black rectangle where the centrepiece
  // should be. First paint is still protected by waiting for `load`; the
  // animation loop and the WebGL upgrade are what get deferred, inside run().
  const start = () => requestAnimationFrame(() => run(options));

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
}

function run({ canvas, fallback, frame, slider, labels }: Options): void {
  const before = makeSiteCanvas(W, H, drawBefore, labels);
  const after = makeSiteCanvas(W, H, drawAfter, labels);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let split = reduced ? 0.5 : 0.12;
  let target = 0.5;
  let auto = !reduced;
  let pointerActive = false;
  let t0 = performance.now();
  let webgl: { render: (s: number) => void; dispose: () => void } | null = null;

  const ctx2d = fallback.getContext('2d');

  function paint2d(s: number) {
    if (!ctx2d) return;
    const x = Math.round(W * s);
    ctx2d.clearRect(0, 0, W, H);
    ctx2d.drawImage(before, 0, 0);
    ctx2d.save();
    ctx2d.beginPath();
    ctx2d.rect(x, 0, W - x, H);
    ctx2d.clip();
    ctx2d.drawImage(after, 0, 0);
    ctx2d.restore();

    const sg = ctx2d.createLinearGradient(x - 90, 0, x + 90, 0);
    sg.addColorStop(0, 'rgba(255,61,119,0)');
    sg.addColorStop(0.5, 'rgba(255,61,119,0.5)');
    sg.addColorStop(1, 'rgba(255,61,119,0)');
    ctx2d.fillStyle = sg;
    ctx2d.fillRect(x - 90, 0, 180, H);
    ctx2d.fillStyle = '#ff3d77';
    ctx2d.fillRect(x - 3, 0, 6, H);
  }

  paint2d(split);

  // ---- interaction ------------------------------------------------
  /** With reduced motion there is no animation loop, so repaint on the spot. */
  function applyIfStatic() {
    if (!reduced) return;
    split = target;
    paint2d(split);
  }

  function setFromClientX(clientX: number) {
    const r = frame.getBoundingClientRect();
    const v = (clientX - r.left) / r.width;
    target = Math.max(0.03, Math.min(0.97, v));
    slider.value = String(Math.round(target * 100));
    applyIfStatic();
  }

  let resumeTimer: number | undefined;

  function cancelResume() {
    if (resumeTimer === undefined) return;
    clearTimeout(resumeTimer);
    resumeTimer = undefined;
  }

  /** Hand the sweep back only once the visitor has let go *and* stayed away. */
  function scheduleResume() {
    if (reduced) return;
    cancelResume();
    resumeTimer = window.setTimeout(() => {
      resumeTimer = undefined;
      auto = true;
      t0 = performance.now();
    }, RESUME_DELAY_MS);
  }

  frame.addEventListener('pointerdown', (e: PointerEvent) => {
    pointerActive = true;
    auto = false;
    cancelResume();
    setFromClientX(e.clientX);
    // Throws InvalidPointerId if the pointer is already gone (fast tap, or a
    // gesture the browser claimed) — that must not abort the handler.
    try {
      frame.setPointerCapture(e.pointerId);
    } catch {
      /* no capture: dragging past the frame edge just stops updating */
    }
  });

  frame.addEventListener('pointermove', (e: PointerEvent) => {
    if (pointerActive) setFromClientX(e.clientX);
  });

  const release = (e: PointerEvent) => {
    pointerActive = false;
    // Touch and pen have no hover state, so no `pointerleave` will follow that
    // means anything — start the idle countdown from the release itself.
    if (e.pointerType !== 'mouse') scheduleResume();
  };
  frame.addEventListener('pointerup', release);
  frame.addEventListener('pointercancel', release);

  frame.addEventListener('pointerenter', () => {
    auto = false;
    cancelResume();
  });
  frame.addEventListener('pointerleave', (e: PointerEvent) => {
    // A lifted finger always "leaves"; only a real mouse exit means the visitor
    // has moved on. Anything else is handled by `release`.
    if (e.pointerType !== 'mouse' || pointerActive) return;
    scheduleResume();
  });

  // Keyboard + assistive tech drive the same value through a real range input
  slider.addEventListener('input', () => {
    auto = false;
    cancelResume();
    target = Number(slider.value) / 100;
    applyIfStatic();
  });

  // ---- loop --------------------------------------------------------
  // Animate only while the hero is on screen — no background CPU burn. The
  // margin starts it just before it scrolls in, so it is never caught static.
  let onScreen = false;
  const visIo = new IntersectionObserver(
    (entries) => {
      for (const e of entries) onScreen = e.isIntersecting;
    },
    { rootMargin: '200px' }
  );
  visIo.observe(frame);

  if (!reduced) {
    const tick = () => {
      if (!onScreen) {
        requestAnimationFrame(tick);
        return;
      }
      if (auto) {
        const t = (performance.now() - t0) / 1000;
        // settle from the "before" state into a slow breathing comparison
        const intro = Math.min(1, t / 1.8);
        const eased = 1 - Math.pow(1 - intro, 3);
        target = 0.12 + eased * (0.5 - 0.12) + Math.sin(t * 0.55) * 0.3 * eased;
        target = Math.max(0.05, Math.min(0.95, target));
        slider.value = String(Math.round(target * 100));
      }
      split += (target - split) * 0.1;

      if (webgl) webgl.render(split);
      else paint2d(split);

      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // ---- stage 2: upgrade to WebGL -----------------------------------
  if (reduced) return;

  const upgrade = async () => {
    try {
      const THREE = await import('three');

      // Bail out cleanly if WebGL is unavailable rather than logging errors
      const probe = canvas.getContext('webgl2') ?? canvas.getContext('webgl');
      if (!probe) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        context: probe as WebGL2RenderingContext,
        antialias: false,
        alpha: false,
        powerPreference: 'low-power',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H, false);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 1);

      const texA = new THREE.CanvasTexture(before);
      const texB = new THREE.CanvasTexture(after);
      for (const t of [texA, texB]) {
        t.colorSpace = THREE.SRGBColorSpace;
        t.minFilter = THREE.LinearFilter;
        t.generateMipmaps = false;
      }

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uA: { value: texA },
          uB: { value: texB },
          uSplit: { value: split },
          uTime: { value: 0 },
        },
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          precision highp float;
          varying vec2 vUv;
          uniform sampler2D uA;
          uniform sampler2D uB;
          uniform float uSplit;
          uniform float uTime;

          // cheap value noise
          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
          }

          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            return mix(
              mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
              mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
              f.y
            );
          }

          void main() {
            // ragged dissolve edge instead of a hard wipe
            float n = noise(vUv * vec2(9.0, 5.0) + uTime * 0.06);
            float edge = uSplit + (n - 0.5) * 0.055;
            float d = vUv.x - edge;

            // width of the transition band
            float band = 0.045;
            float m = smoothstep(-band, band, d);

            // pixels near the seam get pulled and colour-split
            float pull = exp(-abs(d) * 26.0);
            vec2 uvA = vUv + vec2(pull * 0.02, 0.0);
            vec2 uvB = vUv - vec2(pull * 0.02, 0.0);

            vec3 a = texture2D(uA, uvA).rgb;
            vec3 b;
            b.r = texture2D(uB, uvB + vec2(pull * 0.006, 0.0)).r;
            b.g = texture2D(uB, uvB).g;
            b.b = texture2D(uB, uvB - vec2(pull * 0.006, 0.0)).b;

            vec3 col = mix(a, b, m);

            // magenta glow along the seam
            float glow = exp(-abs(d) * 38.0);
            col += vec3(1.0, 0.24, 0.47) * glow * 0.55;

            gl_FragColor = vec4(col, 1.0);
          }
        `,
      });

      const quad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
      scene.add(quad);

      webgl = {
        render(s: number) {
          material.uniforms.uSplit.value = s;
          material.uniforms.uTime.value = performance.now() / 1000;
          renderer.render(scene, camera);
        },
        dispose() {
          material.dispose();
          quad.geometry.dispose();
          texA.dispose();
          texB.dispose();
          renderer.dispose();
        },
      };

      // Paint one WebGL frame before revealing it, so no blank flash
      webgl.render(split);
      frame.classList.add('transformer__frame--gl');

      // Drop the reference as well as the GPU resources: with bfcache the page
      // can come back and the loop would otherwise render into a dead context.
      window.addEventListener('pagehide', () => {
        webgl?.dispose();
        webgl = null;
        frame.classList.remove('transformer__frame--gl');
      });
    } catch {
      // WebGL unavailable or chunk failed — canvas 2D keeps running
      webgl = null;
    }
  };

  // Upgrade to WebGL once the browser is idle and the hero is actually near
  // the viewport — no point compiling shaders for a frame nobody will see.
  const idle =
    (window as unknown as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback ??
    ((cb: () => void) => setTimeout(cb, 900));

  const upgradeIo = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      upgradeIo.disconnect();
      idle(() => void upgrade());
    },
    { rootMargin: '200px' }
  );
  upgradeIo.observe(frame);
}
