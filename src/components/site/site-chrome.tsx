"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SiteChrome = {
  /** 0..1 — how far the visitor has scrolled the page */
  progress: number;
  /** id of the section currently crossing the viewport's middle band */
  activeId: string | null;
};

const SiteChromeContext = createContext<SiteChrome>({
  progress: 0,
  activeId: null,
});

export function useSiteChrome() {
  return useContext(SiteChromeContext);
}

/**
 * Tracks scroll progress (for the reading bar) and the active section
 * (for menu highlighting) for the whole page. Renders nothing itself.
 */
export function SiteChromeProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    let dirty = false;

    const measure = () => {
      dirty = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      // Only commit to React when the rounded value actually moves
      if (Math.abs(p - progressRef.current) > 0.001) {
        progressRef.current = p;
        setProgress(p);
      }
    };

    const onScroll = () => {
      if (!dirty) {
        dirty = true;
        raf = requestAnimationFrame(measure);
      }
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    // Which <section id="..."> crosses the middle of the viewport?
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id], footer[id]")
    );
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      // A narrow horizontal band around the viewport's centre
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <SiteChromeContext.Provider value={{ progress, activeId }}>
      {children}
    </SiteChromeContext.Provider>
  );
}

/** Thin brand gradient bar at the very top, fills as the visitor reads. */
export function ScrollProgressBar() {
  const { progress } = useSiteChrome();
  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
      role="presentation"
    />
  );
}
