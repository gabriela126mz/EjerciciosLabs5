import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const toggleStatusTask = async (task) => {
  const updatedTask = { ...task, completed: !task.completed };
  try {
    const response = await axios.put(`${API_URL}/${task.id}`, updatedTask);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
