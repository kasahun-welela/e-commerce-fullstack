import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import { validateProductQuery } from "../middlewares/productMiddleware.js";
import isAuthenticated from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/products",  validateProductQuery, getAllProducts);
router.post("/product/new", isAuthenticated, createProduct);
router.get("/product/:id", getSingleProduct);
router.delete("/product/:id", isAuthenticated, deleteProduct);
router.put("/product/:id", isAuthenticated, updateProduct);

export default router;
