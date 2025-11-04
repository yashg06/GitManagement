import React, { useState } from 'react'

const ArrayExample = () => {
    const[item,setItem]=useState("");
    const[data,setData]=useState([]);
    const handleClick=(e)=>{
        e.preventDefault();
        setData([...data,item])
    }
  return (
    <>
        <input type="text" value={item} placeholder='Write here to add to the list' onChange={(e)=>setItem(e.target.value)}/>    
        &nbsp;
        <button onClick={handleClick}>Add Item</button>
        <ul>
           {(data)? data.map((data)=>(
            <li>{data}</li>
           )):<p>Data is not added upto now!</p>}
        </ul>
    </>
  )
}

export default ArrayExample