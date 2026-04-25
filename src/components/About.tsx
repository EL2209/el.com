import React, { useState, useEffect } from 'react'

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const values = [
    {
      icon: '💡',
      title: 'Clean Detail Drawing',
      description: 'Writing maintainable, efficient, and well-documented code is at the heart of everything I build.'
    },
    {
      icon: '🎯',
      title: 'User Experience',
      description: 'Every dimension and detail of the design is carefully crafted to create intuitive and engaging user experiences.'
    },
    {
      icon: '📏',
      title: 'Precision',
      description: 'Attention to detail and a commitment to quality ensure that every aspect of the design is executed to the highest standard.'
    }
  ]

  const stats = [
    { number: '1', label: 'Years Experience' },
    { number: '50+', label: 'Projects Done' },
    { number: '30+', label: 'Participate in the Competition' },
    { number: '10/7', label: 'Support' }
  ]

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-header">
        <span className="section-label">About Me</span>
        <h2 className="section-title">Passionate about creating <span className="gradient-text">Design Engineering</span></h2>
      </div>

      <div className="about-grid">
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              <div className="profile-placeholder">
                <div className="profile-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                    <path d="M6 21a6 6 0 0112 0" />
                    <path d="M6 21s1.5-6 6-6 6 6 6 6" />
                  </svg>
                </div>
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-info">
            <p className="about-intro">
              I am a 3D designer for manufacturing and create blueprints containing dimensions and tolerances with high accuracy and precision to simplify the work. I also create 3D model representations of the original object. The design can be used for machining and can be 3D printed using programs such as Mastercam, Fusion 360 or Solidcam. The programs I use are Autodesk Inventor and Autodesk Autocad, I continue to learn new programs to expand my skills. 
            </p>

            <div className="values-grid">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`value-card ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveTab(index)
                    }
                  }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <div className="value-content">
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
