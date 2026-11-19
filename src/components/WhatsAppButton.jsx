import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../config/business'
import { useLang } from '../i18n/LanguageContext'

// floating = fixed bottom-right icon; otherwise an inline button.
export default function WhatsAppButton({ floating = false, message, label, className = 'btn-gold' }) {
  const { t } = useLang()
  const text = message ?? t('waDefault')
  if (floating) {
    return (
      <a href={whatsappLink(text)} target="_blank" rel="noopener noreferrer" aria-label={t('chatWa')}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-7 sm:right-7">
        <MessageCircle size={26} />
      </a>
    )
  }
  return (
    <a href={whatsappLink(text)} target="_blank" rel="noopener noreferrer" className={className}>
      <MessageCircle size={18} /> {label ?? t('whatsapp')}
    </a>
  )
}
