import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTA from "@/components/CTA/CTA";

import SectionHeading from "@/components/SectionHeading/SectionHeading";
import FeatureBenefits from "@/components/FeatureBenefits/FeatureBenefits";
import IManageHero from "@/components/IManageHero/IManageHero";
import Lottie from "lottie-react";
import animationData from "@/assets/lottie/imange.json";

import "./IManage.scss";
import IManageProcess from "@/components/IManage/IManageProcess";

export default function IManagePage() {

  const features = [
    {
      title: "Digital eBinders",
      description:
        "Digital Client Binders (Your Secure Records",
        icon:"/assets/images/im-fea-icon1.svg",
        className:"features-container"
    },

    {
      title: "Compliance Monitoring",
      description:
        "Ready-to-Use Clinical & Daily Forms",
         icon:"/assets/images/im-fea-icon2.svg",
        className:"features-container"
    },

    {
      title: "Incident Reporting",
      description:
        "Care Scheduling & Deadline Tracking",
         icon:"/assets/images/im-fea-icon3.svg",
        className:"features-container"
    },

    {
      title: "Audit Readiness",
      description:
        "Staff Training & Credential Tracking",
         icon:"/assets/images/im-fea-icon4.svg",
        className:"features-container"
    },

    
  ];

  return (
    <>
      <Navbar />

      <main className="imanage-page">

        
        <IManageHero/>
        {/* ABOUT */}

        <section className="imanage-about">

          <div className="container">

            <div className="imanage-about__content">

              
              <SectionHeading
              badge="Explainable AI Engine"
              title="About Product"
              description="iManage is an affordable, intuitive platform designed specifically to support person-centered healthcare agencies. We protect your agency from compliance risks, simplify staff training, and keep your client records secure and audit-ready at all times." 
              description1="Running a healthcare agency means juggling a million moving parts. Historically, agencies have relied on paper binders, scattered spreadsheets, and sticky notes to track client progress, staff training, and certification expirations. This makes state audits incredibly stressful, risks Medicaid penalties, and takes your team's valuable time away from the people you serve."
           />
            </div>

            <div className="imanage-about__image">

              <Lottie
                animationData={animationData} 
                loop
                />

            </div>

          </div>

        </section>

        {/* FEATURES */}

        <section className="imanage-features">

          <div className="container">

            <SectionHeading
              badge="Core Features"
              title="Features"
              description="iManage replaces the chaos with a secure, easy-to-use digital system. We automate your compliance tracking and centralize your daily operations so your leadership team can confidently face state audits and your staff can focus on delivering exceptional care."
            />

            <FeatureBenefits
              cards={features}
            />

          </div>

        </section>

        {/* MODULES */}

        <section className="imanage-modules">

          <div className="container">

            <SectionHeading
              badge="The Process"
              title="Our System Process"
              description="We help you turn your daily work into organized, automated, and easy-to-manage processes—powered by AI."/>
            <IManageProcess/>
            {/* <div className="modules-grid">

              <div className="module-card">
                Quality Management
              </div>

              <div className="module-card">
                Incident Management
              </div>

              <div className="module-card">
                Compliance Monitoring
              </div>

              <div className="module-card">
                Operational Excellence
              </div>

            </div> */}

          </div>

        </section>

        {/* PROCESS */}

        <section className="imanage-process">

          <div className="container">

            <SectionHeading
              badge="Trust & Compliance"
              title="iManage Solution"
              description="iManage replaces the chaos with a secure, easy-to-use digital system. We automate your compliance tracking and centralize your daily operations so your leadership team can confidently face state audits and your staff can focus on delivering exceptional care.
"
            />

            <div className="timeline">

              <div className="timeline-item">

                <span>
                 <img src="/assets/images/im-sol-icon1.svg" alt="icon"/> 
                </span>

                <h3>
                  Capture
                </h3>

                <p>
                Secure Staff Permissions
                </p>

              </div>

              <div className="timeline-item">

                <span>
                <img src="/assets/images/im-sol-icon2.svg" alt="icon"/>
                </span>

                <h3>
                  Monitor
                </h3>

                <p>
                    Staff Training & Credential Tracking
                </p>

              </div>

              <div className="timeline-item">

                <span>
                <img src="/assets/images/im-sol-icon3.svg" alt="icon"/>
                </span>

                <h3>
                  Improve
                </h3>

                <p>
                    Quality Assurance & Internal Audits
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* WHY */}

        {/* <section className="imanage-why">

          <div className="container">
            

            <div className="imanage-why__content">

              <h2>
                Why Organizations
                Choose iManage
              </h2>

              <ul>

                <li>
                  Reduce Compliance Risk
                </li>

                <li>
                  Improve Audit Readiness
                </li>

                <li>
                  Increase Operational Visibility
                </li>

                <li>
                  Centralize Documentation
                </li>

                <li>
                  Improve Accountability
                </li>

              </ul>

            </div>

            <div className="imanage-why__image">

              <img
                src="/imanage/security.png"
                alt=""
              />

            </div>

          </div>

        </section> */}

        <CTA />

      </main>

    </>
  );
}