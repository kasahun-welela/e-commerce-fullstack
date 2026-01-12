import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        maxLength: [120, "Product name should not exceed 120 characters"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        default: 0.0,
        min: [0, "Product price cannot be negative"]
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Product category is required"],
        enum: {
            values: ["Electronics", "Cameras", "Laptops", "Accessories", "Headphones", "Food", "Books", "Clothes/Shoes", "Beauty/Health", "Sports", "Outdoor", "Home"],
            message: "Please select correct category for product"
        }
    },
    seller: {
        type: String,
        required: [true, "Product seller is required"]
    },
    stock: {
        type: Number,
        required: [true, "Product stock is required"],
        min: [0, "Stock cannot be negative"],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: String,
                ref: "User",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true,
                min: 0,
                max: 5
            },
            comment: {
                type: String,
                required: true
            }
        }
    ]
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;
