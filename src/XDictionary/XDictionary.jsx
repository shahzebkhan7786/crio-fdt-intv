import React, { useState } from 'react';

const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
]

const XDictionary = () => {
    const [text, setText] = useState("");
    const [definition, setDefinition] = useState()

    const handleChange = e=> setText(e.target.value);

    const handleClick = ()=> {
        let item = dictionary.find(i=> i.word.toLocaleLowerCase() === text.toLocaleLowerCase());
        setDefinition(item ? item.meaning : "Word not found in the dictionary.");
    }

    return (
        <div>
            <h1>Dictionary App</h1>
            <input onChange={handleChange} type='text' placeholder='Search for a word...' />
            <button onClick={handleClick}>Search</button>
            <h4>Definition:</h4>
            <p>{definition}</p>
        </div>
    );
};

export default XDictionary;