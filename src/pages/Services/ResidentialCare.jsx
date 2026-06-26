import ServiceTemplate from "@/components/ServiceTemplate/ServiceTemplate";

import residentialCareData from "@/data/services/residentialCareData";

export default function ResidentialCare() {
  return (
    <>
    <ServiceTemplate
      {...residentialCareData}
    />
    
        </>
  );
}