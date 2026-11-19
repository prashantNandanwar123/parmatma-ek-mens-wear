# Parmatma Ek Mens Wear – Website

React + Vite + Tailwind CSS + React Router + Framer Motion + Lucide + React Hot Toast.

## Run locally
```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Deploy on Vercel
Push to GitHub → import in Vercel → framework "Vite" (build `npm run build`, output `dist`). `vercel.json` handles page refreshes.
After deploying, replace `YOUR-DOMAIN.vercel.app` in `public/sitemap.xml` and `public/robots.txt`.

## Where to edit things
| What | File |
|---|---|
| Phone, WhatsApp number, hours, address, Maps link, social links | `src/config/business.js` |
| All photos (replace with real shop photos in `/public/images`) | `src/config/images.js` |
| Products (names, prices, sizes, colours, new/favourite flags) | `src/data/products.js` |
| Categories | `src/data/categories.js` |
| Genuine customer reviews | `src/data/reviews.js` |
| SEO structured data (add phone/hours when confirmed) | `index.html` |

## Marathi / English
- A **मराठी / EN** button in the header switches the whole site. Marathi is the default for first-time visitors (change `DEFAULT_LANG` in `src/i18n/LanguageContext.jsx`).
- All text lives in `src/i18n/strings.js`. Have a native Marathi speaker review the wording before launch.
- Hero slides are in `src/data/slides.js`.
- Colours: no black. Deep maroon (`ink`), saffron (from the logo), gold, cream – set in `tailwind.config.js`.

## Honest notes
- The product catalogue is a **sample**. Prices show "Price on enquiry" until real prices are added.
- Reviews are empty on purpose; only real reviews should be added.
- WhatsApp buttons work before a number is set (WhatsApp opens with the message ready); add the number for direct chat.
- Images are Unsplash stock placeholders; a branded fallback shows if any fail to load.
- The contact form sends the message via WhatsApp (no backend needed).
