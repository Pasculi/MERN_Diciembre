import './App.scss';
import React, { useState } from 'react';
import ToDoForm from './views/ToDoForm';
import ToDoList from './views/ToDoList';

function App() {

  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <ToDoForm todoList={todoList} setTodoList={setTodoList} />
      <ToDoList list={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
