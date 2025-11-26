import React, { useRef, useEffect } from 'react';

export default function SmileBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const pointsRef = useRef([]); // {x,y,t}

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // simple CSS for canvas background layer
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      .smile-bg-canvas { position:fixed; inset:0; width:100%; height:100%; z-index:-1; pointer-events:none; }
    `;
    document.head.appendChild(styleEl);

    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let W = window.innerWidth;
    let H = window.innerHeight;

    function resize() {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // colors from CSS or fallbacks
    const rootStyle = getComputedStyle(document.documentElement);
    const accent = (rootStyle.getPropertyValue('--accent-2') || '#ff6bcb').trim();

    // pointer handling
    function addPoint(x, y) {
      const t = performance.now();
      pointsRef.current.push({ x, y, t });
      // cap length to avoid memory build-up
      // un peu plus de points possibles mais chaque point est plus fin
      if (pointsRef.current.length > 220) pointsRef.current.shift();
    }

    function onMove(e) {
      const ev = e.touches ? e.touches[0] : e;
      addPoint(ev.clientX, ev.clientY);
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });

    const life = 900; // ms for each point to fade

    function draw(now) {
      // clear with low alpha to create smoother trail (or fully clear each frame)
      ctx.clearRect(0, 0, W, H);

      // Draw points as fading radial blobs
      const pts = pointsRef.current;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const age = now - p.t;
        if (age > life) continue; // will be cleaned later
        const k = 1 - age / life; // 1 -> 0

        // size and alpha scale
        // plus fin : taille réduite et moins d'opacité
        const size = 8 + 36 * k; // plus fin
        const alpha = Math.min(0.9, 0.35 * k);

        // radial gradient for neon glow
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        // color stops using accent with varying alpha
        // accent may be like '#ff6bcb' - we use it directly in rgba by parsing hex
        function hexToRgba(hex, a) {
          const h = hex.replace('#', '');
          const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
          const r = (bigint >> 16) & 255;
          const g = (bigint >> 8) & 255;
          const b = bigint & 255;
          return `rgba(${r},${g},${b},${a})`;
        }

        g.addColorStop(0, hexToRgba(accent, Math.min(0.95, alpha * 1.0)));
        g.addColorStop(0.25, hexToRgba(accent, alpha * 0.6));
        g.addColorStop(0.55, hexToRgba(accent, alpha * 0.18));
        g.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // cleanup old points
      const cutoff = now - life;
      while (pointsRef.current.length && pointsRef.current[0].t < cutoff) {
        pointsRef.current.shift();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
      pointsRef.current = [];
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="smile-bg-canvas" aria-hidden="true" />
  );
}
