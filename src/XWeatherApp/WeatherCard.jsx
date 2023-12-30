import React from 'react';
import "./XWeatherApp.css"

const WeatherCard = (props) => {
    const { name, data } = props;
    return (
        <div className='weather-card'>
            <h3>{name}</h3>
            <p>{data}</p>
        </div>
    );
};

export default WeatherCard;