import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiStar, FiArrowRight, FiFilter } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Ahmed Raza',
    university: 'University of Hertfordshire',
    country: 'United Kingdom',
    flag: '🇬🇧',
    program: 'BSc Computer Science',
    year: '2023',
    rating: 5,
    quote: 'Dreamway made my UK dream a reality. From the very first consultation to the day I landed in London, they were with me every step. The visa process felt overwhelming at first but my counselor made it feel effortless. I cannot thank them enough!',
    initial: 'A',
    color: '#23AAA6',
    size: 'large',
  },
  {
    name: 'Fatima Malik',
    university: 'Seneca College',
    country: 'Canada',
    flag: '🇨🇦',
    program: 'Business Administration',
    year: '2023',
    rating: 5,
    quote: 'Best decision of my life. The team was always available, answered every single question patiently, and my visa was approved in record time.',
    initial: 'F',
    color: '#265D96',
    size: 'small',
  },
  {
    name: 'Usman Tariq',
    university: 'University of Malaya',
    country: 'Malaysia',
    flag: '🇲🇾',
    program: 'MBA',
    year: '2022',
    rating: 5,
    quote: 'Affordable, reliable, and incredibly professional. They helped me find a program that fit both my academic profile and my budget. The process was smooth from day one and I felt supported throughout.',
    initial: 'U',
    color: '#23AAA6',
    size: 'medium',
  },
  {
    name: 'Sara Khan',
    university: 'University of Melbourne',
    country: 'Australia',
    flag: '🇦🇺',
    program: 'MSc Data Science',
    year: '2023',
    rating: 5,
    quote: 'My counselor at Dreamway was exceptional. She knew everything about Australian universities and guided me to the perfect program.',
    initial: 'S',
    color: '#265D96',
    size: 'small',
  },
  {
    name: 'Bilal Hussain',
    university: 'Istanbul University',
    country: 'Turkey',
    flag: '🇹🇷',
    program: 'Medicine (MBBS)',
    year: '2022',
    rating: 5,
    quote: 'Got a full Türkiye Scholarship thanks to Dreamway. Their knowledge of Turkish universities is exceptional — they knew exactly which programs I was eligible for and the scholarship application was handled perfectly. Truly grateful for their support.',
    initial: 'B',
    color: '#23AAA6',
    size: 'large',
  },
  {
    name: 'Zara Ahmed',
    university: 'University of Latvia',
    country: 'Latvia',
    flag: '🇱🇻',
    program: 'BSc Business & Finance',
    year: '2023',
    rating: 5,
    quote: 'I never thought studying in Europe was possible for me. Dreamway showed me a path I didn\'t know existed.',
    initial: 'Z',
    color: '#265D96',
    size: 'small',
  },
  {
    name: 'Hassan Ali',
    university: 'University of Auckland',
    country: 'New Zealand',
    flag: '🇳🇿',
    program: 'MSc Environmental Science',
    year: '2023',
    rating: 5,
    quote: 'The entire team at Dreamway is incredibly knowledgeable. They helped me with everything — shortlisting universities, writing my SOP, visa documents, and even pre-departure preparation. New Zealand is beautiful and I\'m living my best life here!',
    initial: 'H',
    color: '#23AAA6',
    size: 'medium',
  },
  {
    name: 'Maryam Iqbal',
    university: 'Vilnius University',
    country: 'Lithuania',
    flag: '🇱🇹',
    program: 'LLB Law',
    year: '2022',
    rating: 5,
    quote: 'An EU degree at such affordable cost — I didn\'t believe it was real until Dreamway walked me through everything. Highly recommend!',
    initial: 'M',
    color: '#265D96',
    size: 'small',
  },
  {
    name: 'Faisal Mahmood',
    university: 'University of Cyprus',
    country: 'Cyprus',
    flag: '🇨🇾',
    program: 'BBA Marketing',
    year: '2023',
    rating: 5,
    quote: 'Cyprus was not even on my radar until my Dreamway counselor suggested it. Now I have an EU degree, I\'ve traveled across Europe, and I have job offers lined up. The best advice I ever received was to trust Dreamway.',
    initial: 'F',
    color: '#23AAA6',
    size: 'large',
  },
  {
    name: 'Nadia Saleem',
    university: 'Humber College',
    country: 'Canada',
    flag: '🇨🇦',
    program: 'Diploma in IT',
    year: '2022',
    rating: 5,
    quote: 'Professional, fast, and genuinely caring. They treated my application like it was their own.',
    initial: 'N',
    color: '#265D96',
    size: 'small',
  },
  {
    name: 'Omar Farooq',
    university: 'Technical University of Munich',
    country: 'Germany',
    flag: '🇩🇪',
    program: 'MSc Mechanical Engineering',
    year: '2023',
    rating: 5,
    quote: 'Getting into TUM felt impossible but Dreamway believed in my profile when I didn\'t. They helped me craft the perfect application, guided me through the APS process, and I got my offer letter within months. Zero tuition fees and world-class education — dream come true.',
    initial: 'O',
    color: '#23AAA6',
    size: 'large',
  },
  {
    name: 'Aisha Baig',
    university: 'University of Debrecen',
    country: 'Hungary',
    flag: '🇭🇺',
    program: 'MBBS Medicine',
    year: '2022',
    rating: 5,
    quote: 'Dreamway secured my Stipendium Hungaricum scholarship. I am now studying medicine in Europe — something I never imagined possible.',
    initial: 'A',
    color: '#265D96',
    size: 'small',
  },
]

const countries = ['All', 'United Kingdom', 'Canada', 'Australia', 'Malaysia', 'Turkey', 'Germany', 'Cyprus', 'Latvia', 'Lithuania', 'Hungary', 'New Zealand']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' },
  }),
}

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[...Array(rating)].map((_, i) => (
        <FiStar key={i} size={14} fill="#C97E5E" color="#C97E5E" />
      ))}
    </div>
  )
}

function TestimonialCard({ t, index }) {
  const isLarge = t.size === 'large'
  const isMedium = t.size === 'medium'

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: '0 24px 56px rgba(35,170,166,0.13)' }}
      style={{
        background: 'white',
        borderRadius: '20px',
        padding: isLarge ? '36px' : '28px',
        border: '1px solid #f3f4f6',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        breakInside: 'avoid',
        marginBottom: '20px',
      }}
    >
      {/* Quote mark */}
      <div style={{
        fontSize: isLarge ? '52px' : '40px',
        lineHeight: '1',
        color: t.color,
        opacity: 0.12,
        fontFamily: 'Georgia, serif',
        marginBottom: '-8px',
        marginTop: '-6px',
      }}>
        "
      </div>

      {/* Stars */}
      <StarRating rating={t.rating} />

      {/* Quote */}
      <p style={{
        fontSize: isLarge ? '16px' : isMedium ? '15px' : '14px',
        color: '#374151',
        lineHeight: '1.8',
        fontStyle: 'italic',
      }}>
        "{t.quote}"
      </p>

      {/* Country + Program tags */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '11px', fontWeight: '600', padding: '4px 10px',
          borderRadius: '100px', background: 'rgba(35,170,166,0.07)', color: '#23AAA6',
        }}>
          {t.flag} {t.country}
        </span>
        <span style={{
          fontSize: '11px', fontWeight: '600', padding: '4px 10px',
          borderRadius: '100px', background: '#f3f4f6', color: '#6b7280',
        }}>
          {t.program}
        </span>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: '#f3f4f6' }} />

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
          background: `linear-gradient(135deg, ${t.color}, ${t.color === '#23AAA6' ? '#265D96' : '#23AAA6'})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: '16px', fontWeight: '700',
        }}>
          {t.initial}
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: '700', color: '#111827' }}>{t.name}</p>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '1px' }}>{t.university}</p>
          <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '1px' }}>Class of {t.year}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [activeCountry, setActiveCountry] = useState('All')

  const filtered = activeCountry === 'All'
    ? testimonials
    : testimonials.filter(t => t.country === activeCountry)

  // Split into 3 columns for masonry
  const col1 = filtered.filter((_, i) => i % 3 === 0)
  const col2 = filtered.filter((_, i) => i % 3 === 1)
  const col3 = filtered.filter((_, i) => i % 3 === 2)

  return (
    <main style={{ overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: '140px', paddingBottom: '80px',
        background: 'linear-gradient(160deg, #f0fafa 0%, #eef4fb 60%, #f9fafb 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(35,170,166,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(38,93,150,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(35,170,166,0.1)', border: '1px solid rgba(35,170,166,0.2)', borderRadius: '100px', padding: '6px 18px', marginBottom: '24px' }}>
              <FiStar size={13} fill="#C97E5E" color="#C97E5E" />
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6' }}>2,500+ Success Stories</span>
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontFamily: "'Fraunces', serif", fontWeight: '600', color: '#111827', lineHeight: '1.15', marginBottom: '18px' }}>
              Real Students,<br />
              <span style={{ color: '#23AAA6' }}>Real Results.</span>
            </h1>

            <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: '1.8', maxWidth: '520px', margin: '0 auto 40px' }}>
              Thousands of Pakistani students have trusted Dreamway Education to guide them to their dream universities. Here are their stories.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
              {[
                { value: '2,500+', label: 'Students Placed' },
                { value: '98%', label: 'Visa Success Rate' },
                { value: '15+', label: 'Countries' },
                { value: '4.9/5', label: 'Average Rating' },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '30px', fontWeight: '800', color: '#111827', lineHeight: '1' }}>{s.value}</p>
                  <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '500', marginTop: '4px' }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER ── */}
      <section style={{ padding: '48px 24px 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#9ca3af', marginRight: '4px' }}>
              <FiFilter size={14} />
              <span style={{ fontSize: '13px', fontWeight: '600' }}>Filter:</span>
            </div>
            {countries.map(c => (
              <button
                key={c}
                onClick={() => setActiveCountry(c)}
                style={{
                  padding: '7px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: '600',
                  border: '1.5px solid', cursor: 'pointer', transition: 'all 0.2s ease',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  borderColor: activeCountry === c ? '#23AAA6' : '#e5e7eb',
                  background: activeCountry === c ? '#23AAA6' : 'white',
                  color: activeCountry === c ? 'white' : '#6b7280',
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASONRY GRID ── */}
      <section style={{ padding: '40px 24px 100px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: '48px', marginBottom: '12px' }}>💬</p>
              <p style={{ fontSize: '17px', fontWeight: '600', color: '#374151' }}>No testimonials for this country yet</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'start' }}>
              {/* Column 1 */}
              <div>
                {col1.map((t, i) => (
                  <TestimonialCard key={t.name} t={t} index={i * 3} />
                ))}
              </div>
              {/* Column 2 — offset top */}
              <div style={{ marginTop: '40px' }}>
                {col2.map((t, i) => (
                  <TestimonialCard key={t.name} t={t} index={i * 3 + 1} />
                ))}
              </div>
              {/* Column 3 — offset more */}
              <div style={{ marginTop: '80px' }}>
                {col3.map((t, i) => (
                  <TestimonialCard key={t.name} t={t} index={i * 3 + 2} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, #23AAA6, #265D96)',
              borderRadius: '28px', padding: '72px 48px',
              textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

            <p style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Your Story Starts Here
            </p>
            <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: 'white', marginBottom: '16px', lineHeight: '1.2' }}>
              Ready to Be Our Next<br />Success Story?
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', maxWidth: '460px', margin: '0 auto 40px', lineHeight: '1.7' }}>
              Join thousands of students who trusted Dreamway Education. Book your free consultation today.
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '15px 34px', borderRadius: '14px',
                background: 'white', color: '#23AAA6',
                fontWeight: '700', fontSize: '15px', textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              }}
            >
              Book Free Consultation <FiArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}