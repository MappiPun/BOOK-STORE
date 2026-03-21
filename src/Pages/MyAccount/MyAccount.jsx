import React, { useState } from 'react';
import { useUser } from "@clerk/clerk-react"; // Import Clerk hook
import { FaUser, FaBox, FaMapMarkerAlt, FaSignOutAlt, FaShoppingBag } from "react-icons/fa";
import { Button } from '@mui/material';

const MyAccount = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const [activeTab, setActiveTab] = useState('orders');

    // Mock Order History
    const orders = [
        { id: "#ORD-9921", date: "Mar 10, 2026", total: 709, status: "Delivered" },
        { id: "#ORD-8842", date: "Feb 15, 2026", total: 450, status: "Processing" },
    ];

    if (!isLoaded || !isSignedIn) {
        return <div className="min-h-screen flex items-center justify-center">Loading your profile...</div>;
    }

    return (
        <div className="w-full bg-gray-50 min-h-screen pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                
                <h1 className="text-3xl font-black text-gray-900 mb-8">My Account</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* LEFT SIDEBAR: Navigation */}
                    <div className="w-full lg:w-1/4 flex flex-col gap-2">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-4 flex items-center gap-4">
                            <img src={user.imageUrl} alt="Profile" className="w-16 h-16 rounded-full border-2 border-[#00c853]" />
                            <div>
                                <h2 className="font-bold text-gray-900 text-lg line-clamp-1">{user.fullName || "Reader"}</h2>
                                <p className="text-xs text-gray-400 font-medium">Member since 2026</p>
                            </div>
                        </div>

                        <nav className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <button 
                                onClick={() => setActiveTab('profile')}
                                className={`w-full flex items-center gap-3 px-6 py-4 text-sm font-bold transition-colors ${activeTab === 'profile' ? 'bg-green-50 text-[#00c853] border-r-4 border-[#00c853]' : 'text-gray-500 hover:bg-gray-50'}`}
                            >
                                <FaUser /> Personal Info
                            </button>
                            <button 
                                onClick={() => setActiveTab('orders')}
                                className={`w-full flex items-center gap-3 px-6 py-4 text-sm font-bold transition-colors ${activeTab === 'orders' ? 'bg-green-50 text-[#00c853] border-r-4 border-[#00c853]' : 'text-gray-500 hover:bg-gray-50'}`}
                            >
                                <FaBox /> Order History
                            </button>
                            <button 
                                onClick={() => setActiveTab('addresses')}
                                className={`w-full flex items-center gap-3 px-6 py-4 text-sm font-bold transition-colors ${activeTab === 'addresses' ? 'bg-green-50 text-[#00c853] border-r-4 border-[#00c853]' : 'text-gray-500 hover:bg-gray-50'}`}
                            >
                                <FaMapMarkerAlt /> My Addresses
                            </button>
                        </nav>
                    </div>

                    {/* RIGHT: Content Area */}
                    <div className="w-full lg:w-3/4">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[400px]">
                            
                            {/* 1. Profile Tab */}
                            {activeTab === 'profile' && (
                                <div className="animate-in fade-in duration-500">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                                            <p className="text-gray-900 font-semibold border-b border-gray-100 pb-2 mt-1">{user.fullName}</p>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                                            <p className="text-gray-900 font-semibold border-b border-gray-100 pb-2 mt-1">{user.primaryEmailAddress?.emailAddress}</p>
                                        </div>
                                    </div>
                                    <Button className="!bg-[#00c853] !hover:bg-[#00a846] !text-white !font-bold !py-2.5 !px-8 !rounded-lg !mt-10 shadow-md">
                                        Update Profile
                                    </Button>
                                </div>
                            )}

                            {/* 2. Orders Tab */}
                            {activeTab === 'orders' && (
                                <div className="animate-in fade-in duration-500">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">My Orders</h3>
                                    {orders.length > 0 ? (
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                                                        <th className="pb-4">Order ID</th>
                                                        <th className="pb-4">Date</th>
                                                        <th className="pb-4">Total</th>
                                                        <th className="pb-4">Status</th>
                                                        <th className="pb-4 text-right">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    {orders.map((order) => (
                                                        <tr key={order.id} className="border-b border-gray-50">
                                                            <td className="py-4 font-bold text-gray-800">{order.id}</td>
                                                            <td className="py-4 text-gray-500">{order.date}</td>
                                                            <td className="py-4 font-bold text-gray-900">฿ {order.total}</td>
                                                            <td className="py-4">
                                                                <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                                                    {order.status}
                                                                </span>
                                                            </td>
                                                            <td className="py-4 text-right">
                                                                <button className="text-[#00c853] font-bold hover:underline">Details</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center py-12 text-center">
                                            <FaShoppingBag className="text-gray-100 text-6xl mb-4" />
                                            <p className="text-gray-400 font-medium">You haven't placed any orders yet.</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* 3. Addresses Tab */}
                            {activeTab === 'addresses' && (
                                <div className="animate-in fade-in duration-500 text-center py-20">
                                    <FaMapMarkerAlt className="text-gray-100 text-6xl mx-auto mb-4" />
                                    <h4 className="text-lg font-bold text-gray-800">No Addresses Saved</h4>
                                    <p className="text-gray-400 text-sm mb-6">Add an address to speed up your checkout process.</p>
                                    <Button className="!border-2 !border-[#00c853] !text-[#00c853] !font-bold !py-2 !px-8 !rounded-lg hover:!bg-green-50">
                                        Add New Address
                                    </Button>
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyAccount;