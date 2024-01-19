// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTodo } from './redux/reducer';

// const AddTodo = () => {
//   const dispatch = useDispatch();
//   const [text, setText] = useState('');

//   const handleAddTodo = () => {
//     if (text.trim() !== '') {
//       dispatch(addTodo(text));
//       setText('');
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={handleAddTodo}>Add Todo</button>
//     </div>
//   );
// };

// export default AddTodo;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, setSearchTerm } from "./redux/reducer";
import "./AddTodo.css";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      dispatch(setSearchTerm("")); // Clear search term after adding a new todo
      setText("");
    }
  };

  return (
    <div className="option--todo">
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
