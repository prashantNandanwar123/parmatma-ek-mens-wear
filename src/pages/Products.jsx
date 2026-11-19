import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import WhatsAppButton from '../components/WhatsAppButton'
import useSeo from '../hooks/useSeo'
import useProductFilter from '../hooks/useProductFilter'
import { useLang } from '../i18n/LanguageContext'
import { products } from '../data/products'
import { categories } from '../data/categories'

export default function Products({ newOnly = false }) {
  const { t, tr } = useLang()
  const title = newOnly ? t('newTitle') : t('productsTitle')
  const text = newOnly ? t('newText') : t('productsText')
  useSeo(title, text)
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState(newOnly ? 'new' : 'featured')
  const [loading, setLoading] = useState(true)
  const category = params.get('category') || 'all'

  useEffect(() => { const id = setTimeout(() => setLoading(false), 250); return () => clearTimeout(id) }, [])
  const base = newOnly ? products.filter((p) => p.newArrival) : products
  const list = useProductFilter(base, { query, category, sort })
  const setCategory = (c) => (c === 'all' ? setParams({}) : setParams({ category: c }))

  return (
    <>
      <PageHeader title={title} text={text} />
      <section className="section !pt-10">
        <div className="container-x">
          <div className="mb-8 grid gap-3 md:grid-cols-3">
            <label className="relative">
              <span className="sr-only">{t('searchPh')}</span>
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/50" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('searchPh')} className="field !pl-10" />
            </label>
            <label>
              <span className="sr-only">{t('allCats')}</span>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="field">
                <option value="all">{t('allCats')}</option>
                {categories.map((c) => <option key={c.slug} value={c.slug}>{tr(c, 'name')}</option>)}
              </select>
            </label>
            <label>
              <span className="sr-only">{t('sortFeatured')}</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="field">
                <option value="featured">{t('sortFeatured')}</option>
                <option value="new">{t('sortNew')}</option>
                <option value="name">{t('sortName')}</option>
                <option value="price-low">{t('sortLow')}</option>
                <option value="price-high">{t('sortHigh')}</option>
              </select>
            </label>
          </div>
          {loading ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4" aria-busy="true">{Array.from({ length: 8 }).map((_, i) => <div key={i} className="aspect-[3/4] animate-pulse bg-ink/10" />)}</div>
          ) : list.length ? (
            <>
              <p className="mb-6 text-sm text-charcoal/70">{t('count', { n: list.length })}</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
            </>
          ) : (
            <div className="border border-ink/10 bg-white p-10 text-center">
              <p className="font-display text-2xl text-ink">{t('noMatch')}</p>
              <p className="mt-2 text-charcoal/80">{t('noMatchText')}</p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button className="btn-outline-dark" onClick={() => { setQuery(''); setParams({}) }}>{t('clear')}</button>
                <WhatsAppButton message={t('waAsk', { q: query || '…' })} label={t('askWa')} className="btn-dark" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
