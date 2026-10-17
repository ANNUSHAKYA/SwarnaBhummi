"use client";

import React from "react";
import { VENUE_ZONES, VenueZone } from "@/data/venueData";
import { CheckCircle2, AlertCircle, Info, ArrowUpRight } from "lucide-react";

interface SitePlan2DProps {
  selectedZone: VenueZone | null;
  onSelectZone: (zone: VenueZone) => void;
  onEnquireZone: (zone: VenueZone) => void;
}

export default function SitePlan2D({
  selectedZone,
  onSelectZone,
  onEnquireZone,
}: SitePlan2DProps) {
  return (
    <div className="w-full bg-[#1A281F] text-[#F7F0E4] p-4 sm:p-6 rounded-2xl border border-[#C9A96E]/30 relative overflow-hidden">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#C9A96E]/20">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A96E] animate-pulse" />
            <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#F7F0E4]">
              Architectural Site Layout Plan (Conceptual)
            </h3>
          </div>
          <p className="text-xs text-[#F7F0E4]/70 mt-1">
            Top-down masterplan of Swarna Bhummi. Click any marked space to review verified specifications and photos.
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" /> Verified Video Data
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/70 text-amber-300 border border-amber-500/30">
            <AlertCircle className="w-3.5 h-3.5" /> Provisional / Conceptual
          </span>
        </div>
      </div>

      {/* SVG Site Plan Map */}
      <div className="relative w-full aspect-[16/10] bg-[#142018] rounded-xl border border-[#C9A96E]/20 overflow-hidden shadow-inner flex items-center justify-center p-2">
        <svg
          viewBox="0 0 1000 650"
          className="w-full h-full max-h-[560px] select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(201, 169, 110, 0.08)"
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="lawn-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2E5A36" />
              <stop offset="100%" stopColor="#1E3E24" />
            </radialGradient>
          </defs>

          {/* Background Grid */}
          <rect width="1000" height="650" fill="#142018" />
          <rect width="1000" height="650" fill="url(#grid-pattern)" />

          {/* Compass / Orientation */}
          <g transform="translate(940, 50)" opacity="0.75">
            <circle r="22" fill="#1E2E23" stroke="#C9A96E" strokeWidth="1.5" />
            <polygon points="0,-16 5,0 0,-4 -5,0" fill="#E5C88F" />
            <polygon points="0,16 5,0 0,4 -5,0" fill="#87977C" />
            <text
              y="-18"
              fill="#F7F0E4"
              fontSize="10"
              textAnchor="middle"
              fontWeight="bold"
            >
              N
            </text>
          </g>

          {/* Main Approach Road & Front Gate */}
          <g>
            <rect x="0" y="580" width="1000" height="70" fill="#252A26" />
            <line
              x1="0"
              y1="615"
              x2="1000"
              y2="615"
              stroke="#E5C88F"
              strokeDasharray="12,12"
              strokeWidth="2"
            />
            <text
              x="500"
              y="622"
              fill="#C9A96E"
              fontSize="12"
              textAnchor="middle"
              fontWeight="500"
              letterSpacing="2"
            >
              MAIN ACCESS ROAD (RAMPUR, JAUNPUR)
            </text>
          </g>

          {/* FRONT GATEWAY */}
          <g transform="translate(620, 560)">
            <rect
              x="-60"
              y="-10"
              width="120"
              height="20"
              fill="#263D2C"
              stroke="#C9A96E"
              strokeWidth="2"
              rx="4"
            />
            <text
              x="0"
              y="4"
              fill="#F7F0E4"
              fontSize="11"
              textAnchor="middle"
              fontWeight="bold"
            >
              GRAND ENTRY GATE
            </text>
          </g>

          {/* 1. 20,000 SQ. FT. PARKING GROUNDS (Right side) */}
          <g
            className="cursor-pointer transition-all hover:opacity-90"
            onClick={() => {
              const zone = VENUE_ZONES.find((z) => z.id === "parking");
              if (zone) onSelectZone(zone);
            }}
          >
            <rect
              x="720"
              y="80"
              width="250"
              height="480"
              fill="#222824"
              stroke={selectedZone?.id === "parking" ? "#E5C88F" : "#C9A96E"}
              strokeWidth={selectedZone?.id === "parking" ? "3" : "1.5"}
              strokeDasharray="6,4"
              rx="8"
            />
            {/* Parking Slots */}
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`pslot-${i}`}
                x1="740"
                y1={130 + i * 45}
                x2="830"
                y2={130 + i * 45}
                stroke="#4A564D"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
            ))}
            <text
              x="845"
              y="280"
              fill="#F7F0E4"
              fontSize="14"
              textAnchor="middle"
              fontWeight="bold"
            >
              20,000 SQ. FT.
            </text>
            <text
              x="845"
              y="302"
              fill="#C9A96E"
              fontSize="12"
              textAnchor="middle"
              fontWeight="600"
            >
              PARKING GROUNDS
            </text>
            <text
              x="845"
              y="322"
              fill="#A4B3A8"
              fontSize="10"
              textAnchor="middle"
            >
              150+ Cars & Buses (Verified)
            </text>
          </g>

          {/* 2. 180 FT. DECORATED ENTRYWAY WALKWAY */}
          <g
            className="cursor-pointer transition-all hover:opacity-90"
            onClick={() => {
              const zone = VENUE_ZONES.find((z) => z.id === "entry-passage");
              if (zone) onSelectZone(zone);
            }}
          >
            <rect
              x="575"
              y="80"
              width="90"
              height="470"
              fill="#7A1D1D"
              stroke={selectedZone?.id === "entry-passage" ? "#E5C88F" : "#C9A96E"}
              strokeWidth={selectedZone?.id === "entry-passage" ? "3" : "1.5"}
              rx="6"
            />
            {/* Carpet runner inner */}
            <rect
              x="590"
              y="90"
              width="60"
              height="450"
              fill="#962222"
              stroke="#D4A759"
              strokeWidth="1"
            />
            {/* Chandeliers markers */}
            {Array.from({ length: 7 }).map((_, i) => (
              <circle
                key={`ch-${i}`}
                cx="620"
                cy={130 + i * 60}
                r="7"
                fill="#FEE6A0"
                stroke="#C9A96E"
                strokeWidth="1.5"
              />
            ))}
            <text
              x="620"
              y="320"
              fill="#FFFFFF"
              fontSize="13"
              textAnchor="middle"
              fontWeight="bold"
              transform="rotate(-90 620 320)"
            >
              180 FT. DECORATED PASSAGE
            </text>
          </g>

          {/* 3. MAIN BUILDING (Indoor Banquet Hall + 9 VIP Rooms) */}
          <g
            className="cursor-pointer transition-all hover:opacity-90"
            onClick={() => {
              const zone = VENUE_ZONES.find((z) => z.id === "indoor-hall");
              if (zone) onSelectZone(zone);
            }}
          >
            <rect
              x="60"
              y="30"
              width="480"
              height="100"
              fill="#263D2C"
              stroke={
                selectedZone?.id === "indoor-hall" || selectedZone?.id === "vip-rooms"
                  ? "#E5C88F"
                  : "#C9A96E"
              }
              strokeWidth="2.5"
              rx="6"
            />
            {/* Ground Hall vs First Floor Rooms labels */}
            <line
              x1="60"
              y1="80"
              x2="540"
              y2="80"
              stroke="#C9A96E"
              strokeDasharray="4,4"
              strokeWidth="1"
            />
            <text
              x="300"
              y="60"
              fill="#F7F0E4"
              fontSize="14"
              textAnchor="middle"
              fontWeight="bold"
            >
              2,000 SQ. FT. INDOOR AC BANQUET HALL (GROUND FLOOR)
            </text>
            <text
              x="300"
              y="102"
              fill="#C9A96E"
              fontSize="12"
              textAnchor="middle"
              fontWeight="600"
            >
              9 LUXURY VIP AC ROOMS & BRIDAL SUITES (FIRST FLOOR)
            </text>
          </g>

          {/* 4. 17,000 SQ. FT. GARDEN LAWN */}
          <g
            className="cursor-pointer transition-all hover:opacity-95"
            onClick={() => {
              const zone = VENUE_ZONES.find((z) => z.id === "garden-lawn");
              if (zone) onSelectZone(zone);
            }}
          >
            <rect
              x="60"
              y="150"
              width="480"
              height="400"
              fill="url(#lawn-grad)"
              stroke={selectedZone?.id === "garden-lawn" ? "#E5C88F" : "#C9A96E"}
              strokeWidth={selectedZone?.id === "garden-lawn" ? "3" : "1.5"}
              rx="8"
            />
            <text
              x="300"
              y="260"
              fill="#F7F0E4"
              fontSize="20"
              textAnchor="middle"
              fontWeight="bold"
              letterSpacing="1"
            >
              17,000 SQ. FT. GARDEN LAWN
            </text>
            <text
              x="300"
              y="285"
              fill="#D4C198"
              fontSize="12"
              textAnchor="middle"
              fontWeight="500"
            >
              Accommodates 1,000+ Guests • Open-Air Wedding & Baaraat Celebrations
            </text>
          </g>

          {/* 5. STAGES (Left edge of lawn) */}
          <g
            className="cursor-pointer transition-all hover:opacity-90"
            onClick={() => {
              const zone = VENUE_ZONES.find((z) => z.id === "stages");
              if (zone) onSelectZone(zone);
            }}
          >
            {/* Stage 1 (16x32) */}
            <rect
              x="75"
              y="180"
              width="100"
              height="150"
              fill="#9C1E55"
              stroke={selectedZone?.id === "stages" ? "#E5C88F" : "#FFFFFF"}
              strokeWidth="2"
              rx="4"
            />
            <text
              x="125"
              y="245"
              fill="#FFFFFF"
              fontSize="12"
              textAnchor="middle"
              fontWeight="bold"
            >
              STAGE 1
            </text>
            <text
              x="125"
              y="265"
              fill="#F9D4E2"
              fontSize="11"
              textAnchor="middle"
            >
              16 × 32
            </text>
            <text
              x="125"
              y="282"
              fill="#FFFFFF"
              fontSize="9"
              textAnchor="middle"
              opacity="0.8"
            >
              (Provisional)
            </text>

            {/* Stage 2 (20x12) */}
            <rect
              x="75"
              y="350"
              width="80"
              height="90"
              fill="#6B1D45"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              rx="4"
            />
            <text
              x="115"
              y="390"
              fill="#FFFFFF"
              fontSize="11"
              textAnchor="middle"
              fontWeight="bold"
            >
              STAGE 2
            </text>
            <text
              x="115"
              y="408"
              fill="#EAC8D8"
              fontSize="10"
              textAnchor="middle"
            >
              20 × 12
            </text>
          </g>

          {/* 6. CENTRAL MANDAP CANOPY */}
          <g
            className="cursor-pointer transition-all hover:opacity-90"
            onClick={() => {
              const zone = VENUE_ZONES.find((z) => z.id === "mandap");
              if (zone) onSelectZone(zone);
            }}
          >
            <circle
              cx="300"
              cy="390"
              r="45"
              fill="#851D1D"
              stroke={selectedZone?.id === "mandap" ? "#E5C88F" : "#C9A96E"}
              strokeWidth="2"
            />
            <circle cx="300" cy="390" r="32" fill="#A82828" stroke="#FFE082" />
            <text
              x="300"
              y="386"
              fill="#FFFFFF"
              fontSize="11"
              textAnchor="middle"
              fontWeight="bold"
            >
              CENTRAL MANDAP
            </text>
            <text
              x="300"
              y="402"
              fill="#FFD699"
              fontSize="9"
              textAnchor="middle"
            >
              Phera Sanctuary
            </text>
          </g>

          {/* 7. COVERED DINING & BUFFET PAVILION (Right of lawn) */}
          <g
            className="cursor-pointer transition-all hover:opacity-90"
            onClick={() => {
              const zone = VENUE_ZONES.find((z) => z.id === "dining-pavilion");
              if (zone) onSelectZone(zone);
            }}
          >
            <rect
              x="440"
              y="170"
              width="85"
              height="350"
              fill="#1F3425"
              stroke={selectedZone?.id === "dining-pavilion" ? "#E5C88F" : "#C9A96E"}
              strokeWidth="2"
              strokeDasharray="4,3"
              rx="6"
            />
            <text
              x="482"
              y="330"
              fill="#C9A96E"
              fontSize="12"
              textAnchor="middle"
              fontWeight="bold"
              transform="rotate(90 482 330)"
            >
              COVERED DINING & BUFFET PAVILION
            </text>
          </g>

          {/* Hotspot Markers */}
          {VENUE_ZONES.map((zone, idx) => {
            // Map zone coordinates to SVG points
            const coordMap: Record<string, [number, number]> = {
              "garden-lawn": [230, 200],
              "indoor-hall": [240, 55],
              "vip-rooms": [400, 95],
              stages: [125, 210],
              "entry-passage": [620, 200],
              parking: [845, 230],
              "dining-pavilion": [482, 230],
              mandap: [300, 390],
            };

            const pt = coordMap[zone.id];
            if (!pt) return null;

            return (
              <g
                key={`svg-hotspot-${idx}`}
                transform={`translate(${pt[0]}, ${pt[1]})`}
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectZone(zone);
                }}
              >
                <circle
                  r="12"
                  fill="#C9A96E"
                  className="animate-ping opacity-35"
                />
                <circle
                  r="8"
                  fill="#C9A96E"
                  stroke="#263D2C"
                  strokeWidth="2"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Space Overview Card */}
      {selectedZone && (
        <div className="mt-4 p-4 rounded-xl bg-[#263D2C] border border-[#C9A96E]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in duration-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C9A96E]/20 text-[#C9A96E] flex items-center justify-center shrink-0 border border-[#C9A96E]/40">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-base text-[#F7F0E4]">
                  {selectedZone.title}
                </h4>
                <span
                  className={`text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full ${
                    selectedZone.isVerified
                      ? "bg-emerald-950 text-emerald-300 border border-emerald-500/30"
                      : "bg-amber-950 text-amber-300 border border-amber-500/30"
                  }`}
                >
                  {selectedZone.isVerified ? "Verified Video Data" : "Provisional / Concept"}
                </span>
              </div>
              <p className="text-xs text-[#F7F0E4]/80 mt-1 max-w-2xl">
                {selectedZone.description}
              </p>
            </div>
          </div>
          <button
            onClick={() => onEnquireZone(selectedZone)}
            className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C9A96E] hover:bg-[#DBC08C] text-[#263D2C] font-semibold text-xs transition-all shadow cursor-pointer"
          >
            <span>Enquire About This Space</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
