'use client';
import { useState, useEffect } from 'react';
import { MapPin, Navigation, Calendar, Car, Phone, Send, ArrowUpDown } from 'lucide-react';
import { formatWhatsAppBooking } from '@/utils/whatsapp';
import { trackLeadSubmission } from '@/utils/analytics';
import { recordLeadToGoogleSheet } from '@/utils/leads';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzzV3ecNe2LvlUYMgDxBuMphd6Z5y1uYAIwPHfuzORcUNk7EFVE0kLjDl8TKxU_972aig/exec';

export default function BookingForm({ defaultPickup = 'Rajkot', defaultDrop = 'Ahmedabad' }) {
  const [tripType, setTripType] = useState('one_way');
  const [pickup, setPickup] = useState(defaultPickup);
  const [drop, setDrop] = useState(defaultDrop);
  const [date, setDate] = useState('');
  const [carType, setCarType] = useState('Maruti Dzire (Sedan - 4 Seater)');
  const [phone, setPhone] = useState('');

  const [canPickContact, setCanPickContact] = useState(false);

  useEffect(() => {
    try {
      const savedPhone = localStorage.getItem('rajvee_user_phone');
      if (savedPhone) setPhone(savedPhone);
    } catch (_) {}
    if (typeof navigator !== 'undefined' && 'contacts' in navigator && 'ContactsManager' in window) {
      setCanPickContact(true);
    }
  }, []);

  const handlePickContact = async () => {
    try {
      if (navigator.contacts) {
        const contacts = await navigator.contacts.select(['tel'], { multiple: false });
        if (contacts && contacts[0] && contacts[0].tel && contacts[0].tel[0]) {
          const cleanNum = contacts[0].tel[0].replace(/\D/g, '').slice(-10);
          if (cleanNum) {
            setPhone(cleanNum);
            try { localStorage.setItem('rajvee_user_phone', cleanNum); } catch (_) {}
          }
        }
      }
    } catch (_) {}
  };

  const handleSwap = () => {
    const temp = pickup;
    setPickup(drop);
    setDrop(temp);
  };

  const tripOptions = [
    { id: 'one_way', label: 'One Way' },
    { id: 'round_trip', label: 'Round Trip' },
    { id: 'airport', label: 'Airport' },
    { id: 'local', label: 'Hourly' },
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    const tripNames = {
      one_way: 'One Way',
      round_trip: 'Round Trip',
      airport: 'Airport',
      local: 'Hourly',
    };

    const tripLabel = tripNames[tripType] || tripType;

    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      tripType: tripLabel,
      carType,
      pickup,
      drop,
      date: date || 'Immediate / Today',
      contactNo: phone || 'WhatsApp Lead',
    };

    try {
      if (phone) localStorage.setItem('rajvee_user_phone', phone);
    } catch (_) {}

    // 1. Record lead to Google Sheet (Google Excel)
    recordLeadToGoogleSheet(payload);

    // 2. Track lead event in Google Analytics
    trackLeadSubmission({
      tripType: tripLabel,
      carType,
      pickup,
      drop,
    });

    // 3. Open WhatsApp with formatted booking message
    const whatsappUrl = formatWhatsAppBooking({
      tripType: tripLabel,
      carType,
      pickup,
      drop,
      date,
      phone,
    });

    window.open(whatsappUrl, '_blank');
  };

  const gujaratCities = [
    'Rajkot',
    'Ahmedabad',
    'Surat',
    'Vadodara',
    'Rajkot Hirasar Airport',
    'Ahmedabad SVPI Airport',
    'Jamnagar',
    'Bhavnagar',
    'Junagadh',
    'Gandhinagar',
    'Morbi',
    'Somnath',
    'Dwarka',
    'Sasan Gir',
    'Porbandar',
    'Bhuj (Kutch)',
    'Mumbai',
    'Udaipur',
    'Mount Abu',
    'Statue of Unity (Kevadia)',
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-7 shadow-xl border border-slate-200">
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-2xl font-black text-slate-900 flex items-center gap-2">
          <Car className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 shrink-0" />
          <span>Quick Cab Booking & Fare Check</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Enter ride details to get instant transparent quotes via WhatsApp
        </p>
      </div>

      <form onSubmit={handleBooking} autoComplete="on" className="space-y-3.5 sm:space-y-4">
        {/* Trip Type Tabs - Single sleek row for mobile and desktop (matches Home Page) */}
        <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl mb-3.5">
          {tripOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setTripType(opt.id)}
              className={`py-2 px-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all text-center truncate cursor-pointer ${
                tripType === opt.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Pickup & Drop with Swap Button */}
        <div className="relative space-y-2.5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Pickup Location
            </label>
            <input
              type="text"
              list="cities-list"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="e.g. Rajkot, Ahmedabad..."
              required
              className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-semibold text-slate-800"
            />
          </div>

          {/* Swap Button on mobile */}
          <div className="sm:hidden flex justify-center -my-1 relative z-10">
            <button
              type="button"
              onClick={handleSwap}
              className="w-7 h-7 rounded-full bg-white border border-slate-300 shadow-sm text-slate-600 hover:text-amber-600 flex items-center justify-center transition active:rotate-180 cursor-pointer"
              title="Swap pickup and drop"
              aria-label="Swap pickup and drop locations"
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Drop Location
            </label>
            <input
              type="text"
              list="cities-list"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="e.g. Ahmedabad, Surat..."
              required
              className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-semibold text-slate-800"
            />
          </div>
        </div>

        <datalist id="cities-list">
          {gujaratCities.map((city, idx) => (
            <option key={idx} value={city} />
          ))}
        </datalist>

        {/* Date and Car Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" /> Journey Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-semibold text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-slate-500 shrink-0" /> Vehicle Model
            </label>
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-semibold text-slate-800 bg-white"
            >
              <option value="Maruti Dzire (Sedan - 4 Seater)">Maruti Dzire (Sedan - 4 Seater)</option>
              <option value="Hyundai Aura (Sedan - 4 Seater)">Hyundai Aura (Sedan - 4 Seater)</option>
              <option value="Maruti Ertiga (SUV - 6 Seater)">Maruti Ertiga (SUV - 6 Seater)</option>
              <option value="Toyota Innova Crysta (Luxury - 7 Seater)">Toyota Innova Crysta (Luxury - 7 Seater)</option>
              <option value="Tempo Traveller (14-20 Seater)">Tempo Traveller (Group Trip)</option>
            </select>
          </div>
        </div>

        {/* Phone Number with Auto-Fill / Suggestion */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" /> Your Mobile Number
            </label>
            {canPickContact && (
              <button
                type="button"
                onClick={handlePickContact}
                className="text-[10px] font-bold text-amber-700 bg-amber-100 hover:bg-amber-200 px-2 py-0.5 rounded border border-amber-300 transition cursor-pointer"
              >
                1-Tap Auto-Fill
              </button>
            )}
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel tel-national"
            inputMode="tel"
            autoCapitalize="off"
            autoCorrect="off"
            maxLength={10}
            value={phone}
            onChange={(e) => {
              const val = e.target.value;
              setPhone(val);
              try {
                localStorage.setItem('rajvee_user_phone', val);
              } catch (_) {}
            }}
            placeholder="e.g. 97378 72972 (Auto-fill ready)"
            required
            className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-semibold text-slate-800"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition min-h-[48px]"
        >
          <Send className="w-4 h-4 shrink-0" />
          <span>Get Quote & Book via WhatsApp</span>
        </button>
      </form>
    </div>
  );
}
