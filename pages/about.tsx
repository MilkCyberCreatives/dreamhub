'use client';

import MainHeader from '@/components/MainHeader';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import OurImpact from '@/components/about/OurImpact';
import VisionMission from '@/components/about/VisionMission';
import FooterSection from '@/components/FooterSection';

export default function AboutPage() {
  return (
    <>
      <MainHeader />
      <AboutHero />
      <AboutIntro />
      <OurImpact />
      <VisionMission />
      <FooterSection />
    </>
  );
}
