// TODO: Import validator functions
import {validateTitle,validatePriority,validateDueDate} from './validator.js';

const tasks = [];
                    
// 1. Add new task
function addTask(title, priority,date) {
// Validate using imported functions
if(!validateTitle() && !validatePriority() && !validateDueDate()){
    return "Ivalid Task)";
}
// If valid, add to tasks array
tasks.push({ title, priority,date});
// Return success/error message 
return true;
}
                    
// 2. Get all tasks
function getAllTasks() {
// Return all tasks
    return tasks;
}

// 3. Mark task as complete

function completeTask(taskId) {
// Find task and mark as complete
return true;
}

// Export functions
export{addTask,getAllTasks,completeTask};
