import React, { useRef, useState } from 'react';
import "./XWeatherApp.css";
import axios from "axios";
import WeatherCard from './WeatherCard';

const endpoint = "https://api.weatherapi.com/v1/current.json";
const apiKey = "09e3bcd598154fd4b57162328232310";

const XWeatherApp = () => {
    const [cityName, setCityName] = useState("");
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)

    const handleChange = evt=>{
        setCityName(evt.target.value);
        // setData(null);
    }

    const handleSubmit = async evt=>{
        evt.preventDefault();
        
        setLoading(true);
        setData(null);
        try{
            const res = await axios.get(endpoint, {
                params: {
                    key: apiKey,
                    q: cityName
                }
            })
            
            if(res.status !== 200 || res.statusCode === 500) throw new Error(`${res.status} ${res.statusText}`);
            else setData(res.data);
        }catch(error){
            alert("Failed to fetch weather data");
        }finally{
            setLoading(false)
        }
    }
    

    return (
        <div className='XWeatherApp'>
            <div className='searchBar'>
                <input required value={cityName} onChange={handleChange} type='text' placeholder='Enter city name'/>
                <button onClick={handleSubmit}>Search</button>
            </div>
            {
                data
                ?
                <div className='weather-cards'>
                    <WeatherCard name={"Temperature"} data={`${data?.current?.temp_c}°C`}/>
                    <WeatherCard name={"Humidity"} data={`${data?.current?.humidity}%`}/>
                    <WeatherCard name={"Condition"} data={data?.current?.condition?.text}/>
                    <WeatherCard name={"Wind Speed"} data={`${data?.current?.wind_kph} kph`}/>
                </div>
                :
                null
            }
            <p>{loading && "Loading data..."}</p>
            
        </div>
    );
};

export default XWeatherApp;