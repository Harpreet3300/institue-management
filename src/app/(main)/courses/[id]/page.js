"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import coursesData from "@/src/app/utils/coursePageData";
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle, 
  BookOpen, 
  Users, 
  Star, 
  ChevronRight,
  GraduationCap,
  Zap,
  Heart,
  Share2,
  Bookmark,
  Award,
  Sparkles,
  Loader2,
  Check
} from "lucide-react";

const CourseDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [enrollHover, setEnrollHover] = useState(false);
  const [enrolling, setEnrolling] = useState(false);
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const courseId = parseInt(params.id);
    const foundCourse = coursesData.find(c => c.courseID === courseId);
    
    if (foundCourse) {
      setCourse(foundCourse);
      // Check if course is bookmarked
      const bookmarks = JSON.parse(localStorage.getItem("courseBookmarks") || "[]");
      setIsBookmarked(bookmarks.includes(foundCourse.courseID));
    } else {
      router.push("/courses");
    }
    
    setIsLoading(false);
  }, [params.id, router]);

  // Handle Enrollment
  const handleEnroll = async () => {
    setEnrolling(true);
    setMessage({ type: "", text: "" });
    
    try {
      // Check if user is logged in
      const token = localStorage.getItem("studentToken");
      if (!token) {
        setMessage({ 
          type: "error", 
          text: "Please login first to enroll in this course" 
        });
        setTimeout(() => {
          router.push("/student-login");
        }, 2000);
        setEnrolling(false);
        return;
      }

      // Simulate enrollment process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store enrollment data
      const enrollments = JSON.parse(localStorage.getItem("enrolledCourses") || "[]");
      if (!enrollments.includes(course.courseID)) {
        enrollments.push(course.courseID);
        localStorage.setItem("enrolledCourses", JSON.stringify(enrollments));
      }
      
      setEnrollmentSuccess(true);
      setMessage({ 
        type: "success", 
        text: "Successfully enrolled! Redirecting to your courses..." 
      });
      
      setTimeout(() => {
        router.push("/my-courses");
      }, 2000);
      
    } catch (error) {
      setMessage({ 
        type: "error", 
        text: "Enrollment failed. Please try again." 
      });
    } finally {
      setEnrolling(false);
    }
  };

  // Handle Bookmark Toggle
  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("courseBookmarks") || "[]");
    
    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(id => id !== course.courseID);
      localStorage.setItem("courseBookmarks", JSON.stringify(updatedBookmarks));
      setMessage({ type: "success", text: "Course removed from bookmarks" });
    } else {
      bookmarks.push(course.courseID);
      localStorage.setItem("courseBookmarks", JSON.stringify(bookmarks));
      setMessage({ type: "success", text: "Course added to bookmarks!" });
    }
    
    setIsBookmarked(!isBookmarked);
    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  // Handle Share
  const handleShare = async () => {
    const shareData = {
      title: course.courseName,
      text: `Check out this course: ${course.courseName} - ${course.description}`,
      url: window.location.href,
    };

    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setMessage({ type: "success", text: "Shared successfully!" });
      } catch (err) {
        if (err.name !== 'AbortError') {
          setMessage({ type: "error", text: "Could not share. Copy link instead!" });
        }
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      setMessage({ type: "success", text: "Link copied to clipboard!" });
    }
    
    setTimeout(() => {
      setMessage({ type: "", text: "" });
    }, 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  if (isLoading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #e8edf5 0%, #d5dce8 25%, #cbd5e1 50%, #d5dce8 75%, #e8edf5 100%)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center"
        >
          <div 
            className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
            style={{
              background: 'linear-gradient(135deg, #0057D9, #003E99)',
              boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 font-medium"
          >
            Loading course details...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (!course) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #e8edf5 0%, #d5dce8 25%, #cbd5e1 50%, #d5dce8 75%, #e8edf5 100%)',
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
            boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff',
          }}
        >
          <div 
            className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6"
            style={{
              background: 'linear-gradient(135deg, #0057D9, #003E99)',
              boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.2), inset -4px -4px 8px rgba(255,255,255,0.1)',
            }}
          >
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/courses")}
            className="px-8 py-4 rounded-2xl font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #0057D9, #003E99)',
              boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
            }}
          >
            Back to Courses
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen relative py-8 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #e8edf5 0%, #d5dce8 25%, #cbd5e1 50%, #d5dce8 75%, #e8edf5 100%)',
      }}
    >
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              background: `radial-gradient(circle, rgba(0,87,217,${Math.random() * 0.06 + 0.02}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 60 - 30, 0],
              y: [0, Math.random() * 60 - 30, 0],
              scale: [1, Math.random() * 0.3 + 0.85, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Toast Message */}
      <AnimatePresence>
        {message.text && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className="fixed top-4 left-1/2 z-50 px-6 py-3 rounded-2xl shadow-lg"
            style={{
              background: message.type === "success" 
                ? 'linear-gradient(135deg, #10b981, #059669)' 
                : 'linear-gradient(135deg, #ef4444, #dc2626)',
            }}
          >
            <p className="text-white font-medium">{message.text}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button & Actions */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between mb-8"
        >
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.back()}
            className="flex items-center space-x-2 px-5 py-3 rounded-2xl font-medium text-gray-700"
            style={{
              background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
              boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </motion.button>

          <div className="flex items-center space-x-3">
            {/* Share Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleShare}
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
              }}
            >
              <Share2 className="w-5 h-5 text-gray-600" />
            </motion.button>

            {/* Bookmark Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleBookmark}
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: isBookmarked 
                  ? 'linear-gradient(135deg, #0057D9, #003E99)' 
                  : 'linear-gradient(135deg, #e8edf5, #ffffff)',
                boxShadow: isBookmarked
                  ? 'inset 4px 4px 8px rgba(0,0,0,0.2), inset -4px -4px 8px rgba(255,255,255,0.1)'
                  : '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
              }}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'text-white fill-white' : 'text-gray-600'}`} />
            </motion.button>
          </div>
        </motion.div>

        {/* Course Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Course Image - WITHOUT Play Button */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <div 
              className="relative rounded-3xl overflow-hidden"
              style={{
                boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff',
              }}
            >
              <div className="relative w-full h-[400px]">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 border-t-2 border-[#0057D9] border-solid rounded-full"
                    />
                  </div>
                )}
                <Image
                  src={course.CourseImage}
                  alt={course.courseName}
                  fill
                  className="object-cover"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </motion.div>

          {/* Course Info */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3 space-y-6"
          >
            <div 
              className="p-8 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff',
              }}
            >
              {/* Category Badge */}
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 rounded-xl text-sm font-semibold text-white mb-4"
                style={{
                  background: 'linear-gradient(135deg, #0057D9, #003E99)',
                  boxShadow: '4px 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                {course.category || "Development"}
              </motion.span>

              <h1 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #1e293b, #334155)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {course.courseName}
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">4.8</span>
                <span className="text-gray-500">(2,456 ratings)</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div 
                  className="p-4 rounded-2xl text-center"
                  style={{
                    background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                    boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
                  }}
                >
                  <Clock className="w-6 h-6 text-[#0057D9] mx-auto mb-2" />
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="font-semibold text-gray-800">{course.courseDuration}</p>
                </div>
                <div 
                  className="p-4 rounded-2xl text-center"
                  style={{
                    background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                    boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
                  }}
                >
                  <Users className="w-6 h-6 text-[#0057D9] mx-auto mb-2" />
                  <p className="text-xs text-gray-500">Students</p>
                  <p className="font-semibold text-gray-800">2,456</p>
                </div>
                <div 
                  className="p-4 rounded-2xl text-center"
                  style={{
                    background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                    boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
                  }}
                >
                  <BookOpen className="w-6 h-6 text-[#0057D9] mx-auto mb-2" />
                  <p className="text-xs text-gray-500">Lessons</p>
                  <p className="font-semibold text-gray-800">{course.courseSyllabus?.length * 5 || 24}</p>
                </div>
                <div 
                  className="p-4 rounded-2xl text-center"
                  style={{
                    background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                    boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
                  }}
                >
                  <Award className="w-6 h-6 text-[#0057D9] mx-auto mb-2" />
                  <p className="text-xs text-gray-500">Certificate</p>
                  <p className="font-semibold text-gray-800">Yes</p>
                </div>
              </div>

              {/* Price & Enroll */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">Course Fee</p>
                  <p className="text-3xl font-bold text-[#0057D9]">₹{course.courseFee}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnroll}
                  disabled={enrolling || enrollmentSuccess}
                  onHoverStart={() => setEnrollHover(true)}
                  onHoverEnd={() => setEnrollHover(false)}
                  className="px-8 py-4 rounded-2xl font-semibold text-white flex items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: enrollmentSuccess 
                      ? 'linear-gradient(135deg, #10b981, #059669)' 
                      : 'linear-gradient(135deg, #0057D9, #003E99)',
                    boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
                  }}
                >
                  {enrolling ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5" />
                      <span>Enrolling...</span>
                    </>
                  ) : enrollmentSuccess ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Enrolled!</span>
                    </>
                  ) : (
                    <>
                      <span>Enroll Now</span>
                      <motion.div
                        animate={{ x: enrollHover ? 5 : 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div 
            className="flex rounded-2xl p-1.5"
            style={{
              background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
              boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
            }}
          >
            {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base capitalize transition-all ${
                  activeTab === tab 
                    ? 'text-white' 
                    : 'text-gray-600'
                }`}
                style={activeTab === tab ? {
                  background: 'linear-gradient(135deg, #0057D9, #003E99)',
                  boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                } : {}}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* What You'll Learn */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div 
                  className="p-8 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                    boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff',
                  }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span 
                      className="w-10 h-10 rounded-xl flex items-center justify-center mr-3"
                      style={{
                        background: 'linear-gradient(135deg, #0057D9, #003E99)',
                        boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Zap className="w-5 h-5 text-white" />
                    </span>
                    What You'll Learn
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.courseLearnings.map((learning, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -3 }}
                        className="flex items-start p-4 rounded-2xl"
                        style={{
                          background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                          boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                        }}
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{learning}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Course Syllabus */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div 
                  className="p-8 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                    boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff',
                  }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <span 
                      className="w-10 h-10 rounded-xl flex items-center justify-center mr-3"
                      style={{
                        background: 'linear-gradient(135deg, #0057D9, #003E99)',
                        boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.2)',
                      }}
                    >
                      <BookOpen className="w-5 h-5 text-white" />
                    </span>
                    Course Syllabus
                  </h2>

                  {/* Module Tabs */}
                  <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-6 pb-2">
                    {course.courseSyllabus.map((module, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setActiveModule(index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-5 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                          activeModule === index 
                            ? 'text-white' 
                            : 'text-gray-600'
                        }`}
                        style={activeModule === index ? {
                          background: 'linear-gradient(135deg, #0057D9, #003E99)',
                          boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                        } : {
                          background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                          boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                        }}
                      >
                        {module.module}
                      </motion.button>
                    ))}
                  </div>

                  {/* Module Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModule}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 rounded-2xl"
                      style={{
                        background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                        boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
                      }}
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        {course.courseSyllabus[activeModule].module}
                      </h3>
                      <ul className="space-y-3">
                        {course.courseSyllabus[activeModule].topics.map((topic, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center p-3 rounded-xl hover:bg-white/50 transition-colors"
                          >
                            <div 
                              className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
                              style={{
                                background: 'linear-gradient(135deg, #0057D9, #003E99)',
                              }}
                            >
                              <BookOpen className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700">{topic}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section - WITHOUT Try Free Lesson Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div 
            className="p-8 md:p-12 rounded-3xl text-center text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0057D9, #003E99)',
              boxShadow: '20px 20px 60px rgba(0,87,217,0.3), -20px -20px 60px #ffffff',
            }}
          >
            {/* Decorative circles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.05, 0.1],
                  }}
                  transition={{
                    duration: 6 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  className="absolute rounded-full border border-white/20"
                  style={{
                    width: `${150 + i * 100}px`,
                    height: `${150 + i * 100}px`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <Sparkles className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with our comprehensive courses.
              </p>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnroll}
                  disabled={enrolling || enrollmentSuccess}
                  className="px-8 py-4 rounded-2xl font-semibold text-[#0057D9] flex items-center space-x-2 disabled:opacity-70"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
                    boxShadow: '8px 8px 16px rgba(0,0,0,0.2), -8px -8px 16px rgba(255,255,255,0.1)',
                  }}
                >
                  {enrolling ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : enrollmentSuccess ? (
                    <Check className="w-5 h-5" />
                  ) : null}
                  <span>{enrollmentSuccess ? 'Enrolled!' : `Enroll Now - ₹${course.courseFee}`}</span>
                  {!enrolling && !enrollmentSuccess && <ChevronRight className="w-5 h-5" />}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <div 
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl"
            style={{
              boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
            }}
          >
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm text-gray-600">
              30-Day Money-Back Guarantee • Lifetime Access
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetail;