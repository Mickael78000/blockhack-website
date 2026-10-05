"use client";

import { useEffect, useState } from "react";

/** Desktop animations only: viewport >= 768px and no reduced-motion preference. */
export function useDesktopEffects() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnabled(desktop.matches && !reduced.matches);
    };

    update();
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}
