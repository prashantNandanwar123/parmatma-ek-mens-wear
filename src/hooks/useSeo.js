import { useEffect } from 'react'

const setMeta = (selector, attr, key, value) => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

export default function useSeo(title, description) {
  useEffect(() => {
    const full = title ? `${title} | Parmatma Ek Mens Wear` : "Parmatma Ek Mens Wear | Men's Wear in Kondha, Bhandara"
    document.title = full
    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description)
      setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    }
    setMeta('meta[property="og:title"]', 'property', 'og:title', full)
  }, [title, description])
}
