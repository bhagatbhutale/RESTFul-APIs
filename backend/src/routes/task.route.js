import express from "express"
import { createTask, getAllTasks } from "../controllers/task.controller.js";

const router = express.Router()

// Get All Task Route 
router.get("/", getAllTasks)
// create a Task route
router.post("/",createTask)


export default router;