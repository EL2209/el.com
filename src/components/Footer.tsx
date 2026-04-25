import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
        </svg>
      ),
      url: 'https://github.com'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      url: 'https://linkedin.com'
    },
    {
      name: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      ),
      url: 'https://twitter.com'
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-text">Portfolio</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Creating digital experiences that matter.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Alex Johnson. All rights reserved.</p>
          <p className="footer-credits">
            Built with <span className="heart">❤</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
