"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  notionUrl: string;
  tags: string[];
  color: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "react-native",
    title: "React Native Mastery",
    description: "Complete guide to building cross-platform mobile apps with React Native, Expo, and modern tooling.",
    notionUrl: "https://www.notion.so/React-Native-218ad87fcc0b801aa073ef9bb4dda66f?source=copy_link",
    tags: ["React Native", "Mobile", "Expo", "TypeScript"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "redis",
    title: "Redis for Developers",
    description: "Deep dive into Redis: caching, pub/sub, rate limiting, leaderboards, and real-world patterns.",
    notionUrl: "https://www.notion.so/React-Native-218ad87fcc0b801aa073ef9bb4dda66f?source=copy_link", // Update later
    tags: ["Redis", "Caching", "Backend", "Performance"],
    color: "from-red-500 to-orange-600",
  },
  {
    id: "javascript",
    title: "Advanced JavaScript Concepts",
    description: "Master closures, prototypes, event loop, async/await, modules, and modern ES2025+ features.",
    notionUrl: "https://docs.google.com/document/d/1i2Y9TcOoDaX-Ig_09nI46VBPqyA7b9QAQxf2X17Koe4/edit?tab=t.0", // Update later
    tags: ["JavaScript", "ES6+", "Advanced", "Core Concepts"],
    color: "from-yellow-400 to-amber-600",
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <>
      <section className="min-h-screen px-6 bg-linear-to-b from-[#0f0c29] via-[#1a1a2e] to-[#0f0c29]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-pink-500 to-cyan-400 mb-6">
              My Blog & Notes
            </h1>
            <p className="text-xl text-gray-300">
              In-depth articles, guides, and personal knowledge base
            </p>
          </motion.div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -12 }}
                onClick={() => setSelectedPost(post)}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/10 overflow-hidden cursor-pointer shadow-2xl hover:border-yellow-500/60 transition-all duration-500"
              >
                {/* linear Top Bar */}
                <div className={`h-2 bg-linear-to-r ${post.color}`} />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {post.title}
                    </h3>
                    <FaExternalLinkAlt className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-all" />
                  </div>

                  <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-gray-300 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-yellow-400 font-semibold flex items-center gap-2">
                    Click to read full article
                    <span className="group-hover:translate-x-3 transition-transform">→</span>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-linear-to-t from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-7xl h-[92vh] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hover:scale-110"
              >
                <FaTimes className="w-7 h-7 text-white" />
              </button>

              {/* Title Bar */}
              <div className={`h-16 bg-linear-to-r ${selectedPost.color} flex items-center px-8 shadow-lg`}>
                <h2 className="text-3xl font-bold text-white drop-shadow-md">
                  {selectedPost.title}
                </h2>
              </div>

              {/* Notion Embed */}
              <div className="h-full pb-16">
                <iframe
                  src={selectedPost.notionUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title={selectedPost.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}