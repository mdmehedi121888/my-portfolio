"use client";

import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs,
  SiRedux, SiHtml5, SiCss3, SiTailwindcss,
  SiFramer,
  SiNodedotjs, SiExpress, SiNestjs, SiMysql, SiPostgresql,
  SiCodeforces, SiLeetcode, SiGeeksforgeeks, SiCodechef
} from "react-icons/si";

export default function SkillsSection() {
  const frontendSkills = [
    { name: "JavaScript (ES6+)", icon: SiJavascript, level: 85, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, level: 75, color: "text-blue-400" },
    { name: "Python", icon: SiPython, level: 35, color: "text-blue-300" },
    { name: "React", icon: SiReact, level: 95, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, level: 90, color: "text-white" },
    { name: "Redux Toolkit", icon: SiRedux, level: 85, color: "text-purple-400" },
    { name: "HTML5", icon: SiHtml5, level: 95, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, level: 95, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 95, color: "text-teal-400" },
    { name: "Framer Motion", icon: SiFramer, level: 85, color: "text-pink-400" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: SiNodedotjs, level: 90, color: "text-green-400" },
    { name: "Express.js", icon: SiExpress, level: 85, color: "text-gray-400" },
    { name: "NestJS", icon: SiNestjs, level: 25, color: "text-red-500" },
    { name: "MySQL", icon: SiMysql, level: 90, color: "text-orange-600" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 60, color: "text-blue-600" },
  ];

  const onlineJudges = [
    { platform: "CodeForces", handle: "mdmehedi121888", problems: "1250+", icon: SiCodeforces, color: "text-red-500", link: "https://codeforces.com/profile/mdmehedi121888" },
    { platform: "LeetCode", handle: "mdmehedi121888", problems: "800+", icon: SiLeetcode, color: "text-orange-500", link: "https://leetcode.com/mdmehedi121888" },
    { platform: "GeeksforGeeks", handle: "mdmehedi121888", problems: "850+", icon: SiGeeksforgeeks, color: "text-green-400", link: "https://auth.geeksforgeeks.org/user/mdmehedi121888" },
    { platform: "CodeChef", handle: "mdmehedi121888", problems: "180+", icon: SiCodechef, color: "text-amber-600", link: "https://www.codechef.com/users/mdmehedi121888" },
  ];

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-white/10 rounded-xl">
          <skill.icon className={`w-8 h-8 ${skill.color}`} />
        </div>
        <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
      </div>

      <div className="relative">
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.05, ease: "easeOut" }}
            className="h-full bg-linear-to-r from-yellow-400 to-yellow-600 rounded-full shadow-lg shadow-yellow-500/50"
          />
        </div>
        <span className="absolute -top-8 right-0 text-yellow-400 text-sm font-bold">
          {skill.level}%
        </span>
      </div>
    </motion.div>
  );

  return (
    <section className="px-6 bg-linear-to-b from-[#0f0c29] via-[#1a1a2e] to-[#0f0c29]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-pink-500 to-cyan-400"
        >

          Skills & Expertise
        </motion.h2>

        {/* Frontend Technologies */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
            Frontend Technologies
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {frontendSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
            Backend Technologies
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {backendSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i + frontendSkills.length} />
            ))}
          </div>
        </div>

        {/* Online Judge Handles - Special Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-linear-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-2xl rounded-3xl border-2 border-yellow-500/40 shadow-2xl shadow-yellow-500/20 p-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-yellow-400 mb-3">Online Judge Handles</h3>
            <p className="text-xl text-gray-300">
              Solved <span className="text-yellow-400 font-bold">3000+ problems</span> across multiple platforms • 
              Participated in <span className="text-yellow-400 font-bold">150+ contests</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineJudges.map((judge, i) => (
              <motion.a
                key={judge.platform}
                href={judge.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                    <judge.icon className={`w-10 h-10 ${judge.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{judge.platform}</h4>
                    <p className="text-gray-400 text-sm">@{judge.handle}</p>
                  </div>
                </div>
                <p className="text-yellow-400 font-bold text-xl">
                  {judge.problems} Problems Solved
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}