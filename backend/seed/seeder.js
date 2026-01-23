
import Product from "../model/product.js";
import { products } from "./products.js";
import ConnectDB from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();



const seedProducts = async () => {
  try {
    
ConnectDB()
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log(" Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
