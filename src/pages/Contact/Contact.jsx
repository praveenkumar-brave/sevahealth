import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTA from "@/components/CTA/CTA";

import PageHero from "@/components/PageHero/PageHero";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

import "./Contact.scss";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="contact-page">

        <PageHero
          title="Contact Us"
          subtitle="Let's Talk About Your Healthcare Operations"
          description="Have questions about SEVA Health or iManage? Our team is ready to help."
          buttonText="Request Demo"
        />

        {/* CONTACT CARDS */}

        <section className="contact-cards">

          <div className="container">

            <div className="contact-card">
              <h3>Email Us</h3>

              <p>
                support@sevahealth.com
              </p>
            </div>

            <div className="contact-card">
              <h3>Call Us</h3>

              <p>
                +1 (800) 123-4567
              </p>
            </div>

            <div className="contact-card">
              <h3>Support</h3>

              <p>
                Monday - Friday
                9 AM - 6 PM
              </p>
            </div>

          </div>

        </section>

        {/* FORM SECTION */}

        <section className="contact-section">

          <div className="container">

            <div className="contact-form-wrapper">

              <SectionHeading
                badge="Get In Touch"
                title="Send Us A Message"
                description="Tell us about your organization and we'll get back to you."
              />

              <form className="contact-form">

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Full Name"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Organization"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="form-group full">
                  <textarea
                    rows="6"
                    placeholder="How can we help?"
                  />
                </div>

                <button type="submit">
                  Submit Inquiry
                </button>

              </form>

            </div>

            <div className="contact-info">

              <h3>
                Contact Information
              </h3>

              <p>
                Reach out to learn more about our healthcare compliance and operational solutions.
              </p>

              <div className="info-item">
                <strong>Email</strong>
                <span>
                  support@sevahealth.com
                </span>
              </div>

              <div className="info-item">
                <strong>Phone</strong>
                <span>
                  +1 (800) 123-4567
                </span>
              </div>

              <div className="info-item">
                <strong>Address</strong>
                <span>
                  123 Healthcare Avenue
                  Suite 200
                  Los Angeles, CA
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* SUPPORT SECTION */}

        <section className="contact-support">

          <div className="container">

            <div className="support-box">

              <h2>
                Need Immediate Help?
              </h2>

              <p>
                Visit our support center or contact our customer success team.
              </p>

              <div className="support-actions">

                <button>
                  Support Center
                </button>

                <button className="outline">
                  FAQ
                </button>

              </div>

            </div>

          </div>

        </section>

        <CTA />

      </main>

    </>
  );
}