import { ShieldCheck, Clock, Award, Sparkles, MapPin, BadgePercent } from 'lucide-react';

const reasons = [
  {
    icon: BadgePercent,
    title: 'Transparent Pricing (Zero Hidden Fees)',
    desc: 'Upfront rates communicated clearly before you book. No surprise surge charges or hidden taxes.',
  },
  {
    icon: Clock,
    title: '24x7 On-Time Pickup Guarantee',
    desc: 'Early morning airport departures or late-night emergencies — our cab reaches your doorstep right on time.',
  },
  {
    icon: Award,
    title: 'Verified & Professional Chauffeurs',
    desc: 'Courteous, police-verified drivers with extensive highway driving experience and polite customer manners.',
  },
  {
    icon: Sparkles,
    title: 'Clean, Sanitized & AC Cabs',
    desc: 'Each vehicle is thoroughly cleaned, washed, and sanitized before your ride with working AC and fresh scent.',
  },
  {
    icon: MapPin,
    title: 'Doorstep Pickup Across Gujarat',
    desc: 'Pickup and drop right at your home, hotel, railway station, or airport in Rajkot, Ahmedabad, Surat, and beyond.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Comfortable Family Travel',
    desc: 'Trusted by thousands of families, women commuters, and senior citizens for reliable, safe long journeys.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-100 text-amber-800 mb-3">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Thousands Trust Rajvee Travels
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
            Dedicated to providing the highest standards of safety, punctuality, and affordability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-amber-500 shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
