'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { businessInfo } from '@/data/business';

const BASE_PATH = '/beautyparlor';

// Beauty Parlour Logo Component
function Logo({ isScrolled }: { isScrolled: boolean }) {
  const textColor = isScrolled ? 'text-[#C58A73]' : 'text-white';
  const accentColor = isScrolled ? '#C58A73' : '#D6B25E';
  
  return (
    <div className="flex items-center gap-3">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={textColor}>
        <rect x="18" y="8" width="12" height="20" rx="2" fill={accentColor} />
        <rect x="17" y="26" width="14" height="6" rx="1" fill={accentColor} />
        <rect x="16" y="31" width="16" height="8" rx="2" fill={isScrolled ? '#333' : '#fff'} />
        <path d="M21 8V4C21 2.89543 21.8954 2 23 2H25C26.1046 2 27 2.89543 27 4V8" stroke={accentColor} strokeWidth="2" />
        <circle cx="10" cy="12" r="2" fill={accentColor} className="animate-pulse" />
        <circle cx="38" cy="18" r="1.5" fill={accentColor} className="animate-pulse" />
        <circle cx="12" cy="38" r="1.5" fill={accentColor} className="animate-pulse" />
      </svg>
      <div>
        <span 
          className={`text-2xl font-bold ${isScrolled ? 'text-[#333333]' : 'text-white'}`}
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Dazzle
        </span>
        <span className={`block text-xs ${isScrolled ? 'text-[#C58A73]' : 'text-white/80'}`}>
          Beauty Parlour
        </span>
      </div>
    </div>
  );
}

const navLinks = [
  { href: `${BASE_PATH}/`, label: 'Home' },
  { href: `${BASE_PATH}/about`, label: 'About' },
  { href: `${BASE_PATH}/services`, label: 'Services' },
  { href: `${BASE_PATH}/bridal-packages`, label: 'Bridal' },
  { href: `${BASE_PATH}/gallery`, label: 'Gallery' },
  { href: `${BASE_PATH}/testimonials`, label: 'Reviews' },
  { href: `${BASE_PATH}/contact`, label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`${BASE_PATH}/`} className="flex items-center gap-2">
            <Logo isScrolled={true} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium transition-colors hover:text-[#D6B25E] text-[#333333]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${businessInfo.phone}`}>
              <Button variant="outline" size="sm">
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden p-2 text-[#333333] relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-[9998] overflow-y-auto">
          <div className="container-custom py-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#333333] font-medium py-3 text-lg hover:text-[#D6B25E] transition-colors border-b border-gray-100 block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-6">
              <a href={`tel:${businessInfo.phone}`} className="w-full">
                <Button className="w-full text-base py-3">📞 Call Now</Button>
              </a>
              <a href={`${BASE_PATH}/contact#booking`} className="w-full">
                <Button variant="secondary" className="w-full text-base py-3">📅 Book Appointment</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
