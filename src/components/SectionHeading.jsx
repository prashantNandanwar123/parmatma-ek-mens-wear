import Reveal from './Reveal'

export default function SectionHeading({ title, text, align = 'left', light = false, action }) {
  return (
    <Reveal className={`mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${align === 'center' ? 'text-center sm:flex-col sm:items-center' : ''}`}>
      <div className="max-w-xl">
        <h2 className={`text-4xl leading-tight sm:text-5xl ${light ? '!text-white' : ''}`}>{title}</h2>
        {text && <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-charcoal/70'}`}>{text}</p>}
      </div>
      {action}
    </Reveal>
  )
}
