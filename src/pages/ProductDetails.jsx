import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MessageCircle, ChevronRight } from 'lucide-react'
import Img from '../components/Img'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
import NotFound from './NotFound'
import useSeo from '../hooks/useSeo'
import { useLang } from '../i18n/LanguageContext'
import { getProduct, products, formatPrice } from '../data/products'
import { getCategory } from '../data/categories'
import { whatsappLink } from '../config/business'

function Detail({ product }) {
  const { t, tr, lang } = useLang()
  const cat = getCategory(product.category)
  const name = tr(product, 'name')
  const [img, setImg] = useState(0)
  const [size, setSize] = useState(null)
  const [color, setColor] = useState(product.colors[0]?.name)
  const [needSize, setNeedSize] = useState(false)
  const related = [...products.filter((p) => p.category === product.category && p.id !== product.id), ...products.filter((p) => p.category !== product.category && p.id !== product.id)].slice(0, 4)
  const message = t('waDetail', { name, size: size ? t('waSize', { v: size }) : '', colour: color ? t('waColour', { v: color }) : '' })

  return (
    <>
      <div className="container-x pb-6 pt-28 text-sm text-charcoal/70">
        <nav className="flex flex-wrap items-center gap-1" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-ink">{t('home')}</Link><ChevronRight size={14} />
          <Link to="/products" className="hover:text-ink">{t('productsTitle')}</Link><ChevronRight size={14} />
          <span className="text-ink">{name}</span>
        </nav>
      </div>
      <section className="container-x grid gap-10 pb-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="aspect-[4/5] overflow-hidden bg-ink/5"><Img src={product.images[img]} alt={`${name} – ${img + 1}`} eager className="h-full w-full object-cover" /></div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-3">
              {product.images.map((src, i) => (
                <button key={i} onClick={() => setImg(i)} aria-label={`${i + 1}`} className={`h-20 w-16 overflow-hidden border-2 ${i === img ? 'border-saffron' : 'border-transparent'}`}><Img src={src} alt="" className="h-full w-full object-cover" /></button>
              ))}
            </div>
          )}
        </div>
        <div>
          <Link to={`/collections/${product.category}`} className="text-sm font-medium text-saffron-dark hover:underline">{tr(cat, 'name')}</Link>
          <h1 className="mt-2 text-4xl sm:text-5xl">{name}</h1>
          <p className="mt-4 text-2xl font-semibold text-ink">{formatPrice(product.price, t)}</p>
          <p className="mt-6 max-w-lg leading-relaxed text-charcoal/90">{lang === 'mr' ? product.descriptionMr || t('descDefault') : product.description}</p>

          <fieldset className="mt-8">
            <legend className="mb-3 text-sm font-semibold">{t('size')} {needSize && !size && <span className="font-normal text-red-700"> – {t('chooseSize')}</span>}</legend>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button key={s} onClick={() => { setSize(s); setNeedSize(false) }} aria-pressed={size === s} className={`min-w-[3rem] border px-4 py-2.5 text-sm transition-colors ${size === s ? 'border-ink bg-ink text-white' : 'border-ink/30 hover:border-ink'}`}>{s}</button>
              ))}
            </div>
          </fieldset>
          <fieldset className="mt-6">
            <legend className="mb-3 text-sm font-semibold">{t('colour')}: <span className="font-normal">{color}</span></legend>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((c) => (
                <button key={c.name} onClick={() => setColor(c.name)} aria-label={c.name} aria-pressed={color === c.name} title={c.name}
                  className={`h-9 w-9 rounded-full border border-ink/25 ring-offset-2 ring-offset-cream ${color === c.name ? 'ring-2 ring-saffron' : ''}`} style={{ background: c.hex }} />
              ))}
            </div>
          </fieldset>
          <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer"
            onClick={(e) => { if (!size) { e.preventDefault(); setNeedSize(true) } }} className="btn-dark mt-10 w-full sm:w-auto">
            <MessageCircle size={18} /> {t('enquireWa')}
          </a>
          <p className="mt-3 text-sm text-charcoal/70">{t('waNote')}</p>
        </div>
      </section>
      <section className="section border-t border-ink/10 bg-white">
        <div className="container-x">
          <SectionHeading title={t('alsoLike')} />
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">{related.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </div>
      </section>
    </>
  )
}

export default function ProductDetails() {
  const { id } = useParams()
  const { t, tr } = useLang()
  const product = getProduct(id)
  useSeo(product ? tr(product, 'name') : undefined, product ? `${tr(product, 'name')} – Parmatma Ek Mens Wear, Kondha, Bhandara.` : undefined)
  if (!product) return <NotFound message={t('nfProduct')} />
  return <Detail key={product.id} product={product} />
}
