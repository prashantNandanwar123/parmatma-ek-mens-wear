// ─────────────────────────────────────────────────────────────
// CENTRAL IMAGE LIST – every photo on the site is referenced here.
// To use real shop photos: put files in /public/images and replace the URL, e.g. '/images/store-front.jpg'.
// Current URLs are royalty-free Unsplash stock placeholders. If any fail to load, the site shows a branded fallback.
// ─────────────────────────────────────────────────────────────
const u = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`

export const images = {
  hero: u('photo-1507679799987-c73779587ccf', 2000),
  about: u('photo-1441984904996-e0b6ba687e04', 1400),
  aboutSecondary: u('photo-1489987707025-afc232f7ea0f', 900),
  store: u('photo-1441984904996-e0b6ba687e04', 1400),
  shirts: u('photo-1596755094514-f87e34085b2c', 900),
  shirtsAlt: u('photo-1602810318383-e386cc2a3ccf', 900),
  tshirts: u('photo-1521572163474-6864f9cf17ab', 900),
  tshirtsAlt: u('photo-1576566588028-4147f3842f27', 900),
  denim: u('photo-1542272604-787c3835535d', 900),
  trousers: u('photo-1473966968600-fa801b869a1a', 900),
  casual: u('photo-1490578474895-699cd4e2cf59', 900),
  formal: u('photo-1617137968427-85924c800a22', 900),
  traditional: u('photo-1583391733956-3750e0ff4e8b', 900),
  jackets: u('photo-1551028719-00167b16eac5', 900),
  accessories: u('photo-1523381210434-271e8be1f52b', 900),
}

export const galleryImages = [
  { src: images.store, alt: 'Clothing store interior with racks of menswear', tag: 'Store' },
  { src: images.aboutSecondary, alt: 'Menswear on a display rack', tag: 'Store' },
  { src: images.shirts, alt: 'Folded casual shirts', tag: 'Collections' },
  { src: images.denim, alt: 'Stack of denim jeans', tag: 'Collections' },
  { src: images.formal, alt: 'Man wearing a tailored formal suit', tag: 'Fashion' },
  { src: images.hero, alt: 'Man in a tailored jacket', tag: 'Fashion' },
  { src: images.tshirts, alt: 'Plain t-shirt on a hanger', tag: 'New arrivals' },
  { src: images.jackets, alt: 'Man wearing a casual jacket', tag: 'New arrivals' },
  { src: images.accessories, alt: 'Folded clothes on a shelf', tag: 'Displays' },
  { src: images.trousers, alt: 'Trousers and styled outfit', tag: 'Collections' },
]
