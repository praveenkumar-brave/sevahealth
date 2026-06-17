import qualityAnimation from "@/assets/lottie/anim5.json";
import incidentAnimation from "@/assets/lottie/anim6.json";
import complianceAnimation from "@/assets/lottie/anim7.json";
import excellenceAnimation from "@/assets/lottie/anim8.json";

const expertiseSlides = [
  {
    id: 1,
    category: "Core Expertise",

    title: "Quality Management",

    description:
      "Centralize policies, procedures, audits and documentation to maintain quality standards across facilities.",

    animation: qualityAnimation,
  },

  {
    id: 2,
    category: "Core Expertise",

    title: "Incident Management",

    description:
      "Track incidents, investigations and corrective actions with complete accountability.",

    animation: incidentAnimation,
  },

  {
    id: 3,
    category: "Core Expertise",

    title: "Compliance Monitoring",

    description:
      "Gain visibility into compliance performance and readiness across the organization.",

    animation: complianceAnimation,
  },

  {
    id: 4,
    category: "Core Expertise",

    title: "Operational Excellence",

    description:
      "Use real-time operational intelligence to improve efficiency and reduce risk.",

    animation: excellenceAnimation,
  },
];

export default expertiseSlides;