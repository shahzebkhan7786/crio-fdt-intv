import React, { useEffect, useRef, useState } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(null);
    const [running, setRunning] = useState(false);
    const timerId = useRef(null);
    useEffect(()=>{
        
        timerId.current = setInterval(() => {
            if(running){
            setTime(time=> time+1);
            }
        }, 1000);
        
        return ()=> clearInterval(timerId.current)
    }, [running])

    const handleReset = ()=>{
        setRunning(false);
        setTime(0)
    }

    const displayTime = seconds=>{
        let min = Math.floor(seconds/60);
        let ss = seconds % 60;

        if(!seconds) {
            min = 0;
            ss = 0;
        }
        
        let sec = ss > 9 ? ss : `0${ss}`;
        return `${min}:${sec}`
    }
    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {displayTime(time)}</p>
            <button onClick={()=> setRunning(prev=> !prev)}>{running ? "Stop" : "Start"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Stopwatch;