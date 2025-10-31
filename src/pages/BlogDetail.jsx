import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";
import { Helmet } from "react-helmet";
import axios from "axios";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loadingRelated, setLoadingRelated] = useState(true);



  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        
     
        let response;
        try {
          response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blogpage/slug/${id}`);
        } catch (slugError) {
          response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blogpage/${id}`);
        }
        
        if (response.data && response.data.success) {
          setBlog(response.data.data);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err.response?.data?.message || 'Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedBlogs = async () => {
      try {
        setLoadingRelated(true);
    
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blogpage/`);
        if (res.data && res.data.success && res.data.data.length > 0) {
          const publishedBlogs = res.data.data
            .filter(blog => blog.isPublished)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          
          // Filter out the current blog and take first 3
          const filteredBlogs = publishedBlogs
            .filter(blog => blog._id !== id && blog.slug !== id)
            .slice(0, 3);
          
          setRelatedBlogs(filteredBlogs);
        }
      } catch (err) {
        console.error('Error fetching related blogs:', err);
      } finally {
        setLoadingRelated(false);
      }
    };

    if (id) {
      fetchBlog();
      fetchRelatedBlogs();
    }
  }, [id]);

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog.slug || blog._id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#eff1fc] flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800 mb-4">Loading blog...</div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#eff1fc] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {error || 'Blog not found'}
          </h2>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Adryter</title>
        <meta name="description" content={blog.desc} />
        {blog.tags && blog.tags.length > 0 && (
          <meta name="keywords" content={blog.tags.join(', ')} />
        )}
      </Helmet>
      <motion.div 
        className="min-h-screen bg-[#eff1fc]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            <IoArrowBack size={40} />
          </button>
        </div>

        {/* Main Blog Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Category */}
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#181A2A] mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center gap-6 text-gray-500 mb-8">
              <span className="flex items-center gap-2">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <rect width="18" height="18" x="3" y="3" rx="4" stroke="#181A2A" strokeWidth="2" />
                  <path d="M8 7h8M8 11h8M8 15h4" stroke="#181A2A" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" stroke="#181A2A" strokeWidth="2" />
                  <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#181A2A" strokeWidth="2" />
                </svg>
                {blog.author}
              </span>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blog.desc}
            </p>

            {/* Full Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.fullContent }}
            />
          </motion.div>
        </div>

        {/* Related Blogs Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-[#181A2A] mb-8 text-center">
              Related Blogs
            </h2>
            
            {loadingRelated ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              </div>
            ) : relatedBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <motion.div
                    key={relatedBlog._id}
                    className="group cursor-pointer"
                    onClick={() => handleBlogClick(relatedBlog)}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Related Blog Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                          <span className="flex items-center gap-1">
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                              <rect width="18" height="18" x="3" y="3" rx="4" stroke="#181A2A" strokeWidth="2" />
                              <path d="M8 7h8M8 11h8M8 15h4" stroke="#181A2A" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            {relatedBlog.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                              <circle cx="12" cy="8" r="4" stroke="#181A2A" strokeWidth="2" />
                              <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#181A2A" strokeWidth="2" />
                            </svg>
                            {relatedBlog.author}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-[#181A2A] mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                          {relatedBlog.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {relatedBlog.desc}
                        </p>

                        {/* Read More */}
                        <div className="flex items-center justify-between">
                          <span className="text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors duration-300">
                            Read More →
                          </span>
                          {relatedBlog.category && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              {relatedBlog.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-600">
                <p>No related blogs available.</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Back to Home Button */}
        <div className="w-full flex justify-center items-center mx-auto px-6 py-8">
          <button 
            onClick={() => navigate('/')}
            className="bg-purple-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md"
          >
            Back to Home
          </button>
        </div>

        {/* Custom CSS for line clamping */}
        <style>
          {`
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
      </motion.div>
      <Footer />
    </>
  );
};

export default BlogDetail;