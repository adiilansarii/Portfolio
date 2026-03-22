import { Github } from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-8 max-w-7xl mx-auto w-full">
      <NavHashLink to="/#home" className="text-2xl font-bold tracking-tighter">
        Aadin<span className="text-zinc-500 font-light italic">ansari</span>
      </NavHashLink>

      <div className="hidden md:flex gap-12 text-xs font-medium text-zinc-400 uppercase tracking-[0.2em]">
        <NavHashLink smooth to="/#home" className="hover:text-white transition-colors">Home</NavHashLink>
        <NavHashLink smooth to="/about" className="hover:text-white transition-colors">About</NavHashLink>
        {/* This will now go to Home and scroll to Projects */}
        <NavHashLink smooth to="/#work" className="hover:text-white transition-colors">Work</NavHashLink>
      </div>

      <a href="https://github.com" target="_blank" rel="noreferrer">
        <Github className="w-6 h-6 hover:text-zinc-400 transition-colors" />
      </a>
    </nav>
  );
}