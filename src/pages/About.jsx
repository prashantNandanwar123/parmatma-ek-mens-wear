import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import StoreLocation from '../components/StoreLocation'
import useSeo from '../hooks/useSeo'
import { useLang } from '../i18n/LanguageContext'
import { images } from '../config/images'

export default function About() {
  const { t } = useLang()
  useSeo(t('about'), t('aboutLead'))
  const values = [['val1', 'val1t'], ['val2', 'val2t'], ['val3', 'val3t']]
  return (
    <>
      <PageHeader title={t('aboutTitle')} text={t('aboutLead')} />
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal><Img src={images.about} alt="Clothing showroom interior" className="aspect-[4/3] w-full object-cover" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl">{t('aboutH')}</h2>
            <p className="mt-6 leading-relaxed text-charcoal/90">{t('aboutP1')}</p>
            <p className="mt-4 leading-relaxed text-charcoal/90">{t('aboutP2')}</p>
            {/* TODO (owner): add the real story of the shop – founder, years of service, brands – once confirmed. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/collections" className="btn-dark">{t('viewCollections')}</Link><Link to="/contact" className="btn-outline-dark">{t('planVisit')}</Link></div>
          </Reveal>
        </div>
      </section>
      <section className="section bg-ink">
        <div className="container-x">
          <Reveal><h2 className="max-w-xl text-4xl !text-white sm:text-5xl">{t('stand')}</h2></Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map(([a, b], i) => (
              <Reveal key={a} delay={i * 0.08} className="border-t border-saffron pt-6">
                <h3 className="font-sans text-xl font-semibold !text-white">{t(a)}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{t(b)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-x grid grid-cols-2 gap-4 md:grid-cols-3">
          <Img src={images.aboutSecondary} alt="Menswear displayed on racks" className="aspect-[4/5] w-full object-cover" />
          <Img src={images.formal} alt="Man in a tailored suit" className="aspect-[4/5] w-full object-cover" />
          <Img src={images.casual} alt="Casual menswear outfit" className="col-span-2 aspect-[4/3] w-full object-cover md:col-span-1 md:aspect-[4/5]" />
        </div>
      </section>
      <StoreLocation heading={false} />
    </>
  )
}
