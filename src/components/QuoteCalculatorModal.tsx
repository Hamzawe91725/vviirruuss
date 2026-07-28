import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithQuote: (preselectedCategory: string) => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  onBookWithQuote
}) => {
  const [deviceType, setDeviceType] = useState('laptop');
  const [brand, setBrand] = useState('Apple (MacBook)');
  const [issue, setIssue] = useState('liquid');
  const [urgency, setUrgency] = useState<'standard' | 'express' | 'emergency'>('standard');
  const [extendedWarranty, setExtendedWarranty] = useState(false);

  if (!isOpen) return null;

  // Pricing Logic Calculation
  const basePrices: Record<string, number> = {
    laptop: 45,
    smartphone: 35,
    desktop: 55,
    server: 120,
    data: 95
  };

  const issueMultipliers: Record<string, number> = {
    screen: 50,
    battery: 30,
    thermal: 25,
    liquid: 65,
    soldering: 75,
    nand: 90
  };

  const base = basePrices[deviceType] || 45;
  const issueAdd = issueMultipliers[issue] || 35;
  const subtotal = base + issueAdd;

  let multiplier = 1.0;
  if (urgency === 'express') multiplier = 1.25;
  if (urgency === 'emergency') multiplier = 1.5;

  const warrantyAdd = extendedWarranty ? 25 : 0;
  const estimatedMin = Math.round((subtotal * multiplier) + warrantyAdd);
  const estimatedMax = Math.round((estimatedMin * 1.35));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-[#e1e3e4] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#474555] hover:text-[#191c1d] p-2 rounded-full hover:bg-[#F8F9FA]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <span className="font-mono-label text-xs text-[#4F32CE] uppercase tracking-wider font-bold flex items-center gap-1">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing Estimator
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#191c1d]">
            Instant Repair Quote Calculator
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#474555] mt-1">
            Select your hardware specifications to calculate a real-time diagnostic and repair estimate.
          </p>
        </div>

        {/* Form Controls */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                Hardware Category
              </label>
              <select
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
              >
                <option value="laptop">Laptop / MacBook</option>
                <option value="smartphone">Smartphone / Tablet</option>
                <option value="desktop">PC Workstation / Rig</option>
                <option value="server">Server / Network Hardware</option>
                <option value="data">Cleanroom Data Recovery</option>
              </select>
            </div>

            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                Manufacturer / Brand
              </label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
              >
                <option value="Apple (MacBook / iPhone)">Apple (MacBook / iPhone)</option>
                <option value="Samsung Galaxy / Book">Samsung Galaxy / Book</option>
                <option value="Dell / Alienware">Dell / Alienware</option>
                <option value="Lenovo ThinkPad / Legion">Lenovo ThinkPad / Legion</option>
                <option value="HP / Asus ROG">HP / ASUS ROG / Razer</option>
                <option value="Enterprise / Custom">Enterprise / Custom Hardware</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                Primary Issue / Service Needed
              </label>
              <select
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
              >
                <option value="liquid">Liquid Spill & Corrosion Cleaning</option>
                <option value="soldering">Micro-soldering IC & Logic Board</option>
                <option value="screen">Screen / OLED Display Swap</option>
                <option value="thermal">Thermal Overhaul & Fan Noise</option>
                <option value="battery">Battery Health & Power Delivery</option>
                <option value="nand">NAND Flash / Corrupted SSD Recovery</option>
              </select>
            </div>

            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                Turnaround Urgency
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as any)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
              >
                <option value="standard">Standard (48 Hours)</option>
                <option value="express">Express Priority (24 Hours) +25%</option>
                <option value="emergency">Same-Day Emergency (4 Hours) +50%</option>
              </select>
            </div>
          </div>

          <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#e1e3e4] flex items-center justify-between">
            <div>
              <p className="font-mono-label text-xs font-bold text-[#191c1d]">
                Extend Warranty to 24 Months (+ $25)
              </p>
              <p className="font-sans text-xs text-[#474555]">
                Includes complimentary biannual thermal maintenance cleanings.
              </p>
            </div>
            <input
              type="checkbox"
              checked={extendedWarranty}
              onChange={(e) => setExtendedWarranty(e.target.checked)}
              className="w-5 h-5 text-[#4F32CE] rounded focus:ring-[#4F32CE]"
            />
          </div>

          {/* Calculated Output Result Card */}
          <div className="bg-[#23232D] text-white p-6 rounded-xl border border-[#4F32CE]/30 space-y-4 shadow-lg">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="font-mono-label text-xs text-[#e1e3e4] uppercase">
                Estimated Price Range
              </span>
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#FFC107]">
                ${estimatedMin} - ${estimatedMax}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 font-mono-label text-xs text-[#e1e3e4]">
              <div>• Initial Diagnostic Fee: <span className="text-white font-bold">$0 (Waived)</span></div>
              <div>• Parts Grade: <span className="text-white font-bold">OEM Standard</span></div>
              <div>• Turnaround: <span className="text-white font-bold">{urgency.toUpperCase()}</span></div>
              <div>• Warranty: <span className="text-[#00B894] font-bold">{extendedWarranty ? '24 Months' : '12 Months'}</span></div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookWithQuote(deviceType);
              }}
              className="w-full bg-[#4F32CE] hover:bg-[#3704b8] text-white py-3.5 rounded-lg font-mono-label text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              Book Repair With This Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
