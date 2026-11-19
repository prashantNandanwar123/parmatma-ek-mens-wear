import { Link } from 'react-router-dom'
import Img from './Img'
import { useLang } from '../i18n/LanguageContext'

export default function CategoryCard({ category, className = '', tall = false }) {
  const { tr } = useLang()
  return (
    <Link to={`/collections/${category.slug}`} className={`group relative block overflow-hidden bg-ink ${tall ? 'aspect-[4/5] md:aspect-auto md:h-full' : 'aspect-[4/5]'} ${className}`}>
      <Img src={category.image} alt={tr(category, 'name')} className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-2xl !text-white">{tr(category, 'name')}</h3>
        <p className="mt-1 text-sm text-white/80">{tr(category, 'blurb')}</p>
      </div>
    </Link>
  )
}
