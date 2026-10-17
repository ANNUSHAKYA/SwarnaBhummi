"use client";

import React from "react";
import { VENUE_INFO, TRANSPARENCY_NOTES } from "@/data/venueData";
import {
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function VenueHighlights() {
  return (
    <section id="highlights" className="w-full bg-[#F7F0E4] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#263D2C] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A98748]" />
            <span>Verified Venue Capacity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D2C] tracking-tight">
            Grandeur by the Numbers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#252720]/80 leading-relaxed">
            Every celebration deserves generous space, premium climate control, and unmatched hospitality. Review our venue dimensions and certified on-site facilities.
          </p>
        </div>

        {/* 6 Key Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {VENUE_INFO.stats.map((stat, idx) => (
            <div
              key={`stat-${idx}`}
              className="group p-6 rounded-3xl bg-white border border-[#C9A96E]/25 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle gold top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-semibold text-[#87977C] tracking-wider">
                  {stat.label}
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide ${
                    stat.isVerified
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-amber-50 text-amber-800 border border-amber-200"
                  }`}
                >
                  {stat.isVerified ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Verified Video Data</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3 h-3 text-amber-600" />
                      <span>Provisional Units</span>
                    </>
                  )}
                </span>
              </div>

              {/* Numbers */}
              <div className="flex items-baseline gap-2">
                <span className="font-serif font-bold text-4xl sm:text-5xl text-[#263D2C] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#C9A96E] uppercase tracking-wide">
                  {stat.unit}
                </span>
              </div>

              {stat.unitNote && (
                <span className="block text-[11px] text-amber-700 font-medium mt-1">
                  * {stat.unitNote}
                </span>
              )}

              <p className="mt-3 text-xs sm:text-sm text-[#252720]/75 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparency Disclosure Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EDE3D1] border border-[#C9A96E]/40 text-[#252720]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#263D2C] text-[#C9A96E] flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#263D2C]">
                  {TRANSPARENCY_NOTES.verifiedTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#252720]/80 mt-1">
                  We believe in total transparency. Verified venue facts below are directly derived from documented venue footage and on-site signage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Verified Column */}
                <div className="p-4 rounded-2xl bg-white/70 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-2 font-semibold text-xs uppercase tracking-wider text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Verified On-Site Specifications</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#252720]/80">
                    {TRANSPARENCY_NOTES.verifiedItems.map((item, i) => (
                      <li key={`v-${i}`} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Provisional / Conceptual Column */}
                <div className="p-4 rounded-2xl bg-white/70 border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-2 font-semibold text-xs uppercase tracking-wider text-amber-800">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Provisional & Conceptual Items</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#252720]/80">
                    {TRANSPARENCY_NOTES.provisionalItems.map((item, i) => (
                      <li key={`p-${i}`} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
