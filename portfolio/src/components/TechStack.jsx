import { motion } from 'framer-motion';
import { 
  SiMongodb, SiExpress, SiReact, SiNodedotjs, 
  SiJavascript, SiTailwindcss, SiGit, 
  SiGithub, SiSqlite, SiCplusplus, SiC 
} from 'react-icons/si';

const tech = [
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Express", icon: <SiExpress className="text-white" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "SQL", icon: <SiSqlite className="text-[#003B57]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> }
];

export default function TechStack() {
  return (
    /* Transparent background with a subtle border for separation */
    <div className="w-full py-16 border-b border-zinc-900/30 overflow-hidden">
      <div className="flex flex-nowrap w-max items-center animate-infinite-scroll hover:[animation-play-state:paused]">
        {[...tech, ...tech, ...tech].map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10, scale: 1.15 }}
            className="group relative mx-10 md:mx-14 flex flex-col items-center justify-center cursor-pointer"
          >
            {/* Minimalist Icon Sizing */}
            <div className="text-4xl md:text-5xl grayscale group-hover:grayscale-0 transition-all duration-500">
              {item.icon}
            </div>

            {/* Individual Hover Name (Appears only on specific icon) */}
            <span className="absolute -bottom-10 whitespace-nowrap text-[10px] font-bold font-mono tracking-[0.2em] text-zinc-200 uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}