import servWhy1 from "@/assets/lottie/whyits-icon1.json";



const residentialCareData = {
    hero: {
      title:
        "Residential Care Services",
  
      subtitle:
        "Smarter Residential Care Management",
  
      description:
        "Managing residential care means handling appointments, medications, staff coordination, daily documentation, and compliance — all at the same time. SEVA Health iManage helps residential providers simplify operations while ensuring every resident receives consistent and well-coordinated care."
    },
  
    intro: {
      label:
        "Residential Care",
  
      title:
        "Smarter Residential Care Management",
  
      description:
        "SEVA Health iManage helps residential providers simplify operations while ensuring every resident receives consistent and well-coordinated care.",
  
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
        "Schedule and track medical appointments with automated follow-up reminders",
        "Maintain complete resident records in one secure platform",
        "Monitor care activities across multiple residential locations",
        "Access audit-ready documentation anytime",
        "Reduce paperwork and improve communication between staff teams"
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
        servWhy1,
  
      description:
        "No more missed appointments, scattered records, or compliance stress. Your residential care team stays organized, connected, and fully prepared for inspections and daily operations."
    },
    featureGridCard: [
        {
        
            title: "Schedule and Track",
            description:
              "Schedule and track medical appointments with automated follow-up reminders.",
            className: "bg-teal",
            // icon: "../assets/images/grid-icon1.svg",
            linkText: "Try Now",
            size: "small",
            width: "30",
          },
      
          {
            title: "Reduce Paperwork",
            description:
              "Maintain complete resident records in one secure platform.",
            className: "bg-purple",
            icon: "../assets/images/grid-icon2.svg",
            linkText: "Try Now",
            size: "large",
            width: "70",
          },
      
          {
            title: "Secure Platform",
            description:
              "Monitor care activities across multiple locations.",
            description2:
              "Improve communication between staff teams.",
            className: "bg-orange",
            icon: "../assets/images/grid-icon1.svg",
            linkText: "Try Now",
            size: "large",
            width: "70",
          },
      
          {
            title: "Audit Ready",
            description:
              "Access audit-ready documentation anytime.",
            className: "bg-pink",
            icon: "../assets/images/grid-icon3.svg",
            linkText: "Try Now",
            size: "small",
            width: "30",
          },
    ]
  };
  
  export default residentialCareData;