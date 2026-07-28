import React, { useState } from 'react';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { useLocalizedTestimonials } from '../i18n/useLocalizedContent';

export const TestimonialsSection: React.FC = () => {
  const { t } = useI18n();
  const testimonials = useLocalizedTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]" id="testimonials">
      <div className="px-4 sm:px-8 md:px-12 max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#191c1d] tracking-tight">
              {t.testimonials.title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#474555] mt-1">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#c9c4d7] bg-white flex items-center justify-center hover:bg-[#4F32CE] hover:text-white hover:border-[#4F32CE] transition-all shadow-2xs"
              aria-label={t.testimonials.prev}
            >
              <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#c9c4d7] bg-white flex items-center justify-center hover:bg-[#4F32CE] hover:text-white hover:border-[#4F32CE] transition-all shadow-2xs"
              aria-label={t.testimonials.next}
            >
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white p-8 sm:p-10 border border-[#edeeef] rounded-xl flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow ${
                idx === currentIndex ? 'ring-2 ring-[#4F32CE]/30' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-[#4F32CE]/30" />
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                  </div>
                </div>

                <p className="font-sans text-base sm:text-lg text-[#191c1d] mb-8 italic leading-relaxed">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-[#edeeef] pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#e1e3e4] border border-[#c9c4d7]">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-mono-label text-sm sm:text-base font-bold text-[#191c1d]">
                    {item.author}
                  </p>
                  <p className="font-mono-label text-xs sm:text-sm text-[#474555]">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
