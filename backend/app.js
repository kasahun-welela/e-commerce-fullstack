import express from "express";
import products from "./routes/productRoute.js";
import auth from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", products);
app.use("/api/v1", auth);
export default app;
