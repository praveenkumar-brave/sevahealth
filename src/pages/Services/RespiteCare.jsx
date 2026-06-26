import ServiceTemplate from "@/components/ServiceTemplate/ServiceTemplate";

import respiteCareData from "@/data/services/respiteCareData";

export default function RespiteCare() {
  return (
    <ServiceTemplate
      {...respiteCareData}
    />
  );
}