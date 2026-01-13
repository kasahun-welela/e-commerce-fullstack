import { Router } from "express";
import {getAllProducts,createProduct,getSingleProduct} from "../controllers/productController.js";

const router =Router()

router.get("/products",getAllProducts)
router.post("/product/new",createProduct)
router.get("/product/:id",getSingleProduct)
export default router