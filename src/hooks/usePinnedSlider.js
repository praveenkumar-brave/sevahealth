import { useLayoutEffect } from "react";

import { ScrollTrigger } from "@/animations/gsap";

export const usePinnedSlider = (
  ref,
  slides
) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const trigger =
      ScrollTrigger.create({
        trigger: ref.current,

        pin: true,

        scrub: true,

        start: "top top",

        end: `+=${slides * 1000}`,
      });

    return () => trigger.kill();
  }, []);
};