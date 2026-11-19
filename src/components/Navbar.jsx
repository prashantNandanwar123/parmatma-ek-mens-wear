import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Languages } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import WhatsAppButton from './WhatsAppButton'
import { useLang } from '../i18n/LanguageContext'

const links = [
  { to: '/', key: 'home', end: true },
  { to: '/collections', key: 'collections' },
  { to: '/new-arrivals', key: 'newArrivals' },
  { to: '/about', key: 'about' },
  { to: '/gallery', key: 'gallery' },
  { to: '/contact', key: 'contact' },
]

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const toggle = (
    <button onClick={() => setLang(lang === 'mr' ? 'en' : 'mr')} aria-label={lang === 'mr' ? 'Switch to English' : 'मराठीत पहा'}
      className="flex items-center gap-1.5 border border-white/40 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-saffron hover:text-saffron-light">
      <Languages size={16} /> {t('switchLang')}
    </button>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? 'bg-ink shadow-lg' : 'bg-gradient-to-b from-ink/80 to-transparent'}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => `border-b pb-1 text-sm transition-colors ${isActive ? 'border-saffron text-saffron-light' : 'border-transparent text-white/90 hover:text-white'}`}>
              {t(l.key)}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          {toggle}
          <div className="hidden lg:block"><WhatsAppButton label={t('whatsappUs')} className="btn-gold !py-2.5" /></div>
          <button className="p-2 text-white lg:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-ink px-5 pb-10 lg:hidden" aria-label="Mobile">
            <ul className="divide-y divide-white/10 border-t border-white/10">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.end} className={({ isActive }) => `block py-4 font-display text-2xl ${isActive ? 'text-saffron-light' : 'text-white'}`}>{t(l.key)}</NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-8"><WhatsAppButton label={t('chatWa')} className="btn-gold w-full" /></div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
