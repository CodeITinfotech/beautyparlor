'use client';

import Link from 'next/link';
import { Sparkles, MapPin, Phone, Mail, Clock, Star, Heart } from 'lucide-react';
import { businessInfo } from '@/data/business';

const BASE_PATH = '/beautyparlor';

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-[#C58A73]" />
              <span className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Dazzle
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              {businessInfo.description}
            </p>
            <div className="flex gap-4">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#C58A73]/20 flex items-center justify-center hover:bg-[#C58A73] transition-colors"
                aria-label="Instagram"
              >
                <Star className="w-5 h-5" />
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#C58A73]/20 flex items-center justify-center hover:bg-[#C58A73] transition-colors"
                aria-label="Facebook"
              >
                <Heart className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: `${BASE_PATH}/`, label: 'Home' },
                { href: `${BASE_PATH}/about`, label: 'About Us' },
                { href: `${BASE_PATH}/services`, label: 'Services' },
                { href: `${BASE_PATH}/bridal-packages`, label: 'Bridal Packages' },
                { href: `${BASE_PATH}/gallery`, label: 'Gallery' },
                { href: `${BASE_PATH}/contact`, label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#D6B25E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Business Hours
            </h3>
            <ul className="space-y-3">
              {Object.entries(businessInfo.hours).map(([day, hours]) => (
                <li key={day} className="flex justify-between text-gray-400">
                  <span className="capitalize">{day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C58A73] mt-1 flex-shrink-0" />
                <span className="text-gray-400">{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C58A73] flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-gray-400 hover:text-[#D6B25E]">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C58A73] flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-gray-400 hover:text-[#D6B25E]">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href={`${BASE_PATH}/privacy`} className="text-gray-400 hover:text-[#D6B25E]">
                Privacy Policy
              </Link>
              <Link href={`${BASE_PATH}/terms`} className="text-gray-400 hover:text-[#D6B25E]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
