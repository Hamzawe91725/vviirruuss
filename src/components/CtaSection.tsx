import React from 'react';
import { MapPin, Calculator } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface CtaSectionProps {
  onOpenCalculator: () => void;
  onOpenLocations: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenCalculator,
  onOpenLocations
}) => {
  const { t } = useI18n();

  return (
    <section className="relative py-20 md:py-24 bg-[#4F32CE] overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
          {t.cta.title}
        </h2>

        <p className="font-sans text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.cta.body}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto bg-white text-[#4F32CE] px-8 py-4 font-mono-label text-sm sm:text-base font-bold rounded-lg hover:bg-[#F8F9FA] active:scale-98 transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            {t.cta.freeQuote}
          </button>

          <button
            onClick={onOpenLocations}
            className="w-full sm:w-auto border border-white/40 text-white px-8 py-4 font-mono-label text-sm sm:text-base font-bold rounded-lg hover:bg-white/10 active:scale-98 transition-colors flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            {t.cta.viewLocations}
          </button>
        </div>
      </div>
    </section>
  );
};
