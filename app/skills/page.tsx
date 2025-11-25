"use client";

import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs,
  SiRedux, SiHtml5, SiCss3, SiTailwindcss,
  SiFramer,
  SiNodedotjs, SiExpress, SiNestjs, SiMysql, SiPostgresql,
  SiCodeforces, SiLeetcode, SiGeeksforgeeks, SiCodechef,
  SiDocker,
  SiRedis,
  SiGit,
  SiGithub,
  SiFigma,
  SiJirasoftware,
  SiPostman,
  SiGitlab,
  SiGithubactions,
  SiNginx,
  SiKubernetes,
  SiSqlite,
  SiMongodb,
  SiGraphql,
  SiApachespark,
  SiSass,
  SiGooglecloud,
  SiDigitalocean,
  SiNetlify,
  SiVercel,
  SiLinux,
  SiGnubash,
  SiSocketdotio,
  SiMqtt,
  SiGoogle,
  SiMicrodotblog,
  SiBookstack,
  SiMui,
  SiAntdesign,
  SiPrime,
  SiPrometheus,
  SiGrafana,
  SiElastic,
  SiSwagger,
  SiBlueprint,
  SiExpo,
  SiC,
  SiCplusplus,
  SiPhp
} from "react-icons/si";

export default function SkillsSection() {

const programmingLanguageSkills = [
  { name: "C", icon: SiC, level: 40, color: "text-blue-400" },
  { name: "C++", icon: SiCplusplus, level: 50, color: "text-blue-500" },
  { name: "Python", icon: SiPython, level: 45, color: "text-yellow-400" },
  { name: "JavaScript", icon: SiJavascript, level: 70, color: "text-yellow-400" },
  { name: "PHP", icon: SiPhp, level: 30, color: "text-indigo-400" },
];

const frontendSkills = [
  { name: "JavaScript (ES6+)", icon: SiJavascript, level: 70, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, level: 60, color: "text-blue-400" },
  { name: "React", icon: SiReact, level: 65, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, level: 55, color: "text-white" },
  { name: "Redux Toolkit", icon: SiRedux, level: 40, color: "text-purple-400" },
  { name: "HTML5", icon: SiHtml5, level: 90, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, level: 85, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 75, color: "text-teal-400" },
  { name: "Framer Motion", icon: SiFramer, level: 10, color: "text-pink-400" },
  { name: "Sass", icon: SiSass, level: 10, color: "text-pink-500" },
];

  const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, level: 65, color: "text-green-400" },
  { name: "Express.js", icon: SiExpress, level: 70, color: "text-gray-400" },
  { name: "NestJS", icon: SiNestjs, level: 35, color: "text-red-500" },
  { name: "Python", icon: SiPython, level: 20, color: "text-yellow-400" },
  { name: "REST APIs", icon: SiApachespark, level: 70, color: "text-blue-500" },
  { name: "GraphQL", icon: SiGraphql, level: 30, color: "text-pink-500" },
];

const databaseSkills = [
  { name: "MySQL", icon: SiMysql, level: 70, color: "text-orange-600" },
  { name: "PostgreSQL", icon: SiPostgresql, level: 55, color: "text-blue-600" },
  { name: "MongoDB", icon: SiMongodb, level: 50, color: "text-green-600" },
  { name: "Redis", icon: SiRedis, level: 35, color: "text-red-600" },
  { name: "SQLite", icon: SiSqlite, level: 0, color: "text-gray-500" },
];

const devopsSkills = [
  { name: "Docker", icon: SiDocker, level: 50, color: "text-blue-600" },
  { name: "Kubernetes", icon: SiKubernetes, level: 20, color: "text-blue-500" },
  { name: "NGINX", icon: SiNginx, level: 0, color: "text-green-500" },
  { name: "GitHub Actions", icon: SiGithubactions, level: 0, color: "text-gray-300" },
  { name: "CI/CD Pipelines", icon: SiGitlab, level: 15, color: "text-orange-500" },
];

const toolsSkills = [
  { name: "Git", icon: SiGit, level: 80, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, level: 75, color: "text-gray-300" },
  { name: "GitLab", icon: SiGitlab, level: 25, color: "text-gray-300" },
  { name: "Figma", icon: SiFigma, level: 15, color: "text-pink-400" },
  { name: "Postman", icon: SiPostman, level: 75, color: "text-orange-500" },
  { name: "Jira", icon: SiJirasoftware, level: 0, color: "text-blue-500" },
];

const onlineJudges = [
    { platform: "CodeForces", handle: "mdmehedi121888", problems: "1250+", icon: SiCodeforces, color: "text-red-500", link: "https://codeforces.com/profile/mdmehedi121888" },
    { platform: "LeetCode", handle: "mdmehedi121888", problems: "800+", icon: SiLeetcode, color: "text-orange-500", link: "https://leetcode.com/mdmehedi121888" },
    { platform: "GeeksforGeeks", handle: "mdmehedi121888", problems: "850+", icon: SiGeeksforgeeks, color: "text-green-400", link: "https://auth.geeksforgeeks.org/user/mdmehedi121888" },
    { platform: "CodeChef", handle: "mdmehedi121888", problems: "180+", icon: SiCodechef, color: "text-amber-600", link: "https://www.codechef.com/users/mdmehedi121888" },
];

const cloudSkills = [
  { name: "Google Cloud", icon: SiGooglecloud, level: 10, color: "text-blue-400" },
  { name: "DigitalOcean", icon: SiDigitalocean, level: 40, color: "text-blue-500" },
  { name: "Vercel", icon: SiVercel, level: 70, color: "text-white" },
  { name: "Netlify", icon: SiNetlify, level: 55, color: "text-green-500" },
];

const systemSkills = [
  { name: "Linux", icon: SiLinux, level: 40, color: "text-yellow-500" },
  { name: "Bash/Shell", icon: SiGnubash, level: 25, color: "text-green-500" },
  { name: "Systemd", icon: SiLinux, level: 10, color: "text-gray-400" },
];

const protocolSkills = [
  { name: "WebSockets", icon: SiSocketdotio, level: 35, color: "text-purple-500" },
  { name: "MQTT", icon: SiMqtt, level: 15, color: "text-blue-400" },
  { name: "gRPC", icon: SiGoogle, level: 5, color: "text-blue-500" },
];

const architectureSkills = [
  { name: "Microservices", icon: SiMicrodotblog, level: 25, color: "text-yellow-500" },
  { name: "Clean Code", icon: SiBookstack, level: 65, color: "text-white" },
];

const uiSkills = [
  { name: "Material UI", icon: SiMui, level: 55, color: "text-blue-500" },
  { name: "Ant Design", icon: SiAntdesign, level: 45, color: "text-red-500" },
  { name: "PrimeReact", icon: SiPrime, level: 60, color: "text-teal-400" },
];

const monitoringSkills = [
  { name: "Prometheus", icon: SiPrometheus, level: 10, color: "text-orange-500" },
  { name: "Grafana", icon: SiGrafana, level: 15, color: "text-yellow-500" },
  { name: "Elastic Stack", icon: SiElastic, level: 10, color: "text-blue-400" },
];

const apiSkills = [
  { name: "Swagger / OpenAPI", icon: SiSwagger, level: 50, color: "text-green-500" },
  { name: "API Blueprint", icon: SiBlueprint, level: 5, color: "text-blue-300" },
  { name: "Postman Collections", icon: SiPostman, level: 75, color: "text-orange-500" },
];

const mobileSkills = [
  { name: "React Native", icon: SiReact, level: 20, color: "text-cyan-400" },
  { name: "Expo", icon: SiExpo, level: 10, color: "text-black" },
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
        
        {/* Programming Language skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
            Programming Language
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {programmingLanguageSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

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
        <div className="mb-16">
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

         {/* API Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
            API Skills           
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {apiSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Database Technologies */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
            Database Technologies
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {databaseSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i + databaseSkills.length} />
            ))}
          </div>
        </div>

        {/* Architecture Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
            Architecture Skills           
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {architectureSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* System Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
            System Skills           
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {systemSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Protocol Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
            Protocol Skills           
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {protocolSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Devops Technologies */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
             Devops Technologies
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {devopsSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i + devopsSkills.length} />
            ))}
          </div>
        </div>

        {/* Cloud skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
           Cloud Skills
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {cloudSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

         {/* Monitoring Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
            Monitoring Skills           
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {monitoringSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Tools Technologies */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
              Tools
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {toolsSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i + toolsSkills.length} />
            ))}
          </div>
        </div>

           {/*Mobile Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
           Mobile Skills
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {mobileSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* UI Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-yellow-300 mb-10"
          >
            UI Skills           
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {uiSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
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