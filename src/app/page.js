// app/page.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiUser,
  FiBookOpen,
  FiHash,
  FiMapPin,
  FiFolder,
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiCloud,
  FiServer,
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiUsers,
  FiAward,
  FiTarget,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiLayout,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";
import {
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiGithub,
  SiVercel,
} from "react-icons/si";

export default function HomePage() {
  const projectInfo = {
    student: {
      name: "Harpreet Kaur",
      course: "BCA",
      semester: "5th Semester",
      rollNo: "243698",
      college: "GRD Group of College, Ropar",
    },
    project: {
      name: "Institute Management Website",
      description: "A comprehensive web application for managing educational institutions, streamlining administrative tasks, and enhancing the learning experience.",
    },
    techStack: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", description: "Core programming language" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", description: "React framework for production" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", description: "NoSQL database" },
      { name: "GitHub", icon: SiGithub, color: "#181717", description: "Version control & collaboration" },
      { name: "Vercel", icon: SiVercel, color: "#000000", description: "Deployment & hosting" },
      { name: "Cloudairy", icon: FiCloud, color: "#0057D9", description: "Cloud infrastructure" },
    ],
  };

  const features = [
    {
      icon: FiUsers,
      title: "Student Management",
      description: "Complete student lifecycle management from admission to graduation",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FiBookOpen,
      title: "Course Management",
      description: "Comprehensive course catalog with scheduling and resource allocation",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FiTarget,
      title: "Attendance Tracking",
      description: "Real-time attendance monitoring with automated reporting system",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FiTrendingUp,
      title: "Performance Analytics",
      description: "Advanced analytics and insights for student and institutional performance",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: FiShield,
      title: "Secure Platform",
      description: "Enterprise-grade security with role-based access control",
      color: "from-red-500 to-red-600",
    },
    {
      icon: FiZap,
      title: "Fast & Responsive",
      description: "Lightning-fast performance with modern UI/UX design principles",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  const highlights = [
    { icon: FiLayout, label: "Modern UI/UX", description: "Intuitive interface design" },
    { icon: FiMonitor, label: "Responsive", description: "Works on all devices" },
    { icon: FiServer, label: "Scalable", description: "Cloud-ready architecture" },
    { icon: FiSmartphone, label: "Mobile First", description: "Optimized for mobile" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0057D9] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4D8DFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0057D9] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#0057D9]/10 border border-[#0057D9]/20 text-[#4D8DFF] text-sm font-medium backdrop-blur-sm">
                <FiStar className="w-4 h-4 mr-2" />
                BCA Final Year Project
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-[#4D8DFF] bg-clip-text text-transparent">
                Institute Management
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#4D8DFF] to-[#0057D9] bg-clip-text text-transparent">
                System
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#CBD5E1] max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              A modern, comprehensive web application designed to streamline 
              educational institution operations, enhance administrative efficiency, 
              and provide an exceptional learning management experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/courses"
                className="group inline-flex items-center px-8 py-4 bg-[#0057D9] hover:bg-[#003E99] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#0057D9]/25 hover:shadow-[#0057D9]/40 hover:-translate-y-0.5"
              >
                Explore Features
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center px-8 py-4 border-2 border-[#334155] hover:border-[#4D8DFF] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5"
              >
                Learn More
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <Icon className="w-6 h-6 text-[#4D8DFF] mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-[#94A3B8]">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120V60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0Z"
              className="fill-[#F8FAFC] dark:fill-[#0F172A]"
            />
          </svg>
        </div>
      </section>

      {/* Student & Project Info Section */}
      <section className="relative bg-[#F8FAFC] dark:bg-[#0F172A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] dark:text-white mb-4">
              Project Details
            </h2>
            <p className="text-[#475569] dark:text-[#CBD5E1] max-w-2xl mx-auto">
              Comprehensive information about the student and project specifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Student Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="h-full p-8 bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0057D9] to-[#003E99] rounded-xl flex items-center justify-center">
                    <FiUser className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] dark:text-white">Student Information</h3>
                    <p className="text-sm text-[#64748B] dark:text-[#94A3B8]">Personal & Academic Details</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: FiUser, label: "Student Name", value: projectInfo.student.name, highlight: true },
                    { icon: FiBookOpen, label: "Course", value: `${projectInfo.student.course} - ${projectInfo.student.semester}` },
                    { icon: FiHash, label: "Roll Number", value: projectInfo.student.rollNo },
                    { icon: FiMapPin, label: "College", value: projectInfo.student.college },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[#F1F5F9] dark:hover:bg-[#0F172A] transition-all duration-200 group/item"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#0057D9]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#0057D9] transition-colors duration-200">
                          <Icon className="w-5 h-5 text-[#0057D9] group-hover/item:text-white transition-colors duration-200" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          <p className={`font-semibold ${item.highlight ? 'text-lg text-[#0057D9] dark:text-[#4D8DFF]' : 'text-[#111111] dark:text-white'}`}>
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Decorative Element */}
                <div className="mt-8 pt-6 border-t border-[#E2E8F0] dark:border-[#334155]">
                  <div className="flex items-center space-x-2 text-sm text-[#64748B] dark:text-[#94A3B8]">
                    <FiCheckCircle className="w-4 h-4 text-green-500" />
                    <span>Verified Student</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="h-full p-8 bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4D8DFF] to-[#0057D9] rounded-xl flex items-center justify-center">
                    <FiFolder className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] dark:text-white">Project Information</h3>
                    <p className="text-sm text-[#64748B] dark:text-[#94A3B8]">Technical Specifications</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-bold text-[#111111] dark:text-white mb-2">
                    {projectInfo.project.name}
                  </h4>
                  <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                    {projectInfo.project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-[#111111] dark:text-white mb-4 uppercase tracking-wider">
                    Technology Stack
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {projectInfo.techStack.map((tech, index) => {
                      const Icon = tech.icon;
                      return (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="p-3 rounded-xl bg-[#F1F5F9] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B] hover:border-[#0057D9] dark:hover:border-[#0057D9] transition-all duration-200 group/tech"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#1E293B] flex items-center justify-center shadow-sm">
                              <Icon 
                                className="w-5 h-5" 
                                style={{ color: tech.color }}
                              />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#111111] dark:text-white">
                                {tech.name}
                              </p>
                              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                                {tech.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-white dark:bg-[#0F172A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-[#475569] dark:text-[#CBD5E1] max-w-2xl mx-auto">
              Discover the powerful features that make our Institute Management System stand out
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group p-6 bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#475569] dark:text-[#CBD5E1] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#0057D9] to-[#003E99] py-20 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-[#CBD5E1] text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of educational institutions that have already modernized 
              their management systems with our platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="px-8 py-4 bg-white text-[#0057D9] font-semibold rounded-xl hover:bg-[#F8FAFC] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Started Now
              </Link>
              <Link
                href="/courses"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}