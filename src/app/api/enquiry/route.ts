import { NextResponse } from "next/server";
import { VENUE_CONFIG } from "@/config/venue";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, eventType, eventDate, guestCount, facilities, message, specificZone } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your valid full name." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!eventType || typeof eventType !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select an event type." },
        { status: 400 }
      );
    }

    // In demo mode: Do NOT send emails to external services or persist personal data to DB
    const enquiryId = `DEMO-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      enquiryId,
      demoMode: true,
      message: VENUE_CONFIG.enquirySuccessNotice,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Server error";
    console.error("Demo Enquiry API exception:", errorMsg);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your demo enquiry." },
      { status: 500 }
    );
  }
}
