import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetail() {
    const { name } = useParams();  // Extract the country name from the URL
    const [data, setData] = useState(null);  // State to hold country data
    const [loading, setLoading] = useState(false);  // State to manage loading status

    async function ambilData() {
        setLoading(true);  // Set loading to true when data fetching starts
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
            setData(response.data[0]);  // Set the first country from the response data
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);  // Set loading to false when data fetching ends
        }
    }

    useEffect(() => {
        ambilData();  // Fetch data when component mounts or when `name` changes
    }, [name]);

    if (loading) {
        return <div>Loading...</div>;  // Show loading state while data is being fetched
    }

    if (!data) {
        return <div>No data found.</div>;  // Show this if no data is found
    }

    // Render the country details
    return (
        <div className="country-detail p-4 bg-blue-100 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">{data.name.common}</h1>
            <img src={data.flags.png} alt={`Flag of ${data.name.common}`} className="w-48 h-auto mb-4" />
            <ul className="text-lg">
                <li><strong>Capital:</strong> {data.capital ? data.capital[0] : "N/A"}</li>
                <li><strong>Population:</strong> {data.population.toLocaleString()}</li>
                <li><strong>Area:</strong> {data.area.toLocaleString()} km²</li>
                <li><strong>Region:</strong> {data.region}</li>
                <li><strong>Currency:</strong> {data.currencies ? Object.values(data.currencies)[0].name : "N/A"}</li>
                <li><strong>Language(s):</strong> {data.languages ? Object.values(data.languages).join(", ") : "N/A"}</li>
            </ul>
        </div>
    );
}





