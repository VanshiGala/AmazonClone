import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HorizontalOffer from "../components/HorizontalOffer";
import SlidingBanner from "../components/SlidingBanner";

function HomeKitchen() {
  const [category, setCategory] = useState("");
  const KitchenProducts = [
    { img: "bedding-and-decor.jpg", category: "bedroom" },
    { img: "appliances.jpg", category: "kitchen-appliances" },
    { img: "fitness.jpg", category: "garage" },
    { img: "automotive-products.webp", category: "garage" },
    { img: "kitchen-ware.webp", category: "kitchen-appliances" },
    { img: "home-essentials.jpg", category: "home-decor" },
    { img: "tools.webp", category: "garage" },
    { img: "outdoors.webp", category: "garden-outdoors" },
    { img: "amazon-brands.jpg", category: "lighting" },
  ];
  const filteredProducts = category
    ? KitchenProducts.filter((item) => item.category === category)
    : KitchenProducts;
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "normal" : "bold",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const kitchenImages = [
    { src: "kitchenImages-1.webp" },
    { src: "kitchenImages-2.jpg" },
    { src: "kitchenImages-3.jpg" },
    { src: "kitchenImages-4.webp" },
  ];
  return (
    <div>
      <div className=" px-1">
        <nav className="bg-white py-4 ">
          <div className="flex space-x-6 whitespace-nowrap text-sm overflow-x-hidden">
            <NavLink to="#" className="font-semibold text-gray-800">
              Amazon Home
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Kitchen & Home Appliances
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Large Appliances
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Kitchen & Dining
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Furniture
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Home Furnishing
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Home Decor
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Home Improvement
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Garden & Outdoor
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Storage Organization
            </NavLink>
            <NavLink to="#" style={navStyle}>
              Lighting
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="border-t border-gray-200 w-full " />
      <h1 className="text-3xl font-semibold text-orange-500 ml-6">
        Buy Products across Kitchen, Home, Garden, Furniture, Sports and more
        online at Amazon India{" "}
      </h1>
      <p className="text-sm text-gray-400 ml-6 mt-2">
        Browse through the wide range of Home and Kitchen products such as
        coolers,water bottles,mosquito nets,cycle,bedsheet,juicer,office chairs
        and much more online at Amazon.in
      </p>
      <div className="flex px-2 ">
        <aside className="w-48 p-4 bg-white sticky   h-max shadow text-sm">
          <ul>
            <li className="font-semibold text-md">Shop by room</li>
            <li>
              <NavLink
                to="#"
                onClick={() => setCategory("living-room")}
                className="ml-4"
              >
                Living room
              </NavLink>
            </li>
            <div className="ml-6">
              <li>
                <NavLink to="#" onClick={() => setCategory("bedroom")}>
                  Bedroom
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="#"
                  onClick={() => setCategory("kitchen-appliances")}
                >
                  Kitchen{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to="#" onClick={() => setCategory("garage")}>
                  Garage
                </NavLink>
              </li>
            </div>
            <li className="font-semibold text-md">Featured Categories</li>
            <li>
              <NavLink
                to="#"
                onClick={() => setCategory("kitchen-home-appln")}
                className="ml-4"
              >
                Kitchen & Home appliances
              </NavLink>
            </li>
            <div className="ml-6">
              <li>
                <NavLink to="#" onClick={() => setCategory("kitchen-dining")}>
                  Kitchen & Dining
                </NavLink>
              </li>

              <li>
                <NavLink to="#" onClick={() => setCategory("home-decor")}>
                  Home Decor{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to="#" onClick={() => setCategory("home-furnishing")}>
                  Home Furnishing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  onClick={() => setCategory("furniture-home-mattress")}
                >
                  Furniture & Home mattress
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => setCategory("garden-outdoors")}>
                  Garden & Outdoors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  onClick={() => setCategory("storage-organization")}
                >
                  Storage Organizations
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={() => setCategory("lighting")}>
                  Lighting
                </NavLink>
              </li>
            </div>
            <li
              className="font-semibold text-md"
              onClick={() => setCategory("cooking-dining")}
            >
              Cookware & Dining{" "}
            </li>
            <li>
              <NavLink to="#" onClick={() => setCategory("cookware")}>
                Cookware
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => setCategory("kitchen-storage")}>
                Kitchen Storage
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => setCategory("dinner-set")}>
                Dinner set
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => setCategory("glass-ware")}>
                Glass ware
              </NavLink>
            </li>
          </ul>
        </aside>
        <div className="flex-1   overflow-hidden">
          <HorizontalOffer link="#" products={filteredProducts} />
          <div className=" justify-center mb-4 ">
            <img
              src="home-kitchen-banner.png"
              className=" max-w-4xl rounded-lg"
              alt="Prime Day Banner"
            />
          </div>
          <div className="flex justify-center mb-4">
            <SlidingBanner images={kitchenImages} className="w-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeKitchen;
