'use client';
import { Phone, MessageCircle } from 'lucide-react';
import { formatWhatsAppGeneral } from '@/utils/whatsapp';
import { trackCallClick, trackWhatsAppClick } from '@/utils/analytics';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 flex items-center gap-2 shadow-2xl w-full max-w-full">
      <a
        href="tel:+919737872972"
        onClick={() => trackCallClick('mobile_sticky_bar')}
        aria-label="Call Rajvee Cab now at +91 97378 72972"
        className="flex-1 py-3 px-2 rounded-xl bg-slate-950 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow transition active:scale-95 min-h-[44px]"
      >
        <Phone className="w-4 h-4 text-amber-400 shrink-0" />
        <span>Call: 97378 72972</span>
      </a>

      <a
        href={formatWhatsAppGeneral('Instant Mobile Booking')}
        onClick={() => trackWhatsAppClick('mobile_sticky_bar')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Rajvee Cab"
        className="flex-1 py-3 px-2 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/30 transition active:scale-95 min-h-[44px]"
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span>Book WhatsApp</span>
      </a>
    </div>
  );
}
