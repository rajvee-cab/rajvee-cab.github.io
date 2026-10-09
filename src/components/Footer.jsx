import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Clock, ExternalLink, Facebook, Instagram } from 'lucide-react';
import { formatWhatsAppGeneral } from '@/utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-10 sm:pt-16 pb-12 border-t border-slate-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3 Corporate Contact Pills */}
        <div className="mb-8 sm:mb-12 pb-8 sm:pb-10 border-b border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
            
            {/* Box 1: Call Us */}
            <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-slate-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider block">
                  24x7 Helpline
                </span>
                <a
                  href="tel:+919737872972"
                  aria-label="Call Rajvee Cab 24x7 helpline at +91 97378 72972"
                  className="text-sm sm:text-base text-white font-extrabold hover:text-amber-400 transition truncate block"
                >
                  +91 97378 72972
                </a>
              </div>
            </div>

            {/* Box 2: Write to Us */}
            <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-slate-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider block">
                  Email Support
                </span>
                <a
                  href="mailto:rajveecab@gmail.com"
                  aria-label="Email Rajvee Cab customer support at rajveecab@gmail.com"
                  className="text-sm sm:text-base text-white font-extrabold hover:text-amber-400 transition truncate block"
                >
                  rajveecab@gmail.com
                </a>
              </div>
            </div>

            {/* Box 3: Address */}
            <div className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-slate-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider block">
                  Main Office
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-semibold m-0 truncate">
                  Greenland Chokdi, Rajkot - 360003
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Middle Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="relative h-11 w-48 mb-5">
              <Image
                src="/frontend/imgs/logo-w.png"
                alt="Rajvee Cab"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Rajvee Cab is Gujarat&apos;s trusted one-way outstation and airport taxi service. Headquartered at Greenland Chokdi, Rajkot, offering transparent per-km billing, zero return charges, and polite verified chauffeurs.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={formatWhatsAppGeneral('WhatsApp Desk Support')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Rajvee Cab WhatsApp desk"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-600/40 text-xs font-bold hover:bg-emerald-600/30 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href="https://www.facebook.com/rajveecab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Rajvee Cab on Facebook"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition"
                title="Follow on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/rajveecab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Rajvee Cab on Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10 transition"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Major Gujarat Hubs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/cab-service-rajkot" className="hover:text-amber-400 transition">
                  Cab Service in Rajkot
                </Link>
              </li>
              <li>
                <Link href="/cab-service-ahmedabad" className="hover:text-amber-400 transition">
                  Cab Service in Ahmedabad
                </Link>
              </li>
              <li>
                <Link href="/cab-service-surat" className="hover:text-amber-400 transition">
                  Cab Service in Surat
                </Link>
              </li>
              <li>
                <Link href="/cab-service-vadodara" className="hover:text-amber-400 transition">
                  Cab Service in Vadodara
                </Link>
              </li>
              <li>
                <Link href="/cab-service-gandhinagar" className="hover:text-amber-400 transition">
                  Cab Service in Gandhinagar / GIFT City
                </Link>
              </li>
              <li>
                <Link href="/cab-service-jamnagar" className="hover:text-amber-400 transition">
                  Cab Service in Jamnagar
                </Link>
              </li>
              <li>
                <Link href="/cab-service-morbi" className="hover:text-amber-400 transition">
                  Cab Service in Morbi
                </Link>
              </li>
              <li>
                <Link href="/cab-service-somnath" className="hover:text-amber-400 transition">
                  Cab Service in Somnath / Dwarka
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Corridors */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Top Rajkot & Ahmedabad Routes
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link href="/rajkot-to-ahmedabad-cab" className="hover:text-amber-400 transition py-1">
                Rajkot ➔ Ahmedabad
              </Link>
              <Link href="/rajkot-to-surat-cab" className="hover:text-amber-400 transition py-1">
                Rajkot ➔ Surat
              </Link>
              <Link href="/rajkot-to-vadodara-cab" className="hover:text-amber-400 transition py-1">
                Rajkot ➔ Vadodara
              </Link>
              <Link href="/rajkot-to-hirasar-airport-cab" className="hover:text-amber-400 transition py-1">
                Rajkot ➔ Hirasar Airport
              </Link>
              <Link href="/rajkot-to-somnath-cab" className="hover:text-amber-400 transition py-1">
                Rajkot ➔ Somnath
              </Link>
              <Link href="/rajkot-to-dwarka-cab" className="hover:text-amber-400 transition py-1">
                Rajkot ➔ Dwarka
              </Link>
              <Link href="/rajkot-to-jamnagar-cab" className="hover:text-amber-400 transition py-1">
                Rajkot ➔ Jamnagar
              </Link>
              <Link href="/rajkot-to-morbi-cab" className="hover:text-amber-400 transition py-1">
                Rajkot ➔ Morbi
              </Link>
              <Link href="/ahmedabad-to-surat-cab" className="hover:text-amber-400 transition py-1">
                Ahmedabad ➔ Surat
              </Link>
              <Link href="/ahmedabad-to-vadodara-cab" className="hover:text-amber-400 transition py-1">
                Ahmedabad ➔ Vadodara
              </Link>
              <Link href="/ahmedabad-to-statue-of-unity-cab" className="hover:text-amber-400 transition py-1">
                Ahmedabad ➔ Statue of Unity
              </Link>
              <Link href="/ahmedabad-to-mumbai-cab" className="hover:text-amber-400 transition py-1">
                Ahmedabad ➔ Mumbai
              </Link>
            </div>
            
            <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500 inline mr-1.5 -mt-0.5" />
              <span>All trips covered with commercial taxi permit & valid highway insurance.</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="m-0">
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Rajvee Cab</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://www.facebook.com/rajveecab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rajvee Cab Facebook Page"
              className="text-slate-400 hover:text-blue-400 transition flex items-center gap-1.5"
            >
              <Facebook className="w-3.5 h-3.5 text-blue-500" />
              <span>Facebook</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://www.instagram.com/rajveecab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rajvee Cab Instagram Profile"
              className="text-slate-400 hover:text-pink-400 transition flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              <span>Instagram</span>
            </a>
          </div>
          <p className="m-0 text-slate-400">
            Official 24x7 Cab Service Provider for Rajkot & All Gujarat
          </p>
        </div>

      </div>
    </footer>
  );
}
