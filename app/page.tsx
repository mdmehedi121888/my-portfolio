"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin 
} from "react-icons/fa";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Looking for a Software Engineer position in a dynamic firm that values my analytical and technical skills and provides scope for updating my knowledge. I seek a company that will help me contribute to its development while concurrently aiding my personal growth.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 pt-3 overflow-hidden">
      {/* Lightweight Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-purple-600/5 to-pink-600/5" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-4">

        {/* Availability Badge */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-flex items-center gap-3 px-7 py-3 rounded-full 
                     bg-white/10 backdrop-blur-xl border border-white/20
                     shadow-2xl shadow-yellow-500/20"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </span>
          <span className="text-yellow-300 font-medium text-sm tracking-wider">
            Open to Work • Full-Time • Remote / Onsite
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black 
                   bg-linear-to-r from-cyan-300 via-yellow-300 to-pink-400 
                   bg-clip-text text-transparent 
                   drop-shadow-2xl leading-tight"
        >
          MD. MEHEDI HASAN
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 tracking-wide"
        >
          Junior Software Engineer
        </motion.h2>

        {/* Beautiful Contact Cards – react-icons only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a href="tel:+8801871497433" className="flex items-center gap-3 px-6 py-4 
            bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 
            hover:bg-white/20 hover:border-cyan-400/60 transition-all group">
            <FaPhone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition" />
            <span className="text-gray-200 font-medium">+880 1871 497433</span>
          </a>

          <a href="mailto:mdmehedi121888@gmail.com" className="flex items-center gap-3 px-6 py-4 
            bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 
            hover:bg-white/20 hover:border-pink-400/60 transition-all group">
            <FaEnvelope className="w-5 h-5 text-pink-400 group-hover:scale-110 transition" />
            <span className="text-gray-200 font-medium">mdmehedi121888@gmail.com</span>
          </a>

          <div className="flex items-center gap-3 px-6 py-4 
            bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
            <FaMapMarkerAlt className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-200 font-medium">Gazipur, Dhaka, Bangladesh</span>
          </div>
        </motion.div>

        {/* Refined Personal Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-5 max-w-3xl mx-auto"
        >
          <p className="text-lg sm:text-xl leading-relaxed text-gray-200 text-center font-light">
            I am a{" "}
            <span className="text-cyan-400 font-bold">passionate learner</span> who thrives on{" "}
            <span className="text-yellow-400 font-bold">solving real-world problems</span>. 
            A quick learner, collaborative team player, and always eager to grow. 
            Currently deepening my expertise in{" "}
            <span className="text-pink-400 font-bold">System Design</span> and{" "}
            <span className="text-purple-400 font-bold">DevOps Engineering</span> to build scalable, reliable systems.
          </p>
        </motion.div>

        {/* Career Goal – Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-5 p-8 rounded-3xl bg-white/5 backdrop-blur-2xl 
                     border border-white/10 shadow-2xl shadow-purple-500/20 
                     max-w-4xl mx-auto"
        >
          <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center italic">
            <span className="text-yellow-400 text-2xl font-light">“</span>
            {" "}{text}
            {text.length < fullText.length && (
              <span className="text-yellow-400 animate-pulse text-2xl">|</span>
            )}
            {" "}<span className="text-yellow-400 text-2xl font-light">”</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-5 mb-3"
        >
          <a
            href="https://flowcv.com/resume/2pwsbavoqfpc"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-12 py-5 bg-linear-to-r from-yellow-500 to-pink-500 
                       rounded-2xl font-bold text-black text-lg
                       shadow-2xl shadow-yellow-500/60 hover:shadow-yellow-500/80
                       hover:scale-105 transition-all duration-300 
                       flex items-center justify-center gap-3"
          >
            View Resume
          </a>
          <a
            href="/projects"
            className="px-12 py-5 bg-white/10 backdrop-blur-xl border border-white/30
                       rounded-2xl font-bold text-white text-lg text-center
                       hover:bg-white/20 hover:border-cyan-400 hover:shadow-2xl 
                       hover:shadow-cyan-500/40 transition-all duration-300"
          >
            Explore My Projects
          </a>
        </motion.div>
      </div>
    </main>
  );
}