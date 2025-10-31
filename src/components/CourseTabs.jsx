import { useState } from "react";

const courses = {
  JEE: [
        {
      title: " JEE ALPHA  ",
      subtitle: "For Class 11th",
      year: "2028",
      img: "./images/4.png",
    },
    {
      title: "JEE BETA  ",
      subtitle: "For Class 12th",
      year: "2027",
      img: "./images/5.png",
    },
    {
      title: "JEE GAMMA  ",
      subtitle: "For Class 13th",
      year: "2027",
      img:"./images/1.png",
    },

  ],
   NEET: [
    {
      title: "NEET ALPHA  ",
      subtitle: "For Class 11th",
      year: "2028",
 img: "./images/f9.png",
    },
    {
      title: "NEET BETA  ",
      subtitle: "For Class 12th",
      year: "2027",
      img: "./images/2.png",
    },
    {
      title: "NEET GAMMA  ",
      subtitle: "For Class 13th",
      year: "2027",
      img: "./images/3.png",
    },
  ],
 
  Foundation: [
    
    {
      title: "Neutron ",
      subtitle: "For Class 10th",
      year: "2029",
      img: "./images/f6.png",
    },
     {
      title: "  Proton ",
      subtitle: "For Class 9th",
      year: "2030",
      img: "./images/f7.png",
    },
   
    {
      title: "  Photon ",
      subtitle: "For Class 8th ",
      year: "2031",
      img: "./images/f8.png",
    },

  ],
};

const CourseTabs = () => {
  const [activeTab, setActiveTab] = useState("JEE");

  return (
    <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Tabs */}
      <div className="flex justify-center items-center mb-10">
        <div className="flex gap-3 justify-center items-center bg-[#ffffff] shadow-md rounded-lg p-2">
          {Object.keys(courses).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md font-medium transition-all flex justify-center items-center cursor-pointer ${
                activeTab === tab
                  ? "bg-[#1d1c4d] text-white shadow-md"
                  : "text-gray-700 hover:text-[#1d1c4d]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {courses[activeTab].map((course, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden bg-[#ffffff] cursor-pointer shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-[1.02] h-[320px] flex flex-col justify-end"
            style={{
              backgroundImage: `url(${course.img})`,
              backgroundSize: "contain",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
         
            }}
          >
          

            {/* Text Content */}
            <div className="relative z-10 p-6 ">
              <h3 className="text-lg sm:text-xl font-bold text-red-400">
                {course.title}
              </h3>
              <p className="text-2xl font-extrabold">Batch</p>
              <p className="text-sm opacity-90">{course.subtitle}</p>

              <div className="mt-3 border rounded-lg px-3 py-1 inline-block text-sm font-medium border-red-400 bg-white/10 backdrop-blur-sm">
                Admission Open
              </div>
              <p className="text-xs opacity-80 mt-1">
                Target Year - {course.year}
              </p>

              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseTabs;
