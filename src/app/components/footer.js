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
  FiShield,
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
    { name: "Gallery", href: "/gallery" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const academicLinks = [
    { name: "Admissions", href: "/admissions" },
    { name: "Results", href: "/results" },
    { name: "Library", href: "/library" },
    { name: "Research", href: "/research" },
    { name: "Calendar", href: "/calendar" },
    { name: "Placements", href: "/placements" },
  ];

  const contactInfo = [
    { icon: FiMapPin, value: "123 Education Lane, Knowledge City, 400001" },
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
      <div className="h-1 bg-gradient-to-r from-[#0057D9] via-[#4D8DFF] to-[#0057D9]" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-flex items-center space-x-2.5 mb-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0057D9] to-[#003E99] rounded-xl flex items-center justify-center shadow-lg shadow-[#0057D9]/20 group-hover:shadow-[#0057D9]/40 transition-all duration-300 group-hover:scale-105">
                  <FaGraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-none">EduManage</h3>
                  <p className="text-[10px] text-[#94A3B8] font-medium tracking-wider uppercase mt-0.5">IMS Platform</p>
                </div>
              </Link>

              <p className="text-[#CBD5E1] text-sm leading-relaxed mb-5">
                Empowering educational institutions with modern management solutions.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-1.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#94A3B8] ${social.hoverColor} transition-all duration-200`}
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider flex items-center space-x-2">
              <span className="w-6 h-[2px] bg-[#0057D9] rounded-full" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[#94A3B8] hover:text-white text-sm transition-all duration-200"
                  >
                    <FiChevronRight className="w-3 h-3 mr-1.5 text-[#0057D9] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Academic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider flex items-center space-x-2">
              <span className="w-6 h-[2px] bg-[#0057D9] rounded-full" />
              <span>Academic</span>
            </h4>
            <ul className="space-y-2">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[#94A3B8] hover:text-white text-sm transition-all duration-200"
                  >
                    <FiChevronRight className="w-3 h-3 mr-1.5 text-[#0057D9] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-5"
          >
            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider flex items-center space-x-2">
                <span className="w-6 h-[2px] bg-[#0057D9] rounded-full" />
                <span>Contact</span>
              </h4>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start space-x-2.5 group">
                      <div className="w-8 h-8 rounded-lg bg-[#1E293B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0057D9] transition-all duration-200">
                        <Icon className="w-3.5 h-3.5 text-[#4D8DFF] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <p className="text-sm text-[#CBD5E1] leading-relaxed">{item.value}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Newsletter</h4>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3.5 py-2.5 pr-11 rounded-lg bg-[#1E293B] border border-[#334155] text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-[#0057D9] focus:ring-1 focus:ring-[#0057D9]/30 transition-all duration-200"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-[#0057D9] hover:bg-[#003E99] rounded-md transition-colors duration-200"
                    aria-label="Subscribe"
                  >
                    <FiSend className="w-3.5 h-3.5 text-white" />
                  </motion.button>
                </div>

                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-1.5 text-green-400 text-xs"
                  >
                    <FiCheckCircle className="w-3 h-3" />
                    <span>Subscribed successfully!</span>
                  </motion.p>
                )}

                {isError && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-1.5 text-red-400 text-xs"
                  >
                    <FiAlertCircle className="w-3 h-3" />
                    <span>Please enter a valid email.</span>
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E293B] pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2 text-xs text-[#94A3B8]">
              <FiShield className="w-3.5 h-3.5 text-[#4D8DFF]" />
              <span>© {currentYear} EduManage. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-1 text-xs">
              <Link href="/privacy" className="px-2 py-1 text-[#94A3B8] hover:text-white transition-colors duration-200 rounded-md hover:bg-[#1E293B]">
                Privacy
              </Link>
              <span className="text-[#334155]">•</span>
              <Link href="/terms" className="px-2 py-1 text-[#94A3B8] hover:text-white transition-colors duration-200 rounded-md hover:bg-[#1E293B]">
                Terms
              </Link>
              <span className="text-[#334155]">•</span>
              <Link href="/cookies" className="px-2 py-1 text-[#94A3B8] hover:text-white transition-colors duration-200 rounded-md hover:bg-[#1E293B]">
                Cookies
              </Link>
            </div>

            <div className="flex items-center space-x-1 text-xs text-[#94A3B8]">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiHeart className="w-3.5 h-3.5 text-red-500" />
              </motion.span>
              <span>in India</span>
            </div>
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
        className="fixed bottom-6 right-6 w-10 h-10 bg-[#0057D9] hover:bg-[#003E99] text-white rounded-xl shadow-lg shadow-[#0057D9]/20 flex items-center justify-center transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FiChevronUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;