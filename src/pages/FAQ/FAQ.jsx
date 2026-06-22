import CTA from "@/components/CTA/CTA";

import "./FAQ.scss";

const faqs = [
  {
    question:
      "What is SEVA Health?",

    answer:
      "SEVA Health is a healthcare compliance and operational management platform."
  },

  {
    question:
      "Who uses SEVA?",

    answer:
      "Healthcare providers, residential care organizations and support service providers."
  },

  {
    question:
      "Does SEVA support compliance tracking?",

    answer:
      "Yes. SEVA provides real-time compliance monitoring and audit readiness tools."
  },

  {
    question:
      "Can SEVA manage incidents?",

    answer:
      "Yes. Incident reporting and corrective actions are integrated into the platform."
  }
];

export default function FAQ() {

  return (
    <>
      <section className="faq-page">

        <div className="container">

          <h1>
            Frequently Asked Questions
          </h1>

          <div className="faq-list">

            {faqs.map(
              (item, index) => (

                <div
                  key={index}
                  className="faq-item"
                >

                  <h3>
                    {item.question}
                  </h3>

                  <p>
                    {item.answer}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      <CTA />
    </>
  );
}