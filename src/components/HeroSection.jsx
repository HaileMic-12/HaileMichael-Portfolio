import React from 'react';
// Make sure this matches your actual image file name!
import profileImage from '../assets/file_0000000097c071f481347f6fbeee2090.png';

const HeroSection = () => {
  return (
    <>
      <style>{`
        :root {
          --accent-cyan: #38bdf8;
          --accent-purple: #8b5cf6;
          --text-main: #f8fafc;
          --text-muted: #cbd5e1;
          --bg-dark: #0f172a;
          --glass-bg: rgba(30, 41, 59, 0.4);
          --glass-border: rgba(255, 255, 255, 0.08);
        }

        .hero-section {
          position: relative;
          padding: 8rem 2rem 10rem 2rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: var(--bg-dark);
        }

        /* Ambient Orbs - Matched to Project Gallery */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          animation: float 20s infinite ease-in-out alternate;
          opacity: 0.5;
        }
        .orb-1 {
          top: -10%; left: -5%; width: 600px; height: 600px;
          background: rgba(56, 189, 248, 0.15); /* Cyan */
        }
        .orb-2 {
          bottom: -10%; right: -5%; width: 600px; height: 600px;
          background: rgba(139, 92, 246, 0.15); /* Purple */
          animation-delay: -5s;
        }

        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(80px, 50px) scale(1.1); }
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        /* Hero Content Card - Dark Glassmorphism */
        .hero-content {
          flex: 1;
          max-width: 700px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 2.5rem;
          padding: 4.5rem;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          
          /* Container Entrance Animation */
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* --- PREMIUM ANIMATION SEQUENCE --- */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes textReveal {
          from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes imageReveal {
          from { opacity: 0; transform: scale(0.9) translateX(40px); filter: blur(15px); }
          to { opacity: 1; transform: scale(1) translateX(0); filter: blur(0); }
        }

        /* Applying the Staggered Delays to Content */
        .animate-item {
          opacity: 0; 
          animation: textReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }
        /* ---------------------------------- */

        .availability-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
          border: 1px solid var(--glass-border);
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 2.5rem;
          letter-spacing: 0.05em;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: #10b981; /* Success Green for "Online/Available" */
          border-radius: 50%;
          margin-right: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .hero-title {
          font-size: 4.2rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text-main);
          margin-bottom: 1.5rem;
        }

        .highlight-text {
          display: block;
          margin-top: 0.5rem;
          /* Cyan to Purple gradient to match orbs */
          background: linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 3.5rem;
          line-height: 1.8;
          max-width: 90%;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
        }

        .btn-primary, .btn-secondary {
          padding: 1.1rem 2.5rem;
          border-radius: 1rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--accent-cyan) 0%, #0284c7 100%);
          color: #0f172a;
          border: none;
          box-shadow: 0 10px 20px -10px rgba(56, 189, 248, 0.5);
        }

        .btn-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 30px -10px rgba(56, 189, 248, 0.7);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(4px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: translateY(-4px) scale(1.02);
        }

        /* Hero Image Container */
        .hero-visual {
          flex: 0.8;
          display: flex;
          justify-content: flex-end;
          
          opacity: 0;
          animation: imageReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
        }

        .image-container {
          width: 100%;
          max-width: 420px;
          aspect-ratio: 4 / 5;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 2.5rem;
          border: 1px solid var(--glass-border);
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          
          animation: gentle-float 8s ease-in-out infinite alternate;
        }

        @keyframes gentle-float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); box-shadow: 0 40px 70px -15px rgba(56, 189, 248, 0.1); }
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
          transition: transform 0.7s ease;
        }

        .image-container:hover .profile-img {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-content {
            padding: 3rem 2rem;
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .hero-description {
            max-width: 100%;
          }
          .hero-visual {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .hero-title { font-size: 3rem; }
          .hero-buttons { flex-direction: column; width: 100%; }
          .btn-primary, .btn-secondary { width: 100%; }
        }
      `}</style>

      <section className="hero-section">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <div className="hero-container">
          <div className="hero-content">
            
            <div className="availability-badge animate-item delay-1">
              <span className="pulse-dot"></span>
              Available for Engineering Roles
            </div>
            
            <h1 className="hero-title animate-item delay-2">
              <span className="block-text">Hi, I'm</span>
              <span className="highlight-text">Hailemichael Mekonenn.</span>
            </h1>
            
            <p className="hero-description animate-item delay-3">
              An Information Systems graduate and Software Engineer specializing in building scalable web architectures and intuitive mobile experiences. From React Native to Laravel, I turn complex problems into production-ready software.
            </p>
            
            <div className="hero-buttons animate-item delay-4">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-container">
              <img 
                src={profileImage} 
                alt="Hailemichael Mekonenn" 
                className="profile-img" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;