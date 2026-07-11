import React from 'react';

const featuredProjects = [
  {
    id: 1,
    title: "Emergency Response System",
    role: "Full-Stack Architect",
    techStack: ["React Native", "React.js", "Firebase"],
    description: "A comprehensive real-time emergency ecosystem. Engineered a cross-platform mobile utility for live GPS tracking and alerts, seamlessly synchronized with a secure, web-based administrative dashboard for centralized monitoring and dispatch management. (Test the admin dashboard using: admin-test@example.com / password123)",
    githubLink: "https://github.com/HaileMic-12/emergency-response-system",
    apkLink: "https://github.com/HaileMic-12/emergency-response-system/releases/download/v1.0.0/Emergency-Response-v1.0.apk", 
    
    // YOUR NEW LIVE LINK GOES HERE:
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
    role: "Co-Creator / Collaborative Project",
    techStack: ["React", "Python (Bot Engine)", "APIs"],
    description: "A collaborative web application designed for buying and trading social media and gaming assets. Engineered the React web interface to seamlessly communicate with a custom Python bot that automates backend processes.",
    githubLink: "#",
    liveLink: "https://t.me/AderaTradeBot"
  }
];

const ProjectGallery = () => {
  return (
    <>
      <style>{`
        /* Core Section Setup */
        .gallery-section {
          position: relative;
          padding: 8rem 2rem;
          background-color: #0f172a; 
          overflow: hidden;
          z-index: 1;
        }

        /* Ambient Background Orbs */
        .gallery-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: -1;
          animation: float-slow 20s infinite ease-in-out alternate;
          opacity: 0.5;
        }

        .orb-left {
          top: 0%;
          left: -10%;
          width: 700px;
          height: 700px;
          background: rgba(56, 189, 248, 0.15); 
        }

        .orb-right {
          bottom: -10%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: rgba(139, 92, 246, 0.15); 
          animation-delay: -10s;
        }

        @keyframes float-slow {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(100px, -80px) scale(1.2); }
        }

        .gallery-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Styling */
        .gallery-header {
          margin-bottom: 6rem;
          text-align: center;
          animation: fadeFocus 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeFocus {
          0% { opacity: 0; filter: blur(10px); transform: translateY(-20px); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0); }
        }

        .gallery-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          color: #ffffff;
          background: linear-gradient(to right, #f8fafc, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gallery-subtitle {
          font-size: 1.15rem;
          color: #94a3b8;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Grid Layout */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.5rem;
        }

        /* Cinematic Entrance Animation for Cards */
        @keyframes cinematicReveal {
          0% {
            opacity: 0;
            transform: translateY(80px) scale(0.95);
            filter: blur(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* Premium Glassmorphism Card */
        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 2.5rem;
          border-radius: 1.5rem;
          
          /* Dark Glass Effect */
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;

          /* Apply Cinematic Reveal */
          opacity: 0; 
          animation: cinematicReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Staggered Delays */
        .project-card:nth-child(1) { animation-delay: 0.2s; }
        .project-card:nth-child(2) { animation-delay: 0.4s; }
        .project-card:nth-child(3) { animation-delay: 0.6s; }
        .project-card:nth-child(4) { animation-delay: 0.8s; }

        /* Hover States - 3D Lift & Glow */
        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px -15px rgba(56, 189, 248, 0.15), 
                      0 0 20px rgba(56, 189, 248, 0.05);
          border-color: rgba(56, 189, 248, 0.3);
          background: rgba(30, 41, 59, 0.7);
        }

        /* Card Typography */
        .project-role {
          font-size: 0.75rem;
          font-weight: 700;
          color: #38bdf8; 
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
          display: block;
          position: relative;
          z-index: 2;
        }

        .project-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 1.25rem;
          color: #f8fafc;
          transition: color 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .project-card:hover .project-title {
          color: #38bdf8;
        }

        .project-description {
          color: #cbd5e1;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          flex-grow: 1;
          position: relative;
          z-index: 2;
        }

        /* Frosted Glass Tech Tags */
        .tech-stack-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
          margin-top: auto;
          position: relative;
          z-index: 2;
        }

        .tech-tag {
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .project-card:hover .tech-tag {
          border-color: rgba(56, 189, 248, 0.3);
          background: rgba(56, 189, 248, 0.1);
          color: #38bdf8;
        }

        /* Action Links */
        .project-links {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          margin-top: auto;
          position: relative;
          z-index: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .project-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: #f8fafc;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
        }

        .project-link:hover {
          color: #38bdf8;
          letter-spacing: 0.05em; 
        }

        .project-link span {
          margin-left: 0.5rem;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-link:hover span {
          transform: translateX(8px);
        }

        .project-link.live-demo {
          color: #38bdf8;
        }
        
        .project-link.live-demo:hover {
          color: #f8fafc;
        }

        @media (max-width: 768px) {
          .gallery-section { padding: 5rem 1.5rem; }
          .gallery-title { font-size: 2.5rem; }
          .project-card { padding: 2rem; }
        }
      `}</style>

      <section className="gallery-section" id="projects">
        <div className="gallery-orb orb-left"></div>
        <div className="gallery-orb orb-right"></div>

        <div className="gallery-container">
          
          <div className="gallery-header">
            <h2 className="gallery-title">Featured Engineering</h2>
            <p className="gallery-subtitle">
              A selection of production-ready applications focusing on scalable architecture, collaborative development, and complex problem solving.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card">
                
                <span className="project-role">{project.role}</span>
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-stack-container">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* UPDATED BUTTON LOGIC HERE */}
                <div className="project-links">
                  
                  {/* Shows APK Download if it exists */}
                  {project.apkLink && project.apkLink !== "#" && (
                    <a 
                      href={project.apkLink} 
                      className="project-link live-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download App (.apk) <span>↗</span>
                    </a>
                  )}

                  {/* Shows Web Admin Panel if it exists */}
                  {project.adminLink && project.adminLink !== "#" && (
                    <a 
                      href={project.adminLink} 
                      className="project-link live-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web Admin Panel <span>↗</span>
                    </a>
                  )}

                  {/* Shows Standard Live Demo if it exists */}
                  {project.liveLink && project.liveLink !== "#" && (
                    <a 
                      href={project.liveLink} 
                      className="project-link live-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <span>↗</span>
                    </a>
                  )}

                  {/* Shows View Source */}
                  {project.githubLink && project.githubLink !== "#" && (
                    <a 
                      href={project.githubLink} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source <span>&rarr;</span>
                    </a>
                  )}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGallery;