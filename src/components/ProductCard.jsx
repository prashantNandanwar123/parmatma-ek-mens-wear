import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Img from './Img'
import { formatPrice } from '../data/products'
import { getCategory } from '../data/categories'
import { whatsappLink } from '../config/business'
import { useLang } from '../i18n/LanguageContext'

export default function ProductCard({ product }) {
  const { t, tr } = useLang()
  const cat = getCategory(product.category)
  const name = tr(product, 'name')
  return (
    <article className="group flex flex-col">
      <Link to={`/products/${product.id}`} className="relative block aspect-[3/4] overflow-hidden bg-ink/5">
        <Img src={product.images[0]} alt={name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        {product.newArrival && <span className="absolute left-3 top-3 bg-saffron px-3 py-1 text-xs font-semibold text-ink">{t('newTag')}</span>}
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-xs text-charcoal/70">{tr(cat, 'name')}</p>
        <h3 className="mt-1 font-display text-lg leading-snug"><Link to={`/products/${product.id}`} className="hover:text-saffron-dark">{name}</Link></h3>
        <p className="mt-1 text-sm font-semibold text-ink">{formatPrice(product.price, t)}</p>
        <p className="mt-2 text-xs text-charcoal/70">{t('sizes')}: {product.sizes.join(', ')}</p>
        <div className="mt-2 flex gap-1.5" aria-label={product.colors.map((c) => c.name).join(', ')}>
          {product.colors.map((c) => <span key={c.name} title={c.name} className="h-4 w-4 rounded-full border border-ink/20" style={{ background: c.hex }} />)}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link to={`/products/${product.id}`} className="btn-outline-dark !px-2 !py-2.5 !text-xs">{t('viewDetails')}</Link>
          <a href={whatsappLink(t('waProduct', { name }))} target="_blank" rel="noopener noreferrer" className="btn-dark !px-2 !py-2.5 !text-xs"><MessageCircle size={14} /> {t('enquire')}</a>
        </div>
      </div>
    </article>
  )
}
