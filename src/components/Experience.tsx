import React, { useEffect, useState } from 'react'

interface ExperienceItem {
  id: number
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
}

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeItem, setActiveItem] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('experience')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'Machining Workshop — Industry Internship (PKL)',
      role: 'CNC Machinist Trainee',
      period: '2026 — Present',
      description: 'Internship at a machining company while studying at SMKN 1 Pungging, Mojokerto.',
      achievements: [
        'Operate CNC machines fully — from workpiece setup to running production (excluding CAM programming)',
        'Learned Mastercam CAM programming fundamentals',
        'Practiced 2D drafting with AutoCAD',
        'Tried SolidWorks for part modeling on the shop floor'
      ]
    },
    {
      id: 2,
      company: 'LKS Provinsi Jawa Timur',
      role: 'Mechanical CAD — Rank 6 of ~30 participants',
      period: '2025',
      description: 'Represented the region in the East Java Provincial Vocational Skills Competition (LKS).',
      achievements: [
        'Ranked 6th out of around 30 participants',
        'Built a complete competition model under exam time pressure',
        'Prepared with practice projects from previous LKS seasons'
      ]
    },
    {
      id: 3,
      company: 'Universitas Negeri Surabaya (Unesa)',
      role: 'CAD Competition — 3rd Place',
      period: '2024',
      description: 'University-level CAD competition open to vocational students.',
      achievements: [
        'Won 3rd place against university-level participants',
        'Delivered a full part design with detail drawing within the time limit'
      ]
    },
    {
      id: 4,
      company: 'Independent Projects',
      role: 'Design Engineer & 3D Printing',
      period: 'Ongoing',
      description: 'Personal projects beyond school assignments — designing, simulating, and printing real parts.',
      achievements: [
        'Design engineering projects that follow real-world physical laws 100%',
        '3D printing builds from model to finished physical part',
        'Daily sketch & drawing practice inspired by Instagram challenges'
      ]
    }
  ]

  return (
    <section id="experience" className={`experience-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-header">
        <span className="section-label">Experience</span>
        <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
      </div>

      <div className="experience-container">
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${activeItem === index ? 'active' : ''}`}
              onClick={() => setActiveItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveItem(index)
                }
              }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-period">{exp.period}</div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="achievement-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>Physics-Based Design</h3>
            <p>Designs that follow real-world physical laws 100% — what I model actually works when built.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Manufacturing-Ready</h3>
            <p>Detail drawings with proper dimensions and tolerances, straight from CAD to the CNC shop floor.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <h3>From Model to Machine</h3>
            <p>Hands-on with 3D printing and real CNC machining — I know how my designs meet the physical world.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
