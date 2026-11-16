import React, { useState, useEffect } from 'react'

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('rendering')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('skills')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const categories = [
    { id: 'rendering', name: 'Rendering & Visuals' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'software', name: 'Software' },
    { id: 'design', name: 'Design' }
  ]

  const skillsData = {
    rendering: [
      { name: 'Photorealistic Rendering', level: 95, icon: '🖼️' },
      { name: 'Motion Study & Animation', level: 90, icon: '🎥' },
      { name: 'Exploded View', level: 92, icon: '🔍' },
    ],
    engineering: [
      { name: 'Engineering Drawings', level: 88, icon: '📐' },
      { name: 'Structural Analysis', level: 85, icon: '🏗️' },
      { name: 'Manufacturing Workflow', level: 82, icon: '🏭' },
      { name: 'CNC Machine Operation', level: 75, icon: '⚙️' },
    ],
    software: [
      { name: 'Autodesk Inventor', level: 92, icon: '🛠️' },
      { name: 'Autodesk AutoCAD', level: 40, icon: '📏' },
      { name: 'Mastercam', level: 20, icon: '⚙️' },
      { name: 'Autodesk Fusion 360', level: 35, icon: '🔧' },
    ],
    design: [
      { name: 'GD&T Expert', level: 85, icon: '📏' },
      { name: 'Design for Manufacturing (DFM)', level: 88, icon: '🏭' },
      { name: 'Technical Documentation', level: 75, icon: '📝' },
      ]
  }

  return (
    <section id="skills" className={`skills-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-header">
        <span className="section-label">My Skills</span>
        <h2 className="section-title">Technologies I work with</h2>
      </div>

      <div className="skills-container">
        <div className="skills-nav">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`skill-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
            <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level-text">{skill.level}%</span>
                </div>
              </div>
              <div className="skill-progress">
                <div 
                  className="skill-progress-bar" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-showcase">
          <div className="tech-badge">Inventor</div>
          <div className="tech-badge">AutoCAD</div>
          <div className="tech-badge">Mastercam</div>
          <div className="tech-badge">Fusion 360</div>
          <div className="tech-badge">SolidWorks</div>
          <div className="tech-badge">CNC Machining</div>
          <div className="tech-badge">3D Printing</div>
          <div className="tech-badge">OneShape</div>
        </div>
      </div>
    </section>
  )
}

export default Skills
