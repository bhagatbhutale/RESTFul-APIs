import Tasks from "../data/task.js";

// Get All Tasks : api/tasks
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

//  Create a Task : api/tasks
export const createTask = async (req, res) => {
  try {
    const { id, title, description } = req.body;

    // If field are not provide 
    if (!id || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "ID, Title, and Description are Required",
      });
    }

    // Send a Error Message If Title and Description is Not a String 
    if(typeof id !=="number" || id <= 0  || typeof title !== "string" || typeof description !== "string" || title == "" || description == ""){
      return res.status(400).json({
        success:false,
        message: "ID must positive number, and title And Description Required as String"
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

// Update a Task : api/tasks/:id
export const updateTask = async (req, res)=>{
  try {
    // get id from url and its Convert it Number
    const id = Number(req.params.id);

    // check id is valid 
    if(typeof id !== "number" || id <= 0){
      return res.status(400).json({
        success:false,
        message:"Invalid Task ID"
      })
    }

    const existingTask = Tasks.findIndex((task)  => task.id === id);

    // If Task id Not Found in Tasks
    if(existingTask === -1){
      return res.status(404).json({
        success:false,
        message:"Task Not Found"
      })
    }

    // Take Title and Description from body 
    const { title,description } = req.body;

    // if Not Provide any title or Desciption or is Not a String 
    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      title == "" ||
      description == ""
    ) {
      return res.status(400).json({
        success: false,
        message:
          "title And Description Required as String",
      });
    }

    const updatedTask = {
      id:Tasks[existingTask].id,
      title:title.trim(),
      description:description.trim()
    }

    Tasks[existingTask] = updatedTask;
    
    res.status(200).json({
      success:true,
      message:"Task Updated Successfully",
      UpdatedTask : updatedTask
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Task Updating Internal Server Error",
    });
    console.log(error.message);
  }
}

// Delete A Task using ID : api/tasks/:id
export const deleteTask = async (req, res)=>{
  try {
    // Delete Task id take form Url and convert it into Number
    const id = Number(req.params.id);

    if(typeof id !== "number" || id <= 0){
      return res.status(400).json({
        success:false,
        message:"Invalid Task ID"
      });
    }

    // find ID from Tasks  
    const taskId = Tasks.findIndex((task) => task.id === id);

    // If id Not Found in Tasks 
    if(taskId === -1){
      return res.status(404).json({
        success:false,
        message:"Task Not Found"
      })
    }

    // delete task 
    const deletedTask = Tasks.splice(taskId,1)[0]
    res.status(200).json({
      success:true,
      message:"Task Deleted Successfully",
      deletedTask:deleteTask
    })


  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Task Deleting Internal Server Error",
    });
    console.log(error.message);
  }
}

// Get Single Task using ID : api/tasks/:id
export const getSingleTask = async (req,res)=>{
  try {
    // get id from url and its Convert it Number
    const id = Number(req.params.id);

    // check id is valid
    if (typeof id !== "number" || id <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid Task ID",
      });
    }

    // find ID from Tasks
    const singleTaskId = Tasks.find((task) => task.id === id);

    // If id Not Found in Tasks
    if (!singleTaskId) {
      return res.status(404).json({
        success: false,
        message: "Task Not Found",
      });
    }

    res.status(200).json({
      success:true,
      task: singleTaskId
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Task Getting Internal Server Error",
    });
    console.log(error.message);
  }
}
