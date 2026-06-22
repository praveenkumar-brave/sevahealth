import PageHero
from "@/components/PageHero/PageHero";

import CTA
from "@/components/CTA/CTA";

export default function About() {

  return (
    <>

      <PageHero
        title="About SEVA"
        subtitle="
        Empowering healthcare
        organizations with
        visibility, compliance,
        and operational
        excellence.
        "
      />

      <section className="page-section">

        <div className="container">

          <h2>
            Our Mission
          </h2>

          <p>
            SEVA Health helps
            healthcare providers
            simplify compliance,
            reduce risk and
            improve operational
            performance through
            intelligent digital
            solutions.
          </p>

        </div>

      </section>

      <CTA />

    </>
  );
}