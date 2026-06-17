import {
    useState,
    useRef,
    useLayoutEffect,
  } from "react";
  
  import {
    gsap,
    ScrollTrigger,
  } from "@/animations/gsap";
  
  import slides from "./slidesData";
  import IManageSlide from "./IManageSlide";
  
  import "./IManage.scss";
  
  export default function IManage() {
    const sectionRef = useRef(null);
  
    const [activeSlide, setActiveSlide] =
      useState(0);
  
      useLayoutEffect(() => {
        const section = sectionRef.current;
      
        if (!section) return;
      
        const trigger = ScrollTrigger.create({
          trigger: section,
      
          start: "top top",
      
          end: `+=${slides.length * 1500}`,
      
          pin: true,
      
          scrub: true,
      
          onUpdate: (self) => {
            const progress = self.progress;
      
            const index = Math.min(
              slides.length - 1,
              Math.floor(progress * slides.length)
            );
      
            setActiveSlide(index);
          },
        });
      
        return () => {
          trigger.kill();
        };
      }, []);
  
    useLayoutEffect(() => {
      gsap.fromTo(
        ".imanage__wrapper",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }, [activeSlide]);
  
    return (
      <section
        ref={sectionRef}
        className="imanage"
      >
        <div className="container">
          <div
            className="imanage__wrapper"
            key={activeSlide}
          >
            <IManageSlide
              slide={
                slides[activeSlide]
              }
            />
          </div>
  
          <div className="imanage__progress">
            {slides.map(
              (_, index) => (
                <span
                  key={index}
                  className={
                    activeSlide ===
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