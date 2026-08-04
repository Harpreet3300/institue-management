"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import coursesData from "@/src/app/utils/coursePageData";
import { 
  BookOpen, 
  Users, 
  Star, 
  Clock, 
  ArrowRight,
  GraduationCap,
  Award,
} from "lucide-react";

const CardGrid = () => {
  const [cardData, setCardData] = useState([]);
  const router = useRouter();
  
  const desktopImageHeight = 340;
  const mobileImageHeight = 340;

  useEffect(() => {
    const normalizedData = coursesData.map((course) => ({
      id: course.courseID,
      title: course.courseName,
      description: course.CourseDescription,
      image: course.CourseImage,
      category: course.category || "Development",
      duration: course.duration || "8 weeks",
      level: course.level || "All Levels",
      rating: course.rating || 4.8,
      students: course.students || "2.5k",
    }));
    setCardData(normalizedData);
  }, []);

  const handleViewCourse = (courseId) => {
    router.push(`/courses/${courseId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white border-b border-gray-100">
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0057D9 1px, transparent 0)`,
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
              className="inline-flex items-center px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-6"
            >
              <Award className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Top-Rated Curriculum</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Expand Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Knowledge</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Industry-leading courses designed by experts. Master new skills with structured learning paths and hands-on projects.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="group"
            >
              <Card className="h-full flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div style={{ height: `${desktopImageHeight}px` }}>
                    <CardHeader className="relative w-full h-full overflow-hidden p-0 m-0 shadow-none rounded-none">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={600}
                        height={desktopImageHeight}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </CardHeader>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-lg shadow-sm border border-gray-100">
                      {card.category}
                    </span>
                  </div>

                  {/* Level Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-blue-600 text-xs font-medium text-white rounded-lg shadow-sm">
                      {card.level}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <CardBody className="flex-grow p-6">
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                      {card.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5" />
                      {card.students} students
                    </div>
                  </div>

                  <Typography className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </Typography>
                  
                  <Typography className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
                    {card.description}
                  </Typography>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(card.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{card.rating}</span>
                  </div>
                </CardBody>
                
                {/* Footer */}
                <CardFooter className="p-6 pt-0">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="line-through text-gray-400 mr-2">$199</span>
                      <span className="text-lg font-bold text-gray-900">$49</span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleViewCourse(card.id)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors duration-200 shadow-sm"
                    >
                      <span>View Course</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <GraduationCap className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Your Learning Journey
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of professionals already advancing their careers with our courses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg shadow-blue-600/25">
                Browse All Courses
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-colors duration-200 backdrop-blur-sm">
                View Learning Paths
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;