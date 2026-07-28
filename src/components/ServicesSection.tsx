import React from 'react';
import { ServiceItem } from '../types';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceId: string) => void;
  onViewAll: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
  onBookService,
  onViewAll
}) => {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#edeeef]" id="services">
      <div className="px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#191c1d] mb-2 tracking-tight">
              {t.services.title}
            </h2>
            <div className="h-1 w-20 bg-[#4F32CE] rounded-full" />
          </div>

          <button
            onClick={onViewAll}
            className="text-[#4F32CE] font-mono-label text-sm sm:text-base font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
          >
            {t.services.viewAll}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="group border border-[#F8F9FA] bg-white p-6 rounded-lg card-hover-effect flex flex-col justify-between shadow-xs hover:border-[#4F32CE]"
            >
              <div>
                <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-md bg-[#F8F9FA] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 end-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded font-mono-label text-xs font-medium text-[#4F32CE] border border-[#e1e3e4]">
                    {service.turnaround}
                  </div>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#191c1d] mb-3 group-hover:text-[#4F32CE] transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#474555] mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-mono-label text-[#474555]">
                      <Check className="w-3.5 h-3.5 text-[#4F32CE] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#edeeef] flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 font-mono-label text-sm font-semibold text-[#4F32CE] hover:translate-x-1 rtl:hover:-translate-x-1 transition-transform"
                >
                  {t.common.learnMore}
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>

                <button
                  onClick={() => onBookService(service.id)}
                  className="px-3 py-1.5 bg-[#4F32CE]/10 text-[#4F32CE] hover:bg-[#4F32CE] hover:text-white rounded text-xs font-mono-label font-medium transition-colors"
                >
                  {t.common.bookNow}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
