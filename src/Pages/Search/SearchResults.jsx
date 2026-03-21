import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

// This would eventually be your real database
const allBooks = [
    { id: 1, title: "1984 (Classic Edition)", author: "George Orwell", category: "Fiction", price: 310, reviews: 372 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", price: 239, reviews: 119 },
    { id: 3, title: "Sapiens: A Brief History", author: "Yuval Noah Harari", category: "Non-Fiction", price: 450, reviews: 892 },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", price: 399, reviews: 301 },
    { id: 5, title: "Atomic Habits", author: "James Clear", category: "Self-Help", price: 550, reviews: 1250 },
    { id: 6, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", price: 420, reviews: 450 },
];

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q')?.toLowerCase() || "";

    // Filter books based on title or author
    const filteredResults = allBooks.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
    );

    return (
        <div className="w-full bg-gray-50 min-h-screen pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                
                <div className="mb-10">
                    <h1 className="text-3xl font-black text-gray-900 mb-2">Search Results</h1>
                    <p className="text-gray-500">
                        Showing results for: <span className="text-[#00c853] font-bold">"{query}"</span>
                    </p>
                </div>

                {filteredResults.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {filteredResults.map((book) => (
                            <Link 
                                key={book.id} 
                                to={`/product/${book.id}`}
                                className="bg-white border border-gray-200 rounded-lg flex flex-col group h-full shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                            >
                                <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden border-b border-gray-100">
                                    <img 
                                        src={`https://via.placeholder.com/300x400?text=${book.title.replace(/ /g, '+')}`} 
                                        alt={book.title} 
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                                    />
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h4 className="text-[14px] font-bold text-gray-900 line-clamp-2 leading-tight mb-1">{book.title}</h4>
                                    <p className="text-[12px] text-gray-500 mb-3">{book.author}</p>
                                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                                        <span className="font-black text-gray-900">฿ {book.price}</span>
                                        <div className="flex text-[#e91e63] text-[10px] gap-0.5">
                                            <FaHeart /><FaHeart /><FaHeart /><FaHeart /><FaHeart />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white p-20 text-center rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">No results found</h2>
                        <p className="text-gray-500 mb-8">We couldn't find any books matching your search. Try different keywords.</p>
                        <Link to="/shop">
                            <button className="text-[#00c853] font-bold hover:underline text-lg">Browse all books</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;