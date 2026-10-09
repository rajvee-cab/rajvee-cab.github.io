'use client';
import { useState } from 'react';
import { MapPin, Navigation, ArrowRight, ShieldCheck, Phone, MessageCircle } from 'lucide-react';

const regionsData = [
  {
    region: 'Saurashtra & Kutch Hubs',
    cities: [
      { name: 'Rajkot (Headquarters)', tag: 'Main Hub', popularTo: 'Ahmedabad, Somnath, Dwarka' },
      { name: 'Jamnagar', tag: 'High Frequency', popularTo: 'Rajkot, Ahmedabad, Dwarka' },
      { name: 'Junagadh', tag: 'Girnar Special', popularTo: 'Rajkot, Somnath, Sasan Gir' },
      { name: 'Bhavnagar', tag: 'Daily Commute', popularTo: 'Ahmedabad, Surat, Rajkot' },
      { name: 'Morbi', tag: 'Ceramic Hub', popularTo: 'Rajkot, Ahmedabad, Gandhidham' },
      { name: 'Porbandar', tag: 'Coastal Connect', popularTo: 'Rajkot, Dwarka, Somnath' },
      { name: 'Bhuj & Gandhidham', tag: 'Kutch Hub', popularTo: 'Ahmedabad, Rajkot, Morbi' },
      { name: 'Surendranagar', tag: 'Highway Route', popularTo: 'Ahmedabad, Rajkot' },
    ],
  },
  {
    region: 'Central & South Gujarat',
    cities: [
      { name: 'Ahmedabad', tag: 'Airport Hub', popularTo: 'Rajkot, Surat, Mumbai, Udaipur' },
      { name: 'Surat', tag: 'Diamond City', popularTo: 'Mumbai, Ahmedabad, Shirdi' },
      { name: 'Vadodara (Baroda)', tag: 'Cultural Capital', popularTo: 'Ahmedabad, Surat, Statue of Unity' },
      { name: 'Anand & Nadiad', tag: 'Charotar Hub', popularTo: 'Ahmedabad, Vadodara, Mumbai' },
      { name: 'Bharuch & Ankleshwar', tag: 'Industrial Corridor', popularTo: 'Surat, Vadodara, Ahmedabad' },
      { name: 'Vapi & Valsad', tag: 'South Gate', popularTo: 'Surat, Mumbai, Nashik' },
      { name: 'Navsari', tag: 'Express Highway', popularTo: 'Surat, Mumbai, Vapi' },
    ],
  },
  {
    region: 'North Gujarat & Capital',
    cities: [
      { name: 'Gandhinagar', tag: 'GIFT City Hub', popularTo: 'Ahmedabad, Rajkot, Udaipur' },
      { name: 'Mehsana', tag: 'Highway Connect', popularTo: 'Ahmedabad, Patan, Palanpur' },
      { name: 'Palanpur & Deesa', tag: 'Border Hub', popularTo: 'Ahmedabad, Mount Abu, Ambaji' },
      { name: 'Patan', tag: 'Heritage City', popularTo: 'Ahmedabad, Mehsana' },
      { name: 'Himatnagar', tag: 'Sabarkantha Hub', popularTo: 'Ahmedabad, Shamlaji, Udaipur' },
    ],
  },
  {
    region: 'Pilgrimage & Tourist Corridors',
    cities: [
      { name: 'Somnath Temple', tag: 'Jyotirlinga Tour', popularTo: 'Rajkot, Dwarka, Ahmedabad' },
      { name: 'Dwarka Dham', tag: 'Char Dham Route', popularTo: 'Rajkot, Somnath, Jamnagar' },
      { name: 'Statue of Unity (Kevadia)', tag: 'Top Tourist Spot', popularTo: 'Vadodara, Ahmedabad, Surat' },
      { name: 'Sasan Gir (Gir Safari)', tag: 'Wildlife Sanctuary', popularTo: 'Rajkot, Junagadh, Somnath' },
      { name: 'Mount Abu (Rajasthan)', tag: 'Hill Station', popularTo: 'Ahmedabad, Palanpur, Mehsana' },
      { name: 'Ambaji Shaktipeeth', tag: 'Devotional Tour', popularTo: 'Ahmedabad, Gandhinagar' },
    ],
  },
];

export default function GujaratNetworkSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="coverage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>State-Wide Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Serving Every Corner of <span className="text-amber-600">Gujarat</span>
          </h2>
          <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
            From Saurashtra to South Gujarat, North Gujarat to sacred pilgrimage routes — verified drivers and doorstep pickup wherever you are.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-3xl mx-auto">
          {regionsData.map((reg, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`w-full md:w-auto px-3 sm:px-5 py-2.5 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-bold transition duration-150 cursor-pointer text-center flex items-center justify-center min-h-[46px] leading-snug ${
                activeTab === idx
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              {reg.region}
            </button>
          ))}
        </div>

        {/* Cities Grid for Selected Region */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regionsData[activeTab].cities.map((city, cIdx) => (
            <div
              key={cIdx}
              className="bg-white p-5 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {city.tag}
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {city.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700">Routes:</span> {city.popularTo}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100">
                <a
                  href={`https://wa.me/919737872972?text=${encodeURIComponent(
                    `Hello Rajvee Cab, I need to book a cab for pickup in ${city.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book cab pickup in ${city.name} on WhatsApp`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book Pickup</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 sm:mt-12 bg-slate-900 rounded-2xl p-5 sm:p-8 text-white flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white m-0 leading-snug">Need doorstep pickup in any Gujarat village or town?</h4>
              <p className="text-xs text-slate-400 m-0 mt-1">Our network covers all 33 districts of Gujarat with 24x7 immediate chauffeur dispatch.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
            <a
              href="tel:+919737872972"
              aria-label="Call Rajvee Cab at +91 97378 72972"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-bold hover:bg-slate-100 transition shadow-sm text-center"
            >
              Call +91 97378 72972
            </a>
            <a
              href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20need%20doorstep%20pickup%20in%20Gujarat."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Rajvee Cab Gujarat WhatsApp support"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition shadow-sm text-center"
            >
              WhatsApp Support
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
