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