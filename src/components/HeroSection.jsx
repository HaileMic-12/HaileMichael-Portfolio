import React, { memo } from 'react';
import { motion } from 'framer-motion';
// Make sure this matches your actual image file name!
import profileImage from '../assets/file_0000000097c071f481347f6fbeee2090.png';

// 1. MOTION ORCHESTRATION VARIANTS
// This controls the cascading waterfall effect for the text
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child appearing
      delayChildren: 0.2,    // Initial delay before sequence starts
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const HeroSection = memo(() => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --hero-bg: #F4F3F0;
          --hero-text-main: #232524;
          --hero-text-muted: #5C605E;
          --hero-accent-primary: #C08457;
          --hero-accent-hover: #8B5A2B;
          --hero-accent-secondary: #8A9A86;
          --hero-card-bg: rgba(252, 251, 250, 0.65);
          --hero-border: rgba(220, 218, 213, 0.5);
          --hero-focus-ring: #C08457;
        }

        .hero-section {
          position: relative;
          padding: 8rem 2rem 10rem 2rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: var(--hero-bg);
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
          font-family: 'Inter', sans-serif;
        }

        /* Ambient Continuous CSS Animations */
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: 0;
          animation: float-hero 25s infinite ease-in-out alternate;
          opacity: 0.6;
          pointer-events: none;
        }
        
        .orb-1 {
          top: -10%; left: -5%; width: 600px; height: 600px;
          background: rgba(212, 163, 115, 0.25);
        }
        
        .orb-2 {
          bottom: -10%; right: -5%; width: 600px; height: 600px;
          background: rgba(138, 154, 134, 0.3);
          animation-delay: -7s;
        }

        @keyframes float-hero {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(80px, 50px) scale(1.1) rotate(5deg); }
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
          perspective: 1000px; /* Required for 3D image tilt */
        }

        .hero-content {
          flex: 1;
          max-width: 700px;
          background: var(--hero-card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 2.5rem;
          padding: 4.5rem;
          box-shadow: 0 10px 40px rgba(35, 37, 36, 0.03), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1.2rem;
          background-color: rgba(255, 255, 255, 0.6);
          color: var(--hero-text-main);
          border: 1px solid var(--hero-border);
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 2.5rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: var(--hero-accent-secondary);
          border-radius: 50%;
          margin-right: 10px;
          animation: pulse 2.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(138, 154, 134, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(138, 154, 134, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(138, 154, 134, 0); }
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--hero-text-main);
          margin-bottom: 1.5rem;
        }

        .highlight-text {
          display: block;
          margin-top: 0.2rem;
          color: var(--hero-accent-primary);
          font-style: italic;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--hero-text-muted);
          margin-bottom: 3.5rem;
          line-height: 1.8;
          max-width: 90%;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
        }

        .btn-primary, .btn-secondary {
          padding: 1rem 2.2rem;
          border-radius: 2rem;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          outline: none;
        }

        .btn-primary {
          background: var(--hero-accent-primary);
          color: #ffffff;
          border: none;
          box-shadow: 0 8px 20px -6px rgba(192, 132, 87, 0.5);
        }

        .btn-primary:hover, .btn-primary:focus-visible {
          background: var(--hero-accent-hover);
          box-shadow: 0 12px 25px -6px rgba(192, 132, 87, 0.6);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.5);
          color: var(--hero-text-main);
          border: 1px solid var(--hero-border);
          backdrop-filter: blur(4px);
        }

        .btn-secondary:hover, .btn-secondary:focus-visible {
          background: #ffffff;
          border-color: rgba(209, 213, 208, 0.8);
          box-shadow: 0 8px 20px rgba(35, 37, 36, 0.04);
        }

        .btn-primary:focus-visible, .btn-secondary:focus-visible {
          outline: 2px solid var(--hero-focus-ring);
          outline-offset: 4px;
        }

        .hero-visual {
          flex: 0.8;
          display: flex;
          justify-content: flex-end;
          transform-style: preserve-3d;
        }

        .image-container {
          width: 100%;
          max-width: 420px;
          aspect-ratio: 4 / 5;
          background: var(--hero-card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 20px 50px rgba(35, 37, 36, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          padding: 1rem; 
          display: flex;
          align-items: center;
          justify-content: center;
          animation: gentle-float 8s ease-in-out infinite alternate;
        }

        @keyframes gentle-float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-15px); }
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.8rem; 
          pointer-events: none; /* Prevents image dragging ghost */
        }

        /* Graceful Degradation */
        @media (prefers-reduced-motion: reduce) {
          .hero-orb, .image-container, .pulse-dot {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-content {
            padding: 3.5rem 2.5rem;
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
          .hero-buttons { flex-direction: column; width: 100%; }
          .btn-primary, .btn-secondary { width: 100%; }
          .hero-content { padding: 2.5rem 1.5rem; }
        }
      `}</style>

      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-orb orb-1" aria-hidden="true"></div>
        <div className="hero-orb orb-2" aria-hidden="true"></div>

        <div className="hero-container">
          
          {/* Framer Motion Parent Container orchestrating the child stagger */}
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            <motion.div variants={itemVariants} className="availability-badge" role="status" aria-label="Currently available for engineering roles">
              <span className="pulse-dot" aria-hidden="true"></span>
              Available for Engineering Roles
            </motion.div>
            
            <motion.h1 variants={itemVariants} id="hero-heading" className="hero-title">
              <span className="block-text">Hi, I'm</span>
              <span className="highlight-text">Hailemichael Mekonenn.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="hero-description">
              An Information Systems graduate and Software Engineer specializing in building scalable web architectures and intuitive mobile experiences. From React Native to Laravel, I turn complex problems into production-ready software.
            </motion.p>
            
            <motion.nav variants={itemVariants} className="hero-buttons" aria-label="Hero calls to action">
              <motion.a 
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="btn-primary"
              >
                View My Work
              </motion.a>
              <motion.a 
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="btn-secondary"
              >
                Get in Touch
              </motion.a>
            </motion.nav>

          </motion.div>

          {/* Framer Motion Visual Area with 3D Hover Physics */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9, x: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="image-container" aria-hidden="true"
              whileHover={{ rotateX: 3, rotateY: -4, z: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src={profileImage} 
                alt="Portrait of Hailemichael Mekonenn" 
                className="profile-img" 
                loading="eager"
              />
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;