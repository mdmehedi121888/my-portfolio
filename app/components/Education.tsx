// components/Education.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool, FaStar } from "react-icons/fa";

const educationData = [
  {
    level: "Master's (Ongoing)",
    institution: "Mawlana Bhashani Science and Technology University",
    degree: "M.Eng. in Information and Communication Technology",
    period: "Oct 2024 – Present",
    icon: <FaGraduationCap className="w-6 h-6" />,
    badge: "In Progress",
    badgeColor: "bg-linear-to-r from-purple-500 to-pink-500",
  },
  {
    level: "Bachelor's Degree",
    institution: "Mawlana Bhashani Science and Technology University",
    degree: "B.Sc. in Information and Communication Technology (ICT)",
    period: "Feb 2019 – Feb 2024",
    cgpa: "3.78 / 4.00",
    icon: <FaUniversity className="w-6 h-6" />,
    highlights: ["MBSTU Hospital Management System", "Hasanah Ecommerce App"],
    badge: "Graduated",
    badgeColor: "bg-linear-to-r from-yellow-500 to-orange-500",
  },
  {
    level: "Higher Secondary (HSC)",
    institution: "MEH Arif College",
    degree: "Science Group",
    period: "2015 – 2017",
    gpa: "5.00 / 5.00",
    icon: <FaSchool className="w-6 h-6" />,
    badge: "A+",
    badgeColor: "bg-linear-to-r from-cyan-500 to-blue-500",
  },
  {
    level: "Secondary (SSC)",
    institution: "Mouchak Scout High School",
    degree: "Science Group",
    period: "2010 – 2015",
    gpa: "5.00 / 5.00",
    icon: <FaSchool className="w-5 h-5" />,
    badge: "A+",
    badgeColor: "bg-linear-to-r from-emerald-500 to-teal-500",
  },
];

export default function Education() {
  return (
    <section className="relative py-7 px-6 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-7"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-linear-to-r from-cyan-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent">
            Academic Journey
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            From curiosity to mastery — every step shaped me into the engineer I am today.
          </p>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative"
            >
              {/* Glow Background on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-yellow-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-[1.02]">
                {/* Badge */}
                <div className={`absolute -top-4 left-8 px-5 py-2 rounded-full text-white font-bold text-xs shadow-lg ${edu.badgeColor}`}>
                  {edu.badge}
                </div>

                {/* Icon + Level */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-linear-to-br from-yellow-400/20 to-pink-400/20 rounded-2xl border border-white/20">
                    <div className="text-yellow-400">{edu.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.level}</h3>
                    <p className="text-sm text-gray-400">{edu.period}</p>
                  </div>
                </div>

                {/* Institution & Degree */}
                <h4 className="text-xl font-semibold text-yellow-300 mb-2">{edu.institution}</h4>
                <p className="text-gray-300 mb-4">{edu.degree}</p>

                {/* GPA / CGPA */}
                {(edu.cgpa || edu.gpa) && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/40 mb-4">
                    <FaStar className="text-yellow-400" />
                    <span className="font-bold text-yellow-300">
                      {edu.cgpa ? `CGPA: ${edu.cgpa}` : `GPA: ${edu.gpa}`}
                    </span>
                  </div>
                )}

                {/* Highlights */}
                {edu.highlights && (
                  <ul className="space-y-2 mt-5">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="text-yellow-400">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}