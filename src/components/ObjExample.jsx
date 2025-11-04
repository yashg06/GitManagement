import React, { useState } from 'react'

const ObjExample = () => {
    const[data,setData]=useState({
        name:"",
        age:""
    })
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
        e.preventDefault();
        alert(`Hello ${data.name}`)
    }
  return (
    <>
    <input type="text" name='name' onChange={handleChange} value={data.name} placeholder='Write the username'/>&nbsp;&nbsp;
    <input type="number" name='age' onChange={handleChange} value={data.age} placeholder='Write the age'/>&nbsp;&nbsp;
    <button onClick={handleClick}>Submit</button>
    {data.name && data.age && <h1>Hello {data.name}, your age is {data.age}</h1>}
    </>
  )
}

export default ObjExample