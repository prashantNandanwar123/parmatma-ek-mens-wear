import { useState } from 'react'
import { business } from '../config/business'

// Image with lazy loading and a branded fallback if the URL fails.
export default function Img({ src, alt, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-ink ${className}`}>
        <span className="font-deva text-2xl text-gold/70">{business.hindiName}</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
