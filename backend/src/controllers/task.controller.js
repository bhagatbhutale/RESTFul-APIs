import Tasks from "../data/task.js";

// Get All Tasks
export const getAllTasks = async (req, res) => {
  try {
    const totalTasks = Tasks.length;
    res.status(200).json({
      success: true,
      totalTasks: totalTasks,
      tasks: Tasks,
    });
  } catch (error) {
    res.send(400).json({
      success: false,
      message: "Error AllTasks Getting",
    });
  }
};

//  Create a Task
export const createTask = async (req, res) => {
  try {
    const { id, title, description } = req.body;

    // If field are not provide 
    if (!id || !title || !description) {
      return res.send(400).json({
        success: false,
        message: "ID, Title, and Description are Required",
      });
    }

    // Send a Error Message If Title and Description is Not a String 
    if(typeof id !=="number" || id <= 0  || typeof title !== "string" || typeof description !== "string" || title == "" || description == ""){
      return res.status(400).json({
        success:false,
        message: "ID must positive number, and title And Description String Required"
      })
    }

    // check Duplicate ID in Tasks 
    const existingTask = Tasks.find((task)=>task.id === id);

    if(existingTask){
      return res.status(400).json({
        success:false,
        message:"Task id Is Already Given ! Give Another ID"
      })
    }
    // Create New Task
    const newTask = {
      id,
      title:title.trim(),
      description:description.trim(),
    }

    // Push Into the tasks 
    Tasks.push(newTask)

    res.status(201).json({
      success:true,
      message:"Task Created Successfully",
      Task:newTask
    })
    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"Task Creating Internal Server Error"
    })
      console.log(error.message);
  }


};
