import { Metadata } from "next";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { services, serviceCategories } from "@/data/services";
import { Sparkles, Scissors, Heart, Palette, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore our comprehensive range of beauty services including ${services.map(s => s.name.toLowerCase()).join(', ')}. Professional makeup, hair styling, skincare, and more.`,
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Scissors,
  Heart,
  Palette,
  Crown,
};

export default function ServicesPage() {
  const makeupServices = services.filter(s => s.category === 'Makeup');
  const hairServices = services.filter(s => s.category === 'Hair');
  const skinServices = services.filter(s => s.category === 'Skin');
  const nailServices = services.filter(s => s.category === 'Nails');
  const bridalServices = services.filter(s => s.category === 'Bridal');

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C58A73] to-[#D6B25E]">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover our comprehensive range of beauty treatments and services
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-[#F8E8EA]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => {
              const Icon = iconMap[category.icon] || Sparkles;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-5 h-5 text-[#C58A73]" />
                  <span className="font-medium text-[#333333]">{category.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Makeup Services */}
      <section id="makeup" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Makeup Services"
            subtitle="Expert makeup artistry for every occasion"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {makeupServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Hair Services */}
      <section id="hair" className="section-padding bg-[#F8E8EA]">
        <div className="container-custom">
          <SectionHeading
            title="Hair Services"
            subtitle="Transform your look with expert hair styling"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Skin Services */}
      <section id="skin" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Skin Services"
            subtitle="Rejuvenate your skin with our护理 treatments"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skinServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Nails Services */}
      <section id="nails" className="section-padding bg-[#F8E8EA]">
        <div className="container-custom">
          <SectionHeading
            title="Nail Services"
            subtitle="Perfect your look with beautiful nail art"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nailServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Services */}
      <section id="bridal" className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Bridal Services"
            subtitle="Make your special day unforgettable"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bridalServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
