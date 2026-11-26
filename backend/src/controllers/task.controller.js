import Tasks from "../data/task.js"


// Get All Task 
export const getAllTasks =  async (req, res)=>{
try {
    const totalTasks = Tasks.length;
    res.status(200).json({
        success:true,
        totalTasks :totalTasks  ,
        tasks:Tasks
    })
} catch (error) {
}
}






































