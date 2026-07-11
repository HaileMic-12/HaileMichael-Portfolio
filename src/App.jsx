import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillStack from './components/SkillStack';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/ContactForm'; // Update this to match your actual file name
import Footer from './components/Footer'; // <-- Add this import

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <SkillStack />
        <ProjectGallery />
        <Contact />
      </main>
      <Footer /> {/* <-- Add the footer here */}
    </div>
  );
}

export default App;