import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import { validateProductQuery } from "../middlewares/productMiddleware.js";

const router = Router();

router.get("/products", validateProductQuery, getAllProducts);
router.post("/product/new", createProduct);
router.get("/product/:id", getSingleProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

export default router;
