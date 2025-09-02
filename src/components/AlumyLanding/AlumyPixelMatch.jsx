import React from 'react';
import SubNav from "./SubNav";
import HeroSection from "./HeroSection";
import DetailsSection from "./DetailsSection";
import FeatureSection1 from "./FeatureSection1";
import FeatureSection2 from "./FeatureSection2";
import ColorsSection from "./ColorsSection";
import FeatureSection4 from "./FeatureSection4";
import SizeSection from "./SizeSection";
import SpecSection from "./SpecSection";
import ContactSection from "./ContactSection";
import MobileBottomBar from "./MobileBottomBar";
import PageFooter from "./PageFooter";

export default function AlumyPixelMatch() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <HeroSection />
      <SubNav />
      <DetailsSection />
      <FeatureSection1 />
      <FeatureSection2 />
      <ColorsSection />
      <FeatureSection4 />
      <SizeSection />
      <SpecSection />
      <ContactSection />
      <MobileBottomBar />
      <PageFooter />
    </main>
  );
}
