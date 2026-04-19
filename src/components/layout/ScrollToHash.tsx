import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * - Scrolls to #id on the home route after navigation (e.g. /about → /#countries).
 * - Scrolls to top when entering / without a hash from another route (not on first paint / refresh).
 */
export function ScrollToHash() {
  const { pathname, hash, key } = useLocation();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    const prev = prevPathRef.current;
    prevPathRef.current = pathname;

    const id = hash.replace(/^#/, "");

    if (pathname !== "/") return;

    if (id) {
      const t = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return () => clearTimeout(t);
    }

    if (prev !== null && prev !== "/") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash, key]);

  return null;
}
