import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTA from "@/components/CTA/CTA";

import PageHero from "@/components/PageHero/PageHero";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid/FeatureGrid";

import "./About.scss";

export default function About() {
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
          subtitle="Transforming Healthcare Through Intelligent Compliance"
          description="SEVA Health empowers healthcare organizations with modern compliance, quality management and operational excellence solutions."
          buttonText="Contact Us"
        />

        {/* WHO WE ARE */}

        <section className="about-company">

          <div className="container">

            <div className="about-company__content">

              <span>
                Who We Are
              </span>

              <h2>
                Healthcare Technology
                Built For Modern Providers
              </h2>

              <p>
                SEVA Health was created to simplify healthcare compliance,
                incident management, quality assurance and operational
                performance across healthcare organizations.
              </p>

              <p>
                Our mission is to replace fragmented systems with a single
                platform that improves visibility, accountability and care
                quality.
              </p>

            </div>

            <div className="about-company__image">

              <img
                src="/about/about-team.jpg"
                alt="SEVA Team"
              />

            </div>

          </div>

        </section>

        {/* MISSION VISION */}

        <section className="mission-vision">

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

        </section>

        {/* WHY SEVA */}

        <section className="why-seva-about">

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

        </section>

        {/* VALUES */}

        <section className="values">

          <div className="container">

            <SectionHeading
              badge="Core Values"
              title="What Drives Us"
              description="Our values shape every solution we create."
            />

            <FeatureGrid
              items={values}
            />

          </div>

        </section>

        <CTA />

      </main>
    </>
  );
}