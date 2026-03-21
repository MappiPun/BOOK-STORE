import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaShoppingCart, FaHeart, FaChevronLeft } from "react-icons/fa";
import { Button } from '@mui/material';
// 1. Import the hook we created
import { useWishlist } from '../../context/WishlistContext';

const Wishlist = () => {
    // 2. Pull the real data and the remove function from Context
    const { wishlist, toggleWishlist } = useWishlist();

    return (
        <div className="w-full bg-gray-50 min-h-screen pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 mb-2">My Wishlist</h1>
                        <p className="text-sm text-gray-500">
                            You have <span className="text-[#00c853] font-bold">{wishlist.length}</span> items saved for later.
                        </p>
                    </div>
                    <Link to="/shop" className="hidden sm:flex items-center gap-2 text-gray-500 hover:text-[#00c853] font-semibold transition-colors">
                        <FaChevronLeft size={12} /> Continue Shopping
                    </Link>
                </div>

                {wishlist.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm p-16 flex flex-col items-center justify-center text-center border border-gray-100">
                        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
                            <FaHeart className="text-red-400 text-4xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Your wishlist is empty</h2>
                        <p className="text-gray-500 mb-8 max-w-md">Save your favorite books here to keep track of what you want to read next!</p>
                        <Link to="/shop">
                            <Button className="!bg-[#00c853] !hover:bg-[#00a846] !text-white !font-bold !px-8 !py-3 !rounded-lg !text-[15px] shadow-lg shadow-green-100">
                                Explore Bookstore
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {wishlist.map((item) => (
                            <div key={item.id} className="bg-white border border-gray-200 rounded-xl flex flex-col group h-full shadow-sm hover:shadow-md transition-all overflow-hidden relative">
                                
                                {/* Toggle function works as 'Remove' here since it's already in the list */}
                                <button 
                                    onClick={() => toggleWishlist(item)}
                                    className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full text-red-500 hover:bg-white shadow-sm transition-all"
                                    title="Remove from wishlist"
                                >
                                    <FaTrashAlt size={14} />
                                </button>

                                <Link to={`/product/${item.id}`} className="block relative aspect-[3/4] bg-gray-50 overflow-hidden border-b border-gray-100">
                                    <img 
                                        src={item.image || `https://via.placeholder.com/300x400?text=${item.title.replace(/ /g, '+')}`} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                    />
                                </Link>

                                <div className="p-5 flex-1 flex flex-col">
                                    <span className="text-[10px] font-bold text-[#00c853] uppercase tracking-widest mb-1">{item.category || "Books"}</span>
                                    <Link to={`/product/${item.id}`} className="block">
                                        <h4 className="text-[16px] font-bold text-gray-900 line-clamp-2 leading-tight mb-1 hover:text-[#00c853] transition-colors">
                                            {item.title}
                                        </h4>
                                    </Link>
                                    <p className="text-[13px] text-gray-500 mb-4">{item.author}</p>

                                    <div className="mt-auto flex flex-col gap-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-black text-gray-900 text-lg">฿ {item.price}</span>
                                            <span className="text-[11px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">In Stock</span>
                                        </div>
                                        
                                        <Button 
                                            fullWidth
                                            className="!bg-[#00c853] !hover:bg-[#00a846] !text-white !font-bold !py-2.5 !rounded-lg !text-sm shadow-md shadow-green-100"
                                            startIcon={<FaShoppingCart size={14}/>}
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;