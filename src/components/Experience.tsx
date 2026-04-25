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
      company: 'Tech Innovations Inc.',
      role: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications and mentoring junior developers.',
      achievements: [
        'Led a team of 5 developers to deliver 10+ major projects',
        'Reduced page load time by 60% through optimization',
        'Implemented CI/CD pipelines improving deployment efficiency by 40%'
      ]
    },
    {
      id: 2,
      company: 'Digital Solutions Co.',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client websites and web applications.',
      achievements: [
        'Built 20+ responsive websites for various clients',
        'Integrated payment gateways for e-commerce platforms',
        'Collaborated with design team to implement pixel-perfect UIs'
      ]
    },
    {
      id: 3,
      company: 'StartUp Hub',
      role: 'Frontend Developer',
      period: '2019 - 2020',
      description: 'Focused on building user interfaces and improving user experience.',
      achievements: [
        'Developed reusable component library used across 5 products',
        'Improved accessibility scores to 95+ on all projects',
        'Created interactive data visualizations for analytics dashboard'
      ]
    },
    {
      id: 4,
      company: 'Freelance',
      role: 'Web Developer',
      period: '2018 - 2019',
      description: 'Worked with diverse clients to deliver custom web solutions.',
      achievements: [
        'Delivered 15+ projects for clients worldwide',
        'Maintained 100% client satisfaction rate',
        'Specialized in WordPress and custom web applications'
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
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Technical Leadership</h3>
            <p>Leading teams and making architectural decisions for scalable solutions.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>Agile Methodology</h3>
            <p>Experienced in Scrum and Kanban for efficient project delivery.</p>
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
            <h3>Mentorship</h3>
            <p>Passionate about helping junior developers grow their skills.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
