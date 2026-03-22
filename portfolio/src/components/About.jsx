import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#0a0a0a]">
      <section className="max-w-7xl w-full px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8 text-zinc-100">
            About me
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            I am a Full Stack Developer and Electronics & Communication student at NSUT. 
            I focus on high-performance web applications and clean, minimalist design. 
            Currently exploring the intersection of MERN stack and hardware.
          </p>
          <button className="px-10 py-4 border border-zinc-700 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all">
            Resume
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative order-1 md:order-2"
        >
          {/* Replaced yellow with a subtle zinc ring */}
          <div className="w-64 h-64 md:w-[450px] md:h-[450px] border border-zinc-800 rounded-full absolute -top-4 -right-4 -z-10" />
          
          <div className="w-64 h-64 md:w-[450px] md:h-[450px] overflow-hidden rounded-full border-2 border-zinc-900">
            <img 
              src="/profile.jpg" 
              alt="Aadin Ansari" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}