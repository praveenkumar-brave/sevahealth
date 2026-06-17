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

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <VideoSection />

      <IManage />

      <HighlightText />

      <Benefits />

      <CoreExpertise />

      <WhySeva />

      <CTA />

      <Footer />
    </>
  );
}