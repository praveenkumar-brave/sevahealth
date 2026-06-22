import ServiceHero
from "@/components/ServiceHero/ServiceHero";

import ServiceContent
from "@/components/ServiceContent/ServiceContent";

import CTA
from "@/components/CTA/CTA";

import {
  services
}
from "@/data/servicesData";

// import "./DayProgram.scss";

export default function DayProgram() {

  const data =
    services.dayProgram;

  return (
    <>

      <ServiceHero
        title={data.title}
        description={data.description}
      />

      <ServiceContent
        overview={data.overview}
        features={data.features}
      />

      <CTA />

    </>
  );
}