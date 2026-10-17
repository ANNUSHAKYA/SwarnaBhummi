"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { VENUE_INFO } from "@/data/venueData";
import { useDemoModal } from "@/components/ui/DemoNoticeModal";
import DemoBanner from "./DemoBanner";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Compass,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Explore 3D", href: "#explore-3d", highlight: true },
    { label: "Highlights", href: "#highlights" },
    { label: "Facilities", href: "#facilities" },
    { label: "Celebrations", href: "#celebrations" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Sample Enquiry", href: "#enquiry-section" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* 1. Tasteful Concept Preview Announcement Bar */}
      <DemoBanner />

      {/* 2. Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#263D2C]/95 backdrop-blur-md shadow-xl py-2.5 border-b border-[#C9A96E]/20"
            : "bg-gradient-to-b from-[#1C2C20]/95 via-[#1C2C20]/80 to-transparent py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="#top"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E2CDA1] via-[#C9A96E] to-[#9E7A38] p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#263D2C] rounded-[10px] flex items-center justify-center">
                  <span className="font-serif font-bold text-[#C9A96E] text-xl group-hover:scale-105 transition-transform">
                    SB
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-[#F7F0E4] group-hover:text-[#C9A96E] transition-colors leading-tight">
                  SWARNA BHUMMI
                </span>
                <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-widest uppercase text-[#C9A96E]">
                  Marriage Hall & Lawn • Jaunpur
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    link.highlight
                      ? "text-[#C9A96E] flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 hover:bg-[#C9A96E] hover:text-[#263D2C]"
                      : "text-[#F7F0E4]/85 hover:text-[#C9A96E]"
                  }`}
                >
                  {link.highlight && <Compass className="w-3.5 h-3.5" />}
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons (Demo-Safe) */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Phone Button -> Triggers Demo Notice Modal */}
              <button
                type="button"
                onClick={() => openDemoModal("phone")}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#F7F0E4] hover:text-[#C9A96E] transition border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 bg-black/20 cursor-pointer"
                title="Business contact details will be added after approval"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
                <span className="font-mono">{VENUE_INFO.phonePrimary}</span>
              </button>

              {/* WhatsApp Button -> Triggers Demo Notice Modal */}
              <button
                type="button"
                onClick={() => openDemoModal("whatsapp")}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/40 cursor-pointer"
                title="WhatsApp integration will be connected after approval"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden lg:inline">WhatsApp Demo</span>
              </button>

              {/* Primary Demo Enquiry CTA */}
              <Link
                href="#enquiry-section"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#DFCA9E] via-[#C9A96E] to-[#B38F52] hover:from-[#EBD9B2] hover:to-[#C49E5D] text-[#263D2C] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#263D2C]" />
                <span>Sample Enquiry</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <Link
                href="#enquiry-section"
                className="px-3 py-1.5 rounded-lg bg-[#C9A96E] text-[#263D2C] font-bold text-[11px] uppercase tracking-wider sm:hidden"
              >
                Sample Enquiry
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl bg-[#263D2C] text-[#F7F0E4] hover:text-[#C9A96E] border border-[#C9A96E]/30 focus:outline-none transition cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#C9A96E]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#263D2C]/98 backdrop-blur-xl border-b border-[#C9A96E]/30 shadow-2xl px-6 py-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-semibold tracking-wide py-2 border-b border-white/5 flex items-center justify-between ${
                  link.highlight
                    ? "text-[#C9A96E] font-bold"
                    : "text-[#F7F0E4]/90 hover:text-[#C9A96E]"
                }`}
              >
                <span>{link.label}</span>
                {link.highlight && <Sparkles className="w-4 h-4 text-[#C9A96E]" />}
              </Link>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openDemoModal("phone");
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-black/30 border border-[#C9A96E]/30 text-xs font-semibold text-[#F7F0E4]"
              >
                <Phone className="w-4 h-4 text-[#C9A96E]" />
                <span>Call: {VENUE_INFO.phonePrimary} (Demo Only)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openDemoModal("whatsapp");
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-900/40 border border-emerald-500/40 text-xs font-semibold text-emerald-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: Demo enquiry only</span>
              </button>

              <Link
                href="#enquiry-section"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#DFCA9E] via-[#C9A96E] to-[#B38F52] text-[#263D2C] font-bold text-xs uppercase tracking-wider shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Sample Enquiry — Demo Only</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
