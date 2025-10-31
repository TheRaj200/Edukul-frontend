import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCalendarAlt, FaBook, FaCheckCircle, FaVideo, FaUsers, FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NeetTestSeries = () => {

  const navigate = useNavigate();

  const features = [
    {
      icon: <FaBook className="text-3xl" />,
      title: "9 Topic-wise Tests",
      description: "Comprehensive coverage of all topics",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "2 Mock Tests",
      description: "Full syllabus practice tests",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaVideo className="text-3xl" />,
      title: "5 CBT-based mock tests",
      description: "Covering the full NEET syllabus for Physics, Chemistry, and Biology.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Live Doubt Sessions",
      description: "For Gwalior region students",
      color: "from-green-500 to-teal-500",
    },
  ];

  const testSchedule = [
    {
      testNo: 1,
      date: "05-10-2025",
      type: "Topic-wise",
      physics: "Physical World, Units & Measurement, Motion in a Straight Line, Motion in a Plane",
      chemistry: "Some Basic Concepts of Chemistry, Structure of Atom, Classification of Elements",
      biology: "The Living World, Biological Classification, Plant Kingdom, Animal Kingdom",
    },
    {
      testNo: 2,
      date: "12-10-2025",
      type: "Topic-wise",
      physics: "Laws of Motion, Work Energy & Power, System of Particles & Rotational Motion",
      chemistry: "Chemical Bonding & Molecular Structure, States of Matter, Thermodynamics",
      biology: "Morphology of Flowering Plants, Anatomy of Flowering Plants, Structural Organisation in Animals",
    },
    {
      testNo: 3,
      date: "19-10-2025",
      type: "Topic-wise",
      physics: "Gravitation, Mechanical Properties of Solids, Mechanical Properties of Fluids",
      chemistry: "Equilibrium, Redox Reactions, Hydrogen",
      biology: "Cell: The Unit of Life, Biomolecules, Cell Cycle & Cell Division",
    },
    {
      testNo: 4,
      date: "26-10-2025",
      type: "Topic-wise",
      physics: "Thermal Properties of Matter, Thermodynamics, Kinetic Theory",
      chemistry: "S-Block Elements, P-Block Elements, Organic Chemistry - Basic Principles",
      biology: "Transport in Plants, Mineral Nutrition, Photosynthesis in Higher Plants",
    },
    {
      testNo: 5,
      date: "02-11-2025",
      type: "Topic-wise",
      physics: "Oscillations, Waves",
      chemistry: "Hydrocarbons, Environmental Chemistry",
      biology: "Respiration in Plants, Plant Growth & Development",
    },
    {
      testNo: 6,
      date: "09-11-2025",
      type: "Topic-wise",
      physics: "Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity",
      chemistry: "Solid State, Solutions, Electrochemistry",
      biology: "Digestion & Absorption, Breathing & Exchange of Gases, Body Fluids & Circulation",
    },
    {
      testNo: 7,
      date: "16-11-2025",
      type: "Topic-wise",
      physics: "Moving Charges & Magnetism, Magnetism & Matter, Electromagnetic Induction",
      chemistry: "Chemical Kinetics, Surface Chemistry, General Principles of Isolation of Elements",
      biology: "Excretory Products & Elimination, Locomotion & Movement, Neural Control & Coordination",
    },
    {
      testNo: 8,
      date: "23-11-2025",
      type: "Topic-wise",
      physics: "Alternating Current, Electromagnetic Waves",
      chemistry: "P-Block Elements, D & F Block Elements, Coordination Compounds",
      biology: "Chemical Coordination & Integration, Reproduction in Organisms, Sexual Reproduction in Flowering Plants",
    },
    {
      testNo: 9,
      date: "30-11-2025",
      type: "Topic-wise",
      physics: "Ray Optics & Optical Instruments, Wave Optics, Dual Nature of Radiation",
      chemistry: "Haloalkanes & Haloarenes, Alcohols Phenols & Ethers, Aldehydes Ketones & Carboxylic Acids",
      biology: "Human Reproduction, Reproductive Health, Principles of Inheritance & Variation",
    },
    {
      testNo: 10,
      date: "07-12-2025",
      type: "Mock Test",
      description: "Full Mock Test on NEET (UG) — Complete Syllabus",
    },
    {
      testNo: 11,
      date: "14-12-2025",
      type: "Mock Test",
      description: "Full Mock Test on NEET (UG) — Complete Syllabus",
    },
    {
      testNo: 12,
      date: "21-12-2025",
      type: "CBT Mock",
      description: "Mock Test on NEET (UG) — Complete Syllabus (CBT Based)",
    },
    {
      testNo: 13,
      date: "28-12-2025",
      type: "CBT Mock",
      description: "Mock Test on NEET (UG) — Complete Syllabus (CBT Based)",
    },
    {
      testNo: 14,
      date: "04-01-2026",
      type: "CBT Mock",
      description: "Mock Test on NEET (UG) — Complete Syllabus (CBT Based)",
    },
    {
      testNo: 15,
      date: "11-01-2026",
      type: "CBT Mock",
      description: "Mock Test on NEET (UG) — Complete Syllabus (CBT Based)",
    },
    {
      testNo: 16,
      date: "18-01-2026",
      type: "CBT Mock",
      description: "Mock Test on NEET (UG) — Complete Syllabus (CBT Based)",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1d8dc4] via-[#076da0] to-[#1d8dc4] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Rise & Rank — NEET Test Series
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            (UG) 2025–26
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Online & Offline test series for students currently in Class XII or
            passed Class XII (2025–26)
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
              <p className="text-white font-semibold text-lg">16 Total Tests</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
              <p className="text-white font-semibold text-lg">
                Full Syllabus Coverage
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
              <p className="text-white font-semibold text-lg">Video Solutions</p>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              onClick={()=> navigate("/form")}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:from-orange-700 hover:to-red-700 transition-all transform text-lg hover:scale-105 cursor-pointer"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our{" "}
            <span className="text-[#1d8dc4]">Test Series?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Details */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Test Series <span className="text-[#1d8dc4]">Details</span>
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Comprehensive test series covering the entire NEET syllabus for
            Physics, Chemistry, and Biology
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Test Window */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <FaCalendarAlt className="text-4xl text-[#1d8dc4] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Test Window
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Start:</strong> 05 October 2025
              </p>
              <p className="text-gray-700 mb-2">
                <strong>End:</strong> 18 January 2026
              </p>
              <p className="text-gray-600 text-sm">Tests on Sundays</p>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 shadow-xl text-white">
              <FaRupeeSign className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Pricing</h3>
              <p className="text-4xl font-extrabold mb-4">₹1,999/-</p>
              <p className="text-white/90 text-sm">
                Complete test series package
              </p>
              <p className="text-white/80 text-xs mt-3">
                * Once registered, the fee is non-refundable
              </p>
            </div>

            {/* Support */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <FaUsers className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Solutions & Support
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Detailed solutions for every test</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Video solutions available</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Live doubt-solving sessions (Gwalior)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Test Schedule */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Test Schedule & <span className="text-[#1d8dc4]">Syllabus</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Complete breakdown of all 16 tests with detailed syllabus
          </p>

          <div className="space-y-6">
            {testSchedule.map((test, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all hover:border-[#1d8dc4]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4 mb-3 md:mb-0">
                    <div className="bg-gradient-to-br from-[#1d8dc4] to-[#076da0] text-white font-bold text-lg px-5 py-2 rounded-full">
                      Test {test.testNo}
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaCalendarAlt className="text-[#fd9b36]" />
                      <span className="font-semibold">{test.date}</span>
                    </div>
                  </div>
                  <div
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                      test.type === "Topic-wise"
                        ? "bg-blue-100 text-blue-700"
                        : test.type === "Mock Test"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {test.type}
                  </div>
                </div>

                {test.description ? (
                  <p className="text-gray-700 font-medium text-lg">
                    {test.description}
                  </p>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-blue-900 mb-2">
                        🔬 Physics
                      </h4>
                      <p className="text-gray-700 text-sm">{test.physics}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-900 mb-2">
                        🧪 Chemistry
                      </h4>
                      <p className="text-gray-700 text-sm">{test.chemistry}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-bold text-purple-900 mb-2">
                        🧬 Biology
                      </h4>
                      <p className="text-gray-700 text-sm">{test.biology}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <Footer />
    </div>
  );
};

export default NeetTestSeries;
