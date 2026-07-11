import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add a blur effect when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --accent-cyan: #38bdf8;
          --text-main: #f8fafc;
          --text-muted: #cbd5e1;
          --glass-bg: rgba(15, 23, 42, 0.7);
          --glass-border: rgba(255, 255, 255, 0.08);
        }

        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.3s ease;
          padding: ${isScrolled ? '1rem 2rem' : '1.5rem 2rem'};
          background: ${isScrolled ? 'var(--glass-bg)' : 'transparent'};
          backdrop-filter: ${isScrolled ? 'blur(20px)' : 'none'};
          -webkit-backdrop-filter: ${isScrolled ? 'blur(20px)' : 'none'};
          border-bottom: ${isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent'};
        }

        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo Styling */
        .nav-logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .nav-logo span {
          color: var(--accent-cyan);
        }

        /* Desktop Navigation Links */
        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-main);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--accent-cyan);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Resume Button */
        .resume-btn {
          padding: 0.6rem 1.5rem;
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .resume-btn:hover {
          background: rgba(56, 189, 248, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.15);
        }

        /* Mobile Hamburger Menu Icon */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          font-size: 1.5rem;
          cursor: pointer;
        }

        /* Mobile Dropdown */
        .mobile-nav {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
          padding: 1.5rem 2rem;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
        }

        .mobile-nav.open {
          display: flex;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none; /* Hide desktop links on mobile */
          }
          .mobile-menu-toggle {
            display: block; /* Show hamburger on mobile */
          }
        }
      `}</style>

      <nav className="navbar-container">
        <div className="navbar-content">
          
          {/* Logo */}
          <a href="#" className="nav-logo">
            Hailemichael<span>.</span>
          </a>

          {/* Desktop Nav - Corrected Link */}
          <div className="nav-links">
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="/hailemichaelresume.pdf?v=1" target="_blank" rel="noopener noreferrer" className="resume-btn">
              Resume
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Nav Dropdown - Corrected Link */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#skills" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="/hailemichaelresume.pdf?v=1" target="_blank" rel="noopener noreferrer" className="resume-btn" style={{display: 'inline-block', width: 'fit-content', margin: '0 auto'}}>
            Resume
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;