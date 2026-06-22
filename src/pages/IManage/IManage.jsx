import PageHero
from "@/components/PageHero/PageHero";

import CTA
from "@/components/CTA/CTA";

export default function IManagePage() {

  return (
    <>

      <PageHero
        title="iManage Platform"
        subtitle="
        Healthcare compliance
        and operational
        management unified
        into one platform.
        "
      />

      <section className="page-section">

        <div className="container">

          <h2>
            Product Overview
          </h2>

          <p>
            iManage centralizes
            compliance,
            incident management,
            audits, inspections,
            corrective actions,
            and operational
            visibility.
          </p>

        </div>

      </section>

      <CTA />

    </>
  );
}