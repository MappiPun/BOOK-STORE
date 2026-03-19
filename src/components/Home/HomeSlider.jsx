import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Banner1 from '../../assets/banner/banner1.jpg';
import Banner2 from '../../assets/banner/banner2.jpg';

const HomeSlider = () => {
    return (
        <section className="homeSliderSection w-full pt-6 md:pt-10 pb-4">
            <div className="container mx-auto px-2 md:px-4">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    className="rounded-2xl md:rounded-3xl overflow-hidden shadow-md"
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className="relative w-full h-[180px] md:h-[450px]">
                            <picture>
                                <img 
                                    src={Banner1} 
                                    alt="Sale Banner" 
                                    className="w-full h-full object-cover" 
                                />
                            </picture>
                            
                            {/* Text and Button Overlay - Positioned like Shopify */}
                            <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16 bg-black/5">
                                <div className="text-left max-w-[200px] md:max-w-md">
                                    <h2 className="text-white text-lg md:text-5xl font-bold drop-shadow-md leading-tight">
                                    </h2>
                                    <p className="hidden md:block text-white text-lg mt-2 opacity-90">
                                    </p>
                                    <Link to="/shop">
                                        <button className="mt-3 md:mt-6 bg-white text-black text-[10px] md:text-[14px] font-bold py-1.5 md:py-3 px-4 md:px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all uppercase tracking-wider">
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 (Banner 2) */}
                    <SwiperSlide>
                        <div className="relative w-full h-[180px] md:h-[450px]">
                            <img 
                                src={Banner2} 
                                alt="New Arrivals" 
                                className="w-full h-full object-cover" 
                            />
                            <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16 bg-black/5">
                                <div className="text-left">
                                    <h2 className="text-white text-lg md:text-5xl font-bold drop-shadow-md">

                                    </h2>
                                    <Link to="/shop">
                                        <button className="mt-3 md:mt-6 bg-white text-black text-[10px] md:text-[14px] font-bold py-1.5 md:py-3 px-4 md:px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all">  
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default HomeSlider;