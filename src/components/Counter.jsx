import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Incriment</button>
        <button onClick={()=>setCount(count-1)}>Decriment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default Counter