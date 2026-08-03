// app/about/page.jsx
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
  FiTarget,
  FiHeart,
  FiAward,
  FiCalendar,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiExternalLink,
  FiClock,
  FiTrendingUp,
  FiZap,
  FiShield,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";
import {
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiGithub,
  SiVercel,
  SiTailwindcss,
  SiFramer,
  SiReact,
} from "react-icons/si";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

export default function AboutPage() {
  const personalInfo = {
    name: "Harpreet Kaur",
    course: "Bachelor of Computer Applications (BCA)",
    semester: "5th Semester",
    rollNo: "243698",
    college: "GRD Group of College, Ropar",
    email: "harpreet.kaur@edumanage.com",
    phone: "+91 98765 43210",
    location: "Ropar, Punjab, India",
    bio: "A passionate and dedicated BCA student with a strong interest in web development and software engineering. Currently working on an Institute Management System as a final year project, aiming to create efficient digital solutions for educational institutions.",
    skills: [
      "HTML5", "CSS3", "JavaScript", "React.js", "Next.js",
      "Node.js", "MongoDB", "Git & GitHub", "Tailwind CSS",
      "Framer Motion", "REST APIs", "Responsive Design"
    ],
    hobbies: ["Coding", "Learning New Technologies", "Problem Solving", "Reading Tech Blogs"],
    achievements: [
      "Developed Institute Management System as BCA Final Year Project",
      "Completed 12+ courses with 8.5 GPA",
      "Active participant in college tech fests and hackathons",
      "Open source contributor on GitHub"
    ],
    education: [
      {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "GRD Group of College, Ropar",
        year: "2024 - Present",
        description: "Currently in 5th Semester with focus on web development and software engineering",
      },
      {
        degree: "Senior Secondary (12th)",
        institution: "Senior Secondary School",
        year: "2022 - 2024",
        description: "Completed with focus on Computer Science and Mathematics",
      },
      {
        degree: "Secondary (10th)",
        institution: "High School",
        year: "2020 - 2022",
        description: "Completed with distinction",
      },
    ],
  };

  const techStack = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Language" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Framework" },
    { name: "React", icon: SiReact, color: "#61DAFB", category: "Library" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Styling" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF", category: "Animation" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
    { name: "GitHub", icon: SiGithub, color: "#181717", category: "Version Control" },
    { name: "Vercel", icon: SiVercel, color: "#000000", category: "Deployment" },
  ];

  const projectInfo = {
    name: "Institute Management Website",
    description: "A comprehensive web application designed to streamline educational institution operations, manage student data, track attendance, handle fee management, and provide an intuitive interface for administrators, faculty, and students.",
    features: [
      "Student registration and profile management",
      "Course and curriculum management",
      "Attendance tracking system",
      "Fee payment and management",
      "Result publication and analysis",
      "Admin dashboard with analytics",
      "Responsive design for all devices",
      "Secure authentication system",
    ],
    duration: "3 Months",
    status: "In Progress",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
                BCA Final Year Student
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-[#CBD5E1] bg-clip-text text-transparent">
                Hi, I'm
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#4D8DFF] to-[#0057D9] bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#CBD5E1] max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Quick Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {[
                { icon: FaGraduationCap, label: "Course", value: "BCA" },
                { icon: FiBookOpen, label: "Semester", value: "5th" },
                { icon: FiHash, label: "Roll No", value: "243698" },
                { icon: FaUniversity, label: "College", value: "GRD" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    <Icon className="w-6 h-6 text-[#4D8DFF] mx-auto mb-2" />
                    <p className="text-xs text-[#94A3B8] mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-white">{item.value}</p>
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

      {/* Personal Details Section */}
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
              Personal Information
            </h2>
            <p className="text-[#475569] dark:text-[#CBD5E1] max-w-2xl mx-auto">
              Get to know more about me and my academic journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm overflow-hidden">
                {/* Avatar Section */}
                <div className="p-8 bg-gradient-to-br from-[#0057D9] to-[#003E99] text-center">
                  <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-4xl mx-auto mb-4 border-2 border-white/30">
                    HK
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{personalInfo.name}</h3>
                  <p className="text-[#CBD5E1] text-sm">BCA Student</p>
                </div>

                {/* Contact Details */}
                <div className="p-6 space-y-4">
                  {[
                    { icon: FaGraduationCap, label: "Course", value: personalInfo.course },
                    { icon: FiBookOpen, label: "Semester", value: personalInfo.semester },
                    { icon: FiHash, label: "Roll Number", value: personalInfo.rollNo },
                    { icon: FaUniversity, label: "College", value: personalInfo.college },
                    { icon: FiMail, label: "Email", value: personalInfo.email },
                    { icon: FiPhone, label: "Phone", value: personalInfo.phone },
                    { icon: FiMapPin, label: "Location", value: personalInfo.location },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-9 h-9 rounded-lg bg-[#0057D9]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-[#0057D9]" />
                        </div>
                        <div>
                          <p className="text-xs text-[#94A3B8] uppercase tracking-wider">{item.label}</p>
                          <p className="text-sm font-medium text-[#111111] dark:text-white">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Bio & Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* About Me */}
              <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0057D9] to-[#003E99] flex items-center justify-center">
                    <FiHeart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] dark:text-white">About Me</h3>
                    <p className="text-sm text-[#94A3B8]">Who I am & what I do</p>
                  </div>
                </div>
                <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                
                {/* Hobbies */}
                <div>
                  <h4 className="text-sm font-semibold text-[#111111] dark:text-white mb-3">Interests & Hobbies</h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.hobbies.map((hobby, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-[#F1F5F9] dark:bg-[#0F172A] text-[#475569] dark:text-[#CBD5E1] rounded-lg text-sm border border-[#E2E8F0] dark:border-[#334155]"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4D8DFF] to-[#0057D9] flex items-center justify-center">
                    <FiZap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] dark:text-white">Technical Skills</h3>
                    <p className="text-sm text-[#94A3B8]">Technologies I work with</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-[#0057D9]/5 text-[#0057D9] dark:bg-[#0057D9]/10 dark:text-[#4D8DFF] rounded-lg text-sm font-medium border border-[#0057D9]/10 dark:border-[#0057D9]/20 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0057D9] to-[#003E99] flex items-center justify-center">
                    <FiAward className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111111] dark:text-white">Achievements</h3>
                    <p className="text-sm text-[#94A3B8]">My accomplishments</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {personalInfo.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-3 p-3 rounded-xl hover:bg-[#F1F5F9] dark:hover:bg-[#0F172A] transition-colors duration-200"
                    >
                      <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#475569] dark:text-[#CBD5E1]">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
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
              Education Journey
            </h2>
            <p className="text-[#475569] dark:text-[#CBD5E1] max-w-2xl mx-auto">
              My academic path and qualifications
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {personalInfo.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start mb-8 last:mb-0"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#0057D9] text-white font-bold flex-shrink-0 shadow-lg shadow-[#0057D9]/20">
                  <FaGraduationCap className="w-6 h-6" />
                </div>
                <div className="ml-6 bg-[#F8FAFC] dark:bg-[#1E293B] rounded-xl p-6 border border-[#E2E8F0] dark:border-[#334155] flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#111111] dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-medium text-[#0057D9] dark:text-[#4D8DFF] bg-[#0057D9]/10 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#0057D9] dark:text-[#4D8DFF] mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-[#475569] dark:text-[#CBD5E1]">
                    {edu.description}
                  </p>
                </div>
                {index < personalInfo.education.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-[#E2E8F0] dark:bg-[#334155]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Section */}
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
              Current Project
            </h2>
            <p className="text-[#475569] dark:text-[#CBD5E1] max-w-2xl mx-auto">
              Working on an exciting final year project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0057D9] to-[#003E99] flex items-center justify-center">
                  <FiFolder className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111111] dark:text-white">{projectInfo.name}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="flex items-center text-xs text-[#94A3B8]">
                      <FiClock className="w-3 h-3 mr-1" />
                      {projectInfo.duration}
                    </span>
                    <span className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs rounded-full font-medium">
                      {projectInfo.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-[#475569] dark:text-[#CBD5E1] mb-6 leading-relaxed">
                {projectInfo.description}
              </p>

              {/* Project Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#111111] dark:text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projectInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-[#475569] dark:text-[#CBD5E1]">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Used */}
              <div>
                <h4 className="text-sm font-semibold text-[#111111] dark:text-white mb-3">Technologies Used</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center space-x-2 p-3 rounded-xl bg-[#F1F5F9] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#1E293B]"
                      >
                        <Icon className="w-5 h-5" style={{ color: tech.color }} />
                        <div>
                          <p className="text-xs font-semibold text-[#111111] dark:text-white">{tech.name}</p>
                          <p className="text-[10px] text-[#94A3B8]">{tech.category}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
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
              Let's Work Together!
            </h2>
            <p className="text-[#CBD5E1] text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#0057D9] font-semibold rounded-xl hover:bg-[#F8FAFC] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Contact Me
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}