import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteTask, removeTask } from '../redux/actions';
import './TaskCard.css'; 

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleCompleteTask(task.id));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
  };

  const cardClassName = task.completed ? 'completed-task' : 'uncompleted-task';

  return (
    <div className={`task-card ${cardClassName}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-actions">
        <button  className="mark" onClick={handleToggleComplete}>Mark Completed</button>
        <button onClick={handleRemoveTask}>Delete Task</button>
      </div>
    </div>
  );
};

export default TaskCard;
