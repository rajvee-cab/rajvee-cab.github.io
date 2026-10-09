'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Car,
  Route,
  Star,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Fleet & Rates', href: '/#cars' },
    { label: 'Services', href: '/#services' },
    { label: 'Popular Routes', href: '/#routes' },
    { label: 'Gujarat Network', href: '/#coverage' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-all duration-200 ${
          isScrolled ? 'shadow-2xl py-0' : 'shadow-md'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px] sm:h-[76px]">
            
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <div className="relative h-9 sm:h-11 w-36 sm:w-48">
                <Image
                  src="/frontend/imgs/logo-w.png"
                  alt="Rajvee Cab"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links (xl screens: >= 1280px) */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-[13px] 2xl:text-[14px] font-semibold text-slate-200">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="hover:text-amber-400 transition-colors py-1 relative group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Right Action Items */}
            <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
              
              {/* Phone Call Box (hidden on mobile, visible on sm and up) */}
              <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left leading-tight">
                  <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    24x7 Available
                  </div>
                  <a
                    href="tel:+919737872972"
                    className="text-xs sm:text-[13px] 2xl:text-[14px] font-bold text-white hover:text-amber-400 transition tracking-wide"
                  >
                    +91 97378 72972
                  </a>
                </div>
              </div>

              {/* WhatsApp Button (always visible, compact on mobile) */}
              <a
                href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline sm:inline">WhatsApp</span>
              </a>

              {/* Hamburger Button for mobile, tablet & laptop (< xl) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 rounded-xl text-slate-200 hover:text-amber-400 hover:bg-slate-800 transition cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-white" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Slide-over Mobile/Tablet Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          {/* Drawer Panel */}
          <div
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-slate-950 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800 mb-4">
                <div className="relative h-8 w-32">
                  <Image
                    src="/frontend/imgs/logo-w.png"
                    alt="Rajvee Cab"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav className="space-y-1">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Contact Card */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  24x7 Booking Helpline
                </div>
                <a
                  href="tel:+919737872972"
                  className="text-base font-black text-white hover:text-amber-400 transition block"
                >
                  +91 97378 72972
                </a>
                <p className="text-[11px] text-slate-400 m-0 mt-1">
                  Greenland Chokdi, Rajkot, Gujarat
                </p>
              </div>

              <a
                href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-center font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
