'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiSearch, FiCalendar, FiUser, FiAward } from 'react-icons/fi';
import { Award, GraduationCap, Trophy, Star } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(6);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const [imageWidth] = useState(800);
  const [imageHeight] = useState(600);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/achievements?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}${
            searchQuery ? `&search=${searchQuery}` : ''
          }`
        );
        const data = await res.json();
        setAchievements(data.data);
        setTotalPages(data.pagination.totalPages);
      } catch (error) {
        console.error('Error fetching achievements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, [page, limit, sortBy, sortOrder, searchQuery]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 1 ? -1 : 1);
    } else {
      setSortBy(field);
      setSortOrder(-1);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] via-[#f8fafc] to-[#e2e8f0]">
      {/* Hero Section */}
      <div className="relative bg-white/80 backdrop-blur-sm border-b border-gray-200">
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full mb-6"
            >
              <Trophy className="w-4 h-4 text-indigo-600 mr-2" />
              <span className="text-sm font-medium text-indigo-700">Excellence Recognized</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Student
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Achievements</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Celebrating outstanding accomplishments and milestones of our talented students
            </p>
          </motion.div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-white rounded-2xl border border-gray-100 p-5 shadow-sm backdrop-blur-sm">
            
            {/* Search */}
            <form onSubmit={handleSearch} className="w-full md:max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400 text-[17px]" />
                </div>
                <input
                  type="text"
                  placeholder="Search achievements..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 mr-1 hidden sm:inline font-medium">Sort by:</span>
              
              <button
                onClick={() => handleSort('date')}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  sortBy === 'date' 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                    : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                <FiCalendar className="text-[15px]" />
                Date
                {sortBy === 'date' && (
                  <span className="text-xs ml-0.5 opacity-90">{sortOrder === -1 ? '↓' : '↑'}</span>
                )}
              </button>

              <button
                onClick={() => handleSort('studentName')}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  sortBy === 'studentName' 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                    : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                <FiUser className="text-[15px]" />
                Name
                {sortBy === 'studentName' && (
                  <span className="text-xs ml-0.5 opacity-90">{sortOrder === -1 ? '↓' : '↑'}</span>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {loading ? (
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[...Array(limit)].map((_, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                <div className="flex flex-col md:flex-row">
                  <div 
                    className="flex-shrink-0 w-full md:w-auto bg-gray-100" 
                    style={{ 
                      width: isMobile ? '100%' : `${imageWidth}px`, 
                      height: isMobile ? '260px' : `${imageHeight}px` 
                    }}
                  >
                    <Skeleton 
                      height={isMobile ? 260 : imageHeight} 
                      width={isMobile ? '100%' : imageWidth} 
                      baseColor="#e2e8f0"
                      highlightColor="#f1f5f9"
                    />
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <Skeleton count={4} baseColor="#e2e8f0" highlightColor="#f1f5f9" className="mb-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : achievements.length > 0 ? (
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement._id}
                  variants={itemVariants}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    
                    {/* Image */}
                    <div 
                      className="relative overflow-hidden flex-shrink-0 w-full md:w-auto bg-gray-100" 
                      style={{ 
                        width: isMobile ? '100%' : `${imageWidth}px`, 
                        height: isMobile ? '260px' : `${imageHeight}px` 
                      }}
                    >
                      <img
                        src={achievement.photo.url}
                        alt={achievement.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ 
                          width: isMobile ? '100%' : `${imageWidth}px`, 
                          height: isMobile ? '260px' : `${imageHeight}px` 
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-1.5 text-indigo-600 text-xs font-semibold tracking-wide uppercase mb-3 bg-indigo-50 px-3 py-1.5 rounded-full">
                          <FiAward className="text-sm" />
                          Achievement
                        </div>

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-3 group-hover:text-indigo-600 transition-colors">
                          {achievement.title}
                        </h2>

                        <p className="text-gray-600 text-[15px] leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>

                      {/* Meta information */}
                      <div className="mt-auto pt-5 border-t border-gray-100">
                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                          <div className="flex items-center gap-2.5 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                              <FiUser className="text-indigo-600 text-[15px]" />
                            </div>
                            <span className="text-gray-700 font-medium">{achievement.studentName}</span>
                          </div>

                          <div className="flex items-center gap-2.5 text-sm">
                            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                              <FiCalendar className="text-purple-600 text-[15px]" />
                            </div>
                            <span className="text-gray-700">{formatDate(achievement.date)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-50 rounded-3xl mb-6">
              <Trophy className="w-12 h-12 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No achievements found</h3>
            <p className="text-gray-500 text-sm">
              {searchQuery
                ? 'Try adjusting your search query'
                : 'Check back later for new achievements'}
            </p>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-12"
          >
            <nav className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-2xl p-2 shadow-sm">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <FiChevronLeft size={18} />
              </button>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all ${
                      page === pageNum
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {totalPages > 5 && page < totalPages - 2 && (
                <span className="px-1 text-gray-400 text-sm">…</span>
              )}

              {totalPages > 5 && page < totalPages - 2 && (
                <button
                  onClick={() => setPage(totalPages)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all ${
                    page === totalPages
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {totalPages}
                </button>
              )}

              <button
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
                className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <FiChevronRight size={18} />
              </button>
            </nav>
          </motion.div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-gray-900 to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
              <GraduationCap className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Become Our Next Success Story
            </h2>
            <p className="text-indigo-200 text-lg mb-8">
              Join our community of high achievers and create your own legacy of excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-indigo-600/25">
                View All Achievements
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-colors duration-200 backdrop-blur-sm border border-white/10">
                Share Your Achievement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;