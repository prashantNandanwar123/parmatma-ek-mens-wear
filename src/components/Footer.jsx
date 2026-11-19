import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { business, fullAddress, directionsUrl } from '../config/business'
import { categories } from '../data/categories'
import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t, tr } = useLang()
  const social = [
    { href: business.social.instagram, Icon: Instagram, label: 'Instagram' },
    { href: business.social.facebook, Icon: Facebook, label: 'Facebook' },
    { href: business.social.youtube, Icon: Youtube, label: 'YouTube' },
  ].filter((s) => s.href)

  return (
    <footer className="bg-ink text-white/75">
      <div className="paithani" aria-hidden="true" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{t('footerAbout')}</p>
          <div className="mt-6 flex gap-3">
            {social.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center border border-white/25 transition-colors hover:border-saffron hover:text-saffron-light"><Icon size={18} /></a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-sans text-sm font-semibold !text-white">{t('shop')}</h3>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => <li key={c.slug}><Link className="hover:text-saffron-light" to={`/collections/${c.slug}`}>{tr(c, 'name')}</Link></li>)}
            <li><Link className="hover:text-saffron-light" to="/products">{t('allProducts')}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-sans text-sm font-semibold !text-white">{t('visitUs')}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-saffron-light" /> {fullAddress()}</li>
            {business.phone && <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-saffron-light" /><a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover:text-saffron-light">{business.phone}</a></li>}
            <li><a href={directionsUrl()} target="_blank" rel="noopener noreferrer" className="text-saffron-light hover:underline">{t('directions')}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">© {new Date().getFullYear()} {business.name}. {t('rights')}</div>
    </footer>
  )
}
