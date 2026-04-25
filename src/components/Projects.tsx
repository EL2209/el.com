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
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with real-time inventory, secure payments, and admin dashboard.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop interface, and team features.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      tags: ['Vue.js', 'Firebase', 'Tailwind'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      description: 'Mobile application for tracking workouts, nutrition, and progress with AI-powered insights.',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations and dark mode support.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media performance across multiple platforms.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
      links: { demo: '#', github: '#' }
    },
    {
      id: 6,
      title: 'Weather Application',
      description: 'Real-time weather app with beautiful visualizations and location-based forecasts.',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      tags: ['Flutter', 'OpenWeather API'],
      links: { demo: '#', github: '#' }
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' }
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
