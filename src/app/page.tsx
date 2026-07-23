import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <GalleryPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
