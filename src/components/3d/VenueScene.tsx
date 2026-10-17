"use client";

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import * as THREE from "three";
import { VENUE_ZONES, VenueZone } from "@/data/venueData";

interface VenueSceneProps {
  atmosphere: "evening" | "day";
  selectedZone: VenueZone | null;
  onSelectZone: (zone: VenueZone) => void;
  isModalOpen?: boolean;
}

// Glowing Interactive WebGL Hotspot Pin (Pure 3D geometry - ZERO DOM manipulation)
function HotspotPin({
  zone,
  isSelected,
  onSelect,
}: {
  zone: VenueZone;
  isSelected: boolean;
  onSelect: () => void;
  hideLabel?: boolean;
}) {
  const pinRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (pinRef.current) {
      pinRef.current.position.y =
        zone.position[1] + Math.sin(state.clock.elapsedTime * 2.5 + zone.position[0]) * 0.25;
    }
  });

  return (
    <group ref={pinRef} position={zone.position}>
      {/* Floating 3D Diamond Pin */}
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
        castShadow
      >
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color={isSelected || hovered ? "#E5C88F" : "#C9A96E"}
          emissive={isSelected || hovered ? "#C9A96E" : "#8A6D3B"}
          emissiveIntensity={isSelected || hovered ? 1.6 : 0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Pulsing Base Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]}>
        <ringGeometry args={[0.6, 0.9, 32]} />
        <meshBasicMaterial
          color={isSelected ? "#E5C88F" : "#C9A96E"}
          transparent
          opacity={isSelected ? 0.9 : 0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3D WebGL Billboard Label (Always faces camera, rendered inside WebGL, NO DOM nodes) */}
      <Billboard position={[0, 1.8, 0]} follow={true}>
        {/* Clickable Badge Background Mesh */}
        <mesh
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(false);
          }}
          position={[0, 0, 0]}
        >
          <planeGeometry args={[zone.shortTitle.length * 0.24 + 1.2, 0.72]} />
          <meshBasicMaterial
            color={isSelected ? "#C9A96E" : "#1B2F22"}
            transparent
            opacity={0.94}
          />
        </mesh>

        {/* Status Dot */}
        <mesh position={[-(zone.shortTitle.length * 0.12) - 0.2, 0, 0.02]}>
          <circleGeometry args={[0.1, 16]} />
          <meshBasicMaterial color={zone.isVerified ? "#4ADE80" : "#FBBF24"} />
        </mesh>

        {/* Zone Label Text */}
        <Text
          position={[0.1, 0, 0.02]}
          fontSize={0.27}
          color={isSelected ? "#1E3022" : "#F7F0E4"}
          anchorX="center"
          anchorY="middle"
        >
          {zone.shortTitle}
        </Text>
      </Billboard>
    </group>
  );
}

// Main Two-Story Building Architectural Mesh
function SwarnaBhummiBuilding({ isNight }: { isNight: boolean }) {
  return (
    <group position={[0, 0, -36]}>
      {/* Foundation plinth */}
      <mesh position={[0, 0.4, 0]} receiveShadow castShadow>
        <boxGeometry args={[44, 0.8, 18]} />
        <meshStandardMaterial color="#1E2A22" roughness={0.7} />
      </mesh>

      {/* Ground Floor Body - Indoor Banquet Hall (2,000 sq ft) */}
      <mesh position={[0, 3.2, 0]} receiveShadow castShadow>
        <boxGeometry args={[42, 4.8, 16]} />
        <meshStandardMaterial color="#EDE3D1" roughness={0.4} />
      </mesh>

      {/* First Floor Body - VIP Suites (9 Rooms) */}
      <mesh position={[0, 8.2, 0]} receiveShadow castShadow>
        <boxGeometry args={[42, 5.2, 16]} />
        <meshStandardMaterial color="#F2E8DC" roughness={0.4} />
      </mesh>

      {/* Charcoal Vertical Architectural Pillars/Panels */}
      {[-18, -12, -6, 0, 6, 12, 18].map((x, i) => (
        <mesh key={`col-${i}`} position={[x, 5.8, 8.1]} castShadow>
          <boxGeometry args={[0.9, 10.2, 0.4]} />
          <meshStandardMaterial color="#222B25" metalness={0.2} roughness={0.5} />
        </mesh>
      ))}

      {/* Ground Floor Large Glass Windows with Chandeliers Glowing Inside */}
      {[-15, -9, 9, 15].map((x, i) => (
        <group key={`win-g-${i}`} position={[x, 3.2, 8.05]}>
          <mesh>
            <planeGeometry args={[4.2, 3.8]} />
            <meshStandardMaterial
              color={isNight ? "#FFEDB3" : "#7BA0B5"}
              emissive={isNight ? "#FFD275" : "#1A2530"}
              emissiveIntensity={isNight ? 0.8 : 0.1}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
          {isNight && (
            <pointLight
              color="#FFE4A0"
              intensity={25}
              distance={12}
              position={[0, 0, 2]}
            />
          )}
        </group>
      ))}

      {/* Ground Floor Main Glass Entrance Portal with Steps */}
      <group position={[0, 2.6, 8.1]}>
        {/* Entrance Door Frame */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[5.8, 4.2, 0.3]} />
          <meshStandardMaterial color="#1C261F" metalness={0.5} />
        </mesh>
        {/* Glass Entrance */}
        <mesh position={[0, 0.5, 0.16]}>
          <planeGeometry args={[5.2, 3.8]} />
          <meshStandardMaterial
            color={isNight ? "#FFF2CC" : "#99BBD0"}
            emissive={isNight ? "#FFE082" : "#000000"}
            emissiveIntensity={isNight ? 1.0 : 0.1}
            roughness={0.1}
          />
        </mesh>
        {/* Front Black Granite Steps */}
        <mesh position={[0, -2.1, 1.4]} receiveShadow>
          <boxGeometry args={[7.5, 0.4, 2.4]} />
          <meshStandardMaterial color="#181A18" roughness={0.3} />
        </mesh>
        <mesh position={[0, -2.3, 2.2]} receiveShadow>
          <boxGeometry args={[9.0, 0.4, 2.2]} />
          <meshStandardMaterial color="#202220" roughness={0.3} />
        </mesh>
      </group>

      {/* First Floor Center Balcony Terrace */}
      <group position={[0, 6.0, 9.2]}>
        {/* Balcony Platform */}
        <mesh receiveShadow castShadow>
          <boxGeometry args={[8.0, 0.4, 2.6]} />
          <meshStandardMaterial color="#EDE3D1" roughness={0.5} />
        </mesh>
        {/* Balcony Railing */}
        <mesh position={[0, 0.7, 1.25]}>
          <boxGeometry args={[8.0, 1.1, 0.1]} />
          <meshStandardMaterial
            color="#1F2821"
            metalness={0.8}
            roughness={0.3}
            transparent
            opacity={0.85}
          />
        </mesh>
        {/* Signboard on Balcony Railing: MARRIAGE HALL & LAWN */}
        <mesh position={[0, 0.5, 1.32]}>
          <planeGeometry args={[6.8, 0.65]} />
          <meshStandardMaterial
            color={isNight ? "#B31312" : "#8A1818"}
            emissive={isNight ? "#FF2A2A" : "#550000"}
            emissiveIntensity={isNight ? 0.9 : 0.2}
          />
        </mesh>
        <Text
          position={[0, 0.5, 1.34]}
          fontSize={0.28}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          MARRIAGE HALL & LAWN
        </Text>
      </group>

      {/* First Floor Windows (VIP Suites) */}
      {[-15, -9, 9, 15].map((x, i) => (
        <group key={`win-1-${i}`} position={[x, 8.2, 8.05]}>
          <mesh>
            <planeGeometry args={[4.2, 3.4]} />
            <meshStandardMaterial
              color={isNight ? "#FFE8B0" : "#6E8FA4"}
              emissive={isNight ? "#FFD680" : "#101820"}
              emissiveIntensity={isNight ? 0.6 : 0.05}
              roughness={0.1}
            />
          </mesh>
        </group>
      ))}

      {/* Roof Parapet & Cornice */}
      <mesh position={[0, 11.0, 0]} castShadow>
        <boxGeometry args={[43.5, 0.6, 17]} />
        <meshStandardMaterial color="#C9A96E" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Illuminated Rooftop Signboard: SWARNA BHUMMI */}
      <group position={[0, 12.4, 7.8]}>
        <mesh castShadow>
          <boxGeometry args={[14, 2.0, 0.6]} />
          <meshStandardMaterial color="#1E2721" metalness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.32]}>
          <planeGeometry args={[13.6, 1.8]} />
          <meshStandardMaterial
            color={isNight ? "#A81212" : "#7A0F0F"}
            emissive={isNight ? "#FF1F1F" : "#330000"}
            emissiveIntensity={isNight ? 1.0 : 0.2}
          />
        </mesh>
        <Text
          position={[0, 0.3, 0.35]}
          fontSize={0.7}
          color="#FFE98A"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.08}
        >
          SWARNA BHUMMI
        </Text>
        <Text
          position={[0, -0.4, 0.35]}
          fontSize={0.32}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.12}
        >
          MARRIAGE HALL & LAWN
        </Text>
      </group>

      {/* String Fairy Lights draped vertically down the facade */}
      {isNight &&
        [-19, -16, -13, -10, -7, -4, 4, 7, 10, 13, 16, 19].map((x, i) => (
          <group key={`fairy-vert-${i}`} position={[x, 6, 8.3]}>
            {[-4, -2, 0, 2, 4].map((y, j) => (
              <mesh key={`fbulb-${j}`} position={[0, y, 0]}>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshBasicMaterial color="#FFEBB5" />
              </mesh>
            ))}
          </group>
        ))}
    </group>
  );
}

// 180 Ft. Decorated Grand Walkway
function EntryPassage({ isNight }: { isNight: boolean }) {
  const arches = [28, 20, 12, 4, -4, -12, -20];

  return (
    <group position={[26, 0, 0]}>
      {/* Red & Gold Carpet Runner on Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.08, 4]} receiveShadow>
        <planeGeometry args={[5.2, 54]} />
        <meshStandardMaterial color="#9E1A1A" roughness={0.8} />
      </mesh>
      {/* Gold Border on Carpet */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.09, 4]} receiveShadow>
        <planeGeometry args={[5.6, 54.2]} />
        <meshStandardMaterial color="#C9A96E" roughness={0.5} />
      </mesh>

      {/* Archway Portals with Red & White Draping and Chandeliers */}
      {arches.map((z, idx) => (
        <group key={`arch-${idx}`} position={[0, 0, z]}>
          {/* Left & Right Support Pillars */}
          <mesh position={[-2.8, 2.5, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.25, 5, 12]} />
            <meshStandardMaterial color="#C9A96E" metalness={0.6} />
          </mesh>
          <mesh position={[2.8, 2.5, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.25, 5, 12]} />
            <meshStandardMaterial color="#C9A96E" metalness={0.6} />
          </mesh>

          {/* Draped Red Silk Fabric on sides */}
          <mesh position={[-2.8, 2.5, 0]} castShadow>
            <boxGeometry args={[0.5, 4.8, 0.4]} />
            <meshStandardMaterial color="#8B1414" roughness={0.6} />
          </mesh>
          <mesh position={[2.8, 2.5, 0]} castShadow>
            <boxGeometry args={[0.5, 4.8, 0.4]} />
            <meshStandardMaterial color="#8B1414" roughness={0.6} />
          </mesh>

          {/* Overhead Floral Crossbeam Arch */}
          <mesh position={[0, 5.1, 0]} castShadow>
            <boxGeometry args={[6.0, 0.45, 0.4]} />
            <meshStandardMaterial color="#D12323" roughness={0.5} />
          </mesh>

          {/* Hanging Chandelier / Lantern Fixture in Center */}
          <mesh position={[0, 4.2, 0]} castShadow>
            <cylinderGeometry args={[0.3, 0.45, 0.8, 8]} />
            <meshStandardMaterial
              color={isNight ? "#FFF0B8" : "#E2D3A5"}
              emissive={isNight ? "#FFDE75" : "#000000"}
              emissiveIntensity={isNight ? 1.2 : 0}
            />
          </mesh>

          {isNight && (
            <pointLight
              color="#FFE199"
              intensity={16}
              distance={9}
              position={[0, 3.8, 0]}
            />
          )}
        </group>
      ))}
    </group>
  );
}

// 17,000 Sq. Ft. Garden Lawn with Boundaries & Decor
function GardenLawn({ isNight }: { isNight: boolean }) {
  return (
    <group position={[0, 0, 0]}>
      {/* Main Lawn Grass Turf Surface (17,000 sq ft) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-3, 0.02, 0]} receiveShadow>
        <planeGeometry args={[46, 52]} />
        <meshStandardMaterial
          color={isNight ? "#203B26" : "#4A7C38"}
          roughness={0.9}
        />
      </mesh>

      {/* Stone Paved Perimeter Walkway */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-3, 0.01, 0]} receiveShadow>
        <planeGeometry args={[49, 55]} />
        <meshStandardMaterial color="#D9CDBD" roughness={0.7} />
      </mesh>

      {/* White Perimeter Boundary Walls with Red Caps */}
      {/* Left Wall */}
      <mesh position={[-27.5, 1.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 2.6, 54]} />
        <meshStandardMaterial color="#EDE3D4" roughness={0.5} />
      </mesh>
      {/* Left Wall Cap */}
      <mesh position={[-27.5, 2.75, 0]}>
        <boxGeometry args={[0.8, 0.2, 54.2]} />
        <meshStandardMaterial color="#8F1D1D" roughness={0.4} />
      </mesh>

      {/* Front Entrance Wall */}
      <mesh position={[-3, 1.4, 27.5]} castShadow receiveShadow>
        <boxGeometry args={[48, 2.6, 0.5]} />
        <meshStandardMaterial color="#EDE3D4" roughness={0.5} />
      </mesh>

      {/* Decorative Boundary Wall Pillar Lanterns */}
      {[-24, -12, 0, 12, 24].map((z, i) => (
        <group key={`post-l-${i}`} position={[-27.5, 2.8, z]}>
          <mesh castShadow>
            <boxGeometry args={[0.9, 0.6, 0.9]} />
            <meshStandardMaterial color="#C9A96E" />
          </mesh>
          <mesh position={[0, 0.6, 0]}>
            <sphereGeometry args={[0.25, 12, 12]} />
            <meshStandardMaterial
              color={isNight ? "#FFEBA0" : "#EAD9B8"}
              emissive={isNight ? "#FFDF70" : "#000000"}
              emissiveIntensity={isNight ? 1.0 : 0}
            />
          </mesh>
          {isNight && (
            <pointLight
              color="#FFE59E"
              intensity={12}
              distance={8}
              position={[0, 0.6, 0]}
            />
          )}
        </group>
      ))}

      {/* Guest Velvet Luxury Sofas and Banquet Seating on Lawn */}
      {/* Velvet Sofas arranged facing the main stage */}
      {[-12, -4, 4].map((z, row) => (
        <group key={`sofa-row-${row}`} position={[-8, 0.4, z]}>
          {/* Emerald Green Velvet Sofa */}
          <mesh position={[0, 0.3, 0]} castShadow>
            <boxGeometry args={[4.2, 0.7, 1.4]} />
            <meshStandardMaterial color="#1E4430" roughness={0.7} />
          </mesh>
          <mesh position={[0, 0.8, -0.6]} castShadow>
            <boxGeometry args={[4.2, 0.8, 0.3]} />
            <meshStandardMaterial color="#1E4430" roughness={0.7} />
          </mesh>
          {/* Small Gold Coffee Table */}
          <mesh position={[0, 0.25, 1.3]} castShadow>
            <boxGeometry args={[2.4, 0.4, 0.8]} />
            <meshStandardMaterial color="#C9A96E" metalness={0.7} roughness={0.3} />
          </mesh>
        </group>
      ))}

      {/* Festive Fairy Lights canopy crossing the lawn */}
      {isNight && (
        <group position={[-3, 8.5, 0]}>
          {[-15, -5, 5, 15].map((x, i) => (
            <group key={`fairy-line-${i}`}>
              {[-18, -9, 0, 9, 18].map((z, j) => (
                <mesh key={`fstar-${j}`} position={[x + (j % 2) * 0.4, Math.sin(x + j) * 0.3, z]}>
                  <sphereGeometry args={[0.07, 6, 6]} />
                  <meshBasicMaterial color="#FFF5D1" />
                </mesh>
              ))}
            </group>
          ))}
        </group>
      )}
    </group>
  );
}

// Two Celebration Stages (Stage 1: 16x32 & Stage 2: 20x12)
function StagesSection({ isNight }: { isNight: boolean }) {
  return (
    <group position={[-22, 0, -12]}>
      {/* Main Stage (16x32 Displayed Specs) */}
      <group position={[0, 0, 0]}>
        {/* Main Stage Raised Plinth */}
        <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
          <boxGeometry args={[9.6, 1.8, 14.8]} />
          <meshStandardMaterial color="#F4EFE6" roughness={0.5} />
        </mesh>
        {/* Pink/Magenta Stage Carpet Dais */}
        <mesh position={[0, 1.82, 0]} receiveShadow>
          <boxGeometry args={[9.2, 0.05, 14.4]} />
          <meshStandardMaterial color="#C72562" roughness={0.7} />
        </mesh>

        {/* Dual Flanking Entrance Stairs */}
        {/* Front Left Stairs */}
        <mesh position={[4.6, 0.45, 4.5]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 0.9, 2.4]} />
          <meshStandardMaterial color="#EAE2D5" />
        </mesh>
        {/* Front Right Stairs */}
        <mesh position={[4.6, 0.45, -4.5]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 0.9, 2.4]} />
          <meshStandardMaterial color="#EAE2D5" />
        </mesh>

        {/* Back Wall Backdrop Canopy */}
        <mesh position={[-4.5, 4.8, 0]} castShadow>
          <boxGeometry args={[0.5, 6.2, 14.2]} />
          <meshStandardMaterial color="#FDFBF8" roughness={0.6} />
        </mesh>
        {/* Floral Top Header Border */}
        <mesh position={[-4.3, 7.8, 0]} castShadow>
          <boxGeometry args={[0.8, 0.8, 14.6]} />
          <meshStandardMaterial color="#E0386C" roughness={0.8} />
        </mesh>

        {/* Couple Throne Wedding Sofas / Chairs on Stage */}
        <mesh position={[-2.5, 2.4, 0]} castShadow>
          <boxGeometry args={[1.4, 1.0, 3.2]} />
          <meshStandardMaterial color="#C9A96E" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Stage Warm Spotlights */}
        {isNight && (
          <>
            <pointLight
              color="#FFE8B5"
              intensity={35}
              distance={16}
              position={[2.5, 6.5, 0]}
              castShadow
            />
            <pointLight
              color="#FFB3D9"
              intensity={20}
              distance={12}
              position={[-2, 6, 4]}
            />
          </>
        )}
      </group>

      {/* Black & White Checkered Dance / Garland Exchange Floor in front of Stage */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[7.5, 0.04, 0]} receiveShadow>
        <planeGeometry args={[5.5, 9.0]} />
        <meshStandardMaterial color="#222222" roughness={0.4} />
      </mesh>

      {/* Secondary Stage (20x12 Displayed Specs) */}
      <group position={[0, 0, 16]}>
        <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
          <boxGeometry args={[6.8, 1.2, 9.6]} />
          <meshStandardMaterial color="#E8E0D2" roughness={0.6} />
        </mesh>
        <mesh position={[0, 1.22, 0]} receiveShadow>
          <boxGeometry args={[6.4, 0.04, 9.2]} />
          <meshStandardMaterial color="#8E244D" roughness={0.7} />
        </mesh>
      </group>
    </group>
  );
}

// Ceremonial Mandap Canopy on Lawn
function MandapCanopy({ isNight }: { isNight: boolean }) {
  return (
    <group position={[0, 0, 16]}>
      {/* Raised Circular Sacred Plinth */}
      <mesh position={[0, 0.25, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[4.2, 4.4, 0.5, 32]} />
        <meshStandardMaterial color="#EAE2D3" roughness={0.5} />
      </mesh>
      {/* Sacred Center Carpet */}
      <mesh position={[0, 0.52, 0]} receiveShadow>
        <cylinderGeometry args={[3.8, 3.8, 0.04, 32]} />
        <meshStandardMaterial color="#A52323" roughness={0.7} />
      </mesh>

      {/* Four Mandap Pillars */}
      {[
        [-2.4, -2.4],
        [2.4, -2.4],
        [-2.4, 2.4],
        [2.4, 2.4],
      ].map(([x, z], i) => (
        <mesh key={`mpill-${i}`} position={[x, 2.4, z]} castShadow>
          <cylinderGeometry args={[0.2, 0.25, 4.2, 16]} />
          <meshStandardMaterial color="#C9A96E" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* Mandap Overhead Floral Dome / Canopy Header */}
      <mesh position={[0, 4.6, 0]} castShadow>
        <coneGeometry args={[3.6, 1.2, 16]} />
        <meshStandardMaterial color="#B82828" roughness={0.6} />
      </mesh>
      <mesh position={[0, 4.3, 0]} castShadow>
        <cylinderGeometry args={[3.7, 3.7, 0.4, 16]} />
        <meshStandardMaterial color="#FFA000" roughness={0.8} />
      </mesh>

      {/* Sacred Havan Kund Fire Glow */}
      <mesh position={[0, 0.65, 0]} castShadow>
        <boxGeometry args={[0.9, 0.3, 0.9]} />
        <meshStandardMaterial color="#3A281E" roughness={0.8} />
      </mesh>
      {isNight && (
        <pointLight
          color="#FFA23A"
          intensity={25}
          distance={10}
          position={[0, 1.5, 0]}
        />
      )}
    </group>
  );
}

// Covered Dining & Catering Buffet Pavilion
function DiningPavilion({ isNight }: { isNight: boolean }) {
  return (
    <group position={[18, 0, -14]}>
      {/* Covered Pavilion Roof */}
      <mesh position={[0, 4.8, 0]} castShadow>
        <boxGeometry args={[8.5, 0.4, 26]} />
        <meshStandardMaterial color="#1E3224" roughness={0.6} />
      </mesh>
      {/* Support Columns */}
      {[-10, 0, 10].map((z, idx) => (
        <group key={`dcol-${idx}`}>
          <mesh position={[-3.8, 2.4, z]} castShadow>
            <cylinderGeometry args={[0.18, 0.22, 4.6, 12]} />
            <meshStandardMaterial color="#C9A96E" />
          </mesh>
          <mesh position={[3.8, 2.4, z]} castShadow>
            <cylinderGeometry args={[0.18, 0.22, 4.6, 12]} />
            <meshStandardMaterial color="#C9A96E" />
          </mesh>
        </group>
      ))}

      {/* Long Buffet Catering Tables with Warm Lights */}
      {[-8, -2, 4, 10].map((z, i) => (
        <group key={`buffet-${i}`} position={[0, 0.5, z]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3.2, 1.0, 4.5]} />
            <meshStandardMaterial color="#FCFAF6" roughness={0.6} />
          </mesh>
          {/* Table Skirt Accent */}
          <mesh position={[0, -0.2, 0]}>
            <boxGeometry args={[3.24, 0.4, 4.54]} />
            <meshStandardMaterial color="#C9A96E" roughness={0.5} />
          </mesh>
          {isNight && (
            <pointLight
              color="#FFE4A8"
              intensity={10}
              distance={6}
              position={[0, 3.2, 0]}
            />
          )}
        </group>
      ))}
    </group>
  );
}

// 20,000 Sq. Ft. Dedicated Parking Grounds
function ParkingGrounds({ isNight }: { isNight: boolean }) {
  return (
    <group position={[36, 0, -22]}>
      {/* Paved Parking Surface (20,000 sq ft) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
        <planeGeometry args={[26, 38]} />
        <meshStandardMaterial color="#363A37" roughness={0.8} />
      </mesh>

      {/* White Parking Bay Lines */}
      {[-12, -6, 0, 6, 12].map((z, i) => (
        <mesh
          key={`pline-${i}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.02, z]}
        >
          <planeGeometry args={[18, 0.2]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
        </mesh>
      ))}

      {/* Stylized Parked Cars / Vehicles */}
      {[
        [-5, -10, "#E0E0E0"],
        [-5, -4, "#2C3E50"],
        [-5, 2, "#95A5A6"],
        [5, -7, "#BDC3C7"],
        [5, -1, "#34495E"],
        [5, 5, "#C0392B"],
      ].map(([x, z, col], i) => (
        <group key={`car-${i}`} position={[Number(x), 0.7, Number(z)]}>
          <mesh castShadow>
            <boxGeometry args={[2.4, 0.9, 4.2]} />
            <meshStandardMaterial color={String(col)} metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.6, -0.2]} castShadow>
            <boxGeometry args={[2.0, 0.6, 2.2]} />
            <meshStandardMaterial color="#1A252F" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* High-Mast Floodlight Post */}
      <group position={[8, 0, 14]}>
        <mesh position={[0, 5, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.25, 10, 12]} />
          <meshStandardMaterial color="#8A928C" metalness={0.8} />
        </mesh>
        <mesh position={[0, 9.8, 0]}>
          <boxGeometry args={[1.4, 0.5, 1.4]} />
          <meshStandardMaterial
            color={isNight ? "#FFFFFF" : "#888888"}
            emissive={isNight ? "#FFFFFF" : "#000000"}
            emissiveIntensity={isNight ? 1.5 : 0}
          />
        </mesh>
        {isNight && (
          <pointLight
            color="#FFFFFF"
            intensity={40}
            distance={28}
            position={[0, 9.5, 0]}
            castShadow
          />
        )}
      </group>
    </group>
  );
}

// Lush Landscaping & Surrounding Trees
function SurroundingLandscaping({ isNight }: { isNight: boolean }) {
  const treePositions: [number, number, number][] = [
    [-34, 0, -25],
    [-34, 0, -10],
    [-34, 0, 10],
    [-34, 0, 24],
    [-18, 0, 32],
    [0, 0, 32],
    [16, 0, 32],
    [32, 0, 28],
    [48, 0, -5],
    [48, 0, -20],
  ];

  return (
    <group>
      {/* Outer Ground Expanse */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
        <planeGeometry args={[150, 150]} />
        <meshStandardMaterial
          color={isNight ? "#142417" : "#375928"}
          roughness={0.95}
        />
      </mesh>

      {/* Trees */}
      {treePositions.map(([x, y, z], idx) => (
        <group key={`tree-${idx}`} position={[x, y, z]}>
          <mesh position={[0, 2.5, 0]} castShadow>
            <cylinderGeometry args={[0.35, 0.5, 5, 8]} />
            <meshStandardMaterial color="#4A3423" roughness={0.9} />
          </mesh>
          <mesh position={[0, 6.0, 0]} castShadow>
            <coneGeometry args={[2.8, 4.8, 8]} />
            <meshStandardMaterial
              color={isNight ? "#1B3A23" : "#2F5F34"}
              roughness={0.8}
            />
          </mesh>
          <mesh position={[0, 8.2, 0]} castShadow>
            <coneGeometry args={[2.1, 3.8, 8]} />
            <meshStandardMaterial
              color={isNight ? "#24492C" : "#3E7545"}
              roughness={0.8}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function VenueScene({
  atmosphere,
  selectedZone,
  onSelectZone,
  isModalOpen = false,
}: VenueSceneProps) {
  const isNight = atmosphere === "evening";

  return (
    <>
      {/* Dynamic Lighting System */}
      {isNight ? (
        <>
          {/* Night Ambience - Royal Indian Wedding Dusk */}
          <ambientLight intensity={0.45} color="#455B75" />
          <directionalLight
            position={[30, 45, 30]}
            intensity={0.65}
            color="#A8C7F0"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          {/* Warm Golden Atmosphere Uplighting */}
          <pointLight
            position={[0, 15, 0]}
            intensity={30}
            distance={50}
            color="#FFD685"
          />
        </>
      ) : (
        <>
          {/* Daylight Site Inspection Ambience */}
          <ambientLight intensity={0.9} color="#FFFDF7" />
          <directionalLight
            position={[40, 60, 40]}
            intensity={1.8}
            color="#FFF8E7"
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
        </>
      )}

      {/* Architectural Models */}
      <SwarnaBhummiBuilding isNight={isNight} />
      <EntryPassage isNight={isNight} />
      <GardenLawn isNight={isNight} />
      <StagesSection isNight={isNight} />
      <MandapCanopy isNight={isNight} />
      <DiningPavilion isNight={isNight} />
      <ParkingGrounds isNight={isNight} />
      <SurroundingLandscaping isNight={isNight} />

      {/* Interactive Zone Hotspots */}
      {VENUE_ZONES.map((zone) => (
        <HotspotPin
          key={zone.id}
          zone={zone}
          isSelected={selectedZone?.id === zone.id}
          onSelect={() => onSelectZone(zone)}
          hideLabel={isModalOpen}
        />
      ))}
    </>
  );
}
