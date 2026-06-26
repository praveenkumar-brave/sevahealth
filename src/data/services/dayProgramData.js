import servWhy2 from "@/assets/lottie/whyits-icon2.json";



const dayProgramData = {
    hero: {
      title:
        "Day Program Services",
  
      subtitle:
        "Empowering Staff & Strengthening Compliance",
  
      description:
        "SEVA Health is built for organizations that deliver care every day—where every detail matters, every record counts, and every minute is valuable."
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
        "Manage employee training and certification records digitally",
        "Receive alerts for expiring certifications and compliance deadlines",
        "Track participant attendance and daily activities efficiently",
        "Generate customized reports for audits and operational reviews",
        "Assign secure role-based system access for staff and supervisors"
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
        servWhy2,
  
      description:
        "Your organization stays compliant, your staff remain up to date with required certifications, and your team spends less time managing administrative tasks."
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
  
  export default dayProgramData;