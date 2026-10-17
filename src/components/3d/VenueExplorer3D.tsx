"use client";

import React, { useState, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import Image from "next/image";
import {
  VENUE_ZONES,
  VenueZone,
  TRANSPARENCY_NOTES,
} from "@/data/venueData";
import VenueScene from "./VenueScene";
import SitePlan2D from "./SitePlan2D";
import {
  Compass,
  Moon,
  Sun,
  RotateCcw,
  Layers,
  MapPin,
  CheckCircle2,
  AlertCircle,
  X,
  ArrowRight,
  Maximize2,
  Sparkles,
} from "lucide-react";

interface VenueExplorer3DProps {
  onSelectEnquiryZone?: (zoneName: string) => void;
}

function Loader() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#263D2C] text-[#F7F0E4]">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-2 border-[#C9A96E]/20" />
        <div className="absolute inset-0 rounded-full border-2 border-[#C9A96E] border-t-transparent animate-spin" />
        <div className="absolute inset-3 rounded-full bg-[#C9A96E]/10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-[#C9A96E] animate-pulse" />
        </div>
      </div>
      <p className="font-serif text-lg font-medium text-[#C9A96E] tracking-wider">
        Loading 3D Venue Model...
      </p>
      <p className="text-xs text-[#F7F0E4]/60 mt-1">
        Preparing architectural grounds & lighting
      </p>
    </div>
  );
}

export default function VenueExplorer3D({
  onSelectEnquiryZone,
}: VenueExplorer3DProps) {
  const [atmosphere, setAtmosphere] = useState<"evening" | "day">("evening");
  const [viewMode, setViewMode] = useState<"3d" | "2d">("3d");
  const [selectedZone, setSelectedZone] = useState<VenueZone | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControlsImpl>(null);

  // Handle Zone Selection
  const handleSelectZone = (zone: VenueZone) => {
    setSelectedZone(zone);
    setIsModalOpen(true);

    if (viewMode === "3d" && controlsRef.current) {
      // Smoothly orient camera towards zone
      controlsRef.current.target.set(
        zone.target[0],
        zone.target[1],
        zone.target[2]
      );
      controlsRef.current.object.position.set(
        zone.cameraPos[0],
        zone.cameraPos[1],
        zone.cameraPos[2]
      );
      controlsRef.current.update();
    }
  };

  // Reset Camera View
  const handleResetCamera = () => {
    setSelectedZone(null);
    setIsModalOpen(false);
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 2, 0);
      controlsRef.current.object.position.set(38, 32, 54);
      controlsRef.current.update();
    }
  };

  // Preset Views
  const handlePresetView = (preset: "overview" | "topdown" | "entrance" | "stages" | "building") => {
    if (!controlsRef.current) return;
    switch (preset) {
      case "overview":
        controlsRef.current.target.set(0, 2, 0);
        controlsRef.current.object.position.set(38, 32, 54);
        break;
      case "topdown":
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.object.position.set(0, 85, 0.1);
        break;
      case "entrance":
        controlsRef.current.target.set(26, 2, 8);
        controlsRef.current.object.position.set(26, 6, 42);
        break;
      case "stages":
        controlsRef.current.target.set(-24, 3, -12);
        controlsRef.current.object.position.set(-6, 9, 8);
        break;
      case "building":
        controlsRef.current.target.set(0, 5, -34);
        controlsRef.current.object.position.set(0, 10, -6);
        break;
    }
    controlsRef.current.update();
  };

  const handleEnquireFromZone = (zone: VenueZone) => {
    setIsModalOpen(false);
    if (onSelectEnquiryZone) {
      onSelectEnquiryZone(zone.title);
    }
    const el = document.getElementById("enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <section
      id="explore-3d"
      ref={containerRef}
      className={`relative w-full bg-[#1B2B20] text-[#F7F0E4] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-300 ${
        isFullscreen ? "p-0 min-h-screen z-50 fixed inset-0" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] text-xs uppercase tracking-widest font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" /> Interactive 3D Venue Explorer
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F0E4] tracking-tight">
            Explore Swarna Bhummi in 3D
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#F7F0E4]/80 leading-relaxed">
            Navigate our 17,000 sq. ft. starlit garden lawn, 2,000 sq. ft. indoor banquet hall, 180 ft. royal entrance passage, and celebration stages in an interactive architectural preview.
          </p>
          <p className="text-xs text-[#C9A96E]/80 mt-2 italic">
            * 3D spatial layout is an illustrative concept guided by venue footage. Click any marker to view verified details.
          </p>
        </div>

        {/* 3D Explorer Interactive Canvas Container */}
        <div className="relative w-full h-[580px] sm:h-[650px] lg:h-[720px] rounded-3xl overflow-hidden border border-[#C9A96E]/30 shadow-2xl bg-[#142017]">
          {/* Top Control Bar */}
          <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            {/* Left: View Mode Toggle (3D vs 2D) */}
            <div className="flex items-center gap-1.5 bg-[#263D2C]/90 backdrop-blur-md p-1 rounded-xl border border-[#C9A96E]/30 shadow-lg pointer-events-auto">
              <button
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "3d"
                    ? "bg-[#C9A96E] text-[#263D2C] shadow"
                    : "text-[#F7F0E4]/80 hover:text-[#C9A96E]"
                }`}
              >
                <Compass className="w-3.5 h-3.5" /> 3D Space
              </button>
              <button
                onClick={() => setViewMode("2d")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "2d"
                    ? "bg-[#C9A96E] text-[#263D2C] shadow"
                    : "text-[#F7F0E4]/80 hover:text-[#C9A96E]"
                }`}
              >
                <Layers className="w-3.5 h-3.5" /> 2D Site Plan
              </button>
            </div>

            {/* Right: Atmosphere Toggle + Presets + Reset */}
            <div className="flex items-center gap-2 pointer-events-auto">
              {viewMode === "3d" && (
                <>
                  {/* Atmosphere (Evening Wedding vs Daytime) */}
                  <div className="flex items-center bg-[#263D2C]/90 backdrop-blur-md p-1 rounded-xl border border-[#C9A96E]/30 shadow-lg">
                    <button
                      onClick={() => setAtmosphere("evening")}
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        atmosphere === "evening"
                          ? "bg-[#C9A96E] text-[#263D2C] font-semibold"
                          : "text-[#F7F0E4]/75 hover:text-[#C9A96E]"
                      }`}
                      title="Evening Wedding Fairy Light Ambiance"
                    >
                      <Moon className="w-3.5 h-3.5" /> Evening Glow
                    </button>
                    <button
                      onClick={() => setAtmosphere("day")}
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        atmosphere === "day"
                          ? "bg-[#C9A96E] text-[#263D2C] font-semibold"
                          : "text-[#F7F0E4]/75 hover:text-[#C9A96E]"
                      }`}
                      title="Daylight Site Inspection Mode"
                    >
                      <Sun className="w-3.5 h-3.5" /> Daylight
                    </button>
                  </div>

                  {/* Reset Camera */}
                  <button
                    onClick={handleResetCamera}
                    className="p-2 rounded-xl bg-[#263D2C]/90 backdrop-blur-md text-[#F7F0E4]/80 hover:text-[#C9A96E] border border-[#C9A96E]/30 shadow-lg transition-all cursor-pointer"
                    title="Reset Camera View"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  {/* Fullscreen Toggle */}
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-xl bg-[#263D2C]/90 backdrop-blur-md text-[#F7F0E4]/80 hover:text-[#C9A96E] border border-[#C9A96E]/30 shadow-lg transition-all cursor-pointer hidden sm:block"
                    title="Toggle Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Quick Zone Navigation Pills (Bottom Bar) */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-2 pointer-events-none">
            <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full no-scrollbar pointer-events-auto">
              <span className="text-[11px] font-semibold text-[#C9A96E] bg-[#263D2C]/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-[#C9A96E]/30 shrink-0 hidden md:inline">
                Jump to Space:
              </span>
              {VENUE_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => handleSelectZone(zone)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-all cursor-pointer backdrop-blur-md ${
                    selectedZone?.id === zone.id
                      ? "bg-[#C9A96E] text-[#263D2C] font-bold shadow-md"
                      : "bg-[#263D2C]/80 text-[#F7F0E4]/85 hover:bg-[#263D2C] hover:text-[#C9A96E] border border-[#C9A96E]/20"
                  }`}
                >
                  <MapPin className="w-3 h-3 text-[#C9A96E]" />
                  <span>{zone.shortTitle}</span>
                </button>
              ))}
            </div>

            {/* Camera Presets Selector */}
            {viewMode === "3d" && (
              <div className="hidden lg:flex items-center gap-1 bg-[#263D2C]/90 backdrop-blur-md p-1 rounded-xl border border-[#C9A96E]/30 pointer-events-auto shrink-0 text-xs">
                <button
                  onClick={() => handlePresetView("overview")}
                  className="px-2.5 py-1 rounded-md text-[#F7F0E4]/80 hover:text-[#C9A96E] hover:bg-white/5 transition cursor-pointer"
                >
                  Overview
                </button>
                <button
                  onClick={() => handlePresetView("topdown")}
                  className="px-2.5 py-1 rounded-md text-[#F7F0E4]/80 hover:text-[#C9A96E] hover:bg-white/5 transition cursor-pointer"
                >
                  Top-Down
                </button>
                <button
                  onClick={() => handlePresetView("entrance")}
                  className="px-2.5 py-1 rounded-md text-[#F7F0E4]/80 hover:text-[#C9A96E] hover:bg-white/5 transition cursor-pointer"
                >
                  Entrance
                </button>
                <button
                  onClick={() => handlePresetView("stages")}
                  className="px-2.5 py-1 rounded-md text-[#F7F0E4]/80 hover:text-[#C9A96E] hover:bg-white/5 transition cursor-pointer"
                >
                  Stage
                </button>
                <button
                  onClick={() => handlePresetView("building")}
                  className="px-2.5 py-1 rounded-md text-[#F7F0E4]/80 hover:text-[#C9A96E] hover:bg-white/5 transition cursor-pointer"
                >
                  Hall
                </button>
              </div>
            )}
          </div>

          {/* 3D WebGL Canvas View */}
          <div
            className={`w-full h-full relative cursor-grab active:cursor-grabbing ${
              viewMode === "3d" ? "block" : "hidden"
            }`}
          >
            <Suspense fallback={<Loader />}>
              <Canvas
                shadows
                camera={{ position: [38, 32, 54], fov: 42 }}
                gl={{ antialias: true, alpha: false }}
                className="w-full h-full"
              >
                <color
                  attach="background"
                  args={[atmosphere === "evening" ? "#0F1A12" : "#D4E6F1"]}
                />
                <PerspectiveCamera makeDefault position={[38, 32, 54]} fov={42} />
                <OrbitControls
                  ref={controlsRef}
                  enableDamping
                  dampingFactor={0.06}
                  minDistance={10}
                  maxDistance={120}
                  maxPolarAngle={Math.PI / 2.05} // Keep camera above ground
                  minPolarAngle={0.1}
                  target={[0, 2, 0]}
                />
                <VenueScene
                  atmosphere={atmosphere}
                  selectedZone={selectedZone}
                  onSelectZone={handleSelectZone}
                  isModalOpen={isModalOpen}
                />
              </Canvas>
            </Suspense>

            {/* Instructions Pill Overlay */}
            <div className="absolute top-16 left-4 z-10 pointer-events-none hidden sm:block">
              <div className="bg-[#263D2C]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#C9A96E]/20 text-[11px] text-[#F7F0E4]/70">
                Left-click & drag to rotate • Scroll to zoom • Click gold pins to inspect
              </div>
            </div>
          </div>

          {/* 2D Site Plan View */}
          <div
            className={`w-full h-full p-4 overflow-y-auto ${
              viewMode === "2d" ? "block" : "hidden"
            }`}
          >
            <SitePlan2D
              selectedZone={selectedZone}
              onSelectZone={handleSelectZone}
              onEnquireZone={handleEnquireFromZone}
            />
          </div>
        </div>

        {/* Selected Zone Detail Modal / Bottom Drawer */}
        {isModalOpen && selectedZone && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-2xl bg-[#263D2C] text-[#F7F0E4] rounded-3xl border border-[#C9A96E]/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image Header */}
              <div className="relative w-full h-56 sm:h-64 bg-[#1B2B20] overflow-hidden shrink-0">
                <Image
                  src={selectedZone.image}
                  alt={selectedZone.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#263D2C] via-transparent to-black/40" />

                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-[#F7F0E4] hover:bg-black/90 hover:text-[#C9A96E] transition cursor-pointer"
                  title="Close inspection"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedZone.isVerified
                          ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                          : "bg-amber-950/80 text-amber-300 border border-amber-500/40"
                      }`}
                    >
                      {selectedZone.isVerified ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Verified Video Data
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3.5 h-3.5" /> Provisional / Conceptual Space
                        </>
                      )}
                    </span>
                  </div>
                  {selectedZone.metric && (
                    <span className="px-3 py-1 rounded-full bg-[#C9A96E] text-[#263D2C] font-bold text-xs">
                      {selectedZone.metric}
                    </span>
                  )}
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F0E4]">
                    {selectedZone.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#F7F0E4]/85 leading-relaxed">
                    {selectedZone.description}
                  </p>
                </div>

                {selectedZone.note && (
                  <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200/90 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{selectedZone.note}</span>
                  </div>
                )}

                {/* Key Specifications */}
                <div>
                  <h4 className="text-xs uppercase font-semibold text-[#C9A96E] tracking-wider mb-2">
                    Key Features & Capacity
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedZone.details.map((item, idx) => (
                      <li
                        key={`detail-${idx}`}
                        className="flex items-center gap-2 text-[#F7F0E4]/80 p-2 rounded-lg bg-black/20"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-6 bg-[#1F3324] border-t border-[#C9A96E]/20 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-[#F7F0E4]/70 hover:text-[#F7F0E4] hover:bg-white/5 transition cursor-pointer"
                >
                  Continue Exploring
                </button>
                <button
                  onClick={() => handleEnquireFromZone(selectedZone)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#C9A96E] hover:bg-[#D8BD87] text-[#263D2C] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#C9A96E]/20 cursor-pointer"
                >
                  <span>Enquire About This Space</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
