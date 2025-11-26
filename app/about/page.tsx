"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import profileImg from "../../public/mehedi.png";
import Education from "../components/Education";
import GithubStatsDashboard from "../components/GitHubStats";

const softSkills = [ "Communication", "Problem-Solving", "Critical Thinking", "Adaptability", "Teamwork", "Decision-Making", "Analytical Thinking", "Time Management", "Attention to Detail", "Creativity", "Collaboration", "Active Listening", "Conflict Resolution", "Flexibility", "Work Ethic", "Self-Motivation", "Strategic Planning", "Growth Mindset", "Multitasking" ];

const hobbies = [ "Traveling", "Tech Exploration", "Movies", "Music", "Podcast Listening"];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen  px-6 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-900/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent pt-3 bg-clip-text bg-linear-to-r from-yellow-400 via-pink-500 to-cyan-400 mb-6">
            About Me
          </h1>
          {/* Short Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl"
            >
             <p className="text-lg text-balanced leading-relaxed text-gray-200">
              A passionate, <span className="text-yellow-400 font-bold">self-driven developer</span> focused on building scalable systems and crafting intuitive digital experiences. I love turning ideas into reality through clean architecture and reliable engineering. Currently growing in <span className="text-pink-400 font-bold">System Design</span> and <span className="text-purple-400 font-bold">DevOps</span> to build high-performance applications. Always learning, solving problems, and collaborating to create meaningful impact.
            </p>

            </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-yellow-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700" />

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">
              {/* Window Dots */}
              <div className="absolute -top-4 left-8 flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 shadow-lg shadow-rose-500/50" />
                <span className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              </div>

              {/* Profile Image – PERFECTLY ROUNDED */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-linear-to-r from-yellow-400 to-pink-500 blur-xl opacity-70 group-hover:opacity-100 transition" />
                  <div className="relative p-1.5 bg-linear-to-r from-yellow-400 to-pink-500 rounded-full">
                    <div className="p-1 bg-[#0F172A] rounded-full">
                      <div className="rounded-full overflow-hidden w-52 h-52">
                        <Image
                          src={profileImg}
                          alt="Md Mehedi Hasan"
                          width={208}
                          height={208}
                          className="rounded-full object-contain w-full h-full"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white text-center">MD. MEHEDI HASAN</h3>
              <p className="text-yellow-400 text-center text-xl mt-2 font-semibold">Junior Software Engineer</p>

              {/* Contact Info */}
              <div className="mt-8 space-y-4 text-gray-300">
                <div className="flex items-center justify-center gap-3">
                  <FaMapMarkerAlt className="text-yellow-400" />
                  <span>Gazipur, Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <FaPhone className="text-cyan-400" />
                  <a href="tel:+8801871497433" className="hover:text-white transition">+880 1871 497433</a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <FaEnvelope className="text-pink-400" />
                  <a href="mailto:mdmehedi121888@gmail.com" className="hover:text-white transition">mdmehedi121888@gmail.com</a>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col justify-around sm:flex-row gap-4">
                <a
                  href="/Mehedi_Hasan_Resume.pdf"
                  download
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-yellow-500 to-pink-500 rounded-2xl font-bold text-black hover:shadow-2xl hover:shadow-yellow-500/50 transition-all hover:scale-105"
                >
                  <FaDownload /> Download Resume
                </a>
            
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-10"
          >
            {/* Soft Skills */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-5 py-3 bg-linear-to-r from-yellow-500/20 to-pink-500/20 border border-yellow-500/40 rounded-full text-yellow-300 font-medium shadow-lg hover:shadow-yellow-500/50 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">When I'm Not Coding</h3>
              <div className="flex flex-wrap gap-4">
                {hobbies.map((hobby) => (
                  <motion.span
                    key={hobby}
                    whileHover={{ scale: 1.1 }}
                    className="px-5 py-3 bg-linear-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 rounded-full text-cyan-300 font-medium shadow-lg hover:shadow-cyan-500/50 transition"
                  >
                    {hobby}
                  </motion.span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

         {/* Education / Academic Journey */}
        <Education/>

        {/* GitHub Stats (placeholder cards) */}
        <GithubStatsDashboard/>
      </div>
    </main>
  );
}