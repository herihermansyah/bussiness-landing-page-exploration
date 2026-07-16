import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import CtaBannerSection from "@/components/sections/cta-banner-section";
import HeroSection from "@/components/sections/hero-section";
import ServiceSection from "@/components/sections/service-section";
import TestimonialSection from "@/components/sections/testimonial-section";
import VissionMissionSection from "@/components/sections/vission-mission-section";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <VissionMissionSection />
      <TestimonialSection />
      <CtaBannerSection />
      <ContactSection />
    </div>
  );
};

export default page;
