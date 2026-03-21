import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPlus, FaMinus, FaArrowLeft } from "react-icons/fa";
import { Button } from '@mui/material';

const Cart = () => {
    // Mock Cart Data (State so we can play with the numbers!)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: "1984 (Classic Edition)",
            author: "George Orwell",
            price: 310,
            quantity: 1,
            image: "https://via.placeholder.com/150x200?text=1984"
        },
        {
            id: 4,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            price: 399,
            quantity: 2,
            image: "https://via.placeholder.com/150x200?text=Catcher+in+the+Rye"
        }
    ]);

    // --- Actions ---
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // --- Calculations ---
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 700 || subtotal === 0 ? 0 : 50; // Free shipping over 700 THB
    const total = subtotal + shipping;

    return (
        <div className="w-full bg-gray-50 min-h-screen pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                
                <div className="flex items-center gap-2 mb-8">
                    <h1 className="text-3xl font-black text-gray-900">Your Cart</h1>
                    <span className="text-gray-500 font-medium text-lg mt-1">({cartItems.length} items)</span>
                </div>

                {cartItems.length === 0 ? (
                    // EMPTY CART STATE
                    <div className="bg-white rounded-xl shadow-sm p-16 flex flex-col items-center justify-center text-center border border-gray-100">
                        <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty Cart" className="w-32 h-32 mb-6 opacity-50" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8 max-w-md">Looks like you haven't added any books to your cart yet. Discover our bestsellers and find your next great read!</p>
                        <Link to="/">
                            <Button className="!bg-[#00c853] !hover:bg-[#00a846] !text-white !font-bold !px-8 !py-3 !rounded-lg !text-[15px] shadow-lg shadow-green-100">
                                Start Shopping
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* LEFT: Cart Items List */}
                        <div className="w-full lg:w-2/3 flex flex-col gap-4">
                            {/* Header Row (Hidden on Mobile) */}
                            <div className="hidden md:grid grid-cols-12 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-sm font-bold text-gray-400 uppercase tracking-wider">
                                <div className="col-span-6">Product Details</div>
                                <div className="col-span-3 text-center">Quantity</div>
                                <div className="col-span-2 text-right">Price</div>
                                <div className="col-span-1 text-center">Action</div>
                            </div>

                            {/* Cart Items */}
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:grid md:grid-cols-12 gap-6 items-center transition-all hover:shadow-md">
                                    
                                    {/* 1. Image & Title */}
                                    <div className="col-span-6 flex gap-4 w-full">
                                        <div className="w-20 md:w-24 shrink-0 bg-gray-100 rounded border border-gray-200 aspect-[3/4] overflow-hidden">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <Link to={`/product/${item.id}`} className="font-bold text-gray-900 text-lg hover:text-[#00c853] transition-colors line-clamp-2 leading-tight mb-1">
                                                {item.title}
                                            </Link>
                                            <span className="text-gray-500 text-sm">{item.author}</span>
                                            
                                            {/* Mobile Price */}
                                            <span className="md:hidden font-black text-[#00c853] mt-2">฿ {item.price}</span>
                                        </div>
                                    </div>

                                    {/* 2. Quantity Selector */}
                                    <div className="col-span-3 flex justify-center w-full md:w-auto">
                                        <div className="flex items-center border border-gray-200 rounded-lg h-10 w-28 bg-gray-50">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-[#00c853] transition-colors">
                                                <FaMinus size={10} />
                                            </button>
                                            <div className="flex-1 text-center font-bold text-gray-800 text-sm select-none">
                                                {item.quantity}
                                            </div>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-[#00c853] transition-colors">
                                                <FaPlus size={10} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* 3. Total Price (Per Item) */}
                                    <div className="col-span-2 hidden md:flex justify-end items-center">
                                        <span className="font-black text-lg text-gray-900">
                                            ฿ {item.price * item.quantity}
                                        </span>
                                    </div>

                                    {/* 4. Remove Button */}
                                    <div className="col-span-1 flex justify-center w-full md:w-auto mt-2 md:mt-0">
                                        <button 
                                            onClick={() => removeItem(item.id)}
                                            className="text-gray-300 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all"
                                            title="Remove item"
                                        >
                                            <FaTrashAlt size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-4">
                                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00c853] font-semibold transition-colors">
                                    <FaArrowLeft size={14} /> Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT: Order Summary */}
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h3>
                                
                                <div className="flex flex-col gap-4 mb-6 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className="font-semibold text-gray-900">฿ {subtotal}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping <br/><span className="text-[11px] text-gray-400">(Free over ฿700)</span></span>
                                        <span className="font-semibold text-gray-900">
                                            {shipping === 0 ? <span className="text-[#00c853]">Free</span> : `฿ ${shipping}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tax</span>
                                        <span className="font-semibold text-gray-900">Calculated at checkout</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-4 mb-8 flex justify-between items-end">
                                    <span className="text-lg font-bold text-gray-900">Total</span>
                                    <span className="text-3xl font-black text-[#00c853]">฿ {total}</span>
                                </div>

                                {/* FIXED: Added routing to the Checkout page */}
                                <Button 
                                    component={Link}
                                    to="/checkout"
                                    className="!bg-[#00c853] !hover:bg-[#00a846] !text-white !font-bold !py-4 !rounded-lg !text-lg w-full shadow-lg shadow-green-100 mb-3"
                                >
                                    Proceed to Checkout
                                </Button>
                                
                                <div className="text-center text-xs text-gray-400 font-medium flex items-center justify-center gap-2">
                                    <span className="w-full h-px bg-gray-100"></span>
                                    <span className="whitespace-nowrap">Secure Checkout</span>
                                    <span className="w-full h-px bg-gray-100"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;