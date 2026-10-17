"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { useDemoModal } from "@/components/ui/DemoNoticeModal";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const { openDemoModal } = useDemoModal();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#263D2C] text-[#F7F0E4] border border-[#C9A96E]/40 shadow-xl text-xs font-medium animate-in fade-in slide-in-from-right duration-300">
          <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
          <span className="text-[#C9A96E] font-semibold">Demo:</span>
          <span>WhatsApp Chat Integration</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/50 hover:text-white ml-1 p-0.5"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Demo WhatsApp Button */}
      <button
        type="button"
        onClick={() => openDemoModal("whatsapp")}
        className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 ring-4 ring-emerald-500/20 cursor-pointer"
        title="WhatsApp concept integration - click to review demo status"
        aria-label="WhatsApp Demo Integration"
      >
        {/* Pulsing Beacon Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-current" />
      </button>
    </div>
  );
}
