import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaLock, FaCreditCard, FaPaypal, FaTruck } from "react-icons/fa";
import { Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

const Checkout = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('card');

    // Mock Summary Data (In a real app, you'd pull this from a Cart Context)
    const subtotal = 709;
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        alert("Order Placed Successfully! (Mock)");
        navigate("/");
    };

    return (
        <div className="w-full bg-gray-50 min-h-screen pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                
                {/* Back to Cart */}
                <Link to="/cart" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00c853] font-semibold transition-colors mb-8">
                    <FaChevronLeft size={12} /> Back to Cart
                </Link>

                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* LEFT: Checkout Forms */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-8">
                        
                        {/* 1. Shipping Information */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="bg-[#00c853] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
                                Shipping Information
                            </h2>
                            
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <TextField fullWidth label="First Name" variant="outlined" size="small" required />
                                <TextField fullWidth label="Last Name" variant="outlined" size="small" required />
                                <div className="md:col-span-2">
                                    <TextField fullWidth label="Address" variant="outlined" size="small" required />
                                </div>
                                <TextField fullWidth label="City" variant="outlined" size="small" required />
                                <TextField fullWidth label="Zip Code" variant="outlined" size="small" required />
                                <div className="md:col-span-2">
                                    <TextField fullWidth label="Phone Number" variant="outlined" size="small" required />
                                </div>
                            </form>
                        </div>

                        {/* 2. Payment Method */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="bg-[#00c853] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
                                Payment Method
                            </h2>

                            <FormControl component="fieldset" className="w-full">
                                <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                    
                                    {/* Credit Card Option */}
                                    <div className={`border-2 rounded-xl p-4 mb-3 transition-all ${paymentMethod === 'card' ? 'border-[#00c853] bg-green-50/30' : 'border-gray-100'}`}>
                                        <FormControlLabel value="card" control={<Radio sx={{ '&.Mui-checked': { color: '#00c853' } }} />} 
                                            label={<span className="font-bold text-gray-800 flex items-center gap-2"><FaCreditCard className="text-gray-400" /> Credit / Debit Card</span>} 
                                        />
                                        {paymentMethod === 'card' && (
                                            <div className="grid grid-cols-2 gap-4 mt-4 animate-in fade-in duration-300">
                                                <div className="col-span-2">
                                                    <TextField fullWidth label="Card Number" placeholder="0000 0000 0000 0000" variant="outlined" size="small" />
                                                </div>
                                                <TextField label="Expiry Date" placeholder="MM/YY" variant="outlined" size="small" />
                                                <TextField label="CVV" placeholder="123" variant="outlined" size="small" />
                                            </div>
                                        )}
                                    </div>

                                    {/* PayPal Option */}
                                    <div className={`border-2 rounded-xl p-4 mb-3 transition-all ${paymentMethod === 'paypal' ? 'border-[#00c853] bg-green-50/30' : 'border-gray-100'}`}>
                                        <FormControlLabel value="paypal" control={<Radio sx={{ '&.Mui-checked': { color: '#00c853' } }} />} 
                                            label={<span className="font-bold text-gray-800 flex items-center gap-2"><FaPaypal className="text-[#003087]" /> PayPal</span>} 
                                        />
                                    </div>

                                    {/* Cash on Delivery */}
                                    <div className={`border-2 rounded-xl p-4 transition-all ${paymentMethod === 'cod' ? 'border-[#00c853] bg-green-50/30' : 'border-gray-100'}`}>
                                        <FormControlLabel value="cod" control={<Radio sx={{ '&.Mui-checked': { color: '#00c853' } }} />} 
                                            label={<span className="font-bold text-gray-800 flex items-center gap-2"><FaTruck className="text-gray-400" /> Cash on Delivery</span>} 
                                        />
                                    </div>

                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>

                    {/* RIGHT: Order Summary */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h3>
                            
                            <div className="flex flex-col gap-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal (3 items)</span>
                                    <span className="font-bold text-gray-900">฿ {subtotal}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-[#00c853] font-bold">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Estimated Tax</span>
                                    <span className="font-bold text-gray-900">฿ 0</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6 mb-8 flex justify-between items-end">
                                <span className="text-lg font-bold text-gray-900">Total</span>
                                <span className="text-4xl font-black text-[#00c853]">฿ {total}</span>
                            </div>

                            <Button 
                                onClick={handlePlaceOrder}
                                className="!bg-[#00c853] !hover:bg-[#00a846] !text-white !font-bold !py-4 !rounded-xl !text-lg w-full shadow-lg shadow-green-100 mb-6"
                            >
                                Place Order
                            </Button>
                            
                            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                                <FaLock size={12} />
                                <span className="font-medium">Secure SSL Encrypted Checkout</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;