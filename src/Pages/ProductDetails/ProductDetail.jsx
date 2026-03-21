import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
    FaHeart, 
    FaShoppingCart, 
    FaRegBookmark, 
    FaShareAlt,
    FaPlus,      
    FaMinus,
    FaStar,
    FaRegStar,
    FaUserCircle
} from "react-icons/fa";
import { Button } from '@mui/material';
import ProductSlider from '../../components/Products/ProductSlider';

const ProductDetail = () => {
    const { id } = useParams();
    
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('reviews');

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    const book = {
        id: id,
        title: "1984 (Classic Edition)",
        author: "George Orwell",
        price: 310,
        oldPrice: 387,
        discount: "-20%",
        ratingCount: 372,
        stock: "In Stock",
        description: "Nineteen Eighty-Four is a dystopian social science fiction novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
        format: "Paperback",
        pages: "328 pages",
        publisher: "Secker & Warburg",
        language: "English",
        isbn: "978-0451524935",
        weight: "250g",
        dimensions: "19.8 x 12.9 x 1.8 cm",
        image: `https://via.placeholder.com/400x600?text=1984+Classic+Edition`
    };

    const reviews = [
        { id: 1, name: "Alice Johnson", date: "March 15, 2026", rating: 5, comment: "A timeless classic! The quality of this paperback edition is fantastic. The pages have a nice weight to them, and the font size is perfect for reading." },
        { id: 2, name: "Mark D.", date: "February 28, 2026", rating: 4, comment: "Great book, arrived very quickly. Taking off one star because the cover had a tiny bend on the corner, but otherwise perfect." },
        { id: 3, name: "Sarah Williams", date: "January 10, 2026", rating: 5, comment: "Everyone should read this at least once in their life. The new cover art on this edition is absolutely stunning." },
    ];

    const renderStars = (rating) => {
        return (
            <div className="flex text-[#ffc107] text-sm gap-0.5">
                {[...Array(5)].map((_, i) => (
                    i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                ))}
            </div>
        );
    };

    return (
        <div className="w-full bg-white pb-20">
            {/* Breadcrumbs */}
            <div className="bg-gray-50 py-4 border-b border-gray-100 mb-8">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                    <p className="text-sm text-gray-500">
                        <Link to="/" className="hover:text-[#00c853] transition-colors">Home</Link> / 
                        <Link to="#" className="hover:text-[#00c853] transition-colors ml-1">Fiction</Link> / 
                        <span className="ml-1 text-gray-800 font-medium">{book.title}</span>
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                
                <div className="flex flex-col lg:flex-row gap-12 mb-20">
                    
                    {/* LEFT: Image Gallery */}
                    <div className="w-full lg:w-2/5">
                        <div className="sticky top-24">
                            <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-gray-50 aspect-[3/4]">
                                <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex gap-4 mt-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-20 h-24 border border-gray-200 rounded-md overflow-hidden cursor-pointer hover:border-[#00c853] transition-colors">
                                        <img src={book.image} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="thumbnail" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Product Info */}
                    <div className="w-full lg:w-3/5">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
                                    {book.title}
                                </h1>
                                <p className="text-lg text-gray-500 font-medium">By <span className="text-[#00c853] hover:underline cursor-pointer">{book.author}</span></p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-3 rounded-full border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm">
                                    <FaRegBookmark size={20} />
                                </button>
                                <button className="p-3 rounded-full border border-gray-200 text-gray-400 hover:text-[#00c853] hover:border-green-100 transition-all shadow-sm">
                                    <FaShareAlt size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                            {renderStars(5)}
                            <span className="text-sm text-gray-500 font-medium">{book.ratingCount} Ratings</span>
                            <span className="text-sm text-gray-300">|</span>
                            <span className="text-sm text-[#00c853] font-bold">{book.stock}</span>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center gap-4 mb-1">
                                <span className="text-4xl font-black text-gray-900">฿ {book.price * quantity}</span>
                                {book.discount && (
                                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        {book.discount}
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-400 line-through text-lg">฿ {book.oldPrice * quantity}</p>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-gray-200 pl-4">
                            "{book.description}"
                        </p>

                        {/* --- BRUTE FORCE SPACER --- */}
                        {/* This will physically force a 60px gap between the text and the buttons */}
                        <div className="w-full h-[60px] block"></div>

                        {/* ACTION BUTTONS & QUANTITY SELECTOR */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex items-center border-2 border-gray-200 rounded-lg h-[56px] w-full sm:w-32 bg-white">
                                <button onClick={handleDecrease} className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-[#00c853] hover:bg-gray-50 transition-colors rounded-l-md">
                                    <FaMinus size={12} />
                                </button>
                                <div className="flex-1 text-center font-bold text-lg text-gray-800 select-none">
                                    {quantity}
                                </div>
                                <button onClick={handleIncrease} className="w-10 h-full flex items-center justify-center text-gray-400 hover:text-[#00c853] hover:bg-gray-50 transition-colors rounded-r-md">
                                    <FaPlus size={12} />
                                </button>
                            </div>

                            <Button className="!bg-[#00c853] !hover:bg-[#00a846] !text-white !font-bold !px-6 lg:!px-8 !rounded-lg !text-[15px] lg:!text-lg !flex-1 shadow-lg shadow-green-100 h-[56px]" startIcon={<FaShoppingCart />}>
                                Add to Cart
                            </Button>
                            
                            <Button className="!border-2 !border-gray-200 !text-gray-800 !font-bold !px-6 lg:!px-8 !rounded-lg !text-[15px] lg:!text-lg !flex-1 hover:!bg-gray-50 h-[56px]">
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>

                {/* --- TABS SECTION: Description, Specs, Reviews --- */}
                <div className="mb-20">
                    <div className="flex border-b border-gray-200 overflow-x-auto hide-scrollbar">
                        <button 
                            onClick={() => setActiveTab('description')}
                            className={`px-8 py-4 font-bold text-lg whitespace-nowrap transition-colors border-b-2 ${activeTab === 'description' ? 'border-[#00c853] text-[#00c853]' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            Description
                        </button>
                        <button 
                            onClick={() => setActiveTab('specs')}
                            className={`px-8 py-4 font-bold text-lg whitespace-nowrap transition-colors border-b-2 ${activeTab === 'specs' ? 'border-[#00c853] text-[#00c853]' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            Specifications
                        </button>
                        <button 
                            onClick={() => setActiveTab('reviews')}
                            className={`px-8 py-4 font-bold text-lg whitespace-nowrap transition-colors border-b-2 ${activeTab === 'reviews' ? 'border-[#00c853] text-[#00c853]' : 'border-transparent text-gray-500 hover:text-gray-800'}`}
                        >
                            Reviews ({reviews.length})
                        </button>
                    </div>

                    <div className="py-8">
                        {activeTab === 'description' && (
                            <div className="text-gray-600 leading-relaxed max-w-4xl text-[15px]">
                                <p className="mb-4">{book.description}</p>
                                <p>Winston Smith works for the Ministry of Truth in London, chief city of Airstrip One. Big Brother stares out from every poster, the Thought Police uncover every act of betrayal. When Winston finds love with Julia, he discovers that life does not have to be dull and deadening, and awakens to new possibilities. Despite the police helicopters that hover and circle ceaselessly, Winston and Julia begin to question the Party; they are drawn towards rebellion. Yet Big Brother will not tolerate dissent - even in the mind. For those with original thoughts they invented Room 101.</p>
                            </div>
                        )}

                        {activeTab === 'specs' && (
                            <div className="max-w-3xl">
                                <table className="w-full text-left text-sm text-gray-600">
                                    <tbody>
                                        <tr className="border-b border-gray-100"><th className="py-3 font-semibold text-gray-800 w-1/3">Format</th><td className="py-3">{book.format}</td></tr>
                                        <tr className="border-b border-gray-100"><th className="py-3 font-semibold text-gray-800">Pages</th><td className="py-3">{book.pages}</td></tr>
                                        <tr className="border-b border-gray-100"><th className="py-3 font-semibold text-gray-800">Publisher</th><td className="py-3">{book.publisher}</td></tr>
                                        <tr className="border-b border-gray-100"><th className="py-3 font-semibold text-gray-800">Language</th><td className="py-3">{book.language}</td></tr>
                                        <tr className="border-b border-gray-100"><th className="py-3 font-semibold text-gray-800">ISBN</th><td className="py-3">{book.isbn}</td></tr>
                                        <tr className="border-b border-gray-100"><th className="py-3 font-semibold text-gray-800">Weight</th><td className="py-3">{book.weight}</td></tr>
                                        <tr className="border-b border-gray-100"><th className="py-3 font-semibold text-gray-800">Dimensions</th><td className="py-3">{book.dimensions}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="w-full lg:w-3/5 flex flex-col gap-6">
                                    {reviews.map(review => (
                                        <div key={review.id} className="border-b border-gray-100 pb-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <FaUserCircle className="text-gray-300 text-4xl" />
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 text-[15px]">{review.name}</h4>
                                                        <span className="text-xs text-gray-400">{review.date}</span>
                                                    </div>
                                                </div>
                                                {renderStars(review.rating)}
                                            </div>
                                            <p className="text-gray-600 text-[14px] leading-relaxed">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="w-full lg:w-2/5 bg-gray-50 rounded-xl p-6 border border-gray-100 h-fit">
                                    <h3 className="font-bold text-lg text-gray-900 mb-4">Write a Review</h3>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-sm text-gray-600">Your Rating:</span>
                                        <div className="flex text-gray-300 text-lg cursor-pointer hover:text-[#ffc107] transition-colors">
                                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-[#00c853] text-sm" />
                                        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-[#00c853] text-sm" />
                                        <textarea rows="4" placeholder="Write your review here..." className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-[#00c853] text-sm resize-none"></textarea>
                                        <Button className="!bg-[#00c853] !hover:bg-[#00a846] !text-white !font-bold !py-3 !rounded-md w-full mt-2 shadow-sm">
                                            Submit Review
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-10 pt-10 border-t border-gray-100">
                    <ProductSlider title="Customers Also Bought" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;