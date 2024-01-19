// import React from 'react';
// import { useSelector } from 'react-redux';

// const TodoList = () => {
//   const todos = useSelector((state) => state.todos);

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.text}</li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "./redux/reducer";

import "./TodoList.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);
  const searchTerm = useSelector((state) => state.todos.searchTerm);
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
    // localStorage.setItem("data", JSON.stringify(todos));
  return (
    <div className="todo--list">
      <input
        type="text"
        placeholder="Filter"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
