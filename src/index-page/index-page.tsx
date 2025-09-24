

import ContactSection from "../components/index-page/contact-us";
import Gallery from "../components/index-page/gallery";
import HeroSection from "../components/index-page/hero-section";
import MissionVision from "../components/index-page/mission-vision";
import OurFacilities from "../components/index-page/our-facilities";

export default function RiversResidenceIndex() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <OurFacilities />
      <Gallery />
      <MissionVision />
      <ContactSection />
    </div>
  );
}
