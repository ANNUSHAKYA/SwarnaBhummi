"use client";

import React from "react";
import Link from "next/link";
import { EVENT_TYPES, EventType } from "@/data/venueData";
import {
  HeartHandshake,
  Sparkles,
  Music,
  Cake,
  Briefcase,
  Users,
  ArrowRight,
} from "lucide-react";

interface CelebrationsSectionProps {
  onSelectEventType?: (eventName: string) => void;
}

export default function CelebrationsSection({
  onSelectEventType,
}: CelebrationsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#C9A96E]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#C9A96E]" />;
      case "Music":
        return <Music className="w-6 h-6 text-[#C9A96E]" />;
      case "Cake":
        return <Cake className="w-6 h-6 text-[#C9A96E]" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#C9A96E]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C9A96E]" />;
    }
  };

  const handleEnquireEvent = (event: EventType) => {
    if (onSelectEventType) {
      onSelectEventType(event.name);
    }
    const el = document.getElementById("enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="celebrations" className="w-full bg-[#263D2C] text-[#F7F0E4] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grand Indian Celebrations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F0E4] tracking-tight">
            Celebrations Tailored to Perfection
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#F7F0E4]/80 leading-relaxed">
            From the auspicious morning rituals of Haldi and Tilak to midnight starlit Pheras, discover how our venue transforms for each wedding milestone.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENT_TYPES.map((event) => (
            <div
              key={event.id}
              className="group p-8 rounded-3xl bg-[#1E3224] border border-[#C9A96E]/25 hover:border-[#C9A96E]/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Hindi Title */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#263D2C] border border-[#C9A96E]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(event.icon)}
                  </div>
                  <span className="font-serif text-xs text-[#C9A96E] tracking-wider px-3 py-1 rounded-full bg-[#263D2C]/80 border border-[#C9A96E]/20">
                    {event.hindiName}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#F7F0E4] group-hover:text-[#C9A96E] transition-colors">
                  {event.name}
                </h3>
                <p className="text-xs text-[#C9A96E] font-medium mt-1">
                  {event.tagline}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-[#F7F0E4]/75 leading-relaxed">
                  {event.description}
                </p>

                {/* Recommended Spaces & Guest Range */}
                <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#87977C] font-semibold uppercase tracking-wider">
                      Ideal Guest Count
                    </span>
                    <span className="font-medium text-[#F7F0E4] flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C9A96E]" />
                      {event.guestRange}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] text-[#87977C] font-semibold uppercase tracking-wider mb-1.5">
                      Recommended Spaces
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {event.recommendedSpaces.map((space, idx) => (
                        <span
                          key={`sp-${idx}`}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-[#263D2C] text-[#F7F0E4]/85 border border-[#C9A96E]/20"
                        >
                          {space}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <button
                  onClick={() => handleEnquireEvent(event)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C9A96E] hover:bg-[#DBC08B] text-[#263D2C] font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer"
                >
                  <span>Plan {event.name.split(" ")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
