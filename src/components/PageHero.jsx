import { Link } from 'react-router-dom'
import heroBg from '../assets/images/hero-bg.png'
import useParallax from '../hooks/useParallax'

export default function PageHero({ title, bgImage }) {
  const parallaxRef = useParallax(0.3)

  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <img ref={parallaxRef} src={bgImage || heroBg} alt={title} />
      </div>
      <div className="container">
        <h1 className="page-hero-title">{title}</h1>
        <div className="page-hero-breadcrumb">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  )
}
