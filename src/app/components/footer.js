// components/Footer.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiChevronUp,
  FiHeart,
  FiCheckCircle,
  FiAlertCircle,
  FiChevronRight,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 400);
    });
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && emailRegex.test(email)) {
      setIsSubscribed(true);
      setIsError(false);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    { icon: FiMapPin, value: "123 Education Lane, Knowledge City" },
    { icon: FiPhone, value: "+91 123 456 7890" },
    { icon: FiMail, value: "info@edumanage.com" },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: "#", label: "Facebook", hoverColor: "hover:text-[#1877F2]" },
    { icon: FiTwitter, href: "#", label: "Twitter", hoverColor: "hover:text-[#1DA1F2]" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn", hoverColor: "hover:text-[#0A66C2]" },
    { icon: FiInstagram, href: "#", label: "Instagram", hoverColor: "hover:text-[#E4405F]" },
    { icon: FiYoutube, href: "#", label: "YouTube", hoverColor: "hover:text-[#FF0000]" },
  ];

  return (
    <footer className="relative bg-[#0F172A] text-white overflow-hidden">
      {/* Top Gradient Border */}
      <div className="h-0.5 bg-gradient-to-r from-[#0057D9] via-[#4D8DFF] to-[#0057D9]" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center space-x-2 mb-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0057D9] to-[#003E99] rounded-lg flex items-center justify-center shadow-lg shadow-[#0057D9]/20 group-hover:shadow-[#0057D9]/40 transition-all duration-300 group-hover:scale-105">
                <FaGraduationCap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-none">EduManage</h3>
                <p className="text-[9px] text-[#94A3B8] font-medium tracking-wider uppercase">IMS Platform</p>
              </div>
            </Link>

            <p className="text-[#CBD5E1] text-xs leading-relaxed mb-3">
              Empowering educational institutions with modern management solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-7 h-7 rounded-md bg-[#1E293B] flex items-center justify-center text-[#94A3B8] ${social.hoverColor} transition-all duration-200`}
                    aria-label={social.label}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xs font-semibold text-white mb-3 uppercase tracking-wider flex items-center space-x-2">
              <span className="w-4 h-[2px] bg-[#0057D9] rounded-full" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[#94A3B8] hover:text-white text-xs transition-all duration-200"
                  >
                    <FiChevronRight className="w-3 h-3 mr-1 text-[#0057D9] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xs font-semibold text-white mb-3 uppercase tracking-wider flex items-center space-x-2">
              <span className="w-4 h-[2px] bg-[#0057D9] rounded-full" />
              <span>Contact</span>
            </h4>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start space-x-2 group">
                    <div className="w-6 h-6 rounded-md bg-[#1E293B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0057D9] transition-all duration-200">
                      <Icon className="w-3 h-3 text-[#4D8DFF] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <p className="text-xs text-[#CBD5E1] leading-relaxed">{item.value}</p>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xs font-semibold text-white mb-3 uppercase tracking-wider flex items-center space-x-2">
              <span className="w-4 h-[2px] bg-[#0057D9] rounded-full" />
              <span>Newsletter</span>
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-1.5">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 pr-10 rounded-md bg-[#1E293B] border border-[#334155] text-white text-xs placeholder-[#64748B] focus:outline-none focus:border-[#0057D9] focus:ring-1 focus:ring-[#0057D9]/30 transition-all duration-200"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 bg-[#0057D9] hover:bg-[#003E99] rounded transition-colors duration-200"
                  aria-label="Subscribe"
                >
                  <FiSend className="w-3 h-3 text-white" />
                </motion.button>
              </div>

              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-1 text-green-400 text-[10px]"
                >
                  <FiCheckCircle className="w-2.5 h-2.5" />
                  <span>Subscribed successfully!</span>
                </motion.p>
              )}

              {isError && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-1 text-red-400 text-[10px]"
                >
                  <FiAlertCircle className="w-2.5 h-2.5" />
                  <span>Please enter a valid email.</span>
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E293B] pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-[10px] text-[#94A3B8]">
              © {currentYear} EduManage. All rights reserved.
            </p>

            <div className="flex items-center space-x-1 text-[10px]">
              <Link href="/privacy" className="px-1.5 py-0.5 text-[#94A3B8] hover:text-white transition-colors duration-200 rounded hover:bg-[#1E293B]">
                Privacy
              </Link>
              <span className="text-[#334155]">•</span>
              <Link href="/terms" className="px-1.5 py-0.5 text-[#94A3B8] hover:text-white transition-colors duration-200 rounded hover:bg-[#1E293B]">
                Terms
              </Link>
              <span className="text-[#334155]">•</span>
              <Link href="/cookies" className="px-1.5 py-0.5 text-[#94A3B8] hover:text-white transition-colors duration-200 rounded hover:bg-[#1E293B]">
                Cookies
              </Link>
            </div>

            <p className="text-[10px] text-[#94A3B8] flex items-center space-x-1">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiHeart className="w-3 h-3 text-red-500" />
              </motion.span>
              <span>in India</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 w-8 h-8 bg-[#0057D9] hover:bg-[#003E99] text-white rounded-lg shadow-lg shadow-[#0057D9]/20 flex items-center justify-center transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FiChevronUp className="w-4 h-4" />
      </motion.button>
    </footer>
  );
};

export default Footer;