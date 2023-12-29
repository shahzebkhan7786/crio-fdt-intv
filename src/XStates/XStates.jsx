import React, { useEffect, useState } from 'react';

const mainUrl = " https://crio-location-selector.onrender.com";

const XStates = () => {
    const [allCountries, setAllCountries] = useState();
    const [allStates, setAllStates] = useState();
    const [allCities, setAllCities] = useState();

    const [countryName, setCountryName] = useState();
    const [stateName, setStateName] = useState();
    const [cityName, setCityName] = useState();

    const fetchData = async (type, cityName)=>{
        let url;
        if(type === "countries") url = `${mainUrl}/countries`;
        if(type === "states") url = `${mainUrl}/country=${countryName}/states`;
        if(type === "cities") url = `${mainUrl}/country=${countryName}/state=${stateName}/cities`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            // console.log("fetching ", type, " ",data)
            if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}`);
              }
              if(type === "countries") setAllCountries(data);
              if(type === "states") setAllStates(data)
              if(type === "cities") setAllCities(data);
        }catch(error){
            console.error(error);
            return null;
        }
    }

    // const loadData = async (type)=>{
    //     let countryData = await fetchData();
    //     setCountry(countryData);
    // }

    useEffect(()=> {
        fetchData("countries");
    }, [])

    useEffect(()=>{
        if(!countryName) return;
        fetchData("states");
    }, [countryName])

    useEffect(()=>{
        if(!stateName) return;
        fetchData("cities");
    }, [stateName])


    //functions
    const SelectComp = props=>{
        const { name, opts, varName } = props;

        const handleClick = (evt)=>{
            const value = evt.target.value
            // console.log(evt)
            if(name === "country") setCountryName(value);
            if(name === "state") setStateName(value);
            if(name === "city") setCityName(value);
        }

        const options = ()=>{
            return opts?.map(i=> {
                return <option value={i} >{i}</option>
            })
        }

        let flag = opts ? false : true;
        console.log(flag)
        return (
            <select name={name} id={name} disabled={flag} onChange={handleClick} value={opts}>
                <option value="Select a" selected>Select a {name}</option>
                {options()}
            </select>
        )
    }

    return (
        <div>
            <h1>Select Location</h1>
            <SelectComp name={"country"} opts={allCountries}/>
            <SelectComp name={"state"} opts={allStates}/>
            <SelectComp name={"city"} opts={allCities}/>

            {cityName && <p>You selected {cityName}, {stateName}, {countryName}</p>}
        </div>
    );
};

export default XStates;