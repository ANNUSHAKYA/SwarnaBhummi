import { NextResponse } from "next/server";
import { VENUE_INFO } from "@/data/venueData";

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

    const enquiryId = `SB-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    const enquiryData = {
      enquiryId,
      timestamp,
      name: name.trim(),
      phone: phone.trim(),
      eventType,
      eventDate: eventDate || "Flexible / Not finalized",
      guestCount: guestCount || "Not specified",
      facilities: Array.isArray(facilities) ? facilities : [],
      specificZone: specificZone || "Entire Venue",
      message: message ? message.trim() : "",
    };

    console.log("=== NEW VENUE ENQUIRY RECEIVED ===", enquiryData);

    // Server-side email delivery if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    let emailStatus = "unconfigured_dev_mode";

    if (resendApiKey) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Swarna Bhummi Enquiries <enquiries@swarnabhummi.in>",
            to: [VENUE_INFO.businessEmail],
            subject: `New Wedding Enquiry [${enquiryId}]: ${enquiryData.name} (${enquiryData.eventType})`,
            html: `
              <h2>New Wedding & Celebration Enquiry</h2>
              <p><strong>Reference:</strong> ${enquiryId}</p>
              <p><strong>Name:</strong> ${enquiryData.name}</p>
              <p><strong>Phone:</strong> ${enquiryData.phone}</p>
              <p><strong>Event:</strong> ${enquiryData.eventType}</p>
              <p><strong>Preferred Date:</strong> ${enquiryData.eventDate}</p>
              <p><strong>Expected Guests:</strong> ${enquiryData.guestCount}</p>
              <p><strong>Facilities:</strong> ${enquiryData.facilities.join(", ") || "General"}</p>
              <p><strong>Specific Zone:</strong> ${enquiryData.specificZone}</p>
              <p><strong>Message:</strong> ${enquiryData.message || "None"}</p>
            `,
          }),
        });

        if (response.ok) {
          emailStatus = "sent_via_resend";
        } else {
          console.error("Resend API error response:", await response.text());
          emailStatus = "resend_error_fallback";
        }
      } catch (emailErr) {
        console.error("Email sending failure:", emailErr);
        emailStatus = "resend_exception_fallback";
      }
    }

    return NextResponse.json({
      success: true,
      enquiryId,
      emailStatus,
      message:
        emailStatus === "sent_via_resend"
          ? "Thank you! Your enquiry has been forwarded directly to the venue managers."
          : "Thank you! Your enquiry details have been recorded. You can also connect directly via WhatsApp.",
      data: enquiryData,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Server error";
    console.error("Enquiry API exception:", errorMsg);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your enquiry." },
      { status: 500 }
    );
  }
}
