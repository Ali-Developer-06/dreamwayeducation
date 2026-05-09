import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../public/logo.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Countries', path: '/countries' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className="fixed top-2 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '80%',
          padding: 12,
          background: scrolled
            ? 'rgba(255, 255, 255, 0.85)'
            : 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(35, 170, 166, 0.15)',
          borderRadius: '16px',
          boxShadow: scrolled
            ? '0 8px 32px rgba(38, 93, 150, 0.12)'
            : '0 4px 16px rgba(38, 93, 150, 0.06)',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} style={{height: 60}} alt="" />
            <div>
              <p style={{ fontSize: '15px', fontWeight: '900', color: '#265D96', lineHeight: '1.1', marginTop: '10px' }}>
                Dreamway
              </p>
              <p style={{ fontSize: '10px', fontWeight: '900', color: '#23AAA6', letterSpacing: '1.5px', textTransform: 'uppercase',letterSpacing: '2.5px' }}>
                Education
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? '#23AAA6' : '#4b5563',
                    background: isActive ? 'rgba(35, 170, 166, 0.08)' : 'transparent',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.target.style.color = '#23AAA6'
                      e.target.style.background = 'rgba(35, 170, 166, 0.06)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.target.style.color = '#4b5563'
                      e.target.style.background = 'transparent'
                    }
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              style={{
                padding: '10px 24px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #23AAA6, #265D96)',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(35, 170, 166, 0.35)',
                transition: 'all 0.2s ease',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 6px 20px rgba(35, 170, 166, 0.45)'
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 14px rgba(35, 170, 166, 0.35)'
              }}
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: '22px', height: '2px', background: '#23AAA6', borderRadius: '2px' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ display: 'block', width: '22px', height: '2px', background: '#23AAA6', borderRadius: '2px' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: '22px', height: '2px', background: '#23AAA6', borderRadius: '2px' }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: 'hidden',
                borderTop: '1px solid rgba(35, 170, 166, 0.1)',
              }}
            >
              <div className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '8px',
                        fontSize: '15px',
                        fontWeight: isActive ? '600' : '500',
                        color: isActive ? '#23AAA6' : '#4b5563',
                        background: isActive ? 'rgba(35, 170, 166, 0.08)' : 'transparent',
                        textDecoration: 'none',
                      }}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <Link
                  to="/contact"
                  style={{
                    marginTop: '8px',
                    padding: '12px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'white',
                    background: 'linear-gradient(135deg, #23AAA6, #265D96)',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  Free Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}