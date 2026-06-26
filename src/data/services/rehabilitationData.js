import servWhy3 from "@/assets/lottie/whyits-icon3.json";



const rehabilitationData = {
    hero: {
      title:
        "Rehabilitation Services",
  
      subtitle:
        "Faster Reporting. Better Outcomes.",
  
      description:
        "Rehabilitation providers manage detailed assessments, therapy plans, progress tracking, and outcome reporting every day. SEVA Health iManage helps rehabilitation teams simplify documentation while staying fully prepared for audits and reviews."
    },
  
    intro: {
      label:
        "Empowering Staff & Strengthening Compliance",
  
      title:
        "Empowering Staff & Strengthening Compliance",
  
      description:
        "Day programs require well-trained staff, accurate participant records, and ongoing compliance management. SEVA Health iManage helps organizations streamline staff training while maintaining government certification requirements with confidence.",
  
      images: [
        "../assets/images/res-img1.png",
        "../assets/images/res-img2.png",
        "../assets/images/res-img3.png",
      ]
    },
  
    capabilities: {
      image:
        "../assets/images/serv-big-img1.png",
  
      title:
        "With iManage, Your Team Can:",
  
      items: [
        "Create customized therapy forms and assessment templates",
        "Generate detailed progress and outcome reports instantly",
        "Centralize therapy documentation in one secure system",
        "Manage organization-wide credential access securely",
        "Maintain audit-ready records for inspections and compliance reviews"
      ]
    },
  
    benefits: {
      description:
        "Here are three benefits that you can get with Seva Health",
  
      items: [
        {
          title:
            "Reduce Paperwork",
  
          text:
            "Centralize all documentation."
        },
  
        {
          title:
            "Improve Compliance",
  
          text:
            "Stay inspection ready."
        }
      ]
    },
  
    whyMatters: {
      lottie:
        servWhy3,
  
      description:
        "Your rehabilitation team can focus more on client progress while iManage handles the complexity of reporting, compliance, and operational management."
    },
    featureGridCard: [
        {
        
            title: "Training",
            description:
              "Schedule and track medical appointments with automated follow-up reminders",
            className: "bg-teal",
            // icon: "../assets/images/grid-icon1.svg",
            linkText: "Try Now",
            size: "small",
            width: "30",
          },
      
          {
            title: "Secure",
            description:
              "Maintain complete resident records in one secure platform",
            className: "bg-purple",
            icon: "../assets/images/grid-icon2.svg",
            linkText: "Try Now",
            size: "large",
            width: "70",
          },
      
          {
            title: "Track Participant",
            description:
              "Monitor care activities across multiple residential locations",
            description2:
              "Reduce paperwork and improve communication between staff teams",
            className: "bg-orange",
            icon: "../assets/images/grid-icon1.svg",
            linkText: "Try Now",
            size: "large",
            width: "70",
          },
      
          {
            title: "Certifications",
            description:
              "Access audit-ready documentation anytime",
            className: "bg-pink",
            icon: "../assets/images/grid-icon3.svg",
            linkText: "Try Now",
            size: "small",
            width: "30",
          },
    ]
  };
  
  export default rehabilitationData;