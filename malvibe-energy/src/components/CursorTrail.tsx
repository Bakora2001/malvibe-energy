import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const points = useRef<{ x: number; y: number }[]>([]);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const MAX = 22;
    let raf = 0;
    const loop = () => {
      points.current.unshift({ x: target.current.x, y: target.current.y });
      if (points.current.length > MAX) points.current.length = MAX;

      // Smooth wavy spline using quadratic curves
      const pts = points.current;
      if (pts.length > 2 && pathRef.current) {
        let d = `M ${pts[0].x} ${pts[0].y}`;
        for (let i = 1; i < pts.length - 1; i++) {
          const xc = (pts[i].x + pts[i + 1].x) / 2;
          const yc = (pts[i].y + pts[i + 1].y) / 2;
          d += ` Q ${pts[i].x} ${pts[i].y}, ${xc} ${yc}`;
        }
        pathRef.current.setAttribute("d", d);
      }
      if (dotRef.current) {
        dotRef.current.setAttribute("cx", String(target.current.x));
        dotRef.current.setAttribute("cy", String(target.current.y));
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none fixed inset-0 z-[9999] h-screen w-screen hidden md:block"
      aria-hidden
    >
      <defs>
        <linearGradient id="trailGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#57ab79" />
          <stop offset="100%" stopColor="#104f9f" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        fill="none"
        stroke="url(#trailGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <circle ref={dotRef} r="6" fill="#57ab79" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}
