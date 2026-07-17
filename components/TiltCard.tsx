"use client";

import { useEffect, useRef } from "react";

/** Project card with pointer-tracked 3D tilt (from DCLogic onCardMove/onCardLeave). */
export default function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * 14;
      const ry = (px - 0.5) * 14;
      card.style.transition = "transform 0.06s linear";
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.03,1.03,1.03)`;
    };
    const onLeave = () => {
      card.style.transition = "transform .5s cubic-bezier(.2,.8,.2,1)";
      card.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <article className="project-card" ref={ref}>
      {children}
    </article>
  );
}
