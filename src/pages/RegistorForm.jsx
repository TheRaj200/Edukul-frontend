import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { User, Mail, Phone, GraduationCap, BookOpen, MapPin, Calendar, ArrowRight } from "lucide-react";
import axios from 'axios';

const RegistorForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    class: "",
    stream: "",
    schoolName: "",
    schoolBoard: "",
    previousPercentage: "",
    examMode: "",
    examDate: "",
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
      // Build payload similar to the fields previously sent to Google Sheets
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        whatsapp: formData.whatsapp,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        class: formData.class,
        stream: formData.stream,
        schoolName: formData.schoolName,
        schoolBoard: formData.schoolBoard,
        previousPercentage: formData.previousPercentage,
        examMode: formData.examMode,
        examDate: formData.examDate,
      };

 
      const BACKEND = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

      const res = await axios.post(`${BACKEND}/api/registration`, payload, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 10000,
      });

      if (!(res.data && res.data.success)) {
        setIsSubmitting(false);
        return;
      }

      // Directly redirect to Razorpay payment (no in-page success section)
      window.location.href = 'https://rzp.io/rzp/5w4cUdf';

    } catch (err) {
      // Basic error feedback
      alert('Unable to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 w-full overflow-hidden">
      <Navbar />

      <section className="min-h-screen px-4 py-8 mt-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <GraduationCap className="w-5 h-5" />
              EAST Registration 2025
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl h-10 md:h-15  font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Register for the Exam
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Fill in your details to register for the <span className="font-semibold text-blue-600">EAST Exam</span>. 
             
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border border-gray-100"
          >
            {/* Preferred Mode of Exam - First Field */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-purple-500">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Exam Preference
                </h2>
              </div>

              <div className="group max-w-md">
                <label
                  htmlFor="examMode"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                >
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  Preferred Mode of Exam <span className="text-red-500">*</span>
                </label>
                <select
                  id="examMode"
                  name="examMode"
                  value={formData.examMode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-200 text-gray-800 hover:border-gray-300 bg-white cursor-pointer"
                >
                  <option value="">--Select--</option>
                  <option value="Offline">Offline</option>
                  <option value="Interviews">Interviews</option>
                </select>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-500">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Personal Information
                </h2>
              </div>

              {/* Full Name */}
              <div className="mb-6">
                <div className="group">
                  <label
                    htmlFor="fullName"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <User className="w-4 h-4 text-gray-400" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name as per documents"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Email */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Mail className="w-4 h-4 text-gray-400" />
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Phone className="w-4 h-4 text-gray-400" />
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter 10-digit number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Parent Contact & DOB Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Parent Phone */}
                <div className="group">
                  <label
                    htmlFor="whatsapp"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Phone className="w-4 h-4 text-gray-400" />
                    Whatsapp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    placeholder="Whatsapp's 10-digit number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>

                {/* Date of Birth */}
                <div className="group">
                  <label
                    htmlFor="dateOfBirth"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Calendar className="w-4 h-4 text-gray-400" />
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="mb-6">
                <div className="group">
                  <label
                    htmlFor="gender"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <User className="w-4 h-4 text-gray-400" />
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 hover:border-gray-300 bg-white cursor-pointer"
                  >
                    <option value="">--Select--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div className="mb-6">
                <div className="group">
                  <label
                    htmlFor="address"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <MapPin className="w-4 h-4 text-gray-400" />
                    Complete Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="House No., Street, Locality"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Location Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* City */}
                <div className="group">
                  <label
                    htmlFor="city"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <MapPin className="w-4 h-4 text-gray-400" />
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Gwalior"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>

                {/* State */}
                <div className="group">
                  <label
                    htmlFor="state"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <MapPin className="w-4 h-4 text-gray-400" />
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Madhya Pradesh"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>

                {/* Pincode */}
                <div className="group">
                  <label
                    htmlFor="pincode"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <MapPin className="w-4 h-4 text-gray-400" />
                    Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    placeholder="6-digit pincode"
                    pattern="[0-9]{6}"
                    maxLength="6"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>
              </div>
            </div>

            {/* Academic Details Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-cyan-500">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-cyan-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Academic Details
                </h2>
              </div>

              {/* Class and Stream Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Class */}
                <div className="group">
                  <label
                    htmlFor="class"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <GraduationCap className="w-4 h-4 text-gray-400" />
                    Current Class <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all duration-200 text-gray-800 hover:border-gray-300 bg-white cursor-pointer"
                  >
                    <option value="">--Select--</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>

                {/* Stream */}
                <div className="group">
                  <label
                    htmlFor="stream"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <BookOpen className="w-4 h-4 text-gray-400" />
                    Stream <span className="text-xs text-gray-500">(For Class 11-12 only)</span>
                  </label>
                  <select
                    id="stream"
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all duration-200 text-gray-800 hover:border-gray-300 bg-white cursor-pointer"
                  >
                    <option value="">--Select--</option>
                    <option value="Science (PCM)">Science (PCM) - Physics, Chemistry, Maths</option>
                    <option value="Science (PCB)">Science (PCB) - Physics, Chemistry, Biology</option>
                    <option value="Science (PCMB)">Science (PCMB) - All Subjects</option>
                    <option value="N/A">Not Applicable (Class 7-10)</option>
                  </select>
                </div>
              </div>

              {/* School Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* School Name */}
                <div className="group">
                  <label
                    htmlFor="schoolName"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <BookOpen className="w-4 h-4 text-gray-400" />
                    School <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your school"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>

                {/* School Board */}
                <div className="group">
                  <label
                    htmlFor="schoolBoard"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <BookOpen className="w-4 h-4 text-gray-400" />
                    Board <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="schoolBoard"
                    name="schoolBoard"
                    value={formData.schoolBoard}
                    onChange={handleChange}
                    required
                    placeholder="e.g., CBSE, ICSE, MP Board, State Board"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Previous Performance */}
              <div className="mb-6">
                {/* Previous Percentage */}
                <div className="group max-w-md">
                  <label
                    htmlFor="previousPercentage"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <GraduationCap className="w-4 h-4 text-gray-400" />
                    Previous Class Percentage <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="previousPercentage"
                    name="previousPercentage"
                    value={formData.previousPercentage}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 85.5"
                    min="0"
                    max="100"
                    step="0.01"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Exam Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preferred Exam Date */}
                <div className="group">
                  <label
                    htmlFor="examDate"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Calendar className="w-4 h-4 text-gray-400" />
                    Preferred Exam Date <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="examDate"
                    name="examDate"
                    value={formData.examDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all duration-200 text-gray-800 hover:border-gray-300 bg-white cursor-pointer"
                  >
                    <option value="">--Select--</option>
                    <option value="2025-11-02">2  November 2025</option>
                    <option value="2025-11-09">9  November 2025</option>
                    <option value="2025-11-15">15 November 2025</option>

                  </select>
                </div>

                {/* Empty div for spacing */}
                <div></div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-base md:text-lg font-bold px-8 py-4 md:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Proceed to Payment
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <p className="text-center text-sm text-gray-600">
                Registration fee: <span className="font-bold text-blue-600 text-lg">₹5,999</span> only
              </p>
            </div>

            {/* Help Text */}
            <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold text-gray-900">Important:</span> Please ensure all information is accurate before proceeding. 
                    Fields marked with <span className="text-red-500 font-bold">*</span> are mandatory.
                  </p>
                </div>
              </div>
            </div>
          </form>

          {/* Back to Home Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all hover:gap-3"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegistorForm;
