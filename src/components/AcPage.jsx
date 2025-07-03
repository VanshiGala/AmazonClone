import React from "react";
import { useCart } from "./CartContext.jsx";

const acProducts = [
  {
    name: "Daikin 1.5 Ton 3 Star Inverter Split AC",
    img: "/ac1.webp",

    reviews: "4,677",
    price: "Rs.37,489",
    mrp: "Rs.58,400",
    discount: "36%",
  },
  {
    name: "Daikin 1.5 Ton 5 Star Inverter Split AC",
    img: "/ac2.jpg",

    reviews: "3,025",
    price: "Rs.45,989",
    mrp: "Rs.67,200",
    discount: "32%",
  },
  {
    name: "Daikin 0.8 Ton 3 Star Fixed Speed Split AC",
    img: "/ac3.jpg",

    reviews: "1,851",
    price: "Rs.26,489",
    mrp: "Rs.37,400",
    discount: "29%",
  },
  {
    name: "Voltas 1.5 Ton 3 Star Window AC",
    img: "/ac4.webp",

    reviews: "2,445",
    price: "Rs.29,490",
    mrp: "Rs.46,990",
    discount: "37%",
  },
];

function AcPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    alert("Item added to cart!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Deals on Air Conditioners</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {acProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-4 flex flex-col justify-between"
          >
            <div>
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-contain mb-2"
              />
              <h2 className="text-sm font-medium mb-1">{product.name}</h2>

              <div className="text-lg font-bold text-gray-800">
                {product.price}
              </div>
              <div className="text-sm text-gray-500 line-through">
                {product.mrp}
              </div>
              <div className="text-green-600 text-sm mb-4 ">
                {product.discount} off
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-semibold"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcPage;
