import React, { useState } from 'react';
import { X, CheckCircle2, Laptop, Smartphone, ArrowRight, Wrench } from 'lucide-react';
import { RepairTicket } from '../types';
import { useI18n } from '../i18n/I18nContext';

interface BookRepairModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTicketCreated: (ticket: RepairTicket) => void;
  preselectedServiceId?: string;
}

type BranchId = 'hq' | 'abdoun' | '7th';

export const BookRepairModal: React.FC<BookRepairModalProps> = ({
  isOpen,
  onClose,
  onTicketCreated,
  preselectedServiceId
}) => {
  const { t } = useI18n();
  const [step, setStep] = useState(1);
  const [deviceCategory, setDeviceCategory] = useState(preselectedServiceId || 'laptop');
  const [brandModel, setBrandModel] = useState('');
  const [issue, setIssue] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState<'dropoff' | 'courier'>('dropoff');
  const [branch, setBranch] = useState<BranchId>('hq');
  const [preferredDate, setPreferredDate] = useState('2026-07-29');
  const [createdTicket, setCreatedTicket] = useState<RepairTicket | null>(null);

  if (!isOpen) return null;

  const branchLabels: Record<BranchId, string> = {
    hq: t.book.branchHq,
    abdoun: t.book.branchAbdoun,
    '7th': t.book.branch7th,
  };

  const categories = [
    { id: 'laptop', name: t.book.catLaptop, icon: Laptop, desc: t.book.catLaptopDesc },
    { id: 'smartphone', name: t.book.catPhone, icon: Smartphone, desc: t.book.catPhoneDesc },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicketId = `VFE-${randomNum}`;

    const method =
      serviceType === 'courier' ? t.book.noteCourier : branchLabels[branch];

    const ticket: RepairTicket = {
      ticketId: newTicketId,
      customerName: customerName || t.book.defaultClient,
      deviceModel: brandModel || t.book.defaultDevice,
      issueDescription: issue || t.book.defaultIssue,
      status: 'Diagnostic',
      progressPercentage: 20,
      receivedDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      estimatedCompletion: t.book.eta,
      assignedTechnician: t.book.techName,
      technicianNotes: [
        t.book.noteCreated.replace('{method}', method),
        t.book.noteIntake,
      ],
      replacedComponents: [t.book.pendingParts],
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
          className="absolute top-4 end-4 text-[#474555] hover:text-[#191c1d] p-2 rounded-full hover:bg-[#F8F9FA]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        {step < 4 && (
          <div className="mb-6">
            <span className="font-mono-label text-xs text-[#4F32CE] uppercase tracking-wider font-bold">
              {t.book.eyebrow}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#191c1d]">
              {t.book.title}
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
              {t.book.step1}
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
                    className={`p-4 border rounded-lg text-start transition-all flex items-start gap-3 ${
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
                {t.common.nextStep}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Fault Details */}
        {step === 2 && (
          <div className="space-y-4">
            <p className="font-mono-label text-xs text-[#474555] uppercase font-semibold">
              {t.book.step2}
            </p>

            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                {t.book.brandLabel}
              </label>
              <input
                type="text"
                placeholder={t.book.brandPlaceholder}
                value={brandModel}
                onChange={(e) => setBrandModel(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE] focus:ring-1 focus:ring-[#4F32CE]"
                required
              />
            </div>

            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                {t.book.issueLabel}
              </label>
              <textarea
                rows={3}
                placeholder={t.book.issuePlaceholder}
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
                {t.common.back}
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!brandModel}
                className="bg-[#4F32CE] text-white px-6 py-3 font-mono-label text-sm font-semibold rounded-lg hover:bg-[#3704b8] disabled:opacity-50 flex items-center gap-2"
              >
                {t.common.nextStep}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact & Service Method */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="font-mono-label text-xs text-[#474555] uppercase font-semibold">
              {t.book.step3}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                  {t.book.nameLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.book.namePlaceholder}
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
                  required
                />
              </div>

              <div>
                <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                  {t.book.phoneLabel}
                </label>
                <input
                  type="tel"
                  placeholder={t.book.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                {t.book.logistics}
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
                  {t.book.dropoff}
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
                  {t.book.courier}
                </button>
              </div>
            </div>

            {serviceType === 'dropoff' ? (
              <div>
                <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                  {t.book.branchLabel}
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value as BranchId)}
                  className="w-full px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm focus:outline-none focus:border-[#4F32CE]"
                >
                  <option value="hq">{t.book.branchHq}</option>
                  <option value="abdoun">{t.book.branchAbdoun}</option>
                  <option value="7th">{t.book.branch7th}</option>
                </select>
              </div>
            ) : (
              <div>
                <label className="block font-mono-label text-xs font-bold text-[#191c1d] mb-1 uppercase">
                  {t.book.courierDate}
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
                {t.common.back}
              </button>
              <button
                type="submit"
                className="bg-[#4F32CE] text-white px-8 py-3 font-mono-label text-sm font-bold rounded-lg hover:bg-[#3704b8] flex items-center gap-2 shadow-md"
              >
                {t.book.confirm}
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
                {t.book.confirmed}
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#191c1d] mt-1">
                {t.book.ticketIdLabel} <span className="text-[#4F32CE]">{createdTicket.ticketId}</span>
              </h3>
              <p className="font-sans text-sm text-[#474555] mt-2 max-w-md mx-auto">
                {t.book.confirmedBody}
              </p>
            </div>

            {/* Ticket Card Details */}
            <div className="bg-[#F8F9FA] p-5 rounded-lg border border-[#e1e3e4] text-start font-mono-label text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#474555]">{t.book.clientName}</span>
                <span className="font-bold text-[#191c1d]">{createdTicket.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#474555]">{t.book.deviceModel}</span>
                <span className="font-bold text-[#191c1d]">{createdTicket.deviceModel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#474555]">{t.book.estimatedPrice}</span>
                <span className="font-bold text-[#4F32CE]">{createdTicket.costEstimate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#474555]">{t.book.assignedTech}</span>
                <span className="font-semibold text-[#191c1d]">{createdTicket.assignedTechnician}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onClose}
                className="w-full bg-[#4F32CE] text-white py-3 rounded-lg font-mono-label text-sm font-bold hover:bg-[#3704b8]"
              >
                {t.common.done}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
