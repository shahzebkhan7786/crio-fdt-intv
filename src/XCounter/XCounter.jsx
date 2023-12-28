import React, { useState } from 'react';

const XCounter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(prev=> prev+1);
    }
    const handleDecrement = ()=>{
        setCount(prev=> prev-1);
    }
    return (
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <br/>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default XCounter;