import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FiPhone, FiMail, FiMapPin, FiClock,
  FiSend, FiCheck, FiYoutube
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { AiFillFacebook, AiFillTikTok } from 'react-icons/ai'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const contactInfo = [
  {
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    value: '03013037141',
    sub: 'Chat with us anytime',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.08)',
    href: 'https://wa.me/923013037141',
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Phone',
    value: '03413371475',
    sub: 'Mon–Sat, 9am–7pm',
    color: '#23AAA6',
    bg: 'rgba(35,170,166,0.08)',
    href: 'tel:+923413371475',
  },
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'dreamwaylahore@gmail.com',
    sub: 'We reply within 24 hours',
    color: '#265D96',
    bg: 'rgba(38,93,150,0.08)',
    href: 'mailto:dreamwaylahore@gmail.com',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Office',
    value: 'Lahore, Pakistan',
    sub: 'Visit us for in-person consultation',
    color: '#C97E5E',
    bg: 'rgba(201,126,94,0.08)',
    href: 'https://maps.app.goo.gl/QncaQACsAEZwCiRd8',
  },
]

const socials = [
  { icon: <AiFillTikTok size={20} />, label: 'TikTok', href: 'https://www.tiktok.com/@dreamway46?_r=1&_t=ZS-98otuHN2mN2', color: '#FE2C55 ' },
  { icon: <AiFillFacebook size={20} />, label: 'Facebook', href: ' https://www.facebook.com/share/1Q7uM1457x', color: '#1877F2' },
  { icon: <FaWhatsapp size={20} />, label: 'WhatsApp', href: 'https://wa.me/923013037141', color: '#25D366' },
]

const countries = [
  'Malaysia', 'Cyprus', 'United Kingdom', 'Turkey',
  'Lithuania', 'Latvia', 'Australia', 'New Zealand',
  'Canada', 'USA', 'Germany', 'France',
  'Netherlands', 'Poland', 'Hungary', 'Not Sure Yet',
]

const services = [
  'University Admissions',
  'Visa Assistance',
  'Scholarship Guidance',
  'Pre-Departure Support',
  'Profile Evaluation',
  'SOP & Essay Writing',
]

export default function Contact() {
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

  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1800)
  }

  const contactCardsGrid = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'
  const formGridColumns = isMobile ? '1fr' : '1.6fr 1fr'

  return (
    <main style={{ overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: isMobile ? '120px' : '140px', 
        paddingBottom: isMobile ? '50px' : '80px',
        background: 'linear-gradient(160deg, #f0fafa 0%, #eef4fb 60%, #f9fafb 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: isMobile ? '300px' : '500px', height: isMobile ? '300px' : '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(35,170,166,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: isMobile ? '200px' : '300px', height: isMobile ? '200px' : '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(38,93,150,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(35,170,166,0.1)', border: '1px solid rgba(35,170,166,0.2)', borderRadius: '100px', padding: '6px 18px', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#23AAA6', display: 'inline-block' }} />
              <span style={{ fontSize: isMobile ? '12px' : '13px', fontWeight: '600', color: '#23AAA6' }}>Free Consultation — No Obligations</span>
            </div>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontFamily: "'Fraunces', serif", fontWeight: '600', color: '#111827', lineHeight: '1.15', marginBottom: '18px' }}>
              Let's Start Your<br />
              <span style={{ color: '#23AAA6' }}>Study Abroad Journey</span>
            </h1>
            <p style={{ fontSize: isMobile ? '15px' : '17px', color: '#6b7280', lineHeight: '1.8', maxWidth: '520px', margin: '0 auto' }}>
              Talk to our expert counselors today. We'll assess your profile and guide you to the perfect university — completely free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section style={{ padding: isMobile ? '40px 16px 0' : '60px 24px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: contactCardsGrid, gap: isMobile ? '12px' : '16px' }}>
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'Office' ? '_blank' : undefined}
                rel="noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                style={{
                  display: 'block', textDecoration: 'none',
                  background: 'white', borderRadius: '18px', padding: isMobile ? '20px' : '24px',
                  border: '1.5px solid #f3f4f6',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.boxShadow = `0 12px 32px ${item.bg}` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#f3f4f6'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, marginBottom: '14px' }}>
                  {item.icon}
                </div>
                <p style={{ fontSize: '12px', fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>{item.label}</p>
                <p style={{ fontSize: '15px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>{item.value}</p>
                <p style={{ fontSize: '12px', color: '#9ca3af' }}>{item.sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section style={{ padding: isMobile ? '40px 16px 60px' : '60px 24px 100px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: formGridColumns, gap: isMobile ? '32px' : '40px', alignItems: 'start' }}>

            {/* ── FORM ── */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div style={{ background: '#f9fafb', borderRadius: '24px', padding: isMobile ? '24px 20px' : '44px', border: '1px solid #f3f4f6' }}>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #23AAA6, #265D96)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                      <FiCheck size={32} color="white" strokeWidth={3} />
                    </div>
                    <h3 style={{ fontSize: '24px', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
                      Message Received!
                    </h3>
                    <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.7', maxWidth: '360px', margin: '0 auto 28px' }}>
                      Thank you for reaching out. One of our counselors will contact you within 24 hours.
                    </p>
                    
                    <a href="https://wa.me/923013037141"
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', background: '#25D366', color: 'white', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}
                    >
                      <FaWhatsapp size={18} /> Chat on WhatsApp
                    </a>
                  </motion.div>
                ) : (
                  <>
                    <h2 style={{ fontSize: isMobile ? '20px' : '22px', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginBottom: '6px' }}>
                      Book Your Free Consultation
                    </h2>
                    <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: isMobile ? '24px' : '32px' }}>Fill in the form and we'll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit}>
                      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginBottom: '16px' }}>

                        {/* Name */}
                        <div>
                          <label style={labelStyle}>Full Name *</label>
                          <input
                            name="name" value={form.name} onChange={handleChange} required
                            placeholder="e.g. Ahmed Khan"
                            style={inputStyle}
                            onFocus={e => e.target.style.borderColor = '#23AAA6'}
                            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label style={labelStyle}>Email Address *</label>
                          <input
                            name="email" type="email" value={form.email} onChange={handleChange} required
                            placeholder="you@example.com"
                            style={{padding: '10px', width: '100%'}}
                            onFocus={e => e.target.style.borderColor = '#23AAA6'}
                            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginBottom: '16px' }}>

                        {/* Phone */}
                        <div>
                          <label style={labelStyle}>Phone / WhatsApp *</label>
                          <input
                            name="phone" value={form.phone} onChange={handleChange} required
                            placeholder="+92 300 0000000"
                            style={inputStyle}
                            onFocus={e => e.target.style.borderColor = '#23AAA6'}
                            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                          />
                        </div>

                        {/* Country */}
                        <div>
                          <label style={labelStyle}>Preferred Country</label>
                          <select
                            name="country" value={form.country} onChange={handleChange}
                            style={{ ...inputStyle, cursor: 'pointer' }}
                            onFocus={e => e.target.style.borderColor = '#23AAA6'}
                            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                          >
                            <option value="">Select a country</option>
                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Service */}
                      <div style={{ marginBottom: '16px' }}>
                        <label style={labelStyle}>Service You Need</label>
                        <select
                          name="service" value={form.service} onChange={handleChange}
                          style={{ ...inputStyle, cursor: 'pointer' }}
                          onFocus={e => e.target.style.borderColor = '#23AAA6'}
                          onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                        >
                          <option value="">Select a service</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      {/* Message */}
                      <div style={{ marginBottom: isMobile ? '20px' : '28px' }}>
                        <label style={labelStyle}>Your Message</label>
                        <textarea
                          name="message" value={form.message} onChange={handleChange} rows={isMobile ? 3 : 4}
                          placeholder="Tell us about your academic background, goals, or any questions..."
                          style={{ ...inputStyle, resize: 'vertical', minHeight: isMobile ? '90px' : '110px', lineHeight: '1.6' }}
                          onFocus={e => e.target.style.borderColor = '#23AAA6'}
                          onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          width: '100%', padding: '15px', borderRadius: '12px',
                          background: loading ? '#9ca3af' : 'linear-gradient(135deg, #23AAA6, #265D96)',
                          color: 'white', fontWeight: '700', fontSize: '15px',
                          border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                          transition: 'all 0.2s ease',
                          boxShadow: loading ? 'none' : '0 8px 24px rgba(35,170,166,0.35)',
                        }}
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                              style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                            />
                            Sending...
                          </>
                        ) : (
                          <><FiSend size={17} /> Send Message</>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* ── SIDEBAR ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '20px' }}>

              {/* Office Hours */}
              <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                style={{ background: 'white', borderRadius: '20px', padding: isMobile ? '20px' : '28px', border: '1.5px solid #f3f4f6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(35,170,166,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#23AAA6' }}>
                    <FiClock size={18} />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827' }}>Office Hours</h3>
                </div>
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
                  { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((row, i) => (
                  <div key={row.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 2 ? '1px solid #f9fafb' : 'none' }}>
                    <p style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>{row.day}</p>
                    <p style={{ fontSize: '13px', fontWeight: '700', color: row.time === 'Closed' ? '#ef4444' : '#111827' }}>{row.time}</p>
                  </div>
                ))}
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/923013037141"
                target="_blank"
                rel="noreferrer"
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(37,211,102,0.25)' }}
                style={{
                  display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '16px',
                  background: '#25D366', borderRadius: '20px', padding: isMobile ? '18px' : '24px',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.2)',
                }}
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                  <FaWhatsapp size={26} />
                </div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '2px' }}>Chat on WhatsApp</p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>Usually replies within minutes</p>
                </div>
              </motion.a>

              {/* Map embed */}
              <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid #f3f4f6', height: isMobile ? '180px' : '220px' }}>
                <iframe
                  title="Dreamway Education Location"
                  src="https://maps.app.goo.gl/QncaQACsAEZwCiRd8"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              {/* Socials */}
              <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                style={{ background: 'white', borderRadius: '20px', padding: isMobile ? '20px' : '24px', border: '1.5px solid #f3f4f6' }}>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#9ca3af', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px' }}>Follow Us</p>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(4, 1fr)' : 'repeat(4, 1fr)', gap: '10px' }}>
                  {socials.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: isMobile ? '10px 6px' : '12px 8px', borderRadius: '12px', background: '#f9fafb', border: '1px solid #f3f4f6', textDecoration: 'none', transition: 'all 0.2s ease', color: s.color }}
                      onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = s.color }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#f9fafb'; e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = '#f3f4f6' }}
                    >
                      {s.icon}
                      <span style={{ fontSize: '10px', fontWeight: '600', color: 'inherit' }}>{s.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// ── Styles ──────────────────────────────────────────────────────────────────

const labelStyle = {
  display: 'block', fontSize: '12px', fontWeight: '600',
  color: '#374151', marginBottom: '6px', letterSpacing: '0.3px',
}

const inputStyle = {
  width: '100%', padding: '12px 14px', borderRadius: '10px',
  border: '1.5px solid #e5e7eb', fontSize: '14px',
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  color: '#111827', background: 'white', outline: 'none',
  transition: 'border-color 0.2s ease',
}