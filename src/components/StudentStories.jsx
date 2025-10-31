import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const stories = [
  {
     name: "Vihaan Dohare",
    exam: "CBSE Class 10th - 99% (2nd Rank in Madhya Pradesh)",
    img: "./images/t2.jpg",
    text: "Edukul's day boarding program transformed my life! The 12+1 hours structured learning schedule kept me away from distractions like mobile phones and social media. The faculty's constant guidance and daily doubt sessions helped me secure 2nd rank in Madhya Pradesh. The one-on-one attention and regular tests boosted my confidence immensely.",
  },  {
    name: "Vidhi Goyal",
    exam: "CBSE Class 10th - 96.6%",
    img: "./images/t3.jpg",
    text: "I am grateful to Edukul for providing such an amazing learning environment. The teachers are always available for doubt clearing, and the daily tests helped me track my progress consistently. The day boarding facility ensured I stayed focused on my studies throughout the day. Thanks to Ex. Faculties of Shikhar Classes, I achieved 96.6% in Class 10th!",
  },  {
    name: "Manav Shukla",
    exam: "CBSE Class 10th - 94.4%",
    img: "./images/t4.jpg",
    text: "Edukul's unique approach of 6 days a week classes with continuous teacher interaction made all the difference. The disciplined environment, regular parent-teacher meetings, and instant doubt clearance sessions helped me develop strong concepts. The group study sessions with like-minded students motivated me to perform better every day.",
  },  {
    name: "Dev Rajput",
    exam: "CBSE Class 10th - 93.8%",
    img: "./images/t5.jpg",
    text: "Joining Edukul was the best decision for my academic journey. The experienced faculty members mentored me throughout, and the daily performance analysis through tests kept me on track. Being away from worldly distractions in a day boarding setup helped me concentrate fully on my preparation. The viva sessions regularly tested my understanding.",
  },
];

const StudentStories = () => {
  const topSwiperRef = useRef(null);
  const bottomSwiperRef = useRef(null);

  return (
    <section id="testimonial" className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-10">
          Our <span className="text-[#1d8dc4]">Student Stories</span> That{" "}
          <span className="text-black">Inspire You!</span>
        </h2>

        {/* Top Card */}
        <Swiper
          loop
          allowTouchMove={false}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => (topSwiperRef.current = swiper)}
          modules={[FreeMode, Autoplay]}
          className="rounded-3xl bg-white shadow-lg border  border-gray-100 p-6 md:p-10 mb-10"
        >
          {stories.map((story, idx) => (
            <SwiperSlide key={idx}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center py-14 gap-8 lg:gap-0 px-10">
                {/* Image box */}
                <div className="flex justify-center">
                  <div className="bg-orange-50 rounded-2xl p-4 ring-1 ring-orange-100 shadow-sm ">
                    <img
                      src={story.img}
                      alt={story.name}
                      className=" md:w-60 md:h-60 rounded-xl  object-center"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="text-center md:text-left">
                  <FaQuoteLeft className="text-2xl text-[#1d1c4d] mb-3 mx-auto md:mx-0" />
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5 italic">
                    “{story.text}”
                  </p>
                  <h4 className="font-semibold text-gray-900">{story.name}</h4>
                  <p className="text-sm text-gray-500">{story.exam}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Slider */}
      <Swiper
  onSwiper={(swiper) => (bottomSwiperRef.current = swiper)}
  loop
  spaceBetween={16}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  freeMode
  watchSlidesProgress
  pagination={{ clickable: true, dynamicBullets: true }}
  onSlideChange={(swiper) => {
    const idx = swiper.realIndex;
    if (topSwiperRef.current) topSwiperRef.current.slideToLoop(idx, 0);
  }}
  breakpoints={{
    0: { slidesPerView: 1 },       // 📱 mobile
    768: { slidesPerView: 2 },     // 📱➡️💻 tablets
    1024: { slidesPerView: 3 },    // 💻 desktops/laptops
  }}
  modules={[FreeMode, Autoplay, Pagination]}
  className="pb-12 !hidden md:!block"
>
  {stories.map((story, idx) => (
    <SwiperSlide key={idx}>
      <div className="story-card bg-white rounded-xl border border-gray-100 shadow p-4 h-full flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer">
        <p className="text-sm text-gray-700 line-clamp-4 mb-4 text-left">
          {story.text}
        </p>
        <div className="flex items-center gap-3">
          <img
            src={story.img}
            alt={story.name}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-orange-100"
          />
          <div>
            <h5 className="text-sm font-semibold text-gray-900">
              {story.name}
            </h5>
            <p className="text-xs text-gray-500">{story.exam}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-slide-active .story-card {
          box-shadow: 0 10px 20px rgba(253, 155, 54, 0.15);
          border-color: #fed7aa;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 200ms ease;
        }
        .swiper-pagination-bullet-active {
          width: 22px;
          border-radius: 9999px;
          background: #fb923c;
        }
      `}</style>
    </section>
  );
};

export default StudentStories;
