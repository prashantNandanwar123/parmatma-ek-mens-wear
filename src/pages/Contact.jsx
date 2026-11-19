import { useState } from 'react'
import toast from 'react-hot-toast'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import WhatsAppButton from '../components/WhatsAppButton'
import useSeo from '../hooks/useSeo'
import { useLang } from '../i18n/LanguageContext'
import { business, fullAddress, mapsEmbedUrl, directionsUrl, whatsappLink, hoursConfigured } from '../config/business'

const initial = { name: '', phone: '', message: '' }

const validate = (v, t) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = t('errName')
  if (!/^(\+?91)?[6-9]\d{9}$/.test(v.phone.replace(/[\s-]/g, ''))) e.phone = t('errPhone')
  if (v.message.trim().length < 10) e.message = t('errMsg')
  return e
}

export default function Contact() {
  const { t } = useLang()
  useSeo(t('contactTitle'), t('contactText'))
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})

  const onChange = (e) => { setValues({ ...values, [e.target.name]: e.target.value }); if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined }) }
  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate(values, t)
    setErrors(errs)
    if (Object.keys(errs).length) { toast.error(t('fixFields')); return }
    const text = `${t('waForm', { name: values.name.trim(), phone: values.phone.trim() })}\n${values.message.trim()}`
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
    toast.success(t('opening'))
    setValues(initial)
  }

  return (
    <>
      <PageHeader title={t('contactTitle')} text={t('contactText')} />
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">{t('storeDetails')}</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4"><MapPin className="mt-1 shrink-0 text-saffron-dark" /><div><p className="font-semibold">{t('address')}</p><p className="text-charcoal/80">{fullAddress()}</p></div></li>
              <li className="flex gap-4"><Phone className="mt-1 shrink-0 text-saffron-dark" /><div><p className="font-semibold">{t('phone')}</p>
                {business.phone ? <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="text-charcoal/80 hover:text-saffron-dark">{business.phone}</a> : <p className="text-charcoal/80">{t('phoneSoon')}</p>}</div></li>
              <li className="flex gap-4"><Clock className="mt-1 shrink-0 text-saffron-dark" /><div><p className="font-semibold">{t('hours')}</p>
                {hoursConfigured() ? (
                  <ul className="text-charcoal/80">{business.hours.map((h) => <li key={h.day} className="flex justify-between gap-8"><span>{h.day}</span><span>{h.open && h.close ? `${h.open} – ${h.close}` : t('closed')}</span></li>)}</ul>
                ) : <p className="text-charcoal/80">{t('timingsTbc')}</p>}</div></li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton label={t('chatWa')} className="btn-dark" />
              <a href={directionsUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">{t('directions')}</a>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="space-y-5 border border-ink/10 bg-white p-6 sm:p-8">
            <h2 className="text-3xl">{t('sendEnquiry')}</h2>
            <p className="text-sm text-charcoal/70">{t('formNote')}</p>
            {[
              { name: 'name', label: t('yourName'), type: 'text', auto: 'name' },
              { name: 'phone', label: t('mobile'), type: 'tel', auto: 'tel' },
            ].map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="mb-1.5 block text-sm font-semibold">{f.label}</label>
                <input id={f.name} name={f.name} type={f.type} autoComplete={f.auto} value={values[f.name]} onChange={onChange} className="field" aria-invalid={!!errors[f.name]} aria-describedby={errors[f.name] ? `${f.name}-err` : undefined} />
                {errors[f.name] && <p id={`${f.name}-err`} className="mt-1 text-sm text-red-700">{errors[f.name]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">{t('yourMessage')}</label>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} className="field" placeholder={t('msgPh')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
              {errors.message && <p id="message-err" className="mt-1 text-sm text-red-700">{errors.message}</p>}
            </div>
            <button type="submit" className="btn-gold w-full"><MessageCircle size={18} /> {t('sendWa')}</button>
          </form>
        </div>
      </section>
      <section className="bg-ink/5">
        <iframe title="Parmatma Ek Mens Wear on Google Maps" src={mapsEmbedUrl()} className="block h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </section>
    </>
  )
}
