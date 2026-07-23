'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { businessInfo } from '@/data/business';
import { generateWhatsAppLink, generateEmailLink, generateAppointmentEmailBody } from '@/lib/utils';
import { Sparkles, MessageCircle, Mail } from 'lucide-react';

export function CTASection() {
  const handleWhatsApp = () => {
    const message = `Hello ${businessInfo.name}! I'd like to book an appointment for beauty services.`;
    const link = generateWhatsAppLink(message);
    window.open(link, '_blank');
  };

  const handleEmail = () => {
    const { subject, body } = generateAppointmentEmailBody({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
    });
    const link = generateEmailLink(businessInfo.email, subject, body);
    window.location.href = link;
  };

  return (
    <section className="section-padding bg-gradient-to-br from-[#C58A73] via-[#D6B25E] to-[#C58A73] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-white rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Start Your Beauty Journey</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready for Your Transformation?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10">
            Book your appointment today and let our expert artists create the perfect look for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white text-[#C58A73] hover:bg-[#F8E8EA] hover:text-[#333333] w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            <Button
              onClick={handleEmail}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#C58A73] w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Book via Email
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
