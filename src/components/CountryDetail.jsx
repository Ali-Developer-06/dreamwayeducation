import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiArrowRight, FiArrowLeft, FiCheck, FiBook, FiClock,
  FiMapPin, FiUsers, FiAward, FiGlobe, FiShield
} from 'react-icons/fi'

const countriesData = {
  malaysia: {
    name: 'Malaysia', flag: '🇲🇾', region: 'Asia',
    universities: '40+', intake: 'February & September', duration: '3 – 4 Years',
    highlight: 'Affordable & English Medium',
    tags: ['Affordable', 'English Medium', 'Easy Visa'],
    heroColor: '#23AAA6',
    about: 'Malaysia is one of the most popular study destinations for Pakistani students, offering world-class education at highly affordable costs. With English as the primary medium of instruction across most universities, students face minimal language barriers. The country is home to several internationally ranked universities and a vibrant, multicultural student community.',
    whyStudy: [
      'English is the medium of instruction at most universities',
      'Significantly lower tuition fees compared to Western countries',
      'High quality of life with affordable living costs',
      'Easy and quick student visa process for Pakistanis',
      'Culturally familiar environment — Muslim-majority country',
      'Strong academic partnerships with UK and Australian universities',
    ],
    programs: ['Engineering', 'Business & MBA', 'Medicine & Pharmacy', 'IT & Computer Science', 'Architecture', 'Hospitality'],
    topUniversities: ['University of Malaya (UM)', 'Universiti Putra Malaysia (UPM)', 'Taylors University', 'INTI International University', 'Sunway University'],
    requirements: ['Minimum 50% in Matric/O-Levels', 'Valid passport', 'Financial statement', 'No IELTS required at many universities', 'Medical fitness certificate'],
  },
  cyprus: {
    name: 'Cyprus', flag: '🇨🇾', region: 'Europe',
    universities: '15+', intake: 'September & February', duration: '3 – 4 Years',
    highlight: 'EU Recognized Degree',
    tags: ['EU Degree', 'Safe Country', 'Schengen'],
    heroColor: '#265D96',
    about: 'Cyprus is an English-friendly EU member state offering internationally recognized degrees at accessible costs. Situated at the crossroads of Europe, Asia, and Africa, Cyprus provides a unique multicultural academic experience. Its universities offer programs taught entirely in English, making it a top choice for Pakistani students seeking an EU degree.',
    whyStudy: [
      'EU-recognized degrees accepted globally',
      'English is widely spoken — no language barrier',
      'Safe, peaceful, and student-friendly environment',
      'Schengen access for travel across Europe',
      'Affordable tuition compared to Western Europe',
      'Rich cultural history and Mediterranean lifestyle',
    ],
    programs: ['Business & Management', 'Engineering', 'Law', 'Media & Communication', 'IT & Computer Science', 'Hospitality & Tourism'],
    topUniversities: ['University of Cyprus', 'Cyprus International University', 'European University Cyprus', 'Frederick University', 'University of Nicosia'],
    requirements: ['Minimum 50% in Matric/O-Levels', 'Valid passport', 'English proficiency (IELTS or equivalent)', 'Financial statement', 'Motivation letter'],
  },
  'united-kingdom': {
    name: 'United Kingdom', flag: '🇬🇧', region: 'Europe',
    universities: '80+', intake: 'September & January', duration: '3 Years (BSc)',
    highlight: 'World-Ranked Universities',
    tags: ['World Ranked', 'Post-Study Visa', 'Global Recognition'],
    heroColor: '#23AAA6',
    about: 'The United Kingdom is home to some of the worlds most prestigious universities, including Oxford, Cambridge, and Imperial College. A UK degree is one of the most recognized qualifications globally, opening doors to careers in every industry and country. Pakistani students benefit from a strong historical academic connection with the UK.',
    whyStudy: [
      'Home to world-famous universities including Oxford & Cambridge',
      '2-year Post-Study Work Visa (Graduate Route)',
      'Shorter degree duration — 3 years for BSc, saving time and cost',
      'Globally recognized and respected qualifications',
      'Large and welcoming Pakistani student community',
      'Strong career placement and alumni networks',
    ],
    programs: ['Medicine & Law', 'Engineering', 'Business & Finance', 'Computer Science', 'Architecture', 'Arts & Design'],
    topUniversities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'University of Manchester', 'University of Hertfordshire'],
    requirements: ['A-Levels or equivalent (FSc/ICS)', 'IELTS 6.0+ overall', 'Statement of Purpose (SOP)', 'Financial proof', 'Two reference letters'],
  },
  turkey: {
    name: 'Turkey', flag: '🇹🇷', region: 'Asia',
    universities: '50+', intake: 'September & February', duration: '4 Years',
    highlight: 'Generous Scholarships',
    tags: ['Scholarships', 'Affordable', 'Cultural Experience'],
    heroColor: '#265D96',
    about: 'Turkey has rapidly emerged as a top destination for international students, particularly from Muslim countries. The Turkish government offers one of the most generous scholarship programs in the world — Türkiye Scholarships — covering tuition, accommodation, and monthly stipend. With modern universities and a rich cultural heritage, Turkey is an excellent choice.',
    whyStudy: [
      'Türkiye Scholarships cover full tuition, housing & stipend',
      'Affordable education and living costs',
      'Muslim-friendly environment and culture',
      'Modern, well-equipped university campuses',
      'Strategic location at the crossroads of Europe and Asia',
      'Growing global academic reputation',
    ],
    programs: ['Medicine & Dentistry', 'Engineering', 'Architecture', 'Business', 'Social Sciences', 'International Relations'],
    topUniversities: ['Istanbul University', 'Middle East Technical University (METU)', 'Bogazici University', 'Hacettepe University', 'Ankara University'],
    requirements: ['Minimum 70% in FSc/Matric for scholarships', 'Valid passport', 'IELTS or Turkish language certificate (varies)', 'Motivation letter', 'Academic transcripts'],
  },
  lithuania: {
    name: 'Lithuania', flag: '🇱🇹', region: 'Europe',
    universities: '20+', intake: 'September & February', duration: '3 – 4 Years',
    highlight: 'Affordable EU Education',
    tags: ['EU Country', 'Low Tuition', 'Schengen'],
    heroColor: '#23AAA6',
    about: 'Lithuania is one of the fastest-growing EU study destinations for international students. With a wide range of English-taught programs, low tuition fees, and Schengen access, Lithuania offers exceptional value for Pakistani students seeking a European education. The country boasts a modern academic infrastructure and a safe, welcoming environment.',
    whyStudy: [
      'EU-recognized degrees at some of the lowest tuition in Europe',
      'Schengen membership allows travel across 26 European countries',
      'Growing range of English-taught programs',
      'Safe and stable country with low cost of living',
      'Active student life and modern university facilities',
      'Welcoming international student community',
    ],
    programs: ['Information Technology', 'Business & Economics', 'Engineering', 'Medicine', 'Social Sciences', 'Environmental Studies'],
    topUniversities: ['Vilnius University', 'Kaunas University of Technology', 'Vytautas Magnus University', 'Lithuanian University of Health Sciences', 'ISM University'],
    requirements: ['Minimum 50% in O-Levels/Matric', 'IELTS 5.5+ or equivalent', 'Motivation letter', 'Financial statement', 'Valid passport'],
  },
  latvia: {
    name: 'Latvia', flag: '🇱🇻', region: 'Europe',
    universities: '18+', intake: 'September & February', duration: '3 – 4 Years',
    highlight: 'EU Programs & Schengen',
    tags: ['EU Degree', 'Schengen', 'Modern Universities'],
    heroColor: '#265D96',
    about: 'Latvia is an EU member state offering quality European education at very competitive costs. With programs taught in English across a wide range of disciplines, Latvia has become an attractive destination for Pakistani students looking for EU degrees. As a Schengen state, students can also travel freely across Europe during their studies.',
    whyStudy: [
      'Fully accredited EU degrees recognized worldwide',
      'English-taught programs across all major disciplines',
      'Schengen visa enables travel across Europe',
      'Affordable tuition and living costs',
      'Beautiful and safe Baltic capital — Riga',
      'Growing international student population',
    ],
    programs: ['Medicine & Pharmacy', 'IT & Computer Science', 'Business', 'Engineering', 'Law', 'Arts & Humanities'],
    topUniversities: ['University of Latvia', 'Riga Technical University', 'Riga Stradins University', 'BA School of Business and Finance', 'Transport and Telecommunication Institute'],
    requirements: ['Minimum 50% in O-Levels/Matric', 'IELTS 5.5+ or equivalent', 'Motivation letter', 'Financial proof', 'Valid passport'],
  },
  australia: {
    name: 'Australia', flag: '🇦🇺', region: 'Pacific',
    universities: '45+', intake: 'February & July', duration: '3 – 4 Years',
    highlight: 'Top Ranked & Work Rights',
    tags: ['Top Ranked', 'Work Rights', 'PR Pathway'],
    heroColor: '#23AAA6',
    about: 'Australia is consistently ranked among the top study destinations globally. With 8 universities in the worlds top 100, a multicultural society, and strong post-study work opportunities, it offers Pakistani students an exceptional education and lifestyle. Australias immigration policies also provide clear pathways to permanent residency.',
    whyStudy: [
      '8 Australian universities rank in global top 100',
      'Work up to 48 hours per fortnight during studies',
      'Post-Study Work Visa of 2–4 years after graduation',
      'Clear Permanent Residency (PR) pathway for skilled graduates',
      'Multicultural, safe, and student-friendly society',
      'World-class infrastructure and research facilities',
    ],
    programs: ['Engineering', 'Business & MBA', 'IT & Cybersecurity', 'Medicine & Nursing', 'Architecture', 'Environmental Science'],
    topUniversities: ['University of Melbourne', 'Australian National University (ANU)', 'University of Sydney', 'University of Queensland', 'Monash University'],
    requirements: ['Minimum 60% in FSc/A-Levels', 'IELTS 6.0 – 6.5 overall', 'Genuine Temporary Entrant (GTE) statement', 'Financial proof', 'Valid passport'],
  },
  'new-zealand': {
    name: 'New Zealand', flag: '🇳🇿', region: 'Pacific',
    universities: '22+', intake: 'February & July', duration: '3 – 4 Years',
    highlight: 'Safe & High Quality of Life',
    tags: ['Safe Country', 'Work Rights', 'Quality Life'],
    heroColor: '#265D96',
    about: 'New Zealand is consistently ranked among the safest and most peaceful countries in the world. Its world-class universities, stunning natural environment, and generous student work rights make it an increasingly popular destination for Pakistani students. The countrys welcoming culture and straightforward visa process are major advantages.',
    whyStudy: [
      'One of the safest and most peaceful countries globally',
      'Work up to 20 hours per week during studies',
      'Post-Study Work Visa available after graduation',
      'Strong focus on research and innovation',
      'Stunning natural environment and high quality of life',
      'Welcoming, multicultural, and inclusive society',
    ],
    programs: ['Agriculture & Environmental Science', 'Business & Commerce', 'Engineering', 'IT & Computer Science', 'Health Sciences', 'Tourism & Hospitality'],
    topUniversities: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington', 'University of Canterbury', 'Massey University'],
    requirements: ['Minimum 55% in FSc/O-Levels', 'IELTS 6.0+ overall', 'Financial statement', 'Valid passport', 'Health & character checks'],
  },
  canada: {
    name: 'Canada', flag: '🇨🇦', region: 'Americas',
    universities: '60+', intake: 'September & January', duration: '3 – 4 Years',
    highlight: 'PR Pathway & Work Rights',
    tags: ['PR Pathway', 'Work Rights', 'Top Universities'],
    heroColor: '#23AAA6',
    about: 'Canada is the most sought-after study destination among Pakistani students today. Its combination of world-ranked universities, post-graduation work permits, and one of the clearest PR pathways in the world make it unmatched. Canada is also known for its multicultural, inclusive society that warmly welcomes international students.',
    whyStudy: [
      'Post-Graduation Work Permit (PGWP) of up to 3 years',
      'One of the clearest PR pathways for international graduates',
      'Work up to 20 hours per week on-campus during studies',
      'Multicultural, safe, and inclusive environment',
      'World-ranked universities across all disciplines',
      'Strong Pakistani community in major cities',
    ],
    programs: ['Computer Science & AI', 'Business & MBA', 'Engineering', 'Healthcare & Nursing', 'Law', 'Data Science'],
    topUniversities: ['University of Toronto', 'University of British Columbia (UBC)', 'McGill University', 'Seneca College', 'Humber College'],
    requirements: ['Minimum 60% in FSc/A-Levels', 'IELTS 6.0 – 6.5 overall', 'Statement of Purpose (SOP)', 'Financial proof (CAD 10,000+)', 'Valid passport'],
  },
  usa: {
    name: 'USA', flag: '🇺🇸', region: 'Americas',
    universities: '100+', intake: 'August & January', duration: '4 Years',
    highlight: 'Ivy League & Research',
    tags: ['Ivy League', 'Research', 'Global Network'],
    heroColor: '#265D96',
    about: 'The United States is home to the largest number of world-ranked universities, including the Ivy League institutions. An American degree carries unparalleled global prestige and opens doors to careers in every sector worldwide. With hundreds of universities offering diverse programs, students can find the perfect academic fit.',
    whyStudy: [
      'Home to the most world-ranked universities globally',
      'Ivy League and Tier-1 research universities',
      'Optional Practical Training (OPT) for 1–3 years post-graduation',
      'Unmatched campus life, research, and facilities',
      'Enormous scholarship and financial aid opportunities',
      'Global alumni network across every industry',
    ],
    programs: ['Computer Science & AI', 'Business & Finance', 'Engineering', 'Medicine & Life Sciences', 'Law', 'Arts & Liberal Studies'],
    topUniversities: ['Massachusetts Institute of Technology (MIT)', 'Stanford University', 'Harvard University', 'University of California', 'New York University (NYU)'],
    requirements: ['A-Levels / FSc with strong grades', 'SAT/ACT (for undergraduate)', 'IELTS 6.5+ or TOEFL 90+', 'Essays and recommendation letters', 'Financial statement'],
  },
  germany: {
    name: 'Germany', flag: '🇩🇪', region: 'Europe',
    universities: '35+', intake: 'October & April', duration: '3 – 4 Years',
    highlight: 'Free / Low Tuition EU',
    tags: ['Free Education', 'Engineering Hub', 'EU'],
    heroColor: '#23AAA6',
    about: 'Germany is one of the worlds leading academic and engineering powerhouses. Public universities in Germany charge minimal or no tuition fees for international students, making it an incredibly cost-effective destination. Germany strong industry links ensure excellent career opportunities after graduation in Europe and globally.',
    whyStudy: [
      'Most public universities charge zero or minimal tuition fees',
      'Globally recognized engineering and technical programs',
      'Strong industry connections and internship opportunities',
      '18-month post-study job seeker visa',
      'Central EU location with Schengen access',
      'High standard of living and student support',
    ],
    programs: ['Engineering & Technology', 'Computer Science', 'Natural Sciences', 'Business & Economics', 'Medicine', 'Architecture'],
    topUniversities: ['Technical University of Munich (TUM)', 'Ludwig Maximilian University', 'Heidelberg University', 'Humboldt University Berlin', 'RWTH Aachen University'],
    requirements: ['Strong FSc/A-Level grades (Math & Science)', 'German or English proficiency (varies by program)', 'APS certificate for Pakistani students', 'Blocked account (€11,208/year)', 'Valid passport'],
  },
  france: {
    name: 'France', flag: '🇫🇷', region: 'Europe',
    universities: '30+', intake: 'September & January', duration: '3 Years (Licence)',
    highlight: 'Prestige & Culture',
    tags: ['Prestigious', 'Culture', 'EU'],
    heroColor: '#265D96',
    about: 'France is a world leader in arts, fashion, gastronomy, and higher education. French universities and grandes écoles are among the most prestigious globally, attracting students from over 180 countries. France also offers a growing number of English-taught programs and generous scholarships for international students.',
    whyStudy: [
      'Home to some of Europe most prestigious institutions',
      'Growing number of English-taught Master programs',
      'Affordable tuition at public universities',
      'Rich cultural experience in one of Europe great cities',
      'Generous scholarships for international students',
      'Post-study work opportunities in a strong EU economy',
    ],
    programs: ['Business & Management (Grande École)', 'Arts & Design', 'Engineering', 'Political Science', 'Culinary Arts', 'Fashion & Luxury Management'],
    topUniversities: ['Sorbonne University', 'Sciences Po Paris', 'HEC Paris', 'École Polytechnique', 'INSEAD'],
    requirements: ['Strong academic record', 'DELF/DALF (French) or IELTS 6.0+ for English programs', 'Motivation letter and CV', 'Financial proof', 'Valid passport'],
  },
  netherlands: {
    name: 'Netherlands', flag: '🇳🇱', region: 'Europe',
    universities: '25+', intake: 'September & February', duration: '3 Years (BSc)',
    highlight: 'English Taught & Innovation',
    tags: ['English Taught', 'Innovation', 'EU'],
    heroColor: '#23AAA6',
    about: 'The Netherlands is one of the most international-friendly study destinations in Europe, with over 2,100 English-taught programs — more than any other non-English-speaking country. Dutch universities are known for their innovative, research-driven teaching methods and strong industry connections in technology and business.',
    whyStudy: [
      'Largest number of English-taught programs in non-English EU',
      'Innovative and internationally recognized teaching methods',
      'Strong focus on technology, design, and entrepreneurship',
      'One-year job seeker visa after graduation',
      'Highly international campus environments',
      'Central EU location with Schengen access',
    ],
    programs: ['Business & Economics', 'Engineering & Technology', 'Design & Architecture', 'Life Sciences', 'Social Sciences', 'Data Science & AI'],
    topUniversities: ['Delft University of Technology', 'University of Amsterdam', 'Leiden University', 'Eindhoven University of Technology', 'Erasmus University Rotterdam'],
    requirements: ['Minimum 60% in FSc/A-Levels', 'IELTS 6.0 – 6.5', 'Motivation letter', 'Financial proof (€11,000+/year)', 'Valid passport'],
  },
  poland: {
    name: 'Poland', flag: '🇵🇱', region: 'Europe',
    universities: '28+', intake: 'October & February', duration: '3 – 4 Years',
    highlight: 'Affordable EU & Schengen',
    tags: ['Affordable EU', 'Schengen', 'Safe'],
    heroColor: '#265D96',
    about: 'Poland is rapidly growing as a top destination for Pakistani students seeking affordable EU education. With a wide range of English-taught programs, low tuition fees, and Schengen access, Poland offers outstanding value. The country has a large and welcoming Pakistani student community and a straightforward visa process.',
    whyStudy: [
      'Some of the most affordable tuition fees in the EU',
      'Schengen membership for easy European travel',
      'Wide range of English-taught programs available',
      'Large and active Pakistani student community',
      'Safe and welcoming country with low crime rates',
      'Straightforward student visa process',
    ],
    programs: ['Medicine & Dentistry', 'Engineering', 'Business & Management', 'IT & Computer Science', 'Architecture', 'Social Sciences'],
    topUniversities: ['University of Warsaw', 'Jagiellonian University', 'Warsaw University of Technology', 'Adam Mickiewicz University', 'University of Wroclaw'],
    requirements: ['Minimum 50% in FSc/Matric', 'IELTS 5.5+ or equivalent', 'Motivation letter', 'Financial statement', 'Valid passport'],
  },
  hungary: {
    name: 'Hungary', flag: '🇭🇺', region: 'Europe',
    universities: '22+', intake: 'September & February', duration: '3 – 4 Years',
    highlight: 'EU Degree & Scholarships',
    tags: ['EU Degree', 'Affordable', 'Scholarships'],
    heroColor: '#23AAA6',
    about: 'Hungary is an increasingly popular EU study destination offering high-quality education at affordable costs. The Stipendium Hungaricum scholarship program provides full funding for hundreds of international students each year. Budapest, Hungary capital, is one of Europe most beautiful and student-friendly cities.',
    whyStudy: [
      'Stipendium Hungaricum — full scholarship for international students',
      'EU-recognized degrees at affordable tuition rates',
      'English-taught programs across all disciplines',
      'Beautiful and affordable capital city — Budapest',
      'Schengen access for travel across Europe',
      'Growing international student community',
    ],
    programs: ['Medicine & Dentistry', 'Engineering', 'Business & Economics', 'IT', 'Arts & Humanities', 'Natural Sciences'],
    topUniversities: ['Eötvös Loránd University (ELTE)', 'Budapest University of Technology', 'University of Debrecen', 'University of Pécs', 'Semmelweis University'],
    requirements: ['Minimum 60% for scholarship programs', 'IELTS 5.5+ or equivalent', 'Motivation letter', 'Recommendation letters', 'Valid passport'],
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' } }),
}

export default function CountryDetail() {
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

  const { slug } = useParams()
  const country = countriesData[slug]

  const heroGridColumns = isMobile ? '1fr' : '1fr 1fr'
  const whyStudyGridColumns = isMobile ? '1fr' : 'repeat(2, 1fr)'
  const requirementsGridColumns = isMobile ? '1fr' : '1fr 1fr'

  if (!country) {
    return (
      <main style={{ paddingTop: isMobile ? '120px' : '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: isMobile ? '120px 20px 60px' : '140px 24px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: '64px' }}>🌍</p>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>Country not found</h2>
        <Link to="/countries" style={{ color: '#23AAA6', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FiArrowLeft size={16} /> Back to Countries
        </Link>
      </main>
    )
  }

  return (
    <main style={{ overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: isMobile ? '120px' : '140px', 
        paddingBottom: isMobile ? '50px' : '80px',
        background: 'linear-gradient(160deg, #f0fafa 0%, #eef4fb 60%, #f9fafb 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: isMobile ? '250px' : '500px', height: isMobile ? '250px' : '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(35,170,166,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
            style={{ marginBottom: isMobile ? '24px' : '36px' }}>
            <Link to="/countries" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontWeight: '500', fontSize: isMobile ? '13px' : '14px', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#23AAA6'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}>
              <FiArrowLeft size={15} /> All Countries
            </Link>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: heroGridColumns, gap: isMobile ? '36px' : '72px', alignItems: 'center' }}>
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '16px', marginBottom: '24px' }}>
                  <span style={{ fontSize: isMobile ? '52px' : '72px', lineHeight: '1' }}>{country.flag}</span>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#9ca3af', letterSpacing: '1px', textTransform: 'uppercase' }}>{country.region}</span>
                    <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', lineHeight: '1.1', marginTop: '4px' }}>
                      Study in<br /><span style={{ color: '#23AAA6' }}>{country.name}</span>
                    </h1>
                  </div>
                </div>

                <p style={{ fontSize: isMobile ? '15px' : '17px', color: '#6b7280', lineHeight: '1.8', marginBottom: '28px' }}>{country.about}</p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
                  {country.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '12px', fontWeight: '600', padding: '6px 14px', borderRadius: '100px', background: 'rgba(35,170,166,0.08)', color: '#23AAA6', border: '1px solid rgba(35,170,166,0.15)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '12px', background: 'linear-gradient(135deg, #23AAA6, #265D96)', color: 'white', fontWeight: '600', fontSize: '15px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(35,170,166,0.35)' }}>
                  Apply for {country.name} <FiArrowRight size={17} />
                </Link>
              </motion.div>
            </div>

            {/* Right — Info card */}
            <motion.div
              initial={{ opacity: isMobile ? 1 : 0, x: isMobile ? 0 : 40 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.div
                animate={{ y: isMobile ? [0, -6, 0] : [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div style={{ background: 'white', borderRadius: '24px', padding: isMobile ? '24px' : '36px', boxShadow: '0 24px 64px rgba(38,93,150,0.12)', border: '1px solid rgba(35,170,166,0.1)' }}>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#9ca3af', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>Quick Overview</p>
                  {[
                    { icon: <FiBook size={16} />, label: 'Universities', value: country.universities },
                    { icon: <FiClock size={16} />, label: 'Program Duration', value: country.duration },
                    { icon: <FiMapPin size={16} />, label: 'Intake Sessions', value: country.intake },
                    { icon: <FiGlobe size={16} />, label: 'Region', value: country.region },
                  ].map((item, i) => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 0', borderBottom: i < 3 ? '1px solid #f3f4f6' : 'none' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(35,170,166,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#23AAA6', flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '500' }}>{item.label}</p>
                        <p style={{ fontSize: '15px', fontWeight: '700', color: '#111827', marginTop: '2px' }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: '20px', padding: '16px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(35,170,166,0.08), rgba(38,93,150,0.06))', border: '1px solid rgba(35,170,166,0.12)' }}>
                    <p style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6' }}>✦ Free consultation available</p>
                    <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Talk to an expert about studying in {country.name}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY STUDY HERE ── */}
      <section style={{ padding: isMobile ? '60px 16px' : '100px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: isMobile ? '32px' : '48px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Top Reasons</span>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              Why Study in {country.name}?
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: whyStudyGridColumns, gap: isMobile ? '12px' : '16px' }}>
            {country.whyStudy.map((point, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: isMobile ? '16px' : '20px', borderRadius: '14px', background: '#f9fafb', border: '1px solid #f3f4f6' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(35,170,166,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                  <FiCheck size={14} color="#23AAA6" strokeWidth={3} />
                </div>
                <p style={{ fontSize: '14px', color: '#374151', fontWeight: '500', lineHeight: '1.65' }}>{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR PROGRAMS ── */}
      <section style={{ padding: isMobile ? '50px 16px' : '80px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: isMobile ? '28px' : '40px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Academic Fields</span>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              Popular Programs
            </h2>
          </motion.div>
          <div style={{ display: 'flex', gap: isMobile ? '8px' : '12px', flexWrap: 'wrap' }}>
            {country.programs.map((prog, i) => (
              <motion.div key={prog} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -3, scale: 1.02 }}
                style={{ padding: isMobile ? '12px 18px' : '14px 22px', borderRadius: '12px', background: 'white', border: '1.5px solid #e5e7eb', cursor: 'default', transition: 'all 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#23AAA6'; e.currentTarget.style.color = '#23AAA6' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#374151' }}
              >
                <span style={{ fontSize: isMobile ? '13px' : '14px', fontWeight: '600', color: 'inherit', transition: 'color 0.2s' }}>{prog}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP UNIVERSITIES ── */}
      <section style={{ padding: isMobile ? '50px 16px' : '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: isMobile ? '28px' : '40px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Where Our Students Study</span>
            <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px' }}>
              Top Universities in {country.name}
            </h2>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '10px' : '12px' }}>
            {country.topUniversities.map((uni, i) => (
              <motion.div key={uni} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ x: 6 }}
                style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: isMobile ? '16px 18px' : '20px 24px', borderRadius: '14px', background: '#f9fafb', border: '1px solid #f3f4f6', transition: 'all 0.2s ease', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(35,170,166,0.3)'; e.currentTarget.style.background = 'rgba(35,170,166,0.03)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#f3f4f6'; e.currentTarget.style.background = '#f9fafb' }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #23AAA6, #265D96)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '700', flexShrink: 0 }}>
                  {i + 1}
                </div>
                <p style={{ fontSize: isMobile ? '14px' : '15px', fontWeight: '600', color: '#111827' }}>{uni}</p>
                <FiAward size={16} color="#23AAA6" style={{ marginLeft: 'auto', flexShrink: 0 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section style={{ padding: isMobile ? '50px 16px' : '80px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: requirementsGridColumns, gap: isMobile ? '36px' : '64px', alignItems: 'start' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#23AAA6', letterSpacing: '1px', textTransform: 'uppercase' }}>Eligibility</span>
              <h2 style={{ fontSize: 'clamp(26px,4vw,38px)', fontFamily: "'Fraunces',serif", fontWeight: '600', color: '#111827', marginTop: '10px', marginBottom: isMobile ? '20px' : '28px', lineHeight: '1.25' }}>
                Admission Requirements
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {country.requirements.map((req, i) => (
                  <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: isMobile ? '14px' : '16px 18px', borderRadius: '12px', background: 'white', border: '1px solid #f3f4f6' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(35,170,166,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <FiShield size={12} color="#23AAA6" />
                    </div>
                    <p style={{ fontSize: '14px', color: '#374151', fontWeight: '500', lineHeight: '1.6' }}>{req}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div style={{ background: 'linear-gradient(135deg, #23AAA6, #265D96)', borderRadius: '24px', padding: isMobile ? '32px 24px' : '48px 36px', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
                <p style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Ready to Apply?</p>
                <h3 style={{ fontSize: isMobile ? '24px' : '28px', fontFamily: "'Fraunces',serif", fontWeight: '600', marginBottom: '16px', lineHeight: '1.3' }}>
                  Start Your Journey to {country.name}
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '32px' }}>
                  Book a free consultation with our experts. We'll assess your profile and guide you through the entire process.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 24px', borderRadius: '12px', background: 'white', color: '#23AAA6', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}>
                    Get Free Consultation <FiArrowRight size={16} />
                  </Link>
                  <Link to="/countries" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px 24px', borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.3)', color: 'white', fontWeight: '600', fontSize: '14px', textDecoration: 'none' }}>
                    <FiArrowLeft size={15} /> Explore Other Countries
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}