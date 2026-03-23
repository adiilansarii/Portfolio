import { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/#work' },
  ];

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 py-8 max-w-7xl mx-auto w-full relative z-50">
      <NavHashLink to="/#home" className="text-2xl font-bold tracking-tighter">
        Adil<span className="text-zinc-500 font-light italic">ansari</span>
      </NavHashLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-12 text-xs font-medium text-zinc-400 uppercase tracking-[0.2em]">
        {navLinks.map((link) => (
          <NavHashLink key={link.name} smooth to={link.path} className="hover:text-white transition-colors">
            {link.name}
          </NavHashLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/adiilansarii" target="_blank" rel="noreferrer" className="hidden md:block">
          <Github className="w-6 h-6 hover:text-zinc-400 transition-colors" />
        </a>
        
        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-zinc-900 py-8 flex flex-col items-center gap-6 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <NavHashLink 
                key={link.name} 
                smooth 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-zinc-400 uppercase tracking-widest hover:text-white"
              >
                {link.name}
              </NavHashLink>
            ))}
            <a href="https://github.com/adiilansarii" target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 text-zinc-400" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}