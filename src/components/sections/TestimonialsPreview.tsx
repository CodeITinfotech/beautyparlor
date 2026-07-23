'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { Button } from '@/components/ui/Button';
import { testimonials } from '@/data/testimonials';
import { ArrowRight, Star } from 'lucide-react';

export function TestimonialsPreview() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="section-padding bg-[#F8E8EA]">
      <div className="container-custom">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real reviews from real beauty lovers"
        />

        {/* Google Rating Badge */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <span className="font-bold text-2xl text-[#333333]">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 star-filled fill-current" />
              ))}
            </div>
          </div>
          <span className="text-gray-600 font-medium">Rated on Google</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/testimonials">
            <Button variant="outline" size="lg">
              <span className="flex items-center gap-2">
                View All Reviews
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
