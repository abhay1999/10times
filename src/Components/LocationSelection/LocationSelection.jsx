import React, { useState, useEffect } from 'react';
import { AiOutlineEnvironment } from 'react-icons/ai';
import './LocationSelection.css'

const LocationSelection = ({ onLocationChange }) => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    // Fetch the list of countries from the REST Countries API
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.name,
          code: country.alpha2Code,
        }));
        setCountryOptions(countries);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    onLocationChange(countryCode); // You can pass the country code if needed
  };

  return (
    <div className="location-input">
      <AiOutlineEnvironment className="gps-icon" />
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countryOptions.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelection;
