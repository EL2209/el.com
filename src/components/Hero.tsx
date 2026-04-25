import React, { useEffect, useState } from 'react'

interface HeroProps {
  scrollToSection: (id: string) => void
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const texts = ['Full Stack Developer', 'UI/UX Designer', 'Creative Technologist', 'Problem Solver']

  useEffect(() => {
    const typeEffect = () => {
      const fullText = texts[currentIndex]
      
      if (!isDeleting) {
        setTypedText(fullText.substring(0, currentIndex + 1))
        if (currentIndex === fullText.length - 1) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else {
          setCurrentIndex(prev => prev + 1)
        }
      } else {
        setTypedText(fullText.substring(0, currentIndex - 1))
        if (currentIndex === 0) {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        } else {
          setCurrentIndex(prev => prev - 1)
        }
      }
    }

    const timeout = setTimeout(typeEffect, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, texts])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 7}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span>Available for new opportunities</span>
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">Hello, I'm</span>
          <span className="title-name">Dhaniyal El</span>
          <span className="title-role">
          </span>
        </h1>
        
        <p className="hero-description">
          create designs for manufacturing and display them in 3D with high detail and precision.
        </p>
        
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero
