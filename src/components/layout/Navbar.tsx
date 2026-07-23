'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { businessInfo } from '@/data/business';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/bridal-packages', label: 'Bridal' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsHero(window.scrollY < 100);
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

  const navColor = isScrolled || !isHero;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        navColor
          ? 'bg-white/98 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 z-[9999]">
            <Sparkles className={`w-8 h-8 ${navColor ? 'text-[#C58A73]' : 'text-white'}`} />
            <span 
              className={`text-xl font-bold ${navColor ? 'text-[#333333]' : 'text-white'}`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Dazzle
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-[#D6B25E] ${
                  navColor ? 'text-[#333333]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${businessInfo.phone}`}>
              <Button variant={navColor ? 'outline' : 'secondary'} size="sm">
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button - Always visible */}
          <button
            className={`lg:hidden p-2 z-[9999] relative ${
              navColor ? 'text-[#333333]' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            style={{ touchAction: 'manipulation' }}
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
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ zIndex: 9998 }}
      >
        <div className="container-custom py-8">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#333333] font-medium py-3 text-lg hover:text-[#D6B25E] transition-colors border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-6">
              <a href={`tel:${businessInfo.phone}`} className="w-full">
                <Button className="w-full text-lg py-4">Call Now</Button>
              </a>
              <a href={`https://wa.me/${businessInfo.whatsapp}`} className="w-full">
                <Button variant="secondary" className="w-full text-lg py-4">WhatsApp</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
