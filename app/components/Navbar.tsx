"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaBars } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Always Glassmorphic Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 
                   bg-white/10 backdrop-blur-xl 
                   border-b border-white/20 
                   shadow-2xl shadow-cyan-500/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex items-center justify-between">
            <Link
            href="/"
            className="group relative z-50 block">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-r from-cyan-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
              MD. Mehedi Hasan
            </h1>
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-1 bg-linear-to-r from-cyan-400 to-pink-500 rounded-full"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}/>
            </Link>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group px-3 py-2"
                  >
                    <span
                      className={`font-medium text-sm lg:text-base transition-all duration-300 
                        ${isActive ? "text-yellow-400" : "text-gray-200 group-hover:text-white"}`}
                    >
                      {link.name}
                    </span>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navbarActive"
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-yellow-400 to-pink-500 rounded-full shadow-lg shadow-yellow-500/60"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Hover Underline */}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-pink-500 rounded-full"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:border-cyan-400/60 transition-all duration-300 shadow-lg"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6 text-white" />
              ) : (
                <FaBars className="w-6 h-6 text-white" />
              )}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-In Menu - Always Beautiful */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Glassmorphic Mobile Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-full max-w-xs 
                         bg-white/10 backdrop-blur-2xl 
                         border-l border-white/30 
                         shadow-2xl shadow-purple-500/20 z-50 md:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-10 p-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-bold transition-all duration-400 
                        ${pathname === link.href
                          ? "text-yellow-400 scale-110 drop-shadow-lg"
                          : "text-gray-200 hover:text-white hover:scale-110"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Social Links */}
                <div className="absolute bottom-12 flex gap-10">
                  <a
                    href="https://github.com/mdmehedi121888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-300 hover:text-cyan-400 transition-all hover:scale-125"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/mdmehedi121888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-300 hover:text-blue-400 transition-all hover:scale-125"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}