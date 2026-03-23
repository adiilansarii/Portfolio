import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl w-full px-6 md:px-8 pt-8 md:pt-12 pb-10 flex flex-col items-center mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="flex-1 text-center md:text-left"
        >
          <span className="text-zinc-500 text-lg md:text-xl mb-2 block font-medium tracking-tight italic">
            Hello, I'm Adil,
          </span>
          
          <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-[-0.05em] mb-10">
            Full stack<br />
            <span className="outline-text">Developer</span>
          </h1>
          
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-lg font-bold hover:text-zinc-500 hover:border-zinc-500 transition-all group"
          >
            Contact Me <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="w-full max-w-[280px] md:max-w-sm aspect-square bg-zinc-900 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl"
        >
          <img 
            src="/home.png" 
            alt="Adil Ansari" 
            className="w-full h-full object-cover" // Grayscale removed
          />
        </motion.div>
      </div>

      <div className="w-full flex items-center gap-4 md:gap-8 mt-6">
        <h2 className="text-sm md:text-2xl font-black tracking-widest text-zinc-400 uppercase whitespace-nowrap italic">
          Technologies & Tools
        </h2>
        <div className="h-[1px] md:h-[2px] w-full bg-zinc-900" />
      </div>
    </section>
  );
}