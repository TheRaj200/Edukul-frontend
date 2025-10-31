import { FaUserGraduate, FaChalkboardTeacher, FaTrophy, FaMedal } from "react-icons/fa";

const highlights = [
  {
    icon: <FaChalkboardTeacher className="text-4xl text-[#fd9b36]" />,
    value: "1000+",
    label: "IITians Mentored",
    gradient: "bg-gradient-to-r from-yellow-100 via-yellow-50 to-white",
  },
  {
    icon: <FaUserGraduate className="text-4xl text-[#fd9b36]" />,
    value: "36/42",
    label: "Selected in JEE Mains",
    gradient: "bg-gradient-to-r from-blue-100 via-blue-50 to-white",
  },
  {
    icon: <FaTrophy className="text-4xl text-[#fd9b36]" />,
    value: "12/36",
    label: " Selected in JEE Advanced",
    gradient: "bg-gradient-to-r from-green-100 via-green-50 to-white",
  },
  {
    icon: <FaMedal className="text-4xl text-[#fd9b36]" />,
    value: " 20+ ",
    label: "selections in Olympiads",
    gradient: "bg-gradient-to-r from-purple-100 via-purple-50 to-white",
  },
];

const Highlights = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-snug">
        <span className="text-[#1d8dc4]">India’s</span> leading education platform that delivers <br className="hidden sm:block" />
        <span className="text-black">the best selection ratio!</span>
      </h2>

      {/* Stats  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center text-center rounded-2xl p-8 min-h-[180px] shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${item.gradient}`}
          >
            {item.icon}
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#1d8dc4]">{item.value}</h3>
            <p className="text-gray-700 font-bold text-sm sm:text-base mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
