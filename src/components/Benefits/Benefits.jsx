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
  
            <span className="hero__eyebrow">
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
            <div className="benefits__flex-top">
               <div className="card">
                <div className="wrapper">
                  <div className="card-image">
                    <img src="/assets/images/card-img1.svg" alt="Reclaimed Time" />
                  </div>
                  <div className="content">
                    <p className="title">Reclaimed Time</p>
                    <p className="title price">Drastically reduces the time it takes direct care staff to write, find, and file webforms, putting those hours directly back into patient care.</p>
                    {/* <p class="title price old-price">&nbsp;$6</p> */}
                    <p></p>
                  </div>
                  <button className="card-btn">Get Started</button>
                </div>
             {/* <p class="tag">-50%</p> */}
            </div>
            <div className="card">
                <div className="wrapper">
                  <div className="card-image">
                    <img src="/assets/images/card-img2.svg" alt="Massive Adoption" />
                  </div>
                  <div className="content">
                    <p className="title">Massive Adoption</p>
                    <p className="title price">85% active daily usage among internal staff, proving that our intuitive design eliminates the "software learning curve”.</p>
                    {/* <p class="title price old-price">&nbsp;$6</p> */}
                    <p></p>
                  </div>
                  <button className="card-btn">Get Started</button>
                </div>
             {/* <p class="tag">-50%</p> */}
            </div>
            <div className="card">
                <div className="wrapper">
                  <div className="card-image">
                    <img src="/assets/images/card-img3.svg" alt="Unmatched Scale" />
                  </div>
                  <div className="content">
                    <p className="title">Unmatched Scale</p>
                    <p className="title price">Trusted by agencies processing over 10,000 compliance forms weekly.</p>
                    {/* <p class="title price old-price">&nbsp;$6</p> */}
                    <p></p>
                  </div>
                  <button className="card-btn">Get Started</button>
                </div>
             {/* <p class="tag">-50%</p> */}
            </div>
            </div>
          <div className="benefits__flex-botm">
            <div className="card">
                <div className="wrapper">
                 
                  <div className="content">
                    <p className="title">Deep Healthcare Expertise</p>
                    <p className="title price">Built on decades of real-world experience</p>
                    {/* <p class="title price old-price">&nbsp;$6</p> */}
                    <p></p>
                  </div>
                  <div className="card-image">
                    <img src="/assets/images/card-img4.svg" alt="Deep Healthcare" />
                  </div>
                  <button className="card-btn">Get Started</button>
                </div>
             {/* <p class="tag">-50%</p> */}
            </div>
            <div className="card">
                <div class="wrapper">
                  {/* <div class="card-image">III</div> */}
                  <div className="content">
                    <p className="title">Flexible Delivery Model</p>
                    <p className="title price">The right mix of experts, when you need them</p>
                    {/* <p class="title price old-price">&nbsp;$6</p> */}
                    <p></p>
                  </div>
                  <div className="card-image">
                    <img src="/assets/images/card-img5.svg" alt="Flexible" />
                  </div>
                  <button className="card-btn">Get Started</button>
                </div>
             {/* <p class="tag">-50%</p> */}
            </div>
            
          </div>
          <div className="hero__actions">

<button
  className="outline"
>
  Request Demo
</button>

</div>
            {/* {benefits.map(
              (item) => (
                <BenefitCard
                  key={item.id}
                  {...item}
                />
              )
            )} */}
  
          </div>
  
        </div>
      </section>
    );
  }