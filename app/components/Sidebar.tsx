"use client";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaXTwitter 
} from "react-icons/fa6";

export default function Sidebar() {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com/in/mdmehedi121888", color: "hover:text-blue-500" },
    { icon: FaGithub, href: "https://github.com/mdmehedi121888", color: "hover:text-white" },
    { icon: FaFacebook, href: "https://facebook.com/yourprofile", color: "hover:text-blue-600" },
    { icon: FaInstagram, href: "https://instagram.com/yourprofile", color: "hover:text-pink-500" },
    { icon: FaXTwitter, href: "https://twitter.com/yourprofile", color: "hover:text-cyan-400" },
  ];

  return (
    <motion.aside
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 top-0 h-screen w-20 z-50 flex flex-col items-center justify-between py-10 
                 bg-white/5 backdrop-blur-2xl border-r border-white/20 
                 shadow-2xl shadow-purple-500/10"
    >
      <div className="flex flex-col items-center gap-10">

        {/* Glowing Dot Indicator */}
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 20px #facc15",
              "0 0 40px #facc15",
              "0 0 20px #facc15"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-4 h-4 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/70"
        />

        {/* Social Icons with Glassmorphic Hover */}
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ 
                scale: 1.3,
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-4 rounded-2xl transition-all duration-300
                         bg-white/5 backdrop-blur-md border border-white/10
                         hover:bg-white/20 hover:border-white/40
                         hover:shadow-2xl hover:shadow-yellow-400/30
                         ${social.color}`}
            >
              <Icon className="w-7 h-7" />
              
              {/* Hover Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-linear-to-r from-yellow-400/20 to-pink-500/20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          );
        })}
      </div>
    </motion.aside>
  );
}