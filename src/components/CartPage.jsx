import React from "react";
import { useCart } from "./CartContext.jsx";

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((acc, item) => {
    const num = parseInt(item.price.replace(/[Rs,]/g, ""));
    return acc + num;
  }, 0);

  return (
    <div className="p-6 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 object-contain"
                  />
                  <div>
                    <h2 className="font-medium text-lg">{item.name}</h2>
                    <p className="text-yellow-600 font-bold">{item.price}</p>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:underline text-sm mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h2 className="text-xl font-semibold">
              Total: Rs{totalAmount.toLocaleString("en-IN")}
            </h2>
            <button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
