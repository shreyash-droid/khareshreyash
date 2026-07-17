"use client";

import { useCallback, useEffect, useState } from "react";

/* Only slots that resolved to real images are included. */
const GALLERY = [
  "/img/hobby-1.webp",
  "/img/hobby-2.webp",
  "/img/hobby-3.webp",
];
const mod = (n: number, m: number) => ((n % m) + m) % m;

/** Photography stack tile + "Behind the lens" gallery modal (from DCLogic gallery state). */
export default function Photography() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const stepBy = useCallback(
    (d: number) => setIdx((i) => mod(i + d, GALLERY.length)),
    []
  );

  // Body scroll lock while the modal is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keyboard navigation.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") stepBy(-1);
      else if (e.key === "ArrowRight") stepBy(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, stepBy]);

  const openGallery = () => {
    setIdx(0);
    setOpen(true);
  };

  const n = GALLERY.length;
  const prevSrc = GALLERY[mod(idx - 1, n)];
  const curSrc = GALLERY[idx];
  const nextSrc = GALLERY[mod(idx + 1, n)];

  return (
    <>
      <div
        className="photo-tile"
        onClick={openGallery}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openGallery();
        }}
      >
        <div className="photo-sub">My photography</div>
        <div className="photo-stack">
          {/* eslint-disable @next/next/no-img-element */}
          <div className="ph ph1">
            <div className="slot">
              <img src="/img/hobby-1.webp" alt="Photograph" />
            </div>
          </div>
          <div className="ph ph2">
            <div className="slot">
              <img src="/img/hobby-2.webp" alt="Photograph" />
            </div>
          </div>
          <div className="ph ph3">
            <div className="slot">
              <img src="/img/hobby-3.webp" alt="Photograph" />
            </div>
          </div>
          {/* eslint-enable @next/next/no-img-element */}
        </div>
        <div className="photo-title">Behind the lens</div>
        <div className="photo-sub">View gallery &rarr;</div>
      </div>

      {open && (
        <div
          className="gallery-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="gallery-modal">
            <div className="gallery-head">
              <div className="title">Behind the lens</div>
              <button
                className="gallery-close"
                aria-label="Close"
                onClick={close}
              >
                &times;
              </button>
            </div>
            <div className="gallery-stage">
              <button
                className="gallery-nav"
                aria-label="Previous"
                onClick={() => stepBy(-1)}
              >
                &larr;
              </button>
              <div className="gallery-frames">
                {/* eslint-disable @next/next/no-img-element */}
                <div className="side left">
                  <div className="slot">
                    <img src={prevSrc} alt="Photograph" />
                  </div>
                </div>
                <div className="center">
                  <div className="slot">
                    <img src={curSrc} alt="Photograph" />
                  </div>
                </div>
                <div className="side right">
                  <div className="slot">
                    <img src={nextSrc} alt="Photograph" />
                  </div>
                </div>
                {/* eslint-enable @next/next/no-img-element */}
              </div>
              <button
                className="gallery-nav"
                aria-label="Next"
                onClick={() => stepBy(1)}
              >
                &rarr;
              </button>
            </div>
            <div className="gallery-count">
              {idx + 1} / {n}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
