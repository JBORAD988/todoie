import './App.css';
import React from 'react';
import Header from './components/header';
import TodoItem from './components/todo-item';
import AddTodoButton from './components/add-todo-button';
import CounterComponent from "./components/counterComponent";


const App = () => {

  return (
    <div className='Todo-Container'>
        <CounterComponent />


      <Header text="Todoie App" />
        <TodoItem text="Madico" />
        <TodoItem text="code" completed={true} />
        <TodoItem text="bike service" />
<AddTodoButton />
    </div>

  );
}

export default App;
