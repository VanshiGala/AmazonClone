import React, { useState } from "react";
import SideNav from "./SideNav";
import { NavLink, useNavigate } from "react-router-dom";

function AppNavbar() {
  const [dropDown, setDropDown] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  const toggle = () => {
    setDropDown((prev) => !prev);
  };

  const dropdownItems = [
    { label: "All Categories" },
    { label: "Alexa Skills" },
    { label: "Amazon Devices" },
    { label: "Amazon Fashion" },
    { label: "Amazon Fresh" },
    { label: "Amazon Fresh Meat" },
    { label: "Amazon Pharmacy" },
    { label: "Appliances" },
    { label: "Apps and Games" },
    { label: "Audible Audiobooks" },
    { label: "Amazon Pay" },
    { label: "Baby" },
    { label: "Beauty" },
    { label: "Books" },
    { label: "Car & Motorbike" },
    { label: "Clothing & Accessories" },
    { label: "Collectibles" },
    { label: "Computers & Accessories" },
    { label: "Deals" },
    { label: "Electronics" },
    { label: "Furniture" },
    { label: "Garden and Outdoors" },
    { label: "Gift Cards" },
    { label: "Grocery & Gourmet Foods" },
    { label: "Health & Personal Care" },
    { label: "Home & Kitchen" },
    { label: "Industrial & Scientific" },
    { label: "Jewellery" },
    { label: "Kindle Store" },
    { label: "Luggage & Bags" },
    { label: "Luxury Beauty" },
    { label: "Movies & TV Shows" },
    { label: "MP3 Music" },
    { label: "Music" },
    { label: "Musical Instruments" },
    { label: "Office Products" },
    { label: "Pet Supplies" },
    { label: "Prime Video" },
    { label: "Shoes & Handbags" },
    { label: "Software" },
    { label: "Sports, Fitness & Outdoors" },
    { label: "Subscribe & Save" },
    { label: "Tools & Home Improvement" },
    { label: "Toys & Games" },
    { label: "Under Rs.500" },
    { label: "Video Games" },
    { label: "Watches" },
  ];

  const secondNavItems = [
    { label: "Fresh", path: "/fresh" },
    { label: "MX Player", path: "/mx-player" },
    { label: "Sell", path: "/sell" },
    { label: "Bestsellers", path: "/bestsellers" },
    { label: "Prime", path: "/prime" },
    { label: "Mobiles", path: "/mobiles" },
    { label: "Today's Deals", path: "/TodaysDeal" },
    { label: "Customer Service", path: "/customer-service" },
    { label: "New Releases", path: "/new-releases" },
    { label: "Fashion", path: "/fashion" },
    { label: "Amazon Pay", path: "/amazon-pay" },
    { label: "Electronics", path: "/electronics" },
    { label: "Home & Kitchen", path: "/home-kitchen" },
    { label: "Computers", path: "/computer" },
    { label: "Books", path: "/books" },
  ];

  return (
    <div>
      <SideNav isOpen={sideNavOpen} onClose={() => setSideNavOpen(false)} />
      <nav className="bg-gray-900 text-white h-14  w-full flex items-center px-4  top-0 left-0 z-50">
        <div className="w-full flex flex-wrap justify-between items-center gap-2  ">
          <div className="flex items-center ">
            <NavLink to="/">
              <img src="Logo1.png" className="h-10 w-18 m-2 bg-gray-900" />
            </NavLink>
          </div>

          <div className="flex   w-xl   ">
            <button
              className="cursor-pointer bg-gray-400 p-2 "
              onClick={toggle}
            >
              {selectedCategory}
            </button>
            {dropDown && (
              <div className=" absolute max-h-96 top-full mt-1 w-50 p-2 bg-white text-black shadow-md  rounded overflow-y-auto">
                <ul className="space-y-1">
                  {dropdownItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedCategory(item.label);
                        setDropDown(false);
                      }}
                      className="cursor-pointer  hover:text-yellow-500 whitespace-nowrap"
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <input
              type="search"
              placeholder="Search Amazon.in"
              className="flex-1 px-3 focus:outline-none  bg-white text-gray-700 "
            />
            <button className="cursor-pointer bg-yellow-400 p-2">search</button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm whitespace-nowrap ml-auto items-center justify-end">
            <div
              className="relative"
              onMouseEnter={() => setSignInModal(true)}
              onMouseLeave={() => setSignInModal(false)}
            >
              <NavLink
                to="/sign-in"
                className="whitespace-nowrap hover:text-yellow-400"
              >
                Sign In
              </NavLink>
              {signInModal && (
                <div className=" top-full mt-2 right-0 w-64 bg-white text-black shadow-xl p-4 z-50 rounded border border-gray-300">
                  <h3 className="font-semibold mb-2 text-lg">
                    Sign in to your account
                  </h3>
                  <button
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 cursor-pointer px-3 rounded"
                    onClick={() => navigate("/sign-in")}
                  >
                    Sign In
                  </button>
                  <p className="text-sm mt-3 text-gray-600">
                    New customer?{" "}
                    <span
                      className="text-blue-600 cursor-pointer hover:underline"
                      onClick={() => navigate("/sign-in")}
                    >
                      Start here.
                    </span>
                  </p>
                </div>
              )}
            </div>
            <NavLink
              to="sign-in"
              className="whitespace-nowrap hover:text-yellow-400"
            >
              Return and Orders
            </NavLink>
            <NavLink
              to="/cart"
              className="whitespace-nowrap hover:text-yellow-400"
            >
              Cart
            </NavLink>
          </div>
        </div>
      </nav>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"> */}
      <nav className="bg-gray-800 text-white text-sm h-10 w-full flex items-center px-2 overflow-x-auto whitespace-nowrap space-x-6 fixed top-14 left-0 z-30">
        <div className="flex items-center space-x-2 ">
          <button
            onClick={() => setSideNavOpen(true)}
            className="text-lg font-bold cursor-pointer hover:text-yellow-400 "
          >
            ☰
          </button>
          <NavLink
            to="/"
            className="hover:text-yellow-400 whitespace-nowrap min-w-max"
          >
            All
          </NavLink>
        </div>
        {secondNavItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="hover:text-yellow-400 whitespace-nowrap min-w-max"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
    // </div>
  );
}

export default AppNavbar;
