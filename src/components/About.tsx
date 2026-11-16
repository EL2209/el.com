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
      icon: '📐',
      title: 'Clean Detail Drawing',
      description: 'Clear dimensions, tolerances, and annotations in every blueprint, so machinists can work fast without guessing.'
    },
    {
      icon: '🎯',
      title: 'Physics-Accurate Design',
      description: 'Every design follows real-world physical laws 100% — loads, fits, and motions that actually work when manufactured.'
    },
    {
      icon: '📏',
      title: 'Precision',
      description: 'Attention to detail and a commitment to quality ensure that every aspect of the design is executed to the highest standard.'
    }
  ]

  const stats = [
    { number: '3', label: 'Competitions Joined' },
    { number: '50+', label: 'Projects & Sketches' },
    { number: '4', label: 'CAD Software' },
    { number: '100%', label: 'Physics-Accurate Designs' }
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
              <img 
                src="/profil.jpg" 
                alt="Profile Photo" 
                className="profile-image" 
                />
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
            <p className="about-intro">
              Currently I am a Machining Engineering student at SMKN 1 Pungging, Mojokerto, doing my internship in the industry — operating real CNC machines from workpiece setup to full production runs, and practicing CAM programming with Mastercam.
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
    </section>
    )
}

export default About
