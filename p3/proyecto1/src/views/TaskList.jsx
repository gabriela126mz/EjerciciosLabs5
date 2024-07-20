import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../components/TaskCard';
import { selectAllTasks } from '../redux/reducers/taskReducer';
import useTaskActions from '../hooks/useTaskActions';

const TaskList = () => {
  const { tasks } = useSelector(selectAllTasks);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const { fetchAllTasks, addNewTask, loading, error } = useTaskActions();

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const handleAddTask = async () => {
    if (newTask.title.trim() !== '') {
      await addNewTask({
        id: tasks.length + 1,
        title: newTask.title,
        description: newTask.description,
        completed: false,
      });
      setNewTask({ title: '', description: '' });
    }
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error al cargar los datos: {error}</p>
      ) : (
        <>
          {Array.isArray(tasks) ? (
            tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <p>No tasks available</p>
          )}
          <div className="add-task">
            <input
              type="text"
              placeholder="Task Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <textarea
              placeholder="Task Description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <button onClick={handleAddTask}>Add Task</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskList;
