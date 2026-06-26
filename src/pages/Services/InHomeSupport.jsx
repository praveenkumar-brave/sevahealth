import ServiceTemplate from "@/components/ServiceTemplate/ServiceTemplate";

import inHomeSupportData from "@/data/services/inHomeSupportData";

export default function InHomeSupport() {
  return (
    <ServiceTemplate
      {...inHomeSupportData}
    />
  );
}