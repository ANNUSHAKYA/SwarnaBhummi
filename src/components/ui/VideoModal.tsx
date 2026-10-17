"use client";

import React from "react";
import { X, Film } from "lucide-react";
import { VENUE_INFO } from "@/data/venueData";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc = "/reference/SwarnaBhummi.mp4",
}: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#1B2B20] rounded-3xl border border-[#C9A96E]/50 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#263D2C] border-b border-[#C9A96E]/20">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#C9A96E]" />
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#F7F0E4]">
              {VENUE_INFO.brandName} • Official Venue Video Tour
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#F7F0E4]/70 hover:text-[#C9A96E] hover:bg-white/10 transition cursor-pointer"
            title="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full bg-black aspect-[9/16] max-h-[72vh] flex items-center justify-center">
          <video
            src={videoSrc}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support HTML5 video playback.
          </video>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-[#263D2C] border-t border-[#C9A96E]/20 flex items-center justify-between text-xs text-[#F7F0E4]/70">
          <span>Actual venue footage & aerial drone documentation</span>
          <span className="text-[#C9A96E] font-medium">Jaunpur, UP</span>
        </div>
      </div>
    </div>
  );
}
