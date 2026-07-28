import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithQuote: (preselectedCategory: string) => void;
}

type BrandKey = 'apple' | 'samsung' | 'dell' | 'lenovo' | 'hp' | 'enterprise';
type UrgencyKey = 'standard' | 'express' | 'emergency';

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  onBookWithQuote
}) => {
  const { t } = useI18n();
  const [deviceType, setDeviceType] = useState('laptop');
  const [brand, setBrand] = useState<BrandKey>('apple');
  const [issue, setIssue] = useState('liquid');
  const [urgency, setUrgency] = useState<UrgencyKey>('standard');
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
          className="absolute top-4 end-4 text-[#474555] hover:text-[#191c1d] p-2 rounded-full hover:bg-[#F8F9FA]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <span className="font-mono-label text-xs text-[#4F32CE] uppercase tracking-wider font-bold flex items-center gap-1">
            <Calculator className="w-3.5 h-3.5" />
            {t.quote.eyebrow}
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#191c1d]">
            {t.quote.title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#474555] mt-1">
            {t.quote.subtitle}
          </p>
        </div>

        {/* Form Controls */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                {t.quote.category}
              </label>
              <select
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
              >
                <option value="laptop">{t.quote.devices.laptop}</option>
                <option value="smartphone">{t.quote.devices.smartphone}</option>
                <option value="desktop">{t.quote.devices.desktop}</option>
                <option value="server">{t.quote.devices.server}</option>
                <option value="data">{t.quote.devices.data}</option>
              </select>
            </div>

            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                {t.quote.brand}
              </label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value as BrandKey)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
              >
                <option value="apple">{t.quote.brands.apple}</option>
                <option value="samsung">{t.quote.brands.samsung}</option>
                <option value="dell">{t.quote.brands.dell}</option>
                <option value="lenovo">{t.quote.brands.lenovo}</option>
                <option value="hp">{t.quote.brands.hp}</option>
                <option value="enterprise">{t.quote.brands.enterprise}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                {t.quote.issue}
              </label>
              <select
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
              >
                <option value="liquid">{t.quote.issues.liquid}</option>
                <option value="soldering">{t.quote.issues.soldering}</option>
                <option value="screen">{t.quote.issues.screen}</option>
                <option value="thermal">{t.quote.issues.thermal}</option>
                <option value="battery">{t.quote.issues.battery}</option>
                <option value="nand">{t.quote.issues.nand}</option>
              </select>
            </div>

            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                {t.quote.urgency}
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as UrgencyKey)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
              >
                <option value="standard">{t.quote.urgencyOptions.standard}</option>
                <option value="express">{t.quote.urgencyOptions.express}</option>
                <option value="emergency">{t.quote.urgencyOptions.emergency}</option>
              </select>
            </div>
          </div>

          <div className="p-4 bg-[#F8F9FA] rounded-lg border border-[#e1e3e4] flex items-center justify-between">
            <div>
              <p className="font-mono-label text-xs font-bold text-[#191c1d]">
                {t.quote.extendWarranty}
              </p>
              <p className="font-sans text-xs text-[#474555]">
                {t.quote.extendHint}
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
                {t.quote.estimatedRange}
              </span>
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#FFC107]">
                ${estimatedMin} - ${estimatedMax}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 font-mono-label text-xs text-[#e1e3e4]">
              <div>{t.quote.diagnosticFee} <span className="text-white font-bold">{t.quote.diagnosticWaived}</span></div>
              <div>{t.quote.partsGrade} <span className="text-white font-bold">{t.quote.oem}</span></div>
              <div>{t.quote.turnaroundLabel} <span className="text-white font-bold">{urgency.toUpperCase()}</span></div>
              <div>{t.quote.warrantyLabel} <span className="text-[#00B894] font-bold">{extendedWarranty ? t.quote.months24 : t.quote.months12}</span></div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookWithQuote(deviceType);
              }}
              className="w-full bg-[#4F32CE] hover:bg-[#3704b8] text-white py-3.5 rounded-lg font-mono-label text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              {t.quote.bookWithQuote}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
