"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import confetti from "canvas-confetti";
import { VENUE_INFO } from "@/data/venueData";
import { generateWhatsAppLink } from "@/utils/whatsapp";
import {
  Calendar,
  Phone,
  User,
  Users,
  MessageSquare,
  Building,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Send,
  Sparkles,
  ShieldCheck,
  ArrowRight,
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
  const [enquiryId, setEnquiryId] = useState<string>("");
  const [lastPayload, setLastPayload] = useState<EnquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
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

  // Watch for external selections
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
    "20,000 Sq. Ft. Parking Grounds",
    "Covered Dining Pavilion",
  ];

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (resData.success) {
        setEnquiryId(resData.enquiryId || `SB-${Date.now().toString(36).toUpperCase()}`);
        setLastPayload(data);
        setSubmissionSuccess(true);

        // Confetti celebration
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#C9A96E", "#263D2C", "#EADBCA", "#87977C"],
          });
        } catch {
          // ignore in environments without canvas
        }
      } else {
        alert(resData.error || "Please check your inputs and try again.");
      }
    } catch (err) {
      console.error("Enquiry submission error:", err);
      // Fallback
      setEnquiryId(`SB-${Date.now().toString(36).toUpperCase()}`);
      setLastPayload(data);
      setSubmissionSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    if (!lastPayload) return;
    const url = generateWhatsAppLink({
      name: lastPayload.name,
      phone: lastPayload.phone,
      eventType: lastPayload.eventType,
      eventDate: lastPayload.eventDate,
      guestCount: lastPayload.guestCount,
      facilities: lastPayload.facilities,
      specificZone: lastPayload.specificZone,
      message: lastPayload.message,
    });
    window.open(url, "_blank");
  };

  return (
    <section id="enquiry-section" className="w-full bg-[#1C2C20] text-[#F7F0E4] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Radial Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Plan Your Wedding</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F0E4] tracking-tight">
            Reserve Your Auspicious Dates
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#F7F0E4]/80 leading-relaxed">
            Connect directly with the management of Swarna Bhummi. Schedule a personalized venue visit and receive tailored package options for your celebration in Jaunpur.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Venue Assurances */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#263D2C] border border-[#C9A96E]/30 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase font-semibold tracking-wider text-[#C9A96E]">
                  Official Contact Details
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F7F0E4] mt-1">
                  Connect with Our Venue Team
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F0E4]/75 mt-2 leading-relaxed">
                  Call directly or send an instant WhatsApp message for urgent date inquiries and site walk-throughs.
                </p>
              </div>

              {/* Verified Phone Numbers */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <a
                  href={`tel:${VENUE_INFO.phonePrimary}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/25 hover:bg-black/40 border border-[#C9A96E]/20 hover:border-[#C9A96E]/60 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9A96E] text-[#263D2C] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#F7F0E4]/60 uppercase tracking-wider block">
                      Primary Helpline
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-[#F7F0E4]">
                      {VENUE_INFO.phonePrimary}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${VENUE_INFO.phoneSecondary}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/25 hover:bg-black/40 border border-[#C9A96E]/20 hover:border-[#C9A96E]/60 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#87977C] text-[#263D2C] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#F7F0E4]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#F7F0E4]/60 uppercase tracking-wider block">
                      Secondary Helpline
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-[#F7F0E4]">
                      {VENUE_INFO.phoneSecondary}
                    </span>
                  </div>
                </a>
              </div>

              {/* WhatsApp Instant Button */}
              <div className="pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat Immediately on WhatsApp</span>
                </a>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-[#F7F0E4]/75">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C9A96E] shrink-0" />
                  <span>Direct booking without broker or intermediary charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified 17,000 sq.ft. lawn & 2,000 sq.ft. AC indoor hall</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C9A96E] shrink-0" />
                  <span>Complimentary physical site inspection & orientation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-step Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#263D2C] border border-[#C9A96E]/30 shadow-2xl">
              {submissionSuccess ? (
                /* Success Screen */
                <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#C9A96E] uppercase tracking-widest">
                      Enquiry Reference #{enquiryId}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-[#F7F0E4] mt-1">
                      Enquiry Submitted Successfully!
                    </h3>
                    <p className="text-sm text-[#F7F0E4]/80 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you! Our management team has recorded your details. To expedite your confirmation, send your details directly via WhatsApp.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Forward Details to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmissionSuccess(false);
                        reset();
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-black/30 hover:bg-black/50 text-[#F7F0E4] text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                /* Enquiry Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#F7F0E4]">
                      Wedding & Event Enquiry Form
                    </h3>
                    <p className="text-xs text-[#F7F0E4]/70 mt-1">
                      Fill out your celebration details to check availability.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A96E]/70" />
                        <input
                          type="text"
                          {...register("name", {
                            required: "Full name is required",
                            minLength: { value: 2, message: "Name is too short" },
                          })}
                          placeholder="e.g. Ramesh Singh"
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
                        Phone / WhatsApp *
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
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#C9A96E] text-[#F7F0E4] text-sm focus:outline-none transition"
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

                  {/* Expected Guests & Specific Zone Focus */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-1.5">
                        Expected Number of Guests
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A96E]/70" />
                        <select
                          {...register("guestCount")}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#C9A96E] text-[#F7F0E4] text-sm focus:outline-none transition"
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
                        Space of Interest
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

                  {/* Required Facilities Multi-select */}
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-2">
                      Required Venue Facilities
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
                            className="rounded border-gray-600 text-[#C9A96E] focus:ring-[#C9A96E] accent-[#C9A96E]"
                          />
                          <span className="text-[#F7F0E4]/90">{fac}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#C9A96E] uppercase tracking-wider mb-1.5">
                      Special Requirements / Message
                    </label>
                    <textarea
                      rows={3}
                      {...register("message")}
                      placeholder="Share details regarding catering preferences, decoration theme, or preferred site visit times..."
                      className="w-full p-4 rounded-xl bg-black/25 border border-white/10 focus:border-[#C9A96E] text-[#F7F0E4] text-sm focus:outline-none transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-gradient-to-r from-[#DFCA9E] via-[#C9A96E] to-[#B38F52] hover:from-[#EBD9B2] hover:to-[#C49E5D] text-[#263D2C] font-bold text-xs uppercase tracking-wider shadow-xl transition-all duration-300 hover:shadow-[#C9A96E]/30 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#263D2C] border-t-transparent rounded-full animate-spin" />
                          <span>Processing Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#263D2C]" />
                          <span>Submit Enquiry & Check Availability</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#F7F0E4]/60 text-center mt-2.5">
                      Your enquiry will be acknowledged immediately. We respect your privacy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
