"use client";
import { useEffect } from "react";

// Delegated smooth-scroll for all same-page hash links (nav, CTAs, footer).
// Native CSS smooth-scroll does not progress reliably alongside the hero canvas
// rAF loop, so we drive the animation ourselves with instant-step easing, which
// always applies. Respects prefers-reduced-motion.
const HEADER_OFFSET = 84;

function animateScrollTo(targetY, duration = 650) {
  const startY = window.scrollY;
  const dist = targetY - startY;
  if (Math.abs(dist) < 2) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    window.scrollTo({ top: targetY, behavior: "instant" });
    return;
  }
  let start;
  const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic
  const step = (ts) => {
    if (start === undefined) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    window.scrollTo({ top: startY + dist * ease(p), behavior: "instant" });
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const SmoothScroll = () => {
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = e.target.closest && e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      const targetY =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      animateScrollTo(Math.max(0, targetY));
      if (history.replaceState) history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
};

export default SmoothScroll;
