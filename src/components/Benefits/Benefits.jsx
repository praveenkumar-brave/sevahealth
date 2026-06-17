import {
    useRef,
    useLayoutEffect,
  } from "react";
  
  import {
    gsap,
    ScrollTrigger,
  } from "@/animations/gsap";
  
  import benefits from "./benefitsData";
  
  import BenefitCard from "./BenefitCard";
  
  import "./Benefits.scss";
  
  export default function Benefits() {
    const sectionRef =
      useRef();
  
    useLayoutEffect(() => {
  
    //   const cards =
    //     gsap.utils.toArray(
    //       ".benefit-card"
    //     );
  
    //   gsap.from(cards, {
    //     y: 80,
  
    //     opacity: 0,
  
    //     duration: 1,
  
    //     stagger: 0.15,
  
    //     ease: "power3.out",
  
    //     scrollTrigger: {
    //       trigger:
    //         sectionRef.current,
  
    //       start: "top 75%",
    //     },
    //   });
  
    }, []);
    useLayoutEffect(() => {

        const ctx =
          gsap.context(() => {
      
            gsap.from(
              ".benefit-card",
              {
                y: 80,
      
                opacity: 0,
      
                stagger: 0.15,
      
                duration: 1,
      
                ease:
                  "power3.out",
      
                scrollTrigger: {
                  trigger:
                    sectionRef.current,
      
                  start:
                    "top 75%",
                },
              }
            );
      
          }, sectionRef);
      
        return () =>
          ctx.revert();
      
      }, []);
  
    return (
      <section
        ref={sectionRef}
        className="benefits"
      >
        <div className="container">
  
          <div className="benefits__header">
  
            <span>
              Challenges
            </span>
  
            <h2>
            Precision, Care, and Trust for <span className="title-highlight">Modern Healthcare</span>
            </h2>
  
            <p>
            SEVA Health is continuously expanding its capabilities to address emerging challenges in compliance, data management, and digital transformation. We remain committed to helping organizations adapt, innovate, and lead in a rapidly changing landscape.
            </p>
  
          </div>
  
          <div className="benefits__grid">
  
            {benefits.map(
              (item) => (
                <BenefitCard
                  key={item.id}
                  {...item}
                />
              )
            )}
  
          </div>
  
        </div>
      </section>
    );
  }