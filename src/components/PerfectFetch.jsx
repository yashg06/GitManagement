import React, { useEffect, useState } from 'react'

const PerfectFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`Unable to fetch ${response.status}`)
                    // setError("Unable to fetch");
                }
                const data = await response.json();
                console.log(data);
                setData(data);
            } catch (err){
                console.log(err);
                setError("Failed to fetch try again later");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
        {loading && <p>loading....</p>}
        {error && <p style={{color:"red"}}>{error}</p>}
        {!loading && !error && <ul>
            {data.map((data,index)=>(
                <li key={index}>{data.name}</li>
            ))}
            </ul>}
        </>
    )
}

export default PerfectFetch;
