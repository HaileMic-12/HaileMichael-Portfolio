import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiFirebase, SiPhp, SiMysql } from 'react-icons/si';
import { TbApi, TbBrandReactNative } from 'react-icons/tb';

// 1. PROJECT DATASET
const PROJECT_DATA = [
  {
    id: 1,
    title: "Emergency Response System",
    role: "Full-Stack Architect",
    techStack: ["React Native", "React.js", "Firebase"],
    description: "A comprehensive real-time emergency ecosystem. Engineered a cross-platform mobile utility for live GPS tracking and alerts, seamlessly synchronized with a secure, web-based administrative dashboard for centralized monitoring and dispatch management.",
    githubLink: "https://github.com/HaileMic-12/emergency-response-system",
    apkLink: "https://github.com/HaileMic-12/emergency-response-system/releases/download/v1.0.0/Emergency-Response-v1.0.apk", 
    adminLink: "https://emergency-admin-dashboard-79iid9u81-mikeandco.vercel.app" 
  },
  {
    id: 2,
    title: "Biometric Attendance System",
    role: "Sole Developer",
    techStack: ["Python", "PHP", "MySQL"],
    description: "An automated university attendance platform powered by a custom facial recognition engine. Engineered to handle real-time biometric detection and securely match student identities against a database.",
    githubLink: "https://github.com/HaileMic-12/biometric-attendance-php",
    liveLink: "#"
  },
  {
    id: 3, 
    title: "Internship Management Platform",
    role: "Full-Stack Developer",
    techStack: ["React", "Firebase"],
    description: "A centralized platform to streamline internship applications and management for students and companies.",
    githubLink: "https://github.com/HaileMic-12/internship-management-system", 
    liveLink: "https://internship-management-system-26q1-wu0kq7mov-mikeandco.vercel.app" 
  },
  {
    id: 4,
    title: "Social & Gaming Asset Marketplace",
    role: "Co-Creator",
    techStack: ["React", "Python (Bot)", "APIs"],
    description: "A collaborative web application designed for buying and trading social media and gaming assets. Engineered the React web interface to seamlessly communicate with a custom Python bot that automates backend processes.",
    githubLink: "#",
    liveLink: "https://t.me/AderaTradeBot"
  }
];

// 2. ISOLATED MODULAR ICON ENGINE
const TechIcon = ({ tech }) => {
  const lowerTech = tech.toLowerCase();
  if (lowerTech.includes('react native')) return <TbBrandReactNative style={{ color: '#61DAFB' }} aria-hidden="true" />;
  if (lowerTech.includes('react')) return <FaReact style={{ color: '#61DAFB' }} aria-hidden="true" />;
  if (lowerTech.includes('firebase')) return <SiFirebase style={{ color: '#FFCA28' }} aria-hidden="true" />;
  if (lowerTech.includes('python')) return <FaPython style={{ color: '#3776AB' }} aria-hidden="true" />;
  if (lowerTech.includes('php')) return <SiPhp style={{ color: '#777BB4' }} aria-hidden="true" />;
  if (lowerTech.includes('mysql')) return <SiMysql style={{ color: '#4479A1' }} aria-hidden="true" />;
  if (lowerTech.includes('api')) return <TbApi style={{ color: '#0055FF' }} aria-hidden="true" />;
  return null;
};

// 3. RESTRAINED MOTION COMPONENT
const ProjectCard = memo(({ project, index }) => (
  <motion.article 
    className="project-card" 
    aria-labelledby={`project-title-${project.id}`}
    // Scroll Reveal Optimization
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.7, 
      delay: index * 0.12, 
      ease: [0.16, 1, 0.3, 1] 
    }}
    // Elegant, subtle lift on hover (Removed the dizzying 3D wobble)
    whileHover={{ y: -6 }}
  >
    <header>
      <span className="project-role" aria-label={`Role: ${project.role}`}>{project.role}</span>
      <h3 id={`project-title-${project.id}`} className="project-title">{project.title}</h3>
    </header>
    
    <p className="project-description">
      {project.description}
    </p>

    <ul className="tech-stack-container" aria-label={`Technologies used for ${project.title}`}>
      {project.techStack.map((tech, i) => (
        <motion.li 
          key={i} 
          className="tech-tag"
          whileHover={{ y: -2 }} // Subtle nudge instead of scale bounce
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {tech} <span className="fs-6 d-flex"><TechIcon tech={tech} /></span>
        </motion.li>
      ))}
    </ul>

    <nav className="project-links" aria-label={`Links for ${project.title}`}>
      {project.apkLink && project.apkLink !== "#" && (
        <a href={project.apkLink} className="project-link live-demo" target="_blank" rel="noopener noreferrer" aria-label={`Download APK for ${project.title}`}>
          Download (.apk) <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.adminLink && project.adminLink !== "#" && (
        <a href={project.adminLink} className="project-link live-demo" target="_blank" rel="noopener noreferrer" aria-label={`View Admin Panel for ${project.title}`}>
          Admin Panel <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.liveLink && project.liveLink !== "#" && (
        <a href={project.liveLink} className="project-link live-demo" target="_blank" rel="noopener noreferrer" aria-label={`View Live Demo of ${project.title}`}>
          Live Demo <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.githubLink && project.githubLink !== "#" && (
        <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View Source Code for ${project.title}`}>
          Source Code <span aria-hidden="true">&rarr;</span>
        </a>
      )}
    </nav>
  </motion.article>
));

ProjectCard.displayName = 'ProjectCard';

// 4. MAIN CONTAINER VIEWPORT
const ProjectGallery = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Inter:wght@400;500;600&display=swap');

        :root {
          --gallery-bg: #F4F3F0;
          --gallery-text-main: #232524;
          --gallery-text-muted: #5C605E;
          --gallery-accent-primary: #C08457;
          --gallery-accent-hover: #8B5A2B;
          --gallery-card-bg: rgba(252, 251, 250, 0.65);
          --gallery-card-bg-hover: rgba(252, 251, 250, 0.95); /* Slightly more opaque on hover */
          --gallery-border: rgba(220, 218, 213, 0.5);
          --gallery-focus-ring: #C08457;
        }

        .gallery-section {
          position: relative;
          padding: 8rem 2rem;
          background-color: var(--gallery-bg);
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
          overflow: hidden;
          z-index: 1;
          font-family: 'Inter', sans-serif;
        }

        /* Ambient Watercolor Orbs */
        .gallery-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: -1;
          animation: float-slow 25s infinite ease-in-out alternate;
          opacity: 0.65;
          pointer-events: none;
        }

        .orb-left {
          top: -10%; left: -5%;
          width: 800px; height: 800px;
          background: rgba(212, 163, 115, 0.25);
        }

        .orb-right {
          bottom: -10%; right: -10%;
          width: 700px; height: 700px;
          background: rgba(138, 154, 134, 0.3);
          animation-delay: -12s;
        }

        @keyframes float-slow {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(60px, -40px) scale(1.1) rotate(5deg); }
        }

        .gallery-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .gallery-header {
          margin-bottom: 7rem;
          text-align: center;
        }

        .gallery-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 1.5rem;
          color: var(--gallery-text-main);
          line-height: 1.1;
        }

        .gallery-subtitle {
          font-size: 1.15rem;
          color: var(--gallery-text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
          gap: 3rem;
          /* Removed perspective for a flatter, cleaner UI */
        }

        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 3rem 2.5rem;
          border-radius: 1.5rem;
          background: var(--gallery-card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 40px rgba(35, 37, 36, 0.03), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          transition: box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease;
        }

        .project-card:hover {
          box-shadow: 0 20px 50px rgba(35, 37, 36, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.9);
          background: var(--gallery-card-bg-hover);
          border-color: rgba(255, 255, 255, 1);
        }

        .project-card:focus-within {
          outline: 2px solid var(--gallery-focus-ring);
          outline-offset: 4px;
        }

        .project-role {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--gallery-accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 1.2rem;
          display: block;
        }

        .project-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1.25rem;
          color: var(--gallery-text-main);
          line-height: 1.2;
          transition: color 0.3s ease;
        }

        .project-card:hover .project-title {
          color: var(--gallery-accent-primary);
        }

        .project-description {
          color: var(--gallery-text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 3rem;
          flex-grow: 1;
        }

        .tech-stack-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-bottom: 2.5rem;
          margin-top: auto;
          list-style: none;
          padding: 0;
        }

        .tech-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 1.2rem;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(220, 218, 213, 0.6);
          color: var(--gallery-text-main);
          font-size: 0.8rem;
          font-weight: 500;
          border-radius: 2rem;
          backdrop-filter: blur(5px);
          cursor: default;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover .tech-tag {
          background: #ffffff;
          border-color: rgba(209, 213, 208, 0.9);
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
        }

        .project-links {
          border-top: 1px solid rgba(234, 232, 227, 0.7);
          padding-top: 1.5rem;
          margin-top: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .project-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--gallery-text-muted);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          outline: none;
        }

        .project-link:hover, .project-link:focus-visible {
          color: var(--gallery-accent-primary);
        }

        .project-link:focus-visible {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .project-link span {
          margin-left: 0.5rem;
          font-size: 1rem;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-link:hover span, .project-link:focus-visible span {
          transform: translateX(6px) translateY(-2px);
        }

        .project-link.live-demo {
          color: var(--gallery-accent-primary);
        }
        
        .project-link.live-demo:hover, .project-link.live-demo:focus-visible {
          color: var(--gallery-accent-hover);
        }

        /* GRACEFUL DEGRADATION: Full native performance optimization fallback */
        @media (prefers-reduced-motion: reduce) {
          .gallery-orb, .gallery-header, .project-card, .project-card:hover, .project-link span, .tech-tag {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }

        @media (max-width: 768px) {
          .gallery-section { padding: 5rem 1.5rem; }
          .project-card { padding: 2rem; }
        }
      `}</style>

      <section className="gallery-section" id="projects" aria-labelledby="gallery-heading">
        <div className="gallery-orb orb-left" aria-hidden="true"></div>
        <div className="gallery-orb orb-right" aria-hidden="true"></div>

        <div className="gallery-container">
          <motion.header 
            className="gallery-header"
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 id="gallery-heading" className="gallery-title">Selected Works.</h2>
            <p className="gallery-subtitle">
              A curated collection of production-ready architecture, blending robust engineering with intuitive human-centered design.
            </p>
          </motion.header>

          <div className="projects-grid">
            {PROJECT_DATA.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGallery;