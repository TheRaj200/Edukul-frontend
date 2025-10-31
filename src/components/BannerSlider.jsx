import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BannerSlider = () => {
  const banners = [
    "./images/b3.jpg",
    "./images/b1.png",
    "./images/b2.png",
    "./images/b1.png",
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {banners.map((src, idx) => (
          <SwiperSlide key={idx}>
           <div className="rounded-xl">
             <img
              src={src}
              alt={`Banner ${idx + 1}`}
              className="w-full  object-contain rounded-xl"
            />
           </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for pagination */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative;
          margin-top: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 41px;
       
        }

        .custom-bullet {
          
          width: 25px;
          height: 12px;
          background-color: #d1d5db; /* Tailwind gray-300 */
          border-radius: 9999px;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .custom-bullet-active {
          background-color:#fd9b36;
          width: 40px;
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;
