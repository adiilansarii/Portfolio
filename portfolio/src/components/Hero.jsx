import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl w-full px-8 pt-12 pb-10 flex flex-col items-center mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="flex-1"
        >
          <span className="text-zinc-500 text-xl mb-2 block font-medium tracking-tight italic">
            Hello, I'm Aadin,
          </span>
          
          {/* Tightened Heading: leading-[0.8] removes the gap between lines */}
          <h1 className="text-5xl md:text-8xl font-black leading-[0.8] tracking-[-0.05em] mb-12">
            Full stack<br />
            <span className="outline-text">Developer</span>
          </h1>
          
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-lg font-bold border-white pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all group"
          >
            Contact Me <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="w-full max-w-sm aspect-square bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl"
        >
          <img 
            src="/profile.jpg" 
            alt="Aadin Ansari" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
          />
        </motion.div>
      </div>

      <div className="w-full flex items-center gap-8 mt-12">
        <h2 className="text-xl md:text-2xl font-black tracking-widest text-zinc-300 uppercase whitespace-nowrap italic">
          Technologies & Tools
        </h2>
        <div className="h-[2px] w-full bg-zinc-900" />
      </div>
    </section>
  );
}