import dotenv from "dotenv"
import app from "./app.js"
import ConnectDB from "./config/db.js"

//handle uncaught exception
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message);
  process.exit(1);
});

dotenv.config()
const PORT = process.env.PORT
ConnectDB()
console.log(a)

app.listen(PORT, ()=>{
    console.log(`the server started on ${PORT}`)
})

//handle unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
  process.exit(1);
});
