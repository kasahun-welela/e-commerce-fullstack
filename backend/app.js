import express from "express"
import produts from "./routes/productRoute.js"



const app=express()
app.use(express.json())

app.use("/api/v1",produts)





export default app;