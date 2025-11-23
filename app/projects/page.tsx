"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "MBSTU Hospital Management System",
    description: "A complete hospital management platform with patient portal, appointment booking, real-time messaging, and powerful admin dashboard for managing doctors, appointments, and roles.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "CSS"],
    github: "https://github.com/mdmehedi121888/mbstu-hospital-management",
    live: "https://mbstu-hospital.netlify.app",
    images: [
      "https://github.com/user-attachments/assets/8bf8d168-d18e-42d9-bbf3-b6538c2f1ac0",
      "https://github.com/user-attachments/assets/876d3e58-0f4d-4e41-aa0a-9814288a0d8c",
      "https://github.com/user-attachments/assets/85686073-366e-49b9-a5b4-de535cf96742",
      "https://github.com/user-attachments/assets/13421268-626c-491c-ac8a-04a3ac158995",
      "https://github.com/user-attachments/assets/a0009ab0-e7ca-4bb9-9022-a9208a9bc340",
      "https://github.com/user-attachments/assets/f919c84c-3f56-4e6d-8b76-9bd8db1df828",
      "https://github.com/user-attachments/assets/eeeeec48-e5e9-4d4e-8bb0-eba7d6034dd1",
      "https://github.com/user-attachments/assets/71999e91-7b33-4b66-a879-24de6f44a03e",
      "https://github.com/user-attachments/assets/9709dfa3-55e2-4e46-9fe0-c3eb3085e1f7",
      "https://github.com/user-attachments/assets/c91c8233-b8f6-4eff-b72e-f539e489ef0f",
      "https://github.com/user-attachments/assets/7cc067d1-36f4-47e0-9079-8aaa648359b4",
      "https://github.com/user-attachments/assets/55a08173-4a9a-4e14-9449-44becd9a47a2",
    ],
  },
  {
    title: "Hasanah Ecommerce App",
    description: "Modern e-commerce platform with product catalog, cart, wishlist, secure checkout, and admin panel.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/mdmehedi121888/hasanah-ecommerce",
    live: "https://hasanah-shop.netlify.app",
    images: [
      "https://via.placeholder.com/800x500/1a1a2e/ yellow?text=Hasanah+Ecommerce+Homepage",
      "https://via.placeholder.com/800x500/1a1a2e/ pink?text=Product+Page",
      "https://via.placeholder.com/800x500/1a1a2e/ cyan?text=Cart+&+Checkout",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 bg-linear-to-b from-[#0f0c29] via-[#1a1a2e] to-[#0f0c29]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-pink-500 to-cyan-400 mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack applications built with passion and modern technologies
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, project.images.length]);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3 }}
      className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/10 overflow-hidden shadow-2xl hover:border-yellow-500/60 transition-all duration-700"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Slider Section */}
        <div className="relative h-96 lg:h-full bg-black/40 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover object-top"
            />
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3">
            <button
              onClick={prevImage}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
            >
              <FaChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
            >
              <FaChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_: any, i: number) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentImageIndex ? "bg-yellow-400 w-8" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Hover Glow Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-10 lg:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-10">
              <h4 className="text-xl font-semibold text-yellow-400 mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-gray-200 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 hover:border-yellow-500/60 transition-all font-semibold text-white"
            >
              <FaGithub className="w-6 h-6" />
              View Code
            </motion.a>

            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-yellow-500 to-pink-500 rounded-xl font-bold text-black hover:shadow-2xl hover:shadow-yellow-500/40 transition-all"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}