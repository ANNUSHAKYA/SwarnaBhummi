"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import confetti from "canvas-confetti";
import { VENUE_CONFIG } from "@/config/venue";
import { useDemoModal } from "@/components/ui/DemoNoticeModal";
import {
  Calendar,
  Phone,
  User,
  Users,
  Building,
  CheckCircle2,
  MessageCircle,
  Send,
  Sparkles,
  Info,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

interface EnquiryFormData {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  facilities: string[];
  specificZone?: string;
  message: string;
}

interface EnquirySectionProps {
  initialFacility?: string;
  initialZone?: string;
  initialEventType?: string;
}

export default function EnquirySection({
  initialFacility,
  initialZone,
  initialEventType,
}: EnquirySectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const { openDemoModal } = useDemoModal();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    defaultValues: {
      name: "",
      phone: "",
      eventType: initialEventType || "Wedding (Shaadi)",
      eventDate: "",
      guestCount: "500 - 1,000 Guests",
      facilities: ["17,000 Sq. Ft. Garden Lawn", "2,000 Sq. Ft. Indoor Banquet Hall"],
      specificZone: initialZone || initialFacility || "Entire Venue",
      message: "",
    },
  });

  // Watch for external selections from 3D model or facilities
  useEffect(() => {
    if (initialFacility) {
      setValue("specificZone", initialFacility);
    }
  }, [initialFacility, setValue]);

  useEffect(() => {
    if (initialZone) {
      setValue("specificZone", initialZone);
    }
  }, [initialZone, setValue]);

  useEffect(() => {
    if (initialEventType) {
      setValue("eventType", initialEventType);
    }
  }, [initialEventType, setValue]);

  const availableFacilities = [
    "17,000 Sq. Ft. Garden Lawn",
    "2,000 Sq. Ft. Indoor Banquet Hall",
    "9 Luxury VIP AC Rooms",
    "Dual Celebration Stages",
    "180 Ft. Decorated Walkway",
    "20,000 Sq. Ft. Dedicated Parking",
    "Covered Dining Pavilion",
  ];

  // In demo mode: Validate realistic interactions, but DO NOT submit personal info to external service or DB
  const onSubmit = async (_data: EnquiryFormData) => {
    setIsSubmitting(true);
    // Simulate brief realistic processing delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setSubmissionSuccess(true);

    // Festive confetti animation
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#C9A96E", "#263D2C", "#EADBCA", "#87977C"],
      });
    } catch {
      // ignore in environments without canvas
    }
  };

  return (
    <section
      id="enquiry-section"
      className="w-full bg-[#1C2C20] text-[#F7F0E4] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{VENUE_CONFIG.enquiryFormLabel}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F0E4] tracking-tight">
            Plan Your Auspicious Celebration
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#F7F0E4]/80 leading-relaxed">
            Test the prospective wedding enquiry experience designed for Swarna Bhummi. This sample form illustrates how clients will select event dates, guest capacities, and venue spaces.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Placeholders & Integration Notice */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#263D2C] border border-[#C9A96E]/30 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-semibold tracking-wider text-[#C9A96E]">
                  Concept Demonstration
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F7F0E4] mt-1">
                  Connect with Venue Team
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F0E4]/75 mt-2 leading-relaxed">
                  In the live production website, couples and families can directly call the venue reception or start a personalized WhatsApp enquiry.
                </p>
              </div>

              {/* Demo-Safe Phone CTAs */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => openDemoModal("phone")}
                  className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-black/25 hover:bg-black/40 border border-[#C9A96E]/20 hover:border-[#C9A96E]/60 transition text-left cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9A96E] text-[#263D2C] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#F7F0E4]/60 uppercase tracking-wider block">
                      Direct Helpline (Demo)
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-[#F7F0E4] font-mono">
                      {VENUE_CONFIG.venue.phoneDisplay}
                    </span>
                  </div>
                </button>

                {/* WhatsApp Demo CTA */}
                <button
                  type="button"
                  onClick={() => openDemoModal("whatsapp")}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp: {VENUE_CONFIG.venue.whatsappDisplay}</span>
                </button>
              </div>

              {/* Demo Mode Notice */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-[#F7F0E4]/75">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span>
                    No personal data is collected or transmitted to external services in this concept preview.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Production release will feature SSL encryption and direct CRM / WhatsApp dispatch.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sample Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#263D2C] border border-[#C9A96E]/30 shadow-2xl">
              {submissionSuccess ? (
                /* Required Demo Confirmation Screen */
                <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#C9A96E] uppercase tracking-widest block mb-2">
                      Demonstration Completed
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F0E4] leading-snug">
                      Form Interaction Verified
                    </h3>
                  </div>

                  {/* Exact Required Notice */}
                  <div className="p-5 rounded-2xl bg-[#1C2C20] border border-[#C9A96E]/40 text-left max-w-lg mx-auto shadow-inner">
                    <p className="text-xs sm:text-sm text-[#F7F0E4] leading-relaxed font-sans font-medium">
                      &ldquo;{VENUE_CONFIG.enquirySuccessNotice}&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmissionSuccess(false);
                        reset();
                      }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#C9A96E] hover:bg-[#D8BD87] text-[#263D2C] font-bold text-xs uppercase tracking-wider shadow-lg transition cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Test Form Again</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => openDemoModal("whatsapp")}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-black/30 hover:bg-black/50 text-[#F7F0E4] text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
                    >
                      View WhatsApp Integration Info
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <span className="text-xs uppercase font-semibold tracking-wider text-[#C9A96E] block">
                        Interactive Demo Form
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#F7F0E4]">
                        {VENUE_CONFIG.enquiryFormLabel}
                      </h3>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-[#C9A96E]/20 text-[#C9A96E] border border-[#C9A96E]/40">
                      Safe Preview
                    </span>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A96E]/70" />
                        <input
                          type="text"
                          {...register("name", {
                            required: "Full name is required",
                            minLength: { value: 2, message: "At least 2 characters" },
                          })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/25 border border-white/10 focus:border-[#C9A96E] text-[#F7F0E4] text-sm focus:outline-none transition"
                        />
                      </div>
                      {errors.name && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-1.5">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A96E]/70" />
                        <input
                          type="tel"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9+ -]{10,15}$/,
                              message: "Enter a valid 10-digit number",
                            },
                          })}
                          placeholder="e.g. 9876543210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/25 border border-white/10 focus:border-[#C9A96E] text-[#F7F0E4] text-sm focus:outline-none transition"
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-[11px] text-red-400 mt-1 block">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Event Type & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-1.5">
                        Event Type *
                      </label>
                      <select
                        {...register("eventType", { required: true })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#C9A96E] text-[#F7F0E4] text-sm focus:outline-none transition cursor-pointer"
                      >
                        <option value="Wedding (Shaadi)">Wedding (Shaadi)</option>
                        <option value="Wedding Reception">Wedding Reception</option>
                        <option value="Roka / Ring Ceremony">Roka / Ring Ceremony</option>
                        <option value="Sangeet & Haldi Night">Sangeet & Haldi Night</option>
                        <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                        <option value="Corporate / Social Conclave">Corporate / Social Conclave</option>
                        <option value="Other Celebration">Other Celebration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-1.5">
                        Preferred Event Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          {...register("eventDate")}
                          className="w-full px-4 py-3 rounded-xl bg-black/25 border border-white/10 focus:border-[#C9A96E] text-[#F7F0E4] text-sm focus:outline-none transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Estimated Guests & Specific Zone Focus */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-1.5">
                        Estimated Guest Count
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A96E]/70" />
                        <select
                          {...register("guestCount")}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#C9A96E] text-[#F7F0E4] text-sm focus:outline-none transition cursor-pointer"
                        >
                          <option value="100 - 300 Guests">100 - 300 Guests</option>
                          <option value="300 - 500 Guests">300 - 500 Guests</option>
                          <option value="500 - 1,000 Guests">500 - 1,000 Guests</option>
                          <option value="1,000 - 1,500+ Guests">1,000 - 1,500+ Guests</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-1.5">
                        Facilities / Space of Interest
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A96E]/70" />
                        <input
                          type="text"
                          {...register("specificZone")}
                          placeholder="e.g. 17,000 Sq. Ft. Lawn / Entire Venue"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/25 border border-white/10 focus:border-[#C9A96E] text-[#F7F0E4] text-sm focus:outline-none transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Facilities Checklist */}
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-2">
                      Facilities of Interest
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {availableFacilities.map((fac) => (
                        <label
                          key={fac}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl bg-black/20 border border-white/5 hover:border-[#C9A96E]/40 cursor-pointer transition"
                        >
                          <input
                            type="checkbox"
                            value={fac}
                            {...register("facilities")}
                            className="rounded border-gray-600 text-[#C9A96E] focus:ring-[#C9A96E]"
                          />
                          <span className="text-[#F7F0E4]/90">{fac}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-1.5">
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      {...register("message")}
                      placeholder="Share details regarding catering preferences, stage decor, mandap setup, or room requirements..."
                      className="w-full p-4 rounded-xl bg-black/25 border border-white/10 focus:border-[#C9A96E] text-[#F7F0E4] text-sm focus:outline-none transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#DFCA9E] via-[#C9A96E] to-[#B38F52] hover:from-[#EBD9B2] hover:to-[#C49E5D] text-[#263D2C] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#263D2C] border-t-transparent rounded-full animate-spin" />
                        <span>Validating Concept Demo...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Sample Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#F7F0E4]/60">
                    * Concept preview only. No data is stored or transmitted externally.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
