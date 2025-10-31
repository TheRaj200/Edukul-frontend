"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Faculty",
    desc: "Experienced Faculty members who mentored more than 1000+ IITians and Doctors including more than 100 under 1000 rankers",
    badgeColor: "bg-orange-500",
    circleColor: "#ff9800",
  },
  {
    id: 2,
    title: "Day Boarding, Facility",
    desc: "Daily 12+1 hour of stress free learning program for students where they are constantly guided by their teachers",
    badgeColor: "bg-amber-600",
    circleColor: "#d97706",
  },
  {
    id: 3,
    title: "Doubt Sessions",
    desc: "Doubt session by main teachers, every day any time. It is the most crucial part that is missed in most of the institutions.",
    badgeColor: "bg-rose-400",
    circleColor: "#fb7185",
  },
  {
    id: 4,
    title: "Daily Tests / Quiz",
    desc: "Daily tests will be conducted to monitor your daily performance. The results will be shared with your parents and teachers on a daily basis",
    badgeColor: "bg-pink-500",
    circleColor: "#ec4899",
  },
  {
    id: 5,
    title: "6 Days a week Classes",
    desc: "Daily classes insures that you don't indulge in other activities and focus on your goal completely",
    badgeColor: "bg-violet-500",
    circleColor: "#8b5cf6",
  },
  {
    id: 6,
    title: "Away from Phones",
    desc: "We offered Day boarding so that students stay away from phones/ laptop and other worldly activities",
    badgeColor: "bg-blue-600",
    circleColor: "#2563eb",
  },
  {
    id: 7,
    title: "Connectivity with Parents",
    desc: "Parents get constant updates of their wards daily activities (quiz results/attendance). Open PTM are organised to discuss about student performances.",
    badgeColor: "bg-teal-600",
    circleColor: "#0d9488",
  },
  {
    id: 8,
    title: "Discipline",
    desc: "Attending classes six days a week helps develop the discipline necessary to easily crack such a challenging exam and also places you ahead of other competitors.",
    badgeColor: "bg-green-600",
    circleColor: "#16a34a",
  },
  {
    id: 9,
    title: "Time management skills",
    desc: "Students acquire essential time management skills, such as managing multiple subjects simultaneously and effectively managing exam time, which are crucial during examinations.",
    badgeColor: "bg-yellow-500",
    circleColor: "#eab308",
  },
  {
    id: 10,
    title: "One-on One Viva sessions",
    desc: "Regular viva sessions are organised to constantly check students grasp on any topic.",
    badgeColor: "bg-orange-400",
    circleColor: "#fb923c",
  },
];

const WhyEdukul = () => {
  return (
  <section className="py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,141,196,0.07),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-gray-800 mb-16"
        >
          Why <span className="text-[#1d8dc4]">Edu<span className="text-[#fd9b36]">kul</span></span> Stands <span className="text-black">Out?</span>
        </motion.h2>

        <div className="relative">
          {/* Central animated line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden md:block origin-top absolute left-1/2 top-11 -translate-x-1/2 h-[95%] w-1 bg-gradient-to-b from-[#1d8dc4] via-gray-300/70 to-[#fd9b36] rounded"
          />

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="space-y-20 md:space-y-24"
          >
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.li
                  key={item.id}
                  variants={{}}
                  className="relative flex flex-col md:flex-row md:items-center"
                >
                  {/* Left side */}
                  <div className={`hidden md:flex w-1/2 ${isLeft ? "justify-end pr-12" : "justify-end"}`}>
                    {isLeft && (
                      <AnimatedCardWrapper direction="right">
                        <TimelineCard item={item} align="right" />
                      </AnimatedCardWrapper>
                    )}
                  </div>

                  {/* Middle number */}
                  <AnimatedNumberCircle color={item.circleColor} id={item.id} />

                  {/* Right side */}
                  <div className={`hidden md:flex w-1/2 ${!isLeft ? "justify-start pl-12" : "justify-start"}`}>
                    {!isLeft && (
                      <AnimatedCardWrapper direction="left">
                        <TimelineCard item={item} align="left" />
                      </AnimatedCardWrapper>
                    )}
                  </div>

                  {/* Mobile stacked */}
                  <div className="md:hidden mt-6 flex flex-col items-center text-center w-full">
                    <AnimatedCardWrapper direction="up">
                      <TimelineCard item={item} align="center" />
                    </AnimatedCardWrapper>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ item, align }) => {
  return (
    <div
      className={`group relative rounded-2xl p-6 md:p-7 xl:p-8 backdrop-blur-md bg-white/60 border border-white/40 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_35px_-5px_rgba(0,0,0,0.12)] transition-all duration-500 w-full max-w-md overflow-hidden ${
        align === "right" ? "text-left" : align === "left" ? "text-right" : "text-center"
      }`}
    >
      {/* gradient border hover effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-200/70 group-hover:ring-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#1d8dc4] via-[#fd9b36] to-[#1d8dc4]" />
      <div className="absolute inset-[1px] rounded-[15px] bg-white/85 dark:bg-white/60 group-hover:bg-white/75 transition-colors duration-500" />
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#1d8dc4]/10 blur-2xl group-hover:scale-125 scale-100 transition-transform duration-[1400ms]" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-[#fd9b36]/10 blur-2xl group-hover:scale-125 scale-100 transition-transform duration-[1400ms]" />

      <div className="relative z-10">
        <span
          className={`relative inline-block ${item.badgeColor} text-white text-[11px] uppercase tracking-wide font-semibold px-3 py-1 rounded-full shadow-sm mb-4`}
        >
          <span className="relative z-10">{item.title}</span>
          <span className="absolute inset-0 rounded-full bg-white/10 blur-[1px]" />
        </span>
        <p className="text-[13.5px] md:text-sm leading-relaxed text-gray-700 font-medium">
          {item.desc}
        </p>
      </div>

      {/* subtle gradient accent bar */}
      <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1d8dc4] via-transparent to-[#fd9b36] opacity-70 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

// Animated number circle component
const AnimatedNumberCircle = ({ color, id }) => (
  <motion.div
    initial={{ scale: 0, rotate: -90, opacity: 0 }}
    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ type: "spring", stiffness: 120, damping: 14 }}
    whileHover={{ scale: 1.12, borderRadius: "9999px", boxShadow: `0 0 0 4px rgba(255,255,255,0.6),0 0 0 8px ${color}55` }}
    className="flex justify-center items-center z-10"
  >
    <span
      className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white font-bold text-base md:text-lg shadow-md border-4 transition-colors duration-500"
      style={{ borderColor: color }}
    >
      <span className="absolute inset-0 rounded-full animate-pulse bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_70%)]" />
      <span className="relative">{id}</span>
    </span>
  </motion.div>
);

// Wrapper to animate cards from different directions
const AnimatedCardWrapper = ({ children, direction = "up" }) => {
  const dirMap = {
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    up: { x: 0, y: 40 },
  };
  const initial = dirMap[direction] || dirMap.up;
  return (
    <motion.div
      initial={{ ...initial, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.div>
  );
};

export default WhyEdukul;
