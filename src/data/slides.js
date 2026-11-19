import { images } from '../config/images'

// Hero slider content. Edit text, images and links here.
export const slides = [
  { image: images.hero, alt: 'Man in a tailored jacket', first: true, to: '/collections', to2: '/contact' },
  {
    image: images.traditional, alt: 'Traditional menswear', to: '/collections/traditional-wear',
    eyebrow: 'Weddings and festivals', eyebrowMr: 'लग्नसमारंभ आणि सण',
    title: 'Dressed for every celebration.', titleMr: 'प्रत्येक आनंदाच्या क्षणासाठी खास पोशाख.',
    text: 'Kurta and festive styles for the whole season.', textMr: 'कुर्ता आणि सणासुदीचे पोशाख.',
    cta: 'See traditional wear', ctaMr: 'पारंपरिक पोशाख पाहा',
  },
  {
    image: images.denim, alt: 'Denim jeans', to: '/collections/jeans-denim',
    eyebrow: 'Everyday style', eyebrowMr: 'रोजची शैली',
    title: 'Denim and shirts, sorted.', titleMr: 'जीन्स आणि शर्ट, एकाच ठिकाणी.',
    text: 'Easy looks for college, work and weekends.', textMr: 'कॉलेज, कामाचे दिवस आणि सुट्टीसाठी सहज लुक.',
    cta: 'See denim', ctaMr: 'जीन्स पाहा',
  },
  {
    image: images.formal, alt: 'Man in a formal suit', to: '/collections/formal-wear',
    eyebrow: 'Formal wear', eyebrowMr: 'फॉर्मल कपडे',
    title: 'Dress sharp for the big day.', titleMr: 'महत्त्वाच्या दिवसासाठी नीटनेटका पोशाख.',
    text: 'Shirts, trousers and suits for work and events.', textMr: 'कामासाठी आणि समारंभांसाठी शर्ट, ट्राउझर्स आणि सूट.',
    cta: 'See formal wear', ctaMr: 'फॉर्मल कपडे पाहा',
  },
]
