import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CountrySearch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState("");

    function makeCountry(e) {
        setCountry(e.target.value);
    }

    async function ambilData() {
        setLoading(true);
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const result = response.data.filter(item => item.name.common.toLowerCase() === country.toLowerCase());
            setData(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setCountry("");
        }
    }

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <section className="flex flex-col items-center">
                <div className="flex flex-col gap-1">
                    <label htmlFor="countryName">Enter the name of the country you want to search</label>
                    <input 
                        onChange={makeCountry} 
                        value={country} 
                        className="border border-blue-600 rounded-lg px-2 py-1" 
                        type="text" 
                        id="countryName" 
                    />
                </div>
                <div>
                    <button 
                        onClick={ambilData} 
                        className="px-2 py-1 rounded-md mt-3 mb-3 bg-blue-400" 
                        type="button"
                    >
                        Submit
                    </button>
                </div>
            </section>

            <section>
                <div className="flex gap-5 rounded-lg px-2 py-2 ml-5 mr-5 font-bold">
                    {data.length > 0 ? (
                        data.map((country, index) => (
                            <Link  key={index} to={`/CountryDetail/${country.name.common}`}>
                                <ul className="bg-red-200 rounded-md">
                                    <li className="line-clamp-1 p-1 bg-blue-200 rounded-t-md font-bold px-2 py-2">
                                        {country.name.common}
                                    </li>
                                    <button className="bg-blue-400 rounded-b-md font-bold px-2 py-2">
                                        Click for more details
                                    </button>
                                </ul>
                            </Link>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            </section>
        </>
    );
}


