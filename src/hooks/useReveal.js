import { useLayoutEffect } from "react";

import { gsap } from "@/animations/gsap";

export const useReveal = (ref) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: 80,
      opacity: 0,

      duration: 1,

      ease: "power3.out",

      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
      },
    });
  }, []);
};