"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, 
  EyeOff, 
  Loader2, 
  Mail, 
  Lock, 
  ArrowRight,
  Sparkles,
  UserPlus,
  GraduationCap,
  BookOpen,
  Users,
  Star,
  ChevronRight,
  Zap,
  Heart,
  ArrowLeft
} from "lucide-react";

export default function StudentLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await fetch("/api/student/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      // Store authentication data
      localStorage.setItem("studentToken", data.token);
      localStorage.setItem("studentData", JSON.stringify(data.student));
      
      // Enhanced storage for profile
      if (data.token) {
        localStorage.setItem("edumanage_token", data.token);
      }
      if (data.student) {
        const enhancedStudentData = {
          ...data.student,
          fullName: data.student.fullName || `${data.student.firstName || ""} ${data.student.lastName || ""}`.trim(),
          initials: data.student.initials || `${data.student.firstName?.[0] || ""}${data.student.lastName?.[0] || ""}`,
        };
        localStorage.setItem("edumanage_user", JSON.stringify(enhancedStudentData));
      }
      
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      localStorage.setItem("edumanage_token_expiry", expiryDate.toISOString());
      
      if (rememberMe) {
        localStorage.setItem("edumanage_remember_me", "true");
      }

      setMessage({ 
        type: "success", 
        text: `Login successful! Welcome ${data.student?.name || data.student?.firstName || "student"}!` 
      });
      
      setTimeout(() => {
        router.push("/profile");
      }, 1500);
      
    } catch (error) {
      setMessage({ 
        type: "error", 
        text: error.message || "Something went wrong" 
      });
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: BookOpen, label: "200+ Courses", color: "#0057D9" },
    { icon: Users, label: "10K+ Students", color: "#003E99" },
    { icon: Star, label: "Top Rated", color: "#4D8DFF" },
  ];

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #e8edf5 0%, #d5dce8 25%, #cbd5e1 50%, #d5dce8 75%, #e8edf5 100%)',
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 80 + 30,
              height: Math.random() * 80 + 30,
              background: `radial-gradient(circle, rgba(0,87,217,${Math.random() * 0.08 + 0.03}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
              scale: [1, Math.random() * 0.4 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="space-y-8">
            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0057D9] transition-colors duration-200 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="relative">
                <div 
                  className="w-20 h-20 rounded-3xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                    boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #0057D9, #003E99)',
                      boxShadow: 'inset 2px 2px 5px rgba(255,255,255,0.2), inset -2px -2px 5px rgba(0,0,0,0.2)',
                    }}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"
                />
              </div>
              <div>
                <h1 
                  className="text-4xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #0057D9, #003E99)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  EduManage
                </h1>
                <p className="text-gray-600 font-medium">Student Portal</p>
              </div>
            </motion.div>

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <h2 
                className="text-5xl font-bold leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #1e293b, #334155)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Your Learning
                <br />
                Journey
                <br />
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #0057D9, #4D8DFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Starts Here
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Access your courses, track your progress, and connect with your 
                academic community all in one place.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                      boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: feature.color }} />
                    <span className="text-sm font-medium text-gray-700">{feature.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="relative"
            >
              <div 
                className="p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                  boxShadow: 'inset 8px 8px 16px #c5cdd8, inset -8px -8px 16px #ffffff',
                }}
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed mb-3">
                  "EduManage transformed my learning experience. The platform is intuitive 
                  and helps me stay on top of my coursework effortlessly."
                </p>
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #0057D9, #003E99)',
                    }}
                  >
                    HK
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Harpreet Kaur</p>
                    <p className="text-xs text-gray-500">BCA Student</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md mx-auto lg:mx-0"
        >
          <div 
            className="rounded-3xl p-8 sm:p-10"
            style={{
              background: 'linear-gradient(135deg, #e8edf5 0%, #ffffff 50%, #e8edf5 100%)',
              boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff, inset 1px 1px 2px rgba(255,255,255,0.5), inset -1px -1px 2px rgba(0,0,0,0.05)',
            }}
          >
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex mb-4"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #0057D9, #003E99)',
                    boxShadow: '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff',
                  }}
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h2 
                className="text-2xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #0057D9, #003E99)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Student Login
              </h2>
            </div>

            {/* Card Header - Desktop */}
            <div className="hidden lg:block text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex mb-6"
              >
                <div 
                  className="w-20 h-20 rounded-3xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #0057D9, #003E99)',
                    boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff, inset 2px 2px 4px rgba(255,255,255,0.2), inset -2px -2px 4px rgba(0,0,0,0.2)',
                  }}
                >
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
              <p className="text-gray-600">Sign in to your student account</p>
            </div>

            {/* Success/Error Message */}
            <AnimatePresence>
              {message.text && (
                <motion.div
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  className="mb-6"
                >
                  <div 
                    className="p-4 rounded-2xl flex items-start space-x-3"
                    style={{
                      background: message.type === "success" 
                        ? 'linear-gradient(135deg, #f0fdf4, #dcfce7)' 
                        : 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                      boxShadow: message.type === "success"
                        ? 'inset 4px 4px 8px #c5d4c5, inset -4px -4px 8px #ffffff'
                        : 'inset 4px 4px 8px #d4c5c5, inset -4px -4px 8px #ffffff',
                    }}
                  >
                    <div 
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        message.type === "success" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-sm ${
                        message.type === "success" ? "text-green-800" : "text-red-800"
                      }`}>
                        {message.type === "success" ? "Success!" : "Error"}
                      </h3>
                      <p className={`text-xs mt-1 ${
                        message.type === "success" ? "text-green-600" : "text-red-600"
                      }`}>
                        {message.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                  Email Address
                </label>
                <div className="relative">
                  <div 
                    className={`rounded-2xl transition-all duration-300 ${
                      focusedField === 'email' 
                        ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                        : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                    }`}
                  >
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <Mail className={`w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-[#0057D9]' : 'text-gray-400'
                      }`} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none transition-all duration-300"
                      style={{ background: 'transparent' }}
                      placeholder="student@edumanage.com"
                    />
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                  Password
                </label>
                <div className="relative">
                  <div 
                    className={`rounded-2xl transition-all duration-300 ${
                      focusedField === 'password' 
                        ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                        : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                    }`}
                  >
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <Lock className={`w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'password' ? 'text-[#0057D9]' : 'text-gray-400'
                      }`} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="block w-full h-[52px] pl-14 pr-14 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none transition-all duration-300"
                      style={{ background: 'transparent' }}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-5 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between px-2">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-[#0057D9] focus:ring-[#0057D9]/20"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    Remember me
                  </span>
                </label>
                <a href="#" className="text-sm font-medium text-[#0057D9] hover:text-[#003E99] transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full h-[52px] rounded-2xl font-semibold text-white flex items-center justify-center space-x-2 transition-all duration-300 ${
                  loading ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-lg'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #0057D9, #003E99)',
                  boxShadow: loading 
                    ? '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff'
                    : '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
                }}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span 
                  className="px-4 text-sm text-gray-500 font-medium"
                  style={{ background: 'linear-gradient(135deg, #e8edf5, #ffffff)' }}
                >
                  New to EduManage?
                </span>
              </div>
            </div>

            {/* Register Button */}
            <Link href="/register">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-[52px] rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 text-gray-700"
                style={{
                  background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                  boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                }}
              >
                <UserPlus className="w-5 h-5 text-[#0057D9]" />
                <span>Create New Account</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </motion.div>
            </Link>

            {/* Footer */}
            <div className="mt-6 text-center">
              <div 
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl"
                style={{
                  boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
                }}
              >
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm text-gray-600">
                  Trusted by 10,000+ students
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}