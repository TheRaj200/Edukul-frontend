


import { useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const banners = [
  {
    img: "./images/slider.jpg",
    alt: "Announcement Banner 1",
  },
  {
    img: "./images/slider2.jpg",
    alt: "Announcement slider 2",
  },
];

const Announcements = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    phoneNumber: "",
    class: "Class 11",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        studentName: formData.studentName,
        phoneNumber: formData.phoneNumber,
        class: formData.class,
        source: 'announcements_form',
      };
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/getintouch`, payload, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      setFormData({ studentName: "", phoneNumber: "", class: "Class 11" });
    } catch (err) {
      console.error('GetInTouch submit error', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactUs" className="py-12 bg-orange-50">
      {/* Removed hidden iframe; using API via axios now */}
      
      <div className="max-w-7xl mx-auto items-center  grid grid-cols-1 md:grid-cols-2 gap-28 px-6">
        {/* Left:  Slider */}
        <div>
          <Swiper
            slidesPerView={1}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="rounded-2xl"
          >
            {banners.map((banner, idx) => (
              <SwiperSlide key={idx}>
                <img
                  className="rounded-2xl w-full h-auto"
                  src={banner.img}
                  alt={banner.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#1d8dc4] outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                pattern="[0-9]{10}"
                maxLength="10"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#1d8dc4] outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Class
              </label>
              <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#1d8dc4] outline-none"
              >
                <option>Class 11</option>
                <option>Class 12</option>
                <option>12th Pass</option>
                <option>Foundation (9th & 10th)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-2 rounded-lg shadow-md hover:from-orange-700 hover:to-red-700 transition transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Announcements;
