import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import ThreeHexGrid from
  "@/components/ThreeHexGrid/ThreeHexGrid";
import ThreeHeroBlob from "@/components/ThreeHeroBlob/ThreeHeroBlob";
import AntigravityField from "@/components/AntigravityField/AntigravityField";
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

        <button className="button-primary">
        Get started
        </button>

        <button
          className="outline"
        >
          Request Demo
        </button>

      </div>

    </div>
  </div>
  <div className="hero__bg">
    {/* <ThreeHexGrid /> */}
    {/* <ThreeHeroBlob /> */}
    {/* <AntigravityField pattern="mixed"/> */}
  </div>
</section>
  );
}