import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiHome, FiGlobe, FiPhone } from 'react-icons/fi'

const quickLinks = [
  { label: 'Go Home', path: '/', icon: <FiHome size={16} /> },
  { label: 'Explore Countries', path: '/countries', icon: <FiGlobe size={16} /> },
  { label: 'Contact Us', path: '/contact', icon: <FiPhone size={16} /> },
]

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(160deg, #f0fafa 0%, #eef4fb 60%, #f9fafb 100%)',
      padding: '24px', position: 'relative', overflow: 'hidden',
    }}>

      {/* bg blobs */}
      <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(35,170,166,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(38,93,150,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Big 404 */}
          <div style={{ position: 'relative', marginBottom: '8px', marginTop: '75px' }}>
            <motion.p
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                fontSize: 'clamp(100px, 20vw, 160px)',
                fontFamily: "'Fraunces', serif",
                fontWeight: '600',
                lineHeight: '1',
                background: 'linear-gradient(135deg, #23AAA6, #265D96)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-4px',
              }}
            >
              404
            </motion.p>

            {/* Floating emoji */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute', top: '10px', right: '40px',
                fontSize: '36px', lineHeight: '1',
              }}
            >
              🌍
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 style={{
            fontSize: 'clamp(22px, 4vw, 32px)',
            fontFamily: "'Fraunces', serif",
            fontWeight: '600', color: '#111827',
            marginBottom: '14px', lineHeight: '1.3',
          }}>
            Looks Like You're Lost!
          </h1>
          <p style={{
            fontSize: '16px', color: '#6b7280',
            lineHeight: '1.75', marginBottom: '40px',
            maxWidth: '420px', margin: '0 auto 40px',
          }}>
            The page you're looking for doesn't exist or has been moved. Let us guide you back — just like we guide students to their dream universities.
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}
        >
          {quickLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 22px', borderRadius: '12px',
                background: i === 0 ? 'linear-gradient(135deg, #23AAA6, #265D96)' : 'white',
                color: i === 0 ? 'white' : '#374151',
                fontWeight: '600', fontSize: '14px', textDecoration: 'none',
                border: i === 0 ? 'none' : '1.5px solid #e5e7eb',
                boxShadow: i === 0 ? '0 8px 24px rgba(35,170,166,0.3)' : '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Bottom card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div style={{
            background: 'white', borderRadius: '20px', padding: '24px 32px',
            border: '1px solid rgba(35,170,166,0.12)',
            boxShadow: '0 8px 32px rgba(38,93,150,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '16px', flexWrap: 'wrap',
          }}>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#111827', marginBottom: '3px' }}>
                Need help finding something?
              </p>
              <p style={{ fontSize: '13px', color: '#9ca3af' }}>
                Our team is ready to assist you
              </p>
            </div>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                padding: '11px 20px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #23AAA6, #265D96)',
                color: 'white', fontWeight: '600', fontSize: '14px',
                textDecoration: 'none', whiteSpace: 'nowrap',
                boxShadow: '0 4px 14px rgba(35,170,166,0.3)',
              }}
            >
              Talk to Us <FiArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  )
}