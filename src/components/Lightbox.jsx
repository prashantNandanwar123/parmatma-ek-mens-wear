import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ items, index, onClose, onChange }) {
  const prev = () => onChange((index - 1 + items.length) % items.length)
  const next = () => onChange((index + 1) % items.length)
  useEffect(() => {
    const key = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', key)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = '' }
  })
  const item = items[index]
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
      <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 p-2 text-white"><X size={28} /></button>
      <button onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous image" className="absolute left-2 p-3 text-white sm:left-6"><ChevronLeft size={34} /></button>
      <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.alt} className="max-h-[80vh] w-auto max-w-full object-contain" />
        <figcaption className="mt-3 text-center text-sm text-white/70">{item.alt} · {index + 1}/{items.length}</figcaption>
      </figure>
      <button onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next image" className="absolute right-2 p-3 text-white sm:right-6"><ChevronRight size={34} /></button>
    </div>
  )
}
