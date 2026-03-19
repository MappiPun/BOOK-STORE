import React from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { Button } from '@mui/material';

// Assuming you save the generated image as newsletter-illustration.png in your assets folder
import NewsletterIllustration from '../../assets/images/logo.png';

const NewsletterBanner = () => {
    return (
        <div className="w-full bg-shop-light-pink py-16 md:py-24 mt-12 relative overflow-hidden">
            
            <div className="container mx-auto px-4 relative z-10">
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* LEFT SIDE: Text & Input */}
                    <div className="w-full md:w-1/2 text-white flex flex-col items-start">
                        
                        {/* FIXED: Changed mb-6 to mb-2, and added mt-2 to push the badge down closer to the heading */}
                        <span className="inline-block py-1 px-3 rounded-full bg-white/40 text-black text-sm font-bold mb-2 mt-2 shadow-sm border border-white/50 -ml-3">
                            🎉 99% discount for your first order
                        </span>
                        
                        <h2 className="text-4xl md:text-3xl text-black font-extrabold mb-6 tracking-tight leading-relaxed drop-shadow-sm">
                            Join our membership <br className="hidden lg:block" /> and get <span className='text-red-500 bg-white px-3 py-1 rounded-xl shadow-lg inline-block transform -rotate-2 ml-1'>SCAM</span>
                        </h2>

                        <p className="text-black/90 text-md max-w-md font-medium leading-relaxed">
                            Don't miss out on the best fake deals in every universe. Sign up today!
                        </p>

                        <div 
                            className="flex items-center w-full max-w-md bg-white rounded-lg p-1.5 shadow-xl"
                            style={{ marginTop: '40px' }}
                        >
                            <div className="flex items-center justify-center pl-3 pr-2 text-gray-400 shrink-0">
                                <FaRegEnvelope size={20} />
                            </div>
                            
                            <input 
                                type="email" 
                                placeholder="Your Email Address" 
                                className="flex-1 w-full min-w-0 py-3 px-2 text-gray-800 text-[15px] outline-none bg-transparent border-none placeholder-gray-400"
                            />
                            
                            <Button 
                                className="!bg-shop-light-green !hover:bg-shop-light-green !text-white text-[15px] font-bold py-3 px-6 md:px-8 rounded-md shrink-0 whitespace-nowrap transition-colors cursor-pointer shadow-sm"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Illustration Area */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                        {/* Swapped the placeholder text for the 3D Image */}
                        <img 
                            src={NewsletterIllustration} 
                            alt="Book newsletter illustration" 
                            className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NewsletterBanner;