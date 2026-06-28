import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTA from "@/components/CTA/CTA";

import PageHero from "@/components/PageHero/PageHero";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid/FeatureGrid";
import AboutMasonry from "@/components/AboutMasonry/AboutMasonry";
import Lottie from "lottie-react";
import about from "@/assets/lottie/about.json";
import aboutimg from "/assets/images/about-img2.svg";
import doctorImage from "/assets/images/about-img4.svg";
import doctorsImage from "/assets/images/about-img3.svg";
import infoImage from "/assets/images/about-img5.svg";


import "./About.scss";

export default function About() {
    const leftCards = [

        {
    
            badge:"99% Guaranteed",
    
            title:"Compliance,\nSimplified",
    
            description:
            "Continuous monitoring and structured tracking of regulatory requirements—so nothing falls through the cracks.",
            image:aboutimg,
            // graphic:aboutimg,
            imagePosition: "top",

            className: "card-one",
    
        },
    
        {
    
            title:"Risk,\nManaged\nProactively",
    
            description:
            "Identifying, assessing, and mitigating risks before they become operational barriers.",
    
            badges:[
                "24/7 Audit Ready",
                "IPP/ISP Web Forms",
                "85% Active Management"
            ],
    
            image:doctorImage,
            imagePosition: "bottom",
            className: "card-two",
    
        },
    
        {
    
            title:"Get all the benefits now",
    
            button:"Book Demo",
            graphic: true,
    
            className:"cta-card"
    
        }
    
    ];
    
    const rightCards=[
    
        {
    
            title:"Data,\nActivated",
    
            description:
            "Transforming complex datasets into meaningful, decision-ready insights that drive performance and accountability.",
    
            image:doctorsImage,
            imagePosition: "top",
            className: "card-three",
    
        },
    
        {
    
            title:"Information,\nUnified",
    
            description:
            " Creating seamless systems that enable secure, efficient data sharing across platforms and stakeholders.",
    
            image:infoImage,
            className: "card-four",
            // graphic:<FloatingCards/>
    
        }
    
    ];
  const values = [
    {
      title: "Integrity",
      description:
        "We build trust through transparency, accountability and ethical healthcare practices.",
    },

    {
      title: "Innovation",
      description:
        "Technology-driven solutions that simplify healthcare operations.",
    },

    {
      title: "Compliance",
      description:
        "Helping organizations stay inspection-ready and compliant.",
    },

    {
      title: "Care Excellence",
      description:
        "Supporting better outcomes for providers, staff and patients.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="about-page">

        <PageHero
          title="About SEVA Health"
          subtitle="Transforming Healthcare Through Intelligent Compliance & Data"
          description="At SEVA Health, we help organizations navigate the complexity of healthcare governance, risk, and compliance with clarity and confidence. We combine deep industry expertise with modern technology to deliver intelligent solutions that turn fragmented data into actionable insight."
          buttonText="Contact Us"
        />

        {/* WHO WE ARE */}
        <section className="why-matters">

          <div className="container">

            <div className="why-matters__content">

              <h2>
              Who We Are
              </h2>

              <p>
              SEVA Health is a healthcare IT and consulting company focused on Governance, Risk, and Compliance (GRC). As a minority-owned business backed by decades of combined leadership experience, we bring a unique blend of domain expertise, technical capability, and strategic thinking.
              </p>
              {/* <button>
              Learn more
              </button> */}
            <img src="/assets/images/about-img1.svg" alt="icon"/> 


            </div>

            <div className="why-matters__image">

           

                {/* <Lottie
                animationData={about}
                loop
                autoplay
                className="about__lottie lottie-icon"
                /> */}
           <img src="/assets/images/about-img.svg" alt="icon"/> 
            </div>

          </div>

        </section>

        <section className="about-company">

          <div className="container">

            <div className="about-company__content">

              <span>
                Seva Health
              </span>

              <h2>
              Transforming Healthcare Through Intelligent Compliance & Data
              </h2>

              <p>
              At SEVA Health, we help organizations navigate the complexity of healthcare governance, risk, and compliance with clarity and confidence. We combine deep industry expertise with modern technology to deliver intelligent solutions that turn fragmented data into actionable insight.
              </p>

              <p>
              In an environment where regulations evolve rapidly and data volumes grow exponentially, we enable organizations to stay compliant, operate efficiently, and make better decisions—faster.
              </p>

            </div>

            <div className="about-company__image">

           

                <Lottie
                animationData={about}
                loop
                autoplay
                className="about__lottie lottie-icon"
                />


            </div>

          </div>

        </section>

        {/* MISSION VISION */}

        {/* <section className="mission-vision">

          <div className="container">

            <div className="mission-card">

              <h3>
                Our Mission
              </h3>

              <p>
                To help healthcare providers operate more efficiently while
                maintaining the highest standards of compliance and quality.
              </p>

            </div>

            <div className="vision-card">

              <h3>
                Our Vision
              </h3>

              <p>
                To become the trusted healthcare operations platform that
                empowers organizations to deliver exceptional care.
              </p>

            </div>

          </div>

        </section> */}

        {/* WHY SEVA */}

        {/* <section className="why-seva-about">

          <div className="container">

            <SectionHeading
              badge="Why Choose Us"
              title="Why Healthcare Organizations Choose SEVA"
              description="Designed specifically for healthcare providers that need visibility, compliance and operational excellence."
            />

            <div className="why-seva-about__grid">

              <div className="card">
                Real-Time Compliance Monitoring
              </div>

              <div className="card">
                Centralized Documentation
              </div>

              <div className="card">
                Audit Readiness
              </div>

              <div className="card">
                Incident Management
              </div>

            </div>

          </div>

        </section> */}

        {/* VALUES */}

        <section className="values">

          <div className="container">

            <SectionHeading
              badge="Core Values"
              title="What Drives Us"
              description="Our values shape every solution we create."
            />

            {/* <FeatureGrid
              cards={values}
            /> */}
            <AboutMasonry

                leftCards={leftCards}

                rightCards={rightCards}

                />

          </div>

        </section>

        <CTA />

      </main>
    </>
  );
}