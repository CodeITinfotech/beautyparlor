'use client';

import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { businessInfo } from '@/data/business';
import { generateWhatsAppLink } from '@/lib/utils';

export function FloatingButtons() {
  const handleWhatsApp = () => {
    const message = `Hello ${businessInfo.name}! I'm interested in your services.`;
    const link = generateWhatsAppLink(message);
    window.open(link, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  const handleBook = () => {
    window.location.href = '/contact#booking';
  };

  return (
    <div className="floating-buttons">
      <button
        onClick={handleBook}
        className="floating-btn bg-gradient-to-r from-[#C58A73] to-[#D6B25E]"
        aria-label="Book Appointment"
      >
        <Calendar className="w-6 h-6" />
      </button>
      <button
        onClick={handleCall}
        className="floating-btn bg-[#333333] hover:bg-[#C58A73]"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </button>
      <button
        onClick={handleWhatsApp}
        className="floating-btn bg-[#25D366] hover:bg-[#128C7E] animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
