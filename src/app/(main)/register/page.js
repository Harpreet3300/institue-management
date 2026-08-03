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
  ArrowLeft,
  Sparkles,
  UserPlus,
  GraduationCap,
  User,
  Users,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Clock,
  Upload,
  Camera,
  ChevronRight,
  Heart,
  CheckCircle,
  AlertCircle,
  Image,
  FileText,
  Home,
  CreditCard
} from "lucide-react";

export default function StudentRegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    fathername: "",
    mothername: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "Male",
    dateOfBirth: "",
    address: "",
    course: "",
    courseDuration: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      if (profileImage) data.append("profileImage", profileImage);

      const res = await fetch("/api/student/auth/register", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Registration failed");

      // Store authentication data
      localStorage.setItem("studentToken", result.token);
      localStorage.setItem("studentData", JSON.stringify(result.student));
      
      // Enhanced storage
      if (result.token) {
        localStorage.setItem("edumanage_token", result.token);
      }
      if (result.student) {
        const enhancedStudentData = {
          ...result.student,
          fullName: result.student.name || `${result.student.firstName || ""} ${result.student.lastName || ""}`.trim(),
          initials: result.student.initials || result.student.name?.split(' ').map(n => n[0]).join('') || "ST",
        };
        localStorage.setItem("edumanage_user", JSON.stringify(enhancedStudentData));
      }
      
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      localStorage.setItem("edumanage_token_expiry", expiryDate.toISOString());

      setMessage({ 
        type: "success", 
        text: `Registration successful! Welcome ${result.student?.name || "student"}!` 
      });
      
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      
    } catch (error) {
      setMessage({ 
        type: "error", 
        text: error.message || "Something went wrong" 
      });
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const steps = [
    { number: 1, label: "Personal", icon: User },
    { number: 2, label: "Academic", icon: GraduationCap },
    { number: 3, label: "Account", icon: Lock },
  ];

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #e8edf5 0%, #d5dce8 25%, #cbd5e1 50%, #d5dce8 75%, #e8edf5 100%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-3xl relative z-10">
        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0057D9] transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center mb-6">
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
                <UserPlus className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <h1 
            className="text-4xl font-bold mb-2"
            style={{
              background: 'linear-gradient(135deg, #0057D9, #003E99)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Create Your Account
          </h1>
          <p className="text-gray-600">Join EduManage and start your learning journey</p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-center mb-8 px-4"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            
            return (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-gradient-to-br from-[#0057D9] to-[#003E99]'
                        : isActive
                        ? 'bg-gradient-to-br from-[#0057D9] to-[#003E99]'
                        : 'bg-white'
                    }`}
                    style={!isActive && !isCompleted ? {
                      boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                    } : {
                      boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                    }}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    )}
                  </motion.div>
                  <span className={`text-xs font-medium mt-2 ${
                    isActive ? 'text-[#0057D9]' : isCompleted ? 'text-[#0057D9]' : 'text-gray-400'
                  }`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 sm:w-24 h-1 mx-2 rounded-full bg-gray-200 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isCompleted ? '100%' : '0%' }}
                      className="h-full bg-gradient-to-r from-[#0057D9] to-[#003E99] rounded-full"
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Registration Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-10"
          style={{
            background: 'linear-gradient(135deg, #e8edf5 0%, #ffffff 50%, #e8edf5 100%)',
            boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff, inset 1px 1px 2px rgba(255,255,255,0.5), inset -1px -1px 2px rgba(0,0,0,0.05)',
          }}
        >
          {/* Success/Error Message */}
          <AnimatePresence>
            {message.text && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
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
                  {message.type === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <p className={`text-sm ${
                    message.type === "success" ? "text-green-700" : "text-red-700"
                  }`}>
                    {message.text}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <User className="w-5 h-5 text-[#0057D9]" />
                    <span>Personal Information</span>
                  </h3>

                  {/* Profile Image Upload */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div 
                        className="w-32 h-32 rounded-3xl flex items-center justify-center overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                          boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
                        }}
                      >
                        {profilePreview ? (
                          <img src={profilePreview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          <Camera className="w-10 h-10 text-gray-400" />
                        )}
                      </div>
                      <label 
                        className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200"
                        style={{
                          background: 'linear-gradient(135deg, #0057D9, #003E99)',
                          boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                        }}
                      >
                        <Upload className="w-5 h-5 text-white" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Full Name
                      </label>
                      <div 
                        className={`rounded-2xl transition-all duration-300 ${
                          focusedField === 'name' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none"
                          style={{ background: 'transparent' }}
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Father Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Father's Name
                      </label>
                      <div 
                        className={`rounded-2xl transition-all duration-300 ${
                          focusedField === 'fathername' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <Users className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="fathername"
                          value={formData.fathername}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('fathername')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none"
                          style={{ background: 'transparent' }}
                          placeholder="Father's name"
                        />
                      </div>
                    </div>

                    {/* Mother Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Mother's Name
                      </label>
                      <div 
                        className={`rounded-2xl transition-all duration-300 ${
                          focusedField === 'mothername' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <Users className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="mothername"
                          value={formData.mothername}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('mothername')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none"
                          style={{ background: 'transparent' }}
                          placeholder="Mother's name"
                        />
                      </div>
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Gender
                      </label>
                      <div 
                        className="rounded-2xl shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]"
                      >
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="block w-full h-[52px] pl-5 pr-4 rounded-2xl text-gray-900 font-medium focus:outline-none"
                          style={{ background: 'transparent' }}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Date of Birth
                      </label>
                      <div 
                        className={`rounded-2xl transition-all duration-300 ${
                          focusedField === 'dateOfBirth' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <Calendar className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('dateOfBirth')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 font-medium focus:outline-none"
                          style={{ background: 'transparent' }}
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Phone Number
                      </label>
                      <div 
                        className={`rounded-2xl transition-all duration-300 ${
                          focusedField === 'phoneNumber' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <Phone className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phoneNumber')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none"
                          style={{ background: 'transparent' }}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Address
                      </label>
                      <div 
                        className={`rounded-2xl transition-all duration-300 ${
                          focusedField === 'address' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute top-4 left-0 pl-5 flex items-start pointer-events-none">
                          <MapPin className="w-5 h-5 text-gray-400" />
                        </div>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('address')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={3}
                          className="block w-full pl-14 pr-4 py-3 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none resize-none"
                          style={{ background: 'transparent' }}
                          placeholder="Enter your full address"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Academic Information */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-[#0057D9]" />
                    <span>Academic Information</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Course */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Course
                      </label>
                      <div 
                        className={`rounded-2xl transition-all duration-300 ${
                          focusedField === 'course' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <BookOpen className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('course')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none"
                          style={{ background: 'transparent' }}
                          placeholder="e.g., BCA, BBA, B.Tech"
                        />
                      </div>
                    </div>

                    {/* Course Duration */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Course Duration
                      </label>
                      <div 
                        className={`rounded-2xl transition-all duration-300 ${
                          focusedField === 'courseDuration' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <Clock className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="courseDuration"
                          value={formData.courseDuration}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('courseDuration')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none"
                          style={{ background: 'transparent' }}
                          placeholder="e.g., 3 Years, 4 Years"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info Card */}
                  <div 
                    className="p-6 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,87,217,0.05), rgba(0,62,153,0.05))',
                      boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-[#0057D9] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Important Note</h4>
                        <p className="text-xs text-gray-600">
                          Please ensure your academic details are accurate. These will be verified 
                          by the administration before your account is fully activated.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Account Setup */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <Lock className="w-5 h-5 text-[#0057D9]" />
                    <span>Account Setup</span>
                  </h3>

                  <div className="space-y-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Email Address
                      </label>
                      <div 
                        className={`rounded-2xl transition-all duration-300 ${
                          focusedField === 'email' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none"
                          style={{ background: 'transparent' }}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Password
                      </label>
                      <div 
                        className={`rounded-2xl transition-all duration-300 ${
                          focusedField === 'password' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <Lock className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('password')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="block w-full h-[52px] pl-14 pr-14 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none"
                          style={{ background: 'transparent' }}
                          placeholder="Create a strong password"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-5 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                          ) : (
                            <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Terms */}
                    <div 
                      className="p-4 rounded-2xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,87,217,0.03), rgba(0,62,153,0.03))',
                        boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
                      }}
                    >
                      <p className="text-xs text-gray-600 text-center">
                        By creating an account, you agree to our{" "}
                        <a href="#" className="text-[#0057D9] font-medium hover:underline">Terms of Service</a>
                        {" "}and{" "}
                        <a href="#" className="text-[#0057D9] font-medium hover:underline">Privacy Policy</a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              {currentStep > 1 ? (
                <motion.button
                  type="button"
                  onClick={prevStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-2xl font-medium text-gray-700 flex items-center space-x-2 transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                    boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                  }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </motion.button>
              ) : (
                <div />
              )}

              {currentStep < totalSteps ? (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-2xl font-semibold text-white flex items-center space-x-2 transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #0057D9, #003E99)',
                    boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
                  }}
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-8 py-3 rounded-2xl font-semibold text-white flex items-center space-x-2 transition-all duration-200 ${
                    loading ? 'opacity-80 cursor-not-allowed' : ''
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
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5" />
                      <span>Create Account</span>
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Login Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-6"
        >
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link 
              href="/login" 
              className="font-semibold text-[#0057D9] hover:text-[#003E99] transition-colors inline-flex items-center space-x-1"
            >
              <span>Sign In</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}