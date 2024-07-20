import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteTask, removeTask, fetchTasks, addTask } from '../api/task';

const useTaskActions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleTaskCompletion = async (taskId) => {
    try {
      setLoading(true);
      const data = await toggleCompleteTask(taskId);
      dispatch();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeTaskById = async (taskId) => {
    try {
      setLoading(true);
      const data = await removeTask(taskId);
      dispatch();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllTasks = async () => {
    try {
      setLoading(true);
      const data = await fetchTasks();
      dispatch();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addNewTask = async (newTask) => {
    try {
      setLoading(true);
      const data = await addTask(newTask);
      dispatch();
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
