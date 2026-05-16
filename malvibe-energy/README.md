# Malvibe Energy Solutions Ltd — Website

A highly interactive, modern marketing website for **Malvibe Energy Solutions Ltd**,
a Kenyan solar & electrical contractor.

> _"Eco-friendly Energy for a greener tomorrow."_

## Features

- Vite + React 18 + TypeScript
- Tailwind CSS (installed locally — no CDN)
- Framer Motion animations & scroll reveals
- Hero with auto-scrolling background image carousel
- Hover-dropdown navbar (mobile drawer with collapsible services)
- Custom **wavy cursor trail** that follows your mouse
- Floating WhatsApp button → +254 796 744 640
- Contact form (mailto: → malcomngobi@gmail.com)
- Wavy SVG footer
- Fully mobile responsive

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

To build for production:

```bash
npm run build
npm run preview
```

## Editing

- Company info (phone, email, address) lives in `src/components/Contact.tsx`,
  `src/components/Footer.tsx` and `src/components/WhatsAppFab.tsx`.
- Services list: `src/data/services.ts`
- FAQs / testimonials / stats: `src/data/faqs.ts`
- Color tokens: `tailwind.config.js`

Enjoy! 🌞
