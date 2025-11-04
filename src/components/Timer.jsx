import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // if(time>=5) return setTime(0);  
    const timer = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer); 
  }, [time]); 

  return (
    <>
      {time} sec
    </>
  );
}

export default Timer;
