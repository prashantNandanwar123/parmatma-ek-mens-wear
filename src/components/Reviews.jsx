import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { reviews } from '../data/reviews'
import { business, mapsViewUrl } from '../config/business'
import { useLang } from '../i18n/LanguageContext'

// Shows ONLY genuine reviews from src/data/reviews.js. No reviews → honest empty state.
export default function Reviews() {
  const { t } = useLang()
  const reviewUrl = business.googleReviewUrl || mapsViewUrl()
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading title={t('reviewsTitle')} text={t('reviewsText')} />
        {reviews.length === 0 ? (
          <Reveal className="border border-ink/10 bg-cream p-10 text-center">
            <p className="mx-auto max-w-md font-display text-2xl text-ink">{t('reviewEmptyTitle')}</p>
            <p className="mx-auto mt-3 max-w-md text-charcoal/80">{t('reviewEmptyText')}</p>
            <a href={reviewUrl} target="_blank" rel="noopener noreferrer" className="btn-dark mt-6">{t('reviewBtn')}</a>
          </Reveal>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 0.08} className="border border-ink/10 bg-cream p-7">
                <div className="flex gap-0.5 text-saffron" aria-label={`${r.rating}/5`}>{Array.from({ length: r.rating }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}</div>
                <p className="mt-4 leading-relaxed">“{r.text}”</p>
                <p className="mt-5 text-sm font-semibold">{r.name}</p>
                {r.source && <p className="text-xs text-charcoal/70">{t('via')} {r.source}</p>}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
