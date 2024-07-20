import axios from 'axios'; 
import {
  TASKS_ADD_TASK,
  TASKS_TOGGLE_STATUS_TASK,
  TASKS_REMOVE_TASK,
  TASKS_FETCH_ALL_TASKS,
} from '../redux/actions/actionTypes';  

const API_URL = 'http://localhost:3000/tasks';


export const addTask = (task) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, task);
    dispatch({
      type: TASKS_ADD_TASK,
      payload: response.data, 
    });
  } catch (error) {
    console.error('Error adding task:', error);  
    throw new Error(error.message);
  }
};

export const toggleCompleteTask = (task) => async (dispatch) => {
  const updatedTask = { ...task, completed: !task.completed };
  try {
    await axios.put(`${API_URL}/${task.id}`, updatedTask);
    dispatch({
      type: TASKS_TOGGLE_STATUS_TASK,
      payload: updatedTask,
    });
  } catch (error) {
    console.error('Error toggling task status:', error); 
    throw new Error(error.message);
  }
};


export const removeTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${taskId}`);
    dispatch({
      type: TASKS_REMOVE_TASK,
      payload: taskId,
    });
  } catch (error) {
    console.error('Error removing task:', error);  
  }
};


export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch({
      type: TASKS_FETCH_ALL_TASKS,
      payload: response.data, 
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);  
    throw new Error(error.message);
  }
};
