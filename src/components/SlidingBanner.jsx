// SlidingBanner.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function SlidingBanner({ images }) {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        slidesPerView={1}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.src}
              alt={img.alt || `banner-${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlidingBanner;
