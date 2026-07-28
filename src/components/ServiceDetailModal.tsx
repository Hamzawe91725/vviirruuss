import React from 'react';
import { ServiceItem } from '../types';
import { X, Check, Wrench, Clock, DollarSign, ShieldCheck, Cpu } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookNow: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookNow
}) => {
  const { t } = useI18n();

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-[#e1e3e4] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-6 sm:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 end-4 text-[#474555] hover:text-[#191c1d] p-2 rounded-full hover:bg-[#F8F9FA] z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-[#F8F9FA] mb-6 relative">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 end-3 bg-black/75 text-white px-3 py-1 rounded font-mono-label text-xs font-bold backdrop-blur-xs">
            {t.serviceDetail.startsAt} {service.startingPrice}
          </div>
        </div>

        {/* Service Header */}
        <div className="mb-6">
          <span className="font-mono-label text-xs text-[#4F32CE] uppercase tracking-wider font-bold">
            {t.serviceDetail.deepDive}
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#191c1d] mt-1">
            {service.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#474555] mt-3 leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Key Specifications Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[#F8F9FA] rounded-lg border border-[#e1e3e4] font-mono-label text-xs">
          <div>
            <span className="text-[#787586] block text-[10px] uppercase">{t.serviceDetail.turnaround}</span>
            <span className="font-bold text-[#191c1d] flex items-center gap-1.5 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-[#4F32CE]" />
              {service.turnaround}
            </span>
          </div>

          <div>
            <span className="text-[#787586] block text-[10px] uppercase">{t.serviceDetail.warranty}</span>
            <span className="font-bold text-[#00B894] flex items-center gap-1.5 mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              {t.serviceDetail.warrantyValue}
            </span>
          </div>
        </div>

        {/* Service Features & Tools */}
        <div className="space-y-4 mb-8">
          <div>
            <h4 className="font-mono-label text-xs font-bold text-[#191c1d] uppercase mb-2">
              {t.serviceDetail.included}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-mono-label text-[#474555]">
                  <Check className="w-4 h-4 text-[#4F32CE] flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono-label text-xs font-bold text-[#191c1d] uppercase mb-2">
              {t.serviceDetail.equipment}
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-[#4F32CE]/10 text-[#4F32CE] rounded text-xs font-mono-label font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-[#edeeef] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 font-mono-label text-xs text-[#474555] hover:text-[#191c1d]"
          >
            {t.common.close}
          </button>
          
          <button
            onClick={() => {
              onClose();
              onBookNow(service.id);
            }}
            className="bg-[#4F32CE] text-white px-8 py-3 font-mono-label text-sm font-bold rounded-lg hover:bg-[#3704b8] transition-colors shadow-md flex items-center gap-2"
          >
            <Wrench className="w-4 h-4" />
            {t.serviceDetail.bookThis}
          </button>
        </div>
      </div>
    </div>
  );
};
