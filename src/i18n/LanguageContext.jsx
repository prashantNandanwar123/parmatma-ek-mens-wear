import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { strings } from './strings'

const Ctx = createContext(null)
const KEY = 'pem-lang'

// Marathi is the default for first-time visitors (most customers are from Maharashtra).
// To default to English instead, change DEFAULT_LANG to 'en'.
const DEFAULT_LANG = 'en'

const initial = () => {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'en' || saved === 'mr') return saved
  } catch { /* storage unavailable */ }
  return DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initial)
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  const setLang = useCallback((l) => {
    setLangState(l)
    try { localStorage.setItem(KEY, l) } catch { /* ignore */ }
  }, [])

  const value = useMemo(() => {
    const t = (key, vars = {}) => {
      let s = strings[lang][key] ?? strings.en[key] ?? key
      Object.entries(vars).forEach(([k, v]) => { s = s.replaceAll(`{${k}}`, v) })
      return s
    }
    // tr(obj, 'name') → obj.nameMr in Marathi (if present), otherwise obj.name
    const tr = (obj, field) => (lang === 'mr' && obj?.[`${field}Mr`]) || obj?.[field]
    return { lang, setLang, t, tr }
  }, [lang, setLang])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
