import { VENUE_INFO } from "@/data/venueData";

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
 * Builds a formatted, URL-encoded WhatsApp click-to-chat link
 */
export function generateWhatsAppLink(payload?: WhatsAppInquiryPayload): string {
  const rawNumber = VENUE_INFO.whatsappNumber.replace(/[^0-9]/g, "");
  
  if (!payload) {
    const defaultMsg = `Namaste! I would like to inquire about booking Swarna Bhummi Marriage Hall & Lawn, Jaunpur for an upcoming event. Please share availability and packages.`;
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(defaultMsg)}`;
  }

  const lines: string[] = [
    `✨ *Enquiry for Swarna Bhummi Marriage Hall & Lawn, Jaunpur* ✨`,
    ``,
  ];

  if (payload.name) {
    lines.push(`👤 *Name:* ${payload.name}`);
  }
  if (payload.phone) {
    lines.push(`📞 *Contact:* ${payload.phone}`);
  }
  if (payload.eventType) {
    lines.push(`🎉 *Event Type:* ${payload.eventType}`);
  }
  if (payload.eventDate) {
    lines.push(`📅 *Preferred Date:* ${payload.eventDate}`);
  }
  if (payload.guestCount) {
    lines.push(`👥 *Estimated Guests:* ${payload.guestCount}`);
  }
  if (payload.specificZone) {
    lines.push(`📍 *Specific Space of Interest:* ${payload.specificZone}`);
  }
  if (payload.facilities && payload.facilities.length > 0) {
    lines.push(`🏛️ *Required Facilities:* ${payload.facilities.join(", ")}`);
  }
  if (payload.message) {
    lines.push(`💬 *Additional Notes:* ${payload.message}`);
  }

  lines.push(``);
  lines.push(`Please let me know the availability and share details for a venue visit.`);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${rawNumber}?text=${text}`;
}
