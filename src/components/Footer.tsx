import React from 'react';
import { MapPin, Phone, Mail, Globe, AtSign } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface FooterProps {
  onOpenLocations: () => void;
  onOpenBookRepair: () => void;
  onOpenTracker: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLocations,
  onOpenBookRepair,
  onOpenTracker
}) => {
  const { t } = useI18n();

  return (
    <footer className="bg-[#F8F9FA] border-t border-[#e1e3e4] text-[#191c1d]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 md:px-12 py-16 max-w-[1280px] mx-auto">
        <div className="lg:col-span-1">
          <img
            src="/logo.png"
            alt={t.common.logoAlt}
            className="h-20 w-auto object-contain mb-4"
          />
          <p className="font-sans text-sm text-[#474555] mb-6 leading-relaxed">
            {t.footer.blurb}
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#c9c4d7] bg-white flex items-center justify-center text-[#474555] hover:text-[#4F32CE] hover:border-[#4F32CE] transition-all"
              aria-label={t.common.website}
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@virustech.jo"
              className="w-10 h-10 rounded-full border border-[#c9c4d7] bg-white flex items-center justify-center text-[#474555] hover:text-[#4F32CE] hover:border-[#4F32CE] transition-all"
              aria-label={t.common.emailUs}
            >
              <AtSign className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono-label text-xs sm:text-sm text-[#191c1d] font-bold mb-6 uppercase tracking-wider">
            {t.footer.services}
          </h4>
          <ul className="space-y-3 font-sans text-sm text-[#464651]">
            <li>
              <a href="#services" className="hover:text-[#4F32CE] transition-colors">
                {t.footer.serviceLaptop}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#4F32CE] transition-colors">
                {t.footer.serviceMobile}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#4F32CE] transition-colors">
                {t.footer.serviceData}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#4F32CE] transition-colors">
                {t.footer.serviceIt}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono-label text-xs sm:text-sm text-[#191c1d] font-bold mb-6 uppercase tracking-wider">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-3 font-sans text-sm text-[#464651]">
            <li>
              <button onClick={onOpenBookRepair} className="hover:text-[#4F32CE] transition-colors">
                {t.footer.bookOnline}
              </button>
            </li>
            <li>
              <button onClick={onOpenTracker} className="hover:text-[#4F32CE] transition-colors">
                {t.footer.checkStatus}
              </button>
            </li>
            <li>
              <button onClick={onOpenLocations} className="hover:text-[#4F32CE] transition-colors">
                {t.footer.storeHours}
              </button>
            </li>
            <li>
              <a href="#why-us" className="hover:text-[#4F32CE] transition-colors">
                {t.footer.whyUsLabs}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono-label text-xs sm:text-sm text-[#191c1d] font-bold mb-6 uppercase tracking-wider">
            {t.footer.contact}
          </h4>
          <ul className="space-y-4 font-sans text-sm text-[#474555]">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#4F32CE] flex-shrink-0 mt-0.5" />
              <span>{t.footer.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#4F32CE] flex-shrink-0" />
              <a href="tel:+962777772047" className="hover:text-[#4F32CE] transition-colors">
                {t.footer.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#4F32CE] flex-shrink-0" />
              <span>contact@virustech.jo</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e1e3e4] py-8 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono-label text-[#464651]">
        <p>{t.footer.copyright}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#4F32CE] transition-colors">
            {t.footer.privacy}
          </a>
          <a href="#" className="hover:text-[#4F32CE] transition-colors">
            {t.footer.terms}
          </a>
        </div>
      </div>
    </footer>
  );
};
