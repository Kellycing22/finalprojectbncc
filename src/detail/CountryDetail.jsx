import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetail() {
    const { name } = useParams();  
    const [data, setData] = useState(null);  
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then(function (response) {
                setData(response.data[0]); 
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setLoading(false);
            });
    }, [name]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data found.</div>;
    }

    return (
        <div>
            <h1>{data.name.common}</h1>
            <img src={data.flags.png} alt={`Flag of ${data.name.common}`} width="200" />
            <p>Capital: {data.capital ? data.capital[0] : "N/A"}</p>
            <p>Population: {data.population?.toLocaleString()}</p>
            <p>Area: {data.area?.toLocaleString()} km²</p>
            <p>Region: {data.region}</p>
            <p>Currency: {data.currencies ? Object.values(data.currencies)[0].name : "N/A"}</p>
            <p>Language(s): {data.languages ? Object.values(data.languages).join(", ") : "N/A"}</p>
        </div>
    );
}






