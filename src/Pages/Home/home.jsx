import React from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import ProductSlider from "../../components/Products/ProductSlider";
import NewsletterBanner from "../../components/Footer/NewsletterBanner";
import Footer from "../../components/Footer/Footer"; // <-- 1. Import your new Footer!

const Home = () => {
    return (
        <div className="w-full flex flex-col gap-12">
            
            {/* 1. BRUTE FORCE SPACER */}
            <div className="w-full h-[30px] block"></div>
            
            {/* 2. Hero Banner Slider */}
            <div className="w-full">
                <HomeSlider />
            </div>
            
            {/* 3. Trending Products Section */}
            <ProductSlider title="Trending Now" />

            {/* 4. Best Sellers Section */}
            <ProductSlider title="Best Sellers" />
            
            {/* 5. New Arrivals Section */}
            <ProductSlider title="New Arrivals" />

            {/* 6. Newsletter Banner */}
            <NewsletterBanner />

            {/* 7. Global Footer */}
            <Footer /> {/* <-- 2. Add it right at the very bottom! */}

        </div>
    );
};

export default Home;