import React, { useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

// import thunk from 'react-thunk';

import './App.css';

import { createServer } from "miragejs"
// import { useDispatch } from 'react-redux';

// import { addMultiTodo } from './redux/reducer';
import { Provider } from 'react-redux';

import store from './redux/store';
import { addMultiTodo } from './redux/reducer';

function thunk(dispatch, getState) {
  // const res = await fetch("/api/users");
  // const data = await res.json();
  const data = localStorage.getItem("data");
  if (data) {
    const jsonData = JSON.parse(data);
    dispatch(addMultiTodo(jsonData));
  }
}

store.dispatch(thunk);
let server = createServer()
server.get("/api/users", { todo: [
  { id: 1, text: "Add authentication to the Todo app."},
  { id: 2, text: "Implement a feature to edit existing todos."},
  { id: 3, text: "Style the Todo app for a better user experience."},
  { id: 4, text: "Refactor the Redux state management for todos.,"},
]
})

function App() {
  
  return (
    <Provider store={store}>
    <div className='container'>
      <div className='todo--container'>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
    </Provider>
  );
}

export default App;
