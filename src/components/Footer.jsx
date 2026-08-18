import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiFacebook, FiYoutube } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { AiFillTikTok } from 'react-icons/ai'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Countries', path: '/countries' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const countries = [
  { name: 'Malaysia', slug: 'malaysia' },
  { name: 'United Kingdom', slug: 'united-kingdom' },
  { name: 'Canada', slug: 'canada' },
  { name: 'Australia', slug: 'australia' },
  { name: 'Germany', slug: 'germany' },
  { name: 'Turkey', slug: 'turkey' },
  { name: 'Cyprus', slug: 'cyprus' },
  { name: 'New Zealand', slug: 'new-zealand' },
]

const services = [
  'University Admissions',
  'Visa Assistance',
  'Scholarship Guidance',
  'Pre-Departure Support',
  'Profile Evaluation',
  'SOP & Essay Writing',
]

const socials = [
  { icon: <AiFillTikTok size={18} />, href: 'https://www.tiktok.com/@dreamway46?_r=1&_t=ZS-98otuHN2mN2', label: 'Instagram', color: '#E1306C' },
  { icon: <FiFacebook size={18} />, href: ' https://www.facebook.com/share/1Q7uM1457x', label: 'Facebook', color: '#1877F2' },
  { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/923013037141', label: 'WhatsApp', color: '#25D366' },
]

export default function Footer() {
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

  const footerGridColumns = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : '2fr 1fr 1fr 1fr'

  return (
    <footer style={{ background: '#0d1117', color: 'white', overflow: 'hidden' }}>

      {/* ── CTA STRIP ── */}
      <div style={{
        background: 'linear-gradient(135deg, #23AAA6, #265D96)',
        padding: isMobile ? '36px 20px' : '48px 24px',
      }}>
        <div style={{ 
          maxWidth: '1200px', margin: '0 auto', 
          display: 'flex', 
          alignItems: isMobile ? 'flex-start' : 'center', 
          justifyContent: 'space-between', 
          gap: isMobile ? '20px' : '24px', 
          flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          <div>
            <h3 style={{ fontSize: 'clamp(20px,3vw,28px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: 'white', marginBottom: '6px' }}>
              Ready to Study Abroad?
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)' }}>
              Book your free consultation today — no fees, no obligations.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', width: isMobile ? '100%' : 'auto' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 26px', borderRadius: '12px',
              background: 'white', color: '#23AAA6',
              fontWeight: '700', fontSize: '14px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
              flex: isMobile ? 1 : 'none',
              justifyContent: 'center',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Get Free Consultation <FiArrowRight size={16} />
            </Link>
            <a href="https://wa.me/923013037141" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 26px', borderRadius: '12px',
              background: '#25D366', color: 'white',
              fontWeight: '700', fontSize: '14px', textDecoration: 'none',
              transition: 'all 0.2s ease',
              flex: isMobile ? 1 : 'none',
              justifyContent: 'center',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <FaWhatsapp size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div style={{ padding: isMobile ? '48px 20px 36px' : '72px 24px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: footerGridColumns, gap: isMobile ? '36px' : isTablet ? '48px 32px' : '48px' }}>

            {/* Brand column */}
            <div>
              {/* Logo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #23AAA6, #265D96)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" opacity="0.9" />
                    <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '16px', fontWeight: '700', color: 'white', lineHeight: '1.1' }}>Dreamway</p>
                  <p style={{ fontSize: '10px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Education</p>
                </div>
              </div>

              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', marginBottom: '24px', maxWidth: '280px' }}>
                Pakistan's most trusted education consultancy. Helping students access world-class universities across 15 countries since 2024.
              </p>

              {/* Contact info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {[
                  { icon: <FaWhatsapp size={15} />, text: '+92 3013037141', href: 'https://wa.me/923013037141', color: '#25D366' },
                  { icon: <FiMail size={15} />, text: 'dreamwaylahore@gmail.com', href: 'mailto:dreamwaylahore@gmail.com', color: '#23AAA6' },
                  { icon: <FiMapPin size={15} />, text: 'Lahore, Pakistan', href: 'https://maps.app.goo.gl/QncaQACsAEZwCiRd8', color: '#C97E5E' },
                ].map(item => (
                  <a key={item.text} href={item.href} target="_blank" rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{item.text}</span>
                  </a>
                ))}
              </div>

              {/* Socials */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    style={{
                      width: '38px', height: '38px', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = s.color }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
                Quick Links
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {navLinks.map(link => (
                  <Link key={link.path} to={link.path}
                    style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#23AAA6'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#23AAA6', display: 'inline-block', opacity: 0.6, flexShrink: 0 }} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
                Destinations
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {countries.map(c => (
                  <Link key={c.slug} to={`/countries/${c.slug}`}
                    style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#23AAA6'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#23AAA6', display: 'inline-block', opacity: 0.6, flexShrink: 0 }} />
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
                Our Services
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {services.map(s => (
                  <Link key={s} to="/contact"
                    style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#23AAA6'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#23AAA6', display: 'inline-block', opacity: 0.6, flexShrink: 0 }} />
                    {s}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '16px 20px' : '20px 24px' }}>
        <div style={{ 
          maxWidth: '1200px', margin: '0 auto', 
          display: 'flex', 
          alignItems: isMobile ? 'flex-start' : 'center', 
          justifyContent: 'space-between', 
          gap: isMobile ? '8px' : '16px', 
          flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Dreamway Education. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            Lahore, Pakistan — Est. 2024
          </p>
        </div>
      </div>
    </footer>
  )
}