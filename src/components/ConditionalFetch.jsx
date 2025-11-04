import React, { useEffect, useState } from 'react'

const ConditionalFetch = () => {
    const [userID, setUserID] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async (userID) => {
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
            const result = await response.json();
            console.log(result);
            setData(result);
            setLoading(false);
        };

        if (userID !== null) {   
            fetchData(userID);
        }
    }, [userID]);

    return (
        <>
            <button onClick={() => setUserID(1)}>Fetch User 1</button>
            <button onClick={() => setUserID(2)}>Fetch User 2</button>
            {(data)? <p>{data.name}</p>:<p>Data not found...</p>}
        </>
    )
}

export default ConditionalFetch;
