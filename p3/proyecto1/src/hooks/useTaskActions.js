import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  toggleCompleteTask,
  removeTask,
  fetchTasks,
  addTask,
} from "../api/task";

const useTaskActions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleTaskCompletion = async (taskId) => {
    try {
      setLoading(true);
      await dispatch(toggleCompleteTask(taskId));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeTaskById = async (taskId) => {
    try {
      setLoading(true);
      await dispatch(removeTask(taskId));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllTasks = async () => {
    try {
      setLoading(true);
      await dispatch(fetchTasks());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addNewTask = async (newTask) => {
    try {
      setLoading(true);
      await dispatch(addTask(newTask));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    toggleTaskCompletion,
    removeTaskById,
    fetchAllTasks,
    addNewTask,
  };
};

export default useTaskActions;
