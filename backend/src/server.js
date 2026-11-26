import express from "express"
import dotenv from "dotenv"
import router from "./routes/task.route.js";
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;


app.get("/", (req, res)=>{
res.send("Backend RESTFull APIS is Running")
})

// task route
app.use("/api/tasks", router)

app.listen(PORT, ()=>{
console.log(`Server is Running on PORT http://localhost:${PORT}`);
})


