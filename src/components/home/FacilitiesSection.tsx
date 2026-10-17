"use client";

import React from "react";
import Image from "next/image";
import { FACILITIES, Facility } from "@/data/venueData";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Building2,
} from "lucide-react";

interface FacilitiesSectionProps {
  onSelectFacility?: (facilityTitle: string) => void;
}

export default function FacilitiesSection({
  onSelectFacility,
}: FacilitiesSectionProps) {
  const handleEnquire = (facility: Facility) => {
    if (onSelectFacility) {
      onSelectFacility(facility.title);
    }
    const el = document.getElementById("enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="facilities" className="w-full bg-[#FCFAF6] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#C9A96E]/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#87977C]/15 border border-[#87977C]/30 text-[#263D2C] text-xs uppercase tracking-widest font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#263D2C]" />
            <span>World-Class Hospitality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D2C] tracking-tight">
            Our Venue Facilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#252720]/80 leading-relaxed">
            Engineered to fulfill every Indian wedding tradition, from private bridal dressing and starlit baaraat welcomes to grand indoor dining feasts.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="group flex flex-col rounded-3xl bg-white border border-[#C9A96E]/25 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Image Container with Badges */}
              <div className="relative w-full h-56 overflow-hidden bg-[#263D2C]">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Stat Badge */}
                {facility.statBadge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-[#C9A96E] text-[#263D2C] text-xs font-bold uppercase tracking-wider shadow">
                      {facility.statBadge}
                    </span>
                  </div>
                )}

                {/* Verified or Provisional Badge */}
                <div className="absolute bottom-3 left-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md ${
                      facility.isVerified
                        ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                        : "bg-amber-950/80 text-amber-300 border border-amber-500/40"
                    }`}
                  >
                    {facility.isVerified ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Facility</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Provisional Specs</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <span className="text-xs font-semibold text-[#87977C] uppercase tracking-wider">
                    {facility.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#263D2C] mt-1 group-hover:text-[#C9A96E] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#252720]/80 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mt-6 pt-5 border-t border-[#C9A96E]/20 space-y-2 flex-grow">
                  <h4 className="text-[11px] uppercase font-semibold text-[#87977C] tracking-wider mb-2">
                    Key Highlights
                  </h4>
                  {facility.features.map((feat, idx) => (
                    <div
                      key={`feat-${idx}`}
                      className="flex items-center gap-2 text-xs text-[#252720]/85"
                    >
                      <Sparkles className="w-3 h-3 text-[#C9A96E] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleEnquire(facility)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#263D2C] hover:bg-[#C9A96E] text-[#F7F0E4] hover:text-[#263D2C] font-semibold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow group-hover:shadow-md"
                  >
                    <span>Enquire for this Space</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
