import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what our clients say about their experience with Dazzle Beauty Parlour. Real reviews from real customers.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C58A73] to-[#D6B25E]">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Client Reviews
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Real experiences from our valued clients
          </p>
        </div>
      </section>

      {/* Google Rating */}
      <section className="py-12 bg-[#F8E8EA]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#333333]">4.9</div>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 star-filled fill-current" />
                  ))}
                </div>
                <div className="text-gray-600 mt-1">5,000+ Reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#4285F4]">G</span>
              </div>
              <div>
                <div className="font-bold text-[#333333]">Google Reviews</div>
                <div className="text-gray-600">Rated by our loyal clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real stories from real beauty lovers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="section-padding bg-[#333333]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 text-[#D6B25E] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Share Your Experience
            </h2>
            <p className="text-white/80 mb-8">
              Had a wonderful experience at Dazzle? We'd love to hear from you! Share your review on Google and help others discover our services.
            </p>
            <a
              href="https://g.page/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C58A73] to-[#D6B25E] text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              <Star className="w-5 h-5" />
              Write a Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C58A73]">5000+</div>
              <div className="text-gray-600 mt-2">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C58A73]">4.9</div>
              <div className="text-gray-600 mt-2">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C58A73]">98%</div>
              <div className="text-gray-600 mt-2">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#C58A73]">10+</div>
              <div className="text-gray-600 mt-2">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
