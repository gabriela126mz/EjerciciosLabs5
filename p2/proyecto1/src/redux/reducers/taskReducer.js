import {
    TASKS_ADD_TASK,
    TASKS_TOGGLE_STATUS_TASK,
    TASKS_REMOVE_TASK,
  } from '../actions/actionTypes'; 
  import data from '../../tasks.json'; 
  
  const initialState = {
    tasks: data,
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case TASKS_ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case TASKS_TOGGLE_STATUS_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, completed: !task.completed } 
              : task
          ),
        };
      case TASKS_REMOVE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  
  export const selectAllTasks = (state) => state.tasks.tasks; 
  