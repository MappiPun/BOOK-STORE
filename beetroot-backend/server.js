const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 1. Import your Product model
const Product = require('./models/Product');

const app = express();

// --- Middleware ---
app.use(cors()); // Allow React to talk to this server
app.use(express.json({ limit: '25mb' })); // Allow large image uploads
app.use(express.urlencoded({ limit: '25mb', extended: true }));

// --- Database Connection ---
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Successfully connected to MongoDB!"))
    .catch((error) => console.log("❌ MongoDB connection error:", error));

// --- API Routes ---

/**
 * 2. GET: Fetch ALL products
 * Required for Admin Inventory and Homepage sections.
 */
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 }); 
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products", error: error.message });
    }
});

/**
 * 3. GET: Fetch products by category
 * Used for the Category Page (e.g., /category/Lifestyle).
 */
app.get('/api/products/category/:catName', async (req, res) => {
    try {
        //
        const products = await Product.find({ category: req.params.catName }); 
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch category products", error: error.message });
    }
});

/**
 * 4. GET: Fetch a single product by ID
 * Used for the Product Detail Page.
 */
app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); //
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch product", error: error.message });
    }
});

// 5. POST: Add a new product
app.post('/api/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body); //
        const savedProduct = await newProduct.save(); 
        res.status(201).json({ message: "Product added successfully!", product: savedProduct });
    } catch (error) {
        res.status(400).json({ message: "Failed to add product", error: error.message });
    }
});

// 6. DELETE: Remove a product by ID
app.delete('/api/products/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete product", error: error.message });
    }
});

// Basic Test Route
app.get('/', (req, res) => {
    res.send("Beetroot API is running!");
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});