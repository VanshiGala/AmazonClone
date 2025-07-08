import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function HorizontalOffer({ title, products, link }) {
  return (
    <div className="bg-white p-4 shadow my-2">
      <div className="flex justify-between items-center ">
        <h2 className="text-lg font-semibold">{title}</h2>
        {link && (
          <a href={link} className="text-blue-500 text-sm hover:underline">
            See all offers
          </a>
        )}
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={4}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              alt={item.alt}
              className="h-40 w-full object-contain bg-gray-100 p-2"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HorizontalOffer;
