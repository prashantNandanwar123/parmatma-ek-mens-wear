import { motion } from 'framer-motion'

export default function PageHeader({ title, text }) {
  return (
    <section className="bg-ink pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="container-x">
        <motion.h1 key={title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl text-5xl !text-white sm:text-6xl">{title}</motion.h1>
        {text && <p className="mt-5 max-w-xl text-lg text-white/75">{text}</p>}
        <div className="paithani mt-8 w-40" aria-hidden="true" />
      </div>
    </section>
  )
}
