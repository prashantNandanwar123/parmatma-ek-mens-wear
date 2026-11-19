import { MapPin, Clock, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { business, fullAddress, mapsEmbedUrl, directionsUrl, hoursConfigured } from '../config/business'
import { useLang } from '../i18n/LanguageContext'

export default function StoreLocation({ heading = true }) {
  const { t } = useLang()
  return (
    <section className="section bg-cream">
      <div className="container-x">
        {heading && <SectionHeading title={t('visitTitle')} text={t('visitText')} />}
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="space-y-6 lg:col-span-2">
            <div className="flex gap-3"><MapPin className="mt-1 shrink-0 text-saffron-dark" size={20} /><p>{fullAddress()}</p></div>
            <div className="flex gap-3">
              <Clock className="mt-1 shrink-0 text-saffron-dark" size={20} />
              {hoursConfigured() ? (
                <ul className="text-sm">{business.hours.map((h) => <li key={h.day}>{h.day}: {h.open && h.close ? `${h.open} – ${h.close}` : t('closed')}</li>)}</ul>
              ) : <p>{t('timingsTbc')}</p>}
            </div>
            {business.phone && <div className="flex gap-3"><Phone className="mt-1 shrink-0 text-saffron-dark" size={20} /><a href={`tel:${business.phone.replace(/\s/g, '')}`}>{business.phone}</a></div>}
            <a href={directionsUrl()} target="_blank" rel="noopener noreferrer" className="btn-dark">{t('directions')}</a>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <iframe title="Google Maps" src={mapsEmbedUrl()} className="h-[360px] w-full border-0 bg-ink/5 sm:h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
