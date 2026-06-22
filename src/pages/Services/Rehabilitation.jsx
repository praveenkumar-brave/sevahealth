import ServiceHero from "@/components/ServiceHero/ServiceHero";
import ServiceContent from "@/components/ServiceContent/ServiceContent";
import CTA from "@/components/CTA/CTA";

import { services } from "@/data/servicesData";

// import "./Rehabilitation.scss";

export default function Rehabilitation() {

  const data =
    services.rehabilitation;

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