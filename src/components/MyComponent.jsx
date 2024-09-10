import React ,{useEffect , useState} from "react";

const MyComponent= () => {

    const [count, setCount] = useState(0);
    const [val , setVal] = useState('Please Perform Increment or Decrement');





    useEffect(()=>{

        console.log('MyComponent mounted');

        return () => {
            console.log('MyComponent unmounted...');
        }
    },[])

    useEffect(()=>{

        console.log("count got updated to",count)


        return () => {
            console.log(" Destroy count got updated to",count);
        }
    },[count])

    return (
        <div>
            <p>{count}</p>
            <p> Number is : {val}</p>
            <button   onClick={() => { setCount(count + 1); setVal((count + 1) % 2 === 0 ? 'Even' : 'Odd'); }} >+ Increment</button>
            <button onClick={() => setCount(count - 1)}>- Decrement</button>
        </div>
    );
}

export default MyComponent;