import { Router } from "express";
import {getAllProducts,createProduct,getSingleProduct,deleteProduct} from "../controllers/productController.js";

const router =Router()

router.get("/products",getAllProducts)
router.post("/product/new",createProduct)
router.get("/product/:id",getSingleProduct)
router.delete("/product/:id",deleteProduct)
export default router