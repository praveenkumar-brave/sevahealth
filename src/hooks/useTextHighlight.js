import { useLayoutEffect } from "react";

import { gsap } from "@/animations/gsap";

export const useTextHighlight = (
  textRef
) => {
  useLayoutEffect(() => {
    const words =
      textRef.current.querySelectorAll(
        "span"
      );

    words.forEach((word, i) => {
      gsap.to(word, {
        color: "#00d7ff",

        scrollTrigger: {
          trigger: textRef.current,

          start: `top+=${i * 10} center`,

          end: `top+=${(i + 1) * 10} center`,

          scrub: true,
        },
      });
    });
  }, []);
};