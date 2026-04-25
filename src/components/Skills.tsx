import React, { useState, useEffect } from 'react'

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('frontend')

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
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' },
    { id: 'design', name: 'Design' }
  ]

  const skillsData = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'Next.js', level: 88, icon: '▲' },
      { name: 'Vue.js', level: 80, icon: '💚' },
      { name: 'HTML5/CSS3', level: 95, icon: '🌐' }
    ],
    backend: [
      { name: 'Node.js', level: 88, icon: '🟢' },
      { name: 'Express', level: 85, icon: '🚂' },
      { name: 'Python', level: 82, icon: '🐍' },
      { name: 'PostgreSQL', level: 80, icon: '🐘' },
      { name: 'MongoDB', level: 78, icon: '🍃' },
      { name: 'GraphQL', level: 75, icon: '◈' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 92, icon: '📦' },
      { name: 'Docker', level: 78, icon: '🐳' },
      { name: 'AWS', level: 75, icon: '☁️' },
      { name: 'Figma', level: 85, icon: '🎭' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Webpack', level: 80, icon: '🕸️' }
    ],
    design: [
      { name: 'UI/UX Design', level: 85, icon: '🎨' },
      { name: 'Figma', level: 88, icon: '🎭' },
      { name: 'Adobe XD', level: 75, icon: '📐' },
      { name: 'Prototyping', level: 82, icon: '📋' },
      { name: 'Design Systems', level: 80, icon: '🧩' },
      { name: 'Accessibility', level: 85, icon: '♿' }
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
          <div className="tech-badge">React</div>
          <div className="tech-badge">TypeScript</div>
          <div className="tech-badge">Node.js</div>
          <div className="tech-badge">Python</div>
          <div className="tech-badge">PostgreSQL</div>
          <div className="tech-badge">Docker</div>
          <div className="tech-badge">AWS</div>
          <div className="tech-badge">Git</div>
        </div>
      </div>
    </section>
  )
}

export default Skills
