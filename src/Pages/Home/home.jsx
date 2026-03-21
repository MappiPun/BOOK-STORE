import React, { useState, useEffect } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import ProductSlider from "../../components/Products/ProductSlider";
import NewsletterBanner from "../../components/Footer/NewsletterBanner";
import { CircularProgress } from "@mui/material";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // 1. Fetch live books from your backend
    const fetchLiveBooks = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error("Storefront fetch error:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLiveBooks();
    }, []);

    // 2. Logic to filter your books into sections
    // Trending: Just show the first 8 books
    const trendingBooks = products.slice(0, 8);
    
    // Best Sellers: Only show books where you checked "Best Seller"
    const bestSellers = products.filter(book => book.isBestSeller === true);
    
    // New Arrivals: The backend already sorts these by date!
    const newArrivals = products.slice(0, 10);

    return (
        <div className="w-full flex flex-col gap-12">
            <div className="w-full h-[30px] block"></div>
            
            <div className="w-full">
                <HomeSlider />
            </div>
            
            {loading ? (
                <div className="flex justify-center p-20"><CircularProgress color="success" /></div>
            ) : (
                <>
                    {/* 3. Pass the REAL data into your sliders */}
                    <ProductSlider title="Trending Now" products={trendingBooks} />

                    <ProductSlider title="Best Sellers" products={bestSellers} />
                    
                    <ProductSlider title="New Arrivals" products={newArrivals} />
                </>
            )}

            <NewsletterBanner />
        </div>
    );
};

export default Home;