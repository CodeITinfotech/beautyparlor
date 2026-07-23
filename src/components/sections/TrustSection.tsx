'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  Award, Users, Shield, Heart, Sparkles, Clock 
} from 'lucide-react';

const trustPoints = [
  {
    icon: Award,
    title: 'Professional Artists',
    description: 'Trained and certified makeup artists with years of experience',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    description: 'We use only high-quality international beauty products',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'A dedicated team of beauty experts at your service',
  },
  {
    icon: Shield,
    title: 'Affordable Pricing',
    description: 'Luxury beauty services at competitive prices',
  },
  {
    icon: Heart,
    title: 'Hygienic Environment',
    description: 'Clean, sanitized tools and workspace for your safety',
  },
  {
    icon: Clock,
    title: 'Customized Solutions',
    description: 'Personalized beauty treatments to match your unique needs',
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-[#F8E8EA]">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Experience the Dazzle difference with our commitment to excellence"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 text-center card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#C58A73] to-[#D6B25E] flex items-center justify-center group-hover:scale-110 transition-transform">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
