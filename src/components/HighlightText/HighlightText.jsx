import {
    useRef,
    useLayoutEffect,
  } from "react";
  
  import {
    gsap,
    ScrollTrigger,
  } from "@/animations/gsap";
  
  import "./HighlightText.scss";
  
  export default function HighlightText() {
    const sectionRef =
      useRef(null);
  
    useLayoutEffect(() => {
      const section =
        sectionRef.current;
  
      if (!section) return;
  
      const words =
        gsap.utils.toArray(
          ".highlight-word"
        );
  
      const tl =
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
  
            start: "top top",
  
            end: "+=1500",

  
            pin: true,
  
            scrub: true,
            pinSpacing: true,
            onUpdate() {
              const progress =
                this.progress();
  
              const index = Math.min(
                words.length - 1,
                Math.floor(
                  progress *
                    words.length
                )
              );
  
              words.forEach(
                (word, i) => {
                  if (i <= index) {
                    word.style.color =
                      "#0F172A";
                  } else {
                    word.style.color =
                      "#94A3B8";
                  }
                }
              );
            },
          },
        });
  
      words.forEach((word) => {
        tl.to(
          word,
          {
            color: "#0F172A",
  
            duration: 1,
          },
          ">"
        );
      });
  
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    }, []);
  
    const text =
      "When critical incidents occur delayed paper reporting means management cannot address operational risks before they escalate into regulatory violations.";
  
    return (
      <section
        ref={sectionRef}
        className="highlight"
      >
        <div className="container">
  
          <div className="highlight__content">
  
            {text
              .split(" ")
              .map(
                (word, index) => (
                  <span
                    key={index}
                    className="highlight-word"
                  >
                    {word}{" "}
                  </span>
                )
              )}
  
          </div>
  
        </div>
      </section>
    );
  }