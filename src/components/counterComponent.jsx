import React ,{useState} from "react";


const CounterComponent = () => {
    const [count, setCount] = useState(0);
    const [val , setVal] = useState('Please Perform Increment or Decrement');

    return (
        <div>
            <p>{count}</p>
            <p> Number is : {val}</p>
            <button className="Todo-Butoom"  onClick={() => { setCount(count + 1); setVal((count + 1) % 2 === 0 ? 'Even' : 'Odd'); }} >+ Increment</button>
            <button className="Todo-Butoom" onClick={() => setCount(count - 1)}>- Decrement</button>
        </div>
    );
}


export default CounterComponent;