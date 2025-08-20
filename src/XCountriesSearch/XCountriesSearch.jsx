import React, { useEffect, useState } from "react";
import "./XCountriesSearch.css";

const XCountriesSearch = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch countries data
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilteredData(res);
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = data.filter((country) =>
      country?.name?.common?.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="countriesContainer">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search for countries..."
        value={searchTerm}
        onChange={handleSearch}
        className="searchInput"
      />

      {/* Countries Grid */}
      <div className="countriesWrapper">
        {filteredData.map((country) => {
          const image =
            country?.flags?.png || country?.flags?.svg || "/no-flag.png";
          const name = country?.name?.common || "Unnamed Country";

          return (
            <div key={country?.cca3} className="country-card">
              <img
                src={image}
                alt={`${name} flag`}
                className="country-flag"
              />
              <p className="country-name">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default XCountriesSearch;
