import React, { useEffect, useState } from 'react';
import "./countries.css";
import Card from '../Card/Card';

const Countries = (props) => {
    const { parentData, parent } = props;
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        if(parent) return; // data is given from XCountriesSearch

        fetchCountries(); // else create your own data
    }, [])

    const fetchCountries = async ()=>{
        const url = "https://restcountries.com/v3.1/all"
        try{
            const res = await fetch(url);
            const data = await res.json();
            if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}`);
              }
            setData(data)
        }catch(error){
            console.error(error);
        }
        // console.log(data);
    }

    const displayFLags = ()=>{
        let arr = parent ? [...parentData] : [...data];
        return arr?.map(cou=> <Card image={cou?.flags?.png} name={cou?.name?.common}/>);

    }

    return (
        <>
        <h1>Countries App</h1>
        <div className='countriesBody'>
            {displayFLags()}
        </div>
        </>
    );
};

export default Countries;