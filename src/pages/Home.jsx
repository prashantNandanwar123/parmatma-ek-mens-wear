import { Link } from 'react-router-dom'
import { MapPin, MessageCircle, Shirt, Store, ArrowUpRight } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import ProductSlider from '../components/ProductSlider'
import Reviews from '../components/Reviews'
import StoreLocation from '../components/StoreLocation'
import InstagramSection from '../components/InstagramSection'
import Reveal from '../components/Reveal'
import useSeo from '../hooks/useSeo'
import { useLang } from '../i18n/LanguageContext'
import { categories } from '../data/categories'
import { products } from '../data/products'

const occasions = [
  { k: 'occWedding', to: '/collections/formal-wear' },
  { k: 'occGanesh', to: '/collections/traditional-wear' },
  { k: 'occDiwali', to: '/collections/traditional-wear' },
  { k: 'occPadwa', to: '/collections/traditional-wear' },
  { k: 'occOffice', to: '/collections/shirts' },
  { k: 'occWinter', to: '/collections/jackets' },
]
const reasons = [
  { Icon: Store, k: 'why1' }, { Icon: MessageCircle, k: 'why2' }, { Icon: Shirt, k: 'why3' }, { Icon: MapPin, k: 'why4' },
]

export default function Home() {
  const { t, lang } = useLang()
  useSeo(
    lang === 'mr' ? 'कोंढा, भंडारा येथील पुरुषांचे कपडे' : "Men's Wear in Kondha, Bhandara",
    lang === 'mr' ? 'परमात्मा एक मेन्स वेअर – कोसरा, कोंढा (अकोट रोड), भंडारा येथील पुरुषांच्या कपड्यांचे दुकान. शर्ट, जीन्स, फॉर्मल आणि पारंपरिक पोशाख.' : "Parmatma Ek Mens Wear – men's clothing store in Kosra, Kondha (Akot Road), Bhandara. Shirts, denim, trousers, formal and traditional wear."
  )
  const feat = categories.slice(0, 5)
  const fresh = products.filter((p) => p.newArrival)
  const favs = products.filter((p) => p.favourite).slice(0, 4)

  return (
    <>
      <Hero />
      <div className="paithani bg-ink" aria-hidden="true" />

      <section className="section">
        <div className="container-x">
          <SectionHeading title={t('featuredTitle')} text={t('featuredText')} action={<Link to="/collections" className="btn-outline-dark shrink-0">{t('allCollections')}</Link>} />
          <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
            <Reveal className="md:col-span-2 md:row-span-2"><CategoryCard category={feat[0]} tall className="h-full" /></Reveal>
            {feat.slice(1).map((c, i) => <Reveal key={c.slug} delay={i * 0.06}><CategoryCard category={c} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading title={t('newTitle')} text={t('newText')} action={<Link to="/new-arrivals" className="btn-outline-dark shrink-0">{t('seeAllNew')}</Link>} />
          <ProductSlider items={fresh} />
        </div>
      </section>

      <section className="section bg-ink">
        <div className="container-x">
          <SectionHeading light title={t('occasionTitle')} text={t('occasionText')} />
          <ul className="grid border-t border-white/20 md:grid-cols-2 md:gap-x-16">
            {occasions.map((o) => (
              <li key={o.k} className="border-b border-white/20">
                <Link to={o.to} className="group flex items-center justify-between gap-4 py-6">
                  <span>
                    <span className="block font-display text-3xl text-white transition-colors group-hover:text-saffron-light">{t(o.k)}</span>
                    <span className="mt-1 block text-sm text-white/70">{t(`${o.k}T`)}</span>
                  </span>
                  <ArrowUpRight className="shrink-0 text-saffron-light transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading title={t('favTitle')} text={t('favText')} action={<Link to="/products" className="btn-outline-dark shrink-0">{t('browse')}</Link>} />
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">{favs.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 className="text-4xl sm:text-5xl">{t('whyTitle')}</h2>
            <p className="mt-5 max-w-sm text-charcoal/80">{t('whyText')}</p>
            <div className="paithani mt-8 w-40" aria-hidden="true" />
          </Reveal>
          <div className="divide-y divide-ink/15 lg:col-span-3">
            {reasons.map(({ Icon, k }, i) => (
              <Reveal key={k} delay={i * 0.06} className="flex gap-5 py-6 first:pt-0">
                <Icon className="mt-1 shrink-0 text-saffron-dark" size={24} />
                <div><h3 className="font-sans text-lg font-semibold !text-ink">{t(k)}</h3><p className="mt-1 text-charcoal/80">{t(`${k}t`)}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <StoreLocation />
      <InstagramSection />
    </>
  )
}
