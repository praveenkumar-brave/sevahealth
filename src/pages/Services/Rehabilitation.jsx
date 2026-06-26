import ServiceTemplate from "@/components/ServiceTemplate/ServiceTemplate";

import rehabilitation from "@/data/services/rehabilitationData";

export default function Rehabilitation() {
  return (
    <ServiceTemplate
      {...rehabilitation}
    />
  );
}