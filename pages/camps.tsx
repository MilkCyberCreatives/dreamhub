'use client';

import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';
import CampsHero from '@/components/camps/CampsHero';
import CampList from '@/components/camps/CampList';
import WhyChooseUs from '@/components/camps/WhyChooseUs';
import TestimonialsSection from '@/components/camps/TestimonialsSection';
import FAQSection from '@/components/camps/FAQSection';

export default function CampsPage() {
  return (
    <>
      <MainHeader />
      <CampsHero />
      <CampList />
      <WhyChooseUs />
      <FAQSection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}
