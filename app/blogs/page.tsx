"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

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
    id: "node-js",
    title: "JS Package Manager",
    description: "JavaScript package manager tool",
    notionUrl:
      "https://scythe-yamamomo-48f.notion.site/JavaScript-Node-js-Package-Managers-2baad87fcc0b80c88c87f00ab0031539",
    tags: ["npm", "yarn", "pnpm", "bun"],
    color: "from-cyan-500 to-blue-600",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen px-6 pt-3 bg-linear-to-b from-[#0f0c29] via-[#1a1a2e] to-[#0f0c29]">
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
            <motion.a
              key={post.id}
              href={post.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/10 overflow-hidden cursor-pointer shadow-2xl hover:border-yellow-500/60 transition-all duration-500"
            >
              {/* Top Gradient Bar */}
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
                  Open in new tab
                  <span className="group-hover:translate-x-3 transition-transform">
                    →
                  </span>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-linear-to-t from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
