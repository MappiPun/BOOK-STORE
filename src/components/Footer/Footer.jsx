import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaFacebookF, 
    FaTwitter, 
    FaInstagram, 
    FaBookOpen, 
    FaTruck, 
    FaTags, 
    FaAward 
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-white pt-10 pb-12 border-t border-gray-100 mt-16 relative">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                
                {/* --- 1. TOP PERKS BAR (FORCED SPACING) --- */}
                <div className="hidden md:flex items-center justify-between border-b border-gray-100 py-12 mb-20">
                    <div className="flex items-center gap-4 text-gray-800">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                            <FaBookOpen className="text-[22px] text-gray-600" />
                        </div>
                        <span className="font-bold text-[15px] tracking-tight">Everyday fresh books</span>
                    </div>
                    
                    <div className="w-[1px] h-10 bg-gray-200"></div>
                    
                    <div className="flex items-center gap-4 text-gray-800">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                            <FaTruck className="text-[22px] text-gray-600" />
                        </div>
                        <span className="font-bold text-[15px] tracking-tight">Free delivery over $70</span>
                    </div>
                    
                    <div className="w-[1px] h-10 bg-gray-200"></div>
                    
                    <div className="flex items-center gap-4 text-gray-800">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                            <FaTags className="text-[22px] text-gray-600" />
                        </div>
                        <span className="font-bold text-[15px] tracking-tight">Daily Mega Discounts</span>
                    </div>
                    
                    <div className="w-[1px] h-10 bg-gray-200"></div>
                    
                    <div className="flex items-center gap-4 text-gray-800">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                            <FaAward className="text-[22px] text-gray-600" />
                        </div>
                        <span className="font-bold text-[15px] tracking-tight">Best price market</span>
                    </div>
                </div>

                {/* --- 2. LINKS DIRECTORY (Center-Aligned Grid) --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-10 mb-24 max-w-6xl">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#00c853] font-black text-[14px] uppercase tracking-widest mb-2">Fiction</h4>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Sci-Fi & Fantasy</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Mystery & Thriller</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Romance</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Horror</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#00c853] font-black text-[14px] uppercase tracking-widest mb-2">Non-Fiction</h4>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Biographies</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">History</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Science & Math</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Self-Help</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#00c853] font-black text-[14px] uppercase tracking-widest mb-2">Kids</h4>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Children's Books</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Young Adult</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Educational</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Comics</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#00c853] font-black text-[14px] uppercase tracking-widest mb-2">Support</h4>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Order Tracking</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Shipping Info</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Returns</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Contact Us</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#00c853] font-black text-[14px] uppercase tracking-widest mb-2">Company</h4>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Our Story</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Careers</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Privacy Policy</Link>
                        <Link to="#" className="text-gray-500 hover:text-[#00c853] text-[14px] font-medium transition-all hover:translate-x-1">Terms</Link>
                    </div>
                </div>

                {/* --- 3. BOTTOM BAR --- */}
                <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-10">
                    <p className="text-gray-400 text-[13px] font-medium mb-4 md:mb-0">
                        © 2026 BookStore. All rights reserved. Built with passion for readers.
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#00c853] hover:text-white transition-all duration-300">
                            <FaFacebookF size={16} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#00c853] hover:text-white transition-all duration-300">
                            <FaTwitter size={16} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#00c853] hover:text-white transition-all duration-300">
                            <FaInstagram size={16} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;