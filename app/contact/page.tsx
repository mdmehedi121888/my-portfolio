"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  SiGithub, SiLinkedin, SiGmail, SiWhatsapp 
} from "react-icons/si";
import { FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { send } from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("EmailJS environment variables are not set");
    }

    const result = await send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        year: new Date().getFullYear(),

      },
      publicKey
    );

    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);

  } catch (error) {
    console.error('EmailJS error:', error);
    alert('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const socialLinks = [
    { icon: SiGithub, link: "https://github.com/mdmehedi121888", color: "hover:text-white" },
    { icon: SiLinkedin, link: "https://www.linkedin.com/in/md-mehedi-hasan-85619519a/", color: "hover:text-blue-500" },
    { icon: SiGmail, link: "mailto:mdmehedi121888@gmail.com", color: "hover:text-red-500" },
    { icon: SiWhatsapp, link: "https://wa.me/8801871497433", color: "hover:text-green-500" },
  ];

  return (
    <section className="px-6 mb-5 pt-3 bg-linear-to-b from-[#0f0c29] via-[#1a1a2e] to-[#0f0c29] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-pink-500 to-cyan-400 mb-5">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300">
            Feel free to reach out — I'm always open to new opportunities!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-pink-500/40 shadow-2xl shadow-pink-500/20 p-10"
          >
            <h3 className="text-3xl font-bold text-pink-400 mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 transition-all"
                />
                {errors.name && <p className="text-red-400 text-sm mt-2 ml-2">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 transition-all"
                />
                {errors.email && <p className="text-red-400 text-sm mt-2 ml-2">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={10}
                  placeholder="Write your message here..."
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text emigrated text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 transition-all resize-none"
                />
                {errors.message && <p className="text-red-400 text-sm mt-2 ml-2">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 cursor-pointer transition-all
                  ${isSubmitting 
                    ? "bg-gray-600 cursor-not-allowed opacity-70" 
                    : "bg-linear-to-r from-pink-600 to-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/50"
                  } text-white`}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-3 text-green-400 font-semibold bg-green-500/10 py-4 rounded-xl border border-green-500/30"
                >
                  <FaCheckCircle className="w-6 h-6" />
                  Message sent successfully! Mehedi will reply soon
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Direct Contact */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-yellow-500/40 shadow-2xl shadow-yellow-500/20 p-10">
              <h3 className="text-3xl font-bold text-yellow-400 mb-8">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-yellow-500/20 rounded-xl">
                    <FaPhone className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white font-semibold">+880 1871497433</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-pink-500/20 rounded-xl">
                    <SiGmail className="w-8 h-8 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white font-semibold">mdmehedi121888@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-purple-500/20 rounded-xl">
                    <FaMapMarkerAlt className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white font-semibold">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border-2 border-pink-500/40 shadow-2xl shadow-pink-500/20 p-10">
              <h3 className="text-3xl font-bold text-pink-400 mb-8">Let's Connect</h3>
              <div className="grid grid-cols-3 gap-6">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    className="group flex flex-col items-center gap-3 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all"
                  >
                    <social.icon className={`w-12 h-12 text-gray-400 group-hover:${social.color} transition-colors duration-300`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}