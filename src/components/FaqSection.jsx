'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { formatWhatsAppGeneral } from '@/utils/whatsapp';

const faqs = [
  {
    q: 'What is the cab fare from Rajkot to Ahmedabad?',
    a: 'Rajkot to Ahmedabad one-way AC sedan (Swift Dzire / Hyundai Aura) taxi fare starts at ₹2,199 to ₹2,499 with Rajvee Cab. For family group travel, 7-seater Maruti Ertiga starts at ₹3,499 and Toyota Innova Crysta starts at ₹4,499. All fares are transparent with zero return fare charges.',
  },
  {
    q: 'How much is the taxi fare from Rajkot to Hirasar Airport (HSR)?',
    a: 'Rajvee Cab provides dedicated airport taxi transfers from Rajkot city to Rajkot Hirasar International Airport (HSR) starting at a budget-friendly fixed rate of ₹699 for AC Sedan. Chauffeurs are available 24x7 with doorstep flight-timed pickup and flight delay tracking.',
  },
  {
    q: 'Is one-way taxi service available without paying return fare?',
    a: 'Yes, 100%! With Rajvee Cab One-Way drops, you pay ONLY for the one-sided journey from your pickup to destination city. You never pay any return charges or empty vehicle return kms across Rajkot, Ahmedabad, Surat, Vadodara, or anywhere in Gujarat.',
  },
  {
    q: 'Where is Rajvee Cab located in Rajkot and which areas are served?',
    a: 'Rajvee Cab is headquartered at Greenland Chokdi, National Highway 27, Rajkot, Gujarat (360003). We provide doorstep cab pickup across all Rajkot localities (Kalawad Road, 150 Feet Ring Road, Yagnik Road, Raiya Road, Mavdi, Madhapar, Kothariya) and service all 33 districts of Gujarat.',
  },
  {
    q: 'How do I book a cab with Rajvee Cab?',
    a: 'You can book instantly by calling our 24x7 desk at +91 97378 72972 or by sending a message on WhatsApp. Simply share your pickup location, drop city, travel date, and preferred car type. You will receive an immediate confirmation with driver and vehicle details.',
  },
  {
    q: 'Which cars are available for outstation rental with driver?',
    a: 'Our verified fleet includes: Swift Dzire & Hyundai Aura (Sedan 4+1 - best for solo and couple commuters), Maruti Suzuki Ertiga (7-Seater SUV 6+1 - ideal for family trips), and Toyota Innova Crysta (Luxury SUV 7+1 - perfect for VIP, business, and executive travel).',
  },
  {
    q: 'What payment modes are accepted?',
    a: 'We accept Cash, Google Pay, PhonePe, Paytm, and all UPI applications directly upon the completion of your journey. Clean trip receipts and instant invoices are provided for every booking.',
  },
  {
    q: 'Are the cabs safe for families, senior citizens, and female travelers?',
    a: 'Safety is our highest priority. All Rajvee Cab drivers are police-verified, highly experienced on Gujarat state highways, polite, and non-smoking. All vehicles are equipped with GPS tracking, sanitized seating, and chilled dual-AC systems.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  // Schema for Google Rich Snippets & AI Search (AEO)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <section className="py-12 sm:py-20 bg-white" id="faq">
      {/* Inject FAQPage Schema for Google and AI Answer Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 sm:mt-3 leading-relaxed">
            Quick, transparent answers about outstation taxi fares, airport drops, and car rental with driver in Gujarat.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-amber-400 bg-amber-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-6 font-bold text-slate-900 text-sm sm:text-lg flex items-center justify-between gap-3 sm:gap-4 bg-transparent cursor-pointer"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-black shrink-0 ${
                      isOpen ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-slate-900 leading-snug">{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 shrink-0 text-slate-600 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                    <p className="m-0 pl-0 sm:pl-10">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Footer under FAQ */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm sm:text-base font-bold text-white m-0">Still have questions?</p>
            <p className="text-xs text-slate-400 m-0 mt-1">Our 24x7 Rajkot helpline is always available to help you plan your journey.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
            <a
              href="tel:+919737872972"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-bold hover:bg-slate-100 transition shadow-sm w-full sm:w-auto whitespace-nowrap min-h-[42px]"
            >
              <PhoneCall className="w-4 h-4 text-amber-600 shrink-0" />
              <span>+91 97378 72972</span>
            </a>
            <a
              href={formatWhatsAppGeneral('FAQ & Pricing Inquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition shadow-sm w-full sm:w-auto whitespace-nowrap min-h-[42px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
