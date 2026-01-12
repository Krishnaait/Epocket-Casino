import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTop component that automatically scrolls to the top of the page
 * whenever the route changes. This improves UX by ensuring users always
 * start at the top of each new page.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
