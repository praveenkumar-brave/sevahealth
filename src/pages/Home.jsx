import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import VideoSection from "@/components/VideoSection/VideoSection";
import IManage from "@/components/IManage/IManage";
import HighlightText from "@/components/HighlightText/HighlightText";
import Benefits from "@/components/Benefits/Benefits";
import CoreExpertise from "@/components/CoreExpertise/CoreExpertise";
import WhySeva from "@/components/WhySeva/WhySeva";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import BenefitsList from "@/components/BenefitsList/BenefitsList";
import careAnimation from "@/assets/lottie/fealist-anim1.json";
import reportAnimation from "@/assets/lottie/fealist-anim2.json";
import mobileAnimation from "@/assets/lottie/fealist-anim3.json";
import Approach from "@/components/Approach/Approach";
import circuitBg from "@/assets/images/circuit-bg.png";
export default function Home() {
  const benefits = [

    {
      title:"Managing 24/7 Facility Care",
  
      description:
        "End the chaos of messy shift hand-offs and lost paper binders.",
  
      lottie:careAnimation,
    },
  
    {
      title:"Eliminate Duplicate Data Entry",
  
      description:
        "Stop wasting hours rewriting the same daily group notes.",
  
      lottie:reportAnimation,
  
      className:"gradient",
    },
  
    {
      title:"Documenting Care in the Field",
  
      description:
        "Turn lost administrative hours into instant documentation.",
  
      lottie:mobileAnimation,
    },
  
  ];
  return (
    <>
      <Navbar />

      <Hero />

      <VideoSection />

      <Approach

    badge="Our Approach"

    title="Our Approach"

    description="Centralize your paper desk, automate staff credentialing, and ensure your agency is audit-ready 24/7."

    description2="Preparing for state, federal, or internal audits means days of chasing down missing progress notes and paperwork."

    buttonText="Explore More"

    background={circuitBg}

    nodes={[

        {
            text:"Designs",
            className:"n1",
        },

        {
            text:"Compliant",
            className:"n2",
        },

        {
            text:"Respite Care",
            className:"n3",
        },

        {
            text:"In Home Support",
            className:"n4",
        },

        {
            text:"Services",
            className:"n5",
        },

        {
            text:"Practical",
            className:"n6",
        },

        {
            text:"Day Programs",
            className:"n7",
        },

    ]}

/>

      <IManage />

      <HighlightText />
      
      <BenefitsList
          title="What"
          highlight="Benefits"
          titleend="do you get?"
          description="Here are three benefits that you can get with SEVA Health."
          cards={benefits}
        />

      <Benefits />

      <CoreExpertise />

      <WhySeva />

      <CTA />
    </>
  );
}