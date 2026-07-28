import React from 'react';
import { ShieldCheck, Cpu, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onBookRepair: () => void;
  onExploreSolutions: () => void;
  onOpenTracker: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookRepair,
  onExploreSolutions,
  onOpenTracker
}) => {
  return (
    <section className="relative min-h-[640px] md:min-h-[720px] lg:h-[780px] flex items-center overflow-hidden bg-[#23232D]">
      {/* Circuit pattern overlay & subtle gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#4F32CE_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#23232D] via-[#23232D]/90 to-[#23232D]/40 z-10" />

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#4F32CE]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFC107]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-20 w-full px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#4F32CE]/15 text-[#c7beff] border border-[#4F32CE]/40 px-3.5 py-1.5 rounded-full font-mono-label text-xs sm:text-sm mb-6 uppercase tracking-wider shadow-inner">
            <Zap className="w-3.5 h-3.5 text-[#FFC107]" />
            Authorized Technical Service
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Virus For Electronics
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-[#e1e3e4] mb-8 leading-relaxed max-w-xl">
            Professional electronics repair and IT solutions delivered with scientific precision. We restore your digital reliability using premium hardware and expert engineering.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onBookRepair}
              className="bg-[#4F32CE] text-white px-8 py-4 font-mono-label text-sm sm:text-base font-semibold rounded-lg hover:bg-[#3704b8] hover:shadow-[0_0_25px_rgba(79,50,206,0.4)] active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              Book Your Repair
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreSolutions}
              className="border border-[#e1e3e4]/30 text-white px-8 py-4 font-mono-label text-sm sm:text-base font-semibold rounded-lg hover:bg-white/10 active:scale-98 transition-colors text-center"
            >
              Our Solutions
            </button>
          </div>

          {/* Quick Info Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm font-mono-label text-[#c6c4d1]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00B894] flex-shrink-0" />
              <span>12-Mo Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#4F32CE] flex-shrink-0" />
              <span>ISO Cleanroom</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#FFC107] flex-shrink-0" />
              <button onClick={onOpenTracker} className="underline hover:text-white transition-colors">
                Sample Ticket: VFE-8921
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
