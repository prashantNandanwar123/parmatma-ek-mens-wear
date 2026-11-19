import { images } from '../config/images'

// Confirm with the shop owner which categories are actually stocked.
export const categories = [
  { slug: 'shirts', name: "Men's Shirts", image: images.shirts, blurb: 'Everyday and occasion shirts.', nameMr: 'पुरुषांचे शर्ट', blurbMr: 'रोजचे आणि खास प्रसंगाचे शर्ट.' },
  { slug: 't-shirts', name: 'T-Shirts', image: images.tshirts, blurb: 'Easy tees for daily wear.', nameMr: 'टी-शर्ट', blurbMr: 'रोजच्या वापरासाठी सोपे टी-शर्ट.' },
  { slug: 'jeans-denim', name: 'Jeans & Denim', image: images.denim, blurb: 'Denim in classic cuts.', nameMr: 'जीन्स आणि डेनिम', blurbMr: 'क्लासिक कटमधील डेनिम.' },
  { slug: 'trousers', name: 'Trousers', image: images.trousers, blurb: 'Smart, comfortable trousers.', nameMr: 'ट्राउझर्स', blurbMr: 'आरामदायी आणि नीटनेटके ट्राउझर्स.' },
  { slug: 'casual-wear', name: 'Casual Wear', image: images.casual, blurb: 'Relaxed looks for off days.', nameMr: 'कॅज्युअल कपडे', blurbMr: 'सुट्टीच्या दिवसांसाठी आरामदायी लुक.' },
  { slug: 'formal-wear', name: 'Formal Wear', image: images.formal, blurb: 'Dressed for work and events.', nameMr: 'फॉर्मल कपडे', blurbMr: 'कामासाठी आणि समारंभांसाठी.' },
  { slug: 'traditional-wear', name: 'Traditional Wear', image: images.traditional, blurb: 'Kurta and festive styles.', nameMr: 'पारंपरिक पोशाख', blurbMr: 'कुर्ता आणि सणासुदीचे पोशाख.' },
  { slug: 'jackets', name: 'Jackets', image: images.jackets, blurb: 'Layers for cooler days.', nameMr: 'जॅकेट', blurbMr: 'थंडीसाठी वरचे कपडे.' },
  { slug: 'accessories', name: 'Accessories', image: images.accessories, blurb: 'Finishing touches.', nameMr: 'ॲक्सेसरीज', blurbMr: 'पोशाखाला शेवटचा साज.' },
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)
