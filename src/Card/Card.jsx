import React from 'react';
import "./card.css"
const Card = (props) => {
    const { image, name } = props;
    return (
        <div className='card'>
            <img src={image} alt={`${name} flag`} />
            <h4>{name}</h4>
        </div>
    );
};

export default Card;