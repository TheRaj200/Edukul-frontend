import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    } 
  },
  exit: { 
    opacity: 0, 
    y: 50, 
    transition: { 
      duration: 0.4 
    } 
  },
};

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasLoadedRef = useRef(false);


  useEffect(() => {
    const fetchBlogs = async () => {
      if (hasLoadedRef.current) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/blogpage/`);
        if (res.data && res.data.success && res.data.data.length > 0) {
          const publishedBlogs = res.data.data
            .filter(blog => blog.isPublished)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 4);
          
          setBlogs(publishedBlogs);
        }
        hasLoadedRef.current = true;
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <motion.section
      ref={ref}
      id="blog"
      className="w-full min-h-screen h-auto bg-[#eff1fc] py-8 px-4 md:py-16 md:px-14 flex flex-col items-center overflow-hidden"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      exit="exit"
    >
      <motion.div
        className="w-full max-w-7xl mx-auto md:mt-20 flex flex-col md:flex-row md:items-center md:justify-between md:mb-8"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col gap-2"
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#181A2A] mb-2 md:mb-0"
            variants={itemVariants}
          >
         Blog
          </motion.h2>
        </motion.div>
      </motion.div>

      {loading ? (
        <motion.div 
          className="flex items-center justify-center h-64"
          variants={itemVariants}
        >
          <div className="text-xl text-gray-600">Loading blogs...</div>
        </motion.div>
      ) : blogs.length === 0 ? (
        <motion.div 
          className="flex items-center justify-center h-64"
          variants={itemVariants}
        >
          <div className="text-xl text-gray-600">No blogs available yet.</div>
        </motion.div>
      ) : (
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto scale-90 z-60"
          variants={containerVariants}
        >
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog._id} 
              variants={itemVariants}
              custom={index}
              className="w-full"
            >
              <div 
                className="relative group w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => navigate(`/blog/${blog.slug || blog._id}`)}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3"
                />
              
                <div className="pointer-events-none absolute inset-0 z-10">
                  <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-80 group-hover:animate-glare rounded-2xl" />
                </div>
              </div>
              <motion.div
                className="w-[90%] md:w-[90%] m-auto rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-2 bg-white -translate-y-10 md:-translate-y-20 cursor-pointer"
                variants={itemVariants}
                onClick={() => navigate(`/blog/${blog.slug || blog._id}`)}
              >
                <div className="flex items-center gap-4 text-gray-500 text-xs md:text-sm mb-1">
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
                <h3 className="text-lg md:text-xl font-bold text-[#181A2A] mb-1">
                  {blog.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 mb-2">
                  {blog.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.section>
      )}
       <motion.button
                onClick={() => navigate(`/blog`)}
                className="group relative cursor-pointer min-h-[50px] -translate-y-15 w-40 overflow-hidden border rounded border-purple-800 bg-white text-purple-800 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-800 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-800 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full mt-8"
                variants={itemVariants}
              >
                <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-800 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-800 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                  See All Blogs{" "}
                </span>
              </motion.button>
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
        `}
      </style>
    </motion.section>
  );
};

export default Blog;
