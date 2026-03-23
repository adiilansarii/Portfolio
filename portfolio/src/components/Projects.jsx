import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const myProjects = [
  { 
    title: "Sendit", 
    desc: "A high-performance platform using AWS S3 and multipart streaming to send photos and audio files securely in seconds.", 
    img: "./sendit.png",
    link: "https://sendit-ruby.vercel.app/"   // 👈 add link
  },
  { 
    title: "Needit", 
    desc: "An interview insights platform where students share real-world experiences to help peers navigate college placements and preparation.", 
    img: "./needit.png",
    link: "https://needit-interview.vercel.app/"
  },
  { 
    title: "Grabit", 
    desc: "A campus item recovery portal that helps students report and find lost belongings using image uploads and real-time filtering.", 
    img: "./grabit.png",
    link: "https://lost-hive.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="work" className="max-w-7xl w-full px-8 py-20 mx-auto">
      <div className="w-full flex items-center gap-8 mb-16">
        <h2 className="text-xl md:text-2xl font-black tracking-widest text-zinc-300 uppercase whitespace-nowrap italic">
          Projects
        </h2>
        <div className="h-[2px] w-full bg-zinc-900" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {myProjects.map((proj, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 shadow-sm hover:border-zinc-700 transition-all duration-300"
          >
            <div className="overflow-hidden rounded-xl mb-5 aspect-video">
              <img 
                src={proj.img} 
                alt={proj.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" 
              />
            </div>
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold leading-tight mb-2 tracking-tight">{proj.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {proj.desc}
                </p>
              </div>
              <a 
                href={proj.link}   // 👈 dynamic link
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white text-black rounded-full hover:bg-zinc-300 transition-colors shrink-0 shadow-lg"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}