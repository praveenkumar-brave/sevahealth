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

// import "./ResidentialCare.scss";

export default function ResidentialCare() {

  const data =
    services.residentialCare;

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