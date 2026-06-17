import compliance from "@/assets/lottie/anim1.json";
import audits from "@/assets/lottie/anim2.json";
import incidents from "@/assets/lottie/anim31.json";
import reporting from "@/assets/lottie/anim4.json";

const slides = [
  {
    id: 1,

    title:
      "Digital eBinders & Continuous Compliance Monitoring",

    description:
      "We pull your data out of the filing cabinet. iManage centralizes all IPP/ISP web forms, medical reports, and incident tracking into secure digital eBinders. When auditors arrive, you don't hand them a box of messy files—you grant them secure, read-only access.",

    animation:
      compliance,
  },

  {
    id: 2,

    title:
      "Automated Credentialing & Training Hub.",

    description:
      "Never miss a renewal date again. Our Training & Development module automatically tracks staff certifications, sends expiration alerts, and even hosts online exams directly within the platform.",

    animation:
      audits,
  },

  {
    id: 3,

    title:
      "Proactive QA Ticketing & Incident Tracking",

    description:
      "Log incidents the second they happen. Our internal QA ticketing system alerts the right administrators instantly",

    animation:
      incidents,
  },

  {
    id: 4,

    title:
      "Smart Care Scheduling",

    description:
      "Replace vulnerable physical files with a secure, instant view of client records.",

    animation:
      reporting,
  },
];

export default slides;