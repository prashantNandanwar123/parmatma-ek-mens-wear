import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import Img from '../components/Img'
import WhatsAppButton from '../components/WhatsAppButton'
import NotFound from './NotFound'
import useSeo from '../hooks/useSeo'
import { useLang } from '../i18n/LanguageContext'
import { getCategory, categories } from '../data/categories'
import { products } from '../data/products'

export default function CollectionDetail() {
  const { slug } = useParams()
  const { t, tr } = useLang()
  const cat = getCategory(slug)
  useSeo(cat ? tr(cat, 'name') : undefined, cat ? `${tr(cat, 'name')} – Parmatma Ek Mens Wear, Kondha, Bhandara. ${tr(cat, 'blurb')}` : undefined)
  if (!cat) return <NotFound />
  const items = products.filter((p) => p.category === slug)
  const name = tr(cat, 'name')

  return (
    <>
      <PageHeader title={name} text={tr(cat, 'blurb')} />
      <div className="container-x pt-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <Link key={c.slug} to={`/collections/${c.slug}`} className={`shrink-0 border px-4 py-2 text-sm ${c.slug === slug ? 'border-ink bg-ink text-white' : 'border-ink/25 hover:border-ink'}`}>{tr(c, 'name')}</Link>
          ))}
        </div>
      </div>
      <section className="section !pt-10">
        <div className="container-x grid gap-10 lg:grid-cols-4">
          <div className="hidden lg:block"><div className="sticky top-28"><Img src={cat.image} alt={name} className="aspect-[3/4] w-full object-cover" /></div></div>
          <div className="lg:col-span-3">
            {items.length ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 xl:grid-cols-3">{items.map((p) => <ProductCard key={p.id} product={p} />)}</div>
            ) : (
              <div className="border border-ink/10 bg-white p-10 text-center">
                <p className="font-display text-2xl text-ink">{t('emptyCat')}</p>
                <p className="mt-2 text-charcoal/80">{t('emptyCatText', { c: name })}</p>
                <div className="mt-6"><WhatsAppButton message={t('waCat', { c: name })} label={t('askWa')} className="btn-dark" /></div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
