import dotenv from "dotenv"
import app from "./app.js"
import ConnectDB from "./config/db.js"

dotenv.config()
const PORT = process.env.PORT
ConnectDB()

app.listen(PORT, ()=>{
    console.log(`the server started on ${PORT}`)
})

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
  process.exit(1);
});
