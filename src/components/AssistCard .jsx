import { motion } from "framer-motion";

const benefits = [
  { text: "Away from Distractions mobile phones, social media etc", color: "from-fuchsia-200 to-fuchsia-300",  },
  { text: "Regular Interaction with Teachers and Like-Minded Students", color: "from-amber-200 to-amber-300",  },
  { text: "Strategically Planned Schedule Every Day for 12+1 hours", color: "from-rose-200 to-rose-300",  },
  { text: "Daily Tests for Performance Boost and Analysis", color: "from-green-200 to-green-300",  },
  { text: "Group Studying Possibilities to learn from each other", color: "from-orange-200 to-orange-300",  },
  { text: "Instant doubts clearance by main teachers in douts session daily", color: "from-stone-200 to-stone-300",  },
];

const AssistCard = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,57,70,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(185,28,28,0.12),transparent_65%)]" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start"
        >
          {/* Left: Benefits list */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 mb-10 text-center lg:text-left"
            >
              BENEFITS OF DAY BOARDING <span className="block text-[#e63946]">COACHING</span>
            </motion.h2>

            <ul className="space-y-5">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  
                  <div className="flex-1">
                    <div
                      className={`relative w-full rounded-full py-4 px-6 text-sm md:text-[15px] font-semibold text-slate-800 shadow-sm overflow-hidden bg-gradient-to-r ${b.color}`}
                    >
                      <span className="relative z-10">{b.text}</span>
                      <span className="absolute inset-0 bg-white/30 mix-blend-overlay" />
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Concept + Stats + CTA */}
          <div className="relative flex flex-col items-center lg:items-start">
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center lg:text-left"
            >
              Day Boarding Cocept
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-slate-600 leading-relaxed text-sm md:text-[15px] max-w-lg text-center lg:text-left mb-10"
            >
              We’ve designed a fantastic (12 + 1) hour study schedule for you inside our institute, incorporating class time, dedicated doubt-solving sessions, homework discussions, one-on-one interactions, and daily practice quizzes. This ensures that no part of your day goes without valuable learning also you are free from any worldly distractions throughout your journey
            </motion.p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-10 mb-12">
              <StatBlock value="(12+1)" label="Hours in Institute" />
              <StatBlock value="7" label="Days a Week" />
            </div>

         
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatBlock = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.55, ease: "easeOut" }}
    className="relative px-6 py-5 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm flex flex-col items-center min-w-[140px]"
  >
    <span className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#e63946] to-[#b91c1c]">{value}</span>
    <span className="mt-2 text-[11px] tracking-wide font-medium uppercase text-slate-600 text-center">{label}</span>
    <span className="absolute inset-0 rounded-xl pointer-events-none ring-1 ring-slate-200/60" />
  </motion.div>
);

export default AssistCard;
