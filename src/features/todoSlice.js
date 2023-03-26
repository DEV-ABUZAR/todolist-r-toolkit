

// import { createSlice } from "@reduxjs/toolkit";



// const initialState = {
//     todos: ""
// }
  
// const todoSlice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push(action.payload);
//       localStorage.setItem("todos", JSON.stringify(state.todos));
//     },
//     deleteTodo: (state, action) => {
//       state.todos = state.todos.filter(todo => todo !== action.payload);
//       localStorage.setItem("todos", JSON.stringify(state.todos));
//     }
//   }
// });

// export const { addTodo, deleteTodo } = todoSlice.actions;
// export default todoSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), task: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      state.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload.id);
      state[todoIndex] = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;






