'use client';
import { useState } from 'react';
import { MapPin, Navigation, Calendar, Car, Phone, Send } from 'lucide-react';
import { formatWhatsAppBooking } from '@/utils/whatsapp';

export default function BookingForm({ defaultPickup = 'Rajkot', defaultDrop = 'Ahmedabad' }) {
  const [tripType, setTripType] = useState('one_way');
  const [pickup, setPickup] = useState(defaultPickup);
  const [drop, setDrop] = useState(defaultDrop);
  const [date, setDate] = useState('');
  const [carType, setCarType] = useState('Maruti Dzire (Sedan)');
  const [phone, setPhone] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    const tripNames = {
      one_way: 'One Way Drop',
      round_trip: 'Round Trip Outstation',
      airport: 'Airport Transfer',
      local: 'Local Hourly Rental',
    };

    const whatsappUrl = formatWhatsAppBooking({
      tripType: tripNames[tripType] || tripType,
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
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <Car className="w-6 h-6 text-amber-500" />
          <span>Quick Cab Booking & Fare Check</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Enter ride details to get instant transparent quotes via WhatsApp
        </p>
      </div>

      <form onSubmit={handleBooking} className="space-y-4">
        {/* Trip Type Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-slate-100 rounded-xl">
          {[
            { id: 'one_way', label: 'One Way' },
            { id: 'round_trip', label: 'Round Trip' },
            { id: 'airport', label: 'Airport' },
            { id: 'local', label: 'Local City' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setTripType(tab.id)}
              className={`py-2 text-xs font-bold rounded-lg transition ${
                tripType === tab.id
                  ? 'bg-slate-900 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pickup & Drop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600" /> Pickup Location
            </label>
            <input
              type="text"
              list="cities-list"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="e.g. Rajkot, Ahmedabad..."
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-semibold text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-emerald-600" /> Drop Location
            </label>
            <input
              type="text"
              list="cities-list"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              placeholder="e.g. Ahmedabad, Surat..."
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-semibold text-slate-800"
            />
          </div>
        </div>

        <datalist id="cities-list">
          {gujaratCities.map((city, idx) => (
            <option key={idx} value={city} />
          ))}
        </datalist>

        {/* Date and Car Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" /> Journey Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-semibold text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-slate-500" /> Vehicle Model
            </label>
            <select
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-semibold text-slate-800"
            >
              <option value="Maruti Dzire (Sedan - 4 Seater)">Maruti Dzire (Sedan - 4 Seater)</option>
              <option value="Hyundai Aura (Sedan - 4 Seater)">Hyundai Aura (Sedan - 4 Seater)</option>
              <option value="Maruti Ertiga (SUV - 6 Seater)">Maruti Ertiga (SUV - 6 Seater)</option>
              <option value="Toyota Innova Crysta (Luxury - 7 Seater)">Toyota Innova Crysta (Luxury - 7 Seater)</option>
              <option value="Tempo Traveller (14-20 Seater)">Tempo Traveller (Group Trip)</option>
            </select>
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-500" /> Your Mobile Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter 10-digit mobile number"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm font-semibold text-slate-800"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition transform hover:-translate-y-0.5"
        >
          <Send className="w-4 h-4" />
          <span>Get Quote & Book via WhatsApp</span>
        </button>
      </form>
    </div>
  );
}
