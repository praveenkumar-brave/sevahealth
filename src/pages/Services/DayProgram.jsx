import ServiceTemplate from "@/components/ServiceTemplate/ServiceTemplate";

import dayProgramData from "@/data/services/dayProgramData";

export default function DayProgram() {
  return (
    <ServiceTemplate
      {...dayProgramData}
    />
  );
}