import React, { useState, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";
import { FaBoxOpen, FaPlus, FaTrashAlt, FaCloudUploadAlt } from "react-icons/fa";
import { Button, TextField, MenuItem, Select, FormControl, InputLabel, CircularProgress } from '@mui/material';

const AdminDashboard = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const [activeTab, setActiveTab] = useState('products');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [formData, setFormData] = useState({
        title: '', author: '', price: '', oldPrice: '',
        stock: '', category: '', image: '', description: ''
    });

    // 1. Fetch Products from Backend
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isSignedIn && user?.publicMetadata?.role === 'admin') {
            fetchProducts();
        }
    }, [isSignedIn, user]);

    // 2. Handle File Drop / Selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    // 3. Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Book Published Successfully! 🎉");
                setFormData({ title: '', author: '', price: '', oldPrice: '', stock: '', category: '', image: '', description: '' });
                setActiveTab('products');
                fetchProducts();
            }
        } catch (error) {
            alert("Error publishing book. Check server connection.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            try {
                await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
                fetchProducts();
            } catch (error) {
                console.error("Delete failed:", error);
            }
        }
    };

    // Check loading state first
    if (!isLoaded) return <div className="min-h-screen flex items-center justify-center"><CircularProgress color="success" /></div>;

    // Authorization check: Must be signed in AND have 'admin' role in metadata
    const isAdmin = user?.publicMetadata?.role === 'admin';

    if (!isSignedIn || !isAdmin) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-red-100 max-w-md">
                    <h1 className="text-6xl mb-4">🚫</h1>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">Restricted Area</h2>
                    <p className="text-gray-500 mb-6">
                        Sorry! You need Admin privileges to access the Beetroot Control Panel.
                    </p>
                    <Button
                        href="/"
                        variant="contained"
                        className="!bg-black !rounded-xl !py-3 !px-8 !font-bold"
                    >
                        Back to Store
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-gray-50 min-h-screen pb-20 pt-10">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-black text-gray-900">Admin Control Panel</h1>
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm">
                        <img src={user.imageUrl} alt="Admin" className="w-8 h-8 rounded-full" />
                        <span className="font-bold text-sm text-gray-800">Hi, {user.firstName}</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* SIDEBAR */}
                    <div className="w-full lg:w-1/4">
                        <nav className="bg-white rounded-2xl shadow-sm border overflow-hidden sticky top-24">
                            <button onClick={() => setActiveTab('products')} className={`w-full flex items-center gap-3 px-6 py-4 text-sm font-bold ${activeTab === 'products' ? 'bg-green-50 text-[#00c853] border-r-4 border-[#00c853]' : 'text-gray-500'}`}>
                                <FaBoxOpen size={16} /> Manage Products
                            </button>
                            <button onClick={() => setActiveTab('add-product')} className={`w-full flex items-center gap-3 px-6 py-4 text-sm font-bold ${activeTab === 'add-product' ? 'bg-green-50 text-[#00c853] border-r-4 border-[#00c853]' : 'text-gray-500'}`}>
                                <FaPlus size={16} /> Add New Book
                            </button>
                        </nav>
                    </div>

                    {/* CONTENT AREA */}
                    <div className="w-full lg:w-3/4">
                        <div className="bg-white rounded-2xl shadow-sm border p-8">
                            {activeTab === 'products' && (
                                <div>
                                    <h3 className="text-xl font-bold mb-6">Current Inventory</h3>
                                    {loading ? <CircularProgress color="success" /> : (
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="text-xs font-bold text-gray-400 uppercase border-b bg-gray-50">
                                                    <th className="p-4">Book</th>
                                                    <th className="p-4">Price</th>
                                                    <th className="p-4 text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map((product) => (
                                                    <tr key={product._id} className="border-b hover:bg-gray-50/50">
                                                        <td className="p-4 flex items-center gap-3">
                                                            <img src={product.image} className="w-10 h-14 object-cover rounded shadow-sm" alt="cover" />
                                                            <div>
                                                                <p className="font-bold">{product.title}</p>
                                                                <p className="text-xs text-gray-400">{product.author}</p>
                                                            </div>
                                                        </td>
                                                        <td className="p-4 font-bold">฿{product.price}</td>
                                                        <td className="p-4 text-right">
                                                            <button onClick={() => handleDelete(product._id)} className="text-red-400 hover:text-red-600"><FaTrashAlt size={16} /></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            )}

                            {activeTab === 'add-product' && (
                                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                    <div className="w-full">
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Book Cover Image</label>
                                        <div className={`relative border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center transition-colors ${formData.image ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-[#00c853]'}`}>
                                            <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                            {formData.image ? (
                                                <div className="flex flex-col items-center">
                                                    <img src={formData.image} alt="Preview" className="w-32 h-44 object-cover rounded shadow-md mb-2" />
                                                    <p className="text-xs text-green-600 font-bold">Image Uploaded! Click or drag to change.</p>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col items-center text-gray-400">
                                                    <FaCloudUploadAlt size={40} className="mb-2" />
                                                    <p className="text-sm font-medium">Drag and drop book cover, or click to browse</p>
                                                    <p className="text-xs mt-1">PNG, JPG up to 10MB</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <TextField fullWidth label="Book Title" required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                                        <TextField fullWidth label="Author Name" required value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <TextField fullWidth label="Price (฿)" type="number" required value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                                        <TextField fullWidth label="Stock" type="number" required value={formData.stock} onChange={(e) => setFormData({ ...formData, stock: e.target.value })} />
                                        <FormControl fullWidth>
                                            <InputLabel>Category</InputLabel>
                                            <Select 
    label="Category" 
    value={formData.category} 
    onChange={(e) => setFormData({...formData, category: e.target.value})} 
    required
>
    <MenuItem value="Fiction">Fiction</MenuItem>
    <MenuItem value="Non-Fiction">Non-Fiction</MenuItem>
    <MenuItem value="Mystery">Mystery</MenuItem>
    <MenuItem value="Horror">Horror</MenuItem>
    <MenuItem value="SciFi & Fantasy">SciFi & Fantasy</MenuItem>
    <MenuItem value="Education">Education</MenuItem>
    <MenuItem value="History">History</MenuItem>
    <MenuItem value="Children Book">Children Book</MenuItem>
    <MenuItem value="Lifestyle">Lifestyle</MenuItem>
    <MenuItem value="Speciality">Speciality</MenuItem>
</Select>
                                        </FormControl>
                                    </div>
                                    <TextField fullWidth label="Description" multiline rows={4} required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                                    <Button type="submit" variant="contained" className="!bg-[#00c853] !font-bold !py-4 shadow-lg shadow-green-100">Publish Book to Cloud</Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;