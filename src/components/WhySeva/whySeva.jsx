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
  
          <div className="why-seva__header">
  
            <span className="title-highlight">
              Why SEVA
            </span>
  
            <h2>
              Built For Modern
              Healthcare Operations
            </h2>
  
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
      key={item.id}
      style={{
        border: "1px solid #ddd",
        padding: "30px",
        minHeight: "200px",
        background: "#fff",
      }}
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  ))}
</div>
  
        </div>
      </section>
    );
  }