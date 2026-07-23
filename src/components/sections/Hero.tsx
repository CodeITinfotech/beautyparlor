'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { businessInfo } from '@/data/business';
import { generateWhatsAppLink } from '@/lib/utils';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const handleWhatsApp = () => {
    const message = `Hello ${businessInfo.name}! I'm interested in your services and would like to book an appointment.`;
    const link = generateWhatsAppLink(message);
    window.open(link, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C58A73] via-[#D6B25E] to-[#F8E8EA]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D6B25E] rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-8">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Welcome to {businessInfo.name}</span>
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Reveal Your Natural{' '}
          <span className="text-[#F8E8EA]">Beauty</span> with Professional Makeup & Beauty Services
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Professional Bridal Makeup, Party Makeup, Hair Styling, Skin Care and Beauty Treatments.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/contact#booking">
            <Button size="lg" className="bg-white text-[#C58A73] hover:bg-[#F8E8EA] hover:text-[#333333]">
              Book Appointment
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={handleWhatsApp}
            className="border-white text-white hover:bg-white hover:text-[#C58A73]"
          >
            <span className="flex items-center gap-2">
              WhatsApp Now
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
          <a href={`tel:${businessInfo.phone}`}>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/20">
              Call Now
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '5000+', label: 'Happy Clients' },
            { number: '50+', label: 'Services' },
            { number: '4.9', label: 'Google Rating' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
              <div className="text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
