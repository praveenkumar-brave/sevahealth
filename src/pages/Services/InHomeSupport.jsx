import ServiceHero from "@/components/ServiceHero/ServiceHero";
import ServiceContent from "@/components/ServiceContent/ServiceContent";
import CTA from "@/components/CTA/CTA";

import { services } from "@/data/servicesData";

// import "./InHomeSupport.scss";

export default function InHomeSupport() {

  const data =
    services.inHomeSupport;

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