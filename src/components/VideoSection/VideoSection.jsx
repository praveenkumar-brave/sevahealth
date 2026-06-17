import { useLayoutEffect } from "react";
import { useRef } from "react";

import {
  gsap,
  ScrollTrigger,
} from "@/animations/gsap";

import "./VideoSection.scss";

export default function VideoSection() {
  const videoRef = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      videoRef.current,

      {
        scale: 0.82,
      },

      {
        scale: 1.05,

        ease: "none",

        scrollTrigger: {
          trigger:
            videoRef.current,

          start:
            "top bottom",

          end:
            "bottom top",

          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="video-section">

      <div
        ref={videoRef}
        className="video-section__card"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/video/demo.mp4"
            type="video/mp4"
          />
        </video>
      </div>

    </section>
  );
}