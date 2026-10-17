"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { VENUE_INFO } from "@/data/venueData";
import VideoModal from "@/components/ui/VideoModal";
import {
  Compass,
  Calendar,
  Play,
  CheckCircle2,
  Sparkles,
  MapPin,
  ChevronDown,
} from "lucide-react";

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section
        id="top"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#18261C] pt-20 pb-12"
      >
        {/* Cinematic Background Video / Image Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/venue/building-night.jpg"
            className="w-full h-full object-cover opacity-35 scale-105 filter blur-[0.5px]"
          >
            <source src="/reference/hero-preview.mp4" type="video/mp4" />
          </video>

          {/* Luxury Multi-layer Gradient Overlays for High Contrast Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#18261C] via-[#18261C]/75 to-[#18261C]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)]" />

          {/* Decorative Corner Filigree / Gold Accents */}
          <div className="absolute top-28 left-8 w-24 h-24 border-t-2 border-l-2 border-[#C9A96E]/20 hidden lg:block" />
          <div className="absolute top-28 right-8 w-24 h-24 border-t-2 border-r-2 border-[#C9A96E]/20 hidden lg:block" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto">
          {/* Location / Brand Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#263D2C]/80 border border-[#C9A96E]/40 text-[#C9A96E] text-xs font-semibold uppercase tracking-widest mb-6 shadow-lg backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>Jaunpur, Uttar Pradesh, India</span>
          </div>

          {/* Brand Name */}
          <h1 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest text-[#F7F0E4] uppercase drop-shadow-md">
            {VENUE_INFO.brandName}
          </h1>

          {/* Descriptor */}
          <div className="flex items-center gap-3 sm:gap-4 my-2 sm:my-3">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#C9A96E]" />
            <h2 className="font-sans text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-[#C9A96E] uppercase">
              {VENUE_INFO.descriptor}
            </h2>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#C9A96E]" />
          </div>

          {/* Headline */}
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#EADBCA] mt-2 max-w-3xl leading-snug font-normal">
            &ldquo;{VENUE_INFO.tagline}&rdquo;
          </p>

          {/* Hindi Cultural Tagline */}
          <p className="text-xs sm:text-sm text-[#C9A96E]/90 font-serif tracking-wider mt-1">
            {VENUE_INFO.hindiTagline}
          </p>

          {/* Supporting Text */}
          <p className="font-sans text-sm sm:text-base text-[#F7F0E4]/80 max-w-2xl mt-4 leading-relaxed font-light">
            {VENUE_INFO.supportingText} Offering a 17,000 sq. ft. starlit lawn,
            crystal chandelier indoor banquet hall, 180 ft. regal entrance, and
            luxurious VIP hospitality.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-md sm:max-w-none">
            {/* Primary CTA - Explore 3D */}
            <Link
              href="#explore-3d"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#DFCA9E] via-[#C9A96E] to-[#B38F52] hover:from-[#EADAB5] hover:to-[#C6A262] text-[#263D2C] font-bold text-xs uppercase tracking-wider shadow-xl hover:shadow-[#C9A96E]/25 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#263D2C]" />
              <span>Explore the 3D Venue</span>
            </Link>

            {/* Secondary CTA - Plan Your Wedding */}
            <Link
              href="#enquiry-section"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#263D2C]/85 hover:bg-[#263D2C] text-[#F7F0E4] hover:text-[#C9A96E] border border-[#C9A96E]/40 font-semibold text-xs uppercase tracking-wider transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C9A96E]" />
              <span>Plan Your Wedding</span>
            </Link>

            {/* Video Play Button */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-black/30 hover:bg-black/50 text-[#F7F0E4] border border-white/10 hover:border-[#C9A96E]/40 font-medium text-xs transition cursor-pointer"
              title="Watch official venue video footage"
            >
              <div className="w-5 h-5 rounded-full bg-[#C9A96E] text-[#263D2C] flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch Venue Tour</span>
            </button>
          </div>

          {/* Quick Verified Venue Metrics Pill Bar */}
          <div className="mt-12 w-full max-w-4xl pt-8 border-t border-[#C9A96E]/20">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
              <div className="p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/5">
                <span className="block font-serif font-bold text-lg sm:text-xl text-[#C9A96E]">
                  17,000
                </span>
                <span className="text-[11px] font-sans text-[#F7F0E4]/70 uppercase tracking-wider">
                  Sq. Ft. Lawn
                </span>
              </div>

              <div className="p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/5">
                <span className="block font-serif font-bold text-lg sm:text-xl text-[#C9A96E]">
                  2,000
                </span>
                <span className="text-[11px] font-sans text-[#F7F0E4]/70 uppercase tracking-wider">
                  Sq. Ft. AC Hall
                </span>
              </div>

              <div className="p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/5">
                <span className="block font-serif font-bold text-lg sm:text-xl text-[#C9A96E]">
                  9
                </span>
                <span className="text-[11px] font-sans text-[#F7F0E4]/70 uppercase tracking-wider">
                  VIP AC Suites
                </span>
              </div>

              <div className="p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/5">
                <span className="block font-serif font-bold text-lg sm:text-xl text-[#C9A96E]">
                  180 Ft.
                </span>
                <span className="text-[11px] font-sans text-[#F7F0E4]/70 uppercase tracking-wider">
                  Grand Walkway
                </span>
              </div>

              <div className="p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/5 col-span-2 sm:col-span-1">
                <span className="block font-serif font-bold text-lg sm:text-xl text-[#C9A96E]">
                  20,000
                </span>
                <span className="text-[11px] font-sans text-[#F7F0E4]/70 uppercase tracking-wider">
                  Sq. Ft. Parking
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <Link
          href="#explore-3d"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#F7F0E4]/60 hover:text-[#C9A96E] transition cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C9A96E]" />
        </Link>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
}
