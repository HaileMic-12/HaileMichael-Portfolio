import React from 'react';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-section {
          padding: 2.5rem 2rem;
          background-color: #0f172a; /* Matches your global dark background */
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          z-index: 10;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
        }

        .footer-text {
          color: #94a3b8;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
        }

        .footer-highlight {
          color: #38bdf8;
          font-weight: 600;
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .footer-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #38bdf8;
        }
      `}</style>

      <footer className="footer-section">
        <div className="footer-content">
          <p className="footer-text">
            Designed & Engineered by <span className="footer-highlight">Hailemichael Mekonenn</span>
          </p>
          <p className="footer-text">
            © 2026 All Rights Reserved.
          </p>
          
          <div className="footer-links">
            <a href="https://github.com/HaileMic-12" target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <a href="mailto:hailemichaelmekonenn@gmail.com" className="footer-link">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;