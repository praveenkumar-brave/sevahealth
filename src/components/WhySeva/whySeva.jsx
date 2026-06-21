import {
    useRef,
    useLayoutEffect
  } from "react";
  
  import {
    gsap
  } from "@/animations/gsap";
  
  import data from "./whySevaData";
  
  import "./WhySeva.scss";
  
  export default function WhySeva() {
    const sectionRef = useRef();
  
    useLayoutEffect(() => {
      gsap.from(
        ".why-card",
        {
          y: 60,
          opacity: 0,
          stagger: 0.15,
  
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%"
          }
        }
      );
    }, []);
  
    return (
      <section
        ref={sectionRef}
        className="why-seva"
      >
        
        <div className="container">
  
        <div className="benefits__header">
  
        <span className="hero__eyebrow">
        What we do
        </span>

        <h2>
        Why <span className="title-highlight">SEVA Health ?</span>
        </h2>

        <p>
        SEVA Health understands the unique challenges of person-centered care. Whether your agency provides Residential Care, Day Programs, In-Home Support, Respite Care, or Rehabilitation Services, we know your workflows. We provide tailored strategies, secure systems, and ongoing support to protect your agency from risks and ensure long-term, sustainable growth.
        </p>

      </div>
  
          {/* <div className="why-seva__grid">
  
            {data.map(item => (
              <article
                key={item.id}
                className="why-card"
              >
                <h3>
                  {item.title}
                </h3>
  
                <p>
                  {item.description}
                </p>
              </article>
            ))}
  
          </div> */}
          <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "20px",
    marginTop: "40px",
  }}
>
  {data.map((item) => (
    <div
      key={item.id} className="why-cards"
      // style={{
      //   border: "1px solid #ddd",
      //   padding: "30px",
      //   minHeight: "200px",
      //   background: "#fff",
      // }}
    >
      <h3>{item.title} <br/><span className="title-highlight">{item.subtitletxt}</span></h3>
      <p>{item.description}<br/>
      {item.descriptionextended}
      </p>
      <button class="rounded-circle card-btn">
        {/* <img src="{item.btnicon}" alt="arrow" />
        {item.btnicon} */}
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
<path d="M12.8804 0.990556C12.902 0.660469 12.652 0.375345 12.3219 0.353714L6.94281 0.00123002C6.61272 -0.0203999 6.3276 0.229654 6.30597 0.559743C6.28434 0.88983 6.53439 1.17495 6.86448 1.19658L11.6459 1.5099L11.3326 6.29132C11.3109 6.62141 11.561 6.90653 11.8911 6.92816C12.2212 6.94979 12.5063 6.69974 12.5279 6.36965L12.8804 0.990556ZM0.39502 11.377L0.789947 11.8273L12.6777 1.40171L12.2827 0.951391L11.8878 0.501076L9.17712e-05 10.9266L0.39502 11.377Z" fill="black"/>
</svg>
      </button>
    </div>
  ))}
</div>
  
        </div>
      </section>
    );
  }