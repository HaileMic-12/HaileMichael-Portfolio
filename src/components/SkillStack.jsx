import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { TbDeviceMobileCode, TbServerCog, TbCloudDataConnection, TbTools } from 'react-icons/tb';

// 1. DATA EXTRACTION: Moved outside the component to prevent unnecessary memory reallocation.
const SKILL_DATA = [
  {
    id: "frontend",
    category: "Frontend & Mobile",
    icon: TbDeviceMobileCode,
    skills: ["React.js", "React Native", "Expo", "JavaScript (ES6+)", "HTML5 / CSS3", "UI/UX Implementation"]
  },
  {
    id: "backend",
    category: "Backend Engineering",
    icon: TbServerCog,
    skills: ["Python", "PHP", "Java", "C++", "C#", "RESTful APIs"]
  },
  {
    id: "cloud",
    category: "Database & Cloud",
    icon: TbCloudDataConnection,
    skills: ["MySQL", "Firebase Firestore", "Firebase Auth", "Cloud Functions", "Realtime Database"]
  },
  {
    id: "tools",
    category: "Tools & Architecture",
    icon: TbTools,
    skills: ["Git", "GitHub", "System Architecture", "Biometric Integration", "Agile / Scrum"]
  }
];

// 2. PERFORMANCE & SEMANTICS: Memoized sub-component using motion elements
const SkillCard = memo(({ category, Icon, skills, index }) => (
  <motion.article 
    className="skill-category-card"
    aria-labelledby={`skill-heading-${category.id}`}
    // Scroll Reveal Stagger Logic
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    // Hover Card Physics
    whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(35, 37, 36, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.8)", background: "rgba(252, 251, 250, 0.9)" }}
  >
    <header className="category-header">
      <motion.div 
        className="category-icon-wrapper" aria-hidden="true"
        whileHover={{ scale: 1.05, rotate: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Icon className="category-icon" />
      </motion.div>
      <h3 id={`skill-heading-${category.id}`} className="category-title">{category}</h3>
    </header>
    
    <ul className="skills-list" aria-label={`Skills in ${category}`}>
      {skills.map((skill, skillIndex) => (
        <motion.li 
          key={skillIndex} 
          className="skill-tag"
          whileHover={{ scale: 1.05, y: -2, color: "#C08457", borderColor: "#C08457" }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </motion.article>
));

SkillCard.displayName = 'SkillCard';

const SkillStack = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Inter:wght@400;500;600&display=swap');

        /* 3. MAINTAINABILITY: CSS Custom Properties harmonized with the Project Gallery */
        :root {
          --skill-bg: #F4F3F0;
          --skill-text-main: #232524;
          --skill-text-muted: #5C605E;
          --skill-accent-primary: #C08457; /* Warm Clay */
          --skill-accent-secondary: #8A9A86; /* Sage Green */
          --skill-card-bg: rgba(252, 251, 250, 0.65);
          --skill-border: rgba(220, 218, 213, 0.5);
          --skill-focus-ring: #C08457;
        }

        .skills-section {
          position: relative;
          padding: 8rem 2rem;
          background-color: var(--skill-bg);
          /* Tactile Paper Grain SVG */
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
          overflow: hidden;
          z-index: 1;
          font-family: 'Inter', sans-serif;
        }

        /* Ambient Watercolor Orbs */
        .skill-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: -1;
          animation: float-slow-skills 22s infinite ease-in-out alternate;
          opacity: 0.5;
          pointer-events: none;
        }

        .orb-top-right {
          top: -5%; right: -5%;
          width: 700px; height: 700px;
          background: rgba(212, 163, 115, 0.25); /* Terracotta */
        }

        .orb-bottom-left {
          bottom: -10%; left: -10%;
          width: 600px; height: 600px;
          background: rgba(138, 154, 134, 0.3); /* Sage */
          animation-delay: -7s;
        }

        @keyframes float-slow-skills {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(-50px, 40px) scale(1.1) rotate(-5deg); }
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--skill-text-main);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .highlight-text {
          color: var(--skill-accent-primary);
          font-style: italic;
          font-weight: 600;
        }

        .section-subtitle {
          color: var(--skill-text-muted);
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 400;
        }

        /* Grid Layout */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: 2.5rem;
        }

        /* Frosted Glassmorphism Card */
        .skill-category-card {
          background: var(--skill-card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: 0 10px 40px rgba(35, 37, 36, 0.03), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          display: flex;
          flex-direction: column;
        }

        /* 4. ACCESSIBILITY: Focus States */
        .skill-category-card:focus-within {
          outline: 2px solid var(--skill-focus-ring);
          outline-offset: 4px;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .category-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid var(--skill-border);
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
        }

        .category-icon {
          font-size: 1.75rem;
          color: var(--skill-accent-primary);
        }

        .category-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--skill-text-main);
          line-height: 1.2;
        }

        /* Elegant Skill Tags */
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid var(--skill-border);
          color: var(--skill-text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: 2rem;
        }

        .skill-category-card:hover .skill-tag {
          background: #ffffff;
          border-color: rgba(209, 213, 208, 0.8);
          color: var(--skill-text-main);
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }

        /* 5. GRACEFUL DEGRADATION: Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .skill-orb, .skill-tag {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }

        @media (max-width: 768px) {
          .skills-section { padding: 5rem 1.5rem; }
          .skill-category-card { padding: 2rem; }
        }
      `}</style>

      {/* SEMANTICS: Accessible landmark region */}
      <section className="skills-section" id="skills" aria-labelledby="skills-heading">
        <div className="skill-orb orb-top-right" aria-hidden="true"></div>
        <div className="skill-orb orb-bottom-left" aria-hidden="true"></div>

        <div className="skills-container">
          
          <motion.header 
            className="section-header"
            initial={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 id="skills-heading" className="section-title">
              Engineering <span className="highlight-text">Arsenal.</span>
            </h2>
            <p className="section-subtitle">
              A comprehensive toolkit spanning from cross-platform mobile development to robust backend infrastructure and database management.
            </p>
          </motion.header>

          <div className="skills-grid">
            {SKILL_DATA.map((data, index) => (
              <SkillCard 
                key={data.id} 
                category={data.category} 
                Icon={data.icon} 
                skills={data.skills} 
                index={index} 
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default SkillStack;