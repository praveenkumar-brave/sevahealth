import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

import "./Hero.scss";

export default function Hero() {
  const heroRef = useRef();

  useReveal(heroRef);

  return (
    <section
      ref={heroRef}
      className="hero"
    >
      <div className="container hero__wrapper">

        <div className="hero__content">

          <span className="hero__eyebrow">
            Healthcare Compliance
          </span>

          <h1>
          Empowering <span className="title-highlight">Healthcare</span> Agencies to 
          Deliver Better Care
          </h1>

          <p>
          We help you simplify compliance, pass state audits with confidence, and free your staff from endless paperwork. By providing secure, easy-to-use digital tools, we help your agency make smarter decisions and focus on what matters most: the people you serve 
          </p>

          <div className="hero__actions">
            <button>
              Get Started
            </button>

            <button className="outline">
            Connect with us
            </button>
          </div>

        </div>

        {/* <div className="hero__visual">

          <div className="hero__image">

            IMAGE
            PLACEHOLDER

          </div>

        </div> */}

      </div>

      {/* <div className="hero__stats">

        <div>
          <h3>350+</h3>
          <span>
            Facilities
          </span>
        </div>

        <div>
          <h3>99%</h3>
          <span>
            Compliance Rate
          </span>
        </div>

        <div>
          <h3>24/7</h3>
          <span>
            Visibility
          </span>
        </div>

      </div> */}

      {/* <div className="hero__scroll">
        Scroll ↓
      </div> */}

    </section>
  );
}