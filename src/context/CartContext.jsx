import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Load cart from local storage so it persists!
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("beetroot_cart");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("beetroot_cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add to Cart (Handles both new items and updating quantities of existing items)
    const addToCart = (book, quantity = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === book.id);
            if (existingItem) {
                return prevItems.map(item => 
                    item.id === book.id 
                    ? { ...item, quantity: item.quantity + quantity } 
                    : item
                );
            }
            return [...prevItems, { ...book, quantity }];
        });
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prevItems => prevItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Calculate the total number of items in the cart (for the header badge)
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);