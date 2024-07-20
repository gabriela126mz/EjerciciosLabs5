import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "../components/TaskCard";
import { selectAllTasks } from "../redux/reducers/taskReducer"; 


const TaskList = () => {
    const tasks = useSelector(selectAllTasks);
    return (
        <div className="task-list">
            <h2>Task List</h2>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;
