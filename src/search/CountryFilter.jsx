import axios from "axios";
import { useState, useEffect } from "react";
import './CountryFilter.css'; // Assuming you have a CSS file for custom styling

export default function CountryFilter() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [continent, setContinent] = useState("");
    const [language, setLanguage] = useState("");
    const [independent, setIndependent] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const handleFilter = () => {
        let results = data;

        if (continent) {
            results = results.filter(country => country.continents.includes(continent));
        }

        if (language) {
            results = results.filter(country =>
                country.languages && Object.values(country.languages).includes(language)
            );
        }

        if (independent !== "") {
            results = results.filter(country => country.independent === (independent === "true"));
        }

        setFilteredData(results);
    };

    return (
        <div className="filter-container">
            <div className="filter-controls">
                <label className="filter-label">
                    Continent:
                    <select
                        onChange={(e) => setContinent(e.target.value)}
                        value={continent}
                        className="filter-select"
                    >
                        <option value="">All</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Americas">Americas</option>
                    </select>
                </label>

                <label className="filter-label">
                    Language:
                    <select
                        onChange={(e) => setLanguage(e.target.value)}
                        value={language}
                        className="filter-select"
                    >
                        <option value="">All</option>
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Arabic">Arabic</option>
                    </select>
                </label>

                <label className="filter-label">
                    Independent:
                    <select
                        onChange={(e) => setIndependent(e.target.value)}
                        value={independent}
                        className="filter-select"
                    >
                        <option value="">All</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </label>

                <button
                    onClick={handleFilter}
                    className="filter-button"
                >
                    Filter
                </button>
            </div>

            <div className="country-grid">
                {filteredData.length > 0 ? (
                    filteredData.map((country, index) => (
                        <div key={index} className="country-card">
                            <h2 className="country-name">{country.name.common}</h2>
                            <p className="country-detail"><strong>Continent:</strong> {country.continents.join(', ')}</p>
                            <p className="country-detail"><strong>Language:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
                            <p className="country-detail"><strong>Independent:</strong> {country.independent ? 'Yes' : 'No'}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}


