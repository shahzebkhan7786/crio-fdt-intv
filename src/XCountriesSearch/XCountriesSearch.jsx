import React, { useEffect, useState } from 'react';
import Countries from '../countries/Countries';
import Card from '../Card/Card';

const XCountriesSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchCountries();
    }, [])

    useEffect(()=>{
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

        const filteredCountries = data.filter((country) =>
            country.name.common.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filteredCountries)
    }

    const displayFLags = ()=>{
        let arr = filteredData && filteredData?.length ? filteredData : data;
        return arr?.map(cou=> <Card image={cou?.flags?.png} name={cou?.name?.common}/>);

    }

    return (
        <div >
            <input  type='text' value={searchText} onChange={e=> setSearchText(e.target.value)}/>
                {displayFLags()}
            {/* <div className='countriesBody' style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            </div> */}
        </div>
    );
};

export default XCountriesSearch;