import React, { createContext, useContext, useState } from "react";

// Membuat CartContext
const CartContext = createContext();

// CartProvider untuk mengelola cart
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State untuk menyimpan produk di keranjang

  // Fungsi untuk menambahkan produk ke cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Menambahkan produk ke array cart
  };

  // Fungsi untuk menghapus produk dari cart (opsional)
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook untuk mengakses CartContext
export const useCart = () => useContext(CartContext);
