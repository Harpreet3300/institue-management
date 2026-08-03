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
import {
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiGithub,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
} from "react-icons/si";

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
      // Get data from localStorage
      const token = localStorage.getItem("edumanage_token");
      const userData = localStorage.getItem("edumanage_user");
      const tokenExpiry = localStorage.getItem("edumanage_token_expiry");

      // Check if token exists and is valid
      if (!token || !userData) {
        setError("No authentication data found. Please login again.");
        setIsLoading(false);
        // Redirect to login after 2 seconds
        setTimeout(() => {
          router.push("/login");
        }, 2000);
        return;
      }

      // Check token expiry
      if (tokenExpiry) {
        const expiryDate = new Date(tokenExpiry);
        if (expiryDate < new Date()) {
          // Token expired, clear storage and redirect
          localStorage.removeItem("edumanage_token");
          localStorage.removeItem("edumanage_user");
          localStorage.removeItem("edumanage_token_expiry");
          localStorage.removeItem("edumanage_refresh_token");
          
          setError("Session expired. Please login again.");
          setIsLoading(false);
          setTimeout(() => {
            router.push("/login");
          }, 2000);
          return;
        }
      }

      // Parse user data from localStorage
      const parsedUserData = JSON.parse(userData);

      if (!parsedUserData || !parsedUserData.email) {
        setError("Invalid user data. Please login again.");
        setIsLoading(false);
        return;
      }

      // Build complete student data from localStorage user data
      const data = {
        personal: {
          firstName: parsedUserData.firstName || "",
          lastName: parsedUserData.lastName || "",
          fullName: parsedUserData.fullName || `${parsedUserData.firstName || ""} ${parsedUserData.lastName || ""}`.trim(),
          email: parsedUserData.email || "",
          phone: parsedUserData.phone || "",
          dob: parsedUserData.dob || "",
          gender: parsedUserData.gender || "",
          bloodGroup: parsedUserData.bloodGroup || "",
          address: parsedUserData.address || "",
          avatar: parsedUserData.avatar || null,
          initials: parsedUserData.initials || `${parsedUserData.firstName?.[0] || ""}${parsedUserData.lastName?.[0] || ""}`,
          bio: parsedUserData.bio || "Student at EduManage Institute",
          socialLinks: {
            github: parsedUserData.socialLinks?.github || "",
            linkedin: parsedUserData.socialLinks?.linkedin || "",
            portfolio: parsedUserData.socialLinks?.portfolio || "",
          },
        },
        academic: {
          rollNo: parsedUserData.rollNo || "",
          registrationNo: parsedUserData.registrationNo || "",
          course: parsedUserData.course || "",
          semester: parsedUserData.semester || "",
          batch: parsedUserData.batch || "",
          section: parsedUserData.section || "",
          department: parsedUserData.department || "",
          college: parsedUserData.college || "",
          university: parsedUserData.university || "",
          enrollmentDate: parsedUserData.enrollmentDate || "",
          expectedGraduation: parsedUserData.expectedGraduation || "",
          cgpa: parsedUserData.cgpa || 0,
          sgpa: parsedUserData.sgpa || {},
          attendance: parsedUserData.attendance || 0,
          totalCredits: parsedUserData.totalCredits || 0,
          completedCredits: parsedUserData.completedCredits || 0,
        },
        skills: parsedUserData.skills || [],
        subjects: parsedUserData.subjects || [],
        achievements: parsedUserData.achievements || [],
        activities: parsedUserData.activities || [],
        feeDetails: parsedUserData.feeDetails || {
          totalFees: 0,
          paidAmount: 0,
          dueAmount: 0,
          lastPaymentDate: "",
          nextDueDate: "",
          paymentHistory: [],
        },
      };

      // Add icon references to skills if not present
      const skillIcons = {
        "HTML5": FiCode,
        "CSS3": FiCode,
        "JavaScript": SiJavascript,
        "React.js": SiReact,
        "Next.js": SiNextdotjs,
        "Node.js": SiNodedotjs,
        "MongoDB": SiMongodb,
        "Tailwind CSS": SiTailwindcss,
        "Git & GitHub": SiGit,
        "Python": SiPython,
      };

      data.skills = data.skills.map(skill => ({
        ...skill,
        icon: skill.icon || skillIcons[skill.name] || FiCode,
        category: skill.category || "Other",
      }));

      // Add icons to achievements if not present
      data.achievements = data.achievements.map(achievement => ({
        ...achievement,
        icon: achievement.icon || FiAward,
        color: achievement.color || "from-blue-500 to-blue-600",
        description: achievement.description || "",
      }));

      // Add icons and types to activities if not present
      data.activities = data.activities.map(activity => ({
        ...activity,
        icon: activity.icon || FiActivity,
        type: activity.type || "academic",
      }));

      setStudentData(data);
      setEditedData(JSON.parse(JSON.stringify(data)));
      
      // Set profile image if exists
      if (parsedUserData.avatar) {
        setProfileImage(parsedUserData.avatar);
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
      const updatedUserData = {
        ...JSON.parse(localStorage.getItem("edumanage_user")),
        firstName: editedData.personal.firstName,
        lastName: editedData.personal.lastName,
        fullName: `${editedData.personal.firstName} ${editedData.personal.lastName}`.trim(),
        email: editedData.personal.email,
        phone: editedData.personal.phone,
        dob: editedData.personal.dob,
        gender: editedData.personal.gender,
        bloodGroup: editedData.personal.bloodGroup,
        address: editedData.personal.address,
        bio: editedData.personal.bio,
        avatar: profileImage || editedData.personal.avatar,
        initials: `${editedData.personal.firstName?.[0] || ""}${editedData.personal.lastName?.[0] || ""}`,
      };

      // Save to localStorage
      localStorage.setItem("edumanage_user", JSON.stringify(updatedUserData));

      // Update state
      setStudentData(editedData);
      setIsEditing(false);
      setSaveMessage("Profile updated successfully!");
      
      // Clear success message after 3 seconds
      setTimeout(() => setSaveMessage(""), 3000);

      // Optionally, you can also send the updated data to your backend API
      // await updateProfileAPI(updatedUserData);

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
        
        // Update localStorage with avatar
        try {
          const userData = JSON.parse(localStorage.getItem("edumanage_user"));
          if (userData) {
            userData.avatar = imageData;
            localStorage.setItem("edumanage_user", JSON.stringify(userData));
          }
        } catch (err) {
          console.error("Error saving avatar to localStorage:", err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // Clear all auth data from localStorage
    localStorage.removeItem("edumanage_token");
    localStorage.removeItem("edumanage_user");
    localStorage.removeItem("edumanage_token_expiry");
    localStorage.removeItem("edumanage_refresh_token");
    localStorage.removeItem("edumanage_remember_me");
    
    // Redirect to login page
    router.push("/login");
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FiGrid },
    { id: "academic", label: "Academic", icon: FaGraduationCap },
    { id: "skills", label: "Skills", icon: FiZap },
    { id: "subjects", label: "Subjects", icon: FiBookOpen },
    { id: "achievements", label: "Achievements", icon: FiAward },
    { id: "fees", label: "Fee Details", icon: FiCreditCard },
    { id: "activity", label: "Activity", icon: FiActivity },
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

  const getGradeColor = (grade) => {
    const colors = {
      "A+": "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 border-green-200 dark:border-green-500/30",
      "A": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30",
      "A-": "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 border-blue-200 dark:border-blue-500/30",
      "B+": "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/30",
      "B": "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 border-orange-200 dark:border-orange-500/30",
    };
    return colors[grade] || "bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400 border-gray-200 dark:border-gray-500/30";
  };

  const getActivityColor = (type) => {
    const colors = {
      academic: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
      event: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400",
      course: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400",
      project: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400",
    };
    return colors[type] || "bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400";
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
          <p className="text-[#64748B] dark:text-[#94A3B8]">Fetching your information from local storage...</p>
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
                  {profileImage || studentData.personal.avatar ? (
                    <img 
                      src={profileImage || studentData.personal.avatar} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    studentData.personal.initials || "ST"
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
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={editedData.personal?.firstName || ""}
                          onChange={(e) => setEditedData({
                            ...editedData,
                            personal: { ...editedData.personal, firstName: e.target.value }
                          })}
                          className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white w-40"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          value={editedData.personal?.lastName || ""}
                          onChange={(e) => setEditedData({
                            ...editedData,
                            personal: { ...editedData.personal, lastName: e.target.value }
                          })}
                          className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white w-40"
                          placeholder="Last Name"
                        />
                      </div>
                    ) : (
                      studentData.personal.fullName || `${studentData.personal.firstName} ${studentData.personal.lastName}`
                    )}
                  </h1>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium inline-flex items-center w-fit mx-auto md:mx-0 border border-green-500/30">
                    <FiCheckCircle className="w-3 h-3 mr-1" />
                    Active Student
                  </span>
                </div>
                
                {isEditing ? (
                  <textarea
                    value={editedData.personal?.bio || ""}
                    onChange={(e) => setEditedData({
                      ...editedData,
                      personal: { ...editedData.personal, bio: e.target.value }
                    })}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm mb-3 resize-none"
                    rows={2}
                    placeholder="Your bio..."
                  />
                ) : (
                  <p className="text-[#CBD5E1] mb-3">{studentData.personal.bio}</p>
                )}
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#94A3B8] justify-center md:justify-start">
                  <span className="flex items-center">
                    <FiHash className="w-4 h-4 mr-1" />
                    {studentData.academic.rollNo}
                  </span>
                  <span className="flex items-center">
                    <FaGraduationCap className="w-4 h-4 mr-1" />
                    {studentData.academic.semester}
                  </span>
                  <span className="flex items-center">
                    <FaUniversity className="w-4 h-4 mr-1" />
                    {studentData.academic.college}
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
                        setEditedData(JSON.parse(JSON.stringify(studentData)));
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

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: FiStar, label: "CGPA", value: studentData.academic.cgpa || "N/A", color: "text-yellow-400", bgColor: "bg-yellow-500/10" },
                { icon: FiTrendingUp, label: "Attendance", value: studentData.academic.attendance ? `${studentData.academic.attendance}%` : "N/A", color: "text-green-400", bgColor: "bg-green-500/10" },
                { icon: FiBookOpen, label: "Credits", value: studentData.academic.totalCredits ? `${studentData.academic.completedCredits}/${studentData.academic.totalCredits}` : "N/A", color: "text-blue-400", bgColor: "bg-blue-500/10" },
                { icon: FiAward, label: "Achievements", value: studentData.achievements?.length || 0, color: "text-purple-400", bgColor: "bg-purple-500/10" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm text-center hover:bg-white/10 transition-all duration-200"
                  >
                    <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-[#94A3B8]">{stat.label}</div>
                  </motion.div>
                );
              })}
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
                          { icon: FiMail, label: "Email", value: studentData.personal.email },
                          { icon: FiPhone, label: "Phone", value: studentData.personal.phone || "Not provided" },
                          { icon: FiCalendar, label: "Date of Birth", value: studentData.personal.dob || "Not provided" },
                          { icon: FiUser, label: "Gender", value: studentData.personal.gender || "Not provided" },
                          { icon: FiHeart, label: "Blood Group", value: studentData.personal.bloodGroup || "Not provided" },
                          { icon: FiMapPin, label: "Address", value: studentData.personal.address || "Not provided" },
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

                    {studentData.personal.socialLinks && (
                      <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-6">
                        <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-4 flex items-center space-x-2">
                          <FiGlobe className="w-5 h-5 text-[#0057D9]" />
                          <span>Social Links</span>
                        </h3>
                        <div className="space-y-3">
                          {studentData.personal.socialLinks.github && (
                            <a href={`https://${studentData.personal.socialLinks.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0F172A] hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B] transition-colors duration-200">
                              <SiGithub className="w-5 h-5 text-[#111111] dark:text-white" />
                              <span className="text-sm text-[#475569] dark:text-[#CBD5E1]">{studentData.personal.socialLinks.github}</span>
                            </a>
                          )}
                          {studentData.personal.socialLinks.linkedin && (
                            <a href={`https://${studentData.personal.socialLinks.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0F172A] hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B] transition-colors duration-200">
                              <FiUsers className="w-5 h-5 text-[#0A66C2]" />
                              <span className="text-sm text-[#475569] dark:text-[#CBD5E1]">{studentData.personal.socialLinks.linkedin}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Right Column */}
                  <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-2 space-y-6">
                    {/* Academic Summary */}
                    {studentData.academic.cgpa > 0 && (
                      <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-6">
                        <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-6 flex items-center space-x-2">
                          <FaGraduationCap className="w-5 h-5 text-[#0057D9]" />
                          <span>Academic Summary</span>
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {[
                            { label: "CGPA", value: studentData.academic.cgpa, sub: "Out of 10" },
                            { label: "Attendance", value: `${studentData.academic.attendance}%`, sub: "Current Semester" },
                            { label: "Semester", value: studentData.academic.semester, sub: "Current" },
                            { label: "Section", value: studentData.academic.section || "N/A", sub: "Division" },
                          ].map((item, index) => (
                            <div key={index} className="bg-[#F8FAFC] dark:bg-[#0F172A] rounded-xl p-4 text-center border border-[#E2E8F0] dark:border-[#334155]">
                              <div className="text-2xl font-bold text-[#0057D9] dark:text-[#4D8DFF] mb-1">{item.value}</div>
                              <div className="text-sm font-medium text-[#111111] dark:text-white">{item.label}</div>
                              <div className="text-xs text-[#94A3B8]">{item.sub}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Recent Activity */}
                    {studentData.activities && studentData.activities.length > 0 && (
                      <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg font-bold text-[#111111] dark:text-white flex items-center space-x-2">
                            <FiActivity className="w-5 h-5 text-[#0057D9]" />
                            <span>Recent Activity</span>
                          </h3>
                        </div>
                        <div className="space-y-4">
                          {studentData.activities.slice(0, 4).map((activity, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-[#F8FAFC] dark:hover:bg-[#0F172A] transition-colors duration-200">
                              <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] dark:bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                                <FiActivity className="w-4 h-4 text-[#0057D9] dark:text-[#4D8DFF]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-[#111111] dark:text-white">{activity.title}</p>
                                <p className="text-xs text-[#94A3B8]">{activity.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              )}

              {/* Other tabs content remains the same but with data from localStorage */}
              {/* Academic Tab, Skills Tab, Subjects Tab, Achievements Tab, Fee Details Tab, Activity Tab */}
              {/* These will render conditionally based on available data */}

              {activeTab !== "overview" && (
                <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-sm p-12 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#F1F5F9] dark:bg-[#0F172A] flex items-center justify-center mx-auto mb-4">
                    <FiGrid className="w-8 h-8 text-[#94A3B8]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-2">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
                  </h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8]">
                    {studentData[activeTab] && studentData[activeTab].length > 0 
                      ? `${studentData[activeTab].length} items available` 
                      : "No data available yet. Complete your profile to see more details."}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}