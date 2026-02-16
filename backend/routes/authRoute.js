import express from "express";

import { registerUser, loginUser,logoutUser,forgotPassword } from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", logoutUser);
router.post("/auth/password/forgot", forgotPassword);

export default router;
