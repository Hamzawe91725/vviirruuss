import React from 'react';
import { X, MapPin, Phone, Clock, Navigation, Check } from 'lucide-react';
import { storeLocations } from '../data/mockData';

interface StoreLocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookRepair: () => void;
}

export const StoreLocationsModal: React.FC<StoreLocationsModalProps> = ({
  isOpen,
  onClose,
  onBookRepair
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-[#e1e3e4] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6 sm:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#474555] hover:text-[#191c1d] p-2 rounded-full hover:bg-[#F8F9FA]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="font-mono-label text-xs text-[#4F32CE] uppercase tracking-wider font-bold flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            Amman Technical Centers
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#191c1d]">
            Store Locations & Operating Hours
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#474555] mt-1">
            Visit any of our authorized micro-labs for immediate walk-in diagnostics or courier drop-offs.
          </p>
        </div>

        {/* Store Cards */}
        <div className="space-y-4 mb-6">
          {storeLocations.map((loc) => (
            <div
              key={loc.id}
              className={`p-5 rounded-xl border transition-all ${
                loc.isMainBranch
                  ? 'border-[#4F32CE] bg-[#4F32CE]/5 shadow-xs'
                  : 'border-[#edeeef] bg-[#F8F9FA] hover:border-[#c9c4d7]'
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-lg font-bold text-[#191c1d]">
                    {loc.name}
                  </h3>
                  {loc.isMainBranch && (
                    <span className="bg-[#4F32CE] text-white px-2 py-0.5 rounded text-[10px] font-mono-label font-bold uppercase">
                      Main Lab & Headquarter
                    </span>
                  )}
                </div>

                <a
                  href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                  className="font-mono-label text-xs font-bold text-[#4F32CE] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {loc.phone}
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-label text-xs text-[#474555]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#4F32CE] flex-shrink-0 mt-0.5" />
                  <span>{loc.address}, {loc.city}</span>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#00B894] flex-shrink-0 mt-0.5" />
                  <span>{loc.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-[#edeeef] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono-label text-xs text-[#474555]">
            Need courier pickup from your home or office?
          </p>

          <button
            onClick={() => {
              onClose();
              onBookRepair();
            }}
            className="w-full sm:w-auto bg-[#4F32CE] text-white px-6 py-2.5 font-mono-label text-xs font-bold rounded-lg hover:bg-[#3704b8] shadow-sm"
          >
            Schedule Pick-up Online
          </button>
        </div>
      </div>
    </div>
  );
};
