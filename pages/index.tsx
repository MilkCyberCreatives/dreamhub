// pages/index.tsx
import Head from "next/head";
import MainHeader from "@/components/MainHeader";
import HeroSection from "@/components/HeroSection";
import WhyDreamhubSection from "@/components/WhyDreamhubSection";
import CampSection from "@/components/CampSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import CTABookSection from "@/components/CTABookSection";
import FooterSection from "@/components/FooterSection";

export default function HomePage() {
  const siteUrl = "https://dreamhub.co.za";
  const ogImage = `${siteUrl}/images/hero/img1.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Dreamhub",
        url: siteUrl,
        logo: `${siteUrl}/dreamhub-logo.svg`,
        email: "info@dreamhub.co.za",
        telephone: "+27128833536",
        address: {
          "@type": "PostalAddress",
          addressCountry: "ZA",
        },
      },
      {
        "@type": "WebSite",
        name: "Dreamhub",
        url: siteUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Dreamhub - Transforming Teen Lives in South Africa</title>
        <meta
          name="description"
          content="Join South Africa’s most impactful youth programs. Dreamhub empowers teens with confidence, discipline, and purpose. Enroll in our camps today!"
        />
        <meta
          name="keywords"
          content="Dreamhub, Teen Camps, South Africa Youth Programs, Disciplinary Camp, Empowerment Camp, Youth Development, Teen Growth Programs"
        />
        <meta name="author" content="Dreamhub NPC" />
        <meta name="robots" content="index,follow" />

        {/* Canonical */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dreamhub - Empowering South African Teens" />
        <meta
          property="og:description"
          content="Discipline. Confidence. Growth. Join South Africa's most impactful youth programs and transform your teen's life today."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Dreamhub" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dreamhub - Empowering South African Teens" />
        <meta
          name="twitter:description"
          content="Discipline. Confidence. Growth. Join South Africa's most impactful youth programs and transform your teen's life today."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="relative min-h-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0" />

        <div className="relative z-10">
          <MainHeader />
          <HeroSection />
          <WhyDreamhubSection />
          <CampSection />
          <VideoSection />
          <GallerySection />
          <CTABookSection />
          <FooterSection />
        </div>
      </main>
    </>
  );
}
