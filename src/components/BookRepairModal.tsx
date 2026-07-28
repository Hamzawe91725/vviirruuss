import React, { useState } from 'react';
import { X, CheckCircle2, Laptop, Smartphone, ArrowRight, Wrench } from 'lucide-react';
import { RepairTicket } from '../types';

interface BookRepairModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTicketCreated: (ticket: RepairTicket) => void;
  preselectedServiceId?: string;
}

export const BookRepairModal: React.FC<BookRepairModalProps> = ({
  isOpen,
  onClose,
  onTicketCreated,
  preselectedServiceId
}) => {
  const [step, setStep] = useState(1);
  const [deviceCategory, setDeviceCategory] = useState(preselectedServiceId || 'laptop');
  const [brandModel, setBrandModel] = useState('');
  const [issue, setIssue] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState<'dropoff' | 'courier'>('dropoff');
  const [branch, setBranch] = useState('Amman Headquarters - IT District');
  const [preferredDate, setPreferredDate] = useState('2026-07-29');
  const [createdTicket, setCreatedTicket] = useState<RepairTicket | null>(null);

  if (!isOpen) return null;

  const categories = [
    { id: 'laptop', name: 'Laptop / MacBook', icon: Laptop, desc: 'Motherboard, liquid spill, thermal paste, screens' },
    { id: 'smartphone', name: 'Smartphone / Tablet', icon: Smartphone, desc: 'OLED screen, battery, IC microsoldering' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicketId = `VFE-${randomNum}`;

    const ticket: RepairTicket = {
      ticketId: newTicketId,
      customerName: customerName || 'Valued Client',
      deviceModel: brandModel || 'Hardware Unit',
      issueDescription: issue || 'General Hardware Diagnostics & Repair',
      status: 'Diagnostic',
      progressPercentage: 20,
      receivedDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      estimatedCompletion: 'Within 24-48 Hours',
      assignedTechnician: 'Eng. Rami Saleh (Senior Repair Specialist)',
      technicianNotes: [
        `Ticket created via Online Booking Portal for ${serviceType === 'courier' ? 'Express Courier Pickup' : branch}.`,
        'Initial intake diagnostic scheduled upon device arrival.'
      ],
      replacedComponents: ['Pending Diagnostic Assessment'],
      costEstimate: deviceCategory === 'smartphone' ? '$45 - $85' : deviceCategory === 'laptop' ? '$65 - $130' : '$120 - $250'
    };

    setCreatedTicket(ticket);
    onTicketCreated(ticket);
    setStep(4); // Success step
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-[#e1e3e4] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-6 sm:p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#474555] hover:text-[#191c1d] p-2 rounded-full hover:bg-[#F8F9FA]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        {step < 4 && (
          <div className="mb-6">
            <span className="font-mono-label text-xs text-[#4F32CE] uppercase tracking-wider font-bold">
              Online Repair Booking Portal
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#191c1d]">
              Book Your Technical Service
            </h2>
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    s <= step ? 'bg-[#4F32CE]' : 'bg-[#e1e3e4]'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Device Category */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="font-mono-label text-xs text-[#474555] uppercase font-semibold">
              Step 1: Select Your Hardware Category
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((cat) => {
                const IconComp = cat.icon;
                const isSelected = deviceCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setDeviceCategory(cat.id)}
                    className={`p-4 border rounded-lg text-left transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-[#4F32CE] bg-[#4F32CE]/5 ring-1 ring-[#4F32CE]'
                        : 'border-[#edeeef] hover:border-[#4F32CE]/50 bg-white'
                    }`}
                  >
                    <IconComp className={`w-6 h-6 mt-0.5 ${isSelected ? 'text-[#4F32CE]' : 'text-[#474555]'}`} />
                    <div>
                      <p className="font-mono-label text-sm font-bold text-[#191c1d]">{cat.name}</p>
                      <p className="font-sans text-xs text-[#474555] mt-1">{cat.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-6 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="bg-[#4F32CE] text-white px-6 py-3 font-mono-label text-sm font-semibold rounded-lg hover:bg-[#3704b8] flex items-center gap-2"
              >
                Next Step
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Fault Details */}
        {step === 2 && (
          <div className="space-y-4">
            <p className="font-mono-label text-xs text-[#474555] uppercase font-semibold">
              Step 2: Device Model & Fault Description
            </p>

            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                Brand & Exact Model
              </label>
              <input
                type="text"
                placeholder="e.g. MacBook Pro 16 M2 / iPhone 15 Pro / Dell XPS 15"
                value={brandModel}
                onChange={(e) => setBrandModel(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE] focus:ring-1 focus:ring-[#4F32CE]"
                required
              />
            </div>

            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                Describe the Issue / Fault
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Liquid spill on keyboard, device turns off under load, cracked front OLED display, thermal overheating noise..."
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE] focus:ring-1 focus:ring-[#4F32CE]"
                required
              />
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-sm font-mono-label text-[#474555] hover:text-[#191c1d]"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!brandModel}
                className="bg-[#4F32CE] text-white px-6 py-3 font-mono-label text-sm font-semibold rounded-lg hover:bg-[#3704b8] disabled:opacity-50 flex items-center gap-2"
              >
                Next Step
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact & Service Method */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="font-mono-label text-xs text-[#474555] uppercase font-semibold">
              Step 3: Contact Information & Logistics
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Layla Mansour"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
                  required
                />
              </div>

              <div>
                <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                  Mobile Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+962 7 9000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                Service Logistics
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceType('dropoff')}
                  className={`p-3 border rounded-lg text-center font-mono-label text-xs font-bold ${
                    serviceType === 'dropoff'
                      ? 'border-[#4F32CE] bg-[#4F32CE]/10 text-[#4F32CE]'
                      : 'border-[#edeeef] text-[#474555]'
                  }`}
                >
                  Store Drop-off
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('courier')}
                  className={`p-3 border rounded-lg text-center font-mono-label text-xs font-bold ${
                    serviceType === 'courier'
                      ? 'border-[#4F32CE] bg-[#4F32CE]/10 text-[#4F32CE]'
                      : 'border-[#edeeef] text-[#474555]'
                  }`}
                >
                  Express Courier Pick-up
                </button>
              </div>
            </div>

            {serviceType === 'dropoff' ? (
              <div>
                <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                  Preferred Branch
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
                >
                  <option value="Amman Headquarters - IT District">Amman Headquarters - IT District</option>
                  <option value="Virus Express Care - Abdoun Mall">Virus Express Care - Abdoun Mall</option>
                  <option value="Virus Micro-Lab - 7th Circle">Virus Micro-Lab - 7th Circle</option>
                </select>
              </div>
            ) : (
              <div>
                <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                  Preferred Courier Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
                />
              </div>
            )}

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 text-sm font-mono-label text-[#474555]"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-[#4F32CE] text-white px-8 py-3 font-mono-label text-sm font-bold rounded-lg hover:bg-[#3704b8] flex items-center gap-2 shadow-md"
              >
                Confirm & Generate Ticket
                <Wrench className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Success & Generated Ticket */}
        {step === 4 && createdTicket && (
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#00B894]/10 text-[#00B894] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="font-mono-label text-xs text-[#00B894] font-bold uppercase tracking-wider">
                Repair Order Confirmed
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#191c1d] mt-1">
                Your Ticket ID: <span className="text-[#4F32CE]">{createdTicket.ticketId}</span>
              </h3>
              <p className="font-sans text-sm text-[#474555] mt-2 max-w-md mx-auto">
                We have registered your hardware booking in our lab system. Save this Ticket ID to track your live repair progress anytime!
              </p>
            </div>

            {/* Ticket Card Details */}
            <div className="bg-[#F8F9FA] p-5 rounded-lg border border-[#e1e3e4] text-left font-mono-label text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#474555]">Client Name:</span>
                <span className="font-bold text-[#191c1d]">{createdTicket.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#474555]">Device Model:</span>
                <span className="font-bold text-[#191c1d]">{createdTicket.deviceModel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#474555]">Estimated Price:</span>
                <span className="font-bold text-[#4F32CE]">{createdTicket.costEstimate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#474555]">Assigned Tech:</span>
                <span className="font-semibold text-[#191c1d]">{createdTicket.assignedTechnician}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onClose}
                className="w-full bg-[#4F32CE] text-white py-3 rounded-lg font-mono-label text-sm font-bold hover:bg-[#3704b8]"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
