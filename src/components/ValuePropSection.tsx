import React from 'react';
import { Cpu, ShieldCheck, FileCheck } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { useLocalizedValueProps } from '../i18n/useLocalizedContent';

export const ValuePropSection: React.FC = () => {
  const { t } = useI18n();
  const valueProps = useLocalizedValueProps();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'memory':
        return <Cpu className="w-10 h-10 text-[#4F32CE]" />;
      case 'shield':
        return <ShieldCheck className="w-10 h-10 text-[#4F32CE]" />;
      case 'contract':
        return <FileCheck className="w-10 h-10 text-[#4F32CE]" />;
      default:
        return <Cpu className="w-10 h-10 text-[#4F32CE]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#191c1d] mb-4 tracking-tight">
            {t.valueProp.title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#474555]">
            {t.valueProp.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((item) => (
            <div
              key={item.number}
              className="p-8 sm:p-10 border border-[#edeeef] bg-[#F8F9FA]/40 hover:bg-white transition-all duration-300 group rounded-xl shadow-2xs hover:shadow-md hover:border-[#4F32CE]"
            >
              <span className="font-mono-label text-xs sm:text-sm text-[#4F32CE] font-bold mb-6 block">
                {item.number}
              </span>

              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.icon)}
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#191c1d] mb-3">
                {item.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#474555] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
