"use client";

import { motion } from "framer-motion";
import { 
  SiReact, SiNodedotjs, SiExpress, SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiGitlab, SiDocker, SiPostman, SiJira,
  SiFigma, SiTailwindcss, SiNextdotjs, SiTypescript,
  SiPhp
} from "react-icons/si";
import { 
  FaLaptopCode, FaServer, FaDatabase, FaClipboardList, 
  FaTools, FaBug, FaHeadset, FaSearch 
} from "react-icons/fa";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "Walton Hi-Tech Industries PLC",
      location: "Chandra, Kaliakoir, Gazipur",
      date: "January 2025 – Present",
      current: true,
    },
    {
      title: "Software Engineer Intern",
      company: "Walton Hi-Tech Industries PLC",
      location: "Chandra, Kaliakoir, Gazipur",
      date: "May 2024 – December 2024",
      current: false,
    },
  ];

  const responsibilities = [
    { icon: FaLaptopCode, text: "Frontend Development", color: "text-cyan-400" },
    { icon: FaServer, text: "Backend Development", color: "text-green-400" },
    { icon: FaDatabase, text: "Database Management", color: "text-blue-500" },
    { icon: FaClipboardList, text: "Requirement Collect & Analysis", color: "text-purple-400" },
    { icon: FaTools, text: "Modification & Enhancement", color: "text-orange-400" },
    { icon: FaSearch, text: "Testing (Unit, Integration, E2E)", color: "text-pink-400" },
    { icon: FaBug, text: "Debug & Troubleshooting", color: "text-red-400" },
    { icon: FaHeadset, text: "Production Support & Maintenance", color: "text-yellow-400" },
  ];

  const techStack = [
    { icon: SiReact, name: "React.js" }, { icon: SiNextdotjs, name: "Next.js" },  { icon: SiPhp, name: "PHP" },
    { icon: SiNodedotjs, name: "Node.js" }, { icon: SiExpress, name: "Express.js" },
    { icon: SiTypescript, name: "TypeScript" }, { icon: SiMysql, name: "MySQL" },
    { icon: SiPostgresql, name: "PostgreSQL" }, { icon: SiMongodb, name: "MongoDB" },
    { icon: SiGit, name: "Git" }, { icon: SiGithub, name: "GitHub" },
    { icon: SiGitlab, name: "GitLab" }, { icon: SiDocker, name: "Docker" },
    { icon: SiPostman, name: "Postman" }, { icon: SiJira, name: "Jira" },
    { icon: SiFigma, name: "Figma" }, { icon: SiTailwindcss, name: "Tailwind CSS" },
  ];

  return (
    <section className="px-6 pb-5 bg-linear-to-b from-[#0f0c29] via-[#1a1a2e] to-[#0f0c29]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-pink-500 to-cyan-400 mb-6">
            Professional Experience
          </h1>
          <p className="text-2xl text-gray-300">
            <span className="text-yellow-400 font-bold">2+ Years</span> of Full-Stack Development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative bg-white/5 backdrop-blur-xl rounded-3xl border-2 p-8 shadow-2xl transition-all hover:scale-105
                ${exp.current ? "border-yellow-500/70 shadow-yellow-500/30" : "border-white/20"}`}
            >
              {exp.current && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                  CURRENT ROLE
                </div>
              )}
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-black">W</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-yellow-400 font-semibold">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                  <p className="text-pink-400 font-medium mt-3">{exp.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 8 Key Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-3xl font-bold text-yellow-300 mb-10 text-center">
            Core Responsibilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-yellow-500/60 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500"
              >
                <item.icon className={`w-14 h-14 ${item.color} mb-4 group-hover:scale-110 transition-transform`} />
                <span className="text-white font-semibold text-lg">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-yellow-300 mb-10 text-center">
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="group flex flex-col items-center gap-3 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-yellow-500/60 transition-all duration-300"
              >
                <tech.icon className="w-12 h-12 text-white group-hover:text-yellow-400 transition-colors" />
                <span className="text-gray-300 text-xs font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}