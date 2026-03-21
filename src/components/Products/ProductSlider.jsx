import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaHeart } from "react-icons/fa"; 
import { useWishlist } from '../../context/WishlistContext';

import 'swiper/css';
import 'swiper/css/navigation';

// 1. Accept the 'products' prop passed from Home.jsx
const ProductSlider = ({ title, products = [] }) => {
    const { toggleWishlist, isBookInWishlist } = useWishlist();

    return (
        <div className="w-full">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-1">
                        {title}
                        <span className="text-gray-400 text-[16px] ml-1">⌄</span>
                    </h3>
                    <button className="text-[#00c853] text-[15px] font-semibold hover:underline">View All</button>
                </div>

                <div className="relative">
                    <style>
                        {`
                            .product-swiper .swiper-button-next, 
                            .product-swiper .swiper-button-prev {
                                background-color: rgba(150, 150, 150, 0.15); 
                                width: 36px !important;
                                height: 36px !important;
                                border-radius: 50%;
                                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                                color: #555 !important;
                                margin-top: -30px;
                                transition: all 0.3s ease; 
                            }
                            .product-swiper .swiper-button-next:hover, 
                            .product-swiper .swiper-button-prev:hover {
                                background-color: rgba(0, 200, 83, 0.15); 
                                color: #00c853 !important; 
                            }
                            .product-swiper .swiper-button-next:after, 
                            .product-swiper .swiper-button-prev:after { font-size: 14px !important; }
                        `}
                    </style>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={15}
                        navigation={true}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 10 },
                            768: { slidesPerView: 3, spaceBetween: 15 },
                            1024: { slidesPerView: 4, spaceBetween: 20 },
                            1280: { slidesPerView: 5, spaceBetween: 20 },
                        }}
                        className="product-swiper pb-4 px-1"
                    >
                        {/* 2. Map through the REAL products from your database */}
                        {products.map((book) => {
                            // Calculate discount if oldPrice exists
                            const discountPercent = book.oldPrice 
                                ? Math.round(((book.oldPrice - book.price) / book.oldPrice) * 100) 
                                : null;

                            return (
                                <SwiperSlide key={book._id}>
                                    <div className="relative group h-full">
                                        <button 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleWishlist(book);
                                            }}
                                            className={`absolute top-3 right-3 z-20 p-2 rounded-full shadow-sm transition-all ${
                                                isBookInWishlist(book._id) 
                                                ? 'bg-red-500 text-white' 
                                                : 'bg-white/90 text-gray-400 hover:text-red-500'
                                            }`}
                                        >
                                            <FaHeart size={14} />
                                        </button>

                                        <Link 
                                            to={`/product/${book._id}`}
                                            className="border border-gray-200 bg-white flex flex-col h-full shadow-sm hover:shadow-md transition-shadow cursor-pointer block"
                                        >
                                            <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden border-b border-gray-100">
                                                <div className="absolute top-0 right-0 flex flex-col items-end z-10">
                                                    {discountPercent > 0 && (
                                                        <span className="bg-[#cc0000] text-white text-[11px] font-bold px-1.5 py-0.5 shadow-sm">
                                                            -{discountPercent}%
                                                        </span>
                                                    )}
                                                    {book.isBestSeller && (
                                                        <span className="bg-[#cc0000] text-white text-[10px] font-bold px-1.5 py-1 text-center leading-tight mt-[1px] shadow-sm">
                                                            Best<br/>Seller
                                                        </span>
                                                    )}
                                                </div>
                                                {/* 3. Use the REAL image you uploaded */}
                                                <img 
                                                    src={book.image} 
                                                    alt={book.title} 
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                                                />
                                            </div>

                                            <div className="p-3 flex-1 flex flex-col">
                                                <h4 className="text-[14px] font-bold text-gray-900 line-clamp-2 leading-tight mb-1">{book.title}</h4>
                                                <p className="text-[12px] text-gray-500 line-clamp-1 mb-3">{book.author}</p>
                                                <div className="flex items-end justify-between mt-auto pt-1">
                                                    <div className="flex flex-col">
                                                        <div className="flex items-center text-[#e91e63] text-[10px] gap-[1px]">
                                                            <FaHeart /><FaHeart /><FaHeart /><FaHeart /><FaHeart />
                                                        </div>
                                                        <span className="text-[11px] text-gray-500 mt-0.5">{book.ratingCount || 0} Rating</span>
                                                    </div>
                                                    <div className="bg-[#00c853] text-white text-[13px] font-bold py-1 px-3 rounded shadow-sm">
                                                        ฿ {book.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;