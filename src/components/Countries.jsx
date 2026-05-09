import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiArrowUpRight, FiGlobe, FiTrendingUp, FiBriefcase, FiUsers, FiStar } from 'react-icons/fi'

const countries = [
  { name: 'Malaysia', slug: 'malaysia', flag: '🇲🇾', universities: '40+', tags: ['Affordable', 'English Medium', 'Easy Visa'], region: 'Asia' },
  { name: 'Cyprus', slug: 'cyprus', flag: '🇨🇾', universities: '15+', tags: ['EU Degree', 'Safe Country', 'Schengen'], region: 'Europe' },
  { name: 'United Kingdom', slug: 'united-kingdom', flag: '🇬🇧', universities: '80+', tags: ['World Ranked', 'Post-Study Visa', 'Global'], region: 'Europe' },
  { name: 'Turkey', slug: 'turkey', flag: '🇹🇷', universities: '50+', tags: ['Scholarships', 'Affordable', 'Cultural'], region: 'Asia' },
  { name: 'Lithuania', slug: 'lithuania', flag: '🇱🇹', universities: '20+', tags: ['EU Country', 'Low Tuition', 'Schengen'], region: 'Europe' },
  { name: 'Latvia', slug: 'latvia', flag: '🇱🇻', universities: '18+', tags: ['EU Degree', 'Schengen', 'Modern'], region: 'Europe' },
  { name: 'Australia', slug: 'australia', flag: '🇦🇺', universities: '45+', tags: ['Top Ranked', 'Work Rights', 'PR Pathway'], region: 'Pacific' },
  { name: 'New Zealand', slug: 'new-zealand', flag: '🇳🇿', universities: '22+', tags: ['Safe Country', 'Work Rights', 'Quality Life'], region: 'Pacific' },
  { name: 'Canada', slug: 'canada', flag: '🇨🇦', universities: '60+', tags: ['PR Pathway', 'Work Rights', 'Top Universities'], region: 'Americas' },
  { name: 'USA', slug: 'usa', flag: '🇺🇸', universities: '100+', tags: ['Ivy League', 'Research', 'Global Network'], region: 'Americas' },
  { name: 'Germany', slug: 'germany', flag: '🇩🇪', universities: '35+', tags: ['Free Education', 'Engineering Hub', 'EU'], region: 'Europe' },
  { name: 'France', slug: 'france', flag: '🇫🇷', universities: '30+', tags: ['Prestigious', 'Culture', 'EU'], region: 'Europe' },
  { name: 'Netherlands', slug: 'netherlands', flag: '🇳🇱', universities: '25+', tags: ['English Taught', 'Innovation', 'EU'], region: 'Europe' },
  { name: 'Poland', slug: 'poland', flag: '🇵🇱', universities: '28+', tags: ['Affordable EU', 'Schengen', 'Safe'], region: 'Europe' },
  { name: 'Hungary', slug: 'hungary', flag: '🇭🇺', universities: '22+', tags: ['EU Degree', 'Affordable', 'Scholarships'], region: 'Europe' },
]

const whyReasons = [
  { icon: <FiGlobe size={22} />, title: 'Global Recognition', desc: 'A foreign degree is recognized and respected by employers worldwide, giving you a competitive edge.' },
  { icon: <FiTrendingUp size={22} />, title: 'Career Growth', desc: 'International exposure accelerates your career trajectory and opens doors to global opportunities.' },
  { icon: <FiBriefcase size={22} />, title: 'Work While Studying', desc: 'Most countries allow international students to work part-time, helping cover living expenses.' },
  { icon: <FiUsers size={22} />, title: 'Global Network', desc: 'Build lifelong connections with students and professionals from around the world.' },
  { icon: <FiStar size={22} />, title: 'Scholarship Access', desc: 'International students have access to thousands of scholarships and financial aid programs.' },
  { icon: <FiTrendingUp size={22} />, title: 'PR & Settlement', desc: 'Many countries offer post-study work visas and permanent residency pathways for graduates.' },
]

const regions = ['All', 'Europe', 'Asia', 'Pacific', 'Americas']

export default function Countries() {
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

  const [activeRegion, setActiveRegion] = useState('All')
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filtered = activeRegion === 'All'
    ? countries
    : countries.filter(c => c.region === activeRegion)

  const whyReasonsGrid = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'
  const countriesGrid = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'

  return (
    <main style={{ overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: isMobile ? '120px' : '140px', 
        paddingBottom: isMobile ? '50px' : '80px',
        background: 'linear-gradient(160deg, #f0fafa 0%, #eef4fb 60%, #f9fafb 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: isMobile ? '250px' : '500px', height: isMobile ? '250px' : '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(35,170,166,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '10%', width: isMobile ? '180px' : '300px', height: isMobile ? '180px' : '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(38,93,150,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Floating flags background — fewer flags on mobile */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {(isMobile ? ['🇬🇧', '🇨🇦', '🇦🇺', '🇩🇪'] : ['🇬🇧', '🇨🇦', '🇦🇺', '🇩🇪', '🇲🇾', '🇹🇷', '🇳🇿', '🇫🇷']).map((flag, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -20, 0], opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              style={{
                position: 'absolute', fontSize: isMobile ? '32px' : '48px',
                left: `${12 + i * (isMobile ? 22 : 12)}%`,
                top: `${20 + (i % (isMobile ? 2 : 3)) * (isMobile ? 35 : 25)}%`,
                filter: 'blur(1px)',
              }}
            >
              {flag}
            </motion.span>
          ))}
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(35,170,166,0.1)', border: '1px solid rgba(35,170,166,0.2)',
              borderRadius: '100px', padding: '6px 18px', marginBottom: '24px',
            }}>
              <FiGlobe size={14} color="#23AAA6" />
              <span style={{ fontSize: isMobile ? '12px' : '13px', fontWeight: '600', color: '#23AAA6' }}>15 Destinations Worldwide</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(38px, 6vw, 64px)', fontFamily: "'Fraunces', serif",
              fontWeight: '600', color: '#111827', lineHeight: '1.1', marginBottom: '20px',
            }}>
              Find Your Perfect<br />
              <span style={{ color: '#23AAA6' }}>Study Destination</span>
            </h1>

            <p style={{ fontSize: isMobile ? '15px' : '18px', color: '#6b7280', lineHeight: '1.75', maxWidth: '520px', margin: '0 auto' }}>
              We help Pakistani students gain admission to top universities across 15 countries — from Europe to Australia and beyond.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '24px' : '48px', marginTop: isMobile ? '40px' : '56px', flexWrap: 'wrap', rowGap: isMobile ? '20px' : '48px' }}
          >
            {[
              { value: '15+', label: 'Countries' },
              { value: '500+', label: 'Universities' },
              { value: '2,500+', label: 'Students Placed' },
              { value: '98%', label: 'Visa Success' },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
                style={{ textAlign: 'center', minWidth: isMobile ? '120px' : 'auto' }}>
                <p style={{ fontSize: isMobile ? '28px' : '32px', fontWeight: '800', color: '#111827', lineHeight: '1' }}>{s.value}</p>
                <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '500', marginTop: '4px' }}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY STUDY ABROAD ── */}
      <section style={{ padding: isMobile ? '60px 16px' : '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '64px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>The Dream Worth Chasing</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px', lineHeight: '1.2' }}>
              Why Study Abroad?
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7280', marginTop: '14px', maxWidth: '500px', margin: '14px auto 0', lineHeight: '1.7' }}>
              A world-class education abroad doesn't just change your degree — it changes your life.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: whyReasonsGrid, gap: isMobile ? '16px' : '24px' }}>
            {whyReasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                style={{
                  padding: isMobile ? '24px 20px' : '32px', borderRadius: '20px',
                  background: i % 2 === 0 ? 'linear-gradient(135deg, rgba(35,170,166,0.04), rgba(38,93,150,0.04))' : 'white',
                  border: '1px solid', borderColor: i % 2 === 0 ? 'rgba(35,170,166,0.12)' : '#f3f4f6',
                  transition: 'all 0.3s ease', cursor: 'default',
                }}
              >
                <div style={{
                  width: '50px', height: '50px', borderRadius: '14px', marginBottom: '20px',
                  background: 'linear-gradient(135deg, #23AAA6, #265D96)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                }}>
                  {r.icon}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>{r.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.75' }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRIES GRID ── */}
      <section style={{ padding: isMobile ? '50px 16px 60px' : '80px 24px 100px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section header */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', justifyContent: isMobile ? 'flex-start' : 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', marginBottom: isMobile ? '24px' : '40px', flexWrap: 'wrap', gap: '20px', flexDirection: isMobile ? 'column' : 'row' }}>
            <div>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Explore All</span>
              <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '8px' }}>
                Our Study Destinations
              </h2>
            </div>

            {/* Region filter */}
            <div style={{ display: 'flex', gap: isMobile ? '6px' : '8px', flexWrap: 'wrap' }}>
              {regions.map(r => (
                <button
                  key={r}
                  onClick={() => setActiveRegion(r)}
                  style={{
                    padding: isMobile ? '6px 14px' : '8px 18px', borderRadius: '100px', fontSize: isMobile ? '12px' : '13px', fontWeight: '600',
                    border: '1.5px solid', cursor: 'pointer', transition: 'all 0.2s ease',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    borderColor: activeRegion === r ? '#23AAA6' : '#e5e7eb',
                    background: activeRegion === r ? '#23AAA6' : 'white',
                    color: activeRegion === r ? 'white' : '#6b7280',
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            layout
            style={{ display: 'grid', gridTemplateColumns: countriesGrid, gap: isMobile ? '14px' : '20px' }}
          >
            {filtered.map((c, i) => (
              <motion.div
                key={c.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link to={`/countries/${c.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    background: 'white', borderRadius: '20px', padding: isMobile ? '20px' : '28px',
                    border: '1.5px solid',
                    borderColor: hoveredIndex === i ? '#23AAA6' : '#e5e7eb',
                    boxShadow: hoveredIndex === i ? '0 16px 48px rgba(35,170,166,0.14)' : '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                    transform: hoveredIndex === i ? 'translateY(-6px)' : 'translateY(0)',
                    display: 'flex', flexDirection: 'column', gap: '16px',
                  }}>

                    {/* Top row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: isMobile ? '38px' : '48px', lineHeight: '1' }}>{c.flag}</span>
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '50%',
                        background: hoveredIndex === i ? '#23AAA6' : 'rgba(35,170,166,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        color: hoveredIndex === i ? 'white' : '#23AAA6',
                      }}>
                        <FiArrowUpRight size={17} />
                      </div>
                    </div>

                    {/* Name + universities */}
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>{c.name}</h3>
                      <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '500' }}>{c.universities} Universities</p>
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', background: '#f3f4f6' }} />

                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {c.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: '11px', fontWeight: '600', padding: '4px 10px',
                          borderRadius: '100px',
                          background: 'rgba(35,170,166,0.07)',
                          color: '#23AAA6',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: isMobile ? '50px 0' : '80px 0', color: '#9ca3af' }}>
              <p style={{ fontSize: isMobile ? '36px' : '48px', marginBottom: '12px' }}>🌍</p>
              <p style={{ fontSize: '17px', fontWeight: '600', color: '#374151' }}>No countries in this region yet</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: isMobile ? '0 16px 60px' : '0 24px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, #23AAA6 0%, #265D96 100%)',
              borderRadius: '28px', padding: isMobile ? '48px 24px' : '72px 48px', textAlign: 'center',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Decorative blobs */}
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: isMobile ? '200px' : '320px', height: isMobile ? '200px' : '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: isMobile ? '160px' : '240px', height: isMobile ? '160px' : '240px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
                Free — No Obligations
              </p>
              <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: 'white', marginBottom: '16px', lineHeight: '1.2' }}>
                Not Sure Which Country<br />Is Right for You?
              </h2>
              <p style={{ fontSize: isMobile ? '15px' : '17px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: '1.7' }}>
                Our expert counselors will evaluate your profile and recommend the best destination for your goals and budget.
              </p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '15px 34px', borderRadius: '14px',
                  background: 'white', color: '#23AAA6',
                  fontWeight: '700', fontSize: '15px', textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)' }}
              >
                Get Free Consultation <FiArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}