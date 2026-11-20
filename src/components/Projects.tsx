import React, { useState, useEffect } from 'react'

interface Project {
  id: number
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  links: { demo?: string; github?: string }
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const projects: Project[] = [
    {
      id: 1,
      title: 'Frame Generators',
      description: 'Features found in Autodesk Inventor, used for the framework/structure of an object',
      category: 'drawing',
      image: '',
      tags: ['Inventor', 'Autodesk', 'Frame'],
      links: { demo: 'https://pdf.ac/HPXPTvq6', github: '#' }
    },
    {
      id: 2,
      title: '3D Modeling And Assemblies',
      description: 'Create 3D parts and combine them into 1 functional whole object.',
      category: 'modeling',
      image: '',
      tags: ['Inventor', 'OneShape', 'Assemblies'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 3,
      title: 'Physics-Accurate Design Project',
      description: 'Personal design engineering project — modeled to follow real-world physical laws 100%, from loads to motion.',
      category: 'modeling',
      image: '',
      tags: ['Inventor', 'Design Engineer', 'Physics'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 4,
      title: 'LKS Practice Project',
      description: 'Practice model built from a past LKS competition brief, as preparation for LKS Provinsi Jawa Timur.',
      category: 'drawing',
      image: '',
      tags: ['Inventor', 'LKS', 'Competition'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 5,
      title: '3D Printed Build',
      description: 'From 3D model to a real physical part — designed, sliced, and printed end to end.',
      category: 'printing',
      image: '',
      tags: ['3D Print', 'Modeling', 'Rapid Prototyping'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 6,
      title: 'Sketch & Drawing Studies',
      description: 'Daily drawing practice inspired by Instagram challenges — keeping the sketching instinct sharp.',
      category: 'drawing',
      image: '/bracket.jpg',
      tags: ['Sketch', 'Technical Drawing', 'Practice'],
      links: { demo: '#', github: '#' }
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'drawing', label: 'Detail Drawing' },
    { id: 'modeling', label: '3D Modeling' },
    { id: 'printing', label: '3D Printing' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-header">
        <span className="section-label">My Projects</span>
        <h2 className="section-title">Featured <span className="gradient-text">Work</span></h2>
      </div>

      <div className="projects-container">
        <div className="projects-filter">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}

            >
              <div className="project-image">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image-img"
                    loading="lazy"
                  />
                )}
                <div className="image-overlay">
                  <div className="project-links">
                    {project.links.demo && (
                      <a href={project.links.demo} className="project-link" aria-label="View Demo">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        <span>Demo</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} className="project-link" aria-label="View Code">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
