import {addTask,getAllTasks,completeTask} from './task.js'

// add a task
let task=addTask("eating","High",'2026-12-12')
addTask("sleeping","High",'2024-12-12')

const tasks=getAllTasks()
console.log(tasks)
