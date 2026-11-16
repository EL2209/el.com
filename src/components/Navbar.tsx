import React from 'react'

interface NavbarProps {
  scrolled: boolean
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
  scrollToSection: (id: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">Dhaniyal</span>
          <span className="logo-dot">.</span>
        </a>

        <button 
          className="navbar-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button 
                className="navbar-link" 
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
