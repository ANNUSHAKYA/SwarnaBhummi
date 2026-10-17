"use client";

import React from "react";
import Link from "next/link";
import { VENUE_CONFIG } from "@/config/venue";
import { useDemoModal } from "@/components/ui/DemoNoticeModal";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Compass,
  ArrowUp,
  Sparkles,
  Info,
} from "lucide-react";

export default function Footer() {
  const { openDemoModal } = useDemoModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full bg-[#1A281F] text-[#F7F0E4] pt-16 pb-12 border-t border-[#C9A96E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C9A96E] text-[#263D2C] flex items-center justify-center font-serif font-bold text-xl shadow">
                SB
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-wider text-[#F7F0E4] block leading-tight">
                  {VENUE_CONFIG.venue.brandName}
                </span>
                <span className="text-[10px] font-sans font-medium uppercase tracking-widest text-[#C9A96E]">
                  {VENUE_CONFIG.venue.descriptor}
                </span>
              </div>
            </div>

            <p className="font-serif italic text-[#EADBCA] text-sm leading-relaxed">
              &ldquo;{VENUE_CONFIG.venue.tagline}&rdquo;
            </p>

            <p className="text-xs text-[#F7F0E4]/70 leading-relaxed font-light">
              Premier wedding lawn and luxury marriage hall concept for Jaunpur. Featuring 17,000 sq.ft. garden lawn, 2,000 sq.ft. AC indoor hall, 9 VIP suites, and 20,000 sq.ft. parking grounds.
            </p>

            {/* Social / Direct Channels (Demo-Safe) */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => openDemoModal("instagram")}
                className="w-9 h-9 rounded-xl bg-[#263D2C] border border-[#C9A96E]/30 flex items-center justify-center text-[#F7F0E4] hover:text-[#C9A96E] hover:border-[#C9A96E] transition cursor-pointer"
                title={`Instagram handle: ${VENUE_CONFIG.venue.instagramHandle} (Click for demo status)`}
                aria-label="Instagram Demo Channel"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => openDemoModal("whatsapp")}
                className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-300 hover:text-white transition cursor-pointer"
                title="WhatsApp Concept (Click for demo notice)"
                aria-label="WhatsApp Demo Channel"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-[#C9A96E]/80 font-mono">
                {VENUE_CONFIG.venue.instagramHandle}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#C9A96E] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F0E4]/80">
              <li>
                <Link href="#top" className="hover:text-[#C9A96E] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#explore-3d"
                  className="hover:text-[#C9A96E] transition flex items-center gap-1 text-[#C9A96E]"
                >
                  <Compass className="w-3 h-3" /> 3D Venue Explorer
                </Link>
              </li>
              <li>
                <Link href="#highlights" className="hover:text-[#C9A96E] transition">
                  Venue Highlights
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:text-[#C9A96E] transition">
                  Our Facilities
                </Link>
              </li>
              <li>
                <Link href="#celebrations" className="hover:text-[#C9A96E] transition">
                  Wedding Celebrations
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#C9A96E] transition">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-[#C9A96E] transition">
                  Location & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Facilities Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#C9A96E] uppercase tracking-wider">
              Venue Specifications
            </h4>
            <ul className="space-y-2 text-xs text-[#F7F0E4]/75">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                <span>17,000 Sq. Ft. Garden Lawn</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                <span>2,000 Sq. Ft. AC Indoor Hall</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                <span>9 Luxury VIP AC Rooms</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                <span>180 Ft. Decorated Grand Walkway</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                <span>20,000 Sq. Ft. Dedicated Parking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                <span>2 Celebration Stages (Details to be confirmed)</span>
              </li>
            </ul>
          </div>

          {/* Direct Contacts & Address (Demo Placeholders) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#C9A96E] uppercase tracking-wider">
              Contact & Bookings
            </h4>
            <div className="space-y-2.5 text-xs text-[#F7F0E4]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <span>{VENUE_CONFIG.venue.displayAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <button
                  type="button"
                  onClick={() => openDemoModal("phone")}
                  className="hover:text-[#C9A96E] transition font-medium cursor-pointer text-left font-mono"
                >
                  Phone: {VENUE_CONFIG.venue.phoneDisplay}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <button
                  type="button"
                  onClick={() => openDemoModal("whatsapp")}
                  className="hover:text-emerald-300 transition font-medium cursor-pointer text-left"
                >
                  WhatsApp: {VENUE_CONFIG.venue.whatsappDisplay}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <button
                  type="button"
                  onClick={() => openDemoModal("email")}
                  className="hover:text-[#C9A96E] transition cursor-pointer text-left font-mono"
                >
                  {VENUE_CONFIG.venue.emailDisplay}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#enquiry-section"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-[#C9A96E] hover:bg-[#DBC08B] text-[#263D2C] font-bold text-xs uppercase tracking-wider transition shadow"
              >
                Sample Enquiry Form
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Unobtrusive DEMO PREVIEW Label */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F7F0E4]/60">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <p>
              © 2026 {VENUE_CONFIG.venue.brandName} Marriage Hall & Lawn. Concept Preview.
            </p>
            {/* Unobtrusive DEMO PREVIEW Label as requested in Item 1 */}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#263D2C] text-[#C9A96E] border border-[#C9A96E]/40 font-mono text-[10px] font-bold uppercase tracking-widest shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
              {VENUE_CONFIG.demoFooterBadgeText}
            </span>
          </div>

          <p className="text-[11px] text-center md:text-right max-w-md text-[#F7F0E4]/70">
            {VENUE_CONFIG.modelDisclaimer}
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#263D2C] border border-[#C9A96E]/30 text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#263D2C] transition cursor-pointer shrink-0"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
