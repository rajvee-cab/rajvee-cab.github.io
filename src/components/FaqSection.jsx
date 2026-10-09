'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How do I book a cab with Rajvee Cab?',
    a: 'You can book instantly by calling our 24x7 desk at +91 97378 72972 or by sending a message on WhatsApp. Simply share your pickup location, drop city, travel date, and preferred car type. You will receive an immediate confirmation with driver and vehicle details.',
  },
  {
    q: 'Is one-way taxi service available without paying return fare?',
    a: 'Yes, 100%! With Rajvee Cab One-Way drops, you pay ONLY for the one-sided journey from your pickup to destination city. You never pay any return charges or empty vehicle return kms.',
  },
  {
    q: 'What is the estimated taxi fare from Rajkot to Ahmedabad?',
    a: 'For Rajkot to Ahmedabad one-way travel, Sedan (Swift Dzire / Hyundai Aura) typically starts around ₹2,299 to ₹2,500. Spacious SUVs like Maruti Ertiga range from ₹3,400 to ₹3,600, and Toyota Innova Crysta starts from ₹4,500. All fares are transparent with zero hidden charges.',
  },
  {
    q: 'Do you provide 24x7 pickups for Rajkot Hirasar Airport & Ahmedabad SVPI Airport?',
    a: 'Yes! We operate 24 hours a day, 365 days a year. Whether you have an early morning 4:00 AM flight departure or a late midnight flight arrival, our chauffeurs will be waiting at the terminal with your nameboard.',
  },
  {
    q: 'What payment modes are accepted?',
    a: 'We accept Cash, Google Pay, PhonePe, Paytm, and all UPI applications directly upon the completion of your journey. For corporate clients, GST tax invoices and bank transfer options are also available.',
  },
  {
    q: 'Are the cabs safe for families, senior citizens, and female travelers?',
    a: 'Safety is our highest priority. All Rajvee Cab drivers are police-verified, experienced on national and state highways, polite, and non-smoking. All vehicles are equipped with GPS tracking and chilled dual-AC systems.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Everything you need to know about booking one-way, outstation, and airport cabs with Rajvee Cab.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
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
                  className="w-full text-left p-5 sm:p-6 font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 bg-transparent cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                      isOpen ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-slate-900 leading-snug">{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 shrink-0 text-slate-600 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                    <p className="m-0 pl-10">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Footer under FAQ */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white m-0">Still have questions?</h4>
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
              href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20have%20an%20inquiry%20regarding%20cab%20booking."
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
