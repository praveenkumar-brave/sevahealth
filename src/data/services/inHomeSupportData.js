
import servWhy5 from "@/assets/lottie/whyits-icon5.json";



const inHomeSupportData = {
    hero: {
      title:
        "In-Home Support Services",
  
      subtitle:
        "Connected Care Beyond the Office",
  
      description:
        "In-home support services require strong coordination between caregivers, supervisors, and administrators working across multiple locations. SEVA Health iManage keeps your entire workforce connected in real time."
    },
  
    intro: {
      label:
        "Respite Care",
  
      title:
        "Reliable Support When Families Need a Break",
  
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
        "Document services directly during home visits",
        "Track caregiver activities location by location",
        "Access customized forms designed for in-home support workflows",
        "Monitor completed visits and service delivery instantly",
        "Provide secure credential-based access for every staff role",
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
        servWhy5,
  
      description:
        "Agencies gain better visibility into daily operations, faster documentation completion, and improved service accountability across every client location."
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
  
  export default inHomeSupportData;