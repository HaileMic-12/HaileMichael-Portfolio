import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { TbBrandGithub, TbMail } from 'react-icons/tb';

const Footer = memo(() => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --footer-bg: #F4F3F0; 
          --footer-text-main: #232524;
          --footer-text-muted: #6B706D;
          --footer-accent-primary: #C08457; 
          --footer-accent-hover: #8B5A2B;
          --footer-border: rgba(220, 218, 213, 0.8);
          --footer-focus-ring: #C08457;
        }

        .footer-section {
          position: relative;
          padding: 4rem 2rem 3rem;
          background-color: var(--footer-bg);
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
          border-top: 1px solid var(--footer-border);
          z-index: 10;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
        }

        .footer-text-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .footer-text {
          color: var(--footer-text-muted);
          font-size: 0.95rem;
          letter-spacing: 0.02em;
          font-weight: 400;
        }

        .footer-highlight {
          font-family: 'Playfair Display', serif;
          color: var(--footer-text-main);
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0;
          transition: color 0.3s ease;
        }

        .footer-highlight:hover {
          color: var(--footer-accent-primary);
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          margin-top: 0.5rem;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--footer-text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: background 0.3s ease, color 0.3s ease;
          padding: 0.4rem 0.8rem;
          border-radius: 0.5rem;
          outline: none;
        }

        .footer-link-icon {
          font-size: 1.2rem;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .footer-link:hover, .footer-link:focus-visible {
          color: var(--footer-accent-primary);
          background: rgba(255, 255, 255, 0.5);
        }

        .footer-link:focus-visible {
          outline: 2px solid var(--footer-focus-ring);
          outline-offset: 2px;
        }

        /* Graceful Degradation */
        @media (prefers-reduced-motion: reduce) {
          .footer-link, .footer-link-icon, .footer-highlight, .footer-content {
            transition: none !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* SEMANTICS: role="contentinfo" is standard for footers */}
      <footer className="footer-section" role="contentinfo">
        
        {/* Animated Container */}
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          
          <div className="footer-text-group">
            <p className="footer-text">
              Designed & Engineered by <span className="footer-highlight">Hailemichael Mekonenn</span>
            </p>
            <p className="footer-text" style={{ fontSize: '0.85rem' }}>
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
          
          {/* SEMANTICS: nav element for footer links */}
          <nav className="footer-links" aria-label="Footer Navigation">
            <motion.a 
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="https://github.com/HaileMic-12" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
              aria-label="Visit my GitHub profile"
            >
              <TbBrandGithub className="footer-link-icon" aria-hidden="true" />
              <span>GitHub</span>
            </motion.a>

            <motion.a 
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="mailto:hailemichaelmekonenn@gmail.com" 
              className="footer-link"
              aria-label="Send me an email"
            >
              <TbMail className="footer-link-icon" aria-hidden="true" />
              <span>Email</span>
            </motion.a>
          </nav>

        </motion.div>
      </footer>
    </>
  );
});

Footer.displayName = 'Footer';

export default Footer;