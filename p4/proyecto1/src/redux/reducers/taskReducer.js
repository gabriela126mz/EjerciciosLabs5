import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as TASK_API from "@/api/task"; 

export const addTaskThunk = createAsyncThunk(
  "tasks/addTask",
  async (task) => {
    try {
      return await TASK_API.addTask(task);
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const toggleStatusTaskThunk = createAsyncThunk(
  "tasks/toggleStatusTask",
  async (task) => {
    try {
      return await TASK_API.toggleStatusTask(task);
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const removeTaskThunk = createAsyncThunk(
  "tasks/removeTask",
  async (taskId) => {
    try {
      await TASK_API.removeTask(taskId);
      return taskId; 
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getAllTasksThunk = createAsyncThunk(
  "tasks/getAllTasks",
  async () => {
    try {
      return await TASK_API.getAllTasks();
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

"task/getAllTasks/fullfilled"
"task/getAllTasks/pending"
"task/getAllTasks/rejected"

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};


const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasksThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTasksThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getAllTasksThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTaskThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTaskThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
      })
      .addCase(addTaskThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(toggleStatusTaskThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleStatusTaskThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      })
      .addCase(toggleStatusTaskThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeTaskThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeTaskThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(removeTaskThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state,action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});


export const { fetchAllTasks, addTask, toggleStatusTask, removeTask } = taskSlice.actions;

export const getAllTasks = (state) => state.tasks.tasks;
export const getTasksError = (state) => state.tasks.error;
export const getTasksLoading = (state) => state.tasks.loading;

export default taskSlice.reducer;