import React from 'react';

const skillsData = [
  {
    category: "Frontend & Mobile",
    icon: "📱",
    skills: ["React.js", "React Native", "Expo", "JavaScript (ES6+)", "HTML5 / CSS3", "UI/UX Implementation"]
  },
  {
    category: "Backend Engineering",
    icon: "⚙️",
    skills: ["Python", "PHP", "Java", "C++", "C#", "RESTful APIs"]
  },
  {
    category: "Database & Cloud",
    icon: "☁️",
    skills: ["MySQL", "Firebase Firestore", "Firebase Authentication", "Cloud Functions", "Realtime Database"]
  },
  {
    category: "Tools & Architecture",
    icon: "🛠️",
    skills: ["Git", "GitHub", "System Architecture", "Biometric Integration", "Agile / Scrum"]
  }
];

const SkillStack = () => {
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

        .skills-section {
          position: relative;
          padding: 8rem 2rem;
          background-color: var(--bg-dark);
          overflow: hidden;
          z-index: 1;
        }

        /* Ambient Orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: -1;
          animation: float 20s infinite ease-in-out alternate;
          opacity: 0.5;
        }
        .orb-left {
          top: 20%; left: -5%; width: 500px; height: 500px;
          background: rgba(139, 92, 246, 0.12); /* Purple */
        }
        .orb-right {
          bottom: 20%; right: -5%; width: 500px; height: 500px;
          background: rgba(56, 189, 248, 0.12); /* Cyan */
          animation-delay: -5s;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Animations */
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 1rem;
        }

        .highlight-text {
          background: linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: var(--text-muted);
          font-size: 1.15rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Grid Layout for Skill Categories */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        /* Glassmorphism Skill Card */
        .skill-category-card {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Staggered Entrance */
        .skill-category-card:nth-child(1) { animation-delay: 0.2s; }
        .skill-category-card:nth-child(2) { animation-delay: 0.4s; }
        .skill-category-card:nth-child(3) { animation-delay: 0.6s; }
        .skill-category-card:nth-child(4) { animation-delay: 0.8s; }

        .skill-category-card:hover {
          transform: translateY(-8px);
          border-color: rgba(56, 189, 248, 0.3);
          box-shadow: 0 20px 40px -10px rgba(56, 189, 248, 0.15), 
                      0 0 20px rgba(139, 92, 246, 0.05);
          background: rgba(30, 41, 59, 0.6);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .category-icon {
          font-size: 2rem;
          background: rgba(255, 255, 255, 0.05);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          border: 1px solid var(--glass-border);
        }

        .category-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
        }

        /* Individual Skill Tags */
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .skill-category-card:hover .skill-tag {
          border-color: rgba(255, 255, 255, 0.2);
        }

        .skill-tag:hover {
          background: rgba(56, 189, 248, 0.1);
          border-color: var(--accent-cyan) !important;
          color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .skills-section { padding: 5rem 1.5rem; }
          .section-title { font-size: 2.5rem; }
          .skill-category-card { padding: 2rem 1.5rem; }
        }
      `}</style>

      <section className="skills-section" id="skills">
        <div className="orb orb-left"></div>
        <div className="orb orb-right"></div>

        <div className="skills-container">
          
          <div className="section-header">
            <h2 className="section-title">Engineering <span className="highlight-text">Arsenal</span></h2>
            <p className="section-subtitle">
              A comprehensive toolkit spanning from cross-platform mobile development to robust backend infrastructure and database management.
            </p>
          </div>

          <div className="skills-grid">
            {skillsData.map((category, index) => (
              <div key={index} className="skill-category-card">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.category}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default SkillStack;