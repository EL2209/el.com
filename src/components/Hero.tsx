import React, { useEffect, useState } from 'react'

interface HeroProps {
  scrollToSection: (id: string) => void
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const texts = ['Design Engineer', '3D Modeler', 'CAD Drafter', 'CNC Machinist']

  useEffect(() => {
    const fullText = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = fullText.substring(0, charIndex + 1)
        setTypedText(next)
        if (charIndex === fullText.length - 1) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else {
          setCharIndex(prev => prev + 1)
        }
      } else {
        const next = fullText.substring(0, charIndex - 1)
        setTypedText(next)
        if (charIndex === 1) {
          setIsDeleting(false)
          setCharIndex(0)
          setTextIndex(prev => (prev + 1) % texts.length)
        } else {
          setCharIndex(prev => prev - 1)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts])

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
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </span>
        </h1>
        
        <p className="hero-description">
          I create designs for manufacturing and display them in 3D with high detail and precision.
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
            <span className="stat-number">3</span>
            <span className="stat-label">Competitions Joined</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects & Sketches</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">CAD Software</span>
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
