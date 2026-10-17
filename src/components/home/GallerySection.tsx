"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/data/venueData";
import VideoModal from "@/components/ui/VideoModal";
import {
  Images,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Imagery" },
    { id: "venue-garden", label: "Venue & Garden" },
    { id: "wedding-stages", label: "Wedding Stages" },
    { id: "indoor-hall", label: "Indoor Hall" },
    { id: "room-interiors", label: "Room Interiors" },
    { id: "entrance-lighting", label: "Entrance & Lighting" },
    { id: "celebrations", label: "Celebrations" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const activeLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <>
      <section id="gallery" className="w-full bg-[#F7F0E4] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#263D2C] text-xs uppercase tracking-widest font-semibold mb-3">
              <Images className="w-3.5 h-3.5 text-[#A98748]" />
              <span>Real Venue Photography</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263D2C] tracking-tight">
              Venue Gallery & Storytelling
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#252720]/80 leading-relaxed">
              Explore authentic glimpses of Swarna Bhummi captured from actual venue footage and aerial drone recordings in Jaunpur.
            </p>
          </div>

          {/* Video Feature Banner */}
          <div className="mb-12 rounded-3xl bg-[#263D2C] text-[#F7F0E4] p-6 sm:p-8 border border-[#C9A96E]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A96E]/20 text-[#C9A96E] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Official Drone Footage
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F0E4]">
                Watch the Full On-Site Venue Tour
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#F7F0E4]/80 leading-relaxed">
                Take a 68-second cinematic aerial journey covering the 17,000 sq. ft. lawn, 180 ft. lighted entrance walkway, indoor banquet hall, and 20,000 sq. ft. parking.
              </p>
            </div>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="relative z-10 flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#C9A96E] hover:bg-[#D8BD87] text-[#263D2C] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-105 shrink-0 cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-[#263D2C] text-[#C9A96E] flex items-center justify-center">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Play Video Tour</span>
            </button>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#263D2C] text-[#C9A96E] shadow-md border border-[#C9A96E]"
                    : "bg-white text-[#252720]/80 hover:bg-[#EDE3D1] border border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative rounded-3xl overflow-hidden bg-black/10 border border-[#C9A96E]/20 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer aspect-[4/3]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-[#C9A96E] backdrop-blur-md border border-[#C9A96E]/30">
                    {item.categoryLabel}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#C9A96E] text-[#263D2C] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full ${
                        item.isVerified
                          ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                          : "bg-[#263D2C]/90 text-[#C9A96E] border border-[#C9A96E]/40"
                      }`}
                    >
                      {item.isVerified ? "On-site Footage" : "Visual inspiration"}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#F7F0E4] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#F7F0E4]/80 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1A281F] text-[#F7F0E4] rounded-3xl border border-[#C9A96E]/40 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#263D2C] border-b border-[#C9A96E]/20">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#C9A96E] uppercase tracking-wider">
                  {activeLightboxItem.categoryLabel}
                </span>
                <span className="text-xs text-white/50">•</span>
                <span className="text-xs text-white/70">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-full text-white/70 hover:text-[#C9A96E] hover:bg-white/10 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
              <Image
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                fill
                className="object-contain"
              />

              {/* Prev / Next Controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#C9A96E] transition cursor-pointer"
                title="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#C9A96E] transition cursor-pointer"
                title="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Footer with Caption */}
            <div className="p-6 bg-[#263D2C] border-t border-[#C9A96E]/20">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#F7F0E4]">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F7F0E4]/80 mt-1">
                    {activeLightboxItem.caption}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${
                    activeLightboxItem.isVerified
                      ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30"
                      : "bg-[#263D2C] text-[#C9A96E] border border-[#C9A96E]/40"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {activeLightboxItem.isVerified
                      ? "On-Site Video Capture"
                      : "Visual Inspiration"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
}
