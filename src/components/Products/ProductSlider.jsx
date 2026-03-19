import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaHeart } from "react-icons/fa"; 

import 'swiper/css';
import 'swiper/css/navigation';

const mockBooks = [
    { id: 1, title: "1984 (Classic Edition)", author: "George Orwell", price: 310, discount: "-20%", ratingCount: 372, isBestSeller: true, hasMovie: true },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 239, ratingCount: 119, isBestSeller: true },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", price: 264, discount: "-20%", ratingCount: 69, isBestSeller: true },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 399, discount: "-58%", ratingCount: 301, isBestSeller: true },
    { id: 5, title: "Dune (Sci-Fi Epic)", author: "Frank Herbert", price: 159, discount: "-54%", ratingCount: 69, isBestSeller: true },
    { id: 6, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 150, ratingCount: 45, isBestSeller: false },
];

const ProductSlider = ({ title }) => {
    return (
        <div className="w-full">
            <div className="container mx-auto px-4">
                
                <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-1">
                        {title}
                        <span className="text-gray-400 text-[16px] ml-1">⌄</span>
                    </h3>
                    <button className="text-[#00c853] text-[15px] font-semibold hover:underline">
                        View All
                    </button>
                </div>

                <div className="relative">
                    <style>
                        {`
                            .product-swiper .swiper-button-next, 
                            .product-swiper .swiper-button-prev {
                                /* Default state: Transparent Grey */
                                background-color: rgba(150, 150, 150, 0.15); 
                                width: 36px !important;
                                height: 36px !important;
                                border-radius: 50%;
                                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                                color: #555 !important;
                                margin-top: -30px;
                                /* Smooth fade effect */
                                transition: all 0.3s ease; 
                            }
                            
                            /* Hover state: Transparent Green */
                            .product-swiper .swiper-button-next:hover, 
                            .product-swiper .swiper-button-prev:hover {
                                background-color: rgba(0, 200, 83, 0.15); 
                                color: #00c853 !important; 
                            }

                            .product-swiper .swiper-button-next:after, 
                            .product-swiper .swiper-button-prev:after {
                                font-size: 14px !important;
                                font-weight: bold;
                            }
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
                        {mockBooks.map((book) => (
                            <SwiperSlide key={book.id}>
                                <div className="border border-gray-200 bg-white flex flex-col group h-full shadow-sm hover:shadow-md transition-shadow">
                                    
                                    <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden border-b border-gray-100">
                                        <div className="absolute top-0 right-0 flex flex-col items-end z-10">
                                            {book.discount && (
                                                <span className="bg-[#cc0000] text-white text-[11px] font-bold px-1.5 py-0.5 shadow-sm">
                                                    {book.discount}
                                                </span>
                                            )}
                                            {book.isBestSeller && (
                                                <span className="bg-[#cc0000] text-white text-[10px] font-bold px-1.5 py-1 text-center leading-tight mt-[1px] shadow-sm">
                                                    Best<br/>Seller
                                                </span>
                                            )}
                                            {book.hasMovie && (
                                                <span className="bg-[#00c853] text-white text-[10px] font-bold px-1.5 py-0.5 mt-[1px] shadow-sm">
                                                    Movie
                                                </span>
                                            )}
                                        </div>
                                        
                                        <img 
                                            src={`https://via.placeholder.com/300x400?text=${book.title.replace(/ /g, '+')}`} 
                                            alt={book.title} 
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                                        />
                                    </div>

                                    <div className="p-3 flex-1 flex flex-col">
                                        <h4 className="text-[14px] font-bold text-gray-900 line-clamp-2 leading-tight mb-1" title={book.title}>
                                            {book.title}
                                        </h4>
                                        <p className="text-[12px] text-gray-500 line-clamp-1 mb-3">
                                            {book.author}
                                        </p>

                                        <div className="flex items-end justify-between mt-auto pt-1">
                                            <div className="flex flex-col">
                                                <div className="flex items-center text-[#e91e63] text-[10px] gap-[1px]">
                                                    <FaHeart /><FaHeart /><FaHeart /><FaHeart /><FaHeart />
                                                </div>
                                                <span className="text-[11px] text-gray-500 mt-0.5">{book.ratingCount} Rating</span>
                                            </div>
                                            
                                            <button className="bg-[#00c853] hover:bg-[#00a846] text-white text-[13px] font-bold py-1 px-3 rounded shadow-sm transition-colors">
                                                ฿ {book.price}
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default ProductSlider;