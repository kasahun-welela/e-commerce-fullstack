import express from "express";
import products from "./routes/productRoute.js";
import auth from "./routes/authRoute.js";

const app = express();
app.use(express.json());

app.use("/api/v1", products);
app.use("/api/v1", auth);
export default app;
