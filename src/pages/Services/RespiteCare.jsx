import ServiceHero from "@/components/ServiceHero/ServiceHero";
import ServiceContent from "@/components/ServiceContent/ServiceContent";
import CTA from "@/components/CTA/CTA";

import { services } from "@/data/servicesData";

// import "./RespiteCare.scss";

export default function RespiteCare() {

  const data =
    services.respiteCare;

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