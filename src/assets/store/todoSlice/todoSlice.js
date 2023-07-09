import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listTodo: [
    {
      id: 1,
      title: 'Di choi',
      completed: false
    },
    {
      id: 2,
      title: 'Giat quan ao',
      completed: false
    },
    {
      id: 3,
      title: 'Di hoc',
      completed: false
    },
  ]
}


export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      action.payload.title !== '' ? state.listTodo.push(action.payload) : alert('Please add your list')
    },
    deleteTodo: (state, action) => {
      // console.log(action);
      const itemId = action.payload
      state.listTodo = state.listTodo.filter((item) => {
        return item.id !== itemId
      })
    },
    completedTodo: (state, action) => {
      const itemId = action.payload
      state.listTodo = state.listTodo.map((item) => {
        itemId === item.id ?
          item.completed = !item.completed :
          item
        // console.log(item.completed);
        return item
      })
    },
    updateTodo: (state, action) => {
      state.listTodo.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title
        }
      })
    },
    showCompletedTask: (state, action) => {
      state.listTodo = state.listTodo.filter(item => {
        return item.completed === true;
      })
    },
    completedAllTasks: (state) => {
      state.listTodo = state.listTodo.filter(item => {
        return item.completed = true;
      })
    },
    deleteCompletedTasks: (state) => {
      state.listTodo = state.listTodo.filter(item => {
        console.log('completed', item.completed);
        return item.completed = false;
      })
    }
  },
});

export const { completedAllTasks, addTodo, deleteTodo, completedTodo, updateTodo, showCompletedTask, deleteCompletedTasks } = todoSlice.actions; //Export actions cho các components sử dụng

export default todoSlice.reducer; // Export reducer gắn vào store