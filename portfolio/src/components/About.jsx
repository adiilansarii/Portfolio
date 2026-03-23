import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <section className="max-w-7xl w-full px-6 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 order-2 md:order-1 text-center md:text-left"
        >
          {/* Style synced with Navbar Logo */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-zinc-100">
            About<span className="text-zinc-500 font-light italic">me</span>
          </h1>
          <p className="text-zinc-500 text-base md:text-xl leading-relaxed max-w-xl mb-10 mx-auto md:mx-0">
            I am a Full Stack Developer passionate about building scalable, high-performance web applications with clean and minimalist design. I specialize in the MERN stack and leverage AWS for deploying and scaling applications, constantly striving to enhance my development skills.
          </p>
          
          {/* Resume Button with Link */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto"
          >
            <button className="w-full md:w-auto px-10 py-4 border border-zinc-700 text-white font-black uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all">
              Resume
            </button>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative order-1 md:order-2"
        >
          <div className="w-48 h-48 md:w-[400px] md:h-[400px] border border-zinc-800 rounded-full absolute -top-2 -right-2 md:-top-4 md:-right-4 -z-10" />
          
          <div className="w-48 h-48 md:w-[400px] md:h-[400px] overflow-hidden rounded-full border-2 border-zinc-900 shadow-2xl">
            <img 
              src="/about.jpg" 
              alt="Adil Ansari" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}