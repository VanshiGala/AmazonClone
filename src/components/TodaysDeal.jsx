import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


function TodaysDeal() {
  const categories = [
    "Grooming & Wellness",
    "Health & Household",
    "Clothing",
    "Footwear",
    "Beauty & Makeup",
    "Jewellery, Luggage, Watches",
    "Kids & Baby",
    "Amazon Brands & more",
  ];

  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <div className=" px-4">
      <nav className="bg-white py-4 ">
        <div className="grid grid-cols-7 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7 gap-0  text-sm">
          <NavLink to="#" className="font-semibold text-gray-800">
            Today's Deal
          </NavLink>
          <NavLink to="#" style={navStyle}>
            All Deals
          </NavLink>
          <NavLink to="#" style={navStyle}>
            Watched Deals
          </NavLink>
          <NavLink to="#" style={navStyle}>
            Subscribe & Save
          </NavLink>
          <NavLink to="#" style={navStyle}>
            Coupons
          </NavLink>
          <NavLink to="#" style={navStyle}>
            Clearance
          </NavLink>
          <NavLink to="#" style={navStyle}>
            Refurbished & Open Box
          </NavLink>
        </div>
      </nav>

      <div className="my-4 relative">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={0}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <button className="w-full border px-4 py-2 rounded-md text-sm whitespace-nowrap hover:bg-gray-100">
                {category}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-4">
        <aside className="w-60 p-4 bg-white sticky   h-max shadow text-sm">
          <ul>
            <li className="font-semibold text-md">Category</li>
            <li>
              <NavLink to="#" className="ml-4">
                Electronics
              </NavLink>
            </li>
            <div className="ml-6">
              <li>
                <NavLink to="#">Mobile & Accessories</NavLink>
              </li>

              <li>
                <NavLink to="#">Smart Phones and Basic Mobiles</NavLink>
              </li>

              <li>
                <NavLink to="#">SmartWatches</NavLink>
              </li>
            </div>
            <li className="font-semibold text-md">Amazon Prime</li>
            <input type="checkbox" />
            <label> prime</label>
            <li className="font-semibold text-md">Delivery Day</li>
            <li>
              <input type="checkbox" />
              <label> Get it today</label>
            </li>
            <input type="checkbox" />
            <label> Get it tomorrow</label>

            <li className="font-semibold text-md">Brands </li>

            <li>
              <input type="checkbox" />
              <label> Samsung</label>
            </li>
            <li>
              <input type="checkbox" />
              <label> Apple</label>
            </li>
            <li>
              <input type="checkbox" />
              <label> OnePlus</label>
            </li>
            <li>
              <input type="checkbox" />
              <label> iQOO</label>
            </li>
            <li>
              <input type="checkbox" />
              <label> boAt</label>
            </li>
            <li>
              <input type="checkbox" />
              <label> Redmi</label>
            </li>
            <li>
              <input type="checkbox" />
              <label> Realme</label>
            </li>
            <li>
              <input type="checkbox" />
              <label> Nokia</label>
            </li>
            <li>
              <input type="checkbox" />
              <label> Vivo</label>
            </li>
          </ul>
        </aside>
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-20 mb-2">
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="realme-5.jpg" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              23% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="ipad.jpg" className="h-40 w-40 " />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              27% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="iphone-7.webp" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              13% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="iqoo-8.webp" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              11% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="nokia-9.avif" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              15% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="one-plus-6.jpg" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              22% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="oppo-2.webp" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              17% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="redmi-4.jpg" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              9% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="samsung-galaxy-1.jpg" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              26% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="samung-mobile-2.jpg" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              7% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="vivo-3.jpg" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              19% off
            </button>
          </div>
          <div className="bg-white  rounded-md p-2 shadow-sm hover:shadow-md w-50 flex flex-col">
            <img src="realme-5.jpg" className="h-40 w-40" />
            <button className="mt-2 text-xs bg-red-600 hover:bg-red-500 text-black py-1 px-2 rounded w-fit self-start">
              21% off
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysDeal;
