'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { businessInfo } from '@/data/business';
import { services } from '@/data/services';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { generateWhatsAppLink, generateEmailLink, generateAppointmentEmailBody } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    const packageName = params.get('package');
    if (service) setFormData(prev => ({ ...prev, service }));
    if (packageName) setFormData(prev => ({ ...prev, service: packageName }));
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;
    
    const message = `Hello ${businessInfo.name},\n\nI would like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\n${formData.email ? `Email: ${formData.email}\n` : ''}Service: ${formData.service}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\n${formData.message ? `Additional Notes: ${formData.message}\n` : ''}\nKindly confirm availability.`;
    
    const link = generateWhatsAppLink(message);
    window.open(link, '_blank');
    setStatus('success');
  };

  const handleEmail = () => {
    if (!validateForm()) return;
    
    const { subject, body } = generateAppointmentEmailBody({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      date: formData.date,
      time: formData.time,
      message: formData.message,
    });
    
    const link = generateEmailLink(businessInfo.email, subject, body);
    window.location.href = link;
    setStatus('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C58A73] to-[#D6B25E]">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with us to book your appointment
          </p>
        </div>
      </section>

      <section id="booking" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                title="Get in Touch"
                subtitle="We'd love to hear from you"
                centered={false}
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F8E8EA] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#C58A73]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#333333] mb-1">Address</h4>
                    <p className="text-gray-600">{businessInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F8E8EA] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#C58A73]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#333333] mb-1">Phone</h4>
                    <a href={`tel:${businessInfo.phone}`} className="text-gray-600 hover:text-[#C58A73]">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F8E8EA] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#C58A73]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#333333] mb-1">Email</h4>
                    <a href={`mailto:${businessInfo.email}`} className="text-gray-600 hover:text-[#C58A73]">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F8E8EA] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#C58A73]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#333333] mb-1">Business Hours</h4>
                    <div className="text-gray-600 text-sm">
                      {Object.entries(businessInfo.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="capitalize">{day}</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-72">
                <iframe
                  src={businessInfo.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[#C58A73] hover:text-[#D6B25E] font-medium"
              >
                <MapPin className="w-5 h-5" />
                Get Directions on Google Maps
              </a>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-[#333333] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Book an Appointment
                </h3>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">Your booking request is ready! Use the buttons below to send it.</span>
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#C58A73] focus:border-transparent`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#C58A73] focus:border-transparent`}
                        placeholder="Your phone number"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C58A73] focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#C58A73] focus:border-transparent`}
                    >
                      <option value="">Select a service</option>
                      {services.map(s => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.date ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#C58A73] focus:border-transparent`}
                      />
                      {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.time ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#C58A73] focus:border-transparent`}
                      >
                        <option value="">Select time</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                      </select>
                      {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#C58A73] focus:border-transparent"
                      placeholder="Any special requests or notes..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button onClick={handleWhatsApp} className="flex-1 bg-[#25D366] hover:bg-[#128C7E]">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book via WhatsApp
                    </Button>
                    <Button onClick={handleEmail} variant="outline" className="flex-1">
                      <Send className="w-5 h-5 mr-2" />
                      Book via Email
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
