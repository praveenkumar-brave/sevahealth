import qualityAnimation from "@/assets/lottie/anim5.json";
import incidentAnimation from "@/assets/lottie/anim6.json";
import complianceAnimation from "@/assets/lottie/anim7.json";
import excellenceAnimation from "@/assets/lottie/anim8.json";

const expertiseSlides = [
  {
    id: 1,
    category: "Core Expertise",

    title: "Audit Readiness",
    subtitletxt:"& Risk Management",
    description:
      "We help healthcare agencies strengthen compliance processes and improve preparedness for state reviews and operational audits. Our approach supports better documentation management, risk awareness, and regulatory alignment.",
    animation: qualityAnimation,
  },

  {
    id: 2,
    category: "Core Expertise",

    title: "Secure Information",
    subtitletxt:"Management",
    description:
      "We help healthcare agencies strengthen compliance processes and improve preparedness for state reviews and operational audits. Our approach supports better documentation management, risk awareness, and regulatory alignment.",
    animation: incidentAnimation,
  },

  {
    id: 3,
    category: "Core Expertise",

    title: "Smart Agency",
    subtitletxt:"Analytics",
    description:
      "We provide clear operational insights that help leadership teams make informed staffing and performance decisions. Our analytics approach supports better planning, visibility, and operational efficiency.",

    animation: complianceAnimation,
  },

  {
    id: 4,
    category: "Core Expertise",

    title: "Operational",
    subtitletxt:"Consulting",
    description:
      "We work with healthcare agencies to improve workflows and align daily operations with long-term organizational goals. Our consulting focuses on efficiency, scalability, and sustainable operational improvements.",

    animation: excellenceAnimation,
  },
];

export default expertiseSlides;