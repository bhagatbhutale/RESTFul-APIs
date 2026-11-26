import express from "express"
import { createTask, deleteTask, getAllTasks, updateTask } from "../controllers/task.controller.js";

const router = express.Router()

// Get All Task Route 
router.get("/", getAllTasks)
// create a Task Route
router.post("/",createTask)
// Update Task Route
router.put("/:id",updateTask)
// Delete Task Route
router.delete("/:id",deleteTask)


export default router;