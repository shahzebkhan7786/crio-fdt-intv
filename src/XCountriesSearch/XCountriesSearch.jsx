import React, { useEffect, useState } from 'react';
import Countries from '../countries/Countries';
// import Card from '../Card/Card';
import "./XCountriesSearch.css";

const XCountriesSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchCountries();
    }, [])

    // useEffect(()=>{
        // searchCountries();
    // }, [searchText])

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

    //        c
    //I N D I A

    //  i
    //I A
    const searchCountries = (str)=>{
        //name.common
        // const filtered = data.filter(i=>{
        //     // i?.name?.common has searchText return true
        //     const countryName = i?.name?.common;
        //     if(countryName.length < searchText.length) return false;

        //     let searchPtr = 0, countryPtr = 0;
        //     while(countryPtr < countryName.length){
        //         if(countryName[countryPtr]?.toLocaleLowerCase() === searchText[searchPtr]?.toLocaleLowerCase()){
        //             if(searchPtr === searchText.length-1) return true;
        //             countryPtr++;
        //             searchPtr++;
        //         }else{
        //             searchPtr=0;
        //             countryPtr++;
        //         }
        //     }
        //     return false;
        // })
        if(!str || !str.length) return setFilteredData(null);

        // const filteredCountries = ;
        setFilteredData(data.filter((country) => country.name.common.toLowerCase().includes(str.toLowerCase())))
    }
    const Card = (props) => {
        const { image, name} = props;
        return (
            <div className='card container' style={{flexDirection: 'column'}}>
                <img src={image} alt={`${name} flag`} />
                <h2>{name}</h2>
            </div>
        );
    };

    const displayFLags = ()=>{
        // let arr = filteredData && filteredData?.length ? filteredData : data;
        let arr = filteredData ? filteredData : data;
        return arr?.map(cou=> <Card key={cou?.cca3} image={cou?.flags?.png} name={cou?.name?.common}/>);

    }

    const handleSearch = evt=>{
        setSearchText(evt.target.value)
        searchCountries(evt.target.value);
    }

    return (
        data &&
        <div className='XCountriesSearch'>
            <input  type='text' value={searchText} onChange={handleSearch}/>
            {/* <div className='countriesBody' style={{display: "flex", flexDirection: "column", alignItems: "center"}}> */}
            <div className='countriesBody countriesWrapper'>
                {displayFLags()}
            </div>
        </div>
    );
};

export default XCountriesSearch;