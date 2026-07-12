import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbMenu, TbX } from 'react-icons/tb';

// 1. DATA EXTRACTION: Define links outside to prevent reallocation
const NAV_LINKS = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth frosted glass transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --nav-text-main: #232524;
          --nav-text-muted: #5C605E;
          --nav-accent: #C08457; 
          --nav-glass-bg: rgba(252, 251, 250, 0.85); 
          --nav-glass-border: rgba(220, 218, 213, 0.8);
          --nav-focus-ring: #C08457;
        }

        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease, border 0.4s ease;
          padding: ${isScrolled ? '1rem 2rem' : '1.5rem 2rem'};
          background: ${isScrolled ? 'var(--nav-glass-bg)' : 'transparent'};
          backdrop-filter: ${isScrolled ? 'blur(20px)' : 'none'};
          -webkit-backdrop-filter: ${isScrolled ? 'blur(20px)' : 'none'};
          border-bottom: ${isScrolled ? '1px solid var(--nav-glass-border)' : '1px solid transparent'};
          box-shadow: ${isScrolled ? '0 4px 30px rgba(35, 37, 36, 0.03)' : 'none'};
          font-family: 'Inter', sans-serif;
        }

        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Editorial Logo Styling */
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--nav-text-main);
          text-decoration: none;
          letter-spacing: -0.02em;
          outline: none;
        }

        .nav-logo span {
          color: var(--nav-accent);
        }

        .nav-logo:focus-visible {
          outline: 2px solid var(--nav-focus-ring);
          outline-offset: 4px;
          border-radius: 4px;
        }

        /* Desktop Navigation Links */
        .nav-list {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: var(--nav-text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          position: relative;
          outline: none;
          padding: 0.4rem 0;
          display: inline-block;
        }

        .nav-link:hover, .nav-link:focus-visible {
          color: var(--nav-accent);
        }

        .nav-link:focus-visible {
          outline: 2px solid var(--nav-focus-ring);
          outline-offset: 4px;
          border-radius: 2px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--nav-accent);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Premium Resume Button */
        .resume-btn {
          padding: 0.7rem 1.6rem;
          background: transparent;
          color: var(--nav-text-main);
          border: 1px solid var(--nav-glass-border);
          border-radius: 2rem; 
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-decoration: none;
          outline: none;
          display: inline-block;
        }

        .resume-btn:focus-visible {
          outline: 2px solid var(--nav-focus-ring);
          outline-offset: 4px;
        }

        /* Mobile Hamburger Toggle */
        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--nav-text-main);
          font-size: 1.8rem;
          cursor: pointer;
          padding: 0.4rem;
          border-radius: 0.5rem;
          outline: none;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-toggle:focus-visible {
          outline: 2px solid var(--nav-focus-ring);
        }

        /* Mobile Dropdown - Light Frosted Glass */
        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(252, 251, 250, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--nav-glass-border);
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(35, 37, 36, 0.08);
          transform-origin: top center;
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        @media (min-width: 769px) {
          .mobile-menu-toggle { display: none !important; }
          .mobile-nav { display: none !important; }
        }

        @media (max-width: 768px) {
          .nav-list { display: none; }
          .mobile-menu-toggle { display: flex !important; }
        }

        /* Graceful Degradation */
        @media (prefers-reduced-motion: reduce) {
          .navbar-wrapper, .nav-link::after {
            transition: none !important;
          }
        }
      `}</style>

      {/* Main Navigation Wrapper with entrance animation */}
      <motion.nav 
        className="navbar-wrapper" 
        aria-label="Main Navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-content">
          
          <motion.a 
            href="#" 
            className="nav-logo" 
            aria-label="Hailemichael Mekonenn - Home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hailemichael<span>.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <motion.a 
                  href={link.href} 
                  className="nav-link"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
            <li>
              <motion.a 
                href="/hailemichaelresume.pdf?v=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-btn"
                aria-label="View Resume (opens in a new tab)"
                whileHover={{ backgroundColor: '#232524', color: '#ffffff', y: -2, boxShadow: '0 4px 15px rgba(35, 37, 36, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <motion.button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            whileHover={{ backgroundColor: 'rgba(35, 37, 36, 0.05)' }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <TbX aria-hidden="true" /> : <TbMenu aria-hidden="true" />}
          </motion.button>
        </div>

        {/* Mobile Navigation Dropdown managed by AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              id="mobile-navigation-menu"
              className="mobile-nav"
              initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="mobile-nav-list">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <motion.a 
                      href={link.href} 
                      className="nav-link" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
                <li>
                  <motion.a 
                    href="/hailemichaelresume.pdf?v=1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="resume-btn"
                    style={{ marginTop: '0.5rem' }}
                    whileHover={{ backgroundColor: '#232524', color: '#ffffff' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Resume
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;