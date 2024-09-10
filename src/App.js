import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './components/header';
import TodoItem from './components/todo-item';
import AddTodoButton from './components/add-todo-button';
import CounterComponent from "./components/counterComponent";
import MyComponent from "./components/MyComponent";
import Timer from "./components/Timer";


// const App = () => {
//
//   return (
//     <div className='Todo-Container'>
//         <CounterComponent />
//
//
//       <Header text="Todoie App" />
//         <TodoItem text="Madico" />
//         <TodoItem text="code" completed={true} />
//         <TodoItem text="bike service" />
// <AddTodoButton />
//     </div>
//
//   );
// }

function  App(){

    const [isVisble, setIsVisible] = useState(false);
    const [HideShowCounter , setHideShowCounter] = useState("Show Counter");



    useEffect(() => {
        console.log('App component mounted');
        return () => {
        console.log('App component unmounted');
        };
    }, []);

    return (
        <div className='Todo-Container'>
            <Header text="Todoie App"/>
            {isVisble? <></> : <TodoItem text="Madico"/>}
            {isVisble? <></> : <AddTodoButton/>}
             <hr></hr>
            <button className="Todo-Butoom" onClick={() => { setIsVisible(!isVisble); setHideShowCounter(isVisble? "Show Counter" : "Hide Counter")}}>{HideShowCounter}</button>
            {isVisble ? <MyComponent/> : <></>}
            {isVisble ? <Timer /> : <></>}

        </div>
    );
}

export default App;
