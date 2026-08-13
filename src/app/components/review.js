"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Plus, 
  X, 
  Loader2,
  User,
  GraduationCap,
  Users,
  Sparkles,
  Heart,
  MessageSquare,
  Calendar,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Send,
  Quote,
  Pencil,
  Trash2,
  Save,
  RotateCcw,
  MoreVertical
} from "lucide-react";

export default function ReviewComponent() {
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [confirmationType, setConfirmationType] = useState('success');
  const [focusedField, setFocusedField] = useState(null);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'visitor',
    review: '',
    rating: 5
  });

  const reviewsPerPage = 6;

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      const endIndex = currentPage * reviewsPerPage;
      setDisplayedReviews(reviews.slice(0, endIndex));
    }
  }, [reviews, currentPage]);

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/review');
      const data = await response.json();
      const sortedReviews = data.reviews.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setReviews(sortedReviews || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      showConfirmationPopup('Failed to load reviews. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const showConfirmationPopup = (message, type = 'success') => {
    setConfirmationMessage(message);
    setConfirmationType(type);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const url = editingReviewId 
        ? `/api/review/edit/${editingReviewId}`
        : '/api/review/add';
      
      const method = editingReviewId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        await fetchReviews();
        setFormData({
          name: '',
          category: 'visitor',
          review: '',
          rating: 5
        });
        setShowForm(false);
        setEditingReviewId(null);
        showConfirmationPopup(
          editingReviewId ? 'Review updated successfully!' : 'Review submitted successfully!'
        );
      } else {
        showConfirmationPopup(
          editingReviewId ? 'Failed to update review.' : 'Failed to submit review.',
          'error'
        );
      }
    } catch (error) {
      showConfirmationPopup('Error saving review. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditReview = (review) => {
    setFormData({
      name: review.name,
      category: review.category,
      review: review.review,
      rating: review.rating
    });
    setEditingReviewId(review._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteReview = async (reviewId) => {
    if (!confirm('Are you sure you want to delete this review?')) return;
    
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/review/delete/${reviewId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchReviews();
        showConfirmationPopup('Review deleted successfully!');
      } else {
        showConfirmationPopup('Failed to delete review.', 'error');
      }
    } catch (error) {
      showConfirmationPopup('Error deleting review.', 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancelEdit = () => {
    setShowForm(false);
    setEditingReviewId(null);
    setFormData({
      name: '',
      category: 'visitor',
      review: '',
      rating: 5
    });
  };

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const hasMoreReviews = displayedReviews.length < reviews.length;

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'student': return GraduationCap;
      case 'staff': return Users;
      default: return User;
    }
  };

  const getCategoryGradient = (category) => {
    switch(category) {
      case 'student': return 'linear-gradient(135deg, #0057D9, #4D8DFF)';
      case 'staff': return 'linear-gradient(135deg, #00A86B, #34D399)';
      default: return 'linear-gradient(135deg, #7C3AED, #A78BFA)';
    }
  };

  const StarRating = ({ rating, interactive = false, onChange = null, size = 'sm' }) => {
    const starSize = size === 'lg' ? 'w-8 h-8' : 'w-5 h-5';
    
    return (
      <div className="flex items-center space-x-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            type="button"
            onClick={() => interactive && onChange && onChange(star)}
            whileHover={interactive ? { scale: 1.2 } : {}}
            whileTap={interactive ? { scale: 0.9 } : {}}
            className={`${interactive ? 'cursor-pointer' : 'cursor-default'} focus:outline-none`}
            disabled={!interactive}
          >
            <Star
              className={`${starSize} transition-all duration-300 ${
                star <= rating 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300'
              } ${interactive ? 'hover:scale-110' : ''}`}
            />
          </motion.button>
        ))}
        {!interactive && (
          <span className="ml-2 text-sm font-semibold text-gray-600">{rating.toFixed(1)}</span>
        )}
      </div>
    );
  };

  // Confirmation Popup
  const ConfirmationPopup = () => {
    if (!showConfirmation) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="fixed top-4 right-4 z-50"
      >
        <div 
          className="rounded-2xl p-5 shadow-xl flex items-start space-x-4"
          style={{
            background: confirmationType === 'success' 
              ? 'linear-gradient(135deg, #f0fdf4, #dcfce7)'
              : 'linear-gradient(135deg, #fef2f2, #fee2e2)',
            boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff',
            border: `2px solid ${confirmationType === 'success' ? '#86efac' : '#fca5a5'}`
          }}
        >
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: confirmationType === 'success'
                ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                : 'linear-gradient(135deg, #ef4444, #dc2626)',
              boxShadow: '4px 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            {confirmationType === 'success' ? (
              <CheckCircle className="w-6 h-6 text-white" />
            ) : (
              <AlertCircle className="w-6 h-6 text-white" />
            )}
          </div>
          <div>
            <h3 className={`font-semibold text-sm ${
              confirmationType === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {confirmationType === 'success' ? 'Success!' : 'Error'}
            </h3>
            <p className={`text-sm mt-1 ${
              confirmationType === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              {confirmationMessage}
            </p>
          </div>
          <button
            onClick={() => setShowConfirmation(false)}
            className="p-1 hover:bg-black/5 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          background: 'linear-gradient(135deg, #e8edf5 0%, #d5dce8 25%, #cbd5e1 50%, #d5dce8 75%, #e8edf5 100%)',
        }}
      >
        <div 
          className="w-16 h-16 rounded-3xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
            boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
          }}
        >
          <Loader2 className="w-8 h-8 text-[#0057D9] animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #e8edf5 0%, #d5dce8 25%, #cbd5e1 50%, #d5dce8 75%, #e8edf5 100%)',
      }}
    >
      <Head>
        <title>Student Reviews</title>
        <meta name="description" content="Share your experience with us" />
      </Head>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      <ConfirmationPopup />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div 
            className="inline-flex p-4 rounded-3xl mb-6"
            style={{
              background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
              boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
            }}
          >
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #0057D9, #003E99)',
                boxShadow: 'inset 2px 2px 5px rgba(255,255,255,0.2), inset -2px -2px 5px rgba(0,0,0,0.2)',
              }}
            >
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 
            className="text-5xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #1e293b, #334155)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Student Reviews
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our community is saying about their experience with EduManage
          </p>

          <motion.button
            onClick={() => {
              if (showForm) {
                handleCancelEdit();
              } else {
                setShowForm(true);
                setEditingReviewId(null);
                setFormData({
                  name: '',
                  category: 'visitor',
                  review: '',
                  rating: 5
                });
              }
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 h-[52px] px-8 rounded-2xl font-semibold text-white flex items-center justify-center space-x-2 mx-auto transition-all duration-300 hover:shadow-lg"
            style={{
              background: showForm 
                ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                : 'linear-gradient(135deg, #0057D9, #003E99)',
              boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
            }}
          >
            {showForm ? (
              <>
                <X className="w-5 h-5" />
                <span>{editingReviewId ? 'Cancel Edit' : 'Cancel Review'}</span>
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                <span>Add Your Review</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Review Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="mb-12"
            >
              <div 
                className="rounded-3xl p-8 sm:p-10"
                style={{
                  background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                  boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff, inset 1px 1px 2px rgba(255,255,255,0.5)',
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: editingReviewId 
                          ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                          : 'linear-gradient(135deg, #0057D9, #003E99)',
                        boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                      }}
                    >
                      {editingReviewId ? (
                        <Pencil className="w-5 h-5 text-white" />
                      ) : (
                        <Sparkles className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {editingReviewId ? 'Edit Your Review' : 'Share Your Experience'}
                    </h2>
                  </div>
                  {editingReviewId && (
                    <motion.button
                      onClick={handleCancelEdit}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-sm text-gray-500 hover:text-gray-700 flex items-center space-x-1"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset</span>
                    </motion.button>
                  )}
                </div>

                <form onSubmit={handleSubmitReview} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        Your Name
                      </label>
                      <div 
                        className={`relative rounded-2xl transition-all duration-300 ${
                          focusedField === 'name' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <User className={`w-5 h-5 transition-colors duration-300 ${
                            focusedField === 'name' ? 'text-[#0057D9]' : 'text-gray-400'
                          }`} />
                        </div>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="block w-full h-[52px] pl-14 pr-4 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none transition-all duration-300"
                          style={{ background: 'transparent' }}
                          required
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                        You are a
                      </label>
                      <div 
                        className={`relative rounded-2xl transition-all duration-300 ${
                          focusedField === 'category' 
                            ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                            : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                        }`}
                      >
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                          onFocus={() => setFocusedField('category')}
                          onBlur={() => setFocusedField(null)}
                          className="block w-full h-[52px] pl-5 pr-10 rounded-2xl text-gray-900 font-medium focus:outline-none transition-all duration-300 appearance-none"
                          style={{ background: 'transparent' }}
                        >
                          <option value="visitor">Visitor</option>
                          <option value="student">Student</option>
                          <option value="staff">Staff</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                      Your Rating
                    </label>
                    <div 
                      className="inline-flex p-3 rounded-2xl"
                      style={{
                        background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                        boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
                      }}
                    >
                      <StarRating 
                        rating={formData.rating} 
                        interactive={true}
                        onChange={(rating) => setFormData({...formData, rating})}
                        size="lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 ml-2">
                      Your Review
                    </label>
                    <div 
                      className={`relative rounded-2xl transition-all duration-300 ${
                        focusedField === 'review' 
                          ? 'shadow-[inset_4px_4px_8px_#c5cdd8,inset_-4px_-4px_8px_#ffffff]' 
                          : 'shadow-[4px_4px_8px_#c5cdd8,-4px_-4px_8px_#ffffff]'
                      }`}
                    >
                      <textarea
                        value={formData.review}
                        onChange={(e) => setFormData({...formData, review: e.target.value})}
                        onFocus={() => setFocusedField('review')}
                        onBlur={() => setFocusedField(null)}
                        rows="4"
                        className="block w-full p-5 rounded-2xl text-gray-900 placeholder-gray-400 font-medium focus:outline-none transition-all duration-300 resize-none"
                        style={{ background: 'transparent' }}
                        required
                        placeholder="Share your experience with EduManage..."
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="flex-1 h-[52px] rounded-2xl font-semibold text-white flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-70"
                      style={{
                        background: editingReviewId 
                          ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                          : 'linear-gradient(135deg, #0057D9, #003E99)',
                        boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Saving...</span>
                        </>
                      ) : (
                        <>
                          {editingReviewId ? (
                            <>
                              <Save className="w-5 h-5" />
                              <span>Update Review</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              <span>Submit Review</span>
                            </>
                          )}
                        </>
                      )}
                    </motion.button>
                    
                    {editingReviewId && (
                      <motion.button
                        type="button"
                        onClick={handleCancelEdit}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="px-6 h-[52px] rounded-2xl font-semibold text-gray-600 flex items-center justify-center space-x-2 transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                          boxShadow: '4px 4px 8px #c5cdd8, -4px -4px 8px #ffffff',
                        }}
                      >
                        <X className="w-5 h-5" />
                        <span>Cancel</span>
                      </motion.button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedReviews.map((review, index) => {
            const CategoryIcon = getCategoryIcon(review.category);
            const categoryGradient = getCategoryGradient(review.category);
            
            return (
              <motion.div
                key={review._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl overflow-hidden flex flex-col relative group"
                style={{
                  background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                  boxShadow: '12px 12px 24px #c5cdd8, -12px -12px 24px #ffffff',
                }}
              >
                {/* Edit/Delete Actions */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="flex space-x-1">
                    <motion.button
                      onClick={() => handleEditReview(review)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1.5 rounded-lg bg-white/80 backdrop-blur-sm shadow-md hover:bg-blue-50 transition-colors"
                      title="Edit review"
                    >
                      <Pencil className="w-4 h-4 text-[#0057D9]" />
                    </motion.button>
                    <motion.button
                      onClick={() => handleDeleteReview(review._id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1.5 rounded-lg bg-white/80 backdrop-blur-sm shadow-md hover:bg-red-50 transition-colors"
                      title="Delete review"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: categoryGradient,
                          boxShadow: '4px 4px 8px rgba(0,0,0,0.1)',
                        }}
                      >
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                        <span 
                          className="inline-block px-3 py-1 text-xs font-medium rounded-xl mt-1"
                          style={{
                            background: categoryGradient,
                            color: 'white',
                            boxShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                          }}
                        >
                          {review.category.charAt(0).toUpperCase() + review.category.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <StarRating rating={review.rating} />
                  </div>

                  <div className="relative">
                    <Quote className="w-5 h-5 text-[#0057D9] opacity-30 absolute -top-1 -left-1" />
                    <p className="text-gray-600 pl-4 line-clamp-4 leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </div>
                
                <div className="px-6 py-4 border-t border-gray-200/50 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(review.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  {review.updatedAt && review.updatedAt !== review.createdAt && (
                    <span className="text-xs text-gray-400 italic">(edited)</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMoreReviews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="h-[52px] px-8 rounded-2xl font-semibold text-[#0057D9] flex items-center justify-center space-x-2 mx-auto transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
              }}
            >
              <span>Load More Reviews</span>
              <ChevronDown className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {!hasMoreReviews && reviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-6"
          >
            <div 
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
              }}
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-600">You've seen all {reviews.length} reviews</span>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {reviews.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div 
              className="max-w-md mx-auto rounded-3xl p-12"
              style={{
                background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                boxShadow: '20px 20px 60px #c5cdd8, -20px -20px 60px #ffffff',
              }}
            >
              <div 
                className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                  boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff, inset 2px 2px 4px rgba(255,255,255,0.5)',
                }}
              >
                <MessageSquare className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Reviews Yet</h3>
              <p className="text-gray-500 mb-6">Be the first to share your experience with our community!</p>
              <motion.button
                onClick={() => {
                  setShowForm(true);
                  setEditingReviewId(null);
                  setFormData({
                    name: '',
                    category: 'visitor',
                    review: '',
                    rating: 5
                  });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="h-[48px] px-8 rounded-2xl font-semibold text-white flex items-center justify-center space-x-2 mx-auto"
                style={{
                  background: 'linear-gradient(135deg, #0057D9, #003E99)',
                  boxShadow: '8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff',
                }}
              >
                <Plus className="w-5 h-5" />
                <span>Write a Review</span>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Footer Stats */}
        {reviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div 
              className="inline-flex items-center space-x-6 px-8 py-4 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, #e8edf5, #ffffff)',
                boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
              }}
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-[#0057D9]" />
                <span className="font-semibold text-gray-900">{reviews.length}</span>
                <span className="text-sm text-gray-500">Reviews</span>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold text-gray-900">
                  {(reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)}
                </span>
                <span className="text-sm text-gray-500">Average Rating</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <style jsx global>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
