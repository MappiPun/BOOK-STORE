import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    // Load from local storage so it persists on refresh
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem("beetroot_wishlist");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("beetroot_wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const toggleWishlist = (book) => {
        const exists = wishlist.find(item => item.id === book.id);
        if (exists) {
            setWishlist(wishlist.filter(item => item.id !== book.id));
        } else {
            setWishlist([...wishlist, book]);
        }
    };

    const isBookInWishlist = (id) => wishlist.some(item => item.id === id);

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isBookInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);