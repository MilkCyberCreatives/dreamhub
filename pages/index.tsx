import MainHeader from '@/components/MainHeader';
import HeroSection from '@/components/HeroSection';
import WhyDreamhubSection from '@/components/WhyDreamhubSection';
import CampSection from '@/components/CampSection';
import VideoSection from '@/components/VideoSection';
import GallerySection from '@/components/GallerySection';
import CTABookSection from '@/components/CTABookSection';
import FooterSection from '@/components/FooterSection';

export default function HomePage() {
  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0" />

      {/* Content (MainHeader + HeroSection) */}
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
  );
}
