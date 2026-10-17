/**
 * Centralized Venue & Client Demo Configuration
 * 
 * All venue details, verified statistics, and demo placeholders are defined here.
 * When preparing for production deployment after client sign-off, update this file
 * with client-verified credentials, numbers, and live endpoints.
 */

export interface VenueStatistic {
  label: string;
  value: string;
  unit: string;
  isVerified: boolean;
  statusLabel?: string;
  description: string;
}

export interface DemoConfig {
  isDemoMode: boolean;
  demoAnnouncementText: string;
  demoFooterBadgeText: string;
  conceptDisclaimer: string;
  modelDisclaimer: string;
  statsDemonstrationNotice: string;
  enquiryFormLabel: string;
  enquirySuccessNotice: string;
  addressStatusNote: string;

  venue: {
    brandName: string;
    descriptor: string;
    tagline: string;
    hindiTagline: string;
    supportingText: string;
    
    // Demo-safe contact placeholders (No real personal numbers or active external links)
    phoneDisplay: string;
    whatsappDisplay: string;
    emailDisplay: string;
    instagramHandle: string;
    displayAddress: string;
    landmark: string;
    city: string;
    state: string;
    country: string;

    // Contact modal notice texts
    phoneNotice: string;
    whatsappNotice: string;
    emailNotice: string;
    instagramNotice: string;
    bookingNotice: string;

    // Verified & Provisional Stats
    stats: VenueStatistic[];
  };

  clientFeedback: {
    sectionTitle: string;
    sectionDescription: string;
    ctaButtonText: string;
    topics: {
      id: string;
      title: string;
      description: string;
      sampleDraft: string;
    }[];
  };
}

export const VENUE_CONFIG: DemoConfig = {
  isDemoMode: true,
  demoAnnouncementText: "WEBSITE CONCEPT PREVIEW · CREATED FOR CLIENT REVIEW",
  demoFooterBadgeText: "DEMO PREVIEW",
  conceptDisclaimer: "Venue information shown for concept demonstration; final details to be confirmed.",
  modelDisclaimer: "Interactive concept model — final venue layout subject to site-plan confirmation.",
  statsDemonstrationNotice: "Venue information shown for concept demonstration; final details to be confirmed.",
  enquiryFormLabel: "Sample Enquiry — Demo Only",
  enquirySuccessNotice: "Thank you for exploring the Swarna Bhummi website concept! This is a demonstration form. Live enquiry and booking functionality will be connected after approval.",
  addressStatusNote: "Sample location text; confirm the exact address with the client.",

  venue: {
    brandName: "SWARNA BHUMMI",
    descriptor: "MARRIAGE HALL & LAWN",
    tagline: "Where Every Celebration Becomes a Memory",
    hindiTagline: "जहाँ हर उत्सव बनता है एक अविस्मरणीय याद",
    supportingText: "A grand destination for weddings, rituals, and unforgettable celebrations in Jaunpur, Uttar Pradesh.",

    // Safe demo placeholders as requested
    phoneDisplay: "+91 XXXXX XXXXX",
    whatsappDisplay: "Demo enquiry only",
    emailDisplay: "demo@example.com",
    instagramHandle: "@yourvenuehandle",
    displayAddress: "Jaunpur, Uttar Pradesh (sample location text; confirm the exact address with the client)",
    landmark: "Rampur, Jaunpur (approx. 4 km from nearby station — final location to be verified)",
    city: "Jaunpur",
    state: "Uttar Pradesh",
    country: "India",

    // Client approval notices
    phoneNotice: "Business contact details will be added after approval.",
    whatsappNotice: "The official WhatsApp number and instant chat integration will be connected after client approval.",
    emailNotice: "Official business email delivery will be activated upon client confirmation. No email has been sent.",
    instagramNotice: "The official venue Instagram profile link is awaiting confirmation and will be linked after client approval.",
    bookingNotice: "Live online booking is currently disabled in this concept preview. Please explore the interactive demo enquiry form below.",

    // Venue Statistics (Preserving verified numbers: Garden 17,000 sq.ft., Hall 2,000 sq.ft., VIP Rooms 9)
    stats: [
      {
        label: "Garden Lawn",
        value: "17,000",
        unit: "sq. ft.",
        isVerified: true,
        statusLabel: "Verified Concept Stat",
        description: "Manicured lush open lawn for outdoor celebrations & baaraat receptions",
      },
      {
        label: "Indoor Banquet Hall",
        value: "2,000",
        unit: "sq. ft.",
        isVerified: true,
        statusLabel: "Verified Concept Stat",
        description: "Climate-controlled indoor banquet space with grand crystal chandeliers",
      },
      {
        label: "Luxury VIP Rooms",
        value: "9",
        unit: "Suites",
        isVerified: true,
        statusLabel: "Verified Concept Stat",
        description: "Air-conditioned dressing and guest suites with modern fluted paneling",
      },
      {
        label: "Decorated Walkway",
        value: "180",
        unit: "feet",
        isVerified: true,
        statusLabel: "Verified Concept Stat",
        description: "Grand passage with chandeliers, warm fairy lights, and regal draping",
      },
      {
        label: "Dedicated Parking",
        value: "20,000",
        unit: "sq. ft.",
        isVerified: true,
        statusLabel: "Verified Concept Stat",
        description: "Spacious private parking area with security access & wide entryway",
      },
      {
        label: "Celebration Stages",
        value: "2",
        unit: "Stages",
        isVerified: false,
        statusLabel: "Details to be confirmed",
        description: "Outdoor grand jaimala stage and indoor mandap / reception stage setup",
      },
    ],
  },

  clientFeedback: {
    sectionTitle: "Imagine Your Venue, Reimagined.",
    sectionDescription: "This interactive concept demonstrates how Swarna Bhummi could present its spaces, facilities, and wedding experiences online. The final website can be tailored to your actual property layout, brand identity, services, and booking process.",
    ctaButtonText: "Discuss This Concept",
    topics: [
      {
        id: "approve-design",
        title: "Approve the overall design direction",
        description: "You like the visual style, color palette, and general structure of the website concept.",
        sampleDraft: "Hello! We reviewed the Swarna Bhummi website concept preview and approve the overall design direction, color scheme, and presentation style. We are ready to proceed with finalizing the content and connecting our live contact details.",
      },
      {
        id: "request-changes",
        title: "Request design changes",
        description: "Suggest changes to branding colors, typography, imagery, layout sections, or wording.",
        sampleDraft: "Hello! We reviewed the website concept and would like to propose a few design and content adjustments (e.g. photos, package details, colors, and layout sections) before final deployment.",
      },
      {
        id: "discuss-3d",
        title: "Discuss 3D venue accuracy",
        description: "Review the interactive 3D model against your architectural blueprint or actual site dimensions.",
        sampleDraft: "Hello! We explored the interactive 3D venue explorer. We would like to share our official site blueprint/CAD floor plan to align the 3D zones, stages, and building orientation with our actual property layout.",
      },
      {
        id: "discuss-functionality",
        title: "Discuss booking and enquiry functionality",
        description: "Decide on WhatsApp integration, email notifications, lead CRM, calendar availability, and direct call routing.",
        sampleDraft: "Hello! We would like to discuss the enquiry workflow for Swarna Bhummi, including direct WhatsApp routing, inquiry email alerts to our management team, and calendar date-blocking features.",
      },
    ],
  },
};
