import './App.css';
import React from 'react';
import Header from './components/header';
import TodoItem from './components/todo-item';
import AddTodoButton from './components/add-todo-button';


const App = () => {

  return (
    <div className='Todo-Container'>
      <Header />
      <TodoItem />
<AddTodoButton />
    </div>

  );
}

export default App;
