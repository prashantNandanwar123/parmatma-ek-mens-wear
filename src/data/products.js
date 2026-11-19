import { images } from '../config/images'

// ─────────────────────────────────────────────────────────────
// SAMPLE CATALOGUE – replace with the shop's real products.
// - `price: null` shows "Price on enquiry". Add a number (in ₹) when confirmed.
// - `newArrival` / `favourite` control the homepage sections. Set honestly.
// - Sizes and colours are generic placeholders.
// ─────────────────────────────────────────────────────────────
const S = ['S', 'M', 'L', 'XL', 'XXL']
const WAIST = ['30', '32', '34', '36', '38']
const c = (name, hex) => ({ name, hex })

export const products = [
  {
    id: 'p1', name: 'Classic Formal Shirt', category: 'shirts', price: null, sizes: S,
    colors: [c('White', '#FFFFFF'), c('Sky Blue', '#9EC3E6'), c('Light Grey', '#C9C9C9')],
    images: [images.shirts, images.shirtsAlt], newArrival: true, favourite: true,
    description: 'A clean, well-structured shirt for work and occasions. Edit this description with the real fabric and fit details.',
  },
  {
    id: 'p2', name: 'Casual Check Shirt', category: 'shirts', price: null, sizes: S,
    colors: [c('Navy', '#1F2A44'), c('Olive', '#5B6240')],
    images: [images.shirtsAlt, images.shirts], newArrival: false, favourite: true,
    description: 'A relaxed shirt for everyday wear. Add fabric, fit and care details from the shop owner.',
  },
  {
    id: 'p3', name: 'Everyday Round-Neck T-Shirt', category: 't-shirts', price: null, sizes: S,
    colors: [c('White', '#FFFFFF'), c('Indigo', '#2E2A5E'), c('Grey', '#8A8A8A')],
    images: [images.tshirts, images.tshirtsAlt], newArrival: true, favourite: false,
    description: 'A simple tee that works on its own or layered. Replace with real product information.',
  },
  {
    id: 'p4', name: 'Polo T-Shirt', category: 't-shirts', price: null, sizes: S,
    colors: [c('Navy', '#1F2A44'), c('Maroon', '#6B1F2A')],
    images: [images.tshirtsAlt, images.tshirts], newArrival: false, favourite: false,
    description: 'A collared tee for a sharper casual look. Replace with real product information.',
  },
  {
    id: 'p5', name: 'Straight-Fit Denim Jeans', category: 'jeans-denim', price: null, sizes: WAIST,
    colors: [c('Indigo', '#2B3A67'), c('Indigo', '#2E2A5E')],
    images: [images.denim, images.casual], newArrival: true, favourite: true,
    description: 'Classic denim in a straight cut. Add wash, stretch and fit details from the owner.',
  },
  {
    id: 'p6', name: 'Slim-Fit Denim Jeans', category: 'jeans-denim', price: null, sizes: WAIST,
    colors: [c('Mid Blue', '#4A6FA5'), c('Charcoal', '#3A3A3A')],
    images: [images.casual, images.denim], newArrival: false, favourite: false,
    description: 'A slimmer denim option. Replace with the real product details.',
  },
  {
    id: 'p7', name: 'Formal Trousers', category: 'trousers', price: null, sizes: WAIST,
    colors: [c('Indigo', '#2E2A5E'), c('Charcoal', '#3A3A3A'), c('Beige', '#CDBA96')],
    images: [images.trousers, images.formal], newArrival: false, favourite: true,
    description: 'Smart trousers for office and events. Add fabric and fit information.',
  },
  {
    id: 'p8', name: 'Casual Chinos', category: 'trousers', price: null, sizes: WAIST,
    colors: [c('Khaki', '#B5A37A'), c('Navy', '#1F2A44')],
    images: [images.casual, images.trousers], newArrival: true, favourite: false,
    description: 'Comfortable chinos for daily wear. Replace with the real product details.',
  },
  {
    id: 'p9', name: 'Smart Casual Outfit Set', category: 'casual-wear', price: null, sizes: S,
    colors: [c('Cream', '#EDE6D3'), c('Brown', '#6B4A2F')],
    images: [images.casual, images.hero], newArrival: false, favourite: false,
    description: 'Casual separates styled together. Replace with the real product details.',
  },
  {
    id: 'p10', name: 'Tailored Formal Suit', category: 'formal-wear', price: null, sizes: ['38', '40', '42', '44'],
    colors: [c('Indigo', '#2E2A5E'), c('Navy', '#1F2A44')],
    images: [images.formal, images.hero], newArrival: true, favourite: true,
    description: 'A sharp suit for weddings and formal occasions. Ask the shop about sizes and availability.',
  },
  {
    id: 'p11', name: 'Kurta for Festive Wear', category: 'traditional-wear', price: null, sizes: S,
    colors: [c('Cream', '#EDE6D3'), c('Maroon', '#6B1F2A'), c('Teal', '#1F5A5A')],
    images: [images.traditional, images.formal], newArrival: false, favourite: true,
    description: 'Traditional wear for festivals and family occasions. Add fabric and embroidery details.',
  },
  {
    id: 'p12', name: 'Casual Jacket', category: 'jackets', price: null, sizes: S,
    colors: [c('Indigo', '#2E2A5E'), c('Olive', '#5B6240')],
    images: [images.jackets, images.hero], newArrival: true, favourite: false,
    description: 'A layer for cooler days. Replace with the real product details.',
  },
  {
    id: 'p13', name: 'Leather-Look Belt', category: 'accessories', price: null, sizes: ['Free size'],
    colors: [c('Indigo', '#2E2A5E'), c('Brown', '#5A3A22')],
    images: [images.accessories], newArrival: false, favourite: false,
    description: 'A belt to finish the outfit. Replace with the real product details.',
  },
]

export const getProduct = (id) => products.find((p) => p.id === id)
export const formatPrice = (p, t) => (p ? `₹${Number(p).toLocaleString('en-IN')}` : t ? t('priceOnEnquiry') : 'Price on enquiry')

// Marathi names (shown when the site is in Marathi)
const mr = {
  p1: 'क्लासिक फॉर्मल शर्ट', p2: 'कॅज्युअल चेक शर्ट', p3: 'रोजचा राउंड-नेक टी-शर्ट', p4: 'पोलो टी-शर्ट',
  p5: 'स्ट्रेट-फिट डेनिम जीन्स', p6: 'स्लिम-फिट डेनिम जीन्स', p7: 'फॉर्मल ट्राउझर्स', p8: 'कॅज्युअल चिनोज',
  p9: 'स्मार्ट कॅज्युअल ड्रेस सेट', p10: 'शिवलेला फॉर्मल सूट', p11: 'सणासुदीसाठी कुर्ता', p12: 'कॅज्युअल जॅकेट', p13: 'लेदर-लुक बेल्ट',
}
products.forEach((p) => { p.nameMr = mr[p.id] })
