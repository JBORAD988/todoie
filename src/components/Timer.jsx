import React ,{useEffect , useState} from "react";

const Timer = () => {

    const [timer, setTimer] = useState(0);

    // useEffect(()=>{
    //
    //     console.log('Timer mounted');
    //     const timer = setTimeout(() => {
    //         setTimer((prev) => prev + 1);
    //     }, 1000);
    //
    //     return () => {
    //         console.log('Timer unmounted...');
    //     }
    // },[timer])


    useEffect(()=>{

        console.log('Timer mounted');
        const timer = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);

        return function (){
            clearInterval(timer);
        }
    },[timer])


    return (
        <div>
            <p>StopWatch</p>
            <p>Current time is {timer}</p>
            <button onClick={()=> setTimer(0) } >Reset Timer </button>
        </div>

    )






}

export default Timer;