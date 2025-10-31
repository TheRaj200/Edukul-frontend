import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  exit: { opacity: 0, x: 10, transition: { duration: 0.4 } },
};

// Skeleton Loading Component
const BlogSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="h-64 bg-gray-300"></div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-3">
        <div className="h-4 bg-gray-300 rounded w-20"></div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
      <div className="h-6 bg-gray-300 rounded mb-3"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="flex items-center justify-between">
        <div className="h-4 bg-gray-300 rounded w-24"></div>
        <div className="h-6 bg-gray-300 rounded-full w-16"></div>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const blogsPerPage = 9;
  const hasLoadedRef = useRef(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (hasLoadedRef.current) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blogpage/`);
        if (res.data && res.data.success && res.data.data.length > 0) {
          const publishedBlogs = res.data.data
            .filter(blog => blog.isPublished)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          
          setBlogs(publishedBlogs);
          setTotalPages(Math.ceil(publishedBlogs.length / blogsPerPage));
        } else {
          setError('No blogs available');
        }
        hasLoadedRef.current = true;
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog.slug || blog._id}`);
  };

  // Get current blogs for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <>
      <Helmet>
        <title>Blog </title>
        <meta name="description" content="Explore our latest insights, trends, and strategies in social media marketing. Stay updated with industry best practices and expert tips." />
        <meta name="keywords" content="social media marketing, digital marketing, blog, insights, trends" />
      </Helmet>
       
       <Navbar/>
      <motion.section
        ref={ref}
        id="blog"
        className="w-full min-h-screen bg-[#eff1fc] py-16 px-4 md:px-14"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        exit="exit"
      >
        <motion.div
          className="w-full max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl xl:text-5xl 2xl:text-6xl text font-bold text-[#181A2A] mb-6"
              variants={itemVariants}
            >
             All Blogs
            </motion.h1>
         
          </motion.div>

          {/* Loading State with Skeleton */}
          {loading && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {[...Array(8)].map((_, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <BlogSkeleton />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Error State */}
          {error && !loading && (
            <motion.div 
              className="flex items-center justify-center h-64"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-xl text-gray-600 mb-4">{error}</div>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Try Again
                </button>
              </div>
            </motion.div>
          )}

          {/* Blogs Grid */}
          {!loading && !error && currentBlogs.length > 0 && (
            <>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
              >
                {currentBlogs.map((blog, index) => (
                  <motion.div 
                    key={blog._id} 
                    variants={itemVariants}
                    className="group cursor-pointer"
                    onClick={() => handleBlogClick(blog)}
                  >
                    {/* Blog Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Glare Effect */}
                        <div className="pointer-events-none absolute inset-0 z-10">
                          <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-80 group-hover:animate-glare rounded-2xl" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                          <span className="flex items-center gap-1">
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                              <rect
                                width="18"
                                height="18"
                                x="3"
                                y="3"
                                rx="4"
                                stroke="#181A2A"
                                strokeWidth="2"
                              />
                              <path
                                d="M8 7h8M8 11h8M8 15h4"
                                stroke="#181A2A"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                            {blog.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                              <circle
                                cx="12"
                                cy="8"
                                r="4"
                                stroke="#181A2A"
                                strokeWidth="2"
                              />
                              <path
                                d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"
                                stroke="#181A2A"
                                strokeWidth="2"
                              />
                            </svg>
                            {blog.author}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#181A2A] mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                          {blog.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-base mb-4 line-clamp-3">
                          {blog.desc}
                        </p>

                        {/* Read More Button */}
                        <div className="flex items-center justify-between">
                          <span className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
                            Read More →
                          </span>
                          {blog.category && (
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              {blog.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div 
                  className="flex justify-center items-center mt-16"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                        currentPage === 1
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-purple-600 hover:bg-purple-50 border border-gray-200'
                      }`}
                    >
                      Previous
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                      {getPageNumbers().map((number, index) => (
                        <button
                          key={index}
                          onClick={() => typeof number === 'number' && paginate(number)}
                          disabled={number === '...'}
                          className={`px-3 py-2 rounded-lg font-medium transition-colors duration-300 ${
                            number === currentPage
                              ? 'bg-purple-600 text-white'
                              : number === '...'
                              ? 'text-gray-400 cursor-default'
                              : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                          }`}
                        >
                          {number}
                        </button>
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                        currentPage === totalPages
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-white text-purple-600 hover:bg-purple-50 border border-gray-200'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Page Info */}
              {totalPages > 1 && (
                <motion.div 
                  className="text-center mt-4 text-gray-600"
                  variants={itemVariants}
                >
                  Page {currentPage} of {totalPages} • Showing {indexOfFirstBlog + 1}-{Math.min(indexOfLastBlog, blogs.length)} of {blogs.length} blogs
                </motion.div>
              )}
            </>
          )}

          {/* No Blogs State */}
          {!loading && !error && blogs.length === 0 && (
            <motion.div 
              className="flex items-center justify-center h-64"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-xl text-gray-600 mb-4">No blogs available yet.</div>
                <p className="text-gray-500">Check back soon for new content!</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Custom CSS for animations */}
        <style>
          {`
            @keyframes glare {
              0% { left: -75%; opacity: 0.0; }
              20% { opacity: 0.8; }
              50% { left: 100%; opacity: 0.8; }
              80% { opacity: 0.8; }
              100% { left: 100%; opacity: 0.0; }
            }
            .group:hover .group-hover\\:animate-glare {
              animation: glare 1.2s linear;
            }
            .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .line-clamp-3 {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}
        </style>
      </motion.section>
      <Footer />
    </>
  );
};

export default Blog;