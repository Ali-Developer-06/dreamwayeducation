import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiArrowRight, FiCheck, FiUsers, FiAward,
  FiGlobe, FiHeart, FiTarget, FiShield
} from 'react-icons/fi'

const stats = [
  { number: '2,500+', label: 'Students Placed', icon: <FiUsers size={20} /> },
  { number: '15+', label: 'Countries', icon: <FiGlobe size={20} /> },
  { number: '98%', label: 'Visa Success Rate', icon: <FiShield size={20} /> },
  { number: '10+', label: 'Years Experience', icon: <FiAward size={20} /> },
]

const values = [
  {
    icon: <FiHeart size={22} />,
    title: 'Student-First Always',
    desc: 'Every decision we make is centered around the best outcome for our students. Your success is our success.',
  },
  {
    icon: <FiShield size={22} />,
    title: 'Full Transparency',
    desc: 'No hidden fees, no false promises. We tell you exactly what to expect — every step of the way.',
  },
  {
    icon: <FiTarget size={22} />,
    title: 'Result-Oriented',
    desc: 'We do not just guide — we deliver. Our 98% visa success rate is proof of our commitment to results.',
  },
  {
    icon: <FiAward size={22} />,
    title: 'Expert Counselors',
    desc: 'Our team consists of certified, experienced education counselors who have helped thousands of students.',
  },
  {
    icon: <FiGlobe size={22} />,
    title: 'Global Network',
    desc: 'We have direct partnerships with 200+ universities across 15 countries — giving you real access.',
  },
  {
    icon: <FiUsers size={22} />,
    title: 'Lifelong Support',
    desc: 'Our relationship does not end at admission. We support you from consultation all the way to graduation.',
  },
]

const team = [
  {
    name: 'Muhammad Ali',
    role: 'Founder & CEO',
    exp: '12 Years Experience',
    emoji: '👨‍💼',
    desc: 'A passionate education advocate with over a decade of experience helping Pakistani students access global opportunities.',
  },
  {
    name: 'Sara Ahmed',
    role: 'Head of Admissions',
    exp: '8 Years Experience',
    emoji: '👩‍💼',
    desc: 'Expert in university admissions across UK, Canada, and Australia. Has personally guided 500+ successful applicants.',
  },
  {
    name: 'Usman Raza',
    role: 'Visa Specialist',
    exp: '9 Years Experience',
    emoji: '👨‍💼',
    desc: 'Visa expert with a near-perfect approval track record. Specialist in complex cases and student documentation.',
  },
  {
    name: 'Ayesha Khan',
    role: 'Europe Desk Lead',
    exp: '6 Years Experience',
    emoji: '👩‍💼',
    desc: 'Specialist in European destinations including Germany, France, Netherlands, and the Baltic states.',
  },
]

const milestones = [
  { year: '2014', title: 'Founded in Lahore', desc: 'Dreamway Education was established with a single mission: make quality foreign education accessible for Pakistani students.' },
  { year: '2016', title: 'First 100 Students', desc: 'We successfully placed our first 100 students in universities across the UK and Malaysia.' },
  { year: '2018', title: 'Expanded to 8 Countries', desc: 'Our destination portfolio grew to cover 8 countries, adding Australia, Canada, and Europe to our network.' },
  { year: '2020', title: '1,000 Students Milestone', desc: 'A landmark achievement — 1,000 students successfully placed across our growing network of universities.' },
  { year: '2022', title: '15 Countries & 200+ Universities', desc: 'Major expansion into Eastern Europe and Pacific destinations, partnering with 200+ universities worldwide.' },
  { year: '2024', title: '2,500+ Success Stories', desc: 'Today, over 2,500 students are studying abroad thanks to Dreamway Education — and we\'re just getting started.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <main style={{ overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: '140px', paddingBottom: '90px',
        background: 'linear-gradient(160deg, #f0fafa 0%, #eef4fb 60%, #f9fafb 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(35,170,166,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(38,93,150,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(35,170,166,0.1)', border: '1px solid rgba(35,170,166,0.2)', borderRadius: '100px', padding: '6px 18px', marginBottom: '24px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#23AAA6', display: 'inline-block' }} />
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6' }}>Est. 2014 — Lahore, Pakistan</span>
              </div>

              <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontFamily: "'Fraunces', serif", fontWeight: '600', color: '#111827', lineHeight: '1.15', marginBottom: '20px' }}>
                We Turn Study<br />Abroad Dreams Into<br />
                <span style={{ color: '#23AAA6' }}>Reality.</span>
              </h1>

              <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: '1.8', marginBottom: '36px', maxWidth: '480px' }}>
                Dreamway Education was founded on a simple belief — every talented Pakistani student deserves access to world-class education, regardless of where they come from.
              </p>

              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '12px', background: 'linear-gradient(135deg, #23AAA6, #265D96)', color: 'white', fontWeight: '600', fontSize: '15px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(35,170,166,0.35)' }}>
                Start Your Journey <FiArrowRight size={17} />
              </Link>
            </motion.div>

            {/* Right — floating stats card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                <div style={{ background: 'white', borderRadius: '24px', padding: '36px', boxShadow: '0 24px 64px rgba(38,93,150,0.13)', border: '1px solid rgba(35,170,166,0.1)' }}>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#9ca3af', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Our Impact in Numbers</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {stats.map((s, i) => (
                      <motion.div key={s.label} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }}
                        style={{ padding: '20px', borderRadius: '16px', background: i % 2 === 0 ? 'rgba(35,170,166,0.05)' : 'rgba(38,93,150,0.05)', border: '1px solid', borderColor: i % 2 === 0 ? 'rgba(35,170,166,0.1)' : 'rgba(38,93,150,0.08)' }}>
                        <div style={{ color: '#23AAA6', marginBottom: '8px' }}>{s.icon}</div>
                        <p style={{ fontSize: '26px', fontWeight: '800', color: '#111827', lineHeight: '1' }}>{s.number}</p>
                        <p style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '500', marginTop: '4px' }}>{s.label}</p>
                      </motion.div>
                    ))}
                  </div>
                  {/* Bottom tagline */}
                  <div style={{ marginTop: '20px', padding: '14px 18px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(35,170,166,0.07), rgba(38,93,150,0.05))', border: '1px solid rgba(35,170,166,0.1)' }}>
                    <p style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6' }}>✦ Pakistan's Most Trusted Education Consultancy</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

            {/* Left — big quote block */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div style={{ position: 'relative', padding: '48px 40px', borderRadius: '24px', background: 'linear-gradient(135deg, #23AAA6, #265D96)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                <p style={{ fontSize: '72px', color: 'rgba(255,255,255,0.15)', fontFamily: 'Georgia, serif', lineHeight: '1', marginBottom: '16px' }}>"</p>
                <p style={{ fontSize: '22px', fontFamily: "'Fraunces', serif", fontWeight: '400', color: 'white', lineHeight: '1.65', fontStyle: 'italic' }}>
                  Our mission is to be the bridge between Pakistani talent and global opportunity — one student at a time.
                </p>
                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                  <p style={{ fontSize: '14px', fontWeight: '700', color: 'rgba(255,255,255,0.9)' }}>Muhammad Ali</p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>Founder & CEO, Dreamway Education</p>
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Our Mission</span>
              <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px', marginBottom: '20px', lineHeight: '1.2' }}>
                Democratizing Access to World-Class Education
              </h2>
              <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.8', marginBottom: '16px' }}>
                When Dreamway Education was founded in Lahore in 2014, the goal was simple: remove the barriers that stop talented students from accessing the world's best universities.
              </p>
              <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.8' }}>
                Today, with 2,500+ students successfully placed across 15 countries, we remain as committed to that mission as ever. Every student we serve gets the same level of dedication, transparency, and care.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: '100px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>What Drives Us</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              Our Core Values
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {values.map((v, i) => (
              <motion.div key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(35,170,166,0.13)' }}
                style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #f3f4f6', transition: 'all 0.3s ease', cursor: 'default' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(35,170,166,0.12), rgba(38,93,150,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#23AAA6', marginBottom: '20px' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.75' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY / TIMELINE ── */}
      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '72px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Our Story</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              A Decade of Impact
            </h2>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Center line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #23AAA6, #265D96)', transform: 'translateX(-50%)', opacity: 0.2 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {milestones.map((m, i) => (
                <motion.div key={m.year} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  style={{ display: 'grid', gridTemplateColumns: '1fr 48px 1fr', alignItems: 'center', gap: '24px' }}>

                  {/* Left side */}
                  {i % 2 === 0 ? (
                    <div style={{ textAlign: 'right', padding: '24px 28px', borderRadius: '16px', background: '#f9fafb', border: '1px solid #f3f4f6' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>{m.title}</h3>
                      <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7' }}>{m.desc}</p>
                    </div>
                  ) : <div />}

                  {/* Center dot */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', zIndex: 1 }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #23AAA6, #265D96)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(35,170,166,0.3)' }}>
                      <p style={{ fontSize: '11px', fontWeight: '800', color: 'white' }}>{m.year}</p>
                    </div>
                  </div>

                  {/* Right side */}
                  {i % 2 !== 0 ? (
                    <div style={{ padding: '24px 28px', borderRadius: '16px', background: '#f9fafb', border: '1px solid #f3f4f6' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>{m.title}</h3>
                      <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7' }}>{m.desc}</p>
                    </div>
                  ) : <div />}

                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: '100px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>The People Behind Dreamway</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              Meet Our Expert Team
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {team.map((member, i) => (
              <motion.div key={member.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(35,170,166,0.13)' }}
                style={{ background: 'white', borderRadius: '20px', padding: '32px 24px', border: '1px solid #f3f4f6', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'default' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #23AAA6, #265D96)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '30px' }}>
                  {member.emoji}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', marginBottom: '4px' }}>{member.role}</p>
                <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '14px' }}>{member.exp}</p>
                <div style={{ width: '40px', height: '2px', background: 'linear-gradient(to right, #23AAA6, #265D96)', margin: '0 auto 14px', borderRadius: '2px' }} />
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.7' }}>{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            style={{ background: 'linear-gradient(135deg, #23AAA6, #265D96)', borderRadius: '28px', padding: '72px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: 'white', marginBottom: '16px', lineHeight: '1.2' }}>
                Let's Write Your Success Story Together
              </h2>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: '1.7' }}>
                Join 2,500+ students who trusted Dreamway Education to guide them to their dream university.
              </p>
              <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '12px', background: 'white', color: '#23AAA6', fontWeight: '700', fontSize: '15px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                  Book Free Consultation <FiArrowRight size={17} />
                </Link>
                <Link to="/countries" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 30px', borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.3)', color: 'white', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>
                  Explore Countries <FiArrowRight size={17} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}