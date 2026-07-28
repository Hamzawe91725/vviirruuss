import React from 'react';
import { X, CheckCircle2, Shield, Flame, Search, Award } from 'lucide-react';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookRepair: () => void;
}

export const ProcessModal: React.FC<ProcessModalProps> = ({
  isOpen,
  onClose,
  onBookRepair
}) => {
  if (!isOpen) return null;

  const processSteps = [
    {
      step: '01',
      title: 'Thermal & Scope Intake Inspection',
      desc: 'Your hardware undergoes high-resolution thermal imaging camera scans and 45x stereo microscope analysis to detect micro-short circuits before power is applied.'
    },
    {
      step: '02',
      title: 'BGA Micro-soldering & Ultrasonic Bath',
      desc: 'Solder joint reballing, damaged power IC replacement, and liquid residue removal using ESD-safe 99.9% isopropyl ultrasonic bath.'
    },
    {
      step: '03',
      title: 'Thermal Architecture Overhaul',
      desc: 'Liquid metal or Honeywell phase-change pads applied under calibrated torque specs to eliminate thermal throttling permanently.'
    },
    {
      step: '04',
      title: '2-Hour FurMark & MemTest Benchmark',
      desc: 'Full stress benchmarking under maximum CPU/GPU load to guarantee 100% stability under production conditions.'
    },
    {
      step: '05',
      title: '12-Month Warranty Certificate',
      desc: 'Your device receives a sealed QC passport and a digital 12-month hardware warranty stored in your client record.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-[#e1e3e4] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#474555] hover:text-[#191c1d] p-2 rounded-full hover:bg-[#F8F9FA]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="font-mono-label text-xs text-[#4F32CE] uppercase tracking-wider font-bold">
            Scientific Quality Protocol
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#191c1d]">
            The Virus 5-Step Repair Standard
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#474555] mt-1">
            How we maintain a 99.4% motherboard repair success rate on high-end hardware.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-4 mb-8">
          {processSteps.map((st) => (
            <div
              key={st.step}
              className="p-4 sm:p-5 border border-[#edeeef] bg-[#F8F9FA] rounded-xl flex items-start gap-4 hover:border-[#4F32CE] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#4F32CE] text-white font-mono-label font-bold flex items-center justify-center flex-shrink-0 text-sm">
                {st.step}
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#191c1d]">
                  {st.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#474555] mt-1 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="pt-4 border-t border-[#edeeef] flex justify-between items-center">
          <p className="font-mono-label text-xs text-[#00B894] font-bold flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" />
            ISO 9001 Certified Repair Protocol
          </p>

          <button
            onClick={() => {
              onClose();
              onBookRepair();
            }}
            className="bg-[#4F32CE] text-white px-6 py-2.5 font-mono-label text-xs font-bold rounded-lg hover:bg-[#3704b8] shadow-sm"
          >
            Start Your Repair Now
          </button>
        </div>
      </div>
    </div>
  );
};
