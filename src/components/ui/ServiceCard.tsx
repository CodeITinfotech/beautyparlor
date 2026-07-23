'use client';

import Image from 'next/image';
import { Service } from '@/types';
import { Button } from './Button';
import { Clock, Sparkles } from 'lucide-react';
import { generateWhatsAppLink, generateAppointmentMessage } from '@/lib/utils';
import { useState } from 'react';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleBook = () => {
    const message = generateAppointmentMessage({
      name: '',
      phone: '',
      email: '',
      service: service.name,
      date: '',
      time: '',
    });
    const whatsappLink = generateWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
  };

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8E8EA] to-[#F3D5D7] flex items-center justify-center">
          <Sparkles className={`w-16 h-16 text-[#C58A73] transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
        </div>
        {service.price && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#C58A73] to-[#D6B25E] text-white px-4 py-2 rounded-full text-sm font-semibold">
            {service.price}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span className="px-3 py-1 bg-[#F8E8EA] text-[#C58A73] rounded-full">
            {service.category}
          </span>
          {service.duration && (
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {service.duration}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-[#333333] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          {service.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {service.description}
        </p>
        <Button onClick={handleBook} className="w-full">
          Book Now
        </Button>
      </div>
    </div>
  );
}
