import React, { useEffect, useState } from 'react';

const FetchBasic = () => {
  const [data, setData] = useState(null);
  const [loading,setLoading]=useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* {data ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )} */}

      {(loading)? <p>loading...</p>:<ul>
        {data?.map((d,index)=>(
          <li key={index}>{d.name}</li>
        ))}</ul>}
    </>
  );
};

export default FetchBasic;
