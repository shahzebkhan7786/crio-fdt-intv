import React, { useEffect, useState } from 'react';
import Countries from '../countries/Countries';

const XCountriesSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchCountries();
    }, [])

    useEffect(()=>{
        if(!searchText?.length) return setFilteredData(null);
        searchCountries();
    }, [searchText])

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
    const searchCountries = ()=>{
        //name.common
        const filtered = data.filter(i=>{
            // i?.name?.common has searchText return true
            const countryName = i?.name?.common;
            if(countryName.length < searchText.length) return false;

            let searchPtr = 0, countryPtr = 0;
            while(countryPtr < countryName.length){
                if(countryName[countryPtr]?.toLocaleLowerCase() === searchText[searchPtr]?.toLocaleLowerCase()){
                    if(searchPtr === searchText.length-1) return true;
                    countryPtr++;
                    searchPtr++;
                }else{
                    searchPtr=0;
                    countryPtr++;
                }
            }
            return false;
        })

        setFilteredData(filtered)
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <input style={{width: "300px", marginTop: "1rem"}} type='text' value={searchText} onChange={e=> setSearchText(e.target.value)}/>
            <Countries parentData={filteredData ? filteredData : data} parent="XCountriesSearch"/>
        </div>
    );
};

export default XCountriesSearch;