import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'
import { useLang } from '../i18n/LanguageContext'

// Horizontal scroll-snap slider: swipe on mobile, arrows on desktop.
export default function ProductSlider({ items }) {
  const { t } = useLang()
  const ref = useRef(null)
  const by = (d) => ref.current?.scrollBy({ left: d * (ref.current.clientWidth * 0.8), behavior: 'smooth' })
  return (
    <div className="relative">
      <div ref={ref} className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 [&::-webkit-scrollbar]:hidden">
        {items.map((p) => (
          <div key={p.id} className="w-[62%] shrink-0 snap-start sm:w-[40%] md:w-[31%] lg:w-[23.5%]"><ProductCard product={p} /></div>
        ))}
      </div>
      <div className="mt-6 hidden justify-end gap-2 md:flex">
        <button onClick={() => by(-1)} aria-label={t('prev')} className="flex h-11 w-11 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-white"><ChevronLeft size={20} /></button>
        <button onClick={() => by(1)} aria-label={t('next')} className="flex h-11 w-11 items-center justify-center border border-ink text-ink transition-colors hover:bg-ink hover:text-white"><ChevronRight size={20} /></button>
      </div>
    </div>
  )
}
