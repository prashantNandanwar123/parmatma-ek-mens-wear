import { Link } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import { useLang } from '../i18n/LanguageContext'

export default function NotFound({ message }) {
  const { t } = useLang()
  useSeo(t('nfTitle'))
  return (
    <section className="container-x pb-24 pt-44 text-center">
      <h1 className="text-5xl">{t('nfTitle')}</h1>
      <p className="mt-4 text-charcoal/80">{message ?? t('nfText')}</p>
      <div className="mt-8 flex justify-center gap-3"><Link to="/" className="btn-dark">{t('goHome')}</Link><Link to="/products" className="btn-outline-dark">{t('browseProducts')}</Link></div>
    </section>
  )
}
