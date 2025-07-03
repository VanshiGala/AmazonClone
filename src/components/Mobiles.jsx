import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalOffer from "../components/HorizontalOffer";

function Mobiles() {
  const sellProducts = [
    { img: "iphone-7.webp", alt: "iphone" },
    { img: "iqoo-8.webp", alt: "iqoo" },
    { img: "nokia-9.avif", alt: "nokia" },
    { img: "one-plus-6.jpg", alt: "onePlus" },
    { img: "oppo-2.webp", alt: "oppo" },
    { img: "realme-5.jpg", alt: "realme" },
    { img: "redmi-4.jpg", alt: "redmi" },
    { img: "samsung-galaxy-1.jpg", alt: "samsung" },
    { img: "vivo-3.jpg", alt: "vivo" },
  ];
  return (
    <div className="    justify-center">
      <nav className="bg-white h-14 gap-y-4 flex px-4 max-w-full">
        <div className="flex flex-wrap items-center space-x-4 mt-6">
          <NavLink to="#" className="font-semibold text-gray-800">
            Electronics
          </NavLink>
          <NavLink to="#">Mobiles & Accessories</NavLink>
          <NavLink to="#">Laptops & Accessories</NavLink>
          <NavLink to="#">TV & Home entertainment</NavLink>
          <NavLink to="#">Audio</NavLink>
          <NavLink to="#">Camera</NavLink>
          <NavLink to="#">Computer Peripherals</NavLink>
          <NavLink to="#">'Smart Technology</NavLink>
          <NavLink to="#">Music Instruments</NavLink>
          <NavLink to="#">Office & Stationary</NavLink>
        </div>
      </nav>
      <div className="flex gap-4 px-4">
        <aside className="w-60 p-4 bg-white sticky top-[56px]  h-full shadow text-sm">
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
      </div>

      <div className="flex-1 justify-center items-center">
        <img src="prime-mobile-1.jpg" className="w-4xl object-cover " />

        <img src="samung-mobile-2.jpg" className="w-4xl object-cover  " />

        <HorizontalOffer
          title="Hot Deals on Electronics"
          link="#"
          products={sellProducts}
        />
      </div>
    </div>
  );
}

export default Mobiles;
