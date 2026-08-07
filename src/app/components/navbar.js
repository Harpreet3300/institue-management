// components/Navbar.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiInfo,
  FiAward,
  FiLogIn,
  FiImage,
  FiBookOpen,
  FiUserPlus,
  FiMenu,
  FiX,
  FiChevronDown,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const profileRef = useRef(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: FiHome },
    { name: "About", href: "/about", icon: FiInfo },
    { name: "Achievements", href: "/achievements", icon: FiAward },
    { name: "Gallery", href: "/gallery", icon: FiImage },
    { name: "Courses", href: "/courses", icon: FiBookOpen },
  ];

  const authItems = [
    { name: "Login", href: "/login", icon: FiLogIn, variant: "secondary" },
    { name: "Register", href: "/register", icon: FiUserPlus, variant: "primary" },
  ];

  const profileMenuItems = [
    { icon: FiUser, label: "My Profile", href: "/profile" },
    { icon: FiLogOut, label: "Logout", href: "#", onClick: "logout" },
  ];

  // Check login status from localStorage
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      // Check multiple possible keys where auth data might be stored
      const studentToken = localStorage.getItem("studentToken");
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      const studentData = localStorage.getItem("studentData");

      // Check if any auth data exists
      if (studentToken || token || user || studentData) {
        // Try to get user data from localStorage
        let parsedUserData = null;

        if (studentData) {
          parsedUserData = JSON.parse(studentData);
        } else if (user) {
          parsedUserData = JSON.parse(user);
        }

        setUserData(parsedUserData);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      setIsLoggedIn(false);
      setUserData(null);
    }
  };

  // Generate initials from user name
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Get role display text
  const getRoleDisplay = (role) => {
    if (!role) return "User";
    const roles = {
      student: "Student",
      teacher: "Teacher",
      admin: "Admin",
      staff: "Staff",
    };
    return roles[role.toLowerCase()] || role;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsProfileOpen(false);
  }, [pathname]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Clear all auth data
    localStorage.removeItem("studentToken");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("studentData");
    localStorage.removeItem("authToken");
    sessionStorage.clear();

    setIsLoggedIn(false);
    setUserData(null);
    setIsProfileOpen(false);

    // Redirect to home page
    window.location.href = "/";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-lg shadow-lg"
            : "bg-white dark:bg-[#0F172A] shadow-sm"
        } border-b border-[#E2E8F0] dark:border-[#475569]`}
        style={{ height: "72px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center space-x-3 group">
  {/* Logo Icon - Removed blue background, transparent, 2x bigger */}
  <div className="w-12 h-12 flex items-center justify-center transition-all duration-200 group-hover:scale-105">
    <img
      src="/logo.png"
      alt="EduManage Logo"
      className="w-full h-full object-contain"
    />
  </div>
  
  {/* Brand Text - Navy Blue */}
  <span className="text-xl font-bold text-[#1E3A8A] dark:text-white transition-colors duration-200">
    EduManage
  </span>
</Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1.5 transition-all duration-200 group ${
                        isActive
                          ? "text-[#0057D9] dark:text-[#4D8DFF]"
                          : "text-[#475569] dark:text-[#CBD5E1] hover:text-[#0057D9] dark:hover:text-white"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          isActive ? "text-[#0057D9] dark:text-[#4D8DFF]" : ""
                        }`}
                      />
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0057D9] dark:bg-[#4D8DFF] rounded-full"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop Right Section - Profile & Auth Buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              {isLoggedIn && userData ? (
                /* Profile Icon with Dropdown - Show when logged in */
                <div className="relative" ref={profileRef}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className={`flex items-center space-x-2 p-1.5 pr-3 rounded-xl transition-all duration-200 ${
                      isProfileOpen
                        ? "bg-[#F1F5F9] dark:bg-[#1E293B]"
                        : "hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B]"
                    }`}
                    aria-label="User Profile"
                  >
                    {/* Avatar */}
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0057D9] to-[#003E99] flex items-center justify-center text-white font-semibold text-sm shadow-md">
                      {getInitials(userData.name || userData.fullName)}
                    </div>
                    <div className="hidden xl:block text-left">
                      <p className="text-sm font-semibold text-[#111111] dark:text-white leading-none">
                        {userData.name || userData.fullName || "User"}
                      </p>
                      <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-none mt-1">
                        {getRoleDisplay(userData.role)}
                      </p>
                    </div>
                    <FiChevronDown
                      className={`hidden xl:block w-4 h-4 text-[#94A3B8] transition-transform duration-200 ${
                        isProfileOpen ? "rotate-180" : ""
                      }`}
                    />
                  </motion.button>

                  {/* Profile Dropdown Menu */}
                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-72 bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] shadow-xl overflow-hidden"
                      >
                        {/* User Info Header */}
                        <div className="p-4 bg-gradient-to-br from-[#0057D9]/5 to-[#003E99]/5 border-b border-[#E2E8F0] dark:border-[#334155]">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0057D9] to-[#003E99] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {getInitials(userData.name || userData.fullName)}
                            </div>
                            <div>
                              <p className="font-semibold text-[#111111] dark:text-white">
                                {userData.name || userData.fullName || "User"}
                              </p>
                              <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                                {userData.email || "user@example.com"}
                              </p>
                            </div>
                          </div>
                          {(userData.course || userData.rollNo) && (
                            <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-[#E2E8F0]/50 dark:border-[#334155]/50">
                              {userData.course && (
                                <div>
                                  <p className="text-[10px] text-[#94A3B8] uppercase tracking-wider">
                                    Course
                                  </p>
                                  <p className="text-xs font-medium text-[#111111] dark:text-white">
                                    {userData.course}
                                  </p>
                                </div>
                              )}
                              {userData.rollNo && (
                                <div>
                                  <p className="text-[10px] text-[#94A3B8] uppercase tracking-wider">
                                    Roll No
                                  </p>
                                  <p className="text-xs font-medium text-[#111111] dark:text-white">
                                    {userData.rollNo}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Menu Items */}
                        <div className="py-2">
                          {profileMenuItems.map((item, index) => {
                            const Icon = item.icon;
                            const isLogout = item.label === "Logout";

                            return (
                              <Link
                                key={index}
                                href={item.href || "#"}
                                onClick={(e) => {
                                  if (item.onClick === "logout") {
                                    e.preventDefault();
                                    handleLogout();
                                  }
                                  setIsProfileOpen(false);
                                }}
                                className={`flex items-center space-x-3 px-4 py-2.5 mx-2 rounded-xl text-sm transition-all duration-200 ${
                                  isLogout
                                    ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                                    : "text-[#475569] dark:text-[#CBD5E1] hover:bg-[#F1F5F9] dark:hover:bg-[#0F172A] hover:text-[#0057D9] dark:hover:text-[#4D8DFF]"
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                                <span className="font-medium">{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Auth Buttons - Show when logged out */
                <>
                  {authItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center space-x-1.5 px-4 py-2 rounded-[12px] text-sm font-medium transition-all duration-200 ${
                            item.variant === "primary"
                              ? "bg-[#0057D9] text-white hover:bg-[#003E99] shadow-md hover:shadow-lg"
                              : "border-2 border-[#0057D9] text-[#0057D9] hover:bg-[#0057D9] hover:text-white dark:border-[#4D8DFF] dark:text-[#4D8DFF] dark:hover:bg-[#4D8DFF] dark:hover:text-white"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              {isLoggedIn && userData && (
                <Link
                  href="/profile"
                  className="p-2 rounded-lg text-[#475569] dark:text-[#CBD5E1] hover:bg-[#F1F5F9] dark:hover:bg-[#334155] transition-all duration-200"
                  aria-label="User Profile"
                >
                  <FiUser className="w-5 h-5" />
                </Link>
              )}

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#475569] dark:text-[#CBD5E1] hover:bg-[#F1F5F9] dark:hover:bg-[#334155] transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white dark:bg-[#0F172A] border-b border-[#E2E8F0] dark:border-[#475569] shadow-lg overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {/* Mobile User Info - if logged in */}
                {isLoggedIn && userData && (
                  <div className="p-3 mb-3 bg-gradient-to-br from-[#0057D9]/5 to-[#003E99]/5 rounded-2xl border border-[#E2E8F0] dark:border-[#334155]">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0057D9] to-[#003E99] flex items-center justify-center text-white font-bold text-sm">
                        {getInitials(userData.name || userData.fullName)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[#111111] dark:text-white">
                          {userData.name || userData.fullName || "User"}
                        </p>
                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                          {getRoleDisplay(userData.role)}
                          {userData.rollNo && ` • ${userData.rollNo}`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-[#0057D9] bg-opacity-10 text-[#0057D9] dark:bg-[#4D8DFF] dark:bg-opacity-10 dark:text-[#4D8DFF]"
                            : "text-[#475569] dark:text-[#CBD5E1] hover:bg-[#F1F5F9] dark:hover:bg-[#334155] hover:text-[#0057D9] dark:hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="border-t border-[#E2E8F0] dark:border-[#475569] pt-3 mt-3 space-y-2">
                  {isLoggedIn ? (
                    <>
                      {profileMenuItems.map((item, index) => {
                        const Icon = item.icon;
                        const isLogout = item.label === "Logout";

                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: (navItems.length + index) * 0.1,
                              duration: 0.3,
                            }}
                          >
                            <Link
                              href={item.href || "#"}
                              onClick={(e) => {
                                if (item.onClick === "logout") {
                                  e.preventDefault();
                                  handleLogout();
                                }
                                setIsOpen(false);
                              }}
                              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                isLogout
                                  ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                                  : "text-[#475569] dark:text-[#CBD5E1] hover:bg-[#F1F5F9] dark:hover:bg-[#334155]"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                              <span>{item.label}</span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </>
                  ) : (
                    authItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: (navItems.length + index) * 0.1,
                            duration: 0.3,
                          }}
                        >
                          <Link
                            href={item.href}
                            className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-[12px] font-medium transition-all duration-200 ${
                              item.variant === "primary"
                                ? "bg-[#0057D9] text-white hover:bg-[#003E99]"
                                : "border-2 border-[#0057D9] text-[#0057D9] hover:bg-[#0057D9] hover:text-white dark:border-[#4D8DFF] dark:text-[#4D8DFF] dark:hover:bg-[#4D8DFF] dark:hover:text-white"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span>{item.name}</span>
                          </Link>
                        </motion.div>
                      );
                    })
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      <div style={{ height: "72px" }} />
    </>
  );
};

export default Navbar;