import React, { useState } from 'react';
import { Menu, X, Search, Wrench, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenBookRepair: () => void;
  onOpenTracker: () => void;
  onOpenCalculator: () => void;
  onOpenLocations: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBookRepair,
  onOpenTracker,
  onOpenCalculator,
  onOpenLocations
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-[#edeeef] shadow-xs">
      <div className="flex justify-between items-center w-full px-4 sm:px-8 md:px-12 py-3.5 max-w-[1280px] mx-auto">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group shrink-0">
          <img
            src="/logo.png"
            alt="VIRUS For Electronic Waste Recycling"
            className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <a
            href="#services"
            className="text-[#4F32CE] border-b-2 border-[#4F32CE] pb-1 font-mono-label text-sm font-medium"
          >
            Services
          </a>
          <a
            href="#why-us"
            className="text-[#474555] hover:text-[#4F32CE] transition-colors font-mono-label text-sm font-medium"
          >
            Why Us
          </a>
          <a
            href="#features"
            className="text-[#474555] hover:text-[#4F32CE] transition-colors font-mono-label text-sm font-medium"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-[#474555] hover:text-[#4F32CE] transition-colors font-mono-label text-sm font-medium"
          >
            Testimonials
          </a>
          <button
            onClick={onOpenTracker}
            className="text-[#474555] hover:text-[#4F32CE] transition-colors font-mono-label text-sm font-medium flex items-center gap-1.5"
          >
            <Clock className="w-4 h-4 text-[#4F32CE]" />
            Track Repair
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCalculator}
            className="text-[#474555] hover:text-[#4F32CE] transition-colors font-mono-label text-sm font-medium px-3 py-2 rounded-md hover:bg-[#f3f4f5] flex items-center gap-1.5"
          >
            <Search className="w-4 h-4" />
            Quote Calc
          </button>
          
          <button
            onClick={onOpenLocations}
            className="text-[#474555] hover:text-[#4F32CE] transition-colors font-mono-label text-sm font-medium px-3 py-2 rounded-md hover:bg-[#f3f4f5] flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4 text-[#4F32CE]" />
            Branches
          </button>

          <button
            onClick={onOpenBookRepair}
            className="bg-[#4F32CE] text-white px-5 py-2.5 font-mono-label text-sm font-medium hover:bg-[#3704b8] active:scale-95 transition-all duration-150 rounded-lg shadow-sm flex items-center gap-2"
          >
            <Wrench className="w-4 h-4" />
            Book Repair
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#191c1d] hover:text-[#4F32CE]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e1e3e4] px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 font-mono-label text-sm">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#4F32CE] font-semibold border-b border-[#edeeef]"
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#474555] hover:text-[#4F32CE]"
            >
              Why Us
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#474555] hover:text-[#4F32CE]"
            >
              Features
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#474555] hover:text-[#4F32CE]"
            >
              Testimonials
            </a>
          </div>

          <div className="pt-3 border-t border-[#edeeef] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="w-full text-left font-mono-label text-sm text-[#4F32CE] py-2 flex items-center gap-2 font-medium"
            >
              <Clock className="w-4 h-4" />
              Track Existing Repair Status
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full text-left font-mono-label text-sm text-[#474555] py-2 flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Instant Quote Estimator
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLocations();
              }}
              className="w-full text-left font-mono-label text-sm text-[#474555] py-2 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#4F32CE]" />
              Store Locations & Hours
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookRepair();
              }}
              className="w-full bg-[#4F32CE] text-white py-3 font-mono-label text-sm font-medium rounded-lg text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Wrench className="w-4 h-4" />
              Book Repair Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
