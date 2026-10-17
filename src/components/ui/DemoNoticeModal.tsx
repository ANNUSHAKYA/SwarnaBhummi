"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  X,
  Phone,
  MessageCircle,
  Mail,
  Calendar,
  ShieldAlert,
  Info,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { VENUE_CONFIG } from "@/config/venue";

export type DemoModalType =
  | "whatsapp"
  | "phone"
  | "email"
  | "instagram"
  | "booking"
  | null;

interface DemoModalContextType {
  openDemoModal: (type: DemoModalType) => void;
  closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType>({
  openDemoModal: () => {},
  closeDemoModal: () => {},
});

export const useDemoModal = () => useContext(DemoModalContext);

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [modalType, setModalType] = useState<DemoModalType>(null);

  const openDemoModal = (type: DemoModalType) => {
    setModalType(type);
  };

  const closeDemoModal = () => {
    setModalType(null);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDemoModal();
      }
    };
    if (modalType) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [modalType]);

  const getContent = () => {
    switch (modalType) {
      case "whatsapp":
        return {
          title: "WhatsApp Chat Preview",
          subtitle: "Client Demo Notice",
          icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
          badge: "Demo enquiry only",
          notice: VENUE_CONFIG.venue.whatsappNotice,
          detail:
            "In the approved production deployment, clicking this button immediately initiates a pre-formatted chat with the verified venue manager on WhatsApp with date and guest options pre-filled.",
          actionText: "Try Sample Enquiry Form Instead",
          onAction: () => {
            closeDemoModal();
            const el = document.getElementById("enquiry-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          },
        };
      case "phone":
        return {
          title: "Direct Phone Helpline",
          subtitle: "Client Demo Notice",
          icon: <Phone className="w-6 h-6 text-[#C9A96E]" />,
          badge: VENUE_CONFIG.venue.phoneDisplay,
          notice: VENUE_CONFIG.venue.phoneNotice,
          detail:
            "During client demonstration, telephone calls to personal or unverified numbers are disabled. Live helpline phone lines will be wired directly to the venue reception desk upon contract approval.",
          actionText: "Explore Venue Specifications",
          onAction: () => {
            closeDemoModal();
            const el = document.getElementById("highlights");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          },
        };
      case "instagram":
        return {
          title: "Instagram Profile Integration",
          subtitle: "Client Demo Notice",
          icon: (
            <svg
              className="w-6 h-6 text-[#B87879] fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          ),
          badge: VENUE_CONFIG.venue.instagramHandle,
          notice: VENUE_CONFIG.venue.instagramNotice,
          detail:
            "In the live version, this links directly to the official Swarna Bhummi Instagram account displaying real wedding reels, live decorator setups, and client testimonials.",
          actionText: "View Interactive 3D Model",
          onAction: () => {
            closeDemoModal();
            const el = document.getElementById("explore-3d");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          },
        };
      case "email":
        return {
          title: "Business Email Channel",
          subtitle: "Client Demo Notice",
          icon: <Mail className="w-6 h-6 text-[#C9A96E]" />,
          badge: VENUE_CONFIG.venue.emailDisplay,
          notice: VENUE_CONFIG.venue.emailNotice,
          detail:
            "The demo email address is an illustrative placeholder. In the production deployment, an automated email routing system forwards incoming inquiries directly to the banquet manager's inbox.",
          actionText: "Fill Demonstration Enquiry",
          onAction: () => {
            closeDemoModal();
            const el = document.getElementById("enquiry-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          },
        };
      case "booking":
        return {
          title: "Live Booking Status",
          subtitle: "Concept Preview",
          icon: <Calendar className="w-6 h-6 text-[#C9A96E]" />,
          badge: "Demo Mode Active",
          notice: VENUE_CONFIG.venue.bookingNotice,
          detail:
            "This concept website is undergoing review by Swarna Bhummi stakeholders. Real-time calendar slot locking and payment gateways will be configured after formal authorization.",
          actionText: "Open Sample Enquiry Form",
          onAction: () => {
            closeDemoModal();
            const el = document.getElementById("enquiry-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          },
        };
      default:
        return null;
    }
  };

  const content = getContent();

  return (
    <DemoModalContext.Provider value={{ openDemoModal, closeDemoModal }}>
      {children}

      {modalType && content && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeDemoModal}
        >
          <div
            className="relative w-full max-w-lg bg-[#263D2C] text-[#F7F0E4] rounded-3xl border border-[#C9A96E]/40 shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeDemoModal}
              className="absolute top-5 right-5 p-2 rounded-xl bg-black/30 hover:bg-black/50 text-[#F7F0E4]/70 hover:text-[#F7F0E4] border border-white/10 transition cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#1C2C20] border border-[#C9A96E]/40 flex items-center justify-center shrink-0 shadow">
                {content.icon}
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#C9A96E]">
                  {content.subtitle}
                </span>
                <h3
                  id="demo-modal-title"
                  className="font-serif text-xl sm:text-2xl font-bold text-[#F7F0E4] leading-tight"
                >
                  {content.title}
                </h3>
              </div>
            </div>

            {/* Placeholder Indicator */}
            <div className="mb-4 px-3.5 py-2 rounded-xl bg-black/30 border border-[#C9A96E]/20 flex items-center justify-between text-xs">
              <span className="text-[#F7F0E4]/60">Placeholder Value:</span>
              <span className="font-mono font-semibold text-[#C9A96E]">
                {content.badge}
              </span>
            </div>

            {/* Notice Callout */}
            <div className="p-4 rounded-2xl bg-[#1F3324] border border-[#C9A96E]/30 mb-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#F7F0E4] font-medium leading-relaxed">
                  {content.notice}
                </p>
              </div>
            </div>

            {/* Descriptive Body */}
            <p className="text-xs sm:text-sm text-[#F7F0E4]/75 leading-relaxed mb-6 font-light">
              {content.detail}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={content.onAction}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#C9A96E] hover:bg-[#D8BD87] text-[#263D2C] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow cursor-pointer text-center"
              >
                {content.actionText}
              </button>
              <button
                onClick={closeDemoModal}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-black/30 hover:bg-black/50 text-[#F7F0E4]/80 hover:text-[#F7F0E4] text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </DemoModalContext.Provider>
  );
}
