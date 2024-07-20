import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskCard from '../components/TaskCard'; 
import { selectAllTasks } from '../redux/reducers/taskReducer'; 
import { addTask } from '../redux/actions'; 

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleAddTask = () => {
    if (newTask.title.trim() !== '') {
      dispatch(
        addTask({
          id: tasks.length + 1,
          title: newTask.title,
          description: newTask.description,
          completed: false,
        })
      );
      setNewTask({ title: '', description: '' });
    }
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
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
    </div>
  );
};

export default TaskList;
