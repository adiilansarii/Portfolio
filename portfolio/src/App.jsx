import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';

/**
 * SocialIcon Component
 * Handles standard external links and a special 'mailto' case 
 * that copies the email to clipboard as a fallback.
 */
function SocialIcon({ icon, href }) {
  const [copied, setCopied] = useState(false);
  const isEmail = href.startsWith('mailto:');
  const emailAddress = "adilansari35830@gmail.com"; // Your NSUT email

  const handleClick = (e) => {
    if (isEmail) {
      // Copy to clipboard for users without a default mail client
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      
      // Reset the "Copied!" notification after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative inline-flex">
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -45, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-xl z-50 pointer-events-none"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>

      <a 
        href={href} 
        onClick={handleClick}
        target={isEmail ? "_self" : "_blank"} 
        rel="noopener noreferrer"
        className="p-3 border border-zinc-800 rounded-full text-zinc-500 hover:bg-white hover:text-black hover:border-white transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
      >
        {icon}
      </a>
    </div>
  );
}

const Portfolio = () => (
  <>
    <Hero />
    <TechStack />
    <Projects />
    
    <section id="contact" className="w-full max-w-4xl px-8 py-16 border-t border-zinc-900/50 mt-10 mx-auto text-center">
      <div className="flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter mb-8 italic text-zinc-200 uppercase"
        >
          Get in touch
        </motion.h2>
        
        <div className="flex justify-center gap-6 mb-10">
          <SocialIcon 
            icon={<Mail size={20} />} 
            href="mailto:adil.ansari.ug22@nsut.ac.in" 
          />
          
          <SocialIcon 
            icon={<Linkedin size={20} />} 
            href="https://www.linkedin.com/in/adil-ansari35830/" 
          />
          
          <SocialIcon 
            icon={<Github size={20} />} 
            href="https://github.com/adiilansarii" 
          />
        </div>

        <p className="text-zinc-800 font-mono text-[9px] tracking-[0.5em] uppercase opacity-50">
          Adil Ansari © 2026
        </p>
      </div>
    </section>
  </>
);

export default function App() {
  return (
    <Router>
      <main className="bg-[#0a0a0a] text-white min-h-screen selection:bg-white selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}