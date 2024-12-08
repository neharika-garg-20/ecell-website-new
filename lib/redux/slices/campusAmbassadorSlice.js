import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: "John Doe",
    collegeName: "IIT BHU",
    collegeYear: "2024",
    phone: "123-456-7890",
    points: 1200,
    tasks: [
      { id: 1, title: "Get the startupjunction form filled by at least 10 people", completed: true, lastDate: "2024-10-10" },
      { id: 2, title: "Task 2", completed: false, lastDate: "2024-10-05" },
      { id: 3, title: "Task 3", completed: false, lastDate: "2024-10-08" },
    ],
  },
  leaderboard: [
    { name: "Alice", points: 1500 },
    { name: "Bob", points: 1400 },
    { name: "John Doe", points: 1200 },
  ],
  loading:true
};

const campusAmbassadorSlice = createSlice({
  name: 'campusAmbassador',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
    },
    addTask(state, action) {
      state.user.tasks.push(action.payload);
    },
    updateTask(state, action) {
      const { id, updates } = action.payload;
      const task = state.user.tasks.find(task => task.id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },
    updateLeaderboard(state, action) {
      state.leaderboard = action.payload;
    },
    updateLoading(state,action){
      state.loading=action.payload
    }
  },
});

export const { updateUser, addTask, updateTask,updateLeaderboard,updateLoading } = campusAmbassadorSlice.actions;

export default campusAmbassadorSlice.reducer;
