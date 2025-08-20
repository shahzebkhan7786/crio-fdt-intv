import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../Card/Card'; // Ensure the path is correct
import "./XCountriesSearch.css";

const XCountriesSearch = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(null);

    // Fetch countries from API on mount
    useEffect(() => {
        const fetchCountries = async () => {
            const url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
            try {
                const res = await axios.get(url);
                console.log("API response:", res.data);
                setData(res.data);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    // Filter countries based on search text
    useEffect(() => {
        if (!searchText) {
            setFilteredData(null);
        } else {
            const filtered = data.filter(country =>
                country?.common?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [searchText, data]);

    // Handle search input changes
    const handleSearch = (evt) => {
        setSearchText(evt.target.value);
    };

    // Render country cards
    const displayFlags = () => {
        const countriesToDisplay = filteredData || data;

        return countriesToDisplay.map((country, index) => {
            const image = country?.png || "/no-flag.png"; // ✅ updated
            const name = country?.common || "Unnamed Country"; // ✅ updated

            return (
                <Card
                    key={index}  // fallback key since no cca3 in API
                    image={image}
                    name={name}
                />
            );
        });
    };

    if (!data.length) return <div>Loading...</div>;

    return (
        <div className='XCountriesSearch'>
            <input
                type='text'
                placeholder='Search countries...'
                value={searchText}
                onChange={handleSearch}
            />
            <div className='countriesBody countriesWrapper'>
                {displayFlags()}
            </div>
        </div>
    );
};

export default XCountriesSearch;
