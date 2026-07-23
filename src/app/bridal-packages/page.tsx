import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { bridalPackages } from "@/data/services";
import { businessInfo } from "@/data/business";
import { Check, Crown, Diamond, Award, Gem } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bridal Packages",
  description: "Choose from our exclusive bridal makeup packages - Silver, Gold, Diamond, and Platinum. Complete wedding beauty solutions for your special day.",
};

const packageIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  silver: Award,
  gold: Crown,
  diamond: Diamond,
  platinum: Gem,
};

export default function BridalPackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C58A73] to-[#D6B25E]">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Bridal Packages
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Complete bridal beauty solutions for your special day
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Your Perfect Wedding Look"
              subtitle="From engagement to reception, we've got you covered"
              centered
            />
            <p className="text-gray-600 mb-8">
              Your wedding day is one of the most important days of your life, and you deserve to look absolutely stunning. Our bridal packages are designed to provide complete beauty solutions, ensuring you feel confident and beautiful from the first ceremony to the last.
            </p>
            <p className="text-gray-600">
              Each package includes premium products, experienced artists, and personalized attention to create your dream look. We also offer complimentary trial sessions to perfect your bridal appearance before the big day.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-[#F8E8EA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bridalPackages.map((pkg, index) => {
              const Icon = packageIcons[pkg.id] || Crown;
              return (
                <div
                  key={pkg.id}
                  className={`relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover ${
                    pkg.highlighted ? 'ring-4 ring-[#D6B25E] md:-mt-4 md:mb-4' : ''
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#C58A73] to-[#D6B25E] text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-8 ${pkg.highlighted ? 'pt-16' : ''}`}>
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                      pkg.id === 'platinum' ? 'bg-gradient-to-br from-gray-700 via-gray-600 to-[#D6B25E]' :
                      pkg.id === 'diamond' ? 'bg-gradient-to-br from-[#E8E8E8] to-[#B8B8B8]' :
                      pkg.id === 'gold' ? 'bg-gradient-to-br from-[#D6B25E] to-[#F0D78C]' :
                      'bg-gradient-to-br from-[#C0C0C0] to-[#E8E8E8]'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-center text-[#333333] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {pkg.name}
                    </h3>
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold text-[#C58A73]">{pkg.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600">
                          <Check className="w-5 h-5 text-[#D6B25E] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                      className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                        pkg.highlighted
                          ? 'bg-gradient-to-r from-[#C58A73] to-[#D6B25E] text-white hover:shadow-lg'
                          : 'bg-[#F8E8EA] text-[#C58A73] hover:bg-[#C58A73] hover:text-white'
                      }`}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="What's Included"
            subtitle="Every package comes with these essentials"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Premium Products', desc: 'International brands like MAC, Huda Beauty, Charlotte Tilbury' },
              { title: 'Expert Artists', desc: 'Certified makeup artists with bridal specialization' },
              { title: 'Hygiene First', desc: 'Sanitized tools and fresh products for every client' },
              { title: 'Touch-up Kit', desc: 'Essential touch-up items for the event' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F8E8EA] flex items-center justify-center">
                  <Crown className="w-8 h-8 text-[#C58A73]" />
                </div>
                <h4 className="text-lg font-bold text-[#333333] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#333333]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Book Your Bridal Package?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your consultation and trial session. We're here to make your wedding beauty dreams come true.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#C58A73] to-[#D6B25E] text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Book Consultation
            </Link>
            <a
              href={`tel:${businessInfo.phone}`}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#333333] transition-all"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
