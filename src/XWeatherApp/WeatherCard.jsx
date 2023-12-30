import React from 'react';

const WeatherCard = (props) => {
    const { name, data } = props;
    return (
        <div className='weather-card'>
            <h2>{name}</h2>
            <p>{data}</p>
        </div>
    );
};

export default WeatherCard;