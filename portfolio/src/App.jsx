import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import { Mail, Linkedin, Github } from 'lucide-react';

const Portfolio = () => (
  <>
    <Hero />
    <TechStack />
    <Projects />
    
    <section id="contact" className="w-full max-w-4xl px-8 py-16 border-t border-zinc-900/50 mt-10 mx-auto text-center">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 italic text-zinc-200 uppercase">
          Get in touch
        </h2>
        
        <div className="flex justify-center gap-6 mb-10">
          {/* Clicking this opens the user's email app */}
          <SocialIcon 
            icon={<Mail size={20} />} 
            href="mailto:aadinansari@example.com" 
          />
          
          <SocialIcon 
            icon={<Linkedin size={20} />} 
            href="https://linkedin.com/in/your-profile" 
          />
          
          <SocialIcon 
            icon={<Github size={20} />} 
            href="https://github.com/your-username" 
          />
        </div>

        <p className="text-zinc-800 font-mono text-[9px] tracking-[0.5em] uppercase opacity-50">
          Aadin Ansari © 2026
        </p>
      </div>
    </section>
  </>
);

// Updated helper with target="_blank" for external links
function SocialIcon({ icon, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 border border-zinc-800 rounded-full text-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all duration-300 inline-flex items-center justify-center"
    >
      {icon}
    </a>
  );
}

export default function App() {
  return (
    <Router>
      <main className="bg-[#0a0a0a] text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}