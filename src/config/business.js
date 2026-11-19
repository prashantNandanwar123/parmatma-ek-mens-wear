// ─────────────────────────────────────────────────────────────
// CENTRAL BUSINESS CONFIG – edit this file to update the whole site.
// Anything left empty ('') shows a graceful fallback on the site.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'Parmatma Ek Mens Wear',
  hindiName: 'परमात्मा एक',
  hindiSub: 'मेन्स वेअर',
  tagline: 'Style That Defines You.',
  subtag: 'Discover Your Style. Wear Your Confidence.',

  address: {
    line1: 'Kosra, Kondha (Akot Road)',
    city: 'Bhandara',
    state: 'Maharashtra',
    postalCode: '441908',
    country: 'India',
  },

  // TODO (owner): add the real numbers. Digits only for WhatsApp, with country code, e.g. '919876543210'.
  phone: '', // e.g. '+91 98765 43210'
  whatsapp: '', // e.g. '919876543210'
  email: '',

  // TODO (owner): fill in real timings. Leave `open`/`close` empty to show "Timings to be confirmed".
  hours: [
    { day: 'Monday', open: '', close: '' },
    { day: 'Tuesday', open: '', close: '' },
    { day: 'Wednesday', open: '', close: '' },
    { day: 'Thursday', open: '', close: '' },
    { day: 'Friday', open: '', close: '' },
    { day: 'Saturday', open: '', close: '' },
    { day: 'Sunday', open: '', close: '' },
  ],

  // Google Maps. Replace `mapsPlaceUrl` with the share link of the Google Business listing once available.
  mapsQuery: 'Parmatma Ek Mens Wear Kondha Bhandara 441908',
  mapsPlaceUrl: '',

  social: {
    instagram: 'https://www.instagram.com/parmatma_ek_mens_wear_435/',
    instagramHandle: '@parmatma_ek_mens_wear_435',
    facebook: '',
    youtube: '',
  },

  // Paste real Google reviews / owner-provided testimonials in src/data/reviews.js
  googleReviewUrl: '',
}

export const fullAddress = () => {
  const a = business.address
  return `${a.line1}, ${a.city}, ${a.state} – ${a.postalCode}, ${a.country}`
}

const enc = encodeURIComponent

export const mapsEmbedUrl = () =>
  `https://www.google.com/maps?q=${enc(business.mapsQuery)}&output=embed`

export const mapsViewUrl = () =>
  business.mapsPlaceUrl || `https://www.google.com/maps/search/?api=1&query=${enc(business.mapsQuery)}`

export const directionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${enc(business.mapsQuery)}`

export const hasWhatsApp = () => /^\d{10,15}$/.test(business.whatsapp)

// Works even before the owner's number is added: WhatsApp opens with the message ready and lets the visitor pick a contact.
export const whatsappLink = (message = '') => {
  const text = message ? `?text=${enc(message)}` : ''
  return hasWhatsApp() ? `https://wa.me/${business.whatsapp}${text}` : `https://wa.me/${text}`
}

export const hoursConfigured = () => business.hours.some((h) => h.open && h.close)
