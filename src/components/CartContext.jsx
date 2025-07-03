
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

 export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

    const removeFromCart = (index) => {
        setCartItems((prev) => prev.filter((_, i) => i !== index));
      };
 

  return (
    <CartContext.Provider value={{ cartItems, addToCart , removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}
