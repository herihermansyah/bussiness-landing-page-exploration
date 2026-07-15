import AboutSection from "@/components/sections/about-section";
import HeroSection from "@/components/sections/hero-section";
import ServiceSection from "@/components/sections/service-section";
import VissionMissionSection from "@/components/sections/vission-mission-section";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <VissionMissionSection />
    </div>
  );
};

export default page;
