import { motion } from "framer-motion";


const directorsData = [
  {
    id: 1,
    name: "DHARMENDRA KURMI ",
    experience: "11 Years. Experience",
    image: "/images/d1.jpg",
    role: "Director",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    name: "PATHIK ROY ",
    experience: "10 Years Experience",
    institution: "IIT-Roorkee",
    rank: "(AIR-959)",
    image: "/images/d2.jpg",
    role: "Director",
    bgGradient: "from-orange-500/20 to-amber-500/20",
  },
];

const Directors = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
   
      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto">
          {directorsData.map((director, index) => (
            <DirectorCard key={director.id} director={director} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DirectorCard = ({ director, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${director.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        
        {/* Top gradient border effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#1d8dc4] via-purple-500 to-orange-500 pointer-events-none" />
        <div className="absolute inset-[2px] rounded-[22px] bg-white" />

        <div className="relative z-10 p-8">
          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
            className="relative mb-6 mx-auto w-48 h-48 md:w-56 md:h-56"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-8 transition-all duration-500">
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          
          
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-2 tracking-tight ">
              {director.name}
            </h3>
            
            
            {director.institution && (
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold shadow-sm">
                <span>{director.institution}</span>
                {director.rank && <span className="text-orange-100">{director.rank}</span>}
              </div>
            )}
            
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm shadow-sm">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                <span>{director.experience}</span>
              </span>
            </div>

            {/* Ex. Faculty Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/60 shadow-sm">
              <span className="text-sm font-semibold text-emerald-700">Ex. Faculty of Shikhar Classes</span>
            </div>

            {/* Nicely styled line inside the card */}
            <div className="mt-4"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Directors;