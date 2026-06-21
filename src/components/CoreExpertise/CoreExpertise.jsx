import {
    useRef,
    useState,
    useLayoutEffect,
  } from "react";
  
  import {
    gsap,
    ScrollTrigger,
  } from "@/animations/gsap";
  
  import slides from "./expertiseData";
  
  import CoreSlide from "./CoreSlide";
  
  import "./CoreExpertise.scss";
  
  export default function CoreExpertise() {
    const sectionRef =
      useRef();
  
    const [active,
      setActive] =
      useState(0);
  
      useLayoutEffect(() => {
        const section = sectionRef.current;
      
        if (!section) return;
      
        const trigger = ScrollTrigger.create({
          trigger: section,
      
          start: "bottom 120%",
      
          end: `+=${slides.length * 1500}`,
      
          pin: true,
      
          scrub: true,
      
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 0.3,
          },
      
          onUpdate: (self) => {
            const progress = self.progress;
      
            const index = Math.min(
              slides.length - 1,
              Math.floor(progress * slides.length)
            );
      
            setActive(index);
          },
        });
      
        return () => {
          trigger.kill();
        };
      }, []);
  
    useLayoutEffect(() => {
  
      gsap.fromTo(
        ".core__content",
  
        {
          opacity: 0,
          y: 40,
        },
  
        {
          opacity: 1,
          y: 0,
  
          duration: 0.8,
  
          ease:
            "power3.out",
        }
      );
  
      gsap.fromTo(
        ".core__visual",
  
        {
          opacity: 0,
          scale: 0.9,
        },
  
        {
          opacity: 1,
          scale: 1,
  
          duration: 0.8,
  
          ease:
            "power3.out",
        }
      );
  
    }, [active]);
  
    return (
      <section
        ref={sectionRef}
        className="core"
      >
        <div className="container">
        <div className="benefits__header">
  
            <span className="hero__eyebrow">
            Expert
            </span>
  
            <h2>
            Our Core <span className="title-highlight">Expertise</span>
            </h2>
  
            <p>
            We provide comprehensive tools and consulting designed specifically for healthcare operations
            </p>
  
          </div>
          <div className="core__wrapper">
            
            <CoreSlide
              slide={
                slides[active]
              }
            />
  
          </div>
  
          <div className="core__progress">
  
            {slides.map(
              (_, index) => (
                <span
                  key={index}
                  className={
                    active ===
                    index
                      ? "active"
                      : ""
                  }
                />
              )
            )}
  
          </div>
  
        </div>
      </section>
    );
  }