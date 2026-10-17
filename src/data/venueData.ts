export interface VenueZone {
  id: string;
  title: string;
  shortTitle: string;
  category: "outdoor" | "indoor" | "hospitality" | "service";
  position: [number, number, number]; // 3D coordinates
  target: [number, number, number]; // camera look-at
  cameraPos: [number, number, number]; // camera position
  isVerified: boolean;
  metric?: string;
  description: string;
  note?: string;
  image: string;
  details: string[];
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  statBadge?: string;
  isVerified: boolean;
  description: string;
  image: string;
  features: string[];
  zoneId?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "venue-garden"
    | "wedding-stages"
    | "indoor-hall"
    | "room-interiors"
    | "entrance-lighting"
    | "celebrations";
  categoryLabel: string;
  image: string;
  caption: string;
  isVerified: boolean;
}

export interface EventType {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  description: string;
  guestRange: string;
  recommendedSpaces: string[];
  icon: string;
}

import { VENUE_CONFIG } from "@/config/venue";

export const VENUE_INFO = {
  brandName: VENUE_CONFIG.venue.brandName,
  descriptor: VENUE_CONFIG.venue.descriptor,
  tagline: VENUE_CONFIG.venue.tagline,
  hindiTagline: VENUE_CONFIG.venue.hindiTagline,
  supportingText: VENUE_CONFIG.venue.supportingText,
  location: VENUE_CONFIG.venue.displayAddress,
  landmark: VENUE_CONFIG.venue.landmark,
  city: VENUE_CONFIG.venue.city,
  state: VENUE_CONFIG.venue.state,
  country: VENUE_CONFIG.venue.country,

  // Safe Demo Placeholders (Centralized in src/config/venue.ts)
  phonePrimary: VENUE_CONFIG.venue.phoneDisplay,
  phoneSecondary: VENUE_CONFIG.venue.phoneDisplay,
  phoneNumbers: [VENUE_CONFIG.venue.phoneDisplay],
  whatsappNumber: VENUE_CONFIG.venue.whatsappDisplay,
  businessEmail: VENUE_CONFIG.venue.emailDisplay,
  instagramUrl: "#demo-instagram",
  instagramHandle: VENUE_CONFIG.venue.instagramHandle,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jaunpur+Uttar+Pradesh+India",

  // Verified & Demo Metrics
  stats: VENUE_CONFIG.venue.stats,
};

export const VENUE_ZONES: VenueZone[] = [
  {
    id: "garden-lawn",
    title: "17,000 Sq. Ft. Garden Lawn",
    shortTitle: "Garden Lawn",
    category: "outdoor",
    position: [0, 1.2, 0],
    target: [0, 1.2, 0],
    cameraPos: [0, 18, 30],
    isVerified: true,
    metric: "17,000 sq. ft.",
    description:
      "A vast, lush green garden lawn designed to host grand wedding celebrations, baaraat welcomes, and starlit receptions for over 1,000+ guests. Equipped with festive lighting and perimeter pillars.",
    image: "/images/facilities/lawn.jpg",
    details: [
      "17,000 sq. ft. verified open lawn area",
      "Comfortably hosts 1,000+ seated and floating guests",
      "Perimeter illuminated decorative boundary walls",
      "Direct connection to dining pavilion and stages",
      "Lush grass turf suitable for traditional Indian wedding setups",
    ],
  },
  {
    id: "indoor-hall",
    title: "2,000 Sq. Ft. Premium Indoor Hall",
    shortTitle: "Indoor Banquet Hall",
    category: "indoor",
    position: [0, 4.5, -34],
    target: [0, 4.5, -34],
    cameraPos: [0, 8, -12],
    isVerified: true,
    metric: "2,000 sq. ft.",
    description:
      "Fully air-conditioned luxury banquet hall on the ground floor with mirror-finish reflective floors, tiered crystal chandeliers, recessed lighting, and a dedicated indoor stage dais.",
    image: "/images/facilities/indoor-hall.jpg",
    details: [
      "2,000 sq. ft. air-conditioned indoor banquet hall",
      "Multiple magnificent crystal chandeliers",
      "Floor-to-ceiling modern architectural windows",
      "High-gloss marble/tile floor with mirror reflections",
      "Built-in decorative indoor stage and luxury velvet seating",
    ],
  },
  {
    id: "vip-rooms",
    title: "9 Luxury VIP Rooms (AC Facilities)",
    shortTitle: "VIP Suites (9 Rooms)",
    category: "hospitality",
    position: [0, 9.5, -34],
    target: [0, 9.5, -34],
    cameraPos: [0, 14, -14],
    isVerified: true,
    metric: "9 AC Suites",
    description:
      "Nine private, comfortable VIP guest and bridal suites on the upper level, furnished with wooden fluted accent walls, air conditioning, modern lighting, and plush double bedding.",
    image: "/images/facilities/vip-room.jpg",
    details: [
      "9 dedicated air-conditioned guest and bridal rooms",
      "Fluted wooden headboard accent feature walls",
      "Recessed LED spotlighting and modern fixtures",
      "Private corridor access on the first floor",
      "Ideal for bridal makeup, close family, and outstation guests",
    ],
  },
  {
    id: "stages",
    title: "Two Wedding & Reception Stages",
    shortTitle: "Wedding Stages",
    category: "outdoor",
    position: [-24, 2.5, -12],
    target: [-24, 2.5, -12],
    cameraPos: [-12, 10, 8],
    isVerified: false,
    metric: "16×32 & 20×12 (Provisional)",
    note: "Displayed as 16×32 and 20×12 in venue footage; units and exact boundaries await formal client architectural confirmation.",
    description:
      "Features two stage platforms. The main celebration stage features an elevated platform with twin flanking staircases, floral canopy headers, satin drapes, and an adjacent dance/varmala area.",
    image: "/images/facilities/stages.jpg",
    details: [
      "Main Stage: 16 × 32 displayed specification (provisional units)",
      "Secondary Stage: 20 × 12 displayed specification (provisional units)",
      "Twin flanking staircases for elegant bride & groom entrance",
      "Floral drapes and overhead arch structure",
      "Paved dance / photography zone directly in front",
    ],
  },
  {
    id: "entry-passage",
    title: "180 Ft. Decorated Grand Walkway",
    shortTitle: "180 Ft. Entry Passage",
    category: "outdoor",
    position: [26, 1.5, 12],
    target: [26, 1.5, 12],
    cameraPos: [36, 9, 28],
    isVerified: true,
    metric: "180 ft. length",
    description:
      "A magnificent 180-foot long red-carpeted walkway welcoming guests from the entrance gate, adorned with overhead crystal chandeliers, satin drapes, floral arches, and geometric hanging lights.",
    image: "/images/facilities/entry-passage.jpg",
    details: [
      "180 feet long covered festive entrance avenue",
      "Overhead crystal chandeliers and warm pendant fixtures",
      "Royal red and ivory fabric draping with floral torans",
      "Photogenic red-and-gold geometric carpet runner",
      "Direct welcoming path for baaraat processions",
    ],
  },
  {
    id: "parking",
    title: "20,000 Sq. Ft. Dedicated Parking Grounds",
    shortTitle: "20,000 Sq. Ft. Parking",
    category: "service",
    position: [34, 1.0, -22],
    target: [34, 1.0, -22],
    cameraPos: [46, 16, 2],
    isVerified: true,
    metric: "20,000 sq. ft.",
    description:
      "Expansive 20,000 sq. ft. private parking grounds with ample capacity for cars, traveler vans, and two-wheelers, equipped with high-mast night lighting and clear driveway access.",
    image: "/images/facilities/parking.jpg",
    details: [
      "20,000 sq. ft. dedicated parking ground",
      "Capacity for 150+ cars and numerous two-wheelers",
      "Night illumination and wide entry driveway",
      "Separate from wedding lawn for guest safety & tranquility",
      "Convenient access directly off the main approach road",
    ],
  },
  {
    id: "dining-pavilion",
    title: "Covered Catering & Dining Pavilion",
    shortTitle: "Dining Pavilion",
    category: "service",
    position: [22, 2.0, -14],
    target: [22, 2.0, -14],
    cameraPos: [14, 11, 4],
    isVerified: false,
    metric: "Long Buffet Lines",
    note: "Conceptual space layout based on visible banquet service structure in video.",
    description:
      "Dedicated dining pavilion flanking the lawn, designed to host extensive Indian wedding buffets, live chaat and tandoor counters, beverage stations, and comfortable seated banquet dining.",
    image: "/images/gallery/inauguration.jpg",
    details: [
      "Weather-protected covered dining pavilion",
      "Accommodates multiple live food stations and dessert bars",
      "Direct pathway connection to lawn and indoor hall",
      "Hygienic setup with separate service staff circulation",
    ],
  },
  {
    id: "mandap",
    title: "Central Mandap & Ritual Sanctuary",
    shortTitle: "Ceremonial Mandap",
    category: "outdoor",
    position: [0, 2.2, 16],
    target: [0, 2.2, 16],
    cameraPos: [0, 8, 30],
    isVerified: false,
    metric: "Sacred Phera Area",
    note: "Conceptual ritual layout based on wedding arrangement shown in drone footage.",
    description:
      "A traditional sacred mandap structure placed on the lawn, framed with ceremonial pillars, floral headers, and warm lamps for traditional Vedic wedding rituals and starlit pheras.",
    image: "/images/gallery/wedding-stage.jpg",
    details: [
      "Four-pillar traditional mandap layout",
      "Sacred havan kund and family blessing seating",
      "Lush lawn setting under starlit night sky",
      "Close proximity to indoor VIP preparation suites",
    ],
  },
];

export const FACILITIES: Facility[] = [
  {
    id: "garden-lawn",
    title: "Garden Lawn",
    subtitle: "Open-Air Grand Celebrations",
    statBadge: "17,000 SQ. FT.",
    isVerified: true,
    description:
      "Expansive 17,000 sq. ft. lush landscaped garden lawn engineered for grand starlit Indian weddings, grand baaraats, and reception celebrations. The open expanse allows customized mandap architecture, extensive banquet seating, and dynamic illumination.",
    image: "/images/facilities/lawn.jpg",
    features: [
      "17,000 sq. ft. manicured green lawn",
      "Capacity for 1,000+ wedding guests",
      "Perimeter illuminated boundary walls",
      "Spacious enough for grand baaraat reception",
      "Directly connected to 180 ft. entry passage",
    ],
    zoneId: "garden-lawn",
  },
  {
    id: "indoor-hall",
    title: "Premium Indoor Hall",
    subtitle: "Air-Conditioned Elegance",
    statBadge: "2,000 SQ. FT.",
    isVerified: true,
    description:
      "A 2,000 sq. ft. air-conditioned indoor banquet hall adorned with tiered crystal chandeliers, recessed lighting, and mirror-gloss marble flooring. Perfect for weather-proof indoor rituals, ring ceremonies, and VIP dining.",
    image: "/images/facilities/indoor-hall.jpg",
    features: [
      "2,000 sq. ft. fully climate-controlled space",
      "Multi-tier crystal chandeliers & modern false ceiling",
      "Built-in elevated indoor ceremonial dais",
      "Floor-to-ceiling glass fenestration",
      "Premium emerald velvet luxury lounge seating",
    ],
    zoneId: "indoor-hall",
  },
  {
    id: "vip-rooms",
    title: "Luxury VIP Rooms",
    subtitle: "Bridal Suites & Private Comfort",
    statBadge: "9 AC ROOMS",
    isVerified: true,
    description:
      "Nine air-conditioned luxury VIP rooms located on the first floor, offering comfort and privacy for the bride, groom, and immediate families. Features wooden fluted accent walls, plush double beds, and modern attached washrooms.",
    image: "/images/facilities/vip-room.jpg",
    features: [
      "9 dedicated air-conditioned guest suites",
      "Contemporary fluted wooden paneling and headboards",
      "Bridal dressing and preparation space",
      "Quiet upper floor location with corridor access",
      "24/7 power backup and modern amenities",
    ],
    zoneId: "vip-rooms",
  },
  {
    id: "stages",
    title: "Dual Wedding & Reception Stages",
    subtitle: "Varmala & Couple Throne Platforms",
    statBadge: "2 STAGES (PROVISIONAL)",
    isVerified: false,
    description:
      "Two dedicated stage configurations visible in venue footage. Main stage features an elevated platform with twin staircases, backdrop floral draping, and space for photo sessions. Displayed dimensions (16×32 & 20×12) are provisional pending client confirmation.",
    image: "/images/facilities/stages.jpg",
    features: [
      "Twin stage platforms for varied ceremonies",
      "Main stage with dual flanking staircases",
      "Floral canopy headers and rich backdrop drapes",
      "Adjacent paved dance and photography floor",
      "Optimized sightlines from all lawn seating areas",
    ],
    zoneId: "stages",
  },
  {
    id: "entry-passage",
    title: "Decorated Grand Walkway",
    subtitle: "180 Ft. Regal Welcome Passage",
    statBadge: "180 FEET",
    isVerified: true,
    description:
      "A show-stopping 180-foot long illuminated entrance passage leading from the outer gateway into the heart of the lawn. Draped in royal red and ivory silks with overhead chandeliers and geometric lighting fixtures.",
    image: "/images/facilities/entry-passage.jpg",
    features: [
      "180 feet long covered festive walkway",
      "Hanging chandeliers and luminous light fixtures",
      "Royal red and ivory fabric canopy draping",
      "Geometric wedding carpet runner",
      "Creates an unforgettable first impression for guests",
    ],
    zoneId: "entry-passage",
  },
  {
    id: "parking",
    title: "Dedicated Parking Grounds",
    subtitle: "Secure & Spacious Vehicle Grounds",
    statBadge: "20,000 SQ. FT.",
    isVerified: true,
    description:
      "Extensive 20,000 sq. ft. private parking grounds ensuring hassle-free arrivals for wedding guests and family caravans. Illuminated by floodlights with dedicated entry and exit lanes.",
    image: "/images/facilities/parking.jpg",
    features: [
      "20,000 sq. ft. verified parking grounds",
      "Capacity for 150+ cars and buses",
      "Night illumination and wide access driveway",
      "Safe and separated from celebration lawn",
      "Easy access on Jaunpur-Rampur corridor",
    ],
    zoneId: "parking",
  },
  {
    id: "dining-catering",
    title: "Catering & Guest Dining",
    subtitle: "Covered Buffet & Live Food Counters",
    statBadge: "BANQUET PAVILION",
    isVerified: false,
    description:
      "Covered dining pavilions engineered along the lawn boundary for seamless food service. Supports multi-cuisine Indian wedding banquets, live tandoor and chaat stalls, beverage lounges, and organized dining.",
    image: "/images/gallery/inauguration.jpg",
    features: [
      "Weather-protected covered dining pavilion",
      "Ample space for long multi-cuisine buffet lines",
      "Dedicated live counter and beverage zones",
      "Smooth circulation for catering staff and guests",
      "Representative illustration based on venue service area",
    ],
    zoneId: "dining-pavilion",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Building Night Illumination",
    category: "venue-garden",
    categoryLabel: "Venue & Garden",
    image: "/images/venue/building-night.jpg",
    caption:
      "The two-story main Swarna Bhummi building adorned with vertical fairy lights, illuminated rooftop signage, and warm ambient glow.",
    isVerified: true,
  },
  {
    id: "gal-2",
    title: "180 Ft. Decorated Entry Avenue",
    category: "entrance-lighting",
    categoryLabel: "Entrance & Lighting",
    image: "/images/facilities/entry-passage.jpg",
    caption:
      "Spectacular 180-foot long covered entrance hallway adorned with chandeliers, floral headers, and royal red-and-white drapery.",
    isVerified: true,
  },
  {
    id: "gal-3",
    title: "17,000 Sq. Ft. Lawn Aerial Night View",
    category: "venue-garden",
    categoryLabel: "Venue & Garden",
    image: "/images/facilities/lawn.jpg",
    caption:
      "Overhead drone view showing the expansive 17,000 sq. ft. celebration lawn, central mandap canopy, and perimeter dining pavilions.",
    isVerified: true,
  },
  {
    id: "gal-4",
    title: "2,000 Sq. Ft. Premium Indoor Banquet Hall",
    category: "indoor-hall",
    categoryLabel: "Indoor Hall",
    image: "/images/facilities/indoor-hall.jpg",
    caption:
      "Climate-controlled indoor hall with tiered crystal chandeliers, recessed LED ceiling, and mirror-finish marble flooring.",
    isVerified: true,
  },
  {
    id: "gal-5",
    title: "Luxury VIP Guest & Bridal Suite",
    category: "room-interiors",
    categoryLabel: "Room Interiors",
    image: "/images/facilities/vip-room.jpg",
    caption:
      "One of the 9 luxury air-conditioned VIP rooms featuring modern fluted wooden accent paneling, plush bedding, and downlighting.",
    isVerified: true,
  },
  {
    id: "gal-6",
    title: "Outdoor Celebration Stage & Dais",
    category: "wedding-stages",
    categoryLabel: "Wedding Stages",
    image: "/images/facilities/stages.jpg",
    caption:
      "Elevated wedding stage with twin flanking access stairs, floral backdrop canopy, and foreground guest seating.",
    isVerified: true,
  },
  {
    id: "gal-7",
    title: "Building Modern Architectural Facade",
    category: "venue-garden",
    categoryLabel: "Venue & Garden",
    image: "/images/venue/building-facade.jpg",
    caption:
      "Architectural front facade featuring charcoal pillars, ivory composite panels, central glass doorway, and first-floor viewing balcony.",
    isVerified: true,
  },
  {
    id: "gal-8",
    title: "Grand Entrance Portal & Chandeliers",
    category: "entrance-lighting",
    categoryLabel: "Entrance & Lighting",
    image: "/images/gallery/entrance-gate.jpg",
    caption:
      "Welcoming portal with hanging chandeliers, floral torans, and festive illuminations welcoming families and baaraat guests.",
    isVerified: true,
  },
  {
    id: "gal-9",
    title: "Upper Level VIP Suite Corridor",
    category: "indoor-hall",
    categoryLabel: "Indoor Hall",
    image: "/images/gallery/upper-corridor.jpg",
    caption:
      "First floor reception lounge and suite access corridor with recessed lights and glossy flooring.",
    isVerified: true,
  },
  {
    id: "gal-10",
    title: "Hall Balcony Overlooking Lawn",
    category: "indoor-hall",
    categoryLabel: "Indoor Hall",
    image: "/images/gallery/hall-balcony-view.jpg",
    caption:
      "Panoramic double glass doors opening onto the terrace balcony overlooking the 17,000 sq. ft. lawn below.",
    isVerified: true,
  },
  {
    id: "gal-11",
    title: "20,000 Sq. Ft. Parking Grounds",
    category: "venue-garden",
    categoryLabel: "Venue & Garden",
    image: "/images/facilities/parking.jpg",
    caption:
      "Spacious 20,000 sq. ft. private parking grounds providing easy vehicle parking and security for large gatherings.",
    isVerified: true,
  },
  {
    id: "gal-12",
    title: "Grand Baaraat & Festive Procession",
    category: "celebrations",
    categoryLabel: "Celebrations",
    image: "/images/gallery/baaraat-procession.jpg",
    caption:
      "Celebrations in the decorated 180 ft. walkway during a grand wedding gathering at Swarna Bhummi.",
    isVerified: true,
  },
  {
    id: "gal-13",
    title: "Inauguration Ribbon Cutting Ceremony",
    category: "celebrations",
    categoryLabel: "Celebrations",
    image: "/images/gallery/inauguration.jpg",
    caption:
      "Auspicious ribbon cutting ceremony inaugurating Swarna Bhummi Marriage Hall & Lawn.",
    isVerified: true,
  },
  {
    id: "gal-14",
    title: "Lounge Chandelier & Reflective Flooring",
    category: "indoor-hall",
    categoryLabel: "Indoor Hall",
    image: "/images/gallery/hall-chandeliers.jpg",
    caption:
      "Close-up of the crystal chandeliers reflecting off the high-gloss floors and glass windows in the indoor banquet hall.",
    isVerified: true,
  },
];

export const EVENT_TYPES: EventType[] = [
  {
    id: "wedding",
    name: "Royal Weddings & Shaadi",
    hindiName: "विवाह एवं शादी समारोह",
    tagline: "Vedic Rituals, Grand Baaraats & Starlit Pheras",
    description:
      "From traditional Tilak and Haldi to the grand Baaraat arrival along our 180 ft. decorated passage and starlit Varmala on our 17,000 sq. ft. lawn, Swarna Bhummi creates magical wedding memories.",
    guestRange: "500 - 1,500+ Guests",
    recommendedSpaces: [
      "17,000 sq. ft. Garden Lawn",
      "Two Celebration Stages",
      "9 VIP AC Suites",
      "Covered Dining Pavilion",
    ],
    icon: "HeartHandshake",
  },
  {
    id: "reception",
    name: "Wedding Receptions",
    hindiName: "शुभ रिसेप्शन",
    tagline: "Sophisticated Evenings & Extravagant Feasts",
    description:
      "Celebrate newlywed blessings with premium stage decor, crystal chandelier banquet ambiance, and multi-cuisine buffet arrangements for wedding receptions in Jaunpur.",
    guestRange: "400 - 1,200 Guests",
    recommendedSpaces: [
      "17,000 sq. ft. Garden Lawn",
      "2,000 sq. ft. AC Indoor Hall",
      "Main Stage Dais",
      "20,000 sq. ft. Parking",
    ],
    icon: "Sparkles",
  },
  {
    id: "engagement",
    name: "Roka, Ring Ceremony & Sangeet",
    hindiName: "सगाई एवं संगीत",
    tagline: "Musical Nights & Joyous Family Unions",
    description:
      "Host musical Sangeet evenings and ring ceremonies with climate-controlled indoor elegance or open-air stage setups, complete with DJ dance floors and ambient fairy lighting.",
    guestRange: "200 - 600 Guests",
    recommendedSpaces: [
      "2,000 sq. ft. AC Indoor Hall",
      "Garden Lawn Stage",
      "VIP Suites for Performers & Family",
    ],
    icon: "Music",
  },
  {
    id: "birthday-anniversary",
    name: "Birthdays & Milestones",
    hindiName: "जन्मदिन एवं वर्षगाँठ",
    tagline: "Intimate Gatherings to Grand Milestone Galas",
    description:
      "Celebrate 25th/50th wedding anniversaries, milestone birthdays, and family reunions with personalized decor, dedicated dining counters, and comfortable hospitality.",
    guestRange: "100 - 400 Guests",
    recommendedSpaces: [
      "2,000 sq. ft. AC Indoor Banquet Hall",
      "Terrace Viewing Balcony",
      "Covered Dining Area",
    ],
    icon: "Cake",
  },
  {
    id: "corporate-social",
    name: "Social & Corporate Conclaves",
    hindiName: "सामाजिक एवं व्यावसायिक सम्मलेन",
    tagline: "Conferences, Seminars & Community Celebrations",
    description:
      "Ample parking, spacious indoor banquet hall, and high-capacity open lawns make Swarna Bhummi ideal for business meets, award galas, and community festivals in Jaunpur.",
    guestRange: "200 - 800 Guests",
    recommendedSpaces: [
      "2,000 sq. ft. AC Banquet Hall",
      "20,000 sq. ft. Parking Ground",
      "VIP Discussion Suites",
    ],
    icon: "Briefcase",
  },
];

export const TRANSPARENCY_NOTES = {
  verifiedTitle: "Verified Venue Data from On-Site Documentation",
  verifiedItems: [
    "17,000 sq. ft. Garden Lawn area stated and documented in video.",
    "2,000 sq. ft. Premium Indoor Banquet Hall verified with crystal chandeliers and AC.",
    "20,000 sq. ft. Dedicated Parking Ground verified with wide access.",
    "9 Luxury VIP AC Rooms with fluted wooden headboards and modern fixtures verified.",
    "180 Ft. Decorated Grand Walkway with chandeliers and silk drapes verified.",
    "Location: Jaunpur, Uttar Pradesh (concept demonstration; address details awaiting client confirmation).",
    "Contact channels: Business phone lines and WhatsApp integration will be connected after approval.",
  ],
  provisionalItems: [
    "Stages displayed as 16×32 and 20×12 in video; measurement units (feet/meters) and exact boundaries are provisional pending client site confirmation.",
    "3D model spatial layout and architectural placements represent an illustrative concept guided by video footage; exact CAD floor plan will be updated upon client submission.",
    "Catering packages, custom decorators, and vendor inclusions are subject to customized discussion with the management.",
  ],
};
