import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const results = [
  {
    img: "./images/p1.jpg", 
    alt: "Student Result",
  },
  {
    img: "./images/p2.jpg", 
    alt: "JEE Adv. 2025 Result",
  },
  {
    img: "./images/p3.jpg",
    alt: "NEET 2025 Result",
  },
  {
    img: "./images/p4.jpg",
    alt: "JEE Adv. 2025 Result",
  },
   {
    img: "./images/p5.jpg", 
    alt: "Student Result",
  },
  {
    img: "./images/p6.jpg", 
    alt: "JEE Adv. 2025 Result",
  },
  {
    img: "./images/p7.jpg",
    alt: "NEET 2025 Result",
  },
  {
    img: "./images/p8.jpg",
    alt: "JEE Adv. 2025 Result",
  },
    {
    img: "./images/p9.jpg",
    alt: "NEET 2025 Result",
  },
  {
    img: "./images/p10.jpg",
    alt: "JEE Adv. 2025 Result",
  },
];

const Results = () => {
  return (
    <section id="result" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-4 flex justify-center gap-2">
          Our <p className="text-[#1d8dc4] ">Results</p>
        </h2>
        <p className="text-center text-gray-800 font-bold mb-10 max-w-2xl mx-auto">
          Edukul results reflect the passion, hard work and efforts of our
          students. So far, we have acquired remarkable selection ratios in
          competitive exams.
        </p>

        {/* Swiper */}
        {/* Seniors slider heading */}
        <h1 className="text-center text-2xl md:text-3xl font-extrabold mb-6 text-[#1d8dc4]">Seniors</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,

          }}
          breakpoints={{
            768: { slidesPerView: 4 },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-10"
        >
          {results.map((result, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full flex justify-center">
                <img
                  src={result.img}
                  alt={result.alt}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Juniors slider heading */}
        <h1 className="text-center text-2xl md:text-3xl font-extrabold mt-6 text-[#1d8dc4]">Juniors</h1>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            768: { slidesPerView: 4 },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-10"
        >
          {results.map((result, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full flex justify-center mt-10">
                <img
                  src={result.img}
                  alt={result.alt}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db; /* gray-300 */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ec851e; /* orange shade */
          width: 20px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
};

export default Results;
