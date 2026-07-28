import React from 'react';
import { MapPin, Phone, Mail, Globe, AtSign } from 'lucide-react';

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
  return (
    <footer className="bg-[#F8F9FA] border-t border-[#e1e3e4] text-[#191c1d]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 md:px-12 py-16 max-w-[1280px] mx-auto">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-1">
          <img
            src="/logo.png"
            alt="VIRUS For Electronic Waste Recycling"
            className="h-20 w-auto object-contain mb-4"
          />
          <p className="font-sans text-sm text-[#474555] mb-6 leading-relaxed">
            Precision engineering for digital reliability. The region's premier technical service center for elite hardware.
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#c9c4d7] bg-white flex items-center justify-center text-[#474555] hover:text-[#4F32CE] hover:border-[#4F32CE] transition-all"
              aria-label="Website"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@virustech.jo"
              className="w-10 h-10 rounded-full border border-[#c9c4d7] bg-white flex items-center justify-center text-[#474555] hover:text-[#4F32CE] hover:border-[#4F32CE] transition-all"
              aria-label="Email Us"
            >
              <AtSign className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <h4 className="font-mono-label text-xs sm:text-sm text-[#191c1d] font-bold mb-6 uppercase tracking-wider">
            Services
          </h4>
          <ul className="space-y-3 font-sans text-sm text-[#464651]">
            <li>
              <a href="#services" className="hover:text-[#4F32CE] transition-colors">
                Laptop Repair & Thermal Overhaul
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#4F32CE] transition-colors">
                Mobile Maintenance & Screen Swap
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#4F32CE] transition-colors">
                NAND & Cleanroom Data Recovery
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#4F32CE] transition-colors">
                Enterprise IT & Server Audit
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Navigation */}
        <div>
          <h4 className="font-mono-label text-xs sm:text-sm text-[#191c1d] font-bold mb-6 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-3 font-sans text-sm text-[#464651]">
            <li>
              <button onClick={onOpenBookRepair} className="hover:text-[#4F32CE] transition-colors">
                Book a Repair Online
              </button>
            </li>
            <li>
              <button onClick={onOpenTracker} className="hover:text-[#4F32CE] transition-colors">
                Check Order Status (Ticket ID)
              </button>
            </li>
            <li>
              <button onClick={onOpenLocations} className="hover:text-[#4F32CE] transition-colors">
                Store Locations & Hours
              </button>
            </li>
            <li>
              <a href="#why-us" className="hover:text-[#4F32CE] transition-colors">
                Why Us & Lab Certifications
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h4 className="font-mono-label text-xs sm:text-sm text-[#191c1d] font-bold mb-6 uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-4 font-sans text-sm text-[#474555]">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#4F32CE] flex-shrink-0 mt-0.5" />
              <span>123 Technology Park, IT District, Amman</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#4F32CE] flex-shrink-0" />
              <span>+962 6 500 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#4F32CE] flex-shrink-0" />
              <span>contact@virustech.jo</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#e1e3e4] py-8 px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono-label text-[#464651]">
        <p>© 2024 Virus For Electronics. Precision Engineering for Digital Reliability.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#4F32CE] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#4F32CE] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
