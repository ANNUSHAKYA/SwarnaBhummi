"use client";

import React, { useState, useEffect } from "react";
import {
  MessageSquareCheck,
  CheckCircle2,
  Copy,
  Check,
  X,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  FileText,
} from "lucide-react";
import { VENUE_CONFIG } from "@/config/venue";

export default function ClientFeedbackSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    VENUE_CONFIG.clientFeedback.topics[0].id
  );
  const [hasCopied, setHasCopied] = useState(false);

  const selectedTopic =
    VENUE_CONFIG.clientFeedback.topics.find((t) => t.id === selectedTopicId) ||
    VENUE_CONFIG.clientFeedback.topics[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedTopic.sampleDraft);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <section className="w-full bg-[#18261C] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#C9A96E]/20 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Concept Review</span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F0E4] tracking-tight">
            {VENUE_CONFIG.clientFeedback.sectionTitle}
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-sm sm:text-base text-[#F7F0E4]/80 max-w-3xl mx-auto leading-relaxed font-light">
            {VENUE_CONFIG.clientFeedback.sectionDescription}
          </p>

          {/* Primary CTA Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#DFCA9E] via-[#C9A96E] to-[#B38F52] hover:from-[#EBD9B2] hover:to-[#C49E5D] text-[#263D2C] font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <MessageSquareCheck className="w-4 h-4 text-[#263D2C]" />
              <span>{VENUE_CONFIG.clientFeedback.ctaButtonText}</span>
              <ArrowRight className="w-4 h-4 text-[#263D2C]" />
            </button>
          </div>

          <p className="text-[11px] text-[#C9A96E]/70 mt-4 italic">
            * Local concept review tool. Generates customizable feedback drafts for internal team alignment.
          </p>
        </div>
      </section>

      {/* Discussion Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="feedback-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#263D2C] text-[#F7F0E4] rounded-3xl border border-[#C9A96E]/40 shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-black/30 hover:bg-black/50 text-[#F7F0E4]/70 hover:text-[#F7F0E4] border border-white/10 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8 shrink-0">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C9A96E]">
                Client Alignment & Concept Review
              </span>
              <h3
                id="feedback-modal-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F0E4] mt-1"
              >
                Discuss This Website Concept
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F0E4]/75 mt-1 leading-relaxed">
                Select a review topic below to generate a tailored response draft to share with your web development partner.
              </p>
            </div>

            {/* Scrollable Body */}
            <div className="space-y-6 overflow-y-auto pr-1 flex-grow">
              {/* Review Options (4 options) */}
              <div>
                <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-2.5">
                  Select Review Topic:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {VENUE_CONFIG.clientFeedback.topics.map((topic) => {
                    const isSelected = selectedTopicId === topic.id;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopicId(topic.id)}
                        className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "bg-[#C9A96E]/20 border-[#C9A96E] text-[#F7F0E4] shadow-md ring-1 ring-[#C9A96E]/50"
                            : "bg-black/25 border-white/10 text-[#F7F0E4]/75 hover:border-[#C9A96E]/40 hover:text-[#F7F0E4]"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="text-xs font-bold leading-snug">
                            {topic.title}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-[#C9A96E] shrink-0 ml-2" />
                          )}
                        </div>
                        <span className="text-[11px] text-[#F7F0E4]/60 leading-tight">
                          {topic.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sample Draft Message Box */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-[#C9A96E] uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span>Sample Draft Message (Ready to Copy)</span>
                  </label>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#C9A96E] hover:bg-[#D8BD87] text-[#263D2C] text-xs font-bold transition cursor-pointer"
                  >
                    {hasCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-900" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#263D2C]" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-[#C9A96E]/30 font-sans text-xs sm:text-sm text-[#F7F0E4]/90 leading-relaxed whitespace-pre-wrap select-all">
                  {selectedTopic.sampleDraft}
                </div>
              </div>

              {/* Demo Notice Disclaimer */}
              <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 text-[11px] text-[#F7F0E4]/65 leading-relaxed flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> This feedback tool operates locally inside your browser for review convenience. It does not submit your draft to external databases or send automated emails. Copy the draft above to share via your preferred messaging channel.
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end shrink-0">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-black/30 hover:bg-black/50 text-[#F7F0E4] text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
