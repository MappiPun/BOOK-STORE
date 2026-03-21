import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const CategoryPage = () => {
    const { categoryName } = useParams(); // Grabs 'Lifestyle' from /category/Lifestyle
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategoryBooks = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/api/products/category/${categoryName}`);
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };
        fetchCategoryBooks();
    }, [categoryName]);

    if (loading) return <div className="flex justify-center p-20"><CircularProgress color="success" /></div>;

    return (
        <div className="container mx-auto px-4 py-10 min-h-screen">
            <h1 className="text-3xl font-black mb-8 text-gray-900 border-b-4 border-[#00c853] w-fit pb-2">
                {categoryName} Books
            </h1>

            {products.length === 0 ? (
                <p className="text-gray-500 italic text-lg">No books found in this category yet.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {products.map((book) => (
                        <Link key={book._id} to={`/product/${book._id}`} className="group">
                            <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-sm line-clamp-2 mb-1">{book.title}</h4>
                                    <p className="text-xs text-gray-500 mb-2">{book.author}</p>
                                    <div className="bg-[#00c853] text-white font-bold text-center py-1 rounded text-sm">฿ {book.price}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryPage;