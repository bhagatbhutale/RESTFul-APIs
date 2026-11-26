import express from "express"
import dotenv from "dotenv"
import router from "./routes/task.route.js";
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json())

// Home Route
app.get("/", (req, res)=>{
res.status(200).json({
    success:true,
    message:"Task Backend API Running"
})
})

// tasks route
app.use("/api/tasks", router)

app.listen(PORT, ()=>{
console.log(`Server is Running on PORT http://localhost:${PORT}`);
})


