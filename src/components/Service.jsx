import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowRight, FiCheck, FiBook, FiShield, FiAward,
  FiGlobe, FiUsers, FiMessageCircle, FiChevronDown, FiStar
} from 'react-icons/fi'

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 'admissions',
    icon: <FiBook size={28} />,
    title: 'University Admissions',
    tagline: 'From shortlist to offer letter — we handle it all.',
    color: '#23AAA6',
    gradient: 'linear-gradient(135deg, rgba(35,170,166,0.1), rgba(38,93,150,0.06))',
    border: 'rgba(35,170,166,0.2)',
    desc: 'Our admissions experts work with you to identify the best-fit universities based on your academic profile, career goals, and budget. We manage the entire application process end-to-end — so you can focus on preparing for your future.',
    steps: [
      'Profile assessment & university shortlisting',
      'Application form filling & document preparation',
      'SOP & personal statement writing',
      'Submission & follow-up with universities',
      'Offer letter collection & enrollment guidance',
    ],
    countries: ['UK', 'Canada', 'Australia', 'Germany', 'Malaysia', 'Turkey'],
  },
  {
    id: 'visa',
    icon: <FiShield size={28} />,
    title: 'Visa Assistance',
    tagline: '98% visa success rate — speak for themselves.',
    color: '#265D96',
    gradient: 'linear-gradient(135deg, rgba(38,93,150,0.1), rgba(35,170,166,0.06))',
    border: 'rgba(38,93,150,0.2)',
    desc: 'Visa rejection is every student\'s biggest fear. Our dedicated visa specialists have an exceptional 98% approval rate. We ensure every document is perfectly prepared, every form correctly filled, and every requirement met.',
    steps: [
      'Complete visa requirement checklist',
      'Document verification & authentication guidance',
      'Visa application form preparation',
      'Financial statement & bank statement guidance',
      'Mock interview preparation (where required)',
    ],
    countries: ['UK', 'Canada', 'Australia', 'New Zealand', 'Schengen', 'Malaysia'],
  },
  {
    id: 'scholarship',
    icon: <FiAward size={28} />,
    title: 'Scholarship Guidance',
    tagline: 'Find funding that fits your profile perfectly.',
    color: '#23AAA6',
    gradient: 'linear-gradient(135deg, rgba(35,170,166,0.1), rgba(38,93,150,0.06))',
    border: 'rgba(35,170,166,0.2)',
    desc: 'Thousands of scholarships go unclaimed every year because students don\'t know they exist. Our team identifies scholarships that match your academic background, nationality, and field of study — and helps you craft winning applications.',
    steps: [
      'Scholarship database search based on your profile',
      'Eligibility matching & shortlisting',
      'Scholarship application preparation',
      'Essay & motivation letter writing',
      'Application submission & follow-up',
    ],
    countries: ['Turkey', 'Hungary', 'Germany', 'UK', 'Canada', 'Australia'],
  },
  {
    id: 'predeparture',
    icon: <FiGlobe size={28} />,
    title: 'Pre-Departure Support',
    tagline: 'We prepare you for life abroad — before you leave.',
    color: '#265D96',
    gradient: 'linear-gradient(135deg, rgba(38,93,150,0.1), rgba(35,170,166,0.06))',
    border: 'rgba(38,93,150,0.2)',
    desc: 'Getting admission is just the beginning. We make sure you\'re fully prepared for life in your new country — from finding accommodation to understanding local culture and opening a bank account.',
    steps: [
      'Accommodation search & booking guidance',
      'Travel & flight booking tips',
      'Health insurance & medical requirements',
      'Cultural orientation & lifestyle briefing',
      'Airport & arrival day preparation',
    ],
    countries: ['All 15 Countries'],
  },
  {
    id: 'profile',
    icon: <FiUsers size={28} />,
    title: 'Profile Evaluation',
    tagline: 'Know your strengths before you apply.',
    color: '#23AAA6',
    gradient: 'linear-gradient(135deg, rgba(35,170,166,0.1), rgba(38,93,150,0.06))',
    border: 'rgba(35,170,166,0.2)',
    desc: 'A thorough profile evaluation is the foundation of a successful application. Our counselors assess your academic record, extracurriculars, and career goals to identify the universities where you have the strongest chance of admission.',
    steps: [
      'Academic transcript & grades review',
      'Extracurricular & work experience assessment',
      'Career goals alignment analysis',
      'University match scoring',
      'Detailed written evaluation report',
    ],
    countries: ['All 15 Countries'],
  },
  {
    id: 'sop',
    icon: <FiMessageCircle size={28} />,
    title: 'SOP & Essay Writing',
    tagline: 'Your story, told compellingly.',
    color: '#265D96',
    gradient: 'linear-gradient(135deg, rgba(38,93,150,0.1), rgba(35,170,166,0.06))',
    border: 'rgba(38,93,150,0.2)',
    desc: 'A great Statement of Purpose can be the difference between an offer and a rejection. Our expert writers craft compelling, authentic SOPs that highlight your strengths and align perfectly with each university\'s expectations.',
    steps: [
      'In-depth student interview & story discovery',
      'Custom SOP draft tailored to each university',
      'Personal statement & motivation letter writing',
      'Multiple rounds of revisions',
      'Final proofreading & quality check',
    ],
    countries: ['All 15 Countries'],
  },
]

const process = [
  { num: '01', title: 'Book Free Consultation', desc: 'Start with a no-obligation call with one of our senior counselors.' },
  { num: '02', title: 'Profile Evaluation', desc: 'We assess your profile and recommend the best path forward.' },
  { num: '03', title: 'Service Package', desc: 'Choose the services you need — single or bundled packages available.' },
  { num: '04', title: 'We Get to Work', desc: 'Your dedicated counselor handles everything from start to finish.' },
  { num: '05', title: 'Offer & Visa', desc: 'Receive your university offer and we process your student visa.' },
  { num: '06', title: 'You Fly Out', desc: 'Pre-departure briefing done — you\'re ready to start your journey.' },
]

const faqs = [
  { q: 'Do I need to use all services?', a: 'No — you can choose individual services or a bundled package. Most students opt for the full package for the best results.' },
  { q: 'How long does the full process take?', a: 'Typically 6–12 weeks from consultation to visa approval, depending on the country and university.' },
  { q: 'Is the initial consultation really free?', a: 'Yes, completely free with no obligations. We assess your profile and recommend services without any pressure.' },
  { q: 'Do you write the SOP yourself or with me?', a: 'Both! We conduct an in-depth interview to understand your story, then craft the SOP — with multiple rounds of revisions until you\'re fully satisfied.' },
  { q: 'What if my visa gets rejected?', a: 'In the rare case of rejection, we analyze the reasons and reapply at no extra charge. Our 98% success rate means this almost never happens.' },
]

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onClick={() => setOpen(!open)}
      style={{
        border: '1px solid', borderColor: open ? '#23AAA6' : '#e5e7eb',
        borderRadius: '12px', padding: '20px 24px', cursor: 'pointer',
        background: open ? 'rgba(35,170,166,0.02)' : 'white',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <p style={{ fontSize: '15px', fontWeight: '600', color: '#111827' }}>{q}</p>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FiChevronDown size={20} color="#23AAA6" />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '12px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.75', overflow: 'hidden' }}
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ s, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        background: 'white', borderRadius: '24px', overflow: 'hidden',
        border: '1.5px solid #f3f4f6',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Card top */}
      <div style={{ background: s.gradient, padding: '32px', borderBottom: `1px solid ${s.border}` }}>
        <div style={{
          width: '58px', height: '58px', borderRadius: '16px',
          background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: s.color, marginBottom: '20px',
          boxShadow: `0 4px 16px ${s.color}22`,
        }}>
          {s.icon}
        </div>
        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '6px' }}>{s.title}</h3>
        <p style={{ fontSize: '14px', color: s.color, fontWeight: '600' }}>{s.tagline}</p>
      </div>

      {/* Card body */}
      <div style={{ padding: '28px 32px' }}>
        <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.8', marginBottom: '24px' }}>{s.desc}</p>

        {/* What's included */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: '#374151', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '12px' }}>What's Included</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {s.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                  <FiCheck size={11} color={s.color} strokeWidth={3} />
                </div>
                <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.6', fontWeight: '500' }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: '#374151', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '10px' }}>Available For</p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {s.countries.map(c => (
              <span key={c} style={{ fontSize: '11px', fontWeight: '600', padding: '4px 10px', borderRadius: '100px', background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}20` }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <Link to="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '12px 22px', borderRadius: '10px',
          background: `linear-gradient(135deg, ${s.color}, ${s.color === '#23AAA6' ? '#265D96' : '#23AAA6'})`,
          color: 'white', fontWeight: '600', fontSize: '14px', textDecoration: 'none',
          boxShadow: `0 6px 20px ${s.color}30`,
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Get This Service <FiArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Services() {
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
              <FiStar size={13} color="#23AAA6" />
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6' }}>End-to-End Student Support</span>
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontFamily: "'Fraunces', serif", fontWeight: '600', color: '#111827', lineHeight: '1.15', marginBottom: '18px' }}>
              Everything You Need,<br />
              <span style={{ color: '#23AAA6' }}>Under One Roof.</span>
            </h1>

            <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: '1.8', maxWidth: '540px', margin: '0 auto 48px' }}>
              From your first consultation to your first day at university — Dreamway Education provides complete, end-to-end support for every step of your study abroad journey.
            </p>

            {/* Service pills */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {services.map(s => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    padding: '8px 16px', borderRadius: '100px',
                    background: 'white', border: '1px solid #e5e7eb',
                    fontSize: '13px', fontWeight: '600', color: '#374151',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <span style={{ color: s.color }}>{s.icon}</span>
                  {s.title}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ padding: '80px 24px 100px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Our Services</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              What We Do For You
            </h2>
          </motion.div>

          {/* Responsive grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}>
            {services.map((s, i) => <ServiceCard key={s.id} s={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>The Process</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              How It Works
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7280', marginTop: '14px', maxWidth: '480px', margin: '14px auto 0' }}>
              A simple, transparent process designed around your success.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(35,170,166,0.12)' }}
                style={{
                  background: '#f9fafb', borderRadius: '20px', padding: '28px',
                  border: '1px solid #f3f4f6', transition: 'all 0.3s ease',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Big number background */}
                <p style={{
                  position: 'absolute', top: '-10px', right: '16px',
                  fontSize: '80px', fontWeight: '800', color: 'rgba(35,170,166,0.06)',
                  fontFamily: "'Fraunces',serif", lineHeight: '1', pointerEvents: 'none',
                }}>
                  {step.num}
                </p>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #23AAA6, #265D96)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '15px', fontWeight: '800', marginBottom: '16px',
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DREAMWAY ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #23AAA6, #265D96)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: 'white', marginBottom: '12px' }}>
              Why Choose Dreamway?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>
              We're not just a consultancy — we're your partners from day one to graduation day.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { value: '2,500+', label: 'Students Placed', desc: 'Successfully guided to top universities worldwide' },
              { value: '98%', label: 'Visa Success Rate', desc: 'One of the highest approval rates in Pakistan' },
              { value: '15+', label: 'Countries', desc: 'Destinations across Asia, Europe & Pacific' },
              { value: '10+', label: 'Years Experience', desc: 'A decade of trusted education consultancy' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '28px',
                  border: '1px solid rgba(255,255,255,0.15)', textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <p style={{ fontSize: '40px', fontWeight: '800', color: 'white', lineHeight: '1', marginBottom: '6px' }}>{item.value}</p>
                <p style={{ fontSize: '14px', fontWeight: '700', color: 'rgba(255,255,255,0.9)', marginBottom: '8px' }}>{item.label}</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>FAQ</span>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              Common Questions
            </h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => <FAQItem key={i} {...faq} index={i} />)}
          </div>
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

            <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: 'white', marginBottom: '16px', lineHeight: '1.2' }}>
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', maxWidth: '460px', margin: '0 auto 40px', lineHeight: '1.7' }}>
              Book your free consultation today and let our experts build the perfect plan for your study abroad journey.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 30px', borderRadius: '12px',
                background: 'white', color: '#23AAA6',
                fontWeight: '700', fontSize: '15px', textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              }}>
                Book Free Consultation <FiArrowRight size={17} />
              </Link>
              <Link to="/countries" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 30px', borderRadius: '12px',
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: 'white', fontWeight: '600', fontSize: '15px', textDecoration: 'none',
              }}>
                Explore Countries <FiArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}