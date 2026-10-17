# Swarna Bhummi — Luxury Marriage Hall & Lawn, Jaunpur

> **“Where Every Celebration Becomes a Memory”**
>
> *जहाँ हर उत्सव बनता है एक अविस्मरणीय याद*

A premium, responsive, interactive 3D wedding venue website designed for **Swarna Bhummi Marriage Hall & Lawn, Jaunpur, Uttar Pradesh, India**. Built with **Next.js 16 (App Router & Turbopack)**, **Three.js / React Three Fiber**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Signature Features

- **Interactive 3D Venue Explorer:** Built with Three.js and React Three Fiber.
  - Explore the 17,000 sq. ft. starlit garden lawn, 2,000 sq. ft. AC indoor banquet hall, 180 ft. grand entrance walkway, dual celebration stages, and 20,000 sq. ft. parking area in 3D.
  - Orbit, pan, and zoom controls with camera presets (Overview, Top-Down, Grand Entrance, Main Stage, Indoor Hall).
  - **Atmosphere Modes:** Toggle between *Evening Wedding Glow* (fairy lights, stars, warm lanterns) and *Daylight Site Inspection*.
  - **Interactive 3D Hotspot Pins:** Click to open space inspection cards with verified specifications and direct enquiry triggers.
  - **2D Architectural Site Plan Fallback:** Accessible top-down SVG site plan map.
- **Cinematic Hero:** Real venue video preview loop, Cormorant Garamond typography, and quick metrics bar.
- **Verified Venue Statistics:** Certified data from on-site documentation:
  - 🌿 **17,000 sq. ft.** Garden Lawn
  - 🏛️ **2,000 sq. ft.** AC Indoor Banquet Hall
  - 🚗 **20,000 sq. ft.** Dedicated Parking Grounds
  - 🛏️ **9 Luxury VIP AC Rooms & Bridal Suites**
  - 🚶 **180 ft.** Decorated Regal Walkway
  - 🎭 **2 Celebration Stages** (Provisional dimensions: 16×32 & 20×12)
- **Venue Facilities & Event Storytelling:** Dedicated cards for Weddings, Receptions, Sangeet & Haldi, Birthdays, and Corporate Gatherings.
- **Rich Photo & Video Gallery:** Masonry image grid with category filtering, lightbox zoom viewer, and full drone video player modal.
- **Enquiry & Booking Conversion:**
  - Validated booking form with event date picker, guest count, and facility multi-select.
  - Server-side email delivery handler (`/api/enquiry`) with Resend support.
  - Instant confetti celebration with reference ID generation (`#SB-...`).
  - **WhatsApp Integration:** Floating button and pre-filled, URL-encoded WhatsApp messages.
- **Location & Connectivity:** Verified helplines (`+91 89600 44685`, `+91 91618 88867`), travel distances from station (~4 km), and interactive Google Maps embed.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (Turbopack, App Router)](https://nextjs.org)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 ("Heritage Garden Luxury" theme)
- **3D Graphics:** [Three.js](https://threejs.org), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Icons:** [Lucide React](https://lucide.dev)
- **Form Handling:** React Hook Form & Zod
- **Animations & Effects:** Canvas Confetti

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## ⚙️ Environment Variables (Optional)

Create a `.env.local` file to customize integrations:

```env
# Business WhatsApp number (Digits with country code)
NEXT_PUBLIC_WHATSAPP_NUMBER=+918960044685

# Business Email for enquiry notifications
NEXT_PUBLIC_BUSINESS_EMAIL=swarnabhummijaunpur@gmail.com

# Instagram Profile URL
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/darkerbelal

# Resend API Key for server-side email dispatch
RESEND_API_KEY=your_resend_api_key_here
```

---

## 📍 Venue Location

**Swarna Bhummi Marriage Hall & Lawn**  
Rampur (Near Public School), approximately 4 km from nearby station,  
Jaunpur, Uttar Pradesh, India - 222001  
Helplines: **+91 89600 44685** | **+91 91618 88867**

---

© 2026 Swarna Bhummi Marriage Hall & Lawn. All Rights Reserved.
