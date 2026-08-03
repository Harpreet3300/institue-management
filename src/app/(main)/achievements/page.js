// // app/achievements/page.jsx
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import {
//   FiAward,
//   FiStar,
//   FiTrendingUp,
//   FiUsers,
//   FiBookOpen,
//   FiCode,
//   FiDatabase,
//   FiCloud,
//   FiShield,
//   FiTarget,
//   GiTrophy,
//   FiCalendar,
//   FiExternalLink,
//   FiArrowRight,
//   FiCheckCircle,
//   FiClock,
//   FiMapPin,
//   FiDownload,
//   FiEye,
//   FiHeart,
//   FiShare2,
//   FiBookmark,
//   FiFilter,
//   FiGrid,
//   FiList,
//   FiSearch,
//   FiX,
//   FiChevronRight,
//   FiZap,
//   FiMonitor,
//   FiSmartphone,
//   FiGlobe,
//   FiGitBranch,
//   FiServer,
//   FiCpu,
// } from "react-icons/fi";
// import { FaGraduationCap, FaUniversity, FaMedal, FaCertificate } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiNextdotjs,
//   SiMongodb,
//   SiGithub,
//   SiVercel,
//   SiReact,
//   SiTailwindcss,
//   SiFramer,
//   SiNodedotjs,
// } from "react-icons/si";
// import { GiTrophy } from "react-icons/gi";
// export default function AchievementsPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [viewMode, setViewMode] = useState("grid");
//   const [selectedAchievement, setSelectedAchievement] = useState(null);

//   const filters = [
//     "All",
//     "Academic",
//     "Technical",
//     "Certifications",
//     "Projects",
//     "Extracurricular",
//   ];

//   const stats = [
//     {
//       icon: GiTrophy,
//       value: "15+",
//       label: "Achievements",
//       color: "from-yellow-500 to-yellow-600",
//     },
//     {
//       icon: FaCertificate,
//       value: "8",
//       label: "Certifications",
//       color: "from-blue-500 to-blue-600",
//     },
//     {
//       icon: FiCode,
//       value: "5+",
//       label: "Projects",
//       color: "from-purple-500 to-purple-600",
//     },
//     {
//       icon: FiStar,
//       value: "8.5",
//       label: "CGPA",
//       color: "from-green-500 to-green-600",
//     },
//   ];

//   const achievements = [
//     {
//       id: 1,
//       title: "Institute Management System Development",
//       category: "Projects",
//       type: "Technical",
//       date: "January 2025",
//       description: "Successfully designed and developed a comprehensive Institute Management System as BCA final year project using Next.js, MongoDB, and modern web technologies.",
//       highlights: [
//         "Full-stack web application",
//         "Responsive design implementation",
//         "Database management system",
//         "User authentication & authorization",
//       ],
//       icon: FiMonitor,
//       color: "from-blue-500 to-blue-600",
//       badge: "Featured",
//       badgeColor: "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
//       link: "/projects/ims",
//     },
//     {
//       id: 2,
//       title: "Academic Excellence Award",
//       category: "Academic",
//       type: "Academic",
//       date: "December 2024",
//       description: "Received Academic Excellence Award for maintaining 8.5+ CGPA throughout the BCA program with consistent performance across all semesters.",
//       highlights: [
//         "8.5+ CGPA",
//         "Top 5% of class",
//         "Consistent performance",
//         "Dean's list recognition",
//       ],
//       icon: FaGraduationCap,
//       color: "from-green-500 to-green-600",
//       badge: "Top Performer",
//       badgeColor: "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400",
//       link: null,
//     },
//     {
//       id: 3,
//       title: "Web Development Bootcamp Completion",
//       category: "Certifications",
//       type: "Technical",
//       date: "November 2024",
//       description: "Completed intensive 12-week full-stack web development bootcamp covering modern JavaScript, React, Node.js, and database management.",
//       highlights: [
//         "12-week intensive program",
//         "Full-stack development",
//         "Industry projects",
//         "Hands-on training",
//       ],
//       icon: FaCertificate,
//       color: "from-purple-500 to-purple-600",
//       badge: "Certified",
//       badgeColor: "bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400",
//       link: null,
//     },
//     {
//       id: 4,
//       title: "Hackathon Participation - 2nd Runner Up",
//       category: "Extracurricular",
//       type: "Technical",
//       date: "October 2024",
//       description: "Secured 2nd Runner Up position in college-level hackathon by developing an innovative solution for campus management within 24 hours.",
//       highlights: [
//         "24-hour hackathon",
//         "Team of 3 members",
//         "Campus management solution",
//         "2nd Runner Up prize",
//       ],
//       icon: FiZap,
//       color: "from-orange-500 to-orange-600",
//       badge: "Winner",
//       badgeColor: "bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
//       link: null,
//     },
//     {
//       id: 5,
//       title: "MongoDB Database Certification",
//       category: "Certifications",
//       type: "Technical",
//       date: "September 2024",
//       description: "Earned official MongoDB certification demonstrating proficiency in NoSQL database design, querying, aggregation, and performance optimization.",
//       highlights: [
//         "NoSQL database expertise",
//         "Data modeling skills",
//         "Aggregation pipeline",
//         "Performance tuning",
//       ],
//       icon: SiMongodb,
//       color: "from-green-500 to-green-600",
//       badge: "Certified",
//       badgeColor: "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400",
//       link: null,
//     },
//     {
//       id: 6,
//       title: "Open Source Contribution Recognition",
//       category: "Technical",
//       type: "Technical",
//       date: "August 2024",
//       description: "Recognized for significant contributions to open-source projects on GitHub, including bug fixes, feature additions, and documentation improvements.",
//       highlights: [
//         "20+ pull requests merged",
//         "Multiple repositories",
//         "Documentation contributions",
//         "Community engagement",
//       ],
//       icon: FiGitBranch,
//       color: "from-gray-500 to-gray-600",
//       badge: "Contributor",
//       badgeColor: "bg-gray-100 text-gray-600 dark:bg-gray-500/10 dark:text-gray-400",
//       link: "https://github.com",
//     },
//     {
//       id: 7,
//       title: "Semester Topper - 4th Semester",
//       category: "Academic",
//       type: "Academic",
//       date: "July 2024",
//       description: "Achieved highest marks in 4th Semester BCA examination with exceptional performance in Database Management and Web Technologies subjects.",
//       highlights: [
//         "Highest in class",
//         "Database Management: 95%",
//         "Web Technologies: 92%",
//         "Overall: 8.8 SGPA",
//       ],
//       icon: GiTrophy,
//       color: "from-yellow-500 to-yellow-600",
//       badge: "Topper",
//       badgeColor: "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400",
//       link: null,
//     },
//     {
//       id: 8,
//       title: "Next.js & React Development Certification",
//       category: "Certifications",
//       type: "Technical",
//       date: "June 2024",
//       description: "Completed professional certification in Next.js and React development covering SSR, SSG, API routes, state management, and modern React patterns.",
//       highlights: [
//         "Next.js 14 framework",
//         "Server-side rendering",
//         "API development",
//         "State management",
//       ],
//       icon: SiNextdotjs,
//       color: "from-black to-gray-800",
//       badge: "Certified",
//       badgeColor: "bg-gray-100 text-gray-600 dark:bg-gray-500/10 dark:text-gray-400",
//       link: null,
//     },
//     {
//       id: 9,
//       title: "College Tech Fest - Event Coordinator",
//       category: "Extracurricular",
//       type: "Extracurricular",
//       date: "May 2024",
//       description: "Successfully coordinated college technical festival with 500+ participants, managing multiple events including coding competitions, workshops, and seminars.",
//       highlights: [
//         "500+ participants",
//         "Multiple events managed",
//         "Team coordination",
//         "Event planning & execution",
//       ],
//       icon: FiUsers,
//       color: "from-pink-500 to-pink-600",
//       badge: "Leadership",
//       badgeColor: "bg-pink-100 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400",
//       link: null,
//     },
//     {
//       id: 10,
//       title: "Workshop on Cloud Computing (AWS)",
//       category: "Certifications",
//       type: "Technical",
//       date: "April 2024",
//       description: "Attended and completed hands-on workshop on AWS Cloud Computing covering EC2, S3, Lambda, and cloud architecture fundamentals.",
//       highlights: [
//         "AWS fundamentals",
//         "Cloud architecture",
//         "Hands-on labs",
//         "Deployment strategies",
//       ],
//       icon: FiCloud,
//       color: "from-cyan-500 to-cyan-600",
//       badge: "Workshop",
//       badgeColor: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
//       link: null,
//     },
//     {
//       id: 11,
//       title: "3rd Semester Academic Excellence",
//       category: "Academic",
//       type: "Academic",
//       date: "March 2024",
//       description: "Secured position in top 10% of the class in 3rd Semester with outstanding performance in Data Structures and Operating Systems.",
//       highlights: [
//         "Top 10% of class",
//         "Data Structures: 90%",
//         "Operating Systems: 88%",
//         "Overall: 8.3 SGPA",
//       ],
//       icon: FiBookOpen,
//       color: "from-indigo-500 to-indigo-600",
//       badge: "Excellence",
//       badgeColor: "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400",
//       link: null,
//     },
//     {
//       id: 12,
//       title: "Portfolio Website Development",
//       category: "Projects",
//       type: "Technical",
//       date: "February 2024",
//       description: "Designed and developed a personal portfolio website showcasing projects, skills, and achievements using modern web technologies with responsive design.",
//       highlights: [
//         "Personal branding",
//         "Responsive design",
//         "SEO optimized",
//         "Performance focused",
//       ],
//       icon: FiGlobe,
//       color: "from-teal-500 to-teal-600",
//       badge: "Project",
//       badgeColor: "bg-teal-100 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400",
//       link: null,
//     },
//   ];

//   const filteredAchievements = activeFilter === "All"
//     ? achievements
//     : achievements.filter(item => item.category === activeFilter);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0057D9] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
//           <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#4D8DFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
//             backgroundSize: '50px 50px'
//           }} />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="inline-flex items-center px-4 py-2 rounded-full bg-[#0057D9]/10 border border-[#0057D9]/20 text-[#4D8DFF] text-sm font-medium mb-6 backdrop-blur-sm"
//             >
//               <GiTrophy className="w-4 h-4 mr-2" />
//               Milestones & Recognition
//             </motion.div>

//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
//               <span className="bg-gradient-to-r from-white to-[#CBD5E1] bg-clip-text text-transparent">
//                 My
//               </span>
//               {" "}
//               <span className="bg-gradient-to-r from-[#4D8DFF] to-[#0057D9] bg-clip-text text-transparent">
//                 Achievements
//               </span>
//             </h1>

//             <p className="text-lg sm:text-xl text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
//               A collection of academic excellence, technical certifications, project milestones, 
//               and extracurricular accomplishments throughout my BCA journey.
//             </p>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M0 120V60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0Z"
//               className="fill-[#F8FAFC] dark:fill-[#0F172A]"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="relative bg-[#F8FAFC] dark:bg-[#0F172A] -mt-1 pb-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-10 relative z-10"
//           >
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -5 }}
//                   className="bg-white dark:bg-[#1E293B] rounded-2xl p-6 border border-[#E2E8F0] dark:border-[#334155] shadow-lg text-center"
//                 >
//                   <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}>
//                     <Icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="text-3xl font-bold text-[#111111] dark:text-white mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-[#64748B] dark:text-[#94A3B8] font-medium">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* Filter & Achievements Section */}
//       <section className="relative bg-[#F8FAFC] dark:bg-[#0F172A] py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Filter Bar */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
//           >
//             {/* Category Filters */}
//             <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
//               {filters.map((filter) => (
//                 <motion.button
//                   key={filter}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setActiveFilter(filter)}
//                   className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
//                     activeFilter === filter
//                       ? "bg-[#0057D9] text-white shadow-md shadow-[#0057D9]/20"
//                       : "bg-white dark:bg-[#1E293B] text-[#475569] dark:text-[#CBD5E1] border border-[#E2E8F0] dark:border-[#334155] hover:border-[#0057D9] dark:hover:border-[#4D8DFF]"
//                   }`}
//                 >
//                   {filter}
//                 </motion.button>
//               ))}
//             </div>

//             {/* View Toggle */}
//             <div className="flex items-center gap-2 bg-white dark:bg-[#1E293B] rounded-xl p-1 border border-[#E2E8F0] dark:border-[#334155]">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-lg transition-all duration-200 ${
//                   viewMode === "grid"
//                     ? "bg-[#0057D9] text-white"
//                     : "text-[#94A3B8] hover:text-[#111111] dark:hover:text-white"
//                 }`}
//               >
//                 <FiGrid className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-lg transition-all duration-200 ${
//                   viewMode === "list"
//                     ? "bg-[#0057D9] text-white"
//                     : "text-[#94A3B8] hover:text-[#111111] dark:hover:text-white"
//                 }`}
//               >
//                 <FiList className="w-4 h-4" />
//               </button>
//             </div>
//           </motion.div>

//           {/* Achievements Grid/List */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`${activeFilter}-${viewMode}`}
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className={viewMode === "grid"
//                 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//                 : "space-y-4"
//               }
//             >
//               {filteredAchievements.map((achievement) => {
//                 const Icon = achievement.icon;
                
//                 if (viewMode === "grid") {
//                   return (
//                     <motion.div
//                       key={achievement.id}
//                       variants={itemVariants}
//                       whileHover={{ y: -5 }}
//                       className="group bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
//                     >
//                       {/* Card Header */}
//                       <div className={`p-6 bg-gradient-to-br ${achievement.color} relative overflow-hidden`}>
//                         <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
//                         <div className="relative flex items-start justify-between">
//                           <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                             <Icon className="w-7 h-7 text-white" />
//                           </div>
//                           <span className={`px-3 py-1 rounded-full text-xs font-semibold ${achievement.badgeColor}`}>
//                             {achievement.badge}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Card Content */}
//                       <div className="p-6">
//                         <div className="flex items-center text-xs text-[#94A3B8] mb-2">
//                           <FiCalendar className="w-3 h-3 mr-1" />
//                           {achievement.date}
//                         </div>
//                         <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-2 group-hover:text-[#0057D9] dark:group-hover:text-[#4D8DFF] transition-colors duration-200">
//                           {achievement.title}
//                         </h3>
//                         <p className="text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-4 line-clamp-2">
//                           {achievement.description}
//                         </p>

//                         {/* Highlights */}
//                         <div className="space-y-2">
//                           {achievement.highlights.slice(0, 2).map((highlight, idx) => (
//                             <div key={idx} className="flex items-center space-x-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
//                               <FiCheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
//                               <span>{highlight}</span>
//                             </div>
//                           ))}
//                           {achievement.highlights.length > 2 && (
//                             <p className="text-xs text-[#0057D9] dark:text-[#4D8DFF] pl-5">
//                               +{achievement.highlights.length - 2} more
//                             </p>
//                           )}
//                         </div>

//                         {/* Action */}
//                         {achievement.link && (
//                           <Link
//                             href={achievement.link}
//                             className="mt-4 inline-flex items-center space-x-1 text-sm font-medium text-[#0057D9] dark:text-[#4D8DFF] hover:underline"
//                           >
//                             <span>View Details</span>
//                             <FiExternalLink className="w-3 h-3" />
//                           </Link>
//                         )}
//                       </div>
//                     </motion.div>
//                   );
//                 }

//                 // List View
//                 return (
//                   <motion.div
//                     key={achievement.id}
//                     variants={itemVariants}
//                     whileHover={{ x: 5 }}
//                     className="group bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm hover:shadow-md transition-all duration-300 p-6"
//                   >
//                     <div className="flex items-start space-x-4">
//                       <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
//                         <Icon className="w-7 h-7 text-white" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center flex-wrap gap-2 mb-1">
//                           <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${achievement.badgeColor}`}>
//                             {achievement.badge}
//                           </span>
//                           <span className="text-xs text-[#94A3B8] flex items-center">
//                             <FiCalendar className="w-3 h-3 mr-1" />
//                             {achievement.date}
//                           </span>
//                         </div>
//                         <h3 className="text-lg font-bold text-[#111111] dark:text-white group-hover:text-[#0057D9] dark:group-hover:text-[#4D8DFF] transition-colors duration-200">
//                           {achievement.title}
//                         </h3>
//                         <p className="text-sm text-[#475569] dark:text-[#CBD5E1] mt-1">
//                           {achievement.description}
//                         </p>
//                       </div>
//                       <FiChevronRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#0057D9] dark:group-hover:text-[#4D8DFF] transition-colors duration-200 flex-shrink-0" />
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </AnimatePresence>

//           {/* Empty State */}
//           {filteredAchievements.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20"
//             >
//               <FiAward className="w-16 h-16 text-[#94A3B8] mx-auto mb-4" />
//               <h3 className="text-xl font-bold text-[#111111] dark:text-white mb-2">No Achievements Found</h3>
//               <p className="text-[#64748B] dark:text-[#94A3B8]">Try selecting a different category filter.</p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative bg-gradient-to-br from-[#0057D9] to-[#003E99] py-20 overflow-hidden">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }} />
        
//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
//               Striving for Excellence
//             </h2>
//             <p className="text-[#CBD5E1] text-lg mb-8 max-w-2xl mx-auto">
//               Every achievement is a stepping stone towards greater success. 
//               Continue the journey of learning and growth.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Link
//                 href="/projects"
//                 className="px-8 py-4 bg-white text-[#0057D9] font-semibold rounded-xl hover:bg-[#F8FAFC] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
//               >
//                 View Projects
//               </Link>
//               <Link
//                 href="/contact"
//                 className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
//               >
//                 Get In Touch
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }