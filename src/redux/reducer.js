// import { combineReducers, createSlice } from "@reduxjs/toolkit";

// const initialState = [
//     { id: 0, text: 'Learn React', completed: true },
//     { id: 1, text: 'Learn Redux', completed: false},
//     { id: 2, text: 'Build something fun!', completed: false }
// ];

// const reducer = function (state = initialState, action) {
//     switch (action.type) {
//         case 'todo/added': {
//             return {...state};
//         }
//         case 'todo/toggle': {
//             return {...state};
//         }
//     }
// }

// export default combineReducers({
//     reducer,
// });

// src/features/todo/todoSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       state.push({ id: Date.now(), text: action.payload, completed: false });
//     },
//   },
// });

// export const { addTodo } = todoSlice.actions;
// export default todoSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    searchTerm: '',
  },
  reducers: {
    addTodo: (state, action) => {
      
      const temp = {...state, list: [...state.list, { id: Date.now(), text: action.payload, completed: false }]};


      localStorage.setItem("data", JSON.stringify(temp));

      
      return temp;
    },
    setSearchTerm: (state, action) => {
      return {...state, searchTerm: action.payload};
    },
    addMultiTodo: (state, action) => {
      const temp = {
        ...state, 
        list: [...state.list, ...action.payload.list]
      };
      localStorage.setItem("data", JSON.stringify(temp));
      return temp;
    },
  },
});

export const { addMultiTodo, addTodo, setSearchTerm } = todoSlice.actions;
export default todoSlice.reducer;