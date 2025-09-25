export function initRevealObserver() {
  if (typeof window === "undefined") return;
  const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
  if (!("IntersectionObserver" in window) || els.length === 0) return;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add("in-view");
    }
  }, { threshold: 0.15 });
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}
