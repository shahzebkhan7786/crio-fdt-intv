import React from 'react';

const WeatherCard = (props) => {
    const { name, data } = props;
    return (
        <div className='weather-card'>
            <h4>{name}</h4>
            <p>{data}</p>
        </div>
    );
};

export default WeatherCard;