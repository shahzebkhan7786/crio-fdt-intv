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

    const displayTime = ()=>{
        if(!time) return '0:00';
        let mm = Math.floor(time/60);
        let ss = time % 60;
        let min = mm > 9 ? mm : `${mm}`;
        let sec = ss > 9 ? ss : `0${ss}`;
        return `${min} : ${sec}`
    }
    return (
        <div>
            <h1>Stopwatch</h1>
            Time: {displayTime()}
            <div>
                <button onClick={()=> setRunning(prev=> !prev)}>{running ? "Stop" : "Start"}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;