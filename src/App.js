import './App.css';
import React from 'react';
import Header from './components/header';
import TodoItem from './components/todo-item';
import AddTodoButton from './components/add-todo-button';


const App = () => {

  return (
    <div className='Todo-Container'>
      <Header />
        <TodoItem text="Madico" />
        <TodoItem text="code" />
        <TodoItem text="bike service" />
<AddTodoButton />
    </div>

  );
}

export default App;
