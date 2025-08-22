'use client';

import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <>
      <MainHeader />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FooterSection />
    </>
  );
}
