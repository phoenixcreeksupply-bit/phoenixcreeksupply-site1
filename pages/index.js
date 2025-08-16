import Hero from "@/components/Hero";
import GearGallery from "@/components/GearGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero
        title="Rugged Tools for the Modern Stoic"
        subtitle="Digital kits. Bushcraft gear. Earn your legacy."
        ctaText="Buy the Field Guide"
        ctaLink="https://monroe.gumroad.com/l/modernstoic"
      />
      <GearGallery />
      <Footer />
    </>
  );
}
