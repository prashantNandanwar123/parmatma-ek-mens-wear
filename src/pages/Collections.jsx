import PageHeader from '../components/PageHeader'
import CategoryCard from '../components/CategoryCard'
import Reveal from '../components/Reveal'
import useSeo from '../hooks/useSeo'
import { useLang } from '../i18n/LanguageContext'
import { categories } from '../data/categories'

export default function Collections() {
  const { t } = useLang()
  useSeo(t('collectionsTitle'), t('collectionsText'))
  return (
    <>
      <PageHeader title={t('collectionsTitle')} text={t('collectionsText')} />
      <section className="section">
        <div className="container-x grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((c, i) => <Reveal key={c.slug} delay={(i % 3) * 0.06}><CategoryCard category={c} /></Reveal>)}
        </div>
      </section>
    </>
  )
}
