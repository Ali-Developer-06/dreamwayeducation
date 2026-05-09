import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import {
  FiArrowRight, FiCheck, FiStar, FiGlobe, FiUsers,
  FiAward, FiBook, FiShield, FiMessageCircle, FiChevronDown,
  FiChevronLeft, FiChevronRight
} from 'react-icons/fi'

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { number: 2500, suffix: '+', label: 'Students Placed' },
  { number: 15, suffix: '', label: 'Countries' },
  { number: 98, suffix: '%', label: 'Visa Success Rate' },
  { number: 3, suffix: '+', label: 'Years Experience' },
]

const services = [
  { icon: <FiBook size={26} />, title: 'University Admissions', desc: 'End-to-end admission guidance from shortlisting universities to final enrollment — tailored to your profile.' },
  { icon: <FiShield size={26} />, title: 'Visa Assistance', desc: 'Expert visa documentation, application filing, and interview preparation with a 98% success rate.' },
  { icon: <FiAward size={26} />, title: 'Scholarship Guidance', desc: 'We identify and help you apply for scholarships that match your academic background and financial goals.' },
  { icon: <FiGlobe size={26} />, title: 'Pre-Departure Support', desc: 'Accommodation, travel tips, cultural orientation — we prepare you for life abroad before you even land.' },
  { icon: <FiUsers size={26} />, title: 'Profile Evaluation', desc: 'A thorough assessment of your academic and professional profile to identify the best-fit universities.' },
  { icon: <FiMessageCircle size={26} />, title: 'SOP & Essay Writing', desc: 'Professionally crafted Statements of Purpose and application essays that make you stand out.' },
]

const countries = [
  { name: 'Malaysia', flag: '🇲🇾', universities: '40+', highlight: 'Affordable & English' },
  { name: 'Cyprus', flag: '🇨🇾', universities: '15+', highlight: 'EU Degree' },
  { name: 'United Kingdom', flag: '🇬🇧', universities: '80+', highlight: 'World Ranked' },
  { name: 'Turkey', flag: '🇹🇷', universities: '50+', highlight: 'Scholarships' },
  { name: 'Lithuania', flag: '🇱🇹', universities: '20+', highlight: 'EU & Affordable' },
  { name: 'Latvia', flag: '🇱🇻', universities: '18+', highlight: 'EU Programs' },
  { name: 'Australia', flag: '🇦🇺', universities: '45+', highlight: 'Top Ranked' },
  { name: 'New Zealand', flag: '🇳🇿', universities: '22+', highlight: 'Safe & Quality' },
  { name: 'Canada', flag: '🇨🇦', universities: '60+', highlight: 'PR Pathway' },
]

const steps = [
  { num: '01', title: 'Free Consultation', desc: 'Book a session with our counselors to discuss your goals and academic background.' },
  { num: '02', title: 'Profile Evaluation', desc: 'We assess your profile and shortlist the best universities and programs for you.' },
  { num: '03', title: 'Application Filing', desc: 'Our team prepares and submits your applications with precision and care.' },
  { num: '04', title: 'Visa & Departure', desc: 'We handle your visa process and prepare you fully for your journey abroad.' },
]

const whyUs = [
  'Certified education counselors with 10+ years experience',
  '98% student visa approval rate',
  'Partnerships with 200+ universities worldwide',
  'End-to-end support from consultation to departure',
  'Transparent process with no hidden fees',
  'Dedicated counselor assigned to every student',
]

const testimonials = [
  { name: 'Ahmed Raza', country: 'Now studying in UK', university: 'University of Hertfordshire', text: 'Dreamway made my UK dream a reality. From application to visa, everything was handled professionally. I cannot thank them enough!', rating: 5, initial: 'A' },
  { name: 'Fatima Malik', country: 'Now studying in Canada', university: 'Seneca College, Toronto', text: 'The team was always available, answered every question, and my visa was approved in record time. Highly recommend Dreamway!', rating: 5, initial: 'F' },
  { name: 'Usman Tariq', country: 'Now studying in Malaysia', university: 'University of Malaya', text: 'Affordable and reliable. They helped me find a fully scholarship-eligible program. The process was smooth from day one.', rating: 5, initial: 'U' },
  { name: 'Sara Khan', country: 'Now studying in Australia', university: 'University of Melbourne', text: 'Best decision of my life! Dreamway guided me perfectly through every step. My counselor was always just a call away.', rating: 5, initial: 'S' },
  { name: 'Bilal Hussain', country: 'Now studying in Turkey', university: 'Istanbul University', text: 'Got a full scholarship thanks to Dreamway. Their knowledge of Turkish universities is exceptional. Truly grateful!', rating: 5, initial: 'B' },
]

const faqs = [
  { q: 'How long does the admission process take?', a: 'The process typically takes 4–8 weeks depending on the country and university. Our team works to ensure timely submissions.' },
  { q: 'Do you guarantee visa approval?', a: 'We cannot legally guarantee visa outcomes, but our 98% success rate speaks for itself. We ensure your documents are flawless.' },
  { q: 'What are your consultation charges?', a: 'The initial consultation is completely free. Our service fees vary by package and are discussed transparently upfront.' },
  { q: 'Can I apply without IELTS?', a: 'Yes! Several universities in our network accept alternative English proficiency proofs or offer conditional admissions.' },
  { q: 'Which countries do you cover?', a: 'We currently cover 9 countries: Malaysia, Cyprus, UK, Turkey, Lithuania, Latvia, Australia, New Zealand, and Canada.' },
]

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} style={{ fontSize: '42px', fontWeight: '800', color: 'white', lineHeight: '1.1' }}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => setOpen(!open)}
      style={{
        border: '1px solid', borderColor: open ? '#23AAA6' : '#e5e7eb',
        borderRadius: '12px', padding: '20px 24px', cursor: 'pointer',
        background: open ? 'rgba(35,170,166,0.03)' : 'white',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <p style={{ fontSize: '15px', fontWeight: '600', color: '#111827' }}>{q}</p>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FiChevronDown size={20} color="#23AAA6" />
        </motion.div>
      </div>
      {open && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginTop: '12px', fontSize: '14px', color: '#6b7280', lineHeight: '1.7' }}
        >
          {a}
        </motion.p>
      )}
    </motion.div>
  )
}

// ─── Testimonial Carousel ─────────────────────────────────────────────────────

function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 4000)
    return () => clearInterval(interval)
  }, [emblaApi])

  // ─── Responsive styles ──────────────────────────────────────────────────────
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cardFlexBasis = isMobile ? 'calc(85% - 12px)' : isTablet ? 'calc(50% - 12px)' : 'calc(33.333% - 16px)'

  return (
    <div>
      {/* Header row */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'flex-start' : 'flex-end', 
        marginBottom: isMobile ? '24px' : '40px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '16px' : '0',
      }}>
        <div>
          <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Student Stories</span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
            Real Students, Real Results
          </h2>
        </div>
        {/* Nav buttons */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={scrollPrev}
              style={{
                width: '46px', height: '46px', borderRadius: '50%', border: '1.5px solid #e5e7eb',
                background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#265D96', transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#23AAA6'; e.currentTarget.style.borderColor = '#23AAA6'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#265D96' }}
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              style={{
                width: '46px', height: '46px', borderRadius: '50%', border: '1.5px solid #e5e7eb',
                background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#265D96', transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#23AAA6'; e.currentTarget.style.borderColor = '#23AAA6'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#265D96' }}
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Embla viewport */}
      <div ref={emblaRef} style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: isMobile ? '12px' : '24px' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                flex: `0 0 ${cardFlexBasis}`,
                minWidth: '0',
              }}
            >
              <div style={{
                background: 'white', borderRadius: '20px', padding: isMobile ? '24px 20px' : '36px 32px',
                border: '1px solid #f3f4f6',
                boxShadow: '0 4px 24px rgba(38,93,150,0.07)',
                height: '100%', display: 'flex', flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 48px rgba(35,170,166,0.15)'; e.currentTarget.style.borderColor = 'rgba(35,170,166,0.2)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(38,93,150,0.07)'; e.currentTarget.style.borderColor = '#f3f4f6' }}
              >
                {/* Quote mark */}
                <div style={{ fontSize: isMobile ? '40px' : '56px', lineHeight: '1', color: '#23AAA6', opacity: 0.15, fontFamily: 'Georgia, serif', marginBottom: '8px', marginTop: '-8px' }}>"</div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                  {[...Array(t.rating)].map((_, j) => (
                    <FiStar key={j} size={15} fill="#C97E5E" color="#C97E5E" />
                  ))}
                </div>

                <p style={{ fontSize: isMobile ? '14px' : '15px', color: '#374151', lineHeight: '1.8', flex: 1, fontStyle: 'italic' }}>
                  {t.text}
                </p>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid #f3f4f6', paddingTop: '22px', marginTop: '24px' }}>
                  <div style={{
                    width: '46px', height: '46px', borderRadius: '50%', flexShrink: 0,
                    background: 'linear-gradient(135deg, #23AAA6, #265D96)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '16px', fontWeight: '700',
                  }}>
                    {t.initial}
                  </div>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: '700', color: '#111827' }}>{t.name}</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '1px' }}>{t.university}</p>
                    <p style={{ fontSize: '12px', color: '#23AAA6', fontWeight: '600', marginTop: '2px' }}>{t.country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: i === selectedIndex ? '28px' : '8px',
              height: '8px', borderRadius: '100px', border: 'none', cursor: 'pointer',
              background: i === selectedIndex ? '#23AAA6' : '#d1d5db',
              transition: 'all 0.3s ease', padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Fade Up variant ──────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  // ─── Responsive state ───────────────────────────────────────────────────────
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const heroGridColumns = isMobile ? '1fr' : '1fr 1fr'
  const servicesGridColumns = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'
  const countriesGridColumns = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'
  const stepsGridColumns = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'
  const whyUsGridColumns = isMobile ? '1fr' : '1fr 1fr'
  const statsGridColumns = isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'

  return (
    <main style={{ overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0fafa 0%, #eef4fb 50%, #faf8f6 100%)',
        display: 'flex', alignItems: 'center',
        paddingTop: isMobile ? '120px' : '100px', 
        paddingBottom: isMobile ? '40px' : '60px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* bg blobs */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: isMobile ? '300px' : '600px', height: isMobile ? '300px' : '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(35,170,166,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: isMobile ? '200px' : '400px', height: isMobile ? '200px' : '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(38,93,150,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: heroGridColumns, gap: isMobile ? '40px' : '60px', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(35,170,166,0.1)', border: '1px solid rgba(35,170,166,0.25)', borderRadius: '100px', padding: '6px 16px', marginBottom: '24px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#23AAA6', display: 'inline-block' }} />
                <span style={{ fontSize: isMobile ? '12px' : '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '0.5px' }}>Pakistan's Premier Education Consultancy</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontFamily: "'Fraunces', serif", fontWeight: '600', color: '#111827', lineHeight: '1.15', marginBottom: '20px' }}>
                Your Dream University,{' '}
                <span style={{ color: '#23AAA6' }}>Any Country,</span>{' '}
                One Team.
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: isMobile ? '16px' : '17px', color: '#6b7280', lineHeight: '1.75', marginBottom: '36px', maxWidth: '480px' }}>
                We've placed 2,500+ students in top universities across 9 countries. Let our expert counselors guide you from application to arrival.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #23AAA6, #265D96)',
                  color: 'white', fontWeight: '600', fontSize: '15px', textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(35,170,166,0.35)', transition: 'all 0.2s ease',
                  width: isMobile ? '100%' : 'auto',
                  justifyContent: 'center',
                }}>
                  Get Free Consultation <FiArrowRight size={18} />
                </Link>
                <Link to="/countries" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', borderRadius: '12px',
                  background: 'white', color: '#265D96', fontWeight: '600', fontSize: '15px',
                  textDecoration: 'none', border: '1.5px solid #265D96', transition: 'all 0.2s ease',
                  width: isMobile ? '100%' : 'auto',
                  justifyContent: 'center',
                }}>
                  Explore Countries
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
                style={{ display: 'flex', gap: '24px', marginTop: '40px', flexWrap: 'wrap' }}>
                {['Free Consultation', '98% Visa Rate', '10+ Years'].map((badge) => (
                  <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FiCheck size={14} color="#23AAA6" strokeWidth={3} />
                    <span style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>{badge}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Floating animated card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: isMobile ? 'none' : 'block' }}
            >
              {/* Infinite float animation wrapper */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'relative' }}
              >
                <div style={{
                  background: 'white', borderRadius: '24px', padding: '32px',
                  boxShadow: '0 24px 64px rgba(38,93,150,0.15)',
                  border: '1px solid rgba(35,170,166,0.1)',
                }}>
                  <div style={{ marginBottom: '24px' }}>
                    <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '500', marginBottom: '4px' }}>CURRENTLY HELPING</p>
                    <p style={{ fontSize: '22px', fontWeight: '700', color: '#111827' }}>2,500+ Students</p>
                    <p style={{ fontSize: '14px', color: '#6b7280' }}>achieve their study abroad dreams</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                    {[
                      { label: 'Countries', value: '15', color: '#23AAA6' },
                      { label: 'Visa Rate', value: '98%', color: '#265D96' },
                      { label: 'Universities', value: '200+', color: '#265D96' },
                      { label: 'Experience', value: '3+ Yrs', color: '#23AAA6' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                        style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #f3f4f6' }}
                      >
                        <p style={{ fontSize: '22px', fontWeight: '700', color: item.color }}>{item.value}</p>
                        <p style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '500' }}>{item.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div>
                    <p style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '500', marginBottom: '10px' }}>DESTINATIONS WE COVER</p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {['🇲🇾', '🇨🇾', '🇬🇧', '🇹🇷', '🇱🇹', '🇱🇻', '🇦🇺', '🇳🇿', '🇨🇦'].map((flag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 + i * 0.06 }}
                          style={{ fontSize: '24px', lineHeight: '1' }}
                        >
                          {flag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge — separate float speed */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  style={{
                    position: 'absolute', top: '-16px', right: '-16px',
                    background: 'linear-gradient(135deg, #C97E5E, #e09070)',
                    borderRadius: '12px', padding: '10px 16px',
                    boxShadow: '0 8px 20px rgba(201,126,94,0.3)',
                  }}
                >
                  <p style={{ fontSize: '11px', color: 'white', fontWeight: '600', letterSpacing: '0.5px' }}>✦ FREE</p>
                  <p style={{ fontSize: '13px', color: 'white', fontWeight: '700' }}>Consultation</p>
                </motion.div>

                {/* Second floating mini badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  style={{
                    position: 'absolute', bottom: '-22px', left: '-16px',
                    background: 'white', borderRadius: '12px', padding: '10px 16px',
                    boxShadow: '0 8px 24px rgba(38,93,150,0.15)',
                    border: '1px solid rgba(35,170,166,0.15)',
                    display: 'flex', alignItems: 'center', gap: '8px',
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#23AAA6' }} />
                  <p style={{ fontSize: '13px', color: '#111827', fontWeight: '600', }}>98% Visa Success</p>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: 'linear-gradient(135deg, #23AAA6, #265D96)', padding: isMobile ? '40px 24px' : '60px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: statsGridColumns, gap: isMobile ? '20px' : '24px', rowGap: isMobile ? '32px' : '24px' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <AnimatedCounter target={s.number} suffix={s.suffix} />
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', fontWeight: '500', marginTop: '4px' }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: isMobile ? '60px 16px' : '100px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>What We Offer</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px', lineHeight: '1.2' }}>
              Everything You Need,<br />Under One Roof
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7280', marginTop: '16px', maxWidth: '520px', margin: '16px auto 0' }}>
              From your first free consultation to your first day at university — we're with you every step.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: servicesGridColumns, gap: isMobile ? '16px' : '24px' }}>
            {services.map((s, i) => (
              <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(35,170,166,0.15)' }}
                style={{ background: 'white', borderRadius: '16px', padding: isMobile ? '24px 20px' : '32px', border: '1px solid #f3f4f6', transition: 'all 0.3s ease', cursor: 'default' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(35,170,166,0.12), rgba(38,93,150,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#23AAA6', marginBottom: '20px' }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRIES ── */}
      <section style={{ padding: isMobile ? '60px 16px' : '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Study Destinations</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              9 Countries, Infinite Possibilities
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: countriesGridColumns, gap: isMobile ? '12px' : '20px' }}>
            {countries.map((c, i) => (
              <motion.div key={c.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -4 }}>
                <Link to={`/countries/${c.name.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{ background: 'white', borderRadius: '16px', padding: isMobile ? '20px' : '28px', border: '1px solid #e5e7eb', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '16px' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#23AAA6'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(35,170,166,0.12)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <span style={{ fontSize: isMobile ? '32px' : '40px', lineHeight: '1' }}>{c.flag}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827' }}>{c.name}</h3>
                      <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '2px' }}>{c.universities} universities</p>
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: '600', color: '#23AAA6', background: 'rgba(35,170,166,0.08)', padding: '4px 10px', borderRadius: '100px' }}>
                      {c.highlight}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/countries" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '12px', border: '1.5px solid #23AAA6', color: '#23AAA6', fontWeight: '600', fontSize: '15px', textDecoration: 'none', transition: 'all 0.2s ease' }}>
              View All Countries <FiArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: isMobile ? '60px 16px' : '100px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '70px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>How It Works</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              4 Simple Steps to Your Dream University
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: stepsGridColumns, gap: isMobile ? '16px' : '24px' }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: '0 20px 48px rgba(35,170,166,0.15)', borderColor: 'rgba(35,170,166,0.3)' }}
                style={{
                  background: 'white', borderRadius: '16px', padding: isMobile ? '24px 20px' : '32px 24px',
                  border: '1px solid #f3f4f6', textAlign: 'center', cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, #23AAA6, #265D96)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'white', fontSize: '16px', fontWeight: '700' }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: isMobile ? '60px 16px' : '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: whyUsGridColumns, gap: isMobile ? '40px' : '80px', alignItems: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Why Choose Us</span>
              <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px', marginBottom: '24px', lineHeight: '1.2' }}>
                We're Not Just Consultants. We're Your Partners.
              </h2>
              <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.75', marginBottom: '36px' }}>
                With 10+ years of experience and thousands of success stories, Dreamway Education is the most trusted name for study abroad in Pakistan.
              </p>
              <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 26px', borderRadius: '12px', background: 'linear-gradient(135deg, #23AAA6, #265D96)', color: 'white', fontWeight: '600', fontSize: '15px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(35,170,166,0.3)' }}>
                Learn About Us <FiArrowRight size={17} />
              </Link>
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {whyUs.map((item, i) => (
                <motion.div key={item} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '18px 20px', borderRadius: '12px', background: '#f9fafb', border: '1px solid #f3f4f6' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(35,170,166,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <FiCheck size={13} color="#23AAA6" strokeWidth={3} />
                  </div>
                  <p style={{ fontSize: '14px', color: '#374151', fontWeight: '500', lineHeight: '1.6' }}>{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS CAROUSEL ── */}
      <section style={{ padding: isMobile ? '60px 16px' : '100px 24px', background: 'linear-gradient(135deg, #f0fafa, #eef4fb)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: isMobile ? '60px 16px' : '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>FAQ</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => <FAQItem key={i} {...faq} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: isMobile ? '40px 16px' : '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            style={{ background: 'linear-gradient(135deg, #23AAA6 0%, #265D96 100%)', borderRadius: '24px', padding: isMobile ? '40px 24px' : '64px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: 'white', marginBottom: '16px' }}>
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p style={{ fontSize: isMobile ? '15px' : '17px', color: 'rgba(255,255,255,0.8)', marginBottom: '36px', maxWidth: '520px', margin: '0 auto 36px' }}>
              Book your free consultation today. No fees, no obligations — just expert guidance.
            </p>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '12px', background: 'white', color: '#23AAA6', fontWeight: '700', fontSize: '15px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
              Book Free Consultation <FiArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}