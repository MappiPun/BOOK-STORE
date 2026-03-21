import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
    FaHeart, FaShoppingCart, FaShareAlt, FaPlus, FaMinus, FaStar, FaRegStar, FaUserCircle
} from "react-icons/fa";
import { Button, CircularProgress } from '@mui/material';
import ProductSlider from '../../components/Products/ProductSlider';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('reviews'); // Default to reviews tab

    const { toggleWishlist, isBookInWishlist } = useWishlist();
    const { addToCart } = useCart();

    // 1. Fetch Real Data
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };
        fetchProductData();
    }, [id]);

    // 2. Rating Star Logic
    const renderStars = (rating = 5) => {
        return (
            <div className="flex text-[#ffc107] text-sm gap-0.5">
                {[...Array(5)].map((_, i) => (
                    i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                ))}
            </div>
        );
    };

    // 3. Mock Reviews (Since MongoDB doesn't store reviews yet)
    const reviews = [
        { id: 1, name: "Alice Johnson", date: "March 15, 2026", rating: 5, comment: "The quality of this book is fantastic. Arrived in perfect condition!" },
        { id: 2, name: "Mark D.", date: "February 28, 2026", rating: 4, comment: "Great read, but the shipping took a bit longer than expected." },
    ];

    if (loading) return <div className="min-h-screen flex items-center justify-center"><CircularProgress color="success" /></div>;
    if (!product) return <div className="min-h-screen flex items-center justify-center font-bold text-red-500">Book Not Found!</div>;

    const isInWishlist = isBookInWishlist(product._id);

    return (
        <div className="w-full bg-white pb-20">
            <div className="bg-gray-50 py-4 border-b border-gray-100 mb-8">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <p className="text-sm text-gray-500">
                        <Link to="/" className="hover:text-[#00c853]">Home</Link> / 
                        <span className="ml-1">{product.category}</span> / 
                        <span className="ml-1 text-gray-800 font-medium">{product.title}</span>
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col lg:flex-row gap-12 mb-20">
                    {/* IMAGE SECTION */}
                    <div className="w-full lg:w-2/5">
                        <div className="sticky top-24">
                            <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm aspect-[3/4]">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* DETAILS SECTION */}
                    <div className="w-full lg:w-3/5">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{product.title}</h1>
                                <p className="text-lg text-gray-500">By <span className="text-[#00c853]">{product.author}</span></p>
                            </div>
                            <button onClick={() => toggleWishlist(product)} className={`p-3 rounded-full border ${isInWishlist ? 'bg-red-50 text-red-500 border-red-100' : 'text-gray-400'}`}>
                                <FaHeart size={20} />
                            </button>
                        </div>

                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                            {renderStars(5)}
                            <span className="text-sm text-gray-500 font-medium">4.8 Average Rating</span>
                            <span className="text-sm text-[#00c853] font-bold">
                                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                            </span>
                        </div>

                        <div className="mb-6">
                            <span className="text-4xl font-black text-gray-900">฿ {product.price * quantity}</span>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-gray-200 pl-4 mb-8">
                            "{product.description}"
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center border-2 border-gray-200 rounded-lg h-[56px] w-32">
                                <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} className="w-10 h-full flex items-center justify-center"><FaMinus size={12} /></button>
                                <div className="flex-1 text-center font-bold text-lg">{quantity}</div>
                                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-full flex items-center justify-center"><FaPlus size={12} /></button>
                            </div>

                            <Button 
                                onClick={() => addToCart(product, quantity)}
                                disabled={product.stock <= 0}
                                className="!bg-[#00c853] !text-white !font-bold !px-8 !rounded-lg !flex-1 h-[56px]"
                                startIcon={<FaShoppingCart />}
                            >
                                {product.stock > 0 ? "Add to Cart" : "Sold Out"}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* TABS SECTION */}
                <div className="mb-20">
                    <div className="flex border-b border-gray-200">
                        <button onClick={() => setActiveTab('description')} className={`px-8 py-4 font-bold ${activeTab === 'description' ? 'border-b-2 border-[#00c853] text-[#00c853]' : 'text-gray-500'}`}>Description</button>
                        <button onClick={() => setActiveTab('reviews')} className={`px-8 py-4 font-bold ${activeTab === 'reviews' ? 'border-b-2 border-[#00c853] text-[#00c853]' : 'text-gray-500'}`}>Reviews ({reviews.length})</button>
                    </div>

                    <div className="py-8">
                        {activeTab === 'description' && <p className="text-gray-600 leading-relaxed">{product.description}</p>}
                        
                        {activeTab === 'reviews' && (
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="w-full lg:w-3/5 flex flex-col gap-6">
                                    {reviews.map(review => (
                                        <div key={review.id} className="border-b border-gray-100 pb-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <FaUserCircle className="text-gray-300 text-4xl" />
                                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                                </div>
                                                {renderStars(review.rating)}
                                            </div>
                                            <p className="text-gray-600 text-sm">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <ProductSlider title="Customers Also Bought" />
            </div>
        </div>
    );
};

export default ProductDetail;