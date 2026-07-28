import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, AlertCircle, Wrench, Shield, Phone } from 'lucide-react';
import { RepairTicket } from '../types';
import { useI18n } from '../i18n/I18nContext';

interface RepairTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  tickets: Record<string, RepairTicket>;
}

export const RepairTrackerModal: React.FC<RepairTrackerModalProps> = ({
  isOpen,
  onClose,
  tickets
}) => {
  const { t } = useI18n();
  const [searchId, setSearchId] = useState('VFE-8921');
  const [selectedTicketId, setSelectedTicketId] = useState('VFE-8921');

  if (!isOpen) return null;

  const activeTicket = tickets[selectedTicketId] || null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = searchId.trim().toUpperCase();
    if (tickets[cleanQuery]) {
      setSelectedTicketId(cleanQuery);
    } else {
      alert(t.tracker.notFound.replace('{id}', cleanQuery));
    }
  };

  const steps = [
    { title: t.tracker.steps.diagnostic, status: 'Diagnostic' },
    { title: t.tracker.steps.microsoldering, status: 'Microsoldering' },
    { title: t.tracker.steps.testing, status: 'Testing' },
    { title: t.tracker.steps.ready, status: 'Ready' }
  ];

  const statusPhaseLabel: Record<string, string> = {
    Diagnostic: t.tracker.steps.diagnostic,
    Microsoldering: t.tracker.steps.microsoldering,
    Testing: t.tracker.steps.testing,
    Ready: t.tracker.steps.ready,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-[#e1e3e4] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 end-4 text-[#474555] hover:text-[#191c1d] p-2 rounded-full hover:bg-[#F8F9FA]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="font-mono-label text-xs text-[#4F32CE] uppercase tracking-wider font-bold">
            {t.tracker.eyebrow}
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#191c1d]">
            {t.tracker.title}
          </h2>
        </div>

        {/* Search & Quick Pickers */}
        <div className="space-y-3 mb-6">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder={t.tracker.placeholder}
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="flex-1 px-4 py-2.5 border border-[#c9c4d7] rounded-lg text-sm font-mono-label font-bold text-[#191c1d] focus:outline-none focus:border-[#4F32CE]"
            />
            <button
              type="submit"
              className="bg-[#4F32CE] text-white px-5 py-2.5 rounded-lg font-mono-label text-sm font-bold hover:bg-[#3704b8] flex items-center gap-1.5"
            >
              <Search className="w-4 h-4" />
              {t.tracker.lookup}
            </button>
          </form>

          <div className="flex items-center gap-2 flex-wrap text-xs font-mono-label text-[#474555]">
            <span>{t.tracker.sampleTickets}</span>
            {Object.keys(tickets).map((id) => (
              <button
                key={id}
                onClick={() => {
                  setSearchId(id);
                  setSelectedTicketId(id);
                }}
                className={`px-2.5 py-1 rounded border transition-colors ${
                  selectedTicketId === id
                    ? 'bg-[#4F32CE] text-white border-[#4F32CE]'
                    : 'bg-[#F8F9FA] text-[#4F32CE] border-[#c9c4d7] hover:bg-[#e1e3e4]'
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        {/* Active Ticket Status View */}
        {activeTicket ? (
          <div className="space-y-6 border-t border-[#edeeef] pt-6">
            {/* Header Status Card */}
            <div className="bg-[#23232D] text-white p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-md">
              <div>
                <span className="font-mono-label text-xs text-[#FFC107] uppercase font-bold tracking-wider">
                  {t.tracker.ticketPrefix}{activeTicket.ticketId} • {activeTicket.customerName}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mt-1">
                  {activeTicket.deviceModel}
                </h3>
                <p className="font-sans text-xs text-[#e1e3e4] mt-1">
                  {t.tracker.issuePrefix} {activeTicket.issueDescription}
                </p>
              </div>

              <div className="bg-[#4F32CE] px-4 py-2 rounded-lg text-end font-mono-label text-xs font-bold text-white flex-shrink-0">
                <span className="block text-[#c7beff] text-[10px] uppercase">{t.tracker.currentPhase}</span>
                {statusPhaseLabel[activeTicket.status] ?? activeTicket.status}
              </div>
            </div>

            {/* Pipeline Stage Visualization */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono-label text-xs font-bold text-[#191c1d]">
                <span>{t.tracker.progress} {activeTicket.progressPercentage}%</span>
                <span className="text-[#4F32CE]">{t.tracker.estFinish} {activeTicket.estimatedCompletion}</span>
              </div>

              <div className="w-full bg-[#edeeef] h-3 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-[#4F32CE] h-full transition-all duration-500"
                  style={{ width: `${activeTicket.progressPercentage}%` }}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {steps.map((st, i) => {
                  const isDone =
                    (st.status === 'Diagnostic' && activeTicket.progressPercentage >= 25) ||
                    (st.status === 'Microsoldering' && activeTicket.progressPercentage >= 50) ||
                    (st.status === 'Testing' && activeTicket.progressPercentage >= 75) ||
                    (st.status === 'Ready' && activeTicket.progressPercentage === 100);

                  return (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border text-center font-mono-label text-xs ${
                        isDone
                          ? 'border-[#4F32CE] bg-[#4F32CE]/10 text-[#4F32CE] font-bold'
                          : 'border-[#edeeef] text-[#787586] bg-[#F8F9FA]'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4F32CE]" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-[#787586]" />
                        )}
                        <span>{t.tracker.phase} 0{i + 1}</span>
                      </div>
                      <p className="text-[11px] font-sans">{st.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Technical Log & Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#F8F9FA] p-5 rounded-lg border border-[#edeeef]">
                <h4 className="font-mono-label text-xs font-bold text-[#191c1d] uppercase mb-3 flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-[#4F32CE]" />
                  {t.tracker.techLog}
                </h4>
                <ul className="space-y-2 font-sans text-xs text-[#474555]">
                  {activeTicket.technicianNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2 border-b border-[#e1e3e4] pb-1.5 last:border-none">
                      <span className="text-[#4F32CE] font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F8F9FA] p-5 rounded-lg border border-[#edeeef] flex flex-col justify-between">
                <div>
                  <h4 className="font-mono-label text-xs font-bold text-[#191c1d] uppercase mb-3 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-[#00B894]" />
                    {t.tracker.replacedParts}
                  </h4>
                  <ul className="space-y-1.5 font-sans text-xs text-[#474555] mb-4">
                    {activeTicket.replacedComponents.map((comp, idx) => (
                      <li key={idx} className="bg-white px-2.5 py-1 rounded border border-[#e1e3e4] font-mono-label">
                        {comp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#e1e3e4] flex items-center justify-between font-mono-label text-xs">
                  <span className="text-[#474555]">{t.tracker.estimateCost}</span>
                  <span className="font-extrabold text-[#4F32CE] text-sm">{activeTicket.costEstimate}</span>
                </div>
              </div>
            </div>

            {/* Direct Tech Support Contact */}
            <div className="bg-[#4F32CE]/5 p-4 rounded-lg border border-[#4F32CE]/20 flex items-center justify-between text-xs font-mono-label text-[#474555]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#4F32CE]" />
                <span>{t.tracker.assignedLead} <strong>{activeTicket.assignedTechnician}</strong></span>
              </div>
              <a
                href="tel:+962777772047"
                className="text-[#4F32CE] font-bold underline hover:text-[#3704b8]"
              >
                {t.tracker.callLab}
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-[#474555]">
            <AlertCircle className="w-12 h-12 text-[#4F32CE] mx-auto mb-3" />
            <p className="font-mono-label text-sm font-bold">{t.tracker.selectTicket}</p>
          </div>
        )}
      </div>
    </div>
  );
};
