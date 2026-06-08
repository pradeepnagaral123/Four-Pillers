import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import CtaSection from '../components/CtaSection'
import ScrollReveal from '../components/ScrollReveal'
import heroBg from '../assets/images/hero-bg.png'
import useParallax from '../hooks/useParallax'

const services = [
  { icon: 'fa-solid fa-house-chimney', title: 'Residential Design', desc: 'Beautiful, functional homes tailored to your lifestyle and taste.' },
  { icon: 'fa-solid fa-building', title: 'Commercial Design', desc: 'Innovative commercial spaces that inspire productivity and brand identity.' },
  { icon: 'fa-solid fa-pen-ruler', title: 'Space Planning', desc: 'Optimized layouts that maximize functionality and flow.' },
  { icon: 'fa-solid fa-couch', title: 'Furniture Design', desc: 'Custom furniture pieces crafted to complement your space perfectly.' },
  { icon: 'fa-solid fa-lightbulb', title: 'Lighting Design', desc: 'Strategic lighting solutions that transform ambiance and mood.' },
  { icon: 'fa-solid fa-palette', title: 'Color Consultation', desc: 'Expert color palettes that define the character of your space.' },
]

const portfolioItems = [
  { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', title: 'Modern Luxury Villa', cat: 'Residential' },
  { img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80', title: 'Executive Office Suite', cat: 'Commercial' },
  { img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', title: 'Minimalist Penthouse', cat: 'Residential' },
]

export default function Home() {
  const heroParallaxRef = useParallax(0.3)
  const heroContentRef = useParallax(-0.04)
  const heroSectionRef = useRef(null)

  useEffect(() => {
    const section = heroSectionRef.current
    if (!section) return
    const onMove = (e) => {
      const rect = section.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6
      section.style.setProperty('--mouse-x', x)
      section.style.setProperty('--mouse-y', y)
    }
    section.addEventListener('mousemove', onMove)
    return () => section.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <section className="hero" ref={heroSectionRef}>
        <div className="hero-bg" ref={heroParallaxRef}>
          <img src={heroBg} alt="Premium Interior Design" />
        </div>
        <div className="container" ref={heroContentRef}>
          <div className="hero-content">
            <span className="hero-tag">Premium Interior Design Studio</span>
            <h1 className="hero-title">Designing Spaces That <span>Inspire</span> & Elevate</h1>
            <p className="hero-desc">We craft bespoke interiors that blend timeless elegance with modern sophistication, transforming your vision into extraordinary living spaces.</p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">View Our Work <i className="fas fa-arrow-right"></i></Link>
              <Link to="/book-consultation" className="btn btn-outline-light">Book Consultation</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <ScrollReveal>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle">From concept to completion, we offer comprehensive interior design services tailored to your unique vision.</p>
          </div>
          <div className="services-grid">
            {services.slice(0, 3).map((s, i) => (
              <div key={i} className="service-card">
                <div className="icon"><i className={s.icon}></i></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/services" className="btn btn-outline">View All Services <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="section" style={{ background: 'var(--accent)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Explore our curated selection of signature projects that showcase our design excellence.</p>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <div key={i} className="portfolio-item">
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <p>{item.cat}</p>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/portfolio" className="btn btn-outline">View Full Portfolio <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-image">
              <div className="about-img-wrapper">
                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="About Four Pillers Interiors" />
              </div>
              <div className="experience-badge">
                <div className="number">15+</div>
                <div className="label">Years Experience</div>
              </div>
            </div>
            <div className="about-intro-text">
              <span className="section-tag">About Us</span>
              <h2>Creating Timeless Interiors Since 2009</h2>
              <p>Four Pillers Interiors is a premier design studio dedicated to creating extraordinary spaces that blend beauty with functionality. Our team of award-winning designers brings passion and precision to every project.</p>
              <p>We believe that great design has the power to transform lives. Every space we create tells a unique story, reflecting the personality and aspirations of our clients.</p>
              <div className="about-features">
                <div className="about-feature-item">
                  <div className="icon"><i className="fas fa-check-circle"></i></div>
                  <h4>500+</h4>
                  <p>Projects Completed</p>
                </div>
                <div className="about-feature-item">
                  <div className="icon"><i className="fas fa-award"></i></div>
                  <h4>25+</h4>
                  <p>Design Awards</p>
                </div>
                <div className="about-feature-item">
                  <div className="icon"><i className="fas fa-users"></i></div>
                  <h4>50+</h4>
                  <p>Expert Designers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <CtaSection />
    </>
  )
}
