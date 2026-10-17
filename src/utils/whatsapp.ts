import { VENUE_CONFIG } from "@/config/venue";

export interface WhatsAppInquiryPayload {
  name?: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  guestCount?: string;
  facilities?: string[];
  message?: string;
  specificZone?: string;
}

/**
 * Builds a formatted WhatsApp enquiry text draft for production use.
 * In demo mode, external wa.me links are disabled to prevent fake number calls.
 */
export function generateWhatsAppLink(_payload?: WhatsAppInquiryPayload): string {
  // In demo mode, do not generate clickable WhatsApp links with fake numbers
  if (VENUE_CONFIG.isDemoMode) {
    return "#demo-whatsapp";
  }

  const rawNumber = VENUE_CONFIG.venue.whatsappDisplay.replace(/[^0-9]/g, "");
  return `https://wa.me/${rawNumber}`;
}
