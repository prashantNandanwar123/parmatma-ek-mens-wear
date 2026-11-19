import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Img from '../components/Img'
import Lightbox from '../components/Lightbox'
import useSeo from '../hooks/useSeo'
import { useLang } from '../i18n/LanguageContext'
import { galleryImages } from '../config/images'

const tags = ['All', ...Array.from(new Set(galleryImages.map((g) => g.tag)))]

export default function Gallery() {
  const { t } = useLang()
  useSeo(t('galleryTitle'), t('galleryText'))
  const [tag, setTag] = useState('All')
  const [open, setOpen] = useState(null)
  const items = galleryImages.filter((g) => tag === 'All' || g.tag === tag)
  return (
    <>
      <PageHeader title={t('galleryTitle')} text={t('galleryText')} />
      <section className="section !pt-10">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((g) => (
              <button key={g} onClick={() => setTag(g)} aria-pressed={tag === g} className={`border px-4 py-2 text-sm ${tag === g ? 'border-ink bg-ink text-white' : 'border-ink/25 hover:border-ink'}`}>{t(`tag_${g}`)}</button>
            ))}
          </div>
          <div className="columns-2 gap-4 md:columns-3">
            {items.map((g, i) => (
              <button key={g.src + i} onClick={() => setOpen(i)} className="group mb-4 block w-full overflow-hidden bg-ink/5" aria-label={g.alt}>
                <Img src={g.src} alt={g.alt} className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'}`} />
              </button>
            ))}
          </div>
        </div>
      </section>
      {open !== null && <Lightbox items={items} index={open} onClose={() => setOpen(null)} onChange={setOpen} />}
    </>
  )
}
