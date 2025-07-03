import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCardSection from "../components/ProductCardSection";

function Sell() {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" relative w-full  justify-center">
      {showStickyNav && (
        <div className="fixed top-0 ml-auto w-full z-50 bg-white shadow-md py-8 px-4 flex justify-between items-center">
          
          <button
            className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 cursor-pointer px-4 rounded"
            onClick={() => navigate("/sign-in")}
          >
            Start Selling
          </button>
        </div>
      )}
      <img
        src="sell-banner.jpg"
        className="w-full h-full object-cover rounded-lg"
      />
      {/* <button
        className="absolute cursor-pointer bottom-16 right-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-10 rounded"
        onClick={() => navigate("/sign-in")}
      >
        SignIn
      </button> */}
      <h1 className="text-4xl font-extrabold text-gray-800 flex justify-center mb-4">
        Fee Drop Highlights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ml-6 mb-2">
        <ProductCardSection
          title="Apparel"
          items={[
            {
              img: "/saree-sell-1.avif",
              text: "See up to 16.5% reduction in referral fee for products <= Rs.300.",
            },
          ]}
          variant="yellow"
        />

        <ProductCardSection
          title="Home"
          items={[
            {
              img: "/home-sell-2.jpg",
              text: "See up to 16.5% reduction in referral fee for products <= Rs.300.",
            },
          ]}
          variant="yellow"
        />

        <ProductCardSection
          title="Shoes"
          items={[
            {
              img: "/shoes-sell-3.jpg",
              text: "See up to 16.5% reduction in referral fee for products <= Rs.300.",
            },
          ]}
          variant="yellow"
        />

        <ProductCardSection
          title="Jwellery"
          items={[
            {
              img: "/jwellery-sell-4.jpg",
              text: "See up to 16.5% reduction in referral fee for products <= Rs.300.",
            },
          ]}
          variant="yellow"
        />
      </div>
      <div className="flex justify-center mb-4 mt-4">
        <button className=" cursor-pointer  bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-10 rounded-xl">
          Know more about Fee Drop Highlights
        </button>
      </div>
    </div>
  );
}

export default Sell;
