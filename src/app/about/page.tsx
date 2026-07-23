import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { businessInfo } from "@/data/business";
import { Award, Heart, Sparkles, Users, Target, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${businessInfo.name} - Our story, mission, vision, and the expert team behind your beauty transformations.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C58A73] to-[#D6B25E]">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover the passion and expertise behind {businessInfo.name}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8E8EA] text-[#C58A73] rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                A Journey of Beauty & Excellence
              </h2>
              <p className="text-gray-600 mb-4">
                Founded over a decade ago, {businessInfo.name} began as a small dream to create a space where everyone could feel beautiful and confident. What started as a modest studio has grown into one of the most trusted names in beauty services.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, a certified makeup artist with a passion for bringing out the natural beauty in everyone, envisioned a studio where artistry meets hospitality. Today, we continue that legacy with every client who walks through our doors.
              </p>
              <p className="text-gray-600">
                With over 10 years of experience and thousands of happy clients, we have established ourselves as experts in bridal makeup, party styling, and comprehensive beauty treatments. Our commitment to using premium products and staying updated with the latest trends ensures you always receive the best.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#F8E8EA] to-[#E8D5D8] rounded-2xl flex items-center justify-center">
                <Heart className="w-32 h-32 text-[#C58A73]" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="text-4xl font-bold text-[#C58A73]">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#F8E8EA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C58A73] to-[#D6B25E] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide exceptional beauty services that enhance natural beauty, boost confidence, and create memorable experiences. We are committed to using premium products, maintaining the highest hygiene standards, and delivering personalized care to every client.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C58A73] to-[#D6B25E] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the preferred destination for beauty services, known for our artistic excellence, innovative techniques, and warm hospitality. We aspire to inspire confidence and celebrate individuality through the art of beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Excellence', desc: 'We strive for the highest quality in everything we do' },
              { icon: Heart, title: 'Passion', desc: 'Our love for beauty drives us to excel' },
              { icon: Users, title: 'Client-First', desc: 'Your satisfaction is our top priority' },
              { icon: Sparkles, title: 'Innovation', desc: 'We stay updated with latest trends and techniques' },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F8E8EA] flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#C58A73]" />
                </div>
                <h4 className="text-xl font-bold text-[#333333] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding bg-[#333333]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D6B25E]">5000+</div>
              <div className="text-white/70 mt-2">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D6B25E]">50+</div>
              <div className="text-white/70 mt-2">Services</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D6B25E]">15+</div>
              <div className="text-white/70 mt-2">Expert Artists</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D6B25E]">4.9</div>
              <div className="text-white/70 mt-2">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
