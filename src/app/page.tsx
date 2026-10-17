"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import VenueExplorer3D from "@/components/3d/VenueExplorer3D";
import VenueHighlights from "@/components/home/VenueHighlights";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import CelebrationsSection from "@/components/home/CelebrationsSection";
import GallerySection from "@/components/home/GallerySection";
import EnquirySection from "@/components/home/EnquirySection";
import ClientFeedbackSection from "@/components/home/ClientFeedbackSection";
import LocationSection from "@/components/home/LocationSection";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { DemoModalProvider } from "@/components/ui/DemoNoticeModal";

export default function HomePage() {
  const [selectedFacility, setSelectedFacility] = useState<string>("");
  const [selectedZone, setSelectedZone] = useState<string>("");
  const [selectedEventType, setSelectedEventType] = useState<string>("");

  const handleSelectEnquiryZone = (zoneName: string) => {
    setSelectedZone(zoneName);
  };

  const handleSelectFacility = (facilityTitle: string) => {
    setSelectedFacility(facilityTitle);
  };

  const handleSelectEventType = (eventName: string) => {
    setSelectedEventType(eventName);
  };

  return (
    <DemoModalProvider>
      <div className="relative min-h-screen bg-[#F7F0E4] text-[#252720] flex flex-col selection:bg-[#C9A96E]/30 selection:text-[#263D2C]">
        {/* 1. Fixed Navigation Bar with Concept Announcement Bar */}
        <Navbar />

        <main className="flex-grow">
          {/* 2. Cinematic Hero Section */}
          <HeroSection />

          {/* 3. Interactive 3D Venue Explorer Signature Feature */}
          <VenueExplorer3D onSelectEnquiryZone={handleSelectEnquiryZone} />

          {/* 4. Venue Highlights & Verified Statistics */}
          <VenueHighlights />

          {/* 5. Venue Facilities Section */}
          <FacilitiesSection onSelectFacility={handleSelectFacility} />

          {/* 6. Wedding Celebrations & Events Storytelling */}
          <CelebrationsSection onSelectEventType={handleSelectEventType} />

          {/* 7. Wedding Gallery & Venue Storytelling */}
          <GallerySection />

          {/* 8. Enquiry Form ("Sample Enquiry — Demo Only") */}
          <EnquirySection
            initialFacility={selectedFacility}
            initialZone={selectedZone}
            initialEventType={selectedEventType}
          />

          {/* 9. Location & Accessibility Section */}
          <LocationSection />

          {/* 10. Professional Client Feedback CTA ("Imagine Your Venue, Reimagined.") */}
          <ClientFeedbackSection />
        </main>

        {/* 11. Contact Details & Footer with DEMO PREVIEW badge */}
        <Footer />

        {/* 12. Floating WhatsApp Demo Button */}
        <FloatingWhatsApp />
      </div>
    </DemoModalProvider>
  );
}
