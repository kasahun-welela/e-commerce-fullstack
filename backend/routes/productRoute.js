import { Router } from "express";
import {getAllProducts,createProduct,getSingleProduct,deleteProduct,updateProduct} from "../controllers/productController.js";

const router =Router()

router.get("/products",getAllProducts)
router.post("/product/new",createProduct)
router.get("/product/:id",getSingleProduct)
router.delete("/product/:id",deleteProduct)
router.put("/product/:id",updateProduct)

export default router