import React from 'react';
import "./card.css"
const Card = (props) => {
    const { image, name} = props;
    return (
        <div className='card container' style={{flexDirection: 'column'}}>
            <img src={image} alt={`${name} flag`} />
            <h2>{name}</h2>
        </div>
    );
};

export default Card;
