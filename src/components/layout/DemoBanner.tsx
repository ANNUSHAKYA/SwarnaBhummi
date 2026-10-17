"use client";

import React from "react";
import { Sparkles, Eye, ShieldCheck } from "lucide-react";
import { VENUE_CONFIG } from "@/config/venue";

export default function DemoBanner() {
  if (!VENUE_CONFIG.isDemoMode) return null;

  return (
    <aside
      aria-label="Website Concept Preview Announcement"
      className="w-full bg-[#263D2C] text-[#F7F0E4] border-b border-[#C9A96E]/30 relative z-50 text-[11px] sm:text-xs tracking-wider"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse shrink-0" />
          <span className="font-semibold tracking-widest uppercase text-[#C9A96E] flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-[#C9A96E]" />
            {VENUE_CONFIG.demoAnnouncementText}
          </span>
        </div>

        <div className="flex items-center gap-3 text-[#F7F0E4]/80 text-[11px] font-sans">
          <span className="hidden md:inline-flex items-center gap-1 text-[#EADBCA]">
            <Sparkles className="w-3 h-3 text-[#C9A96E]" />
            Interactive Mockup & Architectural Model
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C9A96E]/20 text-[#C9A96E] border border-[#C9A96E]/30 text-[10px] font-bold uppercase tracking-widest">
            Awaiting Client Sign-off
          </span>
        </div>
      </div>
    </aside>
  );
}
