import CTA from "@/components/CTA/CTA";

// import "./Support.scss";

export default function Support() {

  return (
    <>
      <section className="support-page">

        <div className="container">

          <h1>
            Support Center
          </h1>

          <p>
            Need help with SEVA?
            Our support team is
            available to assist.
          </p>

          <div className="support-grid">

            <div>
              <h3>Email Support</h3>

              <p>
                support@sevahealth.com
              </p>
            </div>

            <div>
              <h3>Phone Support</h3>

              <p>
                +1 (800) 123-4567
              </p>
            </div>

          </div>

        </div>

      </section>

      <CTA />
    </>
  );
}