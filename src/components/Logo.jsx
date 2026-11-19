import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { business } from '../config/business'

export default function Logo({ light = true }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${business.name} home`}>
      <img src={logo} alt={`${business.name} logo`} className="h-11 w-11 object-cover" />
      <span className="leading-tight">
        <span className={`block font-deva text-xl ${light ? 'text-white' : 'text-ink'}`}>{business.hindiName}</span>
        <span className={`block text-[11px] tracking-wide ${light ? 'text-gold' : 'text-gold-dark'}`}>{business.name}</span>
      </span>
    </Link>
  )
}
