import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ValuePropSection } from './components/ValuePropSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

import { BookRepairModal } from './components/BookRepairModal';
import { RepairTrackerModal } from './components/RepairTrackerModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { StoreLocationsModal } from './components/StoreLocationsModal';
import { ProcessModal } from './components/ProcessModal';

import { servicesData, sampleRepairTickets } from './data/mockData';
import { ServiceItem, RepairTicket } from './types';
import { ArrowUp } from 'lucide-react';

export default function App() {
  // Modal Visibility States
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState(false);
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);
  const [isLocationsModalOpen, setIsLocationsModalOpen] = useState(false);
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Preselected category for book modal
  const [preselectedCategory, setPreselectedCategory] = useState<string>('laptop');

  // Repair Tickets Session Store
  const [ticketsStore, setTicketsStore] = useState<Record<string, RepairTicket>>(sampleRepairTickets);

  // Back To Top Visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTicketCreated = (newTicket: RepairTicket) => {
    setTicketsStore((prev) => ({
      ...prev,
      [newTicket.ticketId]: newTicket
    }));
  };

  const handleBookWithCategory = (cat: string) => {
    setPreselectedCategory(cat);
    setIsBookModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#191c1d] flex flex-col font-sans selection:bg-[#4F32CE] selection:text-white">
      {/* Top Header Navbar */}
      <Header
        onOpenBookRepair={() => setIsBookModalOpen(true)}
        onOpenTracker={() => setIsTrackerModalOpen(true)}
        onOpenCalculator={() => setIsCalculatorModalOpen(true)}
        onOpenLocations={() => setIsLocationsModalOpen(true)}
      />

      {/* Main Page Layout Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onBookRepair={() => setIsBookModalOpen(true)}
          onExploreSolutions={() => {
            const elem = document.getElementById('services');
            elem?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenTracker={() => setIsTrackerModalOpen(true)}
        />

        {/* Technical Services Section */}
        <ServicesSection
          services={servicesData}
          onSelectService={(srv) => setSelectedService(srv)}
          onBookService={(serviceId) => handleBookWithCategory(serviceId)}
          onViewAll={() => setSelectedService(servicesData[0])}
        />

        {/* Why Us / Virus Difference Section */}
        <WhyUsSection onOpenProcess={() => setIsProcessModalOpen(true)} />

        {/* Value Proposition Bento Grid */}
        <ValuePropSection />

        {/* Testimonials Carousel */}
        <TestimonialsSection />

        {/* Call To Action Banner */}
        <CtaSection
          onOpenCalculator={() => setIsCalculatorModalOpen(true)}
          onOpenLocations={() => setIsLocationsModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLocations={() => setIsLocationsModalOpen(true)}
        onOpenBookRepair={() => setIsBookModalOpen(true)}
        onOpenTracker={() => setIsTrackerModalOpen(true)}
      />

      {/* Floating Back To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-[#4F32CE] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40 hover:bg-[#3704b8] active:scale-95 ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Modals & Dialog Flow */}
      <BookRepairModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        onTicketCreated={handleTicketCreated}
        preselectedServiceId={preselectedCategory}
      />

      <RepairTrackerModal
        isOpen={isTrackerModalOpen}
        onClose={() => setIsTrackerModalOpen(false)}
        tickets={ticketsStore}
      />

      <QuoteCalculatorModal
        isOpen={isCalculatorModalOpen}
        onClose={() => setIsCalculatorModalOpen(false)}
        onBookWithQuote={(category) => handleBookWithCategory(category)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookNow={(srvId) => handleBookWithCategory(srvId)}
      />

      <StoreLocationsModal
        isOpen={isLocationsModalOpen}
        onClose={() => setIsLocationsModalOpen(false)}
        onBookRepair={() => setIsBookModalOpen(true)}
      />

      <ProcessModal
        isOpen={isProcessModalOpen}
        onClose={() => setIsProcessModalOpen(false)}
        onBookRepair={() => setIsBookModalOpen(true)}
      />
    </div>
  );
}
