import { Instagram } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Img from './Img'
import { business } from '../config/business'
import { galleryImages } from '../config/images'
import { useLang } from '../i18n/LanguageContext'

export default function InstagramSection() {
  const { t } = useLang()
  return (
    <section className="section bg-ink">
      <div className="container-x">
        <SectionHeading light title={t('igTitle')} text={t('igText', { h: business.social.instagramHandle })}
          action={<a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0"><Instagram size={18} /> {t('follow')}</a>} />
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6">
          {galleryImages.slice(2, 8).map((g, i) => (
            <a key={i} href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group relative block aspect-square overflow-hidden">
              <Img src={g.src} alt={g.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100"><Instagram className="text-white" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
