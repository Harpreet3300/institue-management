// app/profile/page.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiBookOpen,
  FiHash,
  FiEdit3,
  FiCamera,
  FiSave,
  FiX,
  FiCheckCircle,
  FiClock,
  FiBookmark,
  FiStar,
  FiTrendingUp,
  FiActivity,
  FiFileText,
  FiCreditCard,
  FiSettings,
  FiLogOut,
  FiDownload,
  FiEye,
  FiUpload,
  FiAward,
  FiTarget,
  FiHeart,
  FiShare2,
  FiMoreVertical,
  FiChevronRight,
  FiChevronDown,
  FiGrid,
  FiUsers,
  FiBell,
  FiShield,
  FiZap,
  FiGlobe,
  FiGitBranch,
  FiCode,
  FiMonitor,
  FiDatabase,
  FiServer,
  FiAlertCircle,
  FiRefreshCw,
  FiAlertTriangle,
} from "react-icons/fi";
import {
  FaGraduationCap,
  FaUniversity,
  FaMedal,
  FaCertificate,
} from "react-icons/fa";

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [studentData, setStudentData] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch student data from localStorage on component mount
  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    setIsLoading(true);
    setError("");

    try {
      // Get data from localStorage - matching your login API response structure
      const token = localStorage.getItem("token");
      const studentStr = localStorage.getItem("student"); // Changed from studentData to student

      // Check if token and student data exist
      if (!token || !studentStr) {
        setError("No authentication data found. Please login again.");
        setIsLoading(false);
        setTimeout(() => {
          router.push("/login");
        }, 2000);
        return;
      }

      // Parse student data from localStorage
      const parsedStudentData = JSON.parse(studentStr);

      if (!parsedStudentData || !parsedStudentData.email) {
        setError("Invalid student data. Please login again.");
        setIsLoading(false);
        return;
      }

      setStudentData(parsedStudentData);
      setEditedData({ ...parsedStudentData });
      
      // Set profile image if exists
      if (parsedStudentData.profileImage?.url) {
        setProfileImage(parsedStudentData.profileImage.url);
      }

      setIsLoading(false);

    } catch (err) {
      console.error("Error fetching student data:", err);
      setError("Failed to load profile data. Please try again.");
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      // Update localStorage with edited data
      const updatedStudentData = {
        ...JSON.parse(localStorage.getItem("student")),
        name: editedData.name,
        fathername: editedData.fathername,
        mothername: editedData.mothername,
        email: editedData.email,
        phoneNumber: editedData.phoneNumber,
        gender: editedData.gender,
        dateOfBirth: editedData.dateOfBirth,
        address: editedData.address,
        course: editedData.course,
        courseDuration: editedData.courseDuration,
        profileImage: {
          url: profileImage || editedData.profileImage?.url || "",
          publicId: editedData.profileImage?.publicId || "",
        },
      };

      // Save to localStorage
      localStorage.setItem("student", JSON.stringify(updatedStudentData));

      // Update state
      setStudentData(editedData);
      setIsEditing(false);
      setSaveMessage("Profile updated successfully!");
      
      // Clear success message after 3 seconds
      setTimeout(() => setSaveMessage(""), 3000);

      // Optional: Send update to backend API
      try {
        const token = localStorage.getItem("token");
        const response = await fetch('/api/student/update-profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(updatedStudentData)
        });
        
        if (!response.ok) {
          console.error("Failed to sync with server");
        }
      } catch (apiError) {
        console.error("API sync error:", apiError);
      }

    } catch (err) {
      console.error("Error saving profile:", err);
      setSaveMessage("Failed to update profile. Please try again.");
      setTimeout(() => setSaveMessage(""), 3000);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setProfileImage(imageData);
        
        // Update editedData state
        setEditedData(prev => ({
          ...prev,
          profileImage: {
            ...prev.profileImage,
            url: imageData
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // Clear all auth data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("student");
    
    // Redirect to login page
    router.push("/login");
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "Not provided";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get initials for avatar
  const getInitials = (name) => {
    if (!name) return "ST";
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FiGrid },
    { id: "academic", label: "Academic", icon: FaGraduationCap },
    { id: "family", label: "Family", icon: FiUsers },
    { id: "contact", label: "Contact", icon: FiPhone },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-[#0057D9]/20 border-t-[#0057D9] rounded-full mx-auto mb-6"
          />
          <h2 className="text-xl font-semibold text-[#111111] dark:text-white mb-2">Loading Profile</h2>
          <p className="text-[#64748B] dark:text-[#94A3B8]">Fetching your information...</p>
        </div>
      </div>
    );
  }

  // Error State (no auth data or expired session)
  if (error) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] flex items-center justify-center">
        <div className="text-center max-w-md">
          <FiAlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-xl font-semibold text-[#111111] dark:text-white mb-2">Session Issue</h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] mb-6">{error}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={fetchStudentData}
              className="px-6 py-3 bg-[#0057D9] text-white rounded-xl hover:bg-[#003E99] transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <FiRefreshCw className="w-4 h-4" />
              <span>Retry</span>
            </button>
            <Link
              href="/login"
              className="px-6 py-3 border-2 border-[#E2E8F0] dark:border-[#334155] text-[#475569] dark:text-[#CBD5E1] rounded-xl hover:border-[#0057D9] hover:text-[#0057D9] transition-all duration-200 inline-flex items-center space-x-2"
            >
              <FiLogOut className="w-4 h-4" />
              <span>Go to Login</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // No student data
  if (!studentData) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] flex items-center justify-center">
        <div className="text-center max-w-md">
          <FiAlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-xl font-semibold text-[#111111] dark:text-white mb-2">Profile Not Found</h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] mb-6">Unable to load your profile data. Please login again.</p>
          <Link
            href="/login"
            className="px-6 py-3 bg-[#0057D9] text-white rounded-xl hover:bg-[#003E99] transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <FiLogOut className="w-4 h-4" />
            <span>Login Again</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A]">
      {/* Save Success/Error Message */}
      <AnimatePresence>
        {saveMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 ${
              saveMessage.includes("success") ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            <FiCheckCircle className="w-5 h-5" />
            <span>{saveMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Header */}
      <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0057D9] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#4D8DFF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-[#94A3B8] mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <FiChevronRight className="w-4 h-4" />
              <span className="text-white">My Profile</span>
            </div>

            {/* Cover & Avatar Section */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
              {/* Avatar with Upload */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#0057D9] to-[#003E99] flex items-center justify-center text-white font-bold text-5xl shadow-2xl shadow-[#0057D9]/30 border-4 border-white/10 overflow-hidden">
                  {profileImage || studentData.profileImage?.url ? (
                    <img 
                      src={profileImage || studentData.profileImage.url} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    getInitials(studentData.name)
                  )}
                </div>
                <label className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#0057D9] hover:bg-[#003E99] rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 shadow-lg border-2 border-white/20 opacity-0 group-hover:opacity-100">
                  <FiCamera className="w-5 h-5 text-white" />
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0F172A] shadow-sm animate-pulse" />
              </div>

              {/* Student Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                  <h1 className="text-3xl sm:text-4xl font-bold">
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedData.name || ""}
                        onChange={(e) => setEditedData({
                          ...editedData,
                          name: e.target.value
                        })}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white w-full md:w-64"
                        placeholder="Full Name"
                      />
                    ) : (
                      studentData.name
                    )}
                  </h1>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium inline-flex items-center w-fit mx-auto md:mx-0 border border-green-500/30">
                    <FiCheckCircle className="w-3 h-3 mr-1" />
                    {studentData.role === 'student' ? 'Active Student' : studentData.role}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#94A3B8] justify-center md:justify-start">
                  <span className="flex items-center">
                    <FiHash className="w-4 h-4 mr-1" />
                    Roll No: {studentData.rollNo}
                  </span>
                  <span className="flex items-center">
                    <FaGraduationCap className="w-4 h-4 mr-1" />
                    {studentData.course}
                  </span>
                  <span className="flex items-center">
                    <FiClock className="w-4 h-4 mr-1" />
                    {studentData.courseDuration}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {isEditing ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSave}
                      className="px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-all duration-200 flex items-center space-x-2 shadow-lg"
                    >
                      <FiSave className="w-4 h-4" />
                      <span>Save Changes</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsEditing(false);
                        setEditedData({ ...studentData });
                      }}
                      className="p-2.5 bg-red-500/20 hover:bg-red-500/30 rounded-xl transition-all duration-200"
                    >
                      <FiX className="w-5 h-5" />
                    </motion.button>
                  </>
                ) : (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2.5 bg-[#0057D9] hover:bg-[#003E99] text-white font-medium rounded-xl transition-all duration-200 flex items-center space-x-2 shadow-lg shadow-[#0057D9]/20"
                    >
                      <FiEdit3 className="w-4 h-4" />
                      <span>Edit Profile</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleLogout}
                      className="p-2.5 bg-red-500/20 hover:bg-red-500/30 rounded-xl transition-all duration-200"
                      title="Logout"
                    >
                      <FiLogOut className="w-5 h-5" />
                    </motion.button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-[72px] z-40 bg-white dark:bg-[#0F172A] border-b border-[#E2E8F0] dark:border-[#334155] shadow-sm backdrop-blur-xl bg-white/95 dark:bg-[#0F172A]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? "border-[#0057D9] text-[#0057D9] dark:text-[#4D8DFF]"
                      : "border-transparent text-[#64748B] dark:text-[#94A3B8] hover:text-[#111111] dark:hover:text-white hover:border-[#E2E8F0] dark:hover:border-[#334155]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Personal Info */}
                  <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm overflow-hidden">
                      <div className="p-6 border-b border-[#E2E8F0] dark:border-[#334155] bg-gradient-to-r from-[#0057D9]/5 to-transparent">
                        <h3 className="text-lg font-bold text-[#111111] dark:text-white flex items-center space-x-2">
                          <FiUser className="w-5 h-5 text-[#0057D9]" />
                          <span>Personal Information</span>
                        </h3>
                      </div>
                      <div className="p-6 space-y-4">
                        {[
                          { icon: FiMail, label: "Email", value: studentData.email },
                          { icon: FiPhone, label: "Phone", value: studentData.phoneNumber || "Not provided" },
                          { icon: FiCalendar, label: "Date of Birth", value: formatDate(studentData.dateOfBirth) },
                          { icon: FiUser, label: "Gender", value: studentData.gender || "Not provided" },
                          { icon: FiMapPin, label: "Address", value: studentData.address || "Not provided" },
                          { icon: FiClock, label: "Member Since", value: formatDate(studentData.createdAt) },
                        ].map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <div key={index} className="flex items-start space-x-3 group">
                              <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] dark:bg-[#0F172A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0057D9] transition-colors duration-200">
                                <Icon className="w-4 h-4 text-[#0057D9] dark:text-[#4D8DFF] group-hover:text-white transition-colors duration-200" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs text-[#94A3B8] uppercase tracking-wider">{item.label}</p>
                                <p className="text-sm font-medium text-[#111111] dark:text-white truncate">{item.value}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column - Academic Info */}
                  <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-6">
                      <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-6 flex items-center space-x-2">
                        <FaGraduationCap className="w-5 h-5 text-[#0057D9]" />
                        <span>Academic Information</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { label: "Roll Number", value: studentData.rollNo },
                          { label: "Course", value: studentData.course },
                          { label: "Course Duration", value: studentData.courseDuration },
                          { label: "Role", value: studentData.role },
                        ].map((item, index) => (
                          <div key={index} className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl p-4 border border-[#E2E8F0] dark:border-[#334155]">
                            <div className="text-sm text-[#94A3B8] mb-1">{item.label}</div>
                            <div className="text-lg font-semibold text-[#111111] dark:text-white">{item.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Editable Fields Section */}
                    {isEditing && (
                      <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-6">
                        <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-6 flex items-center space-x-2">
                          <FiEdit3 className="w-5 h-5 text-[#0057D9]" />
                          <span>Edit Information</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { label: "Phone Number", key: "phoneNumber", type: "text" },
                            { label: "Gender", key: "gender", type: "select", options: ["Male", "Female", "Other"] },
                            { label: "Date of Birth", key: "dateOfBirth", type: "date" },
                            { label: "Address", key: "address", type: "text" },
                            { label: "Course", key: "course", type: "text" },
                            { label: "Course Duration", key: "courseDuration", type: "text" },
                          ].map((field, index) => (
                            <div key={index}>
                              <label className="block text-sm font-medium text-[#475569] dark:text-[#CBD5E1] mb-2">
                                {field.label}
                              </label>
                              {field.type === "select" ? (
                                <select
                                  value={editedData[field.key] || ""}
                                  onChange={(e) => setEditedData({
                                    ...editedData,
                                    [field.key]: e.target.value
                                  })}
                                  className="w-full px-3 py-2 border border-[#E2E8F0] dark:border-[#334155] rounded-lg bg-white dark:bg-[#0F172A] text-[#111111] dark:text-white focus:ring-2 focus:ring-[#0057D9] focus:border-transparent"
                                >
                                  <option value="">Select {field.label}</option>
                                  {field.options.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                  ))}
                                </select>
                              ) : (
                                <input
                                  type={field.type}
                                  value={field.type === "date" ? (editedData[field.key] ? new Date(editedData[field.key]).toISOString().split('T')[0] : "") : (editedData[field.key] || "")}
                                  onChange={(e) => setEditedData({
                                    ...editedData,
                                    [field.key]: e.target.value
                                  })}
                                  className="w-full px-3 py-2 border border-[#E2E8F0] dark:border-[#334155] rounded-lg bg-white dark:bg-[#0F172A] text-[#111111] dark:text-white focus:ring-2 focus:ring-[#0057D9] focus:border-transparent"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              )}

              {/* Academic Tab */}
              {activeTab === "academic" && (
                <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-6">
                  <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-6 flex items-center space-x-2">
                    <FaGraduationCap className="w-5 h-5 text-[#0057D9]" />
                    <span>Academic Details</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Course", value: studentData.course },
                      { label: "Course Duration", value: studentData.courseDuration },
                      { label: "Roll Number", value: studentData.rollNo },
                      { label: "Enrollment Date", value: formatDate(studentData.createdAt) },
                      { label: "Last Updated", value: formatDate(studentData.updatedAt) },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] dark:bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                          <FiBookOpen className="w-4 h-4 text-[#0057D9] dark:text-[#4D8DFF]" />
                        </div>
                        <div>
                          <p className="text-xs text-[#94A3B8] uppercase tracking-wider">{item.label}</p>
                          <p className="text-sm font-medium text-[#111111] dark:text-white">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Family Tab */}
              {activeTab === "family" && (
                <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-6">
                  <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-6 flex items-center space-x-2">
                    <FiUsers className="w-5 h-5 text-[#0057D9]" />
                    <span>Family Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Father's Name", value: studentData.fathername, editable: true, key: "fathername" },
                      { label: "Mother's Name", value: studentData.mothername, editable: true, key: "mothername" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] dark:bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                          <FiUser className="w-4 h-4 text-[#0057D9] dark:text-[#4D8DFF]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-[#94A3B8] uppercase tracking-wider">{item.label}</p>
                          {isEditing && item.editable ? (
                            <input
                              type="text"
                              value={editedData[item.key] || ""}
                              onChange={(e) => setEditedData({
                                ...editedData,
                                [item.key]: e.target.value
                              })}
                              className="w-full px-3 py-1 border border-[#E2E8F0] dark:border-[#334155] rounded-lg bg-white dark:bg-[#0F172A] text-[#111111] dark:text-white text-sm"
                            />
                          ) : (
                            <p className="text-sm font-medium text-[#111111] dark:text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Tab */}
              {activeTab === "contact" && (
                <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-6">
                  <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-6 flex items-center space-x-2">
                    <FiPhone className="w-5 h-5 text-[#0057D9]" />
                    <span>Contact Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Email", value: studentData.email, icon: FiMail, editable: false },
                      { label: "Phone Number", value: studentData.phoneNumber, icon: FiPhone, editable: true, key: "phoneNumber" },
                      { label: "Address", value: studentData.address, icon: FiMapPin, editable: true, key: "address" },
                      { label: "Gender", value: studentData.gender, icon: FiUser, editable: true, key: "gender" },
                      { label: "Date of Birth", value: formatDate(studentData.dateOfBirth), icon: FiCalendar, editable: true, key: "dateOfBirth" },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] dark:bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-[#0057D9] dark:text-[#4D8DFF]" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-[#94A3B8] uppercase tracking-wider">{item.label}</p>
                            {isEditing && item.editable ? (
                              <input
                                type="text"
                                value={editedData[item.key] || ""}
                                onChange={(e) => setEditedData({
                                  ...editedData,
                                  [item.key]: e.target.value
                                })}
                                className="w-full px-3 py-1 border border-[#E2E8F0] dark:border-[#334155] rounded-lg bg-white dark:bg-[#0F172A] text-[#111111] dark:text-white text-sm"
                              />
                            ) : (
                              <p className="text-sm font-medium text-[#111111] dark:text-white">{item.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}