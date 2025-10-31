

import { motion as Motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, GraduationCap, Calendar, Award, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import Highlights from "../components/Highlights";
import CourseTabs from "../components/CourseTabs";
import Announcements from "../components/Announcements";
import WhyEdukul from "../components/WhyEdukul";
import StudentStories from "../components/StudentStories";
import Results from "../components/Result";
import AppPromo from "../components/AppPromo";
import AssistCard from "../components/AssistCard ";
import Footer from "../components/Footer";
import Directors from "../components/Directors";
import Blog from "../components/Blog";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after 1.5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleRegisterClick = () => {
  
    setShowPopup(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const fadeInUp = {

    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const fadeInLeft = {
    hidden: { 
      opacity: 0, 
      x: -60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const fadeInRight = {
    hidden: { 
      opacity: 0, 
      x: 60 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
  <Motion.div 
      className="min-h-screen bg-gradient-to-br from-[#fff6ec] via-white to-[#eef7fb] w-full overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Navbar />

      {/* Registration Popup */}
      {showPopup && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closePopup}
        >
          <Motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-[999] p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Header with Gradient */}
            <div className="bg-gradient-to-br from-[#1d8dc4] via-[#076da0] to-[#1d8dc4] p-8 text-white text-center relative overflow-hidden">
              <Motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
              />
              <Motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"
              />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                  EAST Exam 2025 🎓
                </h2>
                <p className="text-lg text-white/90 mb-2">
                  Edukul Aptitude & Scholarship Test
                </p>
                <div className="inline-block px-4 py-2 bg-orange-500 rounded-full text-sm font-bold animate-pulse">
                  Registration Open Now!
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
            
              {/* Benefits */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  What You'll Get:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Instant Admit Card via Email & WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Participation Certificate</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Win Scholarships worth Lakhs & Awards</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Performance Analysis Report</span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://east.edukulclasses.com/#register" 
                  onClick={handleRegisterClick}
                  className="flex-1 group relative bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Register Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>

                <button
                  onClick={closePopup}
                  className="sm:w-auto px-6 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-all hover:bg-gray-50"
                >
                  Maybe Later
                </button>
              </div>

              {/* Footer Note */}
              <p className="text-center text-xs text-gray-500 mt-4">
                Limited seats available! Register before slots fill up
              </p>
            </div>
          </Motion.div>
        </Motion.div>
      )}

      <div className=" mt-10 px-4 sm:px-8">
    <Motion.a 
          href="https://wa.me/916262151600"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-4 z-50 block cursor-pointer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img 
            className="w-15 h-15" 
            src="./images/Whatsapp.png" 
            alt="Chat on WhatsApp"
          />
        </Motion.a>
        
  <Motion.div
          initial="hidden"

          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <BannerSlider />
  </Motion.div>

  <Motion.div
          initial="hidden"
          whileInView="visible"
          
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
        >
          <Highlights />
  </Motion.div>
  <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Announcements />
  </Motion.div>

  <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
        >
          <CourseTabs />
  </Motion.div>


    <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Directors />
        </Motion.div>
          <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Results />
  </Motion.div>

    <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
        >
          <StudentStories />
  </Motion.div>


        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
        >
          <AssistCard />
        </Motion.div>

  <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
        >
          <WhyEdukul />
  </Motion.div>


  <Blog/>

        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
        >
          <AppPromo />
        </Motion.div>


        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
        </Motion.div>
      </div>
          <Footer />
  </Motion.div>
  );
};

export default Home;
