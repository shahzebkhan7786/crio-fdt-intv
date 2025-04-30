import React from 'react';
import "./card.css";

const Card = ({ image, name }) => {
    const fallbackImage = "https://via.placeholder.com/150?text=No+Flag";

    return (
        <div className='card container' style={{ flexDirection: 'column' }}>
            <img
                src={image || fallbackImage}
                alt={name ? `${name} flag` : "Country flag"}
            />
            <h2>{name}</h2>
        </div>
    );
};

export default Card;
