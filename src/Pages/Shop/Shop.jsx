import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaStar, FaFilter } from "react-icons/fa";
import { Slider } from '@mui/material';

// --- MOCK DATA ---
const allBooks = [
    { id: 1, title: "1984 (Classic Edition)", author: "George Orwell", category: "Fiction", price: 310, rating: 5, reviews: 372, isBestSeller: true },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", price: 239, rating: 4, reviews: 119 },
    { id: 3, title: "Sapiens: A Brief History", author: "Yuval Noah Harari", category: "Non-Fiction", price: 450, rating: 5, reviews: 892, isBestSeller: true },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", price: 399, rating: 4, reviews: 301, discount: "-10%" },
    { id: 5, title: "Atomic Habits", author: "James Clear", category: "Self-Help", price: 550, rating: 5, reviews: 1250, isBestSeller: true },
    { id: 6, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", price: 420, rating: 5, reviews: 450, hasMovie: true },
    { id: 7, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Non-Fiction", price: 380, rating: 4, reviews: 210 },
    { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", price: 290, rating: 5, reviews: 980, hasMovie: true },
    { id: 9, title: "Educated", author: "Tara Westover", category: "Biography", price: 340, rating: 5, reviews: 620 },
    { id: 10, title: "The Psychology of Money", author: "Morgan Housel", category: "Finance", price: 299, rating: 5, reviews: 840, isBestSeller: true },
    { id: 11, title: "Frankenstein", author: "Mary Shelley", category: "Fiction", price: 150, rating: 4, reviews: 145 },
    { id: 12, title: "Project Hail Mary", author: "Andy Weir", category: "Sci-Fi", price: 480, rating: 5, reviews: 320 },
];

const categories = ["All Categories", "Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Self-Help", "Biography", "Finance"];

const Shop = () => {
    // --- STATE FOR FILTERS ---
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortBy, setSortBy] = useState("popular");
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // --- FILTERING LOGIC ---
    let filteredBooks = allBooks.filter(book => {
        const matchesCategory = selectedCategory === "All Categories" || book.category === selectedCategory;
        const matchesPrice = book.price >= priceRange[0] && book.price <= priceRange[1];
        return matchesCategory && matchesPrice;
    });

    // --- SORTING LOGIC ---
    if (sortBy === "price-low") filteredBooks.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") filteredBooks.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") filteredBooks.sort((a, b) => b.rating - a.rating);

    return (
        <div className="w-full bg-gray-50 min-h-screen pb-20 pt-8">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                
                {/* Header & Breadcrumbs */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 mb-2">Shop All Books</h1>
                        <p className="text-sm text-gray-500">
                            <Link to="/" className="hover:text-[#00c853]">Home</Link> / 
                            <span className="ml-1 text-gray-800 font-medium">Shop</span>
                        </p>
                    </div>
                    
                    {/* Mobile Filter Toggle */}
                    <button 
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                        className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg font-bold text-gray-700 hover:bg-gray-50"
                    >
                        <FaFilter /> Filters
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* --- LEFT SIDEBAR: FILTERS --- */}
                    <div className={`w-full lg:w-1/4 flex flex-col gap-6 ${showMobileFilters ? 'block' : 'hidden lg:flex'}`}>
                        
                        {/* Filter Block: Categories */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-2">Categories</h3>
                            <ul className="flex flex-col gap-3">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button 
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`text-[15px] transition-colors ${selectedCategory === cat ? 'text-[#00c853] font-bold' : 'text-gray-600 hover:text-[#00c853]'}`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Filter Block: Price */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg text-gray-900 mb-6 border-b border-gray-100 pb-2">Filter by Price</h3>
                            <div className="px-2">
                                <Slider
                                    value={priceRange}
                                    onChange={(e, newValue) => setPriceRange(newValue)}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={1000}
                                    sx={{ color: '#00c853' }}
                                />
                            </div>
                            <div className="flex items-center justify-between mt-4 text-sm font-bold text-gray-700">
                                <span>฿ {priceRange[0]}</span>
                                <span>฿ {priceRange[1]}</span>
                            </div>
                        </div>

                    </div>

                    {/* --- RIGHT SIDE: PRODUCT GRID --- */}
                    <div className="w-full lg:w-3/4">
                        
                        {/* Top Bar (Results count & Sort) */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                            <p className="text-gray-500 font-medium text-sm">
                                Showing <span className="font-bold text-gray-900">{filteredBooks.length}</span> results
                            </p>
                            
                            <div className="flex items-center gap-3">
                                <label className="text-sm font-bold text-gray-700">Sort by:</label>
                                <select 
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border border-gray-200 rounded-md py-1.5 px-3 text-sm text-gray-700 outline-none focus:border-[#00c853] bg-white cursor-pointer"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                            </div>
                        </div>

                        {/* The Grid */}
                        {filteredBooks.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                                {filteredBooks.map((book) => (
                                    <Link 
                                        key={book.id} 
                                        to={`/product/${book.id}`}
                                        className="bg-white border border-gray-200 rounded-lg flex flex-col group h-full shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                                    >
                                        <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden border-b border-gray-100">
                                            <div className="absolute top-0 right-0 flex flex-col items-end z-10">
                                                {book.discount && <span className="bg-[#cc0000] text-white text-[11px] font-bold px-2 py-0.5 shadow-sm">{book.discount}</span>}
                                                {book.isBestSeller && <span className="bg-[#cc0000] text-white text-[10px] font-bold px-1.5 py-1 text-center leading-tight mt-[1px] shadow-sm">Best<br/>Seller</span>}
                                                {book.hasMovie && <span className="bg-[#00c853] text-white text-[10px] font-bold px-2 py-0.5 mt-[1px] shadow-sm">Movie</span>}
                                            </div>
                                            <img 
                                                src={`https://via.placeholder.com/300x400?text=${book.title.replace(/ /g, '+')}`} 
                                                alt={book.title} 
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                                            />
                                        </div>

                                        <div className="p-4 flex-1 flex flex-col">
                                            <span className="text-[11px] font-bold text-[#00c853] uppercase tracking-wider mb-1">{book.category}</span>
                                            <h4 className="text-[15px] font-bold text-gray-900 line-clamp-2 leading-tight mb-1" title={book.title}>
                                                {book.title}
                                            </h4>
                                            <p className="text-[13px] text-gray-500 line-clamp-1 mb-3">{book.author}</p>

                                            <div className="flex items-end justify-between mt-auto pt-2 border-t border-gray-100">
                                                <div className="flex flex-col">
                                                    <div className="flex items-center text-[#e91e63] text-[10px] gap-[1px]">
                                                        <FaHeart /><FaHeart /><FaHeart /><FaHeart /><FaHeart />
                                                    </div>
                                                    <span className="text-[11px] text-gray-500 mt-0.5">{book.reviews} Ratings</span>
                                                </div>
                                                <div className="font-black text-gray-900 text-[16px]">
                                                    ฿ {book.price}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white p-12 text-center rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">No books found</h3>
                                <p className="text-gray-500">Try adjusting your filters or price range to find what you're looking for.</p>
                                <button 
                                    onClick={() => { setSelectedCategory("All Categories"); setPriceRange([0, 1000]); }}
                                    className="mt-6 text-[#00c853] font-bold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;