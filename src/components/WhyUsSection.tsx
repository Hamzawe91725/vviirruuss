import React from 'react';
import { whyUsLabImage } from '../data/mockData';
import { Award, Zap, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

interface WhyUsSectionProps {
  onOpenProcess: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onOpenProcess }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA] overflow-hidden" id="why-us">
      <div className="px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 aspect-square overflow-hidden rounded-xl shadow-xl border border-[#e1e3e4]">
              <img
                src={whyUsLabImage}
                alt="State of the art electronics repair lab"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glowing Backdrop */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#4F32CE]/15 -z-10 rounded-full blur-3xl" />

            {/* Floating Experience Badge */}
            <div className="absolute -top-8 -left-8 p-6 sm:p-8 bg-white shadow-xl rounded-xl border border-[#e1e3e4] hidden lg:block z-20">
              <p className="font-heading text-3xl sm:text-4xl font-extrabold text-[#4F32CE] mb-1">
                15+
              </p>
              <p className="font-mono-label text-xs text-[#474555] uppercase tracking-wider font-semibold">
                Years Experience
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div>
              <span className="font-mono-label text-xs sm:text-sm text-[#4F32CE] uppercase tracking-widest font-bold block mb-2">
                The Virus Difference
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1d] tracking-tight leading-tight">
                Why Clients Trust Our Technical Expertise
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#474555] leading-relaxed">
              At Virus For Electronics, we go beyond simple repairs. Our mission is to restore the integrity of your digital lifecycle through uncompromising engineering standards and high-transparency service.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4F32CE]/10 flex items-center justify-center text-[#4F32CE]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-mono-label text-sm sm:text-base font-bold text-[#191c1d] mb-1 uppercase tracking-wider">
                    Certified Specialists
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#474555]">
                    Every technician holds industry-leading certifications in hardware engineering, micro-soldering, and network security.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4F32CE]/10 flex items-center justify-center text-[#4F32CE]">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-mono-label text-sm sm:text-base font-bold text-[#191c1d] mb-1 uppercase tracking-wider">
                    Rapid Deployment
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#474555]">
                    We prioritize downtime reduction with 24-hour turnaround on most standard hardware repairs and same-day emergency options.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenProcess}
                className="bg-[#4F32CE] text-white px-8 py-4 font-mono-label text-sm font-semibold rounded-lg hover:bg-[#3704b8] active:scale-98 transition-all shadow-sm flex items-center gap-2"
              >
                Learn About Our Process
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
