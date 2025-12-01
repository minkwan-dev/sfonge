import React from "react";
import { PageContainer } from "../components/shared";
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  HowItWorksSection,
  CTASection,
} from "../components/landing";

const Landing = () => {
  return (
    <PageContainer>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </PageContainer>
  );
};

export default Landing;
