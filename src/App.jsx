import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillStack from './components/SkillStack';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/ContactForm'; 
import Footer from './components/Footer'; 


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        .app-wrapper {
          opacity: 0;
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .app-wrapper.loaded {
          opacity: 1;
        }
      `}</style>

      <div className={`app-wrapper ${isLoaded ? 'loaded' : ''}`}>
       
        <Navbar />
        <main>
          <HeroSection />
          <SkillStack />
          <ProjectGallery />
          <Contact />
        </main>
        <Footer /> 
      </div>
    </>
  );
}

export default App;