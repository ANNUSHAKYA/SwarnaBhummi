"use client";

import React from "react";
import { VENUE_INFO } from "@/data/venueData";
import {
  MapPin,
  Train,
  Car,
  Clock,
  ExternalLink,
  Phone,
  Mail,
  Navigation,
} from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="w-full bg-[#F7F0E4] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#263D2C] text-xs uppercase tracking-widest font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#A98748]" />
            <span>Prime Venue Accessibility</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D2C] tracking-tight">
            Location & Getting Here
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#252720]/80 leading-relaxed">
            Conveniently situated in Rampur near the Public School, approximately 4 km from the railway station in Jaunpur district, Uttar Pradesh.
          </p>
        </div>

        {/* Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Travel Times & Verified Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#C9A96E]/30 shadow-md space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#87977C] uppercase tracking-wider">
                  Venue Address
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#263D2C] mt-1">
                  Swarna Bhummi Marriage Hall & Lawn
                </h3>
                <p className="text-sm text-[#252720]/85 mt-2 flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
                  <span>{VENUE_INFO.location}</span>
                </p>
                <p className="text-xs text-[#87977C] mt-2 font-medium">
                  Landmark: {VENUE_INFO.landmark}
                </p>
              </div>

              {/* Transit Distance Badges */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F7F0E4] border border-[#C9A96E]/20">
                  <Train className="w-5 h-5 text-[#263D2C]" />
                  <div>
                    <span className="text-xs font-bold text-[#263D2C] block">
                      Nearby Railway Station
                    </span>
                    <span className="text-[11px] text-[#252720]/70">
                      Approx. 4 km distance with seamless auto/taxi connectivity
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#F7F0E4] border border-[#C9A96E]/20">
                  <Car className="w-5 h-5 text-[#263D2C]" />
                  <div>
                    <span className="text-xs font-bold text-[#263D2C] block">
                      Dedicated 20,000 Sq. Ft. Parking
                    </span>
                    <span className="text-[11px] text-[#252720]/70">
                      Direct wide road entry for heavy bus convoys and wedding cars
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Contact Lines */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <div className="text-xs text-[#252720]/80">
                  <span className="font-semibold text-[#263D2C]">Direct Numbers: </span>
                  {VENUE_INFO.phonePrimary} / {VENUE_INFO.phoneSecondary}
                </div>
                <div className="text-xs text-[#252720]/80">
                  <span className="font-semibold text-[#263D2C]">Email: </span>
                  {VENUE_INFO.businessEmail}
                </div>
              </div>

              {/* Google Maps External Directions */}
              <div className="pt-2">
                <a
                  href={VENUE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#263D2C] hover:bg-[#C9A96E] text-[#F7F0E4] hover:text-[#263D2C] font-semibold text-xs uppercase tracking-wider transition-all shadow"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#C9A96E]/30 shadow-lg bg-[#263D2C] min-h-[420px] relative">
            <iframe
              title="Swarna Bhummi Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115160.8924089069!2d82.6074218!3d25.7533671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399039a58b560ab9%3A0xb24d08ec4fba3798!2sJaunpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[440px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-[#263D2C]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C9A96E]/40 text-xs text-[#F7F0E4] shadow-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Rampur, Jaunpur, Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
