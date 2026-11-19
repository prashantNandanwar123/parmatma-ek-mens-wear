import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Img from './Img'
import { business } from '../config/business'
import { slides } from '../data/slides'
import { useLang } from '../i18n/LanguageContext'

// Auto-playing hero slider: arrows, dots, swipe; pauses on hover/focus; no autoplay with reduced motion.
export default function Hero() {
  const { t, tr } = useLang()
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = slides.length
  const go = useCallback((d) => setI((x) => (x + d + n) % n), [n])

  useEffect(() => {
    if (paused || reduce) return
    const id = setInterval(() => go(1), 6500)
    return () => clearInterval(id)
  }, [paused, reduce, go])

  const s = slides[i]
  const eyebrow = s.first ? t('greet') : tr(s, 'eyebrow')
  const title = s.first ? t('tagline') : tr(s, 'title')
  const text = s.first ? t('subtag') : tr(s, 'text')
  const cta1 = s.first ? t('shopCollection') : tr(s, 'cta')
  const cta2 = s.first ? t('exploreStore') : null

  return (
    <section
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink"
      aria-roledescription="carousel" aria-label="Featured"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={i} className="absolute inset-0 touch-pan-y"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }}
          drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.12}
          onDragEnd={(_, info) => { if (info.offset.x < -60) go(1); else if (info.offset.x > 60) go(-1) }}
        >
          <Img src={s.image} alt={s.alt} eager={i === 0} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <span aria-hidden="true" className="pointer-events-none absolute -bottom-6 right-[-2%] select-none font-deva text-[22vw] leading-none text-white/[0.07] sm:text-[16vw]">
        {business.hindiName}
      </span>

      <div className="pointer-events-none container-x relative pb-28 pt-40 sm:pb-32">
        <motion.div key={`t${i}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} aria-live="polite">
          <p className="mb-5 text-sm font-medium text-gold-light">{eyebrow}</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.08] !text-white sm:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-6 max-w-md text-lg text-white/85">{text}</p>
          <div className="pointer-events-auto mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to={s.to} className="btn-gold">{cta1}</Link>
            {cta2 && <Link to={s.to2} className="btn-outline-light">{cta2}</Link>}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-7 z-10">
        <div className="container-x flex items-center justify-between">
          <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
            {slides.map((_, k) => (
              <button key={k} role="tab" aria-selected={k === i} aria-label={t('slideOf', { i: k + 1, n })} onClick={() => setI(k)}
                className={`h-1.5 transition-all duration-300 ${k === i ? 'w-10 bg-saffron' : 'w-4 bg-white/50 hover:bg-white'}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => go(-1)} aria-label={t('prev')} className="flex h-11 w-11 items-center justify-center border border-white/60 text-white transition-colors hover:bg-white hover:text-ink"><ChevronLeft size={20} /></button>
            <button onClick={() => go(1)} aria-label={t('next')} className="flex h-11 w-11 items-center justify-center border border-white/60 text-white transition-colors hover:bg-white hover:text-ink"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
