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
    }

    const handleSubmit = async evt=>{
        evt.preventDefault();
        
        setLoading(true);

        try{
            const res = await axios.get(endpoint, {
                params: {
                    key: apiKey,
                    q: cityName
                }
            })
            if (res.status !== 200) {
                throw new Error(`${res.status} ${res.statusText}`);
            }
            console.log(res.data);
            setData(res.data);
        }catch(error){
            alert("Failed to fetch weather data");
        }finally{
            setLoading(false)
        }
    }
    

    return (
        <div className='XWeatherApp'>
            <form onSubmit={handleSubmit}>
            <input required value={cityName} onChange={handleChange} type='text' placeholder='Enter city name'/>
            <button type='submit'>Search</button>
            </form>
            {loading && <p>Loading data…</p>}
            {
                data
                ?
                <div>
                    <WeatherCard name={"Temperature"} data={data?.current?.temp_c}/>
                    <WeatherCard name={"Humidity"} data={data?.current?.humidity}/>
                    <WeatherCard name={"Condition"} data={data?.current?.condition?.text}/>
                    <WeatherCard name={"Wind Speed"} data={data?.current?.wind_kph}/>
                </div>
                :
                null
            }
        </div>
    );
};

export default XWeatherApp;