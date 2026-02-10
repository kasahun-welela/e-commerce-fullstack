import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import { validateProductQuery } from "../middlewares/productMiddleware.js";
import isAuthenticated, { authorizeRoles } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/products", validateProductQuery, isAuthenticated, getAllProducts);
router.get("/product/:id", getSingleProduct);
// Admin routes
router.post("/product/new", isAuthenticated,authorizeRoles("admin"), createProduct);
router.delete("/product/:id", isAuthenticated,authorizeRoles("admin"), deleteProduct);
router.put("/product/:id", isAuthenticated,authorizeRoles("admin"), updateProduct);

export default router;
