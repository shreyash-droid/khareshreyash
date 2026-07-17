"use client";

import { useEffect, useRef } from "react";

/** Hero name cluster with the "magnetic" pointer pull (from DCLogic onMagneticMove). */
export default function MagneticCluster() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.style.transition = "transform 0.08s linear";
      el.style.transform = `translate(${dx * 0.12}px, ${dy * 0.18}px)`;
    };
    const onLeave = () => {
      el.style.transition = "transform 0.5s cubic-bezier(.2,.8,.2,1)";
      el.style.transform = "translate(0px,0px)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="name-cluster" ref={ref}>
      <div className="name-hey rise-2">Hey, I&rsquo;m</div>
      <div className="portrait rise-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/portrait.png" alt="Shreyash Khare" />
      </div>
      <div className="rise-2">
        <div className="name-full">
          Shreyash
          <br />
          Khare
        </div>
      </div>
    </div>
  );
}
