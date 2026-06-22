import PageHero
from "@/components/PageHero/PageHero";

import CTA
from "@/components/CTA/CTA";

import "./Contact.scss";

export default function Contact() {

  return (
    <>

      <PageHero
        title="Contact Us"
        subtitle="
        We'd love to learn more
        about your healthcare
        operations and how
        SEVA can help.
        "
      />

      <section className="page-section">

        <div className="container">

          <div className="contact-grid">

            <div>

              <h2>
                Let's Talk
              </h2>

              <p>
                Reach out to our
                team for product
                demonstrations,
                support requests,
                or partnership
                opportunities.
              </p>

            </div>

            <form>

              <input
                type="text"
                placeholder="Name"
              />

              <input
                type="email"
                placeholder="Email"
              />

              <input
                type="text"
                placeholder="Company"
              />

              <textarea
                rows="6"
                placeholder="Message"
              />

              <button>
                Submit
              </button>

            </form>

          </div>

        </div>

      </section>

      <CTA />

    </>
  );
}