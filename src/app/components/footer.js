// components/Footer.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowRight,
  FiSend,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiChevronUp,
  FiHeart,
  FiShield,
  FiBookOpen,
  FiUsers,
  FiAward,
  FiExternalLink,
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

  // Show/hide scroll to top button based on scroll position
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
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Gallery", href: "/gallery" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const academicLinks = [
    { name: "Admissions", href: "/admissions" },
    { name: "Academic Calendar", href: "/calendar" },
    { name: "Library", href: "/library" },
    { name: "Examinations", href: "/examinations" },
    { name: "Results", href: "/results" },
    { name: "Research", href: "/research" },
  ];

  const studentLinks = [
    { name: "Student Portal", href: "/student-portal" },
    { name: "Fee Payment", href: "/fees" },
    { name: "Attendance", href: "/attendance" },
    { name: "Hostel", href: "/hostel" },
    { name: "Placements", href: "/placements" },
    { name: "Alumni", href: "/alumni" },
  ];

  const contactInfo = [
    {
      icon: FiMapPin,
      label: "Address",
      value: "123 Education Lane",
      subValue: "Knowledge City, 400001",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 123 456 7890",
      subValue: "+91 987 654 3210",
    },
    {
      icon: FiMail,
      label: "Email",
      value: "info@edumanage.com",
      subValue: "support@edumanage.com",
    },
    {
      icon: FiClock,
      label: "Working Hours",
      value: "Mon - Sat: 9:00 AM - 5:00 PM",
      subValue: "Sunday: Closed",
    },
  ];

  const socialLinks = [
    { 
      icon: FiFacebook, 
      href: "#", 
      label: "Facebook",
      bgHover: "hover:bg-[#1877F2]",
      ringHover: "hover:ring-[#1877F2]/30"
    },
    { 
      icon: FiTwitter, 
      href: "#", 
      label: "Twitter",
      bgHover: "hover:bg-[#1DA1F2]",
      ringHover: "hover:ring-[#1DA1F2]/30"
    },
    { 
      icon: FiLinkedin, 
      href: "#", 
      label: "LinkedIn",
      bgHover: "hover:bg-[#0A66C2]",
      ringHover: "hover:ring-[#0A66C2]/30"
    },
    { 
      icon: FiInstagram, 
      href: "#", 
      label: "Instagram",
      bgHover: "hover:bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      ringHover: "hover:ring-[#DD2A7B]/30"
    },
    { 
      icon: FiYoutube, 
      href: "#", 
      label: "YouTube",
      bgHover: "hover:bg-[#FF0000]",
      ringHover: "hover:ring-[#FF0000]/30"
    },
  ];

  const stats = [
    { icon: FaGraduationCap, value: "10,000+", label: "Students Enrolled" },
    { icon: FiUsers, value: "500+", label: "Expert Faculty" },
    { icon: FiBookOpen, value: "200+", label: "Programs Offered" },
    { icon: FiAward, value: "50+", label: "Awards Won" },
  ];

  return (
    <footer className="relative bg-[#0F172A] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4D8DFF 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Top Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-[#0057D9] via-[#4D8DFF] to-[#0057D9]" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0057D9] to-[#003E99] rounded-xl flex items-center justify-center shadow-lg shadow-[#0057D9]/20 group-hover:shadow-[#0057D9]/40 transition-all duration-300 group-hover:scale-105">
                    <FaGraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#4D8DFF] rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">EduManage</h3>
                  <p className="text-xs text-[#94A3B8] -mt-1 font-medium tracking-wide uppercase">IMS Platform</p>
                </div>
              </Link>

              {/* Description */}
              <p className="text-[#CBD5E1] text-sm leading-relaxed mb-8">
                Empowering educational institutions with cutting-edge management solutions. 
                Streamline operations, enhance learning, and build the future of education.
              </p>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Connect With Us
                </h4>
                <div className="flex items-center space-x-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#94A3B8] ${social.bgHover} hover:text-white transition-all duration-300 ring-1 ring-transparent ${social.ringHover}`}
                        aria-label={social.label}
                        title={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
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
            <h4 className="text-base font-semibold text-white mb-6 flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-[#0057D9] rounded-full" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[#CBD5E1] hover:text-white text-sm transition-all duration-200"
                  >
                    <FiChevronRight className="w-4 h-4 mr-2 text-[#0057D9] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Academic Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base font-semibold text-white mb-6 flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-[#0057D9] rounded-full" />
              <span>Academic</span>
            </h4>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[#CBD5E1] hover:text-white text-sm transition-all duration-200"
                  >
                    <FiChevronRight className="w-4 h-4 mr-2 text-[#0057D9] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
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
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold text-white mb-6 flex items-center space-x-2">
                <span className="w-8 h-[2px] bg-[#0057D9] rounded-full" />
                <span>Contact Info</span>
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-start space-x-3 group">
                      <div className="w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0057D9] transition-all duration-300 mt-0.5">
                        <Icon className="w-4 h-4 text-[#4D8DFF] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-[#64748B] uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm text-[#CBD5E1] font-medium truncate">
                          {item.value}
                        </p>
                        {item.subValue && (
                          <p className="text-xs text-[#94A3B8] truncate">
                            {item.subValue}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-base font-semibold text-white mb-4">
                Subscribe to Newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-[#1E293B] border border-[#334155] text-white text-sm placeholder-[#64748B] focus:outline-none focus:border-[#0057D9] focus:ring-2 focus:ring-[#0057D9]/20 transition-all duration-200"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#0057D9] hover:bg-[#003E99] rounded-md transition-colors duration-200 shadow-lg shadow-[#0057D9]/20"
                    aria-label="Subscribe"
                  >
                    <FiSend className="w-4 h-4 text-white" />
                  </motion.button>
                </div>

                {/* Feedback Messages */}
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center space-x-2 text-green-400 text-sm"
                  >
                    <FiCheckCircle className="w-4 h-4" />
                    <span>Successfully subscribed!</span>
                  </motion.div>
                )}

                {isError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center space-x-2 text-red-400 text-sm"
                  >
                    <FiAlertCircle className="w-4 h-4" />
                    <span>Please enter a valid email address.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0057D9]/5 via-[#4D8DFF]/10 to-[#0057D9]/5 rounded-2xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-[#1E293B] bg-[#0F172A]/50 backdrop-blur-sm">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center relative">
                  {index < stats.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-[#334155] to-transparent" />
                  )}
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="inline-flex p-3 rounded-xl bg-[#0057D9]/10 mb-3"
                  >
                    <Icon className="w-6 h-6 text-[#4D8DFF]" />
                  </motion.div>
                  <div className="text-2xl font-bold text-white mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E293B] pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-[#94A3B8]">
              <FiShield className="w-4 h-4 text-[#4D8DFF]" />
              <span>© {currentYear} EduManage. All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-1 text-sm">
              <Link
                href="/privacy"
                className="px-3 py-1 text-[#94A3B8] hover:text-white transition-colors duration-200 rounded-md hover:bg-[#1E293B]"
              >
                Privacy Policy
              </Link>
              <span className="text-[#334155]">•</span>
              <Link
                href="/terms"
                className="px-3 py-1 text-[#94A3B8] hover:text-white transition-colors duration-200 rounded-md hover:bg-[#1E293B]"
              >
                Terms of Service
              </Link>
              <span className="text-[#334155]">•</span>
              <Link
                href="/cookies"
                className="px-3 py-1 text-[#94A3B8] hover:text-white transition-colors duration-200 rounded-md hover:bg-[#1E293B]"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-1.5 text-sm text-[#94A3B8]">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                <FiHeart className="w-4 h-4 text-red-500" />
              </motion.span>
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#0057D9] hover:bg-[#003E99] text-white rounded-xl shadow-lg shadow-[#0057D9]/20 hover:shadow-[#0057D9]/40 flex items-center justify-center transition-all duration-300 z-50 group"
        aria-label="Scroll to top"
      >
        <FiChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        <span className="absolute -top-10 right-0 bg-[#1E293B] text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Back to top
        </span>
      </motion.button>
    </footer>
  );
};

export default Footer;