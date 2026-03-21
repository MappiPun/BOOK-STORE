const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A book title is required"],
        trim: true
    },
    author: {
        type: String,
        required: [true, "An author name is required"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "A price is required"],
        min: [0, "Price cannot be negative"]
    },
    oldPrice: {
        type: Number,
        default: null
    },
    stock: {
        type: Number,
        required: [true, "Stock quantity is required"],
        min: [0, "Stock cannot be negative"],
        default: 1
    },
    category: {
    type: String,
    required: [true, "A category is required"],
    enum: [
        "Fiction", "Non-Fiction", "Mystery", "Horror", 
        "SciFi & Fantasy", "Education", "History", 
        "Children Book", "Lifestyle", "Speciality"
    ] 
},
    image: {
        type: String,
        required: [true, "An image URL is required"]
    },
    description: {
        type: String,
        required: [true, "A book description is required"]
    },
    // Adding some default hidden stats for the storefront display
    ratingCount: {
        type: Number,
        default: 0
    },
    isBestSeller: {
        type: Boolean,
        default: false
    }
}, { 
    timestamps: true // Automatically adds 'createdAt' and 'updatedAt' dates!
});

// Create and export the model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;