import {
    TASKS_ADD_TASK,
    TASKS_TOGGLE_STATUS_TASK,
    TASKS_REMOVE_TASK,
  } from "./actionTypes";
  
  export const addTask = (task) => ({
    type: TASKS_ADD_TASK,
    payload: task,
  });
  
  export const toggleCompleteTask = (taskId) => ({
    type: TASKS_TOGGLE_STATUS_TASK,
    payload: taskId,
  });
  
  export const removeTask = (taskId) => ({
    type: TASKS_REMOVE_TASK,
    payload: taskId,
  });
  