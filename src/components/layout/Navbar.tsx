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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHero
          ? 'bg-white/98 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className={`w-8 h-8 ${isScrolled || !isHero ? 'text-[#C58A73]' : 'text-white'}`} />
            <span 
              className={`text-xl font-bold ${isScrolled || !isHero ? 'text-[#333333]' : 'text-white'}`}
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
                  isScrolled || !isHero ? 'text-[#333333]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${businessInfo.phone}`}>
              <Button variant={isScrolled || !isHero ? 'outline' : 'secondary'} size="sm">
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className={isScrolled || !isHero ? 'text-[#333333]' : 'text-white'} />
            ) : (
              <Menu className={isScrolled || !isHero ? 'text-[#333333]' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-custom py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#333333] font-medium py-2 hover:text-[#D6B25E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t">
              <a href={`tel:${businessInfo.phone}`}>
                <Button className="w-full">Call Now</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
