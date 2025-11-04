import React, { useState } from 'react'

const InputChange = () => {
    const [input,setInput]=useState('This is default');
  return (
    <>
        <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Write Something' />
        <h2>{input}</h2>
        <button onClick={()=>setInput(input)}>Submit</button>
    </>
  )
}

export default InputChange