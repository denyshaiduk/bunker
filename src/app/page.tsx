import { AtmosphereGallery } from "@/components/AtmosphereGallery";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MenuSection />
      <AtmosphereGallery />
      <ContactSection />
    </>
  );
}

