'use client';
import { useState } from 'react';
import { Send, MapPin, Navigation, Calendar, Car, Phone, ShieldCheck, Zap, ArrowUpDown, ChevronDown } from 'lucide-react';

export default function BookingBoxRenax() {
  const [carType, setCarType] = useState('Swift Dzire (Sedan 4+1)');
  const [tripType, setTripType] = useState('one_way');
  const [pickup, setPickup] = useState('Rajkot');
  const [drop, setDrop] = useState('Ahmedabad');
  const [date, setDate] = useState('');
  const [contactNo, setContactNo] = useState('');

  const tripOptions = [
    { id: 'one_way', label: 'One Way' },
    { id: 'return', label: 'Round Trip' },
    { id: 'airport', label: 'Airport' },
    { id: 'city_local', label: 'Hourly' },
  ];

  const handleSwap = () => {
    const temp = pickup;
    setPickup(drop);
    setDrop(temp);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const tripLabel = tripOptions.find((t) => t.id === tripType)?.label || tripType;

    const message = `*NEW CAB BOOKING INQUIRY - RAJVEE CAB*
-----------------------------------
• *Trip Type:* ${tripLabel}
• *Vehicle:* ${carType}
• *Pickup City:* ${pickup}
• *Drop City:* ${drop}
• *Travel Date:* ${date || 'Immediate / Today'}
• *Customer Phone:* ${contactNo || 'Provided via WhatsApp'}
-----------------------------------
Please provide fare details and confirm booking availability.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919737872972?text=${encoded}`, '_blank');
  };

  const citiesList = [
    'Rajkot', 'Ahmedabad', 'Surat', 'Vadodara',
    'Rajkot Hirasar Airport', 'Ahmedabad SVPI Airport',
    'Jamnagar', 'Bhavnagar', 'Junagadh', 'Gandhinagar',
    'Morbi', 'Somnath', 'Dwarka', 'Sasan Gir', 'Porbandar',
    'Bhuj', 'Anand', 'Bharuch', 'Vapi', 'Valsad', 'Statue of Unity', 'Mumbai'
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-7 shadow-2xl border border-slate-200/80 text-slate-900 w-full max-w-full overflow-hidden">
      
      {/* Header */}
      <div className="mb-3 sm:mb-4">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">
          <Zap className="w-3 h-3 text-amber-600" />
          <span>Quick Fare & Booking</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight m-0">
          Book Your Journey
        </h3>
        <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 m-0">
          Upfront transparent pricing with zero surge charges.
        </p>
      </div>

      {/* Trip Type Tabs - Single sleek row for mobile and desktop */}
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

      {/* Form Fields */}
      <form onSubmit={handleBooking} className="space-y-3">
        
        {/* Pickup & Drop with Swap Button */}
        <div className="relative space-y-2.5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3">
          {/* Pickup Input */}
          <div>
            <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Pickup City / Area
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
              <input
                type="text"
                list="corporate-cities"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Rajkot"
                required
                className="w-full pl-9 pr-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
              />
            </div>
          </div>

          {/* Swap Button (Mobile & Desktop) */}
          <div className="sm:hidden flex justify-center -my-1 relative z-10">
            <button
              type="button"
              onClick={handleSwap}
              className="w-7 h-7 rounded-full bg-white border border-slate-300 shadow-sm text-slate-600 hover:text-amber-600 flex items-center justify-center transition active:rotate-180 cursor-pointer"
              title="Swap pickup and drop"
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Drop Input */}
          <div>
            <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Destination / Drop City
            </label>
            <div className="relative">
              <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600" />
              <input
                type="text"
                list="corporate-cities"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                placeholder="e.g. Ahmedabad"
                required
                className="w-full pl-9 pr-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
              />
            </div>
          </div>
        </div>

        <datalist id="corporate-cities">
          {citiesList.map((c, i) => (
            <option key={i} value={c} />
          ))}
        </datalist>

        {/* Quick Route Shortcuts for Mobile */}
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Quick:</span>
          <button
            type="button"
            onClick={() => { setPickup('Rajkot'); setDrop('Ahmedabad'); }}
            className="text-[10px] font-semibold bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 px-2 py-0.5 rounded-md border border-slate-200 transition cursor-pointer"
          >
            Rajkot ➔ Ahmd
          </button>
          <button
            type="button"
            onClick={() => { setPickup('Rajkot City'); setDrop('Rajkot Hirasar Airport'); }}
            className="text-[10px] font-semibold bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 px-2 py-0.5 rounded-md border border-slate-200 transition cursor-pointer"
          >
            Hirasar Airport
          </button>
          <button
            type="button"
            onClick={() => { setPickup('Ahmedabad'); setDrop('Surat'); }}
            className="text-[10px] font-semibold bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 px-2 py-0.5 rounded-md border border-slate-200 transition cursor-pointer"
          >
            Ahmd ➔ Surat
          </button>
        </div>

        {/* Car Selection & Travel Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div>
            <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Vehicle Type
            </label>
            <div className="relative">
              <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full pl-9 pr-8 py-2 sm:py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition appearance-none cursor-pointer"
              >
                <option value="Swift Dzire (Sedan 4+1)">Swift Dzire (Sedan 4+1)</option>
                <option value="Hyundai Aura (Sedan 4+1)">Hyundai Aura (Sedan 4+1)</option>
                <option value="Maruti Ertiga (SUV 6+1)">Maruti Ertiga (SUV 6+1)</option>
                <option value="Toyota Innova Crysta (Luxury 7+1)">Toyota Innova Crysta (Luxury 7+1)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Travel Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-9 pr-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
              />
            </div>
          </div>
        </div>

        {/* Contact Phone */}
        <div>
          <label className="block text-[10px] sm:text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Your Phone (Optional)
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="tel"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              placeholder="e.g. 97378 72972"
              className="w-full pl-9 pr-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-900 outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer border border-amber-600/20"
          >
            <Send className="w-4 h-4 shrink-0" />
            <span>Check Fare & Book on WhatsApp</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-500 pt-0.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>No prepayment required • Direct payment to driver</span>
        </div>

      </form>
    </div>
  );
}
